var pt=Object.defineProperty;var Me=t=>{throw TypeError(t)};var xt=(t,e,s)=>e in t?pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>xt(t,typeof e!="symbol"?e+"":e,s),Ie=(t,e,s)=>e.has(t)||Me("Cannot "+s);var a=(t,e,s)=>(Ie(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>e.has(t)?Me("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s,r)=>(Ie(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),x=(t,e,s)=>(Ie(t,e,"access private method"),s);var qe=(t,e,s,r)=>({set _(n){f(t,e,n,s)},get _(){return a(t,e,r)}});var Be=(t,e,s)=>(r,n)=>{let i=-1;return o(0);async function o(d){if(d<=i)throw new Error("next() called multiple times");i=d;let c,l=!1,h;if(t[d]?(h=t[d][0][0],r.req.routeIndex=d):h=d===t.length&&n||void 0,h)try{c=await h(r,()=>o(d+1))}catch(u){if(u instanceof Error&&e)r.error=u,c=await e(u,r),l=!0;else throw u}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},vt=Symbol(),bt=async(t,e=Object.create(null))=>{const{all:s=!1,dot:r=!1}=e,i=(t instanceof st?t.raw.headers:t.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?yt(t,{all:s,dot:r}):{}};async function yt(t,e){const s=await t.formData();return s?wt(s,e):{}}function wt(t,e){const s=Object.create(null);return t.forEach((r,n)=>{e.all||n.endsWith("[]")?Et(s,n,r):s[n]=r}),e.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Rt(s,r,n),delete s[r])}),s}var Et=(t,e,s)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(s):t[e]=[t[e],s]:e.endsWith("[]")?t[e]=[s]:t[e]=s},Rt=(t,e,s)=>{let r=t;const n=e.split(".");n.forEach((i,o)=>{o===n.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Je=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},St=t=>{const{groups:e,path:s}=Ot(t),r=Je(s);return kt(r,e)},Ot=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return e.push([n,s]),n}),{groups:e,path:t}},kt=(t,e)=>{for(let s=e.length-1;s>=0;s--){const[r]=e[s];for(let n=t.length-1;n>=0;n--)if(t[n].includes(r)){t[n]=t[n].replace(r,e[s][1]);break}}return t},Se={},Ct=(t,e)=>{if(t==="*")return"*";const s=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${t}#${e}`;return Se[r]||(s[2]?Se[r]=e&&e[0]!==":"&&e[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${e})`)]:[t,s[1],new RegExp(`^${s[2]}$`)]:Se[r]=[t,s[1],!0]),Se[r]}return null},Te=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return e(s)}catch{return s}})}},jt=t=>Te(t,decodeURI),Qe=t=>{const e=t.url,s=e.indexOf("/",e.indexOf(":")+4);let r=s;for(;r<e.length;r++){const n=e.charCodeAt(r);if(n===37){const i=e.indexOf("?",r),o=e.slice(s,i===-1?void 0:i);return jt(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(n===63)break}return e.slice(s,r)},Dt=t=>{const e=Qe(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},se=(t,e,...s)=>(s.length&&(e=se(e,...s)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),Ze=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),s=[];let r="";return e.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const i=n.replace("?","");r+="/"+i,s.push(r)}else r+="/"+n}),s.filter((n,i,o)=>o.indexOf(n)===i)},Le=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Te(t,tt):t):t,et=(t,e,s)=>{let r;if(!s&&e&&!/[%+]/.test(e)){let o=t.indexOf("?",8);if(o===-1)return;for(t.startsWith(e,o+1)||(o=t.indexOf(`&${e}`,o+1));o!==-1;){const d=t.charCodeAt(o+e.length+1);if(d===61){const c=o+e.length+2,l=t.indexOf("&",c);return Le(t.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";o=t.indexOf(`&${e}`,o+1)}if(r=/[%+]/.test(t),!r)return}const n={};r??(r=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){const o=t.indexOf("&",i+1);let d=t.indexOf("=",i);d>o&&o!==-1&&(d=-1);let c=t.slice(i+1,d===-1?o===-1?void 0:o:d);if(r&&(c=Le(c)),i=o,c==="")continue;let l;d===-1?l="":(l=t.slice(d+1,o===-1?void 0:o),r&&(l=Le(l))),s?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(l)):n[c]??(n[c]=l)}return e?n[e]:n},At=et,Pt=(t,e)=>et(t,e,!0),tt=decodeURIComponent,Fe=t=>Te(t,tt),ie,C,T,rt,nt,$e,B,We,st=(We=class{constructor(t,e="/",s=[[]]){m(this,T);g(this,"raw");m(this,ie);m(this,C);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});m(this,B,t=>{const{bodyCache:e,raw:s}=this,r=e[t];if(r)return r;const n=Object.keys(e)[0];return n?e[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[t]())):e[t]=s[t]()});this.raw=t,this.path=e,f(this,C,s),f(this,ie,{})}param(t){return t?x(this,T,rt).call(this,t):x(this,T,nt).call(this)}query(t){return At(this.url,t)}queries(t){return Pt(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((s,r)=>{e[r]=s}),e}async parseBody(t){var e;return(e=this.bodyCache).parsedBody??(e.parsedBody=await bt(this,t))}json(){return a(this,B).call(this,"text").then(t=>JSON.parse(t))}text(){return a(this,B).call(this,"text")}arrayBuffer(){return a(this,B).call(this,"arrayBuffer")}blob(){return a(this,B).call(this,"blob")}formData(){return a(this,B).call(this,"formData")}addValidatedData(t,e){a(this,ie)[t]=e}valid(t){return a(this,ie)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get[vt](){return a(this,C)}get matchedRoutes(){return a(this,C)[0].map(([[,t]])=>t)}get routePath(){return a(this,C)[0].map(([[,t]])=>t)[this.routeIndex].path}},ie=new WeakMap,C=new WeakMap,T=new WeakSet,rt=function(t){const e=a(this,C)[0][this.routeIndex][1][t],s=x(this,T,$e).call(this,e);return s&&/\%/.test(s)?Fe(s):s},nt=function(){const t={},e=Object.keys(a(this,C)[0][this.routeIndex][1]);for(const s of e){const r=x(this,T,$e).call(this,a(this,C)[0][this.routeIndex][1][s]);r!==void 0&&(t[s]=/\%/.test(r)?Fe(r):r)}return t},$e=function(t){return a(this,C)[1]?a(this,C)[1][t]:t},B=new WeakMap,We),Ht={Stringify:1},it=async(t,e,s,r,n)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const i=t.callbacks;return i!=null&&i.length?(n?n[0]+=t:n=[t],Promise.all(i.map(d=>d({phase:e,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>it(c,e,!1,r,n))).then(()=>n[0]))):Promise.resolve(t)},It="text/plain; charset=UTF-8",Ne=(t,e)=>({"Content-Type":t,...e}),pe,xe,I,ae,L,O,ve,oe,ce,Y,be,ye,F,re,Ke,Lt=(Ke=class{constructor(t,e){m(this,F);m(this,pe);m(this,xe);g(this,"env",{});m(this,I);g(this,"finalized",!1);g(this,"error");m(this,ae);m(this,L);m(this,O);m(this,ve);m(this,oe);m(this,ce);m(this,Y);m(this,be);m(this,ye);g(this,"render",(...t)=>(a(this,oe)??f(this,oe,e=>this.html(e)),a(this,oe).call(this,...t)));g(this,"setLayout",t=>f(this,ve,t));g(this,"getLayout",()=>a(this,ve));g(this,"setRenderer",t=>{f(this,oe,t)});g(this,"header",(t,e,s)=>{this.finalized&&f(this,O,new Response(a(this,O).body,a(this,O)));const r=a(this,O)?a(this,O).headers:a(this,Y)??f(this,Y,new Headers);e===void 0?r.delete(t):s!=null&&s.append?r.append(t,e):r.set(t,e)});g(this,"status",t=>{f(this,ae,t)});g(this,"set",(t,e)=>{a(this,I)??f(this,I,new Map),a(this,I).set(t,e)});g(this,"get",t=>a(this,I)?a(this,I).get(t):void 0);g(this,"newResponse",(...t)=>x(this,F,re).call(this,...t));g(this,"body",(t,e,s)=>x(this,F,re).call(this,t,e,s));g(this,"text",(t,e,s)=>!a(this,Y)&&!a(this,ae)&&!e&&!s&&!this.finalized?new Response(t):x(this,F,re).call(this,t,e,Ne(It,s)));g(this,"json",(t,e,s)=>x(this,F,re).call(this,JSON.stringify(t),e,Ne("application/json",s)));g(this,"html",(t,e,s)=>{const r=n=>x(this,F,re).call(this,n,e,Ne("text/html; charset=UTF-8",s));return typeof t=="object"?it(t,Ht.Stringify,!1,{}).then(r):r(t)});g(this,"redirect",(t,e)=>{const s=String(t);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,e??302)});g(this,"notFound",()=>(a(this,ce)??f(this,ce,()=>new Response),a(this,ce).call(this,this)));f(this,pe,t),e&&(f(this,L,e.executionCtx),this.env=e.env,f(this,ce,e.notFoundHandler),f(this,ye,e.path),f(this,be,e.matchResult))}get req(){return a(this,xe)??f(this,xe,new st(a(this,pe),a(this,ye),a(this,be))),a(this,xe)}get event(){if(a(this,L)&&"respondWith"in a(this,L))return a(this,L);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,L))return a(this,L);throw Error("This context has no ExecutionContext")}get res(){return a(this,O)||f(this,O,new Response(null,{headers:a(this,Y)??f(this,Y,new Headers)}))}set res(t){if(a(this,O)&&t){t=new Response(t.body,t);for(const[e,s]of a(this,O).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const r=a(this,O).headers.getSetCookie();t.headers.delete("set-cookie");for(const n of r)t.headers.append("set-cookie",n)}else t.headers.set(e,s)}f(this,O,t),this.finalized=!0}get var(){return a(this,I)?Object.fromEntries(a(this,I)):{}}},pe=new WeakMap,xe=new WeakMap,I=new WeakMap,ae=new WeakMap,L=new WeakMap,O=new WeakMap,ve=new WeakMap,oe=new WeakMap,ce=new WeakMap,Y=new WeakMap,be=new WeakMap,ye=new WeakMap,F=new WeakSet,re=function(t,e,s){const r=a(this,O)?new Headers(a(this,O).headers):a(this,Y)??new Headers;if(typeof e=="object"&&"headers"in e){const i=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(const[o,d]of i)o.toLowerCase()==="set-cookie"?r.append(o,d):r.set(o,d)}if(s)for(const[i,o]of Object.entries(s))if(typeof o=="string")r.set(i,o);else{r.delete(i);for(const d of o)r.append(i,d)}const n=typeof e=="number"?e:(e==null?void 0:e.status)??a(this,ae);return new Response(t,{status:n,headers:r})},Ke),y="ALL",Nt="all",$t=["get","post","put","delete","options","patch"],at="Can not add a route since the matcher is already built.",ot=class extends Error{},Tt="__COMPOSED_HANDLER",_t=t=>t.text("404 Not Found",404),Ve=(t,e)=>{if("getResponse"in t){const s=t.getResponse();return e.newResponse(s.body,s)}return console.error(t),e.text("Internal Server Error",500)},j,w,ct,D,G,Oe,ke,le,Mt=(le=class{constructor(e={}){m(this,w);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");m(this,j,"/");g(this,"routes",[]);m(this,D,_t);g(this,"errorHandler",Ve);g(this,"onError",e=>(this.errorHandler=e,this));g(this,"notFound",e=>(f(this,D,e),this));g(this,"fetch",(e,...s)=>x(this,w,ke).call(this,e,s[1],s[0],e.method));g(this,"request",(e,s,r,n)=>e instanceof Request?this.fetch(s?new Request(e,s):e,r,n):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${se("/",e)}`,s),r,n)));g(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(x(this,w,ke).call(this,e.request,e,void 0,e.request.method))})});[...$t,Nt].forEach(i=>{this[i]=(o,...d)=>(typeof o=="string"?f(this,j,o):x(this,w,G).call(this,i,a(this,j),o),d.forEach(c=>{x(this,w,G).call(this,i,a(this,j),c)}),this)}),this.on=(i,o,...d)=>{for(const c of[o].flat()){f(this,j,c);for(const l of[i].flat())d.map(h=>{x(this,w,G).call(this,l.toUpperCase(),a(this,j),h)})}return this},this.use=(i,...o)=>(typeof i=="string"?f(this,j,i):(f(this,j,"*"),o.unshift(i)),o.forEach(d=>{x(this,w,G).call(this,y,a(this,j),d)}),this);const{strict:r,...n}=e;Object.assign(this,n),this.getPath=r??!0?e.getPath??Qe:Dt}route(e,s){const r=this.basePath(e);return s.routes.map(n=>{var o;let i;s.errorHandler===Ve?i=n.handler:(i=async(d,c)=>(await Be([],s.errorHandler)(d,()=>n.handler(d,c))).res,i[Tt]=n.handler),x(o=r,w,G).call(o,n.method,n.path,i)}),this}basePath(e){const s=x(this,w,ct).call(this);return s._basePath=se(this._basePath,e),s}mount(e,s,r){let n,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?n=c=>c:n=r.replaceRequest));const o=i?c=>{const l=i(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};n||(n=(()=>{const c=se(this._basePath,e),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(n(c.req.raw),...o(c));if(h)return h;await l()};return x(this,w,G).call(this,y,se(e,"*"),d),this}},j=new WeakMap,w=new WeakSet,ct=function(){const e=new le({router:this.router,getPath:this.getPath});return e.errorHandler=this.errorHandler,f(e,D,a(this,D)),e.routes=this.routes,e},D=new WeakMap,G=function(e,s,r){e=e.toUpperCase(),s=se(this._basePath,s);const n={basePath:this._basePath,path:s,method:e,handler:r};this.router.add(e,s,[r,n]),this.routes.push(n)},Oe=function(e,s){if(e instanceof Error)return this.errorHandler(e,s);throw e},ke=function(e,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,w,ke).call(this,e,s,r,"GET")))();const i=this.getPath(e,{env:r}),o=this.router.match(n,i),d=new Lt(e,{path:i,matchResult:o,env:r,executionCtx:s,notFoundHandler:a(this,D)});if(o[0].length===1){let l;try{l=o[0][0][0][0](d,async()=>{d.res=await a(this,D).call(this,d)})}catch(h){return x(this,w,Oe).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:a(this,D).call(this,d))).catch(h=>x(this,w,Oe).call(this,h,d)):l??a(this,D).call(this,d)}const c=Be(o[0],this.errorHandler,a(this,D));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,w,Oe).call(this,l,d)}})()},le),lt=[];function qt(t,e){const s=this.buildAllMatchers(),r=((n,i)=>{const o=s[n]||s[y],d=o[2][i];if(d)return d;const c=i.match(o[0]);if(!c)return[[],lt];const l=c.indexOf("",1);return[o[1][l],c]});return this.match=r,r(t,e)}var je="[^/]+",ge=".*",me="(?:|/.*)",ne=Symbol(),Bt=new Set(".\\+*[^]$()");function Ft(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===ge||t===me?1:e===ge||e===me?-1:t===je?1:e===je?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var X,J,A,ee,Vt=(ee=class{constructor(){m(this,X);m(this,J);m(this,A,Object.create(null))}insert(e,s,r,n,i){if(e.length===0){if(a(this,X)!==void 0)throw ne;if(i)return;f(this,X,s);return}const[o,...d]=e,c=o==="*"?d.length===0?["","",ge]:["","",je]:o==="/*"?["","",me]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||je;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ne;if(l=a(this,A)[u],!l){if(Object.keys(a(this,A)).some(p=>p!==ge&&p!==me))throw ne;if(i)return;l=a(this,A)[u]=new ee,h!==""&&f(l,J,n.varIndex++)}!i&&h!==""&&r.push([h,a(l,J)])}else if(l=a(this,A)[o],!l){if(Object.keys(a(this,A)).some(h=>h.length>1&&h!==ge&&h!==me))throw ne;if(i)return;l=a(this,A)[o]=new ee}l.insert(d,s,r,n,i)}buildRegExpStr(){const s=Object.keys(a(this,A)).sort(Ft).map(r=>{const n=a(this,A)[r];return(typeof a(n,J)=="number"?`(${r})@${a(n,J)}`:Bt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof a(this,X)=="number"&&s.unshift(`#${a(this,X)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},X=new WeakMap,J=new WeakMap,A=new WeakMap,ee),De,we,Ge,Ut=(Ge=class{constructor(){m(this,De,{varIndex:0});m(this,we,new Vt)}insert(t,e,s){const r=[],n=[];for(let o=0;;){let d=!1;if(t=t.replace(/\{[^}]+\}/g,c=>{const l=`@\\${o}`;return n[o]=[l,c],o++,d=!0,l}),!d)break}const i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=n.length-1;o>=0;o--){const[d]=n[o];for(let c=i.length-1;c>=0;c--)if(i[c].indexOf(d)!==-1){i[c]=i[c].replace(d,n[o][1]);break}}return a(this,we).insert(i,e,r,a(this,De),s),r}buildRegExp(){let t=a(this,we).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const s=[],r=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,o)=>i!==void 0?(s[++e]=Number(i),"$()"):(o!==void 0&&(r[Number(o)]=++e),"")),[new RegExp(`^${t}`),s,r]}},De=new WeakMap,we=new WeakMap,Ge),Wt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function dt(t){return Ce[t]??(Ce[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Kt(){Ce=Object.create(null)}function Gt(t){var l;const e=new Ut,s=[];if(t.length===0)return Wt;const r=t.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[p,b])=>h?1:p?-1:u.length-b.length),n=Object.create(null);for(let h=0,u=-1,p=r.length;h<p;h++){const[b,k,_]=r[h];b?n[k]=[_.map(([S])=>[S,Object.create(null)]),lt]:u++;let v;try{v=e.insert(k,u,b)}catch(S){throw S===ne?new ot(k):S}b||(s[u]=_.map(([S,M])=>{const Ee=Object.create(null);for(M-=1;M>=0;M--){const[Re,P]=v[M];Ee[Re]=P}return[S,Ee]}))}const[i,o,d]=e.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let p=0,b=s[h].length;p<b;p++){const k=(l=s[h][p])==null?void 0:l[1];if(!k)continue;const _=Object.keys(k);for(let v=0,S=_.length;v<S;v++)k[_[v]]=d[k[_[v]]]}const c=[];for(const h in o)c[h]=s[o[h]];return[i,c,n]}function te(t,e){if(t){for(const s of Object.keys(t).sort((r,n)=>n.length-r.length))if(dt(s).test(e))return[...t[s]]}}var V,U,Ae,ht,ze,zt=(ze=class{constructor(){m(this,Ae);g(this,"name","RegExpRouter");m(this,V);m(this,U);g(this,"match",qt);f(this,V,{[y]:Object.create(null)}),f(this,U,{[y]:Object.create(null)})}add(t,e,s){var d;const r=a(this,V),n=a(this,U);if(!r||!n)throw new Error(at);r[t]||[r,n].forEach(c=>{c[t]=Object.create(null),Object.keys(c[y]).forEach(l=>{c[t][l]=[...c[y][l]]})}),e==="/*"&&(e="*");const i=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const c=dt(e);t===y?Object.keys(r).forEach(l=>{var h;(h=r[l])[e]||(h[e]=te(r[l],e)||te(r[y],e)||[])}):(d=r[t])[e]||(d[e]=te(r[t],e)||te(r[y],e)||[]),Object.keys(r).forEach(l=>{(t===y||t===l)&&Object.keys(r[l]).forEach(h=>{c.test(h)&&r[l][h].push([s,i])})}),Object.keys(n).forEach(l=>{(t===y||t===l)&&Object.keys(n[l]).forEach(h=>c.test(h)&&n[l][h].push([s,i]))});return}const o=Ze(e)||[e];for(let c=0,l=o.length;c<l;c++){const h=o[c];Object.keys(n).forEach(u=>{var p;(t===y||t===u)&&((p=n[u])[h]||(p[h]=[...te(r[u],h)||te(r[y],h)||[]]),n[u][h].push([s,i-l+c+1]))})}}buildAllMatchers(){const t=Object.create(null);return Object.keys(a(this,U)).concat(Object.keys(a(this,V))).forEach(e=>{t[e]||(t[e]=x(this,Ae,ht).call(this,e))}),f(this,V,f(this,U,void 0)),Kt(),t}},V=new WeakMap,U=new WeakMap,Ae=new WeakSet,ht=function(t){const e=[];let s=t===y;return[a(this,V),a(this,U)].forEach(r=>{const n=r[t]?Object.keys(r[t]).map(i=>[i,r[t][i]]):[];n.length!==0?(s||(s=!0),e.push(...n)):t!==y&&e.push(...Object.keys(r[y]).map(i=>[i,r[y][i]]))}),s?Gt(e):null},ze),W,N,Ye,Yt=(Ye=class{constructor(t){g(this,"name","SmartRouter");m(this,W,[]);m(this,N,[]);f(this,W,t.routers)}add(t,e,s){if(!a(this,N))throw new Error(at);a(this,N).push([t,e,s])}match(t,e){if(!a(this,N))throw new Error("Fatal error");const s=a(this,W),r=a(this,N),n=s.length;let i=0,o;for(;i<n;i++){const d=s[i];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);o=d.match(t,e)}catch(c){if(c instanceof ot)continue;throw c}this.match=d.match.bind(d),f(this,W,[d]),f(this,N,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(a(this,N)||a(this,W).length!==1)throw new Error("No active router has been determined yet.");return a(this,W)[0]}},W=new WeakMap,N=new WeakMap,Ye),fe=Object.create(null),K,R,Q,de,E,$,z,he,Xt=(he=class{constructor(e,s,r){m(this,$);m(this,K);m(this,R);m(this,Q);m(this,de,0);m(this,E,fe);if(f(this,R,r||Object.create(null)),f(this,K,[]),e&&s){const n=Object.create(null);n[e]={handler:s,possibleKeys:[],score:0},f(this,K,[n])}f(this,Q,[])}insert(e,s,r){f(this,de,++qe(this,de)._);let n=this;const i=St(s),o=[];for(let d=0,c=i.length;d<c;d++){const l=i[d],h=i[d+1],u=Ct(l,h),p=Array.isArray(u)?u[0]:l;if(p in a(n,R)){n=a(n,R)[p],u&&o.push(u[1]);continue}a(n,R)[p]=new he,u&&(a(n,Q).push(u),o.push(u[1])),n=a(n,R)[p]}return a(n,K).push({[e]:{handler:r,possibleKeys:o.filter((d,c,l)=>l.indexOf(d)===c),score:a(this,de)}}),n}search(e,s){var c;const r=[];f(this,E,fe);let i=[this];const o=Je(s),d=[];for(let l=0,h=o.length;l<h;l++){const u=o[l],p=l===h-1,b=[];for(let k=0,_=i.length;k<_;k++){const v=i[k],S=a(v,R)[u];S&&(f(S,E,a(v,E)),p?(a(S,R)["*"]&&r.push(...x(this,$,z).call(this,a(S,R)["*"],e,a(v,E))),r.push(...x(this,$,z).call(this,S,e,a(v,E)))):b.push(S));for(let M=0,Ee=a(v,Q).length;M<Ee;M++){const Re=a(v,Q)[M],P=a(v,E)===fe?{}:{...a(v,E)};if(Re==="*"){const q=a(v,R)["*"];q&&(r.push(...x(this,$,z).call(this,q,e,a(v,E))),f(q,E,P),b.push(q));continue}const[gt,_e,ue]=Re;if(!u&&!(ue instanceof RegExp))continue;const H=a(v,R)[gt],mt=o.slice(l).join("/");if(ue instanceof RegExp){const q=ue.exec(mt);if(q){if(P[_e]=q[0],r.push(...x(this,$,z).call(this,H,e,a(v,E),P)),Object.keys(a(H,R)).length){f(H,E,P);const He=((c=q[0].match(/\//))==null?void 0:c.length)??0;(d[He]||(d[He]=[])).push(H)}continue}}(ue===!0||ue.test(u))&&(P[_e]=u,p?(r.push(...x(this,$,z).call(this,H,e,P,a(v,E))),a(H,R)["*"]&&r.push(...x(this,$,z).call(this,a(H,R)["*"],e,P,a(v,E)))):(f(H,E,P),b.push(H)))}}i=b.concat(d.shift()??[])}return r.length>1&&r.sort((l,h)=>l.score-h.score),[r.map(({handler:l,params:h})=>[l,h])]}},K=new WeakMap,R=new WeakMap,Q=new WeakMap,de=new WeakMap,E=new WeakMap,$=new WeakSet,z=function(e,s,r,n){const i=[];for(let o=0,d=a(e,K).length;o<d;o++){const c=a(e,K)[o],l=c[s]||c[y],h={};if(l!==void 0&&(l.params=Object.create(null),i.push(l),r!==fe||n&&n!==fe))for(let u=0,p=l.possibleKeys.length;u<p;u++){const b=l.possibleKeys[u],k=h[l.score];l.params[b]=n!=null&&n[b]&&!k?n[b]:r[b]??(n==null?void 0:n[b]),h[l.score]=!0}}return i},he),Z,Xe,Jt=(Xe=class{constructor(){g(this,"name","TrieRouter");m(this,Z);f(this,Z,new Xt)}add(t,e,s){const r=Ze(e);if(r){for(let n=0,i=r.length;n<i;n++)a(this,Z).insert(t,r[n],s);return}a(this,Z).insert(t,e,s)}match(t,e){return a(this,Z).search(t,e)}},Z=new WeakMap,Xe),ut=class extends Mt{constructor(t={}){super(t),this.router=t.router??new Yt({routers:[new zt,new Jt]})}},Qt=t=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...t},r=(i=>typeof i=="string"?i==="*"?()=>i:o=>i===o?o:null:typeof i=="function"?i:o=>i.includes(o)?o:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(o,d){var h;function c(u,p){o.res.headers.set(u,p)}const l=await r(o.req.header("origin")||"",o);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await n(o.req.header("origin")||"",o);u.length&&c("Access-Control-Allow-Methods",u.join(","));let p=s.allowHeaders;if(!(p!=null&&p.length)){const b=o.req.header("Access-Control-Request-Headers");b&&(p=b.split(/\s*,\s*/))}return p!=null&&p.length&&(c("Access-Control-Allow-Headers",p.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};const Pe=new ut;Pe.use("/api/*",Qt());Pe.get("/",t=>t.html(`
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

            // Render checklist sections
            const container = document.getElementById('checklist-container');
            checklistSections.forEach((section, sectionIndex) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'bg-white rounded-lg shadow-lg p-6 mb-6 section-card';
                sectionDiv.innerHTML = \`
                    <h2 class="text-lg font-bold text-blue-900 mb-4">\${section.title}</h2>
                    <div class="space-y-3">
                        \${section.items.map((item, itemIndex) => \`
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="flex-1 text-base">\${item}</span>
                                <div class="touch-checkbox" 
                                    data-section="\${sectionIndex}" 
                                    data-item="\${itemIndex}"
                                    onclick="toggleCheck(this)">
                                    <i class="fas fa-check text-2xl hidden"></i>
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
                        customerSignature
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
  `));Pe.post("/api/submit",async t=>{try{const e=await t.req.json();return t.json({success:!0,message:"Checklist submitted successfully",data:{customerEmail:e.customerEmail,installDate:e.installDate,vehicleVin:e.vehicleVin}})}catch(e){return console.error("Submit error:",e),t.json({success:!1,error:e.message||"Failed to submit checklist"},500)}});const Ue=new ut,Zt=Object.assign({"/src/index.tsx":Pe});let ft=!1;for(const[,t]of Object.entries(Zt))t&&(Ue.all("*",e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),Ue.notFound(e=>{let s;try{s=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,s)}),ft=!0);if(!ft)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ue as default};
