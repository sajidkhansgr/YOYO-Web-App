import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  showDoc: boolean = false;
  @Input() lmtPage: any;
  props: any = PRPS;
  exps: any = [
    { id: 1, name: "Exp 1" }, { id: 2, name: "Exp 2" }, { id: 3, name: "Exp 3" }
  ];
  grps: Group[] = [];
  divArr: Hub[] = [];
  groupForm!: FormGroup;
  disabled: boolean = false;
  loading: boolean = true;
  grpDetail!: Group | null;
  docLoading: boolean = true;

  constructor(
    private modalService: NgbModal,
    private groupService: GroupService,
    private hubService: HubService,
    private dataServ: DataService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getGroups();
    this.getHubs();
    this.groupForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addGroup() {
    if (this.groupForm.valid) {
      this.disabled = true;
      let grpData: any = {
        ...this.groupForm.value
      }
      this.groupService.addGroup(grpData).subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Group added successfully', 'Success!');
          this.disMissMdodal();
          this.getGroups();
        } else {
          this.toastr.error(data.result.data || 'Unable to update Group', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.disabled = false;
      });
    }
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  getGroups() {
    this.groupService.groupList({ pageNo: 1, })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.grps = data.result.results;
        }
      }, (err: any) => {
        console.log(err);
      });
  }

  getHubs() {
    this.hubService.hubList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.divArr = data.result.results;
          this.loading = false;
        }
      }, (err: any) => {
        this.loading = false;
        console.log(err);
      });
  }

  getGroup() {
    this.groupService.viewGroup(this.grpDetail!.id.toString()).subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.grpDetail = data.result;
        this.docLoading = false;
      }
    }, (err: any) => {
      this.docLoading = false;
      console.log(err);
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

  toggleDoc = (grp: any) => {
    this.docLoading = true;
    this.showDoc = !this.showDoc;
    if (this.showDoc) {
      this.grpDetail = grp;
      this.getGroup();
    }
  }

  closeDoc = () => {
    this.grpDetail = null;
    this.docLoading = false;
    this.showDoc = false;
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

  selClrAll(isAll: boolean) {
    if (isAll) {
      //all select
    } else {
      //clear All
    }
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {

      }, (reason) => {

      });
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
