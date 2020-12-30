import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  nav!: any;
  usrInfo: any | null;
  excUrls = ['view'];
  constructor(
    private loc: Location,
    private tokenDataServ: TokenDataService
  ) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    this.usrInfo = this.tokenDataServ.getUser();
  }

  isViewPage(): boolean {
    return (this.excUrls.filter(sUrl => this.loc.path().indexOf(sUrl) !== -1).length > 0) ? true : false;
  }
}
