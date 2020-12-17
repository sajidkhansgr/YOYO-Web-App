import { DEF_IMG } from '../shared/constants';

export class FileHelper {

  public static formatBytes(bytes: any, decimals?: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public static getImg(d: any): string {
    if (d) {
      if (d.imagePath)
        return d.imagePath;
      if (d.urlIconPath)
        return d.urlIconPath;
      else if (d.contentType === 2 && d.contentPath)
        return d.contentPath;
      else if (d.pdfImage)
        return d.pdfImage;
      else if (Array.isArray(d.pdfImages) && d.pdfImages.length > 0 && d.pdfImages[0].imagePath)
        return d.pdfImages[0].imagePath;
    }
    return DEF_IMG;
  }

  public static bytestoOther(bytes: any, type: string){
    let i=0;
    switch(type){
      case 'kb': i=1;break;
      case 'mb': i=2;break;
      case 'gb': i=3;break;
    }
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
  }

}
