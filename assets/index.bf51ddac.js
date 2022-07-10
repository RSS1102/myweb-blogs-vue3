import{r as e,o as t,c as n,a as r,d as o,b as s,u as i,e as a,f as u,w as c,g as f,h as l,n as d,i as p,j as h,k as m,l as g,m as v}from"./vendor.ebd0896b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var b=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const y={id:"app"};var w=b({},[["render",function(o,s){const i=e("router-view");return t(),n("div",y,[r(i)])}]]);const x={},E=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/myweb-blogs-vue3/${e}`)in x)return;x[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},_=[{path:"/home/index",name:"home",component:()=>E((()=>import("./index.cd91b301.js")),["assets/index.cd91b301.js","assets/index.9bccac6f.css","assets/vendor.ebd0896b.js"])},{path:"/blogs/index/",redirect:"/blogs/index/0"},{path:"/blogs/index/:id",name:"blogs",component:()=>E((()=>import("./index.fd9bc9f1.js")),["assets/index.fd9bc9f1.js","assets/index.2360f41d.css","assets/vendor.ebd0896b.js","assets/index.8a5090f9.js"])},{path:"/product/index",name:"product",component:()=>E((()=>import("./index.cdfda1e3.js")),["assets/index.cdfda1e3.js","assets/index.7ec2b4b8.css","assets/vendor.ebd0896b.js","assets/index.8a5090f9.js"])},{path:"/communication/index",name:"communication",component:()=>E((()=>import("./index.fd8e9e90.js")),["assets/index.fd8e9e90.js","assets/index.a3c71c65.css","assets/vendor.ebd0896b.js"])},{path:"/demo/index",name:"demo",component:()=>E((()=>import("./index.c7e6735a.js")),["assets/index.c7e6735a.js","assets/vendor.ebd0896b.js"])}];const O=l("首页"),S=l("我的博客"),j=l("作品展示"),C=l("交流"),k=l("Demo");var T=b(o({props:{textColor:{type:String},backfroundColor:{type:String}},setup(n){const o=n,l=s("/myweb-blogs-vue3/assets/favicon.35e1006a.ico"),d=()=>{},p=i();let h=a((()=>p.path));return(s,i)=>{const a=e("el-image"),p=e("el-menu-item"),m=e("el-menu");return t(),u(m,{mode:"horizontal","default-active":f(h),"text-color":n.textColor,"background-color":o.backfroundColor,router:""},{default:c((()=>[r(a,{src:l.value,onClick:d},null,8,["src"]),r(p,{index:"/home/index"},{default:c((()=>[O])),_:1}),r(p,{index:"/blogs/index"},{default:c((()=>[S])),_:1}),r(p,{index:"/product/index"},{default:c((()=>[j])),_:1}),r(p,{index:"/communication/index"},{default:c((()=>[C])),_:1}),r(p,{index:"/demo/index"},{default:c((()=>[k])),_:1})])),_:1},8,["default-active","text-color","background-color"])}}}),[["__scopeId","data-v-c2f7326a"]]);var R=b(o({setup:n=>(n,o)=>{const s=e("el-header"),i=e("router-view"),a=e("el-main"),l=e("el-container");return t(),u(l,null,{default:c((()=>[r(s,{style:d({display:"/home/index"==f(ft).currentRoute.value.fullPath?"none":"block"})},{default:c((()=>[r(T,{textColor:"#000",backfroundColor:"#fff"})])),_:1},8,["style"]),r(a,null,{default:c((()=>[r(i)])),_:1})])),_:1})}}),[["__scopeId","data-v-a83bd3b0"]]),N={exports:{}},A=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},P=A,L=Object.prototype.toString;function U(e){return"[object Array]"===L.call(e)}function B(e){return void 0===e}function D(e){return null!==e&&"object"==typeof e}function q(e){if("[object Object]"!==L.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function I(e){return"[object Function]"===L.call(e)}function F(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),U(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var J={isArray:U,isArrayBuffer:function(e){return"[object ArrayBuffer]"===L.call(e)},isBuffer:function(e){return null!==e&&!B(e)&&null!==e.constructor&&!B(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:D,isPlainObject:q,isUndefined:B,isDate:function(e){return"[object Date]"===L.call(e)},isFile:function(e){return"[object File]"===L.call(e)},isBlob:function(e){return"[object Blob]"===L.call(e)},isFunction:I,isStream:function(e){return D(e)&&I(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:F,merge:function e(){var t={};function n(n,r){q(t[r])&&q(n)?t[r]=e(t[r],n):q(n)?t[r]=e({},n):U(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)F(arguments[r],n);return t},extend:function(e,t,n){return F(t,(function(t,r){e[r]=n&&"function"==typeof t?P(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},H=J;function M(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var V=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(H.isURLSearchParams(t))r=t.toString();else{var o=[];H.forEach(t,(function(e,t){null!=e&&(H.isArray(e)?t+="[]":e=[e],H.forEach(e,(function(e){H.isDate(e)?e=e.toISOString():H.isObject(e)&&(e=JSON.stringify(e)),o.push(M(t)+"="+M(e))})))})),r=o.join("&")}if(r){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},$=J;function z(){this.handlers=[]}z.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},z.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},z.prototype.forEach=function(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var W=z,X=J,K=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},G=K,Q=function(e,t,n,r,o){var s=new Error(e);return G(s,t,n,r,o)},Y=Q,Z=J,ee=Z.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),Z.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Z.isString(r)&&i.push("path="+r),Z.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},te=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},ne=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},re=J,oe=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],se=J,ie=se.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=se.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function ae(e){this.message=e}ae.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ae.prototype.__CANCEL__=!0;var ue=ae,ce=J,fe=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(Y("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},le=ee,de=V,pe=function(e,t){return e&&!te(t)?ne(e,t):t},he=function(e){var t,n,r,o={};return e?(re.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=re.trim(e.substr(0,r)).toLowerCase(),n=re.trim(e.substr(r+1)),t){if(o[t]&&oe.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},me=ie,ge=Q,ve=Ce,be=ue,ye=function(e){return new Promise((function(t,n){var r,o=e.data,s=e.headers,i=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}ce.isFormData(o)&&delete s["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(c+":"+f)}var l=pe(e.baseURL,e.url);function d(){if(u){var r="getAllResponseHeaders"in u?he(u.getAllResponseHeaders()):null,o={data:i&&"text"!==i&&"json"!==i?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};fe((function(e){t(e),a()}),(function(e){n(e),a()}),o),u=null}}if(u.open(e.method.toUpperCase(),de(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(ge("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){n(ge("Network Error",e,null,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||ve.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(ge(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},ce.isStandardBrowserEnv()){var p=(e.withCredentials||me(l))&&e.xsrfCookieName?le.read(e.xsrfCookieName):void 0;p&&(s[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&ce.forEach(s,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete s[t]:u.setRequestHeader(t,e)})),ce.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&"json"!==i&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new be("canceled"):e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null),u.send(o)}))},we=J,xe=function(e,t){X.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Ee=K,_e={"Content-Type":"application/x-www-form-urlencoded"};function Oe(e,t){!we.isUndefined(e)&&we.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Se,je={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Se=ye),Se),transformRequest:[function(e,t){return xe(t,"Accept"),xe(t,"Content-Type"),we.isFormData(e)||we.isArrayBuffer(e)||we.isBuffer(e)||we.isStream(e)||we.isFile(e)||we.isBlob(e)?e:we.isArrayBufferView(e)?e.buffer:we.isURLSearchParams(e)?(Oe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):we.isObject(e)||t&&"application/json"===t["Content-Type"]?(Oe(t,"application/json"),function(e,t,n){if(we.isString(e))try{return(t||JSON.parse)(e),we.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||je.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&we.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(o){if("SyntaxError"===s.name)throw Ee(s,this,"E_JSON_PARSE");throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};we.forEach(["delete","get","head"],(function(e){je.headers[e]={}})),we.forEach(["post","put","patch"],(function(e){je.headers[e]=we.merge(_e)}));var Ce=je,ke=J,Te=Ce,Re=function(e){return!(!e||!e.__CANCEL__)},Ne=J,Ae=function(e,t,n){var r=this||Te;return ke.forEach(n,(function(n){e=n.call(r,e,t)})),e},Pe=Re,Le=Ce,Ue=ue;function Be(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ue("canceled")}var De=J,qe=function(e,t){t=t||{};var n={};function r(e,t){return De.isPlainObject(e)&&De.isPlainObject(t)?De.merge(e,t):De.isPlainObject(t)?De.merge({},t):De.isArray(t)?t.slice():t}function o(n){return De.isUndefined(t[n])?De.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!De.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return De.isUndefined(t[n])?De.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return De.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);De.isUndefined(r)&&t!==a||(n[e]=r)})),n},Ie="0.24.0",Fe=Ie,Je={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Je[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var He={};Je.transitional=function(e,t,n){return function(r,o,s){if(!1===e)throw new Error(function(e,t){return"[Axios v"+Fe+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")));return t&&!He[o]&&(He[o]=!0),!e||e(r,o,s)}};var Me=J,Ve=V,$e=W,ze=function(e){return Be(e),e.headers=e.headers||{},e.data=Ae.call(e,e.data,e.headers,e.transformRequest),e.headers=Ne.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ne.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Le.adapter)(e).then((function(t){return Be(e),t.data=Ae.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Pe(t)||(Be(e),t&&t.response&&(t.response.data=Ae.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},We=qe,Xe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],i=t[s];if(i){var a=e[s],u=void 0===a||i(a,s,e);if(!0!==u)throw new TypeError("option "+s+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:Je},Ke=Xe.validators;function Ge(e){this.defaults=e,this.interceptors={request:new $e,response:new $e}}Ge.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=We(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&Xe.assertOptions(t,{silentJSONParsing:Ke.transitional(Ke.boolean),forcedJSONParsing:Ke.transitional(Ke.boolean),clarifyTimeoutError:Ke.transitional(Ke.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!r){var i=[ze,void 0];for(Array.prototype.unshift.apply(i,n),i=i.concat(s),o=Promise.resolve(e);i.length;)o=o.then(i.shift(),i.shift());return o}for(var a=e;n.length;){var u=n.shift(),c=n.shift();try{a=u(a)}catch(f){c(f);break}}try{o=ze(a)}catch(f){return Promise.reject(f)}for(;s.length;)o=o.then(s.shift(),s.shift());return o},Ge.prototype.getUri=function(e){return e=We(this.defaults,e),Ve(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Me.forEach(["delete","get","head","options"],(function(e){Ge.prototype[e]=function(t,n){return this.request(We(n||{},{method:e,url:t,data:(n||{}).data}))}})),Me.forEach(["post","put","patch"],(function(e){Ge.prototype[e]=function(t,n,r){return this.request(We(r||{},{method:e,url:t,data:n}))}}));var Qe=Ge,Ye=ue;function Ze(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Ye(e),t(n.reason))}))}Ze.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ze.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Ze.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Ze.source=function(){var e;return{token:new Ze((function(t){e=t})),cancel:e}};var et=Ze,tt=J,nt=A,rt=Qe,ot=qe;var st=function e(t){var n=new rt(t),r=nt(rt.prototype.request,n);return tt.extend(r,rt.prototype,n),tt.extend(r,n),r.create=function(n){return e(ot(t,n))},r}(Ce);st.Axios=rt,st.Cancel=ue,st.CancelToken=et,st.isCancel=Re,st.VERSION=Ie,st.all=function(e){return Promise.all(e)},st.spread=function(e){return function(t){return e.apply(null,t)}},st.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},N.exports=st,N.exports.default=st;var it=N.exports;const at={baseURL:"https://cokbbs.games:3456/api/",headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:1e4,withCredentials:!1};function ut(e){return new Promise(((t,n)=>{const r=it.create({baseURL:at.baseURL,headers:at.headers,timeout:at.timeout,withCredentials:at.withCredentials});r.interceptors.request.use((e=>e),(e=>{"ECONNABORTED"===e.code&&e.message.indexOf("tiemout");const t=e.respones;if(t){e=t.data;const n=t.status;ft.push({path:`/error/${n}`})}})),r.interceptors.response.use((e=>{let t;return null==e.data?t.JSON.parse(e.request.responseText):t=e.data,t}),(e=>{if(e&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录";break;case 403:e.message="拒绝访问";break;case 404:e.message=`请求地址出错: ${e.response.config.url}`;break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:e.message="请重试"}return Promise.reject(e)})),r(e).then((e=>(t(e),!1))).catch((e=>{n(e)}))}))}const ct=[{path:"/",redirect:"/home/index",name:"index",component:R,children:[..._]}],ft=p({history:h(),routes:ct});ft.beforeEach(((e,t)=>{var n;let r={name:e.name,path:e.path,paramsKey:null==(n=e.params)?void 0:n.id,vitstDate:new Date};return ut({url:"/monitorlogs/saveMonitor",method:"post",data:r}),!0}));const lt=m(w);lt.use(g).use(ft).mount("#app"),lt.component("loading",v);export{ut as $,b as _,T as t};
