import { Component, OnInit } from '@angular/core';
import { FileDndHelper } from '../../shared/file-helper';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ImportComponent implements OnInit {
  files: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // /**
  // * on file drop handler
  // */
  onFileDropped($event: any, isIcon: boolean = false) {
    console.log("dsa")
    if (!isIcon)
      this.prepareFilesList($event, isIcon);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any, isIcon: boolean = false) {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
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
    console.log("dasdasads",files)
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
