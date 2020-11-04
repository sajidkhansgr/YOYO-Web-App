import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { CommonValidations } from '../../shared/validations/common-validations';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ForgotPasswordComponent implements OnInit {
  forgPassForm!: FormGroup; disabled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.forgPassForm = this.fb.group({
      email: ['', [Validators.required, CommonValidations.emailValidator]]
    });
  }

  // forgot password
	forgotPassword() {
		if (this.forgPassForm.valid) {
      this.disabled = true;
      this.authSer.forgotPass({emailAddress: this.forgPassForm.value.email})
        .subscribe((data: any) => {
          this.disabled = false;

        }, (err: any) => {
          this.disabled = false;
        });
		}
	}

}
