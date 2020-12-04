import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-to-coll',
  templateUrl: './add-to-coll.component.html',
  styleUrls: ['./add-to-coll.component.scss']
})
export class AddToCollComponent implements OnInit {

  constructor(public modalRef: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
