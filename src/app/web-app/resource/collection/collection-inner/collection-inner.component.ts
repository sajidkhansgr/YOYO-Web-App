import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { CollectionService } from '../collection.service';
import { ContentWorkspaceService } from '../../../../hub/content-workspace/content-workspace.service';
import { ExpService } from '../../exp/exp.service';
import { FileService } from '../../file/file.service';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Collection as Colctn } from '../../../../shared/models/collection';
import { Workspace as Wrkspc } from '../../../../shared/models/workspace';
import { Folder } from '../../../../shared/models/folder';
import { Content } from '../../../../shared/models/content';
import { DEF_ICON } from '../../../../shared/constants';
import { ShareMailComponent } from 'src/app/shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from 'src/app/shared/components/get-link/get-link.component';

@Component({
  selector: 'app-collection-inner',
  templateUrl: './collection-inner.component.html',
  styleUrls: ['./collection-inner.component.scss']
})
export class CollectionInnerComponent implements OnInit {
  view: boolean = true; id!: number; routerSubs!: Subscription;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array
  disabled!: boolean; loading!: boolean; wrkspcLoading!: boolean; colctnLoading!: boolean; fldrLoading!: boolean; sFldrLoading!: boolean; cntntLoading!: boolean;
  selColctn!: Colctn | undefined;
  colctnForm!: FormGroup;
  multiForm!: number;
  cntntArr!: Content[]; selContentArr!: Content[];
  showBotDiv!: boolean;
  workspcArr!: Wrkspc[]; colctnArr!: Colctn[]; fldrArr!: Folder[]; selWrkspc!: Wrkspc | undefined; selFldr!: Folder | undefined; mdlCntntArr!: Content[]; addContentArr!: Content[];
  showAll!: boolean | undefined; contentNav!: any[];
  defImg: string = DEF_ICON;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private colctnSrv: CollectionService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private expServ: ExpService,
    private fileServ: FileService,
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
    this.wrkspcLoading = true; this.colctnLoading = true; this.fldrLoading = false; this.sFldrLoading = false; this.cntntLoading = false;
    this.selColctn = undefined; this.selContentArr = [];
    this.colctnForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.multiForm = 0;
    this.cntntArr = [];
    this.showBotDiv = false;
    this.workspcArr = []; this.colctnArr = []; this.fldrArr = []; this.selWrkspc = undefined; this.selFldr = undefined; this.mdlCntntArr = []; this.addContentArr = [];
    this.showAll = true; this.contentNav = [];
  }

  // open modals
  cmnModal(type: string) {
    if (type == 'email')
      this.openModal(ShareMailComponent);
    else if (type == 'getLink')
      this.openModal(GetLinkComponent);
  }

  // ----- for 'add resource' modal -----
  // selecting contents to add
  selectContent(content: Content, val: boolean) {
    if (val) {
      this.addContentArr.push(content);
    } else {
      this.addContentArr = this.addContentArr.filter((data: any) => data.id != content.id);
    }
  }

  // show my files
  showMyFiles(fldr?: any, val?: string) {
    // console.log(fldr);
    this.fldrLoading = true; this.cntntLoading = true;
    val !== 'back' ? fldr ? this.contentNav.push(fldr) : this.contentNav = [{ name: "My Files" }] : undefined;
    let query = {
      folderId: fldr ? fldr.id : undefined
    };
    // console.log(query);
    this.fileServ.myFiles(query).subscribe((data: any) => {
      // console.log(data);
      if (data && data.result) {
        if (Array.isArray(data.result.contents) && data.result.contents.length > 0) {
          this.mdlCntntArr = data.result.contents;
        } else if (Array.isArray(data.result.contents) && data.result.contents.length == 0) {
          this.mdlCntntArr = [];
        }
        if (Array.isArray(data.result.folders) && data.result.folders.length > 0) {
          this.fldrArr = data.result.folders;
        } else if (Array.isArray(data.result.folders) && data.result.folders.length == 0) {
          this.fldrArr = [];
        }
      }
      this.showAll = undefined;
      this.fldrLoading = false; this.cntntLoading = false;
    }, (err: any) => {
      this.showAll = false;
      this.fldrLoading = false; this.cntntLoading = false;
    });
  }

  // get list of workspaces
  getWrkspcList() {
    this.wrkspcLoading = true;
    this.expServ.wrkspcListEmp()
      .subscribe((data: any) => {
        // console.log(data);
        if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
          this.workspcArr = data.result;
        }
        this.wrkspcLoading = false;
      }, (err: any) => {
        this.wrkspcLoading = false;
      });
  }

  // get folder and smart folder from wrkspace and content from workpspace and folder
  getAllObjWrkspc() {
    let params = {
      workspaceId: this.selWrkspc!.id,
      isActive: true,
      folderId: this.selFldr ? this.selFldr!.id : undefined,
    };
    this.expServ.getAllObjWrkspc(params).subscribe((data: any) => {
      if (data && data.result && data.result.result) {
        if (Array.isArray(data.result.result[0].contents) && data.result.result[0].contents.length > 0) {
          this.mdlCntntArr.push(...data.result.result[0].contents);
        }
        if (Array.isArray(data.result.result[0].folders) && data.result.result[0].folders.length > 0) {
          for (let i = 0; i < data.result.result[0].folders.length; i++) {
            this.fldrArr.push({ ...data.result.result[0].folders[i], key: 'fldr' });
          }
        }
        if (Array.isArray(data.result.result[0].smartFolders) && data.result.result[0].smartFolders.length > 0) {
          for (let i = 0; i < data.result.result[0].smartFolders.length; i++) {
            this.fldrArr.push({ ...data.result.result[0].smartFolders[i], key: 'smtFldr' });
          }
        }
      }
      this.fldrLoading = false;
    }, (err: any) => {
      this.fldrLoading = false;
    });
  }

  // get collection list
  listColctn() {
    this.colctnLoading = true;
    this.colctnSrv.colctnList({ pageNo: 0 }).subscribe((data: any) => {
      // console.log(data);
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        this.colctnArr = data.result.results;
      } else {
        this.colctnArr = [];
      }
      this.colctnLoading = false;
    }, (err: any) => {
      this.colctnArr = [];
      this.colctnLoading = false;
    });
  }

  // show folders on workspace click
  showWorkspcFldrs(wrkspc: Wrkspc | undefined, fldr?: Folder) {
    if (fldr) {
      this.contentNav.push(fldr);
      this.selFldr = fldr;
      this.mdlCntntArr = [];
      // this.selFldr!.key == 'fldr' ? this.getContentFldr() : this.getContentSmtFldr(); ---- pending
    } else {
      this.selWrkspc = wrkspc;
      this.contentNav = [wrkspc];
    }
    this.fldrArr = [];
    this.getAllObjWrkspc();
    this.showAll = false;
  }

  // back nav click
  backNav() {
    this.contentNav.pop();
    this.selFldr = this.contentNav.length > 1 ? this.contentNav[this.contentNav.length - 1] : undefined;
    this.fldrArr = [];
    this.mdlCntntArr = [];
    if (this.contentNav.length == 0) {
      this.selFldr = undefined;
      this.showAll = true;
    } else {
      this.showAll === false ? this.getAllObjWrkspc() : this.showMyFiles(this.selFldr, 'back');
      // this.getFolderList();
      // this.getSmartFolderList();
      // this.selFldr ? this.selFldr!.key == 'fldr' ? this.getContentFldr() : this.getContentSmtFldr() : undefined;
    }
  }

  // ----- resource/content -----
  // add selected content
  addContent() {
    this.disabled = true;
    let data: any = {
      id: this.id,
      contents: []
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

  // add resource modal
  addResourceModal(modal: any) {
    this.getWrkspcList();
    this.listColctn();
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
            this.getCntntColl();
          }
        });
      }
    })
  }

  // on selecting a content
  selMe(val: any, content: Content) {
    if (val) {
      this.selContentArr.push(content);
    } else {
      this.selContentArr = this.selContentArr.filter((data: any) => data.id != content.id);
    }
    if (this.selContentArr.length > 0) {
      this.showBotDiv = true;
    } else {
      this.showBotDiv = false;
    }
  }

  // get content by smart folder
  getContentSmtFldr() {
    this.cntntLoading = true;
    let query: any = {
      workspaceId: this.selWrkspc!.id,
      folderId: this.selFldr ? this.selFldr!.id : undefined
    };
    this.cwServ.contentBySmartFolder(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.mdlCntntArr.push(...data.result);
      }
      this.cntntLoading = false;
    }, (err: any) => {
      this.cntntLoading = false;
    });
  }

  // get content by collection
  getCntntColl(colctn?: Colctn) {
    let id: number;
    if (colctn) {
      id = colctn.id;
      this.contentNav = [colctn];
      this.cntntLoading = true;
    } else {
      this.loading = true;
      id = this.id;
    }
    this.colctnSrv.getContentColctn(id).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        colctn ? this.mdlCntntArr = data.result : this.cntntArr = data.result;
      } else if (data && data.result && Array.isArray(data.result) && data.result.length == 0) {
        colctn ? this.mdlCntntArr = [] : this.cntntArr = [];
      }
      if (colctn) {
        this.showAll = false;
        this.cntntLoading = false;
      } else {
        this.loading = false;
      }
    }, (err: any) => {
      if (colctn) {
        this.showAll = false;
        this.cntntLoading = false;
      } else {
        this.loading = false;
      }
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
          } else {
            this.toastr.error(`Unable to ${actDeac} collection`, 'Error!');
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
        this.getCntntColl();
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

  navgToCntnt(cntnt: Content) {
    this.router.navigate(['/web-app/view/' + cntnt.contentId]);
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

  ngOnDestroy(): void {
    this.dismissModal();
  }

}
