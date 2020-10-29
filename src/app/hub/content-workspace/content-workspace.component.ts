import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { DEF_ICON } from '../../shared/constants';
import { FileDndHelper } from '../../shared/file-helper';
import { ContentWorkspaceService } from './content-workspace.service'
import { WrkSpc } from '../../shared/models/workspace'


@Component({
  selector: 'app-content-workspace',
  templateUrl: './content-workspace.component.html',
  styleUrls: ['./content-workspace.component.scss']
})
export class ContentWorkspaceComponent implements OnInit {
  showWork!: boolean; showDoc!: boolean;
  @Input() hubid: any; routerSubs!: Subscription;
  addURLIcon!: string; iconUrl!: any;
  defIcon: any = DEF_ICON; custIcon: any; files!: any[];
  dispPropsSec!: boolean; dispSmFolderSec!: boolean;
  dispGnrl!: boolean; dispSettings!: boolean; dispSmart!: boolean;
  wrkspcs!: WrkSpc[]; wrkspc!: WrkSpc | undefined;
  wrkspcLoading!: boolean;
  addWrkspcForm!: FormGroup; updWrkspcForm!: FormGroup;
  disabled!: boolean;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private cwServ: ContentWorkspaceService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    console.log("ds")
    this.initialiseState(); // reset and set based on new parameter this time
  }

  initialiseState() {
    this.files = []; this.addURLIcon = ''; this.iconUrl = '';
    this.dispGnrl = true; this.dispSettings = true; this.dispSmart = false;
    this.dispPropsSec = false; this.dispSmFolderSec = true;
    this.custIcon = undefined; this.showWork = false; this.showDoc = false;
    this.wrkspcs = []; this.wrkspc = undefined;
    this.wrkspcLoading = true;
    this.addWrkspcForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.updWrkspcForm = this.fb.group({
      name: ['', [Validators.required]]
      // more feilds need to be added when done in api
    });
    this.disabled = false;
  }

  // update workspace
  updWrkspc() {
    if (this.updWrkspcForm.valid) {
      this.disabled = true;
      let wrkspcData: any = {
        id: this.wrkspc!.id,
        ...this.updWrkspcForm.value,
        hubId: this.wrkspc!.hubId
      };
      this.cwServ.updWrkspc(wrkspcData).subscribe((data: any) => {
        // console.log(data);
        if (data) {
          this.toastr.success(data.message || 'Workspace updated successfully', 'Success!');
          this.wrkspc = wrkspcData;
          this.getWrkspcList();
        } else {
          this.toastr.error('Unable to update workspace', 'Error!');
        }
        this.dismissModal();
        this.disabled = false;
      }, (err: any) => {
        this.dismissModal();
        this.disabled = false;
      });
    }
  }

  // open update workspace modal
  updWrkspcModal(content: any) {
    this.updWrkspcForm.patchValue({ ...this.wrkspc });
    this.openModal(content);
  }

  // add workspace
  addWorkSpc() {
    if (this.addWrkspcForm.valid) {
      this.disabled = true;
      let wrkspcData: any = {
        ...this.addWrkspcForm.value,
        hubId: parseInt(this.hubid)
      };
      this.cwServ.addWrkspc(wrkspcData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Workspace added successfully', 'Success!');
            this.getWrkspcList();
          } else {
            this.toastr.error('Unable to add Workspace', 'Error!');
          }
          this.dismissModal();
          this.disabled = false;
        }, (err: any) => {
          this.dismissModal();
          this.disabled = false;
        });
    }
  }

  // selected workspace
  selectWrkspc(wrkspc: WrkSpc) {
    this.wrkspc = wrkspc;
  }

  // list of workspaces
  getWrkspcList() {
    this.wrkspcLoading = true;
    this.cwServ.wrkspcList({})
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          // console.log(data);
          this.wrkspcs = data.result.results;
        }
        this.wrkspcLoading = false;
      }, (err: any) => {
        console.log(err);
        this.wrkspcLoading = false;
      });
  }

  // show workspaces list
  loadWrkspcs() {
    if (this.wrkspcs.length == 0) {
      this.getWrkspcList();
    }
  }

  // toggle workspace
  workspaceToggle = () => {
    this.showDoc = false;
    this.showWork = !this.showWork;
  }

  // document toggle
  documentToggle = () => {
    this.showWork = false;
    this.showDoc = !this.showDoc;
  }

  // close button on workspace
  closeWorkspace = () => {
    this.showWork = false;
    this.showDoc = false;
  }

  // edit options in documents (workspace)
  openEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'none';
    (event.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'block';
  }
  closeEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'block';
    (event.parentNode.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'none';
  }

  showGeneral = () => {
    this.dispGnrl = !this.dispGnrl;
  }

  showSettings = () => {
    this.dispSettings = !this.dispSettings;
  }
  showSmart = () => {
    this.dispSmart = !this.dispSmart;
  }


  iconURLHandler = () => {

  }

  showPropsSection = () => {
    this.dispPropsSec = !this.dispPropsSec;
  }

  showSmartFolderSection = () => {
    this.dispSmFolderSec = !this.dispSmFolderSec;
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {

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

  // /**
  // * on file drop handler
  // */
  onFileDropped($event: any, isIcon: boolean = false) {
    if (!isIcon)
      this.prepareFilesList($event, isIcon);
    else {
      this.renderImg($event[0])
    }
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any, isIcon: boolean = false) {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
    // preview image
    let input = $event.target;
    if (input.files && input.files && isIcon) {
      this.renderImg(input.files[0])
    }
  }

  renderImg(file: any) {
    if (file) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        console.log("sd")
        this.iconUrl = event.target.result;
      };
      this.custIcon = file;
      reader.readAsDataURL(file);
    }
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 20;
          }
        }, 100);
      }
    }, 300);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>, isIcon: boolean) {
    if (!isIcon) {
      for (const item of files) {
        item.progress = 0;
        this.files.push(item);
      }
      this.uploadFilesSimulator(0);
    }
  }

  getSize(bytes: any) {
    return FileDndHelper.formatBytes(bytes, 2);
  }
}
