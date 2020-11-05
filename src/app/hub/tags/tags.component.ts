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
import { LMT_PAGE } from '../../shared/constants'

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
            this.getTags();
          })
        )
        .subscribe();
      this.searInit = true;
    }
  }
  selTag!: string;
  loading!: boolean; tagLoading!: boolean;
  rowInfo: any;
  showRowInfo!: boolean;
  showCatgIn!: boolean;
  catgForm!: FormGroup; tagForm!: FormGroup; updTagForm!: FormGroup; updCatgForm!: FormGroup;
  updDisabled!: boolean; catgAddDisabled!: boolean; tagAddDisabled!: boolean;
  catgData!: Catg | undefined;
  catgs!: Catg[]; tags!: Tag[]; allTags!: Tag[];
  pageNum!: string; lmtPage!: Array<number>; pageSize!: number;
  // numAllTags!: number; paginationNum!: number;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagNames!: string[];
  searchTxt!: string;
  sortColumn!: string; isAsc!: boolean | undefined;
  columns!: any[];

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
    this.loading = true; this.tagLoading = true;
    this.rowInfo = undefined;
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
      name: ['', [Validators.required]],
      categories: [[]]
    });
    this.updDisabled = false; this.catgAddDisabled = false; this.tagAddDisabled = false;
    this.catgData = undefined;
    this.catgs = []; this.tags = []; this.allTags = [];
    this.pageNum = '1'; this.lmtPage = LMT_PAGE; this.pageSize = this.lmtPage[0];
    // numAllTags = 0; paginationNum = 0;
    this.tagNames = [];
    this.searchTxt = '';
    this.sortColumn = ''; this.isAsc = undefined;
    this.columns = [{ dispName: "Name", isAsc: true, isSelected: false, key: "name" }, { dispName: "Status", isAsc: true, isSelected: false, key: "status" }, { dispName: "Date Modified", isAsc: true, isSelected: false, key: "date-mod" }];
  }

  // resetCh() {
  //   this.tagForm.reset()
  // }

  // when changing page size
  pageSizeChange() {
    this.getTags();
  }

  // numbers to be displayed for Pagination
  // paginationNums() {
  //   this.paginationNum = Math.ceil(this.numAllTags / parseInt(this.pageSize));
  // }

  // activate tag
  actTag(tag: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to activate this tag?`,
        title: `Activate tag`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(tag);
        this.tagServ.tagAct(tag.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Tag activated successfully', 'Success!');
            this.getTags();
          } else {
            this.toastr.error('Unable to activate tag', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // deactivate tag
  deactTag(tag: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to deactivate this tag?`,
        title: `Deactivate tag`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(tag);
        this.tagServ.tagDeact(tag.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Tag deactivated successfully', 'Success!');
            this.getTags();
          } else {
            this.toastr.error('Unable to deactivate tag', 'Error!');
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
        hubId: parseInt(this.hubid)
      };
      // console.log(tagData);
      // console.log(this.rowInfo);
      this.tagServ.updTag(tagData)
        .subscribe((data: any) => {
          if (data) {
            // console.log(data);
            this.toastr.success(data.message || 'Tag updated successfully', 'Success!');
            this.closeInfo();
            this.getTags();
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
  sort(col: string) {
    this.sortColumn = col;
    this.isAsc = !this.isAsc;
    this.getTags();
    this.columns.filter((val) => {
      if (val.key == col) {
        val.isAsc = !val.isAsc;
        val.isSelected = true;
      } else {
        val.isAsc = true;
        val.isSelected = false;
      }
    });
  }

  // change tags listing - table
  changeTag(type: string) {
    this.selTag = type;
    this.getTags();
  }

  // list of tags
  getTags() {
    this.tagLoading = true;
    let query = {
      hubId: this.hubid,
      pageNo: this.pageNum,
      pageSize: this.pageSize,
      searchText: this.searchTxt,
      isAscending: this.isAsc,
      sortColumn: this.sortColumn
    }
    // console.log(query);
    this.tagServ.tagList(query)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.lstTagViewModel) && data.result.lstTagViewModel.length > 0) {
          this.tags = data.result.lstTagViewModel;
        }
        this.tagLoading = false;
      }, (err: any) => {
        console.log(err);
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
          categories: [0]
        });
      }

      this.tagServ.addTag({ lstTagDTO: tagDataArr, hubId: parseInt(this.hubid) })
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Tags added successfully', 'Success!');
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
    this.tagServ.catgList({ hubId: this.hubid })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.catgs = data.result.results;
          // console.log(this.catgs);
        }
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.loading = false;
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

  // toggle tags ---- needs change (not receiving catgories in getAll)
  toggleInfo(row: Tag) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.showRowInfo = false;
      this.rowInfo = {};
    } else {
      this.rowInfo = row;
      // for (let i = 0; i < row.categories.length; i++) {
      //   let catg = this.catgs!.filter(catg => catg.id == row.categories[i]);
      //   this.rowInfo.catgName = catg.length > 0 ? catg[0].name : 'No Categories';
      // }
      // let catg = this.catgs!.filter(catg => catg.id == row.categoryId);
      // this.rowInfo.catgName = catg.length > 0 ? catg[0].name : 'No Categories';
      console.log(this.rowInfo);
      this.showRowInfo = true;
    }
  }

  closeInfo = () => {
    this.showRowInfo = false
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.dismissModal();
  }

}
