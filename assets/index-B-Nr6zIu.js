(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ra={exports:{}},di={},ia={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),xc=Symbol.for("react.portal"),vc=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Pc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Vo=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var sa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oa=Object.assign,la={};function mn(e,t,n){this.props=e,this.context=t,this.refs=la,this.updater=n||sa}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function aa(){}aa.prototype=mn.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=la,this.updater=n||sa}var Js=Ys.prototype=new aa;Js.constructor=Ys;oa(Js,mn.prototype);Js.isPureReactComponent=!0;var Go=Array.isArray,ua=Object.prototype.hasOwnProperty,Xs={current:null},ca={key:!0,ref:!0,__self:!0,__source:!0};function da(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)ua.call(t,r)&&!ca.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),f=0;f<c;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:sr,type:e,key:s,ref:l,props:i,_owner:Xs.current}}function Cc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Tc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ko=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tc(""+e.key):t.toString(36)}function Cr(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case sr:case xc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ni(l,0):r,Go(i)?(n="",e!=null&&(n=e.replace(Ko,"$&/")+"/"),Cr(i,t,n,"",function(f){return f})):i!=null&&(qs(i)&&(i=Cc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ko,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Go(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+Ni(s,c);l+=Cr(s,t,n,d,i)}else if(d=Nc(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+Ni(s,c++),l+=Cr(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function cr(e,t,n){if(e==null)return e;var r=[],i=0;return Cr(e,r,"","",function(s){return t.call(n,s,i++)}),r}function zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Tr={transition:null},Ic={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:Xs};function ha(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=mn;A.Fragment=vc;A.Profiler=yc;A.PureComponent=Ys;A.StrictMode=wc;A.Suspense=jc;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ic;A.act=ha;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=oa({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Xs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)ua.call(t,d)&&!ca.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var f=0;f<d;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:sr,type:e.type,key:i,ref:s,props:r,_owner:l}};A.createContext=function(e){return e={$$typeof:Sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};A.createElement=da;A.createFactory=function(e){var t=da.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:bc,render:e}};A.isValidElement=qs;A.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:zc}};A.memo=function(e,t){return{$$typeof:Pc,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};A.unstable_act=ha;A.useCallback=function(e,t){return xe.current.useCallback(e,t)};A.useContext=function(e){return xe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};A.useEffect=function(e,t){return xe.current.useEffect(e,t)};A.useId=function(){return xe.current.useId()};A.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return xe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};A.useRef=function(e){return xe.current.useRef(e)};A.useState=function(e){return xe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return xe.current.useTransition()};A.version="18.3.1";ia.exports=A;var N=ia.exports;const Je=mc(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=N,Lc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Dc=Object.prototype.hasOwnProperty,_c=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fc={key:!0,ref:!0,__self:!0,__source:!0};function pa(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Dc.call(t,r)&&!Fc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lc,type:e,key:s,ref:l,props:i,_owner:_c.current}}di.Fragment=Mc;di.jsx=pa;di.jsxs=pa;ra.exports=di;var a=ra.exports,ns={},fa={exports:{}},Ce={},ga={exports:{}},ma={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var D=z.length;z.push(M);e:for(;0<D;){var H=D-1>>>1,X=z[H];if(0<i(X,M))z[H]=M,z[D]=X,D=H;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],D=z.pop();if(D!==M){z[0]=D;e:for(var H=0,X=z.length,ot=X>>>1;H<ot;){var Qe=2*(H+1)-1,wn=z[Qe],I=Qe+1,se=z[I];if(0>i(wn,D))I<X&&0>i(se,wn)?(z[H]=se,z[I]=D,H=I):(z[H]=wn,z[Qe]=D,H=Qe);else if(I<X&&0>i(se,D))z[H]=se,z[I]=D,H=I;else break e}}return M}function i(z,M){var D=z.sortIndex-M.sortIndex;return D!==0?D:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],f=[],k=1,w=null,y=3,S=!1,j=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var M=n(f);M!==null;){if(M.callback===null)r(f);else if(M.startTime<=z)r(f),M.sortIndex=M.expirationTime,t(d,M);else break;M=n(f)}}function o(z){if(E=!1,p(z),!j)if(n(d)!==null)j=!0,L(u);else{var M=n(f);M!==null&&O(o,M.startTime-z)}}function u(z,M){j=!1,E&&(E=!1,m(x),x=-1),S=!0;var D=y;try{for(p(M),w=n(d);w!==null&&(!(w.expirationTime>M)||z&&!T());){var H=w.callback;if(typeof H=="function"){w.callback=null,y=w.priorityLevel;var X=H(w.expirationTime<=M);M=e.unstable_now(),typeof X=="function"?w.callback=X:w===n(d)&&r(d),p(M)}else r(d);w=n(d)}if(w!==null)var ot=!0;else{var Qe=n(f);Qe!==null&&O(o,Qe.startTime-M),ot=!1}return ot}finally{w=null,y=D,S=!1}}var h=!1,v=null,x=-1,b=5,P=-1;function T(){return!(e.unstable_now()-P<b)}function F(){if(v!==null){var z=e.unstable_now();P=z;var M=!0;try{M=v(!0,z)}finally{M?W():(h=!1,v=null)}}else h=!1}var W;if(typeof g=="function")W=function(){g(F)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=F,W=function(){ie.postMessage(null)}}else W=function(){_(F,0)};function L(z){v=z,h||(h=!0,W())}function O(z,M){x=_(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){j||S||(j=!0,L(u))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(z){switch(y){case 1:case 2:case 3:var M=3;break;default:M=y}var D=y;y=M;try{return z()}finally{y=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=y;y=z;try{return M()}finally{y=D}},e.unstable_scheduleCallback=function(z,M,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,z={id:k++,callback:M,priorityLevel:z,startTime:D,expirationTime:X,sortIndex:-1},D>H?(z.sortIndex=D,t(f,z),n(d)===null&&z===n(f)&&(E?(m(x),x=-1):E=!0,O(o,D-H))):(z.sortIndex=X,t(d,z),j||S||(j=!0,L(u))),z},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(z){var M=y;return function(){var D=y;y=M;try{return z.apply(this,arguments)}finally{y=D}}}})(ma);ga.exports=ma;var Ac=ga.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=N,Ne=Ac;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xa=new Set,Hn={};function Wt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Hn[e]=t,e=0;e<t.length;e++)xa.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=Object.prototype.hasOwnProperty,Bc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qo={},Zo={};function Wc(e){return rs.call(Zo,e)?!0:rs.call(Qo,e)?!1:Bc.test(e)?Zo[e]=!0:(Qo[e]=!0,!1)}function Hc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uc(e,t,n,r){if(t===null||typeof t>"u"||Hc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var eo=/[\-:]([a-z])/g;function to(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eo,to);ce[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eo,to);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eo,to);ce[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function no(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uc(t,n,i,r)&&(n=null),r||i===null?Wc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ro=Symbol.for("react.strict_mode"),is=Symbol.for("react.profiler"),va=Symbol.for("react.provider"),wa=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),ss=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),so=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),ya=Symbol.for("react.offscreen"),Yo=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=Yo&&e[Yo]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ci;function Tn(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var Ti=!1;function zi(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,c=s.length-1;1<=l&&0<=c&&i[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==s[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function $c(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=zi(e.type,!1),e;case 11:return e=zi(e.type.render,!1),e;case 1:return e=zi(e.type,!0),e;default:return""}}function ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case $t:return"Portal";case is:return"Profiler";case ro:return"StrictMode";case ss:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wa:return(e.displayName||"Context")+".Consumer";case va:return(e._context.displayName||"Context")+".Provider";case io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case so:return t=e.displayName||null,t!==null?t:ls(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return ls(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ls(t);case 8:return t===ro?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ka(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gc(e){var t=ka(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Gc(e))}function Sa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ka(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function as(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ba(e,t){t=t.checked,t!=null&&no(e,"checked",t,!1)}function us(e,t){ba(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&cs(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cs(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(zn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function ja(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function el(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,Ea=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kc=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Kc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Na(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Ca(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Na(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qc=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(Qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,rn=null,sn=null;function tl(e){if(e=ar(e)){if(typeof ms!="function")throw Error(C(280));var t=e.stateNode;t&&(t=mi(t),ms(e.stateNode,e.type,t))}}function Ta(e){rn?sn?sn.push(e):sn=[e]:rn=e}function za(){if(rn){var e=rn,t=sn;if(sn=rn=null,tl(e),t)for(e=0;e<t.length;e++)tl(t[e])}}function Ia(e,t){return e(t)}function Ra(){}var Ii=!1;function La(e,t,n){if(Ii)return e(t,n);Ii=!0;try{return Ia(e,t,n)}finally{Ii=!1,(rn!==null||sn!==null)&&(Ra(),za())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var xs=!1;if(tt)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{xs=!1}function Zc(e,t,n,r,i,s,l,c,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(k){this.onError(k)}}var Mn=!1,Wr=null,Hr=!1,vs=null,Yc={onError:function(e){Mn=!0,Wr=e}};function Jc(e,t,n,r,i,s,l,c,d){Mn=!1,Wr=null,Zc.apply(Yc,arguments)}function Xc(e,t,n,r,i,s,l,c,d){if(Jc.apply(this,arguments),Mn){if(Mn){var f=Wr;Mn=!1,Wr=null}else throw Error(C(198));Hr||(Hr=!0,vs=f)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ma(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nl(e){if(Ht(e)!==e)throw Error(C(188))}function qc(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nl(i),e;if(s===r)return nl(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=s;break}if(c===r){l=!0,r=i,n=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===n){l=!0,n=s,r=i;break}if(c===r){l=!0,r=s,n=i;break}c=c.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Da(e){return e=qc(e),e!==null?_a(e):null}function _a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_a(e);if(t!==null)return t;e=e.sibling}return null}var Fa=Ne.unstable_scheduleCallback,rl=Ne.unstable_cancelCallback,ed=Ne.unstable_shouldYield,td=Ne.unstable_requestPaint,q=Ne.unstable_now,nd=Ne.unstable_getCurrentPriorityLevel,lo=Ne.unstable_ImmediatePriority,Aa=Ne.unstable_UserBlockingPriority,Ur=Ne.unstable_NormalPriority,rd=Ne.unstable_LowPriority,Oa=Ne.unstable_IdlePriority,hi=null,Ge=null;function id(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:ld,sd=Math.log,od=Math.LN2;function ld(e){return e>>>=0,e===0?32:31-(sd(e)/od|0)|0}var fr=64,gr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=In(c):(s&=l,s!==0&&(r=In(s)))}else l=n&~i,l!==0?r=In(l):s!==0&&(r=In(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Be(s),c=1<<l,d=i[l];d===-1?(!(c&n)||c&r)&&(i[l]=ad(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ba(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ao(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Wa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ha,uo,Ua,$a,Va,ys=!1,mr=[],gt=null,mt=null,xt=null,Vn=new Map,Gn=new Map,dt=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function il(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function bn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ar(t),t!==null&&uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hd(e,t,n,r,i){switch(t){case"focusin":return gt=bn(gt,e,t,n,r,i),!0;case"dragenter":return mt=bn(mt,e,t,n,r,i),!0;case"mouseover":return xt=bn(xt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vn.set(s,bn(Vn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gn.set(s,bn(Gn.get(s)||null,e,t,n,r,i)),!0}return!1}function Ga(e){var t=It(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=Ma(n),t!==null){e.blockedOn=t,Va(e.priority,function(){Ua(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gs=r,n.target.dispatchEvent(r),gs=null}else return t=ar(n),t!==null&&uo(t),e.blockedOn=n,!1;t.shift()}return!0}function sl(e,t,n){zr(e)&&n.delete(t)}function pd(){ys=!1,gt!==null&&zr(gt)&&(gt=null),mt!==null&&zr(mt)&&(mt=null),xt!==null&&zr(xt)&&(xt=null),Vn.forEach(sl),Gn.forEach(sl)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,pd)))}function Kn(e){function t(i){return jn(i,e)}if(0<mr.length){jn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&jn(gt,e),mt!==null&&jn(mt,e),xt!==null&&jn(xt,e),Vn.forEach(t),Gn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Ga(n),n.blockedOn===null&&dt.shift()}var on=st.ReactCurrentBatchConfig,Vr=!0;function fd(e,t,n,r){var i=U,s=on.transition;on.transition=null;try{U=1,co(e,t,n,r)}finally{U=i,on.transition=s}}function gd(e,t,n,r){var i=U,s=on.transition;on.transition=null;try{U=4,co(e,t,n,r)}finally{U=i,on.transition=s}}function co(e,t,n,r){if(Vr){var i=ks(e,t,n,r);if(i===null)Hi(e,t,r,Gr,n),il(e,r);else if(hd(i,e,t,n,r))r.stopPropagation();else if(il(e,r),t&4&&-1<dd.indexOf(e)){for(;i!==null;){var s=ar(i);if(s!==null&&Ha(s),s=ks(e,t,n,r),s===null&&Hi(e,t,r,Gr,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hi(e,t,r,null,n)}}var Gr=null;function ks(e,t,n,r){if(Gr=null,e=oo(r),e=It(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ma(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function Ka(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case lo:return 1;case Aa:return 4;case Ur:case rd:return 16;case Oa:return 536870912;default:return 16}default:return 16}}var pt=null,ho=null,Ir=null;function Qa(){if(Ir)return Ir;var e,t=ho,n=t.length,r,i="value"in pt?pt.value:pt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return Ir=i.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function ol(){return!1}function Te(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xr:ol,this.isPropagationStopped=ol,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=Te(xn),lr=Y({},xn,{view:0,detail:0}),md=Te(lr),Li,Mi,Pn,pi=Y({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Li=e.screenX-Pn.screenX,Mi=e.screenY-Pn.screenY):Mi=Li=0,Pn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),ll=Te(pi),xd=Y({},pi,{dataTransfer:0}),vd=Te(xd),wd=Y({},lr,{relatedTarget:0}),Di=Te(wd),yd=Y({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=Te(yd),Sd=Y({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bd=Te(Sd),jd=Y({},xn,{data:0}),al=Te(jd),Pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function fo(){return Cd}var Td=Y({},lr,{key:function(e){if(e.key){var t=Pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=Te(Td),Id=Y({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=Te(Id),Rd=Y({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),Ld=Te(Rd),Md=Y({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Te(Md),_d=Y({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fd=Te(_d),Ad=[9,13,27,32],go=tt&&"CompositionEvent"in window,Dn=null;tt&&"documentMode"in document&&(Dn=document.documentMode);var Od=tt&&"TextEvent"in window&&!Dn,Za=tt&&(!go||Dn&&8<Dn&&11>=Dn),cl=" ",dl=!1;function Ya(e,t){switch(e){case"keyup":return Ad.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Bd(e,t){switch(e){case"compositionend":return Ja(t);case"keypress":return t.which!==32?null:(dl=!0,cl);case"textInput":return e=t.data,e===cl&&dl?null:e;default:return null}}function Wd(e,t){if(Gt)return e==="compositionend"||!go&&Ya(e,t)?(e=Qa(),Ir=ho=pt=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Za&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hd[e.type]:t==="textarea"}function Xa(e,t,n,r){Ta(r),t=Kr(t,"onChange"),0<t.length&&(n=new po("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Qn=null;function Ud(e){uu(e,0)}function fi(e){var t=Zt(e);if(Sa(t))return e}function $d(e,t){if(e==="change")return t}var qa=!1;if(tt){var _i;if(tt){var Fi="oninput"in document;if(!Fi){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),Fi=typeof pl.oninput=="function"}_i=Fi}else _i=!1;qa=_i&&(!document.documentMode||9<document.documentMode)}function fl(){_n&&(_n.detachEvent("onpropertychange",eu),Qn=_n=null)}function eu(e){if(e.propertyName==="value"&&fi(Qn)){var t=[];Xa(t,Qn,e,oo(e)),La(Ud,t)}}function Vd(e,t,n){e==="focusin"?(fl(),_n=t,Qn=n,_n.attachEvent("onpropertychange",eu)):e==="focusout"&&fl()}function Gd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Qn)}function Kd(e,t){if(e==="click")return fi(t)}function Qd(e,t){if(e==="input"||e==="change")return fi(t)}function Zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Zd;function Zn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rs.call(t,i)||!He(e[i],t[i]))return!1}return!0}function gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ml(e,t){var n=gl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gl(n)}}function tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nu(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=nu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tu(n.ownerDocument.documentElement,n)){if(r!==null&&mo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ml(n,s);var l=ml(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=tt&&"documentMode"in document&&11>=document.documentMode,Kt=null,Ss=null,Fn=null,bs=!1;function xl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bs||Kt==null||Kt!==Br(r)||(r=Kt,"selectionStart"in r&&mo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&Zn(Fn,r)||(Fn=r,r=Kr(Ss,"onSelect"),0<r.length&&(t=new po("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionend:vr("Transition","TransitionEnd")},Ai={},ru={};tt&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function gi(e){if(Ai[e])return Ai[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ru)return Ai[e]=t[n];return e}var iu=gi("animationend"),su=gi("animationiteration"),ou=gi("animationstart"),lu=gi("transitionend"),au=new Map,vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){au.set(e,t),Wt(t,[e])}for(var Oi=0;Oi<vl.length;Oi++){var Bi=vl[Oi],Xd=Bi.toLowerCase(),qd=Bi[0].toUpperCase()+Bi.slice(1);Pt(Xd,"on"+qd)}Pt(iu,"onAnimationEnd");Pt(su,"onAnimationIteration");Pt(ou,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(lu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function wl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xc(r,t,void 0,e),e.currentTarget=null}function uu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,f=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;wl(i,c,f),s=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,f=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;wl(i,c,f),s=d}}}if(Hr)throw e=vs,Hr=!1,vs=null,e}function V(e,t){var n=t[Cs];n===void 0&&(n=t[Cs]=new Set);var r=e+"__bubble";n.has(r)||(cu(t,e,2,!1),n.add(r))}function Wi(e,t,n){var r=0;t&&(r|=4),cu(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[wr]){e[wr]=!0,xa.forEach(function(n){n!=="selectionchange"&&(eh.has(n)||Wi(n,!1,e),Wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Wi("selectionchange",!1,t))}}function cu(e,t,n,r){switch(Ka(t)){case 1:var i=fd;break;case 4:i=gd;break;default:i=co}n=i.bind(null,t,n,e),i=void 0,!xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hi(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=It(c),l===null)return;if(d=l.tag,d===5||d===6){r=s=l;continue e}c=c.parentNode}}r=r.return}La(function(){var f=s,k=oo(n),w=[];e:{var y=au.get(e);if(y!==void 0){var S=po,j=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":S=zd;break;case"focusin":j="focus",S=Di;break;case"focusout":j="blur",S=Di;break;case"beforeblur":case"afterblur":S=Di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ld;break;case iu:case su:case ou:S=kd;break;case lu:S=Dd;break;case"scroll":S=md;break;case"wheel":S=Fd;break;case"copy":case"cut":case"paste":S=bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ul}var E=(t&4)!==0,_=!E&&e==="scroll",m=E?y!==null?y+"Capture":null:y;E=[];for(var g=f,p;g!==null;){p=g;var o=p.stateNode;if(p.tag===5&&o!==null&&(p=o,m!==null&&(o=$n(g,m),o!=null&&E.push(Jn(g,o,p)))),_)break;g=g.return}0<E.length&&(y=new S(y,j,null,n,k),w.push({event:y,listeners:E}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&n!==gs&&(j=n.relatedTarget||n.fromElement)&&(It(j)||j[nt]))break e;if((S||y)&&(y=k.window===k?k:(y=k.ownerDocument)?y.defaultView||y.parentWindow:window,S?(j=n.relatedTarget||n.toElement,S=f,j=j?It(j):null,j!==null&&(_=Ht(j),j!==_||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=f),S!==j)){if(E=ll,o="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(E=ul,o="onPointerLeave",m="onPointerEnter",g="pointer"),_=S==null?y:Zt(S),p=j==null?y:Zt(j),y=new E(o,g+"leave",S,n,k),y.target=_,y.relatedTarget=p,o=null,It(k)===f&&(E=new E(m,g+"enter",j,n,k),E.target=p,E.relatedTarget=_,o=E),_=o,S&&j)t:{for(E=S,m=j,g=0,p=E;p;p=Ut(p))g++;for(p=0,o=m;o;o=Ut(o))p++;for(;0<g-p;)E=Ut(E),g--;for(;0<p-g;)m=Ut(m),p--;for(;g--;){if(E===m||m!==null&&E===m.alternate)break t;E=Ut(E),m=Ut(m)}E=null}else E=null;S!==null&&yl(w,y,S,E,!1),j!==null&&_!==null&&yl(w,_,j,E,!0)}}e:{if(y=f?Zt(f):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var u=$d;else if(hl(y))if(qa)u=Qd;else{u=Gd;var h=Vd}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(u=Kd);if(u&&(u=u(e,f))){Xa(w,u,n,k);break e}h&&h(e,y,f),e==="focusout"&&(h=y._wrapperState)&&h.controlled&&y.type==="number"&&cs(y,"number",y.value)}switch(h=f?Zt(f):window,e){case"focusin":(hl(h)||h.contentEditable==="true")&&(Kt=h,Ss=f,Fn=null);break;case"focusout":Fn=Ss=Kt=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,xl(w,n,k);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":xl(w,n,k)}var v;if(go)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Gt?Ya(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Za&&n.locale!=="ko"&&(Gt||x!=="onCompositionStart"?x==="onCompositionEnd"&&Gt&&(v=Qa()):(pt=k,ho="value"in pt?pt.value:pt.textContent,Gt=!0)),h=Kr(f,x),0<h.length&&(x=new al(x,e,null,n,k),w.push({event:x,listeners:h}),v?x.data=v:(v=Ja(n),v!==null&&(x.data=v)))),(v=Od?Bd(e,n):Wd(e,n))&&(f=Kr(f,"onBeforeInput"),0<f.length&&(k=new al("onBeforeInput","beforeinput",null,n,k),w.push({event:k,listeners:f}),k.data=v))}uu(w,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$n(e,n),s!=null&&r.unshift(Jn(e,s,i)),s=$n(e,t),s!=null&&r.push(Jn(e,s,i))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yl(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,f=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&f!==null&&(c=f,i?(d=$n(n,s),d!=null&&l.unshift(Jn(n,d,c))):i||(d=$n(n,s),d!=null&&l.push(Jn(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var th=/\r\n?/g,nh=/\u0000|\uFFFD/g;function kl(e){return(typeof e=="string"?e:""+e).replace(th,`
`).replace(nh,"")}function yr(e,t,n){if(t=kl(t),kl(e)!==t&&n)throw Error(C(425))}function Qr(){}var js=null,Ps=null;function Es(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,rh=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(e){return Sl.resolve(null).then(e).catch(sh)}:Ns;function sh(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+vn,Xn="__reactProps$"+vn,nt="__reactContainer$"+vn,Cs="__reactEvents$"+vn,oh="__reactListeners$"+vn,lh="__reactHandles$"+vn;function It(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bl(e);e!==null;){if(n=e[Ve])return n;e=bl(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ve]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function mi(e){return e[Xn]||null}var Ts=[],Yt=-1;function Et(e){return{current:e}}function G(e){0>Yt||(e.current=Ts[Yt],Ts[Yt]=null,Yt--)}function $(e,t){Yt++,Ts[Yt]=e.current,e.current=t}var jt={},fe=Et(jt),ke=Et(!1),_t=jt;function cn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Zr(){G(ke),G(fe)}function jl(e,t,n){if(fe.current!==jt)throw Error(C(168));$(fe,t),$(ke,n)}function du(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Vc(e)||"Unknown",i));return Y({},n,r)}function Yr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,_t=fe.current,$(fe,e),$(ke,ke.current),!0}function Pl(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=du(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,G(ke),G(fe),$(fe,e)):G(ke),$(ke,n)}var Ye=null,xi=!1,$i=!1;function hu(e){Ye===null?Ye=[e]:Ye.push(e)}function ah(e){xi=!0,hu(e)}function Nt(){if(!$i&&Ye!==null){$i=!0;var e=0,t=U;try{var n=Ye;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,xi=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),Fa(lo,Nt),i}finally{U=t,$i=!1}}return null}var Jt=[],Xt=0,Jr=null,Xr=0,ze=[],Ie=0,Ft=null,Xe=1,qe="";function Ct(e,t){Jt[Xt++]=Xr,Jt[Xt++]=Jr,Jr=e,Xr=t}function pu(e,t,n){ze[Ie++]=Xe,ze[Ie++]=qe,ze[Ie++]=Ft,Ft=e;var r=Xe;e=qe;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var s=32-Be(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Xe=1<<32-Be(t)+i|n<<i|r,qe=s+e}else Xe=1<<s|n<<i|r,qe=e}function xo(e){e.return!==null&&(Ct(e,1),pu(e,1,0))}function vo(e){for(;e===Jr;)Jr=Jt[--Xt],Jt[Xt]=null,Xr=Jt[--Xt],Jt[Xt]=null;for(;e===Ft;)Ft=ze[--Ie],ze[Ie]=null,qe=ze[--Ie],ze[Ie]=null,Xe=ze[--Ie],ze[Ie]=null}var Ee=null,Pe=null,K=!1,Oe=null;function fu(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function El(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Pe=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Xe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Pe=null,!0):!1;default:return!1}}function zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Is(e){if(K){var t=Pe;if(t){var n=t;if(!El(e,t)){if(zs(e))throw Error(C(418));t=vt(n.nextSibling);var r=Ee;t&&El(e,t)?fu(r,n):(e.flags=e.flags&-4097|2,K=!1,Ee=e)}}else{if(zs(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Ee=e}}}function Nl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function kr(e){if(e!==Ee)return!1;if(!K)return Nl(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Es(e.type,e.memoizedProps)),t&&(t=Pe)){if(zs(e))throw gu(),Error(C(418));for(;t;)fu(e,t),t=vt(t.nextSibling)}if(Nl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Ee?vt(e.stateNode.nextSibling):null;return!0}function gu(){for(var e=Pe;e;)e=vt(e.nextSibling)}function dn(){Pe=Ee=null,K=!1}function wo(e){Oe===null?Oe=[e]:Oe.push(e)}var uh=st.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=i.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Sr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cl(e){var t=e._init;return t(e._payload)}function mu(e){function t(m,g){if(e){var p=m.deletions;p===null?(m.deletions=[g],m.flags|=16):p.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=St(m,g),m.index=0,m.sibling=null,m}function s(m,g,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<g?(m.flags|=2,g):p):(m.flags|=2,g)):(m.flags|=1048576,g)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,g,p,o){return g===null||g.tag!==6?(g=Ji(p,m.mode,o),g.return=m,g):(g=i(g,p),g.return=m,g)}function d(m,g,p,o){var u=p.type;return u===Vt?k(m,g,p.props.children,o,p.key):g!==null&&(g.elementType===u||typeof u=="object"&&u!==null&&u.$$typeof===at&&Cl(u)===g.type)?(o=i(g,p.props),o.ref=En(m,g,p),o.return=m,o):(o=Or(p.type,p.key,p.props,null,m.mode,o),o.ref=En(m,g,p),o.return=m,o)}function f(m,g,p,o){return g===null||g.tag!==4||g.stateNode.containerInfo!==p.containerInfo||g.stateNode.implementation!==p.implementation?(g=Xi(p,m.mode,o),g.return=m,g):(g=i(g,p.children||[]),g.return=m,g)}function k(m,g,p,o,u){return g===null||g.tag!==7?(g=Dt(p,m.mode,o,u),g.return=m,g):(g=i(g,p),g.return=m,g)}function w(m,g,p){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ji(""+g,m.mode,p),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case dr:return p=Or(g.type,g.key,g.props,null,m.mode,p),p.ref=En(m,null,g),p.return=m,p;case $t:return g=Xi(g,m.mode,p),g.return=m,g;case at:var o=g._init;return w(m,o(g._payload),p)}if(zn(g)||kn(g))return g=Dt(g,m.mode,p,null),g.return=m,g;Sr(m,g)}return null}function y(m,g,p,o){var u=g!==null?g.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return u!==null?null:c(m,g,""+p,o);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case dr:return p.key===u?d(m,g,p,o):null;case $t:return p.key===u?f(m,g,p,o):null;case at:return u=p._init,y(m,g,u(p._payload),o)}if(zn(p)||kn(p))return u!==null?null:k(m,g,p,o,null);Sr(m,p)}return null}function S(m,g,p,o,u){if(typeof o=="string"&&o!==""||typeof o=="number")return m=m.get(p)||null,c(g,m,""+o,u);if(typeof o=="object"&&o!==null){switch(o.$$typeof){case dr:return m=m.get(o.key===null?p:o.key)||null,d(g,m,o,u);case $t:return m=m.get(o.key===null?p:o.key)||null,f(g,m,o,u);case at:var h=o._init;return S(m,g,p,h(o._payload),u)}if(zn(o)||kn(o))return m=m.get(p)||null,k(g,m,o,u,null);Sr(g,o)}return null}function j(m,g,p,o){for(var u=null,h=null,v=g,x=g=0,b=null;v!==null&&x<p.length;x++){v.index>x?(b=v,v=null):b=v.sibling;var P=y(m,v,p[x],o);if(P===null){v===null&&(v=b);break}e&&v&&P.alternate===null&&t(m,v),g=s(P,g,x),h===null?u=P:h.sibling=P,h=P,v=b}if(x===p.length)return n(m,v),K&&Ct(m,x),u;if(v===null){for(;x<p.length;x++)v=w(m,p[x],o),v!==null&&(g=s(v,g,x),h===null?u=v:h.sibling=v,h=v);return K&&Ct(m,x),u}for(v=r(m,v);x<p.length;x++)b=S(v,m,x,p[x],o),b!==null&&(e&&b.alternate!==null&&v.delete(b.key===null?x:b.key),g=s(b,g,x),h===null?u=b:h.sibling=b,h=b);return e&&v.forEach(function(T){return t(m,T)}),K&&Ct(m,x),u}function E(m,g,p,o){var u=kn(p);if(typeof u!="function")throw Error(C(150));if(p=u.call(p),p==null)throw Error(C(151));for(var h=u=null,v=g,x=g=0,b=null,P=p.next();v!==null&&!P.done;x++,P=p.next()){v.index>x?(b=v,v=null):b=v.sibling;var T=y(m,v,P.value,o);if(T===null){v===null&&(v=b);break}e&&v&&T.alternate===null&&t(m,v),g=s(T,g,x),h===null?u=T:h.sibling=T,h=T,v=b}if(P.done)return n(m,v),K&&Ct(m,x),u;if(v===null){for(;!P.done;x++,P=p.next())P=w(m,P.value,o),P!==null&&(g=s(P,g,x),h===null?u=P:h.sibling=P,h=P);return K&&Ct(m,x),u}for(v=r(m,v);!P.done;x++,P=p.next())P=S(v,m,x,P.value,o),P!==null&&(e&&P.alternate!==null&&v.delete(P.key===null?x:P.key),g=s(P,g,x),h===null?u=P:h.sibling=P,h=P);return e&&v.forEach(function(F){return t(m,F)}),K&&Ct(m,x),u}function _(m,g,p,o){if(typeof p=="object"&&p!==null&&p.type===Vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case dr:e:{for(var u=p.key,h=g;h!==null;){if(h.key===u){if(u=p.type,u===Vt){if(h.tag===7){n(m,h.sibling),g=i(h,p.props.children),g.return=m,m=g;break e}}else if(h.elementType===u||typeof u=="object"&&u!==null&&u.$$typeof===at&&Cl(u)===h.type){n(m,h.sibling),g=i(h,p.props),g.ref=En(m,h,p),g.return=m,m=g;break e}n(m,h);break}else t(m,h);h=h.sibling}p.type===Vt?(g=Dt(p.props.children,m.mode,o,p.key),g.return=m,m=g):(o=Or(p.type,p.key,p.props,null,m.mode,o),o.ref=En(m,g,p),o.return=m,m=o)}return l(m);case $t:e:{for(h=p.key;g!==null;){if(g.key===h)if(g.tag===4&&g.stateNode.containerInfo===p.containerInfo&&g.stateNode.implementation===p.implementation){n(m,g.sibling),g=i(g,p.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Xi(p,m.mode,o),g.return=m,m=g}return l(m);case at:return h=p._init,_(m,g,h(p._payload),o)}if(zn(p))return j(m,g,p,o);if(kn(p))return E(m,g,p,o);Sr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,p),g.return=m,m=g):(n(m,g),g=Ji(p,m.mode,o),g.return=m,m=g),l(m)):n(m,g)}return _}var hn=mu(!0),xu=mu(!1),qr=Et(null),ei=null,qt=null,yo=null;function ko(){yo=qt=ei=null}function So(e){var t=qr.current;G(qr),e._currentValue=t}function Rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){ei=e,yo=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(ei===null)throw Error(C(308));qt=e,ei.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Rt=null;function bo(e){Rt===null?Rt=[e]:Rt.push(e)}function vu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bo(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,bo(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ao(e,n)}}function Tl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var i=e.updateQueue;ut=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,f=d.next;d.next=null,l===null?s=f:l.next=f,l=d;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==l&&(c===null?k.firstBaseUpdate=f:c.next=f,k.lastBaseUpdate=d))}if(s!==null){var w=i.baseState;l=0,k=f=d=null,c=s;do{var y=c.lane,S=c.eventTime;if((r&y)===y){k!==null&&(k=k.next={eventTime:S,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=e,E=c;switch(y=t,S=n,E.tag){case 1:if(j=E.payload,typeof j=="function"){w=j.call(S,w,y);break e}w=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=E.payload,y=typeof j=="function"?j.call(S,w,y):j,y==null)break e;w=Y({},w,y);break e;case 2:ut=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[c]:y.push(c))}else S={eventTime:S,lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(f=k=S,d=w):k=k.next=S,l|=y;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;y=c,c=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(k===null&&(d=w),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ot|=l,e.lanes=l,e.memoizedState=w}}function zl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var ur={},Ke=Et(ur),qn=Et(ur),er=Et(ur);function Lt(e){if(e===ur)throw Error(C(174));return e}function Po(e,t){switch($(er,t),$(qn,e),$(Ke,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hs(t,e)}G(Ke),$(Ke,t)}function pn(){G(Ke),G(qn),G(er)}function yu(e){Lt(er.current);var t=Lt(Ke.current),n=hs(t,e.type);t!==n&&($(qn,e),$(Ke,n))}function Eo(e){qn.current===e&&(G(Ke),G(qn))}var Q=Et(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vi=[];function No(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var Mr=st.ReactCurrentDispatcher,Gi=st.ReactCurrentBatchConfig,At=0,Z=null,te=null,oe=null,ri=!1,An=!1,tr=0,ch=0;function de(){throw Error(C(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,s){if(At=s,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?fh:gh,e=n(r,i),An){s=0;do{if(An=!1,tr=0,25<=s)throw Error(C(301));s+=1,oe=te=null,t.updateQueue=null,Mr.current=mh,e=n(r,i)}while(An)}if(Mr.current=ii,t=te!==null&&te.next!==null,At=0,oe=te=Z=null,ri=!1,t)throw Error(C(300));return e}function zo(){var e=tr!==0;return tr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Z.memoizedState=oe=e:oe=oe.next=e,oe}function De(){if(te===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?Z.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(C(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?Z.memoizedState=oe=e:oe=oe.next=e}return oe}function nr(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=l=null,d=null,f=s;do{var k=f.lane;if((At&k)===k)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var w={lane:k,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(c=d=w,l=r):d=d.next=w,Z.lanes|=k,Ot|=k}f=f.next}while(f!==null&&f!==s);d===null?l=r:d.next=c,He(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Z.lanes|=s,Ot|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);He(s,t.memoizedState)||(ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ku(){}function Su(e,t){var n=Z,r=De(),i=t(),s=!He(r.memoizedState,i);if(s&&(r.memoizedState=i,ye=!0),r=r.queue,Io(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,rr(9,ju.bind(null,n,r,i,t),void 0,null),le===null)throw Error(C(349));At&30||bu(n,t,i)}return i}function bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ju(e,t,n,r){t.value=n,t.getSnapshot=r,Eu(t)&&Nu(e)}function Pu(e,t,n){return n(function(){Eu(t)&&Nu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Nu(e){var t=rt(e,1);t!==null&&We(t,e,1,-1)}function Il(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=ph.bind(null,Z,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cu(){return De().memoizedState}function Dr(e,t,n,r){var i=$e();Z.flags|=e,i.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function vi(e,t,n,r){var i=De();r=r===void 0?null:r;var s=void 0;if(te!==null){var l=te.memoizedState;if(s=l.destroy,r!==null&&Co(r,l.deps)){i.memoizedState=rr(t,n,s,r);return}}Z.flags|=e,i.memoizedState=rr(1|t,n,s,r)}function Rl(e,t){return Dr(8390656,8,e,t)}function Io(e,t){return vi(2048,8,e,t)}function Tu(e,t){return vi(4,2,e,t)}function zu(e,t){return vi(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,n){return n=n!=null?n.concat([e]):null,vi(4,4,Iu.bind(null,t,e),n)}function Ro(){}function Lu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Co(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Du(e,t,n){return At&21?(He(n,t)||(n=Ba(),Z.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function dh(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Gi.transition;Gi.transition={};try{e(!1),t()}finally{U=n,Gi.transition=r}}function _u(){return De().memoizedState}function hh(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))Au(t,n);else if(n=vu(e,t,n,r),n!==null){var i=me();We(n,e,r,i),Ou(n,t,r)}}function ph(e,t,n){var r=kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Au(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(i.hasEagerState=!0,i.eagerState=c,He(c,l)){var d=t.interleaved;d===null?(i.next=i,bo(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=vu(e,t,i,r),n!==null&&(i=me(),We(n,e,r,i),Ou(n,t,r))}}function Fu(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Au(e,t){An=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ou(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ao(e,n)}}var ii={readContext:Me,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},fh={readContext:Me,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Rl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:Il,useDebugValue:Ro,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Il(!1),t=e[0];return e=dh.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=$e();if(K){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),le===null)throw Error(C(349));At&30||bu(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Rl(Pu.bind(null,r,s,e),[e]),r.flags|=2048,rr(9,ju.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=$e(),t=le.identifierPrefix;if(K){var n=qe,r=Xe;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ch++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gh={readContext:Me,useCallback:Lu,useContext:Me,useEffect:Io,useImperativeHandle:Ru,useInsertionEffect:Tu,useLayoutEffect:zu,useMemo:Mu,useReducer:Ki,useRef:Cu,useState:function(){return Ki(nr)},useDebugValue:Ro,useDeferredValue:function(e){var t=De();return Du(t,te.memoizedState,e)},useTransition:function(){var e=Ki(nr)[0],t=De().memoizedState;return[e,t]},useMutableSource:ku,useSyncExternalStore:Su,useId:_u,unstable_isNewReconciler:!1},mh={readContext:Me,useCallback:Lu,useContext:Me,useEffect:Io,useImperativeHandle:Ru,useInsertionEffect:Tu,useLayoutEffect:zu,useMemo:Mu,useReducer:Qi,useRef:Cu,useState:function(){return Qi(nr)},useDebugValue:Ro,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:Du(t,te.memoizedState,e)},useTransition:function(){var e=Qi(nr)[0],t=De().memoizedState;return[e,t]},useMutableSource:ku,useSyncExternalStore:Su,useId:_u,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ls(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=kt(e),s=et(r,i);s.payload=t,n!=null&&(s.callback=n),t=wt(e,s,i),t!==null&&(We(t,e,i,r),Lr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=kt(e),s=et(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wt(e,s,i),t!==null&&(We(t,e,i,r),Lr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=kt(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=wt(e,i,r),t!==null&&(We(t,e,r,n),Lr(t,e,r))}};function Ll(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,s):!0}function Bu(e,t,n){var r=!1,i=jt,s=t.contextType;return typeof s=="object"&&s!==null?s=Me(s):(i=Se(t)?_t:fe.current,r=t.contextTypes,s=(r=r!=null)?cn(e,i):jt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ml(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function Ms(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},jo(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Me(s):(s=Se(t)?_t:fe.current,i.context=cn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ls(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),ti(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xh=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oi||(oi=!0,Vs=r),Ds(e,t)},n}function Hu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ds(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ds(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Dl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ih.bind(null,e,t,n),t.then(e,e))}function _l(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var vh=st.ReactCurrentOwner,ye=!1;function ge(e,t,n,r){t.child=e===null?xu(t,null,n,r):hn(t,e.child,n,r)}function Al(e,t,n,r,i){n=n.render;var s=t.ref;return ln(t,i),r=To(e,t,n,r,s,i),n=zo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(K&&n&&xo(t),t.flags|=1,ge(e,t,r,i),t.child)}function Ol(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Bo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Uu(e,t,s,r,i)):(e=Or(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=St(s,r),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Zn(s,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,it(e,t,i)}return _s(e,t,n,r,i)}function $u(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(tn,je),je|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(tn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(tn,je),je|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,$(tn,je),je|=r;return ge(e,t,i,n),t.child}function Vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _s(e,t,n,r,i){var s=Se(n)?_t:fe.current;return s=cn(t,s),ln(t,i),n=To(e,t,n,r,s,i),r=zo(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(K&&r&&xo(t),t.flags|=1,ge(e,t,n,i),t.child)}function Bl(e,t,n,r,i){if(Se(n)){var s=!0;Yr(t)}else s=!1;if(ln(t,i),t.stateNode===null)_r(e,t),Bu(t,n,r),Ms(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=Me(f):(f=Se(n)?_t:fe.current,f=cn(t,f));var k=n.getDerivedStateFromProps,w=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==f)&&Ml(t,l,r,f),ut=!1;var y=t.memoizedState;l.state=y,ti(t,r,l,i),d=t.memoizedState,c!==r||y!==d||ke.current||ut?(typeof k=="function"&&(Ls(t,n,k,r),d=t.memoizedState),(c=ut||Ll(t,n,c,r,y,d,f))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,wu(e,t),c=t.memoizedProps,f=t.type===t.elementType?c:Fe(t.type,c),l.props=f,w=t.pendingProps,y=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Me(d):(d=Se(n)?_t:fe.current,d=cn(t,d));var S=n.getDerivedStateFromProps;(k=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==w||y!==d)&&Ml(t,l,r,d),ut=!1,y=t.memoizedState,l.state=y,ti(t,r,l,i);var j=t.memoizedState;c!==w||y!==j||ke.current||ut?(typeof S=="function"&&(Ls(t,n,S,r),j=t.memoizedState),(f=ut||Ll(t,n,f,r,y,j,d)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,j,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,j,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),l.props=r,l.state=j,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Fs(e,t,n,r,s,i)}function Fs(e,t,n,r,i,s){Vu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Pl(t,n,!1),it(e,t,s);r=t.stateNode,vh.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hn(t,e.child,null,s),t.child=hn(t,null,c,s)):ge(e,t,c,s),t.memoizedState=r.state,i&&Pl(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?jl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jl(e,t.context,!1),Po(e,t.containerInfo)}function Wl(e,t,n,r,i){return dn(),wo(i),t.flags|=256,ge(e,t,n,r),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function Os(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var r=t.pendingProps,i=Q.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(Q,i&1),e===null)return Is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Si(l,r,0,null),e=Dt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Os(n),t.memoizedState=As,e):Lo(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return wh(e,t,l,r,c,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=St(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=St(c,s):(s=Dt(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Os(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=As,r}return s=e.child,e=s.sibling,r=St(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lo(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function br(e,t,n,r){return r!==null&&wo(r),hn(t,e.child,null,n),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wh(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(C(422))),br(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Si({mode:"visible",children:r.children},i,0,null),s=Dt(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&hn(t,e.child,null,l),t.child.memoizedState=Os(l),t.memoizedState=As,s);if(!(t.mode&1))return br(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(C(419)),r=Zi(s,r,void 0),br(e,t,l,r)}if(c=(l&e.childLanes)!==0,ye||c){if(r=le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rt(e,i),We(r,e,i,-1))}return Oo(),r=Zi(Error(C(421))),br(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rh.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Pe=vt(i.nextSibling),Ee=t,K=!0,Oe=null,e!==null&&(ze[Ie++]=Xe,ze[Ie++]=qe,ze[Ie++]=Ft,Xe=e.id,qe=e.overflow,Ft=t),t=Lo(t,r.children),t.flags|=4096,t)}function Hl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rs(e.return,t,n)}function Yi(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qu(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ge(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hl(e,n,t);else if(e.tag===19)Hl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yi(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ni(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yi(t,!0,n,null,s);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _r(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yh(e,t,n){switch(t.tag){case 3:Gu(t),dn();break;case 5:yu(t);break;case 1:Se(t.type)&&Yr(t);break;case 4:Po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Ku(e,t,n):($(Q,Q.current&1),e=it(e,t,n),e!==null?e.sibling:null);$(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return it(e,t,n)}var Zu,Bs,Yu,Ju;Zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bs=function(){};Yu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(Ke.current);var s=null;switch(n){case"input":i=as(e,i),r=as(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=ds(e,i),r=ds(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}ps(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var c=i[f];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Hn.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var d=r[f];if(c=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&d!==c&&(d!=null||c!=null))if(f==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&V("scroll",e),s||c===d||(s=[])):(s=s||[]).push(f,d))}n&&(s=s||[]).push("style",n);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kh(e,t,n){var r=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Se(t.type)&&Zr(),he(t),null;case 3:return r=t.stateNode,pn(),G(ke),G(fe),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Qs(Oe),Oe=null))),Bs(e,t),he(t),null;case 5:Eo(t);var i=Lt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Yu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return he(t),null}if(e=Lt(Ke.current),kr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ve]=t,r[Xn]=s,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Rn.length;i++)V(Rn[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Jo(r,s),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},V("invalid",r);break;case"textarea":qo(r,s),V("invalid",r)}ps(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&yr(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&yr(r.textContent,c,e),i=["children",""+c]):Hn.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":hr(r),Xo(r,s,!0);break;case"textarea":hr(r),el(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ve]=t,e[Xn]=r,Zu(e,t,!1,!1),t.stateNode=e;e:{switch(l=fs(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rn.length;i++)V(Rn[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Jo(e,r),i=as(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),V("invalid",e);break;case"textarea":qo(e,r),i=ds(e,r),V("invalid",e);break;default:i=r}ps(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Ca(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ea(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Un(e,d):typeof d=="number"&&Un(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hn.hasOwnProperty(s)?d!=null&&s==="onScroll"&&V("scroll",e):d!=null&&no(e,s,d,l))}switch(n){case"input":hr(e),Xo(e,r,!1);break;case"textarea":hr(e),el(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?nn(e,!!r.multiple,s,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Lt(er.current),Lt(Ke.current),kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(s=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return he(t),null;case 13:if(G(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Pe!==null&&t.mode&1&&!(t.flags&128))gu(),dn(),t.flags|=98560,s=!1;else if(s=kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ve]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),s=!1}else Oe!==null&&(Qs(Oe),Oe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Oo())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return pn(),Bs(e,t),e===null&&Yn(t.stateNode.containerInfo),he(t),null;case 10:return So(t.type._context),he(t),null;case 17:return Se(t.type)&&Zr(),he(t),null;case 19:if(G(Q),s=t.memoizedState,s===null)return he(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Nn(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ni(e),l!==null){for(t.flags|=128,Nn(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(Q,Q.current&1|2),t.child}e=e.sibling}s.tail!==null&&q()>gn&&(t.flags|=128,r=!0,Nn(s,!1),t.lanes=4194304)}else{if(!r)if(e=ni(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*q()-s.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,n=Q.current,$(Q,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Ao(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Sh(e,t){switch(vo(t),t.tag){case 1:return Se(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),G(ke),G(fe),No(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eo(t),null;case 13:if(G(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Q),null;case 4:return pn(),null;case 10:return So(t.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var jr=!1,pe=!1,bh=typeof WeakSet=="function"?WeakSet:Set,R=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ws(e,t,n){try{n()}catch(r){J(e,t,r)}}var Ul=!1;function jh(e,t){if(js=Vr,e=nu(),mo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,f=0,k=0,w=e,y=null;t:for(;;){for(var S;w!==n||i!==0&&w.nodeType!==3||(c=l+i),w!==s||r!==0&&w.nodeType!==3||(d=l+r),w.nodeType===3&&(l+=w.nodeValue.length),(S=w.firstChild)!==null;)y=w,w=S;for(;;){if(w===e)break t;if(y===n&&++f===i&&(c=l),y===s&&++k===r&&(d=l),(S=w.nextSibling)!==null)break;w=y,y=w.parentNode}w=S}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ps={focusedElem:e,selectionRange:n},Vr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var E=j.memoizedProps,_=j.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?E:Fe(t.type,E),_);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(o){J(t,t.return,o)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return j=Ul,Ul=!1,j}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ws(t,n,s)}i=i.next}while(i!==r)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Xn],delete t[Cs],delete t[oh],delete t[lh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function $l(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(Us(e,t,n),e=e.sibling;e!==null;)Us(e,t,n),e=e.sibling}function $s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($s(e,t,n),e=e.sibling;e!==null;)$s(e,t,n),e=e.sibling}var ae=null,Ae=!1;function lt(e,t,n){for(n=n.child;n!==null;)ec(e,t,n),n=n.sibling}function ec(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(hi,n)}catch{}switch(n.tag){case 5:pe||en(n,t);case 6:var r=ae,i=Ae;ae=null,lt(e,t,n),ae=r,Ae=i,ae!==null&&(Ae?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ae?(e=ae,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),Kn(e)):Ui(ae,n.stateNode));break;case 4:r=ae,i=Ae,ae=n.stateNode.containerInfo,Ae=!0,lt(e,t,n),ae=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ws(n,t,l),i=i.next}while(i!==r)}lt(e,t,n);break;case 1:if(!pe&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){J(n,t,c)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,lt(e,t,n),pe=r):lt(e,t,n);break;default:lt(e,t,n)}}function Vl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bh),t.forEach(function(r){var i=Lh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:ae=c.stateNode,Ae=!1;break e;case 3:ae=c.stateNode.containerInfo,Ae=!0;break e;case 4:ae=c.stateNode.containerInfo,Ae=!0;break e}c=c.return}if(ae===null)throw Error(C(160));ec(s,l,i),ae=null,Ae=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){J(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tc(t,e),t=t.sibling}function tc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Ue(e),r&4){try{On(3,e,e.return),yi(3,e)}catch(E){J(e,e.return,E)}try{On(5,e,e.return)}catch(E){J(e,e.return,E)}}break;case 1:_e(t,e),Ue(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(_e(t,e),Ue(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(E){J(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&ba(i,s),fs(c,l);var f=fs(c,s);for(l=0;l<d.length;l+=2){var k=d[l],w=d[l+1];k==="style"?Ca(i,w):k==="dangerouslySetInnerHTML"?Ea(i,w):k==="children"?Un(i,w):no(i,k,w,f)}switch(c){case"input":us(i,s);break;case"textarea":ja(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?nn(i,!!s.multiple,S,!1):y!==!!s.multiple&&(s.defaultValue!=null?nn(i,!!s.multiple,s.defaultValue,!0):nn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xn]=s}catch(E){J(e,e.return,E)}}break;case 6:if(_e(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(E){J(e,e.return,E)}}break;case 3:if(_e(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(E){J(e,e.return,E)}break;case 4:_e(t,e),Ue(e);break;case 13:_e(t,e),Ue(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_o=q())),r&4&&Vl(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(f=pe)||k,_e(t,e),pe=f):_e(t,e),Ue(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!k&&e.mode&1)for(R=e,k=e.child;k!==null;){for(w=R=k;R!==null;){switch(y=R,S=y.child,y.tag){case 0:case 11:case 14:case 15:On(4,y,y.return);break;case 1:en(y,y.return);var j=y.stateNode;if(typeof j.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(E){J(r,n,E)}}break;case 5:en(y,y.return);break;case 22:if(y.memoizedState!==null){Kl(w);continue}}S!==null?(S.return=y,R=S):Kl(w)}k=k.sibling}e:for(k=null,w=e;;){if(w.tag===5){if(k===null){k=w;try{i=w.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=w.stateNode,d=w.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Na("display",l))}catch(E){J(e,e.return,E)}}}else if(w.tag===6){if(k===null)try{w.stateNode.nodeValue=f?"":w.memoizedProps}catch(E){J(e,e.return,E)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;k===w&&(k=null),w=w.return}k===w&&(k=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:_e(t,e),Ue(e),r&4&&Vl(e);break;case 21:break;default:_e(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Un(i,""),r.flags&=-33);var s=$l(e);$s(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=$l(e);Us(e,c,l);break;default:throw Error(C(161))}}catch(d){J(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e,t,n){R=e,nc(e)}function nc(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||jr;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||pe;c=jr;var f=pe;if(jr=l,(pe=d)&&!f)for(R=i;R!==null;)l=R,d=l.child,l.tag===22&&l.memoizedState!==null?Ql(i):d!==null?(d.return=l,R=d):Ql(i);for(;s!==null;)R=s,nc(s),s=s.sibling;R=i,jr=c,pe=f}Gl(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Gl(e)}}function Gl(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&zl(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zl(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var k=f.memoizedState;if(k!==null){var w=k.dehydrated;w!==null&&Kn(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}pe||t.flags&512&&Hs(t)}catch(y){J(t,t.return,y)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Kl(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ql(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(d){J(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){J(t,i,d)}}var s=t.return;try{Hs(t)}catch(d){J(t,s,d)}break;case 5:var l=t.return;try{Hs(t)}catch(d){J(t,l,d)}}}catch(d){J(t,t.return,d)}if(t===e){R=null;break}var c=t.sibling;if(c!==null){c.return=t.return,R=c;break}R=t.return}}var Eh=Math.ceil,si=st.ReactCurrentDispatcher,Mo=st.ReactCurrentOwner,Le=st.ReactCurrentBatchConfig,B=0,le=null,ee=null,ue=0,je=0,tn=Et(0),ne=0,ir=null,Ot=0,ki=0,Do=0,Bn=null,we=null,_o=0,gn=1/0,Ze=null,oi=!1,Vs=null,yt=null,Pr=!1,ft=null,li=0,Wn=0,Gs=null,Fr=-1,Ar=0;function me(){return B&6?q():Fr!==-1?Fr:Fr=q()}function kt(e){return e.mode&1?B&2&&ue!==0?ue&-ue:uh.transition!==null?(Ar===0&&(Ar=Ba()),Ar):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ka(e.type)),e):1}function We(e,t,n,r){if(50<Wn)throw Wn=0,Gs=null,Error(C(185));or(e,n,r),(!(B&2)||e!==le)&&(e===le&&(!(B&2)&&(ki|=n),ne===4&&ht(e,ue)),be(e,r),n===1&&B===0&&!(t.mode&1)&&(gn=q()+500,xi&&Nt()))}function be(e,t){var n=e.callbackNode;ud(e,t);var r=$r(e,e===le?ue:0);if(r===0)n!==null&&rl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rl(n),t===1)e.tag===0?ah(Zl.bind(null,e)):hu(Zl.bind(null,e)),ih(function(){!(B&6)&&Nt()}),n=null;else{switch(Wa(r)){case 1:n=lo;break;case 4:n=Aa;break;case 16:n=Ur;break;case 536870912:n=Oa;break;default:n=Ur}n=cc(n,rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rc(e,t){if(Fr=-1,Ar=0,B&6)throw Error(C(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=$r(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ai(e,r);else{t=r;var i=B;B|=2;var s=sc();(le!==e||ue!==t)&&(Ze=null,gn=q()+500,Mt(e,t));do try{Th();break}catch(c){ic(e,c)}while(!0);ko(),si.current=s,B=i,ee!==null?t=0:(le=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=ws(e),i!==0&&(r=i,t=Ks(e,i))),t===1)throw n=ir,Mt(e,0),ht(e,r),be(e,q()),n;if(t===6)ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nh(i)&&(t=ai(e,r),t===2&&(s=ws(e),s!==0&&(r=s,t=Ks(e,s))),t===1))throw n=ir,Mt(e,0),ht(e,r),be(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Tt(e,we,Ze);break;case 3:if(ht(e,r),(r&130023424)===r&&(t=_o+500-q(),10<t)){if($r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ns(Tt.bind(null,e,we,Ze),t);break}Tt(e,we,Ze);break;case 4:if(ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Be(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eh(r/1960))-r,10<r){e.timeoutHandle=Ns(Tt.bind(null,e,we,Ze),r);break}Tt(e,we,Ze);break;case 5:Tt(e,we,Ze);break;default:throw Error(C(329))}}}return be(e,q()),e.callbackNode===n?rc.bind(null,e):null}function Ks(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=ai(e,t),e!==2&&(t=we,we=n,t!==null&&Qs(t)),e}function Qs(e){we===null?we=e:we.push.apply(we,e)}function Nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!He(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~Do,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Zl(e){if(B&6)throw Error(C(327));an();var t=$r(e,0);if(!(t&1))return be(e,q()),null;var n=ai(e,t);if(e.tag!==0&&n===2){var r=ws(e);r!==0&&(t=r,n=Ks(e,r))}if(n===1)throw n=ir,Mt(e,0),ht(e,t),be(e,q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,we,Ze),be(e,q()),null}function Fo(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(gn=q()+500,xi&&Nt())}}function Bt(e){ft!==null&&ft.tag===0&&!(B&6)&&an();var t=B;B|=1;var n=Le.transition,r=U;try{if(Le.transition=null,U=1,e)return e()}finally{U=r,Le.transition=n,B=t,!(B&6)&&Nt()}}function Ao(){je=tn.current,G(tn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rh(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:pn(),G(ke),G(fe),No();break;case 5:Eo(r);break;case 4:pn();break;case 13:G(Q);break;case 19:G(Q);break;case 10:So(r.type._context);break;case 22:case 23:Ao()}n=n.return}if(le=e,ee=e=St(e.current,null),ue=je=t,ne=0,ir=null,Do=ki=Ot=0,we=Bn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Rt=null}return e}function ic(e,t){do{var n=ee;try{if(ko(),Mr.current=ii,ri){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ri=!1}if(At=0,oe=te=Z=null,An=!1,tr=0,Mo.current=null,n===null||n.return===null){ne=1,ir=t,ee=null;break}e:{var s=e,l=n.return,c=n,d=t;if(t=ue,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,k=c,w=k.tag;if(!(k.mode&1)&&(w===0||w===11||w===15)){var y=k.alternate;y?(k.updateQueue=y.updateQueue,k.memoizedState=y.memoizedState,k.lanes=y.lanes):(k.updateQueue=null,k.memoizedState=null)}var S=_l(l);if(S!==null){S.flags&=-257,Fl(S,l,c,s,t),S.mode&1&&Dl(s,f,t),t=S,d=f;var j=t.updateQueue;if(j===null){var E=new Set;E.add(d),t.updateQueue=E}else j.add(d);break e}else{if(!(t&1)){Dl(s,f,t),Oo();break e}d=Error(C(426))}}else if(K&&c.mode&1){var _=_l(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Fl(_,l,c,s,t),wo(fn(d,c));break e}}s=d=fn(d,c),ne!==4&&(ne=2),Bn===null?Bn=[s]:Bn.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Wu(s,d,t);Tl(s,m);break e;case 1:c=d;var g=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yt===null||!yt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var o=Hu(s,c,t);Tl(s,o);break e}}s=s.return}while(s!==null)}lc(n)}catch(u){t=u,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function sc(){var e=si.current;return si.current=ii,e===null?ii:e}function Oo(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Ot&268435455)&&!(ki&268435455)||ht(le,ue)}function ai(e,t){var n=B;B|=2;var r=sc();(le!==e||ue!==t)&&(Ze=null,Mt(e,t));do try{Ch();break}catch(i){ic(e,i)}while(!0);if(ko(),B=n,si.current=r,ee!==null)throw Error(C(261));return le=null,ue=0,ne}function Ch(){for(;ee!==null;)oc(ee)}function Th(){for(;ee!==null&&!ed();)oc(ee)}function oc(e){var t=uc(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?lc(e):ee=t,Mo.current=null}function lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sh(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=kh(n,t,je),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Tt(e,t,n){var r=U,i=Le.transition;try{Le.transition=null,U=1,zh(e,t,n,r)}finally{Le.transition=i,U=r}return null}function zh(e,t,n,r){do an();while(ft!==null);if(B&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(cd(e,s),e===le&&(ee=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,cc(Ur,function(){return an(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Le.transition,Le.transition=null;var l=U;U=1;var c=B;B|=4,Mo.current=null,jh(e,n),tc(n,e),Yd(Ps),Vr=!!js,Ps=js=null,e.current=n,Ph(n),td(),B=c,U=l,Le.transition=s}else e.current=n;if(Pr&&(Pr=!1,ft=e,li=i),s=e.pendingLanes,s===0&&(yt=null),id(n.stateNode),be(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oi)throw oi=!1,e=Vs,Vs=null,e;return li&1&&e.tag!==0&&an(),s=e.pendingLanes,s&1?e===Gs?Wn++:(Wn=0,Gs=e):Wn=0,Nt(),null}function an(){if(ft!==null){var e=Wa(li),t=Le.transition,n=U;try{if(Le.transition=null,U=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,li=0,B&6)throw Error(C(331));var i=B;for(B|=4,R=e.current;R!==null;){var s=R,l=s.child;if(R.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var f=c[d];for(R=f;R!==null;){var k=R;switch(k.tag){case 0:case 11:case 15:On(8,k,s)}var w=k.child;if(w!==null)w.return=k,R=w;else for(;R!==null;){k=R;var y=k.sibling,S=k.return;if(Xu(k),k===f){R=null;break}if(y!==null){y.return=S,R=y;break}R=S}}}var j=s.alternate;if(j!==null){var E=j.child;if(E!==null){j.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}R=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,R=l;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:On(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var g=e.current;for(R=g;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=g;R!==null;){if(c=R,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:yi(9,c)}}catch(u){J(c,c.return,u)}if(c===l){R=null;break e}var o=c.sibling;if(o!==null){o.return=c.return,R=o;break e}R=c.return}}if(B=i,Nt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(hi,e)}catch{}r=!0}return r}finally{U=n,Le.transition=t}}return!1}function Yl(e,t,n){t=fn(n,t),t=Wu(e,t,1),e=wt(e,t,1),t=me(),e!==null&&(or(e,1,t),be(e,t))}function J(e,t,n){if(e.tag===3)Yl(e,e,n);else for(;t!==null;){if(t.tag===3){Yl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=fn(n,e),e=Hu(t,e,1),t=wt(t,e,1),e=me(),t!==null&&(or(t,1,e),be(t,e));break}}t=t.return}}function Ih(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>q()-_o?Mt(e,0):Do|=n),be(e,t)}function ac(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(or(e,t,n),be(e,n))}function Rh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function Lh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),ac(e,n)}var uc;uc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,yh(e,t,n);ye=!!(e.flags&131072)}else ye=!1,K&&t.flags&1048576&&pu(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_r(e,t),e=t.pendingProps;var i=cn(t,fe.current);ln(t,n),i=To(null,t,r,e,i,n);var s=zo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(s=!0,Yr(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jo(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,Ms(t,r,e,n),t=Fs(null,t,r,!0,s,n)):(t.tag=0,K&&s&&xo(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_r(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Dh(r),e=Fe(r,e),i){case 0:t=_s(null,t,r,e,n);break e;case 1:t=Bl(null,t,r,e,n);break e;case 11:t=Al(null,t,r,e,n);break e;case 14:t=Ol(null,t,r,Fe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),_s(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Bl(e,t,r,i,n);case 3:e:{if(Gu(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,wu(e,t),ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=fn(Error(C(423)),t),t=Wl(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(C(424)),t),t=Wl(e,t,r,n,i);break e}else for(Pe=vt(t.stateNode.containerInfo.firstChild),Ee=t,K=!0,Oe=null,n=xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=it(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return yu(t),e===null&&Is(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Es(r,i)?l=null:s!==null&&Es(r,s)&&(t.flags|=32),Vu(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&Is(t),null;case 13:return Ku(e,t,n);case 4:return Po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Al(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,$(qr,r._currentValue),r._currentValue=l,s!==null)if(He(s.value,l)){if(s.children===i.children&&!ke.current){t=it(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=et(-1,n&-n),d.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var k=f.pending;k===null?d.next=d:(d.next=k.next,k.next=d),f.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Rs(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(C(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Rs(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=Me(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),Ol(e,t,r,i,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),_r(e,t),t.tag=1,Se(r)?(e=!0,Yr(t)):e=!1,ln(t,n),Bu(t,r,i),Ms(t,r,i,n),Fs(null,t,r,!0,e,n);case 19:return Qu(e,t,n);case 22:return $u(e,t,n)}throw Error(C(156,t.tag))};function cc(e,t){return Fa(e,t)}function Mh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Mh(e,t,n,r)}function Bo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dh(e){if(typeof e=="function")return Bo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===so)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Bo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vt:return Dt(n.children,i,s,t);case ro:l=8,i|=8;break;case is:return e=Re(12,n,t,i|2),e.elementType=is,e.lanes=s,e;case ss:return e=Re(13,n,t,i),e.elementType=ss,e.lanes=s,e;case os:return e=Re(19,n,t,i),e.elementType=os,e.lanes=s,e;case ya:return Si(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case va:l=10;break e;case wa:l=9;break e;case io:l=11;break e;case so:l=14;break e;case at:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Re(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Dt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Si(e,t,n,r){return e=Re(22,e,r,t),e.elementType=ya,e.lanes=n,e.stateNode={isHidden:!1},e}function Ji(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Xi(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _h(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ri(0),this.expirationTimes=Ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wo(e,t,n,r,i,s,l,c,d){return e=new _h(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Re(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(s),e}function Fh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dc(e){if(!e)return jt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Se(n))return du(e,n,t)}return t}function hc(e,t,n,r,i,s,l,c,d){return e=Wo(n,r,!0,e,i,s,l,c,d),e.context=dc(null),n=e.current,r=me(),i=kt(n),s=et(r,i),s.callback=t??null,wt(n,s,i),e.current.lanes=i,or(e,i,r),be(e,r),e}function bi(e,t,n,r){var i=t.current,s=me(),l=kt(i);return n=dc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(i,t,l),e!==null&&(We(e,i,l,s),Lr(e,i,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ho(e,t){Jl(e,t),(e=e.alternate)&&Jl(e,t)}function Ah(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uo(e){this._internalRoot=e}ji.prototype.render=Uo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));bi(e,t,null,null)};ji.prototype.unmount=Uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){bi(null,e,null,null)}),t[nt]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=$a();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Ga(e)}};function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xl(){}function Oh(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=ui(l);s.call(f)}}var l=hc(t,r,e,0,null,!1,!1,"",Xl);return e._reactRootContainer=l,e[nt]=l.current,Yn(e.nodeType===8?e.parentNode:e),Bt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var f=ui(d);c.call(f)}}var d=Wo(e,0,!1,null,null,!1,!1,"",Xl);return e._reactRootContainer=d,e[nt]=d.current,Yn(e.nodeType===8?e.parentNode:e),Bt(function(){bi(t,d,n,r)}),d}function Ei(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var c=i;i=function(){var d=ui(l);c.call(d)}}bi(t,l,e,i)}else l=Oh(n,t,e,i,r);return ui(l)}Ha=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(ao(t,n|1),be(t,q()),!(B&6)&&(gn=q()+500,Nt()))}break;case 13:Bt(function(){var r=rt(e,1);if(r!==null){var i=me();We(r,e,1,i)}}),Ho(e,1)}};uo=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();We(t,e,134217728,n)}Ho(e,134217728)}};Ua=function(e){if(e.tag===13){var t=kt(e),n=rt(e,t);if(n!==null){var r=me();We(n,e,t,r)}Ho(e,t)}};$a=function(){return U};Va=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ms=function(e,t,n){switch(t){case"input":if(us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=mi(r);if(!i)throw Error(C(90));Sa(r),us(r,i)}}}break;case"textarea":ja(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Ia=Fo;Ra=Bt;var Bh={usingClientEntryPoint:!1,Events:[ar,Zt,mi,Ta,za,Fo]},Cn={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wh={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Da(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Ah,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{hi=Er.inject(Wh),Ge=Er}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bh;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$o(t))throw Error(C(200));return Fh(e,t,null,n)};Ce.createRoot=function(e,t){if(!$o(e))throw Error(C(299));var n=!1,r="",i=pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wo(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Uo(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Da(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Bt(e)};Ce.hydrate=function(e,t,n){if(!Pi(t))throw Error(C(200));return Ei(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!$o(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=pc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hc(t,null,e,1,n??null,i,!1,s,l),e[nt]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ji(t)};Ce.render=function(e,t,n){if(!Pi(t))throw Error(C(200));return Ei(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(C(40));return e._reactRootContainer?(Bt(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ce.unstable_batchedUpdates=Fo;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ei(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)}catch(e){console.error(e)}}fc(),fa.exports=Ce;var Hh=fa.exports,ql=Hh;ns.createRoot=ql.createRoot,ns.hydrateRoot=ql.hydrateRoot;const Uh="/KM_OS/",Nr=e=>`${Uh}assets/${e}`,ci=[{id:"Alessio Falena Bellucci",title:"Eine Erinnerung an eine vergangene Ära",category:"Titelstory",date:"01.05.1923",image:Nr("22.05.1923.png"),excerpt:"Der König der Unterwelt ist nun seit 10 Jahren Tot. Was kommt nun?",content:["Der König des Verbrechens","Zehn Jahre nach dem Tod des Kopfes der größten und einflussreichsten Untergrundorganisation der Weltgeschichte bleibt die Frage offen: Wer ist jetzt an der Macht?","Genau heute vor zehn Jahren starb das Oberhaupt der Mafia Reale, Alessio Bellucci – auch bekannt als Padre della Falena. Der gefürchtete Anführer der Mafia Reale galt über Jahrzehnte hinweg als einer der mächtigsten Männer der Unterwelt.","Alessio Falena Bellucci II wurde im Jahr 1863 als Teil der Adelsfamilie Le Falene degli Inferi im Schloss Fortezza delle Falene geboren. Die königliche Familie regierte seit 1602 über ganz Italien sowie große Teile Griechenlands, bevor dann 1840 die Verwaltung der Schätze, Ländereien und allem weiteren an die neu eingeführte Regierung weitergereicht wurde. Doch das heißt nicht, dass die ehemaligen Herrscher ihren Platz in der Rangordnung verloren haben, noch heute genießt die Familie enormen Einfluss in Politik, Wirtschaft und Öffentlichkeit. Doch nicht nur in der legalen Welt besitzt die Familie Macht – auch in der Unterwelt gilt ihr Einfluss als nahezu grenzenlos. Sie waren nun nicht mehr die Könige Italiens und Griechenlands sondern der Gauner und all jener, die sich in den Schatten der Gesellschaft dieser 2 Reiche bewegen.","Bellucci war nicht nur von königlichem Blut, sondern auch der König der Gauner und all jener, die sich in den Schatten der Gesellschaft bewegen.","Laut Polizeichef Luigi Montanari bestand die Mafia Reale jedoch nicht ausschließlich aus der Familie Le Falene degli Inferi, sondern aus insgesamt vier Familien, die allesamt Nachkommen Alessios sein sollen. Jede der vier Familien kontrollierte bestimmte Bereiche der Unterwelt und festigte ihren Einfluss durch Brutalität, aber auch durch Prinzipien, die ihnen den Respekt anderer Gangs einbrachten und sie an die Spitze der kriminellen Welt führten.","„Padre della Falena“ starb im Jahr 1913 während einer Schießerei mit der Polizei bei einer groß angelegten Razzia in Castello Vecchio, bei der mehr als 26 Kilogramm Crystal Moth beschlagnahmt wurden.","Doch offenbar war die Familie nur kurzzeitig außer Gefecht und noch lange nicht zerschlagen. Schon 2 Jahre nach Belluccis Tod soll Gerüchten zufolge soll einer der vier Söhne Belluccis zum neuen Oberhaupt aufgestiegen sein und nun mit seinen 3 Brüdern die Familie verwalten.","Die Polizei sucht weiterhin nach Hinweisen auf die Identität des neuen Oberhaupts. In Unterweltkreisen wird der mysteriöse Nachfolger angeblich nur „Il Principe delle Falene“ – der Prinz der Motten – genannt. Obwohl das neue oberhaupt nun seit 8 Jahren das sagen hat und mit der Übernahme eine neue gerissenere und brutalere Regentschaft einführte ist bis heute nicht der wahre Name des Prinzen der Motten bekannt.","Bleibt zu hoffen, dass diese Gerüchte nicht mehr sind als das Gerede von Kleinganoven und Obdachlosen."],featured:!0},{id:"1",title:"Schmuggelvorrwürfe am Porto Vecchia by Adonios il bugiardo",category:"Titelstory",date:"03.05.1923",image:Nr("Port Vecchia.png"),excerpt:"Am Hafen des Port Vecchia wurden bei den Waren der Tristo Mietitore leuchtende Flaschen gefunden.",content:["Am regnerischen Abend des 24. Aprils lief im Hafen von Port Vecchia das berühmte Handels Schiff Tristo Mietitore ein. Beim Entladen der finsten Mode und der exotischen Speisen wurden jedoch nicht nur Luxusgüter der besten Qualität gefunden. Viele Flaschen, Phiolen und weitere Glasbehälter unbekannter Herkunft waren ebenfalls Teil der Fracht. Die nicht deklarierten Behälter waren jedoch nicht das, was die Hafenmitarbeiter in Schrecken versetzte.","Die Flaschen beinhalten Flüssigkeiten mit den unterschiedlichsten Farben und Mustern. Bei einigen der Flaschen wurden laut einer Insider-Quelle sogar eingelegte Organe und Knochen von Menschen und Tieren gefunden.",'Die Polizei sperrte den Hafen ab und brachte daraufhin die sonderbaren Flaschen, sowie den Captain der Tristo Mietitore "Charon il traghettatore" auf die Polizeistation.',"Unsere Quelle teilte uns mit, dass die gefundenen Überreste, laut Bestätigungen der Pathologie, 5 Männern, 4 Kindern und 3 Katzen zugehörig waren.","Eine offizielle Stellungnahme seitens der Polizei ist jedoch noch nicht in Sicht."],featured:!0},{id:"01.06.1923",title:"Die Geschichte des Casa del Rosso und der Familie Fragortis",category:"Titelstory",date:"01.06.1923",image:Nr("CASA DEL ROSSO.png"),excerpt:"Neueröffnung des berühmtesten Restaurants der Geschichte und die Familie dahinter",content:["ES IST SO WEIT – DAS WELTBERÜHMTE CASA DEL ROSSO FEIERT SEINE NEUERÖFFNUNG","","Nach dem Tod von Oliviero und Amarena Fragortis vor 9 Jahren war es lange still um das legendäre Restaurant Casa del Rosso. Nun übernimmt ihr Sohn Rufino Fragortis die traditionsreiche Restaurantkette und haucht einer der berühmtesten Institutionen der Kochwelt neues Leben ein.","Die Geschichte des Casa del Rosso reicht mehr als 400 Jahre zurück. Den Überlieferungen der Familie zufolge wurde das Restaurant im Jahr 1509 von dem Händler und Koch Melograno Fragortis gegründet. Sein Ziel war es, seiner Heimatstadt aus der Armut zu helfen und die italienische Küche durch seine weitreichenden Handelsrouten in die Welt zu tragen.","Der Erfolg ließ nicht lange auf sich warten. Dank seltener Gewürze und erlesener Weine, die kaum irgendwo sonst erhältlich waren, entwickelte sich das Casa del Rosso rasch zu einer kulinarischen Sensation. Schon bald sollen Adlige, Fürsten und sogar Könige aus nahen und fernen Ländern den Gründer persönlich eingeladen haben, an ihren Höfen zu kochen.","Doch nicht allein sein Talent machte Melograno Fragortis zu einer Legende. Der exzentrische Koch bereitete seine Gerichte ausschließlich nachts zu und servierte sie nur unter freiem Mondschein. Er war überzeugt, dass das Licht des Mondes die Speisen veredle und den Geschmack auf eine Weise entfalten könne, die tagsüber unmöglich sei.","Diese ungewöhnliche Leidenschaft verschaffte ihm einen Ruf, der gleichermaßen belächelt wie respektiert wurde. Seine sogenannte „Mondphilosophie“ wurde über Generationen hinweg zum Markenzeichen der Familie Fragortis und begleitet das Haus bis heute.","","Nun ist es an der nächsten Generation, dieses Erbe fortzuführen.","","Rufino Fragortis, heute 28 Jahre alt und mehrfach ausgezeichneter Meisterkoch, erklärt, seit seinem vierzehnten Lebensjahr sämtliche erhaltenen Rezepte, Aufzeichnungen und Notizen seiner Vorfahren studiert und perfektioniert zu haben. Nach Jahrzehnten im Schatten der Familiengeschichte tritt er nun offiziell an die Spitze des Erbes.","Mit der Wiedereröffnung des Casa del Rosso ruhen die Erwartungen nicht nur auf den Schultern eines einzelnen Kochs, sondern auf denen einer ganzen Dynastie. Kritiker, Feinschmecker und Historiker verfolgen gespannt, ob es Rufino Fragortis gelingen wird, die Legende seiner Familie in eine neue Ära zu führen.","Eines steht bereits fest: Die Augen der kulinarischen Welt richten sich erneut auf das Casa del Rosso."],featured:!0},{id:"17.06.1923",title:"Brutale Morde in Luna Sanguinis",category:"Titelstory",date:"17.06.1923",image:Nr("SM6.png"),excerpt:"Im Bezirk Luna Sanguinis wurden die Leichen einiger Schwerverbrecher, die bis zur Unkenntlichkeit verstümmelt wurden, gefunden...",content:["Luna Sanguinis, 16. Juni – In der Nacht zum 16. Juni wurden im wohlhabenden Bezirk Luna Sanguinis die Leichen von vier gesuchten Schwerverbrechern entdeckt. Bei den Toten handelt es sich um Vincenzo Caruso, Marco Belladonna, Antonio Ricci und Luca Mancini, die allesamt dem berüchtigten Gallo-Syndikat zugerechnet wurden.","","Die Männer wurden seit Jahren wegen zahlreicher Verbrechen gesucht, darunter mehrfacher Mord, bewaffneter Raub, Erpressung, Vergewaltigung und weitere schwere Straftaten. Mit ihrem Tod endet nun eine der größten Fahndungen der vergangenen Jahre, und unsere Welt ist nun von diesen vier Monstern befreit.","","Gegen 21:00 Uhr alarmierte ein Koch des renommierten Restaurants Casa del Rosso die Polizei, nachdem er bemerkt hatte, dass aus einer schmalen Seitengasse ungewöhnlich große Mengen Blut auf die Straße gespült wurden. Einsatzkräfte trafen wenig später am Tatort ein und fanden dort die vier Leichen vor.","","Nach Angaben der Ermittler wiesen die Opfer zahlreiche Schnitt- und Stichverletzungen auf. Zudem deuten erste Untersuchungen darauf hin, dass die Männer über einen längeren Zeitraum extrem gefoltert wurden, bevor sie ihren Verletzungen erlagen. Offizielle Stellen halten sich mit weiteren Details bislang zurück.","","Inoffizielle Quellen innerhalb der Ermittlungsbehörden berichten jedoch von ungewöhnlichen Umständen. So soll sich in den Körpern der Opfer kein einziger Tropfen Blut sowie keinerlei andere Körperflüssigkeiten befunden haben. Diese augenscheinliche Austrocknung sorgte sogar dafür, dass die Gehirne auf ein Minimum schrumpften und die Augen der Opfer zerplatzten. Zudem wurden den Opfern ihre Geschlechtsteile gewaltsam entfernt sowie unzählige Brandmarken in ihre Haut gebrannt. Zu diesen Fakten gab die Polizei bislang keine Stellungnahme ab.","","Die Ermittler gehen derzeit von einem gezielten Racheakt oder einer Abrechnung innerhalb des organisierten Verbrechens aus. Dafür spricht insbesondere, dass die vier Männer offenbar bewusst ausgewählt wurden und keine Hinweise auf einen Raubüberfall vorliegen.","","Sowohl in der Unterwelt als auch unter den Bürgern kursiert derweil bereits ein Name für den unbekannten Täter: „Il Giusto Vampiro di Luna Sanguinis“ – der rechtschaffene Vampir von Luna Sanguinis. Die Bezeichnung spielt sowohl auf die grausame Inszenierung des Tatorts als auch auf die kriminelle Vergangenheit der Opfer an.","","Trotz intensiver Spurensicherung stehen die Ermittler bislang vor einem Rätsel. Anwohner berichten, in der regnerischen Nacht weder Schreie noch verdächtige Personen bemerkt zu haben.","","Die Polizei bittet Zeugen, die sich am Abend des 16. Juni im Bereich des Tatortes oder der umliegenden Straßen aufgehalten haben, sich zu melden. Die Ermittlungen dauern an."],featured:!0}];function $h(){const e=N.useMemo(()=>ci.filter(I=>I.featured).slice(0,5),[]),t=N.useMemo(()=>ci.filter(I=>!I.featured),[]),[n,r]=N.useState(0),[i,s]=N.useState(!1),[l,c]=N.useState(null),[d,f]=N.useState("next"),[k,w]=N.useState(0),[y,S]=N.useState(null),[j,E]=N.useState(""),[_,m]=N.useState(""),[g,p]=N.useState(null),[o,u]=N.useState(""),[h,v]=N.useState(""),[x,b]=N.useState({id:"",title:"",category:"",date:"",image:"SM1.png",excerpt:"",content:"",featured:"true"}),P=e[n]??e[0],T=(P==null?void 0:P.title.length)??0,F={fontSize:T>42?"clamp(1.8rem, 3vw, 3.1rem)":T>30?"clamp(2rem, 3.6vw, 3.6rem)":"clamp(2.4rem, 4.4vw, 4.4rem)"},W=I=>{c(I)},re=()=>{c(null)},ie=()=>{p("login"),u(""),v("")},L=()=>{p(null),u(""),v("")},O=I=>{I.preventDefault(),o==="03051923"?(p("unlocked"),v("")):(v("Zugriff verweigert"),u(""))},z=()=>{S("login"),E(""),m("")},M=()=>{S(null)},D=I=>{I.preventDefault(),j==="Mafia"?(S("tool"),m("")):(m("Zugriff verweigert"),E(""))},H=(I,se)=>{b(yn=>({...yn,[I]:se}))},X=N.useMemo(()=>{const I=x.id.trim()||"neuer-artikel",se=x.content.split(`
`).map(yn=>yn.trim());return`{
  id: ${JSON.stringify(I)},
  title: ${JSON.stringify(x.title.trim())},
  category: ${JSON.stringify(x.category.trim())},
  date: ${JSON.stringify(x.date.trim())},
  image: asset(${JSON.stringify(x.image.trim()||"SM1.png")}),
  excerpt: ${JSON.stringify(x.excerpt.trim())},
  content: [
${se.map(yn=>`    ${JSON.stringify(yn)},`).join(`
`)}
  ],
  featured: ${x.featured==="true"},
},`},[x]),ot=()=>{w(I=>I+1)},Qe=()=>{ot(),f("next"),r(I=>(I+1)%e.length)},wn=()=>{ot(),f("prev"),r(I=>I===0?e.length-1:I-1)};return N.useEffect(()=>{if(!e.length||l)return;const I=window.setInterval(()=>{f("next"),r(se=>(se+1)%e.length)},7e3);return()=>window.clearInterval(I)},[e.length,l,k]),a.jsxs("div",{className:"news-shell noir-shell",children:[a.jsxs("header",{className:"news-topbar mono",children:[a.jsxs("div",{className:"news-topbar-left",children:[a.jsx("span",{children:"Klassischer Reader"}),a.jsx("span",{children:"The Black Ledger"})]}),a.jsx("div",{className:"news-topbar-right",children:a.jsx("button",{type:"button",onClick:()=>s(I=>!I),children:i?"Archiv schließen":"Archiv öffnen"})})]}),a.jsxs("div",{className:"news-layout",children:[a.jsxs("section",{className:"news-main",children:[a.jsxs("div",{className:"slider-frame",children:[a.jsx("button",{type:"button",className:"slider-arrow left",onClick:wn,children:"‹"}),a.jsxs("article",{className:`slider-card noir-card slide-${d}`,onClick:()=>W(P),role:"button",tabIndex:0,children:[a.jsx("div",{className:"slider-image-wrap noir-image",children:a.jsx("img",{src:P.image,alt:P.title})}),a.jsxs("div",{className:"slider-content",children:[a.jsx("p",{className:"slider-category mono",children:P.category}),a.jsx("h1",{style:F,children:P.title}),a.jsx("p",{className:"slider-excerpt",children:P.excerpt}),a.jsxs("div",{className:"slider-meta mono",children:[a.jsx("span",{children:P.date}),a.jsx("button",{type:"button",className:"open-article-button",onClick:I=>{I.stopPropagation(),W(P)},children:"Artikel öffnen"})]})]})]},P.id),a.jsx("button",{type:"button",className:"slider-arrow right",onClick:Qe,children:"›"})]}),a.jsx("div",{className:"slider-dots",children:e.map((I,se)=>a.jsx("button",{type:"button",className:`slider-dot ${se===n?"active":""}`,onClick:()=>{ot(),f(se>n?"next":"prev"),r(se)},"aria-label":`Slide ${se+1}`},I.id))})]}),a.jsxs("aside",{className:`news-archive ${i?"open":""}`,children:[a.jsx("div",{className:"archive-head mono",children:"Archiv"}),a.jsx("div",{className:"archive-list",children:t.map(I=>a.jsxs("button",{type:"button",className:"archive-item",onClick:()=>W(I),children:[a.jsx("span",{className:"mono",children:I.date}),a.jsx("strong",{children:I.title}),a.jsx("small",{children:I.excerpt})]},I.id))})]})]}),a.jsxs("footer",{className:"news-footer mono",children:[a.jsx("button",{type:"button",className:"writer-entry",onClick:z,children:"Ansicht: Zeitung"}),a.jsx("span",{children:"Format: Slider + Archiv"}),a.jsx("span",{children:"Noir Reader aktiv"})]}),l?a.jsx("div",{className:"article-modal-overlay",onClick:re,children:a.jsxs("div",{className:"article-modal noir-card",onClick:I=>I.stopPropagation(),children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:l.category}),a.jsx("span",{children:l.date}),a.jsx("button",{type:"button",className:"modal-close",onClick:re,children:"Schließen"})]}),a.jsxs("div",{className:"article-modal-body",children:[a.jsxs("div",{className:"article-modal-image noir-image",children:[a.jsx("img",{src:l.image,alt:l.title}),l.id==="1"?a.jsx("button",{type:"button",className:"ledger-hidden-trigger",onClick:ie,"aria-label":"Versteckter Zugang"}):null]}),a.jsxs("div",{className:"article-modal-text",children:[a.jsx("h2",{children:l.title}),a.jsx("p",{className:"article-lead",children:l.excerpt}),a.jsx("div",{className:"article-paragraphs",children:l.content.map((I,se)=>I===""?a.jsx("div",{className:"article-empty-line"},se):a.jsx("p",{children:I},se))})]})]})]})}):null,g?a.jsx("div",{className:"article-modal-overlay",onClick:L,children:a.jsxs("div",{className:"ledger-secret-modal noir-card",onClick:I=>I.stopPropagation(),children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:"Versiegelter Zugriff"}),a.jsx("span",{children:g==="login"?"Code erforderlich":"Freigegeben"}),a.jsx("button",{type:"button",className:"modal-close",onClick:L,children:"Schließen"})]}),g==="login"?a.jsxs("form",{className:"ledger-secret-login",onSubmit:O,children:[a.jsx("p",{className:"writer-kicker mono",children:"The Black Ledger"}),a.jsx("h2",{children:"Zusatzvermerk entsperren"}),a.jsx("input",{type:"password",value:o,onChange:I=>u(I.target.value),placeholder:"Zugangscode",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Bestätigen"}),h?a.jsx("p",{className:"writer-error mono",children:h}):null]}):a.jsxs("div",{className:"ledger-secret-content",children:[a.jsx("p",{className:"writer-kicker mono",children:"ZUSATZVERMERK FREIGEGEBEN"}),a.jsx("h2",{children:"Der Beweis war nie die Fracht."}),a.jsx("p",{children:"Die Phiolen wurden nicht geschmuggelt, um verkauft zu werden. Sie wurden transportiert, um jemanden zu testen."}),a.jsx("p",{children:"Der Name des Empfängers wurde aus dem Hafenbericht entfernt. Eine Kopie liegt nicht bei der Zeitung."}),a.jsx("p",{className:"mono",children:"NÄCHSTER HINWEIS: Suche im Archiv nach dem Mann, der die Tristo Mietitore führte. N..... N.... Nutze seinen -. .- -.-. .... -. .- -- . -."})]})]})}):null,y?a.jsx("div",{className:"article-modal-overlay",onClick:M,children:a.jsxs("div",{className:"writer-modal noir-card",onClick:I=>I.stopPropagation(),children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:"Writer Tool"}),a.jsx("span",{children:y==="login"?"Passwort erforderlich":"Code Generator"}),a.jsx("button",{type:"button",className:"modal-close",onClick:M,children:"Schließen"})]}),y==="login"?a.jsxs("form",{className:"writer-login",onSubmit:D,children:[a.jsx("p",{className:"writer-kicker mono",children:"Zugriff nur für Writer"}),a.jsx("h2",{children:"Writer-Passwort eingeben"}),a.jsx("input",{type:"password",value:j,onChange:I=>E(I.target.value),placeholder:"Passwort",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Tool öffnen"}),_?a.jsx("p",{className:"writer-error mono",children:_}):null]}):a.jsxs("div",{className:"writer-tool",children:[a.jsxs("div",{className:"writer-form",children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"ID"}),a.jsx("input",{value:x.id,onChange:I=>H("id",I.target.value),placeholder:"z.B. story-001"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Titel"}),a.jsx("input",{value:x.title,onChange:I=>H("title",I.target.value),placeholder:"Artikel-Titel"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Kategorie"}),a.jsx("input",{value:x.category,onChange:I=>H("category",I.target.value),placeholder:"Titelstory / Gerücht / Archiv ..."})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Datum"}),a.jsx("input",{value:x.date,onChange:I=>H("date",I.target.value),placeholder:"23.04.2026"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Bilddatei"}),a.jsx("input",{value:x.image,onChange:I=>H("image",I.target.value),placeholder:"SM1.png"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Featured?"}),a.jsxs("select",{value:x.featured,onChange:I=>H("featured",I.target.value),children:[a.jsx("option",{value:"true",children:"Ja, in die Slideshow"}),a.jsx("option",{value:"false",children:"Nein, ins Archiv"})]})]}),a.jsxs("label",{className:"wide-field",children:[a.jsx("span",{className:"mono",children:"Kurztext"}),a.jsx("textarea",{value:x.excerpt,onChange:I=>H("excerpt",I.target.value),placeholder:"Kurzer Teaser für die Slideshow oder Archivliste"})]}),a.jsxs("label",{className:"wide-field content-field",children:[a.jsx("span",{className:"mono",children:"Artikeltext"}),a.jsx("textarea",{value:x.content,onChange:I=>H("content",I.target.value),placeholder:"Jeder Absatz in eine neue Zeile. Der Generator macht daraus automatisch Code."})]})]}),a.jsxs("div",{className:"writer-output",children:[a.jsxs("div",{className:"writer-output-head mono",children:[a.jsx("span",{children:"Fertiger Code für zeitungData.js"}),a.jsxs("div",{className:"writer-output-actions",children:[a.jsx("button",{type:"button",onClick:()=>{var I;return(I=navigator.clipboard)==null?void 0:I.writeText(X)},children:"Kopieren"}),a.jsx("a",{href:"https://forms.gle/6hM68qsc1WZpK24s6",target:"_blank",rel:"noopener noreferrer",className:"writer-submit-link",children:"Artikel einreichen"})]})]}),a.jsx("pre",{children:X})]})]})]})}):null,a.jsx("style",{children:`
        .news-shell {
          height: 100%;
          display: grid;
          grid-template-rows: auto minmax(0, 1fr) auto;
          overflow: hidden;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 20%),
            linear-gradient(180deg, #050505 0%, #0b0b0b 40%, #030303 100%);
          color: #f2f2f2;
        }

        .news-topbar,
        .news-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.72);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .news-footer {
          border-bottom: 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .news-topbar-left,
        .news-topbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

.news-topbar-right button,
.open-article-button,
.modal-close,
.writer-entry,
.writer-login button,
.writer-output-head button {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          color: #ffffff;
          border-radius: 999px;
          padding: 8px 12px;
          cursor: pointer;
        }

        .news-layout {
          min-height: 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) ${i?"320px":"0px"};
          transition: grid-template-columns 0.22s ease;
          overflow: hidden;
        }

.news-main {
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 14px;
  padding: 16px;
  overflow: hidden;
  background: transparent;
}

        .slider-frame {
          min-height: 0;
          height: 100%;
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr) 56px;
          gap: 12px;
          align-items: stretch;
        }

        .slider-arrow {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.74);
          font-size: 2rem;
          border-radius: 18px;
          cursor: pointer;
        }

        .noir-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 18px 50px rgba(0,0,0,0.28);
          backdrop-filter: blur(8px);
        }

.slider-card {
  min-width: 0;
  height: 100%;
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  gap: 18px;
  padding: 18px;
  border-radius: 24px;
  overflow: hidden;
  animation: slideIn 0.48s ease both;
}

        .noir-image {
          background: rgba(255,255,255,0.03);
        }

        .slider-image-wrap {
          overflow: hidden;
          border-radius: 18px;
          min-height: 250px;
        }

        .slider-image-wrap img,
        .featured-tile img,
        .article-modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.08) brightness(0.72);
        }

.slider-content {
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto auto;
  gap: 14px;
  align-content: stretch;
}

        .slider-category,
        .featured-tile-text p,
        .archive-head,
        .archive-item span {
          margin: 0;
          color: rgba(255,255,255,0.48);
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

.slider-content h1,
.article-modal-text h2 {
  margin: 0;
  line-height: 0.95;
  text-transform: uppercase;
  color: #ffffff;
}

.slider-content h1 {
  max-height: 3.9em;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.article-modal-text h2 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2.2rem);
  line-height: 1.1;
  text-transform: uppercase;
  color: #ffffff;
  overflow-wrap: anywhere;
  word-break: break-word;
  max-width: 100%;
}

.slider-excerpt,
.article-lead,
.article-paragraphs p,
.archive-item small {
  margin: 0;
  line-height: 1.72;
  color: rgba(255,255,255,0.78);
}

.slider-excerpt {
  max-height: 5.2em;
  overflow: hidden;
}

        .slider-meta {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.58);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding-top: 8px;
          border-top: 1px solid rgba(255,255,255,0.08);
          align-items: center;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: 0;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
        }

        .slider-dot.active {
          background: rgba(255,255,255,0.92);
        }

        .featured-grid {
          min-height: 0;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          overflow: hidden;
        }

        .featured-tile {
          min-width: 0;
          display: grid;
          grid-template-rows: 110px auto;
          gap: 10px;
          padding: 10px;
          border-radius: 18px;
          cursor: pointer;
          text-align: left;
        }

        .featured-tile.active {
          outline: 1px solid rgba(255,255,255,0.22);
        }

        .featured-tile img {
          border-radius: 12px;
          height: 110px;
        }

        .featured-tile-text {
          display: grid;
          gap: 6px;
          min-width: 0;
        }

        .featured-tile-text strong,
        .archive-item strong {
          color: #ffffff;
          line-height: 1.35;
        }

        .news-archive {
          min-height: 0;
          width: 100%;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border-left: 1px solid rgba(255,255,255,0.08);
          opacity: ${i?"1":"0"};
          pointer-events: ${i?"auto":"none"};
        }

        .archive-head {
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .archive-list {
          height: calc(100% - 49px);
          overflow: auto;
        }

        .archive-item {
          width: 100%;
          display: grid;
          gap: 8px;
          text-align: left;
          padding: 14px 16px;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: transparent;
          cursor: pointer;
          color: #ffffff;
        }

        .article-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          background: rgba(0,0,0,0.72);
          display: grid;
          place-items: center;
          padding: 24px;
        }

        .article-modal {
          width: min(1100px, 100%);
          height: min(85vh, 900px);
          border-radius: 24px;
          overflow: hidden;
          display: grid;
          grid-template-rows: auto minmax(0, 1fr);
        }

        .article-modal-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.68);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .article-modal-body {
          min-height: 0;
          display: grid;
          grid-template-columns: 340px minmax(0, 1fr);
          gap: 18px;
          padding: 18px;
          overflow: hidden;
        }

        .article-modal-image {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  min-height: 260px;
}

.ledger-hidden-trigger {
  position: absolute;
  right: 8%;
  bottom: 9%;
  width: 54px;
  height: 54px;
  border: 0;
  background: transparent;
  opacity: 0;
  cursor: default;
}

.ledger-hidden-trigger:hover {
  cursor: pointer;
}

.ledger-secret-modal {
  width: min(760px, 100%);
  max-height: min(82vh, 760px);
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.ledger-secret-login,
.ledger-secret-content {
  min-height: 0;
  display: grid;
  align-content: center;
  gap: 14px;
  padding: 28px;
  overflow: auto;
}

.ledger-secret-login h2,
.ledger-secret-content h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 0.95;
  text-transform: uppercase;
}

.ledger-secret-login input {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 14px;
  background: rgba(0,0,0,0.34);
  color: white;
  padding: 11px 12px;
  outline: none;
}

.ledger-secret-login button {
  width: fit-content;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  color: #ffffff;
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
}

        .article-modal-text {
          min-width: 0;
          min-height: 0;
          display: grid;
          grid-auto-rows: min-content;
          gap: 14px;
          align-content: start;
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 8px;
        }

        .article-paragraphs {
          display: grid;
          gap: 12px;
        }

        .slider-card.slide-next {
  --slide-from: 34px;
}

.slider-card.slide-prev {
  --slide-from: -34px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(var(--slide-from)) scale(0.985);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.writer-entry {
  font: inherit;
  letter-spacing: inherit;
  text-transform: uppercase;
}

.writer-modal {
  width: min(1180px, 100%);
  height: min(88vh, 920px);
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
}

.writer-login {
  min-height: 0;
  display: grid;
  align-content: center;
  justify-items: start;
  gap: 14px;
  padding: 28px;
}

.writer-login h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 0.95;
  text-transform: uppercase;
}

.writer-kicker,
.writer-error {
  margin: 0;
  color: rgba(255,255,255,0.58);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.writer-error {
  color: #f0b2b2;
}

.writer-login input,
.writer-form input,
.writer-form textarea,
.writer-form select {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 14px;
  background: rgba(0,0,0,0.34);
  color: white;
  padding: 11px 12px;
  outline: none;
  font: inherit;
}

.writer-tool {
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.85fr);
  gap: 18px;
  padding: 18px;
  overflow: hidden;
}

.writer-form {
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  overflow: auto;
  padding-right: 4px;
}

.writer-form label {
  display: grid;
  gap: 7px;
  color: rgba(255,255,255,0.76);
}

.writer-form label span {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.48);
}

.wide-field {
  grid-column: 1 / -1;
}

.writer-form textarea {
  min-height: 82px;
  resize: vertical;
}

.content-field textarea {
  min-height: 180px;
}

.writer-output {
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
  background: rgba(0,0,0,0.28);
}

.writer-output-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.58);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.writer-output-actions {
  display: flex;
  flex-direction: column; /* untereinander */
  align-items: stretch;   /* gleiche Breite */
  gap: 8px;
  min-width: 160px;       /* sorgt für stabile Breite */
}

.writer-output pre {
  margin: 0;
  padding: 14px;
  overflow: auto;
  color: rgba(255,255,255,0.86);
  font-size: 0.82rem;
  line-height: 1.55;
  white-space: pre-wrap;
}

.writer-submit-link {
  display: block;
  width: 100%;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: #ffffff;
  text-decoration: none;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.writer-output-head button {
  width: 100%;
}

.writer-submit-link:hover {
  background: rgba(255,255,255,0.12);
}

.article-empty-line {
  height: 18px;
}

        @media (max-width: 1100px) {

.slider-card,
.article-modal-body,
.writer-tool {
  grid-template-columns: 1fr;
}
        }

        @media (max-width: 900px) {
          .news-layout {
            grid-template-columns: 1fr;
          }

          .writer-form {
  grid-template-columns: 1fr;
}

          .news-archive {
            display: ${i?"block":"none"};
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,0.08);
            max-height: 220px;
          }

          .slider-frame {
            grid-template-columns: 40px minmax(0, 1fr) 40px;
          }
        }
      `})]})}var Zs={exports:{}};(function(e,t){(function(n,r){r(t)})(gc,function(n){class r{constructor(o,u){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=u,this.nowDrawingDensity=this.createdDensity,this.render=o}setDensity(o){this.createdDensity=o,this.nowDrawingDensity=o}setDrawingDensity(o){this.nowDrawingDensity=o}setPosition(o){this.state.position=o}setAngle(o){this.state.angle=o}setArea(o){this.state.area=o}setHardDrawingAngle(o){this.state.hardDrawingAngle=o}setHardAngle(o){this.state.hardAngle=o,this.state.hardDrawingAngle=o}setOrientation(o){this.orientation=o}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class i extends r{constructor(o,u,h){super(o,h),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=u}draw(o){const u=this.render.getContext(),h=this.render.convertToGlobal(this.state.position),v=this.render.getRect().pageWidth,x=this.render.getRect().height;u.save(),u.translate(h.x,h.y),u.beginPath();for(let b of this.state.area)b!==null&&(b=this.render.convertToGlobal(b),u.lineTo(b.x-h.x,b.y-h.y));u.rotate(this.state.angle),u.clip(),this.isLoad?u.drawImage(this.image,0,0,v,x):this.drawLoader(u,{x:0,y:0},v,x),u.restore()}simpleDraw(o){const u=this.render.getRect(),h=this.render.getContext(),v=u.pageWidth,x=u.height,b=o===1?u.left+u.pageWidth:u.left,P=u.top;this.isLoad?h.drawImage(this.image,b,P,v,x):this.drawLoader(h,{x:b,y:P},v,x)}drawLoader(o,u,h,v){o.beginPath(),o.strokeStyle="rgb(200, 200, 200)",o.fillStyle="rgb(255, 255, 255)",o.lineWidth=1,o.rect(u.x+1,u.y+1,h-1,v-1),o.stroke(),o.fill();const x={x:u.x+h/2,y:u.y+v/2};o.beginPath(),o.lineWidth=10,o.arc(x.x,x.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),o.stroke(),o.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class s{constructor(o,u){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=u,this.app=o,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let u=0;u<this.pages.length;u++)this.portraitSpread.push([u]);let o=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([o]),o++);for(let u=o;u<this.pages.length;u+=2)u<this.pages.length-1?this.landscapeSpread.push([u,u+1]):(this.landscapeSpread.push([u]),this.pages[u].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(o){const u=this.getSpread();for(let h=0;h<u.length;h++)if(o===u[h][0]||o===u[h][1])return h;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(o){if(o>=0&&o<this.pages.length)return this.pages[o];throw new Error("Invalid page number")}nextBy(o){const u=this.pages.indexOf(o);return u<this.pages.length-1?this.pages[u+1]:null}prevBy(o){const u=this.pages.indexOf(o);return u>0?this.pages[u-1]:null}getFlippingPage(o){const u=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return o===0?this.pages[u].newTemporaryCopy():this.pages[u-1];{const h=o===0?this.getSpread()[u+1]:this.getSpread()[u-1];return h.length===1||o===0?this.pages[h[0]]:this.pages[h[1]]}}getBottomPage(o){const u=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return o===0?this.pages[u+1]:this.pages[u-1];{const h=o===0?this.getSpread()[u+1]:this.getSpread()[u-1];return h.length===1?this.pages[h[0]]:o===0?this.pages[h[1]]:this.pages[h[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(o=null){if(o===null&&(o=this.currentPageIndex),o<0||o>=this.pages.length)return;const u=this.getSpreadIndexByPage(o);u!==null&&(this.currentSpreadIndex=u,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(o){if(!(o>=0&&o<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=o}showSpread(){const o=this.getSpread()[this.currentSpreadIndex];o.length===2?(this.render.setLeftPage(this.pages[o[0]]),this.render.setRightPage(this.pages[o[1]])):this.render.getOrientation()==="landscape"&&o[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[o[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[o[0]])),this.currentPageIndex=o[0],this.app.updatePageIndex(this.currentPageIndex)}}class l extends s{constructor(o,u,h){super(o,u),this.imagesHref=h}load(){for(const o of this.imagesHref){const u=new i(this.render,o,"soft");u.load(),this.pages.push(u)}this.createSpread()}}class c{static GetDistanceBetweenTwoPoint(o,u){return o===null||u===null?1/0:Math.sqrt(Math.pow(u.x-o.x,2)+Math.pow(u.y-o.y,2))}static GetSegmentLength(o){return c.GetDistanceBetweenTwoPoint(o[0],o[1])}static GetAngleBetweenTwoLine(o,u){const h=o[0].y-o[1].y,v=u[0].y-u[1].y,x=o[1].x-o[0].x,b=u[1].x-u[0].x;return Math.acos((h*v+x*b)/(Math.sqrt(h*h+x*x)*Math.sqrt(v*v+b*b)))}static PointInRect(o,u){return u===null?null:u.x>=o.left&&u.x<=o.width+o.left&&u.y>=o.top&&u.y<=o.top+o.height?u:null}static GetRotatedPoint(o,u,h){return{x:o.x*Math.cos(h)+o.y*Math.sin(h)+u.x,y:o.y*Math.cos(h)-o.x*Math.sin(h)+u.y}}static LimitPointToCircle(o,u,h){if(c.GetDistanceBetweenTwoPoint(o,h)<=u)return h;const v=o.x,x=o.y,b=h.x,P=h.y;let T=Math.sqrt(Math.pow(u,2)*Math.pow(v-b,2)/(Math.pow(v-b,2)+Math.pow(x-P,2)))+v;h.x<0&&(T*=-1);let F=(T-v)*(x-P)/(v-b)+x;return v-b+x===0&&(F=u),{x:T,y:F}}static GetIntersectBetweenTwoSegment(o,u,h){return c.PointInRect(o,c.GetIntersectBeetwenTwoLine(u,h))}static GetIntersectBeetwenTwoLine(o,u){const h=o[0].y-o[1].y,v=u[0].y-u[1].y,x=o[1].x-o[0].x,b=u[1].x-u[0].x,P=o[0].x*o[1].y-o[1].x*o[0].y,T=u[0].x*u[1].y-u[1].x*u[0].y,F=h*T-v*P,W=x*T-b*P,re=-(P*b-T*x)/(h*b-v*x),ie=-(h*T-v*P)/(h*b-v*x);if(isFinite(re)&&isFinite(ie))return{x:re,y:ie};if(Math.abs(F-W)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(o,u){const h=Math.abs(o.x-u.x),v=Math.abs(o.y-u.y),x=Math.max(h,v),b=[o];function P(T,F,W,re,ie){return F>T?T+ie*(W/re):F<T?T-ie*(W/re):T}for(let T=1;T<=x;T+=1)b.push({x:P(o.x,u.x,h,x,T),y:P(o.y,u.y,v,x,T)});return b}}class d extends r{constructor(o,u,h){super(o,h),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=u,this.element.classList.add("stf__item"),this.element.classList.add("--"+h)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new d(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(o){const u=o||this.nowDrawingDensity,h=this.render.convertToGlobal(this.state.position),v=this.render.getRect().pageWidth,x=this.render.getRect().height;this.element.classList.remove("--simple");const b=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${v}px;
            height: ${x}px;
        `;u==="hard"?this.drawHard(b):this.drawSoft(h,b)}drawHard(o=""){const u=this.render.getRect().left+this.render.getRect().width/2,h=this.state.hardDrawingAngle,v=o+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${h}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${u}px, 0, 0) rotateY(${h}deg);`);this.element.style.cssText=v}drawSoft(o,u=""){let h="polygon( ";for(const x of this.state.area)if(x!==null){let b=this.render.getDirection()===1?{x:-x.x+this.state.position.x,y:x.y-this.state.position.y}:{x:x.x-this.state.position.x,y:x.y-this.state.position.y};b=c.GetRotatedPoint(b,{x:0,y:0},this.state.angle),h+=b.x+"px "+b.y+"px, "}h=h.slice(0,-2),h+=")";const v=u+`transform-origin: 0 0; clip-path: ${h}; -webkit-clip-path: ${h};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${o.x}px, ${o.y}px);`:`transform: translate3d(${o.x}px, ${o.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=v}simpleDraw(o){const u=this.render.getRect(),h=u.pageWidth,v=u.height,x=o===1?u.left+u.pageWidth:u.left,b=u.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${v}px; 
            left: ${x}px; 
            top: ${b}px; 
            width: ${h}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(o){super.setOrientation(o),this.element.classList.remove("--left","--right"),this.element.classList.add(o===1?"--right":"--left")}setDrawingDensity(o){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+o),super.setDrawingDensity(o)}}class f extends s{constructor(o,u,h,v){super(o,u),this.element=h,this.pagesElement=v}load(){for(const o of this.pagesElement){const u=new d(this.render,o,o.dataset.density==="hard"?"hard":"soft");u.load(),this.pages.push(u)}this.createSpread()}}class k{constructor(o,u,h,v){this.direction=o,this.corner=u,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(h,10),this.pageHeight=parseInt(v,10)}calc(o){try{return this.position=this.calcAngleAndPosition(o),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const o=[];let u=!1;return o.push(this.rect.topLeft),o.push(this.topIntersectPoint),this.sideIntersectPoint===null?u=!0:(o.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(u=!1)),o.push(this.bottomIntersectPoint),(u||this.corner==="bottom")&&o.push(this.rect.bottomLeft),o}getBottomClipArea(){const o=[];return o.push(this.topIntersectPoint),this.corner==="top"?o.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&o.push({x:this.pageWidth,y:0}),o.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?c.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&o.push(this.sideIntersectPoint):this.corner==="top"&&o.push({x:this.pageWidth,y:this.pageHeight}),o.push(this.bottomIntersectPoint),o.push(this.topIntersectPoint),o}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const o=c.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?o:Math.PI-o}calcAngleAndPosition(o){let u=o;if(this.updateAngleAndGeometry(u),u=this.corner==="top"?this.checkPositionAtCenterLine(u,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(u,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(u.x-this.pageWidth)<1&&Math.abs(u.y)<1)throw new Error("Point is too small");return u}updateAngleAndGeometry(o){this.angle=this.calculateAngle(o),this.rect=this.getPageRect(o)}calculateAngle(o){const u=this.pageWidth-o.x+1,h=this.corner==="bottom"?this.pageHeight-o.y:o.y;let v=2*Math.acos(u/Math.sqrt(h*h+u*u));h<0&&(v=-v);const x=Math.PI-v;if(!isFinite(v)||x>=0&&x<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(v=-v),v}getPageRect(o){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],o):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],o)}getRectFromBasePoint(o,u){return{topLeft:this.getRotatedPoint(o[0],u),topRight:this.getRotatedPoint(o[1],u),bottomLeft:this.getRotatedPoint(o[2],u),bottomRight:this.getRotatedPoint(o[3],u)}}getRotatedPoint(o,u){return{x:o.x*Math.cos(this.angle)+o.y*Math.sin(this.angle)+u.x,y:o.y*Math.cos(this.angle)-o.x*Math.sin(this.angle)+u.y}}calculateIntersectPoint(o){const u={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[o,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[o,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[o,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(o,u,h){let v=o;const x=c.LimitPointToCircle(u,this.pageWidth,v);v!==x&&(v=x,this.updateAngleAndGeometry(v));const b=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let P=this.rect.bottomRight,T=this.rect.topLeft;if(this.corner==="bottom"&&(P=this.rect.topRight,T=this.rect.bottomLeft),P.x<=0){const F=c.LimitPointToCircle(h,b,T);F!==v&&(v=F,this.updateAngleAndGeometry(v))}return v}getSegmentToShadowLine(){const o=this.getShadowStartPoint();return[o,o!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class w{constructor(o,u){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=o,this.app=u}fold(o){this.setState("user_fold"),this.calc===null&&this.start(o),this.do(this.render.convertToPage(o))}flip(o){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(o)||(this.calc!==null&&this.render.finishAnimation(),!this.start(o)))return;const u=this.getBoundsRect();this.setState("flipping");const h=u.height/10,v=this.calc.getCorner()==="bottom"?u.height-h:h,x=this.calc.getCorner()==="bottom"?u.height:0;this.calc.calc({x:u.pageWidth-h,y:v}),this.animateFlippingTo({x:u.pageWidth-h,y:v},{x:-u.pageWidth,y:x},!0)}start(o){this.reset();const u=this.render.convertToBook(o),h=this.getBoundsRect(),v=this.getDirectionByPoint(u),x=u.y>=h.height/2?"bottom":"top";if(!this.checkDirection(v))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(v),this.bottomPage=this.app.getPageCollection().getBottomPage(v),this.render.getOrientation()==="landscape")if(v===1){const b=this.app.getPageCollection().nextBy(this.flippingPage);b!==null&&this.flippingPage.getDensity()!==b.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),b.setDrawingDensity("hard"))}else{const b=this.app.getPageCollection().prevBy(this.flippingPage);b!==null&&this.flippingPage.getDensity()!==b.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),b.setDrawingDensity("hard"))}return this.render.setDirection(v),this.calc=new k(v,x,h.pageWidth.toString(10),h.height.toString(10)),!0}catch{return!1}}do(o){if(this.calc!==null&&this.calc.calc(o)){const u=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*u)/100):this.flippingPage.setHardAngle(-90*(200-2*u)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),u,this.calc.getDirection())}}flipToPage(o,u){const h=this.app.getPageCollection().getCurrentSpreadIndex(),v=this.app.getPageCollection().getSpreadIndexByPage(o);try{v>h&&(this.app.getPageCollection().setCurrentSpreadIndex(v-1),this.flipNext(u)),v<h&&(this.app.getPageCollection().setCurrentSpreadIndex(v+1),this.flipPrev(u))}catch{}}flipNext(o){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:o==="top"?1:this.render.getRect().height-2})}flipPrev(o){this.flip({x:10,y:o==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const o=this.calc.getPosition(),u=this.getBoundsRect(),h=this.calc.getCorner()==="bottom"?u.height:0;o.x<=0?this.animateFlippingTo(o,{x:-u.pageWidth,y:h},!0):this.animateFlippingTo(o,{x:u.pageWidth,y:h},!1)}showCorner(o){if(!this.checkState("read","fold_corner"))return;const u=this.getBoundsRect(),h=u.pageWidth;if(this.isPointOnCorners(o))if(this.calc===null){if(!this.start(o))return;this.setState("fold_corner"),this.calc.calc({x:h-1,y:1});const v=50,x=this.calc.getCorner()==="bottom"?u.height-1:1,b=this.calc.getCorner()==="bottom"?u.height-v:v;this.animateFlippingTo({x:h-1,y:x},{x:h-v,y:b},!1,!1)}else this.do(this.render.convertToPage(o));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(o,u,h,v=!0){const x=c.GetCordsFromTwoPoint(o,u),b=[];for(const T of x)b.push(()=>this.do(T));const P=this.getAnimationDuration(x.length);this.render.startAnimation(b,P,()=>{this.calc&&(h&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),v&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(o){this.state!==o&&(this.app.updateState(o),this.state=o)}getDirectionByPoint(o){const u=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(o.x-u.pageWidth<=u.width/5)return 1}else if(o.x<u.width/2)return 1;return 0}getAnimationDuration(o){const u=this.app.getSettings().flippingTime;return o>=1e3?u:o/1e3*u}checkDirection(o){return o===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...o){for(const u of o)if(this.state===u)return!0;return!1}isPointOnCorners(o){const u=this.getBoundsRect(),h=u.pageWidth,v=Math.sqrt(Math.pow(h,2)+Math.pow(u.height,2))/5,x=this.render.convertToBook(o);return x.x>0&&x.y>0&&x.x<u.width&&x.y<u.height&&(x.x<v||x.x>u.width-v)&&(x.y<v||x.y>u.height-v)}}class y{constructor(o,u){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=u,this.app=o;const h=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=h.exec(window.navigator.userAgent)!==null}render(o){if(this.animation!==null){const u=Math.round((o-this.animation.startedAt)/this.animation.durationFrame);u<this.animation.frames.length?this.animation.frames[u]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=o,this.drawFrame()}start(){this.update();const o=u=>{this.render(u),requestAnimationFrame(o)};requestAnimationFrame(o)}startAnimation(o,u,h){this.finishAnimation(),this.animation={frames:o,duration:u,durationFrame:u/o.length,onAnimateEnd:h,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const o=this.calculateBoundsRect();this.orientation!==o&&(this.orientation=o,this.app.updateOrientation(o))}calculateBoundsRect(){let o="landscape";const u=this.getBlockWidth(),h=u/2,v=this.getBlockHeight()/2,x=this.setting.width/this.setting.height;let b=this.setting.width,P=this.setting.height,T=h-b;return this.setting.size==="stretch"?(u<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(o="portrait"),b=o==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,b>this.setting.maxWidth&&(b=this.setting.maxWidth),P=b/x,P>this.getBlockHeight()&&(P=this.getBlockHeight(),b=P*x),T=o==="portrait"?h-b/2-b:h-b):u<2*b&&this.app.getSettings().usePortrait&&(o="portrait",T=h-b/2-b),this.boundsRect={left:T,top:v-P/2,width:2*b,height:P,pageWidth:b},o}setShadowData(o,u,h,v){if(!this.app.getSettings().drawShadow)return;const x=100*this.getSettings().maxShadowOpacity;this.shadow={pos:o,angle:u,width:3*this.getRect().pageWidth/4*h/100,opacity:(100-h)*x/100/100,direction:v,progress:2*h}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(o){this.pageRect=o}setDirection(o){this.direction=o}setRightPage(o){o!==null&&o.setOrientation(1),this.rightPage=o}setLeftPage(o){o!==null&&o.setOrientation(0),this.leftPage=o}setBottomPage(o){o!==null&&o.setOrientation(this.direction===1?0:1),this.bottomPage=o}setFlippingPage(o){o!==null&&o.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=o}convertToBook(o){const u=this.getRect();return{x:o.x-u.left,y:o.y-u.top}}isSafari(){return this.safari}convertToPage(o,u){u||(u=this.direction);const h=this.getRect();return{x:u===0?o.x-h.left-h.width/2:h.width/2-o.x+h.left,y:o.y-h.top}}convertToGlobal(o,u){if(u||(u=this.direction),o==null)return null;const h=this.getRect();return{x:u===0?o.x+h.left+h.width/2:h.width/2-o.x+h.left,y:o.y+h.top}}convertRectToGlobal(o,u){return u||(u=this.direction),{topLeft:this.convertToGlobal(o.topLeft,u),topRight:this.convertToGlobal(o.topRight,u),bottomLeft:this.convertToGlobal(o.bottomLeft,u),bottomRight:this.convertToGlobal(o.bottomRight,u)}}}class S extends y{constructor(o,u,h){super(o,u),this.canvas=h,this.ctx=h.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const o=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(o.left+o.pageWidth,o.top,o.width,o.height),this.ctx.clip())}drawBookShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath();const u=o.width/20;this.ctx.rect(o.left,o.top,o.width,o.height);const h={x:o.left+o.width/2-u/2,y:0};this.ctx.translate(h.x,h.y);const v=this.ctx.createLinearGradient(0,0,u,0);v.addColorStop(0,"rgba(0, 0, 0, 0)"),v.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),v.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),v.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),v.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),v.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=v,this.ctx.fillRect(0,0,u,2*o.height),this.ctx.restore()}drawOuterShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(o.left,o.top,o.width,o.height);const u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const h=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),h.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),h.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),h.addColorStop(0,"rgba(0, 0, 0, 0)"),h.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=h,this.ctx.fillRect(0,0,this.shadow.width,2*o.height),this.ctx.restore()}drawInnerShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath();const u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),h=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(h.topLeft.x,h.topLeft.y),this.ctx.lineTo(h.topRight.x,h.topRight.y),this.ctx.lineTo(h.bottomRight.x,h.bottomRight.y),this.ctx.lineTo(h.bottomLeft.x,h.bottomLeft.y),this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const v=3*this.shadow.width/4,x=this.ctx.createLinearGradient(0,0,v,0);this.shadow.direction===0?(this.ctx.translate(-v,-100),x.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),x.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),x.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),x.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),x.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),x.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),x.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),x.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=x,this.ctx.fillRect(0,0,v,2*o.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class j{constructor(o,u,h){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=x=>{if(this.checkTarget(x.target)){const b=this.getMousePos(x.clientX,x.clientY);this.app.startUserTouch(b),x.preventDefault()}},this.onTouchStart=x=>{if(this.checkTarget(x.target)&&x.changedTouches.length>0){const b=x.changedTouches[0],P=this.getMousePos(b.clientX,b.clientY);this.touchPoint={point:P,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(P)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||x.preventDefault()}},this.onMouseUp=x=>{const b=this.getMousePos(x.clientX,x.clientY);this.app.userStop(b)},this.onMouseMove=x=>{const b=this.getMousePos(x.clientX,x.clientY);this.app.userMove(b,!1)},this.onTouchMove=x=>{if(x.changedTouches.length>0){const b=x.changedTouches[0],P=this.getMousePos(b.clientX,b.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-P.x)>10||this.app.getState()!=="read")&&x.cancelable&&this.app.userMove(P,!0),this.app.getState()!=="read"&&x.preventDefault()):this.app.userMove(P,!0)}},this.onTouchEnd=x=>{if(x.changedTouches.length>0){const b=x.changedTouches[0],P=this.getMousePos(b.clientX,b.clientY);let T=!1;if(this.touchPoint!==null){const F=P.x-this.touchPoint.point.x,W=Math.abs(P.y-this.touchPoint.point.y);Math.abs(F)>this.swipeDistance&&W<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(F>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),T=!0),this.touchPoint=null}this.app.userStop(P,T)}},this.parentElement=o,o.classList.add("stf__parent"),o.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=o.querySelector(".stf__wrapper"),this.app=u;const v=this.app.getSettings().usePortrait?1:2;o.style.minWidth=h.minWidth*v+"px",o.style.minHeight=h.minHeight+"px",h.size==="fixed"&&(o.style.minWidth=h.width*v+"px",o.style.minHeight=h.height+"px"),h.autoSize&&(o.style.width="100%",o.style.maxWidth=2*h.maxWidth+"px"),o.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=h.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(o){this.wrapper.classList.remove("--portrait","--landscape"),o==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(o,u){const h=this.distElement.getBoundingClientRect();return{x:o-h.left,y:u-h.top}}checkTarget(o){return!this.app.getSettings().clickEventForward||!["a","button"].includes(o.tagName.toLowerCase())}}class E extends j{constructor(o,u,h,v){super(o,u,h),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=o.querySelector(".stf__block"),this.items=v;for(const x of v)this.distElement.appendChild(x);this.setHandlers()}clear(){for(const o of this.items)this.parentElement.appendChild(o)}updateItems(o){this.removeHandlers(),this.distElement.innerHTML="";for(const u of o)this.distElement.appendChild(u);this.items=o,this.setHandlers()}update(){this.app.getRender().update()}}class _ extends j{constructor(o,u,h){super(o,u,h),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=o.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const o=getComputedStyle(this.canvas),u=parseInt(o.getPropertyValue("width"),10),h=parseInt(o.getPropertyValue("height"),10);this.canvas.width=u,this.canvas.height=h}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class m extends y{constructor(o,u,h){super(o,u),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=h,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const o=this.getRect(),u=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let h=(100-u)*(2.5*o.pageWidth)/100+20;h>o.pageWidth&&(h=o.pageWidth);let v=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${h}px;
            height: ${o.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*u/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${o.left+o.width/2}px;
            transform-origin: 0 0;
        `;v+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=v}drawHardOuterShadow(){const o=this.getRect();let u=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*o.pageWidth)/100+20;u>o.pageWidth&&(u=o.pageWidth);let h=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${u}px;
            height: ${o.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${o.left+o.width/2}px;
            transform-origin: 0 0;
        `;h+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=h}drawInnerShadow(){const o=this.getRect(),u=3*this.shadow.width/4,h=this.getDirection()===0?u:0,v=this.getDirection()===0?"to left":"to right",x=this.convertToGlobal(this.shadow.pos),b=this.shadow.angle+3*Math.PI/2,P=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let T="polygon( ";for(const W of P){let re=this.getDirection()===1?{x:-W.x+this.shadow.pos.x,y:W.y-this.shadow.pos.y}:{x:W.x-this.shadow.pos.x,y:W.y-this.shadow.pos.y};re=c.GetRotatedPoint(re,{x:h,y:100},b),T+=re.x+"px "+re.y+"px, "}T=T.slice(0,-2),T+=")";const F=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${u}px;
            height: ${2*o.height}px;
            background: linear-gradient(${v},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${h}px 100px;
            transform: translate3d(${x.x-h}px, ${x.y-100}px, 0) rotate(${b}rad);
            clip-path: ${T};
            -webkit-clip-path: ${T};
        `;this.innerShadow.style.cssText=F}drawOuterShadow(){const o=this.getRect(),u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),h=this.shadow.angle+3*Math.PI/2,v=this.getDirection()===1?this.shadow.width:0,x=this.getDirection()===0?"to right":"to left",b=[{x:0,y:0},{x:o.pageWidth,y:0},{x:o.pageWidth,y:o.height},{x:0,y:o.height}];let P="polygon( ";for(const F of b)if(F!==null){let W=this.getDirection()===1?{x:-F.x+this.shadow.pos.x,y:F.y-this.shadow.pos.y}:{x:F.x-this.shadow.pos.x,y:F.y-this.shadow.pos.y};W=c.GetRotatedPoint(W,{x:v,y:100},h),P+=W.x+"px "+W.y+"px, "}P=P.slice(0,-2),P+=")";const T=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*o.height}px;
            background: linear-gradient(${x}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${v}px 100px;
            transform: translate3d(${u.x-v}px, ${u.y-100}px, 0) rotate(${h}rad);
            clip-path: ${P};
            -webkit-clip-path: ${P};
        `;this.outerShadow.style.cssText=T}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const o=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(o))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const o of this.app.getPageCollection().getPages())o!==this.leftPage&&o!==this.rightPage&&o!==this.flippingPage&&o!==this.bottomPage&&(o.getElement().style.cssText="display: none"),o.getTemporaryCopy()!==this.flippingPage&&o.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class g{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(o){const u=this._default;if(Object.assign(u,o),u.size!=="stretch"&&u.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(u.width<=0||u.height<=0)throw new Error("Invalid width or height");if(u.flippingTime<=0)throw new Error("Invalid flipping time");return u.size==="stretch"?(u.minWidth<=0&&(u.minWidth=100),u.maxWidth<u.minWidth&&(u.maxWidth=2e3),u.minHeight<=0&&(u.minHeight=100),u.maxHeight<u.minHeight&&(u.maxHeight=2e3)):(u.minWidth=u.width,u.maxWidth=u.width,u.minHeight=u.height,u.maxHeight=u.height),u}}(function(p,o){o===void 0&&(o={});var u=o.insertAt;if(typeof document<"u"){var h=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");v.type="text/css",u==="top"&&h.firstChild?h.insertBefore(v,h.firstChild):h.appendChild(v),v.styleSheet?v.styleSheet.cssText=p:v.appendChild(document.createTextNode(p))}})(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`),n.PageFlip=class extends class{constructor(){this.events=new Map}on(p,o){return this.events.has(p)?this.events.get(p).push(o):this.events.set(p,[o]),this}off(p){this.events.delete(p)}trigger(p,o,u=null){if(this.events.has(p))for(const h of this.events.get(p))h({data:u,object:o})}}{constructor(p,o){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new g().getSettings(o),this.block=p}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(p){this.ui=new _(this.block,this,this.setting);const o=this.ui.getCanvas();this.render=new S(this,this.setting,o),this.flipController=new w(this.render,this),this.pages=new l(this,this.render,p),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(p){this.ui=new E(this.block,this,this.setting,p),this.render=new m(this,this.setting,this.ui.getDistElement()),this.flipController=new w(this.render,this),this.pages=new f(this,this.render,this.ui.getDistElement(),p),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(p){const o=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new l(this,this.render,p),this.pages.load(),this.pages.show(o),this.trigger("update",this,{page:o,mode:this.render.getOrientation()})}updateFromHtml(p){const o=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new f(this,this.render,this.ui.getDistElement(),p),this.pages.load(),this.ui.updateItems(p),this.render.reload(),this.pages.show(o),this.trigger("update",this,{page:o,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(p){this.pages.show(p)}flipNext(p="top"){this.flipController.flipNext(p)}flipPrev(p="top"){this.flipController.flipPrev(p)}flip(p,o="top"){this.flipController.flipToPage(p,o)}updateState(p){this.trigger("changeState",this,p)}updatePageIndex(p){this.trigger("flip",this,p)}updateOrientation(p){this.ui.setOrientationStyle(p),this.update(),this.trigger("changeOrientation",this,p)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(p){return this.pages.getPage(p)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(p){this.mousePosition=p,this.isUserTouch=!0,this.isUserMove=!1}userMove(p,o){this.isUserTouch||o||!this.setting.showPageCorners?this.isUserTouch&&c.GetDistanceBetweenTwoPoint(this.mousePosition,p)>5&&(this.isUserMove=!0,this.flipController.fold(p)):this.flipController.showCorner(p)}userStop(p,o=!1){this.isUserTouch&&(this.isUserTouch=!1,o||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(p)))}},Object.defineProperty(n,"__esModule",{value:!0})})})(Zs,Zs.exports);var Vh=Zs.exports;const Gh=Je.forwardRef((e,t)=>{const n=N.useRef(null),r=N.useRef([]),i=N.useRef(),[s,l]=N.useState([]);N.useImperativeHandle(t,()=>({pageFlip:()=>i.current}));const c=N.useCallback(()=>{i.current&&i.current.clear()},[]),d=N.useCallback(()=>{const f=i.current;f&&(f.off("flip"),f.off("changeOrientation"),f.off("changeState"),f.off("init"),f.off("update"))},[]);return N.useEffect(()=>{if(r.current=[],e.children){const f=Je.Children.map(e.children,k=>Je.cloneElement(k,{ref:w=>{w&&r.current.push(w)}}));(!e.renderOnlyPageLengthChange||s.length!==f.length)&&(f.length<s.length&&c(),l(f))}},[e.children]),N.useEffect(()=>{const f=()=>{const k=i.current;k&&(e.onFlip&&k.on("flip",w=>e.onFlip(w)),e.onChangeOrientation&&k.on("changeOrientation",w=>e.onChangeOrientation(w)),e.onChangeState&&k.on("changeState",w=>e.onChangeState(w)),e.onInit&&k.on("init",w=>e.onInit(w)),e.onUpdate&&k.on("update",w=>e.onUpdate(w)))};s.length>0&&r.current.length>0&&(d(),n.current&&!i.current&&(i.current=new Vh.PageFlip(n.current,e)),i.current.getFlipController()?i.current.updateFromHtml(r.current):i.current.loadFromHTML(r.current),f())},[s]),Je.createElement("div",{ref:n,className:e.className,style:e.style},s)}),Kh=Je.memo(Gh),Qh=[{type:"cover",kicker:"Königliche Mafia",title:"Das Auge der Mafia",text:"Chronik, Feinde, Personen und vertrauliche Einträge."},{type:"entry",kicker:"",title:"",content:[" "]},{type:"image",src:"SM9.png",caption:"",color:!0,imageMode:"fill"},{type:"person",kicker:"",title:"Rufino Fragortis",content:["Rufino Fragortis (Erdbeere), alias Erdbeere, ist Teil der berühmten Fragortis-Familie in 20. Generation.","- Erdbeere hat schwarze, stachelige Haare mit einem olivgrünen Stich, je nach Sonneneinstrahlung.","- Blutrote Augen.","- Längs seiner Handgelenke abwärts rot glühende Narben oberhalb seiner Venen.","- Er hat eine Vorliebe für Anzüge mit Westen und Messer: 2 blutrote Karambits, die er Bud und Lou nennt, ein Skalpellmesser namens Rosso Silenzio und Kunais an der Hose.","- Er besitzt ein aufgedrehtes, aber sanftes Gemüt.","- Eine unmenschlich gute Gabe fürs Kochen, Wissenschaft und ein ungesundes Interesse an Blut... und kleine Wutprobleme."]},{type:"image",src:"SM8.png",caption:"",color:!0,imageMode:"fill"},{type:"entry",kicker:"",title:"30. Januar 1900",content:["2 Jahre … es ist schon 2 Jahre her, dass Money, Erdbeere und ich Mottes Brüder und Teil der Adelsfamilie wurden, unsere Eltern starben 1898 bei einem großen Brand am Port Veccio. Das Militär hatte illegale Bomben im Ausland gekauft, um einen Vorteil gegen ihre Feinde zu haben, diese Spinner, die die bomben bauten, machten sie jedoch instabil und … den Rest kann man sich denken. Die übrigen Mitglieder unserer Familien waren zu beschäftigt, um sich um uns zu kümmern … oder wollten uns einfach nicht. Deswegen waren alle so dankbar, dass wir bei Vater bleiben durften, und wollten uns dafür revanchieren. Ein Teil seiner Mafia … das wäre das Größte …"]},{type:"image",src:"Zeichnung_von_Vater_1900.png",caption:""},{type:"entry",kicker:"",title:"5. Februar 1900",content:["Vater sagte uns, wir sollten anfangen, Tagebücher zu führen. Ich glaube, er meinte zwar eher, wir sollten nur aufschreiben, wen wir bestochen haben, statt unsere ganze Geschichte darein zu schreiben, aber ... Ich denke es könnte nützlich sein, alles zu dokumentieren.","","Es ist nun 6 Wochen her, seit wir den Weg unserer Familien gehen. Was für Erdbeere, Money, Motte und mich heißen würde: schuften bis zum Umfallen. Ich lernte das Schneidern, das Anpassen der Anzüge und das Einarbeiten von Falena-Seide, die Onkel Charon uns mit der Tristo Mietitore vorbeibrachte und das Allerwichtigste, das Geldwaschen..."]},{type:"image",src:"sartoria_bellucci_1900.png",caption:"",imageMode:"taped"},{type:"entry",kicker:"",title:"7. Februar",content:["Und noch eine Platzwunde, die ich an Erdbeeres Kopf nähen darf. 5 Männer!! Mit 5 Männern prügelte er sich. Ich kam erst dazu, als schon 3 am Boden lagen. Wenn es darum geht zu kämpfen... er ist 14 und diese Männer waren Soldaten... Wenn er kämpft, ist er ein anderer Mensch. Es ist, als würde er rot sehen. Von jetzt auf gleich ist er schneller, aggressiver und kräftiger als vorher. Als ich da so in der Gasse stand... es war, als würde ein Schatten mit einem unheilvollen Grinsen und dem Auge eines Monsters auf seinem Gesicht liegen... Motte ist zwar der Anführer unserer Truppe, aber ich glaube, auch nur, weil Erdbeere mehr am Kochen und Blut interessiert ist."]},{type:"image",src:"SM7.png",caption:"",color:!0,imageMode:"fill"},{type:"cover",kicker:"Noch lange nicht das",title:"Ende",text:""}],Zh="/KM_OS/",zt=e=>`${Zh}assets/${e}`,ea=Je.forwardRef(({children:e,className:t=""},n)=>a.jsx("div",{className:`book-page ${t}`,ref:n,children:a.jsx("div",{className:"book-page-inner",children:e})})),Yh=Je.forwardRef(({children:e},t)=>a.jsx("div",{className:"book-page book-cover",ref:t,"data-density":"hard",children:a.jsx("div",{className:"book-page-inner cover-inner",children:e})}));function Jh(e,t){var n;if(e.type==="cover")return a.jsx(Yh,{children:a.jsx("div",{className:"book-cover-image",children:a.jsx("img",{src:zt("Cover.png"),alt:"Codex Noir Cover"})})},t);if(e.type==="image"){const r=e.imageMode||"fade",i=e.tapeSrc||"tape.png";return a.jsxs(ea,{className:`image-page image-page-${r} ${e.color?"image-page-color":""}`,children:[a.jsxs("div",{className:"book-image-frame",children:[a.jsx("img",{className:"book-main-image",src:zt(e.src),alt:e.caption||"Buchbild"}),r==="taped"?a.jsxs(a.Fragment,{children:[a.jsx("img",{className:"book-tape book-tape-tl",src:zt(i),alt:""}),a.jsx("img",{className:"book-tape book-tape-tr",src:zt(i),alt:""}),a.jsx("img",{className:"book-tape book-tape-bl",src:zt(i),alt:""}),a.jsx("img",{className:"book-tape book-tape-br",src:zt(i),alt:""})]}):null]}),e.caption?a.jsx("p",{className:"mono image-caption",children:e.caption}):null]},t)}return a.jsxs(ea,{children:[a.jsx("p",{className:"book-kicker mono",children:e.kicker}),a.jsx("h2",{children:e.title}),e.list?a.jsx("ul",{children:e.list.map((r,i)=>a.jsx("li",{children:r},i))}):null,(n=e.content)==null?void 0:n.map((r,i)=>a.jsx("p",{children:r},i))]},t)}function Xh(){const[e,t]=N.useState(null),[n,r]=N.useState(""),[i,s]=N.useState(""),[l,c]=N.useState({type:"text",kicker:"",title:"",content:"",list:"",src:"SM1.png",caption:""}),d=()=>{t("login"),r(""),s("")},f=()=>{t(null),r(""),s("")},k=S=>{if(S.preventDefault(),n==="Feinde"){t("tool"),r(""),s("");return}s("Zugriff verweigert."),r("")},w=(S,j)=>{c(E=>({...E,[S]:j}))},y=N.useMemo(()=>{if(l.type==="image")return`{
  type: "image",
  src: ${JSON.stringify(l.src.trim()||"SM1.png")},
  caption: ${JSON.stringify(l.caption.trim())},
},`;const S=l.content.split(`
`).map(E=>E.trim()),j=l.list.split(`
`).map(E=>E.trim()).filter(Boolean);return`{
  type: ${JSON.stringify(l.type)},
  kicker: ${JSON.stringify(l.kicker.trim())},
  title: ${JSON.stringify(l.title.trim())},${j.length?`
  list: [
${j.map(E=>`    ${JSON.stringify(E)},`).join(`
`)}
  ],`:""}
  content: [
${S.map(E=>`    ${JSON.stringify(E)},`).join(`
`)}
  ],
},`},[l]);return a.jsxs("div",{className:"book-app",children:[a.jsx(Kh,{width:460,height:620,minWidth:300,maxWidth:540,minHeight:390,maxHeight:660,showCover:!0,maxShadowOpacity:.45,mobileScrollSupport:!1,className:"mafia-book",children:Qh.map((S,j)=>Jh(S,j))}),a.jsx("button",{type:"button",className:"book-writer-entry mono",onClick:d,children:"Writer Tool"}),e?a.jsx("div",{className:"book-modal-overlay",onClick:f,children:a.jsxs("div",{className:"book-writer-modal",onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"book-writer-head mono",children:[a.jsx("span",{children:"Das Auge der Mafia / Writer Tool"}),a.jsx("span",{children:e==="login"?"Passwort erforderlich":"Seitengenerator"}),a.jsx("button",{type:"button",onClick:f,children:"Schließen"})]}),e==="login"?a.jsxs("form",{className:"book-writer-login",onSubmit:k,children:[a.jsx("p",{className:"book-kicker mono",children:"Zugriff nur für Schreiber"}),a.jsx("h2",{children:"Passwort eingeben"}),a.jsx("input",{type:"password",value:n,onChange:S=>r(S.target.value),placeholder:"Passwort",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Tool öffnen"}),i?a.jsx("p",{className:"book-writer-error mono",children:i}):null]}):a.jsxs("div",{className:"book-writer-tool",children:[a.jsxs("div",{className:"book-writer-form",children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Seitentyp"}),a.jsxs("select",{value:l.type,onChange:S=>w("type",S.target.value),children:[a.jsx("option",{value:"text",children:"Textseite"}),a.jsx("option",{value:"entry",children:"Tagebuch-Eintrag"}),a.jsx("option",{value:"enemy",children:"Feind-Akte"}),a.jsx("option",{value:"person",children:"Personen-Eintrag"}),a.jsx("option",{value:"note",children:"Notiz"}),a.jsx("option",{value:"image",children:"Bildseite"})]})]}),l.type==="image"?a.jsxs(a.Fragment,{children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Bilddatei"}),a.jsx("input",{value:l.src,onChange:S=>w("src",S.target.value),placeholder:"SM1.png"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Bildunterschrift"}),a.jsx("input",{value:l.caption,onChange:S=>w("caption",S.target.value),placeholder:"Archivmaterial"})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Kicker"}),a.jsx("input",{value:l.kicker,onChange:S=>w("kicker",S.target.value),placeholder:"z.B. Feind-Akte"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Titel"}),a.jsx("input",{value:l.title,onChange:S=>w("title",S.target.value),placeholder:"Seitentitel"})]}),a.jsxs("label",{className:"wide-field",children:[a.jsx("span",{className:"mono",children:"Liste optional"}),a.jsx("textarea",{value:l.list,onChange:S=>w("list",S.target.value),placeholder:"Eine Listenzeile pro Zeile, z.B. Status: Aktiv"})]}),a.jsxs("label",{className:"wide-field content-field",children:[a.jsx("span",{className:"mono",children:"Text"}),a.jsx("textarea",{value:l.content,maxLength:650,onChange:S=>w("content",S.target.value),placeholder:"Max. 650 Zeichen. Jede neue Zeile = neuer Absatz."})]}),a.jsxs("p",{className:"book-char-counter mono",children:[l.content.length," / 650 Zeichen"]})]})]}),a.jsxs("div",{className:"book-writer-output",children:[a.jsxs("div",{className:"book-writer-output-head mono",children:[a.jsx("span",{children:"Code für buchData.js"}),a.jsxs("div",{className:"writer-actions",children:[a.jsx("button",{type:"button",onClick:()=>{var S;return(S=navigator.clipboard)==null?void 0:S.writeText(y)},children:"Kopieren"}),a.jsx("button",{type:"button",onClick:()=>window.open("https://forms.gle/WwtkBvYNc4Eoqo397","_blank"),children:"Artikel einreichen"})]})]}),a.jsx("pre",{children:y})]})]})]})}):null,a.jsx("style",{children:`
        .book-app {
        height: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;
        padding: 24px;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 35%),
            #050505;
        }

       .mafia-book {
  filter: none;
}

      .book-page {
  background: #1b1008;
  color: #21150d;
  border: 1px solid rgba(70, 38, 14, 0.45);
}

.book-page-inner {
  position: relative;
  height: 100%;
  padding: 34px 32px;
  display: grid;
  align-content: start;
  gap: 16px;
  overflow: hidden;

  background:
    linear-gradient(
      90deg,
      rgba(40, 21, 8, 0.22),
      transparent 16%,
      transparent 84%,
      rgba(40, 21, 8, 0.22)
    ),
    linear-gradient(
      180deg,
      rgba(255, 238, 190, 0.18),
      transparent 24%,
      rgba(54, 28, 10, 0.14)
    ),
    url("${zt("tagebuchseite.png")}") center / cover no-repeat;
}

.book-page-inner::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at center, transparent 58%, rgba(35, 18, 6, 0.28) 100%),
    repeating-linear-gradient(
      to bottom,
      rgba(60, 35, 12, 0.035),
      rgba(60, 35, 12, 0.035) 1px,
      transparent 1px,
      transparent 4px
    );
  mix-blend-mode: multiply;
  opacity: 0.75;
  z-index: 2;
}

.book-page-inner > * {
  position: relative;
  z-index: 1;
}

        .book-cover {
          background: #050505;
        }

      .cover-inner {
  padding: 0;
  margin: 0;
  border: 0;
  place-content: stretch;
  text-align: initial;
}

       .book-kicker {
  margin: 0;
  color: rgba(68, 39, 18, 0.72);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-size: 0.74rem;
}

        .book-page h1,
        .book-page h2 {
          margin: 0;
          text-transform: uppercase;
          line-height: 0.95;
        }

.book-page h1 {
  font-size: clamp(2.2rem, 4.6vw, 3.8rem);
  max-width: 100%;
  overflow-wrap: anywhere;
}

.book-page h2 {
  font-size: clamp(1.55rem, 3.2vw, 2.55rem);
  max-width: 100%;
  overflow-wrap: anywhere;
}

.book-page p,
.book-page li {
  margin: 0;
  line-height: 1.55;
  color: rgba(31, 20, 11, 0.86);
  font-size: 0.95rem;
  text-shadow: 0 0 0.5px rgba(30, 15, 5, 0.25);
}

        .book-page ul {
          margin: 0;
          padding-left: 20px;
          display: grid;
          gap: 8px;
        }

.image-page .book-page-inner {
  grid-template-rows: minmax(0, 1fr) auto;
}

/* Grund-Frame für alle Bildarten */
.book-image-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.book-main-image {
  display: block;
}

/* =========================
   MODE 1: FADE
   Bild verschmilzt leicht mit dem Papier
========================= */

.image-page-fade .book-page-inner {
  padding: 28px;
}

.image-page-fade .book-image-frame {
  -webkit-mask-image:
    linear-gradient(
      to right,
      transparent 0%,
      black 2.5%,
      black 97.5%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      transparent 0%,
      black 2.5%,
      black 97.5%,
      transparent 100%
    );
  -webkit-mask-composite: source-in;

  mask-image:
    linear-gradient(
      to right,
      transparent 0%,
      black 2.5%,
      black 97.5%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      transparent 0%,
      black 2.5%,
      black 97.5%,
      transparent 100%
    );
  mask-composite: intersect;
}

.image-page-fade .book-main-image {
  width: 100%;
  height: 100%;
  object-fit: contain;

  opacity: 0.94;
  mix-blend-mode: multiply;

  filter:
    sepia(0.22)
    saturate(0.88)
    contrast(1.08)
    brightness(0.88);
}

.image-page-color.image-page-fade .book-main-image {
  opacity: 0.96;

  filter:
    sepia(0.08)
    saturate(0.96)
    contrast(1.04)
    brightness(0.92);
}

/* =========================
   MODE 2: FILL
   Bild wird komplett auf die Buchseite gestreckt
========================= */

.image-page-fill .book-page-inner {
  position: relative;
  padding: 0;
  display: block;
  overflow: hidden;
}

.image-page-fill .book-page-inner::after {
  display: none;
}

.image-page-fill .book-image-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-page-fill .book-main-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  /* DAS ist der wichtige Unterschied */
  object-fit: fill;

  opacity: 1;
  mix-blend-mode: normal;
  filter: none;
}

/* =========================
   MODE 3: TAPED
   Bild liegt wie ein echtes eingeklebtes Foto auf dem Papier
========================= */

.image-page-taped .book-page-inner {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Frame ist jetzt NICHT mehr ganze Seite, sondern nur so groß wie das Bild */
.image-page-taped .book-image-frame {
  position: relative;
  width: fit-content;
  height: fit-content;
  max-width: 78%;
  max-height: 78%;
  overflow: visible;

  background: #d8c29b;
  border-radius: 2px;

  box-shadow:
    0 10px 20px rgba(34, 18, 7, 0.28),
    0 1px 0 rgba(255, 255, 255, 0.18) inset;

  transform: rotate(-0.7deg);
  line-height: 0;
}

.image-page-taped .book-main-image {
  display: block;

  width: auto;
  height: auto;
  max-width: 340px;
  max-height: 430px;

  object-fit: contain;

  position: relative;
  z-index: 1;

  opacity: 1;
  mix-blend-mode: normal;

  filter:
    sepia(0.03)
    saturate(1)
    contrast(1.03)
    brightness(0.98);
}

/* Tesafilm-PNG deutlich über dem Bild */
.book-tape {
  position: absolute;
  z-index: 20;
  width: 58px;
  height: auto;
  pointer-events: none;

  opacity: 0.6;
  filter: none !important;
  mix-blend-mode: normal;
}

.book-tape-tl {
  top: -16px;
  left: -18px;
  transform: rotate(-38deg);
}

.book-tape-tr {
  top: -16px;
  right: -18px;
  transform: rotate(38deg);
}

.book-tape-bl {
  bottom: -16px;
  left: -18px;
  transform: rotate(38deg);
}

.book-tape-br {
  bottom: -16px;
  right: -18px;
  transform: rotate(-38deg);
}

        .image-caption {
          margin: 0;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

                .book-writer-entry {
          position: absolute;
          right: 22px;
          bottom: 18px;
          z-index: 5;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: white;
          padding: 8px 12px;
          cursor: pointer;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 0.68rem;
        }

        .book-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0,0,0,0.76);
        }

        .book-writer-modal {
          width: min(1100px, 100%);
          height: min(86vh, 850px);
          display: grid;
          grid-template-rows: auto minmax(0, 1fr);
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(16,16,16,0.94);
          color: white;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
        }

        .book-writer-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.68);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .book-writer-head button,
        .book-writer-login button,
        .book-writer-output-head button {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: white;
          padding: 8px 12px;
          cursor: pointer;
        }

        .book-writer-login {
          display: grid;
          align-content: center;
          justify-items: start;
          gap: 14px;
          padding: 28px;
        }

        .book-writer-login h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 0.95;
          text-transform: uppercase;
        }

        .book-writer-error {
          color: #f0b2b2;
        }

        .book-writer-login input,
        .book-writer-form input,
        .book-writer-form textarea,
        .book-writer-form select {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          background: rgba(0,0,0,0.34);
          color: white;
          padding: 11px 12px;
          outline: none;
          font: inherit;
        }

        .book-writer-tool {
          min-height: 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.85fr);
          gap: 18px;
          padding: 18px;
          overflow: hidden;
        }

        .book-writer-form {
          min-height: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          overflow: auto;
          padding-right: 4px;
        }

        .book-writer-form label {
          display: grid;
          gap: 7px;
          color: rgba(255,255,255,0.76);
        }

        .book-writer-form label span,
        .book-char-counter {
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.48);
        }

        .wide-field {
          grid-column: 1 / -1;
        }

        .book-writer-form textarea {
          min-height: 82px;
          resize: vertical;
        }

        .content-field textarea {
          min-height: 180px;
        }

        .book-char-counter {
          margin: 0;
          grid-column: 1 / -1;
        }

        .book-writer-output {
          min-height: 0;
          display: grid;
          grid-template-rows: auto minmax(0, 1fr);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(0,0,0,0.28);
        }

        .book-writer-output-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.58);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .book-writer-output pre {
          margin: 0;
          padding: 14px;
          overflow: auto;
          color: rgba(255,255,255,0.86);
          font-size: 0.82rem;
          line-height: 1.55;
          white-space: pre-wrap;
        }

        .writer-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.writer-actions button {
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: white;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.68rem;
}

.codex-sub {
  margin: 0;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.book-cover-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.book-cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: none;
}
          
      `})]})}const qh="/KM_OS/",qi=e=>`${qh}assets/${e}`,es={id:"root",name:"Das Archiv",type:"folder",children:[{id:"akten",name:"Akten",type:"folder",date:"03.05.1923",children:[{id:"tod-von-alessio",name:"Tod von Alessio Bellucci",type:"folder",date:"01.05.1923",children:[{id:"zeitung-alessio",name:"Vergangene Ära.article",type:"article",date:"01.05.1923",articleId:"Alessio Falena Bellucci"},{id:"ermittlungsakte-alessio",name:"Ermittlungsakte.txt",type:"text",date:"01.01.1913",content:["Alessio Bellucci starb während einer Polizeirazzia in Castello Vecchio.","Bei der Schießerei kamen mehrere Personen ums Leben.","","Die Polizei beschlagnahmte mehr als 26 Kilogramm Crystal Moth.","","Der Verbleib mehrerer Angehöriger der Mafia Reale ist weiterhin unbekannt."]}]},{id:"Erste Entführung",name:"Erste Entführung",type:"folder",date:"30.11.1922",children:[{id:"Mr. Quack",name:"MrQuack.png",type:"image",date:"30.11.1922",image:qi("MrQuack.png")}]},{id:"port-vecchia",name:"Port Vecchia Vorfall",type:"folder",date:"03.05.1923",children:[{id:"port-bericht",name:"Bericht.txt",type:"text",date:"03.05.1923",content:["Am Hafen von Port Vecchia wurden nicht deklarierte Behälter entdeckt.","Die Fracht stammte von der Tristo Mietitore.","Weitere Untersuchungen laufen."]},{id:"port-foto",name:"Beweisfoto.png",type:"image",date:"03.05.1923",image:qi("Port Vecchia.png")},{id:"port-zeitung",name:"Schmuggelvorrwürfe.article",type:"article",date:"03.05.1923",articleId:"1"}]}]},{id:"personen",name:"Personen",type:"folder",date:"03.05.1923",children:[{id:"charon",name:"Charon il traghettatore",type:"folder",date:"03.05.1923",children:[{id:"charon-notiz",name:"Interne Notiz.txt",type:"text",date:"03.05.1923",content:["Captain der Tristo Mietitore.","Wurde nach dem Vorfall am Hafen zur Polizeistation gebracht.","","Die Aussagen sind unvollständig.","Ein Teil des Protokolls fehlt."],secret:{password:"traghettatore",content:["VERHÖRPROTOKOLL – FRAGMENT","","Er hat nicht geleugnet.","Er hat nur gelächelt.","",'"Ihr sucht am falschen Ort."',"","Auf Nachfrage schwieg er.","","Bevor er abgeführt wurde, sagte er:","",'"Das, was ihr sucht, wurde nie hier gelagert."',"",'"Wenn ihr verstehen wollt, was wirklich geschah, kehrt zum Ursprung zurück und klopft 3 mal freundlich an."',"","PORT VECCHIA"]}}]},{id:"alessio-falena-bellucci-ii",name:"Alessio Falena Bellucci II",type:"folder",date:"01.01.1863",children:[{id:"alessio-personenakte",name:"Personenakte.txt",type:"text",date:"01.05.1923",content:["Geboren 1863 im Schloss Fortezza delle Falene.","Oberhaupt der Mafia Reale.","Auch bekannt als Padre della Falena.","","Starb 1913 während einer Schießerei mit der Polizei bei einer Razzia in Castello Vecchio."]}]},{id:"il-principe-delle-falene",name:"Il Principe dell Falene",type:"folder",date:"01.05.1923",children:[{id:"Nachfolger",name:"Nachfolger?",type:"text",date:"01.05.1923",content:["Mysteriöser Nachfolger von Alessio Bellucci.","In Unterweltkreisen nur als Il Principe delle Falene bekannt.","Die Polizei sucht weiterhin nach Hinweisen auf seine Identität."]}]}]},{id:"orte",name:"Orte",type:"folder",date:"03.05.1923",children:[{id:"porto-vecchia",name:"Port Vecchia",type:"text",date:"03.05.1923",content:["Hafenstadt mit hoher Handelsaktivität.","Aktuell im Fokus interner Ermittlungen."]},{id:"fortezza-delle-falene",name:"Fortezza delle Falene",type:"text",date:"01.01.1863",content:["Schloss und Ursprung der Adelsfamilie Le Falene degli Inferi.","Geburtsort von Alessio Falena Bellucci II.","","Historisch mit königlicher Macht, politischem Einfluss und der Unterwelt verbunden."]},{id:"castello-vecchio",name:"Castello Vecchio",type:"text",date:"01.05.1913",content:["Ort der groß angelegten Razzia gegen die Mafia Reale.","Bei der Schießerei starb Alessio Bellucci.","Mehr als 26 Kilogramm Crystal Moth wurden beschlagnahmt."]},{id:"sartoria-bellucci",name:"Sartoria Bellucci",type:"folder",date:"05.02.1900",children:[{id:"sartoria-bild",name:"Sartoria_Bellucci-1900.png",type:"image",date:"05.02.1900",image:qi("sartoria_bellucci_1900.png")},{id:"sartoria-notiz",name:"Werkstattnotiz.txt",type:"text",date:"05.02.1900",content:["Frühe Schneiderei der Familie Bellucci.","Hier wurden Anzüge angepasst und Falena-Seide verarbeitet.","","Laut Tagebuchauszügen begann hier ein Teil der frühen Familiengeschäfte."]}]}]},{id:"beweise",name:"Beweise",type:"folder",date:"03.05.1923",children:[{id:"phiolen",name:"Unbekannte Phiolen.txt",type:"text",date:"03051923",content:["Mehrere Glasbehälter unbekannter Herkunft.","Inhalt, Ursprung und Zweck sind ungeklärt."],secret:{password:"03051923",content:["ZUSATZBERICHT FREIGEGEBEN","","Die Phiolen waren nicht für den Hafen bestimmt.","Der eigentliche Empfänger wurde aus allen Registern entfernt.","","Weitere Hinweise befinden sich nicht im Bericht.","Sie wurden in der Zeitung versteckt.","","Suche den Artikel zum Hafen von Port Vecchia.","","Manchmal lügen Worte.","Das Bild hingegen… vergisst nichts."]}},{id:"crystal-moth-beschlagnahmung",name:"Crystal_Moth-Beschlagnahmung.txt",type:"text",date:"01.01.1913",content:["Bei der Razzia in Castello Vecchio wurden laut Bericht mehr als 26 Kilogramm Crystal Moth beschlagnahmt.","Der Fund steht im Zusammenhang mit dem Tod von Alessio Bellucci.","","Die genaue Herkunft der Substanz ist weiterhin ungeklärt."]}]}]};function ep(e){return e.type==="folder"?"▣":e.type==="image"?"▧":e.type==="article"?"▤":e.type==="text"?"▥":"◇"}function tp(e){return e.type==="folder"?"Ordner":e.type==="image"?"Bilddatei":e.type==="article"?"Zeitungsausschnitt":e.type==="text"?"Textdatei":"Datei"}function np(){const[e,t]=N.useState([es]),[n,r]=N.useState(null),[i,s]=N.useState("name"),[l,c]=N.useState(null),[d,f]=N.useState(!1),[k,w]=N.useState(""),[y,S]=N.useState(!1),[j,E]=N.useState(0),[_,m]=N.useState(!1),[g,p]=N.useState(!1),[o,u]=N.useState(!1),h=(l==null?void 0:l.id)==="porto-vecchia",v="/KM_OS/assets/gzui.png",x=e[e.length-1];function b(L){if(!L)return 0;const[O,z,M]=L.split(".").map(Number);return!O||!z||!M?0:new Date(M,z-1,O).getTime()}const P=N.useMemo(()=>[...x.children||[]].sort((O,z)=>{if(i==="date")return b(O.date)-b(z.date);const M=String(O[i]||"").toLowerCase(),D=String(z[i]||"").toLowerCase();return M.localeCompare(D)}),[x,i]);function T(){!h||_||g||E(L=>{const O=L+1;return O>=3&&(m(!0),p(!0),setTimeout(()=>{p(!1),u(!0)},1400)),O})}function F(L){if(L.type==="folder"){t(O=>[...O,L]),r(null),c(null),f(!1),w(""),S(!1);return}r(L),c(L),f(!1),w(""),S(!1),E(0),m(!1),p(!1),u(!1)}function W(L){t(O=>O.slice(0,L+1)),r(null)}function re(){e.length<=1||(t(L=>L.slice(0,-1)),r(null))}const ie=(n==null?void 0:n.type)==="article"?ci.find(L=>L.id===n.articleId):null;return a.jsxs("div",{className:"archive-explorer",children:[a.jsxs("aside",{className:"archive-tree",children:[a.jsx("div",{className:"archive-tree-title mono",children:"ARCHIVSTRUKTUR"}),es.children.map(L=>a.jsxs("button",{type:"button",className:`archive-tree-item ${x.id===L.id?"active":""}`,onClick:()=>{t([es,L]),r(null)},children:[a.jsx("span",{children:"▣"}),L.name]},L.id))]}),a.jsxs("main",{className:"archive-main",children:[a.jsxs("header",{className:"archive-toolbar",children:[a.jsx("button",{type:"button",onClick:re,disabled:e.length<=1,children:"← Zurück"}),a.jsx("div",{className:"archive-breadcrumb mono",children:e.map((L,O)=>a.jsxs(Je.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>W(O),children:L.name}),O<e.length-1?a.jsx("span",{children:"/"}):null]},L.id))}),a.jsxs("select",{value:i,onChange:L=>s(L.target.value),children:[a.jsx("option",{value:"name",children:"Sortieren: Name"}),a.jsx("option",{value:"type",children:"Sortieren: Typ"}),a.jsx("option",{value:"date",children:"Sortieren: Datum"})]})]}),a.jsxs("section",{className:"archive-content",children:[a.jsxs("div",{className:"archive-list",children:[a.jsxs("div",{className:"archive-list-head mono",children:[a.jsx("span",{children:"Name"}),a.jsx("span",{children:"Typ"}),a.jsx("span",{children:"Datum"})]}),P.map(L=>a.jsxs("button",{type:"button",className:`archive-row ${(n==null?void 0:n.id)===L.id?"active":""}`,onClick:()=>r(L),onDoubleClick:()=>F(L),children:[a.jsxs("span",{className:"archive-name",children:[a.jsx("span",{children:ep(L)}),L.name]}),a.jsx("span",{children:tp(L)}),a.jsx("span",{children:L.date||"—"})]},L.id))]}),a.jsx("aside",{className:"archive-preview",children:n?n.type==="text"?a.jsxs("div",{className:"archive-paper",children:[a.jsx("p",{className:"mono",children:"TEXTDATEI"}),a.jsx("h2",{children:n.name}),n.content.map((L,O)=>a.jsx("p",{children:L},O))]}):n.type==="image"?a.jsxs("div",{className:"archive-paper",children:[a.jsx("p",{className:"mono",children:"BILDDATEI"}),a.jsx("h2",{children:n.name}),a.jsx("img",{src:n.image,alt:n.name})]}):n.type==="article"&&ie?a.jsxs("div",{className:"archive-paper",children:[a.jsx("p",{className:"mono",children:"ZEITUNGSAUSSCHNITT"}),a.jsx("h2",{children:ie.title}),a.jsxs("small",{children:[ie.date," · ",ie.category]}),ie.image?a.jsx("img",{src:ie.image,alt:ie.title}):null,ie.content.map((L,O)=>a.jsx("p",{children:L},O))]}):a.jsx("div",{className:"archive-empty mono",children:"Keine Vorschau verfügbar."}):a.jsx("div",{className:"archive-empty mono",children:"Datei auswählen, um Vorschau zu öffnen."})}),l?a.jsx("div",{className:"archive-file-modal",children:a.jsxs("div",{className:"archive-file-window",children:[a.jsxs("div",{className:"archive-file-window-head mono",children:[a.jsx("span",{children:l.name}),a.jsx("button",{type:"button",onClick:()=>c(null),children:"×"})]}),a.jsx("div",{className:"archive-file-window-body",children:l.type==="text"?a.jsxs("div",{className:"archive-paper archive-open-text",children:[a.jsx("p",{className:"mono",children:"GEÖFFNETE TEXTDATEI"}),a.jsx("h2",{children:h?a.jsx("span",{className:"port-trigger",onClick:T,children:l.name}):l.name}),l.content.map((L,O)=>a.jsx("p",{children:L},O)),_&&a.jsxs("div",{className:"port-secret",children:[g&&a.jsx("div",{className:"port-loading",children:"Daten werden geladen..."}),o&&a.jsxs("div",{className:"port-reveal",children:[a.jsx("a",{href:v,download:"Mafia-Hintergrund.png",children:a.jsx("img",{src:v,alt:"Freigeschaltetes Hintergrundbild",style:{cursor:"pointer"}})}),"        ",a.jsx("p",{className:"mono",children:"ZUGRIFF GEWÄHRT – KLICK ZUM SICHERN"})]})]}),l.secret&&d!==!0&&a.jsx("div",{className:"secret-access",children:a.jsx("button",{type:"button",className:"secret-button",onClick:()=>{f("input"),w(""),S(!1)},children:"Versiegelten Zusatzbericht öffnen"})}),l.secret&&d==="input"&&a.jsxs("div",{className:"secret-box",children:[a.jsx("input",{type:"password",placeholder:"Zugangscode",value:k,onChange:L=>w(L.target.value)}),a.jsx("button",{type:"button",onClick:()=>{k===l.secret.password?(f(!0),S(!1)):S(!0)},children:"Bestätigen"}),y?a.jsx("p",{className:"secret-error",children:"ZUGRIFF VERWEIGERT"}):null]}),l.secret&&d===!0&&a.jsx("div",{className:"secret-content",children:l.secret.content.map((L,O)=>L===""?a.jsx("div",{className:"article-empty-line"},O):a.jsx("p",{children:L},O))})]}):l.type==="image"?a.jsxs("div",{className:"archive-image-viewer",children:[a.jsx("div",{className:"archive-image-viewer-head mono",children:"GEÖFFNETE BILDDATEI"}),a.jsx("h2",{children:l.name}),a.jsx("div",{className:"archive-image-stage",children:a.jsx("img",{src:l.image,alt:l.name})})]}):l.type==="article"?(()=>{const L=ci.find(O=>O.id===l.articleId);return L?a.jsx("div",{className:"archive-article-window",children:a.jsxs("div",{className:"article-modal noir-card",children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:L.category}),a.jsx("span",{children:L.date})]}),a.jsxs("div",{className:"article-modal-body",children:[a.jsx("div",{className:"article-modal-image noir-image",children:a.jsx("img",{src:L.image,alt:L.title})}),a.jsxs("div",{className:"article-modal-text",children:[a.jsx("h2",{children:L.title}),a.jsx("p",{className:"article-lead",children:L.excerpt}),a.jsx("div",{className:"article-paragraphs",children:L.content.map((O,z)=>O===""?a.jsx("div",{className:"article-empty-line"},z):a.jsx("p",{children:O},z))})]})]})]})}):a.jsx("div",{className:"archive-empty mono",children:"Zeitungsausschnitt nicht gefunden."})})():a.jsx("div",{className:"archive-empty mono",children:"Keine Vorschau verfügbar."})})]})}):null]})]})]})}const rp="https://discord.gg/FYKwWRSPmHm";function ip(){const[e,t]=N.useState(""),[n,r]=N.useState(!1),[i,s]=N.useState(!1),[l,c]=N.useState(0),[d,f]=N.useState(""),k=["Schattenleitung wird geöffnet ...","Familienkanal wird gesucht ...","Verbindung zum Netzwerk wird aufgebaut ...","Zugangspunkt bestätigt ...","Verbindung stabil."],w=y=>{y.preventDefault(),s(!0)};return N.useEffect(()=>{if(!i)return;if(l>=k.length){const S=window.setTimeout(()=>{r(!0),s(!1)},1500);return()=>window.clearTimeout(S)}const y=window.setTimeout(()=>{c(S=>S+1)},1700);return()=>window.clearTimeout(y)},[i,l,k.length]),n?a.jsxs("div",{className:"network-app",children:[a.jsx("div",{className:"network-grid-bg"}),a.jsxs("div",{className:"network-panel",children:[a.jsx("p",{className:"network-kicker mono",children:"PRIVATE FAMILY NETWORK"}),a.jsx("h1",{children:"Verbindung hergestellt"}),a.jsx("p",{className:"network-status mono",children:"STATUS: VERBUNDEN"}),a.jsx("p",{className:"network-text",children:"Die Leitung steht. Der Kreis der Familie ist geöffnet. Tauche tiefer ein — aber vergiss nie: Wer einmal eintritt, wird gesehen."}),a.jsx("a",{className:"network-discord-button mono",href:rp,target:"_blank",rel:"noreferrer",children:"DEM NETZWERK BEITRETEN"})]})]}):i?a.jsxs("div",{className:"network-app",children:[a.jsx("div",{className:"network-grid-bg"}),a.jsxs("div",{className:"network-panel",children:[a.jsx("p",{className:"network-kicker mono",children:"NETZWERKPROTOKOLL"}),a.jsx("h1",{children:"Verbindung wird aufgebaut"}),a.jsxs("div",{className:"network-loader",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("div",{className:"network-lines mono",children:[k.slice(0,l).map(y=>a.jsxs("p",{children:["> ",y]},y)),a.jsx("p",{className:"network-blink",children:"> _"})]})]})]}):a.jsxs("div",{className:"network-app",children:[a.jsx("div",{className:"network-grid-bg"}),a.jsxs("div",{className:"network-panel",children:[a.jsx("p",{className:"network-kicker mono",children:"ZUGANG GESPERRT"}),a.jsx("h1",{children:"Das Netzwerk"}),a.jsx("p",{className:"network-text",children:"Dieser Bereich ist noch nicht für die Öffentlichkeit bestimmt. Nur bestätigte Mitglieder der Familie dürfen die Verbindung öffnen."}),a.jsxs("form",{className:"network-login",onSubmit:w,children:[a.jsx("button",{type:"submit",children:"Verbindung öffnen"}),d?a.jsx("p",{className:"network-error mono",children:d}):null]})]})]})}function sp(){return a.jsx("div",{className:"fragment-app",children:a.jsx("div",{className:"fragment-panel",children:a.jsx("pre",{className:"fragment-log",children:`[ SYSTEMPROTOKOLL // FRAGMENT 6 ]

FEHLER, FEHLER

DATEI VERSCHOBEN ODER NICHT AUFFINDBAR

...
...
...
...
...

I..i...I....I....I....I Ich habe nicht viel Zeit.
Sucht die zeitlose Datei.....
Sucht den Beweis.... Sucht den Zugang

...
...
...
...

SYSTEM EINGRIFF BLOCKIERT

BITTE VERLASSEN SIE DIESE APPLIKATION`})})})}const op="Familia",lp="Colore",ap="/KM_OS/",ct=e=>`${ap}assets/${e}`,up="https://www.youtube.com/embed/SnIAyG4s03A?autoplay=1&loop=1&playlist=SnIAyG4s03A&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1",ta=[{kicker:"Objekt I",title:"The Black Ledger",text:"Berichte, Schlagzeilen und interne Geschichten der Mafia. Später soll sich dieser Bereich wie eine echte Zeitung über die Seite legen.",image:ct("TBL.png")},{kicker:"Objekt II",title:"Das Auge der Mafia",text:"Ein aufschlagbares Werk voller Lore, Feinde, Namen und Geschichte. Kein normaler Infobereich, sondern ein richtiges Mafia-Nachschlagewerk.",image:ct("DADM.png")},{kicker:"Objekt III",title:"Das Archiv",text:"Akten, Hinweise und vertrauliche Inhalte. Ein Ort für das, was nicht offen auf dem Tisch liegen sollte.",image:ct("DA.png")},{kicker:"Objekt IV",title:"Königliche AI Songs",text:"Ein eigener Zugang zu allem, was mit den AI-Songs und weiteren Projekten der Familie verbunden ist.",image:ct("KAIS.png")},{kicker:"Objekt V",title:"Das Netzwerk",text:"Ein Treffpunnkt der Mafia",image:ct("DN.png")},{kicker:"Objekt VI",title:"Fragment",text:"Fragment",image:ct("F.png")}],ts=["[0001] Initialisiere Schwarzweiß-Protokoll ...","[0002] Lade Noir-Oberfläche ...","[0003] Prüfe Röhrenmonitor-Signal ...","[0004] Aktiviere Filmkorn-Simulation ...","[0005] Verbinde Terminal mit interner Leitung ...","[0006] Suche nach verschlüsselten Familienakten ...","[0007] Aktenarchiv A gefunden ...","[0008] Aktenarchiv B gefunden ...","[0009] Aktenarchiv C gefunden ...","[0010] Lade geheime Zugangsdaten ...","[0011] Prüfe Schattenkanal ...","[0012] Aktiviere Jazz-Frequenz 88.4 ...","[0013] Synchronisiere Mitternachtsprotokolle ...","[0014] Lese Kontakte aus Unterwelt-Verzeichnis ...","[0015] Bestätige Integrität der Maschine ...","[0016] Rekonstruiere beschädigte Bänder ...","[0017] Entschlüssele Kameraarchiv ...","[0018] Öffne interne Zugangsschleuse ...","[0019] Prüfe Nebelgenerator ...","[0020] Analysiere Schreibmaschinenkanal ...","[0021] Verbinde mit Hauptsaal ...","[0022] Verbinde mit Hinterzimmer ...","[0023] Verbinde mit Dachbüro ...","[0024] Lade Stadtplan 1940 ...","[0025] Überprüfe Passwortmodul ..."],cp=[140,220,180,360,170,260,120,120,280,340,150,310,180,210,390,130,320,170,410,140,260,145,155,380,210];function dp({onStart:e}){return a.jsxs("div",{className:"start-screen film-grain",children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"start-center",children:[a.jsx("img",{src:ct("logo-sw.png"),alt:"Mafia Logo",className:"start-logo"}),a.jsx("h1",{children:"KÖNIGLICHE MAFIA"}),a.jsx("button",{onClick:e,className:"start-button mono",children:"SYSTEM STARTEN"})]})]})}function hp({onUnlock:e}){const[t,n]=N.useState(!1),[r,i]=N.useState(""),[s,l]=N.useState(""),[c,d]=N.useState(()=>new Date),[f,k]=N.useState(0),[w,y]=N.useState(0),[S,j]=N.useState(!1);N.useEffect(()=>{let m=!1,g,p;const o=[],u=window.setInterval(()=>{d(new Date)},1e3),h=x=>{if(m)return;if(x>=ts.length){g=window.setTimeout(()=>{m||n(!0)},900);return}k(x+1);const b=cp[x]??220;g=window.setTimeout(()=>h(x+1),b)},v=()=>{if(m)return;const x=Math.random()>.72?2:1;y(x);const b=window.setTimeout(()=>{m||y(0)},x===2?120:70);o.push(b),p=window.setTimeout(v,900+Math.random()*2400)};return h(0),p=window.setTimeout(v,1200),()=>{m=!0,window.clearTimeout(g),window.clearTimeout(p),window.clearInterval(u),o.forEach(x=>window.clearTimeout(x))}},[]);const E=N.useMemo(()=>c.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),[c]),_=m=>{if(m.preventDefault(),r===op){l(""),j(!0),window.setTimeout(()=>{e()},1600);return}l("Zugriff verweigert. Falsches Passwort."),i("")};return a.jsxs("div",{className:`boot-screen film-grain flicker-${w}`,children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"boot-frame",children:[a.jsxs("div",{className:"boot-header mono",children:[a.jsx("span",{children:"KÖNIGLICHE MAFIA TERMINAL"}),a.jsx("span",{children:E})]}),t?a.jsxs("div",{className:"login-panel",children:[a.jsxs("div",{children:[a.jsx("p",{className:"panel-kicker mono",children:"Authentifizierung erforderlich"}),a.jsx("h1",{children:"Passwort eingeben"}),a.jsx("p",{className:"panel-text",children:"Dieses System ist nur für Mitglieder der Familie bestimmt. Bitte authentifizieren, um die Hauptseite zu betreten."})]}),S?a.jsxs("div",{className:"password-check mono",children:[a.jsx("p",{children:"Passwort wird überprüft"}),a.jsx("span",{className:"loading-dots",children:"..."})]}):a.jsxs("form",{onSubmit:_,className:"login-form",children:[a.jsx("label",{className:"mono",htmlFor:"password",children:"PASSWORT"}),a.jsx("input",{id:"password",type:"password",value:r,onChange:m=>i(m.target.value),placeholder:"••••",autoFocus:!0}),a.jsx("button",{type:"submit",children:"System entsperren"}),s?a.jsx("p",{className:"error-text mono",children:s}):null]})]}):a.jsxs("div",{className:"boot-sequence mono","aria-live":"polite",children:[ts.slice(0,f).map(m=>a.jsxs("p",{className:"boot-line visible",children:["> ",m]},m)),a.jsxs("p",{className:`boot-line final-line ${f>=ts.length?"visible blink":"pending"}`,children:["> Zugriff wird vorbereitet ...",a.jsx("span",{className:"cursor",children:"_"})]})]})]})]})}function pp({onComplete:e}){const[t,n]=N.useState("logo"),[r,i]=N.useState(""),[s,l]=N.useState(""),[c,d]=N.useState(""),[f,k]=N.useState(0);return N.useEffect(()=>{const w=window.setTimeout(()=>{n("success")},2200);return()=>{window.clearTimeout(w)}},[]),N.useEffect(()=>{if(t!=="success")return;const w=["SYSTEMSTATUS","ZUGANG GEWÄHRT","WILLKOMMEN IN DER FAMILIE"];let y=0,S=0,j="",E,_,m;const g=[i,l,d],p=()=>{const o=w[y];if(S<o.length){j+=o[S],g[y](j),S+=1,E=window.setTimeout(p,55);return}_=window.setTimeout(()=>{y+=1,S=0,j="",k(y),y<w.length?p():m=window.setTimeout(()=>{n("fadeout"),window.setTimeout(()=>{e()},700)},900)},450)};return k(0),p(),()=>{window.clearTimeout(E),window.clearTimeout(_),window.clearTimeout(m)}},[t,e]),a.jsxs("div",{className:`intro-transition transition-${t}`,children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"transition-center",children:[t==="logo"&&a.jsxs(a.Fragment,{children:[a.jsx("img",{src:ct("logo-sw.png"),alt:"Mafia Logo",className:"transition-logo"}),a.jsx("p",{className:"mono transition-text",children:"KÖNIGLICHE MAFIA"}),a.jsx("span",{className:"mono transition-subtext",children:"Identität wird geladen ..."})]}),(t==="success"||t==="fadeout")&&a.jsxs("div",{className:"typewriter-block mono",children:[a.jsxs("p",{className:"type-line",children:[r,f===0&&t==="success"?a.jsx("span",{className:"type-cursor",children:"_"}):null]}),a.jsxs("p",{className:"type-line",children:[s,f===1&&t==="success"?a.jsx("span",{className:"type-cursor",children:"_"}):null]}),a.jsxs("p",{className:"type-line",children:[c,f===2&&t==="success"?a.jsx("span",{className:"type-cursor",children:"_"}):null]})]})]})]})}const na=["[RGB-0001] Monochrom-Treiber wird entladen ...","[RGB-0002] Farbspeicher wird initialisiert ...","[RGB-0003] 16-Bit-Palette erkannt ...","[RGB-0004] Rotkanal stabil ...","[RGB-0005] Grünkanal stabil ...","[RGB-0006] Blaukanal stabil ...","[RGB-0007] Alte Röhrenmaske wird kalibriert ...","[RGB-0008] Grafische Oberfläche wird neu aufgebaut ...","[RGB-0009] Farbsystem wird freigegeben ...","[RGB-0010] KÖNIGLICHE MAFIA COLOR OS bereit."],fp=[260,320,240,180,180,180,360,420,300,500];function gp({onComplete:e}){const[t,n]=N.useState(0),[r,i]=N.useState(!1);return N.useEffect(()=>{let s=!1,l;const c=d=>{if(!s){if(d>=na.length){i(!0),l=window.setTimeout(()=>{s||e()},1400);return}n(d+1),l=window.setTimeout(()=>c(d+1),fp[d]??260)}};return c(0),()=>{s=!0,window.clearTimeout(l)}},[e]),a.jsxs("div",{className:"color-boot-screen",children:[a.jsx("div",{className:"color-boot-grid"}),a.jsxs("div",{className:"color-boot-panel mono",children:[a.jsxs("div",{className:"color-boot-head",children:[a.jsx("span",{children:"KM_COLOR OS"}),a.jsx("span",{children:"FIRST COLOR BOOT"})]}),a.jsxs("div",{className:"color-boot-logo",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("div",{className:"color-boot-lines",children:[na.slice(0,t).map(s=>a.jsxs("p",{children:["> ",s]},s)),r?a.jsxs("p",{className:"color-boot-ready",children:["> SYSTEM WIRD IN FARBE GESTARTET ",a.jsx("span",{children:"_"})]}):a.jsx("p",{className:"color-boot-cursor",children:"> _"})]})]})]})}function mp({onComplete:e}){return N.useEffect(()=>{const t=window.setTimeout(()=>{e()},2600);return()=>window.clearTimeout(t)},[e]),a.jsxs("div",{className:"logout-transition film-grain",children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"logout-center mono",children:[a.jsx("p",{children:"VERBINDUNG WIRD GETRENNT"}),a.jsx("h1",{children:"ABMELDUNG"}),a.jsx("span",{className:"loading-dots",children:"..."})]})]})}function xp({audioStarted:e,forceMuted:t=!1}){const n=N.useRef(null),r=N.useRef(null),[i,s]=N.useState(!1),[l,c]=N.useState(70),[d,f]=N.useState(!1),k=(w,y=[])=>{var j;const S=(j=n.current)==null?void 0:j.contentWindow;S&&S.postMessage(JSON.stringify({event:"command",func:w,args:y}),"*")};return N.useEffect(()=>{if(!(!e||!d))return window.clearTimeout(r.current),r.current=window.setTimeout(()=>{k(t||i?"mute":"unMute"),k("setVolume",[l]),k("playVideo")},300),()=>{window.clearTimeout(r.current)}},[e,d,i,l,t]),a.jsxs(a.Fragment,{children:[a.jsx("iframe",{ref:n,title:"Mafia Jazz Audio",src:up,allow:"autoplay",className:"yt-audio-frame",onLoad:()=>f(!0)}),a.jsx("button",{className:"audio-toggle mono",onClick:()=>s(w=>!w),title:"Audio umschalten",children:i?"🔇":"🔊"})]})}function vp({onUnlock:e,isColorMode:t}){const[n,r]=N.useState(!1),[i,s]=N.useState(""),[l,c]=N.useState(""),d=f=>{if(f.preventDefault(),i.trim().toLowerCase()===lp.toLowerCase()){c(""),s(""),r(!1),e();return}c("Farbzugriff verweigert."),s("")};return t?null:a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",className:"color-unlock-button mono",onClick:()=>r(!0),title:"Farbmodus entsperren",children:"RGB"}),n?a.jsx("div",{className:"color-unlock-overlay",onClick:()=>r(!1),children:a.jsxs("form",{className:"color-unlock-modal",onSubmit:d,onClick:f=>f.stopPropagation(),children:[a.jsx("p",{className:"mono color-unlock-kicker",children:"VERSTECKTES MODUL"}),a.jsx("h2",{children:"Farbmodus entsperren"}),a.jsx("p",{children:"Dieses System startet nach erfolgreicher Authentifizierung neu und lädt die farbige Oberfläche."}),a.jsx("input",{type:"password",value:i,onChange:f=>s(f.target.value),placeholder:"Passwort",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Color OS starten"}),l?a.jsx("p",{className:"mono color-unlock-error",children:l}):null]})}):null]})}function wp({onLock:e,onCastAudioChange:t,isColorMode:n,onColorUnlock:r}){const[i,s]=N.useState(null),[l,c]=N.useState(!1),[d,f]=N.useState(!1),[k,w]=N.useState(!1),[y,S]=N.useState(!1),[j,E]=N.useState(()=>new Date),[_,m]=N.useState(!1);N.useEffect(()=>{const T=window.setInterval(()=>{E(new Date)},1e3);return()=>window.clearInterval(T)},[]),N.useEffect(()=>{let T;const F=()=>{m(!0),T=window.setTimeout(()=>{m(!1);const W=2200+Math.random()*3200;T=window.setTimeout(F,W)},120)};return T=window.setTimeout(F,2600),()=>window.clearTimeout(T)},[]);const g=(T,F=!0)=>{c(!0),f(F),window.setTimeout(()=>{s(T),c(!1)},650)},p=()=>{s(null),c(!1),f(!1)},o=()=>{w(!0),S(!0),t==null||t(!0),s({title:"Königliche AI Songs"}),f(!0)},u=()=>{w(!1),S(!1),t==null||t(!1),s(null),f(!1)},h=()=>{f(T=>!T)},v=()=>i?i.title==="Königliche AI Songs"?a.jsx("div",{className:"cast-window",children:k?a.jsx("iframe",{className:"cast-frame",src:"https://erdbeerenfresser.github.io/Koenigliche-Mafia/",title:"Königliche AI Songs",allow:"autoplay; clipboard-write; encrypted-media; fullscreen"}):null}):i.title==="The Black Ledger"?a.jsx($h,{}):i.title==="Das Auge der Mafia"?a.jsx(Xh,{}):i.title==="Das Archiv"?a.jsx(np,{}):i.title==="Das Netzwerk"?a.jsx(ip,{}):i.title==="Fragment"?a.jsx(sp,{}):a.jsxs("div",{className:"window-content-live",children:[a.jsxs("div",{className:"window-hero",children:[a.jsx("div",{className:"window-hero-image",children:a.jsx("img",{src:i.image,alt:i.title})}),a.jsxs("div",{className:"window-hero-text",children:[a.jsx("p",{className:"window-kicker mono",children:i.kicker}),a.jsx("h1",{children:i.title}),a.jsx("p",{className:"window-text",children:i.text}),a.jsxs("div",{className:"window-meta mono",children:[a.jsx("span",{children:"ZUGRIFFSSTATUS: GEÖFFNET"}),a.jsx("span",{children:"QUELLE: INTERNES ARCHIV"})]})]})]}),a.jsx("div",{className:"window-file-grid",children:ta.map(T=>a.jsxs("button",{type:"button",className:`file-tile ${(i==null?void 0:i.title)===T.title?"selected":""}`,onClick:()=>g(T),children:[a.jsx("div",{className:"file-tile-image",children:a.jsx("img",{src:T.image,alt:T.title})}),a.jsxs("div",{className:"file-tile-text",children:[a.jsx("p",{className:"mono preview-kicker",children:T.kicker}),a.jsx("h3",{children:T.title}),a.jsx("p",{children:T.text})]})]},T.title))})]}):null,x=j.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),b=103,P=N.useMemo(()=>{const T=j,F=T.getFullYear()-b;return T.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"})+`${F}`},[j]);return a.jsxs("div",{className:`site-shell film-grain desktop-mode ${_?"desktop-glitch":""} ${n?"color-mode":"mono-mode"}`,children:[a.jsx("div",{className:"desktop-noise"}),a.jsx("div",{className:"desktop-scanlines"}),a.jsxs("header",{className:"desktop-topbar mono",children:[a.jsxs("div",{className:"desktop-topbar-left",children:[a.jsx("span",{children:"KM_OS v2.0"}),a.jsx("span",{children:"PRIVATE FAMILY NETWORK"}),a.jsx("span",{children:"ARCHIVLINK AKTIV"})]}),a.jsxs("div",{className:"desktop-topbar-right",children:[a.jsx("span",{children:P}),a.jsx("span",{children:x}),a.jsx("button",{onClick:e,children:"ABMELDEN"})]})]}),a.jsxs("main",{className:`desktop-screen ${d?"window-is-fullscreen":""}`,children:[a.jsx("aside",{className:`desktop-icons ${d?"is-hidden":""}`,children:ta.map(T=>a.jsxs("button",{className:`desktop-icon ${(i==null?void 0:i.title)===T.title?"active":""}`,type:"button",onClick:()=>{if(T.title==="Königliche AI Songs"){o();return}g(T)},children:[a.jsx("div",{className:"desktop-icon-thumb",children:a.jsx("img",{src:T.image,alt:T.title})}),a.jsx("span",{className:"mono",children:T.title})]},T.title))}),i||l?a.jsxs("section",{className:`desktop-window ${l?"is-opening":""} ${d?"is-fullscreen":""}`,children:[a.jsxs("div",{className:"window-header mono",children:[a.jsxs("div",{className:"window-header-left",children:[a.jsx("span",{children:"AKTIVE DATEI"}),a.jsx("span",{children:"/"}),a.jsx("span",{children:i?i.title.toUpperCase():"WIRD GELADEN"})]}),a.jsxs("div",{className:"window-header-right",children:[a.jsx("button",{className:"window-expand",type:"button",onClick:h,children:d?"▢":"⬜"}),a.jsx("button",{className:"window-close",type:"button",onClick:(i==null?void 0:i.title)==="Königliche AI Songs"?u:p,children:"SCHLIESSEN"}),a.jsx("span",{className:"window-dot"})]})]}),a.jsx("div",{className:"window-body",children:l||!i?a.jsxs("div",{className:"window-loading mono",children:[a.jsx("p",{children:"DATEI WIRD GEÖFFNET"}),a.jsx("span",{className:"loading-dots",children:"..."})]}):v()})]}):a.jsx("section",{className:`desktop-empty mono ${d?"is-hidden":""}`,children:a.jsxs("div",{className:"desktop-empty-inner",children:[a.jsx("p",{className:"desktop-empty-kicker",children:"DESKTOP BEREIT"}),a.jsx("h2",{children:"Keine Datei geöffnet"}),a.jsx("p",{children:"Wähle links eine Verknüpfung, um ein Objekt, Archiv oder Modul zu öffnen."})]})})]}),a.jsxs("footer",{className:"desktop-taskbar mono",children:[a.jsx("span",{children:"SYSTEMSTATUS: STABIL"}),a.jsxs("span",{children:["AKTIVE DATEI: ",i?i.title.toUpperCase():"KEINE DATEI GEÖFFNET"]}),a.jsx("span",{children:n?"FARBMODUS AKTIV ":"MONOCHROM-MODUS AKTIV"})]}),a.jsx(vp,{isColorMode:n,onUnlock:r})]})}function yp(){const[e,t]=N.useState("start"),[n,r]=N.useState(!1),[i,s]=N.useState(!1),l=()=>{r(!1),t("colorBoot")};return a.jsxs(a.Fragment,{children:[e==="start"&&a.jsx(dp,{onStart:()=>t("boot")}),e==="boot"&&a.jsx(hp,{onUnlock:()=>t("intro")}),e==="colorBoot"&&a.jsx(gp,{onComplete:()=>{s(!0),t("site")}}),e==="intro"&&a.jsx(pp,{onComplete:()=>t("site")}),e==="logout"&&a.jsx(mp,{onComplete:()=>t("start")}),e==="site"&&a.jsxs(a.Fragment,{children:[a.jsx(wp,{onLock:()=>t("logout"),onCastAudioChange:r,isColorMode:i,onColorUnlock:l}),a.jsx(xp,{audioStarted:e==="site",forceMuted:n})]}),a.jsx("style",{children:`
        body {
          margin: 0;
          background: #080808;
          color: #f3f3f3;
          font-family: Georgia, "Times New Roman", serif;
        }

        * {
          box-sizing: border-box;
        }

        button,
        input {
          font: inherit;
        }

        .mono {
          font-family: "Courier New", Courier, monospace;
        }

        .film-grain {
          position: relative;
          overflow: hidden;
        }

        .film-grain::before,
        .intro-transition::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.04) 0 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px);
          background-size: 12px 12px, 16px 16px, 18px 18px;
          opacity: 0.28;
          mix-blend-mode: screen;
        }

.boot-screen,
.site-shell,
.intro-transition {
  position: relative;
  width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 28%),
    linear-gradient(180deg, #050505 0%, #101010 55%, #060606 100%);
}

        .boot-screen::after,
        .intro-transition::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background:
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02) 18%, transparent 38%, rgba(255, 255, 255, 0.08) 100%),
            radial-gradient(circle at center, rgba(255, 255, 255, 0.08), transparent 55%);
          mix-blend-mode: screen;
          transition: opacity 0.08s linear;
        }

        .boot-screen.flicker-1::after,
        .intro-transition.transition-logo::after {
          opacity: 0.22;
        }

.boot-screen.flicker-2::after,
.intro-transition.transition-success::after {
  opacity: 0.42;
}

        .boot-noise {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.02) 0,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 2px,
            transparent 4px
          );
          opacity: 0.35;
          pointer-events: none;
        }

        .boot-frame {
          position: relative;
          z-index: 1;
          width: min(980px, calc(100% - 32px));
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px 0;
        }

        .boot-header,
        .topbar {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.72);
        }

        .boot-sequence,
        .login-panel,
        .intro-strip,
        .closing-panel,
        .audio-widget {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(10px);
        }

        .boot-sequence {
          margin-top: 20px;
          border-radius: 28px;
          padding: 24px;
          display: grid;
          gap: 0.42rem;
          min-height: 520px;
        }

        .boot-line {
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          opacity: 0;
          transform: translateY(3px);
        }

        .boot-line.visible {
          opacity: 1;
          transform: translateY(0);
          animation: bootReveal 0.18s linear forwards;
        }

        .boot-line.pending {
          opacity: 0.34;
        }

        .final-line {
          margin-top: 10px;
        }

        .blink {
          animation: blinkText 1s step-end infinite;
        }

        .cursor {
          display: inline-block;
          margin-left: 6px;
          animation: blinkCursor 0.8s step-end infinite;
        }

        .login-panel {
          margin-top: 20px;
          border-radius: 28px;
          padding: 28px;
          display: grid;
          gap: 24px;
        }

        .panel-kicker,
        .section-label,
        .hero-kicker,
        .transition-text {
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.58);
          margin: 0 0 12px;
        }

        .transition-title {
  margin: 0;
  font-size: clamp(2.4rem, 6vw, 5.4rem);
  line-height: 1.05;
  color: rgba(255, 255, 255, 0.96);
}

        .login-panel h1,
        .hero-content h1,
        .intro-strip h2,
        .closing-panel h2,


        .login-panel h1,
        .hero-content h1 {
          font-size: clamp(2.6rem, 7vw, 5.8rem);
        }

        .panel-text,
        .hero-text,
        .intro-strip p:last-child,
        .closing-panel p,
        .transition-subtext {
          margin: 16px 0 0;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
        }

        .login-form {
          display: grid;
          gap: 12px;
          max-width: 420px;
        }

        .login-form label {
          font-size: 0.86rem;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.74);
        }

        .login-form input {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.45);
          color: white;
          padding: 14px 16px;
          outline: none;
        }

        .login-form input:focus {
          border-color: rgba(255, 255, 255, 0.45);
        }

        .login-form button,
        .topbar button,
        .hero-actions button,
        .audio-widget button {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 16px;
          background: #f2f2f2;
          color: #050505;
          padding: 12px 18px;
          cursor: pointer;
          font-weight: 700;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .login-form button:hover,
        .topbar button:hover,
        .hero-actions button:hover,
        .audio-widget button:hover {
          transform: translateY(-1px);
        }

        .error-text {
          margin: 4px 0 0;
          color: #f0b2b2;
        }

.password-check {
  display: grid;
  gap: 10px;
  max-width: 420px;
  color: rgba(255, 255, 255, 0.86);
}

.loading-dots {
  display: inline-block;
  letter-spacing: 0.2em;
  animation: blinkText 1s step-end infinite;
}

.typewriter-block {
  display: grid;
  gap: 18px;
  text-align: center;
}

.type-line {
  margin: 0;
  font-size: clamp(1.1rem, 3vw, 2rem);
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.92);
  text-transform: uppercase;
}

.type-cursor {
  display: inline-block;
  margin-left: 8px;
  animation: blinkCursor 0.8s step-end infinite;
}

.intro-transition {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
}

.transition-center {
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.transition-logo {
  width: min(420px, 70vw);
  height: auto;
  display: block;
  margin: 0 auto 24px;
  filter: grayscale(1) contrast(1.15);
  animation: logoPulse 1.8s ease-in-out infinite;
}

        .transition-subtext {
          display: block;
          margin-top: 8px;
        }

        .transition-fadeout {
          animation: transitionFade 0.8s ease forwards;
        }

        .site-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hero-image-wrap {
          position: absolute;
          inset: 0;
        }

        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1) brightness(0.42);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), #090909),
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 28%);
        }

        .topbar,
        .hero-content,
        .content-wrap {
          position: relative;
          z-index: 1;
        }

        .topbar,
        .content-wrap,
        .hero-content {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
        }

        .topbar {
          padding-top: 24px;
        }

        .topbar button,
        .hero-actions .ghost {
          background: rgba(255, 255, 255, 0.06);
          color: white;
        }

.hero-content {
  padding: 180px 0 120px;
  max-width: 760px;
}

.hero-text {
  max-width: 540px;
  font-size: clamp(1rem, 2vw, 1.15rem);
}

.hero-content h1 {
  max-width: 700px;
}

.hero-kicker {
  margin-bottom: 18px;
}

        .content-wrap {
          padding: 72px 0 96px;
          display: grid;
          gap: 32px;
        }

        .intro-strip,
        .closing-panel,

.intro-strip {
  display: grid;
  gap: 12px;
  margin: 80px 0 40px;
  max-width: 600px;
}

.closing-panel {
  display: grid;
  gap: 18px;
}

.intro-text {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.object-grid {
  display: grid;
  gap: 20px;
}

.object-card {
  display: grid;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.24);
}

.object-image img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 18px;
  filter: grayscale(1) contrast(1.08) brightness(0.72);
}

.object-text {
  display: grid;
  gap: 10px;
  align-content: start;
}

.object-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.48);
}

.object-text h3 {
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 2rem);
  line-height: 1.08;
}

.object-text p {
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.72);
}

.object-button {
  width: fit-content;
  margin-top: 6px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: white;
  padding: 10px 16px;
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease;
}

.object-button:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.12);
}

        .closing-box {
          display: grid;
          gap: 8px;
          align-content: start;
          border-radius: 20px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .closing-box span,
        .closing-box small {
          color: rgba(255, 255, 255, 0.68);
        }

        .closing-box strong {
          font-size: 1.35rem;
          letter-spacing: 0.08em;
        }

        .yt-audio-frame {
          position: fixed;
          width: 1px;
          height: 1px;
          opacity: 0.01;
          pointer-events: none;
          bottom: 0;
          left: 0;
          border: 0;
        }

.audio-toggle {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 50;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.45);
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease;
}

.desktop-mode {
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.07), transparent 24%),
    linear-gradient(180deg, #050505 0%, #0c0c0c 45%, #020202 100%);
}

.desktop-noise {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background:
    repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.025) 0px,
      rgba(255, 255, 255, 0.025) 1px,
      transparent 2px,
      transparent 4px
    );
  mix-blend-mode: screen;
}

.desktop-scanlines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.09;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.08) 0px,
    rgba(255, 255, 255, 0.08) 1px,
    transparent 2px,
    transparent 6px
  );
  mix-blend-mode: screen;
}

.desktop-glitch {
  animation: desktopGlitch 0.14s linear;
}

.desktop-empty {
  min-width: 0;
  min-height: 0;
  border-radius: 28px;
  border: 1px dashed rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at center, rgba(255, 255, 255, 0.04), transparent 58%),
    rgba(255, 255, 255, 0.02);
  display: grid;
  place-items: center;
  padding: 28px;
  text-align: center;
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.desktop-empty.is-hidden {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.985);
}

.desktop-empty-inner {
  max-width: 520px;
  display: grid;
  gap: 14px;
}

.desktop-empty-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.5);
}

.desktop-empty h2 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 3.2rem);
  line-height: 1.05;
  color: rgba(255, 255, 255, 0.9);
}

.desktop-empty p {
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.68);
}

.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.03);
  letter-spacing: 0.16em;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.68);
}

