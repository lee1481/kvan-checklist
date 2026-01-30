var xt=Object.defineProperty;var Me=e=>{throw TypeError(e)};var yt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>yt(e,typeof t!="symbol"?t+"":t,s),$e=(e,t,s)=>t.has(e)||Me("Cannot "+s);var o=(e,t,s)=>($e(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?Me("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,n)=>($e(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),x=(e,t,s)=>($e(e,t,"access private method"),s);var Be=(e,t,s,n)=>({set _(r){f(e,t,r,s)},get _(){return o(e,t,n)}});var Ue=(e,t,s)=>(n,r)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],n.req.routeIndex=d):h=d===e.length&&r||void 0,h)try{c=await h(n,()=>a(d+1))}catch(u){if(u instanceof Error&&t)n.error=u,c=await t(u,n),l=!0;else throw u}else n.finalized===!1&&s&&(c=await s(n));return c&&(n.finalized===!1||l)&&(n.res=c),n}},bt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof nt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:n}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((n,r)=>{t.all||r.endsWith("[]")?kt(s,r,n):s[r]=n}),t.dot&&Object.entries(s).forEach(([n,r])=>{n.includes(".")&&(Rt(s,n,r),delete s[n])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Rt=(e,t,s)=>{let n=e;const r=t.split(".");r.forEach((i,a)=>{a===r.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Qe=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=St(e),n=Qe(s);return Ct(n,t)},St=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const r=`@${n}`;return t.push([r,s]),r}),{groups:t,path:e}},Ct=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let r=e.length-1;r>=0;r--)if(e[r].includes(n)){e[r]=e[r].replace(n,t[s][1]);break}}return e},Re={},Ot=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Re[n]||(s[2]?Re[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Re[n]=[e,s[1],!0]),Re[n]}return null},Te=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},jt=e=>Te(e,decodeURI),Ze=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const r=t.charCodeAt(n);if(r===37){const i=t.indexOf("?",n),a=t.slice(s,i===-1?void 0:i);return jt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(r===63)break}return t.slice(s,n)},Dt=e=>{const t=Ze(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},se=(e,t,...s)=>(s.length&&(t=se(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),et=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(r=>{if(r!==""&&!/\:/.test(r))n+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){s.length===0&&n===""?s.push("/"):s.push(n);const i=r.replace("?","");n+="/"+i,s.push(n)}else n+="/"+r}),s.filter((r,i,a)=>a.indexOf(r)===i)},Le=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Te(e,st):e):e,tt=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const c=a+t.length+2,l=e.indexOf("&",c);return Le(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(n=/[%+]/.test(e),!n)return}const r={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const a=e.indexOf("&",i+1);let d=e.indexOf("=",i);d>a&&a!==-1&&(d=-1);let c=e.slice(i+1,d===-1?a===-1?void 0:a:d);if(n&&(c=Le(c)),i=a,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,a===-1?void 0:a),n&&(l=Le(l))),s?(r[c]&&Array.isArray(r[c])||(r[c]=[]),r[c].push(l)):r[c]??(r[c]=l)}return t?r[t]:r},Pt=tt,At=(e,t)=>tt(e,t,!0),st=decodeURIComponent,qe=e=>Te(e,st),ie,C,T,rt,it,Ne,U,ze,nt=(ze=class{constructor(e,t="/",s=[[]]){m(this,T);g(this,"raw");m(this,ie);m(this,C);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});m(this,U,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const r=Object.keys(t)[0];return r?t[r].then(i=>(r==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,C,s),f(this,ie,{})}param(e){return e?x(this,T,rt).call(this,e):x(this,T,it).call(this)}query(e){return Pt(this.url,e)}queries(e){return At(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return o(this,U).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,U).call(this,"text")}arrayBuffer(){return o(this,U).call(this,"arrayBuffer")}blob(){return o(this,U).call(this,"blob")}formData(){return o(this,U).call(this,"formData")}addValidatedData(e,t){o(this,ie)[e]=t}valid(e){return o(this,ie)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bt](){return o(this,C)}get matchedRoutes(){return o(this,C)[0].map(([[,e]])=>e)}get routePath(){return o(this,C)[0].map(([[,e]])=>e)[this.routeIndex].path}},ie=new WeakMap,C=new WeakMap,T=new WeakSet,rt=function(e){const t=o(this,C)[0][this.routeIndex][1][e],s=x(this,T,Ne).call(this,t);return s&&/\%/.test(s)?qe(s):s},it=function(){const e={},t=Object.keys(o(this,C)[0][this.routeIndex][1]);for(const s of t){const n=x(this,T,Ne).call(this,o(this,C)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?qe(n):n)}return e},Ne=function(e){return o(this,C)[1]?o(this,C)[1][e]:e},U=new WeakMap,ze),$t={Stringify:1},ot=async(e,t,s,n,r)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(r?r[0]+=e:r=[e],Promise.all(i.map(d=>d({phase:t,buffer:r,context:n}))).then(d=>Promise.all(d.filter(Boolean).map(c=>ot(c,t,!1,n,r))).then(()=>r[0]))):Promise.resolve(e)},Lt="text/plain; charset=UTF-8",He=(e,t)=>({"Content-Type":e,...t}),pe,xe,$,oe,L,I,ye,ae,ce,G,be,ve,q,ne,We,Ht=(We=class{constructor(e,t){m(this,q);m(this,pe);m(this,xe);g(this,"env",{});m(this,$);g(this,"finalized",!1);g(this,"error");m(this,oe);m(this,L);m(this,I);m(this,ye);m(this,ae);m(this,ce);m(this,G);m(this,be);m(this,ve);g(this,"render",(...e)=>(o(this,ae)??f(this,ae,t=>this.html(t)),o(this,ae).call(this,...e)));g(this,"setLayout",e=>f(this,ye,e));g(this,"getLayout",()=>o(this,ye));g(this,"setRenderer",e=>{f(this,ae,e)});g(this,"header",(e,t,s)=>{this.finalized&&f(this,I,new Response(o(this,I).body,o(this,I)));const n=o(this,I)?o(this,I).headers:o(this,G)??f(this,G,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});g(this,"status",e=>{f(this,oe,e)});g(this,"set",(e,t)=>{o(this,$)??f(this,$,new Map),o(this,$).set(e,t)});g(this,"get",e=>o(this,$)?o(this,$).get(e):void 0);g(this,"newResponse",(...e)=>x(this,q,ne).call(this,...e));g(this,"body",(e,t,s)=>x(this,q,ne).call(this,e,t,s));g(this,"text",(e,t,s)=>!o(this,G)&&!o(this,oe)&&!t&&!s&&!this.finalized?new Response(e):x(this,q,ne).call(this,e,t,He(Lt,s)));g(this,"json",(e,t,s)=>x(this,q,ne).call(this,JSON.stringify(e),t,He("application/json",s)));g(this,"html",(e,t,s)=>{const n=r=>x(this,q,ne).call(this,r,t,He("text/html; charset=UTF-8",s));return typeof e=="object"?ot(e,$t.Stringify,!1,{}).then(n):n(e)});g(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});g(this,"notFound",()=>(o(this,ce)??f(this,ce,()=>new Response),o(this,ce).call(this,this)));f(this,pe,e),t&&(f(this,L,t.executionCtx),this.env=t.env,f(this,ce,t.notFoundHandler),f(this,ve,t.path),f(this,be,t.matchResult))}get req(){return o(this,xe)??f(this,xe,new nt(o(this,pe),o(this,ve),o(this,be))),o(this,xe)}get event(){if(o(this,L)&&"respondWith"in o(this,L))return o(this,L);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,L))return o(this,L);throw Error("This context has no ExecutionContext")}get res(){return o(this,I)||f(this,I,new Response(null,{headers:o(this,G)??f(this,G,new Headers)}))}set res(e){if(o(this,I)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,I).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=o(this,I).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of n)e.headers.append("set-cookie",r)}else e.headers.set(t,s)}f(this,I,e),this.finalized=!0}get var(){return o(this,$)?Object.fromEntries(o(this,$)):{}}},pe=new WeakMap,xe=new WeakMap,$=new WeakMap,oe=new WeakMap,L=new WeakMap,I=new WeakMap,ye=new WeakMap,ae=new WeakMap,ce=new WeakMap,G=new WeakMap,be=new WeakMap,ve=new WeakMap,q=new WeakSet,ne=function(e,t,s){const n=o(this,I)?new Headers(o(this,I).headers):o(this,G)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?n.append(a,d):n.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")n.set(i,a);else{n.delete(i);for(const d of a)n.append(i,d)}const r=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,oe);return new Response(e,{status:r,headers:n})},We),v="ALL",Nt="all",Tt=["get","post","put","delete","options","patch"],at="Can not add a route since the matcher is already built.",ct=class extends Error{},_t="__COMPOSED_HANDLER",Mt=e=>e.text("404 Not Found",404),Fe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,w,lt,j,W,Ie,Se,le,Bt=(le=class{constructor(t={}){m(this,w);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");m(this,O,"/");g(this,"routes",[]);m(this,j,Mt);g(this,"errorHandler",Fe);g(this,"onError",t=>(this.errorHandler=t,this));g(this,"notFound",t=>(f(this,j,t),this));g(this,"fetch",(t,...s)=>x(this,w,Se).call(this,t,s[1],s[0],t.method));g(this,"request",(t,s,n,r)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,r):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${se("/",t)}`,s),n,r)));g(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,w,Se).call(this,t.request,t,void 0,t.request.method))})});[...Tt,Nt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?f(this,O,a):x(this,w,W).call(this,i,o(this,O),a),d.forEach(c=>{x(this,w,W).call(this,i,o(this,O),c)}),this)}),this.on=(i,a,...d)=>{for(const c of[a].flat()){f(this,O,c);for(const l of[i].flat())d.map(h=>{x(this,w,W).call(this,l.toUpperCase(),o(this,O),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?f(this,O,i):(f(this,O,"*"),a.unshift(i)),a.forEach(d=>{x(this,w,W).call(this,v,o(this,O),d)}),this);const{strict:n,...r}=t;Object.assign(this,r),this.getPath=n??!0?t.getPath??Ze:Dt}route(t,s){const n=this.basePath(t);return s.routes.map(r=>{var a;let i;s.errorHandler===Fe?i=r.handler:(i=async(d,c)=>(await Ue([],s.errorHandler)(d,()=>r.handler(d,c))).res,i[_t]=r.handler),x(a=n,w,W).call(a,r.method,r.path,i)}),this}basePath(t){const s=x(this,w,lt).call(this);return s._basePath=se(this._basePath,t),s}mount(t,s,n){let r,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?r=c=>c:r=n.replaceRequest));const a=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};r||(r=(()=>{const c=se(this._basePath,t),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(r(c.req.raw),...a(c));if(h)return h;await l()};return x(this,w,W).call(this,v,se(t,"*"),d),this}},O=new WeakMap,w=new WeakSet,lt=function(){const t=new le({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,j,o(this,j)),t.routes=this.routes,t},j=new WeakMap,W=function(t,s,n){t=t.toUpperCase(),s=se(this._basePath,s);const r={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,r]),this.routes.push(r)},Ie=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,n,r){if(r==="HEAD")return(async()=>new Response(null,await x(this,w,Se).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),a=this.router.match(r,i),d=new Ht(t,{path:i,matchResult:a,env:n,executionCtx:s,notFoundHandler:o(this,j)});if(a[0].length===1){let l;try{l=a[0][0][0][0](d,async()=>{d.res=await o(this,j).call(this,d)})}catch(h){return x(this,w,Ie).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:o(this,j).call(this,d))).catch(h=>x(this,w,Ie).call(this,h,d)):l??o(this,j).call(this,d)}const c=Ue(a[0],this.errorHandler,o(this,j));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,w,Ie).call(this,l,d)}})()},le),dt=[];function Ut(e,t){const s=this.buildAllMatchers(),n=((r,i)=>{const a=s[r]||s[v],d=a[2][i];if(d)return d;const c=i.match(a[0]);if(!c)return[[],dt];const l=c.indexOf("",1);return[a[1][l],c]});return this.match=n,n(e,t)}var Oe="[^/]+",ge=".*",me="(?:|/.*)",re=Symbol(),qt=new Set(".\\+*[^]$()");function Ft(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ge||e===me?1:t===ge||t===me?-1:e===Oe?1:t===Oe?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Y,J,D,ee,Vt=(ee=class{constructor(){m(this,Y);m(this,J);m(this,D,Object.create(null))}insert(t,s,n,r,i){if(t.length===0){if(o(this,Y)!==void 0)throw re;if(i)return;f(this,Y,s);return}const[a,...d]=t,c=a==="*"?d.length===0?["","",ge]:["","",Oe]:a==="/*"?["","",me]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||Oe;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw re;if(l=o(this,D)[u],!l){if(Object.keys(o(this,D)).some(p=>p!==ge&&p!==me))throw re;if(i)return;l=o(this,D)[u]=new ee,h!==""&&f(l,J,r.varIndex++)}!i&&h!==""&&n.push([h,o(l,J)])}else if(l=o(this,D)[a],!l){if(Object.keys(o(this,D)).some(h=>h.length>1&&h!==ge&&h!==me))throw re;if(i)return;l=o(this,D)[a]=new ee}l.insert(d,s,n,r,i)}buildRegExpStr(){const s=Object.keys(o(this,D)).sort(Ft).map(n=>{const r=o(this,D)[n];return(typeof o(r,J)=="number"?`(${n})@${o(r,J)}`:qt.has(n)?`\\${n}`:n)+r.buildRegExpStr()});return typeof o(this,Y)=="number"&&s.unshift(`#${o(this,Y)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Y=new WeakMap,J=new WeakMap,D=new WeakMap,ee),je,we,Xe,Kt=(Xe=class{constructor(){m(this,je,{varIndex:0});m(this,we,new Vt)}insert(e,t,s){const n=[],r=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${a}`;return r[a]=[l,c],a++,d=!0,l}),!d)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=r.length-1;a>=0;a--){const[d]=r[a];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,r[a][1]);break}}return o(this,we).insert(i,t,n,o(this,je),s),n}buildRegExp(){let e=o(this,we).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,i,a)=>i!==void 0?(s[++t]=Number(i),"$()"):(a!==void 0&&(n[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,n]}},je=new WeakMap,we=new WeakMap,Xe),zt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ht(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Ce=Object.create(null)}function Xt(e){var l;const t=new Kt,s=[];if(e.length===0)return zt;const n=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[p,y])=>h?1:p?-1:u.length-y.length),r=Object.create(null);for(let h=0,u=-1,p=n.length;h<p;h++){const[y,S,_]=n[h];y?r[S]=[_.map(([R])=>[R,Object.create(null)]),dt]:u++;let b;try{b=t.insert(S,u,y)}catch(R){throw R===re?new ct(S):R}y||(s[u]=_.map(([R,M])=>{const Ee=Object.create(null);for(M-=1;M>=0;M--){const[ke,P]=b[M];Ee[ke]=P}return[R,Ee]}))}const[i,a,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let p=0,y=s[h].length;p<y;p++){const S=(l=s[h][p])==null?void 0:l[1];if(!S)continue;const _=Object.keys(S);for(let b=0,R=_.length;b<R;b++)S[_[b]]=d[S[_[b]]]}const c=[];for(const h in a)c[h]=s[a[h]];return[i,c,r]}function te(e,t){if(e){for(const s of Object.keys(e).sort((n,r)=>r.length-n.length))if(ht(s).test(t))return[...e[s]]}}var F,V,De,ut,Ge,Gt=(Ge=class{constructor(){m(this,De);g(this,"name","RegExpRouter");m(this,F);m(this,V);g(this,"match",Ut);f(this,F,{[v]:Object.create(null)}),f(this,V,{[v]:Object.create(null)})}add(e,t,s){var d;const n=o(this,F),r=o(this,V);if(!n||!r)throw new Error(at);n[e]||[n,r].forEach(c=>{c[e]=Object.create(null),Object.keys(c[v]).forEach(l=>{c[e][l]=[...c[v][l]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ht(t);e===v?Object.keys(n).forEach(l=>{var h;(h=n[l])[t]||(h[t]=te(n[l],t)||te(n[v],t)||[])}):(d=n[e])[t]||(d[t]=te(n[e],t)||te(n[v],t)||[]),Object.keys(n).forEach(l=>{(e===v||e===l)&&Object.keys(n[l]).forEach(h=>{c.test(h)&&n[l][h].push([s,i])})}),Object.keys(r).forEach(l=>{(e===v||e===l)&&Object.keys(r[l]).forEach(h=>c.test(h)&&r[l][h].push([s,i]))});return}const a=et(t)||[t];for(let c=0,l=a.length;c<l;c++){const h=a[c];Object.keys(r).forEach(u=>{var p;(e===v||e===u)&&((p=r[u])[h]||(p[h]=[...te(n[u],h)||te(n[v],h)||[]]),r[u][h].push([s,i-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,V)).concat(Object.keys(o(this,F))).forEach(t=>{e[t]||(e[t]=x(this,De,ut).call(this,t))}),f(this,F,f(this,V,void 0)),Wt(),e}},F=new WeakMap,V=new WeakMap,De=new WeakSet,ut=function(e){const t=[];let s=e===v;return[o(this,F),o(this,V)].forEach(n=>{const r=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];r.length!==0?(s||(s=!0),t.push(...r)):e!==v&&t.push(...Object.keys(n[v]).map(i=>[i,n[v][i]]))}),s?Xt(t):null},Ge),K,H,Ye,Yt=(Ye=class{constructor(e){g(this,"name","SmartRouter");m(this,K,[]);m(this,H,[]);f(this,K,e.routers)}add(e,t,s){if(!o(this,H))throw new Error(at);o(this,H).push([e,t,s])}match(e,t){if(!o(this,H))throw new Error("Fatal error");const s=o(this,K),n=o(this,H),r=s.length;let i=0,a;for(;i<r;i++){const d=s[i];try{for(let c=0,l=n.length;c<l;c++)d.add(...n[c]);a=d.match(e,t)}catch(c){if(c instanceof ct)continue;throw c}this.match=d.match.bind(d),f(this,K,[d]),f(this,H,void 0);break}if(i===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,H)||o(this,K).length!==1)throw new Error("No active router has been determined yet.");return o(this,K)[0]}},K=new WeakMap,H=new WeakMap,Ye),fe=Object.create(null),z,k,Q,de,E,N,X,he,Jt=(he=class{constructor(t,s,n){m(this,N);m(this,z);m(this,k);m(this,Q);m(this,de,0);m(this,E,fe);if(f(this,k,n||Object.create(null)),f(this,z,[]),t&&s){const r=Object.create(null);r[t]={handler:s,possibleKeys:[],score:0},f(this,z,[r])}f(this,Q,[])}insert(t,s,n){f(this,de,++Be(this,de)._);let r=this;const i=It(s),a=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],h=i[d+1],u=Ot(l,h),p=Array.isArray(u)?u[0]:l;if(p in o(r,k)){r=o(r,k)[p],u&&a.push(u[1]);continue}o(r,k)[p]=new he,u&&(o(r,Q).push(u),a.push(u[1])),r=o(r,k)[p]}return o(r,z).push({[t]:{handler:n,possibleKeys:a.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,de)}}),r}search(t,s){var c;const n=[];f(this,E,fe);let i=[this];const a=Qe(s),d=[];for(let l=0,h=a.length;l<h;l++){const u=a[l],p=l===h-1,y=[];for(let S=0,_=i.length;S<_;S++){const b=i[S],R=o(b,k)[u];R&&(f(R,E,o(b,E)),p?(o(R,k)["*"]&&n.push(...x(this,N,X).call(this,o(R,k)["*"],t,o(b,E))),n.push(...x(this,N,X).call(this,R,t,o(b,E)))):y.push(R));for(let M=0,Ee=o(b,Q).length;M<Ee;M++){const ke=o(b,Q)[M],P=o(b,E)===fe?{}:{...o(b,E)};if(ke==="*"){const B=o(b,k)["*"];B&&(n.push(...x(this,N,X).call(this,B,t,o(b,E))),f(B,E,P),y.push(B));continue}const[mt,_e,ue]=ke;if(!u&&!(ue instanceof RegExp))continue;const A=o(b,k)[mt],pt=a.slice(l).join("/");if(ue instanceof RegExp){const B=ue.exec(pt);if(B){if(P[_e]=B[0],n.push(...x(this,N,X).call(this,A,t,o(b,E),P)),Object.keys(o(A,k)).length){f(A,E,P);const Ae=((c=B[0].match(/\//))==null?void 0:c.length)??0;(d[Ae]||(d[Ae]=[])).push(A)}continue}}(ue===!0||ue.test(u))&&(P[_e]=u,p?(n.push(...x(this,N,X).call(this,A,t,P,o(b,E))),o(A,k)["*"]&&n.push(...x(this,N,X).call(this,o(A,k)["*"],t,P,o(b,E)))):(f(A,E,P),y.push(A)))}}i=y.concat(d.shift()??[])}return n.length>1&&n.sort((l,h)=>l.score-h.score),[n.map(({handler:l,params:h})=>[l,h])]}},z=new WeakMap,k=new WeakMap,Q=new WeakMap,de=new WeakMap,E=new WeakMap,N=new WeakSet,X=function(t,s,n,r){const i=[];for(let a=0,d=o(t,z).length;a<d;a++){const c=o(t,z)[a],l=c[s]||c[v],h={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),n!==fe||r&&r!==fe))for(let u=0,p=l.possibleKeys.length;u<p;u++){const y=l.possibleKeys[u],S=h[l.score];l.params[y]=r!=null&&r[y]&&!S?r[y]:n[y]??(r==null?void 0:r[y]),h[l.score]=!0}}return i},he),Z,Je,Qt=(Je=class{constructor(){g(this,"name","TrieRouter");m(this,Z);f(this,Z,new Jt)}add(e,t,s){const n=et(t);if(n){for(let r=0,i=n.length;r<i;r++)o(this,Z).insert(e,n[r],s);return}o(this,Z).insert(e,t,s)}match(e,t){return o(this,Z).search(e,t)}},Z=new WeakMap,Je),ft=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Gt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),r=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function c(u,p){a.res.headers.set(u,p)}const l=await n(a.req.header("origin")||"",a);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await r(a.req.header("origin")||"",a);u.length&&c("Access-Control-Allow-Methods",u.join(","));let p=s.allowHeaders;if(!(p!=null&&p.length)){const y=a.req.header("Access-Control-Request-Headers");y&&(p=y.split(/\s*,\s*/))}return p!=null&&p.length&&(c("Access-Control-Allow-Headers",p.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const Ve=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((r,i)=>r+Object.values(i).filter(a=>a).length,0),s=Ve.reduce((r,i)=>r+i.items.length,0);let n="";return Ve.forEach((r,i)=>{n+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+r.title+'</h3><table style="width:100%;border-collapse:collapse;">',r.items.forEach((a,d)=>{var h;const c=((h=e.checklist[i])==null?void 0:h[d])||!1;n+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+a+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(c?"✅":"⬜")+"</td></tr>";const l=i+"-"+d;e.photos[l]&&(n+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="'+e.photos[l]+'" style="max-width:400px;max-height:300px;border-radius:8px;"></td></tr>')}),n+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+n+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="'+e.installerSignature+'" style="max-width:200px;max-height:80px;"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="'+e.customerSignature+'" style="max-width:200px;max-height:80px;"></td></tr></table></div><div style="text-align:center;margin-top:30px;padding-top:20px;border-top:2px solid #e0e0e0;color:#666;"><h3 style="color:#2c5aa0;">케이밴 경북지사</h3><p>전화: 053-XXX-XXXX | 이메일: kvan@example.com</p><p>A/S 보증: 3년 또는 6만km (선도래 기준)</p></div></div></body></html>'}const Pe=new ft;Pe.use("/api/*",Zt());Pe.get("/",e=>e.html(`
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

                // Get signatures (PNG format with transparency)
                const installerSignature = canvases.installer.toDataURL('image/png');
                const customerSignature = canvases.customer.toDataURL('image/png');
                
                console.log('📝 서명 데이터 크기:', {
                    installer: installerSignature.length,
                    customer: customerSignature.length
                });

                // Check if signatures are empty (improved detection)
                const isSignatureEmpty = (canvas) => {
                    const ctx = canvas.getContext('2d');
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                    
                    // Check if there are any non-white pixels (drawing exists)
                    for (let i = 0; i < imageData.length; i += 4) {
                        const r = imageData[i];
                        const g = imageData[i + 1];
                        const b = imageData[i + 2];
                        const a = imageData[i + 3];
                        
                        // If pixel is not white and not transparent, signature exists
                        if ((r < 250 || g < 250 || b < 250) && a > 0) {
                            return false; // Signature exists!
                        }
                    }
                    
                    return true; // No signature found
                };

                if (isSignatureEmpty(canvases.installer)) {
                    alert('시공자 서명을 해주세요.');
                    return;
                }

                if (isSignatureEmpty(canvases.customer)) {
                    alert('고객 서명을 해주세요.');
                    return;
                }

                // Debug log
                console.log('📤 제출 데이터:', {
                    사진개수: Object.keys(photos).length,
                    사진키목록: Object.keys(photos),
                    시공자서명길이: installerSignature.length,
                    고객서명길이: customerSignature.length
                });

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
  `));Pe.post("/api/submit",async e=>{var t,s;try{const n=await e.req.json();console.log("📝 Received checklist submission"),console.log("Customer Email:",n.customerEmail),console.log("Photos count:",Object.keys(n.photos||{}).length),console.log("Photos keys:",Object.keys(n.photos||{})),console.log("Installer signature length:",((t=n.installerSignature)==null?void 0:t.length)||0),console.log("Customer signature length:",((s=n.customerSignature)==null?void 0:s.length)||0);const{RESEND_API_KEY:r,FROM_EMAIL:i,FROM_NAME:a}=e.env;if(!r||r==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(n.photos||{}).length,customerEmail:n.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const d=es(n);console.log("✅ Email HTML generated"),console.log("📤 Sending email via Resend REST API...");const c=a||"케이밴 경북지사",l=i||"noreply@yourdomain.com",h="케이밴 제품 시공 점검표 - "+n.vehicleVin,u=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify({from:c+" <"+l+">",to:[n.customerEmail],subject:h,html:d})});if(!u.ok){const y=await u.json();throw new Error("Resend API error: "+JSON.stringify(y))}const p=await u.json();return console.log("✅ Email sent successfully:",p),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{customerEmail:n.customerEmail,installDate:n.installDate,vehicleVin:n.vehicleVin,photosCount:Object.keys(n.photos||{}).length,emailId:p.id}})}catch(d){return console.error("❌ Email sending error:",d),e.json({success:!1,error:"Failed to send email",details:d.message||"Unknown email error",debug:{apiKeyExists:!!r,apiKeyValid:r!=="your_resend_api_key_here",fromEmail:i,toEmail:n.customerEmail}},500)}}catch(n){return console.error("❌ Submit error:",n),e.json({success:!1,error:n.message||"Failed to submit checklist",stack:n.stack},500)}});const Ke=new ft,ts=Object.assign({"/src/index.tsx":Pe});let gt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
