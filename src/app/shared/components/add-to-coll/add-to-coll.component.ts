import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CollService } from '../coll/coll.service';
import { FLDR_ICON } from '../../constants';
import { Collection } from '../../models/collection';

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
    private collServ: CollService
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

  addCntntToColl(coll: Collection) {
    let data: any = {
      id: coll.id, contents: [],
      pages: { pageNumbers: [] }
    }
    if (this.data.type == 'wrkspc') {
      data.contents = [this.data.id];
    } else if (this.data.type == 'coll-inr') {
      if (this.data.pageNo) {
        data.pages = {
          pageNumbers: [this.data.pageNo],
          contentId: this.data.contentId
        }
      } else {
        data.contents = [this.data.contentId];
      }
    } else if (this.data.type == 'my-file') {
      data.contents = [this.data.id];
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
