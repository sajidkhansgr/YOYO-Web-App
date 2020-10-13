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

  showCatListIP = (event: any) => {
    event.target.parentNode.nextSibling.style.display = 'block';
  }

  closeCatListIP = (event: any) => {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
  }

  toggleInfo(row: any) {
    if (!this.showRowInfo)
      this.rowInfo = row;
    else
      this.rowInfo = {};
    this.showRowInfo = !this.showRowInfo;
  }

  closeInfo = () => {
    this.showRowInfo = false
  }

}
