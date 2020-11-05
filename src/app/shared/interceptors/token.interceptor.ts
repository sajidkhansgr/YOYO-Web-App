import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable} from 'rxjs';
import { TokenDataService } from '../services/token-data.service';
import {environment} from '../../../environments/environment';
@Injectable()

export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenDataServ: TokenDataService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes('content.googleapis.com')){
      // google apis
    }else{
      let url = `${environment.API_ENDPOINT}${request.url}`;
      let headerParams:any={
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache, no-store, must-revalidate',
        'If-Modified-Since': '0'
      };
      let excUrls = ['Login','ForgotPassword','ResetPassword'];

      if(excUrls.filter(sUrl => request.url.includes(sUrl)).length>0){
        //no need of auth
      }else{
        headerParams = {
          ...headerParams,
          "Authorization":  "Bearer " + (this.tokenDataServ.getToken() || '')
        }
      }
      request = request.clone({
        setHeaders: headerParams,
        url
      });
    }
    return next.handle(request);
  }
}
