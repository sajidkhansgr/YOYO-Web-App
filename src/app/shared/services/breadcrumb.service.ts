import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor(private http: HttpClient){ }

  getList(params: any,isMy: boolean=false){
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    let url: string = isMy?AppSettings.MY_BRD_CRM_LIST:AppSettings.BRD_CRM_LIST;
    return this.http.get(`${url}`, {
      params: queryParams
    }).pipe(map((res: any) => res ));
  }

}
