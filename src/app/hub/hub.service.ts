import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class HubService {

    constructor(
      private http: HttpClient
    ){ }

    hubList(params: any):  Observable<any[]> {
        let queryParams = new HttpParams();
        for(let key in params) {
          if(params[key] || key=='pageNo'){
            queryParams = queryParams.set(key, params[key]);
          }
        }
        return this.http.get(`${AppSettings.LIST_HUB}`,{
            params: queryParams
          }
        ).pipe(//: Response) => res.json()
            map( (res: any) =>
              res
            )
        );
    }

    addHub(data: any) {
      return this.http.post(`${AppSettings.ADD_HUB}`,data)
    }
    updateHub(data: any) {
      return this.http.patch(`${AppSettings.UPD_HUB}`,data)
    }
    viewHub(id: string) {
      return this.http.get(`${AppSettings.GET_HUB}`, {
        params: { id }
      });
    }
}
