import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notification } from '../models/notification';
import { AppSettings } from './app-settings';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.SGNL_R}`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

  private receivedMsgObj: Array<Notification> = [];
  private sharedObj = new Subject<Array<Notification>>();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    var counter = 0;
    this.connection.on("Notification", (array: any) => {
      counter++;
      this.notifList().subscribe((data: any) => {
        this.mapReceivedMessage(data.result.results);
      }, (err: any) => {
      });

    });
    this.start();
  }

  public notifList() {
    return this.http.get(`${AppSettings.NOTIFICATIONS}`).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // Strart the connection
  public async start() {
    try {
      await this.connection.start();
    } catch (err) {
      setTimeout(() => this.start(), 5000);
    }
  }

  private mapReceivedMessage(array: Array<Notification>): void {
    this.sharedObj.next(array);
  }

  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  public broadcastMsg(msgDto: any) {
    this.http.post(`${AppSettings.NOTIFICATIONS}`, msgDto).subscribe(data => console.log(data));
    // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
  }

  public retrieveMappedObj(): Observable<Array<Notification>> {
    return this.sharedObj.asObservable();
  }

}
