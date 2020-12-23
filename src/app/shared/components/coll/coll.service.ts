import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class CollService {

  constructor(private http: HttpClient) { }

  // add collection
  addColctn(data: any, t?: string) {
    let url = t == 'add-content' ? AppSettings.ADD_COLCT_THEN_CNTNT : AppSettings.ADD_COLCT;
    return this.http.post(`${url}`, data);
  }

  // rename collection
  renColctn(data: any) {
    return this.http.put(`${AppSettings.REN_COLCT}`, data);
  }

  // duplicate collection
  duplColctn(data: any) {
    return this.http.patch(`${AppSettings.DUPL_COLCT}`, data);
  }

  colctnList(params: any) {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key] || key == 'pageNo') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_COLCT}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  addContentColctn(data: any) {
    return this.http.post(`${AppSettings.ADD_CONTENT_COLCT}`, data);
  }

}
