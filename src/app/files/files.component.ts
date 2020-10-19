import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  view: boolean = true;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  switchView = () => {
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

  // upload button
  uploadBtn = (uf: any) => {
    uf?.click();
  }

  // copy link button
  copyLink = (link: any) => {
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
}
