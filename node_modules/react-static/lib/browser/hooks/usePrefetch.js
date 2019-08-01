"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _utils = require("../utils");

var _ = require("..");

var _Visibility = _interopRequireDefault(require("../utils/Visibility"));

var usePrefetch = function usePrefetch(path) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (!ref.current) {
      return;
    }

    (0, _Visibility["default"])(ref.current, function () {
      return (0, _.prefetch)((0, _utils.getRoutePath)(path));
    });
  }, [ref.current, path]);
  return ref;
};

var _default = usePrefetch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2hvb2tzL3VzZVByZWZldGNoLmpzIl0sIm5hbWVzIjpbInVzZVByZWZldGNoIiwicGF0aCIsInJlZiIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBMEI7QUFBQSxNQUFuQkMsR0FBbUIsdUVBQWIsb0JBQWE7QUFDNUMsd0JBQVUsWUFBTTtBQUNkLFFBQUksQ0FBQ0EsR0FBRyxDQUFDQyxPQUFULEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0QsZ0NBQVVELEdBQUcsQ0FBQ0MsT0FBZCxFQUF1QjtBQUFBLGFBQU0sZ0JBQVMseUJBQWFGLElBQWIsQ0FBVCxDQUFOO0FBQUEsS0FBdkI7QUFDRCxHQUxELEVBS0csQ0FBQ0MsR0FBRyxDQUFDQyxPQUFMLEVBQWNGLElBQWQsQ0FMSDtBQU9BLFNBQU9DLEdBQVA7QUFDRCxDQVREOztlQVdlRixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFJvdXRlUGF0aCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgcHJlZmV0Y2ggfSBmcm9tIFwiLi5cIlxuaW1wb3J0IG9uVmlzaWJsZSBmcm9tICcuLi91dGlscy9WaXNpYmlsaXR5J1xuXG5jb25zdCB1c2VQcmVmZXRjaCA9IChwYXRoLCByZWYgPSB1c2VSZWYoKSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBvblZpc2libGUocmVmLmN1cnJlbnQsICgpID0+IHByZWZldGNoKGdldFJvdXRlUGF0aChwYXRoKSkpXG4gIH0sIFtyZWYuY3VycmVudCwgcGF0aF0pXG5cbiAgcmV0dXJuIHJlZlxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQcmVmZXRjaFxuIl19