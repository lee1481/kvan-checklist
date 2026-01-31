var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var bt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>bt(e,typeof t!="symbol"?t+"":t,s),Le=(e,t,s)=>t.has(e)||Be("Cannot "+s);var o=(e,t,s)=>(Le(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,r)=>(Le(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Le(e,t,"access private method"),s);var Ve=(e,t,s,r)=>({set _(n){p(e,t,n,s)},get _(){return o(e,t,r)}});var Ue=(e,t,s)=>(r,n)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let l,c=!1,h;if(e[d]?(h=e[d][0][0],r.req.routeIndex=d):h=d===e.length&&n||void 0,h)try{l=await h(r,()=>a(d+1))}catch(u){if(u instanceof Error&&t)r.error=u,l=await t(u,r),c=!0;else throw u}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},yt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,i=(e instanceof nt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:r}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?kt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(It(s,r,n),delete s[r])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},It=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((i,a)=>{a===n.length-1?r[i]=s:((!r[i]||typeof r[i]!="object"||Array.isArray(r[i])||r[i]instanceof File)&&(r[i]=Object.create(null)),r=r[i])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Rt=e=>{const{groups:t,path:s}=Pt(e),r=Ze(s);return St(r,t)},Pt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},St=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Ie={},Ct=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Ie[r]||(s[2]?Ie[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ie[r]=[e,s[1],!0]),Ie[r]}return null},Te=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},jt=e=>Te(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const i=t.indexOf("?",r),a=t.slice(s,i===-1?void 0:i);return jt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(n===63)break}return t.slice(s,r)},Ot=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ne=(e,t,...s)=>(s.length&&(t=ne(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const i=n.replace("?","");r+="/"+i,s.push(r)}else r+="/"+n}),s.filter((n,i,a)=>a.indexOf(n)===i)},He=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Te(e,rt):e):e,st=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const l=a+t.length+2,c=e.indexOf("&",l);return He(e.slice(l,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const a=e.indexOf("&",i+1);let d=e.indexOf("=",i);d>a&&a!==-1&&(d=-1);let l=e.slice(i+1,d===-1?a===-1?void 0:a:d);if(r&&(l=He(l)),i=a,l==="")continue;let c;d===-1?c="":(c=e.slice(d+1,a===-1?void 0:a),r&&(c=He(c))),s?(n[l]&&Array.isArray(n[l])||(n[l]=[]),n[l].push(c)):n[l]??(n[l]=c)}return t?n[t]:n},Dt=st,At=(e,t)=>st(e,t,!0),rt=decodeURIComponent,qe=e=>Te(e,rt),ae,j,M,it,ot,_e,U,We,nt=(We=class{constructor(e,t="/",s=[[]]){m(this,M);g(this,"raw");m(this,ae);m(this,j);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});m(this,U,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,j,s),p(this,ae,{})}param(e){return e?x(this,M,it).call(this,e):x(this,M,ot).call(this)}query(e){return Dt(this.url,e)}queries(e){return At(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return o(this,U).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,U).call(this,"text")}arrayBuffer(){return o(this,U).call(this,"arrayBuffer")}blob(){return o(this,U).call(this,"blob")}formData(){return o(this,U).call(this,"formData")}addValidatedData(e,t){o(this,ae)[e]=t}valid(e){return o(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return o(this,j)}get matchedRoutes(){return o(this,j)[0].map(([[,e]])=>e)}get routePath(){return o(this,j)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,j=new WeakMap,M=new WeakSet,it=function(e){const t=o(this,j)[0][this.routeIndex][1][e],s=x(this,M,_e).call(this,t);return s&&/\%/.test(s)?qe(s):s},ot=function(){const e={},t=Object.keys(o(this,j)[0][this.routeIndex][1]);for(const s of t){const r=x(this,M,_e).call(this,o(this,j)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?qe(r):r)}return e},_e=function(e){return o(this,j)[1]?o(this,j)[1][e]:e},U=new WeakMap,We),$t={Stringify:1},at=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(l=>at(l,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Lt="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),be,ye,H,ce,N,P,ve,le,de,Y,we,Ee,q,ie,Xe,Ht=(Xe=class{constructor(e,t){m(this,q);m(this,be);m(this,ye);g(this,"env",{});m(this,H);g(this,"finalized",!1);g(this,"error");m(this,ce);m(this,N);m(this,P);m(this,ve);m(this,le);m(this,de);m(this,Y);m(this,we);m(this,Ee);g(this,"render",(...e)=>(o(this,le)??p(this,le,t=>this.html(t)),o(this,le).call(this,...e)));g(this,"setLayout",e=>p(this,ve,e));g(this,"getLayout",()=>o(this,ve));g(this,"setRenderer",e=>{p(this,le,e)});g(this,"header",(e,t,s)=>{this.finalized&&p(this,P,new Response(o(this,P).body,o(this,P)));const r=o(this,P)?o(this,P).headers:o(this,Y)??p(this,Y,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});g(this,"status",e=>{p(this,ce,e)});g(this,"set",(e,t)=>{o(this,H)??p(this,H,new Map),o(this,H).set(e,t)});g(this,"get",e=>o(this,H)?o(this,H).get(e):void 0);g(this,"newResponse",(...e)=>x(this,q,ie).call(this,...e));g(this,"body",(e,t,s)=>x(this,q,ie).call(this,e,t,s));g(this,"text",(e,t,s)=>!o(this,Y)&&!o(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,q,ie).call(this,e,t,Ne(Lt,s)));g(this,"json",(e,t,s)=>x(this,q,ie).call(this,JSON.stringify(e),t,Ne("application/json",s)));g(this,"html",(e,t,s)=>{const r=n=>x(this,q,ie).call(this,n,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,$t.Stringify,!1,{}).then(r):r(e)});g(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});g(this,"notFound",()=>(o(this,de)??p(this,de,()=>new Response),o(this,de).call(this,this)));p(this,be,e),t&&(p(this,N,t.executionCtx),this.env=t.env,p(this,de,t.notFoundHandler),p(this,Ee,t.path),p(this,we,t.matchResult))}get req(){return o(this,ye)??p(this,ye,new nt(o(this,be),o(this,Ee),o(this,we))),o(this,ye)}get event(){if(o(this,N)&&"respondWith"in o(this,N))return o(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,N))return o(this,N);throw Error("This context has no ExecutionContext")}get res(){return o(this,P)||p(this,P,new Response(null,{headers:o(this,Y)??p(this,Y,new Headers)}))}set res(e){if(o(this,P)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,P).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=o(this,P).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}p(this,P,e),this.finalized=!0}get var(){return o(this,H)?Object.fromEntries(o(this,H)):{}}},be=new WeakMap,ye=new WeakMap,H=new WeakMap,ce=new WeakMap,N=new WeakMap,P=new WeakMap,ve=new WeakMap,le=new WeakMap,de=new WeakMap,Y=new WeakMap,we=new WeakMap,Ee=new WeakMap,q=new WeakSet,ie=function(e,t,s){const r=o(this,P)?new Headers(o(this,P).headers):o(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")r.set(i,a);else{r.delete(i);for(const d of a)r.append(i,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ce);return new Response(e,{status:n,headers:r})},Xe),w="ALL",Nt="all",_t=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",lt=class extends Error{},Tt="__COMPOSED_HANDLER",Mt=e=>e.text("404 Not Found",404),Fe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,E,dt,D,X,Re,Pe,he,Bt=(he=class{constructor(t={}){m(this,E);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");m(this,O,"/");g(this,"routes",[]);m(this,D,Mt);g(this,"errorHandler",Fe);g(this,"onError",t=>(this.errorHandler=t,this));g(this,"notFound",t=>(p(this,D,t),this));g(this,"fetch",(t,...s)=>x(this,E,Pe).call(this,t,s[1],s[0],t.method));g(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ne("/",t)}`,s),r,n)));g(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Pe).call(this,t.request,t,void 0,t.request.method))})});[..._t,Nt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?p(this,O,a):x(this,E,X).call(this,i,o(this,O),a),d.forEach(l=>{x(this,E,X).call(this,i,o(this,O),l)}),this)}),this.on=(i,a,...d)=>{for(const l of[a].flat()){p(this,O,l);for(const c of[i].flat())d.map(h=>{x(this,E,X).call(this,c.toUpperCase(),o(this,O),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?p(this,O,i):(p(this,O,"*"),a.unshift(i)),a.forEach(d=>{x(this,E,X).call(this,w,o(this,O),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??et:Ot}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var a;let i;s.errorHandler===Fe?i=n.handler:(i=async(d,l)=>(await Ue([],s.errorHandler)(d,()=>n.handler(d,l))).res,i[Tt]=n.handler),x(a=r,E,X).call(a,n.method,n.path,i)}),this}basePath(t){const s=x(this,E,dt).call(this);return s._basePath=ne(this._basePath,t),s}mount(t,s,r){let n,i;r&&(typeof r=="function"?i=r:(i=r.optionHandler,r.replaceRequest===!1?n=l=>l:n=r.replaceRequest));const a=i?l=>{const c=i(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};n||(n=(()=>{const l=ne(this._basePath,t),c=l==="/"?0:l.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,h)}})());const d=async(l,c)=>{const h=await s(n(l.req.raw),...a(l));if(h)return h;await c()};return x(this,E,X).call(this,w,ne(t,"*"),d),this}},O=new WeakMap,E=new WeakSet,dt=function(){const t=new he({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,D,o(this,D)),t.routes=this.routes,t},D=new WeakMap,X=function(t,s,r){t=t.toUpperCase(),s=ne(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},Re=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Pe=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,E,Pe).call(this,t,s,r,"GET")))();const i=this.getPath(t,{env:r}),a=this.router.match(n,i),d=new Ht(t,{path:i,matchResult:a,env:r,executionCtx:s,notFoundHandler:o(this,D)});if(a[0].length===1){let c;try{c=a[0][0][0][0](d,async()=>{d.res=await o(this,D).call(this,d)})}catch(h){return x(this,E,Re).call(this,h,d)}return c instanceof Promise?c.then(h=>h||(d.finalized?d.res:o(this,D).call(this,d))).catch(h=>x(this,E,Re).call(this,h,d)):c??o(this,D).call(this,d)}const l=Ue(a[0],this.errorHandler,o(this,D));return(async()=>{try{const c=await l(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return x(this,E,Re).call(this,c,d)}})()},he),ht=[];function Vt(e,t){const s=this.buildAllMatchers(),r=((n,i)=>{const a=s[n]||s[w],d=a[2][i];if(d)return d;const l=i.match(a[0]);if(!l)return[[],ht];const c=l.indexOf("",1);return[a[1][c],l]});return this.match=r,r(e,t)}var Ce="[^/]+",fe=".*",xe="(?:|/.*)",oe=Symbol(),Ut=new Set(".\\+*[^]$()");function qt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===xe?1:t===fe||t===xe?-1:e===Ce?1:t===Ce?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,Q,A,te,Ft=(te=class{constructor(){m(this,J);m(this,Q);m(this,A,Object.create(null))}insert(t,s,r,n,i){if(t.length===0){if(o(this,J)!==void 0)throw oe;if(i)return;p(this,J,s);return}const[a,...d]=t,l=a==="*"?d.length===0?["","",fe]:["","",Ce]:a==="/*"?["","",xe]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const h=l[1];let u=l[2]||Ce;if(h&&l[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw oe;if(c=o(this,A)[u],!c){if(Object.keys(o(this,A)).some(f=>f!==fe&&f!==xe))throw oe;if(i)return;c=o(this,A)[u]=new te,h!==""&&p(c,Q,n.varIndex++)}!i&&h!==""&&r.push([h,o(c,Q)])}else if(c=o(this,A)[a],!c){if(Object.keys(o(this,A)).some(h=>h.length>1&&h!==fe&&h!==xe))throw oe;if(i)return;c=o(this,A)[a]=new te}c.insert(d,s,r,n,i)}buildRegExpStr(){const s=Object.keys(o(this,A)).sort(qt).map(r=>{const n=o(this,A)[r];return(typeof o(n,Q)=="number"?`(${r})@${o(n,Q)}`:Ut.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof o(this,J)=="number"&&s.unshift(`#${o(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,Q=new WeakMap,A=new WeakMap,te),je,ke,Ge,zt=(Ge=class{constructor(){m(this,je,{varIndex:0});m(this,ke,new Ft)}insert(e,t,s){const r=[],n=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return n[a]=[c,l],a++,d=!0,c}),!d)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=n.length-1;a>=0;a--){const[d]=n[a];for(let l=i.length-1;l>=0;l--)if(i[l].indexOf(d)!==-1){i[l]=i[l].replace(d,n[a][1]);break}}return o(this,ke).insert(i,t,r,o(this,je),s),r}buildRegExp(){let e=o(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,a)=>i!==void 0?(s[++t]=Number(i),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,r]}},je=new WeakMap,ke=new WeakMap,Ge),Kt=[/^$/,[],Object.create(null)],Se=Object.create(null);function ut(e){return Se[e]??(Se[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Se=Object.create(null)}function Xt(e){var c;const t=new zt,s=[];if(e.length===0)return Kt;const r=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[f,y])=>h?1:f?-1:u.length-y.length),n=Object.create(null);for(let h=0,u=-1,f=r.length;h<f;h++){const[y,k,S]=r[h];y?n[k]=[S.map(([v])=>[v,Object.create(null)]),ht]:u++;let b;try{b=t.insert(k,u,y)}catch(v){throw v===oe?new lt(k):v}y||(s[u]=S.map(([v,$])=>{const B=Object.create(null);for($-=1;$>=0;$--){const[se,C]=b[$];B[se]=C}return[v,B]}))}const[i,a,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let f=0,y=s[h].length;f<y;f++){const k=(c=s[h][f])==null?void 0:c[1];if(!k)continue;const S=Object.keys(k);for(let b=0,v=S.length;b<v;b++)k[S[b]]=d[k[S[b]]]}const l=[];for(const h in a)l[h]=s[a[h]];return[i,l,n]}function re(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(ut(s).test(t))return[...e[s]]}}var F,z,Oe,pt,Ye,Gt=(Ye=class{constructor(){m(this,Oe);g(this,"name","RegExpRouter");m(this,F);m(this,z);g(this,"match",Vt);p(this,F,{[w]:Object.create(null)}),p(this,z,{[w]:Object.create(null)})}add(e,t,s){var d;const r=o(this,F),n=o(this,z);if(!r||!n)throw new Error(ct);r[e]||[r,n].forEach(l=>{l[e]=Object.create(null),Object.keys(l[w]).forEach(c=>{l[e][c]=[...l[w][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ut(t);e===w?Object.keys(r).forEach(c=>{var h;(h=r[c])[t]||(h[t]=re(r[c],t)||re(r[w],t)||[])}):(d=r[e])[t]||(d[t]=re(r[e],t)||re(r[w],t)||[]),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(h=>{l.test(h)&&r[c][h].push([s,i])})}),Object.keys(n).forEach(c=>{(e===w||e===c)&&Object.keys(n[c]).forEach(h=>l.test(h)&&n[c][h].push([s,i]))});return}const a=tt(t)||[t];for(let l=0,c=a.length;l<c;l++){const h=a[l];Object.keys(n).forEach(u=>{var f;(e===w||e===u)&&((f=n[u])[h]||(f[h]=[...re(r[u],h)||re(r[w],h)||[]]),n[u][h].push([s,i-c+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,z)).concat(Object.keys(o(this,F))).forEach(t=>{e[t]||(e[t]=x(this,Oe,pt).call(this,t))}),p(this,F,p(this,z,void 0)),Wt(),e}},F=new WeakMap,z=new WeakMap,Oe=new WeakSet,pt=function(e){const t=[];let s=e===w;return[o(this,F),o(this,z)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(i=>[i,r[e][i]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==w&&t.push(...Object.keys(r[w]).map(i=>[i,r[w][i]]))}),s?Xt(t):null},Ye),K,_,Je,Yt=(Je=class{constructor(e){g(this,"name","SmartRouter");m(this,K,[]);m(this,_,[]);p(this,K,e.routers)}add(e,t,s){if(!o(this,_))throw new Error(ct);o(this,_).push([e,t,s])}match(e,t){if(!o(this,_))throw new Error("Fatal error");const s=o(this,K),r=o(this,_),n=s.length;let i=0,a;for(;i<n;i++){const d=s[i];try{for(let l=0,c=r.length;l<c;l++)d.add(...r[l]);a=d.match(e,t)}catch(l){if(l instanceof lt)continue;throw l}this.match=d.match.bind(d),p(this,K,[d]),p(this,_,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,_)||o(this,K).length!==1)throw new Error("No active router has been determined yet.");return o(this,K)[0]}},K=new WeakMap,_=new WeakMap,Je),me=Object.create(null),W,R,Z,ue,I,T,G,pe,Jt=(pe=class{constructor(t,s,r){m(this,T);m(this,W);m(this,R);m(this,Z);m(this,ue,0);m(this,I,me);if(p(this,R,r||Object.create(null)),p(this,W,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},p(this,W,[n])}p(this,Z,[])}insert(t,s,r){p(this,ue,++Ve(this,ue)._);let n=this;const i=Rt(s),a=[];for(let d=0,l=i.length;d<l;d++){const c=i[d],h=i[d+1],u=Ct(c,h),f=Array.isArray(u)?u[0]:c;if(f in o(n,R)){n=o(n,R)[f],u&&a.push(u[1]);continue}o(n,R)[f]=new pe,u&&(o(n,Z).push(u),a.push(u[1])),n=o(n,R)[f]}return o(n,W).push({[t]:{handler:r,possibleKeys:a.filter((d,l,c)=>c.indexOf(d)===l),score:o(this,ue)}}),n}search(t,s){var l;const r=[];p(this,I,me);let i=[this];const a=Ze(s),d=[];for(let c=0,h=a.length;c<h;c++){const u=a[c],f=c===h-1,y=[];for(let k=0,S=i.length;k<S;k++){const b=i[k],v=o(b,R)[u];v&&(p(v,I,o(b,I)),f?(o(v,R)["*"]&&r.push(...x(this,T,G).call(this,o(v,R)["*"],t,o(b,I))),r.push(...x(this,T,G).call(this,v,t,o(b,I)))):y.push(v));for(let $=0,B=o(b,Z).length;$<B;$++){const se=o(b,Z)[$],C=o(b,I)===me?{}:{...o(b,I)};if(se==="*"){const V=o(b,R)["*"];V&&(r.push(...x(this,T,G).call(this,V,t,o(b,I))),p(V,I,C),y.push(V));continue}const[Ae,Me,ge]=se;if(!u&&!(ge instanceof RegExp))continue;const L=o(b,R)[Ae],ft=a.slice(c).join("/");if(ge instanceof RegExp){const V=ge.exec(ft);if(V){if(C[Me]=V[0],r.push(...x(this,T,G).call(this,L,t,o(b,I),C)),Object.keys(o(L,R)).length){p(L,I,C);const $e=((l=V[0].match(/\//))==null?void 0:l.length)??0;(d[$e]||(d[$e]=[])).push(L)}continue}}(ge===!0||ge.test(u))&&(C[Me]=u,f?(r.push(...x(this,T,G).call(this,L,t,C,o(b,I))),o(L,R)["*"]&&r.push(...x(this,T,G).call(this,o(L,R)["*"],t,C,o(b,I)))):(p(L,I,C),y.push(L)))}}i=y.concat(d.shift()??[])}return r.length>1&&r.sort((c,h)=>c.score-h.score),[r.map(({handler:c,params:h})=>[c,h])]}},W=new WeakMap,R=new WeakMap,Z=new WeakMap,ue=new WeakMap,I=new WeakMap,T=new WeakSet,G=function(t,s,r,n){const i=[];for(let a=0,d=o(t,W).length;a<d;a++){const l=o(t,W)[a],c=l[s]||l[w],h={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),r!==me||n&&n!==me))for(let u=0,f=c.possibleKeys.length;u<f;u++){const y=c.possibleKeys[u],k=h[c.score];c.params[y]=n!=null&&n[y]&&!k?n[y]:r[y]??(n==null?void 0:n[y]),h[c.score]=!0}}return i},pe),ee,Qe,Qt=(Qe=class{constructor(){g(this,"name","TrieRouter");m(this,ee);p(this,ee,new Jt)}add(e,t,s){const r=tt(t);if(r){for(let n=0,i=r.length;n<i;n++)o(this,ee).insert(e,r[n],s);return}o(this,ee).insert(e,t,s)}match(e,t){return o(this,ee).search(e,t)}},ee=new WeakMap,Qe),gt=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Gt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),n=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function l(u,f){a.res.headers.set(u,f)}const c=await r(a.req.header("origin")||"",a);if(c&&l("Access-Control-Allow-Origin",c),s.credentials&&l("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const u=await n(a.req.header("origin")||"",a);u.length&&l("Access-Control-Allow-Methods",u.join(","));let f=s.allowHeaders;if(!(f!=null&&f.length)){const y=a.req.header("Access-Control-Request-Headers");y&&(f=y.split(/\s*,\s*/))}return f!=null&&f.length&&(l("Access-Control-Allow-Headers",f.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const ze=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((n,i)=>n+Object.values(i).filter(a=>a).length,0),s=ze.reduce((n,i)=>n+i.items.length,0);let r="";return ze.forEach((n,i)=>{r+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+n.title+'</h3><table style="width:100%;border-collapse:collapse;">',n.items.forEach((a,d)=>{var h;const l=((h=e.checklist[i])==null?void 0:h[d])||!1;r+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+a+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(l?"✅":"⬜")+"</td></tr>";const c=i+"-"+d;e.photos[c]&&(r+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+c+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+c+'"></td></tr>')}),r+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+r+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'}const De=new gt;De.use("/api/*",Zt());De.get("/",e=>e.html(`
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
                        <label class="block text-sm font-medium text-gray-700 mb-3">제품 구성 (해당 항목 체크)</label>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 스마트패키지">
                                <span class="text-base">기아PV5 스마트패키지</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 워크스테이션">
                                <span class="text-base">기아PV5 워크스테이션</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="PV5 기아 3단부품선반">
                                <span class="text-base">PV5 기아 3단부품선반</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="PV5 기아 3단선반">
                                <span class="text-base">PV5 기아 3단선반</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="PV5 밀워키 스마트에디션">
                                <span class="text-base">PV5 밀워키 스마트에디션</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="PV5 밀워키 워크스테이션">
                                <span class="text-base">PV5 밀워키 워크스테이션</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="PV5 밀워키 3단부품선반">
                                <span class="text-base">PV5 밀워키 3단부품선반</span>
                            </label>
                            <label class="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                                <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="PV5 밀워키 3단선반">
                                <span class="text-base">PV5 밀워키 3단선반</span>
                            </label>
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
                
                const productConfig = selectedProducts.join(', ');
                
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                const customerEmail = document.getElementById('customerEmail').value;

                if (!installDate || !vehicleVin || !productName || !productConfig || 
                    !installerName || !customerName || !customerEmail) {
                    alert('모든 필수 항목을 입력해주세요.\\n제품 구성은 최소 1개 이상 선택해야 합니다.');
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
  `));De.post("/api/submit",async e=>{var t,s;try{const r=await e.req.json();console.log("📝 Received checklist submission"),console.log("Customer Email:",r.customerEmail),console.log("Photos count:",Object.keys(r.photos||{}).length),console.log("Photos keys:",Object.keys(r.photos||{})),console.log("Installer signature length:",((t=r.installerSignature)==null?void 0:t.length)||0),console.log("Customer signature length:",((s=r.customerSignature)==null?void 0:s.length)||0);const{RESEND_API_KEY:n,FROM_EMAIL:i,FROM_NAME:a}=e.env;if(!n||n==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(r.photos||{}).length,customerEmail:r.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const d=[];Object.entries(r.photos||{}).forEach(([v,$])=>{const B=$.match(/^data:([^;]+);base64,(.+)$/);if(B){const se=B[1],C=B[2],Ae=se.split("/")[1]||"jpg";d.push({filename:`photo_${v}.${Ae}`,content:C,content_id:`photo_${v}`,disposition:"inline"})}});const l=r.installerSignature.match(/^data:([^;]+);base64,(.+)$/);l&&d.push({filename:"installer_signature.png",content:l[2],content_id:"installer_signature",disposition:"inline"});const c=r.customerSignature.match(/^data:([^;]+);base64,(.+)$/);c&&d.push({filename:"customer_signature.png",content:c[2],content_id:"customer_signature",disposition:"inline"});const h=es(r);console.log("✅ Email HTML generated with",d.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const u=a||"케이밴 경북지사",f=i||"noreply@yourdomain.com",y="케이밴 제품 시공 점검표 - "+r.vehicleVin,k={from:u+" <"+f+">",to:[r.customerEmail],subject:y,html:h};d.length>0&&(k.attachments=d);const S=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(k)});if(!S.ok){const v=await S.json();throw new Error("Resend API error: "+JSON.stringify(v))}const b=await S.json();return console.log("✅ Email sent successfully:",b),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{customerEmail:r.customerEmail,installDate:r.installDate,vehicleVin:r.vehicleVin,photosCount:Object.keys(r.photos||{}).length,emailId:b.id}})}catch(d){return console.error("❌ Email sending error:",d),e.json({success:!1,error:"Failed to send email",details:d.message||"Unknown email error",debug:{apiKeyExists:!!n,apiKeyValid:n!=="your_resend_api_key_here",fromEmail:i,toEmail:r.customerEmail}},500)}}catch(r){return console.error("❌ Submit error:",r),e.json({success:!1,error:r.message||"Failed to submit checklist",stack:r.stack},500)}});const Ke=new gt,ts=Object.assign({"/src/index.tsx":De});let mt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),mt=!0);if(!mt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
