var xt=Object.defineProperty;var Be=e=>{throw TypeError(e)};var yt=(e,t,s)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>yt(e,typeof t!="symbol"?t+"":t,s),Le=(e,t,s)=>t.has(e)||Be("Cannot "+s);var o=(e,t,s)=>(Le(e,t,"read from private field"),s?s.call(e):t.get(e)),p=(e,t,s)=>t.has(e)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),f=(e,t,s,n)=>(Le(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),x=(e,t,s)=>(Le(e,t,"access private method"),s);var Ue=(e,t,s,n)=>({set _(r){f(e,t,r,s)},get _(){return o(e,t,n)}});var qe=(e,t,s)=>(n,r)=>{let i=-1;return a(0);async function a(d){if(d<=i)throw new Error("next() called multiple times");i=d;let l,c=!1,h;if(e[d]?(h=e[d][0][0],n.req.routeIndex=d):h=d===e.length&&r||void 0,h)try{l=await h(n,()=>a(d+1))}catch(u){if(u instanceof Error&&t)n.error=u,l=await t(u,n),c=!0;else throw u}else n.finalized===!1&&s&&(l=await s(n));return l&&(n.finalized===!1||c)&&(n.res=l),n}},bt=Symbol(),vt=async(e,t=Object.create(null))=>{const{all:s=!1,dot:n=!1}=t,i=(e instanceof rt?e.raw.headers:e.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?wt(e,{all:s,dot:n}):{}};async function wt(e,t){const s=await e.formData();return s?Et(s,t):{}}function Et(e,t){const s=Object.create(null);return e.forEach((n,r)=>{t.all||r.endsWith("[]")?kt(s,r,n):s[r]=n}),t.dot&&Object.entries(s).forEach(([n,r])=>{n.includes(".")&&(Rt(s,n,r),delete s[n])}),s}var kt=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Rt=(e,t,s)=>{let n=e;const r=t.split(".");r.forEach((i,a)=>{a===r.length-1?n[i]=s:((!n[i]||typeof n[i]!="object"||Array.isArray(n[i])||n[i]instanceof File)&&(n[i]=Object.create(null)),n=n[i])})},Ze=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},It=e=>{const{groups:t,path:s}=St(e),n=Ze(s);return Ct(n,t)},St=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,n)=>{const r=`@${n}`;return t.push([r,s]),r}),{groups:t,path:e}},Ct=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[n]=t[s];for(let r=e.length-1;r>=0;r--)if(e[r].includes(n)){e[r]=e[r].replace(n,t[s][1]);break}}return e},Re={},jt=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const n=`${e}#${t}`;return Re[n]||(s[2]?Re[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Re[n]=[e,s[1],!0]),Re[n]}return null},Te=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Ot=e=>Te(e,decodeURI),et=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let n=s;for(;n<t.length;n++){const r=t.charCodeAt(n);if(r===37){const i=t.indexOf("?",n),a=t.slice(s,i===-1?void 0:i);return Ot(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(r===63)break}return t.slice(s,n)},Dt=e=>{const t=et(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},re=(e,t,...s)=>(s.length&&(t=re(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let n="";return t.forEach(r=>{if(r!==""&&!/\:/.test(r))n+="/"+r;else if(/\:/.test(r))if(/\?/.test(r)){s.length===0&&n===""?s.push("/"):s.push(n);const i=r.replace("?","");n+="/"+i,s.push(n)}else n+="/"+r}),s.filter((r,i,a)=>a.indexOf(r)===i)},He=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Te(e,nt):e):e,st=(e,t,s)=>{let n;if(!s&&t&&!/[%+]/.test(t)){let a=e.indexOf("?",8);if(a===-1)return;for(e.startsWith(t,a+1)||(a=e.indexOf(`&${t}`,a+1));a!==-1;){const d=e.charCodeAt(a+t.length+1);if(d===61){const l=a+t.length+2,c=e.indexOf("&",l);return He(e.slice(l,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";a=e.indexOf(`&${t}`,a+1)}if(n=/[%+]/.test(e),!n)return}const r={};n??(n=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const a=e.indexOf("&",i+1);let d=e.indexOf("=",i);d>a&&a!==-1&&(d=-1);let l=e.slice(i+1,d===-1?a===-1?void 0:a:d);if(n&&(l=He(l)),i=a,l==="")continue;let c;d===-1?c="":(c=e.slice(d+1,a===-1?void 0:a),n&&(c=He(c))),s?(r[l]&&Array.isArray(r[l])||(r[l]=[]),r[l].push(c)):r[l]??(r[l]=c)}return t?r[t]:r},Pt=st,At=(e,t)=>st(e,t,!0),nt=decodeURIComponent,Fe=e=>Te(e,nt),ae,O,M,it,ot,_e,q,We,rt=(We=class{constructor(e,t="/",s=[[]]){p(this,M);g(this,"raw");p(this,ae);p(this,O);g(this,"routeIndex",0);g(this,"path");g(this,"bodyCache",{});p(this,q,e=>{const{bodyCache:t,raw:s}=this,n=t[e];if(n)return n;const r=Object.keys(t)[0];return r?t[r].then(i=>(r==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,f(this,O,s),f(this,ae,{})}param(e){return e?x(this,M,it).call(this,e):x(this,M,ot).call(this)}query(e){return Pt(this.url,e)}queries(e){return At(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,n)=>{t[n]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await vt(this,e))}json(){return o(this,q).call(this,"text").then(e=>JSON.parse(e))}text(){return o(this,q).call(this,"text")}arrayBuffer(){return o(this,q).call(this,"arrayBuffer")}blob(){return o(this,q).call(this,"blob")}formData(){return o(this,q).call(this,"formData")}addValidatedData(e,t){o(this,ae)[e]=t}valid(e){return o(this,ae)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[bt](){return o(this,O)}get matchedRoutes(){return o(this,O)[0].map(([[,e]])=>e)}get routePath(){return o(this,O)[0].map(([[,e]])=>e)[this.routeIndex].path}},ae=new WeakMap,O=new WeakMap,M=new WeakSet,it=function(e){const t=o(this,O)[0][this.routeIndex][1][e],s=x(this,M,_e).call(this,t);return s&&/\%/.test(s)?Fe(s):s},ot=function(){const e={},t=Object.keys(o(this,O)[0][this.routeIndex][1]);for(const s of t){const n=x(this,M,_e).call(this,o(this,O)[0][this.routeIndex][1][s]);n!==void 0&&(e[s]=/\%/.test(n)?Fe(n):n)}return e},_e=function(e){return o(this,O)[1]?o(this,O)[1][e]:e},q=new WeakMap,We),$t={Stringify:1},at=async(e,t,s,n,r)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const i=e.callbacks;return i!=null&&i.length?(r?r[0]+=e:r=[e],Promise.all(i.map(d=>d({phase:t,buffer:r,context:n}))).then(d=>Promise.all(d.filter(Boolean).map(l=>at(l,t,!1,n,r))).then(()=>r[0]))):Promise.resolve(e)},Lt="text/plain; charset=UTF-8",Ne=(e,t)=>({"Content-Type":e,...t}),ye,be,H,ce,N,S,ve,le,de,Y,we,Ee,F,ie,Xe,Ht=(Xe=class{constructor(e,t){p(this,F);p(this,ye);p(this,be);g(this,"env",{});p(this,H);g(this,"finalized",!1);g(this,"error");p(this,ce);p(this,N);p(this,S);p(this,ve);p(this,le);p(this,de);p(this,Y);p(this,we);p(this,Ee);g(this,"render",(...e)=>(o(this,le)??f(this,le,t=>this.html(t)),o(this,le).call(this,...e)));g(this,"setLayout",e=>f(this,ve,e));g(this,"getLayout",()=>o(this,ve));g(this,"setRenderer",e=>{f(this,le,e)});g(this,"header",(e,t,s)=>{this.finalized&&f(this,S,new Response(o(this,S).body,o(this,S)));const n=o(this,S)?o(this,S).headers:o(this,Y)??f(this,Y,new Headers);t===void 0?n.delete(e):s!=null&&s.append?n.append(e,t):n.set(e,t)});g(this,"status",e=>{f(this,ce,e)});g(this,"set",(e,t)=>{o(this,H)??f(this,H,new Map),o(this,H).set(e,t)});g(this,"get",e=>o(this,H)?o(this,H).get(e):void 0);g(this,"newResponse",(...e)=>x(this,F,ie).call(this,...e));g(this,"body",(e,t,s)=>x(this,F,ie).call(this,e,t,s));g(this,"text",(e,t,s)=>!o(this,Y)&&!o(this,ce)&&!t&&!s&&!this.finalized?new Response(e):x(this,F,ie).call(this,e,t,Ne(Lt,s)));g(this,"json",(e,t,s)=>x(this,F,ie).call(this,JSON.stringify(e),t,Ne("application/json",s)));g(this,"html",(e,t,s)=>{const n=r=>x(this,F,ie).call(this,r,t,Ne("text/html; charset=UTF-8",s));return typeof e=="object"?at(e,$t.Stringify,!1,{}).then(n):n(e)});g(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});g(this,"notFound",()=>(o(this,de)??f(this,de,()=>new Response),o(this,de).call(this,this)));f(this,ye,e),t&&(f(this,N,t.executionCtx),this.env=t.env,f(this,de,t.notFoundHandler),f(this,Ee,t.path),f(this,we,t.matchResult))}get req(){return o(this,be)??f(this,be,new rt(o(this,ye),o(this,Ee),o(this,we))),o(this,be)}get event(){if(o(this,N)&&"respondWith"in o(this,N))return o(this,N);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,N))return o(this,N);throw Error("This context has no ExecutionContext")}get res(){return o(this,S)||f(this,S,new Response(null,{headers:o(this,Y)??f(this,Y,new Headers)}))}set res(e){if(o(this,S)&&e){e=new Response(e.body,e);for(const[t,s]of o(this,S).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=o(this,S).headers.getSetCookie();e.headers.delete("set-cookie");for(const r of n)e.headers.append("set-cookie",r)}else e.headers.set(t,s)}f(this,S,e),this.finalized=!0}get var(){return o(this,H)?Object.fromEntries(o(this,H)):{}}},ye=new WeakMap,be=new WeakMap,H=new WeakMap,ce=new WeakMap,N=new WeakMap,S=new WeakMap,ve=new WeakMap,le=new WeakMap,de=new WeakMap,Y=new WeakMap,we=new WeakMap,Ee=new WeakMap,F=new WeakSet,ie=function(e,t,s){const n=o(this,S)?new Headers(o(this,S).headers):o(this,Y)??new Headers;if(typeof t=="object"&&"headers"in t){const i=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[a,d]of i)a.toLowerCase()==="set-cookie"?n.append(a,d):n.set(a,d)}if(s)for(const[i,a]of Object.entries(s))if(typeof a=="string")n.set(i,a);else{n.delete(i);for(const d of a)n.append(i,d)}const r=typeof t=="number"?t:(t==null?void 0:t.status)??o(this,ce);return new Response(e,{status:r,headers:n})},Xe),w="ALL",Nt="all",_t=["get","post","put","delete","options","patch"],ct="Can not add a route since the matcher is already built.",lt=class extends Error{},Tt="__COMPOSED_HANDLER",Mt=e=>e.text("404 Not Found",404),ze=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},D,E,dt,P,X,Ie,Se,he,Bt=(he=class{constructor(t={}){p(this,E);g(this,"get");g(this,"post");g(this,"put");g(this,"delete");g(this,"options");g(this,"patch");g(this,"all");g(this,"on");g(this,"use");g(this,"router");g(this,"getPath");g(this,"_basePath","/");p(this,D,"/");g(this,"routes",[]);p(this,P,Mt);g(this,"errorHandler",ze);g(this,"onError",t=>(this.errorHandler=t,this));g(this,"notFound",t=>(f(this,P,t),this));g(this,"fetch",(t,...s)=>x(this,E,Se).call(this,t,s[1],s[0],t.method));g(this,"request",(t,s,n,r)=>t instanceof Request?this.fetch(s?new Request(t,s):t,n,r):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${re("/",t)}`,s),n,r)));g(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(x(this,E,Se).call(this,t.request,t,void 0,t.request.method))})});[..._t,Nt].forEach(i=>{this[i]=(a,...d)=>(typeof a=="string"?f(this,D,a):x(this,E,X).call(this,i,o(this,D),a),d.forEach(l=>{x(this,E,X).call(this,i,o(this,D),l)}),this)}),this.on=(i,a,...d)=>{for(const l of[a].flat()){f(this,D,l);for(const c of[i].flat())d.map(h=>{x(this,E,X).call(this,c.toUpperCase(),o(this,D),h)})}return this},this.use=(i,...a)=>(typeof i=="string"?f(this,D,i):(f(this,D,"*"),a.unshift(i)),a.forEach(d=>{x(this,E,X).call(this,w,o(this,D),d)}),this);const{strict:n,...r}=t;Object.assign(this,r),this.getPath=n??!0?t.getPath??et:Dt}route(t,s){const n=this.basePath(t);return s.routes.map(r=>{var a;let i;s.errorHandler===ze?i=r.handler:(i=async(d,l)=>(await qe([],s.errorHandler)(d,()=>r.handler(d,l))).res,i[Tt]=r.handler),x(a=n,E,X).call(a,r.method,r.path,i)}),this}basePath(t){const s=x(this,E,dt).call(this);return s._basePath=re(this._basePath,t),s}mount(t,s,n){let r,i;n&&(typeof n=="function"?i=n:(i=n.optionHandler,n.replaceRequest===!1?r=l=>l:r=n.replaceRequest));const a=i?l=>{const c=i(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};r||(r=(()=>{const l=re(this._basePath,t),c=l==="/"?0:l.length;return h=>{const u=new URL(h.url);return u.pathname=u.pathname.slice(c)||"/",new Request(u,h)}})());const d=async(l,c)=>{const h=await s(r(l.req.raw),...a(l));if(h)return h;await c()};return x(this,E,X).call(this,w,re(t,"*"),d),this}},D=new WeakMap,E=new WeakSet,dt=function(){const t=new he({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,f(t,P,o(this,P)),t.routes=this.routes,t},P=new WeakMap,X=function(t,s,n){t=t.toUpperCase(),s=re(this._basePath,s);const r={basePath:this._basePath,path:s,method:t,handler:n};this.router.add(t,s,[n,r]),this.routes.push(r)},Ie=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Se=function(t,s,n,r){if(r==="HEAD")return(async()=>new Response(null,await x(this,E,Se).call(this,t,s,n,"GET")))();const i=this.getPath(t,{env:n}),a=this.router.match(r,i),d=new Ht(t,{path:i,matchResult:a,env:n,executionCtx:s,notFoundHandler:o(this,P)});if(a[0].length===1){let c;try{c=a[0][0][0][0](d,async()=>{d.res=await o(this,P).call(this,d)})}catch(h){return x(this,E,Ie).call(this,h,d)}return c instanceof Promise?c.then(h=>h||(d.finalized?d.res:o(this,P).call(this,d))).catch(h=>x(this,E,Ie).call(this,h,d)):c??o(this,P).call(this,d)}const l=qe(a[0],this.errorHandler,o(this,P));return(async()=>{try{const c=await l(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return x(this,E,Ie).call(this,c,d)}})()},he),ht=[];function Ut(e,t){const s=this.buildAllMatchers(),n=((r,i)=>{const a=s[r]||s[w],d=a[2][i];if(d)return d;const l=i.match(a[0]);if(!l)return[[],ht];const c=l.indexOf("",1);return[a[1][c],l]});return this.match=n,n(e,t)}var je="[^/]+",me=".*",xe="(?:|/.*)",oe=Symbol(),qt=new Set(".\\+*[^]$()");function Ft(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===me||e===xe?1:t===me||t===xe?-1:e===je?1:t===je?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var J,Q,A,te,zt=(te=class{constructor(){p(this,J);p(this,Q);p(this,A,Object.create(null))}insert(t,s,n,r,i){if(t.length===0){if(o(this,J)!==void 0)throw oe;if(i)return;f(this,J,s);return}const[a,...d]=t,l=a==="*"?d.length===0?["","",me]:["","",je]:a==="/*"?["","",xe]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const h=l[1];let u=l[2]||je;if(h&&l[2]&&(u===".*"||(u=u.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(u))))throw oe;if(c=o(this,A)[u],!c){if(Object.keys(o(this,A)).some(m=>m!==me&&m!==xe))throw oe;if(i)return;c=o(this,A)[u]=new te,h!==""&&f(c,Q,r.varIndex++)}!i&&h!==""&&n.push([h,o(c,Q)])}else if(c=o(this,A)[a],!c){if(Object.keys(o(this,A)).some(h=>h.length>1&&h!==me&&h!==xe))throw oe;if(i)return;c=o(this,A)[a]=new te}c.insert(d,s,n,r,i)}buildRegExpStr(){const s=Object.keys(o(this,A)).sort(Ft).map(n=>{const r=o(this,A)[n];return(typeof o(r,Q)=="number"?`(${n})@${o(r,Q)}`:qt.has(n)?`\\${n}`:n)+r.buildRegExpStr()});return typeof o(this,J)=="number"&&s.unshift(`#${o(this,J)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},J=new WeakMap,Q=new WeakMap,A=new WeakMap,te),Oe,ke,Ge,Vt=(Ge=class{constructor(){p(this,Oe,{varIndex:0});p(this,ke,new zt)}insert(e,t,s){const n=[],r=[];for(let a=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return r[a]=[c,l],a++,d=!0,c}),!d)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=r.length-1;a>=0;a--){const[d]=r[a];for(let l=i.length-1;l>=0;l--)if(i[l].indexOf(d)!==-1){i[l]=i[l].replace(d,r[a][1]);break}}return o(this,ke).insert(i,t,n,o(this,Oe),s),n}buildRegExp(){let e=o(this,ke).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(r,i,a)=>i!==void 0?(s[++t]=Number(i),"$()"):(a!==void 0&&(n[Number(a)]=++t),"")),[new RegExp(`^${e}`),s,n]}},Oe=new WeakMap,ke=new WeakMap,Ge),Kt=[/^$/,[],Object.create(null)],Ce=Object.create(null);function ut(e){return Ce[e]??(Ce[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Wt(){Ce=Object.create(null)}function Xt(e){var c;const t=new Vt,s=[];if(e.length===0)return Kt;const n=e.map(h=>[!/\*|\/:/.test(h[0]),...h]).sort(([h,u],[m,b])=>h?1:m?-1:u.length-b.length),r=Object.create(null);for(let h=0,u=-1,m=n.length;h<m;h++){const[b,k,C]=n[h];b?r[k]=[C.map(([v])=>[v,Object.create(null)]),ht]:u++;let y;try{y=t.insert(k,u,b)}catch(v){throw v===oe?new lt(k):v}b||(s[u]=C.map(([v,$])=>{const B=Object.create(null);for($-=1;$>=0;$--){const[se,j]=y[$];B[se]=j}return[v,B]}))}const[i,a,d]=t.buildRegExp();for(let h=0,u=s.length;h<u;h++)for(let m=0,b=s[h].length;m<b;m++){const k=(c=s[h][m])==null?void 0:c[1];if(!k)continue;const C=Object.keys(k);for(let y=0,v=C.length;y<v;y++)k[C[y]]=d[k[C[y]]]}const l=[];for(const h in a)l[h]=s[a[h]];return[i,l,r]}function ne(e,t){if(e){for(const s of Object.keys(e).sort((n,r)=>r.length-n.length))if(ut(s).test(t))return[...e[s]]}}var z,V,De,ft,Ye,Gt=(Ye=class{constructor(){p(this,De);g(this,"name","RegExpRouter");p(this,z);p(this,V);g(this,"match",Ut);f(this,z,{[w]:Object.create(null)}),f(this,V,{[w]:Object.create(null)})}add(e,t,s){var d;const n=o(this,z),r=o(this,V);if(!n||!r)throw new Error(ct);n[e]||[n,r].forEach(l=>{l[e]=Object.create(null),Object.keys(l[w]).forEach(c=>{l[e][c]=[...l[w][c]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ut(t);e===w?Object.keys(n).forEach(c=>{var h;(h=n[c])[t]||(h[t]=ne(n[c],t)||ne(n[w],t)||[])}):(d=n[e])[t]||(d[t]=ne(n[e],t)||ne(n[w],t)||[]),Object.keys(n).forEach(c=>{(e===w||e===c)&&Object.keys(n[c]).forEach(h=>{l.test(h)&&n[c][h].push([s,i])})}),Object.keys(r).forEach(c=>{(e===w||e===c)&&Object.keys(r[c]).forEach(h=>l.test(h)&&r[c][h].push([s,i]))});return}const a=tt(t)||[t];for(let l=0,c=a.length;l<c;l++){const h=a[l];Object.keys(r).forEach(u=>{var m;(e===w||e===u)&&((m=r[u])[h]||(m[h]=[...ne(n[u],h)||ne(n[w],h)||[]]),r[u][h].push([s,i-c+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(o(this,V)).concat(Object.keys(o(this,z))).forEach(t=>{e[t]||(e[t]=x(this,De,ft).call(this,t))}),f(this,z,f(this,V,void 0)),Wt(),e}},z=new WeakMap,V=new WeakMap,De=new WeakSet,ft=function(e){const t=[];let s=e===w;return[o(this,z),o(this,V)].forEach(n=>{const r=n[e]?Object.keys(n[e]).map(i=>[i,n[e][i]]):[];r.length!==0?(s||(s=!0),t.push(...r)):e!==w&&t.push(...Object.keys(n[w]).map(i=>[i,n[w][i]]))}),s?Xt(t):null},Ye),K,_,Je,Yt=(Je=class{constructor(e){g(this,"name","SmartRouter");p(this,K,[]);p(this,_,[]);f(this,K,e.routers)}add(e,t,s){if(!o(this,_))throw new Error(ct);o(this,_).push([e,t,s])}match(e,t){if(!o(this,_))throw new Error("Fatal error");const s=o(this,K),n=o(this,_),r=s.length;let i=0,a;for(;i<r;i++){const d=s[i];try{for(let l=0,c=n.length;l<c;l++)d.add(...n[l]);a=d.match(e,t)}catch(l){if(l instanceof lt)continue;throw l}this.match=d.match.bind(d),f(this,K,[d]),f(this,_,void 0);break}if(i===r)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(o(this,_)||o(this,K).length!==1)throw new Error("No active router has been determined yet.");return o(this,K)[0]}},K=new WeakMap,_=new WeakMap,Je),pe=Object.create(null),W,I,Z,ue,R,T,G,fe,Jt=(fe=class{constructor(t,s,n){p(this,T);p(this,W);p(this,I);p(this,Z);p(this,ue,0);p(this,R,pe);if(f(this,I,n||Object.create(null)),f(this,W,[]),t&&s){const r=Object.create(null);r[t]={handler:s,possibleKeys:[],score:0},f(this,W,[r])}f(this,Z,[])}insert(t,s,n){f(this,ue,++Ue(this,ue)._);let r=this;const i=It(s),a=[];for(let d=0,l=i.length;d<l;d++){const c=i[d],h=i[d+1],u=jt(c,h),m=Array.isArray(u)?u[0]:c;if(m in o(r,I)){r=o(r,I)[m],u&&a.push(u[1]);continue}o(r,I)[m]=new fe,u&&(o(r,Z).push(u),a.push(u[1])),r=o(r,I)[m]}return o(r,W).push({[t]:{handler:n,possibleKeys:a.filter((d,l,c)=>c.indexOf(d)===l),score:o(this,ue)}}),r}search(t,s){var l;const n=[];f(this,R,pe);let i=[this];const a=Ze(s),d=[];for(let c=0,h=a.length;c<h;c++){const u=a[c],m=c===h-1,b=[];for(let k=0,C=i.length;k<C;k++){const y=i[k],v=o(y,I)[u];v&&(f(v,R,o(y,R)),m?(o(v,I)["*"]&&n.push(...x(this,T,G).call(this,o(v,I)["*"],t,o(y,R))),n.push(...x(this,T,G).call(this,v,t,o(y,R)))):b.push(v));for(let $=0,B=o(y,Z).length;$<B;$++){const se=o(y,Z)[$],j=o(y,R)===pe?{}:{...o(y,R)};if(se==="*"){const U=o(y,I)["*"];U&&(n.push(...x(this,T,G).call(this,U,t,o(y,R))),f(U,R,j),b.push(U));continue}const[Ae,Me,ge]=se;if(!u&&!(ge instanceof RegExp))continue;const L=o(y,I)[Ae],mt=a.slice(c).join("/");if(ge instanceof RegExp){const U=ge.exec(mt);if(U){if(j[Me]=U[0],n.push(...x(this,T,G).call(this,L,t,o(y,R),j)),Object.keys(o(L,I)).length){f(L,R,j);const $e=((l=U[0].match(/\//))==null?void 0:l.length)??0;(d[$e]||(d[$e]=[])).push(L)}continue}}(ge===!0||ge.test(u))&&(j[Me]=u,m?(n.push(...x(this,T,G).call(this,L,t,j,o(y,R))),o(L,I)["*"]&&n.push(...x(this,T,G).call(this,o(L,I)["*"],t,j,o(y,R)))):(f(L,R,j),b.push(L)))}}i=b.concat(d.shift()??[])}return n.length>1&&n.sort((c,h)=>c.score-h.score),[n.map(({handler:c,params:h})=>[c,h])]}},W=new WeakMap,I=new WeakMap,Z=new WeakMap,ue=new WeakMap,R=new WeakMap,T=new WeakSet,G=function(t,s,n,r){const i=[];for(let a=0,d=o(t,W).length;a<d;a++){const l=o(t,W)[a],c=l[s]||l[w],h={};if(c!==void 0&&(c.params=Object.create(null),i.push(c),n!==pe||r&&r!==pe))for(let u=0,m=c.possibleKeys.length;u<m;u++){const b=c.possibleKeys[u],k=h[c.score];c.params[b]=r!=null&&r[b]&&!k?r[b]:n[b]??(r==null?void 0:r[b]),h[c.score]=!0}}return i},fe),ee,Qe,Qt=(Qe=class{constructor(){g(this,"name","TrieRouter");p(this,ee);f(this,ee,new Jt)}add(e,t,s){const n=tt(t);if(n){for(let r=0,i=n.length;r<i;r++)o(this,ee).insert(e,n[r],s);return}o(this,ee).insert(e,t,s)}match(e,t){return o(this,ee).search(e,t)}},ee=new WeakMap,Qe),gt=class extends Bt{constructor(e={}){super(e),this.router=e.router??new Yt({routers:[new Gt,new Qt]})}},Zt=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(i=>typeof i=="string"?i==="*"?()=>i:a=>i===a?a:null:typeof i=="function"?i:a=>i.includes(a)?a:null)(s.origin),r=(i=>typeof i=="function"?i:Array.isArray(i)?()=>i:()=>[])(s.allowMethods);return async function(a,d){var h;function l(u,m){a.res.headers.set(u,m)}const c=await n(a.req.header("origin")||"",a);if(c&&l("Access-Control-Allow-Origin",c),s.credentials&&l("Access-Control-Allow-Credentials","true"),(h=s.exposeHeaders)!=null&&h.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),a.req.method==="OPTIONS"){s.origin!=="*"&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const u=await r(a.req.header("origin")||"",a);u.length&&l("Access-Control-Allow-Methods",u.join(","));let m=s.allowHeaders;if(!(m!=null&&m.length)){const b=a.req.header("Access-Control-Request-Headers");b&&(m=b.split(/\s*,\s*/))}return m!=null&&m.length&&(l("Access-Control-Allow-Headers",m.join(",")),a.res.headers.append("Vary","Access-Control-Request-Headers")),a.res.headers.delete("Content-Length"),a.res.headers.delete("Content-Type"),new Response(null,{headers:a.res.headers,status:204,statusText:"No Content"})}await d(),s.origin!=="*"&&a.header("Vary","Origin",{append:!0})}};const Ve=[{title:"차바닥",items:["외관, 표면","고정볼트","테두리고정 및 마감","소음"]},{title:"격벽타공판",items:["외관, 표면, 도장, 로고","고정볼트","테두리고정 및 마감"]},{title:"격벽 2단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"부품 3단 선반",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]},{title:"워크스페이스",items:["프레임 및 트레이 외관","선반높이, 수평","프레임 상·하단 볼트 고정","소음"]}];function es(e){const t=Object.values(e.checklist).reduce((r,i)=>r+Object.values(i).filter(a=>a).length,0),s=Ve.reduce((r,i)=>r+i.items.length,0);let n="";return Ve.forEach((r,i)=>{n+='<div style="margin:20px 0;"><h3 style="background:#2c5aa0;color:white;padding:10px;border-radius:5px;">'+r.title+'</h3><table style="width:100%;border-collapse:collapse;">',r.items.forEach((a,d)=>{var h;const l=((h=e.checklist[i])==null?void 0:h[d])||!1;n+='<tr style="border-bottom:1px solid #ddd;"><td style="padding:10px;">'+a+'</td><td style="padding:10px;text-align:center;font-size:20px;">'+(l?"✅":"⬜")+"</td></tr>";const c=i+"-"+d;e.photos[c]&&(n+='<tr style="background:#f5f7fa;"><td colspan="2" style="padding:10px;"><img src="cid:photo_'+c+'" style="max-width:400px;max-height:300px;border-radius:8px;" alt="사진 '+c+'"></td></tr>')}),n+="</table></div>"}),'<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#f5f5f5}.container{background:white;padding:30px;border-radius:10px}img{display:block;margin:10px auto;}</style></head><body><div class="container"><h1 style="color:#2c5aa0;text-align:center;">케이밴 제품 시공 점검표</h1><div style="background:#f5f7fa;padding:15px;margin:20px 0;border-left:4px solid #2c5aa0;"><p><strong>시공일자:</strong> '+e.installDate+"</p><p><strong>차대번호:</strong> "+e.vehicleVin+"</p><p><strong>제품명:</strong> "+e.productName+"</p><p><strong>구성:</strong> "+e.productConfig+'</p></div><div style="background:#e8eef5;padding:20px;text-align:center;margin:20px 0;"><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+t+"/"+s+'</div><div style="font-size:12px;color:#666;">점검 완료</div></div><div style="display:inline-block;margin:0 20px;"><div style="font-size:32px;font-weight:bold;color:#2c5aa0;">'+Object.keys(e.photos).length+'</div><div style="font-size:12px;color:#666;">첨부 사진</div></div></div>'+n+'<div style="margin-top:30px;"><h3 style="color:#2c5aa0;">서명란</h3><table style="width:100%;border:2px solid #2c5aa0;border-collapse:collapse;"><tr style="background:#2c5aa0;color:white;"><th style="padding:12px;">구분</th><th style="padding:12px;">성명</th><th style="padding:12px;">서명</th></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>시공자</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.installerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:installer_signature" style="max-width:200px;max-height:80px;" alt="시공자 서명"></td></tr><tr><td style="padding:15px;border:1px solid #ddd;text-align:center;"><strong>고객</strong></td><td style="padding:15px;border:1px solid #ddd;text-align:center;">'+e.customerName+'</td><td style="padding:15px;border:1px solid #ddd;text-align:center;"><img src="cid:customer_signature" style="max-width:200px;max-height:80px;" alt="고객 서명"></td></tr></table></div><div style="margin-top:30px;padding:20px;background:#f9f9f9;border-radius:5px;"><p style="color:#666;font-size:12px;margin:5px 0;">본 점검표는 시공 완료 후 모든 항목 확인 및 쌍방 서명 후 보관됩니다.</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>A/S 보증기간:</strong> 3년 또는 6만km (선도래 기준)</p><p style="color:#666;font-size:12px;margin:5px 0;"><strong>케이밴 경북지사</strong> | 전화: 053-XXX-XXXX | 이메일: support@kvan.com</p><p style="color:#999;font-size:10px;margin:10px 0 0 0;">© 2026 케이밴 All Rights Reserved</p></div></div></body></html>'}const Pe=new gt;Pe.use("/api/*",Zt());Pe.get("/",e=>e.html(`
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
  `));Pe.post("/api/submit",async e=>{var t,s;try{const n=await e.req.json();console.log("📝 Received checklist submission"),console.log("Customer Email:",n.customerEmail),console.log("Photos count:",Object.keys(n.photos||{}).length),console.log("Photos keys:",Object.keys(n.photos||{})),console.log("Installer signature length:",((t=n.installerSignature)==null?void 0:t.length)||0),console.log("Customer signature length:",((s=n.customerSignature)==null?void 0:s.length)||0);const{RESEND_API_KEY:r,FROM_EMAIL:i,FROM_NAME:a}=e.env;if(!r||r==="your_resend_api_key_here")return console.warn("⚠️  Resend API key not configured"),e.json({success:!1,error:"Email service not configured. Please set RESEND_API_KEY in environment variables.",debug:{message:"API key missing or using default value",photosCount:Object.keys(n.photos||{}).length,customerEmail:n.customerEmail,hint:"Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets"}},503);try{console.log("📧 Generating email HTML with photos...");const d=[];Object.entries(n.photos||{}).forEach(([v,$])=>{const B=$.match(/^data:([^;]+);base64,(.+)$/);if(B){const se=B[1],j=B[2],Ae=se.split("/")[1]||"jpg";d.push({filename:`photo_${v}.${Ae}`,content:j,content_id:`photo_${v}`,disposition:"inline"})}});const l=n.installerSignature.match(/^data:([^;]+);base64,(.+)$/);l&&d.push({filename:"installer_signature.png",content:l[2],content_id:"installer_signature",disposition:"inline"});const c=n.customerSignature.match(/^data:([^;]+);base64,(.+)$/);c&&d.push({filename:"customer_signature.png",content:c[2],content_id:"customer_signature",disposition:"inline"});const h=es(n);console.log("✅ Email HTML generated with",d.length,"attachments"),console.log("📤 Sending email via Resend REST API...");const u=a||"케이밴 경북지사",m=i||"noreply@yourdomain.com",b="케이밴 제품 시공 점검표 - "+n.vehicleVin,k={from:u+" <"+m+">",to:[n.customerEmail],subject:b,html:h};d.length>0&&(k.attachments=d);const C=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"},body:JSON.stringify(k)});if(!C.ok){const v=await C.json();throw new Error("Resend API error: "+JSON.stringify(v))}const y=await C.json();return console.log("✅ Email sent successfully:",y),e.json({success:!0,message:"Checklist submitted and email sent successfully",data:{customerEmail:n.customerEmail,installDate:n.installDate,vehicleVin:n.vehicleVin,photosCount:Object.keys(n.photos||{}).length,emailId:y.id}})}catch(d){return console.error("❌ Email sending error:",d),e.json({success:!1,error:"Failed to send email",details:d.message||"Unknown email error",debug:{apiKeyExists:!!r,apiKeyValid:r!=="your_resend_api_key_here",fromEmail:i,toEmail:n.customerEmail}},500)}}catch(n){return console.error("❌ Submit error:",n),e.json({success:!1,error:n.message||"Failed to submit checklist",stack:n.stack},500)}});const Ke=new gt,ts=Object.assign({"/src/index.tsx":Pe});let pt=!1;for(const[,e]of Object.entries(ts))e&&(Ke.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ke.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),pt=!0);if(!pt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ke as default};
