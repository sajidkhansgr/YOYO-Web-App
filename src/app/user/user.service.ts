import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  emplList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key] || key == 'IsAscending' || key == 'isActive' ) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_EMPL}`, {
      params: queryParams
    }
    ).pipe(//: Response) => res.json()
      map((res: any) =>
        res
      )
    );
  }

  addEmpl(data: any) {
    return this.http.post(`${AppSettings.ADD_EMPL}`, data)
  }
  updateEmpl(data: any) {
    return this.http.put(`${AppSettings.UPD_EMPL}`, data)
  }
  viewEmpl(id: string) {
    return this.http.get(`${AppSettings.GET_EMPL}`, {
      params: { id }
    });
  }
}
