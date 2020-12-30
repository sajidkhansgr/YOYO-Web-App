import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(
    private http: HttpClient
  ) { }

  // share add - for getting share link
  addShare(data: any) {
    return this.http.post(`${AppSettings.ADD_SHARE}`, data);
  }

  // removing share link
  delLink(id: any) {
    return this.http.post(`${AppSettings.DEL_SHARE}?identifier=${id}`, {});
  }
}
