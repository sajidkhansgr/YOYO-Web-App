import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { TIME, GRP_TYPE } from '../shared/constants';
import { Announcement } from '../shared/models/announcement';
import { Group } from '../shared/models/group';
import { Workspace } from '../shared/models/workspace';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { CommnService } from './commn.service'
import { GroupService } from '../user/group/group.service';
import { ContentWorkspaceService } from '../hub/content-workspace/content-workspace.service';

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
  ancmntForm!: FormGroup; isEdit!: boolean;
  disabled: boolean = false; loading: boolean = true;
  ancmntData!: Announcement | undefined;
  anncmnts!: Announcement[];
  pageNum!: number; lmtPage!: Array<number>; pageSize!: number;
  searchTxt!: string; time = TIME; grpType = GRP_TYPE;
  selectable = true; removable: boolean = true;
  grps: Group[] = []; selGrps: Group[] = [];
  wrkSpcs: Workspace[] = []; selWrkSpcs: Workspace[] = [];
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private commnServ: CommnService,
    private grpServ: GroupService,
    private wrkSpcServ: ContentWorkspaceService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAncmnts();
    this.initialiseState();
  }

  initialiseState() {
    this.ancmntForm = this.fb.group({
      subject: ['', [Validators.required]],
      body: ['', [Validators.required]],
      notifyByEmail: [false],
      requestToUpdate: [false],
      sendLater: [false],
      sendToGroup: [''],
      recipients: [''],
      // usrGrps: [''],
      // usrWrkSpcs: [''],
      date: [''],
      time: ['']
    });
  }

  setFormData(isData?: any) {
    if (isData && isData.id) {
    } else {
      this.ancmntForm.patchValue({
        subject: '', notifyByEmail: false, requestToUpdate: false,
        sendLater: false, sendToGroup: '', date: '', time: ''
      })
    }
  }

  // list of Annoucements
  getAncmnts() {
    this.loading = true;
    this.commnServ.anncmntList({ pageNo: this.pageNum, pageSize: this.pageSize, searchText: this.searchTxt })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.anncmnts = data.result.results;
        } else {
          this.anncmnts = [];
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
      });
  }

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  onSubmit() {
    if (this.ancmntForm.valid) {
      this.disabled = true;
      let anncmntData: any = {
        ...this.ancmntForm.value
      }
      if (this.isEdit) {
        // this.editAncmnt(anncmntData);
      } else {
        console.log("addAncmnt")
        this.addAncmnt(anncmntData);
      }
    }
  }

  addAncmnt(anncmntData: any) {
    this.commnServ.addAncmnt(anncmntData)
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

  openModal(content: any, type?: string) {
    // console.log('abc');
    if (type === 'edit') {
      this.isEdit = true;
    } else {
      this.isEdit = false;
      this.ancmntForm.reset();
      this.setFormData()
    }
    this.modalService.open(content, { centered: true }).result
      .then((result) => {
        // console.log(`Closed with: ${result}`);
      }, (reason) => {
        // console.log('dism reason', reason);
      });
  }

  enbDisbDateTime($event: any) {
    if ($event.checked) {
      this.setValdOrErr('date', true);
      this.setValdOrErr('time', true);
    } else {
      this.setValdOrErr('date', false);
      this.setValdOrErr('time', false);
    }
    this.ancmntForm.updateValueAndValidity();
  }

  setValdOrErr(type: string, isValidate: boolean) {
    if (isValidate) {
      this.ancmntForm.controls[type].setValidators([Validators.required]);
      this.ancmntForm.controls[type].enable();
    } else {
      this.ancmntForm.controls[type].setErrors(null);
      this.ancmntForm.controls[type].disable();
    }
  }

  changeGrp($event: any) {
    if ($event.value == 1) {
      // usrGrps usrWrkSpcs
      this.removeControl(['usrGrps', 'usrWrkSpcs']);
    } else if ($event.value == 2) {
      this.removeControl(['usrGrps']);
      this.addControls(['usrWrkSpcs']);
      this.getWrkSpcs();
    } else {
      this.removeControl(['usrWrkSpcs']);
      this.addControls(['usrGrps']);
      this.getGroups();
    }
    this.ancmntForm.updateValueAndValidity();
  }

  removeControl(names: Array<string>) {
    for (let i = 0; i < names.length; i++) {
      if (this.ancmntForm.controls[names[i]])
        this.ancmntForm.removeControl(names[i]);
    }
  }

  addControls(names: Array<string>) {
    for (let i = 0; i < names.length; i++) {
      if (!this.ancmntForm.controls[names[i]])
        this.ancmntForm.addControl(names[i], new FormControl(''))
    }
  }

  getGroups() {
    if (this.grps.length <= 0) {
      this.grpServ.groupList({ pageNo: 0 })
        .subscribe((data: any) => {
          if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
            this.grps = data.result.results;
          } else {
          }
        }, (err: any) => {
          console.log(err);
        });
    }
  }

  getWrkSpcs() {
    if (this.wrkSpcs.length <= 0) {
      this.wrkSpcServ.wrkspcList({ pageNo: 0 })
        .subscribe((data: any) => {
          if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
            this.wrkSpcs = data.result.results;
          } else {
          }
        }, (err: any) => {
          console.log(err);
        });
    }
  }

  displayFn = (grp: any) => {
    return (grp && grp.id) ? grp.name : '';
  }

  selFromAutoComp(data: any, type: 'selGrps' | 'selWrkSpcs') {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info("This" + type === 'selGrps' ? 'group' : 'workspace' + " is already selected", "Selected");
    } else {
      this[type].push(data);
    }
  }

  remove(data: any, type: 'selGrps' | 'selWrkSpcs'): void {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this[type].splice(index, 1);
    }
  }

  archAncmnt(ancmnt?: Announcement){
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to archive this annoucement?`,
        title: `Archive Announcement`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(tag);
        this.commnServ.archAncmnt(ancmnt!.id.toString()).subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message||'Announcement archived successfully', 'Success!');
          } else {
            this.toastr.error('Unable to arhive announcement', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.dialog.closeAll();
    this.disMissMdodal();
  }
}
