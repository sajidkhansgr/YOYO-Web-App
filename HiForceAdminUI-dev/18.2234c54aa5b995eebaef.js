(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{okY7:function(t,i,e){"use strict";e.r(i),e.d(i,"FileModule",(function(){return xt}));var c=e("ofXK"),n=e("tyNb"),r=e("3Pt+"),s=e("bSwM"),l=e("kmnG"),a=e("qFsG"),o=e("Qu3c"),d=e("1jcm"),b=e("QibW"),f=e("IJgu"),p=e("OQ+D"),u=e("E/a4"),m=e("TNUc"),h=e("c2Mc"),g=e("s0Cq"),S=e("fXoL"),v=e("1kSV"),T=e("5eHb"),y=e("0IaG"),M=e("FGg4"),F=e("k8Mo"),k=e("668k"),O=e("WoM1");const x=function(t,i){return{"fa-list-ul":t,"fa-th-large":i}};function A(t,i){if(1&t){const t=S.Ub();S.Tb(0,"i",33),S.ec("click",(function(){S.Bc(t);const i=S.ic();return i.view=!i.view})),S.Sb()}if(2&t){const t=S.ic();S.qc("matTooltip",t.view?"List View":"Grid View"),S.pc("ngClass",S.uc(2,x,t.view,!t.view))}}function I(t,i){if(1&t){const t=S.Ub();S.Tb(0,"span",39),S.ec("click",(function(){S.Bc(t);const i=S.ic().$implicit;return S.ic(2).navgToFldr(i)})),S.Mc(1),S.Sb()}if(2&t){const t=S.ic().$implicit;S.Ab(1),S.Oc(" ",t.name," ")}}function w(t,i){if(1&t&&(S.Tb(0,"span"),S.Mc(1),S.Sb()),2&t){const t=S.ic().$implicit;S.Ab(1),S.Nc(t.name)}}function C(t,i){if(1&t&&(S.Tb(0,"li",37),S.Kc(1,I,2,1,"span",38),S.Kc(2,w,2,1,"span",27),S.Sb()),2&t){const t=i.last;S.Ab(1),S.pc("ngIf",!t),S.Ab(1),S.pc("ngIf",t)}}function D(t,i){if(1&t&&(S.Tb(0,"nav",34),S.Tb(1,"ol",35),S.Kc(2,C,3,2,"li",36),S.Sb(),S.Sb()),2&t){const t=S.ic();S.Ab(2),S.pc("ngForOf",t.navg)}}function B(t,i){1&t&&S.Ob(0,"app-loader",41),2&t&&S.pc("type","page")}const K=function(t,i){return{"fa-sort-up align-bottom":t,"fa-sort-down align-top":i}};function $(t,i){if(1&t){const t=S.Ub();S.Tb(0,"span",50),S.ec("click",(function(){S.Bc(t);const e=i.$implicit,c=i.index;return S.ic(4).sortChange(e,c)})),S.Mc(1),S.Ob(2,"i",51),S.Sb()}if(2&t){const t=i.$implicit;S.Ab(1),S.Oc(" ",t.n,""),S.Ab(1),S.pc("ngClass",S.uc(2,K,t.asc,!t.asc))}}function N(t,i){if(1&t&&(S.Tb(0,"div",48),S.Mc(1," Sort by: "),S.Kc(2,$,3,5,"span",49),S.Sb()),2&t){const t=S.ic(3);S.Ab(2),S.pc("ngForOf",t.cols)}}function U(t,i){1&t&&(S.Tb(0,"div",52),S.Mc(1,"Folders"),S.Sb())}function L(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",53),S.ec("drop",(function(e){S.Bc(t);const c=i.$implicit;return S.ic(3).drop(e,c)}))("dragover",(function(i){return S.Bc(t),S.ic(3).allowDrop(i)}))("dragstart",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).drag(e)})),S.Tb(1,"div",54),S.Tb(2,"div",55),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).navgToFldr(e)})),S.Tb(3,"div",56),S.Ob(4,"i",5),S.Mc(5),S.Sb(),S.Tb(6,"div",57),S.Tb(7,"div",58),S.Tb(8,"div",59),S.ec("click",(function(e){S.Bc(t);const c=i.$implicit,n=S.ic(3),r=S.xc(45);return e.stopPropagation(),n.setSelRow(r,c)})),S.Ob(9,"i",60),S.Sb(),S.Tb(10,"div",59),S.ec("click",(function(e){S.Bc(t);const c=i.$implicit,n=S.ic(3);return e.stopPropagation(),n.delMyContent(c)})),S.Ob(11,"i",61),S.Sb(),S.Sb(),S.Tb(12,"mat-checkbox",62),S.ec("change",(function(e){S.Bc(t);const c=i.$implicit;return S.ic(3).selMe(e.checked,c)}))("click",(function(i){return S.Bc(t),i.stopPropagation()})),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Sb()}if(2&t){const t=i.$implicit;S.Ab(5),S.Nc(t.name),S.Ab(7),S.pc("checked",t.chk)}}function P(t,i){1&t&&(S.Tb(0,"div",52),S.Mc(1,"Files"),S.Sb())}function j(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",63),S.ec("dragstart",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).drag(e)})),S.Tb(1,"div",54),S.Tb(2,"div",64),S.Tb(3,"div",65),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).chkFolderAndAdd(e)})),S.Ob(4,"img",66),S.Sb(),S.Tb(5,"div",67),S.Tb(6,"div",68),S.Tb(7,"button",69),S.Ob(8,"i",70),S.Sb(),S.Tb(9,"div",71),S.Tb(10,"h6",72),S.Mc(11,"External Sharing"),S.Sb(),S.Tb(12,"a",73),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).cmnModal("email",e)})),S.Ob(13,"i",74),S.Mc(14,"Email "),S.Sb(),S.Tb(15,"a",73),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).cmnModal("getLink",e)})),S.Ob(16,"i",22),S.Mc(17,"Get a link "),S.Sb(),S.Ob(18,"div",75),S.Tb(19,"h6",72),S.Mc(20,"Internal Sharing"),S.Sb(),S.Tb(21,"a",73),S.ec("click",(function(){S.Bc(t);const i=S.ic(3),e=S.xc(49);return i.openModal(e)})),S.Ob(22,"i",76),S.Mc(23,"Share with colleagues "),S.Sb(),S.Sb(),S.Sb(),S.Tb(24,"div",77),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).cmnModal("addToCollection",e)})),S.Ob(25,"i",78),S.Sb(),S.Tb(26,"div",79),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).delMyContent(e)})),S.Ob(27,"i",61),S.Sb(),S.Sb(),S.Sb(),S.Tb(28,"div",80),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(3).chkFolderAndAdd(e)})),S.Tb(29,"div",81),S.Mc(30),S.Sb(),S.Tb(31,"div",82),S.Tb(32,"div",83),S.Mc(33),S.jc(34,"date"),S.Sb(),S.Sb(),S.Tb(35,"div",84),S.ec("click",(function(i){return S.Bc(t),i.stopPropagation()})),S.Tb(36,"mat-checkbox",85),S.ec("change",(function(e){S.Bc(t);const c=i.$implicit;return S.ic(3).selMe(e.checked,c)})),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Sb()}if(2&t){const t=i.$implicit,e=S.ic(3);S.Ab(4),S.pc("src",e.getImg(t),S.Dc),S.Ab(26),S.Nc(t.name),S.Ab(3),S.Nc(S.lc(34,4,t.createdDate,"dd MMM, yyyy")||"N/A"),S.Ab(3),S.pc("checked",t.chk)}}function _(t,i){1&t&&(S.Tb(0,"div",86),S.Mc(1," No data found "),S.Sb())}function q(t,i){if(1&t&&(S.Tb(0,"div"),S.Kc(1,N,3,1,"div",42),S.Kc(2,U,2,0,"div",43),S.Tb(3,"div",44),S.Kc(4,L,13,2,"div",45),S.Sb(),S.Kc(5,P,2,0,"div",43),S.Tb(6,"div",44),S.Kc(7,j,37,7,"div",46),S.Sb(),S.Kc(8,_,2,0,"div",47),S.Sb()),2&t){const t=S.ic(2);S.Ab(1),S.pc("ngIf",t.folders.length>0||t.files.length>0),S.Ab(1),S.pc("ngIf",t.folders.length>0),S.Ab(2),S.pc("ngForOf",t.folders),S.Ab(1),S.pc("ngIf",!t.loading&&t.files.length>0),S.Ab(2),S.pc("ngForOf",t.files),S.Ab(1),S.pc("ngIf",!t.loading&&t.files.length<=0&&t.folders.length<=0)}}function E(t,i){if(1&t&&(S.Tb(0,"div"),S.Kc(1,B,1,1,"app-loader",40),S.Kc(2,q,9,6,"div",27),S.Sb()),2&t){const t=S.ic();S.Ab(1),S.pc("ngIf",t.loading),S.Ab(1),S.pc("ngIf",!t.loading)}}function G(t,i){1&t&&S.Ob(0,"app-loader",41),2&t&&S.pc("type","page")}function z(t,i){if(1&t){const t=S.Ub();S.Tb(0,"th",92),S.ec("click",(function(){S.Bc(t);const e=i.$implicit,c=i.index;return S.ic(3).sortChange(e,c)})),S.Mc(1),S.Ob(2,"i",51),S.Sb()}if(2&t){const t=i.$implicit;S.Ab(1),S.Oc(" ",t.n,""),S.Ab(1),S.pc("ngClass",S.uc(2,K,t.asc,!t.asc))}}function R(t,i){if(1&t&&(S.Tb(0,"div",99),S.Ob(1,"i",102),S.Tb(2,"div",103),S.Mc(3),S.Sb(),S.Sb()),2&t){const t=S.ic().$implicit;S.Ab(3),S.Nc(t.name)}}function V(t,i){if(1&t&&(S.Tb(0,"div",99),S.Tb(1,"div",104),S.Ob(2,"img",66),S.Sb(),S.Tb(3,"div",103),S.Mc(4),S.Sb(),S.Sb()),2&t){const t=S.ic().$implicit,i=S.ic(4);S.Ab(2),S.pc("src",i.getImg(t),S.Dc),S.Ab(2),S.Nc(t.name)}}function H(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",68),S.Tb(1,"button",69),S.Ob(2,"i",70),S.Sb(),S.Tb(3,"div",71),S.Tb(4,"a",73),S.ec("click",(function(){S.Bc(t);const i=S.ic().$implicit;return S.ic(4).cmnModal("email",i)})),S.Ob(5,"i",74),S.Mc(6,"Email "),S.Sb(),S.Tb(7,"a",73),S.ec("click",(function(){S.Bc(t);const i=S.ic().$implicit;return S.ic(4).cmnModal("getLink",i)})),S.Ob(8,"i",22),S.Mc(9,"Get a link "),S.Sb(),S.Sb(),S.Sb()}}function X(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",79),S.ec("click",(function(){S.Bc(t);const i=S.ic().$implicit;return S.ic(4).cmnModal("addToCollection",i)})),S.Ob(1,"i",78),S.Sb()}}function J(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",79),S.ec("click",(function(){S.Bc(t);const i=S.ic().$implicit,e=S.ic(4),c=S.xc(45);return e.setSelRow(c,i)})),S.Ob(1,"i",60),S.Sb()}}function Q(t,i){if(1&t){const t=S.Ub();S.Tb(0,"tr",94),S.ec("drop",(function(e){S.Bc(t);const c=i.$implicit;return S.ic(4).drop(e,c)}))("dragover",(function(i){return S.Bc(t),S.ic(4).allowDrop(i)}))("dragstart",(function(){S.Bc(t);const e=i.$implicit;return S.ic(4).drag(e)})),S.Tb(1,"td",95),S.Tb(2,"mat-checkbox",85),S.ec("change",(function(e){S.Bc(t);const c=i.$implicit;return S.ic(4).selMe(e.checked,c)})),S.Sb(),S.Sb(),S.Tb(3,"td",96),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(4).chkFolderAndAdd(e)})),S.Kc(4,R,4,1,"div",97),S.Kc(5,V,5,2,"div",97),S.Sb(),S.Tb(6,"td",95),S.Mc(7),S.jc(8,"date"),S.Sb(),S.Tb(9,"td",98),S.Tb(10,"div",99),S.Kc(11,H,10,0,"div",100),S.Kc(12,X,2,0,"div",101),S.Kc(13,J,2,0,"div",101),S.Tb(14,"div",79),S.ec("click",(function(){S.Bc(t);const e=i.$implicit;return S.ic(4).delMyContent(e)})),S.Ob(15,"i",61),S.Sb(),S.Sb(),S.Sb(),S.Sb()}if(2&t){const t=i.$implicit;S.Ab(2),S.pc("checked",t.chk),S.Ab(2),S.pc("ngIf",t.isFldr),S.Ab(1),S.pc("ngIf",!t.isFldr),S.Ab(2),S.Nc(S.lc(8,7,t.createdDate,"dd MMM, yyyy HH:mm")||"N/A"),S.Ab(4),S.pc("ngIf",!t.isFldr),S.Ab(1),S.pc("ngIf",!t.isFldr),S.Ab(1),S.pc("ngIf",t.isFldr)}}function W(t,i){if(1&t&&(S.Tb(0,"tbody"),S.Kc(1,Q,16,10,"tr",93),S.Sb()),2&t){const t=S.ic(3);S.Ab(1),S.pc("ngForOf",t.allFiles)}}function Y(t,i){1&t&&(S.Tb(0,"div",86),S.Mc(1," No data found "),S.Sb())}function Z(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",88),S.Tb(1,"table",89),S.Tb(2,"thead"),S.Tb(3,"tr"),S.Tb(4,"th"),S.Tb(5,"mat-checkbox",90),S.ec("change",(function(i){return S.Bc(t),S.ic(2).selAll(i.checked)})),S.Sb(),S.Sb(),S.Kc(6,z,3,5,"th",91),S.Ob(7,"th"),S.Sb(),S.Sb(),S.Kc(8,W,2,1,"tbody",27),S.Sb(),S.Kc(9,Y,2,0,"div",47),S.Sb()}if(2&t){const t=S.ic(2);S.Ab(6),S.pc("ngForOf",t.cols),S.Ab(2),S.pc("ngIf",t.allFiles.length>0),S.Ab(1),S.pc("ngIf",0==t.allFiles.length)}}function tt(t,i){if(1&t&&(S.Tb(0,"div"),S.Kc(1,G,1,1,"app-loader",40),S.Kc(2,Z,10,3,"div",87),S.Sb()),2&t){const t=S.ic();S.Ab(1),S.pc("ngIf",t.loading),S.Ab(1),S.pc("ngIf",!t.loading)}}function it(t,i){if(1&t){const t=S.Ub();S.Tb(0,"app-sel-itm-fxd-div",105),S.ec("delContent",(function(){return S.Bc(t),S.ic().delMyContent()}))("clrSelData",(function(){return S.Bc(t),S.ic().clrSel()})),S.Sb()}if(2&t){const t=S.ic();S.pc("selArr",t.selData)("type","content")("disable",t.disableBtns)("content",!0)}}function et(t,i){1&t&&(S.Tb(0,"mat-error"),S.Mc(1," Folder Name is required "),S.Sb())}function ct(t,i){1&t&&S.Ob(0,"app-loader",41),2&t&&S.pc("type","btn")}function nt(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",106),S.Tb(1,"h4",107),S.Mc(2),S.Sb(),S.Tb(3,"button",108),S.ec("click",(function(){return i.$implicit.dismiss("Cross click")})),S.Tb(4,"span",109),S.Mc(5,"\xd7"),S.Sb(),S.Sb(),S.Sb(),S.Tb(6,"form",110),S.ec("ngSubmit",(function(){return S.Bc(t),S.ic().onSubmit()})),S.Tb(7,"div",111),S.Tb(8,"mat-form-field",112),S.Tb(9,"mat-label"),S.Mc(10,"Folder Name"),S.Sb(),S.Ob(11,"input",113),S.Kc(12,et,2,0,"mat-error",27),S.Sb(),S.Sb(),S.Tb(13,"div",114),S.Tb(14,"button",115),S.Kc(15,ct,1,1,"app-loader",40),S.Mc(16," Save "),S.Sb(),S.Sb(),S.Sb()}if(2&t){const t=S.ic();S.Ab(2),S.Oc("","updFldr"==t.frmType?"Rename":"Add"," Folder"),S.Ab(4),S.pc("formGroup",t.folderForm),S.Ab(6),S.pc("ngIf",t.folderForm.get("name").hasError("required")),S.Ab(2),S.pc("disabled",t.fldrLoad),S.Ab(1),S.pc("ngIf",t.fldrLoad)}}function rt(t,i){1&t&&(S.Tb(0,"mat-error"),S.Mc(1," Name is required "),S.Sb())}function st(t,i){1&t&&(S.Tb(0,"mat-error"),S.Mc(1," Url is required "),S.Sb())}function lt(t,i){1&t&&S.Ob(0,"app-loader",41),2&t&&S.pc("type","btn")}function at(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",106),S.Tb(1,"h4",107),S.Mc(2,"Add URL"),S.Sb(),S.Tb(3,"button",108),S.ec("click",(function(){return i.$implicit.dismiss("Cross click")})),S.Tb(4,"span",109),S.Mc(5,"\xd7"),S.Sb(),S.Sb(),S.Sb(),S.Tb(6,"form",116),S.ec("ngSubmit",(function(){return S.Bc(t),S.ic().onUrlSubmit()})),S.Tb(7,"div",111),S.Tb(8,"mat-form-field",112),S.Tb(9,"mat-label"),S.Mc(10,"Name"),S.Sb(),S.Ob(11,"input",117),S.Kc(12,rt,2,0,"mat-error",27),S.Sb(),S.Tb(13,"mat-form-field",112),S.Tb(14,"mat-label"),S.Mc(15,"URL"),S.Sb(),S.Ob(16,"input",118),S.Kc(17,st,2,0,"mat-error",27),S.Sb(),S.Sb(),S.Tb(18,"div",114),S.Tb(19,"button",115),S.Kc(20,lt,1,1,"app-loader",40),S.Mc(21," Add "),S.Sb(),S.Sb(),S.Sb()}if(2&t){const t=S.ic();S.Ab(6),S.pc("formGroup",t.urlForm),S.Ab(6),S.pc("ngIf",t.urlForm.get("name").hasError("required")),S.Ab(5),S.pc("ngIf",t.urlForm.get("url").hasError("required")),S.Ab(2),S.pc("disabled",t.urlForm.invalid||t.urlDisb),S.Ab(1),S.pc("ngIf",t.urlDisb)}}function ot(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",131),S.Tb(1,"mat-form-field",132),S.Tb(2,"mat-label"),S.Mc(3,"Get Link"),S.Sb(),S.Ob(4,"input",133,134),S.Tb(6,"button",135),S.ec("click",(function(){S.Bc(t);const i=S.xc(5);return S.ic(3).copyLink(i)})),S.Mc(7,"Copy Link"),S.Sb(),S.Sb(),S.Sb()}}function dt(t,i){1&t&&(S.Tb(0,"div",136),S.Tb(1,"mat-form-field",112),S.Tb(2,"mat-label"),S.Mc(3,"Email To"),S.Sb(),S.Ob(4,"input",137),S.Sb(),S.Tb(5,"mat-form-field",112),S.Tb(6,"mat-label"),S.Mc(7,"Note"),S.Sb(),S.Ob(8,"textarea",138),S.Sb(),S.Sb())}function bt(t,i){if(1&t&&(S.Tb(0,"div"),S.Tb(1,"mat-label"),S.Mc(2,"Share Options:"),S.Sb(),S.Tb(3,"mat-radio-group",125),S.Tb(4,"mat-radio-button",126,127),S.Mc(6,"Share by Link "),S.Sb(),S.Tb(7,"mat-radio-button",128),S.Mc(8,"Share by Email"),S.Sb(),S.Sb(),S.Ob(9,"hr"),S.Kc(10,ot,8,0,"div",129),S.Kc(11,dt,9,0,"div",130),S.Sb()),2&t){const t=S.xc(5);S.Ab(10),S.pc("ngIf",t.checked),S.Ab(1),S.pc("ngIf",!t.checked)}}function ft(t,i){if(1&t&&(S.Tb(0,"div",106),S.Tb(1,"h4",107),S.Mc(2,"Share With Colleagues"),S.Sb(),S.Tb(3,"button",108),S.ec("click",(function(){return i.$implicit.dismiss("Cross click")})),S.Tb(4,"span",109),S.Mc(5,"\xd7"),S.Sb(),S.Sb(),S.Sb(),S.Tb(6,"div",111),S.Tb(7,"div",119),S.Mc(8," File Sharing is ON "),S.Ob(9,"mat-slide-toggle",120,121),S.Sb(),S.Tb(11,"div",122),S.Ob(12,"i",123),S.Mc(13," File sharing is enabled for this file. Anyone at Hi-Force Hydraulic Tools with the file link will be able to view this file. "),S.Sb(),S.Kc(14,bt,12,2,"div",27),S.Sb(),S.Tb(15,"div",114),S.Tb(16,"button",124),S.ec("click",(function(){return i.$implicit.close("Save click")})),S.Mc(17,"Share"),S.Sb(),S.Sb()),2&t){const t=S.xc(10);S.Ab(14),S.pc("ngIf",t.checked),S.Ab(2),S.pc("disabled",!t.checked)}}function pt(t,i){if(1&t&&(S.Tb(0,"div",148),S.Tb(1,"div",103),S.Mc(2),S.Sb(),S.Tb(3,"div",149),S.Tb(4,"div",150),S.Ob(5,"div",151),S.Sb(),S.Sb(),S.Tb(6,"div"),S.Tb(7,"div",152),S.Mc(8,"Show"),S.Sb(),S.Sb(),S.Sb()),2&t){const t=i.$implicit;S.Ab(2),S.Nc(t.name)}}function ut(t,i){if(1&t&&(S.Tb(0,"div",146),S.Kc(1,pt,9,1,"div",147),S.Sb()),2&t){const t=S.ic(2);S.Ab(1),S.pc("ngForOf",t.procFiles)}}const mt=function(t,i){return{"fa-angle-up":t,"fa-angle-down":i}};function ht(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",139),S.Tb(1,"div",140),S.Tb(2,"div",141),S.Mc(3),S.Tb(4,"div",120),S.Tb(5,"div",142),S.ec("click",(function(){S.Bc(t);const i=S.ic();return i.showProcDetail=!i.showProcDetail})),S.Ob(6,"i",143),S.Sb(),S.Tb(7,"div",142),S.ec("click",(function(){return S.Bc(t),S.ic().isClose=!0})),S.Ob(8,"i",144),S.Sb(),S.Sb(),S.Sb(),S.Kc(9,ut,2,1,"div",145),S.Sb(),S.Sb()}if(2&t){const t=S.ic();S.Ab(3),S.Oc(" Uploaded ",t.procFiles.length," file "),S.Ab(3),S.pc("ngClass",S.uc(3,mt,!t.showProcDetail,t.showProcDetail)),S.Ab(3),S.pc("ngIf",t.showProcDetail)}}let gt=(()=>{class t{constructor(t,i,e,c,n,r,s,l){this.router=t,this.route=i,this.fb=e,this.modalService=c,this.toastr=n,this.dialog=r,this.fileServ=s,this.brdcrmServ=l,this.view=!0,this.allFiles=[],this.testArr=[1,2,3,4,5,6,7,8,9],this.cols=[],this.fileExt=g.d,this.procFiles=[],this.isClose=!1,this.showProcDetail=!0,this.uploadBtn=t=>{null==t||t.click()},this.copyLink=t=>{t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")}}ngOnInit(){this.processingData(),this.getIntervalId=setInterval(()=>{this.processingData()},13e3),this.routerSubs=this.route.params.subscribe(t=>{this.fldrid=t.fldrid||"",this.initialiseState(),this.getFiles()}),this.cols=[{n:"Name",asc:!1,k:"name"},{n:"Date Modified",asc:!1,k:"updatedDate"}],this.disableBtns=!1}initialiseState(){this.loading=!0,this.files=[],this.folders=[],this.selData=[],this.navg=[],this.cols=[{n:"Name",asc:!1,k:"name"},{n:"Date Modified",asc:!1,k:"updatedDate"}],this.brdcrmList(),this.initForm()}initForm(){this.folderForm=this.fb.group({name:["",[r.u.required]]}),this.urlForm=this.fb.group({name:["",[r.u.required]],url:["",[r.u.required]]}),this.urlDisb=!1}allowDrop(t){t.preventDefault()}drag(t){this.dragMe=t}drop(t,i){t.preventDefault(),i!==this.dragMe&&i.isFldr&&(this.dragMe.isFldr?this.folders=this.folders.filter(t=>t.id!==this.dragMe.id):this.files=this.files.filter(t=>t.id!==this.dragMe.id),this.allFiles=[...this.folders,...this.files],this.relocMyFiles(i.id))}relocMyFiles(t){this.fileServ.relocMyFiles({entityId:this.dragMe.id,relocateObjectType:this.dragMe.isFldr?1:2,folderId:t}).subscribe(t=>{t&&this.toastr.success(t.message||"Location changed successfully","Success!")},t=>{})}sortChange(t,i){let e=Object.assign({},t);for(let n=0;n<this.cols.length;n++)this.cols[n].asc=!1;e.asc=!e.asc,this.cols[i].asc=e.asc;const c=i=>{this[i].sort((i,c)=>"name"===t.k?function(t,i,e){return t.name.toLowerCase()<i.name.toLowerCase()?e.asc?-1:1:e.asc?1:-1}(i,c,e):function(t,i,e){return t.updatedDate<i.updatedDate?e.asc?-1:1:e.asc?1:-1}(i,c,e))};this.view?(c("files"),c("folders")):c("allFiles")}cmnModal(t,i){if("email"==t){const t=this.modalService.open(p.a,{size:"lg"});t.componentInstance.type="content",t.componentInstance.data=i}else if("getLink"==t){const t=this.modalService.open(u.a,{size:"lg"});t.componentInstance.type="content",t.componentInstance.data=i}else"addToCollection"==t&&(this.modalService.open(m.a,{size:"lg"}).componentInstance.data=Object.assign(Object.assign({},i),{type:"my-file"}))}selMe(t,i){t?(this.selData.push(i),i.isFldr&&(this.disableBtns=!0)):(this.selData=this.selData.filter(t=>t.id!=i.id),i.isFldr&&(this.disableBtns=!1))}clrSel(){this.selData=[],this.files=this.files.map(t=>Object.assign(Object.assign({},t),{chk:!1})),this.folders=this.folders.map(t=>Object.assign(Object.assign({},t),{chk:!1})),this.allFiles=[...this.folders,...this.files]}selAll(t){t?(this.disableBtns=!0,this.selData=this.allFiles,this.files=this.files.map(t=>Object.assign(Object.assign({},t),{chk:!0})),this.folders=this.folders.map(t=>Object.assign(Object.assign({},t),{chk:!0})),this.allFiles=[...this.folders,...this.files]):(this.disableBtns=!1,this.clrSel())}getFiles(){let t={folderId:this.fldrid||null};this.initialiseState(),this.fileServ.myFiles(t).subscribe(t=>{t&&t.result&&(Array.isArray(t.result.folders)&&(this.folders=t.result.folders.map(t=>Object.assign(Object.assign({},t),{isFldr:!0,chk:!1,updatedDate:t.updatedDate?t.updatedDate:t.createdDate}))),Array.isArray(t.result.contents)&&(this.files=t.result.contents.map(t=>Object.assign(Object.assign({},t),{chk:!1,updatedDate:t.updatedDate?t.updatedDate:t.createdDate})))),this.allFiles=[...this.folders,...this.files],this.loading=!1},t=>{this.loading=!1})}navgToFldr(t){this.router.navigate(["/web-app/resource/my-files/"+(0==t.id?"":t.id)])}chkFolderAndAdd(t){t.isFldr?this.navgToFldr(t):this.router.navigate(["/web-app/view/"+t.id])}openModal(t,i=""){if(this.frmType=i,"addFldr"==this.frmType||"updFldr"==this.frmType||"url"==this.frmType){if(this.fldrLoad||this.urlDisb)return void this.toastr.info("Please wait for previous request");this.folderForm.reset(),this.urlForm.reset(),"updFldr"==this.frmType&&this.folderForm.patchValue(Object.assign({},this.selFldrData))}this.modalService.open(t,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(t=>{},t=>{})}setSelRow(t,i){this.fldrLoad?this.toastr.info("Please wait for previous request"):(this.selFldrData=i,this.openModal(t,"updFldr"))}onSubmit(){if(this.folderForm.valid){this.fldrLoad=!0;let t=Object.assign(Object.assign({},this.folderForm.value),{workspaceId:null,folderId:this.fldrid?parseInt(this.fldrid):null});"updFldr"==this.frmType?this.editFolder(t):this.addFolder(t)}}addFolder(t){this.fileServ.addFldr(t).subscribe(t=>{t?(this.toastr.success(t.message||"Folder added successfully","Success!"),this.getFiles()):this.toastr.error("Unable to add Folder","Error!"),this.fldrLoad=!1,this.dismissModal()},t=>{this.fldrLoad=!1,this.dismissModal()})}editFolder(t){t.id=this.selFldrData.id,this.fileServ.updFldr(t).subscribe(i=>{i?(this.toastr.success(i.message||"Folder rename successfully","Success!"),this.locUpd("allFiles",t),this.locUpd("folders",t)):this.toastr.error("Unable to rename Folder","Error!"),this.fldrLoad=!1,this.dismissModal()},t=>{this.fldrLoad=!1,this.dismissModal()})}locUpd(t,i){const e=this[t].findIndex(t=>t.id==i.id&&t.isFldr);e>=0&&(this[t][e].name=i.name)}uplCntnt(t){if(t.target&&t.target.files){let i=t.target.files,e=0;for(let t=0;t<i.length;t++){if(this.fileExt.filter(e=>i[t].name.includes(e)).length<=0)return void this.toastr.error("Not valid file, please try with other file","File Type Error");e+=i[t].size}return h.a.bytestoOther(e,"gb")<1?void this.addCntnt({mulFile:i},"Content"):void this.toastr.error("Size should be less than 1 GB","File Size Error")}}onUrlSubmit(){if(this.urlForm.valid){let t=Object.assign(Object.assign({},this.urlForm.value),{isUrl:!0});this.addCntnt(t,"Url"),this.urlDisb=!0}}addCntnt(t,i){t.folderId=this.fldrid?parseInt(this.fldrid):null,this.fileServ.addMyCntnt(t).subscribe(t=>{t?this.toastr.success(t.message||i+" added successfully","Success!"):this.toastr.error("Unable to add","Error!"),this.urlChk(i)},t=>{this.urlChk(i)})}urlChk(t){"Url"==t&&(this.urlDisb=!1,this.dismissModal()),this.getFiles(),this.processingData(),this.isClose=!1}brdcrmList(){this.brdcrmServ.getList({parentFolderId:this.fldrid?this.fldrid:null},!0).subscribe(t=>{if(t&&Array.isArray(t.result)&&t.result.length>0){let i=t.result;i.sort((t,i)=>t.level-i.level),this.navg=i}},t=>{})}processingData(){this.fileServ.procesMyData().subscribe(t=>{t&&Array.isArray(t.result)&&(this.procFiles=t.result)},t=>{})}getImg(t){return h.a.getImg(t)}dismissModal(){this.modalService&&this.modalService.dismissAll()}ngOnDestroy(){this.getIntervalId&&clearInterval(this.getIntervalId),this.dismissModal()}delMyContent(t){let i,e,c,n={myContentIds:[],myFolderIds:[]};if(t)t.isFldr?(n.myFolderIds=[t.id],i=" folder",e="Delete Folder",c="Folder deleted"):(n.myContentIds=[t.id],i="",e="Delete Content",c="Content deleted");else{i=" items",e="Delete Items",c="Items deleted";for(let t=0;t<this.selData.length;t++)this.selData[t].isFldr?n.myFolderIds.push(this.selData[t].id):n.myContentIds.push(this.selData[t].id)}this.dialog.open(f.a,{data:{msg:`Are you sure you want to delete ${t?t.name:"these"} ${i}?`,title:e},autoFocus:!1}).afterClosed().subscribe(t=>{t&&this.fileServ.delMyCntnt(n).subscribe(t=>{t&&(this.toastr.success(t.message||c+" successfully.","Success!"),this.getFiles())},t=>{})})}}return t.\u0275fac=function(i){return new(i||t)(S.Nb(n.d),S.Nb(n.a),S.Nb(r.d),S.Nb(v.h),S.Nb(T.b),S.Nb(y.b),S.Nb(M.a),S.Nb(F.a))},t.\u0275cmp=S.Hb({type:t,selectors:[["app-file"]],decls:51,vars:7,consts:[[1,"main","main-employee"],[1,"row","mt-3","mx-0"],[1,"side","col-md-3","col-xl-2","files-side"],[1,"list-unstyled"],[1,"pr-2","pl-3","rounded","py-2","curs-ptr","active"],[1,"fas","fa-folder","mr-1"],[1,"pr-2","pl-3","rounded","py-2","curs-ptr"],[1,"fas","fa-user-friends","mr-1"],[1,"fas","fa-clock","mr-1"],[1,"storage"],[1,"text-secondary","text-center"],[1,"progress","mt-2",2,"height","10px"],["role","progressbar","aria-valuenow","3","aria-valuemin","0","aria-valuemax","2048",1,"progress-bar",2,"width","1%"],[1,"col-md-9","col-xl-10","px-5","px-md-3","mt-3","mt-md-0"],[1,"mb-4","clearfix","heading","align-self-center"],[1,"float-right","d-flex"],["class","fa mr-3 curs-ptr align-self-center",3,"ngClass","matTooltip","click",4,"ngIf"],[1,"dropdown"],["type","button","id","addBtnDD","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],["aria-labelledby","addBtnDD",1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-folder-plus","mr-1"],[1,"fa","fa-link","mr-1"],[1,"fa","fa-upload","mr-1"],["type","file","multiple","",2,"display","none",3,"accept","change"],["uploadFile",""],["aria-label","breadcrumb",4,"ngIf"],[4,"ngIf"],[3,"selArr","type","disable","content","delContent","clrSelData",4,"ngIf"],["fldrModal",""],["addURL",""],["shareColl",""],["class","process",4,"ngIf"],[1,"fa","mr-3","curs-ptr","align-self-center",3,"ngClass","matTooltip","click"],["aria-label","breadcrumb"],[1,"breadcrumb","bg-transparent","pl-0","mb-0"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item"],["class","curs-ptr text-hover",3,"click",4,"ngIf"],[1,"curs-ptr","text-hover",3,"click"],[3,"type",4,"ngIf"],[3,"type"],["class","text-right",4,"ngIf"],["class","text-secondary",4,"ngIf"],[1,"mt-2","row","my-files","mx-0"],["class","folder-container col-xl-3 col-md-4 col-sm-6 my-3 mx-auto mx-sm-0","draggable","true",3,"drop","dragover","dragstart",4,"ngFor","ngForOf"],["class","card-container col-xl-3 col-md-4 col-sm-6 my-3 mx-auto mx-sm-0","draggable","true",3,"dragstart",4,"ngFor","ngForOf"],["class","text-center text-secondary",4,"ngIf"],[1,"text-right"],["class","text-primary ml-2 curs-ptr",3,"click",4,"ngFor","ngForOf"],[1,"text-primary","ml-2","curs-ptr",3,"click"],[1,"fa","ml-1",3,"ngClass"],[1,"text-secondary"],["draggable","true",1,"folder-container","col-xl-3","col-md-4","col-sm-6","my-3","mx-auto","mx-sm-0",3,"drop","dragover","dragstart"],[1,"card","curs-ptr","mx-auto"],[1,"card-body","d-flex",3,"click"],[1,"name","align-self-center","px-0"],[1,"d-flex","p-0","__options","ml-auto"],[1,"_options"],[1,"btn","btn-light","btn-sm","mr-1",3,"click"],[1,"fas","fa-edit"],[1,"fas","fa-trash-alt"],[1,"align-self-center",3,"checked","change","click"],["draggable","true",1,"card-container","col-xl-3","col-md-4","col-sm-6","my-3","mx-auto","mx-sm-0",3,"dragstart"],[1,"card-body"],[1,"imagePreview","text-center",3,"click"],[3,"src"],[1,"options","rounded"],[1,"dropleft"],["type","button","id","shareDD","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn"],[1,"fas","fa-share-square"],["aria-labelledby","shareDD",1,"dropdown-menu"],[1,"ml-2","text-hi-dark"],[1,"dropdown-item",3,"click"],[1,"fa","fa-envelope","mr-1"],[1,"dropdown-divider"],[1,"fa","fa-user-friends","mr-1"],[1,"btn","my-1",3,"click"],[1,"fas","fa-folder-plus"],[1,"btn",3,"click"],[1,"card-footer",3,"click"],[1,"name","text-truncate"],[1,"float-left","text-secondary","d-flex"],[1,"date"],[1,"float-right",3,"click"],[3,"checked","change"],[1,"text-center","text-secondary"],["class","mt-2 row my-files",4,"ngIf"],[1,"mt-2","row","my-files"],[1,"table","table-hover"],[3,"change"],["class","curs-ptr",3,"click",4,"ngFor","ngForOf"],[1,"curs-ptr",3,"click"],["draggable","true",3,"drop","dragover","dragstart",4,"ngFor","ngForOf"],["draggable","true",3,"drop","dragover","dragstart"],[1,"align-middle"],[1,"align-middle",3,"click"],["class","d-flex",4,"ngIf"],[1,"align-middle","options"],[1,"d-flex"],["class","dropleft",4,"ngIf"],["class","btn",3,"click",4,"ngIf"],[1,"fas","fa-folder","mr-2",2,"font-size","3rem"],[1,"name","align-self-center"],[1,"imagePreview","border","mr-2"],[3,"selArr","type","disable","content","delContent","clrSelData"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["name","folderForm","novalidate","",3,"formGroup","ngSubmit"],["ngbAutofocus","",1,"modal-body"],["appearance","outline",1,"w-100"],["type","text","matInput","","placeholder","Folder Name","formControlName","name","maxlength","100","required",""],[1,"modal-footer"],[1,"btn","btn-primary",3,"disabled"],["name","urlForm","novalidate","",3,"formGroup","ngSubmit"],["matInput","","placeholder","Add a Name","formControlName","name","maxlength","100","required",""],["matInput","","placeholder","Add a URL","formControlName","url","maxlength","300","required",""],[1,"file-sharing"],[1,"float-right"],["sharingValue",""],[1,"rounded","border","border-primary","d-flex","text-justify","text-primary","px-2","my-3","py-2"],[1,"fa","fa-info-circle","align-self-center","mr-2"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["aria-label","Select an option",1,"d-block"],["value","link","checked","true",1,"mx-3"],["link",""],["value","email"],["class","link",4,"ngIf"],["class","email",4,"ngIf"],[1,"link"],["appearance","outline",1,"w-100","copy-link"],["type","text","matInput","","value","https://www.google.com","readonly",""],["linkText",""],["matSuffix","",1,"btn","btn-primary",3,"click"],[1,"email"],["type","text","matInput","","placeholder","Enter Names or Email Address"],["type","text","matInput","","placeholder","Add a note ..."],[1,"process"],[1,"card"],[1,"card-header","py-2"],[1,"btn","btn-sm","btn-light",3,"click"],[1,"fa",3,"ngClass"],[1,"fas","fa-times"],["class","card-body py-2 scrolView",4,"ngIf"],[1,"card-body","py-2","scrolView"],["class","d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between"],[1,"align-self-center"],[1,"progress"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","100%"],[1,"btn"]],template:function(t,i){if(1&t){const t=S.Ub();S.Tb(0,"div",0),S.Tb(1,"div",1),S.Tb(2,"div",2),S.Tb(3,"ul",3),S.Tb(4,"li",4),S.Ob(5,"i",5),S.Mc(6,"My Files"),S.Sb(),S.Ob(7,"hr"),S.Tb(8,"li",6),S.Ob(9,"i",7),S.Mc(10,"Shared with me"),S.Sb(),S.Ob(11,"hr"),S.Tb(12,"li",6),S.Ob(13,"i",8),S.Mc(14,"Recent"),S.Sb(),S.Sb(),S.Ob(15,"hr"),S.Tb(16,"div",9),S.Tb(17,"div",10),S.Mc(18," 3.3 MB of 2 GB used "),S.Tb(19,"div",11),S.Ob(20,"div",12),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Tb(21,"div",13),S.Tb(22,"h3",14),S.Tb(23,"div",15),S.Kc(24,A,1,5,"i",16),S.Tb(25,"div",17),S.Tb(26,"button",18),S.Mc(27," Add "),S.Sb(),S.Tb(28,"div",19),S.Tb(29,"a",20),S.ec("click",(function(){S.Bc(t);const e=S.xc(45);return i.openModal(e,"addFldr")})),S.Ob(30,"i",21),S.Mc(31," Create Folder "),S.Sb(),S.Tb(32,"a",20),S.ec("click",(function(){S.Bc(t);const e=S.xc(47);return i.openModal(e,"url")})),S.Ob(33,"i",22),S.Mc(34,"Add URL"),S.Sb(),S.Tb(35,"a",20),S.ec("click",(function(){S.Bc(t);const e=S.xc(39);return i.uploadBtn(e)})),S.Ob(36,"i",23),S.Mc(37," Upload from hard drive "),S.Tb(38,"input",24,25),S.ec("change",(function(t){return i.uplCntnt(t)})),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Sb(),S.Kc(40,D,3,1,"nav",26),S.Sb(),S.Kc(41,E,3,2,"div",27),S.Kc(42,tt,3,2,"div",27),S.Sb(),S.Sb(),S.Sb(),S.Kc(43,it,1,4,"app-sel-itm-fxd-div",28),S.Kc(44,nt,17,5,"ng-template",null,29,S.Lc),S.Kc(46,at,22,5,"ng-template",null,30,S.Lc),S.Kc(48,ft,18,2,"ng-template",null,31,S.Lc),S.Kc(50,ht,10,6,"div",32)}2&t&&(S.Ab(24),S.pc("ngIf",i.files.length>0||i.folders.length>0||i.allFiles.length>0),S.Ab(14),S.qc("accept",i.fileExt.toString()),S.Ab(2),S.pc("ngIf",i.navg.length>0),S.Ab(1),S.pc("ngIf",i.view),S.Ab(1),S.pc("ngIf",!i.view),S.Ab(1),S.pc("ngIf",i.selData.length>0),S.Ab(7),S.pc("ngIf",i.procFiles.length>0&&!i.isClose))},directives:[c.m,c.k,o.a,c.l,k.a,s.a,O.a,r.w,r.n,r.g,l.c,l.g,a.b,r.c,r.m,r.f,r.i,r.t,l.b,d.a,b.b,b.a,l.i],pipes:[c.e],styles:['.__options[_ngcontent-%COMP%]   ._options[_ngcontent-%COMP%]{display:none;opacity:0}.card[_ngcontent-%COMP%]{min-height:73px}.card[_ngcontent-%COMP%]:hover   ._options[_ngcontent-%COMP%]{display:flex;opacity:1}.card[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.breadcrumb-item[_ngcontent-%COMP%]{font-size:1.7rem}@media (max-width:576px){.folder-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{max-width:275px}}.process[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;width:500px}.process[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:200px}.process[_ngcontent-%COMP%]   .scrolView[_ngcontent-%COMP%]{height:300px;overflow-y:scroll}.gu-mirror[_ngcontent-%COMP%]{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80);pointer-events:none}.gu-hide[_ngcontent-%COMP%]{left:-9999px!important}.gu-unselectable[_ngcontent-%COMP%]{-webkit-user-select:none!important;user-select:none!important}.gu-transit[_ngcontent-%COMP%]{opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20)}']}),t})();var St=e("zJym"),vt=e("M0XK"),Tt=e("tqvG"),yt=e("Amnm"),Mt=e("IpHC"),Ft=e("u7Mw"),kt=e("OraM");const Ot=[{path:"",component:gt}];let xt=(()=>{class t{}return t.\u0275mod=S.Lb({type:t}),t.\u0275inj=S.Kb({factory:function(i){return new(i||t)},providers:[M.a,kt.a,F.a],imports:[[c.c,n.h.forChild(Ot),r.h,r.s,s.b,l.e,a.c,o.b,d.b,b.c,St.a,vt.a,Tt.a,yt.a,Mt.a,Ft.a]]}),t})()}}]);