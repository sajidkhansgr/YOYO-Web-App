import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { DEF_ICON, PRPS } from '../../shared/constants';
import { FileHelper } from '../../shared/file-helper';
import { Workspace } from '../../shared/models/workspace';
import { Folder } from '../../shared/models/folder';
import { Tag } from '../../shared/models/tag';
import { Content } from '../../shared/models/content';
import { Language } from '../../shared/models/language';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ContentWorkspaceService } from './content-workspace.service';
import { TagsService } from '../tags/tags.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-content-workspace',
  templateUrl: './content-workspace.component.html',
  styleUrls: ['./content-workspace.component.scss']
})
export class ContentWorkspaceComponent implements OnInit {
  showWork!: boolean;
  @Input() hubid: any; routerSubs!: Subscription;
  addURLIcon!: string; iconUrl!: any;
  defIcon: any = DEF_ICON; custIcon: any; files!: any[];
  dispPropsSec!: boolean; dispSmFolderSec!: boolean;
  dispGnrl!: boolean; dispSettings!: boolean; dispSmart!: boolean;
  wrkspcs!: Workspace[]; selWrkspc: Workspace | undefined;
  wrkspcLoading!: boolean; folderLoading!: boolean;
  addWrkspcForm!: FormGroup; updWrkspcForm!: FormGroup; folderForm!: FormGroup; smartFolderForm!: FormGroup;;
  cntntForm!: FormGroup; urlForm!: FormGroup;
  disabled!: boolean;
  folderArr!: any[]; selFolder: Folder | undefined; dispFolder: any; folderNav!: any[];
  gnrlCollapsed!: boolean; editSmrtCollapsed!: boolean; locationCollapsed!: boolean;
  visbCols!: any[]; hidCols!: any[]; cols!: any[]; data!: any[];
  props: any;
  view!: boolean;
  edit!: boolean | undefined;
  activeFldrs!: number; isActiveFldrs!: boolean;

  tags!: Tag[]; selTags: Tag[] = []; selTags2: Tag[] = [];//using in selTags add and selTags2 form
  cntnts!: any[]; totalCount!: number; sort: any = {}; searchTxt!: string;
  selectable = true; removable: boolean = true;
  urlDisb!: boolean;
  cntntDisb!: boolean; cntntLoading!: boolean; activeIndex: number = 0;
  pageNo!: number; pageSize!: number; @Input() lmtPage: any;
  showRowInfo!: boolean; rowInfo!: any; docLoading!: boolean;
  desc!: string; isShared!:boolean;

  descDisb!: boolean; tagsDisb!: boolean; availDisb!: boolean; lngDisb!: boolean;
  permsDisb!: boolean;

  lngs!: Language[]; selLngs: Language[] = [];

  constructor(
    // private route: ActivatedRoute,
    private modalService: NgbModal,
    private cwServ: ContentWorkspaceService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private tagServ: TagsService,
    private lngServ: LanguageService
  ) { }

  ngOnInit(): void {
    this.initialiseState(); // reset and set based on new parameter this time
    this.getTags();
    this.getLangs();
    this.cntntList()
  }

