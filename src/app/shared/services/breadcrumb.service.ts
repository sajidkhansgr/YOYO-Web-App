import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor(private http: HttpClient){ }

  //change password
  getList(params: any){
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.BRD_CRM_LIST}`, {
      params: queryParams
    }).pipe(map((res: any) => res ));
  }

}
