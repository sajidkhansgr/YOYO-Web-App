import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-exp-inner',
  templateUrl: './exp-inner.component.html',
  styleUrls: ['./exp-inner.component.scss']
})
export class ExpInnerComponent implements OnInit {
  testArr = [1, 2, 3, 4, 5]; // test array
  view: boolean = true;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  toggleView = () => {
    this.view = !this.view;
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    }, (reason) => {

    });
  }

  openLgModal(content: any) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

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
