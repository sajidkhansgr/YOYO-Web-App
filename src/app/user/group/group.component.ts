import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PRPS } from '../../shared/constants';
import { GroupService } from './group.service';
import { HubService } from '../../hub/hub.service';
import { DataService } from '../../shared/services/data.service';
import { Hub } from '../../shared/models/hub';
import { Group } from '../../shared/models/group';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() lmtPage: any;
  input: any; searInit!: boolean;searchTxt!: string;
  @ViewChild("sear", { static: false }) set altRefIn(el: ElementRef) {
    this.input = el;
    if (this.input && this.input?.nativeElement && !this.searInit) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          tap(() => {
            this.pageNo = 1;
            this.grpsList();
          })
        )
        .subscribe();
      this.searInit = true;
    }
  }
  props: any = PRPS;
  exps: any = [
    { id: 1, name: "Exp 1" }, { id: 2, name: "Exp 2" }, { id: 3, name: "Exp 3" }
  ];
  cols: any[] = [];
  grps!: Group[]; divArr: Hub[] = [];
  pageNo!: number;loading: boolean=false;pageSize!: number;
  groupForm!: FormGroup; grpDetail!: Group | null;
  disabled: boolean = false; docLoading: boolean = true;
  selectable = true; removable = true;
  selDiv: any = []; divNameInp: any;sort:any={};
  showRowInfo: boolean = false;rowInfo: any;isEdit!: boolean;
  @ViewChild("divName", { static: false }) set divName(el: ElementRef) {
    this.divNameInp = el;
  }

  constructor(
    private modalService: NgbModal,
    private grpServ: GroupService,
    private hubService: HubService,
    private dataServ: DataService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.intializeState();
    this.grpsList();
    this.getHubs();
    this.groupForm = this.fb.group({
      name: ['', Validators.required],
      division: ['']
    });
  }

  intializeState(){
    this.pageSize = this.lmtPage[0]; this.pageNo = 1;
    this.cols = [{ n: "Name", asc: false,k:"name"},{ n: "Date Created", asc: false,k:"createdDate"},{ n: "Members", asc: false},{ n: "Anonymized", asc: false}];
  }

  grpsList() {
    this.loading = true;
    this.closeDoc();
    let params:any = {
      pageNo: this.pageNo, pageSize: this.pageSize,
      searchText: this.searchTxt,
      ...this.sort
    }
    this.grpServ.groupList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.grps = data.result.results;
        }else{
          this.grps = [];
        }
        this.loading = false;
      }, (err: any) => {
          console.log(err);
          this.grps = [];
          this.loading = false;
      });
  }

  getHubs() {
    this.hubService.hubList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.divArr = data.result.results;
        }
      }, (err: any) => {
        console.log(err);
      });
  }

  chngPageSize(){
    this.grpsList();
  }

  sortChange(col: any, index: number){
    this.loading = true;
    let colData = {...col};
    for(let k=0;k<this.cols.length;k++){
      this.cols[k].asc = false;
    }
    colData.asc = !colData.asc;
    this.cols[index].asc = colData.asc;
    this.sort = {
      SortColumn: col.k,
      IsAscending: colData.asc,
    }
    this.grpsList();
  }

  getGrp() {
    this.grpServ.viewGroup(this.grpDetail!.id.toString()).subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.grpDetail = data.result;
      }
      this.docLoading = false;
    }, (err: any) => {
      this.docLoading = false;
    });
  }

  onSubmit() {
    if (this.groupForm.valid) {
      this.disabled = true;
      let grpData: any = {
        ...this.groupForm.value
      }
      if (this.isEdit) {
        this.editGrp(grpData);
      } else {
        this.addGrp(grpData);
      }
    }
  }

  addGrp(grpData: any) {
    this.grpServ.addGroup(grpData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Group added successfully', 'Success!');
        this.disMissMdodal();
        this.grpsList();
      } else {
        this.toastr.error(data.result.data || 'Unable to add Group', 'Error!');
      }
      this.disabled = false;
    }, (err: any) => {
      this.disabled = false;
    });
  }

  editGrp(grpData: any) {
    grpData.id = this.grpDetail!.id;
    this.grpServ.updGroup(grpData).subscribe((data: any) => {
      if (data) {
        this.toastr.success(data.message || 'Group updated successfully', 'Success!');
        this.disMissMdodal();
        this.grpsList();
      } else {
        this.toastr.error(data.result.data || 'Unable to update Group', 'Error!');
      }
      this.disabled = false;
    }, (err: any) => {
      this.disabled = false;
    });
  }

  delGrp() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete this group? You can't undo this action.?`,
        title: `Delete Group`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    })
  }

  // toggle group info
  toggleInfo(row: Group) {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.closeDoc();
    } else {
      this.rowInfo = row;
      console.log(this.rowInfo);
      this.showRowInfo = true;
    }
  }

  closeDoc = () => {
    this.showRowInfo = false;
    this.rowInfo = {};
  }

  outsideCloseDD = (dropdown: any, event: any) => {
    if (dropdown!.classList.contains('show') && !event.target!.classList.contains('form-check-input')) {
      dropdown!.classList.remove('show');
    }
  }

  toggleDropdown = (event: any) => {
    if (event.target!.classList.contains('fas')) {
      event.target.parentNode.nextSibling!.classList.toggle('show');
    } else {
      event.target.nextSibling!.classList.toggle('show');
    }
  }

  displayFn = (div: any) => {
    return (div && div.id) ? div.name : '';
  }
  selDivIds(div: any) { //div - dvision
    const index = this.selDiv.findIndex((ele: any) => ele.id == div.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info("This division is already selected", "Selected");
    } else {
      this.selDiv.push(div);
      // this.msgForm.controls['RecipientName'].setValue({});
      // this.divNameInp.nativeElement.value = '';
    }
  }

  remove(div: any): void {
    const index = this.selDiv.findIndex((ele: any) => ele.id == div.id);
    if (index >= 0) {
      this.selDiv.splice(index, 1);
    }
  }

  selClrAll(isAll: boolean) {
    if (isAll) {
      //all select
    } else {
      //clear All
    }
  }

  openModal(content: any, type?: string) {
    if (type === 'edit') {
      this.isEdit = true;
      this.groupForm.patchValue({ ...this.grpDetail }); // set form value
    } else {
      this.isEdit = false;
      this.groupForm.reset();
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
      .then((result) => {

      }, (reason) => {

      });
  }

  disMissMdodal() {
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

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.disMissMdodal();
  }

}
