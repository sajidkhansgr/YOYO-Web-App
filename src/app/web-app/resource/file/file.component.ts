import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from './file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  view: boolean = true;
  testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // test array
  files!:any[];loading!: boolean;folders!:any[];
  allFiles!:any[];
  constructor(
    private modalService: NgbModal,
    private fileServ: FileService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(()=>{
      this.getFiles();
    },9000)
  }

  getFiles(){
    this.fileServ.myFiles({})
      .subscribe( (data: any)=>{
        if(data && data.reswult){
          if(Array.isArray(data.result.folders)){
            this.folders = data.result.folders;
          }else{
            this.folders = [];
          }
          if(Array.isArray(data.result.contents)){
            this.files = [];
            this.folders = this.folders.map(f => ({...f, cntnts: [],isFldr: true}));
            for(let k=0;k<data.result.contents.length;k++){
              if(data.result.contents[k].folderId){
                const index = this.folders.findIndex((fl: any) => fl.id == data.result.contents[k].folderId);
                if (index >= 0)
                  this.folders[index].cntnts.push( data.result.contents[k]);
                else
                  this.files.push(data.result.contents[k]);
              }else{
                this.files.push(data.result.contents[k]);
              }
            }
          }else{
            this.files = [];
          }
          this.allFiles = [...this.folders,...this.files];
        }else{
          this.files = [];
          this.folders = [];
          this.allFiles = [];
        }
        console.log(data);
        this.loading = false;
      }, (err:any)=>{
        this.files = []
        this.folders = []
        this.allFiles = [];
        this.loading = false;
      })
  }

  switchView = () => {
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
}
