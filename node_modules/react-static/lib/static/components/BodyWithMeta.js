"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var REGEX_FOR_SCRIPT = /<(\/)?(script)/gi;

var generateRouteInformation = function generateRouteInformation(embeddedRouteInfo) {
  return {
    __html: "\n    window.__routeInfo = ".concat(JSON.stringify(embeddedRouteInfo).replace(REGEX_FOR_SCRIPT, '<"+"$1$2'), ";")
  };
}; // Not only do we pass react-helmet attributes and the app.js here, but
// we also need to  hard code site props and route props into the page to
// prevent flashing when react mounts onto the HTML.


var makeBodyWithMeta =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var head, route, embeddedRouteInfo, _state$clientScripts, clientScripts;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = state.head, route = state.route, embeddedRouteInfo = state.embeddedRouteInfo, _state$clientScripts = state.clientScripts, clientScripts = _state$clientScripts === void 0 ? [] : _state$clientScripts; // This embeddedRouteInfo will be inlined into the HTML for this route.
            // It should only include the full props, not the partials.

            return _context.abrupt("return", function (_ref2) {
              var children = _ref2.children,
                  rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
              return _react["default"].createElement("body", (0, _extends2["default"])({}, head.bodyProps, rest), children, !route.redirect ? _react["default"].createElement("script", {
                type: "text/javascript",
                dangerouslySetInnerHTML: generateRouteInformation(embeddedRouteInfo)
              }) : null, !route.redirect ? clientScripts.map(function (script) {
                return _react["default"].createElement("script", {
                  key: script,
                  defer: true,
                  type: "text/javascript",
                  src: (0, _utils.makePathAbsolute)((0, _utils.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, script))
                });
              }) : null);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function makeBodyWithMeta(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = makeBodyWithMeta;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9Cb2R5V2l0aE1ldGEuanMiXSwibmFtZXMiOlsiUkVHRVhfRk9SX1NDUklQVCIsImdlbmVyYXRlUm91dGVJbmZvcm1hdGlvbiIsImVtYmVkZGVkUm91dGVJbmZvIiwiX19odG1sIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJtYWtlQm9keVdpdGhNZXRhIiwic3RhdGUiLCJoZWFkIiwicm91dGUiLCJjbGllbnRTY3JpcHRzIiwiY2hpbGRyZW4iLCJyZXN0IiwiYm9keVByb3BzIiwicmVkaXJlY3QiLCJtYXAiLCJzY3JpcHQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLGtCQUF6Qjs7QUFFQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUFDLGlCQUFpQjtBQUFBLFNBQUs7QUFDckRDLElBQUFBLE1BQU0sdUNBQ21CQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsaUJBQWYsRUFBa0NJLE9BQWxDLENBQ3JCTixnQkFEcUIsRUFFckIsVUFGcUIsQ0FEbkI7QUFEK0MsR0FBTDtBQUFBLENBQWxELEMsQ0FRQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1PLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQUcsaUJBQU1DLEtBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQyxZQUFBQSxJQURlLEdBQ3dDRCxLQUR4QyxDQUNmQyxJQURlLEVBQ1RDLEtBRFMsR0FDd0NGLEtBRHhDLENBQ1RFLEtBRFMsRUFDRlIsaUJBREUsR0FDd0NNLEtBRHhDLENBQ0ZOLGlCQURFLHlCQUN3Q00sS0FEeEMsQ0FDaUJHLGFBRGpCLEVBQ2lCQSxhQURqQixxQ0FDaUMsRUFEakMseUJBR3ZCO0FBQ0E7O0FBSnVCLDZDQU1oQjtBQUFBLGtCQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxrQkFBZ0JDLElBQWhCO0FBQUEscUJBQ0wsc0VBQVVKLElBQUksQ0FBQ0ssU0FBZixFQUE4QkQsSUFBOUIsR0FDR0QsUUFESCxFQUVHLENBQUNGLEtBQUssQ0FBQ0ssUUFBUCxHQUNDO0FBQ0UsZ0JBQUEsSUFBSSxFQUFDLGlCQURQO0FBRUUsZ0JBQUEsdUJBQXVCLEVBQUVkLHdCQUF3QixDQUFDQyxpQkFBRDtBQUZuRCxnQkFERCxHQUtHLElBUE4sRUFRRyxDQUFDUSxLQUFLLENBQUNLLFFBQVAsR0FDR0osYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSx1QkFDdEI7QUFDRSxrQkFBQSxHQUFHLEVBQUVBLE1BRFA7QUFFRSxrQkFBQSxLQUFLLE1BRlA7QUFHRSxrQkFBQSxJQUFJLEVBQUMsaUJBSFA7QUFJRSxrQkFBQSxHQUFHLEVBQUUsNkJBQ0gscUJBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx3QkFBckIsRUFBK0NILE1BQS9DLENBREc7QUFKUCxrQkFEc0I7QUFBQSxlQUF4QixDQURILEdBV0csSUFuQk4sQ0FESztBQUFBLGFBTmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCVixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O2VBK0JlQSxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhdGhKb2luLCBtYWtlUGF0aEFic29sdXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IFJFR0VYX0ZPUl9TQ1JJUFQgPSAvPChcXC8pPyhzY3JpcHQpL2dpXG5cbmNvbnN0IGdlbmVyYXRlUm91dGVJbmZvcm1hdGlvbiA9IGVtYmVkZGVkUm91dGVJbmZvID0+ICh7XG4gIF9faHRtbDogYFxuICAgIHdpbmRvdy5fX3JvdXRlSW5mbyA9ICR7SlNPTi5zdHJpbmdpZnkoZW1iZWRkZWRSb3V0ZUluZm8pLnJlcGxhY2UoXG4gICAgICBSRUdFWF9GT1JfU0NSSVBULFxuICAgICAgJzxcIitcIiQxJDInXG4gICAgKX07YCxcbn0pXG5cbi8vIE5vdCBvbmx5IGRvIHdlIHBhc3MgcmVhY3QtaGVsbWV0IGF0dHJpYnV0ZXMgYW5kIHRoZSBhcHAuanMgaGVyZSwgYnV0XG4vLyB3ZSBhbHNvIG5lZWQgdG8gIGhhcmQgY29kZSBzaXRlIHByb3BzIGFuZCByb3V0ZSBwcm9wcyBpbnRvIHRoZSBwYWdlIHRvXG4vLyBwcmV2ZW50IGZsYXNoaW5nIHdoZW4gcmVhY3QgbW91bnRzIG9udG8gdGhlIEhUTUwuXG5jb25zdCBtYWtlQm9keVdpdGhNZXRhID0gYXN5bmMgc3RhdGUgPT4ge1xuICBjb25zdCB7IGhlYWQsIHJvdXRlLCBlbWJlZGRlZFJvdXRlSW5mbywgY2xpZW50U2NyaXB0cyA9IFtdIH0gPSBzdGF0ZVxuXG4gIC8vIFRoaXMgZW1iZWRkZWRSb3V0ZUluZm8gd2lsbCBiZSBpbmxpbmVkIGludG8gdGhlIEhUTUwgZm9yIHRoaXMgcm91dGUuXG4gIC8vIEl0IHNob3VsZCBvbmx5IGluY2x1ZGUgdGhlIGZ1bGwgcHJvcHMsIG5vdCB0aGUgcGFydGlhbHMuXG5cbiAgcmV0dXJuICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgICA8Ym9keSB7Li4uaGVhZC5ib2R5UHJvcHN9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHshcm91dGUucmVkaXJlY3QgPyAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17Z2VuZXJhdGVSb3V0ZUluZm9ybWF0aW9uKGVtYmVkZGVkUm91dGVJbmZvKX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFyb3V0ZS5yZWRpcmVjdFxuICAgICAgICA/IGNsaWVudFNjcmlwdHMubWFwKHNjcmlwdCA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17c2NyaXB0fVxuICAgICAgICAgICAgICBkZWZlclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICAgICAgc3JjPXttYWtlUGF0aEFic29sdXRlKFxuICAgICAgICAgICAgICAgIHBhdGhKb2luKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19BU1NFVFNfUEFUSCwgc2NyaXB0KVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICA6IG51bGx9XG4gICAgPC9ib2R5PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VCb2R5V2l0aE1ldGFcbiJdfQ==