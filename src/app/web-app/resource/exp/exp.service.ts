import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../../shared/services/app-settings';

@Injectable()
export class ExpService {

  constructor(
    private http: HttpClient
  ) { }

  // get workspace list by employee
  wrkspcListEmp(): Observable<any[]> {
    return this.http.get(`${AppSettings.GET_WRKSPC_EMP}`).pipe(map((res: any) => res));
  }
}
