import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { Anncmnt } from '../shared/models/anncmnt';
import { CommnService } from './commn.service'

@Component({
  selector: 'app-commn',
  templateUrl: './commn.component.html',
  styleUrls: ['./commn.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class CommnComponent implements OnInit {
  showDoc: boolean = false;
  showNewAnn: boolean = false;
  anncmntForm!: FormGroup;isEdit!: boolean;
  disabled: boolean = false; loading: boolean = true;
  ancmntData!: Anncmnt | undefined;
  anncmnts!: Anncmnt[];
  pageNum!: number; lmtPage!: Array<number>; pageSize!: number;
  searchTxt!: string;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private commnServ: CommnService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    console.log("addAnncmnt")
    this.getAncmnts();
    this.initialiseState();
  }

  initialiseState() {
    this.anncmntForm = this.fb.group({
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]],
      notifyByEmail: [false, [Validators.required]],
      requestToUpdate: [false, [Validators.required]],
      sendLater: [true, [Validators.required]],
      sendToGroup: [false],
      recipients: [''],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]]
    });
  }

  // list of Annoucements
  getAncmnts() {
    this.loading = true;
    this.commnServ.anncmntList({ pageNo: this.pageNum, pageSize: this.pageSize, searchText: this.searchTxt})
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          console.log(data);
          this.anncmnts = data.result.results;
        }else{
          this.anncmnts = [];
        }
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.loading = false;
      });
  }

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  onSubmit(){
    console.log(this.anncmntForm, "this.anncmntForm")
    if (this.anncmntForm.valid) {
      this.disabled = true;
      let anncmntData: any = {
        ...this.anncmntForm.value
      }
      if(this.isEdit){
        // this.editAnncmnt(anncmntData);
      }else{
        console.log("addAnncmnt")
        this.addAnncmnt(anncmntData);
      }
    }
  }

  addAnncmnt(anncmntData: any) {
    this.commnServ.addAnncmnt(anncmntData)
     .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Annoucement added successfully', 'Success!');
          this.disMissMdodal();
          //get all annoucem
        } else {
          this.toastr.error(data.result.data || 'Unable to add Annoucement', 'Error!');
        }
        this.disabled = false;
     }, (err: any) => {
        this.disabled = false;
     });
  }

  openModal(content: any,type?: string) {
    // console.log('abc');
    if(type==='edit'){
      this.isEdit = true;
    }else{
      this.isEdit = false;
      this.anncmntForm.reset();
    }
    this.modalService.open(content, { centered: true }).result
      .then((result) => {
        // console.log(`Closed with: ${result}`);
      }, (reason) => {
        // console.log('dism reason', reason);
      });
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.disMissMdodal();
  }
}
