"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteData = RouteData;
exports.withRouteData = withRouteData;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useRouteData = _interopRequireDefault(require("../hooks/useRouteData"));

function RouteData(_ref) {
  var children = _ref.children;
  return children((0, _useRouteData["default"])());
}

function withRouteData(Comp) {
  return function componentWithRouteData(props) {
    var routeData = (0, _useRouteData["default"])();
    return _react["default"].createElement(Comp, (0, _extends2["default"])({}, props, routeData));
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2NvbXBvbmVudHMvUm91dGVEYXRhLmpzIl0sIm5hbWVzIjpbIlJvdXRlRGF0YSIsImNoaWxkcmVuIiwid2l0aFJvdXRlRGF0YSIsIkNvbXAiLCJjb21wb25lbnRXaXRoUm91dGVEYXRhIiwicHJvcHMiLCJyb3V0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVPLFNBQVNBLFNBQVQsT0FBaUM7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdEMsU0FBT0EsUUFBUSxDQUFDLCtCQUFELENBQWY7QUFDRDs7QUFFTSxTQUFTQyxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPLFNBQVNDLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1QztBQUM1QyxRQUFNQyxTQUFTLEdBQUcsK0JBQWxCO0FBQ0EsV0FBTyxnQ0FBQyxJQUFELGdDQUFVRCxLQUFWLEVBQXFCQyxTQUFyQixFQUFQO0FBQ0QsR0FIRDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVJvdXRlRGF0YSBmcm9tICcuLi9ob29rcy91c2VSb3V0ZURhdGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZURhdGEoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiBjaGlsZHJlbih1c2VSb3V0ZURhdGEoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSb3V0ZURhdGEoQ29tcCkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcG9uZW50V2l0aFJvdXRlRGF0YShwcm9wcykge1xuICAgIGNvbnN0IHJvdXRlRGF0YSA9IHVzZVJvdXRlRGF0YSgpXG4gICAgcmV0dXJuIDxDb21wIHsuLi5wcm9wc30gey4uLnJvdXRlRGF0YX0gLz5cbiAgfVxufVxuIl19