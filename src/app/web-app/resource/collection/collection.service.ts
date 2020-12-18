import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(
    private http: HttpClient
  ) { }
  // ---- content ---- //
  // add content to collection
  addContentColctn(data: any) {
    return this.http.post(`${AppSettings.ADD_CONTENT_COLCT}`, data);
  }

  // remove content from collection
  delContentColctn(data: any) {
    return this.http.post(`${AppSettings.REM_CONTENT_COLCT}`, data);
  }

  //  get content by collection id
  getContentColctn(id: any) {
    return this.http.get(`${AppSettings.GET_CONTENT_COLCT}?id=${id}`);
  }

  // ---- collection ---- //
  // get collection list
  colctnList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key] || key == 'pageNo' || key == 'isActive') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_COLCT}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // activate/deactivate collection
  actDeactColctn(data: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_COLCT : AppSettings.DEACT_COLCT;
    return this.http.post(`${url}`, data);
  }

  //  collection
  getColctn(id: any) {
    return this.http.get(`${AppSettings.GET_COLCT}?id=${id}`);
  }

  rearrCntntColl(data: any) {
    return this.http.post(`${AppSettings.REARR_CNTNT_COLCT}`, data);
  }

}
