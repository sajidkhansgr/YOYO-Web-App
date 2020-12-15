(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{lu3c:function(e,t,r){"use strict";r.r(t),r.d(t,"LoginModule",(function(){return x}));var i=r("ofXK"),a=r("3Pt+"),s=r("tyNb"),o=r("bTqV"),l=r("kmnG"),n=r("qFsG"),c=r("zJym"),d=r("NpNY"),b=r("4Yiz"),u=r("fXoL"),m=r("qXBG"),p=r("p0iN"),g=r("5eHb"),h=r("iiaH"),f=r("668k");function S(e,t){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Email is required "),u.Sb())}function v(e,t){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Please enter a valid email address "),u.Sb())}function w(e,t){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Password is required "),u.Sb())}function T(e,t){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Password must be at least 6 characters long "),u.Sb())}function L(e,t){1&e&&u.Ob(0,"app-loader",32),2&e&&u.pc("type","btn")}const k=function(e,t){return{"fa-eye":e,"fa-eye-slash":t}};function q(e,t){if(1&e){const e=u.Ub();u.Tb(0,"div"),u.Tb(1,"form",19),u.ec("ngSubmit",(function(){return u.Ac(e),u.ic().login()})),u.Tb(2,"div",20),u.Ob(3,"img",21),u.Sb(),u.Tb(4,"mat-form-field",22),u.Tb(5,"mat-label"),u.Lc(6,"Email"),u.Sb(),u.Ob(7,"input",23),u.Ob(8,"i",24),u.Jc(9,S,2,0,"mat-error",18),u.Jc(10,v,2,0,"mat-error",18),u.Sb(),u.Tb(11,"mat-form-field",22),u.Tb(12,"mat-label"),u.Lc(13,"Password"),u.Sb(),u.Ob(14,"input",25),u.Tb(15,"i",26),u.ec("click",(function(){u.Ac(e);const t=u.ic();return t.hide=!t.hide})),u.Sb(),u.Jc(16,w,2,0,"mat-error",18),u.Jc(17,T,2,0,"mat-error",18),u.Sb(),u.Tb(18,"div",27),u.Tb(19,"a",28),u.Lc(20," Forgot Password? "),u.Sb(),u.Sb(),u.Tb(21,"div",29),u.Tb(22,"button",30),u.Jc(23,L,1,1,"app-loader",31),u.Lc(24," LOGIN "),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&e){const e=u.ic();u.Ab(1),u.pc("formGroup",e.loginForm),u.Ab(8),u.pc("ngIf",e.loginForm.get("email").hasError("required")),u.Ab(1),u.pc("ngIf",!e.loginForm.get("email").hasError("required")&&e.loginForm.get("email").hasError("invalidEmail")),u.Ab(4),u.pc("type",e.hide?"password":"text"),u.Ab(1),u.pc("ngClass",u.uc(10,k,e.hide,!e.hide)),u.Ab(1),u.pc("ngIf",e.loginForm.get("password").hasError("required")),u.Ab(1),u.pc("ngIf",!e.loginForm.get("password").hasError("required")&&e.loginForm.get("password").hasError("minlength")),u.Ab(2),u.pc("routerLink","/auth/forgot-password"),u.Ab(3),u.pc("disabled",e.loginForm.invalid||e.disabled),u.Ab(1),u.pc("ngIf",e.disabled)}}const I=[{path:"",component:(()=>{class e{constructor(e,t,r,i,s,o,l){this.fb=e,this.authSer=t,this.tokenDataServ=r,this.router=i,this.route=s,this.toastr=o,this.dataServ=l,this.disabled=!1,this.hide=!0,this.loginForm=this.fb.group({email:["",[a.u.required,d.a.emailValidator]],password:["",[a.u.required,a.u.minLength(6)]]})}ngOnInit(){this.redirectUrl=this.route.snapshot.queryParamMap.get("redirect_uri")}login(){this.disabled=!0,this.loginForm.valid&&this.authSer.login(this.loginForm.value).subscribe(e=>{if(e&&e.result&&e.result.token&&e.result.id)if(e.result.enforceEmployeePasswordReset)this.toastr.success("Please reset your password first","Success"),this.router.navigate(["/auth/reset-password"],{queryParams:{token:e.result.token,email:this.loginForm.value.email,enforce:1}});else if(this.tokenDataServ.setTokenAndUser(e.result),this.toastr.success("Login successfully","Success"),this.dataServ.passDataSend("login"),1==e.result.roleId||2==e.result.roleId){let e=b.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else if(this.redirectUrl&&this.redirectUrl.includes("/web-app")){let e=b.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else this.router.navigate(["/web-app/resource/experiences"]);else this.toastr.error(e.message||"Please check email or password!","Error!"),this.disabled=!1},e=>{this.disabled=!1})}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(a.d),u.Nb(m.a),u.Nb(p.a),u.Nb(s.d),u.Nb(s.a),u.Nb(g.b),u.Nb(h.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-login"]],hostAttrs:[1,"w-100"],decls:24,vars:1,consts:[[1,"login-ui","row","mx-0","bg-white"],[1,"col-md-6","p-0","d-none","d-md-block"],["id","carouselExampleIndicators","data-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["data-target","#carouselExampleIndicators","data-slide-to","0",1,"active"],["data-target","#carouselExampleIndicators","data-slide-to","1"],["data-target","#carouselExampleIndicators","data-slide-to","2"],[1,"carousel-inner"],["data-interval","2000",1,"carousel-item","active"],["src","assets/images/carousel.png","alt","First slide",1,"d-block","w-100"],[1,"carousel-caption","text-left"],[1,"pl-5","h1","num"],[1,"ml-5","mt-5"],[1,"font-weight-light"],["data-interval","2000",1,"carousel-item"],["src","assets/images/carousel.png","alt","Second slide",1,"d-block","w-100"],["src","assets/images/carousel.png","alt","Third slide",1,"d-block","w-100"],[1,"col-md-6","align-self-center"],[4,"ngIf"],["name","loginForm","novalidate","",1,"w-75","w-md-90","w-sm-100","mx-auto","p-2","p-sm-4",3,"formGroup","ngSubmit"],[1,"mb-5"],["src","assets/images/logo.png","alt","Logo",2,"width","300px"],["appearance","outline",1,"w-100"],["matInput","","formControlName","email","maxlength","50","required",""],["matSuffix","",1,"fas","fa-envelope"],["matInput","","formControlName","password","maxlength","15","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],[1,"text-right"],[2,"font-size","14px",3,"routerLink"],[1,"text-center","mt-3"],["aria-label","LOG IN",1,"login-btn","mt-3","btn",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(e,t){1&e&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"ol",3),u.Ob(4,"li",4),u.Ob(5,"li",5),u.Ob(6,"li",6),u.Sb(),u.Tb(7,"div",7),u.Tb(8,"div",8),u.Ob(9,"img",9),u.Tb(10,"div",10),u.Tb(11,"div",11),u.Lc(12,"1"),u.Sb(),u.Tb(13,"div",12),u.Tb(14,"h5"),u.Lc(15,"Welcome"),u.Sb(),u.Tb(16,"p",13),u.Lc(17,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum adipisci suscipit minus deleniti quo maxime quos, facere delectus harum? Sequi voluptatem veritatis reiciendis tempore hic quasi alias obcaecati odit!"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(18,"div",14),u.Ob(19,"img",15),u.Sb(),u.Tb(20,"div",14),u.Ob(21,"img",16),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(22,"div",17),u.Jc(23,q,25,13,"div",18),u.Sb(),u.Sb()),2&e&&(u.Ab(23),u.pc("ngIf",t.loginForm))},directives:[i.m,a.w,a.n,a.g,l.c,l.g,n.b,a.c,a.m,a.f,a.i,a.t,l.i,i.k,s.g,l.b,f.a],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},providers:[m.a],imports:[[i.c,s.h.forChild(I),a.h,a.s,o.b,l.e,n.c,c.a]]}),e})()}}]);