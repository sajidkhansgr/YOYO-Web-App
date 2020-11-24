import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable()
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  myFiles(params: any) {
    return this.http.get(`${AppSettings.MY_FILES}`);
  }

  addFldr(data: any) {
    return this.http.post(`${AppSettings.ADD_FLDR_EMPL}`, data);
  }

  updFldr(data: any) {
    return this.http.post(`${AppSettings.UPD_FLDR_EMPL}`, data);
  }

}
