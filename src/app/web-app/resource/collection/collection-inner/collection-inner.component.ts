import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { CollectionService } from '../collection.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Collection as Colctn } from '../../../../shared/models/collection';
import { Content } from '../../../../shared/models/content';
import { ShareMailComponent } from '../../../../shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from '../../../../shared/components/get-link/get-link.component';
import { AddToCollComponent } from '../../../../shared/components/add-to-coll/add-to-coll.component';
import { CollComponent } from '../../../../shared/components/coll/coll.component';
import { AddRsrcComponent } from '../../../../shared/components/add-rsrc/add-rsrc.component';
import { FileHelper } from '../../../../shared/file-helper';

@Component({
  selector: 'app-collection-inner',
  templateUrl: './collection-inner.component.html',
  styleUrls: ['./collection-inner.component.scss']
})
export class CollectionInnerComponent implements OnInit {
  view: boolean = true; id!: number; routerSubs!: Subscription;
  disabled!: boolean; loading!: boolean;
  selColctn!: Colctn | undefined;
  multiForm!: number;
  cntntArr!: any[]; selCntntArr!: any[];
  addContentArr!: Content[];

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private colctnSrv: CollectionService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = parseInt(params['cid']);
      this.initialiseState();
      this.getColctn();
    });
  }

  initialiseState() {
    this.view = true; this.disabled = false; this.loading = true;
    this.selColctn = undefined; this.selCntntArr = [];
    this.multiForm = 0; this.cntntArr = []; this.addContentArr = [];
  }

  // open modals
  cmnModal(type: string, t?: string, cntnt?: Content, colctn?: Colctn) {
    if (type == 'email') {
      const modalRef = this.modalService.open(ShareMailComponent, { size: 'lg' });
      modalRef.componentInstance.type = colctn ? 'collection' : 'content';
      modalRef.componentInstance.data = colctn ? colctn : cntnt;
    } else if (type == 'getLink') {
      const modalRef = this.modalService.open(GetLinkComponent, { size: 'lg' });
      modalRef.componentInstance.type = colctn ? 'collection' : 'content';
      modalRef.componentInstance.data = colctn ? colctn : cntnt;
    } else if (type == 'addToCollection') {
      const modalRef: any = this.modalService.open(AddToCollComponent, { size: 'lg' });
      modalRef.componentInstance.data = { ...cntnt, type: 'coll-inr' };
      modalRef.result.then((result: any) => {
        if (result && result.id == this.id) {
          this.getCntntColl();
        }
      })
    } else if (type == 'coll') {
      const modalRef = this.modalService.open(CollComponent, { size: 'lg' });
      modalRef.componentInstance.colctn = this.selColctn;
      modalRef.componentInstance.type = t;
      modalRef.result.then((result) => {
        if (result && t == "ren") {
          this.selColctn!.name = result.name;
        }
      })
    } else if (type == 'resource') {
      const modalRef = this.modalService.open(AddRsrcComponent, { size: 'lg' });
      modalRef.result.then((result) => {
        if (result) {
          this.addContentArr = result;
          this.addContent();
        }
      });
    }
  }

  // ----- resource/content -----
  // add selected content
  addContent() {
    this.disabled = true;
    let data: any = {
      id: this.id, contents: []
    };
    for (let i = 0; i < this.addContentArr.length; i++) {
      data.contents.push(this.addContentArr[i].contentId ? this.addContentArr[i].contentId : this.addContentArr[i].id);
    }
    this.colctnSrv.addContentColctn(data).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Content added successfully', 'Success!');
        this.getCntntColl();
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // remove content from collection
  delContent(id?: number) {
    let dataArr = id ? [id] : this.selCntntArr;
    let s = dataArr.length == 1 ? '' : 's';
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to remove ${dataArr.length == 1 ? 'this' : 'these'} content${s} from collection?`,
        title: `Remove Content${s}`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        let data: any = {
          collectionId: this.id,
          contentIds: dataArr
        }
        this.colctnSrv.delContentColctn(data).subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || `Content${s} removed successfully`, 'Success!');
            this.selCntntArr = [];
            this.getCntntColl();
          }
        }, (err: any) => {
          this.toastr.error(data.message || `Unable to remove content${s}`, 'Error!');
        });
      }
    })
  }

  // on selecting a content
  selMe(val: any, content: Content) {
    if (val) {
      this.selCntntArr.push(content.contentId);
    } else {
      this.selCntntArr = this.selCntntArr.filter((data: any) => data != content.contentId);
    }
  }

  clrSel() {
    this.selCntntArr = [];
  }

  // get content by collection
  getCntntColl() {
    this.loading = true;this.cntntArr = [];
    this.colctnSrv.getContentColctn(this.id).subscribe((data: any) => {
      if (data && Array.isArray(data.result) && data.result.length > 0) {
        this.cntntArr = data.result;
      }
      this.loading = false;
    }, (err: any) => {
      this.loading = false;
    });
  }

  // activate/deactivate collection
  actDeactColctn() {
    let actDeac: string = `${this.selColctn!.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this collection?`,
        title: `${this.selColctn!.isActive ? 'Deactivate' : 'Activate'} collection`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.colctnSrv.actDeactColctn([this.id], this.selColctn!.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Collection ${actDeac}d successfully`, 'Success!');
            this.getColctn();
          } else{
            this.toastr.error(`Unable to ${actDeac} collection`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  // get collection
  getColctn() {
    this.loading = true;
    this.colctnSrv.getColctn(this.id).subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.selColctn = data.result;
        this.getCntntColl();
      } else{
        this.router.navigate(['/web-app/resource/collections']);
      }
    }, (err: any) => {
      this.router.navigate(['/web-app/resource/collections']);
    });
  }

  // copy link button
  copyLink = (link: any) => {
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  navgToCntnt(cntnt: Content) {
    this.router.navigate(['/web-app/view/' + cntnt.contentId]);
  }

  getImg(d: any): string {
    return FileHelper.getImg(d, 'icon');
  }

  drop = (event: CdkDragDrop<string[]>) => {
    if (event.previousContainer === event.container) {
      if (event.previousContainer.data[event.previousIndex] != event.container.data[event.currentIndex]) {
        this.rearrDataInWrkspc(event);
      }
    } else {
      console.log("dasadsadsads else ")
    }
  }

  rearrDataInWrkspc(event: any) {
    let d: any = {
      collectionId: this.id,
      collectionDataIds: this.cntntArr.map((f: any) => f.contentId)
    };
    this.colctnSrv.rearrCntntColl(d).subscribe((data: any) => {
      if (data) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        this.toastr.success('Rearrange successfully', 'Success!');
      } else {
        this.toastr.error('Unable to rearrange', 'Error!');
      }
    }, (err: any) => {
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.dismissModal();
  }

}
