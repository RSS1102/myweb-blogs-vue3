import{r as u,o as p,c as C,a as c,d as v,b as w,u as A,e as L,f as x,w as a,g,h as d,n as O,i as P,j as N,k as R,l as I,m as j}from"./vendor.0ad7e70e.js";const D=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};D();var f=(i,s)=>{const r=i.__vccOpts||i;for(const[o,e]of s)r[o]=e;return r};const V={},$={id:"app"};function S(i,s){const r=u("router-view");return p(),C("div",$,[c(r)])}var T=f(V,[["render",S]]);const B="modulepreload",y={},H="/test-workflow/",_=function(s,r){return!r||r.length===0?s():Promise.all(r.map(o=>{if(o=`${H}${o}`,o in y)return;y[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":B,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((h,m)=>{n.addEventListener("load",h),n.addEventListener("error",m)})})).then(()=>s())},M=[{path:"/home/index",Name:"home",component:()=>_(()=>import("./index.a041df59.js"),["assets/index.a041df59.js","assets/index.9bccac6f.css","assets/vendor.0ad7e70e.js"])},{path:"/blogs/index/",redirect:"/blogs/index/0"},{path:"/blogs/index/:id",Name:"blogs",component:()=>_(()=>import("./index.bf5f8936.js"),["assets/index.bf5f8936.js","assets/index.ae3d0f01.css","assets/vendor.0ad7e70e.js","assets/index.6de0398f.js"])},{path:"/product/index",Name:"product",component:()=>_(()=>import("./index.bc6979d7.js"),["assets/index.bc6979d7.js","assets/index.7ec2b4b8.css","assets/vendor.0ad7e70e.js","assets/index.6de0398f.js"])},{path:"/communication/index",Name:"communication",component:()=>_(()=>import("./index.1d9b9932.js"),["assets/index.1d9b9932.js","assets/index.a194e99d.css","assets/vendor.0ad7e70e.js"])},{path:"/demo/index",Name:"demo",component:()=>_(()=>import("./index.07aa6f6f.js"),["assets/index.07aa6f6f.js","assets/vendor.0ad7e70e.js"])}];var q="/test-workflow/assets/favicon.35e1006a.ico";const z=d("\u9996\u9875"),F=d("\u6211\u7684\u535A\u5BA2"),W=d("\u4F5C\u54C1\u5C55\u793A"),K=d("\u4EA4\u6D41"),U=d("Demo"),G=v({props:{textColor:{type:String},backfroundColor:{type:String}},setup(i){const s=i,r=w(q),o=()=>{},e=A();let t=L(()=>e.path);return(n,h)=>{const m=u("el-image"),l=u("el-menu-item"),E=u("el-menu");return p(),x(E,{mode:"horizontal","default-active":g(t),"text-color":i.textColor,"background-color":s.backfroundColor,router:""},{default:a(()=>[c(m,{src:r.value,onClick:o},null,8,["src"]),c(l,{index:"/home/index"},{default:a(()=>[z]),_:1}),c(l,{index:"/blogs/index"},{default:a(()=>[F]),_:1}),c(l,{index:"/product/index"},{default:a(()=>[W]),_:1}),c(l,{index:"/communication/index"},{default:a(()=>[K]),_:1}),c(l,{index:"/demo/index"},{default:a(()=>[U]),_:1})]),_:1},8,["default-active","text-color","background-color"])}}});var J=f(G,[["__scopeId","data-v-c2f7326a"]]);const Q=v({setup(i){return(s,r)=>{const o=u("el-header"),e=u("router-view"),t=u("el-main"),n=u("el-container");return p(),x(n,null,{default:a(()=>[c(o,{style:O({display:g(b).currentRoute.value.fullPath=="/home/index"?"none":"block"})},{default:a(()=>[c(J,{textColor:"#000",backfroundColor:"#fff"})]),_:1},8,["style"]),c(t,null,{default:a(()=>[c(e)]),_:1})]),_:1})}}});var X=f(Q,[["__scopeId","data-v-a83bd3b0"]]);const Y=[{path:"/",redirect:"/home/index",component:X,children:[...M]}],b=P({history:N(),routes:Y});const k=R(T);k.use(I).use(b).mount("#app");k.component("loading",j);export{f as _,b as r,J as t};
