import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileDndHelper} from '../shared/file-helper';
import { DEF_ICON } from '../shared/constants';
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

  arr: Array<number> = [0];
  addURLIcon: string = '';
  iconUrl: any = '';
  defIcon: any = DEF_ICON;
  dispPropsSection: boolean = false;
  files: any[] = [];
  custIcon: any;
  constructor() { }

  ngOnInit(): void {
  }

  onTabChange = (event: any) => {
    if (this.arr.indexOf(event.index) === -1) {
      this.arr.push(event.index);
    } else {
    }
  }

  iconURLHandler = () => {

  }

  showPropsSection = () => {
    this.dispPropsSection = !this.dispPropsSection;
  }
  // /**
  // * on file drop handler
  // */
  onFileDropped($event: any,isIcon: boolean=false) {
    if(!isIcon)
      this.prepareFilesList($event, isIcon);
    else{
      this.renderImg($event[0])
    }
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any, isIcon: boolean=false) {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
    // preview image
    let input = $event.target;
    if (input.files && input.files && isIcon) {
      this.renderImg(input.files[0])
    }
  }

  renderImg(file:any){
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
    if(!isIcon){
      for (const item of files) {
        item.progress = 0;
        this.files.push(item);
      }
      this.uploadFilesSimulator(0);
    }
  }

  getSize(bytes:any){
    return FileDndHelper.formatBytes(bytes,2);
  }

}
