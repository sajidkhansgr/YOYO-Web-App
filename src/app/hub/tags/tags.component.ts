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
  catgLoading!: boolean; tagLoading!: boolean;docLoading!: boolean;
  rowInfo: any;
  showRowInfo!: boolean;
  showCatgIn!: boolean;
  catgForm!: FormGroup; tagForm!: FormGroup; updTagForm!: FormGroup; updCatgForm!: FormGroup;
  updDisabled!: boolean; catgAddDisabled!: boolean; tagAddDisabled!: boolean;
  catgData!: Catg | undefined;
  catgs!: Catg[]; tags!: Tag[]; allTags!: Tag[];
  pageNo!: number; pageSize!: number; isActiveTag!: boolean; isActiveCatg!: boolean;
  totalCount!: number;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagNames!: string[];
  searchTxt!: string;
  cols!: any[];sort: any = {};
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
    this.updTagForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.updDisabled = false; this.catgAddDisabled = false; this.tagAddDisabled = false;
    this.catgData = undefined;
    this.catgs = []; this.tags = []; this.allTags = [];
    this.pageNo = 1; this.pageSize = this.lmtPage[0]; this.isActiveTag = true; this.isActiveCatg = true;
    this.totalCount = 0;
    this.tagNames = [];
    this.searchTxt = '';
    this.cols = [{ n: "Name", asc: false, k:"name" }, { n: "Status", asc: false, k:"status" }, { n: "Date Modified", asc: false, k:"updatedDate" }];
    this.activeTags = 1; this.activeCatgs = 1;
    this.categoryId = undefined; this.unCategorized = undefined;
  }

  // resetCh() {
  //   this.tagForm.reset()
  // }

  // -------- tags -------- //
  // change displayed tags (isActive)
  chngDispTags() {
    this.activeTags == 1 ? this.isActiveTag = true : this.isActiveTag = false;
    this.pageNo = 1;this.getTags();
  }

  // when changing page size
  pageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.getTags();
  }

  // numbers to be displayed for Pagination
  changePageNo(num: number) {
    this.pageNo = num;
    this.getTags();
  }

  actDeactTag() {
    let actDeac: string = `${this.rowInfo.isActive?'deactivate':'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this tag?`,
        title: `${this.rowInfo.isActive?'Deactivate':'Activate'} tag`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.tagServ.actDeactGrp(this.rowInfo.id.toString(),this.rowInfo.isActive?false:true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Tag ${actDeac}d successfully`, 'Success!');
            this.pageNo = 1;this.getTags();
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
    if (this.updTagForm.valid) {
      this.updDisabled = true;
      let tagData: any = {
        id: this.rowInfo.id,
        ...this.updTagForm.value,
        categories: this.rowInfo.categoryIDs.map(Number),
        hubId: parseInt(this.hubid)
      };
      console.log(tagData);
      // console.log(this.rowInfo);
      this.tagServ.updTag(tagData)
        .subscribe((data: any) => {
          if (data) {
            // console.log(data);
            this.toastr.success(data.message || 'Tag updated successfully', 'Success!');
            this.closeDoc();
            this.pageNo = 1;this.getTags();
          } else {
            this.toastr.error('Unable to update Tag', 'Error!');
          }
          this.updTagForm.reset();
          this.dismissModal();
          this.updDisabled = false;
        }, (err: any) => {
          this.updTagForm.reset();
          this.dismissModal();
          this.updDisabled = false;
        });
    }
  }

  // update tag modal
  updTagModal(content: any) {
    // console.log(this.catgs);
    this.updTagForm.patchValue({ ...this.rowInfo }); // set form value
    // console.log(this.rowInfo);
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
        SortColumn: col.k,
        ascending: colData.asc,
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
    this.pageNo = 1;this.getTags();
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
    // console.log(query.isActive);
    this.tagServ.tagList(query)
      .subscribe((data: any) => {
        // console.log(data.result.results);
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
    } else {
      // this.tagForm.reset();
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
        // console.log(this.tagForm);
        this.tagForm.reset();
        // this.tagForm.markAsDirty();
        // this.tagForm.markAsTouched();
        // console.log(this.tagForm);
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
      // console.log(tagDataArr);

      this.tagServ.addTag({ lstTagDTO: tagDataArr, hubId: parseInt(this.hubid) })
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Tags added successfully', 'Success!');
            this.pageNo = 1;this.getTags();
            // this.initForms();
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

  // activate category
  actCatg(catg: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to activate this category?`,
        title: `Activate category`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(catg);
        this.tagServ.catgAct(catg.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Category activated successfully', 'Success!');
            this.getCatgs();
          } else {
            this.toastr.error('Unable to activate category', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // deactivate category
  deactCatg(catg: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to deactivate this category?`,
        title: `Deactivate category`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(catg);
        this.tagServ.catgDeact(catg.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Category deactivated successfully', 'Success!');
            this.getCatgs();
          } else {
            this.toastr.error('Unable to deactivate category', 'Error!');
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
    // this.getCatg(catg.id);
    this.catgData = catg;
    this.updCatgForm.patchValue({ ...this.catgData });
    this.openModal(content);
    // console.log(catg);
  }

  cancelCatg(){
    this.showCatgIn = !this.showCatgIn;
    this.catgForm.reset();
  }

  // get category
  // getCatg(id: number) {
  //   this.modalLoading = true;
  //   this.tagServ.getCatg(id.toString())
  //     .subscribe((data: any) => {
  //       if (data && data.result && data.result.id) {
  //         this.catgData = data.result;
  //         this.setCatgData();
  //       } else {
  //         this.toastr.error("Invalid Category");
  //       }
  //       this.modalLoading = false;
  //     }, (err: any) => {
  //       this.modalLoading = false;
  //       // this.toastr.error("Unable to fetch Category, so please try after some time");
  //     });
  // }

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
      // console.log(catgData);
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

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // toggle tags
  toggleInfo(row: Tag) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.closeDoc();
    } else {
      this.showRowInfo = true;
      this.docLoading = true;
      setTimeout(() => {
        this.rowInfo = row;
        this.rowInfo.categoryIDs = [];
        for (let i = 0; i < row.categories.length; i++) {
          this.rowInfo.categoryIDs.push((row.categories[i].id).toString());
        }
        this.docLoading = false;
      }, 900);
      // console.log(this.rowInfo.categoryIDs);
      // console.log(this.rowInfo.categories);
    }
  }

  closeDoc = () => {
    this.showRowInfo = false
    this.rowInfo = {};
    this.docLoading = false;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.dismissModal();
  }

}
