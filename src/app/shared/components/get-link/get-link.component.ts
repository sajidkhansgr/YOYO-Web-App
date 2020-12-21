import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddRsrcComponent } from '../add-rsrc/add-rsrc.component';
import { CollectionService } from 'src/app/web-app/resource/collection/collection.service';
import { ToastrService } from 'ngx-toastr';
import { DEF_ICON } from '../../constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareService } from 'src/app/web-app/share/share.service';

@Component({
  selector: 'app-get-link',
  templateUrl: './get-link.component.html',
  styleUrls: ['./get-link.component.scss']
})
export class GetLinkComponent implements OnInit {
  @Input() private type!: string;
  @Input() private data!: any;
  defImg: string = DEF_ICON;
  viewSel!: any[];
  loading!: boolean;
  viewMe!: boolean;
  linkForm!: FormGroup;
  link!: string;
  disabled!: boolean;

  constructor(
    public modalRef: NgbActiveModal,
    private modalService: NgbModal,
    private colctnSrv: CollectionService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private shareSrv: ShareService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
  }

  initialiseState() {
    this.viewSel = [];
    this.viewMe = true;
    this.link = '';
    this.disabled = false;
    this.loading = true;
    this.viewSel = [];
    this.linkForm = this.fb.group({
      name: ['abc', [Validators.required]]
    });
    if (this.data) {
      if (this.type === 'collection') {
        this.getCntntByClctn(this.data.id);
      } else if (this.type === 'content') {
        this.loading = false;
        this.viewSel = Array.isArray(this.data) ? [...this.data] : [this.data];
      } else if (this.type === 'multi-collection') {
        for (let i = 0; i < this.data.length; i++) {
          this.getCntntByClctn(this.data[i]);
        }
      }
    }
    this.linkForm = this.fb.group({
      name: ['', [Validators.required]],
      allowDownload: [true]
    });
  }

  // add more resource
  openRsrcModal() {
    const modalRef = this.modalService.open(AddRsrcComponent, { size: 'lg' });
    modalRef.result.then((result: any) => {
      if (result) {
        this.viewSel.push(...result);
      }
    });
  }

  // remove resource
  removeMe(sel: any) {
    this.viewSel = this.viewSel.filter((data) => {
      if (sel.contentId && (sel.contentId == data.contentId)) {
        if (sel.pageNo || data.pageNo) {
          return data.pageNo !== sel.pageNo;
        } else {
          return data.contentId !== sel.contentId;
        }
      } else if (sel.id && (sel.id == data.id)) {
        if (sel.pageNo || data.pageNo) {
          return data.pageNo !== sel.pageNo;
        } else {
          return data.id !== sel.id;
        }
      } else {
        return true;
      }
    });
  }

  // get content by collection id
  getCntntByClctn(id: number) {
    this.colctnSrv.getContentColctn(id).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result)) {
        this.viewSel.push(...data.result);
        console.log(this.viewSel);
      } else {
        this.toastr.error(data.message || 'Something went wrong', 'Error!');
        this.modalRef.dismiss();
      }
      this.loading = false;
    }, (err: any) => {
      this.loading = false;
      this.modalRef.dismiss();
    });
  }

  // resource button (done/change)
  rsrcBtn(type: string) {
    if (type == 'done') {
      this.getContentLink();
    } else if (type == 'change') {
      this.removeLink();
    }
  }

  // get share link of content
  getContentLink() {
    this.disabled = true;
    let data: any = {
      ...this.linkForm.value,
      shareContents: []
    }
    for (let i = 0; i < this.viewSel.length; i++) {
      data.shareContents.push({
        contentId: this.viewSel[i].contentId ? this.viewSel[i].contentId : this.viewSel[i].id,
        pageNumber: this.viewSel[i].pageNo || 0
      });
    }
    this.shareSrv.addShare(data).subscribe((data: any) => {
      if (data && data.result) {
        this.link = data.result;
        this.viewMe = false;
      } else {
        this.toastr.error(data.message || 'Something went wrong', 'Error!');
        this.viewMe = true;
      }
      this.disabled = false;
    }, (err: any) => {
      this.viewMe = true;
      this.disabled = false;
    });
  }

  // remove share link
  removeLink() {
    this.disabled = true;
    let id = this.link.split('/')[this.link.split('/').length - 1];
    this.shareSrv.delLink(id).subscribe((data: any) => {
      if (data) {
        this.link = '';
        this.viewMe = true;
      } else {
        this.toastr.error(data.message || 'Something went wrong', 'Error!');
      }
      this.disabled = false;
    }, (err: any) => {
      this.link = '';
      this.disabled = false;
    });
  }

  // copy link button
  copyLink = (link: any) => {
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
    this.toastr.success('Link copied', 'Copied!');
  }
}
