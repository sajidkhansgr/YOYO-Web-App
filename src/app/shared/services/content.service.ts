import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from './app-settings';

@Injectable()
export class ContentService {

  constructor(
    private http: HttpClient
  ) { }

  // get content by folder
  contentByFolder(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.GET_CNTNT_FLDR}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // get content by smart folder
  contentBySmartFolder(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.GET_CNTNT_SMT_FLDR}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }
}
