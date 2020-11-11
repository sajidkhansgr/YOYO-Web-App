import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


import { ROLES, USR_ROLES } from '../../shared/constants';
import { User } from '../../shared/models/user';
import { Group } from '../../shared/models/group';
import { CommonValidations } from '../../shared/validations/common-validations';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { GroupService } from '../group/group.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() lmtPage: any;
  input: any; searInit!: boolean;searchTxt!: string;
  @ViewChild("sear", { static: false }) set altRefIn(el: ElementRef) {
    this.input = el;
    if (this.input && this.input?.nativeElement && !this.searInit) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          tap(() => {
            this.userList();
          })
        )
        .subscribe();
      this.searInit = true;
    }
  }
  visbCols: any[] = [{ n: "Role", key: "role", dir: 1, }];
  hidCols: any[] = [{ n: "Property", key: "prop", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, },
  { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }];
  cols: any[] = [{ n: "Name", dir: 1, key: "name" }];
  roles = ROLES;usrRoles = USR_ROLES;
  usrForm!: FormGroup;usrLoading: boolean=false;
  pageNo!: number;lstLoading: boolean=false;pageSize!: number;usrs!: any[];
  showRowInfo: boolean = false;rowInfo: any;isEdit: boolean = false;
  grps!: Group[];
  selectable = true; removable = true;selGrps: any = [];

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private usrServ: UserService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private grpServ: GroupService
  ) { }

  ngOnInit(): void {
    this.cols.push(...this.visbCols);
    this.pageSize = this.lmtPage[0]; this.pageNo = 1;
    this.initForm();
    this.userList();
  }

  initForm(){
    this.usrForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, CommonValidations.emailValidator]],
      roleId: ['', [Validators.required]],
      languageId: ['', [Validators.required]],
      group: [''],
      employeeStatus: [true],
      // letEmployeeCreatePassword: [true],
      // sendLoginInstructionEmail: [false],
      // enforceEmployeePasswordReset: [false]
    });
    this.grpsList();
  }

  userList(){
    this.lstLoading = true;
    let params:any = {
      pageNo: this.pageNo, pageSize: this.pageSize,
      searchText: this.searchTxt
    }
    this.usrServ.emplList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.usrs = data.result.results;
        }else{
          this.usrs = [];
        }
        this.lstLoading = false;
      }, (err: any) => {
        this.usrs = [];
        this.lstLoading = false;
      });
  }

  chngPageSize(){
    this.userList();
  }

  togglePassword($event: any){
    if($event.value){
      this.usrForm.removeControl('password');
    }else{
      this.usrForm.addControl('password', new FormControl(''));
      this.usrForm.controls['password'].setValidators([Validators.required]);
    }
    this.usrForm.updateValueAndValidity();
  }

  toggleNgDropdown = (myDrop: any) => {
    myDrop.toggle();
  }

  outsideCloseDD = (dropdown: any, event?: any) => {
    if (!event.target!.classList.contains('fas')) {
      if (dropdown!.classList.contains('show')) {
        dropdown!.classList.remove('show');
      }
    }
  }

  saveHdrChngs = (event: any) => {
    let nData = this.cols.slice(0, 1);
    this.cols = [...nData, ...this.visbCols];
    this.closeDropdown(event);
  }

  toggleDropdown = (event: any) => {
    if (event.target!.classList.contains('fas')) {
      event.target.parentNode.nextSibling!.classList.toggle('show');
    } else {
      event.target.nextSibling!.classList.toggle('show');
    }
  }

  closeDropdown = (event: any) => {
    event.target.parentNode.parentNode!.classList.remove('show');
  }

  // toggle user info
  toggleInfo(row: User) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.showRowInfo = false;
      this.rowInfo = {};
    } else {
      this.rowInfo = row;
      console.log(this.rowInfo);
      this.showRowInfo = true;
    }
  }

  closeDoc = () => {
    this.showRowInfo = false;
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

  onSubmit(){
    if(this.usrForm.valid){
      this.usrLoading = true;
      let usrData = {
        ...this.usrForm.value
      }
      delete usrData.group;
      if(this.selGrps && this.selGrps.length>0){
        usrData.employeeGroups = this.selGrps.map((grp:any) => grp.id);
      }
      usrData.employeeStatus = this.usrForm.getRawValue().employeeStatus?1:2;
      if(this.isEdit){
        this.editUsr(usrData);
      }else{
        this.addUsr(usrData);
      }
    }
  }

  // ADD User
  addUsr(usrData: any) {
    this.usrServ.addEmpl(usrData)
      .subscribe((data: any) => {
        // console.log(data, 'data');
        if(data){
          this.toastr.success(data.message || 'User added successfully', 'Success!');
          this.disMissMdodal();
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
        // console.log(data, 'data');
        if(data){
          this.toastr.success(data.message || 'User updated successfully', 'Success!');
          this.disMissMdodal();
          this.isEdit = false; this.showRowInfo = false; this.rowInfo = {};
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
    this.grpServ.groupList({ pageNo: 0})
    .subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        this.grps = data.result.results;
      }else{
        this.grps = [];
      }
    }, (err: any) => {
      console.log(err);
      this.grps = [];
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

  openModal(content: any, type?:string) {
    if(type=='add' || type=='edit'){
      this.usrForm.reset();
      this.selGrps = [];
      if(type=='add'){
        this.isEdit = false;
        this.usrForm.controls['employeeStatus'].disable();
        this.addControls(['letEmployeeCreatePassword','sendLoginInstructionEmail','enforceEmployeePasswordReset']);
        this.usrForm.patchValue({
          letEmployeeCreatePassword: true,sendLoginInstructionEmail: false,enforceEmployeePasswordReset: false,
          employeeStatus: true
        })
      }else{
        this.usrForm.patchValue({
          ...this.rowInfo,
          employeeStatus: this.rowInfo.employeeStatus==1?true:false
        })
        this.usrForm.controls['employeeStatus'].enable();
        if(this.rowInfo && this.rowInfo.employeeGroups && this.rowInfo.employeeGroups.length>0){
          this.selGrps = this.rowInfo.employeeGroups.map((grp:any) => ({id:grp.groupId,name:grp.groupName}));
        }
        this.removeControls(['letEmployeeCreatePassword','sendLoginInstructionEmail','enforceEmployeePasswordReset']);
        this.isEdit = true;
      }
      this.usrForm.updateValueAndValidity();
    }else{
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.disMissMdodal();
  }

}
