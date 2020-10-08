import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { DataService } from '../../shared/services/data.service';
import { CommonValidations } from '../../shared/validations/common-validations';
import { HttpHelper } from '../../shared/http-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; disabled: boolean = false;
  hide: boolean = true; redirectUrl!: string | null;
  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private tokenDataServ: TokenDataService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private dataServ: DataService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, CommonValidations.emailValidator]],
      password: ['', Validators.required]
    });
    console.log("dsa")
  }

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirect_uri');
  }

  // login
  login() {
    this.disabled = true;
    if (this.loginForm.valid) {
      this.dataServ.passDataSend('change');
      this.toastr.success('Login successfully', 'Success');
      this.router.navigate(['/hub']);
      // this.authSer.login(this.loginForm.value)
      //   .subscribe((data: any) => {
      //     if (data) {
      //       this.tokenDataServ.setTokenAndUser({ tkn: data });
      //       // this.dataServ.passDataSend('change');
      //       // this.toastr.success('Login successfully', 'Success');
      //       // this.router.navigate(['/hub']);
      //     } else {
      //       this.toastr.error(HttpHelper.errMessage(data) || 'Please check email or password!', 'Error!');
      //       this.disabled = false;
      //     }
      //   }, (err: any) => {
      //     this.disabled = false;
      //   })

    }
  }
}