.window-header-left,
.window-header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.window-expand,
.window-close {
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.82);
  padding: 7px 12px;
  cursor: pointer;
  letter-spacing: 0.12em;
  font-size: 0.68rem;
}

.window-expand:hover,
.window-close:hover {
  background: rgba(255, 255, 255, 0.12);
}

.window-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.25);
}

.window-body {
  min-height: 0;
  overflow: auto;
  padding: 24px;
}

.window-loading {
  min-height: 100%;
  display: grid;
  place-content: center;
  gap: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.82);
}

.window-loading p {
  margin: 0;
  letter-spacing: 0.18em;
}

.window-content-live {
  display: grid;
  gap: 20px;
}

.window-hero {
  display: grid;
  grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);
  gap: 22px;
  align-items: stretch;
}

.window-hero-image img {
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: grayscale(1) contrast(1.1) brightness(0.7);
}

.window-hero-text {
  display: grid;
  align-content: start;
  gap: 14px;
}

.window-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.5);
}

.window-hero-text h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 4.2rem);
  line-height: 1.03;
}

.window-text {
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
  max-width: 700px;
}

.window-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.52);
}

.window-file-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.file-tile {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: white;
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
}

.file-tile:hover,
.file-tile.selected {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
}

.file-tile-image img {
  width: 100%;
  height: 92px;
  object-fit: cover;
  border-radius: 14px;
  filter: grayscale(1) contrast(1.08) brightness(0.72);
}

