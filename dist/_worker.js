var pt=Object.defineProperty;var Me=t=>{throw TypeError(t)};var xt=(t,e,s)=>e in t?pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>xt(t,typeof e!="symbol"?e+"":e,s),Ae=(t,e,s)=>e.has(t)||Me("Cannot "+s);var o=(t,e,s)=>(Ae(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>e.has(t)?Me("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,n)=>(Ae(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s),x=(t,e,s)=>(Ae(t,e,"access private method"),s);var qe=(t,e,s,n)=>({set _(r){f(t,e,r,s)},get _(){return o(t,e,n)}});var _e=(t,e,s)=>(n,r)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,h;if(t[d]?(h=t[d][0][0],n.req.routeIndex=d):h=d===t.length&&r||void 0,h)try{c=await h(n,()=>a(d+1))}catch(u){if(u instanceof Error&&e)n.error=u,c=await e(u,n),l=!0;else throw u}else n.finalized===!1&&s&&(c=await s(n));return c&&(n.finalized===!1||l)&&(n.res=c),n}},vt=Symbol(),bt=async(t,e=Object.create(null))=>{const{all:s=!1,dot:n=!1}=e,i=(t instanceof st?t.raw.headers:t.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?yt(t,{all:s,dot:n}):{}};async function yt(t,e){const s=await t.formData();return s?wt(s,e):{}}function wt(t,e){const s=Object.create(null);return t.forEach((n,r)=>{e.all||r.endsWith("[]")?Et(s,r,n):s[r]=n}),e.dot&&Object.entries(s).forEach(([n,r])=>{n.includes(".")&&(Rt(s,n,r),delete s[n])}),s}var Et=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},Rt=(t,e,s)=>{let n=t;const r=e.split(".");r.forEach((i,a)=>{a===r.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Je=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},It=t=>{const{groups:e,path:s}=kt(t),n=Je(s);return Ct(n,e)},kt=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,n)=>{const r=`@${n}`;return e.push([r,s]),r}),{groups:e,path:t}},Ct=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[n]=e[s];for(let r=t.length-1;r>=0;r--)if(t[r].includes(n)){t[r]=t[r].replace(n,e[s][1]);break}}return t},Ie={},St=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${t}#${e}`;return Ie[n]||(s[2]?Ie[n]=e&&e[0]!==":"&&e[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:Ie[n]=[t,s[1],!0]),Ie[n]}return null},Te=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},Ot=t=>Te(t,decodeURI),Qe=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let n=s;for(;n<e.length;n++){const r=e.charCodeAt(n);if(r===37){const i=e.indexOf("?",n),a=e.slice(s,i===-1?void 0:i);return Ot(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(r===63)break}return e.slice(s,n)},jt=t=>{const e=Qe(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},se=(t,e,...s)=>(s.length&&(e=se(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),Ze=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let n="";return e.forEach(r=>{if(r!==""&&!/\:/.test(r))n+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){s.length===0&&n===""?s.push("/"):s.push(n);const i=r.replace("?","");n+="/"+i,s.push(n)}else n+="/"+r}),s.filter((r,i,a)=>a.indexOf(r)===i)},He=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Te(t,tt):t):t,et=(t,e,s)=>{let n;if(!s&&e&&!/[%+]/.test(e)){let a=t.indexOf("?",8);if(a===-1)return;for(t.startsWith(e,a+1)||(a=t.indexOf(`&${e}`,a+1));a!==-1;){const d=t.charCodeAt(a+e.length+1);if(d===61){const c=a+e.length+2,l=t.indexOf("&",c);return He(t.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";a=t.indexOf(`&${e}`,a+1)}if(n=/[%+]/.test(t),!n)return}const r={};n??(n=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){const a=t.indexOf("&",i+1);let d=t.indexOf("=",i);d>a&&a!==-1&&(d=-1);let c=t.slice(i+1,d===-1?a===-1?void 0:a:d);if(n&&(c=He(c)),i=a,c==="")continue;let l;d===-1?l="":(l=t.slice(d+1,a===-1?void 0:a),n&&(l=He(l))),s?(r[c]&&Array.isArray(r[c])||(r[c]=[]),r[c].push(l)):r[c]??(r[c]=l)}return e?r[e]:r},Dt=et,Pt=(t,e)=>et(t,e,!0),tt=decodeURIComponent,Ue=t=>Te(t,tt),ie,S,T,nt,rt,Ne,_,Ke,st=(Ke=class{constructor(t,e="/",s=[[]]){g(this,T);m(this,"raw");g(this,ie);g(this,S);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});g(this,_,t=>{const{bodyCache:e,raw:s}=this,n=e[t];if(n)return n;const r=Object.keys(e)[0];return r?e[r].then(i=>(r==="json"&&(i=JSON.stringify(i)),new Response(i)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,f(this,S,s),f(this,ie,{})}param(t){return t?x(this,T,nt).call(this,t):x(this,T,rt).call(this)}query(t){return Dt(this.url,t)}queries(t){return Pt(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,n)=>{e[n]=s}),e}async parseBody(t){var e;return(e=this.bodyCache).parsedBody??(e.parsedBody=await bt(this,t))}json(){return o(this,_).call(this,"text").then(t=>JSON.parse(t))}text(){return o(this,_).call(this,"text")}arrayBuffer(){return o(this,_).call(this,"arrayBuffer")}blob(){return o(this,_).call(this,"blob")}formData(){return o(this,_).call(this,"formData")}addValidatedData(t,e){o(this,ie)[t]=e}valid(t){return o(this,ie)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[vt](){return o(this,S)}get matchedRoutes(){return o(this,S)[0].map(([[,t]])=>t)}get routePath(){return o(this,S)[0].map(([[,t]])=>t)[this.routeIndex].path}},ie=new WeakMap,S=new WeakMap,T=new WeakSet,nt=function(t){const e=o(this,S)[0][this.routeIndex][1][t],s=x(this,T,Ne).call(this,e);return s&&/\%/.test(s)?Ue(s):s},rt=function(){const t={},e=Object.keys(o(this,S)[0][this.routeIndex][1]);for(const s of e){const n=x(this,T,Ne).call(this,o(this,S)[0][this.routeIndex][1][s]);n!==void 0&&(t[s]=/\%/.test(n)?Ue(n):n)}return t},Ne=function(t){return o(this,S)[1]?o(this,S)[1][t]:t},_=new WeakMap,Ke),$t={Stringify:1},it=async(t,e,s,n,r)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const i=t.callbacks;return i!=null&&i.length?(r?r[0]+=t:r=[t],Promise.all(i.map(d=>d({phase:e,buffer:r,context:n}))).then(d=>Promise.all(d.filter(Boolean).map(c=>it(c,e,!1,n,r))).then(()=>r[0]))):Promise.resolve(t)},At="text/plain; charset=UTF-8",Le=(t,e)=>({"Content-Type":t,...e}),pe,xe,A,oe,H,k,ve,ae,ce,Y,be,ye,U,ne,We,Ht=(We=class{constructor(t,e){g(this,U);g(this,pe);g(this,xe);m(this,"env",{});g(this,A);m(this,"finalized",!1);m(this,"error");g(this,oe);g(this,H);g(this,k);g(this,ve);g(this,ae);g(this,ce);g(this,Y);g(this,be);g(this,ye);m(this,"render",(...t)=>(o(this,ae)??f(this,ae,e=>this.html(e)),o(this,ae).call(this,...t)));m(this,"setLayout",t=>f(this,ve,t));m(this,"getLayout",()=>o(this,ve));m(this,"setRenderer",t=>{f(this,ae,t)});m(this,"header",(t,e,s)=>{this.finalized&&f(this,k,new Response(o(this,k).body,o(this,k)));const n=o(this,k)?o(this,k).headers:o(this,Y)??f(this,Y,new Headers);e===void 0?n.delete(t):s!=null&&s.append?n.append(t,e):n.set(t,e)});m(this,"status",t=>{f(this,oe,t)});m(this,"set",(t,e)=>{o(this,A)??f(this,A,new Map),o(this,A).set(t,e)});m(this,"get",t=>o(this,A)?o(this,A).get(t):void 0);m(this,"newResponse",(...t)=>x(this,U,ne).call(this,...t));m(this,"body",(t,e,s)=>x(this,U,ne).call(this,t,e,s));m(this,"text",(t,e,s)=>!o(this,Y)&&!o(this,oe)&&!e&&!s&&!this.finalized?new Response(t):x(this,U,ne).call(this,t,e,Le(At,s)));m(this,"json",(t,e,s)=>x(this,U,ne).call(this,JSON.stringify(t),e,Le("application/json",s)));m(this,"html",(t,e,s)=>{const n=r=>x(this,U,ne).call(this,r,e,Le("text/html; charset=UTF-8",s));return typeof t=="object"?it(t,$t.Stringify,!1,{}).then(n):n(t)});m(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});m(this,"notFound",()=>(o(this,ce)??f(this,ce,()=>new Response),o(this,ce).call(this,this)));f(this,pe,t),e&&(f(this,H,e.executionCtx),this.env=e.env,f(this,ce,e.notFoundHandler),f(this,ye,e.path),f(this,be,e.matchResult))}get req(){return o(this,xe)??f(this,xe,new st(o(this,pe),o(this,ye),o(this,be))),o(this,xe)}get event(){if(o(this,H)&&"respondWith"in o(this,H))return o(this,H);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,H))return o(this,H);throw Error("This context has no ExecutionContext")}get res(){return o(this,k)||f(this,k,new Response(null,{headers:o(this,Y)??f(this,Y,new Headers)}))}set res(t){if(o(this,k)&&t){t=new Response(t.body,t);for(const[e,s]of o(this,k).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const n=o(this,k).headers.getSetCookie();t.headers.delete("set-cookie");for(const r of n)t.headers.append("set-cookie",r)}else t.headers.set(e,s)}f(this,k,t),this.finalized=!0}get var(){return o(this,A)?Object.fromEntries(o(this,A)):{}}},pe=new WeakMap,xe=new WeakMap,A=new WeakMap,oe=new WeakMap,H=new WeakMap,k=new WeakMap,ve=new WeakMap,ae=new WeakMap,ce=new WeakMap,Y=new WeakMap,be=new WeakMap,ye=new WeakMap,U=new WeakSet,ne=function(t,e,s){const n=o(this,k)?new Headers(o(this,k).headers):o(this,Y)??new Headers;if(typeof e=="object"&&"headers"in e){const i=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?n.append(a,d):n.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")n.set(i,a);else{n.delete(i);for(const d of a)n.append(i,d)}const r=typeof e=="number"?e:(e==null?void 0:e.status)??o(this,oe);return new Response(t,{status:r,headers:n})},We),y="ALL",Lt="all",Nt=["get","post","put","delete","options","patch"],ot="Can not add a route since the matcher is already built.",at=class extends Error{},Tt="__COMPOSED_HANDLER",Bt=t=>t.text("404 Not Found",404),Fe=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},O,w,ct,j,z,ke,Ce,le,Mt=(le=class{constructor(e={}){g(this,w);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");g(this,O,"/");m(this,"routes",[]);g(this,j,Bt);m(this,"errorHandler",Fe);m(this,"onError",e=>(this.errorHandler=e,this));m(this,"notFound",e=>(f(this,j,e),this));m(this,"fetch",(e,...s)=>x(this,w,Ce).call(this,e,s[1],s[0],e.method));m(this,"request",(e,s,n,r)=>e instanceof Request?this.fetch(s?new Request(e,s):e,n,r):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${se("/",e)}`,s),n,r)));m(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(x(this,w,Ce).call(this,e.request,e,void 0,e.request.method))})});[...Nt,Lt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?f(this,O,a):x(this,w,z).call(this,i,o(this,O),a),d.forEach(c=>{x(this,w,z).call(this,i,o(this,O),c)}),this)}),this.on=(i,a,...d)=>{for(const c of[a].flat()){f(this,O,c);for(const l of[i].flat())d.map(h=>{x(this,w,z).call(this,l.toUpperCase(),o(this,O),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?f(this,O,i):(f(this,O,"*"),a.unshift(i)),a.forEach(d=>{x(this,w,z).call(this,y,o(this,O),d)}),this);const{strict:n,...r}=e;Object.assign(this,r),this.getPath=n??!0?e.getPath??Qe:jt}route(e,s){const n=this.basePath(e);return s.routes.map(r=>{var a;let i;s.errorHandler===Fe?i=r.handler:(i=async(d,c)=>(await _e([],s.errorHandler)(d,()=>r.handler(d,c))).res,i[Tt]=r.handler),x(a=n,w,z).call(a,r.method,r.path,i)}),this}basePath(e){const s=x(this,w,ct).call(this);return s._basePath=se(this._basePath,e),s}mount(e,s,n){let r,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?r=c=>c:r=n.replaceRequest));const a=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};r||(r=(()=>{const c=se(this._basePath,e),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(r(c.req.raw),...a(c));if(h)return h;await l()};return x(this,w,z).call(this,y,se(e,"*"),d),this}},O=new WeakMap,w=new WeakSet,ct=function(){const e=new le({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,f(e,j,o(this,j)),e.routes=this.routes,e},j=new WeakMap,z=function(e,s,n){e=e.toUpperCase(),s=se(this._basePath,s);const r={basePath:this._basePath,path:s,method:e,handler:n};this.router.add(e,s,[n,r]),this.routes.push(r)},ke=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},Ce=function(e,s,n,r){if(r==="HEAD")return(async()=>new Response(null,await x(this,w,Ce).call(this,e,s,n,"GET")))();const i=this.getPath(e,{env:n}),a=this.router.match(r,i),d=new Ht(e,{path:i,matchResult:a,env:n,executionCtx:s,notFoundHandler:o(this,j)});if(a[0].length===1){let l;try{l=a[0][0][0][0](d,async()=>{d.res=await o(this,j).call(this,d)})}catch(h){return x(this,w,ke).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:o(this,j).call(this,d))).catch(h=>x(this,w,ke).call(this,h,d)):l??o(this,j).call(this,d)}const c=_e(a[0],this.errorHandler,o(this,j));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,w,ke).call(this,l,d)}})()},le),lt=[];function qt(t,e){const s=this.buildAllMatchers(),n=((r,i)=>{const a=s[r]||s[y],d=a[2][i];if(d)return d;const c=i.match(a[0]);if(!c)return[[],lt];const l=c.indexOf("",1);return[a[1][l],c]});return this.match=n,n(t,e)}var Oe="[^/]+",me=".*",ge="(?:|/.*)",re=Symbol(),_t=new Set(".\\+*[^]$()");function Ut(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===me||t===ge?1:e===me||e===ge?-1:t===Oe?1:e===Oe?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var X,J,D,ee,Ft=(ee=class{constructor(){g(this,X);g(this,J);g(this,D,Object.create(null))}insert(e,s,n,r,i){if(e.length===0){if(o(this,X)!==void 0)throw re;if(i)return;f(this,X,s);return}const[a,...d]=e,c=a==="*"?d.length===0?["","",me]:["","",Oe]:a==="/*"?["","",ge]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||Oe;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw re;if(l=o(this,D)[u],!l){if(Object.keys(o(this,D)).some(p=>p!==me&&p!==ge))throw re;if(i)return;l=o(this,D)[u]=new ee,h!==""&&f(l,J,r.varIndex++)}!i&&h!==""&&n.push([h,o(l,J)])}else if(l=o(this,D)[a],!l){if(Object.keys(o(this,D)).some(h=>h.length>1&&h!==me&&h!==ge))throw re;if(i)return;l=o(this,D)[a]=new ee}l.insert(d,s,n,r,i)}buildRegExpStr(){const s=Object.keys(o(this,D)).sort(Ut).map(n=>{const r=o(this,D)[n];return(typeof o(r,J)=="number"?`(${n})@${o(r,J)}`:_t.has(n)?`\\${n}`:n)+r.buildRegExpStr()});return typeof o(this,X)=="number"&&s.unshift(`#${o(this,X)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},X=new WeakMap,J=new WeakMap,D=new WeakMap,ee),je,we,ze,Vt=(ze=class{constructor(){g(this,je,{varIndex:0});g(this,we,new Ft)}insert(t,e,s){const n=[],r=[];for(let a=0;;){let d=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{const l=`@\\${a}`;return r[a]=[l,c],a++,d=!0,l}),!d)break}const i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=r.length-1;a>=0;a--){const[d]=r[a];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,r[a][1]);break}}return o(this,we).insert(i,e,n,o(this,je),s),n}buildRegExp(){let t=o(this,we).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],n=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,i,a)=>i!==void 0?(s[++e]=Number(i),"$()"):(a!==void 0&&(n[Number(a)]=++e),"")),[new RegExp(`^${t}`),s,n]}},je=new WeakMap,we=new WeakMap,ze),Kt=[/^$/,[],Object.create(null)],Se=Object.create(null);function dt(t){return Se[t]??(Se[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Se=Object.create(null)}function zt(t){var l;const e=new Vt,s=[];if(t.length===0)return Kt;const n=t.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[p,b])=>h?1:p?-1:u.length-b.length),r=Object.create(null);for(let h=0,u=-1,p=n.length;h<p;h++){const[b,C,B]=n[h];b?r[C]=[B.map(([I])=>[I,Object.create(null)]),lt]:u++;let v;try{v=e.insert(C,u,b)}catch(I){throw I===re?new at(C):I}b||(s[u]=B.map(([I,M])=>{const Ee=Object.create(null);for(M-=1;M>=0;M--){const[Re,P]=v[M];Ee[Re]=P}return[I,Ee]}))}const[i,a,d]=e.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let p=0,b=s[h].length;p<b;p++){const C=(l=s[h][p])==null?void 0:l[1];if(!C)continue;const B=Object.keys(C);for(let v=0,I=B.length;v<I;v++)C[B[v]]=d[C[B[v]]]}const c=[];for(const h in a)c[h]=s[a[h]];return[i,c,r]}function te(t,e){if(t){for(const s of Object.keys(t).sort((n,r)=>r.length-n.length))if(dt(s).test(e))return[...t[s]]}}var F,V,De,ht,Ge,Gt=(Ge=class{constructor(){g(this,De);m(this,"name","RegExpRouter");g(this,F);g(this,V);m(this,"match",qt);f(this,F,{[y]:Object.create(null)}),f(this,V,{[y]:Object.create(null)})}add(t,e,s){var d;const n=o(this,F),r=o(this,V);if(!n||!r)throw new Error(ot);n[t]||[n,r].forEach(c=>{c[t]=Object.create(null),Object.keys(c[y]).forEach(l=>{c[t][l]=[...c[y][l]]})}),e==="/*"&&(e="*");const i=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const c=dt(e);t===y?Object.keys(n).forEach(l=>{var h;(h=n[l])[e]||(h[e]=te(n[l],e)||te(n[y],e)||[])}):(d=n[t])[e]||(d[e]=te(n[t],e)||te(n[y],e)||[]),Object.keys(n).forEach(l=>{(t===y||t===l)&&Object.keys(n[l]).forEach(h=>{c.test(h)&&n[l][h].push([s,i])})}),Object.keys(r).forEach(l=>{(t===y||t===l)&&Object.keys(r[l]).forEach(h=>c.test(h)&&r[l][h].push([s,i]))});return}const a=Ze(e)||[e];for(let c=0,l=a.length;c<l;c++){const h=a[c];Object.keys(r).forEach(u=>{var p;(t===y||t===u)&&((p=r[u])[h]||(p[h]=[...te(n[u],h)||te(n[y],h)||[]]),r[u][h].push([s,i-l+c+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(o(this,V)).concat(Object.keys(o(this,F))).forEach(e=>{t[e]||(t[e]=x(this,De,ht).call(this,e))}),f(this,F,f(this,V,void 0)),Wt(),t}},F=new WeakMap,V=new WeakMap,De=new WeakSet,ht=function(t){const e=[];let s=t===y;return[o(this,F),o(this,V)].forEach(n=>{const r=n[t]?Object.keys(n[t]).map(i=>[i,n[t][i]]):[];r.length!==0?(s||(s=!0),e.push(...r)):t!==y&&e.push(...Object.keys(n[y]).map(i=>[i,n[y][i]]))}),s?zt(e):null},Ge),K,L,Ye,Yt=(Ye=class{constructor(t){m(this,"name","SmartRouter");g(this,K,[]);g(this,L,[]);f(this,K,t.routers)}add(t,e,s){if(!o(this,L))throw new Error(ot);o(this,L).push([t,e,s])}match(t,e){if(!o(this,L))throw new Error("Fatal error");const s=o(this,K),n=o(this,L),r=s.length;let i=0,a;for(;i<r;i++){const d=s[i];try{for(let c=0,l=n.length;c<l;c++)d.add(...n[c]);a=d.match(t,e)}catch(c){if(c instanceof at)continue;throw c}this.match=d.match.bind(d),f(this,K,[d]),f(this,L,void 0);break}if(i===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,L)||o(this,K).length!==1)throw new Error("No active router has been determined yet.");return o(this,K)[0]}},K=new WeakMap,L=new WeakMap,Ye),fe=Object.create(null),W,R,Q,de,E,N,G,he,Xt=(he=class{constructor(e,s,n){g(this,N);g(this,W);g(this,R);g(this,Q);g(this,de,0);g(this,E,fe);if(f(this,R,n||Object.create(null)),f(this,W,[]),e&&s){const r=Object.create(null);r[e]={handler:s,possibleKeys:[],score:0},f(this,W,[r])}f(this,Q,[])}insert(e,s,n){f(this,de,++qe(this,de)._);let r=this;const i=It(s),a=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],h=i[d+1],u=St(l,h),p=Array.isArray(u)?u[0]:l;if(p in o(r,R)){r=o(r,R)[p],u&&a.push(u[1]);continue}o(r,R)[p]=new he,u&&(o(r,Q).push(u),a.push(u[1])),r=o(r,R)[p]}return o(r,W).push({[e]:{handler:n,possibleKeys:a.filter((d,c,l)=>l.indexOf(d)===c),score:o(this,de)}}),r}search(e,s){var c;const n=[];f(this,E,fe);let i=[this];const a=Je(s),d=[];for(let l=0,h=a.length;l<h;l++){const u=a[l],p=l===h-1,b=[];for(let C=0,B=i.length;C<B;C++){const v=i[C],I=o(v,R)[u];I&&(f(I,E,o(v,E)),p?(o(I,R)["*"]&&n.push(...x(this,N,G).call(this,o(I,R)["*"],e,o(v,E))),n.push(...x(this,N,G).call(this,I,e,o(v,E)))):b.push(I));for(let M=0,Ee=o(v,Q).length;M<Ee;M++){const Re=o(v,Q)[M],P=o(v,E)===fe?{}:{...o(v,E)};if(Re==="*"){const q=o(v,R)["*"];q&&(n.push(...x(this,N,G).call(this,q,e,o(v,E))),f(q,E,P),b.push(q));continue}const[mt,Be,ue]=Re;if(!u&&!(ue instanceof RegExp))continue;const $=o(v,R)[mt],gt=a.slice(l).join("/");if(ue instanceof RegExp){const q=ue.exec(gt);if(q){if(P[Be]=q[0],n.push(...x(this,N,G).call(this,$,e,o(v,E),P)),Object.keys(o($,R)).length){f($,E,P);const $e=((c=q[0].match(/\//))==null?void 0:c.length)??0;(d[$e]||(d[$e]=[])).push($)}continue}}(ue===!0||ue.test(u))&&(P[Be]=u,p?(n.push(...x(this,N,G).call(this,$,e,P,o(v,E))),o($,R)["*"]&&n.push(...x(this,N,G).call(this,o($,R)["*"],e,P,o(v,E)))):(f($,E,P),b.push($)))}}i=b.concat(d.shift()??[])}return n.length>1&&n.sort((l,h)=>l.score-h.score),[n.map(({handler:l,params:h})=>[l,h])]}},W=new WeakMap,R=new WeakMap,Q=new WeakMap,de=new WeakMap,E=new WeakMap,N=new WeakSet,G=function(e,s,n,r){const i=[];for(let a=0,d=o(e,W).length;a<d;a++){const c=o(e,W)[a],l=c[s]||c[y],h={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),n!==fe||r&&r!==fe))for(let u=0,p=l.possibleKeys.length;u<p;u++){const b=l.possibleKeys[u],C=h[l.score];l.params[b]=r!=null&&r[b]&&!C?r[b]:n[b]??(r==null?void 0:r[b]),h[l.score]=!0}}return i},he),Z,Xe,Jt=(Xe=class{constructor(){m(this,"name","TrieRouter");g(this,Z);f(this,Z,new Xt)}add(t,e,s){const n=Ze(e);if(n){for(let r=0,i=n.length;r<i;r++)o(this,Z).insert(t,n[r],s);return}o(this,Z).insert(t,e,s)}match(t,e){return o(this,Z).search(t,e)}},Z=new WeakMap,Xe),ut=class extends Mt{constructor(t={}){super(t),this.router=t.router??new Yt({routers:[new Gt,new Jt]})}},Qt=t=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},n=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),r=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function c(u,p){a.res.headers.set(u,p)}const l=await n(a.req.header("origin")||"",a);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await r(a.req.header("origin")||"",a);u.length&&c("Access-Control-Allow-Methods",u.join(","));let p=s.allowHeaders;if(!(p!=null&&p.length)){const b=a.req.header("Access-Control-Request-Headers");b&&(p=b.split(/\s*,\s*/))}return p!=null&&p.length&&(c("Access-Control-Allow-Headers",p.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const Pe=new ut;Pe.use("/api/*",Qt());Pe.get("/",t=>t.html(`
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
  `));Pe.post("/api/submit",async t=>{try{const e=await t.req.json();return console.log("Received checklist submission"),console.log("Customer Email:",e.customerEmail),console.log("Photos count:",Object.keys(e.photos||{}).length),t.json({success:!0,message:"Checklist submitted successfully",data:{customerEmail:e.customerEmail,installDate:e.installDate,vehicleVin:e.vehicleVin,photosCount:Object.keys(e.photos||{}).length}})}catch(e){return console.error("Submit error:",e),t.json({success:!1,error:e.message||"Failed to submit checklist"},500)}});const Ve=new ut,Zt=Object.assign({"/src/index.tsx":Pe});let ft=!1;for(const[,t]of Object.entries(Zt))t&&(Ve.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),Ve.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),ft=!0);if(!ft)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ve as default};
