import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable()
export class TagsService {

  constructor(
    private http: HttpClient
  ) { }
  // -------- Tag --------
  // activate tag
  tagAct(id: any) {
    return this.http.patch(`${AppSettings.ACT_TAG}?id=${id}`, {});
  }

  // deactivate tag
  tagDeact(id: any) {
    return this.http.patch(`${AppSettings.DEACT_TAG}?id=${id}`, {});
  }

  // update tag
  updTag(data: any) {
    return this.http.put(`${AppSettings.UPD_TAG}`, data)
  }

  // list of tags
  tagList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'isDisabled') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_TAG}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // add tag
  addTag(data: any) {
    return this.http.post(`${AppSettings.ADD_TAG}`, data)
  }

  // ---------- Category ----------
  // deactivate category
  catgAct(id: any) {
    return this.http.patch(`${AppSettings.ACT_CATG}?id=${id}`, {});
  }

  // deactivate category
  catgDeact(id: any) {
    return this.http.patch(`${AppSettings.DEACT_CATG}?id=${id}`, {});
  }

  // list of categories
  catgList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'isDisabled') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_CATG}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // add category
  addCatg(data: any) {
    return this.http.post(`${AppSettings.ADD_CATG}`, data)
  }

  // get category
  getCatg(id: string) {
    return this.http.get(`${AppSettings.GET_CATG}`, {
      params: { id }
    });
  }

  // update category
  updCatg(data: any) {
    return this.http.put(`${AppSettings.UPD_CATG}`, data)
  }
}