.file-tile-text {
  min-width: 0;
  display: grid;
  gap: 8px;
}

.preview-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.74rem;
  color: rgba(255, 255, 255, 0.5);
}

.file-tile-text h3 {
  margin: 0;
  font-size: 1.05rem;
}

.file-tile-text p {
  margin: 0;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.95rem;
}

.zeitung-paper {
  display: grid;
  gap: 28px;
  color: rgba(255, 255, 255, 0.9);
}

.zeitung-header {
  display: grid;
  gap: 14px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.zeitung-header-top,
.zeitung-subline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  letter-spacing: 0.16em;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.58);
  text-transform: uppercase;
}

.zeitung-title {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5.6rem);
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.zeitung-lead {
  display: grid;
  grid-template-columns: minmax(240px, 360px) minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.zeitung-lead-image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  filter: grayscale(1) contrast(1.08) brightness(0.74);
}

.zeitung-lead-text {
  display: grid;
  gap: 12px;
}

.zeitung-kicker {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.5);
}

.zeitung-lead-text h2,
.zeitung-article h3 {
  margin: 0;
}

.zeitung-lead-text p,
.zeitung-article p {
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.76);
}

.zeitung-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 18px;
}

.zeitung-article {
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.zeitung-article.large {
  min-height: 100%;
}

@media (max-width: 900px) {
  .zeitung-lead {
    grid-template-columns: 1fr;
  }

  .zeitung-grid {
    grid-template-columns: 1fr;
  }
}

.desktop-taskbar {
  position: relative;
  z-index: 2;
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  letter-spacing: 0.13em;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.56);
}

