import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class TokenDataService {
  constructor(private router: Router, private cookieServ: CookieService) { }

  getToken() {
    return this.cookieServ.get('acsTkn');
  }

  removeAll() {
    localStorage.clear(); //remove local
    this.cookieServ.deleteAll('/'); //remove cookie
    this.router.navigate(['/auth/login']);
  }

  setTokenAndUser(data: any) {
    this.cookieServ.set('acsTkn', data.tkn||'', undefined, '/');
    this.cookieServ.set('usrn', data.usrn||'', undefined, '/');
  }

  getUser(){
    return this.cookieServ.get('usrn');
  }

}
