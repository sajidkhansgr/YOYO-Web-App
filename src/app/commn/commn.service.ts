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

  anncmntList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'isDisabled') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_ANNCMNT}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  addAnncmnt(data: any) {
    return this.http.post(`${AppSettings.ADD_ANNCMNT}`, data)
  }

  updAnncmnt(data: any) {
    return this.http.patch(`${AppSettings.UPD_ANNCMNT}`, data)
  }

  viewAnncmnt(id: string) {
    return this.http.get(`${AppSettings.GET_ANNCMNT}`, {
      params: { id }
    });
  }
}
