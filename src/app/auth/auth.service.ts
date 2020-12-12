import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: any) {
    return this.http.post(
      `${AppSettings.LOGIN}`, data
    );
  }

  forgotPass(data: any) {
    return this.http.post(`${AppSettings.FORG_PASS}`, data);
  }

  resetPass(data: any) {
    return this.http.post(
      `${AppSettings.RESET_PASS}`, data);
  }

  createPass(data: any) {
    return this.http.post(
      `${AppSettings.CREATE_PASS}`, data);
  }
}
