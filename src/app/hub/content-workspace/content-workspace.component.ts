import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

import { DEF_ICON, DEF_IMG, FILE_TYPES, FLDR_ICON } from '../../shared/constants';
import { EnumHelper } from '../../shared/enum-helper';
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
import { TokenDataService } from '../../shared/services/token-data.service';
import { FileService } from '../../shared/services/file.service';

@Component({
  selector: 'app-content-workspace',
  templateUrl: './content-workspace.component.html',
  styleUrls: ['./content-workspace.component.scss']
})
export class ContentWorkspaceComponent implements OnInit {
  showWork!: boolean;
  @Input() hubid: any; routerSubs!: Subscription;
  addURLIcon!: string; iconUrl!: any;
  defIcon: any = DEF_ICON; custIcon: any; files!: any[]; defImg: any = DEF_IMG; fldrIcon: any = FLDR_ICON;
  dispPropsSec!: boolean; dispSmFolderSec!: boolean;
  dispGnrl!: boolean; dispSettings!: boolean; dispSmart!: boolean;
  wrkspcs!: Workspace[]; selWrkspc: Workspace | undefined;
  wrkspcLoading!: boolean; folderLoading!: boolean;
  addWrkspcForm!: FormGroup; updWrkspcForm!: FormGroup; folderForm!: FormGroup; smartFolderForm!: FormGroup;;
  cntntForm!: FormGroup; urlForm!: FormGroup;
  disabled!: boolean;
  fldrCntntArr!: any[]; selFolder: Folder | undefined; dispFolder: any; folderNav!: any[]; cntntArr!: Content[];
  gnrlCollapsed!: boolean; editSmrtCollapsed!: boolean; locationCollapsed!: boolean;
  visbCols!: any[]; hidCols!: any[]; cols!: any[]; data!: any[];
  view!: boolean; edit!: boolean | undefined;
  activeFldrs!: number; isActiveFldrs!: boolean; activeWrkspc!: number;

  tags!: Tag[]; selTags: Tag[] = []; selTags2: Tag[] = [];//using in selTags add and selTags2 form
  cntnts!: any[]; totalCount!: number; sort: any = {}; searchTxt!: string;
  searchTxtChng: Subject<string> = new Subject<string>(); filteredList: any = [];
  cntntTypeFltr:any=[];
  private subscription!: Subscription;
  selectable = true; removable: boolean = true;
  urlDisb!: boolean;
  cntntDisb!: boolean; cntntLoading!: boolean; activeIndex: number = 0;
  pageNo!: number; pageSize!: number; @Input() lmtPage: any;
  showRowInfo!: boolean; rowInfo!: any; docLoading!: boolean;
  desc!: string; isShared!: boolean; cmnt!: string;
  lngs!: Language[]; selLngs: Language[] = [];
  edits: any; disb: any; //disb and edits used in single edits

  usrInfo: any | null;
  fileTypes: any = FILE_TYPES; fileTypesArr: any = []; fileTypeArr: any = [];
  selUsrGrpWrkspc!: any[]; selUsrGrpLoad!: boolean; isUrGrpLoad!: boolean; selUsrGrpTxt!: '';
  unSelUsrGrpWrkspc!: any[]; unSelUsrGrpLoad!: boolean; unSelUsrGrpTxt!: ''; selUsrGrps: any[] = [];
  cntntTag!: any; urlTag!: any; cntntInfoTag!: any; cntntLng!: any; usrGrpWrkSpcDisb: boolean = false;

  allTags!: any[]; anyTags!: any[]; noneTags!: any[];
  alTgTxt!:string;anTgTxt!:string;noTgTxt!:string;
  allTags1!: any[]; anyTags1!: any[]; noneTags1!: any[];
  alTgTxt1!:string;anTgTxt1!:string;noTgTxt1!:string;

  constructor(
    private modalService: NgbModal,
    private cwServ: ContentWorkspaceService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private tagServ: TagsService,
    private lngServ: LanguageService,
    private tokenDataServ: TokenDataService,
    private fileServ: FileService
  ) { }

