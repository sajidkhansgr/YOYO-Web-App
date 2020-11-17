import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { LMT_PAGE } from '../../constants'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() pageSize!: number;
  @Input() totalCount!: number;
  @Input() page!: number;
  @Output() pageSizeChange = new EventEmitter();
  @Output() paginationNum = new EventEmitter();
  lmtPage: number[] = LMT_PAGE;
  text: string = '';

  constructor() { }

  ngOnChanges(): void {
    this.text = `Showing ${(this.page * this.pageSize) - (this.pageSize - 1)}-${Math.min((this.page * this.pageSize), this.totalCount)} of ${this.totalCount}`;
  }

  chngPageSize() {
    this.pageSizeChange.emit(this.pageSize);
  }

  pageChangeFunc() {
    this.paginationNum.emit(this.page);
  }

}
