(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{FpTR:function(e,n,a){"use strict";a.r(n),a.d(n,"WebAppModule",(function(){return g}));var i=a("ofXK"),r=a("tyNb"),t=a("fUzB"),o=a("fXoL"),b=a("p0iN"),l=a("1kSV");const s=function(){return["active"]};let d=(()=>{class e{constructor(e,n){this.tokenDataServ=e,this.modalService=n,this.navbarHandler=()=>{window.screen.width<=650?this.smallScreen():this.largeScreen()},this.smallScreen=()=>{this.nav.remove();let e=document.querySelector(".toggle-navbar-bottom").children[0];e.innerHTML!=this.nav.innerHTML&&(e.innerHTML=this.nav.innerHTML)},this.largeScreen=()=>{let e=document.querySelector(".toggle-navbar-bottom").children[0];if(e.children[0])for(let a=0;a<this.nav.children.length;a++)e.children[a]&&e.children[a].remove();let n=document.querySelector(".navbar-collapse");n.contains(this.nav)||n.appendChild(this.nav)}}ngOnInit(){this.getToken(),this.nav=document.querySelector(".toggle-navbar"),window.addEventListener("resize",()=>{this.navbarHandler()}),this.navbarHandler()}getToken(){this.userInfo=this.tokenDataServ.getUser()}logout(){this.tokenDataServ.removeAll(),this.nav=null}openModal(){this.modalService.open(t.a,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(e=>{console.log("Closed with: "+e)},e=>{console.log("Dismissed "+e)})}disMissMdodal(){this.modalService&&this.modalService.dismissAll()}ngOnDestroy(){this.disMissMdodal()}}return e.\u0275fac=function(n){return new(n||e)(o.Nb(b.a),o.Nb(l.f))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-web-app"]],hostAttrs:[1,"w-100"],decls:85,vars:10,consts:[[1,"navbar","navbar-expand","navbar-light","bg-white","pl-3"],["href","javascript:void(0)",1,"navbar-brand","pr-3","border-right","py-2"],["src","assets/images/logo.png","alt","Hi Force"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","align-self-center"],[1,"nav-link",3,"routerLinkActive","routerLink"],[1,"navbar-nav","toggle-navbar"],["href","javascript:void(0)",1,"nav-link"],[1,"fas","fa-search","align-bottom","icon-size"],[1,"nav-item","align-self-center","ml-2","dropdown","notification"],["href","javascript:void(0)","id","notificatioDD","data-toggle","dropdown","aria-expanded","false",1,"nav-link"],[1,"fas","fa-bell","align-bottom","icon-size"],["aria-labelledby","notificatioDD",1,"dropdown-menu","large-dropdown","dropdown-menu-right"],[1,"dropdown-item","text-dark","font-weight-bold","no-bg-hover"],[1,"badge","badge-danger","float-right"],[1,"dropdown-divider"],["href","javascript:void(0)",1,"dropdown-item","row","m-0","mt-2"],[1,"col-3","align-self-center"],["src","assets/images/avatar.png",1,"w-100"],[1,"col-9","align-self-center","row"],[1,"name"],[1,"time-active","text-hi-dark-grey"],[1,"ml-auto","align-self-center"],[1,"fas","fa-times","p-1"],[1,"nav-item","align-self-center","dropdown","ml-4","user"],["href","javascript:void(0)","id","userDropdown","role","button","data-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["src","assets/images/avatar.png"],[1,"align-middle"],["aria-labelledby","userDropdown",1,"dropdown-menu","large-dropdown","dropdown-menu-right"],[1,"dropdown-item","row","m-0","p-2","mt-2","no-bg-hover","text-dark"],[1,"col-3"],[1,"username"],[1,"position","text-hi-grey"],[1,"badge","badge-danger"],[1,"dropdown-item",3,"routerLink"],[1,"fas","fa-user","mr-2"],[1,"fas","fa-user-shield","mr-2"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-lock","mr-2"],["href","javascript:void(0)",1,"dropdown-item",3,"click"],[1,"fas","fa-sign-out-alt","mr-2"],[1,"navbar-light","toggle-navbar-bottom"],[1,"navbar-nav","toggle-navbar-bottom-nav","list-unstyled","justify-content-end","mb-0","bg-white"]],template:function(e,n){1&e&&(o.Tb(0,"header"),o.Tb(1,"nav",0),o.Tb(2,"a",1),o.Ob(3,"img",2),o.Sb(),o.Tb(4,"div",3),o.Tb(5,"ul",4),o.Tb(6,"li",5),o.Tb(7,"a",6),o.Jc(8,"Resource"),o.Sb(),o.Sb(),o.Tb(9,"li",5),o.Tb(10,"a",6),o.Jc(11,"Shares"),o.Sb(),o.Sb(),o.Sb(),o.Tb(12,"ul",7),o.Tb(13,"li",5),o.Tb(14,"a",8),o.Ob(15,"i",9),o.Sb(),o.Sb(),o.Tb(16,"li",10),o.Tb(17,"a",11),o.Ob(18,"i",12),o.Sb(),o.Tb(19,"div",13),o.Tb(20,"h5",14),o.Jc(21,"Notifications"),o.Tb(22,"small",15),o.Jc(23,"8"),o.Sb(),o.Sb(),o.Ob(24,"div",16),o.Tb(25,"a",17),o.Tb(26,"div",18),o.Ob(27,"img",19),o.Sb(),o.Tb(28,"div",20),o.Tb(29,"div"),o.Tb(30,"div",21),o.Jc(31,"Regina Cooper"),o.Sb(),o.Tb(32,"div",22),o.Tb(33,"small"),o.Jc(34,"1 min ago"),o.Sb(),o.Sb(),o.Sb(),o.Tb(35,"div",23),o.Ob(36,"i",24),o.Sb(),o.Sb(),o.Sb(),o.Tb(37,"a",17),o.Tb(38,"div",18),o.Ob(39,"img",19),o.Sb(),o.Tb(40,"div",20),o.Tb(41,"div"),o.Tb(42,"div",21),o.Jc(43,"Regina Cooper"),o.Sb(),o.Tb(44,"div",22),o.Tb(45,"small"),o.Jc(46,"1 min ago"),o.Sb(),o.Sb(),o.Sb(),o.Tb(47,"div",23),o.Ob(48,"i",24),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(49,"li",25),o.Tb(50,"a",26),o.Ob(51,"img",27),o.Tb(52,"span",28),o.Jc(53),o.Sb(),o.Sb(),o.Tb(54,"div",29),o.Tb(55,"h6",30),o.Tb(56,"div",31),o.Ob(57,"img",19),o.Sb(),o.Tb(58,"div",20),o.Tb(59,"div"),o.Tb(60,"div",32),o.Jc(61),o.Sb(),o.Tb(62,"div",33),o.Tb(63,"small"),o.Jc(64,"Manager"),o.Sb(),o.Sb(),o.Sb(),o.Tb(65,"div",23),o.Tb(66,"span",34),o.Jc(67,"8"),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Ob(68,"div",16),o.Tb(69,"a",35),o.Ob(70,"i",36),o.Jc(71,"My Profile"),o.Sb(),o.Tb(72,"a",35),o.Ob(73,"i",37),o.Jc(74,"Admin"),o.Sb(),o.Tb(75,"a",38),o.ec("click",(function(){return n.openModal()})),o.Ob(76,"i",39),o.Jc(77,"Change Password"),o.Sb(),o.Ob(78,"div",16),o.Tb(79,"a",40),o.ec("click",(function(){return n.logout()})),o.Ob(80,"i",41),o.Jc(81,"Logout "),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(82,"div",42),o.Ob(83,"ul",43),o.Sb(),o.Sb(),o.Ob(84,"router-outlet")),2&e&&(o.Ab(7),o.oc("routerLinkActive",o.rc(8,s))("routerLink","/web-app/resource/collections"),o.Ab(3),o.oc("routerLinkActive",o.rc(9,s))("routerLink","/web-app/share"),o.Ab(43),o.Kc(n.userInfo&&n.userInfo.fN?n.userInfo.fN:"User"),o.Ab(8),o.Kc(n.userInfo&&n.userInfo.fN?n.userInfo.fN:"User"),o.Ab(8),o.oc("routerLink","/web-app/personal-settings"),o.Ab(3),o.oc("routerLink","/dashboard"))},directives:[r.g,r.f,r.i],styles:[""]}),e})();var c=a("NA9/");const v=[{path:"",component:d,children:[{path:"resource",loadChildren:()=>Promise.all([a.e(7),a.e(39)]).then(a.bind(null,"u4mD")).then(e=>e.ResourceModule)},{path:"share",loadChildren:()=>Promise.all([a.e(14),a.e(0),a.e(40)]).then(a.bind(null,"B7dq")).then(e=>e.ShareModule)},{path:"personal-settings",loadChildren:()=>a.e(31).then(a.bind(null,"emTm")).then(e=>e.PrsnlSettModule)}]}];let g=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(n){return new(n||e)},imports:[[i.c,r.h.forChild(v),c.a]]}),e})()}}]);