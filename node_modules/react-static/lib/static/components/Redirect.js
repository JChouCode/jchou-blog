"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

//
var Redirect =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Redirect, _React$Component);

  function Redirect() {
    (0, _classCallCheck2["default"])(this, Redirect);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Redirect).apply(this, arguments));
  }

  (0, _createClass2["default"])(Redirect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          fromPath = _this$props.fromPath;
      var resolvedTo = (0, _typeof2["default"])(to) === 'object' ? to.pathname : to;

      if (!resolvedTo.includes('//')) {
        resolvedTo = "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(resolvedTo === '/' ? '' : resolvedTo);
      }

      return _react["default"].createElement(_reactHelmet["default"], null, fromPath && _react["default"].createElement("title", null, "".concat(process.env.REACT_STATIC_PUBLIC_PATH).concat(fromPath === '/' ? '' : fromPath)), _react["default"].createElement("link", {
        rel: "canonical",
        href: resolvedTo
      }), _react["default"].createElement("meta", {
        name: "robots",
        content: "noindex"
      }), _react["default"].createElement("meta", {
        httpEquiv: "content-type",
        content: "text/html; charset=utf-8"
      }), _react["default"].createElement("meta", {
        httpEquiv: "refresh",
        content: "0; url=".concat(resolvedTo)
      }));
    }
  }]);
  return Redirect;
}(_react["default"].Component);

exports["default"] = Redirect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9SZWRpcmVjdC5qcyJdLCJuYW1lcyI6WyJSZWRpcmVjdCIsInByb3BzIiwidG8iLCJmcm9tUGF0aCIsInJlc29sdmVkVG8iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtJQUVxQkEsUTs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsd0JBQ2tCLEtBQUtDLEtBRHZCO0FBQUEsVUFDQ0MsRUFERCxlQUNDQSxFQUREO0FBQUEsVUFDS0MsUUFETCxlQUNLQSxRQURMO0FBRVAsVUFBSUMsVUFBVSxHQUFHLHlCQUFPRixFQUFQLE1BQWMsUUFBZCxHQUF5QkEsRUFBRSxDQUFDRyxRQUE1QixHQUF1Q0gsRUFBeEQ7O0FBQ0EsVUFBSSxDQUFDRSxVQUFVLENBQUNFLFFBQVgsQ0FBb0IsSUFBcEIsQ0FBTCxFQUFnQztBQUM5QkYsUUFBQUEsVUFBVSxhQUFNRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBQWxCLFNBQ1JMLFVBQVUsS0FBSyxHQUFmLEdBQXFCLEVBQXJCLEdBQTBCQSxVQURsQixDQUFWO0FBR0Q7O0FBQ0QsYUFDRSxnQ0FBQyx1QkFBRCxRQUNHRCxRQUFRLElBQ1AseURBQ01JLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx3QkFEbEIsU0FFSU4sUUFBUSxLQUFLLEdBQWIsR0FBbUIsRUFBbkIsR0FBd0JBLFFBRjVCLEVBRkosRUFRRTtBQUFNLFFBQUEsR0FBRyxFQUFDLFdBQVY7QUFBc0IsUUFBQSxJQUFJLEVBQUVDO0FBQTVCLFFBUkYsRUFTRTtBQUFNLFFBQUEsSUFBSSxFQUFDLFFBQVg7QUFBb0IsUUFBQSxPQUFPLEVBQUM7QUFBNUIsUUFURixFQVVFO0FBQU0sUUFBQSxTQUFTLEVBQUMsY0FBaEI7QUFBK0IsUUFBQSxPQUFPLEVBQUM7QUFBdkMsUUFWRixFQVdFO0FBQU0sUUFBQSxTQUFTLEVBQUMsU0FBaEI7QUFBMEIsUUFBQSxPQUFPLG1CQUFZQSxVQUFaO0FBQWpDLFFBWEYsQ0FERjtBQWVEOzs7RUF4Qm1DTSxrQkFBTUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ3JlYWN0LWhlbG1ldCdcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGlyZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG8sIGZyb21QYXRoIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHJlc29sdmVkVG8gPSB0eXBlb2YgdG8gPT09ICdvYmplY3QnID8gdG8ucGF0aG5hbWUgOiB0b1xuICAgIGlmICghcmVzb2x2ZWRUby5pbmNsdWRlcygnLy8nKSkge1xuICAgICAgcmVzb2x2ZWRUbyA9IGAke3Byb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSH0ke1xuICAgICAgICByZXNvbHZlZFRvID09PSAnLycgPyAnJyA6IHJlc29sdmVkVG9cbiAgICAgIH1gXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8SGVhZD5cbiAgICAgICAge2Zyb21QYXRoICYmIChcbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7YCR7cHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIfSR7XG4gICAgICAgICAgICAgIGZyb21QYXRoID09PSAnLycgPyAnJyA6IGZyb21QYXRoXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICApfVxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtyZXNvbHZlZFRvfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9e2AwOyB1cmw9JHtyZXNvbHZlZFRvfWB9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgKVxuICB9XG59XG4iXX0=