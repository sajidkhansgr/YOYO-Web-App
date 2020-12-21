import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ContentWorkspaceService {

  constructor(
    private http: HttpClient
  ) { }

  // for images in form (folder and smart folder)
  freezeFolderObj(data: any) {
    const formData: FormData = new FormData();
    for (let key in data) {
      if (data[key] || key === 'IsUrl' || key === 'hasIcon') {
        if (key === 'folderIcon' || key === 'content' || key === 'urlIcon' && data[key] && data[key].name) {
          formData.append(key, data[key], data[key].name);
        } else {
          formData.append(key, data[key]);
        }
      }
    }
    return formData;
  }

  // get all data from workspace
  getAllDataWrkspc(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.GET_DATA_WRKSPC}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // ---- smart folder ---- //
  // activate/deactivate smart folder
  actDeactSmtFldr(id: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_SMT_FLDR : AppSettings.DEACT_SMT_FLDR;
    return this.http.patch(`${url}?id=${id}`, {});
  }

  // update smart folder
  updSmartFolder(data: any) {
    return this.http.put(`${AppSettings.UPD_SMT_FLDR}`, this.freezeFolderObj(data));
  }

  // add/duplicate smart folder
  addDuplSmartFolder(data: any, edit?: boolean) {
    let url = edit === undefined ? AppSettings.DUPL_SMT_FLDR : AppSettings.ADD_SMT_FLDR;
    return this.http.post(`${url}`, this.freezeFolderObj(data));
  }


  // get smart folder by id
  getSmtFolder(id: any) {
    return this.http.get(`${AppSettings.GET_SMT_FLDR}?id=${id}`);
  }

  // ---- folder ---- //
  // activate/deactivate folder
  actDeactFldr(id: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_FLDR : AppSettings.DEACT_FLDR;
    return this.http.patch(`${url}?id=${id}`, {});
  }

  // update folder
  updFolder(data: any) {
    return this.http.put(`${AppSettings.UPD_FLDR}`, this.freezeFolderObj(data));
  }

  // add/duplicate folder
  addDuplFolder(data: any, edit?: boolean) {
    let url = edit === undefined ? AppSettings.DUPL_FLDR : AppSettings.ADD_FLDR;
    return this.http.post(`${url}`, this.freezeFolderObj(data));
  }

  // get folder by id
  getFolder(id: any) {
    return this.http.get(`${AppSettings.GET_FLDR}?id=${id}`);
  }

  // ---- workspace ---- //
  // activate/deactivate folder
  actDeactWrkspc(id: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_WRKSPC : AppSettings.DEACT_WRKSPC;
    return this.http.patch(`${url}?id=${id}`, {});
  }

  // get workspace list
  wrkspcList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key] || key == 'isActive') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_WRKSPC}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // add workspace
  addWrkspc(data: any) {
    return this.http.post(`${AppSettings.ADD_WRKSPC}`, data)
  }

  // update workspace
  updWrkspc(data: any) {
    return this.http.put(`${AppSettings.UPD_WRKSPC}`, data)
  }

  // ---- content ---- //
  // get content by folder
  contentByFolder(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.GET_CNTNT_FLDR}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // get content by smart folder
  contentBySmartFolder(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.GET_CNTNT_SMT_FLDR}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // get all content list
  contentList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (key === 'fltrL') {
        if (params[key] && params[key].length > 0) {
          for (let k = 0; k < params[key].length; k++) {
            if (params[key][k].type === 'fT')
              queryParams = queryParams.append('fileTypes', params[key][k].v);
            else if (params[key][k].type === 'allTags1')
              queryParams = queryParams.append('tags.MatchAllTagIds', params[key][k].id);
            else if (params[key][k].type === 'anyTags1')
              queryParams = queryParams.append('tags.MatchAnyTagIds', params[key][k].id);
            else if (params[key][k].type === 'noneTags1')
              queryParams = queryParams.append('tags.MatchNoneTagIds', params[key][k].id);
          }
        }
      } else if (params[key] || key == 'IsAscending') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_CNTNT}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }

  // add content
  addContent(data: any) {
    return this.http.post(`${AppSettings.ADD_CNTNT}`, this.freezeFolderObj(data))
  }

  // add content
  addContentProms(data: any) {
    return this.http.post(`${AppSettings.ADD_CNTNT}`, this.freezeFolderObj(data)).toPromise()
  }

  // update content
  updContent(data: any) {
    return this.http.post(`${AppSettings.UPD_CNTNT}`, data)
  }

  // view content
  viewContent(id: string) {
    return this.http.get(`${AppSettings.GET_CNTNT}`, {
      params: { id }
    });
  }

  // add comment to content
  addCmntToContent(data: any) {
    return this.http.post(`${AppSettings.ADD_CMNT_CNTNT}`, data)
  }

  // add content to wowrkspace/folder
  addCntntToWrkspcFldr(data: any) {
    return this.http.post(`${AppSettings.ADD_CNTNT_WRKSPC}`, data)
  }

  // delete content or upd status
  updCntntStatusOrDel(data: any) {
    if (data.status == 3)
      return this.http.post(`${AppSettings.DEL_CNTNT}`, data);//?id=${data.id}
    else
      return this.http.post(`${AppSettings.UPD_CNTNT_STATUS}`, data); //?id=${data.id}&status=${data.status}
  }

  // get all users and groupd in workspace
  usrGrpWrkspcList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_USR_GRP_WRKSPC}`, {
      params: queryParams
    }).pipe(map((res: any) => res));
  }
  //  add usr/grp to workspace
  addUsrGrpWrkspc(data: any) {
    return this.http.post(`${AppSettings.ADD_USR_GRP_WRKSPC}`, data);
  }
  //  remove usr/grp to workspace
  remUsrGrpWrkspc(data: any) {
    return this.http.post(`${AppSettings.REM_USR_GRP_WRKSPC}`, data);
  }

  deactCtntOrFldr(data: any) {
    if (data.isFldr)
      return this.actDeactFldr(data.id, false);
    else
      return this.updCntntStatusOrDel(data);
  }

  newVersion(data: any) {
    return this.http.post(`${AppSettings.UPL_VER_CNTNT}`, this.freezeFolderObj(data));
  }

  processCntnt(hubId: string, isCount: boolean) {
    let url: string = isCount ? AppSettings.PROC_CNTNT_CNT : AppSettings.PROC_CNTNT;
    return this.http.get(`${url}?hubId=${hubId}`);
  }

  rearrWrkspcData(data: any) {
    return this.http.post(`${AppSettings.REARR_WRKSPC_ITEMS}`, data)
  }

  procCntntStatus(data: any, isStart: boolean) {
    let url: string = isStart ? AppSettings.START_PROC_CNTNT : AppSettings.CANCEL_PROC_CNTNT;
    return this.http.post(`${url}`, data);
  }

  // activate/deactivate content
  actDeactCntntInWrkspc(id: any, isAct: boolean) {
    let url = isAct ? AppSettings.ACT_CNT_WRKSPC_FLDR : AppSettings.DEACT_CNT_WRKSPC_FLDR;
    return this.http.post(`${url}?id=${id}`, {});
  }


}
