(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{lu3c:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginModule",(function(){return q}));var i=t("ofXK"),s=t("3Pt+"),a=t("tyNb"),o=t("bTqV"),n=t("kmnG"),l=t("qFsG"),c=t("zJym"),b=t("NpNY"),d=t("4Yiz"),u=t("fXoL"),m=t("qXBG"),p=t("p0iN"),h=t("5eHb"),g=t("iiaH"),f=t("668k");function w(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Email is required "),u.Sb())}function S(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Please enter a valid email address "),u.Sb())}function v(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Password is required "),u.Sb())}function T(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Password must be at least 6 characters long "),u.Sb())}function y(e,r){1&e&&u.Ob(0,"app-loader",18),2&e&&u.pc("type","btn")}const L=function(e,r){return{"fa-eye":e,"fa-eye-slash":r}};function k(e,r){if(1&e){const e=u.Ub();u.Tb(0,"div"),u.Tb(1,"form",7),u.ec("ngSubmit",(function(){return u.Ac(e),u.ic().login()})),u.Tb(2,"mat-form-field",8),u.Tb(3,"mat-label"),u.Lc(4,"Email"),u.Sb(),u.Ob(5,"input",9),u.Ob(6,"i",10),u.Jc(7,w,2,0,"mat-error",6),u.Jc(8,S,2,0,"mat-error",6),u.Sb(),u.Tb(9,"mat-form-field",8),u.Tb(10,"mat-label"),u.Lc(11,"Password"),u.Sb(),u.Ob(12,"input",11),u.Tb(13,"i",12),u.ec("click",(function(){u.Ac(e);const r=u.ic();return r.hide=!r.hide})),u.Sb(),u.Jc(14,v,2,0,"mat-error",6),u.Jc(15,T,2,0,"mat-error",6),u.Sb(),u.Tb(16,"div",13),u.Tb(17,"a",14),u.Lc(18," Forgot Password? "),u.Sb(),u.Sb(),u.Tb(19,"div",15),u.Tb(20,"button",16),u.Jc(21,y,1,1,"app-loader",17),u.Lc(22," LOGIN "),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&e){const e=u.ic();u.Ab(1),u.pc("formGroup",e.loginForm),u.Ab(6),u.pc("ngIf",e.loginForm.get("email").hasError("required")),u.Ab(1),u.pc("ngIf",!e.loginForm.get("email").hasError("required")&&e.loginForm.get("email").hasError("invalidEmail")),u.Ab(4),u.pc("type",e.hide?"password":"text"),u.Ab(1),u.pc("ngClass",u.uc(10,L,e.hide,!e.hide)),u.Ab(1),u.pc("ngIf",e.loginForm.get("password").hasError("required")),u.Ab(1),u.pc("ngIf",!e.loginForm.get("password").hasError("required")&&e.loginForm.get("password").hasError("minlength")),u.Ab(2),u.pc("routerLink","/auth/forgot-password"),u.Ab(3),u.pc("disabled",e.loginForm.invalid||e.disabled),u.Ab(1),u.pc("ngIf",e.disabled)}}const F=[{path:"",component:(()=>{class e{constructor(e,r,t,i,a,o,n){this.fb=e,this.authSer=r,this.tokenDataServ=t,this.router=i,this.route=a,this.toastr=o,this.dataServ=n,this.disabled=!1,this.hide=!0,this.loginForm=this.fb.group({email:["",[s.u.required,b.a.emailValidator]],password:["",[s.u.required,s.u.minLength(6)]]})}ngOnInit(){this.redirectUrl=this.route.snapshot.queryParamMap.get("redirect_uri")}login(){this.disabled=!0,this.loginForm.valid&&this.authSer.login(this.loginForm.value).subscribe(e=>{if(e&&e.result&&e.result.token&&e.result.id)if(e.result.enforceEmployeePasswordReset)this.toastr.success("Please reset your password first","Success"),this.router.navigate(["/auth/reset-password"],{queryParams:{token:e.result.token,email:this.loginForm.value.email,enforce:1}});else if(this.tokenDataServ.setTokenAndUser(e.result),this.toastr.success("Login successfully","Success"),this.dataServ.passDataSend("login"),1==e.result.roleId||2==e.result.roleId){let e=d.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else if(this.redirectUrl&&this.redirectUrl.includes("/web-app")){let e=d.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else this.router.navigate(["/web-app/resource/experiences"]);else this.toastr.error(e.message||"Please check email or password!","Error!"),this.disabled=!1},e=>{this.disabled=!1})}}return e.\u0275fac=function(r){return new(r||e)(u.Nb(s.d),u.Nb(m.a),u.Nb(p.a),u.Nb(a.d),u.Nb(a.a),u.Nb(h.b),u.Nb(g.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-login"]],hostAttrs:[1,"w-100"],decls:8,vars:1,consts:[[1,"text-center","mt-4"],["src","assets/images/logo.png","alt","Logo"],[1,"card","mx-auto","my-4","w-40","w-lg-50","w-md-60","w-sm-70","w-xs-90"],[1,"card-header","text-center"],[1,"mb-0","font-weight-bold"],[1,"card-body","p-3","p-sm-5"],[4,"ngIf"],["name","loginForm","novalidate","",1,"w-75","w-md-90","w-sm-100","mx-auto","p-2","p-sm-4",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["matInput","","formControlName","email","maxlength","50","required",""],["matSuffix","",1,"fas","fa-envelope"],["matInput","","formControlName","password","maxlength","15","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],[1,"text-right"],[2,"font-size","14px",3,"routerLink"],[1,"text-center"],["aria-label","LOG IN",1,"mt-3","btn","btn-primary",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(e,r){1&e&&(u.Tb(0,"div",0),u.Ob(1,"img",1),u.Sb(),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"h4",4),u.Lc(5,"Login"),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Jc(7,k,23,13,"div",6),u.Sb(),u.Sb()),2&e&&(u.Ab(7),u.pc("ngIf",r.loginForm))},directives:[i.m,s.w,s.n,s.g,n.c,n.g,l.b,s.c,s.m,s.f,s.i,s.t,n.i,i.k,a.g,n.b,f.a],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(r){return new(r||e)},providers:[m.a],imports:[[i.c,a.h.forChild(F),s.h,s.s,o.b,n.e,l.c,c.a]]}),e})()}}]);