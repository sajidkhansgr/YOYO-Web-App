import { Component, OnInit } from '@angular/core';

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
  selectedOption: string = '';
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
