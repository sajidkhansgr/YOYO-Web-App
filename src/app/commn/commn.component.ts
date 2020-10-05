import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commn',
  templateUrl: './commn.component.html',
  styleUrls: ['./commn.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class CommnComponent implements OnInit {
  showDoc: boolean = false;
  showNewAnn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  newAnnouncement = () => {
    this.showNewAnn = true;
  }

  closeNewAnn = () => {
    this.showNewAnn = false;
  }

}
