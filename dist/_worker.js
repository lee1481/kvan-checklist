var xt=Object.defineProperty;var $e=e=>{throw TypeError(e)};var yt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>yt(e,typeof t!="symbol"?t+"":t,s),je=(e,t,s)=>t.has(e)||$e("Cannot "+s);var a=(e,t,s)=>(je(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?$e("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,n)=>(je(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),x=(e,t,s)=>(je(e,t,"access private method"),s);var Fe=(e,t,s,n)=>({set _(i){p(e,t,i,s)},get _(){return a(e,t,n)}});var ze=(e,t,s)=>(n,i)=>{let o=-1;return r(0);async function r(d){if(d<=o)throw new Error("next() called multiple times");o=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],n.req.routeIndex=d):h=d===e.length&&i||void 0,h)try{c=await h(n,()=>r(d+1))}catch(u){if(u instanceof Error&&t)n.error=u,c=await t(u,n),l=!0;else throw u}else n.finalized===!1&&s&&(c=await s(n));return c&&(n.finalized===!1||l)&&(n.res=c),n}},bt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,o=(e instanceof ot?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:n}):{}};async function wt(e,t){const s=await e.formData();return s?kt(s,t):{}}function kt(e,t){const s=Object.create(null);return e.forEach((n,i)=>{t.all||i.endsWith("[]")?Et(s,i,n):s[i]=n}),t.dot&&Object.entries(s).forEach(([n,i])=>{n.includes(".")&&(Pt(s,n,i),delete s[n])}),s}var Et=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let n=e;const i=t.split(".");i.forEach((o,r)=>{r===i.length-1?n[o]=s:((!n[o]||typeof n[o]!="object"||Array.isArray(n[o])||n[o]instanceof File)&&(n[o]=Object.create(null)),n=n[o])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Lt=e=>{const{groups:t,path:s}=Dt(e),n=Ze(s);return St(n,t)},Dt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const i=`@${n}`;return t.push([i,s]),i}),{groups:t,path:e}},St=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(n)){e[i]=e[i].replace(n,t[s][1]);break}}return e},Le={},Ht=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Le[n]||(s[2]?Le[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Le[n]=[e,s[1],!0]),Le[n]}return null},_e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Tt=e=>_e(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const i=t.charCodeAt(n);if(i===37){const o=t.indexOf("?",n),r=t.slice(s,o===-1?void 0:o);return Tt(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(i===63)break}return t.slice(s,n)},Ot=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))n+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&n===""?s.push("/"):s.push(n);const o=i.replace("?","");n+="/"+o,s.push(n)}else n+="/"+i}),s.filter((i,o,r)=>r.indexOf(i)===o)},Ae=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?_e(e,nt):e):e,st=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const d=e.charCodeAt(r+t.length+1);if(d===61){const c=r+t.length+2,l=e.indexOf("&",c);return Ae(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";r=e.indexOf(`&${t}`,r+1)}if(n=/[%+]/.test(e),!n)return}const i={};n??(n=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const r=e.indexOf("&",o+1);let d=e.indexOf("=",o);d>r&&r!==-1&&(d=-1);let c=e.slice(o+1,d===-1?r===-1?void 0:r:d);if(n&&(c=Ae(c)),o=r,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,r===-1?void 0:r),n&&(l=Ae(l))),s?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(l)):i[c]??(i[c]=l)}return t?i[t]:i},Mt=st,It=(e,t)=>st(e,t,!0),nt=decodeURIComponent,Ve=e=>_e(e,nt),le,H,$,it,rt,Be,z,We,ot=(We=class{constructor(e,t="/",s=[[]]){f(this,$);g(this,"raw");f(this,le);f(this,H);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});f(this,z,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const i=Object.keys(t)[0];return i?t[i].then(o=>(i==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,H,s),p(this,le,{})}param(e){return e?x(this,$,it).call(this,e):x(this,$,rt).call(this)}query(e){return Mt(this.url,e)}queries(e){return It(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return a(this,z).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,z).call(this,"text")}arrayBuffer(){return a(this,z).call(this,"arrayBuffer")}blob(){return a(this,z).call(this,"blob")}formData(){return a(this,z).call(this,"formData")}addValidatedData(e,t){a(this,le)[e]=t}valid(e){return a(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bt](){return a(this,H)}get matchedRoutes(){return a(this,H)[0].map(([[,e]])=>e)}get routePath(){return a(this,H)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,H=new WeakMap,$=new WeakSet,it=function(e){const t=a(this,H)[0][this.routeIndex][1][e],s=x(this,$,Be).call(this,t);return s&&/\%/.test(s)?Ve(s):s},rt=function(){const e={},t=Object.keys(a(this,H)[0][this.routeIndex][1]);for(const s of t){const n=x(this,$,Be).call(this,a(this,H)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Ve(n):n)}return e},Be=function(e){return a(this,H)[1]?a(this,H)[1][e]:e},z=new WeakMap,We),Rt={Stringify:1},at=async(e,t,s,n,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(i?i[0]+=e:i=[e],Promise.all(o.map(d=>d({phase:t,buffer:i,context:n}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,n,i))).then(()=>i[0]))):Promise.resolve(e)},Ct="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),ye,be,A,ce,N,D,ve,de,he,X,we,ke,V,re,Ke,jt=(Ke=class{constructor(e,t){f(this,V);f(this,ye);f(this,be);g(this,"env",{});f(this,A);g(this,"finalized",!1);g(this,"error");f(this,ce);f(this,N);f(this,D);f(this,ve);f(this,de);f(this,he);f(this,X);f(this,we);f(this,ke);g(this,"render",(...e)=>(a(this,de)??p(this,de,t=>this.html(t)),a(this,de).call(this,...e)));g(this,"setLayout",e=>p(this,ve,e));g(this,"getLayout",()=>a(this,ve));g(this,"setRenderer",e=>{p(this,de,e)});g(this,"header",(e,t,s)=>{this.finalized&&p(this,D,new Response(a(this,D).body,a(this,D)));const n=a(this,D)?a(this,D).headers:a(this,X)??p(this,X,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});g(this,"status",e=>{p(this,ce,e)});g(this,"set",(e,t)=>{a(this,A)??p(this,A,new Map),a(this,A).set(e,t)});g(this,"get",e=>a(this,A)?a(this,A).get(e):void 0);g(this,"newResponse",(...e)=>x(this,V,re).call(this,...e));g(this,"body",(e,t,s)=>x(this,V,re).call(this,e,t,s));g(this,"text",(e,t,s)=>!a(this,X)&&!a(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,V,re).call(this,e,t,Ne(Ct,s)));g(this,"json",(e,t,s)=>x(this,V,re).call(this,JSON.stringify(e),t,Ne("application/json",s)));g(this,"html",(e,t,s)=>{const n=i=>x(this,V,re).call(this,i,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,Rt.Stringify,!1,{}).then(n):n(e)});g(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});g(this,"notFound",()=>(a(this,he)??p(this,he,()=>new Response),a(this,he).call(this,this)));p(this,ye,e),t&&(p(this,N,t.executionCtx),this.env=t.env,p(this,he,t.notFoundHandler),p(this,ke,t.path),p(this,we,t.matchResult))}get req(){return a(this,be)??p(this,be,new ot(a(this,ye),a(this,ke),a(this,we))),a(this,be)}get event(){if(a(this,N)&&"respondWith"in a(this,N))return a(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,N))return a(this,N);throw Error("This context has no ExecutionContext")}get res(){return a(this,D)||p(this,D,new Response(null,{headers:a(this,X)??p(this,X,new Headers)}))}set res(e){if(a(this,D)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,D).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=a(this,D).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of n)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}p(this,D,e),this.finalized=!0}get var(){return a(this,A)?Object.fromEntries(a(this,A)):{}}},ye=new WeakMap,be=new WeakMap,A=new WeakMap,ce=new WeakMap,N=new WeakMap,D=new WeakMap,ve=new WeakMap,de=new WeakMap,he=new WeakMap,X=new WeakMap,we=new WeakMap,ke=new WeakMap,V=new WeakSet,re=function(e,t,s){const n=a(this,D)?new Headers(a(this,D).headers):a(this,X)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,d]of o)r.toLowerCase()==="set-cookie"?n.append(r,d):n.set(r,d)}if(s)for(const[o,r]of Object.entries(s))if(typeof r=="string")n.set(o,r);else{n.delete(o);for(const d of r)n.append(o,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,ce);return new Response(e,{status:i,headers:n})},Ke),w="ALL",At="all",Nt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},Bt="__COMPOSED_HANDLER",_t=e=>e.text("404 Not Found",404),qe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,k,dt,M,Y,De,Se,ue,$t=(ue=class{constructor(t={}){f(this,k);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");f(this,O,"/");g(this,"routes",[]);f(this,M,_t);g(this,"errorHandler",qe);g(this,"onError",t=>(this.errorHandler=t,this));g(this,"notFound",t=>(p(this,M,t),this));g(this,"fetch",(t,...s)=>x(this,k,Se).call(this,t,s[1],s[0],t.method));g(this,"request",(t,s,n,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),n,i)));g(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,k,Se).call(this,t.request,t,void 0,t.request.method))})});[...Nt,At].forEach(o=>{this[o]=(r,...d)=>(typeof r=="string"?p(this,O,r):x(this,k,Y).call(this,o,a(this,O),r),d.forEach(c=>{x(this,k,Y).call(this,o,a(this,O),c)}),this)}),this.on=(o,r,...d)=>{for(const c of[r].flat()){p(this,O,c);for(const l of[o].flat())d.map(h=>{x(this,k,Y).call(this,l.toUpperCase(),a(this,O),h)})}return this},this.use=(o,...r)=>(typeof o=="string"?p(this,O,o):(p(this,O,"*"),r.unshift(o)),r.forEach(d=>{x(this,k,Y).call(this,w,a(this,O),d)}),this);const{strict:n,...i}=t;Object.assign(this,i),this.getPath=n??!0?t.getPath??et:Ot}route(t,s){const n=this.basePath(t);return s.routes.map(i=>{var r;let o;s.errorHandler===qe?o=i.handler:(o=async(d,c)=>(await ze([],s.errorHandler)(d,()=>i.handler(d,c))).res,o[Bt]=i.handler),x(r=n,k,Y).call(r,i.method,i.path,o)}),this}basePath(t){const s=x(this,k,dt).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,n){let i,o;n&&(typeof n=="function"?o=n:(o=n.optionHandler,n.replaceRequest===!1?i=c=>c:i=n.replaceRequest));const r=o?c=>{const l=o(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};i||(i=(()=>{const c=ie(this._basePath,t),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(i(c.req.raw),...r(c));if(h)return h;await l()};return x(this,k,Y).call(this,w,ie(t,"*"),d),this}},O=new WeakMap,k=new WeakSet,dt=function(){const t=new ue({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,M,a(this,M)),t.routes=this.routes,t},M=new WeakMap,Y=function(t,s,n){t=t.toUpperCase(),s=ie(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,i]),this.routes.push(i)},De=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,n,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,k,Se).call(this,t,s,n,"GET")))();const o=this.getPath(t,{env:n}),r=this.router.match(i,o),d=new jt(t,{path:o,matchResult:r,env:n,executionCtx:s,notFoundHandler:a(this,M)});if(r[0].length===1){let l;try{l=r[0][0][0][0](d,async()=>{d.res=await a(this,M).call(this,d)})}catch(h){return x(this,k,De).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:a(this,M).call(this,d))).catch(h=>x(this,k,De).call(this,h,d)):l??a(this,M).call(this,d)}const c=ze(r[0],this.errorHandler,a(this,M));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,k,De).call(this,l,d)}})()},ue),ht=[];function Ft(e,t){const s=this.buildAllMatchers(),n=((i,o)=>{const r=s[i]||s[w],d=r[2][o];if(d)return d;const c=o.match(r[0]);if(!c)return[[],ht];const l=c.indexOf("",1);return[r[1][l],c]});return this.match=n,n(e,t)}var Te="[^/]+",fe=".*",xe="(?:|/.*)",ae=Symbol(),zt=new Set(".\\+*[^]$()");function Vt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===xe?1:t===fe||t===xe?-1:e===Te?1:t===Te?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,Z,I,se,qt=(se=class{constructor(){f(this,Q);f(this,Z);f(this,I,Object.create(null))}insert(t,s,n,i,o){if(t.length===0){if(a(this,Q)!==void 0)throw ae;if(o)return;p(this,Q,s);return}const[r,...d]=t,c=r==="*"?d.length===0?["","",fe]:["","",Te]:r==="/*"?["","",xe]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||Te;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ae;if(l=a(this,I)[u],!l){if(Object.keys(a(this,I)).some(m=>m!==fe&&m!==xe))throw ae;if(o)return;l=a(this,I)[u]=new se,h!==""&&p(l,Z,i.varIndex++)}!o&&h!==""&&n.push([h,a(l,Z)])}else if(l=a(this,I)[r],!l){if(Object.keys(a(this,I)).some(h=>h.length>1&&h!==fe&&h!==xe))throw ae;if(o)return;l=a(this,I)[r]=new se}l.insert(d,s,n,i,o)}buildRegExpStr(){const s=Object.keys(a(this,I)).sort(Vt).map(n=>{const i=a(this,I)[n];return(typeof a(i,Z)=="number"?`(${n})@${a(i,Z)}`:zt.has(n)?`\\${n}`:n)+i.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,I=new WeakMap,se),Oe,Ee,Ye,Ut=(Ye=class{constructor(){f(this,Oe,{varIndex:0});f(this,Ee,new qt)}insert(e,t,s){const n=[],i=[];for(let r=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${r}`;return i[r]=[l,c],r++,d=!0,l}),!d)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=i.length-1;r>=0;r--){const[d]=i[r];for(let c=o.length-1;c>=0;c--)if(o[c].indexOf(d)!==-1){o[c]=o[c].replace(d,i[r][1]);break}}return a(this,Ee).insert(o,t,n,a(this,Oe),s),n}buildRegExp(){let e=a(this,Ee).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,o,r)=>o!==void 0?(s[++t]=Number(o),"$()"):(r!==void 0&&(n[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Oe=new WeakMap,Ee=new WeakMap,Ye),Gt=[/^$/,[],Object.create(null)],He=Object.create(null);function ut(e){return He[e]??(He[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){He=Object.create(null)}function Kt(e){var l;const t=new Ut,s=[];if(e.length===0)return Gt;const n=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[m,b])=>h?1:m?-1:u.length-b.length),i=Object.create(null);for(let h=0,u=-1,m=n.length;h<m;h++){const[b,P,R]=n[h];b?i[P]=[R.map(([v])=>[v,Object.create(null)]),ht]:u++;let y;try{y=t.insert(P,u,b)}catch(v){throw v===ae?new ct(P):v}b||(s[u]=R.map(([v,T])=>{const C=Object.create(null);for(T-=1;T>=0;T--){const[ne,S]=y[T];C[ne]=S}return[v,C]}))}const[o,r,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let m=0,b=s[h].length;m<b;m++){const P=(l=s[h][m])==null?void 0:l[1];if(!P)continue;const R=Object.keys(P);for(let y=0,v=R.length;y<v;y++)P[R[y]]=d[P[R[y]]]}const c=[];for(const h in r)c[h]=s[r[h]];return[o,c,i]}function oe(e,t){if(e){for(const s of Object.keys(e).sort((n,i)=>i.length-n.length))if(ut(s).test(t))return[...e[s]]}}var q,U,Me,pt,Je,Yt=(Je=class{constructor(){f(this,Me);g(this,"name","RegExpRouter");f(this,q);f(this,U);g(this,"match",Ft);p(this,q,{[w]:Object.create(null)}),p(this,U,{[w]:Object.create(null)})}add(e,t,s){var d;const n=a(this,q),i=a(this,U);if(!n||!i)throw new Error(lt);n[e]||[n,i].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(l=>{c[e][l]=[...c[w][l]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ut(t);e===w?Object.keys(n).forEach(l=>{var h;(h=n[l])[t]||(h[t]=oe(n[l],t)||oe(n[w],t)||[])}):(d=n[e])[t]||(d[t]=oe(n[e],t)||oe(n[w],t)||[]),Object.keys(n).forEach(l=>{(e===w||e===l)&&Object.keys(n[l]).forEach(h=>{c.test(h)&&n[l][h].push([s,o])})}),Object.keys(i).forEach(l=>{(e===w||e===l)&&Object.keys(i[l]).forEach(h=>c.test(h)&&i[l][h].push([s,o]))});return}const r=tt(t)||[t];for(let c=0,l=r.length;c<l;c++){const h=r[c];Object.keys(i).forEach(u=>{var m;(e===w||e===u)&&((m=i[u])[h]||(m[h]=[...oe(n[u],h)||oe(n[w],h)||[]]),i[u][h].push([s,o-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,U)).concat(Object.keys(a(this,q))).forEach(t=>{e[t]||(e[t]=x(this,Me,pt).call(this,t))}),p(this,q,p(this,U,void 0)),Wt(),e}},q=new WeakMap,U=new WeakMap,Me=new WeakSet,pt=function(e){const t=[];let s=e===w;return[a(this,q),a(this,U)].forEach(n=>{const i=n[e]?Object.keys(n[e]).map(o=>[o,n[e][o]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==w&&t.push(...Object.keys(n[w]).map(o=>[o,n[w][o]]))}),s?Kt(t):null},Je),G,B,Xe,Jt=(Xe=class{constructor(e){g(this,"name","SmartRouter");f(this,G,[]);f(this,B,[]);p(this,G,e.routers)}add(e,t,s){if(!a(this,B))throw new Error(lt);a(this,B).push([e,t,s])}match(e,t){if(!a(this,B))throw new Error("Fatal error");const s=a(this,G),n=a(this,B),i=s.length;let o=0,r;for(;o<i;o++){const d=s[o];try{for(let c=0,l=n.length;c<l;c++)d.add(...n[c]);r=d.match(e,t)}catch(c){if(c instanceof ct)continue;throw c}this.match=d.match.bind(d),p(this,G,[d]),p(this,B,void 0);break}if(o===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(a(this,B)||a(this,G).length!==1)throw new Error("No active router has been determined yet.");return a(this,G)[0]}},G=new WeakMap,B=new WeakMap,Xe),me=Object.create(null),W,L,ee,pe,E,_,J,ge,Xt=(ge=class{constructor(t,s,n){f(this,_);f(this,W);f(this,L);f(this,ee);f(this,pe,0);f(this,E,me);if(p(this,L,n||Object.create(null)),p(this,W,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},p(this,W,[i])}p(this,ee,[])}insert(t,s,n){p(this,pe,++Fe(this,pe)._);let i=this;const o=Lt(s),r=[];for(let d=0,c=o.length;d<c;d++){const l=o[d],h=o[d+1],u=Ht(l,h),m=Array.isArray(u)?u[0]:l;if(m in a(i,L)){i=a(i,L)[m],u&&r.push(u[1]);continue}a(i,L)[m]=new ge,u&&(a(i,ee).push(u),r.push(u[1])),i=a(i,L)[m]}return a(i,W).push({[t]:{handler:n,possibleKeys:r.filter((d,c,l)=>l.indexOf(d)===c),score:a(this,pe)}}),i}search(t,s){var c;const n=[];p(this,E,me);let o=[this];const r=Ze(s),d=[];for(let l=0,h=r.length;l<h;l++){const u=r[l],m=l===h-1,b=[];for(let P=0,R=o.length;P<R;P++){const y=o[P],v=a(y,L)[u];v&&(p(v,E,a(y,E)),m?(a(v,L)["*"]&&n.push(...x(this,_,J).call(this,a(v,L)["*"],t,a(y,E))),n.push(...x(this,_,J).call(this,v,t,a(y,E)))):b.push(v));for(let T=0,C=a(y,ee).length;T<C;T++){const ne=a(y,ee)[T],S=a(y,E)===me?{}:{...a(y,E)};if(ne==="*"){const F=a(y,L)["*"];F&&(n.push(...x(this,_,J).call(this,F,t,a(y,E))),p(F,E,S),b.push(F));continue}const[Re,Pe,K]=ne;if(!u&&!(K instanceof RegExp))continue;const j=a(y,L)[Re],ft=r.slice(l).join("/");if(K instanceof RegExp){const F=K.exec(ft);if(F){if(S[Pe]=F[0],n.push(...x(this,_,J).call(this,j,t,a(y,E),S)),Object.keys(a(j,L)).length){p(j,E,S);const Ce=((c=F[0].match(/\//))==null?void 0:c.length)??0;(d[Ce]||(d[Ce]=[])).push(j)}continue}}(K===!0||K.test(u))&&(S[Pe]=u,m?(n.push(...x(this,_,J).call(this,j,t,S,a(y,E))),a(j,L)["*"]&&n.push(...x(this,_,J).call(this,a(j,L)["*"],t,S,a(y,E)))):(p(j,E,S),b.push(j)))}}o=b.concat(d.shift()??[])}return n.length>1&&n.sort((l,h)=>l.score-h.score),[n.map(({handler:l,params:h})=>[l,h])]}},W=new WeakMap,L=new WeakMap,ee=new WeakMap,pe=new WeakMap,E=new WeakMap,_=new WeakSet,J=function(t,s,n,i){const o=[];for(let r=0,d=a(t,W).length;r<d;r++){const c=a(t,W)[r],l=c[s]||c[w],h={};if(l!==void 0&&(l.params=Object.create(null),o.push(l),n!==me||i&&i!==me))for(let u=0,m=l.possibleKeys.length;u<m;u++){const b=l.possibleKeys[u],P=h[l.score];l.params[b]=i!=null&&i[b]&&!P?i[b]:n[b]??(i==null?void 0:i[b]),h[l.score]=!0}}return o},ge),te,Qe,Qt=(Qe=class{constructor(){g(this,"name","TrieRouter");f(this,te);p(this,te,new Xt)}add(e,t,s){const n=tt(t);if(n){for(let i=0,o=n.length;i<o;i++)a(this,te).insert(e,n[i],s);return}a(this,te).insert(e,t,s)}match(e,t){return a(this,te).search(e,t)}},te=new WeakMap,Qe),gt=class extends $t{constructor(e={}){super(e),this.router=e.router??new Jt({routers:[new Yt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(o=>typeof o=="string"?o==="*"?()=>o:r=>o===r?r:null:typeof o=="function"?o:r=>o.includes(r)?r:null)(s.origin),i=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(r,d){var h;function c(u,m){r.res.headers.set(u,m)}const l=await n(r.req.header("origin")||"",r);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await i(r.req.header("origin")||"",r);u.length&&c("Access-Control-Allow-Methods",u.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const b=r.req.header("Access-Control-Request-Headers");b&&(m=b.split(/\s*,\s*/))}return m!=null&&m.length&&(c("Access-Control-Allow-Headers",m.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&r.header("Vary","Origin",{append:!0})}};const Ue=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((r,d)=>r+Object.values(d).filter(c=>c).length,0),s=Ue.reduce((r,d)=>r+d.items.length,0);let n="";Ue.forEach((r,d)=>{n+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+r.title+'</h3><table style="width:100%;border-collapse:collapse;">',r.items.forEach((c,l)=>{var m;const h=((m=e.checklist[d])==null?void 0:m[l])||!1;n+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+c+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(h?"✅":"⬜")+"</td></tr>";const u=d+"-"+l;e.photos[u]&&(n+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+u+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+u+'"></td></tr>')}),n+="</table></div>"});const i=e.mileage?"<p><strong>주행거리:</strong> "+e.mileage+" km</p>":"",o=e.customerPhone?"<p><strong>고객 전화번호:</strong> "+e.customerPhone+"</p>":"";return'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p>"+i+"<p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+n+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+"<br>"+o+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>(주)케이밴</strong> | 전화: 031-666-1901 / 010-3271-1900</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 (주)케이밴 All Rights Reserved</p></div></div></body></html>'}const Ie=new gt;Ie.use("/api/*",Zt());Ie.get("/",e=>e.html(`
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

            <!-- PAGE 1: 메인 페이지 (A4 사이즈) -->
            <div id="main-page" class="bg-white rounded-lg shadow-lg p-8 mb-6 section-card" style="max-width: 794px; margin: 0 auto;">
                <h2 class="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                    <i class="fas fa-info-circle mr-3"></i>
                    시공 정보
                </h2>
                <div class="space-y-5">
                    <!-- 시공일자 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">시공일자</label>
                        <input type="date" id="installDate" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base">
                    </div>
                    
                    <!-- 고객명 + 고객 서명 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">고객명</label>
                        <input type="text" id="customerName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
                            placeholder="고객 이름">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">고객 서명</label>
                        <canvas id="customerSignature" 
                            class="signature-canvas w-full" 
                            width="600" height="120"></canvas>
                        <button onclick="clearSignature('customer')" 
                            class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                    
                    <!-- 고객 전화번호 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">고객 전화번호</label>
                        <input type="tel" id="customerPhone" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
                            placeholder="010-1234-5678">
                    </div>
                    
                    <!-- 차량 차대번호 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">차량 차대번호</label>
                        <input type="text" id="vehicleVin" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
                            placeholder="차대번호를 입력하세요">
                    </div>
                    
                    <!-- 주행거리 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">주행거리 (km)</label>
                        <input type="number" id="mileage" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
                            placeholder="주행거리를 입력하세요 (예: 50000)" 
                            min="0" 
                            step="1">
                    </div>
                </div>
            </div>

            <!-- 품질보증서 (메인 페이지 하단) -->
            <div id="warranty-section" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-xl p-6 mb-6 section-card border-4 border-blue-400" style="max-width: 794px; margin: 0 auto;">
                <h2 class="text-2xl font-bold text-blue-900 mb-4 flex items-center justify-center">
                    <i class="fas fa-certificate mr-3"></i>
                    품질보증서
                </h2>
                
                <div class="bg-white rounded-lg p-5 shadow-inner">
                    <div class="space-y-3 text-gray-800">
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">1</span>
                            <p class="text-base leading-relaxed">
                                케이밴 제품의 보상 기준은 <strong class="text-blue-700">공정거래위원회 소비자 분쟁 해결 기준</strong>에 따릅니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">2</span>
                            <p class="text-base leading-relaxed">
                                본 제품은 <strong class="text-blue-700">엄격한 품질관리 및 검사 과정</strong>을 거쳐서 만들어진 제품입니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">3</span>
                            <p class="text-base leading-relaxed">
                                보증 기간 중 고객이 정상적으로 사용하는 과정에서 제품상의 결함으로 인해 발생한 고장의 경우, <strong class="text-blue-700">무상 수리</strong>를 제공합니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-sm mr-3 flex-shrink-0">4</span>
                            <p class="text-base leading-relaxed">
                                서비스를 받으실 때 <strong class="text-blue-700">본 보증서를 제시</strong>하여 주십시오.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white font-bold text-sm mr-3 flex-shrink-0">5</span>
                            <p class="text-base leading-relaxed">
                                본 제품의 보증 기간은 <strong class="text-green-700">3년 6만 킬로미터</strong>로 규정합니다.
                            </p>
                        </div>
                        
                        <div class="mt-4 p-3 bg-red-50 rounded-lg border-2 border-red-300">
                            <p class="text-sm font-bold text-red-800 mb-2">
                                <i class="fas fa-exclamation-triangle mr-2"></i>
                                다음의 경우는 품질 보증 조건에 해당되지 않으므로 유상 수리로 적용됩니다.
                            </p>
                            <div class="space-y-1 text-xs text-gray-700 ml-4">
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
                    
                    <div class="mt-4 pt-4 border-t-2 border-gray-200">
                        <div class="flex justify-between items-center text-sm">
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
            <div id="installer-section" class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card" style="max-width: 794px; margin: 0 auto;">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-user-tie mr-2"></i>
                    시공자 정보
                </h2>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">시공자명</label>
                        <input type="text" id="installerName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
                            placeholder="시공자 이름">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">시공자 서명</label>
                        <canvas id="installerSignature" 
                            class="signature-canvas w-full" 
                            width="600" height="120"></canvas>
                        <button onclick="clearSignature('installer')" 
                            class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                </div>
            </div>

            <!-- 이메일 입력 + 발송 버튼 -->
            <div id="email-section" class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card" style="max-width: 794px; margin: 0 auto;">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-envelope mr-2"></i>
                    이메일 발송
                </h2>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소</label>
                        <input type="email" id="customerEmail1" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base"
                            placeholder="example@email.com">
                    </div>
                    <button id="emailBtn" onclick="submitEmail()" 
                        class="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                        <i class="fas fa-paper-plane mr-2"></i>
                        📧 이메일 발송
                    </button>
                </div>
            </div>

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

            <!-- PNG Download Button -->
            <div id="action-buttons" class="mb-6">
                <button id="pngBtn" onclick="downloadJPG()" 
                    class="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition shadow-lg flex items-center justify-center">
                    <i class="fas fa-image mr-2"></i>
                    🖼️ PNG 이미지 다운로드
                </button>
            </div>

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


            // 📄 JPG 다운로드 버튼
            window.downloadJPG = async function() {
                console.log('✅ downloadJPG 함수 호출됨');
                const formData = window.validateForm();
                if (!formData) {
                    console.log('❌ validateForm 실패');
                    return;
                }
                console.log('✅ validateForm 통과, JPG 생성 시작');
                
                try {
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    loadingOverlay.classList.remove('hidden');
                    
                    // 메인 콘텐츠 영역 캡처
                    const container = document.getElementById('app');
                    const buttons = document.getElementById('action-buttons');
                    const loadingDiv = document.getElementById('loadingOverlay');
                    
                    if (!container) {
                        throw new Error('콘텐츠 영역을 찾을 수 없습니다.');
                    }
                    
                    // 스크롤을 최상단으로 이동
                    window.scrollTo(0, 0);
                    
                    // 버튼과 로딩 오버레이 숨기기
                    if (buttons) buttons.style.display = 'none';
                    if (loadingDiv) loadingDiv.style.display = 'none';
                    
                    // A4 사이즈에 맞게 스타일 조정하되, 콘텐츠 크기는 자연스럽게 유지
                    const originalStyles = {
                        maxWidth: container.style.maxWidth,
                        padding: container.style.padding,
                        fontSize: document.body.style.fontSize,
                        width: container.style.width
                    };
                    
                    // 컨테이너를 A4 너비에 맞게 조정 (자연스러운 높이 유지)
                    container.style.maxWidth = '800px';
                    container.style.width = '800px';
                    container.style.padding = '30px';
                    
                    // 모든 섹션의 패딩과 마진을 적당히 축소
                    const sections = container.querySelectorAll('.section-card, .bg-white');
                    const sectionOriginalStyles = [];
                    sections.forEach(section => {
                        sectionOriginalStyles.push({
                            element: section,
                            padding: section.style.padding,
                            margin: section.style.marginBottom
                        });
                        section.style.padding = '16px';
                        section.style.marginBottom = '16px';
                    });
                    
                    // 제목 폰트 크기를 약간만 축소
                    const headings = container.querySelectorAll('h1, h2, h3, h4');
                    const headingOriginalStyles = [];
                    headings.forEach(heading => {
                        headingOriginalStyles.push({
                            element: heading,
                            fontSize: heading.style.fontSize,
                            marginBottom: heading.style.marginBottom
                        });
                        const currentSize = window.getComputedStyle(heading).fontSize;
                        heading.style.fontSize = (parseFloat(currentSize) * 0.85) + 'px';
                        heading.style.marginBottom = '10px';
                    });
                    
                    // 입력란과 텍스트를 읽기 좋은 크기로 유지
                    const inputs = container.querySelectorAll('input, label, p, span');
                    const inputOriginalStyles = [];
                    inputs.forEach(input => {
                        inputOriginalStyles.push({
                            element: input,
                            fontSize: input.style.fontSize,
                            padding: input.style.padding
                        });
                        const currentSize = window.getComputedStyle(input).fontSize;
                        if (parseFloat(currentSize) > 14) {
                            input.style.fontSize = '13px';
                        }
                        if (input.tagName === 'INPUT') {
                            input.style.padding = '8px 10px';
                        }
                    });
                    
                    // 서명 캔버스 크기를 적당히 축소
                    const signatures = container.querySelectorAll('canvas');
                    const signatureOriginalStyles = [];
                    signatures.forEach(sig => {
                        signatureOriginalStyles.push({
                            element: sig,
                            height: sig.style.height
                        });
                        sig.style.height = '120px';
                    });
                    
                    // 모든 요소의 가시성 강제 적용
                    const allElements = container.querySelectorAll('*');
                    allElements.forEach(el => {
                        const computed = window.getComputedStyle(el);
                        if (computed.visibility === 'hidden' && !el.classList.contains('hidden')) {
                            el.style.visibility = 'visible';
                        }
                        if (computed.opacity === '0' && !el.classList.contains('hidden')) {
                            el.style.opacity = '1';
                        }
                    });
                    
                    // 폰트 로딩 대기
                    if (document.fonts && document.fonts.ready) {
                        await document.fonts.ready;
                    }
                    
                    // DOM 렌더링 완료 대기 (1초)
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    // 이미지 로딩 완료 대기
                    const images = container.querySelectorAll('img');
                    await Promise.all(
                        Array.from(images).map(img => {
                            if (img.complete) return Promise.resolve();
                            return new Promise(resolve => {
                                img.onload = resolve;
                                img.onerror = resolve;
                                setTimeout(resolve, 3000); // 3초 타임아웃
                            });
                        })
                    );
                    
                    // html2canvas로 고품질 캡처 (자연스러운 콘텐츠 크기)
                    const canvas = await html2canvas(container, {
                        scale: 2.5, // 높은 해상도 유지
                        useCORS: true,
                        allowTaint: false,
                        backgroundColor: '#ffffff',
                        logging: true,
                        imageTimeout: 15000,
                        removeContainer: true
                        // width/height를 지정하지 않아 자연스러운 크기 유지
                    });
                    
                    // 원래 스타일로 복원
                    container.style.maxWidth = originalStyles.maxWidth;
                    container.style.width = originalStyles.width;
                    container.style.padding = originalStyles.padding;
                    
                    sectionOriginalStyles.forEach(style => {
                        style.element.style.padding = style.padding;
                        style.element.style.marginBottom = style.margin;
                    });
                    
                    headingOriginalStyles.forEach(style => {
                        style.element.style.fontSize = style.fontSize;
                        style.element.style.marginBottom = style.marginBottom;
                    });
                    
                    inputOriginalStyles.forEach(style => {
                        style.element.style.fontSize = style.fontSize;
                        style.element.style.padding = style.padding;
                    });
                    
                    signatureOriginalStyles.forEach(style => {
                        style.element.style.height = style.height;
                    });
                    
                    // 버튼과 로딩 오버레이 다시 표시
                    if (buttons) buttons.style.display = '';
                    if (loadingDiv) {
                        loadingDiv.style.display = '';
                        loadingDiv.classList.add('hidden');
                    }
                    
                    // Canvas를 PNG로 변환 (무손실, 100% 품질)
                    const imageData = canvas.toDataURL('image/png');
                    
                    // 파일명 생성
                    const vehicleVin = document.getElementById('vehicleVin').value || '차량';
                    const installDate = document.getElementById('installDate').value || new Date().toISOString().split('T')[0];
                    const fileName = '케이밴_점검표_' + vehicleVin + '_' + installDate + '.png';
                    
                    // 다운로드
                    const link = document.createElement('a');
                    link.href = imageData;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    console.log('✅ PNG 다운로드 완료!');
                    
                } catch (error) {
                    console.error('❌ PNG 생성 오류:', error);
                    alert('PNG 생성 중 오류가 발생했습니다: ' + error.message);
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    if (loadingOverlay) {
                        loadingOverlay.style.display = '';
                        loadingOverlay.classList.add('hidden');
                    }
                    const buttons = document.getElementById('action-buttons');
                    if (buttons) buttons.style.display = '';
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
  `));Ie.post("/api/submit",async e=>{var t,s,n,i;try{const o=await e.req.json();console.log("📝 Received checklist submission"),console.log("Email List:",o.emailList),console.log("Email Count:",((t=o.emailList)==null?void 0:t.length)||0),console.log("Photos count:",Object.keys(o.photos||{}).length),console.log("Photos keys:",Object.keys(o.photos||{})),console.log("Installer signature length:",((s=o.installerSignature)==null?void 0:s.length)||0),console.log("Customer signature length:",((n=o.customerSignature)==null?void 0:n.length)||0);const{RESEND_API_KEY:r,FROM_EMAIL:d,FROM_NAME:c}=e.env;if(!r||r==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(o.photos||{}).length,customerEmail:o.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const l=[];Object.entries(o.photos||{}).forEach(([C,ne])=>{const S=ne.match(/^data:([^;]+);base64,(.+)$/);if(S){const Re=S[1],Pe=S[2],K=Re.split("/")[1]||"jpg";l.push({filename:`photo_${C}.${K}`,content:Pe,content_id:`photo_${C}`,disposition:"inline"})}});const h=o.installerSignature.match(/^data:([^;]+);base64,(.+)$/);h&&l.push({filename:"installer_signature.png",content:h[2],content_id:"installer_signature",disposition:"inline"});const u=o.customerSignature.match(/^data:([^;]+);base64,(.+)$/);u&&l.push({filename:"customer_signature.png",content:u[2],content_id:"customer_signature",disposition:"inline"});const m=es(o);console.log("✅ Email HTML generated with",l.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const b=c||"(주)케이밴",P=d||"noreply@yourdomain.com",R="케이밴 제품 시공 점검표 - "+o.vehicleVin,y={from:b+" <"+P+">",to:o.emailList||[o.customerEmail],subject:R,html:m};l.length>0&&(y.attachments=l);const v=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(y)});if(!v.ok){const C=await v.json();throw new Error("Resend API error: "+JSON.stringify(C))}const T=await v.json();return console.log("✅ Email sent successfully:",T),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{emailList:o.emailList||[o.customerEmail],emailCount:((i=o.emailList)==null?void 0:i.length)||1,installDate:o.installDate,vehicleVin:o.vehicleVin,photosCount:Object.keys(o.photos||{}).length,emailId:T.id}})}catch(l){console.error("❌ Email sending error:",l);const h=l.message||"Unknown email error",u=h.includes("You can only send testing emails");return e.json({success:!1,error:u?"⚠️ Resend 테스트 모드 제한: 본인 이메일(designsoul2007@gmail.com)로만 전송 가능합니다. 다른 이메일로 전송하려면 도메인 인증이 필요합니다.":"Failed to send email",details:h,hint:u?"프로덕션 배포 시 https://resend.com/domains 에서 도메인을 인증하세요.":void 0,debug:{apiKeyExists:!!r,apiKeyValid:r!=="your_resend_api_key_here",fromEmail:d,toEmails:o.emailList||[o.customerEmail],isTestMode:u}},500)}}catch(o){return console.error("❌ Submit error:",o),e.json({success:!1,error:o.message||"Failed to submit checklist",stack:o.stack},500)}});const Ge=new gt,ts=Object.assign({"/src/index.tsx":Ie});let mt=!1;for(const[,e]of Object.entries(ts))e&&(Ge.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ge.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),mt=!0);if(!mt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ge as default};
