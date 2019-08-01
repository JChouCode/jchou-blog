"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.reduceHooks = reduceHooks;
exports.mapHooks = mapHooks;
exports.getHooks = getHooks;
exports.getFullRouteData = getFullRouteData;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _swimmer = require("swimmer");

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = (0, _slicedToArray2["default"])(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';

  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options["double"],
      _double = _options$double === void 0 ? true : _options$double;

  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (_double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (process.env.REACT_STATIC_BASE_PATH) {
    routePath = routePath.replace(new RegExp("^\\/?".concat(process.env.REACT_STATIC_BASE_PATH, "\\/")), '');
  }

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && (0, _typeof2["default"])(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function reduceHooks(hooks) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      sync = _ref.sync;

  // These returns a runner that takes a value (and options) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained
  // If synchronous, things are simple
  if (sync) {
    return function (value, options) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, options);

        if (next instanceof Promise) {
          throw new Error('Expected hook to return a value, but received promise instead. A plugin is attempting to use a sync plugin with an async function!');
        }

        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  } // We create a map of hook handlers that point to the next hook
  // in line and reduce the value throughout (or return it if it's done)


  return function (startValue, options) {
    var hookList = hooks.map(function (hook, index) {
      return (
        /*#__PURE__*/
        function () {
          var _ref2 = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(lastValue) {
            var nextValue;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return hook(lastValue, options);

                  case 2:
                    nextValue = _context.sent;
                    nextValue = typeof nextValue !== 'undefined' ? nextValue : lastValue;

                    if (!hookList[index + 1]) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return", hookList[index + 1](nextValue));

                  case 6:
                    return _context.abrupt("return", nextValue);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }()
      );
    });
    return hookList.length ? hookList[0](startValue) : startValue;
  };
}

function mapHooks(hooks) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      sync = _ref3.sync;

  // Returns a function that takes state and returns
  // a flat array of values mapped from each hook
  if (sync) {
    return function (state) {
      var results = hooks.map(function (hook) {
        return hook(state);
      });
      return results.filter(function (d) {
        return typeof d !== 'undefined';
      });
    };
  }

  return function (state) {
    var results = [];
    var hookList = hooks.map(function (hook, index) {
      return (
        /*#__PURE__*/
        (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee2() {
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return hook(state);

                case 2:
                  results[index] = _context2.sent;

                  if (!hookList[index + 1]) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return", hookList[index + 1]());

                case 5:
                  return _context2.abrupt("return", results.filter(function (d) {
                    return typeof d !== 'undefined';
                  }));

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))
      );
    });
    return hookList.length ? hookList[0]() : [];
  };
}

function getHooks(plugins, hook) {
  if (!hook) {
    throw new Error('A hook ID is required!');
  } // The flat hooks


  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function getFullRouteData(routeInfo) {
  return (0, _objectSpread2["default"])({}, routeInfo.sharedData ? routeInfo.sharedData : {}, routeInfo.data);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJFR0VYX1RPX0NVVF9UT19ST09UIiwiUkVHRVhfVE9fUkVNT1ZFX0xFQURJTkdfU0xBU0giLCJSRUdFWF9UT19SRU1PVkVfVFJBSUxJTkdfU0xBU0giLCJSRUdFWF9UT19SRU1PVkVfRE9VQkxFX1NMQVNIIiwiY3V0UGF0aFRvUm9vdCIsInN0cmluZyIsInJlcGxhY2UiLCJ0cmltTGVhZGluZ1NsYXNoZXMiLCJ0cmltVHJhaWxpbmdTbGFzaGVzIiwidHJpbURvdWJsZVNsYXNoZXMiLCJpc0Fic29sdXRlVXJsIiwic3BsaXQiLCJzY2hlbWUiLCJwYXRoIiwiam9pbiIsImNsZWFuU2xhc2hlcyIsIm9wdGlvbnMiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJkb3VibGUiLCJjbGVhbmVkU3RyaW5nIiwicGF0aEpvaW4iLCJwYXRocyIsIm5ld1BhdGgiLCJtYXAiLCJpbmNsdWRlcyIsInN1YnN0cmluZyIsImluZGV4T2YiLCJnZXRSb3V0ZVBhdGgiLCJyb3V0ZVBhdGgiLCJkb2N1bWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19CQVNFX1BBVEgiLCJSZWdFeHAiLCJ1bndyYXBBcnJheSIsImFyZyIsImRlZmF1bHRWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImlzT2JqZWN0IiwiYSIsImRlcHJlY2F0ZSIsImZyb20iLCJ0byIsImNvbnNvbGUiLCJ3YXJuIiwicmVtb3ZhbCIsInVybCIsInRlc3QiLCJtYWtlUGF0aEFic29sdXRlIiwicmVkdWNlSG9va3MiLCJob29rcyIsInN5bmMiLCJ2YWx1ZSIsInJlZHVjZSIsInByZXYiLCJob29rIiwibmV4dCIsIlByb21pc2UiLCJFcnJvciIsInN0YXJ0VmFsdWUiLCJob29rTGlzdCIsImluZGV4IiwibGFzdFZhbHVlIiwibmV4dFZhbHVlIiwibGVuZ3RoIiwibWFwSG9va3MiLCJzdGF0ZSIsInJlc3VsdHMiLCJmaWx0ZXIiLCJkIiwiZ2V0SG9va3MiLCJwbHVnaW5zIiwiYWRkVG9Ib29rcyIsInBsdWdpbiIsInB1c2giLCJmb3JFYWNoIiwiQm9vbGVhbiIsImdldEZ1bGxSb3V0ZURhdGEiLCJyb3V0ZUluZm8iLCJzaGFyZWREYXRhIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLGNBQTdCO0FBQ0EsSUFBTUMsNkJBQTZCLEdBQUcsVUFBdEM7QUFDQSxJQUFNQyw4QkFBOEIsR0FBRyxVQUF2QztBQUNBLElBQU1DLDRCQUE0QixHQUFHLFNBQXJDOztBQUVPLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFDQyxNQUFELHVFQUFVLEVBQVY7QUFBQSxTQUMzQkEsTUFBTSxDQUFDQyxPQUFQLENBQWVOLG9CQUFmLEVBQXFDLElBQXJDLENBRDJCO0FBQUEsQ0FBdEI7Ozs7QUFHQSxJQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFBQ0YsTUFBRCx1RUFBVSxFQUFWO0FBQUEsU0FDaENBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCw2QkFBZixFQUE4QyxFQUE5QyxDQURnQztBQUFBLENBQTNCOzs7O0FBR0EsSUFBTU8sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLE1BQUNILE1BQUQsdUVBQVUsRUFBVjtBQUFBLFNBQ2pDQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUosOEJBQWYsRUFBK0MsRUFBL0MsQ0FEaUM7QUFBQSxDQUE1Qjs7OztBQUdBLElBQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBaUI7QUFBQSxNQUFoQkosTUFBZ0IsdUVBQVAsRUFBTzs7QUFDaEQsTUFBSUssYUFBYSxDQUFDTCxNQUFELENBQWpCLEVBQTJCO0FBQUEsd0JBQ1FBLE1BQU0sQ0FBQ00sS0FBUCxDQUFhLEtBQWIsQ0FEUjtBQUFB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LEVBQUFBLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkgsVUFBaEIsRUFsQnNDLENBb0J0Qzs7QUFDQSxTQUFPdEIsS0FBSyxDQUFDa0IsTUFBTixDQUFhUSxPQUFiLENBQVA7QUFDRDs7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQkMsU0FBMUIsRUFBcUM7QUFDMUMsNENBQ01BLFNBQVMsQ0FBQ0MsVUFBVixHQUF1QkQsU0FBUyxDQUFDQyxVQUFqQyxHQUE4QyxFQURwRCxFQUVLRCxTQUFTLENBQUNFLElBRmY7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHBvb2xBbGwsIGNyZWF0ZVBvb2wgfSBmcm9tICdzd2ltbWVyJ1xuXG5jb25zdCBSRUdFWF9UT19DVVRfVE9fUk9PVCA9IC8oXFwuLis/KVxcLy4qL2dcbmNvbnN0IFJFR0VYX1RPX1JFTU9WRV9MRUFESU5HX1NMQVNIID0gL15cXC97MSx9L2dcbmNvbnN0IFJFR0VYX1RPX1JFTU9WRV9UUkFJTElOR19TTEFTSCA9IC9cXC97MSx9JC9nXG5jb25zdCBSRUdFWF9UT19SRU1PVkVfRE9VQkxFX1NMQVNIID0gL1xcL3syLH0vZ1xuXG5leHBvcnQgY29uc3QgY3V0UGF0aFRvUm9vdCA9IChzdHJpbmcgPSAnJykgPT5cbiAgc3RyaW5nLnJlcGxhY2UoUkVHRVhfVE9fQ1VUX1RPX1JPT1QsICckMScpXG5cbmV4cG9ydCBjb25zdCB0cmltTGVhZGluZ1NsYXNoZXMgPSAoc3RyaW5nID0gJycpID0+XG4gIHN0cmluZy5yZXBsYWNlKFJFR0VYX1RPX1JFTU9WRV9MRUFESU5HX1NMQVNILCAnJylcblxuZXhwb3J0IGNvbnN0IHRyaW1UcmFpbGluZ1NsYXNoZXMgPSAoc3RyaW5nID0gJycpID0+XG4gIHN0cmluZy5yZXBsYWNlKFJFR0VYX1RPX1JFTU9WRV9UUkFJTElOR19TTEFTSCwgJycpXG5cbmV4cG9ydCBjb25zdCB0cmltRG91YmxlU2xhc2hlcyA9IChzdHJpbmcgPSAnJykgPT4ge1xuICBpZiAoaXNBYnNvbHV0ZVVybChzdHJpbmcpKSB7XG4gICAgY29uc3QgW3NjaGVtZSA9ICcnLCBwYXRoID0gJyddID0gc3RyaW5nLnNwbGl0KCc6Ly8nKVxuXG4gICAgcmV0dXJuIFtzY2hlbWUsIHBhdGgucmVwbGFjZShSRUdFWF9UT19SRU1PVkVfRE9VQkxFX1NMQVNILCAnLycpXS5qb2luKCc6Ly8nKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKFJFR0VYX1RPX1JFTU9WRV9ET1VCTEVfU0xBU0gsICcvJylcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFuU2xhc2hlcyA9IChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAoIXN0cmluZykgcmV0dXJuICcnXG5cbiAgY29uc3QgeyBsZWFkaW5nID0gdHJ1ZSwgdHJhaWxpbmcgPSB0cnVlLCBkb3VibGUgPSB0cnVlIH0gPSBvcHRpb25zXG4gIGxldCBjbGVhbmVkU3RyaW5nID0gc3RyaW5nXG5cbiAgaWYgKGxlYWRpbmcpIHtcbiAgICBjbGVhbmVkU3RyaW5nID0gdHJpbUxlYWRpbmdTbGFzaGVzKGNsZWFuZWRTdHJpbmcpXG4gIH1cblxuICBpZiAodHJhaWxpbmcpIHtcbiAgICBjbGVhbmVkU3RyaW5nID0gdHJpbVRyYWlsaW5nU2xhc2hlcyhjbGVhbmVkU3RyaW5nKVxuICB9XG5cbiAgaWYgKGRvdWJsZSkge1xuICAgIGNsZWFuZWRTdHJpbmcgPSB0cmltRG91YmxlU2xhc2hlcyhjbGVhbmVkU3RyaW5nKVxuICB9XG5cbiAgcmV0dXJuIGNsZWFuZWRTdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhKb2luKC4uLnBhdGhzKSB7XG4gIGxldCBuZXdQYXRoID0gcGF0aHMubWFwKGNsZWFuU2xhc2hlcykuam9pbignLycpXG4gIGlmICghbmV3UGF0aCB8fCBuZXdQYXRoID09PSAnLycpIHtcbiAgICByZXR1cm4gJy8nXG4gIH1cblxuICBuZXdQYXRoID0gY2xlYW5TbGFzaGVzKG5ld1BhdGgpXG4gIGlmIChuZXdQYXRoLmluY2x1ZGVzKCc/JykpIHtcbiAgICBuZXdQYXRoID0gbmV3UGF0aC5zdWJzdHJpbmcoMCwgbmV3UGF0aC5pbmRleE9mKCc/JykpXG4gIH1cbiAgcmV0dXJuIG5ld1BhdGhcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBmb3IgZXh0cmFjdGluZyBhIHJvdXRlUGF0aCBmcm9tIGEgcGF0aCBvciBzdHJpbmdcbi8vIFJvdXRlUGF0aHMgZG8gbm90IGhhdmUgcXVlcnkgcGFyYW1zLCBiYXNlUGF0aHMsIGFuZCBzaG91bGRcbi8vIHJlc2VtYmxlIHRoZSBzYW1lIHN0cmluZyBhcyBwYXNzZWQgaW4gdGhlIHN0YXRpYy5jb25maWcuanMgcm91dGVzXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVQYXRoKHJvdXRlUGF0aCkge1xuICAvLyBEZXRlY3QgZmFsc2V5IHBhdGhzIGFuZCB0aGUgcm9vdCBwYXRoXG4gIGlmICghcm91dGVQYXRoIHx8IHJvdXRlUGF0aCA9PT0gJy8nKSB7XG4gICAgcmV0dXJuICcvJ1xuICB9XG5cbiAgLy8gUmVtb3ZlIG9yaWdpbiwgaGFzaGVzLCBhbmQgcXVlcnkgcGFyYW1zXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcm91dGVQYXRoID0gcm91dGVQYXRoLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLm9yaWdpbiwgJycpXG4gICAgcm91dGVQYXRoID0gcm91dGVQYXRoLnJlcGxhY2UoLyMuKi8sICcnKVxuICAgIHJvdXRlUGF0aCA9IHJvdXRlUGF0aC5yZXBsYWNlKC9cXD8uKi8sICcnKVxuICB9XG5cbiAgLy8gQmUgc3VyZSB0byByZW1vdmUgdGhlIGJhc2UgcGF0aFxuICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0JBU0VfUEFUSCkge1xuICAgIHJvdXRlUGF0aCA9IHJvdXRlUGF0aC5yZXBsYWNlKFxuICAgICAgbmV3IFJlZ0V4cChgXlxcXFwvPyR7cHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0JBU0VfUEFUSH1cXFxcL2ApLFxuICAgICAgJydcbiAgICApXG4gIH1cbiAgcm91dGVQYXRoID0gcm91dGVQYXRoIHx8ICcvJ1xuICByZXR1cm4gcGF0aEpvaW4ocm91dGVQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW53cmFwQXJyYXkoYXJnLCBkZWZhdWx0VmFsdWUpIHtcbiAgYXJnID0gQXJyYXkuaXNBcnJheShhcmcpID8gYXJnWzBdIDogYXJnXG4gIGlmICghYXJnICYmIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgfVxuICByZXR1cm4gYXJnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChhKSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShhKSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgYSAhPT0gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlKGZyb20sIHRvKSB7XG4gIGNvbnNvbGUud2FybihcbiAgICBgUmVhY3QtU3RhdGljIGRlcHJlY2F0aW9uIG5vdGljZTogJHtmcm9tfSB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgJHt0b30gaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS5gXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92YWwoZnJvbSkge1xuICBjb25zb2xlLndhcm4oXG4gICAgYFJlYWN0LVN0YXRpYyByZW1vdmFsIG5vdGljZTogJHtmcm9tfSBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGluIHRoaXMgdmVyc2lvbiBvZiBSZWFjdC1TdGF0aWMuIFBsZWFzZSByZWZlciB0byB0aGUgQ0hBTkdFTE9HIGZvciBkZXRhaWxzLmBcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVybCh1cmwpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gL15bYS16XVthLXowLTkrLi1dKjovLnRlc3QodXJsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhdGhBYnNvbHV0ZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gJy8nXG4gIH1cblxuICBpZiAoaXNBYnNvbHV0ZVVybChwYXRoKSkge1xuICAgIHJldHVybiBwYXRoXG4gIH1cblxuICByZXR1cm4gYC8ke3RyaW1MZWFkaW5nU2xhc2hlcyhwYXRoKX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VIb29rcyhob29rcywgeyBzeW5jIH0gPSB7fSkge1xuICAvLyBUaGVzZSByZXR1cm5zIGEgcnVubmVyIHRoYXQgdGFrZXMgYSB2YWx1ZSAoYW5kIG9wdGlvbnMpIGFuZFxuICAvLyByZWR1Y2VzIHRoZSB2YWx1ZSB0aHJvdWdoIGVhY2ggaG9vaywgcmV0dXJuaW5nIHRoZVxuICAvLyBmaW5hbCB2YWx1ZVxuICAvLyBjb21wYXJlIGlzIGEgZnVuY3Rpb24gd2hpY2ggaXMgdXNlZCB0byBjb21wYXJlXG4gIC8vIHRoZSBwcmV2IGFuZCBuZXh0IHZhbHVlIGFuZCBkZWNpZGUgd2hpY2ggdG8gdXNlLlxuICAvLyBCeSBkZWZhdWx0LCBpZiB1bmRlZmluZWQgaXMgcmV0dXJuZWQgZnJvbSBhIHJlZHVjZXIsIHRoZSBwcmV2IHZhbHVlXG4gIC8vIGlzIHJldGFpbmVkXG5cbiAgLy8gSWYgc3luY2hyb25vdXMsIHRoaW5ncyBhcmUgc2ltcGxlXG4gIGlmIChzeW5jKSB7XG4gICAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT5cbiAgICAgIGhvb2tzLnJlZHVjZSgocHJldiwgaG9vaykgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gaG9vayhwcmV2LCBvcHRpb25zKVxuICAgICAgICBpZiAobmV4dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnRXhwZWN0ZWQgaG9vayB0byByZXR1cm4gYSB2YWx1ZSwgYnV0IHJlY2VpdmVkIHByb21pc2UgaW5zdGVhZC4gQSBwbHVnaW4gaXMgYXR0ZW1wdGluZyB0byB1c2UgYSBzeW5jIHBsdWdpbiB3aXRoIGFuIGFzeW5jIGZ1bmN0aW9uISdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXh0ICE9PSAndW5kZWZpbmVkJyA/IG5leHQgOiBwcmV2XG4gICAgICB9LCB2YWx1ZSlcbiAgfVxuXG4gIC8vIFdlIGNyZWF0ZSBhIG1hcCBvZiBob29rIGhhbmRsZXJzIHRoYXQgcG9pbnQgdG8gdGhlIG5leHQgaG9va1xuICAvLyBpbiBsaW5lIGFuZCByZWR1Y2UgdGhlIHZhbHVlIHRocm91Z2hvdXQgKG9yIHJldHVybiBpdCBpZiBpdCdzIGRvbmUpXG4gIHJldHVybiAoc3RhcnRWYWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGhvb2tMaXN0ID0gaG9va3MubWFwKChob29rLCBpbmRleCkgPT4gYXN5bmMgbGFzdFZhbHVlID0+IHtcbiAgICAgIGxldCBuZXh0VmFsdWUgPSBhd2FpdCBob29rKGxhc3RWYWx1ZSwgb3B0aW9ucylcbiAgICAgIG5leHRWYWx1ZSA9IHR5cGVvZiBuZXh0VmFsdWUgIT09ICd1bmRlZmluZWQnID8gbmV4dFZhbHVlIDogbGFzdFZhbHVlXG4gICAgICBpZiAoaG9va0xpc3RbaW5kZXggKyAxXSkge1xuICAgICAgICByZXR1cm4gaG9va0xpc3RbaW5kZXggKyAxXShuZXh0VmFsdWUpXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dFZhbHVlXG4gICAgfSlcbiAgICByZXR1cm4gaG9va0xpc3QubGVuZ3RoID8gaG9va0xpc3RbMF0oc3RhcnRWYWx1ZSkgOiBzdGFydFZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEhvb2tzKGhvb2tzLCB7IHN5bmMgfSA9IHt9KSB7XG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHN0YXRlIGFuZCByZXR1cm5zXG4gIC8vIGEgZmxhdCBhcnJheSBvZiB2YWx1ZXMgbWFwcGVkIGZyb20gZWFjaCBob29rXG4gIGlmIChzeW5jKSB7XG4gICAgcmV0dXJuIHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBob29rcy5tYXAoaG9vayA9PiBob29rKHN0YXRlKSlcbiAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcihkID0+IHR5cGVvZiBkICE9PSAndW5kZWZpbmVkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGUgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuICAgIGNvbnN0IGhvb2tMaXN0ID0gaG9va3MubWFwKChob29rLCBpbmRleCkgPT4gYXN5bmMgKCkgPT4ge1xuICAgICAgcmVzdWx0c1tpbmRleF0gPSBhd2FpdCBob29rKHN0YXRlKVxuXG4gICAgICBpZiAoaG9va0xpc3RbaW5kZXggKyAxXSkge1xuICAgICAgICByZXR1cm4gaG9va0xpc3RbaW5kZXggKyAxXSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcihkID0+IHR5cGVvZiBkICE9PSAndW5kZWZpbmVkJylcbiAgICB9KVxuICAgIHJldHVybiBob29rTGlzdC5sZW5ndGggPyBob29rTGlzdFswXSgpIDogW11cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG9va3MocGx1Z2lucywgaG9vaykge1xuICBpZiAoIWhvb2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgaG9vayBJRCBpcyByZXF1aXJlZCEnKVxuICB9XG4gIC8vIFRoZSBmbGF0IGhvb2tzXG4gIGNvbnN0IGhvb2tzID0gW11cblxuICAvLyBBZGRzIGEgcGx1Z2luIGhvb2sgdG8gdGhlIGhvb2sgbGlzdFxuICBjb25zdCBhZGRUb0hvb2tzID0gcGx1Z2luID0+IHtcbiAgICAvLyBBZGQgdGhlIGhvb2tcbiAgICBob29rcy5wdXNoKHBsdWdpbi5ob29rc1tob29rXSlcblxuICAgIC8vIFJlY3Vyc2UgaW50byBzdWIgcGx1Z2lucyBpZiBuZWVkcyBiZVxuICAgIGlmIChwbHVnaW4ucGx1Z2lucykge1xuICAgICAgcGx1Z2luLnBsdWdpbnMuZm9yRWFjaChhZGRUb0hvb2tzKVxuICAgIH1cbiAgfVxuICAvLyBTdGFydCB3aXRoIHRoZSBjb25maWcgcGx1Z2luc1xuICBwbHVnaW5zLmZvckVhY2goYWRkVG9Ib29rcylcblxuICAvLyBGaWx0ZXIgb3V0IGZhbHNleSBlbnRyaWVzXG4gIHJldHVybiBob29rcy5maWx0ZXIoQm9vbGVhbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxSb3V0ZURhdGEocm91dGVJbmZvKSB7XG4gIHJldHVybiB7XG4gICAgLi4uKHJvdXRlSW5mby5zaGFyZWREYXRhID8gcm91dGVJbmZvLnNoYXJlZERhdGEgOiB7fSksXG4gICAgLi4ucm91dGVJbmZvLmRhdGEsXG4gIH1cbn1cbiJdfQ==