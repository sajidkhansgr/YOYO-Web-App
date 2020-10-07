import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class UserComponent implements OnInit {
  showDoc: boolean = false;
  visbCols: any[] = [{ n: "Role", key: "role" }]
  hidCols: any[] = [{ n: "Property", key: "prop" }, { n: "License Type", key: "lic" }, { n: "License Type", key: "lic" }, { n: "License Type", key: "lic" }, { n: "License Type", key: "lic" }]
  cols: any[] = [{ n: "Name", dir: 1, key: "name", visb: true }, { n: "Latest Activity", dir: 0, key: "date", visb: false },
  { n: "Role", dir: 0, key: "role", visb: true }, { n: "Property", dir: 0, key: "prop", visb: false },
  { n: "License Type", dir: 0, key: "lic", visb: false }, { n: "Groups", dir: 0, key: "gr", visb: false }, { n: "Division", dir: 0, key: "div", visb: false },
  { n: "Experience", dir: 0, key: "exp", visb: false }
  ]

  data: any[] = [
    { name: "test", email: "email@email.com", date: "19 Aug 2020", date2: "19 Aug 2020", role: "User" },
    { name: "tes1t", email: "1email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U1ser" },
    { name: "tes2t", email: "2email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U2ser" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown = (event: any) => {
    event.target.nextSibling.classList.toggle('show');
  }

  closeDropdown = (event: any) => {
    event.target.parentNode.parentNode.classList.remove('show');
  }

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  showHideCols(col: any, type: string, i: number) {
    if (type === 'show') {
      this.hidCols.splice(i, 1);
      this.visbCols.push(col);
    } else {
      this.visbCols.splice(i, 1);
      this.hidCols.push(col);
    }
  }

}
