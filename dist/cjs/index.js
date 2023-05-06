"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)};var t={exports:{}},r={},n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var w=_.prototype=new g;w.constructor=_,m(w,b.prototype),w.isPureReactComponent=!0;var C=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var o,a={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:u,props:a,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case o:s=!0}}if(s)return i=i(s=e),e=""===a?"."+x(s,0):a,C(i)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),P(i,t,r,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",C(e))for(var c=0;c<e.length;c++){var l=a+x(u=e[c],c);s+=P(u,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(u=e.next()).done;)s+=P(u=u.value,t,r,l=a+x(u,c++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},I={transition:null},D={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=a,r.Profiler=u,r.PureComponent=_,r.StrictMode=i,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!O.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},r.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,t){return L.current.useCallback(e,t)},r.useContext=function(e){return L.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return L.current.useDeferredValue(e)},r.useEffect=function(e,t){return L.current.useEffect(e,t)},r.useId=function(){return L.current.useId()},r.useImperativeHandle=function(e,t,r){return L.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return L.current.useMemo(e,t)},r.useReducer=function(e,t,r){return L.current.useReducer(e,t,r)},r.useRef=function(e){return L.current.useRef(e)},r.useState=function(e){return L.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return L.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return L.current.useTransition()},r.version="18.2.0";var N={exports:{}};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(e,t){"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),h=Symbol.iterator,m="@@iterator";function v(e){if(null===e||"object"!=typeof e)return null;var t=h&&e[h]||e[m];return"function"==typeof t?t:null}var b={current:null},g={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},C={},S=null;function k(e){S=e}C.setExtraStackFrame=function(e){S=e},C.getCurrentStack=null,C.getStackAddendum=function(){var e="";S&&(e+=S);var t=C.getCurrentStack;return t&&(e+=t()||""),e};var O=!1,R=!1,E=!1,j=!1,x=!1,P={ReactCurrentDispatcher:b,ReactCurrentBatchConfig:g,ReactCurrentOwner:w};function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];L("warn",e,r)}function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];L("error",e,r)}function L(e,t,r){var n=P.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}P.ReactDebugCurrentFrame=C,P.ReactCurrentActQueue=_;var I={};function D(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;I[o]||(T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),I[o]=!0)}var N={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){D(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){D(e,"replaceState")},enqueueSetState:function(e,t,r,n){D(e,"setState")}},A=Object.assign,M={};function F(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||N}Object.freeze(M),F.prototype.isReactComponent={},F.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},F.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},z=function(e,t){Object.defineProperty(F.prototype,e,{get:function(){$("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var U in V)V.hasOwnProperty(U)&&z(U,V[U]);function q(){}function B(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||N}q.prototype=F.prototype;var H=B.prototype=new q;H.constructor=B,A(H,F.prototype),H.isPureReactComponent=!0;var Y=Array.isArray;function W(e){return Y(e)}function G(e){return""+e}function K(e){if(function(e){try{return G(e),!1}catch(e){return!0}}(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),G(e)}function J(e){return e.displayName||"Context"}function X(e){if(null==e)return null;if("number"==typeof e.tag&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return J(e)+".Consumer";case u:return J(e._context)+".Provider";case c:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var t=e.displayName||null;return null!==t?t:X(e.type)||"Memo";case d:var r=e,y=r._payload,h=r._init;try{return X(h(y))}catch(e){return null}}return null}var Z,Q,ee,te=Object.prototype.hasOwnProperty,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(e){if(te.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function oe(e){if(te.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}ee={};var ae=function(e,t,n,o,a,i,u){var s={$$typeof:r,type:e,key:t,ref:n,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function ie(e,t,r){var n,o={},a=null,i=null,u=null,s=null;if(null!=t)for(n in ne(t)&&(i=t.ref,function(e){if("string"==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=X(w.current.type);ee[t]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),ee[t]=!0)}}(t)),oe(t)&&(K(t.key),a=""+t.key),u=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)te.call(t,n)&&!re.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){Z||(Z=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),i&&function(e,t){var r=function(){Q||(Q=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ae(e,a,i,u,s,w.current,o)}function ue(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=A({},e.props),i=e.key,u=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=t)for(n in ne(t)&&(u=t.ref,l=w.current),oe(t)&&(K(t.key),i=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)te.call(t,n)&&!re.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ae(e.type,i,u,s,c,l,a)}function se(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var ce=".",le=":";var fe=!1,pe=/\/+/g;function de(e){return e.replace(pe,"$&/")}function ye(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(K(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function he(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s,c,l,f=!1;if(null===e)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=i(p),y=""===a?ce+ye(p,0):a;if(W(d)){var h="";null!=y&&(h=de(y)+"/"),he(d,t,h,"",(function(e){return e}))}else null!=d&&(se(d)&&(!d.key||p&&p.key===d.key||K(d.key),s=d,c=o+(!d.key||p&&p.key===d.key?"":de(""+d.key)+"/")+y,d=ae(s.type,c,s.ref,s._self,s._source,s._owner,s.props)),t.push(d));return 1}var m=0,b=""===a?ce:a+le;if(W(e))for(var g=0;g<e.length;g++)m+=he(l=e[g],t,o,b+ye(l,g),i);else{var _=v(e);if("function"==typeof _){var w=e;_===w.entries&&(fe||$("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),fe=!0);for(var C,S=_.call(w),k=0;!(C=S.next()).done;)m+=he(l=C.value,t,o,b+ye(l,k++),i)}else if("object"===u){var O=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return m}function me(e,t,r){if(null==e)return e;var n=[],o=0;return he(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var ve,be=-1,ge=0,_e=1,we=2;function Ce(e){if(e._status===be){var t=(0,e._result)();if(t.then((function(t){if(e._status===ge||e._status===be){var r=e;r._status=_e,r._result=t}}),(function(t){if(e._status===ge||e._status===be){var r=e;r._status=we,r._result=t}})),e._status===be){var r=e;r._status=ge,r._result=t}}if(e._status===_e){var n=e._result;return void 0===n&&T("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||T("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function Se(e){return"string"==typeof e||"function"==typeof e||(!!(e===o||e===i||x||e===a||e===l||e===f||j||e===y||O||R||E)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===u||e.$$typeof===s||e.$$typeof===c||e.$$typeof===ve||void 0!==e.getModuleId))}function ke(){var e=b.current;return null===e&&T("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ve=Symbol.for("react.module.reference");var Oe,Re,Ee,je,xe,Pe,$e,Te=0;function Le(){}Le.__reactDisabledLog=!0;var Ie,De=P.ReactCurrentDispatcher;function Ne(e,t,r){if(void 0===Ie)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||""}return"\n"+Ie+e}var Ae,Me=!1,Fe="function"==typeof WeakMap?WeakMap:Map;function Ve(e,t){if(!e||Me)return"";var r,n=Ae.get(e);if(void 0!==n)return n;Me=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=De.current,De.current=null,function(){if(0===Te){Oe=console.log,Re=console.info,Ee=console.warn,je=console.error,xe=console.group,Pe=console.groupCollapsed,$e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Le,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Te++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var u=t.stack.split("\n"),s=r.stack.split("\n"),c=u.length-1,l=s.length-1;c>=1&&l>=0&&u[c]!==s[l];)l--;for(;c>=1&&l>=0;c--,l--)if(u[c]!==s[l]){if(1!==c||1!==l)do{if(c--,--l<0||u[c]!==s[l]){var f="\n"+u[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Ae.set(e,f),f}}while(c>=1&&l>=0);break}}}finally{Me=!1,De.current=o,function(){if(0==--Te){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:Oe}),info:A({},e,{value:Re}),warn:A({},e,{value:Ee}),error:A({},e,{value:je}),group:A({},e,{value:xe}),groupCollapsed:A({},e,{value:Pe}),groupEnd:A({},e,{value:$e})})}Te<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Ne(p):"";return"function"==typeof e&&Ae.set(e,d),d}function ze(e,t,r){if(null==e)return"";if("function"==typeof e)return Ve(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Ne(e);switch(e){case l:return Ne("Suspense");case f:return Ne("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case c:return Ve(e.render,!1);case p:return ze(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return ze(a(o),t,r)}catch(e){}}return""}Ae=new Fe;var Ue,qe={},Be=P.ReactDebugCurrentFrame;function He(e){if(e){var t=e._owner,r=ze(e.type,e._source,t?t.type:null);Be.setExtraStackFrame(r)}else Be.setExtraStackFrame(null)}function Ye(e){if(e){var t=e._owner;k(ze(e.type,e._source,t?t.type:null))}else k(null)}function We(){if(w.current){var e=X(w.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}Ue=!1;var Ge={};function Ke(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=We();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ge[r]){Ge[r]=!0;var n="";e&&e._owner&&e._owner!==w.current&&(n=" It was passed a child from "+X(e._owner.type)+"."),Ye(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ye(null)}}}function Je(e,t){if("object"==typeof e)if(W(e))for(var r=0;r<e.length;r++){var n=e[r];se(n)&&Ke(n,t)}else if(se(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)se(a.value)&&Ke(a.value,t)}}function Xe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==c&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=X(r);!function(e,t,r,n,o){var a=Function.call.bind(te);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}u=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){u=e}!u||u instanceof Error||(He(o),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof u),He(null)),u instanceof Error&&!(u.message in qe)&&(qe[u.message]=!0,He(o),T("Failed %s type: %s",r,u.message),He(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!Ue){Ue=!0,T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",X(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ze(e,t,n){var a,i,u=Se(e);if(!u){var s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c,l=null!=(a=t)&&void 0!==(i=a.__source)?"\n\nCheck your code at "+i.fileName.replace(/^.*[\\\/]/,"")+":"+i.lineNumber+".":"";s+=l||We(),null===e?c="null":W(e)?c="array":void 0!==e&&e.$$typeof===r?(c="<"+(X(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var f=ie.apply(this,arguments);if(null==f)return f;if(u)for(var p=2;p<arguments.length;p++)Je(arguments[p],e);return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ye(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ye(null);break}}null!==e.ref&&(Ye(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),Ye(null))}(f):Xe(f),f}var Qe=!1;var et=!1,tt=null;var rt=0,nt=!1;function ot(e){e!==rt-1&&T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),rt=e}function at(t,r,n){var o=_.current;if(null!==o)try{ut(o),function(t){if(null===tt)try{var r=("require"+Math.random()).slice(0,7);tt=(e&&e[r]).call(e,"timers").setImmediate}catch(e){tt=function(e){!1===et&&(et=!0,"undefined"==typeof MessageChannel&&T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}tt(t)}((function(){0===o.length?(_.current=null,r(t)):at(t,r,n)}))}catch(e){n(e)}else r(t)}var it=!1;function ut(e){if(!it){it=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{it=!1}}}var st=Ze,ct=function(e,t,r){for(var n=ue.apply(this,arguments),o=2;o<arguments.length;o++)Je(arguments[o],n.type);return Xe(n),n},lt=function(e){var t=Ze.bind(null,e);return t.type=e,Qe||(Qe=!0,$("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return $("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ft={map:me,forEach:function(e,t,r){me(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return me(e,(function(){t++})),t},toArray:function(e){return me(e,(function(e){return e}))||[]},only:function(e){if(!se(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=ft,t.Component=F,t.Fragment=o,t.Profiler=i,t.PureComponent=B,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=ct,t.createContext=function(e){var t={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:u,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:s,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||($("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=st,t.createFactory=lt,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?T("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&T("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:c,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=se,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:be,_result:e},_init:Ce};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){Se(e)||T("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=g.transition;g.transition={};var n=g.transition;g.transition._updatedFibers=new Set;try{e()}finally{if(g.transition=r,null===r&&n._updatedFibers)n._updatedFibers.size>10&&$("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear()}},t.unstable_act=function(e){var t=rt;rt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,ut(o))}}catch(e){throw ot(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,i=!1,u={then:function(e,r){i=!0,a.then((function(n){ot(t),0===rt?at(n,e,r):e(n)}),(function(e){ot(t),r(e)}))}};return nt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){i||(nt=!0,T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),u}var s=r;if(ot(t),0===rt){var c=_.current;return null!==c&&(ut(c),_.current=null),{then:function(e,t){null===_.current?(_.current=[],at(s,e,t)):e(s)}}}return{then:function(e,t){e(s)}}},t.useCallback=function(e,t){return ke().useCallback(e,t)},t.useContext=function(e){var t=ke();if(void 0!==e._context){var r=e._context;r.Consumer===e?T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return ke().useDebugValue(e,t)},t.useDeferredValue=function(e){return ke().useDeferredValue(e)},t.useEffect=function(e,t){return ke().useEffect(e,t)},t.useId=function(){return ke().useId()},t.useImperativeHandle=function(e,t,r){return ke().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return ke().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return ke().useLayoutEffect(e,t)},t.useMemo=function(e,t){return ke().useMemo(e,t)},t.useReducer=function(e,t,r){return ke().useReducer(e,t,r)},t.useRef=function(e){return ke().useRef(e)},t.useState=function(e){return ke().useState(e)},t.useSyncExternalStore=function(e,t,r){return ke().useSyncExternalStore(e,t,r)},t.useTransition=function(){return ke().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(N,N.exports),"production"===process.env.NODE_ENV?t.exports=r:t.exports=N.exports;var A=!!(typeof window<"u"&&window.document&&window.document.createElement);(()=>{try{if(A){let e=document.createElement("template");e.innerHTML='\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';class t extends HTMLElement{constructor(){super(),this.right="0",this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(this.ownerDocument.importNode(e.content,!0)),this.update()}static get observedAttributes(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}setAttr(e,t){let r=this.shadow.querySelector("svg");/(href)/.test(e.toLocaleLowerCase())?r.lastElementChild.setAttribute("xlink:href",t):/(color|fill)/.test(e.toLocaleLowerCase())?r.firstElementChild.style[e]=t:/(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase())?r.style[e]=t:r.setAttribute(e,t)}update(){[...this.getAttributeNames(),"right"].forEach((e=>{let t=this.getAttribute(e)||this[e]||"";this.setAttr(e,t)}))}attributeChangedCallback(e,t,r){t!==r&&this.setAttr(e,r)}}customElements.define("github-corners",t)}}catch{}})();exports.GithubCorners=function(r){var n=r.size,o=void 0===n?80:n,a=r.fixed,i=void 0!==a&&a,u=r.bottom,s=r.zIndex;r.className;var c=r.style,l=r.bgColor,f=void 0===l?"#151513":l,p=r.color,d=void 0===p?"#fff":p,y=r.position,h=void 0===y?"right":y,m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(r,["size","fixed","bottom","zIndex","className","style","bgColor","color","position"]),v="left"===h?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return u?(v.bottom=0,v.top="initial",v.transform="left"===h?"scale(-1, -1)":"scale(1, -1)"):(v.bottom="initial",v.top=0),t.exports.createElement("github-corners",e({target:"__blank",width:o,height:o,href:r.href,position:i?"fixed":"absolute","z-index":s,style:c,fill:f,color:d},v,m))};
//# sourceMappingURL=index.js.map
