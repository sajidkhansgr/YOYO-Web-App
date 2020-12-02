import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ExpService } from '../../exp/exp.service';
import { DEF_ICON } from '../../../../shared/constants';

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
  defImg:string = DEF_ICON;

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
    this.wrkspcCntnts = [];
    this.expServ.getAllObjWrkspc(params)
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result) && data.result.length>0) {
          if (Array.isArray(data.result[0].contents) && data.result[0].contents.length > 0)
              this.wrkspcCntnts = data.result[0].contents;
          if (Array.isArray(data.result[0].folders) && data.result[0].folders.length > 0)
              this.wrkspcCntnts.push(...data.result[0].folders.map((fldr: any) => ({ ...fldr, key:'fldr'})));
          if (Array.isArray(data.result[0].smartFolders) && data.result[0].smartFolders.length > 0)
              this.wrkspcCntnts.push(...data.result[0].smartFolders.map((fldr: any) => ({ ...fldr, key:'smtFldr'})));
        }else {
          //no data found
        }
        this.loading = false;
      }, (err: any) => {
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