.audio-toggle:hover {
  transform: scale(1.08);
  background: rgba(255, 255, 255, 0.1);
}

.start-screen {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.start-center {
  z-index: 1;
  display: grid;
  gap: 24px;
}

.start-logo {
  width: min(320px, 70vw);
  filter: grayscale(1) contrast(1.2);
}

.start-button {
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: white;
  padding: 14px 28px;
  border-radius: 999px;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: 0.2s;
}

.start-button:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.15);
}

.logout-transition {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 28%),
    linear-gradient(180deg, #050505 0%, #111 45%, #020202 100%);
  animation: logoutShutdown 2.6s ease forwards;
}

.logout-center {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
  text-align: center;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.logout-center p {
  margin: 0;
  color: rgba(255,255,255,0.58);
}

.logout-center h1 {
  margin: 0;
  font-size: clamp(2.6rem, 7vw, 6rem);
  color: white;
}

.cast-window {
  height: 100%;
  display: block;
}

.cast-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.72);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.cast-toolbar button {
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: white;
  padding: 8px 12px;
  cursor: pointer;
}

.cast-placeholder {
  display: grid;
  place-items: center;
  color: rgba(255,255,255,0.62);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.cast-frame {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0; /* optional: cleaner edge-to-edge */
  filter: grayscale(1) contrast(1.05);
}

        @keyframes bootReveal {
          from {
            opacity: 0;
            transform: translateY(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blinkText {
          50% {
            opacity: 0.38;
          }
        }

        @keyframes blinkCursor {
          50% {
            opacity: 0;
          }
        }

        @keyframes logoPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.96;
          }
          50% {
            transform: scale(1.03);
            opacity: 1;
          }
        }

        @keyframes transitionFade {
          to {
            opacity: 0;
            transform: scale(1.04);
          }
        }

        @keyframes logoutShutdown {
  0% {
    opacity: 0;
    filter: brightness(1.2) contrast(1);
  }

  16% {
    opacity: 1;
    filter: brightness(1.4) contrast(1.15);
  }

  72% {
    opacity: 1;
    transform: scale(1);
    filter: brightness(0.8) contrast(1.25);
  }

  100% {
    opacity: 0;
    transform: scale(0.96);
    filter: brightness(0) contrast(1.4);
  }
}


        @media (min-width: 900px) {
          .login-panel {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: end;
          }

.object-card {
  grid-template-columns: 320px 1fr;
  gap: 28px;
}

          .closing-panel {
            grid-template-columns: 1.2fr 0.8fr;
            align-items: start;
          }
        }

        @media (max-width: 640px) {
.boot-sequence,
.login-panel,
.intro-strip,
.closing-panel,
.audio-widget {
  padding: 18px;
  border-radius: 22px;
}

.desktop-topbar,
.desktop-screen,
.desktop-taskbar {
  width: min(100%, calc(100% - 20px));
}

.desktop-topbar {
  height: auto;
  padding: 14px 0;
  align-items: flex-start;
}

.desktop-screen {
  grid-template-columns: 1fr;
  height: auto;
  min-height: calc(100vh - 140px);
  overflow: visible;
}

.desktop-icons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.window-hero {
  grid-template-columns: 1fr;
}

.window-file-grid {
  grid-template-columns: 1fr;
}

.file-tile {
  grid-template-columns: 1fr;
}

.file-tile-image img {
  height: 170px;
}

.window-body {
  padding: 18px;
}

          .boot-frame,
          .topbar,
          .hero-content,
          .content-wrap {
            width: min(100%, calc(100% - 20px));
          }

          .hero-content {
            padding: 120px 0 72px;
          }

.object-image img {
  height: 200px;
}

          .hero-actions button,
          .login-form button,
          .audio-widget button {
            width: 100%;
          }

          .audio-widget {
            left: 10px;
            right: 10px;
            bottom: 10px;
            min-width: 0;
          }
        }
      `})]})}ns.createRoot(document.getElementById("root")).render(a.jsx(Je.StrictMode,{children:a.jsx(yp,{})}));
