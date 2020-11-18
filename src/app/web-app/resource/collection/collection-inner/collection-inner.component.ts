import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-collection-inner',
  templateUrl: './collection-inner.component.html',
  styleUrls: ['./collection-inner.component.scss']
})
export class CollectionInnerComponent implements OnInit {
  view: boolean = true;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // switch views
  switchView = () => {
    this.view = !this.view;
  }

  // copy link button
  copyLink = (link: any) => {
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {

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
