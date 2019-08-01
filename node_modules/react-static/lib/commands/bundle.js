"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _getRoutes = _interopRequireDefault(require("../static/getRoutes"));

var _generateBrowserPlugins = _interopRequireDefault(require("../static/generateBrowserPlugins"));

var _buildProductionBundles = _interopRequireDefault(require("../static/webpack/buildProductionBundles"));

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

var _extractTemplates = _interopRequireDefault(require("../static/extractTemplates"));

var _generateTemplates = _interopRequireDefault(require("../static/generateTemplates"));

var _cleanProjectFiles = _interopRequireDefault(require("../static/cleanProjectFiles"));

var _copyPublicFiles = _interopRequireDefault(require("../static/copyPublicFiles"));

var _buildState = require("../static/buildState");

//
var _default =
/*#__PURE__*/
function () {
  var _bundle = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var state,
        _state,
        staging,
        debug,
        analyze,
        isBuildCommand,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            _state = state, staging = _state.staging, debug = _state.debug, analyze = _state.analyze, isBuildCommand = _state.isBuildCommand; // ensure ENV variables are set

            if (typeof process.env.NODE_ENV === 'undefined' && !debug) {
              process.env.NODE_ENV = 'production';
            }

            process.env.REACT_STATIC_ENV = 'production';
            process.env.BABEL_ENV = 'production';
            state.stage = 'prod';
            console.log("Bundling application for ".concat(staging ? 'Staging' : 'Production', "..."));
            console.log('');
            _context.next = 10;
            return (0, _getConfig["default"])(state);

          case 10:
            state = _context.sent;
            _context.next = 13;
            return (0, _cleanProjectFiles["default"])(state);

          case 13:
            state = _context.sent;
            _context.next = 16;
            return (0, _generateBrowserPlugins["default"])(state);

          case 16:
            state = _context.sent;
            _context.next = 19;
            return (0, _getRoutes["default"])(state);

          case 19:
            state = _context.sent;
            _context.next = 22;
            return (0, _extractTemplates["default"])(state);

          case 22:
            state = _context.sent;
            _context.next = 25;
            return (0, _generateTemplates["default"])(state);

          case 25:
            state = _context.sent;
            _context.next = 28;
            return (0, _copyPublicFiles["default"])(state);

          case 28:
            state = _context.sent;
            _context.next = 31;
            return (0, _buildProductionBundles["default"])(state);

          case 31:
            state = _context.sent;
            _context.next = 34;
            return (0, _buildState.outputBuildState)(state);

          case 34:
            state = _context.sent;

            if (!analyze) {
              _context.next = 38;
              break;
            }

            _context.next = 38;
            return new Promise(function () {});

          case 38:
            if (!isBuildCommand) {
              console.log("\nYour app is now bundled! Here's what we suggest doing next:\n\n- Export your app in staging mode to test locally\n  - ".concat(_chalk["default"].green('react-static export --stage'), "\n- Export your app in production mode for distrubution\n  - ").concat(_chalk["default"].green('react-static export'), "\n- Analyze your app's webpack bundles\n  - ").concat(_chalk["default"].green('react-static bundle --analyze'), "\n"));
            }

            return _context.abrupt("return", state);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function bundle() {
    return _bundle.apply(this, arguments);
  }

  return bundle;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9idW5kbGUuanMiXSwibmFtZXMiOlsic3RhdGUiLCJzdGFnaW5nIiwiZGVidWciLCJhbmFseXplIiwiaXNCdWlsZENvbW1hbmQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJSRUFDVF9TVEFUSUNfRU5WIiwiQkFCRUxfRU5WIiwic3RhZ2UiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImNoYWxrIiwiZ3JlZW4iLCJidW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFUQTs7Ozs7OytCQVdnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNCQSxZQUFBQSxLQUF0QiwyREFBOEIsRUFBOUI7QUFBQSxxQkFDc0NBLEtBRHRDLEVBQ05DLE9BRE0sVUFDTkEsT0FETSxFQUNHQyxLQURILFVBQ0dBLEtBREgsRUFDVUMsT0FEVixVQUNVQSxPQURWLEVBQ21CQyxjQURuQixVQUNtQkEsY0FEbkIsRUFFZDs7QUFDQSxnQkFBSSxPQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBbkIsS0FBZ0MsV0FBaEMsSUFBK0MsQ0FBQ0wsS0FBcEQsRUFBMkQ7QUFDekRHLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEdBQXVCLFlBQXZCO0FBQ0Q7O0FBQ0RGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxnQkFBWixHQUErQixZQUEvQjtBQUNBSCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsU0FBWixHQUF3QixZQUF4QjtBQUVBVCxZQUFBQSxLQUFLLENBQUNVLEtBQU4sR0FBYyxNQUFkO0FBRUFDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixvQ0FDOEJYLE9BQU8sR0FBRyxTQUFILEdBQWUsWUFEcEQ7QUFHQVUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksRUFBWjtBQWRjO0FBQUEsbUJBZ0JBLDJCQUFVWixLQUFWLENBaEJBOztBQUFBO0FBZ0JkQSxZQUFBQSxLQWhCYztBQUFBO0FBQUEsbUJBaUJBLG1DQUFrQkEsS0FBbEIsQ0FqQkE7O0FBQUE7QUFpQmRBLFlBQUFBLEtBakJjO0FBQUE7QUFBQSxtQkFrQkEsd0NBQXVCQSxLQUF2QixDQWxCQTs7QUFBQTtBQWtCZEEsWUFBQUEsS0FsQmM7QUFBQTtBQUFBLG1CQW1CQSwyQkFBVUEsS0FBVixDQW5CQTs7QUFBQTtBQW1CZEEsWUFBQUEsS0FuQmM7QUFBQTtBQUFBLG1CQW9CQSxrQ0FBaUJBLEtBQWpCLENBcEJBOztBQUFBO0FBb0JkQSxZQUFBQSxLQXBCYztBQUFBO0FBQUEsbUJBcUJBLG1DQUFrQkEsS0FBbEIsQ0FyQkE7O0FBQUE7QUFxQmRBLFlBQUFBLEtBckJjO0FBQUE7QUFBQSxtQkFzQkEsaUNBQWdCQSxLQUFoQixDQXRCQTs7QUFBQTtBQXNCZEEsWUFBQUEsS0F0QmM7QUFBQTtBQUFBLG1CQXVCQSx3Q0FBdUJBLEtBQXZCLENBdkJBOztBQUFBO0FBdUJkQSxZQUFBQSxLQXZCYztBQUFBO0FBQUEsbUJBd0JBLGtDQUFpQkEsS0FBakIsQ0F4QkE7O0FBQUE7QUF3QmRBLFlBQUFBLEtBeEJjOztBQUFBLGlCQTBCVkcsT0ExQlU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkEyQk4sSUFBSVUsT0FBSixDQUFZLFlBQU0sQ0FBRSxDQUFwQixDQTNCTTs7QUFBQTtBQThCZCxnQkFBSSxDQUFDVCxjQUFMLEVBQXFCO0FBQ25CTyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsbUlBSUVFLGtCQUFNQyxLQUFOLENBQVksNkJBQVosQ0FKRiwwRUFNRUQsa0JBQU1DLEtBQU4sQ0FBWSxxQkFBWixDQU5GLHlEQVFFRCxrQkFBTUMsS0FBTixDQUFZLCtCQUFaLENBUkY7QUFVRDs7QUF6Q2EsNkNBMkNQZixLQTNDTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlZ0IsTTs7OztTQUFBQSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuLy9cbmltcG9ydCBnZXRSb3V0ZXMgZnJvbSAnLi4vc3RhdGljL2dldFJvdXRlcydcbmltcG9ydCBnZW5lcmF0ZUJyb3dzZXJQbHVnaW5zIGZyb20gJy4uL3N0YXRpYy9nZW5lcmF0ZUJyb3dzZXJQbHVnaW5zJ1xuaW1wb3J0IGJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMgZnJvbSAnLi4vc3RhdGljL3dlYnBhY2svYnVpbGRQcm9kdWN0aW9uQnVuZGxlcydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnLi4vc3RhdGljL2dldENvbmZpZydcbmltcG9ydCBleHRyYWN0VGVtcGxhdGVzIGZyb20gJy4uL3N0YXRpYy9leHRyYWN0VGVtcGxhdGVzJ1xuaW1wb3J0IGdlbmVyYXRlVGVtcGxhdGVzIGZyb20gJy4uL3N0YXRpYy9nZW5lcmF0ZVRlbXBsYXRlcydcbmltcG9ydCBjbGVhblByb2plY3RGaWxlcyBmcm9tICcuLi9zdGF0aWMvY2xlYW5Qcm9qZWN0RmlsZXMnXG5pbXBvcnQgY29weVB1YmxpY0ZpbGVzIGZyb20gJy4uL3N0YXRpYy9jb3B5UHVibGljRmlsZXMnXG5pbXBvcnQgeyBvdXRwdXRCdWlsZFN0YXRlIH0gZnJvbSAnLi4vc3RhdGljL2J1aWxkU3RhdGUnXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBidW5kbGUoc3RhdGUgPSB7fSkge1xuICBjb25zdCB7IHN0YWdpbmcsIGRlYnVnLCBhbmFseXplLCBpc0J1aWxkQ29tbWFuZCB9ID0gc3RhdGVcbiAgLy8gZW5zdXJlIEVOViB2YXJpYWJsZXMgYXJlIHNldFxuICBpZiAodHlwZW9mIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndW5kZWZpbmVkJyAmJiAhZGVidWcpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9ICdwcm9kdWN0aW9uJ1xuICB9XG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPSAncHJvZHVjdGlvbidcbiAgcHJvY2Vzcy5lbnYuQkFCRUxfRU5WID0gJ3Byb2R1Y3Rpb24nXG5cbiAgc3RhdGUuc3RhZ2UgPSAncHJvZCdcblxuICBjb25zb2xlLmxvZyhcbiAgICBgQnVuZGxpbmcgYXBwbGljYXRpb24gZm9yICR7c3RhZ2luZyA/ICdTdGFnaW5nJyA6ICdQcm9kdWN0aW9uJ30uLi5gXG4gIClcbiAgY29uc29sZS5sb2coJycpXG5cbiAgc3RhdGUgPSBhd2FpdCBnZXRDb25maWcoc3RhdGUpXG4gIHN0YXRlID0gYXdhaXQgY2xlYW5Qcm9qZWN0RmlsZXMoc3RhdGUpXG4gIHN0YXRlID0gYXdhaXQgZ2VuZXJhdGVCcm93c2VyUGx1Z2lucyhzdGF0ZSlcbiAgc3RhdGUgPSBhd2FpdCBnZXRSb3V0ZXMoc3RhdGUpXG4gIHN0YXRlID0gYXdhaXQgZXh0cmFjdFRlbXBsYXRlcyhzdGF0ZSlcbiAgc3RhdGUgPSBhd2FpdCBnZW5lcmF0ZVRlbXBsYXRlcyhzdGF0ZSlcbiAgc3RhdGUgPSBhd2FpdCBjb3B5UHVibGljRmlsZXMoc3RhdGUpXG4gIHN0YXRlID0gYXdhaXQgYnVpbGRQcm9kdWN0aW9uQnVuZGxlcyhzdGF0ZSlcbiAgc3RhdGUgPSBhd2FpdCBvdXRwdXRCdWlsZFN0YXRlKHN0YXRlKVxuXG4gIGlmIChhbmFseXplKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKCkgPT4ge30pXG4gIH1cblxuICBpZiAoIWlzQnVpbGRDb21tYW5kKSB7XG4gICAgY29uc29sZS5sb2coYFxuWW91ciBhcHAgaXMgbm93IGJ1bmRsZWQhIEhlcmUncyB3aGF0IHdlIHN1Z2dlc3QgZG9pbmcgbmV4dDpcblxuLSBFeHBvcnQgeW91ciBhcHAgaW4gc3RhZ2luZyBtb2RlIHRvIHRlc3QgbG9jYWxseVxuICAtICR7Y2hhbGsuZ3JlZW4oJ3JlYWN0LXN0YXRpYyBleHBvcnQgLS1zdGFnZScpfVxuLSBFeHBvcnQgeW91ciBhcHAgaW4gcHJvZHVjdGlvbiBtb2RlIGZvciBkaXN0cnVidXRpb25cbiAgLSAke2NoYWxrLmdyZWVuKCdyZWFjdC1zdGF0aWMgZXhwb3J0Jyl9XG4tIEFuYWx5emUgeW91ciBhcHAncyB3ZWJwYWNrIGJ1bmRsZXNcbiAgLSAke2NoYWxrLmdyZWVuKCdyZWFjdC1zdGF0aWMgYnVuZGxlIC0tYW5hbHl6ZScpfVxuYClcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufSlcbiJdfQ==