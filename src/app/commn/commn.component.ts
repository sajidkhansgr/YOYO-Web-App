import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

import { TIME, GRP_TYPE, LMT_PAGE, ANCMT_STATUS } from '../shared/constants';
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
  ancmntForm!: FormGroup; isEdit!: boolean;
  disabled: boolean = false; ancmntData!: Announcement | undefined;
  lmtPage: Array<number> = LMT_PAGE; pageNo!: number; loading: boolean = false; pageSize: number = LMT_PAGE[0];
  ancmnts!: any[]; activeIndex: number = 0; ancmntSts = ANCMT_STATUS; docLoading!: boolean;
  searchTxt!: string; time = TIME; grpType = GRP_TYPE;
  selectable = true; removable: boolean = true;
  grps: Group[] = []; selGrps: Group[] = [];
  wrkSpcs: Workspace[] = []; selWrkSpcs: Workspace[] = [];
  showRowInfo: boolean = false; rowInfo: any; sort: any = {};
  cols: any[] = [];
  totalCount!: number;
  minDate!:any;

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
    let datePipe = new DatePipe("en-US");
    this.minDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.initialiseState();
    this.initForm();
    this.getAncmnts();
  }

  initialiseState() {
    this.pageSize = this.lmtPage[0]; this.pageNo = 1;
    this.cols = []; this.sort = {};
    let commonCols = [{ n: "Subject", asc: false, k: "subject" }, { n: "Author", asc: false, k: "createdByFullName" }, { n: "Recipients", asc: false, k: "sendToGroup" }];
    let cols1 = [{ n: "Date Sent", asc: false, k: "deliveredOn" }, { n: "Read", asc: false, k: "viewPercentage" }];
    if (this.activeIndex === 0) {
      this.cols.push(...commonCols, ...cols1);
    }
    else if (this.activeIndex === 1) {
      this.cols.push(...commonCols, { n: "Scheduled", asc: false, k: "scheduledOn" });
    }
    else if (this.activeIndex === 2) {
      this.cols.push(...commonCols, ...cols1, { n: "Archived", asc: false, k: "archived" });
    }
    this.totalCount = 0;
  }

  // when changing page size
  pageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.getAncmnts();
  }

  // numbers to be displayed for Pagination
  paginationNum(num: number) {
    this.pageNo = num;
    this.getAncmnts();
  }

  initForm() {
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

  setFormData() {
    this.selWrkSpcs = [];
    this.selGrps = [];
    if (this.isEdit && this.rowInfo && this.rowInfo.id) {
      this.enbDisbDateTime({ checked: true });
      if(this.rowInfo.scheduledOn){
        let datePipe = new DatePipe("en-US");
        this.rowInfo.date = datePipe.transform(new Date(this.rowInfo.scheduledOn), 'yyyy-MM-dd');
        this.rowInfo.time = datePipe.transform(new Date(this.rowInfo.scheduledOn), 'HH:mm');
      }else{
        this.rowInfo.date = '';this.rowInfo.time = '';
      }
      this.ancmntForm.patchValue({
        ...this.rowInfo,
        sendLater: true
      })
      this.changeGrp({ value: this.rowInfo.sendToGroup });
      if (this.rowInfo.sendToGroup === 2) {
          this.selWrkSpcs = this.rowInfo.recipients;
      } else if (this.rowInfo.sendToGroup === 3) {
          this.selGrps = this.rowInfo.recipients;
      }
    } else {
      this.rowInfo = {};
      this.ancmntForm.patchValue({
        subject: '', notifyByEmail: false, requestToUpdate: false,
        sendLater: false, sendToGroup: '', date: '', time: ''
      })
      this.enbDisbDateTime({ checked: false });
    }
  }

  // list of Annoucements
  getAncmnts() {
    this.loading = true;
    this.closeDoc();
    let params: any = {
      pageNo: this.pageNo, pageSize: this.pageSize,
      searchText: this.searchTxt, ...this.sort,
      status: this.activeIndex === 2 ? 3 : this.activeIndex == 1 ? 2 : 1,
    }
    this.commnServ.ancmntList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.ancmnts = data.result.results;
          this.totalCount = data.result.totalCount;
        } else {
          this.ancmnts = [];
        }
        this.loading = false;
      }, (err: any) => {
        this.ancmnts = [];
        this.loading = false;
      });
  }

  chngPageSize() {
    this.getAncmnts();
  }

  sortChange(col: any, index: number) {
    this.loading = true;
    this.pageNo = 1;
    let colData = { ...col };
    for (let k = 0; k < this.cols.length; k++) {
      this.cols[k].asc = false;
    }
    colData.asc = !colData.asc;
    this.cols[index].asc = colData.asc;
    this.sort = {
      SortColumn: col.k,
      IsAscending: colData.asc,
    }
    this.getAncmnts();
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
    this.initialiseState();
    this.getAncmnts();
  }

  // toggle info
  toggleInfo(row: Announcement) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.closeDoc();
    } else {
      this.showRowInfo = true;
      this.docLoading = true;
      setTimeout(() => {
        this.rowInfo = row;
        this.docLoading = false;
      }, 900)
    }
  }

  closeDoc = () => {
    this.showRowInfo = false;
    this.docLoading = false;
    this.rowInfo = {};
  }

  //Not using
  getAncment(ancmnt: Announcement) {
    this.docLoading = true;
    this.commnServ.viewAncmnt(ancmnt!.id.toString()).subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.rowInfo = data.result;
      } else {
        this.rowInfo = ancmnt;
      }
      this.docLoading = false;
    }, (err: any) => {
      this.rowInfo = ancmnt;
      this.docLoading = false;
    });
  }

  onSubmit() {
    if (this.ancmntForm.valid) {
      this.disabled = true;
      let ancmntData: any = {
        ...this.ancmntForm.value
      }
      if (ancmntData.sendToGroup === 2) {
          ancmntData.recipients = this.selWrkSpcs.map((wkSpc: any) => wkSpc.id);
      } else if (ancmntData.sendToGroup === 3) {
          ancmntData.recipients = this.selGrps.map((grp: any) => grp.id);
      } else {
        ancmntData.recipients = [];
      }
      delete ancmntData.usrGrps;
      delete ancmntData.usrWrkSpcs;
      if (ancmntData.sendLater) {
        let datePipe = new DatePipe("en-US");
        ancmntData.scheduledOn = datePipe.transform(new Date(ancmntData.date), 'yyyy-MM-dd') + 'T' + ancmntData.time + ':00.000Z';
        delete ancmntData.date; delete ancmntData.time;
      }
      if (this.isEdit) {
        this.editAncmnt(ancmntData);
      } else {
        this.addAncmnt(ancmntData);
      }
    }
  }

  addAncmnt(ancmntData: any) {
    this.commnServ.addAncmnt(ancmntData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Annoucement added successfully', 'Success!');
          this.pageNo = 1;this.getAncmnts();
          this.dismissModal();
          //get all annoucem
        } else {
          this.toastr.error(data.result.data || 'Unable to add Annoucement', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.disabled = false;
      });
  }

  editAncmnt(ancmntData: any) {
    ancmntData.id = this.rowInfo.id;
    this.commnServ.updAncmnt(ancmntData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Annoucement updated successfully', 'Success!');
          this.pageNo = 1;this.getAncmnts();
          this.dismissModal();
          //get all annoucem
        } else {
          this.toastr.error(data.result.data || 'Unable to update Annoucement', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.disabled = false;
      });
  }

  openModal(content: any, type: boolean) {
    this.ancmntForm.reset();
    this.isEdit = type;
    this.setFormData();
    this.modalService.open(content, { centered: true }).result
      .then((result) => {
      }, (reason) => {
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
        });
    }
  }

  displayFn = (grp: any) => {
    return (grp && grp.id) ? grp.name : '';
  }

  selFromAutoComp(data: any, type: 'selGrps' | 'selWrkSpcs',autoSel: any) {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info("This" + type === 'selGrps' ? 'group' : 'workspace' + " is already selected", "Selected");
    } else {
      this[type].push(data);
      autoSel.value = '';
    }
  }

  remove(data: any, type: 'selGrps' | 'selWrkSpcs'): void {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this[type].splice(index, 1);
    }
  }

  archAncmnt($event: any, ancmnt?: Announcement) {
    $event.stopPropagation();
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to archive this annoucement?`,
        title: `Archive Announcement`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.commnServ.archAncmnt(ancmnt!.id.toString()).subscribe((data: any) => {
          if (data) {
            this.pageNo = 1;this.getAncmnts();
            this.toastr.success(data.message || 'Announcement archived successfully', 'Success!');
          } else {
            this.toastr.error('Unable to arhive announcement', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // open upd modal
  updAncmnt($event: any, ancmnt: Announcement, content: any) {
    $event.stopPropagation();
    this.rowInfo = ancmnt;
    this.openModal(content, true);
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.dialog.closeAll();
    this.dismissModal();
  }
}
