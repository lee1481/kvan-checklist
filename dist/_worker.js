var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var bt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>bt(e,typeof t!="symbol"?t+"":t,s),He=(e,t,s)=>t.has(e)||Be("Cannot "+s);var i=(e,t,s)=>(He(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,r)=>(He(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),x=(e,t,s)=>(He(e,t,"access private method"),s);var Ve=(e,t,s,r)=>({set _(n){p(e,t,n,s)},get _(){return i(e,t,r)}});var Fe=(e,t,s)=>(r,n)=>{let o=-1;return a(0);async function a(d){if(d<=o)throw new Error("next() called multiple times");o=d;let l,c=!1,h;if(e[d]?(h=e[d][0][0],r.req.routeIndex=d):h=d===e.length&&n||void 0,h)try{l=await h(r,()=>a(d+1))}catch(u){if(u instanceof Error&&t)r.error=u,l=await t(u,r),c=!0;else throw u}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},yt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,o=(e instanceof nt?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:r}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((r,n)=>{t.all||n.endsWith("[]")?kt(s,n,r):s[n]=r}),t.dot&&Object.entries(s).forEach(([r,n])=>{r.includes(".")&&(Pt(s,r,n),delete s[r])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pt=(e,t,s)=>{let r=e;const n=t.split(".");n.forEach((o,a)=>{a===n.length-1?r[o]=s:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Rt=e=>{const{groups:t,path:s}=St(e),r=Ze(s);return It(r,t)},St=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const n=`@${r}`;return t.push([n,s]),n}),{groups:t,path:e}},It=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let n=e.length-1;n>=0;n--)if(e[n].includes(r)){e[n]=e[n].replace(r,t[s][1]);break}}return e},Pe={},Ct=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return Pe[r]||(s[2]?Pe[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Pe[r]=[e,s[1],!0]),Pe[r]}return null},Te=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},jt=e=>Te(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const n=t.charCodeAt(r);if(n===37){const o=t.indexOf("?",r),a=t.slice(s,o===-1?void 0:o);return jt(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(n===63)break}return t.slice(s,r)},Ot=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ne=(e,t,...s)=>(s.length&&(t=ne(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))r+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){s.length===0&&r===""?s.push("/"):s.push(r);const o=n.replace("?","");r+="/"+o,s.push(r)}else r+="/"+n}),s.filter((n,o,a)=>a.indexOf(n)===o)},Le=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Te(e,rt):e):e,st=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const l=a+t.length+2,c=e.indexOf("&",l);return Le(e.slice(l,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const n={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const a=e.indexOf("&",o+1);let d=e.indexOf("=",o);d>a&&a!==-1&&(d=-1);let l=e.slice(o+1,d===-1?a===-1?void 0:a:d);if(r&&(l=Le(l)),o=a,l==="")continue;let c;d===-1?c="":(c=e.slice(d+1,a===-1?void 0:a),r&&(c=Le(c))),s?(n[l]&&Array.isArray(n[l])||(n[l]=[]),n[l].push(c)):n[l]??(n[l]=c)}return t?n[t]:n},Dt=st,At=(e,t)=>st(e,t,!0),rt=decodeURIComponent,Ue=e=>Te(e,rt),ae,j,M,ot,it,_e,F,We,nt=(We=class{constructor(e,t="/",s=[[]]){g(this,M);f(this,"raw");g(this,ae);g(this,j);f(this,"routeIndex",0);f(this,"path");f(this,"bodyCache",{});g(this,F,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const n=Object.keys(t)[0];return n?t[n].then(o=>(n==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,p(this,j,s),p(this,ae,{})}param(e){return e?x(this,M,ot).call(this,e):x(this,M,it).call(this)}query(e){return Dt(this.url,e)}queries(e){return At(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return i(this,F).call(this,"text").then(e=>JSON.parse(e))}text(){return i(this,F).call(this,"text")}arrayBuffer(){return i(this,F).call(this,"arrayBuffer")}blob(){return i(this,F).call(this,"blob")}formData(){return i(this,F).call(this,"formData")}addValidatedData(e,t){i(this,ae)[e]=t}valid(e){return i(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[yt](){return i(this,j)}get matchedRoutes(){return i(this,j)[0].map(([[,e]])=>e)}get routePath(){return i(this,j)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,j=new WeakMap,M=new WeakSet,ot=function(e){const t=i(this,j)[0][this.routeIndex][1][e],s=x(this,M,_e).call(this,t);return s&&/\%/.test(s)?Ue(s):s},it=function(){const e={},t=Object.keys(i(this,j)[0][this.routeIndex][1]);for(const s of t){const r=x(this,M,_e).call(this,i(this,j)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?Ue(r):r)}return e},_e=function(e){return i(this,j)[1]?i(this,j)[1][e]:e},F=new WeakMap,We),$t={Stringify:1},at=async(e,t,s,r,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(n?n[0]+=e:n=[e],Promise.all(o.map(d=>d({phase:t,buffer:n,context:r}))).then(d=>Promise.all(d.filter(Boolean).map(l=>at(l,t,!1,r,n))).then(()=>n[0]))):Promise.resolve(e)},Ht="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),be,ye,L,ce,N,S,ve,le,de,Y,we,Ee,U,oe,Xe,Lt=(Xe=class{constructor(e,t){g(this,U);g(this,be);g(this,ye);f(this,"env",{});g(this,L);f(this,"finalized",!1);f(this,"error");g(this,ce);g(this,N);g(this,S);g(this,ve);g(this,le);g(this,de);g(this,Y);g(this,we);g(this,Ee);f(this,"render",(...e)=>(i(this,le)??p(this,le,t=>this.html(t)),i(this,le).call(this,...e)));f(this,"setLayout",e=>p(this,ve,e));f(this,"getLayout",()=>i(this,ve));f(this,"setRenderer",e=>{p(this,le,e)});f(this,"header",(e,t,s)=>{this.finalized&&p(this,S,new Response(i(this,S).body,i(this,S)));const r=i(this,S)?i(this,S).headers:i(this,Y)??p(this,Y,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});f(this,"status",e=>{p(this,ce,e)});f(this,"set",(e,t)=>{i(this,L)??p(this,L,new Map),i(this,L).set(e,t)});f(this,"get",e=>i(this,L)?i(this,L).get(e):void 0);f(this,"newResponse",(...e)=>x(this,U,oe).call(this,...e));f(this,"body",(e,t,s)=>x(this,U,oe).call(this,e,t,s));f(this,"text",(e,t,s)=>!i(this,Y)&&!i(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,U,oe).call(this,e,t,Ne(Ht,s)));f(this,"json",(e,t,s)=>x(this,U,oe).call(this,JSON.stringify(e),t,Ne("application/json",s)));f(this,"html",(e,t,s)=>{const r=n=>x(this,U,oe).call(this,n,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,$t.Stringify,!1,{}).then(r):r(e)});f(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});f(this,"notFound",()=>(i(this,de)??p(this,de,()=>new Response),i(this,de).call(this,this)));p(this,be,e),t&&(p(this,N,t.executionCtx),this.env=t.env,p(this,de,t.notFoundHandler),p(this,Ee,t.path),p(this,we,t.matchResult))}get req(){return i(this,ye)??p(this,ye,new nt(i(this,be),i(this,Ee),i(this,we))),i(this,ye)}get event(){if(i(this,N)&&"respondWith"in i(this,N))return i(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(i(this,N))return i(this,N);throw Error("This context has no ExecutionContext")}get res(){return i(this,S)||p(this,S,new Response(null,{headers:i(this,Y)??p(this,Y,new Headers)}))}set res(e){if(i(this,S)&&e){e=new Response(e.body,e);for(const[t,s]of i(this,S).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=i(this,S).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of r)e.headers.append("set-cookie",n)}else e.headers.set(t,s)}p(this,S,e),this.finalized=!0}get var(){return i(this,L)?Object.fromEntries(i(this,L)):{}}},be=new WeakMap,ye=new WeakMap,L=new WeakMap,ce=new WeakMap,N=new WeakMap,S=new WeakMap,ve=new WeakMap,le=new WeakMap,de=new WeakMap,Y=new WeakMap,we=new WeakMap,Ee=new WeakMap,U=new WeakSet,oe=function(e,t,s){const r=i(this,S)?new Headers(i(this,S).headers):i(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of o)a.toLowerCase()==="set-cookie"?r.append(a,d):r.set(a,d)}if(s)for(const[o,a]of Object.entries(s))if(typeof a=="string")r.set(o,a);else{r.delete(o);for(const d of a)r.append(o,d)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??i(this,ce);return new Response(e,{status:n,headers:r})},Xe),w="ALL",Nt="all",_t=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",lt=class extends Error{},Tt="__COMPOSED_HANDLER",Mt=e=>e.text("404 Not Found",404),qe=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},O,E,dt,D,X,Re,Se,he,Bt=(he=class{constructor(t={}){g(this,E);f(this,"get");f(this,"post");f(this,"put");f(this,"delete");f(this,"options");f(this,"patch");f(this,"all");f(this,"on");f(this,"use");f(this,"router");f(this,"getPath");f(this,"_basePath","/");g(this,O,"/");f(this,"routes",[]);g(this,D,Mt);f(this,"errorHandler",qe);f(this,"onError",t=>(this.errorHandler=t,this));f(this,"notFound",t=>(p(this,D,t),this));f(this,"fetch",(t,...s)=>x(this,E,Se).call(this,t,s[1],s[0],t.method));f(this,"request",(t,s,r,n)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ne("/",t)}`,s),r,n)));f(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Se).call(this,t.request,t,void 0,t.request.method))})});[..._t,Nt].forEach(o=>{this[o]=(a,...d)=>(typeof a=="string"?p(this,O,a):x(this,E,X).call(this,o,i(this,O),a),d.forEach(l=>{x(this,E,X).call(this,o,i(this,O),l)}),this)}),this.on=(o,a,...d)=>{for(const l of[a].flat()){p(this,O,l);for(const c of[o].flat())d.map(h=>{x(this,E,X).call(this,c.toUpperCase(),i(this,O),h)})}return this},this.use=(o,...a)=>(typeof o=="string"?p(this,O,o):(p(this,O,"*"),a.unshift(o)),a.forEach(d=>{x(this,E,X).call(this,w,i(this,O),d)}),this);const{strict:r,...n}=t;Object.assign(this,n),this.getPath=r??!0?t.getPath??et:Ot}route(t,s){const r=this.basePath(t);return s.routes.map(n=>{var a;let o;s.errorHandler===qe?o=n.handler:(o=async(d,l)=>(await Fe([],s.errorHandler)(d,()=>n.handler(d,l))).res,o[Tt]=n.handler),x(a=r,E,X).call(a,n.method,n.path,o)}),this}basePath(t){const s=x(this,E,dt).call(this);return s._basePath=ne(this._basePath,t),s}mount(t,s,r){let n,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?n=l=>l:n=r.replaceRequest));const a=o?l=>{const c=o(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};n||(n=(()=>{const l=ne(this._basePath,t),c=l==="/"?0:l.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,h)}})());const d=async(l,c)=>{const h=await s(n(l.req.raw),...a(l));if(h)return h;await c()};return x(this,E,X).call(this,w,ne(t,"*"),d),this}},O=new WeakMap,E=new WeakSet,dt=function(){const t=new he({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,p(t,D,i(this,D)),t.routes=this.routes,t},D=new WeakMap,X=function(t,s,r){t=t.toUpperCase(),s=ne(this._basePath,s);const n={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,n]),this.routes.push(n)},Re=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,r,n){if(n==="HEAD")return(async()=>new Response(null,await x(this,E,Se).call(this,t,s,r,"GET")))();const o=this.getPath(t,{env:r}),a=this.router.match(n,o),d=new Lt(t,{path:o,matchResult:a,env:r,executionCtx:s,notFoundHandler:i(this,D)});if(a[0].length===1){let c;try{c=a[0][0][0][0](d,async()=>{d.res=await i(this,D).call(this,d)})}catch(h){return x(this,E,Re).call(this,h,d)}return c instanceof Promise?c.then(h=>h||(d.finalized?d.res:i(this,D).call(this,d))).catch(h=>x(this,E,Re).call(this,h,d)):c??i(this,D).call(this,d)}const l=Fe(a[0],this.errorHandler,i(this,D));return(async()=>{try{const c=await l(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return x(this,E,Re).call(this,c,d)}})()},he),ht=[];function Vt(e,t){const s=this.buildAllMatchers(),r=((n,o)=>{const a=s[n]||s[w],d=a[2][o];if(d)return d;const l=o.match(a[0]);if(!l)return[[],ht];const c=l.indexOf("",1);return[a[1][c],l]});return this.match=r,r(e,t)}var Ce="[^/]+",me=".*",xe="(?:|/.*)",ie=Symbol(),Ft=new Set(".\\+*[^]$()");function Ut(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===me||e===xe?1:t===me||t===xe?-1:e===Ce?1:t===Ce?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,Q,A,te,qt=(te=class{constructor(){g(this,J);g(this,Q);g(this,A,Object.create(null))}insert(t,s,r,n,o){if(t.length===0){if(i(this,J)!==void 0)throw ie;if(o)return;p(this,J,s);return}const[a,...d]=t,l=a==="*"?d.length===0?["","",me]:["","",Ce]:a==="/*"?["","",xe]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const h=l[1];let u=l[2]||Ce;if(h&&l[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw ie;if(c=i(this,A)[u],!c){if(Object.keys(i(this,A)).some(m=>m!==me&&m!==xe))throw ie;if(o)return;c=i(this,A)[u]=new te,h!==""&&p(c,Q,n.varIndex++)}!o&&h!==""&&r.push([h,i(c,Q)])}else if(c=i(this,A)[a],!c){if(Object.keys(i(this,A)).some(h=>h.length>1&&h!==me&&h!==xe))throw ie;if(o)return;c=i(this,A)[a]=new te}c.insert(d,s,r,n,o)}buildRegExpStr(){const s=Object.keys(i(this,A)).sort(Ut).map(r=>{const n=i(this,A)[r];return(typeof i(n,Q)=="number"?`(${r})@${i(n,Q)}`:Ft.has(r)?`\\${r}`:r)+n.buildRegExpStr()});return typeof i(this,J)=="number"&&s.unshift(`#${i(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,Q=new WeakMap,A=new WeakMap,te),je,ke,Ge,zt=(Ge=class{constructor(){g(this,je,{varIndex:0});g(this,ke,new qt)}insert(e,t,s){const r=[],n=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return n[a]=[c,l],a++,d=!0,c}),!d)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=n.length-1;a>=0;a--){const[d]=n[a];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(d)!==-1){o[l]=o[l].replace(d,n[a][1]);break}}return i(this,ke).insert(o,t,r,i(this,je),s),r}buildRegExp(){let e=i(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,o,a)=>o!==void 0?(s[++t]=Number(o),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,r]}},je=new WeakMap,ke=new WeakMap,Ge),Kt=[/^$/,[],Object.create(null)],Ie=Object.create(null);function ut(e){return Ie[e]??(Ie[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Ie=Object.create(null)}function Xt(e){var c;const t=new zt,s=[];if(e.length===0)return Kt;const r=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[m,y])=>h?1:m?-1:u.length-y.length),n=Object.create(null);for(let h=0,u=-1,m=r.length;h<m;h++){const[y,k,I]=r[h];y?n[k]=[I.map(([v])=>[v,Object.create(null)]),ht]:u++;let b;try{b=t.insert(k,u,y)}catch(v){throw v===ie?new lt(k):v}y||(s[u]=I.map(([v,$])=>{const B=Object.create(null);for($-=1;$>=0;$--){const[se,C]=b[$];B[se]=C}return[v,B]}))}const[o,a,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let m=0,y=s[h].length;m<y;m++){const k=(c=s[h][m])==null?void 0:c[1];if(!k)continue;const I=Object.keys(k);for(let b=0,v=I.length;b<v;b++)k[I[b]]=d[k[I[b]]]}const l=[];for(const h in a)l[h]=s[a[h]];return[o,l,n]}function re(e,t){if(e){for(const s of Object.keys(e).sort((r,n)=>n.length-r.length))if(ut(s).test(t))return[...e[s]]}}var q,z,Oe,pt,Ye,Gt=(Ye=class{constructor(){g(this,Oe);f(this,"name","RegExpRouter");g(this,q);g(this,z);f(this,"match",Vt);p(this,q,{[w]:Object.create(null)}),p(this,z,{[w]:Object.create(null)})}add(e,t,s){var d;const r=i(this,q),n=i(this,z);if(!r||!n)throw new Error(ct);r[e]||[r,n].forEach(l=>{l[e]=Object.create(null),Object.keys(l[w]).forEach(c=>{l[e][c]=[...l[w][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ut(t);e===w?Object.keys(r).forEach(c=>{var h;(h=r[c])[t]||(h[t]=re(r[c],t)||re(r[w],t)||[])}):(d=r[e])[t]||(d[t]=re(r[e],t)||re(r[w],t)||[]),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(h=>{l.test(h)&&r[c][h].push([s,o])})}),Object.keys(n).forEach(c=>{(e===w||e===c)&&Object.keys(n[c]).forEach(h=>l.test(h)&&n[c][h].push([s,o]))});return}const a=tt(t)||[t];for(let l=0,c=a.length;l<c;l++){const h=a[l];Object.keys(n).forEach(u=>{var m;(e===w||e===u)&&((m=n[u])[h]||(m[h]=[...re(r[u],h)||re(r[w],h)||[]]),n[u][h].push([s,o-c+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(i(this,z)).concat(Object.keys(i(this,q))).forEach(t=>{e[t]||(e[t]=x(this,Oe,pt).call(this,t))}),p(this,q,p(this,z,void 0)),Wt(),e}},q=new WeakMap,z=new WeakMap,Oe=new WeakSet,pt=function(e){const t=[];let s=e===w;return[i(this,q),i(this,z)].forEach(r=>{const n=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];n.length!==0?(s||(s=!0),t.push(...n)):e!==w&&t.push(...Object.keys(r[w]).map(o=>[o,r[w][o]]))}),s?Xt(t):null},Ye),K,_,Je,Yt=(Je=class{constructor(e){f(this,"name","SmartRouter");g(this,K,[]);g(this,_,[]);p(this,K,e.routers)}add(e,t,s){if(!i(this,_))throw new Error(ct);i(this,_).push([e,t,s])}match(e,t){if(!i(this,_))throw new Error("Fatal error");const s=i(this,K),r=i(this,_),n=s.length;let o=0,a;for(;o<n;o++){const d=s[o];try{for(let l=0,c=r.length;l<c;l++)d.add(...r[l]);a=d.match(e,t)}catch(l){if(l instanceof lt)continue;throw l}this.match=d.match.bind(d),p(this,K,[d]),p(this,_,void 0);break}if(o===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(i(this,_)||i(this,K).length!==1)throw new Error("No active router has been determined yet.");return i(this,K)[0]}},K=new WeakMap,_=new WeakMap,Je),ge=Object.create(null),W,R,Z,ue,P,T,G,pe,Jt=(pe=class{constructor(t,s,r){g(this,T);g(this,W);g(this,R);g(this,Z);g(this,ue,0);g(this,P,ge);if(p(this,R,r||Object.create(null)),p(this,W,[]),t&&s){const n=Object.create(null);n[t]={handler:s,possibleKeys:[],score:0},p(this,W,[n])}p(this,Z,[])}insert(t,s,r){p(this,ue,++Ve(this,ue)._);let n=this;const o=Rt(s),a=[];for(let d=0,l=o.length;d<l;d++){const c=o[d],h=o[d+1],u=Ct(c,h),m=Array.isArray(u)?u[0]:c;if(m in i(n,R)){n=i(n,R)[m],u&&a.push(u[1]);continue}i(n,R)[m]=new pe,u&&(i(n,Z).push(u),a.push(u[1])),n=i(n,R)[m]}return i(n,W).push({[t]:{handler:r,possibleKeys:a.filter((d,l,c)=>c.indexOf(d)===l),score:i(this,ue)}}),n}search(t,s){var l;const r=[];p(this,P,ge);let o=[this];const a=Ze(s),d=[];for(let c=0,h=a.length;c<h;c++){const u=a[c],m=c===h-1,y=[];for(let k=0,I=o.length;k<I;k++){const b=o[k],v=i(b,R)[u];v&&(p(v,P,i(b,P)),m?(i(v,R)["*"]&&r.push(...x(this,T,G).call(this,i(v,R)["*"],t,i(b,P))),r.push(...x(this,T,G).call(this,v,t,i(b,P)))):y.push(v));for(let $=0,B=i(b,Z).length;$<B;$++){const se=i(b,Z)[$],C=i(b,P)===ge?{}:{...i(b,P)};if(se==="*"){const V=i(b,R)["*"];V&&(r.push(...x(this,T,G).call(this,V,t,i(b,P))),p(V,P,C),y.push(V));continue}const[Ae,Me,fe]=se;if(!u&&!(fe instanceof RegExp))continue;const H=i(b,R)[Ae],mt=a.slice(c).join("/");if(fe instanceof RegExp){const V=fe.exec(mt);if(V){if(C[Me]=V[0],r.push(...x(this,T,G).call(this,H,t,i(b,P),C)),Object.keys(i(H,R)).length){p(H,P,C);const $e=((l=V[0].match(/\//))==null?void 0:l.length)??0;(d[$e]||(d[$e]=[])).push(H)}continue}}(fe===!0||fe.test(u))&&(C[Me]=u,m?(r.push(...x(this,T,G).call(this,H,t,C,i(b,P))),i(H,R)["*"]&&r.push(...x(this,T,G).call(this,i(H,R)["*"],t,C,i(b,P)))):(p(H,P,C),y.push(H)))}}o=y.concat(d.shift()??[])}return r.length>1&&r.sort((c,h)=>c.score-h.score),[r.map(({handler:c,params:h})=>[c,h])]}},W=new WeakMap,R=new WeakMap,Z=new WeakMap,ue=new WeakMap,P=new WeakMap,T=new WeakSet,G=function(t,s,r,n){const o=[];for(let a=0,d=i(t,W).length;a<d;a++){const l=i(t,W)[a],c=l[s]||l[w],h={};if(c!==void 0&&(c.params=Object.create(null),o.push(c),r!==ge||n&&n!==ge))for(let u=0,m=c.possibleKeys.length;u<m;u++){const y=c.possibleKeys[u],k=h[c.score];c.params[y]=n!=null&&n[y]&&!k?n[y]:r[y]??(n==null?void 0:n[y]),h[c.score]=!0}}return o},pe),ee,Qe,Qt=(Qe=class{constructor(){f(this,"name","TrieRouter");g(this,ee);p(this,ee,new Jt)}add(e,t,s){const r=tt(t);if(r){for(let n=0,o=r.length;n<o;n++)i(this,ee).insert(e,r[n],s);return}i(this,ee).insert(e,t,s)}match(e,t){return i(this,ee).search(e,t)}},ee=new WeakMap,Qe),ft=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Gt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(o=>typeof o=="string"?o==="*"?()=>o:a=>o===a?a:null:typeof o=="function"?o:a=>o.includes(a)?a:null)(s.origin),n=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(a,d){var h;function l(u,m){a.res.headers.set(u,m)}const c=await r(a.req.header("origin")||"",a);if(c&&l("Access-Control-Allow-Origin",c),s.credentials&&l("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const u=await n(a.req.header("origin")||"",a);u.length&&l("Access-Control-Allow-Methods",u.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const y=a.req.header("Access-Control-Request-Headers");y&&(m=y.split(/\s*,\s*/))}return m!=null&&m.length&&(l("Access-Control-Allow-Headers",m.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const ze=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((n,o)=>n+Object.values(o).filter(a=>a).length,0),s=ze.reduce((n,o)=>n+o.items.length,0);let r="";return ze.forEach((n,o)=>{r+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+n.title+'</h3><table style="width:100%;border-collapse:collapse;">',n.items.forEach((a,d)=>{var h;const l=((h=e.checklist[o])==null?void 0:h[d])||!1;r+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+a+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(l?"✅":"⬜")+"</td></tr>";const c=o+"-"+d;e.photos[c]&&(r+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+c+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+c+'"></td></tr>')}),r+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+r+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'}const De=new ft;De.use("/api/*",Zt());De.get("/",e=>e.html(`
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
                const customerEmail = document.getElementById('customerEmail').value;

                if (!installDate || !vehicleVin || !productName || 
                    !installerName || !customerName || !customerEmail) {
                    alert('모든 필수 항목을 입력해주세요.\\n제품 시공명은 최소 1개 이상 선택해야 합니다.');
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
                        photos: flatPhotos
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
  `));De.post("/api/submit",async e=>{var t,s;try{const r=await e.req.json();console.log("📝 Received checklist submission"),console.log("Customer Email:",r.customerEmail),console.log("Photos count:",Object.keys(r.photos||{}).length),console.log("Photos keys:",Object.keys(r.photos||{})),console.log("Installer signature length:",((t=r.installerSignature)==null?void 0:t.length)||0),console.log("Customer signature length:",((s=r.customerSignature)==null?void 0:s.length)||0);const{RESEND_API_KEY:n,FROM_EMAIL:o,FROM_NAME:a}=e.env;if(!n||n==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(r.photos||{}).length,customerEmail:r.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const d=[];Object.entries(r.photos||{}).forEach(([v,$])=>{const B=$.match(/^data:([^;]+);base64,(.+)$/);if(B){const se=B[1],C=B[2],Ae=se.split("/")[1]||"jpg";d.push({filename:`photo_${v}.${Ae}`,content:C,content_id:`photo_${v}`,disposition:"inline"})}});const l=r.installerSignature.match(/^data:([^;]+);base64,(.+)$/);l&&d.push({filename:"installer_signature.png",content:l[2],content_id:"installer_signature",disposition:"inline"});const c=r.customerSignature.match(/^data:([^;]+);base64,(.+)$/);c&&d.push({filename:"customer_signature.png",content:c[2],content_id:"customer_signature",disposition:"inline"});const h=es(r);console.log("✅ Email HTML generated with",d.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const u=a||"케이밴 경북지사",m=o||"noreply@yourdomain.com",y="케이밴 제품 시공 점검표 - "+r.vehicleVin,k={from:u+" <"+m+">",to:[r.customerEmail],subject:y,html:h};d.length>0&&(k.attachments=d);const I=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(k)});if(!I.ok){const v=await I.json();throw new Error("Resend API error: "+JSON.stringify(v))}const b=await I.json();return console.log("✅ Email sent successfully:",b),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{customerEmail:r.customerEmail,installDate:r.installDate,vehicleVin:r.vehicleVin,photosCount:Object.keys(r.photos||{}).length,emailId:b.id}})}catch(d){return console.error("❌ Email sending error:",d),e.json({success:!1,error:"Failed to send email",details:d.message||"Unknown email error",debug:{apiKeyExists:!!n,apiKeyValid:n!=="your_resend_api_key_here",fromEmail:o,toEmail:r.customerEmail}},500)}}catch(r){return console.error("❌ Submit error:",r),e.json({success:!1,error:r.message||"Failed to submit checklist",stack:r.stack},500)}});const Ke=new ft,ts=Object.assign({"/src/index.tsx":De});let gt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),gt=!0);if(!gt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
