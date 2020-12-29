import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ToastrService } from 'ngx-toastr';

import { CollectionService } from 'src/app/web-app/resource/collection/collection.service';
import { ShareService } from 'src/app/web-app/share/share.service';
import { ShareMailService } from './share-mail.service';
import { AddRsrcComponent } from '../add-rsrc/add-rsrc.component';
import { DEF_ICON } from '../../constants';
import { CommonValidations } from '../../validations/common-validations';
import { FileHelper } from '../../file-helper';
import { QUILL } from '../../models/quill';

@Component({
  selector: 'app-share-mail',
  templateUrl: './share-mail.component.html',
  styleUrls: ['./share-mail.component.scss']
})
export class ShareMailComponent implements OnInit {
  emailForm!: FormGroup; link!: any; emailAddresses!: string[];
  disabled!: boolean;
  viewSel!: any[];
  defImg: string = DEF_ICON;
  loading!: boolean;
  @Input() private type!: string;
  @Input() private data!: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  quillConfig = QUILL;

  constructor(
    public modalRef: NgbActiveModal,
    private fb: FormBuilder,
    private mailSrv: ShareMailService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private shareSrv: ShareService,
    private colctnSrv: CollectionService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
  }

  initialiseState() {
    this.emailForm = this.fb.group({
      emailAddresses: ['', [Validators.required, CommonValidations.emailValidator]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      sendMeCopy: [false],
      allowDownload: [true]
    });
    this.disabled = false; this.emailAddresses = [];
    this.link = undefined;
    this.viewSel = [];
    this.loading = true;
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

  // for images
  getImg(d: any): string {
    return FileHelper.getImg(d, 'icon');
  }

  // add more resource
  openRsrcModal() {
    const modalRef = this.modalService.open(AddRsrcComponent, { size: 'lg' });
    modalRef.result.then((result) => {
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

  // send mail
  sendMail() {
    if (this.emailForm.valid) {
      this.disabled = true;
      let data = {
        ...this.emailForm.value,
        sendMeCopy: this.emailForm.get('sendMeCopy')!.value,
        emailAddresses: this.emailAddresses
      }
      data.body += `
      <br />
      <br />
      Attached Link: <a href="${this.link.link}">${this.link.name}</a>
      `;
      this.mailSrv.sendMail(data).subscribe((data: any) => {
        if (data && data.result) {
          this.toastr.success(data.result || 'Email sent successfully', 'Success!');
        } else {
          this.toastr.error(data.result || 'Email not sent', 'Error!');
        }
        this.disabled = false;
        this.modalRef.dismiss();
      }, (err: any) => {
        this.disabled = false;
        this.modalRef.dismiss();
      });
    }
  }

  // add chips - email addresses
  addChips(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim() && !this.emailForm.get('emailAddresses')!.hasError('invalidEmail')) {
      this.emailAddresses.push(value.trim());
    }
    if (input && !this.emailForm.get('emailAddresses')!.hasError('invalidEmail')) {
      input.value = '';
    }
  }

  // remove chip - email addresses
  removeChip(tag: any): void {
    const index = this.emailAddresses.indexOf(tag);
    if (index >= 0) {
      this.emailAddresses.splice(index, 1);
    }
  }

  // get share link of content
  getContentLink() {
    let data: any = {
      allowDownload: this.emailForm.get('allowDownload')!.value,
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
        this.link = { name: this.data.name, link: data.result };
        this.sendMail();
      } else {
        this.toastr.error(data.message || 'Something went wrong', 'Error!');
      }
    }, (err: any) => {
    });
  }

  // remove share link
  removeLink() {
    let id = this.link.link.split('/')[this.link.link.split('/').length - 1];
    this.shareSrv.delLink(id).subscribe((data: any) => {
      if (data) {
        this.link = undefined;

      } else {
        this.toastr.error(data.message || 'Something went wrong', 'Error!');
      }
    }, (err: any) => {
      this.link = undefined;
    });
  }

  // get content by collection id
  getCntntByClctn(id: number) {
    this.colctnSrv.getContentColctn(id).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result)) {
        this.viewSel.push(...data.result);
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

}
