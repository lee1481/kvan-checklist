var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var bt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>bt(e,typeof t!="symbol"?t+"":t,s),He=(e,t,s)=>t.has(e)||Be("Cannot "+s);var a=(e,t,s)=>(He(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,n)=>(He(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),x=(e,t,s)=>(He(e,t,"access private method"),s);var Fe=(e,t,s,n)=>({set _(i){p(e,t,i,s)},get _(){return a(e,t,n)}});var Ve=(e,t,s)=>(n,i)=>{let r=-1;return o(0);async function o(d){if(d<=r)throw new Error("next() called multiple times");r=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],n.req.routeIndex=d):h=d===e.length&&i||void 0,h)try{c=await h(n,()=>o(d+1))}catch(u){if(u instanceof Error&&t)n.error=u,c=await t(u,n),l=!0;else throw u}else n.finalized===!1&&s&&(c=await s(n));return c&&(n.finalized===!1||l)&&(n.res=c),n}},yt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,r=(e instanceof rt?e.raw.headers:e.headers).get("Content-Type");return r!=null&&r.startsWith("multipart/form-data")||r!=null&&r.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:n}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((n,i)=>{t.all||i.endsWith("[]")?kt(s,i,n):s[i]=n}),t.dot&&Object.entries(s).forEach(([n,i])=>{n.includes(".")&&(Pt(s,n,i),delete s[n])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let n=e;const i=t.split(".");i.forEach((r,o)=>{o===i.length-1?n[r]=s:((!n[r]||typeof n[r]!="object"||Array.isArray(n[r])||n[r]instanceof File)&&(n[r]=Object.create(null)),n=n[r])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=Dt(e),n=Ze(s);return St(n,t)},Dt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const i=`@${n}`;return t.push([i,s]),i}),{groups:t,path:e}},St=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(n)){e[i]=e[i].replace(n,t[s][1]);break}}return e},Ie={},Rt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Ie[n]||(s[2]?Ie[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ie[n]=[e,s[1],!0]),Ie[n]}return null},_e=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ct=e=>_e(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const i=t.charCodeAt(n);if(i===37){const r=t.indexOf("?",n),o=t.slice(s,r===-1?void 0:r);return Ct(o.includes("%25")?o.replace(/%25/g,"%2525"):o)}else if(i===63)break}return t.slice(s,n)},jt=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))n+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&n===""?s.push("/"):s.push(n);const r=i.replace("?","");n+="/"+r,s.push(n)}else n+="/"+i}),s.filter((i,r,o)=>o.indexOf(i)===r)},Me=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?_e(e,nt):e):e,st=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let o=e.indexOf("?",8);if(o===-1)return;for(e.startsWith(t,o+1)||(o=e.indexOf(`&${t}`,o+1));o!==-1;){const d=e.charCodeAt(o+t.length+1);if(d===61){const c=o+t.length+2,l=e.indexOf("&",c);return Me(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";o=e.indexOf(`&${t}`,o+1)}if(n=/[%+]/.test(e),!n)return}const i={};n??(n=/[%+]/.test(e));let r=e.indexOf("?",8);for(;r!==-1;){const o=e.indexOf("&",r+1);let d=e.indexOf("=",r);d>o&&o!==-1&&(d=-1);let c=e.slice(r+1,d===-1?o===-1?void 0:o:d);if(n&&(c=Me(c)),r=o,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,o===-1?void 0:o),n&&(l=Me(l))),s?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(l)):i[c]??(i[c]=l)}return t?i[t]:i},Ot=st,$t=(e,t)=>st(e,t,!0),nt=decodeURIComponent,Ue=e=>_e(e,nt),le,R,B,it,ot,Ne,V,We,rt=(We=class{constructor(e,t="/",s=[[]]){g(this,B);m(this,"raw");g(this,le);g(this,R);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});g(this,V,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const i=Object.keys(t)[0];return i?t[i].then(r=>(i==="json"&&(r=JSON.stringify(r)),new Response(r)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,R,s),p(this,le,{})}param(e){return e?x(this,B,it).call(this,e):x(this,B,ot).call(this)}query(e){return Ot(this.url,e)}queries(e){return $t(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return a(this,V).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,V).call(this,"text")}arrayBuffer(){return a(this,V).call(this,"arrayBuffer")}blob(){return a(this,V).call(this,"blob")}formData(){return a(this,V).call(this,"formData")}addValidatedData(e,t){a(this,le)[e]=t}valid(e){return a(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return a(this,R)}get matchedRoutes(){return a(this,R)[0].map(([[,e]])=>e)}get routePath(){return a(this,R)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,R=new WeakMap,B=new WeakSet,it=function(e){const t=a(this,R)[0][this.routeIndex][1][e],s=x(this,B,Ne).call(this,t);return s&&/\%/.test(s)?Ue(s):s},ot=function(){const e={},t=Object.keys(a(this,R)[0][this.routeIndex][1]);for(const s of t){const n=x(this,B,Ne).call(this,a(this,R)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Ue(n):n)}return e},Ne=function(e){return a(this,R)[1]?a(this,R)[1][e]:e},V=new WeakMap,We),Lt={Stringify:1},at=async(e,t,s,n,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const r=e.callbacks;return r!=null&&r.length?(i?i[0]+=e:i=[e],Promise.all(r.map(d=>d({phase:t,buffer:i,context:n}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,n,i))).then(()=>i[0]))):Promise.resolve(e)},At="text/plain; charset=UTF-8",Te=(e,t)=>({"Content-Type":e,...t}),be,ye,M,ce,T,D,ve,de,he,J,we,Ee,U,oe,Ge,Ht=(Ge=class{constructor(e,t){g(this,U);g(this,be);g(this,ye);m(this,"env",{});g(this,M);m(this,"finalized",!1);m(this,"error");g(this,ce);g(this,T);g(this,D);g(this,ve);g(this,de);g(this,he);g(this,J);g(this,we);g(this,Ee);m(this,"render",(...e)=>(a(this,de)??p(this,de,t=>this.html(t)),a(this,de).call(this,...e)));m(this,"setLayout",e=>p(this,ve,e));m(this,"getLayout",()=>a(this,ve));m(this,"setRenderer",e=>{p(this,de,e)});m(this,"header",(e,t,s)=>{this.finalized&&p(this,D,new Response(a(this,D).body,a(this,D)));const n=a(this,D)?a(this,D).headers:a(this,J)??p(this,J,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});m(this,"status",e=>{p(this,ce,e)});m(this,"set",(e,t)=>{a(this,M)??p(this,M,new Map),a(this,M).set(e,t)});m(this,"get",e=>a(this,M)?a(this,M).get(e):void 0);m(this,"newResponse",(...e)=>x(this,U,oe).call(this,...e));m(this,"body",(e,t,s)=>x(this,U,oe).call(this,e,t,s));m(this,"text",(e,t,s)=>!a(this,J)&&!a(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,U,oe).call(this,e,t,Te(At,s)));m(this,"json",(e,t,s)=>x(this,U,oe).call(this,JSON.stringify(e),t,Te("application/json",s)));m(this,"html",(e,t,s)=>{const n=i=>x(this,U,oe).call(this,i,t,Te("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,Lt.Stringify,!1,{}).then(n):n(e)});m(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});m(this,"notFound",()=>(a(this,he)??p(this,he,()=>new Response),a(this,he).call(this,this)));p(this,be,e),t&&(p(this,T,t.executionCtx),this.env=t.env,p(this,he,t.notFoundHandler),p(this,Ee,t.path),p(this,we,t.matchResult))}get req(){return a(this,ye)??p(this,ye,new rt(a(this,be),a(this,Ee),a(this,we))),a(this,ye)}get event(){if(a(this,T)&&"respondWith"in a(this,T))return a(this,T);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,T))return a(this,T);throw Error("This context has no ExecutionContext")}get res(){return a(this,D)||p(this,D,new Response(null,{headers:a(this,J)??p(this,J,new Headers)}))}set res(e){if(a(this,D)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,D).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=a(this,D).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of n)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}p(this,D,e),this.finalized=!0}get var(){return a(this,M)?Object.fromEntries(a(this,M)):{}}},be=new WeakMap,ye=new WeakMap,M=new WeakMap,ce=new WeakMap,T=new WeakMap,D=new WeakMap,ve=new WeakMap,de=new WeakMap,he=new WeakMap,J=new WeakMap,we=new WeakMap,Ee=new WeakMap,U=new WeakSet,oe=function(e,t,s){const n=a(this,D)?new Headers(a(this,D).headers):a(this,J)??new Headers;if(typeof t=="object"&&"headers"in t){const r=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[o,d]of r)o.toLowerCase()==="set-cookie"?n.append(o,d):n.set(o,d)}if(s)for(const[r,o]of Object.entries(s))if(typeof o=="string")n.set(r,o);else{n.delete(r);for(const d of o)n.append(r,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,ce);return new Response(e,{status:i,headers:n})},Ge),w="ALL",Mt="all",Tt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},Nt="__COMPOSED_HANDLER",_t=e=>e.text("404 Not Found",404),qe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},j,E,dt,O,X,De,Se,ue,Bt=(ue=class{constructor(t={}){g(this,E);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");g(this,j,"/");m(this,"routes",[]);g(this,O,_t);m(this,"errorHandler",qe);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(p(this,O,t),this));m(this,"fetch",(t,...s)=>x(this,E,Se).call(this,t,s[1],s[0],t.method));m(this,"request",(t,s,n,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),n,i)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Se).call(this,t.request,t,void 0,t.request.method))})});[...Tt,Mt].forEach(r=>{this[r]=(o,...d)=>(typeof o=="string"?p(this,j,o):x(this,E,X).call(this,r,a(this,j),o),d.forEach(c=>{x(this,E,X).call(this,r,a(this,j),c)}),this)}),this.on=(r,o,...d)=>{for(const c of[o].flat()){p(this,j,c);for(const l of[r].flat())d.map(h=>{x(this,E,X).call(this,l.toUpperCase(),a(this,j),h)})}return this},this.use=(r,...o)=>(typeof r=="string"?p(this,j,r):(p(this,j,"*"),o.unshift(r)),o.forEach(d=>{x(this,E,X).call(this,w,a(this,j),d)}),this);const{strict:n,...i}=t;Object.assign(this,i),this.getPath=n??!0?t.getPath??et:jt}route(t,s){const n=this.basePath(t);return s.routes.map(i=>{var o;let r;s.errorHandler===qe?r=i.handler:(r=async(d,c)=>(await Ve([],s.errorHandler)(d,()=>i.handler(d,c))).res,r[Nt]=i.handler),x(o=n,E,X).call(o,i.method,i.path,r)}),this}basePath(t){const s=x(this,E,dt).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,n){let i,r;n&&(typeof n=="function"?r=n:(r=n.optionHandler,n.replaceRequest===!1?i=c=>c:i=n.replaceRequest));const o=r?c=>{const l=r(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};i||(i=(()=>{const c=ie(this._basePath,t),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(i(c.req.raw),...o(c));if(h)return h;await l()};return x(this,E,X).call(this,w,ie(t,"*"),d),this}},j=new WeakMap,E=new WeakSet,dt=function(){const t=new ue({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,O,a(this,O)),t.routes=this.routes,t},O=new WeakMap,X=function(t,s,n){t=t.toUpperCase(),s=ie(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,i]),this.routes.push(i)},De=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,n,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,E,Se).call(this,t,s,n,"GET")))();const r=this.getPath(t,{env:n}),o=this.router.match(i,r),d=new Ht(t,{path:r,matchResult:o,env:n,executionCtx:s,notFoundHandler:a(this,O)});if(o[0].length===1){let l;try{l=o[0][0][0][0](d,async()=>{d.res=await a(this,O).call(this,d)})}catch(h){return x(this,E,De).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:a(this,O).call(this,d))).catch(h=>x(this,E,De).call(this,h,d)):l??a(this,O).call(this,d)}const c=Ve(o[0],this.errorHandler,a(this,O));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,E,De).call(this,l,d)}})()},ue),ht=[];function Ft(e,t){const s=this.buildAllMatchers(),n=((i,r)=>{const o=s[i]||s[w],d=o[2][r];if(d)return d;const c=r.match(o[0]);if(!c)return[[],ht];const l=c.indexOf("",1);return[o[1][l],c]});return this.match=n,n(e,t)}var Ce="[^/]+",fe=".*",xe="(?:|/.*)",ae=Symbol(),Vt=new Set(".\\+*[^]$()");function Ut(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===xe?1:t===fe||t===xe?-1:e===Ce?1:t===Ce?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,Z,$,se,qt=(se=class{constructor(){g(this,Q);g(this,Z);g(this,$,Object.create(null))}insert(t,s,n,i,r){if(t.length===0){if(a(this,Q)!==void 0)throw ae;if(r)return;p(this,Q,s);return}const[o,...d]=t,c=o==="*"?d.length===0?["","",fe]:["","",Ce]:o==="/*"?["","",xe]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||Ce;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ae;if(l=a(this,$)[u],!l){if(Object.keys(a(this,$)).some(f=>f!==fe&&f!==xe))throw ae;if(r)return;l=a(this,$)[u]=new se,h!==""&&p(l,Z,i.varIndex++)}!r&&h!==""&&n.push([h,a(l,Z)])}else if(l=a(this,$)[o],!l){if(Object.keys(a(this,$)).some(h=>h.length>1&&h!==fe&&h!==xe))throw ae;if(r)return;l=a(this,$)[o]=new se}l.insert(d,s,n,i,r)}buildRegExpStr(){const s=Object.keys(a(this,$)).sort(Ut).map(n=>{const i=a(this,$)[n];return(typeof a(i,Z)=="number"?`(${n})@${a(i,Z)}`:Vt.has(n)?`\\${n}`:n)+i.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,$=new WeakMap,se),je,ke,Xe,zt=(Xe=class{constructor(){g(this,je,{varIndex:0});g(this,ke,new qt)}insert(e,t,s){const n=[],i=[];for(let o=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${o}`;return i[o]=[l,c],o++,d=!0,l}),!d)break}const r=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=i.length-1;o>=0;o--){const[d]=i[o];for(let c=r.length-1;c>=0;c--)if(r[c].indexOf(d)!==-1){r[c]=r[c].replace(d,i[o][1]);break}}return a(this,ke).insert(r,t,n,a(this,je),s),n}buildRegExp(){let e=a(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,r,o)=>r!==void 0?(s[++t]=Number(r),"$()"):(o!==void 0&&(n[Number(o)]=++t),"")),[new RegExp(`^${e}`),s,n]}},je=new WeakMap,ke=new WeakMap,Xe),Kt=[/^$/,[],Object.create(null)],Re=Object.create(null);function ut(e){return Re[e]??(Re[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Re=Object.create(null)}function Gt(e){var l;const t=new zt,s=[];if(e.length===0)return Kt;const n=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[f,y])=>h?1:f?-1:u.length-y.length),i=Object.create(null);for(let h=0,u=-1,f=n.length;h<f;h++){const[y,P,L]=n[h];y?i[P]=[L.map(([v])=>[v,Object.create(null)]),ht]:u++;let b;try{b=t.insert(P,u,y)}catch(v){throw v===ae?new ct(P):v}y||(s[u]=L.map(([v,C])=>{const A=Object.create(null);for(C-=1;C>=0;C--){const[ne,S]=b[C];A[ne]=S}return[v,A]}))}const[r,o,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let f=0,y=s[h].length;f<y;f++){const P=(l=s[h][f])==null?void 0:l[1];if(!P)continue;const L=Object.keys(P);for(let b=0,v=L.length;b<v;b++)P[L[b]]=d[P[L[b]]]}const c=[];for(const h in o)c[h]=s[o[h]];return[r,c,i]}function re(e,t){if(e){for(const s of Object.keys(e).sort((n,i)=>i.length-n.length))if(ut(s).test(t))return[...e[s]]}}var q,z,Oe,pt,Ye,Xt=(Ye=class{constructor(){g(this,Oe);m(this,"name","RegExpRouter");g(this,q);g(this,z);m(this,"match",Ft);p(this,q,{[w]:Object.create(null)}),p(this,z,{[w]:Object.create(null)})}add(e,t,s){var d;const n=a(this,q),i=a(this,z);if(!n||!i)throw new Error(lt);n[e]||[n,i].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(l=>{c[e][l]=[...c[w][l]]})}),t==="/*"&&(t="*");const r=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ut(t);e===w?Object.keys(n).forEach(l=>{var h;(h=n[l])[t]||(h[t]=re(n[l],t)||re(n[w],t)||[])}):(d=n[e])[t]||(d[t]=re(n[e],t)||re(n[w],t)||[]),Object.keys(n).forEach(l=>{(e===w||e===l)&&Object.keys(n[l]).forEach(h=>{c.test(h)&&n[l][h].push([s,r])})}),Object.keys(i).forEach(l=>{(e===w||e===l)&&Object.keys(i[l]).forEach(h=>c.test(h)&&i[l][h].push([s,r]))});return}const o=tt(t)||[t];for(let c=0,l=o.length;c<l;c++){const h=o[c];Object.keys(i).forEach(u=>{var f;(e===w||e===u)&&((f=i[u])[h]||(f[h]=[...re(n[u],h)||re(n[w],h)||[]]),i[u][h].push([s,r-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,z)).concat(Object.keys(a(this,q))).forEach(t=>{e[t]||(e[t]=x(this,Oe,pt).call(this,t))}),p(this,q,p(this,z,void 0)),Wt(),e}},q=new WeakMap,z=new WeakMap,Oe=new WeakSet,pt=function(e){const t=[];let s=e===w;return[a(this,q),a(this,z)].forEach(n=>{const i=n[e]?Object.keys(n[e]).map(r=>[r,n[e][r]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==w&&t.push(...Object.keys(n[w]).map(r=>[r,n[w][r]]))}),s?Gt(t):null},Ye),K,N,Je,Yt=(Je=class{constructor(e){m(this,"name","SmartRouter");g(this,K,[]);g(this,N,[]);p(this,K,e.routers)}add(e,t,s){if(!a(this,N))throw new Error(lt);a(this,N).push([e,t,s])}match(e,t){if(!a(this,N))throw new Error("Fatal error");const s=a(this,K),n=a(this,N),i=s.length;let r=0,o;for(;r<i;r++){const d=s[r];try{for(let c=0,l=n.length;c<l;c++)d.add(...n[c]);o=d.match(e,t)}catch(c){if(c instanceof ct)continue;throw c}this.match=d.match.bind(d),p(this,K,[d]),p(this,N,void 0);break}if(r===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(a(this,N)||a(this,K).length!==1)throw new Error("No active router has been determined yet.");return a(this,K)[0]}},K=new WeakMap,N=new WeakMap,Je),ge=Object.create(null),W,I,ee,pe,k,_,Y,me,Jt=(me=class{constructor(t,s,n){g(this,_);g(this,W);g(this,I);g(this,ee);g(this,pe,0);g(this,k,ge);if(p(this,I,n||Object.create(null)),p(this,W,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},p(this,W,[i])}p(this,ee,[])}insert(t,s,n){p(this,pe,++Fe(this,pe)._);let i=this;const r=It(s),o=[];for(let d=0,c=r.length;d<c;d++){const l=r[d],h=r[d+1],u=Rt(l,h),f=Array.isArray(u)?u[0]:l;if(f in a(i,I)){i=a(i,I)[f],u&&o.push(u[1]);continue}a(i,I)[f]=new me,u&&(a(i,ee).push(u),o.push(u[1])),i=a(i,I)[f]}return a(i,W).push({[t]:{handler:n,possibleKeys:o.filter((d,c,l)=>l.indexOf(d)===c),score:a(this,pe)}}),i}search(t,s){var c;const n=[];p(this,k,ge);let r=[this];const o=Ze(s),d=[];for(let l=0,h=o.length;l<h;l++){const u=o[l],f=l===h-1,y=[];for(let P=0,L=r.length;P<L;P++){const b=r[P],v=a(b,I)[u];v&&(p(v,k,a(b,k)),f?(a(v,I)["*"]&&n.push(...x(this,_,Y).call(this,a(v,I)["*"],t,a(b,k))),n.push(...x(this,_,Y).call(this,v,t,a(b,k)))):y.push(v));for(let C=0,A=a(b,ee).length;C<A;C++){const ne=a(b,ee)[C],S=a(b,k)===ge?{}:{...a(b,k)};if(ne==="*"){const F=a(b,I)["*"];F&&(n.push(...x(this,_,Y).call(this,F,t,a(b,k))),p(F,k,S),y.push(F));continue}const[Le,Pe,G]=ne;if(!u&&!(G instanceof RegExp))continue;const H=a(b,I)[Le],ft=o.slice(l).join("/");if(G instanceof RegExp){const F=G.exec(ft);if(F){if(S[Pe]=F[0],n.push(...x(this,_,Y).call(this,H,t,a(b,k),S)),Object.keys(a(H,I)).length){p(H,k,S);const Ae=((c=F[0].match(/\//))==null?void 0:c.length)??0;(d[Ae]||(d[Ae]=[])).push(H)}continue}}(G===!0||G.test(u))&&(S[Pe]=u,f?(n.push(...x(this,_,Y).call(this,H,t,S,a(b,k))),a(H,I)["*"]&&n.push(...x(this,_,Y).call(this,a(H,I)["*"],t,S,a(b,k)))):(p(H,k,S),y.push(H)))}}r=y.concat(d.shift()??[])}return n.length>1&&n.sort((l,h)=>l.score-h.score),[n.map(({handler:l,params:h})=>[l,h])]}},W=new WeakMap,I=new WeakMap,ee=new WeakMap,pe=new WeakMap,k=new WeakMap,_=new WeakSet,Y=function(t,s,n,i){const r=[];for(let o=0,d=a(t,W).length;o<d;o++){const c=a(t,W)[o],l=c[s]||c[w],h={};if(l!==void 0&&(l.params=Object.create(null),r.push(l),n!==ge||i&&i!==ge))for(let u=0,f=l.possibleKeys.length;u<f;u++){const y=l.possibleKeys[u],P=h[l.score];l.params[y]=i!=null&&i[y]&&!P?i[y]:n[y]??(i==null?void 0:i[y]),h[l.score]=!0}}return r},me),te,Qe,Qt=(Qe=class{constructor(){m(this,"name","TrieRouter");g(this,te);p(this,te,new Jt)}add(e,t,s){const n=tt(t);if(n){for(let i=0,r=n.length;i<r;i++)a(this,te).insert(e,n[i],s);return}a(this,te).insert(e,t,s)}match(e,t){return a(this,te).search(e,t)}},te=new WeakMap,Qe),mt=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Xt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(r=>typeof r=="string"?r==="*"?()=>r:o=>r===o?o:null:typeof r=="function"?r:o=>r.includes(o)?o:null)(s.origin),i=(r=>typeof r=="function"?r:Array.isArray(r)?()=>r:()=>[])(s.allowMethods);return async function(o,d){var h;function c(u,f){o.res.headers.set(u,f)}const l=await n(o.req.header("origin")||"",o);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),o.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await i(o.req.header("origin")||"",o);u.length&&c("Access-Control-Allow-Methods",u.join(","));let f=s.allowHeaders;if(!(f!=null&&f.length)){const y=o.req.header("Access-Control-Request-Headers");y&&(f=y.split(/\s*,\s*/))}return f!=null&&f.length&&(c("Access-Control-Allow-Headers",f.join(",")),o.res.headers.append("Vary","Access-Control-Request-Headers")),o.res.headers.delete("Content-Length"),o.res.headers.delete("Content-Type"),new Response(null,{headers:o.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&o.header("Vary","Origin",{append:!0})}};const ze=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((i,r)=>i+Object.values(r).filter(o=>o).length,0),s=ze.reduce((i,r)=>i+r.items.length,0);let n="";return ze.forEach((i,r)=>{n+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+i.title+'</h3><table style="width:100%;border-collapse:collapse;">',i.items.forEach((o,d)=>{var h;const c=((h=e.checklist[r])==null?void 0:h[d])||!1;n+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+o+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(c?"✅":"⬜")+"</td></tr>";const l=r+"-"+d;e.photos[l]&&(n+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+l+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+l+'"></td></tr>')}),n+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+n+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'}const $e=new mt;$e.use("/api/*",Zt());$e.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>케이밴 제품 시공 점검표</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"><\/script>
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


            // PDF 생성 함수
            window.generatePDF = async function() {
                try {
                    // 로딩 표시
                    document.getElementById('loadingOverlay').classList.remove('hidden');
                    
                    // PDF 생성할 컨텐츠 준비
                    const installDate = document.getElementById('installDate').value;
                    const vehicleVin = document.getElementById('vehicleVin').value;
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
                    
                    // 체크리스트 데이터 수집
                    let checklistHTML = '';
                    const sections = [
                        { title: '차바닥 (태고합판, 알루미늄체크판, 부자재)', items: ['외관, 표면', '고정볼트', '테두리고정 및 마감', '소음'] },
                        { title: '격벽타공판', items: ['외관, 표면, 도장, 로고', '고정볼트', '테두리고정 및 마감'] },
                        { title: '격벽 2단 선반', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '3단 선반 (휠 좌측/우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '부품 3단 선반 (휠 좌측/우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '워크스페이스 (휠 우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] }
                    ];
                    
                    sections.forEach((section, sectionIndex) => {
                        checklistHTML += \`<div style="margin-bottom: 20px; page-break-inside: avoid;">
                            <h3 style="background: #2c5aa0; color: white; padding: 10px; margin: 0; font-size: 16px;">\${section.title}</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                        \`;
                        
                        section.items.forEach((item, itemIndex) => {
                            const checkbox = document.querySelector(\`[data-section="\${sectionIndex}"][data-item="\${itemIndex}"]\`);
                            const isChecked = checkbox && checkbox.classList.contains('checked');
                            checklistHTML += \`
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 12px; width: 70%;">\${item}</td>
                                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center; font-size: 20px;">
                                        \${isChecked ? '✅' : '⬜'}
                                    </td>
                                </tr>
                            \`;
                        });
                        
                        checklistHTML += '</table></div>';
                    });
                    
                    // 사진 데이터 수집
                    let photosHTML = '';
                    const photoSections = Object.keys(photos);
                    if (photoSections.length > 0) {
                        photosHTML = '<div style="page-break-before: always;"><h3 style="background: #2c5aa0; color: white; padding: 10px; margin: 20px 0 10px 0;">📸 첨부 사진</h3>';
                        photoSections.forEach(sectionKey => {
                            const sectionPhotos = photos[sectionKey];
                            if (sectionPhotos && sectionPhotos.length > 0) {
                                const sectionIndex = parseInt(sectionKey.replace('section-', ''));
                                const sectionTitle = sections[sectionIndex]?.title || '섹션 ' + (sectionIndex + 1);
                                photosHTML += \`<div style="margin-bottom: 20px;">
                                    <h4 style="color: #2c5aa0; margin: 10px 0;">\${sectionTitle}</h4>
                                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                                \`;
                                sectionPhotos.forEach(photo => {
                                    photosHTML += \`<img src="\${photo.data}" style="width: 100%; height: 200px; object-fit: cover; border: 1px solid #ddd; border-radius: 4px;" />\`;
                                });
                                photosHTML += '</div></div>';
                            }
                        });
                        photosHTML += '</div>';
                    }
                    
                    // 서명 이미지
                    const installerSig = canvases.installer.toDataURL('image/png');
                    const customerSig = canvases.customer.toDataURL('image/png');
                    
                    // PDF 컨텐츠 생성
                    const pdfContent = \`
                        <div style="font-family: 'Malgun Gothic', Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
                            <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #2c5aa0; padding-bottom: 20px;">
                                <h1 style="color: #2c5aa0; margin: 0; font-size: 28px;">케이밴 제품 시공 점검표</h1>
                                <p style="color: #666; margin-top: 10px;">Installation Checklist</p>
                            </div>
                            
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                                <h2 style="color: #2c5aa0; margin-top: 0; font-size: 18px; border-bottom: 2px solid #2c5aa0; padding-bottom: 8px;">시공 정보</h2>
                                <table style="width: 100%; margin-top: 15px;">
                                    <tr>
                                        <td style="padding: 8px 0; font-weight: bold; width: 30%;">시공일자:</td>
                                        <td style="padding: 8px 0;">\${installDate}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; font-weight: bold;">차대번호:</td>
                                        <td style="padding: 8px 0;">\${vehicleVin}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; font-weight: bold;">제품명:</td>
                                        <td style="padding: 8px 0;">\${productName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; font-weight: bold;">시공자:</td>
                                        <td style="padding: 8px 0;">\${installerName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; font-weight: bold;">고객명:</td>
                                        <td style="padding: 8px 0;">\${customerName}</td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style="margin-bottom: 30px;">
                                <h2 style="color: #2c5aa0; font-size: 18px; border-bottom: 2px solid #2c5aa0; padding-bottom: 8px;">점검 항목</h2>
                                \${checklistHTML}
                            </div>
                            
                            \${photosHTML}
                            
                            <div style="margin-top: 30px; page-break-inside: avoid;">
                                <h2 style="color: #2c5aa0; font-size: 18px; border-bottom: 2px solid #2c5aa0; padding-bottom: 8px;">서명</h2>
                                <table style="width: 100%; margin-top: 20px;">
                                    <tr>
                                        <td style="width: 50%; padding: 10px; vertical-align: top;">
                                            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 4px; background: #f8f9fa;">
                                                <p style="font-weight: bold; margin: 0 0 10px 0;">시공자</p>
                                                <p style="margin: 5px 0;">이름: \${installerName}</p>
                                                <div style="margin-top: 10px; background: white; border: 1px solid #ddd; height: 120px; display: flex; align-items: center; justify-content: center;">
                                                    <img src="\${installerSig}" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
                                                </div>
                                            </div>
                                        </td>
                                        <td style="width: 50%; padding: 10px; vertical-align: top;">
                                            <div style="border: 1px solid #ddd; padding: 15px; border-radius: 4px; background: #f8f9fa;">
                                                <p style="font-weight: bold; margin: 0 0 10px 0;">고객</p>
                                                <p style="margin: 5px 0;">이름: \${customerName}</p>
                                                <div style="margin-top: 10px; background: white; border: 1px solid #ddd; height: 120px; display: flex; align-items: center; justify-content: center;">
                                                    <img src="\${customerSig}" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                                <p>케이밴 경북지사</p>
                                <p style="margin-top: 5px;">본 점검표는 시공 품질 확보 및 고객 만족도 향상을 위해 작성되었습니다.</p>
                            </div>
                        </div>
                    \`;
                    
                    // 임시 div 생성
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = pdfContent;
                    tempDiv.style.position = 'absolute';
                    tempDiv.style.left = '-9999px';
                    document.body.appendChild(tempDiv);
                    
                    // PDF 생성 옵션
                    const opt = {
                        margin: [10, 10, 10, 10],
                        filename: \`케이밴_점검표_\${vehicleVin}_\${installDate}.pdf\`,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true, logging: false },
                        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                    };
                    
                    // PDF 생성
                    await html2pdf().set(opt).from(tempDiv).save();
                    
                    // 임시 div 제거
                    document.body.removeChild(tempDiv);
                    
                    // 로딩 숨김
                    document.getElementById('loadingOverlay').classList.add('hidden');
                    
                    console.log('✅ PDF 다운로드 완료');
                } catch (error) {
                    console.error('❌ PDF 생성 오류:', error);
                    document.getElementById('loadingOverlay').classList.add('hidden');
                    alert('PDF 생성 중 오류가 발생했습니다.\\n' + error.message);
                }
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
  `));$e.post("/api/submit",async e=>{var t,s,n,i;try{const r=await e.req.json();console.log("📝 Received checklist submission"),console.log("Email List:",r.emailList),console.log("Email Count:",((t=r.emailList)==null?void 0:t.length)||0),console.log("Photos count:",Object.keys(r.photos||{}).length),console.log("Photos keys:",Object.keys(r.photos||{})),console.log("Installer signature length:",((s=r.installerSignature)==null?void 0:s.length)||0),console.log("Customer signature length:",((n=r.customerSignature)==null?void 0:n.length)||0);const{RESEND_API_KEY:o,FROM_EMAIL:d,FROM_NAME:c}=e.env;if(!o||o==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(r.photos||{}).length,customerEmail:r.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const l=[];Object.entries(r.photos||{}).forEach(([A,ne])=>{const S=ne.match(/^data:([^;]+);base64,(.+)$/);if(S){const Le=S[1],Pe=S[2],G=Le.split("/")[1]||"jpg";l.push({filename:`photo_${A}.${G}`,content:Pe,content_id:`photo_${A}`,disposition:"inline"})}});const h=r.installerSignature.match(/^data:([^;]+);base64,(.+)$/);h&&l.push({filename:"installer_signature.png",content:h[2],content_id:"installer_signature",disposition:"inline"});const u=r.customerSignature.match(/^data:([^;]+);base64,(.+)$/);u&&l.push({filename:"customer_signature.png",content:u[2],content_id:"customer_signature",disposition:"inline"});const f=es(r);console.log("✅ Email HTML generated with",l.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const y=c||"케이밴 경북지사",P=d||"noreply@yourdomain.com",L="케이밴 제품 시공 점검표 - "+r.vehicleVin,b={from:y+" <"+P+">",to:r.emailList||[r.customerEmail],subject:L,html:f};l.length>0&&(b.attachments=l);const v=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+o,"Content-Type":"application/json"},body:JSON.stringify(b)});if(!v.ok){const A=await v.json();throw new Error("Resend API error: "+JSON.stringify(A))}const C=await v.json();return console.log("✅ Email sent successfully:",C),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{emailList:r.emailList||[r.customerEmail],emailCount:((i=r.emailList)==null?void 0:i.length)||1,installDate:r.installDate,vehicleVin:r.vehicleVin,photosCount:Object.keys(r.photos||{}).length,emailId:C.id}})}catch(l){console.error("❌ Email sending error:",l);const h=l.message||"Unknown email error",u=h.includes("You can only send testing emails");return e.json({success:!1,error:u?"⚠️ Resend 테스트 모드 제한: 본인 이메일(designsoul2007@gmail.com)로만 전송 가능합니다. 다른 이메일로 전송하려면 도메인 인증이 필요합니다.":"Failed to send email",details:h,hint:u?"프로덕션 배포 시 https://resend.com/domains 에서 도메인을 인증하세요.":void 0,debug:{apiKeyExists:!!o,apiKeyValid:o!=="your_resend_api_key_here",fromEmail:d,toEmails:r.emailList||[r.customerEmail],isTestMode:u}},500)}}catch(r){return console.error("❌ Submit error:",r),e.json({success:!1,error:r.message||"Failed to submit checklist",stack:r.stack},500)}});const Ke=new mt,ts=Object.assign({"/src/index.tsx":$e});let gt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
