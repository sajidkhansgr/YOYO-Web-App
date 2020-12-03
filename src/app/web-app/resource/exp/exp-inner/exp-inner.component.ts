import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ExpService } from '../../exp/exp.service';
import { DEF_ICON, FLDR_ICON } from '../../../../shared/constants';
import { ShareMailComponent } from 'src/app/shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from 'src/app/shared/components/get-link/get-link.component';

@Component({
  selector: 'app-exp-inner',
  templateUrl: './exp-inner.component.html',
  styleUrls: ['./exp-inner.component.scss']
})
export class ExpInnerComponent implements OnInit {
  routerSubs!: Subscription;
  id!: string; fldrid!: string;
  view: boolean = true; loading!: boolean;
  wrkspcCntnts: any[] = [];
  defImg: string = DEF_ICON; fldrIcon: string = FLDR_ICON;
  testArr = [1, 2, 3] // for static

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private expServ: ExpService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['expid'] || '0';
      this.fldrid = params['fldrid'] || '';
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    if (this.id != '0') {
      this.loading = true;
      this.getAllFromWrkspc();
    } else {
      this.toastr.error("Not a valid Workspace", "Error");
      this.router.navigate(['/web-app/experiences']);
    }
  }

  // open modals
  cmnModal(type: string) {
    if (type == 'email')
      this.openModal(ShareMailComponent);
    else if (type == 'getLink')
      this.openModal(GetLinkComponent);
  }

  // view content
  viewContent(id: number) {
    this.router.navigate(['/web-app/view/' + this.id]);
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

  toggleView = () => {
    this.view = !this.view;
  }

  navgToCntnt(id: number) {
    this.router.navigate(['/web-app/resource/experiences/' + this.id + '/' + id]);
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
