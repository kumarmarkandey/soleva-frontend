(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ff={exports:{}},Eo={};var c_;function aS(){if(c_)return Eo;c_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var u_;function sS(){return u_||(u_=1,Ff.exports=aS()),Ff.exports}var N=sS(),Hf={exports:{}},ae={};var f_;function rS(){if(f_)return ae;f_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function v(O,at,Et){this.props=O,this.context=at,this.refs=y,this.updater=Et||A}v.prototype.isReactComponent={},v.prototype.setState=function(O,at){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,at,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function G(){}G.prototype=v.prototype;function P(O,at,Et){this.props=O,this.context=at,this.refs=y,this.updater=Et||A}var U=P.prototype=new G;U.constructor=P,R(U,v.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function V(){}var B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(O,at,Et){var Rt=Et.ref;return{$$typeof:o,type:O,key:at,ref:Rt!==void 0?Rt:null,props:Et}}function C(O,at){return w(O.type,at,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function J(O){var at={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Et){return at[Et]})}var nt=/\/+/g;function ct(O,at){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):at.toString(36)}function ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(V,V):(O.status="pending",O.then(function(at){O.status==="pending"&&(O.status="fulfilled",O.value=at)},function(at){O.status==="pending"&&(O.status="rejected",O.reason=at)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,at,Et,Rt,Q){var vt=typeof O;(vt==="undefined"||vt==="boolean")&&(O=null);var _t=!1;if(O===null)_t=!0;else switch(vt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(O.$$typeof){case o:case e:_t=!0;break;case x:return _t=O._init,z(_t(O._payload),at,Et,Rt,Q)}}if(_t)return Q=Q(O),_t=Rt===""?"."+ct(O,0):Rt,H(Q)?(Et="",_t!=null&&(Et=_t.replace(nt,"$&/")+"/"),z(Q,at,Et,"",function(ee){return ee})):Q!=null&&(D(Q)&&(Q=C(Q,Et+(Q.key==null||O&&O.key===Q.key?"":(""+Q.key).replace(nt,"$&/")+"/")+_t)),at.push(Q)),1;_t=0;var Ht=Rt===""?".":Rt+":";if(H(O))for(var zt=0;zt<O.length;zt++)Rt=O[zt],vt=Ht+ct(Rt,zt),_t+=z(Rt,at,Et,vt,Q);else if(zt=M(O),typeof zt=="function")for(O=zt.call(O),zt=0;!(Rt=O.next()).done;)Rt=Rt.value,vt=Ht+ct(Rt,zt++),_t+=z(Rt,at,Et,vt,Q);else if(vt==="object"){if(typeof O.then=="function")return z(ft(O),at,Et,Rt,Q);throw at=String(O),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return _t}function K(O,at,Et){if(O==null)return O;var Rt=[],Q=0;return z(O,Rt,"","",function(vt){return at.call(Et,vt,Q++)}),Rt}function q(O){if(O._status===-1){var at=O._result;at=at(),at.then(function(Et){(O._status===0||O._status===-1)&&(O._status=1,O._result=Et)},function(Et){(O._status===0||O._status===-1)&&(O._status=2,O._result=Et)}),O._status===-1&&(O._status=0,O._result=at)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:K,forEach:function(O,at,Et){K(O,function(){at.apply(this,arguments)},Et)},count:function(O){var at=0;return K(O,function(){at++}),at},toArray:function(O){return K(O,function(at){return at})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ae.Activity=g,ae.Children=Tt,ae.Component=v,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=P,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ae.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},ae.cache=function(O){return function(){return O.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(O,at,Et){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=R({},O.props),Q=O.key;if(at!=null)for(vt in at.key!==void 0&&(Q=""+at.key),at)!W.call(at,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&at.ref===void 0||(Rt[vt]=at[vt]);var vt=arguments.length-2;if(vt===1)Rt.children=Et;else if(1<vt){for(var _t=Array(vt),Ht=0;Ht<vt;Ht++)_t[Ht]=arguments[Ht+2];Rt.children=_t}return w(O.type,Q,Rt)},ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ae.createElement=function(O,at,Et){var Rt,Q={},vt=null;if(at!=null)for(Rt in at.key!==void 0&&(vt=""+at.key),at)W.call(at,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Q[Rt]=at[Rt]);var _t=arguments.length-2;if(_t===1)Q.children=Et;else if(1<_t){for(var Ht=Array(_t),zt=0;zt<_t;zt++)Ht[zt]=arguments[zt+2];Q.children=Ht}if(O&&O.defaultProps)for(Rt in _t=O.defaultProps,_t)Q[Rt]===void 0&&(Q[Rt]=_t[Rt]);return w(O,vt,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(O){return{$$typeof:d,render:O}},ae.isValidElement=D,ae.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:q}},ae.memo=function(O,at){return{$$typeof:p,type:O,compare:at===void 0?null:at}},ae.startTransition=function(O){var at=B.T,Et={};B.T=Et;try{var Rt=O(),Q=B.S;Q!==null&&Q(Et,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(V,St)}catch(vt){St(vt)}finally{at!==null&&Et.types!==null&&(at.types=Et.types),B.T=at}},ae.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ae.use=function(O){return B.H.use(O)},ae.useActionState=function(O,at,Et){return B.H.useActionState(O,at,Et)},ae.useCallback=function(O,at){return B.H.useCallback(O,at)},ae.useContext=function(O){return B.H.useContext(O)},ae.useDebugValue=function(){},ae.useDeferredValue=function(O,at){return B.H.useDeferredValue(O,at)},ae.useEffect=function(O,at){return B.H.useEffect(O,at)},ae.useEffectEvent=function(O){return B.H.useEffectEvent(O)},ae.useId=function(){return B.H.useId()},ae.useImperativeHandle=function(O,at,Et){return B.H.useImperativeHandle(O,at,Et)},ae.useInsertionEffect=function(O,at){return B.H.useInsertionEffect(O,at)},ae.useLayoutEffect=function(O,at){return B.H.useLayoutEffect(O,at)},ae.useMemo=function(O,at){return B.H.useMemo(O,at)},ae.useOptimistic=function(O,at){return B.H.useOptimistic(O,at)},ae.useReducer=function(O,at,Et){return B.H.useReducer(O,at,Et)},ae.useRef=function(O){return B.H.useRef(O)},ae.useState=function(O){return B.H.useState(O)},ae.useSyncExternalStore=function(O,at,Et){return B.H.useSyncExternalStore(O,at,Et)},ae.useTransition=function(){return B.H.useTransition()},ae.version="19.2.8",ae}var h_;function pd(){return h_||(h_=1,Hf.exports=rS()),Hf.exports}var dn=pd(),Gf={exports:{}},To={},Vf={exports:{}},kf={};var d_;function oS(){return d_||(d_=1,(function(o){function e(z,K){var q=z.length;z.push(K);t:for(;0<q;){var St=q-1>>>1,Tt=z[St];if(0<l(Tt,K))z[St]=K,z[q]=Tt,q=St;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],q=z.pop();if(q!==K){z[0]=q;t:for(var St=0,Tt=z.length,O=Tt>>>1;St<O;){var at=2*(St+1)-1,Et=z[at],Rt=at+1,Q=z[Rt];if(0>l(Et,q))Rt<Tt&&0>l(Q,Et)?(z[St]=Q,z[Rt]=q,St=Rt):(z[St]=Et,z[at]=q,St=at);else if(Rt<Tt&&0>l(Q,q))z[St]=Q,z[Rt]=q,St=Rt;else break t}}return K}function l(z,K){var q=z.sortIndex-K.sortIndex;return q!==0?q:z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,S=3,M=!1,A=!1,R=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function H(z){if(R=!1,U(z),!A)if(i(m)!==null)A=!0,V||(V=!0,J());else{var K=i(p);K!==null&&ft(H,K.startTime-z)}}var V=!1,B=-1,W=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<W)}function D(){if(y=!1,V){var z=o.unstable_now();w=z;var K=!0;try{t:{A=!1,R&&(R=!1,G(B),B=-1),M=!0;var q=S;try{e:{for(U(z),g=i(m);g!==null&&!(g.expirationTime>z&&C());){var St=g.callback;if(typeof St=="function"){g.callback=null,S=g.priorityLevel;var Tt=St(g.expirationTime<=z);if(z=o.unstable_now(),typeof Tt=="function"){g.callback=Tt,U(z),K=!0;break e}g===i(m)&&s(m),U(z)}else s(m);g=i(m)}if(g!==null)K=!0;else{var O=i(p);O!==null&&ft(H,O.startTime-z),K=!1}}break t}finally{g=null,S=q,M=!1}K=void 0}}finally{K?J():V=!1}}}var J;if(typeof P=="function")J=function(){P(D)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ct=nt.port2;nt.port1.onmessage=D,J=function(){ct.postMessage(null)}}else J=function(){v(D,0)};function ft(z,K){B=v(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var q=S;S=K;try{return z()}finally{S=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=S;S=z;try{return K()}finally{S=q}},o.unstable_scheduleCallback=function(z,K,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,z){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=q+Tt,z={id:x++,callback:K,priorityLevel:z,startTime:q,expirationTime:Tt,sortIndex:-1},q>St?(z.sortIndex=q,e(p,z),i(m)===null&&z===i(p)&&(R?(G(B),B=-1):R=!0,ft(H,q-St))):(z.sortIndex=Tt,e(m,z),A||M||(A=!0,V||(V=!0,J()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var K=S;return function(){var q=S;S=K;try{return z.apply(this,arguments)}finally{S=q}}}})(kf)),kf}var p_;function lS(){return p_||(p_=1,Vf.exports=oS()),Vf.exports}var Xf={exports:{}},Rn={};var m_;function cS(){if(m_)return Rn;m_=1;var o=pd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},Rn.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var g_;function uS(){if(g_)return Xf.exports;g_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=cS(),Xf.exports}var __;function fS(){if(__)return To;__=1;var o=lS(),e=pd(),i=uS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,r=f;break}if(T===r){_=!0,r=c,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,r=c;break}if(T===r){_=!0,r=f,a=c;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case P:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var ft=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function O(t){return{current:t}}function at(t){0>Tt||(t.current=St[Tt],St[Tt]=null,Tt--)}function Et(t,n){Tt++,St[Tt]=t.current,t.current=n}var Rt=O(null),Q=O(null),vt=O(null),_t=O(null);function Ht(t,n){switch(Et(vt,n),Et(Q,t),Et(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Lg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Lg(n),t=Ng(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(Rt),Et(Rt,t)}function zt(){at(Rt),at(Q),at(vt)}function ee(t){t.memoizedState!==null&&Et(_t,t);var n=Rt.current,a=Ng(n,t.type);n!==a&&(Et(Q,t),Et(Rt,a))}function Xe(t){Q.current===t&&(at(Rt),at(Q)),_t.current===t&&(at(_t),xo._currentValue=q)}var he,F;function Me(t){if(he===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+t+F}var Jt=!1;function xe(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(lt){var st=lt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(lt){st=lt}t.call(mt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var I=_.split(`
`),tt=T.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===tt.length)for(r=I.length-1,c=tt.length-1;1<=r&&0<=c&&I[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==tt[c]){var ht=`
`+I[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Me(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return xe(t.type,!1);case 11:return xe(t.type.render,!1);case 1:return xe(t.type,!0);case 31:return Me("Activity");default:return""}}function Ge(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var It=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,et=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,jt=o.log,qt=o.unstable_setDisableYieldValue,bt=null,wt=null;function Yt(t){if(typeof jt=="function"&&qt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,t)}catch{}}var Pt=Math.clz32?Math.clz32:X,Ut=Math.log,re=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ut(t)/re|0)|0}var At=256,Dt=262144,Bt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Mt(r):(_&=T,_!==0?c=Mt(_):a||(a=T&~t,a!==0&&(c=Mt(a))))):(T=r&~f,T!==0?c=Mt(T):_!==0?c=Mt(_):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ei(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,tt=t.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-Pt(a),mt=1<<ht;T[ht]=0,I[ht]=-1;var st=tt[ht];if(st!==null)for(tt[ht]=null,ht=0;ht<st.length;ht++){var lt=st[ht];lt!==null&&(lt.lane&=-536870913)}a&=~mt}r!==0&&Lr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Lr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ms(t,n){var a=n&-n;return a=(a&42)!==0?1:Es(a),(a&(t.suspendedLanes|n))!==0?0:a}function Es(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ts(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ga(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:n_(t.type))}function Nr(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,xn="__reactProps$"+Xn,ra="__reactContainer$"+Xn,Or="__reactEvents$"+Xn,Lc="__reactListeners$"+Xn,Nc="__reactHandles$"+Xn,Xo="__reactResources$"+Xn,Va="__reactMarker$"+Xn;function b(t){delete t[sn],delete t[xn],delete t[Or],delete t[Lc],delete t[Nc]}function j(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Hg(t);t!==null;){if(a=t[sn])return a;t=Hg(t)}return n}t=a,a=t.parentNode}return null}function rt(t){if(t=t[sn]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Y(t){var n=t[Xo];return n||(n=t[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xt(t){t[Va]=!0}var Lt=new Set,Vt={};function Ot(t,n){Kt(t,n),Kt(t+"Capture",n)}function Kt(t,n){for(Vt[t]=n,t=0;t<n.length;t++)Lt.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},fe={};function Ue(t){return It.call(fe,t)?!0:It.call(Qt,t)?!1:ne.test(t)?fe[t]=!0:(Qt[t]=!0,!1)}function Ve(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Le(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function de(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=je(t)?"checked":"value";t._valueTracker=Te(t,n,""+t[n])}}function Oi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=je(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ka=/[\n"\\]/g;function ge(t){return t.replace(ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,r,c,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?fn(t,_,kt(n)):a!=null?fn(t,_,kt(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+kt(T):t.removeAttribute("name")}function Un(t,n,a,r,c,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Sn(t)}function fn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function tn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function bs(t,n,a){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+kt(a):""}function Ei(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=kt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Sn(t)}function As(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var $0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||$0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Dd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&wd(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&wd(t,f,n[f])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ev=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(t){return ev.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var zc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rs=null,Cs=null;function Ud(t){var n=rt(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[xn]||null;if(!c)throw Error(s(90));An(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Oi(r)}break t;case"textarea":bs(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(t,!!a.multiple,n,!1)}}}var Bc=!1;function Ld(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var r=t(n);return r}finally{if(Bc=!1,(Rs!==null||Cs!==null)&&(Ll(),Rs&&(n=Rs,t=Cs,Cs=Rs=null,Ud(n),t)))for(n=0;n<t.length;n++)Ud(t[n])}}function zr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Pi)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Ic=!1}var oa=null,Fc=null,qo=null;function Nd(){if(qo)return qo;var t,n=Fc,a=n.length,r,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return qo=c.slice(t,1<r?1-r:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Od(){return!1}function zn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Od,this.isPropagationStopped=Od,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=zn(Xa),Br=g({},Xa,{view:0,detail:0}),nv=zn(Br),Hc,Gc,Ir,Ko=g({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ir&&(Ir&&t.type==="mousemove"?(Hc=t.screenX-Ir.screenX,Gc=t.screenY-Ir.screenY):Gc=Hc=0,Ir=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),zd=zn(Ko),iv=g({},Ko,{dataTransfer:0}),av=zn(iv),sv=g({},Br,{relatedTarget:0}),Vc=zn(sv),rv=g({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=zn(rv),lv=g({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=zn(lv),uv=g({},Xa,{data:0}),Pd=zn(uv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=dv[t])?!!n[t]:!1}function kc(){return pv}var mv=g({},Br,{key:function(t){if(t.key){var n=fv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=zn(mv),_v=g({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=zn(_v),vv=g({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),xv=zn(vv),Sv=g({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=zn(Sv),Mv=g({},Ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=zn(Mv),Tv=g({},Xa,{newState:0,oldState:0}),bv=zn(Tv),Av=[9,13,27,32],Xc=Pi&&"CompositionEvent"in window,Fr=null;Pi&&"documentMode"in document&&(Fr=document.documentMode);var Rv=Pi&&"TextEvent"in window&&!Fr,Id=Pi&&(!Xc||Fr&&8<Fr&&11>=Fr),Fd=" ",Hd=!1;function Gd(t,n){switch(t){case"keyup":return Av.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function Cv(t,n){switch(t){case"compositionend":return Vd(n);case"keypress":return n.which!==32?null:(Hd=!0,Fd);case"textInput":return t=n.data,t===Fd&&Hd?null:t;default:return null}}function wv(t,n){if(ws)return t==="compositionend"||!Xc&&Gd(t,n)?(t=Nd(),qo=Fc=oa=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dv[t.type]:n==="textarea"}function Xd(t,n,a,r){Rs?Cs?Cs.push(r):Cs=[r]:Rs=r,n=Fl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Hr=null,Gr=null;function Uv(t){Ag(t,0)}function Qo(t){var n=ot(t);if(Oi(n))return t}function jd(t,n){if(t==="change")return n}var qd=!1;if(Pi){var jc;if(Pi){var qc="oninput"in document;if(!qc){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),qc=typeof Wd.oninput=="function"}jc=qc}else jc=!1;qd=jc&&(!document.documentMode||9<document.documentMode)}function Yd(){Hr&&(Hr.detachEvent("onpropertychange",Zd),Gr=Hr=null)}function Zd(t){if(t.propertyName==="value"&&Qo(Gr)){var n=[];Xd(n,Gr,t,Pc(t)),Ld(Uv,n)}}function Lv(t,n,a){t==="focusin"?(Yd(),Hr=n,Gr=a,Hr.attachEvent("onpropertychange",Zd)):t==="focusout"&&Yd()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(Gr)}function Ov(t,n){if(t==="click")return Qo(n)}function zv(t,n){if(t==="input"||t==="change")return Qo(n)}function Pv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Pv;function Vr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!It.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function Kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qd(t,n){var a=Kd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kd(a)}}function Jd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $d(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Bv=Pi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Yc=null,kr=null,Zc=!1;function tp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||Ds==null||Ds!==gn(r)||(r=Ds,"selectionStart"in r&&Wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Vr(kr,r)||(kr=r,r=Fl(Yc,"onSelect"),0<r.length&&(n=new Zo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ds)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Us={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Kc={},ep={};Pi&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function qa(t){if(Kc[t])return Kc[t];if(!Us[t])return t;var n=Us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ep)return Kc[t]=n[a];return t}var np=qa("animationend"),ip=qa("animationiteration"),ap=qa("animationstart"),Iv=qa("transitionrun"),Fv=qa("transitionstart"),Hv=qa("transitioncancel"),sp=qa("transitionend"),rp=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function fi(t,n){rp.set(t,n),Ot(n,[t])}var Jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Ls=0,Jc=0;function $o(){for(var t=Ls,n=Jc=Ls=0;n<t;){var a=ni[n];ni[n++]=null;var r=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&op(a,c,f)}}function tl(t,n,a,r){ni[Ls++]=t,ni[Ls++]=n,ni[Ls++]=a,ni[Ls++]=r,Jc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function $c(t,n,a,r){return tl(t,n,a,r),el(t)}function Wa(t,n){return tl(t,null,null,n),el(t)}function op(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function el(t){if(50<fo)throw fo=0,cf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function Gv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,r){return new Gv(t,n,a,r)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function nl(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")tu(t)&&(_=1);else if(typeof t=="string")_=qx(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return Ya(a.children,c,f,n);case y:_=8,c|=24;break;case v:return t=qn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case H:return t=qn(13,a,n,c),t.elementType=H,t.lanes=f,t;case V:return t=qn(19,a,n,c),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:_=10;break t;case G:_=9;break t;case U:_=11;break t;case B:_=14;break t;case W:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Ya(t,n,a,r){return t=qn(7,t,r,n),t.lanes=a,t}function eu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function cp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function nu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var up=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=up.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ge(n)},up.set(t,n),n)}return{value:t,source:n,stack:Ge(n)}}var Os=[],zs=0,il=null,Xr=0,ai=[],si=0,la=null,Ti=1,bi="";function Ii(t,n){Os[zs++]=Xr,Os[zs++]=il,il=t,Xr=n}function fp(t,n,a){ai[si++]=Ti,ai[si++]=bi,ai[si++]=la,la=t;var r=Ti;t=bi;var c=32-Pt(r)-1;r&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ti=1<<32-Pt(n)+c|a<<c|r,bi=f+t}else Ti=1<<f|a<<c|r,bi=t}function iu(t){t.return!==null&&(Ii(t,1),fp(t,1,0))}function au(t){for(;t===il;)il=Os[--zs],Os[zs]=null,Xr=Os[--zs],Os[zs]=null;for(;t===la;)la=ai[--si],ai[si]=null,bi=ai[--si],ai[si]=null,Ti=ai[--si],ai[si]=null}function hp(t,n){ai[si++]=Ti,ai[si++]=bi,ai[si++]=la,Ti=n.id,bi=n.overflow,la=t}var yn=null,qe=null,Se=!1,ca=null,ri=!1,su=Error(s(519));function ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(ii(n,t)),su}function dp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[sn]=t,n[xn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)me(po[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Ei(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Dg(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ua(t,!0)}function pp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Ps(t){if(t!==yn)return!1;if(!Se)return pp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Tf(t.type,t.memoizedProps)),a=!a),a&&qe&&ua(t),pp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=Fg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=Fg(t)}else n===27?(n=qe,Ta(t.type)?(t=wf,wf=null,qe=t):qe=n):qe=yn?li(t.stateNode.nextSibling):null;return!0}function Za(){qe=yn=null,Se=!1}function ru(){var t=ca;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),ca=null),t}function jr(t){ca===null?ca=[t]:ca.push(t)}var ou=O(null),Ka=null,Fi=null;function fa(t,n,a){Et(ou,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=ou.current,at(ou)}function lu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),lu(f.return,a,t),r||(_=null);break t}f=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),lu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Bs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=c.type;jn(c.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(c===_t.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(xo):t=[xo])}c=c.return}t!==null&&cu(n,t,a,r),n.flags|=262144}function al(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){Ka=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return mp(Ka,t)}function sl(t,n){return Ka===null&&Qa(t),mp(t,n)}function mp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var Vv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},kv=o.unstable_scheduleCallback,Xv=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new Vv,data:new Map,refCount:0}}function qr(t){t.refCount--,t.refCount===0&&kv(Xv,function(){t.controller.abort()})}var Wr=null,fu=0,Is=0,Fs=null;function jv(t,n){if(Wr===null){var a=Wr=[];fu=0,Is=mf(),Fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return fu++,n.then(gp,gp),n}function gp(){if(--fu===0&&Wr!==null){Fs!==null&&(Fs.status="fulfilled");var t=Wr;Wr=null,Is=0,Fs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var _p=z.S;z.S=function(t,n){tg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(t,n),_p!==null&&_p(t,n)};var Ja=O(null);function hu(){var t=Ja.current;return t!==null?t:ke.pooledCache}function rl(t,n){n===null?Et(Ja,Ja.current):Et(Ja,n.pool)}function vp(){var t=hu();return t===null?null:{parent:rn._currentValue,pool:t}}var Hs=Error(s(460)),du=Error(s(474)),ol=Error(s(542)),ll={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t}throw ts=n,Hs}}function $a(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ts=a,Hs):a}}var ts=null;function yp(){if(ts===null)throw Error(s(459));var t=ts;return ts=null,t}function Mp(t){if(t===Hs||t===ol)throw Error(s(483))}var Gs=null,Yr=0;function cl(t){var n=Yr;return Yr+=1,Gs===null&&(Gs=[]),Sp(Gs,t,n)}function Zr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ul(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ep(t){function n(Z,k){if(t){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=Bi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,k,$,pt){return k===null||k.tag!==6?(k=eu($,Z.mode,pt),k.return=Z,k):(k=c(k,$),k.return=Z,k)}function I(Z,k,$,pt){var $t=$.type;return $t===R?ht(Z,k,$.props.children,pt,$.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&$a($t)===k.type)?(k=c(k,$.props),Zr(k,$),k.return=Z,k):(k=nl($.type,$.key,$.props,null,Z.mode,pt),Zr(k,$),k.return=Z,k)}function tt(Z,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=nu($,Z.mode,pt),k.return=Z,k):(k=c(k,$.children||[]),k.return=Z,k)}function ht(Z,k,$,pt,$t){return k===null||k.tag!==7?(k=Ya($,Z.mode,pt,$t),k.return=Z,k):(k=c(k,$),k.return=Z,k)}function mt(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=eu(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=nl(k.type,k.key,k.props,null,Z.mode,$),Zr($,k),$.return=Z,$;case A:return k=nu(k,Z.mode,$),k.return=Z,k;case W:return k=$a(k),mt(Z,k,$)}if(ft(k)||J(k))return k=Ya(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return mt(Z,cl(k),$);if(k.$$typeof===P)return mt(Z,sl(Z,k),$);ul(Z,k)}return null}function st(Z,k,$,pt){var $t=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $t!==null?null:T(Z,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===$t?I(Z,k,$,pt):null;case A:return $.key===$t?tt(Z,k,$,pt):null;case W:return $=$a($),st(Z,k,$,pt)}if(ft($)||J($))return $t!==null?null:ht(Z,k,$,pt,null);if(typeof $.then=="function")return st(Z,k,cl($),pt);if($.$$typeof===P)return st(Z,k,sl(Z,$),pt);ul(Z,$)}return null}function lt(Z,k,$,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get($)||null,T(k,Z,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Z=Z.get(pt.key===null?$:pt.key)||null,I(k,Z,pt,$t);case A:return Z=Z.get(pt.key===null?$:pt.key)||null,tt(k,Z,pt,$t);case W:return pt=$a(pt),lt(Z,k,$,pt,$t)}if(ft(pt)||J(pt))return Z=Z.get($)||null,ht(k,Z,pt,$t,null);if(typeof pt.then=="function")return lt(Z,k,$,cl(pt),$t);if(pt.$$typeof===P)return lt(Z,k,$,sl(k,pt),$t);ul(k,pt)}return null}function Gt(Z,k,$,pt){for(var $t=null,be=null,Xt=k,le=k=0,ve=null;Xt!==null&&le<$.length;le++){Xt.index>le?(ve=Xt,Xt=null):ve=Xt.sibling;var Ae=st(Z,Xt,$[le],pt);if(Ae===null){Xt===null&&(Xt=ve);break}t&&Xt&&Ae.alternate===null&&n(Z,Xt),k=f(Ae,k,le),be===null?$t=Ae:be.sibling=Ae,be=Ae,Xt=ve}if(le===$.length)return a(Z,Xt),Se&&Ii(Z,le),$t;if(Xt===null){for(;le<$.length;le++)Xt=mt(Z,$[le],pt),Xt!==null&&(k=f(Xt,k,le),be===null?$t=Xt:be.sibling=Xt,be=Xt);return Se&&Ii(Z,le),$t}for(Xt=r(Xt);le<$.length;le++)ve=lt(Xt,Z,le,$[le],pt),ve!==null&&(t&&ve.alternate!==null&&Xt.delete(ve.key===null?le:ve.key),k=f(ve,k,le),be===null?$t=ve:be.sibling=ve,be=ve);return t&&Xt.forEach(function(wa){return n(Z,wa)}),Se&&Ii(Z,le),$t}function te(Z,k,$,pt){if($==null)throw Error(s(151));for(var $t=null,be=null,Xt=k,le=k=0,ve=null,Ae=$.next();Xt!==null&&!Ae.done;le++,Ae=$.next()){Xt.index>le?(ve=Xt,Xt=null):ve=Xt.sibling;var wa=st(Z,Xt,Ae.value,pt);if(wa===null){Xt===null&&(Xt=ve);break}t&&Xt&&wa.alternate===null&&n(Z,Xt),k=f(wa,k,le),be===null?$t=wa:be.sibling=wa,be=wa,Xt=ve}if(Ae.done)return a(Z,Xt),Se&&Ii(Z,le),$t;if(Xt===null){for(;!Ae.done;le++,Ae=$.next())Ae=mt(Z,Ae.value,pt),Ae!==null&&(k=f(Ae,k,le),be===null?$t=Ae:be.sibling=Ae,be=Ae);return Se&&Ii(Z,le),$t}for(Xt=r(Xt);!Ae.done;le++,Ae=$.next())Ae=lt(Xt,Z,le,Ae.value,pt),Ae!==null&&(t&&Ae.alternate!==null&&Xt.delete(Ae.key===null?le:Ae.key),k=f(Ae,k,le),be===null?$t=Ae:be.sibling=Ae,be=Ae);return t&&Xt.forEach(function(iS){return n(Z,iS)}),Se&&Ii(Z,le),$t}function Ie(Z,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var $t=$.key;k!==null;){if(k.key===$t){if($t=$.type,$t===R){if(k.tag===7){a(Z,k.sibling),pt=c(k,$.props.children),pt.return=Z,Z=pt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&$a($t)===k.type){a(Z,k.sibling),pt=c(k,$.props),Zr(pt,$),pt.return=Z,Z=pt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}$.type===R?(pt=Ya($.props.children,Z.mode,pt,$.key),pt.return=Z,Z=pt):(pt=nl($.type,$.key,$.props,null,Z.mode,pt),Zr(pt,$),pt.return=Z,Z=pt)}return _(Z);case A:t:{for($t=$.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Z,k.sibling),pt=c(k,$.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}pt=nu($,Z.mode,pt),pt.return=Z,Z=pt}return _(Z);case W:return $=$a($),Ie(Z,k,$,pt)}if(ft($))return Gt(Z,k,$,pt);if(J($)){if($t=J($),typeof $t!="function")throw Error(s(150));return $=$t.call($),te(Z,k,$,pt)}if(typeof $.then=="function")return Ie(Z,k,cl($),pt);if($.$$typeof===P)return Ie(Z,k,sl(Z,$),pt);ul(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Z,k.sibling),pt=c(k,$),pt.return=Z,Z=pt):(a(Z,k),pt=eu($,Z.mode,pt),pt.return=Z,Z=pt),_(Z)):a(Z,k)}return function(Z,k,$,pt){try{Yr=0;var $t=Ie(Z,k,$,pt);return Gs=null,$t}catch(Xt){if(Xt===Hs||Xt===ol)throw Xt;var be=qn(29,Xt,null,Z.mode);return be.lanes=pt,be.return=Z,be}}}var es=Ep(!0),Tp=Ep(!1),ha=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=el(t),op(t,null,a),n}return tl(t,r,n,a),el(t)}function Kr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Mi(t,a)}}function gu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var _u=!1;function Qr(){if(_u){var t=Fs;if(t!==null)throw t}}function Jr(t,n,a,r){_u=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,tt=I.next;I.next=null,_===null?f=tt:_.next=tt,_=I;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==_&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=I))}if(f!==null){var mt=c.baseState;_=0,ht=tt=I=null,T=f;do{var st=T.lane&-536870913,lt=st!==T.lane;if(lt?(_e&st)===st:(r&st)===st){st!==0&&st===Is&&(_u=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,te=T;st=n;var Ie=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){mt=Gt.call(Ie,mt,st);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,st=typeof Gt=="function"?Gt.call(Ie,mt,st):Gt,st==null)break t;mt=g({},mt,st);break t;case 2:ha=!0}}st=T.callback,st!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=lt,I=mt):ht=ht.next=lt,_|=st;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ht===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=tt,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),xa|=_,t.lanes=_,t.memoizedState=mt}}function bp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ap(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)bp(a[t],n)}var Vs=O(null),fl=O(0);function Rp(t,n){t=Zi,Et(fl,t),Et(Vs,n),Zi=t|n.baseLanes}function vu(){Et(fl,Zi),Et(Vs,Vs.current)}function xu(){Zi=fl.current,at(Vs),at(fl)}var Wn=O(null),oi=null;function ma(t){var n=t.alternate;Et(en,en.current&1),Et(Wn,t),oi===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(oi=t)}function Su(t){Et(en,en.current),Et(Wn,t),oi===null&&(oi=t)}function Cp(t){t.tag===22?(Et(en,en.current),Et(Wn,t),oi===null&&(oi=t)):ga()}function ga(){Et(en,en.current),Et(Wn,Wn.current)}function Yn(t){at(Wn),oi===t&&(oi=null),at(en)}var en=O(0);function hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rf(a)||Cf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,oe=null,Pe=null,on=null,dl=!1,ks=!1,ns=!1,pl=0,$r=0,Xs=null,Wv=0;function Qe(){throw Error(s(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Mu(t,n,a,r,c,f){return Gi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?fm:Bu,ns=!1,f=a(r,c),ns=!1,ks&&(f=Dp(n,a,r,c)),wp(t),f}function wp(t){z.H=no;var n=Pe!==null&&Pe.next!==null;if(Gi=0,on=Pe=oe=null,dl=!1,$r=0,Xs=null,n)throw Error(s(300));t===null||ln||(t=t.dependencies,t!==null&&al(t)&&(ln=!0))}function Dp(t,n,a,r){oe=t;var c=0;do{if(ks&&(Xs=null),$r=0,ks=!1,25<=c)throw Error(s(301));if(c+=1,on=Pe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=hm,f=n(a,r)}while(ks);return f}function Yv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Pe!==null?Pe.memoizedState:null)!==t&&(oe.flags|=1024),n}function Eu(){var t=pl!==0;return pl=0,t}function Tu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bu(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}Gi=0,on=Pe=oe=null,ks=!1,$r=pl=0,Xs=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=t:on=on.next=t,on}function nn(){if(Pe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,Pe=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},on===null?oe.memoizedState=on=t:on=on.next=t}return on}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$r;return $r+=1,Xs===null&&(Xs=[]),t=Sp(Xs,t,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?fm:Bu),t}function gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===P)return Mn(t)}throw Error(s(438,String(t)))}function Au(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=C;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function _l(t){var n=nn();return Ru(n,Pe,t)}function Ru(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=_=null,I=null,tt=n,ht=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(_e&mt)===mt:(Gi&mt)===mt){var st=tt.revertLane;if(st===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===Is&&(ht=!0);else if((Gi&st)===st){tt=tt.next,st===Is&&(ht=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=mt,_=f):I=I.next=mt,oe.lanes|=st,xa|=st;mt=tt.action,ns&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else st={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=st,_=f):I=I.next=st,oe.lanes|=mt,xa|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?_=f:I.next=T,!jn(f,t.memoizedState)&&(ln=!0,ht&&(a=Fs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Cu(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);jn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Up(t,n,a){var r=oe,c=nn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!jn((Pe||c).memoizedState,a);if(_&&(c.memoizedState=a,ln=!0),c=c.queue,Uu(Op.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},Np.bind(null,r,c,a,n),null),ke===null)throw Error(s(349));f||(Gi&127)!==0||Lp(r,n,a)}return a}function Lp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=ml(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Np(t,n,a,r){n.value=a,n.getSnapshot=r,zp(n)&&Pp(t)}function Op(t,n,a){return a(function(){zp(n)&&Pp(t)})}function zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Pp(t){var n=Wa(t,2);n!==null&&Hn(n,t,2)}function wu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ns){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Bp(t,n,a,r){return t.baseState=a,Ru(t,Pe,typeof r=="function"?r:Vi)}function Zv(t,n,a,r,c){if(Sl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Ip(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ip(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var T=a(c,r),I=z.S;I!==null&&I(_,T),Fp(t,n,T)}catch(tt){Du(t,n,tt)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(c,r),Fp(t,n,f)}catch(tt){Du(t,n,tt)}}function Fp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Hp(t,n,r)},function(r){return Du(t,n,r)}):Hp(t,n,a)}function Hp(t,n,a){n.status="fulfilled",n.value=a,Gp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ip(t,a)))}function Du(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==r)}t.action=null}function Gp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vp(t,n){return n}function kp(t,n){if(Se){var a=ke.formState;if(a!==null){t:{var r=oe;if(Se){if(qe){e:{for(var c=qe,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qe=li(c.nextSibling),r=c.data==="F!";break t}}ua(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=r,a=lm.bind(null,oe,r),r.dispatch=a,r=wu(!1),f=Pu.bind(null,oe,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Zv.bind(null,oe,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Xp(t){var n=nn();return jp(n,Pe,t)}function jp(t,n,a){if(n=Ru(t,n,Vp)[0],t=_l(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=to(n)}catch(_){throw _===Hs?ol:_}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,js(9,{destroy:void 0},Kv.bind(null,c,a),null)),[r,f,t]}function Kv(t,n){t.action=n}function qp(t){var n=nn(),a=Pe;if(a!==null)return jp(n,a,t);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function js(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=ml(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Wp(){return nn().memoizedState}function vl(t,n,a,r){var c=Ln();oe.flags|=t,c.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function xl(t,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Pe!==null&&r!==null&&yu(r,Pe.memoizedState.deps)?c.memoizedState=js(n,f,a,r):(oe.flags|=t,c.memoizedState=js(1|n,f,a,r))}function Yp(t,n){vl(8390656,8,t,n)}function Uu(t,n){xl(2048,8,t,n)}function Qv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=ml(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zp(t){var n=nn().memoizedState;return Qv({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Kp(t,n){return xl(4,2,t,n)}function Qp(t,n){return xl(4,4,t,n)}function Jp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $p(t,n,a){a=a!=null?a.concat([t]):null,xl(4,4,Jp.bind(null,n,t),a)}function Lu(){}function tm(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&yu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function em(t,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&yu(n,r[1]))return r[0];if(r=t(),ns){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r}function Nu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ng(),oe.lanes|=t,xa|=t,a)}function nm(t,n,a,r){return jn(a,n)?a:Vs.current!==null?(t=Nu(t,a,r),jn(t,n)||(ln=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=ng(),oe.lanes|=t,xa|=t,n)}function im(t,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var _=z.T,T={};z.T=T,Pu(t,!1,n,a);try{var I=c(),tt=z.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=qv(I,r);eo(t,n,ht,Qn(t))}else eo(t,n,r,Qn(t))}catch(mt){eo(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{K.p=f,_!==null&&T.types!==null&&(_.types=T.types),z.T=_}}function Jv(){}function Ou(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=am(t).queue;im(t,c,n,q,a===null?Jv:function(){return sm(t),a(r)})}function am(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function sm(t){var n=am(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Qn())}function zu(){return Mn(xo)}function rm(){return nn().memoizedState}function om(){return nn().memoizedState}function $v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=da(a);var r=pa(n,t,a);r!==null&&(Hn(r,n,a),Kr(r,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function tx(t,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(t)?cm(n,a):(a=$c(t,n,a,r),a!==null&&(Hn(a,t,r),um(a,n,r)))}function lm(t,n,a){var r=Qn();eo(t,n,a,r)}function eo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(t))cm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(c.hasEagerState=!0,c.eagerState=T,jn(T,_))return tl(t,n,c,0),ke===null&&$o(),!1}catch{}if(a=$c(t,n,c,r),a!==null)return Hn(a,t,r),um(a,n,r),!0}return!1}function Pu(t,n,a,r){if(r={lane:2,revertLane:mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Sl(t)){if(n)throw Error(s(479))}else n=$c(t,a,r,2),n!==null&&Hn(n,t,2)}function Sl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function cm(t,n){ks=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function um(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Mi(t,a)}}var no={readContext:Mn,use:gl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};no.useEffectEvent=Qe;var fm={readContext:Mn,use:gl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Yp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,vl(4194308,4,Jp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return vl(4194308,4,t,n)},useInsertionEffect:function(t,n){vl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(ns){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(ns){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=tx.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=wu(t);var n=t.queue,a=lm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(t,n){var a=Ln();return Nu(a,t,n)},useTransition:function(){var t=wu(!1);return t=im.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,c=Ln();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(_e&127)!==0||Lp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Yp(Op.bind(null,r,f,t),[t]),r.flags|=2048,js(9,{destroy:void 0},Np.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=ke.identifierPrefix;if(Se){var a=bi,r=Ti;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zu,useFormState:kp,useActionState:kp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return Ln().memoizedState=$v.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:Mn,use:gl,useCallback:tm,useContext:Mn,useEffect:Uu,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:_l,useRef:Wp,useState:function(){return _l(Vi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=nn();return nm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=_l(Vi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:zu,useFormState:Xp,useActionState:Xp,useOptimistic:function(t,n){var a=nn();return Bp(a,Pe,t,n)},useMemoCache:Au,useCacheRefresh:om};Bu.useEffectEvent=Zp;var hm={readContext:Mn,use:gl,useCallback:tm,useContext:Mn,useEffect:Uu,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:Cu,useRef:Wp,useState:function(){return Cu(Vi)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=nn();return Pe===null?Nu(a,t,n):nm(a,Pe.memoizedState,t,n)},useTransition:function(){var t=Cu(Vi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:zu,useFormState:qp,useActionState:qp,useOptimistic:function(t,n){var a=nn();return Pe!==null?Bp(a,Pe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:om};hm.useEffectEvent=Zp;function Iu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=da(r);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,r),n!==null&&(Hn(n,t,r),Kr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Qn(),c=da(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,r),n!==null&&(Hn(n,t,r),Kr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),r=da(a);r.tag=2,n!=null&&(r.callback=n),n=pa(t,r,a),n!==null&&(Hn(n,t,a),Kr(n,t,a))}};function dm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vr(a,r)||!Vr(c,f):!0}function pm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function is(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function mm(t){Jo(t)}function gm(t){console.error(t)}function _m(t){Jo(t)}function yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function vm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,n)},a}function xm(t){return t=da(t),t.tag=3,t}function Sm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){vm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){vm(n,a,r),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function ex(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Nl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),hf(t,r,c)),!1;case 22:return a.flags|=65536,r===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),hf(t,r,c)),!1}throw Error(s(435,a.tag))}return hf(t,r,c),Nl(),!1}if(Se)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==su&&(t=Error(s(422),{cause:r}),jr(ii(t,a)))):(r!==su&&(n=Error(s(423),{cause:r}),jr(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ii(r,a),c=Hu(t.stateNode,r,c),gu(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ii(f,a),uo===null?uo=[f]:uo.push(f),Je!==4&&(Je=2),n===null)return!0;r=ii(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,r,t),gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xm(c),Sm(c,t,a,r),gu(a,c),!1}a=a.return}while(a!==null);return!1}var Gu=Error(s(461)),ln=!1;function En(t,n,a,r){n.child=t===null?Tp(n,null,a,r):es(n,t.child,a,r)}function ym(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var T in r)T!=="ref"&&(_[T]=r[T])}else _=r;return Qa(n),r=Mu(t,n,a,_,f,c),T=Eu(),t!==null&&!ln?(Tu(t,n,c),ki(t,n,c)):(Se&&T&&iu(n),n.flags|=1,En(t,n,r,c),n.child)}function Mm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Em(t,n,f,r,c)):(t=nl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(_,r)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Bi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Em(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Vr(f,r)&&t.ref===n.ref)if(ln=!1,n.pendingProps=r=f,Zu(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Vu(t,n,a,r,c)}function Tm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return bm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&rl(n,f!==null?f.cachePool:null),f!==null?Rp(n,f):vu(),Cp(n);else return r=n.lanes=536870912,bm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(rl(n,f.cachePool),Rp(n,f),ga(),n.memoizedState=null):(t!==null&&rl(n,null),vu(),ga());return En(t,n,c,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function bm(t,n,a,r,c){var f=hu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&rl(n,null),vu(),Cp(n),t!==null&&Bs(t,n,r,!0),n.childLanes=c,null}function Ml(t,n){return n=Tl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Am(t,n,a){return es(n,t.child,null,a),t=Ml(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function nx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Ml(n,r),n.lanes=536870912,io(null,t);if(Su(n),(t=qe)?(t=Ig(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=cp(t),a.return=n,n.child=a,yn=n,qe=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return Ml(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Su(n),c)if(n.flags&256)n.flags&=-257,n=Am(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||Bs(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(r=ke,r!==null&&(_=Ms(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Wa(t,_),Hn(r,t,_),Gu;Nl(),n=Am(t,n,a)}else t=f.treeContext,qe=li(_.nextSibling),yn=n,Se=!0,ca=null,ri=!1,t!==null&&hp(n,t),n=Ml(n,r),n.flags|=4096;return n}return t=Bi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function El(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vu(t,n,a,r,c){return Qa(n),a=Mu(t,n,a,r,void 0,c),r=Eu(),t!==null&&!ln?(Tu(t,n,c),ki(t,n,c)):(Se&&r&&iu(n),n.flags|=1,En(t,n,a,c),n.child)}function Rm(t,n,a,r,c,f){return Qa(n),n.updateQueue=null,a=Dp(n,r,a,c),wp(t),r=Eu(),t!==null&&!ln?(Tu(t,n,f),ki(t,n,f)):(Se&&r&&iu(n),n.flags|=1,En(t,n,a,f),n.child)}function Cm(t,n,a,r,c){if(Qa(n),n.stateNode===null){var f=Ns,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},pu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Ns,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Iu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Jr(n,r,f,c),Qr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,I=is(a,T);f.props=I;var tt=f.context,ht=a.contextType;_=Ns,typeof ht=="object"&&ht!==null&&(_=Mn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==_)&&pm(n,f,r,_),ha=!1;var st=n.memoizedState;f.state=st,Jr(n,r,f,c),Qr(),tt=n.memoizedState,T||st!==tt||ha?(typeof mt=="function"&&(Iu(n,a,mt,r),tt=n.memoizedState),(I=ha||dm(n,a,I,r,st,tt,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,mu(t,n),_=n.memoizedProps,ht=is(a,_),f.props=ht,mt=n.pendingProps,st=f.context,tt=a.contextType,I=Ns,typeof tt=="object"&&tt!==null&&(I=Mn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==mt||st!==I)&&pm(n,f,r,I),ha=!1,st=n.memoizedState,f.state=st,Jr(n,r,f,c),Qr();var lt=n.memoizedState;_!==mt||st!==lt||ha||t!==null&&t.dependencies!==null&&al(t.dependencies)?(typeof T=="function"&&(Iu(n,a,T,r),lt=n.memoizedState),(ht=ha||dm(n,a,ht,r,st,lt,I)||t!==null&&t.dependencies!==null&&al(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=I,r=ht):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,El(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=es(n,t.child,null,c),n.child=es(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function wm(t,n,a,r){return Za(),n.flags|=256,En(t,n,a,r),n.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(t){return{baseLanes:t,cachePool:vp()}}function ju(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Dm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?ma(n):ga(),(t=qe)?(t=Ig(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=cp(t),a.return=n,n.child=a,yn=n,qe=null)):t=null,t===null)throw ua(n);return Cf(t)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(ga(),c=n.mode,T=Tl({mode:"hidden",children:T},c),r=Ya(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=Xu(a),r.childLanes=ju(t,_,a),n.memoizedState=ku,io(null,r)):(ma(n),qu(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Wu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),T=r.fallback,c=n.mode,r=Tl({mode:"visible",children:r.children},c),T=Ya(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,es(n,t.child,null,a),r=n.child,r.memoizedState=Xu(a),r.childLanes=ju(t,_,a),n.memoizedState=ku,n=io(null,r));else if(ma(n),Cf(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var tt=_.dgst;_=tt,r=Error(s(419)),r.stack="",r.digest=_,jr({value:r,source:null,stack:null}),n=Wu(t,n,a)}else if(ln||Bs(t,n,a,!1),_=(a&t.childLanes)!==0,ln||_){if(_=ke,_!==null&&(r=Ms(_,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,Wa(t,r),Hn(_,t,r),Gu;Rf(T)||Nl(),n=Wu(t,n,a)}else Rf(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,qe=li(T.nextSibling),yn=n,Se=!0,ca=null,ri=!1,t!==null&&hp(n,t),n=qu(n,r.children),n.flags|=4096);return n}return c?(ga(),T=r.fallback,c=n.mode,I=t.child,tt=I.sibling,r=Bi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,tt!==null?T=Bi(tt,T):(T=Ya(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,io(null,r),r=n.child,T=t.child.memoizedState,T===null?T=Xu(a):(c=T.cachePool,c!==null?(I=rn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=vp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=ju(t,_,a),n.memoizedState=ku,io(t.child,r)):(ma(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function qu(t,n){return n=Tl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function Wu(t,n,a){return es(n,t.child,null,a),t=qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Um(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),lu(t.return,n,a)}function Yu(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Lm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=en.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Et(en,_),En(t,n,r,a),r=Se?Xr:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,a,n);else if(t.tag===19)Um(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&hl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&hl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Yu(n,!0,a,null,f,r);break;case"together":Yu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&al(t)))}function ix(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),fa(n,rn,t.memoizedState.cache),Za();break;case 27:case 5:ee(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Su(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dm(t,n,a):(ma(n),t=ki(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Bs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Lm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Et(en,en.current),r)break;return null;case 22:return n.lanes=0,Tm(t,n,a,n.pendingProps);case 24:fa(n,rn,t.memoizedState.cache)}return ki(t,n,a)}function Nm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return ln=!1,ix(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Se&&(n.flags&1048576)!==0&&fp(n,Xr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=$a(n.elementType),n.type=t,typeof t=="function")tu(t)?(r=is(t,r),n.tag=1,n=Cm(null,n,t,r,a)):(n.tag=0,n=Vu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=ym(null,n,t,r,a);break t}else if(c===B){n.tag=14,n=Mm(null,n,t,r,a);break t}}throw n=ct(t)||t,Error(s(306,n,""))}}return n;case 0:return Vu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=is(r,n.pendingProps),Cm(t,n,r,c,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),Jr(n,r,null,a);var _=n.memoizedState;if(r=_.cache,fa(n,rn,r),r!==f.cache&&cu(n,[rn],a,!0),Qr(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wm(t,n,r,a);break t}else if(r!==c){c=ii(Error(s(424)),n),jr(c),n=wm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=li(t.firstChild),yn=n,Se=!0,ca=null,ri=!0,a=Tp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Za(),r===c){n=ki(t,n,a);break t}En(t,n,r,a)}n=n.child}return n;case 26:return El(t,n),t===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Hl(vt.current).createElement(a),r[sn]=n,r[xn]=t,Tn(r,a,t),xt(r),n.stateNode=r):n.memoizedState=Xg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&Se&&(r=n.stateNode=Gg(n.type,n.pendingProps,vt.current),yn=n,ri=!0,c=qe,Ta(n.type)?(wf=c,qe=li(r.firstChild)):qe=c),En(t,n,n.pendingProps.children,a),El(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=qe)&&(r=Nx(r,n.type,n.pendingProps,ri),r!==null?(n.stateNode=r,yn=n,qe=li(r.firstChild),ri=!1,c=!0):c=!1),c||ua(n)),ee(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Tf(c,f)?r=null:_!==null&&Tf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Mu(t,n,Yv,null,null,a),xo._currentValue=c),El(t,n),En(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=qe)&&(a=Ox(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,qe=null,t=!0):t=!1),t||ua(n)),null;case 13:return Dm(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=es(n,null,r,a):En(t,n,r,a),n.child;case 11:return ym(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,fa(n,n.type,r.value),En(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Qa(n),c=Mn(c),r=r(c),n.flags|=1,En(t,n,r,a),n.child;case 14:return Mm(t,n,n.type,n.pendingProps,a);case 15:return Em(t,n,n.type,n.pendingProps,a);case 19:return Lm(t,n,a);case 31:return nx(t,n,a);case 22:return Tm(t,n,a,n.pendingProps);case 24:return Qa(n),r=Mn(rn),t===null?(c=hu(),c===null&&(c=ke,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},pu(n),fa(n,rn,c)):((t.lanes&a)!==0&&(mu(t,n),Jr(n,null,null,a),Qr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,rn,r)):(r=f.cache,fa(n,rn,r),r!==c.cache&&cu(n,[rn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(t){t.flags|=4}function Ku(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(rg())t.flags|=8192;else throw ts=ll,du}else t.flags&=-16777217}function Om(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zg(n))if(rg())t.flags|=8192;else throw ts=ll,du}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Zs|=n)}function ao(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ax(t,n,a){var r=n.pendingProps;switch(au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(rn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ru())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(We(n),Om(n,f)):(We(n),Ku(n,c,null,r,a))):f?f!==t.memoizedState?(Xi(n),We(n),Om(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Xi(n),We(n),Ku(n,c,t,r,a)),null;case 27:if(Xe(n),a=vt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=Rt.current,Ps(n)?dp(n):(t=Gg(c,r,a),n.stateNode=t,Xi(n))}return We(n),null;case 5:if(Xe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=Rt.current,Ps(n))dp(n);else{var _=Hl(vt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[sn]=n,f[xn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Xi(n)}}return We(n),Ku(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=vt.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=yn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Dg(t.nodeValue,a)),t||ua(n,!0)}else t=Hl(t).createTextNode(r),t[sn]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),We(n),null);case 4:return zt(),t===null&&xf(n.stateNode.containerInfo),We(n),null;case 10:return Hi(n.type),We(n),null;case 19:if(at(en),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ao(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=hl(t),f!==null){for(n.flags|=128,ao(r,!1),t=f.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lp(a,t),a=a.sibling;return Et(en,en.current&1|2),Se&&Ii(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Dl&&(n.flags|=128,c=!0,ao(r,!1),n.lanes=4194304)}else{if(!c)if(t=hl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),ao(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return We(n),null}else 2*E()-r.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,ao(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=en.current,Et(en,c?a&1|2:a&1),Se&&Ii(n,r.treeForkCount),t):(We(n),null);case 22:case 23:return Yn(n),xu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&at(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(rn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function sx(t,n){switch(au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(rn),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(en),null;case 4:return zt(),null;case 10:return Hi(n.type),null;case 22:case 23:return Yn(n),xu(),t!==null&&at(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(rn),null;case 25:return null;default:return null}}function zm(t,n){switch(au(n),n.tag){case 3:Hi(rn),zt();break;case 26:case 27:case 5:Xe(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:at(en);break;case 10:Hi(n.type);break;case 22:case 23:Yn(n),xu(),t!==null&&at(Ja);break;case 24:Hi(rn)}}function so(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(T){ze(n,n.return,T)}}function _a(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var I=a,tt=T;try{tt()}catch(ht){ze(c,I,ht)}}}r=r.next}while(r!==f)}}catch(ht){ze(n,n.return,ht)}}function Pm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ap(n,a)}catch(r){ze(t,t.return,r)}}}function Bm(t,n,a){a.props=is(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){ze(t,n,c)}}function Ai(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(t,n,c)}else a.current=null}function Im(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(t,t.return,c)}}function Qu(t,n,a){try{var r=t.stateNode;Rx(r,t.type,a,n),r[xn]=n}catch(c){ze(t,t.return,c)}}function Fm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Ju(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Fm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(r===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for($u(t,n,a),t=t.sibling;t!==null;)$u(t,n,a),t=t.sibling}function Al(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Al(t,n,a),t=t.sibling;t!==null;)Al(t,n,a),t=t.sibling}function Hm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[sn]=t,n[xn]=a}catch(f){ze(t,t.return,f)}}var ji=!1,cn=!1,tf=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function rx(t,n){if(t=t.containerInfo,Mf=Wl,t=$d(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,T=-1,I=-1,tt=0,ht=0,mt=t,st=null;e:for(;;){for(var lt;mt!==a||c!==0&&mt.nodeType!==3||(T=_+c),mt!==f||r!==0&&mt.nodeType!==3||(I=_+r),mt.nodeType===3&&(_+=mt.nodeValue.length),(lt=mt.firstChild)!==null;)st=mt,mt=lt;for(;;){if(mt===t)break e;if(st===a&&++tt===c&&(T=_),st===f&&++ht===r&&(I=_),(lt=mt.nextSibling)!==null)break;mt=st,st=mt.parentNode}mt=lt}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:t,selectionRange:a},Wl=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Gt=is(a.type,c);t=r.getSnapshotBeforeUpdate(Gt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){ze(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Vm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),r&4&&so(5,a);break;case 1:if(Wi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ze(a,a.return,_)}else{var c=is(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ze(a,a.return,_)}}r&64&&Pm(a),r&512&&ro(a,a.return);break;case 3:if(Wi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ap(t,n)}catch(_){ze(a,a.return,_)}}break;case 27:n===null&&r&4&&Hm(a);case 26:case 5:Wi(t,a),n===null&&r&4&&Im(a),r&512&&ro(a,a.return);break;case 12:Wi(t,a);break;case 31:Wi(t,a),r&4&&jm(t,a);break;case 13:Wi(t,a),r&4&&qm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mx.bind(null,a),zx(t,a))));break;case 22:if(r=a.memoizedState!==null||ji,!r){n=n!==null&&n.memoizedState!==null||cn,c=ji;var f=cn;ji=r,(cn=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),ji=c,cn=f}break;case 30:break;default:Wi(t,a)}}function km(t){var n=t.alternate;n!==null&&(t.alternate=null,km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Pn=!1;function qi(t,n,a){for(a=a.child;a!==null;)Xm(t,n,a),a=a.sibling}function Xm(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:cn||Ai(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ai(a,n);var r=Ye,c=Pn;Ta(a.type)&&(Ye=a.stateNode,Pn=!1),qi(t,n,a),go(a.stateNode),Ye=r,Pn=c;break;case 5:cn||Ai(a,n);case 6:if(r=Ye,c=Pn,Ye=null,qi(t,n,a),Ye=r,Pn=c,Ye!==null)if(Pn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ye!==null&&(Pn?(t=Ye,Pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ir(t)):Pg(Ye,a.stateNode));break;case 4:r=Ye,c=Pn,Ye=a.stateNode.containerInfo,Pn=!0,qi(t,n,a),Ye=r,Pn=c;break;case 0:case 11:case 14:case 15:_a(2,a,n),cn||_a(4,a,n),qi(t,n,a);break;case 1:cn||(Ai(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Bm(a,n,r)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,qi(t,n,a),cn=r;break;default:qi(t,n,a)}}function jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ir(t)}catch(a){ze(n,n.return,a)}}}function qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ir(t)}catch(a){ze(n,n.return,a)}}function ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Gm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Gm),n;default:throw Error(s(435,t.tag))}}function Rl(t,n){var a=ox(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=gx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Ta(T.type)){Ye=T.stateNode,Pn=!1;break t}break;case 5:Ye=T.stateNode,Pn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(Ye===null)throw Error(s(160));Xm(f,_,c),Ye=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wm(n,t),n=n.sibling}var hi=null;function Wm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),r&4&&(_a(3,t,t.return),so(3,t),_a(5,t,t.return));break;case 1:Bn(n,t),In(t),r&512&&(cn||a===null||Ai(a,a.return)),r&64&&ji&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=hi;if(Bn(n,t),In(t),r&512&&(cn||a===null||Ai(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Va]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[sn]=t,xt(f),r=f;break t;case"link":var _=Wg("link","href",c).get(r+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(_=Wg("meta","content",c).get(r+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=t,xt(f),r=f}t.stateNode=r}else Yg(c,t.type,t.stateNode);else t.stateNode=qg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Yg(c,t.type,t.stateNode):qg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),r&512&&(cn||a===null||Ai(a,a.return)),a!==null&&r&4&&Qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),r&512&&(cn||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{As(c,"")}catch(Gt){ze(t,t.return,Gt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,Qu(t,c,a!==null?a.memoizedProps:c)),r&1024&&(tf=!0);break;case 6:if(Bn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Gt){ze(t,t.return,Gt)}}break;case 3:if(kl=null,c=hi,hi=Gl(n.containerInfo),Bn(n,t),hi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(Gt){ze(t,t.return,Gt)}tf&&(tf=!1,Ym(t));break;case 4:r=hi,hi=Gl(t.stateNode.containerInfo),Bn(n,t),In(t),hi=r;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=ji,ht=cn;if(ji=tt||c,cn=ht||I,Bn(n,t),cn=ht,ji=tt,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ji||cn||as(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var mt=I.memoizedProps.style,st=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Gt){ze(I,I.return,Gt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Gt){ze(I,I.return,Gt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;c?Bg(lt,!0):Bg(I.stateNode,!1)}catch(Gt){ze(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Rl(t,a))));break;case 19:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Rl(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Fm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Ju(t);Al(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(As(_,""),a.flags&=-33);var T=Ju(t);Al(t,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Ju(t);$u(t,tt,I);break;default:throw Error(s(161))}}catch(ht){ze(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ym(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(t,n.alternate,n),n=n.sibling}function as(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),as(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),as(n);break;case 27:go(n.stateNode);case 26:case 5:Ai(n,n.return),as(n);break;case 22:n.memoizedState===null&&as(n);break;case 30:as(n);break;default:as(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),so(4,f);break;case 1:if(Yi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){ze(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)bp(I[c],T)}catch(tt){ze(r,r.return,tt)}}a&&_&64&&Pm(f),ro(f,f.return);break;case 27:Hm(f);case 26:case 5:Yi(c,f,a),a&&r===null&&_&4&&Im(f),ro(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&_&4&&jm(c,f);break;case 13:Yi(c,f,a),a&&_&4&&qm(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),ro(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qr(a))}function nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qr(t))}function di(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zm(t,n,a,r),n=n.sibling}function Zm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,r),c&2048&&so(9,n);break;case 1:di(t,n,a,r);break;case 3:di(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qr(t)));break;case 12:if(c&2048){di(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){ze(n,n.return,I)}}else di(t,n,a,r);break;case 31:di(t,n,a,r);break;case 13:di(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,r):oo(t,n):f._visibility&2?di(t,n,a,r):(f._visibility|=2,qs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(_,n);break;case 24:di(t,n,a,r),c&2048&&nf(n.alternate,n);break;default:di(t,n,a,r)}}function qs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,I=r,tt=_.flags;switch(_.tag){case 0:case 11:case 15:qs(f,_,T,I,c),so(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?qs(f,_,T,I,c):oo(f,_):(ht._visibility|=2,qs(f,_,T,I,c)),c&&tt&2048&&ef(_.alternate,_);break;case 24:qs(f,_,T,I,c),c&&tt&2048&&nf(_.alternate,_);break;default:qs(f,_,T,I,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:oo(a,r),c&2048&&ef(r.alternate,r);break;case 24:oo(a,r),c&2048&&nf(r.alternate,r);break;default:oo(a,r)}n=n.sibling}}var lo=8192;function Ws(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)Km(t,n,a),t=t.sibling}function Km(t,n,a){switch(t.tag){case 26:Ws(t,n,a),t.flags&lo&&t.memoizedState!==null&&Wx(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Ws(t,n,a);break;case 3:case 4:var r=hi;hi=Gl(t.stateNode.containerInfo),Ws(t,n,a),hi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=lo,lo=16777216,Ws(t,n,a),lo=r):Ws(t,n,a));break;default:Ws(t,n,a)}}function Qm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,$m(r,t)}Qm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jm(t),t=t.sibling}function Jm(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&_a(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cl(t)):co(t);break;default:co(t)}}function Cl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,$m(r,t)}Qm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}t=t.sibling}}function $m(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=t;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(km(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var lx={getCacheForType:function(t){var n=Mn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(rn).controller.signal}},cx=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,pe=null,_e=0,Oe=0,Zn=null,va=!1,Ys=!1,af=!1,Zi=0,Je=0,xa=0,ss=0,sf=0,Kn=0,Zs=0,uo=null,Fn=null,rf=!1,wl=0,tg=0,Dl=1/0,Ul=null,Sa=null,hn=0,ya=null,Ks=null,Ki=0,of=0,lf=null,eg=null,fo=0,cf=null;function Qn(){return(De&2)!==0&&_e!==0?_e&-_e:z.T!==null?mf():Ga()}function ng(){if(Kn===0)if((_e&536870912)===0||Se){var t=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Kn=t}else Kn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===ke&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),Ma(t,_e,Kn,!1)),Dn(t,a),((De&2)===0||t!==ke)&&(t===ke&&((De&2)===0&&(ss|=a),Je===4&&Ma(t,_e,Kn,!1)),Ri(t))}function ig(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=r?hx(t,n):ff(t,n,!0),f=r;do{if(c===0){Ys&&!r&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ux(a)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;c=uo;var I=T.current.memoizedState.isDehydrated;if(I&&(Qs(T,_).flags|=256),_=ff(T,_,!1),_!==2){if(af&&!I){T.errorRecoveryDisabledLanes|=f,ss|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Qs(t,0),Ma(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ma(r,n,Kn,!va);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=wl+300-E(),10<c)){if(Ma(r,n,Kn,!va),gt(r,0,!0)!==0)break t;Ki=n,r.timeoutHandle=Og(ag.bind(null,r,a,Fn,Ul,rf,n,Kn,ss,Zs,va,f,"Throttled",-0,0),c);break t}ag(r,a,Fn,Ul,rf,n,Kn,ss,Zs,va,f,null,-0,0)}}break}while(!0);Ri(t)}function ag(t,n,a,r,c,f,_,T,I,tt,ht,mt,st,lt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Km(n,f,mt);var Gt=(f&62914560)===f?wl-E():(f&4194048)===f?tg-E():0;if(Gt=Yx(mt,Gt),Gt!==null){Ki=f,t.cancelPendingCommit=Gt(hg.bind(null,t,n,f,a,r,c,_,T,I,ht,mt,null,st,lt)),Ma(t,f,_,!tt);return}}hg(t,n,f,a,r,c,_,T,I)}function ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,r){n&=~sf,n&=~ss,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Lr(t,a,n)}function Ll(){return(De&6)===0?(ho(0),!1):!0}function uf(){if(pe!==null){if(Oe===0)var t=pe.return;else t=pe,Fi=Ka=null,bu(t),Gs=null,Yr=0,t=pe;for(;t!==null;)zm(t.alternate,t),t=t.return;pe=null}}function Qs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Dx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,uf(),ke=t,pe=a=Bi(t.current,null),_e=n,Oe=0,Zn=null,va=!1,Ys=Ft(t,n),af=!1,Zs=Kn=sf=ss=xa=Je=0,Fn=uo=null,rf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Pt(r),f=1<<c;n|=t[c],r&=~f}return Zi=n,$o(),a}function sg(t,n){oe=null,z.H=no,n===Hs||n===ol?(n=yp(),Oe=3):n===du?(n=yp(),Oe=4):Oe=n===Gu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(Je=1,yl(t,ii(n,t.current)))}function rg(){var t=Wn.current;return t===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?t===oi:!1}function og(){var t=z.H;return z.H=no,t===null?no:t}function lg(){var t=z.A;return z.A=lx,t}function Nl(){Je=4,va||(_e&4194048)!==_e&&Wn.current!==null||(Ys=!0),(xa&134217727)===0&&(ss&134217727)===0||ke===null||Ma(ke,_e,Kn,!1)}function ff(t,n,a){var r=De;De|=2;var c=og(),f=lg();(ke!==t||_e!==n)&&(Ul=null,Qs(t,n)),n=!1;var _=Je;t:do try{if(Oe!==0&&pe!==null){var T=pe,I=Zn;switch(Oe){case 8:uf(),_=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var tt=Oe;if(Oe=0,Zn=null,Js(t,T,I,tt),a&&Ys){_=0;break t}break;default:tt=Oe,Oe=0,Zn=null,Js(t,T,I,tt)}}fx(),_=Je;break}catch(ht){sg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Fi=Ka=null,De=r,z.H=c,z.A=f,pe===null&&(ke=null,_e=0,$o()),_}function fx(){for(;pe!==null;)cg(pe)}function hx(t,n){var a=De;De|=2;var r=og(),c=lg();ke!==t||_e!==n?(Ul=null,Dl=E()+500,Qs(t,n)):Ys=Ft(t,n);t:do try{if(Oe!==0&&pe!==null){n=pe;var f=Zn;e:switch(Oe){case 1:Oe=0,Zn=null,Js(t,n,f,1);break;case 2:case 9:if(xp(f)){Oe=0,Zn=null,ug(n);break}n=function(){Oe!==2&&Oe!==9||ke!==t||(Oe=7),Ri(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:xp(f)?(Oe=0,Zn=null,ug(n)):(Oe=0,Zn=null,Js(t,n,f,7));break;case 5:var _=null;switch(pe.tag){case 26:_=pe.memoizedState;case 5:case 27:var T=pe;if(_?Zg(_):T.stateNode.complete){Oe=0,Zn=null;var I=T.sibling;if(I!==null)pe=I;else{var tt=T.return;tt!==null?(pe=tt,Ol(tt)):pe=null}break e}}Oe=0,Zn=null,Js(t,n,f,5);break;case 6:Oe=0,Zn=null,Js(t,n,f,6);break;case 8:uf(),Je=6;break t;default:throw Error(s(462))}}dx();break}catch(ht){sg(t,ht)}while(!0);return Fi=Ka=null,z.H=r,z.A=c,De=a,pe!==null?0:(ke=null,_e=0,$o(),Je)}function dx(){for(;pe!==null&&!Ze();)cg(pe)}function cg(t){var n=Nm(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Ol(t):pe=n}function ug(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Rm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:bu(n);default:zm(a,n),n=pe=lp(n,Zi),n=Nm(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Ol(t):pe=n}function Js(t,n,a,r){Fi=Ka=null,bu(n),Gs=null,Yr=0;var c=n.return;try{if(ex(t,c,n,a,_e)){Je=1,yl(t,ii(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Je=1,yl(t,ii(a,t.current)),pe=null;return}n.flags&32768?(Se||r===1?t=!0:Ys||(_e&536870912)!==0?t=!1:(va=t=!0,(r===2||r===9||r===3||r===6)&&(r=Wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),fg(n,t)):Ol(n)}function Ol(t){var n=t;do{if((n.flags&32768)!==0){fg(n,va);return}t=n.return;var a=ax(n.alternate,n,Zi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Je===0&&(Je=5)}function fg(t,n){do{var a=sx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Je=6,pe=null}function hg(t,n,a,r,c,f,_,T,I){t.cancelPendingCommit=null;do zl();while(hn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Jc,ei(t,a,f,_,T,I),t===ke&&(pe=ke=null,_e=0),Ks=n,ya=t,Ki=a,of=f,lf=c,eg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_x(ut,function(){return _g(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=K.p,K.p=2,_=De,De|=4;try{rx(t,n,a)}finally{De=_,K.p=c,z.T=r}}hn=1,dg(),pg(),mg()}}function dg(){if(hn===1){hn=0;var t=ya,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=De;De|=4;try{Wm(n,t);var f=Ef,_=$d(t.containerInfo),T=f.focusedElem,I=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&Jd(T.ownerDocument.documentElement,T)){if(I!==null&&Wc(T)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var mt=T.ownerDocument||document,st=mt&&mt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Gt=T.textContent.length,te=Math.min(I.start,Gt),Ie=I.end===void 0?te:Math.min(I.end,Gt);!lt.extend&&te>Ie&&(_=Ie,Ie=te,te=_);var Z=Qd(T,te),k=Qd(T,Ie);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=mt.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),te>Ie?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(mt=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&mt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Wl=!!Mf,Ef=Mf=null}finally{De=c,K.p=r,z.T=a}}t.current=n,hn=2}}function pg(){if(hn===2){hn=0;var t=ya,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=K.p;K.p=2;var c=De;De|=4;try{Vm(t,n.alternate,n)}finally{De=c,K.p=r,z.T=a}}hn=3}}function mg(){if(hn===4||hn===3){hn=0,L();var t=ya,n=Ks,a=Ki,r=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,Ks=ya=null,gg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Sa=null),Ts(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var T=r[_];f(T.value,{componentStack:T.stack})}}finally{z.T=n,K.p=c}}(Ki&3)!==0&&zl(),Ri(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===cf?fo++:(fo=0,cf=t):fo=0,ho(0)}}function gg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qr(n)))}function zl(){return dg(),pg(),mg(),_g()}function _g(){if(hn!==5)return!1;var t=ya,n=of;of=0;var a=Ts(Ki),r=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=lf,lf=null;var f=ya,_=Ki;if(hn=0,Ks=ya=null,Ki=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,Jm(f.current),Zm(f,f.current,_,a),De=T,ho(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{K.p=c,z.T=r,gg(t,n)}}function vg(t,n,a){n=ii(a,n),n=Hu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(Dn(t,2),Ri(t))}function ze(t,n,a){if(t.tag===3)vg(t,t,a);else for(;n!==null;){if(n.tag===3){vg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sa===null||!Sa.has(r))){t=ii(a,t),a=xm(2),r=pa(n,a,2),r!==null&&(Sm(a,r,n,t),Dn(r,2),Ri(r));break}}n=n.return}}function hf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new cx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(af=!0,c.add(a),t=px.bind(null,t,n,a),n.then(t,t))}function px(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(_e&a)===a&&(Je===4||Je===3&&(_e&62914560)===_e&&300>E()-wl?(De&2)===0&&Qs(t,0):sf|=a,Zs===_e&&(Zs=0)),Ri(t)}function xg(t,n){n===0&&(n=Ne()),t=Wa(t,n),t!==null&&(Dn(t,n),Ri(t))}function mx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(t,a)}function gx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),xg(t,a)}function _x(t,n){return se(t,n)}var Pl=null,$s=null,df=!1,Bl=!1,pf=!1,Ea=0;function Ri(t){t!==$s&&t.next===null&&($s===null?Pl=$s=t:$s=$s.next=t),Bl=!0,df||(df=!0,xx())}function ho(t,n){if(!pf&&Bl){pf=!0;do for(var a=!1,r=Pl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Eg(r,f))}else f=_e,f=gt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,Eg(r,f));r=r.next}while(a);pf=!1}}function vx(){Sg()}function Sg(){Bl=df=!1;var t=0;Ea!==0&&wx()&&(t=Ea);for(var n=E(),a=null,r=Pl;r!==null;){var c=r.next,f=yg(r,n);f===0?(r.next=null,a===null?Pl=c:a.next=c,c===null&&($s=a)):(a=r,(t!==0||(f&3)!==0)&&(Bl=!0)),r=c}hn!==0&&hn!==5||ho(t),Ea!==0&&(Ea=0)}function yg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Pt(f),T=1<<_,I=c[_];I===-1?((T&a)===0||(T&r)!==0)&&(c[_]=ie(T,n)):I<=n&&(t.expiredLanes|=T),f&=~T}if(n=ke,a=_e,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ke(r),Ts(a)){case 2:case 8:a=yt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return r=Mg.bind(null,t),a=se(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ke(r),t.callbackPriority=2,t.callbackNode=null,2}function Mg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zl()&&t.callbackNode!==a)return null;var r=_e;return r=gt(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(ig(t,r,n),yg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Mg.bind(null,t):null)}function Eg(t,n){if(zl())return null;ig(t,n,!0)}function xx(){Ux(function(){(De&6)!==0?se(dt,vx):Sg()})}function mf(){if(Ea===0){var t=Is;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Ea=t}return Ea}function Tg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jo(""+t)}function bg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Sx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Tg((c[xn]||null).action),_=r.submitter;_&&(n=(n=_[xn]||null)?Tg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Zo("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ea!==0){var I=_?bg(c,_):new FormData(c);Ou(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=_?bg(c,_):new FormData(c),Ou(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var gf=0;gf<Qc.length;gf++){var _f=Qc[gf],yx=_f.toLowerCase(),Mx=_f[0].toUpperCase()+_f.slice(1);fi(yx,"on"+Mx)}fi(np,"onAnimationEnd"),fi(ip,"onAnimationIteration"),fi(ap,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Iv,"onTransitionRun"),fi(Fv,"onTransitionStart"),fi(Hv,"onTransitionCancel"),fi(sp,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var T=r[_],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ht){Jo(ht)}c.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(T=r[_],I=T.instance,tt=T.currentTarget,T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ht){Jo(ht)}c.currentTarget=null,f=I}}}}function me(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var r=t+"__bubble";a.has(r)||(Rg(n,t,2,!1),a.add(r))}function vf(t,n,a){var r=0;n&&(r|=4),Rg(a,t,r,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function xf(t){if(!t[Il]){t[Il]=!0,Lt.forEach(function(a){a!=="selectionchange"&&(Ex.has(a)||vf(a,!1,t),vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Il]||(n[Il]=!0,vf("selectionchange",!1,n))}}function Rg(t,n,a,r){switch(n_(n)){case 2:var c=Qx;break;case 8:c=Jx;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Sf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var T=r.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=j(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue t}T=T.parentNode}}r=r.return}Ld(function(){var tt=f,ht=Pc(a),mt=[];t:{var st=rp.get(t);if(st!==void 0){var lt=Zo,Gt=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":lt=gv;break;case"focusin":Gt="focus",lt=Vc;break;case"focusout":Gt="blur",lt=Vc;break;case"beforeblur":case"afterblur":lt=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=xv;break;case np:case ip:case ap:lt=ov;break;case sp:lt=yv;break;case"scroll":case"scrollend":lt=nv;break;case"wheel":lt=Ev;break;case"copy":case"cut":case"paste":lt=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Bd;break;case"toggle":case"beforetoggle":lt=bv}var te=(n&4)!==0,Ie=!te&&(t==="scroll"||t==="scrollend"),Z=te?st!==null?st+"Capture":null:st;te=[];for(var k=tt,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Z===null||(pt=zr(k,Z),pt!=null&&te.push(mo(k,pt,$))),Ie)break;k=k.return}0<te.length&&(st=new lt(st,Gt,null,a,ht),mt.push({event:st,listeners:te}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",st&&a!==zc&&(Gt=a.relatedTarget||a.fromElement)&&(j(Gt)||Gt[ra]))break t;if((lt||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Gt=a.relatedTarget||a.toElement,lt=tt,Gt=Gt?j(Gt):null,Gt!==null&&(Ie=u(Gt),te=Gt.tag,Gt!==Ie||te!==5&&te!==27&&te!==6)&&(Gt=null)):(lt=null,Gt=tt),lt!==Gt)){if(te=zd,pt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=Bd,pt="onPointerLeave",Z="onPointerEnter",k="pointer"),Ie=lt==null?st:ot(lt),$=Gt==null?st:ot(Gt),st=new te(pt,k+"leave",lt,a,ht),st.target=Ie,st.relatedTarget=$,pt=null,j(ht)===tt&&(te=new te(Z,k+"enter",Gt,a,ht),te.target=$,te.relatedTarget=Ie,pt=te),Ie=pt,lt&&Gt)e:{for(te=Tx,Z=lt,k=Gt,$=0,pt=Z;pt;pt=te(pt))$++;pt=0;for(var $t=k;$t;$t=te($t))pt++;for(;0<$-pt;)Z=te(Z),$--;for(;0<pt-$;)k=te(k),pt--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){te=Z;break e}Z=te(Z),k=te(k)}te=null}else te=null;lt!==null&&Cg(mt,st,lt,te,!1),Gt!==null&&Ie!==null&&Cg(mt,Ie,Gt,te,!0)}}t:{if(st=tt?ot(tt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var be=jd;else if(kd(st))if(qd)be=zv;else{be=Nv;var Xt=Lv}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&Oc(tt.elementType)&&(be=jd):be=Ov;if(be&&(be=be(t,tt))){Xd(mt,be,a,ht);break t}Xt&&Xt(t,st,tt),t==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&fn(st,"number",st.value)}switch(Xt=tt?ot(tt):window,t){case"focusin":(kd(Xt)||Xt.contentEditable==="true")&&(Ds=Xt,Yc=tt,kr=null);break;case"focusout":kr=Yc=Ds=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,tp(mt,a,ht);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":tp(mt,a,ht)}var le;if(Xc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else ws?Gd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Id&&a.locale!=="ko"&&(ws||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&ws&&(le=Nd()):(oa=ht,Fc="value"in oa?oa.value:oa.textContent,ws=!0)),Xt=Fl(tt,ve),0<Xt.length&&(ve=new Pd(ve,t,null,a,ht),mt.push({event:ve,listeners:Xt}),le?ve.data=le:(le=Vd(a),le!==null&&(ve.data=le)))),(le=Rv?Cv(t,a):wv(t,a))&&(ve=Fl(tt,"onBeforeInput"),0<ve.length&&(Xt=new Pd("onBeforeInput","beforeinput",null,a,ht),mt.push({event:Xt,listeners:ve}),Xt.data=le)),Sx(mt,t,tt,a,ht)}Ag(mt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zr(t,a),c!=null&&r.unshift(mo(t,c,f)),c=zr(t,n),c!=null&&r.push(mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Tx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Cg(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var T=a,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===r)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,c?(tt=zr(a,f),tt!=null&&_.unshift(mo(a,tt,I))):c||(tt=zr(a,f),tt!=null&&_.push(mo(a,tt,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var bx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(bx,`
`).replace(Ax,"")}function Dg(t,n){return n=wg(n),wg(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||As(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&As(t,""+r);break;case"className":Le(t,"class",r);break;case"tabIndex":Le(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,a,r);break;case"style":Dd(t,r,f);break;case"data":if(n!=="object"){Le(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=jo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=jo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=zi);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=jo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),Ve(t,"popover",r);break;case"xlinkActuate":de(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":de(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":de(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":de(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":de(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":de(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":de(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":de(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":de(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tv.get(a)||a,Ve(t,a,r))}}function yf(t,n,a,r,c,f){switch(a){case"style":Dd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?As(t,r):(typeof r=="number"||typeof r=="bigint")&&As(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ve(t,a,r)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,_,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=_=c=null,I=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":_=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Be(t,n,r,ht,a,null)}}Un(t,f,T,I,tt,_,c,!1);return;case"select":me("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":r=T;default:Be(t,n,c,T,a,null)}n=f,a=_,t.multiple=!!r,n!=null?tn(t,!!r,n,!1):a!=null&&tn(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(t,n,_,T,a,null)}Ei(t,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,I,r,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<po.length;r++)me(po[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,tt,r,a,null)}return;default:if(Oc(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&yf(t,n,ht,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Be(t,n,T,r,a,null))}function Rx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,T=null,I=null,tt=null,ht=null;for(lt in a){var mt=a[lt];if(a.hasOwnProperty(lt)&&mt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=mt;default:r.hasOwnProperty(lt)||Be(t,n,lt,null,r,mt)}}for(var st in r){var lt=r[st];if(mt=a[st],r.hasOwnProperty(st)&&(lt!=null||mt!=null))switch(st){case"type":f=lt;break;case"name":c=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":_=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==mt&&Be(t,n,st,lt,r,mt)}}An(t,_,T,I,tt,ht,f,c);return;case"select":lt=_=T=st=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":st=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==I&&Be(t,n,c,f,r,I)}n=T,a=_,r=lt,st!=null?tn(t,!!a,st,!1):!!r!=!!a&&(n!=null?tn(t,!!a,n,!0):tn(t,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(t,n,T,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":st=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,_,c,r,f)}bs(t,st,lt);return;case"option":for(var Gt in a)st=a[Gt],a.hasOwnProperty(Gt)&&st!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Be(t,n,Gt,null,r,st));for(I in r)st=r[I],lt=a[I],r.hasOwnProperty(I)&&st!==lt&&(st!=null||lt!=null)&&(I==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":Be(t,n,I,st,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)st=a[te],a.hasOwnProperty(te)&&st!=null&&!r.hasOwnProperty(te)&&Be(t,n,te,null,r,st);for(tt in r)if(st=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&st!==lt&&(st!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Be(t,n,tt,st,r,lt)}return;default:if(Oc(n)){for(var Ie in a)st=a[Ie],a.hasOwnProperty(Ie)&&st!==void 0&&!r.hasOwnProperty(Ie)&&yf(t,n,Ie,void 0,r,st);for(ht in r)st=r[ht],lt=a[ht],!r.hasOwnProperty(ht)||st===lt||st===void 0&&lt===void 0||yf(t,n,ht,st,r,lt);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!r.hasOwnProperty(Z)&&Be(t,n,Z,null,r,st);for(mt in r)st=r[mt],lt=a[mt],!r.hasOwnProperty(mt)||st===lt||st==null&&lt==null||Be(t,n,mt,st,r,lt)}function Ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,T=c.duration;if(f&&T&&Ug(_)){for(_=0,T=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],tt=I.startTime;if(tt>T)break;var ht=I.transferSize,mt=I.initiatorType;ht&&Ug(mt)&&(I=I.responseEnd,_+=ht*(I<T?1:(T-tt)/(I-tt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mf=null,Ef=null;function Hl(t){return t.nodeType===9?t:t.ownerDocument}function Lg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Tf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bf=null;function wx(){var t=window.event;return t&&t.type==="popstate"?t===bf?!1:(bf=t,!0):(bf=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(t){return zg.resolve(null).then(t).catch(Lx)}:Og;function Lx(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Pg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ir(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[Va]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(t.ownerDocument.body);a=c}while(a);ir(n)}function Bg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Af(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Nx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Va])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Ox(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Ig(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Rf(t){return t.data==="$?"||t.data==="$~"}function Cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function zx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wf=null;function Fg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Hg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Gg(t,n,a){switch(n=Hl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var ci=new Map,Vg=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=K.d;K.d={f:Px,r:Bx,D:Ix,C:Fx,L:Hx,m:Gx,X:kx,S:Vx,M:Xx};function Px(){var t=Qi.f(),n=Ll();return t||n}function Bx(t){var n=rt(t);n!==null&&n.tag===5&&n.type==="form"?sm(n):Qi.r(t)}var tr=typeof document>"u"?null:document;function kg(t,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Vg.has(c)||(Vg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",t),xt(n),r.head.appendChild(n)))}}function Ix(t){Qi.D(t),kg("dns-prefetch",t,null)}function Fx(t,n){Qi.C(t,n),kg("preconnect",t,n)}function Hx(t,n,a){Qi.L(t,n,a);var r=tr;if(r&&t&&n){var c='link[rel="preload"][as="'+ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ge(a.imageSizes)+'"]')):c+='[href="'+ge(t)+'"]';var f=c;switch(n){case"style":f=er(t);break;case"script":f=nr(t)}ci.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(_o(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),Tn(n,"link",t),xt(n),r.head.appendChild(n)))}}function Gx(t,n){Qi.m(t,n);var a=tr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ge(r)+'"][href="'+ge(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(t)}if(!ci.has(f)&&(t=g({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),Tn(r,"link",t),xt(r),a.head.appendChild(r)}}}function Vx(t,n,a){Qi.S(t,n,a);var r=tr;if(r&&t){var c=Y(r).hoistableStyles,f=er(t);n=n||"default";var _=c.get(f);if(!_){var T={loading:0,preload:null};if(_=r.querySelector(_o(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Df(t,a);var I=_=r.createElement("link");xt(I),Tn(I,"link",t),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Vl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(f,_)}}}function kx(t,n){Qi.X(t,n);var a=tr;if(a&&t){var r=Y(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0},n),(n=ci.get(c))&&Uf(t,n),f=a.createElement("script"),xt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Xx(t,n){Qi.M(t,n);var a=tr;if(a&&t){var r=Y(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Uf(t,n),f=a.createElement("script"),xt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Xg(t,n,a,r){var c=(c=vt.current)?Gl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=Y(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=er(a.href);var f=Y(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(_o(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||jx(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=Y(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function er(t){return'href="'+ge(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function jg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function jx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),xt(n),t.head.appendChild(n))}function nr(t){return'[src="'+ge(t)+'"]'}function vo(t){return"script[async]"+t}function qg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ge(a.href)+'"]');if(r)return n.instance=r,xt(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),xt(r),Tn(r,"style",c),Vl(r,a.precedence,t),n.instance=r;case"stylesheet":c=er(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,xt(f),f;r=jg(a),(c=ci.get(c))&&Df(r,c),f=(t.ownerDocument||t).createElement("link"),xt(f);var _=f;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Tn(f,"link",r),n.state.loading|=4,Vl(f,a.precedence,t),n.instance=f;case"script":return f=nr(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,xt(c),c):(r=a,(c=ci.get(f))&&(r=g({},a),Uf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),xt(c),Tn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Vl(r,a.precedence,t));return n.instance}function Vl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var T=r[_];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var kl=null;function Wg(t,n,a){if(kl===null){var r=new Map,c=kl=new Map;c.set(a,r)}else c=kl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Va]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=r.get(_);T?T.push(f):r.set(_,[f])}}return r}function Yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function qx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=er(r.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Xl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xt(f);return}f=n.ownerDocument||n,r=jg(r),(c=ci.get(c))&&Df(r,c),f=f.createElement("link"),xt(f);var _=f;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),Tn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Xl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function Yx(t,n){return t.stylesheets&&t.count===0&&ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Lf===0&&(Lf=62500*Cx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Lf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jl=null;function ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jl=new Map,n.forEach(Zx,t),jl=null,Xl.call(t))}function Zx(t,n){if(!(n.state.loading&4)){var a=jl.get(t);if(a)var r=a.get(null);else{a=new Map,jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Xl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var xo={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Kx(t,n,a,r,c,f,_,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Kg(t,n,a,r,c,f,_,T,I,tt,ht,mt){return t=new Kx(t,n,a,_,I,tt,ht,mt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},pu(f),t}function Qg(t){return t?(t=Ns,t):Ns}function Jg(t,n,a,r,c,f){c=Qg(c),r.context===null?r.context=c:r.pendingContext=c,r=da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=pa(t,r,n),a!==null&&(Hn(a,t,n),Kr(a,t,n))}function $g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){$g(t,n),(t=t.alternate)&&$g(t,n)}function t_(t){if(t.tag===13||t.tag===31){var n=Wa(t,67108864);n!==null&&Hn(n,t,67108864),Nf(t,67108864)}}function e_(t){if(t.tag===13||t.tag===31){var n=Qn();n=Es(n);var a=Wa(t,n);a!==null&&Hn(a,t,n),Nf(t,n)}}var Wl=!0;function Qx(t,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Of(t,n,a,r)}finally{K.p=f,z.T=c}}function Jx(t,n,a,r){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Of(t,n,a,r)}finally{K.p=f,z.T=c}}function Of(t,n,a,r){if(Wl){var c=zf(r);if(c===null)Sf(t,n,r,Yl,a),i_(t,r);else if(tS(c,t,n,a,r))r.stopPropagation();else if(i_(t,r),n&4&&-1<$x.indexOf(t)){for(;c!==null;){var f=rt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-Pt(_);T.entanglements[1]|=I,_&=~I}Ri(f),(De&6)===0&&(Dl=E()+500,ho(0))}}break;case 31:case 13:T=Wa(f,2),T!==null&&Hn(T,f,2),Ll(),Nf(f,2)}if(f=zf(r),f===null&&Sf(t,n,r,Yl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Sf(t,n,r,null,a)}}function zf(t){return t=Pc(t),Pf(t)}var Yl=null;function Pf(t){if(Yl=null,t=j(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yl=t,null}function n_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case dt:return 2;case yt:return 8;case ut:case Wt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Bf=!1,ba=null,Aa=null,Ra=null,So=new Map,yo=new Map,Ca=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=rt(n),n!==null&&t_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function tS(t,n,a,r,c){switch(n){case"focusin":return ba=Mo(ba,t,n,a,r,c),!0;case"dragenter":return Aa=Mo(Aa,t,n,a,r,c),!0;case"mouseover":return Ra=Mo(Ra,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Mo(So.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Mo(yo.get(f)||null,t,n,a,r,c)),!0}return!1}function a_(t){var n=j(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Nr(t.priority,function(){e_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Nr(t.priority,function(){e_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);zc=r,a.target.dispatchEvent(r),zc=null}else return n=rt(a),n!==null&&t_(n),t.blockedOn=a,!1;n.shift()}return!0}function s_(t,n,a){Zl(t)&&a.delete(n)}function eS(){Bf=!1,ba!==null&&Zl(ba)&&(ba=null),Aa!==null&&Zl(Aa)&&(Aa=null),Ra!==null&&Zl(Ra)&&(Ra=null),So.forEach(s_),yo.forEach(s_)}function Kl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,eS)))}var Ql=null;function r_(t){Ql!==t&&(Ql=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===t&&(Ql=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Pf(r||a)===null)continue;break}var f=rt(a);f!==null&&(t.splice(n,3),n-=3,Ou(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ir(t){function n(I){return Kl(I,t)}ba!==null&&Kl(ba,t),Aa!==null&&Kl(Aa,t),Ra!==null&&Kl(Ra,t),So.forEach(n),yo.forEach(n);for(var a=0;a<Ca.length;a++){var r=Ca[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)a_(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[xn]||null;if(typeof f=="function")_||r_(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[xn]||null)T=_.formAction;else if(Pf(c)!==null)continue}else T=_.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),r_(a)}}}function o_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function If(t){this._internalRoot=t}Jl.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();Jg(a,r,t,n,null,null)},Jl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jg(t.current,2,null,t,null,null),Ll(),n[ra]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ga();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&a_(t)}};var l_=e.version;if(l_!=="19.2.8")throw Error(s(527,l_,"19.2.8"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var nS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{bt=$l.inject(nS),wt=$l}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=mm,f=gm,_=_m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Kg(t,1,!1,null,null,a,r,null,c,f,_,o_),t[ra]=n.current,xf(t),new If(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=mm,_=gm,T=_m,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Kg(t,1,!0,n,a??null,r,c,I,f,_,T,o_),n.context=Qg(null),a=n.current,r=Qn(),r=Es(r),c=da(r),c.callback=null,pa(a,c,r),a=r,n.current.lanes=a,Dn(n,a),Ri(n),t[ra]=n.current,xf(t),new Jl(n)},To.version="19.2.8",To}var v_;function hS(){if(v_)return Gf.exports;v_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=fS(),Gf.exports}var dS=hS();const pS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y0=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();var mS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const gS=dn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>dn.createElement("svg",{ref:m,...mS,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:y0("lucide",l),...d},[...h.map(([p,x])=>dn.createElement(p,x)),...Array.isArray(u)?u:[u]]));const an=(o,e)=>{const i=dn.forwardRef(({className:s,...l},u)=>dn.createElement(gS,{ref:u,iconNode:e,className:y0(`lucide-${pS(o)}`,s),...l}));return i.displayName=`${o}`,i};const xr=an("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const _S=an("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const vS=an("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const xS=an("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);const SS=an("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);const yS=an("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);const MS=an("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const ES=an("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);const TS=an("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const bS=an("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);const AS=an("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const x_=an("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);const S_=an("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);const RS=an("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);const CS=an("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);const wS=an("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);const DS=an("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);const y_=an("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);const US=an("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);const jf=an("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);const qf=an("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);const md="179",LS=0,M_=1,NS=2,M0=1,OS=2,ia=3,Fa=0,kn=1,_i=2,Ba=0,yr=1,E_=2,T_=3,b_=4,zS=5,ps=100,PS=101,BS=102,IS=103,FS=104,HS=200,GS=201,VS=202,kS=203,Rh=204,Ch=205,XS=206,jS=207,qS=208,WS=209,YS=210,ZS=211,KS=212,QS=213,JS=214,wh=0,Dh=1,Uh=2,Tr=3,Lh=4,Nh=5,Oh=6,zh=7,E0=0,$S=1,ty=2,Ia=0,ey=1,ny=2,iy=3,ay=4,sy=5,ry=6,oy=7,T0=300,br=301,Ar=302,Ph=303,Bh=304,Dc=306,Ih=1e3,gs=1001,Fh=1002,yi=1003,ly=1004,tc=1005,wi=1006,Wf=1007,_s=1008,Li=1009,b0=1010,A0=1011,No=1012,gd=1013,xs=1014,aa=1015,Io=1016,_d=1017,vd=1018,Oo=1020,R0=35902,C0=1021,w0=1022,xi=1023,zo=1026,Po=1027,D0=1028,xd=1029,U0=1030,Sd=1031,yd=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Hh=35840,Gh=35841,Vh=35842,kh=35843,Xh=36196,jh=37492,qh=37496,Wh=37808,Yh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,bc=36492,od=36494,ld=36495,L0=36283,cd=36284,ud=36285,fd=36286,cy=3200,uy=3201,N0=0,fy=1,Pa="",Vn="srgb",Rr="srgb-linear",Cc="linear",Fe="srgb",ar=7680,A_=519,hy=512,dy=513,py=514,O0=515,my=516,gy=517,_y=518,vy=519,R_=35044,C_="300 es",Di=2e3,wc=2001;class Dr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=Math.PI/180,hd=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function xy(o,e){return(o%e+e)%e}function Zf(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ho{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(g!==R||m!==S||p!==M||x!==A){let y=1-d;const v=m*S+p*M+x*A+g*R,G=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const H=Math.sqrt(P),V=Math.atan2(H,v*G);y=Math.sin(y*V)/H,d=Math.sin(d*V)/H}const U=d*G;if(m=m*y+S*U,p=p*y+M*U,x=x*y+A*U,g=g*y+R*U,y===1-d){const H=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=H,p*=H,x*=H,g*=H}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+x*g+m*M-p*S,e[i+1]=m*A+x*S+p*g-d*M,e[i+2]=p*A+x*M+d*S-m*g,e[i+3]=x*A-d*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(u/2),S=m(s/2),M=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*x*g+p*M*A,this._y=p*M*g-S*x*A,this._z=p*x*A+S*M*g,this._w=p*x*g-S*M*A;break;case"YXZ":this._x=S*x*g+p*M*A,this._y=p*M*g-S*x*A,this._z=p*x*A-S*M*g,this._w=p*x*g+S*M*A;break;case"ZXY":this._x=S*x*g-p*M*A,this._y=p*M*g+S*x*A,this._z=p*x*A+S*M*g,this._w=p*x*g-S*M*A;break;case"ZYX":this._x=S*x*g-p*M*A,this._y=p*M*g+S*x*A,this._z=p*x*A-S*M*g,this._w=p*x*g+S*M*A;break;case"YZX":this._x=S*x*g+p*M*A,this._y=p*M*g+S*x*A,this._z=p*x*A-S*M*g,this._w=p*x*g-S*M*A;break;case"XZY":this._x=S*x*g-p*M*A,this._y=p*M*g-S*x*A,this._z=p*x*A+S*M*g,this._w=p*x*g+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-s*p,this._z=u*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),g=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=h*g+this._w*S,this._x=s*g+this._x*S,this._y=l*g+this._y*S,this._z=u*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,s=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),x=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*x,this.y=s+m*x+d*p-u*g,this.z=l+m*g+u*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new it,w_=new Ho;class ce{constructor(e,i,s,l,u,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],M=s[5],A=s[8],R=l[0],y=l[3],v=l[6],G=l[1],P=l[4],U=l[7],H=l[2],V=l[5],B=l[8];return u[0]=h*R+d*G+m*H,u[3]=h*y+d*P+m*V,u[6]=h*v+d*U+m*B,u[1]=p*R+x*G+g*H,u[4]=p*y+x*P+g*V,u[7]=p*v+x*U+g*B,u[2]=S*R+M*G+A*H,u[5]=S*y+M*P+A*V,u[8]=S*v+M*U+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-s*u*x+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=x*h-d*p,S=d*m-x*u,M=p*u-h*m,A=i*g+s*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=g*R,e[1]=(l*p-x*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(x*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(h*i-s*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ce;function z0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Sy(){const o=Bo("canvas");return o.style.display="block",o}const D_={};function Mr(o){o in D_||(D_[o]=!0,console.warn(o))}function yy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const U_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Er(l.r),l.g=Er(l.g),l.b=Er(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:e,whitePoint:s,transfer:Cc,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:s,transfer:Fe,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),o}const Re=My();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Er(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class Ey{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{sr===void 0&&(sr=Bo("canvas")),sr.width=e.width,sr.height=e.height;const l=sr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=sr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bo("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=sa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Jf(l[h].image)):u.push(Jf(l[h]))}else u=Jf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ey.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let by=0;const $f=new it;class On extends Dr{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=gs,l=gs,u=wi,h=_s,d=xi,m=Li,p=On.DEFAULT_ANISOTROPY,x=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Fo(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=T0;On.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],x=m[4],g=m[8],S=m[1],M=m[5],A=m[9],R=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(M+1)/2,H=(v+1)/2,V=(x+S)/4,B=(g+R)/4,W=(A+y)/4;return P>U&&P>H?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=V/s,u=B/s):U>H?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=V/l,u=W/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=B/u,l=W/u),this.set(s,l,u,i),this}let G=Math.sqrt((y-A)*(y-A)+(g-R)*(g-R)+(S-x)*(S-x));return Math.abs(G)<.001&&(G=1),this.x=(y-A)/G,this.y=(g-R)/G,this.z=(S-x)/G,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ay extends Dr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new On(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Md(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends Ay{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class P0 extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ry extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),nc.subVectors(this.max,Ao),rr.subVectors(e.a,Ao),or.subVectors(e.b,Ao),lr.subVectors(e.c,Ao),Da.subVectors(or,rr),Ua.subVectors(lr,or),rs.subVectors(rr,lr);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-rs.z,rs.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,rs.z,0,-rs.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-rs.y,rs.x,0];return!th(i,rr,or,lr,nc)||(i=[1,0,0,0,1,0,0,0,1],!th(i,rr,or,lr,nc))?!1:(ic.crossVectors(Da,Ua),i=[ic.x,ic.y,ic.z],th(i,rr,or,lr,nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new it,new it,new it,new it,new it,new it,new it,new it],pi=new it,ec=new Go,rr=new it,or=new it,lr=new it,Da=new it,Ua=new it,rs=new it,Ao=new it,nc=new it,ic=new it,os=new it;function th(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){os.fromArray(o,u);const d=l.x*Math.abs(os.x)+l.y*Math.abs(os.y)+l.z*Math.abs(os.z),m=e.dot(os),p=i.dot(os),x=s.dot(os);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const Cy=new Go,Ro=new it,eh=new it;class Ed{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Cy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ro,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(eh)),this.expandByPoint(Ro.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new it,nh=new it,ac=new it,La=new it,ih=new it,sc=new it,ah=new it;class wy{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){nh.copy(e).add(i).multiplyScalar(.5),ac.copy(i).sub(e).normalize(),La.copy(this.origin).sub(nh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(ac),d=La.dot(this.direction),m=-La.dot(ac),p=La.lengthSq(),x=Math.abs(1-h*h);let g,S,M,A;if(x>0)if(g=h*m-d,S=h*d-m,A=u*x,g>=0)if(S>=-A)if(S<=A){const R=1/x;g*=R,S*=R,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-h*u+d)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(h*u+d)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=h>0?-u:u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(nh).addScaledVector(ac,S),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,s,l,u){ih.subVectors(i,e),sc.subVectors(s,e),ah.crossVectors(ih,sc);let h=this.direction.dot(ah),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,e);const m=d*this.direction.dot(sc.crossVectors(La,sc));if(m<0)return null;const p=d*this.direction.dot(ih.cross(La));if(p<0||m+p>h)return null;const x=-d*La.dot(ah);return x<0?null:this.at(x/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,s,l,u,h,d,m,p,x,g,S,M,A,R,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,x,g,S,M,A,R,y)}set(e,i,s,l,u,h,d,m,p,x,g,S,M,A,R,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=S,v[3]=M,v[7]=A,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/cr.setFromMatrixColumn(e,0).length(),u=1/cr.setFromMatrixColumn(e,1).length(),h=1/cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=h*x,M=h*g,A=d*x,R=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+A*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,M=m*g,A=p*x,R=p*g;i[0]=S+R*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=M*d-A,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,M=m*g,A=p*x,R=p*g;i[0]=S-R*d,i[4]=-h*g,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*x,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,M=h*g,A=d*x,R=d*g;i[0]=m*x,i[4]=A*p-M,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*x,i[4]=R-S*g,i[8]=A*g+M,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=M*g+A,i[10]=S-R*g}else if(e.order==="XZY"){const S=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+R,i[5]=h*x,i[9]=M*g-A,i[2]=A*g-M,i[6]=d*x,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Na.crossVectors(s,Jn),Na.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Na.crossVectors(s,Jn)),Na.normalize(),rc.crossVectors(Jn,Na),l[0]=Na.x,l[4]=rc.x,l[8]=Jn.x,l[1]=Na.y,l[5]=rc.y,l[9]=Jn.y,l[2]=Na.z,l[6]=rc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],M=s[13],A=s[2],R=s[6],y=s[10],v=s[14],G=s[3],P=s[7],U=s[11],H=s[15],V=l[0],B=l[4],W=l[8],w=l[12],C=l[1],D=l[5],J=l[9],nt=l[13],ct=l[2],ft=l[6],z=l[10],K=l[14],q=l[3],St=l[7],Tt=l[11],O=l[15];return u[0]=h*V+d*C+m*ct+p*q,u[4]=h*B+d*D+m*ft+p*St,u[8]=h*W+d*J+m*z+p*Tt,u[12]=h*w+d*nt+m*K+p*O,u[1]=x*V+g*C+S*ct+M*q,u[5]=x*B+g*D+S*ft+M*St,u[9]=x*W+g*J+S*z+M*Tt,u[13]=x*w+g*nt+S*K+M*O,u[2]=A*V+R*C+y*ct+v*q,u[6]=A*B+R*D+y*ft+v*St,u[10]=A*W+R*J+y*z+v*Tt,u[14]=A*w+R*nt+y*K+v*O,u[3]=G*V+P*C+U*ct+H*q,u[7]=G*B+P*D+U*ft+H*St,u[11]=G*W+P*J+U*z+H*Tt,u[15]=G*w+P*nt+U*K+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],g=e[6],S=e[10],M=e[14],A=e[3],R=e[7],y=e[11],v=e[15];return A*(+u*m*g-l*p*g-u*d*S+s*p*S+l*d*M-s*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*x-u*m*x)+y*(+i*p*g-i*d*M-u*h*g+s*h*M+u*d*x-s*p*x)+v*(-l*d*x-i*m*g+i*d*S+l*h*g-s*h*S+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=e[9],S=e[10],M=e[11],A=e[12],R=e[13],y=e[14],v=e[15],G=g*y*p-R*S*p+R*m*M-d*y*M-g*m*v+d*S*v,P=A*S*p-x*y*p-A*m*M+h*y*M+x*m*v-h*S*v,U=x*R*p-A*g*p+A*d*M-h*R*M-x*d*v+h*g*v,H=A*g*m-x*R*m-A*d*S+h*R*S+x*d*y-h*g*y,V=i*G+s*P+l*U+u*H;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/V;return e[0]=G*B,e[1]=(R*S*u-g*y*u-R*l*M+s*y*M+g*l*v-s*S*v)*B,e[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*v+s*m*v)*B,e[3]=(g*m*u-d*S*u-g*l*p+s*S*p+d*l*M-s*m*M)*B,e[4]=P*B,e[5]=(x*y*u-A*S*u+A*l*M-i*y*M-x*l*v+i*S*v)*B,e[6]=(A*m*u-h*y*u-A*l*p+i*y*p+h*l*v-i*m*v)*B,e[7]=(h*S*u-x*m*u+x*l*p-i*S*p-h*l*M+i*m*M)*B,e[8]=U*B,e[9]=(A*g*u-x*R*u-A*s*M+i*R*M+x*s*v-i*g*v)*B,e[10]=(h*R*u-A*d*u+A*s*p-i*R*p-h*s*v+i*d*v)*B,e[11]=(x*d*u-h*g*u-x*s*p+i*g*p+h*s*M-i*d*M)*B,e[12]=H*B,e[13]=(x*R*l-A*g*l+A*s*S-i*R*S-x*s*y+i*g*y)*B,e[14]=(A*d*l-h*R*l-A*s*m+i*R*m+h*s*y-i*d*y)*B,e[15]=(h*g*l-x*d*l+x*s*m-i*g*m-h*s*S+i*d*S)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,x=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,g=d+d,S=u*p,M=u*x,A=u*g,R=h*x,y=h*g,v=d*g,G=m*p,P=m*x,U=m*g,H=s.x,V=s.y,B=s.z;return l[0]=(1-(R+v))*H,l[1]=(M+U)*H,l[2]=(A-P)*H,l[3]=0,l[4]=(M-U)*V,l[5]=(1-(S+v))*V,l[6]=(y+G)*V,l[7]=0,l[8]=(A+P)*B,l[9]=(y-G)*B,l[10]=(1-(S+R))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const h=cr.set(l[4],l[5],l[6]).length(),d=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,x=1/h,g=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=x,mi.elements[5]*=x,mi.elements[6]*=x,mi.elements[8]*=g,mi.elements[9]*=g,mi.elements[10]*=g,i.setFromRotationMatrix(mi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Di,m=!1){const p=this.elements,x=2*u/(i-e),g=2*u/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let A,R;if(m)A=u/(h-u),R=h*u/(h-u);else if(d===Di)A=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===wc)A=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Di,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let A,R;if(m)A=1/(h-u),R=h/(h-u);else if(d===Di)A=-2/(h-u),R=-(h+u)/(h-u);else if(d===wc)A=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const cr=new it,mi=new $e,Dy=new it(0,0,0),Uy=new it(1,1,1),Na=new it,rc=new it,Jn=new it,N_=new $e,O_=new Ho;class Ni{constructor(e=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class B0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ly=0;const z_=new it,ur=new Ho,ta=new $e,oc=new it,Co=new it,Ny=new it,Oy=new Ho,P_=new it(1,0,0),B_=new it(0,1,0),I_=new it(0,0,1),F_={type:"added"},zy={type:"removed"},fr={type:"childadded",child:null},sh={type:"childremoved",child:null};class bn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new it,i=new Ni,s=new Ho,l=new it(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ce}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(I_,e)}translateOnAxis(e,i){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(I_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?oc.copy(e):oc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,oc,this.up):ta.lookAt(oc,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(ta),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(zy),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),g=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new it(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new it,ea=new it,rh=new it,na=new it,hr=new it,dr=new it,H_=new it,oh=new it,lh=new it,ch=new it,uh=new He,fh=new He,hh=new He;class vi{constructor(e=new it,i=new it,s=new it){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){gi.subVectors(l,i),ea.subVectors(s,i),rh.subVectors(e,i);const h=gi.dot(gi),d=gi.dot(ea),m=gi.dot(rh),p=ea.dot(ea),x=ea.dot(rh),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-d*x)*S,A=(h*x-d*m)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return uh.setScalar(0),fh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(uh,u.x),h.addScaledVector(fh,u.y),h.addScaledVector(hh,u.z),h}static isFrontFacing(e,i,s,l){return gi.subVectors(s,i),ea.subVectors(e,i),gi.cross(ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),gi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;hr.subVectors(l,s),dr.subVectors(u,s),oh.subVectors(e,s);const m=hr.dot(oh),p=dr.dot(oh);if(m<=0&&p<=0)return i.copy(s);lh.subVectors(e,l);const x=hr.dot(lh),g=dr.dot(lh);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(hr,h);ch.subVectors(e,u);const M=hr.dot(ch),A=dr.dot(ch);if(A>=0&&M<=A)return i.copy(u);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(dr,d);const y=x*A-M*g;if(y<=0&&g-x>=0&&M-A>=0)return H_.subVectors(u,l),d=(g-x)/(g-x+(M-A)),i.copy(l).addScaledVector(H_,d);const v=1/(y+R+S);return h=R*v,d=S*v,i.copy(s).addScaledVector(hr,h).addScaledVector(dr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},lc={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Re.workingColorSpace){if(e=xy(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=dh(h,u,e+1/3),this.g=dh(h,u,e),this.b=dh(h,u,e-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(e,i=Vn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Vn){const s=I0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Re.workingToColorSpace(wn.copy(this),e),Math.round(ye(wn.r*255,0,255))*65536+Math.round(ye(wn.g*255,0,255))*256+Math.round(ye(wn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Re.workingColorSpace){return Re.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Vn){Re.workingToColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==Vn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(lc);const s=Zf(Oa.h,lc.h,i),l=Zf(Oa.s,lc.s,i),u=Zf(Oa.l,lc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ce;Ce.NAMES=I0;let Py=0;class Vo extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=yr,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(s.blending=this.blending),this.side!==Fa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Td extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new it,cc=new we;let By=0;class Ui{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:By++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=R_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(e),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}}class F0 extends Ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class H0 extends Ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class vs extends Ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Iy=0;const ui=new $e,ph=new bn,pr=new it,$n=new Go,wo=new Go,vn=new it;class ys extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?H0:F0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ce().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,s){return ui.makeTranslation(e,i,s),this.applyMatrix4(ui),this}scale(e,i,s){return ui.makeScale(e,i,s),this.applyMatrix4(ui),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vs(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors($n.min,wo.min),$n.expandByPoint(vn),vn.addVectors($n.max,wo.max),$n.expandByPoint(vn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)vn.fromBufferAttribute(d,p),m&&(pr.fromBufferAttribute(e,p),vn.add(pr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new it,m[W]=new it;const p=new it,x=new it,g=new it,S=new we,M=new we,A=new we,R=new it,y=new it;function v(W,w,C){p.fromBufferAttribute(s,W),x.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),S.fromBufferAttribute(u,W),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),x.sub(p),g.sub(p),M.sub(S),A.sub(S);const D=1/(M.x*A.y-A.x*M.y);isFinite(D)&&(R.copy(x).multiplyScalar(A.y).addScaledVector(g,-M.y).multiplyScalar(D),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(D),d[W].add(R),d[w].add(R),d[C].add(R),m[W].add(y),m[w].add(y),m[C].add(y))}let G=this.groups;G.length===0&&(G=[{start:0,count:e.count}]);for(let W=0,w=G.length;W<w;++W){const C=G[W],D=C.start,J=C.count;for(let nt=D,ct=D+J;nt<ct;nt+=3)v(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const P=new it,U=new it,H=new it,V=new it;function B(W){H.fromBufferAttribute(l,W),V.copy(H);const w=d[W];P.copy(w),P.sub(H.multiplyScalar(H.dot(w))).normalize(),U.crossVectors(V,w);const D=U.dot(m[W])<0?-1:1;h.setXYZW(W,P.x,P.y,P.z,D)}for(let W=0,w=G.length;W<w;++W){const C=G[W],D=C.start,J=C.count;for(let nt=D,ct=D+J;nt<ct;nt+=3)B(e.getX(nt+0)),B(e.getX(nt+1)),B(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new it,u=new it,h=new it,d=new it,m=new it,p=new it,x=new it,g=new it;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),x.subVectors(h,u),g.subVectors(l,u),x.cross(g),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,u),g.subVectors(l,u),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,g=d.normalized,S=new p.constructor(m.length*x);let M=0,A=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*x;for(let v=0;v<x;v++)S[A++]=p[M++]}return new Ui(S,x,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ys,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,g=p.length;x<g;x++){const S=p[x],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],g=u[p];for(let S=0,M=g.length;S<M;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new $e,ls=new wy,uc=new Ed,V_=new it,fc=new it,hc=new it,dc=new it,mh=new it,pc=new it,k_=new it,mc=new it;class Si extends bn{constructor(e=new ys,i=new Td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){pc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],g=u[m];x!==0&&(mh.fromBufferAttribute(g,e),h?pc.addScaledVector(mh,x):pc.addScaledVector(mh.sub(i),x))}i.add(pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(u),ls.copy(e.ray).recast(e.near),!(uc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(uc,V_)===null||ls.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(G_.copy(u).invert(),ls.copy(e.ray).applyMatrix4(G_),!(s.boundingBox!==null&&ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ls)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const y=S[A],v=h[y.materialIndex],G=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=G,H=P;U<H;U+=3){const V=d.getX(U),B=d.getX(U+1),W=d.getX(U+2);l=gc(this,v,e,s,p,x,g,V,B,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=A,v=R;y<v;y+=3){const G=d.getX(y),P=d.getX(y+1),U=d.getX(y+2);l=gc(this,h,e,s,p,x,g,G,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const y=S[A],v=h[y.materialIndex],G=Math.max(y.start,M.start),P=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=G,H=P;U<H;U+=3){const V=U,B=U+1,W=U+2;l=gc(this,v,e,s,p,x,g,V,B,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=A,v=R;y<v;y+=3){const G=y,P=y+1,U=y+2;l=gc(this,h,e,s,p,x,g,G,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Fy(o,e,i,s,l,u,h,d){let m;if(e.side===kn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;mc.copy(d),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function gc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,fc),o.getVertexPosition(m,hc),o.getVertexPosition(p,dc);const x=Fy(o,e,i,s,fc,hc,dc,k_);if(x){const g=new it;vi.getBarycoord(k_,fc,hc,dc,g),l&&(x.uv=vi.getInterpolatedAttribute(l,d,m,p,g,new we)),u&&(x.uv1=vi.getInterpolatedAttribute(u,d,m,p,g,new we)),h&&(x.normal=vi.getInterpolatedAttribute(h,d,m,p,g,new it),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new it,materialIndex:0};vi.getNormal(fc,hc,dc,S.normal),x.face=S,x.barycoord=g}return x}class ko extends ys{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],g=[];let S=0,M=0;A("z","y","x",-1,-1,s,i,e,h,u,0),A("z","y","x",1,-1,s,i,-e,h,u,1),A("x","z","y",1,1,e,s,i,l,h,2),A("x","z","y",1,-1,e,s,-i,l,h,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new vs(p,3)),this.setAttribute("normal",new vs(x,3)),this.setAttribute("uv",new vs(g,2));function A(R,y,v,G,P,U,H,V,B,W,w){const C=U/B,D=H/W,J=U/2,nt=H/2,ct=V/2,ft=B+1,z=W+1;let K=0,q=0;const St=new it;for(let Tt=0;Tt<z;Tt++){const O=Tt*D-nt;for(let at=0;at<ft;at++){const Et=at*C-J;St[R]=Et*G,St[y]=O*P,St[v]=ct,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[v]=V>0?1:-1,x.push(St.x,St.y,St.z),g.push(at/B),g.push(1-Tt/W),K+=1}}for(let Tt=0;Tt<W;Tt++)for(let O=0;O<B;O++){const at=S+O+ft*Tt,Et=S+O+ft*(Tt+1),Rt=S+(O+1)+ft*(Tt+1),Q=S+(O+1)+ft*Tt;m.push(at,Et,Q),m.push(Et,Rt,Q),q+=6}d.addGroup(M,q,w),M+=q,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)e[l]=s[l]}return e}function Hy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function G0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const Gy={clone:Cr,merge:Nn};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class V0 extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new it,X_=new we,j_=new we;class ti extends V0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,X_,j_),i.subVectors(j_,X_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const mr=-90,gr=1;class Xy extends bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ti(mr,gr,e,i);l.layers=this.layers,this.add(l);const u=new ti(mr,gr,e,i);u.layers=this.layers,this.add(u);const h=new ti(mr,gr,e,i);h.layers=this.layers,this.add(h);const d=new ti(mr,gr,e,i);d.layers=this.layers,this.add(d);const m=new ti(mr,gr,e,i);m.layers=this.layers,this.add(m);const p=new ti(mr,gr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Di)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,S,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class k0 extends On{constructor(e=[],i=br,s,l,u,h,d,m,p,x){super(e,i,s,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jy extends Ss{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new k0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new Si(l,u),d=i.minFilter;return i.minFilter===_s&&(i.minFilter=wi),new Xy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class Uo extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qy={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),v=this._getHandJoint(p,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Uo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Wy extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _h=new it,Yy=new it,Zy=new ce;class hs{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=_h.subVectors(s,i).cross(Yy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(_h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Zy.getNormalMatrix(e),l=this.coplanarPoint(_h).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Ed,Ky=new we(.5,.5),_c=new it;class bd{constructor(e=new hs,i=new hs,s=new hs,l=new hs,u=new hs,h=new hs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Di,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],g=u[5],S=u[6],M=u[7],A=u[8],R=u[9],y=u[10],v=u[11],G=u[12],P=u[13],U=u[14],H=u[15];if(l[0].setComponents(p-h,M-x,v-A,H-G).normalize(),l[1].setComponents(p+h,M+x,v+A,H+G).normalize(),l[2].setComponents(p+d,M+g,v+R,H+P).normalize(),l[3].setComponents(p-d,M-g,v-R,H-P).normalize(),s)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,M-S,v-y,H-U).normalize();else if(l[4].setComponents(p-m,M-S,v-y,H-U).normalize(),i===Di)l[5].setComponents(p+m,M+S,v+y,H+U).normalize();else if(i===wc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const i=Ky.distanceTo(e.center);return cs.radius=.7071067811865476+i,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(_c.x=l.normal.x>0?e.max.x:e.min.x,_c.y=l.normal.y>0?e.max.y:e.min.y,_c.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends On{constructor(e,i,s=xs,l,u,h,d=yi,m=yi,p,x=zo,g=1){if(x!==zo&&x!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wr extends ys{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=e/d,S=i/m,M=[],A=[],R=[],y=[];for(let v=0;v<x;v++){const G=v*S-h;for(let P=0;P<p;P++){const U=P*g-u;A.push(U,-G,0),R.push(0,0,1),y.push(P/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let G=0;G<d;G++){const P=G+p*v,U=G+p*(v+1),H=G+1+p*(v+1),V=G+1+p*v;M.push(P,U,V),M.push(U,H,V)}this.setIndex(M),this.setAttribute("position",new vs(A,3)),this.setAttribute("normal",new vs(R,3)),this.setAttribute("uv",new vs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qy extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N0,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jy extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $y extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tM{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(x){d++,u===!1&&l.onStart!==void 0&&l.onStart(x,h,d),u=!0},this.itemEnd=function(x){h++,l.onProgress!==void 0&&l.onProgress(x,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return p.push(x,g),this},this.removeHandler=function(x){const g=p.indexOf(x);return g!==-1&&p.splice(g,2),this},this.getHandler=function(x){for(let g=0,S=p.length;g<S;g+=2){const M=p[g],A=p[g+1];if(M.global&&(M.lastIndex=0),M.test(x))return A}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const eM=new tM;class Ad{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ad.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r=new WeakMap;class nM extends Ad{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=vh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0);else{let g=_r.get(h);g===void 0&&(g=[],_r.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=Bo("img");function m(){x(),i&&i(this);const g=_r.get(this)||[];for(let S=0;S<g.length;S++){const M=g[S];M.onLoad&&M.onLoad(this)}_r.delete(this),u.manager.itemEnd(e)}function p(g){x(),l&&l(g),vh.remove(`image:${e}`);const S=_r.get(this)||[];for(let M=0;M<S.length;M++){const A=S[M];A.onError&&A.onError(g)}_r.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function x(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),vh.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class iM extends Ad{constructor(e){super(e)}load(e,i,s,l){const u=new On,h=new nM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}class Rd extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class aM extends Rd{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const xh=new $e,q_=new it,W_=new it;class j0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;q_.setFromMatrixPosition(e.matrixWorld),i.position.copy(q_),W_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(W_),i.updateMatrixWorld(),xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Y_=new $e,Do=new it,Sh=new it;class sM extends j0{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new it(1,0,0),new it(-1,0,0),new it(0,0,1),new it(0,0,-1),new it(0,1,0),new it(0,-1,0)],this._cubeUps=[new it(0,1,0),new it(0,1,0),new it(0,1,0),new it(0,1,0),new it(0,0,1),new it(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),s.position.copy(Do),Sh.copy(s.position),Sh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Sh),s.updateMatrixWorld(),l.makeTranslation(-Do.x,-Do.y,-Do.z),Y_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Y_,s.coordinateSystem,s.reversedDepth)}}class rM extends Rd{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new sM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class q0 extends V0{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oM extends j0{constructor(){super(new q0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lM extends Rd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cM extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Z_(o,e,i,s){const l=uM(s);switch(i){case C0:return o*e;case D0:return o*e/l.components*l.byteLength;case xd:return o*e/l.components*l.byteLength;case U0:return o*e*2/l.components*l.byteLength;case Sd:return o*e*2/l.components*l.byteLength;case w0:return o*e*3/l.components*l.byteLength;case xi:return o*e*4/l.components*l.byteLength;case yd:return o*e*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:case kh:return Math.max(o,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(o,8)*Math.max(e,8)/2;case Xh:case jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bc:case od:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*16;case L0:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ud:case fd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uM(o){switch(o){case Li:case b0:return{byteLength:1,components:1};case No:case A0:case Io:return{byteLength:2,components:1};case _d:case vd:return{byteLength:2,components:4};case xs:case gd:case aa:return{byteLength:4,components:1};case R0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);function W0(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function fM(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,x);else{g.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<g.length;M++){const A=g[S],R=g[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,g[S]=R)}g.length=S+1;for(let M=0,A=g.length;M<A;M++){const R=g[M];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
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
#endif`,pM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
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
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bM=`#ifdef USE_IRIDESCENCE
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
#endif`,AM=`#ifdef USE_BUMPMAP
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BM=`vec3 transformedNormal = objectNormal;
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
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
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
}`,tE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
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
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
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
#endif`,uE=`struct PhysicalMaterial {
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
}`,fE=`
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
#endif`,hE=`#if defined( RE_IndirectDiffuse )
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yE=`#if defined( USE_POINTS_UV )
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
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
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
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KE=`float getShadowMask() {
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
}`,QE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,$E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
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
}`,T1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,w1=`#define MATCAP
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
}`,D1=`#define MATCAP
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
}`,U1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,O1=`#define PHONG
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
}`,z1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,B1=`#define TOON
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
}`,I1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 color;
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
}`,k1=`uniform float rotation;
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
}`,X1=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:hM,alphahash_pars_fragment:dM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:gM,alphatest_pars_fragment:_M,aomap_fragment:vM,aomap_pars_fragment:xM,batching_pars_vertex:SM,batching_vertex:yM,begin_vertex:MM,beginnormal_vertex:EM,bsdfs:TM,iridescence_fragment:bM,bumpmap_pars_fragment:AM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:DM,color_fragment:UM,color_pars_fragment:LM,color_pars_vertex:NM,color_vertex:OM,common:zM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:BM,displacementmap_pars_vertex:IM,displacementmap_vertex:FM,emissivemap_fragment:HM,emissivemap_pars_fragment:GM,colorspace_fragment:VM,colorspace_pars_fragment:kM,envmap_fragment:XM,envmap_common_pars_fragment:jM,envmap_pars_fragment:qM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:aE,envmap_vertex:YM,fog_vertex:ZM,fog_pars_vertex:KM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:tE,lights_lambert_fragment:eE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:sE,lights_toon_pars_fragment:rE,lights_phong_fragment:oE,lights_phong_pars_fragment:lE,lights_physical_fragment:cE,lights_physical_pars_fragment:uE,lights_fragment_begin:fE,lights_fragment_maps:hE,lights_fragment_end:dE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:_E,map_fragment:vE,map_pars_fragment:xE,map_particle_fragment:SE,map_particle_pars_fragment:yE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:EE,morphinstance_vertex:TE,morphcolor_vertex:bE,morphnormal_vertex:AE,morphtarget_pars_vertex:RE,morphtarget_vertex:CE,normal_fragment_begin:wE,normal_fragment_maps:DE,normal_pars_fragment:UE,normal_pars_vertex:LE,normal_vertex:NE,normalmap_pars_fragment:OE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:IE,opaque_fragment:FE,packing:HE,premultiplied_alpha_fragment:GE,project_vertex:VE,dithering_fragment:kE,dithering_pars_fragment:XE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:qE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:YE,shadowmap_vertex:ZE,shadowmask_pars_fragment:KE,skinbase_vertex:QE,skinning_pars_vertex:JE,skinning_vertex:$E,skinnormal_vertex:t1,specularmap_fragment:e1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:a1,transmission_fragment:s1,transmission_pars_fragment:r1,uv_pars_fragment:o1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:f1,background_frag:h1,backgroundCube_vert:d1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:_1,depth_frag:v1,distanceRGBA_vert:x1,distanceRGBA_frag:S1,equirect_vert:y1,equirect_frag:M1,linedashed_vert:E1,linedashed_frag:T1,meshbasic_vert:b1,meshbasic_frag:A1,meshlambert_vert:R1,meshlambert_frag:C1,meshmatcap_vert:w1,meshmatcap_frag:D1,meshnormal_vert:U1,meshnormal_frag:L1,meshphong_vert:N1,meshphong_frag:O1,meshphysical_vert:z1,meshphysical_frag:P1,meshtoon_vert:B1,meshtoon_frag:I1,points_vert:F1,points_frag:H1,shadow_vert:G1,shadow_frag:V1,sprite_vert:k1,sprite_frag:X1},Nt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const vc={r:0,b:0,g:0},us=new Ni,j1=new $e;function q1(o,e,i,s,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,x,g=null,S=0,M=null;function A(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function R(P){let U=!1;const H=A(P);H===null?v(d,m):H&&H.isColor&&(v(H,1),U=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,U){const H=A(U);H&&(H.isCubeTexture||H.mapping===Dc)?(x===void 0&&(x=new Si(new ko(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Cr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(V,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),us.copy(U.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(us)),x.material.toneMapped=Re.getTransfer(H.colorSpace)!==Fe,(g!==H||S!==H.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,g=H,S=H.version,M=o.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Si(new wr(2,2),new Ha({name:"BackgroundMaterial",uniforms:Cr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Re.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||S!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,S=H.version,M=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,U){P.getRGB(vc,G0(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,U,h)}function G(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(d,m)},render:R,addToRenderList:y,dispose:G}}function W1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(C,D,J,nt,ct){let ft=!1;const z=g(nt,J,D);u!==z&&(u=z,p(u.object)),ft=M(C,nt,J,ct),ft&&A(C,nt,J,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,U(C,D,J,nt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,D,J){const nt=J.wireframe===!0;let ct=s[C.id];ct===void 0&&(ct={},s[C.id]=ct);let ft=ct[D.id];ft===void 0&&(ft={},ct[D.id]=ft);let z=ft[nt];return z===void 0&&(z=S(m()),ft[nt]=z),z}function S(C){const D=[],J=[],nt=[];for(let ct=0;ct<i;ct++)D[ct]=0,J[ct]=0,nt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:J,attributeDivisors:nt,object:C,attributes:{},index:null}}function M(C,D,J,nt){const ct=u.attributes,ft=D.attributes;let z=0;const K=J.getAttributes();for(const q in K)if(K[q].location>=0){const Tt=ct[q];let O=ft[q];if(O===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;z++}return u.attributesNum!==z||u.index!==nt}function A(C,D,J,nt){const ct={},ft=D.attributes;let z=0;const K=J.getAttributes();for(const q in K)if(K[q].location>=0){let Tt=ft[q];Tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),ct[q]=O,z++}u.attributes=ct,u.attributesNum=z,u.index=nt}function R(){const C=u.newAttributes;for(let D=0,J=C.length;D<J;D++)C[D]=0}function y(C){v(C,0)}function v(C,D){const J=u.newAttributes,nt=u.enabledAttributes,ct=u.attributeDivisors;J[C]=1,nt[C]===0&&(o.enableVertexAttribArray(C),nt[C]=1),ct[C]!==D&&(o.vertexAttribDivisor(C,D),ct[C]=D)}function G(){const C=u.newAttributes,D=u.enabledAttributes;for(let J=0,nt=D.length;J<nt;J++)D[J]!==C[J]&&(o.disableVertexAttribArray(J),D[J]=0)}function P(C,D,J,nt,ct,ft,z){z===!0?o.vertexAttribIPointer(C,D,J,ct,ft):o.vertexAttribPointer(C,D,J,nt,ct,ft)}function U(C,D,J,nt){R();const ct=nt.attributes,ft=J.getAttributes(),z=D.defaultAttributeValues;for(const K in ft){const q=ft[K];if(q.location>=0){let St=ct[K];if(St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const Tt=St.normalized,O=St.itemSize,at=e.get(St);if(at===void 0)continue;const Et=at.buffer,Rt=at.type,Q=at.bytesPerElement,vt=Rt===o.INT||Rt===o.UNSIGNED_INT||St.gpuType===gd;if(St.isInterleavedBufferAttribute){const _t=St.data,Ht=_t.stride,zt=St.offset;if(_t.isInstancedInterleavedBuffer){for(let ee=0;ee<q.locationSize;ee++)v(q.location+ee,_t.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ee=0;ee<q.locationSize;ee++)y(q.location+ee);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let ee=0;ee<q.locationSize;ee++)P(q.location+ee,O/q.locationSize,Rt,Tt,Ht*Q,(zt+O/q.locationSize*ee)*Q,vt)}else{if(St.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)v(q.location+_t,St.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let _t=0;_t<q.locationSize;_t++)y(q.location+_t);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let _t=0;_t<q.locationSize;_t++)P(q.location+_t,O/q.locationSize,Rt,Tt,O*Q,O/q.locationSize*_t*Q,vt)}}else if(z!==void 0){const Tt=z[K];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(q.location,Tt);break;case 3:o.vertexAttrib3fv(q.location,Tt);break;case 4:o.vertexAttrib4fv(q.location,Tt);break;default:o.vertexAttrib1fv(q.location,Tt)}}}}G()}function H(){W();for(const C in s){const D=s[C];for(const J in D){const nt=D[J];for(const ct in nt)x(nt[ct].object),delete nt[ct];delete D[J]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const D=s[C.id];for(const J in D){const nt=D[J];for(const ct in nt)x(nt[ct].object),delete nt[ct];delete D[J]}delete s[C.id]}function B(C){for(const D in s){const J=s[D];if(J[C.id]===void 0)continue;const nt=J[C.id];for(const ct in nt)x(nt[ct].object),delete nt[ct];delete J[C.id]}}function W(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:V,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:G}}function Y1(o,e,i){let s;function l(p){s=p}function u(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,g){g!==0&&(o.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function d(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let M=0;for(let A=0;A<g;A++)M+=x[A];i.update(M,s,1)}function m(p,x,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],x[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let A=0;for(let R=0;R<g;R++)A+=x[R]*S[R];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Z1(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==xi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const W=B===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Li&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==aa&&!W)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:G,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:H,maxSamples:V}}function K1(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new hs,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||l;return l=S,s=g.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,M){const A=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||A===null||A.length===0||u&&!y)u?x(null):p();else{const G=u?0:s,P=G*4;let U=v.clippingState||null;m.value=U,U=x(A,S,P,M);for(let H=0;H!==P;++H)U[H]=i[H];v.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,S,M,A){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const v=M+R*4,G=S.matrixWorldInverse;d.getNormalMatrix(G),(y===null||y.length<v)&&(y=new Float32Array(v));for(let P=0,U=M;P!==R;++P,U+=4)h.copy(g[P]).applyMatrix4(G,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function Q1(o){let e=new WeakMap;function i(h,d){return d===Ph?h.mapping=br:d===Bh&&(h.mapping=Ar),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ph||d===Bh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new jy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Sr=4,K_=[.125,.215,.35,.446,.526,.582],ms=20,yh=new q0,Q_=new Ce;let Mh=null,Eh=0,Th=0,bh=!1;const ds=(1+Math.sqrt(5))/2,vr=1/ds,J_=[new it(-ds,vr,0),new it(ds,vr,0),new it(-vr,0,ds),new it(vr,0,ds),new it(0,ds,-vr),new it(0,ds,vr),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],J1=new it;class $_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=J1}=u;Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mh,Eh,Th),this._renderer.xr.enabled=bh,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Io,format:xi,colorSpace:Rr,depthBuffer:!1},l=t0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$1(u)),this._blurMaterial=tT(u,e,i)}return l}_compileMaterial(e){const i=new Si(this._lodPlanes[0],e);this._renderer.compile(i,yh)}_sceneToCubeUV(e,i,s,l,u){const m=new ti(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(Q_),g.toneMapping=Ia,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new Td({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new Si(new ko,R);let v=!1;const G=e.background;G?G.isColor&&(R.color.copy(G),e.background=null,v=!0):(R.color.copy(Q_),v=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[P]));const H=this._cubeSize;xc(l,U*H,P>2?H:0,H,H),g.setRenderTarget(l),v&&g.render(y,m),g.render(e,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=M,g.autoClear=S,e.background=G}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===br||e.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Si(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;xc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,yh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=J_[(l-u-1)%J_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,g=new Si(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ms-1),R=u/A,y=isFinite(u)?1+Math.floor(x*R):ms;y>ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ms}`);const v=[];let G=0;for(let B=0;B<ms;++B){const W=B/R,w=Math.exp(-W*W/2);v.push(w),B===0?G+=w:B<y&&(G+=2*w)}for(let B=0;B<v.length;B++)v[B]=v[B]/G;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=A,S.mipInt.value=P-s;const U=this._sizeLods[l],H=3*U*(l>P-Sr?l-P+Sr:0),V=4*(this._cubeSize-U);xc(i,H,V,3*U,2*U),m.setRenderTarget(i),m.render(g,yh)}}function $1(o){const e=[],i=[],s=[];let l=o;const u=o-Sr+1+K_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Sr?m=K_[h-o+Sr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,A=6,R=3,y=2,v=1,G=new Float32Array(R*A*M),P=new Float32Array(y*A*M),U=new Float32Array(v*A*M);for(let V=0;V<M;V++){const B=V%3*2/3-1,W=V>2?0:-1,w=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];G.set(w,R*A*V),P.set(S,y*A*V);const C=[V,V,V,V,V,V];U.set(C,v*A*V)}const H=new ys;H.setAttribute("position",new Ui(G,R)),H.setAttribute("uv",new Ui(P,y)),H.setAttribute("faceIndex",new Ui(U,v)),e.push(H),l>Sr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function t0(o,e,i){const s=new Ss(o,e,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function tT(o,e,i){const s=new Float32Array(ms),l=new it(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function e0(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function n0(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Cd(){return`

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
	`}function eT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ph||m===Bh,x=m===br||m===Ar;if(p||x){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new $_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new $_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function nT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function iT(o,e,i,s){const l={},u=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,A=g.attributes.position;let R=0;if(M!==null){const G=M.array;R=M.version;for(let P=0,U=G.length;P<U;P+=3){const H=G[P+0],V=G[P+1],B=G[P+2];S.push(H,V,V,B,B,H)}}else if(A!==void 0){const G=A.array;R=A.version;for(let P=0,U=G.length/3-1;P<U;P+=3){const H=P+0,V=P+1,B=P+2;S.push(H,V,V,B,B,H)}}else return;const y=new(z0(S)?H0:F0)(S,1);y.version=R;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function x(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function aT(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(s,M,u,S*h,A),i.update(M,s,A))}function x(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,A);let y=0;for(let v=0;v<A;v++)y+=M[v];i.update(y,s,1)}function g(S,M,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,M[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,R,0,A);let v=0;for(let G=0;G<A;G++)v+=M[G]*R[G];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function sT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rT(o,e,i){const s=new WeakMap,l=new He;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let C=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],G=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let H=d.attributes.position.count*U,V=1;H>e.maxTextureSize&&(V=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*V*4*g),W=new P0(B,H,V,g);W.type=aa,W.needsUpdate=!0;const w=U*4;for(let D=0;D<g;D++){const J=v[D],nt=G[D],ct=P[D],ft=H*V*4*D;for(let z=0;z<J.count;z++){const K=z*w;A===!0&&(l.fromBufferAttribute(J,z),B[ft+K+0]=l.x,B[ft+K+1]=l.y,B[ft+K+2]=l.z,B[ft+K+3]=0),R===!0&&(l.fromBufferAttribute(nt,z),B[ft+K+4]=l.x,B[ft+K+5]=l.y,B[ft+K+6]=l.z,B[ft+K+7]=0),y===!0&&(l.fromBufferAttribute(ct,z),B[ft+K+8]=l.x,B[ft+K+9]=l.y,B[ft+K+10]=l.z,B[ft+K+11]=ct.itemSize===4?l.w:1)}}S={count:g,texture:W,size:new we(H,V)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function oT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Y0=new On,i0=new X0(1,1),Z0=new P0,K0=new Ry,Q0=new k0,a0=[],s0=[],r0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function Ur(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=a0[l];if(u===void 0&&(u=new Float32Array(l),a0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Uc(o,e){let i=s0[e];i===void 0&&(i=new Int32Array(e),s0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function lT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function hT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;l0.set(s),o.uniformMatrix2fv(this.addr,!1,l0),mn(i,s)}}function dT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;o0.set(s),o.uniformMatrix3fv(this.addr,!1,o0),mn(i,s)}}function pT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;r0.set(s),o.uniformMatrix4fv(this.addr,!1,r0),mn(i,s)}}function mT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function xT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function ET(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(i0.compareFunction=O0,u=i0):u=Y0,i.setTexture2D(e||u,l)}function TT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||K0,l)}function bT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Q0,l)}function AT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Z0,l)}function RT(o){switch(o){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return hT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return ST;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return AT}}function CT(o,e){o.uniform1fv(this.addr,e)}function wT(o,e){const i=Ur(e,this.size,2);o.uniform2fv(this.addr,i)}function DT(o,e){const i=Ur(e,this.size,3);o.uniform3fv(this.addr,i)}function UT(o,e){const i=Ur(e,this.size,4);o.uniform4fv(this.addr,i)}function LT(o,e){const i=Ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function NT(o,e){const i=Ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function OT(o,e){const i=Ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function zT(o,e){o.uniform1iv(this.addr,e)}function PT(o,e){o.uniform2iv(this.addr,e)}function BT(o,e){o.uniform3iv(this.addr,e)}function IT(o,e){o.uniform4iv(this.addr,e)}function FT(o,e){o.uniform1uiv(this.addr,e)}function HT(o,e){o.uniform2uiv(this.addr,e)}function GT(o,e){o.uniform3uiv(this.addr,e)}function VT(o,e){o.uniform4uiv(this.addr,e)}function kT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Y0,u[h])}function XT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||K0,u[h])}function jT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Q0,u[h])}function qT(o,e,i){const s=this.cache,l=e.length,u=Uc(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Z0,u[h])}function WT(o){switch(o){case 5126:return CT;case 35664:return wT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return zT;case 35667:case 35671:return PT;case 35668:case 35672:return BT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return qT}}class YT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=RT(i.type)}}class ZT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function c0(o,e){o.seq.push(e),o.map[e.id]=e}function QT(o,e,i){const s=o.name,l=s.length;for(Ah.lastIndex=0;;){const u=Ah.exec(s),h=Ah.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){c0(i,p===void 0?new YT(d,o,e):new ZT(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new KT(d),c0(i,g)),i=g}}}class Ac{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);QT(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function u0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const JT=37297;let $T=0;function tb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const f0=new ce;function eb(o){Re._getMatrix(f0,Re.workingColorSpace,o);const e=`mat3( ${f0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Cc:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function h0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+tb(o.getShaderSource(e),d)}else return u}function nb(o,e){const i=eb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ib(o,e){let i;switch(e){case ey:i="Linear";break;case ny:i="Reinhard";break;case iy:i="Cineon";break;case ay:i="ACESFilmic";break;case ry:i="AgX";break;case oy:i="Neutral";break;case sy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new it;function ab(){Re.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function rb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function ob(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Lo(o){return o!==""}function d0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(o){return o.replace(lb,ub)}const cb=new Map;function ub(o,e){let i=ue[e];if(i===void 0){const s=cb.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return dd(i)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(o){return o.replace(fb,hb)}function hb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g0(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function db(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===OS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function pb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case br:case Ar:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mb(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ar&&(e="ENVMAP_MODE_REFRACTION"),e}function gb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case E0:e="ENVMAP_BLENDING_MULTIPLY";break;case $S:e="ENVMAP_BLENDING_MIX";break;case ty:e="ENVMAP_BLENDING_ADD";break}return e}function _b(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vb(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=db(i),p=pb(i),x=mb(i),g=gb(i),S=_b(i),M=sb(i),A=rb(u),R=l.createProgram();let y,v,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),v.length>0&&(v+=`
`)):(y=[g0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),v=[g0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ia?ib("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,nb("linearToOutputTexel",i.outputColorSpace),ab(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=dd(h),h=d0(h,i),h=p0(h,i),d=dd(d),d=d0(d,i),d=p0(d,i),h=m0(h),d=m0(d),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=G+y+h,U=G+v+d,H=u0(l,l.VERTEX_SHADER,P),V=u0(l,l.FRAGMENT_SHADER,U);l.attachShader(R,H),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(D){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(R)||"",nt=l.getShaderInfoLog(H)||"",ct=l.getShaderInfoLog(V)||"",ft=J.trim(),z=nt.trim(),K=ct.trim();let q=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,V);else{const Tt=h0(l,H,"vertex"),O=h0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ft+`
`+Tt+`
`+O)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(z===""||K==="")&&(St=!1);St&&(D.diagnostics={runnable:q,programLog:ft,vertexShader:{log:z,prefix:y},fragmentShader:{log:K,prefix:v}})}l.deleteShader(H),l.deleteShader(V),W=new Ac(l,R),w=ob(l,R)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,JT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=V,this}let xb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new yb(e),i.set(e,s)),s}}class yb{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}}function Mb(o,e,i,s,l,u,h){const d=new B0,m=new Sb,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,D,J,nt){const ct=J.fog,ft=nt.geometry,z=w.isMeshStandardMaterial?J.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),q=K&&K.mapping===Dc?K.image.height:null,St=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let at=0;ft.morphAttributes.position!==void 0&&(at=1),ft.morphAttributes.normal!==void 0&&(at=2),ft.morphAttributes.color!==void 0&&(at=3);let Et,Rt,Q,vt;if(St){const Ee=Ci[St];Et=Ee.vertexShader,Rt=Ee.fragmentShader}else Et=w.vertexShader,Rt=w.fragmentShader,m.update(w),Q=m.getVertexShaderID(w),vt=m.getFragmentShaderID(w);const _t=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),zt=nt.isInstancedMesh===!0,ee=nt.isBatchedMesh===!0,Xe=!!w.map,he=!!w.matcap,F=!!K,Me=!!w.aoMap,Jt=!!w.lightMap,xe=!!w.bumpMap,Zt=!!w.normalMap,Ge=!!w.displacementMap,It=!!w.emissiveMap,se=!!w.metalnessMap,Ke=!!w.roughnessMap,Ze=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,et=w.iridescence>0,dt=w.sheen>0,yt=w.transmission>0,ut=Ze&&!!w.anisotropyMap,Wt=L&&!!w.clearcoatMap,Ct=L&&!!w.clearcoatNormalMap,jt=L&&!!w.clearcoatRoughnessMap,qt=et&&!!w.iridescenceMap,bt=et&&!!w.iridescenceThicknessMap,wt=dt&&!!w.sheenColorMap,Yt=dt&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,Ut=!!w.specularColorMap,re=!!w.specularIntensityMap,X=yt&&!!w.transmissionMap,At=yt&&!!w.thicknessMap,Dt=!!w.gradientMap,Bt=!!w.alphaMap,Mt=w.alphaTest>0,gt=!!w.alphaHash,Ft=!!w.extensions;let ie=Ia;w.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ne={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:Et,fragmentShader:Rt,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:vt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:ee,batchingColor:ee&&nt._colorsTexture!==null,instancing:zt,instancingColor:zt&&nt.instanceColor!==null,instancingMorph:zt&&nt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_t===null?o.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:Xe,matcap:he,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:q,aoMap:Me,lightMap:Jt,bumpMap:xe,normalMap:Zt,displacementMap:S&&Ge,emissiveMap:It,normalMapObjectSpace:Zt&&w.normalMapType===fy,normalMapTangentSpace:Zt&&w.normalMapType===N0,metalnessMap:se,roughnessMap:Ke,anisotropy:Ze,anisotropyMap:ut,clearcoat:L,clearcoatMap:Wt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:E,iridescence:et,iridescenceMap:qt,iridescenceThicknessMap:bt,sheen:dt,sheenColorMap:wt,sheenRoughnessMap:Yt,specularMap:Pt,specularColorMap:Ut,specularIntensityMap:re,transmission:yt,transmissionMap:X,thicknessMap:At,gradientMap:Dt,opaque:w.transparent===!1&&w.blending===yr&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:gt,combine:w.combine,mapUv:Xe&&R(w.map.channel),aoMapUv:Me&&R(w.aoMap.channel),lightMapUv:Jt&&R(w.lightMap.channel),bumpMapUv:xe&&R(w.bumpMap.channel),normalMapUv:Zt&&R(w.normalMap.channel),displacementMapUv:Ge&&R(w.displacementMap.channel),emissiveMapUv:It&&R(w.emissiveMap.channel),metalnessMapUv:se&&R(w.metalnessMap.channel),roughnessMapUv:Ke&&R(w.roughnessMap.channel),anisotropyMapUv:ut&&R(w.anisotropyMap.channel),clearcoatMapUv:Wt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&R(w.sheenRoughnessMap.channel),specularMapUv:Pt&&R(w.specularMap.channel),specularColorMapUv:Ut&&R(w.specularColorMap.channel),specularIntensityMapUv:re&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:At&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Zt||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ft.attributes.uv&&(Xe||Bt),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ht,skinning:nt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Xe&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:It&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_i,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)C.push(D),C.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(G(C,w),P(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function G(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function P(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=A[w.type];let D;if(C){const J=Ci[C];D=Gy.clone(J.uniforms)}else D=w.uniforms;return D}function H(w,C){let D;for(let J=0,nt=x.length;J<nt;J++){const ct=x[J];if(ct.cacheKey===C){D=ct,++D.usedTimes;break}}return D===void 0&&(D=new vb(o,C,w,u),x.push(D)),D}function V(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function B(w){m.remove(w)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:U,acquireProgram:H,releaseProgram:V,releaseShaderCache:B,programs:x,dispose:W}}function Eb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function Tb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function _0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function v0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(g,S,M,A,R,y){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:A,renderOrder:g.renderOrder,z:R,group:y},o[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=R,v.group=y),e++,v}function d(g,S,M,A,R,y){const v=h(g,S,M,A,R,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,A,R,y){const v=h(g,S,M,A,R,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||Tb),s.length>1&&s.sort(S||_0),l.length>1&&l.sort(S||_0)}function x(){for(let g=e,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:x,sort:p}}function bb(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new v0,o.set(s,[h])):l>=u.length?(h=new v0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Ab(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new Ce};break;case"SpotLight":i={position:new it,direction:new it,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function Rb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Cb=0;function wb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Db(o){const e=new Ab,i=Rb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new it);const l=new it,u=new $e,h=new $e;function d(p){let x=0,g=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,A=0,R=0,y=0,v=0,G=0,P=0,U=0,H=0,V=0,B=0;p.sort(wb);for(let w=0,C=p.length;w<C;w++){const D=p[w],J=D.color,nt=D.intensity,ct=D.distance,ft=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)x+=J.r*nt,g+=J.g*nt,S+=J.b*nt;else if(D.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(D.sh.coefficients[z],nt);B++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,q=i.get(D);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=D.shadow.matrix,G++}s.directional[M]=z,M++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(J).multiplyScalar(nt),z.distance=ct,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,s.spot[R]=z;const K=D.shadow;if(D.map&&(s.spotLightMap[H]=D.map,H++,K.updateMatrices(D),D.castShadow&&V++),s.spotLightMatrix[R]=K.matrix,D.castShadow){const q=i.get(D);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[R]=q,s.spotShadowMap[R]=ft,U++}R++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(J).multiplyScalar(nt),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=z,y++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const K=D.shadow,q=i.get(D);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[A]=q,s.pointShadowMap[A]=ft,s.pointShadowMatrix[A]=D.shadow.matrix,P++}s.point[A]=z,A++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(nt),z.groundColor.copy(D.groundColor).multiplyScalar(nt),s.hemi[v]=z,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const W=s.hash;(W.directionalLength!==M||W.pointLength!==A||W.spotLength!==R||W.rectAreaLength!==y||W.hemiLength!==v||W.numDirectionalShadows!==G||W.numPointShadows!==P||W.numSpotShadows!==U||W.numSpotMaps!==H||W.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=G,s.directionalShadowMap.length=G,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=G,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+H-V,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=B,W.directionalLength=M,W.pointLength=A,W.spotLength=R,W.rectAreaLength=y,W.hemiLength=v,W.numDirectionalShadows=G,W.numPointShadows=P,W.numSpotShadows=U,W.numSpotMaps=H,W.numLightProbes=B,s.version=Cb++)}function m(p,x){let g=0,S=0,M=0,A=0,R=0;const y=x.matrixWorldInverse;for(let v=0,G=p.length;v<G;v++){const P=p[v];if(P.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(P.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const U=s.rectArea[A];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(P.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function x0(o){const e=new Db(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function u(x){i.push(x)}function h(x){s.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Ub(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new x0(o),e.set(l,[d])):u>=h.length?(d=new x0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
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
}`;function Ob(o,e,i){let s=new bd;const l=new we,u=new we,h=new He,d=new Jy({depthPacking:uy}),m=new $y,p={},x=i.maxTextureSize,g={[Fa]:kn,[kn]:Fa,[_i]:_i},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Lb,fragmentShader:Nb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new ys;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Si(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let v=this.type;this.render=function(V,B,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),J=o.state;J.setBlending(Ba),J.buffers.depth.getReversed()?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const nt=v!==ia&&this.type===ia,ct=v===ia&&this.type!==ia;for(let ft=0,z=V.length;ft<z;ft++){const K=V[ft],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),u.copy(q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/St.x),l.x=u.x*St.x,q.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/St.y),l.y=u.y*St.y,q.mapSize.y=u.y)),q.map===null||nt===!0||ct===!0){const O=this.type!==ia?{minFilter:yi,magFilter:yi}:{};q.map!==null&&q.map.dispose(),q.map=new Ss(l.x,l.y,O),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Tt=q.getViewportCount();for(let O=0;O<Tt;O++){const at=q.getViewport(O);h.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),J.viewport(h),q.updateMatrices(K,O),s=q.getFrustum(),U(B,W,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ia&&G(q,W),q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,D)};function G(V,B){const W=e.update(R);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ss(l.x,l.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(B,null,W,S,R,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(B,null,W,M,R,null)}function P(V,B,W,w){let C=null;const D=W.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(D!==void 0)C=D;else if(C=W.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const J=C.uuid,nt=B.uuid;let ct=p[J];ct===void 0&&(ct={},p[J]=ct);let ft=ct[nt];ft===void 0&&(ft=C.clone(),ct[nt]=ft,B.addEventListener("dispose",H)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,w===ia?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:g[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=o.properties.get(C);J.light=W}return C}function U(V,B,W,w,C){if(V.visible===!1)return;if(V.layers.test(B.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ia)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,V.matrixWorld);const nt=e.update(V),ct=V.material;if(Array.isArray(ct)){const ft=nt.groups;for(let z=0,K=ft.length;z<K;z++){const q=ft[z],St=ct[q.materialIndex];if(St&&St.visible){const Tt=P(V,St,w,C);V.onBeforeShadow(o,V,B,W,nt,Tt,q),o.renderBufferDirect(W,null,nt,Tt,V,q),V.onAfterShadow(o,V,B,W,nt,Tt,q)}}}else if(ct.visible){const ft=P(V,ct,w,C);V.onBeforeShadow(o,V,B,W,nt,ft,null),o.renderBufferDirect(W,null,nt,ft,V,null),V.onAfterShadow(o,V,B,W,nt,ft,null)}}const J=V.children;for(let nt=0,ct=J.length;nt<ct;nt++)U(J[nt],B,W,w,C)}function H(V){V.target.removeEventListener("dispose",H);for(const W in p){const w=p[W],C=V.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const zb={[wh]:Dh,[Uh]:Oh,[Lh]:zh,[Tr]:Nh,[Dh]:wh,[Oh]:Uh,[zh]:Lh,[Nh]:Tr};function Pb(o,e){function i(){let X=!1;const At=new He;let Dt=null;const Bt=new He(0,0,0,0);return{setMask:function(Mt){Dt!==Mt&&!X&&(o.colorMask(Mt,Mt,Mt,Mt),Dt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,gt,Ft,ie,Ne){Ne===!0&&(Mt*=ie,gt*=ie,Ft*=ie),At.set(Mt,gt,Ft,ie),Bt.equals(At)===!1&&(o.clearColor(Mt,gt,Ft,ie),Bt.copy(At))},reset:function(){X=!1,Dt=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,Dt=null,Bt=null,Mt=null;return{setReversed:function(gt){if(At!==gt){const Ft=e.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),At=gt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return At},setTest:function(gt){gt?_t(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(gt){Dt!==gt&&!X&&(o.depthMask(gt),Dt=gt)},setFunc:function(gt){if(At&&(gt=zb[gt]),Bt!==gt){switch(gt){case wh:o.depthFunc(o.NEVER);break;case Dh:o.depthFunc(o.ALWAYS);break;case Uh:o.depthFunc(o.LESS);break;case Tr:o.depthFunc(o.LEQUAL);break;case Lh:o.depthFunc(o.EQUAL);break;case Nh:o.depthFunc(o.GEQUAL);break;case Oh:o.depthFunc(o.GREATER);break;case zh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Mt!==gt&&(At&&(gt=1-gt),o.clearDepth(gt),Mt=gt)},reset:function(){X=!1,Dt=null,Bt=null,Mt=null,At=!1}}}function l(){let X=!1,At=null,Dt=null,Bt=null,Mt=null,gt=null,Ft=null,ie=null,Ne=null;return{setTest:function(Ee){X||(Ee?_t(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!X&&(o.stencilMask(Ee),At=Ee)},setFunc:function(Ee,Dn,ei){(Dt!==Ee||Bt!==Dn||Mt!==ei)&&(o.stencilFunc(Ee,Dn,ei),Dt=Ee,Bt=Dn,Mt=ei)},setOp:function(Ee,Dn,ei){(gt!==Ee||Ft!==Dn||ie!==ei)&&(o.stencilOp(Ee,Dn,ei),gt=Ee,Ft=Dn,ie=ei)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){X=!1,At=null,Dt=null,Bt=null,Mt=null,gt=null,Ft=null,ie=null,Ne=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,M=[],A=null,R=!1,y=null,v=null,G=null,P=null,U=null,H=null,V=null,B=new Ce(0,0,0),W=0,w=!1,C=null,D=null,J=null,nt=null,ct=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=K>=2);let St=null,Tt={};const O=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Et=new He().fromArray(O),Rt=new He().fromArray(at);function Q(X,At,Dt,Bt){const Mt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Dt;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(At+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return gt}const vt={};vt[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(o.DEPTH_TEST),h.setFunc(Tr),xe(!1),Zt(M_),_t(o.CULL_FACE),Me(Ba);function _t(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Ht(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function zt(X,At){return g[X]!==At?(o.bindFramebuffer(X,At),g[X]=At,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=At),!0):!1}function ee(X,At){let Dt=M,Bt=!1;if(X){Dt=S.get(At),Dt===void 0&&(Dt=[],S.set(At,Dt));const Mt=X.textures;if(Dt.length!==Mt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Ft=Mt.length;gt<Ft;gt++)Dt[gt]=o.COLOR_ATTACHMENT0+gt;Dt.length=Mt.length,Bt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Dt)}function Xe(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const he={[ps]:o.FUNC_ADD,[PS]:o.FUNC_SUBTRACT,[BS]:o.FUNC_REVERSE_SUBTRACT};he[IS]=o.MIN,he[FS]=o.MAX;const F={[HS]:o.ZERO,[GS]:o.ONE,[VS]:o.SRC_COLOR,[Rh]:o.SRC_ALPHA,[YS]:o.SRC_ALPHA_SATURATE,[qS]:o.DST_COLOR,[XS]:o.DST_ALPHA,[kS]:o.ONE_MINUS_SRC_COLOR,[Ch]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[jS]:o.ONE_MINUS_DST_ALPHA,[ZS]:o.CONSTANT_COLOR,[KS]:o.ONE_MINUS_CONSTANT_COLOR,[QS]:o.CONSTANT_ALPHA,[JS]:o.ONE_MINUS_CONSTANT_ALPHA};function Me(X,At,Dt,Bt,Mt,gt,Ft,ie,Ne,Ee){if(X===Ba){R===!0&&(Ht(o.BLEND),R=!1);return}if(R===!1&&(_t(o.BLEND),R=!0),X!==zS){if(X!==y||Ee!==w){if((v!==ps||U!==ps)&&(o.blendEquation(o.FUNC_ADD),v=ps,U=ps),Ee)switch(X){case yr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case E_:o.blendFunc(o.ONE,o.ONE);break;case T_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case b_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case yr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case E_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case T_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}G=null,P=null,H=null,V=null,B.set(0,0,0),W=0,y=X,w=Ee}return}Mt=Mt||At,gt=gt||Dt,Ft=Ft||Bt,(At!==v||Mt!==U)&&(o.blendEquationSeparate(he[At],he[Mt]),v=At,U=Mt),(Dt!==G||Bt!==P||gt!==H||Ft!==V)&&(o.blendFuncSeparate(F[Dt],F[Bt],F[gt],F[Ft]),G=Dt,P=Bt,H=gt,V=Ft),(ie.equals(B)===!1||Ne!==W)&&(o.blendColor(ie.r,ie.g,ie.b,Ne),B.copy(ie),W=Ne),y=X,w=!1}function Jt(X,At){X.side===_i?Ht(o.CULL_FACE):_t(o.CULL_FACE);let Dt=X.side===kn;At&&(Dt=!Dt),xe(Dt),X.blending===yr&&X.transparent===!1?Me(Ba):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),It(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_t(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Zt(X){X!==LS?(_t(o.CULL_FACE),X!==D&&(X===M_?o.cullFace(o.BACK):X===NS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),D=X}function Ge(X){X!==J&&(z&&o.lineWidth(X),J=X)}function It(X,At,Dt){X?(_t(o.POLYGON_OFFSET_FILL),(nt!==At||ct!==Dt)&&(o.polygonOffset(At,Dt),nt=At,ct=Dt)):Ht(o.POLYGON_OFFSET_FILL)}function se(X){X?_t(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=o.TEXTURE0+ft-1),St!==X&&(o.activeTexture(X),St=X)}function Ze(X,At,Dt){Dt===void 0&&(St===null?Dt=o.TEXTURE0+ft-1:Dt=St);let Bt=Tt[Dt];Bt===void 0&&(Bt={type:void 0,texture:void 0},Tt[Dt]=Bt),(Bt.type!==X||Bt.texture!==At)&&(St!==Dt&&(o.activeTexture(Dt),St=Dt),o.bindTexture(X,At||vt[X]),Bt.type=X,Bt.texture=At)}function L(){const X=Tt[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){Et.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Yt(X){Rt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Rt.copy(X))}function Pt(X,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Bt=Dt.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(At,X.name),Dt.set(X,Bt))}function Ut(X,At){const Bt=p.get(At).get(X);m.get(At)!==Bt&&(o.uniformBlockBinding(At,Bt,X.__bindingPointIndex),m.set(At,Bt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},St=null,Tt={},g={},S=new WeakMap,M=[],A=null,R=!1,y=null,v=null,G=null,P=null,U=null,H=null,V=null,B=new Ce(0,0,0),W=0,w=!1,C=null,D=null,J=null,nt=null,ct=null,Et.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:_t,disable:Ht,bindFramebuffer:zt,drawBuffers:ee,useProgram:Xe,setBlending:Me,setMaterial:Jt,setFlipSided:xe,setCullFace:Zt,setLineWidth:Ge,setPolygonOffset:It,setScissorTest:se,activeTexture:Ke,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:qt,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:yt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Wt,scissor:wt,viewport:Yt,reset:re}}function Bb(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,x=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return M?new OffscreenCanvas(L,E):Bo("canvas")}function R(L,E,et){let dt=1;const yt=Ze(L);if((yt.width>et||yt.height>et)&&(dt=et/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(dt*yt.width),Wt=Math.floor(dt*yt.height);g===void 0&&(g=A(ut,Wt));const Ct=E?A(ut,Wt):g;return Ct.width=ut,Ct.height=Wt,Ct.getContext("2d").drawImage(L,0,0,ut,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+Wt+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function G(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,E,et,dt,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const Wt=yt?Cc:Re.getTransfer(dt);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Wt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function U(L,E){let et;return L?E===null||E===xs||E===Oo?et=o.DEPTH24_STENCIL8:E===aa?et=o.DEPTH32F_STENCIL8:E===No&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xs||E===Oo?et=o.DEPTH_COMPONENT24:E===aa?et=o.DEPTH_COMPONENT32F:E===No&&(et=o.DEPTH_COMPONENT16),et}function H(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==yi&&L.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function V(L){const E=L.target;E.removeEventListener("dispose",V),W(E),E.isVideoTexture&&x.delete(E)}function B(L){const E=L.target;E.removeEventListener("dispose",B),C(E)}function W(L){const E=s.get(L);if(E.__webglInit===void 0)return;const et=L.source,dt=S.get(et);if(dt){const yt=dt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(L),Object.keys(dt).length===0&&S.delete(et)}s.remove(L)}function w(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const et=L.source,dt=S.get(et);delete dt[E.__cacheKey],h.memory.textures--}function C(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let yt=0;yt<E.__webglFramebuffer[dt].length;yt++)o.deleteFramebuffer(E.__webglFramebuffer[dt][yt]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=L.textures;for(let dt=0,yt=et.length;dt<yt;dt++){const ut=s.get(et[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(et[dt])}s.remove(L)}let D=0;function J(){D=0}function nt(){const L=D;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),D+=1,L}function ct(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ft(L,E){const et=s.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&et.__version!==L.version){const dt=L.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(et,L,E);return}}else L.isExternalTexture&&(et.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function z(L,E){const et=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){vt(et,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function K(L,E){const et=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){vt(et,L,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function q(L,E){const et=s.get(L);if(L.version>0&&et.__version!==L.version){_t(et,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const St={[Ih]:o.REPEAT,[gs]:o.CLAMP_TO_EDGE,[Fh]:o.MIRRORED_REPEAT},Tt={[yi]:o.NEAREST,[ly]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[_s]:o.LINEAR_MIPMAP_LINEAR},O={[hy]:o.NEVER,[vy]:o.ALWAYS,[dy]:o.LESS,[O0]:o.LEQUAL,[py]:o.EQUAL,[_y]:o.GEQUAL,[my]:o.GREATER,[gy]:o.NOTEQUAL};function at(L,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Wf||E.magFilter===tc||E.magFilter===_s||E.minFilter===wi||E.minFilter===Wf||E.minFilter===tc||E.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==tc&&E.minFilter!==_s||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Et(L,E){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",V));const dt=E.source;let yt=S.get(dt);yt===void 0&&(yt={},S.set(dt,yt));const ut=ct(E);if(ut!==L.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[ut].usedTimes++;const Wt=yt[L.__cacheKey];Wt!==void 0&&(yt[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&w(E)),L.__cacheKey=ut,L.__webglTexture=yt[ut].texture}return et}function Rt(L,E,et){return Math.floor(Math.floor(L/et)/E)}function Q(L,E,et,dt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,dt,E.data);else{ut.sort((bt,wt)=>bt.start-wt.start);let Wt=0;for(let bt=1;bt<ut.length;bt++){const wt=ut[Wt],Yt=ut[bt],Pt=wt.start+wt.count,Ut=Rt(Yt.start,E.width,4),re=Rt(wt.start,E.width,4);Yt.start<=Pt+1&&Ut===re&&Rt(Yt.start+Yt.count-1,E.width,4)===Ut?wt.count=Math.max(wt.count,Yt.start+Yt.count-wt.start):(++Wt,ut[Wt]=Yt)}ut.length=Wt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let bt=0,wt=ut.length;bt<wt;bt++){const Yt=ut[bt],Pt=Math.floor(Yt.start/4),Ut=Math.ceil(Yt.count/4),re=Pt%E.width,X=Math.floor(Pt/E.width),At=Ut,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,re,X,At,Dt,et,dt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function vt(L,E,et){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const yt=Et(L,E),ut=E.source;i.bindTexture(dt,L.__webglTexture,o.TEXTURE0+et);const Wt=s.get(ut);if(ut.version!==Wt.__version||yt===!0){i.activeTexture(o.TEXTURE0+et);const Ct=Re.getPrimaries(Re.workingColorSpace),jt=E.colorSpace===Pa?null:Re.getPrimaries(E.colorSpace),qt=E.colorSpace===Pa||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let bt=R(E.image,!1,l.maxTextureSize);bt=Ke(E,bt);const wt=u.convert(E.format,E.colorSpace),Yt=u.convert(E.type);let Pt=P(E.internalFormat,wt,Yt,E.colorSpace,E.isVideoTexture);at(dt,E);let Ut;const re=E.mipmaps,X=E.isVideoTexture!==!0,At=Wt.__version===void 0||yt===!0,Dt=ut.dataReady,Bt=H(E,bt);if(E.isDepthTexture)Pt=U(E.format===Po,E.type),At&&(X?i.texStorage2D(o.TEXTURE_2D,1,Pt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,wt,Yt,null));else if(E.isDataTexture)if(re.length>0){X&&At&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,re[0].width,re[0].height);for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Yt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,wt,Yt,Ut.data);E.generateMipmaps=!1}else X?(At&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,bt.width,bt.height),Dt&&Q(E,bt,wt,Yt)):i.texImage2D(o.TEXTURE_2D,0,Pt,bt.width,bt.height,0,wt,Yt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Pt,re[0].width,re[0].height,bt.depth);for(let Mt=0,gt=re.length;Mt<gt;Mt++)if(Ut=re[Mt],E.format!==xi)if(wt!==null)if(X){if(Dt)if(E.layerUpdates.size>0){const Ft=Z_(Ut.width,Ut.height,E.format,E.type);for(const ie of E.layerUpdates){const Ne=Ut.data.subarray(ie*Ft/Ut.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Ut.width,Ut.height,1,wt,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,wt,Yt,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Ut.width,Ut.height,bt.depth,0,wt,Yt,Ut.data)}else{X&&At&&i.texStorage2D(o.TEXTURE_2D,Bt,Pt,re[0].width,re[0].height);for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],E.format!==xi?wt!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,wt,Yt,Ut.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Ut.width,Ut.height,0,wt,Yt,Ut.data)}else if(E.isDataArrayTexture)if(X){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Pt,bt.width,bt.height,bt.depth),Dt)if(E.layerUpdates.size>0){const Mt=Z_(bt.width,bt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ft=bt.data.subarray(gt*Mt/bt.data.BYTES_PER_ELEMENT,(gt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,wt,Yt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,wt,Yt,bt.data);else if(E.isData3DTexture)X?(At&&i.texStorage3D(o.TEXTURE_3D,Bt,Pt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,wt,Yt,bt.data);else if(E.isFramebufferTexture){if(At)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,Pt,bt.width,bt.height);else{let Mt=bt.width,gt=bt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Pt,Mt,gt,0,wt,Yt,null),Mt>>=1,gt>>=1}}else if(re.length>0){if(X&&At){const Mt=Ze(re[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Mt.width,Mt.height)}for(let Mt=0,gt=re.length;Mt<gt;Mt++)Ut=re[Mt],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt,Yt,Ut):i.texImage2D(o.TEXTURE_2D,Mt,Pt,wt,Yt,Ut);E.generateMipmaps=!1}else if(X){if(At){const Mt=Ze(bt);i.texStorage2D(o.TEXTURE_2D,Bt,Pt,Mt.width,Mt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,Yt,bt);y(E)&&v(dt),Wt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function _t(L,E,et){if(E.image.length!==6)return;const dt=Et(L,E),yt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const ut=s.get(yt);if(yt.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Wt=Re.getPrimaries(Re.workingColorSpace),Ct=E.colorSpace===Pa?null:Re.getPrimaries(E.colorSpace),jt=E.colorSpace===Pa||Wt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let gt=0;gt<6;gt++)!qt&&!bt?wt[gt]=R(E.image[gt],!0,l.maxCubemapSize):wt[gt]=bt?E.image[gt].image:E.image[gt],wt[gt]=Ke(E,wt[gt]);const Yt=wt[0],Pt=u.convert(E.format,E.colorSpace),Ut=u.convert(E.type),re=P(E.internalFormat,Pt,Ut,E.colorSpace),X=E.isVideoTexture!==!0,At=ut.__version===void 0||dt===!0,Dt=yt.dataReady;let Bt=H(E,Yt);at(o.TEXTURE_CUBE_MAP,E);let Mt;if(qt){X&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){Mt=wt[gt].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];E.format!==xi?Pt!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ie.width,ie.height,Pt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ie.width,ie.height,Pt,Ut,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,re,ie.width,ie.height,0,Pt,Ut,ie.data)}}}else{if(Mt=E.mipmaps,X&&At){Mt.length>0&&Bt++;const gt=Ze(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,wt[gt].width,wt[gt].height,Pt,Ut,wt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,wt[gt].width,wt[gt].height,0,Pt,Ut,wt[gt].data);for(let Ft=0;Ft<Mt.length;Ft++){const Ne=Mt[Ft].image[gt].image;X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Ne.width,Ne.height,Pt,Ut,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,re,Ne.width,Ne.height,0,Pt,Ut,Ne.data)}}else{X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt,Ut,wt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Pt,Ut,wt[gt]);for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Pt,Ut,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,re,Pt,Ut,ie.image[gt])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),ut.__version=yt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ht(L,E,et,dt,yt,ut){const Wt=u.convert(et.format,et.colorSpace),Ct=u.convert(et.type),jt=P(et.internalFormat,Wt,Ct,et.colorSpace),qt=s.get(E),bt=s.get(et);if(bt.__renderTarget=E,!qt.__hasExternalTextures){const wt=Math.max(1,E.width>>ut),Yt=Math.max(1,E.height>>ut);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ut,jt,wt,Yt,E.depth,0,Wt,Ct,null):i.texImage2D(yt,ut,jt,wt,Yt,0,Wt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),It(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,yt,bt.__webglTexture,0,Ge(E)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,yt,bt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(L,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const dt=E.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,ut=U(E.stencilBuffer,yt),Wt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=Ge(E);It(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ut,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,L)}else{const dt=E.textures;for(let yt=0;yt<dt.length;yt++){const ut=dt[yt],Wt=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),jt=P(ut.internalFormat,Wt,Ct,ut.colorSpace),qt=Ge(E);et&&It(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,jt,E.width,E.height):It(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const yt=dt.__webglTexture,ut=Ge(E);if(E.depthTexture.format===zo)It(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(E.depthTexture.format===Po)It(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const E=s.get(L),et=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=dt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=L.texture.mipmaps;dt&&dt.length>0?ee(E.__webglFramebuffer[0],L):ee(E.__webglFramebuffer,L)}else if(et){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),zt(E.__webglDepthbuffer[dt],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ut)}}else{const dt=L.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),zt(E.__webglDepthbuffer,L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function he(L,E,et){const dt=s.get(L);E!==void 0&&Ht(dt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Xe(L)}function F(L){const E=L.texture,et=s.get(L),dt=s.get(E);L.addEventListener("dispose",B);const yt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Wt=yt.length>1;if(Wt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){et.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ct]=[];for(let jt=0;jt<E.mipmaps.length;jt++)et.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else et.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)et.__webglFramebuffer[Ct]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ct=0,jt=yt.length;Ct<jt;Ct++){const qt=s.get(yt[Ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&It(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const jt=yt[Ct];et.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const qt=u.convert(jt.format,jt.colorSpace),bt=u.convert(jt.type),wt=P(jt.internalFormat,qt,bt,jt.colorSpace,L.isXRRenderTarget===!0),Yt=Ge(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,wt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),at(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Ht(et.__webglFramebuffer[Ct][jt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else Ht(et.__webglFramebuffer[Ct],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ct=0,jt=yt.length;Ct<jt;Ct++){const qt=yt[Ct],bt=s.get(qt);let wt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,bt.__webglTexture),at(wt,qt),Ht(et.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+Ct,wt,0),y(qt)&&v(wt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),at(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Ht(et.__webglFramebuffer[jt],L,E,o.COLOR_ATTACHMENT0,Ct,jt);else Ht(et.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ct,0);y(E)&&v(Ct),i.unbindTexture()}L.depthBuffer&&Xe(L)}function Me(L){const E=L.textures;for(let et=0,dt=E.length;et<dt;et++){const yt=E[et];if(y(yt)){const ut=G(L),Wt=s.get(yt).__webglTexture;i.bindTexture(ut,Wt),v(ut),i.unbindTexture()}}}const Jt=[],xe=[];function Zt(L){if(L.samples>0){if(It(L)===!1){const E=L.textures,et=L.width,dt=L.height;let yt=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(L),Ct=E.length>1;if(Ct)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[qt]);const bt=s.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,yt,o.NEAREST),m===!0&&(Jt.length=0,xe.length=0,Jt.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(ut),xe.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[qt]);const bt=s.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(L){return Math.min(l.maxSamples,L.samples)}function It(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(L){const E=h.render.frame;x.get(L)!==E&&(x.set(L,E),L.update())}function Ke(L,E){const et=L.colorSpace,dt=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Rr&&et!==Pa&&(Re.getTransfer(et)===Fe?(dt!==xi||yt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=J,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=he,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=It}function Ib(o,e){function i(s,l=Pa){let u;const h=Re.getTransfer(l);if(s===Li)return o.UNSIGNED_BYTE;if(s===_d)return o.UNSIGNED_SHORT_4_4_4_4;if(s===vd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===R0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===b0)return o.BYTE;if(s===A0)return o.SHORT;if(s===No)return o.UNSIGNED_SHORT;if(s===gd)return o.INT;if(s===xs)return o.UNSIGNED_INT;if(s===aa)return o.FLOAT;if(s===Io)return o.HALF_FLOAT;if(s===C0)return o.ALPHA;if(s===w0)return o.RGB;if(s===xi)return o.RGBA;if(s===zo)return o.DEPTH_COMPONENT;if(s===Po)return o.DEPTH_STENCIL;if(s===D0)return o.RED;if(s===xd)return o.RED_INTEGER;if(s===U0)return o.RG;if(s===Sd)return o.RG_INTEGER;if(s===yd)return o.RGBA_INTEGER;if(s===yc||s===Mc||s===Ec||s===Tc)if(h===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===kh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh||s===jh||s===qh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Xh||s===jh)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Wh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===od||s===ld)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===bc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===L0||s===cd||s===ud||s===fd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class J0 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`;class Gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new J0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ha({vertexShader:Fb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Si(new wr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vb extends Dr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,S=null,M=null,A=null;const R=new Gb,y={},v=i.getContextAttributes();let G=null,P=null;const U=[],H=[],V=new we;let B=null;const W=new ti;W.viewport=new He;const w=new ti;w.viewport=new He;const C=[W,w],D=new cM;let J=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=U[Q];return vt===void 0&&(vt=new gh,U[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=U[Q];return vt===void 0&&(vt=new gh,U[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=U[Q];return vt===void 0&&(vt=new gh,U[Q]=vt),vt.getHandSpace()};function ct(Q){const vt=H.indexOf(Q.inputSource);if(vt===-1)return;const _t=U[vt];_t!==void 0&&(_t.update(Q.inputSource,Q.frame,p||h),_t.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ft(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",z);for(let Q=0;Q<U.length;Q++){const vt=H[Q];vt!==null&&(H[Q]=null,U[Q].disconnect(vt))}J=null,nt=null,R.reset();for(const Q in y)delete y[Q];e.setRenderTarget(G),M=null,S=null,g=null,l=null,P=null,Rt.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await i.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,i)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ht=null,zt=null;v.depth&&(zt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=v.stencil?Po:zo,Ht=v.stencil?Oo:xs);const ee={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:u};S=g.createProjectionLayer(ee),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Ss(S.textureWidth,S.textureHeight,{format:xi,type:Li,depthTexture:new X0(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Ss(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function z(Q){for(let vt=0;vt<Q.removed.length;vt++){const _t=Q.removed[vt],Ht=H.indexOf(_t);Ht>=0&&(H[Ht]=null,U[Ht].disconnect(_t))}for(let vt=0;vt<Q.added.length;vt++){const _t=Q.added[vt];let Ht=H.indexOf(_t);if(Ht===-1){for(let ee=0;ee<U.length;ee++)if(ee>=H.length){H.push(_t),Ht=ee;break}else if(H[ee]===null){H[ee]=_t,Ht=ee;break}if(Ht===-1)break}const zt=U[Ht];zt&&zt.connect(_t)}}const K=new it,q=new it;function St(Q,vt,_t){K.setFromMatrixPosition(vt.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);const Ht=K.distanceTo(q),zt=vt.projectionMatrix.elements,ee=_t.projectionMatrix.elements,Xe=zt[14]/(zt[10]-1),he=zt[14]/(zt[10]+1),F=(zt[9]+1)/zt[5],Me=(zt[9]-1)/zt[5],Jt=(zt[8]-1)/zt[0],xe=(ee[8]+1)/ee[0],Zt=Xe*Jt,Ge=Xe*xe,It=Ht/(-Jt+xe),se=It*-Jt;if(vt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(It),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Ke=Xe+It,Ze=he+It,L=Zt-se,E=Ge+(Ht-se),et=F*he/Ze*Ke,dt=Me*he/Ze*Ke;Q.projectionMatrix.makePerspective(L,E,et,dt,Ke,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Tt(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let vt=Q.near,_t=Q.far;R.texture!==null&&(R.depthNear>0&&(vt=R.depthNear),R.depthFar>0&&(_t=R.depthFar)),D.near=w.near=W.near=vt,D.far=w.far=W.far=_t,(J!==D.near||nt!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),J=D.near,nt=D.far),D.layers.mask=Q.layers.mask|6,W.layers.mask=D.layers.mask&3,w.layers.mask=D.layers.mask&5;const Ht=Q.parent,zt=D.cameras;Tt(D,Ht);for(let ee=0;ee<zt.length;ee++)Tt(zt[ee],Ht);zt.length===2?St(D,W,w):D.projectionMatrix.copy(W.projectionMatrix),O(Q,D,Ht)};function O(Q,vt,_t){_t===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(_t.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(D)},this.getCameraTexture=function(Q){return y[Q]};let at=null;function Et(Q,vt){if(x=vt.getViewerPose(p||h),A=vt,x!==null){const _t=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ht=!1;_t.length!==D.cameras.length&&(D.cameras.length=0,Ht=!0);for(let he=0;he<_t.length;he++){const F=_t[he];let Me=null;if(M!==null)Me=M.getViewport(F);else{const xe=g.getViewSubImage(S,F);Me=xe.viewport,he===0&&(e.setRenderTargetTextures(P,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(P))}let Jt=C[he];Jt===void 0&&(Jt=new ti,Jt.layers.enable(he),Jt.viewport=new He,C[he]=Jt),Jt.matrix.fromArray(F.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(F.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Me.x,Me.y,Me.width,Me.height),he===0&&(D.matrix.copy(Jt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ht===!0&&D.cameras.push(Jt)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const he=g.getDepthInformation(_t[0]);he&&he.isValid&&he.texture&&R.init(he,l.renderState)}if(zt&&zt.includes("camera-access")&&(e.state.unbindTexture(),g))for(let he=0;he<_t.length;he++){const F=_t[he].camera;if(F){let Me=y[F];Me||(Me=new J0,y[F]=Me);const Jt=g.getCameraImage(F);Me.sourceTexture=Jt}}}for(let _t=0;_t<U.length;_t++){const Ht=H[_t],zt=U[_t];Ht!==null&&zt!==void 0&&zt.update(Ht,vt,p||h)}at&&at(Q,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),A=null}const Rt=new W0;Rt.setAnimationLoop(Et),this.setAnimationLoop=function(Q){at=Q},this.dispose=function(){}}}const fs=new Ni,kb=new $e;function Xb(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,G0(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,G,P,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,U)):v.isMeshMatcapMaterial?(u(y,v),A(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),R(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,G,P):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const G=e.get(v),P=G.envMap,U=G.envMapRotation;P&&(y.envMap.value=P,fs.copy(U),fs.x*=-1,fs.y*=-1,fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),y.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(fs)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,G,P){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*G,y.scale.value=P*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,G){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=G.texture,y.transmissionSamplerSize.value.set(G.width,G.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const G=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(G.matrixWorld),y.nearDistance.value=G.shadow.camera.near,y.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jb(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,P){const U=P.program;s.uniformBlockBinding(G,U)}function p(G,P){let U=l[G.id];U===void 0&&(A(G),U=x(G),l[G.id]=U,G.addEventListener("dispose",y));const H=P.program;s.updateUBOMapping(G,H);const V=e.render.frame;u[G.id]!==V&&(S(G),u[G.id]=V)}function x(G){const P=g();G.__bindingPointIndex=P;const U=o.createBuffer(),H=G.__size,V=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,H,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function g(){for(let G=0;G<d;G++)if(h.indexOf(G)===-1)return h.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(G){const P=l[G.id],U=G.uniforms,H=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let V=0,B=U.length;V<B;V++){const W=Array.isArray(U[V])?U[V]:[U[V]];for(let w=0,C=W.length;w<C;w++){const D=W[w];if(M(D,V,w,H)===!0){const J=D.__offset,nt=Array.isArray(D.value)?D.value:[D.value];let ct=0;for(let ft=0;ft<nt.length;ft++){const z=nt[ft],K=R(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,J+ct,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,ct),ct+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,D.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(G,P,U,H){const V=G.value,B=P+"_"+U;if(H[B]===void 0)return typeof V=="number"||typeof V=="boolean"?H[B]=V:H[B]=V.clone(),!0;{const W=H[B];if(typeof V=="number"||typeof V=="boolean"){if(W!==V)return H[B]=V,!0}else if(W.equals(V)===!1)return W.copy(V),!0}return!1}function A(G){const P=G.uniforms;let U=0;const H=16;for(let B=0,W=P.length;B<W;B++){const w=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,D=w.length;C<D;C++){const J=w[C],nt=Array.isArray(J.value)?J.value:[J.value];for(let ct=0,ft=nt.length;ct<ft;ct++){const z=nt[ct],K=R(z),q=U%H,St=q%K.boundary,Tt=q+St;U+=St,Tt!==0&&H-Tt<K.storage&&(U+=H-Tt),J.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=K.storage}}}const V=U%H;return V>0&&(U+=H-V),G.__size=U,G.__cache={},this}function R(G){const P={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(P.boundary=4,P.storage=4):G.isVector2?(P.boundary=8,P.storage=8):G.isVector3||G.isColor?(P.boundary=16,P.storage=12):G.isVector4?(P.boundary=16,P.storage=16):G.isMatrix3?(P.boundary=48,P.storage=48):G.isMatrix4?(P.boundary=64,P.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),P}function y(G){const P=G.target;P.removeEventListener("dispose",y);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function v(){for(const G in l)o.deleteBuffer(l[G]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class qb{constructor(e={}){const{canvas:i=Sy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const G=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let H=!1;this._outputColorSpace=Vn;let V=0,B=0,W=null,w=-1,C=null;const D=new He,J=new He;let nt=null;const ct=new Ce(0);let ft=0,z=i.width,K=i.height,q=1,St=null,Tt=null;const O=new He(0,0,z,K),at=new He(0,0,z,K);let Et=!1;const Rt=new bd;let Q=!1,vt=!1;const _t=new $e,Ht=new it,zt=new He,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function he(){return W===null?q:1}let F=s;function Me(b,j){return i.getContext(b,j)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${md}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),F===null){const j="webgl2";if(F=Me(j,b),F===null)throw Me(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Jt,xe,Zt,Ge,It,se,Ke,Ze,L,E,et,dt,yt,ut,Wt,Ct,jt,qt,bt,wt,Yt,Pt,Ut,re;function X(){Jt=new nT(F),Jt.init(),Pt=new Ib(F,Jt),xe=new Z1(F,Jt,e,Pt),Zt=new Pb(F,Jt),xe.reversedDepthBuffer&&S&&Zt.buffers.depth.setReversed(!0),Ge=new sT(F),It=new Eb,se=new Bb(F,Jt,Zt,It,xe,Pt,Ge),Ke=new Q1(U),Ze=new eT(U),L=new fM(F),Ut=new W1(F,L),E=new iT(F,L,Ge,Ut),et=new oT(F,E,L,Ge),bt=new rT(F,xe,se),Ct=new K1(It),dt=new Mb(U,Ke,Ze,Jt,xe,Ut,Ct),yt=new Xb(U,It),ut=new bb,Wt=new Ub(Jt),qt=new q1(U,Ke,Ze,Zt,et,M,m),jt=new Ob(U,et,xe),re=new jb(F,Ge,xe,Zt),wt=new Y1(F,Jt,Ge),Yt=new aT(F,Jt,Ge),Ge.programs=dt.programs,U.capabilities=xe,U.extensions=Jt,U.properties=It,U.renderLists=ut,U.shadowMap=jt,U.state=Zt,U.info=Ge}X();const At=new Vb(U,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(z,K,!1))},this.getSize=function(b){return b.set(z,K)},this.setSize=function(b,j,rt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,K=j,i.width=Math.floor(b*q),i.height=Math.floor(j*q),rt===!0&&(i.style.width=b+"px",i.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(z*q,K*q).floor()},this.setDrawingBufferSize=function(b,j,rt){z=b,K=j,q=rt,i.width=Math.floor(b*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,j,rt,ot){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,rt,ot),Zt.viewport(D.copy(O).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,j,rt,ot){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,j,rt,ot),Zt.scissor(J.copy(at).multiplyScalar(q).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(b){Zt.setScissorTest(Et=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,rt=!0){let ot=0;if(b){let Y=!1;if(W!==null){const xt=W.texture.format;Y=xt===yd||xt===Sd||xt===xd}if(Y){const xt=W.texture.type,Lt=xt===Li||xt===xs||xt===No||xt===Oo||xt===_d||xt===vd,Vt=qt.getClearColor(),Ot=qt.getClearAlpha(),Kt=Vt.r,ne=Vt.g,Qt=Vt.b;Lt?(A[0]=Kt,A[1]=ne,A[2]=Qt,A[3]=Ot,F.clearBufferuiv(F.COLOR,0,A)):(R[0]=Kt,R[1]=ne,R[2]=Qt,R[3]=Ot,F.clearBufferiv(F.COLOR,0,R))}else ot|=F.COLOR_BUFFER_BIT}j&&(ot|=F.DEPTH_BUFFER_BIT),rt&&(ot|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),ut.dispose(),Wt.dispose(),It.dispose(),Ke.dispose(),Ze.dispose(),et.dispose(),Ut.dispose(),re.dispose(),dt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ei),At.removeEventListener("sessionend",Lr),Mi.stop()};function Dt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const b=Ge.autoReset,j=jt.enabled,rt=jt.autoUpdate,ot=jt.needsUpdate,Y=jt.type;X(),Ge.autoReset=b,jt.enabled=j,jt.autoUpdate=rt,jt.needsUpdate=ot,jt.type=Y}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const j=b.target;j.removeEventListener("dispose",gt),Ft(j)}function Ft(b){ie(b),It.remove(b)}function ie(b){const j=It.get(b).programs;j!==void 0&&(j.forEach(function(rt){dt.releaseProgram(rt)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,rt,ot,Y,xt){j===null&&(j=ee);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Vt=ra(b,j,rt,ot,Y);Zt.setMaterial(ot,Lt);let Ot=rt.index,Kt=1;if(ot.wireframe===!0){if(Ot=E.getWireframeAttribute(rt),Ot===void 0)return;Kt=2}const ne=rt.drawRange,Qt=rt.attributes.position;let fe=ne.start*Kt,Ue=(ne.start+ne.count)*Kt;xt!==null&&(fe=Math.max(fe,xt.start*Kt),Ue=Math.min(Ue,(xt.start+xt.count)*Kt)),Ot!==null?(fe=Math.max(fe,0),Ue=Math.min(Ue,Ot.count)):Qt!=null&&(fe=Math.max(fe,0),Ue=Math.min(Ue,Qt.count));const Ve=Ue-fe;if(Ve<0||Ve===1/0)return;Ut.setup(Y,ot,Vt,rt,Ot);let Le,de=wt;if(Ot!==null&&(Le=L.get(Ot),de=Yt,de.setIndex(Le)),Y.isMesh)ot.wireframe===!0?(Zt.setLineWidth(ot.wireframeLinewidth*he()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(Y.isLine){let kt=ot.linewidth;kt===void 0&&(kt=1),Zt.setLineWidth(kt*he()),Y.isLineSegments?de.setMode(F.LINES):Y.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else Y.isPoints?de.setMode(F.POINTS):Y.isSprite&&de.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))de.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const kt=Y._multiDrawStarts,je=Y._multiDrawCounts,Te=Y._multiDrawCount,Sn=Ot?L.get(Ot).bytesPerElement:1,Oi=It.get(ot).currentProgram.getUniforms();for(let gn=0;gn<Te;gn++)Oi.setValue(F,"_gl_DrawID",gn),de.render(kt[gn]/Sn,je[gn])}else if(Y.isInstancedMesh)de.renderInstances(fe,Ve,Y.count);else if(rt.isInstancedBufferGeometry){const kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,je=Math.min(rt.instanceCount,kt);de.renderInstances(fe,Ve,je)}else de.render(fe,Ve)};function Ne(b,j,rt){b.transparent===!0&&b.side===_i&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,Xn(b,j,rt),b.side=Fa,b.needsUpdate=!0,Xn(b,j,rt),b.side=_i):Xn(b,j,rt)}this.compile=function(b,j,rt=null){rt===null&&(rt=b),v=Wt.get(rt),v.init(j),P.push(v),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),b!==rt&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const ot=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const xt=Y.material;if(xt)if(Array.isArray(xt))for(let Lt=0;Lt<xt.length;Lt++){const Vt=xt[Lt];Ne(Vt,rt,Y),ot.add(Vt)}else Ne(xt,rt,Y),ot.add(xt)}),v=P.pop(),ot},this.compileAsync=function(b,j,rt=null){const ot=this.compile(b,j,rt);return new Promise(Y=>{function xt(){if(ot.forEach(function(Lt){It.get(Lt).currentProgram.isReady()&&ot.delete(Lt)}),ot.size===0){Y(b);return}setTimeout(xt,10)}Jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ee=null;function Dn(b){Ee&&Ee(b)}function ei(){Mi.stop()}function Lr(){Mi.start()}const Mi=new W0;Mi.setAnimationLoop(Dn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){Ee=b,At.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},At.addEventListener("sessionstart",ei),At.addEventListener("sessionend",Lr),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,j,W),v=Wt.get(b,P.length),v.init(j),P.push(v),_t.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Rt.setFromProjectionMatrix(_t,Di,j.reversedDepth),vt=this.localClippingEnabled,Q=Ct.init(this.clippingPlanes,vt),y=ut.get(b,G.length),y.init(),G.push(y),At.enabled===!0&&At.isPresenting===!0){const xt=U.xr.getDepthSensingMesh();xt!==null&&Ms(xt,j,-1/0,U.sortObjects)}Ms(b,j,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(St,Tt),Xe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Xe&&qt.addToRenderList(y,b),this.info.render.frame++,Q===!0&&Ct.beginShadows();const rt=v.state.shadowsArray;jt.render(rt,b,j),Q===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Y=y.transmissive;if(v.setupLights(),j.isArrayCamera){const xt=j.cameras;if(Y.length>0)for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++){const Ot=xt[Lt];Ts(ot,Y,b,Ot)}Xe&&qt.render(b);for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++){const Ot=xt[Lt];Es(y,b,Ot,Ot.viewport)}}else Y.length>0&&Ts(ot,Y,b,j),Xe&&qt.render(b),Es(y,b,j);W!==null&&B===0&&(se.updateMultisampleRenderTarget(W),se.updateRenderTargetMipmap(W)),b.isScene===!0&&b.onAfterRender(U,b,j),Ut.resetDefaultState(),w=-1,C=null,P.pop(),P.length>0?(v=P[P.length-1],Q===!0&&Ct.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,G.pop(),G.length>0?y=G[G.length-1]:y=null};function Ms(b,j,rt,ot){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)rt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Rt.intersectsSprite(b)){ot&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const Lt=et.update(b),Vt=b.material;Vt.visible&&y.push(b,Lt,Vt,rt,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Rt.intersectsObject(b))){const Lt=et.update(b),Vt=b.material;if(ot&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Vt)){const Ot=Lt.groups;for(let Kt=0,ne=Ot.length;Kt<ne;Kt++){const Qt=Ot[Kt],fe=Vt[Qt.materialIndex];fe&&fe.visible&&y.push(b,Lt,fe,rt,zt.z,Qt)}}else Vt.visible&&y.push(b,Lt,Vt,rt,zt.z,null)}}const xt=b.children;for(let Lt=0,Vt=xt.length;Lt<Vt;Lt++)Ms(xt[Lt],j,rt,ot)}function Es(b,j,rt,ot){const Y=b.opaque,xt=b.transmissive,Lt=b.transparent;v.setupLightsView(rt),Q===!0&&Ct.setGlobalState(U.clippingPlanes,rt),ot&&Zt.viewport(D.copy(ot)),Y.length>0&&Ga(Y,j,rt),xt.length>0&&Ga(xt,j,rt),Lt.length>0&&Ga(Lt,j,rt),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Ts(b,j,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Ss(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Io:Li,minFilter:_s,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const xt=v.state.transmissionRenderTarget[ot.id],Lt=ot.viewport||D;xt.setSize(Lt.z*U.transmissionResolutionScale,Lt.w*U.transmissionResolutionScale);const Vt=U.getRenderTarget(),Ot=U.getActiveCubeFace(),Kt=U.getActiveMipmapLevel();U.setRenderTarget(xt),U.getClearColor(ct),ft=U.getClearAlpha(),ft<1&&U.setClearColor(16777215,.5),U.clear(),Xe&&qt.render(rt);const ne=U.toneMapping;U.toneMapping=Ia;const Qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),Q===!0&&Ct.setGlobalState(U.clippingPlanes,ot),Ga(b,rt,ot),se.updateMultisampleRenderTarget(xt),se.updateRenderTargetMipmap(xt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ue=0,Ve=j.length;Ue<Ve;Ue++){const Le=j[Ue],de=Le.object,kt=Le.geometry,je=Le.material,Te=Le.group;if(je.side===_i&&de.layers.test(ot.layers)){const Sn=je.side;je.side=kn,je.needsUpdate=!0,Nr(de,rt,ot,kt,je,Te),je.side=Sn,je.needsUpdate=!0,fe=!0}}fe===!0&&(se.updateMultisampleRenderTarget(xt),se.updateRenderTargetMipmap(xt))}U.setRenderTarget(Vt,Ot,Kt),U.setClearColor(ct,ft),Qt!==void 0&&(ot.viewport=Qt),U.toneMapping=ne}function Ga(b,j,rt){const ot=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,xt=b.length;Y<xt;Y++){const Lt=b[Y],Vt=Lt.object,Ot=Lt.geometry,Kt=Lt.group;let ne=Lt.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),Vt.layers.test(rt.layers)&&Nr(Vt,j,rt,Ot,ne,Kt)}}function Nr(b,j,rt,ot,Y,xt){b.onBeforeRender(U,j,rt,ot,Y,xt),b.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(U,j,rt,ot,b,xt),Y.transparent===!0&&Y.side===_i&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,U.renderBufferDirect(rt,j,ot,Y,b,xt),Y.side=Fa,Y.needsUpdate=!0,U.renderBufferDirect(rt,j,ot,Y,b,xt),Y.side=_i):U.renderBufferDirect(rt,j,ot,Y,b,xt),b.onAfterRender(U,j,rt,ot,Y,xt)}function Xn(b,j,rt){j.isScene!==!0&&(j=ee);const ot=It.get(b),Y=v.state.lights,xt=v.state.shadowsArray,Lt=Y.state.version,Vt=dt.getParameters(b,Y.state,xt,j,rt),Ot=dt.getProgramCacheKey(Vt);let Kt=ot.programs;ot.environment=b.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(b.isMeshStandardMaterial?Ze:Ke).get(b.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",gt),Kt=new Map,ot.programs=Kt);let ne=Kt.get(Ot);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Lt)return xn(b,Vt),ne}else Vt.uniforms=dt.getUniforms(b),b.onBeforeCompile(Vt,U),ne=dt.acquireProgram(Vt,Ot),Kt.set(Ot,ne),ot.uniforms=Vt.uniforms;const Qt=ot.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Qt.clippingPlanes=Ct.uniform),xn(b,Vt),ot.needsLights=Lc(b),ot.lightsStateVersion=Lt,ot.needsLights&&(Qt.ambientLightColor.value=Y.state.ambient,Qt.lightProbe.value=Y.state.probe,Qt.directionalLights.value=Y.state.directional,Qt.directionalLightShadows.value=Y.state.directionalShadow,Qt.spotLights.value=Y.state.spot,Qt.spotLightShadows.value=Y.state.spotShadow,Qt.rectAreaLights.value=Y.state.rectArea,Qt.ltc_1.value=Y.state.rectAreaLTC1,Qt.ltc_2.value=Y.state.rectAreaLTC2,Qt.pointLights.value=Y.state.point,Qt.pointLightShadows.value=Y.state.pointShadow,Qt.hemisphereLights.value=Y.state.hemi,Qt.directionalShadowMap.value=Y.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Qt.spotShadowMap.value=Y.state.spotShadowMap,Qt.spotLightMatrix.value=Y.state.spotLightMatrix,Qt.spotLightMap.value=Y.state.spotLightMap,Qt.pointShadowMap.value=Y.state.pointShadowMap,Qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function sn(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Ac.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function xn(b,j){const rt=It.get(b);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function ra(b,j,rt,ot,Y){j.isScene!==!0&&(j=ee),se.resetTextureUnits();const xt=j.fog,Lt=ot.isMeshStandardMaterial?j.environment:null,Vt=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Rr,Ot=(ot.isMeshStandardMaterial?Ze:Ke).get(ot.envMap||Lt),Kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ne=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!rt.morphAttributes.position,fe=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color;let Ve=Ia;ot.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,de=Le!==void 0?Le.length:0,kt=It.get(ot),je=v.state.lights;if(Q===!0&&(vt===!0||b!==C)){const fn=b===C&&ot.id===w;Ct.setState(ot,b,fn)}let Te=!1;ot.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==je.state.version||kt.outputColorSpace!==Vt||Y.isBatchedMesh&&kt.batching===!1||!Y.isBatchedMesh&&kt.batching===!0||Y.isBatchedMesh&&kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&kt.instancing===!1||!Y.isInstancedMesh&&kt.instancing===!0||Y.isSkinnedMesh&&kt.skinning===!1||!Y.isSkinnedMesh&&kt.skinning===!0||Y.isInstancedMesh&&kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&kt.instancingMorph===!1&&Y.morphTexture!==null||kt.envMap!==Ot||ot.fog===!0&&kt.fog!==xt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ct.numPlanes||kt.numIntersection!==Ct.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==ne||kt.morphTargets!==Qt||kt.morphNormals!==fe||kt.morphColors!==Ue||kt.toneMapping!==Ve||kt.morphTargetsCount!==de)&&(Te=!0):(Te=!0,kt.__version=ot.version);let Sn=kt.currentProgram;Te===!0&&(Sn=Xn(ot,j,Y));let Oi=!1,gn=!1,ka=!1;const ge=Sn.getUniforms(),An=kt.uniforms;if(Zt.useProgram(Sn.program)&&(Oi=!0,gn=!0,ka=!0),ot.id!==w&&(w=ot.id,gn=!0),Oi||C!==b){Zt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ge.setValue(F,"projectionMatrix",b.projectionMatrix),ge.setValue(F,"viewMatrix",b.matrixWorldInverse);const tn=ge.map.cameraPosition;tn!==void 0&&tn.setValue(F,Ht.setFromMatrixPosition(b.matrixWorld)),xe.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ge.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,gn=!0,ka=!0)}if(Y.isSkinnedMesh){ge.setOptional(F,Y,"bindMatrix"),ge.setOptional(F,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ge.setValue(F,"boneTexture",fn.boneTexture,se))}Y.isBatchedMesh&&(ge.setOptional(F,Y,"batchingTexture"),ge.setValue(F,"batchingTexture",Y._matricesTexture,se),ge.setOptional(F,Y,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",Y._indirectTexture,se),ge.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",Y._colorsTexture,se));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&bt.update(Y,rt,Sn),(gn||kt.receiveShadow!==Y.receiveShadow)&&(kt.receiveShadow=Y.receiveShadow,ge.setValue(F,"receiveShadow",Y.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=Ot,An.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(An.envMapIntensity.value=j.environmentIntensity),gn&&(ge.setValue(F,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&Or(An,ka),xt&&ot.fog===!0&&yt.refreshFogUniforms(An,xt),yt.refreshMaterialUniforms(An,ot,q,K,v.state.transmissionRenderTarget[b.id]),Ac.upload(F,sn(kt),An,se)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ac.upload(F,sn(kt),An,se),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ge.setValue(F,"center",Y.center),ge.setValue(F,"modelViewMatrix",Y.modelViewMatrix),ge.setValue(F,"normalMatrix",Y.normalMatrix),ge.setValue(F,"modelMatrix",Y.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let tn=0,bs=fn.length;tn<bs;tn++){const Ei=fn[tn];re.update(Ei,Sn),re.bind(Ei,Sn)}}return Sn}function Or(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Lc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,j,rt){const ot=It.get(b);ot.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),It.get(b.texture).__webglTexture=j,It.get(b.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const rt=It.get(b);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Nc=F.createFramebuffer();this.setRenderTarget=function(b,j=0,rt=0){W=b,V=j,B=rt;let ot=!0,Y=null,xt=!1,Lt=!1;if(b){const Ot=It.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(F.FRAMEBUFFER,null),ot=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Ot.__hasExternalTextures)se.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qt=b.depthTexture;if(Ot.__boundDepthTexture!==Qt){if(Qt!==null&&It.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Kt=b.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);const ne=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ne[j])?Y=ne[j][rt]:Y=ne[j],xt=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?Y=It.get(b).__webglMultisampledFramebuffer:Array.isArray(ne)?Y=ne[rt]:Y=ne,D.copy(b.viewport),J.copy(b.scissor),nt=b.scissorTest}else D.copy(O).multiplyScalar(q).floor(),J.copy(at).multiplyScalar(q).floor(),nt=Et;if(rt!==0&&(Y=Nc),Zt.bindFramebuffer(F.FRAMEBUFFER,Y)&&ot&&Zt.drawBuffers(b,Y),Zt.viewport(D),Zt.scissor(J),Zt.setScissorTest(nt),xt){const Ot=It.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,rt)}else if(Lt){const Ot=j;for(let Kt=0;Kt<b.textures.length;Kt++){const ne=It.get(b.textures[Kt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,rt,Ot)}}else if(b!==null&&rt!==0){const Ot=It.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ot.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(b,j,rt,ot,Y,xt,Lt,Vt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Zt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Kt=b.textures[Vt],ne=Kt.format,Qt=Kt.type;if(!xe.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-ot&&rt>=0&&rt<=b.height-Y&&(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Vt),F.readPixels(j,rt,ot,Y,Pt.convert(ne),Pt.convert(Qt),xt))}finally{const Kt=W!==null?It.get(W).__webglFramebuffer:null;Zt.bindFramebuffer(F.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(b,j,rt,ot,Y,xt,Lt,Vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(j>=0&&j<=b.width-ot&&rt>=0&&rt<=b.height-Y){Zt.bindFramebuffer(F.FRAMEBUFFER,Ot);const Kt=b.textures[Vt],ne=Kt.format,Qt=Kt.type;if(!xe.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Vt),F.readPixels(j,rt,ot,Y,Pt.convert(ne),Pt.convert(Qt),0);const Ue=W!==null?It.get(W).__webglFramebuffer:null;Zt.bindFramebuffer(F.FRAMEBUFFER,Ue);const Ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yy(F,Ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.deleteBuffer(fe),F.deleteSync(Ve),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,rt=0){const ot=Math.pow(2,-rt),Y=Math.floor(b.image.width*ot),xt=Math.floor(b.image.height*ot),Lt=j!==null?j.x:0,Vt=j!==null?j.y:0;se.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Lt,Vt,Y,xt),Zt.unbindTexture()};const Xo=F.createFramebuffer(),Va=F.createFramebuffer();this.copyTextureToTexture=function(b,j,rt=null,ot=null,Y=0,xt=null){xt===null&&(Y!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=Y,Y=0):xt=0);let Lt,Vt,Ot,Kt,ne,Qt,fe,Ue,Ve;const Le=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Vt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,ne=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const Un=Math.pow(2,-Y);Lt=Math.floor(Le.width*Un),Vt=Math.floor(Le.height*Un),b.isDataArrayTexture?Ot=Le.depth:b.isData3DTexture?Ot=Math.floor(Le.depth*Un):Ot=1,Kt=0,ne=0,Qt=0}ot!==null?(fe=ot.x,Ue=ot.y,Ve=ot.z):(fe=0,Ue=0,Ve=0);const de=Pt.convert(j.format),kt=Pt.convert(j.type);let je;j.isData3DTexture?(se.setTexture3D(j,0),je=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(se.setTexture2DArray(j,0),je=F.TEXTURE_2D_ARRAY):(se.setTexture2D(j,0),je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),Sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Oi=F.getParameter(F.UNPACK_SKIP_PIXELS),gn=F.getParameter(F.UNPACK_SKIP_ROWS),ka=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);const ge=b.isDataArrayTexture||b.isData3DTexture,An=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const Un=It.get(b),fn=It.get(j),tn=It.get(Un.__renderTarget),bs=It.get(fn.__renderTarget);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,tn.__webglFramebuffer),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Ei=0;Ei<Ot;Ei++)ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(b).__webglTexture,Y,Qt+Ei),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(j).__webglTexture,xt,Ve+Ei)),F.blitFramebuffer(Kt,ne,Lt,Vt,fe,Ue,Lt,Vt,F.DEPTH_BUFFER_BIT,F.NEAREST);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||It.has(b)){const Un=It.get(b),fn=It.get(j);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,Xo),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Va);for(let tn=0;tn<Ot;tn++)ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,Y,Qt+tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,Y),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,xt,Ve+tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,xt),Y!==0?F.blitFramebuffer(Kt,ne,Lt,Vt,fe,Ue,Lt,Vt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(je,xt,fe,Ue,Ve+tn,Kt,ne,Lt,Vt):F.copyTexSubImage2D(je,xt,fe,Ue,Kt,ne,Lt,Vt);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(je,xt,fe,Ue,Ve,Lt,Vt,Ot,de,kt,Le.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(je,xt,fe,Ue,Ve,Lt,Vt,Ot,de,Le.data):F.texSubImage3D(je,xt,fe,Ue,Ve,Lt,Vt,Ot,de,kt,Le):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,fe,Ue,Lt,Vt,de,kt,Le.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,fe,Ue,Le.width,Le.height,de,Le.data):F.texSubImage2D(F.TEXTURE_2D,xt,fe,Ue,Lt,Vt,de,kt,Le);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Oi),F.pixelStorei(F.UNPACK_SKIP_ROWS,gn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ka),xt===0&&j.generateMipmaps&&F.generateMipmap(je),Zt.unbindTexture()},this.copyTextureToTexture3D=function(b,j,rt=null,ot=null,Y=0){return Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,j,rt,ot,Y)},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),Zt.unbindTexture()},this.resetState=function(){V=0,B=0,W=null,Zt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}const S0=[{id:1,name:"Aero Flux 01",category:"Running",price:149,old:179,tag:"New Release",colorName:"Champagne Gold / Slate",imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",swatches:["#e8e5df","#c49a45","#111113"],sizes:[7,8,9,10,11],rating:4.9,reviews:128,description:"Sculpted for maximum energy return and lightweight motion. Features engineered mesh and champagne gold metallic counter stabilization."},{id:2,name:"Shadow Core Stealth",category:"Street",price:169,old:199,tag:"Best Seller",colorName:"Matte Obsidian / Platinum",imageUrl:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",swatches:["#151517","#dfbd75","#ffffff"],sizes:[7,8,9,10,11,12],rating:4.8,reviews:94,description:"Sleek low-profile street silhouette built with water-resistant matte leather and multi-density foam outsoles."},{id:3,name:"Sovereign X Pro",category:"Running",price:189,old:219,tag:"Trending",colorName:"Onyx / Brushed Amber",imageUrl:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",swatches:["#222226","#c49a45","#68686e"],sizes:[8,9,10,11],rating:4.9,reviews:210,description:"Elite marathon-grade performance running sneaker equipped with carbon plate transition and adaptive cushioning."},{id:4,name:"Mono Court Heritage",category:"Lifestyle",price:129,old:149,tag:"Classic",colorName:"Alabaster / Warm Copper",imageUrl:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",swatches:["#f5f4ef","#d9825b","#333333"],sizes:[7,8,9,10,11],rating:4.8,reviews:67,description:"Timeless court silhouette handcrafted from full-grain Italian leather with hand-stitched rubber cupsole."},{id:5,name:"Obsidian 90 Limited",category:"Street",price:199,old:229,tag:"Limited Edition",colorName:"Midnight / Carbon Fiber",imageUrl:"https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",swatches:["#1c1a24","#c084fc","#111113"],sizes:[8,9,10,11,12],rating:5,reviews:312,description:"Numbered limited edition drop. Carbon fiber shank plate with translucent grip pattern and gold foil heel branding."},{id:6,name:"Cloud Step Ultra",category:"Lifestyle",price:139,old:159,tag:"New",colorName:"Pure White / Electric Blue",imageUrl:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",swatches:["#e9f1f7","#38bdf8","#111113"],sizes:[7,8,9,10],rating:4.7,reviews:53,description:"Ultra-breathable knit lifestyle sneaker designed for all-day comfort, effortless slip-on fit, and weightless stride."}];function Rc({imageUrl:o="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",compact:e=!1,interactiveHover:i=!1}){const s=dn.useRef(null);return dn.useEffect(()=>{if(!s.current)return;let l,u,h,d,m;const p=s.current;let x=-.15,g=-.2,S=-.15,M=-.2,A=!1,R={x:0,y:0},y={x:0,y:0};const v=H=>{const V=p.getBoundingClientRect(),B=((H.clientX-V.left)/V.width-.5)*2,W=((H.clientY-V.top)/V.height-.5)*2;if(A){const w=(H.clientX-R.x)*.008,C=(H.clientY-R.y)*.008;y.y+=w,y.x+=C,R={x:H.clientX,y:H.clientY}}else g=B*.8-.2,x=W*.4-.15},G=H=>{A=!0,R={x:H.clientX,y:H.clientY},p&&(p.style.cursor="grabbing")},P=()=>{A=!1,p&&(p.style.cursor="grab")},U=i?p:window;U.addEventListener("pointermove",v),e||(p.addEventListener("pointerdown",G),window.addEventListener("pointerup",P));try{h=new Wy,d=new ti(35,1,.1,100),d.position.set(0,0,e?5.8:5.2),u=new qb({antialias:!0,alpha:!0}),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(p.clientWidth||300,p.clientHeight||300),u.outputColorSpace=Vn,p.appendChild(u.domElement),e||(p.style.cursor="grab"),m=new Uo;const H=new iM;H.crossOrigin="anonymous",H.load(o,D=>{D.colorSpace=Vn;const J=new wr(3.6,2.7,32,32),nt=J.attributes.position;for(let St=0;St<nt.count;St++){const Tt=(nt.getX(St)+1.8)/3.6,O=(nt.getY(St)+1.35)/2.7,at=-Math.pow(Tt-.5,2)*.45-Math.pow(O-.5,2)*.25;nt.setZ(St,at)}J.computeVertexNormals();const ct=new Qy({map:D,transparent:!0,side:_i,roughness:.35,metalness:.15}),ft=new Si(J,ct);m.add(ft);const z=new wr(3.8,1.2),K=new Td({color:0,transparent:!0,opacity:.22,side:_i}),q=new Si(z,K);q.rotation.x=Math.PI/2,q.position.set(0,-1.3,0),m.add(q)}),h.add(m),h.add(new aM(16777215,2039588,2.8));const V=new lM(16775663,3.5);V.position.set(3,5,5),h.add(V);const B=new rM(12884549,7,12);B.position.set(-3,1,3),h.add(B);const W=()=>{if(!p)return;const D=p.clientWidth||300,J=p.clientHeight||300;d.aspect=D/J,d.updateProjectionMatrix(),u.setSize(D,J)};window.addEventListener("resize",W);let w=Math.random()*10;const C=()=>{l=requestAnimationFrame(C),w+=.012;const D=Math.sin(w)*.04,J=Math.cos(w*.7)*.03,nt=g+y.y+D,ct=x+y.x+J;M+=(nt-M)*.07,S+=(ct-S)*.07,m&&(m.rotation.y=M,m.rotation.x=S),u.render(h,d)};return C(),()=>{l&&cancelAnimationFrame(l),U.removeEventListener("pointermove",v),e||(p.removeEventListener("pointerdown",G),window.removeEventListener("pointerup",P)),window.removeEventListener("resize",W),u&&(u.dispose(),p&&u.domElement&&p.contains(u.domElement)&&p.removeChild(u.domElement))}}catch(H){console.warn("WebGL initialization skipped:",H)}},[o,e,i]),N.jsx("div",{ref:s,className:"shoe3d "+(e?"compact":""),"aria-label":"Cursor-responsive real 3D sneaker canvas"})}function Wb({p:o,onAdd:e,onWish:i,wished:s,onQuickView:l}){const[u,h]=dn.useState(o.sizes[1]||o.sizes[0]);return N.jsxs("article",{className:"product-card",children:[N.jsxs("div",{className:"product-art",onClick:()=>l(o),children:[N.jsx("span",{className:"tag",children:o.tag}),N.jsx("button",{className:"wish-btn "+(s?"active":""),onClick:d=>{d.stopPropagation(),i(o.id)},"aria-label":"Wishlist",children:N.jsx(SS,{size:18,fill:s?"currentColor":"none"})}),N.jsx("div",{className:"card-3d-wrapper",children:N.jsx(Rc,{imageUrl:o.imageUrl,compact:!0,interactiveHover:!0})}),N.jsx("div",{className:"quick-view-overlay",children:N.jsxs("button",{className:"quick-view-btn",children:[N.jsx(vS,{size:15})," Quick View"]})})]}),N.jsxs("div",{className:"product-info",children:[N.jsxs("div",{className:"product-info-header",children:[N.jsxs("div",{children:[N.jsx("span",{className:"muted",children:o.category}),N.jsx("h3",{children:o.name}),N.jsx("span",{className:"color-name",children:o.colorName})]}),N.jsxs("div",{className:"price",children:[N.jsxs("b",{children:["$",o.price]}),N.jsxs("del",{children:["$",o.old]})]})]}),N.jsx("div",{className:"swatch-list",children:o.swatches.map((d,m)=>N.jsx("div",{className:"swatch-dot",style:{background:d}},m))}),N.jsxs("div",{className:"rating",children:[N.jsx(wS,{size:14,fill:"currentColor"})," ",o.rating,N.jsxs("span",{className:"rating-count",children:["(",o.reviews," reviews)"]})]}),N.jsx("div",{className:"size-selector",children:o.sizes.map(d=>N.jsxs("button",{className:"size-pill "+(u===d?"active":""),onClick:()=>h(d),children:["UK ",d]},d))}),N.jsxs("button",{className:"add-btn",onClick:()=>e(o,u),children:["Add to bag ",N.jsx(xr,{size:16})]})]})]})}function Yb(){const[o,e]=dn.useState([]),[i,s]=dn.useState([]),[l,u]=dn.useState(""),[h,d]=dn.useState("All"),[m,p]=dn.useState("featured"),[x,g]=dn.useState(!1),[S,M]=dn.useState(!1),[A,R]=dn.useState(!1),[y,v]=dn.useState(null),[G,P]=dn.useState(""),U=D=>{P(D),setTimeout(()=>P(""),3200)},H=dn.useMemo(()=>{let D=S0.filter(J=>(h==="All"||J.category===h)&&J.name.toLowerCase().includes(l.toLowerCase()));return m==="price-low"&&D.sort((J,nt)=>J.price-nt.price),m==="price-high"&&D.sort((J,nt)=>nt.price-J.price),m==="rating"&&D.sort((J,nt)=>nt.rating-J.rating),D},[h,l,m]),V=(D,J)=>{const nt=J||D.sizes[0];e(ct=>ct.find(z=>z.id===D.id&&z.selectedSize===nt)?ct.map(z=>z.id===D.id&&z.selectedSize===nt?{...z,qty:z.qty+1}:z):[...ct,{...D,selectedSize:nt,qty:1}]),U(`Added ${D.name} (UK ${nt}) to bag!`)},B=D=>{const J=S0.find(nt=>nt.id===D);s(nt=>{const ct=nt.includes(D);return!ct&&J&&U(`Saved ${J.name} to wishlist!`),ct?nt.filter(ft=>ft!==D):[...nt,D]})},W=(D,J,nt)=>e(ct=>ct.map(ft=>ft.id===D&&ft.selectedSize===J?{...ft,qty:ft.qty+nt}:ft).filter(ft=>ft.qty>0)),w=o.reduce((D,J)=>D+J.price*J.qty,0),C=o.reduce((D,J)=>D+J.qty,0);return N.jsxs("div",{className:"app",children:[G&&N.jsxs("div",{className:"toast",children:[N.jsx(_S,{size:18}),N.jsx("span",{children:G})]}),N.jsxs("div",{className:"announcement",children:["FREE EXPRESS SHIPPING ON ORDERS OVER $100 ",N.jsx("span",{children:"·"})," EASY 30-DAY RETURNS"]}),N.jsxs("header",{className:"nav",children:[N.jsx("button",{className:"mobile-menu",onClick:()=>g(!x),children:x?N.jsx(jf,{}):N.jsx(MS,{})}),N.jsxs("a",{className:"logo",href:"#home",children:["SOLEVA",N.jsx("span",{children:"®"})]}),N.jsxs("nav",{className:x?"nav-links open":"nav-links",children:[N.jsx("a",{href:"#home",onClick:()=>g(!1),children:"Home"}),N.jsx("a",{href:"#shop",onClick:()=>g(!1),children:"Shop"}),N.jsx("a",{href:"#story",onClick:()=>g(!1),children:"Our story"}),N.jsx("a",{href:"#journal",onClick:()=>g(!1),children:"Journal"})]}),N.jsxs("div",{className:"nav-actions",children:[N.jsxs("label",{className:"search-box",children:[N.jsx(AS,{size:18}),N.jsx("input",{value:l,onChange:D=>u(D.target.value),placeholder:"Search sneakers"})]}),N.jsxs("button",{onClick:()=>M(!0),className:"icon-btn bag","aria-label":"Open cart",children:[N.jsx(S_,{}),N.jsx("b",{children:C})]})]})]}),N.jsxs("main",{children:[N.jsxs("section",{id:"home",className:"hero",children:[N.jsxs("div",{className:"hero-copy",children:[N.jsxs("div",{className:"eyebrow",children:[N.jsx(CS,{size:15})," SPRING / SUMMER 2026"]}),N.jsxs("h1",{children:["MOVE",N.jsx("br",{}),N.jsx("em",{children:"DIFFERENT."})]}),N.jsx("p",{children:"Engineered sneakers for people who don't stand still. Precision comfort, sculptural 3D design and everyday energy."}),N.jsxs("div",{className:"hero-buttons",children:[N.jsxs("a",{href:"#shop",className:"primary",children:["Explore collection ",N.jsx(xr,{})]}),N.jsxs("a",{href:"#story",className:"text-link",children:["Why Soleva ",N.jsx(xr,{})]})]}),N.jsxs("div",{className:"hero-stats",children:[N.jsxs("div",{children:[N.jsx("strong",{children:"01"}),N.jsxs("span",{children:["Signature",N.jsx("br",{}),"silhouette"]})]}),N.jsxs("div",{children:[N.jsx("strong",{children:"3D"}),N.jsxs("span",{children:["Adaptive",N.jsx("br",{}),"cushioning"]})]}),N.jsxs("div",{children:[N.jsx("strong",{children:"30"}),N.jsxs("span",{children:["Day free",N.jsx("br",{}),"returns"]})]})]})]}),N.jsxs("div",{className:"hero-visual",children:[N.jsx("div",{className:"orbit orbit1"}),N.jsx("div",{className:"orbit orbit2"}),N.jsx("div",{className:"scroll-sneaker",children:N.jsx(Rc,{imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"})}),N.jsxs("div",{className:"floating-label label-a",children:[N.jsx(bS,{size:17}),N.jsxs("span",{children:["360°",N.jsx("small",{children:"DRAG TO ROTATE"})]})]}),N.jsxs("div",{className:"floating-label label-b",children:[N.jsx(qf,{size:17}),N.jsxs("span",{children:["REAL 3D",N.jsx("small",{children:"CURSOR ONLY"})]})]})]})]}),N.jsx("section",{className:"marquee",children:N.jsx("div",{children:"ENGINEERED FOR MOTION · REAL 3D FOOTWEAR · ENGINEERED FOR MOTION · REAL 3D FOOTWEAR · "})}),N.jsxs("section",{id:"shop",className:"shop-section",children:[N.jsxs("div",{className:"section-head",children:[N.jsxs("div",{children:[N.jsx("span",{className:"eyebrow",children:"THE COLLECTION"}),N.jsxs("h2",{children:["Find your ",N.jsx("em",{children:"pair."})]})]}),N.jsxs("button",{className:"filter-toggle",onClick:()=>R(!A),children:[N.jsx(RS,{size:18})," Filters"]})]}),N.jsxs("div",{className:"shop-controls "+(A?"show":""),children:[N.jsx("div",{className:"chips",children:["All","Running","Street","Lifestyle"].map(D=>N.jsx("button",{className:h===D?"selected":"",onClick:()=>d(D),children:D},D))}),N.jsxs("select",{value:m,onChange:D=>p(D.target.value),children:[N.jsx("option",{value:"featured",children:"Sort: Featured"}),N.jsx("option",{value:"price-low",children:"Price: Low to high"}),N.jsx("option",{value:"price-high",children:"Price: High to low"}),N.jsx("option",{value:"rating",children:"Top rated"})]})]}),N.jsx("div",{className:"product-grid",children:H.map(D=>N.jsx(Wb,{p:D,onAdd:V,onWish:B,wished:i.includes(D.id),onQuickView:J=>v(J)},D.id))})]}),N.jsxs("section",{id:"story",className:"feature",children:[N.jsxs("div",{className:"feature-copy",children:[N.jsx("span",{className:"eyebrow",children:"THE SOLEVA SYSTEM"}),N.jsxs("h2",{children:["Comfort that ",N.jsx("em",{children:"keeps up."})]}),N.jsx("p",{children:"Every Soleva is built around a responsive three-layer platform: soft landing, stable stride, energetic lift. The result is a sneaker that feels ready before you are."}),N.jsxs("div",{className:"feature-points",children:[N.jsxs("div",{children:[N.jsx(x_,{}),N.jsxs("span",{children:[N.jsx("b",{children:"All-day support"}),"Contoured heel + locked-in fit"]})]}),N.jsxs("div",{children:[N.jsx(qf,{}),N.jsxs("span",{children:[N.jsx("b",{children:"Energy return"}),"Spring foam under every step"]})]}),N.jsxs("div",{children:[N.jsx(y_,{}),N.jsxs("span",{children:[N.jsx("b",{children:"Fast, free shipping"}),"Dispatch in 24 hours"]})]})]})]}),N.jsxs("div",{className:"feature-visual",children:[N.jsxs("div",{className:"spec-ring",children:["S",N.jsx("span",{children:"3"})]}),N.jsx("div",{className:"feature-shoe",children:N.jsx(Rc,{compact:!0,imageUrl:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80"})}),N.jsxs("div",{className:"spec-label top",children:["RESPONSIVE",N.jsx("br",{}),"FOAM"]}),N.jsxs("div",{className:"spec-label bottom",children:["LIGHTWEIGHT",N.jsx("br",{}),"MESH"]})]})]}),N.jsxs("section",{id:"journal",className:"journal",children:[N.jsxs("div",{className:"section-head",children:[N.jsxs("div",{children:[N.jsx("span",{className:"eyebrow",children:"FROM THE JOURNAL"}),N.jsxs("h2",{children:["More than ",N.jsx("em",{children:"shoes."})]})]}),N.jsxs("a",{className:"text-link",href:"#journal",children:["Read all ",N.jsx(xr,{})]})]}),N.jsxs("div",{className:"journal-grid",children:[N.jsxs("article",{className:"journal-card",children:[N.jsx("div",{className:"journal-img-wrapper",children:N.jsx("img",{src:"https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",alt:"Sneaker design process"})}),N.jsxs("div",{className:"journal-body",children:[N.jsx("span",{children:"DESIGN"}),N.jsx("h3",{children:"Why the future of sneakers is sculptural."})]})]}),N.jsxs("article",{className:"journal-card",children:[N.jsx("div",{className:"journal-img-wrapper",children:N.jsx("img",{src:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",alt:"Running exercise"})}),N.jsxs("div",{className:"journal-body",children:[N.jsx("span",{children:"MOVE"}),N.jsx("h3",{children:"The 5-minute reset for your everyday stride."})]})]}),N.jsxs("article",{className:"journal-card",children:[N.jsx("div",{className:"journal-img-wrapper",children:N.jsx("img",{src:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",alt:"Recycled materials"})}),N.jsxs("div",{className:"journal-body",children:[N.jsx("span",{children:"MATERIALS"}),N.jsx("h3",{children:"Inside our recycled performance mesh."})]})]})]})]})]}),N.jsxs("footer",{children:[N.jsxs("div",{className:"footer-top",children:[N.jsxs("div",{children:[N.jsxs("a",{className:"logo",href:"#home",children:["SOLEVA",N.jsx("span",{children:"®"})]}),N.jsx("p",{children:"Premium sneakers for people in motion."}),N.jsxs("div",{className:"socials",children:[N.jsx(yS,{}),N.jsx(xS,{}),N.jsx(US,{})]})]}),N.jsxs("div",{children:[N.jsx("b",{children:"SHOP"}),N.jsx("a",{href:"#shop",children:"All sneakers"}),N.jsx("a",{href:"#shop",children:"Running"}),N.jsx("a",{href:"#shop",children:"Street"})]}),N.jsxs("div",{children:[N.jsx("b",{children:"HELP"}),N.jsx("a",{href:"#story",children:"Shipping"}),N.jsx("a",{href:"#story",children:"Returns"}),N.jsx("a",{href:"#story",children:"Contact"})]}),N.jsxs("div",{children:[N.jsx("b",{children:"STAY IN THE LOOP"}),N.jsx("p",{children:"New drops, early access and stories."}),N.jsxs("div",{className:"subscribe",children:[N.jsx("input",{placeholder:"Your email"}),N.jsx("button",{children:"→"})]})]})]}),N.jsxs("div",{className:"footer-bottom",children:["© 2026 SOLEVA. Built for motion. ",N.jsx("span",{children:"Privacy · Terms · Accessibility"})]})]}),y&&N.jsx("div",{className:"modal-backdrop",onClick:()=>v(null),children:N.jsxs("div",{className:"quick-modal",onClick:D=>D.stopPropagation(),children:[N.jsx("button",{className:"modal-close",onClick:()=>v(null),children:N.jsx(jf,{size:18})}),N.jsx("div",{className:"modal-art",children:N.jsx(Rc,{imageUrl:y.imageUrl,compact:!0})}),N.jsxs("div",{className:"modal-details",children:[N.jsx("span",{className:"tag",children:y.tag}),N.jsx("h2",{children:y.name}),N.jsxs("div",{className:"price",style:{marginBottom:"16px"},children:[N.jsxs("b",{children:["$",y.price]}),N.jsxs("del",{children:["$",y.old]})]}),N.jsx("p",{children:y.description}),N.jsxs("div",{className:"specs-list",children:[N.jsxs("div",{children:[N.jsx(x_,{size:16})," ",N.jsx("span",{children:"100% Genuine Italian Leather & Engineered Mesh"})]}),N.jsxs("div",{children:[N.jsx(qf,{size:16})," ",N.jsx("span",{children:"Tri-Density Reactive Foam Cushioning"})]}),N.jsxs("div",{children:[N.jsx(y_,{size:16})," ",N.jsx("span",{children:"Free Express Shipping & 30-Day Returns"})]})]}),N.jsxs("button",{className:"primary",onClick:()=>{V(y),v(null)},children:["Add to bag ($",y.price,") ",N.jsx(xr,{size:16})]})]})]})}),S&&N.jsx("div",{className:"drawer-backdrop",onClick:()=>M(!1),children:N.jsxs("aside",{className:"cart-drawer",onClick:D=>D.stopPropagation(),children:[N.jsxs("div",{className:"drawer-head",children:[N.jsxs("h2",{children:["Your bag ",N.jsxs("span",{children:[C," items"]})]}),N.jsx("button",{onClick:()=>M(!1),children:N.jsx(jf,{})})]}),o.length===0?N.jsxs("div",{className:"empty",children:[N.jsx(S_,{size:42}),N.jsx("h3",{children:"Your bag is empty."}),N.jsx("p",{children:"Add a pair and start moving."}),N.jsx("button",{className:"primary",onClick:()=>{M(!1),document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})},children:"Shop sneakers"})]}):N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"cart-items",children:o.map((D,J)=>N.jsxs("div",{className:"cart-item",children:[N.jsx("img",{src:D.imageUrl,alt:D.name,className:"cart-item-img"}),N.jsxs("div",{className:"cart-meta",children:[N.jsx("b",{children:D.name}),N.jsxs("span",{children:["UK ",D.selectedSize," · $",D.price]}),N.jsxs("div",{className:"qty",children:[N.jsx("button",{onClick:()=>W(D.id,D.selectedSize,-1),children:N.jsx(ES,{size:14})}),N.jsx("span",{children:D.qty}),N.jsx("button",{onClick:()=>W(D.id,D.selectedSize,1),children:N.jsx(TS,{size:14})})]})]}),N.jsx("button",{className:"trash",onClick:()=>e(nt=>nt.filter(ct=>!(ct.id===D.id&&ct.selectedSize===D.selectedSize))),children:N.jsx(DS,{size:16})})]},J))}),N.jsxs("div",{className:"checkout",children:[N.jsxs("div",{children:[N.jsx("span",{children:"Subtotal"}),N.jsxs("b",{children:["$",w.toFixed(2)]})]}),N.jsx("small",{children:"Taxes and shipping calculated at checkout."}),N.jsxs("button",{className:"primary",children:["Checkout ",N.jsx(xr,{})]})]})]})]})})]})}dS.createRoot(document.getElementById("root")).render(N.jsx(Yb,{}));
