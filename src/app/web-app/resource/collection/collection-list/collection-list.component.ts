import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { CollectionService } from '../collection.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FLDR_ICON } from '../../../../shared/constants';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  view!: boolean; disabled!: boolean; loading!: boolean;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array
  colctnArr!: any[]; selColctn: any; selColctnArr!: any[];
  colctnForm!: FormGroup;
  multiForm!: number;
  showBotDiv!: boolean;
  fldrIcon: string = FLDR_ICON;
  isAsc!: boolean; sortCol: any;

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
    this.listColct();
  }

  initialiseState() {
    this.view = true; this.disabled = false; this.loading = true;
    this.colctnArr = []; this.selColctn = undefined; this.selColctnArr = [];
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.multiForm = 0;
    this.showBotDiv = false;
    this.isAsc = true; this.sortCol = 'name';
  }

  // show content
  showContent(id: any) {
    this.router.navigate(['/web-app/resource/collections/' + id]);
  }

  // ***** collection *****
  // on selecting a collection
  selMe(val: any, id: number) {
    if (val) {
      this.selColctnArr.push(id);
    } else {
      this.selColctnArr = this.selColctnArr.filter((data: any) => data != id);
    }
    if (this.selColctnArr.length > 0) {
      this.showBotDiv = true;
    } else {
      this.showBotDiv = false;
    }
  }

  // delete collection
  delColctn(id: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete this collection?`,
        title: `Delete Collection`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.colctnSrv.delColctn(id).subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.toastr.success(data.message || 'Collection deleted successfully', 'Success!');
            this.listColct();
          }
        }, (err: any) => {

        });
      }
    })
  }

  // bulk delete collection
  bulkDelColctn() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete these collections?`,
        title: `Delete Collections`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.colctnSrv.bulkDelColctn(this.selColctnArr).subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'All collections deleted successfully', 'Success!');
            this.listColct();
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
        this.listColct();
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
        this.listColct();
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
        this.listColct();
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // get collection list
  listColct() {
    this.loading = true;
    let query = {
      pageNo: 0,
      isAscending: this.isAsc,
      sortColumn: this.sortCol
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

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.dismissModal();
  }

}