  initialiseState() {
    this.files = []; this.addURLIcon = ''; this.iconUrl = '';
    this.dispGnrl = true; this.dispSettings = true; this.dispSmart = false;
    this.dispPropsSec = true; this.dispSmFolderSec = true;
    this.custIcon = undefined; this.showWork = false;
    this.wrkspcs = []; this.selWrkspc = undefined;
    this.wrkspcLoading = true; this.folderLoading = true;
    this.addWrkspcForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.updWrkspcForm = this.fb.group({
      name: ['', [Validators.required]]
      // more fields need to be added when done in api
    });
    this.folderForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      hideLabelInWorkspace: ['true']
      // more fields need to be added
    });
    this.smartFolderForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      hideLabelInWorkspace: ['true'],
      limitNoOfFiles: ['']
      // more fields need to be added
    });
    this.disabled = false;
    this.folderArr = []; this.selFolder = undefined; this.dispFolder = undefined; this.folderNav = [];
    this.gnrlCollapsed = false; this.editSmrtCollapsed = true; this.locationCollapsed = true;
    this.visbCols = [{ n: "Role", key: "role", dir: 1, }];
    this.hidCols = [{ n: "Property", key: "prop", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, },
    { n: "License Type", key: "lic", dir: 1, }, { n: "License Type", key: "lic", dir: 1, }];
    this.cols = [{ n: "Name", dir: 1, key: "name" }, { n: "Role", key: "role", dir: 1, }];
    this.props = PRPS;
    this.view = true;
    this.edit = false;
    this.activeFldrs = 1; this.isActiveFldrs = true;
    this.showRowInfo = false; this.rowInfo = {}; this.docLoading = false;
    this.pageSize = this.lmtPage[0]; this.pageNo = 1;
    this.cntntDisb = false;
    this.totalCount = 0;
    this.cntntLoading = true; //use in cntnt listing
    this.urlDisb = false;
    this.descDisb = false; //used in update
    this.tagsDisb = false; //used in update
    this.availDisb = false; //used in update
    this.lngDisb = false; //used in update
    this.permsDisb = false; //used in update
    this.cntntForm = this.fb.group({
      img: [''],
      tags: ['']
    });
    this.urlForm = this.fb.group({
      iconType: ['', [Validators.required]],
      img: ['', [Validators.required]],
      tags: [''],
      name: ['', [Validators.required]],
      description: [''],
      url: ['', [Validators.required]],
    });
  }

  // ---- folder and smart folder ---- //
  // remove image in Modals
  remImg(abc: any) {
    this.iconUrl = '';
    this.custIcon = undefined;
    abc.value = '';
  }

  // change displayed folders and smart foldera (isActive)
  changeDispFldrs() {
    this.activeFldrs == 1 ? this.isActiveFldrs = true : this.isActiveFldrs = false;
    this.listFolders();
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
    // console.log(this.dispFolder);
    this.listFolders()
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

  // activate folder/smart folder
  activateFldr(folder: any) {
    if (folder.key == 'fldr') {
      this.actFolder(folder);
    } else if (folder.key == 'smtFldr') {
      this.actSmartFolder(folder);
    }
  }

  // deactivate folder/smart folder
  deActivateFldr(folder: any) {
    if (folder.key == 'fldr') {
      this.deactFolder(folder);
    } else if (folder.key == 'smtFldr') {
      this.deactSmartFolder(folder);
    }
  }

  // edit folder/smart folder modal
  editFolder(modal: any, folder: any) {
    this.selFolder = folder;
    this.addURLIcon = 'cust-icon';
    this.iconUrl = folder.folderIconPath;
    if (folder.key == 'fldr') {
      this.folderForm.patchValue({ ...this.selFolder });
    } else if (folder.key == 'smtFldr') {
      this.smartFolderForm.patchValue({ ...this.selFolder });
    }
    // console.log(folder);
    this.openModal(modal);
  }

  // folder/smart folder open modal (add/update)
  openFolderModal(modal: any, type: string, folder?: any) {
    if (type == 'add') {
      this.edit = false;
      this.openModal(modal);
    } else if (type == 'edit') {
      this.edit = true;
      this.editFolder(modal, folder);
    } else if (type == 'dupl') {
      this.edit = undefined;
      this.editFolder(modal, folder);
    }
  }

  // ---- smart folder ---- //
  // smart folder submit functions (add/update)
  smartFolderSubmit() {
    this.edit ? this.updSmartFolder() : this.addSmartFolder();
  }

  // activate smart folder
  actSmartFolder(folder: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to activate this smart folder?`,
        title: `Activate smart folder`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.smartFolderAct(folder.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Smart folder activated successfully', 'Success!');
            this.listFolders()
          } else {
            this.toastr.error('Unable to activate smart folder', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // deactivate smart folder
  deactSmartFolder(folder: any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to deactivate this smart folder?`,
        title: `Dectivate smart folder`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.smartFolderDeact(folder.id).subscribe((data: any) => {
          if (data) {
            this.toastr.success('Smart folder deactivated successfully', 'Success!');
            this.listFolders()
          } else {
            this.toastr.error('Unable to deactivate smart folder', 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  // edit smart folder
  updSmartFolder() {
    if (this.smartFolderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.smartFolderForm.value,
        id: this.selFolder!.id,
        smartFolderIcon: this.custIcon,
        workspaceId: this.selWrkspc!.id,
        folderId: this.selFolder!.folderId,
        isActive: this.selFolder!.isActive,
        propertyIds: 1
      };
      // console.log(folderData);
      this.cwServ.updSmartFolder(folderData)
        .subscribe((data: any) => {
          // console.log(data);
          if (data) {
            this.toastr.success(data.message || 'Smart Folder updated successfully', 'Success!');
            this.listFolders();
          } else {
            this.toastr.error('Unable to update smart folder', 'Error!');
          }
          this.disabled = false;
          this.dismissModal();
        }, (err: any) => {
          // console.log(err);
          this.disabled = false;
          this.dismissModal();
        });
    }
  }

  // add smart folder
  addSmartFolder() {
    if (this.smartFolderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.smartFolderForm.value,
        smartFolderIcon: this.custIcon,
        workspaceId: this.selWrkspc!.id,
        folderId: this.folderNav.length > 0 ? this.folderNav[this.folderNav.length - 1].id : 0,
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
      folderId: this.dispFolder ? this.dispFolder!.id : null,
      isActive: this.isActiveFldrs
    };
    // console.log(query);
    this.cwServ.smartFolderListWrkspc(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
        for (let i = 0; i < data.result.results.length; i++) {
          this.folderArr.push({ ...data.result.results[i], key: 'smtFldr' });
        }
        // console.log(this.folderArr);
      } else {
        // this.folderArr = [];
        // this.toastr.error('No smart folders found', 'Error!');
      }
      this.dispFolder = undefined;
      this.folderLoading = false;
    }, (err: any) => {
      this.dispFolder = undefined;
      this.folderLoading = false;
    });
  }

  // ---- folder ---- //
  // folder submit functions (add/update)
  folderSubmit() {
    this.edit ? this.updFolder() : this.addFolder();
  }

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

  // edit folder
  updFolder() {
    if (this.folderForm.valid) {
      // this.disabled = true;
      let folderData: any = {
        ...this.folderForm.value,
        id: this.selFolder!.id,
        folderIcon: this.custIcon,
        workspaceId: this.selFolder!.workspaceId,
        folderId: 0,
        isActive: this.selFolder!.isActive
      };
      // console.log(this.selFolder);
      // console.log(folderData.folderIcon);
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

  // add folder
  addFolder() {
    if (this.folderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.folderForm.value,
        folderIcon: this.custIcon,
        workspaceId: this.selWrkspc!.id,
        folderId: this.folderNav.length > 0 ? this.folderNav[this.folderNav.length - 1].id : 0,
        isActive: true
      };
      // console.log(this.folderNav[this.folderNav.length - 1]);
      // console.log(this.folderNav[this.folderNav.length - 1].id);
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
      folderId: this.dispFolder ? this.dispFolder!.id : null,
      isActive: this.isActiveFldrs
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
    if (this.updWrkspcForm.valid && !this.edit) {
      this.addWorkSpc();
    } else if (this.updWrkspcForm.valid && this.edit) {
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
  updWrkspcModal(content: any, type: string) {
    if (type == 'edit') {
      this.edit = true;
    } else if (type == 'dupl') {
      this.edit = false;
    }

    this.updWrkspcForm.patchValue({ ...this.selWrkspc });
    this.openModal(content);
  }

  // add workspace
  addWorkSpc() {
    if (this.addWrkspcForm.valid || this.updWrkspcForm.valid && !this.edit) {
      this.disabled = true;
      let wrkspcData: any;
      if (this.addWrkspcForm.valid) {
        wrkspcData = {
          ...this.addWrkspcForm.value,
          hubId: this.selWrkspc!.hubId
        };
      } else if (this.updWrkspcForm.valid) {
        wrkspcData = {
          ...this.updWrkspcForm.value,
          hubId: this.selWrkspc!.hubId
        };
      }
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
  // toggleDropdown = (event: any) => {
  //   if (event.target!.classList.contains('fas')) {
  //     event.target.parentNode.nextSibling!.classList.toggle('show');
  //   } else {
  //     event.target.nextSibling!.classList.toggle('show');
  //   }
  // }

  closeDropdown = (event: any) => {
    event.target.parentNode.parentNode!.classList.remove('show');
  }

  // toggle workspace
  workspaceToggle = () => {
    this.showRowInfo = false;
    this.showWork = !this.showWork;
  }

  // content toggle
  toggleInfo = (row: any) => {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.closeDoc();
    } else {
      this.showRowInfo = true;
      this.showWork = false;
      this.rowInfo = {};
      this.desc = '';
      this.selTags2 = [];
      this.selLngs = [];
      this.getCntnt(row);
    }
  }

  closeDoc = () => {
    this.showRowInfo = false;
    this.showWork = false;
    this.rowInfo = {};
  }

  getCntnt(cntnt: Content) {
    this.docLoading = true;
    this.cwServ.viewContent(cntnt!.id.toString()).subscribe((data: any) => {
      if (data && data.result && data.result.id) {
        this.rowInfo = data.result;
      } else {
        this.rowInfo = cntnt;
      }
      this.setDefCntntData();
    }, (err: any) => {
      this.rowInfo = cntnt;
      this.setDefCntntData();
    });
  }

  setDefCntntData() {
    this.desc = this.rowInfo.description;
    this.isShared = this.rowInfo.canBeShared;
    if (Array.isArray(this.rowInfo.contentTags))
      this.selTags2 = this.rowInfo.contentTags.map((tag: any) => ({ ...tag, id: tag.tagId }));
    else
      this.rowInfo.contentTags = []
    if (Array.isArray(this.rowInfo.contentLanguages))
      this.selLngs = this.rowInfo.contentLanguages.map((lng: any) => ({ ...lng, id: lng.languageId }));
    else
      this.rowInfo.contentLanguages = []
    this.docLoading = false;
  }

  // edit options in documents (workspace)
  openEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'none';
    (event.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'block';
  }

  closeEdit = (event: any,type: number=0,isUpd:boolean=true) => {
    if(type && isUpd){
      switch (type) {
        case 1: this.desc = this.rowInfo.description; break;
        case 4: this.selTags2 = this.rowInfo.contentTags.map((tag: any) => ({ ...tag, id: tag.tagId })); break;
        case 3: this.selLngs = this.rowInfo.contentLanguages.map((lng: any) => ({ ...lng, id: lng.languageId })); break;
        case 2: this.isShared = this.rowInfo.canBeShared; break;
      }
    }
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

  iconURLHandler = ($event: any) => {
    this.iconUrl = '';
    if ($event.value === 1) {
      this.urlForm.removeControl('img');
    } else if ($event.value === 2) {
      this.urlForm.addControl('img', new FormControl(''));
      this.urlForm.controls['img'].setValidators([Validators.required]);
    }
    this.urlForm.updateValueAndValidity();
  }

  showPropsSection = () => {
    this.dispPropsSec = !this.dispPropsSec;
  }

  showSmartFolderSection = () => {
    this.dispSmFolderSec = !this.dispSmFolderSec;
  }

  openModal(content: any, isTagReq: boolean = false) {
    if (isTagReq) {
      this.urlForm.reset();
      this.cntntForm.reset();
      this.iconUrl = '';
      this.getTags();
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
      .then((result) => {

      }, (reason) => {

      });
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
    this.initialiseState();
    this.cntntList();
  }

  // get content listing
  cntntList() {
    this.cntntLoading = true;
    let params = {
      pageNo: this.pageNo, pageSize: this.pageSize,
      searchText: this.searchTxt,
      ...this.sort
      // hubId: parseInt(this.hubid)
    };
    // if (this.activeIndex == 1)
    //   params.isActive = true;
    // else if (this.activeIndex == 2)
    //   params.isActive = false;

    this.cwServ.contentList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          console.log(data, "dadsa")
          this.cntnts = data.result.results;
          this.totalCount = data.result.totalCount;
        } else {
          this.cntnts = [];
        }
        this.cntntLoading = false;
      }, (err: any) => {
        this.cntnts = [];
        this.cntntLoading = false;
      });
  }

  // list of tags
  getTags() {
    this.tags = [];
    this.selTags = [];
    this.custIcon = '';
    let query = {
      hubId: parseInt(this.hubid),
      pageNo: 1,
      pageSize: 1000
    }
    // console.log(query.isActive);
    this.tagServ.tagList(query)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.tags = data.result.results;
        } else {
          this.tags = [];
        }
      }, (err: any) => {
        console.log(err);
        this.tags = [];
      });
  }

  // list of languages
  getLangs() {
    this.lngs = [];
    this.selLngs = [];
    this.lngServ.lngList({})
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result) && data.result.length > 0) {
          this.lngs = data.result;
        } else {
          this.lngs = [];
        }
      }, (err: any) => {
        console.log(err);
        this.lngs = [];
      });
  }

  // when changing page size
  pageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.cntntList();
  }

  // numbers to be displayed for Pagination
  changePageNo(num: number) {
    this.pageNo = num;
    this.cntntList();
  }

  displayFn = (tag: any) => {
    return (tag && tag.id) ? tag.name : '';
  }

  selFromAutoComp(data: any, type: 'selTags' | 'selTags2' | 'selLngs') {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info(`This ${type == 'selLngs' ? 'language' : 'tag'} is already selected`, "Selected");
    } else {
      if (type === 'selLngs')
        this[type].push({ ...data, lid: data.id });
      else
        this[type].push({ ...data, tid: data.id });
    }
  }

  remove(data: any, type: 'selTags' | 'selTags2' | 'selLngs'): void {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this[type].splice(index, 1);
    }
  }

  onCntntSubmit() {
    if (this.cntntForm.valid) {
      this.cntntDisb = true;
      let cntntData: any = {
        content: this.files[0],
        hubId: parseInt(this.hubid),
        isUrl: false
      }
      if (this.selTags && this.selTags.length > 0) {
        cntntData.ContentTagsString = this.selTags.map((tag: any) => ({ tagId: tag.id }));
        cntntData.ContentTagsString = JSON.stringify(cntntData.ContentTagsString)
      }
      this.cwServ.addContent(cntntData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success('Content added successfully', 'Success!');
            this.files = [];
            this.dismissModal();
          } else {
            this.toastr.error('Unable to add content', 'Error!');
          }
          this.cntntDisb = false;
        }, (err: any) => {
          this.cntntDisb = false;
        });
    }
  }

  onUrlSubmit() {
    if (this.urlForm.valid) {
      this.urlDisb = true;
      //need to check icon type for default icon, for now its skip
      let cntntData: any = {
        ...this.urlForm.value,
        urlIcon: this.custIcon,
        hubId: parseInt(this.hubid),
        isUrl: true
      }
      delete cntntData.img;
      if (this.selTags && this.selTags.length > 0) {
        cntntData.ContentTagsString = this.selTags.map((tag: any) => ({ tagId: tag.id }));
        cntntData.ContentTagsString = JSON.stringify(cntntData.ContentTagsString)
      }
      this.cwServ.addContent(cntntData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success('Content added successfully', 'Success!');
            this.files = [];
            this.dismissModal();
          } else {
            this.toastr.error('Unable to add content', 'Error!');
          }
          this.urlDisb = false;
        }, (err: any) => {
          this.urlDisb = false;
        });
    }
  }

  updContent($event: any, type: number, disbType: 'descDisb' | 'tagsDisb' | 'lngDisb'| 'permsDisb') {
    let cntntData: any = {}; let str: string = '';
    switch (type) {
      case 1: str = 'Description';
        cntntData = {
          description: this.desc, updateType: type
        }; break;
      case 4: str = 'Tags';
        cntntData = {
          contentTags: [], updateType: type
        };
        if (this.selTags2 && this.selTags2.length > 0) {
          cntntData.contentTags = this.selTags2.map((tag: any) => tag.id);
        }
        break;
      case 3: str = 'Languages';
        cntntData = {
          contentLanguages: [], updateType: type
        };
        if (this.selLngs && this.selLngs.length > 0) {
          cntntData.contentLanguages = this.selLngs.map((lng: any) => lng.id);
        }
        break;
      case 2: str = 'Permissions';
        cntntData = {
          canBeShared: this.isShared, updateType: type
        };
        break;
    }
    cntntData.id = this.rowInfo.id;
    this[disbType] = true;
    this.cwServ.updContent(cntntData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(`${str} saved successfully`, 'Success!');
          switch (type) {
            case 1: this.rowInfo.description = this.desc; break;
            case 4: this.rowInfo.contentTags = this.selTags2; break;
            case 3: this.rowInfo.contentLanguages = this.selLngs; break;
            case 2: this.rowInfo.canBeShared = this.isShared; break;
          }
          this.closeEdit($event,type,false);
        } else {
          this.toastr.error(`Unable to save ${str.toLowerCase()}`, 'Error!');
        }
        this[disbType] = false;
      }, (err: any) => {
        this[disbType] = false;
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
  onFileDropped($event: any, isIcon: boolean = false, type: string = '') {
    if (!isIcon)
      this.prepareFilesList($event, isIcon);
    else {
      this.renderImg($event[0], type);
    }
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event: any, isIcon: boolean = false, type: string = '') {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
    // preview image
    let input = $event.target;
    if (input.files && input.files && isIcon) {
      this.renderImg(input.files[0], type);
    }
  }

  renderImg(file: any, type: string) {
    if (file) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.addURLIcon = 'cust-icon';
        this.iconUrl = event.target.result;
      };
      this.custIcon = file;
      if (type === 'urlForm')
        this.urlForm.controls['img'].setValue(this.custIcon);
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
    return FileHelper.formatBytes(bytes, 2);
  }
}
