import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { TagsService } from './tags.service';
import { Catg } from '../../shared/models/catg';
import { Tag } from '../../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() hubid: any;
  input: any; searInit!: boolean;
  @ViewChild("sear", { static: false }) set altRefIn(el: ElementRef) {
    this.input = el;
    if (this.input && this.input?.nativeElement && !this.searInit) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          tap(() => {
            this.pageNo = 1;
            this.getTags();
          })
        )
        .subscribe();
      this.searInit = true;
    }
  }
  selTag!: any;
  catgLoading!: boolean; tagLoading!: boolean;
  rowInfo: any;
  showRowInfo!: boolean;
  showCatgIn!: boolean;
  catgForm!: FormGroup; tagForm!: FormGroup; updCatgForm!: FormGroup;
  updDisabled!: boolean; catgAddDisabled!: boolean; tagAddDisabled!: boolean;
  catgData!: Catg | undefined;
  catgs!: Catg[]; tags!: Tag[]; allTags!: Tag[];
  pageNo!: number; pageSize!: number; isActiveTag!: boolean; isActiveCatg!: boolean;
  totalCount!: number;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagNames!: string[];
  searchTxt!: string;
  cols!: any[]; sort: any = {};
  activeTags!: number; activeCatgs!: number;
  categoryId!: number | undefined; unCategorized!: boolean | undefined;
  @Input() lmtPage: any;

  constructor(
    private dialog: MatDialog,
    private modalService: NgbModal,
    private tagServ: TagsService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initialiseState();
    this.getCatgs();
    this.getTags();
  }

  initialiseState() {
    this.input = undefined; this.searInit = false;
    this.selTag = 'all';
    this.catgLoading = true; this.tagLoading = true;
    this.rowInfo = {};
    this.showRowInfo = false;
    this.showCatgIn = false;
    this.catgForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.updCatgForm = this.fb.group({
      name: ['', [Validators.required]],
      // published: [''] // needs to be added when api for it is changed
    });
    this.tagForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.updDisabled = false; this.catgAddDisabled = false; this.tagAddDisabled = false;
    this.catgData = undefined;
    this.catgs = []; this.tags = []; this.allTags = [];
    this.pageNo = 1; this.pageSize = this.lmtPage[0]; this.isActiveTag = true; this.isActiveCatg = true;
    this.totalCount = 0;
    this.tagNames = [];
    this.searchTxt = '';
    this.cols = [{ n: "Name", asc: false, k: "name" }, { n: "Status", asc: false, k: "status" }, { n: "Date Modified", asc: false, k: "updatedDate" }];
    this.activeTags = 1; this.activeCatgs = 1;
    this.categoryId = undefined; this.unCategorized = undefined;
    this.sort = {
      sortColumn: 'updatedDate',
      isAscending: false,
    }
  }

  // -------- tags -------- //
  // change displayed tags (isActive)
  chngDispTags() {
    this.activeTags == 1 ? this.isActiveTag = true : this.isActiveTag = false;
    this.pageNo = 1;
    this.getTags();
  }

  // change page size
  pageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.getTags();
  }

  // change page number
  changePageNo(num: number) {
    this.pageNo = num;
    this.getTags();
  }

  // activate/deactivate tag
  actDeactTag() {
    let actDeac: string = `${this.rowInfo.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this tag?`,
        title: `${this.rowInfo.isActive ? 'Deactivate' : 'Activate'} tag`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.tagServ.actDeactTag(this.rowInfo.id.toString(), this.rowInfo.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Tag ${actDeac}d successfully`, 'Success!');
            this.pageNo = 1;
            this.getTags();
          } else {
            this.toastr.error(`Unable to ${actDeac} tag`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  // update tag
  updTag() {
    if (this.tagForm.valid) {
      this.updDisabled = true;
      let tagData: any = {
        id: this.rowInfo.id,
        ...this.tagForm.value,
        categories: this.rowInfo.categoryIDs.map(Number),
        hubId: parseInt(this.hubid)
      };
      this.tagServ.updTag(tagData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Tag updated successfully', 'Success!');
            this.closeDoc();
            this.pageNo = 1;
            this.getTags();
          } else {
            this.toastr.error('Unable to update Tag', 'Error!');
          }
          this.tagForm.reset();
          this.dismissModal();
          this.updDisabled = false;
        }, (err: any) => {
          this.tagForm.reset();
          this.dismissModal();
          this.updDisabled = false;
        });
    }
  }

  // update tag modal
  updTagModal(content: any) {
    this.tagForm.patchValue({ ...this.rowInfo });
    this.openModal(content);
  }

  // tags sorting
  sortChange(col: any, index: number) {
    this.pageNo = 1;
    let colData = { ...col };
    for (let k = 0; k < this.cols.length; k++) {
      this.cols[k].asc = false;
    }
    colData.asc = !colData.asc;
    this.cols[index].asc = colData.asc;
    this.sort = {
      sortColumn: col.k,
      isAscending: colData.asc,
    }
    this.getTags();
  }

  // change tags listing - table
  chngTags(type: any) {
    this.selTag = type;
    if (type == 'all') {
      this.categoryId = undefined;
      this.unCategorized = undefined;
    } else if (type == 'uncatg') {
      this.categoryId = undefined;
      this.unCategorized = true;
    } else {
      this.categoryId = type;
      this.unCategorized = true;
    }
    this.pageNo = 1;
    this.getTags();
  }

  // list of tags
  getTags() {
    this.tagLoading = true;
    this.closeDoc();
    let query = {
      hubId: parseInt(this.hubid),
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchTxt,
      isActive: this.isActiveTag,
      categoryId: this.categoryId,
      unCategorized: this.unCategorized,
      ...this.sort
    }
    this.tagServ.tagList(query)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.tags = data.result.results;
          this.totalCount = data.result.totalCount;
        } else {
          this.tags = [];
          this.totalCount = 0;
        }
        this.tagLoading = false;
      }, (err: any) => {
        this.tags = [];
        this.tagLoading = false;
      });
  }

  // add chips - tags
  addChips(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.tagNames.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  // remove chip - tag
  removeChip(tag: any): void {
    const index = this.tagNames.indexOf(tag);
    if (index >= 0) {
      this.tagNames.splice(index, 1);
      if (this.tagNames.length == 0) {
        this.tagForm.reset();
      }
    }
  }

  // add tags
  addTags() {
    if (this.tagNames.length > 0 && this.tagForm.valid) {
      this.tagAddDisabled = true;
      let tagDataArr = [];
      for (let i = 0; i < this.tagNames.length; i++) {
        tagDataArr.push({
          name: this.tagNames[i],
          categories: this.categoryId ? [this.categoryId] : [],
          isActive: true
        });
      }
      this.tagServ.addTag({ lstTagDTO: tagDataArr, hubId: parseInt(this.hubid) })
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Tags added successfully', 'Success!');
            this.pageNo = 1;
            this.getTags();
          } else {
            this.toastr.error('Unable to add Tag', 'Error!');
          }
          this.tagForm.reset();
          this.tagAddDisabled = false;
          this.tagNames = [];
        }, (err: any) => {
          this.tagForm.reset();
          this.tagAddDisabled = false;
          this.tagNames = [];
        });
    }
  }

  // -------- Category -------- //
  // change displayed categories (isActive)
  changeDispCatgs() {
    this.activeCatgs == 1 ? this.isActiveCatg = true : this.isActiveCatg = false;
    this.getCatgs();
  }

  // activate/deactivate category
  actDeactCatg(catg: Catg) {
    let actDeac: string = `${catg.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this category?`,
        title: `${catg.isActive ? 'Deactivate' : 'Activate'} category`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.tagServ.actDeactCatg(catg.id.toString(), catg.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Category ${actDeac}d successfully`, 'Success!');
            this.pageNo = 1;
            this.getCatgs();
          } else {
            this.toastr.error(`Unable to ${actDeac} category`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  // list of categories
  getCatgs() {
    this.catgLoading = true;
    this.tagServ.catgList({ hubId: this.hubid, isActive: this.isActiveCatg })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.catgs = data.result.results;
        } else {
          this.catgs = [];
        }
        this.catgLoading = false;
      }, (err: any) => {
        this.catgs = [];
        this.catgLoading = false;
      });
  }

  // add category
  addCatg() {
    if (this.catgForm.valid) {
      this.catgAddDisabled = true;
      let catgData: any = {
        ...this.catgForm.value,
        hubId: parseInt(this.hubid),
        isActive: true
      };
      this.tagServ.addCatg(catgData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Category added successfully', 'Success!');
            this.getCatgs();
            this.showCatgIn = false;
          } else {
            this.toastr.error('Unable to add Category', 'Error!');
          }
          this.catgForm.reset();
          this.catgAddDisabled = false;
          this.showCatgIn = false;
        }, (err: any) => {
          this.catgForm.reset();
          this.catgAddDisabled = false;
          this.showCatgIn = false;
        });
    }
  }

  // update category modal
  updCatgModal(content: any, catg: Catg) {
    this.catgData = catg;
    this.updCatgForm.patchValue({ ...this.catgData });
    this.openModal(content);
  }

  // hide add catg form
  cancelCatg() {
    this.showCatgIn = !this.showCatgIn;
    this.catgForm.reset();
  }

  // update category
  updCatg() {
    if (this.updCatgForm.valid) {
      this.updDisabled = true;
      let catgData: any = {
        ...this.updCatgForm.value,
        id: this.catgData!.id,
        hubId: parseInt(this.hubid),
        isActive: this.catgData!.isActive
      };
      this.tagServ.updCatg(catgData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Category updated successfully', 'Success!');
            this.getCatgs();
          } else {
            this.toastr.error('Unable to update Category', 'Error!');
          }
          this.updCatgForm.reset();
          this.dismissModal();
          this.updDisabled = false;
        }, (err: any) => {
          this.updCatgForm.reset();
          this.dismissModal();
          this.updDisabled = false;
        });
    }
  }

  // open modal
  openModal(content: any) {
    this.modalService.open(content, { size: 'lg' }).result
      .then((result: any) => {
      }, (reason) => {
      });
  }

  // close all modals
  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  // toggle tags
  toggleInfo(row: Tag) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.closeDoc();
    } else {
      this.showRowInfo = true;
      this.rowInfo = row;
      this.rowInfo.categoryIDs = [];
      for (let i = 0; i < row.categories.length; i++) {
        this.rowInfo.categoryIDs.push((row.categories[i].id).toString());
      }
    }
  }

  // close doc view
  closeDoc = () => {
    this.showRowInfo = false
    this.rowInfo = {};
  }

  ngOnDestroy(): void {
    this.dismissModal();
  }
}
