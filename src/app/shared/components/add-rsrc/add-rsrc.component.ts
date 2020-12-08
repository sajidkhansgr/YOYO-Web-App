import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Workspace as Wrkspc } from '../../models/workspace';
import { Folder } from '../../models/folder';
import { Collection as Colctn } from '../../models/collection';
import { Content } from '../../models/content';
import { ExpService } from 'src/app/web-app/resource/exp/exp.service';
import { FileService } from 'src/app/web-app/resource/file/file.service';
import { CollectionService } from 'src/app/web-app/resource/collection/collection.service';
import { ContentWorkspaceService } from 'src/app/hub/content-workspace/content-workspace.service';

@Component({
  selector: 'app-add-rsrc',
  templateUrl: './add-rsrc.component.html',
  styleUrls: ['./add-rsrc.component.scss']
})
export class AddRsrcComponent implements OnInit {
  showAll!: boolean | undefined; contentNav!: any[];
  workspcArr!: Wrkspc[]; colctnArr!: Colctn[]; fldrArr!: Folder[]; selWrkspc!: Wrkspc | undefined; selFldr!: Folder | undefined; mdlCntntArr!: Content[]; addContentArr!: Content[];
  wrkspcLoading!: boolean; colctnLoading!: boolean; fldrLoading!: boolean; cntntLoading!: boolean;
  disabled!: boolean;


  constructor(
    public modalRef: NgbActiveModal,
    private expServ: ExpService,
    private fileServ: FileService,
    private colctnSrv: CollectionService,
    private cwServ: ContentWorkspaceService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
    this.getWrkspcList();
    this.listColctn();
  }

  initialiseState() {
    this.wrkspcLoading = true; this.colctnLoading = true; this.fldrLoading = false; this.cntntLoading = false;
    this.workspcArr = []; this.colctnArr = []; this.fldrArr = []; this.selWrkspc = undefined; this.selFldr = undefined; this.mdlCntntArr = []; this.addContentArr = [];
    this.showAll = true; this.contentNav = [];
    this.disabled = false;
  }

  // on submit
  addContent() {
    this.modalRef.close(this.addContentArr);
  }

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
    this.fldrLoading = true; this.cntntLoading = true;
    val !== 'back' ? fldr ? this.contentNav.push(fldr) : this.contentNav = [{ name: "My Files" }] : undefined;
    let query = {
      folderId: fldr ? fldr.id : undefined
    };
    this.fileServ.myFiles(query).subscribe((data: any) => {
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
    this.fldrLoading = true;
    let params = {
      workspaceId: this.selWrkspc!.id,
      isActive: true,
      folderId: this.selFldr ? this.selFldr!.id : undefined,
    };
    this.expServ.getAllObjWrkspc(params).subscribe((data: any) => {
      if (data && data.result) {
        if (Array.isArray(data.result[0].contents) && data.result[0].contents.length > 0) {
          this.mdlCntntArr.push(...data.result[0].contents);
        }
        if (Array.isArray(data.result[0].folders) && data.result[0].folders.length > 0) {
          for (let i = 0; i < data.result[0].folders.length; i++) {
            this.fldrArr.push({ ...data.result[0].folders[i], key: 'fldr' });
          }
        }
        if (Array.isArray(data.result[0].smartFolders) && data.result[0].smartFolders.length > 0) {
          for (let i = 0; i < data.result[0].smartFolders.length; i++) {
            this.fldrArr.push({ ...data.result[0].smartFolders[i], key: 'smtFldr' });
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
    this.colctnArr = [];
    this.colctnLoading = true;
    this.colctnSrv.colctnList({ pageNo: 0 }).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        this.colctnArr = data.result.results;
      }
      this.colctnLoading = false;
    }, (err: any) => {
      this.colctnLoading = false;
    });
  }

  // show folders on workspace click and folder click
  showWorkspcFldrs(wrkspc: Wrkspc | undefined, fldr?: Folder) {
    if (fldr) {
      this.contentNav.push(fldr);
      this.selFldr = fldr;
      this.mdlCntntArr = [];
    } else {
      this.selWrkspc = wrkspc;
      this.contentNav = [wrkspc];
    }
    fldr ? this.selFldr!.key == 'fldr' ? this.getAllObjWrkspc() : this.getContentSmtFldr() : this.getAllObjWrkspc();
    this.fldrArr = [];
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

  // get content by collection
  getCntntColl(colctn: Colctn) {
    let id: number = colctn.id;
    this.contentNav = [colctn];
    this.cntntLoading = true;
    this.colctnSrv.getContentColctn(id).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.mdlCntntArr = data.result;
      } else if (data && data.result && Array.isArray(data.result) && data.result.length == 0) {
        this.mdlCntntArr = [];
      }
      this.showAll = false;
      this.cntntLoading = false;
    }, (err: any) => {
      this.showAll = false;
      this.cntntLoading = false;
    });
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
}
