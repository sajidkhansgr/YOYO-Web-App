import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sel-itm-fxd-div',
  templateUrl: './sel-itm-fxd-div.component.html',
  styleUrls: ['./sel-itm-fxd-div.component.scss']
})
export class SelItmFxdDivComponent implements OnInit {
  @Input() public selArr: any;
  @Input() public isActive?: boolean;
  @Input() public content?: boolean;
  @Output() public actDeact = new EventEmitter();
  @Output() public delContent = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  cmnModal(type: string) {

  }

  actDeactFunc() {
    this.actDeact.emit();
  }

  delContentFunc() {
    this.delContent.emit();
  }

}
