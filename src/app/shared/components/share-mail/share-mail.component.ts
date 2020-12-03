import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-share-mail',
  templateUrl: './share-mail.component.html',
  styleUrls: ['./share-mail.component.scss']
})
export class ShareMailComponent implements OnInit {

  constructor(
    private modalRef: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
