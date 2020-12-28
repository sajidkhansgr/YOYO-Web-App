(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{lu3c:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginModule",(function(){return x}));var i=t("ofXK"),s=t("3Pt+"),o=t("tyNb"),a=t("bTqV"),n=t("kmnG"),l=t("qFsG"),c=t("NpNY"),b=t("4Yiz"),d=t("fXoL"),u=t("qXBG"),m=t("p0iN"),p=t("5eHb"),g=t("iiaH"),h=t("MBQt"),f=t("668k");function w(e,r){1&e&&(d.Tb(0,"mat-error"),d.Mc(1," Email is required "),d.Sb())}function S(e,r){1&e&&(d.Tb(0,"mat-error"),d.Mc(1," Please enter a valid email address "),d.Sb())}function v(e,r){1&e&&(d.Tb(0,"mat-error"),d.Mc(1," Password is required "),d.Sb())}function T(e,r){1&e&&(d.Tb(0,"mat-error"),d.Mc(1," Password must be at least 6 characters long "),d.Sb())}function y(e,r){1&e&&d.Ob(0,"app-loader",17),2&e&&d.pc("type","btn")}const k=function(e,r){return{"fa-eye":e,"fa-eye-slash":r}};function F(e,r){if(1&e){const e=d.Ub();d.Tb(0,"div"),d.Tb(1,"form",4),d.ec("ngSubmit",(function(){return d.Bc(e),d.ic().login()})),d.Tb(2,"div",5),d.Ob(3,"img",6),d.Sb(),d.Tb(4,"mat-form-field",7),d.Tb(5,"mat-label"),d.Mc(6,"Email"),d.Sb(),d.Ob(7,"input",8),d.Ob(8,"i",9),d.Kc(9,w,2,0,"mat-error",3),d.Kc(10,S,2,0,"mat-error",3),d.Sb(),d.Tb(11,"mat-form-field",7),d.Tb(12,"mat-label"),d.Mc(13,"Password"),d.Sb(),d.Ob(14,"input",10),d.Tb(15,"i",11),d.ec("click",(function(){d.Bc(e);const r=d.ic();return r.hide=!r.hide})),d.Sb(),d.Kc(16,v,2,0,"mat-error",3),d.Kc(17,T,2,0,"mat-error",3),d.Sb(),d.Tb(18,"div",12),d.Tb(19,"a",13),d.Mc(20," Forgot Password? "),d.Sb(),d.Sb(),d.Tb(21,"div",14),d.Tb(22,"button",15),d.Kc(23,y,1,1,"app-loader",16),d.Mc(24," LOGIN "),d.Sb(),d.Sb(),d.Sb(),d.Sb()}if(2&e){const e=d.ic();d.Ab(1),d.pc("formGroup",e.loginForm),d.Ab(8),d.pc("ngIf",e.loginForm.get("email").hasError("required")),d.Ab(1),d.pc("ngIf",!e.loginForm.get("email").hasError("required")&&e.loginForm.get("email").hasError("invalidEmail")),d.Ab(4),d.pc("type",e.hide?"password":"text"),d.Ab(1),d.pc("ngClass",d.uc(10,k,e.hide,!e.hide)),d.Ab(1),d.pc("ngIf",e.loginForm.get("password").hasError("required")),d.Ab(1),d.pc("ngIf",!e.loginForm.get("password").hasError("required")&&e.loginForm.get("password").hasError("minlength")),d.Ab(2),d.pc("routerLink","/auth/forgot-password"),d.Ab(3),d.pc("disabled",e.loginForm.invalid||e.disabled),d.Ab(1),d.pc("ngIf",e.disabled)}}let q=(()=>{class e{constructor(e,r,t,i,o,a,n){this.fb=e,this.authSer=r,this.tokenDataServ=t,this.router=i,this.route=o,this.toastr=a,this.dataServ=n,this.disabled=!1,this.hide=!0,this.loginForm=this.fb.group({email:["",[s.u.required,c.a.emailValidator]],password:["",[s.u.required,s.u.minLength(6)]]})}ngOnInit(){this.redirectUrl=this.route.snapshot.queryParamMap.get("redirect_uri")}login(){this.disabled=!0,this.loginForm.valid&&this.authSer.login(this.loginForm.value).subscribe(e=>{if(e&&e.result&&e.result.token&&e.result.id)if(e.result.enforceEmployeePasswordReset)this.toastr.success("Please reset your password first","Success"),this.router.navigate(["/auth/reset-password"],{queryParams:{token:e.result.token,email:this.loginForm.value.email,enforce:1}});else if(this.tokenDataServ.setTokenAndUser(e.result),this.toastr.success("Login successfully","Success"),this.dataServ.passDataSend("login"),1==e.result.roleId||2==e.result.roleId){let e=b.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else if(this.redirectUrl&&this.redirectUrl.includes("/web-app")){let e=b.a.redirectToUrl(this.redirectUrl);this.router.navigate([e])}else this.router.navigate(["/web-app/resource/experiences"]);else this.toastr.error(e.message||"Please check email or password!","Error!"),this.disabled=!1},e=>{this.disabled=!1})}}return e.\u0275fac=function(r){return new(r||e)(d.Nb(s.d),d.Nb(u.a),d.Nb(m.a),d.Nb(o.d),d.Nb(o.a),d.Nb(p.b),d.Nb(g.a))},e.\u0275cmp=d.Hb({type:e,selectors:[["app-login"]],hostAttrs:[1,"w-100"],decls:5,vars:1,consts:[[1,"login-ui","row","mx-0","bg-white"],[1,"col-md-6","p-0","d-none","d-md-block"],[1,"col-md-6","align-self-center"],[4,"ngIf"],["name","loginForm","novalidate","",1,"w-75","w-md-90","w-sm-100","mx-auto","p-2","p-sm-4",3,"formGroup","ngSubmit"],[1,"mb-5"],["src","assets/images/logo.png","alt","Logo",2,"width","300px"],["appearance","outline",1,"w-100"],["matInput","","formControlName","email","maxlength","50","required",""],["matSuffix","",1,"fas","fa-envelope"],["matInput","","formControlName","password","maxlength","15","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],[1,"text-right"],[2,"font-size","14px",3,"routerLink"],[1,"text-center","mt-3"],["aria-label","LOG IN",1,"login-btn","mt-3","btn",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(e,r){1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Ob(2,"app-auth-slides"),d.Sb(),d.Tb(3,"div",2),d.Kc(4,F,25,13,"div",3),d.Sb(),d.Sb()),2&e&&(d.Ab(4),d.pc("ngIf",r.loginForm))},directives:[h.a,i.m,s.w,s.n,s.g,n.c,n.g,l.b,s.c,s.m,s.f,s.i,s.t,n.i,i.k,o.g,n.b,f.a],styles:[""]}),e})();var I=t("zJym"),N=t("wV0L");const A=[{path:"",component:q}];let x=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(r){return new(r||e)},providers:[u.a],imports:[[i.c,o.h.forChild(A),s.h,s.s,a.b,n.e,l.c,I.a,N.a]]}),e})()}}]);