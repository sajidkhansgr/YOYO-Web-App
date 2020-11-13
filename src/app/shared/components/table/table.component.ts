import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tag } from '../../models/tag';
import { LMT_PAGE } from '../../constants'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() showRowInfo!: boolean;
  @Input() columns!: any[];
  @Input() dataLoading: boolean = true;
  @Input() data!: Tag[];
  @Input() pageSize!: number;
  @Input() totalCount!: number;
  @Output() sort = new EventEmitter();
  @Output() toggleInfo = new EventEmitter();
  @Output() pageSizeChange = new EventEmitter();
  @Output() paginationNum = new EventEmitter();
  lmtPage: number[] = LMT_PAGE;
  page = 1;

  constructor() { }

  ngOnInit(): void {
  }

  sortFunc(col: any) {
    this.sort.emit(col);
  }

  toggleInfoFunc(tag: any) {
    this.toggleInfo.emit(tag);
  }

  chngPageSize() {
    this.pageSizeChange.emit(this.pageSize);
  }

  pageChangeFunc() {
    this.paginationNum.emit(this.page);
  }

}
