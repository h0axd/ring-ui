!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=948)}({10:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},11:function(n,e,t){n.exports=t(2)(375)},12:function(n,e,t){n.exports=t(2)(250)},13:function(n,e,t){n.exports=t(2)(363)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],e));g[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=i[1],l=i[2],c=i[3],u={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(u):t.push(o[a]={id:a,parts:[u]})}return t}function i(n,e){var t=y(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),w.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=y(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function s(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return c(e,n.attrs),i(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var c=x++;t=v||(v=s(e)),o=d.bind(null,t,c,!1),r=d.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),o=b.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=p.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function d(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=O(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function b(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=_(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},y=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=m.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),v=null,x=0,w=[],_=t(65);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=g[s.id];l.refs--,i.push(l)}n&&o(r(n,e),e);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}}};var O=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(253)},3:function(n,e,t){n.exports=t(2)(425)},4:function(n,e,t){n.exports=t(2)(446)},5:function(n,e,t){n.exports=t(2)(59)},552:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(){return r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r.apply(this,arguments)}function i(n,e){if(null==n)return{};var t,o,r=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function a(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}function s(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e&&l(n.prototype,e),t&&l(n,t),n}function u(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?b(n):e}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&p(n,e)}function p(n,e){return(p=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return T});var h=t(4),m=(t.n(h),t(3)),y=(t.n(m),t(13)),v=(t.n(y),t(7)),x=(t.n(v),t(9)),w=(t.n(x),t(11)),_=(t.n(w),t(5)),O=t.n(_),C=t(8),k=t.n(C),j=t(12),N=t.n(j),S=t(610),R=t(632),L=t.n(R),U="above",E="inside",T=function(n){function e(){var n,t;s(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=u(this,(n=f(e)).call.apply(n,[this].concat(r))),g(b(b(t)),"state",{topIsOutside:!0,bottomIsOutside:!0}),g(b(b(t)),"handleTopWaypoint",function(n){var e=n.currentPosition;t.setState({topIsOutside:e===U})}),g(b(b(t)),"handleBottomWaypoint",function(n){var e=n.currentPosition,o=n.waypointTop;t.setState({sidebarVisibleHeight:o,bottomIsOutside:e!==E})}),g(b(b(t)),"sidebarRef",function(n){t.sidebarNode=n}),t}return d(e,n),c(e,[{key:"shouldUseFixation",value:function(){var n=this.props.contentNode,e=this.sidebarNode;return!(!n||!e)&&n.offsetHeight>=e.offsetHeight}},{key:"shouldFixateBottom",value:function(){var n=this.state,e=n.topIsOutside;return!n.bottomIsOutside&&e&&this.shouldUseFixation()}},{key:"render",value:function(){var n,e=this.props,t=e.right,o=e.children,a=e.className,s=e.containerClassName,l=e.fixedClassName,c=(e.contentNode,i(e,["right","children","className","containerClassName","fixedClassName","contentNode"])),u=this.state,f=u.topIsOutside,d=u.bottomIsOutside,p=u.sidebarVisibleHeight,b=d&&f&&this.shouldUseFixation(),h=this.shouldFixateBottom(),m=N()(L.a.sidebarContainer,s,g({},L.a.sidebarContainerRight,t)),y=N()(L.a.sidebar,a,(n={},g(n,L.a.sidebarRight,t),g(n,L.a.sidebarFixedTop,b),g(n,L.a.sidebarFixedBottom,h),g(n,l,b||h),n)),v={maxHeight:h&&p?"".concat(p,"px"):null};return O.a.createElement("div",{className:m,ref:this.sidebarRef},O.a.createElement(S.default,{onEnter:this.handleTopWaypoint,onLeave:this.handleTopWaypoint}),O.a.createElement("div",r({},c,{style:v,className:y}),o),O.a.createElement("div",{className:L.a.bottomMarker},O.a.createElement(S.default,{onEnter:this.handleBottomWaypoint,onLeave:this.handleBottomWaypoint})))}}]),e}(_.Component);g(T,"propTypes",{right:k.a.bool,children:k.a.node,className:k.a.string,containerClassName:k.a.string,fixedClassName:k.a.string,contentNode:k.a.object})},6:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},610:function(n,e,t){n.exports=t(2)(254)},632:function(n,e,t){var o=t(685);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(15)(o,r),o.locals&&(n.exports=o.locals)},637:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(){return r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r.apply(this,arguments)}function i(n,e){if(null==n)return{};var t,o,r=a(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function a(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}function s(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function l(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e&&l(n.prototype,e),t&&l(n,t),n}function u(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?b(n):e}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&p(n,e)}function p(n,e){return(p=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function b(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return U});var h=t(4),m=(t.n(h),t(3)),y=(t.n(m),t(13)),v=(t.n(y),t(7)),x=(t.n(v),t(9)),w=(t.n(x),t(11)),_=(t.n(w),t(5)),O=t.n(_),C=t(8),k=t.n(C),j=t(12),N=t.n(j),S=t(552),R=t(632),L=t.n(R);t.d(e,"b",function(){return S.a});var U=function(n){function e(){var n,t;s(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=u(this,(n=f(e)).call.apply(n,[this].concat(r))),g(b(b(t)),"state",{}),g(b(b(t)),"saveContentNode",function(n){t.setState({contentNode:n})}),t}return d(e,n),c(e,[{key:"render",value:function(){var n=this.props,e=n.children,o=n.className,a=n.contentClassName,s=n.responsive,l=i(n,["children","className","contentClassName","responsive"]),c=N()(L.a.contentLayout,o,g({},L.a.contentLayoutResponsive,s)),u=N()(L.a.contentLayoutContent,a),f=O.a.Children.toArray(e),d=f.filter(function(n){return n&&n.type===S.a})[0],p=d&&t.i(_.cloneElement)(d,{contentNode:this.state.contentNode}),b=f.filter(function(n){return n!==d});return O.a.createElement("div",r({},l,{className:c}),p,O.a.createElement("div",{className:u,ref:this.saveContentNode},b))}}]),e}(_.Component);g(U,"propTypes",{children:k.a.node,className:k.a.string,contentClassName:k.a.string,responsive:k.a.bool}),g(U,"defaultProps",{responsive:!0})},65:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},685:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.i(t(6),void 0),e.push([n.i,".contentLayout_2c6 {\n  position: relative;\n\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.contentLayoutContent_edc {\n  align-self: flex-start;\n  flex-grow: 2;\n\n  width: 100%; /* without this hack IE11 render contentLayoutContent wider than its container */\n  margin: 0 32px;\n}\n\n.sidebarContainer_479 {\n  min-width: 240px;\n  max-width: 240px;\n}\n\n.sidebarContainerRight_0af {\n  order: 1;\n}\n\n.sidebar_f88 {\n  overflow: auto;\n\n  box-sizing: border-box;\n  min-width: 240px;\n  max-width: 240px;\n  height: 100%;\n  padding-right: 16px;\n  padding-left: 32px;\n}\n\n.sidebarRight_4ed {\n  padding-right: 32px;\n  padding-left: 16px;\n}\n\n.sidebarFixedTop_416 {\n  top: 0;\n  bottom: 0\n}\n\n.sidebarFixedTop_416.sidebarFixedTop_416 {\n  position: fixed;\n}\n\n.sidebarFixedBottom_117.sidebarFixedBottom_117 {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n}\n\n.bottomMarker_bed {\n  position: absolute;\n  bottom: 0;\n}\n\n@media (max-width: 639px), (min-width: 640px) and (max-width: 959px) {\n\n  .contentLayoutResponsive_ae8 .contentLayoutContent_edc {\n    margin: 0 16px;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebar_f88 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    box-sizing: content-box;\n    padding: 0 16px;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarFixedTop_416 {\n    position: fixed;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarFixedBottom_117 {\n    top: auto;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarRight_4ed {\n    right: 0;\n    left: auto;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarContainer_479 {\n    min-width: 0;\n    max-width: 0;\n  }\n}\n\n@media (max-width: 639px) {\n\n  .contentLayoutResponsive_ae8 .sidebar_f88 {\n    width: 80%;\n    min-width: 0;\n    max-width: none;\n  }\n}\n",""]),e.locals={unit:""+t(6).locals.unit,"extra-small-screen-media":""+t(6).locals["extra-small-screen-media"],"small-screen-media":""+t(6).locals["small-screen-media"],sidebarWidth:"240px",contentLayout:"contentLayout_2c6",contentLayoutContent:"contentLayoutContent_edc",sidebarContainer:"sidebarContainer_479",sidebarContainerRight:"sidebarContainerRight_0af",sidebar:"sidebar_f88",sidebarRight:"sidebarRight_4ed",sidebarFixedTop:"sidebarFixedTop_416",sidebarFixedBottom:"sidebarFixedBottom_117",bottomMarker:"bottomMarker_bed",contentLayoutResponsive:"contentLayoutResponsive_ae8"}},7:function(n,e,t){n.exports=t(2)(447)},8:function(n,e,t){n.exports=t(2)(89)},9:function(n,e,t){n.exports=t(2)(87)},948:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(20),r=(t.n(o),t(5)),i=t.n(r),a=t(637);t.i(o.render)(function(){return i.a.createElement(a.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}(),document.getElementById("example"))}});