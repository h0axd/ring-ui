!function(n){function r(o){if(e[o])return e[o].exports;var t=e[o]={i:o,l:!1,exports:{}};return n[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var e={};r.m=n,r.c=e,r.i=function(n){return n},r.d=function(n,e,o){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="/",r(r.s=1033)}({10:function(n,r){function e(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var i=o(t);return[e].concat(t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"})).concat([i]).join("\n")}return[e].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var o=e(r,n);return r[2]?"@media "+r[2]+"{"+o+"}":o}).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(o[i]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),r.push(a))}},r}},1033:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e(55),t=e.n(o),i=e(895);t.a.module("Example.island",[i.a])},14:function(n,r,e){r=n.exports=e(10)(!1),r.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  --ring-unit: 8px;\n\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: #111314;\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,r,e){function o(n,r){for(var e=0;e<n.length;e++){var o=n[e],t=b[o.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](o.parts[i]);for(;i<o.parts.length;i++)t.parts.push(f(o.parts[i],r))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],r));b[o.id]={id:o.id,refs:1,parts:a}}}}function t(n,r){for(var e=[],o={},t=0;t<n.length;t++){var i=n[t],a=r.base?i[0]+r.base:i[0],l=i[1],s=i[2],c=i[3],d={css:l,media:s,sourceMap:c};o[a]?o[a].parts.push(d):e.push(o[a]={id:a,parts:[d]})}return e}function i(n,r){var e=v(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(r,o.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),y.push(r);else if("bottom"===n.insertAt)e.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var t=v(n.insertAt.before,e);e.insertBefore(r,t)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=y.indexOf(n);r>=0&&y.splice(r,1)}function l(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=d();e&&(n.attrs.nonce=e)}return c(r,n.attrs),i(n,r),r}function s(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(r,n.attrs),i(n,r),r}function c(n,r){Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])})}function d(){return e.nc}function f(n,r){var e,o,t,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var c=w++;e=x||(x=l(r)),o=u.bind(null,e,c,!1),t=u.bind(null,e,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=s(r),o=g.bind(null,e,r),t=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=l(r),o=p.bind(null,e),t=function(){a(e)});return o(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;o(n=r)}else t()}}function u(n,r,e,o){var t=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=k(r,t);else{var i=document.createTextNode(t),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r){var e=r.css,o=r.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function g(n,r,e){var o=e.css,t=e.sourceMap,i=void 0===r.convertToAbsoluteUrls&&t;(r.convertToAbsoluteUrls||i)&&(o=_(o)),t&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var a=new Blob([o],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}var b={},h=function(n){var r;return function(){return void 0===r&&(r=n.apply(this,arguments)),r}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,r){return r?r.querySelector(n):document.querySelector(n)},v=function(n){var r={};return function(n,e){if("function"==typeof n)return n();if(void 0===r[n]){var o=m.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[n]=o}return r[n]}}(),x=null,w=0,y=[],_=e(67);n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");r=r||{},r.attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=h()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=t(n,r);return o(e,r),function(n){for(var i=[],a=0;a<e.length;a++){var l=e[a],s=b[l.id];s.refs--,i.push(s)}n&&o(t(n,r),r);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete b[s.id]}}}};var k=function(){var n=[];return function(r,e){return n[r]=e,n.filter(Boolean).join("\n")}}()},1542:function(n,r,e){"use strict";var o=e(55),t=e.n(o),i=e(895);t.a.module("Example.island",[i.a])},19:function(n,r,e){n.exports=e(2)(335)},2:function(n,r){n.exports=vendor_lib},25:function(n,r,e){n.exports=e(2)(401)},408:function(n,r,e){var o=e(448);"string"==typeof o&&(o=[[n.i,o,""]]);var t={hmr:!0};t.transform=void 0,t.insertInto=void 0,e(15)(o,t),o.locals&&(n.exports=o.locals)},448:function(n,r,e){r=n.exports=e(10)(!1),r.i(e(14),""),r.i(e(6),void 0),r.push([n.i,".island_72e {\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid #dfe5eb;\n\n  border: 1px solid var(--ring-line-color);\n  border-radius: 3px;\n  border-radius: var(--ring-border-radius);\n\n  background-color: #fff;\n\n  background-color: var(--ring-content-background-color);\n  box-shadow: 0 1px 4px rgba(0, 42, 76, .15);\n  box-shadow: 0 1px 4px var(--ring-popup-shadow-color);\n}\n\n.withTransparentBottomBorder_54a {\n  transition: border-bottom-color 0.1s;\n\n  border-bottom: 1px solid transparent;\n}\n\n.header_c70 {\n\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 32px;\n\n  line-height: 28px;\n}\n\n.withBottomBorder_d57.withBottomBorder_d57 {\n  border-bottom-color: rgba(0, 42, 76, .1);\n  border-bottom-color: var(--ring-popup-border-color);\n  border-top-left-radius: 3px;\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: 3px;\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.title_a89 {\n  display: block;\n  float: left;\n\n  transform-origin: 0 50%;\n  word-break: break-word;\n\n  color: #1f2326;\n\n  color: var(--ring-heading-color);\n\n  font-weight: bold;\n}\n\n.narrowIsland_6bd .header_c70 {\n  padding: 0 16px;\n}\n\n.content_3da {\n  position: relative;\n\n  display: flex;\n  overflow: auto;\n\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrollableWrapper_9eb {\n  overflow: auto;\n\n  width: 100%;\n  padding: 16px 32px;\n}\n\n.narrowIsland_6bd .scrollableWrapper_9eb {\n  padding: 16px 16px;\n}\n\n.withoutPaddings_d19 .scrollableWrapper_9eb {\n  padding: 0;\n}\n\n.contentWithTopFade_102::before {\n  position: absolute;\n  z-index: 1;\n  z-index: var(--ring-fixed-z-index);\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: '';\n\n  pointer-events: none;\n\n  opacity: 0.8;\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), #fff);\n  background: linear-gradient(to top, rgba(255, 255, 255, 0), var(--ring-content-background-color)); /* stylelint-disable-line function-linear-gradient-no-nonstandard-direction */\n}\n\n.contentWithTopFade_102:first-child::before {\n  border-top-left-radius: 3px;\n  border-top-left-radius: var(--ring-border-radius);\n  border-top-right-radius: 3px;\n  border-top-right-radius: var(--ring-border-radius);\n}\n\n.contentWithBottomFade_7be::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n\n  width: 100%;\n  height: 24px;\n\n  content: '';\n  pointer-events: none;\n\n  opacity: 0.8;\n  border-bottom-right-radius: 3px;\n  border-bottom-right-radius: var(--ring-border-radius);\n  border-bottom-left-radius: 3px;\n  border-bottom-left-radius: var(--ring-border-radius);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--ring-content-background-color));\n}\n",""]),r.locals={unit:""+e(6).locals.unit,gradientStart:"rgba(255, 255, 255, 0)",gradientStop:"var(--ring-content-background-color)",island:"island_72e",withTransparentBottomBorder:"withTransparentBottomBorder_54a",header:"header_c70 withTransparentBottomBorder_54a",withBottomBorder:"withBottomBorder_d57",title:"title_a89",narrowIsland:"narrowIsland_6bd",content:"content_3da",scrollableWrapper:"scrollableWrapper_9eb",withoutPaddings:"withoutPaddings_d19",contentWithTopFade:"contentWithTopFade_102",contentWithBottomFade:"contentWithBottomFade_7be"}},55:function(n,r,e){n.exports=e(2)(252)},6:function(n,r,e){r=n.exports=e(10)(!1),r.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),r.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},67:function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=r.protocol+"//"+r.host,o=e+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var t=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(t))return n;var i;return i=0===t.indexOf("//")?t:0===t.indexOf("/")?e+t:o+t.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},878:function(n,r,e){"use strict";function o(n,r){r.ngClass&&(r.ngClass=r.ngClass.replace(/}\s*{/g,", "))}r.a=o;var t=e(25);e.n(t)},88:function(n,r,e){"use strict";function o(){var n,r;return function(e){n=e,r||(r=window.requestAnimationFrame(function(){n(),r=null,n=null}))}}r.a=o},895:function(n,r,e){"use strict";var o=e(19),t=(e.n(o),e(55)),i=e.n(t),a=e(408),l=e.n(a),s=e(940),c=e(939),d=e(878),f=i.a.module("Ring.island-ng",[s.a,c.a]);f.directive("rgIsland",function(){return{transclude:!0,replace:!0,bindToController:{narrow:"="},compile:d.a,template:'\n<div \n  class="'.concat(l.a.island,'" \n  ng-class="{\'').concat(l.a.narrowIsland,"': islandCtrl.narrow}\" \n  ng-transclude\n></div>\n"),controllerAs:"islandCtrl",controller:i.a.noop}}),r.a=f.name},939:function(n,r,e){"use strict";var o=e(19),t=(e.n(o),e(55)),i=e.n(t),a=e(408),l=e.n(a),s=e(88),c=e(878),d=e.i(s.a)(),f=i.a.module("Ring.island-ng.header",[]);f.directive("rgIslandContent",function(){return{transclude:!0,replace:!0,bindToController:{fade:"=?",onScroll:"&?"},compile:c.a,template:'\n<div\n  data-test="ring-island-content"\n  class='.concat(l.a.content,"\n  ng-class=\"{\n    '").concat(l.a.contentWithTopFade,"': contentCtrl.fade,\n    '").concat(l.a.contentWithBottomFade,'\': contentCtrl.fade\n  }"\n>\n  <div\n    class="').concat(l.a.scrollableWrapper,' js-scrollable-wrapper"\n    ng-transclude\n  ></div>\n</div>\n'),controllerAs:"contentCtrl",controller:["$scope","$element",function(n,r){var e=this,o=r[0];if(this.onScroll){var t=o.querySelector(".js-scrollable-wrapper"),i=function(r){var o=t.scrollTop;e.onScroll({$event:r,$scrollTop:o}),n.$apply()};t.addEventListener("scroll",function(){return d(i)})}}]}}),r.a=f.name},940:function(n,r,e){"use strict";var o=e(19),t=(e.n(o),e(55)),i=e.n(t),a=e(408),l=e.n(a),s=e(878),c=i.a.module("Ring.island-ng.content",[]);c.directive("rgIslandHeader",function(){return{transclude:!0,replace:!0,bindToController:{border:"=?"},compile:s.a,template:'\n<div\n  data-test="ring-island-header"\n  class="'.concat(l.a.header,'"\n  ng-class="{\'').concat(l.a.withBottomBorder,"': headerCtrl.border}\" \n  ng-transclude\n></div>\n"),controllerAs:"headerCtrl",controller:function(){var n=this;this.$onInit=function(){n.wrapWithTitle=void 0===n.wrapWithTitle||n.wrapWithTitle}}}}),r.a=c.name}});