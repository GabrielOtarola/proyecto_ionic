"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8247],{8247:(Ma,H,d)=>{d.r(H),d.d(H,{HomePageModule:()=>ya});var h=d(177),m=d(4742),wt=d(4341),N=d(1739),I=d(467),i=d(4438);let Ot=(()=>{var n;class t{constructor(e){this.modalController=e,this.username=""}dismiss(){this.modalController.dismiss()}}return(n=t).\u0275fac=function(e){return new(e||n)(i.rXU(m.W3))},n.\u0275cmp=i.VBU({type:n,selectors:[["app-bienvenida-modal"]],inputs:{username:"username"},decls:14,vars:1,consts:[["slot","end"],[3,"click"],[1,"ion-padding"],[1,"logo-container"],["src","assets/img/logo.png","alt","Logo",1,"logo-img"],[1,"app-title"]],template:function(e,o){1&e&&(i.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),i.EFF(3,"Bienvenida"),i.k0s(),i.j41(4,"ion-buttons",0)(5,"ion-button",1),i.bIt("click",function(){return o.dismiss()}),i.EFF(6,"Cerrar"),i.k0s()()()(),i.j41(7,"ion-content",2)(8,"div",3),i.nrm(9,"img",4),i.j41(10,"h2",5),i.EFF(11),i.k0s()(),i.j41(12,"p"),i.EFF(13,"Te felicitamos por dar el primer paso hacia una vida saludable. \xa1Sigue adelante y alcanza tus metas!"),i.k0s()()),2&e&&(i.R7$(11),i.SpI("\xa1Bienvenido, ",o.username,"!"))},dependencies:[m.Jm,m.QW,m.W9,m.eU,m.BC,m.ai],styles:['@charset "UTF-8";.logo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px;margin-top:20px;width:100%}.logo-img[_ngcontent-%COMP%]{width:200px;height:auto}.app-title[_ngcontent-%COMP%]{font-size:24px;color:#de7e1e;margin:0;text-align:center}ion-content[_ngcontent-%COMP%]{background-color:#fff}p[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#333}']}),t})();var Rt=d(3656);const K=(0,d(7464).F3)("LocalNotifications",{web:()=>d.e(4224).then(d.bind(d,4224)).then(n=>new n.LocalNotificationsWeb)});let St=(()=>{var n;class t{constructor(){this.requestPermission()}requestPermission(){return(0,I.A)(function*(){"granted"===(yield K.requestPermissions()).display?console.log("Permiso de notificaciones concedido"):console.error("Permiso de notificaciones no concedido")})()}scheduleWaterReminder(){return(0,I.A)(function*(){yield K.schedule({notifications:[{title:"Recordatorio de Hidrataci\xf3n",body:"Es hora de beber agua para mantenerte hidratado.",id:1,schedule:{on:{hour:0,minute:1},repeats:!0},sound:"beep.wav"}]})})()}}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),t})();var Pt=d(369);let L;try{L=typeof Intl<"u"&&Intl.v8BreakIterator}catch{L=!1}let E,G=(()=>{var n;class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,h.UE)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!L)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return(n=t).\u0275fac=function(e){return new(e||n)(i.KVO(i.Agw))},n.\u0275prov=i.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),t})();function F(n){return function Bt(){if(null==E&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>E=!0}))}finally{E=E||!1}return E}()?n:!!n.capture}var _=d(1413),P=d(8359);d(4402),d(7673),d(8141);class ce extends P.yU{constructor(t,a){super()}schedule(t,a=0){return this}}const k={setInterval(n,t,...a){const{delegate:e}=k;return null!=e&&e.setInterval?e.setInterval(n,t,...a):setInterval(n,t,...a)},clearInterval(n){const{delegate:t}=k;return((null==t?void 0:t.clearInterval)||clearInterval)(n)},delegate:void 0};var de=d(7908);const X={now:()=>(X.delegate||Date).now(),delegate:void 0};class T{constructor(t,a=T.now){this.schedulerActionCtor=t,this.now=a}schedule(t,a=0,e){return new this.schedulerActionCtor(this,t).schedule(e,a)}}T.now=X.now;const ue=new class me extends T{constructor(t,a=T.now){super(t,a),this.actions=[],this._active=!1}flush(t){const{actions:a}=this;if(this._active)return void a.push(t);let e;this._active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=a.shift());if(this._active=!1,e){for(;t=a.shift();)t.unsubscribe();throw e}}}(class le extends ce{constructor(t,a){super(t,a),this.scheduler=t,this.work=a,this.pending=!1}schedule(t,a=0){var e;if(this.closed)return this;this.state=t;const o=this.id,r=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(r,o,a)),this.pending=!0,this.delay=a,this.id=null!==(e=this.id)&&void 0!==e?e:this.requestAsyncId(r,this.id,a),this}requestAsyncId(t,a,e=0){return k.setInterval(t.flush.bind(t,this),e)}recycleAsyncId(t,a,e=0){if(null!=e&&this.delay===e&&!1===this.pending)return a;null!=a&&k.clearInterval(a)}execute(t,a){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const e=this._execute(t,a);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,a){let o,e=!1;try{this.work(t)}catch(r){e=!0,o=r||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:a}=this,{actions:e}=a;this.work=this.state=this.scheduler=null,this.pending=!1,(0,de.o)(e,this),null!=t&&(this.id=this.recycleAsyncId(a,t,null)),this.delay=null,super.unsubscribe()}}});var pe=d(9974),be=d(4360);var q=d(5964),B=d(6354),j=d(6697);function tt(n){return Array.isArray(n)?n:[n]}function et(n){return n instanceof i.aKT?n.nativeElement:n}var fe=d(4572),_e=d(8793),ve=d(1985),ye=d(9172),Me=d(6977);const at=new Set;let v,xe=(()=>{var n;class t{constructor(e,o){this._platform=e,this._nonce=o,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ee}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function Ie(n,t){if(!at.has(n))try{v||(v=document.createElement("style"),t&&v.setAttribute("nonce",t),v.setAttribute("type","text/css"),document.head.appendChild(v)),v.sheet&&(v.sheet.insertRule(`@media ${n} {body{ }}`,0),at.add(n))}catch(a){console.error(a)}}(e,this._nonce),this._matchMedia(e)}}return(n=t).\u0275fac=function(e){return new(e||n)(i.KVO(G),i.KVO(i.BIS,8))},n.\u0275prov=i.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),t})();function Ee(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}let Ae=(()=>{var n;class t{constructor(e,o){this._mediaMatcher=e,this._zone=o,this._queries=new Map,this._destroySubject=new _.B}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return nt(tt(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){const r=nt(tt(e)).map(c=>this._registerQuery(c).observable);let s=(0,fe.z)(r);return s=(0,_e.x)(s.pipe((0,j.s)(1)),s.pipe(function ge(n){return(0,q.p)((t,a)=>n<=a)}(1),function Q(n,t=ue){return(0,pe.N)((a,e)=>{let o=null,r=null,s=null;const c=()=>{if(o){o.unsubscribe(),o=null;const u=r;r=null,e.next(u)}};function l(){const u=s+n,p=t.now();if(p<u)return o=this.schedule(void 0,u-p),void e.add(o);c()}a.subscribe((0,be._)(e,u=>{r=u,s=t.now(),o||(o=t.schedule(l,n),e.add(o))},()=>{c(),e.complete()},void 0,()=>{r=o=null}))})}(0))),s.pipe((0,B.T)(c=>{const l={matches:!1,breakpoints:{}};return c.forEach(({matches:u,query:p})=>{l.matches=l.matches||u,l.breakpoints[p]=u}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const o=this._mediaMatcher.matchMedia(e),s={observable:new ve.c(c=>{const l=u=>this._zone.run(()=>c.next(u));return o.addListener(l),()=>{o.removeListener(l)}}).pipe((0,ye.Z)(o),(0,B.T)(({matches:c})=>({query:e,matches:c})),(0,Me.Q)(this._destroySubject)),mql:o};return this._queries.set(e,s),s}}return(n=t).\u0275fac=function(e){return new(e||n)(i.KVO(xe),i.KVO(i.SKi))},n.\u0275prov=i.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),t})();function nt(n){return n.map(t=>t.split(",")).reduce((t,a)=>t.concat(a)).map(t=>t.trim())}var g=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(g||{});const lt="cdk-high-contrast-black-on-white",mt="cdk-high-contrast-white-on-black",$="cdk-high-contrast-active";let Ve=(()=>{var n;class t{constructor(e,o){this._platform=e,this._document=o,this._breakpointSubscription=(0,i.WQX)(Ae).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return g.NONE;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const o=this._document.defaultView||window,r=o&&o.getComputedStyle?o.getComputedStyle(e):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return g.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return g.BLACK_ON_WHITE}return g.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove($,lt,mt),this._hasCheckedHighContrastMode=!0;const o=this.getHighContrastMode();o===g.BLACK_ON_WHITE?e.add($,lt):o===g.WHITE_ON_BLACK&&e.add($,mt)}}}return(n=t).\u0275fac=function(e){return new(e||n)(i.KVO(G),i.KVO(h.qQ))},n.\u0275prov=i.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),t})(),ut=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({}),t})();const Ze=new i.nKC("mat-sanity-checks",{providedIn:"root",factory:function Ge(){return!0}});let x=(()=>{var n;class t{constructor(e,o,r){this._sanityChecks=o,this._document=r,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!function Ut(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}}return(n=t).\u0275fac=function(e){return new(e||n)(i.KVO(Ve),i.KVO(Ze,8),i.KVO(h.qQ))},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[ut,ut]}),t})();var b=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(b||{});class ta{constructor(t,a,e,o=!1){this._renderer=t,this.element=a,this.config=e,this._animationForciblyDisabledThroughCss=o,this.state=b.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}}const ft=F({passive:!0,capture:!0});class ea{constructor(){this._events=new Map,this._delegateEventHandler=t=>{const a=function $t(n){return n.composedPath?n.composedPath()[0]:n.target}(t);var e;a&&(null===(e=this._events.get(t.type))||void 0===e||e.forEach((o,r)=>{(r===a||r.contains(a))&&o.forEach(s=>s.handleEvent(t))}))}}addHandler(t,a,e,o){const r=this._events.get(a);if(r){const s=r.get(e);s?s.add(o):r.set(e,new Set([o]))}else this._events.set(a,new Map([[e,new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(a,this._delegateEventHandler,ft)})}removeHandler(t,a,e){const o=this._events.get(t);if(!o)return;const r=o.get(a);r&&(r.delete(e),0===r.size&&o.delete(a),0===o.size&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,ft)))}}const _t={enterDuration:225,exitDuration:150},vt=F({passive:!0,capture:!0}),gt=["mousedown","touchstart"],yt=["mouseup","mouseleave","touchend","touchcancel"];class w{constructor(t,a,e,o){this._target=t,this._ngZone=a,this._platform=o,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,o.isBrowser&&(this._containerElement=et(e))}fadeInRipple(t,a,e={}){const o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r={..._t,...e.animation};e.centered&&(t=o.left+o.width/2,a=o.top+o.height/2);const s=e.radius||function na(n,t,a){const e=Math.max(Math.abs(n-a.left),Math.abs(n-a.right)),o=Math.max(Math.abs(t-a.top),Math.abs(t-a.bottom));return Math.sqrt(e*e+o*o)}(t,a,o),c=t-o.left,l=a-o.top,u=r.enterDuration,p=document.createElement("div");p.classList.add("mat-ripple-element"),p.style.left=c-s+"px",p.style.top=l-s+"px",p.style.height=2*s+"px",p.style.width=2*s+"px",null!=e.color&&(p.style.backgroundColor=e.color),p.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(p);const U=window.getComputedStyle(p),z=U.transitionDuration,O="none"===U.transitionProperty||"0s"===z||"0s, 0s"===z||0===o.width&&0===o.height,y=new ta(this,p,e,O);p.style.transform="scale3d(1, 1, 1)",y.state=b.FADING_IN,e.persistent||(this._mostRecentTransientRipple=y);let R=null;return!O&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const Dt=()=>{R&&(R.fallbackTimer=null),clearTimeout(kt),this._finishRippleTransition(y)},V=()=>this._destroyRipple(y),kt=setTimeout(V,u+100);p.addEventListener("transitionend",Dt),p.addEventListener("transitioncancel",V),R={onTransitionEnd:Dt,onTransitionCancel:V,fallbackTimer:kt}}),this._activeRipples.set(y,R),(O||!u)&&this._finishRippleTransition(y),y}fadeOutRipple(t){if(t.state===b.FADING_OUT||t.state===b.HIDDEN)return;const a=t.element,e={..._t,...t.config.animation};a.style.transitionDuration=`${e.exitDuration}ms`,a.style.opacity="0",t.state=b.FADING_OUT,(t._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const a=et(t);!this._platform.isBrowser||!a||a===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=a,gt.forEach(e=>{w._eventManager.addHandler(this._ngZone,e,a,this)}))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yt.forEach(a=>{this._triggerElement.addEventListener(a,this,vt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===b.FADING_IN?this._startFadeOutTransition(t):t.state===b.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){const a=t===this._mostRecentTransientRipple,{persistent:e}=t.config;t.state=b.VISIBLE,!e&&(!a||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){var a;const e=null!==(a=this._activeRipples.get(t))&&void 0!==a?a:null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=b.HIDDEN,null!==e&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),null!==e.fallbackTimer&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){const a=function je(n){return 0===n.buttons||0===n.detail}(t),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!a&&!e&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!function $e(n){const t=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const a=t.changedTouches;if(a)for(let e=0;e<a.length;e++)this.fadeInRipple(a[e].clientX,a[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{!t.config.persistent&&(t.state===b.VISIBLE||t.config.terminateOnPointerUp&&t.state===b.FADING_IN)&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const t=this._triggerElement;t&&(gt.forEach(a=>w._eventManager.removeHandler(a,t,this)),this._pointerUpEventsRegistered&&(yt.forEach(a=>t.removeEventListener(a,this,vt)),this._pointerUpEventsRegistered=!1))}}w._eventManager=new ea;let oa=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[x,x]}),t})();const ia=["*"],ca=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],da=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],la=new i.nKC("MAT_CARD_CONFIG");let Mt=(()=>{var n;class t{constructor(e){this.appearance=(null==e?void 0:e.appearance)||"raised"}}return(n=t).\u0275fac=function(e){return new(e||n)(i.rXU(la,8))},n.\u0275cmp=i.VBU({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(e,o){2&e&&i.AVh("mat-mdc-card-outlined","outlined"===o.appearance)("mdc-card--outlined","outlined"===o.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],standalone:!0,features:[i.aNF],ngContentSelectors:ia,decls:1,vars:0,template:function(e,o){1&e&&(i.NAR(),i.SdG(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0}),t})(),xt=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.FsC({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"],standalone:!0}),t})(),It=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.FsC({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"],standalone:!0}),t})(),Et=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.FsC({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"],standalone:!0}),t})(),At=(()=>{var n;class t{constructor(){this.align="start"}}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.FsC({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(e,o){2&e&&i.AVh("mat-mdc-card-actions-align-end","end"===o.align)},inputs:{align:"align"},exportAs:["matCardActions"],standalone:!0}),t})(),Tt=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=i.VBU({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],standalone:!0,features:[i.aNF],ngContentSelectors:da,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){1&e&&(i.NAR(ca),i.SdG(0),i.j41(1,"div",0),i.SdG(2,1),i.k0s(),i.SdG(3,2))},encapsulation:2,changeDetection:0}),t})(),Ct=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.FsC({type:n,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"],standalone:!0}),t})(),pa=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[x,h.MD,x]}),t})();function ba(n,t){if(1&n){const a=i.RV6();i.j41(0,"ion-item",22),i.bIt("click",function(){i.eBV(a);const o=i.XpG();return i.Njj(o.logout())}),i.nrm(1,"ion-icon",23),i.j41(2,"ion-label"),i.EFF(3,"Cerrar sesi\xf3n"),i.k0s()()}}function ha(n,t){if(1&n){const a=i.RV6();i.j41(0,"ion-item",22),i.bIt("click",function(){i.eBV(a);const o=i.XpG();return i.Njj(o.goToLogin())}),i.nrm(1,"ion-icon",24),i.j41(2,"ion-label"),i.EFF(3,"Iniciar sesi\xf3n"),i.k0s()()}}const fa=[{path:"",component:(()=>{var n;class t{constructor(e,o,r,s){this.navCtrl=e,this.modalController=o,this.notificationService=r,this.storage=s,this.welcomeMessage="",this.isLoggedIn=!1,this.username=""}ngOnInit(){this.setWelcomeMessage(),this.notificationService.scheduleWaterReminder()}setWelcomeMessage(){var e=this;return(0,I.A)(function*(){const o=yield e.storage.get("session_user");o?(e.isLoggedIn=!0,e.username=o.username,e.welcomeMessage=`Bienvenido, ${e.username}`,yield e.presentWelcomeModal(e.username)):(e.isLoggedIn=!1,e.welcomeMessage="Bienvenido")})()}presentWelcomeModal(e){var o=this;return(0,I.A)(function*(){return yield(yield o.modalController.create({component:Ot,cssClass:"my-custom-class",componentProps:{username:e}})).present()})()}goToLogin(){this.navCtrl.navigateForward("/login1")}logout(){var e=this;return(0,I.A)(function*(){e.isLoggedIn=!1,yield e.storage.remove("session_user"),e.welcomeMessage="Bienvenido",e.navCtrl.navigateRoot("/login1")})()}goToRutinaEjercicios(){this.navCtrl.navigateForward("/rutina-ejercicios")}goToRecetas(){this.navCtrl.navigateForward("/recetas")}}return(n=t).\u0275fac=function(e){return new(e||n)(i.rXU(Rt.q9),i.rXU(m.W3),i.rXU(St),i.rXU(Pt.w))},n.\u0275cmp=i.VBU({type:n,selectors:[["app-home"]],decls:73,vars:4,consts:[[3,"translucent"],["slot","start"],["side","start","contentId","main-content","menuType","reveal"],["slot","end"],["name","close-outline"],["routerLink","/rutina-ejercicios"],["name","fitness-outline","slot","start"],["routerLink","/recetas"],["name","restaurant-outline","slot","start"],["routerLink","/crud-recetas"],["name","nutrition-outline","slot","start"],[3,"click",4,"ngIf"],["id","main-content"],[1,"home-content"],[1,"logo-container"],["src","assets/img/logo.png","alt","Logo",1,"logo-img"],[1,"app-title"],[1,"custom-card"],["mat-card-image","","src","assets/img/card_ejercicio.jpg","alt","Rutina de Ejercicios"],["expand","full",1,"naranjo-button",3,"click"],["mat-card-image","","src","assets/img/card_alimentos.jpeg","alt","Alimentos Saludables"],["mat-card-image","","src","assets/img/hidratacion.jpg","alt","Importancia de la Hidrataci\xf3n"],[3,"click"],["slot","start","name","log-out"],["slot","start","name","log-in"]],template:function(e,o){1&e&&(i.j41(0,"ion-header",0)(1,"ion-toolbar"),i.nrm(2,"ion-menu-button",1),i.j41(3,"ion-title"),i.EFF(4,"Inicio"),i.k0s()()(),i.j41(5,"ion-menu",2)(6,"ion-header")(7,"ion-toolbar")(8,"ion-title"),i.EFF(9,"Men\xfa"),i.k0s(),i.j41(10,"ion-buttons",3)(11,"ion-menu-toggle")(12,"ion-button"),i.nrm(13,"ion-icon",4),i.k0s()()()()(),i.j41(14,"ion-content")(15,"ion-list")(16,"ion-item")(17,"ion-label")(18,"h2"),i.EFF(19),i.k0s()()(),i.j41(20,"ion-item",5),i.nrm(21,"ion-icon",6),i.j41(22,"ion-label"),i.EFF(23,"Rutinas de Ejercicio"),i.k0s()(),i.j41(24,"ion-item",7),i.nrm(25,"ion-icon",8),i.j41(26,"ion-label"),i.EFF(27,"Recetas"),i.k0s()(),i.j41(28,"ion-item",9),i.nrm(29,"ion-icon",10),i.j41(30,"ion-label"),i.EFF(31,"Blog de Recetas"),i.k0s()(),i.DNE(32,ba,4,0,"ion-item",11)(33,ha,4,0,"ion-item",11),i.k0s()()(),i.j41(34,"ion-content",12)(35,"div",13)(36,"div",14),i.nrm(37,"img",15),i.j41(38,"h1",16),i.EFF(39,"Nankurunaisa"),i.k0s()(),i.j41(40,"mat-card",17),i.nrm(41,"img",18),i.j41(42,"mat-card-header")(43,"mat-card-title"),i.EFF(44,"\xa1Mu\xe9vete por tu salud!"),i.k0s(),i.j41(45,"mat-card-subtitle"),i.EFF(46,"El poder del ejercicio"),i.k0s()(),i.j41(47,"mat-card-content"),i.EFF(48," \xbfSab\xedas que solo 30 minutos de ejercicio al d\xeda pueden cambiar tu vida? Mejora tu energ\xeda, fortalece tu cuerpo, y reduce el estr\xe9s con peque\xf1os h\xe1bitos. \xa1Empieza hoy y siembra bienestar para el futuro! "),i.k0s(),i.j41(49,"mat-card-actions")(50,"ion-button",19),i.bIt("click",function(){return o.goToRutinaEjercicios()}),i.EFF(51,"Empieza tu rutina"),i.k0s()()(),i.j41(52,"mat-card",17),i.nrm(53,"img",20),i.j41(54,"mat-card-header")(55,"mat-card-title"),i.EFF(56,"\xa1Elige lo saludable!"),i.k0s(),i.j41(57,"mat-card-subtitle"),i.EFF(58,"La clave de una vida llena de energ\xeda"),i.k0s()(),i.j41(59,"mat-card-content"),i.EFF(60," Alimentarse bien es el primer paso hacia una vida m\xe1s plena. Incorporar frutas, verduras y alimentos naturales en tu d\xeda a d\xeda mejora tu salud f\xedsica, te llena de energ\xeda, y ayuda a prevenir enfermedades. \xa1Empieza hoy, tu cuerpo te lo agradecer\xe1 ma\xf1ana! "),i.k0s(),i.j41(61,"mat-card-actions")(62,"ion-button",19),i.bIt("click",function(){return o.goToRecetas()}),i.EFF(63,"Ver recetas saludables"),i.k0s()()(),i.j41(64,"mat-card",17),i.nrm(65,"img",21),i.j41(66,"mat-card-header")(67,"mat-card-title"),i.EFF(68,"\xa1Mantente hidratado todos los d\xedas!"),i.k0s(),i.j41(69,"mat-card-subtitle"),i.EFF(70,"El agua es esencial para tu bienestar"),i.k0s()(),i.j41(71,"mat-card-content"),i.EFF(72," Beber suficiente agua es clave para mantener una buena salud. La hidrataci\xf3n adecuada mejora tu energ\xeda, favorece la digesti\xf3n, ayuda a eliminar toxinas y mantiene tu piel radiante. \xa1Recuerda tomar agua a lo largo del d\xeda y siente la diferencia en tu bienestar! "),i.k0s()()()()),2&e&&(i.Y8G("translucent",!0),i.R7$(19),i.JRh(o.welcomeMessage),i.R7$(13),i.Y8G("ngIf",o.isLoggedIn),i.R7$(),i.Y8G("ngIf",!o.isLoggedIn))},dependencies:[h.bT,m.Jm,m.QW,m.W9,m.eU,m.iq,m.uz,m.he,m.nf,m.oS,m.MC,m.cA,m.BC,m.ai,m.N7,N.Wk,Mt,At,It,Tt,Ct,Et,xt],styles:['@charset "UTF-8";.logo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px;margin-top:20px;width:100%}.logo-img[_ngcontent-%COMP%]{width:250px;height:auto;margin-bottom:-40px}.app-title[_ngcontent-%COMP%]{font-size:30px;color:#de7e1e;margin:0;text-align:center}.custom-card[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:0 auto 20px;border:2px solid orange;border-radius:10px;box-shadow:0 4px 8px #0000001a}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#de7e1e;color:#000;border-radius:8px;height:50px;font-weight:700;transition:background-color .3s ease,transform .3s ease}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#c76917;transform:scale(1.05)}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;max-height:200px}@media (max-width: 768px){.custom-card[_ngcontent-%COMP%]{width:90%}}.naranjo-button[_ngcontent-%COMP%]{--background: #FFA500;--color: black}ion-button[_ngcontent-%COMP%]{border-radius:8px}']}),t})()}];let _a=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[N.iI.forChild(fa),N.iI]}),t})(),ga=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[x,oa,x]}),t})(),ya=(()=>{var n;class t{}return(n=t).\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.$C({type:n}),n.\u0275inj=i.G2t({imports:[h.MD,wt.YN,m.bv,_a,pa,ga]}),t})()}}]);