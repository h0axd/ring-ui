!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1120)}({1120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(55),o=n.n(r),c=n(786);o.a.module("Example.template-ng",[c.a]).controller("ExampleCtrl",["$scope",function(e){e.template="<button>button</button>"}])},19:function(e,t,n){e.exports=n(2)(335)},2:function(e,t){e.exports=vendor_lib},3:function(e,t,n){e.exports=n(2)(428)},4:function(e,t,n){e.exports=n(2)(449)},404:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a});var i=n(7),a=(n.n(i),function(){function e(){for(var t=this,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];r(this,e),u(this,"$inject",{}),this.constructor.$inject.forEach(function(e,n){t.$inject[e]=o[n]})}return c(e,null,[{key:"controller",get:function(){return this}}]),e}());u(a,"$inject",[])},55:function(e,t,n){e.exports=n(2)(252)},7:function(e,t,n){e.exports=n(2)(450)},786:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?p(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(19),y=(n.n(b),n(4)),m=(n.n(y),n(3)),h=(n.n(m),n(55)),v=n.n(h),d=n(404),$=v.a.module("Ring.template",[]),j=function(e){function t(){var e,n;o(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];n=i(this,(e=a(t)).call.apply(e,[this].concat(c))),s(p(p(n)),"currentScope",null),s(p(p(n)),"render",function(e){var t=n.$inject,r=t.$scope,o=t.$element,c=t.$compile;n.cleanup(),n.currentScope=r.$new(),n.currentScope.$evalAsync(function(){o.html(e),c(o.contents())(n.currentScope)})});var l=n.$inject,f=l.$scope,b=l.$attrs;return f.$watch(b.rgTemplate||b.template,n.render),n}return l(t,e),u(t,[{key:"cleanup",value:function(){this.currentScope&&(this.currentScope.$destroy(),this.currentScope=null)}}]),t}(d.a);s(j,"$inject",["$scope","$element","$attrs","$compile"]),$.directive("rgTemplate",function(){return{controller:j}}),t.a=$.name}});