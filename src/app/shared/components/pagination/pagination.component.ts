import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LMT_PAGE } from '../../constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pageSize!: number;
  @Input() totalCount!: number;
  @Input() page!: number;
  @Output() pageSizeChange = new EventEmitter();
  @Output() paginationNum = new EventEmitter();
  lmtPage: number[] = LMT_PAGE;

  constructor() { }

  ngOnInit(): void {
  }

  chngPageSize() {
    this.pageSizeChange.emit(this.pageSize);
  }

  chngPageNo() {
    this.paginationNum.emit(this.page);
  }

}
