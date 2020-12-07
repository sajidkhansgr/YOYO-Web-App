import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ShareMailService {

  constructor(private http: HttpClient) { }

  // send mail
  sendMail(data: any) {
    return this.http.post(`${AppSettings.SEND_MAIL}`, data);
  }

}
