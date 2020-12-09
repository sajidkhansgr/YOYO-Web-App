import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { CollectionService } from '../collection.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FLDR_ICON } from '../../../../shared/constants';

import { ShareMailComponent } from '../../../../shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from '../../../../shared/components/get-link/get-link.component';
import { CollComponent } from 'src/app/shared/components/coll/coll.component';
import { Collection } from 'src/app/shared/models/collection';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  view!: boolean; disabled!: boolean; loading!: boolean;
  colctnArr!: any[]; selColctnArr!: any[];
  multiForm!: number;
  fldrIcon: string = FLDR_ICON;
  cols!: any[]; sort: any;
  activeColctn!: number; isActiveColctn!: boolean;

  constructor(
    private modalService: NgbModal,
    private colctnSrv: CollectionService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initialiseState();
    this.listColctn();
  }

  initialiseState() {
    this.view = true; this.disabled = false; this.loading = true;
    this.colctnArr = []; this.selColctnArr = [];
    this.multiForm = 0;
    this.sort = { sortColumn: 'updatedDate', isAscending: false }
    this.cols = [{ n: "Name", asc: false, k: "name" }, { n: "Date Modified", asc: false, k: "updatedDate" }];
    this.activeColctn = 1; this.isActiveColctn = true;
  }

  // show content
  showContent(id: any) {
    this.router.navigate(['/web-app/resource/collections/' + id]);
  }

  // ***** collection *****
  // sort
  sortChange(col: any, index: number) {
    let colData = { ...col };
    for (let i = 0; i < this.cols.length; i++) {
      this.cols[i].asc = false;
    }
    colData.asc = !colData.asc;
    this.cols[index].asc = colData.asc;
    this.sort = {
      sortColumn: col.k,
      isAscending: colData.asc,
    }
    this.listColctn();
  }

  // change displayed collections (isActive)
  changeDispColctn() {
    this.activeColctn == 1 ? this.isActiveColctn = true : this.isActiveColctn = false;
    this.listColctn();
  }

  // on selecting a collection
  selMe(val: any, id: number) {
    if (val) {
      this.selColctnArr.push(id);
    } else {
      this.selColctnArr = this.selColctnArr.filter((data: any) => data != id);
    }
  }

  // activate/deactivate collection
  actDeactColctn(colctn?: number) {
    let data = colctn ? [colctn] : this.selColctnArr;
    let s = data.length == 1 ? '' : 's';
    let actDeac: string = `${this.isActiveColctn ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} ${data.length == 1 ? 'this' : 'these'} collection${s}?`,
        title: `${this.isActiveColctn ? 'Deactivate' : 'Activate'} collection${s}`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.colctnSrv.actDeactColctn(data, this.isActiveColctn ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Collection${s} ${actDeac}d successfully`, 'Success!');
            this.selColctnArr = [];
            this.listColctn();
          } else {
            this.toastr.error(`Unable to ${actDeac} collection${s}`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  // get collection list
  listColctn() {
    this.loading = true;
    this.selColctnArr = [];
    let query = {
      pageNo: 0,
      ...this.sort,
      isActive: this.isActiveColctn
    }
    this.colctnSrv.colctnList(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        this.colctnArr = data.result.results;
      } else {
        this.colctnArr = [];
      }
      this.loading = false;
    }, (err: any) => {
      this.colctnArr = [];
      this.loading = false;
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }

  // call shared modals
  cmnModal(type: string, t?: string, colctn?: Collection) {
    if (type == 'email') {
      const modalRef = this.modalService.open(ShareMailComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'collection';
      modalRef.componentInstance.data = colctn;
    } else if (type == 'getLink') {
      const modalRef = this.modalService.open(GetLinkComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'collection';
      modalRef.componentInstance.data = colctn;
    } else if (type == 'coll') {
      const modalRef = this.modalService.open(CollComponent, { size: 'lg' });
      modalRef.componentInstance.colctn = colctn;
      modalRef.componentInstance.type = t;
      modalRef.result.then((result) => {
        if (result) {
          if (t == "ren") {
            for (let i = 0; i < this.colctnArr.length; i++) {
              if (this.colctnArr[i].id == colctn!.id) {
                this.colctnArr[i].name = result.name;
              }
            }
          } else {
            this.listColctn();
          }
        }
      })
    }
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.dismissModal();
  }
}
