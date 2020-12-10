import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  // for images in form
  freezeFormObj(data: any) {
    const formData: FormData = new FormData();
    for (let key in data) {
      if (data[key] || key === 'IsUrl') {
        if (key === 'folderIcon' || key === 'content' || key === 'urlIcon' && data[key] && data[key].name) {
          formData.append(key, data[key], data[key].name);
        } else {
          formData.append(key, data[key]);
        }
      }
    }
    return formData;
  }

  myFiles(params: any) {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.MY_FILES}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  addFldr(data: any) {
    return this.http.post(`${AppSettings.ADD_FLDR_EMPL}`, data);
  }

  updFldr(data: any) {
    return this.http.post(`${AppSettings.UPD_FLDR_EMPL}`, data);
  }

  addMyCntnt(data: any) {
    return this.http.post(`${AppSettings.ADD_CNTNT_EMPL}`, this.freezeFormObj(data))
  }

}
