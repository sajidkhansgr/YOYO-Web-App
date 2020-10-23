import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { TagsService } from './tags.service';
import { Catg } from '../../shared/models/catg';
import { Tag } from '../../shared/models/tag';
// import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() hubid: any;
  selTag: string = 'all';
  loading: boolean = true; modalLoading: boolean = false;
  showAddCatIp: string = 'none';
  rowInfo: any;
  showRowInfo: boolean = false;
  showCatgIn: boolean = false;
  catgForm!: FormGroup; tagForm!: FormGroup;
  disabled: boolean = false;
  catgData!: Catg | null;
  catgs: Catg[] = []; tags: Tag[] = []; allTags: Tag[] = [];
  pageSize: string = '10'; pageNum: string = '1';
  numAllTags: number = 0; paginationNum: number = 0;

  constructor(
    private dialog: MatDialog,
    private modalService: NgbModal,
    private tagServ: TagsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    // private dataServ: DataService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.catgForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.tagForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.getCatgs();
    this.getTags();
  }

  resetCh(){
    this.tagForm.reset()
  }
  // when changing page size
  pageSizeChange() {
    this.getTags();
  }

  // numbers to be displayed for Pagination
  paginationNums() {
    this.paginationNum = Math.ceil(this.numAllTags / parseInt(this.pageSize));
  }

  // tags listing
  changeTag(type: string) {
    this.selTag = type;
    this.getTags();
  }

  // list of tags
  getTags() {
    this.tagServ.tagList({ pageNo: this.pageNum, pageSize: this.pageSize })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.tags = data.result.results;
        }
        // this.loading = false;
      }, (err: any) => {
        console.log(err);
        // this.loading = false;
      });
  }

  // add tag
  addTag() {
    if (this.tagForm.valid) {
      this.disabled = true;
      let tagData: any = {
        ...this.tagForm.value,
        categoryId: 0,
        hubId: parseInt(this.hubid)
      };
      this.tagServ.addTag(tagData)
        .subscribe((data: any) => {
          if (data) {
            // this.dataServ.passDataSend('tag-add');
            this.toastr.success(data.message || 'Tag added successfully', 'Success!');
            this.tagForm.reset();
            this.getTags();
          } else {
            this.toastr.error('Unable to add Tag', 'Error!');
          }
          this.disabled = false;
        }, (err: any) => {
          // this.toastr.error('Unable to add Tag', 'Error!');
          this.disabled = false;
        });
    }
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
      this.disabled = true;
      let catgData: any = {
        ...this.catgForm.value
      };
      this.tagServ.addCatg(catgData)
        .subscribe((data: any) => {
          if (data) {
            // this.dataServ.passDataSend('category-add');
            this.toastr.success(data.message || 'Category added successfully', 'Success!');
            this.getCatgs();
          } else {
            this.toastr.error('Unable to add Category', 'Error!');
          }
          this.disabled = false;
          this.showCatgIn = false;
        }, (err: any) => {
          this.toastr.error('Unable to add Category', 'Error!');
          this.disabled = false;
          this.showCatgIn = false;
        });
    }
  }

  // update category modal
  updCatgModal(content: any, catg: Catg) {
    // this.getCatg(catg.id);
    this.catgData = catg;
    this.setCatgData();
    this.modalService.open(content, { ariaLabelledBy: 'Update Category' }).result
      .then((result:any) => {
      }, (reason) => {
      });
  }

  setCatgData(){
    this.catgForm.patchValue({ ...this.catgData });
  }

  // get category
  getCatg(id: number) {
    this.modalLoading = true;
    this.tagServ.getCatg(id.toString())
      .subscribe((data: any) => {
        if (data && data.result && data.result.id) {
          this.catgData = data.result;
          this.setCatgData();
        } else {
          this.toastr.error("Invalid Category");
        }
          this.modalLoading = false;
      }, (err: any) => {
        this.modalLoading = false;
        // this.toastr.error("Unable to fetch Category, so please try after some time");
      });
  }

  // update category
  updCatg() {
    if (this.catgForm.valid) {
      this.disabled = true;
      let catgData: any = {
        ...this.catgForm.value
      };
      catgData.id = this.catgData!.id;
      this.tagServ.updCatg(catgData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            // this.dataServ.passDataSend('category-upd');
            this.toastr.success(data.message || 'Category updated successfully', 'Success!');
            this.getCatgs();
          } else {
            this.toastr.error('Unable to update Category', 'Error!');
          }
          this.dismissModal();
          this.disabled = false;
        }, (err: any) => {
          // this.toastr.error('Unable to update Category', 'Error!');
          this.dismissModal();
          this.disabled = false;
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

  showCatListIP = (event: any) => {
    event.target.parentNode.nextSibling.style.display = 'block';
  }

  closeCatListIP = (event: any) => {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
  }

  toggleInfo(row: any) {
    if (!this.showRowInfo)
      this.rowInfo = row;
    else
      this.rowInfo = {};
    this.showRowInfo = !this.showRowInfo;
  }

  closeInfo = () => {
    this.showRowInfo = false
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.dismissModal();
  }

}
