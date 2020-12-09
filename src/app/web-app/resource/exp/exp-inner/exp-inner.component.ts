import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DEF_ICON, FLDR_ICON } from '../../../../shared/constants';
import { ExpService } from '../../exp/exp.service';
import { BreadcrumbService } from '../../../../shared/services/breadcrumb.service';
import { ShareMailComponent } from 'src/app/shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from 'src/app/shared/components/get-link/get-link.component';
import { AddToCollComponent } from 'src/app/shared/components/add-to-coll/add-to-coll.component';
import { ContentWorkspaceService } from 'src/app/hub/content-workspace/content-workspace.service';

@Component({
  selector: 'app-exp-inner',
  templateUrl: './exp-inner.component.html',
  styleUrls: ['./exp-inner.component.scss']
})
export class ExpInnerComponent implements OnInit {
  routerSubs!: Subscription;
  id!: string; fldrid!: string; smtFldrid!: string;
  view: boolean = true; loading!: boolean;
  wrkspcCntnts: any[] = [];
  defImg: string = DEF_ICON; fldrIcon: string = FLDR_ICON;
  testArr = [1, 2, 3] // for static
  // entityId!:number;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private expServ: ExpService,
    private toastr: ToastrService,
    private brdcrmServ: BreadcrumbService,
    private cwServ: ContentWorkspaceService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['expid'] || '0';
      this.fldrid = params['fldrid'] || '';
      this.smtFldrid = params['smtFldrid'] || '';
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    if (this.id != '0') {
      this.loading = true;
      // this.brdcrmList();
      this.fldrid ? this.getAllFromWrkspc() : this.smtFldrid ? this.getContentSmtFldr() : this.getAllFromWrkspc();
    } else {
      this.toastr.error("Not a valid Workspace", "Error");
      this.router.navigate(['/web-app/experiences']);
    }
  }

  // open modals
  cmnModal(wSC: any, type: string) {
    if (type == 'email') {
      const modalRef = this.modalService.open(ShareMailComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'content';
      modalRef.componentInstance.data = wSC;
    }
    else if (type == 'getLink') {
      const modalRef = this.modalService.open(GetLinkComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'content';
      modalRef.componentInstance.data = wSC;
    }
    else if (type == 'addToColl') {
      const modalRef: any = this.modalService.open(AddToCollComponent);
      modalRef.componentInstance.data = { ...wSC, type: 'wrkspc' };
      modalRef.result.then((result: any) => {
      })
    }
  }

  // view content
  viewContent(id: number) {
    this.router.navigate(['/web-app/view/' + id]);
  }

  getAllFromWrkspc() {
    let params = {
      workspaceId: this.id,
      isActive: true,
      folderId: this.fldrid || null
    };
    this.wrkspcCntnts = [];
    this.expServ.getAllObjWrkspc(params)
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result) && data.result.length > 0) {
          if (Array.isArray(data.result[0].contents) && data.result[0].contents.length > 0)
            this.wrkspcCntnts = data.result[0].contents;
          if (Array.isArray(data.result[0].folders) && data.result[0].folders.length > 0)
            this.wrkspcCntnts.push(...data.result[0].folders.map((fldr: any) => ({ ...fldr, key: 'fldr' })));
          if (Array.isArray(data.result[0].smartFolders) && data.result[0].smartFolders.length > 0)
            this.wrkspcCntnts.push(...data.result[0].smartFolders.map((fldr: any) => ({ ...fldr, key: 'smtFldr' })));
        } else {
          //no data found
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
      })
  }

  // get content by smart folder
  getContentSmtFldr() {
    let query: any = {
      smartFolderId: this.smtFldrid
    };
    this.cwServ.contentBySmartFolder(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.wrkspcCntnts.push(...data.result);
      }
      this.loading = false;
    }, (err: any) => {
      this.loading = false;
    });
  }

  navgToCntnt(data: any) {
    let type;
    if (data.key === 'fldr') {
      type = 'folder';
    } else if (data.key === 'smtFldr') {
      type = 'smart-folder';
    }
    this.router.navigate(['/web-app/resource/experiences/' + this.id + '/' + type + '/' + data.id]);
  }

  brdcrmList() {
    // {
    //       Workspace = 1,
    //       Folder = 2,
    //       SmartFolder=3
    //   }
    let params = {
      entityWorkspaceID: this.id,
      entityType: 1,//this.entityId,
      entityId: this.fldrid || null
    }
    this.brdcrmServ.getList(params)
      .subscribe((data: any) => {
        console.log(data, 'data')
        if (data && Array.isArray(data.result) && data.result.length > 0) {

        } else {
          //no data found
        }
      }, (err: any) => {
      })
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }

}
