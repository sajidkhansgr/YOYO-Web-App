import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenDataService } from '../services/token-data.service';
import { HttpHelper } from '../services/http-helper';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  rout: any;
  constructor(private router: Router, private toastr: ToastrService,private tokenDataServ: TokenDataService) { this.rout = router }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return this.errorHandler(error)
        })
      )
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.status == 401) {
      this.tokenDataServ.removeAll();
    }
    // let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      // console.log("client side");
      // errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
        console.log("server side",error);
        if(error.status==401){
          this.toastr.clear();
          this.toastr.error('You are not authorized, please login.', 'Unauthorized Access.');
          this.tokenDataServ.removeAll();
        }else{
          if(error.error){
            this.toastr.error(HttpHelper.errMessage(error));
          }else{
            this.toastr.error("Please try after some time");
          }
        }
    }
    return throwError(error);
  }
}
