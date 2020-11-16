import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationDto } from '../models/notification';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44314/notification", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

  private receivedMessageObject: Array<NotificationDto> = [];
  private sharedObj = new Subject<Array<NotificationDto>>();

  constructor(private http: HttpClient) {
    this.connection.onclose(async () => {
      await this.start();
    });
    var counter = 0;
    this.connection.on("Notification", (array: any) => {
      counter++;
      console.log("New notification recieved "+ counter +"")
      this.notificationList().subscribe((data: any) => {
        this.mapReceivedMessage(data.result.results);
      }, (err: any) => {
          console.log("Error");
      });
      
    });
    this.start();
  }


  public notificationList() {
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
      console.log("connected");
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }

  private mapReceivedMessage(array: Array<NotificationDto>): void {
    this.sharedObj.next(array);
  }

  /* ****************************** Public Mehods **************************************** */

  // Calls the controller method
  public broadcastMessage(msgDto: any) {
    this.http.post(`${AppSettings.NOTIFICATIONS}`, msgDto).subscribe(data => console.log(data));
    // this.connection.invoke("SendMessage1", msgDto.user, msgDto.msgText).catch(err => console.error(err));    // This can invoke the server method named as "SendMethod1" directly.
  }

  public retrieveMappedObject(): Observable<Array<NotificationDto>> {
    return this.sharedObj.asObservable();
  }


}
