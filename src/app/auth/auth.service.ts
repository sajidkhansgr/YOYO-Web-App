import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class AuthService {

    constructor(
      private http: HttpClient
    ){ }

    login(data: any) {
      return this.http.post(
          `${AppSettings.LOGIN}`, data
        );
    }

    forgotPass(data: any) {
      return this.http.post( `${AppSettings.FORG_PASS}`, data );
    }

    resetPass(params: any) {
      let queryParams = new HttpParams();
      for(let key in params) {
        if(params[key])
          queryParams = queryParams.set(key, params[key]);
      }
      return this.http.get(
        `${AppSettings.RESET_PASS}`,{
            params: queryParams
          }
      );
    }
}
