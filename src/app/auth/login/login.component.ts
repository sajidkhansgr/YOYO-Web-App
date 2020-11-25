import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { DataService } from '../../shared/services/data.service';
import { CommonValidations } from '../../shared/validations/common-validations';
import { HttpHelper } from '../../shared/services/http-helper';

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
  }

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirect_uri');
  }

  // login
  login() {
    this.disabled = true;
    if (this.loginForm.valid) {
      this.authSer.login(this.loginForm.value)
        .subscribe((data: any) => {
          if (data && data.result && data.result.token && data.result.id) {
            this.tokenDataServ.setTokenAndUser(data.result);
            this.toastr.success('Login successfully', 'Success');
            this.dataServ.passDataSend('login');
            let nav= HttpHelper.redirectToUrl(this.redirectUrl);
            if(nav==='/dashboard' && data.result.roleId==3)
              this.router.navigate(['/web-app/resource/experiences']);
            else
              this.router.navigate([nav]);
          } else {
            this.toastr.error(data.message || 'Please check email or password!', 'Error!');
            this.disabled = false;
          }
        }, (err: any) => {
          // console.log(err, 'err');
          this.disabled = false;
        })
    }
  }
}
