!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1024)}({10:function(t,e,n){t.exports=n(2)(24)},1024:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=n.n(r),o=(n(901),n(296));n.n(o),i.a.module("Example.analyticsDemo",["Ring.analytics"]).config(["analyticsProvider","AnalyticsCustomPlugin","AnalyticsGAPlugin",function(t,e,n){var r=new e(function(t){console.log("Here you can send data to server",t)},!0,600);t.plugins([r])}]).controller("TrackEventDemoCtrl",["analytics",function(t){t.trackEvent("track-event-demo","show")}])},14:function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},16:function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=h[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],e))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s=o[1],u=o[2],c=o[3],l={css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function o(t,e){var n=y(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=_[_.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),_.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=y(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=_.indexOf(t);e>=0&&_.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),o(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function l(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var c=m++;n=w||(w=s(e)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=v.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=d.bind(null,n),i=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function v(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=k(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},p=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){return document.querySelector(t)},y=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=g.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),w=null,m=0,_=[],k=n(46);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=p()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return r(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=h[s.id];u.refs--,o.push(u)}t&&r(i(t,e),e);for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete h[u.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},2:function(t,e){t.exports=vendor_lib},23:function(t,e,n){t.exports={default:n(34),__esModule:!0}},296:function(t,e,n){var r=n(303);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,n(16)(r,i),r.locals&&(t.exports=r.locals)},30:function(t,e,n){"use strict";var r=n(75),i=n.n(r),o=new i.a;o.sniff(),e.a=o},303:function(t,e,n){e=t.exports=n(14)(!1),e.push([t.i,".ring-link,.ring-link:visited{color:#1866c5;text-decoration:none;cursor:pointer}.ring-link .ring-icon,.ring-link:visited .ring-icon{position:relative;top:-2px}.ring-link:focus,.ring-link:hover,.ring-link_focus,.ring-link_focus:visited{color:#ff5a00;text-decoration:underline}.ring-link_pseudo,.ring-link_pseudo:hover{text-decoration:none}",""])},34:function(t,e,n){n(50);var r=n(10).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},36:function(t,e,n){t.exports=n(2)(391)},46:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},50:function(t,e,n){t.exports=n(2)(518)},6:function(t,e,n){"use strict";e.__esModule=!0;var r=n(23),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},75:function(t,e,n){t.exports=n(2)(401)},855:function(t,e,n){"use strict";var r=n(5),i=n.n(r),o=n(6),a=n.n(o),s=function(){function t(){i()(this,t),this._plugins=[]}return a()(t,[{key:"config",value:function(t){this._plugins=t}},{key:"track",value:function(t,e){if(t){var n=t.indexOf(":");n<0&&(n=t.indexOf("_")),n<0&&(n=t.length);var r=t.substr(0,n),i=t.substr(n+1);this.trackEvent(r,i,e)}}},{key:"trackPageView",value:function(t){this._plugins.forEach(function(e){e.trackPageView(t)})}},{key:"trackEvent",value:function(t,e,n){var r=n?e+this._buildSuffix(n):null;this._plugins.forEach(function(n){n.trackEvent(t,e),r&&n.trackEvent(t,r)})}},{key:"trackShortcutEvent",value:function(t,e,n){this.trackEvent(t,e,n),this.trackEvent("ring-shortcut",t+"$"+e,n)}},{key:"trackEntityProperties",value:function(t,e,n,r){for(var i=0;i<n.length;++i){var o=n[i].split("."),a=e;if(o.length){for(var s=0;s<o.length;++s){if(!a.hasOwnProperty(o[s])){a="no-value";break}a=a[o[s]]}"string"==typeof a&&(a=a.toLowerCase().replace(/[\._]+/g,"-"));var u=o.join("-")+"__"+a;this.trackEvent(t,u,r)}}}},{key:"_buildSuffix",value:function(t){if(!t)return"";var e="",n=void 0;for(n in t)t.hasOwnProperty(n)&&(e+="__"+n+"$"+t[n]);return e}}]),t}();e.a=new s},856:function(t,e,n){"use strict";var r=n(5),i=n.n(r),o=n(6),a=n.n(o),s=n(870),u=function(){function t(e,n,r,o){i()(this,t),this._data=[],this.config({send:e,isDevelopment:n,flushInterval:r,flushingAllowedChecker:o})}return a()(t,[{key:"config",value:function(t){var e=this,n=t.flushingAllowedChecker;"function"!=typeof n&&(n=function(){return!0}),this._flush=function(){e._data.length>0&&n()&&(t.send(e._data),e._data=[])},this._isDevelopment=t.isDevelopment,this._flushInterval=t.flushInterval||1e4,this._flushMaxPackSize=t.flushMaxPackSize||100}},{key:"trackEvent",value:function(t,e){this._processEvent(t,e)}},{key:"trackPageView",value:function(t){this._lastPagePath!==t&&(this._trackPageViewAdditionalInfo(t),this._processEvent("ring-page",t),this._processEvent("ring-navigator_user-agent",s.a.getUserAgentPresentation()),this._processEvent("ring-navigator_platform",s.a.npeSaveLowerCase(navigator.platform)),this._processEvent("ring-navigator_lang",s.a.npeSaveLowerCase(navigator.language)),this._processEvent("ring-device-pixel-ratio",s.a.getDevicePixelRatioPresentation()),this._processEvent("ring-screen-width",s.a.getScreenWidthPresentation()))}},{key:"_initSendSchedule",value:function(){var t=this;window.addEventListener("beforeunload",function(){return t._trackPageViewAdditionalInfo(),t._flush()}),setInterval(this._flush,this._flushInterval),this._hasSendSchedule=!0}},{key:"_processEvent",value:function(t,e){!this._hasSendSchedule&&this._flush&&this._initSendSchedule();var n=s.a.reformatString(t,!0),r=s.a.reformatString(e);this._isDevelopment&&console.log("TRACKING DATA = ",n,r),this._addDataToFlushingPack({category:n,action:r})}},{key:"_trackPageViewAdditionalInfo",value:function(t){var e=(new Date).getTime();if(this._lastPagePath&&this._lastPageViewTime){var n=s.a.getPageViewDurationPresentation(e-this._lastPageViewTime);this._processEvent("ring-pageview-duration_"+this._lastPagePath,n)}this._lastPageViewTime=e,this._lastPagePath=t}},{key:"_addDataToFlushingPack",value:function(t){this._data.push(t),this._data.length>=this._flushMaxPackSize&&this._flush()}}]),t}();e.a=u},866:function(t,e,n){t.exports={default:n(873),__esModule:!0}},870:function(t,e,n){"use strict";var r=n(866),i=n.n(r),o=n(30),a={};a.reformatString=function(t,e){var n=String(t),r=e?/[\.:;!@#^&*()\{}\[\]?,%=+\\\/]+/g:/[\.:;!@#^&*()\{}\[\]?,%=+\\]+/g;return n.replace(r,"_")},a.getPageViewDurationPresentation=function(t){var e=t/1e3;if(e>3600)return"more-than-hour";var n=Math.floor(Math.pow(2,Math.floor(i()(e))+1));return"less-than-"+(n=n>0?n:1)+"-sec"},a.getScreenWidthPresentation=function(){for(var t=[0,768,992,1200],e=1;e<t.length;++e)if(window.innerWidth<t[e])return"["+t[e-1]+"px;"+t[e]+"px)";return"[1200px;inf)"},a.npeSaveLowerCase=function(t){return(t||"unknown").toLowerCase()},a.getUserAgentPresentation=function(){return a.npeSaveLowerCase(o.a.browser.name||"unknown")+"$"+(o.a.browser.version[0]||"unknown")},a.getDevicePixelRatioPresentation=function(){return window.devicePixelRatio&&window.devicePixelRatio.toFixed?String(window.devicePixelRatio.toFixed(1)):"unknown"},e.a=a},873:function(t,e,n){n(890),t.exports=n(10).Math.log2},890:function(t,e,n){t.exports=n(2)(498)},901:function(t,e,n){"use strict";var r=n(36),i=n.n(r),o=n(855),a=n(941),s=n(856),u=i.a.module("Ring.analytics",[]);u.provider("analytics",[function(){var t=[];this.plugins=function(e){t=e},this.$get=["$log","$injector",function(e,n){for(var r=[],i=0;i<t.length;++i)if("string"==typeof t[i])try{var a=n.get(t[i]);r.push(a),e.debug("analytics: loaded plugin "+t[i])}catch(n){e.debug("analytics: unable to load factory "+t[i])}else r.push(t[i]);return o.a.config(r),o.a}]}]),u.constant("AnalyticsGAPlugin",a.a),u.constant("AnalyticsCustomPlugin",s.a),u.run(["$rootScope","analytics",function(t,e){t.$on("$routeChangeSuccess",function(t,n){n&&n.$$route&&n.$$route.originalPath&&e.trackPageView(n.$$route.originalPath)})}]),u.directive("rgAnalytics",["analytics",function(t){return{restrict:"A",replace:!1,link:function(e,n){var r=n.attr("rg-analytics-on")||"click";i.a.element(n).bind(r,function(){t.track(n.attr("rg-analytics"))})}}}]),u.name},941:function(t,e,n){"use strict";var r=n(5),i=n.n(r),o=n(6),a=n.n(o),s=function(){function t(e,n){if(i()(this,t),e||n){!function(t,e,n,r,i,o,a){t.GoogleAnalyticsObject=i,t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].l=1*new Date,o=e.createElement(n),a=e.getElementsByTagName(n)[0],o.async=1,o.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(o,a)}(window,document,"script",0,"ga");var r=e||"UA-57284711-1";ga("create",r,e?{}:{cookieDomain:"none"})}}return a()(t,[{key:"trackEvent",value:function(t,e){if(window.ga){var n={eventCategory:t,eventAction:e};ga("send","event",n)}}},{key:"trackPageView",value:function(t){window.ga&&ga("send","pageview",t)}}]),t}();e.a=s}});