import{a as tt,c as M,f as et}from"./chunk-43KOOP77.js";import{m as L,o as O,q as E}from"./chunk-362VMQOR.js";import{$a as K,Aa as u,Da as m,Fa as F,I as f,J as d,Lb as Q,Ma as J,Na as S,Nb as X,O as v,Oa as W,Ob as h,Pa as y,Ra as b,Va as n,W as z,Wa as r,X as k,Xa as a,Ya as q,Z as s,Za as G,ab as _,bb as Y,cb as T,db as w,hb as H,ib as p,jb as B,kb as C,lb as g,nb as I,oa as l,ob as x,pb as P,wa as U,wb as V,za as c}from"./chunk-N3VLPSI5.js";import"./chunk-2NFLSA4Y.js";var dt=({dt:t})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${t("icon.size")} / 2));
    color: ${t("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
    margin-top: calc(-1 * (${t("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
    margin-top: calc(-1 * (${t("form.field.lg.font.size")} / 2));
}
`,ct={root:"p-iconfield"},it=(()=>{class t extends O{name="iconfield";theme=dt;classes=ct;static \u0275fac=(()=>{let i;return function(e){return(i||(i=s(t)))(e||t)}})();static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})();var ut=["*"],N=(()=>{class t extends E{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=v(it);static \u0275fac=(()=>{let i;return function(e){return(i||(i=s(t)))(e||t)}})();static \u0275cmp=c({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(o,e){o&2&&(b(e._styleClass),y("p-iconfield-left",e.iconPosition==="left")("p-iconfield-right",e.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[g([it]),m],ngContentSelectors:ut,decls:1,vars:0,template:function(o,e){o&1&&(T(),w(0))},dependencies:[h],encapsulation:2,changeDetection:0})}return t})(),ot=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=u({type:t});static \u0275inj=d({imports:[N]})}return t})();var ft=({dt:t})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${t("divider.horizontal.margin")};
    padding: ${t("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${t("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${t("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${t("divider.vertical.margin")};
    padding: ${t("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${t("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${t("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${t("divider.content.background")};
    color: ${t("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,mt={root:({props:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},gt={root:({props:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},nt=(()=>{class t extends O{name="divider";theme=ft;classes=gt;inlineStyles=mt;static \u0275fac=(()=>{let i;return function(e){return(i||(i=s(t)))(e||t)}})();static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})();var vt=["*"],R=(()=>{class t extends E{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=v(nt);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let i;return function(e){return(i||(i=s(t)))(e||t)}})();static \u0275cmp=c({type:t,selectors:[["p-divider"]],hostVars:33,hostBindings:function(o,e){o&2&&(J("aria-orientation",e.layout)("data-pc-name","divider")("role","separator"),b(e.hostClass),W("justify-content",e.layout==="horizontal"?e.align==="center"||e.align===void 0?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null)("align-items",e.layout==="vertical"?e.align==="center"||e.align===void 0?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null),y("p-divider",!0)("p-component",!0)("p-divider-horizontal",e.layout==="horizontal")("p-divider-vertical",e.layout==="vertical")("p-divider-solid",e.type==="solid")("p-divider-dashed",e.type==="dashed")("p-divider-dotted",e.type==="dotted")("p-divider-left",e.layout==="horizontal"&&(!e.align||e.align==="left"))("p-divider-center",e.layout==="horizontal"&&e.align==="center"||e.layout==="vertical"&&(!e.align||e.align==="center"))("p-divider-right",e.layout==="horizontal"&&e.align==="right")("p-divider-top",e.layout==="vertical"&&e.align==="top")("p-divider-bottom",e.layout==="vertical"&&e.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[g([nt]),m],ngContentSelectors:vt,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(o,e){o&1&&(T(),n(0,"div",0),w(1),r())},dependencies:[h,L],encapsulation:2,changeDetection:0})}return t})(),rt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=u({type:t});static \u0275inj=d({imports:[R]})}return t})();var st=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=u({type:t});static \u0275inj=d({})}return t})();var bt={root:"p-inputicon"},lt=(()=>{class t extends O{name="inputicon";classes=bt;static \u0275fac=(()=>{let i;return function(e){return(i||(i=s(t)))(e||t)}})();static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})(),Tt=["*"],A=(()=>{class t extends E{styleClass;get hostClasses(){return this.styleClass}_componentStyle=v(lt);static \u0275fac=(()=>{let i;return function(e){return(i||(i=s(t)))(e||t)}})();static \u0275cmp=c({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(o,e){o&2&&(b(e.hostClasses),y("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[g([lt]),m],ngContentSelectors:Tt,decls:1,vars:0,template:function(o,e){o&1&&(T(),w(0))},dependencies:[h,L],encapsulation:2,changeDetection:0})}return t})(),at=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=u({type:t});static \u0275inj=d({imports:[A,L,L]})}return t})();function It(t,Z){if(t&1&&(q(0),a(1,"ng-contianer",13),G()),t&2){Y();let i=H(40);l(),S("ngTemplateOutlet",i)}}function xt(t,Z){t&1&&(n(0,"p-iconfield",26),a(1,"p-inputicon",27)(2,"input",28),r(),n(3,"p-iconfield",26),a(4,"p-inputicon",29)(5,"input",30),r())}function Lt(t,Z){t&1&&(n(0,"p-iconfield",26),a(1,"p-inputicon",29)(2,"input",31),r())}var Pe=(()=>{class t{keyLangs=M;isRegister=U(!1);actionHint=V(()=>this.isRegister()?M.SIGN_IN:M.SIGN_UP);questionHint=V(()=>this.isRegister()?M.YOU_HAD_ACCOUNT:M.YOU_NOT_HAD_ACCOUNT);signIn(){console.log("signIn...")}signUp(){console.log("signUp...")}changeMode(){document.querySelector("html")?.classList.toggle(tt)}changeTab(){this.isRegister.set(!this.isRegister())}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["pk-sign-in"]],decls:41,vars:17,consts:[["signInTemplateRef",""],["signUpTemplateRef",""],[1,"w-screen","h-screen"],[1,"text-xl","text-primary","p-4"],[1,"w-full","overflow-hidden","flex","flex-column","justify-content-center","align-items-center",2,"height","calc(100vh - 72.5px)","margin-top","-36px"],[1,"form-wrapper","bg-content-primary","w-20rem","h-fit","border-round-xl","p-4","border-min","border-solid"],[1,"form-header","text-center","flex","flex-column","row-gap-3"],[1,"flex","flex-column","row-gap-2"],[1,"pi","pi-user","text-2xl"],[1,"platform-name","text-md"],[1,"text-primary"],[1,"block","text-center","text-2xl"],[1,"flex","flex-column","mt-4"],[3,"ngTemplateOutlet"],[4,"ngIf"],["type","button",1,"mb-2","mt-2","w-full","px-4","py-2","border-round-md","bg-primary","border-none","outline-none","hover:bg-primary-300","transition-duration-200","cursor-pointer",3,"click"],[1,"form-hint"],[1,"text-xs","text-color"],[1,"text-primary","hover:underline","cursor-pointer","transition-duration-200","hover:text-primary-300",3,"click"],["align","center","type","solid"],[1,"text-primary","text-xs"],[1,"form-socia","flex","row-gap-2","justify-content-center"],["type","button",1,"gap-2","cursor-pointer","bg-transparent","border-none","outlint-none"],[1,"pi","pi-github","text-2xl"],["type","button",1,"gap-2","flex","cursor-pointer","bg-transparent","border-none","outlint-none"],["src","icons/google.svg","width","25","height","25","alt","Google icon"],[1,"border-none","outline-none","mb-2"],["styleClass","pi pi-email"],["type","text","pInputText","","placeholder","Email",1,"border-min","w-full","py-2","text-xs","bg-content-primary","border-solid","transition-duration-200","focus:border-primary","border-round-md","px-2","outline-none"],["styleClass","pi pi-password"],["type","password","pInputText","","placeholder","Password",1,"border-min","w-full","py-2","text-xs","bg-content-primary","border-solid","transition-duration-200","focus:border-primary","border-round-md","px-2","outline-none"],["type","password","pInputText","","placeholder","Confirm password",1,"border-min","w-full","py-2","text-xs","bg-content-primary","border-solid","transition-duration-200","focus:border-primary","border-round-md","px-2","outline-none"]],template:function(o,e){if(o&1){let D=K();n(0,"div",2)(1,"div",3),p(2,"T\xE0ng Kinh Code"),r(),n(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7),a(7,"span",8),n(8,"span",9),p(9,"TangKinh"),n(10,"span",10),p(11,"Code"),r()()(),n(12,"span",11),p(13),I(14,"tr"),r()(),n(15,"form",12),a(16,"ng-contianer",13),F(17,It,2,1,"ng-container",14),n(18,"button",15),_("click",function(){return z(D),k(e.signIn())}),p(19),I(20,"tr"),r(),n(21,"div",16)(22,"span",17),p(23),I(24,"tr"),n(25,"span",18),_("click",function(){return z(D),k(e.changeTab())}),p(26),I(27,"tr"),r()()(),n(28,"p-divider",19)(29,"span",20),p(30),I(31,"tr"),r()(),n(32,"div",21)(33,"button",22),a(34,"span",23),r(),n(35,"button",24),a(36,"img",25),r()()()()()(),F(37,xt,6,0,"ng-template",null,0,P)(39,Lt,3,0,"ng-template",null,1,P)}if(o&2){let D=H(38);l(13),C(" ",x(14,7,e.keyLangs.SIGN_IN)," "),l(3),S("ngTemplateOutlet",D),l(),S("ngIf",e.isRegister()),l(2),C(" ",x(20,9,e.keyLangs.SIGN_IN)," "),l(4),C("",x(24,11,e.questionHint())," "),l(3),B(x(27,13,e.actionHint())),l(4),B(x(31,15,e.keyLangs.OR))}},dependencies:[h,Q,X,at,A,ot,N,rt,R,st,et],styles:[".form-wrapper[_ngcontent-%COMP%]{border-color:var(--primary-color)}[_nghost-%COMP%]     .pk-dark .form-wrapper{border-color:var(--primary-50)!important}"],changeDetection:0})}return t})();export{Pe as SignInComponent};
