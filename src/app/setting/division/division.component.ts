import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HubService } from '../../hub/hub.service';
import { DivisionService } from './division.service';
import { Hub } from '../../shared/models/hub';
import { DataService } from '../../shared/services/data.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  selHub!: Hub;usrInfo: any | null;
  hubs: Hub[] = [];
  loading: boolean = true;
  hubForm!: FormGroup; disabled: boolean = false;
  type!: string | undefined;
  // routerSubs: Subscription;
  constructor(
    private hubServ: HubService,
    private divServ: DivisionService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dataServ: DataService,
    private tokenDataServ: TokenDataService,
    private dialog: MatDialog
  ) {
    // this.routerSubs = this.dataServ.currentInfo
    //   .subscribe((data: any) => {
    //     if (this.hubs.length >= 0 && Array.isArray(data) && data.length > 0) {
    //       this.hubs = data;
    //       if(this.selHub){
    //         const index = this.hubs.findIndex(ele => ele.id == this.selHub.id);
    //         if (index >= 0) {
    //           this.selHub = this.hubs[index];
    //         }
    //       }
    //     }
    //   })
  }

  ngOnInit(): void {
    this.getHubs();
    this.usrInfo = this.tokenDataServ.getUser();
    this.hubForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  getHubs() {
    this.loading=true;this.hubs = [];
    this.hubServ.hubList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.hubs = data.result.results;
          this.selHub = data.result.results[0];
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
      });
  }

  hubChange(hub: Hub) {
    this.selHub = hub;
  }

  openModal(content: any, formType?: string) {
    this.type = formType;
    if (this.type == 'add' || this.type == 'edit') {
      this.hubForm.reset();
      if (this.type == 'edit') {
        this.setHubVal();
      }
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
      .then((result) => {
      }, (reason) => {
      });
  }

  setHubVal() {
    this.hubForm.patchValue({ ...this.selHub })
  }

  submit() {
    if (this.hubForm.valid) {
      this.disabled = true;
      let hubData: any = {
        ...this.hubForm.value
      }
      if (this.type == 'add') {
        this.addHub(hubData);
      } else {
        this.updHub(hubData);
      }
    }
  }

  // ADD Hub
  addHub(hubData: any) {
    this.divServ.addHub(hubData)
      .subscribe((data: any) => {
        if (data) {
          this.getHubs();
          this.dataServ.passDataSend('hub-add');
          this.toastr.success(data.message || 'Hub added successfully', 'Success!');
          this.disMissMdodal();
        } else {
          this.toastr.error('Unable to add Hub', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.disabled = false;
      });
  }

  // EDIT Hub
  updHub(hubData: any) {
    hubData.id = this.selHub.id;
    this.divServ.updHub(hubData)
      .subscribe((data: any) => {
        if (data) {
          this.selHub.name = hubData.name;
          this.localUpd();
          this.dataServ.passDataSend('hub-upd');
          this.toastr.success(data.message || 'Hub updated successfully', 'Success!');
          this.disMissMdodal();
        } else {
          this.toastr.error(data.result.data || 'Unable to update Hub', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.disabled = false;
      });
  }

  actDeactHub(){
    // selHub
    let actDeac: string = `${this.selHub.isActive ? 'deactivate' : 'activate'}`;
    let isAct: boolean = this.selHub.isActive ? false : true;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this hub?`,
        title: `${this.selHub.isActive ? 'Deactivate' : 'Activate'} hub`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.divServ.actDeactHub(this.selHub.id.toString(), isAct).subscribe((data: any) => {
          if (data) {
            this.selHub.isActive = isAct;
            this.localUpd();
            this.dataServ.passDataSend('hub-upd');
            this.toastr.success(`Hub ${actDeac}d successfully`, 'Success!');
          } else {
            this.toastr.error(`Unable to ${actDeac} hub`, 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  localUpd(){
    const index = this.hubs.findIndex((ele: any) => ele.id == this.selHub.id);
    if (index >= 0) {
      this.hubs[index] = this.selHub;
    }
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.disMissMdodal();
    // if (!!this.routerSubs) {
    //   this.routerSubs.unsubscribe();
    // }
  }

}
