import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ExpService } from '../../exp/exp.service';

@Component({
  selector: 'app-exp-inner',
  templateUrl: './exp-inner.component.html',
  styleUrls: ['./exp-inner.component.scss']
})
export class ExpInnerComponent implements OnInit {
  routerSubs!: Subscription;
  id!: string;
  testArr = [1, 2, 3, 4, 5]; // test array
  view: boolean = true;loading!: boolean;
  wrkspcCntnts!:any[];

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private expServ: ExpService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['expid'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    if (this.id != '0') {
      this.loading = true;
      this.getAllFromWrkspc();
    }
  }

  getAllFromWrkspc() {
    let params = {
      workspaceId: this.id,
      isActive: true,
      // folderId: this.selFldr ? this.selFldr!.id : undefined
    };
    this.expServ.getAllObjWrkspc(params)
      .subscribe((data: any) => {
        if (data && data.result && data.result.result) {
          if (Array.isArray(data.result.result[0].contents) && data.result.result[0].contents.length > 0) {
            // console.log(data.result.result[0].contents)
          }
          if (Array.isArray(data.result.result[0].folders) && data.result.result[0].folders.length > 0) {
            // console.log(data.result.folders);
          }
          if (Array.isArray(data.result.result[0].smartFolders) && data.result.result[0].smartFolders.length > 0) {
          }
        }else {
        }
        this.loading = false;
      }, (err: any) => {
        this.wrkspcCntnts = [];
        this.loading = false;
      })
  }

  toggleView = () => {
    this.view = !this.view;
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
  
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }

}
