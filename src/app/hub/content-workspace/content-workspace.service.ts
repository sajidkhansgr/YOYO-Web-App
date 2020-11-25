import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../shared/services/app-settings';

@Injectable()
export class ContentWorkspaceService {

  constructor(
    private http: HttpClient
  ) { }

  // for images in form (folder and smart folder)
  freezeFolderObj(data: any) {
    console.log("sdf")
    const formData: FormData = new FormData();
    for (let key in data) {
      if (data[key] || key === 'IsUrl') {
        if (key === 'folderIcon' || key === 'Content' || key === 'UrlIcon' && data[key] && data[key].name) {
          formData.append(key, data[key], data[key].name);
        } else {
          formData.append(key, data[key]);
        }
      }
    }
    return formData;
  }

  // ---- smart folder ---- //
  // activate workspace
  smartFolderAct(id: any) {
    return this.http.patch(`${AppSettings.ACT_SMT_FLDR}?id=${id}`, {});
  }

  // deactivate workspace
  smartFolderDeact(id: any) {
    return this.http.patch(`${AppSettings.DEACT_SMT_FLDR}?id=${id}`, {});
  }

  // update folder
  updSmartFolder(data: any) {
    return this.http.put(`${AppSettings.UPD_SMT_FLDR}`, this.freezeFolderObj(data));
  }

  // add folder
  addSmartFolder(data: any) {
    return this.http.post(`${AppSettings.ADD_SMT_FLDR}`, this.freezeFolderObj(data));
  }

  // get smart folder list
  smartFolderListWrkspc(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_SMT_FLDR_WRKSPC}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // ---- folder ---- //
  // activate workspace
  folderAct(id: any) {
    return this.http.patch(`${AppSettings.ACT_FLDR}?id=${id}`, {});
  }

  // deactivate workspace
  folderDeact(id: any) {
    return this.http.patch(`${AppSettings.DEACT_FLDR}?id=${id}`, {});
  }

  // update folder
  updFolder(data: any) {
    return this.http.put(`${AppSettings.UPD_FLDR}`, this.freezeFolderObj(data));
  }

  // add folder
  addFolder(data: any) {
    return this.http.post(`${AppSettings.ADD_FLDR}`, this.freezeFolderObj(data));
  }

  // get folder list
  folderListWrkspc(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_FLDR_WRKSPC}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // ---- workspace ---- //
  // activate workspace
  wrkspcAct(id: any) {
    return this.http.patch(`${AppSettings.ACT_WRKSPC}?id=${id}`, {});
  }

  // deactivate workspace
  wrkspcDeact(id: any) {
    return this.http.patch(`${AppSettings.DEACT_WRKSPC}?id=${id}`, {});
  }

  // get workspace list
  wrkspcList(params: any): Observable<any[]> {
    let queryParams = new HttpParams();
    for (let key in params) {
      if (params[key]) {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_WRKSPC}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
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
      if (params[key] || key == 'IsAscending') {
        queryParams = queryParams.set(key, params[key]);
      }
    }
    return this.http.get(`${AppSettings.LIST_CNTNT}`, {
      params: queryParams
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }

  // add content
  addContent(data: any) {
    return this.http.post(`${AppSettings.ADD_CNTNT}`, this.freezeFolderObj(data))
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

  // delete content
  trashCntnt(id: any) {
    return this.http.post(`${AppSettings.TRASH_CNTNT}?id=${id}`, {});
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
    }
    ).pipe(
      map((res: any) =>
        res
      )
    );
  }
  //  add usr/grp to workspace
  addUsrGrpWrkspc(data: any) {
    return this.http.post(`${AppSettings.ADD_USR_GRP_WRKSPC}`, data);
  }
  //  remove usr/grp to workspace
  remUsrGrpWrkspc(data: any) {
    return this.http.post(`${AppSettings.REM_USR_GRP_WRKSPC}`, data);
  }










}
