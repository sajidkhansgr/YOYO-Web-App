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
  // activate/deactivate tag
  actDeactTag(id: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_TAG : AppSettings.DEACT_TAG;
    return this.http.patch(`${url}?id=${id}`, {});
  }

  // update tag
  updTag(data: any) {
    return this.http.put(`${AppSettings.UPD_TAG}`, data)
  }

  // list of tags
  tagList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'IsAscending' || key == 'isActive') {
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
  // activate/deactivate category
  actDeactCatg(id: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_CATG : AppSettings.DEACT_CATG;
    return this.http.patch(`${url}?id=${id}`, {});
  }

  // list of categories
  catgList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'isActive') {
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
