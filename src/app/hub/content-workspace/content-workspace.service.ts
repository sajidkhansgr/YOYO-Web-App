import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable()
export class ContentWorkspaceService {

  constructor(
    private http: HttpClient
  ) { }
  // ---- folder api's ---- //
  // add workspace
  addFolder(data: any) {
    return this.http.post(`${AppSettings.ADD_FLDR}`, data)
  }

  // get folder list
  folderListWrkspc(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_FLDR_WRKSPC}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // ---- workspace api's ---- //
  // get workspace list
  wrkspcList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_WRKSPC}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // add workspace
  addWrkspc(data: any) {
    return this.http.post(`${AppSettings.ADD_WRKSPC}`, data)
  }

  // update category
  updWrkspc(data: any) {
    return this.http.put(`${AppSettings.UPD_WRKSPC}`, data)
  }
}
