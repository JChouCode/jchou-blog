"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ChalkColor: true,
  findAvailablePort: true,
  time: true,
  timeEnd: true,
  debounce: true,
  escapeRegExp: true,
  progress: true
};
exports.time = time;
exports.timeEnd = timeEnd;
exports.debounce = debounce;
exports.escapeRegExp = escapeRegExp;
Object.defineProperty(exports, "progress", {
  enumerable: true,
  get: function get() {
    return _progress["default"];
  }
});
exports.findAvailablePort = exports.ChalkColor = void 0;

var _portfinder = _interopRequireDefault(require("portfinder"));

var _perf_hooks = require("perf_hooks");

var _utils = require("../browser/utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _progress = _interopRequireDefault(require("./progress"));

//
// Export all shared utils
var ChalkColor = {
  yarn: '#2c8ebb',
  npm: '#cb3837'
};
exports.ChalkColor = ChalkColor;

var findAvailablePort = function findAvailablePort(start) {
  return _portfinder["default"].getPortPromise({
    port: start,
    stopPort: start + 1000
  });
};

exports.findAvailablePort = findAvailablePort;
var times = {};

function time(message) {
  times[message] = _perf_hooks.performance.now() / 1000;
}

function timeEnd(message) {
  if (times[message]) {
    var seconds = (_perf_hooks.performance.now() / 1000 - times[message]) * 10;
    times[message] = null;

    if (seconds < 0.1) {
      console.log("".concat(message));
      return;
    }

    if (seconds < 1) {
      seconds = Math.round(seconds * 10) / 10;
    } else {
      seconds = Math.round(seconds) / 10;
    }

    console.log("".concat(message, " (").concat(seconds, "s)"));
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(void 0, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(void 0, args);
  };
}

var escapeReg = /[\\^$.*+?()[\]{}|]/g;

function escapeRegExp(str) {
  return str.replace(escapeReg, '\\$&');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFsa0NvbG9yIiwieWFybiIsIm5wbSIsImZpbmRBdmFpbGFibGVQb3J0Iiwic3RhcnQiLCJQb3J0RmluZGVyIiwiZ2V0UG9ydFByb21pc2UiLCJwb3J0Iiwic3RvcFBvcnQiLCJ0aW1lcyIsInRpbWUiLCJtZXNzYWdlIiwicGVyZm9ybWFuY2UiLCJub3ciLCJ0aW1lRW5kIiwic2Vjb25kcyIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicm91bmQiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImFyZ3MiLCJsYXRlciIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXNjYXBlUmVnIiwiZXNjYXBlUmVnRXhwIiwic3RyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUxBO0FBRUE7QUFJTyxJQUFNQSxVQUFVLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRSxTQURrQjtBQUV4QkMsRUFBQUEsR0FBRyxFQUFFO0FBRm1CLENBQW5COzs7QUFLQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7QUFBQSxTQUNwQ0MsdUJBQVdDLGNBQVgsQ0FBMEI7QUFDeEJDLElBQUFBLElBQUksRUFBRUgsS0FEa0I7QUFFeEJJLElBQUFBLFFBQVEsRUFBRUosS0FBSyxHQUFHO0FBRk0sR0FBMUIsQ0FEb0M7QUFBQSxDQUEvQjs7O0FBTVAsSUFBTUssS0FBSyxHQUFHLEVBQWQ7O0FBQ08sU0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQzVCRixFQUFBQSxLQUFLLENBQUNFLE9BQUQsQ0FBTCxHQUFpQkMsd0JBQVlDLEdBQVosS0FBb0IsSUFBckM7QUFDRDs7QUFDTSxTQUFTQyxPQUFULENBQWlCSCxPQUFqQixFQUEwQjtBQUMvQixNQUFJRixLQUFLLENBQUNFLE9BQUQsQ0FBVCxFQUFvQjtBQUNsQixRQUFJSSxPQUFPLEdBQUcsQ0FBQ0gsd0JBQVlDLEdBQVosS0FBb0IsSUFBcEIsR0FBMkJKLEtBQUssQ0FBQ0UsT0FBRCxDQUFqQyxJQUE4QyxFQUE1RDtBQUNBRixJQUFBQSxLQUFLLENBQUNFLE9BQUQsQ0FBTCxHQUFpQixJQUFqQjs7QUFFQSxRQUFJSSxPQUFPLEdBQUcsR0FBZCxFQUFtQjtBQUNqQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVOLE9BQWY7QUFDQTtBQUNEOztBQUVELFFBQUlJLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2ZBLE1BQUFBLE9BQU8sR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLE9BQU8sR0FBRyxFQUFyQixJQUEyQixFQUFyQztBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxPQUFPLEdBQUdHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixPQUFYLElBQXNCLEVBQWhDO0FBQ0Q7O0FBQ0RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlTixPQUFmLGVBQTJCSSxPQUEzQjtBQUNEO0FBQ0Y7O0FBRU0sU0FBU0ssUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLElBQXhCLEVBQThCQyxTQUE5QixFQUF5QztBQUM5QyxNQUFJQyxPQUFKO0FBQ0EsU0FBTyxZQUFhO0FBQUEsc0NBQVRDLElBQVM7QUFBVEEsTUFBQUEsSUFBUztBQUFBOztBQUNsQixRQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCRixNQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNBLFVBQUksQ0FBQ0QsU0FBTCxFQUFnQkYsSUFBSSxNQUFKLFNBQVFJLElBQVI7QUFDakIsS0FIRDs7QUFJQSxRQUFNRSxPQUFPLEdBQUdKLFNBQVMsSUFBSSxDQUFDQyxPQUE5QjtBQUNBSSxJQUFBQSxZQUFZLENBQUNKLE9BQUQsQ0FBWjtBQUNBQSxJQUFBQSxPQUFPLEdBQUdLLFVBQVUsQ0FBQ0gsS0FBRCxFQUFRSixJQUFSLENBQXBCO0FBQ0EsUUFBSUssT0FBSixFQUFhTixJQUFJLE1BQUosU0FBUUksSUFBUjtBQUNkLEdBVEQ7QUFVRDs7QUFFRCxJQUFNSyxTQUFTLEdBQUcscUJBQWxCOztBQUNPLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixDQUFZSCxTQUFaLEVBQXVCLE1BQXZCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3J0RmluZGVyIGZyb20gJ3BvcnRmaW5kZXInXG5pbXBvcnQgeyBwZXJmb3JtYW5jZSB9IGZyb20gJ3BlcmZfaG9va3MnXG4vL1xuXG4vLyBFeHBvcnQgYWxsIHNoYXJlZCB1dGlsc1xuZXhwb3J0ICogZnJvbSAnLi4vYnJvd3Nlci91dGlscydcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9ncmVzcyB9IGZyb20gJy4vcHJvZ3Jlc3MnXG5leHBvcnQgY29uc3QgQ2hhbGtDb2xvciA9IHtcbiAgeWFybjogJyMyYzhlYmInLFxuICBucG06ICcjY2IzODM3Jyxcbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRBdmFpbGFibGVQb3J0ID0gc3RhcnQgPT5cbiAgUG9ydEZpbmRlci5nZXRQb3J0UHJvbWlzZSh7XG4gICAgcG9ydDogc3RhcnQsXG4gICAgc3RvcFBvcnQ6IHN0YXJ0ICsgMTAwMCxcbiAgfSlcblxuY29uc3QgdGltZXMgPSB7fVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWUobWVzc2FnZSkge1xuICB0aW1lc1ttZXNzYWdlXSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMFxufVxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVFbmQobWVzc2FnZSkge1xuICBpZiAodGltZXNbbWVzc2FnZV0pIHtcbiAgICBsZXQgc2Vjb25kcyA9IChwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAgLSB0aW1lc1ttZXNzYWdlXSkgKiAxMFxuICAgIHRpbWVzW21lc3NhZ2VdID0gbnVsbFxuXG4gICAgaWYgKHNlY29uZHMgPCAwLjEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke21lc3NhZ2V9YClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZWNvbmRzIDwgMSkge1xuICAgICAgc2Vjb25kcyA9IE1hdGgucm91bmQoc2Vjb25kcyAqIDEwKSAvIDEwXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY29uZHMgPSBNYXRoLnJvdW5kKHNlY29uZHMpIC8gMTBcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7bWVzc2FnZX0gKCR7c2Vjb25kc31zKWApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYyguLi5hcmdzKVxuICAgIH1cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMoLi4uYXJncylcbiAgfVxufVxuXG5jb25zdCBlc2NhcGVSZWcgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2dcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShlc2NhcGVSZWcsICdcXFxcJCYnKVxufVxuIl19