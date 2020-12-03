import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-get-link',
  templateUrl: './get-link.component.html',
  styleUrls: ['./get-link.component.scss']
})
export class GetLinkComponent implements OnInit {

  constructor(
    private modalRef: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
