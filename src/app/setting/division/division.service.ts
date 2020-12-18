import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable()
export class DivisionService {

    constructor(
      private http: HttpClient
    ){ }

    addHub(data: any) {
      return this.http.post(`${AppSettings.ADD_HUB}`,data);
    }
    updHub(data: any) {
      return this.http.put(`${AppSettings.UPD_HUB}`,data);
    }
    actDeactHub(id: any, isAct: boolean) {
      let url= isAct?AppSettings.ACT_HUB:AppSettings.DEACT_HUB;
      return this.http.patch(`${url}?id=${id}`, {});
    }
}
