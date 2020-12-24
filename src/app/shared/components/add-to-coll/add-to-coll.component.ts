import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CollService } from '../coll/coll.service';
import { FLDR_ICON } from '../../constants';
import { Collection } from '../../models/collection';
import { CollComponent } from '../coll/coll.component';

@Component({
  selector: 'app-add-to-coll',
  templateUrl: './add-to-coll.component.html',
  styleUrls: ['./add-to-coll.component.scss']
})
export class AddToCollComponent implements OnInit {
  @Input() private data!: any;
  collLoad: boolean = true;
  colls: any = [];
  fldrIcon: string = FLDR_ICON;

  constructor(
    public modalRef: NgbActiveModal,
    private toastr: ToastrService,
    private collServ: CollService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.listColct()
  }

  // get collection list
  listColct() {
    this.collServ.colctnList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.colls = data.result.results;
        }
        this.collLoad = false;
      }, (err: any) => {
        this.colls = [];
        this.collLoad = false;
      });
  }

  // create collection and add content to it
  addCntntColl() {
    const modalRef = this.modalService.open(CollComponent, { size: 'lg' });
    modalRef.componentInstance.type = 'add-content';
    modalRef.componentInstance.cntntData = this.data.type && this.data.type == 'multi' ? this.data.data : this.data;
    modalRef.result.then((result: any) => {
      if (result) {
        this.modalRef.dismiss();
      }
    });
  }

  // add content to collection
  addCntntToColl(coll: Collection) {
    let data: any = {
      id: coll.id, contents: [],
      contentPages: []
    }
    if (this.data.type == 'wrkspc' || this.data.type == 'my-file') {
      data.contents = [this.data.id];
    } else if (this.data.type == 'coll-inr') {
      if (this.data.pageNo) {
        data.contentPages = [{
          pageNumbers: [this.data.pageNo],
          contentId: this.data.contentId
        }];
      } else {
        data.contents = [this.data.contentId];
      }
    } else if (this.data.type == 'multi') {
      for (let i = 0; i < this.data.data.length; i++) {
        if (this.data.data[i].pageNo) {
          data.contentPages.push({
            pageNumbers: [this.data.data[i].pageNo],
            contentId: this.data.data[i].contentId ? this.data.data[i].contentId : this.data.data[i].id
          });
        } else {
          data.contents.push(this.data.data[i].contentId ? this.data.data[i].contentId : this.data.data[i].id);
        }
      }
    }
    this.collLoad = true;
    this.collServ.addContentColctn(data).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Added successfully to collection', 'Success!');
        this.modalRef.close(coll);
      } else {
        this.modalRef.dismiss();
      }
      this.collLoad = false;
    }, (err: any) => {
      this.modalRef.dismiss();
      this.collLoad = false;
    });
  }

}
