"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = exports.Head = exports.Html = exports.DefaultDocument = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var DefaultDocument =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DefaultDocument, _Component);

  function DefaultDocument() {
    (0, _classCallCheck2["default"])(this, DefaultDocument);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DefaultDocument).apply(this, arguments));
  }

  (0, _createClass2["default"])(DefaultDocument, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Html = _this$props.Html,
          Head = _this$props.Head,
          Body = _this$props.Body,
          children = _this$props.children;
      return _react["default"].createElement(Html, null, _react["default"].createElement(Head, null, _react["default"].createElement("meta", {
        charSet: "UTF-8"
      }), _react["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
      })), _react["default"].createElement(Body, null, children));
    }
  }]);
  return DefaultDocument;
}(_react.Component);

exports.DefaultDocument = DefaultDocument;

var Html = function Html(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return _react["default"].createElement("html", (0, _extends2["default"])({
    lang: "en-US"
  }, rest), children);
};

exports.Html = Html;

var Head = function Head(_ref2) {
  var children = _ref2.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
  return _react["default"].createElement("head", rest, children);
};

exports.Head = Head;

var Body = function Body(_ref3) {
  var children = _ref3.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref3, ["children"]);
  return _react["default"].createElement("body", rest, children);
};

exports.Body = Body;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9Sb290Q29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJEZWZhdWx0RG9jdW1lbnQiLCJwcm9wcyIsIkh0bWwiLCJIZWFkIiwiQm9keSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVhQSxlOzs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSx3QkFDZ0MsS0FBS0MsS0FEckM7QUFBQSxVQUNDQyxJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPQyxJQURQLGVBQ09BLElBRFA7QUFBQSxVQUNhQyxJQURiLGVBQ2FBLElBRGI7QUFBQSxVQUNtQkMsUUFEbkIsZUFDbUJBLFFBRG5CO0FBRVAsYUFDRSxnQ0FBQyxJQUFELFFBQ0UsZ0NBQUMsSUFBRCxRQUNFO0FBQU0sUUFBQSxPQUFPLEVBQUM7QUFBZCxRQURGLEVBRUU7QUFDRSxRQUFBLElBQUksRUFBQyxVQURQO0FBRUUsUUFBQSxPQUFPLEVBQUM7QUFGVixRQUZGLENBREYsRUFRRSxnQ0FBQyxJQUFELFFBQU9BLFFBQVAsQ0FSRixDQURGO0FBWUQ7OztFQWZrQ0MsZ0I7Ozs7QUFrQjlCLElBQU1KLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0csUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBZ0JFLElBQWhCO0FBQUEsU0FDbEI7QUFBTSxJQUFBLElBQUksRUFBQztBQUFYLEtBQXVCQSxJQUF2QixHQUNHRixRQURILENBRGtCO0FBQUEsQ0FBYjs7OztBQUtBLElBQU1GLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0UsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBZ0JFLElBQWhCO0FBQUEsU0FBMkIsd0NBQVVBLElBQVYsRUFBaUJGLFFBQWpCLENBQTNCO0FBQUEsQ0FBYjs7OztBQUNBLElBQU1ELElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBZ0JFLElBQWhCO0FBQUEsU0FBMkIsd0NBQVVBLElBQVYsRUFBaUJGLFFBQWpCLENBQTNCO0FBQUEsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNsYXNzIERlZmF1bHREb2N1bWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IEh0bWwsIEhlYWQsIEJvZHksIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTUsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEJvZHk+e2NoaWxkcmVufTwvQm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEh0bWwgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxodG1sIGxhbmc9XCJlbi1VU1wiIHsuLi5yZXN0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvaHRtbD5cbilcbmV4cG9ydCBjb25zdCBIZWFkID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gPGhlYWQgey4uLnJlc3R9PntjaGlsZHJlbn08L2hlYWQ+XG5leHBvcnQgY29uc3QgQm9keSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IDxib2R5IHsuLi5yZXN0fT57Y2hpbGRyZW59PC9ib2R5PlxuIl19