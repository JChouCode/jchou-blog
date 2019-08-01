"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Root;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

//
function Root(_ref) {
  var children = _ref.children;

  var ResolvedRoot = _react["default"].useMemo(function () {
    return _.plugins.Root(function (_ref2) {
      var children = _ref2.children;
      return children;
    });
  }, [_.plugins]);

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  _react["default"].useEffect(function () {
    if (module && module.hot) {
      var hotReloadHandler = function hotReloadHandler(status) {
        if (status === 'idle') {
          setError(null);
        }
      };

      module.hot.addStatusHandler(hotReloadHandler);
      return function () {
        module.hot.removeStatusHandler(hotReloadHandler);
      };
    }
  });

  return _react["default"].createElement(Catch, {
    onCatch: setError
  }, error ? _react["default"].createElement("pre", {
    style: {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: '#222',
      color: 'white',
      margin: 0,
      padding: '1rem',
      overflow: 'scroll',
      fontSize: '14px'
    }
  }, "An internal error occured!\n\n".concat(process.env.NODE_ENV === 'production' ? 'Please see the console for more details.' : error.stack, "\n          ")) : _react["default"].createElement(ResolvedRoot, null, children));
}

var Catch =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Catch, _React$Component);

  function Catch() {
    (0, _classCallCheck2["default"])(this, Catch);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Catch).apply(this, arguments));
  }

  (0, _createClass2["default"])(Catch, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.props.onCatch(error);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Catch;
}(_react["default"].Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2NvbXBvbmVudHMvUm9vdC5qcyJdLCJuYW1lcyI6WyJSb290IiwiY2hpbGRyZW4iLCJSZXNvbHZlZFJvb3QiLCJSZWFjdCIsInVzZU1lbW8iLCJwbHVnaW5zIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwibW9kdWxlIiwiaG90IiwiaG90UmVsb2FkSGFuZGxlciIsInN0YXR1cyIsImFkZFN0YXR1c0hhbmRsZXIiLCJyZW1vdmVTdGF0dXNIYW5kbGVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwibWFyZ2luIiwicGFkZGluZyIsIm92ZXJmbG93IiwiZm9udFNpemUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJzdGFjayIsIkNhdGNoIiwicHJvcHMiLCJvbkNhdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFEQTtBQUdlLFNBQVNBLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ3pDLE1BQU1DLFlBQVksR0FBR0Msa0JBQU1DLE9BQU4sQ0FDbkI7QUFBQSxXQUFNQyxVQUFRTCxJQUFSLENBQWE7QUFBQSxVQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxhQUFrQkEsUUFBbEI7QUFBQSxLQUFiLENBQU47QUFBQSxHQURtQixFQUVuQixDQUFDSSxTQUFELENBRm1CLENBQXJCOztBQUR5Qyx3QkFNZkYsa0JBQU1HLFFBQU4sQ0FBZSxJQUFmLENBTmU7QUFBQTtBQUFBLE1BTWxDQyxLQU5rQztBQUFBLE1BTTNCQyxRQU4yQjs7QUFRekNMLG9CQUFNTSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLEdBQXJCLEVBQTBCO0FBQ3hCLFVBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsTUFBTSxFQUFJO0FBQ2pDLFlBQUlBLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCTCxVQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRixPQUpEOztBQUtBRSxNQUFBQSxNQUFNLENBQUNDLEdBQVAsQ0FBV0csZ0JBQVgsQ0FBNEJGLGdCQUE1QjtBQUNBLGFBQU8sWUFBTTtBQUNYRixRQUFBQSxNQUFNLENBQUNDLEdBQVAsQ0FBV0ksbUJBQVgsQ0FBK0JILGdCQUEvQjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBWkQ7O0FBY0EsU0FDRSxnQ0FBQyxLQUFEO0FBQU8sSUFBQSxPQUFPLEVBQUVKO0FBQWhCLEtBQ0dELEtBQUssR0FDSjtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQ0xTLE1BQUFBLE9BQU8sRUFBRSxPQURKO0FBRUxDLE1BQUFBLFFBQVEsRUFBRSxVQUZMO0FBR0xDLE1BQUFBLEdBQUcsRUFBRSxDQUhBO0FBSUxDLE1BQUFBLElBQUksRUFBRSxDQUpEO0FBS0xDLE1BQUFBLE1BQU0sRUFBRSxDQUxIO0FBTUxDLE1BQUFBLEtBQUssRUFBRSxDQU5GO0FBT0xDLE1BQUFBLFVBQVUsRUFBRSxNQVBQO0FBUUxDLE1BQUFBLEtBQUssRUFBRSxPQVJGO0FBU0xDLE1BQUFBLE1BQU0sRUFBRSxDQVRIO0FBVUxDLE1BQUFBLE9BQU8sRUFBRSxNQVZKO0FBV0xDLE1BQUFBLFFBQVEsRUFBRSxRQVhMO0FBWUxDLE1BQUFBLFFBQVEsRUFBRTtBQVpMO0FBRFQsNkNBbUJOQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixHQUNJLDBDQURKLEdBRUl2QixLQUFLLENBQUN3QixLQXJCSixrQkFESSxHQTJCSixnQ0FBQyxZQUFELFFBQWU5QixRQUFmLENBNUJKLENBREY7QUFpQ0Q7O0lBRUsrQixLOzs7Ozs7Ozs7Ozs7c0NBQ2N6QixLLEVBQU87QUFDdkIsV0FBSzBCLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQjNCLEtBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBSzBCLEtBQUwsQ0FBV2hDLFFBQWxCO0FBQ0Q7OztFQVBpQkUsa0JBQU1nQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9cbmltcG9ydCB7IHBsdWdpbnMgfSBmcm9tICcuLidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgUmVzb2x2ZWRSb290ID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBwbHVnaW5zLlJvb3QoKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW4pLFxuICAgIFtwbHVnaW5zXVxuICApXG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZHVsZSAmJiBtb2R1bGUuaG90KSB7XG4gICAgICBjb25zdCBob3RSZWxvYWRIYW5kbGVyID0gc3RhdHVzID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG4gICAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbW9kdWxlLmhvdC5hZGRTdGF0dXNIYW5kbGVyKGhvdFJlbG9hZEhhbmRsZXIpXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBtb2R1bGUuaG90LnJlbW92ZVN0YXR1c0hhbmRsZXIoaG90UmVsb2FkSGFuZGxlcilcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q2F0Y2ggb25DYXRjaD17c2V0RXJyb3J9PlxuICAgICAge2Vycm9yID8gKFxuICAgICAgICA8cHJlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjIyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2BBbiBpbnRlcm5hbCBlcnJvciBvY2N1cmVkIVxuXG4ke1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyAnUGxlYXNlIHNlZSB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLidcbiAgICA6IGVycm9yLnN0YWNrXG59XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9wcmU+XG4gICAgICApIDogKFxuICAgICAgICA8UmVzb2x2ZWRSb290PntjaGlsZHJlbn08L1Jlc29sdmVkUm9vdD5cbiAgICAgICl9XG4gICAgPC9DYXRjaD5cbiAgKVxufVxuXG5jbGFzcyBDYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNhdGNoKGVycm9yKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gIH1cbn1cbiJdfQ==