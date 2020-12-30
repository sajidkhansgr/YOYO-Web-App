import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { CommonValidations } from '../../shared/validations/common-validations';
import { TokenDataService } from '../../shared/services/token-data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm!: FormGroup;
  loading = false; token!: string | null; email!: string | null; isEnforce!: string | null;
  hidePass = true; hideCPass = true;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private tokenDataServ: TokenDataService,
    private router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.isEnforce = this.route.snapshot.queryParamMap.get('enforce');
    this.resetPassForm = this.fb.group({
      pswd: ['', [Validators.required, Validators.minLength(6)]],
      confirmPswd: ['', [Validators.required, CommonValidations.MatchPassword]]
    });
    this.resetPassForm.get('pswd')!.valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.resetPassForm.get('confirmPswd')!.updateValueAndValidity();
      });
  }

  // reset password
  resetPassword() {
    if (this.resetPassForm.valid) {
      this.loading = true;
      let passData: any = {
        email: this.email, token: this.token,
        password: this.resetPassForm.value.pswd,
        confirmPassword: this.resetPassForm.value.confirmPswd
      };
      this.authSer.resetPass(passData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success("Password reset successfully", 'Success');
            this.tokenDataServ.removeAll();
            this.router.navigate(['/auth/login']);
          } else {
            this.toastr.error("Unable to send email, please try after sometime", 'Error');
          }
          this.loading = false;
        }, (err: any) => {
          this.loading = false;
        })
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
