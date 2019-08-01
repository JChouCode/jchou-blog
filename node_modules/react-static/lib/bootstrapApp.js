"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _useStaticInfo = require("./browser/hooks/useStaticInfo");

/* eslint-disable import/no-dynamic-require */
var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = require("".concat(process.env.REACT_STATIC_ENTRY_PATH))["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ib290c3RyYXBBcHAuanMiXSwibmFtZXMiOlsiT3JpZ2luYWxTdXNwZW5zZSIsIlJlYWN0IiwiU3VzcGVuc2UiLCJrZXkiLCJjaGlsZHJlbiIsInJlc3QiLCJkb2N1bWVudCIsIkFwcCIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0VOVFJZX1BBVEgiLCJzdGF0aWNJbmZvIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUZBO0FBSUEsSUFBTUEsZ0JBQWdCLEdBQUdDLEtBQUssQ0FBQ0MsUUFBL0I7O0FBRUEsU0FBU0EsUUFBVCxPQUE4QztBQUFBLE1BQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBUkMsSUFBUTtBQUM1QyxTQUFPLE9BQU9DLFFBQVAsS0FBb0IsV0FBcEIsR0FDTCxvQkFBQyxnQkFBRDtBQUFrQixJQUFBLEdBQUcsRUFBRUg7QUFBdkIsS0FBZ0NFLElBQWhDLEdBQ0dELFFBREgsQ0FESyxHQUtMLG9CQUFDLEtBQUQsQ0FBTyxRQUFQO0FBQWdCLElBQUEsR0FBRyxFQUFFRDtBQUFyQixLQUEyQkMsUUFBM0IsQ0FMRjtBQU9ELEMsQ0FFRDs7O0FBQ0FILEtBQUssQ0FBQ0MsUUFBTixHQUFpQkEsUUFBakI7QUFDQUQsS0FBSyxXQUFMLENBQWNDLFFBQWQsR0FBeUJBLFFBQXpCOztBQUVBLElBQU1LLEdBQUcsR0FBR0MsT0FBTyxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsdUJBQWhCLEVBQVAsV0FBWjs7ZUFFZSxrQkFBQUMsVUFBVTtBQUFBLFNBQUksVUFBQUMsS0FBSztBQUFBLFdBQ2hDLG9CQUFDLGdDQUFELENBQW1CLFFBQW5CO0FBQTRCLE1BQUEsS0FBSyxFQUFFRDtBQUFuQyxPQUNFLG9CQUFDLEdBQUQsRUFBU0MsS0FBVCxDQURGLENBRGdDO0FBQUEsR0FBVDtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0YXRpY0luZm9Db250ZXh0IH0gZnJvbSAnLi9icm93c2VyL2hvb2tzL3VzZVN0YXRpY0luZm8nXG5cbmNvbnN0IE9yaWdpbmFsU3VzcGVuc2UgPSBSZWFjdC5TdXNwZW5zZVxuXG5mdW5jdGlvbiBTdXNwZW5zZSh7IGtleSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IChcbiAgICA8T3JpZ2luYWxTdXNwZW5zZSBrZXk9e2tleX0gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvT3JpZ2luYWxTdXNwZW5zZT5cbiAgKSA6IChcbiAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtrZXl9PntjaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbi8vIE92ZXJyaWRlIHRoZSBzdXNwZW5zZSBtb2R1bGUgdG8gYmUgb3VyIG93blxuUmVhY3QuU3VzcGVuc2UgPSBTdXNwZW5zZVxuUmVhY3QuZGVmYXVsdC5TdXNwZW5zZSA9IFN1c3BlbnNlXG5cbmNvbnN0IEFwcCA9IHJlcXVpcmUoYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOVFJZX1BBVEh9YCkuZGVmYXVsdFxuXG5leHBvcnQgZGVmYXVsdCBzdGF0aWNJbmZvID0+IHByb3BzID0+IChcbiAgPHN0YXRpY0luZm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0aWNJbmZvfT5cbiAgICA8QXBwIHsuLi5wcm9wc30gLz5cbiAgPC9zdGF0aWNJbmZvQ29udGV4dC5Qcm92aWRlcj5cbilcbiJdfQ==