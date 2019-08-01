"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRouteData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function getRouteData(_x, _x2) {
  return _getRouteData.apply(this, arguments);
}

function _getRouteData() {
  _getRouteData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(route, state) {
    var sharedDataByHash,
        data,
        sharedHashesByProp,
        newSharedData,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sharedDataByHash = _args.length > 2 && _args[2] !== undefined ? _args[2] : new Map();
            _context.t0 = !!route.getData;

            if (!_context.t0) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return route.getData((0, _objectSpread2["default"])({}, state, {
              route: route
            }));

          case 5:
            _context.t0 = _context.sent;

          case 6:
            data = _context.t0;
            // Default data (must be an object)
            data = data || {}; // Extract any shared data

            sharedHashesByProp = {};
            newSharedData = {};

            if (route.sharedData) {
              Object.keys(route.sharedData).forEach(function (name) {
                var sharedPiece = route.sharedData[name];
                sharedDataByHash.set(sharedPiece.hash, sharedPiece);
                sharedHashesByProp[name] = sharedPiece.hash;
                newSharedData[name] = sharedPiece.data;
              });
            }

            return _context.abrupt("return", (0, _objectSpread2["default"])({}, route, {
              data: data,
              sharedHashesByProp: sharedHashesByProp,
              sharedData: newSharedData
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRouteData.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Um91dGVEYXRhLmpzIl0sIm5hbWVzIjpbImdldFJvdXRlRGF0YSIsInJvdXRlIiwic3RhdGUiLCJzaGFyZWREYXRhQnlIYXNoIiwiTWFwIiwiZ2V0RGF0YSIsImRhdGEiLCJzaGFyZWRIYXNoZXNCeVByb3AiLCJuZXdTaGFyZWREYXRhIiwic2hhcmVkRGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsInNoYXJlZFBpZWNlIiwic2V0IiwiaGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1NBQThCQSxZOzs7Ozs7OytCQUFmLGlCQUNiQyxLQURhLEVBRWJDLEtBRmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHYkMsWUFBQUEsZ0JBSGEsMkRBR00sSUFBSUMsR0FBSixFQUhOO0FBQUEsMEJBTUYsQ0FBQyxDQUFDSCxLQUFLLENBQUNJLE9BTk47O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFNd0JKLEtBQUssQ0FBQ0ksT0FBTixvQ0FBbUJILEtBQW5CO0FBQTBCRCxjQUFBQSxLQUFLLEVBQUxBO0FBQTFCLGVBTnhCOztBQUFBO0FBQUE7O0FBQUE7QUFNVEssWUFBQUEsSUFOUztBQU9iO0FBQ0FBLFlBQUFBLElBQUksR0FBR0EsSUFBSSxJQUFJLEVBQWYsQ0FSYSxDQVNiOztBQUNNQyxZQUFBQSxrQkFWTyxHQVVjLEVBVmQ7QUFXUEMsWUFBQUEsYUFYTyxHQVdTLEVBWFQ7O0FBYWIsZ0JBQUlQLEtBQUssQ0FBQ1EsVUFBVixFQUFzQjtBQUNwQkMsY0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlWLEtBQUssQ0FBQ1EsVUFBbEIsRUFBOEJHLE9BQTlCLENBQXNDLFVBQUFDLElBQUksRUFBSTtBQUM1QyxvQkFBTUMsV0FBVyxHQUFHYixLQUFLLENBQUNRLFVBQU4sQ0FBaUJJLElBQWpCLENBQXBCO0FBQ0FWLGdCQUFBQSxnQkFBZ0IsQ0FBQ1ksR0FBakIsQ0FBcUJELFdBQVcsQ0FBQ0UsSUFBakMsRUFBdUNGLFdBQXZDO0FBQ0FQLGdCQUFBQSxrQkFBa0IsQ0FBQ00sSUFBRCxDQUFsQixHQUEyQkMsV0FBVyxDQUFDRSxJQUF2QztBQUNBUixnQkFBQUEsYUFBYSxDQUFDSyxJQUFELENBQWIsR0FBc0JDLFdBQVcsQ0FBQ1IsSUFBbEM7QUFDRCxlQUxEO0FBTUQ7O0FBcEJZLGdGQXVCUkwsS0F2QlE7QUF3QlhLLGNBQUFBLElBQUksRUFBSkEsSUF4Qlc7QUF5QlhDLGNBQUFBLGtCQUFrQixFQUFsQkEsa0JBekJXO0FBMEJYRSxjQUFBQSxVQUFVLEVBQUVEO0FBMUJEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRSb3V0ZURhdGEoXG4gIHJvdXRlLFxuICBzdGF0ZSxcbiAgc2hhcmVkRGF0YUJ5SGFzaCA9IG5ldyBNYXAoKVxuKSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBlYWNoIHJvdXRlXG4gIGxldCBkYXRhID0gISFyb3V0ZS5nZXREYXRhICYmIChhd2FpdCByb3V0ZS5nZXREYXRhKHsgLi4uc3RhdGUsIHJvdXRlIH0pKVxuICAvLyBEZWZhdWx0IGRhdGEgKG11c3QgYmUgYW4gb2JqZWN0KVxuICBkYXRhID0gZGF0YSB8fCB7fVxuICAvLyBFeHRyYWN0IGFueSBzaGFyZWQgZGF0YVxuICBjb25zdCBzaGFyZWRIYXNoZXNCeVByb3AgPSB7fVxuICBjb25zdCBuZXdTaGFyZWREYXRhID0ge31cblxuICBpZiAocm91dGUuc2hhcmVkRGF0YSkge1xuICAgIE9iamVjdC5rZXlzKHJvdXRlLnNoYXJlZERhdGEpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaGFyZWRQaWVjZSA9IHJvdXRlLnNoYXJlZERhdGFbbmFtZV1cbiAgICAgIHNoYXJlZERhdGFCeUhhc2guc2V0KHNoYXJlZFBpZWNlLmhhc2gsIHNoYXJlZFBpZWNlKVxuICAgICAgc2hhcmVkSGFzaGVzQnlQcm9wW25hbWVdID0gc2hhcmVkUGllY2UuaGFzaFxuICAgICAgbmV3U2hhcmVkRGF0YVtuYW1lXSA9IHNoYXJlZFBpZWNlLmRhdGFcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yb3V0ZSxcbiAgICBkYXRhLFxuICAgIHNoYXJlZEhhc2hlc0J5UHJvcCxcbiAgICBzaGFyZWREYXRhOiBuZXdTaGFyZWREYXRhLFxuICB9XG59XG4iXX0=