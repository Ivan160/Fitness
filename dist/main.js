!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=function(t){var e=t.duration;e||(e=400);var n=t.timing;n||(n=function(t){return t});var i=t.draw,r=performance.now();requestAnimationFrame((function t(o){var s=(o-r)/e;s>1&&(s=1);var a=n(s);i(a),s<1&&requestAnimationFrame(t)}))},r=function(t){function e(){var e,n=window.pageYOffset,r=this.getAttribute("href").slice(1);r?e=document.getElementById(r).getBoundingClientRect().top:r||(e=-n),i({duration:t,draw:function(t){if(e>n)window.scrollTo(0,e*t+n);else if(e<n)window.scrollTo(0,e*t+n);else if(e==n)return}})}t||(t=500);for(var n=document.querySelectorAll('[href^="#"]'),r=0;r<n.length;r++)n[r].addEventListener("click",e)};function o(t){return{height:parseInt(getComputedStyle(t).height),padding:{top:parseInt(getComputedStyle(t).paddingTop),bot:parseInt(getComputedStyle(t).paddingBottom)}}}var s=function(t,e){"none"===getComputedStyle(t).display||"auto"===getComputedStyle(t).height||"0"===getComputedStyle(t).opacity?function(t,e){e||(e=250),t.style.overflow="hidden",t.style.display="block";var n=o(t);t.style.paddingTop="0",t.style.paddingBottom="0",t.style.height="0",i({duration:e,draw:function(e){t.style.height=n.height*e+"px",t.style.paddingTop=n.padding.top*e+"px",t.style.paddingBottom=n.padding.bot*e+"px",1===e&&t.setAttribute("style","display: block")}})}(t,e):function(t,e){e||(e=250),t.style.overflow="hidden",t.style.display="block";var n=o(t);i({duration:e,draw:function(e){t.style.height=n.height*(1-e)+"px",t.style.paddingTop=n.padding.top*(1-e)+"px",t.style.paddingBottom=n.padding.bot*(1-e)+"px",1===e&&t.setAttribute("style","display: none")}})}(t,e)},a=function(t,e){e||(e=300),t.style.opacity="0",t.style.display="block",i({duration:e,draw:function(e){t.style.opacity=1*e,1===e&&t.setAttribute("style","display: block")}})},u=function(t,e){e||(e=300),t.style.opacity="1",t.style.display="block",i({duration:e,draw:function(e){t.style.opacity=1*(1-e),1===e&&t.setAttribute("style","display: none")}})},l=function(){function t(t){t.addEventListener("click",(function(e){var n=e.target;switch(!0){case n.matches(".overlay"):case null!==n.closest(".close-form"):case n.matches(".close-btn"):return void u(t)}}))}for(var e=document.querySelectorAll("[data-popup]"),n=0;n<e.length;n++)e[n].addEventListener("click",(function(){var e=this.getAttribute("data-popup"),n=document.querySelector(e);"#gift"===e&&(this.style.display="none"),a(n),t(n)}))},c=function(t){for(var e={},n=0;n<t.elements.length;n++){var i=t.elements[n];if(i.name&&!i.disabled&&"file"!==i.type&&"reset"!==i.type&&"submit"!==i.type&&"button"!==i.type)if("select-multiple"===i.type)for(var r=0;r<i.options.length;r++)i.options[r].selected&&(e[i.name]=i.value);else("checkbox"!==i.type&&"radio"!==i.type||i.checked)&&(e[i.name]=i.value)}return e};var d=()=>{const t=document.querySelector("#card_order"),e=t.querySelector("#price-total"),n={1:1999,6:9900,9:13900,12:19900},r={1:2999,6:14990,9:21990,12:24990};let o=0;t.addEventListener("change",()=>{const s=c(t);"mozaika"===s["club-name"]?o=n[s["card-type"]]:"schelkovo"===s["club-name"]&&(o=r[s["card-type"]]),"ТЕЛО2019"===s.promo&&(o=Math.floor(o-.3*o));const a=+e.textContent;i({duration:700,draw(t){e.textContent=Math.floor(a+(o-a)*t)}})})},f=function(t){if(t){var e=t.elements,n=t.querySelector('[type="submit"]'),i=/^([а-яё]+|[a-z]+)$/i,r=/^([+]?[0-9\s-\(\)]{7,25})*$/,o=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)$/,s=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@$/,a=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)$/,u=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.$/,l=/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,c=["Незаполненное поле ввода","Введите Ваше реальное имя","Неверный формат номера телефона"],d=["Незаполненное поле ввода","Некорректный адрес электронной почты",'Адрес электронной почты должен содержать символ "@"','Введите часть адреса после символа "@"',"Введите расширение адреса. Например: .com или .ru"];!function(){if(!document.querySelector("#validator")){var e=document.createElement("style");e.id="validator",e.textContent="\n\t\t\t.error {max-width: 260px; width: max-content; display: block; font-size: 13px; line-height: 15px; color: #dc3545; position: absolute; left: 0; top: calc(100% + 8px); z-index: 100; padding: 6px 10px 7px; -webkit-border-radius: 1px; border-radius: 4px; background-color: #f8d7da; border-color: #f5c6cb;}\n\t\t\t.error:before {width: 0; height: 0; content: ''; position: absolute; left: 15px; top: -7px; border-right: 8px solid transparent; border-left: 8px solid transparent; border-bottom: 8px solid #f8d7da;}\n\t\t\t.form-control_error {border: 1px solid #dc3545;}\n\t\t\t.box-error {position: relative; display: inline-block;}\n\t\t",document.head.appendChild(e)}n.addEventListener("click",f),t.addEventListener("focus",(function(){var t,e=document.activeElement;e!==n&&((t=e).nextElementSibling&&(t.classList.remove("form-control_error"),t.parentNode.removeChild(t.nextElementSibling)))}),!0)}(),[].forEach.call(e,(function(t){if("input"===t.tagName.toLowerCase()&&t!==n&&("name"===t.name||"email"===t.name||"phone"===t.name||"text"===t.name)){var e=document.createElement("div");e.innerHTML=t.outerHTML,e.className="box-error",t.parentNode.replaceChild(e,t)}})),[].forEach.call(e,(function(t){t.addEventListener("blur",(function(t){var e=t.target,n=e.getAttribute("name"),i={};i[n]=e.value;var r=p(i,n);return 0!=r.length&&h(n,r),!1}))}))}function f(e){var i,r=function(t){var e={};if(!t.elements)return"";for(var i=0,r=t.elements.length;i<r;i++){var o=t.elements[i];"input"===o.tagName.toLowerCase()&&o!==n&&(e[o.name]=o.value)}return e}(t),o=!1;for(var s in r)0!=(i=p(r,s)).length&&(h(s,i),o=!0);return o&&e.preventDefault(),!1}function p(t,e){var n="",f={name:function(){0==t.name.length?n=c[0]:0==i.test(t.name)&&(n=c[1])},email:function(){switch(!0){case 0===t.email.length:n=c[0];break;case l.test(t.email):break;case u.test(t.email):case a.test(t.email):n=d[4];break;case s.test(t.email):n=d[3];break;case o.test(t.email):n=d[2];break;default:n=d[1]}},phone:function(){0==t.phone.length?n=c[0]:0==r.test(t.phone)&&(n=c[2])},text:function(){0==t.text.length&&(n=c[0])}};return f[e]&&f[e](),n}function h(e,n){var i=t.querySelector("[name="+e+"]");if(!i.nextElementSibling){var r=document.createElement("span");r.className="error",i.parentNode.appendChild(r),i.classList.add("form-control_error"),r.innerText=n}}},p=function(t,e){t.addEventListener("input",(function(t){var n=e,i=this.value.replace(/\D/g,""),r=0;n=n.replace(/[_\d]/g,(function(){return i.charAt(r++)||"_"})),this.value=n,n.lastIndexOf("_")<=0&&null!==t.data||((r=n.lastIndexOf(i.substr(-1)))<n.length&&n!=this.defaultValue?r++:r=n.indexOf("_"),this.setSelectionRange&&this.setSelectionRange(r,r))})),t.addEventListener("focus",(function(){0===this.value.length&&(this.value=e)})),t.addEventListener("blur",(function(){this.value.lastIndexOf("_")>0&&(this.value="")}))},h=function(t){for(var e=[],n=0;n<t.elements.length;n++){var i=t.elements[n];if(i.name&&"file"!==i.type&&"reset"!==i.type&&"submit"!==i.type&&"button"!==i.type)if("select-multiple"===i.type)for(var r=0;r<i.options.length;r++)i.options[r].selected&&e.push(i.name+"="+encodeURIComponent(i.options[r].value));else("checkbox"!==i.type&&"radio"!==i.type||i.checked)&&e.push(i.name+"="+encodeURIComponent(i.value))}return e.join("&")},m=function(t){for(var e=document.querySelectorAll("form"),n=0;n<e.length;n++)e[n].addEventListener("submit",(function(e){e.preventDefault();var n=e.target;if(n.querySelector('[type="submit"]').setAttribute("disabled","true"),!document.querySelector("#sendForm")){var i=document.createElement("style");i.id="sendForm",i.textContent="\n            .messageLoad {position: relative; padding: .75rem 1.25rem; margin: 1rem 0; border: 1px solid transparent; border-radius: .25rem; color: #007bff; background-color: #C9E0F9; border-color: #90BAE7;}\n            .messageSuccess {position: relative; padding: .75rem 1.25rem; margin: 1rem 0; border: 1px solid transparent; border-radius: .25rem; color: #155724; background-color: #d4edda; border-color: #c3e6cb;}\n            .messageError {position: relative; padding: .75rem 1.25rem; margin: 1rem 0; border: 1px solid transparent; border-radius: .25rem; color: #721c24; background-color: #f8d7da; border-color: #f5c6cb;}\n            ",document.head.appendChild(i)}var r=document.createElement("div");r.className="messageLoad",r.innerText="Отправка...",n.appendChild(r);var o=h(n),s=new XMLHttpRequest;s.open("POST",t,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),s.send(o),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&200!==s.status&&(r.innerText="Упс, что-то пошло не так...",r.className="messageError",setTimeout((function(){r.style.display="none"}),1e4)),s.readyState===XMLHttpRequest.DONE&&200===s.status&&(r.innerText="Форма успешно отправлена!",r.className="messageSuccess",setTimeout((function(){r.style.display="none"}),1e4))},n.reset()}))},v={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function g(t){console.error("[Glide warn]: "+t)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},k=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0},x=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function S(t){return parseInt(t)}function A(t){return"string"==typeof t}function T(t){var e=void 0===t?"undefined":y(t);return"function"===e||"object"===e&&!!t}function H(t){return"function"==typeof t}function E(t){return void 0===t}function O(t){return t.constructor===Array}function C(t,e,n){var i={};for(var r in e)H(e[r])?i[r]=e[r](t,i,n):g("Extension must be a function");for(var o in i)H(i[o].mount)&&i[o].mount();return i}function L(t,e,n){Object.defineProperty(t,e,n)}function z(t,e){var n=_({},t,e);return e.hasOwnProperty("classes")&&(n.classes=_({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=_({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=_({},t.breakpoints,e.breakpoints)),n}var M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,t),this.events=e,this.hop=e.hasOwnProperty}return w(t,[{key:"on",value:function(t,e){if(O(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var i=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][i]}}}},{key:"emit",value:function(t,e){if(O(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),P=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(this,t),this._c={},this._t=[],this._e=new M,this.disabled=!1,this.selector=e,this.settings=z(v,n),this.index=this.settings.startAt}return w(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),T(t)?this._c=C(this,t,this._e):g("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return O(t)?this._t=t:g("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=z(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){T(t)?this._o=t:g("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=S(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function j(){return(new Date).getTime()}function q(t,e,n){var i=void 0,r=void 0,o=void 0,s=void 0,a=0;n||(n={});var u=function(){a=!1===n.leading?0:j(),i=null,s=t.apply(r,o),i||(r=o=null)},l=function(){var l=j();a||!1!==n.leading||(a=l);var c=e-(l-a);return r=this,o=arguments,c<=0||c>e?(i&&(clearTimeout(i),i=null),a=l,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(u,c)),s};return l.cancel=function(){clearTimeout(i),a=0,i=r=o=null},l}var R={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function D(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function N(t){return!!(t&&t instanceof window.HTMLElement)}var Z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,t),this.listeners=e}return w(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];A(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];A(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var I=["ltr","rtl"],B={">":"<","<":">","=":"="};function W(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function F(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function V(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function G(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return T(i)?n-i.before:n-i}return n}}}function $(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var X=!1;try{var Y=Object.defineProperty({},"passive",{get:function(){X=!0}});window.addEventListener("testPassive",null,Y),window.removeEventListener("testPassive",null,Y)}catch(t){}var U=X,K=["touchstart","mousedown"],J=["touchmove","mousemove"],Q=["touchend","touchcancel","mouseup","mouseleave"],tt=["mousedown","mousemove","mouseup","mouseleave"];function et(t){return T(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(g("Breakpoints option must be an object"),{});var e}var nt={Html:function(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.cloneSlide)}))}};return L(n,"root",{get:function(){return n._r},set:function(t){A(t)&&(t=document.querySelector(t)),N(t)?n._r=t:g("Root element must be a existing Html node")}}),L(n,"track",{get:function(){return n._t},set:function(t){N(t)?n._t=t:g('Could not find track element. Please use [data-glide-el="track"] attribute.')}}),L(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[F,V,G,$].concat(t._t,[W]);return{mutate:function(r){for(var o=0;o<i.length;o++){var s=i[o];H(s)&&H(s().modify)?r=s(t,e,n).modify(r):g("Transformer should be a function that returns an object with `modify()` method")}return r}}}(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",(function(r){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after((function(){n.emit("translate.jump"),i.set(a*(s-1))})),i.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after((function(){n.emit("translate.jump"),i.set(0)})),i.set(a*s+o*s)):i.set(r.movement)})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return L(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(B[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return L(i,"value",{get:function(){return i._v},set:function(t){I.indexOf(t)>-1?i._v=t:g("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return L(i,"value",{get:function(){return i._v},set:function(t){T(t)?(t.before=S(t.before),t.after=S(t.after)):t=S(t),i._v=t}}),L(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return T(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return L(i,"length",{get:function(){return e.Html.slides.length}}),L(i,"width",{get:function(){return e.Html.root.offsetWidth}}),L(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),L(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[R[o][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?r[R[o][1]]=this.value/2+"px":r[R[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return L(i,"value",{get:function(){return S(t.settings.gap)}}),L(i,"grow",{get:function(){return i.value*(e.Sizes.length-1)}}),L(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],q((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return L(i,"offset",{get:function(){return i._o},set:function(t){i._o=E(t)?0:S(t)}}),L(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),L(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=+!!t.settings.peek,u=o+a,l=i.slice(0,u),c=i.slice(-u),d=0;d<Math.max(1,Math.floor(o/i.length));d++){for(var f=0;f<l.length;f++){var p=l[f].cloneNode(!0);p.classList.add(s.cloneSlide),n.push(p)}for(var h=0;h<c.length;h++){var m=c[h].cloneNode(!0);m.classList.add(s.cloneSlide),n.unshift(m)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),u=e.Sizes.slideWidth+"px",l=0;l<a.length;l++)i.appendChild(a[l]);for(var c=0;c<s.length;c++)i.insertBefore(s[c],r[0]);for(var d=0;d<t.length;d++)t[d].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return L(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new Z,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,q((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.activeSlide),D(i).forEach((function(t){t.classList.remove(n.activeSlide)})))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(n.activeSlide)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,i=e.steps,r=e.direction,o="number"==typeof S(i)&&0!==S(i);switch(r){case">":">"===i?t.index=n:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):o?t.index+=Math.min(n-t.index,-S(i)):t.index++;break;case"<":"<"===i?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=n):o?t.index-=Math.min(t.index,S(i)):t.index--;break;case"=":t.index=i;break;default:g("Invalid direction pattern ["+r+i+"] has been used")}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return L(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?S(e)?S(e):e:0}}}),L(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(S(n.perView)-1)+S(n.focusAt):i-1}}),L(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new Z,r=0,o=0,s=0,a=!1,u=!!U&&{passive:!0},l={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=S(i.pageX),s=S(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,l=a.touchRatio,c=a.classes,d=this.touches(i),f=S(d.pageX)-o,p=S(d.pageY)-s,h=Math.abs(f<<2),m=Math.abs(p<<2),v=Math.sqrt(h+m),g=Math.sqrt(m);if(!(180*(r=Math.asin(g/v))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(f*parseFloat(l)),e.Html.root.classList.add(c.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=this.touches(i),u=this.threshold(i),l=a.pageX-o,c=180*r/Math.PI,d=Math.round(l/e.Sizes.slideWidth);this.enable(),l>u&&c<s.touchAngle?(s.perTouch&&(d=Math.min(d,S(s.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve("<"+d))):l<-u&&c<s.touchAngle?(s.perTouch&&(d=Math.max(d,-S(s.perTouch))),e.Direction.is("rtl")&&(d=-d),e.Run.make(e.Direction.resolve(">"+d))):e.Move.make(),e.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings;r.swipeThreshold&&i.on(K[0],e.Html.wrapper,(function(t){n.start(t)}),u),r.dragThreshold&&i.on(K[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(K[0],e.Html.wrapper,u),i.off(K[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(J,e.Html.wrapper,q((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(J,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(Q,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(Q,e.Html.wrapper)},touches:function(t){return tt.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return tt.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){l.unbindSwipeStart(),l.unbindSwipeMove(),l.unbindSwipeEnd(),i.destroy()})),l},Images:function(t,e,n){var i=new Z,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new Z,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));r=!1}return this}};return L(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new Z,r=!!U&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&(i.classList.add(n.classes.activeNav),D(i).forEach((function(t){t.classList.remove(n.classes.activeNav)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return L(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new Z,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new Z,r={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&E(this._i)&&(this._i=setInterval((function(){n.stop(),e.Run.make(">"),n.start()}),this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t.stop()})),i.on("mouseout",e.Html.root,(function(){t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return L(r,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return S(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","pause","destroy","swipe.start","update"],(function(){r.stop()})),n.on(["run.after","play","swipe.end"],(function(){r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new Z,r=t.settings,o=et(r.breakpoints),s=_({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return _(r,a.match(o)),i.on("resize",window,q((function(){t.settings=z(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=et(o),s=_({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},it=function(t){function e(){return b(this,e),x(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),w(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return k(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,_({},nt,t))}}]),e}(P);addEventListener("DOMContentLoaded",(function(){r(),document.querySelector(".club-select").addEventListener("click",(function(){var t=this.querySelector("ul");s(t)})),l(),d();for(var t=document.querySelectorAll("form"),e=0;e<t.length;e++)f(t[e]);var n=document.querySelectorAll('[name="phone"]');for(e=0;e<n.length;e++)p(n[e],"+7 (___) ___-__-__");m("./server.php"),new it(".main-slider",{type:"carousel",autoplay:7e3}).mount(),new it(".services-slider",{type:"carousel",perView:5,gap:0,autoplay:5e3,breakpoints:{768:{perView:3},580:{perView:1}}}).mount(),new it(".gallery-slider",{type:"carousel",autoplay:7e3}).mount()}))}]);