import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
  host: {
    class: 'w-100'
  },
  encapsulation: ViewEncapsulation.None
})
export class HubComponent implements OnInit {

  arr: Array<number> = [0];
  custIconAddURL: string = 'none';
  addURLIcon: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onTabChange = (event:any) => {
    if(this.arr.indexOf(event.index)===-1){
      this.arr.push(event.index);
    }else{
    }
  }

  iconURLHandler = () => {
    if (this.addURLIcon === 'cust-icon') {
      this.custIconAddURL = 'block';
    } else {
      this.custIconAddURL = 'none';
    }
  }

}
