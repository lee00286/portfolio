(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{1383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(2158);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},528:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2158),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},879:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let r=n(4511);function o(e){return(0,r.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(6927),o=r._(n(6006)),a=n(4268),u=n(4490),i=n(2433),l=n(4750),c=n(1383),s=n(3645),f=n(3093),d=n(6566),p=n(528),h=n(5884),m=n(874),y=new Set;function g(e,t,n,r,o,a){if(!a&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(y.has(a))return;y.add(a)}let i=a?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:i,as:y,children:v,prefetch:_=null,passHref:j,replace:P,shallow:x,scroll:O,locale:R,onClick:k,onMouseEnter:C,onTouchStart:E,legacyBehavior:M=!1,...S}=e;n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let N=o.default.useContext(s.RouterContext),w=o.default.useContext(f.AppRouterContext),I=null!=N?N:w,L=!N,T=!1!==_,U=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:A,as:B}=o.default.useMemo(()=>{if(!N){let e=b(i);return{href:e,as:y?b(y):e}}let[e,t]=(0,a.resolveHref)(N,i,!0);return{href:e,as:y?(0,a.resolveHref)(N,y):t||e}},[N,i,y]),z=o.default.useRef(A),D=o.default.useRef(B);M&&(r=o.default.Children.only(n));let q=M?r&&"object"==typeof r&&r.ref:t,[W,K,$]=(0,d.useIntersection)({rootMargin:"200px"}),F=o.default.useCallback(e=>{(D.current!==B||z.current!==A)&&($(),D.current=B,z.current=A),W(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[B,q,A,$,W]);o.default.useEffect(()=>{I&&K&&T&&g(I,A,B,{locale:R},{kind:U},L)},[B,A,K,R,T,null==N?void 0:N.locale,I,L,U]);let H={ref:F,onClick(e){M||"function"!=typeof k||k(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,a,i,l,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let h=()=>{let e=null==l||l;"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:e}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};s?o.default.startTransition(h):h()}(e,I,A,B,P,x,O,R,L,T)},onMouseEnter(e){M||"function"!=typeof C||C(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(T||!L)&&g(I,A,B,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart(e){M||"function"!=typeof E||E(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(T||!L)&&g(I,A,B,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,l.isAbsoluteUrl)(B))H.href=B;else if(!M||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==R?R:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(B,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);H.href=t||(0,h.addBasePath)((0,c.addLocale)(B,e,null==N?void 0:N.defaultLocale))}return M?o.default.cloneElement(r,H):o.default.createElement("a",{...S,...H},n)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9995:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(6006),o=n(9995),a="function"==typeof IntersectionObserver,u=new Map,i=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,c=l||!a,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(a){if(c||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},i.push(n),u.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[p,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7962:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},3645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return a}});let r=n(6927),o=r._(n(6006)),a=o.default.createContext(null)},2433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},urlObjectKeys:function(){return i},formatWithValidation:function(){return l}});let r=n(5909),o=r._(n(8469)),a=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,r=e.protocol||"",u=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let s=e.search||l&&"?"+l||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==c?(c="//"+(c||""),u&&"/"!==u[0]&&(u="/"+u)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),s&&"?"!==s[0]&&(s="?"+s),""+r+c+(u=u.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+i}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},9300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let r=n(6692),o=n(6167);function a(e,t,n){let a="",u=(0,o.getRouteRegex)(e),i=u.groups,l=(t!==e?(0,r.getRouteMatcher)(u)(t):"")||n;a=e;let c=Object.keys(i);return c.every(e=>{let t=l[e]||"",{repeat:n,optional:r}=i[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in l)&&(a=a.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:c,result:a}}},5726:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});let n=/\/\[[^/]+?\](?=\/|$)/;function r(e){return n.test(e)}},4490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=n(4750),o=n(879);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},7798:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},4511:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let r=n(8169);function o(e,t){if("string"!=typeof e)return!1;let{pathname:n}=(0,r.parsePath)(e);return n===t||n.startsWith(t+"/")}},8469:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return a}})},4268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(8469),o=n(2433),a=n(7798),u=n(4750),i=n(2158),l=n(4490),c=n(5726),s=n(9300);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,u.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,i.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:u,params:i}=(0,s.interpolateAs)(e.pathname,e.pathname,n);u&&(t=(0,o.formatWithValidation)({pathname:u,hash:e.hash,query:(0,a.omit)(n,i)}))}let u=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[u,t||u]:u}catch(e){return n?[d]:d}}},6692:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(4750);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},u={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(u[e]=~r.indexOf("/")?r.split("/").map(e=>a(e)):t.repeat?[a(r)]:a(r))}),u}}},6167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});let r=n(7399),o=n(7962),a=n(9779);function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function i(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),n={},i=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:r,repeat:l}=u(a[1]);return n[e]={pos:i++,repeat:l,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=u(a[1]);return n[e]={pos:i++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function l(e){let{parameterizedRoute:t,groups:n}=i(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function c(e){let t,n,{segment:r,routeKeys:o,keyPrefix:a}=e,i=(t=97,n=1,()=>{let e="";for(let r=0;r<n;r++)e+=String.fromCharCode(t),++t>122&&(n++,t=97);return e}),{key:l,optional:c,repeat:s}=u(r),f=l.replace(/\W/g,"");a&&(f=""+a+f);let d=!1;return(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=i()),a?o[f]=""+a+l:o[f]=""+l,s?c?"(?:/(?<"+f+">.+?))?":"/(?<"+f+">.+?)":"/(?<"+f+">[^/]+?)"}function s(e,t){let n=(0,a.removeTrailingSlash)(e).slice(1).split("/"),u={};return{namedParameterizedRoute:n.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);return n&&a?c({segment:a[1],routeKeys:u,keyPrefix:t?"nxtI":void 0}):a?c({segment:a[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let n=s(e,t);return{...l(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){let{parameterizedRoute:n}=i(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=s(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},4750:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return a},getLocationOrigin:function(){return u},getURL:function(){return i},getDisplayName:function(){return l},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return s},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return m},PageNotFoundError:function(){return y},MissingStaticPage:function(){return g},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function i(){let{href:e}=window.location,t=u();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function s(e){let t=e.split("?"),n=t[0];return n.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&c(n))return r;if(!r){let t='"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw Error(t)}return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},5846:function(e,t,n){e.exports=n(4896)},508:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var r=n(8505),o=n(2088),a=n(463),u=n(6006),i=n(9268);function l(e){let{label:t,placement:n,spacing:l="0.5rem",children:c=(0,i.jsx)(r.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:f,...d}=e,p=(0,a.cx)("chakra-button__spinner",s),h="start"===n?"marginEnd":"marginStart",m=(0,u.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[h]:t?l:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,h,l]);return(0,i.jsx)(o.chakra.div,{className:p,...d,__css:m,children:c})}l.displayName="ButtonSpinner"},9196:function(e,t,n){"use strict";n.d(t,{D:function(){return r},i:function(){return o}});var[r,o]=(0,n(2027).k)({strict:!1,name:"ButtonGroupContext"})},2127:function(e,t,n){"use strict";n.d(t,{z:function(){return h}});var r=n(6006),o=n(9196),a=n(2088),u=n(463),i=n(9268);function l(e){let{children:t,className:n,...o}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,u.cx)("chakra-button__icon",n);return(0,i.jsx)(a.chakra.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:c,children:l})}l.displayName="ButtonIcon";var c=n(508),s=n(4966),f=n(8710),d=n(2016),p=n(2424),h=(0,f.forwardRef)((e,t)=>{let n=(0,o.i)(),l=(0,d.useStyleConfig)("Button",{...n,...e}),{isDisabled:f=null==n?void 0:n.isDisabled,isLoading:h,isActive:y,children:g,leftIcon:b,rightIcon:v,loadingText:_,iconSpacing:j="0.5rem",type:P,spinner:x,spinnerPlacement:O="start",className:R,as:k,...C}=(0,p.Lr)(e),E=(0,r.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!n&&{_focus:e}}},[l,n]),{ref:M,type:S}=function(e){let[t,n]=(0,r.useState)(!e),o=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:o,type:t?"button":void 0}}(k),N={rightIcon:v,leftIcon:b,iconSpacing:j,children:g};return(0,i.jsxs)(a.chakra.button,{ref:(0,s.qq)(t,M),as:k,type:null!=P?P:S,"data-active":(0,u.PB)(y),"data-loading":(0,u.PB)(h),__css:E,className:(0,u.cx)("chakra-button",R),...C,disabled:f||h,children:[h&&"start"===O&&(0,i.jsx)(c.X,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:j,children:x}),h?_||(0,i.jsx)(a.chakra.span,{opacity:0,children:(0,i.jsx)(m,{...N})}):(0,i.jsx)(m,{...N}),h&&"end"===O&&(0,i.jsx)(c.X,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:j,children:x})]})});function m(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)(l,{marginEnd:o,children:t}),r,n&&(0,i.jsx)(l,{marginStart:o,children:n})]})}h.displayName="Button"},5559:function(e,t,n){"use strict";n.d(t,{X:function(){return c}});var r=n(8710),o=n(2016),a=n(2424),u=n(2088),i=n(463),l=n(9268),c=(0,r.forwardRef)(function(e,t){let n=(0,o.useStyleConfig)("Heading",e),{className:r,...c}=(0,a.Lr)(e);return(0,l.jsx)(u.chakra.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...c,__css:n})});c.displayName="Heading"},9860:function(e,t,n){"use strict";n.d(t,{M:function(){return u},u:function(){return l}});var r=n(2088),o=n(8710),a=n(9268),u=(0,r.chakra)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});u.displayName="Center";var i={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l=(0,o.forwardRef)(function(e,t){let{axis:n="both",...o}=e;return(0,a.jsx)(r.chakra.div,{ref:t,__css:i[n],...o,position:"absolute"})})},1060:function(e,t,n){"use strict";n.d(t,{Cd:function(){return l},bK:function(){return i},xu:function(){return u}});var r=n(2088),o=n(8710),a=n(9268),u=(0,r.chakra)("div");u.displayName="Box";var i=(0,o.forwardRef)(function(e,t){let{size:n,centerContent:r=!0,...o}=e;return(0,a.jsx)(u,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});i.displayName="Square";var l=(0,o.forwardRef)(function(e,t){let{size:n,...r}=e;return(0,a.jsx)(i,{size:n,ref:t,borderRadius:"9999px",...r})});l.displayName="Circle"},5363:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(8710),o=n(2016),a=n(2424),u=n(2088),i=n(5846),l=n(9268),c=(...e)=>e.filter(Boolean).join(" "),s=(0,r.forwardRef)(function(e,t){let n=(0,o.useStyleConfig)("Link",e),{className:r,isExternal:s,href:f,children:d,...p}=(0,a.Lr)(e);return(0,l.jsx)(u.chakra.a,{target:s?"_blank":void 0,ref:t,href:f,...p,className:c("chakra-link",r),__css:n,as:i,children:d})})},4966:function(e,t,n){"use strict";n.d(t,{lq:function(){return o},qq:function(){return a}});var r=n(6006);function o(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function a(...e){return(0,r.useMemo)(()=>o(...e),e)}}}]);