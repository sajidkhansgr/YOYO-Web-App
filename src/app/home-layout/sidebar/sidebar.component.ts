import { Component, OnInit } from '@angular/core';
import { HubService } from '../../hub/hub.service';
import { navigation, Navigation } from '../../shared/navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigation!: Navigation[];
  constructor(private hubServ: HubService) {
    this.navigation = navigation
  }

  ngOnInit(): void {
    this.getHubs();
  }

  getHubs(){
    this.hubServ.hubList({pageNo:0})
    .subscribe((data: any) => {
      if(data && data.result && Array.isArray(data.result.results) && data.result.results.length>0){
        let res: any = [];
        for(let k=0;k<data.result.results.length;k++){
          res.push({ id:data.result.results[k].id.toString(), title: data.result.results[k].name, type: 'item',url: '/hub/'+data.result.results[k].id+'/list'});
        }
        this.navigation[1].children = res;
      }
    }, (err: any) => {
        this.navigation[1].children = [];
    });
  }

}
