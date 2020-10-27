import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class AnnotService {

    constructor(
      private http: HttpClient
    ){ }

    annotList(params: any):  Observable<any[]> {
        let queryParams = new HttpParams();
        for(let key in params) {
          if(params[key] || key=='pageNo'){
            queryParams = queryParams.set(key, params[key]);
          }
        }
        return this.http.get(`${AppSettings.LIST_ANNOT}`,{
            params: queryParams
          }
        ).pipe(//: Response) => res.json()
            map( (res: any) =>
              res
            )
        );
    }

    addAnnot(data: any) {
      return this.http.put(`${AppSettings.ADD_ANNOT}`,data)
    }
}
