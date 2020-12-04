import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sel-itm-fxd-div',
  templateUrl: './sel-itm-fxd-div.component.html',
  styleUrls: ['./sel-itm-fxd-div.component.scss']
})
export class SelItmFxdDivComponent implements OnInit {
  @Input() public selColctnArr: any;
  @Input() public isActiveColctn!: any;
  @Output() public actDeact = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  cmnModal(type: string) {

  }

  actDeactFunc() {
    this.actDeact.emit();
  }

}
