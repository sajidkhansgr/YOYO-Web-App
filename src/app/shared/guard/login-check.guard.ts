import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenDataService } from '../services/token-data.service';
@Injectable()
export class LoginCheckGuard implements CanActivate {
  constructor(public router: Router, private tokenDataServ: TokenDataService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log("sd",this.tokenDataServ.getToken())
      if (this.tokenDataServ.getToken()) {
          this.router.navigate(['/hub/1/list']);
        return false;
      } else
        return true;
  }
}
