import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient){ }

  //change password
  lngList(data: any){
    return this.http.get(`${AppSettings.LIST_LNG}`,data)
  }

}
