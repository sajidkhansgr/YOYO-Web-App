import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenDataService } from './shared/services/token-data.service';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HiForceAdminUI';
  isToken: boolean = false; isVisb: boolean = false;
  routerSubs: Subscription;
  usrInfo: any | null;
  excUrls = ['login','forgot-password','forgot-password'];

  constructor(
    private tokenDataServ: TokenDataService,
    private dataServ: DataService,
    private router: Router
  ) {
    this.routerSubs = this.dataServ.currentInfo
      .subscribe((msg: any) => {
        if (msg === 'login')
          this.getToken();
      })
  }

  ngOnInit(): void {
    this.getToken();
    setTimeout(() => {
      this.isVisb = true;
    }, 900)
  }

  getToken() {
    this.isToken = this.tokenDataServ.getToken() ? true : false;
    this.usrInfo = this.tokenDataServ.getUser();
  }

  isAuthPage(): boolean {
    return (this.excUrls.filter(sUrl => this.router.url.indexOf(sUrl)!== -1 || this.router.url.indexOf('auth/'+sUrl)!== -1).length>0)?true:false;
    // return this.router.url.indexOf('auth/login') !== -1 || this.router.url.indexOf('login') !== -1 ? true : false;
  }

  isWebApp(): boolean {
    return this.router.url.indexOf('web-app') !== -1 ? true : false;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }
}
