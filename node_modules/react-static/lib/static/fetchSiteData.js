"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("../utils");

var _default =
/*#__PURE__*/
function () {
  var _fetchSiteData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var siteData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Fetching Site Data...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Site Data Downloaded"));
            _context.next = 4;
            return state.config.getSiteData(state);

          case 4:
            siteData = _context.sent;
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Site Data Downloaded"));
            return _context.abrupt("return", (0, _objectSpread2["default"])({}, state, {
              siteData: siteData
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function fetchSiteData(_x) {
    return _fetchSiteData.apply(this, arguments);
  }

  return fetchSiteData;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZmV0Y2hTaXRlRGF0YS5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImdyZWVuIiwiY29uZmlnIiwiZ2V0U2l0ZURhdGEiLCJzaXRlRGF0YSIsImZldGNoU2l0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OytCQUVnQixpQkFBNkJBLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLDZCQUFLQyxrQkFBTUMsS0FBTixDQUFZLCtCQUFaLENBQUw7QUFGYztBQUFBLG1CQUdTSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsV0FBYixDQUF5Qk4sS0FBekIsQ0FIVDs7QUFBQTtBQUdSTyxZQUFBQSxRQUhRO0FBSWQsZ0NBQVFKLGtCQUFNQyxLQUFOLENBQVksK0JBQVosQ0FBUjtBQUpjLGdGQU1USixLQU5TO0FBT1pPLGNBQUFBLFFBQVEsRUFBUkE7QUFQWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlQyxhOzs7O1NBQUFBLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyB0aW1lLCB0aW1lRW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBmZXRjaFNpdGVEYXRhKHN0YXRlKSB7XG4gIGNvbnNvbGUubG9nKCdGZXRjaGluZyBTaXRlIERhdGEuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gU2l0ZSBEYXRhIERvd25sb2FkZWQnKSlcbiAgY29uc3Qgc2l0ZURhdGEgPSBhd2FpdCBzdGF0ZS5jb25maWcuZ2V0U2l0ZURhdGEoc3RhdGUpXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBTaXRlIERhdGEgRG93bmxvYWRlZCcpKVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNpdGVEYXRhLFxuICB9XG59KVxuIl19