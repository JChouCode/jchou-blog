"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _os = _interopRequireDefault(require("os"));

var _child_process = require("child_process");

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("../utils");

var _fetchSiteData = _interopRequireDefault(require("./fetchSiteData"));

var _fetchRoutes = _interopRequireDefault(require("./fetchRoutes"));

var _plugins = _interopRequireDefault(require("./plugins"));

var cores = Math.max(_os["default"].cpus().length, 1);

var _default =
/*#__PURE__*/
function () {
  var _exportRoutes = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fetchSiteData["default"])(state);

          case 2:
            state = _context.sent;
            _context.next = 5;
            return (0, _fetchRoutes["default"])(state);

          case 5:
            state = _context.sent;
            _context.next = 8;
            return buildHTML(state);

          case 8:
            state = _context.sent;
            _context.next = 11;
            return _plugins["default"].afterExport(state);

          case 11:
            state = _context.sent;
            return _context.abrupt("return", state);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function exportRoutes(_x) {
    return _exportRoutes.apply(this, arguments);
  }

  return exportRoutes;
}();

exports["default"] = _default;

function buildHTML(_x2) {
  return _buildHTML.apply(this, arguments);
}

function _buildHTML() {
  _buildHTML = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(state) {
    var routes, _state$config, paths, maxThreads, threads, htmlProgress, exporters, i, exporterRoutes;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            routes = state.routes, _state$config = state.config, paths = _state$config.paths, maxThreads = _state$config.maxThreads;
            (0, _utils.time)(_chalk["default"].green("[\u2713] HTML Exported")); // in case of an absolute path for DIST we must tell node to load the modules
            // from our project root

            if (!paths.DIST.startsWith(paths.ROOT)) {
              process.env.NODE_PATH = paths.NODE_MODULES;

              require('module').Module._initPaths();
            } // Single threaded export


            if (!(maxThreads <= 1)) {
              _context2.next = 9;
              break;
            }

            console.log('Exporting HTML...');
            _context2.next = 7;
            return require('./exportRoutes.sync')["default"](state);

          case 7:
            _context2.next = 18;
            break;

          case 9:
            // Multi-threaded export
            threads = Math.min(cores, maxThreads);
            htmlProgress = (0, _utils.progress)(routes.length);
            console.log("Exporting HTML across ".concat(threads, " threads..."));
            exporters = [];

            for (i = 0; i < threads; i++) {
              exporters.push((0, _child_process.fork)(require.resolve('./exportRoutes.threaded'), [], {
                env: (0, _objectSpread2["default"])({}, process.env, {
                  REACT_STATIC_THREAD: 'true'
                }),
                stdio: 'inherit'
              }));
            }

            exporterRoutes = exporters.map(function () {
              return [];
            });
            routes.forEach(function (route, i) {
              exporterRoutes[i % exporterRoutes.length].push(route);
            });
            _context2.next = 18;
            return Promise.all(exporters.map(function (exporter, i) {
              var routes = exporterRoutes[i];
              return new Promise(function (resolve, reject) {
                exporter.send((0, _objectSpread2["default"])({}, state, {
                  routes: routes
                }));
                exporter.on('message', function (_ref) {
                  var type = _ref.type,
                      payload = _ref.payload;

                  if (type === 'error') {
                    reject(payload);
                  }

                  if (type === 'log') {
                    var _console;

                    (_console = console).log.apply(_console, (0, _toConsumableArray2["default"])(payload));
                  }

                  if (type === 'tick') {
                    htmlProgress.tick();
                  }

                  if (type === 'done') {
                    resolve();
                  }
                });
              });
            }));

          case 18:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] HTML Exported"));
            return _context2.abrupt("return", state);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _buildHTML.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0Um91dGVzLmpzIl0sIm5hbWVzIjpbImNvcmVzIiwiTWF0aCIsIm1heCIsIk9TIiwiY3B1cyIsImxlbmd0aCIsInN0YXRlIiwiYnVpbGRIVE1MIiwicGx1Z2lucyIsImFmdGVyRXhwb3J0IiwiZXhwb3J0Um91dGVzIiwicm91dGVzIiwiY29uZmlnIiwicGF0aHMiLCJtYXhUaHJlYWRzIiwiY2hhbGsiLCJncmVlbiIsIkRJU1QiLCJzdGFydHNXaXRoIiwiUk9PVCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1BBVEgiLCJOT0RFX01PRFVMRVMiLCJyZXF1aXJlIiwiTW9kdWxlIiwiX2luaXRQYXRocyIsImNvbnNvbGUiLCJsb2ciLCJ0aHJlYWRzIiwibWluIiwiaHRtbFByb2dyZXNzIiwiZXhwb3J0ZXJzIiwiaSIsInB1c2giLCJyZXNvbHZlIiwiUkVBQ1RfU1RBVElDX1RIUkVBRCIsInN0ZGlvIiwiZXhwb3J0ZXJSb3V0ZXMiLCJtYXAiLCJmb3JFYWNoIiwicm91dGUiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0ZXIiLCJyZWplY3QiLCJzZW5kIiwib24iLCJ0eXBlIiwicGF5bG9hZCIsInRpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsZUFBR0MsSUFBSCxHQUFVQyxNQUFuQixFQUEyQixDQUEzQixDQUFkOzs7Ozs7OytCQUVnQixpQkFBNEJDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBLCtCQUFjQSxLQUFkLENBREE7O0FBQUE7QUFDZEEsWUFBQUEsS0FEYztBQUFBO0FBQUEsbUJBRUEsNkJBQVlBLEtBQVosQ0FGQTs7QUFBQTtBQUVkQSxZQUFBQSxLQUZjO0FBQUE7QUFBQSxtQkFHQUMsU0FBUyxDQUFDRCxLQUFELENB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QU5BO0FBRkY7QUFJQWlDLGdCQUFBQSxRQUFRLENBQUNHLEVBQVQsQ0FBWSxTQUFaLEVBQXVCLGdCQUF1QjtBQUFBLHNCQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsc0JBQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDNUMsc0JBQUlELElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCSCxvQkFBQUEsTUFBTSxDQUFDSSxPQUFELENBQU47QUFDRDs7QUFDRCxzQkFBSUQsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFBQTs7QUFDbEIsZ0NBQUFyQixPQUFPLEVBQUNDLEdBQVIscURBQWVxQixPQUFmO0FBQ0Q7O0FBQ0Qsc0JBQUlELElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CakIsb0JBQUFBLFlBQVksQ0FBQ21CLElBQWI7QUFDRDs7QUFDRCxzQkFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJiLG9CQUFBQSxPQUFPO0FBQ1I7QUFDRixpQkFiRDtBQWNELGVBbkJNLENBQVA7QUFvQkQsYUF0QkQsQ0FESSxDQTdDVjs7QUFBQTtBQXdFRSxnQ0FBUXBCLGtCQUFNQyxLQUFOLENBQVksd0JBQVosQ0FBUjtBQXhFRiw4Q0EwRVNWLEtBMUVUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT1MgZnJvbSAnb3MnXG5pbXBvcnQgeyBmb3JrIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcblxuaW1wb3J0IHsgcHJvZ3Jlc3MsIHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBmZXRjaFNpdGVEYXRhIGZyb20gJy4vZmV0Y2hTaXRlRGF0YSdcbmltcG9ydCBmZXRjaFJvdXRlcyBmcm9tICcuL2ZldGNoUm91dGVzJ1xuaW1wb3J0IHBsdWdpbnMgZnJvbSAnLi9wbHVnaW5zJ1xuXG5jb25zdCBjb3JlcyA9IE1hdGgubWF4KE9TLmNwdXMoKS5sZW5ndGgsIDEpXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBleHBvcnRSb3V0ZXMoc3RhdGUpIHtcbiAgc3RhdGUgPSBhd2FpdCBmZXRjaFNpdGVEYXRhKHN0YXRlKVxuICBzdGF0ZSA9IGF3YWl0IGZldGNoUm91dGVzKHN0YXRlKVxuICBzdGF0ZSA9IGF3YWl0IGJ1aWxkSFRNTChzdGF0ZSlcbiAgc3RhdGUgPSBhd2FpdCBwbHVnaW5zLmFmdGVyRXhwb3J0KHN0YXRlKVxuICByZXR1cm4gc3RhdGVcbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkSFRNTChzdGF0ZSkge1xuICBjb25zdCB7XG4gICAgcm91dGVzLFxuICAgIGNvbmZpZzogeyBwYXRocywgbWF4VGhyZWFkcyB9LFxuICB9ID0gc3RhdGVcblxuICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gSFRNTCBFeHBvcnRlZCcpKVxuXG4gIC8vIGluIGNhc2Ugb2YgYW4gYWJzb2x1dGUgcGF0aCBmb3IgRElTVCB3ZSBtdXN0IHRlbGwgbm9kZSB0byBsb2FkIHRoZSBtb2R1bGVzXG4gIC8vIGZyb20gb3VyIHByb2plY3Qgcm9vdFxuICBpZiAoIXBhdGhzLkRJU1Quc3RhcnRzV2l0aChwYXRocy5ST09UKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfUEFUSCA9IHBhdGhzLk5PREVfTU9EVUxFU1xuICAgIHJlcXVpcmUoJ21vZHVsZScpLk1vZHVsZS5faW5pdFBhdGhzKClcbiAgfVxuXG4gIC8vIFNpbmdsZSB0aHJlYWRlZCBleHBvcnRcbiAgaWYgKG1heFRocmVhZHMgPD0gMSkge1xuICAgIGNvbnNvbGUubG9nKCdFeHBvcnRpbmcgSFRNTC4uLicpXG4gICAgYXdhaXQgcmVxdWlyZSgnLi9leHBvcnRSb3V0ZXMuc3luYycpLmRlZmF1bHQoc3RhdGUpXG4gIH0gZWxzZSB7XG4gICAgLy8gTXVsdGktdGhyZWFkZWQgZXhwb3J0XG4gICAgY29uc3QgdGhyZWFkcyA9IE1hdGgubWluKGNvcmVzLCBtYXhUaHJlYWRzKVxuICAgIGNvbnN0IGh0bWxQcm9ncmVzcyA9IHByb2dyZXNzKHJvdXRlcy5sZW5ndGgpXG5cbiAgICBjb25zb2xlLmxvZyhgRXhwb3J0aW5nIEhUTUwgYWNyb3NzICR7dGhyZWFkc30gdGhyZWFkcy4uLmApXG5cbiAgICBjb25zdCBleHBvcnRlcnMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhyZWFkczsgaSsrKSB7XG4gICAgICBleHBvcnRlcnMucHVzaChcbiAgICAgICAgZm9yayhyZXF1aXJlLnJlc29sdmUoJy4vZXhwb3J0Um91dGVzLnRocmVhZGVkJyksIFtdLCB7XG4gICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICAuLi5wcm9jZXNzLmVudixcbiAgICAgICAgICAgIFJFQUNUX1NUQVRJQ19USFJFQUQ6ICd0cnVlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0ZGlvOiAnaW5oZXJpdCcsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0ZXJSb3V0ZXMgPSBleHBvcnRlcnMubWFwKCgpID0+IFtdKVxuXG4gICAgcm91dGVzLmZvckVhY2goKHJvdXRlLCBpKSA9PiB7XG4gICAgICBleHBvcnRlclJvdXRlc1tpICUgZXhwb3J0ZXJSb3V0ZXMubGVuZ3RoXS5wdXNoKHJvdXRlKVxuICAgIH0pXG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGV4cG9ydGVycy5tYXAoKGV4cG9ydGVyLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IGV4cG9ydGVyUm91dGVzW2ldXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgZXhwb3J0ZXIuc2VuZCh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHJvdXRlcyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGV4cG9ydGVyLm9uKCdtZXNzYWdlJywgKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICByZWplY3QocGF5bG9hZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbG9nJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5wYXlsb2FkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0aWNrJykge1xuICAgICAgICAgICAgICBodG1sUHJvZ3Jlc3MudGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBIVE1MIEV4cG9ydGVkJykpXG5cbiAgcmV0dXJuIHN0YXRlXG59XG4iXX0=