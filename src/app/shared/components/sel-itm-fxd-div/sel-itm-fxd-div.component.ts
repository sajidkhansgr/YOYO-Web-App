import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareMailComponent } from '../share-mail/share-mail.component';
import { GetLinkComponent } from '../get-link/get-link.component';
import { AddToCollComponent } from '../add-to-coll/add-to-coll.component';

@Component({
  selector: 'app-sel-itm-fxd-div',
  templateUrl: './sel-itm-fxd-div.component.html',
  styleUrls: ['./sel-itm-fxd-div.component.scss']
})
export class SelItmFxdDivComponent implements OnInit {
  @Input() public selArr: any;
  @Input() public isActive?: boolean;
  @Input() public content?: boolean;
  @Input() public type?: string;
  @Output() public actDeact = new EventEmitter();
  @Output() public delContent = new EventEmitter();
  @Output() public clrSelData = new EventEmitter();

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  cmnModal(type: string) {
    if (type == 'email') {
      const modalRef = this.modalService.open(ShareMailComponent, { size: 'lg' });
      modalRef.componentInstance.type = this.type == 'collection' ? 'multi-collection' : 'content';
      modalRef.componentInstance.data = this.selArr;
    } else if (type == 'getLink') {
      const modalRef = this.modalService.open(GetLinkComponent, { size: 'lg' });
      modalRef.componentInstance.type = this.type == 'collection' ? 'multi-collection' : 'content';
      modalRef.componentInstance.data = this.selArr;
    } else if (type == 'addToCollection') {
      const modalRef: any = this.modalService.open(AddToCollComponent, { size: 'lg' });
      modalRef.componentInstance.data = { data: this.selArr, type: 'multi' };
    }
  }

  actDeactFunc() {
    this.actDeact.emit();
  }

  delContentFunc() {
    this.delContent.emit();
  }

  cleanSelData() {
    this.clrSelData.emit();
  }

}
