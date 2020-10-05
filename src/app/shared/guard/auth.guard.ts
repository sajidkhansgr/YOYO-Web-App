import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenDataService } from '../services/token-data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenDataServ: TokenDataService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.tokenDataServ.getToken()) {
        this.router.navigate(['auth/login',{queryParams:{redirect_uri: state.url}}]);
        return false;
    } else {
      return true;
    }
  }
}
