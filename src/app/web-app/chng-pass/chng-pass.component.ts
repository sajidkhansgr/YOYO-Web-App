import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PasswordService } from '../../shared/services/password.service';
import { CommonValidations } from '../../shared/validations/common-validations';

@Component({
  selector: 'app-chng-pass',
  templateUrl: './chng-pass.component.html',
  styleUrls: ['./chng-pass.component.scss']
})
export class ChngPassComponent implements OnInit {
  chngPassForm!: FormGroup; loading: boolean = false;
  hidePass = true; hideCPass = true; hideCurPass = true;
  // Private
  private _unsubscribeAll: Subject<any>;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private pswdServ: PasswordService
  ) {

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
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
      this.loading = true;
      let passData: any = {
        currentPassword: this.chngPassForm.value.currPswd,
        newPassword: this.chngPassForm.value.pswd
      }
      this.pswdServ.changePassword(passData)
        .subscribe((data: any) => {
          // console.log(data, 'data');
          this.loading = false;
        }, (err: any) => {
          console.log(err, 'err')
          this.loading = false;
        })
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
