(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1jcm":function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return P}));var i=n("GU7r"),o=n("fXoL"),a=n("FKr1"),r=n("8LU1"),s=n("3Pt+"),c=n("R1ws"),l=n("u47x");const d=["thumbContainer"],u=["toggleBar"],b=["input"],m=function(){return{enterDuration:150}},p=["*"],h=new o.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let g=0;const f={provide:s.k,useExisting:Object(o.U)(()=>y),multi:!0};class v{constructor(t,e){this.source=t,this.checked=e}}class w{constructor(t){this._elementRef=t}}const k=Object(a.w)(Object(a.r)(Object(a.s)(Object(a.t)(w)),"accent"));let y=(()=>{class t extends k{constructor(t,e,n,i,a,r){super(t),this._focusMonitor=e,this._changeDetectorRef=n,this.defaults=a,this._animationMode=r,this._onChange=t=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++g,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new o.n,this.toggleChange=new o.n,this.tabIndex=parseInt(i)||0}get required(){return this._required}set required(t){this._required=Object(r.b)(t)}get checked(){return this._checked}set checked(t){this._checked=Object(r.b)(t),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{"keyboard"===t||"program"===t?this._inputElement.nativeElement.focus():t||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(t){t.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(t){t.stopPropagation()}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}focus(t){this._focusMonitor.focusVia(this._inputElement,"keyboard",t)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new v(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(o.l),o.Nb(l.h),o.Nb(o.h),o.cc("tabindex"),o.Nb(h),o.Nb(c.a,8))},t.\u0275cmp=o.Hb({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(t,e){var n;1&t&&(o.Qc(d,!0),o.Qc(u,!0),o.Qc(b,!0)),2&t&&(o.wc(n=o.fc())&&(e._thumbEl=n.first),o.wc(n=o.fc())&&(e._thumbBarEl=n.first),o.wc(n=o.fc())&&(e._inputElement=n.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(t,e){2&t&&(o.Wb("id",e.id),o.Bb("tabindex",e.disabled?null:-1)("aria-label",null)("aria-labelledby",null),o.Fb("mat-checked",e.checked)("mat-disabled",e.disabled)("mat-slide-toggle-label-before","before"==e.labelPosition)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[o.zb([f]),o.xb],ngContentSelectors:p,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(t,e){if(1&t&&(o.oc(),o.Tb(0,"label",0,1),o.Tb(2,"div",2,3),o.Tb(4,"input",4,5),o.ec("change",(function(t){return e._onChangeEvent(t)}))("click",(function(t){return e._onInputClick(t)})),o.Sb(),o.Tb(6,"div",6,7),o.Ob(8,"div",8),o.Tb(9,"div",9),o.Ob(10,"div",10),o.Sb(),o.Sb(),o.Sb(),o.Tb(11,"span",11,12),o.ec("cdkObserveContent",(function(){return e._onLabelTextChange()})),o.Tb(13,"span",13),o.Mc(14,"\xa0"),o.Sb(),o.nc(15),o.Sb(),o.Sb()),2&t){const t=o.xc(1),n=o.xc(12);o.Bb("for",e.inputId),o.Ab(2),o.Fb("mat-slide-toggle-bar-no-side-margin",!n.textContent||!n.textContent.trim()),o.Ab(2),o.pc("id",e.inputId)("required",e.required)("tabIndex",e.tabIndex)("checked",e.checked)("disabled",e.disabled),o.Bb("name",e.name)("aria-checked",e.checked.toString())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),o.Ab(5),o.pc("matRippleTrigger",t)("matRippleDisabled",e.disableRipple||e.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",o.sc(17,m))}},directives:[a.m,i.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),t})(),x=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)}}),t})(),P=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[x,a.n,a.h,i.c],x,a.h]}),t})()},"5dRZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("tk/3"),o=n("lJxs"),a=n("aZQB"),r=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}groupList(t){let e=new i.e;for(let n in t)(t[n]||"pageNo"==n||"IsAscending"==n)&&(e=e.set(n,t[n]));return this.http.get(""+a.a.LIST_GRP,{params:e}).pipe(Object(o.a)(t=>t))}addGroup(t){return this.http.post(""+a.a.ADD_GRP,t)}updGroup(t){return this.http.put(""+a.a.UPD_GRP,t)}viewGroup(t){return this.http.get(""+a.a.GET_GRP,{params:{id:t}})}actDeactGrp(t,e){return this.http.patch(`${e?a.a.ACT_GRP:a.a.DEACT_GRP}?id=${t}`,{})}}return t.\u0275fac=function(e){return new(e||t)(r.bc(i.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})()},CrrK:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),o=n("tk/3"),a=n("5eHb");let r=(()=>{class t{constructor(t,e){this.http=t,this.toastr=e}downloadFile(t,e){this.toastr.info("Downloading the file","Please wait!!!"),this.http.get(""+t,{params:{isSpecDownExc:"true"},responseType:"blob"}).subscribe(t=>{this.saveFile(t,e)},t=>{})}saveFile(t,e){if(t){var n=window.URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=e,i.click()}else this.toastr.error("Unable to download file","Error!")}}return t.\u0275fac=function(e){return new(e||t)(i.bc(o.b),i.bc(a.b))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},MBQt:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("fXoL"),o=n("1kSV");function a(t,e){1&t&&i.Ob(0,"div",4)}function r(t,e){1&t&&i.Ob(0,"div",5)}function s(t,e){1&t&&i.Ob(0,"div",6)}function c(t,e){1&t&&i.Ob(0,"div",7)}let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-auth-slides"]],decls:10,vars:2,consts:[[3,"interval","showNavigationArrows"],["ngbSlide",""],[1,"text","mx-5","text-white"],[1,"text-justify"],[1,"carousel-img","img-1"],[1,"carousel-img","img-2"],[1,"carousel-img","img-3"],[1,"carousel-img","img-4"]],template:function(t,e){1&t&&(i.Tb(0,"ngb-carousel",0),i.Kc(1,a,1,0,"ng-template",1),i.Kc(2,r,1,0,"ng-template",1),i.Kc(3,s,1,0,"ng-template",1),i.Kc(4,c,1,0,"ng-template",1),i.Sb(),i.Tb(5,"div",2),i.Tb(6,"h2"),i.Mc(7,"Welcome"),i.Sb(),i.Tb(8,"p",3),i.Mc(9,"The official Hi-Force app gives you instant access to important Hi-Force product and service information including catalogue pages, product animations and marketing content."),i.Sb(),i.Sb()),2&t&&i.pc("interval",3e3)("showNavigationArrows",!1)},directives:[o.c,o.p],styles:[".text[_ngcontent-%COMP%]{position:absolute;top:35%;left:0}.img-1[_ngcontent-%COMP%]{background:url(carousel-1.0a7604a67cb97b9b05b4.jpg)}.img-2[_ngcontent-%COMP%]{background:url(carousel-2.a1ad8a509a382a6234be.jpg)}.img-3[_ngcontent-%COMP%]{background:url(carousel-3.8275c7924f6eb8b12257.jpg)}.img-4[_ngcontent-%COMP%]{background:url(carousel-4.9de6e39f01e9ca3c9786.jpg)}.carousel-img[_ngcontent-%COMP%]{height:100vh;background-repeat:no-repeat;background-position:50%;background-size:cover;filter:brightness(.6)}"]}),t})()},"NA9/":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("ofXK"),o=n("3Pt+"),a=n("kmnG"),r=n("qFsG"),s=n("d3UM"),c=n("bSwM"),l=n("Qu3c"),d=n("zJym"),u=n("Qr3z"),b=n("fXoL");let m=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},providers:[u.a],imports:[[i.c,o.h,o.s,a.e,r.c,s.b,c.b,l.b,d.a]]}),t})()},NpNY:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{static MatchPassword(t){if(!t.parent||!t)return null;const e=t.parent.get("pswd"),n=t.parent.get("confirmPswd");return e&&n?""===n.value||e.value===n.value?null:{passwordsNotMatching:!0}:null}static emailValidator(t){return t.value&&String(t.value).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)?null:{invalidEmail:!0}}static numberValidator(t){return t.value&&String(t.value).match(/^(0|[1-9][0-9]*)$/)?null:{invalidNumber:!0}}static mobileNoValidator(t){return t.value&&String(t.value).match(/^(7[0-9]{8,10}|07[0-9]{8,10})$/)?null:{invalidMobile:!0}}static phoneNoValidator(t){return t.value&&String(t.value).match(/^0[0-9]{8,10}$/)?null:{invalidPhone:!0}}static aphaNumerValidator(t){return t.value&&String(t.value).match(/^[a-z0-9]+$/i)?null:{invAlphaNum:!0}}static nameValidator(t){return t.value&&String(t.value).match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)?null:{invalidName:!0}}}},Qr3z:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("aZQB"),o=n("fXoL"),a=n("tk/3");let r=(()=>{class t{constructor(t){this.http=t}changePassword(t){return this.http.post(""+i.a.CHANGE_PASS,t)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(a.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},VGjC:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("tk/3"),o=n("lJxs"),a=n("aZQB"),r=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}emplList(t){let e=new i.e;for(let n in t)(t[n]||"IsAscending"==n||"isActive"==n)&&(e=e.set(n,t[n]));return this.http.get(""+a.a.LIST_EMPL,{params:e}).pipe(Object(o.a)(t=>t))}addEmpl(t){return this.http.post(""+a.a.ADD_EMPL,t)}updateEmpl(t){return this.http.put(""+a.a.UPD_EMPL,t)}viewEmpl(t){return this.http.get(""+a.a.GET_EMPL,{params:{id:t}})}resendInv(t){return this.http.get(""+a.a.RESEND_INV,{params:{id:t}})}}return t.\u0275fac=function(e){return new(e||t)(r.bc(i.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac}),t})()},WoM1:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n("fXoL"),o=n("OQ+D"),a=n("E/a4"),r=n("TNUc"),s=n("1kSV"),c=n("ofXK");function l(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",11),i.ec("click",(function(){return i.Bc(t),i.ic().actDeactFunc()})),i.Ob(1,"i"),i.Mc(2),i.Sb()}if(2&t){const t=i.ic();i.Db("btn btn-outline-",t.isActive?"primary":"success"," align-self-center mr-2"),i.Ab(1),i.Db("mr-1 fas fa-toggle-",t.isActive?"off":"on",""),i.Ab(1),i.Oc(" ",t.isActive?"Deactivate":"Activate"," ")}}function d(t,e){if(1&t){const t=i.Ub();i.Tb(0,"button",6),i.ec("click",(function(){return i.Bc(t),i.ic().cmnModal("addToCollection")})),i.Ob(1,"i",12),i.Mc(2,"Add to collection"),i.Sb()}if(2&t){const t=i.ic();i.pc("disabled",t.disable)}}function u(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",13),i.ec("click",(function(){return i.Bc(t),i.ic().delContentFunc()})),i.Ob(1,"i",14),i.Mc(2,"Remove"),i.Sb()}}let b=(()=>{class t{constructor(t){this.modalService=t,this.actDeact=new i.n,this.delContent=new i.n,this.clrSelData=new i.n}ngOnInit(){}cmnModal(t){if("email"==t){const t=this.modalService.open(o.a,{size:"lg"});t.componentInstance.type="collection"==this.type?"multi-collection":"content",t.componentInstance.data=this.selArr}else if("getLink"==t){const t=this.modalService.open(a.a,{size:"lg"});t.componentInstance.type="collection"==this.type?"multi-collection":"content",t.componentInstance.data=this.selArr}else"addToCollection"==t&&(this.modalService.open(r.a,{size:"lg"}).componentInstance.data={data:this.selArr,type:"multi"})}actDeactFunc(){this.actDeact.emit()}delContentFunc(){this.delContent.emit()}cleanSelData(){this.clrSelData.emit()}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(s.h))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-sel-itm-fxd-div"]],inputs:{selArr:"selArr",isActive:"isActive",content:"content",type:"type",disable:"disable"},outputs:{actDeact:"actDeact",delContent:"delContent",clrSelData:"clrSelData"},decls:16,vars:6,consts:[[1,"row","mx-auto","fixed-bottom","px-3",2,"width","90%","background-color","#fff","height","50px"],[1,"selected-items","text-secondary","align-self-center"],[1,"mr-1","ml-3","align-self-center"],[1,"btn","btn-outline-primary","border-0","align-self-center",3,"click"],["type","button",1,"btn","btn-light","align-self-center","ml-auto","bg-white","mr-2",3,"disabled","click"],[1,"fa","fa-envelope","mr-1"],["type","button",1,"btn","btn-light","align-self-center","bg-white","mr-2",3,"disabled","click"],[1,"fa","fa-link","mr-1"],[3,"class","click",4,"ngIf"],["type","button","class","btn btn-light align-self-center bg-white mr-2",3,"disabled","click",4,"ngIf"],["class","btn btn-primary align-self-center",3,"click",4,"ngIf"],[3,"click"],[1,"fa","fa-folder-plus","mr-1"],[1,"btn","btn-primary","align-self-center",3,"click"],[1,"fas","fa-trash-alt","mr-1"]],template:function(t,e){1&t&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Mc(2),i.Sb(),i.Tb(3,"div",2),i.Mc(4,"|"),i.Sb(),i.Tb(5,"div",3),i.ec("click",(function(){return e.cleanSelData()})),i.Mc(6,"Clear"),i.Sb(),i.Tb(7,"button",4),i.ec("click",(function(){return e.cmnModal("email")})),i.Ob(8,"i",5),i.Mc(9,"Email "),i.Sb(),i.Tb(10,"button",6),i.ec("click",(function(){return e.cmnModal("getLink")})),i.Ob(11,"i",7),i.Mc(12," Get a link"),i.Sb(),i.Kc(13,l,3,7,"div",8),i.Kc(14,d,3,1,"button",9),i.Kc(15,u,3,0,"div",10),i.Sb()),2&t&&(i.Ab(2),i.Oc("",e.selArr.length," item(s) selected"),i.Ab(5),i.pc("disabled",e.disable),i.Ab(3),i.pc("disabled",e.disable),i.Ab(3),i.pc("ngIf",!e.content),i.Ab(1),i.pc("ngIf",e.content),i.Ab(1),i.pc("ngIf",e.content))},directives:[c.m],styles:[""]}),t})()},bTqV:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return m}));var i=n("FKr1"),o=n("R1ws"),a=n("fXoL"),r=n("u47x");const s=["mat-button",""],c=["*"],l=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];class d{constructor(t){this._elementRef=t}}const u=Object(i.r)(Object(i.t)(Object(i.s)(d)));let b=(()=>{class t extends u{constructor(t,e,n){super(t),this._focusMonitor=e,this._animationMode=n,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const i of l)this._hasHostAttributes(i)&&this._getHostElement().classList.add(i);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){this._focusMonitor.focusVia(this._getHostElement(),t,e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(t=>this._getHostElement().hasAttribute(t))}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(a.l),a.Nb(r.h),a.Nb(o.a,8))},t.\u0275cmp=a.Hb({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){var n;1&t&&a.Qc(i.m,!0),2&t&&a.wc(n=a.fc())&&(e.ripple=n.first)},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,e){2&t&&(a.Bb("disabled",e.disabled||null),a.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[a.xb],attrs:s,ngContentSelectors:c,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(a.oc(),a.Tb(0,"span",0),a.nc(1),a.Sb(),a.Ob(2,"span",1),a.Ob(3,"span",2)),2&t&&(a.Ab(2),a.Fb("mat-button-ripple-round",e.isRoundButton||e.isIconButton),a.pc("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[i.m],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})(),m=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[i.n,i.h],i.h]}),t})()},"dtd+":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("AytR"),o=n("fXoL");let a=(()=>{class t{constructor(){this.annotList=[],this.readyPromise=new Promise(t=>{window.AdobeDC?t():document.addEventListener("adobe_dc_view_sdk.ready",()=>{t()})})}ready(){return this.readyPromise}previewFile(t,e){const n={clientId:i.a.CLNT_ID};t.divId&&(n.divId=t.divId),this.adobeDCView=new window.AdobeDC.View(n);const o=this.pdfRef=this.adobeDCView.previewFile({content:{location:{url:t.url}},metaData:{fileName:t.name,id:"file"+t.id}},t.defConfg);return this.registerSaveApiHandler(),this.registerEventsHandler(),o.then(t=>{}),o}updRemAnnot(t,e){const n=this.annotList.findIndex(e=>e.id==t.id);n>=0&&("upd"===e?this.annotList[n]=t:this.annotList.splice(n,1))}previewFileUsingFilePromise(t,e,n){this.adobeDCView=new window.AdobeDC.View({clientId:i.a.CLNT_ID,divId:t}),this.adobeDCView.previewFile({content:{promise:e},metaData:{fileName:n}},{})}registerSaveApiHandler(){this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.SAVE_API,(t,e,n)=>(console.log(t,e,n),new Promise(e=>{alert("I saved the document don't worry"),setTimeout(()=>{const n={code:window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,data:{metaData:Object.assign(t,{updatedAt:(new Date).getTime()})}};e(n)},2e3)})),{})}registerEventsHandler(){this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,t=>{console.log(t)},{enablePDFAnalytics:!0})}goToPage(t){this.pdfRef.then(e=>{e.getAPIs().then(e=>{e.gotoLocation(t).then(()=>console.log("Success")).catch(t=>console.log(t))})})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},fUzB:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var i=n("3Pt+"),o=n("XNiG"),a=n("1G5W"),r=n("NpNY"),s=n("fXoL"),c=n("tyNb"),l=n("5eHb"),d=n("Qr3z"),u=n("1kSV"),b=n("kmnG"),m=n("qFsG"),p=n("ofXK"),h=n("668k");function g(t,e){1&t&&(s.Tb(0,"mat-error"),s.Mc(1," Current Password is required "),s.Sb())}function f(t,e){1&t&&(s.Tb(0,"mat-error"),s.Mc(1," Current Password must be at least 6 characters long "),s.Sb())}function v(t,e){1&t&&(s.Tb(0,"mat-error"),s.Mc(1," Password is required "),s.Sb())}function w(t,e){1&t&&(s.Tb(0,"mat-error"),s.Mc(1," Password must be at least 6 characters long "),s.Sb())}function k(t,e){1&t&&(s.Tb(0,"mat-error"),s.Mc(1," Confirm Password is required "),s.Sb())}function y(t,e){1&t&&(s.Tb(0,"mat-error"),s.Mc(1," Password and Confirm Password must match "),s.Sb())}function x(t,e){1&t&&s.Ob(0,"app-loader",15),2&t&&s.pc("type","btn")}const P=function(t,e){return{"fa-eye":t,"fa-eye-slash":e}};let _=(()=>{class t{constructor(t,e,n,i,a,r){this.route=t,this.router=e,this.fb=n,this.toastr=i,this.pswdServ=a,this.modalRef=r,this.loading=!1,this.hidePass=!0,this.hideCPass=!0,this.hideCurPass=!0,this._unsubscribeAll=new o.a}ngOnInit(){this.initForm()}initForm(){this.chngPassForm=this.fb.group({currPswd:["",[i.u.required,i.u.minLength(6)]],pswd:["",[i.u.required,i.u.minLength(6)]],confirmPswd:["",[i.u.required,r.a.MatchPassword]]}),this.chngPassForm.get("pswd").valueChanges.pipe(Object(a.a)(this._unsubscribeAll)).subscribe(()=>{this.chngPassForm.get("confirmPswd").updateValueAndValidity()})}changePassword(){this.chngPassForm.valid&&(this.loading=!0,this.pswdServ.changePassword({currentPassword:this.chngPassForm.value.currPswd,newPassword:this.chngPassForm.value.pswd}).subscribe(t=>{t&&(this.toastr.success(t.message||"Password changed successfully","Success!"),this.modalRef.dismiss("update")),this.loading=!1},t=>{this.loading=!1}))}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(c.a),s.Nb(c.d),s.Nb(i.d),s.Nb(l.b),s.Nb(d.a),s.Nb(u.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-chng-pass"]],decls:33,vars:24,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["name","chngPassForm","novalidate","",3,"formGroup","ngSubmit"],["ngbAutofocus","",1,"modal-body"],["appearance","outline",1,"w-100"],["matInput","","formControlName","currPswd","maxlength","15","required","",3,"type"],["matSuffix","",1,"fas",3,"ngClass","click"],[4,"ngIf"],["matInput","","formControlName","pswd","maxlength","15","required","",3,"type"],["matInput","","formControlName","confirmPswd","maxlength","15","required","",3,"type"],[1,"modal-footer"],[1,"btn","btn-primary",3,"disabled"],[3,"type",4,"ngIf"],[3,"type"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"h4",1),s.Mc(2,"Edit Password"),s.Sb(),s.Tb(3,"button",2),s.ec("click",(function(){return e.modalRef.dismiss("Cross click")})),s.Tb(4,"span",3),s.Mc(5,"\xd7"),s.Sb(),s.Sb(),s.Sb(),s.Tb(6,"form",4),s.ec("ngSubmit",(function(){return e.changePassword()})),s.Tb(7,"div",5),s.Tb(8,"mat-form-field",6),s.Tb(9,"mat-label"),s.Mc(10,"Current Password"),s.Sb(),s.Ob(11,"input",7),s.Tb(12,"i",8),s.ec("click",(function(){return e.hideCurPass=!e.hideCurPass})),s.Sb(),s.Kc(13,g,2,0,"mat-error",9),s.Kc(14,f,2,0,"mat-error",9),s.Sb(),s.Tb(15,"mat-form-field",6),s.Tb(16,"mat-label"),s.Mc(17,"Password"),s.Sb(),s.Ob(18,"input",10),s.Tb(19,"i",8),s.ec("click",(function(){return e.hidePass=!e.hidePass})),s.Sb(),s.Kc(20,v,2,0,"mat-error",9),s.Kc(21,w,2,0,"mat-error",9),s.Sb(),s.Tb(22,"mat-form-field",6),s.Tb(23,"mat-label"),s.Mc(24,"Confirm Password"),s.Sb(),s.Ob(25,"input",11),s.Tb(26,"i",8),s.ec("click",(function(){return e.hideCPass=!e.hideCPass})),s.Sb(),s.Kc(27,k,2,0,"mat-error",9),s.Kc(28,y,2,0,"mat-error",9),s.Sb(),s.Sb(),s.Tb(29,"div",12),s.Tb(30,"button",13),s.Kc(31,x,1,1,"app-loader",14),s.Mc(32," Update Password "),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Ab(6),s.pc("formGroup",e.chngPassForm),s.Ab(5),s.pc("type",e.hideCurPass?"password":"text"),s.Ab(1),s.pc("ngClass",s.uc(15,P,e.hideCurPass,!e.hideCurPass)),s.Ab(1),s.pc("ngIf",e.chngPassForm.get("currPswd").hasError("required")),s.Ab(1),s.pc("ngIf",!e.chngPassForm.get("currPswd").hasError("required")&&e.chngPassForm.get("currPswd").hasError("minlength")),s.Ab(4),s.pc("type",e.hidePass?"password":"text"),s.Ab(1),s.pc("ngClass",s.uc(18,P,e.hidePass,!e.hidePass)),s.Ab(1),s.pc("ngIf",e.chngPassForm.get("pswd").hasError("required")),s.Ab(1),s.pc("ngIf",!e.chngPassForm.get("pswd").hasError("required")&&e.chngPassForm.get("pswd").hasError("minlength")),s.Ab(4),s.pc("type",e.hideCPass?"password":"text"),s.Ab(1),s.pc("ngClass",s.uc(21,P,e.hideCPass,!e.hideCPass)),s.Ab(1),s.pc("ngIf",e.chngPassForm.get("confirmPswd").hasError("required")),s.Ab(1),s.pc("ngIf",!e.chngPassForm.get("confirmPswd").hasError("required")&&e.chngPassForm.get("confirmPswd").hasError("passwordsNotMatching")),s.Ab(2),s.pc("disabled",e.chngPassForm.invalid||e.loading),s.Ab(1),s.pc("ngIf",e.loading))},directives:[i.w,i.n,i.g,b.c,b.g,m.b,i.c,i.m,i.f,i.i,i.t,b.i,p.k,p.m,b.b,h.a],styles:[""]}),t})()},k8Mo:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("tk/3"),o=n("lJxs"),a=n("aZQB"),r=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}getList(t,e=!1){let n=new i.e;for(let i in t)t[i]&&(n=n.set(i,t[i]));return this.http.get(""+(e?a.a.MY_BRD_CRM_LIST:a.a.BRD_CRM_LIST),{params:n}).pipe(Object(o.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(r.bc(i.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},oMea:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},pdK0:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),o=n("fXoL");let a=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},qXBG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("aZQB"),o=n("fXoL"),a=n("tk/3");let r=(()=>{class t{constructor(t){this.http=t}login(t){return this.http.post(""+i.a.LOGIN,t)}forgotPass(t){return this.http.post(""+i.a.FORG_PASS,t)}resetPass(t){return this.http.post(""+i.a.RESET_PASS,t)}createPass(t){return this.http.post(""+i.a.CREATE_PASS,t)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(a.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})()},tqvG:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ofXK"),o=n("zJym"),a=n("j+Cn"),r=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[a.a],imports:[[i.c,o.a]]}),t})()},u7Mw:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()},wV0L:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("ofXK"),o=n("1kSV"),a=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[i.c,o.d]]}),t})()},zkNt:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class t{constructor(){this.progress=0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-file-progess"]],inputs:{progress:"progress"},decls:2,vars:2,consts:[[1,"progress-cont"],[1,"progress"]],template:function(t,e){1&t&&(i.Tb(0,"div",0),i.Ob(1,"div",1),i.Sb()),2&t&&(i.Ab(1),i.Hc("width",e.progress+"%"))},styles:[""]}),t})()}}]);