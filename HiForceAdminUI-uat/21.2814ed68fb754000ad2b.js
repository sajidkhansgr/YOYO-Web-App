(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{CFzk:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("tk/3"),c=e("lJxs"),o=e("aZQB"),s=e("fXoL");let r=(()=>{class t{constructor(t){this.http=t}addContentColctn(t){return this.http.post(""+o.a.ADD_CONTENT_COLCT,t)}delContentColctn(t){return this.http.post(""+o.a.REM_CONTENT_COLCT,t)}getContentColctn(t){return this.http.get(`${o.a.GET_CONTENT_COLCT}?id=${t}`)}colctnList(t){let n=new i.e;for(let e in t)(t[e]||"pageNo"==e||"isActive"==e)&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_COLCT,{params:n}).pipe(Object(c.a)(t=>t))}actDeactColctn(t,n){return this.http.post(""+(n?o.a.ACT_COLCT:o.a.DEACT_COLCT),t)}getColctn(t){return this.http.get(`${o.a.GET_COLCT}?id=${t}`)}rearrCntntColl(t){return this.http.post(""+o.a.REARR_CNTNT_COLCT,t)}}return t.\u0275fac=function(n){return new(n||t)(s.bc(i.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OraM:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("tk/3"),c=e("lJxs"),o=e("aZQB"),s=e("fXoL");let r=(()=>{class t{constructor(t){this.http=t}freezeFolderObj(t){const n=new FormData;for(let e in t)(t[e]||"IsUrl"===e||"hasIcon"===e)&&("folderIcon"===e||"content"===e||"urlIcon"===e&&t[e]&&t[e].name?n.append(e,t[e],t[e].name):n.append(e,t[e]));return n}getAllDataWrkspc(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.GET_DATA_WRKSPC,{params:n}).pipe(Object(c.a)(t=>t))}actDeactSmtFldr(t,n){return this.http.patch(`${n?o.a.ACT_SMT_FLDR:o.a.DEACT_SMT_FLDR}?id=${t}`,{})}updSmartFolder(t){return this.http.put(""+o.a.UPD_SMT_FLDR,this.freezeFolderObj(t))}addDuplSmartFolder(t,n){return this.http.post(""+(void 0===n?o.a.DUPL_SMT_FLDR:o.a.ADD_SMT_FLDR),this.freezeFolderObj(t))}getSmtFolder(t){return this.http.get(`${o.a.GET_SMT_FLDR}?id=${t}`)}actDeactFldr(t,n){return this.http.patch(`${n?o.a.ACT_FLDR:o.a.DEACT_FLDR}?id=${t}`,{})}updFolder(t){return this.http.put(""+o.a.UPD_FLDR,this.freezeFolderObj(t))}addDuplFolder(t,n){return this.http.post(""+(void 0===n?o.a.DUPL_FLDR:o.a.ADD_FLDR),this.freezeFolderObj(t))}getFolder(t){return this.http.get(`${o.a.GET_FLDR}?id=${t}`)}actDeactWrkspc(t,n){return this.http.patch(`${n?o.a.ACT_WRKSPC:o.a.DEACT_WRKSPC}?id=${t}`,{})}wrkspcList(t){let n=new i.e;for(let e in t)(t[e]||"isActive"==e)&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_WRKSPC,{params:n}).pipe(Object(c.a)(t=>t))}addWrkspc(t){return this.http.post(""+o.a.ADD_WRKSPC,t)}updWrkspc(t){return this.http.put(""+o.a.UPD_WRKSPC,t)}contentByFolder(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.GET_CNTNT_FLDR,{params:n}).pipe(Object(c.a)(t=>t))}contentBySmartFolder(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.GET_CNTNT_SMT_FLDR,{params:n}).pipe(Object(c.a)(t=>t))}contentList(t){let n=new i.e;for(let e in t)if("fltrL"===e){if(t[e]&&t[e].length>0)for(let i=0;i<t[e].length;i++)"fT"===t[e][i].type?n=n.append("fileTypes",t[e][i].v):"allTags1"===t[e][i].type?n=n.append("tags.MatchAllTagIds",t[e][i].id):"anyTags1"===t[e][i].type?n=n.append("tags.MatchAnyTagIds",t[e][i].id):"noneTags1"===t[e][i].type&&(n=n.append("tags.MatchNoneTagIds",t[e][i].id))}else(t[e]||"IsAscending"==e)&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_CNTNT,{params:n}).pipe(Object(c.a)(t=>t))}addContent(t){return this.http.post(""+o.a.ADD_CNTNT,this.freezeFolderObj(t))}addContentProms(t){return this.http.post(""+o.a.ADD_CNTNT,this.freezeFolderObj(t)).toPromise()}updContent(t){return this.http.post(""+o.a.UPD_CNTNT,t)}viewContent(t){return this.http.get(""+o.a.GET_CNTNT,{params:{id:t}})}addCmntToContent(t){return this.http.post(""+o.a.ADD_CMNT_CNTNT,t)}addCntntToWrkspcFldr(t){return this.http.post(""+o.a.ADD_CNTNT_WRKSPC,t)}updCntntStatusOrDel(t){return this.http.post(3==t.status?""+o.a.DEL_CNTNT:""+o.a.UPD_CNTNT_STATUS,t)}usrGrpWrkspcList(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_USR_GRP_WRKSPC,{params:n}).pipe(Object(c.a)(t=>t))}addUsrGrpWrkspc(t){return this.http.post(""+o.a.ADD_USR_GRP_WRKSPC,t)}remUsrGrpWrkspc(t){return this.http.post(""+o.a.REM_USR_GRP_WRKSPC,t)}deactCtntOrFldr(t){return t.isFldr?this.actDeactFldr(t.id,!1):this.updCntntStatusOrDel(t)}newVersion(t){return this.http.post(""+o.a.UPL_VER_CNTNT,this.freezeFolderObj(t))}processCntnt(t,n){return this.http.get(`${n?o.a.PROC_CNTNT_CNT:o.a.PROC_CNTNT}?hubId=${t}`)}rearrWrkspcData(t){return this.http.post(""+o.a.REARR_WRKSPC_ITEMS,t)}procCntntStatus(t,n){return this.http.post(""+(n?o.a.START_PROC_CNTNT:o.a.CANCEL_PROC_CNTNT),t)}actDeactCntntInWrkspc(t,n){return this.http.post(`${n?o.a.ACT_CNT_WRKSPC_FLDR:o.a.DEACT_CNT_WRKSPC_FLDR}?id=${t}`,{})}}return t.\u0275fac=function(n){return new(n||t)(s.bc(i.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},c2Mc:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("s0Cq");class c{static formatBytes(t,n){if(0===t)return"0 Bytes";const e=n<=0?0:n||2,i=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,i)).toFixed(e))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}static getImg(t,n=""){if(t){if(t.folderIconPath)return t.folderIconPath;if(t.imagePath)return t.imagePath;if(t.pdfImagePath)return t.pdfImagePath;if(t.urlIconPath)return t.urlIconPath;if(2===t.contentType&&t.contentPath)return t.contentPath;if(t.pdfImage)return t.pdfImage;if(Array.isArray(t.pdfImages)&&t.pdfImages.length>0&&t.pdfImages[0].imagePath)return t.pdfImages[0].imagePath}return"icon"==n?i.b:"fldr"==n?i.f:i.c}static bytestoOther(t,n){let e=0;switch(n){case"kb":e=1;break;case"mb":e=2;break;case"gb":e=3}return parseFloat((t/Math.pow(1024,e)).toFixed(2))}}},s0Cq:function(t,n,e){"use strict";e.d(n,"h",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"k",(function(){return r})),e.d(n,"g",(function(){return a})),e.d(n,"j",(function(){return l})),e.d(n,"a",(function(){return b})),e.d(n,"i",(function(){return d})),e.d(n,"e",(function(){return g})),e.d(n,"f",(function(){return s})),e.d(n,"d",(function(){return h}));const i=[10,20,30],c="assets/images/def-img.png",o="assets/images/def-icon.png",s="assets/images/folderIcon.png",r=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],a=[{v:1,n:"All Users"},{v:2,n:"Selected Workspaces"},{v:3,n:"Selected User Groups"}];var l=function(t){return t[t.Admin=2]="Admin",t[t.User=3]="User",t}({}),d=function(t){return t[t.English=1]="English",t[t.German=2]="German",t[t.French=3]="French",t[t.Spanish=4]="Spanish",t[t.Dutch=5]="Dutch",t[t.Italian=6]="Italian",t[t.Japanese=7]="Japanese",t[t["Chinese(China)"]=8]="Chinese(China)",t}({}),b=function(t){return t[t.Sent=1]="Sent",t[t.Scheduled=2]="Scheduled",t[t.Archived=3]="Archived",t}({}),g=function(t){return t[t.Document=1]="Document",t[t.Photo=2]="Photo",t[t.URL=3]="URL",t[t.Video=4]="Video",t}({});const h=[".jpeg",".png",".jpg",".mp4",".xls",".xlsx",".ppt",".pptx",".doc",".docx",".pdf"]},sNI4:function(t,n,e){"use strict";e.r(n),e.d(n,"ViewModule",(function(){return dt}));var i=e("ofXK"),c=e("tyNb"),o=e("3Pt+"),s=e("bSwM"),r=e("wZkO"),a=e("kmnG"),l=e("qFsG"),d=e("1kSV"),b=e("c2Mc"),g=e("fXoL"),h=e("5eHb"),p=e("OraM"),u=e("dtd+"),f=e("CrrK"),m=e("CFzk"),T=e("p0iN"),S=e("668k");function C(t,n){1&t&&g.Ob(0,"app-loader",3),2&t&&g.pc("type","page")}function v(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",34),g.ec("click",(function(){g.Bc(t);const n=g.ic(4);return n.leftSide=!n.leftSide})),g.Ob(1,"i",35),g.Sb()}if(2&t){const t=g.ic(4);g.qc("ngbTooltip",t.leftSide?"Hide Pages":"Show Pages")}}function w(t,n){if(1&t){const t=g.Ub();g.Tb(0,"button",36),g.ec("click",(function(){return g.Bc(t),g.ic(4).downloadFile()})),g.Ob(1,"i",37),g.Mc(2,"Download"),g.Sb()}}function M(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",20),g.Tb(1,"button",38),g.Ob(2,"i",39),g.Sb(),g.Tb(3,"div",40),g.Tb(4,"button",36),g.ec("click",(function(){g.Bc(t);const n=g.ic(4),e=g.xc(3);return n.openModal(e,"full")})),g.Mc(5,"Entire Document Document"),g.Sb(),g.Tb(6,"button",36),g.ec("click",(function(){g.Bc(t);const n=g.ic(4);return n.leftSide=!0,n.isSelPage=!0})),g.Mc(7,"Select Pages"),g.Sb(),g.Sb(),g.Sb()}}function P(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",41),g.ec("click",(function(){return g.Bc(t),g.ic(4).openFullscreen()})),g.Ob(1,"i",42),g.Sb()}}function _(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",43),g.ec("click",(function(){return g.Bc(t),g.ic(4).closeFullscreen()})),g.Ob(1,"i",44),g.Sb()}}const O=function(t){return{pdfView:t}};function x(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",16),g.Tb(1,"div",17),g.Mc(2),g.Sb(),g.Tb(3,"div",18),g.Kc(4,v,2,1,"div",19),g.Tb(5,"div",20),g.Tb(6,"button",21),g.Ob(7,"i",22),g.Sb(),g.Tb(8,"div",23),g.Kc(9,w,3,0,"button",24),g.Tb(10,"button",25),g.Ob(11,"i",26),g.Mc(12,"Like"),g.Sb(),g.Sb(),g.Sb(),g.Kc(13,M,8,0,"div",27),g.Sb(),g.Tb(14,"div",28),g.Kc(15,P,2,0,"div",29),g.Kc(16,_,2,0,"div",30),g.Tb(17,"div",31),g.ec("click",(function(){return g.Bc(t),g.ic(3).goBack()})),g.Ob(18,"i",32),g.Sb(),g.Sb(),g.Tb(19,"div",33),g.ec("click",(function(){g.Bc(t);const n=g.ic(3);return n.rightSide=!n.rightSide})),g.Ob(20,"i"),g.Sb(),g.Sb()}if(2&t){const t=g.ic(3);g.Ab(2),g.Nc(t.cntnt.name),g.Ab(2),g.pc("ngIf",1==t.cntnt.contentType),g.Ab(5),g.pc("ngIf",t.cntnt.contentPath),g.Ab(4),g.pc("ngIf",1==t.cntnt.contentType),g.Ab(2),g.pc("ngIf",!t.isFullScreen),g.Ab(1),g.pc("ngIf",t.isFullScreen),g.Ab(3),g.qc("ngbTooltip",t.rightSide?"Hide Detailed Section":"Show Detailed Section"),g.pc("ngClass",g.tc(11,O,1==t.cntnt.contentType)),g.Ab(1),g.Db("fas fa-angle-double-",t.rightSide?"right":"left","")}}function A(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",16),g.Tb(1,"div",17),g.Tb(2,"button",45),g.ec("click",(function(){return g.Bc(t),g.ic(3).closeLeftSel()})),g.Mc(3,"Cancel"),g.Sb(),g.Sb(),g.Tb(4,"div",18),g.Mc(5),g.Sb(),g.Tb(6,"div",46),g.Tb(7,"button",47),g.ec("click",(function(){g.Bc(t);const n=g.ic(3),e=g.xc(3);return n.openModal(e,"pages")})),g.Mc(8,"Add"),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=g.ic(3);g.Ab(5),g.Nc(t.cntnt.name),g.Ab(2),g.pc("disabled",!t.selPages||t.selPages&&t.selPages.length<=0)}}function y(t,n){if(1&t){const t=g.Ub();g.Tb(0,"mat-checkbox",57),g.ec("change",(function(n){g.Bc(t);const e=g.ic().$implicit;return g.ic(4).addRemPages(n,e)})),g.Sb()}}const I=function(t){return{active:t}};function D(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",51),g.Kc(1,y,1,0,"mat-checkbox",52),g.Tb(2,"div",53),g.ec("click",(function(){g.Bc(t);const e=n.$implicit;return g.ic(4).goToPage(e)})),g.Tb(3,"div",54),g.Ob(4,"img",55),g.Sb(),g.Tb(5,"div",56),g.Mc(6),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=n.$implicit,e=g.ic(4);g.pc("ngClass",g.tc(4,I,e.actPage==t.pageNo)),g.Ab(1),g.pc("ngIf",e.isSelPage),g.Ab(3),g.pc("src",e.getImg(t,"icon"),g.Dc),g.Ab(2),g.Nc(t.pageNo)}}function F(t,n){1&t&&(g.Tb(0,"div"),g.Mc(1," No thumbnail available "),g.Sb())}function k(t,n){if(1&t&&(g.Tb(0,"div",48),g.Tb(1,"div",49),g.Mc(2),g.Sb(),g.Kc(3,D,7,6,"div",50),g.Kc(4,F,2,0,"div",1),g.Sb()),2&t){const t=g.ic(3);g.Ab(2),g.Nc(t.cntnt.name),g.Ab(1),g.pc("ngForOf",t.cntnt.pdfImages),g.Ab(1),g.pc("ngIf",t.cntnt.pdfImages.length<=0)}}function N(t,n){1&t&&(g.Tb(0,"div",58),g.Ob(1,"div",61),g.Sb())}function L(t,n){1&t&&(g.Tb(0,"div",62),g.Mc(1,"No pdf found"),g.Sb())}function K(t,n){if(1&t&&(g.Tb(0,"div",58),g.Kc(1,N,2,0,"div",59),g.Kc(2,L,2,0,"div",60),g.Sb()),2&t){const t=g.ic(3);g.Ab(1),g.pc("ngIf",t.cntnt.pdf),g.Ab(1),g.pc("ngIf",!t.cntnt.pdf)}}function R(t,n){if(1&t&&(g.Tb(0,"div",63),g.Ob(1,"img",64),g.Sb()),2&t){const t=g.ic(3);g.Ab(1),g.pc("src",t.getImg(t.cntnt,"icon"),g.Dc)}}function E(t,n){if(1&t&&(g.Tb(0,"div"),g.Mc(1),g.Sb()),2&t){const t=g.ic(5);g.Ab(1),g.Nc(t.cntnt.name)}}function U(t,n){if(1&t&&(g.Tb(0,"a",67),g.Ob(1,"img",68),g.Kc(2,E,2,1,"div",1),g.Sb()),2&t){const t=g.ic(4);g.pc("href",t.cntnt.url,g.Dc),g.Ab(1),g.pc("src",t.getImg(t.cntnt,"icon"),g.Dc),g.Ab(1),g.pc("ngIf",!t.cntnt.hideLabelInWorkspace)}}function B(t,n){1&t&&g.Mc(0,"No url available")}function z(t,n){if(1&t&&(g.Tb(0,"div",63),g.Kc(1,U,3,3,"a",65),g.Kc(2,B,1,0,"ng-template",null,66,g.Lc),g.Sb()),2&t){const t=g.xc(3),n=g.ic(3);g.Ab(1),g.pc("ngIf",n.cntnt.url)("ngIfElse",t)}}function $(t,n){if(1&t&&(g.Tb(0,"video",71),g.Ob(1,"source",72),g.Mc(2," Your browser does not support the video player. "),g.Sb()),2&t){const t=g.ic(4);g.Ab(1),g.pc("src",t.cntnt.contentPath,g.Dc)}}function W(t,n){if(1&t&&(g.Tb(0,"div",69),g.Kc(1,$,3,1,"video",70),g.Sb()),2&t){const t=g.ic(3);g.Ab(1),g.pc("ngIf",t.cntnt.contentPath)}}function j(t,n){1&t&&(g.Tb(0,"div"),g.Mc(1,"Not a valid content"),g.Sb())}function G(t,n){if(1&t&&(g.Tb(0,"div",88),g.Tb(1,"div",89),g.Tb(2,"div",90),g.Mc(3," Updated on "),g.Sb(),g.Tb(4,"div",91),g.Mc(5),g.jc(6,"date"),g.Sb(),g.Sb(),g.Tb(7,"div",89),g.Tb(8,"div",90),g.Mc(9," Authors "),g.Sb(),g.Tb(10,"div",91),g.Tb(11,"div",92),g.Tb(12,"span",93),g.Mc(13,"AD"),g.Sb(),g.Mc(14," Andrea D'suzza "),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&t){const t=g.ic(4);g.Ab(5),g.Oc(" ",g.lc(6,1,t.cntnt.updatedDate,"dd MMM, yyyy HH:mm")||"N/A"," ")}}function q(t,n){1&t&&(g.Tb(0,"div",94),g.Tb(1,"div",95),g.Tb(2,"div",96),g.Mc(3,"17"),g.Sb(),g.Tb(4,"span"),g.Mc(5,"Total in app views"),g.Sb(),g.Sb(),g.Tb(6,"div",95),g.Tb(7,"div",96),g.Mc(8,"4"),g.Sb(),g.Tb(9,"span"),g.Mc(10,"Total customer shares"),g.Sb(),g.Sb(),g.Tb(11,"div",95),g.Tb(12,"div",96),g.Mc(13,"27s"),g.Sb(),g.Tb(14,"span"),g.Mc(15,"Avg. customer view time"),g.Sb(),g.Sb(),g.Sb())}function V(t,n){if(1&t&&(g.Tb(0,"div",101),g.Mc(1),g.Sb()),2&t){const t=n.$implicit;g.Ab(1),g.Oc(" ",t.tagName," ")}}function J(t,n){if(1&t&&(g.Tb(0,"div",99),g.Kc(1,V,2,1,"div",100),g.Sb()),2&t){const t=g.ic(5);g.Ab(1),g.pc("ngForOf",t.cntnt.contentTags)}}function H(t,n){1&t&&(g.Tb(0,"div"),g.Mc(1,"No Tags"),g.Sb())}function X(t,n){if(1&t&&(g.Tb(0,"div",94),g.Kc(1,J,2,1,"div",97),g.Kc(2,H,2,0,"ng-template",null,98,g.Lc),g.Sb()),2&t){const t=g.xc(3),n=g.ic(4);g.Ab(1),g.pc("ngIf",n.cntnt.contentTags&&n.cntnt.contentTags.length>0)("ngIfElse",t)}}function Z(t,n){if(1&t&&(g.Tb(0,"div",82),g.Tb(1,"div",102),g.Tb(2,"span",103),g.Mc(3,"TU"),g.Sb(),g.Sb(),g.Tb(4,"div",104),g.Tb(5,"div",105),g.Mc(6),g.Tb(7,"span",106),g.Mc(8),g.jc(9,"date"),g.Sb(),g.Tb(10,"div",107),g.Ob(11,"i",108),g.Sb(),g.Sb(),g.Tb(12,"div",109),g.Mc(13),g.Sb(),g.Sb(),g.Sb()),2&t){const t=n.$implicit;g.Ab(6),g.Oc(" ",t.createdByFullName," "),g.Ab(2),g.Nc(g.lc(9,3,t.createdDate,"dd MMM, yyyy")||"N/A"),g.Ab(5),g.Nc(t.commentText||"N/A")}}function Q(t,n){1&t&&g.Ob(0,"app-loader",3),2&t&&g.pc("type","btn")}function Y(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",73),g.Tb(1,"mat-tab-group"),g.Tb(2,"mat-tab",74),g.Tb(3,"div",75),g.Tb(4,"div",76),g.ec("click",(function(){g.Bc(t);const n=g.ic(3);return n.infoToggle=!n.infoToggle})),g.Mc(5," Info "),g.Ob(6,"i"),g.Sb(),g.Kc(7,G,15,4,"div",77),g.Ob(8,"hr"),g.Tb(9,"div",78),g.ec("click",(function(){g.Bc(t);const n=g.ic(3);return n.enggToggle=!n.enggToggle})),g.Mc(10," Engagement "),g.Ob(11,"i"),g.Sb(),g.Kc(12,q,16,0,"div",79),g.Ob(13,"hr"),g.Tb(14,"div",78),g.ec("click",(function(){g.Bc(t);const n=g.ic(3);return n.tagsToggle=!n.tagsToggle})),g.Mc(15," Tags "),g.Ob(16,"i"),g.Sb(),g.Kc(17,X,4,2,"div",79),g.Sb(),g.Sb(),g.Tb(18,"mat-tab",80),g.Tb(19,"div",75),g.Kc(20,Z,14,6,"div",81),g.Tb(21,"div",82),g.Tb(22,"div",83),g.Tb(23,"span",84),g.Mc(24,"TU"),g.Sb(),g.Sb(),g.Tb(25,"mat-form-field",85),g.Tb(26,"mat-label"),g.Mc(27,"Leave a comment"),g.Sb(),g.Tb(28,"textarea",86),g.ec("ngModelChange",(function(n){return g.Bc(t),g.ic(3).cmnt=n})),g.Sb(),g.Sb(),g.Sb(),g.Tb(29,"div",87),g.Tb(30,"button",47),g.ec("click",(function(){return g.Bc(t),g.ic(3).addCmnt("cmnt")})),g.Kc(31,Q,1,1,"app-loader",0),g.Mc(32," Submit "),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=g.ic(3);g.Ab(6),g.Db("fa fa-chevron-",t.infoToggle?"up":"down"," float-right mt-1"),g.Ab(1),g.pc("ngIf",t.infoToggle),g.Ab(4),g.Db("fa fa-chevron-",t.enggToggle?"up":"down"," float-right mt-1"),g.Ab(1),g.pc("ngIf",t.enggToggle),g.Ab(4),g.Db("fa fa-chevron-",t.tagsToggle?"up":"down"," float-right mt-1"),g.Ab(1),g.pc("ngIf",t.tagsToggle),g.Ab(1),g.rc("label","Comments (",t.cntnt.comments&&t.cntnt.comments.length?t.cntnt.comments.length:0,")"),g.Ab(2),g.pc("ngForOf",t.cntnt.comments),g.Ab(8),g.pc("ngModel",t.cmnt),g.Ab(2),g.pc("disabled",t.cmntDisb||!t.cmnt),g.Ab(1),g.pc("ngIf",t.cmntDisb)}}function tt(t,n){if(1&t&&(g.Tb(0,"div"),g.Kc(1,x,21,13,"div",6),g.Kc(2,A,9,2,"div",6),g.Tb(3,"div",7),g.Kc(4,k,5,3,"div",8),g.Tb(5,"div",9),g.Tb(6,"div",10),g.Kc(7,K,3,2,"div",11),g.Kc(8,R,2,1,"div",12),g.Kc(9,z,4,2,"div",12),g.Kc(10,W,2,1,"div",13),g.Kc(11,j,2,0,"div",14),g.Sb(),g.Sb(),g.Kc(12,Y,33,17,"div",15),g.Sb(),g.Sb()),2&t){const t=g.ic(2);g.Ab(1),g.pc("ngIf",!t.isSelPage),g.Ab(1),g.pc("ngIf",t.isSelPage),g.Ab(2),g.pc("ngIf",1==t.cntnt.contentType&&t.leftSide),g.Ab(2),g.pc("ngSwitch",t.cntnt.contentType),g.Ab(1),g.pc("ngSwitchCase",1),g.Ab(1),g.pc("ngSwitchCase",2),g.Ab(1),g.pc("ngSwitchCase",3),g.Ab(1),g.pc("ngSwitchCase",4),g.Ab(2),g.pc("ngIf",t.rightSide)}}function nt(t,n){1&t&&g.Mc(0," No Content found ")}function et(t,n){if(1&t&&(g.Tb(0,"div"),g.Kc(1,tt,13,9,"div",4),g.Kc(2,nt,1,0,"ng-template",null,5,g.Lc),g.Sb()),2&t){const t=g.xc(3),n=g.ic();g.Ab(1),g.pc("ngIf",n.cntnt)("ngIfElse",t)}}function it(t,n){1&t&&g.Ob(0,"app-loader",3),2&t&&g.pc("type","div")}function ct(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",116),g.Tb(1,"div",117),g.Ob(2,"img",118),g.Sb(),g.Tb(3,"div",119),g.Mc(4),g.Sb(),g.Tb(5,"div",120),g.Tb(6,"button",121),g.ec("click",(function(){g.Bc(t);const e=n.$implicit;return g.ic(3).addCntntToColl(e)})),g.Mc(7,"Add"),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=n.$implicit,e=g.ic(3);g.Ab(2),g.pc("src",e.getImg(t,"fldr"),g.Dc),g.Ab(2),g.Oc(" ",t.name," ")}}function ot(t,n){if(1&t&&(g.Tb(0,"div"),g.Kc(1,ct,8,2,"div",115),g.Sb()),2&t){const t=g.ic(2);g.Ab(1),g.pc("ngForOf",t.colls)}}function st(t,n){if(1&t&&(g.Tb(0,"div",110),g.Tb(1,"h4",111),g.Mc(2,"Add to Collection"),g.Sb(),g.Tb(3,"button",112),g.ec("click",(function(){return n.$implicit.dismiss("Cross click")})),g.Tb(4,"span",113),g.Mc(5,"\xd7"),g.Sb(),g.Sb(),g.Sb(),g.Tb(6,"div",114),g.Kc(7,it,1,1,"app-loader",0),g.Kc(8,ot,2,1,"div",1),g.Sb()),2&t){const t=g.ic();g.Ab(7),g.pc("ngIf",t.collLoad),g.Ab(1),g.pc("ngIf",!t.collLoad)}}let rt=(()=>{class t{constructor(t,n,e,i,c,o,s,r,a,l){this.document=t,this.route=n,this.toastr=e,this.modalServ=i,this.cwServ=c,this.viewSDKClient=o,this.fileServ=s,this.colctnSrv=r,this.tokenDataServ=a,this.loc=l,this.testArr=[1,2,3,1,1,1,1,1,1,1,1,1]}ngOnInit(){this.usrInfo=this.tokenDataServ.getUser(),this.routerSubs=this.route.params.subscribe(t=>{this.chkScreenMode(),this.elem=document.documentElement,this.id=t.id,this.initialiseState()})}initialiseState(){"0"!=this.id&&(this.loading=!0,this.isSelPage=!1,this.selPages=[],this.actPage=1,this.leftSide=!1,this.rightSide=!1,this.isFullScreen=!1,this.infoToggle=!0,this.enggToggle=!0,this.tagsToggle=!0,this.colls=[],this.collLoad=!1,this.cmntDisb=!1,this.getCntnt())}getCntnt(){this.cwServ.viewContent(this.id).subscribe(t=>{if(t&&t.result&&t.result.id)switch(this.cntnt=t.result,this.cntnt.contentType){case 1:Array.isArray(this.cntnt.pdfImages)?this.cntnt.pdfImages.sort((t,n)=>t.pageNo-n.pageNo):this.cntnt.pdfImages=[],this.cntnt.pdf=4==this.cntnt.documentType?this.cntnt.contentPath:this.cntnt.pdfContentPath,this.loading=!1,setTimeout(()=>{this.renderPDf()},1e3)}else this.cntnt=null;this.loading=!1},t=>{this.cntnt=null,this.loading=!1})}renderPDf(){this.cntnt.pdf&&this.viewSDKClient.ready().then(()=>{this.viewSDKClient.previewFile({defConfg:{enableAnnotationAPIs:!1,showDownloadPDF:!1,showLeftHandPanel:!1,showPrintPDF:!1,showAnnotationTools:!1},name:this.cntnt.name,id:this.id,divId:"pdf-div",url:this.cntnt.pdf})})}goToPage(t){this.actPage=t.pageNo,this.viewSDKClient.goToPage(parseInt(t.pageNo))}addCmnt(t){let n={commentText:this.cmnt,contentId:parseInt(this.id)};this.cmntDisb=!0,this.cwServ.addCmntToContent(n).subscribe(t=>{t?(this.toastr.success(t.message||"Comment added successfully","Success!"),this.cntnt.comments.push({createdByFullName:this.usrInfo&&this.usrInfo.fN?this.usrInfo.fN:"User",createdDate:new Date,commentText:this.cmnt}),this.cmnt=""):this.toastr.error("Unable to add comment","Error!"),this.cmntDisb=!1},t=>{this.cmntDisb=!1})}downloadFile(){this.fileServ.downloadFile(this.cntnt.contentPath,this.cntnt.name)}fullscreenmodes(t){this.chkScreenMode()}chkScreenMode(){this.isFullScreen=!!document.fullscreenElement}openFullscreen(){this.elem.requestFullscreen?this.elem.requestFullscreen():this.elem.mozRequestFullScreen?this.elem.mozRequestFullScreen():this.elem.webkitRequestFullscreen?this.elem.webkitRequestFullscreen():this.elem.msRequestFullscreen&&this.elem.msRequestFullscreen()}closeFullscreen(){this.document.exitFullscreen?this.document.exitFullscreen():this.document.mozCancelFullScreen?this.document.mozCancelFullScreen():this.document.webkitExitFullscreen?this.document.webkitExitFullscreen():this.document.msExitFullscreen&&this.document.msExitFullscreen()}addRemPages(t,n){if(t.checked)this.selPages.push(n.pageNo);else{const t=this.selPages.findIndex(t=>t==n.pageNo);t>=0&&this.selPages.splice(t,1)}}addCntntToColl(t){let n={id:t.id,contents:[],pages:{pageNumbers:[]}};this.isSelPage?(this.selPages.sort((t,n)=>t-n),n.pages={pageNumbers:this.selPages,contentId:parseInt(this.id)}):n.contents.push(parseInt(this.id)),this.collLoad=!0,this.closeLeftSel(),this.colctnSrv.addContentColctn(n).subscribe(t=>{t&&this.toastr.success(t.message||"Content added successfully to collection","Success!"),this.dismissModal(),this.collLoad=!1},t=>{this.dismissModal(),this.collLoad=!1})}closeLeftSel(){this.selPages=[],this.actPage=1,this.leftSide=!1,this.isSelPage=!1}listColct(){this.collLoad=!0,this.colctnSrv.colctnList({pageNo:0}).subscribe(t=>{this.colls=t&&t.result&&Array.isArray(t.result.results)&&t.result.results.length>0?t.result.results:[],this.collLoad=!1},t=>{this.colls=[],this.collLoad=!1})}getImg(t,n=""){return b.a.getImg(t,n)}goBack(){this.loc.back()}openModal(t,n){this.listColct(),this.modalServ.open(t,{size:"lg"}).result.then(t=>{},t=>{})}dismissModal(){this.modalServ&&this.modalServ.dismissAll()}ngOnDestroy(){this.routerSubs&&this.routerSubs.unsubscribe(),this.dismissModal()}}return t.\u0275fac=function(n){return new(n||t)(g.Nb(i.d),g.Nb(c.a),g.Nb(h.b),g.Nb(d.f),g.Nb(p.a),g.Nb(u.a),g.Nb(f.a),g.Nb(m.a),g.Nb(T.a),g.Nb(i.i))},t.\u0275cmp=g.Hb({type:t,selectors:[["app-view"]],hostBindings:function(t,n){1&t&&g.ec("fullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)("webkitfullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)("mozfullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)("MSFullscreenChange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)},decls:4,vars:2,consts:[[3,"type",4,"ngIf"],[4,"ngIf"],["addColl",""],[3,"type"],[4,"ngIf","ngIfElse"],["noCntnt",""],["class","heading bg-white w-100 row mx-0",4,"ngIf"],[1,"pdf-view","d-flex","mx-0"],["class","left-body bg-white text-center",4,"ngIf"],[1,"main-body","overflow-auto","w-100"],[1,"h-100",3,"ngSwitch"],["class","h-100",4,"ngSwitchCase"],["class","text-center mt-5 mx-3",4,"ngSwitchCase"],["class","text-center mt-5",4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","right-body bg-white pt-1 pb-3",4,"ngIf"],[1,"heading","bg-white","w-100","row","mx-0"],[1,"col-4","align-self-center"],[1,"col-4","align-self-center","d-flex","justify-content-center"],["class","btn btn-lg","placement","bottom",3,"ngbTooltip","click",4,"ngIf"],[1,"dropdown"],["type","button","id","moreDD","data-toggle","dropdown",1,"btn","btn-lg"],[1,"fas","fa-ellipsis-h"],["aria-labelledby","moreDD",1,"dropdown-menu"],["class","dropdown-item curs-ptr",3,"click",4,"ngIf"],[1,"dropdown-item","curs-ptr"],[1,"fas","fa-thumbs-up"],["class","dropdown",4,"ngIf"],[1,"col-4","text-right","align-self-center"],["class","btn btn-lg","ngbTooltip","View in Full Screen",3,"click",4,"ngIf"],["class","btn btn-lg","ngbTooltip","Exit from Full Screen",3,"click",4,"ngIf"],[1,"btn","btn-lg",3,"click"],[1,"fas","fa-times"],["placement","left",1,"btn","btn-outline-secondary","right-side-toggle",3,"ngClass","ngbTooltip","click"],["placement","bottom",1,"btn","btn-lg",3,"ngbTooltip","click"],[1,"fas","fa-th-large"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-download"],["type","button","id","addCol","data-toggle","dropdown",1,"btn","btn-lg"],[1,"fas","fa-plus-circle"],["aria-labelledby","addCol",1,"dropdown-menu"],["ngbTooltip","View in Full Screen",1,"btn","btn-lg",3,"click"],[1,"fas","fa-expand-alt"],["ngbTooltip","Exit from Full Screen",1,"btn","btn-lg",3,"click"],[1,"fas","fa-compress-arrows-alt"],[1,"btn","btn-primary","text-white","btn-sm",3,"click"],[1,"col-4","align-self-center","text-right"],[1,"btn","btn-primary","text-white","btn-sm",3,"disabled","click"],[1,"left-body","bg-white","text-center"],[1,"bg-hi-grey","rounded","px-3","py-1","my-3","w-75","text-truncate","w-fit","mx-auto"],["class","d-flex my-3 pl-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"d-flex","my-3","pl-3",3,"ngClass"],["class","align-self-center mb-4",3,"change",4,"ngIf"],[1,"curs-ptr",3,"click"],[1,"thumbnail"],["alt","Thumbnail",1,"w-50",3,"src"],[1,"num","py-1","px-2","mx-auto","mt-1","rounded","w-fit"],[1,"align-self-center","mb-4",3,"change"],[1,"h-100"],["class","h-100",4,"ngIf"],["class","text-center pt-5",4,"ngIf"],["id","pdf-div",1,"pdf-view"],[1,"text-center","pt-5"],[1,"text-center","mt-5","mx-3"],["alt","Image",3,"src"],["target","_blank",3,"href",4,"ngIf","ngIfElse"],["noUrl",""],["target","_blank",3,"href"],["alt","Url Icon",3,"src"],[1,"text-center","mt-5"],["controls","","controlsList","nodownload","width","720",4,"ngIf"],["controls","","controlsList","nodownload","width","720"],[3,"src"],[1,"right-body","bg-white","pt-1","pb-3"],["label","Details"],[1,"px-3"],[1,"dark-bg-hover","rounded","px-3","py-2","mt-2",3,"click"],["class","pl-3",4,"ngIf"],[1,"dark-bg-hover","rounded","px-3","py-2",3,"click"],["class","pl-3 row mx-0 mt-2",4,"ngIf"],[3,"label"],["class","comment d-flex mt-2",4,"ngFor","ngForOf"],[1,"comment","d-flex","mt-2"],[1,"align-self-center","mx-2"],[1,"rounded-circle","p-1","bg-warning"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Leave a comment","name","cmnt","maxlength","500","required","",3,"ngModel","ngModelChange"],[1,"form-group","text-right"],[1,"pl-3"],[1,"mt-2","work-div"],[1,"font-weight-bold","mb-1"],[1,"text-hi-dark-grey"],[1,"author","bg-hi-grey","px-3","py-2","rounded-pill","mt-1"],[1,"bg-warning","rounded-circle","p-1","text-white"],[1,"pl-3","row","mx-0","mt-2"],[1,"col","pl-0"],[1,"h3"],["class","d-inline-flex flex-wrap",4,"ngIf","ngIfElse"],["noCntntTg",""],[1,"d-inline-flex","flex-wrap"],["class","rounded-pill px-3 py-1 bg-hi-grey text-primary mr-2 my-1",4,"ngFor","ngForOf"],[1,"rounded-pill","px-3","py-1","bg-hi-grey","text-primary","mr-2","my-1"],[1,"align-self-center","mr-2"],[1,"rounded-circle","p-2","bg-warning"],[1,"border-bottom","pb-2","w-100"],[1,"user-name"],[1,"date","ml-3","text-hi-grey"],[1,"btn","btn-light","float-right"],[1,"fas","fa-trash-alt"],[1,"comment-text","text-hi-dark-grey"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["ngbAutofocus","",1,"modal-body","min-height-val"],["id","coll-div","class","d-flex border-bottom p-2 dark-bg-hover",4,"ngFor","ngForOf"],["id","coll-div",1,"d-flex","border-bottom","p-2","dark-bg-hover"],[1,"icon","align-self-center","mr-2"],[2,"max-height","50px","width","40px",3,"src"],[1,"name","align-self-center"],[1,"hover-coll","ml-auto","mr-3"],[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,n){1&t&&(g.Kc(0,C,1,1,"app-loader",0),g.Kc(1,et,4,2,"div",1),g.Kc(2,st,9,2,"ng-template",null,2,g.Lc)),2&t&&(g.pc("ngIf",n.loading),g.Ab(1),g.pc("ngIf",!n.loading))},directives:[i.m,S.a,i.n,i.o,i.p,i.k,d.n,i.l,s.a,r.b,r.a,a.c,a.g,l.b,o.c,o.i,o.t,o.m,o.p],pipes:[i.e],styles:[".heading[_ngcontent-%COMP%]{height:50px;min-height:10vh;box-shadow:0 0 6px rgba(0,0,0,.4);z-index:1;position:relative}.heading[_ngcontent-%COMP%]   .right-side-toggle[_ngcontent-%COMP%]{position:absolute;right:21px;bottom:-47px}.heading[_ngcontent-%COMP%]   .right-side-toggle.pdfView[_ngcontent-%COMP%]{position:absolute;right:21px;bottom:-88px}.left-body[_ngcontent-%COMP%], .main-body[_ngcontent-%COMP%], .right-body[_ngcontent-%COMP%]{min-height:90vh;max-height:90vh;overflow-y:auto}.left-body[_ngcontent-%COMP%]{min-width:250px;width:250px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:186px}@media (min-width:1500px){.left-body[_ngcontent-%COMP%]{min-width:350px;width:350px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:286px}}@media (max-width:1140px){.left-body[_ngcontent-%COMP%]{min-width:200px;width:200px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:138px}}.right-body[_ngcontent-%COMP%]{min-width:500px;width:500px}@media (max-width:1140px){.right-body[_ngcontent-%COMP%]{min-width:400px;width:400px}}.right-body[_ngcontent-%COMP%]   .bg-warning.text-white[_ngcontent-%COMP%]{font-size:.8rem;background-color:#cc4a00!important}.right-body[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{font-size:14px}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s linear}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]:hover   .user-name[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{opacity:1}.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:2px solid #969696}.active[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{background-color:#969696;color:#fff}.hover-coll[_ngcontent-%COMP%]{opacity:0}#coll-div[_ngcontent-%COMP%]:hover   .hover-coll[_ngcontent-%COMP%]{opacity:1}.main-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:720px}@media (max-width:992px){.main-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:480px}}"]}),t})();var at=e("zJym");const lt=[{path:"",component:rt}];let dt=(()=>{class t{}return t.\u0275mod=g.Lb({type:t}),t.\u0275inj=g.Kb({factory:function(n){return new(n||t)},providers:[p.a,f.a,m.a],imports:[[i.c,c.h.forChild(lt),o.h,o.s,at.a,s.b,d.o,r.f,a.e,l.c]]}),t})()}}]);