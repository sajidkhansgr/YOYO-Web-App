import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareMailService } from './share-mail.service';
import { ToastrService } from 'ngx-toastr';
import { AddRsrcComponent } from '../add-rsrc/add-rsrc.component';
import { ShareService } from 'src/app/web-app/share/share.service';

@Component({
  selector: 'app-share-mail',
  templateUrl: './share-mail.component.html',
  styleUrls: ['./share-mail.component.scss']
})
export class ShareMailComponent implements OnInit {
  emailForm!: FormGroup; link!: any;
  disabled!: boolean;
  @Input() private type!: string;
  @Input() private data!: any;

  constructor(
    public modalRef: NgbActiveModal,
    private fb: FormBuilder,
    private mailSrv: ShareMailService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private shareSrv: ShareService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
  }

  initialiseState() {
    this.emailForm = this.fb.group({
      emailAddresses: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      sendMeCopy: [''],
      allowDownload: [true]
    });
    this.disabled = false;
    if (this.type === 'collection') {
      this.link = `<a href="http://hiforce.imobisoft.eu/web-app/resource/collections/${this.data.id}">${this.data.name}</a>`;
    } else if (this.type === 'content') {
      // this.link = `<a href="http://hiforce.imobisoft.eu/web-app/view/${this.data.contentId ? this.data.contentId : this.data.id}">${this.data.name}</a>`;
      this.getContentLink();
      // console.log(this.data);
    }
  }

  // add more resource
  openRsrcModal() {
    const modalRef = this.modalService.open(AddRsrcComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        // this.addContentArr = result;
        // this.addContent();
      }
    });
  }

  // send mail
  sendMail() {
    console.log(this.emailForm.get('allowDownload')!.value);
    // if (this.emailForm.valid) {
    //   this.disabled = true;
    //   let data = {
    //     ...this.emailForm.value,
    //     sendMeCopy: false
    //   }
    //   data.emailAddresses = [data.emailAddresses];
    //   data.body += `
    //   <br />
    //   <br />
    //   Attached items:<br />
    //   1. ${this.link}
    //   `;
    //   this.mailSrv.sendMail(data).subscribe((data: any) => {
    //     if (data && data.result) {
    //       this.toastr.success(data.result || 'Email sent successfully', 'Success!');
    //     } else {
    //       this.toastr.error(data.result || 'Email not sent', 'Error!');
    //     }
    //     this.disabled = false;
    //     this.modalRef.dismiss();
    //   }, (err: any) => {
    //     this.disabled = false;
    //     this.modalRef.dismiss();
    //   });
    // }
  }

  // get share link of content
  getContentLink() {
    let data: any = {
      allowDownload: this.emailForm.get('allowDownload')!.value,
      shareContents: []
    }
    data.shareContents.push({
      contentId: this.data.contentId,
      pageNumber: this.data.pageNo
    });
    console.log(data);
    // this.shareSrv.addShare(data).subscribe((data: any) => {
    //   if (data && data.result) {
    //     this.link = { name: this.data.name, link: data.result };
    //     console.log(this.link);
    //   }
    // }, (err: any) => {

    // });
  }

}
