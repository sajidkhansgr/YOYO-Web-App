import { Component, OnInit } from '@angular/core';
import { Notification } from '../shared/models/notification';
import { SignalRService } from '../shared/services/signal-r.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public msgs: Array<Notification> = [];

  constructor(private sgnlServ: SignalRService) { }

  ngOnInit(): void {
    // this.initList();
  }

  initList(){
    this.sgnlServ.retrieveMappedObj().subscribe((receivedObjs: Array<Notification>) => {
        this.msgs = receivedObjs;
    });
    this.sgnlServ.notifList().subscribe((data: any) => {
      this.msgs = data.result.results as Array<Notification>;
    }, (err: any) => {
      console.log("Error");
    });
  }

}
