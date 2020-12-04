import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class CollService {

  constructor(private http: HttpClient) { }

  // add collection
  addColctn(data: any) {
    return this.http.post(`${AppSettings.ADD_COLCT}`, data);
  }

  // rename collection
  renColctn(data: any) {
    return this.http.put(`${AppSettings.REN_COLCT}`, data);
  }

  // duplicate collection
  duplColctn(data: any) {
    return this.http.patch(`${AppSettings.DUPL_COLCT}`, data);
  }
}
