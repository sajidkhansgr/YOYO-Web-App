import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable()
export class ProfileService {

    constructor(
      private http: HttpClient
    ){ }

    updProfile(data: any) {
      return this.http.put(`${AppSettings.UPD_PRFL}`,data);
    }
}
