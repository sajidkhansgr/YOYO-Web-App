(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{iLFk:function(t,c,i){"use strict";i.r(c),i.d(c,"CollectionListModule",(function(){return R}));var n=i("ofXK"),e=i("tyNb"),o=i("bSwM"),l=i("Qu3c"),s=i("0IaG"),a=i("1kSV"),r=i("IJgu"),b=i("s0Cq"),d=i("OQ+D"),p=i("E/a4"),f=i("Q6ig"),u=i("fXoL"),m=i("CFzk"),g=i("5eHb"),h=i("668k"),v=i("WoM1");const A=function(t,c){return{"fa-sort-up align-bottom":t,"fa-sort-down align-top":c}};function S(t,c){if(1&t){const t=u.Ub();u.Tb(0,"span",16),u.ec("click",(function(){u.Ac(t);const i=c.$implicit,n=c.index;return u.ic(2).sortChange(i,n)})),u.Lc(1),u.Ob(2,"i",17),u.Sb()}if(2&t){const t=c.$implicit;u.Ab(1),u.Nc(" ",t.n,""),u.Ab(1),u.pc("ngClass",u.uc(2,A,t.asc,!t.asc))}}function T(t,c){if(1&t&&(u.Tb(0,"div",14),u.Lc(1," Sort by: "),u.Jc(2,S,3,5,"span",15),u.Sb()),2&t){const t=u.ic();u.Ab(2),u.pc("ngForOf",t.cols)}}function C(t,c){if(1&t){const t=u.Ub();u.Tb(0,"div",22),u.Tb(1,"div",23),u.Tb(2,"div",24),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).showContent(i.id)})),u.Ob(3,"img",25),u.Sb(),u.Tb(4,"div",26),u.Tb(5,"div",27),u.Lc(6),u.Sb(),u.Tb(7,"div",28),u.Tb(8,"div",29),u.Lc(9),u.jc(10,"date"),u.Sb(),u.Tb(11,"div",30),u.Lc(12,"l"),u.Sb(),u.Tb(13,"div",31),u.Lc(14),u.Sb(),u.Sb(),u.Tb(15,"div",2),u.Tb(16,"mat-checkbox",32),u.ec("change",(function(i){u.Ac(t);const n=c.$implicit;return u.ic(3).selMe(i.checked,n.id)})),u.Sb(),u.Sb(),u.Sb(),u.Tb(17,"div",33),u.Tb(18,"div",34),u.Tb(19,"button",35),u.Ob(20,"i",36),u.Sb(),u.Tb(21,"div",37),u.Tb(22,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("email",void 0,i)})),u.Ob(23,"i",39),u.Lc(24,"Email"),u.Sb(),u.Tb(25,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("getLink",void 0,i)})),u.Ob(26,"i",40),u.Lc(27,"Get a link"),u.Sb(),u.Sb(),u.Sb(),u.Tb(28,"div",41),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).actDeactColctn(i.id)})),u.Ob(29,"i"),u.Sb(),u.Tb(30,"div",34),u.Tb(31,"button",42),u.Ob(32,"i",43),u.Sb(),u.Tb(33,"div",44),u.Tb(34,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("coll","dupl",i)})),u.Ob(35,"i",45),u.Lc(36,"Duplicate"),u.Sb(),u.Tb(37,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("coll","ren",i)})),u.Ob(38,"i",46),u.Lc(39,"Rename"),u.Sb(),u.Tb(40,"a",47),u.Ob(41,"i",48),u.Lc(42,"Download "),u.Tb(43,"div",49),u.Tb(44,"a",50),u.Ob(45,"i",51),u.Lc(46,"As a single PDF"),u.Sb(),u.Tb(47,"a",50),u.Ob(48,"i",52),u.Lc(49,"As separate items"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&t){const t=c.$implicit,i=u.ic(3);u.Ab(3),u.pc("src",t.pdfImagePath?t.pdfImagePath:i.fldrIcon,u.Cc),u.Ab(3),u.Mc(t.name),u.Ab(3),u.Mc(u.lc(10,7,t.updatedDate,"dd MMM, yyyy")||"N/A"),u.Ab(5),u.Nc("",t.contentCount||0," Item(s)"),u.Ab(15),u.Db("mr-1 fas fa-toggle-",i.isActiveColctn?"off text-primary":"on text-success","")}}function y(t,c){if(1&t&&(u.Rb(0),u.Tb(1,"div",20),u.Jc(2,C,50,10,"div",21),u.Sb(),u.Qb()),2&t){const t=u.ic(2);u.Ab(2),u.pc("ngForOf",t.colctnArr)}}function k(t,c){1&t&&(u.Tb(0,"div",53),u.Lc(1," No Collections Found "),u.Sb())}function w(t,c){if(1&t&&(u.Rb(0),u.Jc(1,y,3,1,"ng-container",18),u.Jc(2,k,2,0,"ng-template",null,19,u.Kc),u.Qb()),2&t){const t=u.xc(3),c=u.ic();u.Ab(1),u.pc("ngIf",c.colctnArr&&c.colctnArr.length>0)("ngIfElse",t)}}function I(t,c){if(1&t){const t=u.Ub();u.Tb(0,"th",59),u.ec("click",(function(){u.Ac(t);const i=c.$implicit,n=c.index;return u.ic(2).sortChange(i,n)})),u.Lc(1),u.Ob(2,"i",17),u.Sb()}if(2&t){const t=c.$implicit;u.Ab(1),u.Nc(" ",t.n,""),u.Ab(1),u.pc("ngClass",u.uc(2,A,t.asc,!t.asc))}}function O(t,c){if(1&t){const t=u.Ub();u.Tb(0,"tr"),u.Tb(1,"td",61),u.Tb(2,"mat-checkbox",32),u.ec("change",(function(i){u.Ac(t);const n=c.$implicit;return u.ic(3).selMe(i.checked,n.id)})),u.Sb(),u.Sb(),u.Tb(3,"td",62),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).showContent(i.id)})),u.Tb(4,"div",63),u.Tb(5,"div",64),u.Ob(6,"img",25),u.Sb(),u.Tb(7,"div",65),u.Lc(8),u.Sb(),u.Sb(),u.Sb(),u.Tb(9,"td",61),u.Lc(10),u.jc(11,"date"),u.Sb(),u.Tb(12,"td",66),u.Tb(13,"div",63),u.Tb(14,"div",34),u.Tb(15,"button",35),u.Ob(16,"i",36),u.Sb(),u.Tb(17,"div",37),u.Tb(18,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("email",void 0,i)})),u.Ob(19,"i",39),u.Lc(20,"Email"),u.Sb(),u.Tb(21,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("getLink",void 0,i)})),u.Ob(22,"i",40),u.Lc(23,"Get a link"),u.Sb(),u.Sb(),u.Sb(),u.Tb(24,"div",67),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).actDeactColctn(i.id)})),u.Ob(25,"i"),u.Sb(),u.Tb(26,"div",34),u.Tb(27,"button",42),u.Ob(28,"i",43),u.Sb(),u.Tb(29,"div",44),u.Tb(30,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("coll","dupl",i)})),u.Ob(31,"i",45),u.Lc(32,"Duplicate"),u.Sb(),u.Tb(33,"a",38),u.ec("click",(function(){u.Ac(t);const i=c.$implicit;return u.ic(3).cmnModal("coll","ren",i)})),u.Ob(34,"i",46),u.Lc(35,"Rename"),u.Sb(),u.Tb(36,"a",47),u.Ob(37,"i",48),u.Lc(38,"Download "),u.Tb(39,"div",49),u.Tb(40,"a",50),u.Ob(41,"i",51),u.Lc(42,"As a single PDF"),u.Sb(),u.Tb(43,"a",50),u.Ob(44,"i",52),u.Lc(45,"As separate items"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&t){const t=c.$implicit,i=u.ic(3);u.Ab(6),u.pc("src",t.pdfImagePath?t.pdfImagePath:i.fldrIcon,u.Cc),u.Ab(2),u.Mc(t.name),u.Ab(2),u.Mc(u.lc(11,6,t.updatedDate,"dd MMM, yyyy")||"N/A"),u.Ab(15),u.Db("mr-1 fas fa-toggle-",i.isActiveColctn?"off text-primary":"on text-success","")}}function L(t,c){if(1&t&&(u.Tb(0,"tbody"),u.Jc(1,O,46,9,"tr",60),u.Sb()),2&t){const t=u.ic(2);u.Ab(1),u.pc("ngForOf",t.colctnArr)}}function D(t,c){1&t&&(u.Tb(0,"div",53),u.Lc(1," No Collections Found "),u.Sb())}function x(t,c){if(1&t&&(u.Tb(0,"div",54),u.Tb(1,"table",55),u.Tb(2,"thead"),u.Tb(3,"tr"),u.Tb(4,"th",56),u.Ob(5,"mat-checkbox"),u.Sb(),u.Jc(6,I,3,5,"th",57),u.Ob(7,"th",56),u.Sb(),u.Sb(),u.Jc(8,L,2,1,"tbody",10),u.Sb(),u.Jc(9,D,2,0,"div",58),u.Sb()),2&t){const t=u.ic();u.Ab(6),u.pc("ngForOf",t.cols),u.Ab(2),u.pc("ngIf",t.colctnArr.length>0&&!t.loading),u.Ab(1),u.pc("ngIf",0==t.colctnArr.length&&!t.loading)}}function M(t,c){1&t&&u.Ob(0,"app-loader",68),2&t&&u.pc("type","page")}function $(t,c){if(1&t){const t=u.Ub();u.Tb(0,"app-sel-itm-fxd-div",69),u.ec("actDeact",(function(){return u.Ac(t),u.ic().actDeactColctn(void 0)}))("clrSelData",(function(){return u.Ac(t),u.ic().clrSel()})),u.Sb()}if(2&t){const t=u.ic();u.pc("selArr",t.selColctnArr)("isActive",t.isActiveColctn)}}const N=function(t,c){return{"fa-list-ul":t,"fa-th-large":c}};let F=(()=>{class t{constructor(t,c,i,n,e){this.modalService=t,this.colctnSrv=c,this.toastr=i,this.dialog=n,this.router=e,this.fldrIcon=b.e}ngOnInit(){this.initialiseState(),this.listColctn()}initialiseState(){this.view=!0,this.disabled=!1,this.loading=!0,this.colctnArr=[],this.selColctnArr=[],this.multiForm=0,this.sort={sortColumn:"updatedDate",isAscending:!1},this.cols=[{n:"Name",asc:!1,k:"name"},{n:"Date Modified",asc:!1,k:"updatedDate"}],this.activeColctn=1,this.isActiveColctn=!0}showContent(t){this.router.navigate(["/web-app/resource/collections/"+t])}sortChange(t,c){let i=Object.assign({},t);for(let n=0;n<this.cols.length;n++)this.cols[n].asc=!1;i.asc=!i.asc,this.cols[c].asc=i.asc,this.sort={sortColumn:t.k,isAscending:i.asc},this.listColctn()}changeDispColctn(){this.isActiveColctn=1==this.activeColctn,this.listColctn()}selMe(t,c){t?this.selColctnArr.push(c):this.selColctnArr=this.selColctnArr.filter(t=>t!=c)}clrSel(){this.selColctnArr=[]}actDeactColctn(t){let c=t?[t]:this.selColctnArr,i=1==c.length?"":"s",n=this.isActiveColctn?"deactivate":"activate";this.dialog.open(r.a,{data:{msg:`Are you sure you want to ${n} ${1==c.length?"this":"these"} collection${i}?`,title:`${this.isActiveColctn?"Deactivate":"Activate"} collection${i}`},autoFocus:!1}).afterClosed().subscribe(t=>{t&&this.colctnSrv.actDeactColctn(c,!this.isActiveColctn).subscribe(t=>{t?(this.toastr.success(`Collection${i} ${n}d successfully`,"Success!"),this.selColctnArr=[],this.listColctn()):this.toastr.error(`Unable to ${n} collection${i}`,"Error!")},t=>{})})}listColctn(){this.loading=!0,this.selColctnArr=[];let t=Object.assign(Object.assign({pageNo:0},this.sort),{isActive:this.isActiveColctn});this.colctnSrv.colctnList(t).subscribe(t=>{this.colctnArr=t&&t.result&&Array.isArray(t.result.results)&&t.result.results.length>0?t.result.results:[],this.loading=!1},t=>{this.colctnArr=[],this.loading=!1})}openModal(t){this.modalService.open(t,{size:"lg"}).result.then(t=>{},t=>{})}cmnModal(t,c,i){if("email"==t){const t=this.modalService.open(d.a,{size:"lg"});t.componentInstance.type="collection",t.componentInstance.data=i}else if("getLink"==t){const t=this.modalService.open(p.a,{size:"lg"});t.componentInstance.type="collection",t.componentInstance.data=i}else if("coll"==t){const t=this.modalService.open(f.a,{size:"lg"});t.componentInstance.colctn=i,t.componentInstance.type=c,t.result.then(t=>{if(t)if("ren"==c)for(let c=0;c<this.colctnArr.length;c++)this.colctnArr[c].id==i.id&&(this.colctnArr[c].name=t.name);else this.listColctn()})}}dismissModal(){this.modalService&&this.modalService.dismissAll()}ngOnDestroy(){this.dismissModal()}}return t.\u0275fac=function(c){return new(c||t)(u.Nb(a.f),u.Nb(m.a),u.Nb(g.b),u.Nb(s.b),u.Nb(e.d))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-collection-list"]],decls:20,vars:13,consts:[[1,"main","main-employee","p-3","container","mt-3"],[1,"mb-2","clearfix","heading","align-self-center"],[1,"float-right"],[1,"fa","mr-3","curs-ptr","align-self-center",3,"ngClass","matTooltip","click"],[1,"btn","btn-primary","mb-2",3,"click"],["class","text-right mb-2",4,"ngIf"],["ngbNav","",1,"nav-tabs","justify-content-end","border-bottom","border-color-grey","mr-3","w-100","pr-2",3,"activeId","activeIdChange"],["fldrNav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],[4,"ngIf"],["class","row collections",4,"ngIf"],[3,"type",4,"ngIf"],[3,"selArr","isActive","actDeact","clrSelData",4,"ngIf"],[1,"text-right","mb-2"],["class","text-primary ml-2 curs-ptr",3,"click",4,"ngFor","ngForOf"],[1,"text-primary","ml-2","curs-ptr",3,"click"],[1,"fa","ml-1",3,"ngClass"],[4,"ngIf","ngIfElse"],["noColctn",""],[1,"mt-2","row","collections"],["class","card-container col-lg-3 col-md-4 col-sm-6 my-3",4,"ngFor","ngForOf"],[1,"card-container","col-lg-3","col-md-4","col-sm-6","my-3"],[1,"card","mx-auto"],[1,"card-body","curs-ptr",3,"click"],[3,"src"],[1,"card-footer"],[1,"name","text-truncate"],[1,"float-left","text-secondary","d-flex"],[1,"date"],[1,"mx-2"],[1,"items"],[3,"change"],[1,"options","rounded"],[1,"dropleft"],["type","button","id","shareDD","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn"],[1,"fas","fa-share-square"],["aria-labelledby","shareDD",1,"dropdown-menu"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fa","fa-envelope","mr-1"],[1,"fa","fa-link","mr-1"],[1,"btn","my-1",3,"click"],["type","button","id","optionsDD","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn"],[1,"fas","fa-ellipsis-h"],["aria-labelledby","optionsDD",1,"dropdown-menu"],[1,"fas","fa-copy","mr-1"],[1,"fas","fa-edit","mr-1"],[1,"dropdown-item","dd"],[1,"fa","fa-download","mr-1"],[1,"dropdown-menu"],[1,"dropdown-item"],[1,"fas","fa-file-pdf","mr-1"],[1,"fas","fa-file-alt","mr-1"],[1,"mx-auto","mt-5","text-secondary",2,"font-size","20px"],[1,"row","collections"],[1,"table","table-hover"],[1,"border-top-0"],["class","border-top-0 curs-ptr",3,"click",4,"ngFor","ngForOf"],["class","mx-auto mt-5 text-secondary","style","font-size: 20px;",4,"ngIf"],[1,"border-top-0","curs-ptr",3,"click"],[4,"ngFor","ngForOf"],[1,"align-middle"],[1,"align-middle","curs-ptr",3,"click"],[1,"d-flex"],[1,"imagePreview","border","mr-2"],[1,"name","align-self-center"],[1,"align-middle","options"],[1,"btn",3,"click"],[3,"type"],[3,"selArr","isActive","actDeact","clrSelData"]],template:function(t,c){1&t&&(u.Tb(0,"div",0),u.Tb(1,"h3",1),u.Lc(2," Collections "),u.Tb(3,"div",2),u.Tb(4,"i",3),u.ec("click",(function(){return c.view=!c.view})),u.Sb(),u.Tb(5,"button",4),u.ec("click",(function(){return c.cmnModal("coll","add")})),u.Lc(6,"New Collection"),u.Sb(),u.Sb(),u.Sb(),u.Jc(7,T,3,1,"div",5),u.Tb(8,"ul",6,7),u.ec("activeIdChange",(function(t){return c.activeColctn=t}))("activeIdChange",(function(){return c.changeDispColctn()})),u.Tb(10,"li",8),u.Tb(11,"a",9),u.Lc(12,"Active"),u.Sb(),u.Sb(),u.Tb(13,"li",8),u.Tb(14,"a",9),u.Lc(15,"Disabled"),u.Sb(),u.Sb(),u.Sb(),u.Jc(16,w,4,2,"ng-container",10),u.Jc(17,x,10,3,"div",11),u.Jc(18,M,1,1,"app-loader",12),u.Sb(),u.Jc(19,$,1,2,"app-sel-itm-fxd-div",13)),2&t&&(u.Ab(4),u.qc("matTooltip",c.view?"List View":"Grid View"),u.pc("ngClass",u.uc(10,N,c.view,!c.view)),u.Ab(3),u.pc("ngIf",c.view),u.Ab(1),u.pc("activeId",c.activeColctn),u.Ab(2),u.pc("ngbNavItem",1),u.Ab(3),u.pc("ngbNavItem",2),u.Ab(3),u.pc("ngIf",c.view&&!c.loading),u.Ab(1),u.pc("ngIf",!c.view),u.Ab(1),u.pc("ngIf",c.loading),u.Ab(1),u.pc("ngIf",c.selColctnArr.length>0))},directives:[n.k,l.a,n.m,a.h,a.i,a.j,n.l,o.a,h.a,v.a],pipes:[n.e],styles:[""]}),t})();var J=i("zJym"),j=i("Amnm"),z=i("IpHC"),P=i("3Pt+"),E=i("kmnG"),G=i("qFsG"),U=i("j+Cn");let Q=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(c){return new(c||t)},providers:[U.a],imports:[[n.c,P.h,P.s,E.e,G.c,J.a]]}),t})();var q=i("u7Mw");const K=[{path:"",component:F}];let R=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(c){return new(c||t)},providers:[m.a],imports:[[n.c,e.h.forChild(K),o.b,l.b,J.a,s.e,a.k,j.a,z.a,Q,q.a]]}),t})()}}]);