import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PasswordService } from '../../shared/services/password.service';
import { UserService } from '../../user/user.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { LNGS } from '../../shared/constants';
import { CommonValidations } from '../../shared/validations/common-validations';
import { EnumHelper } from '../../shared/enum-helper';
import { ChngPassComponent } from '../../shared/components/chng-pass/chng-pass.component';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  chngPassForm!: FormGroup; passLoading: boolean = false;
  profForm!: FormGroup; profLoading: boolean = false;usrInfo!: User;
  hidePass = true; hideCPass = true; hideCurPass = true;
  lngs = LNGS;lngArr!: any;loading: boolean = false;
  // Private
  private _unsubscribeAll: Subject<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private pswdServ: PasswordService,
    private usrServ: UserService,
    private tokenDataServ: TokenDataService
  ) {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.loading = true;
    let url = this.router.url.split('/');
    this.lngArr = EnumHelper.enumToArray(this.lngs);
    if (url && url.length > 0 && url[url.length - 1] == 'account') {
      this.router.navigate(['account/profile']);
    }
    this.usrInfo = this.tokenDataServ.getUser();
    if(this.usrInfo && this.usrInfo.id){
      this.initForm();
      this.getProfile();
    }else{
      this.tokenDataServ.remTkn();
      this.toastr.error('Please login again', 'Error!');
      this.router.navigate(['auth/login'],{queryParams:{redirect_uri: window.location.href}});
    }
  }

  initForm(){
    this.profForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, CommonValidations.emailValidator]],
      languageId: ['', [Validators.required]],
      timeZone: ['', [Validators.required]]
    });
      this.chngPassForm = this.fb.group({
        currPswd: ['', Validators.required],
        pswd: ['', Validators.required],
        confirmPswd: ['', [Validators.required, CommonValidations.MatchPassword]]
      });
      this.chngPassForm.get('pswd')!.valueChanges
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(() => {
            this.chngPassForm.get('confirmPswd')!.updateValueAndValidity();
        });
  }

  getProfile(){
    this.usrServ.viewEmpl(this.usrInfo.id.toString())
    .subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.usrInfo = data.result;
        this.setUsrData();
        // if (this.rowInfo.language && this.rowInfo.language.id)
        //   this.rowInfo.languageId = this.rowInfo.language.id;
        // if (this.rowInfo.role && this.rowInfo.role.id)
        //   this.rowInfo.roleId = this.rowInfo.role.id;
      } else {
      }
      this.loading = false;
    }, (err: any) => {
      this.loading = false;
    });
  }

  setUsrData(){
    this.usrInfo.name = this.usrInfo.firstName?this.usrInfo.lastName?this.usrInfo.firstName+' '+this.usrInfo.lastName:this.usrInfo.firstName:'N/A';
    this.usrInfo.languageId = this.usrInfo.language && this.usrInfo.language.id ? this.usrInfo.language.id : '';
    this.profForm.patchValue({
      ...this.usrInfo
    })
  }

  // change password
  changePassword() {
    if (this.chngPassForm.valid) {
      this.passLoading = true;
      let passData: any = {
        currentPassword: this.chngPassForm.value.currPswd,
        newPassword:  this.chngPassForm.value.pswd
      }
      this.pswdServ.changePassword(passData)
        .subscribe((data: any) => {
          if(data){
            this.toastr.success(data.message || 'Password changed successfully', 'Success!');
            this.disMissMdodal();
          }
          this.passLoading = false;
        }, (err: any) => {
          this.passLoading = false;
        })
    }
  }

  // update profile
  updProfile() {
    if (this.profForm.valid) {
      this.profLoading = true;
      let profData: any = {
        ...this.profForm.value,
        id: this.usrInfo.id
      }
      this.usrServ.updateEmpl(profData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'User profile updated successfully', 'Success!');
            this.disMissMdodal();
          }
          this.profLoading = false
        }, (err: any) => {
        this.profLoading = false
        })
    }
  }

  openModal(content: any, isChange?:any) {
    this.modalService.open(isChange?ChngPassComponent:content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
    .then((result: any) => {
    }, (reason: any) => {
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
