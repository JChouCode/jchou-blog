"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = copyPublicFolder;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("../utils");

//
function copyPublicFolder(_x) {
  return _copyPublicFolder.apply(this, arguments);
}

function _copyPublicFolder() {
  _copyPublicFolder = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var _state$config$paths, PUBLIC, DIST, INDEX;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _state$config$paths = state.config.paths, PUBLIC = _state$config$paths.PUBLIC, DIST = _state$config$paths.DIST, INDEX = _state$config$paths.INDEX;
            console.log('Copying public directory...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Public directory copied"));
            _context.next = 5;
            return _fsExtra["default"].ensureDir(PUBLIC);

          case 5:
            _context.next = 7;
            return _fsExtra["default"].copy(PUBLIC, DIST, {
              dereference: true,
              filter: function filter(file) {
                return file !== INDEX;
              }
            });

          case 7:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Public directory copied"));
            return _context.abrupt("return", state);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _copyPublicFolder.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvY29weVB1YmxpY0ZpbGVzLmpzIl0sIm5hbWVzIjpbImNvcHlQdWJsaWNGb2xkZXIiLCJzdGF0ZSIsImNvbmZpZyIsInBhdGhzIiwiUFVCTElDIiwiRElTVCIsIklOREVYIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwiZ3JlZW4iLCJmcyIsImVuc3VyZURpciIsImNvcHkiLCJkZXJlZmVyZW5jZSIsImZpbHRlciIsImZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFEQTtTQUc4QkEsZ0I7Ozs7Ozs7K0JBQWYsaUJBQWdDQyxLQUFoQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBS1RBLEtBTFMsQ0FFWEMsTUFGVyxDQUdUQyxLQUhTLEVBR0FDLE1BSEEsdUJBR0FBLE1BSEEsRUFHUUMsSUFIUix1QkFHUUEsSUFIUixFQUdjQyxLQUhkLHVCQUdjQSxLQUhkO0FBT2JDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0EsNkJBQUtDLGtCQUFNQyxLQUFOLENBQVksa0NBQVosQ0FBTDtBQVJhO0FBQUEsbUJBVVBDLG9CQUFHQyxTQUFILENBQWFSLE1BQWIsQ0FWTzs7QUFBQTtBQUFBO0FBQUEsbUJBWVBPLG9CQUFHRSxJQUFILENBQVFULE1BQVIsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzFCUyxjQUFBQSxXQUFXLEVBQUUsSUFEYTtBQUUxQkMsY0FBQUEsTUFBTSxFQUFFLGdCQUFBQyxJQUFJO0FBQUEsdUJBQUlBLElBQUksS0FBS1YsS0FBYjtBQUFBO0FBRmMsYUFBdEIsQ0FaTzs7QUFBQTtBQWlCYixnQ0FBUUcsa0JBQU1DLEtBQU4sQ0FBWSxrQ0FBWixDQUFSO0FBakJhLDZDQW1CTlQsS0FuQk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbi8vXG5pbXBvcnQgeyB0aW1lLCB0aW1lRW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvcHlQdWJsaWNGb2xkZXIoc3RhdGUpIHtcbiAgY29uc3Qge1xuICAgIGNvbmZpZzoge1xuICAgICAgcGF0aHM6IHsgUFVCTElDLCBESVNULCBJTkRFWCB9LFxuICAgIH0sXG4gIH0gPSBzdGF0ZVxuXG4gIGNvbnNvbGUubG9nKCdDb3B5aW5nIHB1YmxpYyBkaXJlY3RvcnkuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gUHVibGljIGRpcmVjdG9yeSBjb3BpZWQnKSlcblxuICBhd2FpdCBmcy5lbnN1cmVEaXIoUFVCTElDKVxuXG4gIGF3YWl0IGZzLmNvcHkoUFVCTElDLCBESVNULCB7XG4gICAgZGVyZWZlcmVuY2U6IHRydWUsXG4gICAgZmlsdGVyOiBmaWxlID0+IGZpbGUgIT09IElOREVYLFxuICB9KVxuXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBQdWJsaWMgZGlyZWN0b3J5IGNvcGllZCcpKVxuXG4gIHJldHVybiBzdGF0ZVxufVxuIl19