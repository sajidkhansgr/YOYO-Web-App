import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { ROLES, LNGS } from '../../shared/constants';
import { User } from '../../shared/models/user';
import { Group } from '../../shared/models/group';
import { CommonValidations } from '../../shared/validations/common-validations';
import { EnumHelper } from '../../shared/enum-helper';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { GroupService } from '../group/group.service';
import { TokenDataService } from '../../shared/services/token-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() lmtPage: any;
  input: any; searchTxt!: string; //searInit!: boolean;
  // @ViewChild("sear", { static: false }) set altRefIn(el: ElementRef) {
  //   this.input = el;
  //   if (this.input && this.input?.nativeElement && !this.searInit) {
  //     fromEvent(this.input.nativeElement, 'keyup')
  //       .pipe(
  //         debounceTime(1000),
  //         distinctUntilChanged(),
  //         tap(() => {
  //           this.userList();
  //         })
  //       )
  //       .subscribe();
  //     this.searInit = true;
  //   }
  // }
  searchTxtChng: Subject<string> = new Subject<string>();
  private subscription!: Subscription;

  visbCols: any[] = []; hidCols: any[] = []; cols: any[] = [];
  roles = ROLES; rolesArr!: any; lngs = LNGS; lngArr!: any;
  usrForm!: FormGroup; usrLoading: boolean = false; activeIndex: number = 0; docLoading!: boolean;
  pageNo!: number; loading: boolean = false; pageSize!: number;
  usrs!: any[]; sort: any = {};totalCount!: number;
  showRowInfo: boolean = false; rowInfo: any; isEdit: boolean = false;
  grps!: Group[];
  selectable = true; removable = true; selGrps: any = [];
  usrInfo!: any;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private usrServ: UserService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private grpServ: GroupService,
    private tokenDataServ: TokenDataService
  ) { }

  ngOnInit(): void {
    this.rolesArr = EnumHelper.enumToArray(this.roles);
    this.lngArr = EnumHelper.enumToArray(this.lngs);
    this.visbCols = [{ n: "Role", k: "roleId", asc: false },{ n: "Latest Activity", k: "latestActivity", asc: false },{ n: "Date Created", k: "createdDate", asc: false }];
    this.cols = [{ n: "Name", asc: false, k: "name" }];
    this.cols.push(...this.visbCols);
    this.usrInfo = this.tokenDataServ.getUser();
    this.initialiseState();
    this.initForm();
    this.userList();
    this.subscription = this.searchTxtChng
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.pageNo = 1;
          this.userList();
        })
      )
      .subscribe();
  }

  initialiseState() {
    this.pageSize = this.lmtPage[0]; this.pageNo = 1; this.sort = {};
    this.totalCount = 0;
  }

  // when changing page size
  pageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.userList();
  }

  // numbers to be displayed for Pagination
  changePageNo(num: number) {
    this.pageNo = num;
    this.userList();
  }

  initForm() {
    this.usrForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, CommonValidations.emailValidator]],
      roleId: ['', [Validators.required]],
      languageId: ['', [Validators.required]],
      group: [''],
      isActive: [true]
    });
    this.grpsList();
  }

  userList() {
    this.loading = true;
    this.closeDoc();
    let params: any = {
      pageNo: this.pageNo, pageSize: this.pageSize,
      searchText: this.searchTxt,
      ...this.sort
    }
    if (this.activeIndex == 1)
      params.isActive = true;
    else if (this.activeIndex == 2)
      params.isActive = false;
    this.usrs = []; this.totalCount = 0;
    this.usrServ.emplList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results)) {
          this.usrs = data.result.results;
          this.totalCount = data.result.totalCount||0;
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
      });
  }

  chngPageSize() {
    this.userList();
  }

  getName(usr: User) {
    return usr.firstName ? usr.lastName ? usr.firstName + ' ' + usr.lastName : usr.firstName : 'N/A';
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
      SortColumn: col.k === 'name' ? 'firstName' : col.k,
      IsAscending: colData.asc,
    }
    this.userList();
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
    this.initialiseState();
    this.userList();
  }

  togglePassword($event: any) {
    this.usrForm.patchValue({ enforceEmployeePasswordReset: false });
    if ($event.value) {
      this.usrForm.addControl('password', new FormControl(''));
      this.usrForm.controls['password'].setValidators([Validators.required]);
      this.usrForm.controls['sendLoginInstructionEmail'].enable();
    } else {
      this.usrForm.patchValue({ sendLoginInstructionEmail: true });
      this.usrForm.controls['sendLoginInstructionEmail'].disable();
      this.usrForm.removeControl('password');
    }
    this.usrForm.updateValueAndValidity();
  }

  saveHdrChngs = (event: any) => {
    let nData = this.cols.slice(0, 1);
    this.cols = [...nData, ...this.visbCols];
    this.closeDropdown(event);
  }

  closeDropdown = (event: any) => {
    event.target.parentNode.parentNode!.classList.remove('show');
  }

  // toggle info
  toggleInfo(usr: User) {
    if (this.showRowInfo && this.rowInfo.id == usr.id) {
      this.closeDoc();
    } else {
      //directly setting w/o hit api
      this.showRowInfo = true;
      this.docLoading = true;
      setTimeout(() => {
        this.rowInfo = usr;
        this.rowInfo.languageId = this.rowInfo.language && this.rowInfo.language.id ? this.rowInfo.language.id : '';
        this.docLoading = false;
      }, 900);
    }
  }

  closeDoc = () => {
    this.showRowInfo = false;
    this.rowInfo = {};
  }

  getUsr(usr: User) {
    this.docLoading = true;
    this.usrServ.viewEmpl(usr!.id.toString()).subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.rowInfo = data.result;
        // if (this.rowInfo.language && this.rowInfo.language.id)
        //   this.rowInfo.languageId = this.rowInfo.language.id;
        // if (this.rowInfo.role && this.rowInfo.role.id)
        //   this.rowInfo.roleId = this.rowInfo.role.id;
      } else {
        this.rowInfo = usr;
      }
      this.docLoading = false;
    }, (err: any) => {
      this.rowInfo = usr;
      this.docLoading = false;
    });
  }

  drop = (event: CdkDragDrop<string[]>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  showHideCols = (col: any, type: string, i: number) => {
    if (type === 'show') {
      this.hidCols.splice(i, 1);
      this.visbCols.push(col);
    } else {
      this.visbCols.splice(i, 1);
      this.hidCols.push(col);
    }
  }

  onSubmit() {
    if (this.usrForm.valid) {
      this.usrLoading = true;
      let usrData = {
        ...this.usrForm.getRawValue()
      }
      delete usrData.group;
      if (this.selGrps && this.selGrps.length > 0) {
        usrData.employeeGroups = this.selGrps.map((grp: any) => grp.id);
      }
      if (this.isEdit) {
        this.editUsr(usrData);
      } else {
        this.addUsr(usrData);
      }
    }
  }

  // ADD User
  addUsr(usrData: any) {
    this.usrServ.addEmpl(usrData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'User added successfully', 'Success!');
          this.dismissModal();
          this.pageNo = 1;
          this.userList();
        }
        this.usrLoading = false;
      }, (err: any) => {
        this.usrLoading = false;
      })
  }

  // EDIT User
  editUsr(usrData: any) {
    usrData.id = this.rowInfo.id;
    this.usrServ.updateEmpl(usrData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'User updated successfully', 'Success!');
          this.dismissModal();
          this.isEdit = false;
          this.pageNo = 1;
          this.userList();
        }
        this.usrLoading = false;
      }, (err: any) => {
        this.usrLoading = false;
      })
  }

  addControls(names: Array<string>) {
    for (let i = 0; i < names.length; i++) {
      if (!this.usrForm.controls[names[i]])
        this.usrForm.addControl(names[i], new FormControl(''))
    }
  }

  removeControls(names: Array<string>) {
    for (let i = 0; i < names.length; i++) {
      if (this.usrForm.controls[names[i]])
        this.usrForm.removeControl(names[i]);
    }
  }

  grpsList() {
    this.grps = [];
    this.grpServ.groupList({ pageNo: 0, isActive: true })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.grps = data.result.results;
        }
      }, (err: any) => {
      });
  }

  displayFn = (grp: any) => {
    return (grp && grp.id) ? grp.name : '';
  }

  selGrpIds(grp: any) {
    const index = this.selGrps.findIndex((ele: any) => ele.id == grp.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info("This group is already selected", "Selected");
    } else {
      this.selGrps.push(grp);
      // this.msgForm.controls['RecipientName'].setValue({});
      // this.divNameInp.nativeElement.value = '';
    }
  }

  remove(div: any): void {
    const index = this.selGrps.findIndex((ele: any) => ele.id == div.id);
    if (index >= 0) {
      this.selGrps.splice(index, 1);
    }
  }

  resendLink = (usr: User)=> {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to resend the invitation?`,
        title: `Resend Invitation`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.usrServ.resendInv(usr.id.toString()).subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message||'Resend invite successfully', 'Success!');
          } else {
            this.toastr.error('Unable to resend invite', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  openModal(content: any, type?: string) {
    if (type == 'add' || type == 'edit') {
      this.usrForm.reset();
      this.selGrps = [];
      if (type == 'add') {
        this.isEdit = false;
        this.usrForm.controls['isActive'].disable();
        this.addControls(['specifyPassword', 'sendLoginInstructionEmail', 'enforceEmployeePasswordReset','password']);
        this.usrForm.controls['sendLoginInstructionEmail'].disable();
        this.removeControls(['password']);
        this.usrForm.patchValue({
          specifyPassword: false, sendLoginInstructionEmail: true, enforceEmployeePasswordReset: false,
          isActive: true
        })
      } else {
        this.usrForm.patchValue({
          ...this.rowInfo,
          roleId: this.rowInfo.role && this.rowInfo.role.id ? this.rowInfo.role.id : ''
        })
        if(this.usrInfo && this.usrInfo.id==this.rowInfo.id){
          this.usrForm.controls['isActive'].disable();
          this.usrForm.controls['roleId'].disable();
        }else{
          this.usrForm.controls['isActive'].enable();
          this.usrForm.controls['roleId'].enable();
        }
        if (this.rowInfo && this.rowInfo.employeeGroups && this.rowInfo.employeeGroups.length > 0) {
          this.selGrps = this.rowInfo.employeeGroups.map((grp: any) => ({ id: grp.groupId, name: grp.groupName }));
        }
        this.removeControls(['specifyPassword', 'sendLoginInstructionEmail', 'enforceEmployeePasswordReset', 'password']);
        this.isEdit = true;
      }
      this.usrForm.updateValueAndValidity();
    } else {
      //other form
      this.isEdit = false;
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
      .then((result) => {

      }, (reason) => {

      });
  }

  /* This will not use as no delete
  delUsr() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete this user?`,
        title: `Deactivate user`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(catg);
        // this.usrServ.delUser(catg.id).subscribe((data: any) => {
        //   if (data) {
        //     this.toastr.success('User deleted successfully', 'Success!');
        //   } else {
        //     this.toastr.error('Unable to delete user', 'Error!');
        //   }
        // }, (err: any) => {
        //
        // });
      }
    })
  } */

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.dismissModal();
    if (!!this.subscription)
      this.subscription.unsubscribe();
  }

}
