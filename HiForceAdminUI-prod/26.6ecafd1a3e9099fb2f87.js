(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{s0Cq:function(t,n,e){"use strict";e.d(n,"h",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"k",(function(){return l})),e.d(n,"g",(function(){return b})),e.d(n,"j",(function(){return a})),e.d(n,"a",(function(){return r})),e.d(n,"i",(function(){return d})),e.d(n,"e",(function(){return g})),e.d(n,"f",(function(){return s})),e.d(n,"d",(function(){return f}));const c=[10,20,30],i="assets/images/def-img.png",o="assets/images/def-icon.png",s="assets/images/folderIcon.png",l=["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],b=[{v:1,n:"All Users"},{v:2,n:"Selected Workspaces"},{v:3,n:"Selected User Groups"}];var a=function(t){return t[t.Admin=2]="Admin",t[t.User=3]="User",t}({}),d=function(t){return t[t.English=1]="English",t[t.German=2]="German",t[t.French=3]="French",t[t.Spanish=4]="Spanish",t[t.Dutch=5]="Dutch",t[t.Italian=6]="Italian",t[t.Japanese=7]="Japanese",t[t["Chinese(China)"]=8]="Chinese(China)",t}({}),r=function(t){return t[t.Sent=1]="Sent",t[t.Scheduled=2]="Scheduled",t[t.Archived=3]="Archived",t}({}),g=function(t){return t[t.Document=1]="Document",t[t.Photo=2]="Photo",t[t.URL=3]="URL",t[t.Video=4]="Video",t}({});const f=[".jpeg",".png",".jpg",".mp4",".xls",".xlsx",".ppt",".pptx",".doc",".docx",".pdf"]},sNI4:function(t,n,e){"use strict";e.r(n),e.d(n,"ViewModule",(function(){return lt}));var c=e("ofXK"),i=e("tyNb"),o=e("3Pt+"),s=e("bSwM"),l=e("wZkO"),b=e("kmnG"),a=e("qFsG"),d=e("1kSV"),r=e("c2Mc"),g=e("TNUc"),f=e("fXoL"),u=e("5eHb"),h=e("OraM"),m=e("dtd+"),p=e("CrrK"),S=e("CFzk"),v=e("p0iN"),T=e("668k");function w(t,n){1&t&&f.Ob(0,"app-loader",2),2&t&&f.pc("type","page")}function x(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",33),f.ec("click",(function(){f.Bc(t);const n=f.ic(4);return n.leftSide=!n.leftSide})),f.Ob(1,"i",34),f.Sb()}if(2&t){const t=f.ic(4);f.qc("ngbTooltip",t.leftSide?"Hide Pages":"Show Pages")}}function M(t,n){if(1&t){const t=f.Ub();f.Tb(0,"button",35),f.ec("click",(function(){return f.Bc(t),f.ic(4).downloadFile()})),f.Ob(1,"i",36),f.Mc(2,"Download"),f.Sb()}}function C(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",19),f.Tb(1,"button",37),f.Ob(2,"i",38),f.Sb(),f.Tb(3,"div",39),f.Tb(4,"button",35),f.ec("click",(function(){return f.Bc(t),f.ic(4).cmnModal("addToCollection")})),f.Mc(5,"Entire Document"),f.Sb(),f.Tb(6,"button",35),f.ec("click",(function(){f.Bc(t);const n=f.ic(4);return n.leftSide=!0,n.isSelPage=!0})),f.Mc(7,"Select Pages"),f.Sb(),f.Sb(),f.Sb()}}function y(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",40),f.ec("click",(function(){return f.Bc(t),f.ic(4).openFullscreen()})),f.Ob(1,"i",41),f.Sb()}}function P(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",42),f.ec("click",(function(){return f.Bc(t),f.ic(4).closeFullscreen()})),f.Ob(1,"i",43),f.Sb()}}const O=function(t){return{pdfView:t}};function I(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",15),f.Tb(1,"div",16),f.Mc(2),f.Sb(),f.Tb(3,"div",17),f.Kc(4,x,2,1,"div",18),f.Tb(5,"div",19),f.Tb(6,"button",20),f.Ob(7,"i",21),f.Sb(),f.Tb(8,"div",22),f.Kc(9,M,3,0,"button",23),f.Tb(10,"button",24),f.Ob(11,"i",25),f.Mc(12,"Like"),f.Sb(),f.Sb(),f.Sb(),f.Kc(13,C,8,0,"div",26),f.Sb(),f.Tb(14,"div",27),f.Kc(15,y,2,0,"div",28),f.Kc(16,P,2,0,"div",29),f.Tb(17,"div",30),f.ec("click",(function(){return f.Bc(t),f.ic(3).goBack()})),f.Ob(18,"i",31),f.Sb(),f.Sb(),f.Tb(19,"div",32),f.ec("click",(function(){f.Bc(t);const n=f.ic(3);return n.rightSide=!n.rightSide})),f.Ob(20,"i"),f.Sb(),f.Sb()}if(2&t){const t=f.ic(3);f.Ab(2),f.Nc(t.cntnt.name),f.Ab(2),f.pc("ngIf",1==t.cntnt.contentType),f.Ab(5),f.pc("ngIf",t.cntnt.contentPath),f.Ab(4),f.pc("ngIf",1==t.cntnt.contentType),f.Ab(2),f.pc("ngIf",!t.isFullScreen),f.Ab(1),f.pc("ngIf",t.isFullScreen),f.Ab(3),f.qc("ngbTooltip",t.rightSide?"Hide Detailed Section":"Show Detailed Section"),f.pc("ngClass",f.tc(11,O,1==t.cntnt.contentType)),f.Ab(1),f.Db("fas fa-angle-double-",t.rightSide?"right":"left","")}}function A(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",15),f.Tb(1,"div",16),f.Tb(2,"button",44),f.ec("click",(function(){return f.Bc(t),f.ic(3).closeLeftSel()})),f.Mc(3,"Cancel"),f.Sb(),f.Sb(),f.Tb(4,"div",17),f.Mc(5),f.Sb(),f.Tb(6,"div",45),f.Tb(7,"button",46),f.ec("click",(function(){return f.Bc(t),f.ic(3).cmnModal("addToCollection")})),f.Mc(8,"Add"),f.Sb(),f.Sb(),f.Sb()}if(2&t){const t=f.ic(3);f.Ab(5),f.Nc(t.cntnt.name),f.Ab(2),f.pc("disabled",!t.selPages||t.selPages&&t.selPages.length<=0)}}function k(t,n){if(1&t){const t=f.Ub();f.Tb(0,"mat-checkbox",56),f.ec("change",(function(n){f.Bc(t);const e=f.ic().$implicit;return f.ic(4).addRemPages(n,e)})),f.Sb()}}const F=function(t){return{active:t}};function _(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",50),f.Kc(1,k,1,0,"mat-checkbox",51),f.Tb(2,"div",52),f.ec("click",(function(){f.Bc(t);const e=n.$implicit;return f.ic(4).goToPage(e)})),f.Tb(3,"div",53),f.Ob(4,"img",54),f.Sb(),f.Tb(5,"div",55),f.Mc(6),f.Sb(),f.Sb(),f.Sb()}if(2&t){const t=n.$implicit,e=f.ic(4);f.pc("ngClass",f.tc(4,F,e.actPage==t.pageNo)),f.Ab(1),f.pc("ngIf",e.isSelPage),f.Ab(3),f.pc("src",e.getImg(t,"icon"),f.Dc),f.Ab(2),f.Nc(t.pageNo)}}function D(t,n){1&t&&(f.Tb(0,"div"),f.Mc(1," No thumbnail available "),f.Sb())}function N(t,n){if(1&t&&(f.Tb(0,"div",47),f.Tb(1,"div",48),f.Mc(2),f.Sb(),f.Kc(3,_,7,6,"div",49),f.Kc(4,D,2,0,"div",1),f.Sb()),2&t){const t=f.ic(3);f.Ab(2),f.Nc(t.cntnt.name),f.Ab(1),f.pc("ngForOf",t.cntnt.pdfImages),f.Ab(1),f.pc("ngIf",t.cntnt.pdfImages.length<=0)}}function K(t,n){1&t&&(f.Tb(0,"div",57),f.Ob(1,"div",60),f.Sb())}function U(t,n){1&t&&(f.Tb(0,"div",61),f.Mc(1,"No pdf found"),f.Sb())}function B(t,n){if(1&t&&(f.Tb(0,"div",57),f.Kc(1,K,2,0,"div",58),f.Kc(2,U,2,0,"div",59),f.Sb()),2&t){const t=f.ic(3);f.Ab(1),f.pc("ngIf",t.cntnt.pdf),f.Ab(1),f.pc("ngIf",!t.cntnt.pdf)}}function E(t,n){if(1&t&&(f.Tb(0,"div",62),f.Ob(1,"img",63),f.Sb()),2&t){const t=f.ic(3);f.Ab(1),f.pc("src",t.getImg(t.cntnt,"icon"),f.Dc)}}function z(t,n){if(1&t&&(f.Tb(0,"div"),f.Mc(1),f.Sb()),2&t){const t=f.ic(5);f.Ab(1),f.Nc(t.cntnt.name)}}function L(t,n){if(1&t&&(f.Tb(0,"a",66),f.Ob(1,"img",67),f.Kc(2,z,2,1,"div",1),f.Sb()),2&t){const t=f.ic(4);f.pc("href",t.cntnt.url,f.Dc),f.Ab(1),f.pc("src",t.getImg(t.cntnt,"icon"),f.Dc),f.Ab(1),f.pc("ngIf",!t.cntnt.hideLabelInWorkspace)}}function q(t,n){1&t&&f.Mc(0,"No url available")}function R(t,n){if(1&t&&(f.Tb(0,"div",62),f.Kc(1,L,3,3,"a",64),f.Kc(2,q,1,0,"ng-template",null,65,f.Lc),f.Sb()),2&t){const t=f.xc(3),n=f.ic(3);f.Ab(1),f.pc("ngIf",n.cntnt.url)("ngIfElse",t)}}function j(t,n){if(1&t&&(f.Tb(0,"video",70),f.Ob(1,"source",71),f.Mc(2," Your browser does not support the video player. "),f.Sb()),2&t){const t=f.ic(4);f.Ab(1),f.pc("src",t.cntnt.contentPath,f.Dc)}}function V(t,n){if(1&t&&(f.Tb(0,"div",68),f.Kc(1,j,3,1,"video",69),f.Sb()),2&t){const t=f.ic(3);f.Ab(1),f.pc("ngIf",t.cntnt.contentPath)}}function H(t,n){1&t&&(f.Tb(0,"div"),f.Mc(1,"Not a valid content"),f.Sb())}function G(t,n){if(1&t&&(f.Tb(0,"div",87),f.Tb(1,"div",88),f.Tb(2,"div",89),f.Mc(3," Updated on "),f.Sb(),f.Tb(4,"div",90),f.Mc(5),f.jc(6,"date"),f.Sb(),f.Sb(),f.Tb(7,"div",88),f.Tb(8,"div",89),f.Mc(9," Authors "),f.Sb(),f.Tb(10,"div",90),f.Tb(11,"div",91),f.Tb(12,"span",92),f.Mc(13,"AD"),f.Sb(),f.Mc(14," Andrea D'Souza "),f.Sb(),f.Sb(),f.Sb(),f.Sb()),2&t){const t=f.ic(4);f.Ab(5),f.Oc(" ",f.lc(6,1,t.cntnt.updatedDate,"dd MMM, yyyy HH:mm")||"N/A"," ")}}function J(t,n){1&t&&(f.Tb(0,"div",93),f.Tb(1,"div",94),f.Tb(2,"div",95),f.Mc(3,"17"),f.Sb(),f.Tb(4,"span"),f.Mc(5,"Total in app views"),f.Sb(),f.Sb(),f.Tb(6,"div",94),f.Tb(7,"div",95),f.Mc(8,"4"),f.Sb(),f.Tb(9,"span"),f.Mc(10,"Total customer shares"),f.Sb(),f.Sb(),f.Tb(11,"div",94),f.Tb(12,"div",95),f.Mc(13,"27s"),f.Sb(),f.Tb(14,"span"),f.Mc(15,"Avg. customer view time"),f.Sb(),f.Sb(),f.Sb())}function $(t,n){if(1&t&&(f.Tb(0,"div",100),f.Mc(1),f.Sb()),2&t){const t=n.$implicit;f.Ab(1),f.Oc(" ",t.tagName," ")}}function W(t,n){if(1&t&&(f.Tb(0,"div",98),f.Kc(1,$,2,1,"div",99),f.Sb()),2&t){const t=f.ic(5);f.Ab(1),f.pc("ngForOf",t.cntnt.contentTags)}}function X(t,n){1&t&&(f.Tb(0,"div"),f.Mc(1,"No Tags"),f.Sb())}function Y(t,n){if(1&t&&(f.Tb(0,"div",93),f.Kc(1,W,2,1,"div",96),f.Kc(2,X,2,0,"ng-template",null,97,f.Lc),f.Sb()),2&t){const t=f.xc(3),n=f.ic(4);f.Ab(1),f.pc("ngIf",n.cntnt.contentTags&&n.cntnt.contentTags.length>0)("ngIfElse",t)}}function Z(t,n){if(1&t&&(f.Tb(0,"div",81),f.Tb(1,"div",101),f.Tb(2,"span",102),f.Mc(3,"TU"),f.Sb(),f.Sb(),f.Tb(4,"div",103),f.Tb(5,"div",104),f.Mc(6),f.Tb(7,"span",105),f.Mc(8),f.jc(9,"date"),f.Sb(),f.Tb(10,"div",106),f.Ob(11,"i",107),f.Sb(),f.Sb(),f.Tb(12,"div",108),f.Mc(13),f.Sb(),f.Sb(),f.Sb()),2&t){const t=n.$implicit;f.Ab(6),f.Oc(" ",t.createdByFullName," "),f.Ab(2),f.Nc(f.lc(9,3,t.createdDate,"dd MMM, yyyy")||"N/A"),f.Ab(5),f.Nc(t.commentText||"N/A")}}function Q(t,n){1&t&&f.Ob(0,"app-loader",2),2&t&&f.pc("type","btn")}function tt(t,n){if(1&t){const t=f.Ub();f.Tb(0,"div",72),f.Tb(1,"mat-tab-group"),f.Tb(2,"mat-tab",73),f.Tb(3,"div",74),f.Tb(4,"div",75),f.ec("click",(function(){f.Bc(t);const n=f.ic(3);return n.infoToggle=!n.infoToggle})),f.Mc(5," Info "),f.Ob(6,"i"),f.Sb(),f.Kc(7,G,15,4,"div",76),f.Ob(8,"hr"),f.Tb(9,"div",77),f.ec("click",(function(){f.Bc(t);const n=f.ic(3);return n.enggToggle=!n.enggToggle})),f.Mc(10," Engagement "),f.Ob(11,"i"),f.Sb(),f.Kc(12,J,16,0,"div",78),f.Ob(13,"hr"),f.Tb(14,"div",77),f.ec("click",(function(){f.Bc(t);const n=f.ic(3);return n.tagsToggle=!n.tagsToggle})),f.Mc(15," Tags "),f.Ob(16,"i"),f.Sb(),f.Kc(17,Y,4,2,"div",78),f.Sb(),f.Sb(),f.Tb(18,"mat-tab",79),f.Tb(19,"div",74),f.Kc(20,Z,14,6,"div",80),f.Tb(21,"div",81),f.Tb(22,"div",82),f.Tb(23,"span",83),f.Mc(24,"TU"),f.Sb(),f.Sb(),f.Tb(25,"mat-form-field",84),f.Tb(26,"mat-label"),f.Mc(27,"Leave a comment"),f.Sb(),f.Tb(28,"textarea",85),f.ec("ngModelChange",(function(n){return f.Bc(t),f.ic(3).cmnt=n})),f.Sb(),f.Sb(),f.Sb(),f.Tb(29,"div",86),f.Tb(30,"button",46),f.ec("click",(function(){return f.Bc(t),f.ic(3).addCmnt("cmnt")})),f.Kc(31,Q,1,1,"app-loader",0),f.Mc(32," Submit "),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb(),f.Sb()}if(2&t){const t=f.ic(3);f.Ab(6),f.Db("fa fa-chevron-",t.infoToggle?"up":"down"," float-right mt-1"),f.Ab(1),f.pc("ngIf",t.infoToggle),f.Ab(4),f.Db("fa fa-chevron-",t.enggToggle?"up":"down"," float-right mt-1"),f.Ab(1),f.pc("ngIf",t.enggToggle),f.Ab(4),f.Db("fa fa-chevron-",t.tagsToggle?"up":"down"," float-right mt-1"),f.Ab(1),f.pc("ngIf",t.tagsToggle),f.Ab(1),f.rc("label","Comments (",t.cntnt.comments&&t.cntnt.comments.length?t.cntnt.comments.length:0,")"),f.Ab(2),f.pc("ngForOf",t.cntnt.comments),f.Ab(8),f.pc("ngModel",t.cmnt),f.Ab(2),f.pc("disabled",t.cmntDisb||!t.cmnt),f.Ab(1),f.pc("ngIf",t.cmntDisb)}}function nt(t,n){if(1&t&&(f.Tb(0,"div"),f.Kc(1,I,21,13,"div",5),f.Kc(2,A,9,2,"div",5),f.Tb(3,"div",6),f.Kc(4,N,5,3,"div",7),f.Tb(5,"div",8),f.Tb(6,"div",9),f.Kc(7,B,3,2,"div",10),f.Kc(8,E,2,1,"div",11),f.Kc(9,R,4,2,"div",11),f.Kc(10,V,2,1,"div",12),f.Kc(11,H,2,0,"div",13),f.Sb(),f.Sb(),f.Kc(12,tt,33,17,"div",14),f.Sb(),f.Sb()),2&t){const t=f.ic(2);f.Ab(1),f.pc("ngIf",!t.isSelPage),f.Ab(1),f.pc("ngIf",t.isSelPage),f.Ab(2),f.pc("ngIf",1==t.cntnt.contentType&&t.leftSide),f.Ab(2),f.pc("ngSwitch",t.cntnt.contentType),f.Ab(1),f.pc("ngSwitchCase",1),f.Ab(1),f.pc("ngSwitchCase",2),f.Ab(1),f.pc("ngSwitchCase",3),f.Ab(1),f.pc("ngSwitchCase",4),f.Ab(2),f.pc("ngIf",t.rightSide)}}function et(t,n){1&t&&f.Mc(0," No Content found ")}function ct(t,n){if(1&t&&(f.Tb(0,"div"),f.Kc(1,nt,13,9,"div",3),f.Kc(2,et,1,0,"ng-template",null,4,f.Lc),f.Sb()),2&t){const t=f.xc(3),n=f.ic();f.Ab(1),f.pc("ngIf",n.cntnt)("ngIfElse",t)}}let it=(()=>{class t{constructor(t,n,e,c,i,o,s,l,b,a){this.document=t,this.route=n,this.toastr=e,this.modalServ=c,this.cwServ=i,this.viewSDKClient=o,this.fileServ=s,this.colctnSrv=l,this.tokenDataServ=b,this.loc=a,this.testArr=[1,2,3,1,1,1,1,1,1,1,1,1]}ngOnInit(){this.usrInfo=this.tokenDataServ.getUser(),this.routerSubs=this.route.params.subscribe(t=>{this.chkScreenMode(),this.elem=document.documentElement,this.id=t.id,this.initialiseState()})}initialiseState(){"0"!=this.id&&(this.loading=!0,this.isSelPage=!1,this.selPages=[],this.actPage=1,this.leftSide=!1,this.rightSide=!1,this.isFullScreen=!1,this.infoToggle=!0,this.enggToggle=!0,this.tagsToggle=!0,this.cmntDisb=!1,this.getCntnt())}cmnModal(t){"addToCollection"==t&&(this.modalServ.open(g.a,{size:"lg"}).componentInstance.data=Object.assign(Object.assign({},this.cntnt),{type:"view",pageNo:this.selPages}))}getCntnt(){this.cwServ.viewContent(this.id).subscribe(t=>{if(t&&t.result&&t.result.id)switch(this.cntnt=t.result,this.cntnt.contentType){case 1:Array.isArray(this.cntnt.pdfImages)?this.cntnt.pdfImages.sort((t,n)=>t.pageNo-n.pageNo):this.cntnt.pdfImages=[],this.cntnt.pdf=4==this.cntnt.documentType?this.cntnt.contentPath:this.cntnt.pdfContentPath,this.loading=!1,setTimeout(()=>{this.renderPDf()},1e3)}else this.cntnt=null;this.loading=!1},t=>{this.cntnt=null,this.loading=!1})}renderPDf(){this.cntnt.pdf&&this.viewSDKClient.ready().then(()=>{this.viewSDKClient.previewFile({defConfg:{enableAnnotationAPIs:!1,showDownloadPDF:!1,showLeftHandPanel:!1,showPrintPDF:!1,showAnnotationTools:!1},name:this.cntnt.name,id:this.id,divId:"pdf-div",url:this.cntnt.pdf})})}goToPage(t){this.actPage=t.pageNo,this.viewSDKClient.goToPage(parseInt(t.pageNo))}addCmnt(t){let n={commentText:this.cmnt,contentId:parseInt(this.id)};this.cmntDisb=!0,this.cwServ.addCmntToContent(n).subscribe(t=>{t?(this.toastr.success(t.message||"Comment added successfully","Success!"),this.cntnt.comments.push({createdByFullName:this.usrInfo&&this.usrInfo.fN?this.usrInfo.fN:"User",createdDate:new Date,commentText:this.cmnt}),this.cmnt=""):this.toastr.error("Unable to add comment","Error!"),this.cmntDisb=!1},t=>{this.cmntDisb=!1})}downloadFile(){this.fileServ.downloadFile(this.cntnt.contentPath,this.cntnt.name)}fullscreenmodes(t){this.chkScreenMode()}chkScreenMode(){this.isFullScreen=!!document.fullscreenElement}openFullscreen(){this.elem.requestFullscreen?this.elem.requestFullscreen():this.elem.mozRequestFullScreen?this.elem.mozRequestFullScreen():this.elem.webkitRequestFullscreen?this.elem.webkitRequestFullscreen():this.elem.msRequestFullscreen&&this.elem.msRequestFullscreen()}closeFullscreen(){this.document.exitFullscreen?this.document.exitFullscreen():this.document.mozCancelFullScreen?this.document.mozCancelFullScreen():this.document.webkitExitFullscreen?this.document.webkitExitFullscreen():this.document.msExitFullscreen&&this.document.msExitFullscreen()}addRemPages(t,n){if(t.checked)this.selPages.push(n.pageNo);else{const t=this.selPages.findIndex(t=>t==n.pageNo);t>=0&&this.selPages.splice(t,1)}}closeLeftSel(){this.selPages=[],this.actPage=1,this.leftSide=!1,this.isSelPage=!1}getImg(t,n=""){return r.a.getImg(t,n)}goBack(){this.loc.back()}dismissModal(){this.modalServ&&this.modalServ.dismissAll()}ngOnDestroy(){this.routerSubs&&this.routerSubs.unsubscribe(),this.dismissModal()}}return t.\u0275fac=function(n){return new(n||t)(f.Nb(c.d),f.Nb(i.a),f.Nb(u.b),f.Nb(d.h),f.Nb(h.a),f.Nb(m.a),f.Nb(p.a),f.Nb(S.a),f.Nb(v.a),f.Nb(c.i))},t.\u0275cmp=f.Hb({type:t,selectors:[["app-view"]],hostBindings:function(t,n){1&t&&f.ec("fullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,f.zc)("webkitfullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,f.zc)("mozfullscreenchange",(function(t){return n.fullscreenmodes(t)}),!1,f.zc)("MSFullscreenChange",(function(t){return n.fullscreenmodes(t)}),!1,f.zc)},decls:2,vars:2,consts:[[3,"type",4,"ngIf"],[4,"ngIf"],[3,"type"],[4,"ngIf","ngIfElse"],["noCntnt",""],["class","heading bg-white w-100 row mx-0",4,"ngIf"],[1,"pdf-view","d-flex","mx-0"],["class","left-body bg-white text-center",4,"ngIf"],[1,"main-body","overflow-auto","w-100"],[1,"h-100",3,"ngSwitch"],["class","h-100",4,"ngSwitchCase"],["class","text-center mt-5 mx-3",4,"ngSwitchCase"],["class","text-center mt-5",4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","right-body bg-white pt-1 pb-3",4,"ngIf"],[1,"heading","bg-white","w-100","row","mx-0"],[1,"col-4","align-self-center"],[1,"col-4","align-self-center","d-flex","justify-content-center"],["class","btn btn-lg","placement","bottom",3,"ngbTooltip","click",4,"ngIf"],[1,"dropdown"],["type","button","id","moreDD","data-toggle","dropdown",1,"btn","btn-lg"],[1,"fas","fa-ellipsis-h"],["aria-labelledby","moreDD",1,"dropdown-menu"],["class","dropdown-item curs-ptr",3,"click",4,"ngIf"],[1,"dropdown-item","curs-ptr"],[1,"fas","fa-thumbs-up"],["class","dropdown",4,"ngIf"],[1,"col-4","text-right","align-self-center"],["class","btn btn-lg","ngbTooltip","View in Full Screen",3,"click",4,"ngIf"],["class","btn btn-lg","ngbTooltip","Exit from Full Screen",3,"click",4,"ngIf"],[1,"btn","btn-lg",3,"click"],[1,"fas","fa-times"],["placement","left",1,"btn","btn-outline-secondary","right-side-toggle",3,"ngClass","ngbTooltip","click"],["placement","bottom",1,"btn","btn-lg",3,"ngbTooltip","click"],[1,"fas","fa-th-large"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-download"],["type","button","id","addCol","data-toggle","dropdown",1,"btn","btn-lg"],[1,"fas","fa-plus-circle"],["aria-labelledby","addCol",1,"dropdown-menu"],["ngbTooltip","View in Full Screen",1,"btn","btn-lg",3,"click"],[1,"fas","fa-expand-alt"],["ngbTooltip","Exit from Full Screen",1,"btn","btn-lg",3,"click"],[1,"fas","fa-compress-arrows-alt"],[1,"btn","btn-primary","text-white","btn-sm",3,"click"],[1,"col-4","align-self-center","text-right"],[1,"btn","btn-primary","text-white","btn-sm",3,"disabled","click"],[1,"left-body","bg-white","text-center"],[1,"bg-hi-grey","rounded","px-3","py-1","my-3","w-75","text-truncate","w-fit","mx-auto"],["class","d-flex my-3 pl-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"d-flex","my-3","pl-3",3,"ngClass"],["class","align-self-center mb-4",3,"change",4,"ngIf"],[1,"curs-ptr",3,"click"],[1,"thumbnail"],["alt","Thumbnail",1,"w-50",3,"src"],[1,"num","py-1","px-2","mx-auto","mt-1","rounded","w-fit"],[1,"align-self-center","mb-4",3,"change"],[1,"h-100"],["class","h-100",4,"ngIf"],["class","text-center pt-5",4,"ngIf"],["id","pdf-div",1,"pdf-view"],[1,"text-center","pt-5"],[1,"text-center","mt-5","mx-3"],["alt","Image",3,"src"],["target","_blank",3,"href",4,"ngIf","ngIfElse"],["noUrl",""],["target","_blank",3,"href"],["alt","Url Icon",3,"src"],[1,"text-center","mt-5"],["controls","","controlsList","nodownload","width","720",4,"ngIf"],["controls","","controlsList","nodownload","width","720"],[3,"src"],[1,"right-body","bg-white","pt-1","pb-3"],["label","Details"],[1,"px-3"],[1,"dark-bg-hover","rounded","px-3","py-2","mt-2",3,"click"],["class","pl-3",4,"ngIf"],[1,"dark-bg-hover","rounded","px-3","py-2",3,"click"],["class","pl-3 row mx-0 mt-2",4,"ngIf"],[3,"label"],["class","comment d-flex mt-2",4,"ngFor","ngForOf"],[1,"comment","d-flex","mt-2"],[1,"align-self-center","mx-2"],[1,"rounded-circle","p-1","bg-warning"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Leave a comment","name","cmnt","maxlength","500","required","",3,"ngModel","ngModelChange"],[1,"form-group","text-right"],[1,"pl-3"],[1,"mt-2","work-div"],[1,"font-weight-bold","mb-1"],[1,"text-hi-dark-grey"],[1,"author","bg-hi-grey","px-3","py-2","rounded-pill","mt-1"],[1,"bg-warning","rounded-circle","p-1","text-white"],[1,"pl-3","row","mx-0","mt-2"],[1,"col","pl-0"],[1,"h3"],["class","d-inline-flex flex-wrap",4,"ngIf","ngIfElse"],["noCntntTg",""],[1,"d-inline-flex","flex-wrap"],["class","rounded-pill px-3 py-1 bg-hi-grey text-primary mr-2 my-1",4,"ngFor","ngForOf"],[1,"rounded-pill","px-3","py-1","bg-hi-grey","text-primary","mr-2","my-1"],[1,"align-self-center","mr-2"],[1,"rounded-circle","p-2","bg-warning"],[1,"border-bottom","pb-2","w-100"],[1,"user-name"],[1,"date","ml-3","text-hi-grey"],[1,"btn","btn-light","float-right"],[1,"fas","fa-trash-alt"],[1,"comment-text","text-hi-dark-grey"]],template:function(t,n){1&t&&(f.Kc(0,w,1,1,"app-loader",0),f.Kc(1,ct,4,2,"div",1)),2&t&&(f.pc("ngIf",n.loading),f.Ab(1),f.pc("ngIf",!n.loading))},directives:[c.m,T.a,c.n,c.o,c.p,c.k,d.q,c.l,s.a,l.b,l.a,b.c,b.g,a.b,o.c,o.i,o.t,o.m,o.p],pipes:[c.e],styles:[".heading[_ngcontent-%COMP%]{height:50px;min-height:10vh;box-shadow:0 0 6px rgba(0,0,0,.4);z-index:1;position:relative}.heading[_ngcontent-%COMP%]   .right-side-toggle[_ngcontent-%COMP%]{position:absolute;right:21px;bottom:-47px}.heading[_ngcontent-%COMP%]   .right-side-toggle.pdfView[_ngcontent-%COMP%]{position:absolute;right:21px;bottom:-88px}.left-body[_ngcontent-%COMP%], .main-body[_ngcontent-%COMP%], .right-body[_ngcontent-%COMP%]{min-height:90vh;max-height:90vh;overflow-y:auto}.left-body[_ngcontent-%COMP%]{min-width:250px;width:250px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:186px}@media (min-width:1500px){.left-body[_ngcontent-%COMP%]{min-width:350px;width:350px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:286px}}@media (max-width:1140px){.left-body[_ngcontent-%COMP%]{min-width:200px;width:200px}.left-body[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{width:138px}}.right-body[_ngcontent-%COMP%]{min-width:500px;width:500px}@media (max-width:1140px){.right-body[_ngcontent-%COMP%]{min-width:400px;width:400px}}.right-body[_ngcontent-%COMP%]   .bg-warning.text-white[_ngcontent-%COMP%]{font-size:.8rem;background-color:#cc4a00!important}.right-body[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{font-size:14px}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{opacity:0;transition:opacity .5s linear}.right-body[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]:hover   .user-name[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{opacity:1}.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:2px solid #969696}.active[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{background-color:#969696;color:#fff}.hover-coll[_ngcontent-%COMP%]{opacity:0}#coll-div[_ngcontent-%COMP%]:hover   .hover-coll[_ngcontent-%COMP%]{opacity:1}.main-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:720px}@media (max-width:992px){.main-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:480px}}"]}),t})();var ot=e("zJym");const st=[{path:"",component:it}];let lt=(()=>{class t{}return t.\u0275mod=f.Lb({type:t}),t.\u0275inj=f.Kb({factory:function(n){return new(n||t)},providers:[h.a,p.a,S.a],imports:[[c.c,i.h.forChild(st),o.h,o.s,ot.a,s.b,d.r,l.f,b.e,a.c]]}),t})()}}]);