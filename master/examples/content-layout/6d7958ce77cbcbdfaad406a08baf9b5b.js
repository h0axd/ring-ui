!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=849)}({10:function(e,n){function t(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},11:function(e,n,t){e.exports=t(3)(384)},12:function(e,n,t){e.exports=t(3)(254)},13:function(e,n,t){e.exports=t(3)(372)},14:function(e,n,t){n=e.exports=t(10)(!1),n.push([e.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  --ring-unit: 8px;\n\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: #111314;\n  --ring-navigation-background-color: #000;\n  --ring-tag-background-color: #e6ecf2;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},16:function(e,n,t){function o(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],n))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],n));g[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=n.base?i[0]+n.base:i[0],s=i[1],l=i[2],c=i[3],u={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(u):t.push(o[a]={id:a,parts:[u]})}return t}function i(e,n){var t=v(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),w.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=v(e.insertAt.before,t);t.insertBefore(n,r)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=w.indexOf(e);n>=0&&w.splice(n,1)}function s(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=u();t&&(e.attrs.nonce=t)}return c(n,e.attrs),i(e,n),n}function l(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",c(n,e.attrs),i(e,n),n}function c(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function u(){return t.nc}function d(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var c=x++;t=y||(y=s(n)),o=f.bind(null,t,c,!1),r=f.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(n),o=m.bind(null,t,n),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(n),o=p.bind(null,t),r=function(){a(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}function f(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=O(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function m(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=_(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},b=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e,n){return n?n.querySelector(e):document.querySelector(e)},v=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=h.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),y=null,x=0,w=[],_=t(46);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=b()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=r(e,n);return o(t,n),function(e){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=g[s.id];l.refs--,i.push(l)}e&&o(r(e,n),n);for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}}};var O=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},18:function(e,n,t){e.exports=t(3)(257)},2:function(e,n,t){e.exports=t(3)(89)},3:function(e,n){e.exports=vendor_lib},4:function(e,n,t){e.exports=t(3)(434)},432:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=a(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function a(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n,t){return n&&l(e.prototype,n),t&&l(e,t),e}function u(e,n){return!n||"object"!==o(n)&&"function"!=typeof n?m(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return U});var b=t(5),h=(t.n(b),t(4)),v=(t.n(h),t(13)),y=(t.n(v),t(8)),x=(t.n(y),t(9)),w=(t.n(x),t(11)),_=(t.n(w),t(6)),O=t.n(_),L=t(2),C=t.n(L),k=t(12),S=t.n(k),N=t(490),j=t(512),E=t.n(j),R="above",q="inside",U=function(e){function n(){var e,t;s(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=u(this,(e=d(n)).call.apply(e,[this].concat(r))),g(m(m(t)),"state",{topIsOutside:!0,bottomIsOutside:!0}),g(m(m(t)),"handleTopWaypoint",function(e){var n=e.currentPosition;t.setState({topIsOutside:n===R})}),g(m(m(t)),"handleBottomWaypoint",function(e){var n=e.currentPosition,o=e.waypointTop;t.setState({sidebarVisibleHeight:o,bottomIsOutside:n!==q})}),g(m(m(t)),"sidebarRef",function(e){t.sidebarNode=e}),t}return f(n,e),c(n,[{key:"shouldUseFixation",value:function(){var e=this.props.contentNode,n=this.sidebarNode;return!(!e||!n)&&e.offsetHeight>=n.offsetHeight}},{key:"shouldFixateBottom",value:function(){var e=this.state,n=e.topIsOutside;return!e.bottomIsOutside&&n&&this.shouldUseFixation()}},{key:"render",value:function(){var e,n=this.props,t=n.right,o=n.children,a=n.className,s=n.containerClassName,l=n.fixedClassName,c=(n.contentNode,i(n,["right","children","className","containerClassName","fixedClassName","contentNode"])),u=this.state,d=u.topIsOutside,f=u.bottomIsOutside,p=u.sidebarVisibleHeight,m=f&&d&&this.shouldUseFixation(),b=this.shouldFixateBottom(),h=S()(E.a.sidebarContainer,s,g({},E.a.sidebarContainerRight,t)),v=S()(E.a.sidebar,a,(e={},g(e,E.a.sidebarRight,t),g(e,E.a.sidebarFixedTop,m),g(e,E.a.sidebarFixedBottom,b),g(e,l,m||b),e)),y={maxHeight:b&&p?"".concat(p,"px"):null};return O.a.createElement("div",{className:h,ref:this.sidebarRef},O.a.createElement(N.Waypoint,{onEnter:this.handleTopWaypoint,onLeave:this.handleTopWaypoint}),O.a.createElement("div",r({},c,{style:y,className:v}),o),O.a.createElement("div",{className:E.a.bottomMarker},O.a.createElement(N.Waypoint,{onEnter:this.handleBottomWaypoint,onLeave:this.handleBottomWaypoint})))}}]),n}(_.Component);g(U,"propTypes",{right:C.a.bool,children:C.a.node,className:C.a.string,containerClassName:C.a.string,fixedClassName:C.a.string,contentNode:C.a.object})},46:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},490:function(e,n,t){e.exports=t(3)(258)},5:function(e,n,t){e.exports=t(3)(458)},512:function(e,n,t){var o=t(570);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(16)(o,r),o.locals&&(e.exports=o.locals)},518:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=a(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function a(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,n,t){return n&&l(e.prototype,n),t&&l(e,t),e}function u(e,n){return!n||"object"!==o(n)&&"function"!=typeof n?m(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return R});var b=t(5),h=(t.n(b),t(4)),v=(t.n(h),t(13)),y=(t.n(v),t(8)),x=(t.n(y),t(9)),w=(t.n(x),t(11)),_=(t.n(w),t(6)),O=t.n(_),L=t(2),C=t.n(L),k=t(12),S=t.n(k),N=t(432),j=t(512),E=t.n(j);t.d(n,"b",function(){return N.a});var R=function(e){function n(){var e,t;s(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=u(this,(e=d(n)).call.apply(e,[this].concat(r))),g(m(m(t)),"state",{}),g(m(m(t)),"saveContentNode",function(e){t.setState({contentNode:e})}),t}return f(n,e),c(n,[{key:"render",value:function(){var e=this.props,n=e.children,o=e.className,a=e.contentClassName,s=e.responsive,l=i(e,["children","className","contentClassName","responsive"]),c=S()(E.a.contentLayout,o,g({},E.a.contentLayoutResponsive,s)),u=S()(E.a.contentLayoutContent,a),d=O.a.Children.toArray(n),f=d.filter(function(e){return e&&e.type===N.a})[0],p=f&&t.i(_.cloneElement)(f,{contentNode:this.state.contentNode}),m=d.filter(function(e){return e!==f});return O.a.createElement("div",r({},l,{className:c}),p,O.a.createElement("div",{className:u,ref:this.saveContentNode},m))}}]),n}(_.Component);g(R,"propTypes",{children:C.a.node,className:C.a.string,contentClassName:C.a.string,responsive:C.a.bool}),g(R,"defaultProps",{responsive:!0})},570:function(e,n,t){n=e.exports=t(10)(!1),n.i(t(14),""),n.i(t(7),void 0),n.push([e.i,".contentLayout_2c6 {\n  position: relative;\n\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.contentLayoutContent_edc {\n  align-self: flex-start;\n  flex-grow: 2;\n\n  width: 100%; /* without this hack IE11 render contentLayoutContent wider than its container */\n  margin: 0 32px;\n}\n\n.sidebarContainer_479 {\n  min-width: 240px;\n  max-width: 240px;\n}\n\n.sidebarContainerRight_0af {\n  order: 1;\n}\n\n.sidebar_f88 {\n  overflow: auto;\n\n  box-sizing: border-box;\n  min-width: 240px;\n  max-width: 240px;\n  height: 100%;\n  padding-right: 16px;\n  padding-left: 32px;\n}\n\n.sidebarRight_4ed {\n  padding-right: 32px;\n  padding-left: 16px;\n}\n\n.sidebarFixedTop_416 {\n  top: 0;\n  bottom: 0\n}\n\n.sidebarFixedTop_416.sidebarFixedTop_416 {\n  position: fixed;\n}\n\n.sidebarFixedBottom_117.sidebarFixedBottom_117 {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n}\n\n.bottomMarker_bed {\n  position: absolute;\n  bottom: 0;\n}\n\n@media (max-width: 639px), (min-width: 640px) and (max-width: 959px) {\n\n  .contentLayoutResponsive_ae8 .contentLayoutContent_edc {\n    margin: 0 16px;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebar_f88 {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    box-sizing: content-box;\n    padding: 0 16px;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarFixedTop_416 {\n    position: fixed;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarFixedBottom_117 {\n    top: auto;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarRight_4ed {\n    right: 0;\n    left: auto;\n  }\n\n  .contentLayoutResponsive_ae8 .sidebarContainer_479 {\n    min-width: 0;\n    max-width: 0;\n  }\n}\n\n@media (max-width: 639px) {\n\n  .contentLayoutResponsive_ae8 .sidebar_f88 {\n    width: 80%;\n    min-width: 0;\n    max-width: none;\n  }\n}\n",""]),n.locals={unit:""+t(7).locals.unit,"extra-small-screen-media":""+t(7).locals["extra-small-screen-media"],"small-screen-media":""+t(7).locals["small-screen-media"],sidebarWidth:"240px",contentLayout:"contentLayout_2c6",contentLayoutContent:"contentLayoutContent_edc",sidebarContainer:"sidebarContainer_479",sidebarContainerRight:"sidebarContainerRight_0af",sidebar:"sidebar_f88",sidebarRight:"sidebarRight_4ed",sidebarFixedTop:"sidebarFixedTop_416",sidebarFixedBottom:"sidebarFixedBottom_117",bottomMarker:"bottomMarker_bed",contentLayoutResponsive:"contentLayoutResponsive_ae8"}},6:function(e,n,t){e.exports=t(3)(61)},7:function(e,n,t){n=e.exports=t(10)(!1),n.push([e.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),n.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},8:function(e,n,t){e.exports=t(3)(459)},849:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(18),r=(t.n(o),t(6)),i=t.n(r),a=t(518),s=t(432);t.i(o.render)(function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h4",null,"Some title")),i.a.createElement(a.a,null,i.a.createElement(s.a,{className:"sidebar"},"This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This is sidebar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("div",null,"Some content below. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),i.a.createElement("div",null,"Some content below. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),i.a.createElement("div",null,"Some content below. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}(),document.getElementById("example"))},9:function(e,n,t){e.exports=t(3)(87)}});