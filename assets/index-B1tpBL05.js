(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ff={exports:{}},yo={};var s_;function eS(){if(s_)return yo;s_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var r_;function nS(){return r_||(r_=1,Ff.exports=eS()),Ff.exports}var I=nS(),Hf={exports:{}},ae={};var o_;function iS(){if(o_)return ae;o_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function g(N,it,Et){this.props=N,this.context=it,this.refs=y,this.updater=Et||b}g.prototype.isReactComponent={},g.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=g.prototype;function O(N,it,Et){this.props=N,this.context=it,this.refs=y,this.updater=Et||b}var D=O.prototype=new F;D.constructor=O,R(D,g.prototype),D.isPureReactComponent=!0;var X=Array.isArray;function G(){}var U={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function C(N,it,Et){var Rt=Et.ref;return{$$typeof:o,type:N,key:it,ref:Rt!==void 0?Rt:null,props:Et}}function w(N,it){return C(N.type,it,N.props)}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function ut(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Et){return it[Et]})}var ot=/\/+/g;function ht(N,it){return typeof N=="object"&&N!==null&&N.key!=null?ut(""+N.key):it.toString(36)}function mt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(G,G):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,it,Et,Rt,Q){var vt=typeof N;(vt==="undefined"||vt==="boolean")&&(N=null);var _t=!1;if(N===null)_t=!0;else switch(vt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(N.$$typeof){case o:case e:_t=!0;break;case x:return _t=N._init,z(_t(N._payload),it,Et,Rt,Q)}}if(_t)return Q=Q(N),_t=Rt===""?"."+ht(N,0):Rt,X(Q)?(Et="",_t!=null&&(Et=_t.replace(ot,"$&/")+"/"),z(Q,it,Et,"",function(ee){return ee})):Q!=null&&(B(Q)&&(Q=w(Q,Et+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(ot,"$&/")+"/")+_t)),it.push(Q)),1;_t=0;var Ht=Rt===""?".":Rt+":";if(X(N))for(var zt=0;zt<N.length;zt++)Rt=N[zt],vt=Ht+ht(Rt,zt),_t+=z(Rt,it,Et,vt,Q);else if(zt=M(N),typeof zt=="function")for(N=zt.call(N),zt=0;!(Rt=N.next()).done;)Rt=Rt.value,vt=Ht+ht(Rt,zt++),_t+=z(Rt,it,Et,vt,Q);else if(vt==="object"){if(typeof N.then=="function")return z(mt(N),it,Et,Rt,Q);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return _t}function K(N,it,Et){if(N==null)return N;var Rt=[],Q=0;return z(N,Rt,"","",function(vt){return it.call(Et,vt,Q++)}),Rt}function Z(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(Et){(N._status===0||N._status===-1)&&(N._status=1,N._result=Et)},function(Et){(N._status===0||N._status===-1)&&(N._status=2,N._result=Et)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var St=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Tt={map:K,forEach:function(N,it,Et){K(N,function(){it.apply(this,arguments)},Et)},count:function(N){var it=0;return K(N,function(){it++}),it},toArray:function(N){return K(N,function(it){return it})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ae.Activity=v,ae.Children=Tt,ae.Component=g,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=O,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ae.__COMPILER_RUNTIME={__proto__:null,c:function(N){return U.H.useMemoCache(N)}},ae.cache=function(N){return function(){return N.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(N,it,Et){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=R({},N.props),Q=N.key;if(it!=null)for(vt in it.key!==void 0&&(Q=""+it.key),it)!V.call(it,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&it.ref===void 0||(Rt[vt]=it[vt]);var vt=arguments.length-2;if(vt===1)Rt.children=Et;else if(1<vt){for(var _t=Array(vt),Ht=0;Ht<vt;Ht++)_t[Ht]=arguments[Ht+2];Rt.children=_t}return C(N.type,Q,Rt)},ae.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ae.createElement=function(N,it,Et){var Rt,Q={},vt=null;if(it!=null)for(Rt in it.key!==void 0&&(vt=""+it.key),it)V.call(it,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Q[Rt]=it[Rt]);var _t=arguments.length-2;if(_t===1)Q.children=Et;else if(1<_t){for(var Ht=Array(_t),zt=0;zt<_t;zt++)Ht[zt]=arguments[zt+2];Q.children=Ht}if(N&&N.defaultProps)for(Rt in _t=N.defaultProps,_t)Q[Rt]===void 0&&(Q[Rt]=_t[Rt]);return C(N,vt,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(N){return{$$typeof:d,render:N}},ae.isValidElement=B,ae.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:Z}},ae.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},ae.startTransition=function(N){var it=U.T,Et={};U.T=Et;try{var Rt=N(),Q=U.S;Q!==null&&Q(Et,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(G,St)}catch(vt){St(vt)}finally{it!==null&&Et.types!==null&&(it.types=Et.types),U.T=it}},ae.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ae.use=function(N){return U.H.use(N)},ae.useActionState=function(N,it,Et){return U.H.useActionState(N,it,Et)},ae.useCallback=function(N,it){return U.H.useCallback(N,it)},ae.useContext=function(N){return U.H.useContext(N)},ae.useDebugValue=function(){},ae.useDeferredValue=function(N,it){return U.H.useDeferredValue(N,it)},ae.useEffect=function(N,it){return U.H.useEffect(N,it)},ae.useEffectEvent=function(N){return U.H.useEffectEvent(N)},ae.useId=function(){return U.H.useId()},ae.useImperativeHandle=function(N,it,Et){return U.H.useImperativeHandle(N,it,Et)},ae.useInsertionEffect=function(N,it){return U.H.useInsertionEffect(N,it)},ae.useLayoutEffect=function(N,it){return U.H.useLayoutEffect(N,it)},ae.useMemo=function(N,it){return U.H.useMemo(N,it)},ae.useOptimistic=function(N,it){return U.H.useOptimistic(N,it)},ae.useReducer=function(N,it,Et){return U.H.useReducer(N,it,Et)},ae.useRef=function(N){return U.H.useRef(N)},ae.useState=function(N){return U.H.useState(N)},ae.useSyncExternalStore=function(N,it,Et){return U.H.useSyncExternalStore(N,it,Et)},ae.useTransition=function(){return U.H.useTransition()},ae.version="19.2.8",ae}var l_;function fd(){return l_||(l_=1,Hf.exports=iS()),Hf.exports}var vn=fd(),Gf={exports:{}},Mo={},Vf={exports:{}},kf={};var c_;function aS(){return c_||(c_=1,(function(o){function e(z,K){var Z=z.length;z.push(K);t:for(;0<Z;){var St=Z-1>>>1,Tt=z[St];if(0<l(Tt,K))z[St]=K,z[Z]=Tt,Z=St;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],Z=z.pop();if(Z!==K){z[0]=Z;t:for(var St=0,Tt=z.length,N=Tt>>>1;St<N;){var it=2*(St+1)-1,Et=z[it],Rt=it+1,Q=z[Rt];if(0>l(Et,Z))Rt<Tt&&0>l(Q,Et)?(z[St]=Q,z[Rt]=Z,St=Rt):(z[St]=Et,z[it]=Z,St=it);else if(Rt<Tt&&0>l(Q,Z))z[St]=Q,z[Rt]=Z,St=Rt;else break t}}return K}function l(z,K){var Z=z.sortIndex-K.sortIndex;return Z!==0?Z:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,v=null,S=3,M=!1,b=!1,R=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function X(z){if(R=!1,D(z),!b)if(i(m)!==null)b=!0,G||(G=!0,ut());else{var K=i(p);K!==null&&mt(X,K.startTime-z)}}var G=!1,U=-1,V=5,C=-1;function w(){return y?!0:!(o.unstable_now()-C<V)}function B(){if(y=!1,G){var z=o.unstable_now();C=z;var K=!0;try{t:{b=!1,R&&(R=!1,F(U),U=-1),M=!0;var Z=S;try{e:{for(D(z),v=i(m);v!==null&&!(v.expirationTime>z&&w());){var St=v.callback;if(typeof St=="function"){v.callback=null,S=v.priorityLevel;var Tt=St(v.expirationTime<=z);if(z=o.unstable_now(),typeof Tt=="function"){v.callback=Tt,D(z),K=!0;break e}v===i(m)&&s(m),D(z)}else s(m);v=i(m)}if(v!==null)K=!0;else{var N=i(p);N!==null&&mt(X,N.startTime-z),K=!1}}break t}finally{v=null,S=Z,M=!1}K=void 0}}finally{K?ut():G=!1}}}var ut;if(typeof O=="function")ut=function(){O(B)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ht=ot.port2;ot.port1.onmessage=B,ut=function(){ht.postMessage(null)}}else ut=function(){g(B,0)};function mt(z,K){U=g(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Z=S;S=K;try{return z()}finally{S=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=S;S=z;try{return K()}finally{S=Z}},o.unstable_scheduleCallback=function(z,K,Z){var St=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?St+Z:St):Z=St,z){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,z={id:x++,callback:K,priorityLevel:z,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>St?(z.sortIndex=Z,e(p,z),i(m)===null&&z===i(p)&&(R?(F(U),U=-1):R=!0,mt(X,Z-St))):(z.sortIndex=Tt,e(m,z),b||M||(b=!0,G||(G=!0,ut()))),z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(z){var K=S;return function(){var Z=S;S=K;try{return z.apply(this,arguments)}finally{S=Z}}}})(kf)),kf}var u_;function sS(){return u_||(u_=1,Vf.exports=aS()),Vf.exports}var Xf={exports:{}},Cn={};var f_;function rS(){if(f_)return Cn;f_=1;var o=fd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Cn.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.8",Cn}var h_;function oS(){if(h_)return Xf.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=rS(),Xf.exports}var d_;function lS(){if(d_)return Mo;d_=1;var o=sS(),e=fd(),i=oS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,r=f;break}if(T===r){_=!0,r=c,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,r=c;break}if(T===r){_=!0,r=f,a=c;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var mt=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function N(t){return{current:t}}function it(t){0>Tt||(t.current=St[Tt],St[Tt]=null,Tt--)}function Et(t,n){Tt++,St[Tt]=t.current,t.current=n}var Rt=N(null),Q=N(null),vt=N(null),_t=N(null);function Ht(t,n){switch(Et(vt,n),Et(Q,t),Et(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Rt),Et(Rt,t)}function zt(){it(Rt),it(Q),it(vt)}function ee(t){t.memoizedState!==null&&Et(_t,t);var n=Rt.current,a=wg(n,t.type);n!==a&&(Et(Q,t),Et(Rt,a))}function Xe(t){Q.current===t&&(it(Rt),it(Q)),_t.current===t&&(it(_t),_o._currentValue=Z)}var he,H;function Me(t){if(he===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+t+H}var Jt=!1;function xe(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var nt=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){nt=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){nt=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&nt&&typeof rt.stack=="string")return[rt.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var P=_.split(`
`),tt=T.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===tt.length)for(r=P.length-1,c=tt.length-1;1<=r&&0<=c&&P[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==tt[c]){var ct=`
`+P[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Me(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return xe(t.type,!1);case 11:return xe(t.type.render,!1);case 1:return xe(t.type,!0);case 31:return Me("Activity");default:return""}}function Ge(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var It=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,et=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Wt=o.log,qt=o.unstable_setDisableYieldValue,bt=null,wt=null;function Yt(t){if(typeof Wt=="function"&&qt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,t)}catch{}}var Pt=Math.clz32?Math.clz32:W,Ut=Math.log,re=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ut(t)/re|0)|0}var At=256,Dt=262144,Bt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Mt(r):(_&=T,_!==0?c=Mt(_):a||(a=T&~t,a!==0&&(c=Mt(a))))):(T=r&~f,T!==0?c=Mt(T):_!==0?c=Mt(_):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ii(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,tt=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-Pt(a),pt=1<<ct;T[ct]=0,P[ct]=-1;var nt=tt[ct];if(nt!==null)for(tt[ct]=null,ct=0;ct<nt.length;ct++){var rt=nt[ct];rt!==null&&(rt.lane&=-536870913)}a&=~pt}r!==0&&Dr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Dr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Es(t,n){var a=n&-n;return a=(a&42)!==0?1:Ts(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ts(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xa(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function Ur(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Xn=Math.random().toString(36).slice(2),an="__reactFiber$"+Xn,xn="__reactProps$"+Xn,ca="__reactContainer$"+Xn,Lr="__reactEvents$"+Xn,Lc="__reactListeners$"+Xn,Nc="__reactHandles$"+Xn,ko="__reactResources$"+Xn,Wa="__reactMarker$"+Xn;function A(t){delete t[an],delete t[xn],delete t[Lr],delete t[Lc],delete t[Nc]}function q(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ca]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pg(t);t!==null;){if(a=t[an])return a;t=Pg(t)}return n}t=a,a=t.parentNode}return null}function at(t){if(t=t[an]||t[ca]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function st(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function j(t){var n=t[ko];return n||(n=t[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xt(t){t[Wa]=!0}var Lt=new Set,Vt={};function Ot(t,n){Kt(t,n),Kt(t+"Capture",n)}function Kt(t,n){for(Vt[t]=n,t=0;t<n.length;t++)Lt.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},fe={};function Ue(t){return It.call(fe,t)?!0:It.call(Qt,t)?!1:ne.test(t)?fe[t]=!0:(Qt[t]=!0,!1)}function Ve(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Le(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function de(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function We(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=We(t)?"checked":"value";t._valueTracker=Te(t,n,""+t[n])}}function Oi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=We(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qa=/[\n"\\]/g;function ge(t){return t.replace(qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(t,n,a,r,c,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?un(t,_,kt(n)):a!=null?un(t,_,kt(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+kt(T):t.removeAttribute("name")}function Ln(t,n,a,r,c,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Sn(t)}function un(t,n,a){n==="number"&&mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function tn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function As(t,n,a){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+kt(a):""}function Ei(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(mt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=kt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Sn(t)}function Rs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var K0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||K0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ad(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&bd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&bd(t,f,n[f])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return J0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var zc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cs=null,ws=null;function Rd(t){var n=at(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Rn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[xn]||null;if(!c)throw Error(s(90));Rn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Oi(r)}break t;case"textarea":As(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(t,!!a.multiple,n,!1)}}}var Bc=!1;function Cd(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var r=t(n);return r}finally{if(Bc=!1,(Cs!==null||ws!==null)&&(Ul(),Cs&&(n=Cs,t=ws,ws=Cs=null,Rd(n),t)))for(n=0;n<t.length;n++)Rd(t[n])}}function Nr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Pi)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ic=!1}var ua=null,Fc=null,Wo=null;function wd(){if(Wo)return Wo;var t,n=Fc,a=n.length,r,c="value"in ua?ua.value:ua.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Wo=c.slice(t,1<r?1-r:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function Dd(){return!1}function zn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Dd,this.isPropagationStopped=Dd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=zn(ja),zr=v({},ja,{view:0,detail:0}),$0=zn(zr),Hc,Gc,Pr,Zo=v({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pr&&(Pr&&t.type==="mousemove"?(Hc=t.screenX-Pr.screenX,Gc=t.screenY-Pr.screenY):Gc=Hc=0,Pr=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Ud=zn(Zo),tv=v({},Zo,{dataTransfer:0}),ev=zn(tv),nv=v({},zr,{relatedTarget:0}),Vc=zn(nv),iv=v({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),av=zn(iv),sv=v({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rv=zn(sv),ov=v({},ja,{data:0}),Ld=zn(ov),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=uv[t])?!!n[t]:!1}function kc(){return fv}var hv=v({},zr,{key:function(t){if(t.key){var n=lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dv=zn(hv),pv=v({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=zn(pv),mv=v({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),gv=zn(mv),_v=v({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=zn(_v),xv=v({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=zn(xv),yv=v({},ja,{newState:0,oldState:0}),Mv=zn(yv),Ev=[9,13,27,32],Xc=Pi&&"CompositionEvent"in window,Br=null;Pi&&"documentMode"in document&&(Br=document.documentMode);var Tv=Pi&&"TextEvent"in window&&!Br,Od=Pi&&(!Xc||Br&&8<Br&&11>=Br),zd=" ",Pd=!1;function Bd(t,n){switch(t){case"keyup":return Ev.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function bv(t,n){switch(t){case"compositionend":return Id(n);case"keypress":return n.which!==32?null:(Pd=!0,zd);case"textInput":return t=n.data,t===zd&&Pd?null:t;default:return null}}function Av(t,n){if(Ds)return t==="compositionend"||!Xc&&Bd(t,n)?(t=wd(),Wo=Fc=ua=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Rv[t.type]:n==="textarea"}function Hd(t,n,a,r){Cs?ws?ws.push(r):ws=[r]:Cs=r,n=Il(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ir=null,Fr=null;function Cv(t){Mg(t,0)}function Ko(t){var n=st(t);if(Oi(n))return t}function Gd(t,n){if(t==="change")return n}var Vd=!1;if(Pi){var Wc;if(Pi){var qc="oninput"in document;if(!qc){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),qc=typeof kd.oninput=="function"}Wc=qc}else Wc=!1;Vd=Wc&&(!document.documentMode||9<document.documentMode)}function Xd(){Ir&&(Ir.detachEvent("onpropertychange",Wd),Fr=Ir=null)}function Wd(t){if(t.propertyName==="value"&&Ko(Fr)){var n=[];Hd(n,Fr,t,Pc(t)),Cd(Cv,n)}}function wv(t,n,a){t==="focusin"?(Xd(),Ir=n,Fr=a,Ir.attachEvent("onpropertychange",Wd)):t==="focusout"&&Xd()}function Dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Fr)}function Uv(t,n){if(t==="click")return Ko(n)}function Lv(t,n){if(t==="input"||t==="change")return Ko(n)}function Nv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Nv;function Hr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!It.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,n){var a=qd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qd(a)}}function Yd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=mn(t.document)}return n}function jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ov=Pi&&"documentMode"in document&&11>=document.documentMode,Us=null,Yc=null,Gr=null,Zc=!1;function Kd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||Us==null||Us!==mn(r)||(r=Us,"selectionStart"in r&&jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Hr(Gr,r)||(Gr=r,r=Il(Yc,"onSelect"),0<r.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Us)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ls={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Kc={},Qd={};Pi&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Za(t){if(Kc[t])return Kc[t];if(!Ls[t])return t;var n=Ls[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qd)return Kc[t]=n[a];return t}var Jd=Za("animationend"),$d=Za("animationiteration"),tp=Za("animationstart"),zv=Za("transitionrun"),Pv=Za("transitionstart"),Bv=Za("transitioncancel"),ep=Za("transitionend"),np=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function di(t,n){np.set(t,n),Ot(n,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Ns=0,Jc=0;function Jo(){for(var t=Ns,n=Jc=Ns=0;n<t;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&ip(a,c,f)}}function $o(t,n,a,r){ai[Ns++]=t,ai[Ns++]=n,ai[Ns++]=a,ai[Ns++]=r,Jc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function $c(t,n,a,r){return $o(t,n,a,r),tl(t)}function Ka(t,n){return $o(t,null,null,n),tl(t)}function ip(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<co)throw co=0,cf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Os={};function Iv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new Iv(t,n,a,r)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")tu(t)&&(_=1);else if(typeof t=="string")_=kx(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=qn(31,a,n,c),t.elementType=C,t.lanes=f,t;case R:return Qa(a.children,c,f,n);case y:_=8,c|=24;break;case g:return t=qn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case X:return t=qn(13,a,n,c),t.elementType=X,t.lanes=f,t;case G:return t=qn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:_=10;break t;case F:_=9;break t;case D:_=11;break t;case U:_=14;break t;case V:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function eu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function sp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function nu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var rp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=rp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},rp.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var zs=[],Ps=0,nl=null,Vr=0,ri=[],oi=0,fa=null,Ti=1,bi="";function Ii(t,n){zs[Ps++]=Vr,zs[Ps++]=nl,nl=t,Vr=n}function op(t,n,a){ri[oi++]=Ti,ri[oi++]=bi,ri[oi++]=fa,fa=t;var r=Ti;t=bi;var c=32-Pt(r)-1;r&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ti=1<<32-Pt(n)+c|a<<c|r,bi=f+t}else Ti=1<<f|a<<c|r,bi=t}function iu(t){t.return!==null&&(Ii(t,1),op(t,1,0))}function au(t){for(;t===nl;)nl=zs[--Ps],zs[Ps]=null,Vr=zs[--Ps],zs[Ps]=null;for(;t===fa;)fa=ri[--oi],ri[oi]=null,bi=ri[--oi],ri[oi]=null,Ti=ri[--oi],ri[oi]=null}function lp(t,n){ri[oi++]=Ti,ri[oi++]=bi,ri[oi++]=fa,Ti=n.id,bi=n.overflow,fa=t}var yn=null,qe=null,Se=!1,ha=null,li=!1,su=Error(s(519));function da(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kr(si(n,t)),su}function cp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[an]=t,n[xn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)me(fo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Ln(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Ei(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Ag(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||da(t,!0)}function up(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:yn=yn.return}}function Bs(t){if(t!==yn)return!1;if(!Se)return up(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Tf(t.type,t.memoizedProps)),a=!a),a&&qe&&da(t),up(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=zg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=zg(t)}else n===27?(n=qe,Ra(t.type)?(t=wf,wf=null,qe=t):qe=n):qe=yn?ui(t.stateNode.nextSibling):null;return!0}function Ja(){qe=yn=null,Se=!1}function ru(){var t=ha;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),ha=null),t}function kr(t){ha===null?ha=[t]:ha.push(t)}var ou=N(null),$a=null,Fi=null;function pa(t,n,a){Et(ou,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=ou.current,it(ou)}function lu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),lu(f.return,a,t),r||(_=null);break t}f=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),lu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Is(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=c.type;Wn(c.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(c===_t.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&cu(n,t,a,r),n.flags|=262144}function il(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return fp($a,t)}function al(t,n){return $a===null&&ts(t),fp(t,n)}function fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var Fv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Hv=o.unstable_scheduleCallback,Gv=o.unstable_NormalPriority,sn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new Fv,data:new Map,refCount:0}}function Xr(t){t.refCount--,t.refCount===0&&Hv(Gv,function(){t.controller.abort()})}var Wr=null,fu=0,Fs=0,Hs=null;function Vv(t,n){if(Wr===null){var a=Wr=[];fu=0,Fs=mf(),Hs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return fu++,n.then(hp,hp),n}function hp(){if(--fu===0&&Wr!==null){Hs!==null&&(Hs.status="fulfilled");var t=Wr;Wr=null,Fs=0,Hs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var dp=z.S;z.S=function(t,n){Km=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vv(t,n),dp!==null&&dp(t,n)};var es=N(null);function hu(){var t=es.current;return t!==null?t:ke.pooledCache}function sl(t,n){n===null?Et(es,es.current):Et(es,n.pool)}function pp(){var t=hu();return t===null?null:{parent:sn._currentValue,pool:t}}var Gs=Error(s(460)),du=Error(s(474)),rl=Error(s(542)),ol={then:function(){}};function mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vp(t),t}throw is=n,Gs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Gs):a}}var is=null;function _p(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function vp(t){if(t===Gs||t===rl)throw Error(s(483))}var Vs=null,qr=0;function ll(t){var n=qr;return qr+=1,Vs===null&&(Vs=[]),gp(Vs,t,n)}function jr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function xp(t){function n(Y,k){if(t){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Bi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,$,dt){return k===null||k.tag!==6?(k=eu($,Y.mode,dt),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function P(Y,k,$,dt){var $t=$.type;return $t===R?ct(Y,k,$.props.children,dt,$.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&ns($t)===k.type)?(k=c(k,$.props),jr(k,$),k.return=Y,k):(k=el($.type,$.key,$.props,null,Y.mode,dt),jr(k,$),k.return=Y,k)}function tt(Y,k,$,dt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=nu($,Y.mode,dt),k.return=Y,k):(k=c(k,$.children||[]),k.return=Y,k)}function ct(Y,k,$,dt,$t){return k===null||k.tag!==7?(k=Qa($,Y.mode,dt,$t),k.return=Y,k):(k=c(k,$),k.return=Y,k)}function pt(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=eu(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=el(k.type,k.key,k.props,null,Y.mode,$),jr($,k),$.return=Y,$;case b:return k=nu(k,Y.mode,$),k.return=Y,k;case V:return k=ns(k),pt(Y,k,$)}if(mt(k)||ut(k))return k=Qa(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return pt(Y,ll(k),$);if(k.$$typeof===O)return pt(Y,al(Y,k),$);cl(Y,k)}return null}function nt(Y,k,$,dt){var $t=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $t!==null?null:T(Y,k,""+$,dt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===$t?P(Y,k,$,dt):null;case b:return $.key===$t?tt(Y,k,$,dt):null;case V:return $=ns($),nt(Y,k,$,dt)}if(mt($)||ut($))return $t!==null?null:ct(Y,k,$,dt,null);if(typeof $.then=="function")return nt(Y,k,ll($),dt);if($.$$typeof===O)return nt(Y,k,al(Y,$),dt);cl(Y,$)}return null}function rt(Y,k,$,dt,$t){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get($)||null,T(k,Y,""+dt,$t);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return Y=Y.get(dt.key===null?$:dt.key)||null,P(k,Y,dt,$t);case b:return Y=Y.get(dt.key===null?$:dt.key)||null,tt(k,Y,dt,$t);case V:return dt=ns(dt),rt(Y,k,$,dt,$t)}if(mt(dt)||ut(dt))return Y=Y.get($)||null,ct(k,Y,dt,$t,null);if(typeof dt.then=="function")return rt(Y,k,$,ll(dt),$t);if(dt.$$typeof===O)return rt(Y,k,$,al(k,dt),$t);cl(k,dt)}return null}function Gt(Y,k,$,dt){for(var $t=null,be=null,Xt=k,le=k=0,ve=null;Xt!==null&&le<$.length;le++){Xt.index>le?(ve=Xt,Xt=null):ve=Xt.sibling;var Ae=nt(Y,Xt,$[le],dt);if(Ae===null){Xt===null&&(Xt=ve);break}t&&Xt&&Ae.alternate===null&&n(Y,Xt),k=f(Ae,k,le),be===null?$t=Ae:be.sibling=Ae,be=Ae,Xt=ve}if(le===$.length)return a(Y,Xt),Se&&Ii(Y,le),$t;if(Xt===null){for(;le<$.length;le++)Xt=pt(Y,$[le],dt),Xt!==null&&(k=f(Xt,k,le),be===null?$t=Xt:be.sibling=Xt,be=Xt);return Se&&Ii(Y,le),$t}for(Xt=r(Xt);le<$.length;le++)ve=rt(Xt,Y,le,$[le],dt),ve!==null&&(t&&ve.alternate!==null&&Xt.delete(ve.key===null?le:ve.key),k=f(ve,k,le),be===null?$t=ve:be.sibling=ve,be=ve);return t&&Xt.forEach(function(La){return n(Y,La)}),Se&&Ii(Y,le),$t}function te(Y,k,$,dt){if($==null)throw Error(s(151));for(var $t=null,be=null,Xt=k,le=k=0,ve=null,Ae=$.next();Xt!==null&&!Ae.done;le++,Ae=$.next()){Xt.index>le?(ve=Xt,Xt=null):ve=Xt.sibling;var La=nt(Y,Xt,Ae.value,dt);if(La===null){Xt===null&&(Xt=ve);break}t&&Xt&&La.alternate===null&&n(Y,Xt),k=f(La,k,le),be===null?$t=La:be.sibling=La,be=La,Xt=ve}if(Ae.done)return a(Y,Xt),Se&&Ii(Y,le),$t;if(Xt===null){for(;!Ae.done;le++,Ae=$.next())Ae=pt(Y,Ae.value,dt),Ae!==null&&(k=f(Ae,k,le),be===null?$t=Ae:be.sibling=Ae,be=Ae);return Se&&Ii(Y,le),$t}for(Xt=r(Xt);!Ae.done;le++,Ae=$.next())Ae=rt(Xt,Y,le,Ae.value,dt),Ae!==null&&(t&&Ae.alternate!==null&&Xt.delete(Ae.key===null?le:Ae.key),k=f(Ae,k,le),be===null?$t=Ae:be.sibling=Ae,be=Ae);return t&&Xt.forEach(function(tS){return n(Y,tS)}),Se&&Ii(Y,le),$t}function Ie(Y,k,$,dt){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var $t=$.key;k!==null;){if(k.key===$t){if($t=$.type,$t===R){if(k.tag===7){a(Y,k.sibling),dt=c(k,$.props.children),dt.return=Y,Y=dt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&ns($t)===k.type){a(Y,k.sibling),dt=c(k,$.props),jr(dt,$),dt.return=Y,Y=dt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}$.type===R?(dt=Qa($.props.children,Y.mode,dt,$.key),dt.return=Y,Y=dt):(dt=el($.type,$.key,$.props,null,Y.mode,dt),jr(dt,$),dt.return=Y,Y=dt)}return _(Y);case b:t:{for($t=$.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Y,k.sibling),dt=c(k,$.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}dt=nu($,Y.mode,dt),dt.return=Y,Y=dt}return _(Y);case V:return $=ns($),Ie(Y,k,$,dt)}if(mt($))return Gt(Y,k,$,dt);if(ut($)){if($t=ut($),typeof $t!="function")throw Error(s(150));return $=$t.call($),te(Y,k,$,dt)}if(typeof $.then=="function")return Ie(Y,k,ll($),dt);if($.$$typeof===O)return Ie(Y,k,al(Y,$),dt);cl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Y,k.sibling),dt=c(k,$),dt.return=Y,Y=dt):(a(Y,k),dt=eu($,Y.mode,dt),dt.return=Y,Y=dt),_(Y)):a(Y,k)}return function(Y,k,$,dt){try{qr=0;var $t=Ie(Y,k,$,dt);return Vs=null,$t}catch(Xt){if(Xt===Gs||Xt===rl)throw Xt;var be=qn(29,Xt,null,Y.mode);return be.lanes=dt,be.return=Y,be}}}var as=xp(!0),Sp=xp(!1),ma=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=tl(t),ip(t,null,a),n}return $o(t,r,n,a),tl(t)}function Yr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Mi(t,a)}}function gu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var _u=!1;function Zr(){if(_u){var t=Hs;if(t!==null)throw t}}function Kr(t,n,a,r){_u=!1;var c=t.updateQueue;ma=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,tt=P.next;P.next=null,_===null?f=tt:_.next=tt,_=P;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==_&&(T===null?ct.firstBaseUpdate=tt:T.next=tt,ct.lastBaseUpdate=P))}if(f!==null){var pt=c.baseState;_=0,ct=tt=P=null,T=f;do{var nt=T.lane&-536870913,rt=nt!==T.lane;if(rt?(_e&nt)===nt:(r&nt)===nt){nt!==0&&nt===Fs&&(_u=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,te=T;nt=n;var Ie=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){pt=Gt.call(Ie,pt,nt);break t}pt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,nt=typeof Gt=="function"?Gt.call(Ie,pt,nt):Gt,nt==null)break t;pt=v({},pt,nt);break t;case 2:ma=!0}}nt=T.callback,nt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[nt]:rt.push(nt))}else rt={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(tt=ct=rt,P=pt):ct=ct.next=rt,_|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ct===null&&(P=pt),c.baseState=P,c.firstBaseUpdate=tt,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ma|=_,t.lanes=_,t.memoizedState=pt}}function yp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yp(a[t],n)}var ks=N(null),ul=N(0);function Ep(t,n){t=Zi,Et(ul,t),Et(ks,n),Zi=t|n.baseLanes}function vu(){Et(ul,Zi),Et(ks,ks.current)}function xu(){Zi=ul.current,it(ks),it(ul)}var jn=N(null),ci=null;function va(t){var n=t.alternate;Et(en,en.current&1),Et(jn,t),ci===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(ci=t)}function Su(t){Et(en,en.current),Et(jn,t),ci===null&&(ci=t)}function Tp(t){t.tag===22?(Et(en,en.current),Et(jn,t),ci===null&&(ci=t)):xa()}function xa(){Et(en,en.current),Et(jn,jn.current)}function Yn(t){it(jn),ci===t&&(ci=null),it(en)}var en=N(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rf(a)||Cf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,oe=null,Pe=null,rn=null,hl=!1,Xs=!1,ss=!1,dl=0,Qr=0,Ws=null,Xv=0;function Qe(){throw Error(s(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Mu(t,n,a,r,c,f){return Gi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?om:Bu,ss=!1,f=a(r,c),ss=!1,Xs&&(f=Ap(n,a,r,c)),bp(t),f}function bp(t){z.H=to;var n=Pe!==null&&Pe.next!==null;if(Gi=0,rn=Pe=oe=null,hl=!1,Qr=0,Ws=null,n)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&il(t)&&(on=!0))}function Ap(t,n,a,r){oe=t;var c=0;do{if(Xs&&(Ws=null),Qr=0,Xs=!1,25<=c)throw Error(s(301));if(c+=1,rn=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=lm,f=n(a,r)}while(Xs);return f}function Wv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Jr(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(oe.flags|=1024),n}function Eu(){var t=dl!==0;return dl=0,t}function Tu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bu(t){if(hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}hl=!1}Gi=0,rn=Pe=oe=null,Xs=!1,Qr=dl=0,Ws=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?oe.memoizedState=rn=t:rn=rn.next=t,rn}function nn(){if(Pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=rn===null?oe.memoizedState:rn.next;if(n!==null)rn=n,Pe=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},rn===null?oe.memoizedState=rn=t:rn=rn.next=t}return rn}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(t){var n=Qr;return Qr+=1,Ws===null&&(Ws=[]),t=gp(Ws,t,n),n=oe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?om:Bu),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jr(t);if(t.$$typeof===O)return Mn(t)}throw Error(s(438,String(t)))}function Au(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function gl(t){var n=nn();return Ru(n,Pe,t)}function Ru(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=_=null,P=null,tt=n,ct=!1;do{var pt=tt.lane&-536870913;if(pt!==tt.lane?(_e&pt)===pt:(Gi&pt)===pt){var nt=tt.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),pt===Fs&&(ct=!0);else if((Gi&nt)===nt){tt=tt.next,nt===Fs&&(ct=!0);continue}else pt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(T=P=pt,_=f):P=P.next=pt,oe.lanes|=nt,Ma|=nt;pt=tt.action,ss&&a(f,pt),f=tt.hasEagerState?tt.eagerState:a(f,pt)}else nt={lane:pt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},P===null?(T=P=nt,_=f):P=P.next=nt,oe.lanes|=pt,Ma|=pt;tt=tt.next}while(tt!==null&&tt!==n);if(P===null?_=f:P.next=T,!Wn(f,t.memoizedState)&&(on=!0,ct&&(a=Hs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Cu(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Wn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Rp(t,n,a){var r=oe,c=nn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Wn((Pe||c).memoizedState,a);if(_&&(c.memoizedState=a,on=!0),c=c.queue,Uu(Dp.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,qs(9,{destroy:void 0},wp.bind(null,r,c,a,n),null),ke===null)throw Error(s(349));f||(Gi&127)!==0||Cp(r,n,a)}return a}function Cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=pl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wp(t,n,a,r){n.value=a,n.getSnapshot=r,Up(n)&&Lp(t)}function Dp(t,n,a){return a(function(){Up(n)&&Lp(t)})}function Up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Lp(t){var n=Ka(t,2);n!==null&&Hn(n,t,2)}function wu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),ss){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Np(t,n,a,r){return t.baseState=a,Ru(t,Pe,typeof r=="function"?r:Vi)}function qv(t,n,a,r,c){if(xl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var T=a(c,r),P=z.S;P!==null&&P(_,T),zp(t,n,T)}catch(tt){Du(t,n,tt)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(c,r),zp(t,n,f)}catch(tt){Du(t,n,tt)}}function zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Pp(t,n,r)},function(r){return Du(t,n,r)}):Pp(t,n,a)}function Pp(t,n,a){n.status="fulfilled",n.value=a,Bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Op(t,a)))}function Du(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Bp(n),n=n.next;while(n!==r)}t.action=null}function Bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ip(t,n){return n}function Fp(t,n){if(Se){var a=ke.formState;if(a!==null){t:{var r=oe;if(Se){if(qe){e:{for(var c=qe,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=ui(c.nextSibling),r=c.data==="F!";break t}}da(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=r,a=am.bind(null,oe,r),r.dispatch=a,r=wu(!1),f=Pu.bind(null,oe,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=qv.bind(null,oe,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Hp(t){var n=nn();return Gp(n,Pe,t)}function Gp(t,n,a){if(n=Ru(t,n,Ip)[0],t=gl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Jr(n)}catch(_){throw _===Gs?rl:_}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,qs(9,{destroy:void 0},jv.bind(null,c,a),null)),[r,f,t]}function jv(t,n){t.action=n}function Vp(t){var n=nn(),a=Pe;if(a!==null)return Gp(n,a,t);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function qs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=pl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function kp(){return nn().memoizedState}function _l(t,n,a,r){var c=Nn();oe.flags|=t,c.memoizedState=qs(1|n,{destroy:void 0},a,r===void 0?null:r)}function vl(t,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&yu(r,Pe.memoizedState.deps)?c.memoizedState=qs(n,f,a,r):(oe.flags|=t,c.memoizedState=qs(1|n,f,a,r))}function Xp(t,n){_l(8390656,8,t,n)}function Uu(t,n){vl(2048,8,t,n)}function Yv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=pl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wp(t){var n=nn().memoizedState;return Yv({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qp(t,n){return vl(4,2,t,n)}function jp(t,n){return vl(4,4,t,n)}function Yp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zp(t,n,a){a=a!=null?a.concat([t]):null,vl(4,4,Yp.bind(null,n,t),a)}function Lu(){}function Kp(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&yu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Qp(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&yu(n,r[1]))return r[0];if(r=t(),ss){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r}function Nu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Jm(),oe.lanes|=t,Ma|=t,a)}function Jp(t,n,a,r){return Wn(a,n)?a:ks.current!==null?(t=Nu(t,a,r),Wn(t,n)||(on=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(_e&261930)===0?(on=!0,t.memoizedState=a):(t=Jm(),oe.lanes|=t,Ma|=t,n)}function $p(t,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var _=z.T,T={};z.T=T,Pu(t,!1,n,a);try{var P=c(),tt=z.S;if(tt!==null&&tt(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=kv(P,r);$r(t,n,ct,Qn(t))}else $r(t,n,r,Qn(t))}catch(pt){$r(t,n,{then:function(){},status:"rejected",reason:pt},Qn())}finally{K.p=f,_!==null&&T.types!==null&&(_.types=T.types),z.T=_}}function Zv(){}function Ou(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=tm(t).queue;$p(t,c,n,Z,a===null?Zv:function(){return em(t),a(r)})}function tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function em(t){var n=tm(t);n.next===null&&(n=t.alternate.memoizedState),$r(t,n.next.queue,{},Qn())}function zu(){return Mn(_o)}function nm(){return nn().memoizedState}function im(){return nn().memoizedState}function Kv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ga(a);var r=_a(n,t,a);r!==null&&(Hn(r,n,a),Yr(r,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function Qv(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xl(t)?sm(n,a):(a=$c(t,n,a,r),a!==null&&(Hn(a,t,r),rm(a,n,r)))}function am(t,n,a){var r=Qn();$r(t,n,a,r)}function $r(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(t))sm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,_))return $o(t,n,c,0),ke===null&&Jo(),!1}catch{}if(a=$c(t,n,c,r),a!==null)return Hn(a,t,r),rm(a,n,r),!0}return!1}function Pu(t,n,a,r){if(r={lane:2,revertLane:mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},xl(t)){if(n)throw Error(s(479))}else n=$c(t,a,r,2),n!==null&&Hn(n,t,2)}function xl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function sm(t,n){Xs=hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function rm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Mi(t,a)}}var to={readContext:Mn,use:ml,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};to.useEffectEvent=Qe;var om={readContext:Mn,use:ml,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,_l(4194308,4,Yp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return _l(4194308,4,t,n)},useInsertionEffect:function(t,n){_l(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(ss){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(ss){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=Qv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=wu(t);var n=t.queue,a=am.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(t,n){var a=Nn();return Nu(a,t,n)},useTransition:function(){var t=wu(!1);return t=$p.bind(null,oe,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,c=Nn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(_e&127)!==0||Cp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Xp(Dp.bind(null,r,f,t),[t]),r.flags|=2048,qs(9,{destroy:void 0},wp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=ke.identifierPrefix;if(Se){var a=bi,r=Ti;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zu,useFormState:Fp,useActionState:Fp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return Nn().memoizedState=Kv.bind(null,oe)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:Mn,use:ml,useCallback:Kp,useContext:Mn,useEffect:Uu,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:jp,useMemo:Qp,useReducer:gl,useRef:kp,useState:function(){return gl(Vi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=nn();return Jp(a,Pe.memoizedState,t,n)},useTransition:function(){var t=gl(Vi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Jr(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:zu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=nn();return Np(a,Pe,t,n)},useMemoCache:Au,useCacheRefresh:im};Bu.useEffectEvent=Wp;var lm={readContext:Mn,use:ml,useCallback:Kp,useContext:Mn,useEffect:Uu,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:jp,useMemo:Qp,useReducer:Cu,useRef:kp,useState:function(){return Cu(Vi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=nn();return Pe===null?Nu(a,t,n):Jp(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Cu(Vi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Jr(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:zu,useFormState:Vp,useActionState:Vp,useOptimistic:function(t,n){var a=nn();return Pe!==null?Np(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:im};lm.useEffectEvent=Wp;function Iu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Hn(n,t,r),Yr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(t,c,r),n!==null&&(Hn(n,t,r),Yr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=ga(a);r.tag=2,n!=null&&(r.callback=n),n=_a(t,r,a),n!==null&&(Hn(n,t,a),Yr(n,t,a))}};function cm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function um(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function fm(t){Qo(t)}function hm(t){console.error(t)}function dm(t){Qo(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function pm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function mm(t){return t=ga(t),t.tag=3,t}function gm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){pm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){pm(n,a,r),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function Jv(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ll():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),hf(t,r,c)),!1;case 22:return a.flags|=65536,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),hf(t,r,c)),!1}throw Error(s(435,a.tag))}return hf(t,r,c),Ll(),!1}if(Se)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==su&&(t=Error(s(422),{cause:r}),kr(si(t,a)))):(r!==su&&(n=Error(s(423),{cause:r}),kr(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=si(r,a),c=Hu(t.stateNode,r,c),gu(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),lo===null?lo=[f]:lo.push(f),Je!==4&&(Je=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,r,t),gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=mm(c),gm(c,t,a,r),gu(a,c),!1}a=a.return}while(a!==null);return!1}var Gu=Error(s(461)),on=!1;function En(t,n,a,r){n.child=t===null?Sp(n,null,a,r):as(n,t.child,a,r)}function _m(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var T in r)T!=="ref"&&(_[T]=r[T])}else _=r;return ts(n),r=Mu(t,n,a,_,f,c),T=Eu(),t!==null&&!on?(Tu(t,n,c),ki(t,n,c)):(Se&&T&&iu(n),n.flags|=1,En(t,n,r,c),n.child)}function vm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xm(t,n,f,r,c)):(t=el(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(_,r)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Bi(f,r),t.ref=n.ref,t.return=n,n.child=t}function xm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Hr(f,r)&&t.ref===n.ref)if(on=!1,n.pendingProps=r=f,Zu(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Vu(t,n,a,r,c)}function Sm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return ym(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Ep(n,f):vu(),Tp(n);else return r=n.lanes=536870912,ym(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(sl(n,f.cachePool),Ep(n,f),xa(),n.memoizedState=null):(t!==null&&sl(n,null),vu(),xa());return En(t,n,c,a),n.child}function eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ym(t,n,a,r,c){var f=hu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&sl(n,null),vu(),Tp(n),t!==null&&Is(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=El({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Mm(t,n,a){return as(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function $v(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,eo(null,t);if(Su(n),(t=qe)?(t=Og(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=sp(t),a.return=n,n.child=a,yn=n,qe=null)):t=null,t===null)throw da(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Su(n),c)if(n.flags&256)n.flags&=-257,n=Mm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||Is(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(r=ke,r!==null&&(_=Es(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ka(t,_),Hn(r,t,_),Gu;Ll(),n=Mm(t,n,a)}else t=f.treeContext,qe=ui(_.nextSibling),yn=n,Se=!0,ha=null,li=!1,t!==null&&lp(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Bi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vu(t,n,a,r,c){return ts(n),a=Mu(t,n,a,r,void 0,c),r=Eu(),t!==null&&!on?(Tu(t,n,c),ki(t,n,c)):(Se&&r&&iu(n),n.flags|=1,En(t,n,a,c),n.child)}function Em(t,n,a,r,c,f){return ts(n),n.updateQueue=null,a=Ap(n,r,a,c),bp(t),r=Eu(),t!==null&&!on?(Tu(t,n,f),ki(t,n,f)):(Se&&r&&iu(n),n.flags|=1,En(t,n,a,f),n.child)}function Tm(t,n,a,r,c){if(ts(n),n.stateNode===null){var f=Os,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},pu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Os,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Iu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Kr(n,r,f,c),Zr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=rs(a,T);f.props=P;var tt=f.context,ct=a.contextType;_=Os,typeof ct=="object"&&ct!==null&&(_=Mn(ct));var pt=a.getDerivedStateFromProps;ct=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==_)&&um(n,f,r,_),ma=!1;var nt=n.memoizedState;f.state=nt,Kr(n,r,f,c),Zr(),tt=n.memoizedState,T||nt!==tt||ma?(typeof pt=="function"&&(Iu(n,a,pt,r),tt=n.memoizedState),(P=ma||cm(n,a,P,r,nt,tt,_))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=_,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,mu(t,n),_=n.memoizedProps,ct=rs(a,_),f.props=ct,pt=n.pendingProps,nt=f.context,tt=a.contextType,P=Os,typeof tt=="object"&&tt!==null&&(P=Mn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==pt||nt!==P)&&um(n,f,r,P),ma=!1,nt=n.memoizedState,f.state=nt,Kr(n,r,f,c),Zr();var rt=n.memoizedState;_!==pt||nt!==rt||ma||t!==null&&t.dependencies!==null&&il(t.dependencies)?(typeof T=="function"&&(Iu(n,a,T,r),rt=n.memoizedState),(ct=ma||cm(n,a,ct,r,nt,rt,P)||t!==null&&t.dependencies!==null&&il(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=P,r=ct):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ml(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function bm(t,n,a,r){return Ja(),n.flags|=256,En(t,n,a,r),n.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(t){return{baseLanes:t,cachePool:pp()}}function Wu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Am(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?va(n):xa(),(t=qe)?(t=Og(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:fa!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=sp(t),a.return=n,n.child=a,yn=n,qe=null)):t=null,t===null)throw da(n);return Cf(t)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(xa(),c=n.mode,T=El({mode:"hidden",children:T},c),r=Qa(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=Xu(a),r.childLanes=Wu(t,_,a),n.memoizedState=ku,eo(null,r)):(va(n),qu(n,T))}var P=t.memoizedState;if(P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=ju(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),T=r.fallback,c=n.mode,r=El({mode:"visible",children:r.children},c),T=Qa(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,as(n,t.child,null,a),r=n.child,r.memoizedState=Xu(a),r.childLanes=Wu(t,_,a),n.memoizedState=ku,n=eo(null,r));else if(va(n),Cf(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var tt=_.dgst;_=tt,r=Error(s(419)),r.stack="",r.digest=_,kr({value:r,source:null,stack:null}),n=ju(t,n,a)}else if(on||Is(t,n,a,!1),_=(a&t.childLanes)!==0,on||_){if(_=ke,_!==null&&(r=Es(_,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,Ka(t,r),Hn(_,t,r),Gu;Rf(T)||Ll(),n=ju(t,n,a)}else Rf(T)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,qe=ui(T.nextSibling),yn=n,Se=!0,ha=null,li=!1,t!==null&&lp(n,t),n=qu(n,r.children),n.flags|=4096);return n}return c?(xa(),T=r.fallback,c=n.mode,P=t.child,tt=P.sibling,r=Bi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,tt!==null?T=Bi(tt,T):(T=Qa(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,eo(null,r),r=n.child,T=t.child.memoizedState,T===null?T=Xu(a):(c=T.cachePool,c!==null?(P=sn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=pp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=Wu(t,_,a),n.memoizedState=ku,eo(t.child,r)):(va(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function qu(t,n){return n=El({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function El(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function ju(t,n,a){return as(n,t.child,null,a),t=qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),lu(t.return,n,a)}function Yu(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Cm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=en.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Et(en,_),En(t,n,r,a),r=Se?Vr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,a,n);else if(t.tag===19)Rm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&fl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Yu(n,!0,a,null,f,r);break;case"together":Yu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&il(t)))}function tx(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),pa(n,sn,t.memoizedState.cache),Ja();break;case 27:case 5:ee(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Su(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(t,n,a):(va(n),t=ki(t,n,a),t!==null?t.sibling:null);va(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Is(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Cm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Et(en,en.current),r)break;return null;case 22:return n.lanes=0,Sm(t,n,a,n.pendingProps);case 24:pa(n,sn,t.memoizedState.cache)}return ki(t,n,a)}function wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return on=!1,tx(t,n,a);on=(t.flags&131072)!==0}else on=!1,Se&&(n.flags&1048576)!==0&&op(n,Vr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")tu(t)?(r=rs(t,r),n.tag=1,n=Tm(null,n,t,r,a)):(n.tag=0,n=Vu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=_m(null,n,t,r,a);break t}else if(c===U){n.tag=14,n=vm(null,n,t,r,a);break t}}throw n=ht(t)||t,Error(s(306,n,""))}}return n;case 0:return Vu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rs(r,n.pendingProps),Tm(t,n,r,c,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),Kr(n,r,null,a);var _=n.memoizedState;if(r=_.cache,pa(n,sn,r),r!==f.cache&&cu(n,[sn],a,!0),Zr(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bm(t,n,r,a);break t}else if(r!==c){c=si(Error(s(424)),n),kr(c),n=bm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=ui(t.firstChild),yn=n,Se=!0,ha=null,li=!0,a=Sp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ja(),r===c){n=ki(t,n,a);break t}En(t,n,r,a)}n=n.child}return n;case 26:return Ml(t,n),t===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Fl(vt.current).createElement(a),r[an]=n,r[xn]=t,Tn(r,a,t),xt(r),n.stateNode=r):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&Se&&(r=n.stateNode=Bg(n.type,n.pendingProps,vt.current),yn=n,li=!0,c=qe,Ra(n.type)?(wf=c,qe=ui(r.firstChild)):qe=c),En(t,n,n.pendingProps.children,a),Ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=qe)&&(r=Dx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,yn=n,qe=ui(r.firstChild),li=!1,c=!0):c=!1),c||da(n)),ee(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Tf(c,f)?r=null:_!==null&&Tf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Mu(t,n,Wv,null,null,a),_o._currentValue=c),Ml(t,n),En(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=qe)&&(a=Ux(a,n.pendingProps,li),a!==null?(n.stateNode=a,yn=n,qe=null,t=!0):t=!1),t||da(n)),null;case 13:return Am(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=as(n,null,r,a):En(t,n,r,a),n.child;case 11:return _m(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),En(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=Mn(c),r=r(c),n.flags|=1,En(t,n,r,a),n.child;case 14:return vm(t,n,n.type,n.pendingProps,a);case 15:return xm(t,n,n.type,n.pendingProps,a);case 19:return Cm(t,n,a);case 31:return $v(t,n,a);case 22:return Sm(t,n,a,n.pendingProps);case 24:return ts(n),r=Mn(sn),t===null?(c=hu(),c===null&&(c=ke,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},pu(n),pa(n,sn,c)):((t.lanes&a)!==0&&(mu(t,n),Kr(n,null,null,a),Zr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,sn,r)):(r=f.cache,pa(n,sn,r),r!==c.cache&&cu(n,[sn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function Ku(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw is=ol,du}else t.flags&=-16777217}function Dm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw is=ol,du}function Tl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Ks|=n)}function no(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ex(t,n,a){var r=n.pendingProps;switch(au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(sn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bs(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ru())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(je(n),Dm(n,f)):(je(n),Ku(n,c,null,r,a))):f?f!==t.memoizedState?(Xi(n),je(n),Dm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xi(n),je(n),Ku(n,c,t,r,a)),null;case 27:if(Xe(n),a=vt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=Rt.current,Bs(n)?cp(n):(t=Bg(c,r,a),n.stateNode=t,Xi(n))}return je(n),null;case 5:if(Xe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=Rt.current,Bs(n))cp(n);else{var _=Fl(vt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[an]=n,f[xn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xi(n)}}return je(n),Ku(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=vt.current,Bs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=yn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Ag(t.nodeValue,a)),t||da(n,!0)}else t=Fl(t).createTextNode(r),t[an]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Bs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[an]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Bs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),je(n),null);case 4:return zt(),t===null&&xf(n.stateNode.containerInfo),je(n),null;case 10:return Hi(n.type),je(n),null;case 19:if(it(en),r=n.memoizedState,r===null)return je(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)no(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,no(r,!1),t=f.updateQueue,n.updateQueue=t,Tl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ap(a,t),a=a.sibling;return Et(en,en.current&1|2),Se&&Ii(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>wl&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304)}else{if(!c)if(t=fl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Tl(n,t),no(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return je(n),null}else 2*E()-r.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=en.current,Et(en,c?a&1|2:a&1),Se&&Ii(n,r.treeForkCount),t):(je(n),null);case 22:case 23:return Yn(n),xu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&it(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(sn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function nx(t,n){switch(au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(sn),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(en),null;case 4:return zt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Yn(n),xu(),t!==null&&it(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(sn),null;case 25:return null;default:return null}}function Um(t,n){switch(au(n),n.tag){case 3:Hi(sn),zt();break;case 26:case 27:case 5:Xe(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:it(en);break;case 10:Hi(n.type);break;case 22:case 23:Yn(n),xu(),t!==null&&it(es);break;case 24:Hi(sn)}}function io(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(T){ze(n,n.return,T)}}function Sa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var P=a,tt=T;try{tt()}catch(ct){ze(c,P,ct)}}}r=r.next}while(r!==f)}}catch(ct){ze(n,n.return,ct)}}function Lm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mp(n,a)}catch(r){ze(t,t.return,r)}}}function Nm(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){ze(t,n,c)}}function Ai(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Om(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function Qu(t,n,a){try{var r=t.stateNode;Tx(r,t.type,a,n),r[xn]=n}catch(c){ze(t,t.return,c)}}function zm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ra(t.type)||t.tag===4}function Ju(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ra(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for($u(t,n,a),t=t.sibling;t!==null;)$u(t,n,a),t=t.sibling}function bl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ra(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function Pm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[an]=t,n[xn]=a}catch(f){ze(t,t.return,f)}}var Wi=!1,ln=!1,tf=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function ix(t,n){if(t=t.containerInfo,Mf=ql,t=Zd(t),jc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,T=-1,P=-1,tt=0,ct=0,pt=t,nt=null;e:for(;;){for(var rt;pt!==a||c!==0&&pt.nodeType!==3||(T=_+c),pt!==f||r!==0&&pt.nodeType!==3||(P=_+r),pt.nodeType===3&&(_+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)nt=pt,pt=rt;for(;;){if(pt===t)break e;if(nt===a&&++tt===c&&(T=_),nt===f&&++ct===r&&(P=_),(rt=pt.nextSibling)!==null)break;pt=nt,nt=pt.parentNode}pt=rt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:t,selectionRange:a},ql=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=rs(a.type,c);t=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){ze(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function Im(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&io(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ze(a,a.return,_)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ze(a,a.return,_)}}r&64&&Lm(a),r&512&&ao(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(t,n)}catch(_){ze(a,a.return,_)}}break;case 27:n===null&&r&4&&Pm(a);case 26:case 5:ji(t,a),n===null&&r&4&&Om(a),r&512&&ao(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&Gm(t,a);break;case 13:ji(t,a),r&4&&Vm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=hx.bind(null,a),Lx(t,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||ln,c=Wi;var f=ln;Wi=r,(ln=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),Wi=c,ln=f}break;case 30:break;default:ji(t,a)}}function Fm(t){var n=t.alternate;n!==null&&(t.alternate=null,Fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&A(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Pn=!1;function qi(t,n,a){for(a=a.child;a!==null;)Hm(t,n,a),a=a.sibling}function Hm(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:ln||Ai(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ai(a,n);var r=Ye,c=Pn;Ra(a.type)&&(Ye=a.stateNode,Pn=!1),qi(t,n,a),po(a.stateNode),Ye=r,Pn=c;break;case 5:ln||Ai(a,n);case 6:if(r=Ye,c=Pn,Ye=null,qi(t,n,a),Ye=r,Pn=c,Ye!==null)if(Pn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ye!==null&&(Pn?(t=Ye,Lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ar(t)):Lg(Ye,a.stateNode));break;case 4:r=Ye,c=Pn,Ye=a.stateNode.containerInfo,Pn=!0,qi(t,n,a),Ye=r,Pn=c;break;case 0:case 11:case 14:case 15:Sa(2,a,n),ln||Sa(4,a,n),qi(t,n,a);break;case 1:ln||(Ai(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Nm(a,n,r)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:ln=(r=ln)||a.memoizedState!==null,qi(t,n,a),ln=r;break;default:qi(t,n,a)}}function Gm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ar(t)}catch(a){ze(n,n.return,a)}}}function Vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ar(t)}catch(a){ze(n,n.return,a)}}function ax(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bm),n;default:throw Error(s(435,t.tag))}}function Al(t,n){var a=ax(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=dx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){Ye=T.stateNode,Pn=!1;break t}break;case 5:Ye=T.stateNode,Pn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(Ye===null)throw Error(s(160));Hm(f,_,c),Ye=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,t),n=n.sibling}var pi=null;function km(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),r&4&&(Sa(3,t,t.return),io(3,t),Sa(5,t,t.return));break;case 1:Bn(n,t),In(t),r&512&&(ln||a===null||Ai(a,a.return)),r&64&&Wi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=pi;if(Bn(n,t),In(t),r&512&&(ln||a===null||Ai(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Wa]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[an]=t,xt(f),r=f;break t;case"link":var _=kg("link","href",c).get(r+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=kg("meta","content",c).get(r+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=t,xt(f),r=f}t.stateNode=r}else Xg(c,t.type,t.stateNode);else t.stateNode=Vg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Xg(c,t.type,t.stateNode):Vg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),r&512&&(ln||a===null||Ai(a,a.return)),a!==null&&r&4&&Qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),r&512&&(ln||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{Rs(c,"")}catch(Gt){ze(t,t.return,Gt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,Qu(t,c,a!==null?a.memoizedProps:c)),r&1024&&(tf=!0);break;case 6:if(Bn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Gt){ze(t,t.return,Gt)}}break;case 3:if(Vl=null,c=pi,pi=Hl(n.containerInfo),Bn(n,t),pi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ar(n.containerInfo)}catch(Gt){ze(t,t.return,Gt)}tf&&(tf=!1,Xm(t));break;case 4:r=pi,pi=Hl(t.stateNode.containerInfo),Bn(n,t),In(t),pi=r;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,tt=Wi,ct=ln;if(Wi=tt||c,ln=ct||P,Bn(n,t),ln=ct,Wi=tt,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Wi||ln||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=P.stateNode;var pt=P.memoizedProps.style,nt=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){ze(P,P.return,Gt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(Gt){ze(P,P.return,Gt)}}}else if(n.tag===18){if(a===null){P=n;try{var rt=P.stateNode;c?Ng(rt,!0):Ng(P.stateNode,!1)}catch(Gt){ze(P,P.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Al(t,a))));break;case 19:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Ju(t);bl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Rs(_,""),a.flags&=-33);var T=Ju(t);bl(t,T,_);break;case 3:case 4:var P=a.stateNode.containerInfo,tt=Ju(t);$u(t,tt,P);break;default:throw Error(s(161))}}catch(ct){ze(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Xm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),os(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),os(n);break;case 27:po(n.stateNode);case 26:case 5:Ai(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),io(4,f);break;case 1:if(Yi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){ze(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)yp(P[c],T)}catch(tt){ze(r,r.return,tt)}}a&&_&64&&Lm(f),ao(f,f.return);break;case 27:Pm(f);case 26:case 5:Yi(c,f,a),a&&r===null&&_&4&&Om(f),ao(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&_&4&&Gm(c,f);break;case 13:Yi(c,f,a),a&&_&4&&Vm(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),ao(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xr(a))}function nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xr(t))}function mi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(t,n,a,r),n=n.sibling}function Wm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,r),c&2048&&io(9,n);break;case 1:mi(t,n,a,r);break;case 3:mi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xr(t)));break;case 12:if(c&2048){mi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){ze(n,n.return,P)}}else mi(t,n,a,r);break;case 31:mi(t,n,a,r);break;case 13:mi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,r):so(t,n):f._visibility&2?mi(t,n,a,r):(f._visibility|=2,js(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(_,n);break;case 24:mi(t,n,a,r),c&2048&&nf(n.alternate,n);break;default:mi(t,n,a,r)}}function js(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,P=r,tt=_.flags;switch(_.tag){case 0:case 11:case 15:js(f,_,T,P,c),io(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?js(f,_,T,P,c):so(f,_):(ct._visibility|=2,js(f,_,T,P,c)),c&&tt&2048&&ef(_.alternate,_);break;case 24:js(f,_,T,P,c),c&&tt&2048&&nf(_.alternate,_);break;default:js(f,_,T,P,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:so(a,r),c&2048&&ef(r.alternate,r);break;case 24:so(a,r),c&2048&&nf(r.alternate,r);break;default:so(a,r)}n=n.sibling}}var ro=8192;function Ys(t,n,a){if(t.subtreeFlags&ro)for(t=t.child;t!==null;)qm(t,n,a),t=t.sibling}function qm(t,n,a){switch(t.tag){case 26:Ys(t,n,a),t.flags&ro&&t.memoizedState!==null&&Xx(a,pi,t.memoizedState,t.memoizedProps);break;case 5:Ys(t,n,a);break;case 3:case 4:var r=pi;pi=Hl(t.stateNode.containerInfo),Ys(t,n,a),pi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ro,ro=16777216,Ys(t,n,a),ro=r):Ys(t,n,a));break;default:Ys(t,n,a)}}function jm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,Zm(r,t)}jm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ym(t),t=t.sibling}function Ym(t){switch(t.tag){case 0:case 11:case 15:oo(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:oo(t);break;case 12:oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):oo(t);break;default:oo(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];gn=r,Zm(r,t)}jm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function Zm(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,gn=r;else t:for(a=t;gn!==null;){r=gn;var c=r.sibling,f=r.return;if(Fm(r),r===a){gn=null;break t}if(c!==null){c.return=f,gn=c;break t}gn=f}}}var sx={getCacheForType:function(t){var n=Mn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},rx=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,pe=null,_e=0,Oe=0,Zn=null,ya=!1,Zs=!1,af=!1,Zi=0,Je=0,Ma=0,ls=0,sf=0,Kn=0,Ks=0,lo=null,Fn=null,rf=!1,Cl=0,Km=0,wl=1/0,Dl=null,Ea=null,fn=0,Ta=null,Qs=null,Ki=0,of=0,lf=null,Qm=null,co=0,cf=null;function Qn(){return(De&2)!==0&&_e!==0?_e&-_e:z.T!==null?mf():Xa()}function Jm(){if(Kn===0)if((_e&536870912)===0||Se){var t=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Kn=t}else Kn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===ke&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Js(t,0),ba(t,_e,Kn,!1)),Un(t,a),((De&2)===0||t!==ke)&&(t===ke&&((De&2)===0&&(ls|=a),Je===4&&ba(t,_e,Kn,!1)),Ri(t))}function $m(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=r?cx(t,n):ff(t,n,!0),f=r;do{if(c===0){Zs&&!r&&ba(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ox(a)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;c=lo;var P=T.current.memoizedState.isDehydrated;if(P&&(Js(T,_).flags|=256),_=ff(T,_,!1),_!==2){if(af&&!P){T.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Js(t,0),ba(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ba(r,n,Kn,!ya);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Cl+300-E(),10<c)){if(ba(r,n,Kn,!ya),gt(r,0,!0)!==0)break t;Ki=n,r.timeoutHandle=Dg(tg.bind(null,r,a,Fn,Dl,rf,n,Kn,ls,Ks,ya,f,"Throttled",-0,0),c);break t}tg(r,a,Fn,Dl,rf,n,Kn,ls,Ks,ya,f,null,-0,0)}}break}while(!0);Ri(t)}function tg(t,n,a,r,c,f,_,T,P,tt,ct,pt,nt,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},qm(n,f,pt);var Gt=(f&62914560)===f?Cl-E():(f&4194048)===f?Km-E():0;if(Gt=Wx(pt,Gt),Gt!==null){Ki=f,t.cancelPendingCommit=Gt(lg.bind(null,t,n,f,a,r,c,_,T,P,ct,pt,null,nt,rt)),ba(t,f,_,!tt);return}}lg(t,n,f,a,r,c,_,T,P)}function ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(t,n,a,r){n&=~sf,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Dr(t,a,n)}function Ul(){return(De&6)===0?(uo(0),!1):!0}function uf(){if(pe!==null){if(Oe===0)var t=pe.return;else t=pe,Fi=$a=null,bu(t),Vs=null,qr=0,t=pe;for(;t!==null;)Um(t.alternate,t),t=t.return;pe=null}}function Js(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Rx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,uf(),ke=t,pe=a=Bi(t.current,null),_e=n,Oe=0,Zn=null,ya=!1,Zs=Ft(t,n),af=!1,Ks=Kn=sf=ls=Ma=Je=0,Fn=lo=null,rf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Pt(r),f=1<<c;n|=t[c],r&=~f}return Zi=n,Jo(),a}function eg(t,n){oe=null,z.H=to,n===Gs||n===rl?(n=_p(),Oe=3):n===du?(n=_p(),Oe=4):Oe=n===Gu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(Je=1,Sl(t,si(n,t.current)))}function ng(){var t=jn.current;return t===null?!0:(_e&4194048)===_e?ci===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ci:!1}function ig(){var t=z.H;return z.H=to,t===null?to:t}function ag(){var t=z.A;return z.A=sx,t}function Ll(){Je=4,ya||(_e&4194048)!==_e&&jn.current!==null||(Zs=!0),(Ma&134217727)===0&&(ls&134217727)===0||ke===null||ba(ke,_e,Kn,!1)}function ff(t,n,a){var r=De;De|=2;var c=ig(),f=ag();(ke!==t||_e!==n)&&(Dl=null,Js(t,n)),n=!1;var _=Je;t:do try{if(Oe!==0&&pe!==null){var T=pe,P=Zn;switch(Oe){case 8:uf(),_=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var tt=Oe;if(Oe=0,Zn=null,$s(t,T,P,tt),a&&Zs){_=0;break t}break;default:tt=Oe,Oe=0,Zn=null,$s(t,T,P,tt)}}lx(),_=Je;break}catch(ct){eg(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Fi=$a=null,De=r,z.H=c,z.A=f,pe===null&&(ke=null,_e=0,Jo()),_}function lx(){for(;pe!==null;)sg(pe)}function cx(t,n){var a=De;De|=2;var r=ig(),c=ag();ke!==t||_e!==n?(Dl=null,wl=E()+500,Js(t,n)):Zs=Ft(t,n);t:do try{if(Oe!==0&&pe!==null){n=pe;var f=Zn;e:switch(Oe){case 1:Oe=0,Zn=null,$s(t,n,f,1);break;case 2:case 9:if(mp(f)){Oe=0,Zn=null,rg(n);break}n=function(){Oe!==2&&Oe!==9||ke!==t||(Oe=7),Ri(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:mp(f)?(Oe=0,Zn=null,rg(n)):(Oe=0,Zn=null,$s(t,n,f,7));break;case 5:var _=null;switch(pe.tag){case 26:_=pe.memoizedState;case 5:case 27:var T=pe;if(_?Wg(_):T.stateNode.complete){Oe=0,Zn=null;var P=T.sibling;if(P!==null)pe=P;else{var tt=T.return;tt!==null?(pe=tt,Nl(tt)):pe=null}break e}}Oe=0,Zn=null,$s(t,n,f,5);break;case 6:Oe=0,Zn=null,$s(t,n,f,6);break;case 8:uf(),Je=6;break t;default:throw Error(s(462))}}ux();break}catch(ct){eg(t,ct)}while(!0);return Fi=$a=null,z.H=r,z.A=c,De=a,pe!==null?0:(ke=null,_e=0,Jo(),Je)}function ux(){for(;pe!==null&&!Ze();)sg(pe)}function sg(t){var n=wm(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Nl(t):pe=n}function rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Em(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Em(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:bu(n);default:Um(a,n),n=pe=ap(n,Zi),n=wm(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Nl(t):pe=n}function $s(t,n,a,r){Fi=$a=null,bu(n),Vs=null,qr=0;var c=n.return;try{if(Jv(t,c,n,a,_e)){Je=1,Sl(t,si(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Je=1,Sl(t,si(a,t.current)),pe=null;return}n.flags&32768?(Se||r===1?t=!0:Zs||(_e&536870912)!==0?t=!1:(ya=t=!0,(r===2||r===9||r===3||r===6)&&(r=jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),og(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){og(n,ya);return}t=n.return;var a=ex(n.alternate,n,Zi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Je===0&&(Je=5)}function og(t,n){do{var a=nx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Je=6,pe=null}function lg(t,n,a,r,c,f,_,T,P){t.cancelPendingCommit=null;do Ol();while(fn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Jc,ii(t,a,f,_,T,P),t===ke&&(pe=ke=null,_e=0),Qs=n,Ta=t,Ki=a,of=f,lf=c,Qm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,px(lt,function(){return dg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=K.p,K.p=2,_=De,De|=4;try{ix(t,n,a)}finally{De=_,K.p=c,z.T=r}}fn=1,cg(),ug(),fg()}}function cg(){if(fn===1){fn=0;var t=Ta,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=De;De|=4;try{km(n,t);var f=Ef,_=Zd(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&Yd(T.ownerDocument.documentElement,T)){if(P!==null&&jc(T)){var tt=P.start,ct=P.end;if(ct===void 0&&(ct=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ct,T.value.length);else{var pt=T.ownerDocument||document,nt=pt&&pt.defaultView||window;if(nt.getSelection){var rt=nt.getSelection(),Gt=T.textContent.length,te=Math.min(P.start,Gt),Ie=P.end===void 0?te:Math.min(P.end,Gt);!rt.extend&&te>Ie&&(_=Ie,Ie=te,te=_);var Y=jd(T,te),k=jd(T,Ie);if(Y&&k&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var $=pt.createRange();$.setStart(Y.node,Y.offset),rt.removeAllRanges(),te>Ie?(rt.addRange($),rt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),rt.addRange($))}}}}for(pt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var dt=pt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}ql=!!Mf,Ef=Mf=null}finally{De=c,K.p=r,z.T=a}}t.current=n,fn=2}}function ug(){if(fn===2){fn=0;var t=Ta,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=De;De|=4;try{Im(t,n.alternate,n)}finally{De=c,K.p=r,z.T=a}}fn=3}}function fg(){if(fn===4||fn===3){fn=0,L();var t=Ta,n=Qs,a=Ki,r=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Qs=Ta=null,hg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ea=null),bs(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var T=r[_];f(T.value,{componentStack:T.stack})}}finally{z.T=n,K.p=c}}(Ki&3)!==0&&Ol(),Ri(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===cf?co++:(co=0,cf=t):co=0,uo(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xr(n)))}function Ol(){return cg(),ug(),fg(),dg()}function dg(){if(fn!==5)return!1;var t=Ta,n=of;of=0;var a=bs(Ki),r=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=lf,lf=null;var f=Ta,_=Ki;if(fn=0,Qs=Ta=null,Ki=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,Ym(f.current),Wm(f,f.current,_,a),De=T,uo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{K.p=c,z.T=r,hg(t,n)}}function pg(t,n,a){n=si(a,n),n=Hu(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(Un(t,2),Ri(t))}function ze(t,n,a){if(t.tag===3)pg(t,t,a);else for(;n!==null;){if(n.tag===3){pg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){t=si(a,t),a=mm(2),r=_a(n,a,2),r!==null&&(gm(a,r,n,t),Un(r,2),Ri(r));break}}n=n.return}}function hf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new rx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(af=!0,c.add(a),t=fx.bind(null,t,n,a),n.then(t,t))}function fx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(_e&a)===a&&(Je===4||Je===3&&(_e&62914560)===_e&&300>E()-Cl?(De&2)===0&&Js(t,0):sf|=a,Ks===_e&&(Ks=0)),Ri(t)}function mg(t,n){n===0&&(n=Ne()),t=Ka(t,n),t!==null&&(Un(t,n),Ri(t))}function hx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(t,a)}function dx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),mg(t,a)}function px(t,n){return se(t,n)}var zl=null,tr=null,df=!1,Pl=!1,pf=!1,Aa=0;function Ri(t){t!==tr&&t.next===null&&(tr===null?zl=tr=t:tr=tr.next=t),Pl=!0,df||(df=!0,gx())}function uo(t,n){if(!pf&&Pl){pf=!0;do for(var a=!1,r=zl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,xg(r,f))}else f=_e,f=gt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,xg(r,f));r=r.next}while(a);pf=!1}}function mx(){gg()}function gg(){Pl=df=!1;var t=0;Aa!==0&&Ax()&&(t=Aa);for(var n=E(),a=null,r=zl;r!==null;){var c=r.next,f=_g(r,n);f===0?(r.next=null,a===null?zl=c:a.next=c,c===null&&(tr=a)):(a=r,(t!==0||(f&3)!==0)&&(Pl=!0)),r=c}fn!==0&&fn!==5||uo(t),Aa!==0&&(Aa=0)}function _g(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Pt(f),T=1<<_,P=c[_];P===-1?((T&a)===0||(T&r)!==0)&&(c[_]=ie(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=_e,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ke(r),bs(a)){case 2:case 8:a=yt;break;case 32:a=lt;break;case 268435456:a=Ct;break;default:a=lt}return r=vg.bind(null,t),a=se(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ke(r),t.callbackPriority=2,t.callbackNode=null,2}function vg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var r=_e;return r=gt(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:($m(t,r,n),_g(t,E()),t.callbackNode!=null&&t.callbackNode===a?vg.bind(null,t):null)}function xg(t,n){if(Ol())return null;$m(t,n,!0)}function gx(){Cx(function(){(De&6)!==0?se(ft,mx):gg()})}function mf(){if(Aa===0){var t=Fs;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Aa=t}return Aa}function Sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _x(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Sg((c[xn]||null).action),_=r.submitter;_&&(n=(n=_[xn]||null)?Sg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Yo("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var P=_?yg(c,_):new FormData(c);Ou(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=_?yg(c,_):new FormData(c),Ou(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var gf=0;gf<Qc.length;gf++){var _f=Qc[gf],vx=_f.toLowerCase(),xx=_f[0].toUpperCase()+_f.slice(1);di(vx,"on"+xx)}di(Jd,"onAnimationEnd"),di($d,"onAnimationIteration"),di(tp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(zv,"onTransitionRun"),di(Pv,"onTransitionStart"),di(Bv,"onTransitionCancel"),di(ep,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function Mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var T=r[_],P=T.instance,tt=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ct){Qo(ct)}c.currentTarget=null,f=P}else for(_=0;_<r.length;_++){if(T=r[_],P=T.instance,tt=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ct){Qo(ct)}c.currentTarget=null,f=P}}}}function me(t,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var r=t+"__bubble";a.has(r)||(Eg(n,t,2,!1),a.add(r))}function vf(t,n,a){var r=0;n&&(r|=4),Eg(a,t,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function xf(t){if(!t[Bl]){t[Bl]=!0,Lt.forEach(function(a){a!=="selectionchange"&&(Sx.has(a)||vf(a,!1,t),vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,vf("selectionchange",!1,n))}}function Eg(t,n,a,r){switch(Jg(n)){case 2:var c=Yx;break;case 8:c=Zx;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Sf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var T=r.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=r.return;_!==null;){var P=_.tag;if((P===3||P===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=q(T),_===null)return;if(P=_.tag,P===5||P===6||P===26||P===27){r=f=_;continue t}T=T.parentNode}}r=r.return}Cd(function(){var tt=f,ct=Pc(a),pt=[];t:{var nt=np.get(t);if(nt!==void 0){var rt=Yo,Gt=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":rt=dv;break;case"focusin":Gt="focus",rt=Vc;break;case"focusout":Gt="blur",rt=Vc;break;case"beforeblur":case"afterblur":rt=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=gv;break;case Jd:case $d:case tp:rt=av;break;case ep:rt=vv;break;case"scroll":case"scrollend":rt=$0;break;case"wheel":rt=Sv;break;case"copy":case"cut":case"paste":rt=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Nd;break;case"toggle":case"beforetoggle":rt=Mv}var te=(n&4)!==0,Ie=!te&&(t==="scroll"||t==="scrollend"),Y=te?nt!==null?nt+"Capture":null:nt;te=[];for(var k=tt,$;k!==null;){var dt=k;if($=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||$===null||Y===null||(dt=Nr(k,Y),dt!=null&&te.push(ho(k,dt,$))),Ie)break;k=k.return}0<te.length&&(nt=new rt(nt,Gt,null,a,ct),pt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",nt&&a!==zc&&(Gt=a.relatedTarget||a.fromElement)&&(q(Gt)||Gt[ca]))break t;if((rt||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,rt?(Gt=a.relatedTarget||a.toElement,rt=tt,Gt=Gt?q(Gt):null,Gt!==null&&(Ie=u(Gt),te=Gt.tag,Gt!==Ie||te!==5&&te!==27&&te!==6)&&(Gt=null)):(rt=null,Gt=tt),rt!==Gt)){if(te=Ud,dt="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=Nd,dt="onPointerLeave",Y="onPointerEnter",k="pointer"),Ie=rt==null?nt:st(rt),$=Gt==null?nt:st(Gt),nt=new te(dt,k+"leave",rt,a,ct),nt.target=Ie,nt.relatedTarget=$,dt=null,q(ct)===tt&&(te=new te(Y,k+"enter",Gt,a,ct),te.target=$,te.relatedTarget=Ie,dt=te),Ie=dt,rt&&Gt)e:{for(te=yx,Y=rt,k=Gt,$=0,dt=Y;dt;dt=te(dt))$++;dt=0;for(var $t=k;$t;$t=te($t))dt++;for(;0<$-dt;)Y=te(Y),$--;for(;0<dt-$;)k=te(k),dt--;for(;$--;){if(Y===k||k!==null&&Y===k.alternate){te=Y;break e}Y=te(Y),k=te(k)}te=null}else te=null;rt!==null&&Tg(pt,nt,rt,te,!1),Gt!==null&&Ie!==null&&Tg(pt,Ie,Gt,te,!0)}}t:{if(nt=tt?st(tt):window,rt=nt.nodeName&&nt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&nt.type==="file")var be=Gd;else if(Fd(nt))if(Vd)be=Lv;else{be=Dv;var Xt=wv}else rt=nt.nodeName,!rt||rt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Oc(tt.elementType)&&(be=Gd):be=Uv;if(be&&(be=be(t,tt))){Hd(pt,be,a,ct);break t}Xt&&Xt(t,nt,tt),t==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&un(nt,"number",nt.value)}switch(Xt=tt?st(tt):window,t){case"focusin":(Fd(Xt)||Xt.contentEditable==="true")&&(Us=Xt,Yc=tt,Gr=null);break;case"focusout":Gr=Yc=Us=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Kd(pt,a,ct);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Kd(pt,a,ct)}var le;if(Xc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ds?Bd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Od&&a.locale!=="ko"&&(Ds||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ds&&(le=wd()):(ua=ct,Fc="value"in ua?ua.value:ua.textContent,Ds=!0)),Xt=Il(tt,ve),0<Xt.length&&(ve=new Ld(ve,t,null,a,ct),pt.push({event:ve,listeners:Xt}),le?ve.data=le:(le=Id(a),le!==null&&(ve.data=le)))),(le=Tv?bv(t,a):Av(t,a))&&(ve=Il(tt,"onBeforeInput"),0<ve.length&&(Xt=new Ld("onBeforeInput","beforeinput",null,a,ct),pt.push({event:Xt,listeners:ve}),Xt.data=le)),_x(pt,t,tt,a,ct)}Mg(pt,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Il(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Nr(t,a),c!=null&&r.unshift(ho(t,c,f)),c=Nr(t,n),c!=null&&r.push(ho(t,c,f))),t.tag===3)return r;t=t.return}return[]}function yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var T=a,P=T.alternate,tt=T.stateNode;if(T=T.tag,P!==null&&P===r)break;T!==5&&T!==26&&T!==27||tt===null||(P=tt,c?(tt=Nr(a,f),tt!=null&&_.unshift(ho(a,tt,P))):c||(tt=Nr(a,f),tt!=null&&_.push(ho(a,tt,P)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(Mx,`
`).replace(Ex,"")}function Ag(t,n){return n=bg(n),bg(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Rs(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Rs(t,""+r);break;case"className":Le(t,"class",r);break;case"tabIndex":Le(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,a,r);break;case"style":Ad(t,r,f);break;case"data":if(n!=="object"){Le(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),Ve(t,"popover",r);break;case"xlinkActuate":de(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":de(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":de(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":de(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":de(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":de(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":de(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":de(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":de(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Q0.get(a)||a,Ve(t,a,r))}}function yf(t,n,a,r,c,f){switch(a){case"style":Ad(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Rs(t,r):(typeof r=="number"||typeof r=="bigint")&&Rs(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ve(t,a,r)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,_,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=_=c=null,P=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":_=ct;break;case"checked":P=ct;break;case"defaultChecked":tt=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Be(t,n,r,ct,a,null)}}Ln(t,f,T,P,tt,_,c,!1);return;case"select":me("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":r=T;default:Be(t,n,c,T,a,null)}n=f,a=_,t.multiple=!!r,n!=null?tn(t,!!r,n,!1):a!=null&&tn(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(t,n,_,T,a,null)}Ei(t,r,c,f);return;case"option":for(P in a)a.hasOwnProperty(P)&&(r=a[P],r!=null)&&(P==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,P,r,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<fo.length;r++)me(fo[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,tt,r,a,null)}return;default:if(Oc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&yf(t,n,ct,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Be(t,n,T,r,a,null))}function Tx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,T=null,P=null,tt=null,ct=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=pt;default:r.hasOwnProperty(rt)||Be(t,n,rt,null,r,pt)}}for(var nt in r){var rt=r[nt];if(pt=a[nt],r.hasOwnProperty(nt)&&(rt!=null||pt!=null))switch(nt){case"type":f=rt;break;case"name":c=rt;break;case"checked":tt=rt;break;case"defaultChecked":ct=rt;break;case"value":_=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==pt&&Be(t,n,nt,rt,r,pt)}}Rn(t,_,T,P,tt,ct,f,c);return;case"select":rt=_=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==P&&Be(t,n,c,f,r,P)}n=T,a=_,r=rt,nt!=null?tn(t,!!a,nt,!1):!!r!=!!a&&(n!=null?tn(t,!!a,n,!0):tn(t,!!a,a?[]:"",!1));return;case"textarea":rt=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":nt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,_,c,r,f)}As(t,nt,rt);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Be(t,n,Gt,null,r,nt));for(P in r)nt=r[P],rt=a[P],r.hasOwnProperty(P)&&nt!==rt&&(nt!=null||rt!=null)&&(P==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Be(t,n,P,nt,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te)&&Be(t,n,te,null,r,nt);for(tt in r)if(nt=r[tt],rt=a[tt],r.hasOwnProperty(tt)&&nt!==rt&&(nt!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Be(t,n,tt,nt,r,rt)}return;default:if(Oc(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!r.hasOwnProperty(Ie)&&yf(t,n,Ie,void 0,r,nt);for(ct in r)nt=r[ct],rt=a[ct],!r.hasOwnProperty(ct)||nt===rt||nt===void 0&&rt===void 0||yf(t,n,ct,nt,r,rt);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!r.hasOwnProperty(Y)&&Be(t,n,Y,null,r,nt);for(pt in r)nt=r[pt],rt=a[pt],!r.hasOwnProperty(pt)||nt===rt||nt==null&&rt==null||Be(t,n,pt,nt,r,rt)}function Rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,T=c.duration;if(f&&T&&Rg(_)){for(_=0,T=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],tt=P.startTime;if(tt>T)break;var ct=P.transferSize,pt=P.initiatorType;ct&&Rg(pt)&&(P=P.responseEnd,_+=ct*(P<T?1:(T-tt)/(P-tt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mf=null,Ef=null;function Fl(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Tf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bf=null;function Ax(){var t=window.event;return t&&t.type==="popstate"?t===bf?!1:(bf=t,!0):(bf=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(wx)}:Dg;function wx(t){setTimeout(function(){throw t})}function Ra(t){return t==="head"}function Lg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ar(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,po(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[Wa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&po(t.ownerDocument.body);a=c}while(a);ar(n)}function Ng(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Af(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Dx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Wa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Ux(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Rf(t){return t.data==="$?"||t.data==="$~"}function Cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Lx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wf=null;function zg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Bg(t,n,a){switch(n=Fl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);A(t)}var fi=new Map,Ig=new Set;function Hl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=K.d;K.d={f:Nx,r:Ox,D:zx,C:Px,L:Bx,m:Ix,X:Hx,S:Fx,M:Gx};function Nx(){var t=Qi.f(),n=Ul();return t||n}function Ox(t){var n=at(t);n!==null&&n.tag===5&&n.type==="form"?em(n):Qi.r(t)}var er=typeof document>"u"?null:document;function Fg(t,n,a){var r=er;if(r&&typeof n=="string"&&n){var c=ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ig.has(c)||(Ig.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",t),xt(n),r.head.appendChild(n)))}}function zx(t){Qi.D(t),Fg("dns-prefetch",t,null)}function Px(t,n){Qi.C(t,n),Fg("preconnect",t,n)}function Bx(t,n,a){Qi.L(t,n,a);var r=er;if(r&&t&&n){var c='link[rel="preload"][as="'+ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ge(a.imageSizes)+'"]')):c+='[href="'+ge(t)+'"]';var f=c;switch(n){case"style":f=nr(t);break;case"script":f=ir(t)}fi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(mo(f))||n==="script"&&r.querySelector(go(f))||(n=r.createElement("link"),Tn(n,"link",t),xt(n),r.head.appendChild(n)))}}function Ix(t,n){Qi.m(t,n);var a=er;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ge(r)+'"][href="'+ge(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ir(t)}if(!fi.has(f)&&(t=v({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}r=a.createElement("link"),Tn(r,"link",t),xt(r),a.head.appendChild(r)}}}function Fx(t,n,a){Qi.S(t,n,a);var r=er;if(r&&t){var c=j(r).hoistableStyles,f=nr(t);n=n||"default";var _=c.get(f);if(!_){var T={loading:0,preload:null};if(_=r.querySelector(mo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Df(t,a);var P=_=r.createElement("link");xt(P),Tn(P,"link",t),P._p=new Promise(function(tt,ct){P.onload=tt,P.onerror=ct}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Gl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(f,_)}}}function Hx(t,n){Qi.X(t,n);var a=er;if(a&&t){var r=j(a).hoistableScripts,c=ir(t),f=r.get(c);f||(f=a.querySelector(go(c)),f||(t=v({src:t,async:!0},n),(n=fi.get(c))&&Uf(t,n),f=a.createElement("script"),xt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Gx(t,n){Qi.M(t,n);var a=er;if(a&&t){var r=j(a).hoistableScripts,c=ir(t),f=r.get(c);f||(f=a.querySelector(go(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Uf(t,n),f=a.createElement("script"),xt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Hg(t,n,a,r){var c=(c=vt.current)?Hl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=nr(a.href),a=j(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=nr(a.href);var f=j(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(mo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||Vx(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ir(a),a=j(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function nr(t){return'href="'+ge(t)+'"'}function mo(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Vx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),xt(n),t.head.appendChild(n))}function ir(t){return'[src="'+ge(t)+'"]'}function go(t){return"script[async]"+t}function Vg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ge(a.href)+'"]');if(r)return n.instance=r,xt(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),xt(r),Tn(r,"style",c),Gl(r,a.precedence,t),n.instance=r;case"stylesheet":c=nr(a.href);var f=t.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,xt(f),f;r=Gg(a),(c=fi.get(c))&&Df(r,c),f=(t.ownerDocument||t).createElement("link"),xt(f);var _=f;return _._p=new Promise(function(T,P){_.onload=T,_.onerror=P}),Tn(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,t),n.instance=f;case"script":return f=ir(a.src),(c=t.querySelector(go(f)))?(n.instance=c,xt(c),c):(r=a,(c=fi.get(f))&&(r=v({},a),Uf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),xt(c),Tn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,t));return n.instance}function Gl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var T=r[_];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function kg(t,n,a){if(Vl===null){var r=new Map,c=Vl=new Map;c.set(a,r)}else c=Vl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Wa]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=r.get(_);T?T.push(f):r.set(_,[f])}}return r}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function kx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Xx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=nr(r.href),f=n.querySelector(mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xt(f);return}f=n.ownerDocument||n,r=Gg(r),(c=fi.get(c))&&Df(r,c),f=f.createElement("link"),xt(f);var _=f;_._p=new Promise(function(T,P){_.onload=T,_.onerror=P}),Tn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function Wx(t,n){return t.stylesheets&&t.count===0&&Wl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Lf===0&&(Lf=62500*bx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Lf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function Wl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(qx,t),Xl=null,kl.call(t))}function qx(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var r=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=kl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:O,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function jx(t,n,a,r,c,f,_,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function qg(t,n,a,r,c,f,_,T,P,tt,ct,pt){return t=new jx(t,n,a,_,P,tt,ct,pt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},pu(f),t}function jg(t){return t?(t=Os,t):Os}function Yg(t,n,a,r,c,f){c=jg(c),r.context===null?r.context=c:r.pendingContext=c,r=ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(t,r,n),a!==null&&(Hn(a,t,n),Yr(a,t,n))}function Zg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){Zg(t,n),(t=t.alternate)&&Zg(t,n)}function Kg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Hn(n,t,67108864),Nf(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ts(n);var a=Ka(t,n);a!==null&&Hn(a,t,n),Nf(t,n)}}var ql=!0;function Yx(t,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Of(t,n,a,r)}finally{K.p=f,z.T=c}}function Zx(t,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Of(t,n,a,r)}finally{K.p=f,z.T=c}}function Of(t,n,a,r){if(ql){var c=zf(r);if(c===null)Sf(t,n,r,jl,a),$g(t,r);else if(Qx(c,t,n,a,r))r.stopPropagation();else if($g(t,r),n&4&&-1<Kx.indexOf(t)){for(;c!==null;){var f=at(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var P=1<<31-Pt(_);T.entanglements[1]|=P,_&=~P}Ri(f),(De&6)===0&&(wl=E()+500,uo(0))}}break;case 31:case 13:T=Ka(f,2),T!==null&&Hn(T,f,2),Ul(),Nf(f,2)}if(f=zf(r),f===null&&Sf(t,n,r,jl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Sf(t,n,r,null,a)}}function zf(t){return t=Pc(t),Pf(t)}var jl=null;function Pf(t){if(jl=null,t=q(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jl=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case ft:return 2;case yt:return 8;case lt:case jt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Bf=!1,Ca=null,wa=null,Da=null,vo=new Map,xo=new Map,Ua=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function So(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=at(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Qx(t,n,a,r,c){switch(n){case"focusin":return Ca=So(Ca,t,n,a,r,c),!0;case"dragenter":return wa=So(wa,t,n,a,r,c),!0;case"mouseover":return Da=So(Da,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,So(vo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,So(xo.get(f)||null,t,n,a,r,c)),!0}return!1}function t_(t){var n=q(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ur(t.priority,function(){Qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ur(t.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);zc=r,a.target.dispatchEvent(r),zc=null}else return n=at(a),n!==null&&Kg(n),t.blockedOn=a,!1;n.shift()}return!0}function e_(t,n,a){Yl(t)&&a.delete(n)}function Jx(){Bf=!1,Ca!==null&&Yl(Ca)&&(Ca=null),wa!==null&&Yl(wa)&&(wa=null),Da!==null&&Yl(Da)&&(Da=null),vo.forEach(e_),xo.forEach(e_)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Jx)))}var Kl=null;function n_(t){Kl!==t&&(Kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Pf(r||a)===null)continue;break}var f=at(a);f!==null&&(t.splice(n,3),n-=3,Ou(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ar(t){function n(P){return Zl(P,t)}Ca!==null&&Zl(Ca,t),wa!==null&&Zl(wa,t),Da!==null&&Zl(Da,t),vo.forEach(n),xo.forEach(n);for(var a=0;a<Ua.length;a++){var r=Ua[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Ua.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[xn]||null;if(typeof f=="function")_||n_(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[xn]||null)T=_.formAction;else if(Pf(c)!==null)continue}else T=_.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),n_(a)}}}function i_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function If(t){this._internalRoot=t}Ql.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();Yg(a,r,t,n,null,null)},Ql.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yg(t.current,2,null,t,null,null),Ul(),n[ca]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,t),a===0&&t_(t)}};var a_=e.version;if(a_!=="19.2.8")throw Error(s(527,a_,"19.2.8"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var $x={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{bt=Jl.inject($x),wt=Jl}catch{}}return Mo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=fm,f=hm,_=dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,r,null,c,f,_,i_),t[ca]=n.current,xf(t),new If(n)},Mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=fm,_=hm,T=dm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=qg(t,1,!0,n,a??null,r,c,P,f,_,T,i_),n.context=jg(null),a=n.current,r=Qn(),r=Ts(r),c=ga(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,Un(n,a),Ri(n),t[ca]=n.current,xf(t),new Ql(n)},Mo.version="19.2.8",Mo}var p_;function cS(){if(p_)return Gf.exports;p_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=lS(),Gf.exports}var uS=cS();const fS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_0=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();var hS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const dS=vn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>vn.createElement("svg",{ref:m,...hS,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:_0("lucide",l),...d},[...h.map(([p,x])=>vn.createElement(p,x)),...Array.isArray(u)?u:[u]]));const pn=(o,e)=>{const i=vn.forwardRef(({className:s,...l},u)=>vn.createElement(dS,{ref:u,iconNode:e,className:_0(`lucide-${fS(o)}`,s),...l}));return i.displayName=`${o}`,i};const Do=pn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const pS=pn("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);const mS=pn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const gS=pn("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);const _S=pn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const vS=pn("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);const xS=pn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const SS=pn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);const yS=pn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const MS=pn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const m_=pn("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);const ES=pn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const TS=pn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const bS=pn("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const AS=pn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const RS=pn("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const CS=pn("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);const g_=pn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const __=pn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);const hd="179",wS=0,v_=1,DS=2,v0=1,US=2,ia=3,Va=0,Vn=1,aa=2,Ha=0,Sr=1,x_=2,S_=3,y_=4,LS=5,_s=100,NS=101,OS=102,zS=103,PS=104,BS=200,IS=201,FS=202,HS=203,Th=204,bh=205,GS=206,VS=207,kS=208,XS=209,WS=210,qS=211,jS=212,YS=213,ZS=214,Ah=0,Rh=1,Ch=2,Er=3,wh=4,Dh=5,Uh=6,Lh=7,x0=0,KS=1,QS=2,Ga=0,JS=1,$S=2,ty=3,ey=4,ny=5,iy=6,ay=7,S0=300,Tr=301,br=302,Nh=303,Oh=304,wc=306,zh=1e3,xs=1001,Ph=1002,yi=1003,sy=1004,$l=1005,wi=1006,Wf=1007,Ss=1008,Li=1009,y0=1010,M0=1011,Oo=1012,dd=1013,ys=1014,sa=1015,Io=1016,pd=1017,md=1018,zo=1020,E0=35902,T0=1021,b0=1022,Si=1023,Po=1026,Bo=1027,A0=1028,gd=1029,R0=1030,_d=1031,vd=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,Bh=35840,Ih=35841,Fh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37808,Wh=37809,qh=37810,jh=37811,Yh=37812,Zh=37813,Kh=37814,Qh=37815,Jh=37816,$h=37817,td=37818,ed=37819,nd=37820,id=37821,Tc=36492,ad=36494,sd=36495,C0=36283,rd=36284,od=36285,ld=36286,ry=3200,oy=3201,w0=0,ly=1,Fa="",ti="srgb",Ar="srgb-linear",Ac="linear",Fe="srgb",sr=7680,M_=519,cy=512,uy=513,fy=514,D0=515,hy=516,dy=517,py=518,my=519,E_=35044,T_="300 es",Di=2e3,Rc=2001;class Cr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,cd=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function gy(o,e){return(o%e+e)%e}function jf(o,e,i){return(1-i)*o+i*e}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ho{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(v!==R||m!==S||p!==M||x!==b){let y=1-d;const g=m*S+p*M+x*b+v*R,F=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const X=Math.sqrt(O),G=Math.atan2(X,g*F);y=Math.sin(y*G)/X,d=Math.sin(d*G)/X}const D=d*F;if(m=m*y+S*D,p=p*y+M*D,x=x*y+b*D,v=v*y+R*D,y===1-d){const X=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=X,p*=X,x*=X,v*=X}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+x*v+m*M-p*S,e[i+1]=m*b+x*S+p*v-d*M,e[i+2]=p*b+x*M+d*S-m*v,e[i+3]=x*b-d*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),v=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*x*v+p*M*b,this._y=p*M*v-S*x*b,this._z=p*x*b+S*M*v,this._w=p*x*v-S*M*b;break;case"YXZ":this._x=S*x*v+p*M*b,this._y=p*M*v-S*x*b,this._z=p*x*b-S*M*v,this._w=p*x*v+S*M*b;break;case"ZXY":this._x=S*x*v-p*M*b,this._y=p*M*v+S*x*b,this._z=p*x*b+S*M*v,this._w=p*x*v-S*M*b;break;case"ZYX":this._x=S*x*v-p*M*b,this._y=p*M*v+S*x*b,this._z=p*x*b-S*M*v,this._w=p*x*v+S*M*b;break;case"YZX":this._x=S*x*v+p*M*b,this._y=p*M*v+S*x*b,this._z=p*x*b-S*M*v,this._w=p*x*v-S*M*b;break;case"XZY":this._x=S*x*v-p*M*b,this._y=p*M*v-S*x*b,this._z=p*x*b+S*M*v,this._w=p*x*v+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-s*p,this._z=u*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),v=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(b_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(b_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),x=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*x,this.y=s+m*x+d*p-u*v,this.z=l+m*v+u*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Yf.copy(this).projectOnVector(e),this.sub(Yf)}reflect(e){return this.sub(Yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new J,b_=new Ho;class ce{constructor(e,i,s,l,u,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],v=s[7],S=s[2],M=s[5],b=s[8],R=l[0],y=l[3],g=l[6],F=l[1],O=l[4],D=l[7],X=l[2],G=l[5],U=l[8];return u[0]=h*R+d*F+m*X,u[3]=h*y+d*O+m*G,u[6]=h*g+d*D+m*U,u[1]=p*R+x*F+v*X,u[4]=p*y+x*O+v*G,u[7]=p*g+x*D+v*U,u[2]=S*R+M*F+b*X,u[5]=S*y+M*O+b*G,u[8]=S*g+M*D+b*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-s*u*x+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=x*h-d*p,S=d*m-x*u,M=p*u-h*m,b=i*v+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(l*p-x*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(x*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Zf.makeScale(e,i)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new ce;function U0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _y(){const o=Cc("canvas");return o.style.display="block",o}const A_={};function yr(o){o in A_||(A_[o]=!0,console.warn(o))}function vy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const R_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xy(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Ac:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:e,whitePoint:s,transfer:Ac,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),o}const Re=xy();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rr;class Sy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{rr===void 0&&(rr=Cc("canvas")),rr.width=e.width,rr.height=e.height;const l=rr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=rr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yy=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Sy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let My=0;const Qf=new J;class kn extends Cr{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=xs,l=xs,u=wi,h=Ss,d=Si,m=Li,p=kn.DEFAULT_ANISOTROPY,x=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Fo(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qf).x}get height(){return this.source.getSize(Qf).y}get depth(){return this.source.getSize(Qf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=S0;kn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],x=m[4],v=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],g=m[10];if(Math.abs(x-S)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,X=(g+1)/2,G=(x+S)/4,U=(v+R)/4,V=(b+y)/4;return O>D&&O>X?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=G/s,u=U/s):D>X?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=V/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=U/u,l=V/u),this.set(s,l,u,i),this}let F=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(S-x)*(S-x));return Math.abs(F)<.001&&(F=1),this.x=(y-b)/F,this.y=(v-R)/F,this.z=(S-x)/F,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ey extends Cr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new kn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends Ey{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class L0 extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ty extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),ec.subVectors(this.max,To),or.subVectors(e.a,To),lr.subVectors(e.b,To),cr.subVectors(e.c,To),Na.subVectors(lr,or),Oa.subVectors(cr,lr),cs.subVectors(or,cr);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-cs.z,cs.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,cs.z,0,-cs.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-cs.y,cs.x,0];return!Jf(i,or,lr,cr,ec)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,or,lr,cr,ec))?!1:(nc.crossVectors(Na,Oa),i=[nc.x,nc.y,nc.z],Jf(i,or,lr,cr,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new J,new J,new J,new J,new J,new J,new J,new J],gi=new J,tc=new Go,or=new J,lr=new J,cr=new J,Na=new J,Oa=new J,cs=new J,To=new J,ec=new J,nc=new J,us=new J;function Jf(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){us.fromArray(o,u);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),x=s.dot(us);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const by=new Go,bo=new J,$f=new J;class Sd{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):by.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add($f)),this.expandByPoint(bo.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new J,th=new J,ic=new J,za=new J,eh=new J,ac=new J,nh=new J;class Ay{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){th.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),za.copy(this.origin).sub(th);const u=e.distanceTo(i)*.5,h=-this.direction.dot(ic),d=za.dot(this.direction),m=-za.dot(ic),p=za.lengthSq(),x=Math.abs(1-h*h);let v,S,M,b;if(x>0)if(v=h*m-d,S=h*d-m,b=u*x,v>=0)if(S>=-b)if(S<=b){const R=1/x;v*=R,S*=R,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(ic,S),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,s,l,u){eh.subVectors(i,e),ac.subVectors(s,e),nh.crossVectors(eh,ac);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,e);const m=d*this.direction.dot(ac.crossVectors(za,ac));if(m<0)return null;const p=d*this.direction.dot(eh.cross(za));if(p<0||m+p>h)return null;const x=-d*za.dot(nh);return x<0?null:this.at(x/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,s,l,u,h,d,m,p,x,v,S,M,b,R,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,x,v,S,M,b,R,y)}set(e,i,s,l,u,h,d,m,p,x,v,S,M,b,R,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=x,g[10]=v,g[14]=S,g[3]=M,g[7]=b,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ur.setFromMatrixColumn(e,0).length(),u=1/ur.setFromMatrixColumn(e,1).length(),h=1/ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*x,M=h*v,b=d*x,R=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,M=m*v,b=p*x,R=p*v;i[0]=S+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*x,i[9]=-d,i[2]=M*d-b,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,M=m*v,b=p*x,R=p*v;i[0]=S-R*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*x,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,M=h*v,b=d*x,R=d*v;i[0]=m*x,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*v,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=R-S*v,i[8]=b*v+M,i[1]=v,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*v+b,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=S*v+R,i[5]=h*x,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*x,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Cy)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Pa.crossVectors(s,Jn),Pa.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Pa.crossVectors(s,Jn)),Pa.normalize(),sc.crossVectors(Jn,Pa),l[0]=Pa.x,l[4]=sc.x,l[8]=Jn.x,l[1]=Pa.y,l[5]=sc.y,l[9]=Jn.y,l[2]=Pa.z,l[6]=sc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],v=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],g=s[14],F=s[3],O=s[7],D=s[11],X=s[15],G=l[0],U=l[4],V=l[8],C=l[12],w=l[1],B=l[5],ut=l[9],ot=l[13],ht=l[2],mt=l[6],z=l[10],K=l[14],Z=l[3],St=l[7],Tt=l[11],N=l[15];return u[0]=h*G+d*w+m*ht+p*Z,u[4]=h*U+d*B+m*mt+p*St,u[8]=h*V+d*ut+m*z+p*Tt,u[12]=h*C+d*ot+m*K+p*N,u[1]=x*G+v*w+S*ht+M*Z,u[5]=x*U+v*B+S*mt+M*St,u[9]=x*V+v*ut+S*z+M*Tt,u[13]=x*C+v*ot+S*K+M*N,u[2]=b*G+R*w+y*ht+g*Z,u[6]=b*U+R*B+y*mt+g*St,u[10]=b*V+R*ut+y*z+g*Tt,u[14]=b*C+R*ot+y*K+g*N,u[3]=F*G+O*w+D*ht+X*Z,u[7]=F*U+O*B+D*mt+X*St,u[11]=F*V+O*ut+D*z+X*Tt,u[15]=F*C+O*ot+D*K+X*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],v=e[6],S=e[10],M=e[14],b=e[3],R=e[7],y=e[11],g=e[15];return b*(+u*m*v-l*p*v-u*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*x-u*m*x)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*x-s*p*x)+g*(-l*d*x-i*m*v+i*d*S+l*h*v-s*h*S+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=e[9],S=e[10],M=e[11],b=e[12],R=e[13],y=e[14],g=e[15],F=v*y*p-R*S*p+R*m*M-d*y*M-v*m*g+d*S*g,O=b*S*p-x*y*p-b*m*M+h*y*M+x*m*g-h*S*g,D=x*R*p-b*v*p+b*d*M-h*R*M-x*d*g+h*v*g,X=b*v*m-x*R*m-b*d*S+h*R*S+x*d*y-h*v*y,G=i*F+s*O+l*D+u*X;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/G;return e[0]=F*U,e[1]=(R*S*u-v*y*u-R*l*M+s*y*M+v*l*g-s*S*g)*U,e[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*g+s*m*g)*U,e[3]=(v*m*u-d*S*u-v*l*p+s*S*p+d*l*M-s*m*M)*U,e[4]=O*U,e[5]=(x*y*u-b*S*u+b*l*M-i*y*M-x*l*g+i*S*g)*U,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*g-i*m*g)*U,e[7]=(h*S*u-x*m*u+x*l*p-i*S*p-h*l*M+i*m*M)*U,e[8]=D*U,e[9]=(b*v*u-x*R*u-b*s*M+i*R*M+x*s*g-i*v*g)*U,e[10]=(h*R*u-b*d*u+b*s*p-i*R*p-h*s*g+i*d*g)*U,e[11]=(x*d*u-h*v*u-x*s*p+i*v*p+h*s*M-i*d*M)*U,e[12]=X*U,e[13]=(x*R*l-b*v*l+b*s*S-i*R*S-x*s*y+i*v*y)*U,e[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*U,e[15]=(h*v*l-x*d*l+x*s*m-i*v*m-h*s*S+i*d*S)*U,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,x=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,v=d+d,S=u*p,M=u*x,b=u*v,R=h*x,y=h*v,g=d*v,F=m*p,O=m*x,D=m*v,X=s.x,G=s.y,U=s.z;return l[0]=(1-(R+g))*X,l[1]=(M+D)*X,l[2]=(b-O)*X,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(S+g))*G,l[6]=(y+F)*G,l[7]=0,l[8]=(b+O)*U,l[9]=(y-F)*U,l[10]=(1-(S+R))*U,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=ur.set(l[0],l[1],l[2]).length();const h=ur.set(l[4],l[5],l[6]).length(),d=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,x=1/h,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Di,m=!1){const p=this.elements,x=2*u/(i-e),v=2*u/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let b,R;if(m)b=u/(h-u),R=h*u/(h-u);else if(d===Di)b=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Rc)b=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Di,m=!1){const p=this.elements,x=2/(i-e),v=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,R;if(m)b=1/(h-u),R=h/(h-u);else if(d===Di)b=-2/(h-u),R=-(h+u)/(h-u);else if(d===Rc)b=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ur=new J,_i=new $e,Ry=new J(0,0,0),Cy=new J(1,1,1),Pa=new J,sc=new J,Jn=new J,w_=new $e,D_=new Ho;class Ni{constructor(e=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return w_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wy=0;const U_=new J,fr=new Ho,ta=new $e,rc=new J,Ao=new J,Dy=new J,Uy=new Ho,L_=new J(1,0,0),N_=new J(0,1,0),O_=new J(0,0,1),z_={type:"added"},Ly={type:"removed"},hr={type:"childadded",child:null},ih={type:"childremoved",child:null};class An extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new J,i=new Ni,s=new Ho,l=new J(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ce}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fr.setFromAxisAngle(e,i),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,i){return fr.setFromAxisAngle(e,i),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(L_,e)}rotateY(e){return this.rotateOnAxis(N_,e)}rotateZ(e){return this.rotateOnAxis(O_,e)}translateOnAxis(e,i){return U_.copy(e).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(L_,e)}translateY(e){return this.translateOnAxis(N_,e)}translateZ(e){return this.translateOnAxis(O_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?rc.copy(e):rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Ao,rc,this.up):ta.lookAt(rc,Ao,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),fr.setFromRotationMatrix(ta),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z_),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ly),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z_),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),v=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new J(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new J,ea=new J,ah=new J,na=new J,dr=new J,pr=new J,P_=new J,sh=new J,rh=new J,oh=new J,lh=new He,ch=new He,uh=new He;class xi{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){vi.subVectors(l,i),ea.subVectors(s,i),ah.subVectors(e,i);const h=vi.dot(vi),d=vi.dot(ea),m=vi.dot(ah),p=ea.dot(ea),x=ea.dot(ah),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*x)*S,b=(h*x-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,s),uh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(lh,u.x),h.addScaledVector(ch,u.y),h.addScaledVector(uh,u.z),h}static isFrontFacing(e,i,s,l){return vi.subVectors(s,i),ea.subVectors(e,i),vi.cross(ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),vi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return xi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;dr.subVectors(l,s),pr.subVectors(u,s),sh.subVectors(e,s);const m=dr.dot(sh),p=pr.dot(sh);if(m<=0&&p<=0)return i.copy(s);rh.subVectors(e,l);const x=dr.dot(rh),v=pr.dot(rh);if(x>=0&&v<=x)return i.copy(l);const S=m*v-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(dr,h);oh.subVectors(e,u);const M=dr.dot(oh),b=pr.dot(oh);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(pr,d);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return P_.subVectors(u,l),d=(v-x)/(v-x+(M-b)),i.copy(l).addScaledVector(P_,d);const g=1/(y+R+S);return h=R*g,d=S*g,i.copy(s).addScaledVector(dr,h).addScaledVector(pr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},oc={h:0,s:0,l:0};function fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Re.workingColorSpace){if(e=gy(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=fh(h,u,e+1/3),this.g=fh(h,u,e),this.b=fh(h,u,e-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(e,i=ti){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const s=O0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Re.workingToColorSpace(Dn.copy(this),e),Math.round(ye(Dn.r*255,0,255))*65536+Math.round(ye(Dn.g*255,0,255))*256+Math.round(ye(Dn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=x<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Re.workingColorSpace){return Re.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ti){Re.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,s=Dn.g,l=Dn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+i,Ba.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ba),e.getHSL(oc);const s=jf(Ba.h,oc.h,i),l=jf(Ba.s,oc.s,i),u=jf(Ba.l,oc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ce;Ce.NAMES=O0;let Ny=0;class Vo extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Sr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=bh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Th&&(s.blendSrc=this.blendSrc),this.blendDst!==bh&&(s.blendDst=this.blendDst),this.blendEquation!==_s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class z0 extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new J,lc=new we;let Oy=0;class Ui{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=E_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Eo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}}class P0 extends Ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class B0 extends Ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ni extends Ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}let zy=0;const hi=new $e,hh=new An,mr=new J,$n=new Go,Ro=new Go,_n=new J;class la extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?B0:P0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ce().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ni(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,Ro.min),$n.expandByPoint(_n),_n.addVectors($n.max,Ro.max),$n.expandByPoint(_n)):($n.expandByPoint(Ro.min),$n.expandByPoint(Ro.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)_n.fromBufferAttribute(d,p),m&&(mr.fromBufferAttribute(e,p),_n.add(mr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new J,m[V]=new J;const p=new J,x=new J,v=new J,S=new we,M=new we,b=new we,R=new J,y=new J;function g(V,C,w){p.fromBufferAttribute(s,V),x.fromBufferAttribute(s,C),v.fromBufferAttribute(s,w),S.fromBufferAttribute(u,V),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,w),x.sub(p),v.sub(p),M.sub(S),b.sub(S);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(B),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(B),d[V].add(R),d[C].add(R),d[w].add(R),m[V].add(y),m[C].add(y),m[w].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let V=0,C=F.length;V<C;++V){const w=F[V],B=w.start,ut=w.count;for(let ot=B,ht=B+ut;ot<ht;ot+=3)g(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const O=new J,D=new J,X=new J,G=new J;function U(V){X.fromBufferAttribute(l,V),G.copy(X);const C=d[V];O.copy(C),O.sub(X.multiplyScalar(X.dot(C))).normalize(),D.crossVectors(G,C);const B=D.dot(m[V])<0?-1:1;h.setXYZW(V,O.x,O.y,O.z,B)}for(let V=0,C=F.length;V<C;++V){const w=F[V],B=w.start,ut=w.count;for(let ot=B,ht=B+ut;ot<ht;ot+=3)U(e.getX(ot+0)),U(e.getX(ot+1)),U(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,x=new J,v=new J;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),x.subVectors(h,u),v.subVectors(l,u),x.cross(v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,u),v.subVectors(l,u),x.cross(v),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,v=d.normalized,S=new p.constructor(m.length*x);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*x;for(let g=0;g<x;g++)S[b++]=p[M++]}return new Ui(S,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,v=p.length;x<v;x++){const S=p[x],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],v=u[p];for(let S=0,M=v.length;S<M;S++)x.push(v[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B_=new $e,fs=new Ay,cc=new Sd,I_=new J,uc=new J,fc=new J,hc=new J,dh=new J,dc=new J,F_=new J,pc=new J;class bn extends An{constructor(e=new la,i=new z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],v=u[m];x!==0&&(dh.fromBufferAttribute(v,e),h?dc.addScaledVector(dh,x):dc.addScaledVector(dh.sub(i),x))}i.add(dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(cc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(cc,I_)===null||fs.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(B_.copy(u).invert(),fs.copy(e.ray).applyMatrix4(B_),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],g=h[y.materialIndex],F=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,X=O;D<X;D+=3){const G=d.getX(D),U=d.getX(D+1),V=d.getX(D+2);l=mc(this,g,e,s,p,x,v,G,U,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,g=R;y<g;y+=3){const F=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=mc(this,h,e,s,p,x,v,F,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],g=h[y.materialIndex],F=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=F,X=O;D<X;D+=3){const G=D,U=D+1,V=D+2;l=mc(this,g,e,s,p,x,v,G,U,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,g=R;y<g;y+=3){const F=y,O=y+1,D=y+2;l=mc(this,h,e,s,p,x,v,F,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Py(o,e,i,s,l,u,h,d){let m;if(e.side===Vn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Va,d),m===null)return null;pc.copy(d),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,hc);const x=Py(o,e,i,s,uc,fc,hc,F_);if(x){const v=new J;xi.getBarycoord(F_,uc,fc,hc,v),l&&(x.uv=xi.getInterpolatedAttribute(l,d,m,p,v,new we)),u&&(x.uv1=xi.getInterpolatedAttribute(u,d,m,p,v,new we)),h&&(x.normal=xi.getInterpolatedAttribute(h,d,m,p,v,new J),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};xi.getNormal(uc,fc,hc,S.normal),x.face=S,x.barycoord=v}return x}class ra extends la{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],v=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ni(p,3)),this.setAttribute("normal",new ni(x,3)),this.setAttribute("uv",new ni(v,2));function b(R,y,g,F,O,D,X,G,U,V,C){const w=D/U,B=X/V,ut=D/2,ot=X/2,ht=G/2,mt=U+1,z=V+1;let K=0,Z=0;const St=new J;for(let Tt=0;Tt<z;Tt++){const N=Tt*B-ot;for(let it=0;it<mt;it++){const Et=it*w-ut;St[R]=Et*F,St[y]=N*O,St[g]=ht,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[g]=G>0?1:-1,x.push(St.x,St.y,St.z),v.push(it/U),v.push(1-Tt/V),K+=1}}for(let Tt=0;Tt<V;Tt++)for(let N=0;N<U;N++){const it=S+N+mt*Tt,Et=S+N+mt*(Tt+1),Rt=S+(N+1)+mt*(Tt+1),Q=S+(N+1)+mt*Tt;m.push(it,Et,Q),m.push(Et,Rt,Q),Z+=6}d.addGroup(M,Z,C),M+=Z,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)e[l]=s[l]}return e}function By(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function I0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const Iy={clone:Rr,merge:On};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class F0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new J,H_=new we,G_=new we;class ei extends F0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,H_,G_),i.subVectors(G_,H_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,_r=1;class Gy extends An{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(gr,_r,e,i);l.layers=this.layers,this.add(l);const u=new ei(gr,_r,e,i);u.layers=this.layers,this.add(u);const h=new ei(gr,_r,e,i);h.layers=this.layers,this.add(h);const d=new ei(gr,_r,e,i);d.layers=this.layers,this.add(d);const m=new ei(gr,_r,e,i);m.layers=this.layers,this.add(m);const p=new ei(gr,_r,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Di)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(v,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class H0 extends kn{constructor(e=[],i=Tr,s,l,u,h,d,m,p,x){super(e,i,s,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vy extends Ms{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new H0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ra(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new bn(l,u),d=i.minFilter;return i.minFilter===Ss&&(i.minFilter=wi),new Gy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class Uo extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ky={type:"move"};class ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),g=this._getHandJoint(p,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=x.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ky)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Uo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Xy extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const mh=new J,Wy=new J,qy=new ce;class ms{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=mh.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(mh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Sd,jy=new we(.5,.5),gc=new J;class yd{constructor(e=new ms,i=new ms,s=new ms,l=new ms,u=new ms,h=new ms){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Di,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],v=u[5],S=u[6],M=u[7],b=u[8],R=u[9],y=u[10],g=u[11],F=u[12],O=u[13],D=u[14],X=u[15];if(l[0].setComponents(p-h,M-x,g-b,X-F).normalize(),l[1].setComponents(p+h,M+x,g+b,X+F).normalize(),l[2].setComponents(p+d,M+v,g+R,X+O).normalize(),l[3].setComponents(p-d,M-v,g-R,X-O).normalize(),s)l[4].setComponents(m,S,y,D).normalize(),l[5].setComponents(p-m,M-S,g-y,X-D).normalize();else if(l[4].setComponents(p-m,M-S,g-y,X-D).normalize(),i===Di)l[5].setComponents(p+m,M+S,g+y,X+D).normalize();else if(i===Rc)l[5].setComponents(m,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const i=jy.distanceTo(e.center);return hs.radius=.7071067811865476+i,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class G0 extends kn{constructor(e,i,s=ys,l,u,h,d=yi,m=yi,p,x=Po,v=1){if(x!==Po&&x!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dc extends la{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,v=e/d,S=i/m,M=[],b=[],R=[],y=[];for(let g=0;g<x;g++){const F=g*S-h;for(let O=0;O<p;O++){const D=O*v-u;b.push(D,-F,0),R.push(0,0,1),y.push(O/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let F=0;F<d;F++){const O=F+p*g,D=F+p*(g+1),X=F+1+p*(g+1),G=F+1+p*g;M.push(O,D,G),M.push(D,X,G)}this.setIndex(M),this.setAttribute("position",new ni(b,3)),this.setAttribute("normal",new ni(R,3)),this.setAttribute("uv",new ni(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}class No extends la{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const x=[],v=new J,S=new J,M=[],b=[],R=[],y=[];for(let g=0;g<=s;g++){const F=[],O=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&m===Math.PI&&(D=-.5/i);for(let X=0;X<=i;X++){const G=X/i;v.x=-e*Math.cos(l+G*u)*Math.sin(h+O*d),v.y=e*Math.cos(h+O*d),v.z=e*Math.sin(l+G*u)*Math.sin(h+O*d),b.push(v.x,v.y,v.z),S.copy(v).normalize(),R.push(S.x,S.y,S.z),y.push(G+D,1-O),F.push(p++)}x.push(F)}for(let g=0;g<s;g++)for(let F=0;F<i;F++){const O=x[g][F+1],D=x[g][F],X=x[g+1][F],G=x[g+1][F+1];(g!==0||h>0)&&M.push(O,D,G),(g!==s-1||m<Math.PI)&&M.push(D,X,G)}this.setIndex(M),this.setAttribute("position",new ni(b,3)),this.setAttribute("normal",new ni(R,3)),this.setAttribute("uv",new ni(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Md extends la{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],x=new J,v=new J,S=new J;for(let M=0;M<=s;M++)for(let b=0;b<=l;b++){const R=b/l*u,y=M/s*Math.PI*2;v.x=(e+i*Math.cos(y))*Math.cos(R),v.y=(e+i*Math.cos(y))*Math.sin(R),v.z=i*Math.sin(y),d.push(v.x,v.y,v.z),x.x=e*Math.cos(R),x.y=e*Math.sin(R),S.subVectors(v,x).normalize(),m.push(S.x,S.y,S.z),p.push(b/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=l;b++){const R=(l+1)*M+b-1,y=(l+1)*(M-1)+b-1,g=(l+1)*(M-1)+b,F=(l+1)*M+b;h.push(R,y,F),h.push(y,g,F)}this.setIndex(h),this.setAttribute("position",new ni(d,3)),this.setAttribute("normal",new ni(m,3)),this.setAttribute("uv",new ni(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Co extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w0,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yy extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zy extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ed extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Ky extends Ed{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const gh=new $e,V_=new J,k_=new J;class V0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;V_.setFromMatrixPosition(e.matrixWorld),i.position.copy(V_),k_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(k_),i.updateMatrixWorld(),gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const X_=new $e,wo=new J,_h=new J;class Qy extends V0{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),s.position.copy(wo),_h.copy(s.position),_h.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(_h),s.updateMatrixWorld(),l.makeTranslation(-wo.x,-wo.y,-wo.z),X_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X_,s.coordinateSystem,s.reversedDepth)}}class Jy extends Ed{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Qy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class k0 extends F0{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $y extends V0{constructor(){super(new k0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tM extends Ed{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new $y}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eM extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function W_(o,e,i,s){const l=nM(s);switch(i){case T0:return o*e;case A0:return o*e/l.components*l.byteLength;case gd:return o*e/l.components*l.byteLength;case R0:return o*e*2/l.components*l.byteLength;case _d:return o*e*2/l.components*l.byteLength;case b0:return o*e*3/l.components*l.byteLength;case Si:return o*e*4/l.components*l.byteLength;case vd:return o*e*4/l.components*l.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Hh:return Math.max(o,16)*Math.max(e,8)/4;case Bh:case Fh:return Math.max(o,8)*Math.max(e,8)/2;case Gh:case Vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Tc:case ad:case sd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case C0:case rd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case od:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nM(o){switch(o){case Li:case y0:return{byteLength:1,components:1};case Oo:case M0:case Io:return{byteLength:2,components:1};case pd:case md:return{byteLength:2,components:4};case ys:case dd:case sa:return{byteLength:4,components:1};case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);function X0(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function iM(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,x);else{v.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<v.length;M++){const b=v[S],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,v[S]=R)}v.length=S+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_M=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,RM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:aM,alphahash_pars_fragment:sM,alphamap_fragment:rM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:fM,batching_pars_vertex:hM,batching_vertex:dM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:_M,bumpmap_pars_fragment:vM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:MM,color_fragment:EM,color_pars_fragment:TM,color_pars_vertex:bM,color_vertex:AM,common:RM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:wM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:LM,emissivemap_pars_fragment:NM,colorspace_fragment:OM,colorspace_pars_fragment:zM,envmap_fragment:PM,envmap_common_pars_fragment:BM,envmap_pars_fragment:IM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:KM,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:VM,fog_fragment:kM,fog_pars_fragment:XM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:qM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:QM,lights_toon_pars_fragment:JM,lights_phong_fragment:$M,lights_phong_pars_fragment:tE,lights_physical_fragment:eE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:aE,lights_fragment_end:sE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:fE,map_particle_fragment:hE,map_particle_pars_fragment:dE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:yE,normal_fragment_maps:ME,normal_pars_fragment:EE,normal_pars_vertex:TE,normal_vertex:bE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:DE,opaque_fragment:UE,packing:LE,premultiplied_alpha_fragment:NE,project_vertex:OE,dithering_fragment:zE,dithering_pars_fragment:PE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:VE,skinbase_vertex:kE,skinning_pars_vertex:XE,skinning_vertex:WE,skinnormal_vertex:qE,specularmap_fragment:jE,specularmap_pars_fragment:YE,tonemapping_fragment:ZE,tonemapping_pars_fragment:KE,transmission_fragment:QE,transmission_pars_fragment:JE,uv_pars_fragment:$E,uv_pars_vertex:t1,uv_vertex:e1,worldpos_vertex:n1,background_vert:i1,background_frag:a1,backgroundCube_vert:s1,backgroundCube_frag:r1,cube_vert:o1,cube_frag:l1,depth_vert:c1,depth_frag:u1,distanceRGBA_vert:f1,distanceRGBA_frag:h1,equirect_vert:d1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:_1,meshbasic_frag:v1,meshlambert_vert:x1,meshlambert_frag:S1,meshmatcap_vert:y1,meshmatcap_frag:M1,meshnormal_vert:E1,meshnormal_frag:T1,meshphong_vert:b1,meshphong_frag:A1,meshphysical_vert:R1,meshphysical_frag:C1,meshtoon_vert:w1,meshtoon_frag:D1,points_vert:U1,points_frag:L1,shadow_vert:N1,shadow_frag:O1,sprite_vert:z1,sprite_frag:P1},Nt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ci={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ci.physical={uniforms:On([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const _c={r:0,b:0,g:0},ds=new Ni,B1=new $e;function I1(o,e,i,s,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,x,v=null,S=0,M=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:e).get(D)),D}function R(O){let D=!1;const X=b(O);X===null?g(d,m):X&&X.isColor&&(g(X,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const X=b(D);X&&(X.isCubeTexture||X.mapping===wc)?(x===void 0&&(x=new bn(new ra(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Rr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(G,U,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),x.material.uniforms.envMap.value=X,x.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(ds)),x.material.toneMapped=Re.getTransfer(X.colorSpace)!==Fe,(v!==X||S!==X.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,v=X,S=X.version,M=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new bn(new Dc(2,2),new ka({name:"BackgroundMaterial",uniforms:Rr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(X.colorSpace)!==Fe,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||S!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=X,S=X.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,D){O.getRGB(_c,I0(o)),s.buffers.color.setClear(_c.r,_c.g,_c.b,D,h)}function F(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:R,addToRenderList:y,dispose:F}}function F1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(w,B,ut,ot,ht){let mt=!1;const z=v(ot,ut,B);u!==z&&(u=z,p(u.object)),mt=M(w,ot,ut,ht),mt&&b(w,ot,ut,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,D(w,B,ut,ot),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function v(w,B,ut){const ot=ut.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let mt=ht[B.id];mt===void 0&&(mt={},ht[B.id]=mt);let z=mt[ot];return z===void 0&&(z=S(m()),mt[ot]=z),z}function S(w){const B=[],ut=[],ot=[];for(let ht=0;ht<i;ht++)B[ht]=0,ut[ht]=0,ot[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ut,attributeDivisors:ot,object:w,attributes:{},index:null}}function M(w,B,ut,ot){const ht=u.attributes,mt=B.attributes;let z=0;const K=ut.getAttributes();for(const Z in K)if(K[Z].location>=0){const Tt=ht[Z];let N=mt[Z];if(N===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),Tt===void 0||Tt.attribute!==N||N&&Tt.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==ot}function b(w,B,ut,ot){const ht={},mt=B.attributes;let z=0;const K=ut.getAttributes();for(const Z in K)if(K[Z].location>=0){let Tt=mt[Z];Tt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const N={};N.attribute=Tt,Tt&&Tt.data&&(N.data=Tt.data),ht[Z]=N,z++}u.attributes=ht,u.attributesNum=z,u.index=ot}function R(){const w=u.newAttributes;for(let B=0,ut=w.length;B<ut;B++)w[B]=0}function y(w){g(w,0)}function g(w,B){const ut=u.newAttributes,ot=u.enabledAttributes,ht=u.attributeDivisors;ut[w]=1,ot[w]===0&&(o.enableVertexAttribArray(w),ot[w]=1),ht[w]!==B&&(o.vertexAttribDivisor(w,B),ht[w]=B)}function F(){const w=u.newAttributes,B=u.enabledAttributes;for(let ut=0,ot=B.length;ut<ot;ut++)B[ut]!==w[ut]&&(o.disableVertexAttribArray(ut),B[ut]=0)}function O(w,B,ut,ot,ht,mt,z){z===!0?o.vertexAttribIPointer(w,B,ut,ht,mt):o.vertexAttribPointer(w,B,ut,ot,ht,mt)}function D(w,B,ut,ot){R();const ht=ot.attributes,mt=ut.getAttributes(),z=B.defaultAttributeValues;for(const K in mt){const Z=mt[K];if(Z.location>=0){let St=ht[K];if(St===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const Tt=St.normalized,N=St.itemSize,it=e.get(St);if(it===void 0)continue;const Et=it.buffer,Rt=it.type,Q=it.bytesPerElement,vt=Rt===o.INT||Rt===o.UNSIGNED_INT||St.gpuType===dd;if(St.isInterleavedBufferAttribute){const _t=St.data,Ht=_t.stride,zt=St.offset;if(_t.isInstancedInterleavedBuffer){for(let ee=0;ee<Z.locationSize;ee++)g(Z.location+ee,_t.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ee=0;ee<Z.locationSize;ee++)y(Z.location+ee);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let ee=0;ee<Z.locationSize;ee++)O(Z.location+ee,N/Z.locationSize,Rt,Tt,Ht*Q,(zt+N/Z.locationSize*ee)*Q,vt)}else{if(St.isInstancedBufferAttribute){for(let _t=0;_t<Z.locationSize;_t++)g(Z.location+_t,St.meshPerAttribute);w.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let _t=0;_t<Z.locationSize;_t++)y(Z.location+_t);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let _t=0;_t<Z.locationSize;_t++)O(Z.location+_t,N/Z.locationSize,Rt,Tt,N*Q,N/Z.locationSize*_t*Q,vt)}}else if(z!==void 0){const Tt=z[K];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Z.location,Tt);break;case 3:o.vertexAttrib3fv(Z.location,Tt);break;case 4:o.vertexAttrib4fv(Z.location,Tt);break;default:o.vertexAttrib1fv(Z.location,Tt)}}}}F()}function X(){V();for(const w in s){const B=s[w];for(const ut in B){const ot=B[ut];for(const ht in ot)x(ot[ht].object),delete ot[ht];delete B[ut]}delete s[w]}}function G(w){if(s[w.id]===void 0)return;const B=s[w.id];for(const ut in B){const ot=B[ut];for(const ht in ot)x(ot[ht].object),delete ot[ht];delete B[ut]}delete s[w.id]}function U(w){for(const B in s){const ut=s[B];if(ut[w.id]===void 0)continue;const ot=ut[w.id];for(const ht in ot)x(ot[ht].object),delete ot[ht];delete ut[w.id]}}function V(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:G,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function H1(o,e,i){let s;function l(p){s=p}function u(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,v){v!==0&&(o.drawArraysInstanced(s,p,x,v),i.update(x,s,v))}function d(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,v);let M=0;for(let b=0;b<v;b++)M+=x[b];i.update(M,s,1)}function m(p,x,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,v);let b=0;for(let R=0;R<v;R++)b+=x[R]*S[R];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function G1(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==Si&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const V=U===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Li&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==sa&&!V)}function m(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:F,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:X,maxSamples:G}}function V1(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new ms,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=x(v,S,0)},this.setState=function(v,S,M){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||b===null||b.length===0||u&&!y)u?x(null):p();else{const F=u?0:s,O=F*4;let D=g.clippingState||null;m.value=D,D=x(b,S,O,M);for(let X=0;X!==O;++X)D[X]=i[X];g.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,S,M,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const g=M+R*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<g)&&(y=new Float32Array(g));for(let O=0,D=M;O!==R;++O,D+=4)h.copy(v[O]).applyMatrix4(F,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function k1(o){let e=new WeakMap;function i(h,d){return d===Nh?h.mapping=Tr:d===Oh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nh||d===Oh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Vy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const xr=4,q_=[.125,.215,.35,.446,.526,.582],vs=20,vh=new k0,j_=new Ce;let xh=null,Sh=0,yh=0,Mh=!1;const gs=(1+Math.sqrt(5))/2,vr=1/gs,Y_=[new J(-gs,vr,0),new J(gs,vr,0),new J(-vr,0,gs),new J(vr,0,gs),new J(0,gs,-vr),new J(0,gs,vr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],X1=new J;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=X1}=u;xh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,Sh,yh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Tr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Io,format:Si,colorSpace:Ar,depthBuffer:!1},l=K_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(u)),this._blurMaterial=q1(u,e,i)}return l}_compileMaterial(e){const i=new bn(this._lodPlanes[0],e);this._renderer.compile(i,vh)}_sceneToCubeUV(e,i,s,l,u){const m=new ei(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(j_),v.toneMapping=Ga,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new z0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),y=new bn(new ra,R);let g=!1;const F=e.background;F?F.isColor&&(R.color.copy(F),e.background=null,g=!0):(R.color.copy(j_),g=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[O],u.y,u.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[O]));const X=this._cubeSize;vc(l,D*X,O>2?X:0,X,X),v.setRenderTarget(l),g&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=S,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Tr||e.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new bn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;vc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,vh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Y_[(l-u-1)%Y_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new bn(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*vs-1),R=u/b,y=isFinite(u)?1+Math.floor(x*R):vs;y>vs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vs}`);const g=[];let F=0;for(let U=0;U<vs;++U){const V=U/R,C=Math.exp(-V*V/2);g.push(C),U===0?F+=C:U<y&&(F+=2*C)}for(let U=0;U<g.length;U++)g[U]=g[U]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const D=this._sizeLods[l],X=3*D*(l>O-xr?l-O+xr:0),G=4*(this._cubeSize-D);vc(i,X,G,3*D,2*D),m.setRenderTarget(i),m.render(v,vh)}}function W1(o){const e=[],i=[],s=[];let l=o;const u=o-xr+1+q_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-xr?m=q_[h-o+xr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),x=-p,v=1+p,S=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,b=6,R=3,y=2,g=1,F=new Float32Array(R*b*M),O=new Float32Array(y*b*M),D=new Float32Array(g*b*M);for(let G=0;G<M;G++){const U=G%3*2/3-1,V=G>2?0:-1,C=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];F.set(C,R*b*G),O.set(S,y*b*G);const w=[G,G,G,G,G,G];D.set(w,g*b*G)}const X=new la;X.setAttribute("position",new Ui(F,R)),X.setAttribute("uv",new Ui(O,y)),X.setAttribute("faceIndex",new Ui(D,g)),e.push(X),l>xr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function K_(o,e,i){const s=new Ms(o,e,i);return s.texture.mapping=wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function q1(o,e,i){const s=new Float32Array(vs),l=new J(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Q_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function J_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j1(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Nh||m===Oh,x=m===Tr||m===br;if(p||x){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Z_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Z_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Y1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&yr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Z1(o,e,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const F=M.array;R=M.version;for(let O=0,D=F.length;O<D;O+=3){const X=F[O+0],G=F[O+1],U=F[O+2];S.push(X,G,G,U,U,X)}}else if(b!==void 0){const F=b.array;R=b.version;for(let O=0,D=F.length/3-1;O<D;O+=3){const X=O+0,G=O+1,U=O+2;S.push(X,G,G,U,U,X)}}else return;const y=new(U0(S)?B0:P0)(S,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function x(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function K1(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function x(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let g=0;g<b;g++)y+=M[g];i.update(y,s,1)}function v(S,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)p(S[g]/h,M[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,R,0,b);let g=0;for(let F=0;F<b;F++)g+=M[F]*R[F];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function Q1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function J1(o,e,i){const s=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let w=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let X=d.attributes.position.count*D,G=1;X>e.maxTextureSize&&(G=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const U=new Float32Array(X*G*4*v),V=new L0(U,X,G,v);V.type=sa,V.needsUpdate=!0;const C=D*4;for(let B=0;B<v;B++){const ut=g[B],ot=F[B],ht=O[B],mt=X*G*4*B;for(let z=0;z<ut.count;z++){const K=z*C;b===!0&&(l.fromBufferAttribute(ut,z),U[mt+K+0]=l.x,U[mt+K+1]=l.y,U[mt+K+2]=l.z,U[mt+K+3]=0),R===!0&&(l.fromBufferAttribute(ot,z),U[mt+K+4]=l.x,U[mt+K+5]=l.y,U[mt+K+6]=l.z,U[mt+K+7]=0),y===!0&&(l.fromBufferAttribute(ht,z),U[mt+K+8]=l.x,U[mt+K+9]=l.y,U[mt+K+10]=l.z,U[mt+K+11]=ht.itemSize===4?l.w:1)}}S={count:v,texture:V,size:new we(X,G)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function $1(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,x=m.geometry,v=e.get(m,x);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const W0=new kn,$_=new G0(1,1),q0=new L0,j0=new Ty,Y0=new H0,t0=[],e0=[],n0=new Float32Array(16),i0=new Float32Array(9),a0=new Float32Array(4);function wr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=t0[l];if(u===void 0&&(u=new Float32Array(l),t0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Uc(o,e){let i=e0[e];i===void 0&&(i=new Int32Array(e),e0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function tT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function nT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function aT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;a0.set(s),o.uniformMatrix2fv(this.addr,!1,a0),dn(i,s)}}function sT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;i0.set(s),o.uniformMatrix3fv(this.addr,!1,i0),dn(i,s)}}function rT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,s))return;n0.set(s),o.uniformMatrix4fv(this.addr,!1,n0),dn(i,s)}}function oT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function fT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function mT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?($_.compareFunction=D0,u=$_):u=W0,i.setTexture2D(e||u,l)}function gT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||j0,l)}function _T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Y0,l)}function vT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||q0,l)}function xT(o){switch(o){case 5126:return tT;case 35664:return eT;case 35665:return nT;case 35666:return iT;case 35674:return aT;case 35675:return sT;case 35676:return rT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return fT;case 36294:return hT;case 36295:return dT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return vT}}function ST(o,e){o.uniform1fv(this.addr,e)}function yT(o,e){const i=wr(e,this.size,2);o.uniform2fv(this.addr,i)}function MT(o,e){const i=wr(e,this.size,3);o.uniform3fv(this.addr,i)}function ET(o,e){const i=wr(e,this.size,4);o.uniform4fv(this.addr,i)}function TT(o,e){const i=wr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function bT(o,e){const i=wr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function AT(o,e){const i=wr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function RT(o,e){o.uniform1iv(this.addr,e)}function CT(o,e){o.uniform2iv(this.addr,e)}function wT(o,e){o.uniform3iv(this.addr,e)}function DT(o,e){o.uniform4iv(this.addr,e)}function UT(o,e){o.uniform1uiv(this.addr,e)}function LT(o,e){o.uniform2uiv(this.addr,e)}function NT(o,e){o.uniform3uiv(this.addr,e)}function OT(o,e){o.uniform4uiv(this.addr,e)}function zT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||W0,u[h])}function PT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||j0,u[h])}function BT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Y0,u[h])}function IT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||q0,u[h])}function FT(o){switch(o){case 5126:return ST;case 35664:return yT;case 35665:return MT;case 35666:return ET;case 35674:return TT;case 35675:return bT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return IT}}class HT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xT(i.type)}}class GT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FT(i.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function s0(o,e){o.seq.push(e),o.map[e.id]=e}function kT(o,e,i){const s=o.name,l=s.length;for(Eh.lastIndex=0;;){const u=Eh.exec(s),h=Eh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){s0(i,p===void 0?new HT(d,o,e):new GT(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new VT(d),s0(i,v)),i=v}}}class bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);kT(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function r0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const XT=37297;let WT=0;function qT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const o0=new ce;function jT(o){Re._getMatrix(o0,Re.workingColorSpace,o);const e=`mat3( ${o0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function l0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+qT(o.getShaderSource(e),d)}else return u}function YT(o,e){const i=jT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ZT(o,e){let i;switch(e){case JS:i="Linear";break;case $S:i="Reinhard";break;case ty:i="Cineon";break;case ey:i="ACESFilmic";break;case iy:i="AgX";break;case ay:i="Neutral";break;case ny:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new J;function KT(){Re.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function JT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function $T(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Lo(o){return o!==""}function c0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(o){return o.replace(tb,nb)}const eb=new Map;function nb(o,e){let i=ue[e];if(i===void 0){const s=eb.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ud(i)}const ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(o){return o.replace(ib,ab)}function ab(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function h0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===US?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Tr:case br:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===br&&(e="ENVMAP_MODE_REFRACTION"),e}function lb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case x0:e="ENVMAP_BLENDING_MULTIPLY";break;case KS:e="ENVMAP_BLENDING_MIX";break;case QS:e="ENVMAP_BLENDING_ADD";break}return e}function cb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function ub(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=sb(i),p=rb(i),x=ob(i),v=lb(i),S=cb(i),M=QT(i),b=JT(u),R=l.createProgram();let y,g,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Lo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(y=[h0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[h0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ga?ZT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,YT("linearToOutputTexel",i.outputColorSpace),KT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=ud(h),h=c0(h,i),h=u0(h,i),d=ud(d),d=c0(d,i),d=u0(d,i),h=f0(h),d=f0(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=F+y+h,D=F+g+d,X=r0(l,l.VERTEX_SHADER,O),G=r0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,X),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function U(B){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(X)||"",ht=l.getShaderInfoLog(G)||"",mt=ut.trim(),z=ot.trim(),K=ht.trim();let Z=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,X,G);else{const Tt=l0(l,X,"vertex"),N=l0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+mt+`
`+Tt+`
`+N)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(z===""||K==="")&&(St=!1);St&&(B.diagnostics={runnable:Z,programLog:mt,vertexShader:{log:z,prefix:y},fragmentShader:{log:K,prefix:g}})}l.deleteShader(X),l.deleteShader(G),V=new bc(l,R),C=$T(l,R)}let V;this.getUniforms=function(){return V===void 0&&U(this),V};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,XT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=X,this.fragmentShader=G,this}let fb=0;class hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new db(e),i.set(e,s)),s}}class db{constructor(e){this.id=fb++,this.code=e,this.usedTimes=0}}function pb(o,e,i,s,l,u,h){const d=new N0,m=new hb,p=new Set,x=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,B,ut,ot){const ht=ut.fog,mt=ot.geometry,z=C.isMeshStandardMaterial?ut.environment:null,K=(C.isMeshStandardMaterial?i:e).get(C.envMap||z),Z=K&&K.mapping===wc?K.image.height:null,St=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Tt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,N=Tt!==void 0?Tt.length:0;let it=0;mt.morphAttributes.position!==void 0&&(it=1),mt.morphAttributes.normal!==void 0&&(it=2),mt.morphAttributes.color!==void 0&&(it=3);let Et,Rt,Q,vt;if(St){const Ee=Ci[St];Et=Ee.vertexShader,Rt=Ee.fragmentShader}else Et=C.vertexShader,Rt=C.fragmentShader,m.update(C),Q=m.getVertexShaderID(C),vt=m.getFragmentShaderID(C);const _t=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),zt=ot.isInstancedMesh===!0,ee=ot.isBatchedMesh===!0,Xe=!!C.map,he=!!C.matcap,H=!!K,Me=!!C.aoMap,Jt=!!C.lightMap,xe=!!C.bumpMap,Zt=!!C.normalMap,Ge=!!C.displacementMap,It=!!C.emissiveMap,se=!!C.metalnessMap,Ke=!!C.roughnessMap,Ze=C.anisotropy>0,L=C.clearcoat>0,E=C.dispersion>0,et=C.iridescence>0,ft=C.sheen>0,yt=C.transmission>0,lt=Ze&&!!C.anisotropyMap,jt=L&&!!C.clearcoatMap,Ct=L&&!!C.clearcoatNormalMap,Wt=L&&!!C.clearcoatRoughnessMap,qt=et&&!!C.iridescenceMap,bt=et&&!!C.iridescenceThicknessMap,wt=ft&&!!C.sheenColorMap,Yt=ft&&!!C.sheenRoughnessMap,Pt=!!C.specularMap,Ut=!!C.specularColorMap,re=!!C.specularIntensityMap,W=yt&&!!C.transmissionMap,At=yt&&!!C.thicknessMap,Dt=!!C.gradientMap,Bt=!!C.alphaMap,Mt=C.alphaTest>0,gt=!!C.alphaHash,Ft=!!C.extensions;let ie=Ga;C.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ne={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:Et,fragmentShader:Rt,defines:C.defines,customVertexShaderID:Q,customFragmentShaderID:vt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:ee,batchingColor:ee&&ot._colorsTexture!==null,instancing:zt,instancingColor:zt&&ot.instanceColor!==null,instancingMorph:zt&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_t===null?o.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ar,alphaToCoverage:!!C.alphaToCoverage,map:Xe,matcap:he,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:Z,aoMap:Me,lightMap:Jt,bumpMap:xe,normalMap:Zt,displacementMap:S&&Ge,emissiveMap:It,normalMapObjectSpace:Zt&&C.normalMapType===ly,normalMapTangentSpace:Zt&&C.normalMapType===w0,metalnessMap:se,roughnessMap:Ke,anisotropy:Ze,anisotropyMap:lt,clearcoat:L,clearcoatMap:jt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:ft,sheenColorMap:wt,sheenRoughnessMap:Yt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:re,transmission:yt,transmissionMap:W,thicknessMap:At,gradientMap:Dt,opaque:C.transparent===!1&&C.blending===Sr&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:gt,combine:C.combine,mapUv:Xe&&R(C.map.channel),aoMapUv:Me&&R(C.aoMap.channel),lightMapUv:Jt&&R(C.lightMap.channel),bumpMapUv:xe&&R(C.bumpMap.channel),normalMapUv:Zt&&R(C.normalMap.channel),displacementMapUv:Ge&&R(C.displacementMap.channel),emissiveMapUv:It&&R(C.emissiveMap.channel),metalnessMapUv:se&&R(C.metalnessMap.channel),roughnessMapUv:Ke&&R(C.roughnessMap.channel),anisotropyMapUv:lt&&R(C.anisotropyMap.channel),clearcoatMapUv:jt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&R(C.sheenRoughnessMap.channel),specularMapUv:Pt&&R(C.specularMap.channel),specularColorMapUv:Ut&&R(C.specularColorMap.channel),specularIntensityMapUv:re&&R(C.specularIntensityMap.channel),transmissionMapUv:W&&R(C.transmissionMap.channel),thicknessMapUv:At&&R(C.thicknessMap.channel),alphaMapUv:Bt&&R(C.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(Zt||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!mt.attributes.uv&&(Xe||Bt),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:ot.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Xe&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:It&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===aa,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(F(w,C),O(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function F(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=b[C.type];let B;if(w){const ut=Ci[w];B=Iy.clone(ut.uniforms)}else B=C.uniforms;return B}function X(C,w){let B;for(let ut=0,ot=x.length;ut<ot;ut++){const ht=x[ut];if(ht.cacheKey===w){B=ht,++B.usedTimes;break}}return B===void 0&&(B=new ub(o,w,C,u),x.push(B)),B}function G(C){if(--C.usedTimes===0){const w=x.indexOf(C);x[w]=x[x.length-1],x.pop(),C.destroy()}}function U(C){m.remove(C)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:X,releaseProgram:G,releaseShaderCache:U,programs:x,dispose:V}}function mb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function gb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function d0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function p0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,b,R,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,S,M,b,R,y){const g=h(v,S,M,b,R,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,S,M,b,R,y){const g=h(v,S,M,b,R,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||gb),s.length>1&&s.sort(S||d0),l.length>1&&l.sort(S||d0)}function x(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:x,sort:p}}function _b(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new p0,o.set(s,[h])):l>=u.length?(h=new p0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function vb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Ce};break;case"SpotLight":i={position:new J,direction:new J,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function xb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Sb=0;function yb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Mb(o){const e=new vb,i=xb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,u=new $e,h=new $e;function d(p){let x=0,v=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,b=0,R=0,y=0,g=0,F=0,O=0,D=0,X=0,G=0,U=0;p.sort(yb);for(let C=0,w=p.length;C<w;C++){const B=p[C],ut=B.color,ot=B.intensity,ht=B.distance,mt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=ut.r*ot,v+=ut.g*ot,S+=ut.b*ot;else if(B.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(B.sh.coefficients[z],ot);U++}else if(B.isDirectionalLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Z=i.get(B);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=mt,s.directionalShadowMatrix[M]=B.shadow.matrix,F++}s.directional[M]=z,M++}else if(B.isSpotLight){const z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(ut).multiplyScalar(ot),z.distance=ht,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,s.spot[R]=z;const K=B.shadow;if(B.map&&(s.spotLightMap[X]=B.map,X++,K.updateMatrices(B),B.castShadow&&G++),s.spotLightMatrix[R]=K.matrix,B.castShadow){const Z=i.get(B);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=mt,D++}R++}else if(B.isRectAreaLight){const z=e.get(B);z.color.copy(ut).multiplyScalar(ot),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=z,y++}else if(B.isPointLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const K=B.shadow,Z=i.get(B);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=mt,s.pointShadowMatrix[b]=B.shadow.matrix,O++}s.point[b]=z,b++}else if(B.isHemisphereLight){const z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(ot),z.groundColor.copy(B.groundColor).multiplyScalar(ot),s.hemi[g]=z,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=S;const V=s.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==F||V.numPointShadows!==O||V.numSpotShadows!==D||V.numSpotMaps!==X||V.numLightProbes!==U)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+X-G,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=U,V.directionalLength=M,V.pointLength=b,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=F,V.numPointShadows=O,V.numSpotShadows=D,V.numSpotMaps=X,V.numLightProbes=U,s.version=Sb++)}function m(p,x){let v=0,S=0,M=0,b=0,R=0;const y=x.matrixWorldInverse;for(let g=0,F=p.length;g<F;g++){const O=p[g];if(O.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function m0(o){const e=new Mb(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function u(x){i.push(x)}function h(x){s.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Eb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new m0(o),e.set(l,[d])):u>=h.length?(d=new m0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(o,e,i){let s=new yd;const l=new we,u=new we,h=new He,d=new Yy({depthPacking:oy}),m=new Zy,p={},x=i.maxTextureSize,v={[Va]:Vn,[Vn]:Va,[aa]:aa},S=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Tb,fragmentShader:bb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new la;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new bn(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let g=this.type;this.render=function(G,U,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),w=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Ha),ut.buffers.depth.getReversed()?ut.buffers.color.setClear(0,0,0,0):ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const ot=g!==ia&&this.type===ia,ht=g===ia&&this.type!==ia;for(let mt=0,z=G.length;mt<z;mt++){const K=G[mt],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const St=Z.getFrameExtents();if(l.multiply(St),u.copy(Z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/St.x),l.x=u.x*St.x,Z.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/St.y),l.y=u.y*St.y,Z.mapSize.y=u.y)),Z.map===null||ot===!0||ht===!0){const N=this.type!==ia?{minFilter:yi,magFilter:yi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ms(l.x,l.y,N),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Tt=Z.getViewportCount();for(let N=0;N<Tt;N++){const it=Z.getViewport(N);h.set(u.x*it.x,u.y*it.y,u.x*it.z,u.y*it.w),ut.viewport(h),Z.updateMatrices(K,N),s=Z.getFrustum(),D(U,V,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ia&&F(Z,V),Z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(C,w,B)};function F(G,U){const V=e.update(R);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ms(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(U,null,V,S,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(U,null,V,M,R,null)}function O(G,U,V,C){let w=null;const B=V.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)w=B;else if(w=V.isPointLight===!0?m:d,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const ut=w.uuid,ot=U.uuid;let ht=p[ut];ht===void 0&&(ht={},p[ut]=ht);let mt=ht[ot];mt===void 0&&(mt=w.clone(),ht[ot]=mt,U.addEventListener("dispose",X)),w=mt}if(w.visible=U.visible,w.wireframe=U.wireframe,C===ia?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:v[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ut=o.properties.get(w);ut.light=V}return w}function D(G,U,V,C,w){if(G.visible===!1)return;if(G.layers.test(U.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ia)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,G.matrixWorld);const ot=e.update(G),ht=G.material;if(Array.isArray(ht)){const mt=ot.groups;for(let z=0,K=mt.length;z<K;z++){const Z=mt[z],St=ht[Z.materialIndex];if(St&&St.visible){const Tt=O(G,St,C,w);G.onBeforeShadow(o,G,U,V,ot,Tt,Z),o.renderBufferDirect(V,null,ot,Tt,G,Z),G.onAfterShadow(o,G,U,V,ot,Tt,Z)}}}else if(ht.visible){const mt=O(G,ht,C,w);G.onBeforeShadow(o,G,U,V,ot,mt,null),o.renderBufferDirect(V,null,ot,mt,G,null),G.onAfterShadow(o,G,U,V,ot,mt,null)}}const ut=G.children;for(let ot=0,ht=ut.length;ot<ht;ot++)D(ut[ot],U,V,C,w)}function X(G){G.target.removeEventListener("dispose",X);for(const V in p){const C=p[V],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const Rb={[Ah]:Rh,[Ch]:Uh,[wh]:Lh,[Er]:Dh,[Rh]:Ah,[Uh]:Ch,[Lh]:wh,[Dh]:Er};function Cb(o,e){function i(){let W=!1;const At=new He;let Dt=null;const Bt=new He(0,0,0,0);return{setMask:function(Mt){Dt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),Dt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,gt,Ft,ie,Ne){Ne===!0&&(Mt*=ie,gt*=ie,Ft*=ie),At.set(Mt,gt,Ft,ie),Bt.equals(At)===!1&&(o.clearColor(Mt,gt,Ft,ie),Bt.copy(At))},reset:function(){W=!1,Dt=null,Bt.set(-1,0,0,0)}}}function s(){let W=!1,At=!1,Dt=null,Bt=null,Mt=null;return{setReversed:function(gt){if(At!==gt){const Ft=e.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(gt){gt?_t(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(gt){Dt!==gt&&!W&&(o.depthMask(gt),Dt=gt)},setFunc:function(gt){if(At&&(gt=Rb[gt]),Bt!==gt){switch(gt){case Ah:o.depthFunc(o.NEVER);break;case Rh:o.depthFunc(o.ALWAYS);break;case Ch:o.depthFunc(o.LESS);break;case Er:o.depthFunc(o.LEQUAL);break;case wh:o.depthFunc(o.EQUAL);break;case Dh:o.depthFunc(o.GEQUAL);break;case Uh:o.depthFunc(o.GREATER);break;case Lh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){W=gt},setClear:function(gt){Mt!==gt&&(At&&(gt=1-gt),o.clearDepth(gt),Mt=gt)},reset:function(){W=!1,Dt=null,Bt=null,Mt=null,At=!1}}}function l(){let W=!1,At=null,Dt=null,Bt=null,Mt=null,gt=null,Ft=null,ie=null,Ne=null;return{setTest:function(Ee){W||(Ee?_t(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!W&&(o.stencilMask(Ee),At=Ee)},setFunc:function(Ee,Un,ii){(Dt!==Ee||Bt!==Un||Mt!==ii)&&(o.stencilFunc(Ee,Un,ii),Dt=Ee,Bt=Un,Mt=ii)},setOp:function(Ee,Un,ii){(gt!==Ee||Ft!==Un||ie!==ii)&&(o.stencilOp(Ee,Un,ii),gt=Ee,Ft=Un,ie=ii)},setLocked:function(Ee){W=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){W=!1,At=null,Dt=null,Bt=null,Mt=null,gt=null,Ft=null,ie=null,Ne=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},S=new WeakMap,M=[],b=null,R=!1,y=null,g=null,F=null,O=null,D=null,X=null,G=null,U=new Ce(0,0,0),V=0,C=!1,w=null,B=null,ut=null,ot=null,ht=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=K>=2);let St=null,Tt={};const N=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),Et=new He().fromArray(N),Rt=new He().fromArray(it);function Q(W,At,Dt,Bt){const Mt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(W,gt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Dt;Ft++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(At+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return gt}const vt={};vt[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(o.DEPTH_TEST),h.setFunc(Er),xe(!1),Zt(v_),_t(o.CULL_FACE),Me(Ha);function _t(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Ht(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function zt(W,At){return v[W]!==At?(o.bindFramebuffer(W,At),v[W]=At,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(W,At){let Dt=M,Bt=!1;if(W){Dt=S.get(At),Dt===void 0&&(Dt=[],S.set(At,Dt));const Mt=W.textures;if(Dt.length!==Mt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Ft=Mt.length;gt<Ft;gt++)Dt[gt]=o.COLOR_ATTACHMENT0+gt;Dt.length=Mt.length,Bt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Dt)}function Xe(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const he={[_s]:o.FUNC_ADD,[NS]:o.FUNC_SUBTRACT,[OS]:o.FUNC_REVERSE_SUBTRACT};he[zS]=o.MIN,he[PS]=o.MAX;const H={[BS]:o.ZERO,[IS]:o.ONE,[FS]:o.SRC_COLOR,[Th]:o.SRC_ALPHA,[WS]:o.SRC_ALPHA_SATURATE,[kS]:o.DST_COLOR,[GS]:o.DST_ALPHA,[HS]:o.ONE_MINUS_SRC_COLOR,[bh]:o.ONE_MINUS_SRC_ALPHA,[XS]:o.ONE_MINUS_DST_COLOR,[VS]:o.ONE_MINUS_DST_ALPHA,[qS]:o.CONSTANT_COLOR,[jS]:o.ONE_MINUS_CONSTANT_COLOR,[YS]:o.CONSTANT_ALPHA,[ZS]:o.ONE_MINUS_CONSTANT_ALPHA};function Me(W,At,Dt,Bt,Mt,gt,Ft,ie,Ne,Ee){if(W===Ha){R===!0&&(Ht(o.BLEND),R=!1);return}if(R===!1&&(_t(o.BLEND),R=!0),W!==LS){if(W!==y||Ee!==C){if((g!==_s||D!==_s)&&(o.blendEquation(o.FUNC_ADD),g=_s,D=_s),Ee)switch(W){case Sr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case x_:o.blendFunc(o.ONE,o.ONE);break;case S_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case y_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Sr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case x_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case S_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}F=null,O=null,X=null,G=null,U.set(0,0,0),V=0,y=W,C=Ee}return}Mt=Mt||At,gt=gt||Dt,Ft=Ft||Bt,(At!==g||Mt!==D)&&(o.blendEquationSeparate(he[At],he[Mt]),g=At,D=Mt),(Dt!==F||Bt!==O||gt!==X||Ft!==G)&&(o.blendFuncSeparate(H[Dt],H[Bt],H[gt],H[Ft]),F=Dt,O=Bt,X=gt,G=Ft),(ie.equals(U)===!1||Ne!==V)&&(o.blendColor(ie.r,ie.g,ie.b,Ne),U.copy(ie),V=Ne),y=W,C=!1}function Jt(W,At){W.side===aa?Ht(o.CULL_FACE):_t(o.CULL_FACE);let Dt=W.side===Vn;At&&(Dt=!Dt),xe(Dt),W.blending===Sr&&W.transparent===!1?Me(Ha):Me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Bt=W.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),It(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(W){w!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),w=W)}function Zt(W){W!==wS?(_t(o.CULL_FACE),W!==B&&(W===v_?o.cullFace(o.BACK):W===DS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),B=W}function Ge(W){W!==ut&&(z&&o.lineWidth(W),ut=W)}function It(W,At,Dt){W?(_t(o.POLYGON_OFFSET_FILL),(ot!==At||ht!==Dt)&&(o.polygonOffset(At,Dt),ot=At,ht=Dt)):Ht(o.POLYGON_OFFSET_FILL)}function se(W){W?_t(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function Ke(W){W===void 0&&(W=o.TEXTURE0+mt-1),St!==W&&(o.activeTexture(W),St=W)}function Ze(W,At,Dt){Dt===void 0&&(St===null?Dt=o.TEXTURE0+mt-1:Dt=St);let Bt=Tt[Dt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Tt[Dt]=Bt),(Bt.type!==W||Bt.texture!==At)&&(St!==Dt&&(o.activeTexture(Dt),St=Dt),o.bindTexture(W,At||vt[W]),Bt.type=W,Bt.texture=At)}function L(){const W=Tt[St];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(W){Et.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Et.copy(W))}function Yt(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Pt(W,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Bt=Dt.get(W);Bt===void 0&&(Bt=o.getUniformBlockIndex(At,W.name),Dt.set(W,Bt))}function Ut(W,At){const Bt=p.get(At).get(W);m.get(At)!==Bt&&(o.uniformBlockBinding(At,Bt,W.__bindingPointIndex),m.set(At,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},St=null,Tt={},v={},S=new WeakMap,M=[],b=null,R=!1,y=null,g=null,F=null,O=null,D=null,X=null,G=null,U=new Ce(0,0,0),V=0,C=!1,w=null,B=null,ut=null,ot=null,ht=null,Et.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:_t,disable:Ht,bindFramebuffer:zt,drawBuffers:ee,useProgram:Xe,setBlending:Me,setMaterial:Jt,setFlipSided:xe,setCullFace:Zt,setLineWidth:Ge,setPolygonOffset:It,setScissorTest:se,activeTexture:Ke,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:qt,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:ft,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:wt,viewport:Yt,reset:re}}function wb(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,x=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Cc("canvas")}function R(L,E,et){let ft=1;const yt=Ze(L);if((yt.width>et||yt.height>et)&&(ft=et/Math.max(yt.width,yt.height)),ft<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(ft*yt.width),jt=Math.floor(ft*yt.height);v===void 0&&(v=b(lt,jt));const Ct=E?b(lt,jt):v;return Ct.width=lt,Ct.height=jt,Ct.getContext("2d").drawImage(L,0,0,lt,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+lt+"x"+jt+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,et,ft,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=E;if(E===o.RED&&(et===o.FLOAT&&(lt=o.R32F),et===o.HALF_FLOAT&&(lt=o.R16F),et===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.R8UI),et===o.UNSIGNED_SHORT&&(lt=o.R16UI),et===o.UNSIGNED_INT&&(lt=o.R32UI),et===o.BYTE&&(lt=o.R8I),et===o.SHORT&&(lt=o.R16I),et===o.INT&&(lt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(lt=o.RG32F),et===o.HALF_FLOAT&&(lt=o.RG16F),et===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RG8UI),et===o.UNSIGNED_SHORT&&(lt=o.RG16UI),et===o.UNSIGNED_INT&&(lt=o.RG32UI),et===o.BYTE&&(lt=o.RG8I),et===o.SHORT&&(lt=o.RG16I),et===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),et===o.UNSIGNED_INT&&(lt=o.RGB32UI),et===o.BYTE&&(lt=o.RGB8I),et===o.SHORT&&(lt=o.RGB16I),et===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),et===o.UNSIGNED_INT&&(lt=o.RGBA32UI),et===o.BYTE&&(lt=o.RGBA8I),et===o.SHORT&&(lt=o.RGBA16I),et===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),E===o.RGBA){const jt=yt?Ac:Re.getTransfer(ft);et===o.FLOAT&&(lt=o.RGBA32F),et===o.HALF_FLOAT&&(lt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(lt=jt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function D(L,E){let et;return L?E===null||E===ys||E===zo?et=o.DEPTH24_STENCIL8:E===sa?et=o.DEPTH32F_STENCIL8:E===Oo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ys||E===zo?et=o.DEPTH_COMPONENT24:E===sa?et=o.DEPTH_COMPONENT32F:E===Oo&&(et=o.DEPTH_COMPONENT16),et}function X(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==yi&&L.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),V(E),E.isVideoTexture&&x.delete(E)}function U(L){const E=L.target;E.removeEventListener("dispose",U),w(E)}function V(L){const E=s.get(L);if(E.__webglInit===void 0)return;const et=L.source,ft=S.get(et);if(ft){const yt=ft[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&C(L),Object.keys(ft).length===0&&S.delete(et)}s.remove(L)}function C(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const et=L.source,ft=S.get(et);delete ft[E.__cacheKey],h.memory.textures--}function w(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let yt=0;yt<E.__webglFramebuffer[ft].length;yt++)o.deleteFramebuffer(E.__webglFramebuffer[ft][yt]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=L.textures;for(let ft=0,yt=et.length;ft<yt;ft++){const lt=s.get(et[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(et[ft])}s.remove(L)}let B=0;function ut(){B=0}function ot(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ht(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function mt(L,E){const et=s.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&et.__version!==L.version){const ft=L.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(et,L,E);return}}else L.isExternalTexture&&(et.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function z(L,E){const et=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){vt(et,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function K(L,E){const et=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){vt(et,L,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function Z(L,E){const et=s.get(L);if(L.version>0&&et.__version!==L.version){_t(et,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const St={[zh]:o.REPEAT,[xs]:o.CLAMP_TO_EDGE,[Ph]:o.MIRRORED_REPEAT},Tt={[yi]:o.NEAREST,[sy]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[Ss]:o.LINEAR_MIPMAP_LINEAR},N={[cy]:o.NEVER,[my]:o.ALWAYS,[uy]:o.LESS,[D0]:o.LEQUAL,[fy]:o.EQUAL,[py]:o.GEQUAL,[hy]:o.GREATER,[dy]:o.NOTEQUAL};function it(L,E){if(E.type===sa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Wf||E.magFilter===$l||E.magFilter===Ss||E.minFilter===wi||E.minFilter===Wf||E.minFilter===$l||E.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==$l&&E.minFilter!==Ss||E.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Et(L,E){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const ft=E.source;let yt=S.get(ft);yt===void 0&&(yt={},S.set(ft,yt));const lt=ht(E);if(lt!==L.__cacheKey){yt[lt]===void 0&&(yt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[lt].usedTimes++;const jt=yt[L.__cacheKey];jt!==void 0&&(yt[L.__cacheKey].usedTimes--,jt.usedTimes===0&&C(E)),L.__cacheKey=lt,L.__webglTexture=yt[lt].texture}return et}function Rt(L,E,et){return Math.floor(Math.floor(L/et)/E)}function Q(L,E,et,ft){const lt=L.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ft,E.data);else{lt.sort((bt,wt)=>bt.start-wt.start);let jt=0;for(let bt=1;bt<lt.length;bt++){const wt=lt[jt],Yt=lt[bt],Pt=wt.start+wt.count,Ut=Rt(Yt.start,E.width,4),re=Rt(wt.start,E.width,4);Yt.start<=Pt+1&&Ut===re&&Rt(Yt.start+Yt.count-1,E.width,4)===Ut?wt.count=Math.max(wt.count,Yt.start+Yt.count-wt.start):(++jt,lt[jt]=Yt)}lt.length=jt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let bt=0,wt=lt.length;bt<wt;bt++){const Yt=lt[bt],Pt=Math.floor(Yt.start/4),Ut=Math.ceil(Yt.count/4),re=Pt%E.width,W=Math.floor(Pt/E.width),At=Ut,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,re,W,At,Dt,et,ft,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function vt(L,E,et){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const yt=Et(L,E),lt=E.source;i.bindTexture(ft,L.__webglTexture,o.TEXTURE0+et);const jt=s.get(lt);if(lt.version!==jt.__version||yt===!0){i.activeTexture(o.TEXTURE0+et);const Ct=Re.getPrimaries(Re.workingColorSpace),Wt=E.colorSpace===Fa?null:Re.getPrimaries(E.colorSpace),qt=E.colorSpace===Fa||Ct===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=R(E.image,!1,l.maxTextureSize);bt=Ke(E,bt);const wt=u.convert(E.format,E.colorSpace),Yt=u.convert(E.type);let Pt=O(E.internalFormat,wt,Yt,E.colorSpace,E.isVideoTexture);it(ft,E);let Ut;const re=E.mipmaps,W=E.isVideoTexture!==!0,At=jt.__version===void 0||yt===!0,Dt=lt.dataReady,Bt=X(E,bt);if(E.isDepthTexture)Pt=D(E.format===Bo,E.type),At&&(W?i.texStorage2D(o.TEXTURE_2D,1,Pt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,wt,Yt,null));else if(E.isDataTexture)if(re.length>0){W&&At&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,re[0].width,re[0].height);for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],W?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Yt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,wt,Yt,Ut.data);E.generateMipmaps=!1}else W?(At&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,bt.width,bt.height),Dt&&Q(E,bt,wt,Yt)):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,wt,Yt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Pt,re[0].width,re[0].height,bt.depth);for(let Mt=0,gt=re.length;Mt<gt;Mt++)if(Ut=re[Mt],E.format!==Si)if(wt!==null)if(W){if(Dt)if(E.layerUpdates.size>0){const Ft=W_(Ut.width,Ut.height,E.format,E.type);for(const ie of E.layerUpdates){const Ne=Ut.data.subarray(ie*Ft/Ut.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Ut.width,Ut.height,1,wt,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Yt,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,bt.depth,0,wt,Yt,Ut.data)}else{W&&At&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,re[0].width,re[0].height);for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],E.format!==Si?wt!==null?W?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Yt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,wt,Yt,Ut.data)}else if(E.isDataArrayTexture)if(W){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Pt,bt.width,bt.height,bt.depth),Dt)if(E.layerUpdates.size>0){const Mt=W_(bt.width,bt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ft=bt.data.subarray(gt*Mt/bt.data.BYTES_PER_ELEMENT,(gt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,wt,Yt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,wt,Yt,bt.data);else if(E.isData3DTexture)W?(At&&i.texStorage3D(o.TEXTURE_3D,Bt,Pt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,wt,Yt,bt.data);else if(E.isFramebufferTexture){if(At)if(W)i.texStorage2D(o.TEXTURE_2D,Bt,Pt,bt.width,bt.height);else{let Mt=bt.width,gt=bt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Pt,Mt,gt,0,wt,Yt,null),Mt>>=1,gt>>=1}}else if(re.length>0){if(W&&At){const Mt=Ze(re[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Mt.width,Mt.height)}for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],W?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt,Yt,Ut):i.texImage2D(o.TEXTURE_2D,Mt,Pt,wt,Yt,Ut);E.generateMipmaps=!1}else if(W){if(At){const Mt=Ze(bt);i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Mt.width,Mt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,Yt,bt);y(E)&&g(ft),jt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function _t(L,E,et){if(E.image.length!==6)return;const ft=Et(L,E),yt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const lt=s.get(yt);if(yt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const jt=Re.getPrimaries(Re.workingColorSpace),Ct=E.colorSpace===Fa?null:Re.getPrimaries(E.colorSpace),Wt=E.colorSpace===Fa||jt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let gt=0;gt<6;gt++)!qt&&!bt?wt[gt]=R(E.image[gt],!0,l.maxCubemapSize):wt[gt]=bt?E.image[gt].image:E.image[gt],wt[gt]=Ke(E,wt[gt]);const Yt=wt[0],Pt=u.convert(E.format,E.colorSpace),Ut=u.convert(E.type),re=O(E.internalFormat,Pt,Ut,E.colorSpace),W=E.isVideoTexture!==!0,At=lt.__version===void 0||ft===!0,Dt=yt.dataReady;let Bt=X(E,Yt);it(o.TEXTURE_CUBE_MAP,E);let Mt;if(qt){W&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){Mt=wt[gt].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];E.format!==Si?Pt!==null?W?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ie.width,ie.height,Pt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ie.width,ie.height,Pt,Ut,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,re,ie.width,ie.height,0,Pt,Ut,ie.data)}}}else{if(Mt=E.mipmaps,W&&At){Mt.length>0&&Bt++;const gt=Ze(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){W?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,wt[gt].width,wt[gt].height,Pt,Ut,wt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,wt[gt].width,wt[gt].height,0,Pt,Ut,wt[gt].data);for(let Ft=0;Ft<Mt.length;Ft++){const Ne=Mt[Ft].image[gt].image;W?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Ne.width,Ne.height,Pt,Ut,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,re,Ne.width,Ne.height,0,Pt,Ut,Ne.data)}}else{W?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt,Ut,wt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Pt,Ut,wt[gt]);for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];W?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Pt,Ut,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,re,Pt,Ut,ie.image[gt])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),lt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ht(L,E,et,ft,yt,lt){const jt=u.convert(et.format,et.colorSpace),Ct=u.convert(et.type),Wt=O(et.internalFormat,jt,Ct,et.colorSpace),qt=s.get(E),bt=s.get(et);if(bt.__renderTarget=E,!qt.__hasExternalTextures){const wt=Math.max(1,E.width>>lt),Yt=Math.max(1,E.height>>lt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,lt,Wt,wt,Yt,E.depth,0,jt,Ct,null):i.texImage2D(yt,lt,Wt,wt,Yt,0,jt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),It(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,yt,bt.__webglTexture,0,Ge(E)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,yt,bt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(L,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ft=E.depthTexture,yt=ft&&ft.isDepthTexture?ft.type:null,lt=D(E.stencilBuffer,yt),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=Ge(E);It(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,lt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,L)}else{const ft=E.textures;for(let yt=0;yt<ft.length;yt++){const lt=ft[yt],jt=u.convert(lt.format,lt.colorSpace),Ct=u.convert(lt.type),Wt=O(lt.internalFormat,jt,Ct,lt.colorSpace),qt=Ge(E);et&&It(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Wt,E.width,E.height):It(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Wt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),mt(E.depthTexture,0);const yt=ft.__webglTexture,lt=Ge(E);if(E.depthTexture.format===Po)It(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(E.depthTexture.format===Bo)It(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const E=s.get(L),et=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ft=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",yt)};ft.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=ft}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ft=L.texture.mipmaps;ft&&ft.length>0?ee(E.__webglFramebuffer[0],L):ee(E.__webglFramebuffer,L)}else if(et){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),zt(E.__webglDepthbuffer[ft],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,lt)}}else{const ft=L.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),zt(E.__webglDepthbuffer,L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function he(L,E,et){const ft=s.get(L);E!==void 0&&Ht(ft.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Xe(L)}function H(L){const E=L.texture,et=s.get(L),ft=s.get(E);L.addEventListener("dispose",U);const yt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,jt=yt.length>1;if(jt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),lt){et.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)et.__webglFramebuffer[Ct][Wt]=o.createFramebuffer()}else et.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)et.__webglFramebuffer[Ct]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Ct=0,Wt=yt.length;Ct<Wt;Ct++){const qt=s.get(yt[Ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&It(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const Wt=yt[Ct];et.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const qt=u.convert(Wt.format,Wt.colorSpace),bt=u.convert(Wt.type),wt=O(Wt.internalFormat,qt,bt,Wt.colorSpace,L.isXRRenderTarget===!0),Yt=Ge(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,wt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),it(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Ht(et.__webglFramebuffer[Ct][Wt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Ht(et.__webglFramebuffer[Ct],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ct=0,Wt=yt.length;Ct<Wt;Ct++){const qt=yt[Ct],bt=s.get(qt);let wt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,bt.__webglTexture),it(wt,qt),Ht(et.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+Ct,wt,0),y(qt)&&g(wt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ft.__webglTexture),it(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)Ht(et.__webglFramebuffer[Wt],L,E,o.COLOR_ATTACHMENT0,Ct,Wt);else Ht(et.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ct,0);y(E)&&g(Ct),i.unbindTexture()}L.depthBuffer&&Xe(L)}function Me(L){const E=L.textures;for(let et=0,ft=E.length;et<ft;et++){const yt=E[et];if(y(yt)){const lt=F(L),jt=s.get(yt).__webglTexture;i.bindTexture(lt,jt),g(lt),i.unbindTexture()}}}const Jt=[],xe=[];function Zt(L){if(L.samples>0){if(It(L)===!1){const E=L.textures,et=L.width,ft=L.height;let yt=o.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(L),Ct=E.length>1;if(Ct)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Wt=L.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[qt]);const bt=s.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,yt,o.NEAREST),m===!0&&(Jt.length=0,xe.length=0,Jt.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(lt),xe.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,jt.__webglColorRenderbuffer[qt]);const bt=s.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(L){return Math.min(l.maxSamples,L.samples)}function It(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(L){const E=h.render.frame;x.get(L)!==E&&(x.set(L,E),L.update())}function Ke(L,E){const et=L.colorSpace,ft=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Ar&&et!==Fa&&(Re.getTransfer(et)===Fe?(ft!==Si||yt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=ut,this.setTexture2D=mt,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=he,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=It}function Db(o,e){function i(s,l=Fa){let u;const h=Re.getTransfer(l);if(s===Li)return o.UNSIGNED_BYTE;if(s===pd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===md)return o.UNSIGNED_SHORT_5_5_5_1;if(s===E0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===y0)return o.BYTE;if(s===M0)return o.SHORT;if(s===Oo)return o.UNSIGNED_SHORT;if(s===dd)return o.INT;if(s===ys)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Io)return o.HALF_FLOAT;if(s===T0)return o.ALPHA;if(s===b0)return o.RGB;if(s===Si)return o.RGBA;if(s===Po)return o.DEPTH_COMPONENT;if(s===Bo)return o.DEPTH_STENCIL;if(s===A0)return o.RED;if(s===gd)return o.RED_INTEGER;if(s===R0)return o.RG;if(s===_d)return o.RG_INTEGER;if(s===vd)return o.RGBA_INTEGER;if(s===Sc||s===yc||s===Mc||s===Ec)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Ih||s===Fh||s===Hh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Bh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gh||s===Vh||s===kh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Gh||s===Vh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===Wh||s===qh||s===jh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Xh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===ad||s===sd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Tc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===C0||s===rd||s===od||s===ld)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===rd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===od)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ld)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class Z0 extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Z0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:Ub,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new Dc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ob extends Cr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,v=null,S=null,M=null,b=null;const R=new Nb,y={},g=i.getContextAttributes();let F=null,O=null;const D=[],X=[],G=new we;let U=null;const V=new ei;V.viewport=new He;const C=new ei;C.viewport=new He;const w=[V,C],B=new eM;let ut=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=D[Q];return vt===void 0&&(vt=new ph,D[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=D[Q];return vt===void 0&&(vt=new ph,D[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=D[Q];return vt===void 0&&(vt=new ph,D[Q]=vt),vt.getHandSpace()};function ht(Q){const vt=X.indexOf(Q.inputSource);if(vt===-1)return;const _t=D[vt];_t!==void 0&&(_t.update(Q.inputSource,Q.frame,p||h),_t.dispatchEvent({type:Q.type,data:Q.inputSource}))}function mt(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",z);for(let Q=0;Q<D.length;Q++){const vt=X[Q];vt!==null&&(X[Q]=null,D[Q].disconnect(vt))}ut=null,ot=null,R.reset();for(const Q in y)delete y[Q];e.setRenderTarget(F),M=null,S=null,v=null,l=null,O=null,Rt.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await i.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ht=null,zt=null;g.depth&&(zt=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=g.stencil?Bo:Po,Ht=g.stencil?zo:ys);const ee={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:u};S=v.createProjectionLayer(ee),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Ms(S.textureWidth,S.textureHeight,{format:Si,type:Li,depthTexture:new G0(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _t={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ms(M.framebufferWidth,M.framebufferHeight,{format:Si,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function z(Q){for(let vt=0;vt<Q.removed.length;vt++){const _t=Q.removed[vt],Ht=X.indexOf(_t);Ht>=0&&(X[Ht]=null,D[Ht].disconnect(_t))}for(let vt=0;vt<Q.added.length;vt++){const _t=Q.added[vt];let Ht=X.indexOf(_t);if(Ht===-1){for(let ee=0;ee<D.length;ee++)if(ee>=X.length){X.push(_t),Ht=ee;break}else if(X[ee]===null){X[ee]=_t,Ht=ee;break}if(Ht===-1)break}const zt=D[Ht];zt&&zt.connect(_t)}}const K=new J,Z=new J;function St(Q,vt,_t){K.setFromMatrixPosition(vt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const Ht=K.distanceTo(Z),zt=vt.projectionMatrix.elements,ee=_t.projectionMatrix.elements,Xe=zt[14]/(zt[10]-1),he=zt[14]/(zt[10]+1),H=(zt[9]+1)/zt[5],Me=(zt[9]-1)/zt[5],Jt=(zt[8]-1)/zt[0],xe=(ee[8]+1)/ee[0],Zt=Xe*Jt,Ge=Xe*xe,It=Ht/(-Jt+xe),se=It*-Jt;if(vt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(It),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Ke=Xe+It,Ze=he+It,L=Zt-se,E=Ge+(Ht-se),et=H*he/Ze*Ke,ft=Me*he/Ze*Ke;Q.projectionMatrix.makePerspective(L,E,et,ft,Ke,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Tt(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let vt=Q.near,_t=Q.far;R.texture!==null&&(R.depthNear>0&&(vt=R.depthNear),R.depthFar>0&&(_t=R.depthFar)),B.near=C.near=V.near=vt,B.far=C.far=V.far=_t,(ut!==B.near||ot!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),ut=B.near,ot=B.far),B.layers.mask=Q.layers.mask|6,V.layers.mask=B.layers.mask&3,C.layers.mask=B.layers.mask&5;const Ht=Q.parent,zt=B.cameras;Tt(B,Ht);for(let ee=0;ee<zt.length;ee++)Tt(zt[ee],Ht);zt.length===2?St(B,V,C):B.projectionMatrix.copy(V.projectionMatrix),N(Q,B,Ht)};function N(Q,vt,_t){_t===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(_t.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(B)},this.getCameraTexture=function(Q){return y[Q]};let it=null;function Et(Q,vt){if(x=vt.getViewerPose(p||h),b=vt,x!==null){const _t=x.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ht=!1;_t.length!==B.cameras.length&&(B.cameras.length=0,Ht=!0);for(let he=0;he<_t.length;he++){const H=_t[he];let Me=null;if(M!==null)Me=M.getViewport(H);else{const xe=v.getViewSubImage(S,H);Me=xe.viewport,he===0&&(e.setRenderTargetTextures(O,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(O))}let Jt=w[he];Jt===void 0&&(Jt=new ei,Jt.layers.enable(he),Jt.viewport=new He,w[he]=Jt),Jt.matrix.fromArray(H.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(H.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Me.x,Me.y,Me.width,Me.height),he===0&&(B.matrix.copy(Jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ht===!0&&B.cameras.push(Jt)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const he=v.getDepthInformation(_t[0]);he&&he.isValid&&he.texture&&R.init(he,l.renderState)}if(zt&&zt.includes("camera-access")&&(e.state.unbindTexture(),v))for(let he=0;he<_t.length;he++){const H=_t[he].camera;if(H){let Me=y[H];Me||(Me=new Z0,y[H]=Me);const Jt=v.getCameraImage(H);Me.sourceTexture=Jt}}}for(let _t=0;_t<D.length;_t++){const Ht=X[_t],zt=D[_t];Ht!==null&&zt!==void 0&&zt.update(Ht,vt,p||h)}it&&it(Q,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Rt=new X0;Rt.setAnimationLoop(Et),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const ps=new Ni,zb=new $e;function Pb(o,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,I0(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,F,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),x(y,g)):g.isMeshStandardMaterial?(u(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(u(y,g),b(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,F,O):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Vn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Vn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const F=e.get(g),O=F.envMap,D=F.envMapRotation;O&&(y.envMap.value=O,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(zb.makeRotationFromEuler(ps)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,F,O){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*F,y.scale.value=O*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function x(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,F){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const F=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Bb(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,O){const D=O.program;s.uniformBlockBinding(F,D)}function p(F,O){let D=l[F.id];D===void 0&&(b(F),D=x(F),l[F.id]=D,F.addEventListener("dispose",y));const X=O.program;s.updateUBOMapping(F,X);const G=e.render.frame;u[F.id]!==G&&(S(F),u[F.id]=G)}function x(F){const O=v();F.__bindingPointIndex=O;const D=o.createBuffer(),X=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,X,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const O=l[F.id],D=F.uniforms,X=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,U=D.length;G<U;G++){const V=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,w=V.length;C<w;C++){const B=V[C];if(M(B,G,C,X)===!0){const ut=B.__offset,ot=Array.isArray(B.value)?B.value:[B.value];let ht=0;for(let mt=0;mt<ot.length;mt++){const z=ot[mt],K=R(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ut+ht,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,ht),ht+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,O,D,X){const G=F.value,U=O+"_"+D;if(X[U]===void 0)return typeof G=="number"||typeof G=="boolean"?X[U]=G:X[U]=G.clone(),!0;{const V=X[U];if(typeof G=="number"||typeof G=="boolean"){if(V!==G)return X[U]=G,!0}else if(V.equals(G)===!1)return V.copy(G),!0}return!1}function b(F){const O=F.uniforms;let D=0;const X=16;for(let U=0,V=O.length;U<V;U++){const C=Array.isArray(O[U])?O[U]:[O[U]];for(let w=0,B=C.length;w<B;w++){const ut=C[w],ot=Array.isArray(ut.value)?ut.value:[ut.value];for(let ht=0,mt=ot.length;ht<mt;ht++){const z=ot[ht],K=R(z),Z=D%X,St=Z%K.boundary,Tt=Z+St;D+=St,Tt!==0&&X-Tt<K.storage&&(D+=X-Tt),ut.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=K.storage}}}const G=D%X;return G>0&&(D+=X-G),F.__size=D,F.__cache={},this}function R(F){const O={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(O.boundary=4,O.storage=4):F.isVector2?(O.boundary=8,O.storage=8):F.isVector3||F.isColor?(O.boundary=16,O.storage=12):F.isVector4?(O.boundary=16,O.storage=16):F.isMatrix3?(O.boundary=48,O.storage=48):F.isMatrix4?(O.boundary=64,O.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),O}function y(F){const O=F.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function g(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class Ib{constructor(e={}){const{canvas:i=_y(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const F=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let X=!1;this._outputColorSpace=ti;let G=0,U=0,V=null,C=-1,w=null;const B=new He,ut=new He;let ot=null;const ht=new Ce(0);let mt=0,z=i.width,K=i.height,Z=1,St=null,Tt=null;const N=new He(0,0,z,K),it=new He(0,0,z,K);let Et=!1;const Rt=new yd;let Q=!1,vt=!1;const _t=new $e,Ht=new J,zt=new He,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function he(){return V===null?Z:1}let H=s;function Me(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hd}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const q="webgl2";if(H=Me(q,A),H===null)throw Me(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Jt,xe,Zt,Ge,It,se,Ke,Ze,L,E,et,ft,yt,lt,jt,Ct,Wt,qt,bt,wt,Yt,Pt,Ut,re;function W(){Jt=new Y1(H),Jt.init(),Pt=new Db(H,Jt),xe=new G1(H,Jt,e,Pt),Zt=new Cb(H,Jt),xe.reversedDepthBuffer&&S&&Zt.buffers.depth.setReversed(!0),Ge=new Q1(H),It=new mb,se=new wb(H,Jt,Zt,It,xe,Pt,Ge),Ke=new k1(D),Ze=new j1(D),L=new iM(H),Ut=new F1(H,L),E=new Z1(H,L,Ge,Ut),et=new $1(H,E,L,Ge),bt=new J1(H,xe,se),Ct=new V1(It),ft=new pb(D,Ke,Ze,Jt,xe,Ut,Ct),yt=new Pb(D,It),lt=new _b,jt=new Eb(Jt),qt=new I1(D,Ke,Ze,Zt,et,M,m),Wt=new Ab(D,et,xe),re=new Bb(H,Ge,xe,Zt),wt=new H1(H,Jt,Ge),Yt=new K1(H,Jt,Ge),Ge.programs=ft.programs,D.capabilities=xe,D.extensions=Jt,D.properties=It,D.renderLists=lt,D.shadowMap=Wt,D.state=Zt,D.info=Ge}W();const At=new Ob(D,H);this.xr=At,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(z,K,!1))},this.getSize=function(A){return A.set(z,K)},this.setSize=function(A,q,at=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,K=q,i.width=Math.floor(A*Z),i.height=Math.floor(q*Z),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*Z,K*Z).floor()},this.setDrawingBufferSize=function(A,q,at){z=A,K=q,Z=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,q,at,st){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,q,at,st),Zt.viewport(B.copy(N).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,q,at,st){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,q,at,st),Zt.scissor(ut.copy(it).multiplyScalar(Z).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){Zt.setScissorTest(Et=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let st=0;if(A){let j=!1;if(V!==null){const xt=V.texture.format;j=xt===vd||xt===_d||xt===gd}if(j){const xt=V.texture.type,Lt=xt===Li||xt===ys||xt===Oo||xt===zo||xt===pd||xt===md,Vt=qt.getClearColor(),Ot=qt.getClearAlpha(),Kt=Vt.r,ne=Vt.g,Qt=Vt.b;Lt?(b[0]=Kt,b[1]=ne,b[2]=Qt,b[3]=Ot,H.clearBufferuiv(H.COLOR,0,b)):(R[0]=Kt,R[1]=ne,R[2]=Qt,R[3]=Ot,H.clearBufferiv(H.COLOR,0,R))}else st|=H.COLOR_BUFFER_BIT}q&&(st|=H.DEPTH_BUFFER_BIT),at&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),lt.dispose(),jt.dispose(),It.dispose(),Ke.dispose(),Ze.dispose(),et.dispose(),Ut.dispose(),re.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",ii),At.removeEventListener("sessionend",Dr),Mi.stop()};function Dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=Ge.autoReset,q=Wt.enabled,at=Wt.autoUpdate,st=Wt.needsUpdate,j=Wt.type;W(),Ge.autoReset=A,Wt.enabled=q,Wt.autoUpdate=at,Wt.needsUpdate=st,Wt.type=j}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const q=A.target;q.removeEventListener("dispose",gt),Ft(q)}function Ft(A){ie(A),It.remove(A)}function ie(A){const q=It.get(A).programs;q!==void 0&&(q.forEach(function(at){ft.releaseProgram(at)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,st,j,xt){q===null&&(q=ee);const Lt=j.isMesh&&j.matrixWorld.determinant()<0,Vt=ca(A,q,at,st,j);Zt.setMaterial(st,Lt);let Ot=at.index,Kt=1;if(st.wireframe===!0){if(Ot=E.getWireframeAttribute(at),Ot===void 0)return;Kt=2}const ne=at.drawRange,Qt=at.attributes.position;let fe=ne.start*Kt,Ue=(ne.start+ne.count)*Kt;xt!==null&&(fe=Math.max(fe,xt.start*Kt),Ue=Math.min(Ue,(xt.start+xt.count)*Kt)),Ot!==null?(fe=Math.max(fe,0),Ue=Math.min(Ue,Ot.count)):Qt!=null&&(fe=Math.max(fe,0),Ue=Math.min(Ue,Qt.count));const Ve=Ue-fe;if(Ve<0||Ve===1/0)return;Ut.setup(j,st,Vt,at,Ot);let Le,de=wt;if(Ot!==null&&(Le=L.get(Ot),de=Yt,de.setIndex(Le)),j.isMesh)st.wireframe===!0?(Zt.setLineWidth(st.wireframeLinewidth*he()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(j.isLine){let kt=st.linewidth;kt===void 0&&(kt=1),Zt.setLineWidth(kt*he()),j.isLineSegments?de.setMode(H.LINES):j.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else j.isPoints?de.setMode(H.POINTS):j.isSprite&&de.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))de.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const kt=j._multiDrawStarts,We=j._multiDrawCounts,Te=j._multiDrawCount,Sn=Ot?L.get(Ot).bytesPerElement:1,Oi=It.get(st).currentProgram.getUniforms();for(let mn=0;mn<Te;mn++)Oi.setValue(H,"_gl_DrawID",mn),de.render(kt[mn]/Sn,We[mn])}else if(j.isInstancedMesh)de.renderInstances(fe,Ve,j.count);else if(at.isInstancedBufferGeometry){const kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,We=Math.min(at.instanceCount,kt);de.renderInstances(fe,Ve,We)}else de.render(fe,Ve)};function Ne(A,q,at){A.transparent===!0&&A.side===aa&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Xn(A,q,at),A.side=Va,A.needsUpdate=!0,Xn(A,q,at),A.side=aa):Xn(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),g=jt.get(at),g.init(q),O.push(g),at.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xt=j.material;if(xt)if(Array.isArray(xt))for(let Lt=0;Lt<xt.length;Lt++){const Vt=xt[Lt];Ne(Vt,at,j),st.add(Vt)}else Ne(xt,at,j),st.add(xt)}),g=O.pop(),st},this.compileAsync=function(A,q,at=null){const st=this.compile(A,q,at);return new Promise(j=>{function xt(){if(st.forEach(function(Lt){It.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){j(A);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ee=null;function Un(A){Ee&&Ee(A)}function ii(){Mi.stop()}function Dr(){Mi.start()}const Mi=new X0;Mi.setAnimationLoop(Un),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Ee=A,At.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},At.addEventListener("sessionstart",ii),At.addEventListener("sessionend",Dr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,q,V),g=jt.get(A,O.length),g.init(q),O.push(g),_t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Rt.setFromProjectionMatrix(_t,Di,q.reversedDepth),vt=this.localClippingEnabled,Q=Ct.init(this.clippingPlanes,vt),y=lt.get(A,F.length),y.init(),F.push(y),At.enabled===!0&&At.isPresenting===!0){const xt=D.xr.getDepthSensingMesh();xt!==null&&Es(xt,q,-1/0,D.sortObjects)}Es(A,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,Tt),Xe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Xe&&qt.addToRenderList(y,A),this.info.render.frame++,Q===!0&&Ct.beginShadows();const at=g.state.shadowsArray;Wt.render(at,A,q),Q===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(g.setupLights(),q.isArrayCamera){const xt=q.cameras;if(j.length>0)for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++){const Ot=xt[Lt];bs(st,j,A,Ot)}Xe&&qt.render(A);for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++){const Ot=xt[Lt];Ts(y,A,Ot,Ot.viewport)}}else j.length>0&&bs(st,j,A,q),Xe&&qt.render(A),Ts(y,A,q);V!==null&&U===0&&(se.updateMultisampleRenderTarget(V),se.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(D,A,q),Ut.resetDefaultState(),C=-1,w=null,O.pop(),O.length>0?(g=O[O.length-1],Q===!0&&Ct.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Es(A,q,at,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Rt.intersectsSprite(A)){st&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const Lt=et.update(A),Vt=A.material;Vt.visible&&y.push(A,Lt,Vt,at,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Rt.intersectsObject(A))){const Lt=et.update(A),Vt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(Vt)){const Ot=Lt.groups;for(let Kt=0,ne=Ot.length;Kt<ne;Kt++){const Qt=Ot[Kt],fe=Vt[Qt.materialIndex];fe&&fe.visible&&y.push(A,Lt,fe,at,zt.z,Qt)}}else Vt.visible&&y.push(A,Lt,Vt,at,zt.z,null)}}const xt=A.children;for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++)Es(xt[Lt],q,at,st)}function Ts(A,q,at,st){const j=A.opaque,xt=A.transmissive,Lt=A.transparent;g.setupLightsView(at),Q===!0&&Ct.setGlobalState(D.clippingPlanes,at),st&&Zt.viewport(B.copy(st)),j.length>0&&Xa(j,q,at),xt.length>0&&Xa(xt,q,at),Lt.length>0&&Xa(Lt,q,at),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function bs(A,q,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Ms(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Io:Li,minFilter:Ss,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const xt=g.state.transmissionRenderTarget[st.id],Lt=st.viewport||B;xt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);const Vt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Kt=D.getActiveMipmapLevel();D.setRenderTarget(xt),D.getClearColor(ht),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),Xe&&qt.render(at);const ne=D.toneMapping;D.toneMapping=Ga;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),Q===!0&&Ct.setGlobalState(D.clippingPlanes,st),Xa(A,at,st),se.updateMultisampleRenderTarget(xt),se.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ue=0,Ve=q.length;Ue<Ve;Ue++){const Le=q[Ue],de=Le.object,kt=Le.geometry,We=Le.material,Te=Le.group;if(We.side===aa&&de.layers.test(st.layers)){const Sn=We.side;We.side=Vn,We.needsUpdate=!0,Ur(de,at,st,kt,We,Te),We.side=Sn,We.needsUpdate=!0,fe=!0}}fe===!0&&(se.updateMultisampleRenderTarget(xt),se.updateRenderTargetMipmap(xt))}D.setRenderTarget(Vt,Ot,Kt),D.setClearColor(ht,mt),Qt!==void 0&&(st.viewport=Qt),D.toneMapping=ne}function Xa(A,q,at){const st=q.isScene===!0?q.overrideMaterial:null;for(let j=0,xt=A.length;j<xt;j++){const Lt=A[j],Vt=Lt.object,Ot=Lt.geometry,Kt=Lt.group;let ne=Lt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Vt.layers.test(at.layers)&&Ur(Vt,q,at,Ot,ne,Kt)}}function Ur(A,q,at,st,j,xt){A.onBeforeRender(D,q,at,st,j,xt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,q,at,st,A,xt),j.transparent===!0&&j.side===aa&&j.forceSinglePass===!1?(j.side=Vn,j.needsUpdate=!0,D.renderBufferDirect(at,q,st,j,A,xt),j.side=Va,j.needsUpdate=!0,D.renderBufferDirect(at,q,st,j,A,xt),j.side=aa):D.renderBufferDirect(at,q,st,j,A,xt),A.onAfterRender(D,q,at,st,j,xt)}function Xn(A,q,at){q.isScene!==!0&&(q=ee);const st=It.get(A),j=g.state.lights,xt=g.state.shadowsArray,Lt=j.state.version,Vt=ft.getParameters(A,j.state,xt,q,at),Ot=ft.getProgramCacheKey(Vt);let Kt=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?Ze:Ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",gt),Kt=new Map,st.programs=Kt);let ne=Kt.get(Ot);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Lt)return xn(A,Vt),ne}else Vt.uniforms=ft.getUniforms(A),A.onBeforeCompile(Vt,D),ne=ft.acquireProgram(Vt,Ot),Kt.set(Ot,ne),st.uniforms=Vt.uniforms;const Qt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=Ct.uniform),xn(A,Vt),st.needsLights=Lc(A),st.lightsStateVersion=Lt,st.needsLights&&(Qt.ambientLightColor.value=j.state.ambient,Qt.lightProbe.value=j.state.probe,Qt.directionalLights.value=j.state.directional,Qt.directionalLightShadows.value=j.state.directionalShadow,Qt.spotLights.value=j.state.spot,Qt.spotLightShadows.value=j.state.spotShadow,Qt.rectAreaLights.value=j.state.rectArea,Qt.ltc_1.value=j.state.rectAreaLTC1,Qt.ltc_2.value=j.state.rectAreaLTC2,Qt.pointLights.value=j.state.point,Qt.pointLightShadows.value=j.state.pointShadow,Qt.hemisphereLights.value=j.state.hemi,Qt.directionalShadowMap.value=j.state.directionalShadowMap,Qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qt.spotShadowMap.value=j.state.spotShadowMap,Qt.spotLightMatrix.value=j.state.spotLightMatrix,Qt.spotLightMap.value=j.state.spotLightMap,Qt.pointShadowMap.value=j.state.pointShadowMap,Qt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function an(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=bc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function xn(A,q){const at=It.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function ca(A,q,at,st,j){q.isScene!==!0&&(q=ee),se.resetTextureUnits();const xt=q.fog,Lt=st.isMeshStandardMaterial?q.environment:null,Vt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ar,Ot=(st.isMeshStandardMaterial?Ze:Ke).get(st.envMap||Lt),Kt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ne=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Qt=!!at.morphAttributes.position,fe=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Ve=Ga;st.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,de=Le!==void 0?Le.length:0,kt=It.get(st),We=g.state.lights;if(Q===!0&&(vt===!0||A!==w)){const un=A===w&&st.id===C;Ct.setState(st,A,un)}let Te=!1;st.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==We.state.version||kt.outputColorSpace!==Vt||j.isBatchedMesh&&kt.batching===!1||!j.isBatchedMesh&&kt.batching===!0||j.isBatchedMesh&&kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&kt.instancing===!1||!j.isInstancedMesh&&kt.instancing===!0||j.isSkinnedMesh&&kt.skinning===!1||!j.isSkinnedMesh&&kt.skinning===!0||j.isInstancedMesh&&kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&kt.instancingMorph===!1&&j.morphTexture!==null||kt.envMap!==Ot||st.fog===!0&&kt.fog!==xt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ct.numPlanes||kt.numIntersection!==Ct.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==ne||kt.morphTargets!==Qt||kt.morphNormals!==fe||kt.morphColors!==Ue||kt.toneMapping!==Ve||kt.morphTargetsCount!==de)&&(Te=!0):(Te=!0,kt.__version=st.version);let Sn=kt.currentProgram;Te===!0&&(Sn=Xn(st,q,j));let Oi=!1,mn=!1,qa=!1;const ge=Sn.getUniforms(),Rn=kt.uniforms;if(Zt.useProgram(Sn.program)&&(Oi=!0,mn=!0,qa=!0),st.id!==C&&(C=st.id,mn=!0),Oi||w!==A){Zt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(H,"projectionMatrix",A.projectionMatrix),ge.setValue(H,"viewMatrix",A.matrixWorldInverse);const tn=ge.map.cameraPosition;tn!==void 0&&tn.setValue(H,Ht.setFromMatrixPosition(A.matrixWorld)),xe.logarithmicDepthBuffer&&ge.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ge.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,mn=!0,qa=!0)}if(j.isSkinnedMesh){ge.setOptional(H,j,"bindMatrix"),ge.setOptional(H,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ge.setValue(H,"boneTexture",un.boneTexture,se))}j.isBatchedMesh&&(ge.setOptional(H,j,"batchingTexture"),ge.setValue(H,"batchingTexture",j._matricesTexture,se),ge.setOptional(H,j,"batchingIdTexture"),ge.setValue(H,"batchingIdTexture",j._indirectTexture,se),ge.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&ge.setValue(H,"batchingColorTexture",j._colorsTexture,se));const Ln=at.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&bt.update(j,at,Sn),(mn||kt.receiveShadow!==j.receiveShadow)&&(kt.receiveShadow=j.receiveShadow,ge.setValue(H,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=Ot,Rn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),mn&&(ge.setValue(H,"toneMappingExposure",D.toneMappingExposure),kt.needsLights&&Lr(Rn,qa),xt&&st.fog===!0&&yt.refreshFogUniforms(Rn,xt),yt.refreshMaterialUniforms(Rn,st,Z,K,g.state.transmissionRenderTarget[A.id]),bc.upload(H,an(kt),Rn,se)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(bc.upload(H,an(kt),Rn,se),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ge.setValue(H,"center",j.center),ge.setValue(H,"modelViewMatrix",j.modelViewMatrix),ge.setValue(H,"normalMatrix",j.normalMatrix),ge.setValue(H,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const un=st.uniformsGroups;for(let tn=0,As=un.length;tn<As;tn++){const Ei=un[tn];re.update(Ei,Sn),re.bind(Ei,Sn)}}return Sn}function Lr(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Lc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,q,at){const st=It.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),It.get(A.texture).__webglTexture=q,It.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=It.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const Nc=H.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){V=A,G=q,U=at;let st=!0,j=null,xt=!1,Lt=!1;if(A){const Ot=It.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Ot.__hasExternalTextures)se.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qt=A.depthTexture;if(Ot.__boundDepthTexture!==Qt){if(Qt!==null&&It.has(Qt)&&(A.width!==Qt.image.width||A.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);const ne=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[q])?j=ne[q][at]:j=ne[q],xt=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?j=It.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[at]:j=ne,B.copy(A.viewport),ut.copy(A.scissor),ot=A.scissorTest}else B.copy(N).multiplyScalar(Z).floor(),ut.copy(it).multiplyScalar(Z).floor(),ot=Et;if(at!==0&&(j=Nc),Zt.bindFramebuffer(H.FRAMEBUFFER,j)&&st&&Zt.drawBuffers(A,j),Zt.viewport(B),Zt.scissor(ut),Zt.setScissorTest(ot),xt){const Ot=It.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,at)}else if(Lt){const Ot=q;for(let Kt=0;Kt<A.textures.length;Kt++){const ne=It.get(A.textures[Kt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=It.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,q,at,st,j,xt,Lt,Vt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Zt.bindFramebuffer(H.FRAMEBUFFER,Ot);try{const Kt=A.textures[Vt],ne=Kt.format,Qt=Kt.type;if(!xe.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&at>=0&&at<=A.height-j&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(q,at,st,j,Pt.convert(ne),Pt.convert(Qt),xt))}finally{const Kt=V!==null?It.get(V).__webglFramebuffer:null;Zt.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,st,j,xt,Lt,Vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(q>=0&&q<=A.width-st&&at>=0&&at<=A.height-j){Zt.bindFramebuffer(H.FRAMEBUFFER,Ot);const Kt=A.textures[Vt],ne=Kt.format,Qt=Kt.type;if(!xe.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,fe),H.bufferData(H.PIXEL_PACK_BUFFER,xt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(q,at,st,j,Pt.convert(ne),Pt.convert(Qt),0);const Ue=V!==null?It.get(V).__webglFramebuffer:null;Zt.bindFramebuffer(H.FRAMEBUFFER,Ue);const Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await vy(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,fe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xt),H.deleteBuffer(fe),H.deleteSync(Ve),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const st=Math.pow(2,-at),j=Math.floor(A.image.width*st),xt=Math.floor(A.image.height*st),Lt=q!==null?q.x:0,Vt=q!==null?q.y:0;se.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,Lt,Vt,j,xt),Zt.unbindTexture()};const ko=H.createFramebuffer(),Wa=H.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,st=null,j=0,xt=null){xt===null&&(j!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=j,j=0):xt=0);let Lt,Vt,Ot,Kt,ne,Qt,fe,Ue,Ve;const Le=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(at!==null)Lt=at.max.x-at.min.x,Vt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Kt=at.min.x,ne=at.min.y,Qt=at.isBox3?at.min.z:0;else{const Ln=Math.pow(2,-j);Lt=Math.floor(Le.width*Ln),Vt=Math.floor(Le.height*Ln),A.isDataArrayTexture?Ot=Le.depth:A.isData3DTexture?Ot=Math.floor(Le.depth*Ln):Ot=1,Kt=0,ne=0,Qt=0}st!==null?(fe=st.x,Ue=st.y,Ve=st.z):(fe=0,Ue=0,Ve=0);const de=Pt.convert(q.format),kt=Pt.convert(q.type);let We;q.isData3DTexture?(se.setTexture3D(q,0),We=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(se.setTexture2DArray(q,0),We=H.TEXTURE_2D_ARRAY):(se.setTexture2D(q,0),We=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oi=H.getParameter(H.UNPACK_SKIP_PIXELS),mn=H.getParameter(H.UNPACK_SKIP_ROWS),qa=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qt);const ge=A.isDataArrayTexture||A.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Ln=It.get(A),un=It.get(q),tn=It.get(Ln.__renderTarget),As=It.get(un.__renderTarget);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Ei=0;Ei<Ot;Ei++)ge&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(A).__webglTexture,j,Qt+Ei),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(q).__webglTexture,xt,Ve+Ei)),H.blitFramebuffer(Kt,ne,Lt,Vt,fe,Ue,Lt,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||It.has(A)){const Ln=It.get(A),un=It.get(q);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,ko),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wa);for(let tn=0;tn<Ot;tn++)ge?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ln.__webglTexture,j,Qt+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ln.__webglTexture,j),Rn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,xt,Ve+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,xt),j!==0?H.blitFramebuffer(Kt,ne,Lt,Vt,fe,Ue,Lt,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):Rn?H.copyTexSubImage3D(We,xt,fe,Ue,Ve+tn,Kt,ne,Lt,Vt):H.copyTexSubImage2D(We,xt,fe,Ue,Kt,ne,Lt,Vt);Zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(We,xt,fe,Ue,Ve,Lt,Vt,Ot,de,kt,Le.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(We,xt,fe,Ue,Ve,Lt,Vt,Ot,de,Le.data):H.texSubImage3D(We,xt,fe,Ue,Ve,Lt,Vt,Ot,de,kt,Le):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xt,fe,Ue,Lt,Vt,de,kt,Le.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xt,fe,Ue,Le.width,Le.height,de,Le.data):H.texSubImage2D(H.TEXTURE_2D,xt,fe,Ue,Lt,Vt,de,kt,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oi),H.pixelStorei(H.UNPACK_SKIP_ROWS,mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qa),xt===0&&q.generateMipmaps&&H.generateMipmap(We),Zt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,at=null,st=null,j=0){return yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,at,st,j)},this.initRenderTarget=function(A){It.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),Zt.unbindTexture()},this.resetState=function(){G=0,U=0,V=null,Zt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Fb=[{id:1,name:"Aero Flux 01",category:"Running",price:149,old:179,tag:"New",color:"#e8e5df",accent:"#111",sizes:[7,8,9,10,11],rating:4.9},{id:2,name:"Shadow Core",category:"Street",price:169,old:199,tag:"Best Seller",color:"#151517",accent:"#d9d9d9",sizes:[7,8,9,10,11,12],rating:4.8},{id:3,name:"Volt Runner X",category:"Running",price:139,old:159,tag:"Hot",color:"#c8ff43",accent:"#101010",sizes:[8,9,10,11],rating:4.7},{id:4,name:"Mono Court",category:"Lifestyle",price:129,old:149,tag:"Classic",color:"#f1f1ee",accent:"#ff5538",sizes:[7,8,9,10,11],rating:4.8},{id:5,name:"Obsidian 90",category:"Street",price:189,old:219,tag:"Limited",color:"#232326",accent:"#9f7aea",sizes:[8,9,10,11,12],rating:5},{id:6,name:"Cloud Step",category:"Lifestyle",price:119,old:139,tag:"New",color:"#dfe9f7",accent:"#4d7cff",sizes:[7,8,9,10],rating:4.6}];function g0({progress:o=0,compact:e=!1}){const i=vn.useRef(null);return vn.useEffect(()=>{if(!i.current)return;const s=new Xy,l=new ei(35,1,.1,100);l.position.set(.15,.45,5.7);const u=new Ib({antialias:!0,alpha:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(i.current.clientWidth||500,i.current.clientHeight||500),u.outputColorSpace=ti,i.current.appendChild(u.domElement);const h=new Uo,d=new Co({color:15328991,roughness:.48,metalness:.04}),m=new Co({color:1118484,roughness:.3}),p=new Co({color:13172547,roughness:.34,metalness:.05}),x=new Co({color:1776415,roughness:.5}),v=new Co({color:2236966,roughness:.7}),S=new bn(new No(1,48,24),d);S.scale.set(1.72,.52,.72),S.position.set(.15,.22,0),h.add(S);const M=new bn(new No(1,48,24),d);M.scale.set(1.15,.46,.7),M.position.set(1.18,.18,0),h.add(M);const b=new bn(new No(1,40,20),x);b.scale.set(.48,.58,.7),b.position.set(-1.25,.24,0),h.add(b);const R=new bn(new ra(3.55,.27,1.34),m);R.position.set(.05,-.28,0),R.rotation.z=-.025,h.add(R);const y=new bn(new ra(2.65,.16,1.18),p);y.position.set(.35,-.12,0),h.add(y);for(let V=0;V<5;V++){const C=new bn(new ra(.62,.035,.06),v);C.position.set(.05+V*.28,.66,.62),C.rotation.z=-.1,h.add(C)}const g=new bn(new ra(1.15,.08,.11),p);g.position.set(-.38,.58,.69),g.rotation.z=-.34,h.add(g);const F=new bn(new Md(.74,.035,10,64,Math.PI*1.25),p);F.rotation.y=Math.PI/2,F.rotation.z=.25,F.position.set(-.72,.34,.57),h.add(F),h.rotation.x=-.18,h.rotation.y=-.28,h.rotation.z=.08,s.add(h),s.add(new Ky(16777215,2368548,2.2));const O=new tM(16777215,3.2);O.position.set(3,5,5),s.add(O);const D=new Jy(13172547,7,10);D.position.set(-3,1,3),s.add(D);let X;const G=()=>{const V=i.current.clientWidth||500,C=i.current.clientHeight||500;l.aspect=V/C,l.updateProjectionMatrix(),u.setSize(V,C)};window.addEventListener("resize",G);const U=()=>{X=requestAnimationFrame(U),h.rotation.y+=.0045,u.render(s,l)};return U(),()=>{cancelAnimationFrame(X),window.removeEventListener("resize",G),u.dispose(),i.current?.removeChild(u.domElement)}},[]),I.jsx("div",{ref:i,className:"shoe3d "+(e?"compact":""),"aria-label":"Interactive 3D sneaker"})}function Hb({p:o,onAdd:e,onWish:i,wished:s}){return I.jsxs("article",{className:"product-card",children:[I.jsxs("div",{className:"product-art",style:{"--shoe":o.color,"--accent":o.accent},children:[I.jsx("span",{className:"tag",children:o.tag}),I.jsx("button",{className:"wish-btn "+(s?"active":""),onClick:()=>i(o.id),"aria-label":"Wishlist",children:I.jsx(mS,{size:18,fill:s?"currentColor":"none"})}),I.jsxs("div",{className:"fake-shoe",children:[I.jsx("div",{className:"fake-upper"}),I.jsx("div",{className:"fake-sole"}),I.jsx("div",{className:"fake-stripe"})]})]}),I.jsxs("div",{className:"product-info",children:[I.jsxs("div",{children:[I.jsx("span",{className:"muted",children:o.category}),I.jsx("h3",{children:o.name})]}),I.jsxs("div",{className:"price",children:[I.jsxs("b",{children:["$",o.price]}),I.jsxs("del",{children:["$",o.old]})]})]}),I.jsxs("div",{className:"rating",children:[I.jsx(bS,{size:14,fill:"currentColor"})," ",o.rating," ",I.jsx("span",{children:"·"})," Free shipping"]}),I.jsxs("button",{className:"add-btn",onClick:()=>e(o),children:["Add to bag ",I.jsx(Do,{size:17})]})]})}function Gb(){const[o,e]=vn.useState([]),[i,s]=vn.useState([]),[l,u]=vn.useState(""),[h,d]=vn.useState("All"),[m,p]=vn.useState("featured"),[x,v]=vn.useState(!1),[S,M]=vn.useState(!1),[b,R]=vn.useState(!1),[y,g]=vn.useState(0);vn.useEffect(()=>{const U=()=>g(window.scrollY);return window.addEventListener("scroll",U,{passive:!0}),()=>window.removeEventListener("scroll",U)},[]);const F=vn.useMemo(()=>{let U=Fb.filter(V=>(h==="All"||V.category===h)&&V.name.toLowerCase().includes(l.toLowerCase()));return m==="price-low"&&U.sort((V,C)=>V.price-C.price),m==="price-high"&&U.sort((V,C)=>C.price-V.price),m==="rating"&&U.sort((V,C)=>C.rating-V.rating),U},[h,l,m]),O=U=>e(V=>V.find(w=>w.id===U.id)?V.map(w=>w.id===U.id?{...w,qty:w.qty+1}:w):[...V,{...U,qty:1}]),D=(U,V)=>e(C=>C.map(w=>w.id===U?{...w,qty:w.qty+V}:w).filter(w=>w.qty>0)),X=o.reduce((U,V)=>U+V.price*V.qty,0),G=o.reduce((U,V)=>U+V.qty,0);return I.jsxs("div",{className:"app",children:[I.jsxs("div",{className:"announcement",children:["FREE EXPRESS SHIPPING ON ORDERS OVER $100 ",I.jsx("span",{children:"·"})," EASY 30-DAY RETURNS"]}),I.jsxs("header",{className:"nav",children:[I.jsx("button",{className:"mobile-menu",onClick:()=>v(!x),children:x?I.jsx(g_,{}):I.jsx(_S,{})}),I.jsxs("a",{className:"logo",href:"#home",children:["SOLEVA",I.jsx("span",{children:"®"})]}),I.jsxs("nav",{className:x?"nav-links open":"nav-links",children:[I.jsx("a",{href:"#home",onClick:()=>v(!1),children:"Home"}),I.jsx("a",{href:"#shop",onClick:()=>v(!1),children:"Shop"}),I.jsx("a",{href:"#story",onClick:()=>v(!1),children:"Our story"}),I.jsx("a",{href:"#journal",onClick:()=>v(!1),children:"Journal"})]}),I.jsxs("div",{className:"nav-actions",children:[I.jsxs("label",{className:"search-box",children:[I.jsx(yS,{size:18}),I.jsx("input",{value:l,onChange:U=>u(U.target.value),placeholder:"Search sneakers"})]}),I.jsxs("button",{onClick:()=>M(!0),className:"icon-btn bag","aria-label":"Open cart",children:[I.jsx(m_,{}),I.jsx("b",{children:G})]})]})]}),I.jsxs("main",{children:[I.jsxs("section",{id:"home",className:"hero",children:[I.jsxs("div",{className:"hero-copy",children:[I.jsxs("div",{className:"eyebrow",children:[I.jsx(TS,{size:15})," SPRING / SUMMER 2026"]}),I.jsxs("h1",{children:["MOVE",I.jsx("br",{}),I.jsx("em",{children:"DIFFERENT."})]}),I.jsx("p",{children:"Engineered sneakers for people who don't stand still. Precision comfort, sculptural design and everyday energy."}),I.jsxs("div",{className:"hero-buttons",children:[I.jsxs("a",{href:"#shop",className:"primary",children:["Explore collection ",I.jsx(Do,{})]}),I.jsxs("a",{href:"#story",className:"text-link",children:["Why Soleva ",I.jsx(Do,{})]})]}),I.jsxs("div",{className:"hero-stats",children:[I.jsxs("div",{children:[I.jsx("strong",{children:"01"}),I.jsxs("span",{children:["Signature",I.jsx("br",{}),"silhouette"]})]}),I.jsxs("div",{children:[I.jsx("strong",{children:"3D"}),I.jsxs("span",{children:["Adaptive",I.jsx("br",{}),"cushioning"]})]}),I.jsxs("div",{children:[I.jsx("strong",{children:"30"}),I.jsxs("span",{children:["Day free",I.jsx("br",{}),"returns"]})]})]})]}),I.jsxs("div",{className:"hero-visual",children:[I.jsx("div",{className:"orbit orbit1"}),I.jsx("div",{className:"orbit orbit2"}),I.jsx("div",{className:"scroll-sneaker",style:{transform:`translate3d(${Math.min(y*.08,70)}px,${Math.min(y*.11,95)}px,0) rotate(${Math.min(y*.07,30)}deg)`},children:I.jsx(g0,{progress:y})}),I.jsxs("div",{className:"floating-label label-a",children:[I.jsx(SS,{size:17}),I.jsxs("span",{children:["360°",I.jsx("small",{children:"VIEW"})]})]}),I.jsxs("div",{className:"floating-label label-b",children:[I.jsx(__,{size:17}),I.jsxs("span",{children:["ENERGY",I.jsx("small",{children:"RETURN"})]})]})]})]}),I.jsx("section",{className:"marquee",children:I.jsx("div",{children:"ENGINEERED FOR MOTION · DESIGNED FOR NOW · ENGINEERED FOR MOTION · DESIGNED FOR NOW · "})}),I.jsxs("section",{id:"shop",className:"shop-section",children:[I.jsxs("div",{className:"section-head",children:[I.jsxs("div",{children:[I.jsx("span",{className:"eyebrow",children:"THE COLLECTION"}),I.jsxs("h2",{children:["Find your ",I.jsx("em",{children:"pair."})]})]}),I.jsxs("button",{className:"filter-toggle",onClick:()=>R(!b),children:[I.jsx(ES,{size:18})," Filters"]})]}),I.jsxs("div",{className:"shop-controls "+(b?"show":""),children:[I.jsx("div",{className:"chips",children:["All","Running","Street","Lifestyle"].map(U=>I.jsx("button",{className:h===U?"selected":"",onClick:()=>d(U),children:U},U))}),I.jsxs("select",{value:m,onChange:U=>p(U.target.value),children:[I.jsx("option",{value:"featured",children:"Sort: Featured"}),I.jsx("option",{value:"price-low",children:"Price: Low to high"}),I.jsx("option",{value:"price-high",children:"Price: High to low"}),I.jsx("option",{value:"rating",children:"Top rated"})]})]}),I.jsx("div",{className:"product-grid",children:F.map(U=>I.jsx(Hb,{p:U,onAdd:O,onWish:V=>s(C=>C.includes(V)?C.filter(w=>w!==V):[...C,V]),wished:i.includes(U.id)},U.id))})]}),I.jsxs("section",{id:"story",className:"feature",children:[I.jsxs("div",{className:"feature-copy",children:[I.jsx("span",{className:"eyebrow",children:"THE SOLEVA SYSTEM"}),I.jsxs("h2",{children:["Comfort that ",I.jsx("em",{children:"keeps up."})]}),I.jsx("p",{children:"Every Soleva is built around a responsive three-layer platform: soft landing, stable stride, energetic lift. The result is a sneaker that feels ready before you are."}),I.jsxs("div",{className:"feature-points",children:[I.jsxs("div",{children:[I.jsx(MS,{}),I.jsxs("span",{children:[I.jsx("b",{children:"All-day support"}),"Contoured heel + locked-in fit"]})]}),I.jsxs("div",{children:[I.jsx(__,{}),I.jsxs("span",{children:[I.jsx("b",{children:"Energy return"}),"Spring foam under every step"]})]}),I.jsxs("div",{children:[I.jsx(RS,{}),I.jsxs("span",{children:[I.jsx("b",{children:"Fast, free shipping"}),"Dispatch in 24 hours"]})]})]})]}),I.jsxs("div",{className:"feature-visual",children:[I.jsxs("div",{className:"spec-ring",children:["S",I.jsx("span",{children:"3"})]}),I.jsx("div",{className:"feature-shoe",children:I.jsx(g0,{compact:!0})}),I.jsxs("div",{className:"spec-label top",children:["RESPONSIVE",I.jsx("br",{}),"FOAM"]}),I.jsxs("div",{className:"spec-label bottom",children:["LIGHTWEIGHT",I.jsx("br",{}),"MESH"]})]})]}),I.jsxs("section",{id:"journal",className:"journal",children:[I.jsxs("div",{className:"section-head",children:[I.jsxs("div",{children:[I.jsx("span",{className:"eyebrow",children:"FROM THE JOURNAL"}),I.jsxs("h2",{children:["More than ",I.jsx("em",{children:"shoes."})]})]}),I.jsxs("a",{className:"text-link",href:"#journal",children:["Read all ",I.jsx(Do,{})]})]}),I.jsxs("div",{className:"journal-grid",children:[I.jsxs("article",{children:[I.jsx("div",{className:"journal-img j1",children:"01"}),I.jsx("span",{children:"DESIGN"}),I.jsx("h3",{children:"Why the future of sneakers is sculptural."})]}),I.jsxs("article",{children:[I.jsx("div",{className:"journal-img j2",children:"02"}),I.jsx("span",{children:"MOVE"}),I.jsx("h3",{children:"The 5-minute reset for your everyday stride."})]}),I.jsxs("article",{children:[I.jsx("div",{className:"journal-img j3",children:"03"}),I.jsx("span",{children:"MATERIALS"}),I.jsx("h3",{children:"Inside our recycled performance mesh."})]})]})]})]}),I.jsxs("footer",{children:[I.jsxs("div",{className:"footer-top",children:[I.jsxs("div",{children:[I.jsxs("a",{className:"logo",href:"#home",children:["SOLEVA",I.jsx("span",{children:"®"})]}),I.jsx("p",{children:"Premium sneakers for people in motion."}),I.jsxs("div",{className:"socials",children:[I.jsx(gS,{}),I.jsx(pS,{}),I.jsx(CS,{})]})]}),I.jsxs("div",{children:[I.jsx("b",{children:"SHOP"}),I.jsx("a",{href:"#shop",children:"All sneakers"}),I.jsx("a",{href:"#shop",children:"Running"}),I.jsx("a",{href:"#shop",children:"Street"})]}),I.jsxs("div",{children:[I.jsx("b",{children:"HELP"}),I.jsx("a",{href:"#story",children:"Shipping"}),I.jsx("a",{href:"#story",children:"Returns"}),I.jsx("a",{href:"#story",children:"Contact"})]}),I.jsxs("div",{children:[I.jsx("b",{children:"STAY IN THE LOOP"}),I.jsx("p",{children:"New drops, early access and stories."}),I.jsxs("div",{className:"subscribe",children:[I.jsx("input",{placeholder:"Your email"}),I.jsx("button",{children:"→"})]})]})]}),I.jsxs("div",{className:"footer-bottom",children:["© 2026 SOLEVA. Built for motion. ",I.jsx("span",{children:"Privacy · Terms · Accessibility"})]})]}),S&&I.jsx("div",{className:"drawer-backdrop",onClick:()=>M(!1),children:I.jsxs("aside",{className:"cart-drawer",onClick:U=>U.stopPropagation(),children:[I.jsxs("div",{className:"drawer-head",children:[I.jsxs("h2",{children:["Your bag ",I.jsx("span",{children:G})]}),I.jsx("button",{onClick:()=>M(!1),children:I.jsx(g_,{})})]}),o.length===0?I.jsxs("div",{className:"empty",children:[I.jsx(m_,{size:42}),I.jsx("h3",{children:"Your bag is empty."}),I.jsx("p",{children:"Add a pair and start moving."}),I.jsx("button",{className:"primary",onClick:()=>{M(!1),document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})},children:"Shop sneakers"})]}):I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"cart-items",children:o.map(U=>I.jsxs("div",{className:"cart-item",children:[I.jsx("div",{className:"mini-shoe",style:{"--shoe":U.color,"--accent":U.accent},children:I.jsx("div",{})}),I.jsxs("div",{className:"cart-meta",children:[I.jsx("b",{children:U.name}),I.jsxs("span",{children:["$",U.price]}),I.jsxs("div",{className:"qty",children:[I.jsx("button",{onClick:()=>D(U.id,-1),children:I.jsx(vS,{size:14})}),I.jsx("span",{children:U.qty}),I.jsx("button",{onClick:()=>D(U.id,1),children:I.jsx(xS,{size:14})})]})]}),I.jsx("button",{className:"trash",onClick:()=>e(V=>V.filter(C=>C.id!==U.id)),children:I.jsx(AS,{size:16})})]},U.id))}),I.jsxs("div",{className:"checkout",children:[I.jsxs("div",{children:[I.jsx("span",{children:"Subtotal"}),I.jsxs("b",{children:["$",X.toFixed(2)]})]}),I.jsx("small",{children:"Taxes and shipping calculated at checkout."}),I.jsxs("button",{className:"primary",children:["Checkout ",I.jsx(Do,{})]})]})]})]})})]})}uS.createRoot(document.getElementById("root")).render(I.jsx(Gb,{}));
