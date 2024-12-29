import{a as Nt,b as Oe,c as bo,d as kn,e as mo,f as vo,g as An,h as yo,i as ye,j as _n,k as On,l as Co,m as ce,o as ue,q as Y,r as So}from"./chunk-362VMQOR.js";import{A as dn,Aa as ee,Ab as Dn,B as Ar,Ba as ae,Bb as no,C as _r,Cb as ro,D as Or,Da as L,Db as _,E as F,Ea as me,Eb as oo,F as Pr,Fa as ve,Fb as Tn,G as $,Ga as $t,Gb as io,H as w,Ha as Qr,Hb as so,I as b,Ia as Sn,Ib as Je,J,Jb as ao,K as Nr,Ka as wn,Kb as lo,L as M,La as Rn,Lb as co,M as hn,Ma as Q,Mb as uo,N as y,Na as S,Nb as ho,O as d,Oa as Zr,Ob as _e,P as pn,Pb as po,Q as Lr,Qa as Yr,Qb as Pt,R as fn,Ra as $e,Rb as xn,S as Ur,Sb as fo,T as Qe,Tb as go,U as V,V as Ze,Va as De,Wa as Te,Xa as Z,Y as jr,Ya as Dt,Z as R,Za as Tt,_ as gn,_a as Kr,a as Mr,aa as Fr,ab as In,b as $r,ba as X,bb as z,c as sn,ca as q,cb as xt,d as an,da as bn,db as kt,e as fe,ea as G,eb as xe,f as N,fa as mn,fb as ke,g as ie,ga as zr,gb as Ae,h as k,ha as vn,i as f,ia as Br,ib as At,j as We,ja as be,jb as _t,k as Dr,ka as yn,l as Tr,la as Hr,lb as le,m as C,ma as Ye,mb as En,n as Et,na as Ke,o as A,oa as D,p as ln,q as xr,qa as Vr,qb as Ot,r as cn,s as ge,sa as qr,sb as Mn,t as Ie,tb as Jr,u as Ee,ua as Gr,ub as I,v as un,vb as Xr,w as Me,wb as $n,x as kr,xa as Wr,y as Mt,ya as Cn,yb as eo,z as se,za as W,zb as to}from"./chunk-N3VLPSI5.js";import{a as h,b as x}from"./chunk-2NFLSA4Y.js";var Nn=class extends ro{supportsDOMEvents=!0},Ln=class e extends Nn{static makeCurrent(){no(new e)}onAndCancel(r,t,n){return r.addEventListener(t,n),()=>{r.removeEventListener(t,n)}}dispatchEvent(r,t){r.dispatchEvent(t)}remove(r){r.remove()}createElement(r,t){return t=t||this.getDefaultDocument(),t.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,t){return t==="window"?window:t==="document"?r:t==="body"?r.body:null}getBaseHref(r){let t=Li();return t==null?null:Ui(t)}resetBaseElement(){Xe=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return ao(document.cookie,r)}},Xe=null;function Li(){return Xe=Xe||document.querySelector("base"),Xe?Xe.getAttribute("href"):null}function Ui(e){return new URL(e,document.baseURI).pathname}var ji=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Un=new M(""),$o=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,o){return this._findPluginFor(n).addEventListener(t,n,o)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new w(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(y(Un),y(q))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Ut=class{_doc;constructor(r){this._doc=r}manager},Lt="ng-app-id";function wo(e){for(let r of e)r.remove()}function Ro(e,r){let t=r.createElement("style");return t.textContent=e,t}function Fi(e,r,t,n){let o=e.head?.querySelectorAll(`style[${Lt}="${r}"],link[${Lt}="${r}"]`);if(o)for(let i of o)i.removeAttribute(Lt),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function jn(e,r){let t=r.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Do=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,o,i={}){this.doc=t,this.appId=n,this.nonce=o,this.isServer=xn(i),Fi(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let o of t)this.addUsage(o,this.inline,Ro);n?.forEach(o=>this.addUsage(o,this.external,jn))}removeStyles(t,n){for(let o of t)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,n,o){let i=n.get(t);i?i.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(t,this.doc)))})}removeUsage(t,n){let o=n.get(t);o&&(o.usage--,o.usage<=0&&(wo(o.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])wo(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(t,Ro(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(t,jn(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Lt,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(y(_),y(vn),y(yn,8),y(be))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Pn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},zn=/%COMP%/g,To="%COMP%",zi=`_nghost-${To}`,Bi=`_ngcontent-${To}`,Hi=!0,Vi=new M("",{providedIn:"root",factory:()=>Hi});function qi(e){return Bi.replace(zn,e)}function Gi(e){return zi.replace(zn,e)}function xo(e,r){return r.map(t=>t.replace(zn,e))}var Io=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,o,i,s,l,a,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=l,this.ngZone=a,this.nonce=c,this.platformIsServer=xn(l),this.defaultRenderer=new et(t,s,a,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Ye.ShadowDom&&(n=x(h({},n),{encapsulation:Ye.Emulated}));let o=this.getOrCreateRenderer(t,n);return o instanceof jt?o.applyToHost(t):o instanceof tt&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let s=this.doc,l=this.ngZone,a=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(n.encapsulation){case Ye.Emulated:i=new jt(a,c,n,this.appId,u,s,l,p);break;case Ye.ShadowDom:return new Fn(a,c,t,n,s,l,this.nonce,p);default:i=new tt(a,c,n,u,s,l,p);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(n){return new(n||e)(y($o),y(Do),y(vn),y(Vi),y(_),y(be),y(q),y(yn))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),et=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,t,n,o){this.eventManager=r,this.doc=t,this.ngZone=n,this.platformIsServer=o}destroy(){}destroyNode=null;createElement(r,t){return t?this.doc.createElementNS(Pn[t]||t,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,t){(Eo(r)?r.content:r).appendChild(t)}insertBefore(r,t,n){r&&(Eo(r)?r.content:r).insertBefore(t,n)}removeChild(r,t){t.remove()}selectRootElement(r,t){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new w(-5104,!1);return t||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,t,n,o){if(o){t=o+":"+t;let i=Pn[o];i?r.setAttributeNS(i,t,n):r.setAttribute(t,n)}else r.setAttribute(t,n)}removeAttribute(r,t,n){if(n){let o=Pn[n];o?r.removeAttributeNS(o,t):r.removeAttribute(`${n}:${t}`)}else r.removeAttribute(t)}addClass(r,t){r.classList.add(t)}removeClass(r,t){r.classList.remove(t)}setStyle(r,t,n,o){o&(Ke.DashCase|Ke.Important)?r.style.setProperty(t,n,o&Ke.Important?"important":""):r.style[t]=n}removeStyle(r,t,n){n&Ke.DashCase?r.style.removeProperty(t):r.style[t]=""}setProperty(r,t,n){r!=null&&(r[t]=n)}setValue(r,t){r.nodeValue=t}listen(r,t,n){if(typeof r=="string"&&(r=Dn().getGlobalEventTarget(this.doc,r),!r))throw new Error(`Unsupported event target ${r} for event ${t}`);return this.eventManager.addEventListener(r,t,this.decoratePreventDefault(n))}decoratePreventDefault(r){return t=>{if(t==="__ngUnwrap__")return r;(this.platformIsServer?this.ngZone.runGuarded(()=>r(t)):r(t))===!1&&t.preventDefault()}}};function Eo(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Fn=class extends et{sharedStylesHost;hostEl;shadowRoot;constructor(r,t,n,o,i,s,l,a){super(r,i,s,a),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=xo(o.id,o.styles);for(let p of c){let m=document.createElement("style");l&&m.setAttribute("nonce",l),m.textContent=p,this.shadowRoot.appendChild(m)}let u=o.getExternalStyles?.();if(u)for(let p of u){let m=jn(p,i);l&&m.setAttribute("nonce",l),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,t){return super.appendChild(this.nodeOrShadowRoot(r),t)}insertBefore(r,t,n){return super.insertBefore(this.nodeOrShadowRoot(r),t,n)}removeChild(r,t){return super.removeChild(null,t)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},tt=class extends et{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,t,n,o,i,s,l,a){super(r,i,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o,this.styles=a?xo(a,n.styles):n.styles,this.styleUrls=n.getExternalStyles?.(a)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},jt=class extends tt{contentAttr;hostAttr;constructor(r,t,n,o,i,s,l,a){let c=o+"-"+n.id;super(r,t,n,i,s,l,a,c),this.contentAttr=qi(c),this.hostAttr=Gi(c)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,t){let n=super.createElement(r,t);return super.setAttribute(n,this.contentAttr,""),n}},Wi=(()=>{class e extends Ut{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o){return t.addEventListener(n,o,!1),()=>this.removeEventListener(t,n,o)}removeEventListener(t,n,o){return t.removeEventListener(n,o)}static \u0275fac=function(n){return new(n||e)(y(_))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})(),Mo=["alt","control","meta","shift"],Qi={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Zi={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Yi=(()=>{class e extends Ut{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o){let i=e.parseEventName(n),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Dn().onAndCancel(t,i.domEventName,s))}static parseEventName(t){let n=t.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(n.pop()),s="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),s="code."),Mo.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=i,n.length!=0||i.length===0)return null;let a={};return a.domEventName=o,a.fullKey=s,a}static matchEventFullKeyCode(t,n){let o=Qi[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Mo.forEach(s=>{if(s!==o){let l=Zi[s];l(t)&&(i+=s+".")}}),i+=o,i===n)}static eventCallback(t,n,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(y(_))};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function sc(e,r){return Jr(h({rootComponent:e},Ki(r)))}function Ki(e){return{appProviders:[...ns,...e?.providers??[]],platformProviders:ts}}function Ji(){Ln.makeCurrent()}function Xi(){return new bn}function es(){return zr(document),document}var ts=[{provide:be,useValue:po},{provide:Br,useValue:Ji,multi:!0},{provide:_,useFactory:es,deps:[]}];var ns=[{provide:Ur,useValue:"root"},{provide:bn,useFactory:Xi,deps:[]},{provide:Un,useClass:Wi,multi:!0,deps:[_,q,be]},{provide:Un,useClass:Yi,multi:!0,deps:[_]},Io,Do,$o,{provide:qr,useExisting:Io},{provide:go,useClass:ji,deps:[]},[]];var ko=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(y(_))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var g="primary",mt=Symbol("RouteTitle"),Gn=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t[0]:t}return null}getAll(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Fe(e){return new Gn(e)}function os(e,r,t){let n=t.path.split("/");if(n.length>e.length||t.pathMatch==="full"&&(r.hasChildren()||n.length<e.length))return null;let o={};for(let i=0;i<n.length;i++){let s=n[i],l=e[i];if(s[0]===":")o[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:e.slice(0,n.length),posParams:o}}function is(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;++t)if(!K(e[t],r[t]))return!1;return!0}function K(e,r){let t=e?Wn(e):void 0,n=r?Wn(r):void 0;if(!t||!n||t.length!=n.length)return!1;let o;for(let i=0;i<t.length;i++)if(o=t[i],!Bo(e[o],r[o]))return!1;return!0}function Wn(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Bo(e,r){if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return!1;let t=[...e].sort(),n=[...r].sort();return t.every((o,i)=>n[i]===o)}else return e===r}function Ho(e){return e.length>0?e[e.length-1]:null}function pe(e){return Dr(e)?e:Qr(e)?k(Promise.resolve(e)):f(e)}var ss={exact:qo,subset:Go},Vo={exact:as,subset:ls,ignored:()=>!0};function Ao(e,r,t){return ss[t.paths](e.root,r.root,t.matrixParams)&&Vo[t.queryParams](e.queryParams,r.queryParams)&&!(t.fragment==="exact"&&e.fragment!==r.fragment)}function as(e,r){return K(e,r)}function qo(e,r,t){if(!we(e.segments,r.segments)||!Bt(e.segments,r.segments,t)||e.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!e.children[n]||!qo(e.children[n],r.children[n],t))return!1;return!0}function ls(e,r){return Object.keys(r).length<=Object.keys(e).length&&Object.keys(r).every(t=>Bo(e[t],r[t]))}function Go(e,r,t){return Wo(e,r,r.segments,t)}function Wo(e,r,t,n){if(e.segments.length>t.length){let o=e.segments.slice(0,t.length);return!(!we(o,t)||r.hasChildren()||!Bt(o,t,n))}else if(e.segments.length===t.length){if(!we(e.segments,t)||!Bt(e.segments,t,n))return!1;for(let o in r.children)if(!e.children[o]||!Go(e.children[o],r.children[o],n))return!1;return!0}else{let o=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!we(e.segments,o)||!Bt(e.segments,o,n)||!e.children[g]?!1:Wo(e.children[g],r,i,n)}}function Bt(e,r,t){return r.every((n,o)=>Vo[t](e[o].parameters,n.parameters))}var ne=class{root;queryParams;fragment;_queryParamMap;constructor(r=new v([],{}),t={},n=null){this.root=r,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Fe(this.queryParams),this._queryParamMap}toString(){return ds.serialize(this)}},v=class{segments;children;parent=null;constructor(r,t){this.segments=r,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ht(this)}},Se=class{path;parameters;_parameterMap;constructor(r,t){this.path=r,this.parameters=t}get parameterMap(){return this._parameterMap??=Fe(this.parameters),this._parameterMap}toString(){return Zo(this)}};function cs(e,r){return we(e,r)&&e.every((t,n)=>K(t.parameters,r[n].parameters))}function we(e,r){return e.length!==r.length?!1:e.every((t,n)=>t.path===r[n].path)}function us(e,r){let t=[];return Object.entries(e.children).forEach(([n,o])=>{n===g&&(t=t.concat(r(o,n)))}),Object.entries(e.children).forEach(([n,o])=>{n!==g&&(t=t.concat(r(o,n)))}),t}var vt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>new ze,providedIn:"root"})}return e})(),ze=class{parse(r){let t=new Zn(r);return new ne(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(r){let t=`/${nt(r.root,!0)}`,n=fs(r.queryParams),o=typeof r.fragment=="string"?`#${hs(r.fragment)}`:"";return`${t}${n}${o}`}},ds=new ze;function Ht(e){return e.segments.map(r=>Zo(r)).join("/")}function nt(e,r){if(!e.hasChildren())return Ht(e);if(r){let t=e.children[g]?nt(e.children[g],!1):"",n=[];return Object.entries(e.children).forEach(([o,i])=>{o!==g&&n.push(`${o}:${nt(i,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=us(e,(n,o)=>o===g?[nt(e.children[g],!1)]:[`${o}:${nt(n,!1)}`]);return Object.keys(e.children).length===1&&e.children[g]!=null?`${Ht(e)}/${t[0]}`:`${Ht(e)}/(${t.join("//")})`}}function Qo(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ft(e){return Qo(e).replace(/%3B/gi,";")}function hs(e){return encodeURI(e)}function Qn(e){return Qo(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Vt(e){return decodeURIComponent(e)}function _o(e){return Vt(e.replace(/\+/g,"%20"))}function Zo(e){return`${Qn(e.path)}${ps(e.parameters)}`}function ps(e){return Object.entries(e).map(([r,t])=>`;${Qn(r)}=${Qn(t)}`).join("")}function fs(e){let r=Object.entries(e).map(([t,n])=>Array.isArray(n)?n.map(o=>`${Ft(t)}=${Ft(o)}`).join("&"):`${Ft(t)}=${Ft(n)}`).filter(t=>t);return r.length?`?${r.join("&")}`:""}var gs=/^[^\/()?;#]+/;function Bn(e){let r=e.match(gs);return r?r[0]:""}var bs=/^[^\/()?;=#]+/;function ms(e){let r=e.match(bs);return r?r[0]:""}var vs=/^[^=?&#]+/;function ys(e){let r=e.match(vs);return r?r[0]:""}var Cs=/^[^&#]+/;function Ss(e){let r=e.match(Cs);return r?r[0]:""}var Zn=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new v([],{}):new v([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let r=[];for(this.peekStartsWith("(")||r.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),r.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(r.length>0||Object.keys(t).length>0)&&(n[g]=new v(r,t)),n}parseSegment(){let r=Bn(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(r),new Se(Vt(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let t=ms(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=Bn(this.remaining);o&&(n=o,this.capture(n))}r[Vt(t)]=Vt(n)}parseQueryParam(r){let t=ys(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let s=Ss(this.remaining);s&&(n=s,this.capture(n))}let o=_o(t),i=_o(n);if(r.hasOwnProperty(o)){let s=r[o];Array.isArray(s)||(s=[s],r[o]=s),s.push(i)}else r[o]=i}parseParens(r){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Bn(this.remaining),o=this.remaining[n.length];if(o!=="/"&&o!==")"&&o!==";")throw new w(4010,!1);let i;n.indexOf(":")>-1?(i=n.slice(0,n.indexOf(":")),this.capture(i),this.capture(":")):r&&(i=g);let s=this.parseChildren();t[i]=Object.keys(s).length===1?s[g]:new v([],s),this.consumeOptional("//")}return t}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new w(4011,!1)}};function Yo(e){return e.segments.length>0?new v([],{[g]:e}):e}function Ko(e){let r={};for(let[n,o]of Object.entries(e.children)){let i=Ko(o);if(n===g&&i.segments.length===0&&i.hasChildren())for(let[s,l]of Object.entries(i.children))r[s]=l;else(i.segments.length>0||i.hasChildren())&&(r[n]=i)}let t=new v(e.segments,r);return ws(t)}function ws(e){if(e.numberOfChildren===1&&e.children[g]){let r=e.children[g];return new v(e.segments.concat(r.segments),r.children)}return e}function lt(e){return e instanceof ne}function Rs(e,r,t=null,n=null){let o=Jo(e);return Xo(o,r,t,n)}function Jo(e){let r;function t(i){let s={};for(let a of i.children){let c=t(a);s[a.outlet]=c}let l=new v(i.url,s);return i===e&&(r=l),l}let n=t(e.root),o=Yo(n);return r??o}function Xo(e,r,t,n){let o=e;for(;o.parent;)o=o.parent;if(r.length===0)return Hn(o,o,o,t,n);let i=Is(r);if(i.toRoot())return Hn(o,o,new v([],{}),t,n);let s=Es(i,o,e),l=s.processChildren?it(s.segmentGroup,s.index,i.commands):ti(s.segmentGroup,s.index,i.commands);return Hn(o,s.segmentGroup,l,t,n)}function qt(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function ct(e){return typeof e=="object"&&e!=null&&e.outlets}function Hn(e,r,t,n,o){let i={};n&&Object.entries(n).forEach(([a,c])=>{i[a]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;e===r?s=t:s=ei(e,r,t);let l=Yo(Ko(s));return new ne(l,i,o)}function ei(e,r,t){let n={};return Object.entries(e.children).forEach(([o,i])=>{i===r?n[o]=t:n[o]=ei(i,r,t)}),new v(e.segments,n)}var Gt=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,t,n){if(this.isAbsolute=r,this.numberOfDoubleDots=t,this.commands=n,r&&n.length>0&&qt(n[0]))throw new w(4003,!1);let o=n.find(ct);if(o&&o!==Ho(n))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Is(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Gt(!0,0,e);let r=0,t=!1,n=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let l={};return Object.entries(i.outlets).forEach(([a,c])=>{l[a]=typeof c=="string"?c.split("/"):c}),[...o,{outlets:l}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((l,a)=>{a==0&&l==="."||(a==0&&l===""?t=!0:l===".."?r++:l!=""&&o.push(l))}),o):[...o,i]},[]);return new Gt(t,r,n)}var Le=class{segmentGroup;processChildren;index;constructor(r,t,n){this.segmentGroup=r,this.processChildren=t,this.index=n}};function Es(e,r,t){if(e.isAbsolute)return new Le(r,!0,0);if(!t)return new Le(r,!1,NaN);if(t.parent===null)return new Le(t,!0,0);let n=qt(e.commands[0])?0:1,o=t.segments.length-1+n;return Ms(t,o,e.numberOfDoubleDots)}function Ms(e,r,t){let n=e,o=r,i=t;for(;i>o;){if(i-=o,n=n.parent,!n)throw new w(4005,!1);o=n.segments.length}return new Le(n,!1,o-i)}function $s(e){return ct(e[0])?e[0].outlets:{[g]:e}}function ti(e,r,t){if(e??=new v([],{}),e.segments.length===0&&e.hasChildren())return it(e,r,t);let n=Ds(e,r,t),o=t.slice(n.commandIndex);if(n.match&&n.pathIndex<e.segments.length){let i=new v(e.segments.slice(0,n.pathIndex),{});return i.children[g]=new v(e.segments.slice(n.pathIndex),e.children),it(i,0,o)}else return n.match&&o.length===0?new v(e.segments,{}):n.match&&!e.hasChildren()?Yn(e,r,t):n.match?it(e,0,o):Yn(e,r,t)}function it(e,r,t){if(t.length===0)return new v(e.segments,{});{let n=$s(t),o={};if(Object.keys(n).some(i=>i!==g)&&e.children[g]&&e.numberOfChildren===1&&e.children[g].segments.length===0){let i=it(e.children[g],r,t);return new v(e.segments,i.children)}return Object.entries(n).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=ti(e.children[i],r,s))}),Object.entries(e.children).forEach(([i,s])=>{n[i]===void 0&&(o[i]=s)}),new v(e.segments,o)}}function Ds(e,r,t){let n=0,o=r,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(n>=t.length)return i;let s=e.segments[o],l=t[n];if(ct(l))break;let a=`${l}`,c=n<t.length-1?t[n+1]:null;if(o>0&&a===void 0)break;if(a&&c&&typeof c=="object"&&c.outlets===void 0){if(!Po(a,c,s))return i;n+=2}else{if(!Po(a,{},s))return i;n++}o++}return{match:!0,pathIndex:o,commandIndex:n}}function Yn(e,r,t){let n=e.segments.slice(0,r),o=0;for(;o<t.length;){let i=t[o];if(ct(i)){let a=Ts(i.outlets);return new v(n,a)}if(o===0&&qt(t[0])){let a=e.segments[r];n.push(new Se(a.path,Oo(t[0]))),o++;continue}let s=ct(i)?i.outlets[g]:`${i}`,l=o<t.length-1?t[o+1]:null;s&&l&&qt(l)?(n.push(new Se(s,Oo(l))),o+=2):(n.push(new Se(s,{})),o++)}return new v(n,{})}function Ts(e){let r={};return Object.entries(e).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[t]=Yn(new v([],{}),0,n))}),r}function Oo(e){let r={};return Object.entries(e).forEach(([t,n])=>r[t]=`${n}`),r}function Po(e,r,t){return e==t.path&&K(r,t.parameters)}var st="imperative",E=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(E||{}),U=class{id;url;constructor(r,t){this.id=r,this.url=t}},Be=class extends U{type=E.NavigationStart;navigationTrigger;restoredState;constructor(r,t,n="imperative",o=null){super(r,t),this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},re=class extends U{urlAfterRedirects;type=E.NavigationEnd;constructor(r,t,n){super(r,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},P=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(P||{}),Wt=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Wt||{}),te=class extends U{reason;code;type=E.NavigationCancel;constructor(r,t,n,o){super(r,t),this.reason=n,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},de=class extends U{reason;code;type=E.NavigationSkipped;constructor(r,t,n,o){super(r,t),this.reason=n,this.code=o}},ut=class extends U{error;target;type=E.NavigationError;constructor(r,t,n,o){super(r,t),this.error=n,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Qt=class extends U{urlAfterRedirects;state;type=E.RoutesRecognized;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kn=class extends U{urlAfterRedirects;state;type=E.GuardsCheckStart;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jn=class extends U{urlAfterRedirects;state;shouldActivate;type=E.GuardsCheckEnd;constructor(r,t,n,o,i){super(r,t),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Xn=class extends U{urlAfterRedirects;state;type=E.ResolveStart;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},er=class extends U{urlAfterRedirects;state;type=E.ResolveEnd;constructor(r,t,n,o){super(r,t),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tr=class{route;type=E.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},nr=class{route;type=E.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},rr=class{snapshot;type=E.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},or=class{snapshot;type=E.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ir=class{snapshot;type=E.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sr=class{snapshot;type=E.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zt=class{routerEvent;position;anchor;type=E.Scroll;constructor(r,t,n){this.routerEvent=r,this.position=t,this.anchor=n}toString(){let r=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${r}')`}},dt=class{},He=class{url;navigationBehaviorOptions;constructor(r,t){this.url=r,this.navigationBehaviorOptions=t}};function xs(e,r){return e.providers&&!e._injector&&(e._injector=Cn(e.providers,r,`Route: ${e.path}`)),e._injector??r}function B(e){return e.outlet||g}function ks(e,r){let t=e.filter(n=>B(n)===r);return t.push(...e.filter(n=>B(n)!==r)),t}function yt(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let r=e.parent;r;r=r.parent){let t=r.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var ar=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return yt(this.route?.snapshot)??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Ct(this.rootInjector)}},Ct=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let o=this.getOrCreateContext(t);o.outlet=n,this.contexts.set(t,o)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new ar(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||e)(y(Qe))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Yt=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let t=this.pathFromRoot(r);return t.length>1?t[t.length-2]:null}children(r){let t=lr(r,this._root);return t?t.children.map(n=>n.value):[]}firstChild(r){let t=lr(r,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(r){let t=cr(r,this._root);return t.length<2?[]:t[t.length-2].children.map(o=>o.value).filter(o=>o!==r)}pathFromRoot(r){return cr(r,this._root).map(t=>t.value)}};function lr(e,r){if(e===r.value)return r;for(let t of r.children){let n=lr(e,t);if(n)return n}return null}function cr(e,r){if(e===r.value)return[r];for(let t of r.children){let n=cr(e,t);if(n.length)return n.unshift(r),n}return[]}var O=class{value;children;constructor(r,t){this.value=r,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ne(e){let r={};return e&&e.children.forEach(t=>r[t.value.outlet]=t),r}var Kt=class extends Yt{snapshot;constructor(r,t){super(r),this.snapshot=t,vr(this,r)}toString(){return this.snapshot.toString()}};function ni(e){let r=As(e),t=new N([new Se("",{})]),n=new N({}),o=new N({}),i=new N({}),s=new N(""),l=new Re(t,n,i,s,o,g,e,r.root);return l.snapshot=r.root,new Kt(new O(l,[]),r)}function As(e){let r={},t={},n={},o="",i=new Ue([],r,n,o,t,g,e,null,{});return new Xt("",new O(i,[]))}var Re=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,t,n,o,i,s,l,a){this.urlSubject=r,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=l,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(C(c=>c[mt]))??f(void 0),this.url=r,this.params=t,this.queryParams=n,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(C(r=>Fe(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(C(r=>Fe(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Jt(e,r,t="emptyOnly"){let n,{routeConfig:o}=e;return r!==null&&(t==="always"||o?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:h(h({},r.params),e.params),data:h(h({},r.data),e.data),resolve:h(h(h(h({},e.data),r.data),o?.data),e._resolvedData)}:n={params:h({},e.params),data:h({},e.data),resolve:h(h({},e.data),e._resolvedData??{})},o&&oi(o)&&(n.resolve[mt]=o.title),n}var Ue=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[mt]}constructor(r,t,n,o,i,s,l,a,c){this.url=r,this.params=t,this.queryParams=n,this.fragment=o,this.data=i,this.outlet=s,this.component=l,this.routeConfig=a,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Fe(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Fe(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${t}')`}},Xt=class extends Yt{url;constructor(r,t){super(t),this.url=r,vr(this,t)}toString(){return ri(this._root)}};function vr(e,r){r.value._routerState=e,r.children.forEach(t=>vr(e,t))}function ri(e){let r=e.children.length>0?` { ${e.children.map(ri).join(", ")} } `:"";return`${e.value}${r}`}function Vn(e){if(e.snapshot){let r=e.snapshot,t=e._futureSnapshot;e.snapshot=t,K(r.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),r.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),K(r.params,t.params)||e.paramsSubject.next(t.params),is(r.url,t.url)||e.urlSubject.next(t.url),K(r.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function ur(e,r){let t=K(e.params,r.params)&&cs(e.url,r.url),n=!e.parent!=!r.parent;return t&&!n&&(!e.parent||ur(e.parent,r.parent))}function oi(e){return typeof e.title=="string"||e.title===null}var _s=new M(""),Os=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=g;activateEvents=new X;deactivateEvents=new X;attachEvents=new X;detachEvents=new X;routerOutletData=G(void 0);parentContexts=d(Ct);location=d(Gr);changeDetector=d(Mn);inputBinder=d(rn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:o}=t.name;if(n)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=t;let o=this.location,s=t.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,a=new dr(t,l,o.injector,this.routerOutletData);this.activated=o.createComponent(s,{index:o.length,injector:a,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ae({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ze]})}return e})(),dr=class e{route;childContexts;parent;outletData;__ngOutletInjector(r){return new e(this.route,this.childContexts,r,this.outletData)}constructor(r,t,n,o){this.route=r,this.childContexts=t,this.parent=n,this.outletData=o}get(r,t){return r===Re?this.route:r===Ct?this.childContexts:r===_s?this.outletData:this.parent.get(r,t)}},rn=new M(""),No=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:n}=t,o=Et([n.queryParams,n.params,n.data]).pipe(F(([i,s,l],a)=>(l=h(h(h({},i),s),l),a===0?f(l):Promise.resolve(l)))).subscribe(i=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(t);return}let s=to(n.component);if(!s){this.unsubscribeFromRouteData(t);return}for(let{templateName:l}of s.inputs)t.activatedComponentRef.setInput(l,i[l])});this.outletDataSubscriptions.set(t,o)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function Ps(e,r,t){let n=ht(e,r._root,t?t._root:void 0);return new Kt(n,r)}function ht(e,r,t){if(t&&e.shouldReuseRoute(r.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=r.value;let o=Ns(e,r,t);return new O(n,o)}else{if(e.shouldAttach(r.value)){let i=e.retrieve(r.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=r.value,s.children=r.children.map(l=>ht(e,l)),s}}let n=Ls(r.value),o=r.children.map(i=>ht(e,i));return new O(n,o)}}function Ns(e,r,t){return r.children.map(n=>{for(let o of t.children)if(e.shouldReuseRoute(n.value,o.value.snapshot))return ht(e,n,o);return ht(e,n)})}function Ls(e){return new Re(new N(e.url),new N(e.params),new N(e.queryParams),new N(e.fragment),new N(e.data),e.outlet,e.component,e)}var pt=class{redirectTo;navigationBehaviorOptions;constructor(r,t){this.redirectTo=r,this.navigationBehaviorOptions=t}},ii="ngNavigationCancelingError";function en(e,r){let{redirectTo:t,navigationBehaviorOptions:n}=lt(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,o=si(!1,P.Redirect);return o.url=t,o.navigationBehaviorOptions=n,o}function si(e,r){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[ii]=!0,t.cancellationCode=r,t}function Us(e){return ai(e)&&lt(e.url)}function ai(e){return!!e&&e[ii]}var js=(e,r,t,n)=>C(o=>(new hr(r,o.targetRouterState,o.currentRouterState,t,n).activate(e),o)),hr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,t,n,o,i){this.routeReuseStrategy=r,this.futureState=t,this.currState=n,this.forwardEvent=o,this.inputBindingEnabled=i}activate(r){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,r),Vn(this.futureState.root),this.activateChildRoutes(t,n,r)}deactivateChildRoutes(r,t,n){let o=Ne(t);r.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],n),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(r,t,n){let o=r.value,i=t?t.value:null;if(o===i)if(o.component){let s=n.getContext(o.outlet);s&&this.deactivateChildRoutes(r,t,s.children)}else this.deactivateChildRoutes(r,t,n);else i&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(r,t){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,t):this.deactivateRouteAndOutlet(r,t)}detachAndStoreRouteSubtree(r,t){let n=t.getContext(r.value.outlet),o=n&&r.value.component?n.children:t,i=Ne(r);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(n&&n.outlet){let s=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:s,route:r,contexts:l})}}deactivateRouteAndOutlet(r,t){let n=t.getContext(r.value.outlet),o=n&&r.value.component?n.children:t,i=Ne(r);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(r,t,n){let o=Ne(t);r.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],n),this.forwardEvent(new sr(i.value.snapshot))}),r.children.length&&this.forwardEvent(new or(r.value.snapshot))}activateRoutes(r,t,n){let o=r.value,i=t?t.value:null;if(Vn(o),o===i)if(o.component){let s=n.getOrCreateContext(o.outlet);this.activateChildRoutes(r,t,s.children)}else this.activateChildRoutes(r,t,n);else if(o.component){let s=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let l=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),Vn(l.route.value),this.activateChildRoutes(r,null,s.children)}else s.attachRef=null,s.route=o,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(r,null,s.children)}else this.activateChildRoutes(r,null,n)}},tn=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},je=class{component;route;constructor(r,t){this.component=r,this.route=t}};function Fs(e,r,t){let n=e._root,o=r?r._root:null;return rt(n,o,t,[n.value])}function zs(e){let r=e.routeConfig?e.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:e,guards:r}}function qe(e,r){let t=Symbol(),n=r.get(e,t);return n===t?typeof e=="function"&&!Nr(e)?e:r.get(e):n}function rt(e,r,t,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=Ne(r);return e.children.forEach(s=>{Bs(s,i[s.value.outlet],t,n.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,l])=>at(l,t.getContext(s),o)),o}function Bs(e,r,t,n,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=r?r.value:null,l=t?t.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let a=Hs(s,i,i.routeConfig.runGuardsAndResolvers);a?o.canActivateChecks.push(new tn(n)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?rt(e,r,l?l.children:null,n,o):rt(e,r,t,n,o),a&&l&&l.outlet&&l.outlet.isActivated&&o.canDeactivateChecks.push(new je(l.outlet.component,s))}else s&&at(r,l,o),o.canActivateChecks.push(new tn(n)),i.component?rt(e,null,l?l.children:null,n,o):rt(e,null,t,n,o);return o}function Hs(e,r,t){if(typeof t=="function")return t(e,r);switch(t){case"pathParamsChange":return!we(e.url,r.url);case"pathParamsOrQueryParamsChange":return!we(e.url,r.url)||!K(e.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ur(e,r)||!K(e.queryParams,r.queryParams);case"paramsChange":default:return!ur(e,r)}}function at(e,r,t){let n=Ne(e),o=e.value;Object.entries(n).forEach(([i,s])=>{o.component?r?at(s,r.children.getContext(i),t):at(s,null,t):at(s,r,t)}),o.component?r&&r.outlet&&r.outlet.isActivated?t.canDeactivateChecks.push(new je(r.outlet.component,o)):t.canDeactivateChecks.push(new je(null,o)):t.canDeactivateChecks.push(new je(null,o))}function St(e){return typeof e=="function"}function Vs(e){return typeof e=="boolean"}function qs(e){return e&&St(e.canLoad)}function Gs(e){return e&&St(e.canActivate)}function Ws(e){return e&&St(e.canActivateChild)}function Qs(e){return e&&St(e.canDeactivate)}function Zs(e){return e&&St(e.canMatch)}function li(e){return e instanceof Tr||e?.name==="EmptyError"}var zt=Symbol("INITIAL_VALUE");function Ve(){return F(e=>Et(e.map(r=>r.pipe(Me(1),Or(zt)))).pipe(C(r=>{for(let t of r)if(t!==!0){if(t===zt)return zt;if(t===!1||Ys(t))return t}return!0}),ge(r=>r!==zt),Me(1)))}function Ys(e){return lt(e)||e instanceof pt}function Ks(e,r){return A(t=>{let{targetSnapshot:n,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=t;return s.length===0&&i.length===0?f(x(h({},t),{guardsResult:!0})):Js(s,n,o,e).pipe(A(l=>l&&Vs(l)?Xs(n,i,e,r):f(l)),C(l=>x(h({},t),{guardsResult:l})))})}function Js(e,r,t,n){return k(e).pipe(A(o=>oa(o.component,o.route,t,r,n)),se(o=>o!==!0,!0))}function Xs(e,r,t,n){return k(r).pipe(Ee(o=>xr(ta(o.route.parent,n),ea(o.route,n),ra(e,o.path,t),na(e,o.route,t))),se(o=>o!==!0,!0))}function ea(e,r){return e!==null&&r&&r(new ir(e)),f(!0)}function ta(e,r){return e!==null&&r&&r(new rr(e)),f(!0)}function na(e,r,t){let n=r.routeConfig?r.routeConfig.canActivate:null;if(!n||n.length===0)return f(!0);let o=n.map(i=>cn(()=>{let s=yt(r)??t,l=qe(i,s),a=Gs(l)?l.canActivate(r,e):V(s,()=>l(r,e));return pe(a).pipe(se())}));return f(o).pipe(Ve())}function ra(e,r,t){let n=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(s=>zs(s)).filter(s=>s!==null).map(s=>cn(()=>{let l=s.guards.map(a=>{let c=yt(s.node)??t,u=qe(a,c),p=Ws(u)?u.canActivateChild(n,e):V(c,()=>u(n,e));return pe(p).pipe(se())});return f(l).pipe(Ve())}));return f(i).pipe(Ve())}function oa(e,r,t,n,o){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return f(!0);let s=i.map(l=>{let a=yt(r)??o,c=qe(l,a),u=Qs(c)?c.canDeactivate(e,r,t,n):V(a,()=>c(e,r,t,n));return pe(u).pipe(se())});return f(s).pipe(Ve())}function ia(e,r,t,n){let o=r.canLoad;if(o===void 0||o.length===0)return f(!0);let i=o.map(s=>{let l=qe(s,e),a=qs(l)?l.canLoad(r,t):V(e,()=>l(r,t));return pe(a)});return f(i).pipe(Ve(),ci(n))}function ci(e){return $r($(r=>{if(typeof r!="boolean")throw en(e,r)}),C(r=>r===!0))}function sa(e,r,t,n){let o=r.canMatch;if(!o||o.length===0)return f(!0);let i=o.map(s=>{let l=qe(s,e),a=Zs(l)?l.canMatch(r,t):V(e,()=>l(r,t));return pe(a)});return f(i).pipe(Ve(),ci(n))}var ft=class{segmentGroup;constructor(r){this.segmentGroup=r||null}},gt=class extends Error{urlTree;constructor(r){super(),this.urlTree=r}};function Pe(e){return We(new ft(e))}function aa(e){return We(new w(4e3,!1))}function la(e){return We(si(!1,P.GuardRejected))}var pr=class{urlSerializer;urlTree;constructor(r,t){this.urlSerializer=r,this.urlTree=t}lineralizeSegments(r,t){let n=[],o=t.root;for(;;){if(n=n.concat(o.segments),o.numberOfChildren===0)return f(n);if(o.numberOfChildren>1||!o.children[g])return aa(`${r.redirectTo}`);o=o.children[g]}}applyRedirectCommands(r,t,n,o,i){if(typeof t!="string"){let l=t,{queryParams:a,fragment:c,routeConfig:u,url:p,outlet:m,params:H,data:T,title:oe}=o,j=V(i,()=>l({params:H,data:T,queryParams:a,fragment:c,routeConfig:u,url:p,outlet:m,title:oe}));if(j instanceof ne)throw new gt(j);t=j}let s=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),r,n);if(t[0]==="/")throw new gt(s);return s}applyRedirectCreateUrlTree(r,t,n,o){let i=this.createSegmentGroup(r,t.root,n,o);return new ne(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(r,t){let n={};return Object.entries(r).forEach(([o,i])=>{if(typeof i=="string"&&i[0]===":"){let l=i.substring(1);n[o]=t[l]}else n[o]=i}),n}createSegmentGroup(r,t,n,o){let i=this.createSegments(r,t.segments,n,o),s={};return Object.entries(t.children).forEach(([l,a])=>{s[l]=this.createSegmentGroup(r,a,n,o)}),new v(i,s)}createSegments(r,t,n,o){return t.map(i=>i.path[0]===":"?this.findPosParam(r,i,o):this.findOrReturn(i,n))}findPosParam(r,t,n){let o=n[t.path.substring(1)];if(!o)throw new w(4001,!1);return o}findOrReturn(r,t){let n=0;for(let o of t){if(o.path===r.path)return t.splice(n),o;n++}return r}},fr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function ca(e,r,t,n,o){let i=ui(e,r,t);return i.matched?(n=xs(r,n),sa(n,r,t,o).pipe(C(s=>s===!0?i:h({},fr)))):f(i)}function ui(e,r,t){if(r.path==="**")return ua(t);if(r.path==="")return r.pathMatch==="full"&&(e.hasChildren()||t.length>0)?h({},fr):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let o=(r.matcher||os)(t,e,r);if(!o)return h({},fr);let i={};Object.entries(o.posParams??{}).forEach(([l,a])=>{i[l]=a.path});let s=o.consumed.length>0?h(h({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:t.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function ua(e){return{matched:!0,parameters:e.length>0?Ho(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Lo(e,r,t,n){return t.length>0&&pa(e,t,n)?{segmentGroup:new v(r,ha(n,new v(t,e.children))),slicedSegments:[]}:t.length===0&&fa(e,t,n)?{segmentGroup:new v(e.segments,da(e,t,n,e.children)),slicedSegments:t}:{segmentGroup:new v(e.segments,e.children),slicedSegments:t}}function da(e,r,t,n){let o={};for(let i of t)if(on(e,r,i)&&!n[B(i)]){let s=new v([],{});o[B(i)]=s}return h(h({},n),o)}function ha(e,r){let t={};t[g]=r;for(let n of e)if(n.path===""&&B(n)!==g){let o=new v([],{});t[B(n)]=o}return t}function pa(e,r,t){return t.some(n=>on(e,r,n)&&B(n)!==g)}function fa(e,r,t){return t.some(n=>on(e,r,n))}function on(e,r,t){return(e.hasChildren()||r.length>0)&&t.pathMatch==="full"?!1:t.path===""}function ga(e,r,t){return r.length===0&&!e.children[t]}var gr=class{};function ba(e,r,t,n,o,i,s="emptyOnly"){return new br(e,r,t,n,o,s,i).recognize()}var ma=31,br=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,t,n,o,i,s,l){this.injector=r,this.configLoader=t,this.rootComponentType=n,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=l,this.applyRedirects=new pr(this.urlSerializer,this.urlTree)}noMatchError(r){return new w(4002,`'${r.segmentGroup}'`)}recognize(){let r=Lo(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(r).pipe(C(({children:t,rootSnapshot:n})=>{let o=new O(n,t),i=new Xt("",o),s=Rs(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(r){let t=new Ue([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),g,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,r,g,t).pipe(C(n=>({children:n,rootSnapshot:t})),Ie(n=>{if(n instanceof gt)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof ft?this.noMatchError(n):n}))}processSegmentGroup(r,t,n,o,i){return n.segments.length===0&&n.hasChildren()?this.processChildren(r,t,n,i):this.processSegment(r,t,n,n.segments,o,!0,i).pipe(C(s=>s instanceof O?[s]:[]))}processChildren(r,t,n,o){let i=[];for(let s of Object.keys(n.children))s==="primary"?i.unshift(s):i.push(s);return k(i).pipe(Ee(s=>{let l=n.children[s],a=ks(t,s);return this.processSegmentGroup(r,a,l,s,o)}),_r((s,l)=>(s.push(...l),s)),un(null),Ar(),A(s=>{if(s===null)return Pe(n);let l=di(s);return va(l),f(l)}))}processSegment(r,t,n,o,i,s,l){return k(t).pipe(Ee(a=>this.processSegmentAgainstRoute(a._injector??r,t,a,n,o,i,s,l).pipe(Ie(c=>{if(c instanceof ft)return f(null);throw c}))),se(a=>!!a),Ie(a=>{if(li(a))return ga(n,o,i)?f(new gr):Pe(n);throw a}))}processSegmentAgainstRoute(r,t,n,o,i,s,l,a){return B(n)!==s&&(s===g||!on(o,i,n))?Pe(o):n.redirectTo===void 0?this.matchSegmentAgainstRoute(r,o,n,i,s,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(r,o,t,n,i,s,a):Pe(o)}expandSegmentAgainstRouteUsingRedirect(r,t,n,o,i,s,l){let{matched:a,parameters:c,consumedSegments:u,positionalParamSegments:p,remainingSegments:m}=ui(t,o,i);if(!a)return Pe(t);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ma&&(this.allowRedirects=!1));let H=new Ue(i,c,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Uo(o),B(o),o.component??o._loadedComponent??null,o,jo(o)),T=Jt(H,l,this.paramsInheritanceStrategy);H.params=Object.freeze(T.params),H.data=Object.freeze(T.data);let oe=this.applyRedirects.applyRedirectCommands(u,o.redirectTo,p,H,r);return this.applyRedirects.lineralizeSegments(o,oe).pipe(A(j=>this.processSegment(r,n,t,j.concat(m),s,!1,l)))}matchSegmentAgainstRoute(r,t,n,o,i,s){let l=ca(t,n,o,r,this.urlSerializer);return n.path==="**"&&(t.children={}),l.pipe(F(a=>a.matched?(r=n._injector??r,this.getChildConfig(r,n,o).pipe(F(({routes:c})=>{let u=n._loadedInjector??r,{parameters:p,consumedSegments:m,remainingSegments:H}=a,T=new Ue(m,p,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Uo(n),B(n),n.component??n._loadedComponent??null,n,jo(n)),oe=Jt(T,s,this.paramsInheritanceStrategy);T.params=Object.freeze(oe.params),T.data=Object.freeze(oe.data);let{segmentGroup:j,slicedSegments:Ge}=Lo(t,m,H,c);if(Ge.length===0&&j.hasChildren())return this.processChildren(u,c,j,T).pipe(C(It=>new O(T,It)));if(c.length===0&&Ge.length===0)return f(new O(T,[]));let Oi=B(n)===i;return this.processSegment(u,c,j,Ge,Oi?g:i,!0,T).pipe(C(It=>new O(T,It instanceof O?[It]:[])))}))):Pe(t)))}getChildConfig(r,t,n){return t.children?f({routes:t.children,injector:r}):t.loadChildren?t._loadedRoutes!==void 0?f({routes:t._loadedRoutes,injector:t._loadedInjector}):ia(r,t,n,this.urlSerializer).pipe(A(o=>o?this.configLoader.loadChildren(r,t).pipe($(i=>{t._loadedRoutes=i.routes,t._loadedInjector=i.injector})):la(t))):f({routes:[],injector:r})}};function va(e){e.sort((r,t)=>r.value.outlet===g?-1:t.value.outlet===g?1:r.value.outlet.localeCompare(t.value.outlet))}function ya(e){let r=e.value.routeConfig;return r&&r.path===""}function di(e){let r=[],t=new Set;for(let n of e){if(!ya(n)){r.push(n);continue}let o=r.find(i=>n.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...n.children),t.add(o)):r.push(n)}for(let n of t){let o=di(n.children);r.push(new O(n.value,o))}return r.filter(n=>!t.has(n))}function Uo(e){return e.data||{}}function jo(e){return e.resolve||{}}function Ca(e,r,t,n,o,i){return A(s=>ba(e,r,t,n,s.extractedUrl,o,i).pipe(C(({state:l,tree:a})=>x(h({},s),{targetSnapshot:l,urlAfterRedirects:a}))))}function Sa(e,r){return A(t=>{let{targetSnapshot:n,guards:{canActivateChecks:o}}=t;if(!o.length)return f(t);let i=new Set(o.map(a=>a.route)),s=new Set;for(let a of i)if(!s.has(a))for(let c of hi(a))s.add(c);let l=0;return k(s).pipe(Ee(a=>i.has(a)?wa(a,n,e,r):(a.data=Jt(a,a.parent,e).resolve,f(void 0))),$(()=>l++),dn(1),A(a=>l===s.size?f(t):ie))})}function hi(e){let r=e.children.map(t=>hi(t)).flat();return[e,...r]}function wa(e,r,t,n){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!oi(o)&&(i[mt]=o.title),Ra(i,e,r,n).pipe(C(s=>(e._resolvedData=s,e.data=Jt(e,e.parent,t).resolve,null)))}function Ra(e,r,t,n){let o=Wn(e);if(o.length===0)return f({});let i={};return k(o).pipe(A(s=>Ia(e[s],r,t,n).pipe(se(),$(l=>{if(l instanceof pt)throw en(new ze,l);i[s]=l}))),dn(1),kr(i),Ie(s=>li(s)?ie:We(s)))}function Ia(e,r,t,n){let o=yt(r)??n,i=qe(e,o),s=i.resolve?i.resolve(r,t):V(o,()=>i(r,t));return pe(s)}function qn(e){return F(r=>{let t=e(r);return t?k(t).pipe(C(()=>r)):f(r)})}var pi=(()=>{class e{buildTitle(t){let n,o=t.root;for(;o!==void 0;)n=this.getResolvedTitleForRoute(o)??n,o=o.children.find(i=>i.outlet===g);return n}getResolvedTitleForRoute(t){return t.data[mt]}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>d(Ea),providedIn:"root"})}return e})(),Ea=(()=>{class e extends pi{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||e)(y(ko))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),wt=new M("",{providedIn:"root",factory:()=>({})}),Ma=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=W({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(n,o){n&1&&Z(0,"router-outlet")},dependencies:[Os],encapsulation:2})}return e})();function yr(e){let r=e.children&&e.children.map(yr),t=r?x(h({},e),{children:r}):h({},e);return!t.component&&!t.loadComponent&&(r||t.loadChildren)&&t.outlet&&t.outlet!==g&&(t.component=Ma),t}var bt=new M(""),Cr=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Ot);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return f(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=pe(t.loadComponent()).pipe(C(fi),$(i=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=i}),Mt(()=>{this.componentLoaders.delete(t)})),o=new an(n,()=>new fe).pipe(sn());return this.componentLoaders.set(t,o),o}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return f({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=$a(n,this.compiler,t,this.onLoadEndListener).pipe(Mt(()=>{this.childrenLoaders.delete(n)})),s=new an(i,()=>new fe).pipe(sn());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function $a(e,r,t,n){return pe(e.loadChildren()).pipe(C(fi),A(o=>o instanceof Wr||Array.isArray(o)?f(o):k(r.compileModuleAsync(o))),C(o=>{n&&n(e);let i,s,l=!1;return Array.isArray(o)?(s=o,l=!0):(i=o.create(t).injector,s=i.get(bt,[],{optional:!0,self:!0}).flat()),{routes:s.map(yr),injector:i}}))}function Da(e){return e&&typeof e=="object"&&"default"in e}function fi(e){return Da(e)?e.default:e}var Sr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>d(Ta),providedIn:"root"})}return e})(),Ta=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),gi=new M(""),bi=new M("");function xa(e,r,t){let n=e.get(bi),o=e.get(_);return e.get(q).runOutsideAngular(()=>{if(!o.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let i,s=new Promise(c=>{i=c}),l=o.startViewTransition(()=>(i(),ka(e))),{onViewTransitionCreated:a}=n;return a&&V(e,()=>a({transition:l,from:r,to:t})),s})}function ka(e){return new Promise(r=>{Hr({read:()=>setTimeout(r)},{injector:e})})}var mi=new M(""),wr=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new fe;transitionAbortSubject=new fe;configLoader=d(Cr);environmentInjector=d(Qe);urlSerializer=d(vt);rootContexts=d(Ct);location=d(Je);inputBindingEnabled=d(rn,{optional:!0})!==null;titleStrategy=d(pi);options=d(wt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(Sr);createViewTransition=d(gi,{optional:!0});navigationErrorHandler=d(mi,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>f(void 0);rootComponentType=null;constructor(){let t=o=>this.events.next(new tr(o)),n=o=>this.events.next(new nr(o));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(x(h(h({},this.transitions.value),t),{id:n}))}setupNavigations(t,n,o){return this.transitions=new N({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:st,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(ge(i=>i.id!==0),C(i=>x(h({},i),{extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),F(i=>{let s=!1,l=!1;return f(i).pipe(F(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",P.SupersededByNewNavigation),ie;this.currentTransition=i,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?x(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload"){let p="";return this.events.next(new de(a.id,this.urlSerializer.serialize(a.rawUrl),p,Wt.IgnoredSameUrlNavigation)),a.resolve(!1),ie}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return f(a).pipe(F(p=>{let m=this.transitions?.getValue();return this.events.next(new Be(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),m!==this.transitions?.getValue()?ie:Promise.resolve(p)}),Ca(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),$(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation=x(h({},this.currentNavigation),{finalUrl:p.urlAfterRedirects});let m=new Qt(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:p,extractedUrl:m,source:H,restoredState:T,extras:oe}=a,j=new Be(p,this.urlSerializer.serialize(m),H,T);this.events.next(j);let Ge=ni(this.rootComponentType).snapshot;return this.currentTransition=i=x(h({},a),{targetSnapshot:Ge,urlAfterRedirects:m,extras:x(h({},oe),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,f(i)}else{let p="";return this.events.next(new de(a.id,this.urlSerializer.serialize(a.extractedUrl),p,Wt.IgnoredByUrlHandlingStrategy)),a.resolve(!1),ie}}),$(a=>{let c=new Kn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),C(a=>(this.currentTransition=i=x(h({},a),{guards:Fs(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i)),Ks(this.environmentInjector,a=>this.events.next(a)),$(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw en(this.urlSerializer,a.guardsResult);let c=new Jn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(c)}),ge(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",P.GuardRejected),!1)),qn(a=>{if(a.guards.canActivateChecks.length)return f(a).pipe($(c=>{let u=new Xn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),F(c=>{let u=!1;return f(c).pipe(Sa(this.paramsInheritanceStrategy,this.environmentInjector),$({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",P.NoDataFromResolver)}}))}),$(c=>{let u=new er(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),qn(a=>{let c=u=>{let p=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&p.push(this.configLoader.loadComponent(u.routeConfig).pipe($(m=>{u.component=m}),C(()=>{})));for(let m of u.children)p.push(...c(m));return p};return Et(c(a.targetSnapshot.root)).pipe(un(null),Me(1))}),qn(()=>this.afterPreactivation()),F(()=>{let{currentSnapshot:a,targetSnapshot:c}=i,u=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return u?k(u).pipe(C(()=>i)):f(i)}),C(a=>{let c=Ps(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=i=x(h({},a),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,i}),$(()=>{this.events.next(new dt)}),js(this.rootContexts,t.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),Me(1),$({next:a=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new re(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{s=!0}}),Pr(this.transitionAbortSubject.pipe($(a=>{throw a}))),Mt(()=>{!s&&!l&&this.cancelNavigationTransition(i,"",P.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ie(a=>{if(l=!0,ai(a))this.events.next(new te(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),Us(a)?this.events.next(new He(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let c=new ut(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let u=V(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof pt){let{message:p,cancellationCode:m}=en(this.urlSerializer,u);this.events.next(new te(i.id,this.urlSerializer.serialize(i.extractedUrl),p,m)),this.events.next(new He(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(u){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(u)}}return ie}))}))}cancelNavigationTransition(t,n,o){let i=new te(t.id,this.urlSerializer.serialize(t.extractedUrl),n,o);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Aa(e){return e!==st}var _a=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>d(Oa),providedIn:"root"})}return e})(),mr=class{shouldDetach(r){return!1}store(r,t){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,t){return r.routeConfig===t.routeConfig}},Oa=(()=>{class e extends mr{static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),vi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:()=>d(Pa),providedIn:"root"})}return e})(),Pa=(()=>{class e extends vi{location=d(Je);urlSerializer=d(vt);options=d(wt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=d(Sr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ne;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=ni(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&t(n.url,n.state)})}handleRouterEvent(t,n){if(t instanceof Be)this.stateMemento=this.createStateMemento();else if(t instanceof de)this.rawUrlTree=n.initialUrl;else if(t instanceof Qt){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??o,n)}}else t instanceof dt?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):t instanceof te&&(t.code===P.GuardRejected||t.code===P.NoDataFromResolver)?this.restoreHistory(n):t instanceof ut?this.restoreHistory(n,!0):t instanceof re&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,n){let o=t instanceof ne?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(o)||n.extras.replaceUrl){let i=this.browserPageId,s=h(h({},n.extras.state),this.generateNgRouterState(n.id,i));this.location.replaceState(o,"",s)}else{let i=h(h({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(o,"",i)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.currentUrlTree===t.finalUrl&&i===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ot=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(ot||{});function yi(e,r){e.events.pipe(ge(t=>t instanceof re||t instanceof te||t instanceof ut||t instanceof de),C(t=>t instanceof re||t instanceof de?ot.COMPLETE:(t instanceof te?t.code===P.Redirect||t.code===P.SupersededByNewNavigation:!1)?ot.REDIRECTING:ot.FAILED),ge(t=>t!==ot.REDIRECTING),Me(1)).subscribe(()=>{r()})}var Na={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},La={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},he=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d($t);stateManager=d(vi);options=d(wt,{optional:!0})||{};pendingTasks=d(Fr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(wr);urlSerializer=d(vt);location=d(Je);urlHandlingStrategy=d(Sr);_events=new fe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(_a);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(bt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(rn,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Mr;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let o=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof te&&n.code!==P.Redirect&&n.code!==P.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof re)this.navigated=!0;else if(n instanceof He){let s=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,o.currentRawUrl),a=h({browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Aa(o.source)},s);this.scheduleNavigation(l,st,null,a,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}ja(n)&&this._events.next(n)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),st,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",n)},0)})}navigateToSyncWithBrowser(t,n,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let a=h({},o);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(i.state=a)}let l=this.parseUrl(t);this.scheduleNavigation(l,n,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(yr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:l,preserveFragment:a}=n,c=a?this.currentUrlTree.fragment:s,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let p;try{let m=o?o.snapshot:this.routerState.snapshot.root;p=Jo(m)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return Xo(p,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let o=lt(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,st,null,n)}navigate(t,n={skipLocationChange:!1}){return Ua(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let o;if(n===!0?o=h({},Na):n===!1?o=h({},La):o=n,lt(t))return Ao(this.currentUrlTree,t,o);let i=this.parseUrl(t);return Ao(this.currentUrlTree,i,o)}removeEmptyProps(t){return Object.entries(t).reduce((n,[o,i])=>(i!=null&&(n[o]=i),n),{})}scheduleNavigation(t,n,o,i,s){if(this.disposed)return Promise.resolve(!1);let l,a,c;s?(l=s.resolve,a=s.reject,c=s.promise):c=new Promise((p,m)=>{l=p,a=m});let u=this.pendingTasks.add();return yi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:l,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(p=>Promise.reject(p))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ua(e){for(let r=0;r<e.length;r++)if(e[r]==null)throw new w(4008,!1)}function ja(e){return!(e instanceof dt)&&!(e instanceof He)}var nn=class{};var Fa=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,n,o,i,s){this.router=t,this.injector=o,this.preloadingStrategy=i,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(ge(t=>t instanceof re),Ee(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,n){let o=[];for(let i of n){i.providers&&!i._injector&&(i._injector=Cn(i.providers,t,`Route: ${i.path}`));let s=i._injector??t,l=i._loadedInjector??s;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&o.push(this.preloadConfig(s,i)),(i.children||i._loadedRoutes)&&o.push(this.processRoutes(l,i.children??i._loadedRoutes))}return k(o).pipe(ln())}preloadConfig(t,n){return this.preloadingStrategy.preload(n,()=>{let o;n.loadChildren&&n.canLoad===void 0?o=this.loader.loadChildren(t,n):o=f(null);let i=o.pipe(A(s=>s===null?f(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??t,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(n);return k([i,s]).pipe(ln())}else return i})}static \u0275fac=function(n){return new(n||e)(y(he),y(Ot),y(Qe),y(nn),y(Cr))};static \u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ci=new M(""),za=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,n,o,i,s={}){this.urlSerializer=t,this.transitions=n,this.viewportScroller=o,this.zone=i,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Be?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof re?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof de&&t.code===Wt.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Zt&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Zt(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Vr()};static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();function xc(e,...r){return fn([{provide:bt,multi:!0,useValue:e},[],{provide:Re,useFactory:Si,deps:[he]},{provide:wn,multi:!0,useFactory:wi},r.map(t=>t.\u0275providers)])}function Si(e){return e.routerState.root}function Rt(e,r){return{\u0275kind:e,\u0275providers:r}}function wi(){let e=d(gn);return r=>{let t=e.get(Rn);if(r!==t.components[0])return;let n=e.get(he),o=e.get(Ri);e.get(Rr)===1&&n.initialNavigation(),e.get(Ii,null,hn.Optional)?.setUpPreloading(),e.get(Ci,null,hn.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Ri=new M("",{factory:()=>new fe}),Rr=new M("",{providedIn:"root",factory:()=>1});function Ba(){return Rt(2,[{provide:Rr,useValue:0},{provide:Sn,multi:!0,deps:[gn],useFactory:r=>{let t=r.get(oo,Promise.resolve());return()=>t.then(()=>new Promise(n=>{let o=r.get(he),i=r.get(Ri);yi(o,()=>{n(!0)}),r.get(wr).afterPreactivation=()=>(n(!0),i.closed?f(void 0):i),o.initialNavigation()}))}}])}function Ha(){return Rt(3,[{provide:Sn,multi:!0,useFactory:()=>{let r=d(he);return()=>{r.setUpLocationChangeListener()}}},{provide:Rr,useValue:2}])}var Ii=new M("");function Va(e){return Rt(0,[{provide:Ii,useExisting:Fa},{provide:nn,useExisting:e}])}function qa(){return Rt(8,[No,{provide:rn,useExisting:No}])}function Ga(e){let r=[{provide:gi,useValue:xa},{provide:bi,useValue:h({skipNextTransition:!!e?.skipInitialTransition},e)}];return Rt(9,r)}var Fo=new M("ROUTER_FORROOT_GUARD"),Wa=[Je,{provide:vt,useClass:ze},he,Ct,{provide:Re,useFactory:Si,deps:[he]},Cr,[]],kc=(()=>{class e{constructor(t){}static forRoot(t,n){return{ngModule:e,providers:[Wa,[],{provide:bt,multi:!0,useValue:t},{provide:Fo,useFactory:Ka,deps:[[he,new pn,new Lr]]},n?.errorHandler?{provide:mi,useValue:n.errorHandler}:[],{provide:wt,useValue:n||{}},n?.useHash?Za():Ya(),Qa(),n?.preloadingStrategy?Va(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?Ja(n):[],n?.bindToComponentInputs?qa().\u0275providers:[],n?.enableViewTransitions?Ga().\u0275providers:[],Xa()]}}static forChild(t){return{ngModule:e,providers:[{provide:bt,multi:!0,useValue:t}]}}static \u0275fac=function(n){return new(n||e)(y(Fo,8))};static \u0275mod=ee({type:e});static \u0275inj=J({})}return e})();function Qa(){return{provide:Ci,useFactory:()=>{let e=d(fo),r=d(q),t=d(wt),n=d(wr),o=d(vt);return t.scrollOffset&&e.setOffset(t.scrollOffset),new za(o,n,e,r,t)}}}function Za(){return{provide:Tn,useClass:so}}function Ya(){return{provide:Tn,useClass:io}}function Ka(e){return"guarded"}function Ja(e){return[e.initialNavigation==="disabled"?Ha().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Ba().\u0275providers:[]]}var zo=new M("");function Xa(){return[{provide:zo,useFactory:wi},{provide:wn,multi:!0,useExisting:zo}]}var Ei=(()=>{class e extends Y{autofocus=!1;_autofocus=!1;focused=!1;platformId=d(be);document=d(_);host=d(mn);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Pt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=So.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275dir=ae({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",I],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[me,L]})}return e})();var el=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,tl={root:({props:e,instance:r})=>["p-badge p-component",{"p-badge-circle":_n(e.value)&&String(e.value).length===1,"p-badge-dot":ye(e.value)&&!r.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Mi=(()=>{class e extends ue{name="badge";theme=el;classes=tl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var Er=(()=>{class e extends Y{styleClass=G();style=G();badgeSize=G();size=G();severity=G();value=G();badgeDisabled=G(!1,{transform:I});_componentStyle=d(Mi);containerClass=$n(()=>{let t="p-badge p-component";return _n(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),ye(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=W({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(Yr(o.style()),$e(o.containerClass()),Zr("display",o.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[le([Mi]),L],decls:1,vars:1,template:function(n,o){n&1&&At(0),n&2&&_t(o.value())},dependencies:[_e,ce],encapsulation:2,changeDetection:0})}return e})(),$i=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ee({type:e});static \u0275inj=J({imports:[Er,ce,ce]})}return e})();var rl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ol=(()=>{class e extends ue{name="baseicon";inlineStyles=rl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var il=["*"],Di=(()=>{class e extends Y{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=ye(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=W({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",I],styleClass:"styleClass"},features:[le([ol]),me,L],ngContentSelectors:il,decls:1,vars:0,template:function(n,o){n&1&&(xt(),kt(0))},encapsulation:2,changeDetection:0})}return e})();var Ti=(()=>{class e extends Di{pathId;ngOnInit(){this.pathId="url(#"+On()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=W({type:e,selectors:[["SpinnerIcon"]],features:[L],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(jr(),De(0,"svg",0)(1,"g"),Z(2,"path",1),Te(),De(3,"defs")(4,"clipPath",2),Z(5,"rect",3),Te()()()),n&2&&($e(o.getClassNames()),Q("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),D(),Q("clip-path",o.pathId),D(3),S("id",o.pathId))},encapsulation:2})}return e})();var sl=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,al={root:"p-ink"},xi=(()=>{class e extends ue{name="ripple";theme=sl;classes=al;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ki=(()=>{class e extends Y{zone=d(q);_componentStyle=d(xi);animationListener;mouseDownListener;timeout;constructor(){super(),eo(()=>{Pt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Oe(n,"p-ink-active"),!kn(n)&&!An(n)){let l=Math.max(bo(this.el.nativeElement),vo(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let o=mo(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-An(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-kn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",i+"px"),Nt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Oe(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Oe(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Oe(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,yo(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ae({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[le([xi]),L]})}return e})();var ll=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,cl={root:({instance:e,props:r})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link,[`p-button-${r.severity}`]:r.severity,"p-button-raised":r.raised,"p-button-rounded":r.rounded,"p-button-text":r.text,"p-button-outlined":r.outlined,"p-button-sm":r.size==="small","p-button-lg":r.size==="large","p-button-plain":r.plain,"p-button-fluid":r.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Ai=(()=>{class e extends ue{name="button";theme=ll;classes=cl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275prov=b({token:e,factory:e.\u0275fac})}return e})();var ul=["content"],dl=["loading"],hl=["icon"],pl=["*"],_i=e=>({class:e});function fl(e,r){e&1&&Kr(0)}function gl(e,r){if(e&1&&Z(0,"span",8),e&2){let t=z(3);S("ngClass",t.iconClass()),Q("aria-hidden",!0)("data-pc-section","loadingicon")}}function bl(e,r){if(e&1&&Z(0,"SpinnerIcon",9),e&2){let t=z(3);S("styleClass",t.spinnerIconClass())("spin",!0),Q("aria-hidden",!0)("data-pc-section","loadingicon")}}function ml(e,r){if(e&1&&(Dt(0),ve(1,gl,1,3,"span",6)(2,bl,1,4,"SpinnerIcon",7),Tt()),e&2){let t=z(2);D(),S("ngIf",t.loadingIcon),D(),S("ngIf",!t.loadingIcon)}}function vl(e,r){}function yl(e,r){if(e&1&&ve(0,vl,0,0,"ng-template",10),e&2){let t=z(2);S("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Cl(e,r){if(e&1&&(Dt(0),ve(1,ml,3,2,"ng-container",2)(2,yl,1,1,null,5),Tt()),e&2){let t=z();D(),S("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),D(),S("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",En(3,_i,t.iconClass()))}}function Sl(e,r){if(e&1&&Z(0,"span",8),e&2){let t=z(2);$e(t.icon),S("ngClass",t.iconClass()),Q("data-pc-section","icon")}}function wl(e,r){}function Rl(e,r){if(e&1&&ve(0,wl,0,0,"ng-template",10),e&2){let t=z(2);S("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Il(e,r){if(e&1&&(Dt(0),ve(1,Sl,1,4,"span",11)(2,Rl,1,1,null,5),Tt()),e&2){let t=z();D(),S("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),D(),S("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",En(3,_i,t.iconClass()))}}function El(e,r){if(e&1&&(De(0,"span",12),At(1),Te()),e&2){let t=z();Q("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),D(),_t(t.label)}}function Ml(e,r){if(e&1&&Z(0,"p-badge",13),e&2){let t=z();S("value",t.badge)("severity",t.badgeSeverity)}}var $l=(()=>{class e extends Y{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new X;onFocus=new X;onBlur=new X;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return ye(this.fluid)?!!n:this.fluid}_componentStyle=d(Ai);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let i in o)this[i]=o[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=R(e)))(o||e)}})();static \u0275cmp=W({type:e,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&(xe(i,ul,5),xe(i,dl,5),xe(i,hl,5),xe(i,Co,4)),n&2){let s;ke(s=Ae())&&(o.contentTemplate=s.first),ke(s=Ae())&&(o.loadingIconTemplate=s.first),ke(s=Ae())&&(o.iconTemplate=s.first),ke(s=Ae())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",I],loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],severity:"severity",outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",Xr],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",I],fluid:[2,"fluid","fluid",I],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[le([Ai]),me,L,Ze],ngContentSelectors:pl,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(xt(),De(0,"button",0),In("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),kt(1),ve(2,fl,1,0,"ng-container",1)(3,Cl,3,5,"ng-container",2)(4,Il,3,5,"ng-container",2)(5,El,2,3,"span",3)(6,Ml,1,2,"p-badge",4),Te()),n&2&&(S("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),Q("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),D(2),S("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),D(),S("ngIf",o.loading),D(),S("ngIf",!o.loading),D(),S("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),D(),S("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[_e,lo,co,ho,uo,ki,Ei,Ti,$i,Er,ce],encapsulation:2,changeDetection:0})}return e})(),Yu=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ee({type:e});static \u0275inj=J({imports:[_e,$l,ce,ce]})}return e})();export{sc as a,Os as b,xc as c,kc as d,$l as e,Yu as f};
