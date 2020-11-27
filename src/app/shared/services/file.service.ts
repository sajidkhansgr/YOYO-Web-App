import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient,private toastr: ToastrService,){ }

  downloadFile(url: string, name: string) {
    this.toastr.info(`Downloading the file`, 'Please wait!!!');
		this.http.get(`${url}`, {params: {isSpecDownExc:"true"}, responseType: 'blob'})
    .subscribe((data: any) => {
      this.saveFile(data, name);
    }, (err: any) => {

    });
  }

  saveFile(data:any,name: string){
    if (data) {
      // this.blob = new Blob([data], {type: 'application/pdf'});
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = name;
      link.click();
    } else {
      this.toastr.error(`Unable to download file`, 'Error!');
    }
  }


}
