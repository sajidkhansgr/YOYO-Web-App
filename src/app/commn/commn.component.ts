import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

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

  anncModalRef: any;
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  openRegModal(content: any) {
    console.log('abc');
    this.anncModalRef = this.modalService.open(content, { centered: true }).result
      .then((result) => {
        // console.log(`Closed with: ${result}`);
      }, (reason) => {
        // console.log('dism reason', reason);
      });
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.disMissMdodal();
  }
}
