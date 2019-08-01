"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _plugins = _interopRequireDefault(require("../plugins"));

// Instead of using the default components, we need to hard code meta
// from react-helmet into the components
var makeHtmlWithMeta =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var head, htmlProps;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = state.head;
            _context.next = 3;
            return _plugins["default"].htmlProps(head.htmlProps, state);

          case 3:
            htmlProps = _context.sent;
            return _context.abrupt("return", function (_ref2) {
              var children = _ref2.children,
                  rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
              return _react["default"].createElement("html", (0, _extends2["default"])({
                lang: "en"
              }, htmlProps, rest), children);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function makeHtmlWithMeta(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = makeHtmlWithMeta;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9IdG1sV2l0aE1ldGEuanMiXSwibmFtZXMiOlsibWFrZUh0bWxXaXRoTWV0YSIsInN0YXRlIiwiaGVhZCIsInBsdWdpbnMiLCJodG1sUHJvcHMiLCJjaGlsZHJlbiIsInJlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQU1BLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQUcsaUJBQU1DLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZDLFlBQUFBLElBRGUsR0FDTkQsS0FETSxDQUNmQyxJQURlO0FBQUE7QUFBQSxtQkFHQ0Msb0JBQVFDLFNBQVIsQ0FBa0JGLElBQUksQ0FBQ0UsU0FBdkIsRUFBa0NILEtBQWxDLENBSEQ7O0FBQUE7QUFHakJHLFlBQUFBLFNBSGlCO0FBQUEsNkNBS2hCO0FBQUEsa0JBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLGtCQUFnQkMsSUFBaEI7QUFBQSxxQkFDTDtBQUFNLGdCQUFBLElBQUksRUFBQztBQUFYLGlCQUFvQkYsU0FBcEIsRUFBbUNFLElBQW5DLEdBQ0dELFFBREgsQ0FESztBQUFBLGFBTGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCTCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O2VBWWVBLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBsdWdpbnMgZnJvbSAnLi4vcGx1Z2lucydcblxuLy8gSW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCBjb21wb25lbnRzLCB3ZSBuZWVkIHRvIGhhcmQgY29kZSBtZXRhXG4vLyBmcm9tIHJlYWN0LWhlbG1ldCBpbnRvIHRoZSBjb21wb25lbnRzXG5jb25zdCBtYWtlSHRtbFdpdGhNZXRhID0gYXN5bmMgc3RhdGUgPT4ge1xuICBjb25zdCB7IGhlYWQgfSA9IHN0YXRlXG5cbiAgY29uc3QgaHRtbFByb3BzID0gYXdhaXQgcGx1Z2lucy5odG1sUHJvcHMoaGVhZC5odG1sUHJvcHMsIHN0YXRlKVxuXG4gIHJldHVybiAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgey4uLmh0bWxQcm9wc30gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlSHRtbFdpdGhNZXRhXG4iXX0=