import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FileService } from './file.service';
import { ContentWorkspaceService } from '../../../hub/content-workspace/content-workspace.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  view: boolean = true;disabled!: boolean;
  files!:any[];loading!: boolean;folders!:any[];
  folderNav!:any[];
  selFolder:any={};
  allFiles:any[]=[];selFiles:any[]=[];selFolders:any[]=[];
  testArr = [1,2,3,4,5,6,7,8,9];

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private fileServ: FileService,
    private cwServ: ContentWorkspaceService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.folderNav = [];
    // setTimeout(()=>{
      this.getFiles();
    // },9000)
  }

  getFiles(){
    this.fileServ.myFiles({})
      .subscribe( (data: any)=>{
        if(data && data.result){
          if(Array.isArray(data.result.folders)){
            this.folders = data.result.folders;
          }else{
            this.folders = [];
          }
          if(Array.isArray(data.result.contents)){
            this.files = data.result.contents;
          }else{
            this.files = [];
          }
        }else{
          this.files = [];
          this.folders = [];
        }
        this.setSelFoldFiles();
        console.log(data);
        this.loading = false;
      }, (err:any)=>{
        this.files = [];
        this.folders = [];
        this.setSelFoldFiles();
        this.loading = false;
      })
  }

  setSelFoldFiles(fl:any={id: null}){
    this.loading = true;
    this.selFolders = [];
    this.selFiles = [];
    this.allFiles = [];
    for(let k=0;k<this.folders.length;k++){
      if(this.folders[k].folderId === fl.id)
        this.selFolders.push({...this.folders[k],isFldr: true});
    }
    for(let k=0;k<this.files.length;k++){
      if(this.files[k].folderId === fl.id)
        this.selFiles.push({...this.files[k]});
    }
    this.allFiles = [...this.selFolders,...this.selFiles];
    this.selFolder = fl;
    if(fl.id){
      const index = this.folderNav.findIndex((ele: any) => ele.id == fl.id);
      if (index >= 0) {
        this.folderNav.splice(index+1);
      }else{
        this.folderNav.push(fl);
      }
    }else{
      this.folderNav = [];
      this.folderNav.push({name: 'My Files',id: null});
    }
    this.loading = false;
  }

  switchView = () => {
    this.view = !this.view;
  }

  chkFolderAndAdd(fl:any){
    if(fl.isFldr)
      this.setSelFoldFiles(fl);
    else{
      // console.log("file click")
      this.router.navigate(['/web-app/view/'+fl.id]);
    }
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


  // add folder
  addFolder(folderData: any) {
      // console.log(folderData);
      this.cwServ.addFolder(folderData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.toastr.success(data.message || 'Folder added successfully', 'Success!');
          } else {
            this.toastr.error('Unable to add Folder', 'Error!');
          }
          this.disabled = false;
          this.dismissModal();
        }, (err: any) => {
          console.log(err);
          this.disabled = false;
          this.dismissModal();
        });
  }

  // edit/rename folder
  editFolder(folderData: any) {
      // console.log(folderData);
      this.cwServ.addFolder(folderData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.toastr.success(data.message || 'Folder rename successfully', 'Success!');
          } else {
            this.toastr.error('Unable to rename Folder', 'Error!');
          }
          this.disabled = false;
          this.dismissModal();
        }, (err: any) => {
          console.log(err);
          this.disabled = false;
          this.dismissModal();
        });
  }

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
