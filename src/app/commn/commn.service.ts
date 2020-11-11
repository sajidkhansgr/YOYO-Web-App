import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class CommnService {

  constructor(
    private http: HttpClient
  ) { }

  ancmntList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'IsAscending') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_ANCMNT}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  addAncmnt(data: any) {
    return this.http.post(`${AppSettings.ADD_ANCMNT}`, data)
  }

  updAncmnt(data: any) {
    return this.http.patch(`${AppSettings.UPD_ANCMNT}`, data)
  }

  viewAncmnt(id: string) {
    return this.http.get(`${AppSettings.GET_ANCMNT(id)}`)
  }

  archAncmnt(id: string) {
    return this.http.put(`${AppSettings.ARCH_ANCMNT(id)}`, {})
  }
}
