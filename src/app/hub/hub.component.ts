import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileDndHelper} from '../shared/file-helper';

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
  showCustomIcon: boolean = false;
  addURLIcon: string = '';
  iconUrl: any = 'assets/images/def-icon.png';
  dispPropsSection: boolean = false;

  files: any[] = [];
  defIcon: any[] = [];
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
    if (this.addURLIcon === 'cust-icon') {
      this.showCustomIcon = true;
    } else {
      this.showCustomIcon = false;
    }
  }
  showPropsSection = () => {
    this.dispPropsSection = !this.dispPropsSection;
  }
  // /**
  // * on file drop handler
  // */
  // onFileDropped($event: any) {
  //   this.prepareFilesList($event);
  // }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any, isIcon: boolean=false) {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
    // preview image
    let input = $event.target;
    if (input.files && input.files && isIcon) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.iconUrl = event.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.iconUrl = 'assets/images/def-icon.png';
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
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
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
