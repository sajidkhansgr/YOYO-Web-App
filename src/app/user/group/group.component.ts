import { Component, OnInit } from '@angular/core';
import { PRPS } from '../../shared/constants';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  showDoc: boolean = false;
  props: any = PRPS;
  divisions: any = [
    {id:1,name: "Hub A"},{id:2,name: "Hub B"},{id:3,name: "Hub C"}
  ];
  exps: any = [
    {id:1,name: "Exp 1"},{id:2,name: "Exp 2"},{id:3,name: "Exp 3"}
  ];
  data: any[] = [
    { name: "test", email: "email@email.com", date: "19 Aug 2020", date2: "19 Aug 2020", role: "User" },
    { name: "tes1t", email: "1email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U1ser" },
    { name: "tes2t", email: "2email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U2ser" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  outsideCloseDD = (dropdown: any) => {
    if (dropdown!.classList.contains('show')) {
      dropdown!.classList.remove('show');
    }
  }

  toggleDropdown = (event: any) => {
    if (event.target!.classList.contains('fas')) {
      event.target.parentNode.nextSibling!.classList.toggle('show');
    } else {
      event.target.nextSibling!.classList.toggle('show');
    }
  }
  selClrAll(isAll: boolean){
    if(isAll){
      //all select
    }else{
      //clear All
    }
  }
}
