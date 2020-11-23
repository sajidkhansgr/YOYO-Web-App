import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient){ }

  downloadFile(url: string) {
		return this.http.get(`${url}`, {responseType: 'blob'});
  }

}
