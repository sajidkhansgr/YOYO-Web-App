import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable()
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
      if (params[key] || key == 'pageNo' || key == 'pageSize') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_COLCT}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // add collection
  addColctn(data: any) {
    return this.http.post(`${AppSettings.ADD_COLCT}`, data);
  }

  // rename collection
  renColctn(data: any) {
    return this.http.put(`${AppSettings.REN_COLCT}`, data);
  }

  // duplicate collection
  duplColctn(data: any) {
    return this.http.patch(`${AppSettings.DUPL_COLCT}`, data);
  }

  // delete collection
  delColctn(id: any) {
    return this.http.patch(`${AppSettings.DEL_COLCT}?id=${id}`, {});
  }

  //  collection
  getColctn(id: any) {
    return this.http.get(`${AppSettings.GET_COLCT}?id=${id}`);
  }
}
