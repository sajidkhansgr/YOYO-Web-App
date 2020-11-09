import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


import { ROLES } from '../../shared/constants';
import { CommonValidations } from '../../shared/validations/common-validations';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  showDoc: boolean = false;
  @Input() lmtPage: any;
  visbCols: any[] = [{ n: "Role", key: "role", dir: 1, }];
  hidCols: any[] = [{ n: "Property", key: "prop", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, },
  { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }];
  cols: any[] = [{ n: "Name", dir: 1, key: "name" }];
  data: any[] = [
    { name: "test", email: "email@email.com", date: "19 Aug 2020", date2: "19 Aug 2020", role: "User" },
    { name: "tes1t", email: "1email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U1ser" },
    { name: "tes2t", email: "2email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U2ser" }
  ];
  roles = ROLES;
  usrForm!: FormGroup;usrLoading: boolean=false;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private usrServ: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cols.push(...this.visbCols);
    this.initForm();
  }

  initForm(){
    this.usrForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, CommonValidations.emailValidator]],
      roleId: ['', [Validators.required]],
      languageId: ['', [Validators.required]],
      letEmployeeCreatePassword: [true],
      sendLoginInstructionEmail: [false],
      enforceEmployeePasswordReset: [false]
    });
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

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
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
      this.usrServ.addEmpl(this.usrForm.value)
        .subscribe((data: any) => {
          // console.log(data, 'data');
          if(data){
            this.toastr.success(data.message || 'User added successfully', 'Success!');
            this.disMissMdodal();
          }
          this.usrLoading = false;
        }, (err: any) => {
          this.usrLoading = false;
        })
    }
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
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

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.disMissMdodal();
  }

}
