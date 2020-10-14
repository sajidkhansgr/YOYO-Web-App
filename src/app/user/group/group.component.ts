import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


import { PRPS } from '../../shared/constants';
import { GroupService } from './group.service';
import { HubService } from '../../hub/hub.service';
import { DataService } from '../../shared/services/data.service';


import { Hub } from '../../shared/models/hub';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  showDoc: boolean = false;
  props: any = PRPS;
  divisions: any = [
    { id: 1, name: "Hub A" }, { id: 2, name: "Hub B" }, { id: 3, name: "Hub C" }
  ];
  exps: any = [
    { id: 1, name: "Exp 1" }, { id: 2, name: "Exp 2" }, { id: 3, name: "Exp 3" }
  ];
  data: any[] = [];
  divArr: Hub[] = [];
  groupForm!: FormGroup;
  disabled: boolean = false;
  loading: boolean = true;

  constructor(
    private modalService: NgbModal,
    private groupService: GroupService,
    private hubService: HubService,
    private dataServ: DataService,
    private toastr: ToastrService,
    private fb: FormBuilder,
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
      let formData: any = {
        ...this.groupForm.value
      }
      this.groupService.addGroup(formData).subscribe((data: any) => {
        if (data) {
          this.dataServ.passDataSend('hub-upd');
          this.toastr.success(data.message || 'Group added successfully', 'Success!');
          this.disMissMdodal();
          this.getGroups();
        } else {
          this.toastr.error(data.result.data || 'Unable to update Hub', 'Error!');
        }
        this.disabled = false;
      }, (err: any) => {
        this.toastr.error(err.message || 'Something Went Wrong', 'Error!');
        this.disabled = false;
      });
    }
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  getGroups() {
    this.groupService.groupList({ pageNo: 0 })
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.data = data.result.results;
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

  toggleDoc = () => {
    this.showDoc = !this.showDoc;
  }
  closeDoc = () => {
    this.showDoc = false;
  }

  outsideCloseDD = (dropdown: any) => {
    if (dropdown!.classList.contains('show')) {
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

}
