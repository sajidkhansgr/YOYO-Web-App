import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { LMT_PAGE } from '../../shared/constants'
import { HubService } from '../../hub/hub.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  hubDispName: string = 'No Hub';
  currentDivId: string = '';
  hubs: Array<any> = [];
  loading: boolean = true;
  closeResult: any = '';

  constructor(private hubServ: HubService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getHubs();
  }

  getHubs() {
    this.hubServ.hubList({ pageNo: 1, pageSize: LMT_PAGE[0] })
      .subscribe((data: any) => {
        // console.log(data);
        if (!data.isError) {
          let res = data.result.results;
          this.hubDispName = res[0].name;
          this.currentDivId = res[0].id;
          for (let i = 0; i < data.result.results.length; i++) {
            let hub = { id: res[i].id, name: res[i].name };
            this.hubs.push(hub);
          }
        }
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.loading = false;
      });
  }

  divChange(event: any) {
    this.hubDispName = event.target.innerText;
    this.currentDivId = event.target.id;
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
