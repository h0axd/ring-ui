!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1118)}({0:function(e,t){e.exports=vendor_lib},1118:function(e,t,n){"use strict";function r(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}var a=e.apply(t,n);u(void 0)})}}function i(){return i=o(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get(f);case 2:if(t=e.sent){e.next=10;break}return n=Math.random().toString(),e.next=7,l.set(f,n);case 7:p.innerText=n,e.next=11;break;case 10:p.innerText=t;case 11:case"end":return e.stop()}},e,this)})),i.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(20),c=(n.n(u),n(279)),a=(n.n(c),n(82)),s=(n.n(a),n(463)),f="storage-example-key",l=new s.a,p=document.getElementById("stored-value");!function(){i.apply(this,arguments)}()},17:function(e,t,n){e.exports=n(0)(335)},20:function(e,t,n){e.exports=n(0)(404)},22:function(e,t,n){e.exports=n(0)(418)},279:function(e,t,n){e.exports=n(0)(461)},36:function(e,t,n){e.exports=n(0)(403)},407:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length||"function"!=typeof e.copy||"function"!=typeof e.slice||e.length>0&&"number"!=typeof e[0])}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(a(e))return!!a(t)&&(e=u.call(e),t=u.call(t),s(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var l=c(e),p=c(t)}catch(e){return!1}if(l.length!=p.length)return!1;for(l.sort(),p.sort(),i=l.length-1;i>=0;i--)if(l[i]!=p[i])return!1;for(i=l.length-1;i>=0;i--)if(f=l[i],!s(e[f],t[f],n))return!1;return typeof e==typeof t}var u=Array.prototype.slice,c=n(409),a=n(408),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},408:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},409:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},454:function(e,t,n){e.exports=n(0)(388)},463:function(e,t,n){"use strict";var r=n(468),o=n(467),i=r.a;try{var u="testStorage";localStorage.setItem(u,u),localStorage.removeItem(u)}catch(e){i=o.a}var c=i;t.a=c},467:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return y});var c=n(6),a=(n.n(c),n(7)),s=(n.n(a),n(22)),f=(n.n(s),n(454)),l=(n.n(f),n(82)),p=(n.n(l),n(36)),h=(n.n(p),n(407)),v=n.n(h),y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e);var n="session"===t.type;this.cookieName=t.cookieName||(n?this.constructor.DEFAULT_SESSION_COOKIE_NAME:this.constructor.DEFAULT_COOKIE_NAME),this.checkDelay=t.checkDelay||this.constructor.DEFAULT_CHECK_DELAY,this.expires=n?this.constructor.COOKIE_EXPIRES:null}return i(e,null,[{key:"_createCookie",value:function(e,t,n){var r,o;n?(r=new Date,r.setTime(r.getTime()+864e5*n),o="; expires=".concat(r.toGMTString())):o=";",document.cookie="".concat(e,"=").concat(t).concat(o,"; path=/")}},{key:"_readCookie",value:function(e){for(var t,n="".concat(e,"="),r=document.cookie.split(";"),o=0;o<r.length;o++){for(t=r[o];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(n))return t.substring(n.length,t.length)}}}]),i(e,[{key:"_read",value:function(){var t=this;return new Promise(function(n){var r=e._readCookie(t.cookieName);n(JSON.parse(decodeURIComponent(r)))}).catch(function(){return{}})}},{key:"_write",value:function(t){var n=this;return new Promise(function(r){var o=encodeURIComponent(JSON.stringify(t));return e._createCookie(n.cookieName,"{}"===o?"":o,n.expires),r(t)})}},{key:"get",value:function(e){return this._read().then(function(t){return t[e]||null})}},{key:"set",value:function(e,t){var n=this;return this._read().then(function(r){return e&&(null!=t?r[e]=t:Reflect.deleteProperty(r,e)),n._write(r)})}},{key:"remove",value:function(e){return this.set(e,null)}},{key:"each",value:function(e){return"function"!=typeof e?Promise.reject(new Error("Callback is not a function")):this._read().then(function(t){var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(e(r,t[r]));return Promise.all(n)})}},{key:"on",value:function(e,t){var n=this,r=!1,o=function o(i){n.get(e).then(function(e){r||(v()(i,e)||t(e),window.setTimeout(function(){return o(i)},n.checkDelay))})};return this.get(e).then(o),function(){r=!0}}}]),e}();u(y,"DEFAULT_COOKIE_NAME","localStorage"),u(y,"DEFAULT_SESSION_COOKIE_NAME","sessionStorage"),u(y,"DEFAULT_CHECK_DELAY",3e3),u(y,"COOKIE_EXPIRES",365),u(y,"QUOTA",4093)},468:function(e,t,n){"use strict";function r(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}var a=e.apply(t,n);u(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}n.d(t,"a",function(){return v});var a=n(6),s=(n.n(a),n(7)),f=(n.n(s),n(22)),l=(n.n(f),n(17)),p=(n.n(l),n(82)),h=(n.n(p),n(279)),v=(n.n(h),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.storageType="session"===t.type?"sessionStorage":"localStorage"}return c(e,null,[{key:"safePromise",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0&&"NS_ERROR_FILE_CORRUPTED"===e.t0.name&&window.alert('Sorry, it looks like your browser storage is corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and setting time range to "Everything". This will remove the corrupted browser storage across all sites.'),e.t0;case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return e}()}]),c(e,[{key:"get",value:function(e){var t=this;return this.constructor.safePromise(function(n){var r=window[t.storageType].getItem(e);try{n(JSON.parse(r))}catch(e){n(r)}})}},{key:"set",value:function(e,t){var n=this;return this.constructor.safePromise(function(r){window[n.storageType].setItem(e,JSON.stringify(t)),r(t)})}},{key:"remove",value:function(e){var t=this.storageType;return this.constructor.safePromise(function(n){window[t].hasOwnProperty(e)&&window[t].removeItem(e),n()})}},{key:"each",value:function(e){var t=this.storageType;return this.constructor.safePromise(function(n){var r=[];for(var o in window[t])if(window[t].hasOwnProperty(o)){var i=window[t].getItem(o);try{i=JSON.parse(i)}catch(e){}r.push(Promise.resolve(e(o,i)))}n(Promise.all(r))})}},{key:"on",value:function(e,t){function n(n){if(n.key===e)try{t(JSON.parse(n.newValue))}catch(e){t(n.newValue)}}return window.addEventListener("storage",n,!1),function(){return window.removeEventListener("storage",n,!1)}}}]),e}())},6:function(e,t,n){e.exports=n(0)(450)},7:function(e,t,n){e.exports=n(0)(87)},82:function(e,t,n){e.exports=n(0)(120)}});