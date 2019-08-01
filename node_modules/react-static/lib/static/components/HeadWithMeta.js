"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeHeadWithMeta;
exports.InlineStyle = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _plugins = _interopRequireDefault(require("../plugins"));

//
// import packagejson from '../../../package.json'
// const { version } = packagejson
var REGEX_FOR_STYLE_TAG = /<style>|<\/style>/gi;

var InlineStyle = function InlineStyle(_ref) {
  var clientCss = _ref.clientCss;
  return _react["default"].createElement("style", {
    key: "clientCss",
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: clientCss.toString().replace(REGEX_FOR_STYLE_TAG, '')
    }
  });
};

exports.InlineStyle = InlineStyle;

function makeHeadWithMeta(_x) {
  return _makeHeadWithMeta.apply(this, arguments);
}

function _makeHeadWithMeta() {
  _makeHeadWithMeta = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var head, route, clientScripts, config, clientStyleSheets, clientCss, pluginHeads;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = state.head, route = state.route, clientScripts = state.clientScripts, config = state.config, clientStyleSheets = state.clientStyleSheets, clientCss = state.clientCss;
            _context.next = 3;
            return _plugins["default"].headElements([], state);

          case 3:
            pluginHeads = _context.sent;
            return _context.abrupt("return", function (_ref2) {
              var children = _ref2.children,
                  rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
              var renderLinkCSS = !route.redirect && !config.inlineCss;
              var useHelmetTitle = head.title && head.title[0] && head.title[0].props.children !== '';

              var childrenArray = _react["default"].Children.toArray(children);

              if (useHelmetTitle) {
                head.title[0] = _react["default"].cloneElement(head.title[0], {
                  key: 'title'
                });
                childrenArray = childrenArray.filter(function (child) {
                  if (child.type === 'title') {
                    // Filter out the title of the Document in static.config.js
                    // if there is a helmet title on this route
                    return false;
                  }

                  return true;
                });
              }

              var childrenCSS = childrenArray.filter(function (child) {
                if (child.type === 'link' && child.props && child.props.rel === 'stylesheet') {
                  return true;
                }

                if (child.type === 'style') {
                  return true;
                }

                return false;
              });
              var childrenJS = childrenArray.filter(function (child) {
                return child.type === 'script';
              });
              childrenArray = childrenArray.filter(function (child) {
                if (child.type === 'link' && child.props && child.props.rel === 'stylesheet') {
                  return false;
                }

                if (child.type === 'style') {
                  return false;
                }

                if (child.type === 'script') {
                  return false;
                }

                return true;
              });
              return _react["default"].createElement("head", rest, _react["default"].createElement("meta", {
                name: "generator",
                content: "React Static"
              }), head.base, useHelmetTitle && head.title, head.meta, childrenJS, !route.redirect && clientScripts.map(function (script) {
                return _react["default"].createElement("link", {
                  key: "clientScript_".concat(script),
                  rel: "preload",
                  as: "script",
                  href: (0, _utils.makePathAbsolute)((0, _utils.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, script))
                });
              }), childrenCSS, renderLinkCSS && clientStyleSheets.reduce(function (memo, styleSheet) {
                var href = (0, _utils.makePathAbsolute)((0, _utils.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, styleSheet));
                return [].concat((0, _toConsumableArray2["default"])(memo), [_react["default"].createElement("link", {
                  key: "clientStyleSheetPreload_".concat(styleSheet),
                  rel: "preload",
                  as: "style",
                  href: href
                }), _react["default"].createElement("link", {
                  key: "clientStyleSheet_".concat(styleSheet),
                  rel: "stylesheet",
                  href: href
                })]);
              }, []), head.link, head.noscript, head.script, config.inlineCss && _react["default"].createElement(InlineStyle, {
                clientCss: clientCss
              }), head.style, pluginHeads, childrenArray);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeHeadWithMeta.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvY29tcG9uZW50cy9IZWFkV2l0aE1ldGEuanMiXSwibmFtZXMiOlsiUkVHRVhfRk9SX1NUWUxFX1RBRyIsIklubGluZVN0eWxlIiwiY2xpZW50Q3NzIiwiX19odG1sIiwidG9TdHJpbmciLCJyZXBsYWNlIiwibWFrZUhlYWRXaXRoTWV0YSIsInN0YXRlIiwiaGVhZCIsInJvdXRlIiwiY2xpZW50U2NyaXB0cyIsImNvbmZpZyIsImNsaWVudFN0eWxlU2hlZXRzIiwicGx1Z2lucyIsImhlYWRFbGVtZW50cyIsInBsdWdpbkhlYWRzIiwiY2hpbGRyZW4iLCJyZXN0IiwicmVuZGVyTGlua0NTUyIsInJlZGlyZWN0IiwiaW5saW5lQ3NzIiwidXNlSGVsbWV0VGl0bGUiLCJ0aXRsZSIsInByb3BzIiwiY2hpbGRyZW5BcnJheSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiY2xvbmVFbGVtZW50Iiwia2V5IiwiZmlsdGVyIiwiY2hpbGQiLCJ0eXBlIiwiY2hpbGRyZW5DU1MiLCJyZWwiLCJjaGlsZHJlbkpTIiwiYmFzZSIsIm1ldGEiLCJtYXAiLCJzY3JpcHQiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfU1RBVElDX0FTU0VUU19QQVRIIiwicmVkdWNlIiwibWVtbyIsInN0eWxlU2hlZXQiLCJocmVmIiwibGluayIsIm5vc2NyaXB0Iiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUZBO0FBR0E7QUFFQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHLHFCQUE1Qjs7QUFFTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFNBQ3pCO0FBQ0UsSUFBQSxHQUFHLEVBQUMsV0FETjtBQUVFLElBQUEsSUFBSSxFQUFDLFVBRlA7QUFHRSxJQUFBLHVCQUF1QixFQUFFO0FBQ3ZCQyxNQUFBQSxNQUFNLEVBQUVELFNBQVMs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LFVBQXRCLENBREw7QUFFRSxrQkFBQSxHQUFHLEVBQUMsWUFGTjtBQUdFLGtCQUFBLElBQUksRUFBRUM7QUFIUixrQkFSRjtBQWNELGVBbkJELEVBbUJHLEVBbkJILENBbkJKLEVBdUNHdEMsSUFBSSxDQUFDdUMsSUF2Q1IsRUF3Q0d2QyxJQUFJLENBQUN3QyxRQXhDUixFQXlDR3hDLElBQUksQ0FBQytCLE1BekNSLEVBMENHNUIsTUFBTSxDQUFDUyxTQUFQLElBQW9CLGdDQUFDLFdBQUQ7QUFBYSxnQkFBQSxTQUFTLEVBQUVsQjtBQUF4QixnQkExQ3ZCLEVBMkNHTSxJQUFJLENBQUN5QyxLQTNDUixFQTRDR2xDLFdBNUNILEVBNkNHUyxhQTdDSCxDQURGO0FBaURELGFBOUdZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IHsgcGF0aEpvaW4sIG1ha2VQYXRoQWJzb2x1dGUgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBwbHVnaW5zIGZyb20gJy4uL3BsdWdpbnMnXG4vLyBpbXBvcnQgcGFja2FnZWpzb24gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJ1xuXG4vLyBjb25zdCB7IHZlcnNpb24gfSA9IHBhY2thZ2Vqc29uXG5cbmNvbnN0IFJFR0VYX0ZPUl9TVFlMRV9UQUcgPSAvPHN0eWxlPnw8XFwvc3R5bGU+L2dpXG5cbmV4cG9ydCBjb25zdCBJbmxpbmVTdHlsZSA9ICh7IGNsaWVudENzcyB9KSA9PiAoXG4gIDxzdHlsZVxuICAgIGtleT1cImNsaWVudENzc1wiXG4gICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgX19odG1sOiBjbGllbnRDc3MudG9TdHJpbmcoKS5yZXBsYWNlKFJFR0VYX0ZPUl9TVFlMRV9UQUcsICcnKSxcbiAgICB9fVxuICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtYWtlSGVhZFdpdGhNZXRhKHN0YXRlKSB7XG4gIGNvbnN0IHtcbiAgICBoZWFkLFxuICAgIHJvdXRlLFxuICAgIGNsaWVudFNjcmlwdHMsXG4gICAgY29uZmlnLFxuICAgIGNsaWVudFN0eWxlU2hlZXRzLFxuICAgIGNsaWVudENzcyxcbiAgfSA9IHN0YXRlXG5cbiAgY29uc3QgcGx1Z2luSGVhZHMgPSBhd2FpdCBwbHVnaW5zLmhlYWRFbGVtZW50cyhbXSwgc3RhdGUpXG5cbiAgcmV0dXJuICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCByZW5kZXJMaW5rQ1NTID0gIXJvdXRlLnJlZGlyZWN0ICYmICFjb25maWcuaW5saW5lQ3NzXG5cbiAgICBjb25zdCB1c2VIZWxtZXRUaXRsZSA9XG4gICAgICBoZWFkLnRpdGxlICYmIGhlYWQudGl0bGVbMF0gJiYgaGVhZC50aXRsZVswXS5wcm9wcy5jaGlsZHJlbiAhPT0gJydcblxuICAgIGxldCBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilcblxuICAgIGlmICh1c2VIZWxtZXRUaXRsZSkge1xuICAgICAgaGVhZC50aXRsZVswXSA9IFJlYWN0LmNsb25lRWxlbWVudChoZWFkLnRpdGxlWzBdLCB7IGtleTogJ3RpdGxlJyB9KVxuICAgICAgY2hpbGRyZW5BcnJheSA9IGNoaWxkcmVuQXJyYXkuZmlsdGVyKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB0aXRsZSBvZiB0aGUgRG9jdW1lbnQgaW4gc3RhdGljLmNvbmZpZy5qc1xuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgaGVsbWV0IHRpdGxlIG9uIHRoaXMgcm91dGVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbkNTUyA9IGNoaWxkcmVuQXJyYXkuZmlsdGVyKGNoaWxkID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2hpbGQudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgIGNoaWxkLnByb3BzICYmXG4gICAgICAgIGNoaWxkLnByb3BzLnJlbCA9PT0gJ3N0eWxlc2hlZXQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gaWYgKGNoaWxkLnR5cGUgPT09ICdzdHlsZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBjb25zdCBjaGlsZHJlbkpTID0gY2hpbGRyZW5BcnJheS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQudHlwZSA9PT0gJ3NjcmlwdCcpXG4gICAgY2hpbGRyZW5BcnJheSA9IGNoaWxkcmVuQXJyYXkuZmlsdGVyKGNoaWxkID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2hpbGQudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgIGNoaWxkLnByb3BzICYmXG4gICAgICAgIGNoaWxkLnByb3BzLnJlbCA9PT0gJ3N0eWxlc2hlZXQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGlmIChjaGlsZC50eXBlID09PSAnc3R5bGUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBpZiAoY2hpbGQudHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWQgey4uLnJlc3R9PlxuICAgICAgICA8bWV0YSBuYW1lPVwiZ2VuZXJhdG9yXCIgY29udGVudD1cIlJlYWN0IFN0YXRpY1wiIC8+XG4gICAgICAgIHtoZWFkLmJhc2V9XG4gICAgICAgIHt1c2VIZWxtZXRUaXRsZSAmJiBoZWFkLnRpdGxlfVxuICAgICAgICB7aGVhZC5tZXRhfVxuICAgICAgICB7Y2hpbGRyZW5KU31cbiAgICAgICAgeyFyb3V0ZS5yZWRpcmVjdCAmJlxuICAgICAgICAgIGNsaWVudFNjcmlwdHMubWFwKHNjcmlwdCA9PiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBrZXk9e2BjbGllbnRTY3JpcHRfJHtzY3JpcHR9YH1cbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj17bWFrZVBhdGhBYnNvbHV0ZShcbiAgICAgICAgICAgICAgICBwYXRoSm9pbihwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgsIHNjcmlwdClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIHtjaGlsZHJlbkNTU31cbiAgICAgICAge3JlbmRlckxpbmtDU1MgJiZcbiAgICAgICAgICBjbGllbnRTdHlsZVNoZWV0cy5yZWR1Y2UoKG1lbW8sIHN0eWxlU2hlZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBtYWtlUGF0aEFic29sdXRlKFxuICAgICAgICAgICAgICBwYXRoSm9pbihwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgsIHN0eWxlU2hlZXQpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIC4uLm1lbW8sXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpZW50U3R5bGVTaGVldFByZWxvYWRfJHtzdHlsZVNoZWV0fWB9XG4gICAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpZW50U3R5bGVTaGVldF8ke3N0eWxlU2hlZXR9YH1cbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LCBbXSl9XG4gICAgICAgIHtoZWFkLmxpbmt9XG4gICAgICAgIHtoZWFkLm5vc2NyaXB0fVxuICAgICAgICB7aGVhZC5zY3JpcHR9XG4gICAgICAgIHtjb25maWcuaW5saW5lQ3NzICYmIDxJbmxpbmVTdHlsZSBjbGllbnRDc3M9e2NsaWVudENzc30gLz59XG4gICAgICAgIHtoZWFkLnN0eWxlfVxuICAgICAgICB7cGx1Z2luSGVhZHN9XG4gICAgICAgIHtjaGlsZHJlbkFycmF5fVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuIl19