"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r){var e=function(r,e){if("object"!==t(r)||null===r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var n=o.call(r,e||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"===t(e)?e:String(e)}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,r(n.key),n)}}exports._classCallCheck=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")},exports._createClass=function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t},exports._toPropertyKey=r,exports._typeof=t;
//# sourceMappingURL=createClass-826941b3.js.map
