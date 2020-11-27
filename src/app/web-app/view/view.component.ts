import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { DEF_ICON } from '../../shared/constants';
import { ContentWorkspaceService } from '../../hub/content-workspace/content-workspace.service';
import { ViewSDKClient } from '../../shared/services/view-sdk.service';
import { FileService } from '../../shared/services/file.service';
import { Content } from '../../shared/models/content';

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
  cmnt!: string;defIcon: any = DEF_ICON;
  elem: any; isFullScreen!: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cwServ: ContentWorkspaceService,
    private viewSDKClient: ViewSDKClient,
    private fileServ: FileService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.chkScreenMode();
      this.elem = document.documentElement;
      this.id = params['id'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    if (this.id != '0') {
      this.loading = true;
      this.leftSide = false; this.rightSide = false;this.isFullScreen = false;
      this.infoToggle = true; this.enggToggle = true; this.tagsToggle = true;
      this.getCntnt();
    }
  }

  getCntnt() {
    this.cwServ.viewContent(this.id)
      .subscribe((data: any) => {
        // console.log(data, "")
        if (data && data.result && data.result.id) {
          this.cntnt = data.result;
          switch(this.cntnt!.contentType){
            case 1:
              if(Array.isArray(this.cntnt!.pdfImages)){
                this.cntnt!.pdfImages.sort((a:any, b:any) => a.pageNo - b.pageNo);
              }else{
                this.cntnt!.pdfImages = [];
              }
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
          // console.log(this.cntnt!.pdfImages,'this.cntnt.pdfImages');
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
    if(this.cntnt!.pdfContentPath){
      this.viewSDKClient.ready().then(() => {
        /* By default the embed mode will be Full Window */
        let data ={
          defConfg: {
            enableAnnotationAPIs: false,
            showLeftHandPanel:false,showPrintPDF: false,
            // includePDFAnnotations:true, // for the save button
            showAnnotationTools: false,
            // defaultViewMode: "FIT_WIDTH",showPageControls:true,
          },
          name: this.cntnt!.name,
          id: this.id,
          divId: 'pdf-div',
          url: this.cntnt!.pdfContentPath
        }
        this.viewSDKClient.previewFile(data);
      })
    }
  }

  goToPage(cPimg: any){
    this.viewSDKClient.goToPage(parseInt(cPimg.pageNo))
  }

  addCmnt(type: string) {
    /* let cmntData = {
      commentText: this.cmnt,
      contentId: this.id,
    }
    // this.disb[type] = true;
    this.cwServ.addCmntToContent(cmntData)
      .subscribe((data: any) => {
        if (data) {
          // this.rowInfo.comments.push({
          //   createdByFullName: this.usrInfo && this.usrInfo.fN ? this.usrInfo.fN : 'User',
          //   createdDate: new Date(),
          //   commentText: this.cmnt
          // })
          this.cmnt = '';
          this.toastr.success(`Comment saved successfully`, 'Success!');
        } else {
          this.toastr.error(`Unable to add comment`, 'Error!');
        }
        // this.disb[type] = false;
      }, (err: any) => {
        // this.disb[type] = false;
      });
    */
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

  ngOnDestroy(): void {
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }

}
