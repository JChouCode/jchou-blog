"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildProductionBundles;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _webpack = _interopRequireDefault(require("webpack"));

var _chalk = _interopRequireDefault(require("chalk"));

var _makeWebpackConfig = _interopRequireDefault(require("./makeWebpackConfig"));

var _clientStats = require("../clientStats");

var _utils = require("../../utils");

var _plugins = _interopRequireDefault(require("../plugins"));

/* eslint-disable import/no-dynamic-require, react/no-danger, import/no-mutable-exports */
//
function buildProductionBundles(_x) {
  return _buildProductionBundles.apply(this, arguments);
}

function _buildProductionBundles() {
  _buildProductionBundles = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(state) {
    var allWebpackConfigs;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Build static pages and JSON
            console.log('Bundling App...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] App Bundled"));
            _context3.next = 4;
            return (0, _makeWebpackConfig["default"])(state);

          case 4:
            _context3.t0 = _context3.sent;
            _context3.next = 7;
            return (0, _makeWebpackConfig["default"])((0, _objectSpread2["default"])({}, state, {
              stage: 'node'
            }));

          case 7:
            _context3.t1 = _context3.sent;
            allWebpackConfigs = [_context3.t0, _context3.t1];
            _context3.next = 11;
            return new Promise(
            /*#__PURE__*/
            function () {
              var _ref = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(resolve, reject) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        (0, _webpack["default"])(allWebpackConfigs).run(
                        /*#__PURE__*/
                        function () {
                          var _ref2 = (0, _asyncToGenerator2["default"])(
                          /*#__PURE__*/
                          _regenerator["default"].mark(function _callee(err, stats) {
                            var _stats$stats, prodStats, nodeStats, checkBuildStats;

                            return _regenerator["default"].wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    checkBuildStats = function _ref3(stage, stageStats) {
                                      var buildErrors = stageStats.hasErrors();
                                      var buildWarnings = stageStats.hasWarnings();

                                      if (buildErrors || buildWarnings) {
                                        console.log(stageStats.toString({
                                          context: state.config.context,
                                          performance: false,
                                          hash: false,
                                          timings: true,
                                          entrypoints: false,
                                          chunkOrigins: false,
                                          chunkModules: false,
                                          colors: true
                                        }));

                                        if (buildErrors) {
                                          console.log(_chalk["default"].red.bold("\n                => There were ERRORS during the ".concat(stage, " build stage! :(\n                => Fix them and try again!\n              ")));
                                        } else if (buildWarnings) {
                                          console.log(_chalk["default"].yellow("\n=> There were WARNINGS during the ".concat(stage, " build stage. Your site will still function, but you may achieve better performance by addressing the warnings above.\n")));
                                        }
                                      }
                                    };

                                    if (!err) {
                                      _context.next = 5;
                                      break;
                                    }

                                    console.log(_chalk["default"].red(err.stack || err));

                                    if (err.details) {
                                      console.log(_chalk["default"].red(err.details));
                                    }

                                    return _context.abrupt("return", reject(err));

                                  case 5:
                                    stats.toJson('verbose');
                                    _stats$stats = (0, _slicedToArray2["default"])(stats.stats, 2), prodStats = _stats$stats[0], nodeStats = _stats$stats[1];
                                    checkBuildStats('prod', prodStats);
                                    checkBuildStats('node', nodeStats);
                                    _context.next = 11;
                                    return (0, _clientStats.outputClientStats)(state, prodStats.toJson());

                                  case 11:
                                    state = _context.sent;
                                    resolve(state);

                                  case 13:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x4, _x5) {
                            return _ref2.apply(this, arguments);
                          };
                        }());

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2, _x3) {
                return _ref.apply(this, arguments);
              };
            }());

          case 11:
            state = _context3.sent;
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] App Bundled"));
            _context3.next = 15;
            return _plugins["default"].afterBundle(state);

          case 15:
            state = _context3.sent;
            return _context3.abrupt("return", state);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _buildProductionBundles.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9idWlsZFByb2R1Y3Rpb25CdW5kbGVzLmpzIl0sIm5hbWVzIjpbImJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsImdyZWVuIiwic3RhZ2UiLCJhbGxXZWJwYWNrQ29uZmlncyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicnVuIiwiZXJyIiwic3RhdHMiLCJjaGVja0J1aWxkU3RhdHMiLCJzdGFnZVN0YXRzIiwiYnVpbGRFcnJvcnMiLCJoYXNFcnJvcnMiLCJidWlsZFdhcm5pbmdzIiwiaGFzV2FybmluZ3MiLCJ0b1N0cmluZyIsImNvbnRleHQiLCJjb25maWciLCJwZXJmb3JtYW5jZSIsImhhc2giLCJ0aW1pbmdzIiwiZW50cnlwb2ludHMiLCJjaHVua09yaWdpbnMiLCJjaHVua01vZHVsZXMiLCJjb2xvcnMiLCJyZWQiLCJib2xkIiwieWVsbG93Iiwic3RhY2siLCJkZXRhaWxzIiwidG9Kc29uIiwicHJvZFN0YXRzIiwibm9kZVN0YXRzIiwicGx1Z2lucyIsImFmdGVyQnVuZGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQVBBO0FBR0E7U0FNOEJBLHNCOzs7Ozs7OytCQUFmLGtCQUFzQ0MsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2I7QUFDQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSw2QkFBS0Msa0JBQU1DLEtBQU4sQ0FBWSxzQkFBWixDQUFMO0FBSGE7QUFBQSxtQkFNTCxtQ0FBa0JKLEtBQWxCLENBTks7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBT0wsc0VBQXVCQSxLQUF2QjtBQUE4QkssY0FBQUEsS0FBSyxFQUFFO0FBQXJDLGVBUEs7O0FBQUE7QUFBQTtBQUtQQyxZQUFBQSxpQkFMTztBQUFBO0FBQUEs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QyxXQUFSLENBQW9CdEMsS0FBcEIsQ0FwRUQ7O0FBQUE7QUFvRWJBLFlBQUFBLEtBcEVhO0FBQUEsOENBc0VOQSxLQXRFTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR5bmFtaWMtcmVxdWlyZSwgcmVhY3Qvbm8tZGFuZ2VyLCBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5pbXBvcnQgd2VicGFjayBmcm9tICd3ZWJwYWNrJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuLy9cbmltcG9ydCBtYWtlV2VicGFja0NvbmZpZyBmcm9tICcuL21ha2VXZWJwYWNrQ29uZmlnJ1xuaW1wb3J0IHsgb3V0cHV0Q2xpZW50U3RhdHMgfSBmcm9tICcuLi9jbGllbnRTdGF0cydcbmltcG9ydCB7IHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBwbHVnaW5zIGZyb20gJy4uL3BsdWdpbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkUHJvZHVjdGlvbkJ1bmRsZXMoc3RhdGUpIHtcbiAgLy8gQnVpbGQgc3RhdGljIHBhZ2VzIGFuZCBKU09OXG4gIGNvbnNvbGUubG9nKCdCdW5kbGluZyBBcHAuLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gQXBwIEJ1bmRsZWQnKSlcblxuICBjb25zdCBhbGxXZWJwYWNrQ29uZmlncyA9IFtcbiAgICBhd2FpdCBtYWtlV2VicGFja0NvbmZpZyhzdGF0ZSksXG4gICAgYXdhaXQgbWFrZVdlYnBhY2tDb25maWcoeyAuLi5zdGF0ZSwgc3RhZ2U6ICdub2RlJyB9KSwgLy8gTWFrZSBzdXJlIHdlJ3JlIGJ1aWxkaW5nIHRoZSBub2RlIGNvbmZpZ1xuICBdXG5cbiAgc3RhdGUgPSBhd2FpdCBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd2VicGFjayhhbGxXZWJwYWNrQ29uZmlncykucnVuKGFzeW5jIChlcnIsIHN0YXRzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZChlcnIuc3RhY2sgfHwgZXJyKSlcbiAgICAgICAgaWYgKGVyci5kZXRhaWxzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkKGVyci5kZXRhaWxzKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgIH1cblxuICAgICAgc3RhdHMudG9Kc29uKCd2ZXJib3NlJylcblxuICAgICAgY29uc3QgW3Byb2RTdGF0cywgbm9kZVN0YXRzXSA9IHN0YXRzLnN0YXRzXG5cbiAgICAgIGNoZWNrQnVpbGRTdGF0cygncHJvZCcsIHByb2RTdGF0cylcbiAgICAgIGNoZWNrQnVpbGRTdGF0cygnbm9kZScsIG5vZGVTdGF0cylcblxuICAgICAgZnVuY3Rpb24gY2hlY2tCdWlsZFN0YXRzKHN0YWdlLCBzdGFnZVN0YXRzKSB7XG4gICAgICAgIGNvbnN0IGJ1aWxkRXJyb3JzID0gc3RhZ2VTdGF0cy5oYXNFcnJvcnMoKVxuICAgICAgICBjb25zdCBidWlsZFdhcm5pbmdzID0gc3RhZ2VTdGF0cy5oYXNXYXJuaW5ncygpXG5cbiAgICAgICAgaWYgKGJ1aWxkRXJyb3JzIHx8IGJ1aWxkV2FybmluZ3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIHN0YWdlU3RhdHMudG9TdHJpbmcoe1xuICAgICAgICAgICAgICBjb250ZXh0OiBzdGF0ZS5jb25maWcuY29udGV4dCxcbiAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICBoYXNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGltaW5nczogdHJ1ZSxcbiAgICAgICAgICAgICAgZW50cnlwb2ludHM6IGZhbHNlLFxuICAgICAgICAgICAgICBjaHVua09yaWdpbnM6IGZhbHNlLFxuICAgICAgICAgICAgICBjaHVua01vZHVsZXM6IGZhbHNlLFxuICAgICAgICAgICAgICBjb2xvcnM6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoYnVpbGRFcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBjaGFsay5yZWQuYm9sZChgXG4gICAgICAgICAgICAgICAgPT4gVGhlcmUgd2VyZSBFUlJPUlMgZHVyaW5nIHRoZSAke3N0YWdlfSBidWlsZCBzdGFnZSEgOihcbiAgICAgICAgICAgICAgICA9PiBGaXggdGhlbSBhbmQgdHJ5IGFnYWluIVxuICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoYnVpbGRXYXJuaW5ncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGNoYWxrLnllbGxvdyhgXG49PiBUaGVyZSB3ZXJlIFdBUk5JTkdTIGR1cmluZyB0aGUgJHtzdGFnZX0gYnVpbGQgc3RhZ2UuIFlvdXIgc2l0ZSB3aWxsIHN0aWxsIGZ1bmN0aW9uLCBidXQgeW91IG1heSBhY2hpZXZlIGJldHRlciBwZXJmb3JtYW5jZSBieSBhZGRyZXNzaW5nIHRoZSB3YXJuaW5ncyBhYm92ZS5cbmApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXRlID0gYXdhaXQgb3V0cHV0Q2xpZW50U3RhdHMoc3RhdGUsIHByb2RTdGF0cy50b0pzb24oKSlcbiAgICAgIHJlc29sdmUoc3RhdGUpXG4gICAgfSlcbiAgfSlcblxuICB0aW1lRW5kKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gQXBwIEJ1bmRsZWQnKSlcblxuICBzdGF0ZSA9IGF3YWl0IHBsdWdpbnMuYWZ0ZXJCdW5kbGUoc3RhdGUpXG5cbiAgcmV0dXJuIHN0YXRlXG59XG4iXX0=