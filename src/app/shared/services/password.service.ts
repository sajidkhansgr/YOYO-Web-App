import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient){ }

  //change password
  changePassword(data: any){
    return this.http.post(`${AppSettings.CHANGE_PASS}`,data)
  }

}
