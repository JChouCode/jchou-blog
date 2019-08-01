"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteData = SiteData;
exports.withSiteData = withSiteData;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useSiteData = _interopRequireDefault(require("../hooks/useSiteData"));

function SiteData(_ref) {
  var children = _ref.children;
  return children((0, _useSiteData["default"])());
}

function withSiteData(Comp) {
  return function componentWithSiteData(props) {
    var routeData = (0, _useSiteData["default"])();
    return _react["default"].createElement(Comp, (0, _extends2["default"])({}, props, routeData));
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2NvbXBvbmVudHMvU2l0ZURhdGEuanMiXSwibmFtZXMiOlsiU2l0ZURhdGEiLCJjaGlsZHJlbiIsIndpdGhTaXRlRGF0YSIsIkNvbXAiLCJjb21wb25lbnRXaXRoU2l0ZURhdGEiLCJwcm9wcyIsInJvdXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sU0FBU0EsUUFBVCxPQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNyQyxTQUFPQSxRQUFRLENBQUMsOEJBQUQsQ0FBZjtBQUNEOztBQUVNLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU8sU0FBU0MscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQzNDLFFBQU1DLFNBQVMsR0FBRyw4QkFBbEI7QUFDQSxXQUFPLGdDQUFDLElBQUQsZ0NBQVVELEtBQVYsRUFBcUJDLFNBQXJCLEVBQVA7QUFDRCxHQUhEO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlU2l0ZURhdGEgZnJvbSAnLi4vaG9va3MvdXNlU2l0ZURhdGEnXG5cbmV4cG9ydCBmdW5jdGlvbiBTaXRlRGF0YSh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIGNoaWxkcmVuKHVzZVNpdGVEYXRhKCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoU2l0ZURhdGEoQ29tcCkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcG9uZW50V2l0aFNpdGVEYXRhKHByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVEYXRhID0gdXNlU2l0ZURhdGEoKVxuICAgIHJldHVybiA8Q29tcCB7Li4ucHJvcHN9IHsuLi5yb3V0ZURhdGF9IC8+XG4gIH1cbn1cbiJdfQ==