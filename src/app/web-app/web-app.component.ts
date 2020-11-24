import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenDataService } from '../shared/services/token-data.service';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class WebAppComponent implements OnInit {
  nav!: any; // for header
  usrInfo: any | null;
  excUrls = ['view'];
  constructor(
    private router: Router,
    private tokenDataServ: TokenDataService
  ) { }

  ngOnInit(): void {
    // header
    this.getToken();
  }

  getToken() {
    this.usrInfo = this.tokenDataServ.getUser();
  }

  isViewPage(): boolean {
    return (this.excUrls.filter(sUrl => this.router.url.indexOf(sUrl)!== -1).length>0)?true:false;
  }

}
