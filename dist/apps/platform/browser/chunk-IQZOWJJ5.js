import{$a as mo,$b as Ro,A as jr,Aa as oo,Ab as Wt,B as xn,Ba as so,C as Mt,Ca as ao,Cb as Vt,D as yi,Da as Bt,Db as qt,E as Hr,F as Br,Fb as Nn,G as zr,Ga as lo,Gb as kn,H as ot,Ha as Le,I as Wr,Ia as U,Ib as wt,J as F,Ja as W,K as O,Ka as co,Kb as Ai,La as uo,M as b,Ma as po,N as st,Na as $e,O as Vr,Oa as ho,P as N,Pa as fo,Q as Si,Qa as _t,Qb as Pn,R as E,Ra as go,S as g,Sa as Ti,Sb as se,T as Ci,Ta as lt,Tb as Co,U as qr,Ua as ct,Ub as x,V as xe,Va as H,Vb as wo,W as Gr,Wb as ae,X as De,Xa as J,Xb as Pe,Y as bt,Ya as Lt,Yb as le,Z as It,Za as zt,Zb as Eo,_a as Dn,_b as xi,a as Nr,aa as Kr,ab as Ii,ac as To,b as kr,ba as _,bb as bo,bc as L,c as gi,ca as Yr,cb as _i,cc as Io,d as mi,da as te,db as Oi,dc as Fe,e as Z,ea as Zr,eb as ut,ec as _o,f as Q,fa as Qr,fb as A,fc as Oo,g as Dt,ga as vt,gb as vo,gc as Ue,h as j,ha as yt,hc as Ao,i as v,ia as wi,ib as yo,ic as xo,j as Oe,ja as St,jb as ie,k as Pr,ka as Ht,kc as Do,l as Fr,la as Jr,lc as Mo,m as T,ma as Ei,mc as Lo,n as An,na as Xr,nc as $t,o as z,oa as at,ob as re,oc as $o,p as Ae,pb as oe,pc as Fn,q as Ur,qa as Ri,qb as Ct,qc as je,r as bi,rb as Mn,rc as No,sa as to,sb as Ln,sc as ko,ta as Me,tb as So,u as jt,ua as ee,v as Qt,va as ne,vb as $n,w as Jt,wa as eo,wb as dt,xa as no,xb as Ne,y as vi,ya as io,yb as ke,z as Xt,za as ro}from"./chunk-YDJ66QDM.js";import{a as h,b as M}from"./chunk-7CGTOI24.js";var Mi=class extends To{supportsDOMEvents=!0},Li=class t extends Mi{static makeCurrent(){Ro(new t)}onAndCancel(i,e,n){return i.addEventListener(e,n),()=>{i.removeEventListener(e,n)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Ba();return e==null?null:za(e)}resetBaseElement(){He=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Ao(document.cookie,i)}},He=null;function Ba(){return He=He||document.querySelector("base"),He?He.getAttribute("href"):null}function za(t){return new URL(t,document.baseURI).pathname}var Wa=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),$i=new N(""),Bo=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new O(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(E($i),E(yt))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),jn=class{_doc;constructor(i){this._doc=i}manager},Un="ng-app-id";function Po(t){for(let i of t)i.remove()}function Fo(t,i){let e=i.createElement("style");return e.textContent=t,e}function Va(t,i,e,n){let r=t.head?.querySelectorAll(`style[${Un}="${i}"],link[${Un}="${i}"]`);if(r)for(let o of r)o.removeAttribute(Un),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Ni(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var zo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=je(o),Va(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Fo);n?.forEach(r=>this.addUsage(r,this.external,Ni))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Po(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Po(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Fo(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Ni(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Un,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(E(L),E(Ei),E(Ri,8),E(at))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Di={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Pi=/%COMP%/g,Wo="%COMP%",qa=`_nghost-${Wo}`,Ga=`_ngcontent-${Wo}`,Ka=!0,Ya=new N("",{providedIn:"root",factory:()=>Ka});function Za(t){return Ga.replace(Pi,t)}function Qa(t){return qa.replace(Pi,t)}function Vo(t,i){return i.map(e=>e.replace(Pi,t))}var Uo=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,o,s,l,a,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=l,this.ngZone=a,this.nonce=c,this.platformIsServer=je(l),this.defaultRenderer=new Be(e,s,a,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Me.ShadowDom&&(n=M(h({},n),{encapsulation:Me.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof Hn?r.applyToHost(e):r instanceof ze&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,l=this.ngZone,a=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(n.encapsulation){case Me.Emulated:o=new Hn(a,c,n,this.appId,u,s,l,d);break;case Me.ShadowDom:return new ki(a,c,e,n,s,l,this.nonce,d);default:o=new ze(a,c,n,u,s,l,d);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(n){return new(n||t)(E(Bo),E(zo),E(Ei),E(Ya),E(L),E(at),E(yt),E(Ri))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Be=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Di[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(jo(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(jo(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new O(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Di[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Di[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Le.DashCase|Le.Important)?i.style.setProperty(e,n,r&Le.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Le.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n){if(typeof i=="string"&&(i=xi().getGlobalEventTarget(this.doc,i),!i))throw new Error(`Unsupported event target ${i} for event ${e}`);return this.eventManager.addEventListener(i,e,this.decoratePreventDefault(n))}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function jo(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var ki=class extends Be{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,o,s,l,a){super(i,o,s,a),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Vo(r.id,r.styles);for(let d of c){let p=document.createElement("style");l&&p.setAttribute("nonce",l),p.textContent=d,this.shadowRoot.appendChild(p)}let u=r.getExternalStyles?.();if(u)for(let d of u){let p=Ni(d,o);l&&p.setAttribute("nonce",l),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ze=class extends Be{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,s,l,a){super(i,o,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=a?Vo(a,n.styles):n.styles,this.styleUrls=n.getExternalStyles?.(a)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Hn=class extends ze{contentAttr;hostAttr;constructor(i,e,n,r,o,s,l,a){let c=r+"-"+n.id;super(i,e,n,o,s,l,a,c),this.contentAttr=Za(c),this.hostAttr=Qa(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}},Ja=(()=>{class t extends jn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}static \u0275fac=function(n){return new(n||t)(E(L))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ho=["alt","control","meta","shift"],Xa={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},tl={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},el=(()=>{class t extends jn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r){let o=t.parseEventName(n),s=t.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>xi().onAndCancel(e,o.domEventName,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",l=n.indexOf("code");if(l>-1&&(n.splice(l,1),s="code."),Ho.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,n){let r=Xa[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Ho.forEach(s=>{if(s!==r){let l=tl[s];l(e)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(E(L))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Ud(t,i){return Co(h({rootComponent:t},nl(i)))}function nl(t){return{appProviders:[...al,...t?.providers??[]],platformProviders:sl}}function il(){Li.makeCurrent()}function rl(){return new wi}function ol(){return Jr(document),document}var sl=[{provide:at,useValue:$o},{provide:Xr,useValue:il,multi:!0},{provide:L,useFactory:ol,deps:[]}];var al=[{provide:Gr,useValue:"root"},{provide:wi,useFactory:rl,deps:[]},{provide:$i,useClass:Ja,multi:!0,deps:[L,yt,at]},{provide:$i,useClass:el,multi:!0,deps:[L]},Uo,zo,Bo,{provide:po,useExisting:Uo},{provide:ko,useClass:Wa,deps:[]},[]];var qo=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(E(L))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ll=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=E(cl),r},providedIn:"root"})}return t})(),cl=(()=>{class t extends ll{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Bt.NONE:return n;case Bt.HTML:return ne(n,"HTML")?ee(n):ao(this._doc,String(n)).toString();case Bt.STYLE:return ne(n,"Style")?ee(n):n;case Bt.SCRIPT:if(ne(n,"Script"))return ee(n);throw new O(5200,!1);case Bt.URL:return ne(n,"URL")?ee(n):so(String(n));case Bt.RESOURCE_URL:if(ne(n,"ResourceURL"))return ee(n);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return eo(e)}bypassSecurityTrustStyle(e){return no(e)}bypassSecurityTrustScript(e){return io(e)}bypassSecurityTrustUrl(e){return ro(e)}bypassSecurityTrustResourceUrl(e){return oo(e)}static \u0275fac=function(n){return new(n||t)(E(L))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var S="primary",on=Symbol("RouteTitle"),Bi=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function fe(t){return new Bi(t)}function pl(t,i,e){let n=e.path.split("/");if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let r={};for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(s[0]===":")r[s.substring(1)]=l;else if(s!==l.path)return null}return{consumed:t.slice(0,n.length),posParams:r}}function hl(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!Et(t[e],i[e]))return!1;return!0}function Et(t,i){let e=t?zi(t):void 0,n=i?zi(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!rs(t[r],i[r]))return!1;return!0}function zi(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function rs(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function os(t){return t.length>0?t[t.length-1]:null}function Pt(t){return Pr(t)?t:mo(t)?j(Promise.resolve(t)):v(t)}var fl={exact:as,subset:ls},ss={exact:gl,subset:ml,ignored:()=>!0};function Go(t,i,e){return fl[e.paths](t.root,i.root,e.matrixParams)&&ss[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function gl(t,i){return Et(t,i)}function as(t,i,e){if(!Kt(t.segments,i.segments)||!Wn(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!as(t.children[n],i.children[n],e))return!1;return!0}function ml(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>rs(t[e],i[e]))}function ls(t,i,e){return cs(t,i,i.segments,e)}function cs(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Kt(r,e)||i.hasChildren()||!Wn(r,e,n))}else if(t.segments.length===e.length){if(!Kt(t.segments,e)||!Wn(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!ls(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Kt(t.segments,r)||!Wn(t.segments,r,n)||!t.children[S]?!1:cs(t.children[S],i,o,n)}}function Wn(t,i,e){return i.every((n,r)=>ss[e](t[r].parameters,n.parameters))}var At=class{root;queryParams;fragment;_queryParamMap;constructor(i=new w([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=fe(this.queryParams),this._queryParamMap}toString(){return yl.serialize(this)}},w=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vn(this)}},Gt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=fe(this.parameters),this._parameterMap}toString(){return ds(this)}};function bl(t,i){return Kt(t,i)&&t.every((e,n)=>Et(e.parameters,i[n].parameters))}function Kt(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function vl(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===S&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==S&&(e=e.concat(i(r,n)))}),e}var sn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new ge,providedIn:"root"})}return t})(),ge=class{parse(i){let e=new Vi(i);return new At(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${We(i.root,!0)}`,n=wl(i.queryParams),r=typeof i.fragment=="string"?`#${Sl(i.fragment)}`:"";return`${e}${n}${r}`}},yl=new ge;function Vn(t){return t.segments.map(i=>ds(i)).join("/")}function We(t,i){if(!t.hasChildren())return Vn(t);if(i){let e=t.children[S]?We(t.children[S],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==S&&n.push(`${r}:${We(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=vl(t,(n,r)=>r===S?[We(t.children[S],!1)]:[`${r}:${We(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[S]!=null?`${Vn(t)}/${e[0]}`:`${Vn(t)}/(${e.join("//")})`}}function us(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Bn(t){return us(t).replace(/%3B/gi,";")}function Sl(t){return encodeURI(t)}function Wi(t){return us(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function qn(t){return decodeURIComponent(t)}function Ko(t){return qn(t.replace(/\+/g,"%20"))}function ds(t){return`${Wi(t.path)}${Cl(t.parameters)}`}function Cl(t){return Object.entries(t).map(([i,e])=>`;${Wi(i)}=${Wi(e)}`).join("")}function wl(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Bn(e)}=${Bn(r)}`).join("&"):`${Bn(e)}=${Bn(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var El=/^[^\/()?;#]+/;function Fi(t){let i=t.match(El);return i?i[0]:""}var Rl=/^[^\/()?;=#]+/;function Tl(t){let i=t.match(Rl);return i?i[0]:""}var Il=/^[^=?&#]+/;function _l(t){let i=t.match(Il);return i?i[0]:""}var Ol=/^[^&#]+/;function Al(t){let i=t.match(Ol);return i?i[0]:""}var Vi=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new w([],{}):new w([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let i=[];for(this.peekStartsWith("(")||i.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),i.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(i.length>0||Object.keys(e).length>0)&&(n[S]=new w(i,e)),n}parseSegment(){let i=Fi(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new O(4009,!1);return this.capture(i),new Gt(qn(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Tl(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Fi(this.remaining);r&&(n=r,this.capture(n))}i[qn(e)]=qn(n)}parseQueryParam(i){let e=_l(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=Al(this.remaining);s&&(n=s,this.capture(n))}let r=Ko(e),o=Ko(n);if(i.hasOwnProperty(r)){let s=i[r];Array.isArray(s)||(s=[s],i[r]=s),s.push(o)}else i[r]=o}parseParens(i){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Fi(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new O(4010,!1);let o;n.indexOf(":")>-1?(o=n.slice(0,n.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=S);let s=this.parseChildren();e[o]=Object.keys(s).length===1?s[S]:new w([],s),this.consumeOptional("//")}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new O(4011,!1)}};function ps(t){return t.segments.length>0?new w([],{[S]:t}):t}function hs(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=hs(r);if(n===S&&o.segments.length===0&&o.hasChildren())for(let[s,l]of Object.entries(o.children))i[s]=l;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new w(t.segments,i);return xl(e)}function xl(t){if(t.numberOfChildren===1&&t.children[S]){let i=t.children[S];return new w(t.segments.concat(i.segments),i.children)}return t}function Yt(t){return t instanceof At}function Dl(t,i,e=null,n=null){let r=fs(t);return gs(r,i,e,n)}function fs(t){let i;function e(o){let s={};for(let a of o.children){let c=e(a);s[a.outlet]=c}let l=new w(o.url,s);return o===t&&(i=l),l}let n=e(t.root),r=ps(n);return i??r}function gs(t,i,e,n){let r=t;for(;r.parent;)r=r.parent;if(i.length===0)return Ui(r,r,r,e,n);let o=Ml(i);if(o.toRoot())return Ui(r,r,new w([],{}),e,n);let s=Ll(o,r,t),l=s.processChildren?Ge(s.segmentGroup,s.index,o.commands):bs(s.segmentGroup,s.index,o.commands);return Ui(r,s.segmentGroup,l,e,n)}function Gn(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ze(t){return typeof t=="object"&&t!=null&&t.outlets}function Ui(t,i,e,n,r){let o={};n&&Object.entries(n).forEach(([a,c])=>{o[a]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let s;t===i?s=e:s=ms(t,i,e);let l=ps(hs(s));return new At(l,o,r)}function ms(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=ms(o,i,e)}),new w(t.segments,n)}var Kn=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Gn(n[0]))throw new O(4003,!1);let r=n.find(Ze);if(r&&r!==os(n))throw new O(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ml(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Kn(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let l={};return Object.entries(o.outlets).forEach(([a,c])=>{l[a]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:l}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((l,a)=>{a==0&&l==="."||(a==0&&l===""?e=!0:l===".."?i++:l!=""&&r.push(l))}),r):[...r,o]},[]);return new Kn(e,i,n)}var de=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function Ll(t,i,e){if(t.isAbsolute)return new de(i,!0,0);if(!e)return new de(i,!1,NaN);if(e.parent===null)return new de(e,!0,0);let n=Gn(t.commands[0])?0:1,r=e.segments.length-1+n;return $l(e,r,t.numberOfDoubleDots)}function $l(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new O(4005,!1);r=n.segments.length}return new de(n,!1,r-o)}function Nl(t){return Ze(t[0])?t[0].outlets:{[S]:t}}function bs(t,i,e){if(t??=new w([],{}),t.segments.length===0&&t.hasChildren())return Ge(t,i,e);let n=kl(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new w(t.segments.slice(0,n.pathIndex),{});return o.children[S]=new w(t.segments.slice(n.pathIndex),t.children),Ge(o,0,r)}else return n.match&&r.length===0?new w(t.segments,{}):n.match&&!t.hasChildren()?qi(t,i,e):n.match?Ge(t,0,r):qi(t,i,e)}function Ge(t,i,e){if(e.length===0)return new w(t.segments,{});{let n=Nl(e),r={};if(Object.keys(n).some(o=>o!==S)&&t.children[S]&&t.numberOfChildren===1&&t.children[S].segments.length===0){let o=Ge(t.children[S],i,e);return new w(t.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=bs(t.children[o],i,s))}),Object.entries(t.children).forEach(([o,s])=>{n[o]===void 0&&(r[o]=s)}),new w(t.segments,r)}}function kl(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let s=t.segments[r],l=e[n];if(Ze(l))break;let a=`${l}`,c=n<e.length-1?e[n+1]:null;if(r>0&&a===void 0)break;if(a&&c&&typeof c=="object"&&c.outlets===void 0){if(!Zo(a,c,s))return o;n+=2}else{if(!Zo(a,{},s))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function qi(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(Ze(o)){let a=Pl(o.outlets);return new w(n,a)}if(r===0&&Gn(e[0])){let a=t.segments[i];n.push(new Gt(a.path,Yo(e[0]))),r++;continue}let s=Ze(o)?o.outlets[S]:`${o}`,l=r<e.length-1?e[r+1]:null;s&&l&&Gn(l)?(n.push(new Gt(s,Yo(l))),r+=2):(n.push(new Gt(s,{})),r++)}return new w(n,{})}function Pl(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=qi(new w([],{}),0,n))}),i}function Yo(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Zo(t,i,e){return t==e.path&&Et(i,e.parameters)}var Ke="imperative",k=function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t}(k||{}),X=class{id;url;constructor(i,e){this.id=i,this.url=e}},me=class extends X{type=k.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ht=class extends X{urlAfterRedirects;type=k.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},G=function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t}(G||{}),Yn=function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t}(Yn||{}),Ot=class extends X{reason;code;type=k.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Nt=class extends X{reason;code;type=k.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},Qe=class extends X{error;target;type=k.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Zn=class extends X{urlAfterRedirects;state;type=k.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gi=class extends X{urlAfterRedirects;state;type=k.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ki=class extends X{urlAfterRedirects;state;shouldActivate;type=k.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Yi=class extends X{urlAfterRedirects;state;type=k.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zi=class extends X{urlAfterRedirects;state;type=k.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qi=class{route;type=k.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ji=class{route;type=k.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Xi=class{snapshot;type=k.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tr=class{snapshot;type=k.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},er=class{snapshot;type=k.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nr=class{snapshot;type=k.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qn=class{routerEvent;position;anchor;type=k.Scroll;constructor(i,e,n){this.routerEvent=i,this.position=e,this.anchor=n}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Je=class{},be=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function Fl(t,i){return t.providers&&!t._injector&&(t._injector=Ti(t.providers,i,`Route: ${t.path}`)),t._injector??i}function pt(t){return t.outlet||S}function Ul(t,i){let e=t.filter(n=>pt(n)===i);return e.push(...t.filter(n=>pt(n)!==i)),e}function an(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let i=t.parent;i;i=i.parent){let e=i.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var ir=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return an(this.route?.snapshot)??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new ln(this.rootInjector)}},ln=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new ir(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(E(De))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jn=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=rr(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=rr(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=or(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return or(i,this._root).map(e=>e.value)}};function rr(t,i){if(t===i.value)return i;for(let e of i.children){let n=rr(t,e);if(n)return n}return null}function or(t,i){if(t===i.value)return[i];for(let e of i.children){let n=or(t,e);if(n.length)return n.unshift(i),n}return[]}var q=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function ue(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var Xn=class extends Jn{snapshot;constructor(i,e){super(i),this.snapshot=e,fr(this,i)}toString(){return this.snapshot.toString()}};function vs(t){let i=jl(t),e=new Q([new Gt("",{})]),n=new Q({}),r=new Q({}),o=new Q({}),s=new Q(""),l=new kt(e,n,o,s,r,S,t,i.root);return l.snapshot=i.root,new Xn(new q(l,[]),i)}function jl(t){let i={},e={},n={},r="",o=new pe([],i,n,r,e,S,t,null,{});return new ei("",new q(o,[]))}var kt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,s,l,a){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=l,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(T(c=>c[on]))??v(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(T(i=>fe(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(T(i=>fe(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ti(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:h(h({},i.params),t.params),data:h(h({},i.data),t.data),resolve:h(h(h(h({},t.data),i.data),r?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},r&&Ss(r)&&(n.resolve[on]=r.title),n}var pe=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[on]}constructor(i,e,n,r,o,s,l,a,c){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=s,this.component=l,this.routeConfig=a,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=fe(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=fe(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},ei=class extends Jn{url;constructor(i,e){super(e),this.url=i,fr(this,e)}toString(){return ys(this._root)}};function fr(t,i){i.value._routerState=t,i.children.forEach(e=>fr(t,e))}function ys(t){let i=t.children.length>0?` { ${t.children.map(ys).join(", ")} } `:"";return`${t.value}${i}`}function ji(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Et(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Et(i.params,e.params)||t.paramsSubject.next(e.params),hl(i.url,e.url)||t.urlSubject.next(e.url),Et(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function sr(t,i){let e=Et(t.params,i.params)&&bl(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||sr(t.parent,i.parent))}function Ss(t){return typeof t.title=="string"||t.title===null}var Hl=new N(""),Bl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new vt;deactivateEvents=new vt;attachEvents=new vt;detachEvents=new vt;routerOutletData=St(void 0);parentContexts=g(ln);location=g(ho);changeDetector=g(se);inputBinder=g(oi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new O(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new O(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new O(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new O(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,l=this.parentContexts.getOrCreateContext(this.name).children,a=new ar(e,l,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:a,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=H({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[It]})}return t})(),ar=class t{route;childContexts;parent;outletData;__ngOutletInjector(i){return new t(this.route,this.childContexts,i,this.outletData)}constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===kt?this.route:i===ln?this.childContexts:i===Hl?this.outletData:this.parent.get(i,e)}},oi=new N(""),Qo=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,r=An([n.queryParams,n.params,n.data]).pipe(ot(([o,s,l],a)=>(l=h(h(h({},o),s),l),a===0?v(l):Promise.resolve(l)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let s=Eo(n.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:l}of s.inputs)e.activatedComponentRef.setInput(l,o[l])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function zl(t,i,e){let n=Xe(t,i._root,e?e._root:void 0);return new Xn(n,i)}function Xe(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=Wl(t,i,e);return new q(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=i.value,s.children=i.children.map(l=>Xe(t,l)),s}}let n=Vl(i.value),r=i.children.map(o=>Xe(t,o));return new q(n,r)}}function Wl(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return Xe(t,n,r);return Xe(t,n)})}function Vl(t){return new kt(new Q(t.url),new Q(t.params),new Q(t.queryParams),new Q(t.fragment),new Q(t.data),t.outlet,t.component,t)}var tn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Cs="ngNavigationCancelingError";function ni(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=Yt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=ws(!1,G.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function ws(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Cs]=!0,e.cancellationCode=i,e}function ql(t){return Es(t)&&Yt(t.url)}function Es(t){return!!t&&t[Cs]}var Gl=(t,i,e,n)=>T(r=>(new lr(i,r.targetRouterState,r.currentRouterState,e,n).activate(t),r)),lr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),ji(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=ue(e);i.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],n),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let s=n.getContext(r.outlet);s&&this.deactivateChildRoutes(i,e,s.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ue(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(n&&n.outlet){let s=n.outlet.detach(),l=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:s,route:i,contexts:l})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ue(i);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=ue(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new nr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new tr(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(ji(r),r===o)if(r.component){let s=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,s.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let s=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let l=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(l.contexts),s.attachRef=l.componentRef,s.route=l.route.value,s.outlet&&s.outlet.attach(l.componentRef,l.route.value),ji(l.route.value),this.activateChildRoutes(i,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(i,null,s.children)}else this.activateChildRoutes(i,null,n)}},ii=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},he=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Kl(t,i,e){let n=t._root,r=i?i._root:null;return Ve(n,r,e,[n.value])}function Yl(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function ye(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!Vr(t)?t:i.get(t):n}function Ve(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ue(i);return t.children.forEach(s=>{Zl(s,o[s.value.outlet],e,n.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,l])=>Ye(l,e.getContext(s),r)),r}function Zl(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=i?i.value:null,l=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let a=Ql(s,o,o.routeConfig.runGuardsAndResolvers);a?r.canActivateChecks.push(new ii(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ve(t,i,l?l.children:null,n,r):Ve(t,i,e,n,r),a&&l&&l.outlet&&l.outlet.isActivated&&r.canDeactivateChecks.push(new he(l.outlet.component,s))}else s&&Ye(i,l,r),r.canActivateChecks.push(new ii(n)),o.component?Ve(t,null,l?l.children:null,n,r):Ve(t,null,e,n,r);return r}function Ql(t,i,e){if(typeof e=="function")return e(t,i);switch(e){case"pathParamsChange":return!Kt(t.url,i.url);case"pathParamsOrQueryParamsChange":return!Kt(t.url,i.url)||!Et(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!sr(t,i)||!Et(t.queryParams,i.queryParams);case"paramsChange":default:return!sr(t,i)}}function Ye(t,i,e){let n=ue(t),r=t.value;Object.entries(n).forEach(([o,s])=>{r.component?i?Ye(s,i.children.getContext(o),e):Ye(s,null,e):Ye(s,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new he(i.outlet.component,r)):e.canDeactivateChecks.push(new he(null,r)):e.canDeactivateChecks.push(new he(null,r))}function cn(t){return typeof t=="function"}function Jl(t){return typeof t=="boolean"}function Xl(t){return t&&cn(t.canLoad)}function tc(t){return t&&cn(t.canActivate)}function ec(t){return t&&cn(t.canActivateChild)}function nc(t){return t&&cn(t.canDeactivate)}function ic(t){return t&&cn(t.canMatch)}function Rs(t){return t instanceof Fr||t?.name==="EmptyError"}var zn=Symbol("INITIAL_VALUE");function ve(){return ot(t=>An(t.map(i=>i.pipe(Xt(1),zr(zn)))).pipe(T(i=>{for(let e of i)if(e!==!0){if(e===zn)return zn;if(e===!1||rc(e))return e}return!0}),jt(i=>i!==zn),Xt(1)))}function rc(t){return Yt(t)||t instanceof tn}function oc(t,i){return z(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=e;return s.length===0&&o.length===0?v(M(h({},e),{guardsResult:!0})):sc(s,n,r,t).pipe(z(l=>l&&Jl(l)?ac(n,o,t,i):v(l)),T(l=>M(h({},e),{guardsResult:l})))})}function sc(t,i,e,n){return j(t).pipe(z(r=>pc(r.component,r.route,e,i,n)),Mt(r=>r!==!0,!0))}function ac(t,i,e,n){return j(i).pipe(Jt(r=>Ur(cc(r.route.parent,n),lc(r.route,n),dc(t,r.path,e),uc(t,r.route,e))),Mt(r=>r!==!0,!0))}function lc(t,i){return t!==null&&i&&i(new er(t)),v(!0)}function cc(t,i){return t!==null&&i&&i(new Xi(t)),v(!0)}function uc(t,i,e){let n=i.routeConfig?i.routeConfig.canActivate:null;if(!n||n.length===0)return v(!0);let r=n.map(o=>bi(()=>{let s=an(i)??e,l=ye(o,s),a=tc(l)?l.canActivate(i,t):bt(s,()=>l(i,t));return Pt(a).pipe(Mt())}));return v(r).pipe(ve())}function dc(t,i,e){let n=i[i.length-1],o=i.slice(0,i.length-1).reverse().map(s=>Yl(s)).filter(s=>s!==null).map(s=>bi(()=>{let l=s.guards.map(a=>{let c=an(s.node)??e,u=ye(a,c),d=ec(u)?u.canActivateChild(n,t):bt(c,()=>u(n,t));return Pt(d).pipe(Mt())});return v(l).pipe(ve())}));return v(o).pipe(ve())}function pc(t,i,e,n,r){let o=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!o||o.length===0)return v(!0);let s=o.map(l=>{let a=an(i)??r,c=ye(l,a),u=nc(c)?c.canDeactivate(t,i,e,n):bt(a,()=>c(t,i,e,n));return Pt(u).pipe(Mt())});return v(s).pipe(ve())}function hc(t,i,e,n){let r=i.canLoad;if(r===void 0||r.length===0)return v(!0);let o=r.map(s=>{let l=ye(s,t),a=Xl(l)?l.canLoad(i,e):bt(t,()=>l(i,e));return Pt(a)});return v(o).pipe(ve(),Ts(n))}function Ts(t){return kr(F(i=>{if(typeof i!="boolean")throw ni(t,i)}),T(i=>i===!0))}function fc(t,i,e,n){let r=i.canMatch;if(!r||r.length===0)return v(!0);let o=r.map(s=>{let l=ye(s,t),a=ic(l)?l.canMatch(i,e):bt(t,()=>l(i,e));return Pt(a)});return v(o).pipe(ve(),Ts(n))}var en=class{segmentGroup;constructor(i){this.segmentGroup=i||null}},nn=class extends Error{urlTree;constructor(i){super(),this.urlTree=i}};function ce(t){return Oe(new en(t))}function gc(t){return Oe(new O(4e3,!1))}function mc(t){return Oe(ws(!1,G.GuardRejected))}var cr=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return v(n);if(r.numberOfChildren>1||!r.children[S])return gc(`${i.redirectTo}`);r=r.children[S]}}applyRedirectCommands(i,e,n,r,o){if(typeof e!="string"){let l=e,{queryParams:a,fragment:c,routeConfig:u,url:d,outlet:p,params:f,data:m,title:y}=r,C=bt(o,()=>l({params:f,data:m,queryParams:a,fragment:c,routeConfig:u,url:d,outlet:p,title:y}));if(C instanceof At)throw new nn(C);e=C}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),i,n);if(e[0]==="/")throw new nn(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new At(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let l=o.substring(1);n[r]=e[l]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),s={};return Object.entries(e.children).forEach(([l,a])=>{s[l]=this.createSegmentGroup(i,a,n,r)}),new w(o,s)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new O(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}},ur={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function bc(t,i,e,n,r){let o=Is(t,i,e);return o.matched?(n=Fl(i,n),fc(n,i,e,r).pipe(T(s=>s===!0?o:h({},ur)))):v(o)}function Is(t,i,e){if(i.path==="**")return vc(e);if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},ur):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||pl)(e,t,i);if(!r)return h({},ur);let o={};Object.entries(r.posParams??{}).forEach(([l,a])=>{o[l]=a.path});let s=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function vc(t){return{matched:!0,parameters:t.length>0?os(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function Jo(t,i,e,n){return e.length>0&&Cc(t,e,n)?{segmentGroup:new w(i,Sc(n,new w(e,t.children))),slicedSegments:[]}:e.length===0&&wc(t,e,n)?{segmentGroup:new w(t.segments,yc(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new w(t.segments,t.children),slicedSegments:e}}function yc(t,i,e,n){let r={};for(let o of e)if(si(t,i,o)&&!n[pt(o)]){let s=new w([],{});r[pt(o)]=s}return h(h({},n),r)}function Sc(t,i){let e={};e[S]=i;for(let n of t)if(n.path===""&&pt(n)!==S){let r=new w([],{});e[pt(n)]=r}return e}function Cc(t,i,e){return e.some(n=>si(t,i,n)&&pt(n)!==S)}function wc(t,i,e){return e.some(n=>si(t,i,n))}function si(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ec(t,i,e){return i.length===0&&!t.children[e]}var dr=class{};function Rc(t,i,e,n,r,o,s="emptyOnly"){return new pr(t,i,e,n,r,s,o).recognize()}var Tc=31,pr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=l,this.applyRedirects=new cr(this.urlSerializer,this.urlTree)}noMatchError(i){return new O(4002,`'${i.segmentGroup}'`)}recognize(){let i=Jo(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(i).pipe(T(({children:e,rootSnapshot:n})=>{let r=new q(n,e),o=new ei("",r),s=Dl(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(i){let e=new pe([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,i,S,e).pipe(T(n=>({children:n,rootSnapshot:e})),Qt(n=>{if(n instanceof nn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof en?this.noMatchError(n):n}))}processSegmentGroup(i,e,n,r,o){return n.segments.length===0&&n.hasChildren()?this.processChildren(i,e,n,o):this.processSegment(i,e,n,n.segments,r,!0,o).pipe(T(s=>s instanceof q?[s]:[]))}processChildren(i,e,n,r){let o=[];for(let s of Object.keys(n.children))s==="primary"?o.unshift(s):o.push(s);return j(o).pipe(Jt(s=>{let l=n.children[s],a=Ul(e,s);return this.processSegmentGroup(i,a,l,s,r)}),Br((s,l)=>(s.push(...l),s)),vi(null),Hr(),z(s=>{if(s===null)return ce(n);let l=_s(s);return Ic(l),v(l)}))}processSegment(i,e,n,r,o,s,l){return j(e).pipe(Jt(a=>this.processSegmentAgainstRoute(a._injector??i,e,a,n,r,o,s,l).pipe(Qt(c=>{if(c instanceof en)return v(null);throw c}))),Mt(a=>!!a),Qt(a=>{if(Rs(a))return Ec(n,r,o)?v(new dr):ce(n);throw a}))}processSegmentAgainstRoute(i,e,n,r,o,s,l,a){return pt(n)!==s&&(s===S||!si(r,o,n))?ce(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(i,r,n,o,s,a):this.allowRedirects&&l?this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,s,a):ce(r)}expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,s,l){let{matched:a,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:p}=Is(e,r,o);if(!a)return ce(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Tc&&(this.allowRedirects=!1));let f=new pe(o,c,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Xo(r),pt(r),r.component??r._loadedComponent??null,r,ts(r)),m=ti(f,l,this.paramsInheritanceStrategy);f.params=Object.freeze(m.params),f.data=Object.freeze(m.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,f,i);return this.applyRedirects.lineralizeSegments(r,y).pipe(z(C=>this.processSegment(i,n,e,C.concat(p),s,!1,l)))}matchSegmentAgainstRoute(i,e,n,r,o,s){let l=bc(e,n,r,i,this.urlSerializer);return n.path==="**"&&(e.children={}),l.pipe(ot(a=>a.matched?(i=n._injector??i,this.getChildConfig(i,n,r).pipe(ot(({routes:c})=>{let u=n._loadedInjector??i,{parameters:d,consumedSegments:p,remainingSegments:f}=a,m=new pe(p,d,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Xo(n),pt(n),n.component??n._loadedComponent??null,n,ts(n)),y=ti(m,s,this.paramsInheritanceStrategy);m.params=Object.freeze(y.params),m.data=Object.freeze(y.data);let{segmentGroup:C,slicedSegments:D}=Jo(e,p,f,c);if(D.length===0&&C.hasChildren())return this.processChildren(u,c,C,m).pipe(T(Y=>new q(m,Y)));if(c.length===0&&D.length===0)return v(new q(m,[]));let $=pt(n)===o;return this.processSegment(u,c,C,D,$?S:o,!0,m).pipe(T(Y=>new q(m,Y instanceof q?[Y]:[])))}))):ce(e)))}getChildConfig(i,e,n){return e.children?v({routes:e.children,injector:i}):e.loadChildren?e._loadedRoutes!==void 0?v({routes:e._loadedRoutes,injector:e._loadedInjector}):hc(i,e,n,this.urlSerializer).pipe(z(r=>r?this.configLoader.loadChildren(i,e).pipe(F(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):mc(e))):v({routes:[],injector:i})}};function Ic(t){t.sort((i,e)=>i.value.outlet===S?-1:e.value.outlet===S?1:i.value.outlet.localeCompare(e.value.outlet))}function _c(t){let i=t.value.routeConfig;return i&&i.path===""}function _s(t){let i=[],e=new Set;for(let n of t){if(!_c(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=_s(n.children);i.push(new q(n.value,r))}return i.filter(n=>!e.has(n))}function Xo(t){return t.data||{}}function ts(t){return t.resolve||{}}function Oc(t,i,e,n,r,o){return z(s=>Rc(t,i,e,n,s.extractedUrl,r,o).pipe(T(({state:l,tree:a})=>M(h({},s),{targetSnapshot:l,urlAfterRedirects:a}))))}function Ac(t,i){return z(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return v(e);let o=new Set(r.map(a=>a.route)),s=new Set;for(let a of o)if(!s.has(a))for(let c of Os(a))s.add(c);let l=0;return j(s).pipe(Jt(a=>o.has(a)?xc(a,n,t,i):(a.data=ti(a,a.parent,t).resolve,v(void 0))),F(()=>l++),yi(1),z(a=>l===s.size?v(e):Dt))})}function Os(t){let i=t.children.map(e=>Os(e)).flat();return[t,...i]}function xc(t,i,e,n){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!Ss(r)&&(o[on]=r.title),Dc(o,t,i,n).pipe(T(s=>(t._resolvedData=s,t.data=ti(t,t.parent,e).resolve,null)))}function Dc(t,i,e,n){let r=zi(t);if(r.length===0)return v({});let o={};return j(r).pipe(z(s=>Mc(t[s],i,e,n).pipe(Mt(),F(l=>{if(l instanceof tn)throw ni(new ge,l);o[s]=l}))),yi(1),jr(o),Qt(s=>Rs(s)?Dt:Oe(s)))}function Mc(t,i,e,n){let r=an(i)??n,o=ye(t,r),s=o.resolve?o.resolve(i,e):bt(r,()=>o(i,e));return Pt(s)}function Hi(t){return ot(i=>{let e=t(i);return e?j(e).pipe(T(()=>i)):v(i)})}var As=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===S);return n}getResolvedTitleForRoute(e){return e.data[on]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>g(Lc),providedIn:"root"})}return t})(),Lc=(()=>{class t extends As{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(E(qo))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),un=new N("",{providedIn:"root",factory:()=>({})}),$c=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=lt({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(n,r){n&1&&Ct(0,"router-outlet")},dependencies:[Bl],encapsulation:2})}return t})();function gr(t){let i=t.children&&t.children.map(gr),e=i?M(h({},t),{children:i}):h({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==S&&(e.component=$c),e}var rn=new N(""),mr=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=g(Pn);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return v(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let n=Pt(e.loadComponent()).pipe(T(xs),F(o=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=o}),xn(()=>{this.componentLoaders.delete(e)})),r=new mi(n,()=>new Z).pipe(gi());return this.componentLoaders.set(e,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return v({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let o=Nc(n,this.compiler,e,this.onLoadEndListener).pipe(xn(()=>{this.childrenLoaders.delete(n)})),s=new mi(o,()=>new Z).pipe(gi());return this.childrenLoaders.set(n,s),s}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Nc(t,i,e,n){return Pt(t.loadChildren()).pipe(T(xs),z(r=>r instanceof go||Array.isArray(r)?v(r):j(i.compileModuleAsync(r))),T(r=>{n&&n(t);let o,s,l=!1;return Array.isArray(r)?(s=r,l=!0):(o=r.create(e).injector,s=o.get(rn,[],{optional:!0,self:!0}).flat()),{routes:s.map(gr),injector:o}}))}function kc(t){return t&&typeof t=="object"&&"default"in t}function xs(t){return kc(t)?t.default:t}var br=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>g(Pc),providedIn:"root"})}return t})(),Pc=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ds=new N(""),Ms=new N("");function Fc(t,i,e){let n=t.get(Ms),r=t.get(L);return t.get(yt).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),l=r.startViewTransition(()=>(o(),Uc(t))),{onViewTransitionCreated:a}=n;return a&&bt(t,()=>a({transition:l,from:i,to:e})),s})}function Uc(t){return new Promise(i=>{to({read:()=>setTimeout(i)},{injector:t})})}var Ls=new N(""),vr=(()=>{class t{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Z;transitionAbortSubject=new Z;configLoader=g(mr);environmentInjector=g(De);urlSerializer=g(sn);rootContexts=g(ln);location=g(Ue);inputBindingEnabled=g(oi,{optional:!0})!==null;titleStrategy=g(As);options=g(un,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=g(br);createViewTransition=g(Ds,{optional:!0});navigationErrorHandler=g(Ls,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>v(void 0);rootComponentType=null;constructor(){let e=r=>this.events.next(new Qi(r)),n=r=>this.events.next(new Ji(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;this.transitions?.next(M(h(h({},this.transitions.value),e),{id:n}))}setupNavigations(e,n,r){return this.transitions=new Q({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Ke,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(jt(o=>o.id!==0),T(o=>M(h({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),ot(o=>{let s=!1,l=!1;return v(o).pipe(ot(a=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",G.SupersededByNewNavigation),Dt;this.currentTransition=o,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?M(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload"){let d="";return this.events.next(new Nt(a.id,this.urlSerializer.serialize(a.rawUrl),d,Yn.IgnoredSameUrlNavigation)),a.resolve(!1),Dt}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return v(a).pipe(ot(d=>{let p=this.transitions?.getValue();return this.events.next(new me(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),p!==this.transitions?.getValue()?Dt:Promise.resolve(d)}),Oc(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),F(d=>{o.targetSnapshot=d.targetSnapshot,o.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=M(h({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let p=new Zn(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(p)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:d,extractedUrl:p,source:f,restoredState:m,extras:y}=a,C=new me(d,this.urlSerializer.serialize(p),f,m);this.events.next(C);let D=vs(this.rootComponentType).snapshot;return this.currentTransition=o=M(h({},a),{targetSnapshot:D,urlAfterRedirects:p,extras:M(h({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=p,v(o)}else{let d="";return this.events.next(new Nt(a.id,this.urlSerializer.serialize(a.extractedUrl),d,Yn.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Dt}}),F(a=>{let c=new Gi(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),T(a=>(this.currentTransition=o=M(h({},a),{guards:Kl(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),o)),oc(this.environmentInjector,a=>this.events.next(a)),F(a=>{if(o.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw ni(this.urlSerializer,a.guardsResult);let c=new Ki(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(c)}),jt(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",G.GuardRejected),!1)),Hi(a=>{if(a.guards.canActivateChecks.length)return v(a).pipe(F(c=>{let u=new Yi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),ot(c=>{let u=!1;return v(c).pipe(Ac(this.paramsInheritanceStrategy,this.environmentInjector),F({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",G.NoDataFromResolver)}}))}),F(c=>{let u=new Zi(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),Hi(a=>{let c=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(F(p=>{u.component=p}),T(()=>{})));for(let p of u.children)d.push(...c(p));return d};return An(c(a.targetSnapshot.root)).pipe(vi(null),Xt(1))}),Hi(()=>this.afterPreactivation()),ot(()=>{let{currentSnapshot:a,targetSnapshot:c}=o,u=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return u?j(u).pipe(T(()=>o)):v(o)}),T(a=>{let c=zl(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=o=M(h({},a),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,o}),F(()=>{this.events.next(new Je)}),Gl(this.rootContexts,e.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),Xt(1),F({next:a=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ht(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{s=!0}}),Wr(this.transitionAbortSubject.pipe(F(a=>{throw a}))),xn(()=>{!s&&!l&&this.cancelNavigationTransition(o,"",G.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Qt(a=>{if(l=!0,Es(a))this.events.next(new Ot(o.id,this.urlSerializer.serialize(o.extractedUrl),a.message,a.cancellationCode)),ql(a)?this.events.next(new be(a.url,a.navigationBehaviorOptions)):o.resolve(!1);else{let c=new Qe(o.id,this.urlSerializer.serialize(o.extractedUrl),a,o.targetSnapshot??void 0);try{let u=bt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof tn){let{message:d,cancellationCode:p}=ni(this.urlSerializer,u);this.events.next(new Ot(o.id,this.urlSerializer.serialize(o.extractedUrl),d,p)),this.events.next(new be(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return Dt}))}))}cancelNavigationTransition(e,n,r){let o=new Ot(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jc(t){return t!==Ke}var Hc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>g(Bc),providedIn:"root"})}return t})(),hr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}},Bc=(()=>{class t extends hr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$s=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>g(zc),providedIn:"root"})}return t})(),zc=(()=>{class t extends $s{location=g(Ue);urlSerializer=g(sn);options=g(un,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=g(br);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new At;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=vs(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&e(n.url,n.state)})}handleRouterEvent(e,n){if(e instanceof me)this.stateMemento=this.createStateMemento();else if(e instanceof Nt)this.rawUrlTree=n.initialUrl;else if(e instanceof Zn){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??r,n)}}else e instanceof Je?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):e instanceof Ot&&(e.code===G.GuardRejected||e.code===G.NoDataFromResolver)?this.restoreHistory(n):e instanceof Qe?this.restoreHistory(n,!0):e instanceof ht&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let r=e instanceof At?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let o=this.browserPageId,s=h(h({},n.extras.state),this.generateNgRouterState(n.id,o));this.location.replaceState(r,"",s)}else{let o=h(h({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===e.finalUrl&&o===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qe=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(qe||{});function Ns(t,i){t.events.pipe(jt(e=>e instanceof ht||e instanceof Ot||e instanceof Qe||e instanceof Nt),T(e=>e instanceof ht||e instanceof Nt?qe.COMPLETE:(e instanceof Ot?e.code===G.Redirect||e.code===G.SupersededByNewNavigation:!1)?qe.REDIRECTING:qe.FAILED),jt(e=>e!==qe.REDIRECTING),Xt(1)).subscribe(()=>{i()})}var Wc={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Vc={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Rt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=g(Dn);stateManager=g($s);options=g(un,{optional:!0})||{};pendingTasks=g(Qr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=g(vr);urlSerializer=g(sn);location=g(Ue);urlHandlingStrategy=g(br);_events=new Z;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=g(Hc);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=g(rn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!g(oi,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Nr;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Ot&&n.code!==G.Redirect&&n.code!==G.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ht)this.navigated=!0;else if(n instanceof be){let s=n.navigationBehaviorOptions,l=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),a=h({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||jc(r.source)},s);this.scheduleNavigation(l,Ke,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Gc(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ke,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",n)},0)})}navigateToSyncWithBrowser(e,n,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let a=h({},r);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(o.state=a)}let l=this.parseUrl(e);this.scheduleNavigation(l,n,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(gr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:l,preserveFragment:a}=n,c=a?this.currentUrlTree.fragment:s,u=null;switch(l??this.options.defaultQueryParamsHandling){case"merge":u=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let p=r?r.snapshot:this.routerState.snapshot.root;d=fs(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),d=this.currentUrlTree.root}return gs(d,e,u,c??null)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Yt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Ke,null,n)}navigate(e,n={skipLocationChange:!1}){return qc(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=h({},Wc):n===!1?r=h({},Vc):r=n,Yt(e))return Go(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Go(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,s){if(this.disposed)return Promise.resolve(!1);let l,a,c;s?(l=s.resolve,a=s.reject,c=s.promise):c=new Promise((d,p)=>{l=d,a=p});let u=this.pendingTasks.add();return Ns(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:l,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qc(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new O(4008,!1)}function Gc(t){return!(t instanceof Je)&&!(t instanceof be)}var es=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Z;constructor(e,n,r,o,s,l){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=l;let a=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=a==="a"||a==="area",this.isAnchorElement?this.subscription=e.events.subscribe(c=>{c instanceof ht&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Yt(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,s){let l=this.urlTree;if(l===null||this.isAnchorElement&&(e!==0||n||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let a={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(l,a),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let n=this.href===null?null:lo(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}get urlTree(){return this.routerLinkInput===null?null:Yt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||t)(W(Rt),W(kt),Yr("tabindex"),W($e),W(Ht),W(Fe))};static \u0275dir=H({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&$n("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&ut("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",x],skipLocationChange:[2,"skipLocationChange","skipLocationChange",x],replaceUrl:[2,"replaceUrl","replaceUrl",x],routerLink:"routerLink"},features:[Lt,It]})}return t})(),op=(()=>{class t{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new vt;constructor(e,n,r,o,s){this.router=e,this.element=n,this.renderer=r,this.cdr=o,this.link=s,this.routerEventsSubscription=e.events.subscribe(l=>{l instanceof ht&&this.update()})}ngAfterContentInit(){v(this.links.changes,v(null)).pipe(Ae()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=j(e).pipe(Ae()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Kc(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let o=r.urlTree;return o?e.isActive(o,n):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(W(Rt),W(Ht),W($e),W(se),W(es,8))};static \u0275dir=H({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,o){if(n&1&&Wt(o,es,5),n&2){let s;Vt(s=qt())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[It]})}return t})();function Kc(t){return!!t.paths}var ri=class{};var Yc=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,r,o,s){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(jt(e=>e instanceof ht),Jt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,n){let r=[];for(let o of n){o.providers&&!o._injector&&(o._injector=Ti(o.providers,e,`Route: ${o.path}`));let s=o._injector??e,l=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(l,o.children??o._loadedRoutes))}return j(r).pipe(Ae())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(e,n):r=v(null);let o=r.pipe(z(s=>s===null?v(void 0):(n._loadedRoutes=s.routes,n._loadedInjector=s.injector,this.processRoutes(s.injector??e,s.routes))));if(n.loadComponent&&!n._loadedComponent){let s=this.loader.loadComponent(n);return j([o,s]).pipe(Ae())}else return o})}static \u0275fac=function(n){return new(n||t)(E(Rt),E(Pn),E(De),E(ri),E(mr))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ks=new N(""),Zc=(()=>{class t{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,n,r,o,s={}){this.urlSerializer=e,this.transitions=n,this.viewportScroller=r,this.zone=o,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof me?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof ht?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Nt&&e.code===Yn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Qn&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Qn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){co()};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function sp(t,...i){return xe([{provide:rn,multi:!0,useValue:t},[],{provide:kt,useFactory:Ps,deps:[Rt]},{provide:_i,multi:!0,useFactory:Fs},i.map(e=>e.\u0275providers)])}function Ps(t){return t.routerState.root}function dn(t,i){return{\u0275kind:t,\u0275providers:i}}function Fs(){let t=g(te);return i=>{let e=t.get(Oi);if(i!==e.components[0])return;let n=t.get(Rt),r=t.get(Us);t.get(yr)===1&&n.initialNavigation(),t.get(js,null,Si.Optional)?.setUpPreloading(),t.get(ks,null,Si.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Us=new N("",{factory:()=>new Z}),yr=new N("",{providedIn:"root",factory:()=>1});function Qc(){return dn(2,[{provide:yr,useValue:0},{provide:Ii,multi:!0,deps:[te],useFactory:i=>{let e=i.get(Io,Promise.resolve());return()=>e.then(()=>new Promise(n=>{let r=i.get(Rt),o=i.get(Us);Ns(r,()=>{n(!0)}),i.get(vr).afterPreactivation=()=>(n(!0),o.closed?v(void 0):o),r.initialNavigation()}))}}])}function Jc(){return dn(3,[{provide:Ii,multi:!0,useFactory:()=>{let i=g(Rt);return()=>{i.setUpLocationChangeListener()}}},{provide:yr,useValue:2}])}var js=new N("");function Xc(t){return dn(0,[{provide:js,useExisting:Yc},{provide:ri,useExisting:t}])}function tu(){return dn(8,[Qo,{provide:oi,useExisting:Qo}])}function eu(t){let i=[{provide:Ds,useValue:Fc},{provide:Ms,useValue:h({skipNextTransition:!!t?.skipInitialTransition},t)}];return dn(9,i)}var ns=new N("ROUTER_FORROOT_GUARD"),nu=[Ue,{provide:sn,useClass:ge},Rt,ln,{provide:kt,useFactory:Ps,deps:[Rt]},mr,[]],ap=(()=>{class t{constructor(e){}static forRoot(e,n){return{ngModule:t,providers:[nu,[],{provide:rn,multi:!0,useValue:e},{provide:ns,useFactory:su,deps:[[Rt,new Ci,new qr]]},n?.errorHandler?{provide:Ls,useValue:n.errorHandler}:[],{provide:un,useValue:n||{}},n?.useHash?ru():ou(),iu(),n?.preloadingStrategy?Xc(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?au(n):[],n?.bindToComponentInputs?tu().\u0275providers:[],n?.enableViewTransitions?eu().\u0275providers:[],lu()]}}static forChild(e){return{ngModule:t,providers:[{provide:rn,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)(E(ns,8))};static \u0275mod=ct({type:t});static \u0275inj=st({})}return t})();function iu(){return{provide:ks,useFactory:()=>{let t=g(No),i=g(yt),e=g(un),n=g(vr),r=g(sn);return e.scrollOffset&&t.setOffset(e.scrollOffset),new Zc(r,n,t,i,e)}}}function ru(){return{provide:Fe,useClass:Oo}}function ou(){return{provide:Fe,useClass:_o}}function su(t){return"guarded"}function au(t){return[t.initialNavigation==="disabled"?Jc().\u0275providers:[],t.initialNavigation==="enabledBlocking"?Qc().\u0275providers:[]]}var is=new N("");function lu(){return[{provide:is,useFactory:Fs},{provide:_i,multi:!0,useExisting:is}]}function Hs(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function li(t,i){if(t&&i){let e=n=>{Hs(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function ai(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Se(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Bs(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function zs(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function cu(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function uu(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function dp(t,i,e=!0){var n,r,o,s;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Bs(t),a=l.height,c=l.width,u=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),f=uu(),m=cu(),y=zs(),C,D,$="top";p.top+u+a>y.height?(C=p.top+f-a,$="bottom",C<0&&(C=f)):C=u+p.top+f,p.left+c>y.width?D=Math.max(0,p.left+m+d-c):D=p.left+m,t.style.top=C+"px",t.style.left=D+"px",t.style.transformOrigin=$,e&&(t.style.marginTop=$==="bottom"?`calc(${(r=(n=ai(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=ai(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function Ws(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function pp(t,i,e=!0){var n,r,o,s;if(t){let l=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Bs(t),a=i.offsetHeight,c=i.getBoundingClientRect(),u=zs(),d,p,f="top";c.top+a+l.height>u.height?(d=-1*l.height,f="bottom",c.top+d<0&&(d=-1*c.top)):d=a,l.width>u.width?p=c.left*-1:c.left+l.width>u.width?p=(c.left+l.width-u.width)*-1:p=0,t.style.top=d+"px",t.style.left=p+"px",t.style.transformOrigin=f,e&&(t.style.marginTop=f==="bottom"?`calc(${(r=(n=ai(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=ai(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function Ce(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Vs(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),Ce(i)?i:void 0}function hp(t,i){let e=Vs(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function Sr(t,i={}){if(Ce(t)){let e=(n,r)=>{var o,s;let l=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([p,f])=>n==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);a=d.length?a.concat(d.filter(p=>!!p)):a}}return a},l)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Sr(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function fp(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function gp(t,i){return Ce(t)?Array.from(t.querySelectorAll(i)):[]}function du(t,i){return Ce(t)?t.matches(i)?t:t.querySelector(i):null}function mp(t,i){t&&document.activeElement!==t&&t.focus(i)}function bp(t,i){if(Ce(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Cr(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function qs(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Gs(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function wr(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function vp(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ks(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function yp(t,i){let e=Vs(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Ys(t,i="",e){Ce(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Zs(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}var pu=Object.defineProperty,Qs=Object.getOwnPropertySymbols,hu=Object.prototype.hasOwnProperty,fu=Object.prototype.propertyIsEnumerable,Js=(t,i,e)=>i in t?pu(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,gu=(t,i)=>{for(var e in i||(i={}))hu.call(i,e)&&Js(t,e,i[e]);if(Qs)for(var e of Qs(i))fu.call(i,e)&&Js(t,e,i[e]);return t};function et(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Er(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,l;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!Er(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let a=t instanceof Date,c=i instanceof Date;if(a!=c)return!1;if(a&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[o]))return!1;for(o=s;o--!==0;)if(l=p[o],!Er(t[l],i[l],e))return!1;return!0}function mu(t,i){return Er(t,i)}function ta(t){return!!(t&&t.constructor&&t.call&&t.apply)}function R(t){return!et(t)}function Rr(t,i){if(!t||!i)return null;try{let e=t[i];if(R(e))return e}catch{}if(Object.keys(t).length){if(ta(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function bu(t,i,e){return e?Rr(t,e)===Rr(i,e):mu(t,i)}function Ep(t,i){let e;if(R(t))try{e=t.findLast(i)}catch{e=[...t].reverse().find(i)}return e}function Rp(t,i){let e=-1;if(R(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ft(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function tt(t,...i){return ta(t)?t(...i):t}function Ft(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Xs(t){return Ft(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function ci(t,i="",e={}){let n=Xs(i).split("."),r=n.shift();return r?ft(t)?ci(tt(t[Object.keys(t).find(o=>Xs(o)===r)||""],e),n.join("."),e):void 0:tt(t,e)}function ui(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function ea(t){return R(t)&&!isNaN(t)}function Tp(t=""){return R(t)&&t.length===1&&!!t.match(/\S| /)}function K(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function pn(...t){let i=(e={},n={})=>{let r=gu({},e);return Object.keys(n).forEach(o=>{ft(n[o])&&o in e&&ft(e[o])?r[o]=i(e[o],n[o]):r[o]=n[o]}),r};return t.reduce((e,n,r)=>r===0?n:i(e,n),{})}function Zt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function di(t){return Ft(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Tr(t){return Ft(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var pi={};function hn(t="pui_id_"){return pi.hasOwnProperty(t)||(pi[t]=0),pi[t]++,`${t}${pi[t]}`}function vu(){let t=[],i=(s,l,a=999)=>{let c=r(s,l,a),u=c.value+(c.key===s?0:a)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(l=>l.value!==s)},n=(s,l)=>r(s,l).value,r=(s,l,a=0)=>[...t].reverse().find(c=>l?!0:c.key===s)||{key:s,value:a},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,l,a)=>{l&&(l.style.zIndex=String(i(s,!0,a)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var Op=vu();var P=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Bp=(()=>{class t{clickSource=new Z;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var na=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(W(uo))};static \u0275dir=H({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ct({type:t});static \u0275inj=st({imports:[$t]})}return t})();var yu=Object.defineProperty,Su=Object.defineProperties,Cu=Object.getOwnPropertyDescriptors,fi=Object.getOwnPropertySymbols,oa=Object.prototype.hasOwnProperty,sa=Object.prototype.propertyIsEnumerable,ia=(t,i,e)=>i in t?yu(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,mt=(t,i)=>{for(var e in i||(i={}))oa.call(i,e)&&ia(t,e,i[e]);if(fi)for(var e of fi(i))sa.call(i,e)&&ia(t,e,i[e]);return t},Ir=(t,i)=>Su(t,Cu(i)),xt=(t,i)=>{var e={};for(var n in t)oa.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&fi)for(var n of fi(t))i.indexOf(n)<0&&sa.call(t,n)&&(e[n]=t[n]);return e};function Vp(...t){return pn(...t)}var wu=Zs(),nt=wu;function ra(t,i){ui(t)?t.push(...i||[]):ft(t)&&Object.assign(t,i)}function Eu(t){return ft(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Ru(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function _r(t="",i=""){return Ru(`${Ft(t,!1)&&Ft(i,!1)?`${t}-`:t}${i}`)}function aa(t="",i=""){return`--${_r(t,i)}`}function Tu(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function la(t,i="",e="",n=[],r){if(Ft(t)){let o=/{([^}]*)}/g,s=t.trim();if(Tu(s))return;if(K(s,o)){let l=s.replaceAll(o,u=>{let p=u.replace(/{|}/g,"").split(".").filter(f=>!n.some(m=>K(f,m)));return`var(${aa(e,di(p.join("-")))}${R(r)?`, ${r}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return K(l.replace(c,"0"),a)?`calc(${l})`:l}return s}else if(ea(t))return t}function Iu(t,i,e){Ft(i,!1)&&t.push(`${i}:${e};`)}function we(t,i){return t?`${t}{${i}}`:""}var Ee=(...t)=>_u(I.getTheme(),...t),_u=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=I.defaults||{},{prefix:s,transform:l}=t?.options||o||{},c=K(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||et(n)&&l==="strict"?I.getTokenValue(i):la(c,void 0,s,[r.excludedKeyRegex],e)}return""};function Ou(t,i={}){let e=I.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[p,f])=>{let m=K(p,o)?_r(u):_r(u,di(p)),y=Eu(f);if(ft(y)){let{variables:C,tokens:D}=s(y,m);ra(d.tokens,D),ra(d.variables,C)}else d.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),Iu(d.variables,aa(m),la(y,m,n,[o]));return d},{variables:[],tokens:[]}),{variables:l,tokens:a}=s(t,n);return{value:l,tokens:a,declarations:l.join(""),css:we(r,l.join(""))}}var gt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Ou(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,l,a,c,u,d;let{preset:p,options:f}=i,m,y,C,D,$,Y,rt;if(R(p)&&f.transform!=="strict"){let{primitive:fn,semantic:gn,extend:mn}=p,Te=gn||{},{colorScheme:bn}=Te,vn=xt(Te,["colorScheme"]),yn=mn||{},{colorScheme:Sn}=yn,Ie=xt(yn,["colorScheme"]),_e=bn||{},{dark:Cn}=_e,wn=xt(_e,["dark"]),En=Sn||{},{dark:Rn}=En,Tn=xt(En,["dark"]),In=R(fn)?this._toVariables({primitive:fn},f):{},_n=R(vn)?this._toVariables({semantic:vn},f):{},On=R(wn)?this._toVariables({light:wn},f):{},Dr=R(Cn)?this._toVariables({dark:Cn},f):{},Mr=R(Ie)?this._toVariables({semantic:Ie},f):{},Lr=R(Tn)?this._toVariables({light:Tn},f):{},$r=R(Rn)?this._toVariables({dark:Rn},f):{},[wa,Ea]=[(o=In.declarations)!=null?o:"",In.tokens],[Ra,Ta]=[(s=_n.declarations)!=null?s:"",_n.tokens||[]],[Ia,_a]=[(l=On.declarations)!=null?l:"",On.tokens||[]],[Oa,Aa]=[(a=Dr.declarations)!=null?a:"",Dr.tokens||[]],[xa,Da]=[(c=Mr.declarations)!=null?c:"",Mr.tokens||[]],[Ma,La]=[(u=Lr.declarations)!=null?u:"",Lr.tokens||[]],[$a,Na]=[(d=$r.declarations)!=null?d:"",$r.tokens||[]];m=this.transformCSS(t,wa,"light","variable",f,n,r),y=Ea;let ka=this.transformCSS(t,`${Ra}${Ia}`,"light","variable",f,n,r),Pa=this.transformCSS(t,`${Oa}`,"dark","variable",f,n,r);C=`${ka}${Pa}`,D=[...new Set([...Ta,..._a,...Aa])];let Fa=this.transformCSS(t,`${xa}${Ma}color-scheme:light`,"light","variable",f,n,r),Ua=this.transformCSS(t,`${$a}color-scheme:dark`,"dark","variable",f,n,r);$=`${Fa}${Ua}`,Y=[...new Set([...Da,...La,...Na])],rt=tt(p.css,{dt:Ee})}return{primitive:{css:m,tokens:y},semantic:{css:C,tokens:D},global:{css:$,tokens:Y},style:rt}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var l,a,c;let u,d,p;if(R(i)&&e.transform!=="strict"){let f=t.replace("-directive",""),m=i,{colorScheme:y,extend:C,css:D}=m,$=xt(m,["colorScheme","extend","css"]),Y=C||{},{colorScheme:rt}=Y,fn=xt(Y,["colorScheme"]),gn=y||{},{dark:mn}=gn,Te=xt(gn,["dark"]),bn=rt||{},{dark:vn}=bn,yn=xt(bn,["dark"]),Sn=R($)?this._toVariables({[f]:mt(mt({},$),fn)},e):{},Ie=R(Te)?this._toVariables({[f]:mt(mt({},Te),yn)},e):{},_e=R(mn)?this._toVariables({[f]:mt(mt({},mn),vn)},e):{},[Cn,wn]=[(l=Sn.declarations)!=null?l:"",Sn.tokens||[]],[En,Rn]=[(a=Ie.declarations)!=null?a:"",Ie.tokens||[]],[Tn,In]=[(c=_e.declarations)!=null?c:"",_e.tokens||[]],_n=this.transformCSS(f,`${Cn}${En}`,"light","variable",e,r,o,s),On=this.transformCSS(f,Tn,"dark","variable",e,r,o,s);u=`${_n}${On}`,d=[...new Set([...wn,...Rn,...In])],p=tt(D,{dt:Ee})}return{css:u,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:l}=i,a=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:a,options:l,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:l,options:a}=i,c=(o=l?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:a,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${tt(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),l=Object.entries(n).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,u])=>{if(u?.css){let d=Zt(u?.css),p=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${p}" ${l}>${d}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let l={name:t,theme:i,params:e,set:r,defaults:o},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${Zt(a)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let l=K(o,i.variable.excludedKeyRegex)?e:e?`${e}.${Tr(o)}`:Tr(o),a=n?`${n}.${o}`:o;ft(s)?this.createTokens(s,i,l,a,r):(r[l]||(r[l]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(f=>f.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(f=>f.computed(f.scheme,u[f.scheme]))}}),r[l].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),K(s,d)){let m=s.trim().replaceAll(d,D=>{var $;let Y=D.replace(/{|}/g,""),rt=($=r[Y])==null?void 0:$.computed(c,u);return ui(rt)&&rt.length===2?`light-dark(${rt[0].value},${rt[1].value})`:rt?.value}),y=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,C=/var\([^)]+\)/g;p=K(m.replace(C,"0"),y)?`calc(${m})`:m}return et(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),r},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(u=>!K(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,l=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(a=>a);return l.length===1?l[0].value:l.reduce((a={},c)=>{let u=c,{colorScheme:d}=u,p=xt(u,["colorScheme"]);return a[d]=p,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?we(R(i)?`${t}${i},${t} ${i}`:t,n):we(t,R(i)?we(i,n):n)},transformCSS(t,i,e,n,r={},o,s,l){if(R(i)){let{cssLayer:a}=r;if(n!=="style"){let c=this.getColorSchemeOption(r,s);i=e==="dark"?c.reduce((u,{type:d,selector:p})=>(R(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,l,d,i)),u),""):we(l??":root",i)}if(a){let c={name:"primeui",order:"primeui"};ft(a)&&(c.name=tt(a.name,{name:t,type:n})),R(c.name)&&(i=we(`@layer ${c.name}`,i),o?.layerNames(c.name))}return i}return""}},I={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Ir(mt({},i),{options:mt(mt({},this.defaults.options),i.options)}),this._tokens=gt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),nt.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ir(mt({},this.theme),{preset:t}),this._tokens=gt.createTokens(t,this.defaults),this.clearLoadedStyleNames(),nt.emit("preset:change",t),nt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ir(mt({},this.theme),{options:t}),this.clearLoadedStyleNames(),nt.emit("options:change",t),nt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return gt.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return gt.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return gt.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return gt.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return gt.getPreset(r)},getLayerOrderCSS(t=""){return gt.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return gt.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return gt.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return gt.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),nt.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&nt.emit("theme:load"))}};var Au=0,ca=(()=>{class t{document=g(L);use(e,n={}){let r=!1,o=e,s=null,{immediate:l=!0,manual:a=!1,name:c=`style_${++Au}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:f=!1,props:m={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){o=e,Sr(s,{type:"text/css",media:d,nonce:p});let y=this.document.head;f&&y.firstChild?y.insertBefore(s,y.firstChild):y.appendChild(s),Ys(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:u,name:c,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Re={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},xu=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Du=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

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
`,B=(()=>{class t{name="base";useStyle=g(ca);theme=xu;css=Du;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(tt(e,{dt:Ee}));return o?this.useStyle.use(Zt(o),h({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>I.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>I.getCommon(this.name,e);getComponentTheme=e=>I.getComponent(this.name,e);getDirectiveTheme=e=>I.getDirective(this.name,e);getPresetTheme=(e,n,r)=>I.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>I.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=tt(this.css,{dt:Ee}),o=Zt(`${r}${e}`),s=Object.entries(n).reduce((l,[a,c])=>l.push(`${a}="${c}"`)&&l,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>I.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[I.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=tt(this.theme,{dt:Ee}),l=Zt(I.transformCSS(o,s)),a=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${a}>${l}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mu=(()=>{class t{theme=_t(void 0);csp=_t({nonce:void 0});isThemeChanged=!1;document=g(L);baseStyle=g(B);constructor(){le(()=>{nt.on("theme:change",e=>{Pe(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),le(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){I.clearLoadedStyleNames(),nt.clear()}onThemeChange(e){I.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!I.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,h({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,h({name:"global-variables"},s)),this.baseStyle.loadTheme(h({name:"global-style"},s),o),I.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Or=(()=>{class t extends Mu{ripple=_t(!1);platformId=g(at);inputStyle=_t("outlined");inputVariant=_t("outlined");overlayOptions={};csp=_t({nonce:void 0});filterMatchModeOptions={text:[P.STARTS_WITH,P.CONTAINS,P.NOT_CONTAINS,P.ENDS_WITH,P.EQUALS,P.NOT_EQUALS],numeric:[P.EQUALS,P.NOT_EQUALS,P.LESS_THAN,P.LESS_THAN_OR_EQUAL_TO,P.GREATER_THAN,P.GREATER_THAN_OR_EQUAL_TO],date:[P.DATE_IS,P.DATE_IS_NOT,P.DATE_BEFORE,P.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Z;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=h(h({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,theme:s,overlayOptions:l,translation:a}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),l&&(this.overlayOptions=l),a&&this.setTranslation(a),s&&this.setThemeConfig({theme:s,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lu=new N("PRIME_NG_CONFIG");function Ch(...t){let i=t?.map(n=>({provide:Lu,useValue:n,multi:!1})),e=bo(()=>{let n=g(Or);t?.forEach(r=>n.setConfig(r))});return xe([...i,e])}var ua=(()=>{class t extends B{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tt=(()=>{class t{document=g(L);platformId=g(at);el=g(Ht);injector=g(te);cd=g(se);renderer=g($e);config=g(Or);baseComponentStyle=g(ua);baseStyle=g(B);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=hn("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return ci(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!je(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{Re.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Re.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Re.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Re.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!I.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,h({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,h({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,h({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(h({name:"global-style"},this.styleOptions),o),I.setLoadedStyleName("common")}if(!I.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,h({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(h({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),I.setLoadedStyleName(this.componentStyle?.name)}if(!I.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,h({name:"layer-order",first:!0},this.styleOptions)),I.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,h({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Re.clearLoadedStyleNames(),nt.on("theme:change",e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:h({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=H({type:t,inputs:{dt:"dt"},features:[wt([ua,B]),It]})}return t})();var Ar=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=$=>{if($)return getComputedStyle($).getPropertyValue("position")==="relative"?$:o($.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),f=o(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},m,y;a.top+l+s.height>d.height?(m=a.top-f.top-s.height,e.style.transformOrigin="bottom",a.top+m<0&&(m=-1*a.top)):(m=l+a.top-f.top,e.style.transformOrigin="top");let C=a.left+s.width-d.width,D=a.left-f.left;s.width>d.width?y=(a.left-f.left)*-1:C>0?y=D-C:y=a.left-f.left,e.style.top=m+"px",e.style.left=y+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,l=o.width,a=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),m,y;u.top+a+s>f.height?(m=u.top+d-s,e.style.transformOrigin="bottom",m<0&&(m=d)):(m=a+u.top+d,e.style.transformOrigin="top"),u.left+l>f.width?y=Math.max(0,u.left+p+c-l):y=u.left+p,e.style.top=m+"px",e.style.left=y+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return o.test(a.getPropertyValue("overflow"))||o.test(a.getPropertyValue("overflowX"))||o.test(a.getPropertyValue("overflowY"))};for(let l of r){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let c=a.split(",");for(let u of c){let d=this.findSingle(l,u);d&&s(d)&&n.push(d)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-l,d=e.scrollTop,p=e.clientHeight,f=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+f>p&&(e.scrollTop=d+u-p+f)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,l=o/s;let a=setInterval(()=>{r=r-l,r<=0&&(r=0,clearInterval(a)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,l=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let l=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((a,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")a.push(c);else if(u==="object"){let d=Array.isArray(c)?r(o,c):Object.entries(c).map(([p,f])=>o==="style"&&(f||f===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?p:void 0);a=d.length?a.concat(d.filter(p=>!!p)):a}}return a},l)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let l=o.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),da=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Ar.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var pa=(()=>{class t extends Tt{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(at);document=g(L);host=g(Ht);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Fn(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Ar.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275dir=H({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",x],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[Lt,J]})}return t})();var $u=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
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
`,Nu={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":R(t.value)&&String(t.value).length===1,"p-badge-dot":et(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},ha=(()=>{class t extends B{name="badge";theme=$u;classes=Nu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var xr=(()=>{class t extends Tt{styleClass=St();style=St();badgeSize=St();size=St();severity=St();value=St();badgeDisabled=St(!1,{transform:x});_componentStyle=g(ha);containerClass=ae(()=>{let e="p-badge p-component";return R(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),et(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275cmp=lt({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(yo(r.style()),ie(r.containerClass()),vo("display",r.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[wt([ha]),J],decls:1,vars:1,template:function(n,r){n&1&&Nn(0),n&2&&kn(r.value())},dependencies:[$t,Ut],encapsulation:2,changeDetection:0})}return t})(),fa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ct({type:t});static \u0275inj=st({imports:[xr,Ut,Ut]})}return t})();var Pu=`
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
`,Fu=(()=>{class t extends B{name="baseicon";inlineStyles=Pu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Uu=["*"],ga=(()=>{class t extends Tt{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=et(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275cmp=lt({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",x],styleClass:"styleClass"},features:[wt([Fu]),Lt,J],ngContentSelectors:Uu,decls:1,vars:0,template:function(n,r){n&1&&(Ne(),ke(0))},encapsulation:2,changeDetection:0})}return t})();var ma=(()=>{class t extends ga{pathId;ngOnInit(){this.pathId="url(#"+hn()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275cmp=lt({type:t,selectors:[["SpinnerIcon"]],features:[J],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Kr(),re(0,"svg",0)(1,"g"),Ct(2,"path",1),oe(),re(3,"defs")(4,"clipPath",2),Ct(5,"rect",3),oe()()()),n&2&&(ie(r.getClassNames()),ut("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),U(),ut("clip-path",r.pathId),U(3),A("id",r.pathId))},encapsulation:2})}return t})();var ju=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
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
`,Hu={root:"p-ink"},ba=(()=>{class t extends B{name="ripple";theme=ju;classes=Hu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var va=(()=>{class t extends Tt{zone=g(yt);_componentStyle=g(ba);animationListener;mouseDownListener;timeout;constructor(){super(),le(()=>{Fn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Se(n,"p-ink-active"),!Cr(n)&&!wr(n)){let l=Math.max(Ws(this.el.nativeElement),Gs(this.el.nativeElement));n.style.height=l+"px",n.style.width=l+"px"}let r=qs(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-wr(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-Cr(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),li(n,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&Se(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Se(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Se(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ks(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=H({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[wt([ba]),J]})}return t})();var Bu=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
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
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,zu={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},ya=(()=>{class t extends B{name="button";theme=Bu;classes=zu;static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Wu=["content"],Vu=["loading"],qu=["icon"],Gu=["*"],Sa=t=>({class:t});function Ku(t,i){t&1&&So(0)}function Yu(t,i){if(t&1&&Ct(0,"span",8),t&2){let e=dt(3);A("ngClass",e.iconClass()),ut("aria-hidden",!0)("data-pc-section","loadingicon")}}function Zu(t,i){if(t&1&&Ct(0,"SpinnerIcon",9),t&2){let e=dt(3);A("styleClass",e.spinnerIconClass())("spin",!0),ut("aria-hidden",!0)("data-pc-section","loadingicon")}}function Qu(t,i){if(t&1&&(Mn(0),zt(1,Yu,1,3,"span",6)(2,Zu,1,4,"SpinnerIcon",7),Ln()),t&2){let e=dt(2);U(),A("ngIf",e.loadingIcon),U(),A("ngIf",!e.loadingIcon)}}function Ju(t,i){}function Xu(t,i){if(t&1&&zt(0,Ju,0,0,"ng-template",10),t&2){let e=dt(2);A("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function td(t,i){if(t&1&&(Mn(0),zt(1,Qu,3,2,"ng-container",2)(2,Xu,1,1,null,5),Ln()),t&2){let e=dt();U(),A("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),U(),A("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Ai(3,Sa,e.iconClass()))}}function ed(t,i){if(t&1&&Ct(0,"span",8),t&2){let e=dt(2);ie(e.icon),A("ngClass",e.iconClass()),ut("data-pc-section","icon")}}function nd(t,i){}function id(t,i){if(t&1&&zt(0,nd,0,0,"ng-template",10),t&2){let e=dt(2);A("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function rd(t,i){if(t&1&&(Mn(0),zt(1,ed,1,4,"span",11)(2,id,1,1,null,5),Ln()),t&2){let e=dt();U(),A("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),U(),A("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ai(3,Sa,e.iconClass()))}}function od(t,i){if(t&1&&(re(0,"span",12),Nn(1),oe()),t&2){let e=dt();ut("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),U(),kn(e.label)}}function sd(t,i){if(t&1&&Ct(0,"p-badge",13),t&2){let e=dt();A("value",e.badge)("severity",e.badgeSeverity)}}var ad=(()=>{class t extends Tt{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new vt;onFocus=new vt;onBlur=new vt;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return et(this.fluid)?!!n:this.fluid}_componentStyle=g(ya);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=_(t)))(r||t)}})();static \u0275cmp=lt({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&(Wt(o,Wu,5),Wt(o,Vu,5),Wt(o,qu,5),Wt(o,na,4)),n&2){let s;Vt(s=qt())&&(r.contentTemplate=s.first),Vt(s=qt())&&(r.loadingIconTemplate=s.first),Vt(s=qt())&&(r.iconTemplate=s.first),Vt(s=qt())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",x],loading:[2,"loading","loading",x],loadingIcon:"loadingIcon",raised:[2,"raised","raised",x],rounded:[2,"rounded","rounded",x],text:[2,"text","text",x],plain:[2,"plain","plain",x],severity:"severity",outlined:[2,"outlined","outlined",x],link:[2,"link","link",x],tabindex:[2,"tabindex","tabindex",wo],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",x],fluid:[2,"fluid","fluid",x],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[wt([ya]),Lt,J,It],ngContentSelectors:Gu,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(Ne(),re(0,"button",0),$n("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),ke(1),zt(2,Ku,1,0,"ng-container",1)(3,td,3,5,"ng-container",2)(4,rd,3,5,"ng-container",2)(5,od,2,3,"span",3)(6,sd,1,2,"p-badge",4),oe()),n&2&&(A("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),ut("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),U(2),A("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),U(),A("ngIf",r.loading),U(),A("ngIf",!r.loading),U(),A("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),U(),A("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[$t,xo,Do,Lo,Mo,va,pa,ma,fa,xr,Ut],encapsulation:2,changeDetection:0})}return t})(),Zf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ct({type:t});static \u0275inj=st({imports:[$t,ad,Ut,Ut]})}return t})();function Ca(t){let i=Pe(()=>t());return cd(i)?new Proxy(t,{get(e,n){return n in i?(fo(e[n])||Object.defineProperty(e,n,{value:ae(()=>e()[n]),configurable:!0}),Ca(e[n])):e[n]}}):t}var ld=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function cd(t){if(t===null||typeof t!="object"||ud(t))return!1;let i=Object.getPrototypeOf(t);if(i===Object.prototype)return!0;for(;i&&i!==Object.prototype;){if(ld.includes(i.constructor))return!1;i=Object.getPrototypeOf(i)}return i===Object.prototype}function ud(t){return typeof t?.[Symbol.iterator]=="function"}var dd=new WeakMap,it=Symbol("STATE_SOURCE");function eg(t,...i){t[it].update(e=>i.reduce((n,r)=>h(h({},n),typeof r=="function"?r(n):r),e)),fd(t)}function pd(t){return t[it]()}function hd(t){return dd.get(t[it])||[]}function fd(t){let i=hd(t);for(let e of i){let n=Pe(()=>pd(t));e(n)}}function ng(...t){let i=[...t],e=typeof i[0]=="function"?{}:i.shift(),n=i;return(()=>{class o{constructor(){let l=n.reduce((y,C)=>C(y),gd()),{stateSignals:a,props:c,methods:u,hooks:d}=l,p=h(h(h({},a),c),u);this[it]=l[it];for(let y in p)this[y]=p[y];let{onInit:f,onDestroy:m}=d;f&&f(),m&&g(Zr).onDestroy(m)}static \u0275fac=function(a){return new(a||o)};static \u0275prov=b({token:o,factory:o.\u0275fac,providedIn:e.providedIn||null})}return o})()}function gd(){return{[it]:_t({}),stateSignals:{},props:{},methods:{},hooks:{}}}function md(t){return i=>{let e=t(h(h(h({[it]:i[it]},i.stateSignals),i.props),i.methods));return Object.keys(e),M(h({},i),{props:h(h({},i.props),e)})}}function ig(t){return md(t)}function rg(t){return i=>{let e=t(h(h(h({[it]:i[it]},i.stateSignals),i.props),i.methods));return Object.keys(e),M(h({},i),{methods:h(h({},i.methods),e)})}}function og(t){return i=>{let e=typeof t=="function"?t():t,n=Object.keys(e);i[it].update(o=>h(h({},o),e));let r=n.reduce((o,s)=>{let l=ae(()=>i[it]()[s]);return M(h({},o),{[s]:Ca(l)})},{});return M(h({},i),{stateSignals:h(h({},i.stateSignals),r)})}}export{Uo as a,Ud as b,ll as c,Bl as d,Rt as e,es as f,op as g,sp as h,ap as i,Hs as j,zs as k,cu as l,uu as m,dp as n,Ws as o,pp as p,hp as q,fp as r,gp as s,du as t,mp as u,bp as v,Gs as w,vp as x,yp as y,et as z,R as A,bu as B,Ep as C,Rp as D,tt as E,Tp as F,hn as G,Bp as H,na as I,Ut as J,Vp as K,B as L,Ch as M,Tt as N,da as O,pa as P,xr as Q,fa as R,ga as S,va as T,ad as U,Zf as V,eg as W,ng as X,ig as Y,rg as Z,og as _};
