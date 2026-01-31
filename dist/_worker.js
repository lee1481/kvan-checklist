var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var bt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>bt(e,typeof t!="symbol"?t+"":t,s),Oe=(e,t,s)=>t.has(e)||Be("Cannot "+s);var a=(e,t,s)=>(Oe(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,o)=>(Oe(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Oe(e,t,"access private method"),s);var _e=(e,t,s,o)=>({set _(i){p(e,t,i,s)},get _(){return a(e,t,o)}});var Ve=(e,t,s)=>(o,i)=>{let n=-1;return r(0);async function r(d){if(d<=n)throw new Error("next() called multiple times");n=d;let c,l=!1,h;if(e[d]?(h=e[d][0][0],o.req.routeIndex=d):h=d===e.length&&i||void 0,h)try{c=await h(o,()=>r(d+1))}catch(u){if(u instanceof Error&&t)o.error=u,c=await t(u,o),l=!0;else throw u}else o.finalized===!1&&s&&(c=await s(o));return c&&(o.finalized===!1||l)&&(o.res=c),o}},yt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:o=!1}=t,n=(e instanceof nt?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:o}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((o,i)=>{t.all||i.endsWith("[]")?kt(s,i,o):s[i]=o}),t.dot&&Object.entries(s).forEach(([o,i])=>{o.includes(".")&&(Pt(s,o,i),delete s[o])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let o=e;const i=t.split(".");i.forEach((n,r)=>{r===i.length-1?o[n]=s:((!o[n]||typeof o[n]!="object"||Array.isArray(o[n])||o[n]instanceof File)&&(o[n]=Object.create(null)),o=o[n])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Dt=e=>{const{groups:t,path:s}=Lt(e),o=Ze(s);return It(o,t)},Lt=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,o)=>{const i=`@${o}`;return t.push([i,s]),i}),{groups:t,path:e}},It=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[o]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(o)){e[i]=e[i].replace(o,t[s][1]);break}}return e},De={},Ht=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const o=`${e}#${t}`;return De[o]||(s[2]?De[o]=t&&t[0]!==":"&&t[0]!=="*"?[o,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:De[o]=[e,s[1],!0]),De[o]}return null},Fe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Mt=e=>Fe(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let o=s;for(;o<t.length;o++){const i=t.charCodeAt(o);if(i===37){const n=t.indexOf("?",o),r=t.slice(s,n===-1?void 0:n);return Mt(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(i===63)break}return t.slice(s,o)},St=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ie=(e,t,...s)=>(s.length&&(t=ie(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let o="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))o+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&o===""?s.push("/"):s.push(o);const n=i.replace("?","");o+="/"+n,s.push(o)}else o+="/"+i}),s.filter((i,n,r)=>r.indexOf(i)===n)},Ae=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Fe(e,ot):e):e,st=(e,t,s)=>{let o;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf("?",8);if(r===-1)return;for(e.startsWith(t,r+1)||(r=e.indexOf(`&${t}`,r+1));r!==-1;){const d=e.charCodeAt(r+t.length+1);if(d===61){const c=r+t.length+2,l=e.indexOf("&",c);return Ae(e.slice(c,l===-1?void 0:l))}else if(d==38||isNaN(d))return"";r=e.indexOf(`&${t}`,r+1)}if(o=/[%+]/.test(e),!o)return}const i={};o??(o=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const r=e.indexOf("&",n+1);let d=e.indexOf("=",n);d>r&&r!==-1&&(d=-1);let c=e.slice(n+1,d===-1?r===-1?void 0:r:d);if(o&&(c=Ae(c)),n=r,c==="")continue;let l;d===-1?l="":(l=e.slice(d+1,r===-1?void 0:r),o&&(l=Ae(l))),s?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(l)):i[c]??(i[c]=l)}return t?i[t]:i},Tt=st,Rt=(e,t)=>st(e,t,!0),ot=decodeURIComponent,ze=e=>Fe(e,ot),le,H,B,it,rt,$e,V,We,nt=(We=class{constructor(e,t="/",s=[[]]){g(this,B);m(this,"raw");g(this,le);g(this,H);m(this,"routeIndex",0);m(this,"path");m(this,"bodyCache",{});g(this,V,e=>{const{bodyCache:t,raw:s}=this,o=t[e];if(o)return o;const i=Object.keys(t)[0];return i?t[i].then(n=>(i==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,H,s),p(this,le,{})}param(e){return e?x(this,B,it).call(this,e):x(this,B,rt).call(this)}query(e){return Tt(this.url,e)}queries(e){return Rt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,o)=>{t[o]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return a(this,V).call(this,"text").then(e=>JSON.parse(e))}text(){return a(this,V).call(this,"text")}arrayBuffer(){return a(this,V).call(this,"arrayBuffer")}blob(){return a(this,V).call(this,"blob")}formData(){return a(this,V).call(this,"formData")}addValidatedData(e,t){a(this,le)[e]=t}valid(e){return a(this,le)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return a(this,H)}get matchedRoutes(){return a(this,H)[0].map(([[,e]])=>e)}get routePath(){return a(this,H)[0].map(([[,e]])=>e)[this.routeIndex].path}},le=new WeakMap,H=new WeakMap,B=new WeakSet,it=function(e){const t=a(this,H)[0][this.routeIndex][1][e],s=x(this,B,$e).call(this,t);return s&&/\%/.test(s)?ze(s):s},rt=function(){const e={},t=Object.keys(a(this,H)[0][this.routeIndex][1]);for(const s of t){const o=x(this,B,$e).call(this,a(this,H)[0][this.routeIndex][1][s]);o!==void 0&&(e[s]=/\%/.test(o)?ze(o):o)}return e},$e=function(e){return a(this,H)[1]?a(this,H)[1][e]:e},V=new WeakMap,We),Ct={Stringify:1},at=async(e,t,s,o,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(i?i[0]+=e:i=[e],Promise.all(n.map(d=>d({phase:t,buffer:i,context:o}))).then(d=>Promise.all(d.filter(Boolean).map(c=>at(c,t,!1,o,i))).then(()=>i[0]))):Promise.resolve(e)},jt="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),be,ye,A,ce,N,L,ve,de,he,J,we,Ee,z,re,Xe,Ot=(Xe=class{constructor(e,t){g(this,z);g(this,be);g(this,ye);m(this,"env",{});g(this,A);m(this,"finalized",!1);m(this,"error");g(this,ce);g(this,N);g(this,L);g(this,ve);g(this,de);g(this,he);g(this,J);g(this,we);g(this,Ee);m(this,"render",(...e)=>(a(this,de)??p(this,de,t=>this.html(t)),a(this,de).call(this,...e)));m(this,"setLayout",e=>p(this,ve,e));m(this,"getLayout",()=>a(this,ve));m(this,"setRenderer",e=>{p(this,de,e)});m(this,"header",(e,t,s)=>{this.finalized&&p(this,L,new Response(a(this,L).body,a(this,L)));const o=a(this,L)?a(this,L).headers:a(this,J)??p(this,J,new Headers);t===void 0?o.delete(e):s!=null&&s.append?o.append(e,t):o.set(e,t)});m(this,"status",e=>{p(this,ce,e)});m(this,"set",(e,t)=>{a(this,A)??p(this,A,new Map),a(this,A).set(e,t)});m(this,"get",e=>a(this,A)?a(this,A).get(e):void 0);m(this,"newResponse",(...e)=>x(this,z,re).call(this,...e));m(this,"body",(e,t,s)=>x(this,z,re).call(this,e,t,s));m(this,"text",(e,t,s)=>!a(this,J)&&!a(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,z,re).call(this,e,t,Ne(jt,s)));m(this,"json",(e,t,s)=>x(this,z,re).call(this,JSON.stringify(e),t,Ne("application/json",s)));m(this,"html",(e,t,s)=>{const o=i=>x(this,z,re).call(this,i,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,Ct.Stringify,!1,{}).then(o):o(e)});m(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});m(this,"notFound",()=>(a(this,he)??p(this,he,()=>new Response),a(this,he).call(this,this)));p(this,be,e),t&&(p(this,N,t.executionCtx),this.env=t.env,p(this,he,t.notFoundHandler),p(this,Ee,t.path),p(this,we,t.matchResult))}get req(){return a(this,ye)??p(this,ye,new nt(a(this,be),a(this,Ee),a(this,we))),a(this,ye)}get event(){if(a(this,N)&&"respondWith"in a(this,N))return a(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(a(this,N))return a(this,N);throw Error("This context has no ExecutionContext")}get res(){return a(this,L)||p(this,L,new Response(null,{headers:a(this,J)??p(this,J,new Headers)}))}set res(e){if(a(this,L)&&e){e=new Response(e.body,e);for(const[t,s]of a(this,L).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const o=a(this,L).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of o)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}p(this,L,e),this.finalized=!0}get var(){return a(this,A)?Object.fromEntries(a(this,A)):{}}},be=new WeakMap,ye=new WeakMap,A=new WeakMap,ce=new WeakMap,N=new WeakMap,L=new WeakMap,ve=new WeakMap,de=new WeakMap,he=new WeakMap,J=new WeakMap,we=new WeakMap,Ee=new WeakMap,z=new WeakSet,re=function(e,t,s){const o=a(this,L)?new Headers(a(this,L).headers):a(this,J)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,d]of n)r.toLowerCase()==="set-cookie"?o.append(r,d):o.set(r,d)}if(s)for(const[n,r]of Object.entries(s))if(typeof r=="string")o.set(n,r);else{o.delete(n);for(const d of r)o.append(n,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??a(this,ce);return new Response(e,{status:i,headers:o})},Xe),w="ALL",At="all",Nt=["get","post","put","delete","options","patch"],lt="Can not add a route since the matcher is already built.",ct=class extends Error{},$t="__COMPOSED_HANDLER",Ft=e=>e.text("404 Not Found",404),Ue=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},S,E,dt,T,G,Le,Ie,ue,Bt=(ue=class{constructor(t={}){g(this,E);m(this,"get");m(this,"post");m(this,"put");m(this,"delete");m(this,"options");m(this,"patch");m(this,"all");m(this,"on");m(this,"use");m(this,"router");m(this,"getPath");m(this,"_basePath","/");g(this,S,"/");m(this,"routes",[]);g(this,T,Ft);m(this,"errorHandler",Ue);m(this,"onError",t=>(this.errorHandler=t,this));m(this,"notFound",t=>(p(this,T,t),this));m(this,"fetch",(t,...s)=>x(this,E,Ie).call(this,t,s[1],s[0],t.method));m(this,"request",(t,s,o,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,o,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ie("/",t)}`,s),o,i)));m(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Ie).call(this,t.request,t,void 0,t.request.method))})});[...Nt,At].forEach(n=>{this[n]=(r,...d)=>(typeof r=="string"?p(this,S,r):x(this,E,G).call(this,n,a(this,S),r),d.forEach(c=>{x(this,E,G).call(this,n,a(this,S),c)}),this)}),this.on=(n,r,...d)=>{for(const c of[r].flat()){p(this,S,c);for(const l of[n].flat())d.map(h=>{x(this,E,G).call(this,l.toUpperCase(),a(this,S),h)})}return this},this.use=(n,...r)=>(typeof n=="string"?p(this,S,n):(p(this,S,"*"),r.unshift(n)),r.forEach(d=>{x(this,E,G).call(this,w,a(this,S),d)}),this);const{strict:o,...i}=t;Object.assign(this,i),this.getPath=o??!0?t.getPath??et:St}route(t,s){const o=this.basePath(t);return s.routes.map(i=>{var r;let n;s.errorHandler===Ue?n=i.handler:(n=async(d,c)=>(await Ve([],s.errorHandler)(d,()=>i.handler(d,c))).res,n[$t]=i.handler),x(r=o,E,G).call(r,i.method,i.path,n)}),this}basePath(t){const s=x(this,E,dt).call(this);return s._basePath=ie(this._basePath,t),s}mount(t,s,o){let i,n;o&&(typeof o=="function"?n=o:(n=o.optionHandler,o.replaceRequest===!1?i=c=>c:i=o.replaceRequest));const r=n?c=>{const l=n(c);return Array.isArray(l)?l:[l]}:c=>{let l;try{l=c.executionCtx}catch{}return[c.env,l]};i||(i=(()=>{const c=ie(this._basePath,t),l=c==="/"?0:c.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(l)||"/",new Request(u,h)}})());const d=async(c,l)=>{const h=await s(i(c.req.raw),...r(c));if(h)return h;await l()};return x(this,E,G).call(this,w,ie(t,"*"),d),this}},S=new WeakMap,E=new WeakSet,dt=function(){const t=new ue({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,T,a(this,T)),t.routes=this.routes,t},T=new WeakMap,G=function(t,s,o){t=t.toUpperCase(),s=ie(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:o};this.router.add(t,s,[o,i]),this.routes.push(i)},Le=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Ie=function(t,s,o,i){if(i==="HEAD")return(async()=>new Response(null,await x(this,E,Ie).call(this,t,s,o,"GET")))();const n=this.getPath(t,{env:o}),r=this.router.match(i,n),d=new Ot(t,{path:n,matchResult:r,env:o,executionCtx:s,notFoundHandler:a(this,T)});if(r[0].length===1){let l;try{l=r[0][0][0][0](d,async()=>{d.res=await a(this,T).call(this,d)})}catch(h){return x(this,E,Le).call(this,h,d)}return l instanceof Promise?l.then(h=>h||(d.finalized?d.res:a(this,T).call(this,d))).catch(h=>x(this,E,Le).call(this,h,d)):l??a(this,T).call(this,d)}const c=Ve(r[0],this.errorHandler,a(this,T));return(async()=>{try{const l=await c(d);if(!l.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return l.res}catch(l){return x(this,E,Le).call(this,l,d)}})()},ue),ht=[];function _t(e,t){const s=this.buildAllMatchers(),o=((i,n)=>{const r=s[i]||s[w],d=r[2][n];if(d)return d;const c=n.match(r[0]);if(!c)return[[],ht];const l=c.indexOf("",1);return[r[1][l],c]});return this.match=o,o(e,t)}var Me="[^/]+",fe=".*",xe="(?:|/.*)",ae=Symbol(),Vt=new Set(".\\+*[^]$()");function zt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===fe||e===xe?1:t===fe||t===xe?-1:e===Me?1:t===Me?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Q,Z,R,se,Ut=(se=class{constructor(){g(this,Q);g(this,Z);g(this,R,Object.create(null))}insert(t,s,o,i,n){if(t.length===0){if(a(this,Q)!==void 0)throw ae;if(n)return;p(this,Q,s);return}const[r,...d]=t,c=r==="*"?d.length===0?["","",fe]:["","",Me]:r==="/*"?["","",xe]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let l;if(c){const h=c[1];let u=c[2]||Me;if(h&&c[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ae;if(l=a(this,R)[u],!l){if(Object.keys(a(this,R)).some(f=>f!==fe&&f!==xe))throw ae;if(n)return;l=a(this,R)[u]=new se,h!==""&&p(l,Z,i.varIndex++)}!n&&h!==""&&o.push([h,a(l,Z)])}else if(l=a(this,R)[r],!l){if(Object.keys(a(this,R)).some(h=>h.length>1&&h!==fe&&h!==xe))throw ae;if(n)return;l=a(this,R)[r]=new se}l.insert(d,s,o,i,n)}buildRegExpStr(){const s=Object.keys(a(this,R)).sort(zt).map(o=>{const i=a(this,R)[o];return(typeof a(i,Z)=="number"?`(${o})@${a(i,Z)}`:Vt.has(o)?`\\${o}`:o)+i.buildRegExpStr()});return typeof a(this,Q)=="number"&&s.unshift(`#${a(this,Q)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Q=new WeakMap,Z=new WeakMap,R=new WeakMap,se),Se,ke,Ge,qt=(Ge=class{constructor(){g(this,Se,{varIndex:0});g(this,ke,new Ut)}insert(e,t,s){const o=[],i=[];for(let r=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const l=`@\\${r}`;return i[r]=[l,c],r++,d=!0,l}),!d)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=i.length-1;r>=0;r--){const[d]=i[r];for(let c=n.length-1;c>=0;c--)if(n[c].indexOf(d)!==-1){n[c]=n[c].replace(d,i[r][1]);break}}return a(this,ke).insert(n,t,o,a(this,Se),s),o}buildRegExp(){let e=a(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],o=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,n,r)=>n!==void 0?(s[++t]=Number(n),"$()"):(r!==void 0&&(o[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,o]}},Se=new WeakMap,ke=new WeakMap,Ge),Kt=[/^$/,[],Object.create(null)],He=Object.create(null);function ut(e){return He[e]??(He[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){He=Object.create(null)}function Xt(e){var l;const t=new qt,s=[];if(e.length===0)return Kt;const o=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[f,y])=>h?1:f?-1:u.length-y.length),i=Object.create(null);for(let h=0,u=-1,f=o.length;h<f;h++){const[y,P,C]=o[h];y?i[P]=[C.map(([v])=>[v,Object.create(null)]),ht]:u++;let b;try{b=t.insert(P,u,y)}catch(v){throw v===ae?new ct(P):v}y||(s[u]=C.map(([v,M])=>{const j=Object.create(null);for(M-=1;M>=0;M--){const[oe,I]=b[M];j[oe]=I}return[v,j]}))}const[n,r,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let f=0,y=s[h].length;f<y;f++){const P=(l=s[h][f])==null?void 0:l[1];if(!P)continue;const C=Object.keys(P);for(let b=0,v=C.length;b<v;b++)P[C[b]]=d[P[C[b]]]}const c=[];for(const h in r)c[h]=s[r[h]];return[n,c,i]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((o,i)=>i.length-o.length))if(ut(s).test(t))return[...e[s]]}}var U,q,Te,pt,Ye,Gt=(Ye=class{constructor(){g(this,Te);m(this,"name","RegExpRouter");g(this,U);g(this,q);m(this,"match",_t);p(this,U,{[w]:Object.create(null)}),p(this,q,{[w]:Object.create(null)})}add(e,t,s){var d;const o=a(this,U),i=a(this,q);if(!o||!i)throw new Error(lt);o[e]||[o,i].forEach(c=>{c[e]=Object.create(null),Object.keys(c[w]).forEach(l=>{c[e][l]=[...c[w][l]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ut(t);e===w?Object.keys(o).forEach(l=>{var h;(h=o[l])[t]||(h[t]=ne(o[l],t)||ne(o[w],t)||[])}):(d=o[e])[t]||(d[t]=ne(o[e],t)||ne(o[w],t)||[]),Object.keys(o).forEach(l=>{(e===w||e===l)&&Object.keys(o[l]).forEach(h=>{c.test(h)&&o[l][h].push([s,n])})}),Object.keys(i).forEach(l=>{(e===w||e===l)&&Object.keys(i[l]).forEach(h=>c.test(h)&&i[l][h].push([s,n]))});return}const r=tt(t)||[t];for(let c=0,l=r.length;c<l;c++){const h=r[c];Object.keys(i).forEach(u=>{var f;(e===w||e===u)&&((f=i[u])[h]||(f[h]=[...ne(o[u],h)||ne(o[w],h)||[]]),i[u][h].push([s,n-l+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(a(this,q)).concat(Object.keys(a(this,U))).forEach(t=>{e[t]||(e[t]=x(this,Te,pt).call(this,t))}),p(this,U,p(this,q,void 0)),Wt(),e}},U=new WeakMap,q=new WeakMap,Te=new WeakSet,pt=function(e){const t=[];let s=e===w;return[a(this,U),a(this,q)].forEach(o=>{const i=o[e]?Object.keys(o[e]).map(n=>[n,o[e][n]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==w&&t.push(...Object.keys(o[w]).map(n=>[n,o[w][n]]))}),s?Xt(t):null},Ye),K,$,Je,Yt=(Je=class{constructor(e){m(this,"name","SmartRouter");g(this,K,[]);g(this,$,[]);p(this,K,e.routers)}add(e,t,s){if(!a(this,$))throw new Error(lt);a(this,$).push([e,t,s])}match(e,t){if(!a(this,$))throw new Error("Fatal error");const s=a(this,K),o=a(this,$),i=s.length;let n=0,r;for(;n<i;n++){const d=s[n];try{for(let c=0,l=o.length;c<l;c++)d.add(...o[c]);r=d.match(e,t)}catch(c){if(c instanceof ct)continue;throw c}this.match=d.match.bind(d),p(this,K,[d]),p(this,$,void 0);break}if(n===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(a(this,$)||a(this,K).length!==1)throw new Error("No active router has been determined yet.");return a(this,K)[0]}},K=new WeakMap,$=new WeakMap,Je),ge=Object.create(null),W,D,ee,pe,k,F,Y,me,Jt=(me=class{constructor(t,s,o){g(this,F);g(this,W);g(this,D);g(this,ee);g(this,pe,0);g(this,k,ge);if(p(this,D,o||Object.create(null)),p(this,W,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},p(this,W,[i])}p(this,ee,[])}insert(t,s,o){p(this,pe,++_e(this,pe)._);let i=this;const n=Dt(s),r=[];for(let d=0,c=n.length;d<c;d++){const l=n[d],h=n[d+1],u=Ht(l,h),f=Array.isArray(u)?u[0]:l;if(f in a(i,D)){i=a(i,D)[f],u&&r.push(u[1]);continue}a(i,D)[f]=new me,u&&(a(i,ee).push(u),r.push(u[1])),i=a(i,D)[f]}return a(i,W).push({[t]:{handler:o,possibleKeys:r.filter((d,c,l)=>l.indexOf(d)===c),score:a(this,pe)}}),i}search(t,s){var c;const o=[];p(this,k,ge);let n=[this];const r=Ze(s),d=[];for(let l=0,h=r.length;l<h;l++){const u=r[l],f=l===h-1,y=[];for(let P=0,C=n.length;P<C;P++){const b=n[P],v=a(b,D)[u];v&&(p(v,k,a(b,k)),f?(a(v,D)["*"]&&o.push(...x(this,F,Y).call(this,a(v,D)["*"],t,a(b,k))),o.push(...x(this,F,Y).call(this,v,t,a(b,k)))):y.push(v));for(let M=0,j=a(b,ee).length;M<j;M++){const oe=a(b,ee)[M],I=a(b,k)===ge?{}:{...a(b,k)};if(oe==="*"){const _=a(b,D)["*"];_&&(o.push(...x(this,F,Y).call(this,_,t,a(b,k))),p(_,k,I),y.push(_));continue}const[Ce,Pe,X]=oe;if(!u&&!(X instanceof RegExp))continue;const O=a(b,D)[Ce],ft=r.slice(l).join("/");if(X instanceof RegExp){const _=X.exec(ft);if(_){if(I[Pe]=_[0],o.push(...x(this,F,Y).call(this,O,t,a(b,k),I)),Object.keys(a(O,D)).length){p(O,k,I);const je=((c=_[0].match(/\//))==null?void 0:c.length)??0;(d[je]||(d[je]=[])).push(O)}continue}}(X===!0||X.test(u))&&(I[Pe]=u,f?(o.push(...x(this,F,Y).call(this,O,t,I,a(b,k))),a(O,D)["*"]&&o.push(...x(this,F,Y).call(this,a(O,D)["*"],t,I,a(b,k)))):(p(O,k,I),y.push(O)))}}n=y.concat(d.shift()??[])}return o.length>1&&o.sort((l,h)=>l.score-h.score),[o.map(({handler:l,params:h})=>[l,h])]}},W=new WeakMap,D=new WeakMap,ee=new WeakMap,pe=new WeakMap,k=new WeakMap,F=new WeakSet,Y=function(t,s,o,i){const n=[];for(let r=0,d=a(t,W).length;r<d;r++){const c=a(t,W)[r],l=c[s]||c[w],h={};if(l!==void 0&&(l.params=Object.create(null),n.push(l),o!==ge||i&&i!==ge))for(let u=0,f=l.possibleKeys.length;u<f;u++){const y=l.possibleKeys[u],P=h[l.score];l.params[y]=i!=null&&i[y]&&!P?i[y]:o[y]??(i==null?void 0:i[y]),h[l.score]=!0}}return n},me),te,Qe,Qt=(Qe=class{constructor(){m(this,"name","TrieRouter");g(this,te);p(this,te,new Jt)}add(e,t,s){const o=tt(t);if(o){for(let i=0,n=o.length;i<n;i++)a(this,te).insert(e,o[i],s);return}a(this,te).insert(e,t,s)}match(e,t){return a(this,te).search(e,t)}},te=new WeakMap,Qe),mt=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Gt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},o=(n=>typeof n=="string"?n==="*"?()=>n:r=>n===r?r:null:typeof n=="function"?n:r=>n.includes(r)?r:null)(s.origin),i=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(s.allowMethods);return async function(r,d){var h;function c(u,f){r.res.headers.set(u,f)}const l=await o(r.req.header("origin")||"",r);if(l&&c("Access-Control-Allow-Origin",l),s.credentials&&c("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&c("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.origin!=="*"&&c("Vary","Origin"),s.maxAge!=null&&c("Access-Control-Max-Age",s.maxAge.toString());const u=await i(r.req.header("origin")||"",r);u.length&&c("Access-Control-Allow-Methods",u.join(","));let f=s.allowHeaders;if(!(f!=null&&f.length)){const y=r.req.header("Access-Control-Request-Headers");y&&(f=y.split(/\s*,\s*/))}return f!=null&&f.length&&(c("Access-Control-Allow-Headers",f.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&r.header("Vary","Origin",{append:!0})}};const qe=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((i,n)=>i+Object.values(n).filter(r=>r).length,0),s=qe.reduce((i,n)=>i+n.items.length,0);let o="";return qe.forEach((i,n)=>{o+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+i.title+'</h3><table style="width:100%;border-collapse:collapse;">',i.items.forEach((r,d)=>{var h;const c=((h=e.checklist[n])==null?void 0:h[d])||!1;o+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+r+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(c?"✅":"⬜")+"</td></tr>";const l=n+"-"+d;e.photos[l]&&(o+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+l+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+l+'"></td></tr>')}),o+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+o+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'}const Re=new mt;Re.use("/api/*",Zt());Re.get("/",e=>e.html(`
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
                    <strong>안내:</strong> 모든 항목을 확인하고 서명 후 원하는 버튼을 눌러주세요.
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Email Submit Button -->
                <button id="emailBtn" onclick="submitEmail()" 
                    class="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i>
                    📧 이메일 발송
                </button>
                
                <!-- PDF Download Button -->
                <button id="pdfBtn" onclick="downloadPDF()" 
                    class="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition shadow-lg flex items-center justify-center">
                    <i class="fas fa-file-pdf mr-2"></i>
                    📄 PDF 다운로드
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

            // Store photos (전역으로 변경)
            window.photos = {};

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
            window.handleSectionPhotoUpload = function(input, sectionIndex) {
                const files = input.files;
                if (!files || files.length === 0) return;

                // Initialize section photos array if not exists
                if (!window.photos[\`section-\${sectionIndex}\`]) {
                    window.photos[\`section-\${sectionIndex}\`] = [];
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
                            window.photos[\`section-\${sectionIndex}\`].push({
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
                const sectionPhotos = window.photos[\`section-\${sectionIndex}\`] || [];
                
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
                
                const sectionPhotos = window.photos[\`section-\${sectionIndex}\`] || [];
                window.photos[\`section-\${sectionIndex}\`] = sectionPhotos.filter(p => p.id !== photoId);
                
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


            // PDF 생성 함수 (jsPDF + html2canvas 직접 사용)
            window.generatePDF = async function() {
                try {
                    console.log('🚀 PDF 생성 시작!');
                    
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    loadingOverlay.classList.remove('hidden');
                    
                    // 데이터 수집
                    const installDate = document.getElementById('installDate').value;
                    const vehicleVin = document.getElementById('vehicleVin').value;
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
                    
                    console.log('📊 수집된 데이터:', { installDate, vehicleVin, productName });
                    
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


            // 공통 검증 함수
            window.validateForm = function() {
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                
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
                const customerEmail1 = document.getElementById('customerEmail1').value.trim();

                if (!installDate || !vehicleVin || !productName || 
                    !installerName || !customerName || !customerEmail1) {
                    alert('모든 필수 항목을 입력해주세요.\\n제품 시공명은 최소 1개 이상 선택해야 합니다.');
                    return null;
                }
                
                // Check signatures
                if (isSignatureEmpty(canvases.installer)) {
                    alert('시공자 서명을 해주세요.');
                    return null;
                }
                
                if (isSignatureEmpty(canvases.customer)) {
                    alert('고객 서명을 해주세요.');
                    return null;
                }
                
                return {
                    installDate,
                    vehicleVin,
                    productName,
                    installerName,
                    customerName,
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
                
                // Collect email addresses
                const customerEmail2 = document.getElementById('customerEmail2').value.trim();
                const customerEmail3 = document.getElementById('customerEmail3').value.trim();
                const emailList = [formData.customerEmail1, customerEmail2, customerEmail3].filter(e => e);
                
                // Validate all email addresses
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
                        productName: formData.productName,
                        productConfig: formData.productName,
                        installerName: formData.installerName,
                        customerName: formData.customerName,
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


            // 📄 PDF 다운로드 버튼
            window.downloadPDF = async function() {
                console.log('✅ downloadPDF 함수 호출됨');
                const formData = window.validateForm();
                if (!formData) {
                    console.log('❌ validateForm 실패');
                    return;
                }
                console.log('✅ validateForm 통과, PDF 생성 시작');
                
                // PDF 생성
                await window.generatePDF();
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
  `));Re.post("/api/submit",async e=>{var t,s,o,i;try{const n=await e.req.json();console.log("📝 Received checklist submission"),console.log("Email List:",n.emailList),console.log("Email Count:",((t=n.emailList)==null?void 0:t.length)||0),console.log("Photos count:",Object.keys(n.photos||{}).length),console.log("Photos keys:",Object.keys(n.photos||{})),console.log("Installer signature length:",((s=n.installerSignature)==null?void 0:s.length)||0),console.log("Customer signature length:",((o=n.customerSignature)==null?void 0:o.length)||0);const{RESEND_API_KEY:r,FROM_EMAIL:d,FROM_NAME:c}=e.env;if(!r||r==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(n.photos||{}).length,customerEmail:n.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const l=[];Object.entries(n.photos||{}).forEach(([j,oe])=>{const I=oe.match(/^data:([^;]+);base64,(.+)$/);if(I){const Ce=I[1],Pe=I[2],X=Ce.split("/")[1]||"jpg";l.push({filename:`photo_${j}.${X}`,content:Pe,content_id:`photo_${j}`,disposition:"inline"})}});const h=n.installerSignature.match(/^data:([^;]+);base64,(.+)$/);h&&l.push({filename:"installer_signature.png",content:h[2],content_id:"installer_signature",disposition:"inline"});const u=n.customerSignature.match(/^data:([^;]+);base64,(.+)$/);u&&l.push({filename:"customer_signature.png",content:u[2],content_id:"customer_signature",disposition:"inline"});const f=es(n);console.log("✅ Email HTML generated with",l.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const y=c||"케이밴 경북지사",P=d||"noreply@yourdomain.com",C="케이밴 제품 시공 점검표 - "+n.vehicleVin,b={from:y+" <"+P+">",to:n.emailList||[n.customerEmail],subject:C,html:f};l.length>0&&(b.attachments=l);const v=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(b)});if(!v.ok){const j=await v.json();throw new Error("Resend API error: "+JSON.stringify(j))}const M=await v.json();return console.log("✅ Email sent successfully:",M),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{emailList:n.emailList||[n.customerEmail],emailCount:((i=n.emailList)==null?void 0:i.length)||1,installDate:n.installDate,vehicleVin:n.vehicleVin,photosCount:Object.keys(n.photos||{}).length,emailId:M.id}})}catch(l){console.error("❌ Email sending error:",l);const h=l.message||"Unknown email error",u=h.includes("You can only send testing emails");return e.json({success:!1,error:u?"⚠️ Resend 테스트 모드 제한: 본인 이메일(designsoul2007@gmail.com)로만 전송 가능합니다. 다른 이메일로 전송하려면 도메인 인증이 필요합니다.":"Failed to send email",details:h,hint:u?"프로덕션 배포 시 https://resend.com/domains 에서 도메인을 인증하세요.":void 0,debug:{apiKeyExists:!!r,apiKeyValid:r!=="your_resend_api_key_here",fromEmail:d,toEmails:n.emailList||[n.customerEmail],isTestMode:u}},500)}}catch(n){return console.error("❌ Submit error:",n),e.json({success:!1,error:n.message||"Failed to submit checklist",stack:n.stack},500)}});const Ke=new mt,ts=Object.assign({"/src/index.tsx":Re});let gt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
