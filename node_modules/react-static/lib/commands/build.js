"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bundle = _interopRequireDefault(require("./bundle"));

var _export = _interopRequireDefault(require("./export"));

var _default =
/*#__PURE__*/
function () {
  var _build = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _bundle["default"])((0, _objectSpread2["default"])({}, state, {
              isBuildCommand: true
            }));

          case 2:
            state = _context.sent;
            return _context.abrupt("return", (0, _export["default"])(state));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function build(_x) {
    return _build.apply(this, arguments);
  }

  return build;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9idWlsZC5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImlzQnVpbGRDb21tYW5kIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OytCQUVnQixpQkFBcUJBLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBLDJEQUFZQSxLQUFaO0FBQW1CQyxjQUFBQSxjQUFjLEVBQUU7QUFBbkMsZUFEQTs7QUFBQTtBQUNkRCxZQUFBQSxLQURjO0FBQUEsNkNBRVAsd0JBQVNBLEtBQVQsQ0FGTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlRSxLOzs7O1NBQUFBLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVuZGxlIGZyb20gJy4vYnVuZGxlJ1xuaW1wb3J0IGV4cG9ydGVyIGZyb20gJy4vZXhwb3J0J1xuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gYnVpbGQoc3RhdGUpIHtcbiAgc3RhdGUgPSBhd2FpdCBidW5kbGUoeyAuLi5zdGF0ZSwgaXNCdWlsZENvbW1hbmQ6IHRydWUgfSlcbiAgcmV0dXJuIGV4cG9ydGVyKHN0YXRlKVxufSlcbiJdfQ==