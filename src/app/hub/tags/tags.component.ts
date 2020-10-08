import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  showAddCatIp: string = 'none';
  rowInfo: any;
  showRowInfo: boolean = false;
  showCatgIn: boolean = false;
  constructor() { }


  ngOnInit(): void {
    console.log("load")
  }

  toggleCatgInp() {
    this.showCatgIn = !this.showCatgIn;
  }

  toggleInfo(row: any) {
    if (!this.showRowInfo)
      this.rowInfo = row;
    else
      this.rowInfo = {};
    console.log("ds")
    this.showRowInfo = !this.showRowInfo;
  }

  closeInfo = () => {
    this.showRowInfo = false
  }

}
