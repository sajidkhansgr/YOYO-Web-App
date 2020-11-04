import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { CommonValidations } from '../../shared/validations/common-validations';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm!: FormGroup; disabled: boolean = false;
  hidePass = true; hideCPass = true;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private toastr: ToastrService
  ) {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.resetPassForm = this.fb.group({
      pswd: ['', Validators.required],
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
    this.disabled = true;
    if (this.resetPassForm.valid) {
      this.authSer.resetPass(this.resetPassForm.value)
        .subscribe((data: any) => {
          // console.log(data, 'data');

          this.disabled = false;
        }, (err: any) => {
          console.log(err, 'err')
          this.disabled = false;
        })
    }
  }

  ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

}
