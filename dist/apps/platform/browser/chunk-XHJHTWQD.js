import{a as L}from"./chunk-NXI7JGRQ.js";import"./chunk-WRETKZLA.js";import"./chunk-KKPH6MQK.js";import{R as H,S as v,U,W as K,f as G}from"./chunk-3WJWDJZJ.js";import{$a as h,Db as C,Fb as _,Gb as M,Ib as F,Ka as a,Lb as O,Mb as $,N as w,Nb as j,O as x,Ob as N,Pb as R,T as l,Va as u,Wa as k,Yb as E,Za as I,Zb as Q,_a as B,ca as y,gb as s,hb as r,ib as m,kb as P,lb as g,mc as V,oc as A,pc as z,qb as p,qc as q,rb as d,rc as J,sb as b,vb as D,yb as f}from"./chunk-24GKCPYZ.js";import"./chunk-4CLCTAJ7.js";var Z=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,ee={root:({instance:e})=>["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},W=(()=>{class e extends U{name="progressbar";theme=Z;classes=ee;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var te=["content"],ne=(e,o)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":o}),ie=e=>({$implicit:e});function re(e,o){if(e&1&&(p(0,"div"),F(1),d()),e&2){let t=f(2);m("display",t.value!=null&&t.value!==0?"flex":"none"),s("data-pc-section","label"),a(),O("",t.value,"",t.unit,"")}}function ae(e,o){e&1&&D(0)}function se(e,o){if(e&1&&(p(0,"div",3)(1,"div",4),h(2,re,2,5,"div",5)(3,ae,1,0,"ng-container",6),d()()),e&2){let t=f();g(t.valueStyleClass),m("width",t.value+"%")("background",t.color),r("ngClass","p-progressbar-value p-progressbar-value-animate"),s("data-pc-section","value"),a(2),r("ngIf",t.showValue&&!t.contentTemplate&&!t._contentTemplate),a(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",N(11,ie,t.value))}}function oe(e,o){if(e&1&&(p(0,"div",7),b(1,"div",8),d()),e&2){let t=f();g(t.valueStyleClass),r("ngClass","p-progressbar-indeterminate-container"),s("data-pc-section","container"),a(),m("background",t.color),s("data-pc-section","value")}}var T=(()=>{class e extends K{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=l(W);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=u({type:e,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,S){if(i&1&&(C(S,te,4),C(S,H,4)),i&2){let c;_(c=M())&&(n.contentTemplate=c.first),_(c=M())&&(n.templates=c)}},inputs:{value:[2,"value","value",Q],showValue:[2,"showValue","showValue",E],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[$([W]),B,I],decls:3,vars:14,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(p(0,"div",0),h(1,se,4,13,"div",1)(2,oe,2,7,"div",2),d()),i&2&&(g(n.styleClass),r("ngStyle",n.style)("ngClass",R(11,ne,n.mode==="determinate",n.mode==="indeterminate")),s("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root"),a(),r("ngIf",n.mode==="determinate"),a(),r("ngIf",n.mode==="indeterminate"))},dependencies:[J,V,A,q,z,v],encapsulation:2,changeDetection:0})}return e})(),X=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=k({type:e});static \u0275inj=x({imports:[T,v,v]})}return e})();var pe=()=>({height:"4px"}),De=(()=>{class e{authStore=l(L);activatedRoute=l(G);ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.authStore.oauthSignIn({token:t.code,credentialType:"GITHUB"})})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=u({type:e,selectors:[["pk-oauth-redirect"]],decls:1,vars:3,consts:[["mode","indeterminate"]],template:function(i,n){i&1&&b(0,"p-progressbar",0),i&2&&P(j(2,pe))},dependencies:[X,T],encapsulation:2,changeDetection:0})}return e})();export{De as OauthRedirectComponent};
