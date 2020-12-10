import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { navigation, Navigation } from '../../shared/navigation';
import { HubService } from '../../hub/hub.service';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigation!: Navigation[];
  routerSubs: Subscription;

  constructor(
    private hubServ: HubService,
    private dataServ: DataService
  ) {
    this.navigation = navigation
    this.routerSubs = this.dataServ.currentInfo
      .subscribe((msg: any) => {
        if((msg==='hub-add' || msg==='hub-upd'))
          this.getHubs();
      })
  }

  ngOnInit(): void {
    this.getHubs();
  }

  getHubs(){
    this.hubServ.hubList({pageNo:0})
    .subscribe((data: any) => {
      if(data && data.result && Array.isArray(data.result.results) && data.result.results.length>0){
        let res: any = [];
        this.dataServ.passDataSend(data.result.results);
        for(let k=0;k<data.result.results.length;k++){
          res.push({ id:data.result.results[k].id.toString(), title: data.result.results[k].name, type: 'item',url: '/hub/'+data.result.results[k].id+'/list'});
        }
        const index = this.navigation.findIndex((ele: any) => ele.id == "hub");
        if (index >= 0) {
          this.navigation[index].children = res;
        }
      }
    }, (err: any) => {
        this.navigation[1].children = [];
    });
  }

  ngOnDestroy(): void{
    // Unsubscribe from all subscriptions
    if(!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }
}
