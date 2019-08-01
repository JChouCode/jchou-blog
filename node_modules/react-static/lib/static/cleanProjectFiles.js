"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cleanDistDirectory;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("../utils");

function cleanDistDirectory(_x) {
  return _cleanDistDirectory.apply(this, arguments);
}

function _cleanDistDirectory() {
  _cleanDistDirectory = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remove the DIST folder
            console.log('Cleaning dist...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Dist cleaned"));
            _context.next = 4;
            return _fsExtra["default"].remove(state.config.paths.DIST);

          case 4:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Dist cleaned")); // Remove the ARTIFACTS folder

            console.log('Cleaning artifacts...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Artifacts cleaned"));
            _context.next = 9;
            return _fsExtra["default"].remove(state.config.paths.ARTIFACTS);

          case 9:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Artifacts cleaned")); // Empty ASSETS folder

            if (!(state.config.paths.ASSETS && state.config.paths.ASSETS !== state.config.paths.DIST)) {
              _context.next = 16;
              break;
            }

            console.log('Cleaning assets...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Assets cleaned"));
            _context.next = 15;
            return _fsExtra["default"].emptyDir(state.config.paths.ASSETS);

          case 15:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Assets cleaned"));

          case 16:
            return _context.abrupt("return", state);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _cleanDistDirectory.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvY2xlYW5Qcm9qZWN0RmlsZXMuanMiXSwibmFtZXMiOlsiY2xlYW5EaXN0RGlyZWN0b3J5Iiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hhbGsiLCJncmVlbiIsImZzIiwicmVtb3ZlIiwiY29uZmlnIiwicGF0aHMiLCJESVNUIiwiQVJUSUZBQ1RTIiwiQVNTRVRTIiwiZW1wdHlEaXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7U0FFOEJBLGtCOzs7Ozs7OytCQUFmLGlCQUFrQ0MsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0EsNkJBQUtDLGtCQUFNQyxLQUFOLENBQVksdUJBQVosQ0FBTDtBQUhhO0FBQUEsbUJBSVBDLG9CQUFHQyxNQUFILENBQVVOLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFiLENBQW1CQyxJQUE3QixDQUpPOztBQUFBO0FBS2IsZ0NBQVFOLGtCQUFNQyxLQUFOLENBQVksdUJBQVosQ0FBUixFQUxhLENBT2I7O0FBQ0FILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsNkJBQUtDLGtCQUFNQyxLQUFOLENBQVksNEJBQVosQ0FBTDtBQVRhO0FBQUEsbUJBVVBDLG9CQUFHQyxNQUFILENBQVVOLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFiLENBQW1CRSxTQUE3QixDQVZPOztBQUFBO0FBV2IsZ0NBQVFQLGtCQUFNQyxLQUFOLENBQVksNEJBQVosQ0FBUixFQVhhLENBYWI7O0FBYmEsa0JBZVhKLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFiLENBQW1CRyxNQUFuQixJQUNBWCxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkcsTUFBbkIsS0FBOEJYLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFiLENBQW1CQyxJQWhCdEM7QUFBQTtBQUFBO0FBQUE7O0FBa0JYUixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLDZCQUFLQyxrQkFBTUMsS0FBTixDQUFZLHlCQUFaLENBQUw7QUFuQlc7QUFBQSxtQkFvQkxDLG9CQUFHTyxRQUFILENBQVlaLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFiLENBQW1CRyxNQUEvQixDQXBCSzs7QUFBQTtBQXFCWCxnQ0FBUVIsa0JBQU1DLEtBQU4sQ0FBWSx5QkFBWixDQUFSOztBQXJCVztBQUFBLDZDQXdCTkosS0F4Qk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCB7IHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2xlYW5EaXN0RGlyZWN0b3J5KHN0YXRlKSB7XG4gIC8vIFJlbW92ZSB0aGUgRElTVCBmb2xkZXJcbiAgY29uc29sZS5sb2coJ0NsZWFuaW5nIGRpc3QuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gRGlzdCBjbGVhbmVkJykpXG4gIGF3YWl0IGZzLnJlbW92ZShzdGF0ZS5jb25maWcucGF0aHMuRElTVClcbiAgdGltZUVuZChjaGFsay5ncmVlbignW1xcdTI3MTNdIERpc3QgY2xlYW5lZCcpKVxuXG4gIC8vIFJlbW92ZSB0aGUgQVJUSUZBQ1RTIGZvbGRlclxuICBjb25zb2xlLmxvZygnQ2xlYW5pbmcgYXJ0aWZhY3RzLi4uJylcbiAgdGltZShjaGFsay5ncmVlbignW1xcdTI3MTNdIEFydGlmYWN0cyBjbGVhbmVkJykpXG4gIGF3YWl0IGZzLnJlbW92ZShzdGF0ZS5jb25maWcucGF0aHMuQVJUSUZBQ1RTKVxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gQXJ0aWZhY3RzIGNsZWFuZWQnKSlcblxuICAvLyBFbXB0eSBBU1NFVFMgZm9sZGVyXG4gIGlmIChcbiAgICBzdGF0ZS5jb25maWcucGF0aHMuQVNTRVRTICYmXG4gICAgc3RhdGUuY29uZmlnLnBhdGhzLkFTU0VUUyAhPT0gc3RhdGUuY29uZmlnLnBhdGhzLkRJU1RcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ0NsZWFuaW5nIGFzc2V0cy4uLicpXG4gICAgdGltZShjaGFsay5ncmVlbignW1xcdTI3MTNdIEFzc2V0cyBjbGVhbmVkJykpXG4gICAgYXdhaXQgZnMuZW1wdHlEaXIoc3RhdGUuY29uZmlnLnBhdGhzLkFTU0VUUylcbiAgICB0aW1lRW5kKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gQXNzZXRzIGNsZWFuZWQnKSlcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuIl19