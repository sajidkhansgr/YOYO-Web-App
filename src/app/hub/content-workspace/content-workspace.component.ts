import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { DEF_ICON } from '../../shared/constants';
import { FileDndHelper } from '../../shared/file-helper';
import { ContentWorkspaceService } from './content-workspace.service'
import { Workspace } from '../../shared/models/workspace';
import { Folder } from '../../shared/models/folder';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { PRPS } from '../../shared/constants';


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
  wrkspcs!: Workspace[]; selWrkspc: Workspace | undefined;
  wrkspcLoading!: boolean; folderLoading!: boolean;
  addWrkspcForm!: FormGroup; updWrkspcForm!: FormGroup; addFolderForm!: FormGroup; addSmartFolderForm!: FormGroup;
  disabled!: boolean;
  folderArr!: any[]; selFolder: Folder | undefined; dispFolder: any; folderNav!: any[];
  gnrlCollapsed!: boolean; editSmrtCollapsed!: boolean; locationCollapsed!: boolean;
  visbCols!: any[]; hidCols!: any[]; cols!: any[]; data!: any[];
  props: any;
  view!: boolean;

  constructor(
    // private route: ActivatedRoute,
    private modalService: NgbModal,
    private cwServ: ContentWorkspaceService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dialog: MatDialog
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
    this.wrkspcs = []; this.selWrkspc = undefined;
    this.wrkspcLoading = true; this.folderLoading = true;
    this.addWrkspcForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.updWrkspcForm = this.fb.group({
      name: ['', [Validators.required]]
      // more feilds need to be added when done in api
    });
    this.addFolderForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      hideLabelInWorkspace: ['true']
    });
    this.addSmartFolderForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      hideLabelInWorkspace: ['true'],
      limitNoOfFiles: ['']
      // more feilds need to be added
    });
    this.disabled = false;
    this.folderArr = []; this.selFolder = undefined; this.dispFolder = undefined; this.folderNav = [];
    this.gnrlCollapsed = false; this.editSmrtCollapsed = true; this.locationCollapsed = true;
    this.visbCols = [{ n: "Role", key: "role", dir: 1, }];
    this.hidCols = [{ n: "Property", key: "prop", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, },
    { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }];
    this.cols = [{ n: "Name", dir: 1, key: "name" }, { n: "Role", key: "role", dir: 1, }];
    this.data = [
      { name: "test", date: "19 Aug 2020", date2: "19 Aug 2020", role: "User" },
      { name: "tes1t", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U1ser" },
      { name: "tes2t", date: "19 1Aug 2020", date2: "19 Aug1 2020", role: "U2ser" }
    ];
    this.props = PRPS;
    this.view = true;
  }

  // listing all folders
  listFolders() {
    this.folderLoading = true;
    this.folderArr = [];
    this.getFolderList();
    this.getSmartFolderList();
    // setTimeout(() => {
    //   console.log(this.folderArr)
    // }, 1000)
  }

  // ---- smart folder ---- //
  // add folder
  addSmartFolder() {
    if (this.addSmartFolderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.addSmartFolderForm.value,
        smartFolderIcon: this.custIcon,
        workspaceId: this.selWrkspc!.id,
        folderId: 0,
        isActive: true,
        propertyIds: 1
      };
      // console.log(folderData);
      this.cwServ.addSmartFolder(folderData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.toastr.success(data.message || 'Smart Folder added successfully', 'Success!');
            this.listFolders();
          } else {
            this.toastr.error('Unable to add smart folder', 'Error!');
          }
          this.disabled = false;
          this.dismissModal();
        }, (err: any) => {
          console.log(err);
          this.disabled = false;
          this.dismissModal();
        });
    }
  }

  // get list of smart folders
  getSmartFolderList() {
    // this.folderLoading = true;
    let query = {
      workspaceId: this.selWrkspc!.id,
      folderId: this.dispFolder ? this.dispFolder!.id : null
    };
    // console.log(query);
    this.cwServ.smartFolderListWrkspc(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        for (let i = 0; i < data.result.results.length; i++) {
          this.folderArr.push({ ...data.result.results[i], key: 'smtFldr' });
        }
        console.log(this.folderArr);
      } else {
        // this.folderArr = [];
        // this.toastr.error('No smart folders found', 'Error!');
      }
      this.dispFolder = undefined;  // need changes
      this.folderLoading = false;  // need changes
    }, (err: any) => {
      this.dispFolder = undefined;
      this.folderLoading = false;
    });
  }

  // ---- folder ---- //
  // activate folder
  actFolder(folder: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to activate this folder?`,
        title: `Activate folder`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.folderAct(folder.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Folder activated successfully', 'Success!');
            this.listFolders()
          } else {
            this.toastr.error('Unable to activate folder', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // deactivate folder
  deactFolder(folder: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to deactivate this folder?`,
        title: `Deactivate folder`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(tag);
        this.cwServ.folderDeact(folder.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Folder deactivated successfully', 'Success!');
            this.listFolders()
          } else {
            this.toastr.error('Unable to deactivate folder', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // back nav folder
  backFolder() {
    this.folderNav.pop();
    this.listFolders()
  }

  // change folder (show sub folders)
  changeFolder(folder: any) {
    this.dispFolder = folder;
    this.folderNav.push(folder);
    // console.log(folder);
    this.listFolders()
  }

  // edit folder
  updFolder() {
    if (this.addFolderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.addFolderForm.value,
        id: this.selFolder!.id,
        folderIcon: this.custIcon,
        workspaceId: this.selFolder!.workspaceId,
        folderId: 0,
        isActive: this.selFolder!.isActive
      };
      // console.log(this.selFolder);
      // console.log(folderData);
      this.cwServ.updFolder(folderData).subscribe((data: any) => {
        // console.log(data);
        if (data) {
          this.toastr.success(data.message || 'Folder added successfully', 'Success!');
          this.listFolders()
        } else {
          this.toastr.error('Unable to add Folder', 'Error!');
        }
        this.disabled = false;
        this.dismissModal();
      }, (err: any) => {
        this.disabled = false;
        this.dismissModal();
      });
    }
  }

  // edit folder modal
  editFolder(modal: any, folder: Folder) {
    this.selFolder = folder;
    this.addFolderForm.patchValue({ ...this.selFolder });
    console.log(folder);
    this.openModal(modal);
  }

  // add folder
  addFolder() {
    if (this.addFolderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.addFolderForm.value,
        folderIcon: this.custIcon,
        workspaceId: this.selWrkspc!.id,
        folderId: 0,
        isActive: true
      };
      // console.log(folderData);
      this.cwServ.addFolder(folderData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.toastr.success(data.message || 'Folder added successfully', 'Success!');
            this.listFolders()
          } else {
            this.toastr.error('Unable to add Folder', 'Error!');
          }
          this.disabled = false;
          this.dismissModal();
        }, (err: any) => {
          console.log(err);
          this.disabled = false;
          this.dismissModal();
        });
    }
  }

  // get list of folders
  getFolderList() {
    // this.folderLoading = true;
    let query = {
      workspaceId: this.selWrkspc!.id,
      folderId: this.dispFolder ? this.dispFolder!.id : null
    };
    // console.log(query);
    this.cwServ.folderListWrkspc(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        for (let i = 0; i < data.result.results.length; i++) {
          this.folderArr.push({ ...data.result.results[i], key: 'fldr' });
        }
        // console.log(this.folderArr);
      } else {
        // this.folderArr = [];
        // this.toastr.error('No folders found', 'Error!');
      }
      // this.dispFolder = undefined;
      // this.folderLoading = false;
    }, (err: any) => {
      // this.dispFolder = undefined;
      // this.folderLoading = false;
    });
  }

  // ---- workspace ---- //
  // activate workspace
  actWrkspc(wrkspc: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to activate this workspace?`,
        title: `Activate workspace`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.wrkspcAct(wrkspc.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Workspace activated successfully', 'Success!');
            // this.getWrkspcList();
          } else {
            this.toastr.error('Unable to activate workspace', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // deactivate workspace
  deactWrkspc(wrkspc: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to deactivate this workspace?`,
        title: `Deactivate workspace`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(tag);
        this.cwServ.wrkspcDeact(wrkspc.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Workspace deactivated successfully', 'Success!');
            // this.getWrkspcList();
          } else {
            this.toastr.error('Unable to deactivate workspace', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // update workspace
  updWrkspc() {
    if (this.updWrkspcForm.valid) {
      this.disabled = true;
      let wrkspcData: any = {
        id: this.selWrkspc!.id,
        ...this.updWrkspcForm.value,
        hubId: this.selWrkspc!.hubId
      };
      this.cwServ.updWrkspc(wrkspcData).subscribe((data: any) => {
        // console.log(data);
        if (data) {
          this.toastr.success(data.message || 'Workspace updated successfully', 'Success!');
          this.selWrkspc = wrkspcData;
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
    this.updWrkspcForm.patchValue({ ...this.selWrkspc });
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
  selectWrkspc(wrkspc: Workspace) {
    this.selWrkspc = wrkspc;
    // console.log(wrkspc);
    this.folderNav = [];
    this.listFolders()
  }

  // list of workspaces
  getWrkspcList() {
    this.wrkspcLoading = true;
    this.cwServ.wrkspcList({ hubid: this.hubid })
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

  // drag and drop
  drop = (event: CdkDragDrop<string[]>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  showHideCols = (col: any, type: string, i: number) => {
    if (type === 'show') {
      this.hidCols.splice(i, 1);
      this.visbCols.push(col);
    } else {
      this.visbCols.splice(i, 1);
      this.hidCols.push(col);
    }
  }
  saveHdrChngs = (event: any) => {
    let nData = this.cols.slice(0, 1);
    this.cols = [...nData, ...this.visbCols];
    this.closeDropdown(event);
  }

  // outside click - dropdown
  outsideCloseDD = (dropdown: any, event: any) => {
    if (dropdown!.classList.contains('show') && !event.target!.classList.contains('fas')) {
      dropdown!.classList.remove('show');
    }
  }

  // toggle dropdown
  toggleDropdown = (event: any) => {
    if (event.target!.classList.contains('fas')) {
      event.target.parentNode.nextSibling!.classList.toggle('show');
    } else {
      event.target.nextSibling!.classList.toggle('show');
    }
  }

  closeDropdown = (event: any) => {
    event.target.parentNode.parentNode!.classList.remove('show');
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
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
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
        this.addURLIcon = 'cust-icon';
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
