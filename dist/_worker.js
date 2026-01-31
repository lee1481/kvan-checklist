var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var bt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>bt(e,typeof t!="symbol"?t+"":t,s),He=(e,t,s)=>t.has(e)||Be("Cannot "+s);var a=(e,t,s)=>(He(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,r)=>(He(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),x=(e,t,s)=>(He(e,t,"access private method"),s);var Ve=(e,t,s,r)=>({set _(i){p(e,t,i,s)},get _(){return a(e,t,r)}});var Fe=(e,t,s)=>(r,i)=>{let n=-1;return o(0);async function o(d){if(d<=n)throw new Error("next() called multiple times");n=d;let l,c=!1,h;if(e[d]?(h=e[d][0][0],r.req.routeIndex=d):h=d===e.length&&i||void 0,h)try{l=await h(r,()=>o(d+1))}catch(u){if(u instanceof Error&&t)r.error=u,l=await t(u,r),c=!0;else throw u}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},yt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,n=(e instanceof nt?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:r}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((r,i)=>{t.all||i.endsWith("[]")?kt(s,i,r):s[i]=r}),t.dot&&Object.entries(s).forEach(([r,i])=>{r.includes(".")&&(Pt(s,r,i),delete s[r])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let r=e;const i=t.split(".");i.forEach((n,o)=>{o===i.length-1?r[n]=s:((!r[n]||typeof r[n]!="object"||Array.isArray(r[n])||r[n]instanceof File)&&(r[n]=Object.create(null)),r=r[n])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Rt(e),r=Ze(s);return St(r,t)},Rt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const i=`@${r}`;return t.push([i,s]),i}),{groups:t,path:e}},St=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(r)){e[i]=e[i].replace(r,t[s][1]);break}}return e},Ie={},Ct=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Ie[r]||(s[2]?Ie[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ie[r]=[e,s[1],!0]),Ie[r]}return null},Me=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},jt=e=>Me(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const i=t.charCodeAt(r);if(i===37){const n=t.indexOf("?",r),o=t.slice(s,n===-1?void 0:n);return jt(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(i===63)break}return t.slice(s,r)},Ot=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))r+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&r===""?s.push("/"):s.push(r);const n=i.replace("?","");r+="/"+n,s.push(r)}else r+="/"+i}),s.filter((i,n,o)=>o.indexOf(i)===n)},Ne=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Me(e,rt):e):e,st=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const d=e.charCodeAt(o+t.length+1);if(d===61){const l=o+t.length+2,c=e.indexOf("&",l);return Ne(e.slice(l,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";o=e.indexOf(`&${t}`,o+1)}if(r=/[%+]/.test(e),!r)return}const i={};r??(r=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const o=e.indexOf("&",n+1);let d=e.indexOf("=",n);d>o&&o!==-1&&(d=-1);let l=e.slice(n+1,d===-1?o===-1?void 0:o:d);if(r&&(l=Ne(l)),n=o,l==="")continue;let c;d===-1?c="":(c=e.slice(d+1,o===-1?void 0:o),r&&(c=Ne(c))),s?(i[l]&&Array.isArray(i[l])||(i[l]=[]),i[l].push(c)):i[l]??(i[l]=c)}return t?i[t]:i},Dt=st,At=(e,t)=>st(e,t,!0),rt=decodeURIComponent,Ue=e=>Me(e,rt),ce,C,B,it,ot,Te,F,We,nt=(We=class{constructor(e,t="/",s=[[]]){f(this,B);m(this,"raw");f(this,ce);f(this,C);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});f(this,F,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const i=Object.keys(t)[0];return i?t[i].then(n=>(i==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,C,s),p(this,ce,{})}param(e){return e?x(this,B,it).call(this,e):x(this,B,ot).call(this)}query(e){return Dt(this.url,e)}queries(e){return At(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return a(this,F).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,F).call(this,"text")}arrayBuffer(){return a(this,F).call(this,"arrayBuffer")}blob(){return a(this,F).call(this,"blob")}formData(){return a(this,F).call(this,"formData")}addValidatedData(e,t){a(this,ce)[e]=t}valid(e){return a(this,ce)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return a(this,C)}get matchedRoutes(){return a(this,C)[0].map(([[,e]])=>e)}get routePath(){return a(this,C)[0].map(([[,e]])=>e)[this.routeIndex].path}},ce=new WeakMap,C=new WeakMap,B=new WeakSet,it=function(e){const t=a(this,C)[0][this.routeIndex][1][e],s=x(this,B,Te).call(this,t);return s&&/\%/.test(s)?Ue(s):s},ot=function(){const e={},t=Object.keys(a(this,C)[0][this.routeIndex][1]);for(const s of t){const r=x(this,B,Te).call(this,a(this,C)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Ue(r):r)}return e},Te=function(e){return a(this,C)[1]?a(this,C)[1][e]:e},F=new WeakMap,We),$t={Stringify:1},at=async(e,t,s,r,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(i?i[0]+=e:i=[e],Promise.all(n.map(d=>d({phase:t,buffer:i,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(l=>at(l,t,!1,r,i))).then(()=>i[0]))):Promise.resolve(e)},Lt="text/plain; charset=UTF-8",_e=(e,t)=>({"Content-Type":e,...t}),be,ye,N,le,_,R,ve,de,he,J,we,Ee,U,oe,Xe,Ht=(Xe=class{constructor(e,t){f(this,U);f(this,be);f(this,ye);m(this,"env",{});f(this,N);m(this,"finalized",!1);m(this,"error");f(this,le);f(this,_);f(this,R);f(this,ve);f(this,de);f(this,he);f(this,J);f(this,we);f(this,Ee);m(this,"render",(...e)=>(a(this,de)??p(this,de,t=>this.html(t)),a(this,de).call(this,...e)));m(this,"setLayout",e=>p(this,ve,e));m(this,"getLayout",()=>a(this,ve));m(this,"setRenderer",e=>{p(this,de,e)});m(this,"header",(e,t,s)=>{this.finalized&&p(this,R,new Response(a(this,R).body,a(this,R)));const r=a(this,R)?a(this,R).headers:a(this,J)??p(this,J,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});m(this,"status",e=>{p(this,le,e)});m(this,"set",(e,t)=>{a(this,N)??p(this,N,new Map),a(this,N).set(e,t)});m(this,"get",e=>a(this,N)?a(this,N).get(e):void 0);m(this,"newResponse",(...e)=>x(this,U,oe).call(this,...e));m(this,"body",(e,t,s)=>x(this,U,oe).call(this,e,t,s));m(this,"text",(e,t,s)=>!a(this,J)&&!a(this,le)&&!t&&!s&&!this.finalized?new Response(e):x(this,U,oe).call(this,e,t,_e(Lt,s)));m(this,"json",(e,t,s)=>x(this,U,oe).call(this,JSON.stringify(e),t,_e("application/json",s)));m(this,"html",(e,t,s)=>{const r=i=>x(this,U,oe).call(this,i,t,_e("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,$t.Stringify,!1,{}).then(r):r(e)});m(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});m(this,"notFound",()=>(a(this,he)??p(this,he,()=>new Response),a(this,he).call(this,this)));p(this,be,e),t&&(p(this,_,t.executionCtx),this.env=t.env,p(this,he,t.notFoundHandler),p(this,Ee,t.path),p(this,we,t.matchResult))}get req(){return a(this,ye)??p(this,ye,new nt(a(this,be),a(this,Ee),a(this,we))),a(this,ye)}get event(){if(a(this,_)&&"respondWith"in a(this,_))return a(this,_);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,_))return a(this,_);throw Error("This context has no ExecutionContext")}get res(){return a(this,R)||p(this,R,new Response(null,{headers:a(this,J)??p(this,J,new Headers)}))}set res(e){if(a(this,R)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,R).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=a(this,R).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of r)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}p(this,R,e),this.finalized=!0}get var(){return a(this,N)?Object.fromEntries(a(this,N)):{}}},be=new WeakMap,ye=new WeakMap,N=new WeakMap,le=new WeakMap,_=new WeakMap,R=new WeakMap,ve=new WeakMap,de=new WeakMap,he=new WeakMap,J=new WeakMap,we=new WeakMap,Ee=new WeakMap,U=new WeakSet,oe=function(e,t,s){const r=a(this,R)?new Headers(a(this,R).headers):a(this,J)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,d]of n)o.toLowerCase()==="set-cookie"?r.append(o,d):r.set(o,d)}if(s)for(const[n,o]of Object.entries(s))if(typeof o=="string")r.set(n,o);else{r.delete(n);for(const d of o)r.append(n,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,le);return new Response(e,{status:i,headers:r})},Xe),w="ALL",Nt="all",_t=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",lt=class extends Error{},Tt="__COMPOSED_HANDLER",Mt=e=>e.text("404 Not Found",404),qe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,E,dt,D,G,Re,Se,ue,Bt=(ue=class{constructor(t={}){f(this,E);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");f(this,O,"/");m(this,"routes",[]);f(this,D,Mt);m(this,"errorHandler",qe);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(p(this,D,t),this));m(this,"fetch",(t,...s)=>x(this,E,Se).call(this,t,s[1],s[0],t.method));m(this,"request",(t,s,r,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),r,i)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Se).call(this,t.request,t,void 0,t.request.method))})});[..._t,Nt].forEach(n=>{this[n]=(o,...d)=>(typeof o=="string"?p(this,O,o):x(this,E,G).call(this,n,a(this,O),o),d.forEach(l=>{x(this,E,G).call(this,n,a(this,O),l)}),this)}),this.on=(n,o,...d)=>{for(const l of[o].flat()){p(this,O,l);for(const c of[n].flat())d.map(h=>{x(this,E,G).call(this,c.toUpperCase(),a(this,O),h)})}return this},this.use=(n,...o)=>(typeof n=="string"?p(this,O,n):(p(this,O,"*"),o.unshift(n)),o.forEach(d=>{x(this,E,G).call(this,w,a(this,O),d)}),this);const{strict:r,...i}=t;Object.assign(this,i),this.getPath=r??!0?t.getPath??et:Ot}route(t,s){const r=this.basePath(t);return s.routes.map(i=>{var o;let n;s.errorHandler===qe?n=i.handler:(n=async(d,l)=>(await Fe([],s.errorHandler)(d,()=>i.handler(d,l))).res,n[Tt]=i.handler),x(o=r,E,G).call(o,i.method,i.path,n)}),this}basePath(t){const s=x(this,E,dt).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,r){let i,n;r&&(typeof r=="function"?n=r:(n=r.optionHandler,r.replaceRequest===!1?i=l=>l:i=r.replaceRequest));const o=n?l=>{const c=n(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};i||(i=(()=>{const l=ie(this._basePath,t),c=l==="/"?0:l.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,h)}})());const d=async(l,c)=>{const h=await s(i(l.req.raw),...o(l));if(h)return h;await c()};return x(this,E,G).call(this,w,ie(t,"*"),d),this}},O=new WeakMap,E=new WeakSet,dt=function(){const t=new ue({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,D,a(this,D)),t.routes=this.routes,t},D=new WeakMap,G=function(t,s,r){t=t.toUpperCase(),s=ie(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,i]),this.routes.push(i)},Re=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,r,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,E,Se).call(this,t,s,r,"GET")))();const n=this.getPath(t,{env:r}),o=this.router.match(i,n),d=new Ht(t,{path:n,matchResult:o,env:r,executionCtx:s,notFoundHandler:a(this,D)});if(o[0].length===1){let c;try{c=o[0][0][0][0](d,async()=>{d.res=await a(this,D).call(this,d)})}catch(h){return x(this,E,Re).call(this,h,d)}return c instanceof Promise?c.then(h=>h||(d.finalized?d.res:a(this,D).call(this,d))).catch(h=>x(this,E,Re).call(this,h,d)):c??a(this,D).call(this,d)}const l=Fe(o[0],this.errorHandler,a(this,D));return(async()=>{try{const c=await l(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return x(this,E,Re).call(this,c,d)}})()},ue),ht=[];function Vt(e,t){const s=this.buildAllMatchers(),r=((i,n)=>{const o=s[i]||s[w],d=o[2][n];if(d)return d;const l=n.match(o[0]);if(!l)return[[],ht];const c=l.indexOf("",1);return[o[1][c],l]});return this.match=r,r(e,t)}var je="[^/]+",ge=".*",xe="(?:|/.*)",ae=Symbol(),Ft=new Set(".\\+*[^]$()");function Ut(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===ge||e===xe?1:t===ge||t===xe?-1:e===je?1:t===je?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,Z,A,se,qt=(se=class{constructor(){f(this,Q);f(this,Z);f(this,A,Object.create(null))}insert(t,s,r,i,n){if(t.length===0){if(a(this,Q)!==void 0)throw ae;if(n)return;p(this,Q,s);return}const[o,...d]=t,l=o==="*"?d.length===0?["","",ge]:["","",je]:o==="/*"?["","",xe]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const h=l[1];let u=l[2]||je;if(h&&l[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ae;if(c=a(this,A)[u],!c){if(Object.keys(a(this,A)).some(g=>g!==ge&&g!==xe))throw ae;if(n)return;c=a(this,A)[u]=new se,h!==""&&p(c,Z,i.varIndex++)}!n&&h!==""&&r.push([h,a(c,Z)])}else if(c=a(this,A)[o],!c){if(Object.keys(a(this,A)).some(h=>h.length>1&&h!==ge&&h!==xe))throw ae;if(n)return;c=a(this,A)[o]=new se}c.insert(d,s,r,i,n)}buildRegExpStr(){const s=Object.keys(a(this,A)).sort(Ut).map(r=>{const i=a(this,A)[r];return(typeof a(i,Z)=="number"?`(${r})@${a(i,Z)}`:Ft.has(r)?`\\${r}`:r)+i.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,A=new WeakMap,se),Oe,ke,Ge,zt=(Ge=class{constructor(){f(this,Oe,{varIndex:0});f(this,ke,new qt)}insert(e,t,s){const r=[],i=[];for(let o=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${o}`;return i[o]=[c,l],o++,d=!0,c}),!d)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=i.length-1;o>=0;o--){const[d]=i[o];for(let l=n.length-1;l>=0;l--)if(n[l].indexOf(d)!==-1){n[l]=n[l].replace(d,i[o][1]);break}}return a(this,ke).insert(n,t,r,a(this,Oe),s),r}buildRegExp(){let e=a(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,n,o)=>n!==void 0?(s[++t]=Number(n),"$()"):(o!==void 0&&(r[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Oe=new WeakMap,ke=new WeakMap,Ge),Kt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ut(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Ce=Object.create(null)}function Xt(e){var c;const t=new zt,s=[];if(e.length===0)return Kt;const r=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[g,y])=>h?1:g?-1:u.length-y.length),i=Object.create(null);for(let h=0,u=-1,g=r.length;h<g;h++){const[y,P,$]=r[h];y?i[P]=[$.map(([v])=>[v,Object.create(null)]),ht]:u++;let b;try{b=t.insert(P,u,y)}catch(v){throw v===ae?new lt(P):v}y||(s[u]=$.map(([v,j])=>{const L=Object.create(null);for(j-=1;j>=0;j--){const[re,S]=b[j];L[re]=S}return[v,L]}))}const[n,o,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let g=0,y=s[h].length;g<y;g++){const P=(c=s[h][g])==null?void 0:c[1];if(!P)continue;const $=Object.keys(P);for(let b=0,v=$.length;b<v;b++)P[$[b]]=d[P[$[b]]]}const l=[];for(const h in o)l[h]=s[o[h]];return[n,l,i]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((r,i)=>i.length-r.length))if(ut(s).test(t))return[...e[s]]}}var q,z,De,pt,Ye,Gt=(Ye=class{constructor(){f(this,De);m(this,"name","RegExpRouter");f(this,q);f(this,z);m(this,"match",Vt);p(this,q,{[w]:Object.create(null)}),p(this,z,{[w]:Object.create(null)})}add(e,t,s){var d;const r=a(this,q),i=a(this,z);if(!r||!i)throw new Error(ct);r[e]||[r,i].forEach(l=>{l[e]=Object.create(null),Object.keys(l[w]).forEach(c=>{l[e][c]=[...l[w][c]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ut(t);e===w?Object.keys(r).forEach(c=>{var h;(h=r[c])[t]||(h[t]=ne(r[c],t)||ne(r[w],t)||[])}):(d=r[e])[t]||(d[t]=ne(r[e],t)||ne(r[w],t)||[]),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(h=>{l.test(h)&&r[c][h].push([s,n])})}),Object.keys(i).forEach(c=>{(e===w||e===c)&&Object.keys(i[c]).forEach(h=>l.test(h)&&i[c][h].push([s,n]))});return}const o=tt(t)||[t];for(let l=0,c=o.length;l<c;l++){const h=o[l];Object.keys(i).forEach(u=>{var g;(e===w||e===u)&&((g=i[u])[h]||(g[h]=[...ne(r[u],h)||ne(r[w],h)||[]]),i[u][h].push([s,n-c+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,z)).concat(Object.keys(a(this,q))).forEach(t=>{e[t]||(e[t]=x(this,De,pt).call(this,t))}),p(this,q,p(this,z,void 0)),Wt(),e}},q=new WeakMap,z=new WeakMap,De=new WeakSet,pt=function(e){const t=[];let s=e===w;return[a(this,q),a(this,z)].forEach(r=>{const i=r[e]?Object.keys(r[e]).map(n=>[n,r[e][n]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==w&&t.push(...Object.keys(r[w]).map(n=>[n,r[w][n]]))}),s?Xt(t):null},Ye),K,T,Je,Yt=(Je=class{constructor(e){m(this,"name","SmartRouter");f(this,K,[]);f(this,T,[]);p(this,K,e.routers)}add(e,t,s){if(!a(this,T))throw new Error(ct);a(this,T).push([e,t,s])}match(e,t){if(!a(this,T))throw new Error("Fatal error");const s=a(this,K),r=a(this,T),i=s.length;let n=0,o;for(;n<i;n++){const d=s[n];try{for(let l=0,c=r.length;l<c;l++)d.add(...r[l]);o=d.match(e,t)}catch(l){if(l instanceof lt)continue;throw l}this.match=d.match.bind(d),p(this,K,[d]),p(this,T,void 0);break}if(n===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(a(this,T)||a(this,K).length!==1)throw new Error("No active router has been determined yet.");return a(this,K)[0]}},K=new WeakMap,T=new WeakMap,Je),fe=Object.create(null),W,I,ee,pe,k,M,Y,me,Jt=(me=class{constructor(t,s,r){f(this,M);f(this,W);f(this,I);f(this,ee);f(this,pe,0);f(this,k,fe);if(p(this,I,r||Object.create(null)),p(this,W,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},p(this,W,[i])}p(this,ee,[])}insert(t,s,r){p(this,pe,++Ve(this,pe)._);let i=this;const n=It(s),o=[];for(let d=0,l=n.length;d<l;d++){const c=n[d],h=n[d+1],u=Ct(c,h),g=Array.isArray(u)?u[0]:c;if(g in a(i,I)){i=a(i,I)[g],u&&o.push(u[1]);continue}a(i,I)[g]=new me,u&&(a(i,ee).push(u),o.push(u[1])),i=a(i,I)[g]}return a(i,W).push({[t]:{handler:r,possibleKeys:o.filter((d,l,c)=>c.indexOf(d)===l),score:a(this,pe)}}),i}search(t,s){var l;const r=[];p(this,k,fe);let n=[this];const o=Ze(s),d=[];for(let c=0,h=o.length;c<h;c++){const u=o[c],g=c===h-1,y=[];for(let P=0,$=n.length;P<$;P++){const b=n[P],v=a(b,I)[u];v&&(p(v,k,a(b,k)),g?(a(v,I)["*"]&&r.push(...x(this,M,Y).call(this,a(v,I)["*"],t,a(b,k))),r.push(...x(this,M,Y).call(this,v,t,a(b,k)))):y.push(v));for(let j=0,L=a(b,ee).length;j<L;j++){const re=a(b,ee)[j],S=a(b,k)===fe?{}:{...a(b,k)};if(re==="*"){const V=a(b,I)["*"];V&&(r.push(...x(this,M,Y).call(this,V,t,a(b,k))),p(V,k,S),y.push(V));continue}const[$e,Pe,X]=re;if(!u&&!(X instanceof RegExp))continue;const H=a(b,I)[$e],gt=o.slice(c).join("/");if(X instanceof RegExp){const V=X.exec(gt);if(V){if(S[Pe]=V[0],r.push(...x(this,M,Y).call(this,H,t,a(b,k),S)),Object.keys(a(H,I)).length){p(H,k,S);const Le=((l=V[0].match(/\//))==null?void 0:l.length)??0;(d[Le]||(d[Le]=[])).push(H)}continue}}(X===!0||X.test(u))&&(S[Pe]=u,g?(r.push(...x(this,M,Y).call(this,H,t,S,a(b,k))),a(H,I)["*"]&&r.push(...x(this,M,Y).call(this,a(H,I)["*"],t,S,a(b,k)))):(p(H,k,S),y.push(H)))}}n=y.concat(d.shift()??[])}return r.length>1&&r.sort((c,h)=>c.score-h.score),[r.map(({handler:c,params:h})=>[c,h])]}},W=new WeakMap,I=new WeakMap,ee=new WeakMap,pe=new WeakMap,k=new WeakMap,M=new WeakSet,Y=function(t,s,r,i){const n=[];for(let o=0,d=a(t,W).length;o<d;o++){const l=a(t,W)[o],c=l[s]||l[w],h={};if(c!==void 0&&(c.params=Object.create(null),n.push(c),r!==fe||i&&i!==fe))for(let u=0,g=c.possibleKeys.length;u<g;u++){const y=c.possibleKeys[u],P=h[c.score];c.params[y]=i!=null&&i[y]&&!P?i[y]:r[y]??(i==null?void 0:i[y]),h[c.score]=!0}}return n},me),te,Qe,Qt=(Qe=class{constructor(){m(this,"name","TrieRouter");f(this,te);p(this,te,new Jt)}add(e,t,s){const r=tt(t);if(r){for(let i=0,n=r.length;i<n;i++)a(this,te).insert(e,r[i],s);return}a(this,te).insert(e,t,s)}match(e,t){return a(this,te).search(e,t)}},te=new WeakMap,Qe),mt=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Gt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(n=>typeof n=="string"?n==="*"?()=>n:o=>n===o?o:null:typeof n=="function"?n:o=>n.includes(o)?o:null)(s.origin),i=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(s.allowMethods);return async function(o,d){var h;function l(u,g){o.res.headers.set(u,g)}const c=await r(o.req.header("origin")||"",o);if(c&&l("Access-Control-Allow-Origin",c),s.credentials&&l("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const u=await i(o.req.header("origin")||"",o);u.length&&l("Access-Control-Allow-Methods",u.join(","));let g=s.allowHeaders;if(!(g!=null&&g.length)){const y=o.req.header("Access-Control-Request-Headers");y&&(g=y.split(/\s*,\s*/))}return g!=null&&g.length&&(l("Access-Control-Allow-Headers",g.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};const ze=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((i,n)=>i+Object.values(n).filter(o=>o).length,0),s=ze.reduce((i,n)=>i+n.items.length,0);let r="";return ze.forEach((i,n)=>{r+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+i.title+'</h3><table style="width:100%;border-collapse:collapse;">',i.items.forEach((o,d)=>{var h;const l=((h=e.checklist[n])==null?void 0:h[d])||!1;r+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+o+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(l?"✅":"⬜")+"</td></tr>";const c=n+"-"+d;e.photos[c]&&(r+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+c+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+c+'"></td></tr>')}),r+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+r+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'}const Ae=new mt;Ae.use("/api/*",Zt());Ae.get("/",e=>e.html(`
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
                        <label class="block text-sm font-medium text-gray-700 mb-3">제품 시공명 (해당 항목 체크)</label>
                        
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
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소 1 (필수)</label>
                        <input type="email" id="customerEmail1" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com" required>
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소 2 (선택)</label>
                        <input type="email" id="customerEmail2" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com">
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소 3 (선택)</label>
                        <input type="email" id="customerEmail3" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com">
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
                    입력하신 이메일로 점검표가 자동 발송됩니다. (최대 3개 이메일 동시 발송 가능)
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
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-bold text-blue-900">\${section.title}</h2>
                        <div>
                            <input type="file" 
                                id="section-photo-\${sectionIndex}" 
                                accept="image/*" 
                                multiple
                                class="hidden"
                                onchange="handleSectionPhotoUpload(this, \${sectionIndex})">
                            <label for="section-photo-\${sectionIndex}" 
                                class="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition">
                                <i class="fas fa-camera"></i>
                                <span class="text-sm font-medium">사진</span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Photo previews for this section -->
                    <div id="section-photos-\${sectionIndex}" class="mb-4 flex flex-wrap gap-2"></div>
                    
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

            // Photo handling functions - Section-based multiple photos
            window.handleSectionPhotoUpload = function(input, sectionIndex) {
                const files = input.files;
                if (!files || files.length === 0) return;

                // Initialize section photos array if not exists
                if (!photos[\`section-\${sectionIndex}\`]) {
                    photos[\`section-\${sectionIndex}\`] = [];
                }

                Array.from(files).forEach(file => {
                    // Check file size (max 5MB)
                    if (file.size > 5 * 1024 * 1024) {
                        alert(\`사진 크기는 5MB 이하여야 합니다: \${file.name}\`);
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
                            const photoId = \`section-\${sectionIndex}-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
                            photos[\`section-\${sectionIndex}\`].push({
                                id: photoId,
                                data: compressedDataUrl
                            });
                            
                            // Update UI
                            renderSectionPhotos(sectionIndex);
                        };
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                });
            };

            window.renderSectionPhotos = function(sectionIndex) {
                const container = document.getElementById(\`section-photos-\${sectionIndex}\`);
                const sectionPhotos = photos[\`section-\${sectionIndex}\`] || [];
                
                if (sectionPhotos.length === 0) {
                    container.innerHTML = '';
                    return;
                }
                
                container.innerHTML = sectionPhotos.map(photo => \`
                    <div class="relative inline-block">
                        <img src="\${photo.data}" 
                            class="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
                            onclick="showImageModal(this.src)">
                        <button onclick="deleteSectionPhoto(\${sectionIndex}, '\${photo.id}')"
                            class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition text-xs">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                \`).join('');
            };

            window.deleteSectionPhoto = function(sectionIndex, photoId) {
                if (!confirm('이 사진을 삭제하시겠습니까?')) return;
                
                const sectionPhotos = photos[\`section-\${sectionIndex}\`] || [];
                photos[\`section-\${sectionIndex}\`] = sectionPhotos.filter(p => p.id !== photoId);
                
                // Clear file input
                const input = document.getElementById(\`section-photo-\${sectionIndex}\`);
                input.value = '';
                
                // Update UI
                renderSectionPhotos(sectionIndex);
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
                const customerEmail2 = document.getElementById('customerEmail2').value.trim();
                const customerEmail3 = document.getElementById('customerEmail3').value.trim();
                
                // Collect all valid emails
                const emailList = [customerEmail1, customerEmail2, customerEmail3].filter(e => e);
                const customerEmail = customerEmail1; // Primary email for backward compatibility

                if (!installDate || !vehicleVin || !productName || 
                    !installerName || !customerName || !customerEmail1) {
                    alert('모든 필수 항목을 입력해주세요.\\n제품 시공명은 최소 1개 이상 선택해야 합니다.');
                    return;
                }

                // Validate all email addresses
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

                // Debug log - Convert section photos to flat structure
                const flatPhotos = {};
                let totalPhotoCount = 0;
                Object.keys(photos).forEach(sectionKey => {
                    if (Array.isArray(photos[sectionKey])) {
                        photos[sectionKey].forEach((photo, idx) => {
                            flatPhotos[\`\${sectionKey}-\${idx}\`] = photo.data;
                            totalPhotoCount++;
                        });
                    }
                });
                
                console.log('📤 제출 데이터:', {
                    사진개수: totalPhotoCount,
                    섹션별사진: Object.keys(photos).map(k => \`\${k}: \${photos[k]?.length || 0}장\`),
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
                        alert(\`✅ 점검표가 성공적으로 제출되었습니다!\\n\${emailList.length}개 이메일로 발송되었습니다.\`);
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
  `));Ae.post("/api/submit",async e=>{var t,s,r,i;try{const n=await e.req.json();console.log("📝 Received checklist submission"),console.log("Email List:",n.emailList),console.log("Email Count:",((t=n.emailList)==null?void 0:t.length)||0),console.log("Photos count:",Object.keys(n.photos||{}).length),console.log("Photos keys:",Object.keys(n.photos||{})),console.log("Installer signature length:",((s=n.installerSignature)==null?void 0:s.length)||0),console.log("Customer signature length:",((r=n.customerSignature)==null?void 0:r.length)||0);const{RESEND_API_KEY:o,FROM_EMAIL:d,FROM_NAME:l}=e.env;if(!o||o==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(n.photos||{}).length,customerEmail:n.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const c=[];Object.entries(n.photos||{}).forEach(([L,re])=>{const S=re.match(/^data:([^;]+);base64,(.+)$/);if(S){const $e=S[1],Pe=S[2],X=$e.split("/")[1]||"jpg";c.push({filename:`photo_${L}.${X}`,content:Pe,content_id:`photo_${L}`,disposition:"inline"})}});const h=n.installerSignature.match(/^data:([^;]+);base64,(.+)$/);h&&c.push({filename:"installer_signature.png",content:h[2],content_id:"installer_signature",disposition:"inline"});const u=n.customerSignature.match(/^data:([^;]+);base64,(.+)$/);u&&c.push({filename:"customer_signature.png",content:u[2],content_id:"customer_signature",disposition:"inline"});const g=es(n);console.log("✅ Email HTML generated with",c.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const y=l||"케이밴 경북지사",P=d||"noreply@yourdomain.com",$="케이밴 제품 시공 점검표 - "+n.vehicleVin,b={from:y+" <"+P+">",to:n.emailList||[n.customerEmail],subject:$,html:g};c.length>0&&(b.attachments=c);const v=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+o,"Content-Type":"application/json"},body:JSON.stringify(b)});if(!v.ok){const L=await v.json();throw new Error("Resend API error: "+JSON.stringify(L))}const j=await v.json();return console.log("✅ Email sent successfully:",j),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{emailList:n.emailList||[n.customerEmail],emailCount:((i=n.emailList)==null?void 0:i.length)||1,installDate:n.installDate,vehicleVin:n.vehicleVin,photosCount:Object.keys(n.photos||{}).length,emailId:j.id}})}catch(c){return console.error("❌ Email sending error:",c),e.json({success:!1,error:"Failed to send email",details:c.message||"Unknown email error",debug:{apiKeyExists:!!o,apiKeyValid:o!=="your_resend_api_key_here",fromEmail:d,toEmails:n.emailList||[n.customerEmail]}},500)}}catch(n){return console.error("❌ Submit error:",n),e.json({success:!1,error:n.message||"Failed to submit checklist",stack:n.stack},500)}});const Ke=new mt,ts=Object.assign({"/src/index.tsx":Ae});let ft=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),ft=!0);if(!ft)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
