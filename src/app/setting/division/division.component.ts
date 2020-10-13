import { Component, OnInit } from '@angular/core';

import { LMT_PAGE } from '../../shared/constants'
import { HubService } from '../../hub/hub.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  hubDispName: string = '';
  hubs: Array<any> = [];

  constructor(private hubServ: HubService) { }

  ngOnInit(): void {
    this.getHubs();
  }

  getHubs() {
    this.hubServ.hubList({ pageNo: 1, pageSize: LMT_PAGE[0] })
      .subscribe((data: any) => {
        if (!data.isError) {
          console.log(data);
          let res = data.result.results;
          this.hubDispName = res[0].name;
          for (let i = 0; i < data.result.results.length; i++) {
            let hub = { id: res[i].id, name: res[i].name };
            this.hubs.push(hub);
          }
        }
      }, (err: any) => {
        console.log(err);
      });
  }

}
