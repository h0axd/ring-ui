!function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=n,e.c=o,e.i=function(n){return n},e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1043)}({10:function(n,e){function o(n,e){var o=n[1]||"",r=n[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=t(r);return[o].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[o].join("\n")}function t(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=o(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,o){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(t[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&t[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},1043:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(55),r=o.n(t),i=o(898),a=o(637);r.a.module("Example.analyticsDemo",[i.a,a.a]).config(["analyticsProvider","AnalyticsCustomPlugin","AnalyticsGAPlugin",function(n,e,o){var t=new e(function(n){console.log("Here you can send data to server",n)},!0,600);n.plugins([t])}]).controller("TrackEventDemoCtrl",["analytics",function(n){n.trackEvent("track-event-demo","show")}])},14:function(n,e,o){e=n.exports=o(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  --ring-unit: 8px;\n\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: #111314;\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,o){function t(n,e){for(var o=0;o<n.length;o++){var t=n[o],r=p[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(f(t.parts[i],e))}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(f(t.parts[i],e));p[t.id]={id:t.id,refs:1,parts:a}}}}function r(n,e){for(var o=[],t={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],c=i[1],s=i[2],l=i[3],u={css:c,media:s,sourceMap:l};t[a]?t[a].parts.push(u):o.push(t[a]={id:a,parts:[u]})}return o}function i(n,e){var o=b(n.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=x[x.length-1];if("top"===n.insertAt)t?t.nextSibling?o.insertBefore(e,t.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),x.push(e);else if("bottom"===n.insertAt)o.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=b(n.insertAt.before,o);o.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=u();o&&(n.attrs.nonce=o)}return l(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",l(e,n.attrs),i(n,e),e}function l(n,e){Object.keys(e).forEach(function(o){n.setAttribute(o,e[o])})}function u(){return o.nc}function f(n,e){var o,t,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var l=y++;o=_||(_=c(e)),t=d.bind(null,o,l,!1),r=d.bind(null,o,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=s(e),t=h.bind(null,o,e),r=function(){a(o),o.href&&URL.revokeObjectURL(o.href)}):(o=c(e),t=g.bind(null,o),r=function(){a(o)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else r()}}function d(n,e,o,t){var r=o?"":t.css;if(n.styleSheet)n.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function g(n,e){var o=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}function h(n,e,o){var t=o.css,r=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(t=w(t)),r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([t],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var p={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,o){if("function"==typeof n)return n();if(void 0===e[n]){var t=m.call(this,n,o);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),_=null,y=0,x=[],w=o(67);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=r(n,e);return t(o,e),function(n){for(var i=[],a=0;a<o.length;a++){var c=o[a],s=p[c.id];s.refs--,i.push(s)}n&&t(r(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}}};var k=function(){var n=[];return function(e,o){return n[e]=o,n.filter(Boolean).join("\n")}}()},19:function(n,e,o){n.exports=o(2)(335)},2:function(n,e){n.exports=vendor_lib},245:function(n,e,o){n.exports=o(2)(419)},25:function(n,e,o){n.exports=o(2)(401)},27:function(n,e,o){n.exports=o(2)(403)},277:function(n,e,o){var t=o(279);"string"==typeof t&&(t=[[n.i,t,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,o(15)(t,r),t.locals&&(n.exports=t.locals)},279:function(n,e,o){e=n.exports=o(10)(!1),e.i(o(14),""),e.i(o(66),void 0),e.push([n.i,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover {\n    transition: none;\n    color: #ff008c;\n    color: var(--ring-link-hover-color);\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover {\n    text-decoration: none;\n}}\n\n.link_46b {\n  /* To override link stiles inside alert */\n  cursor: pointer;\n  transition: color 0.15s ease-out;\n  transition: color var(--ring-fast-ease);\n  color: #0f5b99;\n  color: var(--ring-link-color);}\n\n.link_46b {\n  text-decoration: none;}\n\n.link_46b.hover_723 {\n  transition: none;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover .inner_e7d {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n}}\n\n.link_46b.active_8b4 {\n  color: inherit;}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.compatibilityUnderlineMode_a72:hover {\n    text-decoration: underline\n    /* stylelint-disable-next-line selector-max-specificity */\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.compatibilityUnderlineMode_a72:hover .inner_e7d {\n    border: none;\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.pseudo_b5d:hover {\n    text-decoration: none\n    /* stylelint-disable-next-line selector-max-specificity */\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.pseudo_b5d:hover .inner_e7d {\n    border: none;\n}}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover .inner_e7d {\n    border-bottom-width: 1px;\n  }}\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_bc0:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_b5d {\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit\n}\n\n.pseudo_b5d::-moz-focus-inner {\n  padding: 0;\n  border: 0;}\n",""]),e.locals={link:"link_46b "+o(66).locals.link,hover:"hover_723",inner:"inner_e7d",active:"active_8b4",compatibilityUnderlineMode:"compatibilityUnderlineMode_a72",pseudo:"pseudo_b5d",inherit:"inherit_bc0"}},45:function(n,e,o){"use strict";var t=o(82),r=o.n(t),i=new r.a;i.sniff(),e.a=i},55:function(n,e,o){n.exports=o(2)(252)},6:function(n,e,o){e=n.exports=o(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},637:function(n,e,o){"use strict";function t(){return{restrict:"E",transclude:!0,replace:!0,template:'\n<a class="'.concat(l.a.link," ").concat(l.a.compatibilityUnderlineMode,'"\n><span class="').concat(l.a.inner,'" ng-transclude></span></a>\n    ')}}var r=o(19),i=(o.n(r),o(245)),a=(o.n(i),o(55)),c=o.n(a),s=o(277),l=o.n(s),u=c.a.module("Ring.link",[]);u.directive("rgLink",t),e.a=u.name},66:function(n,e,o){e=n.exports=o(10)(!1),e.i(o(14),""),e.i(o(6),void 0),e.push([n.i,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.close_247:hover {\n    color: #ff008c;\n    color: var(--ring-link-hover-color);\n}}\n\n.alert_435 {\n  position: relative;\n\n  box-sizing: border-box;\n  min-height: 40px;\n  margin: 8px auto;\n  padding: 0 16px;\n\n  transition:\n    transform 300ms ease-out,\n    margin-bottom 300ms ease-out,\n    opacity 300ms ease-out;\n  white-space: nowrap;\n  pointer-events: auto;\n\n  border-radius: 3px;\n\n  border-radius: var(--ring-border-radius);\n  background-color: #111314;\n  background-color: var(--ring-message-background-color);\n  box-shadow: 0 2px 16px rgba(0, 42, 76, .15);\n  box-shadow: 0 2px 16px var(--ring-popup-shadow-color);\n\n  font-size: 13px;\n\n  font-size: var(--ring-font-size);\n  line-height: 40px;\n}\n\n.alertInline_539 {\n  margin: 8px;\n}\n\n.error_b59 {\n  word-wrap: break-word;\n\n  color: #c22731;\n\n  color: var(--ring-error-color);\n}\n\n.icon_ca6 {\n  display: inline-block;\n\n  margin-right: 8px;\n\n  vertical-align: top;\n}\n\n.caption_a16 {\n  display: inline-block;\n\n  max-width: calc(100% - 40px);\n\n  margin: 12px 40px 12px 0;\n\n  vertical-align: middle;\n  white-space: normal;\n\n  color: #fff;\n\n  color: var(--ring-dark-text-color);\n\n  line-height: 20px\n}\n\n.caption_a16 .ring-link,\n  \n  .caption_a16 .link_e30 {\ncolor: #008eff;\ncolor: var(--ring-main-color);}\n\n.badge_ca3 {\n  margin-left: 8px;\n\n  vertical-align: baseline;\n}\n\n.loader_641 {\n  top: 2px;\n\n  margin-right: 8px;\n}\n\n.close_247 {\n  position: absolute;\n  top: 2px;\n  right: 0;\n\n  margin: 4px;\n  padding: 8px;\n\n  cursor: pointer;\n\n  color: #888;\n\n  color: var(--ring-dark-secondary-color);\n  border: none;\n  background: transparent;\n\n  font-size: 0;\n  line-height: 0\n}\n\n.close_247:focus {\ncolor: #ff008c;\ncolor: var(--ring-link-hover-color);}\n\n@keyframes show_eec {\n  from {\n    transform: translateY(100%);\n\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0);\n\n    opacity: 1;\n  }\n}\n\n@keyframes shaking_85f {\n  10%,\n  90% {\n    transform: translateX(-1px);\n  }\n\n  20%,\n  80% {\n    transform: translateX(2px);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translateX(-4px);\n  }\n\n  40%,\n  60% {\n    transform: translateX(4px);\n  }\n}\n\n.animationOpen_c23 {\n  animation-name: show_eec;\n  animation-duration: 300ms;\n}\n\n.animationClosing_d66 {\n  z-index: -1;\n  z-index: var(--ring-invisible-element-z-index);\n\n  opacity: 0;\n}\n\n.animationShaking_28d {\n  animation-name: shaking_85f;\n  animation-duration: 500ms;\n}\n",""]),e.locals={unit:""+o(6).locals.unit,"animation-duration":"300ms","animation-easing":"ease-out",close:"close_247",alert:"alert_435",alertInline:"alertInline_539",error:"error_b59",icon:"icon_ca6",caption:"caption_a16",link:"link_e30",badge:"badge_ca3",loader:"loader_641",animationOpen:"animationOpen_c23",show:"show_eec",animationClosing:"animationClosing_d66",animationShaking:"animationShaking_28d",shaking:"shaking_85f"}},67:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var o=e.protocol+"//"+e.host,t=o+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:t+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},7:function(n,e,o){n.exports=o(2)(450)},82:function(n,e,o){n.exports=o(2)(259)},862:function(n,e,o){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e,o){return e&&r(n.prototype,e),o&&r(n,o),n}var a=o(25),c=(o.n(a),o(27)),s=(o.n(c),o(7)),l=(o.n(s),function(){function n(){t(this,n),this._plugins=[]}return i(n,[{key:"config",value:function(n){this._plugins=n}},{key:"track",value:function(n,e){if(n){var o=n.indexOf(":");o<0&&(o=n.indexOf("_")),o<0&&(o=n.length);var t=n.substr(0,o),r=n.substr(o+1);this.trackEvent(t,r,e)}}},{key:"trackPageView",value:function(n){this._plugins.forEach(function(e){e.trackPageView(n)})}},{key:"trackEvent",value:function(n,e,o){var t=o?e+this._buildSuffix(o):null;this._plugins.forEach(function(o){o.trackEvent(n,e),t&&o.trackEvent(n,t)})}},{key:"trackShortcutEvent",value:function(n,e,o){this.trackEvent(n,e,o),this.trackEvent("ring-shortcut","".concat(n,"$").concat(e),o)}},{key:"trackEntityProperties",value:function(n,e,o,t){for(var r=0;r<o.length;++r){var i=o[r].split("."),a=e;if(i.length){for(var c=0;c<i.length;++c){if(!a.hasOwnProperty(i[c])){a="no-value";break}a=a[i[c]]}"string"==typeof a&&(a=a.toLowerCase().replace(/[._]+/g,"-"));var s="".concat(i.join("-"),"__").concat(a);this.trackEvent(n,s,t)}}}},{key:"_buildSuffix",value:function(n){if(!n)return"";var e,o="";for(e in n)n.hasOwnProperty(e)&&(o+="__".concat(e,"$").concat(n[e]));return o}}]),n}());e.a=new l},863:function(n,e,o){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e,o){return e&&r(n.prototype,e),o&&r(n,o),n}o.d(e,"a",function(){return c});var a=o(875),c=function(){function n(e,o,r,i){t(this,n),this._data=[],this.config({send:e,isDevelopment:o,flushInterval:r,flushingAllowedChecker:i})}return i(n,[{key:"config",value:function(n){var e=this,o=n.flushingAllowedChecker;"function"!=typeof o&&(o=function(){return!0}),this._flush=function(){e._data.length>0&&o()&&(n.send(e._data),e._data=[])},this._isDevelopment=n.isDevelopment,this._flushInterval=n.flushInterval||1e4,this._flushMaxPackSize=n.flushMaxPackSize||100}},{key:"trackEvent",value:function(n,e){this._processEvent(n,e)}},{key:"trackPageView",value:function(n){this._lastPagePath!==n&&(this._trackPageViewAdditionalInfo(n),this._processEvent("ring-page",n),this._processEvent("ring-navigator_user-agent",a.a.getUserAgentPresentation()),this._processEvent("ring-navigator_platform",a.a.npeSaveLowerCase(navigator.platform)),this._processEvent("ring-navigator_lang",a.a.npeSaveLowerCase(navigator.language)),this._processEvent("ring-device-pixel-ratio",a.a.getDevicePixelRatioPresentation()),this._processEvent("ring-screen-width",a.a.getScreenWidthPresentation()))}},{key:"_initSendSchedule",value:function(){var n=this;window.addEventListener("beforeunload",function(){return n._trackPageViewAdditionalInfo(),n._flush()}),setInterval(this._flush,this._flushInterval),this._hasSendSchedule=!0}},{key:"_processEvent",value:function(n,e){!this._hasSendSchedule&&this._flush&&this._initSendSchedule();var o=a.a.reformatString(n,!0),t=a.a.reformatString(e);this._isDevelopment&&console.log("TRACKING DATA = ",o,t),this._addDataToFlushingPack({category:o,action:t})}},{key:"_trackPageViewAdditionalInfo",value:function(n){var e=(new Date).getTime();if(this._lastPagePath&&this._lastPageViewTime){var o=a.a.getPageViewDurationPresentation(e-this._lastPageViewTime);this._processEvent("ring-pageview-duration_".concat(this._lastPagePath),o)}this._lastPageViewTime=e,this._lastPagePath=n}},{key:"_addDataToFlushingPack",value:function(n){this._data.push(n),this._data.length>=this._flushMaxPackSize&&this._flush()}}]),n}()},875:function(n,e,o){"use strict";var t=o(19),r=(o.n(t),o(894)),i=(o.n(r),o(25)),a=(o.n(i),o(45)),c={};c.reformatString=function(n,e){var o=String(n),t=e?/[.:;!@#^&*(){}\[\]?,%=+\\\/]+/g:/[.:;!@#^&*(){}\[\]?,%=+\\]+/g;return o.replace(t,"_")},c.getPageViewDurationPresentation=function(n){var e=n/1e3;if(e>3600)return"more-than-hour";var o=Math.floor(Math.pow(2,Math.floor(Math.log2(e))+1));return o=o>0?o:1,"less-than-".concat(o,"-sec")},c.getScreenWidthPresentation=function(){for(var n=[0,768,992,1200],e=1;e<n.length;++e)if(window.innerWidth<n[e])return"[".concat(n[e-1],"px;").concat(n[e],"px)");return"[1200px;inf)"},c.npeSaveLowerCase=function(n){return(n||"unknown").toLowerCase()},c.getUserAgentPresentation=function(){var n=c.npeSaveLowerCase(a.a.browser.name||"unknown"),e=a.a.browser.version[0],o=e||"unknown";return"".concat(n,"$").concat(o)},c.getDevicePixelRatioPresentation=function(){return window.devicePixelRatio&&window.devicePixelRatio.toFixed?String(window.devicePixelRatio.toFixed(1)):"unknown"},e.a=c},894:function(n,e,o){n.exports=o(2)(349)},898:function(n,e,o){"use strict";var t=o(19),r=(o.n(t),o(55)),i=o.n(r),a=o(862),c=o(938),s=o(863),l=i.a.module("Ring.analytics",[]);l.provider("analytics",function(){var n=[];this.plugins=function(e){n=e},this.$get=["$log","$injector",function(e,o){for(var t=[],r=0;r<n.length;++r)if("string"==typeof n[r])try{var i=o.get(n[r]);t.push(i),e.debug("analytics: loaded plugin ".concat(n[r]))}catch(o){e.debug("analytics: unable to load factory ".concat(n[r]))}else t.push(n[r]);return a.a.config(t),a.a}]}),l.constant("AnalyticsGAPlugin",c.a),l.constant("AnalyticsCustomPlugin",s.a),l.run(["$rootScope","analytics",function(n,e){n.$on("$routeChangeSuccess",function(n,o){o&&o.$$route&&o.$$route.originalPath&&e.trackPageView(o.$$route.originalPath)})}]),l.directive("rgAnalytics",["analytics",function(n){return{restrict:"A",replace:!1,link:function(e,o){var t=o.attr("rg-analytics-on")||"click";i.a.element(o).bind(t,function(){n.track(o.attr("rg-analytics"))})}}}]),e.a=l.name},938:function(n,e,o){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e,o){return e&&r(n.prototype,e),o&&r(n,o),n}o.d(e,"a",function(){return a});var a=function(){function n(e,o){if(t(this,n),e||o){!function(n,e,o,t,r,i,a){n.GoogleAnalyticsObject=r,n[r]=n[r]||function(){(n[r].q=n[r].q||[]).push(arguments)},n[r].l=1*new Date,i=e.createElement(o),a=e.getElementsByTagName(o)[0],i.async=1,i.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(i,a)}(window,document,"script",0,"ga");var r=e||"UA-57284711-1";ga("create",r,e?{}:{cookieDomain:"none"})}}return i(n,[{key:"trackEvent",value:function(n,e){if(window.ga){var o={eventCategory:n,eventAction:e};ga("send","event",o)}}},{key:"trackPageView",value:function(n){window.ga&&ga("send","pageview",n)}}]),n}()}});