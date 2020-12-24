import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CollService } from './coll.service';

@Component({
  selector: 'app-coll',
  templateUrl: './coll.component.html',
  styleUrls: ['./coll.component.scss']
})
export class CollComponent implements OnInit {
  @Input() public colctn!: any;
  @Input() public type!: string;
  @Input() public cntntData!: any;
  disabled!: boolean;
  colctnForm!: FormGroup;
  multiForm!: number;

  constructor(
    public modalRef: NgbActiveModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private collServ: CollService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
    if (this.cntntData && !Array.isArray(this.cntntData)) {
      this.cntntData = [this.cntntData];
    }
    console.log(this.cntntData);
  }

  initialiseState() {
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    if (this.type == 'add' || this.type == 'add-content') {
      this.multiForm = 1;
    } else if (this.type == 'ren') {
      this.multiForm = 2;
    } else if (this.type == 'dupl') {
      this.multiForm = 3;
    }
    if (this.colctn) {
      this.colctnForm.patchValue({ ...this.colctn });
    }
    this.disabled = false;
  }

  // collection form submit
  submitColctn() {
    if (this.colctnForm.valid) {
      this.disabled = true;
      let colctnData: any = {
        ...this.colctnForm.value
      };
      if (this.type == 'add-content') {
        colctnData.contents = []; colctnData.contentPages = [];
        for (let i = 0; i < this.cntntData.length; i++) {
          if (this.cntntData[i].pageNo && ((Array.isArray(this.cntntData[i].pageNo) && this.cntntData[i].pageNo.length > 0) || !Array.isArray(this.cntntData[i].pageNo))) {
            colctnData.contentPages.push({
              pageNumbers: Array.isArray(this.cntntData[i].pageNo) ? [...this.cntntData[i].pageNo] : [this.cntntData[i].pageNo],
              contentId: this.cntntData[i].contentId ? this.cntntData[i].contentId : this.cntntData[i].id
            });
          } else {
            colctnData.contents.push(this.cntntData[i].contentId ? this.cntntData[i].contentId : this.cntntData[i].id);
          }
        }
      }
      if (this.multiForm == 1) {
        this.addColctn(colctnData);
      } else if (this.multiForm == 2) {
        colctnData.id = this.colctn.id;
        this.renColct(colctnData);
      } else if (this.multiForm == 3) {
        colctnData.collectionNewName = colctnData.name;
        colctnData.sourceCollectionId = this.colctn.id;
        this.duplColct(colctnData);
      }
    }
  }

  // duplicate collection
  duplColct(colctnData: any) {
    this.collServ.duplColctn(colctnData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection duplicated successfully', 'Success!');
        this.modalRef.close(true);
      }
      this.modalRef.dismiss();
      this.disabled = false;
    }, (err: any) => {
      this.modalRef.dismiss();
      this.disabled = false;
    });
  }

  // rename collection
  renColct(colctnData: any) {
    this.collServ.renColctn(colctnData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection renamed successfully', 'Success!');
        this.modalRef.close(this.colctnForm.value);
      }
      this.modalRef.dismiss();
      this.disabled = false;
    }, (err: any) => {
      this.modalRef.dismiss();
      this.disabled = false;
    });
  }

  // add collection
  addColctn(colctnData: any) {
    this.collServ.addColctn(colctnData, this.type).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection added successfully', 'Success!');
        this.modalRef.close(true);
      }
      this.modalRef.dismiss();
      this.disabled = false;
    }, (err: any) => {
      this.modalRef.dismiss();
      this.disabled = false;
    });
  }

}
