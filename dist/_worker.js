var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var bt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>bt(e,typeof t!="symbol"?t+"":t,s),Oe=(e,t,s)=>t.has(e)||Be("Cannot "+s);var a=(e,t,s)=>(Oe(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,r)=>(Oe(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Oe(e,t,"access private method"),s);var Fe=(e,t,s,r)=>({set _(n){p(e,t,n,s)},get _(){return a(e,t,r)}});var Ve=(e,t,s)=>(r,n)=>{let o=-1;return i(0);async function i(d){if(d<=o)throw new Error("next() called multiple times");o=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],r.req.routeIndex=d):h=d===e.length&&n||void 0,h)try{c=await h(r,()=>i(d+1))}catch(u){if(u instanceof Error&&t)r.error=u,c=await t(u,r),l=!0;else throw u}else r.finalized===!1&&s&&(c=await s(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},yt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,o=(e instanceof ot?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:r}):{}};async function wt(e,t){const s=await e.formData();return s?kt(s,t):{}}function kt(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?Et(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Pt(s,r,n),delete s[r])}),s}var Et=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((o,i)=>{i===n.length-1?r[o]=s:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Lt=e=>{const{groups:t,path:s}=Dt(e),r=Ze(s);return Ht(r,t)},Dt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},Ht=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Le={},Mt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Le[r]||(s[2]?Le[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Le[r]=[e,s[1],!0]),Le[r]}return null},_e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Tt=e=>_e(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const o=t.indexOf("?",r),i=t.slice(s,o===-1?void 0:o);return Tt(i.includes("%25")?i.replace(/%25/g,"%2525"):i)}else if(n===63)break}return t.slice(s,r)},It=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ne=(e,t,...s)=>(s.length&&(t=ne(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const o=n.replace("?","");r+="/"+o,s.push(r)}else r+="/"+n}),s.filter((n,o,i)=>i.indexOf(n)===o)},Ae=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?_e(e,rt):e):e,st=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(t,i+1)||(i=e.indexOf(`&${t}`,i+1));i!==-1;){const d=e.charCodeAt(i+t.length+1);if(d===61){const c=i+t.length+2,l=e.indexOf("&",c);return Ae(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";i=e.indexOf(`&${t}`,i+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const i=e.indexOf("&",o+1);let d=e.indexOf("=",o);d>i&&i!==-1&&(d=-1);let c=e.slice(o+1,d===-1?i===-1?void 0:i:d);if(r&&(c=Ae(c)),o=i,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,i===-1?void 0:i),r&&(l=Ae(l))),s?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(l)):n[c]??(n[c]=l)}return t?n[t]:n},Rt=st,St=(e,t)=>st(e,t,!0),rt=decodeURIComponent,ze=e=>_e(e,rt),le,M,B,nt,it,$e,V,We,ot=(We=class{constructor(e,t="/",s=[[]]){f(this,B);m(this,"raw");f(this,le);f(this,M);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});f(this,V,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(o=>(n==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,M,s),p(this,le,{})}param(e){return e?x(this,B,nt).call(this,e):x(this,B,it).call(this)}query(e){return Rt(this.url,e)}queries(e){return St(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return a(this,V).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,V).call(this,"text")}arrayBuffer(){return a(this,V).call(this,"arrayBuffer")}blob(){return a(this,V).call(this,"blob")}formData(){return a(this,V).call(this,"formData")}addValidatedData(e,t){a(this,le)[e]=t}valid(e){return a(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return a(this,M)}get matchedRoutes(){return a(this,M)[0].map(([[,e]])=>e)}get routePath(){return a(this,M)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,M=new WeakMap,B=new WeakSet,nt=function(e){const t=a(this,M)[0][this.routeIndex][1][e],s=x(this,B,$e).call(this,t);return s&&/\%/.test(s)?ze(s):s},it=function(){const e={},t=Object.keys(a(this,M)[0][this.routeIndex][1]);for(const s of t){const r=x(this,B,$e).call(this,a(this,M)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?ze(r):r)}return e},$e=function(e){return a(this,M)[1]?a(this,M)[1][e]:e},V=new WeakMap,We),jt={Stringify:1},at=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(n?n[0]+=e:n=[e],Promise.all(o.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Ct="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),be,ye,A,ce,N,D,ve,de,he,J,we,ke,z,ie,Ge,Ot=(Ge=class{constructor(e,t){f(this,z);f(this,be);f(this,ye);m(this,"env",{});f(this,A);m(this,"finalized",!1);m(this,"error");f(this,ce);f(this,N);f(this,D);f(this,ve);f(this,de);f(this,he);f(this,J);f(this,we);f(this,ke);m(this,"render",(...e)=>(a(this,de)??p(this,de,t=>this.html(t)),a(this,de).call(this,...e)));m(this,"setLayout",e=>p(this,ve,e));m(this,"getLayout",()=>a(this,ve));m(this,"setRenderer",e=>{p(this,de,e)});m(this,"header",(e,t,s)=>{this.finalized&&p(this,D,new Response(a(this,D).body,a(this,D)));const r=a(this,D)?a(this,D).headers:a(this,J)??p(this,J,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});m(this,"status",e=>{p(this,ce,e)});m(this,"set",(e,t)=>{a(this,A)??p(this,A,new Map),a(this,A).set(e,t)});m(this,"get",e=>a(this,A)?a(this,A).get(e):void 0);m(this,"newResponse",(...e)=>x(this,z,ie).call(this,...e));m(this,"body",(e,t,s)=>x(this,z,ie).call(this,e,t,s));m(this,"text",(e,t,s)=>!a(this,J)&&!a(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,z,ie).call(this,e,t,Ne(Ct,s)));m(this,"json",(e,t,s)=>x(this,z,ie).call(this,JSON.stringify(e),t,Ne("application/json",s)));m(this,"html",(e,t,s)=>{const r=n=>x(this,z,ie).call(this,n,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,jt.Stringify,!1,{}).then(r):r(e)});m(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});m(this,"notFound",()=>(a(this,he)??p(this,he,()=>new Response),a(this,he).call(this,this)));p(this,be,e),t&&(p(this,N,t.executionCtx),this.env=t.env,p(this,he,t.notFoundHandler),p(this,ke,t.path),p(this,we,t.matchResult))}get req(){return a(this,ye)??p(this,ye,new ot(a(this,be),a(this,ke),a(this,we))),a(this,ye)}get event(){if(a(this,N)&&"respondWith"in a(this,N))return a(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,N))return a(this,N);throw Error("This context has no ExecutionContext")}get res(){return a(this,D)||p(this,D,new Response(null,{headers:a(this,J)??p(this,J,new Headers)}))}set res(e){if(a(this,D)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,D).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=a(this,D).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}p(this,D,e),this.finalized=!0}get var(){return a(this,A)?Object.fromEntries(a(this,A)):{}}},be=new WeakMap,ye=new WeakMap,A=new WeakMap,ce=new WeakMap,N=new WeakMap,D=new WeakMap,ve=new WeakMap,de=new WeakMap,he=new WeakMap,J=new WeakMap,we=new WeakMap,ke=new WeakMap,z=new WeakSet,ie=function(e,t,s){const r=a(this,D)?new Headers(a(this,D).headers):a(this,J)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[i,d]of o)i.toLowerCase()==="set-cookie"?r.append(i,d):r.set(i,d)}if(s)for(const[o,i]of Object.entries(s))if(typeof i=="string")r.set(o,i);else{r.delete(o);for(const d of i)r.append(o,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,ce);return new Response(e,{status:n,headers:r})},Ge),w="ALL",At="all",Nt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},$t="__COMPOSED_HANDLER",_t=e=>e.text("404 Not Found",404),Ue=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},I,k,dt,R,Y,De,He,ue,Bt=(ue=class{constructor(t={}){f(this,k);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");f(this,I,"/");m(this,"routes",[]);f(this,R,_t);m(this,"errorHandler",Ue);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(p(this,R,t),this));m(this,"fetch",(t,...s)=>x(this,k,He).call(this,t,s[1],s[0],t.method));m(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ne("/",t)}`,s),r,n)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,k,He).call(this,t.request,t,void 0,t.request.method))})});[...Nt,At].forEach(o=>{this[o]=(i,...d)=>(typeof i=="string"?p(this,I,i):x(this,k,Y).call(this,o,a(this,I),i),d.forEach(c=>{x(this,k,Y).call(this,o,a(this,I),c)}),this)}),this.on=(o,i,...d)=>{for(const c of[i].flat()){p(this,I,c);for(const l of[o].flat())d.map(h=>{x(this,k,Y).call(this,l.toUpperCase(),a(this,I),h)})}return this},this.use=(o,...i)=>(typeof o=="string"?p(this,I,o):(p(this,I,"*"),i.unshift(o)),i.forEach(d=>{x(this,k,Y).call(this,w,a(this,I),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??et:It}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var i;let o;s.errorHandler===Ue?o=n.handler:(o=async(d,c)=>(await Ve([],s.errorHandler)(d,()=>n.handler(d,c))).res,o[$t]=n.handler),x(i=r,k,Y).call(i,n.method,n.path,o)}),this}basePath(t){const s=x(this,k,dt).call(this);return s._basePath=ne(this._basePath,t),s}mount(t,s,r){let n,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?n=c=>c:n=r.replaceRequest));const i=o?c=>{const l=o(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};n||(n=(()=>{const c=ne(this._basePath,t),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(n(c.req.raw),...i(c));if(h)return h;await l()};return x(this,k,Y).call(this,w,ne(t,"*"),d),this}},I=new WeakMap,k=new WeakSet,dt=function(){const t=new ue({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,R,a(this,R)),t.routes=this.routes,t},R=new WeakMap,Y=function(t,s,r){t=t.toUpperCase(),s=ne(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},De=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},He=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,k,He).call(this,t,s,r,"GET")))();const o=this.getPath(t,{env:r}),i=this.router.match(n,o),d=new Ot(t,{path:o,matchResult:i,env:r,executionCtx:s,notFoundHandler:a(this,R)});if(i[0].length===1){let l;try{l=i[0][0][0][0](d,async()=>{d.res=await a(this,R).call(this,d)})}catch(h){return x(this,k,De).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:a(this,R).call(this,d))).catch(h=>x(this,k,De).call(this,h,d)):l??a(this,R).call(this,d)}const c=Ve(i[0],this.errorHandler,a(this,R));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,k,De).call(this,l,d)}})()},ue),ht=[];function Ft(e,t){const s=this.buildAllMatchers(),r=((n,o)=>{const i=s[n]||s[w],d=i[2][o];if(d)return d;const c=o.match(i[0]);if(!c)return[[],ht];const l=c.indexOf("",1);return[i[1][l],c]});return this.match=r,r(e,t)}var Te="[^/]+",fe=".*",xe="(?:|/.*)",ae=Symbol(),Vt=new Set(".\\+*[^]$()");function zt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===xe?1:t===fe||t===xe?-1:e===Te?1:t===Te?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,Z,S,se,Ut=(se=class{constructor(){f(this,Q);f(this,Z);f(this,S,Object.create(null))}insert(t,s,r,n,o){if(t.length===0){if(a(this,Q)!==void 0)throw ae;if(o)return;p(this,Q,s);return}const[i,...d]=t,c=i==="*"?d.length===0?["","",fe]:["","",Te]:i==="/*"?["","",xe]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||Te;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ae;if(l=a(this,S)[u],!l){if(Object.keys(a(this,S)).some(g=>g!==fe&&g!==xe))throw ae;if(o)return;l=a(this,S)[u]=new se,h!==""&&p(l,Z,n.varIndex++)}!o&&h!==""&&r.push([h,a(l,Z)])}else if(l=a(this,S)[i],!l){if(Object.keys(a(this,S)).some(h=>h.length>1&&h!==fe&&h!==xe))throw ae;if(o)return;l=a(this,S)[i]=new se}l.insert(d,s,r,n,o)}buildRegExpStr(){const s=Object.keys(a(this,S)).sort(zt).map(r=>{const n=a(this,S)[r];return(typeof a(n,Z)=="number"?`(${r})@${a(n,Z)}`:Vt.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,S=new WeakMap,se),Ie,Ee,Ye,qt=(Ye=class{constructor(){f(this,Ie,{varIndex:0});f(this,Ee,new Ut)}insert(e,t,s){const r=[],n=[];for(let i=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${i}`;return n[i]=[l,c],i++,d=!0,l}),!d)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=n.length-1;i>=0;i--){const[d]=n[i];for(let c=o.length-1;c>=0;c--)if(o[c].indexOf(d)!==-1){o[c]=o[c].replace(d,n[i][1]);break}}return a(this,Ee).insert(o,t,r,a(this,Ie),s),r}buildRegExp(){let e=a(this,Ee).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,o,i)=>o!==void 0?(s[++t]=Number(o),"$()"):(i!==void 0&&(r[Number(i)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Ie=new WeakMap,Ee=new WeakMap,Ye),Kt=[/^$/,[],Object.create(null)],Me=Object.create(null);function ut(e){return Me[e]??(Me[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Me=Object.create(null)}function Gt(e){var l;const t=new qt,s=[];if(e.length===0)return Kt;const r=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[g,y])=>h?1:g?-1:u.length-y.length),n=Object.create(null);for(let h=0,u=-1,g=r.length;h<g;h++){const[y,P,j]=r[h];y?n[P]=[j.map(([v])=>[v,Object.create(null)]),ht]:u++;let b;try{b=t.insert(P,u,y)}catch(v){throw v===ae?new ct(P):v}y||(s[u]=j.map(([v,T])=>{const C=Object.create(null);for(T-=1;T>=0;T--){const[re,H]=b[T];C[re]=H}return[v,C]}))}const[o,i,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let g=0,y=s[h].length;g<y;g++){const P=(l=s[h][g])==null?void 0:l[1];if(!P)continue;const j=Object.keys(P);for(let b=0,v=j.length;b<v;b++)P[j[b]]=d[P[j[b]]]}const c=[];for(const h in i)c[h]=s[i[h]];return[o,c,n]}function oe(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(ut(s).test(t))return[...e[s]]}}var U,q,Re,pt,Xe,Yt=(Xe=class{constructor(){f(this,Re);m(this,"name","RegExpRouter");f(this,U);f(this,q);m(this,"match",Ft);p(this,U,{[w]:Object.create(null)}),p(this,q,{[w]:Object.create(null)})}add(e,t,s){var d;const r=a(this,U),n=a(this,q);if(!r||!n)throw new Error(lt);r[e]||[r,n].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(l=>{c[e][l]=[...c[w][l]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ut(t);e===w?Object.keys(r).forEach(l=>{var h;(h=r[l])[t]||(h[t]=oe(r[l],t)||oe(r[w],t)||[])}):(d=r[e])[t]||(d[t]=oe(r[e],t)||oe(r[w],t)||[]),Object.keys(r).forEach(l=>{(e===w||e===l)&&Object.keys(r[l]).forEach(h=>{c.test(h)&&r[l][h].push([s,o])})}),Object.keys(n).forEach(l=>{(e===w||e===l)&&Object.keys(n[l]).forEach(h=>c.test(h)&&n[l][h].push([s,o]))});return}const i=tt(t)||[t];for(let c=0,l=i.length;c<l;c++){const h=i[c];Object.keys(n).forEach(u=>{var g;(e===w||e===u)&&((g=n[u])[h]||(g[h]=[...oe(r[u],h)||oe(r[w],h)||[]]),n[u][h].push([s,o-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,q)).concat(Object.keys(a(this,U))).forEach(t=>{e[t]||(e[t]=x(this,Re,pt).call(this,t))}),p(this,U,p(this,q,void 0)),Wt(),e}},U=new WeakMap,q=new WeakMap,Re=new WeakSet,pt=function(e){const t=[];let s=e===w;return[a(this,U),a(this,q)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==w&&t.push(...Object.keys(r[w]).map(o=>[o,r[w][o]]))}),s?Gt(t):null},Xe),K,$,Je,Xt=(Je=class{constructor(e){m(this,"name","SmartRouter");f(this,K,[]);f(this,$,[]);p(this,K,e.routers)}add(e,t,s){if(!a(this,$))throw new Error(lt);a(this,$).push([e,t,s])}match(e,t){if(!a(this,$))throw new Error("Fatal error");const s=a(this,K),r=a(this,$),n=s.length;let o=0,i;for(;o<n;o++){const d=s[o];try{for(let c=0,l=r.length;c<l;c++)d.add(...r[c]);i=d.match(e,t)}catch(c){if(c instanceof ct)continue;throw c}this.match=d.match.bind(d),p(this,K,[d]),p(this,$,void 0);break}if(o===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(a(this,$)||a(this,K).length!==1)throw new Error("No active router has been determined yet.");return a(this,K)[0]}},K=new WeakMap,$=new WeakMap,Je),ge=Object.create(null),W,L,ee,pe,E,_,X,me,Jt=(me=class{constructor(t,s,r){f(this,_);f(this,W);f(this,L);f(this,ee);f(this,pe,0);f(this,E,ge);if(p(this,L,r||Object.create(null)),p(this,W,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},p(this,W,[n])}p(this,ee,[])}insert(t,s,r){p(this,pe,++Fe(this,pe)._);let n=this;const o=Lt(s),i=[];for(let d=0,c=o.length;d<c;d++){const l=o[d],h=o[d+1],u=Mt(l,h),g=Array.isArray(u)?u[0]:l;if(g in a(n,L)){n=a(n,L)[g],u&&i.push(u[1]);continue}a(n,L)[g]=new me,u&&(a(n,ee).push(u),i.push(u[1])),n=a(n,L)[g]}return a(n,W).push({[t]:{handler:r,possibleKeys:i.filter((d,c,l)=>l.indexOf(d)===c),score:a(this,pe)}}),n}search(t,s){var c;const r=[];p(this,E,ge);let o=[this];const i=Ze(s),d=[];for(let l=0,h=i.length;l<h;l++){const u=i[l],g=l===h-1,y=[];for(let P=0,j=o.length;P<j;P++){const b=o[P],v=a(b,L)[u];v&&(p(v,E,a(b,E)),g?(a(v,L)["*"]&&r.push(...x(this,_,X).call(this,a(v,L)["*"],t,a(b,E))),r.push(...x(this,_,X).call(this,v,t,a(b,E)))):y.push(v));for(let T=0,C=a(b,ee).length;T<C;T++){const re=a(b,ee)[T],H=a(b,E)===ge?{}:{...a(b,E)};if(re==="*"){const F=a(b,L)["*"];F&&(r.push(...x(this,_,X).call(this,F,t,a(b,E))),p(F,E,H),y.push(F));continue}const[je,Pe,G]=re;if(!u&&!(G instanceof RegExp))continue;const O=a(b,L)[je],ft=i.slice(l).join("/");if(G instanceof RegExp){const F=G.exec(ft);if(F){if(H[Pe]=F[0],r.push(...x(this,_,X).call(this,O,t,a(b,E),H)),Object.keys(a(O,L)).length){p(O,E,H);const Ce=((c=F[0].match(/\//))==null?void 0:c.length)??0;(d[Ce]||(d[Ce]=[])).push(O)}continue}}(G===!0||G.test(u))&&(H[Pe]=u,g?(r.push(...x(this,_,X).call(this,O,t,H,a(b,E))),a(O,L)["*"]&&r.push(...x(this,_,X).call(this,a(O,L)["*"],t,H,a(b,E)))):(p(O,E,H),y.push(O)))}}o=y.concat(d.shift()??[])}return r.length>1&&r.sort((l,h)=>l.score-h.score),[r.map(({handler:l,params:h})=>[l,h])]}},W=new WeakMap,L=new WeakMap,ee=new WeakMap,pe=new WeakMap,E=new WeakMap,_=new WeakSet,X=function(t,s,r,n){const o=[];for(let i=0,d=a(t,W).length;i<d;i++){const c=a(t,W)[i],l=c[s]||c[w],h={};if(l!==void 0&&(l.params=Object.create(null),o.push(l),r!==ge||n&&n!==ge))for(let u=0,g=l.possibleKeys.length;u<g;u++){const y=l.possibleKeys[u],P=h[l.score];l.params[y]=n!=null&&n[y]&&!P?n[y]:r[y]??(n==null?void 0:n[y]),h[l.score]=!0}}return o},me),te,Qe,Qt=(Qe=class{constructor(){m(this,"name","TrieRouter");f(this,te);p(this,te,new Jt)}add(e,t,s){const r=tt(t);if(r){for(let n=0,o=r.length;n<o;n++)a(this,te).insert(e,r[n],s);return}a(this,te).insert(e,t,s)}match(e,t){return a(this,te).search(e,t)}},te=new WeakMap,Qe),mt=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Xt({routers:[new Yt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(o=>typeof o=="string"?o==="*"?()=>o:i=>o===i?i:null:typeof o=="function"?o:i=>o.includes(i)?i:null)(s.origin),n=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(i,d){var h;function c(u,g){i.res.headers.set(u,g)}const l=await r(i.req.header("origin")||"",i);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),i.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await n(i.req.header("origin")||"",i);u.length&&c("Access-Control-Allow-Methods",u.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const y=i.req.header("Access-Control-Request-Headers");y&&(g=y.split(/\s*,\s*/))}return g!=null&&g.length&&(c("Access-Control-Allow-Headers",g.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&i.header("Vary","Origin",{append:!0})}};const qe=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((i,d)=>i+Object.values(d).filter(c=>c).length,0),s=qe.reduce((i,d)=>i+d.items.length,0);let r="";qe.forEach((i,d)=>{r+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+i.title+'</h3><table style="width:100%;border-collapse:collapse;">',i.items.forEach((c,l)=>{var g;const h=((g=e.checklist[d])==null?void 0:g[l])||!1;r+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+c+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(h?"✅":"⬜")+"</td></tr>";const u=d+"-"+l;e.photos[u]&&(r+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+u+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+u+'"></td></tr>')}),r+="</table></div>"});const n=e.mileage?"<p><strong>주행거리:</strong> "+e.mileage+" km</p>":"",o=e.customerPhone?"<p><strong>고객 전화번호:</strong> "+e.customerPhone+"</p>":"";return'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p>"+n+"<p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+r+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+"<br>"+o+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>(주)케이밴</strong> | 전화: 031-666-1901 / 010-3271-1900</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 (주)케이밴 All Rights Reserved</p></div></div></body></html>'}const Se=new mt;Se.use("/api/*",Zt());Se.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>케이밴 제품 시공 점검표</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>
        <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"><\/script>
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
            
            /* A4 Page 1 Container */
            .a4-page {
                width: 794px;
                min-height: 1123px;
                max-width: 794px;
                margin: 0 auto;
                background: white;
                box-sizing: border-box;
            }
            
            @media (max-width: 820px) {
                .a4-page {
                    width: 100%;
                    min-height: auto;
                    max-width: 100%;
                }
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

            <!-- PAGE 1: 메인 페이지 (A4 사이즈 비율) -->
            <div id="page1-container" class="a4-page mb-6" style="padding: 30px;">
                
                <!-- 시공 정보 -->
                <div id="main-page" class="bg-white rounded-lg shadow-lg p-5 mb-3 section-card">
                    <h2 class="text-lg font-bold text-blue-900 mb-3 flex items-center">
                        <i class="fas fa-info-circle mr-2"></i>
                        시공 정보
                    </h2>
                    <div class="space-y-3">
                        <!-- 시공일자 (전체 너비) -->
                        <div>
                            <label class="block text-xs font-medium text-gray-700 mb-1">시공일자</label>
                            <input type="date" id="installDate" 
                                class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm">
                        </div>
                        
                        <!-- 고객 정보 + 고객 서명 (2단 레이아웃) -->
                        <div class="grid grid-cols-2 gap-4">
                            <!-- 좌측: 고객명 + 전화번호 -->
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-xs font-medium text-gray-700 mb-1">고객명</label>
                                    <input type="text" id="customerName" 
                                        class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                                        placeholder="고객 이름">
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-700 mb-1">고객 전화번호</label>
                                    <input type="tel" id="customerPhone" 
                                        class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                                        placeholder="010-1234-5678">
                                </div>
                            </div>
                            
                            <!-- 우측: 고객 서명 -->
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">고객 서명</label>
                                <canvas id="customerSignature" 
                                    class="signature-canvas w-full" 
                                    width="300" height="100"></canvas>
                                <button onclick="clearSignature('customer')" 
                                    class="mt-1 px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition">
                                    <i class="fas fa-eraser mr-1"></i> 지우기
                                </button>
                            </div>
                        </div>
                        
                        <!-- 차대번호 + 주행거리 (2단) -->
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">차량 차대번호</label>
                                <input type="text" id="vehicleVin" 
                                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                                    placeholder="차대번호">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">주행거리 (km)</label>
                                <input type="number" id="mileage" 
                                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                                    placeholder="예: 50000" 
                                    min="0" 
                                    step="1">
                            </div>
                        </div>
                    </div>
                </div>

            <!-- 품질보증서 -->
            <div id="warranty-section" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-5 mb-3 section-card border-2 border-blue-400">
                <h2 class="text-lg font-bold text-blue-900 mb-3 flex items-center justify-center">
                    <i class="fas fa-certificate mr-2"></i>
                    품질보증서
                </h2>
                
                <div class="bg-white rounded-lg p-4 shadow-inner">
                    <div class="space-y-2 text-gray-800">
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs mr-2 flex-shrink-0">1</span>
                            <p class="text-sm leading-relaxed">
                                케이밴 제품의 보상 기준은 <strong class="text-blue-700">공정거래위원회 소비자 분쟁 해결 기준</strong>에 따릅니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs mr-2 flex-shrink-0">2</span>
                            <p class="text-sm leading-relaxed">
                                본 제품은 <strong class="text-blue-700">엄격한 품질관리 및 검사 과정</strong>을 거쳐서 만들어진 제품입니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs mr-2 flex-shrink-0">3</span>
                            <p class="text-sm leading-relaxed">
                                보증 기간 중 고객이 정상적으로 사용하는 과정에서 제품상의 결함으로 인해 발생한 고장의 경우, <strong class="text-blue-700">무상 수리</strong>를 제공합니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-xs mr-2 flex-shrink-0">4</span>
                            <p class="text-sm leading-relaxed">
                                서비스를 받으실 때 <strong class="text-blue-700">본 보증서를 제시</strong>하여 주십시오.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white font-bold text-xs mr-2 flex-shrink-0">5</span>
                            <p class="text-sm leading-relaxed">
                                본 제품의 보증 기간은 <strong class="text-green-700">3년 6만 킬로미터</strong>로 규정합니다.
                            </p>
                        </div>
                        
                        <div class="mt-3 p-3 bg-red-50 rounded border border-red-300">
                            <p class="text-sm font-bold text-red-800 mb-1.5">
                                <i class="fas fa-exclamation-triangle mr-1"></i>
                                다음의 경우는 품질 보증 조건에 해당되지 않으므로 유상 수리로 적용됩니다.
                            </p>
                            <div class="space-y-0.5 text-xs text-gray-700 ml-3">
                                <p><strong>가.</strong> 소비자의 고의 또는 과실로 인하여 발생된 피해의 경우.</p>
                                <p><strong>나.</strong> 당사의 서비스 기사가 아닌 자가 제품의 구조, 기능을 개조 또는 이동, 변조하여 발생된 고장.</p>
                                <p><strong>다.</strong> 제품 사용 중 발생되는 생활 스크래치 및 변형, 변색.</p>
                                <p><strong>라.</strong> 제품의 사용 방법 숙지 부족으로 인한 제품의 파손, 재설치와 관련된 사항.</p>
                                <p><strong>마.</strong> 차량 운행 중 발생할 수 있는 각종 사고로 인해 제품의 고장 또는 결함이 발생한 경우.</p>
                                <p><strong>바.</strong> 천재지변에 의한 제품의 고장 또는 결함의 경우.</p>
                                <p><strong>사.</strong> 무상 보증기간이 도래된 경우.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3 pt-2 border-t border-gray-200">
                        <div class="flex justify-between items-center text-xs">
                            <div class="text-gray-600">
                                <i class="fas fa-phone-alt mr-1 text-blue-600"></i>
                                문의: <strong class="text-gray-800">031-666-1901</strong> / <strong class="text-gray-800">010-3271-1900</strong>
                            </div>
                            <div class="text-gray-600">
                                <i class="fas fa-building mr-1 text-blue-600"></i>
                                <strong class="text-blue-900">(주)케이밴</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 시공자 정보 + 서명 -->
            <div id="installer-section" class="bg-white rounded-lg shadow-lg p-5 mb-3 section-card">
                <h2 class="text-lg font-bold text-blue-900 mb-3 flex items-center">
                    <i class="fas fa-user-tie mr-2"></i>
                    시공자 정보
                </h2>
                <!-- 시공자명 + 시공자 서명 (2단 레이아웃) -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- 좌측: 시공자(正) + 시공자(副) -->
                    <div class="space-y-3">
                        <div>
                            <label class="block text-xs font-medium text-gray-700 mb-1">시공자(正)</label>
                            <input type="text" id="installerName" 
                                class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                                placeholder="정 시공자 이름">
                        </div>
                        <div>
                            <label class="block text-xs font-medium text-gray-700 mb-1">시공자(副)</label>
                            <input type="text" id="subInstallerName" 
                                class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                                placeholder="부 시공자 이름 (선택)">
                        </div>
                    </div>
                    
                    <!-- 우측: 시공자(正) 서명만 -->
                    <div>
                        <label class="block text-xs font-medium text-gray-700 mb-1">시공자(正) 서명</label>
                        <canvas id="installerSignature" 
                            class="signature-canvas w-full" 
                            width="300" height="100"></canvas>
                        <button onclick="clearSignature('installer')" 
                            class="mt-1 px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                </div>
            </div>

            <!-- 이메일 입력 + 발송 버튼 -->
            <div id="email-section" class="bg-white rounded-lg shadow-lg p-4 mb-0 section-card">
                <h2 class="text-base font-bold text-blue-900 mb-2 flex items-center">
                    <i class="fas fa-envelope mr-2"></i>
                    이메일 발송
                </h2>
                <div class="space-y-2">
                    <div>
                        <label class="block text-xs font-medium text-gray-700 mb-1">이메일 주소</label>
                        <input type="email" id="customerEmail1" 
                            class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
                            placeholder="example@email.com">
                    </div>
                    
                    <!-- 이메일 발송 버튼 (전체 너비) -->
                    <button id="emailBtn" onclick="submitEmail()" 
                        class="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                        <i class="fas fa-paper-plane mr-2"></i>
                        📧 이메일 발송
                    </button>
                </div>
            </div>
            
            </div>
            <!-- END of Page 1 A4 Container -->

            <div style="page-break-after: always; margin: 40px 0; border-bottom: 3px dashed #ccc;"></div>

            <!-- PAGE 2: 제품 선택 페이지 -->
            <div id="product-page" class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card">
                <h2 class="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-box-open mr-3"></i>
                    제품 시공명 (해당 항목 체크)
                </h2>
                
                <!-- 좌우 2단 레이아웃 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- 기아PV5 -->
                    <div class="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
                        <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-center">
                            <i class="fas fa-car mr-2"></i>
                            기아PV5
                        </h3>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 스마트패키지">
                                <span class="text-base">스마트패키지</span>
                            </label>
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 워크스테이션">
                                <span class="text-base">워크스테이션</span>
                            </label>
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 3단부품선반">
                                <span class="text-base">3단부품선반</span>
                            </label>
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 3단선반">
                                <span class="text-base">3단선반</span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- 밀워키PV5 -->
                    <div class="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                        <h3 class="text-lg font-bold text-red-900 mb-3 flex items-center">
                            <i class="fas fa-tools mr-2"></i>
                            밀워키PV5
                        </h3>
                        <div class="space-y-2">
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 스마트에디션">
                                <span class="text-base">스마트에디션</span>
                            </label>
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 워크스테이션">
                                <span class="text-base">워크스테이션</span>
                            </label>
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 3단부품선반">
                                <span class="text-base">3단부품선반</span>
                            </label>
                            <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 3단선반">
                                <span class="text-base">3단선반</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- 기타 입력란 -->
                <div class="mt-4">
                    <label class="flex items-center mb-2">
                        <input type="checkbox" id="otherProductCheckbox" class="w-5 h-5 text-blue-600 mr-3">
                        <span class="text-base font-medium text-gray-700">기타 (직접 입력)</span>
                    </label>
                    <input type="text" id="otherProductInput" 
                        class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                        placeholder="기타 제품명을 입력하세요"
                        disabled>
                </div>
            </div>

            <div style="page-break-after: always; margin: 40px 0; border-bottom: 3px dashed #ccc;"></div>

            <!-- PAGE 3: 체크리스트 섹션 -->
            <div id="checklist-container"></div>



            <!-- Notice + PNG Download Button -->
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>안내:</strong> 모든 항목을 확인하고 서명 후 원하는 버튼을 눌러주세요.
                </p>
            </div>

            <!-- Notice -->
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>안내:</strong> 모든 항목을 확인하고 서명 후 이메일 발송 버튼을 눌러주세요.
                </p>
            </div>


                    <p class="text-lg font-medium">이메일 발송 중...</p>
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

            // Handle "기타" checkbox and input
            const otherCheckbox = document.getElementById('otherProductCheckbox');
            const otherInput = document.getElementById('otherProductInput');
            
            otherCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    otherInput.disabled = false;
                    otherInput.focus();
                } else {
                    otherInput.disabled = true;
                    otherInput.value = '';
                }
            });

            // 사진 기능 제거됨 (사용 안 함)
            // window.photos = {};

            // Render checklist sections
            const container = document.getElementById('checklist-container');
            checklistSections.forEach((section, sectionIndex) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'bg-white rounded-lg shadow-lg p-6 mb-6 section-card';
                sectionDiv.innerHTML = \`
                    <div class="mb-4">
                        <h2 class="text-lg font-bold text-blue-900">\${section.title}</h2>
                    </div>
                    
                    <div class="space-y-3">
                        \${section.items.map((item, itemIndex) => \`
                            <div class="p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="flex-1 text-base">\${item}</span>
                                    <div class="touch-checkbox" 
                                        data-section="\${sectionIndex}" 
                                        data-item="\${itemIndex}"
                                        onclick="toggleCheck(this)">
                                        <i class="fas fa-check text-2xl hidden"></i>
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

            // Check if signature is empty
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
                return true; // Empty signature
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
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
                    const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                };

                const draw = (e) => {
                    if (!isDrawing[type]) return;
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
                    const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
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

            // Photo handling functions - Section-based multiple photos
            // 사진 첨부 기능 제거됨 (사용 안 함)
            // window.handleSectionPhotoUpload = function(input, sectionIndex) { ... }
            // window.renderSectionPhotos = function(sectionIndex) { ... }
            // window.deleteSectionPhoto = function(sectionIndex, photoId) { ... }
            // window.showImageModal = function(src) { ... }


            // PDF 생성 함수 (jsPDF + html2canvas 직접 사용)
            window.generatePDF = async function() {
                try {
                    console.log('🚀 PDF 생성 시작!');
                    
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    loadingOverlay.classList.remove('hidden');
                    
                    // 데이터 수집
                    const installDate = document.getElementById('installDate').value;
                    const vehicleVin = document.getElementById('vehicleVin').value;
                    const mileage = document.getElementById('mileage').value;
                    const selectedProducts = [];
                    document.querySelectorAll('.product-checkbox:checked').forEach(cb => {
                        selectedProducts.push(cb.value);
                    });
                    const otherCheckbox = document.getElementById('otherProductCheckbox');
                    const otherInput = document.getElementById('otherProductInput');
                    if (otherCheckbox && otherCheckbox.checked && otherInput && otherInput.value.trim()) {
                        selectedProducts.push(otherInput.value.trim());
                    }
                    const productName = selectedProducts.join(', ');
                    const installerName = document.getElementById('installerName').value;
                    const customerName = document.getElementById('customerName').value;
                    
                    console.log('📊 수집된 데이터:', { installDate, vehicleVin, mileage, productName });
                    
                    // 체크리스트 데이터
                    const sections = [
                        { title: '차바닥 (태고합판, 알루미늄체크판, 부자재)', items: ['외관, 표면', '고정볼트', '테두리고정 및 마감', '소음'] },
                        { title: '격벽타공판', items: ['외관, 표면, 도장, 로고', '고정볼트', '테두리고정 및 마감'] },
                        { title: '격벽 2단 선반', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '3단 선반 (휠 좌측/우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '부품 3단 선반 (휠 좌측/우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '워크스페이스 (휠 우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] }
                    ];
                    
                    // HTML 생성
                    let checklistHTML = '';
                    sections.forEach((section, sectionIndex) => {
                        checklistHTML += '<div style="margin-bottom: 20px; break-inside: avoid;">';
                        checklistHTML += '<div style="background: #2c5aa0; color: white; padding: 10px; font-weight: bold; border-radius: 4px; margin-bottom: 10px;">';
                        checklistHTML += section.title;
                        checklistHTML += '</div>';
                        checklistHTML += '<table style="width: 100%; border-collapse: collapse;">';
                        
                        section.items.forEach((item, itemIndex) => {
                            const selector = '[data-section="' + sectionIndex + '"][data-item="' + itemIndex + '"]';
                            const checkbox = document.querySelector(selector);
                            const isChecked = checkbox && checkbox.classList.contains('checked');
                            
                            checklistHTML += '<tr style="border-bottom: 1px solid #e5e7eb;">';
                            checklistHTML += '<td style="padding: 8px 12px;">' + item + '</td>';
                            checklistHTML += '<td style="padding: 8px 12px; text-align: center; width: 60px; font-size: 20px; font-weight: bold; color: #2c5aa0;">';
                            checklistHTML += (isChecked ? '✓' : '□');
                            checklistHTML += '</td>';
                            checklistHTML += '</tr>';
                        });
                        
                        checklistHTML += '</table></div>';
                    });
                    
                    // 사진 HTML
                    let photosHTML = '';
                    if (window.photos && Object.keys(window.photos).length > 0) {
                        photosHTML += '<div style="page-break-before: always; margin-top: 30px;">';
                        photosHTML += '<h2 style="color: #2c5aa0; margin-bottom: 20px; font-size: 20px;">📷 첨부 사진</h2>';
                        
                        Object.entries(window.photos).forEach(([sectionKey, photoArray]) => {
                            if (photoArray && photoArray.length > 0) {
                                const sectionIndex = parseInt(sectionKey.replace('section-', ''));
                                const sectionTitle = sections[sectionIndex]?.title || '섹션 ' + (sectionIndex + 1);
                                
                                photosHTML += '<h3 style="color: #444; margin: 20px 0 10px 0; font-size: 16px;">' + sectionTitle + '</h3>';
                                photosHTML += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">';
                                
                                photoArray.forEach(photo => {
                                    photosHTML += '<div style="border: 2px solid #ddd; border-radius: 8px; overflow: hidden;">';
                                    photosHTML += '<img src="' + photo.data + '" style="width: 100%; height: auto; display: block;" />';
                                    photosHTML += '</div>';
                                });
                                
                                photosHTML += '</div>';
                            }
                        });
                        
                        photosHTML += '</div>';
                    }
                    
                    // 서명 이미지
                    const installerSig = canvases.installer.toDataURL('image/png');
                    const customerSig = canvases.customer.toDataURL('image/png');
                    
                    // 전체 HTML 컨텐츠
                    let pdfHTML = '<div id="pdf-content" style="font-family: Malgun Gothic, 맑은 고딕, Arial, sans-serif; padding: 30px; width: 210mm; background: white;">';
                    pdfHTML += '<div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #2c5aa0; padding-bottom: 20px;">';
                    pdfHTML += '<h1 style="color: #2c5aa0; font-size: 32px; margin: 0 0 10px 0;">케이밴 제품 시공 점검표</h1>';
                    pdfHTML += '<p style="color: #666; font-size: 16px; margin: 0;">Installation Checklist</p>';
                    pdfHTML += '</div>';
                    
                    pdfHTML += '<div style="margin-bottom: 40px; border: 3px solid #2c5aa0; padding: 20px; border-radius: 10px; background: #f8f9fa;">';
                    pdfHTML += '<h2 style="color: #2c5aa0; font-size: 22px; margin: 0 0 20px 0;">📋 시공 정보</h2>';
                    pdfHTML += '<table style="width: 100%; border-collapse: collapse;">';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; width: 120px; color: #444;">시공일자:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + installDate + '</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">차대번호:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + vehicleVin + '</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">주행거리:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + Number(mileage).toLocaleString() + ' km</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">제품명:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + productName + '</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">시공자:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + installerName + '</td></tr>';
                    pdfHTML += '<tr><td style="padding: 12px; font-weight: bold; color: #444;">고객명:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + customerName + '</td></tr>';
                    pdfHTML += '</table></div>';
                    
                    pdfHTML += '<div style="margin-bottom: 40px;">';
                    pdfHTML += '<h2 style="color: #2c5aa0; font-size: 22px; margin-bottom: 20px;">✅ 점검 항목</h2>';
                    pdfHTML += checklistHTML;
                    pdfHTML += '</div>';
                    
                    pdfHTML += photosHTML;
                    
                    pdfHTML += '<div style="margin-top: 50px; page-break-inside: avoid;">';
                    pdfHTML += '<h2 style="color: #2c5aa0; font-size: 22px; margin-bottom: 25px;">✍️ 서명</h2>';
                    pdfHTML += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">';
                    pdfHTML += '<div><p style="font-weight: bold; margin-bottom: 15px; font-size: 16px; color: #444;">시공자: ' + installerName + '</p>';
                    pdfHTML += '<div style="border: 3px solid #2c5aa0; border-radius: 10px; padding: 15px; background: #f8f9fa; min-height: 120px;">';
                    pdfHTML += '<img src="' + installerSig + '" style="width: 100%; height: auto; max-height: 100px; object-fit: contain;" /></div></div>';
                    pdfHTML += '<div><p style="font-weight: bold; margin-bottom: 15px; font-size: 16px; color: #444;">고객: ' + customerName + '</p>';
                    pdfHTML += '<div style="border: 3px solid #2c5aa0; border-radius: 10px; padding: 15px; background: #f8f9fa; min-height: 120px;">';
                    pdfHTML += '<img src="' + customerSig + '" style="width: 100%; height: auto; max-height: 100px; object-fit: contain;" /></div></div>';
                    pdfHTML += '</div></div>';
                    
                    pdfHTML += '<div style="margin-top: 60px; text-align: center; color: #666; font-size: 14px; border-top: 3px solid #2c5aa0; padding-top: 20px;">';
                    pdfHTML += '<p style="margin: 0 0 8px 0;"><strong style="font-size: 16px; color: #2c5aa0;">케이밴코리아</strong></p>';
                    pdfHTML += '<p style="margin: 0;">Tel: 1234-5678 | Email: info@kvan.com</p>';
                    pdfHTML += '</div></div>';
                    
                    console.log('✅ PDF HTML 생성 완료');
                    
                    // 임시 DIV 생성 (화면에 보이게 렌더링)
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = pdfHTML;
                    tempDiv.style.position = 'fixed';
                    tempDiv.style.left = '0';
                    tempDiv.style.top = '0';
                    tempDiv.style.width = '210mm';
                    tempDiv.style.background = 'white';
                    tempDiv.style.zIndex = '10000';
                    tempDiv.style.pointerEvents = 'none';
                    document.body.appendChild(tempDiv);
                    
                    console.log('📸 html2canvas 캡처 시작...');
                    
                    // 모바일 디바이스 감지
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    const scale = isMobile ? 1 : 2;
                    console.log('🎯 디바이스:', isMobile ? '모바일' : '데스크톱', '/ Scale:', scale);
                    
                    // 약간의 딜레이 후 캡처 (렌더링 완료 대기)
                    await new Promise(resolve => setTimeout(resolve, 500));
                    
                    const canvas = await html2canvas(tempDiv.querySelector('#pdf-content'), {
                        scale: scale,
                        useCORS: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                        windowWidth: 794,
                        windowHeight: 1123
                    });
                    
                    console.log('✅ 캡처 완료:', canvas.width, 'x', canvas.height);
                    
                    // PDF 생성
                    const { jsPDF } = window.jspdf;
                    const imgData = canvas.toDataURL('image/jpeg', 0.95);
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();
                    const imgWidth = pageWidth;
                    const imgHeight = (canvas.height * pageWidth) / canvas.width;
                    
                    let heightLeft = imgHeight;
                    let position = 0;
                    
                    // 첫 페이지
                    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                    
                    // 추가 페이지들
                    while (heightLeft > 0) {
                        position = heightLeft - imgHeight;
                        pdf.addPage();
                        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }
                    
                    console.log('✅ PDF 생성 완료');
                    
                    // PDF 저장
                    const filename = '케이밴_점검표_' + vehicleVin + '_' + installDate + '.pdf';
                    
                    // iOS 추가 감지 (이미 위에서 isMobile 선언됨)
                    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    
                    if (isMobile || isIOS) {
                        // 모바일/iOS: Blob URL 방식
                        console.log('📱 모바일 다운로드 시작...');
                        const blob = pdf.output('blob');
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = filename;
                        link.style.display = 'none';
                        document.body.appendChild(link);
                        link.click();
                        
                        setTimeout(() => {
                            document.body.removeChild(link);
                            URL.revokeObjectURL(url);
                            console.log('✅ PDF 다운로드 완료 (모바일)!');
                        }, 100);
                    } else {
                        // 데스크톱: 기존 방식
                        console.log('💻 데스크톱 다운로드 시작...');
                        pdf.save(filename);
                        console.log('✅ PDF 다운로드 완료 (데스크톱)!');
                    }
                    
                    // 정리
                    document.body.removeChild(tempDiv);
                    loadingOverlay.classList.add('hidden');
                    
                } catch (error) {
                    console.error('❌ PDF 생성 오류:', error);
                    console.error('스택 트레이스:', error.stack);
                    document.getElementById('loadingOverlay').classList.add('hidden');
                    alert('PDF 생성 중 오류가 발생했습니다: ' + error.message);
                }
            };


            // 공통 검증 함수 (필수 검증 제거)
            window.validateForm = function() {
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                const mileage = document.getElementById('mileage').value;
                
                // Collect selected products
                const selectedProducts = [];
                document.querySelectorAll('.product-checkbox:checked').forEach(cb => {
                    selectedProducts.push(cb.value);
                });
                
                const otherCheckbox = document.getElementById('otherProductCheckbox');
                const otherInput = document.getElementById('otherProductInput');
                if (otherCheckbox.checked && otherInput.value.trim()) {
                    selectedProducts.push(otherInput.value.trim());
                }
                
                const productName = selectedProducts.join(', ');
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                const customerPhone = document.getElementById('customerPhone').value.trim();
                const customerEmail1 = document.getElementById('customerEmail1').value.trim();

                // 필수 검증 제거 - 모든 데이터 반환
                return {
                    installDate,
                    vehicleVin,
                    mileage,
                    productName,
                    installerName,
                    customerName,
                    customerPhone,
                    customerEmail1
                };
            }


            // 📧 이메일 발송 버튼
            window.submitEmail = async function() {
                console.log('✅ submitEmail 함수 호출됨');
                const formData = window.validateForm();
                if (!formData) {
                    console.log('❌ validateForm 실패');
                    return;
                }
                console.log('✅ validateForm 통과:', formData);
                
                // Collect email address (단일 이메일만)
                const emailList = formData.customerEmail1 ? [formData.customerEmail1] : [];
                
                // Validate email address
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                for (const email of emailList) {
                    if (!emailRegex.test(email)) {
                        alert('올바른 이메일 주소를 입력해주세요: ' + email);
                        return;
                    }
                }
                
                // Collect checklist data
                const checklist = {};
                document.querySelectorAll('.touch-checkbox').forEach(checkbox => {
                    const section = checkbox.dataset.section;
                    const item = checkbox.dataset.item;
                    if (!checklist[section]) checklist[section] = {};
                    checklist[section][item] = checkbox.classList.contains('checked');
                });

                // Get signatures
                const installerSignature = canvases.installer.toDataURL('image/png');
                const customerSignature = canvases.customer.toDataURL('image/png');
                
                console.log('📤 제출 데이터:', {
                    사진개수: Object.keys(window.photos).reduce((acc, key) => acc + (window.photos[key]?.length || 0), 0),
                    시공자서명길이: installerSignature.length,
                    고객서명길이: customerSignature.length
                });

                // Flatten photos for API
                const flatPhotos = {};
                Object.entries(window.photos).forEach(([sectionKey, photoArray]) => {
                    if (photoArray && photoArray.length > 0) {
                        photoArray.forEach((photo, index) => {
                            flatPhotos[\`\${sectionKey}-\${index}\`] = photo.data;
                        });
                    }
                });

                // Show loading
                document.getElementById('loadingOverlay').classList.remove('hidden');

                try {
                    const response = await axios.post('/api/submit', {
                        installDate: formData.installDate,
                        vehicleVin: formData.vehicleVin,
                        mileage: formData.mileage,
                        productName: formData.productName,
                        productConfig: formData.productName,
                        installerName: formData.installerName,
                        customerName: formData.customerName,
                        customerPhone: formData.customerPhone,
                        customerEmail: formData.customerEmail1,
                        emailList,
                        checklist,
                        installerSignature,
                        customerSignature,
                        photos: flatPhotos
                    });

                    if (response.data.success) {
                        alert(\`✅ 점검표가 성공적으로 제출되었습니다!\\n\${emailList.length}개 이메일로 발송되었습니다.\`);
                        window.location.reload();
                    } else {
                        throw new Error(response.data.error || '제출 실패');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const errorData = error.response?.data;
                    let errorMessage = '❌ 제출 중 오류가 발생했습니다.\\n\\n';
                    
                    if (errorData) {
                        errorMessage += errorData.error || error.message;
                        if (errorData.hint) {
                            errorMessage += '\\n\\n💡 ' + errorData.hint;
                        }
                    } else {
                        errorMessage += error.message;
                    }
                    
                    alert(errorMessage);
                } finally {
                    document.getElementById('loadingOverlay').classList.add('hidden');
                }
            };


            // Submit checklist (레거시, 사용 안 함)
            window.submitChecklist = async function() {
                // Validate form
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                
                // Collect selected products
                const selectedProducts = [];
                document.querySelectorAll('.product-checkbox:checked').forEach(cb => {
                    selectedProducts.push(cb.value);
                });
                
                // Check "기타" input
                const otherCheckbox = document.getElementById('otherProductCheckbox');
                const otherInput = document.getElementById('otherProductInput');
                if (otherCheckbox.checked && otherInput.value.trim()) {
                    selectedProducts.push(otherInput.value.trim());
                }
                
                const productName = selectedProducts.join(', ');
                const productConfig = productName; // 동일한 값
                
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                
                // Collect email addresses
                const customerEmail1 = document.getElementById('customerEmail1').value.trim();
                
                // Collect email (단일 이메일만)
                const emailList = customerEmail1 ? [customerEmail1] : [];
                const customerEmail = customerEmail1; // Primary email for backward compatibility

                if (!installDate || !vehicleVin || !productName || 
                    !installerName || !customerName || !customerEmail1) {
                    alert('모든 필수 항목을 입력해주세요.\\n제품 시공명은 최소 1개 이상 선택해야 합니다.');
                    return;
                }

                // Validate email address
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                for (const email of emailList) {
                    if (!emailRegex.test(email)) {
                        alert(\`올바른 이메일 주소를 입력해주세요: \${email}\`);
                        return;
                    }
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

                // Check if signatures are empty
                if (isSignatureEmpty(canvases.installer)) {
                    alert('시공자 서명을 해주세요.');
                    return;
                }

                if (isSignatureEmpty(canvases.customer)) {
                    alert('고객 서명을 해주세요.');
                    return;
                }

                // Debug log - Convert section photos to flat structure
                const flatPhotos = {};
                let totalPhotoCount = 0;
                Object.keys(window.photos).forEach(sectionKey => {
                    if (Array.isArray(window.photos[sectionKey])) {
                        window.photos[sectionKey].forEach((photo, idx) => {
                            flatPhotos[\`\${sectionKey}-\${idx}\`] = photo.data;
                            totalPhotoCount++;
                        });
                    }
                });
                
                console.log('📤 제출 데이터:', {
                    사진개수: totalPhotoCount,
                    섹션별사진: Object.keys(window.photos).map(k => \`\${k}: \${window.photos[k]?.length || 0}장\`),
                    시공자서명길이: installerSignature.length,
                    고객서명길이: customerSignature.length,
                    이메일개수: emailList.length
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
                        emailList,
                        checklist,
                        installerSignature,
                        customerSignature,
                        photos: flatPhotos
                    });

                    if (response.data.success) {
                        // 이메일 발송 성공 메시지
                        const downloadPDF = confirm(
                            \`✅ 점검표가 성공적으로 제출되었습니다!\\n\${emailList.length}개 이메일로 발송되었습니다.\\n\\n📄 PDF 파일로 다운로드 하시겠습니까?\\n(보관 및 출력용)\`
                        );
                        
                        if (downloadPDF) {
                            // PDF 다운로드
                            await generatePDF();
                        }
                        
                        // Optionally redirect or reset form
                        window.location.reload();
                    } else {
                        throw new Error(response.data.error || '제출 실패');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const errorData = error.response?.data;
                    let errorMessage = '❌ 제출 중 오류가 발생했습니다.\\n\\n';
                    
                    if (errorData) {
                        errorMessage += errorData.error || error.message;
                        if (errorData.hint) {
                            errorMessage += '\\n\\n💡 ' + errorData.hint;
                        }
                    } else {
                        errorMessage += error.message;
                    }
                    
                    alert(errorMessage);
                } finally {
                    document.getElementById('loadingOverlay').classList.add('hidden');
                }
            };
        <\/script>
    </body>
    </html>
  `));Se.post("/api/submit",async e=>{var t,s,r,n;try{const o=await e.req.json();console.log("📝 Received checklist submission"),console.log("Email List:",o.emailList),console.log("Email Count:",((t=o.emailList)==null?void 0:t.length)||0),console.log("Photos count:",Object.keys(o.photos||{}).length),console.log("Photos keys:",Object.keys(o.photos||{})),console.log("Installer signature length:",((s=o.installerSignature)==null?void 0:s.length)||0),console.log("Customer signature length:",((r=o.customerSignature)==null?void 0:r.length)||0);const{RESEND_API_KEY:i,FROM_EMAIL:d,FROM_NAME:c}=e.env;if(!i||i==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(o.photos||{}).length,customerEmail:o.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const l=[];Object.entries(o.photos||{}).forEach(([C,re])=>{const H=re.match(/^data:([^;]+);base64,(.+)$/);if(H){const je=H[1],Pe=H[2],G=je.split("/")[1]||"jpg";l.push({filename:`photo_${C}.${G}`,content:Pe,content_id:`photo_${C}`,disposition:"inline"})}});const h=o.installerSignature.match(/^data:([^;]+);base64,(.+)$/);h&&l.push({filename:"installer_signature.png",content:h[2],content_id:"installer_signature",disposition:"inline"});const u=o.customerSignature.match(/^data:([^;]+);base64,(.+)$/);u&&l.push({filename:"customer_signature.png",content:u[2],content_id:"customer_signature",disposition:"inline"});const g=es(o);console.log("✅ Email HTML generated with",l.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const y=c||"(주)케이밴",P=d||"noreply@yourdomain.com",j="케이밴 제품 시공 점검표 - "+o.vehicleVin,b={from:y+" <"+P+">",to:o.emailList||[o.customerEmail],subject:j,html:g};l.length>0&&(b.attachments=l);const v=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+i,"Content-Type":"application/json"},body:JSON.stringify(b)});if(!v.ok){const C=await v.json();throw new Error("Resend API error: "+JSON.stringify(C))}const T=await v.json();return console.log("✅ Email sent successfully:",T),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{emailList:o.emailList||[o.customerEmail],emailCount:((n=o.emailList)==null?void 0:n.length)||1,installDate:o.installDate,vehicleVin:o.vehicleVin,photosCount:Object.keys(o.photos||{}).length,emailId:T.id}})}catch(l){console.error("❌ Email sending error:",l);const h=l.message||"Unknown email error",u=h.includes("You can only send testing emails");return e.json({success:!1,error:u?"⚠️ Resend 테스트 모드 제한: 본인 이메일(designsoul2007@gmail.com)로만 전송 가능합니다. 다른 이메일로 전송하려면 도메인 인증이 필요합니다.":"Failed to send email",details:h,hint:u?"프로덕션 배포 시 https://resend.com/domains 에서 도메인을 인증하세요.":void 0,debug:{apiKeyExists:!!i,apiKeyValid:i!=="your_resend_api_key_here",fromEmail:d,toEmails:o.emailList||[o.customerEmail],isTestMode:u}},500)}}catch(o){return console.error("❌ Submit error:",o),e.json({success:!1,error:o.message||"Failed to submit checklist",stack:o.stack},500)}});const Ke=new mt,ts=Object.assign({"/src/index.tsx":Se});let gt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
