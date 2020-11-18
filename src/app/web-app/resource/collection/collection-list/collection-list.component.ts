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
  colctArr: any;
  colctnForm!: FormGroup;

  constructor(
    private modalService: NgbModal,
    private colctSrv: CollectionService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
    this.listColct();
  }

  initialiseState() {
    this.view = true; this.disabled = false; this.loading = true;
    this.colctArr = [];
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  // ***** collection *****
  // add collection
  addColctn() {
    if (this.colctnForm.valid) {
      this.disabled = true;
      let colctnData: any = {
        ...this.colctnForm.value
      };
      this.colctSrv.addColct(colctnData).subscribe((data: any) => {
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
  }

  // get collection list
  listColct() {
    this.colctSrv.colctList({}).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.colctArr = data.result;
      } else {
        this.colctArr = [];
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
