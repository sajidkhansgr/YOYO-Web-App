import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-file-progess',
  templateUrl: './file-progess.component.html',
  styleUrls: ['./file-progess.component.scss']
})
export class FileProgessComponent implements OnInit {
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
