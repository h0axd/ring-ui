!function(n){function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=n,e.c=r,e.i=function(n){return n},e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=958)}({10:function(n,e){function r(n,e){var r=n[1]||"",o=n[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=t(o);return[r].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[r].join("\n")}function t(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=r(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},11:function(n,e,r){n.exports=r(2)(371)},12:function(n,e,r){n.exports=r(2)(244)},13:function(n,e,r){n.exports=r(2)(359)},14:function(n,e,r){e=n.exports=r(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,r){function t(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=b[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(u(t.parts[i],e))}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(u(t.parts[i],e));b[t.id]={id:t.id,refs:1,parts:a}}}}function o(n,e){for(var r=[],t={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c=i[1],l=i[2],s=i[3],f={css:c,media:l,sourceMap:s};t[a]?t[a].parts.push(f):r.push(t[a]={id:a,parts:[f]})}return r}function i(n,e){var r=y(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=x[x.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),x.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(n.insertAt.before,r);r.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=f();r&&(n.attrs.nonce=r)}return s(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",s(e,n.attrs),i(n,e),e}function s(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function f(){return r.nc}function u(n,e){var r,t,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var s=w++;r=v||(v=c(e)),t=p.bind(null,r,s,!1),o=p.bind(null,r,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(e),t=g.bind(null,r,e),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=c(e),t=d.bind(null,r),o=function(){a(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}function p(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var r=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function g(n,e,r){var t=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(t=O(t)),o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var b={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},y=function(n){var e={};return function(n,r){if("function"==typeof n)return n();if(void 0===e[n]){var t=m.call(this,n,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),v=null,w=0,x=[],O=r(65);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(n,e);return t(r,e),function(n){for(var i=[],a=0;a<r.length;a++){var c=r[a],l=b[c.id];l.refs--,i.push(l)}n&&t(o(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete b[l.id]}}}};var _=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}()},2:function(n,e){n.exports=vendor_lib},20:function(n,e,r){n.exports=r(2)(247)},3:function(n,e,r){n.exports=r(2)(421)},4:function(n,e,r){n.exports=r(2)(442)},424:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},o.apply(this,arguments)}function i(n,e){if(null==n)return{};var r,t,o=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function a(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}function c(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function s(n,e,r){return e&&l(n.prototype,e),r&&l(n,r),n}function f(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?u(n):e}function u(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}r.d(e,"a",function(){return C});var b=r(4),h=(r.n(b),r(3)),m=(r.n(h),r(13)),y=(r.n(m),r(7)),v=(r.n(y),r(9)),w=(r.n(v),r(11)),x=(r.n(w),r(5)),O=r.n(x),_=r(8),j=r.n(_),S=r(12),k=r.n(S),E=r(426),U=r.n(E),C=function(n){function e(){return c(this,e),f(this,p(e).apply(this,arguments))}return d(e,n),s(e,[{key:"render",value:function(){var n=this.props,e=n.children,r=n.className,t=i(n,["children","className"]),a=k()(U.a.group,r);return O.a.createElement("span",o({},t,{className:a}),e)}}]),e}(x.Component);!function(n,e,r){e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r}(C,"propTypes",{children:j.a.node,className:j.a.string})},425:function(n,e,r){e=n.exports=r(10)(!1),e.i(r(14),""),e.i(r(6),void 0),e.push([n.i,".group_5db > *:not(:last-child) {\n\n    margin-right: 8px;\n}\n",""]),e.locals={unit:""+r(6).locals.unit,group:"group_5db"}},426:function(n,e,r){var t=r(425);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,r(15)(t,o),t.locals&&(n.exports=t.locals)},49:function(n,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(r=window)}n.exports=r},5:function(n,e,r){n.exports=r(2)(57)},534:function(n,e,r){(function(e){function r(n,e){function r(){if(!o){if(t("throwDeprecation"))throw new Error(e);t("traceDeprecation")?console.trace(e):console.warn(e),o=!0}return n.apply(this,arguments)}if(t("noDeprecation"))return n;var o=!1;return r}function t(n){try{if(!e.localStorage)return!1}catch(n){return!1}var r=e.localStorage[n];return null!=r&&"true"===String(r).toLowerCase()}n.exports=r}).call(e,r(49))},6:function(n,e,r){e=n.exports=r(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},65:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:t+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},666:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},o.apply(this,arguments)}function i(n,e){if(null==n)return{};var r,t,o=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function a(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}function c(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function s(n,e,r){return e&&l(n.prototype,e),r&&l(n,r),n}function f(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?u(n):e}function u(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function b(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}r.d(e,"a",function(){return R});var h=r(4),m=(r.n(h),r(3)),y=(r.n(m),r(13)),v=(r.n(y),r(7)),w=(r.n(v),r(9)),x=(r.n(w),r(11)),O=(r.n(x),r(5)),_=r.n(O),j=r(8),S=r.n(j),k=r(12),E=r.n(k),U=r(534),C=r.n(U),z=r(764),P=r.n(z),N=C()(function(){},"<Text comment> is deprecated, use <Text info> instead"),R=function(n){function e(){return c(this,e),f(this,p(e).apply(this,arguments))}return d(e,n),s(e,[{key:"render",value:function(){var n=this.props,e=n.children,r=n.className,t=n.comment,a=n.info,c=i(n,["children","className","comment","info"]);t&&N();var l=E()(P.a.text,r,b({},P.a.info,a||t));return _.a.createElement("span",o({className:l},c),e)}}]),e}(O.Component);b(R,"propTypes",{children:S.a.node,comment:S.a.bool,info:S.a.bool,className:S.a.string})},690:function(n,e,r){e=n.exports=r(10)(!1),e.i(r(14),""),e.push([n.i,".text_6cb {\n  color: #1f2326;\n  color: var(--ring-text-color);\n}\n\n.info_5eb {\n  color: #737577;\n  color: var(--ring-secondary-color);\n}\n",""]),e.locals={text:"text_6cb",info:"info_5eb"}},7:function(n,e,r){n.exports=r(2)(443)},764:function(n,e,r){var t=r(690);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,r(15)(t,o),t.locals&&(n.exports=t.locals)},8:function(n,e,r){n.exports=r(2)(84)},9:function(n,e,r){n.exports=r(2)(83)},958:function(n,e,r){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function a(n,e,r){return e&&i(n.prototype,e),r&&i(n,r),n}function c(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?l(n):e}function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function f(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}function u(n,e){return(u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}Object.defineProperty(e,"__esModule",{value:!0});var p=r(4),d=(r.n(p),r(3)),g=(r.n(d),r(5)),b=r.n(g),h=r(20),m=(r.n(h),r(666)),y=r(424),v=function(n){function e(){return o(this,e),c(this,s(e).apply(this,arguments))}return f(e,n),a(e,[{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement(y.a,null,b.a.createElement(m.a,null,"Text"),b.a.createElement(m.a,{info:!0},"with an info message")))}}]),e}(g.Component);r.i(h.render)(b.a.createElement(v,null),document.getElementById("text"))}});