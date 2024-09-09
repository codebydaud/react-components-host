(function(F,B){typeof exports=="object"&&typeof module<"u"?B(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],B):(F=typeof globalThis<"u"?globalThis:F||self,B(F.React,F.ReactDOM))})(this,function(F,B){"use strict";const ue=globalThis||void 0||self;var er=Object.defineProperty,rr=(t,o,s)=>o in t?er(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,Z=(t,o,s)=>(rr(t,typeof o!="symbol"?o+"":o,s),s);const tr={stringify:t=>t,parse:t=>t},nr={stringify:t=>`${t}`,parse:t=>parseFloat(t)},ar={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},or={stringify:t=>t.name,parse:(t,o,s)=>{const b=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof ue<"u"&&t in ue)return ue[t]})();return typeof b=="function"?b.bind(s):void 0}},ir={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},se={string:tr,number:nr,boolean:ar,function:or,json:ir};function ur(t){return t.replace(/([a-z0-9])([A-Z])/g,(o,s,b)=>`${s}-${b.toLowerCase()}`)}const ee=Symbol.for("r2wc.render"),re=Symbol.for("r2wc.connected"),N=Symbol.for("r2wc.context"),$=Symbol.for("r2wc.props");function sr(t,o,s){var b,L,Y;o.props||(o.props=t.propTypes?Object.keys(t.propTypes):[]);const O=Array.isArray(o.props)?o.props.slice():Object.keys(o.props),p={},l={},_={};for(const f of O){p[f]=Array.isArray(o.props)?"string":o.props[f];const m=ur(f);l[f]=m,_[m]=f}class h extends HTMLElement{constructor(){super(),Z(this,b,!0),Z(this,L),Z(this,Y,{}),Z(this,"container"),o.shadow?this.container=this.attachShadow({mode:o.shadow}):this.container=this,this[$].container=this.container;for(const m of O){const S=l[m],j=this.getAttribute(S),w=p[m],P=w?se[w]:null;P!=null&&P.parse&&j&&(this[$][m]=P.parse(j,S,this))}}static get observedAttributes(){return Object.keys(_)}connectedCallback(){this[re]=!0,this[ee]()}disconnectedCallback(){this[re]=!1,this[N]&&s.unmount(this[N]),delete this[N]}attributeChangedCallback(m,S,j){const w=_[m],P=p[w],A=P?se[P]:null;w in p&&A!=null&&A.parse&&j&&(this[$][w]=A.parse(j,m,this),this[ee]())}[(b=re,L=N,Y=$,ee)](){this[re]&&(this[N]?s.update(this[N],this[$]):this[N]=s.mount(this.container,t,this[$]))}}for(const f of O){const m=l[f],S=p[f];Object.defineProperty(h.prototype,f,{enumerable:!0,configurable:!0,get(){return this[$][f]},set(j){this[$][f]=j;const w=S?se[S]:null;if(w!=null&&w.stringify){const P=w.stringify(j,m,this);this.getAttribute(m)!==P&&this.setAttribute(m,P)}else this[ee]()}})}return h}function Re(t,o,s,b={}){function L(p,l,_){const h=o.createElement(l,_);if("createRoot"in s){const f=s.createRoot(p);return f.render(h),{container:p,root:f,ReactComponent:l}}if("render"in s)return s.render(h,p),{container:p,ReactComponent:l};throw new Error("Invalid ReactDOM instance provided.")}function Y({container:p,root:l,ReactComponent:_},h){const f=o.createElement(_,h);if(l){l.render(f);return}if("render"in s){s.render(f,p);return}}function O({container:p,root:l}){if(l){l.unmount();return}if("unmountComponentAtNode"in s){s.unmountComponentAtNode(p);return}}return sr(t,b,{mount:L,unmount:O,update:Y})}function cr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _e={exports:{}},v=_e.exports={},x,k;function ce(){throw new Error("setTimeout has not been defined")}function le(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?x=setTimeout:x=ce}catch{x=ce}try{typeof clearTimeout=="function"?k=clearTimeout:k=le}catch{k=le}})();function Te(t){if(x===setTimeout)return setTimeout(t,0);if((x===ce||!x)&&setTimeout)return x=setTimeout,setTimeout(t,0);try{return x(t,0)}catch{try{return x.call(null,t,0)}catch{return x.call(this,t,0)}}}function lr(t){if(k===clearTimeout)return clearTimeout(t);if((k===le||!k)&&clearTimeout)return k=clearTimeout,clearTimeout(t);try{return k(t)}catch{try{return k.call(null,t)}catch{return k.call(this,t)}}}var I=[],J=!1,M,te=-1;function fr(){!J||!M||(J=!1,M.length?I=M.concat(I):te=-1,I.length&&we())}function we(){if(!J){var t=Te(fr);J=!0;for(var o=I.length;o;){for(M=I,I=[];++te<o;)M&&M[te].run();te=-1,o=I.length}M=null,J=!1,lr(t)}}v.nextTick=function(t){var o=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)o[s-1]=arguments[s];I.push(new Ce(t,o)),I.length===1&&!J&&Te(we)};function Ce(t,o){this.fun=t,this.array=o}Ce.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={};function W(){}v.on=W,v.addListener=W,v.once=W,v.off=W,v.removeListener=W,v.removeAllListeners=W,v.emit=W,v.prependListener=W,v.prependOnceListener=W,v.listeners=function(t){return[]},v.binding=function(t){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(t){throw new Error("process.chdir is not supported")},v.umask=function(){return 0};var dr=_e.exports;const Oe=cr(dr);var fe={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function pr(){if(Se)return z;Se=1;var t=F,o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,L=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function O(p,l,_){var h,f={},m=null,S=null;_!==void 0&&(m=""+_),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(S=l.ref);for(h in l)b.call(l,h)&&!Y.hasOwnProperty(h)&&(f[h]=l[h]);if(p&&p.defaultProps)for(h in l=p.defaultProps,l)f[h]===void 0&&(f[h]=l[h]);return{$$typeof:o,type:p,key:m,ref:S,props:f,_owner:L.current}}return z.Fragment=s,z.jsx=O,z.jsxs=O,z}var G={},je;function vr(){return je||(je=1,Oe.env.NODE_ENV!=="production"&&function(){var t=F,o=Symbol.for("react.element"),s=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),p=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),j=Symbol.iterator,w="@@iterator";function P(e){if(e===null||typeof e!="object")return null;var r=j&&e[j]||e[w];return typeof r=="function"?r:null}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];br("error",e,n)}}function br(e,r,n){{var a=A.ReactDebugCurrentFrame,c=a.getStackAddendum();c!==""&&(r+="%s",n=n.concat([c]));var d=n.map(function(u){return String(u)});d.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,d)}}var Er=!1,Rr=!1,_r=!1,Tr=!1,wr=!1,xe;xe=Symbol.for("react.module.reference");function Cr(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===Y||wr||e===L||e===_||e===h||Tr||e===S||Er||Rr||_r||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===f||e.$$typeof===O||e.$$typeof===p||e.$$typeof===l||e.$$typeof===xe||e.getModuleId!==void 0))}function Or(e,r,n){var a=e.displayName;if(a)return a;var c=r.displayName||r.name||"";return c!==""?n+"("+c+")":n}function ke(e){return e.displayName||"Context"}function D(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case s:return"Portal";case Y:return"Profiler";case L:return"StrictMode";case _:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var r=e;return ke(r)+".Consumer";case O:var n=e;return ke(n._context)+".Provider";case l:return Or(e,e.render,"ForwardRef");case f:var a=e.displayName||null;return a!==null?a:D(e.type)||"Memo";case m:{var c=e,d=c._payload,u=c._init;try{return D(u(d))}catch{return null}}}return null}var V=Object.assign,X=0,Ae,De,Fe,Ie,We,Le,Ye;function $e(){}$e.__reactDisabledLog=!0;function Sr(){{if(X===0){Ae=console.log,De=console.info,Fe=console.warn,Ie=console.error,We=console.group,Le=console.groupCollapsed,Ye=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}X++}}function jr(){{if(X--,X===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:V({},e,{value:Ae}),info:V({},e,{value:De}),warn:V({},e,{value:Fe}),error:V({},e,{value:Ie}),group:V({},e,{value:We}),groupCollapsed:V({},e,{value:Le}),groupEnd:V({},e,{value:Ye})})}X<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var de=A.ReactCurrentDispatcher,pe;function ne(e,r,n){{if(pe===void 0)try{throw Error()}catch(c){var a=c.stack.trim().match(/\n( *(at )?)/);pe=a&&a[1]||""}return`
`+pe+e}}var ve=!1,ae;{var Pr=typeof WeakMap=="function"?WeakMap:Map;ae=new Pr}function Ne(e,r){if(!e||ve)return"";{var n=ae.get(e);if(n!==void 0)return n}var a;ve=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d;d=de.current,de.current=null,Sr();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(T){a=T}Reflect.construct(e,[],u)}else{try{u.call()}catch(T){a=T}e.call(u.prototype)}}else{try{throw Error()}catch(T){a=T}e()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var i=T.stack.split(`
`),R=a.stack.split(`
`),y=i.length-1,g=R.length-1;y>=1&&g>=0&&i[y]!==R[g];)g--;for(;y>=1&&g>=0;y--,g--)if(i[y]!==R[g]){if(y!==1||g!==1)do if(y--,g--,g<0||i[y]!==R[g]){var C=`
`+i[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),typeof e=="function"&&ae.set(e,C),C}while(y>=1&&g>=0);break}}}finally{ve=!1,de.current=d,jr(),Error.prepareStackTrace=c}var K=e?e.displayName||e.name:"",U=K?ne(K):"";return typeof e=="function"&&ae.set(e,U),U}function xr(e,r,n){return Ne(e,!1)}function kr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function oe(e,r,n){if(e==null)return"";if(typeof e=="function")return Ne(e,kr(e));if(typeof e=="string")return ne(e);switch(e){case _:return ne("Suspense");case h:return ne("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return xr(e.render);case f:return oe(e.type,r,n);case m:{var a=e,c=a._payload,d=a._init;try{return oe(d(c),r,n)}catch{}}}return""}var H=Object.prototype.hasOwnProperty,Me={},Ve=A.ReactDebugCurrentFrame;function ie(e){if(e){var r=e._owner,n=oe(e.type,e._source,r?r.type:null);Ve.setExtraStackFrame(n)}else Ve.setExtraStackFrame(null)}function Ar(e,r,n,a,c){{var d=Function.call.bind(H);for(var u in e)if(d(e,u)){var i=void 0;try{if(typeof e[u]!="function"){var R=Error((a||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}i=e[u](r,u,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){i=y}i&&!(i instanceof Error)&&(ie(c),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,u,typeof i),ie(null)),i instanceof Error&&!(i.message in Me)&&(Me[i.message]=!0,ie(c),E("Failed %s type: %s",n,i.message),ie(null))}}}var Dr=Array.isArray;function he(e){return Dr(e)}function Fr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Ir(e){try{return Ue(e),!1}catch{return!0}}function Ue(e){return""+e}function Be(e){if(Ir(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Fr(e)),Ue(e)}var Q=A.ReactCurrentOwner,Wr={key:!0,ref:!0,__self:!0,__source:!0},Je,qe,me;me={};function Lr(e){if(H.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Yr(e){if(H.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function $r(e,r){if(typeof e.ref=="string"&&Q.current&&r&&Q.current.stateNode!==r){var n=D(Q.current.type);me[n]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(Q.current.type),e.ref),me[n]=!0)}}function Nr(e,r){{var n=function(){Je||(Je=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function Mr(e,r){{var n=function(){qe||(qe=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Vr=function(e,r,n,a,c,d,u){var i={$$typeof:o,type:e,key:r,ref:n,props:u,_owner:d};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function Ur(e,r,n,a,c){{var d,u={},i=null,R=null;n!==void 0&&(Be(n),i=""+n),Yr(r)&&(Be(r.key),i=""+r.key),Lr(r)&&(R=r.ref,$r(r,c));for(d in r)H.call(r,d)&&!Wr.hasOwnProperty(d)&&(u[d]=r[d]);if(e&&e.defaultProps){var y=e.defaultProps;for(d in y)u[d]===void 0&&(u[d]=y[d])}if(i||R){var g=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&Nr(u,g),R&&Mr(u,g)}return Vr(e,i,R,c,a,Q.current,u)}}var ye=A.ReactCurrentOwner,Ke=A.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,n=oe(e.type,e._source,r?r.type:null);Ke.setExtraStackFrame(n)}else Ke.setExtraStackFrame(null)}var ge;ge=!1;function be(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function ze(){{if(ye.current){var e=D(ye.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Br(e){return""}var Ge={};function Jr(e){{var r=ze();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function Xe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Jr(r);if(Ge[n])return;Ge[n]=!0;var a="";e&&e._owner&&e._owner!==ye.current&&(a=" It was passed a child from "+D(e._owner.type)+"."),q(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),q(null)}}function He(e,r){{if(typeof e!="object")return;if(he(e))for(var n=0;n<e.length;n++){var a=e[n];be(a)&&Xe(a,r)}else if(be(e))e._store&&(e._store.validated=!0);else if(e){var c=P(e);if(typeof c=="function"&&c!==e.entries)for(var d=c.call(e),u;!(u=d.next()).done;)be(u.value)&&Xe(u.value,r)}}}function qr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===f))n=r.propTypes;else return;if(n){var a=D(r);Ar(n,e.props,"prop",a,e)}else if(r.PropTypes!==void 0&&!ge){ge=!0;var c=D(r);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Kr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var a=r[n];if(a!=="children"&&a!=="key"){q(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),q(null);break}}e.ref!==null&&(q(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),q(null))}}var Qe={};function Ze(e,r,n,a,c,d){{var u=Cr(e);if(!u){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=Br();R?i+=R:i+=ze();var y;e===null?y="null":he(e)?y="array":e!==void 0&&e.$$typeof===o?(y="<"+(D(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,i)}var g=Ur(e,r,n,c,d);if(g==null)return g;if(u){var C=r.children;if(C!==void 0)if(a)if(he(C)){for(var K=0;K<C.length;K++)He(C[K],e);Object.freeze&&Object.freeze(C)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else He(C,e)}if(H.call(r,"key")){var U=D(e),T=Object.keys(r).filter(function(Zr){return Zr!=="key"}),Ee=T.length>0?"{key: someKey, "+T.join(": ..., ")+": ...}":"{key: someKey}";if(!Qe[U+Ee]){var Qr=T.length>0?"{"+T.join(": ..., ")+": ...}":"{}";E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ee,U,Qr,U),Qe[U+Ee]=!0}}return e===b?Kr(g):qr(g),g}}function zr(e,r,n){return Ze(e,r,n,!0)}function Gr(e,r,n){return Ze(e,r,n,!1)}var Xr=Gr,Hr=zr;G.Fragment=b,G.jsx=Xr,G.jsxs=Hr}()),G}Oe.env.NODE_ENV==="production"?fe.exports=pr():fe.exports=vr();var Pe=fe.exports;const hr=({name:t})=>Pe.jsx("div",{className:"p-3 bg-green-400 text-white rounded text-center",children:t}),mr=({name:t})=>Pe.jsx("button",{className:"bg-green-400 text-white py-2 px-4 rounded border-none cursor-pointer hover:bg-green-700",onClick:()=>alert("Button clicked!"),children:t}),yr=Re(hr,F,B,{props:["name"]}),gr=Re(mr,F,B,{props:["name"]});customElements.define("recipe-title",yr),customElements.define("details-button",gr)});
