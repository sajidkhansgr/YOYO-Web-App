import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
  excUrls = ['login','forgot-password','reset-password','create-password','share-link'];

  constructor(
    private tokenDataServ: TokenDataService,
    private dataServ: DataService,
    // private router: Router,
    private loc: Location
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
    }, 2000)
  }

  getToken() {
    this.isToken = this.tokenDataServ.getToken() ? true : false;
    this.usrInfo = this.tokenDataServ.getUser();
  }

  isAuthPage(): boolean {
    return (this.excUrls.filter(sUrl => this.loc.path().indexOf(sUrl)!== -1 || this.loc.path().indexOf('auth/'+sUrl)!== -1).length>0)?true:false;
    // return this.router.url.indexOf('auth/login') !== -1 || this.router.url.indexOf('login') !== -1 ? true : false;
  }

  isWebApp(): boolean {
    return this.loc.path().indexOf('web-app') !== -1 ? true : false;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }
}
