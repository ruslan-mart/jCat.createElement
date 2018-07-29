(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}
			var jCat = g['jCat'] !== null && typeof g['jCat'] !== 'object' ? (g['jCat'] = {}) : g['jCat'];
			var _f = f();
			for(var i in _f) if(_f.hasOwnProperty(i)) jCat[i] = _f[i];
		}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var DEFAULT_SELECTOR = 'div';
var DEFAULT_TAG_NAME = 'div';
var SELECTOR_PATTERN = /^([\w-]*)((?:[.#][\w-]+)*)$/;
var createElement = {
  parseSelector: function parseSelector(selector) {
    if (selector === null) {
      selector = DEFAULT_SELECTOR;
    }

    var matches = SELECTOR_PATTERN.exec(selector);

    if (matches !== null) {
      var classList = [],
          id = null,
          selectorItems = matches[2],
          tagName = matches[1] || DEFAULT_TAG_NAME;

      if (selectorItems !== '') {
        selectorItems = selectorItems.split(/(?=[.#])/);

        for (var i = 0; i !== selectorItems.length; i++) {
          var item = selectorItems[i],
              value = item.substring(1);

          if (item.charAt(0) === '.') {
            classList.push(value);
          } else {
            id = value;
          }
        }
      }

      return {
        classList: classList,
        id: id,
        tagName: tagName
      };
    } else {
      throw new Error("Create element error: invalid selector '".concat(selector, "'"));
    }
  },
  setProperties: function setProperties(element, properties) {
    var nodeParentProto = Object.getPrototypeOf(Node).prototype,
        object = element;

    do {
      for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
          var descriptor = Object.getOwnPropertyDescriptor(object, key);

          if (descriptor && typeof descriptor.set === 'function') {
            element[key] = properties[key];
          }
        }
      }

      object = Object.getPrototypeOf(object);
    } while (object !== nodeParentProto && object !== null);
  },
  setStyles: function setStyles(element, styles) {
    for (var key in styles) {
      if (styles.hasOwnProperty(key)) {
        element.style[key] = styles[key];
      }
    }
  }
};

var _default = function _default() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var data = createElement.parseSelector(selector),
      element = document.createElement(data.tagName),
      classList = data.classList;

  if (data.id !== null) {
    element.id = data.id;
  }

  if (properties !== null && typeof properties === 'object' && 'classList' in properties) {
    var classListProperty = properties.classList;

    if (classListProperty !== null) {
      classList = classList.concat(classListProperty instanceof Array ? classListProperty : classListProperty.toString());
    }

    delete properties.classList;
  }

  if (classList.length !== 0) {
    element.className = classList.join(' ');
  }

  if (properties !== null) {
    switch (typeof properties) {
      case 'object':
        createElement.setProperties(element, properties);
        break;

      case 'string':
      case 'number':
        element.innerHTML = properties;
        break;

      default:
        throw new TypeError("Invalid parameter 'content | properties', it is expected: 'object', 'string', 'number' or 'null'.");
    }
  }

  if (styles !== null) {
    switch (typeof styles) {
      case 'object':
        createElement.setStyles(element, styles);
        break;

      case 'string':
        element.style.cssText = styles;
        break;

      default:
        throw new TypeError("Invalid parameter 'styles', it is expected: 'object', 'string', or 'null'.");
    }
  }

  return element;
};

exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _createElement.default;
  }
});

var _createElement = _interopRequireDefault(require("./src/createElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./src/createElement":1}]},{},[2])(2)
});
