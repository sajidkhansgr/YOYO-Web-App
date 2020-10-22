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

  // ******** 
  // list of categories
  catList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'isDisabled') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_CAT}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // add category
  addCat(data: any) {
    return this.http.post(`${AppSettings.ADD_CAT}`, data)
  }

  // get category
  getCat(id: string) {
    return this.http.get(`${AppSettings.GET_CAT}`, {
      params: { id }
    });
  }

  // update category
  updateCat(data: any) {
    return this.http.patch(`${AppSettings.UPD_CAT}`, data)
  }
}
