import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CommonValidations } from '../../validations/common-validations';
import { PasswordService } from '../../services/password.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private pswdServ: PasswordService,
    public modalRef: NgbActiveModal
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
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
        newPassword:  this.chngPassForm.value.pswd
      }
      this.pswdServ.changePassword(passData)
        .subscribe((data: any) => {
          // console.log(data, 'data');
          if(data){
            this.toastr.success(data.message || 'Password changed successfully', 'Success!');
            this.modalRef.dismiss("update")
          }
          this.loading = false;
        }, (err: any) => {
          console.log(err, 'err')
          this.loading = false;
        })
    }
  }

}
