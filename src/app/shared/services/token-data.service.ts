import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class TokenDataService {
  constructor(private router: Router, private cookieServ: CookieService) { }

  getToken() {
    return this.cookieServ.get('acsTkn');
    // return true;
  }

  removeAll() {
    this.remTkn();
    this.router.navigate(['/auth/login']);
  }

  remTkn() {
    localStorage.clear(); //remove local
    this.cookieServ.deleteAll('/'); //remove cookie
  }

  setTokenAndUser(res: any) {
    this.cookieServ.set('acsTkn', res.token||'', undefined, '/');
    let usr: any = {
      id: res.id, rid: res.roleId, fN: res.fullName
    };
    this.cookieServ.set('usr', JSON.stringify(usr), undefined, '/');
  }

  getUser(){
    let usr:any = this.cookieServ.get('usr');
    try {
      if (usr && JSON.parse(usr)) {
        return JSON.parse(usr) || null;
      } else {
        return null;
      }
    } catch (ex) {
      return null;
    }
  }

}
