(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{FpTR:function(e,n,r){"use strict";r.r(n),r.d(n,"WebAppModule",(function(){return f}));var t=r("ofXK"),i=r("tyNb"),a=r("fXoL"),o=r("p0iN"),s=r("fUzB"),b=r("1kSV");function l(e,n){1&e&&(a.Tb(0,"a",44),a.Ob(1,"i",45),a.Mc(2," Admin "),a.Sb()),2&e&&a.pc("routerLink","/dashboard")}const d=function(){return["active"]};let c=(()=>{class e{constructor(e,n){this.modalService=e,this.tokenDataServ=n,this.navbarHandler=()=>{window.screen.width<=650?this.smallScreen():this.largeScreen()},this.smallScreen=()=>{this.nav.remove();let e=document.querySelector(".toggle-navbar-bottom").children[0];e.innerHTML!=this.nav.innerHTML&&(e.innerHTML=this.nav.innerHTML)},this.largeScreen=()=>{let e=document.querySelector(".toggle-navbar-bottom").children[0];if(e.children[0])for(let r=0;r<this.nav.children.length;r++)e.children[r]&&e.children[r].remove();let n=document.querySelector(".navbar-collapse");n.contains(this.nav)||n.appendChild(this.nav)}}ngOnInit(){this.nav=document.querySelector(".toggle-navbar"),window.addEventListener("resize",()=>{this.navbarHandler()}),this.navbarHandler()}logout(){this.tokenDataServ.removeAll(),this.nav=null}openModal(){this.modalService.open(s.a,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(e=>{},e=>{})}disMissMdodal(){this.modalService&&this.modalService.dismissAll()}ngOnDestroy(){this.disMissMdodal()}}return e.\u0275fac=function(n){return new(n||e)(a.Nb(b.h),a.Nb(o.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["web-app-header"]],inputs:{userInfo:"userInfo"},decls:82,vars:10,consts:[[1,"navbar","navbar-expand","navbar-light","bg-white","pl-3"],["href","javascript:void(0)",1,"navbar-brand","pr-3","border-right","py-2"],["src","assets/images/logo.png","alt","Hi Force"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","align-self-center"],[1,"nav-link",3,"routerLinkActive","routerLink"],[1,"navbar-nav","toggle-navbar"],["href","javascript:void(0)",1,"nav-link"],[1,"fas","fa-search","align-bottom","icon-size"],[1,"nav-item","align-self-center","ml-2","dropdown","notification"],["href","javascript:void(0)","id","notificatioDD","data-toggle","dropdown","aria-expanded","false",1,"nav-link"],[1,"fas","fa-bell","align-bottom","icon-size"],["aria-labelledby","notificatioDD",1,"dropdown-menu","large-dropdown","dropdown-menu-right"],[1,"dropdown-item","text-dark","font-weight-bold","no-bg-hover"],[1,"badge","badge-danger","float-right"],[1,"dropdown-divider"],["href","javascript:void(0)",1,"dropdown-item","row","m-0","mt-2"],[1,"col-3","align-self-center"],["src","assets/images/avatar.png",1,"w-100"],[1,"col-9","align-self-center","row"],[1,"name"],[1,"time-active","text-hi-dark-grey"],[1,"ml-auto","align-self-center"],[1,"fas","fa-times","p-1"],[1,"nav-item","align-self-center","dropdown","ml-4","user"],["href","javascript:void(0)","id","userDropdown","role","button","data-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["src","assets/images/avatar.png"],[1,"align-middle"],["aria-labelledby","userDropdown",1,"dropdown-menu","large-dropdown","dropdown-menu-right"],[1,"dropdown-item","row","m-0","p-2","mt-2","no-bg-hover","text-dark"],[1,"col-3"],[1,"username"],[1,"position","text-hi-grey"],[1,"badge","badge-danger"],[1,"dropdown-item",3,"routerLink"],[1,"fas","fa-user","mr-2"],["class","dropdown-item","target","_blank",3,"routerLink",4,"ngIf"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-lock","mr-2"],["href","javascript:void(0)",1,"dropdown-item",3,"click"],[1,"fas","fa-sign-out-alt","mr-2"],[1,"navbar-light","toggle-navbar-bottom"],[1,"navbar-nav","toggle-navbar-bottom-nav","list-unstyled","justify-content-end","mb-0","bg-white"],["target","_blank",1,"dropdown-item",3,"routerLink"],[1,"fas","fa-user-shield","mr-2"]],template:function(e,n){1&e&&(a.Tb(0,"header"),a.Tb(1,"nav",0),a.Tb(2,"a",1),a.Ob(3,"img",2),a.Sb(),a.Tb(4,"div",3),a.Tb(5,"ul",4),a.Tb(6,"li",5),a.Tb(7,"a",6),a.Mc(8,"Resource"),a.Sb(),a.Sb(),a.Tb(9,"li",5),a.Tb(10,"a",6),a.Mc(11,"Shares"),a.Sb(),a.Sb(),a.Sb(),a.Tb(12,"ul",7),a.Tb(13,"li",5),a.Tb(14,"a",8),a.Ob(15,"i",9),a.Sb(),a.Sb(),a.Tb(16,"li",10),a.Tb(17,"a",11),a.Ob(18,"i",12),a.Sb(),a.Tb(19,"div",13),a.Tb(20,"h5",14),a.Mc(21," Notifications"),a.Tb(22,"small",15),a.Mc(23,"8"),a.Sb(),a.Sb(),a.Ob(24,"div",16),a.Tb(25,"a",17),a.Tb(26,"div",18),a.Ob(27,"img",19),a.Sb(),a.Tb(28,"div",20),a.Tb(29,"div"),a.Tb(30,"div",21),a.Mc(31,"Regina Cooper"),a.Sb(),a.Tb(32,"div",22),a.Tb(33,"small"),a.Mc(34,"1 min ago"),a.Sb(),a.Sb(),a.Sb(),a.Tb(35,"div",23),a.Ob(36,"i",24),a.Sb(),a.Sb(),a.Sb(),a.Tb(37,"a",17),a.Tb(38,"div",18),a.Ob(39,"img",19),a.Sb(),a.Tb(40,"div",20),a.Tb(41,"div"),a.Tb(42,"div",21),a.Mc(43,"Regina Cooper"),a.Sb(),a.Tb(44,"div",22),a.Tb(45,"small"),a.Mc(46,"1 min ago"),a.Sb(),a.Sb(),a.Sb(),a.Tb(47,"div",23),a.Ob(48,"i",24),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(49,"li",25),a.Tb(50,"a",26),a.Ob(51,"img",27),a.Tb(52,"span",28),a.Mc(53),a.Sb(),a.Sb(),a.Tb(54,"div",29),a.Tb(55,"h6",30),a.Tb(56,"div",31),a.Ob(57,"img",19),a.Sb(),a.Tb(58,"div",20),a.Tb(59,"div"),a.Tb(60,"div",32),a.Mc(61),a.Sb(),a.Tb(62,"div",33),a.Tb(63,"small"),a.Mc(64,"Manager"),a.Sb(),a.Sb(),a.Sb(),a.Tb(65,"div",23),a.Tb(66,"span",34),a.Mc(67,"8"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Ob(68,"div",16),a.Tb(69,"a",35),a.Ob(70,"i",36),a.Mc(71,"My Profile"),a.Sb(),a.Kc(72,l,3,1,"a",37),a.Tb(73,"a",38),a.ec("click",(function(){return n.openModal()})),a.Ob(74,"i",39),a.Mc(75,"Change Password"),a.Sb(),a.Ob(76,"div",16),a.Tb(77,"a",40),a.ec("click",(function(){return n.logout()})),a.Ob(78,"i",41),a.Mc(79,"Logout"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(80,"div",42),a.Ob(81,"ul",43),a.Sb(),a.Sb()),2&e&&(a.Ab(7),a.pc("routerLinkActive",a.sc(8,d))("routerLink","/web-app/resource"),a.Ab(3),a.pc("routerLinkActive",a.sc(9,d))("routerLink","/web-app/share"),a.Ab(43),a.Nc(n.userInfo&&n.userInfo.fN?n.userInfo.fN:"User"),a.Ab(8),a.Nc(n.userInfo&&n.userInfo.fN?n.userInfo.fN:"User"),a.Ab(8),a.pc("routerLink","/web-app/personal-settings"),a.Ab(3),a.pc("ngIf",n.userInfo&&(1==n.userInfo.rid||2==n.userInfo.rid)))},directives:[i.g,i.f,t.m],styles:[""]}),e})();function u(e,n){if(1&e&&a.Ob(0,"web-app-header",1),2&e){const e=a.ic();a.pc("userInfo",e.usrInfo)}}let p=(()=>{class e{constructor(e,n){this.loc=e,this.tokenDataServ=n,this.excUrls=["view"]}ngOnInit(){this.getToken()}getToken(){this.usrInfo=this.tokenDataServ.getUser()}isViewPage(){return this.excUrls.filter(e=>-1!==this.loc.path().indexOf(e)).length>0}}return e.\u0275fac=function(n){return new(n||e)(a.Nb(t.i),a.Nb(o.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-web-app"]],hostAttrs:[1,"w-100"],decls:2,vars:1,consts:[[3,"userInfo",4,"ngIf"],[3,"userInfo"]],template:function(e,n){1&e&&(a.Kc(0,u,1,1,"web-app-header",0),a.Ob(1,"router-outlet")),2&e&&a.pc("ngIf",!n.isViewPage())},directives:[t.m,i.i,c],styles:[""]}),e})();var v=r("NA9/");let h=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(n){return new(n||e)},imports:[[t.c,i.h,v.a]]}),e})();const g=[{path:"",component:p,children:[{path:"",pathMatch:"full",redirectTo:"resource"},{path:"resource",loadChildren:()=>Promise.all([r.e(6),r.e(42)]).then(r.bind(null,"u4mD")).then(e=>e.ResourceModule)},{path:"share",loadChildren:()=>Promise.all([r.e(12),r.e(0),r.e(43)]).then(r.bind(null,"B7dq")).then(e=>e.ShareModule)},{path:"personal-settings",loadChildren:()=>r.e(37).then(r.bind(null,"emTm")).then(e=>e.PrsnlSettModule)},{path:"view/:id",loadChildren:()=>Promise.all([r.e(6),r.e(3),r.e(0),r.e(26)]).then(r.bind(null,"sNI4")).then(e=>e.ViewModule)}]}];let f=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(n){return new(n||e)},imports:[[t.c,i.h.forChild(g),h]]}),e})()}}]);