  ngOnInit(): void {
    this.usrInfo = this.tokenDataServ.getUser();
    this.fileTypesArr = EnumHelper.enumToArray(this.fileTypes);
    this.initialiseState();
    this.getTags();
    this.getLangs();
    this.cntntList();
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
    this.fldrCntntArr = []; this.selFolder = undefined; this.dispFolder = undefined; this.folderNav = [];
    this.gnrlCollapsed = false; this.editSmrtCollapsed = true; this.locationCollapsed = true;
    let cmnCols = [{ n: "Added", k: "createdDate", asc: false }, { n: "Size", k: "size", asc: false },
    { n: "Last Updated", k: "updatedDate", asc: false }];
    this.visbCols = [...cmnCols];
    this.hidCols = [{ n: "Likes", k: "likes", asc: false },{ n: "Languages", k: "contentLanguages", asc: false }];
    this.cols = [{ n: "Name", asc: false, k: "name" }, ...cmnCols];
    this.view = true;
    this.edit = false;
    this.activeFldrs = 1; this.isActiveFldrs = true; this.activeWrkspc = 1;
    this.showRowInfo = false; this.rowInfo = {}; this.docLoading = false;
    this.pageSize = this.lmtPage[0]; this.pageNo = 1;
    this.cntntTypeFltr = this.fileTypesArr;
    this.cntntDisb = false;
    this.totalCount = 0;
    this.cntntLoading = true; //use in cntnt listing
    this.urlDisb = false;
    this.edits = {};
    this.disb = {};
    this.cntntForm = this.fb.group({
      img: [''],
      // tags: ['']
    });
    this.urlForm = this.fb.group({
      iconType: ['', [Validators.required]],
      img: ['', [Validators.required]],
      // tags: [''], using ngModel
      name: ['', [Validators.required]],
      description: [''],
      url: ['', [Validators.required]],
    });
    this.subscription = this.searchTxtChng
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.pageNo = 1;
          this.cntntList();
        })
      )
      .subscribe();
    this.allTags = []; this.anyTags = []; this.noneTags = [];
    this.setFltrEmpty();
  }

  // ---- folder and smart folder ---- //
  // remove image in Modals
  remImg() {
    this.iconUrl = '';
    this.custIcon = undefined;
  }

  // change displayed folders and smart foldera (isActive)
  changeDispFldrs() {
    this.activeFldrs == 1 ? this.isActiveFldrs = true : this.isActiveFldrs = false;
    this.dispFolder = this.folderNav[this.folderNav.length - 1];
    this.listFolders();
  }

  // back nav folder
  backFolder() {
    this.folderNav.pop();
    this.dispFolder = this.folderNav[this.folderNav.length - 1];
    this.listFolders();
  }

  // change folder (show sub folders)
  changeFolder(folder: any) {
    this.dispFolder = folder;
    this.folderNav.push(folder);
    this.listFolders()
  }

  // listing all folders
  listFolders() {
    this.folderLoading = true;
    this.fldrCntntArr = [];
    this.dispFolder ? this.dispFolder.key == 'fldr' ? this.getAllObjWrkspc() : this.getContentSmtFldr() : this.getAllObjWrkspc();
  }

  // get folder and smart folder from wrkspace and content from workpspace and folder
  getAllObjWrkspc() {
    let params = {
      workspaceId: this.selWrkspc!.id,
      isActive: this.isActiveFldrs,
      folderId: this.dispFolder ? this.dispFolder!.id : undefined,
    };
    this.cwServ.getAllObjWrkspc(params).subscribe((data: any) => {
      if (data && data.result) {
        if (Array.isArray(data.result[0].contents) && data.result[0].contents.length > 0) {
          this.fldrCntntArr.push(...data.result[0].contents);
        }
        if (Array.isArray(data.result[0].folders) && data.result[0].folders.length > 0) {
          this.fldrCntntArr.push(...data.result[0].folders.map((fldr: any) => ({ ...fldr, key: 'fldr' })));
        }
        if (Array.isArray(data.result[0].smartFolders) && data.result[0].smartFolders.length > 0) {
          this.fldrCntntArr.push(...data.result[0].smartFolders.map((fldr: any) => ({ ...fldr, key: 'smtFldr' })));
        }
      }
      this.folderLoading = false;
    }, (err: any) => {
      this.folderLoading = false;
    });
  }

  // activate/deactivate folder/smart folder
  actDeactFolder(folder: any) {
    if (folder.key == 'fldr') {
      this.actDeactFldr(folder);
    } else if (folder.key == 'smtFldr') {
      this.actDeactSmtFldr(folder);
    }
  }

  // edit folder/smart folder modal
  editFolder(modal: any, folder: any) {
    if (folder.folderIconPath) {
      this.addURLIcon = 'cust-icon';
      this.iconUrl = folder.folderIconPath;
    }
    if (folder.key == 'fldr') {
      this.getFolder(folder.id);
    } else if (folder.key == 'smtFldr') {
      this.getSmartFolder(folder.id);
    }
    this.openModal(modal);
  }

  // folder/smart folder open modal (add/update)
  openFolderModal(modal: any, type: string, folder?: any) {
    if (type == 'add') {
      this.allTags = []; this.anyTags = []; this.noneTags = [];
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
  // for add and edit modal in smart folder (autocomplete and chips)

  // add file type filter for smart folder and main list
  addFileType(val: boolean, fT: any, isList: boolean = false) {
    if (val) {
      if (isList) {
        fT.chk = val;
        this.filteredList.push({ ...fT, type: 'fT' });
        this.cntntList();
      }
      else
        this.fileTypeArr.push(fT.v);
    } else
      if (isList) {
        fT.chk = val;
        this.filteredList = this.filteredList.filter((d: any) => d.v != fT.v);
        this.cntntList();
      }
      else
        this.fileTypeArr = this.fileTypeArr.filter((d: any) => d != fT.v);
  }

  // smart folder submit functions (add/update)
  smartFolderSubmit() {
    this.edit ? this.updSmartFolder() : this.addSmartFolder();
  }

  // activate/deactivate smart folder
  actDeactSmtFldr(fldr: Folder) {
    let actDeac: string = `${fldr.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this smart folder?`,
        title: `${fldr.isActive ? 'Deactivate' : 'Activate'} smart folder`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.actDeactSmtFldr(fldr.id.toString(), fldr.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Smart folder ${actDeac}d successfully`, 'Success!');
            this.listFolders();
          } else {
            this.toastr.error(`Unable to ${actDeac} smart folder`, 'Error!');
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
        workspaceId: this.selFolder!.workspaceId,
        folderId: this.selFolder!.folderId,
        isActive: this.selFolder!.isActive,
        fileTypeIds: this.fileTypeArr.length > 0 ? (this.fileTypeArr).toString() : undefined
      };
      folderData.tagIds = this.fldrTgs();
      this.cwServ.updSmartFolder(folderData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Smart Folder updated successfully', 'Success!');
            this.listFolders();
          } else {
            this.toastr.error('Unable to update smart folder', 'Error!');
          }
          this.setDefFldr('smartFolderForm');
        }, (err: any) => {
          this.setDefFldr('smartFolderForm');
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
        fileTypeIds: this.fileTypeArr.length > 0 ? (this.fileTypeArr).toString() : undefined
      };
      folderData.tagIds = this.fldrTgs();
      this.cwServ.addSmartFolder(folderData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Smart Folder added successfully', 'Success!');
            this.listFolders();
          } else {
            this.toastr.error('Unable to add smart folder', 'Error!');
          }
          this.setDefFldr('smartFolderForm');
        }, (err: any) => {
          this.setDefFldr('smartFolderForm');
        });
    }
  }

  fldrTgs(){
    let tagIds = [];
    if (this.allTags.length > 0) {
      for (let i = 0; i < this.allTags.length; i++) {
        tagIds.push(JSON.stringify({ TagId: this.allTags[i].id, TagFilterGroupId: 1 }));
      }
    }
    if (this.anyTags.length > 0) {
      for (let i = 0; i < this.allTags.length; i++) {
        tagIds.push(JSON.stringify({ TagId: this.allTags[i].id, TagFilterGroupId: 2 }));
      }
    }
    if (this.noneTags.length > 0) {
      for (let i = 0; i < this.allTags.length; i++) {
        tagIds.push(JSON.stringify({ TagId: this.allTags[i].id, TagFilterGroupId: 3 }));
      }
    }
    return '[' + tagIds.toString() + ']';
  }

  // get smart folder by id
  getSmartFolder(id: number) {
    this.cwServ.getSmtFolder(id).subscribe((data: any) => {
      if (data && data.result) {
        this.selFolder = data.result;
        this.smartFolderForm.patchValue({ ...this.selFolder });
        if (data.result.smartFolderTags.length > 0) {
          let temp = this.tags;
          this.allTags = []; this.anyTags = []; this.noneTags = [];
          for (let i = 0; i < data.result.smartFolderTags.length; i++) {
            if (data.result.smartFolderTags[i].tagId === 1) {
              this.allTags.push(...temp.filter(tag => tag.id == data.result.smartFolderTags[i].id));
            } else if (data.result.smartFolderTags[i].tagId === 2) {
              this.anyTags.push(...temp.filter(tag => tag.id == data.result.smartFolderTags[i].id));
            } else if (data.result.smartFolderTags[i].tagId === 3) {
              this.noneTags.push(...temp.filter(tag => tag.id == data.result.smartFolderTags[i].id));
            }
          }
        }
      } else {
        this.selFolder = undefined;
      }
    }, (err: any) => {
      this.selFolder = undefined;
    });
  }

  // ---- folder ---- //
  folderSubmit() {
    this.edit ? this.updFolder() : this.addFolder();
  }

  // activate/deactivate folder
  actDeactFldr(fldr: Folder) {
    let actDeac: string = `${fldr.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this folder?`,
        title: `${fldr.isActive ? 'Deactivate' : 'Activate'} folder`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.actDeactFldr(fldr.id.toString(), fldr.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Folder ${actDeac}d successfully`, 'Success!');
            this.listFolders();
          } else {
            this.toastr.error(`Unable to ${actDeac} folder`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  // edit folder
  updFolder() {
    if (this.folderForm.valid) {
      this.disabled = true;
      let folderData: any = {
        ...this.folderForm.value,
        id: this.selFolder!.id,
        folderIcon: this.custIcon,
        workspaceId: this.selFolder!.workspaceId,
        folderId: this.selFolder!.folderId,
        isActive: this.selFolder!.isActive
      };
      this.cwServ.updFolder(folderData).subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Folder added successfully', 'Success!');
          this.listFolders()
        } else {
          this.toastr.error('Unable to add Folder', 'Error!');
        }
        this.setDefFldr();
      }, (err: any) => {
        this.setDefFldr();
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
      this.cwServ.addFolder(folderData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Folder added successfully', 'Success!');
            this.listFolders();
          } else {
            this.toastr.error('Unable to add Folder', 'Error!');
          }
          this.setDefFldr();
        }, (err: any) => {
          this.setDefFldr();
        });
    }
  }

  setDefFldr(fType:'folderForm'|'smartFolderForm'='folderForm'){
    this.disabled = false;
    this.dismissModal();
    this[fType].reset();
    this.iconUrl = undefined;
    this.addURLIcon = '';
  }

  // get folder by id
  getFolder(id: number) {
    this.cwServ.getFolder(id).subscribe((data: any) => {
      if (data && data.result) {
        this.selFolder = data.result;
        this.folderForm.patchValue({ ...this.selFolder });
      } else {
        this.selFolder = undefined;
      }
    }, (err: any) => {
      this.selFolder = undefined;
    });
  }

  // ---- workspace ---- //
  // change displayed workspace (isActive)
  changeDispWrkspc() {
    this.getWrkspcList();
  }

  // activate/deactivate workspace
  actDeactWrkspc(wrkspc: Workspace) {
    let actDeac: string = `${wrkspc.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this workspace?`,
        title: `${wrkspc.isActive ? 'Deactivate' : 'Activate'} workspace`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.actDeactWrkspc(wrkspc.id.toString(), wrkspc.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Workspace ${actDeac}d successfully`, 'Success!');
            this.getWrkspcList();
          } else {
            this.toastr.error(`Unable to ${actDeac} workspace`, 'Error!');
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
        hubId: this.selWrkspc!.hub.id
      };
      this.cwServ.updWrkspc(wrkspcData).subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Workspace updated successfully', 'Success!');
          this.selWrkspc = wrkspcData;
          this.getWrkspcList();
        } else {
          this.toastr.error('Unable to update workspace', 'Error!');
        }
        this.dismissModal();
        this.disabled = false;
        this.updWrkspcForm.reset();
      }, (err: any) => {
        this.dismissModal();
        this.disabled = false;
        this.updWrkspcForm.reset();
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
    if (this.addWrkspcForm.valid && !this.edit) {
      this.disabled = true;
      let wrkspcData: any;
      wrkspcData = {
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
          this.addWrkspcForm.reset();
        }, (err: any) => {
          this.dismissModal();
          this.disabled = false;
          this.addWrkspcForm.reset();
        });
    }
  }

  // selected workspace
  selectWrkspc(wrkspc: Workspace) {
    this.selWrkspc = wrkspc;
    this.folderNav = [];
    this.dispFolder = undefined;
    this.listFolders();
    this.selUsrGrpWrkspc = [];
    this.isUrGrpLoad = false;
    this.selUsrGrpTxt = '';
    this.unSelUsrGrpWrkspc = [];
    this.unSelUsrGrpTxt = '';
    this.selUsrGrps = [];
    this.usrGrpWrkSpcDisb = false;
  }

  // list of workspaces
  getWrkspcList() {
    this.wrkspcLoading = true;
    this.wrkspcs = [];
    let query = {
      hubid: this.hubid,
      isActive: this.activeWrkspc==1?true:false
    }
    this.cwServ.wrkspcList(query)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.wrkspcs = data.result.results;
        } else if (data && data.result && Array.isArray(data.result.results) && data.result.results.length == 0) {
          this.wrkspcs = [];
        }
        this.wrkspcLoading = false;
      }, (err: any) => {
        this.wrkspcs = [];
        this.wrkspcLoading = false;
      });
  }

  // show workspaces list
  loadWrkspcs() {
    if (this.wrkspcs.length == 0) {
      this.getWrkspcList();
    }
  }

  getUsrGrpsFormWrkspc() {
    if (!this.isUrGrpLoad) {
      this.selUsrGrps = [];
      this.usrGrpInWrkspce(true, 'selUsrGrpLoad', 'selUsrGrpWrkspc');
      this.usrGrpInWrkspce(false, 'unSelUsrGrpLoad', 'unSelUsrGrpWrkspc');
    }
    this.isUrGrpLoad = true;
  }

  usrGrpInWrkspce(isLinked: boolean, var1: 'selUsrGrpLoad' | 'unSelUsrGrpLoad', var2: 'selUsrGrpWrkspc' | 'unSelUsrGrpWrkspc') {
    this[var1] = true;
    this[var2] = [];
    this.cwServ.usrGrpWrkspcList({ hubid: this.hubid, workspaceId: this.selWrkspc!.id, LinkedData: isLinked })
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result) && data.result.length > 0) {
          this[var2] = data.result;
        }
        this[var1] = false;
      }, (err: any) => {
        this[var1] = false;
      });
  }

  remUsrGrpInWrkspce(d: any) {
    this.selUsrGrpLoad = true;
    let data: any = {
      workspaceId: this.selWrkspc!.id,
      entityId: d.id, isGroup: d.isGroup
    }
    this.cwServ.remUsrGrpWrkspc(data)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(`${d.isGroup ? 'Group' : 'User'} removed from workspace`);
          this.usrGrpInWrkspce(true, 'selUsrGrpLoad', 'selUsrGrpWrkspc');
          this.usrGrpInWrkspce(false, 'unSelUsrGrpLoad', 'unSelUsrGrpWrkspc');
        } else {
          this.selUsrGrpLoad = false;
          this.toastr.error(`Unable to remove ${d.isGroup ? 'group' : 'user'} from workspace`);
        }
      }, (err: any) => {
        this.selUsrGrpLoad = false;
      });
  }

  addUsrGrpInWrkspce() {
    if (this.selUsrGrps.length > 0) {
      this.usrGrpWrkSpcDisb = true;
      let data: any = {
        hubid: parseInt(this.hubid),
        workspaceId: this.selWrkspc!.id,
        groupIds: [], employeeIds: []
      }
      for (let k = 0; k < this.selUsrGrps.length; k++) {
        if (this.selUsrGrps[k].isGroup)
          data.groupIds.push(this.selUsrGrps[k].id)
        else
          data.employeeIds.push(this.selUsrGrps[k].id)
      }
      this.cwServ.addUsrGrpWrkspc(data)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Added successfully`);
            this.selUsrGrps = [];
            this.usrGrpInWrkspce(true, 'selUsrGrpLoad', 'selUsrGrpWrkspc');
            this.usrGrpInWrkspce(false, 'unSelUsrGrpLoad', 'unSelUsrGrpWrkspc');
          } else {
            this.toastr.error(`Unable to add`);
          }
          this.usrGrpWrkSpcDisb = false;
        }, (err: any) => {
          this.usrGrpWrkSpcDisb = false;
        });
    } else {
      this.toastr.error(`No user or group is selected`);
    }
  }

  // drag and drop
  drop = (event: CdkDragDrop<string[]>) => {
    if(event.previousContainer.id =="cntntLists"){
      if(event.previousContainer.id =="cntntLists" && event.container.id =="fldrLists"){
        if(this.dispFolder && this.dispFolder.id && this.dispFolder.key== "smtFldr"){
          this.toastr.info("Content can't be add to smart folder.")
        }else{
          this.addCntntToWrkspc(event);
        }
      }
    }else{
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        }
    }
  }

  addCntntToWrkspc(event: any){
    let data:any = {
      contentId: event.previousContainer.data[event.previousIndex].id,
      workspaceId: this.selWrkspc!.id,
      folderId: this.dispFolder ? this.dispFolder!.id : null,
    }
    this.cwServ.addCntntToWrkspcFldr(data).subscribe((data: any) => {
      if (data && data.result &&  data.result.id ) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        this.fldrCntntArr[event.currentIndex] = data.result;
        this.toastr.success('Added successfully', 'Success!');
      }else{
        this.toastr.error('Unable to add', 'Error!');
      }
    }, (err: any) => {
    });
  }

  canDrag(): boolean{
    if(this.selWrkspc && this.selWrkspc.id){
      if(this.dispFolder && this.dispFolder.id && this.dispFolder.key== "smtFldr"){
        return true;
      }
      return false;
    }
    return true;
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

  // close dropdown manually
  closeDropdown = (event: any) => {
    event.target.parentNode.parentNode!.classList.remove('show');
  }

  // toggle workspace
  workspaceToggle = () => {
    this.showRowInfo = false;
    this.rowInfo = {};
    this.showWork = !this.showWork;
  }

  // content toggle
  toggleInfo = (row: any) => {
    if (this.showRowInfo && this.rowInfo.id == row.id) {
      this.closeDoc();
    } else {
      this.showWork = false;
      this.rowInfo = {};
      this.showRowInfo = true;
      this.edits = {};
      this.disb = {};
      this.desc = '';
      this.cmnt = '';
      this.selTags2 = [];
      this.selLngs = [];
      this.getCntnt(row);
    }
  }

  closeDoc = (isAll:boolean=false) => {
    this.showRowInfo = false;
    if(isAll)
      this.showWork = false;
    this.docLoading = false;
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
    this.rowInfo.img = this.getImg(this.rowInfo);
    this.isShared = this.rowInfo.canBeShared;
    if (Array.isArray(this.rowInfo.contentTags))
      this.selTags2 = this.rowInfo.contentTags.map((tag: any) => ({ ...tag, id: tag.tagId, name: tag.tagName }));
    else
      this.rowInfo.contentTags = []
    if (Array.isArray(this.rowInfo.contentLanguages))
      this.selLngs = this.rowInfo.contentLanguages.map((lng: any) => ({ ...lng, id: lng.languageId, name: lng.languageName }));
    else
      this.rowInfo.contentLanguages = []
    this.docLoading = false;
  }

  // edit options in documents (workspace)
  openEdit = (type: any) => {
    this.edits[type] = true;
  }

  // get content by smart folder
  getContentSmtFldr() {
    this.folderLoading = true;
    let query: any = {
      smartFolderId: this.dispFolder ? this.dispFolder!.id : undefined
    };
    this.cwServ.contentBySmartFolder(query).subscribe((data: any) => {
      if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
        this.fldrCntntArr.push(...data.result);
      }
      this.folderLoading = false;
    }, (err: any) => {
      this.folderLoading = false;
    });
  }

  closeEdit(type: string, isUpd: boolean = true) {
    if (type && isUpd) {
      switch (type) {
        case 'd': this.desc = this.rowInfo.description; break;
        case 't': this.selTags2 = this.rowInfo.contentTags.map((tag: any) => ({ ...tag, id: tag.tagId })); break;
        case 'l': this.selLngs = this.rowInfo.contentLanguages.map((lng: any) => ({ ...lng, id: lng.languageId })); break;
        case 'p': this.isShared = this.rowInfo.canBeShared; break;
      }
    }
    this.edits[type] = false;
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
        if (reason || reason === 0) {
          this.addWrkspcForm.reset();
          this.updWrkspcForm.reset();
          this.folderForm.reset();
          this.smartFolderForm.reset();
          this.iconUrl = undefined;
          this.addURLIcon = '';
        }
      });
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
    this.unsubSubs();
    this.searchTxt = "";
    this.initialiseState();
    this.cntntList();
  }

  sortChange(col: any, index: number) {
    this.cntntLoading = true;
    this.pageNo = 1;
    let colData = { ...col };
    for (let k = 0; k < this.cols.length; k++) {
      this.cols[k].asc = false;
    }
    colData.asc = !colData.asc;
    this.cols[index].asc = colData.asc;
    this.sort = {
      SortColumn: col.k,
      IsAscending: colData.asc,
    }
    this.cntntList();
  }

  // get content listing
  cntntList() {
    this.cntntLoading = true;
    this.closeDoc();
    let params = {
      pageNo: this.pageNo, pageSize: this.pageSize,
      searchText: this.searchTxt,
      ...this.sort,
      hubId: parseInt(this.hubid),
      fltrL: this.filteredList
    };
    // if (this.activeIndex == 1)
    //   params.isActive = true;
    // else if (this.activeIndex == 2)
    //   params.isActive = false;
    this.cwServ.contentList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.cntnts = data.result.results;
          this.totalCount = data.result.totalCount;
        } else {
          this.cntnts = [];
          this.totalCount = 0
        }
        this.cntntLoading = false;
      }, (err: any) => {
        this.cntnts = [];
        this.totalCount = 0
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
      pageNo: 1, pageSize: 1000
    }
    this.tagServ.tagList(query)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.tags = data.result.results;
        }
      }, (err: any) => {
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
        }
      }, (err: any) => {
      });
  }

  // changing page size
  pageSizeChange(pageSize: number) {
    this.pageSize = pageSize;
    this.cntntList();
  }

  // change pagination number
  changePageNo(num: number) {
    this.pageNo = num;
    this.cntntList();
  }

  displayFn = (tag: any) => {
    return (tag && tag.id) ? tag.name : '';
  }

  selFromAutoComp(data: any, type: 'selTags' | 'selTags2' | 'selLngs' | 'selUsrGrps'
  | 'allTags' | 'anyTags' | 'noneTags' |'allTags1' | 'anyTags1' | 'noneTags1', autoSel: any) {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info(`This ${type == 'selLngs' ? 'language' : type == 'selUsrGrps' ? 'one' : 'tag'} is already selected`, "Selected");
    } else {
      if (type === 'selUsrGrps')
        this[type].push({ ...data });
      else if (type === 'selLngs')
        this[type].push({ ...data, lid: data.id });
      else if(type =='allTags1' || type == 'anyTags1' || type == 'noneTags1'){
        let necData = {name: data.name,id: data.id};
        this[type].push({ ...necData});
        let n = (type =='allTags1'?'All':type =='anyTags1'?'Any':'None')+": "+necData.name;
        this.filteredList.push({ ...necData,type,n });
        this.cntntList();
      }
      else
        this[type].push({ ...data, tid: data.id });
      autoSel.value = '';
    }
  }

  remove(data: any, type: 'selTags' | 'selTags2' | 'selLngs' | 'selUsrGrps' |
  'allTags' | 'anyTags' | 'noneTags' |'allTags1' | 'anyTags1' | 'noneTags1' ): void {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      if(type =='allTags1' || type == 'anyTags1' || type == 'noneTags1'){
        const index2 = this.filteredList.findIndex((ele: any) => ele.id == data.id);
        if (index2 >= 0) {
          this.filteredList.splice(index2, 1);
        }
        this.cntntList();
      }
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
            this.files = []; this.pageNo = 1;
            this.cntntList();
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
            this.files = []; this.pageNo = 1;
            this.cntntList();
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

  updContent(type: string) {
    let cntntData: any = {}; let str: string = '';
    switch (type) {
      case 'd': str = 'Description';
        cntntData = {
          description: this.desc, updateType: 1
        }; break;
      case 't': str = 'Tags';
        cntntData = {
          contentTags: [], updateType: 4
        };
        if (this.selTags2 && this.selTags2.length > 0) {
          cntntData.contentTags = this.selTags2.map((tag: any) => tag.id);
        }
        break;
      case 'l': str = 'Languages';
        cntntData = {
          contentLanguages: [], updateType: 3
        };
        if (this.selLngs && this.selLngs.length > 0) {
          cntntData.contentLanguages = this.selLngs.map((lng: any) => lng.id);
        }
        break;
      case 'p': str = 'Permissions';
        cntntData = {
          canBeShared: this.isShared, updateType: 2
        };
        break;
    }
    cntntData.id = this.rowInfo.id;
    this.disb[type] = true;
    this.cwServ.updContent(cntntData)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success(`${str} saved successfully`, 'Success!');
          switch (type) {
            case 'd': this.rowInfo.description = this.desc; break;
            case 't': this.rowInfo.contentTags = this.selTags2.map((tag: any) => ({ ...tag, tagId: tag.id, tagName: tag.name })); break;
            case 'l': this.rowInfo.contentLanguages = this.selLngs.map((lng: any) => ({ ...lng, languageId: lng.id, languageName: lng.name })); break;
            case 'p': this.rowInfo.canBeShared = this.isShared; break;
          }
          this.closeEdit(type, false);
        } else {
          this.toastr.error(`Unable to save ${str.toLowerCase()}`, 'Error!');
        }
        this.disb[type] = false;
      }, (err: any) => {
        this.disb[type] = false;
      });
  }

  getImg(data: any): string {
    if (data.urlIconPath)
      return data.urlIconPath;
    else if (data.pdfImage)
      return data.pdfImage;
    else if (Array.isArray(data.pdfImages) && data.pdfImages.length>0 && data.pdfImages[0].imagePath)
      return data.pdfImages[0].imagePath;
    else
      return this.defImg;
  }

  addCmnt(type: string) {
    let cmntData = {
      commentText: this.cmnt,
      contentId: this.rowInfo.id,
    }
    this.disb[type] = true;
    this.cwServ.addCmntToContent(cmntData)
      .subscribe((data: any) => {
        if (data) {
          this.rowInfo.comments.push({
            createdByFullName: this.usrInfo && this.usrInfo.fN ? this.usrInfo.fN : 'User',
            createdDate: new Date(),
            commentText: this.cmnt
          })
          this.cmnt = '';
          this.toastr.success(data.message || `Comment added successfully`, 'Success!');
        } else {
          this.toastr.error(`Unable to add comment`, 'Error!');
        }
        this.disb[type] = false;
      }, (err: any) => {
        this.disb[type] = false;
      });
  }

  delCntnt() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to move ${this.rowInfo.name} to the trash?`,
        title: `Move to trash`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.delCntnt(this.rowInfo.id.toString()).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Content successfully moved to trash`, 'Success!');
            this.cntntList();
          } else {
            this.toastr.error(`Unable to trash content`, 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  downloadFile() {
    this.fileServ.downloadFile(this.rowInfo!.contentPath, this.rowInfo!.name);
  }

  setFltrEmpty(){
    this.filteredList = [];
    this.allTags1 = []; this.anyTags1 = []; this.noneTags1 = [];
    this.cntntTypeFltr = this.cntntTypeFltr.map((f: any) => ({ ...f, chk:false }));
  }

  clearAllFilter() {
    this.setFltrEmpty();
    this.cntntList();
  }

  clearSingleFlter = (fltr:any,i: number) => {
    this.filteredList.splice(i, 1);
    if(fltr.type==='fT'){
      const index = this.cntntTypeFltr.findIndex((flt: any) => flt.v == fltr.v);
      if (index >= 0){
        this.cntntTypeFltr[index].chk = false;
      }
    }
    else if(fltr.type =='allTags1' || fltr.type == 'anyTags1' || fltr.type == 'noneTags1'){
      let t:'allTags1'|'anyTags1'|'noneTags1' = fltr.type;
      const index = this[t].findIndex((flt: any) => flt.id == fltr.id);
      if (index >= 0){
        this[t].splice(index, 1);
      }
    }
    this.cntntList();
  }

  dismissModal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  // on file drop handler
  onFileDropped($event: any, isIcon: boolean = false, type: string = '') {
    if (!isIcon)
      this.prepareFilesList($event, isIcon);
    else {
      this.renderImg($event[0], type);
    }
  }

  // handle file from browsing
  fileBrowseHandler($event: any, isIcon: boolean = false, type: string = '') {
    if ($event.target && $event.target.files)
      this.prepareFilesList($event.target.files, isIcon);
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

  // Simulate the upload process
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

  unsubSubs(){
    if (!!this.subscription)
      this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.dismissModal();
    this.unsubSubs();
  }
}
