(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"1jcm":function(e,t,i){"use strict";i.d(t,"a",(function(){return x})),i.d(t,"b",(function(){return k}));var n=i("GU7r"),o=i("fXoL"),a=i("FKr1"),l=i("8LU1"),b=i("3Pt+"),r=i("R1ws"),c=i("u47x");const d=["thumbContainer"],s=["toggleBar"],p=["input"],m=function(){return{enterDuration:150}},g=["*"],h=new o.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let u=0;const f={provide:b.j,useExisting:Object(o.U)(()=>x),multi:!0};class S{constructor(e,t){this.source=e,this.checked=t}}class T{constructor(e){this._elementRef=e}}const v=Object(a.w)(Object(a.r)(Object(a.s)(Object(a.t)(T)),"accent"));let x=(()=>{class e extends v{constructor(e,t,i,n,a,l){super(e),this._focusMonitor=t,this._changeDetectorRef=i,this.defaults=a,this._animationMode=l,this._onChange=e=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++u,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new o.n,this.toggleChange=new o.n,this.tabIndex=parseInt(n)||0}get required(){return this._required}set required(e){this._required=Object(l.b)(e)}get checked(){return this._checked}set checked(e){this._checked=Object(l.b)(e),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new S(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(o.l),o.Nb(c.h),o.Nb(o.h),o.cc("tabindex"),o.Nb(h),o.Nb(r.a,8))},e.\u0275cmp=o.Hb({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){var i;1&e&&(o.Nc(d,!0),o.Nc(s,!0),o.Nc(p,!0)),2&e&&(o.vc(i=o.fc())&&(t._thumbEl=i.first),o.vc(i=o.fc())&&(t._thumbBarEl=i.first),o.vc(i=o.fc())&&(t._inputElement=i.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(o.Wb("id",t.id),o.Bb("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),o.Fb("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[o.zb([f]),o.xb],ngContentSelectors:g,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(o.nc(),o.Tb(0,"label",0,1),o.Tb(2,"div",2,3),o.Tb(4,"input",4,5),o.ec("change",(function(e){return t._onChangeEvent(e)}))("click",(function(e){return t._onInputClick(e)})),o.Sb(),o.Tb(6,"div",6,7),o.Ob(8,"div",8),o.Tb(9,"div",9),o.Ob(10,"div",10),o.Sb(),o.Sb(),o.Sb(),o.Tb(11,"span",11,12),o.ec("cdkObserveContent",(function(){return t._onLabelTextChange()})),o.Tb(13,"span",13),o.Jc(14,"\xa0"),o.Sb(),o.mc(15),o.Sb(),o.Sb()),2&e){const e=o.wc(1),i=o.wc(12);o.Bb("for",t.inputId),o.Ab(2),o.Fb("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),o.Ab(2),o.oc("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),o.Bb("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),o.Ab(5),o.oc("matRippleTrigger",e)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",o.rc(17,m))}},directives:[a.m,n.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)}}),e})(),k=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[y,a.n,a.h,n.c],y,a.h]}),e})()},B7dq:function(e,t,i){"use strict";i.r(t),i.d(t,"ShareModule",(function(){return T}));var n=i("ofXK"),o=i("tyNb"),a=i("1kSV"),l=i("fXoL"),b=i("1jcm"),r=i("kmnG"),c=i("qFsG"),d=i("bSwM"),s=i("7EHt");function p(e,t){if(1&e){const e=l.Ub();l.Tb(0,"div",25),l.Tb(1,"div",26),l.Jc(2,"Test"),l.Sb(),l.Tb(3,"div",27),l.Jc(4," Shared link from web app "),l.Tb(5,"div",28),l.Jc(6,"15 Oct 2020"),l.Sb(),l.Sb(),l.Tb(7,"div",29),l.ec("click",(function(){l.yc(e);const t=l.ic(),i=l.wc(37);return t.openModal(i)})),l.Tb(8,"div",30),l.Tb(9,"div",31),l.Ob(10,"i",32),l.Jc(11,"Someone"),l.Sb(),l.Tb(12,"div",31),l.Ob(13,"i",33),l.Jc(14,"Windows"),l.Sb(),l.Sb(),l.Tb(15,"div",34),l.Jc(16,"Active 15 Oct 2020"),l.Sb(),l.Tb(17,"div",35),l.Tb(18,"div",36),l.Ob(19,"i",37),l.Sb(),l.Tb(20,"div",36),l.Ob(21,"i",38),l.Sb(),l.Sb(),l.Sb(),l.Sb()}}function m(e,t){1&e&&(l.Tb(0,"div",39),l.Tb(1,"h4",40),l.Jc(2,"Email"),l.Sb(),l.Tb(3,"button",41),l.ec("click",(function(){return t.$implicit.dismiss("Cross click")})),l.Tb(4,"span",42),l.Jc(5,"\xd7"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"div",43),l.Tb(7,"div",11),l.Tb(8,"div",44),l.Tb(9,"mat-form-field",45),l.Tb(10,"mat-label"),l.Jc(11,"To"),l.Sb(),l.Ob(12,"input",46),l.Sb(),l.Tb(13,"mat-form-field",45),l.Tb(14,"mat-label"),l.Jc(15,"Subject"),l.Sb(),l.Ob(16,"input",47),l.Sb(),l.Tb(17,"div",11),l.Tb(18,"mat-form-field",48),l.Tb(19,"mat-label"),l.Jc(20,"Message"),l.Sb(),l.Ob(21,"input",49),l.Sb(),l.Tb(22,"div",50),l.Tb(23,"div",51),l.Ob(24,"i",52),l.Jc(25,"Add resource "),l.Sb(),l.Sb(),l.Sb(),l.Tb(26,"mat-form-field",45),l.Ob(27,"textarea",53),l.Sb(),l.Sb(),l.Tb(28,"div",54),l.Tb(29,"h5"),l.Jc(30,"Sharing Settings"),l.Sb(),l.Tb(31,"mat-checkbox",55),l.Jc(32,"Allow downloads"),l.Sb(),l.Tb(33,"mat-checkbox",55),l.Jc(34,"Send me a copy"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(35,"div",56),l.Tb(36,"button",57),l.ec("click",(function(){return t.$implicit.close("Save click")})),l.Jc(37,"Save"),l.Sb(),l.Sb())}function g(e,t){1&e&&(l.Tb(0,"div",39),l.Tb(1,"h4",40),l.Jc(2,"Get a Link"),l.Sb(),l.Tb(3,"button",41),l.ec("click",(function(){return t.$implicit.dismiss("Cross click")})),l.Tb(4,"span",42),l.Jc(5,"\xd7"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"div",43),l.Tb(7,"mat-form-field",45),l.Tb(8,"mat-label"),l.Jc(9,"Name"),l.Sb(),l.Ob(10,"input",58),l.Sb(),l.Tb(11,"mat-checkbox"),l.Jc(12,"Allow downloads"),l.Sb(),l.Tb(13,"mat-label",59),l.Jc(14,"Content"),l.Sb(),l.Tb(15,"div",11),l.Tb(16,"div",60),l.Tb(17,"mat-form-field",61),l.Tb(18,"mat-label",55),l.Jc(19,"Search for content"),l.Sb(),l.Ob(20,"input",62),l.Ob(21,"i",63),l.Sb(),l.Sb(),l.Tb(22,"div",64),l.Tb(23,"div",51),l.Jc(24,"Browse"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(25,"div",56),l.Tb(26,"button",57),l.ec("click",(function(){return t.$implicit.close("Save click")})),l.Jc(27,"Save"),l.Sb(),l.Sb())}function h(e,t){1&e&&(l.Tb(0,"mat-expansion-panel",92),l.Tb(1,"mat-expansion-panel-header"),l.Tb(2,"mat-panel-title"),l.Tb(3,"div",72),l.Tb(4,"div",93),l.Ob(5,"img",94),l.Sb(),l.Tb(6,"div",95),l.Jc(7,"CPB.017.DailyStockUpdate.pdf"),l.Sb(),l.Sb(),l.Sb(),l.Tb(8,"mat-panel-description"),l.Tb(9,"div",72),l.Tb(10,"div",96),l.Jc(11," 3 views "),l.Sb(),l.Tb(12,"div",97),l.Jc(13," 43 minute "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(14,"div",98),l.Tb(15,"div",99),l.Jc(16,"Page 3"),l.Sb(),l.Tb(17,"div",100),l.Jc(18,"3 Views"),l.Sb(),l.Tb(19,"div",101),l.Jc(20,"43 Minutes"),l.Sb(),l.Sb(),l.Sb())}function u(e,t){1&e&&(l.Tb(0,"div",102),l.Tb(1,"div",103),l.Ob(2,"div",104),l.Ob(3,"div",105),l.Sb(),l.Tb(4,"div",106),l.Tb(5,"div",107),l.Jc(6,"October 15th, 06:37 PM"),l.Sb(),l.Jc(7," Chrome on Windows downloaded abcdefghi.pdf "),l.Sb(),l.Sb())}function f(e,t){if(1&e){const e=l.Ub();l.Tb(0,"div",39),l.Tb(1,"h4",40),l.Jc(2,"Test"),l.Sb(),l.Tb(3,"button",41),l.ec("click",(function(){return t.$implicit.dismiss("Cross click")})),l.Tb(4,"span",42),l.Jc(5,"\xd7"),l.Sb(),l.Sb(),l.Sb(),l.Tb(6,"div",43),l.Tb(7,"div",65),l.Tb(8,"div",66),l.Tb(9,"div",5),l.Tb(10,"button",67),l.Ob(11,"i",68),l.Sb(),l.Tb(12,"div",69),l.Tb(13,"a",70),l.Jc(14,"View as recipient"),l.Sb(),l.Tb(15,"a",70),l.Jc(16,"Stop all notifications"),l.Sb(),l.Tb(17,"a",71),l.Jc(18,"Revoke access"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(19,"div",72),l.Tb(20,"div",73),l.Jc(21,"Sent"),l.Sb(),l.Tb(22,"div"),l.Jc(23,"15 Oct 2020 06:35 PM from Web App"),l.Sb(),l.Sb(),l.Tb(24,"div",72),l.Tb(25,"div",74),l.Jc(26,"Link"),l.Sb(),l.Ob(27,"input",75,76),l.Tb(29,"div",77),l.ec("click",(function(){l.yc(e);const t=l.wc(28);return l.ic().copyLink(t)})),l.Jc(30,"Copy Link"),l.Sb(),l.Sb(),l.Sb(),l.Tb(31,"div",78),l.Tb(32,"div",72),l.Tb(33,"div",79),l.Ob(34,"i",80),l.Jc(35,"Someone "),l.Sb(),l.Tb(36,"div"),l.Ob(37,"i",81),l.Jc(38,"Windows "),l.Sb(),l.Sb(),l.Tb(39,"div",82),l.Tb(40,"div",72),l.Tb(41,"div",83),l.Ob(42,"i",37),l.Sb(),l.Tb(43,"div",84),l.Jc(44," 2 of 12 "),l.Tb(45,"div",85),l.Jc(46," 12 items viewed "),l.Sb(),l.Sb(),l.Sb(),l.Tb(47,"div",72),l.Tb(48,"div",83),l.Ob(49,"i",38),l.Sb(),l.Tb(50,"div",84),l.Jc(51," 2 "),l.Tb(52,"div",85),l.Jc(53," 2 downloads "),l.Sb(),l.Sb(),l.Sb(),l.Tb(54,"div",72),l.Tb(55,"div",86),l.Ob(56,"i",87),l.Sb(),l.Tb(57,"div",84),l.Jc(58," 0 "),l.Tb(59,"div",85),l.Jc(60," 0 Shares "),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Ob(61,"hr"),l.Tb(62,"div",88),l.Jc(63,"Activity per item"),l.Sb(),l.Tb(64,"mat-accordion"),l.Hc(65,h,21,0,"mat-expansion-panel",89),l.Sb(),l.Ob(66,"hr"),l.Tb(67,"div",88),l.Jc(68,"Timeline"),l.Sb(),l.Tb(69,"div",90),l.Jc(70," 15 Oct 2020 "),l.Sb(),l.Hc(71,u,8,0,"div",91),l.Sb(),l.Sb()}if(2&e){const e=l.ic();l.Ab(65),l.oc("ngForOf",e.testArr),l.Ab(6),l.oc("ngForOf",e.testArr)}}const S=[{path:"",component:(()=>{class e{constructor(e){this.modalService=e,this.testArr=[1,2,3,4],this.copyLink=e=>{e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}}ngOnInit(){}openModal(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(e=>{},e=>{})}getDismissReason(e){return e===a.a.ESC?"by pressing ESC":e===a.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(a.f))},e.\u0275cmp=l.Hb({type:e,selectors:[["app-share"]],decls:38,vars:2,consts:[[1,"main","main-employee","container"],[1,"mt-3"],[1,"mb-4","clearfix","heading","align-self-center"],[1,"float-right","d-flex"],[1,"mt-2","mr-3",2,"font-size","14px"],[1,"dropdown"],["type","button","id","addBtnDD","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],["aria-labelledby","addBtnDD",1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item","curs-ptr",3,"click"],[1,"fas","fa-envelope","mr-1"],[1,"fas","fa-link","mr-1"],[1,"row"],[1,"search","col-md-6"],["appearance","outline",1,"custom-mat-input","w-100","mb-2","bg-white",3,"floatLabel"],["matPrefix","",1,"fas","fa-search"],["matInput","","placeholder","Email or Subject or Shared Content"],[1,"col-md-6","text-right"],[1,"text-primary","mr-2","curs-ptr"],[1,"fa","fa-sort-down","align-top","ml-1"],[1,"text-primary","curs-ptr"],[1,"mt-2","row","shares"],["class","w-75 border rounded mx-auto p-3 bg-white my-2",4,"ngFor","ngForOf"],["email",""],["getLink",""],["detail",""],[1,"w-75","border","rounded","mx-auto","p-3","bg-white","my-2"],[1,"name"],[1,"text-secondary","d-flex","justify-content-between",2,"font-size","12px"],[1,"date"],[1,"border-top","border-bottom","dark-bg-hover","py-2","px-3","mt-3","d-flex","justify-content-between",3,"click"],[1,"info","d-flex"],[1,"detail","mx-2"],[1,"fa","fa-link","mr-2"],[1,"fa","fa-laptop","mr-2"],[1,"active-time"],[1,"options","d-flex"],[1,"opt","mx-2","rounded-circle","bg-primary","text-white","text-center"],[1,"fa","fa-file"],[1,"fa","fa-download"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["ngbAutofocus","",1,"modal-body"],[1,"col-9","border-right"],["appearance","outline",1,"w-100"],["matInput","","type","text","placeholder","Recipients"],["matInput","","type","text","placeholder","Subject"],["appearance","outline",1,"col-8"],["matInput","","type","text","placeholder","Search Content"],[1,"col-4","mt-3"],[1,"btn","btn-primary"],[1,"fas","fa-file-medical","mr-1"],["matInput","","type","text","placeholder",""],[1,"col-3"],[1,"ml-2"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","text","matInput","","placeholder","Name"],[1,"d-block","mt-3"],[1,"col-9"],["appearance","outline",1,"w-100","search"],["type","text","matInput","","placeholder","Search for content",1,"ml-2"],["matPrefix","",1,"fa","fa-search","text-secondary",2,"font-size","18px"],[1,"col-3","mt-3"],[1,"heading"],[1,"float-right"],["type","button","id","cogDD","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-primary","btn-sm"],[1,"fa","fa-cog"],["aria-labelledby","cogDD",1,"dropdown-menu","dropdown-menu-right"],["href","#",1,"dropdown-item"],["href","#",1,"dropdown-item","text-primary"],[1,"d-flex"],[1,"text-secondary",2,"width","100px"],[1,"text-secondary","align-self-center",2,"width","100px"],["type","text","value","https://hiforce.com/abc/def/ghi/jkl/mno/pqr/stu/vwx/yz","readonly","",2,"border","0","width","260px"],["link",""],[1,"btn","btn-primary","ml-1",3,"click"],[1,"main-body","border","rounded","px-3","pt-2","pb-4","mt-3"],[1,"mr-3"],[1,"fa","fa-link","mr-1"],[1,"fa","fa-laptop","mr-1"],[1,"d-flex","justify-content-around","options","bg-hi-grey","border","p-3","rounded","my-2"],[1,"opt","bg-primary","rounded-circle","text-center","text-white","p-1","mr-2"],[1,"info",2,"font-size","11px"],[1,"text-secondary"],[1,"opt","bg-secondary","rounded-circle","text-center","text-white","p-1","mr-2"],[1,"fa","fa-user-friends"],[1,"text-secondary","font-weight-bold","my-2"],["class","my-1",4,"ngFor","ngForOf"],[1,"last-date","text-secondary","mb-2"],["class","timeline d-flex",4,"ngFor","ngForOf"],[1,"my-1"],[1,"icon","mr-2"],["src","assets/images/discription.png",2,"max-height","50px"],[1,"name","align-self-center"],[1,"views","mr-5","align-self-center"],[1,"time","ml-5","align-self-center"],[1,"my-2","mx-3","py-2","px-3","d-flex","justify-content-around","border","rounded"],[1,"num"],[1,"views"],[1,"time"],[1,"timeline","d-flex"],[1,"step-icon","align-self-center","mr-2"],[1,"h-line"],[1,"circle","bg-primary","rounded-circle"],[1,"info","align-self-center","border-bottom","py-1","w-100"],[1,"text-secondary",2,"font-size","12px"]],template:function(e,t){if(1&e){const e=l.Ub();l.Tb(0,"div",0),l.Tb(1,"div",1),l.Tb(2,"h3",2),l.Jc(3," Shares "),l.Tb(4,"div",3),l.Tb(5,"mat-slide-toggle",4),l.Jc(6,"Email notifications"),l.Sb(),l.Tb(7,"div",5),l.Tb(8,"button",6),l.Jc(9," Compose "),l.Sb(),l.Tb(10,"div",7),l.Tb(11,"a",8),l.ec("click",(function(){l.yc(e);const i=l.wc(33);return t.openModal(i)})),l.Ob(12,"i",9),l.Jc(13,"Email"),l.Sb(),l.Tb(14,"a",8),l.ec("click",(function(){l.yc(e);const i=l.wc(35);return t.openModal(i)})),l.Ob(15,"i",10),l.Jc(16,"Link"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(17,"div",11),l.Tb(18,"div",12),l.Tb(19,"mat-form-field",13),l.Ob(20,"i",14),l.Ob(21,"input",15),l.Sb(),l.Sb(),l.Tb(22,"div",16),l.Jc(23," Sort by: "),l.Tb(24,"span",17),l.Jc(25,"Name"),l.Ob(26,"i",18),l.Sb(),l.Tb(27,"span",19),l.Jc(28,"Date Modified"),l.Ob(29,"i",18),l.Sb(),l.Sb(),l.Sb(),l.Tb(30,"div",20),l.Hc(31,p,22,0,"div",21),l.Sb(),l.Sb(),l.Sb(),l.Hc(32,m,38,0,"ng-template",null,22,l.Ic),l.Hc(34,g,28,0,"ng-template",null,23,l.Ic),l.Hc(36,f,72,2,"ng-template",null,24,l.Ic)}2&e&&(l.Ab(19),l.oc("floatLabel","never"),l.Ab(12),l.oc("ngForOf",t.testArr))},directives:[b.a,r.c,r.h,c.b,n.l,r.g,d.a,s.a,s.c,s.e,s.f,s.d],styles:[".options[_ngcontent-%COMP%]   .opt[_ngcontent-%COMP%]{width:25px;height:25px}.options[_ngcontent-%COMP%]   .opt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:12px}.modal-body[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .opt[_ngcontent-%COMP%]{width:30px;height:30px}.modal-body[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .opt[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}.timeline[_ngcontent-%COMP%]{height:50px}.timeline[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]{position:relative;width:36px;height:50px}.timeline[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{position:absolute;height:12px;width:12px;left:12px;top:19px}.timeline[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]   .h-line[_ngcontent-%COMP%]{position:absolute;left:17px;top:0;height:100%;width:2px;background-color:#c4c4c4}"]}),e})()}];let T=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[n.c,o.h.forChild(S),d.b,r.e,c.c,b.b,s.b]]}),e})()}}]);