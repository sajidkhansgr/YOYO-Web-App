(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Yj9t:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return d}));var o=n("ofXK"),r=n("tyNb"),a=n("fXoL"),l=n("p0iN");let i=(()=>{class e{constructor(e,t){this.router=e,this.tokenDataServ=t}canActivate(e,t){return!this.tokenDataServ.getToken()||(this.router.navigate(["/hub/1/list"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(a.bc(r.d),a.bc(l.a))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac}),e})();const s=[{path:"",children:[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(29)]).then(n.bind(null,"lu3c")).then(e=>e.LoginModule),canActivate:[i]},{path:"forgot-password",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(28)]).then(n.bind(null,"3cAV")).then(e=>e.ForgotPasswordModule)},{path:"reset-password",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(30)]).then(n.bind(null,"edur")).then(e=>e.ResetPasswordModule)},{path:"create-password",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(27)]).then(n.bind(null,"PQgD")).then(e=>e.CreatePasswordModule)}]}];let d=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},providers:[i],imports:[[o.c,r.h.forChild(s)]]}),e})()}}]);