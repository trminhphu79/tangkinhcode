import{N as a,O as m,P as l,Q as h,R as S,S as d}from"./chunk-GHE64M4J.js";import{g as u}from"./chunk-KJSTXW46.js";import{Gb as p,T as r,Ua as o,Xb as s,pb as i,qb as n,rb as c}from"./chunk-DY72FOF2.js";import"./chunk-4CLCTAJ7.js";var f={loading:!1,scriptures:[]};var g=l({providedIn:"root"},d(f),h(t=>({count:s(()=>t.scriptures().length)})),S(t=>({createScripture(){console.log("test"),m(t,{scriptures:[...t.scriptures(),{author:"Tr\u1EA7n \u0110\xECnh Kh\xF4i"+new Date().getTime(),content:"Kh\xF4i chicken "+new Date().getTime()}]})},_privateMethod(){console.timeLog("privateMethod")}})));var B=(()=>{class t{scriptureStore=r(g);count=this.scriptureStore.count;scriptures=this.scriptureStore.scriptures;createScripture(){this.scriptureStore.createScripture()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["pk-scriptures"]],decls:3,vars:0,consts:[[1,"text-2xl"]],template:function(e,v){e&1&&(i(0,"span",0),p(1,"Welcome t\xF4n gi\u1EA3 gh\xE9 th\u0103m M\u1ED9ng \u1EA2o Qu\u1ED1c"),n(),c(2,"router-outlet"))},dependencies:[a,u],encapsulation:2,changeDetection:0})}return t})();export{B as ScripturesComponent};