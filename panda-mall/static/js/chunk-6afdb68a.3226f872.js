(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6afdb68a"],{"001d":function(t,e,n){"use strict";var r=n("0d7d"),o=n.n(r);o.a},"0d7d":function(t,e,n){},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4b10":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),a=n("ae40"),c=i("filter"),s=a("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4eb5":function(t,e,n){var r=n("6981"),o={autoSetContainer:!1,appendToBody:!0},i={install:function(t){t.prototype.$clipboardConfig=o,t.prototype.$copyText=function(t,e){return new Promise((function(n,i){var a=document.createElement("button"),c=new r(a,{text:function(){return t},action:function(){return"copy"},container:"object"===typeof e?e:document.body});c.on("success",(function(t){c.destroy(),n(t)})),c.on("error",(function(t){c.destroy(),i(t)})),o.appendToBody&&document.body.appendChild(a),a.click(),o.appendToBody&&document.body.removeChild(a)}))},t.directive("clipboard",{bind:function(t,e,n){if("success"===e.arg)t._vClipboard_success=e.value;else if("error"===e.arg)t._vClipboard_error=e.value;else{var i=new r(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:o.autoSetContainer?t:void 0});i.on("success",(function(e){var n=t._vClipboard_success;n&&n(e)})),i.on("error",(function(e){var n=t._vClipboard_error;n&&n(e)})),t._vClipboard=i}},update:function(t,e){"success"===e.arg?t._vClipboard_success=e.value:"error"===e.arg?t._vClipboard_error=e.value:(t._vClipboard.text=function(){return e.value},t._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._vClipboard_success:"error"===e.arg?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard)}})},config:o};t.exports=i},5277:function(t,e,n){"use strict";var r=n("4b10"),o=n.n(r);o.a},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},6981:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(e,n){t.exports=n()}(0,(function(){return n={},t.m=e=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return d=e,p=n,(f=t).addEventListener(d,p),{destroy:function(){f.removeEventListener(d,p)}};if(r.nodeList(t))return s=t,u=e,l=n,Array.prototype.forEach.call(s,(function(t){t.addEventListener(u,l)})),{destroy:function(){Array.prototype.forEach.call(s,(function(t){t.removeEventListener(u,l)}))}};if(r.string(t))return i=t,a=e,c=n,o(document.body,i,a,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var i,a,c,s,u,l,f,d,p}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var r=n(5);function o(t,e,n,o,i){var a=function(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var s=(function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),l=n.n(u),f=n(2),d=n.n(f),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(b,l.a),h(b,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,r=!!document.queryCommandSupported;return n.forEach((function(t){r=r&&!!document.queryCommandSupported(t)})),r}}]),b);function b(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=v}],t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=6).default;function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e,n}))},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),a=n("d039"),c=a((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},ba6b:function(t,e,n){},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=c.f,u=i(r),l={},f=0;while(u.length>f)n=o(r,e=u[f++]),void 0!==n&&s(l,e,n);return l}})},e382:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("Info"),n("Order"),n("Tools")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info"},[n("image-pic",{attrs:{width:"50",height:"50",src:t.userInfo.avatar}}),n("div",{staticClass:"main"},[n("div",{staticClass:"main__title"},[n("h3",{staticClass:"name"},[t._v(t._s(t.userInfo.name))])]),n("div",{staticClass:"main__id",on:{click:function(e){return t.doCopy(t.userInfo.id)}}},[n("span",{staticClass:"code"},[t._v("用户id："+t._s(t.userInfo.id))]),n("span",{staticStyle:{color:"#fff"}},[n("svg-icon",{attrs:{"icon-class":"copy",width:13,height:13}})],1)])])],1)},a=[],c=n("5530"),s=n("2b0e"),u=n("2f62"),l=n("4eb5"),f=n.n(l);s["a"].use(f.a);var d={computed:Object(c["a"])({},Object(u["b"])(["userInfo"])),methods:{doCopy:function(t){var e=this;this.$copyText(t).then((function(t){e.$toast.success("Id复制成功")}),(function(t){console.log(t)}))}}},p=d,h=(n("001d"),n("2877")),y=Object(h["a"])(p,i,a,!1,null,"08f9596a",null),v=y.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-order"},[n("h3",{staticClass:"order__title"},[n("p",{staticClass:"order__title__title"},[t._v("我的订单")]),n("p",{staticClass:"order__title__navigate"},[n("span",[t._v("全部订单")]),n("van-icon",{attrs:{name:"arrow",color:"#969799"}})],1)]),n("div",{staticClass:"order__bd"},t._l(t.orderList,(function(e,r){return n("div",{key:r,staticClass:"order__bd__item"},[n("van-icon",{attrs:{name:e.icon,size:"25",color:"#dab309",badge:e.count}}),n("span",{staticClass:"name"},[t._v(t._s(e.name))])],1)})),0)])},m=[],g={data:function(){return{orderList:[{icon:"pending-payment",name:"待支付",count:3},{icon:"peer-pay",name:"待发货",count:""},{icon:"logistics",name:"待收货",count:""},{icon:"chat-o",name:"售后",count:""}]}}},_=g,k=(n("f24c"),Object(h["a"])(_,b,m,!1,null,"65c2267a",null)),E=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-tools"},[n("van-cell",{attrs:{title:"Git仓库","is-link":""}}),n("van-cell",{attrs:{title:"文档说明","is-link":""}}),n("van-cell",{attrs:{title:"相关组件","is-link":""}}),n("van-cell",{attrs:{title:"推荐学习","is-link":""}}),n("van-cell",{attrs:{title:"退出登录","is-link":""}})],1)},C=[],O={},x=O,S=(n("5277"),Object(h["a"])(x,w,C,!1,null,"2be5d101",null)),T=S.exports,j={name:"User",components:{Info:v,Order:E,Tools:T}},A=j,P=Object(h["a"])(A,r,o,!1,null,null,null);e["default"]=P.exports},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=o((function(){a(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},f24c:function(t,e,n){"use strict";var r=n("ba6b"),o=n.n(r);o.a}}]);