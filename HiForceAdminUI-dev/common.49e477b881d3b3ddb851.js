(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5dRZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("tk/3"),a=n("lJxs"),r=n("aZQB"),i=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}groupList(t){let e=new o.e;for(let n in t)(t[n]||"pageNo"==n||"IsAscending"==n)&&(e=e.set(n,t[n]));return this.http.get(""+r.a.LIST_GRP,{params:e}).pipe(Object(a.a)(t=>t))}addGroup(t){return this.http.post(""+r.a.ADD_GRP,t)}updGroup(t){return this.http.put(""+r.a.UPD_GRP,t)}viewGroup(t){return this.http.get(""+r.a.GET_GRP,{params:{id:t}})}actDeactGrp(t,e){return console.log("adadadas"),this.http.patch(`${e?r.a.ACT_GRP:r.a.DEACT_GRP}?id=${t}`,{})}}return t.\u0275fac=function(e){return new(e||t)(i.bc(o.b))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac}),t})()},CFzk:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("tk/3"),a=n("lJxs"),r=n("aZQB"),i=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}addContentColctn(t){return this.http.post(""+r.a.ADD_CONTENT_COLCT,t)}delContentColctn(t){return this.http.post(""+r.a.REM_CONTENT_COLCT,t)}getContentColctn(t){return this.http.get(`${r.a.GET_CONTENT_COLCT}?id=${t}`)}colctnList(t){let e=new o.e;for(let n in t)(t[n]||"pageNo"==n||"pageSize"==n)&&(e=e.set(n,t[n]));return this.http.get(""+r.a.LIST_COLCT,{params:e}).pipe(Object(a.a)(t=>t))}addColctn(t){return this.http.post(""+r.a.ADD_COLCT,t)}renColctn(t){return this.http.put(""+r.a.REN_COLCT,t)}duplColctn(t){return this.http.patch(""+r.a.DUPL_COLCT,t)}delColctn(t){return this.http.patch(`${r.a.DEL_COLCT}?id=${t}`,{})}getColctn(t){return this.http.get(`${r.a.GET_COLCT}?id=${t}`)}}return t.\u0275fac=function(e){return new(e||t)(i.bc(o.b))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac}),t})()},"NA9/":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n("ofXK"),a=n("3Pt+"),r=n("kmnG"),i=n("qFsG"),s=n("d3UM"),c=n("bSwM"),u=n("Qu3c"),d=n("zJym"),b=n("Qr3z"),l=n("fXoL");let m=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(e){return new(e||t)},providers:[b.a],imports:[[o.c,a.h,a.r,r.e,i.c,s.b,c.b,u.b,d.a]]}),t})()},NpNY:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{static MatchPassword(t){if(!t.parent||!t)return null;const e=t.parent.get("pswd"),n=t.parent.get("confirmPswd");return e&&n?""===n.value||e.value===n.value?null:{passwordsNotMatching:!0}:null}static emailValidator(t){return t.value&&String(t.value).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)?null:{invalidEmail:!0}}static numberValidator(t){return t.value&&String(t.value).match(/^(0|[1-9][0-9]*)$/)?null:{invalidNumber:!0}}static mobileNoValidator(t){return t.value&&String(t.value).match(/^(7[0-9]{8,10}|07[0-9]{8,10})$/)?null:{invalidMobile:!0}}static phoneNoValidator(t){return t.value&&String(t.value).match(/^0[0-9]{8,10}$/)?null:{invalidPhone:!0}}static aphaNumerValidator(t){return t.value&&String(t.value).match(/^[a-z0-9]+$/i)?null:{invAlphaNum:!0}}static nameValidator(t){return t.value&&String(t.value).match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)?null:{invalidName:!0}}}},"P/0q":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("lJxs"),a=n("aZQB"),r=n("fXoL"),i=n("tk/3");let s=(()=>{class t{constructor(t){this.http=t}wrkspcListEmp(){return this.http.get(""+a.a.GET_WRKSPC_EMP).pipe(Object(o.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(r.bc(i.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})()},Qr3z:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("aZQB"),a=n("fXoL"),r=n("tk/3");let i=(()=>{class t{constructor(t){this.http=t}changePassword(t){return this.http.post(""+o.a.CHANGE_PASS,t)}}return t.\u0275fac=function(e){return new(e||t)(a.bc(r.b))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},VGjC:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("tk/3"),a=n("lJxs"),r=n("aZQB"),i=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}emplList(t){let e=new o.e;for(let n in t)(t[n]||"IsAscending"==n||"isActive"==n)&&(e=e.set(n,t[n]));return this.http.get(""+r.a.LIST_EMPL,{params:e}).pipe(Object(a.a)(t=>t))}addEmpl(t){return this.http.post(""+r.a.ADD_EMPL,t)}updateEmpl(t){return this.http.put(""+r.a.UPD_EMPL,t)}viewEmpl(t){return this.http.get(""+r.a.GET_EMPL,{params:{id:t}})}}return t.\u0275fac=function(e){return new(e||t)(i.bc(o.b))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac}),t})()},bTqV:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m}));var o=n("FKr1"),a=n("R1ws"),r=n("fXoL"),i=n("u47x");const s=["mat-button",""],c=["*"],u=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];class d{constructor(t){this._elementRef=t}}const b=Object(o.r)(Object(o.t)(Object(o.s)(d)));let l=(()=>{class t extends b{constructor(t,e,n){super(t),this._focusMonitor=e,this._animationMode=n,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const o of u)this._hasHostAttributes(o)&&this._getHostElement().classList.add(o);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){this._focusMonitor.focusVia(this._getHostElement(),t,e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(t=>this._getHostElement().hasAttribute(t))}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(i.h),r.Nb(a.a,8))},t.\u0275cmp=r.Hb({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){var n;1&t&&r.Pc(o.m,!0),2&t&&r.wc(n=r.fc())&&(e.ripple=n.first)},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,e){2&t&&(r.Bb("disabled",e.disabled||null),r.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[r.xb],attrs:s,ngContentSelectors:c,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(r.oc(),r.Tb(0,"span",0),r.nc(1),r.Sb(),r.Ob(2,"span",1),r.Ob(3,"span",2)),2&t&&(r.Ab(2),r.Fb("mat-button-ripple-round",e.isRoundButton||e.isIconButton),r.pc("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[o.m],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})(),m=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[o.n,o.h],o.h]}),t})()},c2Mc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{static formatBytes(t,e){if(0===t)return"0 Bytes";const n=e<=0?0:e||2,o=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,o)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}}},cgH4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{static enumToArray(t){return Object.keys(t).filter(t=>!1===isNaN(Number(t))).map(e=>({n:t[e],v:parseInt(e)}))}}},"dtd+":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("AytR"),a=n("fXoL");let r=(()=>{class t{constructor(){this.annotList=[],this.readyPromise=new Promise(t=>{window.AdobeDC?t():document.addEventListener("adobe_dc_view_sdk.ready",()=>{t()})})}ready(){return this.readyPromise}previewFile(t,e){const n={listenOn:["ANNOTATION_ADDED","ANNOTATION_CLICKED","ANNOTATION_UPDATED","ANNOTATION_DELETED"]},a={clientId:o.a.CLNT_ID};t.divId&&(a.divId=t.divId),this.adobeDCView=new window.AdobeDC.View(a);const r=this.pdfRef=this.adobeDCView.previewFile({content:{location:{url:t.url}},metaData:{fileName:t.name,id:"file"+t.id}},t.defConfg);return this.registerSaveApiHandler(),this.registerEventsHandler(),r.then(t=>{t.getAnnotationManager().then(t=>{t.addAnnotations(e).then(()=>console.log("Success")).catch(t=>console.log(t)),t.registerEventListener(t=>{switch(console.log(t.type,t.data),t.type){case"ANNOTATION_ADDED":this.annotList.push(t.data);break;case"ANNOTATION_UPDATED":this.updRemAnnot(t.data,"upd");break;case"ANNOTATION_DELETED":this.updRemAnnot(t.data,"del")}},n)})}),r}updRemAnnot(t,e){const n=this.annotList.findIndex(e=>e.id==t.id);n>=0&&("upd"===e?this.annotList[n]=t:this.annotList.splice(n,1))}previewFileUsingFilePromise(t,e,n){this.adobeDCView=new window.AdobeDC.View({clientId:o.a.CLNT_ID,divId:t}),this.adobeDCView.previewFile({content:{promise:e},metaData:{fileName:n}},{})}registerSaveApiHandler(){this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.SAVE_API,(t,e,n)=>(console.log(t,e,n),new Promise(e=>{alert("I saved the document don't worry"),setTimeout(()=>{const n={code:window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,data:{metaData:Object.assign(t,{updatedAt:(new Date).getTime()})}};e(n)},2e3)})),{})}registerEventsHandler(){this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,t=>{console.log(t)},{enablePDFAnalytics:!0})}goToPage(t){this.pdfRef.then(e=>{e.getAPIs().then(e=>{e.gotoLocation(t).then(()=>console.log("Success")).catch(t=>console.log(t))})})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},fUzB:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o=n("3Pt+"),a=n("XNiG"),r=n("1G5W"),i=n("NpNY"),s=n("fXoL"),c=n("tyNb"),u=n("5eHb"),d=n("Qr3z"),b=n("1kSV"),l=n("kmnG"),m=n("qFsG"),p=n("ofXK"),f=n("668k");function h(t,e){1&t&&(s.Tb(0,"mat-error"),s.Lc(1," Confirm Password is required "),s.Sb())}function g(t,e){1&t&&(s.Tb(0,"mat-error"),s.Lc(1," Password and Confirm Password must match "),s.Sb())}function w(t,e){1&t&&s.Ob(0,"app-loader",15),2&t&&s.pc("type","btn")}const v=function(t,e){return{"fa-eye":t,"fa-eye-slash":e}};let y=(()=>{class t{constructor(t,e,n,o,r,i){this.route=t,this.router=e,this.fb=n,this.toastr=o,this.pswdServ=r,this.modalRef=i,this.loading=!1,this.hidePass=!0,this.hideCPass=!0,this.hideCurPass=!0,this._unsubscribeAll=new a.a}ngOnInit(){this.initForm()}initForm(){this.chngPassForm=this.fb.group({currPswd:["",o.t.required],pswd:["",o.t.required],confirmPswd:["",[o.t.required,i.a.MatchPassword]]}),this.chngPassForm.get("pswd").valueChanges.pipe(Object(r.a)(this._unsubscribeAll)).subscribe(()=>{this.chngPassForm.get("confirmPswd").updateValueAndValidity()})}changePassword(){this.chngPassForm.valid&&(this.loading=!0,this.pswdServ.changePassword({currentPassword:this.chngPassForm.value.currPswd,newPassword:this.chngPassForm.value.pswd}).subscribe(t=>{t&&(this.toastr.success(t.message||"Password changed successfully","Success!"),this.modalRef.dismiss("update")),this.loading=!1},t=>{console.log(t,"err"),this.loading=!1}))}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(c.a),s.Nb(c.d),s.Nb(o.d),s.Nb(u.b),s.Nb(d.a),s.Nb(b.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-chng-pass"]],decls:33,vars:20,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["name","chngPassForm","novalidate","",3,"formGroup","ngSubmit"],["ngbAutofocus","",1,"modal-body"],["appearance","outline",1,"w-100"],["matInput","","formControlName","currPswd","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],["matInput","","formControlName","pswd","required","",3,"type"],["matInput","","formControlName","confirmPswd","required","",3,"type"],[4,"ngIf"],[1,"modal-footer"],[1,"btn","btn-primary",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"h4",1),s.Lc(2,"Edit Password"),s.Sb(),s.Tb(3,"button",2),s.ec("click",(function(){return e.modalRef.dismiss("Cross click")})),s.Tb(4,"span",3),s.Lc(5,"\xd7"),s.Sb(),s.Sb(),s.Sb(),s.Tb(6,"form",4),s.ec("ngSubmit",(function(){return e.changePassword()})),s.Tb(7,"div",5),s.Tb(8,"mat-form-field",6),s.Tb(9,"mat-label"),s.Lc(10,"Current Password"),s.Sb(),s.Ob(11,"input",7),s.Tb(12,"i",8),s.ec("click",(function(){return e.hideCurPass=!e.hideCurPass})),s.Sb(),s.Tb(13,"mat-error"),s.Lc(14," Current Password is required "),s.Sb(),s.Sb(),s.Tb(15,"mat-form-field",6),s.Tb(16,"mat-label"),s.Lc(17,"Password"),s.Sb(),s.Ob(18,"input",9),s.Tb(19,"i",8),s.ec("click",(function(){return e.hidePass=!e.hidePass})),s.Sb(),s.Tb(20,"mat-error"),s.Lc(21," Password is required "),s.Sb(),s.Sb(),s.Tb(22,"mat-form-field",6),s.Tb(23,"mat-label"),s.Lc(24,"Confirm Password"),s.Sb(),s.Ob(25,"input",10),s.Tb(26,"i",8),s.ec("click",(function(){return e.hideCPass=!e.hideCPass})),s.Sb(),s.Jc(27,h,2,0,"mat-error",11),s.Jc(28,g,2,0,"mat-error",11),s.Sb(),s.Sb(),s.Tb(29,"div",12),s.Tb(30,"button",13),s.Jc(31,w,1,1,"app-loader",14),s.Lc(32," Update Password "),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Ab(6),s.pc("formGroup",e.chngPassForm),s.Ab(5),s.pc("type",e.hideCurPass?"password":"text"),s.Ab(1),s.pc("ngClass",s.uc(11,v,e.hideCurPass,!e.hideCurPass)),s.Ab(6),s.pc("type",e.hidePass?"password":"text"),s.Ab(1),s.pc("ngClass",s.uc(14,v,e.hidePass,!e.hidePass)),s.Ab(6),s.pc("type",e.hideCPass?"password":"text"),s.Ab(1),s.pc("ngClass",s.uc(17,v,e.hideCPass,!e.hideCPass)),s.Ab(1),s.pc("ngIf",e.chngPassForm.get("confirmPswd").hasError("required")),s.Ab(1),s.pc("ngIf",!e.chngPassForm.get("confirmPswd").hasError("required")&&e.chngPassForm.get("confirmPswd").hasError("passwordsNotMatching")),s.Ab(2),s.pc("disabled",e.chngPassForm.invalid||e.loading),s.Ab(1),s.pc("ngIf",e.loading))},directives:[o.v,o.m,o.g,l.c,l.g,m.b,o.c,o.l,o.f,o.s,l.i,p.k,l.b,p.m,f.a],styles:[""]}),t})()},oMea:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("ofXK"),a=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})()},pdK0:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("ofXK"),a=n("fXoL");let r=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})()},qXBG:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("aZQB"),a=n("fXoL"),r=n("tk/3");let i=(()=>{class t{constructor(t){this.http=t}login(t){return this.http.post(""+o.a.LOGIN,t)}forgotPass(t){return this.http.post(""+o.a.FORG_PASS,t)}resetPass(t){return this.http.post(""+o.a.RESET_PASS,t)}createPass(t){return this.http.post(""+o.a.RESET_PASS,t)}}return t.\u0275fac=function(e){return new(e||t)(a.bc(r.b))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac}),t})()},zkNt:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("fXoL");let a=(()=>{class t{constructor(){this.progress=0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-file-progess"]],inputs:{progress:"progress"},decls:2,vars:2,consts:[[1,"progress-cont"],[1,"progress"]],template:function(t,e){1&t&&(o.Tb(0,"div",0),o.Ob(1,"div",1),o.Sb()),2&t&&(o.Ab(1),o.Gc("width",e.progress+"%"))},styles:[""]}),t})()}}]);