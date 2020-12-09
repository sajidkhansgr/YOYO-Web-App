import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from './file.service';
import { ContentWorkspaceService } from '../../../hub/content-workspace/content-workspace.service';
import { Content } from '../../../shared/models/content';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ShareMailComponent } from '../../../shared/components/share-mail/share-mail.component';
import { GetLinkComponent } from '../../../shared/components/get-link/get-link.component';
import { AddToCollComponent } from '../../../shared/components/add-to-coll/add-to-coll.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  routerSubs!: Subscription;
  view: boolean = true; fldrLoad!: boolean;
  files!: any[]; loading!: boolean; folders!: any[];
  folderNav!: any[];
  // selFolder: any = {};
  allFiles: any[] = [];
  // selFiles: any[] = []; selFolders: any[] = [];
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  folderForm!: FormGroup;
  frmType!: string; selFldrData!: any;
  fldrid!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private fileServ: FileService,
    private cwServ: ContentWorkspaceService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.fldrid = params['fldrid'] || '';
      this.initialiseState(); // reset and set based on new parameter this time
      this.getFiles();
    });

  }

  initialiseState() {
    this.loading = true;
    this.folderNav = [];
    this.files = [];
    this.folders = [];
    this.initForm();
  }

  initForm() {
    this.folderForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  // open modals
  cmnModal(type: string, cntnt?: Content) {
    if (type == 'email') {
      const modalRef = this.modalService.open(ShareMailComponent, { size: 'lg' });
      modalRef.componentInstance.type = 'content';
      modalRef.componentInstance.data = cntnt;
    }
    else if (type == 'getLink')
      this.openModal(GetLinkComponent);
    else if (type == 'addToCollection')
      this.openModal(AddToCollComponent);
  }

  getFiles() {
    let params = {
      folderId: this.fldrid || null
    };
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
    this.router.navigate(['/web-app/resource/my-files/' + fl.id]);
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
    if (this.frmType == 'addFldr' || this.frmType == 'updFldr') {
      if (this.fldrLoad) {
        this.toastr.info("Please wait for previous request");
        return;
      }
      this.folderForm.reset();
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
          this.getFiles();
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

  //showing deleted but actually its deactive
  delCntntOrFldr(d:any, isFldr:boolean=false){
    let mdlMsg,mdlTtl, stsData:any = {id: d.id},res:string;
    if(isFldr || d.isFldr){
      mdlMsg = ` folder`; mdlTtl = `Delete Folder`;
      res = `Folder deleted`;
      stsData.isFldr = true;
    }else{
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
    this.dismissModal();
  }

}
