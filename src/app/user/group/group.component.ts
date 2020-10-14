import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
    { id: 1, name: "Hub A" }, { id: 2, name: "Hub B" }, { id: 3, name: "Hub C" }
  ];
  exps: any = [
    { id: 1, name: "Exp 1" }, { id: 2, name: "Exp 2" }, { id: 3, name: "Exp 3" }
  ];
  data: any[] = [
    { name: "test", email: "email@email.com", date: "19 Aug 2020", date2: "19 Aug 2020", role: "User" },
    { name: "tes1t", email: "1email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U1ser" },
    { name: "tes2t", email: "2email@email.com", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U2ser" }
  ];
  constructor(private modalService: NgbModal) { }

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
  selClrAll(isAll: boolean) {
    if (isAll) {
      //all select
    } else {
      //clear All
    }
  }
  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {

      }, (reason) => {

      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
