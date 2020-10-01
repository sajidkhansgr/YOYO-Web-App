import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable()
export class OfflineInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!window.navigator.onLine) {
            //No internet
            return throwError(new HttpErrorResponse({ error: 'Internet is required.' }));
        } else {
            // else return the normal request
            return next.handle(request);
        }
    }
}
