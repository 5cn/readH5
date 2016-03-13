/**
 * @Author:wanghongxin and fuwei
 * @Time:Sun Mar 13 2016 12:52:51 GMT+0800 (CST)
 */
var Zepto=function(){var t,e,n,i,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},C,N,O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};T.matches=function(t,e){if(!e||!t||t.nodeType!==1)return false;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;if(o)(r=O).appendChild(t);i=~T.qsa(r,e).indexOf(t);o&&O.removeChild(t);return i};function L(t){return t==null?String(t):j[S.call(t)]||"object"}function Z(t){return L(t)=="function"}function _(t){return t!=null&&t==t.window}function $(t){return t!=null&&t.nodeType==t.DOCUMENT_NODE}function D(t){return L(t)=="object"}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return typeof t.length=="number"}function k(t){return s.call(t,function(t){return t!=null})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})};function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})};function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return typeof e=="number"&&!c[F(t)]?e+"px":e}function I(t){var e,n;if(!u[t]){e=a.createElement(t);a.body.appendChild(e);n=getComputedStyle(e,"").getPropertyValue("display");e.parentNode.removeChild(e);n=="none"&&(n="block");u[t]=n}return u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){if(t.nodeType==1)return t})}T.fragment=function(e,i,r){var s,u,f;if(h.test(e))s=n(a.createElement(RegExp.$1));if(!s){if(e.replace)e=e.replace(p,"<$1></$2>");if(i===t)i=l.test(e)&&RegExp.$1;if(!(i in b))i="*";f=b[i];f.innerHTML=""+e;s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})}if(M(r)){u=n(s);n.each(r,function(t,e){if(g.indexOf(t)>-1)u[t](e);else u.attr(t,e)})}return s};T.Z=function(t,e){t=t||[];t.__proto__=n.fn;t.selector=e||"";return t};T.isZ=function(t){return t instanceof T.Z};T.init=function(e,i){var r;if(!e)return T.Z();else if(typeof e=="string"){e=e.trim();if(e[0]=="<"&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else if(i!==t)return n(i).find(e);else r=T.qsa(a,e)}else if(Z(e))return n(a).ready(e);else if(T.isZ(e))return e;else{if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else if(i!==t)return n(i).find(e);else r=T.qsa(a,e)}return T.Z(r,e)};n=function(t,e){return T.init(t,e)};function B(n,i,r){for(e in i)if(r&&(M(i[e])||A(i[e]))){if(M(i[e])&&!M(n[e]))n[e]={};if(A(i[e])&&!A(n[e]))n[e]=[];B(n[e],i[e],r)}else if(i[e]!==t)n[e]=i[e]}n.extend=function(t){var e,n=o.call(arguments,1);if(typeof t=="boolean"){e=t;t=n.shift()}n.forEach(function(n){B(t,n,e)});return t};T.qsa=function(t,e){var n,i=e[0]=="#",r=!i&&e[0]==".",s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:t.nodeType!==1&&t.nodeType!==9?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))};function U(t,e){return e==null?n(t):n(t).filter(e)}n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){while(e&&(e=e.parentNode))if(e===t)return true;return false};function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;if(n===t)return r?i.baseVal:i;r?i.baseVal=n:e.className=n}function Y(t){try{return t?t=="true"||(t=="false"?false:t=="null"?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}n.type=L;n.isFunction=Z;n.isWindow=_;n.isArray=A;n.isPlainObject=M;n.isEmptyObject=function(t){var e;for(e in t)return false;return true};n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)};n.camelCase=C;n.trim=function(t){return t==null?"":String.prototype.trim.call(t)};n.uuid=0;n.support={};n.expr={};n.map=function(t,e){var n,i=[],r,o;if(R(t))for(r=0;r<t.length;r++){n=e(t[r],r);if(n!=null)i.push(n)}else for(o in t){n=e(t[o],o);if(n!=null)i.push(n)}return z(i)};n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===false)return t}else{for(i in t)if(e.call(t[i],i,t[i])===false)return t}return t};n.grep=function(t,e){return s.call(t,e)};if(window.JSON)n.parseJSON=JSON.parse;n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()});n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){if(w.test(a.readyState)&&a.body)t(n);else a.addEventListener("DOMContentLoaded",function(){t(n)},false);return this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null)this.parentNode.removeChild(this)})},each:function(t){r.every.call(this,function(e,n){return t.call(e,n,e)!==false});return this},filter:function(t){if(Z(t))return this.not(this.not(t));return n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){if(!e.call(this,t))i.push(this)});else{var r=typeof e=="string"?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){if(r.indexOf(t)<0)i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;if(!t)e=n();else if(typeof t=="object")e=n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})});else if(this.length==1)e=n(T.qsa(this[0],t));else e=this.map(function(){return T.qsa(this,t)});return e},closest:function(t,e){var i=this[0],r=false;if(typeof t=="object")r=n(t);while(i&&!(r?r.indexOf(i)>=0:T.matches(i,t)))i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){var e=[],i=this;while(i.length>0)i=n.map(i,function(t){if((t=t.parentNode)&&!$(t)&&e.indexOf(t)<0){e.push(t);return t}});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none")this.style.display=I(this.nodeName)})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(true):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));var e;while((e=t.children()).length)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){this.parent().each(function(){n(this).replaceWith(n(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?i.css("display")=="none":e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=n==null?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return typeof n=="string"&&!(1 in arguments)?!this.length||this[0].nodeType!==1?t:!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(this.nodeType!==1)return;if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){this.nodeType===1&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){t=P[t]||t;return 1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase();var r=1 in arguments?this.attr(i,n):this.attr(i);return r!==null?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};if(i.css("position")=="static")s["position"]="relative";i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;r=getComputedStyle(o,"");if(typeof t=="string")return o.style[C(t)]||r.getPropertyValue(t);else if(A(t)){var s={};n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)});return s}}var a="";if(L(t)=="string"){if(!i&&i!==0)this.each(function(){this.style.removeProperty(F(t))});else a=F(t)+":"+H(t,i)}else{for(e in t)if(!t[e]&&t[e]!==0)this.each(function(){this.style.removeProperty(F(e))});else a+=F(e)+":"+H(e,t[e])+";"}return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){if(!t)return false;return r.some.call(this,function(t){return this.test(W(t))},q(t))},addClass:function(t){if(!t)return this;return this.each(function(e){if(!("className"in this))return;i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){if(!n(this).hasClass(t))i.push(t)},this);i.length&&W(this,r+(r?" ":"")+i.join(" "))})},removeClass:function(e){return this.each(function(n){if(!("className"in this))return;if(e===t)return W(this,"");i=W(this);J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")});W(this,i.trim())})},toggleClass:function(e,i){if(!e)return this;return this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})})},scrollTop:function(e){if(!this.length)return;var n="scrollTop"in this[0];if(e===t)return n?this[0].scrollTop:this[0].pageYOffset;return this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})},scrollLeft:function(e){if(!this.length)return;var n="scrollLeft"in this[0];if(e===t)return n?this[0].scrollLeft:this[0].pageXOffset;return this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})},position:function(){if(!this.length)return;var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();i.top-=parseFloat(n(t).css("margin-top"))||0;i.left-=parseFloat(n(t).css("margin-left"))||0;r.top+=parseFloat(n(e[0]).css("border-top-width"))||0;r.left+=parseFloat(n(e[0]).css("border-left-width"))||0;return{top:i.top-r.top,left:i.left-r.left}},offsetParent:function(){return this.map(function(){var t=this.offsetParent||a.body;while(t&&!d.test(t.nodeName)&&n(t).css("position")=="static")t=t.offsetParent;return t})}};n.fn.detach=n.fn.remove;["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];if(r===t)return _(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e];else return this.each(function(t){s=n(this);s.css(e,J(this,r,t,s[e]()))})}});function G(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)G(t.childNodes[n],e)}v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,r=n.map(arguments,function(e){t=L(e);return t=="object"||t=="array"||e==null?e:T.fragment(e)}),o,s=this.length>1;if(r.length<1)return this;return this.each(function(t,u){o=i?u:u.parentNode;u=e==0?u.nextSibling:e==1?u.firstChild:e==2?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(true);else if(!o)return n(t).remove();o.insertBefore(t,u);if(f)G(t,function(t){if(t.nodeName!=null&&t.nodeName.toUpperCase()==="SCRIPT"&&(!t.type||t.type==="text/javascript")&&!t.src)window["eval"].call(window,t.innerHTML)})})})};n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){n(e)[t](this);return this}});T.Z.prototype=n.fn;T.uniq=N;T.deserializeValue=Y;n.zepto=T;return n}();window.Zepto=Zepto;window.$===undefined&&(window.$=Zepto);(function(t){var e=1,n,i=Array.prototype.slice,r=t.isFunction,o=function(t){return typeof t=="string"},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents";function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){e=p(e);if(e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&(!u&&t.e in f)||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if(i=="ready")return t(document).ready(r);var s=p(i);s.fn=r;s.sel=a;if(s.e in c)r=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return s.fn.apply(this,arguments)};s.del=u;var l=u||r;s.proxy=function(t){t=j(t);if(t.isImmediatePropagationStopped())return;t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));if(i===false)t.preventDefault(),t.stopPropagation();return i};s.i=d.length;d.push(s);if("addEventListener"in e)e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i];if("removeEventListener"in t)t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}t.event={add:v,remove:y};t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};a._zid=l(e);return a}else if(o(n)){if(s){s.unshift(e[n],e);return t.proxy.apply(null,s)}else{return t.proxy(e[n],e)}}else{throw new TypeError("expected function")}};t.fn.bind=function(t,e,n){return this.on(t,e,n)};t.fn.unbind=function(t,e){return this.off(t,e)};t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return true},b=function(){return false},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function j(e,i){if(i||!e.isDefaultPrevented){i||(i=e);t.each(E,function(t,n){var r=i[t];e[t]=function(){this[n]=x;return r&&r.apply(i,arguments)};e[n]=b});if(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===false:i.getPreventDefault&&i.getPreventDefault())e.isDefaultPrevented=x}return e}function S(t){var e,i={originalEvent:t};for(e in t)if(!w.test(e)&&t[e]!==n)i[e]=t[e];return j(i,t)}t.fn.delegate=function(t,e,n){return this.on(e,t,n)};t.fn.undelegate=function(t,e,n){return this.off(e,t,n)};t.fn.live=function(e,n){t(document.body).delegate(this.selector,e,n);return this};t.fn.die=function(e,n){t(document.body).undelegate(this.selector,e,n);return this};t.fn.on=function(e,s,a,u,f){var c,l,h=this;if(e&&!o(e)){t.each(e,function(t,e){h.on(t,s,a,e,f)});return h}if(!o(s)&&!r(u)&&u!==false)u=a,a=s,s=n;if(r(a)||a===false)u=a,a=n;if(u===false)u=b;return h.each(function(n,r){if(f)c=function(t){y(r,t.type,u);return u.apply(this,arguments)};if(s)l=function(e){var n,o=t(e.target).closest(s,r).get(0);if(o&&o!==r){n=t.extend(S(e),{currentTarget:o,liveFired:r});return(c||u).apply(o,[n].concat(i.call(arguments,1)))}};v(r,e,u,a,s,l||c)})};t.fn.off=function(e,i,s){var a=this;if(e&&!o(e)){t.each(e,function(t,e){a.off(t,i,e)});return a}if(!o(i)&&!r(s)&&s!==false)s=i,i=n;if(s===false)s=b;return a.each(function(){y(this,e,s,i)})};t.fn.trigger=function(e,n){e=o(e)||t.isPlainObject(e)?t.Event(e):j(e);e._args=n;return this.each(function(){if(e.type in f&&typeof this[e.type]=="function")this[e.type]();else if("dispatchEvent"in this)this.dispatchEvent(e);else t(this).triggerHandler(e,n)})};t.fn.triggerHandler=function(e,n){var i,r;this.each(function(s,a){i=S(o(e)?t.Event(e):e);i._args=n;i.target=a;t.each(h(a,e.type||e),function(t,e){r=e.proxy(i);if(i.isImmediatePropagationStopped())return false})});return r};("focusin focusout focus blur load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select keydown keypress keyup error").split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}});t.Event=function(t,e){if(!o(t))e=t,t=e.type;var n=document.createEvent(a[t]||"Events"),i=true;if(e)for(var r in e)r=="bubbles"?i=!!e[r]:n[r]=e[r];n.initEvent(t,i,true);return j(n)}})(Zepto);(function(t){var e=0,n=window.document,i,r,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href;function h(e,n,i){var r=t.Event(n);t(e).trigger(r,i);return!r.isDefaultPrevented()}function p(t,e,i,r){if(t.global)return h(e||n,i,r)}t.active=0;function d(e){if(e.global&&t.active++===0)p(e,null,"ajaxStart")}function m(e){if(e.global&&!--t.active)p(e,null,"ajaxStop")}function g(t,e){var n=e.context;if(e.beforeSend.call(n,t,e)===false||p(e,n,"ajaxBeforeSend",[t,e])===false)return false;p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e);if(i)i.resolveWith(r,[t,o,e]);p(n,r,"ajaxSuccess",[e,n,t]);x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t);if(r)r.rejectWith(o,[n,e,t]);p(i,o,"ajaxError",[n,i,t||e]);x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t);p(n,i,"ajaxComplete",[e,n]);m(n)}function b(){}t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],f,c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c},h;if(r)r.promise(l);t(a).on("load error",function(e,n){clearTimeout(h);t(a).off().remove();if(e.type=="error"||!f){y(null,n||"error",l,i,r)}else{v(f[0],l,i,r)}window[s]=u;if(f&&t.isFunction(u))u(f[0]);u=f=undefined});if(g(l,i)===false){c("abort");return l}window[s]=function(){f=arguments};a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s);n.head.appendChild(a);if(i.timeout>0)h=setTimeout(function(){c("timeout")},i.timeout);return l};t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:true,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true};function w(t){if(t)t=t.split(";",2)[0];return t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){if(e=="")return t;return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){if(e.processData&&e.data&&t.type(e.data)!="string")e.data=t.param(e.data,e.traditional);if(e.data&&(!e.type||e.type.toUpperCase()=="GET"))e.url=E(e.url,e.data),e.data=undefined}t.ajax=function(e){var o=t.extend({},e||{}),s=t.Deferred&&t.Deferred(),a;for(i in t.ajaxSettings)if(o[i]===undefined)o[i]=t.ajaxSettings[i];d(o);if(!o.crossDomain){a=n.createElement("a");a.href=o.url;a.href=a.href;o.crossDomain=l.protocol+"//"+l.host!==a.protocol+"//"+a.host}if(!o.url)o.url=window.location.toString();j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f)u="jsonp";if(o.cache===false||(!e||e.cache!==true)&&("script"==u||"jsonp"==u))o.url=E(o.url,"_="+Date.now());if("jsonp"==u){if(!f)o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===false?"":"callback=?");return t.ajaxJSONP(o,s)}var h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader,C;if(s)s.promise(S);if(!o.crossDomain)m("X-Requested-With","XMLHttpRequest");m("Accept",h||"*/*");if(h=o.mimeType||h){if(h.indexOf(",")>-1)h=h.split(",",2)[0];S.overrideMimeType&&S.overrideMimeType(h)}if(o.contentType||o.contentType!==false&&o.data&&o.type.toUpperCase()!="GET")m("Content-Type",o.contentType||"application/x-www-form-urlencoded");if(o.headers)for(r in o.headers)m(r,o.headers[r]);S.setRequestHeader=m;S.onreadystatechange=function(){if(S.readyState==4){S.onreadystatechange=b;clearTimeout(C);var e,n=false;if(S.status>=200&&S.status<300||S.status==304||S.status==0&&x=="file:"){u=u||w(o.mimeType||S.getResponseHeader("content-type"));e=S.responseText;try{if(u=="script")(1,eval)(e);else if(u=="xml")e=S.responseXML;else if(u=="json")e=c.test(e)?null:t.parseJSON(e)}catch(i){n=i}if(n)y(n,"parsererror",S,o,s);else v(e,S,o,s)}else{y(S.statusText||null,S.status?"error":"abort",S,o,s)}}};if(g(S,o)===false){S.abort();y(null,"abort",S,o,s);return S}if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:true;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);if(o.timeout>0)C=setTimeout(function(){S.onreadystatechange=b;S.abort();y(null,"timeout",S,o,s)},o.timeout);S.send(o.data?o.data:null);return S};function S(e,n,i,r){if(t.isFunction(n))r=i,i=n,n=undefined;if(!t.isFunction(i))r=i,i=undefined;return{url:e,data:n,success:i,dataType:r}}t.get=function(){return t.ajax(S.apply(null,arguments))};t.post=function(){var e=S.apply(null,arguments);e.type="POST";return t.ajax(e)};t.getJSON=function(){var e=S.apply(null,arguments);e.dataType="json";return t.ajax(e)};t.fn.load=function(e,n,i){if(!this.length)return this;var r=this,s=e.split(/\s/),a,u=S(e,n,i),f=u.success;if(s.length>1)u.url=s[0],a=s[1];u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e);f&&f.apply(r,arguments)};t.ajax(u);return this};var T=encodeURIComponent;function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u);if(r)n=i?r:r+"["+(a||o=="object"||o=="array"?n:"")+"]";if(!r&&s)e.add(u.name,u.value);else if(o=="array"||!i&&o=="object")C(e,u,i,n);else e.add(n,u)})}t.param=function(e,n){var i=[];i.add=function(e,n){if(t.isFunction(n))n=n();if(n==null)n="";this.push(T(e)+"="+T(n))};C(i,e,n);return i.join("&").replace(/%20/g,"+")}})(Zepto);(function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){if(t.forEach)return t.forEach(r);i.push({name:e,value:t})};if(this[0])t.each(this[0].elements,function(i,o){n=o.type,e=o.name;if(e&&o.nodeName.toLowerCase()!="fieldset"&&!o.disabled&&n!="submit"&&n!="reset"&&n!="button"&&n!="file"&&(n!="radio"&&n!="checkbox"||o.checked))r(t(o).val())});return i};t.fn.serialize=function(){var t=[];this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))});return t.join("&")};t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n);if(!n.isDefaultPrevented())this.get(0).submit()}return this}})(Zepto);(function(t){if(!("__proto__"in{})){t.extend(t.zepto,{Z:function(e,n){e=e||[];t.extend(e,t.fn);e.selector=n||"";e.__Z=true;return e},isZ:function(e){return t.type(e)==="array"&&"__Z"in e}})}try{getComputedStyle(undefined)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}})(Zepto);
(function(e){var t={},i,n,o,r,u=750,a;function l(e,t,i,n){return Math.abs(e-t)>=Math.abs(i-n)?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}function c(){r=null;if(t.last){t.el.trigger("longTap");t={}}}function f(){if(r)clearTimeout(r);r=null}function p(){if(i)clearTimeout(i);if(n)clearTimeout(n);if(o)clearTimeout(o);if(r)clearTimeout(r);i=n=o=r=null;t={}}function s(e){return(e.pointerType=="touch"||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary}function g(e,t){return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t}e(document).ready(function(){var T,d,h=0,w=0,y,m;if("MSGesture"in window){a=new MSGesture;a.target=document.body}e(document).bind("MSGestureEnd",function(e){var i=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;if(i){t.el.trigger("swipe");t.el.trigger("swipe"+i)}}).on("touchstart MSPointerDown pointerdown",function(n){if((m=g(n,"down"))&&!s(n))return;y=m?n:n.touches[0];if(n.touches&&n.touches.length===1&&t.x2){t.x2=undefined;t.y2=undefined}T=Date.now();d=T-(t.last||T);t.el=e("tagName"in y.target?y.target:y.target.parentNode);i&&clearTimeout(i);t.x1=y.pageX;t.y1=y.pageY;if(d>0&&d<=250)t.isDoubleTap=true;t.last=T;r=setTimeout(c,u);if(a&&m)a.addPointer(n.pointerId)}).on("touchmove MSPointerMove pointermove",function(e){if((m=g(e,"move"))&&!s(e))return;y=m?e:e.touches[0];f();t.x2=y.pageX;t.y2=y.pageY;h+=Math.abs(t.x1-t.x2);w+=Math.abs(t.y1-t.y2)}).on("touchend MSPointerUp pointerup",function(r){if((m=g(r,"up"))&&!s(r))return;f();if(t.x2&&Math.abs(t.x1-t.x2)>30||t.y2&&Math.abs(t.y1-t.y2)>30)o=setTimeout(function(){t.el.trigger("swipe");t.el.trigger("swipe"+l(t.x1,t.x2,t.y1,t.y2));t={}},0);else if("last"in t)if(h<30&&w<30){n=setTimeout(function(){var n=e.Event("tap");n.cancelTouch=p;if(t.el){t.el.trigger(n)}if(t.isDoubleTap){if(t.el)t.el.trigger("doubleTap");t={}}else{i=setTimeout(function(){i=null;if(t.el)t.el.trigger("singleTap");t={}},250)}},0)}else{t={}}h=w=0}).on("touchcancel MSPointerCancel pointercancel",p);e(window).on("scroll",p)});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.on(t,e)}})})(Zepto);
/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-05-12 13:16:23
*/
;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, (duration * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

// 音符的漂浮的插件制作--zpeto扩展
;(function($){
  // 利用zpeto的animate的动画-css3的动画-easing为了css3的easing(zpeto没有提供easing的扩展)
    $.fn.coffee = function(option){
    // 动画定时器
    var __time_val=null;
    var __time_wind=null;
    var __flyFastSlow = 'cubic-bezier(.09,.64,.16,.94)';

    // 初始化函数体，生成对应的DOM节点
        var $coffee = $(this);
        var opts = $.extend({},$.fn.coffee.defaults,option);  // 继承传入的值

    // 漂浮的DOM
    var coffeeSteamBoxWidth = opts.steamWidth;
    var $coffeeSteamBox = $('<div class="coffee-steam-box"></div>')
      .css({
        'height'   : opts.steamHeight,
        'width'    : opts.steamWidth,
        'left'     : 60,
        'top'      : -50,
        'position' : 'absolute',
        'overflow' : 'hidden',
        'z-index'  : 0 
      })
      .appendTo($coffee);

    // 动画停止函数处理
    $.fn.coffee.stop = function(){
      clearInterval(__time_val);
      clearInterval(__time_wind);
    }

    // 动画开始函数处理
    $.fn.coffee.start = function(){
      __time_val = setInterval(function(){
        steam();
      }, rand( opts.steamInterval / 2 , opts.steamInterval * 2 ));

      __time_wind = setInterval(function(){
        wind();
      },rand( 100 , 1000 )+ rand( 1000 , 3000))
    }
        return $coffee;
        
    // 生成漂浮物
    function steam(){   
      // 设置飞行体的样式
            var fontSize = rand( 8 , opts.steamMaxSize  ) ;     // 字体大小
      var steamsFontFamily = randoms( 1, opts.steamsFontFamily ); // 字体类型
      var color = '#'+ randoms(6 , '0123456789ABCDEF' );  // 字体颜色
            var position = rand( 0, 44 );                       // 起初位置
            var rotate = rand(-90,89);                          // 旋转角度
            var scale = rand02(0.4,1);                          // 大小缩放
      var transform =  $.fx.cssPrefix+'transform';        // 设置音符的旋转角度和大小
          transform = transform+':rotate('+rotate+'deg) scale('+scale+');'

      // 生成fly飞行体
            var $fly = $('<span class="coffee-steam">'+ randoms( 1, opts.steams ) +'</span>');
            var left = rand( 0 , coffeeSteamBoxWidth - opts.steamWidth - fontSize );
            if( left > position ) left = rand( 0 , position );
            $fly
        .css({
          'position'     : 'absolute',
          'left'         : position,
          'top'          : opts.steamHeight,
          'font-size:'   : fontSize+'px',
          'color'        : color,
          'font-family'  : steamsFontFamily,
          'display'      : 'block',
          'opacity'      : 1
        })
        .attr('style',$fly.attr('style')+transform)
        .appendTo($coffeeSteamBox)
        .animate({
                top     : rand(opts.steamHeight/2,0),
                left    : left,
                opacity : 0
              },rand( opts.steamFlyTime / 2 , opts.steamFlyTime * 1.2 ),__flyFastSlow,function(){
                  $fly.remove();
                  $fly = null;          
             });
        };
        
    // 风行，可以让漂浮体，左右浮动
        function wind(){
      // 左右浮动的范围值
      var left = rand( -10 , 10 );
      left += parseInt($coffeeSteamBox.css('left'));
      if(left>=54) left=54;
      else if(left<=34) left=34;

      // 移动的函数
      $coffeeSteamBox.animate({
        left  : left 
      } , rand( 1000 , 3000) ,__flyFastSlow);
        };
        
    // 随即一个值
    // 可以传入一个数组和一个字符串
    // 传入数组的话，随即获取一个数组的元素
    // 传入字符串的话，随即获取其中的length的字符
        function randoms( length , chars ) {
            length = length || 1 ;
            var hash = '';                  // 
            var maxNum = chars.length - 1;  // last-one
            var num = 0;                    // fisrt-one
            for( i = 0; i < length; i++ ) {
                num = rand( 0 , maxNum - 1  );
                hash += chars.slice( num , num + 1 );
            }
            return hash;
        };

    // 随即一个数值的范围中的值--整数
        function rand(mi,ma){   
            var range = ma - mi;
            var out = mi + Math.round( Math.random() * range) ; 
            return parseInt(out);
        };  

    // 随即一个数值的范围中的值--浮点
        function rand02(mi,ma){   
            var range = ma - mi;
            var out = mi + Math.random() * range;   
            return parseFloat(out);
        };      
    };

    $.fn.coffee.defaults = {
        steams                  : ['jQuery','HTML5','HTML6','CSS2','CSS3','JS','$.fn()','char','short','if','float','else','type','case','function','travel','return','array()','empty()','eval','C++','JAVA','PHP','JSP','.NET','while','this','$.find();','float','$.ajax()','addClass','width','height','Click','each','animate','cookie','bug','Design','Julying','$(this)','i++','Chrome','Firefox','Firebug','IE6','Guitar' ,'Music' ,'攻城师' ,'旅行' ,'王子墨','啤酒'], /*漂浮物的类型，种类*/
        steamsFontFamily    : ['Verdana','Geneva','Comic Sans MS','MS Serif','Lucida Sans Unicode','Times New Roman','Trebuchet MS','Arial','Courier New','Georgia'],  /*漂浮物的字体类型*/
        steamFlyTime          : 5000 , /*Steam飞行的时间,单位 ms 。（决定steam飞行速度的快慢）*/
        steamInterval       : 500 ,  /*制造Steam时间间隔,单位 ms.*/
        steamMaxSize          : 30 ,   /*随即获取漂浮物的字体大小*/
        steamHeight       : 200,   /*飞行体的高度*/
        steamWidth        : 300    /*飞行体的宽度*/
    };
    $.fn.coffee.version = '2.0.0'; // 更新为音符的悬浮---重构的代码
})(Zepto);


/* 
* @Author: wanghongxin
* @Date:   2015-05-08 23:57:28
* @Last Modified by:   wanghongxin
* @Last Modified time: 2015-06-01 16:14:58
*/
;(function(root,factory){
    //require coffee.js 
    //require vender/touch.js
    var $=window.$;
    factory.call(root,$);    
}(this,function($){
    'use strict'
    var service={
        audioPlay:audioPlay,
        audioPause:audioPause,
        init:init
    };
    var audio=new Audio();
    var played=true;
    function init(url){
        if(!url)return;//根据数据判断是否加载
        var optsAudio={
            loop: true,
            preload: "auto",
            src: url
        };
        for(var i in optsAudio){
            if(optsAudio.hasOwnProperty(i)&&(i in audio)){
                audio[i]=optsAudio[i];
            }
        }
        window.audio=audio;
        audio.load();
        var html='<section class="u-audio">'+
                    '<p id="coffee_flow" class="btn_audio"><strong class="txt_audio z-hide">关闭</strong><span class="css_sprite01 audio_open"></span></p>'+
                '</section>';
        $(html).prependTo($('body'));
        $('#coffee_flow').coffee({
            steams              : ["<img src='http://www5.5.cn/Public/newimages/audio_widget_01@2x.png' />","<img src='http://www5.5.cn/Public/newimages/audio_widget_01@2x.png' />"], 
            steamHeight         : 100,
            steamWidth          : 44 
        });

        service.audioPlay();
        $('.u-audio').on('tap',function(){
            played=!played;
            if(played){
                service.audioPlay();
            }else{
                service.audioPause();
            }
        });
    }
    function audioPlay(){
        audio.play();
        $.fn.coffee.start();
        $('.coffee-steam-box').show(500);
    }
    function audioPause(){
        audio.pause();
        $.fn.coffee.stop();
        $('.coffee-steam-box').hide(500);
    }
    return service;
}));
(function(){var n=this;var r=n._;var t=Array.prototype,e=Object.prototype,i=Function.prototype;var u=t.push,a=t.slice,f=e.toString,o=e.hasOwnProperty;var l=Array.isArray,c=Object.keys,s=i.bind,v=Object.create;var p=function(){};var h=function(n){if(n instanceof h)return n;if(!(this instanceof h))return new h(n);this._wrapped=n};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=h}exports._=h}else{n._=h}h.VERSION="1.8.2";var g=function(n,r,t){if(r===void 0)return n;switch(t==null?3:t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,i){return n.call(r,t,e,i)};case 4:return function(t,e,i,u){return n.call(r,t,e,i,u)}}return function(){return n.apply(r,arguments)}};var y=function(n,r,t){if(n==null)return h.identity;if(h.isFunction(n))return g(n,r,t);if(h.isObject(n))return h.matcher(n);return h.property(n)};h.iteratee=function(n,r){return y(n,r,Infinity)};var m=function(n,r){return function(t){var e=arguments.length;if(e<2||t==null)return t;for(var i=1;i<e;i++){var u=arguments[i],a=n(u),f=a.length;for(var o=0;o<f;o++){var l=a[o];if(!r||t[l]===void 0)t[l]=u[l]}}return t}};var d=function(n){if(!h.isObject(n))return{};if(v)return v(n);p.prototype=n;var r=new p;p.prototype=null;return r};var b=Math.pow(2,53)-1;var w=function(n){var r=n!=null&&n.length;return typeof r=="number"&&r>=0&&r<=b};h.each=h.forEach=function(n,r,t){r=g(r,t);var e,i;if(w(n)){for(e=0,i=n.length;e<i;e++){r(n[e],e,n)}}else{var u=h.keys(n);for(e=0,i=u.length;e<i;e++){r(n[u[e]],u[e],n)}}return n};h.map=h.collect=function(n,r,t){r=y(r,t);var e=!w(n)&&h.keys(n),i=(e||n).length,u=Array(i);for(var a=0;a<i;a++){var f=e?e[a]:a;u[a]=r(n[f],f,n)}return u};function x(n){function r(r,t,e,i,u,a){for(;u>=0&&u<a;u+=n){var f=i?i[u]:u;e=t(e,r[f],f,r)}return e}return function(t,e,i,u){e=g(e,u,4);var a=!w(t)&&h.keys(t),f=(a||t).length,o=n>0?0:f-1;if(arguments.length<3){i=t[a?a[o]:o];o+=n}return r(t,e,i,a,o,f)}}h.reduce=h.foldl=h.inject=x(1);h.reduceRight=h.foldr=x(-1);h.find=h.detect=function(n,r,t){var e;if(w(n)){e=h.findIndex(n,r,t)}else{e=h.findKey(n,r,t)}if(e!==void 0&&e!==-1)return n[e]};h.filter=h.select=function(n,r,t){var e=[];r=y(r,t);h.each(n,function(n,t,i){if(r(n,t,i))e.push(n)});return e};h.reject=function(n,r,t){return h.filter(n,h.negate(y(r)),t)};h.every=h.all=function(n,r,t){r=y(r,t);var e=!w(n)&&h.keys(n),i=(e||n).length;for(var u=0;u<i;u++){var a=e?e[u]:u;if(!r(n[a],a,n))return false}return true};h.some=h.any=function(n,r,t){r=y(r,t);var e=!w(n)&&h.keys(n),i=(e||n).length;for(var u=0;u<i;u++){var a=e?e[u]:u;if(r(n[a],a,n))return true}return false};h.contains=h.includes=h.include=function(n,r,t){if(!w(n))n=h.values(n);return h.indexOf(n,r,typeof t=="number"&&t)>=0};h.invoke=function(n,r){var t=a.call(arguments,2);var e=h.isFunction(r);return h.map(n,function(n){var i=e?r:n[r];return i==null?i:i.apply(n,t)})};h.pluck=function(n,r){return h.map(n,h.property(r))};h.where=function(n,r){return h.filter(n,h.matcher(r))};h.findWhere=function(n,r){return h.find(n,h.matcher(r))};h.max=function(n,r,t){var e=-Infinity,i=-Infinity,u,a;if(r==null&&n!=null){n=w(n)?n:h.values(n);for(var f=0,o=n.length;f<o;f++){u=n[f];if(u>e){e=u}}}else{r=y(r,t);h.each(n,function(n,t,u){a=r(n,t,u);if(a>i||a===-Infinity&&e===-Infinity){e=n;i=a}})}return e};h.min=function(n,r,t){var e=Infinity,i=Infinity,u,a;if(r==null&&n!=null){n=w(n)?n:h.values(n);for(var f=0,o=n.length;f<o;f++){u=n[f];if(u<e){e=u}}}else{r=y(r,t);h.each(n,function(n,t,u){a=r(n,t,u);if(a<i||a===Infinity&&e===Infinity){e=n;i=a}})}return e};h.shuffle=function(n){var r=w(n)?n:h.values(n);var t=r.length;var e=Array(t);for(var i=0,u;i<t;i++){u=h.random(0,i);if(u!==i)e[i]=e[u];e[u]=r[i]}return e};h.sample=function(n,r,t){if(r==null||t){if(!w(n))n=h.values(n);return n[h.random(n.length-1)]}return h.shuffle(n).slice(0,Math.max(0,r))};h.sortBy=function(n,r,t){r=y(r,t);return h.pluck(h.map(n,function(n,t,e){return{value:n,index:t,criteria:r(n,t,e)}}).sort(function(n,r){var t=n.criteria;var e=r.criteria;if(t!==e){if(t>e||t===void 0)return 1;if(t<e||e===void 0)return-1}return n.index-r.index}),"value")};var _=function(n){return function(r,t,e){var i={};t=y(t,e);h.each(r,function(e,u){var a=t(e,u,r);n(i,e,a)});return i}};h.groupBy=_(function(n,r,t){if(h.has(n,t))n[t].push(r);else n[t]=[r]});h.indexBy=_(function(n,r,t){n[t]=r});h.countBy=_(function(n,r,t){if(h.has(n,t))n[t]++;else n[t]=1});h.toArray=function(n){if(!n)return[];if(h.isArray(n))return a.call(n);if(w(n))return h.map(n,h.identity);return h.values(n)};h.size=function(n){if(n==null)return 0;return w(n)?n.length:h.keys(n).length};h.partition=function(n,r,t){r=y(r,t);var e=[],i=[];h.each(n,function(n,t,u){(r(n,t,u)?e:i).push(n)});return[e,i]};h.first=h.head=h.take=function(n,r,t){if(n==null)return void 0;if(r==null||t)return n[0];return h.initial(n,n.length-r)};h.initial=function(n,r,t){return a.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))};h.last=function(n,r,t){if(n==null)return void 0;if(r==null||t)return n[n.length-1];return h.rest(n,Math.max(0,n.length-r))};h.rest=h.tail=h.drop=function(n,r,t){return a.call(n,r==null||t?1:r)};h.compact=function(n){return h.filter(n,h.identity)};var j=function(n,r,t,e){var i=[],u=0;for(var a=e||0,f=n&&n.length;a<f;a++){var o=n[a];if(w(o)&&(h.isArray(o)||h.isArguments(o))){if(!r)o=j(o,r,t);var l=0,c=o.length;i.length+=c;while(l<c){i[u++]=o[l++]}}else if(!t){i[u++]=o}}return i};h.flatten=function(n,r){return j(n,r,false)};h.without=function(n){return h.difference(n,a.call(arguments,1))};h.uniq=h.unique=function(n,r,t,e){if(n==null)return[];if(!h.isBoolean(r)){e=t;t=r;r=false}if(t!=null)t=y(t,e);var i=[];var u=[];for(var a=0,f=n.length;a<f;a++){var o=n[a],l=t?t(o,a,n):o;if(r){if(!a||u!==l)i.push(o);u=l}else if(t){if(!h.contains(u,l)){u.push(l);i.push(o)}}else if(!h.contains(i,o)){i.push(o)}}return i};h.union=function(){return h.uniq(j(arguments,true,true))};h.intersection=function(n){if(n==null)return[];var r=[];var t=arguments.length;for(var e=0,i=n.length;e<i;e++){var u=n[e];if(h.contains(r,u))continue;for(var a=1;a<t;a++){if(!h.contains(arguments[a],u))break}if(a===t)r.push(u)}return r};h.difference=function(n){var r=j(arguments,true,true,1);return h.filter(n,function(n){return!h.contains(r,n)})};h.zip=function(){return h.unzip(arguments)};h.unzip=function(n){var r=n&&h.max(n,"length").length||0;var t=Array(r);for(var e=0;e<r;e++){t[e]=h.pluck(n,e)}return t};h.object=function(n,r){var t={};for(var e=0,i=n&&n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t};h.indexOf=function(n,r,t){var e=0,i=n&&n.length;if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else if(t&&i){e=h.sortedIndex(n,r);return n[e]===r?e:-1}if(r!==r){return h.findIndex(a.call(n,e),h.isNaN)}for(;e<i;e++)if(n[e]===r)return e;return-1};h.lastIndexOf=function(n,r,t){var e=n?n.length:0;if(typeof t=="number"){e=t<0?e+t+1:Math.min(e,t+1)}if(r!==r){return h.findLastIndex(a.call(n,0,e),h.isNaN)}while(--e>=0)if(n[e]===r)return e;return-1};function A(n){return function(r,t,e){t=y(t,e);var i=r!=null&&r.length;var u=n>0?0:i-1;for(;u>=0&&u<i;u+=n){if(t(r[u],u,r))return u}return-1}}h.findIndex=A(1);h.findLastIndex=A(-1);h.sortedIndex=function(n,r,t,e){t=y(t,e,1);var i=t(r);var u=0,a=n.length;while(u<a){var f=Math.floor((u+a)/2);if(t(n[f])<i)u=f+1;else a=f}return u};h.range=function(n,r,t){if(arguments.length<=1){r=n||0;n=0}t=t||1;var e=Math.max(Math.ceil((r-n)/t),0);var i=Array(e);for(var u=0;u<e;u++,n+=t){i[u]=n}return i};var k=function(n,r,t,e,i){if(!(e instanceof r))return n.apply(t,i);var u=d(n.prototype);var a=n.apply(u,i);if(h.isObject(a))return a;return u};h.bind=function(n,r){if(s&&n.bind===s)return s.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");var t=a.call(arguments,2);var e=function(){return k(n,e,r,this,t.concat(a.call(arguments)))};return e};h.partial=function(n){var r=a.call(arguments,1);var t=function(){var e=0,i=r.length;var u=Array(i);for(var a=0;a<i;a++){u[a]=r[a]===h?arguments[e++]:r[a]}while(e<arguments.length)u.push(arguments[e++]);return k(n,t,this,this,u)};return t};h.bindAll=function(n){var r,t=arguments.length,e;if(t<=1)throw new Error("bindAll must be passed function names");for(r=1;r<t;r++){e=arguments[r];n[e]=h.bind(n[e],n)}return n};h.memoize=function(n,r){var t=function(e){var i=t.cache;var u=""+(r?r.apply(this,arguments):e);if(!h.has(i,u))i[u]=n.apply(this,arguments);return i[u]};t.cache={};return t};h.delay=function(n,r){var t=a.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},r)};h.defer=h.partial(h.delay,h,1);h.throttle=function(n,r,t){var e,i,u;var a=null;var f=0;if(!t)t={};var o=function(){f=t.leading===false?0:h.now();a=null;u=n.apply(e,i);if(!a)e=i=null};return function(){var l=h.now();if(!f&&t.leading===false)f=l;var c=r-(l-f);e=this;i=arguments;if(c<=0||c>r){if(a){clearTimeout(a);a=null}f=l;u=n.apply(e,i);if(!a)e=i=null}else if(!a&&t.trailing!==false){a=setTimeout(o,c)}return u}};h.debounce=function(n,r,t){var e,i,u,a,f;var o=function(){var l=h.now()-a;if(l<r&&l>=0){e=setTimeout(o,r-l)}else{e=null;if(!t){f=n.apply(u,i);if(!e)u=i=null}}};return function(){u=this;i=arguments;a=h.now();var l=t&&!e;if(!e)e=setTimeout(o,r);if(l){f=n.apply(u,i);u=i=null}return f}};h.wrap=function(n,r){return h.partial(r,n)};h.negate=function(n){return function(){return!n.apply(this,arguments)}};h.compose=function(){var n=arguments;var r=n.length-1;return function(){var t=r;var e=n[r].apply(this,arguments);while(t--)e=n[t].call(this,e);return e}};h.after=function(n,r){return function(){if(--n<1){return r.apply(this,arguments)}}};h.before=function(n,r){var t;return function(){if(--n>0){t=r.apply(this,arguments)}if(n<=1)r=null;return t}};h.once=h.partial(h.before,2);var O=!{toString:null}.propertyIsEnumerable("toString");var I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function F(n,r){var t=I.length;var i=n.constructor;var u=h.isFunction(i)&&i.prototype||e;var a="constructor";if(h.has(n,a)&&!h.contains(r,a))r.push(a);while(t--){a=I[t];if(a in n&&n[a]!==u[a]&&!h.contains(r,a)){r.push(a)}}}h.keys=function(n){if(!h.isObject(n))return[];if(c)return c(n);var r=[];for(var t in n)if(h.has(n,t))r.push(t);if(O)F(n,r);return r};h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);if(O)F(n,r);return r};h.values=function(n){var r=h.keys(n);var t=r.length;var e=Array(t);for(var i=0;i<t;i++){e[i]=n[r[i]]}return e};h.mapObject=function(n,r,t){r=y(r,t);var e=h.keys(n),i=e.length,u={},a;for(var f=0;f<i;f++){a=e[f];u[a]=r(n[a],a,n)}return u};h.pairs=function(n){var r=h.keys(n);var t=r.length;var e=Array(t);for(var i=0;i<t;i++){e[i]=[r[i],n[r[i]]]}return e};h.invert=function(n){var r={};var t=h.keys(n);for(var e=0,i=t.length;e<i;e++){r[n[t[e]]]=t[e]}return r};h.functions=h.methods=function(n){var r=[];for(var t in n){if(h.isFunction(n[t]))r.push(t)}return r.sort()};h.extend=m(h.allKeys);h.extendOwn=h.assign=m(h.keys);h.findKey=function(n,r,t){r=y(r,t);var e=h.keys(n),i;for(var u=0,a=e.length;u<a;u++){i=e[u];if(r(n[i],i,n))return i}};h.pick=function(n,r,t){var e={},i=n,u,a;if(i==null)return e;if(h.isFunction(r)){a=h.allKeys(i);u=g(r,t)}else{a=j(arguments,false,false,1);u=function(n,r,t){return r in t};i=Object(i)}for(var f=0,o=a.length;f<o;f++){var l=a[f];var c=i[l];if(u(c,l,i))e[l]=c}return e};h.omit=function(n,r,t){if(h.isFunction(r)){r=h.negate(r)}else{var e=h.map(j(arguments,false,false,1),String);r=function(n,r){return!h.contains(e,r)}}return h.pick(n,r,t)};h.defaults=m(h.allKeys,true);h.create=function(n,r){var t=d(n);if(r)h.extendOwn(t,r);return t};h.clone=function(n){if(!h.isObject(n))return n;return h.isArray(n)?n.slice():h.extend({},n)};h.tap=function(n,r){r(n);return n};h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(n==null)return!e;var i=Object(n);for(var u=0;u<e;u++){var a=t[u];if(r[a]!==i[a]||!(a in i))return false}return true};var S=function(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return n===r;if(n instanceof h)n=n._wrapped;if(r instanceof h)r=r._wrapped;var i=f.call(n);if(i!==f.call(r))return false;switch(i){case"[object RegExp]":case"[object String]":return""+n===""+r;case"[object Number]":if(+n!==+n)return+r!==+r;return+n===0?1/+n===1/r:+n===+r;case"[object Date]":case"[object Boolean]":return+n===+r}var u=i==="[object Array]";if(!u){if(typeof n!="object"||typeof r!="object")return false;var a=n.constructor,o=r.constructor;if(a!==o&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o)&&("constructor"in n&&"constructor"in r)){return false}}t=t||[];e=e||[];var l=t.length;while(l--){if(t[l]===n)return e[l]===r}t.push(n);e.push(r);if(u){l=n.length;if(l!==r.length)return false;while(l--){if(!S(n[l],r[l],t,e))return false}}else{var c=h.keys(n),s;l=c.length;if(h.keys(r).length!==l)return false;while(l--){s=c[l];if(!(h.has(r,s)&&S(n[s],r[s],t,e)))return false}}t.pop();e.pop();return true};h.isEqual=function(n,r){return S(n,r)};h.isEmpty=function(n){if(n==null)return true;if(w(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n)))return n.length===0;return h.keys(n).length===0};h.isElement=function(n){return!!(n&&n.nodeType===1)};h.isArray=l||function(n){return f.call(n)==="[object Array]"};h.isObject=function(n){var r=typeof n;return r==="function"||r==="object"&&!!n};h.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){h["is"+n]=function(r){return f.call(r)==="[object "+n+"]"}});if(!h.isArguments(arguments)){h.isArguments=function(n){return h.has(n,"callee")}}if(typeof/./!="function"&&typeof Int8Array!="object"){h.isFunction=function(n){return typeof n=="function"||false}}h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))};h.isNaN=function(n){return h.isNumber(n)&&n!==+n};h.isBoolean=function(n){return n===true||n===false||f.call(n)==="[object Boolean]"};h.isNull=function(n){return n===null};h.isUndefined=function(n){return n===void 0};h.has=function(n,r){return n!=null&&o.call(n,r)};h.noConflict=function(){n._=r;return this};h.identity=function(n){return n};h.constant=function(n){return function(){return n}};h.noop=function(){};h.property=function(n){return function(r){return r==null?void 0:r[n]}};h.propertyOf=function(n){return n==null?function(){}:function(r){return n[r]}};h.matcher=h.matches=function(n){n=h.extendOwn({},n);return function(r){return h.isMatch(r,n)}};h.times=function(n,r,t){var e=Array(Math.max(0,n));r=g(r,t,1);for(var i=0;i<n;i++)e[i]=r(i);return e};h.random=function(n,r){if(r==null){r=n;n=0}return n+Math.floor(Math.random()*(r-n+1))};h.now=Date.now||function(){return(new Date).getTime()};var E={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var M=h.invert(E);var N=function(n){var r=function(r){return n[r]};var t="(?:"+h.keys(n).join("|")+")";var e=RegExp(t);var i=RegExp(t,"g");return function(n){n=n==null?"":""+n;return e.test(n)?n.replace(i,r):n}};h.escape=N(E);h.unescape=N(M);h.result=function(n,r,t){var e=n==null?void 0:n[r];if(e===void 0){e=t}return h.isFunction(e)?e.call(n):e};var B=0;h.uniqueId=function(n){var r=++B+"";return n?n+r:r};h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/;var R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"};var q=/\\|'|\r|\n|\u2028|\u2029/g;var K=function(n){return"\\"+R[n]};h.template=function(n,r,t){if(!r&&t)r=t;r=h.defaults({},r,h.templateSettings);var e=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g");var i=0;var u="__p+='";n.replace(e,function(r,t,e,a,f){u+=n.slice(i,f).replace(q,K);i=f+r.length;if(t){u+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"}else if(e){u+="'+\n((__t=("+e+"))==null?'':__t)+\n'"}else if(a){u+="';\n"+a+"\n__p+='"}return r});u+="';\n";if(!r.variable)u="with(obj||{}){\n"+u+"}\n";u="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{var a=new Function(r.variable||"obj","_",u)}catch(f){f.source=u;throw f}var o=function(n){return a.call(this,n,h)};var l=r.variable||"obj";o.source="function("+l+"){\n"+u+"}";return o};h.chain=function(n){var r=h(n);r._chain=true;return r};var z=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(n){h.each(h.functions(n),function(r){var t=h[r]=n[r];h.prototype[r]=function(){var n=[this._wrapped];u.apply(n,arguments);return z(this,t.apply(h,n))}})};h.mixin(h);h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=t[n];h.prototype[n]=function(){var t=this._wrapped;r.apply(t,arguments);if((n==="shift"||n==="splice")&&t.length===0)delete t[0];return z(this,t)}});h.each(["concat","join","slice"],function(n){var r=t[n];h.prototype[n]=function(){return z(this,r.apply(this._wrapped,arguments))}});h.prototype.value=function(){return this._wrapped};h.prototype.valueOf=h.prototype.toJSON=h.prototype.value;h.prototype.toString=function(){return""+this._wrapped};if(typeof define==="function"&&define.amd){define("underscore",[],function(){return h})}}).call(this);
(function(e,t,n){"use strict";function r(e,t){t=t||Error;return function(){var n=2;var r=arguments,i=r[0],a="["+(e?e+":":"")+i+"] ",o=r[1],s,u;a+=o.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1),i=t+n;if(i<r.length){return et(r[i])}return e});a+="\nhttp://errors.angularjs.org/1.4.0/"+(e?e+"/":"")+i;for(u=n,s="?";u<r.length;u++,s="&"){a+=s+"p"+(u-n)+"="+encodeURIComponent(et(r[u]))}return new t(a)}}var i=/^\/(.+)\/([a-z]*)$/;var a="validity";var o=function(e){return F(e)?e.toLowerCase():e};var s=Object.prototype.hasOwnProperty;var u=function(e){return F(e)?e.toUpperCase():e};var l=function(e){return F(e)?e.replace(/[A-Z]/g,function(e){return String.fromCharCode(e.charCodeAt(0)|32)}):e};var f=function(e){return F(e)?e.replace(/[a-z]/g,function(e){return String.fromCharCode(e.charCodeAt(0)&~32)}):e};if("i"!=="I".toLowerCase()){o=l;u=f}var c,h,p,d=[].slice,$=[].splice,v=[].push,m=Object.prototype.toString,g=Object.getPrototypeOf,y=r("ng"),b=e.angular||(e.angular={}),w,x=0;c=t.documentMode;function S(e){if(e==null||G(e)){return false}var t="length"in Object(e)&&e.length;if(e.nodeType===We&&t){return true}return F(e)||H(e)||t===0||typeof t==="number"&&t>0&&t-1 in e}function C(e,t,n){var r,i;if(e){if(z(e)){for(r in e){if(r!="prototype"&&r!="length"&&r!="name"&&(!e.hasOwnProperty||e.hasOwnProperty(r))){t.call(n,e[r],r,e)}}}else if(H(e)||S(e)){var a=typeof e!=="object";for(r=0,i=e.length;r<i;r++){if(a||r in e){t.call(n,e[r],r,e)}}}else if(e.forEach&&e.forEach!==C){e.forEach(t,n,e)}else if(U(e)){for(r in e){t.call(n,e[r],r,e)}}else if(typeof e.hasOwnProperty==="function"){for(r in e){if(e.hasOwnProperty(r)){t.call(n,e[r],r,e)}}}else{for(r in e){if(s.call(e,r)){t.call(n,e[r],r,e)}}}}return e}function E(e,t,n){var r=Object.keys(e).sort();for(var i=0;i<r.length;i++){t.call(n,e[r[i]],r[i])}return r}function k(e){return function(t,n){e(n,t)}}function A(){return++x}function O(e,t){if(t){e.$$hashKey=t}else{delete e.$$hashKey}}function M(e,t,n){var r=e.$$hashKey;for(var i=0,a=t.length;i<a;++i){var o=t[i];if(!q(o)&&!z(o))continue;var s=Object.keys(o);for(var u=0,l=s.length;u<l;u++){var f=s[u];var c=o[f];if(n&&q(c)){if(!q(e[f]))e[f]=H(c)?[]:{};M(e[f],[c],true)}else{e[f]=c}}}O(e,r);return e}function T(e){return M(e,d.call(arguments,1),false)}function V(e){return M(e,d.call(arguments,1),true)}function N(e){return parseInt(e,10)}function j(e,t){return T(Object.create(e),t)}function P(){}P.$inject=[];function I(e){return e}I.$inject=[];function D(e){return function(){return e}}function R(e){return typeof e==="undefined"}function _(e){return typeof e!=="undefined"}function q(e){return e!==null&&typeof e==="object"}function U(e){return e!==null&&typeof e==="object"&&!g(e)}function F(e){return typeof e==="string"}function B(e){return typeof e==="number"}function L(e){return m.call(e)==="[object Date]"}var H=Array.isArray;function z(e){return typeof e==="function"}function W(e){return m.call(e)==="[object RegExp]"}function G(e){return e&&e.window===e}function J(e){return e&&e.$evalAsync&&e.$watch}function Y(e){return m.call(e)==="[object File]"}function Z(e){return m.call(e)==="[object FormData]"}function K(e){return m.call(e)==="[object Blob]"}function X(e){return typeof e==="boolean"}function Q(e){return e&&z(e.then)}var ee=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/;function te(e){return ee.test(m.call(e))}var ne=function(e){return F(e)?e.trim():e};var re=function(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};function ie(e){return!!(e&&(e.nodeName||e.prop&&e.attr&&e.find))}function ae(e){var t={},n=e.split(","),r;for(r=0;r<n.length;r++){t[n[r]]=true}return t}function oe(e){return o(e.nodeName||e[0]&&e[0].nodeName)}function se(e,t){return Array.prototype.indexOf.call(e,t)!=-1}function ue(e,t){var n=e.indexOf(t);if(n>=0){e.splice(n,1)}return n}function le(e,t,n,r){if(G(e)||J(e)){throw y("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")}if(te(t)){throw y("cpta","Can't copy! TypedArray destination cannot be mutated.")}if(!t){t=e;if(e){if(H(e)){t=le(e,[],n,r)}else if(te(e)){t=new e.constructor(e)}else if(L(e)){t=new Date(e.getTime())}else if(W(e)){t=new RegExp(e.source,e.toString().match(/[^\/]*$/)[0]);t.lastIndex=e.lastIndex}else if(q(e)){var i=Object.create(g(e));t=le(e,i,n,r)}}}else{if(e===t)throw y("cpi","Can't copy! Source and destination are identical.");n=n||[];r=r||[];if(q(e)){var a=n.indexOf(e);if(a!==-1)return r[a];n.push(e);r.push(t)}var o,u;if(H(e)){t.length=0;for(var l=0;l<e.length;l++){o=le(e[l],null,n,r);if(q(e[l])){n.push(e[l]);r.push(o)}t.push(o)}}else{var f=t.$$hashKey;if(H(t)){t.length=0}else{C(t,function(e,n){delete t[n]})}if(U(e)){for(u in e){c(u,e[u],t,n,r)}}else if(e&&typeof e.hasOwnProperty==="function"){for(u in e){if(e.hasOwnProperty(u)){c(u,e[u],t,n,r)}}}else{for(u in e){if(s.call(e,u)){c(u,e[u],t,n,r)}}}O(t,f)}}return t;function c(e,t,n,r,i){var a=le(t,null,r,i);if(q(t)){r.push(t);i.push(a)}n[e]=a}}function fe(e,t){if(H(e)){t=t||[];for(var n=0,r=e.length;n<r;n++){t[n]=e[n]}}else if(q(e)){t=t||{};for(var i in e){if(!(i.charAt(0)==="$"&&i.charAt(1)==="$")){t[i]=e[i]}}}return t||e}function ce(e,t){if(e===t)return true;if(e===null||t===null)return false;if(e!==e&&t!==t)return true;var r=typeof e,i=typeof t,a,o,s;if(r==i){if(r=="object"){if(H(e)){if(!H(t))return false;if((a=e.length)==t.length){for(o=0;o<a;o++){if(!ce(e[o],t[o]))return false}return true}}else if(L(e)){if(!L(t))return false;return ce(e.getTime(),t.getTime())}else if(W(e)){return W(t)?e.toString()==t.toString():false}else{if(J(e)||J(t)||G(e)||G(t)||H(t)||L(t)||W(t))return false;s=ze();for(o in e){if(o.charAt(0)==="$"||z(e[o]))continue;if(!ce(e[o],t[o]))return false;s[o]=true}for(o in t){if(!(o in s)&&o.charAt(0)!=="$"&&t[o]!==n&&!z(t[o]))return false}return true}}}return false}var he=function(){if(_(he.isActive_))return he.isActive_;var e=!!(t.querySelector("[ng-csp]")||t.querySelector("[data-ng-csp]"));if(!e){try{new Function("")}catch(n){e=true}}return he.isActive_=e};var pe=function(){if(_(pe.name_))return pe.name_;var e;var n,r=Me.length,i,a;for(n=0;n<r;++n){i=Me[n];if(e=t.querySelector("["+i.replace(":","\\:")+"jq]")){a=e.getAttribute(i+"jq");break}}return pe.name_=a};function de(e,t,n){return e.concat(d.call(t,n))}function $e(e,t){return d.call(e,t||0)}function ve(e,t){var n=arguments.length>2?$e(arguments,2):[];if(z(t)&&!(t instanceof RegExp)){return n.length?function(){return arguments.length?t.apply(e,de(n,arguments,0)):t.apply(e,n)}:function(){return arguments.length?t.apply(e,arguments):t.call(e)}}else{return t}}function me(e,r){var i=r;if(typeof e==="string"&&e.charAt(0)==="$"&&e.charAt(1)==="$"){i=n}else if(G(r)){i="$WINDOW"}else if(r&&t===r){i="$DOCUMENT"}else if(J(r)){i="$SCOPE"}return i}function ge(e,t){if(typeof e==="undefined")return n;if(!B(t)){t=t?2:null}return JSON.stringify(e,me,t)}function ye(e){return F(e)?JSON.parse(e):e}function be(e,t){var n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function we(e,t){e=new Date(e.getTime());e.setMinutes(e.getMinutes()+t);return e}function xe(e,t,n){n=n?-1:1;var r=be(t,e.getTimezoneOffset());return we(e,n*(r-e.getTimezoneOffset()))}function Se(e){e=h(e).clone();try{e.empty()}catch(t){}var n=h("<div>").append(e).html();try{return e[0].nodeType===Je?o(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(e,t){return"<"+o(t)})}catch(t){return o(n)}}function Ce(e){try{return decodeURIComponent(e)}catch(t){}}function Ee(e){var t={},n,r;C((e||"").split("&"),function(e){if(e){n=e.replace(/\+/g,"%20").split("=");r=Ce(n[0]);if(_(r)){var i=_(n[1])?Ce(n[1]):true;if(!s.call(t,r)){t[r]=i}else if(H(t[r])){t[r].push(i)}else{t[r]=[t[r],i]}}}});return t}function ke(e){var t=[];C(e,function(e,n){if(H(e)){C(e,function(e){t.push(Oe(n,true)+(e===true?"":"="+Oe(e,true)))})}else{t.push(Oe(n,true)+(e===true?"":"="+Oe(e,true)))}});return t.length?t.join("&"):""}function Ae(e){return Oe(e,true).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Oe(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,t?"%20":"+")}var Me=["ng-","data-ng-","ng:","x-ng-"];function Te(e,t){var n,r,i=Me.length;for(r=0;r<i;++r){n=Me[r]+t;if(F(n=e.getAttribute(n))){return n}}return null}function Ve(e,t){var n,r,i={};C(Me,function(t){var i=t+"app";if(!n&&e.hasAttribute&&e.hasAttribute(i)){n=e;r=e.getAttribute(i)}});C(Me,function(t){var i=t+"app";var a;if(!n&&(a=e.querySelector("["+i.replace(":","\\:")+"]"))){n=a;r=a.getAttribute(i)}});if(n){i.strictDi=Te(n,"strict-di")!==null;t(n,r?[r]:[],i)}}function Ne(n,r,i){if(!q(i))i={};var a={strictDi:false};i=T(a,i);var o=function(){n=h(n);if(n.injector()){var e=n[0]===t?"document":Se(n);throw y("btstrpd","App Already Bootstrapped with this Element '{0}'",e.replace(/</,"&lt;").replace(/>/,"&gt;"))}r=r||[];r.unshift(["$provide",function(e){e.value("$rootElement",n)}]);if(i.debugInfoEnabled){r.push(["$compileProvider",function(e){e.debugInfoEnabled(true)}])}r.unshift("ng");var a=nn(r,i.strictDi);a.invoke(["$rootScope","$rootElement","$compile","$injector",function o(e,t,n,r){e.$apply(function(){t.data("$injector",r);n(t)(e)})}]);return a};var s=/^NG_ENABLE_DEBUG_INFO!/;var u=/^NG_DEFER_BOOTSTRAP!/;if(e&&s.test(e.name)){i.debugInfoEnabled=true;e.name=e.name.replace(s,"")}if(e&&!u.test(e.name)){return o()}e.name=e.name.replace(u,"");b.resumeBootstrap=function(e){C(e,function(e){r.push(e)});return o()};if(z(b.resumeDeferredBootstrap)){b.resumeDeferredBootstrap()}}function je(){e.name="NG_ENABLE_DEBUG_INFO!"+e.name;e.location.reload()}function Pe(e){var t=b.element(e).injector();if(!t){throw y("test","no injector found for element argument to getTestability")}return t.get("$$testability")}var Ie=/[A-Z]/g;function De(e,t){t=t||"_";return e.replace(Ie,function(e,n){return(n?t:"")+e.toLowerCase()})}var Re=false;var _e;function qe(){var t;if(Re){return}var r=pe();p=e.jQuery;if(_(r)){p=r===null?n:e[r]}if(p&&p.fn.on){h=p;T(p.fn,{scope:_t.scope,isolateScope:_t.isolateScope,controller:_t.controller,injector:_t.injector,inheritedData:_t.inheritedData});t=p.cleanData;p.cleanData=function(e){var n;if(!_e){for(var r=0,i;(i=e[r])!=null;r++){n=p._data(i,"events");if(n&&n.$destroy){p(i).triggerHandler("$destroy")}}}else{_e=false}t(e)}}else{h=xt}b.element=h;Re=true}function Ue(e,t,n){if(!e){throw y("areq","Argument '{0}' is {1}",t||"?",n||"required")}return e}function Fe(e,t,n){if(n&&H(e)){e=e[e.length-1]}Ue(z(e),t,"not a function, got "+(e&&typeof e==="object"?e.constructor.name||"Object":typeof e));return e}function Be(e,t){if(e==="hasOwnProperty"){throw y("badname","hasOwnProperty is not a valid {0} name",t)}}function Le(e,t,n){if(!t)return e;var r=t.split(".");var i;var a=e;var o=r.length;for(var s=0;s<o;s++){i=r[s];if(e){e=(a=e)[i]}}if(!n&&z(e)){return ve(a,e)}return e}function He(e){var t=e[0];var n=e[e.length-1];var r=[t];do{t=t.nextSibling;if(!t)break;r.push(t)}while(t!==n);return h(r)}function ze(){return Object.create(null)}var We=1;var Ge=2;var Je=3;var Ye=8;var Ze=9;var Ke=11;function Xe(e){var t=r("$injector");var n=r("ng");function i(e,t,n){return e[t]||(e[t]=n())}var a=i(e,"angular",Object);a.$$minErr=a.$$minErr||r;return i(a,"module",function(){var e={};return function r(a,o,s){var u=function(e,t){if(e==="hasOwnProperty"){throw n("badname","hasOwnProperty is not a valid {0} name",t)}};u(a,"module");if(o&&e.hasOwnProperty(a)){e[a]=null}return i(e,a,function(){if(!o){throw t("nomod","Module '{0}' is not available! You either misspelled "+"the module name or forgot to load it. If registering a module ensure that you "+"specify the dependencies as the second argument.",a)}var e=[];var n=[];var r=[];var i=l("$injector","invoke","push",n);var u={_invokeQueue:e,_configBlocks:n,_runBlocks:r,requires:o,name:a,provider:l("$provide","provider"),factory:l("$provide","factory"),service:l("$provide","service"),value:l("$provide","value"),constant:l("$provide","constant","unshift"),decorator:l("$provide","decorator"),animation:l("$animateProvider","register"),filter:l("$filterProvider","register"),controller:l("$controllerProvider","register"),directive:l("$compileProvider","directive"),config:i,run:function(e){r.push(e);return this}};if(s){i(s)}return u;function l(t,n,r,i){if(!i)i=e;return function(){i[r||"push"]([t,n,arguments]);return u}}})}})}function Qe(e){var t=[];return JSON.stringify(e,function(e,n){n=me(e,n);if(q(n)){if(t.indexOf(n)>=0)return"<<already seen>>";t.push(n)}return n})}function et(e){if(typeof e==="function"){return e.toString().replace(/ \{[\s\S]*$/,"")}else if(typeof e==="undefined"){return"undefined"}else if(typeof e!=="string"){return Qe(e)}return e}var tt={full:"1.4.0",major:1,minor:4,dot:0,codeName:"jaracimrman-existence"};function nt(t){T(t,{bootstrap:Ne,copy:le,extend:T,merge:V,equals:ce,element:h,forEach:C,injector:nn,noop:P,bind:ve,toJson:ge,fromJson:ye,identity:I,isUndefined:R,isDefined:_,isString:F,isFunction:z,isObject:q,isNumber:B,isElement:ie,isArray:H,version:tt,isDate:L,lowercase:o,uppercase:u,callbacks:{counter:0},getTestability:Pe,$$minErr:r,$$csp:he,reloadWithDebugInfo:je});w=Xe(e);try{w("ngLocale")}catch(n){w("ngLocale",[]).provider("$locale",tr)}w("ng",["ngLocale"],["$provide",function i(e){e.provider({$$sanitizeUri:ni});e.provider("$compile",wn).directive({a:Zi,input:Oa,textarea:Oa,form:ra,script:Co,select:Ao,style:Mo,option:Oo,ngBind:Va,ngBindHtml:ja,ngBindTemplate:Na,ngClass:Da,ngClassEven:_a,ngClassOdd:Ra,ngCloak:qa,ngController:Ua,ngForm:ia,ngHide:go,ngIf:La,ngInclude:Ha,ngInit:Wa,ngNonBindable:uo,ngPluralize:ho,ngRepeat:po,ngShow:mo,ngStyle:yo,ngSwitch:bo,ngSwitchWhen:wo,ngSwitchDefault:xo,ngOptions:co,ngTransclude:So,ngModel:ro,ngList:Ga,ngChange:Pa,pattern:Vo,ngPattern:Vo,required:To,ngRequired:To,minlength:jo,ngMinlength:jo,maxlength:No,ngMaxlength:No,ngValue:Ta,ngModelOptions:ao}).directive({ngInclude:za}).directive(Ki).directive(Fa);e.provider({$anchorScroll:rn,$animate:dn,$$animateQueue:pn,$$AnimateRunner:hn,$browser:mn,$cacheFactory:gn,$controller:Vn,$document:Nn,$exceptionHandler:jn,$filter:bi,$interpolate:Qn,$interval:er,$http:Jn,$httpParamSerializer:Un,$httpParamSerializerJQLike:Fn,$httpBackend:Zn,$location:yr,$log:br,$parse:Zr,$rootScope:ti,$q:Kr,$$q:Xr,$sce:ui,$sceDelegate:si,$sniffer:li,$templateCache:yn,$templateRequest:fi,$$testability:ci,$timeout:hi,$window:mi,$$rAF:ei,$$asyncCallback:$n,$$jqLite:zt,$$HashMap:Jt,$$cookieReader:yi})}])}xt.expando="ng339";var rt=xt.cache={},it=1,at=function(e,t,n){e.addEventListener(t,n,false)},ot=function(e,t,n){e.removeEventListener(t,n,false)};xt._data=function(e){return this.cache[e[this.expando]]||{}};function st(){return++it}var ut=/([\:\-\_]+(.))/g;var lt=/^moz([A-Z])/;var ft={mouseleave:"mouseout",mouseenter:"mouseover"};var ct=r("jqLite");function ht(e){return e.replace(ut,function(e,t,n,r){return r?n.toUpperCase():n}).replace(lt,"Moz$1")}var pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var dt=/<|&#?\w+;/;var $t=/<([\w:]+)/;var vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;var mt={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};mt.optgroup=mt.option;mt.tbody=mt.tfoot=mt.colgroup=mt.caption=mt.thead;mt.th=mt.td;function gt(e){return!dt.test(e)}function yt(e){var t=e.nodeType;return t===We||!t||t===Ze}function bt(e,t){var n,r,i,a=t.createDocumentFragment(),o=[],s;if(gt(e)){o.push(t.createTextNode(e))}else{n=n||a.appendChild(t.createElement("div"));r=($t.exec(e)||["",""])[1].toLowerCase();i=mt[r]||mt._default;n.innerHTML=i[1]+e.replace(vt,"<$1></$2>")+i[2];s=i[0];while(s--){n=n.lastChild}o=de(o,n.childNodes);n=a.firstChild;n.textContent=""}a.textContent="";a.innerHTML="";C(o,function(e){a.appendChild(e)});return a}function wt(e,n){n=n||t;var r;if(r=pt.exec(e)){return[n.createElement(r[1])]}if(r=bt(e,n)){return r.childNodes}return[]}function xt(e){if(e instanceof xt){return e}var t;if(F(e)){e=ne(e);t=true}if(!(this instanceof xt)){if(t&&e.charAt(0)!="<"){throw ct("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")}return new xt(e)}if(t){Nt(this,wt(e))}else{Nt(this,e)}}function St(e){return e.cloneNode(true)}function Ct(e,t){if(!t)kt(e);if(e.querySelectorAll){var n=e.querySelectorAll("*");for(var r=0,i=n.length;r<i;r++){kt(n[r])}}}function Et(e,t,n,r){if(_(r))throw ct("offargs","jqLite#off() does not support the `selector` argument");var i=At(e);var a=i&&i.events;var o=i&&i.handle;if(!o)return;if(!t){for(t in a){if(t!=="$destroy"){ot(e,t,o)}delete a[t]}}else{C(t.split(" "),function(t){if(_(n)){var r=a[t];ue(r||[],n);if(r&&r.length>0){return}}ot(e,t,o);delete a[t]})}}function kt(e,t){var r=e.ng339;var i=r&&rt[r];if(i){if(t){delete i.data[t];return}if(i.handle){if(i.events.$destroy){i.handle({},"$destroy")}Et(e)}delete rt[r];e.ng339=n}}function At(e,t){var r=e.ng339,i=r&&rt[r];if(t&&!i){e.ng339=r=st();i=rt[r]={events:{},data:{},handle:n}}return i}function Ot(e,t,n){if(yt(e)){var r=_(n);var i=!r&&t&&!q(t);var a=!t;var o=At(e,!i);var s=o&&o.data;if(r){s[t]=n}else{if(a){return s}else{if(i){return s&&s[t]}else{T(s,t)}}}}}function Mt(e,t){if(!e.getAttribute)return false;return(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1}function Tt(e,t){if(t&&e.setAttribute){C(t.split(" "),function(t){e.setAttribute("class",ne((" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ne(t)+" "," ")))})}}function Vt(e,t){if(t&&e.setAttribute){var n=(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");C(t.split(" "),function(e){e=ne(e);if(n.indexOf(" "+e+" ")===-1){n+=e+" "}});e.setAttribute("class",ne(n))}}function Nt(e,t){if(t){if(t.nodeType){e[e.length++]=t}else{var n=t.length;if(typeof n==="number"&&t.window!==t){if(n){for(var r=0;r<n;r++){e[e.length++]=t[r]}}}else{e[e.length++]=t}}}}function jt(e,t){return Pt(e,"$"+(t||"ngController")+"Controller")}function Pt(e,t,r){if(e.nodeType==Ze){e=e.documentElement}var i=H(t)?t:[t];while(e){for(var a=0,o=i.length;a<o;a++){if((r=h.data(e,i[a]))!==n)return r}e=e.parentNode||e.nodeType===Ke&&e.host}}function It(e){Ct(e,true);while(e.firstChild){e.removeChild(e.firstChild)}}function Dt(e,t){if(!t)Ct(e);var n=e.parentNode;if(n)n.removeChild(e)}function Rt(t,n){n=n||e;if(n.document.readyState==="complete"){n.setTimeout(t)}else{h(n).on("load",t)}}var _t=xt.prototype={ready:function(n){var r=false;function i(){if(r)return;r=true;n()}if(t.readyState==="complete"){setTimeout(i)}else{this.on("DOMContentLoaded",i);xt(e).on("load",i)}},toString:function(){var e=[];C(this,function(t){e.push(""+t)});return"["+e.join(", ")+"]"},eq:function(e){return e>=0?h(this[e]):h(this[this.length+e])},length:0,push:v,sort:[].sort,splice:[].splice};var qt={};C("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(e){qt[o(e)]=e});var Ut={};C("input,select,option,textarea,button,form,details".split(","),function(e){Ut[e]=true});var Ft={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};function Bt(e,t){var n=qt[t.toLowerCase()];return n&&Ut[oe(e)]&&n}function Lt(e,t){var n=e.nodeName;return(n==="INPUT"||n==="TEXTAREA")&&Ft[t]}C({data:Ot,removeData:kt},function(e,t){xt[t]=e});C({data:Ot,inheritedData:Pt,scope:function(e){return h.data(e,"$scope")||Pt(e.parentNode||e,["$isolateScope","$scope"])},isolateScope:function(e){return h.data(e,"$isolateScope")||h.data(e,"$isolateScopeNoTemplate")},controller:jt,injector:function(e){return Pt(e,"$injector")},removeAttr:function(e,t){e.removeAttribute(t)},hasClass:Mt,css:function(e,t,n){t=ht(t);if(_(n)){e.style[t]=n}else{return e.style[t]}},attr:function(e,t,r){var i=e.nodeType;if(i===Je||i===Ge||i===Ye){return}var a=o(t);if(qt[a]){if(_(r)){if(!!r){e[t]=true;e.setAttribute(t,a)}else{e[t]=false;e.removeAttribute(a)}}else{return e[t]||(e.attributes.getNamedItem(t)||P).specified?a:n}}else if(_(r)){e.setAttribute(t,r)}else if(e.getAttribute){var s=e.getAttribute(t,2);return s===null?n:s}},prop:function(e,t,n){if(_(n)){e[t]=n}else{return e[t]}},text:function(){e.$dv="";return e;function e(e,t){if(R(t)){var n=e.nodeType;return n===We||n===Je?e.textContent:""}e.textContent=t}}(),val:function(e,t){if(R(t)){if(e.multiple&&oe(e)==="select"){var n=[];C(e.options,function(e){if(e.selected){n.push(e.value||e.text)}});return n.length===0?null:n}return e.value}e.value=t},html:function(e,t){if(R(t)){return e.innerHTML}Ct(e,true);e.innerHTML=t},empty:It},function(e,t){xt.prototype[t]=function(t,r){var i,a;var o=this.length;if(e!==It&&(e.length==2&&(e!==Mt&&e!==jt)?t:r)===n){if(q(t)){for(i=0;i<o;i++){if(e===Ot){e(this[i],t)}else{for(a in t){e(this[i],a,t[a])}}}return this}else{var s=e.$dv;var u=s===n?Math.min(o,1):o;for(var l=0;l<u;l++){var f=e(this[l],t,r);s=s?s+f:f}return s}}else{for(i=0;i<o;i++){e(this[i],t,r)}return this}}});function Ht(e,t){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented};var i=t[r||n.type];var a=i?i.length:0;if(!a)return;if(R(n.immediatePropagationStopped)){var o=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){n.immediatePropagationStopped=true;if(n.stopPropagation){n.stopPropagation()}if(o){o.call(n)}}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===true};if(a>1){i=fe(i)}for(var s=0;s<a;s++){if(!n.isImmediatePropagationStopped()){i[s].call(e,n)}}};n.elem=e;return n}C({removeData:kt,on:function Po(e,t,n,r){if(_(r))throw ct("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(!yt(e)){return}var i=At(e,true);var a=i.events;var o=i.handle;if(!o){o=i.handle=Ht(e,a)}var s=t.indexOf(" ")>=0?t.split(" "):[t];var u=s.length;while(u--){t=s[u];var l=a[t];if(!l){a[t]=[];if(t==="mouseenter"||t==="mouseleave"){Po(e,ft[t],function(e){var n=this,r=e.relatedTarget;if(!r||r!==n&&!n.contains(r)){o(e,t)}})}else{if(t!=="$destroy"){at(e,t,o)}}l=a[t]}l.push(n)}},off:Et,one:function(e,t,n){e=h(e);e.on(t,function r(){e.off(t,n);e.off(t,r)});e.on(t,n)},replaceWith:function(e,t){var n,r=e.parentNode;Ct(e);C(new xt(t),function(t){if(n){r.insertBefore(t,n.nextSibling)}else{r.replaceChild(t,e)}n=t})},children:function(e){var t=[];C(e.childNodes,function(e){if(e.nodeType===We){t.push(e)}});return t},contents:function(e){return e.contentDocument||e.childNodes||[]},append:function(e,t){var n=e.nodeType;if(n!==We&&n!==Ke)return;t=new xt(t);for(var r=0,i=t.length;r<i;r++){var a=t[r];e.appendChild(a)}},prepend:function(e,t){if(e.nodeType===We){var n=e.firstChild;C(new xt(t),function(t){e.insertBefore(t,n)})}},wrap:function(e,t){t=h(t).eq(0).clone()[0];var n=e.parentNode;if(n){n.replaceChild(t,e)}t.appendChild(e)},remove:Dt,detach:function(e){Dt(e,true)},after:function(e,t){var n=e,r=e.parentNode;t=new xt(t);for(var i=0,a=t.length;i<a;i++){var o=t[i];r.insertBefore(o,n.nextSibling);n=o}},addClass:Vt,removeClass:Tt,toggleClass:function(e,t,n){if(t){C(t.split(" "),function(t){var r=n;if(R(r)){r=!Mt(e,t)}(r?Vt:Tt)(e,t)})}},parent:function(e){var t=e.parentNode;return t&&t.nodeType!==Ke?t:null},next:function(e){return e.nextElementSibling},find:function(e,t){if(e.getElementsByTagName){return e.getElementsByTagName(t)}else{return[]}},clone:St,triggerHandler:function(e,t,n){var r,i,a;var o=t.type||t;var s=At(e);var u=s&&s.events;var l=u&&u[o];if(l){r={preventDefault:function(){this.defaultPrevented=true},isDefaultPrevented:function(){return this.defaultPrevented===true},stopImmediatePropagation:function(){this.immediatePropagationStopped=true},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===true},stopPropagation:P,type:o,target:e};if(t.type){r=T(r,t)}i=fe(l);a=n?[r].concat(n):[r];C(i,function(t){if(!r.isImmediatePropagationStopped()){t.apply(e,a)}})}}},function(e,t){xt.prototype[t]=function(t,n,r){var i;for(var a=0,o=this.length;a<o;a++){if(R(i)){i=e(this[a],t,n,r);if(_(i)){i=h(i)}}else{Nt(i,e(this[a],t,n,r))}}return _(i)?i:this};xt.prototype.bind=xt.prototype.on;xt.prototype.unbind=xt.prototype.off});function zt(){this.$get=function e(){return T(xt,{hasClass:function(e,t){if(e.attr)e=e[0];return Mt(e,t)},addClass:function(e,t){if(e.attr)e=e[0];return Vt(e,t)},removeClass:function(e,t){if(e.attr)e=e[0];return Tt(e,t)}})}}function Wt(e,t){var n=e&&e.$$hashKey;if(n){if(typeof n==="function"){n=e.$$hashKey()}return n}var r=typeof e;if(r=="function"||r=="object"&&e!==null){n=e.$$hashKey=r+":"+(t||A)()}else{n=r+":"+e}return n}function Gt(e,t){if(t){var n=0;this.nextUid=function(){return++n}}C(e,this.put,this)}Gt.prototype={put:function(e,t){this[Wt(e,this.nextUid)]=t},get:function(e){return this[Wt(e,this.nextUid)]},remove:function(e){var t=this[e=Wt(e,this.nextUid)];delete this[e];return t}};var Jt=[function(){this.$get=[function(){return Gt}]}];var Yt=/^function\s*[^\(]*\(\s*([^\)]*)\)/m;var Zt=/,/;var Kt=/^\s*(_?)(\S+?)\1\s*$/;var Xt=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;var Qt=r("$injector");function en(e){var t=e.toString().replace(Xt,""),n=t.match(Yt);if(n){return"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")"}return"fn"}function tn(e,t,n){var r,i,a,o;if(typeof e==="function"){if(!(r=e.$inject)){r=[];if(e.length){if(t){if(!F(n)||!n){n=e.name||en(e)}throw Qt("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)}i=e.toString().replace(Xt,"");a=i.match(Yt);C(a[1].split(Zt),function(e){e.replace(Kt,function(e,t,n){r.push(n)})})}e.$inject=r}}else if(H(e)){o=e.length-1;Fe(e[o],"fn");r=e.slice(0,o)}else{Fe(e,"fn",true)}return r}function nn(e,t){t=t===true;var r={},i="Provider",a=[],o=new Gt([],true),s={$provide:{provider:c(h),factory:c(d),service:c($),value:c(v),constant:c(m),decorator:g}},u=s.$injector=x(s,function(e,t){if(b.isString(t)){a.push(t)}throw Qt("unpr","Unknown provider: {0}",a.join(" <- "))}),l={},f=l.$injector=x(l,function(e,t){var r=u.get(e+i,t);return f.invoke(r.$get,r,n,e)});C(y(e),function(e){f.invoke(e||P)});return f;function c(e){return function(t,n){if(q(t)){C(t,k(e))}else{return e(t,n)}}}function h(e,t){Be(e,"service");if(z(t)||H(t)){t=u.instantiate(t)}if(!t.$get){throw Qt("pget","Provider '{0}' must define $get factory method.",e)}return s[e+i]=t}function p(e,t){return function n(){var n=f.invoke(t,this);if(R(n)){throw Qt("undef","Provider '{0}' must return a value from $get factory method.",e)}return n}}function d(e,t,n){return h(e,{$get:n!==false?p(e,t):t})}function $(e,t){return d(e,["$injector",function(e){return e.instantiate(t)}])}function v(e,t){return d(e,D(t),false)}function m(e,t){Be(e,"constant");s[e]=t;l[e]=t}function g(e,t){var n=u.get(e+i),r=n.$get;n.$get=function(){var e=f.invoke(r,n);return f.invoke(t,null,{$delegate:e})}}function y(e){var t=[],n;C(e,function(e){if(o.get(e))return;o.put(e,true);function r(e){var t,n;for(t=0,n=e.length;t<n;t++){var r=e[t],i=u.get(r[0]);i[r[1]].apply(i,r[2])}}try{if(F(e)){n=w(e);t=t.concat(y(n.requires)).concat(n._runBlocks);r(n._invokeQueue);r(n._configBlocks)}else if(z(e)){t.push(u.invoke(e))}else if(H(e)){t.push(u.invoke(e))}else{Fe(e,"module")}}catch(i){if(H(e)){e=e[e.length-1]}if(i.message&&i.stack&&i.stack.indexOf(i.message)==-1){i=i.message+"\n"+i.stack}throw Qt("modulerr","Failed to instantiate module {0} due to:\n{1}",e,i.stack||i.message||i)}});return t}function x(e,n){function o(t,i){if(e.hasOwnProperty(t)){if(e[t]===r){throw Qt("cdep","Circular dependency found: {0}",t+" <- "+a.join(" <- "))}return e[t]}else{try{a.unshift(t);e[t]=r;return e[t]=n(t,i)}catch(o){if(e[t]===r){delete e[t]}throw o}finally{a.shift()}}}function u(e,n,r,i){if(typeof r==="string"){i=r;r=null}var a=[],s=nn.$$annotate(e,t,i),u,l,f;for(l=0,u=s.length;l<u;l++){f=s[l];if(typeof f!=="string"){throw Qt("itkn","Incorrect injection token! Expected service name as string, got {0}",f)}a.push(r&&r.hasOwnProperty(f)?r[f]:o(f,i))}if(H(e)){e=e[u]}return e.apply(n,a)}function l(e,t,n){var r=Object.create((H(e)?e[e.length-1]:e).prototype||null);var i=u(e,r,t,n);return q(i)||z(i)?i:r}return{invoke:u,instantiate:l,get:o,annotate:nn.$$annotate,has:function(t){return s.hasOwnProperty(t+i)||e.hasOwnProperty(t)}}}}nn.$$annotate=tn;function rn(){var e=true;this.disableAutoScrolling=function(){e=false};this.$get=["$window","$location","$rootScope",function(t,n,r){var i=t.document;function a(e){var t=null;Array.prototype.some.call(e,function(e){if(oe(e)==="a"){t=e;return true}});return t}function o(){var e=u.yOffset;if(z(e)){e=e()}else if(ie(e)){var n=e[0];var r=t.getComputedStyle(n);if(r.position!=="fixed"){e=0}else{e=n.getBoundingClientRect().bottom}}else if(!B(e)){e=0}return e}function s(e){if(e){e.scrollIntoView();var n=o();if(n){var r=e.getBoundingClientRect().top;t.scrollBy(0,r-n)}}else{t.scrollTo(0,0)}}function u(e){e=F(e)?e:n.hash();var t;if(!e)s(null);else if(t=i.getElementById(e))s(t);else if(t=a(i.getElementsByName(e)))s(t);else if(e==="top")s(null)}if(e){r.$watch(function l(){return n.hash()},function f(e,t){if(e===t&&e==="")return;Rt(function(){r.$evalAsync(u)})})}return u}]}var an=r("$animate");var on=1;var sn="ng-animate";function un(e,t){if(!e&&!t)return"";if(!e)return t;if(!t)return e;if(H(e))e=e.join(" ");if(H(t))t=t.join(" ");return e+" "+t}function ln(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.nodeType===on){return n}}}function fn(e){if(F(e)){e=e.split(" ")}var t=ze();C(e,function(e){if(e.length){t[e]=true}});return t}function cn(e){return q(e)?e:{}}var hn=function(){this.$get=["$q","$$rAF",function(e,t){function n(){}n.all=P;n.chain=P;n.prototype={end:P,cancel:P,resume:P,pause:P,complete:P,then:function(n,r){return e(function(e){t(function(){e()})}).then(n,r)}};return n}]};var pn=function(){var e=new Gt;var t=[];this.$get=["$$AnimateRunner","$rootScope",function(n,r){return{enabled:P,on:P,off:P,pin:P,push:function(e,t,r,a){a&&a();r=r||{};r.from&&e.css(r.from);r.to&&e.css(r.to);if(r.addClass||r.removeClass){i(e,r.addClass,r.removeClass)}return new n}};function i(n,i,a){var o=e.get(n);var s;if(!o){e.put(n,o={});t.push(n)}if(i){C(i.split(" "),function(e){if(e){o[e]=true}})}if(a){C(a.split(" "),function(e){if(e){o[e]=false}})}if(t.length>1)return;r.$$postDigest(function(){C(t,function(t){var n=e.get(t);if(n){var r=fn(t.attr("class"));var i="";var a="";C(n,function(e,t){var n=!!r[t];if(e!==n){if(e){i+=(i.length?" ":"")+t}else{a+=(a.length?" ":"")+t}}});C(t,function(e){i&&Vt(e,i);a&&Tt(e,a)});e.remove(t)}});t.length=0})}}]};var dn=["$provide",function(e){var t=this;this.$$registeredAnimations=Object.create(null);this.register=function(n,r){if(n&&n.charAt(0)!=="."){throw an("notcsel","Expecting class selector starting with '.' got '{0}'.",n)}var i=n+"-animation";t.$$registeredAnimations[n.substr(1)]=i;e.factory(i,r)};this.classNameFilter=function(e){if(arguments.length===1){this.$$classNameFilter=e instanceof RegExp?e:null;if(this.$$classNameFilter){var t=new RegExp("(\\s+|\\/)"+sn+"(\\s+|\\/)");if(t.test(this.$$classNameFilter.toString())){throw an("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',sn)}}}return this.$$classNameFilter};this.$get=["$$animateQueue",function(e){function t(e,t,n){if(n){var r=ln(n);if(r&&!r.parentNode&&!r.previousElementSibling){n=null}}n?n.after(e):t.prepend(e)}return{on:e.on,off:e.off,pin:e.pin,enabled:e.enabled,cancel:function(e){e.end&&e.end()},enter:function(n,r,i,a){r=r&&h(r);i=i&&h(i);r=r||i.parent();t(n,r,i);return e.push(n,"enter",cn(a))},move:function(n,r,i,a){r=r&&h(r);i=i&&h(i);r=r||i.parent();t(n,r,i);return e.push(n,"move",cn(a))},leave:function(t,n){return e.push(t,"leave",cn(n),function(){t.remove()})},addClass:function(t,n,r){r=cn(r);r.addClass=un(r.addclass,n);return e.push(t,"addClass",r)},removeClass:function(t,n,r){r=cn(r);r.removeClass=un(r.removeClass,n);return e.push(t,"removeClass",r);

},setClass:function(t,n,r,i){i=cn(i);i.addClass=un(i.addClass,n);i.removeClass=un(i.removeClass,r);return e.push(t,"setClass",i)},animate:function(t,n,r,i,a){a=cn(a);a.from=a.from?T(a.from,n):n;a.to=a.to?T(a.to,r):r;i=i||"ng-inline-animate";a.tempClasses=un(a.tempClasses,i);return e.push(t,"animate",a)}}}]}];function $n(){this.$get=["$$rAF","$timeout",function(e,t){return e.supported?function(t){return e(t)}:function(e){return t(e,0,false)}}]}function vn(e,t,n,r){var i=this,a=t[0],o=e.location,s=e.history,u=e.setTimeout,l=e.clearTimeout,f={};i.isMock=false;var c=0;var p=[];i.$$completeOutstandingRequest=d;i.$$incOutstandingRequestCount=function(){c++};function d(e){try{e.apply(null,$e(arguments,1))}finally{c--;if(c===0){while(p.length){try{p.pop()()}catch(t){n.error(t)}}}}}function $(e){var t=e.indexOf("#");return t===-1?"":e.substr(t+1)}i.notifyWhenNoOutstandingRequests=function(e){if(c===0){e()}else{p.push(e)}};var v,m,g=o.href,y=t.find("base"),b=null;A();m=v;i.url=function(t,n,a){if(R(a)){a=null}if(o!==e.location)o=e.location;if(s!==e.history)s=e.history;if(t){var u=m===a;if(g===t&&(!r.history||u)){return i}var l=g&&lr(g)===lr(t);g=t;m=a;if(r.history&&(!l||!u)){s[n?"replaceState":"pushState"](a,"",t);A();m=v}else{if(!l){b=t}if(n){o.replace(t)}else if(!l){o.href=t}else{o.hash=$(t)}}return i}else{return b||o.href.replace(/%27/g,"'")}};i.state=function(){return v};var w=[],x=false;function S(){A();O()}function E(){try{return s.state}catch(e){}}var k=null;function A(){v=E();v=R(v)?null:v;if(ce(v,k)){v=k}k=v}function O(){if(g===i.url()&&m===v){return}g=i.url();m=v;C(w,function(e){e(i.url(),v)})}i.onUrlChange=function(t){if(!x){if(r.history)h(e).on("popstate",S);h(e).on("hashchange",S);x=true}w.push(t);return t};i.$$applicationDestroyed=function(){h(e).off("hashchange popstate",S)};i.$$checkUrlChange=O;i.baseHref=function(){var e=y.attr("href");return e?e.replace(/^(https?\:)?\/\/[^\/]*/,""):""};i.defer=function(e,t){var n;c++;n=u(function(){delete f[n];d(e)},t||0);f[n]=true;return n};i.defer.cancel=function(e){if(f[e]){delete f[e];l(e);d(P);return true}return false}}function mn(){this.$get=["$window","$log","$sniffer","$document",function(e,t,n,r){return new vn(e,r,t,n)}]}function gn(){this.$get=function(){var e={};function t(t,n){if(t in e){throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",t)}var i=0,a=T({},n,{id:t}),o={},s=n&&n.capacity||Number.MAX_VALUE,u={},l=null,f=null;return e[t]={put:function(e,t){if(R(t))return;if(s<Number.MAX_VALUE){var n=u[e]||(u[e]={key:e});c(n)}if(!(e in o))i++;o[e]=t;if(i>s){this.remove(f.key)}return t},get:function(e){if(s<Number.MAX_VALUE){var t=u[e];if(!t)return;c(t)}return o[e]},remove:function(e){if(s<Number.MAX_VALUE){var t=u[e];if(!t)return;if(t==l)l=t.p;if(t==f)f=t.n;h(t.n,t.p);delete u[e]}delete o[e];i--},removeAll:function(){o={};i=0;u={};l=f=null},destroy:function(){o=null;a=null;u=null;delete e[t]},info:function(){return T({},a,{size:i})}};function c(e){if(e!=l){if(!f){f=e}else if(f==e){f=e.n}h(e.n,e.p);h(e,l);l=e;l.n=null}}function h(e,t){if(e!=t){if(e)e.p=t;if(t)t.n=e}}}t.info=function(){var t={};C(e,function(e,n){t[n]=e.info()});return t};t.get=function(t){return e[t]};return t}}function yn(){this.$get=["$cacheFactory",function(e){return e("templates")}]}var bn=r("$compile");wn.$inject=["$provide","$$sanitizeUriProvider"];function wn(e,r){var i={},a="Directive",s=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,u=/(([\w\-]+)(?:\:([^;]+))?;?)/,l=ae("ngSrc,ngSrcset,src,srcset"),f=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/;var c=/^(on[a-z]+|formaction)$/;function d(e,t,n){var r=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/;var i={};C(e,function(e,a){var o=e.match(r);if(!o){throw bn("iscp","Invalid {3} for directive '{0}'."+" Definition: {... {1}: '{2}' ...}",t,a,e,n?"controller bindings definition":"isolate scope definition")}i[a]={mode:o[1][0],collection:o[2]==="*",optional:o[3]==="?",attrName:o[4]||a}});return i}function $(e,t){var n={isolateScope:null,bindToController:null};if(q(e.scope)){if(e.bindToController===true){n.bindToController=d(e.scope,t,true);n.isolateScope={}}else{n.isolateScope=d(e.scope,t,false)}}if(q(e.bindToController)){n.bindToController=d(e.bindToController,t,true)}if(q(n.bindToController)){var r=e.controller;var i=e.controllerAs;if(!r){throw bn("noctrl","Cannot bind to controller without directive '{0}'s controller.",t)}else if(!Tn(r,i)){throw bn("noident","Cannot bind to controller without identifier for directive '{0}'.",t)}}return n}function v(e){var t=e.charAt(0);if(!t||t!==o(t)){throw bn("baddir","Directive name '{0}' is invalid. The first character must be a lowercase letter",e)}if(e!==e.trim()){throw bn("baddir","Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces",e)}}this.directive=function g(t,n){Be(t,"directive");if(F(t)){v(t);Ue(n,"directiveFactory");if(!i.hasOwnProperty(t)){i[t]=[];e.factory(t+a,["$injector","$exceptionHandler",function(e,n){var r=[];C(i[t],function(i,a){try{var o=e.invoke(i);if(z(o)){o={compile:D(o)}}else if(!o.compile&&o.link){o.compile=D(o.link)}o.priority=o.priority||0;o.index=a;o.name=o.name||t;o.require=o.require||o.controller&&o.name;o.restrict=o.restrict||"EA";var s=o.$$bindings=$(o,o.name);if(q(s.isolateScope)){o.$$isolateBindings=s.isolateScope}r.push(o)}catch(u){n(u)}});return r}])}i[t].push(n)}else{C(t,k(g))}return this};this.aHrefSanitizationWhitelist=function(e){if(_(e)){r.aHrefSanitizationWhitelist(e);return this}else{return r.aHrefSanitizationWhitelist()}};this.imgSrcSanitizationWhitelist=function(e){if(_(e)){r.imgSrcSanitizationWhitelist(e);return this}else{return r.imgSrcSanitizationWhitelist()}};var m=true;this.debugInfoEnabled=function(e){if(_(e)){m=e;return this}return m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(e,r,d,$,v,g,y,b,w,x,S){var E=function(e,t){if(t){var n=Object.keys(t);var r,i,a;for(r=0,i=n.length;r<i;r++){a=n[r];this[a]=t[a]}}else{this.$attr={}}this.$$element=e};E.prototype={$normalize:Sn,$addClass:function(e){if(e&&e.length>0){x.addClass(this.$$element,e)}},$removeClass:function(e){if(e&&e.length>0){x.removeClass(this.$$element,e)}},$updateClass:function(e,t){var n=kn(e,t);if(n&&n.length){x.addClass(this.$$element,n)}var r=kn(t,e);if(r&&r.length){x.removeClass(this.$$element,r)}},$set:function(e,t,r,i){var a=this.$$element[0],o=Bt(a,e),s=Lt(a,e),u=e,l;if(o){this.$$element.prop(e,t);i=o}else if(s){this[s]=t;u=s}this[e]=t;if(i){this.$attr[e]=i}else{i=this.$attr[e];if(!i){this.$attr[e]=i=De(e,"-")}}l=oe(this.$$element);if(l==="a"&&e==="href"||l==="img"&&e==="src"){this[e]=t=S(t,e==="src")}else if(l==="img"&&e==="srcset"){var f="";var c=ne(t);var h=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;var p=/\s/.test(c)?h:/(,)/;var $=c.split(p);var v=Math.floor($.length/2);for(var m=0;m<v;m++){var g=m*2;f+=S(ne($[g]),true);f+=" "+ne($[g+1])}var y=ne($[m*2]).split(/\s/);f+=S(ne(y[0]),true);if(y.length===2){f+=" "+ne(y[1])}this[e]=t=f}if(r!==false){if(t===null||t===n){this.$$element.removeAttr(i)}else{this.$$element.attr(i,t)}}var b=this.$$observers;b&&C(b[u],function(e){try{e(t)}catch(n){d(n)}})},$observe:function(e,t){var n=this,r=n.$$observers||(n.$$observers=ze()),i=r[e]||(r[e]=[]);i.push(t);y.$evalAsync(function(){if(!i.$$inter&&n.hasOwnProperty(e)){t(n[e])}});return function(){ue(i,t)}}};function k(e,t){try{e.addClass(t)}catch(n){}}var A=r.startSymbol(),O=r.endSymbol(),M=A=="{{"||O=="}}"?I:function pe(e){return e.replace(/\{\{/g,A).replace(/}}/g,O)},V=/^ngAttr[A-Z]/;N.$$addBindingInfo=m?function de(e,t){var n=e.data("$binding")||[];if(H(t)){n=n.concat(t)}else{n.push(t)}e.data("$binding",n)}:P;N.$$addBindingClass=m?function ve(e){k(e,"ng-binding")}:P;N.$$addScopeInfo=m?function me(e,t,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope";e.data(i,t)}:P;N.$$addScopeClass=m?function ge(e,t){k(e,t?"ng-isolate-scope":"ng-scope")}:P;return N;function N(e,t,n,r,i){if(!(e instanceof h)){e=h(e)}C(e,function(t,n){if(t.nodeType==Je&&t.nodeValue.match(/\S+/)){e[n]=h(t).wrap("<span></span>").parent()[0]}});var a=R(e,t,e,n,r,i);N.$$addScopeClass(e);var o=null;return function s(t,n,r){Ue(t,"scope");r=r||{};var i=r.parentBoundTranscludeFn,s=r.transcludeControllers,u=r.futureParentElement;if(i&&i.$$boundTransclude){i=i.$$boundTransclude}if(!o){o=D(u)}var l;if(o!=="html"){l=h(re(o,h("<div>").append(e).html()))}else if(n){l=_t.clone.call(e)}else{l=e}if(s){for(var f in s){l.data("$"+f+"Controller",s[f].instance)}}N.$$addScopeInfo(l,t);if(n)n(l,t);if(a)a(t,l,l,i);return l}}function D(e){var t=e&&e[0];if(!t){return"html"}else{return oe(t)!=="foreignobject"&&t.toString().match(/SVG/)?"svg":"html"}}function R(e,t,r,i,a,o){var s=[],u,l,f,c,p,d,$;for(var v=0;v<e.length;v++){u=new E;l=U(e[v],[],u,v===0?i:n,a);f=l.length?W(l,e[v],u,t,r,null,[],[],o):null;if(f&&f.scope){N.$$addScopeClass(u.$$element)}p=f&&f.terminal||!(c=e[v].childNodes)||!c.length?null:R(c,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:t);if(f||p){s.push(v,f,p);d=true;$=$||f}o=null}return d?m:null;function m(e,r,i,a){var o,u,l,f,c,p,d,v;var m;if($){var g=r.length;m=new Array(g);for(c=0;c<s.length;c+=3){d=s[c];m[d]=r[d]}}else{m=r}for(c=0,p=s.length;c<p;){l=m[s[c++]];o=s[c++];u=s[c++];if(o){if(o.scope){f=e.$new();N.$$addScopeInfo(h(l),f);var y=o.$$destroyBindings;if(y){o.$$destroyBindings=null;f.$on("$destroyed",y)}}else{f=e}if(o.transcludeOnThisElement){v=_(e,o.transclude,a,o.elementTranscludeOnThisElement)}else if(!o.templateOnThisElement&&a){v=a}else if(!a&&t){v=_(e,t)}else{v=null}o(u,f,l,i,v,o)}else if(u){u(e,l.childNodes,n,a)}}}}function _(e,t,n,r){var i=function(r,i,a,o,s){if(!r){r=e.$new(false,s);r.$$transcluded=true}return t(r,i,{parentBoundTranscludeFn:n,transcludeControllers:a,futureParentElement:o})};return i}function U(e,t,n,r,i){var a=e.nodeType,o=n.$attr,l,f;switch(a){case We:Y(t,Sn(oe(e)),"E",r,i);for(var c,h,p,d,$,v,m=e.attributes,g=0,y=m&&m.length;g<y;g++){var b=false;var w=false;c=m[g];h=c.name;$=ne(c.value);d=Sn(h);if(v=V.test(d)){h=h.replace(xn,"").substr(8).replace(/_(.)/g,function(e,t){return t.toUpperCase()})}var x=d.replace(/(Start|End)$/,"");if(Z(x)){if(d===x+"Start"){b=h;w=h.substr(0,h.length-5)+"end";h=h.substr(0,h.length-6)}}p=Sn(h.toLowerCase());o[p]=h;if(v||!n.hasOwnProperty(p)){n[p]=$;if(Bt(e,p)){n[p]=true}}ae(e,t,$,p,v);Y(t,p,"A",r,i,b,w)}f=e.className;if(q(f)){f=f.animVal}if(F(f)&&f!==""){while(l=u.exec(f)){p=Sn(l[2]);if(Y(t,p,"C",r,i)){n[p]=ne(l[3])}f=f.substr(l.index+l[0].length)}}break;case Je:te(t,e.nodeValue);break;case Ye:try{l=s.exec(e.nodeValue);if(l){p=Sn(l[1]);if(Y(t,p,"M",r,i)){n[p]=ne(l[2])}}}catch(S){}break}t.sort(Q);return t}function B(e,t,n){var r=[];var i=0;if(t&&e.hasAttribute&&e.hasAttribute(t)){do{if(!e){throw bn("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",t,n)}if(e.nodeType==We){if(e.hasAttribute(t))i++;if(e.hasAttribute(n))i--}r.push(e);e=e.nextSibling}while(i>0)}else{r.push(e)}return h(r)}function L(e,t,n){return function(r,i,a,o,s){i=B(i[0],t,n);return e(r,i,a,o,s)}}function W(e,r,i,a,o,s,u,l,c){c=c||{};var p=-Number.MAX_VALUE,$,v=c.controllerDirectives,m=c.newIsolateScopeDirective,y=c.templateDirective,b=c.nonTlbTranscludeDirective,w=false,x=false,S=c.hasElementTranscludeDirective,C=i.$$element=h(r),k,A,O,T=s,V=a,j,P;for(var I=0,D=e.length;I<D;I++){k=e[I];var R=k.$$start;var _=k.$$end;if(R){C=B(r,R,_)}O=n;if(p>k.priority){break}if(P=k.scope){if(!k.templateUrl){if(q(P)){ee("new/isolated scope",m||$,k,C);m=k}else{ee("new/isolated scope",m,k,C)}}$=$||k}A=k.name;if(!k.templateUrl&&k.controller){P=k.controller;v=v||ze();ee("'"+A+"' controller",v[A],k,C);v[A]=k}if(P=k.transclude){w=true;if(!k.$$tlb){ee("transclusion",b,k,C);b=k}if(P=="element"){S=true;p=k.priority;O=C;C=i.$$element=h(t.createComment(" "+A+": "+i[A]+" "));r=C[0];se(o,$e(O),r);V=N(O,a,p,T&&T.name,{nonTlbTranscludeDirective:b})}else{O=h(St(r)).contents();C.empty();V=N(O,a)}}if(k.template){x=true;ee("template",y,k,C);y=k;P=z(k.template)?k.template(C,i):k.template;P=M(P);if(k.replace){T=k;if(gt(P)){O=[]}else{O=An(re(k.templateNamespace,ne(P)))}r=O[0];if(O.length!=1||r.nodeType!==We){throw bn("tplrt","Template for directive '{0}' must have exactly one root element. {1}",A,"")}se(o,C,r);var W={$attr:{}};var Y=U(r,[],W);var Z=e.splice(I+1,e.length-(I+1));if(m){G(Y)}e=e.concat(Y).concat(Z);K(i,W);D=e.length}else{C.html(P)}}if(k.templateUrl){x=true;ee("template",y,k,C);y=k;if(k.replace){T=k}oe=X(e.splice(I,e.length-I),C,i,o,w&&V,u,l,{controllerDirectives:v,newIsolateScopeDirective:m,templateDirective:y,nonTlbTranscludeDirective:b});D=e.length}else if(k.compile){try{j=k.compile(C,i,V);if(z(j)){te(null,j,R,_)}else if(j){te(j.pre,j.post,R,_)}}catch(Q){d(Q,Se(C))}}if(k.terminal){oe.terminal=true;p=Math.max(p,k.priority)}}oe.scope=$&&$.scope===true;oe.transcludeOnThisElement=w;oe.elementTranscludeOnThisElement=S;oe.templateOnThisElement=x;oe.transclude=V;c.hasElementTranscludeDirective=S;return oe;function te(e,t,n,r){if(e){if(n)e=L(e,n,r);e.require=k.require;e.directiveName=A;if(m===k||k.$$isolateScope){e=le(e,{isolateScope:true})}u.push(e)}if(t){if(n)t=L(t,n,r);t.require=k.require;t.directiveName=A;if(m===k||k.$$isolateScope){t=le(t,{isolateScope:true})}l.push(t)}}function ie(e,t,n,r){var i;if(F(t)){var a=t.match(f);var o=t.substring(a[0].length);var s=a[1]||a[3];var u=a[2]==="?";if(s==="^^"){n=n.parent()}else{i=r&&r[o];i=i&&i.instance}if(!i){var l="$"+o+"Controller";i=s?n.inheritedData(l):n.data(l)}if(!i&&!u){throw bn("ctreq","Controller '{0}', required by directive '{1}', can't be found!",o,e)}}else if(H(t)){i=[];for(var c=0,h=t.length;c<h;c++){i[c]=ie(e,t[c],n,r)}}return i||null}function ae(e,t,n,r,i,a){var o=ze();for(var s in r){var u=r[s];var l={$scope:u===m||u.$$isolateScope?i:a,$element:e,$attrs:t,$transclude:n};var f=u.controller;if(f=="@"){f=t[u.name]}var c=g(f,l,true,u.controllerAs);o[u.name]=c;if(!S){e.data("$"+u.name+"Controller",c.instance)}}return o}function oe(e,t,a,o,s,f){var c,p,d,g,b,w,x,C,A;if(r===a){A=i;C=i.$$element}else{C=h(a);A=new E(C,i)}if(m){b=t.$new(true)}if(s){x=P;x.$$boundTransclude=s}if(v){w=ae(C,A,x,v,b,t)}if(m){N.$$addScopeInfo(C,b,true,!(y&&(y===m||y===m.$$originalDirective)));N.$$addScopeClass(C,true);b.$$isolateBindings=m.$$isolateBindings;he(t,A,b,b.$$isolateBindings,m,b)}if(w){var O=m||$;var M;var T;if(O&&w[O.name]){M=O.$$bindings.bindToController;g=w[O.name];if(g&&g.identifier&&M){T=g;f.$$destroyBindings=he(t,A,g.instance,M,O)}}for(c in w){g=w[c];var V=g();if(V!==g.instance){g.instance=V;C.data("$"+k.name+"Controller",V);if(g===T){f.$$destroyBindings();f.$$destroyBindings=he(t,A,V,M,O)}}}}for(c=0,p=u.length;c<p;c++){d=u[c];fe(d,d.isolateScope?b:t,C,A,d.require&&ie(d.directiveName,d.require,C,w),x)}var j=t;if(m&&(m.template||m.templateUrl===null)){j=b}e&&e(j,a.childNodes,n,s);for(c=l.length-1;c>=0;c--){d=l[c];fe(d,d.isolateScope?b:t,C,A,d.require&&ie(d.directiveName,d.require,C,w),x)}function P(e,t,r){var i;if(!J(e)){r=t;t=e;e=n}if(S){i=w}if(!r){r=S?C.parent():C}return s(e,t,i,r,j)}}}function G(e){for(var t=0,n=e.length;t<n;t++){e[t]=j(e[t],{$$isolateScope:true})}}function Y(t,r,o,s,u,l,f){if(r===u)return null;var c=null;if(i.hasOwnProperty(r)){for(var h,p=e.get(r+a),$=0,v=p.length;$<v;$++){try{h=p[$];if((s===n||s>h.priority)&&h.restrict.indexOf(o)!=-1){if(l){h=j(h,{$$start:l,$$end:f})}t.push(h);c=h}}catch(m){d(m)}}}return c}function Z(t){if(i.hasOwnProperty(t)){for(var n,r=e.get(t+a),o=0,s=r.length;o<s;o++){n=r[o];if(n.multiElement){return true}}}return false}function K(e,t){var n=t.$attr,r=e.$attr,i=e.$$element;C(e,function(r,i){if(i.charAt(0)!="$"){if(t[i]&&t[i]!==r){r+=(i==="style"?";":" ")+t[i]}e.$set(i,r,true,n[i])}});C(t,function(t,a){if(a=="class"){k(i,t);e["class"]=(e["class"]?e["class"]+" ":"")+t}else if(a=="style"){i.attr("style",i.attr("style")+";"+t);e["style"]=(e["style"]?e["style"]+";":"")+t}else if(a.charAt(0)!="$"&&!e.hasOwnProperty(a)){e[a]=t;r[a]=n[a]}})}function X(e,t,n,r,i,a,o,s){var u=[],l,f,c=t[0],p=e.shift(),d=j(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),v=z(p.templateUrl)?p.templateUrl(t,n):p.templateUrl,m=p.templateNamespace;t.empty();$(w.getTrustedResourceUrl(v)).then(function($){var g,y,b,w;$=M($);if(p.replace){if(gt($)){b=[]}else{b=An(re(m,ne($)))}g=b[0];if(b.length!=1||g.nodeType!==We){throw bn("tplrt","Template for directive '{0}' must have exactly one root element. {1}",p.name,v)}y={$attr:{}};se(r,t,g);var x=U(g,[],y);if(q(p.scope)){G(x)}e=x.concat(e);K(n,y)}else{g=c;t.html($)}e.unshift(d);l=W(e,g,n,i,t,p,a,o,s);C(r,function(e,n){if(e==g){r[n]=t[0]}});f=R(t[0].childNodes,i);while(u.length){var S=u.shift(),E=u.shift(),A=u.shift(),O=u.shift(),T=t[0];if(S.$$destroyed)continue;if(E!==c){var V=E.className;if(!(s.hasElementTranscludeDirective&&p.replace)){T=St(g)}se(A,h(E),T);k(h(T),V)}if(l.transcludeOnThisElement){w=_(S,l.transclude,O)}else{w=O}l(f,S,T,r,w,l)}u=null});return function g(e,t,n,r,i){var a=i;if(t.$$destroyed)return;if(u){u.push(t,n,r,a)}else{if(l.transcludeOnThisElement){a=_(t,l.transclude,i)}l(f,t,n,r,a,l)}}}function Q(e,t){var n=t.priority-e.priority;if(n!==0)return n;if(e.name!==t.name)return e.name<t.name?-1:1;return e.index-t.index}function ee(e,t,n,r){if(t){throw bn("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",t.name,n.name,e,Se(r))}}function te(e,t){var n=r(t,true);if(n){e.push({priority:0,compile:function i(e){var t=e.parent(),r=!!t.length;if(r)N.$$addBindingClass(t);return function i(e,t){var i=t.parent();if(!r)N.$$addBindingClass(i);N.$$addBindingInfo(i,n.expressions);e.$watch(n,function a(e){t[0].nodeValue=e})}}})}}function re(e,n){e=o(e||"html");switch(e){case"svg":case"math":var r=t.createElement("div");r.innerHTML="<"+e+">"+n+"</"+e+">";return r.childNodes[0].childNodes;default:return n}}function ie(e,t){if(t=="srcdoc"){return w.HTML}var n=oe(e);if(t=="xlinkHref"||n=="form"&&t=="action"||n!="img"&&(t=="src"||t=="ngSrc")){return w.RESOURCE_URL}}function ae(e,t,n,i,a){var o=ie(e,i);a=l[i]||a;var s=r(n,true,o,a);if(!s)return;if(i==="multiple"&&oe(e)==="select"){throw bn("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",Se(e))}t.push({priority:100,compile:function(){return{pre:function e(t,u,l){var f=l.$$observers||(l.$$observers={});if(c.test(i)){throw bn("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the "+"ng- versions (such as ng-click instead of onclick) instead.")}var h=l[i];if(h!==n){s=h&&r(h,true,o,a);n=h}if(!s)return;l[i]=s(t);(f[i]||(f[i]=[])).$$inter=true;(l.$$observers&&l.$$observers[i].$$scope||t).$watch(s,function p(e,t){if(i==="class"&&e!=t){l.$updateClass(e,t)}else{l.$set(i,e)}})}}}})}function se(e,n,r){var i=n[0],a=n.length,o=i.parentNode,s,u;if(e){for(s=0,u=e.length;s<u;s++){if(e[s]==i){e[s++]=r;for(var l=s,f=l+a-1,c=e.length;l<c;l++,f++){if(f<c){e[l]=e[f]}else{delete e[l]}}e.length-=a-1;if(e.context===i){e.context=r}break}}}if(o){o.replaceChild(r,i)}var d=t.createDocumentFragment();d.appendChild(i);h(r).data(h(i).data());if(!p){delete h.cache[i[h.expando]]}else{_e=true;p.cleanData([i])}for(var $=1,v=n.length;$<v;$++){var m=n[$];h(m).remove();d.appendChild(m);delete n[$]}n[0]=r;n.length=1}function le(e,t){return T(function(){return e.apply(null,arguments)},e,t)}function fe(e,t,n,r,i,a){try{e(t,n,r,i,a)}catch(o){d(o,Se(n))}}function he(e,t,n,i,a,o){var s;C(i,function(i,o){var u=i.attrName,l=i.optional,f=i.mode,c,h,p,d;switch(f){case"@":t.$observe(u,function(e){n[o]=e});t.$$observers[u].$$scope=e;if(t[u]){n[o]=r(t[u])(e)}break;case"=":if(l&&!t[u]){return}h=v(t[u]);if(h.literal){d=ce}else{d=function(e,t){return e===t||e!==e&&t!==t}}p=h.assign||function(){c=n[o]=h(e);throw bn("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",t[u],a.name)};c=n[o]=h(e);var $=function g(t){if(!d(t,n[o])){if(!d(t,c)){n[o]=t}else{p(e,t=n[o])}}return c=t};$.$stateful=true;var m;if(i.collection){m=e.$watchCollection(t[u],$)}else{m=e.$watch(v(t[u],$),null,h.literal)}s=s||[];s.push(m);break;case"&":if(!t.hasOwnProperty(u)&&l)break;h=v(t[u]);if(h===P&&l)break;n[o]=function(t){return h(e,t)};break}});var u=s?function l(){for(var e=0,t=s.length;e<t;++e){s[e]()}}:P;if(o&&u!==P){o.$on("$destroy",u);return P}return u}}]}var xn=/^((?:x|data)[\:\-_])/i;function Sn(e){return ht(e.replace(xn,""))}function Cn(e,t,n,r){}function En(e,t,n,r,i){}function kn(e,t){var n="",r=e.split(/\s+/),i=t.split(/\s+/);e:for(var a=0;a<r.length;a++){var o=r[a];for(var s=0;s<i.length;s++){if(o==i[s])continue e}n+=(n.length>0?" ":"")+o}return n}function An(e){e=h(e);var t=e.length;if(t<=1){return e}while(t--){var n=e[t];if(n.nodeType===Ye){$.call(e,t,1)}}return e}var On=r("$controller");var Mn=/^(\S+)(\s+as\s+(\w+))?$/;function Tn(e,t){if(t&&F(t))return t;if(F(e)){var n=Mn.exec(e);if(n)return n[3]}}function Vn(){var e={},t=false;this.register=function(t,n){Be(t,"controller");if(q(t)){T(e,t)}else{e[t]=n}};this.allowGlobals=function(){t=true};this.$get=["$injector","$window",function(i,a){return function(r,s,u,l){var f,c,h,p;u=u===true;if(l&&F(l)){p=l}if(F(r)){c=r.match(Mn);if(!c){throw On("ctrlfmt","Badly formed controller string '{0}'. "+"Must match `__name__ as __id__` or `__name__`.",r)}h=c[1],p=p||c[3];r=e.hasOwnProperty(h)?e[h]:Le(s.$scope,h,true)||(t?Le(a,h,true):n);Fe(r,h,true)}if(u){var d=(H(r)?r[r.length-1]:r).prototype;f=Object.create(d||null);if(p){o(s,p,f,h||r.name)}var $;return $=T(function(){var e=i.invoke(r,f,s,h);if(e!==f&&(q(e)||z(e))){f=e;if(p){o(s,p,f,h||r.name)}}return f},{instance:f,identifier:p})}f=i.instantiate(r,s,h);if(p){o(s,p,f,h||r.name)}return f};function o(e,t,n,i){if(!(e&&q(e.$scope))){throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,t)}e.$scope[t]=n}}]}function Nn(){this.$get=["$window",function(e){return h(e.document)}]}function jn(){this.$get=["$log",function(e){return function(t,n){e.error.apply(e,arguments)}}]}var Pn="application/json";var In={"Content-Type":Pn+";charset=utf-8"};var Dn=/^\[|^\{(?!\{)/;var Rn={"[":/]$/,"{":/}$/};var _n=/^\)\]\}',?\n/;function qn(e){if(q(e)){return L(e)?e.toISOString():ge(e)}return e}function Un(){this.$get=function(){return function e(t){if(!t)return"";var n=[];E(t,function(e,t){if(e===null||R(e))return;if(H(e)){C(e,function(e,r){n.push(Oe(t)+"="+Oe(qn(e)))})}else{n.push(Oe(t)+"="+Oe(qn(e)))}});return n.join("&")}}}function Fn(){this.$get=function(){return function e(t){if(!t)return"";var n=[];r(t,"",true);return n.join("&");function r(e,t,i){if(e===null||R(e))return;if(H(e)){C(e,function(e){r(e,t+"[]")})}else if(q(e)&&!L(e)){E(e,function(e,n){r(e,t+(i?"":"[")+n+(i?"":"]"))})}else{n.push(Oe(t)+"="+Oe(qn(e)))}}}}}function Bn(e,t){if(F(e)){var n=e.replace(_n,"").trim();if(n){var r=t("Content-Type");if(r&&r.indexOf(Pn)===0||Ln(n)){e=ye(n)}}}return e}function Ln(e){var t=e.match(Dn);return t&&Rn[t[0]].test(e)}function Hn(e){var t=ze(),n;function r(e,n){if(e){t[e]=t[e]?t[e]+", "+n:n}}if(F(e)){C(e.split("\n"),function(e){n=e.indexOf(":");r(o(ne(e.substr(0,n))),ne(e.substr(n+1)))})}else if(q(e)){C(e,function(e,t){r(o(t),ne(e))})}return t}function zn(e){var t;return function(n){if(!t)t=Hn(e);if(n){var r=t[o(n)];if(r===void 0){r=null}return r}return t}}function Wn(e,t,n,r){if(z(r)){return r(e,t,n)}C(r,function(r){e=r(e,t,n)});return e}function Gn(e){return 200<=e&&e<300}function Jn(){var e=this.defaults={transformResponse:[Bn],transformRequest:[function(e){return q(e)&&!Y(e)&&!K(e)&&!Z(e)?ge(e):e}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fe(In),put:fe(In),patch:fe(In)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"};var t=false;this.useApplyAsync=function(e){if(_(e)){t=!!e;return this}return t};var i=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(a,s,l,f,c,h){var p=l("$http");e.paramSerializer=F(e.paramSerializer)?h.get(e.paramSerializer):e.paramSerializer;var d=[];C(i,function(e){d.unshift(F(e)?h.get(e):h.invoke(e))});function $(t){if(!b.isObject(t)){throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",t)}var i=T({method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse,paramSerializer:e.paramSerializer},t);i.headers=m(t);i.method=u(i.method);i.paramSerializer=F(i.paramSerializer)?h.get(i.paramSerializer):i.paramSerializer;var a=function(t){var r=t.headers;var i=Wn(t.data,zn(r),n,t.transformRequest);if(R(i)){C(r,function(e,t){if(o(t)==="content-type"){delete r[t]}})}if(R(t.withCredentials)&&!R(e.withCredentials)){t.withCredentials=e.withCredentials}return g(t,i).then($,$)};var s=[a,n];var l=c.when(i);C(d,function(e){if(e.request||e.requestError){s.unshift(e.request,e.requestError)}if(e.response||e.responseError){s.push(e.response,e.responseError)}});while(s.length){var f=s.shift();var p=s.shift();l=l.then(f,p)}l.success=function(e){Fe(e,"fn");l.then(function(t){e(t.data,t.status,t.headers,i)});return l};l.error=function(e){Fe(e,"fn");l.then(null,function(t){e(t.data,t.status,t.headers,i)});return l};return l;function $(e){var t=T({},e);if(!e.data){t.data=e.data}else{t.data=Wn(e.data,e.headers,e.status,i.transformResponse)}return Gn(e.status)?t:c.reject(t)}function v(e,t){var n,r={};C(e,function(e,i){if(z(e)){n=e(t);if(n!=null){r[i]=n}}else{r[i]=e}});return r}function m(t){var n=e.headers,r=T({},t.headers),i,a,s;n=T({},n.common,n[o(t.method)]);e:for(i in n){a=o(i);for(s in r){if(o(s)===a){continue e}}r[i]=n[i]}return v(r,fe(t))}}$.pendingRequests=[];v("get","delete","head","jsonp");m("post","put","patch");$.defaults=e;return $;function v(e){C(arguments,function(e){$[e]=function(t,n){return $(T({},n||{},{method:e,url:t}))}})}function m(e){C(arguments,function(e){$[e]=function(t,n,r){return $(T({},r||{},{method:e,url:t,data:n}))}})}function g(r,i){var o=c.defer(),u=o.promise,l,h,d=r.headers,v=y(r.url,r.paramSerializer(r.params));$.pendingRequests.push(r);u.then(x,x);if((r.cache||e.cache)&&r.cache!==false&&(r.method==="GET"||r.method==="JSONP")){l=q(r.cache)?r.cache:q(e.cache)?e.cache:p}if(l){h=l.get(v);if(_(h)){if(Q(h)){h.then(w,w)}else{if(H(h)){b(h[1],h[0],fe(h[2]),h[3])}else{b(h,200,{},"OK")}}}else{l.put(v,u)}}if(R(h)){var m=vi(r.url)?s()[r.xsrfCookieName||e.xsrfCookieName]:n;if(m){d[r.xsrfHeaderName||e.xsrfHeaderName]=m}a(r.method,v,i,g,d,r.timeout,r.withCredentials,r.responseType)}return u;function g(e,n,r,i){if(l){if(Gn(e)){l.put(v,[e,n,Hn(r),i])}else{l.remove(v)}}function a(){b(n,e,r,i)}if(t){f.$applyAsync(a)}else{a();if(!f.$$phase)f.$apply()}}function b(e,t,n,i){t=Math.max(t,0);(Gn(t)?o.resolve:o.reject)({data:e,status:t,headers:zn(n),config:r,statusText:i})}function w(e){b(e.data,e.status,fe(e.headers()),e.statusText)}function x(){var e=$.pendingRequests.indexOf(r);if(e!==-1)$.pendingRequests.splice(e,1)}}function y(e,t){if(t.length>0){e+=(e.indexOf("?")==-1?"?":"&")+t}return e}}]}function Yn(){return new e.XMLHttpRequest}function Zn(){this.$get=["$browser","$window","$document",function(e,t,n){return Kn(e,Yn,e.defer,t.angular.callbacks,n[0])}]}function Kn(e,t,r,i,a){return function(a,u,l,f,c,h,p,d){e.$$incOutstandingRequestCount();u=u||e.url();if(o(a)=="jsonp"){var $="_"+(i.counter++).toString(36);i[$]=function(e){i[$].data=e;i[$].called=true};var v=s(u.replace("JSON_CALLBACK","angular.callbacks."+$),$,function(e,t){x(f,e,i[$].data,"",t);i[$]=P})}else{var m=t();m.open(a,u,true);C(c,function(e,t){if(_(e)){m.setRequestHeader(t,e)}});m.onload=function S(){var e=m.statusText||"";var t="response"in m?m.response:m.responseText;var n=m.status===1223?204:m.status;if(n===0){n=t?200:$i(u).protocol=="file"?404:0}x(f,n,t,m.getAllResponseHeaders(),e)};var g=function(){x(f,-1,null,null,"")};m.onerror=g;m.onabort=g;if(p){m.withCredentials=true}if(d){try{m.responseType=d}catch(y){if(d!=="json"){throw y}}}m.send(l)}if(h>0){var b=r(w,h)}else if(Q(h)){h.then(w)}function w(){v&&v();m&&m.abort()}function x(t,i,a,o,s){if(b!==n){r.cancel(b)}v=m=null;t(i,a,o,s);e.$$completeOutstandingRequest(P)}};function s(e,t,n){var r=a.createElement("script"),o=null;r.type="text/javascript";r.src=e;r.async=true;o=function(e){ot(r,"load",o);ot(r,"error",o);a.body.removeChild(r);r=null;var s=-1;var u="unknown";if(e){if(e.type==="load"&&!i[t].called){e={type:"error"}}u=e.type;s=e.type==="error"?404:200}if(n){n(s,u)}};at(r,"load",o);at(r,"error",o);a.body.appendChild(r);return o}}var Xn=b.$interpolateMinErr=r("$interpolate");Xn.throwNoconcat=function(e){throw Xn("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows "+"interpolations that concatenate multiple expressions when a trusted value is "+"required.  See http://docs.angularjs.org/api/ng.$sce",e)};Xn.interr=function(e,t){return Xn("interr","Can't interpolate: {0}\n{1}",e,t.toString())};function Qn(){var e="{{";var t="}}";this.startSymbol=function(t){if(t){e=t;return this}else{return e}};this.endSymbol=function(e){if(e){t=e;return this}else{return t}};this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){var a=e.length,o=t.length,s=new RegExp(e.replace(/./g,l),"g"),u=new RegExp(t.replace(/./g,l),"g");function l(e){return"\\\\\\"+e}function f(n){return n.replace(s,e).replace(u,t)}function c(e){if(e==null){return""}switch(typeof e){case"string":break;case"number":e=""+e;break;default:e=ge(e)}return e}function h(s,u,l,h){h=!!h;var p,d,$=0,v=[],m=[],g=s.length,y,b=[],w=[];while($<g){if((p=s.indexOf(e,$))!=-1&&(d=s.indexOf(t,p+a))!=-1){if($!==p){b.push(f(s.substring($,p)))}y=s.substring(p+a,d);v.push(y);m.push(n(y,C));$=d+o;w.push(b.length);b.push("")}else{if($!==g){b.push(f(s.substring($)))}break}}if(l&&b.length>1){Xn.throwNoconcat(s)}if(!u||v.length){var x=function(e){for(var t=0,n=v.length;t<n;t++){if(h&&R(e[t]))return;b[w[t]]=e[t]}return b.join("")};var S=function(e){return l?i.getTrusted(l,e):i.valueOf(e)};return T(function E(e){var t=0;var n=v.length;var i=new Array(n);try{for(;t<n;t++){i[t]=m[t](e)}return x(i)}catch(a){r(Xn.interr(s,a))}},{exp:s,expressions:v,$$watchDelegate:function(e,t){var n;return e.$watchGroup(m,function r(i,a){var o=x(i);if(z(t)){t.call(this,o,i!==a?n:o,e)}n=o})}})}function C(e){try{e=S(e);return h&&!_(e)?e:c(e)}catch(t){r(Xn.interr(s,t))}}}h.startSymbol=function(){return e};h.endSymbol=function(){return t};return h}]}function er(){this.$get=["$rootScope","$window","$q","$$q",function(e,t,n,r){var i={};function a(a,o,s,u){var l=arguments.length>4,f=l?$e(arguments,4):[],c=t.setInterval,h=t.clearInterval,p=0,d=_(u)&&!u,$=(d?r:n).defer(),v=$.promise;s=_(s)?s:0;v.then(null,null,!l?a:function(){a.apply(null,f)});v.$$intervalId=c(function m(){$.notify(p++);if(s>0&&p>=s){$.resolve(p);h(v.$$intervalId);delete i[v.$$intervalId]}if(!d)e.$apply()},o);i[v.$$intervalId]=$;return v}a.cancel=function(e){if(e&&e.$$intervalId in i){i[e.$$intervalId].reject("canceled");t.clearInterval(e.$$intervalId);delete i[e.$$intervalId];return true}return false};return a}]}function tr(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(e){if(e===1){return"one"}return"other"}}}}var nr=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,rr={
http:80,https:443,ftp:21};var ir=r("$location");function ar(e){var t=e.split("/"),n=t.length;while(n--){t[n]=Ae(t[n])}return t.join("/")}function or(e,t){var n=$i(e);t.$$protocol=n.protocol;t.$$host=n.hostname;t.$$port=N(n.port)||rr[n.protocol]||null}function sr(e,t){var n=e.charAt(0)!=="/";if(n){e="/"+e}var r=$i(e);t.$$path=decodeURIComponent(n&&r.pathname.charAt(0)==="/"?r.pathname.substring(1):r.pathname);t.$$search=Ee(r.search);t.$$hash=decodeURIComponent(r.hash);if(t.$$path&&t.$$path.charAt(0)!="/"){t.$$path="/"+t.$$path}}function ur(e,t){if(t.indexOf(e)===0){return t.substr(e.length)}}function lr(e){var t=e.indexOf("#");return t==-1?e:e.substr(0,t)}function fr(e){return e.replace(/(#.+)|#$/,"$1")}function cr(e){return e.substr(0,lr(e).lastIndexOf("/")+1)}function hr(e){return e.substring(0,e.indexOf("/",e.indexOf("//")+2))}function pr(e,t){this.$$html5=true;t=t||"";var r=cr(e);or(e,this);this.$$parse=function(e){var t=ur(r,e);if(!F(t)){throw ir("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,r)}sr(t,this);if(!this.$$path){this.$$path="/"}this.$$compose()};this.$$compose=function(){var e=ke(this.$$search),t=this.$$hash?"#"+Ae(this.$$hash):"";this.$$url=ar(this.$$path)+(e?"?"+e:"")+t;this.$$absUrl=r+this.$$url.substr(1)};this.$$parseLinkUrl=function(i,a){if(a&&a[0]==="#"){this.hash(a.slice(1));return true}var o,s;var u;if((o=ur(e,i))!==n){s=o;if((o=ur(t,o))!==n){u=r+(ur("/",o)||o)}else{u=e+s}}else if((o=ur(r,i))!==n){u=r+o}else if(r==i+"/"){u=r}if(u){this.$$parse(u)}return!!u}}function dr(e,t){var n=cr(e);or(e,this);this.$$parse=function(r){var i=ur(e,r)||ur(n,r);var a;if(i.charAt(0)==="#"){a=ur(t,i);if(R(a)){a=i}}else{a=this.$$html5?i:""}sr(a,this);this.$$path=o(this.$$path,a,e);this.$$compose();function o(e,t,n){var r=/^\/[A-Z]:(\/.*)/;var i;if(t.indexOf(n)===0){t=t.replace(n,"")}if(r.exec(t)){return e}i=r.exec(e);return i?i[1]:e}};this.$$compose=function(){var n=ke(this.$$search),r=this.$$hash?"#"+Ae(this.$$hash):"";this.$$url=ar(this.$$path)+(n?"?"+n:"")+r;this.$$absUrl=e+(this.$$url?t+this.$$url:"")};this.$$parseLinkUrl=function(t,n){if(lr(e)==lr(t)){this.$$parse(t);return true}return false}}function $r(e,t){this.$$html5=true;dr.apply(this,arguments);var n=cr(e);this.$$parseLinkUrl=function(r,i){if(i&&i[0]==="#"){this.hash(i.slice(1));return true}var a;var o;if(e==lr(r)){a=r}else if(o=ur(n,r)){a=e+t+o}else if(n===r+"/"){a=n}if(a){this.$$parse(a)}return!!a};this.$$compose=function(){var n=ke(this.$$search),r=this.$$hash?"#"+Ae(this.$$hash):"";this.$$url=ar(this.$$path)+(n?"?"+n:"")+r;this.$$absUrl=e+t+this.$$url}}var vr={$$html5:false,$$replace:false,absUrl:mr("$$absUrl"),url:function(e){if(R(e)){return this.$$url}var t=nr.exec(e);if(t[1]||e==="")this.path(decodeURIComponent(t[1]));if(t[2]||t[1]||e==="")this.search(t[3]||"");this.hash(t[5]||"");return this},protocol:mr("$$protocol"),host:mr("$$host"),port:mr("$$port"),path:gr("$$path",function(e){e=e!==null?e.toString():"";return e.charAt(0)=="/"?e:"/"+e}),search:function(e,t){switch(arguments.length){case 0:return this.$$search;case 1:if(F(e)||B(e)){e=e.toString();this.$$search=Ee(e)}else if(q(e)){e=le(e,{});C(e,function(t,n){if(t==null)delete e[n]});this.$$search=e}else{throw ir("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")}break;default:if(R(t)||t===null){delete this.$$search[e]}else{this.$$search[e]=t}}this.$$compose();return this},hash:gr("$$hash",function(e){return e!==null?e.toString():""}),replace:function(){this.$$replace=true;return this}};C([$r,dr,pr],function(e){e.prototype=Object.create(vr);e.prototype.state=function(t){if(!arguments.length){return this.$$state}if(e!==pr||!this.$$html5){throw ir("nostate","History API state support is available only "+"in HTML5 mode and only in browsers supporting HTML5 History API")}this.$$state=R(t)?null:t;return this}});function mr(e){return function(){return this[e]}}function gr(e,t){return function(n){if(R(n)){return this[e]}this[e]=t(n);this.$$compose();return this}}function yr(){var e="",t={enabled:false,requireBase:true,rewriteLinks:true};this.hashPrefix=function(t){if(_(t)){e=t;return this}else{return e}};this.html5Mode=function(e){if(X(e)){t.enabled=e;return this}else if(q(e)){if(X(e.enabled)){t.enabled=e.enabled}if(X(e.requireBase)){t.requireBase=e.requireBase}if(X(e.rewriteLinks)){t.rewriteLinks=e.rewriteLinks}return this}else{return t}};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,a,o){var s,u,l=r.baseHref(),f=r.url(),c;if(t.enabled){if(!l&&t.requireBase){throw ir("nobase","$location in HTML5 mode requires a <base> tag to be present!")}c=hr(f)+(l||"/");u=i.history?pr:$r}else{c=lr(f);u=dr}s=new u(c,"#"+e);s.$$parseLinkUrl(f,f);s.$$state=r.state();var p=/^\s*(javascript|mailto):/i;function d(e,t,n){var i=s.url();var a=s.$$state;try{r.url(e,t,n);s.$$state=r.state()}catch(o){s.url(i);s.$$state=a;throw o}}a.on("click",function(e){if(!t.rewriteLinks||e.ctrlKey||e.metaKey||e.shiftKey||e.which==2||e.button==2)return;var i=h(e.target);while(oe(i[0])!=="a"){if(i[0]===a[0]||!(i=i.parent())[0])return}var u=i.prop("href");var l=i.attr("href")||i.attr("xlink:href");if(q(u)&&u.toString()==="[object SVGAnimatedString]"){u=$i(u.animVal).href}if(p.test(u))return;if(u&&!i.attr("target")&&!e.isDefaultPrevented()){if(s.$$parseLinkUrl(u,l)){e.preventDefault();if(s.absUrl()!=r.url()){n.$apply();o.angular["ff-684208-preventDefault"]=true}}}});if(fr(s.absUrl())!=fr(f)){r.url(s.absUrl(),true)}var $=true;r.onUrlChange(function(e,t){n.$evalAsync(function(){var r=s.absUrl();var i=s.$$state;var a;s.$$parse(e);s.$$state=t;a=n.$broadcast("$locationChangeStart",e,r,t,i).defaultPrevented;if(s.absUrl()!==e)return;if(a){s.$$parse(r);s.$$state=i;d(r,false,i)}else{$=false;v(r,i)}});if(!n.$$phase)n.$digest()});n.$watch(function m(){var e=fr(r.url());var t=fr(s.absUrl());var a=r.state();var o=s.$$replace;var u=e!==t||s.$$html5&&i.history&&a!==s.$$state;if($||u){$=false;n.$evalAsync(function(){var t=s.absUrl();var r=n.$broadcast("$locationChangeStart",t,e,s.$$state,a).defaultPrevented;if(s.absUrl()!==t)return;if(r){s.$$parse(e);s.$$state=a}else{if(u){d(t,o,a===s.$$state?null:s.$$state)}v(e,a)}})}s.$$replace=false});return s;function v(e,t){n.$broadcast("$locationChangeSuccess",s.absUrl(),e,s.$$state,t)}}]}function br(){var e=true,t=this;this.debugEnabled=function(t){if(_(t)){e=t;return this}else{return e}};this.$get=["$window",function(n){return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug");return function(){if(e){n.apply(t,arguments)}}}()};function r(e){if(e instanceof Error){if(e.stack){e=e.message&&e.stack.indexOf(e.message)===-1?"Error: "+e.message+"\n"+e.stack:e.stack}else if(e.sourceURL){e=e.message+"\n"+e.sourceURL+":"+e.line}}return e}function i(e){var t=n.console||{},i=t[e]||t.log||P,a=false;try{a=!!i.apply}catch(o){}if(a){return function(){var e=[];C(arguments,function(t){e.push(r(t))});return i.apply(t,e)}}return function(e,t){i(e,t==null?"":t)}}}]}var wr=r("$parse");function xr(e,t){if(e==="__defineGetter__"||e==="__defineSetter__"||e==="__lookupGetter__"||e==="__lookupSetter__"||e==="__proto__"){throw wr("isecfld","Attempting to access a disallowed field in Angular expressions! "+"Expression: {0}",t)}return e}function Sr(e,t){if(e){if(e.constructor===e){throw wr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t)}else if(e.window===e){throw wr("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",t)}else if(e.children&&(e.nodeName||e.prop&&e.attr&&e.find)){throw wr("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",t)}else if(e===Object){throw wr("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",t)}}return e}var Cr=Function.prototype.call;var Er=Function.prototype.apply;var kr=Function.prototype.bind;function Ar(e,t){if(e){if(e.constructor===e){throw wr("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t)}else if(e===Cr||e===Er||e===kr){throw wr("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",t)}}}var Or=ze();C("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(e){Or[e]=true});var Mr={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'};var Tr=function(e){this.options=e};Tr.prototype={constructor:Tr,lex:function(e){this.text=e;this.index=0;this.tokens=[];while(this.index<this.text.length){var t=this.text.charAt(this.index);if(t==='"'||t==="'"){this.readString(t)}else if(this.isNumber(t)||t==="."&&this.isNumber(this.peek())){this.readNumber()}else if(this.isIdent(t)){this.readIdent()}else if(this.is(t,"(){}[].,;:?")){this.tokens.push({index:this.index,text:t});this.index++}else if(this.isWhitespace(t)){this.index++}else{var n=t+this.peek();var r=n+this.peek(2);var i=Or[t];var a=Or[n];var o=Or[r];if(i||a||o){var s=o?r:a?n:t;this.tokens.push({index:this.index,text:s,operator:true});this.index+=s.length}else{this.throwError("Unexpected next character ",this.index,this.index+1)}}}return this.tokens},is:function(e,t){return t.indexOf(e)!==-1},peek:function(e){var t=e||1;return this.index+t<this.text.length?this.text.charAt(this.index+t):false},isNumber:function(e){return"0"<=e&&e<="9"&&typeof e==="string"},isWhitespace:function(e){return e===" "||e==="\r"||e==="	"||e==="\n"||e===""||e===" "},isIdent:function(e){return"a"<=e&&e<="z"||"A"<=e&&e<="Z"||"_"===e||e==="$"},isExpOperator:function(e){return e==="-"||e==="+"||this.isNumber(e)},throwError:function(e,t,n){n=n||this.index;var r=_(t)?"s "+t+"-"+this.index+" ["+this.text.substring(t,n)+"]":" "+n;throw wr("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",e,r,this.text)},readNumber:function(){var e="";var t=this.index;while(this.index<this.text.length){var n=o(this.text.charAt(this.index));if(n=="."||this.isNumber(n)){e+=n}else{var r=this.peek();if(n=="e"&&this.isExpOperator(r)){e+=n}else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&e.charAt(e.length-1)=="e"){e+=n}else if(this.isExpOperator(n)&&(!r||!this.isNumber(r))&&e.charAt(e.length-1)=="e"){this.throwError("Invalid exponent")}else{break}}this.index++}this.tokens.push({index:t,text:e,constant:true,value:Number(e)})},readIdent:function(){var e=this.index;while(this.index<this.text.length){var t=this.text.charAt(this.index);if(!(this.isIdent(t)||this.isNumber(t))){break}this.index++}this.tokens.push({index:e,text:this.text.slice(e,this.index),identifier:true})},readString:function(e){var t=this.index;this.index++;var n="";var r=e;var i=false;while(this.index<this.text.length){var a=this.text.charAt(this.index);r+=a;if(i){if(a==="u"){var o=this.text.substring(this.index+1,this.index+5);if(!o.match(/[\da-f]{4}/i)){this.throwError("Invalid unicode escape [\\u"+o+"]")}this.index+=4;n+=String.fromCharCode(parseInt(o,16))}else{var s=Mr[a];n=n+(s||a)}i=false}else if(a==="\\"){i=true}else if(a===e){this.index++;this.tokens.push({index:t,text:r,constant:true,value:n});return}else{n+=a}this.index++}this.throwError("Unterminated quote",t)}};var Vr=function(e,t){this.lexer=e;this.options=t};Vr.Program="Program";Vr.ExpressionStatement="ExpressionStatement";Vr.AssignmentExpression="AssignmentExpression";Vr.ConditionalExpression="ConditionalExpression";Vr.LogicalExpression="LogicalExpression";Vr.BinaryExpression="BinaryExpression";Vr.UnaryExpression="UnaryExpression";Vr.CallExpression="CallExpression";Vr.MemberExpression="MemberExpression";Vr.Identifier="Identifier";Vr.Literal="Literal";Vr.ArrayExpression="ArrayExpression";Vr.Property="Property";Vr.ObjectExpression="ObjectExpression";Vr.ThisExpression="ThisExpression";Vr.NGValueParameter="NGValueParameter";Vr.prototype={ast:function(e){this.text=e;this.tokens=this.lexer.lex(e);var t=this.program();if(this.tokens.length!==0){this.throwError("is an unexpected token",this.tokens[0])}return t},program:function(){var e=[];while(true){if(this.tokens.length>0&&!this.peek("}",")",";","]"))e.push(this.expressionStatement());if(!this.expect(";")){return{type:Vr.Program,body:e}}}},expressionStatement:function(){return{type:Vr.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){var e=this.expression();var t;while(t=this.expect("|")){e=this.filter(e)}return e},expression:function(){return this.assignment()},assignment:function(){var e=this.ternary();if(this.expect("=")){e={type:Vr.AssignmentExpression,left:e,right:this.assignment(),operator:"="}}return e},ternary:function(){var e=this.logicalOR();var t;var n;if(this.expect("?")){t=this.expression();if(this.consume(":")){n=this.expression();return{type:Vr.ConditionalExpression,test:e,alternate:t,consequent:n}}}return e},logicalOR:function(){var e=this.logicalAND();while(this.expect("||")){e={type:Vr.LogicalExpression,operator:"||",left:e,right:this.logicalAND()}}return e},logicalAND:function(){var e=this.equality();while(this.expect("&&")){e={type:Vr.LogicalExpression,operator:"&&",left:e,right:this.equality()}}return e},equality:function(){var e=this.relational();var t;while(t=this.expect("==","!=","===","!==")){e={type:Vr.BinaryExpression,operator:t.text,left:e,right:this.relational()}}return e},relational:function(){var e=this.additive();var t;while(t=this.expect("<",">","<=",">=")){e={type:Vr.BinaryExpression,operator:t.text,left:e,right:this.additive()}}return e},additive:function(){var e=this.multiplicative();var t;while(t=this.expect("+","-")){e={type:Vr.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()}}return e},multiplicative:function(){var e=this.unary();var t;while(t=this.expect("*","/","%")){e={type:Vr.BinaryExpression,operator:t.text,left:e,right:this.unary()}}return e},unary:function(){var e;if(e=this.expect("+","-","!")){return{type:Vr.UnaryExpression,operator:e.text,prefix:true,argument:this.unary()}}else{return this.primary()}},primary:function(){var e;if(this.expect("(")){e=this.filterChain();this.consume(")")}else if(this.expect("[")){e=this.arrayDeclaration()}else if(this.expect("{")){e=this.object()}else if(this.constants.hasOwnProperty(this.peek().text)){e=le(this.constants[this.consume().text])}else if(this.peek().identifier){e=this.identifier()}else if(this.peek().constant){e=this.constant()}else{this.throwError("not a primary expression",this.peek())}var t;while(t=this.expect("(","[",".")){if(t.text==="("){e={type:Vr.CallExpression,callee:e,arguments:this.parseArguments()};this.consume(")")}else if(t.text==="["){e={type:Vr.MemberExpression,object:e,property:this.expression(),computed:true};this.consume("]")}else if(t.text==="."){e={type:Vr.MemberExpression,object:e,property:this.identifier(),computed:false}}else{this.throwError("IMPOSSIBLE")}}return e},filter:function(e){var t=[e];var n={type:Vr.CallExpression,callee:this.identifier(),arguments:t,filter:true};while(this.expect(":")){t.push(this.expression())}return n},parseArguments:function(){var e=[];if(this.peekToken().text!==")"){do{e.push(this.expression())}while(this.expect(","))}return e},identifier:function(){var e=this.consume();if(!e.identifier){this.throwError("is not a valid identifier",e)}return{type:Vr.Identifier,name:e.text}},constant:function(){return{type:Vr.Literal,value:this.consume().value}},arrayDeclaration:function(){var e=[];if(this.peekToken().text!=="]"){do{if(this.peek("]")){break}e.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:Vr.ArrayExpression,elements:e}},object:function(){var e=[],t;if(this.peekToken().text!=="}"){do{if(this.peek("}")){break}t={type:Vr.Property,kind:"init"};if(this.peek().constant){t.key=this.constant()}else if(this.peek().identifier){t.key=this.identifier()}else{this.throwError("invalid key",this.peek())}this.consume(":");t.value=this.expression();e.push(t)}while(this.expect(","))}this.consume("}");return{type:Vr.ObjectExpression,properties:e}},throwError:function(e,t){throw wr("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",t.text,e,t.index+1,this.text,this.text.substring(t.index))},consume:function(e){if(this.tokens.length===0){throw wr("ueoe","Unexpected end of expression: {0}",this.text)}var t=this.expect(e);if(!t){this.throwError("is unexpected, expecting ["+e+"]",this.peek())}return t},peekToken:function(){if(this.tokens.length===0){throw wr("ueoe","Unexpected end of expression: {0}",this.text)}return this.tokens[0]},peek:function(e,t,n,r){return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){if(this.tokens.length>e){var a=this.tokens[e];var o=a.text;if(o===t||o===n||o===r||o===i||!t&&!n&&!r&&!i){return a}}return false},expect:function(e,t,n,r){var i=this.peek(e,t,n,r);if(i){this.tokens.shift();return i}return false},constants:{"true":{type:Vr.Literal,value:true},"false":{type:Vr.Literal,value:false},"null":{type:Vr.Literal,value:null},undefined:{type:Vr.Literal,value:n},"this":{type:Vr.ThisExpression}}};function Nr(e,t){return typeof e!=="undefined"?e:t}function jr(e,t){if(typeof e==="undefined")return t;if(typeof t==="undefined")return e;return e+t}function Pr(e,t){var n=e(t);return!n.$stateful}function Ir(e,t){var n;var r;switch(e.type){case Vr.Program:n=true;C(e.body,function(e){Ir(e.expression,t);n=n&&e.expression.constant});e.constant=n;break;case Vr.Literal:e.constant=true;e.toWatch=[];break;case Vr.UnaryExpression:Ir(e.argument,t);e.constant=e.argument.constant;e.toWatch=e.argument.toWatch;break;case Vr.BinaryExpression:Ir(e.left,t);Ir(e.right,t);e.constant=e.left.constant&&e.right.constant;e.toWatch=e.left.toWatch.concat(e.right.toWatch);break;case Vr.LogicalExpression:Ir(e.left,t);Ir(e.right,t);e.constant=e.left.constant&&e.right.constant;e.toWatch=e.constant?[]:[e];break;case Vr.ConditionalExpression:Ir(e.test,t);Ir(e.alternate,t);Ir(e.consequent,t);e.constant=e.test.constant&&e.alternate.constant&&e.consequent.constant;e.toWatch=e.constant?[]:[e];break;case Vr.Identifier:e.constant=false;e.toWatch=[e];break;case Vr.MemberExpression:Ir(e.object,t);if(e.computed){Ir(e.property,t)}e.constant=e.object.constant&&(!e.computed||e.property.constant);e.toWatch=[e];break;case Vr.CallExpression:n=e.filter?Pr(t,e.callee.name):false;r=[];C(e.arguments,function(e){Ir(e,t);n=n&&e.constant;if(!e.constant){r.push.apply(r,e.toWatch)}});e.constant=n;e.toWatch=e.filter&&Pr(t,e.callee.name)?r:[e];break;case Vr.AssignmentExpression:Ir(e.left,t);Ir(e.right,t);e.constant=e.left.constant&&e.right.constant;e.toWatch=[e];break;case Vr.ArrayExpression:n=true;r=[];C(e.elements,function(e){Ir(e,t);n=n&&e.constant;if(!e.constant){r.push.apply(r,e.toWatch)}});e.constant=n;e.toWatch=r;break;case Vr.ObjectExpression:n=true;r=[];C(e.properties,function(e){Ir(e.value,t);n=n&&e.value.constant;if(!e.value.constant){r.push.apply(r,e.value.toWatch)}});e.constant=n;e.toWatch=r;break;case Vr.ThisExpression:e.constant=false;e.toWatch=[];break}}function Dr(e){if(e.length!=1)return;var t=e[0].expression;var r=t.toWatch;if(r.length!==1)return r;return r[0]!==t?r:n}function Rr(e){return e.type===Vr.Identifier||e.type===Vr.MemberExpression}function _r(e){if(e.body.length===1&&Rr(e.body[0].expression)){return{type:Vr.AssignmentExpression,left:e.body[0].expression,right:{type:Vr.NGValueParameter},operator:"="}}}function qr(e){return e.body.length===0||e.body.length===1&&(e.body[0].expression.type===Vr.Literal||e.body[0].expression.type===Vr.ArrayExpression||e.body[0].expression.type===Vr.ObjectExpression)}function Ur(e){return e.constant}function Fr(e,t){this.astBuilder=e;this.$filter=t}Fr.prototype={compile:function(e,t){var r=this;var i=this.astBuilder.ast(e);this.state={nextId:0,filters:{},expensiveChecks:t,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Ir(i,r.$filter);var a="";var o;this.stage="assign";if(o=_r(i)){this.state.computing="assign";var s=this.nextId();this.recurse(o,s);a="fn.assign="+this.generateFunction("assign","s,v,l")}var u=Dr(i.body);r.stage="inputs";C(u,function(e,t){var n="fn"+t;r.state[n]={vars:[],body:[],own:{}};r.state.computing=n;var i=r.nextId();r.recurse(e,i);r.return_(i);r.state.inputs.push(n);e.watchId=t});this.state.computing="fn";this.stage="main";this.recurse(i);var l='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+a+this.watchFns()+"return fn;";var f=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",l)(this.$filter,xr,Sr,Ar,Nr,jr,e);this.state=this.stage=n;f.literal=qr(i);f.constant=Ur(i);return f},USE:"use",STRICT:"strict",watchFns:function(){var e=[];var t=this.state.inputs;var n=this;C(t,function(t){e.push("var "+t+"="+n.generateFunction(t,"s"))});if(t.length){e.push("fn.inputs=["+t.join(",")+"];")}return e.join("")},generateFunction:function(e,t){return"function("+t+"){"+this.varsPrefix(e)+this.body(e)+"};"},filterPrefix:function(){var e=[];var t=this;C(this.state.filters,function(n,r){e.push(n+"=$filter("+t.escape(r)+")")});if(e.length)return"var "+e.join(",")+";";return""},varsPrefix:function(e){return this.state[e].vars.length?"var "+this.state[e].vars.join(",")+";":""},body:function(e){return this.state[e].body.join("")},recurse:function(e,t,r,i,a,o){var s,u,l=this,f,c;i=i||P;if(!o&&_(e.watchId)){t=t||this.nextId();this.if_("i",this.lazyAssign(t,this.computedMember("i",e.watchId)),this.lazyRecurse(e,t,r,i,a,true));return}switch(e.type){case Vr.Program:C(e.body,function(t,r){l.recurse(t.expression,n,n,function(e){u=e});if(r!==e.body.length-1){l.current().body.push(u,";")}else{l.return_(u)}});break;case Vr.Literal:c=this.escape(e.value);this.assign(t,c);i(c);break;case Vr.UnaryExpression:this.recurse(e.argument,n,n,function(e){u=e});c=e.operator+"("+this.ifDefined(u,0)+")";this.assign(t,c);i(c);break;case Vr.BinaryExpression:this.recurse(e.left,n,n,function(e){s=e});this.recurse(e.right,n,n,function(e){u=e});if(e.operator==="+"){c=this.plus(s,u)}else if(e.operator==="-"){c=this.ifDefined(s,0)+e.operator+this.ifDefined(u,0)}else{c="("+s+")"+e.operator+"("+u+")"}this.assign(t,c);i(c);break;case Vr.LogicalExpression:t=t||this.nextId();l.recurse(e.left,t);l.if_(e.operator==="&&"?t:l.not(t),l.lazyRecurse(e.right,t));i(t);break;case Vr.ConditionalExpression:t=t||this.nextId();l.recurse(e.test,t);l.if_(t,l.lazyRecurse(e.alternate,t),l.lazyRecurse(e.consequent,t));i(t);break;case Vr.Identifier:t=t||this.nextId();if(r){r.context=l.stage==="inputs"?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",e.name)+"?l:s");r.computed=false;r.name=e.name}xr(e.name);l.if_(l.stage==="inputs"||l.not(l.getHasOwnProperty("l",e.name)),function(){l.if_(l.stage==="inputs"||"s",function(){if(a&&a!==1){l.if_(l.not(l.nonComputedMember("s",e.name)),l.lazyAssign(l.nonComputedMember("s",e.name),"{}"))}l.assign(t,l.nonComputedMember("s",e.name))})},t&&l.lazyAssign(t,l.nonComputedMember("l",e.name)));if(l.state.expensiveChecks||Gr(e.name)){l.addEnsureSafeObject(t)}i(t);break;case Vr.MemberExpression:s=r&&(r.context=this.nextId())||this.nextId();t=t||this.nextId();l.recurse(e.object,s,n,function(){l.if_(l.notNull(s),function(){if(e.computed){u=l.nextId();l.recurse(e.property,u);l.addEnsureSafeMemberName(u);if(a&&a!==1){l.if_(l.not(l.computedMember(s,u)),l.lazyAssign(l.computedMember(s,u),"{}"))}c=l.ensureSafeObject(l.computedMember(s,u));l.assign(t,c);if(r){r.computed=true;r.name=u}}else{xr(e.property.name);if(a&&a!==1){l.if_(l.not(l.nonComputedMember(s,e.property.name)),l.lazyAssign(l.nonComputedMember(s,e.property.name),"{}"))}c=l.nonComputedMember(s,e.property.name);if(l.state.expensiveChecks||Gr(e.property.name)){c=l.ensureSafeObject(c)}l.assign(t,c);if(r){r.computed=false;r.name=e.property.name}}i(t)})},!!a);break;case Vr.CallExpression:t=t||this.nextId();if(e.filter){u=l.filter(e.callee.name);f=[];C(e.arguments,function(e){var t=l.nextId();l.recurse(e,t);f.push(t)});c=u+"("+f.join(",")+")";l.assign(t,c);i(t)}else{u=l.nextId();s={};f=[];l.recurse(e.callee,u,s,function(){l.if_(l.notNull(u),function(){l.addEnsureSafeFunction(u);C(e.arguments,function(e){l.recurse(e,l.nextId(),n,function(e){f.push(l.ensureSafeObject(e))})});if(s.name){if(!l.state.expensiveChecks){l.addEnsureSafeObject(s.context)}c=l.member(s.context,s.name,s.computed)+"("+f.join(",")+")"}else{c=u+"("+f.join(",")+")"}c=l.ensureSafeObject(c);l.assign(t,c);i(t)})})}break;case Vr.AssignmentExpression:u=this.nextId();s={};if(!Rr(e.left)){throw wr("lval","Trying to assing a value to a non l-value")}this.recurse(e.left,n,s,function(){l.if_(l.notNull(s.context),function(){l.recurse(e.right,u);l.addEnsureSafeObject(l.member(s.context,s.name,s.computed));c=l.member(s.context,s.name,s.computed)+e.operator+u;l.assign(t,c);i(t||c)})},1);break;case Vr.ArrayExpression:f=[];C(e.elements,function(e){l.recurse(e,l.nextId(),n,function(e){f.push(e)})});c="["+f.join(",")+"]";this.assign(t,c);i(c);break;case Vr.ObjectExpression:f=[];C(e.properties,function(e){l.recurse(e.value,l.nextId(),n,function(t){f.push(l.escape(e.key.type===Vr.Identifier?e.key.name:""+e.key.value)+":"+t)})});c="{"+f.join(",")+"}";this.assign(t,c);i(c);break;case Vr.ThisExpression:this.assign(t,"s");i("s");break;case Vr.NGValueParameter:this.assign(t,"v");i("v");break}},getHasOwnProperty:function(e,t){var n=e+"."+t;var r=this.current().own;if(!r.hasOwnProperty(n)){r[n]=this.nextId(false,e+"&&("+this.escape(t)+" in "+e+")")}return r[n]},assign:function(e,t){if(!e)return;this.current().body.push(e,"=",t,";");return e},filter:function(e){if(!this.state.filters.hasOwnProperty(e)){this.state.filters[e]=this.nextId(true)}return this.state.filters[e]},ifDefined:function(e,t){return"ifDefined("+e+","+this.escape(t)+")"},plus:function(e,t){return"plus("+e+","+t+")"},return_:function(e){this.current().body.push("return ",e,";")},if_:function(e,t,n){if(e===true){t()}else{var r=this.current().body;r.push("if(",e,"){");t();r.push("}");if(n){r.push("else{");n();r.push("}")}}},not:function(e){return"!("+e+")"},notNull:function(e){return e+"!=null"},nonComputedMember:function(e,t){return e+"."+t},computedMember:function(e,t){return e+"["+t+"]"},member:function(e,t,n){if(n)return this.computedMember(e,t);return this.nonComputedMember(e,t)},addEnsureSafeObject:function(e){this.current().body.push(this.ensureSafeObject(e),";")},addEnsureSafeMemberName:function(e){this.current().body.push(this.ensureSafeMemberName(e),";")},addEnsureSafeFunction:function(e){this.current().body.push(this.ensureSafeFunction(e),";")},ensureSafeObject:function(e){return"ensureSafeObject("+e+",text)"},ensureSafeMemberName:function(e){return"ensureSafeMemberName("+e+",text)"},ensureSafeFunction:function(e){return"ensureSafeFunction("+e+",text)"},lazyRecurse:function(e,t,n,r,i,a){var o=this;return function(){o.recurse(e,t,n,r,i,a)}},lazyAssign:function(e,t){var n=this;return function(){n.assign(e,t)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)},escape:function(e){if(F(e))return"'"+e.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(B(e))return e.toString();if(e===true)return"true";if(e===false)return"false";if(e===null)return"null";if(typeof e==="undefined")return"undefined";throw wr("esc","IMPOSSIBLE")},nextId:function(e,t){var n="v"+this.state.nextId++;if(!e){this.current().vars.push(n+(t?"="+t:""))}return n},current:function(){return this.state[this.state.computing]}};function Br(e,t){this.astBuilder=e;this.$filter=t}Br.prototype={compile:function(e,t){var n=this;var r=this.astBuilder.ast(e);this.expression=e;this.expensiveChecks=t;Ir(r,n.$filter);var i;var a;if(i=_r(r)){a=this.recurse(i)}var o=Dr(r.body);var s;if(o){s=[];C(o,function(e,t){var r=n.recurse(e);e.input=r;s.push(r);e.watchId=t})}var u=[];C(r.body,function(e){u.push(n.recurse(e.expression))});var l=r.body.length===0?function(){}:r.body.length===1?u[0]:function(e,t){var n;C(u,function(r){n=r(e,t)});return n};if(a){l.assign=function(e,t,n){return a(e,n,t)}}if(s){l.inputs=s}l.literal=qr(r);l.constant=Ur(r);return l},recurse:function(e,t,r){var i,a,o=this,s,u;if(e.input){return this.inputs(e.input,e.watchId)}switch(e.type){case Vr.Literal:return this.value(e.value,t);case Vr.UnaryExpression:a=this.recurse(e.argument);return this["unary"+e.operator](a,t);case Vr.BinaryExpression:i=this.recurse(e.left);a=this.recurse(e.right);return this["binary"+e.operator](i,a,t);case Vr.LogicalExpression:i=this.recurse(e.left);a=this.recurse(e.right);return this["binary"+e.operator](i,a,t);case Vr.ConditionalExpression:return this["ternary?:"](this.recurse(e.test),this.recurse(e.alternate),this.recurse(e.consequent),t);case Vr.Identifier:xr(e.name,o.expression);return o.identifier(e.name,o.expensiveChecks||Gr(e.name),t,r,o.expression);case Vr.MemberExpression:i=this.recurse(e.object,false,!!r);if(!e.computed){xr(e.property.name,o.expression);a=e.property.name}if(e.computed)a=this.recurse(e.property);return e.computed?this.computedMember(i,a,t,r,o.expression):this.nonComputedMember(i,a,o.expensiveChecks,t,r,o.expression);case Vr.CallExpression:s=[];C(e.arguments,function(e){s.push(o.recurse(e))});if(e.filter)a=this.$filter(e.callee.name);if(!e.filter)a=this.recurse(e.callee,true);return e.filter?function(e,r,i,o){var u=[];for(var l=0;l<s.length;++l){u.push(s[l](e,r,i,o))}var f=a.apply(n,u,o);return t?{context:n,name:n,value:f}:f}:function(e,n,r,i){var u=a(e,n,r,i);var l;if(u.value!=null){Sr(u.context,o.expression);Ar(u.value,o.expression);var f=[];for(var c=0;c<s.length;++c){f.push(Sr(s[c](e,n,r,i),o.expression))}l=Sr(u.value.apply(u.context,f),o.expression)}return t?{value:l}:l};case Vr.AssignmentExpression:i=this.recurse(e.left,true,1);a=this.recurse(e.right);return function(e,n,r,s){var u=i(e,n,r,s);var l=a(e,n,r,s);Sr(u.value,o.expression);u.context[u.name]=l;return t?{value:l}:l};case Vr.ArrayExpression:s=[];C(e.elements,function(e){s.push(o.recurse(e))});return function(e,n,r,i){var a=[];for(var o=0;o<s.length;++o){a.push(s[o](e,n,r,i))}return t?{value:a}:a};case Vr.ObjectExpression:s=[];C(e.properties,function(e){s.push({key:e.key.type===Vr.Identifier?e.key.name:""+e.key.value,value:o.recurse(e.value)})});return function(e,n,r,i){var a={};for(var o=0;o<s.length;++o){a[s[o].key]=s[o].value(e,n,r,i)}return t?{value:a}:a};case Vr.ThisExpression:return function(e){return t?{value:e}:e};case Vr.NGValueParameter:return function(e,n,r,i){return t?{value:r}:r}}},"unary+":function(e,t){return function(n,r,i,a){var o=e(n,r,i,a);if(_(o)){o=+o}else{o=0}return t?{value:o}:o}},"unary-":function(e,t){return function(n,r,i,a){var o=e(n,r,i,a);if(_(o)){o=-o}else{o=0}return t?{value:o}:o}},"unary!":function(e,t){return function(n,r,i,a){var o=!e(n,r,i,a);return t?{value:o}:o}},"binary+":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o);var u=t(r,i,a,o);var l=jr(s,u);return n?{value:l}:l}},"binary-":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o);var u=t(r,i,a,o);var l=(_(s)?s:0)-(_(u)?u:0);return n?{value:l}:l}},"binary*":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)*t(r,i,a,o);return n?{value:s}:s}},"binary/":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)/t(r,i,a,o);return n?{value:s}:s}},"binary%":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)%t(r,i,a,o);return n?{value:s}:s}},"binary===":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)===t(r,i,a,o);return n?{value:s}:s}},"binary!==":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)!==t(r,i,a,o);return n?{value:s}:s}},"binary==":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)==t(r,i,a,o);return n?{value:s}:s}},"binary!=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)!=t(r,i,a,o);return n?{value:s}:s}},"binary<":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)<t(r,i,a,o);return n?{value:s}:s}},"binary>":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)>t(r,i,a,o);return n?{value:s}:s}},"binary<=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)<=t(r,i,a,o);return n?{value:s}:s}},"binary>=":function(e,t,n){
return function(r,i,a,o){var s=e(r,i,a,o)>=t(r,i,a,o);return n?{value:s}:s}},"binary&&":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)&&t(r,i,a,o);return n?{value:s}:s}},"binary||":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)||t(r,i,a,o);return n?{value:s}:s}},"ternary?:":function(e,t,n,r){return function(i,a,o,s){var u=e(i,a,o,s)?t(i,a,o,s):n(i,a,o,s);return r?{value:u}:u}},value:function(e,t){return function(){return t?{context:n,name:n,value:e}:e}},identifier:function(e,t,r,i,a){return function(o,s,u,l){var f=s&&e in s?s:o;if(i&&i!==1&&f&&!f[e]){f[e]={}}var c=f?f[e]:n;if(t){Sr(c,a)}if(r){return{context:f,name:e,value:c}}else{return c}}},computedMember:function(e,t,n,r,i){return function(a,o,s,u){var l=e(a,o,s,u);var f;var c;if(l!=null){f=t(a,o,s,u);xr(f,i);if(r&&r!==1&&l&&!l[f]){l[f]={}}c=l[f];Sr(c,i)}if(n){return{context:l,name:f,value:c}}else{return c}}},nonComputedMember:function(e,t,r,i,a,o){return function(s,u,l,f){var c=e(s,u,l,f);if(a&&a!==1&&c&&!c[t]){c[t]={}}var h=c!=null?c[t]:n;if(r||Gr(t)){Sr(h,o)}if(i){return{context:c,name:t,value:h}}else{return h}}},inputs:function(e,t){return function(n,r,i,a){if(a)return a[t];return e(n,r,i)}}};var Lr=function(e,t,n){this.lexer=e;this.$filter=t;this.options=n;this.ast=new Vr(this.lexer);this.astCompiler=n.csp?new Br(this.ast,t):new Fr(this.ast,t)};Lr.prototype={constructor:Lr,parse:function(e){return this.astCompiler.compile(e,this.options.expensiveChecks)}};function Hr(e,t,n,r){Sr(e,r);var i=t.split("."),a;for(var o=0;i.length>1;o++){a=xr(i.shift(),r);var s=Sr(e[a],r);if(!s){s={};e[a]=s}e=s}a=xr(i.shift(),r);Sr(e[a],r);e[a]=n;return n}var zr=ze();var Wr=ze();function Gr(e){return e=="constructor"}var Jr=Object.prototype.valueOf;function Yr(e){return z(e.valueOf)?e.valueOf():Jr.call(e)}function Zr(){var e=ze();var t=ze();this.$get=["$filter","$sniffer",function(r,i){var a={csp:i.csp,expensiveChecks:false},o={csp:i.csp,expensiveChecks:true};return function p(n,i,s){var p,d,$;switch(typeof n){case"string":n=n.trim();$=n;var v=s?t:e;p=v[$];if(!p){if(n.charAt(0)===":"&&n.charAt(1)===":"){d=true;n=n.substring(2)}var m=s?o:a;var g=new Tr(m);var y=new Lr(g,r,m);p=y.parse(n);if(p.constant){p.$$watchDelegate=c}else if(d){p.$$watchDelegate=p.literal?f:l}else if(p.inputs){p.$$watchDelegate=u}v[$]=p}return h(p,i);case"function":return h(n,i);default:return P}};function s(e,t){if(e==null||t==null){return e===t}if(typeof e==="object"){e=Yr(e);if(typeof e==="object"){return false}}return e===t||e!==e&&t!==t}function u(e,t,r,i,a){var o=i.inputs;var u;if(o.length===1){var l=s;o=o[0];return e.$watch(function d(e){var t=o(e);if(!s(t,l)){u=i(e,n,n,[t]);l=t&&Yr(t)}return u},t,r,a)}var f=[];var c=[];for(var h=0,p=o.length;h<p;h++){f[h]=s;c[h]=null}return e.$watch(function $(e){var t=false;for(var r=0,a=o.length;r<a;r++){var l=o[r](e);if(t||(t=!s(l,f[r]))){c[r]=l;f[r]=l&&Yr(l)}}if(t){u=i(e,n,n,c)}return u},t,r,a)}function l(e,t,n,r){var i,a;return i=e.$watch(function o(e){return r(e)},function s(e,n,r){a=e;if(z(t)){t.apply(this,arguments)}if(_(e)){r.$$postDigest(function(){if(_(a)){i()}})}},n)}function f(e,t,n,r){var i,a;return i=e.$watch(function s(e){return r(e)},function u(e,n,r){a=e;if(z(t)){t.call(this,e,n,r)}if(o(e)){r.$$postDigest(function(){if(o(a))i()})}},n);function o(e){var t=true;C(e,function(e){if(!_(e))t=false});return t}}function c(e,t,n,r){var i;return i=e.$watch(function a(e){return r(e)},function o(e,n,r){if(z(t)){t.apply(this,arguments)}i()},n)}function h(e,t){if(!t)return e;var n=e.$$watchDelegate;var r=n!==f&&n!==l;var i=r?function a(n,r,i,o){var s=e(n,r,i,o);return t(s,n,r)}:function o(n,r,i,a){var o=e(n,r,i,a);var s=t(o,n,r);return _(o)?s:o};if(e.$$watchDelegate&&e.$$watchDelegate!==u){i.$$watchDelegate=e.$$watchDelegate}else if(!t.$stateful){i.$$watchDelegate=u;i.inputs=e.inputs?e.inputs:[e]}return i}}]}function Kr(){this.$get=["$rootScope","$exceptionHandler",function(e,t){return Qr(function(t){e.$evalAsync(t)},t)}]}function Xr(){this.$get=["$browser","$exceptionHandler",function(e,t){return Qr(function(t){e.defer(t)},t)}]}function Qr(e,t){var i=r("$q",TypeError);function a(e,t,n){var r=false;function i(t){return function(n){if(r)return;r=true;t.call(e,n)}}return[i(t),i(n)]}var o=function(){return new c};function s(){this.$$state={status:0}}s.prototype={then:function(e,t,n){var r=new c;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([r,e,t,n]);if(this.$$state.status>0)f(this.$$state);return r.promise},"catch":function(e){return this.then(null,e)},"finally":function(e,t){return this.then(function(t){return d(t,true,e)},function(t){return d(t,false,e)},t)}};function u(e,t){return function(n){t.call(e,n)}}function l(e){var r,i,a;a=e.pending;e.processScheduled=false;e.pending=n;for(var o=0,s=a.length;o<s;++o){i=a[o][0];r=a[o][e.status];try{if(z(r)){i.resolve(r(e.value))}else if(e.status===1){i.resolve(e.value)}else{i.reject(e.value)}}catch(u){i.reject(u);t(u)}}}function f(t){if(t.processScheduled||!t.pending)return;t.processScheduled=true;e(function(){l(t)})}function c(){this.promise=new s;this.resolve=u(this,this.resolve);this.reject=u(this,this.reject);this.notify=u(this,this.notify)}c.prototype={resolve:function(e){if(this.promise.$$state.status)return;if(e===this.promise){this.$$reject(i("qcycle","Expected promise to be resolved with value other than itself '{0}'",e))}else{this.$$resolve(e)}},$$resolve:function(e){var n,r;r=a(this,this.$$resolve,this.$$reject);try{if(q(e)||z(e))n=e&&e.then;if(z(n)){this.promise.$$state.status=-1;n.call(e,r[0],r[1],this.notify)}else{this.promise.$$state.value=e;this.promise.$$state.status=1;f(this.promise.$$state)}}catch(i){r[1](i);t(i)}},reject:function(e){if(this.promise.$$state.status)return;this.$$reject(e)},$$reject:function(e){this.promise.$$state.value=e;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending;if(this.promise.$$state.status<=0&&r&&r.length){e(function(){var e,i;for(var a=0,o=r.length;a<o;a++){i=r[a][0];e=r[a][3];try{i.notify(z(e)?e(n):n)}catch(s){t(s)}}})}}};var h=function(e){var t=new c;t.reject(e);return t.promise};var p=function g(e,t){var n=new c;if(t){n.resolve(e)}else{n.reject(e)}return n.promise};var d=function y(e,t,n){var r=null;try{if(z(n))r=n()}catch(i){return p(i,false)}if(Q(r)){return r.then(function(){return p(e,t)},function(e){return p(e,false)})}else{return p(e,t)}};var $=function(e,t,n,r){var i=new c;i.resolve(e);return i.promise.then(t,n,r)};function v(e){var t=new c,n=0,r=H(e)?[]:{};C(e,function(e,i){n++;$(e).then(function(e){if(r.hasOwnProperty(i))return;r[i]=e;if(!--n)t.resolve(r)},function(e){if(r.hasOwnProperty(i))return;t.reject(e)})});if(n===0){t.resolve(r)}return t.promise}var m=function b(e){if(!z(e)){throw i("norslvr","Expected resolverFn, got '{0}'",e)}if(!(this instanceof b)){return new b(e)}var t=new c;function n(e){t.resolve(e)}function r(e){t.reject(e)}e(n,r);return t.promise};m.defer=o;m.reject=h;m.when=$;m.all=v;return m}function ei(){this.$get=["$window","$timeout",function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame;var r=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame;var i=!!n;var a=i?function(e){var t=n(e);return function(){r(t)}}:function(e){var n=t(e,16.66,false);return function(){t.cancel(n)}};f.supported=i;var o;var s=0;var u=[];return f;function l(){for(var e=0;e<u.length;e++){var t=u[e];if(t){u[e]=null;t()}}s=u.length=0}function f(e){var t=u.length;s++;u.push(e);if(t===0){o=a(l)}return function n(){if(t>=0){u[t]=null;t=null;if(--s===0&&o){o();o=null;u.length=0}}}}}]}function ti(){var e=10;var t=r("$rootScope");var n=null;var i=null;this.digestTtl=function(t){if(arguments.length){e=t}return e};function a(e){function t(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=A();this.$$ChildScope=null}t.prototype=e;return t}this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,o,u,l){function f(e){e.currentScope.$$destroyed=true}function c(){this.$id=A();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=false;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}c.prototype={constructor:c,$new:function(e,t){var n;t=t||this;if(e){n=new c;n.$root=this.$root}else{if(!this.$$ChildScope){this.$$ChildScope=a(this)}n=new this.$$ChildScope}n.$parent=t;n.$$prevSibling=t.$$childTail;if(t.$$childHead){t.$$childTail.$$nextSibling=n;t.$$childTail=n}else{t.$$childHead=t.$$childTail=n}if(e||t!=this)n.$on("$destroy",f);return n},$watch:function(e,t,r,i){var a=u(e);if(a.$$watchDelegate){return a.$$watchDelegate(this,t,r,a,e)}var o=this,s=o.$$watchers,l={fn:t,last:b,get:a,exp:i||e,eq:!!r};n=null;if(!z(t)){l.fn=P}if(!s){s=o.$$watchers=[]}s.unshift(l);g(this,1);return function f(){if(ue(s,l)>=0){g(o,-1)}n=null}},$watchGroup:function(e,t){var n=new Array(e.length);var r=new Array(e.length);var i=[];var a=this;var o=false;var s=true;if(!e.length){var u=true;a.$evalAsync(function(){if(u)t(r,r,a)});return function f(){u=false}}if(e.length===1){return this.$watch(e[0],function c(e,i,a){r[0]=e;n[0]=i;t(r,e===i?r:n,a)})}C(e,function(e,t){var s=a.$watch(e,function u(e,i){r[t]=e;n[t]=i;if(!o){o=true;a.$evalAsync(l)}});i.push(s)});function l(){o=false;if(s){s=false;t(r,r,a)}else{t(r,n,a)}}return function h(){while(i.length){i.shift()()}}},$watchCollection:function(e,t){$.$stateful=true;var n=this;var r;var i;var a;var o=t.length>1;var l=0;var f=u(e,$);var c=[];var h={};var p=true;var d=0;function $(e){r=e;var t,n,a,o,s;if(R(r))return;if(!q(r)){if(i!==r){i=r;l++}}else if(S(r)){if(i!==c){i=c;d=i.length=0;l++}t=r.length;if(d!==t){l++;i.length=d=t}for(var u=0;u<t;u++){s=i[u];o=r[u];a=s!==s&&o!==o;if(!a&&s!==o){l++;i[u]=o}}}else{if(i!==h){i=h={};d=0;l++}t=0;for(n in r){if(r.hasOwnProperty(n)){t++;o=r[n];s=i[n];if(n in i){a=s!==s&&o!==o;if(!a&&s!==o){l++;i[n]=o}}else{d++;i[n]=o;l++}}}if(d>t){l++;for(n in i){if(!r.hasOwnProperty(n)){d--;delete i[n]}}}}return l}function v(){if(p){p=false;t(r,r,n)}else{t(r,a,n)}if(o){if(!q(r)){a=r}else if(S(r)){a=new Array(r.length);for(var e=0;e<r.length;e++){a[e]=r[e]}}else{a={};for(var i in r){if(s.call(r,i)){a[i]=r[i]}}}}}return this.$watch(f,v)},$digest:function(){var r,a,s,u,f,c,$=e,g,y,x=this,S=[],C,E,k;v("$digest");l.$$checkUrlChange();if(this===h&&i!==null){l.defer.cancel(i);w()}n=null;do{c=false;y=x;while(p.length){try{k=p.shift();k.scope.$eval(k.expression,k.locals)}catch(A){o(A)}n=null}e:do{if(u=y.$$watchers){f=u.length;while(f--){try{r=u[f];if(r){if((a=r.get(y))!==(s=r.last)&&!(r.eq?ce(a,s):typeof a==="number"&&typeof s==="number"&&isNaN(a)&&isNaN(s))){c=true;n=r;r.last=r.eq?le(a,null):a;r.fn(a,s===b?a:s,y);if($<5){C=4-$;if(!S[C])S[C]=[];S[C].push({msg:z(r.exp)?"fn: "+(r.exp.name||r.exp.toString()):r.exp,newVal:a,oldVal:s})}}else if(r===n){c=false;break e}}}catch(A){o(A)}}}if(!(g=y.$$watchersCount&&y.$$childHead||y!==x&&y.$$nextSibling)){while(y!==x&&!(g=y.$$nextSibling)){y=y.$parent}}}while(y=g);if((c||p.length)&&!$--){m();throw t("infdig","{0} $digest() iterations reached. Aborting!\n"+"Watchers fired in the last 5 iterations: {1}",e,S)}}while(c||p.length);m();while(d.length){try{d.shift()()}catch(A){o(A)}}},$destroy:function(){if(this.$$destroyed)return;var e=this.$parent;this.$broadcast("$destroy");this.$$destroyed=true;if(this===h){l.$$applicationDestroyed()}g(this,-this.$$watchersCount);for(var t in this.$$listenerCount){y(this,this.$$listenerCount[t],t)}if(e&&e.$$childHead==this)e.$$childHead=this.$$nextSibling;if(e&&e.$$childTail==this)e.$$childTail=this.$$prevSibling;if(this.$$prevSibling)this.$$prevSibling.$$nextSibling=this.$$nextSibling;if(this.$$nextSibling)this.$$nextSibling.$$prevSibling=this.$$prevSibling;this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=P;this.$on=this.$watch=this.$watchGroup=function(){return P};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null},$eval:function(e,t){return u(e)(this,t)},$evalAsync:function(e,t){if(!h.$$phase&&!p.length){l.defer(function(){if(p.length){h.$digest()}})}p.push({scope:this,expression:e,locals:t})},$$postDigest:function(e){d.push(e)},$apply:function(e){try{v("$apply");return this.$eval(e)}catch(t){o(t)}finally{m();try{h.$digest()}catch(t){o(t);throw t}}},$applyAsync:function(e){var t=this;e&&$.push(n);x();function n(){t.$eval(e)}},$on:function(e,t){var n=this.$$listeners[e];if(!n){this.$$listeners[e]=n=[]}n.push(t);var r=this;do{if(!r.$$listenerCount[e]){r.$$listenerCount[e]=0}r.$$listenerCount[e]++}while(r=r.$parent);var i=this;return function(){var r=n.indexOf(t);if(r!==-1){n[r]=null;y(i,1,e)}}},$emit:function(e,t){var n=[],r,i=this,a=false,s={name:e,targetScope:i,stopPropagation:function(){a=true},preventDefault:function(){s.defaultPrevented=true},defaultPrevented:false},u=de([s],arguments,1),l,f;do{r=i.$$listeners[e]||n;s.currentScope=i;for(l=0,f=r.length;l<f;l++){if(!r[l]){r.splice(l,1);l--;f--;continue}try{r[l].apply(null,u)}catch(c){o(c)}}if(a){s.currentScope=null;return s}i=i.$parent}while(i);s.currentScope=null;return s},$broadcast:function(e,t){var n=this,r=n,i=n,a={name:e,targetScope:n,preventDefault:function(){a.defaultPrevented=true},defaultPrevented:false};if(!n.$$listenerCount[e])return a;var s=de([a],arguments,1),u,l,f;while(r=i){a.currentScope=r;u=r.$$listeners[e]||[];for(l=0,f=u.length;l<f;l++){if(!u[l]){u.splice(l,1);l--;f--;continue}try{u[l].apply(null,s)}catch(c){o(c)}}if(!(i=r.$$listenerCount[e]&&r.$$childHead||r!==n&&r.$$nextSibling)){while(r!==n&&!(i=r.$$nextSibling)){r=r.$parent}}}a.currentScope=null;return a}};var h=new c;var p=h.$$asyncQueue=[];var d=h.$$postDigestQueue=[];var $=h.$$applyAsyncQueue=[];return h;function v(e){if(h.$$phase){throw t("inprog","{0} already in progress",h.$$phase)}h.$$phase=e}function m(){h.$$phase=null}function g(e,t){do{e.$$watchersCount+=t}while(e=e.$parent)}function y(e,t,n){do{e.$$listenerCount[n]-=t;if(e.$$listenerCount[n]===0){delete e.$$listenerCount[n]}}while(e=e.$parent)}function b(){}function w(){while($.length){try{$.shift()()}catch(e){o(e)}}i=null}function x(){if(i===null){i=l.defer(function(){h.$apply(w)})}}}]}function ni(){var e=/^\s*(https?|ftp|mailto|tel|file):/,t=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(t){if(_(t)){e=t;return this}return e};this.imgSrcSanitizationWhitelist=function(e){if(_(e)){t=e;return this}return t};this.$get=function(){return function n(r,i){var a=i?t:e;var o;o=$i(r).href;if(o!==""&&!o.match(a)){return"unsafe:"+o}return r}}}var ri=r("$sce");var ii={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"};function ai(e){if(e==="self"){return e}else if(F(e)){if(e.indexOf("***")>-1){throw ri("iwcard","Illegal sequence *** in string matcher.  String: {0}",e)}e=re(e).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+e+"$")}else if(W(e)){return new RegExp("^"+e.source+"$")}else{throw ri("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}}function oi(e){var t=[];if(_(e)){C(e,function(e){t.push(ai(e))})}return t}function si(){this.SCE_CONTEXTS=ii;var e=["self"],t=[];this.resourceUrlWhitelist=function(t){if(arguments.length){e=oi(t)}return e};this.resourceUrlBlacklist=function(e){if(arguments.length){t=oi(e)}return t};this.$get=["$injector",function(r){var i=function p(e){throw ri("unsafe","Attempting to use an unsafe value in a safe context.")};if(r.has("$sanitize")){i=r.get("$sanitize")}function a(e,t){if(e==="self"){return vi(t)}else{return!!e.exec(t.href)}}function o(n){var r=$i(n.toString());var i,o,s=false;for(i=0,o=e.length;i<o;i++){if(a(e[i],r)){s=true;break}}if(s){for(i=0,o=t.length;i<o;i++){if(a(t[i],r)){s=false;break}}}return s}function s(e){var t=function n(e){this.$$unwrapTrustedValue=function(){return e}};if(e){t.prototype=new e}t.prototype.valueOf=function r(){return this.$$unwrapTrustedValue()};t.prototype.toString=function i(){return this.$$unwrapTrustedValue().toString()};return t}var u=s(),l={};l[ii.HTML]=s(u);l[ii.CSS]=s(u);l[ii.URL]=s(u);l[ii.JS]=s(u);l[ii.RESOURCE_URL]=s(l[ii.URL]);function f(e,t){var r=l.hasOwnProperty(e)?l[e]:null;if(!r){throw ri("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",e,t)}if(t===null||t===n||t===""){return t}if(typeof t!=="string"){throw ri("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",e)}return new r(t)}function c(e){if(e instanceof u){return e.$$unwrapTrustedValue()}else{return e}}function h(e,t){if(t===null||t===n||t===""){return t}var r=l.hasOwnProperty(e)?l[e]:null;if(r&&t instanceof r){return t.$$unwrapTrustedValue()}if(e===ii.RESOURCE_URL){if(o(t)){return t}else{throw ri("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",t.toString())}}else if(e===ii.HTML){return i(t)}throw ri("unsafe","Attempting to use an unsafe value in a safe context.")}return{trustAs:f,getTrusted:h,valueOf:c}}]}function ui(){var e=true;this.enabled=function(t){if(arguments.length){e=!!t}return e};this.$get=["$parse","$sceDelegate",function(t,n){if(e&&c<8){throw ri("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks "+"mode.  You can fix this by adding the text <!doctype html> to the top of your HTML "+"document.  See http://docs.angularjs.org/api/ng.$sce for more information.")}var r=fe(ii);r.isEnabled=function(){return e};r.trustAs=n.trustAs;r.getTrusted=n.getTrusted;r.valueOf=n.valueOf;if(!e){r.trustAs=r.getTrusted=function(e,t){return t};r.valueOf=I}r.parseAs=function u(e,n){var i=t(n);if(i.literal&&i.constant){return i}else{return t(n,function(t){return r.getTrusted(e,t)})}};var i=r.parseAs,a=r.getTrusted,s=r.trustAs;C(ii,function(e,t){var n=o(t);r[ht("parse_as_"+n)]=function(t){return i(e,t)};r[ht("get_trusted_"+n)]=function(t){return a(e,t)};r[ht("trust_as_"+n)]=function(t){return s(e,t)}});return r}]}function li(){this.$get=["$window","$document",function(e,t){var n={},r=N((/android (\d+)/.exec(o((e.navigator||{}).userAgent))||[])[1]),i=/Boxee/i.test((e.navigator||{}).userAgent),a=t[0]||{},s,u=/^(Moz|webkit|ms)(?=[A-Z])/,l=a.body&&a.body.style,f=false,h=false,p;if(l){for(var d in l){if(p=u.exec(d)){s=p[0];s=s.substr(0,1).toUpperCase()+s.substr(1);break}}if(!s){s="WebkitOpacity"in l&&"webkit"}f=!!("transition"in l||s+"Transition"in l);h=!!("animation"in l||s+"Animation"in l);if(r&&(!f||!h)){f=F(l.webkitTransition);h=F(l.webkitAnimation)}}return{history:!!(e.history&&e.history.pushState&&!(r<4)&&!i),hasEvent:function(e){if(e==="input"&&c<=11)return false;if(R(n[e])){var t=a.createElement("div");n[e]="on"+e in t}return n[e]},csp:he(),vendorPrefix:s,transitions:f,animations:h,android:r}}]}var bn=r("$compile");function fi(){this.$get=["$templateCache","$http","$q",function(e,t,n){function r(i,a){r.totalPendingRequests++;var o=t.defaults&&t.defaults.transformResponse;if(H(o)){o=o.filter(function(e){return e!==Bn})}else if(o===Bn){o=null}var s={cache:e,transformResponse:o};return t.get(i,s)["finally"](function(){r.totalPendingRequests--}).then(function(t){e.put(i,t.data);return t.data},u);function u(e){if(!a){throw bn("tpload","Failed to load template: {0} (HTTP status: {1} {2})",i,e.status,e.statusText)}return n.reject(e)}}r.totalPendingRequests=0;return r}]}function ci(){this.$get=["$rootScope","$browser","$location",function(e,t,n){var r={};r.findBindings=function(e,t,n){var r=e.getElementsByClassName("ng-binding");var i=[];C(r,function(e){var r=b.element(e).data("$binding");if(r){C(r,function(r){if(n){var a=new RegExp("(^|\\s)"+re(t)+"(\\s|\\||$)");if(a.test(r)){i.push(e)}}else{if(r.indexOf(t)!=-1){i.push(e)}}})}});return i};r.findModels=function(e,t,n){var r=["ng-","data-ng-","ng\\:"];for(var i=0;i<r.length;++i){var a=n?"=":"*=";var o="["+r[i]+"model"+a+'"'+t+'"]';var s=e.querySelectorAll(o);if(s.length){return s}}};r.getLocation=function(){return n.url()};r.setLocation=function(t){if(t!==n.url()){n.url(t);e.$digest()}};r.whenStable=function(e){t.notifyWhenNoOutstandingRequests(e)};return r}]}function hi(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(e,t,n,r,i){var a={};function o(o,s,u){if(!z(o)){u=s;s=o;o=P}var l=$e(arguments,3),f=_(u)&&!u,c=(f?r:n).defer(),h=c.promise,p;p=t.defer(function(){try{c.resolve(o.apply(null,l))}catch(t){c.reject(t);i(t)}finally{delete a[h.$$timeoutId]}if(!f)e.$apply()},s);h.$$timeoutId=p;a[p]=c;return h}o.cancel=function(e){if(e&&e.$$timeoutId in a){a[e.$$timeoutId].reject("canceled");delete a[e.$$timeoutId];return t.defer.cancel(e.$$timeoutId)}return false};return o}]}var pi=t.createElement("a");var di=$i(e.location.href);function $i(e){var t=e;if(c){pi.setAttribute("href",t);t=pi.href}pi.setAttribute("href",t);return{href:pi.href,protocol:pi.protocol?pi.protocol.replace(/:$/,""):"",host:pi.host,search:pi.search?pi.search.replace(/^\?/,""):"",hash:pi.hash?pi.hash.replace(/^#/,""):"",hostname:pi.hostname,port:pi.port,pathname:pi.pathname.charAt(0)==="/"?pi.pathname:"/"+pi.pathname}}function vi(e){var t=F(e)?$i(e):e;return t.protocol===di.protocol&&t.host===di.host}function mi(){this.$get=D(e)}function gi(e){var t=e[0]||{};var r={};var i="";function a(e){try{return decodeURIComponent(e)}catch(t){return e}}return function(){var e,o,s,u,l;var f=t.cookie||"";if(f!==i){i=f;e=i.split("; ");r={};for(s=0;s<e.length;s++){o=e[s];u=o.indexOf("=");if(u>0){l=a(o.substring(0,u));if(r[l]===n){r[l]=a(o.substring(u+1))}}}}return r}}gi.$inject=["$document"];function yi(){this.$get=gi}bi.$inject=["$provide"];function bi(e){var t="Filter";function n(r,i){if(q(r)){var a={};C(r,function(e,t){a[t]=n(t,e)});return a}else{return e.factory(r+t,i)}}this.register=n;this.$get=["$injector",function(e){return function(n){return e.get(n+t)}}];n("currency",ki);n("date",Li);n("filter",wi);n("json",Hi);n("limitTo",Gi);n("lowercase",zi);n("number",Ai);n("orderBy",Ji);n("uppercase",Wi)}function wi(){return function(e,t,n){if(!S(e)){if(e==null){return e}else{throw r("filter")("notarray","Expected array but received: {0}",e)}}var i=Ei(t);var a;var o;switch(i){case"function":a=t;break;case"boolean":case"null":case"number":case"string":o=true;case"object":a=Si(t,n,o);break;default:return e}return Array.prototype.filter.call(e,a)}}function xi(e){return z(e.toString)&&e.toString!==Object.prototype.toString}function Si(e,t,n){var r=q(e)&&"$"in e;var i;if(t===true){t=ce}else if(!z(t)){t=function(e,t){if(R(e)){return false}if(e===null||t===null){return e===t}if(q(t)||q(e)&&!xi(e)){return false}e=o(""+e);t=o(""+t);return e.indexOf(t)!==-1}}i=function(i){if(r&&!q(i)){return Ci(i,e.$,t,false)}return Ci(i,e,t,n)};return i}function Ci(e,t,n,r,i){var a=Ei(e);var o=Ei(t);if(o==="string"&&t.charAt(0)==="!"){return!Ci(e,t.substring(1),n,r)}else if(H(e)){return e.some(function(e){return Ci(e,t,n,r)})}switch(a){case"object":var s;if(r){for(s in e){if(s.charAt(0)!=="$"&&Ci(e[s],t,n,true)){return true}}return i?false:Ci(e,t,n,false)}else if(o==="object"){for(s in t){var u=t[s];if(z(u)||R(u)){continue}var l=s==="$";var f=l?e:e[s];if(!Ci(f,u,n,l,l)){return false}}return true}else{return n(e,t)}break;case"function":return false;default:return n(e,t)}}function Ei(e){return e===null?"null":typeof e}ki.$inject=["$locale"];function ki(e){var t=e.NUMBER_FORMATS;return function(e,n,r){if(R(n)){n=t.CURRENCY_SYM}if(R(r)){r=t.PATTERNS[1].maxFrac}return e==null?e:Mi(e,t.PATTERNS[1],t.GROUP_SEP,t.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}Ai.$inject=["$locale"];function Ai(e){var t=e.NUMBER_FORMATS;return function(e,n){return e==null?e:Mi(e,t.PATTERNS[0],t.GROUP_SEP,t.DECIMAL_SEP,n)}}var Oi=".";function Mi(e,t,n,r,i){if(q(e))return"";var a=e<0;e=Math.abs(e);var o=e===Infinity;if(!o&&!isFinite(e))return"";var s=e+"",u="",l=false,f=[];if(o)u="∞";if(!o&&s.indexOf("e")!==-1){var c=s.match(/([\d\.]+)e(-?)(\d+)/);if(c&&c[2]=="-"&&c[3]>i+1){e=0}else{u=s;l=true}}if(!o&&!l){var h=(s.split(Oi)[1]||"").length;if(R(i)){i=Math.min(Math.max(t.minFrac,h),t.maxFrac)}e=+(Math.round(+(e.toString()+"e"+i)).toString()+"e"+-i);var p=(""+e).split(Oi);var d=p[0];p=p[1]||"";var $,v=0,m=t.lgSize,g=t.gSize;if(d.length>=m+g){v=d.length-m;for($=0;$<v;$++){if((v-$)%g===0&&$!==0){u+=n}u+=d.charAt($)}}for($=v;$<d.length;$++){if((d.length-$)%m===0&&$!==0){u+=n}u+=d.charAt($)}while(p.length<i){p+="0"}if(i&&i!=="0")u+=r+p.substr(0,i)}else{if(i>0&&e<1){u=e.toFixed(i);e=parseFloat(u)}}if(e===0){a=false}f.push(a?t.negPre:t.posPre,u,a?t.negSuf:t.posSuf);return f.join("")}function Ti(e,t,n){var r="";if(e<0){r="-";e=-e}e=""+e;while(e.length<t)e="0"+e;if(n){e=e.substr(e.length-t)}return r+e}function Vi(e,t,n,r){n=n||0;return function(i){var a=i["get"+e]();if(n>0||a>-n){a+=n}if(a===0&&n==-12)a=12;return Ti(a,t,r)}}function Ni(e,t){return function(n,r){var i=n["get"+e]();var a=u(t?"SHORT"+e:e);return r[a][i]}}function ji(e,t,n){var r=-1*n;var i=r>=0?"+":"";i+=Ti(Math[r>0?"floor":"ceil"](r/60),2)+Ti(Math.abs(r%60),2);return i}function Pi(e){var t=new Date(e,0,1).getDay();return new Date(e,0,(t<=4?5:12)-t)}function Ii(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))}function Di(e){return function(t){var n=Pi(t.getFullYear()),r=Ii(t);var i=+r-+n,a=1+Math.round(i/6048e5);return Ti(a,e)}}function Ri(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function _i(e,t){return e.getFullYear()<=0?t.ERAS[0]:t.ERAS[1]}function qi(e,t){return e.getFullYear()<=0?t.ERANAMES[0]:t.ERANAMES[1]}var Ui={yyyy:Vi("FullYear",4),yy:Vi("FullYear",2,0,true),y:Vi("FullYear",1),MMMM:Ni("Month"),MMM:Ni("Month",true),MM:Vi("Month",2,1),M:Vi("Month",1,1),dd:Vi("Date",2),d:Vi("Date",1),HH:Vi("Hours",2),H:Vi("Hours",1),hh:Vi("Hours",2,-12),h:Vi("Hours",1,-12),mm:Vi("Minutes",2),m:Vi("Minutes",1),ss:Vi("Seconds",2),s:Vi("Seconds",1),sss:Vi("Milliseconds",3),EEEE:Ni("Day"),EEE:Ni("Day",true),a:Ri,Z:ji,ww:Di(2),w:Di(1),G:_i,GG:_i,GGG:_i,GGGG:qi};var Fi=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Bi=/^\-?\d+$/;Li.$inject=["$locale"];function Li(e){var t=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;function n(e){var n;if(n=e.match(t)){var r=new Date(0),i=0,a=0,o=n[8]?r.setUTCFullYear:r.setFullYear,s=n[8]?r.setUTCHours:r.setHours;if(n[9]){i=N(n[9]+n[10]);a=N(n[9]+n[11])}o.call(r,N(n[1]),N(n[2])-1,N(n[3]));var u=N(n[4]||0)-i;var l=N(n[5]||0)-a;var f=N(n[6]||0);var c=Math.round(parseFloat("0."+(n[7]||0))*1e3);s.call(r,u,l,f,c);return r}return e}return function(t,r,i){var a="",o=[],s,u;r=r||"mediumDate";r=e.DATETIME_FORMATS[r]||r;if(F(t)){t=Bi.test(t)?N(t):n(t)}if(B(t)){t=new Date(t)}if(!L(t)||!isFinite(t.getTime())){return t}while(r){u=Fi.exec(r);if(u){o=de(o,u,1);r=o.pop()}else{o.push(r);r=null}}var l=t.getTimezoneOffset();if(i){l=be(i,t.getTimezoneOffset());t=xe(t,i,true)}C(o,function(n){s=Ui[n];a+=s?s(t,e.DATETIME_FORMATS,l):n.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return a}}function Hi(){return function(e,t){if(R(t)){t=2}return ge(e,t)}}var zi=D(o);var Wi=D(u);function Gi(){return function(e,t,n){if(Math.abs(Number(t))===Infinity){t=Number(t)}else{t=N(t)}if(isNaN(t))return e;if(B(e))e=e.toString();if(!H(e)&&!F(e))return e;n=!n||isNaN(n)?0:N(n);n=n<0&&n>=-e.length?e.length+n:n;if(t>=0){return e.slice(n,n+t)}else{if(n===0){return e.slice(t,e.length)}else{return e.slice(Math.max(0,n+t),n)}}}}Ji.$inject=["$parse"];function Ji(e){return function(t,n,r){if(!S(t))return t;n=H(n)?n:[n];if(n.length===0){n=["+"]}n=n.map(function(t){var n=false,r=t||I;if(F(t)){if(t.charAt(0)=="+"||t.charAt(0)=="-"){n=t.charAt(0)=="-";t=t.substring(1)}if(t===""){return a(u,n)}r=e(t);if(r.constant){var i=r();return a(function(e,t){return u(e[i],t[i])},n)}}return a(function(e,t){return u(r(e),r(t))},n)});return d.call(t).sort(a(i,r));function i(e,t){for(var r=0;r<n.length;r++){var i=n[r](e,t);if(i!==0)return i}return 0}function a(e,t){return t?function(t,n){return e(n,t)}:e}function o(e){switch(typeof e){case"number":case"boolean":case"string":return true;default:return false}}function s(e){if(e===null)return"null";if(typeof e.valueOf==="function"){e=e.valueOf();if(o(e))return e}if(typeof e.toString==="function"){e=e.toString();if(o(e))return e}return""}function u(e,t){var n=typeof e;var r=typeof t;if(n===r&&n==="object"){e=s(e);t=s(t)}if(n===r){if(n==="string"){e=e.toLowerCase();t=t.toLowerCase()}if(e===t)return 0;return e<t?-1:1}else{return n<r?-1:1}}}}function Yi(e){if(z(e)){e={link:e}}e.restrict=e.restrict||"AC";return D(e)}var Zi=D({restrict:"E",compile:function(e,t){if(!t.href&&!t.xlinkHref){return function(e,t){if(t[0].nodeName.toLowerCase()!=="a")return;var n=m.call(t.prop("href"))==="[object SVGAnimatedString]"?"xlink:href":"href";t.on("click",function(e){if(!t.attr(n)){e.preventDefault()}})}}}});var Ki={};C(qt,function(e,t){if(e=="multiple")return;function n(e,n,i){e.$watch(i[r],function a(e){i.$set(t,!!e)})}var r=Sn("ng-"+t);var i=n;if(e==="checked"){i=function(e,t,i){if(i.ngModel!==i[r]){n(e,t,i)}}}Ki[r]=function(){return{restrict:"A",priority:100,link:i}}});C(Ft,function(e,t){Ki[t]=function(){return{priority:100,link:function(e,n,r){if(t==="ngPattern"&&r.ngPattern.charAt(0)=="/"){var a=r.ngPattern.match(i);if(a){r.$set("ngPattern",new RegExp(a[1],a[2]));return}}e.$watch(r[t],function o(e){r.$set(t,e)})}}}});C(["src","srcset","href"],function(e){var t=Sn("ng-"+e);Ki[t]=function(){return{priority:99,link:function(n,r,i){var a=e,o=e;if(e==="href"&&m.call(r.prop("href"))==="[object SVGAnimatedString]"){o="xlinkHref";i.$attr[o]="xlink:href";a=null}i.$observe(t,function(t){if(!t){if(e==="href"){i.$set(o,null)}return}i.$set(o,t);if(c&&a)r.prop(a,i[o])})}}}});var Xi={$addControl:P,$$renameControl:ea,$removeControl:P,$setValidity:P,$setDirty:P,$setPristine:P,$setSubmitted:P},Qi="ng-submitted";function ea(e,t){e.$name=t}ta.$inject=["$element","$attrs","$scope","$animate","$interpolate"];function ta(e,t,r,i,a){var o=this,s=[];var u=o.$$parentForm=e.parent().controller("form")||Xi;o.$error={};o.$$success={};o.$pending=n;o.$name=a(t.name||t.ngForm||"")(r);o.$dirty=false;o.$pristine=true;o.$valid=true;o.$invalid=false;o.$submitted=false;u.$addControl(o);o.$rollbackViewValue=function(){C(s,function(e){e.$rollbackViewValue()})};o.$commitViewValue=function(){C(s,function(e){e.$commitViewValue()})};o.$addControl=function(e){Be(e.$name,"input");s.push(e);if(e.$name){o[e.$name]=e}};o.$$renameControl=function(e,t){var n=e.$name;if(o[n]===e){delete o[n]}o[t]=e;e.$name=t};o.$removeControl=function(e){if(e.$name&&o[e.$name]===e){delete o[e.$name]}C(o.$pending,function(t,n){o.$setValidity(n,null,e)});C(o.$error,function(t,n){o.$setValidity(n,null,e)});C(o.$$success,function(t,n){o.$setValidity(n,null,e)});ue(s,e)};oo({ctrl:this,$element:e,set:function(e,t,n){var r=e[t];if(!r){e[t]=[n]}else{var i=r.indexOf(n);if(i===-1){r.push(n)}}},unset:function(e,t,n){var r=e[t];if(!r){return}ue(r,n);if(r.length===0){delete e[t]}},parentForm:u,$animate:i});o.$setDirty=function(){i.removeClass(e,Za);i.addClass(e,Ka);o.$dirty=true;o.$pristine=false;u.$setDirty()};o.$setPristine=function(){i.setClass(e,Za,Ka+" "+Qi);o.$dirty=false;o.$pristine=true;o.$submitted=false;C(s,function(e){e.$setPristine()})};o.$setUntouched=function(){C(s,function(e){e.$setUntouched()})};o.$setSubmitted=function(){i.addClass(e,Qi);o.$submitted=true;u.$setSubmitted()}}var na=function(e){return["$timeout",function(t){var r={name:"form",restrict:e?"EAC":"E",controller:ta,compile:function i(r,a){r.addClass(Za).addClass(Ja);var o=a.name?"name":e&&a.ngForm?"ngForm":false;return{pre:function s(e,r,i,a){if(!("action"in i)){var s=function(t){e.$apply(function(){a.$commitViewValue();a.$setSubmitted()});t.preventDefault()};at(r[0],"submit",s);r.on("$destroy",function(){t(function(){ot(r[0],"submit",s)},0,false);

})}var u=a.$$parentForm;if(o){Hr(e,a.$name,a,a.$name);i.$observe(o,function(t){if(a.$name===t)return;Hr(e,a.$name,n,a.$name);u.$$renameControl(a,t);Hr(e,a.$name,a,a.$name)})}r.on("$destroy",function(){u.$removeControl(a);if(o){Hr(e,i[o],n,a.$name)}T(a,Xi)})}}}};return r}]};var ra=na();var ia=na(true);var aa=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;var oa=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;var sa=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;var ua=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;var la=/^(\d{4})-(\d{2})-(\d{2})$/;var fa=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;var ca=/^(\d{4})-W(\d\d)$/;var ha=/^(\d{4})-(\d\d)$/;var pa=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;var da={text:va,date:ba("date",la,ya(la,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ba("datetimelocal",fa,ya(fa,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:ba("time",pa,ya(pa,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ba("week",ca,ga,"yyyy-Www"),month:ba("month",ha,ya(ha,["yyyy","MM"]),"yyyy-MM"),number:xa,url:Sa,email:Ca,radio:Ea,checkbox:Aa,hidden:P,button:P,submit:P,reset:P,file:P};function $a(e){e.$formatters.push(function(t){return e.$isEmpty(t)?t:t.toString()})}function va(e,t,n,r,i,a){ma(e,t,n,r,i,a);$a(r)}function ma(e,t,n,r,i,a){var s=o(t[0].type);if(!i.android){var u=false;t.on("compositionstart",function(e){u=true});t.on("compositionend",function(){u=false;l()})}var l=function(e){if(f){a.defer.cancel(f);f=null}if(u)return;var i=t.val(),o=e&&e.type;if(s!=="password"&&(!n.ngTrim||n.ngTrim!=="false")){i=ne(i)}if(r.$viewValue!==i||i===""&&r.$$hasNativeValidators){r.$setViewValue(i,o)}};if(i.hasEvent("input")){t.on("input",l)}else{var f;var c=function(e,t,n){if(!f){f=a.defer(function(){f=null;if(!t||t.value!==n){l(e)}})}};t.on("keydown",function(e){var t=e.keyCode;if(t===91||15<t&&t<19||37<=t&&t<=40)return;c(e,this,this.value)});if(i.hasEvent("paste")){t.on("paste cut",c)}}t.on("change",l);r.$render=function(){t.val(r.$isEmpty(r.$viewValue)?"":r.$viewValue)}}function ga(e,t){if(L(e)){return e}if(F(e)){ca.lastIndex=0;var n=ca.exec(e);if(n){var r=+n[1],i=+n[2],a=0,o=0,s=0,u=0,l=Pi(r),f=(i-1)*7;if(t){a=t.getHours();o=t.getMinutes();s=t.getSeconds();u=t.getMilliseconds()}return new Date(r,0,l.getDate()+f,a,o,s,u)}}return NaN}function ya(e,t){return function(n,r){var i,a;if(L(n)){return n}if(F(n)){if(n.charAt(0)=='"'&&n.charAt(n.length-1)=='"'){n=n.substring(1,n.length-1)}if(aa.test(n)){return new Date(n)}e.lastIndex=0;i=e.exec(n);if(i){i.shift();if(r){a={yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}}else{a={yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0}}C(i,function(e,n){if(n<t.length){a[t[n]]=+e}});return new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,a.sss*1e3||0)}}return NaN}}function ba(e,t,r,i){return function a(o,s,u,l,f,c,h){wa(o,s,u,l);ma(o,s,u,l,f,c);var p=l&&l.$options&&l.$options.timezone;var d;l.$$parserName=e;l.$parsers.push(function(e){if(l.$isEmpty(e))return null;if(t.test(e)){var i=r(e,d);if(p){i=xe(i,p)}return i}return n});l.$formatters.push(function(e){if(e&&!L(e)){throw to("datefmt","Expected `{0}` to be a date",e)}if(m(e)){d=e;if(d&&p){d=xe(d,p,true)}return h("date")(e,i,p)}else{d=null;return""}});if(_(u.min)||u.ngMin){var $;l.$validators.min=function(e){return!m(e)||R($)||r(e)>=$};u.$observe("min",function(e){$=g(e);l.$validate()})}if(_(u.max)||u.ngMax){var v;l.$validators.max=function(e){return!m(e)||R(v)||r(e)<=v};u.$observe("max",function(e){v=g(e);l.$validate()})}function m(e){return e&&!(e.getTime&&e.getTime()!==e.getTime())}function g(e){return _(e)?L(e)?e:r(e):n}}}function wa(e,t,r,i){var o=t[0];var s=i.$$hasNativeValidators=q(o.validity);if(s){i.$parsers.push(function(e){var r=t.prop(a)||{};return r.badInput&&!r.typeMismatch?n:e})}}function xa(e,t,r,i,a,o){wa(e,t,r,i);ma(e,t,r,i,a,o);i.$$parserName="number";i.$parsers.push(function(e){if(i.$isEmpty(e))return null;if(ua.test(e))return parseFloat(e);return n});i.$formatters.push(function(e){if(!i.$isEmpty(e)){if(!B(e)){throw to("numfmt","Expected `{0}` to be a number",e)}e=e.toString()}return e});if(_(r.min)||r.ngMin){var s;i.$validators.min=function(e){return i.$isEmpty(e)||R(s)||e>=s};r.$observe("min",function(e){if(_(e)&&!B(e)){e=parseFloat(e,10)}s=B(e)&&!isNaN(e)?e:n;i.$validate()})}if(_(r.max)||r.ngMax){var u;i.$validators.max=function(e){return i.$isEmpty(e)||R(u)||e<=u};r.$observe("max",function(e){if(_(e)&&!B(e)){e=parseFloat(e,10)}u=B(e)&&!isNaN(e)?e:n;i.$validate()})}}function Sa(e,t,n,r,i,a){ma(e,t,n,r,i,a);$a(r);r.$$parserName="url";r.$validators.url=function(e,t){var n=e||t;return r.$isEmpty(n)||oa.test(n)}}function Ca(e,t,n,r,i,a){ma(e,t,n,r,i,a);$a(r);r.$$parserName="email";r.$validators.email=function(e,t){var n=e||t;return r.$isEmpty(n)||sa.test(n)}}function Ea(e,t,n,r){if(R(n.name)){t.attr("name",A())}var i=function(e){if(t[0].checked){r.$setViewValue(n.value,e&&e.type)}};t.on("click",i);r.$render=function(){var e=n.value;t[0].checked=e==r.$viewValue};n.$observe("value",r.$render)}function ka(e,t,n,i,a){var o;if(_(i)){o=e(i);if(!o.constant){throw r("ngModel")("constexpr","Expected constant expression for `{0}`, but saw "+"`{1}`.",n,i)}return o(t)}return a}function Aa(e,t,n,r,i,a,o,s){var u=ka(s,e,"ngTrueValue",n.ngTrueValue,true);var l=ka(s,e,"ngFalseValue",n.ngFalseValue,false);var f=function(e){r.$setViewValue(t[0].checked,e&&e.type)};t.on("click",f);r.$render=function(){t[0].checked=r.$viewValue};r.$isEmpty=function(e){return e===false};r.$formatters.push(function(e){return ce(e,u)});r.$parsers.push(function(e){return e?u:l})}var Oa=["$browser","$sniffer","$filter","$parse",function(e,t,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,a,s,u){if(u[0]){(da[o(s.type)]||da.text)(i,a,s,u[0],t,e,n,r)}}}}}];var Ma=/^(true|false|\d+)$/;var Ta=function(){return{restrict:"A",priority:100,compile:function(e,t){if(Ma.test(t.ngValue)){return function n(e,t,r){r.$set("value",e.$eval(r.ngValue))}}else{return function r(e,t,n){e.$watch(n.ngValue,function r(e){n.$set("value",e)})}}}}};var Va=["$compile",function(e){return{restrict:"AC",compile:function t(r){e.$$addBindingClass(r);return function i(t,r,a){e.$$addBindingInfo(r,a.ngBind);r=r[0];t.$watch(a.ngBind,function o(e){r.textContent=e===n?"":e})}}}}];var Na=["$interpolate","$compile",function(e,t){return{compile:function r(i){t.$$addBindingClass(i);return function a(r,i,o){var s=e(i.attr(o.$attr.ngBindTemplate));t.$$addBindingInfo(i,s.expressions);i=i[0];o.$observe("ngBindTemplate",function(e){i.textContent=e===n?"":e})}}}}];var ja=["$sce","$parse","$compile",function(e,t,n){return{restrict:"A",compile:function r(i,a){var o=t(a.ngBindHtml);var s=t(a.ngBindHtml,function u(e){return(e||"").toString()});n.$$addBindingClass(i);return function l(t,r,i){n.$$addBindingInfo(r,i.ngBindHtml);t.$watch(s,function a(){r.html(e.getTrustedHtml(o(t))||"")})}}}}];var Pa=D({restrict:"A",require:"ngModel",link:function(e,t,n,r){r.$viewChangeListeners.push(function(){e.$eval(n.ngChange)})}});function Ia(e,t){e="ngClass"+e;return["$animate",function(n){return{restrict:"AC",link:function(a,o,s){var u;a.$watch(s[e],p,true);s.$observe("class",function(t){p(a.$eval(s[e]))});if(e!=="ngClass"){a.$watch("$index",function(n,r){var o=n&1;if(o!==(r&1)){var u=i(a.$eval(s[e]));o===t?l(u):f(u)}})}function l(e){var t=c(e,1);s.$addClass(t)}function f(e){var t=c(e,-1);s.$removeClass(t)}function c(e,t){var n=o.data("$classCounts")||ze();var r=[];C(e,function(e){if(t>0||n[e]){n[e]=(n[e]||0)+t;if(n[e]===+(t>0)){r.push(e)}}});o.data("$classCounts",n);return r.join(" ")}function h(e,t){var i=r(t,e);var a=r(e,t);i=c(i,1);a=c(a,-1);if(i&&i.length){n.addClass(o,i)}if(a&&a.length){n.removeClass(o,a)}}function p(e){if(t===true||a.$index%2===t){var n=i(e||[]);if(!u){l(n)}else if(!ce(e,u)){var r=i(u);h(r,n)}}u=fe(e)}}};function r(e,t){var n=[];e:for(var r=0;r<e.length;r++){var i=e[r];for(var a=0;a<t.length;a++){if(i==t[a])continue e}n.push(i)}return n}function i(e){var t=[];if(H(e)){C(e,function(e){t=t.concat(i(e))});return t}else if(F(e)){return e.split(" ")}else if(q(e)){C(e,function(e,n){if(e){t=t.concat(n.split(" "))}});return t}return e}}]}var Da=Ia("",true);var Ra=Ia("Odd",0);var _a=Ia("Even",1);var qa=Yi({compile:function(e,t){t.$set("ngCloak",n);e.removeClass("ng-cloak")}});var Ua=[function(){return{restrict:"A",scope:true,controller:"@",priority:500}}];var Fa={};var Ba={blur:true,focus:true};C("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(e){var t=Sn("ng-"+e);Fa[t]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,a){var o=n(a[t],null,true);return function s(t,n){n.on(e,function(n){var i=function(){o(t,{$event:n})};if(Ba[e]&&r.$$phase){t.$evalAsync(i)}else{t.$apply(i)}})}}}}]});var La=["$animate",function(e){return{multiElement:true,transclude:"element",priority:600,terminal:true,restrict:"A",$$tlb:true,link:function(n,r,i,a,o){var s,u,l;n.$watch(i.ngIf,function f(n){if(n){if(!u){o(function(n,a){u=a;n[n.length++]=t.createComment(" end ngIf: "+i.ngIf+" ");s={clone:n};e.enter(n,r.parent(),r)})}}else{if(l){l.remove();l=null}if(u){u.$destroy();u=null}if(s){l=He(s.clone);e.leave(l).then(function(){l=null});s=null}}})}}}];var Ha=["$templateRequest","$anchorScroll","$animate","$sce",function(e,t,n,r){return{restrict:"ECA",priority:400,terminal:true,transclude:"element",controller:b.noop,compile:function(i,a){var o=a.ngInclude||a.src,s=a.onload||"",u=a.autoscroll;return function(i,a,l,f,c){var h=0,p,d,$;var v=function(){if(d){d.remove();d=null}if(p){p.$destroy();p=null}if($){n.leave($).then(function(){d=null});d=$;$=null}};i.$watch(r.parseAsResourceUrl(o),function m(r){var o=function(){if(_(u)&&(!u||i.$eval(u))){t()}};var l=++h;if(r){e(r,true).then(function(e){if(l!==h)return;var t=i.$new();f.template=e;var u=c(t,function(e){v();n.enter(e,null,a).then(o)});p=t;$=u;p.$emit("$includeContentLoaded",r);i.$eval(s)},function(){if(l===h){v();i.$emit("$includeContentError",r)}});i.$emit("$includeContentRequested",r)}else{v();f.template=null}})}}}}];var za=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,r,i,a){if(/SVG/.test(r[0].toString())){r.empty();e(bt(a.template,t).childNodes)(n,function o(e){r.append(e)},{futureParentElement:r});return}r.html(a.template);e(r.contents())(n)}}}];var Wa=Yi({priority:450,compile:function(){return{pre:function(e,t,n){e.$eval(n.ngInit)}}}});var Ga=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(e,t,r,i){var a=t.attr(r.$attr.ngList)||", ";var o=r.ngTrim!=="false";var s=o?ne(a):a;var u=function(e){if(R(e))return;var t=[];if(e){C(e.split(s),function(e){if(e)t.push(o?ne(e):e)})}return t};i.$parsers.push(u);i.$formatters.push(function(e){if(H(e)){return e.join(a)}return n});i.$isEmpty=function(e){return!e||!e.length}}}};var Ja="ng-valid",Ya="ng-invalid",Za="ng-pristine",Ka="ng-dirty",Xa="ng-untouched",Qa="ng-touched",eo="ng-pending";var to=new r("ngModel");var no=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(e,t,r,i,a,o,s,u,l,f){this.$viewValue=Number.NaN;this.$modelValue=Number.NaN;this.$$rawModelValue=n;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=true;this.$touched=false;this.$pristine=true;this.$dirty=false;this.$valid=true;this.$invalid=false;this.$error={};this.$$success={};this.$pending=n;this.$name=f(r.name||"",false)(e);var c=a(r.ngModel),h=c.assign,p=c,d=h,$=null,v,m=this;this.$$setOptions=function(e){m.$options=e;if(e&&e.getterSetter){var t=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)");p=function(e){var n=c(e);if(z(n)){n=t(e)}return n};d=function(e,t){if(z(c(e))){n(e,{$$$p:m.$modelValue})}else{h(e,m.$modelValue)}}}else if(!c.assign){throw to("nonassign","Expression '{0}' is non-assignable. Element: {1}",r.ngModel,Se(i))}};this.$render=P;this.$isEmpty=function(e){return R(e)||e===""||e===null||e!==e};var g=i.inheritedData("$formController")||Xi,y=0;oo({ctrl:this,$element:i,set:function(e,t){e[t]=true},unset:function(e,t){delete e[t]},parentForm:g,$animate:o});this.$setPristine=function(){m.$dirty=false;m.$pristine=true;o.removeClass(i,Ka);o.addClass(i,Za)};this.$setDirty=function(){m.$dirty=true;m.$pristine=false;o.removeClass(i,Za);o.addClass(i,Ka);g.$setDirty()};this.$setUntouched=function(){m.$touched=false;m.$untouched=true;o.setClass(i,Xa,Qa)};this.$setTouched=function(){m.$touched=true;m.$untouched=false;o.setClass(i,Qa,Xa)};this.$rollbackViewValue=function(){s.cancel($);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(B(m.$modelValue)&&isNaN(m.$modelValue)){return}var e=m.$$lastCommittedViewValue;var t=m.$$rawModelValue;var r=m.$valid;var i=m.$modelValue;var a=m.$options&&m.$options.allowInvalid;m.$$runValidators(t,e,function(e){if(!a&&r!==e){m.$modelValue=e?t:n;if(m.$modelValue!==i){m.$$writeModelToScope()}}})};this.$$runValidators=function(e,t,r){y++;var i=y;if(!a()){f(false);return}if(!o()){f(false);return}s();function a(){var e=m.$$parserName||"parse";if(v===n){u(e,null)}else{if(!v){C(m.$validators,function(e,t){u(t,null)});C(m.$asyncValidators,function(e,t){u(t,null)})}u(e,v);return v}return true}function o(){var n=true;C(m.$validators,function(r,i){var a=r(e,t);n=n&&a;u(i,a)});if(!n){C(m.$asyncValidators,function(e,t){u(t,null)});return false}return true}function s(){var r=[];var i=true;C(m.$asyncValidators,function(a,o){var s=a(e,t);if(!Q(s)){throw to("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",s)}u(o,n);r.push(s.then(function(){u(o,true)},function(e){i=false;u(o,false)}))});if(!r.length){f(true)}else{l.all(r).then(function(){f(i)},P)}}function u(e,t){if(i===y){m.$setValidity(e,t)}}function f(e){if(i===y){r(e)}}};this.$commitViewValue=function(){var e=m.$viewValue;s.cancel($);if(m.$$lastCommittedViewValue===e&&(e!==""||!m.$$hasNativeValidators)){return}m.$$lastCommittedViewValue=e;if(m.$pristine){this.$setDirty()}this.$$parseAndValidate()};this.$$parseAndValidate=function(){var t=m.$$lastCommittedViewValue;var r=t;v=R(r)?n:true;if(v){for(var i=0;i<m.$parsers.length;i++){r=m.$parsers[i](r);if(R(r)){v=false;break}}}if(B(m.$modelValue)&&isNaN(m.$modelValue)){m.$modelValue=p(e)}var a=m.$modelValue;var o=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=r;if(o){m.$modelValue=r;s()}m.$$runValidators(r,m.$$lastCommittedViewValue,function(e){if(!o){m.$modelValue=e?r:n;s()}});function s(){if(m.$modelValue!==a){m.$$writeModelToScope()}}};this.$$writeModelToScope=function(){d(e,m.$modelValue);C(m.$viewChangeListeners,function(e){try{e()}catch(n){t(n)}})};this.$setViewValue=function(e,t){m.$viewValue=e;if(!m.$options||m.$options.updateOnDefault){m.$$debounceViewValueCommit(t)}};this.$$debounceViewValueCommit=function(t){var n=0,r=m.$options,i;if(r&&_(r.debounce)){i=r.debounce;if(B(i)){n=i}else if(B(i[t])){n=i[t]}else if(B(i["default"])){n=i["default"]}}s.cancel($);if(n){$=s(function(){m.$commitViewValue()},n)}else if(u.$$phase){m.$commitViewValue()}else{e.$apply(function(){m.$commitViewValue()})}};e.$watch(function b(){var t=p(e);if(t!==m.$modelValue&&(m.$modelValue===m.$modelValue||t===t)){m.$modelValue=m.$$rawModelValue=t;v=n;var r=m.$formatters,i=r.length;var a=t;while(i--){a=r[i](a)}if(m.$viewValue!==a){m.$viewValue=m.$$lastCommittedViewValue=a;m.$render();m.$$runValidators(t,a,P)}}return t})}];var ro=["$rootScope",function(e){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:no,priority:1,compile:function t(n){n.addClass(Za).addClass(Xa).addClass(Ja);return{pre:function r(e,t,n,i){var a=i[0],o=i[1]||Xi;a.$$setOptions(i[2]&&i[2].$options);o.$addControl(a);n.$observe("name",function(e){if(a.$name!==e){o.$$renameControl(a,e)}});e.$on("$destroy",function(){o.$removeControl(a)})},post:function i(t,n,r,a){var o=a[0];if(o.$options&&o.$options.updateOn){n.on(o.$options.updateOn,function(e){o.$$debounceViewValueCommit(e&&e.type)})}n.on("blur",function(n){if(o.$touched)return;if(e.$$phase){t.$evalAsync(o.$setTouched)}else{t.$apply(o.$setTouched)}})}}}}}];var io=/(\s+|^)default(\s+|$)/;var ao=function(){return{restrict:"A",controller:["$scope","$attrs",function(e,t){var r=this;this.$options=le(e.$eval(t.ngModelOptions));if(this.$options.updateOn!==n){this.$options.updateOnDefault=false;this.$options.updateOn=ne(this.$options.updateOn.replace(io,function(){r.$options.updateOnDefault=true;return" "}))}else{this.$options.updateOnDefault=true}}]}};function oo(e){var t=e.ctrl,r=e.$element,i={},a=e.set,o=e.unset,s=e.parentForm,u=e.$animate;i[Ya]=!(i[Ja]=r.hasClass(Ja));t.$setValidity=l;function l(e,r,i){if(r===n){f("$pending",e,i)}else{c("$pending",e,i)}if(!X(r)){o(t.$error,e,i);o(t.$$success,e,i)}else{if(r){o(t.$error,e,i);a(t.$$success,e,i)}else{a(t.$error,e,i);o(t.$$success,e,i)}}if(t.$pending){h(eo,true);t.$valid=t.$invalid=n;p("",null)}else{h(eo,false);t.$valid=so(t.$error);t.$invalid=!t.$valid;p("",t.$valid)}var u;if(t.$pending&&t.$pending[e]){u=n}else if(t.$error[e]){u=false}else if(t.$$success[e]){u=true}else{u=null}p(e,u);s.$setValidity(e,u,t)}function f(e,n,r){if(!t[e]){t[e]={}}a(t[e],n,r)}function c(e,r,i){if(t[e]){o(t[e],r,i)}if(so(t[e])){t[e]=n}}function h(e,t){if(t&&!i[e]){u.addClass(r,e);i[e]=true}else if(!t&&i[e]){u.removeClass(r,e);i[e]=false}}function p(e,t){e=e?"-"+De(e,"-"):"";h(Ja+e,t===true);h(Ya+e,t===false)}}function so(e){if(e){for(var t in e){return false}}return true}var uo=Yi({terminal:true,priority:1e3});var lo=r("ngOptions");var fo=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;var co=["$compile","$parse",function(e,n){function r(e,t,r){var i=e.match(fo);if(!i){throw lo("iexp","Expected expression in form of "+"'_select_ (as _label_)? for (_key_,)?_value_ in _collection_'"+" but got '{0}'. Element: {1}",e,Se(t))}var a=i[5]||i[7];var o=i[6];var s=/ as /.test(i[0])&&i[1];var u=i[9];var l=n(i[2]?i[1]:a);var f=s&&n(s);var c=f||l;var h=u&&n(u);var p=u?function(e,t){return h(r,t)}:function C(e){return Wt(e)};var d=function(e,t){return p(e,w(e,t))};var $=n(i[2]||i[1]);var v=n(i[3]||"");var m=n(i[4]||"");var g=n(i[8]);var y={};var w=o?function(e,t){y[o]=t;y[a]=e;return y}:function(e){y[a]=e;return y};function x(e,t,n,r,i){this.selectValue=e;this.viewValue=t;this.label=n;this.group=r;this.disabled=i}return{trackBy:u,getTrackByValue:d,getWatchables:n(g,function(e){var t=[];e=e||[];Object.keys(e).forEach(function n(a){var o=w(e[a],a);var s=p(e[a],o);t.push(s);if(i[2]||i[1]){var u=$(r,o);t.push(u)}if(i[4]){var l=m(r,o);t.push(l)}});return t}),getOptions:function(){var e=[];var t={};var n=g(r)||[];var i;if(!o&&S(n)){i=n}else{i=[];for(var a in n){if(n.hasOwnProperty(a)&&a.charAt(0)!=="$"){i.push(a)}}}var s=i.length;for(var l=0;l<s;l++){var f=n===i?l:i[l];var h=n[f];var y=w(h,f);var C=c(r,y);var E=p(C,y);var k=$(r,y);var A=v(r,y);var O=m(r,y);var M=new x(E,C,k,A,O);e.push(M);t[E]=M}return{items:e,selectValueMap:t,getOptionFromViewValue:function(e){return t[d(e)]},getViewValueFromOption:function(e){return u?b.copy(e.viewValue):e.viewValue}}}}}var i=t.createElement("option"),a=t.createElement("optgroup");return{restrict:"A",terminal:true,require:["select","?ngModel"],link:function(t,n,s,u){var l=u[1];if(!l)return;var f=u[0];var c=s.multiple;var p;for(var d=0,$=n.children(),v=$.length;d<v;d++){if($[d].value===""){p=$.eq(d);break}}var m=!!p;var g=h(i.cloneNode(false));g.val("?");var y;var b=r(s.ngOptions,n,t);var w=function(){if(!m){n.prepend(p)}n.val("");p.prop("selected",true);p.attr("selected",true)};var x=function(){if(!m){p.remove()}};var S=function(){n.prepend(g);n.val("?");g.prop("selected",true);g.attr("selected",true)};var E=function(){g.remove()};if(!c){f.writeValue=function V(e){var t=y.getOptionFromViewValue(e);if(t&&!t.disabled){if(n[0].value!==t.selectValue){E();x();n[0].value=t.selectValue;t.element.selected=true;t.element.setAttribute("selected","selected")}}else{if(e===null||m){E();w()}else{x();S()}}};f.readValue=function N(){var e=y.selectValueMap[n.val()];if(e&&!e.disabled){x();E();return y.getViewValueFromOption(e)}return null};if(b.trackBy){t.$watch(function(){return b.getTrackByValue(l.$viewValue)},function(){l.$render()})}}else{l.$isEmpty=function(e){return!e||e.length===0};f.writeValue=function j(e){y.items.forEach(function(e){e.element.selected=false});if(e){e.forEach(function(e){var t=y.getOptionFromViewValue(e);if(t&&!t.disabled)t.element.selected=true})}};f.readValue=function P(){var e=n.val()||[],t=[];C(e,function(e){var n=y.selectValueMap[e];if(!n.disabled)t.push(y.getViewValueFromOption(n))});return t};if(b.trackBy){t.$watchCollection(function(){if(H(l.$viewValue)){return l.$viewValue.map(function(e){return b.getTrackByValue(e)})}},function(){l.$render()})}}if(m){p.remove();e(p)(t);p.removeClass("ng-scope")}else{p=h(i.cloneNode(false))}T();t.$watchCollection(b.getWatchables,T);function k(e,t){e.element=t;t.disabled=e.disabled;if(e.value!==t.value)t.value=e.selectValue;if(e.label!==t.label){t.label=e.label;t.textContent=e.label}}function A(e,t,n,r){var i;if(t&&o(t.nodeName)===n){i=t}else{i=r.cloneNode(false);if(!t){e.appendChild(i)}else{e.insertBefore(i,t)}}return i}function O(e){var t;while(e){t=e.nextSibling;Dt(e);e=t}}function M(e){var t=p&&p[0];var n=g&&g[0];if(t||n){while(e&&(e===t||e===n)){e=e.nextSibling}}return e}function T(){var e=y&&f.readValue();y=b.getOptions();var t={};var r=n[0].firstChild;if(m){n.prepend(p)}r=M(r);y.items.forEach(function s(e){var o;var s;var u;if(e.group){o=t[e.group];if(!o){s=A(n[0],r,"optgroup",a);r=s.nextSibling;s.label=e.group;o=t[e.group]={groupElement:s,currentOptionElement:s.firstChild}}u=A(o.groupElement,o.currentOptionElement,"option",i);k(e,u);o.currentOptionElement=u.nextSibling}else{u=A(n[0],r,"option",i);k(e,u);r=u.nextSibling}});Object.keys(t).forEach(function(e){O(t[e].currentOptionElement)});O(r);l.$render();if(!l.$isEmpty(e)){var o=f.readValue();if(b.trackBy&&!ce(e,o)||e!==o){l.$setViewValue(o);l.$render()}}}}}}];var ho=["$locale","$interpolate","$log",function(e,t,n){var r=/{}/g,i=/^when(Minus)?(.+)$/;return{link:function(a,s,u){var l=u.count,f=u.$attr.when&&s.attr(u.$attr.when),c=u.offset||0,h=a.$eval(f)||{},p={},d=t.startSymbol(),$=t.endSymbol(),v=d+l+"-"+c+$,m=b.noop,g;C(u,function(e,t){var n=i.exec(t);if(n){var r=(n[1]?"-":"")+o(n[2]);h[r]=s.attr(u.$attr[t])}});C(h,function(e,n){p[n]=t(e.replace(r,v))});a.$watch(l,function w(t){var r=parseFloat(t);var i=isNaN(r);if(!i&&!(r in h)){r=e.pluralCat(r-c)}if(r!==g&&!(i&&B(g)&&isNaN(g))){m();var o=p[r];if(R(o)){if(t!=null){n.debug("ngPluralize: no rule defined for '"+r+"' in "+f)}m=P;y()}else{m=a.$watch(o,y)}g=r}});function y(e){s.text(e||"")}}}}];var po=["$parse","$animate",function(e,i){var a="$$NG_REMOVED";var o=r("ngRepeat");var s=function(e,t,n,r,i,a,o){e[n]=r;if(i)e[i]=a;e.$index=t;e.$first=t===0;e.$last=t===o-1;e.$middle=!(e.$first||e.$last);e.$odd=!(e.$even=(t&1)===0)};var u=function(e){return e.clone[0]};var l=function(e){return e.clone[e.clone.length-1]};return{restrict:"A",multiElement:true,transclude:"element",priority:1e3,terminal:true,$$tlb:true,compile:function f(r,c){var p=c.ngRepeat;var d=t.createComment(" end ngRepeat: "+p+" ");var $=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!$){throw o("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p)}var v=$[1];var m=$[2];var g=$[3];var y=$[4];$=v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!$){throw o("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",v)}var b=$[3]||$[1];var w=$[2];if(g&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))){throw o("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",g)}var x,E,k,A;var O={$id:Wt};if(y){x=e(y)}else{k=function(e,t){return Wt(t)};A=function(e){return e}}return function M(e,t,r,f,c){if(x){E=function(t,n,r){if(w)O[w]=t;O[b]=n;O.$index=r;return x(e,O)}}var $=ze();e.$watchCollection(m,function v(r){var f,v,m=t[0],y,x=ze(),O,M,T,V,N,j,P,I,D;if(g){e[g]=r}if(S(r)){j=r;N=E||k}else{N=E||A;j=[];for(var R in r){if(r.hasOwnProperty(R)&&R.charAt(0)!=="$"){j.push(R)}}}O=j.length;I=new Array(O);for(f=0;f<O;f++){M=r===j?f:j[f];T=r[M];V=N(M,T,f);if($[V]){P=$[V];delete $[V];x[V]=P;I[f]=P}else if(x[V]){C(I,function(e){if(e&&e.scope)$[e.id]=e});throw o("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,V,T)}else{I[f]={id:V,scope:n,clone:n};x[V]=true}}for(var _ in $){P=$[_];D=He(P.clone);i.leave(D);if(D[0].parentNode){for(f=0,v=D.length;f<v;f++){D[f][a]=true}}P.scope.$destroy()}for(f=0;f<O;f++){M=r===j?f:j[f];T=r[M];P=I[f];if(P.scope){y=m;do{y=y.nextSibling}while(y&&y[a]);if(u(P)!=y){i.move(He(P.clone),null,h(m))}m=l(P);s(P.scope,f,b,T,w,M,O)}else{c(function q(e,t){P.scope=t;var n=d.cloneNode(false);e[e.length++]=n;i.enter(e,null,h(m));m=n;P.clone=e;x[P.id]=P;s(P.scope,f,b,T,w,M,O)})}}$=x})}}}}];var $o="ng-hide";var vo="ng-hide-animate";var mo=["$animate",function(e){return{restrict:"A",multiElement:true,link:function(t,n,r){t.$watch(r.ngShow,function i(t){e[t?"removeClass":"addClass"](n,$o,{tempClasses:vo})})}}}];var go=["$animate",function(e){return{restrict:"A",multiElement:true,link:function(t,n,r){t.$watch(r.ngHide,function i(t){e[t?"addClass":"removeClass"](n,$o,{tempClasses:vo})})}}}];var yo=Yi(function(e,t,n){e.$watch(n.ngStyle,function r(e,n){if(n&&e!==n){C(n,function(e,n){t.css(n,"")})}if(e)t.css(e)},true)});var bo=["$animate",function(e){return{require:"ngSwitch",controller:["$scope",function n(){this.cases={}}],link:function(n,r,i,a){var o=i.ngSwitch||i.on,s=[],u=[],l=[],f=[];var c=function(e,t){return function(){e.splice(t,1)}};n.$watch(o,function h(n){var r,i;for(r=0,i=l.length;r<i;++r){e.cancel(l[r])}l.length=0;for(r=0,i=f.length;r<i;++r){var o=He(u[r].clone);f[r].$destroy();var h=l[r]=e.leave(o);h.then(c(l,r))}u.length=0;f.length=0;if(s=a.cases["!"+n]||a.cases["?"]){C(s,function(n){n.transclude(function(r,i){f.push(i);var a=n.element;r[r.length++]=t.createComment(" end ngSwitchWhen: ");var o={clone:r};u.push(o);e.enter(r,a.parent(),a)})})}})}}}];var wo=Yi({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:true,link:function(e,t,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[];r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:t})}});var xo=Yi({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:true,link:function(e,t,n,r,i){r.cases["?"]=r.cases["?"]||[];r.cases["?"].push({transclude:i,element:t})}});var So=Yi({restrict:"EAC",link:function(e,t,n,i,a){if(!a){throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! "+"No parent directive that requires a transclusion found. "+"Element: {0}",Se(t))}a(function(e){t.empty();t.append(e)})}});var Co=["$templateCache",function(e){return{restrict:"E",terminal:true,compile:function(t,n){if(n.type=="text/ng-template"){var r=n.id,i=t[0].text;e.put(r,i)}}}}];var Eo={$setViewValue:P,$render:P};var ko=["$element","$scope","$attrs",function(e,r,i){var a=this,o=new Gt;a.ngModelCtrl=Eo;a.unknownOption=h(t.createElement("option"));a.renderUnknownOption=function(t){var n="? "+Wt(t)+" ?";a.unknownOption.val(n);e.prepend(a.unknownOption);e.val(n)};r.$on("$destroy",function(){a.renderUnknownOption=P});a.removeUnknownOption=function(){if(a.unknownOption.parent())a.unknownOption.remove()};a.readValue=function s(){a.removeUnknownOption();return e.val()};a.writeValue=function u(t){if(a.hasOption(t)){a.removeUnknownOption();e.val(t);if(t==="")a.emptyOption.prop("selected",true)}else{if(t==null&&a.emptyOption){a.removeUnknownOption();e.val("")}else{a.renderUnknownOption(t)}}};a.addOption=function(e,t){Be(e,'"option value"');if(e===""){a.emptyOption=t}var n=o.get(e)||0;o.put(e,n+1)};a.removeOption=function(e){var t=o.get(e);if(t){if(t===1){o.remove(e);if(e===""){a.emptyOption=n}}else{o.put(e,t-1)}}};a.hasOption=function(e){return!!o.get(e)}}];var Ao=function(){return{restrict:"E",require:["select","?ngModel"],controller:ko,link:function(e,t,n,r){var i=r[1];if(!i)return;var a=r[0];a.ngModelCtrl=i;i.$render=function(){a.writeValue(i.$viewValue)};t.on("change",function(){e.$apply(function(){i.$setViewValue(a.readValue())})});if(n.multiple){a.readValue=function u(){var e=[];C(t.find("option"),function(t){if(t.selected){e.push(t.value)}});return e};a.writeValue=function l(e){var n=new Gt(e);C(t.find("option"),function(e){e.selected=_(n.get(e.value))})};var o,s=NaN;e.$watch(function f(){if(s===i.$viewValue&&!ce(o,i.$viewValue)){o=fe(i.$viewValue);i.$render()}s=i.$viewValue});i.$isEmpty=function(e){return!e||e.length===0}}}}};var Oo=["$interpolate",function(e){function t(e){if(e[0].hasAttribute("selected")){e[0].selected=true}}return{restrict:"E",priority:100,compile:function(n,r){if(R(r.value)){var i=e(n.text(),true);if(!i){r.$set("value",n.text())}}return function(e,n,r){var a="$selectController",o=n.parent(),s=o.data(a)||o.parent().data(a);if(s&&s.ngModelCtrl){if(i){e.$watch(i,function u(e,i){r.$set("value",e);if(i!==e){s.removeOption(i)}s.addOption(e,n);s.ngModelCtrl.$render();t(n)})}else{s.addOption(r.value,n);s.ngModelCtrl.$render();t(n)}n.on("$destroy",function(){s.removeOption(r.value);s.ngModelCtrl.$render()})}}}}}];var Mo=D({restrict:"E",terminal:false});var To=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(!r)return;n.required=true;r.$validators.required=function(e,t){return!n.required||!r.$isEmpty(t)};n.$observe("required",function(){r.$validate()})}}};var Vo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,i,a){if(!a)return;var o,s=i.ngPattern||i.pattern;i.$observe("pattern",function(e){if(F(e)&&e.length>0){e=new RegExp("^"+e+"$")}if(e&&!e.test){throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",s,e,Se(t))}o=e||n;a.$validate()});a.$validators.pattern=function(e){return a.$isEmpty(e)||R(o)||o.test(e)}}}};var No=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(!r)return;var i=-1;n.$observe("maxlength",function(e){var t=N(e);i=isNaN(t)?-1:t;r.$validate()});r.$validators.maxlength=function(e,t){return i<0||r.$isEmpty(t)||t.length<=i}}}};var jo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(!r)return;var i=0;n.$observe("minlength",function(e){i=N(e)||0;r.$validate()});r.$validators.minlength=function(e,t){return r.$isEmpty(t)||t.length>=i}}}};if(e.angular.bootstrap){console.log("WARNING: Tried to load angular more than once.");return}qe();nt(b);h(t).ready(function(){Ve(t,Ne)})})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
(function(e,r,t){"use strict";var n=r.module("ngRoute",["ng"]).provider("$route",i),a=r.$$minErr("ngRoute");function i(){function e(e,t){return r.extend(Object.create(e),t)}var t={};this.when=function(e,a){var i=r.copy(a);if(r.isUndefined(i.reloadOnSearch)){i.reloadOnSearch=true}if(r.isUndefined(i.caseInsensitiveMatch)){i.caseInsensitiveMatch=this.caseInsensitiveMatch}t[e]=r.extend(i,e&&n(e,i));if(e){var o=e[e.length-1]=="/"?e.substr(0,e.length-1):e+"/";t[o]=r.extend({redirectTo:e},n(o,i))}return this};this.caseInsensitiveMatch=false;function n(e,r){var t=r.caseInsensitiveMatch,n={originalPath:e,regexp:e},a=n.keys=[];e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,r,t,n){var i=n==="?"?n:null;var o=n==="*"?n:null;a.push({name:t,optional:!!i});r=r||"";return""+(i?"":r)+"(?:"+(i?r:"")+(o&&"(.+?)"||"([^/]+)")+(i||"")+")"+(i||"")}).replace(/([\/$\*])/g,"\\$1");n.regexp=new RegExp("^"+e+"$",t?"i":"");return n}this.otherwise=function(e){if(typeof e==="string"){e={redirectTo:e}}this.when(null,e);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(n,i,o,c,u,l,s){var f=false,h,$,p={routes:t,reload:function(){f=true;n.$evalAsync(function(){v();m()})},updateParams:function(e){if(this.current&&this.current.$$route){e=r.extend({},this.current.params,e);i.path(w(this.current.$$route.originalPath,e));i.search(e)}else{throw a("norout","Tried updating route when with no current route")}}};n.$on("$locationChangeStart",v);n.$on("$locationChangeSuccess",m);return p;function d(e,r){var t=r.keys,n={};if(!r.regexp)return null;var a=r.regexp.exec(e);if(!a)return null;for(var i=1,o=a.length;i<o;++i){var c=t[i-1];var u=a[i];if(c&&u){n[c.name]=u}}return n}function v(e){var t=p.current;h=g();$=h&&t&&h.$$route===t.$$route&&r.equals(h.pathParams,t.pathParams)&&!h.reloadOnSearch&&!f;if(!$&&(t||h)){if(n.$broadcast("$routeChangeStart",h,t).defaultPrevented){if(e){e.preventDefault()}}}}function m(){var e=p.current;var t=h;if($){e.params=t.params;r.copy(e.params,o);n.$broadcast("$routeUpdate",e)}else if(t||e){f=false;p.current=t;if(t){if(t.redirectTo){if(r.isString(t.redirectTo)){i.path(w(t.redirectTo,t.params)).search(t.params).replace()}else{i.url(t.redirectTo(t.pathParams,i.path(),i.search())).replace()}}}c.when(t).then(function(){if(t){var e=r.extend({},t.resolve),n,a;r.forEach(e,function(t,n){e[n]=r.isString(t)?u.get(t):u.invoke(t,null,null,n)});if(r.isDefined(n=t.template)){if(r.isFunction(n)){n=n(t.params)}}else if(r.isDefined(a=t.templateUrl)){if(r.isFunction(a)){a=a(t.params)}a=s.getTrustedResourceUrl(a);if(r.isDefined(a)){t.loadedTemplateUrl=a;n=l(a)}}if(r.isDefined(n)){e["$template"]=n}return c.all(e)}}).then(function(a){if(t==p.current){if(t){t.locals=a;r.copy(t.params,o)}n.$broadcast("$routeChangeSuccess",t,e)}},function(r){if(t==p.current){n.$broadcast("$routeChangeError",t,e,r)}})}}function g(){var n,a;r.forEach(t,function(t,o){if(!a&&(n=d(i.path(),t))){a=e(t,{params:r.extend({},i.search(),n),pathParams:n});a.$$route=t}});return a||t[null]&&e(t[null],{params:{},pathParams:{}})}function w(e,t){var n=[];r.forEach((e||"").split(":"),function(e,r){if(r===0){n.push(e)}else{var a=e.match(/(\w+)(?:[?*])?(.*)/);var i=a[1];n.push(t[i]);n.push(a[2]||"");delete t[i]}});return n.join("")}}]}n.provider("$routeParams",o);function o(){this.$get=function(){return{}}}n.directive("ngView",c);n.directive("ngView",u);c.$inject=["$route","$anchorScroll","$animate"];function c(e,t,n){return{restrict:"ECA",terminal:true,priority:400,transclude:"element",link:function(a,i,o,c,u){var l,s,f,h=o.autoscroll,$=o.onload||"";a.$on("$routeChangeSuccess",d);d();function p(){if(f){n.cancel(f);f=null}if(l){l.$destroy();l=null}if(s){f=n.leave(s);f.then(function(){f=null});s=null}}function d(){var o=e.current&&e.current.locals,c=o&&o.$template;if(r.isDefined(c)){var f=a.$new();var d=e.current;var v=u(f,function(e){n.enter(e,null,s||i).then(function o(){if(r.isDefined(h)&&(!h||a.$eval(h))){t()}});p()});s=v;l=d.scope=f;l.$emit("$viewContentLoaded");l.$eval($)}else{p()}}}}}u.$inject=["$compile","$controller","$route"];function u(e,r,t){return{restrict:"ECA",priority:-400,link:function(n,a){var i=t.current,o=i.locals;a.html(o.$template);var c=e(a.contents());if(i.controller){o.$scope=n;var u=r(i.controller,o);if(i.controllerAs){n[i.controllerAs]=u}a.data("$ngControllerController",u);a.children().data("$ngControllerController",u)}c(n)}}}})(window,window.angular);
(function(e,n,t){"use strict";var r=n.module("ngTouch",[]);function a(e){return n.lowercase(e.nodeName||e[0]&&e[0].nodeName)}r.factory("$swipe",[function(){var e=10;var t={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};function r(e){var n=e.originalEvent||e;var t=n.touches&&n.touches.length?n.touches:[n];var r=n.changedTouches&&n.changedTouches[0]||t[0];return{x:r.clientX,y:r.clientY}}function a(e,r){var a=[];n.forEach(e,function(e){var n=t[e][r];if(n){a.push(n)}});return a.join(" ")}return{bind:function(n,t,o){var c,i;var u;var s;var f=false;o=o||["mouse","touch"];n.on(a(o,"start"),function(e){u=r(e);f=true;c=0;i=0;s=u;t["start"]&&t["start"](u,e)});var l=a(o,"cancel");if(l){n.on(l,function(e){f=false;t["cancel"]&&t["cancel"](e)})}n.on(a(o,"move"),function(n){if(!f)return;if(!u)return;var a=r(n);c+=Math.abs(a.x-s.x);i+=Math.abs(a.y-s.y);s=a;if(c<e&&i<e){return}if(i>c){f=false;t["cancel"]&&t["cancel"](n);return}else{n.preventDefault();t["move"]&&t["move"](a,n)}});n.on(a(o,"end"),function(e){if(!f)return;f=false;t["end"]&&t["end"](r(e),e)})}}}]);r.config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate",function(e){e.shift();return e}])}]);r.directive("ngClick",["$parse","$timeout","$rootElement",function(e,t,r){var o=750;var c=12;var i=2500;var u=25;var s="ng-click-active";var f;var l;var v;function h(e,n,t,r){return Math.abs(e-t)<u&&Math.abs(n-r)<u}function d(e,n,t){for(var r=0;r<e.length;r+=2){if(h(e[r],e[r+1],n,t)){e.splice(r,r+2);return true}}return false}function g(e){if(Date.now()-f>i){return}var n=e.touches&&e.touches.length?e.touches:[e];var t=n[0].clientX;var r=n[0].clientY;if(t<1&&r<1){return}if(v&&v[0]===t&&v[1]===r){return}if(v){v=null}if(a(e.target)==="label"){v=[t,r]}if(d(l,t,r)){return}e.stopPropagation();e.preventDefault();e.target&&e.target.blur&&e.target.blur()}function p(e){var n=e.touches&&e.touches.length?e.touches:[e];var r=n[0].clientX;var a=n[0].clientY;l.push(r,a);t(function(){for(var e=0;e<l.length;e+=2){if(l[e]==r&&l[e+1]==a){l.splice(e,e+2);return}}},i,false)}function m(e,n){if(!l){r[0].addEventListener("click",g,true);r[0].addEventListener("touchstart",p,true);l=[]}f=Date.now();d(l,e,n)}return function(t,r,a){var i=e(a.ngClick),u=false,f,l,v,h;function d(){u=false;r.removeClass(s)}r.on("touchstart",function(e){u=true;f=e.target?e.target:e.srcElement;if(f.nodeType==3){f=f.parentNode}r.addClass(s);l=Date.now();var n=e.originalEvent||e;var t=n.touches&&n.touches.length?n.touches:[n];var a=t[0];v=a.clientX;h=a.clientY});r.on("touchcancel",function(e){d()});r.on("touchend",function(e){var t=Date.now()-l;var i=e.originalEvent||e;var s=i.changedTouches&&i.changedTouches.length?i.changedTouches:i.touches&&i.touches.length?i.touches:[i];var g=s[0];var p=g.clientX;var w=g.clientY;var b=Math.sqrt(Math.pow(p-v,2)+Math.pow(w-h,2));if(u&&t<o&&b<c){m(p,w);if(f){f.blur()}if(!n.isDefined(a.disabled)||a.disabled===false){r.triggerHandler("click",[e])}}d()});r.onclick=function(e){};r.on("click",function(e,n){t.$apply(function(){i(t,{$event:n||e})})});r.on("mousedown",function(e){r.addClass(s)});r.on("mousemove mouseup",function(e){r.removeClass(s)})}}]);function o(e,t,a){r.directive(e,["$parse","$swipe",function(r,o){var c=75;var i=.3;var u=30;return function(s,f,l){var v=r(l[e]);var h,d;function g(e){if(!h)return false;var n=Math.abs(e.y-h.y);var r=(e.x-h.x)*t;return d&&n<c&&r>0&&r>u&&n/r<i}var p=["touch"];if(!n.isDefined(l["ngSwipeDisableMouse"])){p.push("mouse")}o.bind(f,{start:function(e,n){h=e;d=true},cancel:function(e){d=false},end:function(e,n){if(g(e)){s.$apply(function(){f.triggerHandler(a);v(s,{$event:n})})}}},p)}}])}o("ngSwipeLeft",-1,"swipeleft");o("ngSwipeRight",1,"swiperight")})(window,window.angular);
;(function(root,factory){
    var _=window._;
    var $=window.$;
    var angular=window.angular;
    factory.call(root,angular,_,$);
}(this,function(angular,_,$){
    'use strict';
    var appControllers=angular.module('appControllers',[]);
    appControllers.
        controller('selectController',['$scope','$routeParams','magaProvider','$rootScope','magasProvider','$http',selectController]).
        controller('makeController',['$scope','$routeParams','magaProvider','$rootScope','magasProvider','$http','parseDataProvider','transformDataProvider',makeController]).
        controller('previewController',['$scope','$routeParams','magaProvider','$rootScope','magasProvider','$http','parseDataProvider','transformDataProvider',previewController]).
        controller('musicController',['$scope','$routeParams','magaProvider','$window','$rootScope','magasProvider','$http',musicController]).
        controller('textController',['$scope','$routeParams','magaProvider','$window','$rootScope','$http','magasProvider',textController]).
        controller('lotteryController',['$scope','$routeParams','magaProvider','$window','$rootScope','magasProvider','$http',lotteryController]).
        controller('wechatController',['$scope','$routeParams','magaProvider','$window','$rootScope','magasProvider','$http','transformDataProvider',wechatController]).
        controller('shapesController',['$scope','$routeParams','magaProvider','$window','$rootScope','magasProvider','$http','transformDataProvider',shapesController]).
        controller('shapeController',['$scope','$routeParams','magaProvider','$window','$rootScope','magasProvider','$http','transformDataProvider',shapeController]).
        controller('hyperLinkController',['$scope','$routeParams','magaProvider','$window','$rootScope','magasProvider','$http',hyperLinkController]);
    //素材们页控制器
    function shapesController($scope,$routeParams,magaProvider,$window,$rootScope,magasProvider,$http,transformDataProvider){
        ldzx.ctrl.start();
        var maga=magasProvider.getNewMaga();
        if(!maga){
            window.location.hash='/';
            return;
        }
		// maga.addPage()
        $scope.current=0;
        $scope.shapes=$scope.shapes||[];
        $http({
            method:'get',
            url:'image/group/list.json',
        }).
            success(function(data){
                if(data.code===200){
                    $scope.shapeTypes=data.obj;
                    $http({
                        method:'get',
                        url:$scope.shapeTypes[0].func
                    }).
                        success(function(data){
                            if(data.code===200){
                                $scope.shapes=$scope.shapes||[];
                                $scope.shapes.splice(0,0,data.obj);
                            }
                        });
                }
            });
        $scope.request=function(index){
            if($scope.shapes[index]){
                $scope.current=index;
            }else{

                $scope.current=index;
                $http({
                        method:'get',
                        url:$scope.shapeTypes[index].func
                    }).
                        success(function(data){
                            if(data.code===200){
                                $scope.shapes=$scope.shapes||[];
                                // $scope.shapes.splice(index,0,data.obj);
                                $scope.shapes[index]=data.obj;
                                console.log(data.obj)
                                $scope.current=index;
                            }
                        });
            }
        };
        $scope.toShape=function(index){ 
            ldzx.ctrl.stop();
            maga.shapeUrl=$scope.shapes[$scope.current][index].url;
            window.location.hash='/shape';
        }
        $scope.back=function(index){
            ldzx.ctrl.stop();
            window.location.hash='/make';
        }
    }//素材页控制器
    function shapeController($scope,$routeParams,magaProvider,$window,$rootScope,magasProvider,$http,transformDataProvider){
        ldzx.ctrl.stop();
        var maga=magasProvider.getNewMaga();
        if(!maga){
            window.location.hash='/';
            return;
        }
        $scope.url=maga.shapeUrl;
        $scope.addFloatage=function(url){
            if(maga.flOrBk=='floatage'){
                magasProvider.addFloatage(null,url,'shape');
                window.location.hash='/make';
            }else if(maga.flOrBk=='background'){
                magasProvider.replaceBk(maga.pages[maga.active].uniqueId,url);
                window.location.hash='/make';
            }
        };
        $scope.shapes=function(){
            window.location.hash='/shapes';
        };
    }
    //微信分享页面控制器
    function wechatController($scope,$routeParams,magaProvider,$window,$rootScope,magasProvider,$http,transformDataProvider){
        ldzx.ctrl.stop();
        var maga=magasProvider.getNewMaga();
        if(!maga){
            window.location.hash='/';
            return;
        }
        maga.wx=maga.wx||{};
        $scope.con=maga.wx.con;
        $scope.title=maga.wx.title;
        $scope.img=maga.wx.img;
        $scope.$watch('con',function(oldV,newV,scope){
            maga.wx.con=$scope.con;
        });
        $scope.$watch('title',function(oldV,newV,scope){
            maga.wx.title=$scope.title;
        });
        // $scope.$watch('img',function(oldV,newV,scope){
        //     maga.wx.img=$scope.img;
        // });
        function request(){
            maga.wx.con=$scope.con;
            maga.wx.title=$scope.title;
            // maga.wx.img=$scope.img;
            if(maga.wx.con&&maga.wx.con&&maga.wx.img){
                // alert(4)
                // var backMaga=transformDataProvider(maga);           
                // $.ajax({
                //     'url':'inner/magazine/addOne.json',
                //     'type':"POST",
                //     'data':{'params':JSON.stringify(backMaga)},
                //     'success':function(data){
                //         console.log('rest success');
                //     }
                // });
                //zid type must be string
                $.ajax({
                    'url':'inner/magazine/publishImg.json',
                    'type':"post",
                    'dataType':'json',
                    'data':{'params':JSON.stringify({
                        zid:maga.id+'',
                        biaoti:maga.wx.title,
                        miaoshu:maga.wx.con,
                        imgePic:maga.wx.img
                    })},
                    'success':function(data){
                        if(data.code==200){
                            console.log('wechat success');
                            window.location.hash='draftBox';
                        }
                    },
                    'error':function(){
                        window.location.hash='wechatError';
                    }
                });
            }else{
                alert('请输入微信标题、内容、分享图片')
            }
        }
        var req=_.debounce(request,1000);
        $scope.rest=function(){
            //ios api
            // magasProvider.replaceImg('webview_5','fdsafdsa');
            // magasProvider.addFloatage('page_2','img/1.png','image')
            // magasProvider.replaceBk('page_2','img/img04.jpg')
            // maga.wx={
            //     con:$scope.con,
            //     title:$scope.title,
            //     img:$scope.img
            // };
            req();
        };

        $scope.back=function(){
            window.location.hash='/make';
        };
        $scope.upload=function(){
            window.location.hash='/wechat/-shareImg_btn-/'+Math.random();
        };

    }
    //选择模板页面控制器    
    function selectController($scope,$routeParams,magaProvider,$rootScope,magasProvider,$http){
        $http({
                method:'GET',
                url:'inner/magazine/getModel.json',
                url:'model/getModel.json'
            }).
            success(function(data){
                if(data.code=200){
                    $scope.elements=data.obj;//远程读取页面数据
					console.log(data)
					data.obj.unshift({
						imagePic:"img/img-default.jpg",
						id:"0",
						varName:"自定义模板",
                        order:0
					});
					console.log($scope.elements)

                }
            });
        $scope.modelId=null;//用户选择的模板url
        $scope.mubanId=null;//用户选择的模板id
        $scope.controller=function(){
            return false;
        };
        $scope.back_btn=function(){
            var hash=window.location.hash;
            hash=hash.replace(/(\-[\w\d:]{0,100}\-)/g,'');
            hash=hash+'-back_btn-';
            window.location.hash=hash;
        };
        $scope.show=function(id,name,mubanId){//弹出对话框
            $('.inputName').removeClass('hide').addClass("sZoom");
            $scope.modelId=id;
            $scope.modelName=name;
            $scope.mubanId=mubanId;
            //$(window).on('touchmove.scroll',$scope.controller);
        };
        $scope.make=function(modelId,modelName,magazineName){
            //用户从对话框进入下个页面
            // magaProvider.modelId=modelId;//模板编号放入当前杂志服务
            // magaProvider.modleName=modelName;
            // magaProvider.magazineName=magazineName;
            // console.log($scope.modelName)
			 var getBLen = function(str) {
				if (str == null) return 0;
					if (typeof str != "string"){
					str += "";
				}
				return str.replace(/[^x00-xff]/g,"01").length;
			 }
			 
            if($scope.magazineName){
				if(getBLen($scope.magazineName)>24)
				{ 	
					$('.layer-text').val("").addClass('layer-error').attr("placeholder","大于24个字符，请重新输入");
					
				}else{
					$.ajax({
						url:'model/createMagazine.json',
						data:{params:JSON.stringify({
							name:$scope.magazineName,
							uid:window.ldzx.userId||'135600',
							classification:'10301'
						})},
						dataType:'json',
						type:'get',
						success:function(data){
							if(data.code==200){
								var newMaga=new magaProvider;
								newMaga.name=$scope.magazineName||'untitled';
								newMaga.id=data.obj;
								newMaga.modelUrl=modelId;
								newMaga.modelName=modelName;
                                newMaga.mubanId=$scope.mubanId;
								magasProvider.addMaga(newMaga);//增加一个杂志
								window.location.hash='/make';
							}
						}
					 });
				}
     
            }else{
                $('.layer-text').addClass('layer-error').attr("placeholder","请输入杂志名称（小于24个字符）");
            }
            //$(window).off('touchmove.scroll',$scope.controller);
			
        };
    }
    //预览页面控制器
    function previewController($scope,$routeParams,magaProvider,$rootScope,magasProvider,$http,parseDataProvider,transformDataProvider){
        ldzx.ctrl.stop();
        var maga=magasProvider.getNewMaga();
        if(!maga){
            window.location.hash='/';
            return;
        }
        var newMaga=$.extend(true,{},maga);
        newMaga.active=0;
        $scope.name=newMaga.name==='untitled'?'未命名':newMaga.name;
        $scope.music=newMaga.music;
        $scope.pages=newMaga.pages;
        $scope.wgUser=newMaga.wgUser;
        $scope.state={};
        $scope.state.active=newMaga.active;
        $scope.rest=function(){
            var backMaga=transformDataProvider($scope); 
            console.log(newMaga)           
            console.log(backMaga);           
            $.ajax({
                'url':'http://172.16.168.251:8080/magazine_interface/inner/magazine/addOne.json',
                'type':"POST",
                'data':{'params':JSON.stringify(backMaga)},
                'success':function(data){
                    console.log('rest success');
                }
            });
        };
        $scope.modelName=magaProvider.modelName;
        $scope.modelId=magaProvider.modelId;
        $scope.back=function(){
            window.location.hash='/make';
        };
        $scope.wechat=function(){
            window.location.hash='/wechat';
        };
    }
    //制作页面控制器
    function makeController($scope,$routeParams,magaProvider,$rootScope,magasProvider,$http,parseDataProvider,transformDataProvider){
        // console.log($scope);
        
        ldzx.ctrl.stop();
        var newMaga=magasProvider.getNewMaga();
        
        if(!newMaga){
            window.location.hash='/';
            return;
        }
		if( newMaga.mubanId == 0){

             newMaga.active=-1;
			 newMaga.addPage();
             newMaga.mubanId=1;   
		}
		window.$scope=$scope;
        // console.log(newMaga);
        $scope.name=newMaga.name==='untitled'?'未命名':newMaga.name;
        $scope.music=newMaga.music=newMaga.music||{};
        $scope.id=newMaga.id;
        $scope.pages=newMaga.pages;
        $scope.state={};
        $scope.state.active=newMaga.active;
        window.magasProvider=window.magasProvider||magasProvider;//暴漏到root对象，ios和android调用
        function request(){
            var backMaga=transformDataProvider(newMaga); 
        console.log(newMaga)              
        console.log(backMaga)              
            $.ajax({
                'url':'inner/magazine/addOne.json',
                'type':"POST",
                'data':{'params':JSON.stringify(backMaga)},
                'success':function(data){
                    console.log('rest success');
                }
            });
        }
        var req=_.debounce(request,1000,true);
        $scope.rest=function(){
            //ios api
            // magasProvider.replaceImg('webview_5','fdsafdsa');
            // magasProvider.addFloatage('page_2','img/1.png','image')
            // magasProvider.replaceBk('page_2','img/img04.jpg')
            // var backMaga=transformDataProvider(newMaga); 
            // // console.log($scope)           
            // $.ajax({
            //     // 'url':'inner/magazine/addOne.json',
            //     'url':'model/page.json',
            //     'type':"POST",
            //     'data':{'params':JSON.stringify(backMaga)},
            //     'success':function(data){
            //         console.log('rest success');
            //     }
            // });
            
            req();
            window.location.hash='/preview';
        };
        $scope.modelName=magaProvider.modelName;
        $scope.modelId=magaProvider.modelId;
        $scope.copyPage=function(){
            if($scope.pages.length===0){
                return;
            }
            var copy=$scope.pages[$scope.state.active];
            var newCopy=$.extend(true,{},copy);
            _.each(newCopy.floatages,
                function(floatage,index){
                    // if(floatage.uniqueId){
                        floatage.uniqueId=_.uniqueId('floatage_');
                    // }
                });
            newCopy.uniqueId=_.uniqueId('page_');
            $scope.pages.splice($scope.state.active+1,0,newCopy);
            $scope.state.active++;
            newMaga.active++;
            window.location.hash='/make/'+Math.random();
        };
        $scope.deletePage=function(){
            $scope.pages.splice($scope.state.active,1);
            if($scope.state.active===$scope.pages.length){
                $scope.state.active--;
                newMaga.active--;
            }
        };
        $scope.addPage=function(){
            newMaga.addPage();
            window.location.hash='/make/'+Math.random();
            $scope.state.active=newMaga.active;
        };
        $scope.bk_btn=function(){
            var hash=window.location.hash;
            hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
            hash=hash+'?-bk_btn:'+newMaga.pages[newMaga.active].uniqueId+'-'+Math.random();
            newMaga.flOrBk='background';
            window.location.hash=hash;
        };
        $scope.img_btn=function(){
            var hash=window.location.hash;
            newMaga.flOrBk='floatage';
            hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
            hash=hash+'?-img_btn:'+newMaga.pages[newMaga.active].uniqueId+'-'+Math.random();
            window.location.hash=hash;
        };
        if(!newMaga.pages[0]){
            $http({
                method:'get',
                // method:'get',
                url:newMaga.modelUrl||'model/page/page.json',
                // 'url':'model/page/page.json',
                // params:{"params":JSON.stringify({"topicid":"84009"})}
            }).
                success(function(data){
                    if(!newMaga.pages[0]){//制作页面读取远程数据,生成第一页
                        var maga=parseDataProvider(data);
                        var pages=maga.pages;
                        $scope.pages=newMaga.pages=pages;
                        $scope.music=newMaga.music=maga.music;
                        $scope.id=maga.id=newMaga.id;
                        $scope.wgUser=newMaga.wgUser=maga.wgUser;
                        $scope.state.active=0;
                        newMaga.active=0;
                    }
                });
        }
        // $.ajax({
        //     url:'inner/magazine/getmagazineOneByTopic.json',
        //     type:'post',
        //     dataType:'json',
        //     data:{"params":JSON.stringify({"topicid":"84009"})},
        //     success:function(data){
        //         $scope.$apply(function(){
        //             if(!newMaga.pages[0]){//制作页面读取远程数据,生成第一页
        //                 console.log(data);
        //                 var maga=parseDataProvider(data);
        //                 console.log(maga);
        //                 var pages=maga.pages;
        //                 $scope.pages=newMaga.pages=pages;
        //                 $scope.music=newMaga.music=maga.music;
        //                 $scope.id=newMaga.id=maga.id;
        //                 $scope.wgUser=newMaga.wgUser=maga.wgUser;
        //                 $scope.state.active=0;
        //                 newMaga.active=0;
        //             }
        //         });
        //     }
        // });
        $scope.swift=magaProvider.swift;//功能菜单的切换
        $scope.control=function(){
            magaProvider.swift=!magaProvider.swift;
            $scope.swift=magaProvider.swift;
        };
        $scope.back=function(){
			newMaga.activeText=0;
            window.location.hash='/';
        };
        $scope.text=function(){
            window.location.hash='/text';
        };
        $scope.lottery=function(){
            window.location.hash='/lottery';
        };
        $scope.audio=function(){
            window.location.hash='/music';
        };
        $scope.audio=function(){
            window.location.hash='/music';
        };
        $scope.hyperLink=function(){
            window.location.hash='/hyperLink';
        };
		
    }

    //音乐页面控制器
    function musicController($scope,$routeParams,magaProvider,$window,$rootScope,magasProvider,$http){
        ldzx.ctrl.start();
        var newMaga=magasProvider.getNewMaga();

        if(!newMaga){
            window.location.hash='/';
            return;
        }
        $scope.pages=newMaga.pages;
		$scope.currentId=newMaga.music.musicId;
        $scope.tempMusic=null;
        // $http({
        //         method:'GET',
        //         url:'model/music.json'
        //     }).
        //     success(function(data){
        //         $scope.musics=data;
        //     });
        $.ajax({
            'url':'mp3/list.json',
            'dataType':'json',
            'type':'post',
            'data':{'type':'1'},
            'success':function(data){
                var music=_.groupBy(data.obj,
                    function(item,index){
                        return item.type
                    });
                var iDontWantRepeatButWhy=_.map(music,
                    function(item,index){
                        return {
                            'type':index,
                            'list':_.map(item,
                                function(item,index){
                                    return {
                                        musicId:item.id,
                                        musicName:item.name,
                                        src:item.link,
                                        switch:false
                                    }
                                })
                        }
                    });
                $scope.$apply(function(){
                    $scope.musics=iDontWantRepeatButWhy;
                });
            }
        });
        //点击返回
        $scope.back=function(){
            window.location.hash="/make"
        };
        //选取音乐
		$scope.fw=false;
        $scope.setMusic=function(id,src){

            $scope.id=id;
            $scope.src=src;
        };
        //点击完成
        $scope.yes=function(){
            newMaga.music.musicId=$scope.id;
            newMaga.music.src=$scope.src;
        };
        $scope.addMusic=function(){
            
        };
    }

    //编辑文本页面控制器
    function textController($scope,$routeParams,magaProvider,$window,$rootScope,$http,magasProvider){
        
        if(!magasProvider.getNewMaga()){
            window.location.hash='/';
            return;
        }
		var maga=magasProvider.getNewMaga();
		 if(maga.activeText)
		 {
			 $scope.value=maga.activeText.value.join('\n');
			 $scope.fontSize = maga.activeText.style.fontSize;
			 $scope.fontcolor = maga.activeText.style.color;
			 $scope.backcolor = maga.activeText.style.backgroundColor;
             $scope.thisAlign = maga.activeText.style.textAlign;
		 }
		 

		
		$scope.success_text=function(){
            
			if(maga.activeText)
			{
				maga.activeText.value=$scope.value.split('\n');
				maga.activeText.style.fontSize = $scope.fontSize;
				maga.activeText.style.color = $scope.fontcolor;
				maga.activeText.style.backgroundColor = $scope.backcolor;
                maga.activeText.style.textAlign = $scope.thisAlign;	
		 	}else{
				$scope.addFloatage();
			}
			maga.activeText=0;
			
		}
        //点击返回
        $scope.back=function(){
            window.location.hash="/make"
        };
        //点击完成
        $scope.yes=function(){
            if($scope.text){
                magaProvider.texts.push($scope.text);
            }

            if(!$scope.value) 
            { 
                alert("请输入您要编辑的内容"); 
                
            }else{
                $scope.success_text();
                $scope.back();
            }
        };
        //
        $scope.aligns = [
            {"name" : "左对齐" , "val":"left"},
            {"name" : "中对齐" , "val":"center"},
            {"name" : "右对齐" , "val":"right" }
        ];
        
        $scope.setAligh=function(index){
            $scope.thisAlign = $scope.aligns[index].val;
        }
        
        $scope.colors = [
            {"name":"","val":"#000000"},
            {"name":"","val":"#ffffff"},
            {"name":"","val":"#3c3c3c"},
            {"name":"","val":"#5e5f8b"},
            {"name":"","val":"#feff28"},
            {"name":"","val":"#feb938"},
            {"name":"","val":"#ff6e3f"},
            {"name":"","val":"#e9402d"},
            {"name":"","val":"#e83f56"},
            {"name":"","val":"#fe6d96"},
            {"name":"","val":"#fe9eff"},
            {"name":"","val":"#d081fe"},
            {"name":"","val":"#945afe"},
            {"name":"","val":"#4b4efb"},
            {"name":"","val":"#0078f1"},
            {"name":"","val":"#0036c1"},
            {"name":"","val":"#0078f1"},
            {"name":"","val":"#00b3f3"},
            {"name":"","val":"#00d37e"},
            {"name":"","val":"#76e115"},
            {"name":"","val":"#c3ff2e"},
        ];
        
        //背景色
        $scope.backcolorFn = function(n){
            $scope.backcolor = $scope.colors[n].val;
            // $scope.backcolorname = $scope.colors[n].name;
        }
        
        //字体颜色
        $scope.fontcolorFn = function(n){
            $scope.fontcolor = $scope.colors[n].val ;
            // $scope.fontcolorname = $scope.colors[n].name;
        }
        //增加一个漂浮物
        $scope.addFloatage=function(){
            var maga=magasProvider.getNewMaga();
            console.log(maga.pages.length,maga.active)
            console.log(maga.pages[maga.active])
            maga.pages[maga.active].floatages.push({
                effects:[],
                style:{
                    color:$scope.fontcolor,
                    backgroundColor:$scope.backcolor,
                    textAlign:$scope.thisAlign,
                    width:'640px',
                    height:'auto',
                    top:'200px',
                    left:0,
                    fontSize:$scope.fontSize||'30px'
                },
                type:'text',
                value:$scope.value.split('##'),
                uniqueId:_.uniqueId('floatage_')
            });

           
        };
    }

    //涂抹页面控制器
    function lotteryController($scope,$routeParams,magaProvider,$window,$rootScope,magasProvider,$http){
        if(!magasProvider.getNewMaga()){
            window.location.hash='/';
            return;
        }
        var data={
            "imgs":[
                {
                    "src": "img/img05.jpg",
                    "name":"名字1"
                },
                {
                    "src": "img/img05.jpg",
                    "name":"名字2"
                },
                {
                    "src": "img/img05.jpg",
                    "name":"名字3"
                }
            ],
            "show":false,
            "column":["15%","30%","60%"]
        };
        $scope.lottery=data;
        $scope.lottery.this_effects = $scope.lottery.imgs[0].name;
        $scope.lottery.src=$scope.lottery.imgs[0].src;
        $scope.lottery.getthis=function(n)
            {
                $scope.lottery.act=n;   
        };
        //点击返回
        $scope.back=function(){
            window.location.hash="/make"
        };
        //点击完成
        $scope.yes=function(){
            var maga=magasProvider.getNewMaga();
            var page=maga.pages[maga.active];
            var value={
                name:$scope.lottery.this_effects,
                scale:parseInt($scope.lottery.column[$scope.lottery.act]),
                content:$scope.content,
                src:$scope.lottery.src
            };
            var lottery=_.findWhere(page.effects,{'type':'lottery'});
            if(lottery){
                lottery.value=value;
                lottery.ended=false;
            }else{
                page.effects.push({
                    type:'lottery',
                    value:value,
                    ended:false
                });
            }
        };
        //     $http({
        //             method:'GET',
        //             url:'model/lottery.json'
        //         }).
        //         success(function(data){
        //             $scope.lottery=data;
    				// $scope.lottery.this_effects = $scope.lottery.imgs[0].name;
        //             $scope.lottery.src=$scope.lottery.imgs[0].src;
        //             $scope.lottery.getthis=function(n)
        //                 {
        //                     $scope.lottery.act=n;   
        //             };
        //     });
		$scope.choose=function(index){
			$scope.lottery.this_effects=$scope.lottery.imgs[index].name;
            $scope.lottery.src=$scope.lottery.imgs[index].src;
			$scope.lottery.show = false;
		}
		
    }

    //超链接页面控制器
    function hyperLinkController($scope,$routeParams,magaProvider,$window,$rootScope,magasProvider,$http){
        if(!magasProvider.getNewMaga()){
            window.location.hash='/';
            return;
        }
        //点击返回
        $scope.back=function(){
            window.location.hash="/make"
        };
        //点击完成
        $scope.yes=function(){
            if(!$scope.value)
                {
                    alert("请输入文字") 
                    
                }
            else{
                    $scope.addFloatage();
                    $scope.back();
                }
            
        };
        //增加一个漂浮物
        $scope.addFloatage=function(){

            var maga=magasProvider.getNewMaga();
            var href=$scope.href;
            if(href){
                href=href.replace('http://','');
            }else{
                href='www.5.cn';
            }
            maga.pages[maga.active].floatages.push({
                effects:[],
                style:{
                    color:$scope.fontcolor,
                    backgroundColor:$scope.backcolor,
                    fontSize:$scope.fontSize,
                    borderRadius:$scope.radius,
                    width:'auto',
                    height:'auto',
                    textAlign:'center',
                    left:'0',
                    top:'300px',
                    padding:'20px',
                    wordBreak:'break-all',
                },
                type:'btn',
                href:href,
                value:$scope.value,
                uniqueId:_.uniqueId('floatage_')
            });
        };
	
    	$scope.colors = [
            {"name":"","val":"#000000"},
    	 	{"name":"","val":"#ffffff"},
            {"name":"","val":"#3c3c3c"},
            {"name":"","val":"#5e5f8b"},
            {"name":"","val":"#feff28"},
            {"name":"","val":"#feb938"},
            {"name":"","val":"#ff6e3f"},
            {"name":"","val":"#e9402d"},
            {"name":"","val":"#e83f56"},
            {"name":"","val":"#fe6d96"},
            {"name":"","val":"#fe9eff"},
            {"name":"","val":"#d081fe"},
            {"name":"","val":"#945afe"},
            {"name":"","val":"#4b4efb"},
            {"name":"","val":"#0078f1"},
            {"name":"","val":"#0036c1"},
            {"name":"","val":"#0078f1"},
            {"name":"","val":"#00b3f3"},
            {"name":"","val":"#00d37e"},
            {"name":"","val":"#76e115"},
            {"name":"","val":"#c3ff2e"},
    	 ];
	 
    	//背景色
    	$scope.backcolorFn = function(n){
    		$scope.backcolor = $scope.colors[n].val || "#000";
    		// $scope.backcolorname = $scope.colors[n].name;
    	}
    	
    	//字体颜色
    	$scope.fontcolorFn = function(n){
    		$scope.fontcolor = $scope.colors[n].val || "#000";;
    		// $scope.fontcolorname = $scope.colors[n].name;
    	}
    }
}));
;(function(root,factory){
    var angular=window.angular;
    factory.call(root,angular);
}(this,function(angular){
    'use strict';
    angular.module('appServices',[]).
        provider('magaProvider',magaProvider).
        provider('magasProvider',magasProvider).
        provider('flipProvider',flipProvider).
        provider('parseDataProvider',parseDataProvider).
        provider('transformDataProvider',transformDataProvider).
        provider('findActiveProvider',findActiveProvider).
        provider('tapProvider',tapProvider).
        provider('lotteryProvider',lotteryProvider);
    //寻找激活的漂浮物;
    function findActiveProvider(){
        return {
            $get:function(){
                return function(maga,id){
                    var target;
                    _.find(maga.pages,
                        function(page,index){
                            return _.find(page.floatages,
                                        function(floatage,index){
                                            if(floatage.uniqueId===id){
                                                target=floatage;
                                            }
                                            return floatage.uniqueId===id;
                                        });
                        });
                    return target;
                };
            }
        };
    }
    //数据解析服务
    function parseDataProvider(){
        return {
            $get:function(){
                return function(data) {
                    var maga = {};
                    data = data.obj;
                    // maga.id = data.id;
                    // maga.wgUser = data.wgUser;
                    // maga.media={
                    //     audio:{}
                    // };
                    maga.id=data.id;
                    maga.wgUser=data.wgUser;
                    maga.music={
                        src:data.sound,
                        musicId:"2"
                    }; 
                    maga.pages = _.map(data.pageslist,
                        function(item, index) {
                            var page = {
                                uniqueId:_.uniqueId('page_'),
                                order: item.pageNum,
                                effects:[],
                                background: {
                                    style:{
                                        //背景图片样式
                                        backgroundColor: item.backgroundImage.fillcolor,
                                        backgroundImage: item.backgroundImage.image&&'url('+item.backgroundImage.image.url+')',
                                        backgroundRepeat:'no-repeat',
                                        // backgroundPosition:'30px 30px',
                                        backgroundSize:'cover',
                                        // background:item.backgroundImage.image?item.backgroundImage.image.url:''
                                    },
                                    effects:_.map(item.backgroundImage.styles,
                                        function(item,index){
                                            return item.key;
                                        })
                                },
                                floatages: _.map(item.elementsList,
                                    function(item, index) {
                                        var element;
                                        switch (item.elementType) {
                                            case 'img':
                                                element={
                                                    type:'image',
                                                    style:{
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.elementChild.width,
                                                        height:item.elementChild.height,
                                                        position:"absolute",
                                                        //背景色
                                                        // backgroundColor:item.elementChild.fillColor,
                                                        opacity:item.opacityOpacity,
                                                        // transform:item.rotation,
                                                        // shadow:item.shadow,
                                                    },
                                                    src:item.elementChild.image.url,
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                            case 'shape':
                                                element={
                                                    type:'shape',
                                                    style:{
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.elementChild.width,
                                                        height:item.elementChild.height,
                                                        backgroundColor:item.elementChild.fillColor,
                                                        opacity:item.opacityOpacity,
                                                        shadow:item.shadow||'',
                                                    },
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                            case 'btn':
                                                element={
                                                    type:'btn',
                                                    style:{
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.elementChild.width,
                                                        height:item.elementChild.height,
                                                        color:item.elementChild.fontcolor,
                                                        opacity:item.opacityOpacity,
                                                        // transform:item.rotation,
                                                        shadow:item.shadow,
                                                        fontSize:item.elementChild.fontsize,
                                                        backgroundColor:item.elementChild.backgroundcolor,
                                                        borderColor:item.elementChild.border,
                                                        borderWidth:item.elementChild.borderstyle,
                                                        borderStyle:item.elementChild.bordercrude,
                                                    },
                                                    src:item.elementChild.url,
                                                    value:item.elementChild.context,
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                            case 'text':
                                                element={
                                                    type:'text',
                                                    style:{
                                                        alignmentFunction:item.elementChild.alignmentFunction||'',
                                                        left:item.positionX,
                                                        top:item.positionY,
                                                        width:item.width,
                                                        height:item.height,
                                                        backgroundColor:item.elementChild.backgroundColor,
                                                        fontColor:item.elementChild.color,
                                                        opacity:item.opacityOpacity,
                                                        transform:item.rotation,
                                                        shadow:item.shadow,
                                                        borderColor:item.border,
                                                        fontSize:item.elementChild.fontsize,
                                                        // backgroundColor:item.elementChild.backgroundColor,
                                                        // borderColor:item.elementChild.border,
                                                        borderWidth:item.elementChild.borderStyle,
                                                        fontStyle:item.elementChild.fontStyle,
                                                        lineHeight:item.elementChild.lineHeight,
                                                        borderStyle:item.elementChild.bordercrude,
                                                    },
                                                    value:item.elementChild.content.split('##'),
                                                    effects:_.map(item.styles,
                                                        function(item,index){
                                                            return item.key;
                                                        })
                                                };
                                                break;
                                        }
                                        if(element)element.uniqueId=_.uniqueId('floatage_');
                                        return element;
                                    })
                            };
                            return page;
                        });
                    return maga;
                };
            }
        }
    }
    //数据转换服务
    function transformDataProvider(){
        return {
            $get:function(){
                 
                return  function(data) {
                    // console.log(data)
                            return {
                                "magazine": {
                                    // "music":{
                                    //     "musicId":data.music.musicId,
                                    //     "src":data.music.musicId
                                    // },
                                    
                                    // fenxiangnote:data.wx.con||'',
                                    // fenxiangtitle:data.wx.title||'',
                                    // fenxiangimg:data.wx.img||'',
                                    "sound":data.music.src,
                                    "id":data.id,
                                    // "wgUser":data.wgUser,
                                    "varName":data.name,
                                    "pageslist": _.map(data.pages,
                                        function(item, index) {
                                            var page= {
                                                "effects":_.map(item.effects,
                                                    function(item,index){
                                                        var effects={};
                                                        effects.type=item.type;
                                                        effects.value=JSON.stringify(item.value);
                                                        // item.value=JSON.stringify(item.value);
                                                        // console.log(item.value);
                                                        return effects;
                                                    }),
                                                "backgroundImage": {
                                                    "image": {
                                                        "url": item.background.style.backgroundImage || "",
                                                        "sourceName": "",
                                                        "uid": "",
                                                        "type": ""
                                                    },
                                                    "fillcolor":item.background.style.backgroundColor||"",
                                                    "pageId": index,
                                                    "opacityOpacity": item.background.style.opacity||"",
                                                    "fuzzy": "",
                                                    "id": index
                                                },
                                                "elementsList": _.map(item.floatages,
                                                    function(item, index) {
                                                        var element;
                                                        switch (item.type) {
                                                            case 'image':
                                                                element = {
                                                                    "elementType": "img",
                                                                    "elementChild": {
                                                                        "fuzzyImg":0,
                                                                        "width":item.style.width,
                                                                        "height":item.style.height,
                                                                        "image": {
                                                                            "url": item.src,
                                                                            "sourceName": "",
                                                                            "uid": "",
                                                                            "id": "",
                                                                            "type": ""
                                                                        }
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "pageId": "",
                                                                    "opacityOpacity": item.style.opacity||"",
                                                                    "fillet": "",
                                                                    "rotation": "",
                                                                    "positionX": item.style.left||"",
                                                                    "positionY": item.style.top||"",
                                                                    "shadow": item.style.boxShadow||"",
                                                                    "id": ""
                                                                };
                                                                break;
                                                            case 'shape':
                                                                element = {
                                                                    "elementType": "shape",
                                                                    "elementChild": {
                                                                        "fillColor": item.style.backgroundColor||"",
                                                                        "styleId": "",
                                                                        "height": item.style.height||"",
                                                                        "width": item.style.width||""
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "opacityOpacity": item.style.opacity||"",
                                                                    "fillet": item.style.backgroundColor||"",
                                                                    "rotation": "",
                                                                    "positionX": item.style.left||"",
                                                                    "positionY": item.style.top||"",
                                                                    "shadow": item.style.boxShadow||"",
                                                                    "id": ""
                                                                };
                                                                break;
                                                            case 'btn':
                                                                element = {
                                                                    "elementType": "btn",
                                                                    "elementChild": {
                                                                        "fontcolor": item.style.color||"",
                                                                        "fontsize":item.style.fontSize,
                                                                        "backgroundcolor": item.style.backgroundColor||"",
                                                                        "border": item.style.borderColor||"",
                                                                        "borderstyle": item.style.borderWidth||"",
                                                                        "bordercrude": item.style.borderStyle||"",
                                                                        "height": item.style.height||"",
                                                                        "width": item.style.width||"",
                                                                        "url": item.href||"",
                                                                        "context": item.value||""
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "height": item.style.height||"",
                                                                    "width": item.style.width||"",
                                                                    opacityOpacity: item.style.opacity||"",
                                                                    fillet: item.style.borderRadius||"",
                                                                    rotation: "",
                                                                    positionX: item.style.left||"",
                                                                    positionY: item.style.top||"",
                                                                    shadow: item.style.boxShadow||"",
                                                                    id: ""
                                                                };
                                                                break;
                                                            case 'text':
                                                                element = {
                                                                    "elementType": 'text',
                                                                    "elementChild": {
                                                                        "width":item.style.width,
                                                                        "height":item.style.height,
                                                                        "alignmentFunction": item.style.textAlign||"",
                                                                        "fontsize": item.style.fontSize||"",
                                                                        "border": item.style.borderColor||"",
                                                                        "bordercrude": item.style.borderStyle||"",
                                                                        "borderStyle": item.style.borderWidth||"",
                                                                        "fontstyle": item.style.fontStyle||"",
                                                                        "color": item.style.color||"",
                                                                        "backgroundColor": item.style.backgroundColor||"",
                                                                        "lineHeight": item.style.lineHeight||"",
                                                                        "content": item.value.join('##')||""
                                                                    },
                                                                    styles:_.map(item.effects,
                                                                        function(item,index){
                                                                            return {
                                                                                'type':'action',
                                                                                'key':item
                                                                            }
                                                                        }),
                                                                    "width":item.style.width,
                                                                    "height":item.style.height,
                                                                    "opacityOpacity": item.style.opacity||"",
                                                                    "fillet": "",
                                                                    "rotation": "",
                                                                    "positionX": item.style.left||0,
                                                                    "positionY": item.style.top||"",
                                                                    "shadow": item.style.boxShadow||"",
                                                                    "id": ""
                                                                };
                                                                break;
                                                        }
                                                        if(item.effects.length>0){//配合后台做数据检测才这样写的
                                                            element.styles=_.map(item.effects,
                                                                function(item,index){
                                                                    return {
                                                                        type:'action',
                                                                        key:item
                                                                    };
                                                                });
                                                        }
                                                        if(item.style.animationDuration){
                                                            element.animationDuration=item.style.animationDuration;
                                                        }
                                                        if(item.style.animationDelay){
                                                            element.animationDelay=item.style.animationDelay;
                                                        }
                                                        return element;
                                                    })
                                            }
                                            if(item.background.effects.length>0){//配合后台做数据检测才这样写的
                                                page.style=_.map(item.background.effects,
                                                    function(item,index){
                                                        return {
                                                            type:'action',
                                                            key:item
                                                        }
                                                    });
                                            }
                                            if(!page.backgroundImage.image.url){
                                                delete page.backgroundImage.image;
                                            }
                                            return page;
                                        })
                                }
                            }
                        }
            }
        }
    }
    // 涂抹服务
    function lotteryProvider(){
        return {
            $get:function(){
                function Lottery(node, cover, coverType, width, height, drawPercentCallback,scale,txt) {
                    //canvas
                    this.conNode = node; 

                    // 背景canvas
                    this.background = null;
                    this.backCtx = null;

                    // 蒙板canvas
                    this.mask = null;
                    this.maskCtx = null;

                    // 背景图
                    this.lottery = null;
                    this.lotteryType = 'image';

                    // 蒙板图
                    this.cover = cover || "#000"; 
                    this.coverType = coverType;
                    this.pixlesData = null;

                    // canvas宽高
                    this.width = width;
                    this.height = height;

                    this.lastPosition = null;
                    // 回调函数
                    this.drawPercentCallback = drawPercentCallback;

                    this.vail = false;
                    this.scale=scale;
                    this.txt=txt;
                }

                Lottery.prototype = {
                    // 创建元素
                    createElement: function (tagName, attributes) {
                        var ele = document.createElement(tagName);
                        for (var key in attributes) {
                            ele.setAttribute(key, attributes[key]);
                        }
                        return ele;
                    },

                    // 获取当前canvas透明像素的百分比
                    getTransparentPercent: function(ctx, width, height) {
                        // 获取画布的像素点
                        var imgData = ctx.getImageData(0, 0, width, height),
                            pixles = imgData.data,
                            transPixs = [];

                        // 计算画布中，透明程度（第四个值为透明度0-255）
                        for (var i = 0, j = pixles.length; i < j; i += 4) {
                            var a = pixles[i + 3];
                            if (a < 128) {
                                transPixs.push(i);
                            }
                        }
                        return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
                    },

                    // 重置画布
                    resizeCanvas: function (canvas, width, height) {
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').clearRect(0, 0, width, height);
                    },

                    resizeCanvas_w : function(canvas, width, height){
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').clearRect(0, 0, width, height);

                        // canvas画布，生成对应的DOM开始--(前者判断是否生成背景图)
                        if(this.vail) this.drawLottery();
                        else this.drawMask();
                    },

                    // 画布上画点
                    drawPoint: function (x, y, fresh) {
                        this.maskCtx.beginPath();
                        this.maskCtx.arc(x, y, 30, 0, Math.PI * 2);
                        this.maskCtx.fill();

                        // 蒙板-路径还是记录
                        this.maskCtx.beginPath();

                        // 画笔大小
                        this.maskCtx.lineWidth = 60;
                        // 前者是线的末端样式，后者是线连接处的样式---圆
                        this.maskCtx.lineCap = this.maskCtx.lineJoin = 'round';

                        // 画点
                        if (this.lastPosition) {
                            this.maskCtx.moveTo(this.lastPosition[0], this.lastPosition[1]);
                        }
                        this.maskCtx.lineTo(x, y);
                        this.maskCtx.stroke();

                        this.lastPosition = [x,y];

                        this.mask.style.zIndex = (this.mask.style.zIndex == 20) ? 21 : 20;
                    },

                    // 事件处理
                    bindEvent: function () {
                        var _this = this;
                        // 判断是否为移动端
                        var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
                        var clickEvtName = device ? 'touchstart' : 'mousedown';
                        var moveEvtName = device? 'touchmove': 'mousemove';
                        if (!device) {
                            var isMouseDown = false;
                            _this.conNode.addEventListener('mouseup', up, false);
                        } else {
                            _this.conNode.addEventListener("touchmove", move, false);
                            _this.conNode.addEventListener('touchend', end, false);

                        }
                        function up(e) {
                            e.preventDefault();

                            isMouseDown = false;
                            var per = _this.getTransparentPercent(_this.maskCtx, _this.width, _this.height);

                            if(per>=_this.scale){
                                // 执行回调函数
                                if(typeof(_this.drawPercentCallback)=='function') _this.drawPercentCallback();
                            }
                        }
                        function move(e) {
                                if (isMouseDown) {
                                    e.preventDefault();
                                }
                                if (e.cancelable) { e.preventDefault(); }else{window.event.returnValue = false;}
                            }

                        function end(e) {
                            isMouseDown = false;
                            var per = _this.getTransparentPercent(_this.maskCtx, _this.width, _this.height);
                            if(per>=_this.scale){
                                // 执行回调函数
                                if(typeof(_this.drawPercentCallback)=='function') _this.drawPercentCallback(_this.conNode,move,end);
                            }
                        }

                        // move事件来画点
                        this.mask.addEventListener(clickEvtName, function (e) {
                            e.preventDefault();

                            // 记录开始move
                            isMouseDown = true;

                            var x = (device ? e.touches[0].pageX : e.pageX||e.x);
                            var y = (device ? e.touches[0].pageY : e.pageY||e.y);

                            // 画点
                            _this.drawPoint(x, y,isMouseDown);
                        }, false);

                        this.mask.addEventListener(moveEvtName, function (e) {
                            e.preventDefault();

                            // 记录是否开始move
                            if (!isMouseDown)  return false; 
                            e.preventDefault();

                            var x = (device ? e.touches[0].pageX : e.pageX||e.x);
                            var y = (device ? e.touches[0].pageY : e.pageY||e.y);

                            // 画点
                            _this.drawPoint(x, y,isMouseDown);
                        }, false);
                    },

                    // 画背景图
                    drawLottery: function () {
                        if (this.lotteryType == 'image') {
                            var image = new Image(),
                                _this = this;
                            image.onload = function () {
                                this.width = _this.width;
                                this.height = _this.height;                
                                _this.resizeCanvas(_this.background, _this.width, _this.height);
                                _this.backCtx.drawImage(this, 0, 0, _this.width, _this.height);
                                _this.drawMask();
                            }
                            image.src = this.lottery;
                        } else if (this.lotteryType == 'text') {
                            this.width = this.width;
                            this.height = this.height;
                            this.resizeCanvas(this.background, this.width, this.height);
                            this.backCtx.save();
                            this.backCtx.fillStyle = '#FFF';
                            this.backCtx.fillRect(0, 0, this.width, this.height);
                            this.backCtx.restore();
                            this.backCtx.save();
                            var fontSize = 30;
                            this.backCtx.font = 'Bold ' + fontSize + 'px Arial';
                            this.backCtx.textAlign = 'center';
                            this.backCtx.fillStyle = '#F60';
                            this.backCtx.fillText(this.lottery, this.width / 2, this.height / 2 + fontSize / 2);
                            this.backCtx.restore();
                            this.drawMask();
                        }
                    },

                    // 画蒙板
                    drawMask: function() {
                        var _this=this;
                        if (this.coverType == 'color') {
                            this.maskCtx.fillStyle = this.cover;
                            this.maskCtx.fillRect(0, 0, this.width, this.height);
                            this.maskCtx.globalCompositeOperation = 'destination-out';
                        } else if (this.coverType == 'image'){
                            var image = new Image(),
                                _this = this;
                            image.onload = function () {
                                _this.resizeCanvas(_this.mask, _this.width, _this.height);

                                var android = (/android/i.test(navigator.userAgent.toLowerCase()));

                                _this.maskCtx.globalAlpha=0.98;
                                // _this.maskCtx.drawImage(this, 0, 0,_this.width, _this.height);
                                _this.maskCtx.drawImage(this,0,0,this.width,this.height,0,0,_this.width,_this.height);
                                
                                var fontSize = 50;
                                var txt = _this.txt;
                                var gradient=_this.maskCtx.createLinearGradient(0,0,_this.width,0);
                                    gradient.addColorStop("0","#fff");
                                    gradient.addColorStop("1.0","#000");

                                _this.maskCtx.font = 'Bold ' + fontSize + 'px Arial';
                                _this.maskCtx.textAlign = 'left';
                                _this.maskCtx.fillStyle = gradient;
                                txt&&_this.maskCtx.fillText(txt,_this.width/2-_this.maskCtx.measureText(txt).width/2, 100);

                                _this.maskCtx.globalAlpha=1;

                                _this.maskCtx.globalCompositeOperation = 'destination-out';
                            }
                            image.src = this.cover;
                        }
                    },

                    // 函数初始化
                    init: function (lottery, lotteryType) {
                        // 判断是否传入背景图参数，并储存值
                        // 生成背景图的DOM
                        if(lottery){
                            this.lottery = lottery;
                            this.lottery.width = this.width;
                            this.lottery.height = this.height;
                            this.lotteryType = lotteryType || 'image';

                            this.vail = true;
                        }
                        if(this.vail){
                            this.background = this.background || this.createElement('canvas', {
                                style: 'position:fixed;left:50%;top:0;width:640px;margin-left:-320px;height:100%;background-color:transparent;'
                            });
                        }

                        // 生成蒙板DOM
                        this.mask = this.mask || this.createElement('canvas', {
                            style: 'background-color:transparent;position:absolute;'
                        });
                        this.mask.classList.add('lottery');
                        this.mask.style.zIndex = 9999;

                        // 将目标wrapDOM的HTML内容全部清空--(canvas-clear）
                        if (true){
                            if(this.vail) this.conNode.appendChild(this.background);
                            this.conNode.appendChild(this.mask);
                            this.bindEvent();
                        }
                        if(this.vail) this.backCtx = this.backCtx || this.background.getContext('2d');
                        this.maskCtx = this.maskCtx || this.mask.getContext('2d');

                        // canvas画布，生成对应的DOM开始--(前者判断是否生成背景图)
                        if(this.vail) this.drawLottery();
                        else this.drawMask();

                        var _this = this;
                        window.addEventListener('resize',function(){
                            // canvas宽高
                            _this.width = document.documentElement.clientWidth;
                            _this.height = document.documentElement.clientHeight;

                            _this.resizeCanvas_w(_this.mask, _this.width, _this.height);
                        },false);
                    }
                }
                return Lottery;
            }
        }
    }
    //当前要制作的杂志服务
    function magaProvider(){
        return {
            $get:function(){
                var magaSuper={
                    addPage:function(){
                            this.pages.splice(this.active+1,0,{
                                    background:{
                                        effects:[],
                                        style:{},
                                    },
                                    floatages:[],
                                    effects:[],
                                    order:this.active===-1?0:(this.pages[this.active].order+1),
                                    uniqueId:_.uniqueId('page_')
                                })
                            this.active++;
                        }
                };
                return function(){
                    return Object.create(magaSuper,{
                        'pages':{
                            value:[],
                            writable:true,
                            configurable:true,
                            enumerable:true
                        }
                    });
                };
            }
        }
    }
    //本次应用周期内制作的杂志列表服务
    function magasProvider(){
        return {
            $get:function(){
                return {
                    swift:true,
                    magaList:[],
                    addMaga:function(newMaga){
                        newMaga.uniqueId=_.uniqueId('maga_');
                        this.magaList.push(newMaga);
                    },
                    getNewMaga:function(){
                        return this.magaList[this.magaList.length-1];
                    },
                    replaceImg:function(id,url){

                        var floatage=null;
                        _.each(this.getNewMaga().pages,
                            function(item,index){
                                _.each(item.floatages,
                                    function(item,index){
                                        if(item.uniqueId===id){
                                            item.src=url;
                                            floatage=item;
                                        }
                                    });
                            });
                        $scope.$apply(function(){
                                floatage.img_loading=true;
                            });
                        this.loading(floatage);
                        // document.querySelector('#'+id).src=url;
                    },
                    loading:function(floatage){
                         var img=new Image();
                         img.onload=function(){
                            $scope.$apply(function(){
                                floatage.img_loading=false;
                            });
                         }
                         img.src=floatage.src;
                    },
                    loadingBk:function(page,url){
                        var img=new Image();
                        img.onload=function(){
                            $scope.$apply(function(){
                                page.img_loading=false;
                            });
                        };
                        img.src=url;
                    },
                    uploadShareImg:function(url){
                        var maga=this.getNewMaga();
                        maga.wx.img=url;
                        var img=document.querySelector('.up_img');
                        if(img){
                            img.style.backgroundImage='url('+url+')';
                            img.style.backgroundSize='cover';
                        }
                    },
                    toShape:function(){
                        window.location.hash='/shapes';
                    },
                    addFloatage:function(page,url,type){
                        var maga=this.getNewMaga();
                        // var page=_.findWhere(maga.pages,{uniqueId:page});
                        var page=maga.pages[maga.active];
                        var floatage;
                        var _this=this;
                        // window.location.hash='/make';
                        window.$scope.$apply(function(){
                            if(type==="image"){
                                floatage={
                                    type:'image',
                                    style:{
                                        left:Math.random()*100+'px',
                                        top:200+Math.random()*200-100+'px',
                                        width:400+Math.random()*100-50+'px',
                                        height:'auto',
                                        color:'',
                                        opacity:''
                                    },
                                    src:url,
                                    effects:[],
                                    uniqueId:_.uniqueId('floatage_'),
                                    img_loading:true
                                };
                                _this.loading(floatage);
                                page.floatages.push(floatage);
                            }
                        });
                        if(type==='shape'){
                            floatage={
                                type:'image',
                                style:{
                                    left:Math.random()*100+'px',
                                    top:200+Math.random()*200-100+'px',
                                    width:400+Math.random()*100-50+'px',
                                    height:'auto',
                                    color:'',
                                    opacity:''
                                },
                                src:url,
                                effects:[],
                                uniqueId:_.uniqueId('floatage_'),
                                img_loading:true
                            };
                            _this.loading(floatage);
                            page.floatages.push(floatage);
                        }
                    },
                    replaceBk:function(id,url){
                        // _.each(this.getNewMaga().pages,
                        //     function(item,index){
                        //         if(item.uniqueId===id){
                        //             item.background.style.backgroundImage='url('+url+')';
                        //             document.querySelector('#'+id).style.backgroundImage='url('+url+')';
                        //         }
                        //     });
                        var _this=this;
                        var maga=this.getNewMaga();
                        var page=maga.pages[maga.active];
                        var target=document.querySelector('#'+page.uniqueId);
                        page.background.style.backgroundImage='url('+url+')';
                        $scope.$apply(function(){
                                page.img_loading=true;
                         });

                        this.loadingBk(page,url);
                        // page.background.style.backgroundSize='contain';
                        // page.background.style.backgroundPosition='center';
                        // page.background.style.backgroundRepeat='no-repeat';
                        if(target){
                            target.style.backgroundImage='url('+url+')';
                        }
                    },
                    setFloatageOrBk:function(type){
                        this.getNewMaga().flOrBk=type;
                    },
                    listen:function($scope){
                        window.aaa=$scope;
                    }
                };
            }
        }
    }
    //拖拽服务
    function flipProvider(){
        return {
            $get:function(){
                return function(){
                        var step=60,
                        target=null,
                        touch={},
                        hasDefault,
                        sensitivity=1,
                        stepY=66,
                        stepX=44,
                        supportTouch='ontouchstart' in window,
                        S=supportTouch?'touchstart':'mousedown',
                        M=supportTouch?'touchmove':'mousemove',
                        E=supportTouch?'touchend':'mouseup',
                        cb={
                          start:null,
                          move:null,
                          end:null,
                          left:null,
                          right:null,
                          up:null,
                          down:null
                        },
                        container=document,
                        _dir=[];
                        function swipeDirection(x1,x2,y1,y2,sensitivity) {
                            var _x=Math.abs(x1-x2),
                                _y=Math.abs(y1-y2),
                                dir=_x>=_y?(x1-x2>0?'left':'right'):(y1-y2>0?'up':'down');
                            if(sensitivity){
                                if(dir=='left'||dir=='right'){
                                    if(((_y/_x)>sensitivity)||_x<stepX){dir='';}
                                }else if(dir=='up'||dir=='down'){
                                    if(((_x/_y)>sensitivity)||_y<stepY){dir='';}
                                }
                            }

                            return dir;
                        }
                        function _start(e){
                            var pos=(e.touches&&e.touches[0])||e;
                            touch.x1=pos.pageX;
                            touch.y1=pos.pageY;
                            e.x=touch.x1;
                            e.y=touch.y1;
                            typeof cb.start==='function'&&cb.start(e);
                            container.addEventListener(M,_move,false);
                            container.addEventListener(E,_end,false);
                        }
                        function _move(e){
                            var pos=(e.touches&&e.touches[0])||e;
                            touch.x2=pos.pageX;
                            touch.y2 = pos.pageY;
                            e.x=touch.x2;
                            e.y=touch.y2;
                            e._x=e.x-touch.x1;
                            e._y=e.y-touch.y1;
                            if(!hasDefault){e.preventDefault();}
                            typeof cb.move==='function'&&cb.move(e);
                        }
                        function _end(e){
                            e.x=touch.x2;
                            e.y=touch.y2;
                            e._x=e.x-touch.x1;
                            e._y=e.y-touch.y1;
                            if((touch.x2&&Math.abs(touch.x1-touch.x2)>step)||(touch.y2&&Math.abs(touch.y1-touch.y2)>step)){
                                var dir_=swipeDirection(touch.x1,touch.x2,touch.y1,touch.y2,sensitivity);
                                typeof cb[dir_] === 'function'&&cb[dir_](e);
                            }
                            typeof cb.end==='function'&&cb.end(e);
                            container.removeEventListener(M,_move,false);
                            container.removeEventListener(E,_end,false);
                            touch.x1=null;
                            touch.y1=null;
                            touch.x2=null;
                            touch.y2=null;
                        }
                        function flip(el,hasDefault, sensitivity) {
                            if(!el)return;
                            el.addEventListener(S,_start,false);
                        }
                        function flipRevoke(el) {
                            if(!el){return;}
                            el.removeEventListener(S,_start,false);
                            el.removeEventListener(M,_move,false);
                            el.removeEventListener(E,_end,false);
                        }


                        function render(target,hasDefault,sensitivity){
                            flip(target,hasDefault,sensitivity);
                        }

                        return {
                          target:null,
                          conf:{},
                          init:function(opts){
                              container=opts.container||document;                       
                              this.target=target=opts.target;
                              step=opts.step||step;
                              stepX=opts.stepX||stepX;
                              stepY=opts.stepY||stepY;
                              sensitivity=opts.sensitivity||sensitivity;
                              var dir=['up','down','left','right','start','move','end'],l=dir.length;
                              while(l--){
                                if(opts[dir[l]]){
                                  cb[dir[l]]=opts[dir[l]];
                                  _dir.push(dir[l]);
                                }
                              }
                              render(target,opts.hasDefault,sensitivity);
                          },
                          cancel:function(){
                              flipRevoke(target);
                          }
                        }
                    }

            }
        }
    }
    //tap服务
    function tapProvider(){
        return {
            $get:function(){
                    function Tap(){
                        var touch={};
                        var callback;
                        var action_click='ontouchstart' in window?'touchstart':'mousedown';
                        var action_move='ontouchmove' in window?'touchmove':'mousemove';
                        var action_up='ontouchend' in window?'touchend':'mouseup';

                        function rendor(target,callback,container){
                            console.log(action_click)
                            target.addEventListener(action_click,function(e){
                                console.log(3);
                                var pos=(e.touches&&e.touches[0])||e;
                                touch.x1=pos.pageX;
                                touch.y1=pos.pageY;
                                container.addEventListener(action_move,move,false);
                                container.addEventListener(action_up,end,false);
                            },false);

                            function move(e){
                                var pos=(e.touches&&e.touches[0])||e;
                                touch.x2=pos.pageX;
                                touch.y2 = pos.pageY;
                            }
                            function end(e){
                                touch.x3=touch.x2;
                                touch.y3=touch.x2;
                                var x=touch.x2-touch.x1;
                                var y=touch.y2-touch.y1;
                                if((Math.abs(x)<30&&Math.abs(y)<30)||typeof touch.x2==='undefined'){
                                    alert(3);
                                    callback(e);
                                }
                                container.removeEventListener(action_move,move,false);
                                container.removeEventListener(action_up,end,false);
                                touch={};
                            }
                        }
                        return {
                            init:function(opts){
                                var target=this.target=opts.target;
                                callback=opts.fn;
                                rendor(target,callback,opts.container);
                            }
                        }
                    }
                    return Tap;
            }
        }
    }
}));
;(function(root,factory){
    var angular=window.angular;
    var $=window.$;
    var _=window._;
    factory.call(root,angular,$,_);
}(this,function(angular,$,_){
    'use strict';
    //dev branch
    //featureA
    //whx update
    //fuwei update;
    angular.module('appDirectives',[]).
        directive('dragXDirective',dragXDirective).
        directive('cropperDirective',cropperDirective).
        directive('dragSetDirective',dragSetDirective).
        directive('commonDirective',commonDirective).
        directive('lotteryDirective',lotteryDirective).
        directive('cutDirective',cutDirective).
        directive('cut2Directive',cut2Directive).
        directive('styleReinitDirective',styleReinitDirective).
        directive('musicDirective',musicDirective).
        directive('btn',btn).
        directive('myScroll',myScroll).
        directive('btnDragDirective',btnDragDirective).
        directive('setmusicDirective',setmusicDirective);
    //公用指令
    function commonDirective(){
        return {
            restrict:'A',
            controller:function($scope,$element,$transclude,lotteryProvider,flipProvider,magasProvider,findActiveProvider,tapProvider){
                $scope.Lottery=lotteryProvider;
                $scope.Flip=flipProvider;
                $scope.magasProvider=magasProvider;
                $scope.findActive=findActiveProvider;
                $scope.tapProvider=tapProvider;
            }   
        }
    }


    function styleReinitDirective(){
        return {
            restrict:'A'
        }
    }
    //翻页特效
    function cut2Directive(){
        return{
            require:'^commonDirective',
            restrict:'A',
            controller:function($scope,magasProvider,findActiveProvider){
                $scope.findActive=findActiveProvider;
                $scope.newMaga=magasProvider.getNewMaga();
            },
            link:function(scope,element,attrs){
                var stage = $(element[0]),
                    findActive=scope.findActive,
                    newMaga=scope.newMaga,
                    isPreview=stage.hasClass('preview'),
                    pages=stage.find('.page'),
                    maga=scope.magasProvider.getNewMaga(),
                    viewHeight = 960,
                    step = 1/4,
                    nowIndex = 0,
                    nextorprevIndex = 0,
                    page,
                    delta=0,
                    isMove=false,
                    startY,
                    scale,
                    timeStart=0,
                    long_floatage,
                    bBtn = true;
                    stage.css('height',viewHeight);

                stage.on('touchstart',function(){
                    page = stage.find(".page");
                    // console.log(page);
                });
                _.delay(function(){
                    stage.on("touchstart",'.page',function(ev){
                        if(ev.target.tagName==='CANVAS'){return;}
                        long_floatage = stage.find(".s_floatage")
                        page = stage.find(".page");
                        timeStart=Date.now();
                        startY=ev.changedTouches[0].pageY;
                        if(bBtn)
                        {
                            bBtn = false;
                            long_floatage.on("longTap",showCropperLayer)  //绑定长按事件
                            nowIndex = $(this).index();
                            page.on("touchmove.move",touchsmove)
                            page.on("touchend.move",touchsend) 
                        }
                        nowIndex=stage.find('.current').index();
                    });
                    stage.on('transitionEnd webkitTransitionEnd','.page',function(ev){
                    /*if( !page.is(ev.target) ){ return; }*/
                        resetFn();
                        bBtn = true;


                    });
                    
                    //longTap  长按事件里禁止页面拖动
                    function showCropperLayer(){
                       // if(newMaga.mubanId!=0){
                       //  return;
                       // }
                        $(this).addClass('active').siblings().removeClass('active');
                        page.off("touchmove.move");
                        page.off("touchend.move");
                        isMove = false;
                        var activeFloatage=findActive(newMaga,$(this).attr('id'));
                        newMaga.activeFloatage=activeFloatage;
                      
                    }
                    
                    
                    function touchsmove(ev){
                        long_floatage.removeClass('active');
                        long_floatage.off("longTap");    
                        isMove=true;
                        if(ev.target.tagName==='CANVAS'){return;}
                        $(this).siblings().removeClass('current');
                        var downY=ev.changedTouches[0].pageY;
                        delta=downY;

                        if(downY < startY ){
                            nextorprevIndex = nowIndex == page.length-1 ? 0 : nowIndex + 1;
                            page.eq(nextorprevIndex).css('-webkit-transform','translate(0,'+( viewHeight + downY - startY )+'px)');
                        }else{
                            nextorprevIndex = nowIndex == 0 ? page.length-1 : nowIndex - 1;
                            page.eq(nextorprevIndex).css('-webkit-transform','translate(0,'+( -viewHeight + downY - startY )+'px)');
                        }
                    
                        page.eq(nextorprevIndex).addClass('current').addClass('zIndex');
                        scale = 1 - Math.abs((downY- startY))*step / viewHeight;
                        $(this).css('-webkit-transform','translate(0,'+ (downY - startY)*step +'px) scale('+( scale )+')');
                        // console.log('%c'+nextorprevIndex,'color:pink;')
                    }
                    
                    
                    function touchsend(ev){
                        
                        if(isMove){
                            var downY = ev.changedTouches[0].pageY;
                            if(downY < startY)
                            {
                                page.eq(nowIndex).css('-webkit-transform','translate(0,'+(-viewHeight * step)+'px) scale('+(1 - step)+')');
                                }else{
                                page.eq(nowIndex).css('-webkit-transform','translate(0,'+(viewHeight * step)+'px) scale('+(1 - step)+')');
                            }
                            
                            page.eq(nowIndex).css('-webkit-transition','.3s');
                            page.eq(nextorprevIndex).css('-webkit-transform','translate(0,0)');
                            page.eq(nextorprevIndex).css('-webkit-transition','.3s');
                            page.off('.move');   
                            maga.active=nextorprevIndex;
                            scope.state.active=nextorprevIndex;
                            pages.removeClass('current');
                            pages.eq(nextorprevIndex).addClass('current');
                        }
                        isMove=false;
                        var duration=(Date.now()-timeStart)
                        if(Math.abs(delta)<=20&&duration<=200&& !isPreview){
                            var img=$(ev.target).find('img');
                            var isImg=$(ev.target).hasClass('s_img');
                            var text=$(ev.target).parent();
                            
                             
                            if(img && img.length===1&&isImg){
                                
                                var hash=window.location.hash;
                                hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
                                hash=hash+'?-img:'+img.parents('.s_floatage').attr('id')+'-'+Math.random();
                                window.location.hash=hash;
                                $(ev.target).parents('.page').addClass('current');
                                maga.flOrBk='floatage';
                                 
                            }
                            
                            if(text.hasClass("text"))
                            {
                                
                                var floatage=_.find(maga.pages[maga.active].floatages,
                                function(item,index){
                                        return item.uniqueId == text.parent().parent().attr("id");  
                                });
                                maga.activeText=floatage;
                                //var value = floatage.value.join('/n');
                                 console.log(maga.activeText.style)
                                window.location.hash="/text"
                                
                            }
                        }
                        delta=0;
                        page.off("touchmove.move");
                        page.off("touchend.move");
                        // console.log("%c"+nextorprevIndex,'color:red;');      
                    }
                    
                    function resetFn(){
                        page.css('-webkit-transform','');
                        page.css('-webkit-transition','');
                        page.eq(nextorprevIndex).removeClass('zIndex').siblings().removeClass('current');       
                    }
                    
                    //退出编辑
                    if(!isPreview){
                        $(".stage_bj").on('tap',cancellEdit);

                    }

                    function cancellEdit(e){
                            page = stage.find(".page");
                            page.find(".s_floatage").removeClass("active");
                            $('.animation-operate').addClass('hide');
                            $('.stage-nav').removeClass('hide');
                            //重新绑定页面拖动事件
                            page.on("touchmove.move",touchsmove);
                            page.on("touchend.move",touchsend);
                            // isMove = true; 
                    }
                },100)
                
                
                
        
            }
        }
    }
    //转场指令
    function cutDirective(){
        return {
            require:'^commonDirective',
            restrict:'A',
            link:function(scope,ele,attrs){
                ele=$(ele[0]);
                var Flip=scope.Flip,
                    newMaga=scope.magasProvider.getNewMaga(),
                    pages=ele.find('.page'),
                    cut={
                        current:0,
                        height:0
                    },
                    poly={
                        style:document.createElement('div').style,
                        vendor:function() {
                                    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                                        transform,
                                        i = 0,
                                        l = vendors.length;
                            
                                    for ( ; i < l; i++ ) {
                                        transform = vendors[i] + 'ransform';
                                        if ( transform in this.style ) return vendors[i].substr(0, vendors[i].length-1);
                                    }
                                    return false;
                                },
                        prefix:function (style) {
                                    if ( this.vendor() === false ) return false;
                                    if ( this.vendor() === '' ) return style;
                                    return this.vendor() + style.charAt(0).toUpperCase() + style.substr(1);
                                }
                    },
                    logic={
                        next:0,
                        now:0,
                        up:function(){
                            var now=cut.current-1;
                            if(now<0)now=0;
                            this.next=now;
                            return pages.eq(now);
                        },
                        down:function(){
                            var now=cut.current+1;
                            if(now>(pages.length-1))now=pages.length-1;
                            this.next=now;
                            return pages.eq(now)
                        },
                        where:function(){
                            var next=this.next;
                            if(next==cut.current){
                                
                            }else if(next<cut.current){

                                this.appear(pages.eq(next));
                                this.transform(next);
                                this.effect(next);

                            }else if(next>cut.current){

                                this.appear(pages.eq(next));
                                this.transform(next);
                                this.effect(next);

                            }
                        },
                        current:function(){
                            pages=ele.find('.page');
                            pages.each(function(index,value){
                                if(value.classList.contains('current')){
                                    cut.current=index;
                                }
                            });
                            pages.removeClass('cut');
                            cut.height=ele.height();  
                        },
                        appear:function(who){
                            who.addClass('appear');
                        },
                        transform:function(next){
                            if(next<cut.current){
                                var transform=poly.prefix('transform');
                                pages.get(next).style[transform]='translate3d(0,-'+cut.height+'px,0)';
                                pages.eq(next).addClass('st');
                                logic.now=cut.current;
                            }else if(next>cut.current){
                                var transform=poly.prefix('transform');
                                pages.get(next).style[transform]='translate3d(0,'+cut.height+'px,0)';
                                pages.eq(next).addClass('st');
                                logic.now=cut.current;
                            }
                        },
                        effect:function(next){
                            var _this=this;
                            _.delay(function(){
                                    pages.get(next).style[poly.prefix('transform')]='translate3d(0,0,0)';
                                    _.delay(function(){
                                        _this.build();
                                    }, 300);
                                },100);
                        },
                        build:function(){
                            scope.state.active=logic.next;
                            newMaga.active=logic.next;
                            pages.eq(logic.now).removeClass('current');
                            pages.eq(logic.next).addClass('current');
                            pages.eq(logic.next).removeClass('appear');
                            pages.eq(logic.next).removeClass('st');

                        }
                    },
                    handler={
                        start:function(){
                            logic.current();
                        },
                        up:function(){
                            logic.down();
                            logic.where();
                        },
                        down:function(){
                            logic.up();
                            logic.where();
                        }
                    };
                var flip=new Flip;
                flip.init({
                    target:ele[0],
                    container:ele[0],
                    start:handler.start,
                    up:handler.up,
                    down:handler.down
                });

                //退出编辑
                ele.on('tap',cancellEdit);
                function cancellEdit(e){
                    if(e.target.classList.contains('page')){
                        var active=e.target.querySelector('.active');
                        active&&active.classList.remove('active');
                        $('.animation-operate').addClass('hide');
                        $('.stage-nav').removeClass('hide');
                    }
                }
            }
        }
    }
    //涂抹效果
    function lotteryDirective(){
        return {
            require:'^commonDirective',
            restrict:'A',
            link:function(scope,element,attrs){
                var maga=scope.magasProvider.getNewMaga();
                var now=$(element[0]).index();
                var page=maga.pages[now];
                var isPreview=$('.stage').hasClass('preview');
                var data=_.findWhere(page.effects,{type:'lottery'});
                if((!data)||(data.ended&&(!isPreview))){
                    return;
                }
                // if(!$(element[0]).index()===maga.active){
                //     return;
                // }
                _.delay(function(){
                    if(typeof data.value==='string'){
                        data.value=JSON.parse(data.value);
                    }
                    var target=element[0],
                        dim=getComputedStyle(target,false),
                        width=parseInt(dim.width),
                        height=parseInt(dim.height),
                        Lottery=scope.Lottery,
                        lottery=new Lottery(target,data.value.src,'image',640,960,cb,data.value.scale,data.value.content);
                    lottery.init();                    
                    function cb(wrapper,move,end){
                        wrapper.removeChild(wrapper.querySelector('.lottery'));
                        lottery=null;
                        wrapper.removeEventListener('touchmove',move);
                        wrapper.removeEventListener('touchend',end);
                        data.ended=true;
                    }
                },200);
            }   
        }
    }
    //制作页面导航拖拽
    function dragXDirective(){
        return {
            scope:{},
            restrict:'A',
            link:function(scope,ele,attrs){
                ele=$(ele[0]).find('.dragpro');
                var width=ele.children().children().width()+10,
                    wrapperWidth=width*ele.children(),
                    touchPos={
                    startX:0,
                    x:0,
                    deltaX:0
                };
                ele.css({
                    'webkitTransition':'all ease 0.5s',
                    'transition':'all ease 0.5s',
                    '-webkit-transition':'all ease 0.5s'
                });
                ele.on('touchstart',sometime);
                ele.on('touchmove',drag);
                function sometime(e){
                    touchPos.startX=e.touches[0].pageX;
                }
                function drag(e){
                    touchPos.x=e.touches[0].pageX;
                    touchPos.deltaX=touchPos.x-touchPos.startX;
                    if(Math.abs(touchPos.deltaX)>100){
                        if(touchPos.deltaX>0){
                            ele.css({
                                    'webkitTransform':'translate(0,0)',
                                    'transform':'translate(0,0)',
                                    '-webkit-transform':'translate(0,0)'
                                });
                        }else{
                            ele.css({
                                    'webkitTransform':'translate(-'+width+'px,0)',
                                    'transform':'translate(-'+width+'px,0)',
                                    '-webkit-transform':'translate(-'+width+'px,0)'
                                });
                        }
                    }
                }
            }
        }
    };


    //音乐
    function musicDirective(){
        return {
            restrict:'E',
            templateUrl:'partials/coffee.html',
            link:function(scope,ele,attrs){
                var ele=$(ele[0]);
                //定义zepto的动画模块
                ;(function($, undefined){
                  var prefix = '', eventPrefix, endEventName, endAnimationName,
                    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
                    document = window.document, testEl = document.createElement('div'),
                    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                    transform,
                    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
                    animationName, animationDuration, animationTiming, animationDelay,
                    cssReset = {}

                  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
                  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

                  $.each(vendors, function(vendor, event){
                    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
                      prefix = '-' + vendor.toLowerCase() + '-'
                      eventPrefix = event
                      return false
                    }
                  })

                  transform = prefix + 'transform'
                  cssReset[transitionProperty = prefix + 'transition-property'] =
                  cssReset[transitionDuration = prefix + 'transition-duration'] =
                  cssReset[transitionDelay    = prefix + 'transition-delay'] =
                  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
                  cssReset[animationName      = prefix + 'animation-name'] =
                  cssReset[animationDuration  = prefix + 'animation-duration'] =
                  cssReset[animationDelay     = prefix + 'animation-delay'] =
                  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

                  $.fx = {
                    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
                    speeds: { _default: 400, fast: 200, slow: 600 },
                    cssPrefix: prefix,
                    transitionEnd: normalizeEvent('TransitionEnd'),
                    animationEnd: normalizeEvent('AnimationEnd')
                  }

                  $.fn.animate = function(properties, duration, ease, callback, delay){
                    if ($.isFunction(duration))
                      callback = duration, ease = undefined, duration = undefined
                    if ($.isFunction(ease))
                      callback = ease, ease = undefined
                    if ($.isPlainObject(duration))
                      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
                    if (duration) duration = (typeof duration == 'number' ? duration :
                                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
                    if (delay) delay = parseFloat(delay) / 1000
                    return this.anim(properties, duration, ease, callback, delay)
                  }

                  $.fn.anim = function(properties, duration, ease, callback, delay){
                    var key, cssValues = {}, cssProperties, transforms = '',
                        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
                        fired = false

                    if (duration === undefined) duration = $.fx.speeds._default / 1000
                    if (delay === undefined) delay = 0
                    if ($.fx.off) duration = 0

                    if (typeof properties == 'string') {
                      // keyframe animation
                      cssValues[animationName] = properties
                      cssValues[animationDuration] = duration + 's'
                      cssValues[animationDelay] = delay + 's'
                      cssValues[animationTiming] = (ease || 'linear')
                      endEvent = $.fx.animationEnd
                    } else {
                      cssProperties = []
                      // CSS transitions
                      for (key in properties)
                        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
                        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

                      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
                      if (duration > 0 && typeof properties === 'object') {
                        cssValues[transitionProperty] = cssProperties.join(', ')
                        cssValues[transitionDuration] = duration + 's'
                        cssValues[transitionDelay] = delay + 's'
                        cssValues[transitionTiming] = (ease || 'linear')
                      }
                    }

                    wrappedCallback = function(event){
                      if (typeof event !== 'undefined') {
                        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
                        $(event.target).unbind(endEvent, wrappedCallback)
                      } else
                        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

                      fired = true
                      $(this).css(cssReset)
                      callback && callback.call(this)
                    }
                    if (duration > 0){
                      this.bind(endEvent, wrappedCallback)
                      // transitionEnd is not always firing on older Android phones
                      // so make sure it gets fired
                      setTimeout(function(){
                        if (fired) return
                        wrappedCallback.call(that)
                      }, (duration * 1000) + 25)
                    }

                    // trigger page reflow so new elements can animate
                    this.size() && this.get(0).clientLeft

                    this.css(cssValues)

                    if (duration <= 0) setTimeout(function() {
                      that.each(function(){ wrappedCallback.call(this) })
                    }, 0)

                    return this
                  }

                  testEl = null
                })(window.Zepto||window.jQuery||window.$)
                // 音符的漂浮的插件制作--zpeto扩展
                ;(function($){
                  // 利用zpeto的animate的动画-css3的动画-easing为了css3的easing(zpeto没有提供easing的扩展)
                    $.fn.coffee = function(option){
                    // 动画定时器
                    var __time_val=null;
                    var __time_wind=null;
                    var __flyFastSlow = 'cubic-bezier(.09,.64,.16,.94)';

                    // 初始化函数体，生成对应的DOM节点
                        var $coffee = $(this);
                        var opts = $.extend({},$.fn.coffee.defaults,option);  // 继承传入的值

                    // 漂浮的DOM
                    var coffeeSteamBoxWidth = opts.steamWidth;
                    var $coffeeSteamBox = $('<div class="coffee-steam-box"></div>')
                      .css({
                        'height'   : opts.steamHeight,
                        'width'    : opts.steamWidth,
                        'left'     : 60,
                        'top'      : -50,
                        'position' : 'absolute',
                        'overflow' : 'hidden',
                        'z-index'  : 0 
                      })
                      .appendTo($coffee);

                    // 动画停止函数处理
                    $.fn.coffee.stop = function(){
                      clearInterval(__time_val);
                      clearInterval(__time_wind);
                    }

                    // 动画开始函数处理
                    $.fn.coffee.start = function(){
                      __time_val = setInterval(function(){
                        steam();
                      }, rand( opts.steamInterval / 2 , opts.steamInterval * 2 ));

                      __time_wind = setInterval(function(){
                        wind();
                      },rand( 100 , 1000 )+ rand( 1000 , 3000))
                    }
                        return $coffee;
                        
                    // 生成漂浮物
                    function steam(){   
                      // 设置飞行体的样式
                            var fontSize = rand( 8 , opts.steamMaxSize  ) ;     // 字体大小
                      var steamsFontFamily = randoms( 1, opts.steamsFontFamily ); // 字体类型
                      var color = '#'+ randoms(6 , '0123456789ABCDEF' );  // 字体颜色
                            var position = rand( 0, 44 );                       // 起初位置
                            var rotate = rand(-90,89);                          // 旋转角度
                            var scale = rand02(0.4,1);                          // 大小缩放
                      var transform =  $.fx.cssPrefix+'transform';        // 设置音符的旋转角度和大小
                          transform = transform+':rotate('+rotate+'deg) scale('+scale+');'

                      // 生成fly飞行体
                            var $fly = $('<span class="coffee-steam">'+ randoms( 1, opts.steams ) +'</span>');
                            var left = rand( 0 , coffeeSteamBoxWidth - opts.steamWidth - fontSize );
                            if( left > position ) left = rand( 0 , position );
                            $fly
                        .css({
                          'position'     : 'absolute',
                          'left'         : position,
                          'top'          : opts.steamHeight,
                          'font-size:'   : fontSize+'px',
                          'color'        : color,
                          'font-family'  : steamsFontFamily,
                          'display'      : 'block',
                          'opacity'      : 1
                        })
                        .attr('style',$fly.attr('style')+transform)
                        .appendTo($coffeeSteamBox)
                        .animate({
                                top     : rand(opts.steamHeight/2,0),
                                left    : left,
                                opacity : 0
                              },rand( opts.steamFlyTime / 2 , opts.steamFlyTime * 1.2 ),__flyFastSlow,function(){
                                  $fly.remove();
                                  $fly = null;          
                             });
                        };
                        
                    // 风行，可以让漂浮体，左右浮动
                        function wind(){
                      // 左右浮动的范围值
                      var left = rand( -10 , 10 );
                      left += parseInt($coffeeSteamBox.css('left'));
                      if(left>=54) left=54;
                      else if(left<=34) left=34;

                      // 移动的函数
                      $coffeeSteamBox.animate({
                        left  : left 
                      } , rand( 1000 , 3000) ,__flyFastSlow);
                        };
                        
                    // 随即一个值
                    // 可以传入一个数组和一个字符串
                    // 传入数组的话，随即获取一个数组的元素
                    // 传入字符串的话，随即获取其中的length的字符
                        function randoms( length , chars ) {
                            length = length || 1 ;
                            var hash = '';                  // 
                            var maxNum = chars.length - 1;  // last-one
                            var num = 0;                    // fisrt-one
                            for( var i = 0; i < length; i++ ) {
                                num = rand( 0 , maxNum - 1  );
                                hash += chars.slice( num , num + 1 );
                            }
                            return hash;
                        };

                    // 随即一个数值的范围中的值--整数
                        function rand(mi,ma){   
                            var range = ma - mi;
                            var out = mi + Math.round( Math.random() * range) ; 
                            return parseInt(out);
                        };  

                    // 随即一个数值的范围中的值--浮点
                        function rand02(mi,ma){   
                            var range = ma - mi;
                            var out = mi + Math.random() * range;   
                            return parseFloat(out);
                        };      
                    };

                    $.fn.coffee.defaults = {
                        steams                  : ['jQuery','HTML5','HTML6','CSS2','CSS3','JS','$.fn()','char','short','if','float','else','type','case','function','travel','return','array()','empty()','eval','C++','JAVA','PHP','JSP','.NET','while','this','$.find();','float','$.ajax()','addClass','width','height','Click','each','animate','cookie','bug','Design','Julying','$(this)','i++','Chrome','Firefox','Firebug','IE6','Guitar' ,'Music' ,'攻城师' ,'旅行' ,'王子墨','啤酒'], /*漂浮物的类型，种类*/
                        steamsFontFamily    : ['Verdana','Geneva','Comic Sans MS','MS Serif','Lucida Sans Unicode','Times New Roman','Trebuchet MS','Arial','Courier New','Georgia'],  /*漂浮物的字体类型*/
                        steamFlyTime          : 5000 , /*Steam飞行的时间,单位 ms 。（决定steam飞行速度的快慢）*/
                        steamInterval       : 500 ,  /*制造Steam时间间隔,单位 ms.*/
                        steamMaxSize          : 30 ,   /*随即获取漂浮物的字体大小*/
                        steamHeight       : 200,   /*飞行体的高度*/
                        steamWidth        : 300    /*飞行体的宽度*/
                    };
                    $.fn.coffee.version = '2.0.0'; // 更新为音符的悬浮---重构的代码
                })(window.Zepto||window.jQuery||window.$);
                var service={
                    audioPlay:audioPlay,
                    audioPause:audioPause,
                    init:init
                };
                var audio=ele.find('audio')[0];
                var played=true;
                init(scope.music.src);
                function init(url){
                    if(!url)return;//根据数据判断是否加载
                    var optsAudio={
                        loop: true,
                        preload: "auto",
                        src: url
                    };
                    for(var i in optsAudio){
                        if(optsAudio.hasOwnProperty(i)&&(i in audio)){
                            audio[i]=optsAudio[i];
                        }
                    }
                    audio.load();
                    ele.find('#coffee_flow').coffee({
                        steams              : ["<img src='http://www5.5.cn/Public/newimages/audio_widget_01@2x.png' />","<img src='http://www5.5.cn/Public/newimages/audio_widget_01@2x.png' />"], 
                        steamHeight         : 100,
                        steamWidth          : 44 
                    });

                    service.audioPlay();
                    $('.u-audio').on('tap',function(){
                        played=!played;
                        if(played){
                            service.audioPlay();
                        }else{
                            service.audioPause();
                        }
                    });
                }
                function audioPlay(){
                    audio.play();
                    $.fn.coffee.start();
                    $('.coffee-steam-box').show(500);
                }
                function audioPause(){
                    audio.pause();
                    $.fn.coffee.stop();
                    $('.coffee-steam-box').hide(500);
                }
                
            }
        }           
    };
    //图片截取指令
    function cropperDirective(){
        return {
            restrict:'A',
            templateUrl:'partials/cropper.html',
            transclude:true,
            link:function(scope,ele,attrs){
                    
                    // if(!scope.floatage.type==='image'){
                    //     return;
                    // }
                    var ele=$(ele[0]),
                        newMaga=scope.magasProvider.getNewMaga(),
                        Flip=scope.Flip,
                        eff='fadeIn fadeOut zoomIn rotateIn ring slideDown slideUp slideLeft expandUp expandOpen pullUp pullDown stretchLeft stretchRight rotateIn flipInX flipInY lightSpeedIn moveDown moveUp moveLeft moveRight rotateInDownRight rotateInDownLeft zoomInDown fadeInNormal',
                        Tap=scope.tapProvider,
                        findActive=scope.findActive,
                        stage_bj=$('.stage_bj')[0],
                        closeAnimation=$('.clear-animation'),//清除动画按钮
                        animationOperate=$('.animation-operate'),//动画编辑浮层
                        stageNav=$('.stage-nav'),//导航浮层
                        fadeInBtn=$('.fadeInBtn'),//淡入按钮
                        fadeOutBtn=$('.fadeOutBtn'),//淡出按钮
                        amplifyBtn=$('.amplifyBtn'),//放大按钮
                        rotationBtn=$('.rotationBtn'),//旋转按钮
                        shakeBtn=$('.shakeBtn'),//抖动按钮
                        span100000=ele.find('.left_t'),
                        span010000=ele.find('.center_t'),
                        span001000=ele.find('.right_t'),
                        span000100=ele.find('.left_b'),
                        span000010=ele.find('.center_b'),
                        span000001=ele.find('.right_b'),
                        pos={
                                start:{
                                        x:null,
                                        y:null
                                    },
                                move:{
                                        x:null,
                                        y:null
                                    },
                                end:{
                                        x:null,
                                        y:null
                                    },
                                now:{
                                    left:null,
                                    top:null
                                },
                                delta:{
                                    x:null,
                                    y:null
                                }
                            };
                    // if( newMaga.mubanId != 0){
                    //     console.log('进来了')
                    //      return;  
                    // }
                    init();
                    function init(){
                        ele.on('touchstart',sometime);//漂浮物的拖拽
                        if(!closeAnimation.data('only')){
                            closeAnimation.data('only', true);
                            closeAnimation.on('tap',clearAnimation);
                            fadeInBtn.on('tap',addAnimation.bind(ele,'fadeIn'));
                            fadeOutBtn.on('tap',addAnimation.bind(ele,'fadeOut'));
                            amplifyBtn.on('tap',addAnimation.bind(ele,'zoomIn'));
                            rotationBtn.on('tap',addAnimation.bind(ele,'rotateIn'));
                            shakeBtn.on('tap',addAnimation.bind(ele,'ring'));
                              // $(document).on('contextmenu',controll);
                            $('.stage_bj').on('touchmove.scroll',controll);
                            $('.stage_bj').on('scroll.scroll',controll);
                        }
                        /*ele.on('longTap',showCropperLayer);*/
                         
                        ele.find('.anim').on('touchstart',showAnimationLayer);
                        ele.find('.del').on('touchstart',delActive);
                        ele.find('img').on('touchend',defaultAndPropagation);
                        //漂浮物的裁剪
                        cropper100000();
                        cropper010000();
                        cropper001000();
                        cropper000100();
                        cropper000010();
                        cropper000001();
                        //替换图片
                        // replaceImage();
                    }
                    //获取漂浮物尺寸和位置
                    function rect(obj){
                        return obj.getBoundingClientRect();
                        
                    }
                    // function replaceImage(){
                    //     _.delay(function(){
                    //         ele.on('tap',
                    //             function(){
                    //                 var img=ele.find('img');
                    //                 if(img.length===1){
                    //                     var hash=window.location.hash;
                    //                     hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
                    //                     hash=hash+'?-img:'+scope.floatage.uniqueId+'-'+Math.random();
                    //                     window.location.hash=hash;
                    //                     $(this).parents('.page').addClass('current');
                    //                     newMaga.flOrBk='floatage';
                    //                 }
                    //             });
                    //                 // var img=ele.find('img');
                    //                 // if(img.length===1){
                    //                 //     // console.log(img[0],$(img[0]).parents('.page')[0])
                    //                 //     var tap=new Tap;
                    //                 //     tap.init({
                    //                 //         target:img[0],
                    //                 //         container:$(img[0]).parents('.page')[0],
                    //                 //         fn:function(){
                    //                 //             var hash=window.location.hash;
                    //                 //             hash=hash.replace(/(\?\-[\w\d:]{0,100}\-)/g,'').replace(/[\.\d]{1,}/,'');
                    //                 //             hash=hash+'?-img:'+scope.floatage.uniqueId+'-'+Math.random();
                    //                 //             window.location.hash=hash;
                    //                 //             $(img[0]).parents('.page').addClass('current');
                    //                 //             newMaga.flOrBk='floatage';
                    //                 //         }
                    //                 //     });
                    //                 // }
                    //     },100);
                    // }
                    function controll(){
                        
                        return false;
                    }
                    function defaultAndPropagation(e){
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    function sync(left,top,width,height){
                            if(left!==undefined)scope.floatage.style.left=left+'px';
                            if(top!==undefined)scope.floatage.style.top=top+'px';
                            if(width!==undefined)scope.floatage.style.width=width+'px';
                            if(height!==undefined)scope.floatage.style.height=height+'px';
                    }
                    function cropper100000(){
                        var flip=new Flip();
                        flip.init({
                                target:span100000[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                            console.log(parseInt(ele.css('left')),data.width)
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width-e._x,
                                height=dim.height-e._y;
                            var left=pos.left+e._x,
                                top=pos.top+e._y;
                            ele.css({
                                width: width+'px',
                                height: height+'px',
                                left:left+'px',
                                top:top+'px'
                            });
                            sync(left,top,width,height);
                            
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                    }
                    function cropper010000(){
                        var flip=new Flip();
                        flip.init({
                                target:span010000[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var height=dim.height-e._y;
                            var top=pos.top+e._y;
                            var left;
                            var width;
                            ele.css({
                                height: height+'px',
                                top:top+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                    }
                    function cropper001000(){
                        var flip=new Flip();
                        flip.init({
                                target:span001000[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width+e._x,
                                height=dim.height-e._y;
                            var top=pos.top+e._y;
                            var left;
                            ele.css({
                                width: width+'px',
                                height: height+'px',
                                top:top+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function cropper000100(){
                        var flip=new Flip();
                        flip.init({
                                target:span000100[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width-e._x,
                                height=dim.height+e._y;
                            var left=pos.left+e._x;
                            var top;
                            ele.css({
                                width: width+'px',
                                height: height+'px',
                                left:left+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function cropper000010(){
                        var flip=new Flip();
                        flip.init({
                                target:span000010[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var left,top,width;
                            var height=dim.height+e._y;
                            ele.css({
                                height:height+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function cropper000001(){
                        var flip=new Flip();
                        flip.init({
                                target:span000001[0],
                                start:start,
                                container:ele[0],
                                move:move,
                                end:end
                            });
                        var dim={
                            width:null,
                            height:null
                        };
                        var pos={
                            left:null,
                            top:null
                        };
                        function start(e){
                            var data=rect(ele[0]);
                            dim.width=parseInt(ele.css('width'))||data.width;
                            dim.height=parseInt(ele.css('height'))||data.height;
                            pos.left=parseInt(ele.css('left'))||data.left;
                            pos.top=parseInt(ele.css('top'))||data.top;
                            prevent(e);
                            stop(e);
                        }
                        function move(e){

                            prevent(e);
                            stop(e);
                            var width=dim.width+e._x,
                                height=dim.height+e._y;
                            var left;
                            var top;
                            ele.css({
                                width: width+'px',
                                height: height+'px'
                            });
                            sync(left,top,width,height);
                        }
                        function end(e){
                            prevent(e);
                            stop(e);
                        }
                        
                    }
                    function addAnimation(effectName){
                        var active=$('#'+newMaga.activeFloatage.uniqueId);
                        // var activeId=active.attr('id');
                        // var floatage=findActive(newMaga,activeId);
                        var floatage=newMaga.activeFloatage;
                        var classList=['fadeIn','fadeOut','zoomIn','rotateIn','ring'];
                        active.removeClass(effectName);
                        active.offsetWidth=active.offsetWidth;
                        floatage.effects=_.difference(floatage.effects,classList);
                        floatage.effects=_.union(floatage.effects,[effectName]);
                        _.delay(function(){
                            classList.forEach(function(item,index,classList){
                                    active.removeClass(item);
                                });
                            active.addClass(effectName);
                        },10);
                    }
                    /*function showCropperLayer(){
                        var parent=ele.parent();
                        var siblings=parent.find('.active');
                        siblings.removeClass('active');
                        ele.addClass('active');
                        var activeFloatage=findActive(newMaga,ele.attr('id'));
                        newMaga.activeFloatage=activeFloatage;
                        scope.$apply(function(){
                            
                        });
                        return false;
                    }*/

                    function showAnimationLayer(){
                        $('.stage .active').removeClass('active');
                        animationOperate.removeClass('hide');
                        stageNav.addClass('hide');

                        ele.find('img').off('contextmenu',controll);
                        ele.find('img').on('contextmenu',controll);
                        return false;

                    }
                    function closeAnimationLayer(){
                        // animationOperate.addClass('hide');
                        // stageNav.removeClass('hide');
                        clearAnimation();
                        
                    }
                    function clearAnimation(id){
                        var active=getAcitve();
                        var id=active.uniqueId;
                        var floatage=document.querySelector('#'+id);
                        console.log(floatage);
                        floatage.style.animationDuration='';
                        floatage.style.webkitAnimationDuration='';
                        floatage.style.animationDelay='';
                        floatage.style.webkitAnimationDelay='';
                        delete active.style.animationDuration;
                        delete active.style.webkitAnimationDuration;
                        delete active.style.animationDelay;
                        delete active.style.webkitAnimationDelay;
                        $(floatage).removeClass(eff);
                        active.effects=_.difference(active.effects,eff.split(' '));
                    }
                    function getAcitve(){
                        return newMaga.activeFloatage;
                    }
                    function delActive(){
                        var target=$('.active');
                        var id=target.attr('id');
                        target.remove();
                        var floatages=newMaga.pages[newMaga.active].floatages;
                        var des=_.find(floatages,
                            function(item,index){
                                return item.uniqueId==id;
                            });
                        var index=_.indexOf(floatages,des)
                        floatages.splice(index,1);
                        // closeAnimation.trigger('tap');
                        console.log(ele)
                    }

                    function sometime(e){
                        if(!this.classList.contains('active')){
                            return;
                        }
                        e.stopImmediatePropagation();
                        updateStartPos(e);
                        updateNowPos();
                        ele.on('touchmove',drag);
                        ele.on('touchend',drop);
                    }

                    function drag(e){
                        updateMovePos(e);
                        updateDelta();
                        setPos();
                    }
                    function drop(){
                        ele.off('touchmove',drag);
                        ele.off('touchend',drop);
                    }
                    function updateStartPos(e){
                        pos.start.x=e.touches[0].pageX;
                        pos.start.y=e.touches[0].pageY;
                    }
                    function updateMovePos(e){
                        pos.move.x=e.touches[0].pageX;
                        pos.move.y=e.touches[0].pageY;
                    }
                    function updateNowPos(){
                        pos.now.left=parseInt(ele.css('left'))||0;
                        pos.now.top=parseInt(ele.css('top'))||0;
                    }
                    function updateDelta(){
                        pos.delta.x=pos.move.x-pos.start.x;
                        pos.delta.y=pos.move.y-pos.start.y;
                    }
                    function setPos(){
                        var left=pos.now.left+pos.delta.x+'px';
                        var top=pos.now.top+pos.delta.y+'px';
                        ele.css({
                                'left':left,
                                'top':top,
                            });
                        scope.floatage.style.left=left;
                        scope.floatage.style.top=top;
                    }
                    function prevent(e){
                        e.preventDefault();
                    }
                    function stop(e){
                        e.stopPropagation();
                    }
                }
        }
    }
    // 拖拽设置值指令
    function dragSetDirective(){
        return {
            scope:{
                'defaultx':'=',
                'big':'=',
                'unit':'@',
                'type':'@'
            },
            templateUrl:'partials/dragSet.html',
            controller:function($scope,magasProvider,findActiveProvider){
                $scope.newMaga=magasProvider.getNewMaga();
                $scope.findActive=findActiveProvider;
            },
            link:function(scope,ele,attrs){

                var ele=$(ele[0]),
                    newMaga=scope.newMaga,
                    findActive=scope.findActive,
                    setLine=ele.find('.set-line'),
                    setBtn=ele.find('.set-btn'),
                    setLineWidth=setLine.width(),
                    eleWidth=ele.width(),
                    values=ele.find('.values span'),
                    big=scope.big,
                    type=scope.type.slice(0,1).toUpperCase()+scope.type.slice(1),
                    realValue=scope.defaultx,
                    pos={
                        startX:0,
                        moveX:0,
                        endX:0,
                        deltaX:0,
                        now:0
                    };
                setBtn.on('touchstart',sometime);
                init();
                function init(){
                    var temp=$('.animation-operate').removeClass('hide');
                    setLineWidth=setLine.width();
                    temp.addClass('hide');
                    setBtn.css('left',parseInt(setLineWidth)/scope.big*scope.defaultx+'px')
                    values.html(scope.defaultx)
                }
                function sometime(e){
                    ele.on('touchmove',drag);
                    ele.on('touchend',drop);
                    setLineWidth=setLine.width()
                    var now=parseInt(setBtn.css('left'));
                    pos.now=now;
                    pos.startX=e.touches[0].pageX;

                }  
                function drag(e){
                    pos.moveX=e.touches[0].pageX;
                    pos.deltaX=e.touches[0].pageX-pos.startX;
                    var value=pos.now+pos.deltaX;
                    if(value<0){
                        value=0;
                    }else if(value>setLineWidth){
                        value=setLineWidth;
                    }
                    setBtn.css('left',value);
                    realValue=parseFloat(value/setLineWidth*big).toFixed(1);
                    values.html(realValue);
                }
                function getAcitve(){
                    return newMaga.activeFloatage;
                }
                function drop(e){
                    var active=getAcitve();
                    var activeId=getAcitve().uniqueId;
                    console.log(active);
                    var dom=document.querySelector('#'+activeId);
                    $(this).off(drop).off(drag);
                    var floatage=newMaga.activeFloatage;
                    floatage.style['webkitAnimation'+type]=realValue+'s';
                    floatage.style['animation'+type]=realValue+'s';
                    dom.style['webkitAnimation'+type]=realValue+'s';
                    dom.style['animation'+type]=realValue+'s';
                }
            }
        };
    }

    //超链接底部导航
    function btn(){
        return {
            scope:{},
            restrict:'A',
            link:function(scope,element,attrs){
                var obj = $(element[0]);
                var btn_list = obj.find(".edit_text_nav").find("div");
                var edit_box = obj.find(".edit_box");
                var area = edit_box.find(".display_area");
                var now=null;
                var show=false;
                var btnLink=false;
                btn_list.each(function(i){  
                        $(this).on("tap",function(){ 
                                if(i==4)
                                {
                                    area.css("visibility","hidden");
                                    if(!btnLink)
                                    {
                                        $(".add_btn_link").css("visibility","inherit");
                                        $(this).addClass("act").siblings().removeClass("act");
                                        /*edit_box.removeClass("edit_show");*/
                                        btnLink=true;
    
                                    
                                    }else{
                                        $(".add_btn_link").css("visibility","hidden");
                                        /*edit_box.addClass("edit_show");*/
                                        btnLink=false;
                                        $(this).removeClass("act");
                                        

                                    }
                                    
                                }else{
                                    if(now==i)
                                        {
                                            if(!show)
                                            {
                                                area.eq(i).css("visibility","hidden");
                                                $(this).removeClass("act");
                                                /*edit_box.removeClass("edit_show");*/
                                                show=true;
                                                
                                            }else{
                                                area.eq(i).css("visibility","inherit");
                                                $(this).addClass("act");
                                                /*edit_box.addClass("edit_show");*/
                                                show=false; 
                                        }                           
                                    }else{
                                        show=false;
                                        btnLink=false;  
                                        $(this).addClass("act").siblings().removeClass("act");
                                        /*edit_box.addClass("edit_show");*/
                                        area.eq(i).css("visibility","inherit").siblings().css("visibility","hidden");
                                        $(".add_btn_link").css("visibility","hidden");
                                         
                                    }
                                }   
                                    
                                now=i
                        });   
                })
            }   
        }
    }

    //拖拽设置
    function myScroll(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                maxnum : '@',
                minnum : '@',
                thisnum: '=',
            },
            template: ' <div>'+
                            '<div class="set-l">小</div>'+
                            '<div class="set-line">'+
                                '<div class="set-btn">'+
                                    '<div class="set-btn-bj">'+
                                    '<div class="values_box">'+
                                        '<span class="values">{{thisnum}}</span>'+
                                        '<span class="units"></span>'+
                                    '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="set-r">大</div>'+
                        '</div>',
        
            link : function(scope,element,attr){
                
                var element=$(element[0]);
                var obj1 = element.find(".set-btn");
                var obj2 = element.find(".set-line");
                var obj3 = element.find(".values");
                var obj4 = element.find(".units");
                var obj5 = element.find(".set-btn-bj");
                var len = obj2.width();
                 obj1.css("left", ( parseInt(scope.thisnum) -  parseInt(scope.minnum) )/ parseInt(scope.maxnum ) * len);
                 
                obj1.on("touchstart",function(ev){
                    
                    var disX=ev.targetTouches[0].pageX - obj1.position().left;
                    var disY=ev.targetTouches[0].pageY - obj1.position().top;  
                    function drag(ev){    
                        var l=ev.targetTouches[0].pageX-disX;   
                        if(l<0)
                        {
                            l=0;
                        }else if(l > obj2.width() - obj5.width())
                        {
                            l = obj2.width() - obj5.width()
                        }
                        obj1.css("left",l); 
                        var sacle=l/(obj2.width() - obj5.width());
                        scope.$apply(function(){
                            scope.thisnum = parseInt((sacle * scope.maxnum ) + parseInt(scope.minnum))+'px';
                        })
                        
                        obj4.show()
                         
                    }
                    
                    function drop(){
                        $(document).off("touchmove",drag);
                        $(document).off("touchend",drop);
                        
                    }
                    
                    $(document).on("touchmove",drag);
                    $(document).on("touchend",drop);
                   /* ev.preventDefault(); */   
                    
                });  
            },
        }   
    }

    
    //添加按钮拖拽
    function btnDragDirective(){
        return{
            restrict: 'AE',
            replace: true,
            scope:{
                myFn : '&' ,
                myData : '='    
            },
            template : '<div class="bj_color" >'+
                       '<div class="bj_color_par">'+
                       '<span ng-repeat="color in myData" ng-click="myFn({num:$index})" style="background:{{color.val}}"></span> '+
                       '</div>'+
                       '</div>',
            link:function(scope,element,attrs){
                var element=$(element[0]);
                var obj1 = element.find(".bj_color_par");
                var span,w ;

                _.delay(function(){
                    span = obj1.find("span");
                    w = span.width() * span.length + 10;
                    obj1.width(w)
    
                },100);
                
                obj1.on("touchstart",function(ev){
                    
                    var disX=ev.targetTouches[0].pageX - obj1.position().left;
                    
                    function drag(ev){
                        var l=ev.targetTouches[0].pageX-disX;   
                        console.log( -(obj1.width() - element.width()))
                        if(l>0)
                        {
                            l=0;
                        }else if(l < -(obj1.width() - element.width())   )
                        {
                            l = -(obj1.width() - element.width())
                        }
                        
                        obj1.css("left",l);  
                    }
                    function drop(){
                        $(document).off("touchmove",drag);
                        $(document).off("touchend",drop);   
                    }
                    
                    $(document).on("touchmove",drag);
                    $(document).on("touchend",drop);
                    /*ev.preventDefault(); */
                    
                });
            }
        }
    }
    
    //设置音乐
    function setmusicDirective(){
        return{
            restrict:'A',
            controller:function($scope,magasProvider){
                $scope.maga = magasProvider.getNewMaga();
                
            },
            link:function(scope,element,attrs){
                var element=$(element[0]);
                var dd;
                _.delay(function(){     
                    dd=element.find("dd");
                    dd.on("tap",function(){ 
                        dd.removeClass("act");
                        $(this).addClass("act");
                        scope.id = this.id;     
                    })
                },500)
                
            }
        }
        
    }
}));
'use strict';
;(function(root,factory){
    var angular=window.angular;
    factory.call(root,angular);
}(this,function(angular){
    //定义一个主模块
    angular.module('app',['ngRoute','ngTouch','appControllers','appServices','appDirectives']).
        config(['$routeProvider','$provide','$locationProvider',config]).
        run(['$templateCache',templateCache]);
    //缓存模板
    function templateCache($templateCache){
        $templateCache.put('partials/select.html');
        $templateCache.put('partials/music.html');
        $templateCache.put('partials/text.html');
        $templateCache.put('partials/make.html');
    }
    //路由配置
    function config($routeProvider,$provide,$locationProvider){
        $routeProvider.
            when('/',{
                templateUrl:'partials/select.html',
                controller:'selectController'
            }).
            when('/make',{
                templateUrl:'partials/make.html',
                controller:'makeController'
            }).
            when('/make/:random',{
                templateUrl:'partials/make.html',
                controller:'makeController'
            }).
            when('/music',{
                templateUrl:'partials/music.html',
                controller:'musicController'
            }).
            when('/text',{
                templateUrl:'partials/text.html',
                controller:'textController'
            }).
            when('/lottery',{
                templateUrl:'partials/lottery.html',
                controller:'lotteryController'
            }).
            when('/hyperLink',{
                templateUrl:'partials/hyperLink.html',
                controller:'hyperLinkController'
            }).
            when('/preview',{
                templateUrl:'partials/preview.html',
                controller:'previewController'
            }).
            when('/wechat',{
                templateUrl:'partials/wechat.html',
                controller:'wechatController'
            }).
            when('/wechat/-shareImg_btn-/:any',{
                templateUrl:'partials/wechat.html',
                controller:'wechatController'
            }).
            when('/-back_btn-',{
                templateUrl:'partials/select.html',
                controller:'selectController'
            }).
            when('/shape',{
                templateUrl:'partials/shape.html',
                controller:'shapeController'
            }).
            when('/shapes',{
                templateUrl:'partials/shapes.html',
                controller:'shapesController'
            }).
            otherwise({redirectTo:'/'}); 
    }
}));