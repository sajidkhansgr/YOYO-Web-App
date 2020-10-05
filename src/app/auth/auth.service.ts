import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TokenDataService } from '../shared/services/token-data.service';
import { AppSettings } from '../shared/services/app-settings';

@Injectable()
export class AuthService {

    constructor(
      private tokenDataServ: TokenDataService,
      private http: HttpClient
    ){ }

    login(data: any) {
      return this.http.post(
          `${AppSettings.LOGIN}`, data
        );
    }

}
