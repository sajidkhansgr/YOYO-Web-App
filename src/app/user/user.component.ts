import { Component, OnInit } from '@angular/core';
import { LMT_PAGE } from '../shared/constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class UserComponent implements OnInit {
  arr: Array<number> = [0];
  lmtPage: Array<number> = LMT_PAGE;
  constructor() { }

  ngOnInit(): void {
  }

  onTabChange = (event: any) => {
    if (this.arr.indexOf(event.index) === -1) {
      this.arr.push(event.index);
    } else {
    }
  }

}
