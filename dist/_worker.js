var xt=Object.defineProperty;var Me=t=>{throw TypeError(t)};var yt=(t,e,s)=>e in t?xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>yt(t,typeof e!="symbol"?e+"":e,s),$e=(t,e,s)=>e.has(t)||Me("Cannot "+s);var o=(t,e,s)=>($e(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?Me("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,r)=>($e(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),x=(t,e,s)=>($e(t,e,"access private method"),s);var Be=(t,e,s,r)=>({set _(n){f(t,e,n,s)},get _(){return o(t,e,r)}});var Ue=(t,e,s)=>(r,n)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let l,c=!1,h;if(t[d]?(h=t[d][0][0],r.req.routeIndex=d):h=d===t.length&&n||void 0,h)try{l=await h(r,()=>a(d+1))}catch(u){if(u instanceof Error&&e)r.error=u,l=await e(u,r),c=!0;else throw u}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},vt=Symbol(),bt=async(t,e=Object.create(null))=>{const{all:s=!1,dot:r=!1}=e,i=(t instanceof rt?t.raw.headers:t.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?wt(t,{all:s,dot:r}):{}};async function wt(t,e){const s=await t.formData();return s?Et(s,e):{}}function Et(t,e){const s=Object.create(null);return t.forEach((r,n)=>{e.all||n.endsWith("[]")?kt(s,n,r):s[n]=r}),e.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Rt(s,r,n),delete s[r])}),s}var kt=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},Rt=(t,e,s)=>{let r=t;const n=e.split(".");n.forEach((i,a)=>{a===n.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Qe=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},It=t=>{const{groups:e,path:s}=St(t),r=Qe(s);return Ct(r,e)},St=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return e.push([n,s]),n}),{groups:e,path:t}},Ct=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[r]=e[s];for(let n=t.length-1;n>=0;n--)if(t[n].includes(r)){t[n]=t[n].replace(r,e[s][1]);break}}return t},Re={},Ot=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${t}#${e}`;return Re[r]||(s[2]?Re[r]=e&&e[0]!==":"&&e[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:Re[r]=[t,s[1],!0]),Re[r]}return null},Te=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},jt=t=>Te(t,decodeURI),Ze=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let r=s;for(;r<e.length;r++){const n=e.charCodeAt(r);if(n===37){const i=e.indexOf("?",r),a=e.slice(s,i===-1?void 0:i);return jt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(n===63)break}return e.slice(s,r)},Dt=t=>{const e=Ze(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},se=(t,e,...s)=>(s.length&&(e=se(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),et=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let r="";return e.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const i=n.replace("?","");r+="/"+i,s.push(r)}else r+="/"+n}),s.filter((n,i,a)=>a.indexOf(n)===i)},Le=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Te(t,st):t):t,tt=(t,e,s)=>{let r;if(!s&&e&&!/[%+]/.test(e)){let a=t.indexOf("?",8);if(a===-1)return;for(t.startsWith(e,a+1)||(a=t.indexOf(`&${e}`,a+1));a!==-1;){const d=t.charCodeAt(a+e.length+1);if(d===61){const l=a+e.length+2,c=t.indexOf("&",l);return Le(t.slice(l,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";a=t.indexOf(`&${e}`,a+1)}if(r=/[%+]/.test(t),!r)return}const n={};r??(r=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){const a=t.indexOf("&",i+1);let d=t.indexOf("=",i);d>a&&a!==-1&&(d=-1);let l=t.slice(i+1,d===-1?a===-1?void 0:a:d);if(r&&(l=Le(l)),i=a,l==="")continue;let c;d===-1?c="":(c=t.slice(d+1,a===-1?void 0:a),r&&(c=Le(c))),s?(n[l]&&Array.isArray(n[l])||(n[l]=[]),n[l].push(c)):n[l]??(n[l]=c)}return e?n[e]:n},Pt=tt,At=(t,e)=>tt(t,e,!0),st=decodeURIComponent,qe=t=>Te(t,st),ie,C,T,nt,it,Ne,U,ze,rt=(ze=class{constructor(t,e="/",s=[[]]){m(this,T);p(this,"raw");m(this,ie);m(this,C);p(this,"routeIndex",0);p(this,"path");p(this,"bodyCache",{});m(this,U,t=>{const{bodyCache:e,raw:s}=this,r=e[t];if(r)return r;const n=Object.keys(e)[0];return n?e[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,f(this,C,s),f(this,ie,{})}param(t){return t?x(this,T,nt).call(this,t):x(this,T,it).call(this)}query(t){return Pt(this.url,t)}queries(t){return At(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,r)=>{e[r]=s}),e}async parseBody(t){var e;return(e=this.bodyCache).parsedBody??(e.parsedBody=await bt(this,t))}json(){return o(this,U).call(this,"text").then(t=>JSON.parse(t))}text(){return o(this,U).call(this,"text")}arrayBuffer(){return o(this,U).call(this,"arrayBuffer")}blob(){return o(this,U).call(this,"blob")}formData(){return o(this,U).call(this,"formData")}addValidatedData(t,e){o(this,ie)[t]=e}valid(t){return o(this,ie)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[vt](){return o(this,C)}get matchedRoutes(){return o(this,C)[0].map(([[,t]])=>t)}get routePath(){return o(this,C)[0].map(([[,t]])=>t)[this.routeIndex].path}},ie=new WeakMap,C=new WeakMap,T=new WeakSet,nt=function(t){const e=o(this,C)[0][this.routeIndex][1][t],s=x(this,T,Ne).call(this,e);return s&&/\%/.test(s)?qe(s):s},it=function(){const t={},e=Object.keys(o(this,C)[0][this.routeIndex][1]);for(const s of e){const r=x(this,T,Ne).call(this,o(this,C)[0][this.routeIndex][1][s]);r!==void 0&&(t[s]=/\%/.test(r)?qe(r):r)}return t},Ne=function(t){return o(this,C)[1]?o(this,C)[1][t]:t},U=new WeakMap,ze),$t={Stringify:1},ot=async(t,e,s,r,n)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const i=t.callbacks;return i!=null&&i.length?(n?n[0]+=t:n=[t],Promise.all(i.map(d=>d({phase:e,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(l=>ot(l,e,!1,r,n))).then(()=>n[0]))):Promise.resolve(t)},Lt="text/plain; charset=UTF-8",He=(t,e)=>({"Content-Type":t,...e}),ge,xe,$,oe,L,I,ye,ae,ce,G,ve,be,q,re,We,Ht=(We=class{constructor(t,e){m(this,q);m(this,ge);m(this,xe);p(this,"env",{});m(this,$);p(this,"finalized",!1);p(this,"error");m(this,oe);m(this,L);m(this,I);m(this,ye);m(this,ae);m(this,ce);m(this,G);m(this,ve);m(this,be);p(this,"render",(...t)=>(o(this,ae)??f(this,ae,e=>this.html(e)),o(this,ae).call(this,...t)));p(this,"setLayout",t=>f(this,ye,t));p(this,"getLayout",()=>o(this,ye));p(this,"setRenderer",t=>{f(this,ae,t)});p(this,"header",(t,e,s)=>{this.finalized&&f(this,I,new Response(o(this,I).body,o(this,I)));const r=o(this,I)?o(this,I).headers:o(this,G)??f(this,G,new Headers);e===void 0?r.delete(t):s!=null&&s.append?r.append(t,e):r.set(t,e)});p(this,"status",t=>{f(this,oe,t)});p(this,"set",(t,e)=>{o(this,$)??f(this,$,new Map),o(this,$).set(t,e)});p(this,"get",t=>o(this,$)?o(this,$).get(t):void 0);p(this,"newResponse",(...t)=>x(this,q,re).call(this,...t));p(this,"body",(t,e,s)=>x(this,q,re).call(this,t,e,s));p(this,"text",(t,e,s)=>!o(this,G)&&!o(this,oe)&&!e&&!s&&!this.finalized?new Response(t):x(this,q,re).call(this,t,e,He(Lt,s)));p(this,"json",(t,e,s)=>x(this,q,re).call(this,JSON.stringify(t),e,He("application/json",s)));p(this,"html",(t,e,s)=>{const r=n=>x(this,q,re).call(this,n,e,He("text/html; charset=UTF-8",s));return typeof t=="object"?ot(t,$t.Stringify,!1,{}).then(r):r(t)});p(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});p(this,"notFound",()=>(o(this,ce)??f(this,ce,()=>new Response),o(this,ce).call(this,this)));f(this,ge,t),e&&(f(this,L,e.executionCtx),this.env=e.env,f(this,ce,e.notFoundHandler),f(this,be,e.path),f(this,ve,e.matchResult))}get req(){return o(this,xe)??f(this,xe,new rt(o(this,ge),o(this,be),o(this,ve))),o(this,xe)}get event(){if(o(this,L)&&"respondWith"in o(this,L))return o(this,L);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,L))return o(this,L);throw Error("This context has no ExecutionContext")}get res(){return o(this,I)||f(this,I,new Response(null,{headers:o(this,G)??f(this,G,new Headers)}))}set res(t){if(o(this,I)&&t){t=new Response(t.body,t);for(const[e,s]of o(this,I).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const r=o(this,I).headers.getSetCookie();t.headers.delete("set-cookie");for(const n of r)t.headers.append("set-cookie",n)}else t.headers.set(e,s)}f(this,I,t),this.finalized=!0}get var(){return o(this,$)?Object.fromEntries(o(this,$)):{}}},ge=new WeakMap,xe=new WeakMap,$=new WeakMap,oe=new WeakMap,L=new WeakMap,I=new WeakMap,ye=new WeakMap,ae=new WeakMap,ce=new WeakMap,G=new WeakMap,ve=new WeakMap,be=new WeakMap,q=new WeakSet,re=function(t,e,s){const r=o(this,I)?new Headers(o(this,I).headers):o(this,G)??new Headers;if(typeof e=="object"&&"headers"in e){const i=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")r.set(i,a);else{r.delete(i);for(const d of a)r.append(i,d)}const n=typeof e=="number"?e:(e==null?void 0:e.status)??o(this,oe);return new Response(t,{status:n,headers:r})},We),b="ALL",Nt="all",Tt=["get","post","put","delete","options","patch"],at="Can not add a route since the matcher is already built.",ct=class extends Error{},_t="__COMPOSED_HANDLER",Mt=t=>t.text("404 Not Found",404),Fe=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},O,w,lt,j,W,Ie,Se,le,Bt=(le=class{constructor(e={}){m(this,w);p(this,"get");p(this,"post");p(this,"put");p(this,"delete");p(this,"options");p(this,"patch");p(this,"all");p(this,"on");p(this,"use");p(this,"router");p(this,"getPath");p(this,"_basePath","/");m(this,O,"/");p(this,"routes",[]);m(this,j,Mt);p(this,"errorHandler",Fe);p(this,"onError",e=>(this.errorHandler=e,this));p(this,"notFound",e=>(f(this,j,e),this));p(this,"fetch",(e,...s)=>x(this,w,Se).call(this,e,s[1],s[0],e.method));p(this,"request",(e,s,r,n)=>e instanceof Request?this.fetch(s?new Request(e,s):e,r,n):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${se("/",e)}`,s),r,n)));p(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(x(this,w,Se).call(this,e.request,e,void 0,e.request.method))})});[...Tt,Nt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?f(this,O,a):x(this,w,W).call(this,i,o(this,O),a),d.forEach(l=>{x(this,w,W).call(this,i,o(this,O),l)}),this)}),this.on=(i,a,...d)=>{for(const l of[a].flat()){f(this,O,l);for(const c of[i].flat())d.map(h=>{x(this,w,W).call(this,c.toUpperCase(),o(this,O),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?f(this,O,i):(f(this,O,"*"),a.unshift(i)),a.forEach(d=>{x(this,w,W).call(this,b,o(this,O),d)}),this);const{strict:r,...n}=e;Object.assign(this,n),this.getPath=r??!0?e.getPath??Ze:Dt}route(e,s){const r=this.basePath(e);return s.routes.map(n=>{var a;let i;s.errorHandler===Fe?i=n.handler:(i=async(d,l)=>(await Ue([],s.errorHandler)(d,()=>n.handler(d,l))).res,i[_t]=n.handler),x(a=r,w,W).call(a,n.method,n.path,i)}),this}basePath(e){const s=x(this,w,lt).call(this);return s._basePath=se(this._basePath,e),s}mount(e,s,r){let n,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?n=l=>l:n=r.replaceRequest));const a=i?l=>{const c=i(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};n||(n=(()=>{const l=se(this._basePath,e),c=l==="/"?0:l.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,h)}})());const d=async(l,c)=>{const h=await s(n(l.req.raw),...a(l));if(h)return h;await c()};return x(this,w,W).call(this,b,se(e,"*"),d),this}},O=new WeakMap,w=new WeakSet,lt=function(){const e=new le({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,f(e,j,o(this,j)),e.routes=this.routes,e},j=new WeakMap,W=function(e,s,r){e=e.toUpperCase(),s=se(this._basePath,s);const n={basePath:this._basePath,path:s,method:e,handler:r};this.router.add(e,s,[r,n]),this.routes.push(n)},Ie=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},Se=function(e,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,w,Se).call(this,e,s,r,"GET")))();const i=this.getPath(e,{env:r}),a=this.router.match(n,i),d=new Ht(e,{path:i,matchResult:a,env:r,executionCtx:s,notFoundHandler:o(this,j)});if(a[0].length===1){let c;try{c=a[0][0][0][0](d,async()=>{d.res=await o(this,j).call(this,d)})}catch(h){return x(this,w,Ie).call(this,h,d)}return c instanceof Promise?c.then(h=>h||(d.finalized?d.res:o(this,j).call(this,d))).catch(h=>x(this,w,Ie).call(this,h,d)):c??o(this,j).call(this,d)}const l=Ue(a[0],this.errorHandler,o(this,j));return(async()=>{try{const c=await l(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return x(this,w,Ie).call(this,c,d)}})()},le),dt=[];function Ut(t,e){const s=this.buildAllMatchers(),r=((n,i)=>{const a=s[n]||s[b],d=a[2][i];if(d)return d;const l=i.match(a[0]);if(!l)return[[],dt];const c=l.indexOf("",1);return[a[1][c],l]});return this.match=r,r(t,e)}var Oe="[^/]+",pe=".*",me="(?:|/.*)",ne=Symbol(),qt=new Set(".\\+*[^]$()");function Ft(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===pe||t===me?1:e===pe||e===me?-1:t===Oe?1:e===Oe?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var Y,J,D,ee,Vt=(ee=class{constructor(){m(this,Y);m(this,J);m(this,D,Object.create(null))}insert(e,s,r,n,i){if(e.length===0){if(o(this,Y)!==void 0)throw ne;if(i)return;f(this,Y,s);return}const[a,...d]=e,l=a==="*"?d.length===0?["","",pe]:["","",Oe]:a==="/*"?["","",me]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const h=l[1];let u=l[2]||Oe;if(h&&l[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ne;if(c=o(this,D)[u],!c){if(Object.keys(o(this,D)).some(g=>g!==pe&&g!==me))throw ne;if(i)return;c=o(this,D)[u]=new ee,h!==""&&f(c,J,n.varIndex++)}!i&&h!==""&&r.push([h,o(c,J)])}else if(c=o(this,D)[a],!c){if(Object.keys(o(this,D)).some(h=>h.length>1&&h!==pe&&h!==me))throw ne;if(i)return;c=o(this,D)[a]=new ee}c.insert(d,s,r,n,i)}buildRegExpStr(){const s=Object.keys(o(this,D)).sort(Ft).map(r=>{const n=o(this,D)[r];return(typeof o(n,J)=="number"?`(${r})@${o(n,J)}`:qt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof o(this,Y)=="number"&&s.unshift(`#${o(this,Y)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Y=new WeakMap,J=new WeakMap,D=new WeakMap,ee),je,we,Xe,Kt=(Xe=class{constructor(){m(this,je,{varIndex:0});m(this,we,new Vt)}insert(t,e,s){const r=[],n=[];for(let a=0;;){let d=!1;if(t=t.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return n[a]=[c,l],a++,d=!0,c}),!d)break}const i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=n.length-1;a>=0;a--){const[d]=n[a];for(let l=i.length-1;l>=0;l--)if(i[l].indexOf(d)!==-1){i[l]=i[l].replace(d,n[a][1]);break}}return o(this,we).insert(i,e,r,o(this,je),s),r}buildRegExp(){let t=o(this,we).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],r=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,a)=>i!==void 0?(s[++e]=Number(i),"$()"):(a!==void 0&&(r[Number(a)]=++e),"")),[new RegExp(`^${t}`),s,r]}},je=new WeakMap,we=new WeakMap,Xe),zt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ht(t){return Ce[t]??(Ce[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Ce=Object.create(null)}function Xt(t){var c;const e=new Kt,s=[];if(t.length===0)return zt;const r=t.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[g,v])=>h?1:g?-1:u.length-v.length),n=Object.create(null);for(let h=0,u=-1,g=r.length;h<g;h++){const[v,S,_]=r[h];v?n[S]=[_.map(([R])=>[R,Object.create(null)]),dt]:u++;let y;try{y=e.insert(S,u,v)}catch(R){throw R===ne?new ct(S):R}v||(s[u]=_.map(([R,M])=>{const Ee=Object.create(null);for(M-=1;M>=0;M--){const[ke,P]=y[M];Ee[ke]=P}return[R,Ee]}))}const[i,a,d]=e.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let g=0,v=s[h].length;g<v;g++){const S=(c=s[h][g])==null?void 0:c[1];if(!S)continue;const _=Object.keys(S);for(let y=0,R=_.length;y<R;y++)S[_[y]]=d[S[_[y]]]}const l=[];for(const h in a)l[h]=s[a[h]];return[i,l,n]}function te(t,e){if(t){for(const s of Object.keys(t).sort((r,n)=>n.length-r.length))if(ht(s).test(e))return[...t[s]]}}var F,V,De,ut,Ge,Gt=(Ge=class{constructor(){m(this,De);p(this,"name","RegExpRouter");m(this,F);m(this,V);p(this,"match",Ut);f(this,F,{[b]:Object.create(null)}),f(this,V,{[b]:Object.create(null)})}add(t,e,s){var d;const r=o(this,F),n=o(this,V);if(!r||!n)throw new Error(at);r[t]||[r,n].forEach(l=>{l[t]=Object.create(null),Object.keys(l[b]).forEach(c=>{l[t][c]=[...l[b][c]]})}),e==="/*"&&(e="*");const i=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const l=ht(e);t===b?Object.keys(r).forEach(c=>{var h;(h=r[c])[e]||(h[e]=te(r[c],e)||te(r[b],e)||[])}):(d=r[t])[e]||(d[e]=te(r[t],e)||te(r[b],e)||[]),Object.keys(r).forEach(c=>{(t===b||t===c)&&Object.keys(r[c]).forEach(h=>{l.test(h)&&r[c][h].push([s,i])})}),Object.keys(n).forEach(c=>{(t===b||t===c)&&Object.keys(n[c]).forEach(h=>l.test(h)&&n[c][h].push([s,i]))});return}const a=et(e)||[e];for(let l=0,c=a.length;l<c;l++){const h=a[l];Object.keys(n).forEach(u=>{var g;(t===b||t===u)&&((g=n[u])[h]||(g[h]=[...te(r[u],h)||te(r[b],h)||[]]),n[u][h].push([s,i-c+l+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(o(this,V)).concat(Object.keys(o(this,F))).forEach(e=>{t[e]||(t[e]=x(this,De,ut).call(this,e))}),f(this,F,f(this,V,void 0)),Wt(),t}},F=new WeakMap,V=new WeakMap,De=new WeakSet,ut=function(t){const e=[];let s=t===b;return[o(this,F),o(this,V)].forEach(r=>{const n=r[t]?Object.keys(r[t]).map(i=>[i,r[t][i]]):[];n.length!==0?(s||(s=!0),e.push(...n)):t!==b&&e.push(...Object.keys(r[b]).map(i=>[i,r[b][i]]))}),s?Xt(e):null},Ge),K,H,Ye,Yt=(Ye=class{constructor(t){p(this,"name","SmartRouter");m(this,K,[]);m(this,H,[]);f(this,K,t.routers)}add(t,e,s){if(!o(this,H))throw new Error(at);o(this,H).push([t,e,s])}match(t,e){if(!o(this,H))throw new Error("Fatal error");const s=o(this,K),r=o(this,H),n=s.length;let i=0,a;for(;i<n;i++){const d=s[i];try{for(let l=0,c=r.length;l<c;l++)d.add(...r[l]);a=d.match(t,e)}catch(l){if(l instanceof ct)continue;throw l}this.match=d.match.bind(d),f(this,K,[d]),f(this,H,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,H)||o(this,K).length!==1)throw new Error("No active router has been determined yet.");return o(this,K)[0]}},K=new WeakMap,H=new WeakMap,Ye),fe=Object.create(null),z,k,Q,de,E,N,X,he,Jt=(he=class{constructor(e,s,r){m(this,N);m(this,z);m(this,k);m(this,Q);m(this,de,0);m(this,E,fe);if(f(this,k,r||Object.create(null)),f(this,z,[]),e&&s){const n=Object.create(null);n[e]={handler:s,possibleKeys:[],score:0},f(this,z,[n])}f(this,Q,[])}insert(e,s,r){f(this,de,++Be(this,de)._);let n=this;const i=It(s),a=[];for(let d=0,l=i.length;d<l;d++){const c=i[d],h=i[d+1],u=Ot(c,h),g=Array.isArray(u)?u[0]:c;if(g in o(n,k)){n=o(n,k)[g],u&&a.push(u[1]);continue}o(n,k)[g]=new he,u&&(o(n,Q).push(u),a.push(u[1])),n=o(n,k)[g]}return o(n,z).push({[e]:{handler:r,possibleKeys:a.filter((d,l,c)=>c.indexOf(d)===l),score:o(this,de)}}),n}search(e,s){var l;const r=[];f(this,E,fe);let i=[this];const a=Qe(s),d=[];for(let c=0,h=a.length;c<h;c++){const u=a[c],g=c===h-1,v=[];for(let S=0,_=i.length;S<_;S++){const y=i[S],R=o(y,k)[u];R&&(f(R,E,o(y,E)),g?(o(R,k)["*"]&&r.push(...x(this,N,X).call(this,o(R,k)["*"],e,o(y,E))),r.push(...x(this,N,X).call(this,R,e,o(y,E)))):v.push(R));for(let M=0,Ee=o(y,Q).length;M<Ee;M++){const ke=o(y,Q)[M],P=o(y,E)===fe?{}:{...o(y,E)};if(ke==="*"){const B=o(y,k)["*"];B&&(r.push(...x(this,N,X).call(this,B,e,o(y,E))),f(B,E,P),v.push(B));continue}const[mt,_e,ue]=ke;if(!u&&!(ue instanceof RegExp))continue;const A=o(y,k)[mt],gt=a.slice(c).join("/");if(ue instanceof RegExp){const B=ue.exec(gt);if(B){if(P[_e]=B[0],r.push(...x(this,N,X).call(this,A,e,o(y,E),P)),Object.keys(o(A,k)).length){f(A,E,P);const Ae=((l=B[0].match(/\//))==null?void 0:l.length)??0;(d[Ae]||(d[Ae]=[])).push(A)}continue}}(ue===!0||ue.test(u))&&(P[_e]=u,g?(r.push(...x(this,N,X).call(this,A,e,P,o(y,E))),o(A,k)["*"]&&r.push(...x(this,N,X).call(this,o(A,k)["*"],e,P,o(y,E)))):(f(A,E,P),v.push(A)))}}i=v.concat(d.shift()??[])}return r.length>1&&r.sort((c,h)=>c.score-h.score),[r.map(({handler:c,params:h})=>[c,h])]}},z=new WeakMap,k=new WeakMap,Q=new WeakMap,de=new WeakMap,E=new WeakMap,N=new WeakSet,X=function(e,s,r,n){const i=[];for(let a=0,d=o(e,z).length;a<d;a++){const l=o(e,z)[a],c=l[s]||l[b],h={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),r!==fe||n&&n!==fe))for(let u=0,g=c.possibleKeys.length;u<g;u++){const v=c.possibleKeys[u],S=h[c.score];c.params[v]=n!=null&&n[v]&&!S?n[v]:r[v]??(n==null?void 0:n[v]),h[c.score]=!0}}return i},he),Z,Je,Qt=(Je=class{constructor(){p(this,"name","TrieRouter");m(this,Z);f(this,Z,new Jt)}add(t,e,s){const r=et(e);if(r){for(let n=0,i=r.length;n<i;n++)o(this,Z).insert(t,r[n],s);return}o(this,Z).insert(t,e,s)}match(t,e){return o(this,Z).search(t,e)}},Z=new WeakMap,Je),ft=class extends Bt{constructor(t={}){super(t),this.router=t.router??new Yt({routers:[new Gt,new Qt]})}},Zt=t=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},r=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function l(u,g){a.res.headers.set(u,g)}const c=await r(a.req.header("origin")||"",a);if(c&&l("Access-Control-Allow-Origin",c),s.credentials&&l("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const u=await n(a.req.header("origin")||"",a);u.length&&l("Access-Control-Allow-Methods",u.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const v=a.req.header("Access-Control-Request-Headers");v&&(g=v.split(/\s*,\s*/))}return g!=null&&g.length&&(l("Access-Control-Allow-Headers",g.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const Ve=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(t){const e=Object.values(t.checklist).reduce((n,i)=>n+Object.values(i).filter(a=>a).length,0),s=Ve.reduce((n,i)=>n+i.items.length,0);let r="";return Ve.forEach((n,i)=>{r+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+n.title+'</h3><table style="width:100%;border-collapse:collapse;">',n.items.forEach((a,d)=>{var h;const l=((h=t.checklist[i])==null?void 0:h[d])||!1;r+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+a+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(l?"✅":"⬜")+"</td></tr>";const c=i+"-"+d;t.photos[c]&&(r+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="'+t.photos[c]+'" style="max-width:400px;max-height:300px;border-radius:8px;"></td></tr>')}),r+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+t.installDate+"</p><p><strong>차대번호:</strong> "+t.vehicleVin+"</p><p><strong>제품명:</strong> "+t.productName+"</p><p><strong>구성:</strong> "+t.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+e+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(t.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+r+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+t.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="'+t.installerSignature+'" style="max-width:200px;max-height:80px;"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+t.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="'+t.customerSignature+'" style="max-width:200px;max-height:80px;"></td></tr></table></div><div style="text-align:center;margin-top:30px;padding-top:20px;border-top:2px solid #e0e0e0;color:#666;"><h3 style="color:#2c5aa0;">케이밴 경북지사</h3><p>전화: 053-XXX-XXXX | 이메일: kvan@example.com</p><p>A/S 보증: 3년 또는 6만km (선도래 기준)</p></div></div></body></html>'}const Pe=new ft;Pe.use("/api/*",Zt());Pe.get("/",t=>t.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>케이밴 제품 시공 점검표</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            body {
                font-family: 'Malgun Gothic', '맑은 고딕', Arial, sans-serif;
                -webkit-tap-highlight-color: transparent;
            }
            
            /* Touch-friendly checkbox */
            .touch-checkbox {
                width: 50px;
                height: 50px;
                border: 3px solid #2c5aa0;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                background: white;
            }
            
            .touch-checkbox.checked {
                background: #2c5aa0;
                color: white;
            }
            
            .touch-checkbox:active {
                transform: scale(0.95);
            }
            
            /* Signature canvas */
            .signature-canvas {
                border: 2px solid #2c5aa0;
                border-radius: 8px;
                touch-action: none;
                background: white;
                cursor: crosshair;
            }
            
            /* Loading spinner */
            .spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #2c5aa0;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Section animations */
            .section-card {
                animation: fadeIn 0.3s ease-in;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Input focus styles */
            input:focus, textarea:focus {
                outline: none;
                border-color: #2c5aa0;
                box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
            }
            
            /* Photo button styles */
            .photo-button {
                width: 50px;
                height: 50px;
                border: 3px solid #10b981;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                background: white;
                color: #10b981;
            }
            
            .photo-button.has-photo {
                background: #10b981;
                color: white;
            }
            
            .photo-button:active {
                transform: scale(0.95);
            }
            
            /* Photo preview */
            .photo-preview {
                max-width: 100%;
                max-height: 200px;
                border-radius: 8px;
                margin-top: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            /* Image modal */
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                padding: 20px;
            }
            
            .image-modal img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="app" class="max-w-4xl mx-auto p-4 md:p-6 pb-24">
            <!-- Header -->
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h1 class="text-3xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-clipboard-check mr-3"></i>
                    케이밴 제품 시공 점검표
                </h1>
                <div class="text-sm text-gray-600">
                    <p><strong>발행일:</strong> <span id="today"></span></p>
                    <p class="mt-1"><strong>목적:</strong> 시공 품질 확보 및 고객 만족도 향상</p>
                </div>
            </div>

            <!-- Installation Info Form -->
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    시공 정보
                </h2>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">시공일자</label>
                        <input type="date" id="installDate" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">차량 차대번호</label>
                        <input type="text" id="vehicleVin" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="차대번호를 입력하세요" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">제품 시공명</label>
                        <input type="text" id="productName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="예: 케이밴 풀 패키지" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">제품 구성</label>
                        <textarea id="productConfig" rows="3"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="예: 차바닥, 격벽타공판, 2단선반, 3단선반 등" required></textarea>
                    </div>
                </div>
            </div>

            <!-- Checklist Sections -->
            <div id="checklist-container"></div>

            <!-- Signature Section -->
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-signature mr-2"></i>
                    서명란
                </h2>
                
                <!-- Installer Signature -->
                <div class="mb-6">
                    <h3 class="font-bold text-lg mb-2">시공자</h3>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">성명</label>
                        <input type="text" id="installerName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="시공자 이름" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">서명</label>
                        <canvas id="installerSignature" 
                            class="signature-canvas w-full" 
                            width="600" height="200"></canvas>
                        <button onclick="clearSignature('installer')" 
                            class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                </div>

                <!-- Customer Signature -->
                <div>
                    <h3 class="font-bold text-lg mb-2">고객</h3>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">성명</label>
                        <input type="text" id="customerName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="고객 이름" required>
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                        <input type="email" id="customerEmail" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">서명</label>
                        <canvas id="customerSignature" 
                            class="signature-canvas w-full" 
                            width="600" height="200"></canvas>
                        <button onclick="clearSignature('customer')" 
                            class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                </div>
            </div>

            <!-- Notice -->
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>안내:</strong> 모든 항목을 확인하고 서명 후 완료 버튼을 눌러주세요. 
                    입력하신 이메일로 점검표가 자동 발송됩니다.
                </p>
            </div>

            <!-- Submit Button -->
            <button id="submitBtn" onclick="submitChecklist()" 
                class="w-full bg-blue-900 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-800 transition shadow-lg">
                <i class="fas fa-paper-plane mr-2"></i>
                완료 및 이메일 발송
            </button>

            <!-- Loading Overlay -->
            <div id="loadingOverlay" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg p-8 text-center">
                    <div class="spinner mx-auto mb-4"></div>
                    <p class="text-lg font-medium">처리 중입니다...</p>
                    <p class="text-sm text-gray-600 mt-2">잠시만 기다려주세요</p>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            // Checklist data
            const checklistSections = [
                {
                    title: '차바닥 (태고합판, 알루미늄체크판, 부자재)',
                    items: ['외관, 표면', '고정볼트', '테두리고정 및 마감', '소음']
                },
                {
                    title: '격벽타공판',
                    items: ['외관, 표면, 도장, 로고', '고정볼트', '테두리고정 및 마감']
                },
                {
                    title: '격벽 2단 선반',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음']
                },
                {
                    title: '3단 선반 (휠 좌측) 또는 (휠 우측)',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고 확인', '선반높이, 수평 확인', '프레임 상·하단 볼트 고정 확인', '소음 확인']
                },
                {
                    title: '부품 3단 선반 (휠 좌측) 또는 (휠 우측)',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고 확인', '선반높이, 수평 확인', '프레임 상·하단 볼트 고정 확인', '소음 확인']
                },
                {
                    title: '워크스페이스 (휠 우측)',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고 확인', '선반높이, 수평 확인', '프레임 상·하단 볼트 고정 확인', '소음 확인']
                }
            ];

            // Set today's date
            document.getElementById('today').textContent = new Date().toLocaleDateString('ko-KR');
            document.getElementById('installDate').valueAsDate = new Date();

            // Store photos
            const photos = {};

            // Render checklist sections
            const container = document.getElementById('checklist-container');
            checklistSections.forEach((section, sectionIndex) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'bg-white rounded-lg shadow-lg p-6 mb-6 section-card';
                sectionDiv.innerHTML = \`
                    <h2 class="text-lg font-bold text-blue-900 mb-4">\${section.title}</h2>
                    <div class="space-y-3">
                        \${section.items.map((item, itemIndex) => \`
                            <div class="p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="flex-1 text-base">\${item}</span>
                                    <div class="flex gap-2">
                                        <input type="file" 
                                            id="photo-\${sectionIndex}-\${itemIndex}" 
                                            accept="image/*" 
                                            capture="environment"
                                            class="hidden"
                                            onchange="handlePhotoUpload(this, \${sectionIndex}, \${itemIndex})">
                                        <label for="photo-\${sectionIndex}-\${itemIndex}" 
                                            class="photo-button"
                                            id="photo-btn-\${sectionIndex}-\${itemIndex}">
                                            <i class="fas fa-camera text-2xl"></i>
                                        </label>
                                        <div class="touch-checkbox" 
                                            data-section="\${sectionIndex}" 
                                            data-item="\${itemIndex}"
                                            onclick="toggleCheck(this)">
                                            <i class="fas fa-check text-2xl hidden"></i>
                                        </div>
                                    </div>
                                </div>
                                <div id="photo-preview-\${sectionIndex}-\${itemIndex}" class="hidden">
                                    <div class="relative inline-block">
                                        <img class="photo-preview cursor-pointer" 
                                            onclick="showImageModal(this.src)">
                                        <button onclick="deletePhoto(\${sectionIndex}, \${itemIndex})"
                                            class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                                            style="transform: translate(25%, -25%);">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        \`).join('')}
                    </div>
                \`;
                container.appendChild(sectionDiv);
            });

            // Toggle checkbox
            window.toggleCheck = function(element) {
                element.classList.toggle('checked');
                const icon = element.querySelector('i');
                icon.classList.toggle('hidden');
            };

            // Signature functionality
            const canvases = {
                installer: document.getElementById('installerSignature'),
                customer: document.getElementById('customerSignature')
            };

            const contexts = {
                installer: canvases.installer.getContext('2d'),
                customer: canvases.customer.getContext('2d')
            };

            let isDrawing = {
                installer: false,
                customer: false
            };

            // Setup signature pads
            Object.keys(canvases).forEach(type => {
                const canvas = canvases[type];
                const ctx = contexts[type];
                
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';

                const startDrawing = (e) => {
                    isDrawing[type] = true;
                    const rect = canvas.getBoundingClientRect();
                    const x = (e.clientX || e.touches[0].clientX) - rect.left;
                    const y = (e.clientY || e.touches[0].clientY) - rect.top;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                };

                const draw = (e) => {
                    if (!isDrawing[type]) return;
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const x = (e.clientX || e.touches[0].clientX) - rect.left;
                    const y = (e.clientY || e.touches[0].clientY) - rect.top;
                    ctx.lineTo(x, y);
                    ctx.stroke();
                };

                const stopDrawing = () => {
                    isDrawing[type] = false;
                };

                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', stopDrawing);
                canvas.addEventListener('mouseout', stopDrawing);

                canvas.addEventListener('touchstart', startDrawing);
                canvas.addEventListener('touchmove', draw);
                canvas.addEventListener('touchend', stopDrawing);
            });

            window.clearSignature = function(type) {
                const canvas = canvases[type];
                const ctx = contexts[type];
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            };

            // Photo handling functions
            window.handlePhotoUpload = function(input, sectionIndex, itemIndex) {
                const file = input.files[0];
                if (!file) return;

                // Check file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('사진 크기는 5MB 이하여야 합니다.');
                    input.value = '';
                    return;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    // Compress and resize image
                    const img = new Image();
                    img.onload = function() {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        
                        // Calculate new dimensions (max 1200px)
                        let width = img.width;
                        let height = img.height;
                        const maxDimension = 1200;
                        
                        if (width > maxDimension || height > maxDimension) {
                            if (width > height) {
                                height = (height / width) * maxDimension;
                                width = maxDimension;
                            } else {
                                width = (width / height) * maxDimension;
                                height = maxDimension;
                            }
                        }
                        
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);
                        
                        // Convert to base64 with compression (0.8 quality)
                        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                        
                        // Store photo
                        const photoKey = \`\${sectionIndex}-\${itemIndex}\`;
                        photos[photoKey] = compressedDataUrl;
                        
                        // Update UI
                        const previewContainer = document.getElementById(\`photo-preview-\${sectionIndex}-\${itemIndex}\`);
                        const previewImg = previewContainer.querySelector('img');
                        const photoBtn = document.getElementById(\`photo-btn-\${sectionIndex}-\${itemIndex}\`);
                        
                        previewImg.src = compressedDataUrl;
                        previewContainer.classList.remove('hidden');
                        photoBtn.classList.add('has-photo');
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            };

            window.deletePhoto = function(sectionIndex, itemIndex) {
                if (!confirm('이 사진을 삭제하시겠습니까?')) return;
                
                const photoKey = \`\${sectionIndex}-\${itemIndex}\`;
                delete photos[photoKey];
                
                // Clear file input
                const input = document.getElementById(\`photo-\${sectionIndex}-\${itemIndex}\`);
                input.value = '';
                
                // Update UI
                const previewContainer = document.getElementById(\`photo-preview-\${sectionIndex}-\${itemIndex}\`);
                const photoBtn = document.getElementById(\`photo-btn-\${sectionIndex}-\${itemIndex}\`);
                
                previewContainer.classList.add('hidden');
                photoBtn.classList.remove('has-photo');
            };

            window.showImageModal = function(src) {
                const modal = document.createElement('div');
                modal.className = 'image-modal';
                modal.innerHTML = \`
                    <div style="position: relative; max-width: 90%; max-height: 90%;">
                        <img src="\${src}" alt="사진 크게보기">
                        <button onclick="this.closest('.image-modal').remove()"
                            class="absolute top-0 right-0 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
                            style="transform: translate(50%, -50%);">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                \`;
                modal.onclick = function(e) {
                    if (e.target === modal) modal.remove();
                };
                document.body.appendChild(modal);
            };


            // Submit checklist
            window.submitChecklist = async function() {
                // Validate form
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                const productName = document.getElementById('productName').value;
                const productConfig = document.getElementById('productConfig').value;
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                const customerEmail = document.getElementById('customerEmail').value;

                if (!installDate || !vehicleVin || !productName || !productConfig || 
                    !installerName || !customerName || !customerEmail) {
                    alert('모든 필수 항목을 입력해주세요.');
                    return;
                }

                // Validate email
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!emailRegex.test(customerEmail)) {
                    alert('올바른 이메일 주소를 입력해주세요.');
                    return;
                }

                // Collect checklist data
                const checklist = {};
                document.querySelectorAll('.touch-checkbox').forEach(cb => {
                    const section = cb.dataset.section;
                    const item = cb.dataset.item;
                    if (!checklist[section]) checklist[section] = {};
                    checklist[section][item] = cb.classList.contains('checked');
                });

                // Get signatures
                const installerSignature = canvases.installer.toDataURL();
                const customerSignature = canvases.customer.toDataURL();

                // Check if signatures are empty
                const isSignatureEmpty = (canvas) => {
                    const ctx = canvas.getContext('2d');
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                    return !imageData.some(channel => channel !== 0);
                };

                if (isSignatureEmpty(canvases.installer)) {
                    alert('시공자 서명을 해주세요.');
                    return;
                }

                if (isSignatureEmpty(canvases.customer)) {
                    alert('고객 서명을 해주세요.');
                    return;
                }

                // Show loading
                document.getElementById('loadingOverlay').classList.remove('hidden');

                try {
                    const response = await axios.post('/api/submit', {
                        installDate,
                        vehicleVin,
                        productName,
                        productConfig,
                        installerName,
                        customerName,
                        customerEmail,
                        checklist,
                        installerSignature,
                        customerSignature,
                        photos: photos
                    });

                    if (response.data.success) {
                        alert('✅ 점검표가 성공적으로 제출되었습니다!\\n이메일이 발송되었습니다.');
                        // Optionally redirect or reset form
                        window.location.reload();
                    } else {
                        throw new Error(response.data.error || '제출 실패');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('❌ 제출 중 오류가 발생했습니다.\\n' + (error.response?.data?.error || error.message));
                } finally {
                    document.getElementById('loadingOverlay').classList.add('hidden');
                }
            };
        <\/script>
    </body>
    </html>
  `));Pe.post("/api/submit",async t=>{try{const e=await t.req.json();console.log("📝 Received checklist submission"),console.log("Customer Email:",e.customerEmail),console.log("Photos count:",Object.keys(e.photos||{}).length);const{RESEND_API_KEY:s,FROM_EMAIL:r,FROM_NAME:n}=t.env;if(!s||s==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),t.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(e.photos||{}).length,customerEmail:e.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const i=es(e);console.log("✅ Email HTML generated"),console.log("📤 Sending email via Resend REST API...");const a=n||"케이밴 경북지사",d=r||"noreply@yourdomain.com",l="케이밴 제품 시공 점검표 - "+e.vehicleVin,c=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+s,"Content-Type":"application/json"},body:JSON.stringify({from:a+" <"+d+">",to:[e.customerEmail],subject:l,html:i})});if(!c.ok){const u=await c.json();throw new Error("Resend API error: "+JSON.stringify(u))}const h=await c.json();return console.log("✅ Email sent successfully:",h),t.json({success:!0,message:"Checklist submitted and email sent successfully",data:{customerEmail:e.customerEmail,installDate:e.installDate,vehicleVin:e.vehicleVin,photosCount:Object.keys(e.photos||{}).length,emailId:h.id}})}catch(i){return console.error("❌ Email sending error:",i),t.json({success:!1,error:"Failed to send email",details:i.message||"Unknown email error",debug:{apiKeyExists:!!s,apiKeyValid:s!=="your_resend_api_key_here",fromEmail:r,toEmail:e.customerEmail}},500)}}catch(e){return console.error("❌ Submit error:",e),t.json({success:!1,error:e.message||"Failed to submit checklist",stack:e.stack},500)}});const Ke=new ft,ts=Object.assign({"/src/index.tsx":Pe});let pt=!1;for(const[,t]of Object.entries(ts))t&&(Ke.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),Ke.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),pt=!0);if(!pt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
