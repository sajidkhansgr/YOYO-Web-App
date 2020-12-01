import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable()
export class ExpService {

  constructor(
    private http: HttpClient
  ) { }

  // get workspace list by employee
  wrkspcListEmp(): Observable<any[]> {
    return this.http.get(`${AppSettings.GET_WRKSPC_EMP}`).pipe(map((res: any) => res));
  }

  // get all from workspace by employee
  getAllObjWrkspc(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.GET_OBJ_WRKSPC_EMP}`, {
      params: queryParams
    }).pipe(map((res: any) => res ));
  }
}
