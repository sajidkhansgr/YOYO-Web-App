import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

import { DEF_ICON, FILE_TYPES, FLDR_ICON, FILE_EXT } from '../../shared/constants';
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
  defIcon: any = DEF_ICON; custIcon: any; files!: any[]; fldrIcon: any = FLDR_ICON;
  dispPropsSec!: boolean; dispSmFolderSec!: boolean;
  dispGnrl!: boolean; dispSettings!: boolean; dispSmart!: boolean;
  wrkspcs!: Workspace[]; selWrkspc: Workspace | undefined;
  wrkspcLoading!: boolean; folderLoading!: boolean;
  addWrkspcForm!: FormGroup; updWrkspcForm!: FormGroup; folderForm!: FormGroup; smartFldrForm!: FormGroup;
  cntntForm!: FormGroup; urlForm!: FormGroup;
  verForm!: FormGroup; verDisb!: boolean;
  disabled!: boolean;
  wrkspcItems!: any[]; selFolder: Folder | undefined; dispFolder: any; folderNav!: any[]; cntntArr!: Content[];
  gnrlCollapsed!: boolean; editSmrtCollapsed!: boolean; locationCollapsed!: boolean;
  visbCols!: any[]; hidCols!: any[]; cols!: any[]; data!: any[];
  view!: boolean; edit!: boolean | undefined;
  activeFldrs!: number; isActiveFldrs!: boolean; activeWrkspc!: number;

  tags!: Tag[]; selTags: Tag[] = []; selTags2: Tag[] = [];//using in selTags add and selTags2 form
  cntnts!: any[]; totalCount!: number; sort: any = {}; searchTxt!: string;
  searchTxtChng: Subject<string> = new Subject<string>(); filteredList: any = [];
  cntntTypeFltr: any = [];
  private subscription!: Subscription;
  selectable = true; removable: boolean = true;
  urlDisb!: boolean;
  cntntDisb!: boolean; cntntLoading!: boolean; activeIndex: number = 0;
  procUpld!: boolean; procUpldData!: any; procUpldLoad!: boolean;

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
  alTgTxt!: string; anTgTxt!: string; noTgTxt!: string;
  allTags1!: any[]; anyTags1!: any[]; noneTags1!: any[];
  alTgTxt1!: string; anTgTxt1!: string; noTgTxt1!: string;

  getIntervalId: any; procCnt: number = 0;

  mdlItems!: any[]; mdlLoading!: boolean; mdlNav!: any[]; mdlSelected: any;
  hasIcon!: boolean; fileExt = FILE_EXT;

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
    this.getTags();this.getLangs();
    this.setDefSort(); this.cntntList();
    this.processingCntnt(true);
    this.getIntervalId = setInterval(() => {
      this.processingCntnt(true);
    }, 13000) //13 seconds

  }

  initialiseState() {
    this.files = []; this.addURLIcon = ''; this.iconUrl = '';
    this.dispGnrl = true; this.dispSettings = true; this.dispSmart = false;
    this.dispPropsSec = true; this.dispSmFolderSec = true;
    this.custIcon = undefined; this.showWork = false;
    this.wrkspcs = []; this.selWrkspc = undefined;
    this.wrkspcLoading = true; this.folderLoading = true;
    this.addWrkspcForm = this.fb.group({
      name: ['', [Validators.required]],
      assignMeToWorkspace: []
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
    this.smartFldrForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      hideLabelInWorkspace: ['true'],
      limitNoOfFiles: ['']
      // more fields need to be added
    });
    this.disabled = false;
    this.wrkspcItems = []; this.selFolder = undefined; this.dispFolder = undefined; this.folderNav = [];
    this.gnrlCollapsed = false; this.editSmrtCollapsed = true; this.locationCollapsed = true;
    if (this.activeIndex == 1) {
      this.cols = [{ n: "Name", k: "name" }, { n: "Queued Time", k: "queuedAt" }];
    } else {
      let cmnCols = [{ n: "Added", k: "createdDate", asc: true }, { n: "Size", k: "size", asc: false },
      { n: "Last Updated", k: "updatedDate", asc: false }];
      this.visbCols = [...cmnCols];
      this.hidCols = [{ n: "Likes", k: "likes", asc: false }, { n: "Languages", k: "contentLanguages", asc: false }];
      this.cols = [{ n: "Name", asc: false, k: "name" }, ...cmnCols];
    }
    this.view = true;
    this.edit = false;
    this.activeFldrs = 1; this.isActiveFldrs = true; this.activeWrkspc = 1;
    this.showRowInfo = false; this.rowInfo = {}; this.docLoading = false;
    this.pageSize = this.lmtPage[0]; this.pageNo = 1;
    this.cntntTypeFltr = this.fileTypesArr;
    this.cntntDisb = false;
    this.procUplDef();
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
    this.verForm = this.fb.group({
      KeepCurrentFileName: [false],
      LikeReset: [false]
    });
    this.verDisb = false;
    this.subscription = this.searchTxtChng
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.pageNo = 1;
          this.setDefSort(); this.loadCntnts();
          // this.cntntList();
        })
      )
      .subscribe();
    this.allTags = []; this.anyTags = []; this.noneTags = [];
    this.setFltrEmpty();
    this.mdlItems = []; this.mdlLoading = true; this.mdlNav = []; this.mdlSelected = undefined;
    this.hasIcon = true;
  }


  setDefSort(){
    this.sort = { sortColumn: 'createdDate', isAscending: false };
  }

  procUplDef() {
    this.procUpld = false; this.procUpldData = []; this.procUpldLoad = false;
  }

  // ---- folder and smart folder ---- //
  // remove image in Modals
  remImg() {
    this.iconUrl = '';
    this.custIcon = undefined;
    this.hasIcon = false;
  }

  // change displayed folders and smart folders (isActive)
  changeDispFldrs() {
    this.activeFldrs == 1 ? this.isActiveFldrs = true : this.isActiveFldrs = false;
    this.dispFolder = this.folderNav[this.folderNav.length - 1];
    this.listFolders();
  }

  // back nav folder
  backFolder(val?: boolean) {
    if (val) {
      this.mdlNav.pop();
      let l = this.mdlNav.length;
      l === 0 ? this.getWrkspcList(true) : this.listFolders(this.mdlNav[l - 1]);
    } else {
      this.folderNav.pop();
      this.dispFolder = this.folderNav[this.folderNav.length - 1];
      this.listFolders();
    }
  }

  // change folder an smart folders (show sub folders and content)
  changeFolder(folder: any) {
    this.dispFolder = folder;
    this.folderNav.push(folder);
    this.listFolders()
  }

  // show sub folders in modal (edit folder)
  mdlListFolders(item: any) {
    this.mdlNav.push(item);
    this.listFolders(item);
  }

  // listing all folders
  listFolders(item?: any) {
    if (item) {
      this.mdlLoading = true;
      this.mdlItems = [];
    } else {
      this.folderLoading = true;
      this.wrkspcItems = [];
    }
    this.getAllDataWrkspc(item);
    // this.dispFolder ? this.dispFolder.entityType === 2 ? this.getContentSmtFldr() : this.getAllDataWrkspc() : this.getAllDataWrkspc();
  }

  // get folder and smart folder from wrkspace; content from workpspace and folder
  getAllDataWrkspc(item?: any) {
    let params = {
      workspaceId: item ? item.workspaceId ? item.workspaceId : item.id : this.selWrkspc!.id,
      isActive: item ? true : this.isActiveFldrs,
      parentId: item ? item.workspaceId ? item.id : undefined : this.dispFolder ? this.dispFolder!.id : undefined,
    };
    this.cwServ.getAllDataWrkspc(params).subscribe((data: any) => {
      if (data && Array.isArray(data.result) && data.result.length > 0) {
        if (item) {
          for (let i = 0; i < data.result.length; i++) {
            data.result[i].entityType === 1 ? this.mdlItems.push(data.result[i]) : undefined;
          }
        } else {
          this.wrkspcItems = data.result;
        }
      }
      item ? this.mdlLoading = false : this.folderLoading = false;
    }, (err: any) => {
      item ? this.mdlLoading = false : this.folderLoading = false;
    });
  }

  // activate/deactivate folder/smart folder
  actDeactFolder(d: any) {
    if (d.entityType == 1) {
      this.actDeactFldr(d);
    } else if (d.entityType == 2) {
      this.actDeactSmtFldr(d);
    }
  }

  // edit/duplicate folder/smart folder modal
  editFolder(modal: any, folder: any) {
    this.mdlSelected = undefined;
    this.mdlNav = [];
    this.locationCollapsed = true;
    if (folder.imagePath) {
      this.addURLIcon = 'cust-icon';
      this.iconUrl = folder.imagePath;
      this.hasIcon = true;
    }
    if (folder.entityType === 1) {
      this.getFolder(folder.entityId);
    } else if (folder.entityType === 2) {
      this.getSmartFolder(folder.entityId);
    }
    this.openModal(modal);
  }

  // folder/smart folder open modal (add/update/duplicate)
  openFolderModal(modal: any, type: string, folder?: any) {
    this.allTags = []; this.anyTags = []; this.noneTags = [];
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

  // smart folder submit functions (add/update/duplicate)
  smartFolderSubmit() {
    this.edit ? this.updSmartFolder() : this.addDuplSmartFolder();
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
          this.cwServ.actDeactSmtFldr(fldr.entityId?.toString(), fldr.isActive ? false : true).subscribe((data: any) => {
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
    if (this.smartFldrForm.valid) {
      this.disabled = true;
      let fldrData: any = {
        ...this.smartFldrForm.value,
        id: this.selFolder!.id,
        workspaceId: this.selFolder!.workspaceId,
        folderId: this.selFolder!.folderId,
        isActive: this.selFolder!.isActive,
        fileTypeIds: this.fileTypeArr.length > 0 ? (this.fileTypeArr).toString() : undefined
      };
      fldrData.tagIds = this.fldrTgs();
      if(this.custIcon || this.iconUrl){
        if(this.custIcon)
          fldrData.smartFolderIcon = this.custIcon;
        fldrData.hasIcon=  true;
      }else{
        fldrData.hasIcon=  false;
      }
      this.cwServ.updSmartFolder(fldrData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Smart Folder updated successfully', 'Success!');
            this.listFolders();
          } else {
            this.toastr.error('Unable to update smart folder', 'Error!');
          }
          this.setDefFldr('smartFldrForm');
        }, (err: any) => {
          this.setDefFldr('smartFldrForm');
        });
    }
  }

  // add/duplicate smart folder
  addDuplSmartFolder() {
    if (this.smartFldrForm.valid) {
      this.disabled = true;
      let fldrData: any = {
        ...this.smartFldrForm.value,
        // smartFolderIcon: this.custIcon,
        isActive: true,
        fileTypeIds: this.fileTypeArr.length > 0 ? (this.fileTypeArr).toString() : undefined
      }
      if(this.custIcon){
        fldrData.smartFolderIcon = this.custIcon;
        // fldrData.hasIcon = true;
      }else{
        // fldrData.hasIcon = false;
      }
      if (this.edit === undefined) {
        fldrData.parentFolderIdForDuplicateSmartFolder = this.mdlSelected ? this.mdlSelected.entityId : this.selFolder!.folderId;
        fldrData.workspaceIdForDuplicateSmartFolder = this.mdlSelected ? this.mdlSelected.entityId ? this.mdlSelected.workspaceId : this.mdlSelected.id : this.selFolder!.workspaceId;
        fldrData.originalSmartFolderId = this.selFolder!.id;
        fldrData.originalWorkspaceId = this.selFolder!.workspaceId;
        // fldrData.hasIcon = this.hasIcon;
      } else {
        fldrData.workspaceId = this.selWrkspc!.id;
        fldrData.folderId = this.folderNav.length > 0 ? this.folderNav[this.folderNav.length - 1].entityId : 0;
      }
      fldrData.tagIds = this.fldrTgs();
      this.cwServ.addDuplSmartFolder(fldrData, this.edit)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || `Smart Folder ${this.edit === undefined ? 'duplicated' : 'added'} successfully`, 'Success!');
            this.listFolders();
          } else {
            this.toastr.error(`Unable to ${this.edit === undefined ? 'duplicate' : 'add'} smart folder`, 'Error!');
          }
          this.setDefFldr('smartFldrForm');
        }, (err: any) => {
          this.setDefFldr('smartFldrForm');
        });
    }
  }

  fldrTgs() {
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
        this.smartFldrForm.patchValue({ ...this.selFolder });
        // if (data.result.smartFolderTags.length > 0) {
        //   let temp = this.tags;
        //   this.allTags = []; this.anyTags = []; this.noneTags = [];
        // for (let i = 0; i < data.result.smartFolderTags.length; i++) {
        //   if (data.result.smartFolderTags[i].tagId === 1) {
        //     this.allTags.push(...temp.filter(tag => tag.id == data.result.smartFolderTags[i].id));
        //   } else if (data.result.smartFolderTags[i].tagId === 2) {
        //     this.anyTags.push(...temp.filter(tag => tag.id == data.result.smartFolderTags[i].id));
        //   } else if (data.result.smartFolderTags[i].tagId === 3) {
        //     this.noneTags.push(...temp.filter(tag => tag.id == data.result.smartFolderTags[i].id));
        //   }
        // }
        // }
      } else {
        this.selFolder = undefined;
      }
    }, (err: any) => {
      this.selFolder = undefined;
    });
  }

  // ---- folder ---- //
  folderSubmit() {
    this.edit ? this.updFolder() : this.addDuplFolder();
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
        this.cwServ.actDeactFldr(fldr.entityId?.toString(), fldr.isActive ? false : true).subscribe((data: any) => {
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
      let fldrData: any = {
        ...this.folderForm.value,
        id: this.selFolder!.id,
        folderIcon: this.custIcon,
        workspaceId: this.mdlSelected ? this.mdlSelected.entityId ? this.mdlSelected.workspaceId : this.mdlSelected.id : this.selFolder!.workspaceId,
        folderId: this.mdlSelected ? this.mdlSelected.entityId : this.selFolder!.folderId,
        isActive: this.selFolder!.isActive
      };
      if(this.custIcon || this.iconUrl){
        if(this.custIcon)
          fldrData.folderIcon = this.custIcon;
        fldrData.hasIcon=  true;
      }else{
        fldrData.hasIcon=  false;
      }
      this.cwServ.updFolder(fldrData).subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Folder updated successfully', 'Success!');
          this.listFolders()
        } else {
          this.toastr.error('Unable to update Folder', 'Error!');
        }
        this.setDefFldr();
      }, (err: any) => {
        this.setDefFldr();
      });
    }
  }

  // add/duplicate folder
  addDuplFolder() {
    if (this.folderForm.valid) {
      this.disabled = true;
      let fldrData: any = {
        ...this.folderForm.value,
        isActive: true
      }
      if(this.custIcon){
        fldrData.folderIcon = this.custIcon;
        // fldrData.hasIcon = true;
      }else{
        // fldrData.hasIcon = false;
      }
      if (this.edit === undefined) {
        fldrData.parentFolderIdForDuplicateFolder = this.mdlSelected ? this.mdlSelected.entityId : this.selFolder!.folderId;
        fldrData.workspaceIdForDuplicateFolder = this.mdlSelected ? this.mdlSelected.entityId ? this.mdlSelected.workspaceId : this.mdlSelected.id : this.selFolder!.workspaceId;
        fldrData.originalFolderId = this.selFolder!.id;
        fldrData.originalWorkspaceId = this.selFolder!.workspaceId;
        fldrData.hasIcon = this.hasIcon;
      } else {
        fldrData.workspaceId = this.selWrkspc!.id;
        fldrData.folderId = this.folderNav.length > 0 ? this.folderNav[this.folderNav.length - 1].entityId : 0;
      }
      this.cwServ.addDuplFolder(fldrData, this.edit)
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

  setDefFldr(fType: 'folderForm' | 'smartFldrForm' = 'folderForm') {
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
      // this.addWorkSpc();
      this.toastr.info('Not implemented yet', 'Info!');
    } else if (this.updWrkspcForm.valid && this.edit) {
      this.disabled = true;
      let wrkspcD: any = {
        ...this.updWrkspcForm.value,
        id: this.selWrkspc!.id,
        hubId: this.selWrkspc!.hub.id
      };
      this.cwServ.updWrkspc(wrkspcD).subscribe((data: any) => {
        if (data) {
          this.toastr.success(data.message || 'Workspace updated successfully', 'Success!');
          this.selWrkspc = wrkspcD;
          this.getWrkspcList();
        } else {
          this.toastr.error('Unable to update workspace', 'Error!');
        }
        this.wrkspcSetDef('updWrkspcForm');
      }, (err: any) => {
        this.wrkspcSetDef('updWrkspcForm');
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
      let wrkspcD: any = {
        ...this.addWrkspcForm.value,
        assignMeToWorkspace: this.addWrkspcForm.value.assignMeToWorkspace || false,
        hubId: parseInt(this.hubid)
      };
      this.cwServ.addWrkspc(wrkspcD)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success(data.message || 'Workspace added successfully', 'Success!');
            this.getWrkspcList();
          } else {
            this.toastr.error('Unable to add Workspace', 'Error!');
          }
          this.wrkspcSetDef();
        }, (err: any) => {
          this.wrkspcSetDef();
        });
    }
  }

  wrkspcSetDef(type: 'addWrkspcForm' | 'updWrkspcForm' = 'addWrkspcForm') {
    this.dismissModal();
    this.disabled = false;
    this[type].reset();
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
  getWrkspcList(mdl?: boolean) {
    let query = {
      hubid: this.hubid,
      isActive: true
    }
    if (mdl) {
      this.mdlItems = [];
      this.mdlLoading = true;
    } else {
      this.wrkspcLoading = true;
      this.wrkspcs = [];
      query.isActive = this.activeWrkspc == 1 ? true : false
    }
    this.cwServ.wrkspcList(query)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          mdl ? this.mdlItems = data.result.results : this.wrkspcs = data.result.results;
        }
        mdl ? this.mdlLoading = false : this.wrkspcLoading = false;
      }, (err: any) => {
        mdl ? this.mdlLoading = false : this.wrkspcLoading = false;
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
    if (event.previousContainer.id == "cntntLists") {
      if (event.previousContainer.id == "cntntLists" && event.container.id == "fldrLists") {
        if (this.dispFolder && this.dispFolder.id && this.dispFolder.entityType == 2) {
          this.toastr.info("Content can't be add to smart folder.")
        } else {
          this.addCntntToWrkspc(event);
        }
      }
    } else {
      if (event.previousContainer === event.container) {
        if (event.container.id == "fldrLists") {
          if (event.previousContainer.data[event.previousIndex] != event.container.data[event.currentIndex])
            this.rearrDataInWrkspc(event);
        } else {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
      } else {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }

  addCntntToWrkspc(event: any) {
    let d: any = {
      contentId: event.previousContainer.data[event.previousIndex].id,
      workspaceId: this.selWrkspc!.id,
      sequenceNumber: event.currentIndex + 1,
      folderId: this.dispFolder ? this.dispFolder!.entityId : null
    }
    this.cwServ.addCntntToWrkspcFldr(d).subscribe((data: any) => {
      if (data && Array.isArray(data.result)) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        this.wrkspcItems = data.result;
        // this.wrkspcItems[event.currentIndex] = data.result;
        this.toastr.success('Added successfully', 'Success!');
      } else {
        this.toastr.error('Unable to add', 'Error!');
      }
    }, (err: any) => {
    });
  }

  rearrDataInWrkspc(event: any) {
    let d: any = {
      workspaceId: this.selWrkspc!.id,
      parentId: this.dispFolder ? this.dispFolder!.id : null,
      workspaceObjects: [
        {
          id: event.previousContainer.data[event.previousIndex].id,
          sequenceNumber: event.currentIndex + 1
        }
      ]
    };
    this.cwServ.rearrWrkspcData(d).subscribe((data: any) => {
      if (data) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        this.toastr.success('Rearrange successfully', 'Success!');
      } else {
        this.toastr.error('Unable to rearrange', 'Error!');
      }
    }, (err: any) => {
    });
  }

  canDrag(): boolean {
    if (this.activeIndex == 0 && this.selWrkspc && this.selWrkspc.id) {
      if (this.dispFolder && this.dispFolder.id && this.dispFolder.entityType == 2) {
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
    this.closeDoc();
    this.selWrkspc = undefined;
    this.showWork = !this.showWork;
  }

  // content toggle
  toggleInfo = (row: any) => {
    if (this.activeIndex != 1) {
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
  }

  closeDoc = (isAll: boolean = false) => {
    this.showRowInfo = false;
    if (isAll) {
      this.showWork = false;
      this.selWrkspc = undefined;
    }
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

  // get content by smart folder -> now no need as manage iu get all data by workspace
  // getContentSmtFldr() {
  //   this.folderLoading = true;
  //   let query: any = {
  //     smartFolderId: this.dispFolder ? this.dispFolder!.entityId : undefined
  //   };
  //   this.cwServ.contentBySmartFolder(query).subscribe((data: any) => {
  //     if (data && data.result && Array.isArray(data.result) && data.result.length > 0) {
  //       this.wrkspcItems.push(...data.result);
  //     }
  //     this.folderLoading = false;
  //   }, (err: any) => {
  //     this.folderLoading = false;
  //   });
  // }

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

  openModal(content: any, modalType: string = '') {
    this.files = []
    if (modalType == 'uplFile' || modalType == 'addUrl') {
      this.getTags();
    }
    this.verForm.reset(); this.urlForm.reset(); this.cntntForm.reset();
    // this.cntntDisb = false;
    this.procUplDef();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
      .then((result) => {
      }, (reason) => {
        this.addWrkspcForm.reset();
        this.updWrkspcForm.reset();
        this.folderForm.reset();
        this.smartFldrForm.reset();
        this.iconUrl = undefined;
        this.addURLIcon = '';
      });
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
    this.unsubSubs();
    this.searchTxt = "";
    this.initialiseState();
    this.loadCntnts();
  }

  loadCntnts() {
    if (this.activeIndex == 1)
      this.processingCntnt(false);
    else
      this.cntntList();
  }

  sortChange(col: any, index: number) {
    if (this.activeIndex != 1 && col.hasOwnProperty("asc")) {
      this.cntntLoading = true;
      this.pageNo = 1;
      let colData = { ...col };
      for (let k = 0; k < this.cols.length; k++) {
        this.cols[k].asc = false;
      }
      colData.asc = !colData.asc;
      this.cols[index].asc = colData.asc;
      this.sort = {
        sortColumn: col.k,
        isAscending: colData.asc,
      }
      this.cntntList();
    }
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
      fltrL: this.filteredList,
      contentStatus: this.activeIndex == 2 ? 2 : 1
    };
    this.cntnts = [];
    this.totalCount = 0
    this.cwServ.contentList(params)
      .subscribe((data: any) => {
        if (data && data.result && Array.isArray(data.result.results) && data.result.results.length > 0) {
          this.cntnts = data.result.results;
          this.totalCount = data.result.totalCount;
        }
        this.cntntLoading = false;
      }, (err: any) => {
        this.cntntLoading = false;
      });
  }

  // list of tags
  getTags() {
    this.tags = []; this.selTags = []; this.custIcon = '';
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
    this.lngs = []; this.selLngs = [];
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
  changePageNo(no: number) {
    this.pageNo = no;
    this.cntntList();
  }

  displayFn = (tag: any) => {
    return (tag && tag.id) ? tag.name : '';
  }

  selFromAutoComp(data: any, type: 'selTags' | 'selTags2' | 'selLngs' | 'selUsrGrps'
    | 'allTags' | 'anyTags' | 'noneTags' | 'allTags1' | 'anyTags1' | 'noneTags1', autoSel: any) {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      this.toastr.clear();
      this.toastr.info(`This ${type == 'selLngs' ? 'language' : type == 'selUsrGrps' ? 'one' : 'tag'} is already selected`, "Selected");
    } else {
      if (type === 'selUsrGrps')
        this[type].push({ ...data });
      else if (type === 'selLngs')
        this[type].push({ ...data, lid: data.id });
      else if (type == 'allTags1' || type == 'anyTags1' || type == 'noneTags1') {
        let necData = { name: data.name, id: data.id };
        this[type].push({ ...necData });
        let n = (type == 'allTags1' ? 'All' : type == 'anyTags1' ? 'Any' : 'None') + ": " + necData.name;
        this.filteredList.push({ ...necData, type, n });
        this.cntntList();
      }
      else
        this[type].push({ ...data, tid: data.id });
      autoSel.value = '';
    }
  }

  remove(data: any, type: 'selTags' | 'selTags2' | 'selLngs' | 'selUsrGrps' |
    'allTags' | 'anyTags' | 'noneTags' | 'allTags1' | 'anyTags1' | 'noneTags1'): void {
    const index = this[type].findIndex((ele: any) => ele.id == data.id);
    if (index >= 0) {
      if (type == 'allTags1' || type == 'anyTags1' || type == 'noneTags1') {
        const index2 = this.filteredList.findIndex((ele: any) => ele.id == data.id);
        if (index2 >= 0) {
          this.filteredList.splice(index2, 1);
        }
        this.cntntList();
      }
      this[type].splice(index, 1);
    }
  }

  async onCntntSubmit() {
    if (this.files.length > 0) {
      this.cntntDisb = true;
      let cntntData: any = {
        // content: this.files[0],
        hubId: parseInt(this.hubid),
        isUrl: false
      }
      if (this.selTags && this.selTags.length > 0) {
        cntntData.ContentTagsString = this.selTags.map((tag: any) => ({ tagId: tag.id }));
        cntntData.ContentTagsString = JSON.stringify(cntntData.ContentTagsString)
      }
      // this.files = this.files.map((f: any) => ({ ...f, load: true }));
      this.procUpld = true;
      // setTimeout(()=>{
      for (let i = 0; i < this.files.length; i++) {
        cntntData.content = this.files[i];
        const data: any = await this.cwServ.addContentProms(cntntData);
        if (data && data.result && data.result.id) {
          this.files[i].id = data.result.id;
          this.files[i].t = 1;
        } else {
          this.files[i].t = 2;
        }
      }
      this.cntntDisb = false;
      // },9000)
      // this.cwServ.addContent(cntntData)
      //   .subscribe((data: any) => {
      //     console.log(data, 'data')
      //     if (data && data.result && data.result.id) {
      //       this.procUpldData.push({id:data.result.id,name: cntntData})
      //       this.toastr.success('Content added successfully', 'Success!');
      //       // this.files = []; this.pageNo = 1;
      //       // this.cntntList();
      //       // this.dismissModal();
      //     } else {
      //       this.toastr.error('Unable to add content', 'Error!');
      //     }
      //     // this.cntntDisb = false;
      //   }, (err: any) => {
      //     // this.cntntDisb = false;
      //   });
    }
  }

  changeProcStatus(isStart: boolean) {
    if (this.files.length > 0) {
      this.procUpldLoad = true;
      let contentIds = [];
      for (let k = 0; k < this.files.length; k++) {
        if (this.files[k].id)
          contentIds.push(this.files[k].id);
      }
      let d: any = {
        hubId: parseInt(this.hubid),
        contentIds
      }
      this.cwServ.procCntntStatus(d, isStart)
        .subscribe((data: any) => {
          this.setFilesDef();
          if(isStart){
            this.pageNo = 1;this.setDefSort();this.cntntList();
          }
        }, (err: any) => {
          this.setFilesDef();
        });
    } else {
      this.setFilesDef();
    }
  }

  setFilesDef() {
    this.procUpldLoad = false;
    this.files = [];
    this.cntntDisb = false;
    this.dismissModal();
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
            this.files = []; this.pageNo = 1;this.setDefSort();
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

  getImg(d: any): string {
    return FileHelper.getImg(d);
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

  updCntntStatus(isDel: boolean = false) {
    let mdlMsg, mdlTtl, stsData: any = { id: this.rowInfo.id }, res: string;
    if (isDel) {
      mdlMsg = `permanently delete ${this.rowInfo.name}`;
      mdlTtl = `Permanently delete`;
      res = `Content permanently deleted`;
      stsData.status = 3;
    } else {
      if (this.activeIndex == 0) {
        mdlMsg = `move ${this.rowInfo.name} to the trash`;
        mdlTtl = `Move to trash`;
        res = `Content move to tash`;
        stsData.status = 2;
      } else if (this.activeIndex == 2) {
        mdlMsg = `restore ${this.rowInfo.name} from trash`;
        mdlTtl = `Restore from Tash`;
        res = `Content restore from trash`;
        stsData.status = 1;
      }
    }
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${mdlMsg}?`,
        title: mdlTtl
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.updCntntStatusOrDel(stsData).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`${res} successfully.`, 'Success!');
            this.cntntList();
          } else {
            this.toastr.error(`Please try after some time`, 'Error!');
          }
        }, (err: any) => {

        });
      }
    })
  }

  downloadFile() {
    this.fileServ.downloadFile(this.rowInfo!.contentPath, this.rowInfo!.name);
  }

  setFltrEmpty() {
    this.filteredList = [];
    this.allTags1 = []; this.anyTags1 = []; this.noneTags1 = [];
    this.cntntTypeFltr = this.cntntTypeFltr.map((f: any) => ({ ...f, chk: false }));
  }

  clearAllFilter() {
    this.setFltrEmpty();
    this.cntntList();
  }

  clearSingleFlter = (fltr: any, i: number) => {
    this.filteredList.splice(i, 1);
    if (fltr.type === 'fT') {
      const index = this.cntntTypeFltr.findIndex((flt: any) => flt.v == fltr.v);
      if (index >= 0) {
        this.cntntTypeFltr[index].chk = false;
      }
    }
    else if (fltr.type == 'allTags1' || fltr.type == 'anyTags1' || fltr.type == 'noneTags1') {
      let t: 'allTags1' | 'anyTags1' | 'noneTags1' = fltr.type;
      const index = this[t].findIndex((flt: any) => flt.id == fltr.id);
      if (index >= 0) {
        this[t].splice(index, 1);
      }
    }
    this.cntntList();
  }

  newVersion() {
    //this.verForm.valid
    if (this.files.length > 0) {
      this.verDisb = true;
      let cntntData: any = {
        ...this.verForm.value,
        id: this.rowInfo.id,
        content: this.files[0]
      }
      this.cwServ.newVersion(cntntData)
        .subscribe((data: any) => {
          if (data) {
            this.toastr.success('New version added successfully', 'Success!');
            this.files = []; this.pageNo = 1;
            this.cntntList();
            this.dismissModal();
          } else {
            this.toastr.error('Unable to add new version', 'Error!');
          }
          this.verDisb = false;
        }, (err: any) => {
          this.verDisb = false;
        });
    }
  }

  processingCntnt(isCount: boolean) {
    this.cwServ.processCntnt(this.hubid, isCount)
      .subscribe((data: any) => {
        this.isProcCount(isCount, data);
      }, (err: any) => {
        this.isProcCount(isCount, {})
        this.procCnt = 0;
      });
  }

  isProcCount(isCount: boolean, data: any) {
    if (isCount) {
      this.procCnt = data && data.result && data.result.count ? data.result.count : 0
    } else {
      if (data && Array.isArray(data.result)) {
        this.cntnts = data.result;
      } else {
        this.cntnts = [];
      }
      this.cntntLoading = false;
    }
  }

  //delete content or folder from workspace, for now its activate/deactivate
  delDataFromWrkspc(d:any){
    let actDeac: string = `${d.isActive ? 'deactivate' : 'activate'}`;
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to ${actDeac} this content?`,
        title: `${d.isActive ? 'Deactivate' : 'Activate'} content`
      },
      autoFocus: false
    }).afterClosed().subscribe(result => {
      if (result) {
        this.cwServ.actDeactCntntInWrkspc(d.contentWorkspaceFolderId, d.isActive ? false : true).subscribe((data: any) => {
          if (data) {
            this.toastr.success(`Content ${actDeac}d successfully`, 'Success!');
            this.listFolders();
          } else {
            this.toastr.error(`Unable to ${actDeac} content`, 'Error!');
          }
        }, (err: any) => {
        });
      }
    })
  }

  dismissModal() {
    this.addURLIcon = '';
    this.iconUrl = undefined;
    this.custIcon = undefined;
    if (this.modalService)
      this.modalService.dismissAll();
  }

  // on file drop handler
  onFileDropped($event: any, isIcon: boolean = false, type: string = '') {
    if (!isIcon) {
      this.newVersDef(type);
      this.prepareFilesList($event);
    }
    else {
      this.renderImg($event[0], type);
    }
  }

  // handle file from browsing
  fileBrowseHandler($event: any, isIcon: boolean = false, type: string = '') {
    if ($event.target && $event.target.files && !isIcon) {
      this.newVersDef(type);
      this.prepareFilesList($event.target.files);
    }
    let input = $event.target;
    if (input.files && input.files && isIcon) {
      this.renderImg(input.files[0], type);
    }
  }

  newVersDef(type: string) {
    if (type === 'newVer')
      this.files = [];
  }

  renderImg(file: any, type: string) {
    if (file) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.addURLIcon = 'cust-icon';
        this.iconUrl = event.target.result;
      };
      this.custIcon = file;
      this.hasIcon = true;
      if (type === 'urlForm')
        this.urlForm.controls['img'].setValue(this.custIcon);
      reader.readAsDataURL(file);
    }
  }

  /** * Delete file from files list  */
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
          if (this.files && this.files[index]) {
            if (this.files[index].progress === 100) {
              clearInterval(progressInterval);
              this.uploadFilesSimulator(index + 1);
            } else {
              this.files[index].progress += 50;
            }
          } else {
            clearInterval(progressInterval);
          }
        }, 100);
      }
    }, 300);
  }

  /** * Convert Files list to normal array list */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      if (this.fileExt.filter(ext => item.name.includes(ext)).length <= 0) {
        this.toastr.error("Not valid file, please try with other file", "File Type Error");
        return;
      }
      if (FileHelper.bytestoOther(item.size, 'gb') < 1) {
        item.progress = 0; item.t = 0;
        this.files.push(item);
      } else {
        this.toastr.error("Size should be less than 1 GB", "File Size Error");
        return;
      }
    }
    this.uploadFilesSimulator(0);
  }

  getSize(bytes: any) {
    return FileHelper.formatBytes(bytes, 2);
  }

  unsubSubs() {
    if (!!this.subscription)
      this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (this.getIntervalId)
      clearInterval(this.getIntervalId);
    this.dismissModal();
    this.unsubSubs();
  }
}
