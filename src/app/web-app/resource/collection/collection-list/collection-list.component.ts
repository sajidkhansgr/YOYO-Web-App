import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { CollectionService } from '../collection.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FLDR_ICON } from '../../../../shared/constants';

import { ShareMailComponent } from '../../../../shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from '../../../../shared/components/get-link/get-link.component';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  view!: boolean; disabled!: boolean; loading!: boolean;
  colctnArr!: any[]; selColctn: any; selColctnArr!: any[];
  colctnForm!: FormGroup;
  multiForm!: number;
  fldrIcon: string = FLDR_ICON;
  cols!: any[]; sort: any;
  activeColctn!: number; isActiveColctn!: boolean;

  constructor(
    private modalService: NgbModal,
    private colctnSrv: CollectionService,
    private fb: FormBuilder,
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
    this.colctnArr = []; this.selColctn = undefined; this.selColctnArr = [];
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
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
            this.listColctn();
          } else {
            this.toastr.error(`Unable to ${actDeac} collection${s}`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  // collection open modal
  colctnModal(modal: any, type: string, colctn?: any) {
    if (type == 'add') {
      this.multiForm = 1;
    } else if (type == 'ren') {
      this.multiForm = 2;
      this.selColctn = colctn;
      this.colctnForm.patchValue({ ...colctn });
    } else if (type == 'dupl') {
      this.multiForm = 3;
      this.selColctn = colctn;
      this.colctnForm.patchValue({ ...colctn });
    }
    this.openModal(modal);
  }

  // collection form submit
  submitColctn() {
    if (this.colctnForm.valid) {
      this.disabled = true;
      let colctnData: any = {
        ...this.colctnForm.value
      };
      if (this.multiForm == 1) {
        this.addColctn(colctnData);
      } else if (this.multiForm == 2) {
        colctnData.id = this.selColctn.id;
        this.renColct(colctnData);
      } else if (this.multiForm == 3) {
        colctnData.collectionNewName = colctnData.name;
        colctnData.sourceCollectionId = this.selColctn.id;
        this.duplColct(colctnData);
      }
    }
  }

  // duplicate collection
  duplColct(colctnData: any) {
    this.colctnSrv.duplColctn(colctnData).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.toastr.success(data.message || 'Collection duplicated successfully', 'Success!');
        this.listColctn();
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // rename collection
  renColct(colctnData: any) {
    this.colctnSrv.renColctn(colctnData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection renamed successfully', 'Success!');
        this.listColctn();
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // add collection
  addColctn(colctnData: any) {
    this.colctnSrv.addColctn(colctnData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection added successfully', 'Success!');
        this.listColctn();
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
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
      console.log(data);
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

  cmnModal(type: string) {
    if (type == 'email')
      this.openModal(ShareMailComponent);
    else if (type == 'getLink')
      this.openModal(GetLinkComponent);
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.dismissModal();
  }
}
