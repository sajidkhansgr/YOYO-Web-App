import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareMailService } from './share-mail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-share-mail',
  templateUrl: './share-mail.component.html',
  styleUrls: ['./share-mail.component.scss']
})
export class ShareMailComponent implements OnInit {
  emailForm!: FormGroup; link!: string;
  disabled!: boolean;
  @Input() private type!: string;
  @Input() private data!: any;

  constructor(
    public modalRef: NgbActiveModal,
    private fb: FormBuilder,
    private mailSrv: ShareMailService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.initialiseState();
  }

  initialiseState() {
    this.emailForm = this.fb.group({
      emailAddresses: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      sendMeCopy: ['']
    });
    this.disabled = false;
    if (this.type === 'collection') {
      this.link = `<a href="http://hiforce.imobisoft.eu/web-app/resource/collections/${this.data.id}">${this.data.name}</a>`;
    } else if (this.type === 'content') {
      this.link = `<a href="http://hiforce.imobisoft.eu/web-app/view/${this.data.contentId ? this.data.contentId : this.data.id}">${this.data.name}</a>`;
    }
  }

  openModal() {

  }

  sendMail() {
    if (this.emailForm.valid) {
      this.disabled = true;
      let data = {
        ...this.emailForm.value,
        sendMeCopy: false
      }
      data.emailAddresses = [data.emailAddresses];
      data.body += `
      <br />
      <br />
      Attached items:<br />
      1. ${this.link}
      `;
      this.mailSrv.sendMail(data).subscribe((data: any) => {
        if (data && data.result) {
          this.toastr.success(data.result || 'Email sent successfully', 'Success!');
        } else {
          this.toastr.error(data.result || 'Email not sent', 'Error!');
        }
        this.disabled = false;
        this.modalRef.dismiss();
      }, (err: any) => {
        this.disabled = false;
        this.modalRef.dismiss();
      });
    }
  }

}
