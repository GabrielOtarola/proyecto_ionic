"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1102],{1102:(y,l,a)=>{a.r(l),a.d(l,{ion_tab:()=>b,ion_tabs:()=>d});var s=a(467),n=a(4261),h=a(8621);const b=(()=>{let t=class{constructor(e){(0,n.r)(this,e),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}componentWillLoad(){var e=this;return(0,s.A)(function*(){e.active&&(yield e.setActive())})()}setActive(){var e=this;return(0,s.A)(function*(){yield e.prepareLazyLoaded(),e.active=!0})()}changeActive(e){e&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,h.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab:e,active:i,component:o}=this;return(0,n.h)(n.f,{key:"46d5498418f5379861c3d7465e8021dec45f1200",role:"tabpanel","aria-hidden":i?null:"true","aria-labelledby":`tab-button-${e}`,class:{"ion-page":void 0===o,"tab-hidden":!i}},(0,n.h)("slot",{key:"b45045dccb87dfe75e3f5a5a474bb48b6c98e922"}))}get el(){return(0,n.i)(this)}static get watchers(){return{active:["changeActive"]}}};return t.style=":host(.tab-hidden){display:none !important}",t})(),d=class{constructor(t){(0,n.r)(this,t),this.ionNavWillLoad=(0,n.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,n.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,n.d)(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=e=>{const{href:i,tab:o}=e.detail;if(this.useRouter&&void 0!==i){const c=document.querySelector("ion-router");c&&c.push(i)}else this.select(o)},this.selectedTab=void 0,this.useRouter=!1}componentWillLoad(){var t=this;return(0,s.A)(function*(){if(t.useRouter||(t.useRouter=!(!t.el.querySelector("ion-router-outlet")&&!document.querySelector("ion-router")||t.el.closest("[no-router]"))),!t.useRouter){const e=t.tabs;e.length>0&&(yield t.select(e[0]))}t.ionNavWillLoad.emit()})()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}select(t){var e=this;return(0,s.A)(function*(){const i=r(e.tabs,t);return!!e.shouldSwitch(i)&&(yield e.setActive(i),yield e.notifyRouter(),e.tabSwitch(),!0)})()}getTab(t){var e=this;return(0,s.A)(function*(){return r(e.tabs,t)})()}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(t){var e=this;return(0,s.A)(function*(){const i=r(e.tabs,t);return e.shouldSwitch(i)?(yield e.setActive(i),{changed:!0,element:e.selectedTab,markVisible:()=>e.tabSwitch()}):{changed:!1,element:e.selectedTab}})()}getRouteId(){var t=this;return(0,s.A)(function*(){var e;const i=null===(e=t.selectedTab)||void 0===e?void 0:e.tab;return void 0!==i?{id:i,element:t.selectedTab}:void 0})()}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return(0,n.h)(n.f,{key:"eb094c9bd15b7777c53bd0bd6d225784fa472849",onIonTabButtonClick:this.onTabClicked},(0,n.h)("slot",{key:"a516ca6915bf26e77eeeb0ff684c4fcc7d4420a7",name:"top"}),(0,n.h)("div",{key:"dd2a32a072d77afe216abc4958c1d686405fb780",class:"tabs-inner"},(0,n.h)("slot",{key:"222c20ba862068f5c78e7bbef4fa213499fb2fa5"})),(0,n.h)("slot",{key:"3e76dcb1b21873aa137d095c56131514054ead3a",name:"bottom"}))}get el(){return(0,n.i)(this)}},r=(t,e)=>{const i="string"==typeof e?t.find(o=>o.tab===e):e;return i||console.error(`tab with id: "${i}" does not exist`),i};d.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);