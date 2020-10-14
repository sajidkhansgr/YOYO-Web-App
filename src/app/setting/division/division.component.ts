import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HubService } from '../../hub/hub.service';
import { Hub } from '../../shared/models/hub';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  selHub!: Hub | null;
  hubs: Hub[] = [];
  loading: boolean = true;
  hubForm!: FormGroup; disabled: boolean = false;
  type!: string | undefined;
  constructor(
    private hubServ: HubService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getHubs();
    this.hubForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  getHubs() {
    this.hubServ.hubList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.hubs = data.result.results;
          this.selHub = data.result.results[0];
        }
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.loading = false;
      });
  }

  hubChange(hub: Hub) {
    this.selHub = hub;
  }

  openModal(content: any, formType?: string) {
    this.type = formType;
    if(this.type=='add' ||this.type=='edit'){
      this.hubForm.reset();
      if(this.type=='edit'){
        this.setHubVal();
      }
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
      }, (reason) => {
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  setHubVal(){
    this.hubForm.patchValue({...this!.selHub})
  }

  submit(){
    if(this.hubForm.valid){
      this.disabled = true;
      let hubData: any = {
        ...this.hubForm.value
      }
      if(this.type=='add'){
        this.addHub(hubData);
      }else{
        this.updHub(hubData);
      }
    }
  }

  // ADD Hub
  addHub(hubData: any) {
    this.hubServ.addHub(hubData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message||'Hub added successfully', 'Success!');
          this.disMissMdodal();
        } else {
          this.toastr.error('Unable to add Hub', 'Error!');
        }
        this.disabled = false;
      }, (err:any) => {
        this.disabled = false;
      });
  }

  // EDIT Hub
  updHub(hubData: any) {
    hubData.id = this.selHub!.id;
    this.hubServ.updateHub(hubData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message||'Hub updated successfully', 'Success!');
          this.disMissMdodal();
        } else {
          this.toastr.error(data.result.data || 'Unable to update Hub', 'Error!');
        }
        this.disabled = false;
      }, (err:any) => {
        this.disabled = false;
      });
  }

  disMissMdodal(){
    if(this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.disMissMdodal();
  }

}
