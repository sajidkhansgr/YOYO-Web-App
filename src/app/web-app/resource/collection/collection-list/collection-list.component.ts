import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {
  view!: boolean; disabled!: boolean; loading!: boolean;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array
  colctnArr: any; selColctn: any;
  colctnForm!: FormGroup;
  multiForm!: number;

  constructor(
    private modalService: NgbModal,
    private colctnSrv: CollectionService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
    this.listColct();
  }

  initialiseState() {
    this.view = true; this.disabled = false; this.loading = true;
    this.colctnArr = []; this.selColctn = undefined;
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.multiForm = 0;
  }

  // ***** collection *****
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
    this.colctnSrv.duplColct(colctnData).subscribe((data: any) => {
      console.log(data);
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

  // rename collection
  renColct(colctnData: any) {
    this.colctnSrv.renColct(colctnData).subscribe((data: any) => {
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
    this.colctnSrv.addColct(colctnData).subscribe((data: any) => {
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
    this.colctnSrv.colctList({}).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.colctnArr = data.result;
      } else {
        this.colctnArr = [];
      }
      this.loading = false;
    }, (err: any) => {
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

}
