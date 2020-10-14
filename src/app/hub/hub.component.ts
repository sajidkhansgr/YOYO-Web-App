import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileDndHelper } from '../shared/file-helper';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HubService } from './hub.service';
import { DEF_ICON } from '../shared/constants';
import { Hub } from '../shared/models/hub';
@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
  host: {
    class: 'w-100'
  },
  encapsulation: ViewEncapsulation.None
})
export class HubComponent implements OnInit {
  id!: string; routerSubs!: Subscription;
  arr!: Array<number>;activeIndex!:number;
  addURLIcon!: string;iconUrl!: any;
  defIcon: any = DEF_ICON; custIcon: any; files!: any[];
  dispPropsSec!: boolean; dispSmFolderSec!: boolean;
  dispGnrl!: boolean; dispSettings!: boolean; dispSmart!: boolean;
  hubInfo!: Hub | null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hubServ: HubService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['id']
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    this.arr=[0];
    this.files = [];this.addURLIcon='';this.iconUrl='';
    this.dispGnrl = true;this.dispSettings=true;this.dispSmart=false;
    this.dispPropsSec = false;this.dispSmFolderSec = true;
    this.custIcon = undefined;
    this.activeIndex = 0;
    this.hubInfo = null;
    this.getHub();
  }

  getHub() {
    this.hubServ.viewHub(this.id)
      .subscribe((data: any) => {
        if(data && data.result && data.result.id){
          this.hubInfo = data.result;
        }else{
          this.toastr.error("invalid Hub")
          this.router.navigate(['/dashboard']);
        }
      }, (err: any) => {
        this.toastr.error("Unable to fetch hub, so please try after some time")
        this.router.navigate(['/dashboard']);
      });
  }


  showGeneral = () => {
    this.dispGnrl = !this.dispGnrl;
  }

  showSettings = () => {
    this.dispSettings = !this.dispSettings;
  }
  showSmart = () => {
    this.dispSmart = !this.dispSmart;
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
    if (this.arr.indexOf(event.index) === -1) {
      this.arr.push(event.index);
    } else {
    }
  }

  iconURLHandler = () => {

  }

  showPropsSection = () => {
    this.dispPropsSec = !this.dispPropsSec;
  }

  showSmartFolderSection = () => {
    this.dispSmFolderSec = !this.dispSmFolderSec;
  }
  // /**
  // * on file drop handler
  // */
  onFileDropped($event: any, isIcon: boolean = false) {
    if (!isIcon)
      this.prepareFilesList($event, isIcon);
    else {
      this.renderImg($event[0])
    }
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any, isIcon: boolean = false) {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
    // preview image
    let input = $event.target;
    if (input.files && input.files && isIcon) {
      this.renderImg(input.files[0])
    }
  }

  renderImg(file: any) {
    if (file) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        console.log("sd")
        this.iconUrl = event.target.result;
      };
      this.custIcon = file;
      reader.readAsDataURL(file);
    }
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 20;
          }
        }, 100);
      }
    }, 300);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>, isIcon: boolean) {
    if (!isIcon) {
      for (const item of files) {
        item.progress = 0;
        this.files.push(item);
      }
      this.uploadFilesSimulator(0);
    }
  }

  getSize(bytes: any) {
    return FileDndHelper.formatBytes(bytes, 2);
  }

}
