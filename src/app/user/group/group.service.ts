import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable()
export class GroupService {

  constructor(
    private http: HttpClient
  ) { }

  groupList(params: any): Observable<any[]> {
    let queryParams = new HttpParams(), url: string;
    for (let key in params) {
      if (params[key] || key == 'isDisabled') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_GRP}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  addGroup(data: any) {
    return this.http.post(`${AppSettings.ADD_GRP}`, data)
  }
}
