import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
import { NotificationDto } from '../shared/models/notification';

import { SignalRService } from '../shared/services/signal-r.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _sService: SignalRService) { }

  ngOnInit(): void {
    this._sService.retrieveMappedObject().subscribe((receivedObjs: Array<NotificationDto>) => {
        this.msgInboxArray = receivedObjs;
    });

    this._sService.notificationList().subscribe((data: any) => {
      this.msgInboxArray = data.result.results as Array<NotificationDto>;
    }, (err: any) => {
      console.log("Error");
    });
  }

  public msgDto: NotificationDto = new NotificationDto();
  public msgInboxArray: Array<NotificationDto> = [];

}
