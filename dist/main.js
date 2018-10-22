!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${n}`),o=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let i=-1,n=0;const a=[],l=e=>{const h=e.content,u=document.createTreeWalker(h,133,null,!1);let p,m;for(;u.nextNode();){i++,p=m;const e=m=u.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let l=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(s)>=0&&l++;for(;l-- >0;){const s=t.strings[n],a=c.exec(s)[2],l=o&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),d=e.getAttribute(l).split(r);this.parts.push({type:"attribute",index:i,name:a,strings:d}),e.removeAttribute(l),n+=d.length-1}}"TEMPLATE"===e.tagName&&l(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(s)<0)continue;const o=e.parentNode,l=t.split(r),c=l.length-1;n+=c;for(let t=0;t<c;t++)o.insertBefore(""===l[t]?d():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:i++});o.insertBefore(""===l[c]?d():document.createTextNode(l[c]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===s){const t=e.parentNode,s=e.previousSibling;null===s||s!==p||s.nodeType!==Node.TEXT_NODE?t.insertBefore(d(),e):i--,this.parts.push({type:"node",index:i++}),a.push(e),null===e.nextSibling?t.insertBefore(d(),e):i--,m=p,n++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(s,t+1));)this.parts.push({type:"node",index:-1})}}};l(e);for(const t of a)t.parentNode.removeChild(t)}}const l=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,h=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function u(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,h,null,!1);let r=m(s),o=s[r],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,o=s[r=m(s,r)]}d.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const i=document.createTreeWalker(t,h,null,!1);for(;i.nextNode();)e++;return e},m=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,g=(t,e,i=null)=>{let s=e;for(;s!==i;){const e=s.nextSibling;t.removeChild(s),s=e}},v=new WeakMap,_=t=>"function"==typeof t&&v.has(t),y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this._getTemplate=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=f?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,s=0;const n=t=>{const r=document.createTreeWalker(t,133,null,!1);let o=r.nextNode();for(;i<e.length&&null!==o;){const t=e[i];if(l(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this._getTemplate);t.insertAfterNode(o),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings));i++}else s++,"TEMPLATE"===o.nodeName&&n(o.content),o=r.nextNode();else this._parts.push(void 0),i++}};return n(t),f&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!0;for(let r=0;r<t;r++){const t=this.strings[r];e+=t;const a=t.lastIndexOf(">");!(i=(a>-1||i)&&-1===t.indexOf("<",a+1))&&o&&(e=e.replace(c,(t,e,i,s)=>"style"===i?`${e}style$${s}`:t)),e+=i?n:s}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>null===t||!("object"==typeof t||"function"==typeof t);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||x(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this._pendingValue=void 0,this.templateFactory=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=d()),t._insert(this.endNode=d())}insertAfterPart(t){t._insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;_(this._pendingValue);){const t=this._pendingValue;this._pendingValue=y,t(this)}const t=this._pendingValue;t!==y&&(x(t)?t!==this.value&&this._commitText(t):t instanceof w?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.templateFactory),s=i._clone();i.update(t.values),this._commitNode(s),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)void 0===(i=e[s])&&(i=new N(this.templateFactory),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){g(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;_(this._pendingValue);){const t=this._pendingValue;this._pendingValue=y,t(this)}if(this._pendingValue===y)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=y}}class E extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends P{}class ${constructor(t,e){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e}setValue(t){this._pendingValue=t}commit(){for(;_(this._pendingValue);){const t=this._pendingValue;this._pendingValue=y,t(this)}this._pendingValue!==y&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=y)}handleEvent(t){"function"==typeof this.value?this.value.call(this.element,t):"function"==typeof this.value.handleEvent&&this.value.handleEvent(t)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new Map,C=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function F(t,e,i=function(t){let e=V.get(t.type);void 0===e&&(e=new Map,V.set(t.type,e));let i=e.get(t.strings);return void 0===i&&(i=new a(t,t.getTemplateElement()),e.set(t.strings,i)),i}){let s=C.get(e);void 0===s&&(g(e,e.firstChild),C.set(e,s=new N(i)),s.appendInto(e)),s.setValue(t),s.commit()}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=new class{handleAttributeExpressions(t,e,i){const s=e[0];return"."===s?new E(t,e.slice(1),i).parts:"@"===s?[new $(t,e.slice(1))]:"?"===s?[new T(t,e.slice(1),i)]:new S(t,e,i).parts}handleTextExpression(t){return new N(t)}},O=(t,...e)=>new w(t,e,"html",A),k=(t,e)=>`${t}--${e}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),z=!1);const R=t=>e=>{const i=k(e.type,t);let s=V.get(i);void 0===s&&(s=new Map,V.set(i,s));let n=s.get(e.strings);if(void 0===n){const i=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,t),n=new a(e,i),s.set(e.strings,n)}return n},j=["html","svg"];const L=new Set,B=(t,e,i)=>{L.add(i);const s=t.querySelectorAll("style");if(0===s.length)return;const n=document.createElement("style");for(let t=0;t<s.length;t++){const e=s[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}if(function(t){j.forEach(e=>{const i=V.get(k(e,t));void 0!==i&&i.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),u(t,i)})})}(i),function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null===i||void 0===i)return void s.appendChild(e);const r=document.createTreeWalker(s,h,null,!1);let o=m(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=p(e),i.parentNode.insertBefore(e,i));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=m(n,o);return}o=m(n,o)}}(e,n,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i),window.ShadyCSS.nativeShadow){const i=e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(n,e.element.content.firstChild);const t=new Set;t.add(n),u(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=t=>null!==t,U=t=>t?"":null,D=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,reflect:!1,hasChanged:D},W=new Promise(t=>t(!0)),H=1,X=4,G=8;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,i]of this._classProperties){const s=this._attributeNameForProperty(e,i);void 0!==s&&(this._attributeToPropertyMap.set(s,e),t.push(s))}return t}static createProperty(t,e=q){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(s){const n=this[t];this[i]=s,this._requestPropertyUpdate(t,n,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,i=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of i)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const i=void 0!==e&&e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=D){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e&&e.type;if(void 0===i)return t;const s=i===Boolean?I:"function"==typeof i?i:i.fromAttribute;return s?s(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?U:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&H?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=q){const s=this.constructor,n=s._propertyValueToAttribute(e,i);if(void 0!==n){const e=s._attributeNameForProperty(t,i);void 0!==e&&(this._updateState=this._updateState|G,null===n?this.removeAttribute(e):this.setAttribute(e,n),this._updateState=this._updateState&~G)}}_attributeToProperty(t,e){if(!(this._updateState&G)){const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i._classProperties.get(s);this[s]=i._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const i=this.constructor._classProperties.get(t)||q;return this._requestPropertyUpdate(t,e,i)}return this._invalidate()}_requestPropertyUpdate(t,e,i){return this.constructor._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===i.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|X;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&X}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&H||(this._updateState=this._updateState|H,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}Z._attributeToPropertyMap=new Map,Z._finalized=!0,Z._classProperties=new Map,Z.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
J((t,e)=>t.querySelector(e)),J((t,e)=>t.querySelectorAll(e));function J(t){return e=>(i,s)=>{Object.defineProperty(i,s,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}class K extends Z{update(t){if(super.update(t),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}K.render=function(t,e,i){const s=C.has(e);if(F(t,e,R(i)),e instanceof ShadowRoot&&z&&t instanceof w){if(!L.has(i)){const t=C.get(e).value;B(e,t.template,i)}s||window.ShadyCSS.styleElement(e.host)}};customElements.define("audio-recorder",class extends K{static get properties(){return{recording:{type:Boolean},saving:{type:Boolean},seconds:{type:Number}}}constructor(){super(),this._ticker=null,this._chunks=[],this._recorder=null}_startRecording(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,navigator.mediaDevices.getUserMedia({audio:!0}).then(t=>{this._recorder=new MediaRecorder(t),this.seconds=0,this._ticker=setInterval(()=>this.seconds++,1e3),this.recording=!0,window.navigator.vibrate(100),this._recorder.start(),this._recorder.addEventListener("dataavailable",t=>{this._chunks.push(t.data)})})}_stopRecording(){this._recorder.addEventListener("stop",t=>{this.dispatchEvent(new CustomEvent("audio-recorded",{detail:{date:new Date,blob:new Blob(this._chunks)}})),this._chunks=[],this._recorder=null,this.saving=!1}),clearInterval(this._ticker),this.recording=!1,this.saving=!0,this._recorder.stop()}render(){return O`
            <style>
                :host {
                    display: flex;
                    padding: 1rem .5rem;                    
                    user-select: none;
                    background: #333;
                    color: #FFF;
                    position: relative;
                    overflow: hidden;
                }
                .left {
                    flex-basis: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 1rem;
                    position: relative;
                    z-index: 2;
                }
                .right {
                    flex: 1 1;
                    display: flex;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }
                .right span {
                    font-size: 1.5rem;
                }
                .right p {
                    font-style: italic;
                }
                .record {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    background: #666;
                    border: none;
                    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
                    outline: none;
                    position: relative;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .record svg {
                    position: relative;
                    z-index: 2;
                }
                .record .btn-fill {
                    background: #f44242;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    z-index: 1;
                    transform: scale(0);
                    transition: transform 300ms ease-in;
                }
                .record.recording .btn-fill {
                    transform: scale(1);
                }
                .fill {
                    position: absolute;
                    z-index: 1;
                    left: calc(50% - 45px);
                    top: 0;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: #cc3737;
                    transform: scale(0);
                    transition: transform 300ms ease-in;
                }
                .fill.recording {
                    transform: scale(5);
                }
            </style>
            <div class="fill ${this.recording?"recording":""}"></div>
            <div class="left">
                <a href="javascript:void(0)" class="record ${this.recording?"recording":""}" @touchstart=${t=>this._startRecording(t)} @touchend=${t=>this._stopRecording(t)}>
                    <div class="btn-fill"></div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M19 11v-1h-2v1c0 2.756-2.244 5-5 5s-5-2.244-5-5v-1h-2v1c0 3.522 2.613 6.441 6 6.928v1.572c0 0.6-0.494 1.212-1.35 1.681-0.966 0.528-2.262 0.819-3.65 0.819v1h12v-1c-1.387 0-2.684-0.291-3.65-0.819-0.859-0.469-1.35-1.081-1.35-1.681v-1.572c3.387-0.488 6-3.406 6-6.928zM13.763 22h-3.525c1.094-0.631 1.763-1.512 1.763-2.5 0 0.987 0.669 1.869 1.762 2.5z"></path>
                        <path d="M12 15c2.206 0 4-1.794 4-4v-6c0-2.206-1.794-4-4-4s-4 1.794-4 4v6c0 2.206 1.794 4 4 4zM10 5c0-1.103 0.897-2 2-2s2 0.897 2 2v6c0 1.103-0.897 2-2 2s-2-0.897-2-2v-6z"></path>
                    </svg>
                </a>
            </div>
            <div class="right">
        ${this.recording?O`<span>00:00:${(this.seconds+"").padStart(2,"0")}</span>`:O`<p>Press and hold to record</p>`}                    
            </div>                      
        `}});customElements.define("audio-player",class extends K{static get properties(){return{playing:{type:Boolean},duration:{type:Number},seconds:{type:Number},src:{type:String,attribute:!0},date:{type:String}}}constructor(){super(),this._$audio=null,this._ticker=null,this._metadataLoaded=this._metadataLoaded.bind(this),this._share=this._share.bind(this)}toggle(){this.playing?(this._$audio.pause(),this._$audio.currentTime=0,this.playing=!1,clearInterval(this._ticker)):(this.playing=!0,this._$audio.addEventListener("ended",()=>{this.playing=!1,clearInterval(this._ticker)},{once:!0}),this.seconds=0,this._ticker=setInterval(()=>this.seconds++,1e3),this._$audio.play())}_metadataLoaded(){null===this._$audio&&(this._$audio=this.shadowRoot.getElementById("audio")),this._$audio.duration===1/0?(this._$audio.addEventListener("timeupdate",()=>{this._$audio.currentTime=0,this.duration=this._$audio.duration},{once:!0}),this._$audio.currentTime=1e6):this.duration=this._$audio.duration}_share(){this.dispatchEvent(new CustomEvent("share",{detail:this.src}))}_getDays(){const t=Math.round(Math.abs((new Date(this.date).getTime()-(new Date).getTime())/864e5));return t>0?O`Recorded ${t} days ago`:O`Recorded today`}_getDuration(){const t=Math.round(this.duration,1);return O`${t} second${0===t||t>1?"s":""}`}render(){return O`
            <style>
                :host {
                    display: flex;
                    padding: 1rem .5rem;                    
                    user-select: none;
                    position: relative;
                    overflow: hidden;
                }
                .left {
                    flex-basis: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 1rem;
                    position: relative;
                    z-index: 2;
                }
                .right {
                    flex: 1 1;
                    flex-direction: column;
                    display: flex;
                    font-size: 1.1rem;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }
                .right span {
                    font-size: 1.5rem;
                    color: #FFF;
                }
                .right p {
                    font-style: italic;
                }
                .very-right {
                    flex-basis: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .play {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    background: #666;
                    border: none;
                    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
                    outline: none;
                    position: relative;
                    padding: 0;
                    overflow: hidden;
                }
                .fill {
                    position: absolute;
                    z-index: 1;
                    left: calc(50% - 45px);
                    top: 0;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: #35C335;
                    transform: scale(0);
                    transition: transform 300ms ease-in;
                }
                .fill.playing {
                    transform: scale(5);
                }
            </style>
            <div class="fill ${this.playing?"playing":""}"></div>          
            <div class="left">
                <audio id="audio" src=${this.src} preload="metadata" @loadedmetadata=${this._metadataLoaded}></audio>
                <a class="play" @click=${()=>this.toggle()}>
                    ${this.playing?O`
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                            <path d="M21 2h-18c-0.553 0-1 0.447-1 1v18c0 0.553 0.447 1 1 1h18c0.553 0 1-0.447 1-1v-18c0-0.553-0.447-1-1-1zM20 20h-16v-16h16v16z"></path>
                        </svg>
                    `:O`
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                            <path d="M20.516 11.144l-15-9c-0.309-0.184-0.694-0.191-1.006-0.012-0.316 0.175-0.509 0.509-0.509 0.869v18c0 0.359 0.194 0.694 0.506 0.869 0.153 0.087 0.322 0.131 0.494 0.131 0.178 0 0.356-0.047 0.516-0.144l15-9c0.3-0.181 0.484-0.506 0.484-0.856s-0.184-0.678-0.484-0.856zM6 19.234v-14.469l12.056 7.234-12.056 7.234z"></path>
                        </svg>
                    `} 
                </a>
            </div>
            <div class="right">
                ${this.playing?O`<span>00:00:${(this.seconds+"").padStart(2,"0")}</span>`:O`
                    ${this.date?O`<div>${this._getDays()}</div>`:""}
                    <div>Duration: ${this._getDuration()}</div>
                `}
            </div>
            <div class="very-right">
                <a href="javascript:void(0)" @click=${this._share}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M23.656 1.244c-0.297-0.256-0.712-0.319-1.069-0.156l-22 10c-0.384 0.175-0.616 0.569-0.584 0.987s0.319 0.772 0.722 0.888l6.275 1.791v7.247c0 0.441 0.288 0.828 0.709 0.956 0.097 0.028 0.194 0.044 0.291 0.044 0.328 0 0.644-0.162 0.831-0.447l3.513-5.262 5.209 2.606c0.266 0.131 0.575 0.141 0.847 0.022s0.478-0.35 0.559-0.634l5-17c0.109-0.378-0.009-0.784-0.303-1.041zM3.888 11.784l14.078-6.4-9.603 7.684c-0.028-0.012-0.059-0.022-0.087-0.031l-4.387-1.253zM9 18.697v-4.697c0-0.050-0.003-0.1-0.012-0.15l10.472-8.378-8.228 9.888c-0.022 0.028-0.044 0.056-0.063 0.084l-2.169 3.253zM17.378 17.572l-4.722-2.362 8.375-10.066-3.653 12.428z"></path>
                    </svg>
                </a>
            </div>                   
        `}});const Q={};function Y(t){return window.parent?new Promise((e,i)=>{const s=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}(),n={_id:s,...t};!function(t,e){Q[t]=e}(s,function(t){console.log("RESPONSE:",t),!0===t.success?e(t.data):i(t.error)}),window.parent.postMessage(n,"*")}):(console.warn("⚠️ No parent context available, app probably not running within Clinical Messaging."),Promise.resolve())}window.addEventListener("message",function(t){const e=Q[t.data._id];e&&(e(t.data),delete Q[t.data._id])});var tt={sendText:function(t){return Y({action:"populate_message_input",data:t})}};let et=[];const it=document.getElementById("list");function st(t){return O`${t.map(t=>O`
        <div class="item"><audio-player src=${t.url} date=${t.date} @share=${function(t){console.log("SHARE:",t.detail),tt.sendText("HELLO!").then(()=>console.log("Success!")).catch(t=>console.error("Oh no!",t))}}></audio-player></div>
    `)}`}document.querySelector("audio-recorder").addEventListener("audio-recorded",t=>{F(st(et=[{...t.detail,url:URL.createObjectURL(t.detail.blob)},...et]),it)}),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js")})}]);