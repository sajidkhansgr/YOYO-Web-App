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

  colctList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_COLCT}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  addColct(data: any) {
    return this.http.post(`${AppSettings.ADD_COLCT}`, data)
  }
  // updateEmpl(data: any) {
  //   return this.http.put(`${AppSettings.UPD_EMPL}`, data)
  // }
  // viewEmpl(id: string) {
  //   return this.http.get(`${AppSettings.GET_EMPL}`, {
  //     params: { id }
  //   });
  // }
}
