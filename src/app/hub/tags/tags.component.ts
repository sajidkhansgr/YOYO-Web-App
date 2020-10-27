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
  input: any; searInit: boolean = false;
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
  selTag: string = 'all';
  loading: boolean = true; tagLoading: boolean = true;
  showAddCatIp: string = 'none';
  rowInfo: any;
  showRowInfo: boolean = false;
  showCatgIn: boolean = false;
  catgForm!: FormGroup; tagForm!: FormGroup; updTagForm!: FormGroup; updCatgForm!: FormGroup;
  updDisabled: boolean = false; catgAddDisabled: boolean = false; tagAddDisabled: boolean = false;
  catgData!: Catg | null;
  catgs: Catg[] = []; tags: Tag[] = []; allTags: Tag[] = [];
  pageNum: string = '0'; pageSizeArr: Array<number> = LMT_PAGE; pageSize: number = this.pageSizeArr[0];
  // numAllTags: number = 0; paginationNum: number = 0;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tagNames: string[] = [];
  searchTxt: string = '';
  sortColumn: string = ''; isAsc?: boolean = undefined;
  columns: any[] = [{ dispName: "Name", isAsc: true, isSelected: false, key: "name" }, { dispName: "Status", isAsc: true, isSelected: false, key: "status" }, { dispName: "Date Modified", isAsc: true, isSelected: false, key: "date-mod" }];

  constructor(
    private dialog: MatDialog,
    private modalService: NgbModal,
    private tagServ: TagsService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
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
      // catgs: [''] // needs to be added when multiple catgs api for tags is done
    });
    this.getCatgs();
    this.getTags();
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

  // update tag => changes needed after update api is done
  updTag() {
    if (this.updTagForm.valid) {
      this.updDisabled = true;
      let tagData: any = {
        id: this.rowInfo.id,
        ...this.updTagForm.value,
        categoryId: 0,
        hubId: parseInt(this.hubid)
      };
      // console.log(tagData);
      // console.log(this.rowInfo);
      this.tagServ.updTag(tagData)
        .subscribe((data: any) => {
          if (data) {
            console.log(data);
            this.toastr.success(data.message || 'Tag updated successfully', 'Success!');
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
    this.modalService.open(content, { ariaLabelledBy: 'Update tag' }).result
      .then((result: any) => {
      }, (reason) => {
      });
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
    this.tagServ.tagList({ pageNo: this.pageNum, pageSize: this.pageSize, searchText: this.searchTxt, isAscending: this.isAsc, sortColumn: this.sortColumn })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          // console.log(data);
          this.tags = data.result.results;
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

  // ******* need to be changed when api call for multiple add is done
  // add tags
  addTags() {
    if (this.tagNames.length > 0 && this.tagForm.valid) {
      this.tagAddDisabled = true;
      for (let i = 0; i < this.tagNames.length; i++) {
        let tagData: any = {
          name: this.tagNames[i],
          categoryId: 0,
          hubId: parseInt(this.hubid)
        };
        setTimeout(() => {
          this.addTag(tagData);
        }, 500);
        if (i == this.tagNames.length - 1) {
          this.tagForm.reset();
          this.tagAddDisabled = false;
          this.tagNames = [];
          setTimeout(() => {
            this.getTags();
          }, 1500);
        }
      }
    }
  }

  // add single tag
  addTag(tagData: any) {
    this.tagServ.addTag(tagData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Tag added successfully', 'Success!');
        } else {
          this.toastr.error('Unable to add Tag', 'Error!');
        }

      }, (err: any) => {

      });
  }

  // list of categories
  getCatgs() {
    this.tagServ.catgList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.catgs = data.result.results;
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
        ...this.catgForm.value
      };
      this.tagServ.addCatg(catgData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Category added successfully', 'Success!');
            this.getCatgs();
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
    this.updCatgForm.patchValue({ ...this.catgData }); // set form value
    this.modalService.open(content, { ariaLabelledBy: 'Update Category' }).result
      .then((result: any) => {
      }, (reason) => {
      });
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
        ...this.updCatgForm.value
      };
      catgData.id = this.catgData!.id;
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

  // delete category
  delCatg(catg: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete this category? You can't undo this action.?`,
        title: `Delete category`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {

      }
    })
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

  toggleCatgInp() {
    this.showCatgIn = !this.showCatgIn;
  }

  toggleInfo(row: any) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.showRowInfo = false;
      this.rowInfo = {};
    } else {
      this.rowInfo = row;
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
