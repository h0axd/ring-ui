!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1137)}({10:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1137:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(55);t.n(o),t(790)},12:function(n,e,t){n.exports=t(2)(253)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  --ring-unit: 8px;\n\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: #111314;\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=b[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],e));b[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=i[1],l=i[2],c=i[3],f={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(f):t.push(o[a]={id:a,parts:[f]})}return t}function i(n,e){var t=m(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),w.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=m(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function s(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=f();t&&(n.attrs.nonce=t)}return c(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function f(){return t.nc}function d(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var c=y++;t=x||(x=s(e)),o=u.bind(null,t,c,!1),r=u.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),o=g.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=p.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function u(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function g(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=_(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var b={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n,e){return e?e.querySelector(n):document.querySelector(n)},m=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=v.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),x=null,y=0,w=[],_=t(67);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=b[s.id];l.refs--,i.push(l)}n&&o(r(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete b[l.id]}}}};var k=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},1545:function(n,e,t){"use strict";var o=t(55);t.n(o),t(790)},19:function(n,e,t){n.exports=t(2)(335)},2:function(n,e){n.exports=vendor_lib},25:function(n,e,t){n.exports=t(2)(401)},283:function(n,e,t){n.exports=t(2)(313)},44:function(n,e,t){"use strict";function o(n){n&&n.element&&n.currentTheme&&(n.prevTheme&&n.element.classList.remove(n.prevTheme),n.element.classList.add(n.currentTheme))}t.d(e,"b",function(){return o});var r={LIGHT:"light",DARK:"dark"};e.a=r},457:function(n,e,t){n.exports=t(2)(402)},525:function(n,e,t){var o=t(565);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(15)(o,r),o.locals&&(n.exports=o.locals)},55:function(n,e,t){n.exports=t(2)(252)},565:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.i(t(6),void 0),e.push([n.i,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.title_1b8:hover:not(.selected_5a1) {\n    color: #ff008c;\n    color: var(--ring-link-hover-color);\n    outline-style: none;\n    box-shadow: inset 0 -1px 0 0 #ff008c;\n    box-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);\n}}\n\n.tabs_6d2 {\n}\n\n.titles_b4e {\n  display: inline-block;\n\n  margin-bottom: 16px;\n}\n\n.light_c61 .titles_b4e {\n  box-shadow: inset 0 -1px 0 0 #dfe5eb;\n  box-shadow: inset 0 -1px 0 0 var(--ring-line-color);\n}\n\n.dark_436 .titles_b4e {\n  box-shadow: inset 0 -1px 0 0 #263b4c;\n  box-shadow: inset 0 -1px 0 0 var(--ring-dark-line-color);\n}\n\n.title_1b8 {\n\n  position: relative;\n\n  display: inline-block;\n\n  padding: 0;\n\n  cursor: pointer;\n\n  color: inherit;\n\n  border: none;\n  background: none;\n\n  line-height: 32px\n}\n\n.title_1b8:focus:not(.selected_5a1),\n  .title_1b8:active:not(.selected_5a1) {\ncolor: #ff008c;\ncolor: var(--ring-link-hover-color);\noutline-style: none;\nbox-shadow: inset 0 -1px 0 0 #ff008c;\nbox-shadow: inset 0 -1px 0 0 var(--ring-link-hover-color);}\n\n.title_1b8[disabled] {\npointer-events: none;}\n\n.title_1b8 + .title_1b8 {\n  margin-left: 24px;\n}\n\n.light_c61 .title_1b8[disabled] {\ncolor: #999;\ncolor: var(--ring-disabled-color);}\n\n.dark_436 .title_1b8 {\n  color: #888;\n  color: var(--ring-dark-secondary-color)\n}\n\n.dark_436 .title_1b8[disabled] {\ncolor: #1f2326;\ncolor: var(--ring-text-color);}\n\n.selected_5a1 {\n  cursor: default;\n\n  outline: none;\n  box-shadow: inset 0 -3px 0 0 #1f2326;\n  box-shadow: inset 0 -3px 0 0 var(--ring-text-color);\n\n  font-weight: bold;\n}\n\n.dark_436 .selected_5a1 {\n  color: #fff;\n  color: var(--ring-dark-text-color);\n  box-shadow: inset 0 -3px 0 0 #008eff;\n  box-shadow: inset 0 -3px 0 0 var(--ring-main-color);\n}\n\n.visible_1b0 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  text-align: center;\n}\n\n.hidden_d6c {\n  visibility: hidden;\n\n  font-weight: bold;\n}\n\n.tabCounter_41e {\n  padding-left: 8px;\n\n  color: #737577;\n\n  color: var(--ring-secondary-color);\n\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 19px; /* prevent jumps in Firefox */\n}\n",""]),e.locals={unit:""+t(6).locals.unit,"line-shadow":"inset 0 -1px 0 0","selected-line-shadow":"inset 0 -3px 0 0",title:"title_1b8 "+t(6).locals.font,selected:"selected_5a1",tabs:"tabs_6d2 "+t(6).locals.font,titles:"titles_b4e",light:"light_c61",dark:"dark_436",visible:"visible_1b0",hidden:"hidden_d6c",tabCounter:"tabCounter_41e"}},6:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},67:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},790:function(n,e,t){"use strict";function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var r=t(19),i=(t.n(r),t(25)),a=(t.n(i),t(283)),s=(t.n(a),t(457)),l=(t.n(s),t(55)),c=t.n(l),f=t(12),d=t.n(f),u=t(525),p=t.n(u),g=t(44),b=c.a.module("Ring.tabs",[]);b.directive("rgTabs",["$location","$rootScope",function(n,e){return{restrict:"E",transclude:!0,template:t(889),replace:!0,scope:{tabParameter:"@",tabsClass:"=",control:"=?",disableLocationChanging:"=",theme:"@?"},controller:["$scope",function(t){function r(){return n.search()[t.tabParameter]}function i(e,o){if(e!==t.current&&!e.ngDisabled)for(var r=0;r<t.panes.length;r++){var i=t.panes[r];i===e||i.tabId===e?(t.current=e,i.selected=!0,o||n.search(t.tabParameter,e.tabId)):i.selected=!1}}function a(n){var e=t.panes.indexOf(t.current),o=e;do{o+=n?-1:1}while(o>-1&&o<t.panes.length&&t.panes[o].ngDisabled);return o>=t.panes.length?o=t.panes.length-1:o<0&&(o=0),t.panes[o].ngDisabled?e:o}function s(){var n=r();if(n){var e=t.panes.find(function(e){return e.tabId===n});return e&&!e.ngDisabled?e:t.panes[a()]}return t.panes[0]}function l(){t.panes.length&&i(s(),!0)}t.panes=[],t.current=null,t.styles=p.a,t.theme=t.theme||g.a.LIGHT,this.addTab=function(n){t.panes.push(n),1!==t.panes.length&&n.tabId!==r()||i(n,!0)},this.removeTab=function(n){var e=t.panes.indexOf(n);t.panes.splice(e,1),l()},this.checkPane=l,t.$on("$destroy",e.$on("$routeUpdate",l)),t.control={},t.control.isLast=function(){return t.panes.indexOf(t.current)===t.panes.length-1},t.control.isFirst=function(){return 0===t.panes.indexOf(t.current)},t.control.select=function(n){i(n,t.disableLocationChanging)},t.control.next=function(){var n=a();i(t.panes[n],t.disableLocationChanging)},t.control.prev=function(){var n=a(!0);i(t.panes[n],t.disableLocationChanging)},t.keyMap={next:t.control.next,prev:t.control.prev,focus:function(){return t.focus=!t.focus,!t.focus}},t.tabClass=function(n){return d()(p.a.title,o({},p.a.selected,n.selected))},this.$onInit=function(){t.tabParameter||(t.tabParameter="tab")}}]}}]),b.directive("rgTabsPane",function(){return{require:"^rgTabs",restrict:"E",transclude:!0,scope:{title:"@",counter:"@",tabId:"@?",tabIndex:"@?",selected:"=?",ngDisabled:"=?"},link:function(n,e,t,o){n.tabId=n.tabId||n.title.toLowerCase().replace(" ","-"),n.tabIndex=n.tabIndex?+n.tabIndex:0,o.addTab(n),n.$on("$destroy",function(){o.removeTab(n)})},template:'<div class="ring-tabs__content" ng-class="{\'ring-tabs__content_active\':selected}" ng-if="selected" ng-transclude></div>'}}),e.a=b.name},889:function(n,e){n.exports='<div ng-class=":: [styles.tabs, styles[theme]]" rg-shortcuts=ring-tabs shortcuts-map=keyMap shortcuts-focus=focus> <div ng-class=":: [styles.titles, tabsClass]" role=tablist> <button type=button ng-repeat="pane in panes | orderBy:\'tabIndex\'" ng-click=control.select(pane) ng-attr-tabindex="{{(pane.selected || pane.ngDisabled) ? -1 : 0}}" ng-disabled=pane.ngDisabled data-test=ring-tab ng-attr-data-test-active="{{pane.selected  ? \'true\' : \'false\'}}" ng-attr-class="{{ tabClass(pane) }}"><span ng-class=":: styles.visible">{{pane.title}}<span ng-class=":: styles.tabCounter" ng-show="pane.counter !== undefined">{{ pane.counter }}</span></span><span ng-class=":: styles.hidden">{{pane.title}}<span ng-class=":: styles.tabCounter" ng-show="pane.counter !== undefined">{{ pane.counter }}</span></span> </button> </div> <div ng-transclude></div> </div> '}});