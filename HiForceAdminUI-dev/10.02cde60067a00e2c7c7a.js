(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Qu3c:function(t,e,i){"use strict";i.d(e,"a",(function(){return A})),i.d(e,"b",(function(){return H}));var s=i("rDax"),o=i("u47x"),n=i("ofXK"),r=i("fXoL"),a=i("FKr1"),h=i("vxfF"),l=i("8LU1"),c=i("FtGj"),d=i("XNiG"),p=i("itXk"),_=i("GyhO"),u=i("HDdC"),b=i("IzEk"),m=i("7o/Q");class f{constructor(t){this.total=t}call(t,e){return e.subscribe(new v(t,this.total))}}class v extends m.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var y=i("Kj3r"),g=i("lJxs"),w=i("JX91"),O=i("1G5W"),I=i("nLfN");const T=new Set;let j,k=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):E}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!T.has(t))try{j||(j=document.createElement("style"),j.setAttribute("type","text/css"),document.head.appendChild(j)),j.sheet&&(j.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),T.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(I.a))},t.\u0275prov=Object(r.Jb)({factory:function(){return new t(Object(r.bc)(I.a))},token:t,providedIn:"root"}),t})();function E(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let x=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new d.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return D(Object(l.a)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=D(Object(l.a)(t)).map(t=>this._registerQuery(t).observable);let i=Object(p.a)(e);return i=Object(_.a)(i.pipe(Object(b.a)(1)),i.pipe(t=>t.lift(new f(1)),Object(y.a)(0))),i.pipe(Object(g.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(({matches:t,query:i})=>{e.matches=e.matches||t,e.breakpoints[i]=t}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),i={observable:new u.a(t=>{const i=e=>this._zone.run(()=>t.next(e));return e.addListener(i),()=>{e.removeListener(i)}}).pipe(Object(w.a)(e),Object(g.a)(({matches:e})=>({query:t,matches:e})),Object(O.a)(this._destroySubject)),mql:e};return this._queries.set(t,i),i}}return t.\u0275fac=function(e){return new(e||t)(r.bc(k),r.bc(r.A))},t.\u0275prov=Object(r.Jb)({factory:function(){return new t(Object(r.bc)(k),Object(r.bc)(r.A))},token:t,providedIn:"root"}),t})();function D(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var C=i("+rOU"),N=i("R0Ic"),R=i("cH1L");const S={tooltipState:Object(N.m)("state",[Object(N.j)("initial, void, hidden",Object(N.k)({opacity:0,transform:"scale(0)"})),Object(N.j)("visible",Object(N.k)({transform:"scale(1)"})),Object(N.l)("* => visible",Object(N.e)("200ms cubic-bezier(0, 0, 0.2, 1)",Object(N.g)([Object(N.k)({opacity:0,transform:"scale(0)",offset:0}),Object(N.k)({opacity:.5,transform:"scale(0.99)",offset:.5}),Object(N.k)({opacity:1,transform:"scale(1)",offset:1})]))),Object(N.l)("* => hidden",Object(N.e)("100ms cubic-bezier(0, 0, 0.2, 1)",Object(N.k)({opacity:0})))])},L=Object(I.f)({passive:!0}),M=new r.r("mat-tooltip-scroll-strategy"),P={provide:M,deps:[s.c],useFactory:function(t){return()=>t.scrollStrategies.reposition({scrollThrottle:20})}},G=new r.r("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}});let A=(()=>{class t{constructor(t,e,i,s,o,n,r,a,h,l,p){this._overlay=t,this._elementRef=e,this._scrollDispatcher=i,this._viewContainerRef=s,this._ngZone=o,this._platform=n,this._ariaDescriber=r,this._focusMonitor=a,this._dir=l,this._defaultOptions=p,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new d.a,this._handleKeydown=t=>{this._isTooltipVisible()&&t.keyCode===c.h&&!Object(c.t)(t)&&(t.preventDefault(),t.stopPropagation(),this._ngZone.run(()=>this.hide(0)))},this._scrollStrategy=h,p&&(p.position&&(this.position=p.position),p.touchGestures&&(this.touchGestures=p.touchGestures)),o.runOutsideAngular(()=>{e.nativeElement.addEventListener("keydown",this._handleKeydown)})}get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(),this._tooltipInstance&&this._tooltipInstance.show(0),this._overlayRef.updatePosition()))}get disabled(){return this._disabled}set disabled(t){this._disabled=Object(l.b)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message),this._message=null!=t?(""+t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message)})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Object(O.a)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),t.removeEventListener("keydown",this._handleKeydown),this._passiveListeners.forEach(([e,i])=>{t.removeEventListener(e,i,L)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay){if(this.disabled||!this.message||this._isTooltipVisible()&&!this._tooltipInstance._showTimeoutId&&!this._tooltipInstance._hideTimeoutId)return;const e=this._createOverlay();this._detach(),this._portal=this._portal||new C.d(X,this._viewContainerRef),this._tooltipInstance=e.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe(Object(O.a)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(t)}hide(t=this.hideDelay){this._tooltipInstance&&this._tooltipInstance.hide(t)}toggle(){this._isTooltipVisible()?this.hide():this.show()}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(){if(this._overlayRef)return this._overlayRef;const t=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),e=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".mat-tooltip").withFlexibleDimensions(!1).withViewportMargin(8).withScrollableContainers(t);return e.positionChanges.pipe(Object(O.a)(this._destroyed)).subscribe(t=>{this._tooltipInstance&&t.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:e,panelClass:"mat-tooltip-panel",scrollStrategy:this._scrollStrategy()}),this._updatePosition(),this._overlayRef.detachments().pipe(Object(O.a)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(){const t=this._overlayRef.getConfig().positionStrategy,e=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([Object.assign(Object.assign({},e.main),i.main),Object.assign(Object.assign({},e.fallback),i.fallback)])}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let i;"above"==e||"below"==e?i={originX:"center",originY:"above"==e?"top":"bottom"}:"before"==e||"left"==e&&t||"right"==e&&!t?i={originX:"start",originY:"center"}:("after"==e||"right"==e&&t||"left"==e&&!t)&&(i={originX:"end",originY:"center"});const{x:s,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:s,originY:o}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,e=this.position;let i;"above"==e?i={overlayX:"center",overlayY:"bottom"}:"below"==e?i={overlayX:"center",overlayY:"top"}:"before"==e||"left"==e&&t||"right"==e&&!t?i={overlayX:"end",overlayY:"center"}:("after"==e||"right"==e&&t||"left"==e&&!t)&&(i={overlayX:"start",overlayY:"center"});const{x:s,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:s,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe(Object(b.a)(1),Object(O.a)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}_setupPointerEnterEventsIfNeeded(){!this._disabled&&this.message&&this._viewInitialized&&!this._passiveListeners.length&&(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",()=>{this._setupPointerExitEventsIfNeeded(),this.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",()=>{this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",()=>this.hide()]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const e=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",e],["touchcancel",e])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([t,e])=>{this._elementRef.nativeElement.addEventListener(t,e,L)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const e=this._elementRef.nativeElement,i=e.style;("on"===t||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),"on"!==t&&e.draggable||(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(s.c),r.Nb(r.l),r.Nb(h.b),r.Nb(r.Q),r.Nb(r.A),r.Nb(I.a),r.Nb(o.c),r.Nb(o.h),r.Nb(M),r.Nb(R.b,8),r.Nb(G,8))},t.\u0275dir=r.Ib({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],inputs:{showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]}),t})(),X=(()=>{class t{constructor(t,e){this._changeDetectorRef=t,this._breakpointObserver=e,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new d.a,this._isHandset=this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)")}show(t){this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout(()=>{this._visibility="visible",this._showTimeoutId=null,this._markForCheck()},t)}hide(t){this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout(()=>{this._visibility="hidden",this._hideTimeoutId=null,this._markForCheck()},t)}afterHidden(){return this._onHide}isVisible(){return"visible"===this._visibility}ngOnDestroy(){this._onHide.complete()}_animationStart(){this._closeOnInteraction=!1}_animationDone(t){const e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(r.h),r.Nb(x))},t.\u0275cmp=r.Hb({type:t,selectors:[["mat-tooltip-component"]],hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&r.ec("click",(function(){return e._handleBodyInteraction()}),!1,r.yc),2&t&&r.Gc("zoom","visible"===e._visibility?1:null)},decls:3,vars:7,consts:[[1,"mat-tooltip",3,"ngClass"]],template:function(t,e){var i;1&t&&(r.Tb(0,"div",0),r.ec("@state.start",(function(){return e._animationStart()}))("@state.done",(function(t){return e._animationDone(t)})),r.jc(1,"async"),r.Lc(2),r.Sb()),2&t&&(r.Fb("mat-tooltip-handset",null==(i=r.kc(1,5,e._isHandset))?null:i.matches),r.pc("ngClass",e.tooltipClass)("@state",e._visibility),r.Ab(2),r.Mc(e.message))},directives:[n.k],pipes:[n.b],styles:[".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],encapsulation:2,data:{animation:[S.tooltipState]},changeDetection:0}),t})(),H=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},providers:[P],imports:[[o.a,n.c,s.f,a.h],a.h,h.a]}),t})()}}]);