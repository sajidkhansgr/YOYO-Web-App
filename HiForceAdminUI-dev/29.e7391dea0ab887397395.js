(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{PQgD:function(s,e,t){"use strict";t.r(e),t.d(e,"CreatePasswordModule",(function(){return N}));var r=t("ofXK"),a=t("3Pt+"),i=t("tyNb"),o=t("bTqV"),n=t("kmnG"),c=t("qFsG"),d=t("XNiG"),b=t("1G5W"),m=t("NpNY"),u=t("fXoL"),l=t("qXBG"),p=t("5eHb"),h=t("p0iN"),f=t("MBQt"),P=t("668k");function w(s,e){1&s&&(u.Tb(0,"mat-error"),u.Mc(1," Password is required "),u.Sb())}function g(s,e){1&s&&(u.Tb(0,"mat-error"),u.Mc(1," Password must be at least 6 characters long "),u.Sb())}function S(s,e){1&s&&(u.Tb(0,"mat-error"),u.Mc(1," Confirm Password is required "),u.Sb())}function v(s,e){1&s&&(u.Tb(0,"mat-error"),u.Mc(1," Password and Confirm Password must match "),u.Sb())}function y(s,e){1&s&&u.Ob(0,"app-loader",14),2&s&&u.pc("type","btn")}const A=function(s,e){return{"fa-eye":s,"fa-eye-slash":e}};function T(s,e){if(1&s){const s=u.Ub();u.Tb(0,"div"),u.Tb(1,"form",4),u.ec("ngSubmit",(function(){return u.Bc(s),u.ic().createPassword()})),u.Tb(2,"div",5),u.Ob(3,"img",6),u.Sb(),u.Tb(4,"mat-form-field",7),u.Tb(5,"mat-label"),u.Mc(6,"Password"),u.Sb(),u.Ob(7,"input",8),u.Tb(8,"i",9),u.ec("click",(function(){u.Bc(s);const e=u.ic();return e.hidePass=!e.hidePass})),u.Sb(),u.Kc(9,w,2,0,"mat-error",3),u.Kc(10,g,2,0,"mat-error",3),u.Sb(),u.Tb(11,"mat-form-field",7),u.Tb(12,"mat-label"),u.Mc(13,"Confirm Password"),u.Sb(),u.Ob(14,"input",10),u.Tb(15,"i",9),u.ec("click",(function(){u.Bc(s);const e=u.ic();return e.hideCPass=!e.hideCPass})),u.Sb(),u.Kc(16,S,2,0,"mat-error",3),u.Kc(17,v,2,0,"mat-error",3),u.Sb(),u.Tb(18,"div",11),u.Tb(19,"button",12),u.Kc(20,y,1,1,"app-loader",13),u.Mc(21," Create Password "),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&s){const s=u.ic();u.Ab(1),u.pc("formGroup",s.createPassForm),u.Ab(6),u.pc("type",s.hidePass?"password":"text"),u.Ab(1),u.pc("ngClass",u.uc(11,A,s.hidePass,!s.hidePass)),u.Ab(1),u.pc("ngIf",s.createPassForm.get("pswd").hasError("required")),u.Ab(1),u.pc("ngIf",!s.createPassForm.get("pswd").hasError("required")&&s.createPassForm.get("pswd").hasError("minlength")),u.Ab(4),u.pc("type",s.hideCPass?"password":"text"),u.Ab(1),u.pc("ngClass",u.uc(14,A,s.hideCPass,!s.hideCPass)),u.Ab(1),u.pc("ngIf",s.createPassForm.get("confirmPswd").hasError("required")),u.Ab(1),u.pc("ngIf",!s.createPassForm.get("confirmPswd").hasError("required")&&s.createPassForm.get("confirmPswd").hasError("passwordsNotMatching")),u.Ab(2),u.pc("disabled",s.createPassForm.invalid||s.loading),u.Ab(1),u.pc("ngIf",s.loading)}}let C=(()=>{class s{constructor(s,e,t,r,a,i){this.fb=s,this.authSer=e,this.toastr=t,this.route=r,this.tokenDataServ=a,this.router=i,this.loading=!1,this.hidePass=!0,this.hideCPass=!0,this._unsubscribeAll=new d.a}ngOnInit(){this.token=this.route.snapshot.queryParamMap.get("token"),this.email=this.route.snapshot.queryParamMap.get("email"),this.createPassForm=this.fb.group({pswd:["",[a.u.required,a.u.minLength(6)]],confirmPswd:["",[a.u.required,m.a.MatchPassword]]}),this.createPassForm.get("pswd").valueChanges.pipe(Object(b.a)(this._unsubscribeAll)).subscribe(()=>{this.createPassForm.get("confirmPswd").updateValueAndValidity()})}createPassword(){this.createPassForm.valid&&(this.loading=!0,this.authSer.createPass({email:this.email,token:this.token,password:this.createPassForm.value.pswd,confirmPassword:this.createPassForm.value.confirmPswd}).subscribe(s=>{s?(this.toastr.success("Password created successfully","Success"),this.tokenDataServ.removeAll(),this.router.navigate(["/auth/login"])):this.toastr.error("Unable to create password, please try after sometime","Error"),this.loading=!1},s=>{this.loading=!1}))}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return s.\u0275fac=function(e){return new(e||s)(u.Nb(a.d),u.Nb(l.a),u.Nb(p.b),u.Nb(i.a),u.Nb(h.a),u.Nb(i.d))},s.\u0275cmp=u.Hb({type:s,selectors:[["app-create-password"]],hostAttrs:[1,"w-100"],decls:5,vars:1,consts:[[1,"login-ui","row","mx-0","bg-white"],[1,"col-md-6","p-0","d-none","d-md-block"],[1,"col-md-6","align-self-center"],[4,"ngIf"],["name","createPassForm","novalidate","",1,"w-75","w-md-90","w-sm-100","mx-auto","p-4",3,"formGroup","ngSubmit"],[1,"mb-5"],["src","assets/images/logo.png","alt","Logo",2,"width","300px"],["appearance","outline",1,"w-100"],["matInput","","formControlName","pswd","maxlength","15","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],["matInput","","formControlName","confirmPswd","maxlength","15","required","",3,"type"],[1,"text-center"],["aria-label","Reset Password",1,"mt-2","btn","login-btn",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(s,e){1&s&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Ob(2,"app-auth-slides"),u.Sb(),u.Tb(3,"div",2),u.Kc(4,T,22,17,"div",3),u.Sb(),u.Sb()),2&s&&(u.Ab(4),u.pc("ngIf",e.createPassForm))},directives:[f.a,r.m,a.w,a.n,a.g,n.c,n.g,c.b,a.c,a.m,a.f,a.i,a.t,n.i,r.k,n.b,P.a],styles:[""]}),s})();var F=t("zJym"),k=t("wV0L");const q=[{path:"",component:C}];let N=(()=>{class s{}return s.\u0275mod=u.Lb({type:s}),s.\u0275inj=u.Kb({factory:function(e){return new(e||s)},providers:[l.a],imports:[[r.c,i.h.forChild(q),a.h,a.s,o.b,n.e,c.c,F.a,k.a]]}),s})()}}]);