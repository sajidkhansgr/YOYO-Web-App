import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private dataSour = new BehaviorSubject('');
  currentInfo = this.dataSour.asObservable();

  constructor() { }

  passDataSend(data: any) {
    this.dataSour.next(data);
  }

}
