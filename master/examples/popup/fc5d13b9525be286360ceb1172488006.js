!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=962)}({10:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},11:function(n,e,t){n.exports=t(2)(375)},12:function(n,e,t){n.exports=t(2)(250)},13:function(n,e,t){n.exports=t(2)(363)},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=g[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],e));g[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],c=i[1],s=i[2],u=i[3],l={css:c,media:s,sourceMap:u};o[a]?o[a].parts.push(l):t.push(o[a]={id:a,parts:[l]})}return t}function i(n,e){var t=y(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=O[O.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),O.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=y(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=O.indexOf(n);e>=0&&O.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=l();t&&(n.attrs.nonce=t)}return u(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),i(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function l(){return t.nc}function f(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var u=T++;t=v||(v=c(e)),o=p.bind(null,t,u,!1),r=p.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),o=h.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(e),o=d.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function p(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function h(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=_(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var g={},b=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},y=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=m.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),v=null,T=0,O=[],_=t(65);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var c=t[a],s=g[c.id];s.refs--,i.push(s)}n&&o(r(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete g[s.id]}}}};var w=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(332)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(253)},21:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n){return c(n)||a(n)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function c(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function s(n,e){return f(n)||l(n,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(n,e){var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}function f(n){if(Array.isArray(n))return n}function p(n){return Object.entries(n).reduce(function(n,e){var t=s(e,2),o=t[0];return t[1]?r(n).concat([o]):n},[])}function d(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.filter(function(n){return!!n}).reduce(function(n,e){return"object"===o(e)?r(n).concat(r(p(e))):r(n).concat([e])},[]).join(" ")}e.a=d;var h=t(24),g=(t.n(h),t(63)),b=(t.n(g),t(22)),m=(t.n(b),t(4)),y=(t.n(m),t(3)),v=(t.n(y),t(7)),T=(t.n(v),t(9)),O=(t.n(T),t(38));t.n(O)},22:function(n,e,t){n.exports=t(2)(401)},24:function(n,e,t){n.exports=t(2)(415)},243:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){d(n,e,t[e])})}return n}function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e&&a(n.prototype,e),t&&a(n,t),n}function s(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?p(n):e}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return B});var h=t(4),g=(t.n(h),t(3)),b=(t.n(g),t(25)),m=(t.n(b),t(22)),y=(t.n(m),t(9)),v=(t.n(y),t(11)),T=(t.n(v),t(7)),O=(t.n(T),t(5)),_=t.n(O),w=t(20),E=(t.n(w),t(8)),x=t.n(E),C=t(12),k=t.n(C),S=t(37),R=(t.n(S),t(39)),P=t(85),M=t(36),H=t(50),L=t(21),I=t(246),j=t(292),N=t.n(j),A=function(n){return n.stopPropagation()},B=function(n){function e(){var n,o;i(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return o=s(this,(n=u(e)).call.apply(n,[this].concat(c))),d(p(p(o)),"state",{shortcuts:o.props.shortcuts&&!o.props.hidden,display:I.a.SHOWING}),d(p(p(o)),"listeners",new M.c),d(p(p(o)),"redrawScheduler",t.i(P.a)()),d(p(p(o)),"uid",t.i(R.a)("popup-")),d(p(p(o)),"calculateDisplay",function(n){return r({},n,{display:o.props.hidden?I.a.SHOWING:I.a.SHOWN})}),d(p(p(o)),"portalRef",function(n){o.node=n,o.parent=n&&n.parentElement,n&&o.getContainer()&&o._redraw()}),d(p(p(o)),"popupRef",function(n){o.popup=n,o._redraw()}),d(p(p(o)),"containerRef",function(n){o.container=n}),d(p(p(o)),"_updateDirection",function(n){o.state.direction!==n&&(o.setState({direction:n}),o.props.onDirectionChange&&o.props.onDirectionChange(n))}),d(p(p(o)),"_updatePosition",function(){if(o.popup){if(o.isVisible()){var n=o.position(),e=n.styles,t=n.direction;Object.keys(e).forEach(function(n){var t=e[n];o.popup.style[n]="number"==typeof t?"".concat(t,"px"):t.toString()}),o._updateDirection(t)}o.setState(o.calculateDisplay)}}),d(p(p(o)),"_redraw",function(){o.isVisible()&&o.redrawScheduler(o._updatePosition)}),d(p(p(o)),"_onEscPress",function(n){o.props.onEscPress(n),o._onCloseAttempt(n,!0)}),d(p(p(o)),"_onDocumentClick",function(n){o.container&&o.container.contains(n.target)||!o._listenersEnabled||o.props.dontCloseOnAnchorClick&&o._getAnchor()&&o._getAnchor().contains(n.target)||(o.props.onOutsideClick(n),o._onCloseAttempt(n,!1))}),d(p(p(o)),"shortcutsScope",o.uid),d(p(p(o)),"shortcutsMap",{esc:o._onEscPress}),o}return l(e,n),c(e,[{key:"getChildContext",value:function(){return{ringPopupTarget:this.uid}}},{key:"componentDidMount",value:function(){this.props.client||this.setState({client:!0}),this.props.hidden||this._setListenersEnabled(!0)}},{key:"componentWillUpdate",value:function(n){var e=n.shortcuts&&!n.hidden;this.state.shortcuts!==e&&this.setState({shortcuts:e})}},{key:"componentDidUpdate",value:function(n){if(this.props!==n){var e=this.props.hidden;n.hidden!==e&&this._setListenersEnabled(!e),this._redraw()}}},{key:"componentWillUnmount",value:function(){this._setListenersEnabled(!1),this.popup=null}},{key:"getContainer",value:function(){var n=this.props.target||this.context.ringPopupTarget;return n&&document.querySelector("[data-portaltarget=".concat(n,"]"))}},{key:"position",value:function(){var n=this,e=I.b.reduce(function(e,t){return e[t]=n.props[t],e},{}),o=this.getContainer();return t.i(I.c)(r({popup:this.popup,container:o&&"static"!==t.i(M.d)(o).position?o:null,anchor:this._getAnchor()},e))}},{key:"_getAnchor",value:function(){return this.props.anchorElement||this.parent}},{key:"_setListenersEnabled",value:function(n){var e=this;if(n&&!this._listenersEnabled)return void setTimeout(function(){e._listenersEnabled=!0,e.listeners.add(window,"resize",e._redraw),e.listeners.add(window,"scroll",e._redraw),e.listeners.add(document,"click",e._onDocumentClick);for(var n=e._getAnchor();n;)e.listeners.add(n,"scroll",e._redraw),n=n.parentElement},0);!n&&this._listenersEnabled&&(this.listeners.removeAll(),this._listenersEnabled=!1)}},{key:"isVisible",value:function(){return!this.props.hidden}},{key:"_onCloseAttempt",value:function(n,e){this.props.onCloseAttempt(n,e)}},{key:"getInternalContent",value:function(){return this.props.children}},{key:"render",value:function(){var n,e=this.props,o=e.className,r=e.style,i=e.hidden,a=e.attached,c=e.keepMounted,s=e.client,u=e.onMouseDown,l=e.onMouseUp,f=e.onMouseOver,p=e.onMouseOut,h=e.onContextMenu,g=e["data-test"],b=this.state.display===I.a.SHOWING,m=k()(o,N.a.popup,(n={},d(n,N.a.attached,a),d(n,N.a.hidden,i),d(n,N.a.showing,b),n)),y=(this.state.direction||"").toLowerCase().replace(/[_]/g,"-");return _.a.createElement("span",{onClick:A,ref:this.portalRef},this.state.shortcuts&&_.a.createElement(H.a,{map:this.shortcutsMap,scope:this.shortcutsScope}),(s||this.state.client)&&(c||!i)&&t.i(w.createPortal)(_.a.createElement("div",{"data-portaltarget":this.uid,ref:this.containerRef,onMouseOver:f,onMouseOut:p,onContextMenu:h},_.a.createElement("div",{"data-test":t.i(L.a)("ring-popup",g),"data-test-shown":!i&&!b,"data-test-direction":y,ref:this.popupRef,className:m,style:r,onMouseDown:u,onMouseUp:l},this.getInternalContent())),this.getContainer()||document.body))}}]),e}(O.Component);d(B,"PopupProps",{Directions:I.d,Dimension:I.e,MinWidth:I.f,MaxHeight:I.g}),d(B,"propTypes",{anchorElement:x.a.instanceOf(Node),target:x.a.string,className:x.a.string,style:x.a.object,hidden:x.a.bool.isRequired,onOutsideClick:x.a.func,onEscPress:x.a.func,onCloseAttempt:x.a.func,children:x.a.oneOfType([x.a.arrayOf(x.a.node),x.a.node]),dontCloseOnAnchorClick:x.a.bool,shortcuts:x.a.bool,keepMounted:x.a.bool,"data-test":x.a.string,client:x.a.bool,directions:x.a.arrayOf(x.a.string),autoPositioning:x.a.bool,autoCorrectTopOverflow:x.a.bool,left:x.a.number,top:x.a.number,maxHeight:x.a.number,minWidth:x.a.number,sidePadding:x.a.number,attached:x.a.bool,onMouseDown:x.a.func,onMouseUp:x.a.func,onMouseOver:x.a.func,onMouseOut:x.a.func,onContextMenu:x.a.func,onDirectionChange:x.a.func}),d(B,"contextTypes",{ringPopupTarget:x.a.string}),d(B,"childContextTypes",{ringPopupTarget:x.a.string}),d(B,"defaultProps",{shortcuts:!0,hidden:!1,onOutsideClick:function(){},onEscPress:function(){},onCloseAttempt:function(){},dontCloseOnAnchorClick:!1,keepMounted:!1,directions:I.h,autoPositioning:!0,autoCorrectTopOverflow:!0,left:0,top:0,offset:0,sidePadding:8,attached:!1,legacy:!1})},246:function(n,e,t){"use strict";function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n){return null!==n?{top:n.scrollTop,left:n.scrollLeft}:{top:t.i(g.e)(),left:t.i(g.f)()}}function i(n,e,t,r,i){var a,c=n.clientWidth,s=n.clientHeight,u=r+e.height,l=t+e.width,f=t-c,p=r-s,d=l-c,h=t+e.width/2-c/2,g=r+e.height/2-s/2,m=u-s;return a={},o(a,b.BOTTOM_RIGHT,{left:t,top:u+i}),o(a,b.BOTTOM_LEFT,{left:d,top:u+i}),o(a,b.BOTTOM_CENTER,{left:h,top:u+i}),o(a,b.TOP_RIGHT,{left:t,top:p-i}),o(a,b.TOP_LEFT,{left:d,top:p-i}),o(a,b.TOP_CENTER,{left:h,top:p-i}),o(a,b.LEFT_BOTTOM,{left:f-i,top:r}),o(a,b.LEFT_TOP,{left:f-i,top:m}),o(a,b.LEFT_CENTER,{left:f-i,top:g}),o(a,b.RIGHT_BOTTOM,{left:l+i,top:r}),o(a,b.RIGHT_TOP,{left:l+i,top:m}),o(a,b.RIGHT_CENTER,{left:l+i,top:g}),a}function a(n,e,o){var r=null!==o.container?o.container.clientHeight:t.i(g.g)(),i=e.top+o.sidePadding,a=e.top+r-o.sidePadding,c=Math.max(i-n.top,0),s=o.popup.clientHeight,u=n.top+s-a;return c+Math.max(u,0)}function c(n,e,t){var o=null!==t.container?t.container.clientWidth:window.innerWidth,r=e.left+t.sidePadding,i=e.left+o-t.sidePadding,a=Math.max(r-n.left,0),c=t.popup.clientWidth,s=n.left+c-i;return a+Math.max(s,0)}function s(n){var e=n.sidePadding,t=n.styles,o=n.anchorRect,r=n.maxHeight,i=n.popupScrollHeight,a=n.direction,c=b.TOP_LEFT,s=b.TOP_RIGHT,u=b.TOP_CENTER;if(![c,s,u,b.RIGHT_TOP,b.LEFT_TOP].includes(a))return t;var l=[c,u,s].includes(a),f=l?o.top:o.bottom;return f-(r?Math.min(i,r):i)<=e&&(t.top=e,t.maxHeight=f-e+1),t}function u(n,e,t){t=t||document.documentElement;var o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.max(o.top-r.top,0),a=Math.max(r.height,t===document.documentElement?t.clientHeight:0),c=Math.max(a-(i+o.height),0);switch(n){case b.TOP_LEFT:case b.TOP_CENTER:case b.TOP_RIGHT:return i;case b.BOTTOM_LEFT:case b.BOTTOM_CENTER:case b.BOTTOM_RIGHT:case b.LEFT_BOTTOM:case b.RIGHT_BOTTOM:return c;case b.LEFT_TOP:case b.RIGHT_TOP:return o.height+c;case b.RIGHT_CENTER:case b.LEFT_CENTER:return o.height/2+c;default:return null}}function l(n){var e=n.popup,o=n.anchor,u=n.container,l=n.directions,f=n.autoPositioning,p=n.sidePadding,d=n.top,h=n.left,b=n.offset,m=n.maxHeight,O=n.minWidth,_=n.autoCorrectTopOverflow,E=void 0===_||_,x={top:0,left:0},C=null,k=null!==u?t.i(g.a)(u):w,S=null!==u?u:document.body,R=t.i(g.a)(t.i(g.h)(o)?o:S),P=r(u),M=R.left+P.left+h-k.left,H=R.top+P.top+d-k.top;if(e){var L=i(e,R,M,H,b);if(f&&1!==l.length){var I=l.concat(l[0]).filter(function(n){return L[n]}).map(function(n){return{styles:L[n],direction:n}}).sort(function(e,t){var o=e.styles,r=t.styles;return a(o,P,n)+c(o,P,n)-(a(r,P,n)+c(r,P,n))});x=I[0].styles,C=I[0].direction}else x=L[l[0]],C=l[0]}return m===T.SCREEN||"screen"===m?x.maxHeight=window.innerHeight+P.top-x.top-y.MARGIN:m&&(x.maxHeight=m),E&&(x=s({sidePadding:p,styles:x,anchorRect:R,maxHeight:m,direction:C,popupScrollHeight:e.scrollHeight})),O===v.TARGET||"target"===O?x.minWidth=R.width:O&&(x.minWidth=R.width<O?O:R.width),{styles:x,direction:C}}t.d(e,"d",function(){return b}),t.d(e,"h",function(){return m}),t.d(e,"e",function(){return y}),t.d(e,"f",function(){return v}),t.d(e,"g",function(){return T}),t.d(e,"a",function(){return O}),t.d(e,"b",function(){return _}),e.i=u,e.c=l;var f=t(77),p=(t.n(f),t(78)),d=(t.n(p),t(81)),h=(t.n(d),t(37)),g=(t.n(h),t(36)),b={BOTTOM_RIGHT:"BOTTOM_RIGHT",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_CENTER:"BOTTOM_CENTER",TOP_LEFT:"TOP_LEFT",TOP_RIGHT:"TOP_RIGHT",TOP_CENTER:"TOP_CENTER",RIGHT_TOP:"RIGHT_TOP",RIGHT_BOTTOM:"RIGHT_BOTTOM",RIGHT_CENTER:"RIGHT_CENTER",LEFT_TOP:"LEFT_TOP",LEFT_BOTTOM:"LEFT_BOTTOM",LEFT_CENTER:"LEFT_CENTER"},m=[b.BOTTOM_RIGHT,b.BOTTOM_LEFT,b.TOP_LEFT,b.TOP_RIGHT,b.RIGHT_TOP,b.RIGHT_BOTTOM,b.LEFT_TOP,b.LEFT_BOTTOM],y={MARGIN:16,BORDER_WIDTH:1},v={TARGET:-1},T={SCREEN:-1},O={HIDDEN:0,SHOWING:1,SHOWN:2},_=["directions","autoPositioning","autoCorrectTopOverflow","sidePadding","top","left","offset","maxHeight","minWidth"],w={top:0,left:0}},248:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var s=t(4),u=(t.n(s),t(3)),l=(t.n(u),t(86)),f=(t.n(l),t(62)),p=(t.n(f),t(19)),d=(t.n(p),t(13)),h=(t.n(d),t(37)),g=(t.n(h),t(249)),b=t.n(g),m=t(45),y=function(){function n(){var e=this;r(this,n),c(this,"ALLOW_SHORTCUTS_SELECTOR",".ring-js-shortcuts"),c(this,"ROOT_SCOPE",{scopeId:"ROOT",options:{}}),c(this,"_scopes",{}),c(this,"combokeys",new b.a(document.documentElement)),c(this,"trigger",function(n){return e.combokeys.trigger(n)}),c(this,"_dispatcher",function(n,t){for(var o,r=e._scopeChain.length-1;r>=0;r--){var i=e._scopeChain[r];if((o=e._scopes[i.scopeId])&&o[t]){var a=o[t](n,t,i.scopeId);if(!0!==a)return a}if(i.options.modal)return!0}}),c(this,"_defaultFilter",function(n,t){return t!==document&&!t.matches(e.ALLOW_SHORTCUTS_SELECTOR)&&!t.closest(e.ALLOW_SHORTCUTS_SELECTOR)&&(t.matches("input,select,textarea")||t.contentEditable&&"true"===t.contentEditable)}),this.setFilter(),this.setScope()}return a(n,[{key:"bind",value:function(n){if(!(n instanceof Object)||"function"!=typeof n.handler)throw new Error("Shortcut handler should exist");if(n.scope||(n.scope=this.ROOT_SCOPE.scopeId),Array.isArray(n.key))for(var e=0;e<n.key.length;e++)this.bind(Object.assign({},n,{key:n.key[e]}));else{if("string"!=typeof n.key)throw new Error("Shortcut key should exist");this._scopes[n.scope]||(this._scopes[n.scope]={}),this._scopes[n.scope][n.key]=n.handler,this.combokeys.bind(n.key,this._dispatcher,this._getKeyboardEventType(n))}}},{key:"bindMap",value:function(n,e){if(!(n instanceof Object))throw new Error("Shortcuts map shouldn't be empty");for(var t in n)n.hasOwnProperty(t)&&this.bind(Object.assign({},e||{},{key:t,handler:n[t]}))}},{key:"unbindScope",value:function(n){this._scopes[n]=null}},{key:"getScope",value:function(){return this._scopeChain.slice(1)}},{key:"hasScope",value:function(n){return-1!==this.indexOfScope(n)}},{key:"pushScope",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n){var t=this.indexOfScope(n);-1!==t&&this._scopeChain.splice(t,1),this._scopeChain.push(this.wrapScope(n,e))}}},{key:"popScope",value:function(n){if(n){var e=this.indexOfScope(n);if(-1!==e)return this._scopeChain.splice(e,this._scopeChain.length-1)}}},{key:"spliceScope",value:function(n){if(n){var e=this.indexOfScope(n);-1!==e&&this._scopeChain.splice(e,1)}}},{key:"setScope",value:function(n){var e=this;if(n){var t;if(t="string"==typeof n||!Array.isArray(n)&&"object"===o(n)&&null!==n?[n]:n,!Array.isArray(t))return;t=t.map(function(n){return"string"==typeof n?e.wrapScope(n):n}),this._scopeChain=[this.ROOT_SCOPE].concat(t)}else this._scopeChain=[this.ROOT_SCOPE]}},{key:"wrapScope",value:function(n){return{scopeId:n,options:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}},{key:"hasKey",value:function(n,e){return!(!this._scopes[e]||!this._scopes[e][n])}},{key:"_getKeyboardEventType",value:function(n){return!n.type&&"windows"===m.a.os.name&&n.key.match(/ctrl/i)&&n.key.match(/shift/i)&&n.key.match(/[0-9]/)?"keyup":n.type}},{key:"setFilter",value:function(n){this.combokeys.stopCallback="function"==typeof n?n:this._defaultFilter}},{key:"indexOfScope",value:function(n){return this._scopeChain.findIndex(function(e){return e.scopeId===n})}},{key:"reset",value:function(){this._scopes={},this.setScope(),this.combokeys.reset()}}]),n}();e.a=new y},249:function(n,e,t){n.exports=t(2)(251)},25:function(n,e,t){n.exports=t(2)(398)},28:function(n,e,t){n.exports=t(2)(400)},291:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.i(t(6),void 0),e.push([n.i,".popup_b24 {\n\n  position: absolute;\n  z-index: 5;\n  z-index: var(--ring-overlay-z-index);\n  top: -100vh;\n  left: -100vw;\n\n  overflow-y: auto;\n\n  box-sizing: border-box;\n\n  border: 1px solid rgba(0, 42, 76, .1);\n\n  border: 1px solid var(--ring-popup-border-color);\n  border-radius: 3px;\n  border-radius: var(--ring-border-radius);\n\n  background-color: #fff;\n\n  background-color: var(--ring-popup-background-color);\n  box-shadow: 0 2px 16px 0 rgba(0, 42, 76, .15);\n  box-shadow: 0 2px 16px 0 var(--ring-popup-shadow-color);\n}\n\n.hidden_2b7 {\n  display: none;\n}\n\n.showing_152 {\n  opacity: 0;\n}\n\n.attached_ebc {\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n",""]),e.locals={popup:"popup_b24 "+t(6).locals.font,hidden:"hidden_2b7",showing:"showing_152",attached:"attached_ebc"}},292:function(n,e,t){var o=t(291);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0,t(15)(o,r),o.locals&&(n.exports=o.locals)},3:function(n,e,t){n.exports=t(2)(425)},36:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function s(n){if(n instanceof Range||c(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return Object.assign({},x)}function u(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function l(){return window.innerHeight}function f(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function p(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function d(n){n.preventDefault&&n.preventDefault()}t.d(e,"d",function(){return E}),e.h=c,e.a=s,e.b=u,e.g=l,e.e=f,e.f=p,t.d(e,"l",function(){return C}),t.d(e,"j",function(){return k}),t.d(e,"k",function(){return S}),t.d(e,"c",function(){return R}),e.i=d;var h=t(4),g=(t.n(h),t(3)),b=(t.n(g),t(24)),m=(t.n(b),t(83)),y=(t.n(m),t(11)),v=(t.n(y),t(9)),T=(t.n(v),t(38)),O=(t.n(T),t(28)),_=(t.n(O),t(7)),w=(t.n(_),t(13)),E=(t.n(w),window.getComputedStyle.bind(window)),x={top:0,right:0,bottom:0,left:0,width:0,height:0},C=function(n){return function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).filter(function(n){return!!n}).forEach(function(t){return e[n](t)})}},k=C("add"),S=C("remove"),R=function(){function n(){o(this,n),a(this,"_all",new Set)}return i(n,[{key:"add",value:function(n,e,t,o){n.addEventListener(e,t,o);var r=function(){return n.removeEventListener(e,t,o)};return this._all.add(r),r}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},37:function(n,e,t){n.exports=t(2)(252)},38:function(n,e,t){n.exports=t(2)(440)},39:function(n,e,t){"use strict";function o(n){if(!n)throw Error('Argument "name" is required in getUID()');return r[n]||(r[n]=0),n+String(r[n]++)}e.a=o;var r={}},4:function(n,e,t){n.exports=t(2)(446)},45:function(n,e,t){"use strict";var o=t(79),r=t.n(o),i=new r.a;i.sniff(),e.a=i},5:function(n,e,t){n.exports=t(2)(59)},50:function(n,e,t){"use strict";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}function c(n,e){return!e||"object"!==o(e)&&"function"!=typeof e?s(n):e}function s(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",function(){return v});var d=t(4),h=(t.n(d),t(3)),g=(t.n(h),t(5)),b=(t.n(g),t(8)),m=t.n(b),y=t(248),v=function(n){function e(){return r(this,e),c(this,u(e).apply(this,arguments))}return l(e,n),a(e,[{key:"componentWillMount",value:function(){var n=this.props,e=n.map,t=n.scope,o=n.options;y.a.bindMap(e,this.props),y.a.pushScope(t,o)}},{key:"componentWillUnmount",value:function(){var n=this.props.scope;y.a.unbindScope(n),y.a.spliceScope(n)}},{key:"render",value:function(){return this.props.children||null}}]),e}(g.Component);p(v,"propTypes",{map:m.a.object.isRequired,scope:m.a.string.isRequired,options:m.a.object,children:m.a.node}),p(v,"defaultProps",{options:{}})},6:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},62:function(n,e,t){n.exports=t(2)(397)},63:function(n,e,t){n.exports=t(2)(312)},65:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},7:function(n,e,t){n.exports=t(2)(447)},77:function(n,e,t){n.exports=t(2)(403)},78:function(n,e,t){n.exports=t(2)(439)},79:function(n,e,t){n.exports=t(2)(256)},8:function(n,e,t){n.exports=t(2)(89)},81:function(n,e,t){n.exports=t(2)(413)},83:function(n,e,t){n.exports=t(2)(402)},85:function(n,e,t){"use strict";function o(){var n,e;return function(t){n=t,e||(e=window.requestAnimationFrame(function(){n(),e=null,n=null}))}}e.a=o},86:function(n,e,t){n.exports=t(2)(309)},9:function(n,e,t){n.exports=t(2)(87)},962:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(5),r=t.n(o),i=t(20),a=(t.n(i),t(243)),c=a.a.PopupProps.Directions,s=r.a.createElement("span",{className:"popup"},"This is a popup"),u=r.a.createElement("div",null,r.a.createElement("div",{className:"message"},"Popup should change open direction when reaching window borders",r.a.createElement(a.a,{directions:[c.TOP_CENTER]},s)),r.a.createElement("div",{className:"message vert"},"Popup should change open direction when reaching window borders",r.a.createElement(a.a,{directions:[c.RIGHT_CENTER]},s)),r.a.createElement("div",{className:"anchor left"},"Left side open popup",r.a.createElement(a.a,{directions:[c.LEFT_BOTTOM,c.RIGHT_BOTTOM]},s)),r.a.createElement("div",{className:"anchor right"},"Right side open popup",r.a.createElement(a.a,{directions:[c.RIGHT_BOTTOM,c.LEFT_BOTTOM]},s)),r.a.createElement("div",{className:"anchor bottom"},"Downside open popup",r.a.createElement(a.a,{directions:[c.BOTTOM_RIGHT,c.TOP_LEFT]},s)),r.a.createElement("div",{className:"anchor top"},"Upside open popup",r.a.createElement(a.a,{directions:[c.TOP_LEFT,c.BOTTOM_RIGHT]},s)));t.i(i.render)(u,document.getElementById("example"))}});