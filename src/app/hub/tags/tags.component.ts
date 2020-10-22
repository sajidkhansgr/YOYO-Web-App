import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { TagsService } from './tags.service';
import { Cat } from '../../shared/models/cat';
import { Tag } from '../../shared/models/tag';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  hubID: number = 0;
  loading: boolean = true; modalLoading: boolean = true;
  showAddCatIp: string = 'none';
  rowInfo: any;
  showRowInfo: boolean = false;
  showCatgIn: boolean = false;
  catForm!: FormGroup; tagForm!: FormGroup;
  disabled: boolean = false;
  catData!: Cat | null;
  cats: Cat[] = []; tags: Tag[] = []; allTags: Tag[] = [];
  numUnCatTags: number = 0;

  constructor(
    private dialog: MatDialog,
    private modalService: NgbModal,
    private tagServ: TagsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dataServ: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hubID = parseInt(params['id']);
    });
    this.getCats();
    this.catForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.tagForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.getTags();
  }

  // list of all tags
  getTags() {
    this.tagServ.tagList({ pageNo: 0, pageSize: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.allTags = data.result.results;
          this.tags = this.allTags;
          this.numUnCatTags = 0;
          for (let i = 0; i < this.allTags.length; i++) {
            if (this.allTags[i].categoryId == 0) {
              this.numUnCatTags++;
            }
          }
        }
        // this.loading = false;
      }, (err: any) => {
        console.log(err);
        // this.loading = false;
      });
  }

  getAllTags() {
    this.tags = this.allTags;
  }

  // list of uncategorized tags
  getUnCatTags() {
    let tags: Tag[] = [];
    for (let i = 0; i < this.allTags.length; i++) {
      if (this.allTags[i].categoryId == 0) {
        tags.push(this.allTags[i]);
      }
    }
    this.tags = tags;
  }

  // add tag
  addTag() {
    if (this.tagForm.valid) {
      this.disabled = true;
      let tagData: any = {
        ...this.tagForm.value,
        categoryId: 1,
        hubId: this.hubID
      };

      this.tagServ.addTag(tagData)
        .subscribe((data: any) => {
          if (data) {
            this.dataServ.passDataSend('tag-add');
            this.toastr.success(data.message || 'Category added successfully', 'Success!');
            this.tagForm.reset();
            this.getTags();
          } else {
            this.toastr.error('Unable to add Category', 'Error!');
          }
          this.disabled = false;
        }, (err: any) => {
          this.toastr.error('Unable to add Category', 'Error!');
          this.disabled = false;
        });
    }
  }

  // list of categories
  getCats() {
    this.tagServ.catList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.cats = data.result.results;
        }
        this.loading = false;
      }, (err: any) => {
        console.log(err);
        this.loading = false;
      });
  }

  // add category
  addCat() {
    if (this.catForm.valid) {
      this.disabled = true;
      let catData: any = {
        ...this.catForm.value
      };

      this.tagServ.addCat(catData)
        .subscribe((data: any) => {
          if (data) {
            this.dataServ.passDataSend('category-add');
            this.toastr.success(data.message || 'Category added successfully', 'Success!');
            this.getCats();
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
  updCatModal(content: any, el: any) {
    let id;
    if (el.target.classList.contains('fas')) {
      id = el.target.parentNode.id;
    } else {
      id = el.target.id;
    }
    this.getCat(id);

    this.modalService.open(content, { ariaLabelledBy: 'Update Category' }).result
      .then((result) => {
      }, (reason) => {
        this.modalLoading = true;
      });
  }

  // get category
  getCat(id: string) {
    this.tagServ.getCat(id)
      .subscribe((data: any) => {
        if (data && data.result && data.result.id) {
          this.catData = data.result;
          this.catForm.patchValue({ ...this.catData });
          this.modalLoading = false;
        } else {
          this.toastr.error("Invalid Category");
        }
      }, (err: any) => {
        this.toastr.error("Unable to fetch Category, so please try after some time");
      });
  }

  // update category
  updCat() {
    if (this.catForm.valid) {
      this.disabled = true;
      let catData: any = {
        ...this.catForm.value
      };
      catData.id = this.catData!.id;

      this.tagServ.updateCat(catData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.dataServ.passDataSend('category-upd');
            this.toastr.success(data.message || 'Category updated successfully', 'Success!');
          } else {
            this.toastr.error('Unable to update Category', 'Error!');
          }
          this.dismissModal();
          this.getCats();
          this.disabled = false;
          this.modalLoading = true;
        }, (err: any) => {
          this.toastr.error('Unable to update Category', 'Error!');
          this.dismissModal();
          this.getCats();
          this.disabled = false;
          this.modalLoading = true;
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

}
