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
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class CreatePasswordComponent implements OnInit {
  createPassForm!: FormGroup;
  loading = false;token!: string | null;email!: string | null;
  hidePass = true; hideCPass = true;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private tokenDataServ: TokenDataService,
    private router: Router
  ) {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.createPassForm = this.fb.group({
      pswd: ['', [Validators.required, Validators.minLength(6)]],
      confirmPswd: ['', [Validators.required, CommonValidations.MatchPassword]]
    });
    this.createPassForm.get('pswd')!.valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
          this.createPassForm.get('confirmPswd')!.updateValueAndValidity();
      });
  }

  // create password
  createPassword() {
    if (this.createPassForm.valid) {
      this.loading = true;
      let passData: any = {
        email: this.email, token: this.token,
        password: this.createPassForm.value.pswd,
        confirmPassword: this.createPassForm.value.confirmPswd
      };
      this.authSer.createPass(passData)
        .subscribe((data: any) => {
          if(data){
            this.toastr.success("Password created successfully", 'Success');
            this.tokenDataServ.removeAll();
            this.router.navigate(['/auth/login']);
          }else{
            this.toastr.error("Unable to create password, please try after sometime", 'Error');
          }
          this.loading = false;
        }, (err: any) => {
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
