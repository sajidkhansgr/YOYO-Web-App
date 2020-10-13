import { Component, OnInit } from '@angular/core';
import { LMT_PAGE } from '../../shared/constants'
import { HubService } from '../../hub/hub.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private hubServ: HubService) { }

  ngOnInit(): void {
    // this.getHubs();
  }

  getHubs(){
    this.hubServ.hubList({pageNo:1,pageSize:LMT_PAGE[0]})
    .subscribe((data: any) => {
      console.log(data, "da")
    }, (err: any) => {
    });
  }

}
