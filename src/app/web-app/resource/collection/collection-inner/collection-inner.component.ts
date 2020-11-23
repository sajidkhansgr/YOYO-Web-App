import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { CollectionService } from '../collection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ContentWorkspaceService } from '../../../../hub/content-workspace/content-workspace.service'
import { Collection as Colctn } from '../../../../shared/models/collection';
import { Workspace as Wrkspc } from '../../../../shared/models/workspace';
import { Folder } from '../../../../shared/models/folder';
import { Content } from '../../../../shared/models/content';


@Component({
  selector: 'app-collection-inner',
  templateUrl: './collection-inner.component.html',
  styleUrls: ['./collection-inner.component.scss']
})
export class CollectionInnerComponent implements OnInit {
  view: boolean = true; id!: number; routerSubs!: Subscription;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array
  disabled!: boolean; loading!: boolean;
  selColctn!: Colctn | undefined;
  colctnForm!: FormGroup;
  multiForm!: number;
  contentArr!: Colctn[]; selContentArr: any;
  showBotDiv!: boolean;
  workspcArr!: Wrkspc[]; colctnArr!: Colctn[]; fldrArr!: Folder[]; wid!: number | undefined; fid!: number | undefined;
  showAll!: boolean;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private colctnSrv: CollectionService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private cwServ: ContentWorkspaceService
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
    this.selColctn = undefined; this.selContentArr = [];
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.multiForm = 0;
    this.contentArr = [];
    this.showBotDiv = false;
    this.workspcArr = []; this.colctnArr = []; this.fldrArr = []; this.wid = undefined; this.fid = undefined;
    this.showAll = true;
  }

  // ----- for 'add resource' modal -----
  // get list of workspaces
  getWrkspcList() {
    // this.wrkspcLoading = true;
    this.cwServ.wrkspcListEmp()
      .subscribe((data: any) => {
        // console.log(data);
        if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
          this.workspcArr = data.result;
        }
        // this.wrkspcLoading = false;
      }, (err: any) => {
        console.log(err);
        // this.wrkspcLoading = false;
      });
  }

  // get list of folders
  getFolderList() {
    // this.folderLoading = true;
    let query = {
      workspaceId: this.wid,
      folderId: this.fid,
      isActive: true
    };
    this.cwServ.folderListWrkspc(query).subscribe((data: any) => {
      console.log(data);
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        for (let i = 0; i < data.result.results.length; i++) {
          this.fldrArr.push({ ...data.result.results[i], key: 'fldr' });
        }
      } else {
      }
      // this.folderLoading = false;
    }, (err: any) => {
      // this.folderLoading = false;
    });
  }

  // get list of smart folders
  getSmartFolderList() {
    // this.folderLoading = true;
    let query = {
      workspaceId: this.wid,
      folderId: this.fid,
      isActive: true
    };
    this.cwServ.smartFolderListWrkspc(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        for (let i = 0; i < data.result.results.length; i++) {
          this.fldrArr.push({ ...data.result.results[i], key: 'smtFldr' });
        }
      } else {
      }
      // this.folderLoading = false;
    }, (err: any) => {
      // this.folderLoading = false;
    });
  }

  // show folders on workspace click
  showWorkspcFldrs(wid: any, fid?: any) {
    this.wid = fid ? this.wid : wid;
    this.fid = fid;
    this.fldrArr = [];
    this.getFolderList();
    this.getSmartFolderList();
    this.showAll = false;
    // console.log(this.wid);
    // console.log(this.fid);
  }

  // get collection list
  listColct() {
    // this.loading = true;
    this.colctnSrv.colctnList({}).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.colctnArr = data.result;
      } else {
        this.colctnArr = [];
      }
      // this.loading = false;
    }, (err: any) => {
      // this.loading = false;
    });
  }

  // ----- resource/content -----
  // add resource modal
  addResourceModal(modal: any) {
    this.getWrkspcList();
    this.listColct();
    this.openModal(modal);
  }

  // remove content from collection
  delContent(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to remove this content from collection?`,
        title: `Remove Content`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        let data: any = {
          collectionId: this.id,
          contentIds: [id]
        }
        this.colctnSrv.delContentColctn(data).subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Content removed successfully', 'Success!');
            this.getContentColctn();
          }
        });
      }
    })
  }

  // on selecting a content
  selMe(val: any, id: number) {
    if (val) {
      this.selContentArr.push(id);
    } else {
      this.selContentArr = this.selContentArr.filter((data: any) => data != id);
    }
    if (this.selContentArr.length > 0) {
      this.showBotDiv = true;
    } else {
      this.showBotDiv = false;
    }
  }

  // get content by collection
  getContentColctn() {
    this.loading = true;
    this.colctnSrv.getContentColctn(this.id).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.contentArr = data.result;
      } else {
        this.contentArr = [];
      }
      this.loading = false;
    }, (err: any) => {
      this.loading = false;
    });
  }

  // ----- collection -----
  // delete collection
  delColctn() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete this collection?`,
        title: `Delete Collection`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.colctnSrv.delColctn(this.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Collection deleted successfully', 'Success!');
            this.router.navigate(['/web-app/resource/collections']);
          }
        }, (err: any) => {

        });
      }
    })
  }

  // collection open modal
  colctnModal(modal: any, type: string) {
    if (type == 'add') {
      this.multiForm = 1;
    } else if (type == 'ren') {
      this.multiForm = 2;
      this.colctnForm.patchValue({ ...this.selColctn });
    } else if (type == 'dupl') {
      this.multiForm = 3;
      this.colctnForm.patchValue({ ...this.selColctn });
    }
    this.openModal(modal);
  }

  // collection form submit
  submitColctn() {
    if (this.colctnForm.valid) {
      this.disabled = true;
      let colctnData: any = {
        ...this.colctnForm.value
      };
      if (this.multiForm == 1) {
        this.addColctn(colctnData);
      } else if (this.multiForm == 2) {
        colctnData.id = this.selColctn!.id;
        this.renColct(colctnData);
      } else if (this.multiForm == 3) {
        colctnData.collectionNewName = colctnData.name;
        colctnData.sourceCollectionId = this.selColctn!.id;
        this.duplColct(colctnData);
      }
    }
  }

  // duplicate collection
  duplColct(colctnData: any) {
    this.colctnSrv.duplColctn(colctnData).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.toastr.success(data.message || 'Collection duplicated successfully', 'Success!');
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // rename collection
  renColct(colctnData: any) {
    this.colctnSrv.renColctn(colctnData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection renamed successfully', 'Success!');
        this.getColctn();
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // add collection
  addColctn(colctnData: any) {
    this.colctnSrv.addColctn(colctnData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Collection added successfully', 'Success!');
      }
      this.dismissModal();
      this.disabled = false;
    }, (err: any) => {
      this.dismissModal();
      this.disabled = false;
    });
  }

  // get collection
  getColctn() {
    this.loading = true;
    this.colctnSrv.getColctn(this.id).subscribe((data: any) => {
      if (data && data.result) {
        this.selColctn = data.result;
        this.getContentColctn();
      } else {
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

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

}
