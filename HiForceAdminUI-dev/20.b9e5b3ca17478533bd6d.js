(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{OraM:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("tk/3"),c=e("lJxs"),o=e("aZQB"),s=e("fXoL");let r=(()=>{class t{constructor(t){this.http=t}freezeFolderObj(t){console.log("sdf");const n=new FormData;for(let e in t)(t[e]||"IsUrl"===e)&&("folderIcon"===e||"Content"===e||"UrlIcon"===e&&t[e]&&t[e].name?n.append(e,t[e],t[e].name):n.append(e,t[e]));return n}getAllObjWrkspc(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.GET_OBJ_WRKSPC,{params:n}).pipe(Object(c.a)(t=>t))}smartFolderAct(t){return this.http.patch(`${o.a.ACT_SMT_FLDR}?id=${t}`,{})}smartFolderDeact(t){return this.http.patch(`${o.a.DEACT_SMT_FLDR}?id=${t}`,{})}updSmartFolder(t){return this.http.put(""+o.a.UPD_SMT_FLDR,this.freezeFolderObj(t))}addSmartFolder(t){return this.http.post(""+o.a.ADD_SMT_FLDR,this.freezeFolderObj(t))}getSmtFolder(t){return this.http.get(`${o.a.GET_SMT_FLDR}?id=${t}`)}folderAct(t){return this.http.patch(`${o.a.ACT_FLDR}?id=${t}`,{})}folderDeact(t){return this.http.patch(`${o.a.DEACT_FLDR}?id=${t}`,{})}updFolder(t){return this.http.put(""+o.a.UPD_FLDR,this.freezeFolderObj(t))}addFolder(t){return this.http.post(""+o.a.ADD_FLDR,this.freezeFolderObj(t))}getFolder(t){return this.http.get(`${o.a.GET_FLDR}?id=${t}`)}wrkspcAct(t){return this.http.patch(`${o.a.ACT_WRKSPC}?id=${t}`,{})}wrkspcDeact(t){return this.http.patch(`${o.a.DEACT_WRKSPC}?id=${t}`,{})}wrkspcList(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_WRKSPC,{params:n}).pipe(Object(c.a)(t=>t))}addWrkspc(t){return this.http.post(""+o.a.ADD_WRKSPC,t)}updWrkspc(t){return this.http.put(""+o.a.UPD_WRKSPC,t)}contentByFolder(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.GET_CNTNT_FLDR,{params:n}).pipe(Object(c.a)(t=>t))}contentBySmartFolder(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.GET_CNTNT_SMT_FLDR,{params:n}).pipe(Object(c.a)(t=>t))}contentList(t){let n=new i.e;for(let e in t)if("fltrL"===e){if(t[e]&&t[e].length>0)for(let i=0;i<t[e].length;i++)"fileType"===t[e][i].type&&(n=n.append("fileTypes",t[e][i].v))}else(t[e]||"IsAscending"==e)&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_CNTNT,{params:n}).pipe(Object(c.a)(t=>t))}addContent(t){return this.http.post(""+o.a.ADD_CNTNT,this.freezeFolderObj(t))}updContent(t){return this.http.post(""+o.a.UPD_CNTNT,t)}viewContent(t){return this.http.get(""+o.a.GET_CNTNT,{params:{id:t}})}addCmntToContent(t){return this.http.post(""+o.a.ADD_CMNT_CNTNT,t)}delCntnt(t){return this.http.post(`${o.a.DEL_CNTNT}?id=${t}`,{})}usrGrpWrkspcList(t){let n=new i.e;for(let e in t)t[e]&&(n=n.set(e,t[e]));return this.http.get(""+o.a.LIST_USR_GRP_WRKSPC,{params:n}).pipe(Object(c.a)(t=>t))}addUsrGrpWrkspc(t){return this.http.post(""+o.a.ADD_USR_GRP_WRKSPC,t)}remUsrGrpWrkspc(t){return this.http.post(""+o.a.REM_USR_GRP_WRKSPC,t)}}return t.\u0275fac=function(n){return new(n||t)(s.bc(i.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t})()},s0Cq:function(t,n,e){"use strict";e.d(n,"f",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"i",(function(){return s})),e.d(n,"e",(function(){return r})),e.d(n,"h",(function(){return l})),e.d(n,"a",(function(){return d})),e.d(n,"g",(function(){return a})),e.d(n,"d",(function(){return b}));const i=[10,20,30],c="assets/images/def-img.png",o="assets/images/def-icon.png",s=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],r=[{v:1,n:"All Users"},{v:2,n:"Selected Workspaces"},{v:3,n:"Selected User Groups"}];var l=function(t){return t[t.Admin=2]="Admin",t[t.User=3]="User",t}({}),a=function(t){return t[t.English=1]="English",t[t.German=2]="German",t[t.French=3]="French",t[t.Spanish=4]="Spanish",t[t.Dutch=5]="Dutch",t[t.Italian=6]="Italian",t[t.Japanese=7]="Japanese",t[t["Chinese(China)"]=8]="Chinese(China)",t}({}),d=function(t){return t[t.Sent=1]="Sent",t[t.Scheduled=2]="Scheduled",t[t.Archived=3]="Archived",t}({}),b=function(t){return t[t.Document=1]="Document",t[t.Photo=2]="Photo",t[t.URL=3]="URL",t[t.Video=4]="Video",t}({})},sNI4:function(t,n,e){"use strict";e.r(n),e.d(n,"ViewModule",(function(){return rt}));var i=e("ofXK"),c=e("tyNb"),o=e("3Pt+"),s=e("bSwM"),r=e("wZkO"),l=e("kmnG"),a=e("qFsG"),d=e("1kSV"),b=e("s0Cq"),g=e("fXoL"),h=e("5eHb"),p=e("OraM"),u=e("dtd+"),f=e("CrrK"),m=e("CFzk"),S=e("p0iN"),T=e("668k");function v(t,n){1&t&&g.Ob(0,"app-loader",3),2&t&&g.pc("type","page")}function w(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",34),g.ec("click",(function(){g.Ac(t);const n=g.ic(4);return n.leftSide=!n.leftSide})),g.Ob(1,"i",35),g.Sb()}if(2&t){const t=g.ic(4);g.qc("ngbTooltip",t.leftSide?"Hide Pages":"Show Pages")}}function C(t,n){if(1&t){const t=g.Ub();g.Tb(0,"button",36),g.ec("click",(function(){return g.Ac(t),g.ic(4).downloadFile()})),g.Ob(1,"i",37),g.Lc(2,"Download"),g.Sb()}}function A(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",20),g.Tb(1,"button",38),g.Ob(2,"i",39),g.Sb(),g.Tb(3,"div",40),g.Tb(4,"button",36),g.ec("click",(function(){g.Ac(t);const n=g.ic(4),e=g.xc(3);return n.openModal(e,"full")})),g.Lc(5,"Entire Document Document"),g.Sb(),g.Tb(6,"button",36),g.ec("click",(function(){g.Ac(t);const n=g.ic(4);return n.leftSide=!0,n.isSelPage=!0})),g.Lc(7,"Select Pages"),g.Sb(),g.Sb(),g.Sb()}}function P(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",41),g.ec("click",(function(){return g.Ac(t),g.ic(4).openFullscreen()})),g.Ob(1,"i",42),g.Sb()}}function x(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",43),g.ec("click",(function(){return g.Ac(t),g.ic(4).closeFullscreen()})),g.Ob(1,"i",44),g.Sb()}}const y=function(t){return{pdfView:t}};function O(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",16),g.Tb(1,"div",17),g.Lc(2),g.Sb(),g.Tb(3,"div",18),g.Jc(4,w,2,1,"div",19),g.Tb(5,"div",20),g.Tb(6,"button",21),g.Ob(7,"i",22),g.Sb(),g.Tb(8,"div",23),g.Jc(9,C,3,0,"button",24),g.Tb(10,"button",25),g.Ob(11,"i",26),g.Lc(12,"Like"),g.Sb(),g.Sb(),g.Sb(),g.Jc(13,A,8,0,"div",27),g.Sb(),g.Tb(14,"div",28),g.Jc(15,P,2,0,"div",29),g.Jc(16,x,2,0,"div",30),g.Tb(17,"div",31),g.Ob(18,"i",32),g.Sb(),g.Sb(),g.Tb(19,"div",33),g.ec("click",(function(){g.Ac(t);const n=g.ic(3);return n.rightSide=!n.rightSide})),g.Ob(20,"i"),g.Sb(),g.Sb()}if(2&t){const t=g.ic(3);g.Ab(2),g.Mc(t.cntnt.name),g.Ab(2),g.pc("ngIf",1==t.cntnt.contentType),g.Ab(5),g.pc("ngIf",t.cntnt.contentPath),g.Ab(4),g.pc("ngIf",1==t.cntnt.contentType),g.Ab(2),g.pc("ngIf",!t.isFullScreen),g.Ab(1),g.pc("ngIf",t.isFullScreen),g.Ab(3),g.qc("ngbTooltip",t.rightSide?"Hide Detailed Section":"Show Detailed Section"),g.pc("ngClass",g.tc(11,y,1==t.cntnt.contentType)),g.Ab(1),g.Db("fas fa-angle-double-",t.rightSide?"right":"left","")}}function L(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",16),g.Tb(1,"div",17),g.Tb(2,"button",45),g.ec("click",(function(){return g.Ac(t),g.ic(3).closeLeftSel()})),g.Lc(3,"Cancel"),g.Sb(),g.Sb(),g.Tb(4,"div",18),g.Lc(5),g.Sb(),g.Tb(6,"div",46),g.Tb(7,"button",47),g.ec("click",(function(){g.Ac(t);const n=g.ic(3),e=g.xc(3);return n.openModal(e,"pages")})),g.Lc(8,"Add"),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=g.ic(3);g.Ab(5),g.Mc(t.cntnt.name),g.Ab(2),g.pc("disabled",!t.selPages||t.selPages&&t.selPages.length<=0)}}function _(t,n){if(1&t){const t=g.Ub();g.Tb(0,"mat-checkbox",57),g.ec("change",(function(n){g.Ac(t);const e=g.ic().$implicit;return g.ic(4).addRemPages(n,e)})),g.Sb()}}const I=function(t){return{active:t}};function M(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",51),g.Jc(1,_,1,0,"mat-checkbox",52),g.Tb(2,"div",53),g.ec("click",(function(){g.Ac(t);const e=n.$implicit;return g.ic(4).goToPage(e)})),g.Tb(3,"div",54),g.Ob(4,"img",55),g.Sb(),g.Tb(5,"div",56),g.Lc(6),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=n.$implicit,e=g.ic(4);g.pc("ngClass",g.tc(4,I,e.actPage==t.pageNo)),g.Ab(1),g.pc("ngIf",e.isSelPage),g.Ab(3),g.pc("src",t.imagePath?t.imagePath:e.defIcon,g.Cc),g.Ab(2),g.Mc(t.pageNo)}}function F(t,n){1&t&&(g.Tb(0,"div"),g.Lc(1," No thumbnail available "),g.Sb())}function D(t,n){if(1&t&&(g.Tb(0,"div",48),g.Tb(1,"div",49),g.Lc(2),g.Sb(),g.Jc(3,M,7,6,"div",50),g.Jc(4,F,2,0,"div",1),g.Sb()),2&t){const t=g.ic(3);g.Ab(2),g.Mc(t.cntnt.name),g.Ab(1),g.pc("ngForOf",t.cntnt.pdfImages),g.Ab(1),g.pc("ngIf",t.cntnt.pdfImages.length<=0)}}function k(t,n){1&t&&(g.Tb(0,"div",58),g.Ob(1,"div",60),g.Sb())}function N(t,n){1&t&&(g.Tb(0,"div"),g.Lc(1,"No pdf found"),g.Sb())}function J(t,n){if(1&t&&(g.Tb(0,"div",58),g.Jc(1,k,2,0,"div",59),g.Jc(2,N,2,0,"div",1),g.Sb()),2&t){const t=g.ic(3);g.Ab(1),g.pc("ngIf",t.cntnt.pdfContentPath),g.Ab(1),g.pc("ngIf",!t.cntnt.pdfContentPath)}}function R(t,n){if(1&t&&(g.Tb(0,"div",61),g.Ob(1,"img",62),g.Sb()),2&t){const t=g.ic(3);g.Ab(1),g.pc("src",t.cntnt.contentPath?t.cntnt.contentPath:t.defIcon,g.Cc)}}function U(t,n){if(1&t&&(g.Tb(0,"div",61),g.Tb(1,"div"),g.Lc(2),g.Sb(),g.Ob(3,"img",63),g.Sb()),2&t){const t=g.ic(3);g.Ab(2),g.Nc("Url : ",t.cntnt.url||"N/A",""),g.Ab(1),g.pc("src",t.cntnt.urlIconPath?t.cntnt.urlIconPath:t.defIcon,g.Cc)}}function E(t,n){if(1&t&&(g.Tb(0,"video",66),g.Ob(1,"source",67),g.Lc(2," Your browser does not support the video player. "),g.Sb()),2&t){const t=g.ic(4);g.Ab(1),g.pc("src",t.cntnt.contentPath,g.Cc)}}function $(t,n){if(1&t&&(g.Tb(0,"div",64),g.Jc(1,E,3,1,"video",65),g.Sb()),2&t){const t=g.ic(3);g.Ab(1),g.pc("ngIf",t.cntnt.contentPath)}}function z(t,n){1&t&&(g.Tb(0,"div"),g.Lc(1,"Not a valid content"),g.Sb())}function K(t,n){if(1&t&&(g.Tb(0,"div",83),g.Tb(1,"div",84),g.Tb(2,"div",85),g.Lc(3," Updated on "),g.Sb(),g.Tb(4,"div",86),g.Lc(5),g.jc(6,"date"),g.Sb(),g.Sb(),g.Tb(7,"div",84),g.Tb(8,"div",85),g.Lc(9," Authors "),g.Sb(),g.Tb(10,"div",86),g.Tb(11,"div",87),g.Tb(12,"span",88),g.Lc(13,"AD"),g.Sb(),g.Lc(14," Andrea D'suzza "),g.Sb(),g.Sb(),g.Sb(),g.Sb()),2&t){const t=g.ic(4);g.Ab(5),g.Nc(" ",g.lc(6,1,t.cntnt.updatedDate,"dd MMM, yyyy HH:mm")||"N/A"," ")}}function j(t,n){1&t&&(g.Tb(0,"div",89),g.Tb(1,"div",90),g.Tb(2,"div",91),g.Lc(3,"17"),g.Sb(),g.Tb(4,"span"),g.Lc(5,"Total in app views"),g.Sb(),g.Sb(),g.Tb(6,"div",90),g.Tb(7,"div",91),g.Lc(8,"4"),g.Sb(),g.Tb(9,"span"),g.Lc(10,"Total customer shares"),g.Sb(),g.Sb(),g.Tb(11,"div",90),g.Tb(12,"div",91),g.Lc(13,"27s"),g.Sb(),g.Tb(14,"span"),g.Lc(15,"Avg. customer view time"),g.Sb(),g.Sb(),g.Sb())}function G(t,n){if(1&t&&(g.Tb(0,"div",96),g.Lc(1),g.Sb()),2&t){const t=n.$implicit;g.Ab(1),g.Nc(" ",t.tagName," ")}}function W(t,n){if(1&t&&(g.Tb(0,"div",94),g.Jc(1,G,2,1,"div",95),g.Sb()),2&t){const t=g.ic(5);g.Ab(1),g.pc("ngForOf",t.cntnt.contentTags)}}function q(t,n){1&t&&(g.Tb(0,"div"),g.Lc(1,"No Tags"),g.Sb())}function V(t,n){if(1&t&&(g.Tb(0,"div",89),g.Jc(1,W,2,1,"div",92),g.Jc(2,q,2,0,"ng-template",null,93,g.Kc),g.Sb()),2&t){const t=g.xc(3),n=g.ic(4);g.Ab(1),g.pc("ngIf",n.cntnt.contentTags&&n.cntnt.contentTags.length>0)("ngIfElse",t)}}function B(t,n){if(1&t&&(g.Tb(0,"div",77),g.Tb(1,"div",97),g.Tb(2,"span",98),g.Lc(3,"TU"),g.Sb(),g.Sb(),g.Tb(4,"div",99),g.Tb(5,"div",100),g.Lc(6),g.Tb(7,"span",101),g.Lc(8),g.jc(9,"date"),g.Sb(),g.Tb(10,"div",102),g.Ob(11,"i",103),g.Sb(),g.Sb(),g.Tb(12,"div",104),g.Lc(13),g.Sb(),g.Sb(),g.Sb()),2&t){const t=n.$implicit;g.Ab(6),g.Nc(" ",t.createdByFullName," "),g.Ab(2),g.Mc(g.lc(9,3,t.createdDate,"dd MMM, yyyy")||"N/A"),g.Ab(5),g.Mc(t.commentText||"N/A")}}function H(t,n){1&t&&g.Ob(0,"app-loader",3),2&t&&g.pc("type","btn")}function X(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",68),g.Tb(1,"mat-tab-group"),g.Tb(2,"mat-tab",69),g.Tb(3,"div",70),g.Tb(4,"div",71),g.ec("click",(function(){g.Ac(t);const n=g.ic(3);return n.infoToggle=!n.infoToggle})),g.Lc(5," Info "),g.Ob(6,"i"),g.Sb(),g.Jc(7,K,15,4,"div",72),g.Ob(8,"hr"),g.Tb(9,"div",73),g.ec("click",(function(){g.Ac(t);const n=g.ic(3);return n.enggToggle=!n.enggToggle})),g.Lc(10," Engagement "),g.Ob(11,"i"),g.Sb(),g.Jc(12,j,16,0,"div",74),g.Ob(13,"hr"),g.Tb(14,"div",73),g.ec("click",(function(){g.Ac(t);const n=g.ic(3);return n.tagsToggle=!n.tagsToggle})),g.Lc(15," Tags "),g.Ob(16,"i"),g.Sb(),g.Jc(17,V,4,2,"div",74),g.Sb(),g.Sb(),g.Tb(18,"mat-tab",75),g.Tb(19,"div",70),g.Jc(20,B,14,6,"div",76),g.Tb(21,"div",77),g.Tb(22,"div",78),g.Tb(23,"span",79),g.Lc(24,"TU"),g.Sb(),g.Sb(),g.Tb(25,"mat-form-field",80),g.Tb(26,"mat-label"),g.Lc(27,"Leave a comment"),g.Sb(),g.Tb(28,"textarea",81),g.ec("ngModelChange",(function(n){return g.Ac(t),g.ic(3).cmnt=n})),g.Sb(),g.Sb(),g.Sb(),g.Tb(29,"div",82),g.Tb(30,"button",47),g.ec("click",(function(){return g.Ac(t),g.ic(3).addCmnt("cmnt")})),g.Jc(31,H,1,1,"app-loader",0),g.Lc(32," Submit "),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=g.ic(3);g.Ab(6),g.Db("fa fa-chevron-",t.infoToggle?"up":"down"," float-right mt-1"),g.Ab(1),g.pc("ngIf",t.infoToggle),g.Ab(4),g.Db("fa fa-chevron-",t.enggToggle?"up":"down"," float-right mt-1"),g.Ab(1),g.pc("ngIf",t.enggToggle),g.Ab(4),g.Db("fa fa-chevron-",t.tagsToggle?"up":"down"," float-right mt-1"),g.Ab(1),g.pc("ngIf",t.tagsToggle),g.Ab(1),g.rc("label","Comments (",t.cntnt.comments&&t.cntnt.comments.length?t.cntnt.comments.length:0,")"),g.Ab(2),g.pc("ngForOf",t.cntnt.comments),g.Ab(8),g.pc("ngModel",t.cmnt),g.Ab(2),g.pc("disabled",t.cmntDisb||!t.cmnt),g.Ab(1),g.pc("ngIf",t.cmntDisb)}}function Z(t,n){if(1&t&&(g.Tb(0,"div"),g.Jc(1,O,21,13,"div",6),g.Jc(2,L,9,2,"div",6),g.Tb(3,"div",7),g.Jc(4,D,5,3,"div",8),g.Tb(5,"div",9),g.Tb(6,"div",10),g.Jc(7,J,3,2,"div",11),g.Jc(8,R,2,1,"div",12),g.Jc(9,U,4,2,"div",12),g.Jc(10,$,2,1,"div",13),g.Jc(11,z,2,0,"div",14),g.Sb(),g.Sb(),g.Jc(12,X,33,17,"div",15),g.Sb(),g.Sb()),2&t){const t=g.ic(2);g.Ab(1),g.pc("ngIf",!t.isSelPage),g.Ab(1),g.pc("ngIf",t.isSelPage),g.Ab(2),g.pc("ngIf",1==t.cntnt.contentType&&t.leftSide),g.Ab(2),g.pc("ngSwitch",t.cntnt.contentType),g.Ab(1),g.pc("ngSwitchCase",1),g.Ab(1),g.pc("ngSwitchCase",2),g.Ab(1),g.pc("ngSwitchCase",3),g.Ab(1),g.pc("ngSwitchCase",4),g.Ab(2),g.pc("ngIf",t.rightSide)}}function Q(t,n){1&t&&g.Lc(0," No Content found ")}function Y(t,n){if(1&t&&(g.Tb(0,"div"),g.Jc(1,Z,13,9,"div",4),g.Jc(2,Q,1,0,"ng-template",null,5,g.Kc),g.Sb()),2&t){const t=g.xc(3),n=g.ic();g.Ab(1),g.pc("ngIf",n.cntnt)("ngIfElse",t)}}function tt(t,n){1&t&&g.Ob(0,"app-loader",3),2&t&&g.pc("type","div")}function nt(t,n){if(1&t){const t=g.Ub();g.Tb(0,"div",111),g.Tb(1,"div",112),g.Ob(2,"img",113),g.Sb(),g.Tb(3,"div",114),g.Lc(4),g.Sb(),g.Tb(5,"div",115),g.Tb(6,"button",116),g.ec("click",(function(){g.Ac(t);const e=n.$implicit;return g.ic(3).addCntntToColl(e)})),g.Lc(7,"Add"),g.Sb(),g.Sb(),g.Sb()}if(2&t){const t=n.$implicit;g.Ab(4),g.Nc(" ",t.name," ")}}function et(t,n){if(1&t&&(g.Tb(0,"div"),g.Jc(1,nt,8,1,"div",110),g.Sb()),2&t){const t=g.ic(2);g.Ab(1),g.pc("ngForOf",t.colls)}}function it(t,n){if(1&t&&(g.Tb(0,"div",105),g.Tb(1,"h4",106),g.Lc(2,"Add to Collection"),g.Sb(),g.Tb(3,"button",107),g.ec("click",(function(){return n.$implicit.dismiss("Cross click")})),g.Tb(4,"span",108),g.Lc(5,"\xd7"),g.Sb(),g.Sb(),g.Sb(),g.Tb(6,"div",109),g.Jc(7,tt,1,1,"app-loader",0),g.Jc(8,et,2,1,"div",1),g.Sb()),2&t){const t=g.ic();g.Ab(7),g.pc("ngIf",t.collLoad),g.Ab(1),g.pc("ngIf",!t.collLoad)}}let ct=(()=>{class t{constructor(t,n,e,i,c,o,s,r,l){this.document=t,this.route=n,this.toastr=e,this.modalServ=i,this.cwServ=c,this.viewSDKClient=o,this.fileServ=s,this.colctnSrv=r,this.tokenDataServ=l,this.testArr=[1,2,3,1,1,1,1,1,1,1,1,1],this.defIcon=b.b}ngOnInit(){this.usrInfo=this.tokenDataServ.getUser(),this.routerSubs=this.route.params.subscribe(t=>{this.chkScreenMode(),this.elem=document.documentElement,this.id=t.id,this.initialiseState()})}initialiseState(){"0"!=this.id&&(this.loading=!0,this.isSelPage=!1,this.selPages=[],this.actPage=1,this.leftSide=!1,this.rightSide=!1,this.isFullScreen=!1,this.infoToggle=!0,this.enggToggle=!0,this.tagsToggle=!0,this.colls=[],this.collLoad=!1,this.cmntDisb=!1,this.getCntnt())}getCntnt(){this.cwServ.viewContent(this.id).subscribe(t=>{if(t&&t.result&&t.result.id)switch(this.cntnt=t.result,this.cntnt.contentType){case 1:Array.isArray(this.cntnt.pdfImages)?this.cntnt.pdfImages.sort((t,n)=>t.pageNo-n.pageNo):this.cntnt.pdfImages=[],this.loading=!1,setTimeout(()=>{this.renderPDf()},1e3)}else this.cntnt=null;this.loading=!1},t=>{this.cntnt=null,this.loading=!1})}renderPDf(){this.cntnt.pdfContentPath&&this.viewSDKClient.ready().then(()=>{this.viewSDKClient.previewFile({defConfg:{enableAnnotationAPIs:!1,showDownloadPDF:!1,showLeftHandPanel:!1,showPrintPDF:!1,showAnnotationTools:!1},name:this.cntnt.name,id:this.id,divId:"pdf-div",url:this.cntnt.pdfContentPath})})}goToPage(t){this.actPage=t.pageNo,this.viewSDKClient.goToPage(parseInt(t.pageNo))}addCmnt(t){let n={commentText:this.cmnt,contentId:parseInt(this.id)};this.cmntDisb=!0,this.cwServ.addCmntToContent(n).subscribe(t=>{t?(this.toastr.success(t.message||"Comment added successfully","Success!"),this.cntnt.comments.push({createdByFullName:this.usrInfo&&this.usrInfo.fN?this.usrInfo.fN:"User",createdDate:new Date,commentText:this.cmnt}),this.cmnt=""):this.toastr.error("Unable to add comment","Error!"),this.cmntDisb=!1},t=>{this.cmntDisb=!1})}downloadFile(){this.fileServ.downloadFile(this.cntnt.contentPath,this.cntnt.name)}fullscreenmodes(t){this.chkScreenMode()}chkScreenMode(){this.isFullScreen=!!document.fullscreenElement}openFullscreen(){this.elem.requestFullscreen?this.elem.requestFullscreen():this.elem.mozRequestFullScreen?this.elem.mozRequestFullScreen():this.elem.webkitRequestFullscreen?this.elem.webkitRequestFullscreen():this.elem.msRequestFullscreen&&this.elem.msRequestFullscreen()}closeFullscreen(){this.document.exitFullscreen?this.document.exitFullscreen():this.document.mozCancelFullScreen?this.document.mozCancelFullScreen():this.document.webkitExitFullscreen?this.document.webkitExitFullscreen():this.document.msExitFullscreen&&this.document.msExitFullscreen()}addRemPages(t,n){if(t.checked)this.selPages.push(n.pageNo);else{const t=this.selPages.findIndex(t=>t==n.pageNo);t>=0&&this.selPages.splice(t,1)}}addCntntToColl(t){let n={id:t.id,contents:[],pages:{pageNumbers:[]}};this.isSelPage?(this.selPages.sort((t,n)=>t-n),n.pages={pageNumbers:this.selPages,contentId:parseInt(this.id)}):n.contents.push(parseInt(this.id)),this.collLoad=!0,this.closeLeftSel(),this.colctnSrv.addContentColctn(n).subscribe(t=>{t&&this.toastr.success(t.message||"Content added successfully to collection","Success!"),this.dismissModal(),this.collLoad=!1},t=>{this.dismissModal(),this.collLoad=!1})}closeLeftSel(){this.selPages=[],this.actPage=1,this.leftSide=!1,this.isSelPage=!1}listColct(){this.collLoad=!0,this.colctnSrv.colctnList({pageNo:0}).subscribe(t=>{this.colls=t&&t.result&&Array.isArray(t.result.results)&&t.result.results.length>0?t.result.results:[],this.collLoad=!1},t=>{this.colls=[],this.collLoad=!1})}openModal(t,n){this.listColct(),this.modalServ.open(t,{size:"lg"}).result.then(t=>{},t=>{})}dismissModal(){this.modalServ&&this.modalServ.dismissAll()}ngOnDestroy(){this.routerSubs&&this.routerSubs.unsubscribe(),this.dismissModal()}}return t.\u0275fac=function(n){return new(n||t)(g.Nb(i.d),g.Nb(c.a),g.Nb(h.b),g.Nb(d.f),g.Nb(p.a),g.Nb(u.a),g.Nb(f.a),g.Nb(m.a),g.Nb(S.a))},t.\u0275cmp=g.Hb({type:t,selectors:[["app-view"]],hostBindings:function(t,n){1&t&&g.ec("fullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)("webkitfullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)("mozfullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)("MSFullscreenChange",(function(t){return n.fullscreenmodes(t)}),!1,g.zc)},decls:4,vars:2,consts:[[3,"type",4,"ngIf"],[4,"ngIf"],["addColl",""],[3,"type"],[4,"ngIf","ngIfElse"],["noCntnt",""],["class","heading bg-white w-100 row mx-0",4,"ngIf"],[1,"pdf-view","d-flex","mx-0"],["class","left-body bg-white text-center",4,"ngIf"],[1,"main-body","overflow-auto","w-100"],[1,"h-100",3,"ngSwitch"],["class","h-100",4,"ngSwitchCase"],["class","text-center mt-5 mx-3",4,"ngSwitchCase"],["class","text-center mt-5",4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","right-body bg-white pt-1 pb-3",4,"ngIf"],[1,"heading","bg-white","w-100","row","mx-0"],[1,"col-4","align-self-center"],[1,"col-4","align-self-center","d-flex","justify-content-center"],["class","btn","placement","bottom",3,"ngbTooltip","click",4,"ngIf"],[1,"dropdown"],["type","button","id","moreDD","data-toggle","dropdown",1,"btn"],[1,"fas","fa-ellipsis-h"],["aria-labelledby","moreDD",1,"dropdown-menu"],["class","dropdown-item curs-ptr",3,"click",4,"ngIf"],[1,"dropdown-item","curs-ptr"],[1,"fas","fa-thumbs-up"],["class","dropdown",4,"ngIf"],[1,"col-4","text-right","align-self-center"],["class","btn","ngbTooltip","View in Full Screen",3,"click",4,"ngIf"],["class","btn","ngbTooltip","Exit from Full Screen",3,"click",4,"ngIf"],[1,"btn"],[1,"fas","fa-times"],["placement","left",1,"btn","btn-outline-secondary","right-side-toggle",3,"ngClass","ngbTooltip","click"],["placement","bottom",1,"btn",3,"ngbTooltip","click"],[1,"fas","fa-th-large"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-download"],["type","button","id","addCol","data-toggle","dropdown",1,"btn"],[1,"fas","fa-plus-circle"],["aria-labelledby","addCol",1,"dropdown-menu"],["ngbTooltip","View in Full Screen",1,"btn",3,"click"],[1,"fas","fa-expand-alt"],["ngbTooltip","Exit from Full Screen",1,"btn",3,"click"],[1,"fas","fa-compress-arrows-alt"],[1,"btn","btn-primary","text-white","btn-sm",3,"click"],[1,"col-4","align-self-center","text-right"],[1,"btn","btn-primary","text-white","btn-sm",3,"disabled","click"],[1,"left-body","bg-white","text-center"],[1,"bg-hi-grey","rounded","px-3","py-1","my-3","w-75","text-truncate","w-fit","mx-auto"],["class","d-flex my-3 pl-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"d-flex","my-3","pl-3",3,"ngClass"],["class","align-self-center mb-4",3,"change",4,"ngIf"],[1,"curs-ptr",3,"click"],[1,"thumbnail"],["alt","Thumbnail",1,"w-50",3,"src"],[1,"num","py-1","px-2","mx-auto","mt-1","rounded","w-fit"],[1,"align-self-center","mb-4",3,"change"],[1,"h-100"],["class","h-100",4,"ngIf"],["id","pdf-div",1,"pdf-view"],[1,"text-center","mt-5","mx-3"],["alt","Image",3,"src"],["alt","Url Icon",3,"src"],[1,"text-center","mt-5"],["controls","","controlsList","nodownload","width","720",4,"ngIf"],["controls","","controlsList","nodownload","width","720"],[3,"src"],[1,"right-body","bg-white","pt-1","pb-3"],["label","Details"],[1,"px-3"],[1,"dark-bg-hover","rounded","px-3","py-2","mt-2",3,"click"],["class","pl-3",4,"ngIf"],[1,"dark-bg-hover","rounded","px-3","py-2",3,"click"],["class","pl-3 row mx-0 mt-2",4,"ngIf"],[3,"label"],["class","comment d-flex mt-2",4,"ngFor","ngForOf"],[1,"comment","d-flex","mt-2"],[1,"align-self-center","mx-2"],[1,"rounded-circle","p-1","bg-warning"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Leave a comment","name","cmnt",3,"ngModel","ngModelChange"],[1,"form-group","text-right"],[1,"pl-3"],[1,"mt-2","work-div"],[1,"font-weight-bold","mb-1"],[1,"text-hi-dark-grey"],[1,"author","bg-hi-grey","px-3","py-2","rounded-pill","mt-1"],[1,"bg-warning","rounded-circle","p-1","text-white"],[1,"pl-3","row","mx-0","mt-2"],[1,"col","pl-0"],[1,"h3"],["class","d-inline-flex flex-wrap",4,"ngIf","ngIfElse"],["noCntntTg",""],[1,"d-inline-flex","flex-wrap"],["class","rounded-pill px-3 py-1 bg-hi-grey text-primary mr-2 my-1",4,"ngFor","ngForOf"],[1,"rounded-pill","px-3","py-1","bg-hi-grey","text-primary","mr-2","my-1"],[1,"align-self-center","mr-2"],[1,"rounded-circle","p-2","bg-warning"],[1,"border-bottom","pb-2","w-100"],[1,"user-name"],[1,"date","ml-3","text-hi-grey"],[1,"btn","btn-light","float-right"],[1,"fas","fa-trash-alt"],[1,"comment-text","text-hi-dark-grey"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["ngbAutofocus","",1,"modal-body","min-height-val"],["id","coll-div","class","d-flex border-bottom p-2 dark-bg-hover",4,"ngFor","ngForOf"],["id","coll-div",1,"d-flex","border-bottom","p-2","dark-bg-hover"],[1,"icon","align-self-center","mr-2"],["src","assets/images/discription.png",2,"max-height","50px","width","40px"],[1,"name","align-self-center"],[1,"hover-coll","ml-auto","mr-3"],[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,n){1&t&&(g.Jc(0,v,1,1,"app-loader",0),g.Jc(1,Y,4,2,"div",1),g.Jc(2,it,9,2,"ng-template",null,2,g.Kc)),2&t&&(g.pc("ngIf",n.loading),g.Ab(1),g.pc("ngIf",!n.loading))},directives:[i.m,T.a,i.n,i.o,i.p,i.k,d.n,i.l,s.a,r.b,r.a,l.c,l.g,a.b,o.c,o.m,o.p],pipes:[i.e],styles:[".heading[_ngcontent-%COMP%]{height:50px;min-height:10vh;box-shadow:0 0 6px rgba(0,0,0,.4);z-index:1;position:relative}.heading[_ngcontent-%COMP%]   .right-side-toggle[_ngcontent-%COMP%]{position:absolute;right:21px;bottom:-47px}.heading[_ngcontent-%COMP%]   .right-side-toggle.pdfView[_ngcontent-%COMP%]{position:absolute;right:21px;bottom:-88px}.left-body[_ngcontent-%COMP%], .main-body[_ngcontent-%COMP%], .right-body[_ngcontent-%COMP%]{min-height:90vh;max-height:90vh;overflow-y:auto}.left-body[_ngcontent-%COMP%]{min-width:250px;width:250px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:186px}@media (min-width:1500px){.left-body[_ngcontent-%COMP%]{min-width:350px;width:350px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:286px}}@media (max-width:1140px){.left-body[_ngcontent-%COMP%]{min-width:200px;width:200px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:138px}}.right-body[_ngcontent-%COMP%]{min-width:500px;width:500px}@media (max-width:1140px){.right-body[_ngcontent-%COMP%]{min-width:400px;width:400px}}.right-body[_ngcontent-%COMP%]   .bg-warning.text-white[_ngcontent-%COMP%]{font-size:.8rem;background-color:#cc4a00!important}.right-body[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{font-size:14px}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s linear}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]:hover   .user-name[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{opacity:1}.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:2px solid #969696}.active[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{background-color:#969696;color:#fff}.hover-coll[_ngcontent-%COMP%]{opacity:0}#coll-div[_ngcontent-%COMP%]:hover   .hover-coll[_ngcontent-%COMP%]{opacity:1}"]}),t})();var ot=e("zJym");const st=[{path:"",component:ct}];let rt=(()=>{class t{}return t.\u0275mod=g.Lb({type:t}),t.\u0275inj=g.Kb({factory:function(n){return new(n||t)},providers:[p.a,f.a,m.a],imports:[[i.c,c.h.forChild(st),o.h,o.s,ot.a,s.b,d.o,r.e,l.e,a.c]]}),t})()}}]);