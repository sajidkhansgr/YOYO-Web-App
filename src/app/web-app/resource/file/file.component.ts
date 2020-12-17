import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from './file.service';
import { ContentWorkspaceService } from '../../../hub/content-workspace/content-workspace.service';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';
import { Content } from '../../../shared/models/content';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ShareMailComponent } from '../../../shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from '../../../shared/components/get-link/get-link.component';
import { AddToCollComponent } from '../../../shared/components/add-to-coll/add-to-coll.component';
import { FileHelper } from '../../../shared/file-helper';
import { FILE_EXT } from '../../../shared/constants';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  routerSubs!: Subscription;
  view: boolean = true; fldrLoad!: boolean;
  files!: any[]; loading!: boolean; folders!: any[];
  // folderNav!: any[];
  // selFolder: any = {};
  allFiles: any[] = [];
  // selFiles: any[] = []; selFolders: any[] = [];
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  folderForm!: FormGroup;
  frmType!: string; selFldrData!: any;
  fldrid!: string;
  selData!: any[]; //checkboxes
  urlForm!: FormGroup;urlDisb!: boolean;
  cols:any=[];navg!: any;fileExt = FILE_EXT;
  getIntervalId: any;procFiles:any[]=[];isClose: boolean=false;showProcDetail: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private fileServ: FileService,
    private cwServ: ContentWorkspaceService,
    private brdcrmServ: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.processingData();
    // this.fileExt.toString();
    this.getIntervalId = setInterval(() => {
      this.processingData();
    }, 13000) //13 seconds
    this.routerSubs = this.route.params.subscribe(params => {
      this.fldrid = params['fldrid'] || '';
      this.initialiseState(); // reset and set based on new parameter this time
      this.getFiles();
    });
  }

  initialiseState() {
    this.loading = true;
    // this.folderNav = [];
    this.files = [];
    this.folders = [];
    this.selData = [];
    this.navg = [];
    this.cols = [{ n: "Name", asc: false, k: "name" }, { n: "Date Modified", asc: false, k: "updatedDate" }];
    this.brdcrmList();
    this.initForm();
  }

  initForm() {
    this.folderForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.urlForm = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]]
    });
    this.urlDisb = false;
  }

  // open modals
  cmnModal(type: string, cntnt?: Content) {
    if (type == 'email') {
      const modalRef = this.modalService.open(ShareMailComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'content';
      modalRef.componentInstance.data = cntnt;
    }
    else if (type == 'getLink') {
      const modalRef = this.modalService.open(GetLinkComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'content';
      modalRef.componentInstance.data = cntnt;
    }
    else if (type == 'addToCollection')
      this.openModal(AddToCollComponent);
  }

  // on selecting a folder/content
  selMe(val: any, d: any) {
    if (val) {
      this.selData.push({id: d.id});
    } else {
      const index = this.selData.findIndex((ele: any) => ele.id == d.id);
      if (index >= 0) {
        this.selData.splice(index, 1);
      }
    }
  }

  // remove content from collection
  delContent(id?: number) {
    let dataArr = id ? [id] : this.selData;
    let s = dataArr.length == 1 ? '' : 's';
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to remove ${dataArr.length == 1 ? 'this' : 'these'} content${s} from collection?`,
        title: `Remove Content${s}`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    })
  }

  clrSel(){
    this.selData = [];
  }

  getFiles() {
    let params = {
      folderId: this.fldrid || null
    };
    this.initialiseState();
    this.fileServ.myFiles(params)
      .subscribe((data: any) => {
        if (data && data.result) {
          if (Array.isArray(data.result.folders)) {
            for (let i = 0; i < data.result.folders.length; i++) {
              this.folders.push({ ...data.result.folders[i], isFldr: true });
            }
            // this.folders = data.result.folders;
          }
          if (Array.isArray(data.result.contents)) {
            this.files = data.result.contents;
          }
        }
        this.allFiles = [...this.folders, ...this.files];
        // this.setSelFoldFiles();
        this.loading = false;
      }, (err: any) => {
        // this.setSelFoldFiles();
        this.loading = false;
      })
  }

  // setSelFoldFiles(fl: any = { id: null }) {
  //   this.loading = true;
  //   this.selFolders = [];
  //   this.selFiles = [];
  //   this.allFiles = [];
  //   for (let k = 0; k < this.folders.length; k++) {
  //     if (this.folders[k].folderId === fl.id)
  //       this.selFolders.push({ ...this.folders[k], isFldr: true });
  //   }
  //   for (let k = 0; k < this.files.length; k++) {
  //     if (this.files[k].folderId === fl.id)
  //       this.selFiles.push({ ...this.files[k] });
  //   }
  //   this.allFiles = [...this.selFolders, ...this.selFiles];
  //   this.selFolder = fl;
  //   if (fl.id) {
  //     const index = this.folderNav.findIndex((ele: any) => ele.id == fl.id);
  //     if (index >= 0) {
  //       this.folderNav.splice(index + 1);
  //     } else {
  //       this.folderNav.push(fl);
  //     }
  //   } else {
  //     this.folderNav = [];
  //     this.folderNav.push({ name: 'My Files', id: null });
  //   }
  //   this.loading = false;
  // }

  switchView = () => {
    this.view = !this.view;
  }

  navgToFldr(fl: any) {
    this.router.navigate(['/web-app/resource/my-files/'+(fl.id==0?'':fl.id)]);
  }

  chkFolderAndAdd(fl: any) {
    if (fl.isFldr) {
      this.navgToFldr(fl);
      // this.setSelFoldFiles(fl);
    }
    else {
      // console.log("file click")
      this.router.navigate(['/web-app/view/' + fl.id]);
    }
  }

  openModal(content: any, type: string = '') {
    this.frmType = type;
    if (this.frmType == 'addFldr' || this.frmType == 'updFldr'|| this.frmType == 'url') {
      if (this.fldrLoad || this.urlDisb) {
        this.toastr.info("Please wait for previous request");
        return;
      }
      this.folderForm.reset();
      this.urlForm.reset();
      if (this.frmType == 'updFldr')
        this.folderForm.patchValue({ ...this.selFldrData });
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }

  setSelRow(content: any, fldr: any) {
    if (this.fldrLoad) {
      this.toastr.info("Please wait for previous request");
    } else {
      this.selFldrData = fldr;
      this.openModal(content, 'updFldr');
    }
  }

  onSubmit() {
    if (this.folderForm.valid) {
      this.fldrLoad = true;
      let fldrData: any = {
        ...this.folderForm.value,
        workspaceId: null,
        folderId: this.fldrid ? parseInt(this.fldrid) : null
        // folderId: this.selFolder.id ? this.selFolder.id : null
      }
      if (this.frmType == 'updFldr') {
        this.editFolder(fldrData);
      } else {
        this.addFolder(fldrData);
      }
    }
  }

  // add folder
  addFolder(fldrData: any) {
    this.fileServ.addFldr(fldrData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Folder added successfully', 'Success!');
          this.getFiles();
        } else {
          this.toastr.error('Unable to add Folder', 'Error!');
        }
        this.fldrLoad = false;
        this.dismissModal();
      }, (err: any) => {
        this.fldrLoad = false;
        this.dismissModal();
      });
  }

  // edit/rename folder
  editFolder(fldrData: any) {
    fldrData.id = this.selFldrData.id;
    this.fileServ.updFldr(fldrData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Folder rename successfully', 'Success!');
          // this.getFiles();
          //local updating
          this.locUpd('allFiles',fldrData);
          this.locUpd('folders',fldrData);
          // this.succEeditFldr('folderNav');
          // this.succEeditFldr('allFiles');
          // this.succEeditFldr('folders');
          // this.succEeditFldr('files');
          // this.succEeditFldr('selFolders');
          // this.succEeditFldr('selFiles');
        } else {
          this.toastr.error('Unable to rename Folder', 'Error!');
        }
        this.fldrLoad = false;
        this.dismissModal();
      }, (err: any) => {
        this.fldrLoad = false;
        this.dismissModal();
      });
  }

  locUpd(type: 'allFiles' | 'folders', data:any){
    const index = this[type].findIndex((ele: any) => ele.id == data.id && ele.isFldr);
     if (index >= 0) {
       this[type][index].name = data.name;
     }
  }

  //showing deleted but actually its deactive
  delCntntOrFldr(d: any, isFldr: boolean = false) {
    let mdlMsg, mdlTtl, stsData: any = { id: d.id }, res: string;
    if (isFldr || d.isFldr) {
      mdlMsg = ` folder`; mdlTtl = `Delete Folder`;
      res = `Folder deleted`;
      stsData.isFldr = true;
    } else {
      mdlMsg = ``; mdlTtl = `Delete Content`;
      res = `Content deleted`;
      stsData.status = 2; //move to trash
    }
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete ${d.name}${mdlMsg}?`,
        title: mdlTtl
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.deactCtntOrFldr(stsData).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`${res} successfully.`, 'Success!');
            this.getFiles();
          } else {
            this.toastr.error(`Please try after some time`, 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // succEeditFldr(type: 'folderNav' | 'allFiles' | 'folders' | 'files' | 'selFolders' | 'selFiles') {
  //   const index = this[type].findIndex((ele: any) => ele.id == this.selFldrData.id);
  //   if (index >= 0) {
  //     this[type][index].name = this.folderForm.value.name;
  //   }
  // }

  // upload button
  uploadBtn = (uf: any) => {
    uf?.click();
  }
  //"Only .jpeg, .png, .jpg ,.mp4, .xls, .xlsx, .ppt, .pptx, .doc, .docx and .pdf files are allowed."
  uplCntnt($event: any){
    if ($event.target && $event.target.files){
      let mulFile = $event.target.files;
      let size=0;
      for(let k=0;k<mulFile.length;k++){
        if(this.fileExt.filter(ext => mulFile[k].name.includes(ext)).length<=0){
          this.toastr.error("Not valid file, please try with other file", "File Type Error");
          return;
        }
        size += mulFile[k].size;
      }
      if(FileHelper.bytestoOther(size,'gb')<1){
        this.addCntnt({mulFile}, 'Content');
        return;
      }else{
        this.toastr.error("Size should be less than 1 GB", "File Size Error");
        return;
      }
      // let d = {
      //   mulFile: $event.target.files
      // }
      // this.addCntnt({mulFile}, 'Content');
    }
  }

  onUrlSubmit(){
    if (this.urlForm.valid) {
      let urlData: any = {
        ...this.urlForm.value,
        isUrl: true
      }
      this.addCntnt(urlData, 'Url');
      this.urlDisb = true;
    }
  }

  addCntnt(cntntData: any, type: string){
    cntntData.folderId= this.fldrid ? parseInt(this.fldrid) : null;
    this.fileServ.addMyCntnt(cntntData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message||`${type} added successfully`, 'Success!');
        } else {
          this.toastr.error('Unable to add', 'Error!');
        }
        this.urlChk(type);
      }, (err: any) => {
        this.urlChk(type);
      });
  }

  urlChk(type: string){
    if(type=='Url'){
      this.urlDisb = false;
      this.dismissModal();
    }
    this.getFiles();
    this.processingData();
    this.isClose = false;
  }

  brdcrmList() {
    let params = {
      parentFolderId: this.fldrid?this.fldrid:null
    }
    this.brdcrmServ.getList(params, true)
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result) && data.result.length > 0) {
          let arr = data.result;
          arr.sort((a:any, b:any) => a.level - b.level);
          this.navg = arr;
        } else {
          //no data found
        }
      }, (err: any) => {
      })
  }

  processingData() {
    this.fileServ.procesMyData()
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result)) {
          this.procFiles = data.result;
        }
      }, (err: any) => {
      });
  }

  getImg(d: any): string {
    return FileHelper.getImg(d);
  }

  // copy link button
  copyLink = (link: any) => {
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (this.getIntervalId) {
      clearInterval(this.getIntervalId);
    }
    this.dismissModal();
  }

}
