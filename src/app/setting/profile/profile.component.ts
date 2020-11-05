import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CommonValidations } from '../../shared/validations/common-validations';
import { PasswordService } from '../../shared/services/password.service';
import { ChngPassComponent } from '../../shared/components/chng-pass/chng-pass.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  chngPassForm!: FormGroup; passLoading: boolean = false;
  profileForm!: FormGroup; profLoading: boolean = false;
  hidePass = true; hideCPass = true; hideCurPass = true;
  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private pswdServ: PasswordService
  ) {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    let url = this.router.url.split('/');
    if (url && url.length > 0 && url[url.length - 1] == 'account') {
      this.router.navigate(['account/profile']);
    }
    this.initForm();
  }

  initForm(){
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      language: ['', [Validators.required]],
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
          // console.log(data, 'data');
          if(data){
            this.toastr.success(data.message || 'Password changed successfully', 'Success!');
            this.disMissMdodal();
          }
          this.passLoading = false;
        }, (err: any) => {
          console.log(err, 'err')
          this.passLoading = false;
        })
    }
  }

  // update profile
  updProfile() {
    if (this.profileForm.valid) {
      this.profLoading = true;
      let profData: any = {
      }
      this.profLoading = false
    }
  }

  openModal(content: any, isChange?:any) {
    this.modalService.open(isChange?ChngPassComponent:content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
    .then((result: any) => {
      console.log(`Closed with: ${result}`);
    }, (reason: any) => {
      console.log(`Dismissed ${(reason)}`);
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
