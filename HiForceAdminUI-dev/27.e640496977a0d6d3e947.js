(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{lu3c:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginModule",(function(){return I}));var i=t("ofXK"),o=t("3Pt+"),a=t("tyNb"),s=t("bTqV"),n=t("kmnG"),c=t("qFsG"),l=t("zJym"),b=t("NpNY"),d=t("4Yiz"),u=t("fXoL"),m=t("qXBG"),p=t("p0iN"),g=t("5eHb"),h=t("iiaH"),f=t("668k");function S(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Email is required "),u.Sb())}function w(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Please enter a valid email address "),u.Sb())}function v(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Password is required "),u.Sb())}function T(e,r){1&e&&(u.Tb(0,"mat-error"),u.Lc(1," Password must be at least 6 characters long "),u.Sb())}function L(e,r){1&e&&u.Ob(0,"app-loader",18),2&e&&u.pc("type","btn")}const y=function(e,r){return{"fa-eye":e,"fa-eye-slash":r}};function A(e,r){if(1&e){const e=u.Ub();u.Tb(0,"div"),u.Tb(1,"form",7),u.ec("ngSubmit",(function(){return u.Ac(e),u.ic().login()})),u.Tb(2,"mat-form-field",8),u.Tb(3,"mat-label"),u.Lc(4,"Email"),u.Sb(),u.Ob(5,"input",9),u.Ob(6,"i",10),u.Jc(7,S,2,0,"mat-error",6),u.Jc(8,w,2,0,"mat-error",6),u.Sb(),u.Tb(9,"mat-form-field",8),u.Tb(10,"mat-label"),u.Lc(11,"Password"),u.Sb(),u.Ob(12,"input",11),u.Tb(13,"i",12),u.ec("click",(function(){u.Ac(e);const r=u.ic();return r.hide=!r.hide})),u.Sb(),u.Jc(14,v,2,0,"mat-error",6),u.Jc(15,T,2,0,"mat-error",6),u.Sb(),u.Tb(16,"div",13),u.Tb(17,"a",14),u.Lc(18," Forgot Password? "),u.Sb(),u.Sb(),u.Tb(19,"div",15),u.Tb(20,"button",16),u.Jc(21,L,1,1,"app-loader",17),u.Lc(22," LOGIN "),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&e){const e=u.ic();u.Ab(1),u.pc("formGroup",e.loginForm),u.Ab(6),u.pc("ngIf",e.loginForm.get("email").hasError("required")),u.Ab(1),u.pc("ngIf",!e.loginForm.get("email").hasError("required")&&e.loginForm.get("email").hasError("invalidEmail")),u.Ab(4),u.pc("type",e.hide?"password":"text"),u.Ab(1),u.pc("ngClass",u.uc(10,y,e.hide,!e.hide)),u.Ab(1),u.pc("ngIf",e.loginForm.get("password").hasError("required")),u.Ab(1),u.pc("ngIf",!e.loginForm.get("password").hasError("required")&&e.loginForm.get("password").hasError("minlength")),u.Ab(2),u.pc("routerLink","/auth/forgot-password"),u.Ab(3),u.pc("disabled",e.loginForm.invalid||e.disabled),u.Ab(1),u.pc("ngIf",e.disabled)}}const F=[{path:"",component:(()=>{class e{constructor(e,r,t,i,a,s,n){this.fb=e,this.authSer=r,this.tokenDataServ=t,this.router=i,this.route=a,this.toastr=s,this.dataServ=n,this.disabled=!1,this.hide=!0,this.loginForm=this.fb.group({email:["",[o.u.required,b.a.emailValidator]],password:["",[o.u.required,o.u.minLength(6)]]})}ngOnInit(){console.log("dsaasdasd"),this.redirectUrl=this.route.snapshot.queryParamMap.get("redirect_uri")}login(){this.disabled=!0,this.loginForm.valid&&this.authSer.login(this.loginForm.value).subscribe(e=>{if(console.log("dsa"),e&&e.result&&e.result.token&&e.result.id)if(this.tokenDataServ.setTokenAndUser(e.result),this.toastr.success("Login successfully","Success"),this.dataServ.passDataSend("login"),1==e.result.roleId||2==e.result.roleId){let e=d.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else if(this.redirectUrl&&this.redirectUrl.includes("/web-app")){let e=d.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else this.router.navigate(["/web-app/resource/experiences"]);else this.toastr.error(e.message||"Please check email or password!","Error!"),this.disabled=!1},e=>{this.disabled=!1})}}return e.\u0275fac=function(r){return new(r||e)(u.Nb(o.d),u.Nb(m.a),u.Nb(p.a),u.Nb(a.d),u.Nb(a.a),u.Nb(g.b),u.Nb(h.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-login"]],hostAttrs:[1,"w-100"],decls:8,vars:1,consts:[[1,"text-center","mt-4"],["src","assets/images/logo.png","alt","Logo"],[1,"card","w-40","mx-auto","my-4"],[1,"card-header","text-center"],[1,"mb-0","font-weight-bold"],[1,"card-body","p-5"],[4,"ngIf"],["name","loginForm","novalidate","",1,"w-75","mx-auto","p-4",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["matInput","","formControlName","email","maxlength","50","required",""],["matSuffix","",1,"fas","fa-envelope"],["matInput","","formControlName","password","maxlength","15","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],[1,"text-right"],[2,"font-size","14px",3,"routerLink"],[1,"text-center"],["aria-label","LOG IN",1,"mt-3","btn","btn-primary",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(e,r){1&e&&(u.Tb(0,"div",0),u.Ob(1,"img",1),u.Sb(),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"h4",4),u.Lc(5,"Login"),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Jc(7,A,23,13,"div",6),u.Sb(),u.Sb()),2&e&&(u.Ab(7),u.pc("ngIf",r.loginForm))},directives:[i.m,o.w,o.n,o.g,n.c,n.g,c.b,o.c,o.m,o.f,o.i,o.t,n.i,i.k,a.g,n.b,f.a],styles:[""]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(r){return new(r||e)},providers:[m.a],imports:[[i.c,a.h.forChild(F),o.h,o.s,s.b,n.e,c.c,l.a]]}),e})()}}]);