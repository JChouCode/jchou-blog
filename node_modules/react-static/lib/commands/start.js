"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _getRoutes = _interopRequireDefault(require("../static/getRoutes"));

var _generateBrowserPlugins = _interopRequireDefault(require("../static/generateBrowserPlugins"));

var _runDevServer = _interopRequireDefault(require("../static/webpack/runDevServer"));

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

var _extractTemplates = _interopRequireDefault(require("../static/extractTemplates"));

var _generateTemplates = _interopRequireDefault(require("../static/generateTemplates"));

var _createIndexPlaceholder = _interopRequireDefault(require("../utils/createIndexPlaceholder"));

//
var _default =
/*#__PURE__*/
function () {
  var _start = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var state,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            state = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};

            // ensure ENV variables are set
            if (typeof process.env.NODE_ENV === 'undefined') {
              process.env.NODE_ENV = 'development';
            }

            process.env.REACT_STATIC_ENV = 'development';
            process.env.BABEL_ENV = 'development';
            state.stage = 'dev';
            console.log("Starting Development Server..."); // Use a callback (a subscription)

            (0, _getConfig["default"])(state,
            /*#__PURE__*/
            function () {
              var _ref = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(state) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0, _createIndexPlaceholder["default"])(state);

                      case 2:
                        state = _context2.sent;
                        _context2.next = 5;
                        return (0, _generateBrowserPlugins["default"])(state);

                      case 5:
                        state = _context2.sent;
                        _context2.next = 8;
                        return (0, _getRoutes["default"])(state,
                        /*#__PURE__*/
                        function () {
                          var _ref2 = (0, _asyncToGenerator2["default"])(
                          /*#__PURE__*/
                          _regenerator["default"].mark(function _callee(state) {
                            return _regenerator["default"].wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return (0, _extractTemplates["default"])(state);

                                  case 2:
                                    state = _context.sent;
                                    _context.next = 5;
                                    return (0, _generateTemplates["default"])(state);

                                  case 5:
                                    state = _context.sent;
                                    _context.next = 8;
                                    return (0, _runDevServer["default"])(state);

                                  case 8:
                                    state = _context.sent;

                                  case 9:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x2) {
                            return _ref2.apply(this, arguments);
                          };
                        }());

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
            _context3.next = 9;
            return new Promise(function () {});

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  function start() {
    return _start.apply(this, arguments);
  }

  return start;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdGFydC5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJFQUNUX1NUQVRJQ19FTlYiLCJCQUJFTF9FTlYiLCJzdGFnZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7OytCQUVnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQkEsWUFBQUEsS0FBckIsOERBQTZCLEVBQTdCOztBQUNkO0FBQ0EsZ0JBQUksT0FBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQW5CLEtBQWdDLFdBQXBDLEVBQWlEO0FBQy9DRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixHQUF1QixhQUF2QjtBQUNEOztBQUVERixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsZ0JBQVosR0FBK0IsYUFBL0I7QUFDQUgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFNBQVosR0FBd0IsYUFBeEI7QUFFQUwsWUFBQUEsS0FBSyxDQUFDTSxLQUFOLEdBQWMsS0FBZDtBQUVBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsbUNBWGMsQ0FhZDs7QUFDQSx1Q0FBVVIsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQWlCLGtCQUFNQSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNELHdDQUF1QkEsS0FBdkIsQ0FEQzs7QUFBQTtBQUNmQSx3QkFBQUEsS0FEZTtBQUFBO0FBQUEsK0JBRUQsd0NBQXVCQSxLQUF2QixDQUZDOztBQUFBO0FBRWZBLHdCQUFBQSxLQUZlO0FBQUE7QUFBQSwrQkFNVCwyQkFBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBQWlCLGlCQUFNQSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUNQLGtDQUFpQkEsS0FBakIsQ0FETzs7QUFBQTtBQUNyQkEsb0NBQUFBLEtBRHFCO0FBQUE7QUFBQSwyQ0FFUCxtQ0FBa0JBLEtBQWxCLENBRk87O0FBQUE7QUFFckJBLG9DQUFBQSxLQUZxQjtBQUFBO0FBQUEsMkNBR1AsOEJBQWFBLEtBQWIsQ0FITzs7QUFBQTtBQUdyQkEsb0NBQUFBLEtBSHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFOUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRjO0FBQUEsbUJBMkJSLElBQUlTLE9BQUosQ0FBWSxZQUFNLENBRXZCLENBRkssQ0EzQlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZUMsSzs7OztTQUFBQSxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJvdXRlcyBmcm9tICcuLi9zdGF0aWMvZ2V0Um91dGVzJ1xuaW1wb3J0IGdlbmVyYXRlQnJvd3NlclBsdWdpbnMgZnJvbSAnLi4vc3RhdGljL2dlbmVyYXRlQnJvd3NlclBsdWdpbnMnXG5pbXBvcnQgcnVuRGV2U2VydmVyIGZyb20gJy4uL3N0YXRpYy93ZWJwYWNrL3J1bkRldlNlcnZlcidcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnLi4vc3RhdGljL2dldENvbmZpZydcbmltcG9ydCBleHRyYWN0VGVtcGxhdGVzIGZyb20gJy4uL3N0YXRpYy9leHRyYWN0VGVtcGxhdGVzJ1xuaW1wb3J0IGdlbmVyYXRlVGVtcGxhdGVzIGZyb20gJy4uL3N0YXRpYy9nZW5lcmF0ZVRlbXBsYXRlcydcbmltcG9ydCBjcmVhdGVJbmRleFBsYWNlaG9sZGVyIGZyb20gJy4uL3V0aWxzL2NyZWF0ZUluZGV4UGxhY2Vob2xkZXInXG4vL1xuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gc3RhcnQoc3RhdGUgPSB7fSkge1xuICAvLyBlbnN1cmUgRU5WIHZhcmlhYmxlcyBhcmUgc2V0XG4gIGlmICh0eXBlb2YgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAnZGV2ZWxvcG1lbnQnXG4gIH1cblxuICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRU5WID0gJ2RldmVsb3BtZW50J1xuICBwcm9jZXNzLmVudi5CQUJFTF9FTlYgPSAnZGV2ZWxvcG1lbnQnXG5cbiAgc3RhdGUuc3RhZ2UgPSAnZGV2J1xuXG4gIGNvbnNvbGUubG9nKGBTdGFydGluZyBEZXZlbG9wbWVudCBTZXJ2ZXIuLi5gKVxuXG4gIC8vIFVzZSBhIGNhbGxiYWNrIChhIHN1YnNjcmlwdGlvbilcbiAgZ2V0Q29uZmlnKHN0YXRlLCBhc3luYyBzdGF0ZSA9PiB7XG4gICAgc3RhdGUgPSBhd2FpdCBjcmVhdGVJbmRleFBsYWNlaG9sZGVyKHN0YXRlKVxuICAgIHN0YXRlID0gYXdhaXQgZ2VuZXJhdGVCcm93c2VyUGx1Z2lucyhzdGF0ZSlcblxuICAgIC8vIFVzZSBhIGNhbGxiYWNrIChhIHN1YnNjcmlwdGlvbilcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBhd2FpdCBnZXRSb3V0ZXMoc3RhdGUsIGFzeW5jIHN0YXRlID0+IHtcbiAgICAgIHN0YXRlID0gYXdhaXQgZXh0cmFjdFRlbXBsYXRlcyhzdGF0ZSlcbiAgICAgIHN0YXRlID0gYXdhaXQgZ2VuZXJhdGVUZW1wbGF0ZXMoc3RhdGUpXG4gICAgICBzdGF0ZSA9IGF3YWl0IHJ1bkRldlNlcnZlcihzdGF0ZSlcbiAgICB9KVxuICB9KVxuXG4gIGF3YWl0IG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICAvLyBEbyBub3RoaW5nIGluZGVmaW5pdGVseSwgdGhlIHVzZXIgbXVzdCBleGl0IHRoaXMgY29tbWFuZFxuICB9KVxufSlcbiJdfQ==