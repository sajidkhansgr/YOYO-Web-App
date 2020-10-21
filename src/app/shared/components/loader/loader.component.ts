import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() type: any;
  spinnerClass: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.type === 'page') {
      this.spinnerClass = 'page-spinner';
    } else if (this.type === 'btn') {
      this.spinnerClass = 'btn-spinner';
    }
  }

}
