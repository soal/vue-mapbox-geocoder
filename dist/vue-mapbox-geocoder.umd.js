(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(
      require("vue-mapbox"),
      require("@mapbox/mapbox-gl-geocoder")
    );
  else if (typeof define === "function" && define.amd)
    define(["vue-mapbox", "@mapbox/mapbox-gl-geocoder"], factory);
  else if (typeof exports === "object")
    exports["vue-mapbox-geocoder"] = factory(
      require("vue-mapbox"),
      require("@mapbox/mapbox-gl-geocoder")
    );
  else
    root["vue-mapbox-geocoder"] = factory(
      root["vue-mapbox"],
      root["mapbox-gl-geocoder"]
    );
})(typeof self !== "undefined" ? self : this, function(
  __WEBPACK_EXTERNAL_MODULE__35be__,
  __WEBPACK_EXTERNAL_MODULE__7c06__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = "fb15")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "01f9": /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var LIBRARY = __webpack_require__("2d00");
        var $export = __webpack_require__("5ca1");
        var redefine = __webpack_require__("2aba");
        var hide = __webpack_require__("32e9");
        var Iterators = __webpack_require__("84f2");
        var $iterCreate = __webpack_require__("41a0");
        var setToStringTag = __webpack_require__("7f20");
        var getPrototypeOf = __webpack_require__("38fd");
        var ITERATOR = __webpack_require__("2b4c")("iterator");
        var BUGGY = !([].keys && "next" in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = "@@iterator";
        var KEYS = "keys";
        var VALUES = "values";

        var returnThis = function() {
          return this;
        };

        module.exports = function(
          Base,
          NAME,
          Constructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED
        ) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }
            return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + " Iterator";
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native =
            proto[ITERATOR] ||
            proto[FF_ITERATOR] ||
            (DEFAULT && proto[DEFAULT]);
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT
            ? !DEF_VALUES
              ? $default
              : getMethod("entries")
            : undefined;
          var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (
              IteratorPrototype !== Object.prototype &&
              IteratorPrototype.next
            ) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true);
              // fix for some old engines
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          // Define iterator
          if (
            (!LIBRARY || FORCED) &&
            (BUGGY || VALUES_BUG || !proto[ITERATOR])
          ) {
            hide(proto, ITERATOR, $default);
          }
          // Plug for library
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED)
              for (key in methods) {
                if (!(key in proto)) redefine(proto, key, methods[key]);
              }
            else
              $export(
                $export.P + $export.F * (BUGGY || VALUES_BUG),
                NAME,
                methods
              );
          }
          return methods;
        };

        /***/
      },

      /***/ "07e3": /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

      /***/ "0d58": /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__("ce10");
        var enumBugKeys = __webpack_require__("e11e");

        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys);
          };

        /***/
      },

      /***/ "0fc9": /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__("3a38");
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },

      /***/ "11e9": /***/ function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__("52a7");
        var createDesc = __webpack_require__("4630");
        var toIObject = __webpack_require__("6821");
        var toPrimitive = __webpack_require__("6a99");
        var has = __webpack_require__("69a8");
        var IE8_DOM_DEFINE = __webpack_require__("c69a");
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__("9e1e")
          ? gOPD
          : function getOwnPropertyDescriptor(O, P) {
              O = toIObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return gOPD(O, P);
                } catch (e) {
                  /* empty */
                }
              if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
            };

        /***/
      },

      /***/ "1495": /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__("86cc");
        var anObject = __webpack_require__("cb7c");
        var getKeys = __webpack_require__("0d58");

        module.exports = __webpack_require__("9e1e")
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = getKeys(Properties);
              var length = keys.length;
              var i = 0;
              var P;
              while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
              return O;
            };

        /***/
      },

      /***/ "1691": /***/ function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );

        /***/
      },

      /***/ "1bc3": /***/ function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__("f772");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (
            S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            typeof (fn = it.valueOf) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            !S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

      /***/ "1ec9": /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("f772");
        var document = __webpack_require__("e53d").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },

      /***/ "230e": /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        var document = __webpack_require__("7726").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },

      /***/ "241e": /***/ function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__("25eb");
        module.exports = function(it) {
          return Object(defined(it));
        };

        /***/
      },

      /***/ "25eb": /***/ function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };

        /***/
      },

      /***/ "294c": /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },

      /***/ "2aba": /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("7726");
        var hide = __webpack_require__("32e9");
        var has = __webpack_require__("69a8");
        var SRC = __webpack_require__("ca5a")("src");
        var $toString = __webpack_require__("fa5b");
        var TO_STRING = "toString";
        var TPL = ("" + $toString).split(TO_STRING);

        __webpack_require__("8378").inspectSource = function(it) {
          return $toString.call(it);
        };

        (module.exports = function(O, key, val, safe) {
          var isFunction = typeof val == "function";
          if (isFunction) has(val, "name") || hide(val, "name", key);
          if (O[key] === val) return;
          if (isFunction)
            has(val, SRC) ||
              hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          }
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
          return (
            (typeof this == "function" && this[SRC]) || $toString.call(this)
          );
        });

        /***/
      },

      /***/ "2aeb": /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__("cb7c");
        var dPs = __webpack_require__("1495");
        var enumBugKeys = __webpack_require__("e11e");
        var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
        var Empty = function() {
          /* empty */
        };
        var PROTOTYPE = "prototype";

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__("230e")("iframe");
          var i = enumBugKeys.length;
          var lt = "<";
          var gt = ">";
          var iframeDocument;
          iframe.style.display = "none";
          __webpack_require__("fab2").appendChild(iframe);
          iframe.src = "javascript:"; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(
            lt + "script" + gt + "document.F=Object" + lt + "/script" + gt
          );
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O);
              result = new Empty();
              Empty[PROTOTYPE] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
          };

        /***/
      },

      /***/ "2b4c": /***/ function(module, exports, __webpack_require__) {
        var store = __webpack_require__("5537")("wks");
        var uid = __webpack_require__("ca5a");
        var Symbol = __webpack_require__("7726").Symbol;
        var USE_SYMBOL = typeof Symbol == "function";

        var $exports = (module.exports = function(name) {
          return (
            store[name] ||
            (store[name] =
              (USE_SYMBOL && Symbol[name]) ||
              (USE_SYMBOL ? Symbol : uid)("Symbol." + name))
          );
        });

        $exports.store = store;

        /***/
      },

      /***/ "2d00": /***/ function(module, exports) {
        module.exports = false;

        /***/
      },

      /***/ "2d95": /***/ function(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

      /***/ "2fdb": /***/ function(module, exports, __webpack_require__) {
        "use strict";
        // 21.1.3.7 String.prototype.includes(searchString, position = 0)

        var $export = __webpack_require__("5ca1");
        var context = __webpack_require__("d2c8");
        var INCLUDES = "includes";

        $export(
          $export.P + $export.F * __webpack_require__("5147")(INCLUDES),
          "String",
          {
            includes: function includes(searchString /* , position = 0 */) {
              return !!~context(this, searchString, INCLUDES).indexOf(
                searchString,
                arguments.length > 1 ? arguments[1] : undefined
              );
            }
          }
        );

        /***/
      },

      /***/ "32a6": /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__("241e");
        var $keys = __webpack_require__("c3a1");

        __webpack_require__("ce7e")("keys", function() {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });

        /***/
      },

      /***/ "32e9": /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__("86cc");
        var createDesc = __webpack_require__("4630");
        module.exports = __webpack_require__("9e1e")
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

      /***/ "335c": /***/ function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__("6b4c");
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function(it) {
              return cof(it) == "String" ? it.split("") : Object(it);
            };

        /***/
      },

      /***/ "35be": /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__35be__;

        /***/
      },

      /***/ "35e8": /***/ function(module, exports, __webpack_require__) {
        var dP = __webpack_require__("d9f6");
        var createDesc = __webpack_require__("aebd");
        module.exports = __webpack_require__("8e60")
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value));
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

      /***/ "36c3": /***/ function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__("335c");
        var defined = __webpack_require__("25eb");
        module.exports = function(it) {
          return IObject(defined(it));
        };

        /***/
      },

      /***/ "38fd": /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__("69a8");
        var toObject = __webpack_require__("4bf8");
        var IE_PROTO = __webpack_require__("613b")("IE_PROTO");
        var ObjectProto = Object.prototype;

        module.exports =
          Object.getPrototypeOf ||
          function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (
              typeof O.constructor == "function" &&
              O instanceof O.constructor
            ) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };

        /***/
      },

      /***/ "3a38": /***/ function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },

      /***/ "41a0": /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var create = __webpack_require__("2aeb");
        var descriptor = __webpack_require__("4630");
        var setToStringTag = __webpack_require__("7f20");
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__("32e9")(
          IteratorPrototype,
          __webpack_require__("2b4c")("iterator"),
          function() {
            return this;
          }
        );

        module.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
          });
          setToStringTag(Constructor, NAME + " Iterator");
        };

        /***/
      },

      /***/ "4588": /***/ function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },

      /***/ "4630": /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },

      /***/ "4bf8": /***/ function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__("be13");
        module.exports = function(it) {
          return Object(defined(it));
        };

        /***/
      },

      /***/ "5147": /***/ function(module, exports, __webpack_require__) {
        var MATCH = __webpack_require__("2b4c")("match");
        module.exports = function(KEY) {
          var re = /./;
          try {
            "/./"[KEY](re);
          } catch (e) {
            try {
              re[MATCH] = false;
              return !"/./"[KEY](re);
            } catch (f) {
              /* empty */
            }
          }
          return true;
        };

        /***/
      },

      /***/ "52a7": /***/ function(module, exports) {
        exports.f = {}.propertyIsEnumerable;

        /***/
      },

      /***/ "5537": /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__("8378");
        var global = __webpack_require__("7726");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__("2d00") ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });

        /***/
      },

      /***/ "5559": /***/ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__("dbdb")("keys");
        var uid = __webpack_require__("62a0");
        module.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },

      /***/ "584a": /***/ function(module, exports) {
        var core = (module.exports = { version: "2.6.5" });
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

        /***/
      },

      /***/ "5b4e": /***/ function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__("36c3");
        var toLength = __webpack_require__("b447");
        var toAbsoluteIndex = __webpack_require__("0fc9");
        module.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };

        /***/
      },

      /***/ "5ca1": /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("7726");
        var core = __webpack_require__("8378");
        var hide = __webpack_require__("32e9");
        var redefine = __webpack_require__("2aba");
        var ctx = __webpack_require__("9b43");
        var PROTOTYPE = "prototype";

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
            ? global[name] || (global[name] = {})
            : (global[name] || {})[PROTOTYPE];
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          var key, own, out, exp;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp =
              IS_BIND && own
                ? ctx(out, global)
                : IS_PROTO && typeof out == "function"
                ? ctx(Function.call, out)
                : out;
            // extend global
            if (target) redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
          }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },

      /***/ "5dbc": /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        var setPrototypeOf = __webpack_require__("8b97").set;
        module.exports = function(that, target, C) {
          var S = target.constructor;
          var P;
          if (
            S !== C &&
            typeof S == "function" &&
            (P = S.prototype) !== C.prototype &&
            isObject(P) &&
            setPrototypeOf
          ) {
            setPrototypeOf(that, P);
          }
          return that;
        };

        /***/
      },

      /***/ "613b": /***/ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__("5537")("keys");
        var uid = __webpack_require__("ca5a");
        module.exports = function(key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },

      /***/ "626a": /***/ function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__("2d95");
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function(it) {
              return cof(it) == "String" ? it.split("") : Object(it);
            };

        /***/
      },

      /***/ "62a0": /***/ function(module, exports) {
        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
          return "Symbol(".concat(
            key === undefined ? "" : key,
            ")_",
            (++id + px).toString(36)
          );
        };

        /***/
      },

      /***/ "63b6": /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__("e53d");
        var core = __webpack_require__("584a");
        var ctx = __webpack_require__("d864");
        var hide = __webpack_require__("35e8");
        var has = __webpack_require__("07e3");
        var PROTOTYPE = "prototype";

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE];
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
            ? global[name]
            : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && has(exports, key)) continue;
            // export native or passed
            out = own ? target[key] : source[key];
            // prevent global pollution for namespaces
            exports[key] =
              IS_GLOBAL && typeof target[key] != "function"
                ? source[key]
                : // bind timers to global for call from export context
                IS_BIND && own
                ? ctx(out, global)
                : // wrap global constructors for prevent change them in library
                IS_WRAP && target[key] == out
                ? (function(C) {
                    var F = function(a, b, c) {
                      if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();
                          case 1:
                            return new C(a);
                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                      }
                      return C.apply(this, arguments);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                    // make static versions for prototype methods
                  })(out)
                : IS_PROTO && typeof out == "function"
                ? ctx(Function.call, out)
                : out;
            // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            if (IS_PROTO) {
              (exports.virtual || (exports.virtual = {}))[key] = out;
              // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
              if (type & $export.R && expProto && !expProto[key])
                hide(expProto, key, out);
            }
          }
        };
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },

      /***/ "6762": /***/ function(module, exports, __webpack_require__) {
        "use strict";

        // https://github.com/tc39/Array.prototype.includes
        var $export = __webpack_require__("5ca1");
        var $includes = __webpack_require__("c366")(true);

        $export($export.P, "Array", {
          includes: function includes(el /* , fromIndex = 0 */) {
            return $includes(
              this,
              el,
              arguments.length > 1 ? arguments[1] : undefined
            );
          }
        });

        __webpack_require__("9c6c")("includes");

        /***/
      },

      /***/ "6821": /***/ function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__("626a");
        var defined = __webpack_require__("be13");
        module.exports = function(it) {
          return IObject(defined(it));
        };

        /***/
      },

      /***/ "69a8": /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

      /***/ "6a99": /***/ function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__("d3f4");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (
            S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            typeof (fn = it.valueOf) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          if (
            !S &&
            typeof (fn = it.toString) == "function" &&
            !isObject((val = fn.call(it)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

      /***/ "6b4c": /***/ function(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

      /***/ "7726": /***/ function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != "undefined" && window.Math == Math
            ? window
            : typeof self != "undefined" && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function("return this")());
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

        /***/
      },

      /***/ "77f1": /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__("4588");
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },

      /***/ "794b": /***/ function(module, exports, __webpack_require__) {
        module.exports =
          !__webpack_require__("8e60") &&
          !__webpack_require__("294c")(function() {
            return (
              Object.defineProperty(__webpack_require__("1ec9")("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7
            );
          });

        /***/
      },

      /***/ "79aa": /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };

        /***/
      },

      /***/ "79e5": /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },

      /***/ "7c06": /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__7c06__;

        /***/
      },

      /***/ "7f20": /***/ function(module, exports, __webpack_require__) {
        var def = __webpack_require__("86cc").f;
        var has = __webpack_require__("69a8");
        var TAG = __webpack_require__("2b4c")("toStringTag");

        module.exports = function(it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG))
            def(it, TAG, { configurable: true, value: tag });
        };

        /***/
      },

      /***/ "8378": /***/ function(module, exports) {
        var core = (module.exports = { version: "2.6.5" });
        if (typeof __e == "number") __e = core; // eslint-disable-line no-undef

        /***/
      },

      /***/ "84f2": /***/ function(module, exports) {
        module.exports = {};

        /***/
      },

      /***/ "86cc": /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__("cb7c");
        var IE8_DOM_DEFINE = __webpack_require__("c69a");
        var toPrimitive = __webpack_require__("6a99");
        var dP = Object.defineProperty;

        exports.f = __webpack_require__("9e1e")
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes);
                } catch (e) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported!");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

      /***/ "8aae": /***/ function(module, exports, __webpack_require__) {
        __webpack_require__("32a6");
        module.exports = __webpack_require__("584a").Object.keys;

        /***/
      },

      /***/ "8b97": /***/ function(module, exports, __webpack_require__) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__("d3f4");
        var anObject = __webpack_require__("cb7c");
        var check = function(O, proto) {
          anObject(O);
          if (!isObject(proto) && proto !== null)
            throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
              ? (function(test, buggy, set) {
                  try {
                    set = __webpack_require__("9b43")(
                      Function.call,
                      __webpack_require__("11e9").f(
                        Object.prototype,
                        "__proto__"
                      ).set,
                      2
                    );
                    set(test, []);
                    buggy = !(test instanceof Array);
                  } catch (e) {
                    buggy = true;
                  }
                  return function setPrototypeOf(O, proto) {
                    check(O, proto);
                    if (buggy) O.__proto__ = proto;
                    else set(O, proto);
                    return O;
                  };
                })({}, false)
              : undefined),
          check: check
        };

        /***/
      },

      /***/ "8e60": /***/ function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__("294c")(function() {
          return (
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              }
            }).a != 7
          );
        });

        /***/
      },

      /***/ "9093": /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__("ce10");
        var hiddenKeys = __webpack_require__("e11e").concat(
          "length",
          "prototype"
        );

        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
          };

        /***/
      },

      /***/ "9b43": /***/ function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__("d8e8");
        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

      /***/ "9c6c": /***/ function(module, exports, __webpack_require__) {
        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__("2b4c")("unscopables");
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined)
          __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
        module.exports = function(key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };

        /***/
      },

      /***/ "9def": /***/ function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__("4588");
        var min = Math.min;
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },

      /***/ "9e1e": /***/ function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__("79e5")(function() {
          return (
            Object.defineProperty({}, "a", {
              get: function() {
                return 7;
              }
            }).a != 7
          );
        });

        /***/
      },

      /***/ a4bb: /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("8aae");

        /***/
      },

      /***/ aa77: /***/ function(module, exports, __webpack_require__) {
        var $export = __webpack_require__("5ca1");
        var defined = __webpack_require__("be13");
        var fails = __webpack_require__("79e5");
        var spaces = __webpack_require__("fdef");
        var space = "[" + spaces + "]";
        var non = "\u200b\u0085";
        var ltrim = RegExp("^" + space + space + "*");
        var rtrim = RegExp(space + space + "*$");

        var exporter = function(KEY, exec, ALIAS) {
          var exp = {};
          var FORCE = fails(function() {
            return !!spaces[KEY]() || non[KEY]() != non;
          });
          var fn = (exp[KEY] = FORCE ? exec(trim) : spaces[KEY]);
          if (ALIAS) exp[ALIAS] = fn;
          $export($export.P + $export.F * FORCE, "String", exp);
        };

        // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim
        var trim = (exporter.trim = function(string, TYPE) {
          string = String(defined(string));
          if (TYPE & 1) string = string.replace(ltrim, "");
          if (TYPE & 2) string = string.replace(rtrim, "");
          return string;
        });

        module.exports = exporter;

        /***/
      },

      /***/ aae3: /***/ function(module, exports, __webpack_require__) {
        // 7.2.8 IsRegExp(argument)
        var isObject = __webpack_require__("d3f4");
        var cof = __webpack_require__("2d95");
        var MATCH = __webpack_require__("2b4c")("match");
        module.exports = function(it) {
          var isRegExp;
          return (
            isObject(it) &&
            ((isRegExp = it[MATCH]) !== undefined
              ? !!isRegExp
              : cof(it) == "RegExp")
          );
        };

        /***/
      },

      /***/ ac6a: /***/ function(module, exports, __webpack_require__) {
        var $iterators = __webpack_require__("cadf");
        var getKeys = __webpack_require__("0d58");
        var redefine = __webpack_require__("2aba");
        var global = __webpack_require__("7726");
        var hide = __webpack_require__("32e9");
        var Iterators = __webpack_require__("84f2");
        var wks = __webpack_require__("2b4c");
        var ITERATOR = wks("iterator");
        var TO_STRING_TAG = wks("toStringTag");
        var ArrayValues = Iterators.Array;

        var DOMIterables = {
          CSSRuleList: true, // TODO: Not spec compliant, should be false.
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true, // TODO: Not spec compliant, should be false.
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true, // TODO: Not spec compliant, should be false.
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false
        };

        for (
          var collections = getKeys(DOMIterables), i = 0;
          i < collections.length;
          i++
        ) {
          var NAME = collections[i];
          var explicit = DOMIterables[NAME];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          var key;
          if (proto) {
            if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
            if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = ArrayValues;
            if (explicit)
              for (key in $iterators)
                if (!proto[key]) redefine(proto, key, $iterators[key], true);
          }
        }

        /***/
      },

      /***/ aebd: /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },

      /***/ b447: /***/ function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__("3a38");
        var min = Math.min;
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },

      /***/ b8e3: /***/ function(module, exports) {
        module.exports = true;

        /***/
      },

      /***/ be13: /***/ function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };

        /***/
      },

      /***/ c366: /***/ function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__("6821");
        var toLength = __webpack_require__("9def");
        var toAbsoluteIndex = __webpack_require__("77f1");
        module.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0;
                }
            return !IS_INCLUDES && -1;
          };
        };

        /***/
      },

      /***/ c3a1: /***/ function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__("e6f3");
        var enumBugKeys = __webpack_require__("1691");

        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys);
          };

        /***/
      },

      /***/ c5f6: /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var global = __webpack_require__("7726");
        var has = __webpack_require__("69a8");
        var cof = __webpack_require__("2d95");
        var inheritIfRequired = __webpack_require__("5dbc");
        var toPrimitive = __webpack_require__("6a99");
        var fails = __webpack_require__("79e5");
        var gOPN = __webpack_require__("9093").f;
        var gOPD = __webpack_require__("11e9").f;
        var dP = __webpack_require__("86cc").f;
        var $trim = __webpack_require__("aa77").trim;
        var NUMBER = "Number";
        var $Number = global[NUMBER];
        var Base = $Number;
        var proto = $Number.prototype;
        // Opera ~12 has broken Object#toString
        var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
        var TRIM = "trim" in String.prototype;

        // 7.1.3 ToNumber(argument)
        var toNumber = function(argument) {
          var it = toPrimitive(argument, false);
          if (typeof it == "string" && it.length > 2) {
            it = TRIM ? it.trim() : $trim(it, 3);
            var first = it.charCodeAt(0);
            var third, radix, maxCode;
            if (first === 43 || first === 45) {
              third = it.charCodeAt(2);
              if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
            } else if (first === 48) {
              switch (it.charCodeAt(1)) {
                case 66:
                case 98:
                  radix = 2;
                  maxCode = 49;
                  break; // fast equal /^0b[01]+$/i
                case 79:
                case 111:
                  radix = 8;
                  maxCode = 55;
                  break; // fast equal /^0o[0-7]+$/i
                default:
                  return +it;
              }
              for (
                var digits = it.slice(2), i = 0, l = digits.length, code;
                i < l;
                i++
              ) {
                code = digits.charCodeAt(i);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode) return NaN;
              }
              return parseInt(digits, radix);
            }
          }
          return +it;
        };

        if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
          $Number = function Number(value) {
            var it = arguments.length < 1 ? 0 : value;
            var that = this;
            return that instanceof $Number &&
              // check on 1..constructor(foo) case
              (BROKEN_COF
                ? fails(function() {
                    proto.valueOf.call(that);
                  })
                : cof(that) != NUMBER)
              ? inheritIfRequired(new Base(toNumber(it)), that, $Number)
              : toNumber(it);
          };
          for (
            var keys = __webpack_require__("9e1e")
                ? gOPN(Base)
                : // ES3:
                  (
                    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY," +
                    // ES6 (in case, if modules with ES6 Number statics required before):
                    "EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER," +
                    "MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger"
                  ).split(","),
              j = 0,
              key;
            keys.length > j;
            j++
          ) {
            if (has(Base, (key = keys[j])) && !has($Number, key)) {
              dP($Number, key, gOPD(Base, key));
            }
          }
          $Number.prototype = proto;
          proto.constructor = $Number;
          __webpack_require__("2aba")(global, NUMBER, $Number);
        }

        /***/
      },

      /***/ c69a: /***/ function(module, exports, __webpack_require__) {
        module.exports =
          !__webpack_require__("9e1e") &&
          !__webpack_require__("79e5")(function() {
            return (
              Object.defineProperty(__webpack_require__("230e")("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7
            );
          });

        /***/
      },

      /***/ ca5a: /***/ function(module, exports) {
        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
          return "Symbol(".concat(
            key === undefined ? "" : key,
            ")_",
            (++id + px).toString(36)
          );
        };

        /***/
      },

      /***/ cadf: /***/ function(module, exports, __webpack_require__) {
        "use strict";

        var addToUnscopables = __webpack_require__("9c6c");
        var step = __webpack_require__("d53b");
        var Iterators = __webpack_require__("84f2");
        var toIObject = __webpack_require__("6821");

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__("01f9")(
          Array,
          "Array",
          function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
          },
          function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
              this._t = undefined;
              return step(1);
            }
            if (kind == "keys") return step(0, index);
            if (kind == "values") return step(0, O[index]);
            return step(0, [index, O[index]]);
          },
          "values"
        );

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");

        /***/
      },

      /***/ cb7c: /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("d3f4");
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + " is not an object!");
          return it;
        };

        /***/
      },

      /***/ ce10: /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__("69a8");
        var toIObject = __webpack_require__("6821");
        var arrayIndexOf = __webpack_require__("c366")(false);
        var IE_PROTO = __webpack_require__("613b")("IE_PROTO");

        module.exports = function(object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

      /***/ ce7e: /***/ function(module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__("63b6");
        var core = __webpack_require__("584a");
        var fails = __webpack_require__("294c");
        module.exports = function(KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export(
            $export.S +
              $export.F *
                fails(function() {
                  fn(1);
                }),
            "Object",
            exp
          );
        };

        /***/
      },

      /***/ d2c8: /***/ function(module, exports, __webpack_require__) {
        // helper for String#{startsWith, endsWith, includes}
        var isRegExp = __webpack_require__("aae3");
        var defined = __webpack_require__("be13");

        module.exports = function(that, searchString, NAME) {
          if (isRegExp(searchString))
            throw TypeError("String#" + NAME + " doesn't accept regex!");
          return String(defined(that));
        };

        /***/
      },

      /***/ d3f4: /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

      /***/ d53b: /***/ function(module, exports) {
        module.exports = function(done, value) {
          return { value: value, done: !!done };
        };

        /***/
      },

      /***/ d864: /***/ function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__("79aa");
        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

      /***/ d8e8: /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != "function")
            throw TypeError(it + " is not a function!");
          return it;
        };

        /***/
      },

      /***/ d9f6: /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__("e4ae");
        var IE8_DOM_DEFINE = __webpack_require__("794b");
        var toPrimitive = __webpack_require__("1bc3");
        var dP = Object.defineProperty;

        exports.f = __webpack_require__("8e60")
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes);
                } catch (e) {
                  /* empty */
                }
              if ("get" in Attributes || "set" in Attributes)
                throw TypeError("Accessors not supported!");
              if ("value" in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

      /***/ dbdb: /***/ function(module, exports, __webpack_require__) {
        var core = __webpack_require__("584a");
        var global = __webpack_require__("e53d");
        var SHARED = "__core-js_shared__";
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: core.version,
          mode: __webpack_require__("b8e3") ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });

        /***/
      },

      /***/ e11e: /***/ function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );

        /***/
      },

      /***/ e4ae: /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("f772");
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + " is not an object!");
          return it;
        };

        /***/
      },

      /***/ e53d: /***/ function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != "undefined" && window.Math == Math
            ? window
            : typeof self != "undefined" && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function("return this")());
        if (typeof __g == "number") __g = global; // eslint-disable-line no-undef

        /***/
      },

      /***/ e6f3: /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__("07e3");
        var toIObject = __webpack_require__("36c3");
        var arrayIndexOf = __webpack_require__("5b4e")(false);
        var IE_PROTO = __webpack_require__("5559")("IE_PROTO");

        module.exports = function(object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

      /***/ f772: /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === "object"
            ? it !== null
            : typeof it === "function";
        };

        /***/
      },

      /***/ fa5b: /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("5537")(
          "native-function-to-string",
          Function.toString
        );

        /***/
      },

      /***/ fab2: /***/ function(module, exports, __webpack_require__) {
        var document = __webpack_require__("7726").document;
        module.exports = document && document.documentElement;

        /***/
      },

      /***/ fb15: /***/ function(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);

        // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
        // This file is imported into lib/wc client bundles.

        if (typeof window !== "undefined") {
          var i;
          if (
            (i = window.document.currentScript) &&
            (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))
          ) {
    __webpack_require__.p = i[1] // eslint-disable-line
          }
        }

        // Indicate to webpack that this file can be concatenated
        /* harmony default export */ var setPublicPath = null;

        // EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
        var es7_array_includes = __webpack_require__("6762");

        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
        var es6_string_includes = __webpack_require__("2fdb");

        // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
        var web_dom_iterable = __webpack_require__("ac6a");

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
        var keys = __webpack_require__("a4bb");
        var keys_default = /*#__PURE__*/ __webpack_require__.n(keys);

        // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
        var es6_number_constructor = __webpack_require__("c5f6");

        // EXTERNAL MODULE: external {"commonjs":"@mapbox/mapbox-gl-geocoder","commonjs2":"@mapbox/mapbox-gl-geocoder","amd":"@mapbox/mapbox-gl-geocoder","root":"mapbox-gl-geocoder"}
        var mapbox_gl_geocoder_root_mapbox_gl_geocoder_ = __webpack_require__(
          "7c06"
        );
        var mapbox_gl_geocoder_root_mapbox_gl_geocoder_default = /*#__PURE__*/ __webpack_require__.n(
          mapbox_gl_geocoder_root_mapbox_gl_geocoder_
        );

        // EXTERNAL MODULE: external {"commonjs":"vue-mapbox","commonjs2":"vue-mapbox","amd":"vue-mapbox","root":"vue-mapbox"}
        var external_commonjs_vue_mapbox_commonjs2_vue_mapbox_amd_vue_mapbox_root_vue_mapbox_ = __webpack_require__(
          "35be"
        );

        // CONCATENATED MODULE: ./src/GeocoderControl.js

        var geocoderEvents = {
          clear: "clear",
          loading: "loading",
          results: "results",
          result: "result",
          error: "error"
        };
        /* harmony default export */ var GeocoderControl = {
          name: "GeocoderControl",
          mixins: [
            external_commonjs_vue_mapbox_commonjs2_vue_mapbox_amd_vue_mapbox_root_vue_mapbox_[
              "$helpers"
            ].asControl
          ],
          inject: ["mapbox", "map"],
          props: {
            // Mapbox-geocoder options
            accessToken: {
              type: String,
              required: true
            },
            zoom: {
              type: Number,
              default: 16
            },
            flyTo: {
              type: Boolean,
              default: true
            },
            placeholder: {
              type: String,
              default: "Search"
            },
            proximity: {
              type: Object,
              default: null
            },
            trackProximity: {
              type: Boolean,
              default: false
            },
            bbox: {
              type: Array,
              default: null
            },
            types: {
              type: String,
              default: null
            },
            country: {
              type: String,
              default: null
            },
            minLength: {
              type: Number,
              default: 2
            },
            limit: {
              type: Number,
              default: 5
            },
            language: {
              type: String,
              default: null
            },
            filter: {
              type: Function,
              default: null
            },
            localGeocoder: {
              type: Function,
              default: null
            },
            // Component options
            input: {
              type: String,
              default: null
            }
          },
          data: function data() {
            return {
              control: null,
              initial: true
            };
          },
          watch: {
            input: {
              handler: function handler(next, prev) {
                if (this.control && next !== prev) {
                  this.control.setInput(next);
                }
              },
              immediate: true
            },
            proximity: function proximity(next, prev) {
              if (this.control && next !== prev) {
                this.control.setProximity(next);
              }
            }
          },
          created: function created() {
            if (this.accessToken && !this.mapbox.accessToken) {
              this.mapbox.accessToken = this.accessToken;
            }

            this.control = new mapbox_gl_geocoder_root_mapbox_gl_geocoder_default.a(
              this.$props
            );
            this.control.on("results", this.$_updateInput);
            this.$_deferredMount();
          },
          beforeDestroy: function beforeDestroy() {
            this.control.off("results", this.$_updateInput);
          },
          methods: {
            $_deferredMount: function $_deferredMount() {
              this.map.addControl(this.control);

              if (this.input) {
                this.control.setInput(this.input);
              }

              this.$_emitEvent("added", {
                geocoder: this.control
              });
              this.$_bindSelfEvents(keys_default()(geocoderEvents));
              this.initial = false;
            },
            $_bindSelfEvents: function $_bindSelfEvents(events) {
              var _this = this;

              var vm = this;

              keys_default()(this.$listeners).forEach(function(eventName) {
                if (events.includes(eventName)) {
                  _this.control.on(eventName, function(eventData) {
                    return vm.$_emitSelfEvent(
                      {
                        type: eventName
                      },
                      {
                        geocoderData: eventData
                      }
                    );
                  });
                }
              });
            },
            $_updateInput: function $_updateInput(results) {
              if (!this.initial) {
                var input = results.query ? results.query.join("") : "";
                this.$emit("update:input", input);
              }
            },
            query: function query(_query) {
              if (this.control) {
                this.$emit("update:input", _query);
                return this.contol.query(_query);
              }

              return null;
            }
          }
        };
        // CONCATENATED MODULE: ./src/main.js

        /* harmony default export */ var main = GeocoderControl;
        // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

        /* harmony default export */ var entry_lib = (__webpack_exports__[
          "default"
        ] = main);

        /***/
      },

      /***/ fdef: /***/ function(module, exports) {
        module.exports =
          "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
          "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

        /***/
      }

      /******/
    }
  )["default"];
});
