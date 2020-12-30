import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { HubService } from '../../hub/hub.service';
import { DivisionService } from './division.service';
import { Hub } from '../../shared/models/hub';
import { Group } from '../../shared/models/group';
import { DataService } from '../../shared/services/data.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { GroupService } from '../../user/group/group.service';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  selHub!: Hub; usrInfo: any | null;
  hubs: Hub[] = [];
  loading: boolean = true;
  hubForm!: FormGroup; disabled: boolean = false;
  type!: string | undefined;
  grps: Group[] = []; grpLoad!: boolean; hubLoad: boolean = false;

  constructor(
    private hubServ: HubService,
    private divServ: DivisionService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dataServ: DataService,
    private tokenDataServ: TokenDataService,
    private dialog: MatDialog,
    private grpServ: GroupService
  ) { }

  ngOnInit(): void {
    this.getHubs();
    this.usrInfo = this.tokenDataServ.getUser();
    this.hubForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  getHubs() {
    this.loading = true; this.hubs = [];
    this.hubServ.hubList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.hubs = data.result.results;
          this.getHub(this.hubs[0]);
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
        this.hubLoad = false;
      });
  }

  hubChange(hub: Hub) {
    this.getHub(hub);
  }

  openModal(content: any, formType: string) {
    this.type = formType;
    if (this.type !== 'prm') {
      if (this.grps.length <= 0)
        this.grpsList();
      this.chkUnchkGrp();
    }
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
    hubData.groupIds = this.getSelGrp();
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
  updHub(hubData: any, isUpdGrp: boolean = false) {
    hubData.id = this.selHub.id;
    hubData.groupIds = this.getSelGrp();
    this.divServ.updHub(hubData)
      .subscribe((data: any) => {
        if (data) {
          this.selHub.groups = this.getSelGrp(true);
          if (isUpdGrp) {
            this.toastr.success('Hub groups assigned successfully', 'Success!');
          } else {
            this.selHub.name = hubData.name;
            this.localUpd();
            this.dataServ.passDataSend('hub-upd');
            this.toastr.success(data.message || 'Hub updated successfully', 'Success!');
          }
          this.disMissMdodal();
        } else {
          this.toastr.error('Please try after sometime', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.disabled = false;
      });
  }

  actDeactHub() {
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

  localUpd() {
    const index = this.hubs.findIndex((ele: any) => ele.id == this.selHub.id);
    if (index >= 0) {
      this.hubs[index] = this.selHub;
    }
  }

  getHub(hub: Hub) {
    this.hubLoad = true;
    this.hubServ.viewHub(hub.id.toString())
      .subscribe((data: any) => {
        if (data && data.result && data.result.id) {
          this.selHub = data.result;
        } else {
          this.selHub = hub;
        }
        this.hubLoad = false;
      }, (err: any) => {
        this.selHub = hub;
        this.hubLoad = false;
      });
  }

  grpsList() {
    this.grps = []; this.grpLoad = true;
    this.grpServ.groupList({ pageNo: 0, isActive: true })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.grps = data.result.results;
          this.chkUnchkGrp();
        }
        this.grpLoad = false;
      }, (err: any) => {
        this.grpLoad = false;
      });
  }

  chkUnchkGrp() {
    for (let k = 0; k < this.grps.length; k++) {
      this.grps[k].chk = false;
      if ((this.type == 'edit' || this.type == 'grp') && this.selHub && this.selHub.groups) {
        for (let l = 0; l < this.selHub.groups.length; l++) {
          if (this.grps[k].id === this.selHub.groups[l].id)
            this.grps[k].chk = true;
        }
      }
    }
  }

  getSelGrp(isAll: boolean = false) {
    let grpIds = [];
    for (let k = 0; k < this.grps.length; k++) {
      if (this.grps[k].chk) {
        if (isAll)
          grpIds.push(this.grps[k]);
        else
          grpIds.push(this.grps[k].id);
      }
    }
    return grpIds;
  }

  chngGrpChk(val: boolean, g: any) {
    g.chk = val;
  }

  updGrp() {
    this.disabled = true;
    this.updHub({ name: this.selHub.name }, true);
  }


  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.disMissMdodal();
  }
}
