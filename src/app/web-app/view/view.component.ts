import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT,Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentWorkspaceService } from '../../hub/content-workspace/content-workspace.service';
import { CollectionService } from '../resource/collection/collection.service';
import { ViewSDKClient } from '../../shared/services/view-sdk.service';
import { FileService } from '../../shared/services/file.service';
import { TokenDataService } from '../../shared/services/token-data.service';
import { Content } from '../../shared/models/content';
import { Collection } from '../../shared/models/collection';
import { DEF_ICON,FLDR_ICON } from '../../shared/constants';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  routerSubs!: Subscription;
  id!: string; cntnt!: Content | null;
  loading!: boolean;
  leftSide!: boolean; rightSide!: boolean;
  infoToggle!: boolean; enggToggle!: boolean; tagsToggle!: boolean;
  testArr = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  cmnt!: string;defIcon: any = DEF_ICON;cmntDisb!: boolean;
  elem: any; isFullScreen!: boolean;isSelPage!:boolean;selPages!:any;actPage!:number
  colls!: Collection[];collLoad!:boolean;
  usrInfo: any | null;
  fldrIcon: string = FLDR_ICON;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modalServ: NgbModal,
    private cwServ: ContentWorkspaceService,
    private viewSDKClient: ViewSDKClient,
    private fileServ: FileService,
    private colctnSrv: CollectionService,
    private tokenDataServ: TokenDataService,
    private loc: Location
  ) { }

  ngOnInit(): void {
    this.usrInfo = this.tokenDataServ.getUser();
    this.routerSubs = this.route.params.subscribe(params => {
      this.chkScreenMode();
      this.elem = document.documentElement;
      this.id = params['id'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    if (this.id != '0') {
      this.loading = true;this.isSelPage=false;this.selPages=[];this.actPage = 1;
      this.leftSide = false; this.rightSide = false;this.isFullScreen = false;
      this.infoToggle = true; this.enggToggle = true; this.tagsToggle = true;
      this.colls=[];this.collLoad= false;this.cmntDisb = false;
      this.getCntnt();
    }
  }

  getCntnt() {
    this.cwServ.viewContent(this.id)
      .subscribe((data: any) => {
        if (data && data.result && data.result.id) {
          this.cntnt = data.result;
          switch(this.cntnt!.contentType){
            case 1:
              if(Array.isArray(this.cntnt!.pdfImages)){
                this.cntnt!.pdfImages.sort((a:any, b:any) => a.pageNo - b.pageNo);
              }else{
                this.cntnt!.pdfImages = [];
              }
              this.cntnt!.pdf = this.cntnt!.documentType==4?this.cntnt!.contentPath:this.cntnt!.pdfContentPath;
              this.loading = false;
              // pdfImages
              setTimeout(()=>{
                this.renderPDf();
              },1000)
              break;
            case 2:break;
            case 3:break;
            case 4:break;
          }
        } else {
          this.cntnt = null;
        }
        this.loading = false;
      }, (err: any) => {
        this.cntnt = null;
        this.loading = false;
      })
  }

  renderPDf(){
    if(this.cntnt!.pdf){
      this.viewSDKClient.ready().then(() => {
        /* By default the embed mode will be Full Window */
        let data ={
          defConfg: {
            enableAnnotationAPIs: false,showDownloadPDF: false,
            showLeftHandPanel:false,showPrintPDF: false,
            // includePDFAnnotations:true, // for the save button
            showAnnotationTools: false,
            // defaultViewMode: "FIT_WIDTH",showPageControls:true,
          },
          name: this.cntnt!.name,
          id: this.id,
          divId: 'pdf-div',
          url: this.cntnt!.pdf
        }
        this.viewSDKClient.previewFile(data);
      })
    }
  }

  goToPage(cPimg: any){
    this.actPage = cPimg.pageNo;
    this.viewSDKClient.goToPage(parseInt(cPimg.pageNo))
  }

  addCmnt(type: string) {
    let cmntData = {
      commentText: this.cmnt,
      contentId: parseInt(this.id),
    }
    this.cmntDisb = true;
    this.cwServ.addCmntToContent(cmntData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message ||`Comment added successfully`, 'Success!');
          this.cntnt!.comments!.push({
            createdByFullName: this.usrInfo && this.usrInfo.fN ? this.usrInfo.fN : 'User',
            createdDate: new Date(),
            commentText: this.cmnt
          })
          this.cmnt = '';
        } else {
          this.toastr.error(`Unable to add comment`, 'Error!');
        }
        this.cmntDisb = false;
      }, (err: any) => {
        this.cmntDisb = false;
      });
  }

  downloadFile() {
    this.fileServ.downloadFile(this.cntnt!.contentPath,this.cntnt!.name);
  }

  @HostListener('document:fullscreenchange', ['$event'])
	@HostListener('document:webkitfullscreenchange', ['$event'])
	@HostListener('document:mozfullscreenchange', ['$event'])
	@HostListener('document:MSFullscreenChange', ['$event'])

  fullscreenmodes(event: any){
    this.chkScreenMode();
  }

  chkScreenMode(){
    if(document.fullscreenElement){
      //fullscreen
      this.isFullScreen = true;
    }else{
      //not in full screen
      this.isFullScreen = false;
    }
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  addRemPages(event:any, cPimg:any){
    if(event.checked){
      this.selPages.push(cPimg.pageNo);
    }else{
      const index = this.selPages.findIndex((ele: any) => ele == cPimg.pageNo);
      if (index >= 0) {
        this.selPages.splice(index, 1);
      }
    }
  }

  addCntntToColl(coll: Collection){
    let data:any = {
      id: coll.id, contents: [],
      pages: { pageNumbers: [] }
    }
    if(this.isSelPage){
      this.selPages.sort((a:any, b:any) => a - b);
      data.pages = {
        pageNumbers: this.selPages,
        contentId: parseInt(this.id)
      }
    }else{
      data.contents.push(parseInt(this.id))
    }
    this.collLoad = true;
    this.closeLeftSel();
    this.colctnSrv.addContentColctn(data).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Content added successfully to collection', 'Success!');
      }
      this.dismissModal();
      this.collLoad = false;
    }, (err: any) => {
      this.dismissModal();
      this.collLoad = false;
    });
  }

  closeLeftSel(){
    this.selPages = [];this.actPage=1;
    this.leftSide=false;this.isSelPage=false;
  }

  // get collection list
  listColct() {
    this.collLoad = true;
    this.colctnSrv.colctnList({ pageNo: 0 }).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        this.colls = data.result.results;
      } else {
        this.colls = [];
      }
      this.collLoad = false;
    }, (err: any) => {
      this.colls = [];
      this.collLoad = false;
    });
  }

  goBack(){
    this.loc.back();
  }

  openModal(content: any, type: string) {
    this.listColct();
    this.modalServ.open(content, { size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }

  dismissModal() {
    if (this.modalServ)
      this.modalServ.dismissAll();
  }

  ngOnDestroy(): void {
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
    this.dismissModal();
  }

}
