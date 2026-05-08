(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var na={exports:{}},ui={},ra={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),mc=Symbol.for("react.portal"),xc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Ho=Symbol.iterator;function Ec(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var ia={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sa=Object.assign,oa={};function gn(e,t,n){this.props=e,this.context=t,this.refs=oa,this.updater=n||ia}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function la(){}la.prototype=gn.prototype;function Ks(e,t,n){this.props=e,this.context=t,this.refs=oa,this.updater=n||ia}var Qs=Ks.prototype=new la;Qs.constructor=Ks;sa(Qs,gn.prototype);Qs.isPureReactComponent=!0;var $o=Array.isArray,aa=Object.prototype.hasOwnProperty,Zs={current:null},ua={key:!0,ref:!0,__self:!0,__source:!0};function ca(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)aa.call(t,r)&&!ua.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),g=0;g<c;g++)d[g]=arguments[g+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:ir,type:e,key:s,ref:l,props:i,_owner:Zs.current}}function Cc(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Tc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tc(""+e.key):t.toString(36)}function Er(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ir:case mc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ni(l,0):r,$o(i)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),Er(i,t,n,"",function(g){return g})):i!=null&&(Ys(i)&&(i=Cc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Uo,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",$o(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+Ni(s,c);l+=Er(s,t,n,d,i)}else if(d=Ec(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+Ni(s,c++),l+=Er(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ur(e,t,n){if(e==null)return e;var r=[],i=0;return Er(e,r,"","",function(s){return t.call(n,s,i++)}),r}function bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Cr={transition:null},zc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Zs};function da(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ur,forEach:function(e,t,n){ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ur(e,function(){t++}),t},toArray:function(e){return ur(e,function(t){return t})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=gn;F.Fragment=xc;F.Profiler=yc;F.PureComponent=Ks;F.StrictMode=vc;F.Suspense=Pc;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;F.act=da;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sa({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Zs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)aa.call(t,d)&&!ua.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var g=0;g<d;g++)c[g]=arguments[g+2];r.children=c}return{$$typeof:ir,type:e.type,key:i,ref:s,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wc,_context:e},e.Consumer=e};F.createElement=ca;F.createFactory=function(e){var t=ca.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Sc,render:e}};F.isValidElement=Ys;F.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:bc}};F.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};F.unstable_act=da;F.useCallback=function(e,t){return me.current.useCallback(e,t)};F.useContext=function(e){return me.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return me.current.useDeferredValue(e)};F.useEffect=function(e,t){return me.current.useEffect(e,t)};F.useId=function(){return me.current.useId()};F.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return me.current.useMemo(e,t)};F.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};F.useRef=function(e){return me.current.useRef(e)};F.useState=function(e){return me.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return me.current.useTransition()};F.version="18.3.1";ra.exports=F;var T=ra.exports;const Xe=gc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=T,Lc=Symbol.for("react.element"),_c=Symbol.for("react.fragment"),Rc=Object.prototype.hasOwnProperty,Dc=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function pa(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Rc.call(t,r)&&!Mc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lc,type:e,key:s,ref:l,props:i,_owner:Dc.current}}ui.Fragment=_c;ui.jsx=pa;ui.jsxs=pa;na.exports=ui;var a=na.exports,qi={},ha={exports:{}},Ce={},fa={exports:{}},ga={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var M=z.length;z.push(R);e:for(;0<M;){var W=M-1>>>1,q=z[W];if(0<i(q,R))z[W]=R,z[M]=q,M=W;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],M=z.pop();if(M!==R){z[0]=M;e:for(var W=0,q=z.length,ot=q>>>1;W<ot;){var Qe=2*(W+1)-1,vn=z[Qe],b=Qe+1,ie=z[b];if(0>i(vn,M))b<q&&0>i(ie,vn)?(z[W]=ie,z[b]=M,W=b):(z[W]=vn,z[Qe]=M,W=Qe);else if(b<q&&0>i(ie,M))z[W]=ie,z[b]=M,W=b;else break e}}return R}function i(z,R){var M=z.sortIndex-R.sortIndex;return M!==0?M:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],g=[],S=1,y=null,w=3,P=!1,N=!1,E=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var R=n(g);R!==null;){if(R.callback===null)r(g);else if(R.startTime<=z)r(g),R.sortIndex=R.expirationTime,t(d,R);else break;R=n(g)}}function o(z){if(E=!1,h(z),!N)if(n(d)!==null)N=!0,A(u);else{var R=n(g);R!==null&&be(o,R.startTime-z)}}function u(z,R){N=!1,E&&(E=!1,x(m),m=-1),P=!0;var M=w;try{for(h(R),y=n(d);y!==null&&(!(y.expirationTime>R)||z&&!_());){var W=y.callback;if(typeof W=="function"){y.callback=null,w=y.priorityLevel;var q=W(y.expirationTime<=R);R=e.unstable_now(),typeof q=="function"?y.callback=q:y===n(d)&&r(d),h(R)}else r(d);y=n(d)}if(y!==null)var ot=!0;else{var Qe=n(g);Qe!==null&&be(o,Qe.startTime-R),ot=!1}return ot}finally{y=null,w=M,P=!1}}var p=!1,v=null,m=-1,k=5,j=-1;function _(){return!(e.unstable_now()-j<k)}function B(){if(v!==null){var z=e.unstable_now();j=z;var R=!0;try{R=v(!0,z)}finally{R?$():(p=!1,v=null)}}else p=!1}var $;if(typeof f=="function")$=function(){f(B)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,L=V.port2;V.port1.onmessage=B,$=function(){L.postMessage(null)}}else $=function(){D(B,0)};function A(z){v=z,p||(p=!0,$())}function be(z,R){m=D(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||P||(N=!0,A(u))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(z){switch(w){case 1:case 2:case 3:var R=3;break;default:R=w}var M=w;w=R;try{return z()}finally{w=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=w;w=z;try{return R()}finally{w=M}},e.unstable_scheduleCallback=function(z,R,M){var W=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?W+M:W):M=W,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=M+q,z={id:S++,callback:R,priorityLevel:z,startTime:M,expirationTime:q,sortIndex:-1},M>W?(z.sortIndex=M,t(g,z),n(d)===null&&z===n(g)&&(E?(x(m),m=-1):E=!0,be(o,M-W))):(z.sortIndex=q,t(d,z),N||P||(N=!0,A(u))),z},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(z){var R=w;return function(){var M=w;w=R;try{return z.apply(this,arguments)}finally{w=M}}}})(ga);fa.exports=ga;var Fc=fa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=T,Ee=Fc;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ma=new Set,Wn={};function Bt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Wn[e]=t,e=0;e<t.length;e++)ma.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),es=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vo={},Go={};function Bc(e){return es.call(Go,e)?!0:es.call(Vo,e)?!1:Oc.test(e)?Go[e]=!0:(Vo[e]=!0,!1)}function Wc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hc(e,t,n,r){if(t===null||typeof t>"u"||Wc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xs,Js);ue[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xs,Js);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xs,Js);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function qs(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hc(t,n,i,r)&&(n=null),r||i===null?Bc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),eo=Symbol.for("react.strict_mode"),ts=Symbol.for("react.profiler"),xa=Symbol.for("react.provider"),va=Symbol.for("react.context"),to=Symbol.for("react.forward_ref"),ns=Symbol.for("react.suspense"),rs=Symbol.for("react.suspense_list"),no=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),ya=Symbol.for("react.offscreen"),Ko=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ei;function Tn(e){if(Ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||""}return`
`+Ei+e}var Ci=!1;function Ti(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,c=s.length-1;1<=l&&0<=c&&i[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==s[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function $c(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case $t:return"Portal";case ts:return"Profiler";case eo:return"StrictMode";case ns:return"Suspense";case rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case va:return(e.displayName||"Context")+".Consumer";case xa:return(e._context.displayName||"Context")+".Provider";case to:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case no:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===eo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vc(e){var t=wa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=Vc(e))}function ka(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ar(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sa(e,t){t=t.checked,t!=null&&qs(e,"checked",t,!1)}function os(e,t){Sa(e,t);var n=Pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&ls(e,t.type,Pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ls(e,t,n){(t!=="number"||Ar(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function as(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(bn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pt(n)}}function Pa(e,t){var n=Pt(t.value),r=Pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,Na=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Gc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Ea(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Ca(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ea(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kc=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cs(e,t){if(t){if(Kc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,nn=null,rn=null;function Jo(e){if(e=lr(e)){if(typeof hs!="function")throw Error(C(280));var t=e.stateNode;t&&(t=fi(t),hs(e.stateNode,e.type,t))}}function Ta(e){nn?rn?rn.push(e):rn=[e]:nn=e}function ba(){if(nn){var e=nn,t=rn;if(rn=nn=null,Jo(e),t)for(e=0;e<t.length;e++)Jo(t[e])}}function za(e,t){return e(t)}function Ia(){}var bi=!1;function La(e,t,n){if(bi)return e(t,n);bi=!0;try{return za(e,t,n)}finally{bi=!1,(nn!==null||rn!==null)&&(Ia(),ba())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=fi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var fs=!1;if(tt)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{fs=!1}function Qc(e,t,n,r,i,s,l,c,d){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(S){this.onError(S)}}var _n=!1,Or=null,Br=!1,gs=null,Zc={onError:function(e){_n=!0,Or=e}};function Yc(e,t,n,r,i,s,l,c,d){_n=!1,Or=null,Qc.apply(Zc,arguments)}function Xc(e,t,n,r,i,s,l,c,d){if(Yc.apply(this,arguments),_n){if(_n){var g=Or;_n=!1,Or=null}else throw Error(C(198));Br||(Br=!0,gs=g)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _a(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qo(e){if(Wt(e)!==e)throw Error(C(188))}function Jc(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qo(i),e;if(s===r)return qo(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=s;break}if(c===r){l=!0,r=i,n=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===n){l=!0,n=s,r=i;break}if(c===r){l=!0,r=s,n=i;break}c=c.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Ra(e){return e=Jc(e),e!==null?Da(e):null}function Da(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Da(e);if(t!==null)return t;e=e.sibling}return null}var Ma=Ee.unstable_scheduleCallback,el=Ee.unstable_cancelCallback,qc=Ee.unstable_shouldYield,ed=Ee.unstable_requestPaint,ee=Ee.unstable_now,td=Ee.unstable_getCurrentPriorityLevel,io=Ee.unstable_ImmediatePriority,Fa=Ee.unstable_UserBlockingPriority,Wr=Ee.unstable_NormalPriority,nd=Ee.unstable_LowPriority,Aa=Ee.unstable_IdlePriority,ci=null,Ge=null;function rd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:od,id=Math.log,sd=Math.LN2;function od(e){return e>>>=0,e===0?32:31-(id(e)/sd|0)|0}var hr=64,fr=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=zn(c):(s&=l,s!==0&&(r=zn(s)))}else l=n&~i,l!==0?r=zn(l):s!==0&&(r=zn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Be(s),c=1<<l,d=i[l];d===-1?(!(c&n)||c&r)&&(i[l]=ld(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oa(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function so(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Ba(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wa,oo,Ha,$a,Ua,xs=!1,gr=[],gt=null,mt=null,xt=null,Un=new Map,Vn=new Map,dt=[],cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Sn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=lr(t),t!==null&&oo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dd(e,t,n,r,i){switch(t){case"focusin":return gt=Sn(gt,e,t,n,r,i),!0;case"dragenter":return mt=Sn(mt,e,t,n,r,i),!0;case"mouseover":return xt=Sn(xt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Un.set(s,Sn(Un.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vn.set(s,Sn(Vn.get(s)||null,e,t,n,r,i)),!0}return!1}function Va(e){var t=zt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=_a(n),t!==null){e.blockedOn=t,Ua(e.priority,function(){Ha(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ps=r,n.target.dispatchEvent(r),ps=null}else return t=lr(n),t!==null&&oo(t),e.blockedOn=n,!1;t.shift()}return!0}function nl(e,t,n){Tr(e)&&n.delete(t)}function pd(){xs=!1,gt!==null&&Tr(gt)&&(gt=null),mt!==null&&Tr(mt)&&(mt=null),xt!==null&&Tr(xt)&&(xt=null),Un.forEach(nl),Vn.forEach(nl)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,pd)))}function Gn(e){function t(i){return Pn(i,e)}if(0<gr.length){Pn(gr[0],e);for(var n=1;n<gr.length;n++){var r=gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Pn(gt,e),mt!==null&&Pn(mt,e),xt!==null&&Pn(xt,e),Un.forEach(t),Vn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Va(n),n.blockedOn===null&&dt.shift()}var sn=st.ReactCurrentBatchConfig,$r=!0;function hd(e,t,n,r){var i=H,s=sn.transition;sn.transition=null;try{H=1,lo(e,t,n,r)}finally{H=i,sn.transition=s}}function fd(e,t,n,r){var i=H,s=sn.transition;sn.transition=null;try{H=4,lo(e,t,n,r)}finally{H=i,sn.transition=s}}function lo(e,t,n,r){if($r){var i=vs(e,t,n,r);if(i===null)Bi(e,t,r,Ur,n),tl(e,r);else if(dd(i,e,t,n,r))r.stopPropagation();else if(tl(e,r),t&4&&-1<cd.indexOf(e)){for(;i!==null;){var s=lr(i);if(s!==null&&Wa(s),s=vs(e,t,n,r),s===null&&Bi(e,t,r,Ur,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Ur=null;function vs(e,t,n,r){if(Ur=null,e=ro(r),e=zt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_a(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ur=e,null}function Ga(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(td()){case io:return 1;case Fa:return 4;case Wr:case nd:return 16;case Aa:return 536870912;default:return 16}default:return 16}}var ht=null,ao=null,br=null;function Ka(){if(br)return br;var e,t=ao,n=t.length,r,i="value"in ht?ht.value:ht.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return br=i.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function rl(){return!1}function Te(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mr:rl,this.isPropagationStopped=rl,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=Te(mn),or=X({},mn,{view:0,detail:0}),gd=Te(or),Ii,Li,jn,di=X({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Ii=e.screenX-jn.screenX,Li=e.screenY-jn.screenY):Li=Ii=0,jn=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),il=Te(di),md=X({},di,{dataTransfer:0}),xd=Te(md),vd=X({},or,{relatedTarget:0}),_i=Te(vd),yd=X({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Te(yd),kd=X({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sd=Te(kd),Pd=X({},mn,{data:0}),sl=Te(Pd),jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function co(){return Cd}var Td=X({},or,{key:function(e){if(e.key){var t=jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=Te(Td),zd=X({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ol=Te(zd),Id=X({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Ld=Te(Id),_d=X({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=Te(_d),Dd=X({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=Te(Dd),Fd=[9,13,27,32],po=tt&&"CompositionEvent"in window,Rn=null;tt&&"documentMode"in document&&(Rn=document.documentMode);var Ad=tt&&"TextEvent"in window&&!Rn,Qa=tt&&(!po||Rn&&8<Rn&&11>=Rn),ll=" ",al=!1;function Za(e,t){switch(e){case"keyup":return Fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Od(e,t){switch(e){case"compositionend":return Ya(t);case"keypress":return t.which!==32?null:(al=!0,ll);case"textInput":return e=t.data,e===ll&&al?null:e;default:return null}}function Bd(e,t){if(Vt)return e==="compositionend"||!po&&Za(e,t)?(e=Ka(),br=ao=ht=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qa&&t.locale!=="ko"?null:t.data;default:return null}}var Wd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wd[e.type]:t==="textarea"}function Xa(e,t,n,r){Ta(r),t=Vr(t,"onChange"),0<t.length&&(n=new uo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Kn=null;function Hd(e){au(e,0)}function pi(e){var t=Qt(e);if(ka(t))return e}function $d(e,t){if(e==="change")return t}var Ja=!1;if(tt){var Ri;if(tt){var Di="oninput"in document;if(!Di){var cl=document.createElement("div");cl.setAttribute("oninput","return;"),Di=typeof cl.oninput=="function"}Ri=Di}else Ri=!1;Ja=Ri&&(!document.documentMode||9<document.documentMode)}function dl(){Dn&&(Dn.detachEvent("onpropertychange",qa),Kn=Dn=null)}function qa(e){if(e.propertyName==="value"&&pi(Kn)){var t=[];Xa(t,Kn,e,ro(e)),La(Hd,t)}}function Ud(e,t,n){e==="focusin"?(dl(),Dn=t,Kn=n,Dn.attachEvent("onpropertychange",qa)):e==="focusout"&&dl()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(Kn)}function Gd(e,t){if(e==="click")return pi(t)}function Kd(e,t){if(e==="input"||e==="change")return pi(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Qd;function Qn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!es.call(t,i)||!He(e[i],t[i]))return!1}return!0}function pl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hl(e,t){var n=pl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pl(n)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=Ar();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ar(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zd(e){var t=tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eu(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=hl(n,s);var l=hl(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=tt&&"documentMode"in document&&11>=document.documentMode,Gt=null,ys=null,Mn=null,ws=!1;function fl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ws||Gt==null||Gt!==Ar(r)||(r=Gt,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Qn(Mn,r)||(Mn=r,r=Vr(ys,"onSelect"),0<r.length&&(t=new uo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Mi={},nu={};tt&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function hi(e){if(Mi[e])return Mi[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nu)return Mi[e]=t[n];return e}var ru=hi("animationend"),iu=hi("animationiteration"),su=hi("animationstart"),ou=hi("transitionend"),lu=new Map,gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){lu.set(e,t),Bt(t,[e])}for(var Fi=0;Fi<gl.length;Fi++){var Ai=gl[Fi],Xd=Ai.toLowerCase(),Jd=Ai[0].toUpperCase()+Ai.slice(1);Nt(Xd,"on"+Jd)}Nt(ru,"onAnimationEnd");Nt(iu,"onAnimationIteration");Nt(su,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(ou,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function ml(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xc(r,t,void 0,e),e.currentTarget=null}function au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,g=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;ml(i,c,g),s=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,g=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;ml(i,c,g),s=d}}}if(Br)throw e=gs,Br=!1,gs=null,e}function G(e,t){var n=t[Ns];n===void 0&&(n=t[Ns]=new Set);var r=e+"__bubble";n.has(r)||(uu(t,e,2,!1),n.add(r))}function Oi(e,t,n){var r=0;t&&(r|=4),uu(n,e,r,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[vr]){e[vr]=!0,ma.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Oi(n,!1,e),Oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,Oi("selectionchange",!1,t))}}function uu(e,t,n,r){switch(Ga(t)){case 1:var i=hd;break;case 4:i=fd;break;default:i=lo}n=i.bind(null,t,n,e),i=void 0,!fs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=zt(c),l===null)return;if(d=l.tag,d===5||d===6){r=s=l;continue e}c=c.parentNode}}r=r.return}La(function(){var g=s,S=ro(n),y=[];e:{var w=lu.get(e);if(w!==void 0){var P=uo,N=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":P=bd;break;case"focusin":N="focus",P=_i;break;case"focusout":N="blur",P=_i;break;case"beforeblur":case"afterblur":P=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Ld;break;case ru:case iu:case su:P=wd;break;case ou:P=Rd;break;case"scroll":P=gd;break;case"wheel":P=Md;break;case"copy":case"cut":case"paste":P=Sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=ol}var E=(t&4)!==0,D=!E&&e==="scroll",x=E?w!==null?w+"Capture":null:w;E=[];for(var f=g,h;f!==null;){h=f;var o=h.stateNode;if(h.tag===5&&o!==null&&(h=o,x!==null&&(o=$n(f,x),o!=null&&E.push(Yn(f,o,h)))),D)break;f=f.return}0<E.length&&(w=new P(w,N,null,n,S),y.push({event:w,listeners:E}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",w&&n!==ps&&(N=n.relatedTarget||n.fromElement)&&(zt(N)||N[nt]))break e;if((P||w)&&(w=S.window===S?S:(w=S.ownerDocument)?w.defaultView||w.parentWindow:window,P?(N=n.relatedTarget||n.toElement,P=g,N=N?zt(N):null,N!==null&&(D=Wt(N),N!==D||N.tag!==5&&N.tag!==6)&&(N=null)):(P=null,N=g),P!==N)){if(E=il,o="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(E=ol,o="onPointerLeave",x="onPointerEnter",f="pointer"),D=P==null?w:Qt(P),h=N==null?w:Qt(N),w=new E(o,f+"leave",P,n,S),w.target=D,w.relatedTarget=h,o=null,zt(S)===g&&(E=new E(x,f+"enter",N,n,S),E.target=h,E.relatedTarget=D,o=E),D=o,P&&N)t:{for(E=P,x=N,f=0,h=E;h;h=Ht(h))f++;for(h=0,o=x;o;o=Ht(o))h++;for(;0<f-h;)E=Ht(E),f--;for(;0<h-f;)x=Ht(x),h--;for(;f--;){if(E===x||x!==null&&E===x.alternate)break t;E=Ht(E),x=Ht(x)}E=null}else E=null;P!==null&&xl(y,w,P,E,!1),N!==null&&D!==null&&xl(y,D,N,E,!0)}}e:{if(w=g?Qt(g):window,P=w.nodeName&&w.nodeName.toLowerCase(),P==="select"||P==="input"&&w.type==="file")var u=$d;else if(ul(w))if(Ja)u=Kd;else{u=Vd;var p=Ud}else(P=w.nodeName)&&P.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(u=Gd);if(u&&(u=u(e,g))){Xa(y,u,n,S);break e}p&&p(e,w,g),e==="focusout"&&(p=w._wrapperState)&&p.controlled&&w.type==="number"&&ls(w,"number",w.value)}switch(p=g?Qt(g):window,e){case"focusin":(ul(p)||p.contentEditable==="true")&&(Gt=p,ys=g,Mn=null);break;case"focusout":Mn=ys=Gt=null;break;case"mousedown":ws=!0;break;case"contextmenu":case"mouseup":case"dragend":ws=!1,fl(y,n,S);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":fl(y,n,S)}var v;if(po)e:{switch(e){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Vt?Za(e,n)&&(m="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Qa&&n.locale!=="ko"&&(Vt||m!=="onCompositionStart"?m==="onCompositionEnd"&&Vt&&(v=Ka()):(ht=S,ao="value"in ht?ht.value:ht.textContent,Vt=!0)),p=Vr(g,m),0<p.length&&(m=new sl(m,e,null,n,S),y.push({event:m,listeners:p}),v?m.data=v:(v=Ya(n),v!==null&&(m.data=v)))),(v=Ad?Od(e,n):Bd(e,n))&&(g=Vr(g,"onBeforeInput"),0<g.length&&(S=new sl("onBeforeInput","beforeinput",null,n,S),y.push({event:S,listeners:g}),S.data=v))}au(y,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$n(e,n),s!=null&&r.unshift(Yn(e,s,i)),s=$n(e,t),s!=null&&r.push(Yn(e,s,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xl(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,g=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&g!==null&&(c=g,i?(d=$n(n,s),d!=null&&l.unshift(Yn(n,d,c))):i||(d=$n(n,s),d!=null&&l.push(Yn(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ep=/\r\n?/g,tp=/\u0000|\uFFFD/g;function vl(e){return(typeof e=="string"?e:""+e).replace(ep,`
`).replace(tp,"")}function yr(e,t,n){if(t=vl(t),vl(e)!==t&&n)throw Error(C(425))}function Gr(){}var ks=null,Ss=null;function Ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,np=typeof clearTimeout=="function"?clearTimeout:void 0,yl=typeof Promise=="function"?Promise:void 0,rp=typeof queueMicrotask=="function"?queueMicrotask:typeof yl<"u"?function(e){return yl.resolve(null).then(e).catch(ip)}:js;function ip(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+xn,Xn="__reactProps$"+xn,nt="__reactContainer$"+xn,Ns="__reactEvents$"+xn,sp="__reactListeners$"+xn,op="__reactHandles$"+xn;function zt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wl(e);e!==null;){if(n=e[Ve])return n;e=wl(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[Ve]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function fi(e){return e[Xn]||null}var Es=[],Zt=-1;function Et(e){return{current:e}}function K(e){0>Zt||(e.current=Es[Zt],Es[Zt]=null,Zt--)}function U(e,t){Zt++,Es[Zt]=e.current,e.current=t}var jt={},he=Et(jt),we=Et(!1),Dt=jt;function un(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Kr(){K(we),K(he)}function kl(e,t,n){if(he.current!==jt)throw Error(C(168));U(he,t),U(we,n)}function cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Uc(e)||"Unknown",i));return X({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Dt=he.current,U(he,e),U(we,we.current),!0}function Sl(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=cu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,K(we),K(he),U(he,e)):K(we),U(we,n)}var Ye=null,gi=!1,Hi=!1;function du(e){Ye===null?Ye=[e]:Ye.push(e)}function lp(e){gi=!0,du(e)}function Ct(){if(!Hi&&Ye!==null){Hi=!0;var e=0,t=H;try{var n=Ye;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,gi=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),Ma(io,Ct),i}finally{H=t,Hi=!1}}return null}var Yt=[],Xt=0,Zr=null,Yr=0,ze=[],Ie=0,Mt=null,Je=1,qe="";function Tt(e,t){Yt[Xt++]=Yr,Yt[Xt++]=Zr,Zr=e,Yr=t}function pu(e,t,n){ze[Ie++]=Je,ze[Ie++]=qe,ze[Ie++]=Mt,Mt=e;var r=Je;e=qe;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var s=32-Be(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-Be(t)+i|n<<i|r,qe=s+e}else Je=1<<s|n<<i|r,qe=e}function fo(e){e.return!==null&&(Tt(e,1),pu(e,1,0))}function go(e){for(;e===Zr;)Zr=Yt[--Xt],Yt[Xt]=null,Yr=Yt[--Xt],Yt[Xt]=null;for(;e===Mt;)Mt=ze[--Ie],ze[Ie]=null,qe=ze[--Ie],ze[Ie]=null,Je=ze[--Ie],ze[Ie]=null}var Ne=null,je=null,Q=!1,Oe=null;function hu(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,je=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,je=null,!0):!1;default:return!1}}function Cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(Q){var t=je;if(t){var n=t;if(!Pl(e,t)){if(Cs(e))throw Error(C(418));t=vt(n.nextSibling);var r=Ne;t&&Pl(e,t)?hu(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Cs(e))throw Error(C(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function jl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function wr(e){if(e!==Ne)return!1;if(!Q)return jl(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ps(e.type,e.memoizedProps)),t&&(t=je)){if(Cs(e))throw fu(),Error(C(418));for(;t;)hu(e,t),t=vt(t.nextSibling)}if(jl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ne?vt(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=je;e;)e=vt(e.nextSibling)}function cn(){je=Ne=null,Q=!1}function mo(e){Oe===null?Oe=[e]:Oe.push(e)}var ap=st.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=i.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function kr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nl(e){var t=e._init;return t(e._payload)}function gu(e){function t(x,f){if(e){var h=x.deletions;h===null?(x.deletions=[f],x.flags|=16):h.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=St(x,f),x.index=0,x.sibling=null,x}function s(x,f,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<f?(x.flags|=2,f):h):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function c(x,f,h,o){return f===null||f.tag!==6?(f=Zi(h,x.mode,o),f.return=x,f):(f=i(f,h),f.return=x,f)}function d(x,f,h,o){var u=h.type;return u===Ut?S(x,f,h.props.children,o,h.key):f!==null&&(f.elementType===u||typeof u=="object"&&u!==null&&u.$$typeof===at&&Nl(u)===f.type)?(o=i(f,h.props),o.ref=Nn(x,f,h),o.return=x,o):(o=Fr(h.type,h.key,h.props,null,x.mode,o),o.ref=Nn(x,f,h),o.return=x,o)}function g(x,f,h,o){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Yi(h,x.mode,o),f.return=x,f):(f=i(f,h.children||[]),f.return=x,f)}function S(x,f,h,o,u){return f===null||f.tag!==7?(f=Rt(h,x.mode,o,u),f.return=x,f):(f=i(f,h),f.return=x,f)}function y(x,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Zi(""+f,x.mode,h),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cr:return h=Fr(f.type,f.key,f.props,null,x.mode,h),h.ref=Nn(x,null,f),h.return=x,h;case $t:return f=Yi(f,x.mode,h),f.return=x,f;case at:var o=f._init;return y(x,o(f._payload),h)}if(bn(f)||wn(f))return f=Rt(f,x.mode,h,null),f.return=x,f;kr(x,f)}return null}function w(x,f,h,o){var u=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return u!==null?null:c(x,f,""+h,o);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case cr:return h.key===u?d(x,f,h,o):null;case $t:return h.key===u?g(x,f,h,o):null;case at:return u=h._init,w(x,f,u(h._payload),o)}if(bn(h)||wn(h))return u!==null?null:S(x,f,h,o,null);kr(x,h)}return null}function P(x,f,h,o,u){if(typeof o=="string"&&o!==""||typeof o=="number")return x=x.get(h)||null,c(f,x,""+o,u);if(typeof o=="object"&&o!==null){switch(o.$$typeof){case cr:return x=x.get(o.key===null?h:o.key)||null,d(f,x,o,u);case $t:return x=x.get(o.key===null?h:o.key)||null,g(f,x,o,u);case at:var p=o._init;return P(x,f,h,p(o._payload),u)}if(bn(o)||wn(o))return x=x.get(h)||null,S(f,x,o,u,null);kr(f,o)}return null}function N(x,f,h,o){for(var u=null,p=null,v=f,m=f=0,k=null;v!==null&&m<h.length;m++){v.index>m?(k=v,v=null):k=v.sibling;var j=w(x,v,h[m],o);if(j===null){v===null&&(v=k);break}e&&v&&j.alternate===null&&t(x,v),f=s(j,f,m),p===null?u=j:p.sibling=j,p=j,v=k}if(m===h.length)return n(x,v),Q&&Tt(x,m),u;if(v===null){for(;m<h.length;m++)v=y(x,h[m],o),v!==null&&(f=s(v,f,m),p===null?u=v:p.sibling=v,p=v);return Q&&Tt(x,m),u}for(v=r(x,v);m<h.length;m++)k=P(v,x,m,h[m],o),k!==null&&(e&&k.alternate!==null&&v.delete(k.key===null?m:k.key),f=s(k,f,m),p===null?u=k:p.sibling=k,p=k);return e&&v.forEach(function(_){return t(x,_)}),Q&&Tt(x,m),u}function E(x,f,h,o){var u=wn(h);if(typeof u!="function")throw Error(C(150));if(h=u.call(h),h==null)throw Error(C(151));for(var p=u=null,v=f,m=f=0,k=null,j=h.next();v!==null&&!j.done;m++,j=h.next()){v.index>m?(k=v,v=null):k=v.sibling;var _=w(x,v,j.value,o);if(_===null){v===null&&(v=k);break}e&&v&&_.alternate===null&&t(x,v),f=s(_,f,m),p===null?u=_:p.sibling=_,p=_,v=k}if(j.done)return n(x,v),Q&&Tt(x,m),u;if(v===null){for(;!j.done;m++,j=h.next())j=y(x,j.value,o),j!==null&&(f=s(j,f,m),p===null?u=j:p.sibling=j,p=j);return Q&&Tt(x,m),u}for(v=r(x,v);!j.done;m++,j=h.next())j=P(v,x,m,j.value,o),j!==null&&(e&&j.alternate!==null&&v.delete(j.key===null?m:j.key),f=s(j,f,m),p===null?u=j:p.sibling=j,p=j);return e&&v.forEach(function(B){return t(x,B)}),Q&&Tt(x,m),u}function D(x,f,h,o){if(typeof h=="object"&&h!==null&&h.type===Ut&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case cr:e:{for(var u=h.key,p=f;p!==null;){if(p.key===u){if(u=h.type,u===Ut){if(p.tag===7){n(x,p.sibling),f=i(p,h.props.children),f.return=x,x=f;break e}}else if(p.elementType===u||typeof u=="object"&&u!==null&&u.$$typeof===at&&Nl(u)===p.type){n(x,p.sibling),f=i(p,h.props),f.ref=Nn(x,p,h),f.return=x,x=f;break e}n(x,p);break}else t(x,p);p=p.sibling}h.type===Ut?(f=Rt(h.props.children,x.mode,o,h.key),f.return=x,x=f):(o=Fr(h.type,h.key,h.props,null,x.mode,o),o.ref=Nn(x,f,h),o.return=x,x=o)}return l(x);case $t:e:{for(p=h.key;f!==null;){if(f.key===p)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(x,f.sibling),f=i(f,h.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=Yi(h,x.mode,o),f.return=x,x=f}return l(x);case at:return p=h._init,D(x,f,p(h._payload),o)}if(bn(h))return N(x,f,h,o);if(wn(h))return E(x,f,h,o);kr(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(x,f.sibling),f=i(f,h),f.return=x,x=f):(n(x,f),f=Zi(h,x.mode,o),f.return=x,x=f),l(x)):n(x,f)}return D}var dn=gu(!0),mu=gu(!1),Xr=Et(null),Jr=null,Jt=null,xo=null;function vo(){xo=Jt=Jr=null}function yo(e){var t=Xr.current;K(Xr),e._currentValue=t}function bs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){Jr=e,xo=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(xo!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(Jr===null)throw Error(C(308));Jt=e,Jr.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var It=null;function wo(e){It===null?It=[e]:It.push(e)}function xu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wo(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,wo(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function Ir(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}function El(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qr(e,t,n,r){var i=e.updateQueue;ut=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,g=d.next;d.next=null,l===null?s=g:l.next=g,l=d;var S=e.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==l&&(c===null?S.firstBaseUpdate=g:c.next=g,S.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;l=0,S=g=d=null,c=s;do{var w=c.lane,P=c.eventTime;if((r&w)===w){S!==null&&(S=S.next={eventTime:P,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var N=e,E=c;switch(w=t,P=n,E.tag){case 1:if(N=E.payload,typeof N=="function"){y=N.call(P,y,w);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=E.payload,w=typeof N=="function"?N.call(P,y,w):N,w==null)break e;y=X({},y,w);break e;case 2:ut=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[c]:w.push(c))}else P={eventTime:P,lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(g=S=P,d=y):S=S.next=P,l|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;w=c,c=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(S===null&&(d=y),i.baseState=d,i.firstBaseUpdate=g,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);At|=l,e.lanes=l,e.memoizedState=y}}function Cl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var ar={},Ke=Et(ar),Jn=Et(ar),qn=Et(ar);function Lt(e){if(e===ar)throw Error(C(174));return e}function So(e,t){switch(U(qn,t),U(Jn,e),U(Ke,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=us(t,e)}K(Ke),U(Ke,t)}function pn(){K(Ke),K(Jn),K(qn)}function yu(e){Lt(qn.current);var t=Lt(Ke.current),n=us(t,e.type);t!==n&&(U(Jn,e),U(Ke,n))}function Po(e){Jn.current===e&&(K(Ke),K(Jn))}var Z=Et(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function jo(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Lr=st.ReactCurrentDispatcher,Ui=st.ReactCurrentBatchConfig,Ft=0,Y=null,ne=null,se=null,ti=!1,Fn=!1,er=0,up=0;function ce(){throw Error(C(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,s){if(Ft=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?hp:fp,e=n(r,i),Fn){s=0;do{if(Fn=!1,er=0,25<=s)throw Error(C(301));s+=1,se=ne=null,t.updateQueue=null,Lr.current=gp,e=n(r,i)}while(Fn)}if(Lr.current=ni,t=ne!==null&&ne.next!==null,Ft=0,se=ne=Y=null,ti=!1,t)throw Error(C(300));return e}function Co(){var e=er!==0;return er=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Y.memoizedState=se=e:se=se.next=e,se}function De(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=se===null?Y.memoizedState:se.next;if(t!==null)se=t,ne=e;else{if(e===null)throw Error(C(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?Y.memoizedState=se=e:se=se.next=e}return se}function tr(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=l=null,d=null,g=s;do{var S=g.lane;if((Ft&S)===S)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var y={lane:S,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(c=d=y,l=r):d=d.next=y,Y.lanes|=S,At|=S}g=g.next}while(g!==null&&g!==s);d===null?l=r:d.next=c,He(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,At|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gi(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);He(s,t.memoizedState)||(ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function wu(){}function ku(e,t){var n=Y,r=De(),i=t(),s=!He(r.memoizedState,i);if(s&&(r.memoizedState=i,ye=!0),r=r.queue,To(ju.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,nr(9,Pu.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(C(349));Ft&30||Su(n,t,i)}return i}function Su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pu(e,t,n,r){t.value=n,t.getSnapshot=r,Nu(t)&&Eu(e)}function ju(e,t,n){return n(function(){Nu(t)&&Eu(e)})}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Eu(e){var t=rt(e,1);t!==null&&We(t,e,1,-1)}function Tl(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=pp.bind(null,Y,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cu(){return De().memoizedState}function _r(e,t,n,r){var i=Ue();Y.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function mi(e,t,n,r){var i=De();r=r===void 0?null:r;var s=void 0;if(ne!==null){var l=ne.memoizedState;if(s=l.destroy,r!==null&&No(r,l.deps)){i.memoizedState=nr(t,n,s,r);return}}Y.flags|=e,i.memoizedState=nr(1|t,n,s,r)}function bl(e,t){return _r(8390656,8,e,t)}function To(e,t){return mi(2048,8,e,t)}function Tu(e,t){return mi(4,2,e,t)}function bu(e,t){return mi(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,n){return n=n!=null?n.concat([e]):null,mi(4,4,zu.bind(null,t,e),n)}function bo(){}function Lu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _u(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ru(e,t,n){return Ft&21?(He(n,t)||(n=Oa(),Y.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function cp(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ui.transition;Ui.transition={};try{e(!1),t()}finally{H=n,Ui.transition=r}}function Du(){return De().memoizedState}function dp(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))Fu(t,n);else if(n=xu(e,t,n,r),n!==null){var i=ge();We(n,e,r,i),Au(n,t,r)}}function pp(e,t,n){var r=kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Fu(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(i.hasEagerState=!0,i.eagerState=c,He(c,l)){var d=t.interleaved;d===null?(i.next=i,wo(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=xu(e,t,i,r),n!==null&&(i=ge(),We(n,e,r,i),Au(n,t,r))}}function Mu(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Fu(e,t){Fn=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Au(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}var ni={readContext:Re,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},hp={readContext:Re,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:bl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Tl,useDebugValue:bo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Tl(!1),t=e[0];return e=cp.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Ue();if(Q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),oe===null)throw Error(C(349));Ft&30||Su(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,bl(ju.bind(null,r,s,e),[e]),r.flags|=2048,nr(9,Pu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ue(),t=oe.identifierPrefix;if(Q){var n=qe,r=Je;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:Re,useCallback:Lu,useContext:Re,useEffect:To,useImperativeHandle:Iu,useInsertionEffect:Tu,useLayoutEffect:bu,useMemo:_u,useReducer:Vi,useRef:Cu,useState:function(){return Vi(tr)},useDebugValue:bo,useDeferredValue:function(e){var t=De();return Ru(t,ne.memoizedState,e)},useTransition:function(){var e=Vi(tr)[0],t=De().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ku,useId:Du,unstable_isNewReconciler:!1},gp={readContext:Re,useCallback:Lu,useContext:Re,useEffect:To,useImperativeHandle:Iu,useInsertionEffect:Tu,useLayoutEffect:bu,useMemo:_u,useReducer:Gi,useRef:Cu,useState:function(){return Gi(tr)},useDebugValue:bo,useDeferredValue:function(e){var t=De();return ne===null?t.memoizedState=e:Ru(t,ne.memoizedState,e)},useTransition:function(){var e=Gi(tr)[0],t=De().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ku,useId:Du,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=kt(e),s=et(r,i);s.payload=t,n!=null&&(s.callback=n),t=yt(e,s,i),t!==null&&(We(t,e,i,r),Ir(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=kt(e),s=et(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=yt(e,s,i),t!==null&&(We(t,e,i,r),Ir(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=kt(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=yt(e,i,r),t!==null&&(We(t,e,r,n),Ir(t,e,r))}};function zl(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(i,s):!0}function Ou(e,t,n){var r=!1,i=jt,s=t.contextType;return typeof s=="object"&&s!==null?s=Re(s):(i=ke(t)?Dt:he.current,r=t.contextTypes,s=(r=r!=null)?un(e,i):jt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Il(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ko(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Re(s):(s=ke(t)?Dt:he.current,i.context=un(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(zs(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xi.enqueueReplaceState(i,i.state,null),qr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Bu(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ii||(ii=!0,Hs=r),Ls(e,t)},n}function Wu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ls(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ls(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ll(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function _l(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var xp=st.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?mu(t,null,n,r):dn(t,e.child,n,r)}function Dl(e,t,n,r,i){n=n.render;var s=t.ref;return on(t,i),r=Eo(e,t,n,r,s,i),n=Co(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(Q&&n&&fo(t),t.flags|=1,fe(e,t,r,i),t.child)}function Ml(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Fo(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Hu(e,t,s,r,i)):(e=Fr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(l,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=St(s,r),e.ref=t.ref,e.return=t,t.child=e}function Hu(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Qn(s,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,it(e,t,i)}return _s(e,t,n,r,i)}function $u(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(en,Pe),Pe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(en,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(en,Pe),Pe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,U(en,Pe),Pe|=r;return fe(e,t,i,n),t.child}function Uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _s(e,t,n,r,i){var s=ke(n)?Dt:he.current;return s=un(t,s),on(t,i),n=Eo(e,t,n,r,s,i),r=Co(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(Q&&r&&fo(t),t.flags|=1,fe(e,t,n,i),t.child)}function Fl(e,t,n,r,i){if(ke(n)){var s=!0;Qr(t)}else s=!1;if(on(t,i),t.stateNode===null)Rr(e,t),Ou(t,n,r),Is(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=Re(g):(g=ke(n)?Dt:he.current,g=un(t,g));var S=n.getDerivedStateFromProps,y=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==g)&&Il(t,l,r,g),ut=!1;var w=t.memoizedState;l.state=w,qr(t,r,l,i),d=t.memoizedState,c!==r||w!==d||we.current||ut?(typeof S=="function"&&(zs(t,n,S,r),d=t.memoizedState),(c=ut||zl(t,n,c,r,w,d,g))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=g,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,vu(e,t),c=t.memoizedProps,g=t.type===t.elementType?c:Fe(t.type,c),l.props=g,y=t.pendingProps,w=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Re(d):(d=ke(n)?Dt:he.current,d=un(t,d));var P=n.getDerivedStateFromProps;(S=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==y||w!==d)&&Il(t,l,r,d),ut=!1,w=t.memoizedState,l.state=w,qr(t,r,l,i);var N=t.memoizedState;c!==y||w!==N||we.current||ut?(typeof P=="function"&&(zs(t,n,P,r),N=t.memoizedState),(g=ut||zl(t,n,g,r,w,N,d)||!1)?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,N,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,N,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),l.props=r,l.state=N,l.context=d,r=g):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Rs(e,t,n,r,s,i)}function Rs(e,t,n,r,i,s){Uu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Sl(t,n,!1),it(e,t,s);r=t.stateNode,xp.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dn(t,e.child,null,s),t.child=dn(t,null,c,s)):fe(e,t,c,s),t.memoizedState=r.state,i&&Sl(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?kl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kl(e,t.context,!1),So(e,t.containerInfo)}function Al(e,t,n,r,i){return cn(),mo(i),t.flags|=256,fe(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,t,n){var r=t.pendingProps,i=Z.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Z,i&1),e===null)return Ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=wi(l,r,0,null),e=Rt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ms(n),t.memoizedState=Ds,e):zo(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return vp(e,t,l,r,c,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=St(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=St(c,s):(s=Rt(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return s=e.child,e=s.sibling,r=St(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zo(e,t){return t=wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sr(e,t,n,r){return r!==null&&mo(r),dn(t,e.child,null,n),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(C(422))),Sr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=wi({mode:"visible",children:r.children},i,0,null),s=Rt(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&dn(t,e.child,null,l),t.child.memoizedState=Ms(l),t.memoizedState=Ds,s);if(!(t.mode&1))return Sr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(C(419)),r=Ki(s,r,void 0),Sr(e,t,l,r)}if(c=(l&e.childLanes)!==0,ye||c){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rt(e,i),We(r,e,i,-1))}return Mo(),r=Ki(Error(C(421))),Sr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ip.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,je=vt(i.nextSibling),Ne=t,Q=!0,Oe=null,e!==null&&(ze[Ie++]=Je,ze[Ie++]=qe,ze[Ie++]=Mt,Je=e.id,qe=e.overflow,Mt=t),t=zo(t,r.children),t.flags|=4096,t)}function Ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bs(e.return,t,n)}function Qi(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ku(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(fe(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ol(e,n,t);else if(e.tag===19)Ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qi(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qi(t,!0,n,null,s);break;case"together":Qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yp(e,t,n){switch(t.tag){case 3:Vu(t),cn();break;case 5:yu(t);break;case 1:ke(t.type)&&Qr(t);break;case 4:So(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Xr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Gu(e,t,n):(U(Z,Z.current&1),e=it(e,t,n),e!==null?e.sibling:null);U(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ku(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return it(e,t,n)}var Qu,Fs,Zu,Yu;Qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fs=function(){};Zu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(Ke.current);var s=null;switch(n){case"input":i=ss(e,i),r=ss(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=as(e,i),r=as(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}cs(n,r);var l;n=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var c=i[g];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Wn.hasOwnProperty(g)?s||(s=[]):(s=s||[]).push(g,null));for(g in r){var d=r[g];if(c=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&d!==c&&(d!=null||c!=null))if(g==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&G("scroll",e),s||c===d||(s=[])):(s=s||[]).push(g,d))}n&&(s=s||[]).push("style",n);var g=s;(t.updateQueue=g)&&(t.flags|=4)}};Yu=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(go(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Kr(),de(t),null;case 3:return r=t.stateNode,pn(),K(we),K(he),jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Vs(Oe),Oe=null))),Fs(e,t),de(t),null;case 5:Po(t);var i=Lt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return de(t),null}if(e=Lt(Ke.current),wr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ve]=t,r[Xn]=s,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<In.length;i++)G(In[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Qo(r,s),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},G("invalid",r);break;case"textarea":Yo(r,s),G("invalid",r)}cs(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&yr(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&yr(r.textContent,c,e),i=["children",""+c]):Wn.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":dr(r),Zo(r,s,!0);break;case"textarea":dr(r),Xo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ja(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ve]=t,e[Xn]=r,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(l=ds(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<In.length;i++)G(In[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":Qo(e,r),i=ss(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),G("invalid",e);break;case"textarea":Yo(e,r),i=as(e,r),G("invalid",e);break;default:i=r}cs(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Ca(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Na(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Hn(e,d):typeof d=="number"&&Hn(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wn.hasOwnProperty(s)?d!=null&&s==="onScroll"&&G("scroll",e):d!=null&&qs(e,s,d,l))}switch(n){case"input":dr(e),Zo(e,r,!1);break;case"textarea":dr(e),Xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?tn(e,!!r.multiple,s,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Yu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Lt(qn.current),Lt(Ke.current),wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(s=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return de(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&t.mode&1&&!(t.flags&128))fu(),cn(),t.flags|=98560,s=!1;else if(s=wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ve]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),s=!1}else Oe!==null&&(Vs(Oe),Oe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?re===0&&(re=3):Mo())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return pn(),Fs(e,t),e===null&&Zn(t.stateNode.containerInfo),de(t),null;case 10:return yo(t.type._context),de(t),null;case 17:return ke(t.type)&&Kr(),de(t),null;case 19:if(K(Z),s=t.memoizedState,s===null)return de(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)En(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ei(e),l!==null){for(t.flags|=128,En(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Z,Z.current&1|2),t.child}e=e.sibling}s.tail!==null&&ee()>fn&&(t.flags|=128,r=!0,En(s,!1),t.lanes=4194304)}else{if(!r)if(e=ei(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Q)return de(t),null}else 2*ee()-s.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,En(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ee(),t.sibling=null,n=Z.current,U(Z,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Do(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function kp(e,t){switch(go(t),t.tag){case 1:return ke(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),K(we),K(he),jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Po(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return pn(),null;case 10:return yo(t.type._context),null;case 22:case 23:return Do(),null;case 24:return null;default:return null}}var Pr=!1,pe=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,I=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function As(e,t,n){try{n()}catch(r){J(e,t,r)}}var Bl=!1;function Pp(e,t){if(ks=$r,e=tu(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,g=0,S=0,y=e,w=null;t:for(;;){for(var P;y!==n||i!==0&&y.nodeType!==3||(c=l+i),y!==s||r!==0&&y.nodeType!==3||(d=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(P=y.firstChild)!==null;)w=y,y=P;for(;;){if(y===e)break t;if(w===n&&++g===i&&(c=l),w===s&&++S===r&&(d=l),(P=y.nextSibling)!==null)break;y=w,w=y.parentNode}y=P}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ss={focusedElem:e,selectionRange:n},$r=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var E=N.memoizedProps,D=N.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?E:Fe(t.type,E),D);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(o){J(t,t.return,o)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return N=Bl,Bl=!1,N}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&As(t,n,s)}i=i.next}while(i!==r)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Os(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Xn],delete t[Ns],delete t[sp],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ju(e){return e.tag===5||e.tag===3||e.tag===4}function Wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,t,n),e=e.sibling;e!==null;)Bs(e,t,n),e=e.sibling}function Ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ws(e,t,n),e=e.sibling;e!==null;)Ws(e,t,n),e=e.sibling}var le=null,Ae=!1;function lt(e,t,n){for(n=n.child;n!==null;)qu(e,t,n),n=n.sibling}function qu(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ci,n)}catch{}switch(n.tag){case 5:pe||qt(n,t);case 6:var r=le,i=Ae;le=null,lt(e,t,n),le=r,Ae=i,le!==null&&(Ae?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ae?(e=le,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Gn(e)):Wi(le,n.stateNode));break;case 4:r=le,i=Ae,le=n.stateNode.containerInfo,Ae=!0,lt(e,t,n),le=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&As(n,t,l),i=i.next}while(i!==r)}lt(e,t,n);break;case 1:if(!pe&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){J(n,t,c)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,lt(e,t,n),pe=r):lt(e,t,n);break;default:lt(e,t,n)}}function Hl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sp),t.forEach(function(r){var i=Lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:le=c.stateNode,Ae=!1;break e;case 3:le=c.stateNode.containerInfo,Ae=!0;break e;case 4:le=c.stateNode.containerInfo,Ae=!0;break e}c=c.return}if(le===null)throw Error(C(160));qu(s,l,i),le=null,Ae=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(g){J(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ec(t,e),t=t.sibling}function ec(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),$e(e),r&4){try{An(3,e,e.return),vi(3,e)}catch(E){J(e,e.return,E)}try{An(5,e,e.return)}catch(E){J(e,e.return,E)}}break;case 1:Me(t,e),$e(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Me(t,e),$e(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(E){J(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Sa(i,s),ds(c,l);var g=ds(c,s);for(l=0;l<d.length;l+=2){var S=d[l],y=d[l+1];S==="style"?Ca(i,y):S==="dangerouslySetInnerHTML"?Na(i,y):S==="children"?Hn(i,y):qs(i,S,y,g)}switch(c){case"input":os(i,s);break;case"textarea":Pa(i,s);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var P=s.value;P!=null?tn(i,!!s.multiple,P,!1):w!==!!s.multiple&&(s.defaultValue!=null?tn(i,!!s.multiple,s.defaultValue,!0):tn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xn]=s}catch(E){J(e,e.return,E)}}break;case 6:if(Me(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(E){J(e,e.return,E)}}break;case 3:if(Me(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(E){J(e,e.return,E)}break;case 4:Me(t,e),$e(e);break;case 13:Me(t,e),$e(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_o=ee())),r&4&&Hl(e);break;case 22:if(S=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(g=pe)||S,Me(t,e),pe=g):Me(t,e),$e(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!S&&e.mode&1)for(I=e,S=e.child;S!==null;){for(y=I=S;I!==null;){switch(w=I,P=w.child,w.tag){case 0:case 11:case 14:case 15:An(4,w,w.return);break;case 1:qt(w,w.return);var N=w.stateNode;if(typeof N.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(E){J(r,n,E)}}break;case 5:qt(w,w.return);break;case 22:if(w.memoizedState!==null){Ul(y);continue}}P!==null?(P.return=w,I=P):Ul(y)}S=S.sibling}e:for(S=null,y=e;;){if(y.tag===5){if(S===null){S=y;try{i=y.stateNode,g?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Ea("display",l))}catch(E){J(e,e.return,E)}}}else if(y.tag===6){if(S===null)try{y.stateNode.nodeValue=g?"":y.memoizedProps}catch(E){J(e,e.return,E)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;S===y&&(S=null),y=y.return}S===y&&(S=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Me(t,e),$e(e),r&4&&Hl(e);break;case 21:break;default:Me(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ju(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var s=Wl(e);Ws(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Wl(e);Bs(e,c,l);break;default:throw Error(C(161))}}catch(d){J(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){I=e,tc(e)}function tc(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pr;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||pe;c=Pr;var g=pe;if(Pr=l,(pe=d)&&!g)for(I=i;I!==null;)l=I,d=l.child,l.tag===22&&l.memoizedState!==null?Vl(i):d!==null?(d.return=l,I=d):Vl(i);for(;s!==null;)I=s,tc(s),s=s.sibling;I=i,Pr=c,pe=g}$l(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):$l(e)}}function $l(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||vi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Cl(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cl(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var S=g.memoizedState;if(S!==null){var y=S.dehydrated;y!==null&&Gn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}pe||t.flags&512&&Os(t)}catch(w){J(t,t.return,w)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ul(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Vl(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vi(4,t)}catch(d){J(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){J(t,i,d)}}var s=t.return;try{Os(t)}catch(d){J(t,s,d)}break;case 5:var l=t.return;try{Os(t)}catch(d){J(t,l,d)}}}catch(d){J(t,t.return,d)}if(t===e){I=null;break}var c=t.sibling;if(c!==null){c.return=t.return,I=c;break}I=t.return}}var Np=Math.ceil,ri=st.ReactCurrentDispatcher,Io=st.ReactCurrentOwner,_e=st.ReactCurrentBatchConfig,O=0,oe=null,te=null,ae=0,Pe=0,en=Et(0),re=0,rr=null,At=0,yi=0,Lo=0,On=null,ve=null,_o=0,fn=1/0,Ze=null,ii=!1,Hs=null,wt=null,jr=!1,ft=null,si=0,Bn=0,$s=null,Dr=-1,Mr=0;function ge(){return O&6?ee():Dr!==-1?Dr:Dr=ee()}function kt(e){return e.mode&1?O&2&&ae!==0?ae&-ae:ap.transition!==null?(Mr===0&&(Mr=Oa()),Mr):(e=H,e!==0||(e=window.event,e=e===void 0?16:Ga(e.type)),e):1}function We(e,t,n,r){if(50<Bn)throw Bn=0,$s=null,Error(C(185));sr(e,n,r),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(yi|=n),re===4&&pt(e,ae)),Se(e,r),n===1&&O===0&&!(t.mode&1)&&(fn=ee()+500,gi&&Ct()))}function Se(e,t){var n=e.callbackNode;ad(e,t);var r=Hr(e,e===oe?ae:0);if(r===0)n!==null&&el(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&el(n),t===1)e.tag===0?lp(Gl.bind(null,e)):du(Gl.bind(null,e)),rp(function(){!(O&6)&&Ct()}),n=null;else{switch(Ba(r)){case 1:n=io;break;case 4:n=Fa;break;case 16:n=Wr;break;case 536870912:n=Aa;break;default:n=Wr}n=uc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(Dr=-1,Mr=0,O&6)throw Error(C(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Hr(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oi(e,r);else{t=r;var i=O;O|=2;var s=ic();(oe!==e||ae!==t)&&(Ze=null,fn=ee()+500,_t(e,t));do try{Tp();break}catch(c){rc(e,c)}while(!0);vo(),ri.current=s,O=i,te!==null?t=0:(oe=null,ae=0,t=re)}if(t!==0){if(t===2&&(i=ms(e),i!==0&&(r=i,t=Us(e,i))),t===1)throw n=rr,_t(e,0),pt(e,r),Se(e,ee()),n;if(t===6)pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ep(i)&&(t=oi(e,r),t===2&&(s=ms(e),s!==0&&(r=s,t=Us(e,s))),t===1))throw n=rr,_t(e,0),pt(e,r),Se(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:bt(e,ve,Ze);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=_o+500-ee(),10<t)){if(Hr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=js(bt.bind(null,e,ve,Ze),t);break}bt(e,ve,Ze);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Be(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=js(bt.bind(null,e,ve,Ze),r);break}bt(e,ve,Ze);break;case 5:bt(e,ve,Ze);break;default:throw Error(C(329))}}}return Se(e,ee()),e.callbackNode===n?nc.bind(null,e):null}function Us(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=oi(e,t),e!==2&&(t=ve,ve=n,t!==null&&Vs(t)),e}function Vs(e){ve===null?ve=e:ve.push.apply(ve,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!He(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Lo,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Gl(e){if(O&6)throw Error(C(327));ln();var t=Hr(e,0);if(!(t&1))return Se(e,ee()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=ms(e);r!==0&&(t=r,n=Us(e,r))}if(n===1)throw n=rr,_t(e,0),pt(e,t),Se(e,ee()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ve,Ze),Se(e,ee()),null}function Ro(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(fn=ee()+500,gi&&Ct())}}function Ot(e){ft!==null&&ft.tag===0&&!(O&6)&&ln();var t=O;O|=1;var n=_e.transition,r=H;try{if(_e.transition=null,H=1,e)return e()}finally{H=r,_e.transition=n,O=t,!(O&6)&&Ct()}}function Do(){Pe=en.current,K(en)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,np(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(go(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:pn(),K(we),K(he),jo();break;case 5:Po(r);break;case 4:pn();break;case 13:K(Z);break;case 19:K(Z);break;case 10:yo(r.type._context);break;case 22:case 23:Do()}n=n.return}if(oe=e,te=e=St(e.current,null),ae=Pe=t,re=0,rr=null,Lo=yi=At=0,ve=On=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}It=null}return e}function rc(e,t){do{var n=te;try{if(vo(),Lr.current=ni,ti){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ti=!1}if(Ft=0,se=ne=Y=null,Fn=!1,er=0,Io.current=null,n===null||n.return===null){re=1,rr=t,te=null;break}e:{var s=e,l=n.return,c=n,d=t;if(t=ae,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,S=c,y=S.tag;if(!(S.mode&1)&&(y===0||y===11||y===15)){var w=S.alternate;w?(S.updateQueue=w.updateQueue,S.memoizedState=w.memoizedState,S.lanes=w.lanes):(S.updateQueue=null,S.memoizedState=null)}var P=_l(l);if(P!==null){P.flags&=-257,Rl(P,l,c,s,t),P.mode&1&&Ll(s,g,t),t=P,d=g;var N=t.updateQueue;if(N===null){var E=new Set;E.add(d),t.updateQueue=E}else N.add(d);break e}else{if(!(t&1)){Ll(s,g,t),Mo();break e}d=Error(C(426))}}else if(Q&&c.mode&1){var D=_l(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Rl(D,l,c,s,t),mo(hn(d,c));break e}}s=d=hn(d,c),re!==4&&(re=2),On===null?On=[s]:On.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Bu(s,d,t);El(s,x);break e;case 1:c=d;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wt===null||!wt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var o=Wu(s,c,t);El(s,o);break e}}s=s.return}while(s!==null)}oc(n)}catch(u){t=u,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function ic(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Mo(){(re===0||re===3||re===2)&&(re=4),oe===null||!(At&268435455)&&!(yi&268435455)||pt(oe,ae)}function oi(e,t){var n=O;O|=2;var r=ic();(oe!==e||ae!==t)&&(Ze=null,_t(e,t));do try{Cp();break}catch(i){rc(e,i)}while(!0);if(vo(),O=n,ri.current=r,te!==null)throw Error(C(261));return oe=null,ae=0,re}function Cp(){for(;te!==null;)sc(te)}function Tp(){for(;te!==null&&!qc();)sc(te)}function sc(e){var t=ac(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?oc(e):te=t,Io.current=null}function oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=wp(n,t,Pe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function bt(e,t,n){var r=H,i=_e.transition;try{_e.transition=null,H=1,bp(e,t,n,r)}finally{_e.transition=i,H=r}return null}function bp(e,t,n,r){do ln();while(ft!==null);if(O&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ud(e,s),e===oe&&(te=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,uc(Wr,function(){return ln(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_e.transition,_e.transition=null;var l=H;H=1;var c=O;O|=4,Io.current=null,Pp(e,n),ec(n,e),Zd(Ss),$r=!!ks,Ss=ks=null,e.current=n,jp(n),ed(),O=c,H=l,_e.transition=s}else e.current=n;if(jr&&(jr=!1,ft=e,si=i),s=e.pendingLanes,s===0&&(wt=null),rd(n.stateNode),Se(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ii)throw ii=!1,e=Hs,Hs=null,e;return si&1&&e.tag!==0&&ln(),s=e.pendingLanes,s&1?e===$s?Bn++:(Bn=0,$s=e):Bn=0,Ct(),null}function ln(){if(ft!==null){var e=Ba(si),t=_e.transition,n=H;try{if(_e.transition=null,H=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,si=0,O&6)throw Error(C(331));var i=O;for(O|=4,I=e.current;I!==null;){var s=I,l=s.child;if(I.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var g=c[d];for(I=g;I!==null;){var S=I;switch(S.tag){case 0:case 11:case 15:An(8,S,s)}var y=S.child;if(y!==null)y.return=S,I=y;else for(;I!==null;){S=I;var w=S.sibling,P=S.return;if(Xu(S),S===g){I=null;break}if(w!==null){w.return=P,I=w;break}I=P}}}var N=s.alternate;if(N!==null){var E=N.child;if(E!==null){N.child=null;do{var D=E.sibling;E.sibling=null,E=D}while(E!==null)}}I=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,I=l;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:An(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,I=x;break e}I=s.return}}var f=e.current;for(I=f;I!==null;){l=I;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,I=h;else e:for(l=f;I!==null;){if(c=I,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:vi(9,c)}}catch(u){J(c,c.return,u)}if(c===l){I=null;break e}var o=c.sibling;if(o!==null){o.return=c.return,I=o;break e}I=c.return}}if(O=i,Ct(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{H=n,_e.transition=t}}return!1}function Kl(e,t,n){t=hn(n,t),t=Bu(e,t,1),e=yt(e,t,1),t=ge(),e!==null&&(sr(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)Kl(e,e,n);else for(;t!==null;){if(t.tag===3){Kl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=hn(n,e),e=Wu(t,e,1),t=yt(t,e,1),e=ge(),t!==null&&(sr(t,1,e),Se(t,e));break}}t=t.return}}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>ee()-_o?_t(e,0):Lo|=n),Se(e,t)}function lc(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=ge();e=rt(e,t),e!==null&&(sr(e,t,n),Se(e,n))}function Ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lc(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),lc(e,n)}var ac;ac=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,yp(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Q&&t.flags&1048576&&pu(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rr(e,t),e=t.pendingProps;var i=un(t,he.current);on(t,n),i=Eo(null,t,r,e,i,n);var s=Co();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(s=!0,Qr(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ko(t),i.updater=xi,t.stateNode=i,i._reactInternals=t,Is(t,r,e,n),t=Rs(null,t,r,!0,s,n)):(t.tag=0,Q&&s&&fo(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rp(r),e=Fe(r,e),i){case 0:t=_s(null,t,r,e,n);break e;case 1:t=Fl(null,t,r,e,n);break e;case 11:t=Dl(null,t,r,e,n);break e;case 14:t=Ml(null,t,r,Fe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),_s(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Fl(e,t,r,i,n);case 3:e:{if(Vu(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,vu(e,t),qr(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=hn(Error(C(423)),t),t=Al(e,t,r,n,i);break e}else if(r!==i){i=hn(Error(C(424)),t),t=Al(e,t,r,n,i);break e}else for(je=vt(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,Oe=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===i){t=it(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return yu(t),e===null&&Ts(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Ps(r,i)?l=null:s!==null&&Ps(r,s)&&(t.flags|=32),Uu(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&Ts(t),null;case 13:return Gu(e,t,n);case 4:return So(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Dl(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,U(Xr,r._currentValue),r._currentValue=l,s!==null)if(He(s.value,l)){if(s.children===i.children&&!we.current){t=it(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=et(-1,n&-n),d.tag=2;var g=s.updateQueue;if(g!==null){g=g.shared;var S=g.pending;S===null?d.next=d:(d.next=S.next,S.next=d),g.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),bs(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(C(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),bs(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=Re(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),Ml(e,t,r,i,n);case 15:return Hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Rr(e,t),t.tag=1,ke(r)?(e=!0,Qr(t)):e=!1,on(t,n),Ou(t,r,i),Is(t,r,i,n),Rs(null,t,r,!0,e,n);case 19:return Ku(e,t,n);case 22:return $u(e,t,n)}throw Error(C(156,t.tag))};function uc(e,t){return Ma(e,t)}function _p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new _p(e,t,n,r)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rp(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===to)return 11;if(e===no)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Fo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ut:return Rt(n.children,i,s,t);case eo:l=8,i|=8;break;case ts:return e=Le(12,n,t,i|2),e.elementType=ts,e.lanes=s,e;case ns:return e=Le(13,n,t,i),e.elementType=ns,e.lanes=s,e;case rs:return e=Le(19,n,t,i),e.elementType=rs,e.lanes=s,e;case ya:return wi(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xa:l=10;break e;case va:l=9;break e;case to:l=11;break e;case no:l=14;break e;case at:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Le(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Rt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function wi(e,t,n,r){return e=Le(22,e,r,t),e.elementType=ya,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Yi(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ao(e,t,n,r,i,s,l,c,d){return e=new Dp(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Le(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(s),e}function Mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cc(e){if(!e)return jt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ke(n))return cu(e,n,t)}return t}function dc(e,t,n,r,i,s,l,c,d){return e=Ao(n,r,!0,e,i,s,l,c,d),e.context=cc(null),n=e.current,r=ge(),i=kt(n),s=et(r,i),s.callback=t??null,yt(n,s,i),e.current.lanes=i,sr(e,i,r),Se(e,r),e}function ki(e,t,n,r){var i=t.current,s=ge(),l=kt(i);return n=cc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(i,t,l),e!==null&&(We(e,i,l,s),Ir(e,i,l)),l}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oo(e,t){Ql(e,t),(e=e.alternate)&&Ql(e,t)}function Fp(){return null}var pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}Si.prototype.render=Bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));ki(e,t,null,null)};Si.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){ki(null,e,null,null)}),t[nt]=null}};function Si(e){this._internalRoot=e}Si.prototype.unstable_scheduleHydration=function(e){if(e){var t=$a();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Va(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zl(){}function Ap(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var g=li(l);s.call(g)}}var l=dc(t,r,e,0,null,!1,!1,"",Zl);return e._reactRootContainer=l,e[nt]=l.current,Zn(e.nodeType===8?e.parentNode:e),Ot(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var g=li(d);c.call(g)}}var d=Ao(e,0,!1,null,null,!1,!1,"",Zl);return e._reactRootContainer=d,e[nt]=d.current,Zn(e.nodeType===8?e.parentNode:e),Ot(function(){ki(t,d,n,r)}),d}function ji(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var c=i;i=function(){var d=li(l);c.call(d)}}ki(t,l,e,i)}else l=Ap(n,t,e,i,r);return li(l)}Wa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(so(t,n|1),Se(t,ee()),!(O&6)&&(fn=ee()+500,Ct()))}break;case 13:Ot(function(){var r=rt(e,1);if(r!==null){var i=ge();We(r,e,1,i)}}),Oo(e,1)}};oo=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ge();We(t,e,134217728,n)}Oo(e,134217728)}};Ha=function(e){if(e.tag===13){var t=kt(e),n=rt(e,t);if(n!==null){var r=ge();We(n,e,t,r)}Oo(e,t)}};$a=function(){return H};Ua=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};hs=function(e,t,n){switch(t){case"input":if(os(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fi(r);if(!i)throw Error(C(90));ka(r),os(r,i)}}}break;case"textarea":Pa(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};za=Ro;Ia=Ot;var Op={usingClientEntryPoint:!1,Events:[lr,Qt,fi,Ta,ba,Ro]},Cn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ra(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{ci=Nr.inject(Bp),Ge=Nr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(t))throw Error(C(200));return Mp(e,t,null,n)};Ce.createRoot=function(e,t){if(!Wo(e))throw Error(C(299));var n=!1,r="",i=pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ao(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,Zn(e.nodeType===8?e.parentNode:e),new Bo(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ra(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ot(e)};Ce.hydrate=function(e,t,n){if(!Pi(t))throw Error(C(200));return ji(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Wo(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=pc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=dc(t,null,e,1,n??null,i,!1,s,l),e[nt]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Si(t)};Ce.render=function(e,t,n){if(!Pi(t))throw Error(C(200));return ji(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(C(40));return e._reactRootContainer?(Ot(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ro;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ji(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hc)}catch(e){console.error(e)}}hc(),ha.exports=Ce;var Wp=ha.exports,Yl=Wp;qi.createRoot=Yl.createRoot,qi.hydrateRoot=Yl.hydrateRoot;const Hp="/KM_OS/",Xl=e=>`${Hp}assets/${e}`,ai=[{id:"1",title:"Schmuggelvorrwürfe am Porto Vecchia by Adonios il bugiardo",category:"Titelstory",date:"03.05.1923",image:Xl("Port Vecchia.png"),excerpt:"Am Hafen des Port Vecchia wurden bei den Waren der Tristo Mietitore leuchtende Flaschen gefunden.",content:["Am regnerischen Abend des 24. Aprils lief im Hafen von Port Vecchia das berühmte Handels Schiff Tristo Mietitore ein. Beim Entladen der finsten Mode und der exotischen Speisen wurden jedoch nicht nur Luxusgüter der besten Qualität gefunden. Viele Flaschen, Phiolen und weitere Glasbehälter unbekannter Herkunft waren ebenfalls Teil der Fracht. Die nicht deklarierten Behälter waren jedoch nicht das, was die Hafenmitarbeiter in Schrecken versetzte.","Die Flaschen beinhalten Flüssigkeiten mit den unterschiedlichsten Farben und Mustern. Bei einigen der Flaschen wurden laut einer Insider-Quelle sogar eingelegte Organe und Knochen von Menschen und Tieren gefunden.",'Die Polizei sperrte den Hafen ab und brachte daraufhin die sonderbaren Flaschen, sowie den Captain der Tristo Mietitore "Charon il traghettatore" auf die Polizeistation.',"Unsere Quelle teilte uns mit, dass die gefundenen Überreste, laut Bestätigungen der Pathologie, 5 Männern, 4 Kindern und 3 Katzen zugehörig waren.","Eine offizielle Stellungnahme seitens der Polizei ist jedoch noch nicht in Sicht."],featured:!0},{id:"Tot des König der unterwellt",title:"Der König des Verbrechens",category:"Titelstory",date:"01.05 1923",image:Xl("König des verbrechens.png"),excerpt:`10 Jahre nach Tod des Kopfes des Costa-Nostra-Clans bleibt die frage auf...

wer ist jetzt an der macht ?`,content:["Genau heute vor zehn Jahren starb das Oberhaupt des Costa-Nostrs, Alessio Bellucci auch bekannt als Padre della Falena. Der gefürchtete Anführer des Costa-Nostra-Clans galt über Jahrzehnte als einer der mächtigsten Männer der Unterwelt.","Offiziellen quellen zufolge wurde Bellucci 1863 im Getto Castello Vecchio Geboren. Trotz massiven Einfluss in der Welt und großer Bekanntheit sind genaue Informationen über sein leben streng unter Verschluss und außerhalb der Polizei kaum verbreitet","Laut Polizeichef Luigi Montanari bestand der Clan aus vier Familien, die jeweils bestimmte Bereiche der Unterwelt kontrollierten und ihren Einfluss bis tief in Politik, Wirtschaft und Öffentlichkeit ausdehnten.","„Padre della Falena“ starb 1913 während einer Schießerei mit der Polizei bei einer groß angelegten Razzia in Castello Vecchio.","Doch offenbar ist der Clan noch lange nicht zerschlagen. Gerüchten zufolge soll einer der vier Söhne Belluccis, angeblich der Anführer der Falena-Familie, inzwischen die Kontrolle über den Clan übernommen haben.","Die Polizei sucht weiterhin nach Hinweisen auf die Identität des neuen Oberhaupts. In Unterweltkreisen wird der mysteriöse Nachfolger angeblich nur Il Principe delle Falene, Den Prinz der Motten genannt.","Bleibt zu hoffen, dass diese Gerüchte nicht mehr sind als das Gerede von Kleinganoven und Obdachlosen."],featured:!0}];function $p(){const e=T.useMemo(()=>ai.filter(b=>b.featured).slice(0,5),[]),t=T.useMemo(()=>ai.filter(b=>!b.featured),[]),[n,r]=T.useState(0),[i,s]=T.useState(!1),[l,c]=T.useState(null),[d,g]=T.useState("next"),[S,y]=T.useState(0),[w,P]=T.useState(null),[N,E]=T.useState(""),[D,x]=T.useState(""),[f,h]=T.useState(null),[o,u]=T.useState(""),[p,v]=T.useState(""),[m,k]=T.useState({id:"",title:"",category:"",date:"",image:"SM1.png",excerpt:"",content:"",featured:"true"}),j=e[n]??e[0],_=(j==null?void 0:j.title.length)??0,B={fontSize:_>42?"clamp(1.8rem, 3vw, 3.1rem)":_>30?"clamp(2rem, 3.6vw, 3.6rem)":"clamp(2.4rem, 4.4vw, 4.4rem)"},$=b=>{c(b)},V=()=>{c(null)},L=()=>{h("login"),u(""),v("")},A=()=>{h(null),u(""),v("")},be=b=>{b.preventDefault(),o==="03051923"?(h("unlocked"),v("")):(v("Zugriff verweigert"),u(""))},z=()=>{P("login"),E(""),x("")},R=()=>{P(null)},M=b=>{b.preventDefault(),N==="Mafia"?(P("tool"),x("")):(x("Zugriff verweigert"),E(""))},W=(b,ie)=>{k(yn=>({...yn,[b]:ie}))},q=T.useMemo(()=>{const b=m.id.trim()||"neuer-artikel",ie=m.content.split(`
`).map(yn=>yn.trim());return`{
  id: ${JSON.stringify(b)},
  title: ${JSON.stringify(m.title.trim())},
  category: ${JSON.stringify(m.category.trim())},
  date: ${JSON.stringify(m.date.trim())},
  image: asset(${JSON.stringify(m.image.trim()||"SM1.png")}),
  excerpt: ${JSON.stringify(m.excerpt.trim())},
  content: [
${ie.map(yn=>`    ${JSON.stringify(yn)},`).join(`
`)}
  ],
  featured: ${m.featured==="true"},
},`},[m]),ot=()=>{y(b=>b+1)},Qe=()=>{ot(),g("next"),r(b=>(b+1)%e.length)},vn=()=>{ot(),g("prev"),r(b=>b===0?e.length-1:b-1)};return T.useEffect(()=>{if(!e.length||l)return;const b=window.setInterval(()=>{g("next"),r(ie=>(ie+1)%e.length)},7e3);return()=>window.clearInterval(b)},[e.length,l,S]),a.jsxs("div",{className:"news-shell noir-shell",children:[a.jsxs("header",{className:"news-topbar mono",children:[a.jsxs("div",{className:"news-topbar-left",children:[a.jsx("span",{children:"Klassischer Reader"}),a.jsx("span",{children:"The Black Ledger"})]}),a.jsx("div",{className:"news-topbar-right",children:a.jsx("button",{type:"button",onClick:()=>s(b=>!b),children:i?"Archiv schließen":"Archiv öffnen"})})]}),a.jsxs("div",{className:"news-layout",children:[a.jsxs("section",{className:"news-main",children:[a.jsxs("div",{className:"slider-frame",children:[a.jsx("button",{type:"button",className:"slider-arrow left",onClick:vn,children:"‹"}),a.jsxs("article",{className:`slider-card noir-card slide-${d}`,onClick:()=>$(j),role:"button",tabIndex:0,children:[a.jsx("div",{className:"slider-image-wrap noir-image",children:a.jsx("img",{src:j.image,alt:j.title})}),a.jsxs("div",{className:"slider-content",children:[a.jsx("p",{className:"slider-category mono",children:j.category}),a.jsx("h1",{style:B,children:j.title}),a.jsx("p",{className:"slider-excerpt",children:j.excerpt}),a.jsxs("div",{className:"slider-meta mono",children:[a.jsx("span",{children:j.date}),a.jsx("button",{type:"button",className:"open-article-button",onClick:b=>{b.stopPropagation(),$(j)},children:"Artikel öffnen"})]})]})]},j.id),a.jsx("button",{type:"button",className:"slider-arrow right",onClick:Qe,children:"›"})]}),a.jsx("div",{className:"slider-dots",children:e.map((b,ie)=>a.jsx("button",{type:"button",className:`slider-dot ${ie===n?"active":""}`,onClick:()=>{ot(),g(ie>n?"next":"prev"),r(ie)},"aria-label":`Slide ${ie+1}`},b.id))})]}),a.jsxs("aside",{className:`news-archive ${i?"open":""}`,children:[a.jsx("div",{className:"archive-head mono",children:"Archiv"}),a.jsx("div",{className:"archive-list",children:t.map(b=>a.jsxs("button",{type:"button",className:"archive-item",onClick:()=>$(b),children:[a.jsx("span",{className:"mono",children:b.date}),a.jsx("strong",{children:b.title}),a.jsx("small",{children:b.excerpt})]},b.id))})]})]}),a.jsxs("footer",{className:"news-footer mono",children:[a.jsx("button",{type:"button",className:"writer-entry",onClick:z,children:"Ansicht: Zeitung"}),a.jsx("span",{children:"Format: Slider + Archiv"}),a.jsx("span",{children:"Noir Reader aktiv"})]}),l?a.jsx("div",{className:"article-modal-overlay",onClick:V,children:a.jsxs("div",{className:"article-modal noir-card",onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:l.category}),a.jsx("span",{children:l.date}),a.jsx("button",{type:"button",className:"modal-close",onClick:V,children:"Schließen"})]}),a.jsxs("div",{className:"article-modal-body",children:[a.jsxs("div",{className:"article-modal-image noir-image",children:[a.jsx("img",{src:l.image,alt:l.title}),l.id==="1"?a.jsx("button",{type:"button",className:"ledger-hidden-trigger",onClick:L,"aria-label":"Versteckter Zugang"}):null]}),a.jsxs("div",{className:"article-modal-text",children:[a.jsx("h2",{children:l.title}),a.jsx("p",{className:"article-lead",children:l.excerpt}),a.jsx("div",{className:"article-paragraphs",children:l.content.map((b,ie)=>b===""?a.jsx("div",{className:"article-empty-line"},ie):a.jsx("p",{children:b},ie))})]})]})]})}):null,f?a.jsx("div",{className:"article-modal-overlay",onClick:A,children:a.jsxs("div",{className:"ledger-secret-modal noir-card",onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:"Versiegelter Zugriff"}),a.jsx("span",{children:f==="login"?"Code erforderlich":"Freigegeben"}),a.jsx("button",{type:"button",className:"modal-close",onClick:A,children:"Schließen"})]}),f==="login"?a.jsxs("form",{className:"ledger-secret-login",onSubmit:be,children:[a.jsx("p",{className:"writer-kicker mono",children:"The Black Ledger"}),a.jsx("h2",{children:"Zusatzvermerk entsperren"}),a.jsx("input",{type:"password",value:o,onChange:b=>u(b.target.value),placeholder:"Zugangscode",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Bestätigen"}),p?a.jsx("p",{className:"writer-error mono",children:p}):null]}):a.jsxs("div",{className:"ledger-secret-content",children:[a.jsx("p",{className:"writer-kicker mono",children:"ZUSATZVERMERK FREIGEGEBEN"}),a.jsx("h2",{children:"Der Beweis war nie die Fracht."}),a.jsx("p",{children:"Die Phiolen wurden nicht geschmuggelt, um verkauft zu werden. Sie wurden transportiert, um jemanden zu testen."}),a.jsx("p",{children:"Der Name des Empfängers wurde aus dem Hafenbericht entfernt. Eine Kopie liegt nicht bei der Zeitung."}),a.jsx("p",{className:"mono",children:"NÄCHSTER HINWEIS: Suche im Archiv nach dem Mann, der die Tristo Mietitore führte. N..... N.... Nutze seinen -. .- -.-. .... -. .- -- . -."})]})]})}):null,w?a.jsx("div",{className:"article-modal-overlay",onClick:R,children:a.jsxs("div",{className:"writer-modal noir-card",onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:"Writer Tool"}),a.jsx("span",{children:w==="login"?"Passwort erforderlich":"Code Generator"}),a.jsx("button",{type:"button",className:"modal-close",onClick:R,children:"Schließen"})]}),w==="login"?a.jsxs("form",{className:"writer-login",onSubmit:M,children:[a.jsx("p",{className:"writer-kicker mono",children:"Zugriff nur für Writer"}),a.jsx("h2",{children:"Writer-Passwort eingeben"}),a.jsx("input",{type:"password",value:N,onChange:b=>E(b.target.value),placeholder:"Passwort",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Tool öffnen"}),D?a.jsx("p",{className:"writer-error mono",children:D}):null]}):a.jsxs("div",{className:"writer-tool",children:[a.jsxs("div",{className:"writer-form",children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"ID"}),a.jsx("input",{value:m.id,onChange:b=>W("id",b.target.value),placeholder:"z.B. story-001"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Titel"}),a.jsx("input",{value:m.title,onChange:b=>W("title",b.target.value),placeholder:"Artikel-Titel"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Kategorie"}),a.jsx("input",{value:m.category,onChange:b=>W("category",b.target.value),placeholder:"Titelstory / Gerücht / Archiv ..."})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Datum"}),a.jsx("input",{value:m.date,onChange:b=>W("date",b.target.value),placeholder:"23.04.2026"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Bilddatei"}),a.jsx("input",{value:m.image,onChange:b=>W("image",b.target.value),placeholder:"SM1.png"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Featured?"}),a.jsxs("select",{value:m.featured,onChange:b=>W("featured",b.target.value),children:[a.jsx("option",{value:"true",children:"Ja, in die Slideshow"}),a.jsx("option",{value:"false",children:"Nein, ins Archiv"})]})]}),a.jsxs("label",{className:"wide-field",children:[a.jsx("span",{className:"mono",children:"Kurztext"}),a.jsx("textarea",{value:m.excerpt,onChange:b=>W("excerpt",b.target.value),placeholder:"Kurzer Teaser für die Slideshow oder Archivliste"})]}),a.jsxs("label",{className:"wide-field content-field",children:[a.jsx("span",{className:"mono",children:"Artikeltext"}),a.jsx("textarea",{value:m.content,onChange:b=>W("content",b.target.value),placeholder:"Jeder Absatz in eine neue Zeile. Der Generator macht daraus automatisch Code."})]})]}),a.jsxs("div",{className:"writer-output",children:[a.jsxs("div",{className:"writer-output-head mono",children:[a.jsx("span",{children:"Fertiger Code für zeitungData.js"}),a.jsxs("div",{className:"writer-output-actions",children:[a.jsx("button",{type:"button",onClick:()=>{var b;return(b=navigator.clipboard)==null?void 0:b.writeText(q)},children:"Kopieren"}),a.jsx("a",{href:"https://forms.gle/6hM68qsc1WZpK24s6",target:"_blank",rel:"noopener noreferrer",className:"writer-submit-link",children:"Artikel einreichen"})]})]}),a.jsx("pre",{children:q})]})]})]})}):null,a.jsx("style",{children:`
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
      `})]})}var Gs={exports:{}};(function(e,t){(function(n,r){r(t)})(fc,function(n){class r{constructor(o,u){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=u,this.nowDrawingDensity=this.createdDensity,this.render=o}setDensity(o){this.createdDensity=o,this.nowDrawingDensity=o}setDrawingDensity(o){this.nowDrawingDensity=o}setPosition(o){this.state.position=o}setAngle(o){this.state.angle=o}setArea(o){this.state.area=o}setHardDrawingAngle(o){this.state.hardDrawingAngle=o}setHardAngle(o){this.state.hardAngle=o,this.state.hardDrawingAngle=o}setOrientation(o){this.orientation=o}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class i extends r{constructor(o,u,p){super(o,p),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=u}draw(o){const u=this.render.getContext(),p=this.render.convertToGlobal(this.state.position),v=this.render.getRect().pageWidth,m=this.render.getRect().height;u.save(),u.translate(p.x,p.y),u.beginPath();for(let k of this.state.area)k!==null&&(k=this.render.convertToGlobal(k),u.lineTo(k.x-p.x,k.y-p.y));u.rotate(this.state.angle),u.clip(),this.isLoad?u.drawImage(this.image,0,0,v,m):this.drawLoader(u,{x:0,y:0},v,m),u.restore()}simpleDraw(o){const u=this.render.getRect(),p=this.render.getContext(),v=u.pageWidth,m=u.height,k=o===1?u.left+u.pageWidth:u.left,j=u.top;this.isLoad?p.drawImage(this.image,k,j,v,m):this.drawLoader(p,{x:k,y:j},v,m)}drawLoader(o,u,p,v){o.beginPath(),o.strokeStyle="rgb(200, 200, 200)",o.fillStyle="rgb(255, 255, 255)",o.lineWidth=1,o.rect(u.x+1,u.y+1,p-1,v-1),o.stroke(),o.fill();const m={x:u.x+p/2,y:u.y+v/2};o.beginPath(),o.lineWidth=10,o.arc(m.x,m.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),o.stroke(),o.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class s{constructor(o,u){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=u,this.app=o,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let u=0;u<this.pages.length;u++)this.portraitSpread.push([u]);let o=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([o]),o++);for(let u=o;u<this.pages.length;u+=2)u<this.pages.length-1?this.landscapeSpread.push([u,u+1]):(this.landscapeSpread.push([u]),this.pages[u].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(o){const u=this.getSpread();for(let p=0;p<u.length;p++)if(o===u[p][0]||o===u[p][1])return p;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(o){if(o>=0&&o<this.pages.length)return this.pages[o];throw new Error("Invalid page number")}nextBy(o){const u=this.pages.indexOf(o);return u<this.pages.length-1?this.pages[u+1]:null}prevBy(o){const u=this.pages.indexOf(o);return u>0?this.pages[u-1]:null}getFlippingPage(o){const u=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return o===0?this.pages[u].newTemporaryCopy():this.pages[u-1];{const p=o===0?this.getSpread()[u+1]:this.getSpread()[u-1];return p.length===1||o===0?this.pages[p[0]]:this.pages[p[1]]}}getBottomPage(o){const u=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return o===0?this.pages[u+1]:this.pages[u-1];{const p=o===0?this.getSpread()[u+1]:this.getSpread()[u-1];return p.length===1?this.pages[p[0]]:o===0?this.pages[p[1]]:this.pages[p[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(o=null){if(o===null&&(o=this.currentPageIndex),o<0||o>=this.pages.length)return;const u=this.getSpreadIndexByPage(o);u!==null&&(this.currentSpreadIndex=u,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(o){if(!(o>=0&&o<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=o}showSpread(){const o=this.getSpread()[this.currentSpreadIndex];o.length===2?(this.render.setLeftPage(this.pages[o[0]]),this.render.setRightPage(this.pages[o[1]])):this.render.getOrientation()==="landscape"&&o[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[o[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[o[0]])),this.currentPageIndex=o[0],this.app.updatePageIndex(this.currentPageIndex)}}class l extends s{constructor(o,u,p){super(o,u),this.imagesHref=p}load(){for(const o of this.imagesHref){const u=new i(this.render,o,"soft");u.load(),this.pages.push(u)}this.createSpread()}}class c{static GetDistanceBetweenTwoPoint(o,u){return o===null||u===null?1/0:Math.sqrt(Math.pow(u.x-o.x,2)+Math.pow(u.y-o.y,2))}static GetSegmentLength(o){return c.GetDistanceBetweenTwoPoint(o[0],o[1])}static GetAngleBetweenTwoLine(o,u){const p=o[0].y-o[1].y,v=u[0].y-u[1].y,m=o[1].x-o[0].x,k=u[1].x-u[0].x;return Math.acos((p*v+m*k)/(Math.sqrt(p*p+m*m)*Math.sqrt(v*v+k*k)))}static PointInRect(o,u){return u===null?null:u.x>=o.left&&u.x<=o.width+o.left&&u.y>=o.top&&u.y<=o.top+o.height?u:null}static GetRotatedPoint(o,u,p){return{x:o.x*Math.cos(p)+o.y*Math.sin(p)+u.x,y:o.y*Math.cos(p)-o.x*Math.sin(p)+u.y}}static LimitPointToCircle(o,u,p){if(c.GetDistanceBetweenTwoPoint(o,p)<=u)return p;const v=o.x,m=o.y,k=p.x,j=p.y;let _=Math.sqrt(Math.pow(u,2)*Math.pow(v-k,2)/(Math.pow(v-k,2)+Math.pow(m-j,2)))+v;p.x<0&&(_*=-1);let B=(_-v)*(m-j)/(v-k)+m;return v-k+m===0&&(B=u),{x:_,y:B}}static GetIntersectBetweenTwoSegment(o,u,p){return c.PointInRect(o,c.GetIntersectBeetwenTwoLine(u,p))}static GetIntersectBeetwenTwoLine(o,u){const p=o[0].y-o[1].y,v=u[0].y-u[1].y,m=o[1].x-o[0].x,k=u[1].x-u[0].x,j=o[0].x*o[1].y-o[1].x*o[0].y,_=u[0].x*u[1].y-u[1].x*u[0].y,B=p*_-v*j,$=m*_-k*j,V=-(j*k-_*m)/(p*k-v*m),L=-(p*_-v*j)/(p*k-v*m);if(isFinite(V)&&isFinite(L))return{x:V,y:L};if(Math.abs(B-$)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(o,u){const p=Math.abs(o.x-u.x),v=Math.abs(o.y-u.y),m=Math.max(p,v),k=[o];function j(_,B,$,V,L){return B>_?_+L*($/V):B<_?_-L*($/V):_}for(let _=1;_<=m;_+=1)k.push({x:j(o.x,u.x,p,m,_),y:j(o.y,u.y,v,m,_)});return k}}class d extends r{constructor(o,u,p){super(o,p),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=u,this.element.classList.add("stf__item"),this.element.classList.add("--"+p)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new d(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(o){const u=o||this.nowDrawingDensity,p=this.render.convertToGlobal(this.state.position),v=this.render.getRect().pageWidth,m=this.render.getRect().height;this.element.classList.remove("--simple");const k=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${v}px;
            height: ${m}px;
        `;u==="hard"?this.drawHard(k):this.drawSoft(p,k)}drawHard(o=""){const u=this.render.getRect().left+this.render.getRect().width/2,p=this.state.hardDrawingAngle,v=o+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${p}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${u}px, 0, 0) rotateY(${p}deg);`);this.element.style.cssText=v}drawSoft(o,u=""){let p="polygon( ";for(const m of this.state.area)if(m!==null){let k=this.render.getDirection()===1?{x:-m.x+this.state.position.x,y:m.y-this.state.position.y}:{x:m.x-this.state.position.x,y:m.y-this.state.position.y};k=c.GetRotatedPoint(k,{x:0,y:0},this.state.angle),p+=k.x+"px "+k.y+"px, "}p=p.slice(0,-2),p+=")";const v=u+`transform-origin: 0 0; clip-path: ${p}; -webkit-clip-path: ${p};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${o.x}px, ${o.y}px);`:`transform: translate3d(${o.x}px, ${o.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=v}simpleDraw(o){const u=this.render.getRect(),p=u.pageWidth,v=u.height,m=o===1?u.left+u.pageWidth:u.left,k=u.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${v}px; 
            left: ${m}px; 
            top: ${k}px; 
            width: ${p}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(o){super.setOrientation(o),this.element.classList.remove("--left","--right"),this.element.classList.add(o===1?"--right":"--left")}setDrawingDensity(o){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+o),super.setDrawingDensity(o)}}class g extends s{constructor(o,u,p,v){super(o,u),this.element=p,this.pagesElement=v}load(){for(const o of this.pagesElement){const u=new d(this.render,o,o.dataset.density==="hard"?"hard":"soft");u.load(),this.pages.push(u)}this.createSpread()}}class S{constructor(o,u,p,v){this.direction=o,this.corner=u,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(p,10),this.pageHeight=parseInt(v,10)}calc(o){try{return this.position=this.calcAngleAndPosition(o),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const o=[];let u=!1;return o.push(this.rect.topLeft),o.push(this.topIntersectPoint),this.sideIntersectPoint===null?u=!0:(o.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(u=!1)),o.push(this.bottomIntersectPoint),(u||this.corner==="bottom")&&o.push(this.rect.bottomLeft),o}getBottomClipArea(){const o=[];return o.push(this.topIntersectPoint),this.corner==="top"?o.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&o.push({x:this.pageWidth,y:0}),o.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?c.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&o.push(this.sideIntersectPoint):this.corner==="top"&&o.push({x:this.pageWidth,y:this.pageHeight}),o.push(this.bottomIntersectPoint),o.push(this.topIntersectPoint),o}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const o=c.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?o:Math.PI-o}calcAngleAndPosition(o){let u=o;if(this.updateAngleAndGeometry(u),u=this.corner==="top"?this.checkPositionAtCenterLine(u,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(u,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(u.x-this.pageWidth)<1&&Math.abs(u.y)<1)throw new Error("Point is too small");return u}updateAngleAndGeometry(o){this.angle=this.calculateAngle(o),this.rect=this.getPageRect(o)}calculateAngle(o){const u=this.pageWidth-o.x+1,p=this.corner==="bottom"?this.pageHeight-o.y:o.y;let v=2*Math.acos(u/Math.sqrt(p*p+u*u));p<0&&(v=-v);const m=Math.PI-v;if(!isFinite(v)||m>=0&&m<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(v=-v),v}getPageRect(o){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],o):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],o)}getRectFromBasePoint(o,u){return{topLeft:this.getRotatedPoint(o[0],u),topRight:this.getRotatedPoint(o[1],u),bottomLeft:this.getRotatedPoint(o[2],u),bottomRight:this.getRotatedPoint(o[3],u)}}getRotatedPoint(o,u){return{x:o.x*Math.cos(this.angle)+o.y*Math.sin(this.angle)+u.x,y:o.y*Math.cos(this.angle)-o.x*Math.sin(this.angle)+u.y}}calculateIntersectPoint(o){const u={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[o,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[o,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[o,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=c.GetIntersectBetweenTwoSegment(u,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(o,u,p){let v=o;const m=c.LimitPointToCircle(u,this.pageWidth,v);v!==m&&(v=m,this.updateAngleAndGeometry(v));const k=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let j=this.rect.bottomRight,_=this.rect.topLeft;if(this.corner==="bottom"&&(j=this.rect.topRight,_=this.rect.bottomLeft),j.x<=0){const B=c.LimitPointToCircle(p,k,_);B!==v&&(v=B,this.updateAngleAndGeometry(v))}return v}getSegmentToShadowLine(){const o=this.getShadowStartPoint();return[o,o!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class y{constructor(o,u){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=o,this.app=u}fold(o){this.setState("user_fold"),this.calc===null&&this.start(o),this.do(this.render.convertToPage(o))}flip(o){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(o)||(this.calc!==null&&this.render.finishAnimation(),!this.start(o)))return;const u=this.getBoundsRect();this.setState("flipping");const p=u.height/10,v=this.calc.getCorner()==="bottom"?u.height-p:p,m=this.calc.getCorner()==="bottom"?u.height:0;this.calc.calc({x:u.pageWidth-p,y:v}),this.animateFlippingTo({x:u.pageWidth-p,y:v},{x:-u.pageWidth,y:m},!0)}start(o){this.reset();const u=this.render.convertToBook(o),p=this.getBoundsRect(),v=this.getDirectionByPoint(u),m=u.y>=p.height/2?"bottom":"top";if(!this.checkDirection(v))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(v),this.bottomPage=this.app.getPageCollection().getBottomPage(v),this.render.getOrientation()==="landscape")if(v===1){const k=this.app.getPageCollection().nextBy(this.flippingPage);k!==null&&this.flippingPage.getDensity()!==k.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),k.setDrawingDensity("hard"))}else{const k=this.app.getPageCollection().prevBy(this.flippingPage);k!==null&&this.flippingPage.getDensity()!==k.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),k.setDrawingDensity("hard"))}return this.render.setDirection(v),this.calc=new S(v,m,p.pageWidth.toString(10),p.height.toString(10)),!0}catch{return!1}}do(o){if(this.calc!==null&&this.calc.calc(o)){const u=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*u)/100):this.flippingPage.setHardAngle(-90*(200-2*u)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),u,this.calc.getDirection())}}flipToPage(o,u){const p=this.app.getPageCollection().getCurrentSpreadIndex(),v=this.app.getPageCollection().getSpreadIndexByPage(o);try{v>p&&(this.app.getPageCollection().setCurrentSpreadIndex(v-1),this.flipNext(u)),v<p&&(this.app.getPageCollection().setCurrentSpreadIndex(v+1),this.flipPrev(u))}catch{}}flipNext(o){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:o==="top"?1:this.render.getRect().height-2})}flipPrev(o){this.flip({x:10,y:o==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const o=this.calc.getPosition(),u=this.getBoundsRect(),p=this.calc.getCorner()==="bottom"?u.height:0;o.x<=0?this.animateFlippingTo(o,{x:-u.pageWidth,y:p},!0):this.animateFlippingTo(o,{x:u.pageWidth,y:p},!1)}showCorner(o){if(!this.checkState("read","fold_corner"))return;const u=this.getBoundsRect(),p=u.pageWidth;if(this.isPointOnCorners(o))if(this.calc===null){if(!this.start(o))return;this.setState("fold_corner"),this.calc.calc({x:p-1,y:1});const v=50,m=this.calc.getCorner()==="bottom"?u.height-1:1,k=this.calc.getCorner()==="bottom"?u.height-v:v;this.animateFlippingTo({x:p-1,y:m},{x:p-v,y:k},!1,!1)}else this.do(this.render.convertToPage(o));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(o,u,p,v=!0){const m=c.GetCordsFromTwoPoint(o,u),k=[];for(const _ of m)k.push(()=>this.do(_));const j=this.getAnimationDuration(m.length);this.render.startAnimation(k,j,()=>{this.calc&&(p&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),v&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(o){this.state!==o&&(this.app.updateState(o),this.state=o)}getDirectionByPoint(o){const u=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(o.x-u.pageWidth<=u.width/5)return 1}else if(o.x<u.width/2)return 1;return 0}getAnimationDuration(o){const u=this.app.getSettings().flippingTime;return o>=1e3?u:o/1e3*u}checkDirection(o){return o===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...o){for(const u of o)if(this.state===u)return!0;return!1}isPointOnCorners(o){const u=this.getBoundsRect(),p=u.pageWidth,v=Math.sqrt(Math.pow(p,2)+Math.pow(u.height,2))/5,m=this.render.convertToBook(o);return m.x>0&&m.y>0&&m.x<u.width&&m.y<u.height&&(m.x<v||m.x>u.width-v)&&(m.y<v||m.y>u.height-v)}}class w{constructor(o,u){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=u,this.app=o;const p=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=p.exec(window.navigator.userAgent)!==null}render(o){if(this.animation!==null){const u=Math.round((o-this.animation.startedAt)/this.animation.durationFrame);u<this.animation.frames.length?this.animation.frames[u]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=o,this.drawFrame()}start(){this.update();const o=u=>{this.render(u),requestAnimationFrame(o)};requestAnimationFrame(o)}startAnimation(o,u,p){this.finishAnimation(),this.animation={frames:o,duration:u,durationFrame:u/o.length,onAnimateEnd:p,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const o=this.calculateBoundsRect();this.orientation!==o&&(this.orientation=o,this.app.updateOrientation(o))}calculateBoundsRect(){let o="landscape";const u=this.getBlockWidth(),p=u/2,v=this.getBlockHeight()/2,m=this.setting.width/this.setting.height;let k=this.setting.width,j=this.setting.height,_=p-k;return this.setting.size==="stretch"?(u<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(o="portrait"),k=o==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,k>this.setting.maxWidth&&(k=this.setting.maxWidth),j=k/m,j>this.getBlockHeight()&&(j=this.getBlockHeight(),k=j*m),_=o==="portrait"?p-k/2-k:p-k):u<2*k&&this.app.getSettings().usePortrait&&(o="portrait",_=p-k/2-k),this.boundsRect={left:_,top:v-j/2,width:2*k,height:j,pageWidth:k},o}setShadowData(o,u,p,v){if(!this.app.getSettings().drawShadow)return;const m=100*this.getSettings().maxShadowOpacity;this.shadow={pos:o,angle:u,width:3*this.getRect().pageWidth/4*p/100,opacity:(100-p)*m/100/100,direction:v,progress:2*p}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(o){this.pageRect=o}setDirection(o){this.direction=o}setRightPage(o){o!==null&&o.setOrientation(1),this.rightPage=o}setLeftPage(o){o!==null&&o.setOrientation(0),this.leftPage=o}setBottomPage(o){o!==null&&o.setOrientation(this.direction===1?0:1),this.bottomPage=o}setFlippingPage(o){o!==null&&o.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=o}convertToBook(o){const u=this.getRect();return{x:o.x-u.left,y:o.y-u.top}}isSafari(){return this.safari}convertToPage(o,u){u||(u=this.direction);const p=this.getRect();return{x:u===0?o.x-p.left-p.width/2:p.width/2-o.x+p.left,y:o.y-p.top}}convertToGlobal(o,u){if(u||(u=this.direction),o==null)return null;const p=this.getRect();return{x:u===0?o.x+p.left+p.width/2:p.width/2-o.x+p.left,y:o.y+p.top}}convertRectToGlobal(o,u){return u||(u=this.direction),{topLeft:this.convertToGlobal(o.topLeft,u),topRight:this.convertToGlobal(o.topRight,u),bottomLeft:this.convertToGlobal(o.bottomLeft,u),bottomRight:this.convertToGlobal(o.bottomRight,u)}}}class P extends w{constructor(o,u,p){super(o,u),this.canvas=p,this.ctx=p.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const o=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(o.left+o.pageWidth,o.top,o.width,o.height),this.ctx.clip())}drawBookShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath();const u=o.width/20;this.ctx.rect(o.left,o.top,o.width,o.height);const p={x:o.left+o.width/2-u/2,y:0};this.ctx.translate(p.x,p.y);const v=this.ctx.createLinearGradient(0,0,u,0);v.addColorStop(0,"rgba(0, 0, 0, 0)"),v.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),v.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),v.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),v.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),v.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=v,this.ctx.fillRect(0,0,u,2*o.height),this.ctx.restore()}drawOuterShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(o.left,o.top,o.width,o.height);const u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const p=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),p.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),p.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),p.addColorStop(0,"rgba(0, 0, 0, 0)"),p.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=p,this.ctx.fillRect(0,0,this.shadow.width,2*o.height),this.ctx.restore()}drawInnerShadow(){const o=this.getRect();this.ctx.save(),this.ctx.beginPath();const u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),p=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(p.topLeft.x,p.topLeft.y),this.ctx.lineTo(p.topRight.x,p.topRight.y),this.ctx.lineTo(p.bottomRight.x,p.bottomRight.y),this.ctx.lineTo(p.bottomLeft.x,p.bottomLeft.y),this.ctx.translate(u.x,u.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const v=3*this.shadow.width/4,m=this.ctx.createLinearGradient(0,0,v,0);this.shadow.direction===0?(this.ctx.translate(-v,-100),m.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),m.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),m.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),m.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),m.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),m.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),m.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),m.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=m,this.ctx.fillRect(0,0,v,2*o.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class N{constructor(o,u,p){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=m=>{if(this.checkTarget(m.target)){const k=this.getMousePos(m.clientX,m.clientY);this.app.startUserTouch(k),m.preventDefault()}},this.onTouchStart=m=>{if(this.checkTarget(m.target)&&m.changedTouches.length>0){const k=m.changedTouches[0],j=this.getMousePos(k.clientX,k.clientY);this.touchPoint={point:j,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(j)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||m.preventDefault()}},this.onMouseUp=m=>{const k=this.getMousePos(m.clientX,m.clientY);this.app.userStop(k)},this.onMouseMove=m=>{const k=this.getMousePos(m.clientX,m.clientY);this.app.userMove(k,!1)},this.onTouchMove=m=>{if(m.changedTouches.length>0){const k=m.changedTouches[0],j=this.getMousePos(k.clientX,k.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-j.x)>10||this.app.getState()!=="read")&&m.cancelable&&this.app.userMove(j,!0),this.app.getState()!=="read"&&m.preventDefault()):this.app.userMove(j,!0)}},this.onTouchEnd=m=>{if(m.changedTouches.length>0){const k=m.changedTouches[0],j=this.getMousePos(k.clientX,k.clientY);let _=!1;if(this.touchPoint!==null){const B=j.x-this.touchPoint.point.x,$=Math.abs(j.y-this.touchPoint.point.y);Math.abs(B)>this.swipeDistance&&$<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(B>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),_=!0),this.touchPoint=null}this.app.userStop(j,_)}},this.parentElement=o,o.classList.add("stf__parent"),o.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=o.querySelector(".stf__wrapper"),this.app=u;const v=this.app.getSettings().usePortrait?1:2;o.style.minWidth=p.minWidth*v+"px",o.style.minHeight=p.minHeight+"px",p.size==="fixed"&&(o.style.minWidth=p.width*v+"px",o.style.minHeight=p.height+"px"),p.autoSize&&(o.style.width="100%",o.style.maxWidth=2*p.maxWidth+"px"),o.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=p.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(o){this.wrapper.classList.remove("--portrait","--landscape"),o==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(o,u){const p=this.distElement.getBoundingClientRect();return{x:o-p.left,y:u-p.top}}checkTarget(o){return!this.app.getSettings().clickEventForward||!["a","button"].includes(o.tagName.toLowerCase())}}class E extends N{constructor(o,u,p,v){super(o,u,p),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=o.querySelector(".stf__block"),this.items=v;for(const m of v)this.distElement.appendChild(m);this.setHandlers()}clear(){for(const o of this.items)this.parentElement.appendChild(o)}updateItems(o){this.removeHandlers(),this.distElement.innerHTML="";for(const u of o)this.distElement.appendChild(u);this.items=o,this.setHandlers()}update(){this.app.getRender().update()}}class D extends N{constructor(o,u,p){super(o,u,p),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=o.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const o=getComputedStyle(this.canvas),u=parseInt(o.getPropertyValue("width"),10),p=parseInt(o.getPropertyValue("height"),10);this.canvas.width=u,this.canvas.height=p}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class x extends w{constructor(o,u,p){super(o,u),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=p,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const o=this.getRect(),u=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let p=(100-u)*(2.5*o.pageWidth)/100+20;p>o.pageWidth&&(p=o.pageWidth);let v=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${p}px;
            height: ${o.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*u/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${o.left+o.width/2}px;
            transform-origin: 0 0;
        `;v+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=v}drawHardOuterShadow(){const o=this.getRect();let u=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*o.pageWidth)/100+20;u>o.pageWidth&&(u=o.pageWidth);let p=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${u}px;
            height: ${o.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${o.left+o.width/2}px;
            transform-origin: 0 0;
        `;p+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=p}drawInnerShadow(){const o=this.getRect(),u=3*this.shadow.width/4,p=this.getDirection()===0?u:0,v=this.getDirection()===0?"to left":"to right",m=this.convertToGlobal(this.shadow.pos),k=this.shadow.angle+3*Math.PI/2,j=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let _="polygon( ";for(const $ of j){let V=this.getDirection()===1?{x:-$.x+this.shadow.pos.x,y:$.y-this.shadow.pos.y}:{x:$.x-this.shadow.pos.x,y:$.y-this.shadow.pos.y};V=c.GetRotatedPoint(V,{x:p,y:100},k),_+=V.x+"px "+V.y+"px, "}_=_.slice(0,-2),_+=")";const B=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${u}px;
            height: ${2*o.height}px;
            background: linear-gradient(${v},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${p}px 100px;
            transform: translate3d(${m.x-p}px, ${m.y-100}px, 0) rotate(${k}rad);
            clip-path: ${_};
            -webkit-clip-path: ${_};
        `;this.innerShadow.style.cssText=B}drawOuterShadow(){const o=this.getRect(),u=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),p=this.shadow.angle+3*Math.PI/2,v=this.getDirection()===1?this.shadow.width:0,m=this.getDirection()===0?"to right":"to left",k=[{x:0,y:0},{x:o.pageWidth,y:0},{x:o.pageWidth,y:o.height},{x:0,y:o.height}];let j="polygon( ";for(const B of k)if(B!==null){let $=this.getDirection()===1?{x:-B.x+this.shadow.pos.x,y:B.y-this.shadow.pos.y}:{x:B.x-this.shadow.pos.x,y:B.y-this.shadow.pos.y};$=c.GetRotatedPoint($,{x:v,y:100},p),j+=$.x+"px "+$.y+"px, "}j=j.slice(0,-2),j+=")";const _=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*o.height}px;
            background: linear-gradient(${m}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${v}px 100px;
            transform: translate3d(${u.x-v}px, ${u.y-100}px, 0) rotate(${p}rad);
            clip-path: ${j};
            -webkit-clip-path: ${j};
        `;this.outerShadow.style.cssText=_}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const o=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(o))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const o of this.app.getPageCollection().getPages())o!==this.leftPage&&o!==this.rightPage&&o!==this.flippingPage&&o!==this.bottomPage&&(o.getElement().style.cssText="display: none"),o.getTemporaryCopy()!==this.flippingPage&&o.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class f{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(o){const u=this._default;if(Object.assign(u,o),u.size!=="stretch"&&u.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(u.width<=0||u.height<=0)throw new Error("Invalid width or height");if(u.flippingTime<=0)throw new Error("Invalid flipping time");return u.size==="stretch"?(u.minWidth<=0&&(u.minWidth=100),u.maxWidth<u.minWidth&&(u.maxWidth=2e3),u.minHeight<=0&&(u.minHeight=100),u.maxHeight<u.minHeight&&(u.maxHeight=2e3)):(u.minWidth=u.width,u.maxWidth=u.width,u.minHeight=u.height,u.maxHeight=u.height),u}}(function(h,o){o===void 0&&(o={});var u=o.insertAt;if(typeof document<"u"){var p=document.head||document.getElementsByTagName("head")[0],v=document.createElement("style");v.type="text/css",u==="top"&&p.firstChild?p.insertBefore(v,p.firstChild):p.appendChild(v),v.styleSheet?v.styleSheet.cssText=h:v.appendChild(document.createTextNode(h))}})(`.stf__parent {
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
}`),n.PageFlip=class extends class{constructor(){this.events=new Map}on(h,o){return this.events.has(h)?this.events.get(h).push(o):this.events.set(h,[o]),this}off(h){this.events.delete(h)}trigger(h,o,u=null){if(this.events.has(h))for(const p of this.events.get(h))p({data:u,object:o})}}{constructor(h,o){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new f().getSettings(o),this.block=h}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(h){this.ui=new D(this.block,this,this.setting);const o=this.ui.getCanvas();this.render=new P(this,this.setting,o),this.flipController=new y(this.render,this),this.pages=new l(this,this.render,h),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(h){this.ui=new E(this.block,this,this.setting,h),this.render=new x(this,this.setting,this.ui.getDistElement()),this.flipController=new y(this.render,this),this.pages=new g(this,this.render,this.ui.getDistElement(),h),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(h){const o=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new l(this,this.render,h),this.pages.load(),this.pages.show(o),this.trigger("update",this,{page:o,mode:this.render.getOrientation()})}updateFromHtml(h){const o=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new g(this,this.render,this.ui.getDistElement(),h),this.pages.load(),this.ui.updateItems(h),this.render.reload(),this.pages.show(o),this.trigger("update",this,{page:o,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(h){this.pages.show(h)}flipNext(h="top"){this.flipController.flipNext(h)}flipPrev(h="top"){this.flipController.flipPrev(h)}flip(h,o="top"){this.flipController.flipToPage(h,o)}updateState(h){this.trigger("changeState",this,h)}updatePageIndex(h){this.trigger("flip",this,h)}updateOrientation(h){this.ui.setOrientationStyle(h),this.update(),this.trigger("changeOrientation",this,h)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(h){return this.pages.getPage(h)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(h){this.mousePosition=h,this.isUserTouch=!0,this.isUserMove=!1}userMove(h,o){this.isUserTouch||o||!this.setting.showPageCorners?this.isUserTouch&&c.GetDistanceBetweenTwoPoint(this.mousePosition,h)>5&&(this.isUserMove=!0,this.flipController.fold(h)):this.flipController.showCorner(h)}userStop(h,o=!1){this.isUserTouch&&(this.isUserTouch=!1,o||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(h)))}},Object.defineProperty(n,"__esModule",{value:!0})})})(Gs,Gs.exports);var Up=Gs.exports;const Vp=Xe.forwardRef((e,t)=>{const n=T.useRef(null),r=T.useRef([]),i=T.useRef(),[s,l]=T.useState([]);T.useImperativeHandle(t,()=>({pageFlip:()=>i.current}));const c=T.useCallback(()=>{i.current&&i.current.clear()},[]),d=T.useCallback(()=>{const g=i.current;g&&(g.off("flip"),g.off("changeOrientation"),g.off("changeState"),g.off("init"),g.off("update"))},[]);return T.useEffect(()=>{if(r.current=[],e.children){const g=Xe.Children.map(e.children,S=>Xe.cloneElement(S,{ref:y=>{y&&r.current.push(y)}}));(!e.renderOnlyPageLengthChange||s.length!==g.length)&&(g.length<s.length&&c(),l(g))}},[e.children]),T.useEffect(()=>{const g=()=>{const S=i.current;S&&(e.onFlip&&S.on("flip",y=>e.onFlip(y)),e.onChangeOrientation&&S.on("changeOrientation",y=>e.onChangeOrientation(y)),e.onChangeState&&S.on("changeState",y=>e.onChangeState(y)),e.onInit&&S.on("init",y=>e.onInit(y)),e.onUpdate&&S.on("update",y=>e.onUpdate(y)))};s.length>0&&r.current.length>0&&(d(),n.current&&!i.current&&(i.current=new Up.PageFlip(n.current,e)),i.current.getFlipController()?i.current.updateFromHtml(r.current):i.current.loadFromHTML(r.current),g())},[s]),Xe.createElement("div",{ref:n,className:e.className,style:e.style},s)}),Gp=Xe.memo(Vp),Kp=[{type:"cover",kicker:"Königliche Mafia",title:"Das Auge der Mafia",text:"Chronik, Feinde, Personen und vertrauliche Einträge."},{type:"text",kicker:"Einleitung",title:"Was dieses Buch ist",content:["Dieses Buch sammelt den aktuellen Zustand der Familie.","Jeder Eintrag kann eine neue Erkenntnis, ein Feind oder ein Ereignis sein."]},{type:"text",kicker:"Test",title:"",content:[""]},{type:"cover",kicker:"Noch lange nicht das",title:"Ende",text:""}],Qp="/KM_OS/",Jl=e=>`${Qp}assets/${e}`,ql=Xe.forwardRef(({children:e,className:t=""},n)=>a.jsx("div",{className:`book-page ${t}`,ref:n,children:a.jsx("div",{className:"book-page-inner",children:e})})),Zp=Xe.forwardRef(({children:e},t)=>a.jsx("div",{className:"book-page book-cover",ref:t,"data-density":"hard",children:a.jsx("div",{className:"book-page-inner cover-inner",children:e})}));function Yp(e,t){var n;return e.type==="cover"?a.jsx(Zp,{children:a.jsx("div",{className:"book-cover-image",children:a.jsx("img",{src:Jl("DADM.png"),alt:"Codex Noir Cover"})})},t):e.type==="image"?a.jsxs(ql,{className:"image-page",children:[a.jsx("img",{src:Jl(e.src),alt:e.caption}),a.jsx("p",{className:"mono image-caption",children:e.caption})]},t):a.jsxs(ql,{children:[a.jsx("p",{className:"book-kicker mono",children:e.kicker}),a.jsx("h2",{children:e.title}),e.list?a.jsx("ul",{children:e.list.map((r,i)=>a.jsx("li",{children:r},i))}):null,(n=e.content)==null?void 0:n.map((r,i)=>a.jsx("p",{children:r},i))]},t)}function Xp(){const[e,t]=T.useState(null),[n,r]=T.useState(""),[i,s]=T.useState(""),[l,c]=T.useState({type:"text",kicker:"",title:"",content:"",list:"",src:"SM1.png",caption:""}),d=()=>{t("login"),r(""),s("")},g=()=>{t(null),r(""),s("")},S=P=>{if(P.preventDefault(),n==="Feinde"){t("tool"),r(""),s("");return}s("Zugriff verweigert."),r("")},y=(P,N)=>{c(E=>({...E,[P]:N}))},w=T.useMemo(()=>{if(l.type==="image")return`{
  type: "image",
  src: ${JSON.stringify(l.src.trim()||"SM1.png")},
  caption: ${JSON.stringify(l.caption.trim())},
},`;const P=l.content.split(`
`).map(E=>E.trim()),N=l.list.split(`
`).map(E=>E.trim()).filter(Boolean);return`{
  type: ${JSON.stringify(l.type)},
  kicker: ${JSON.stringify(l.kicker.trim())},
  title: ${JSON.stringify(l.title.trim())},${N.length?`
  list: [
${N.map(E=>`    ${JSON.stringify(E)},`).join(`
`)}
  ],`:""}
  content: [
${P.map(E=>`    ${JSON.stringify(E)},`).join(`
`)}
  ],
},`},[l]);return a.jsxs("div",{className:"book-app",children:[a.jsx(Gp,{width:460,height:620,minWidth:300,maxWidth:540,minHeight:390,maxHeight:660,showCover:!0,maxShadowOpacity:.45,mobileScrollSupport:!1,className:"mafia-book",children:Kp.map((P,N)=>Yp(P,N))}),a.jsx("button",{type:"button",className:"book-writer-entry mono",onClick:d,children:"Writer Tool"}),e?a.jsx("div",{className:"book-modal-overlay",onClick:g,children:a.jsxs("div",{className:"book-writer-modal",onClick:P=>P.stopPropagation(),children:[a.jsxs("div",{className:"book-writer-head mono",children:[a.jsx("span",{children:"Das Auge der Mafia / Writer Tool"}),a.jsx("span",{children:e==="login"?"Passwort erforderlich":"Seitengenerator"}),a.jsx("button",{type:"button",onClick:g,children:"Schließen"})]}),e==="login"?a.jsxs("form",{className:"book-writer-login",onSubmit:S,children:[a.jsx("p",{className:"book-kicker mono",children:"Zugriff nur für Schreiber"}),a.jsx("h2",{children:"Passwort eingeben"}),a.jsx("input",{type:"password",value:n,onChange:P=>r(P.target.value),placeholder:"Passwort",autoFocus:!0}),a.jsx("button",{type:"submit",children:"Tool öffnen"}),i?a.jsx("p",{className:"book-writer-error mono",children:i}):null]}):a.jsxs("div",{className:"book-writer-tool",children:[a.jsxs("div",{className:"book-writer-form",children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Seitentyp"}),a.jsxs("select",{value:l.type,onChange:P=>y("type",P.target.value),children:[a.jsx("option",{value:"text",children:"Textseite"}),a.jsx("option",{value:"entry",children:"Tagebuch-Eintrag"}),a.jsx("option",{value:"enemy",children:"Feind-Akte"}),a.jsx("option",{value:"person",children:"Personen-Eintrag"}),a.jsx("option",{value:"note",children:"Notiz"}),a.jsx("option",{value:"image",children:"Bildseite"})]})]}),l.type==="image"?a.jsxs(a.Fragment,{children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Bilddatei"}),a.jsx("input",{value:l.src,onChange:P=>y("src",P.target.value),placeholder:"SM1.png"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Bildunterschrift"}),a.jsx("input",{value:l.caption,onChange:P=>y("caption",P.target.value),placeholder:"Archivmaterial"})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Kicker"}),a.jsx("input",{value:l.kicker,onChange:P=>y("kicker",P.target.value),placeholder:"z.B. Feind-Akte"})]}),a.jsxs("label",{children:[a.jsx("span",{className:"mono",children:"Titel"}),a.jsx("input",{value:l.title,onChange:P=>y("title",P.target.value),placeholder:"Seitentitel"})]}),a.jsxs("label",{className:"wide-field",children:[a.jsx("span",{className:"mono",children:"Liste optional"}),a.jsx("textarea",{value:l.list,onChange:P=>y("list",P.target.value),placeholder:"Eine Listenzeile pro Zeile, z.B. Status: Aktiv"})]}),a.jsxs("label",{className:"wide-field content-field",children:[a.jsx("span",{className:"mono",children:"Text"}),a.jsx("textarea",{value:l.content,maxLength:650,onChange:P=>y("content",P.target.value),placeholder:"Max. 650 Zeichen. Jede neue Zeile = neuer Absatz."})]}),a.jsxs("p",{className:"book-char-counter mono",children:[l.content.length," / 650 Zeichen"]})]})]}),a.jsxs("div",{className:"book-writer-output",children:[a.jsxs("div",{className:"book-writer-output-head mono",children:[a.jsx("span",{children:"Code für buchData.js"}),a.jsxs("div",{className:"writer-actions",children:[a.jsx("button",{type:"button",onClick:()=>{var P;return(P=navigator.clipboard)==null?void 0:P.writeText(w)},children:"Kopieren"}),a.jsx("button",{type:"button",onClick:()=>window.open("https://forms.gle/WwtkBvYNc4Eoqo397","_blank"),children:"Artikel einreichen"})]})]}),a.jsx("pre",{children:w})]})]})]})}):null,a.jsx("style",{children:`
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
          filter: grayscale(1);
        }

        .book-page {
          background: #111;
          color: white;
          border: 1px solid rgba(255,255,255,0.16);
        }

        .book-page-inner {
  height: 100%;
  padding: 26px;
          display: grid;
          align-content: start;
          gap: 16px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.08), transparent 22%),
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0 1px, transparent 1px);
          background-size: 100% 100%, 18px 18px;
          overflow: hidden;
        }

        .book-cover {
          background: #050505;
        }

        .cover-inner {
            place-content: center;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.18);
            margin: 12px;
        }

        .book-kicker {
          margin: 0;
          color: rgba(255,255,255,0.52);
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
  color: rgba(255,255,255,0.78);
  font-size: 0.95rem;
}

        .book-page ul {
          margin: 0;
          padding-left: 20px;
          display: grid;
          gap: 8px;
        }

        .image-page .book-page-inner {
          padding: 18px;
          grid-template-rows: minmax(0, 1fr) auto;
        }

        .image-page img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.1) brightness(0.72);
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
}

.book-cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* wichtig für full epic look */
}
          
      `})]})}const Jp="/KM_OS/",ea=e=>`${Jp}assets/${e}`,Xi={id:"root",name:"Das Archiv",type:"folder",children:[{id:"akten",name:"Akten",type:"folder",date:"03.05.1923",children:[{id:"Erste Entführung",name:"Erste Entführung",type:"folder",date:"30.11.1922",children:[{id:"Mr. Quack",name:"MrQuack.png",type:"image",date:"30.11.1922",image:ea("MrQuack.png")}]},{id:"port-vecchia",name:"Port Vecchia Vorfall",type:"folder",date:"03.05.1923",children:[{id:"port-bericht",name:"Bericht.txt",type:"text",date:"03.05.1923",content:["Am Hafen von Port Vecchia wurden nicht deklarierte Behälter entdeckt.","Die Fracht stammte von der Tristo Mietitore.","Weitere Untersuchungen laufen."]},{id:"port-foto",name:"Beweisfoto.png",type:"image",date:"03.05.1923",image:ea("Port Vecchia.png")},{id:"port-zeitung",name:"Schmuggelvorrwürfe.article",type:"article",date:"03.05.1923",articleId:"1"}]}]},{id:"personen",name:"Personen",type:"folder",date:"03.05.1923",children:[{id:"charon",name:"Charon il traghettatore",type:"folder",date:"03.05.1923",children:[{id:"charon-notiz",name:"Interne Notiz.txt",type:"text",date:"03.05.1923",content:["Captain der Tristo Mietitore.","Wurde nach dem Vorfall am Hafen zur Polizeistation gebracht.","","Die Aussagen sind unvollständig.","Ein Teil des Protokolls fehlt."],secret:{password:"traghettatore",content:["VERHÖRPROTOKOLL – FRAGMENT","","Er hat nicht geleugnet.","Er hat nur gelächelt.","",'"Ihr sucht am falschen Ort."',"","Auf Nachfrage schwieg er.","","Bevor er abgeführt wurde, sagte er:","",'"Das, was ihr sucht, wurde nie hier gelagert."',"",'"Wenn ihr verstehen wollt, was wirklich geschah, kehrt zum Ursprung zurück und klopft 3 mal freundlich an."',"","PORT VECCHIA"]}}]}]},{id:"orte",name:"Orte",type:"folder",date:"03.05.1923",children:[{id:"porto-vecchia",name:"Port Vecchia",type:"text",date:"03.05.1923",content:["Hafenstadt mit hoher Handelsaktivität.","Aktuell im Fokus interner Ermittlungen."]}]},{id:"beweise",name:"Beweise",type:"folder",date:"03.05.1923",children:[{id:"phiolen",name:"Unbekannte Phiolen.txt",type:"text",date:"03051923",content:["Mehrere Glasbehälter unbekannter Herkunft.","Inhalt, Ursprung und Zweck sind ungeklärt."],secret:{password:"03051923",content:["ZUSATZBERICHT FREIGEGEBEN","","Die Phiolen waren nicht für den Hafen bestimmt.","Der eigentliche Empfänger wurde aus allen Registern entfernt.","","Weitere Hinweise befinden sich nicht im Bericht.","Sie wurden in der Zeitung versteckt.","","Suche den Artikel zum Hafen von Port Vecchia.","","Manchmal lügen Worte.","Das Bild hingegen… vergisst nichts."]}}]}]};function qp(e){return e.type==="folder"?"▣":e.type==="image"?"▧":e.type==="article"?"▤":e.type==="text"?"▥":"◇"}function eh(e){return e.type==="folder"?"Ordner":e.type==="image"?"Bilddatei":e.type==="article"?"Zeitungsausschnitt":e.type==="text"?"Textdatei":"Datei"}function th(){const[e,t]=T.useState([Xi]),[n,r]=T.useState(null),[i,s]=T.useState("name"),[l,c]=T.useState(null),[d,g]=T.useState(!1),[S,y]=T.useState(""),[w,P]=T.useState(!1),[N,E]=T.useState(0),[D,x]=T.useState(!1),[f,h]=T.useState(!1),[o,u]=T.useState(!1),p=(l==null?void 0:l.id)==="porto-vecchia",v="/KM_OS/assets/gzui.png",m=e[e.length-1],k=T.useMemo(()=>[...m.children||[]].sort((A,be)=>{if(A.type==="folder"&&be.type!=="folder")return-1;if(A.type!=="folder"&&be.type==="folder")return 1;const z=String(A[i]||"").toLowerCase(),R=String(be[i]||"").toLowerCase();return z.localeCompare(R)}),[m,i]);function j(){!p||D||f||E(L=>{const A=L+1;return A>=3&&(x(!0),h(!0),setTimeout(()=>{h(!1),u(!0)},1400)),A})}function _(L){if(L.type==="folder"){t(A=>[...A,L]),r(null),c(null),g(!1),y(""),P(!1);return}r(L),c(L),g(!1),y(""),P(!1),E(0),x(!1),h(!1),u(!1)}function B(L){t(A=>A.slice(0,L+1)),r(null)}function $(){e.length<=1||(t(L=>L.slice(0,-1)),r(null))}const V=(n==null?void 0:n.type)==="article"?ai.find(L=>L.id===n.articleId):null;return a.jsxs("div",{className:"archive-explorer",children:[a.jsxs("aside",{className:"archive-tree",children:[a.jsx("div",{className:"archive-tree-title mono",children:"ARCHIVSTRUKTUR"}),Xi.children.map(L=>a.jsxs("button",{type:"button",className:`archive-tree-item ${m.id===L.id?"active":""}`,onClick:()=>{t([Xi,L]),r(null)},children:[a.jsx("span",{children:"▣"}),L.name]},L.id))]}),a.jsxs("main",{className:"archive-main",children:[a.jsxs("header",{className:"archive-toolbar",children:[a.jsx("button",{type:"button",onClick:$,disabled:e.length<=1,children:"← Zurück"}),a.jsx("div",{className:"archive-breadcrumb mono",children:e.map((L,A)=>a.jsxs(Xe.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>B(A),children:L.name}),A<e.length-1?a.jsx("span",{children:"/"}):null]},L.id))}),a.jsxs("select",{value:i,onChange:L=>s(L.target.value),children:[a.jsx("option",{value:"name",children:"Sortieren: Name"}),a.jsx("option",{value:"type",children:"Sortieren: Typ"}),a.jsx("option",{value:"date",children:"Sortieren: Datum"})]})]}),a.jsxs("section",{className:"archive-content",children:[a.jsxs("div",{className:"archive-list",children:[a.jsxs("div",{className:"archive-list-head mono",children:[a.jsx("span",{children:"Name"}),a.jsx("span",{children:"Typ"}),a.jsx("span",{children:"Datum"})]}),k.map(L=>a.jsxs("button",{type:"button",className:`archive-row ${(n==null?void 0:n.id)===L.id?"active":""}`,onClick:()=>r(L),onDoubleClick:()=>_(L),children:[a.jsxs("span",{className:"archive-name",children:[a.jsx("span",{children:qp(L)}),L.name]}),a.jsx("span",{children:eh(L)}),a.jsx("span",{children:L.date||"—"})]},L.id))]}),a.jsx("aside",{className:"archive-preview",children:n?n.type==="text"?a.jsxs("div",{className:"archive-paper",children:[a.jsx("p",{className:"mono",children:"TEXTDATEI"}),a.jsx("h2",{children:n.name}),n.content.map((L,A)=>a.jsx("p",{children:L},A))]}):n.type==="image"?a.jsxs("div",{className:"archive-paper",children:[a.jsx("p",{className:"mono",children:"BILDDATEI"}),a.jsx("h2",{children:n.name}),a.jsx("img",{src:n.image,alt:n.name})]}):n.type==="article"&&V?a.jsxs("div",{className:"archive-paper",children:[a.jsx("p",{className:"mono",children:"ZEITUNGSAUSSCHNITT"}),a.jsx("h2",{children:V.title}),a.jsxs("small",{children:[V.date," · ",V.category]}),V.image?a.jsx("img",{src:V.image,alt:V.title}):null,V.content.map((L,A)=>a.jsx("p",{children:L},A))]}):a.jsx("div",{className:"archive-empty mono",children:"Keine Vorschau verfügbar."}):a.jsx("div",{className:"archive-empty mono",children:"Datei auswählen, um Vorschau zu öffnen."})}),l?a.jsx("div",{className:"archive-file-modal",children:a.jsxs("div",{className:"archive-file-window",children:[a.jsxs("div",{className:"archive-file-window-head mono",children:[a.jsx("span",{children:l.name}),a.jsx("button",{type:"button",onClick:()=>c(null),children:"×"})]}),a.jsx("div",{className:"archive-file-window-body",children:l.type==="text"?a.jsxs("div",{className:"archive-paper archive-open-text",children:[a.jsx("p",{className:"mono",children:"GEÖFFNETE TEXTDATEI"}),a.jsx("h2",{children:p?a.jsx("span",{className:"port-trigger",onClick:j,children:l.name}):l.name}),l.content.map((L,A)=>a.jsx("p",{children:L},A)),D&&a.jsxs("div",{className:"port-secret",children:[f&&a.jsx("div",{className:"port-loading",children:"Daten werden geladen..."}),o&&a.jsxs("div",{className:"port-reveal",children:[a.jsx("a",{href:v,download:"Mafia-Hintergrund.png",children:a.jsx("img",{src:v,alt:"Freigeschaltetes Hintergrundbild",style:{cursor:"pointer"}})}),"        ",a.jsx("p",{className:"mono",children:"ZUGRIFF GEWÄHRT – KLICK ZUM SICHERN"})]})]}),l.secret&&d!==!0&&a.jsx("div",{className:"secret-access",children:a.jsx("button",{type:"button",className:"secret-button",onClick:()=>{g("input"),y(""),P(!1)},children:"Versiegelten Zusatzbericht öffnen"})}),l.secret&&d==="input"&&a.jsxs("div",{className:"secret-box",children:[a.jsx("input",{type:"password",placeholder:"Zugangscode",value:S,onChange:L=>y(L.target.value)}),a.jsx("button",{type:"button",onClick:()=>{S===l.secret.password?(g(!0),P(!1)):P(!0)},children:"Bestätigen"}),w?a.jsx("p",{className:"secret-error",children:"ZUGRIFF VERWEIGERT"}):null]}),l.secret&&d===!0&&a.jsx("div",{className:"secret-content",children:l.secret.content.map((L,A)=>L===""?a.jsx("div",{className:"article-empty-line"},A):a.jsx("p",{children:L},A))})]}):l.type==="image"?a.jsxs("div",{className:"archive-image-viewer",children:[a.jsx("div",{className:"archive-image-viewer-head mono",children:"GEÖFFNETE BILDDATEI"}),a.jsx("h2",{children:l.name}),a.jsx("div",{className:"archive-image-stage",children:a.jsx("img",{src:l.image,alt:l.name})})]}):l.type==="article"?(()=>{const L=ai.find(A=>A.id===l.articleId);return L?a.jsx("div",{className:"archive-article-window",children:a.jsxs("div",{className:"article-modal noir-card",children:[a.jsxs("div",{className:"article-modal-head mono",children:[a.jsx("span",{children:L.category}),a.jsx("span",{children:L.date})]}),a.jsxs("div",{className:"article-modal-body",children:[a.jsx("div",{className:"article-modal-image noir-image",children:a.jsx("img",{src:L.image,alt:L.title})}),a.jsxs("div",{className:"article-modal-text",children:[a.jsx("h2",{children:L.title}),a.jsx("p",{className:"article-lead",children:L.excerpt}),a.jsx("div",{className:"article-paragraphs",children:L.content.map((A,be)=>A===""?a.jsx("div",{className:"article-empty-line"},be):a.jsx("p",{children:A},be))})]})]})]})}):a.jsx("div",{className:"archive-empty mono",children:"Zeitungsausschnitt nicht gefunden."})})():a.jsx("div",{className:"archive-empty mono",children:"Keine Vorschau verfügbar."})})]})}):null]})]})]})}const nh="https://discord.gg/FYKwWRSPmHm";function rh(){const[e,t]=T.useState(""),[n,r]=T.useState(!1),[i,s]=T.useState(!1),[l,c]=T.useState(0),[d,g]=T.useState(""),S=["Schattenleitung wird geöffnet ...","Familienkanal wird gesucht ...","Verbindung zum Netzwerk wird aufgebaut ...","Zugangspunkt bestätigt ...","Verbindung stabil."],y=w=>{w.preventDefault(),s(!0)};return T.useEffect(()=>{if(!i)return;if(l>=S.length){const P=window.setTimeout(()=>{r(!0),s(!1)},1500);return()=>window.clearTimeout(P)}const w=window.setTimeout(()=>{c(P=>P+1)},1700);return()=>window.clearTimeout(w)},[i,l,S.length]),n?a.jsxs("div",{className:"network-app",children:[a.jsx("div",{className:"network-grid-bg"}),a.jsxs("div",{className:"network-panel",children:[a.jsx("p",{className:"network-kicker mono",children:"PRIVATE FAMILY NETWORK"}),a.jsx("h1",{children:"Verbindung hergestellt"}),a.jsx("p",{className:"network-status mono",children:"STATUS: VERBUNDEN"}),a.jsx("p",{className:"network-text",children:"Die Leitung steht. Der Kreis der Familie ist geöffnet. Tauche tiefer ein — aber vergiss nie: Wer einmal eintritt, wird gesehen."}),a.jsx("a",{className:"network-discord-button mono",href:nh,target:"_blank",rel:"noreferrer",children:"DEM NETZWERK BEITRETEN"})]})]}):i?a.jsxs("div",{className:"network-app",children:[a.jsx("div",{className:"network-grid-bg"}),a.jsxs("div",{className:"network-panel",children:[a.jsx("p",{className:"network-kicker mono",children:"NETZWERKPROTOKOLL"}),a.jsx("h1",{children:"Verbindung wird aufgebaut"}),a.jsxs("div",{className:"network-loader",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsxs("div",{className:"network-lines mono",children:[S.slice(0,l).map(w=>a.jsxs("p",{children:["> ",w]},w)),a.jsx("p",{className:"network-blink",children:"> _"})]})]})]}):a.jsxs("div",{className:"network-app",children:[a.jsx("div",{className:"network-grid-bg"}),a.jsxs("div",{className:"network-panel",children:[a.jsx("p",{className:"network-kicker mono",children:"ZUGANG GESPERRT"}),a.jsx("h1",{children:"Das Netzwerk"}),a.jsx("p",{className:"network-text",children:"Dieser Bereich ist noch nicht für die Öffentlichkeit bestimmt. Nur bestätigte Mitglieder der Familie dürfen die Verbindung öffnen."}),a.jsxs("form",{className:"network-login",onSubmit:y,children:[a.jsx("button",{type:"submit",children:"Verbindung öffnen"}),d?a.jsx("p",{className:"network-error mono",children:d}):null]})]})]})}function ih(){return a.jsx("div",{className:"fragment-app",children:a.jsx("div",{className:"fragment-panel",children:a.jsx("pre",{className:"fragment-log",children:`[ SYSTEMPROTOKOLL // FRAGMENT 6 ]

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

BITTE VERLASSEN SIE DIESE APPLIKATION`})})})}const sh="Familia",oh="/KM_OS/",ct=e=>`${oh}assets/${e}`,lh="https://www.youtube.com/embed/SnIAyG4s03A?autoplay=1&loop=1&playlist=SnIAyG4s03A&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1",ta=[{kicker:"Objekt I",title:"The Black Ledger",text:"Berichte, Schlagzeilen und interne Geschichten der Mafia. Später soll sich dieser Bereich wie eine echte Zeitung über die Seite legen.",image:ct("TBL.png")},{kicker:"Objekt II",title:"Das Auge der Mafia",text:"Ein aufschlagbares Werk voller Lore, Feinde, Namen und Geschichte. Kein normaler Infobereich, sondern ein richtiges Mafia-Nachschlagewerk.",image:ct("DADM.png")},{kicker:"Objekt III",title:"Das Archiv",text:"Akten, Hinweise und vertrauliche Inhalte. Ein Ort für das, was nicht offen auf dem Tisch liegen sollte.",image:ct("DA.png")},{kicker:"Objekt IV",title:"Königliche AI Songs",text:"Ein eigener Zugang zu allem, was mit den AI-Songs und weiteren Projekten der Familie verbunden ist.",image:ct("KAIS.png")},{kicker:"Objekt V",title:"Das Netzwerk",text:"Ein Treffpunnkt der Mafia",image:ct("DN.png")},{kicker:"Objekt VI",title:"Fragment",text:"Fragment",image:ct("F.png")}],Ji=["[0001] Initialisiere Schwarzweiß-Protokoll ...","[0002] Lade Noir-Oberfläche ...","[0003] Prüfe Röhrenmonitor-Signal ...","[0004] Aktiviere Filmkorn-Simulation ...","[0005] Verbinde Terminal mit interner Leitung ...","[0006] Suche nach verschlüsselten Familienakten ...","[0007] Aktenarchiv A gefunden ...","[0008] Aktenarchiv B gefunden ...","[0009] Aktenarchiv C gefunden ...","[0010] Lade geheime Zugangsdaten ...","[0011] Prüfe Schattenkanal ...","[0012] Aktiviere Jazz-Frequenz 88.4 ...","[0013] Synchronisiere Mitternachtsprotokolle ...","[0014] Lese Kontakte aus Unterwelt-Verzeichnis ...","[0015] Bestätige Integrität der Maschine ...","[0016] Rekonstruiere beschädigte Bänder ...","[0017] Entschlüssele Kameraarchiv ...","[0018] Öffne interne Zugangsschleuse ...","[0019] Prüfe Nebelgenerator ...","[0020] Analysiere Schreibmaschinenkanal ...","[0021] Verbinde mit Hauptsaal ...","[0022] Verbinde mit Hinterzimmer ...","[0023] Verbinde mit Dachbüro ...","[0024] Lade Stadtplan 1940 ...","[0025] Überprüfe Passwortmodul ..."],ah=[140,220,180,360,170,260,120,120,280,340,150,310,180,210,390,130,320,170,410,140,260,145,155,380,210];function uh({onStart:e}){return a.jsxs("div",{className:"start-screen film-grain",children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"start-center",children:[a.jsx("img",{src:ct("logo-sw.png"),alt:"Mafia Logo",className:"start-logo"}),a.jsx("h1",{children:"KÖNIGLICHE MAFIA"}),a.jsx("button",{onClick:e,className:"start-button mono",children:"SYSTEM STARTEN"})]})]})}function ch({onUnlock:e}){const[t,n]=T.useState(!1),[r,i]=T.useState(""),[s,l]=T.useState(""),[c,d]=T.useState(()=>new Date),[g,S]=T.useState(0),[y,w]=T.useState(0),[P,N]=T.useState(!1);T.useEffect(()=>{let x=!1,f,h;const o=[],u=window.setInterval(()=>{d(new Date)},1e3),p=m=>{if(x)return;if(m>=Ji.length){f=window.setTimeout(()=>{x||n(!0)},900);return}S(m+1);const k=ah[m]??220;f=window.setTimeout(()=>p(m+1),k)},v=()=>{if(x)return;const m=Math.random()>.72?2:1;w(m);const k=window.setTimeout(()=>{x||w(0)},m===2?120:70);o.push(k),h=window.setTimeout(v,900+Math.random()*2400)};return p(0),h=window.setTimeout(v,1200),()=>{x=!0,window.clearTimeout(f),window.clearTimeout(h),window.clearInterval(u),o.forEach(m=>window.clearTimeout(m))}},[]);const E=T.useMemo(()=>c.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),[c]),D=x=>{if(x.preventDefault(),r===sh){l(""),N(!0),window.setTimeout(()=>{e()},1600);return}l("Zugriff verweigert. Falsches Passwort."),i("")};return a.jsxs("div",{className:`boot-screen film-grain flicker-${y}`,children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"boot-frame",children:[a.jsxs("div",{className:"boot-header mono",children:[a.jsx("span",{children:"KÖNIGLICHE MAFIA TERMINAL"}),a.jsx("span",{children:E})]}),t?a.jsxs("div",{className:"login-panel",children:[a.jsxs("div",{children:[a.jsx("p",{className:"panel-kicker mono",children:"Authentifizierung erforderlich"}),a.jsx("h1",{children:"Passwort eingeben"}),a.jsx("p",{className:"panel-text",children:"Dieses System ist nur für Mitglieder der Familie bestimmt. Bitte authentifizieren, um die Hauptseite zu betreten."})]}),P?a.jsxs("div",{className:"password-check mono",children:[a.jsx("p",{children:"Passwort wird überprüft"}),a.jsx("span",{className:"loading-dots",children:"..."})]}):a.jsxs("form",{onSubmit:D,className:"login-form",children:[a.jsx("label",{className:"mono",htmlFor:"password",children:"PASSWORT"}),a.jsx("input",{id:"password",type:"password",value:r,onChange:x=>i(x.target.value),placeholder:"••••",autoFocus:!0}),a.jsx("button",{type:"submit",children:"System entsperren"}),s?a.jsx("p",{className:"error-text mono",children:s}):null]})]}):a.jsxs("div",{className:"boot-sequence mono","aria-live":"polite",children:[Ji.slice(0,g).map(x=>a.jsxs("p",{className:"boot-line visible",children:["> ",x]},x)),a.jsxs("p",{className:`boot-line final-line ${g>=Ji.length?"visible blink":"pending"}`,children:["> Zugriff wird vorbereitet ...",a.jsx("span",{className:"cursor",children:"_"})]})]})]})]})}function dh({onComplete:e}){const[t,n]=T.useState("logo"),[r,i]=T.useState(""),[s,l]=T.useState(""),[c,d]=T.useState(""),[g,S]=T.useState(0);return T.useEffect(()=>{const y=window.setTimeout(()=>{n("success")},2200);return()=>{window.clearTimeout(y)}},[]),T.useEffect(()=>{if(t!=="success")return;const y=["SYSTEMSTATUS","ZUGANG GEWÄHRT","WILLKOMMEN IN DER FAMILIE"];let w=0,P=0,N="",E,D,x;const f=[i,l,d],h=()=>{const o=y[w];if(P<o.length){N+=o[P],f[w](N),P+=1,E=window.setTimeout(h,55);return}D=window.setTimeout(()=>{w+=1,P=0,N="",S(w),w<y.length?h():x=window.setTimeout(()=>{n("fadeout"),window.setTimeout(()=>{e()},700)},900)},450)};return S(0),h(),()=>{window.clearTimeout(E),window.clearTimeout(D),window.clearTimeout(x)}},[t,e]),a.jsxs("div",{className:`intro-transition transition-${t}`,children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"transition-center",children:[t==="logo"&&a.jsxs(a.Fragment,{children:[a.jsx("img",{src:ct("logo-sw.png"),alt:"Mafia Logo",className:"transition-logo"}),a.jsx("p",{className:"mono transition-text",children:"KÖNIGLICHE MAFIA"}),a.jsx("span",{className:"mono transition-subtext",children:"Identität wird geladen ..."})]}),(t==="success"||t==="fadeout")&&a.jsxs("div",{className:"typewriter-block mono",children:[a.jsxs("p",{className:"type-line",children:[r,g===0&&t==="success"?a.jsx("span",{className:"type-cursor",children:"_"}):null]}),a.jsxs("p",{className:"type-line",children:[s,g===1&&t==="success"?a.jsx("span",{className:"type-cursor",children:"_"}):null]}),a.jsxs("p",{className:"type-line",children:[c,g===2&&t==="success"?a.jsx("span",{className:"type-cursor",children:"_"}):null]})]})]})]})}function ph({onComplete:e}){return T.useEffect(()=>{const t=window.setTimeout(()=>{e()},2600);return()=>window.clearTimeout(t)},[e]),a.jsxs("div",{className:"logout-transition film-grain",children:[a.jsx("div",{className:"boot-noise"}),a.jsxs("div",{className:"logout-center mono",children:[a.jsx("p",{children:"VERBINDUNG WIRD GETRENNT"}),a.jsx("h1",{children:"ABMELDUNG"}),a.jsx("span",{className:"loading-dots",children:"..."})]})]})}function hh({audioStarted:e,forceMuted:t=!1}){const n=T.useRef(null),r=T.useRef(null),[i,s]=T.useState(!1),[l,c]=T.useState(70),[d,g]=T.useState(!1),S=(y,w=[])=>{var N;const P=(N=n.current)==null?void 0:N.contentWindow;P&&P.postMessage(JSON.stringify({event:"command",func:y,args:w}),"*")};return T.useEffect(()=>{if(!(!e||!d))return window.clearTimeout(r.current),r.current=window.setTimeout(()=>{S(t||i?"mute":"unMute"),S("setVolume",[l]),S("playVideo")},300),()=>{window.clearTimeout(r.current)}},[e,d,i,l,t]),a.jsxs(a.Fragment,{children:[a.jsx("iframe",{ref:n,title:"Mafia Jazz Audio",src:lh,allow:"autoplay",className:"yt-audio-frame",onLoad:()=>g(!0)}),a.jsx("button",{className:"audio-toggle mono",onClick:()=>s(y=>!y),title:"Audio umschalten",children:i?"🔇":"🔊"})]})}function fh({onLock:e,onCastAudioChange:t}){const[n,r]=T.useState(null),[i,s]=T.useState(!1),[l,c]=T.useState(!1),[d,g]=T.useState(!1),[S,y]=T.useState(!1),[w,P]=T.useState(()=>new Date),[N,E]=T.useState(!1);T.useEffect(()=>{const k=window.setInterval(()=>{P(new Date)},1e3);return()=>window.clearInterval(k)},[]),T.useEffect(()=>{let k;const j=()=>{E(!0),k=window.setTimeout(()=>{E(!1);const _=2200+Math.random()*3200;k=window.setTimeout(j,_)},120)};return k=window.setTimeout(j,2600),()=>window.clearTimeout(k)},[]);const D=(k,j=!0)=>{s(!0),c(j),window.setTimeout(()=>{r(k),s(!1)},650)},x=()=>{r(null),s(!1),c(!1)},f=()=>{g(!0),y(!0),t==null||t(!0),r({title:"Königliche AI Songs"}),c(!0)},h=()=>{g(!1),y(!1),t==null||t(!1),r(null),c(!1)},o=()=>{c(k=>!k)},u=()=>n?n.title==="Königliche AI Songs"?a.jsx("div",{className:"cast-window",children:d?a.jsx("iframe",{className:"cast-frame",src:"https://erdbeerenfresser.github.io/Koenigliche-Mafia/",title:"Königliche AI Songs",allow:"autoplay; clipboard-write; encrypted-media; fullscreen"}):null}):n.title==="The Black Ledger"?a.jsx($p,{}):n.title==="Das Auge der Mafia"?a.jsx(Xp,{}):n.title==="Das Archiv"?a.jsx(th,{}):n.title==="Das Netzwerk"?a.jsx(rh,{}):n.title==="Fragment"?a.jsx(ih,{}):a.jsxs("div",{className:"window-content-live",children:[a.jsxs("div",{className:"window-hero",children:[a.jsx("div",{className:"window-hero-image",children:a.jsx("img",{src:n.image,alt:n.title})}),a.jsxs("div",{className:"window-hero-text",children:[a.jsx("p",{className:"window-kicker mono",children:n.kicker}),a.jsx("h1",{children:n.title}),a.jsx("p",{className:"window-text",children:n.text}),a.jsxs("div",{className:"window-meta mono",children:[a.jsx("span",{children:"ZUGRIFFSSTATUS: GEÖFFNET"}),a.jsx("span",{children:"QUELLE: INTERNES ARCHIV"})]})]})]}),a.jsx("div",{className:"window-file-grid",children:ta.map(k=>a.jsxs("button",{type:"button",className:`file-tile ${(n==null?void 0:n.title)===k.title?"selected":""}`,onClick:()=>D(k),children:[a.jsx("div",{className:"file-tile-image",children:a.jsx("img",{src:k.image,alt:k.title})}),a.jsxs("div",{className:"file-tile-text",children:[a.jsx("p",{className:"mono preview-kicker",children:k.kicker}),a.jsx("h3",{children:k.title}),a.jsx("p",{children:k.text})]})]},k.title))})]}):null,p=w.toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),v=103,m=T.useMemo(()=>{const k=w,j=k.getFullYear()-v;return k.toLocaleDateString("de-DE",{weekday:"short",day:"2-digit",month:"2-digit"})+`${j}`},[w]);return a.jsxs("div",{className:`site-shell film-grain desktop-mode ${N?"desktop-glitch":""}`,children:[a.jsx("div",{className:"desktop-noise"}),a.jsx("div",{className:"desktop-scanlines"}),a.jsxs("header",{className:"desktop-topbar mono",children:[a.jsxs("div",{className:"desktop-topbar-left",children:[a.jsx("span",{children:"KM_OS v1.0"}),a.jsx("span",{children:"PRIVATE FAMILY NETWORK"}),a.jsx("span",{children:"ARCHIVLINK AKTIV"})]}),a.jsxs("div",{className:"desktop-topbar-right",children:[a.jsx("span",{children:m}),a.jsx("span",{children:p}),a.jsx("button",{onClick:e,children:"ABMELDEN"})]})]}),a.jsxs("main",{className:`desktop-screen ${l?"window-is-fullscreen":""}`,children:[a.jsx("aside",{className:`desktop-icons ${l?"is-hidden":""}`,children:ta.map(k=>a.jsxs("button",{className:`desktop-icon ${(n==null?void 0:n.title)===k.title?"active":""}`,type:"button",onClick:()=>{if(k.title==="Königliche AI Songs"){f();return}D(k)},children:[a.jsx("div",{className:"desktop-icon-thumb",children:a.jsx("img",{src:k.image,alt:k.title})}),a.jsx("span",{className:"mono",children:k.title})]},k.title))}),n||i?a.jsxs("section",{className:`desktop-window ${i?"is-opening":""} ${l?"is-fullscreen":""}`,children:[a.jsxs("div",{className:"window-header mono",children:[a.jsxs("div",{className:"window-header-left",children:[a.jsx("span",{children:"AKTIVE DATEI"}),a.jsx("span",{children:"/"}),a.jsx("span",{children:n?n.title.toUpperCase():"WIRD GELADEN"})]}),a.jsxs("div",{className:"window-header-right",children:[a.jsx("button",{className:"window-expand",type:"button",onClick:o,children:l?"▢":"⬜"}),a.jsx("button",{className:"window-close",type:"button",onClick:(n==null?void 0:n.title)==="Königliche AI Songs"?h:x,children:"SCHLIESSEN"}),a.jsx("span",{className:"window-dot"})]})]}),a.jsx("div",{className:"window-body",children:i||!n?a.jsxs("div",{className:"window-loading mono",children:[a.jsx("p",{children:"DATEI WIRD GEÖFFNET"}),a.jsx("span",{className:"loading-dots",children:"..."})]}):u()})]}):a.jsx("section",{className:`desktop-empty mono ${l?"is-hidden":""}`,children:a.jsxs("div",{className:"desktop-empty-inner",children:[a.jsx("p",{className:"desktop-empty-kicker",children:"DESKTOP BEREIT"}),a.jsx("h2",{children:"Keine Datei geöffnet"}),a.jsx("p",{children:"Wähle links eine Verknüpfung, um ein Objekt, Archiv oder Modul zu öffnen."})]})})]}),a.jsxs("footer",{className:"desktop-taskbar mono",children:[a.jsx("span",{children:"SYSTEMSTATUS: STABIL"}),a.jsxs("span",{children:["AKTIVE DATEI: ",n?n.title.toUpperCase():"KEINE DATEI GEÖFFNET"]}),a.jsx("span",{children:"MONOCHROM-MODUS AKTIV"})]})]})}function gh(){const[e,t]=T.useState("start"),[n,r]=T.useState(!1);return a.jsxs(a.Fragment,{children:[e==="start"&&a.jsx(uh,{onStart:()=>t("boot")}),e==="boot"&&a.jsx(ch,{onUnlock:()=>t("intro")}),e==="intro"&&a.jsx(dh,{onComplete:()=>t("site")}),e==="logout"&&a.jsx(ph,{onComplete:()=>t("start")}),e==="site"&&a.jsxs(a.Fragment,{children:[a.jsx(fh,{onLock:()=>t("logout"),onCastAudioChange:r}),a.jsx(hh,{audioStarted:e==="site",forceMuted:n})]}),a.jsx("style",{children:`
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
      `})]})}qi.createRoot(document.getElementById("root")).render(a.jsx(Xe.StrictMode,{children:a.jsx(gh,{})}));
