"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _exportRoutes = _interopRequireDefault(require("../static/exportRoutes"));

var _getRoutes = _interopRequireDefault(require("../static/getRoutes"));

var _getConfig = _interopRequireDefault(require("../static/getConfig"));

var _extractTemplates = _interopRequireDefault(require("../static/extractTemplates"));

var _clientStats = require("../static/clientStats");

//
var _default =
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var state,
      _state,
      debug,
      isBuildCommand,
      staging,
      incremental,
      _args = arguments;

  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          state = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          _state = state, debug = _state.debug, isBuildCommand = _state.isBuildCommand, staging = _state.staging, incremental = _state.incremental; // ensure ENV variables are set

          if (typeof process.env.NODE_ENV === 'undefined' && !debug) {
            process.env.NODE_ENV = 'production';
          }

          process.env.REACT_STATIC_ENV = 'production';
          process.env.BABEL_ENV = 'production';

          if (incremental) {
            process.env.REACT_STATIC_INCREMENTAL = 'true';
          }

          state.stage = 'prod';

          if (!isBuildCommand) {
            console.log("Exporting application for ".concat(staging ? 'Staging' : 'Production', "..."));
            console.log('');
          } // Allow config location to be overriden


          if (isBuildCommand) {
            _context.next = 18;
            break;
          }

          _context.next = 11;
          return (0, _getConfig["default"])(state);

        case 11:
          state = _context.sent;
          _context.next = 14;
          return (0, _getRoutes["default"])(state);

        case 14:
          state = _context.sent;
          _context.next = 17;
          return (0, _extractTemplates["default"])(state);

        case 17:
          state = _context.sent;

        case 18:
          if (state.routes) {
            _context.next = 22;
            break;
          }

          _context.next = 21;
          return (0, _getRoutes["default"])(state);

        case 21:
          state = _context.sent;

        case 22:
          _context.next = 24;
          return (0, _clientStats.importClientStats)(state);

        case 24:
          state = _context.sent;
          _context.next = 27;
          return (0, _exportRoutes["default"])(state);

        case 27:
          state = _context.sent;
          console.log("\nYour app is now exported! Here's what we suggest doing next:\n".concat(staging ? "\n- Test your app locally\n  - ".concat(_chalk["default"].green('serve dist -p 3000'), " (or your preferred static server utility)") : "\n- Upload your 'dist' directory to your favorite static host! We recommend using Netlify:\n  - ".concat(_chalk["default"].green('npx netlify-cli deploy')), "\n- Analyze your app's webpack bundles\n  - ").concat(_chalk["default"].green('react-static bundle --analyze'), "\n"));
          return _context.abrupt("return", state);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9leHBvcnQuanMiXSwibmFtZXMiOlsic3RhdGUiLCJkZWJ1ZyIsImlzQnVpbGRDb21tYW5kIiwic3RhZ2luZyIsImluY3JlbWVudGFsIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUkVBQ1RfU1RBVElDX0VOViIsIkJBQkVMX0VOViIsIlJFQUNUX1NUQVRJQ19JTkNSRU1FTlRBTCIsInN0YWdlIiwiY29uc29sZSIsImxvZyIsInJvdXRlcyIsImNoYWxrIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFMQTs7Ozs7NkJBT2U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPQSxVQUFBQSxLQUFQLDJEQUFlLEVBQWY7QUFBQSxtQkFDMkNBLEtBRDNDLEVBQ0xDLEtBREssVUFDTEEsS0FESyxFQUNFQyxjQURGLFVBQ0VBLGNBREYsRUFDa0JDLE9BRGxCLFVBQ2tCQSxPQURsQixFQUMyQkMsV0FEM0IsVUFDMkJBLFdBRDNCLEVBRWI7O0FBQ0EsY0FBSSxPQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBbkIsS0FBZ0MsV0FBaEMsSUFBK0MsQ0FBQ04sS0FBcEQsRUFBMkQ7QUFDekRJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEdBQXVCLFlBQXZCO0FBQ0Q7O0FBRURGLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxnQkFBWixHQUErQixZQUEvQjtBQUNBSCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsU0FBWixHQUF3QixZQUF4Qjs7QUFFQSxjQUFJTCxXQUFKLEVBQWlCO0FBQ2ZDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSx3QkFBWixHQUF1QyxNQUF2QztBQUNEOztBQUVEVixVQUFBQSxLQUFLLENBQUNXLEtBQU4sR0FBYyxNQUFkOztBQUVBLGNBQUksQ0FBQ1QsY0FBTCxFQUFxQjtBQUNuQlUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLHFDQUMrQlYsT0FBTyxHQUFHLFNBQUgsR0FBZSxZQURyRDtBQUdBUyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFaO0FBQ0QsV0FyQlksQ0F1QmI7OztBQXZCYSxjQXdCUlgsY0F4QlE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkF5QkcsMkJBQVVGLEtBQVYsQ0F6Qkg7O0FBQUE7QUF5QlhBLFVBQUFBLEtBekJXO0FBQUE7QUFBQSxpQkEwQkcsMkJBQVVBLEtBQVYsQ0ExQkg7O0FBQUE7QUEwQlhBLFVBQUFBLEtBMUJXO0FBQUE7QUFBQSxpQkEyQkcsa0NBQWlCQSxLQUFqQixDQTNCSDs7QUFBQTtBQTJCWEEsVUFBQUEsS0EzQlc7O0FBQUE7QUFBQSxjQThCUkEsS0FBSyxDQUFDYyxNQTlCRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQStCRywyQkFBVWQsS0FBVixDQS9CSDs7QUFBQTtBQStCWEEsVUFBQUEsS0EvQlc7O0FBQUE7QUFBQTtBQUFBLGlCQWtDQyxvQ0FBa0JBLEtBQWxCLENBbENEOztBQUFBO0FBa0NiQSxVQUFBQSxLQWxDYTtBQUFBO0FBQUEsaUJBbUNDLDhCQUFhQSxLQUFiLENBbkNEOztBQUFBO0FBbUNiQSxVQUFBQSxLQW5DYTtBQXFDYlksVUFBQUEsT0FBTyxDQUFDQyxHQUFSLDJFQUdBVixPQUFPLDRDQUdIWSxrQkFBTUMsS0FBTixDQUNGLG9CQURFLENBSEcsNEpBUUhELGtCQUFNQyxLQUFOLENBQVksd0JBQVosQ0FSRyxDQUhQLHlEQWNJRCxrQkFBTUMsS0FBTixDQUFZLCtCQUFaLENBZEo7QUFyQ2EsMkNBc0ROaEIsS0F0RE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbi8vXG5pbXBvcnQgZXhwb3J0Um91dGVzIGZyb20gJy4uL3N0YXRpYy9leHBvcnRSb3V0ZXMnXG5pbXBvcnQgZ2V0Um91dGVzIGZyb20gJy4uL3N0YXRpYy9nZXRSb3V0ZXMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJy4uL3N0YXRpYy9nZXRDb25maWcnXG5pbXBvcnQgZXh0cmFjdFRlbXBsYXRlcyBmcm9tICcuLi9zdGF0aWMvZXh0cmFjdFRlbXBsYXRlcydcbmltcG9ydCB7IGltcG9ydENsaWVudFN0YXRzIH0gZnJvbSAnLi4vc3RhdGljL2NsaWVudFN0YXRzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoc3RhdGUgPSB7fSkgPT4ge1xuICBjb25zdCB7IGRlYnVnLCBpc0J1aWxkQ29tbWFuZCwgc3RhZ2luZywgaW5jcmVtZW50YWwgfSA9IHN0YXRlXG4gIC8vIGVuc3VyZSBFTlYgdmFyaWFibGVzIGFyZSBzZXRcbiAgaWYgKHR5cGVvZiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3VuZGVmaW5lZCcgJiYgIWRlYnVnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSAncHJvZHVjdGlvbidcbiAgfVxuXG4gIHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPSAncHJvZHVjdGlvbidcbiAgcHJvY2Vzcy5lbnYuQkFCRUxfRU5WID0gJ3Byb2R1Y3Rpb24nXG5cbiAgaWYgKGluY3JlbWVudGFsKSB7XG4gICAgcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0lOQ1JFTUVOVEFMID0gJ3RydWUnXG4gIH1cblxuICBzdGF0ZS5zdGFnZSA9ICdwcm9kJ1xuXG4gIGlmICghaXNCdWlsZENvbW1hbmQpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBFeHBvcnRpbmcgYXBwbGljYXRpb24gZm9yICR7c3RhZ2luZyA/ICdTdGFnaW5nJyA6ICdQcm9kdWN0aW9uJ30uLi5gXG4gICAgKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9XG5cbiAgLy8gQWxsb3cgY29uZmlnIGxvY2F0aW9uIHRvIGJlIG92ZXJyaWRlblxuICBpZiAoIWlzQnVpbGRDb21tYW5kKSB7XG4gICAgc3RhdGUgPSBhd2FpdCBnZXRDb25maWcoc3RhdGUpXG4gICAgc3RhdGUgPSBhd2FpdCBnZXRSb3V0ZXMoc3RhdGUpXG4gICAgc3RhdGUgPSBhd2FpdCBleHRyYWN0VGVtcGxhdGVzKHN0YXRlKVxuICB9XG5cbiAgaWYgKCFzdGF0ZS5yb3V0ZXMpIHtcbiAgICBzdGF0ZSA9IGF3YWl0IGdldFJvdXRlcyhzdGF0ZSlcbiAgfVxuXG4gIHN0YXRlID0gYXdhaXQgaW1wb3J0Q2xpZW50U3RhdHMoc3RhdGUpXG4gIHN0YXRlID0gYXdhaXQgZXhwb3J0Um91dGVzKHN0YXRlKVxuXG4gIGNvbnNvbGUubG9nKGBcbllvdXIgYXBwIGlzIG5vdyBleHBvcnRlZCEgSGVyZSdzIHdoYXQgd2Ugc3VnZ2VzdCBkb2luZyBuZXh0OlxuJHtcbiAgc3RhZ2luZ1xuICAgID8gYFxuLSBUZXN0IHlvdXIgYXBwIGxvY2FsbHlcbiAgLSAke2NoYWxrLmdyZWVuKFxuICAgICdzZXJ2ZSBkaXN0IC1wIDMwMDAnXG4gICl9IChvciB5b3VyIHByZWZlcnJlZCBzdGF0aWMgc2VydmVyIHV0aWxpdHkpYFxuICAgIDogYFxuLSBVcGxvYWQgeW91ciAnZGlzdCcgZGlyZWN0b3J5IHRvIHlvdXIgZmF2b3JpdGUgc3RhdGljIGhvc3QhIFdlIHJlY29tbWVuZCB1c2luZyBOZXRsaWZ5OlxuICAtICR7Y2hhbGsuZ3JlZW4oJ25weCBuZXRsaWZ5LWNsaSBkZXBsb3knKX1gXG59XG4tIEFuYWx5emUgeW91ciBhcHAncyB3ZWJwYWNrIGJ1bmRsZXNcbiAgLSAke2NoYWxrLmdyZWVuKCdyZWFjdC1zdGF0aWMgYnVuZGxlIC0tYW5hbHl6ZScpfVxuYClcblxuICByZXR1cm4gc3RhdGVcbn1cbiJdfQ==