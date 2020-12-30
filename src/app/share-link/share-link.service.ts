import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppSettings } from '../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ShareLinkService {
  id!: string; routerSubs!: Subscription;

  constructor(
    private http: HttpClient
  ) { }

  getLinkData(id: string) {
    return this.http.get(`${AppSettings.GET_SHARE_LNK}?identifier=${id}`)
  }
}
