(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{wZkO:function(t,e,i){"use strict";i.d(e,"a",(function(){return q})),i.d(e,"b",(function(){return lt})),i.d(e,"c",(function(){return $})),i.d(e,"d",(function(){return yt})),i.d(e,"e",(function(){return ft})),i.d(e,"f",(function(){return kt}));var a=i("u47x"),n=i("GU7r"),s=i("+rOU"),o=i("ofXK"),r=i("fXoL"),l=i("FKr1"),c=i("R1ws"),b=i("XNiG"),d=i("quSY"),h=i("VRyK"),u=i("xgIS"),p=i("LRne"),m=i("PqYM"),g=i("R0Ic"),f=i("JX91"),_=i("/uUt"),x=i("1G5W"),v=i("8LU1"),y=i("nLfN"),k=i("FtGj"),w=i("cH1L"),C=i("vxfF");function I(t,e){1&t&&r.nc(0)}const T=["*"];function P(t,e){}const L=function(t){return{animationDuration:t}},S=function(t,e){return{value:t,params:e}},D=["tabBodyWrapper"],O=["tabHeader"];function R(t,e){}function A(t,e){if(1&t&&r.Jc(0,R,0,0,"ng-template",9),2&t){const t=r.ic().$implicit;r.pc("cdkPortalOutlet",t.templateLabel)}}function N(t,e){if(1&t&&r.Lc(0),2&t){const t=r.ic().$implicit;r.Mc(t.textLabel)}}function j(t,e){if(1&t){const t=r.Ub();r.Tb(0,"div",6),r.ec("click",(function(){r.Ac(t);const i=e.$implicit,a=e.index,n=r.ic(),s=r.xc(1);return n._handleClick(i,s,a)})),r.Tb(1,"div",7),r.Jc(2,A,1,1,"ng-template",8),r.Jc(3,N,1,1,"ng-template",8),r.Sb(),r.Sb()}if(2&t){const t=e.$implicit,i=e.index,a=r.ic();r.Fb("mat-tab-label-active",a.selectedIndex==i),r.pc("id",a._getTabLabelId(i))("disabled",t.disabled)("matRippleDisabled",t.disabled||a.disableRipple),r.Bb("tabIndex",a._getTabIndex(t,i))("aria-posinset",i+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(i))("aria-selected",a.selectedIndex==i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),r.Ab(2),r.pc("ngIf",t.templateLabel),r.Ab(1),r.pc("ngIf",!t.templateLabel)}}function F(t,e){if(1&t){const t=r.Ub();r.Tb(0,"mat-tab-body",10),r.ec("_onCentered",(function(){return r.Ac(t),r.ic()._removeTabBodyWrapperHeight()}))("_onCentering",(function(e){return r.Ac(t),r.ic()._setTabBodyWrapperHeight(e)})),r.Sb()}if(2&t){const t=e.$implicit,i=e.index,a=r.ic();r.Fb("mat-tab-body-active",a.selectedIndex==i),r.pc("id",a._getTabContentId(i))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",a.animationDuration),r.Bb("aria-labelledby",a._getTabLabelId(i))}}const E=["tabListContainer"],B=["tabList"],M=["nextPaginator"],H=["previousPaginator"],W=["mat-tab-nav-bar",""],z=new r.r("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let G=(()=>{class t{constructor(t,e,i,a){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=a}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(r.A),r.Nb(z),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&r.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const V=new r.r("MatTabContent"),Q=new r.r("MatTabLabel");let $=(()=>{class t extends s.b{}return t.\u0275fac=function(e){return J(e||t)},t.\u0275dir=r.Ib({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[r.zb([{provide:Q,useExisting:t}]),r.xb]}),t})();const J=r.Vb($);class K{}const U=Object(l.t)(K),Y=new r.r("MAT_TAB_GROUP");let q=(()=>{class t extends U{constructor(t,e){super(),this._viewContainerRef=t,this._closestTabGroup=e,this.textLabel="",this._contentPortal=null,this._stateChanges=new b.a,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new s.h(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&(this._templateLabel=t)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.Q),r.Nb(Y,8))},t.\u0275cmp=r.Hb({type:t,selectors:[["mat-tab"]],contentQueries:function(t,e,i){var a;1&t&&(r.Gb(i,Q,!0),r.Ec(i,V,!0,r.M)),2&t&&(r.wc(a=r.fc())&&(e.templateLabel=a.first),r.wc(a=r.fc())&&(e._explicitContent=a.first))},viewQuery:function(t,e){var i;1&t&&r.Fc(r.M,!0),2&t&&r.wc(i=r.fc())&&(e._implicitContent=i.first)},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[r.xb,r.yb],ngContentSelectors:T,decls:1,vars:0,template:function(t,e){1&t&&(r.oc(),r.Jc(0,I,1,0,"ng-template"))},encapsulation:2}),t})();const X={translateTab:Object(g.m)("translateTab",[Object(g.j)("center, void, left-origin-center, right-origin-center",Object(g.k)({transform:"none"})),Object(g.j)("left",Object(g.k)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),Object(g.j)("right",Object(g.k)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),Object(g.l)("* => left, * => right, left => center, right => center",Object(g.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),Object(g.l)("void => left-origin-center",[Object(g.k)({transform:"translate3d(-100%, 0, 0)"}),Object(g.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),Object(g.l)("void => right-origin-center",[Object(g.k)({transform:"translate3d(100%, 0, 0)"}),Object(g.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let Z=(()=>{class t extends s.c{constructor(t,e,i,a){super(t,e,a),this._host=i,this._centeringSub=d.a.EMPTY,this._leavingSub=d.a.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Object(f.a)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.j),r.Nb(r.Q),r.Nb(Object(r.U)(()=>et)),r.Nb(o.d))},t.\u0275dir=r.Ib({type:t,selectors:[["","matTabBodyHost",""]],features:[r.xb]}),t})(),tt=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._dir=e,this._dirChangeSubscription=d.a.EMPTY,this._translateTabComplete=new b.a,this._onCentering=new r.n,this._beforeCentering=new r.n,this._afterLeavingCenter=new r.n,this._onCentered=new r.n(!0),this.animationDuration="500ms",e&&(this._dirChangeSubscription=e.change.subscribe(t=>{this._computePositionAnimationState(t),i.markForCheck()})),this._translateTabComplete.pipe(Object(_.a)((t,e)=>t.fromState===e.fromState&&t.toState===e.toState)).subscribe(t=>{this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const e=this._getLayoutDirection();return"ltr"==e&&t<=0||"rtl"==e&&t>0?"left-origin-center":"right-origin-center"}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(w.b,8),r.Nb(r.h))},t.\u0275dir=r.Ib({type:t,inputs:{animationDuration:"animationDuration",position:"position",_content:["content","_content"],origin:"origin"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),t})(),et=(()=>{class t extends tt{constructor(t,e,i){super(t,e,i)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(w.b,8),r.Nb(r.h))},t.\u0275cmp=r.Hb({type:t,selectors:[["mat-tab-body"]],viewQuery:function(t,e){var i;1&t&&r.Pc(s.f,!0),2&t&&r.wc(i=r.fc())&&(e._portalHost=i.first)},hostAttrs:[1,"mat-tab-body"],features:[r.xb],decls:3,vars:6,consts:[[1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,e){1&t&&(r.Tb(0,"div",0,1),r.ec("@translateTab.start",(function(t){return e._onTranslateTabStarted(t)}))("@translateTab.done",(function(t){return e._translateTabComplete.next(t)})),r.Jc(2,P,0,0,"ng-template",2),r.Sb()),2&t&&r.pc("@translateTab",r.uc(3,S,e._position,r.tc(1,L,e.animationDuration)))},directives:[Z],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[X.translateTab]}}),t})();const it=new r.r("MAT_TABS_CONFIG");let at=0;class nt{}class st{constructor(t){this._elementRef=t}}const ot=Object(l.r)(Object(l.s)(st),"primary");let rt=(()=>{class t extends ot{constructor(t,e,i,a){super(t),this._changeDetectorRef=e,this._animationMode=a,this._tabs=new r.E,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=d.a.EMPTY,this._tabLabelSubscription=d.a.EMPTY,this._dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new r.n,this.focusChange=new r.n,this.animationDone=new r.n,this.selectedTabChange=new r.n(!0),this._groupId=at++,this.animationDuration=i&&i.animationDuration?i.animationDuration:"500ms",this.disablePagination=!(!i||null==i.disablePagination)&&i.disablePagination}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=Object(v.b)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=Object(v.e)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement;e.classList.remove("mat-background-"+this.backgroundColor),t&&e.classList.add("mat-background-"+t),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const e=null==this._selectedIndex;e||this.selectedTabChange.emit(this._createChangeEvent(t)),Promise.resolve().then(()=>{this._tabs.forEach((e,i)=>e.isActive=i===t),e||this.selectedIndexChange.emit(t)})}this._tabs.forEach((e,i)=>{e.position=i-t,null==this._selectedIndex||0!=e.position||e.origin||(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const t=this._tabs.toArray();for(let e=0;e<t.length;e++)if(t[e].isActive){this._indexToSelect=this._selectedIndex=e;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Object(f.a)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(t=>!t._closestTabGroup||t._closestTabGroup===this)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}_focusChanged(t){this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const e=new nt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Object(h.a)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,e,i){t.disabled||(this.selectedIndex=e.focusIndex=i)}_getTabIndex(t,e){return t.disabled?null:this.selectedIndex===e?0:-1}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(r.h),r.Nb(it,8),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,inputs:{headerPosition:"headerPosition",animationDuration:"animationDuration",disablePagination:"disablePagination",dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[r.xb]}),t})(),lt=(()=>{class t extends rt{constructor(t,e,i,a){super(t,e,i,a)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(r.h),r.Nb(it,8),r.Nb(c.a,8))},t.\u0275cmp=r.Hb({type:t,selectors:[["mat-tab-group"]],contentQueries:function(t,e,i){var a;1&t&&r.Gb(i,q,!0),2&t&&r.wc(a=r.fc())&&(e._allTabs=a)},viewQuery:function(t,e){var i;1&t&&(r.Pc(D,!0),r.Pc(O,!0)),2&t&&(r.wc(i=r.fc())&&(e._tabBodyWrapper=i.first),r.wc(i=r.fc())&&(e._tabHeader=i.first))},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(t,e){2&t&&r.Fb("mat-tab-group-dynamic-height",e.dynamicHeight)("mat-tab-group-inverted-header","below"===e.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[r.zb([{provide:Y,useExisting:t}]),r.xb],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(t,e){1&t&&(r.Tb(0,"mat-tab-header",0,1),r.ec("indexFocused",(function(t){return e._focusChanged(t)}))("selectFocusedIndex",(function(t){return e.selectedIndex=t})),r.Jc(2,j,4,14,"div",2),r.Sb(),r.Tb(3,"div",3,4),r.Jc(5,F,1,8,"mat-tab-body",5),r.Sb()),2&t&&(r.pc("selectedIndex",e.selectedIndex||0)("disableRipple",e.disableRipple)("disablePagination",e.disablePagination),r.Ab(2),r.pc("ngForOf",e._tabs),r.Ab(1),r.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode),r.Ab(2),r.pc("ngForOf",e._tabs))},directives:function(){return[mt,o.l,dt,l.m,a.e,o.m,s.c,et]},styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),t})();class ct{}const bt=Object(l.t)(ct);let dt=(()=>{class t extends bt{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l))},t.\u0275dir=r.Ib({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,e){2&t&&(r.Bb("aria-disabled",!!e.disabled),r.Fb("mat-tab-disabled",e.disabled))},inputs:{disabled:"disabled"},features:[r.xb]}),t})();const ht=Object(y.f)({passive:!0});let ut=(()=>{class t{constructor(t,e,i,a,n,s,o){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=a,this._ngZone=n,this._platform=s,this._animationMode=o,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new b.a,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new b.a,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new r.n,this.indexFocused=new r.n,n.runOutsideAngular(()=>{Object(u.a)(t.nativeElement,"mouseleave").pipe(Object(x.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(v.e)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){Object(u.a)(this._previousPaginator.nativeElement,"touchstart",ht).pipe(Object(x.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(u.a)(this._nextPaginator.nativeElement,"touchstart",ht).pipe(Object(x.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(p.a)(null),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new a.g(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),Object(h.a)(t,e,this._items.changes).pipe(Object(x.a)(this._destroyed)).subscribe(()=>{Promise.resolve().then(i),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(x.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(k.t)(t))switch(t.keyCode){case k.g:case k.o:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,i=this._getLayoutDirection();e.scrollLeft="ltr"==i?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e=this._platform,i="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,e&&(e.TRIDENT||e.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:n}=e.elementRef.nativeElement;let s,o;"ltr"==this._getLayoutDirection()?(s=a,o=s+n):(o=this._tabList.nativeElement.offsetWidth-a,s=o-n);const r=this.scrollDistance,l=this.scrollDistance+i;s<r?this.scrollDistance-=r-s+60:o>l&&(this.scrollDistance+=o-l+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),Object(m.a)(650,100).pipe(Object(x.a)(Object(h.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(r.h),r.Nb(C.d),r.Nb(w.b,8),r.Nb(r.A),r.Nb(y.a),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),pt=(()=>{class t extends ut{constructor(t,e,i,a,n,s,o){super(t,e,i,a,n,s,o),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(v.b)(t)}_itemSelected(t){t.preventDefault()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(r.h),r.Nb(C.d),r.Nb(w.b,8),r.Nb(r.A),r.Nb(y.a),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,inputs:{disableRipple:"disableRipple"},features:[r.xb]}),t})(),mt=(()=>{class t extends pt{constructor(t,e,i,a,n,s,o){super(t,e,i,a,n,s,o)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(r.h),r.Nb(C.d),r.Nb(w.b,8),r.Nb(r.A),r.Nb(y.a),r.Nb(c.a,8))},t.\u0275cmp=r.Hb({type:t,selectors:[["mat-tab-header"]],contentQueries:function(t,e,i){var a;1&t&&r.Gb(i,dt,!1),2&t&&r.wc(a=r.fc())&&(e._items=a)},viewQuery:function(t,e){var i;1&t&&(r.Fc(G,!0),r.Fc(E,!0),r.Fc(B,!0),r.Pc(M,!0),r.Pc(H,!0)),2&t&&(r.wc(i=r.fc())&&(e._inkBar=i.first),r.wc(i=r.fc())&&(e._tabListContainer=i.first),r.wc(i=r.fc())&&(e._tabList=i.first),r.wc(i=r.fc())&&(e._nextPaginator=i.first),r.wc(i=r.fc())&&(e._previousPaginator=i.first))},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(t,e){2&t&&r.Fb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[r.xb],ngContentSelectors:T,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(r.oc(),r.Tb(0,"div",0,1),r.ec("click",(function(){return e._handlePaginatorClick("before")}))("mousedown",(function(t){return e._handlePaginatorPress("before",t)}))("touchend",(function(){return e._stopInterval()})),r.Ob(2,"div",2),r.Sb(),r.Tb(3,"div",3,4),r.ec("keydown",(function(t){return e._handleKeydown(t)})),r.Tb(5,"div",5,6),r.ec("cdkObserveContent",(function(){return e._onContentChanges()})),r.Tb(7,"div",7),r.nc(8),r.Sb(),r.Ob(9,"mat-ink-bar"),r.Sb(),r.Sb(),r.Tb(10,"div",8,9),r.ec("mousedown",(function(t){return e._handlePaginatorPress("after",t)}))("click",(function(){return e._handlePaginatorClick("after")}))("touchend",(function(){return e._stopInterval()})),r.Ob(12,"div",2),r.Sb()),2&t&&(r.Fb("mat-tab-header-pagination-disabled",e._disableScrollBefore),r.pc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),r.Ab(5),r.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode),r.Ab(5),r.Fb("mat-tab-header-pagination-disabled",e._disableScrollAfter),r.pc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[l.m,n.a,G],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),t})(),gt=(()=>{class t extends ut{constructor(t,e,i,a,n,s,o){super(t,a,n,e,i,s,o),this._disableRipple=!1,this.color="primary"}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement.classList;e.remove("mat-background-"+this.backgroundColor),t&&e.add("mat-background-"+t),this._backgroundColor=t}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(v.b)(t)}_itemSelected(){}ngAfterContentInit(){this._items.changes.pipe(Object(f.a)(null),Object(x.a)(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}updateActiveLink(t){if(!this._items)return;const e=this._items.toArray();for(let i=0;i<e.length;i++)if(e[i].active)return this.selectedIndex=i,void this._changeDetectorRef.markForCheck();this.selectedIndex=-1,this._inkBar.hide()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(w.b,8),r.Nb(r.A),r.Nb(r.h),r.Nb(C.d),r.Nb(y.a),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,inputs:{color:"color",backgroundColor:"backgroundColor",disableRipple:"disableRipple"},features:[r.xb]}),t})(),ft=(()=>{class t extends gt{constructor(t,e,i,a,n,s,o){super(t,e,i,a,n,s,o)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.l),r.Nb(w.b,8),r.Nb(r.A),r.Nb(r.h),r.Nb(C.d),r.Nb(y.a),r.Nb(c.a,8))},t.\u0275cmp=r.Hb({type:t,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,e,i){var a;1&t&&r.Gb(i,yt,!0),2&t&&r.wc(a=r.fc())&&(e._items=a)},viewQuery:function(t,e){var i;1&t&&(r.Fc(G,!0),r.Fc(E,!0),r.Fc(B,!0),r.Pc(M,!0),r.Pc(H,!0)),2&t&&(r.wc(i=r.fc())&&(e._inkBar=i.first),r.wc(i=r.fc())&&(e._tabListContainer=i.first),r.wc(i=r.fc())&&(e._tabList=i.first),r.wc(i=r.fc())&&(e._nextPaginator=i.first),r.wc(i=r.fc())&&(e._previousPaginator=i.first))},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:10,hostBindings:function(t,e){2&t&&r.Fb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())("mat-primary","warn"!==e.color&&"accent"!==e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color)},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[r.xb],attrs:W,ngContentSelectors:T,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(r.oc(),r.Tb(0,"div",0,1),r.ec("click",(function(){return e._handlePaginatorClick("before")}))("mousedown",(function(t){return e._handlePaginatorPress("before",t)}))("touchend",(function(){return e._stopInterval()})),r.Ob(2,"div",2),r.Sb(),r.Tb(3,"div",3,4),r.ec("keydown",(function(t){return e._handleKeydown(t)})),r.Tb(5,"div",5,6),r.ec("cdkObserveContent",(function(){return e._onContentChanges()})),r.Tb(7,"div",7),r.nc(8),r.Sb(),r.Ob(9,"mat-ink-bar"),r.Sb(),r.Sb(),r.Tb(10,"div",8,9),r.ec("mousedown",(function(t){return e._handlePaginatorPress("after",t)}))("click",(function(){return e._handlePaginatorClick("after")}))("touchend",(function(){return e._stopInterval()})),r.Ob(12,"div",2),r.Sb()),2&t&&(r.Fb("mat-tab-header-pagination-disabled",e._disableScrollBefore),r.pc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),r.Ab(5),r.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode),r.Ab(5),r.Fb("mat-tab-header-pagination-disabled",e._disableScrollAfter),r.pc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[l.m,n.a,G],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n'],encapsulation:2}),t})();class _t{}const xt=Object(l.w)(Object(l.s)(Object(l.t)(_t)));let vt=(()=>{class t extends xt{constructor(t,e,i,a,n,s){super(),this._tabNavBar=t,this.elementRef=e,this._focusMonitor=n,this._isActive=!1,this.rippleConfig=i||{},this.tabIndex=parseInt(a)||0,"NoopAnimations"===s&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0})}get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink(this.elementRef))}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this.elementRef)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(gt),r.Nb(r.l),r.Nb(l.g,8),r.cc("tabindex"),r.Nb(a.h),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,inputs:{active:"active"},features:[r.xb]}),t})(),yt=(()=>{class t extends vt{constructor(t,e,i,a,n,s,o,r){super(t,e,n,s,o,r),this._tabLinkRipple=new l.o(this,i,e,a),this._tabLinkRipple.setupTriggerEvents(e.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(ft),r.Nb(r.l),r.Nb(r.A),r.Nb(y.a),r.Nb(l.g,8),r.cc("tabindex"),r.Nb(a.h),r.Nb(c.a,8))},t.\u0275dir=r.Ib({type:t,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:7,hostBindings:function(t,e){2&t&&(r.Bb("aria-current",e.active?"page":null)("aria-disabled",e.disabled)("tabIndex",e.tabIndex),r.Fb("mat-tab-disabled",e.disabled)("mat-tab-label-active",e.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[r.xb]}),t})(),kt=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[o.c,l.h,s.g,l.n,n.c,a.a],l.h]}),t})()}}]);