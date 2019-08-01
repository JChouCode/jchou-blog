"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = runDevServer;
exports.reloadClientData = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _webpack = _interopRequireDefault(require("webpack"));

var _chalk = _interopRequireDefault(require("chalk"));

var _socket = _interopRequireDefault(require("socket.io"));

var _webpackDevServer = _interopRequireDefault(require("webpack-dev-server"));

var _makeWebpackConfig = _interopRequireDefault(require("./makeWebpackConfig"));

var _getRouteData = _interopRequireDefault(require("../getRouteData"));

var _plugins = _interopRequireDefault(require("../plugins"));

var _utils = require("../../utils");

var _fetchSiteData = _interopRequireDefault(require("../fetchSiteData"));

/* eslint-disable import/no-dynamic-require, react/no-danger, import/no-mutable-exports */
//
var devServer;
var latestState;

var buildDevRoutes = function buildDevRoutes() {};

var reloadClientData = function reloadClientData() {
  if (reloadClientData.current) {
    reloadClientData.current();
  }
}; // Starts the development server


exports.reloadClientData = reloadClientData;

function runDevServer(_x) {
  return _runDevServer.apply(this, arguments);
}

function _runDevServer() {
  _runDevServer = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!devServer) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return buildDevRoutes(state);

          case 3:
            _context.next = 5;
            return reloadClientData();

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return runExpressServer(state);

          case 9:
            state = _context.sent;

          case 10:
            return _context.abrupt("return", state);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _runDevServer.apply(this, arguments);
}

function runExpressServer(_x2) {
  return _runExpressServer.apply(this, arguments);
}

function _runExpressServer() {
  _runExpressServer = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(state) {
    var intendedPort, port, messagePort, devConfig, devCompiler, devServerConfig, first, startedAt, skipLog, socket;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // Default to localhost:3000, or use a custom combo if defined in static.config.js
            // or environment variables
            intendedPort = Number(state.config.devServer.port);
            _context7.next = 3;
            return (0, _utils.findAvailablePort)(intendedPort);

          case 3:
            port = _context7.sent;
            _context7.next = 6;
            return (0, _utils.findAvailablePort)(4000, [port]);

          case 6:
            messagePort = _context7.sent;

            if (intendedPort !== port) {
              console.log(_chalk["default"].red("Warning! Port ".concat(intendedPort, " is not available. Using port ").concat(_chalk["default"].green(port), " instead!")));
            }

            state = (0, _objectSpread2["default"])({}, state, {
              config: (0, _objectSpread2["default"])({}, state.config, {
                devServer: (0, _objectSpread2["default"])({}, state.config.devServer, {
                  port: port
                })
              })
            });
            devConfig = (0, _makeWebpackConfig["default"])(state);
            devCompiler = (0, _webpack["default"])(devConfig);
            devServerConfig = (0, _objectSpread2["default"])({
              contentBase: [state.config.paths.PUBLIC, state.config.paths.DIST],
              publicPath: '/',
              historyApiFallback: true,
              compress: false,
              clientLogLevel: 'warning',
              overlay: true,
              stats: 'errors-only',
              noInfo: true
            }, state.config.devServer, {
              hotOnly: true,
              watchOptions: (0, _objectSpread2["default"])({}, state.config.devServer ? state.config.devServer.watchOptions || {} : {}, {
                ignored: [/node_modules/].concat((0, _toConsumableArray2["default"])((state.config.devServer.watchOptions || {}).ignored || []))
              }),
              before: function before(app) {
                // Serve the site data
                app.get('/__react-static__/getMessagePort',
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee2(req, res) {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            res.send({
                              port: messagePort
                            });

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }()); // Since routes may change during dev, this function can rebuild all of the config
                // routes. It also references the original config when possible, to make sure it
                // uses any up to date getData callback generated from new or replacement routes.

                buildDevRoutes =
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee5(newState) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return (0, _fetchSiteData["default"])(newState);

                          case 2:
                            latestState = _context5.sent;
                            app.get('/__react-static__/siteData',
                            /*#__PURE__*/
                            function () {
                              var _ref3 = (0, _asyncToGenerator2["default"])(
                              /*#__PURE__*/
                              _regenerator["default"].mark(function _callee3(req, res, next) {
                                return _regenerator["default"].wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        try {
                                          res.send(latestState.siteData);
                                        } catch (err) {
                                          res.status(500);
                                          res.send(err);
                                          next(err);
                                        }

                                      case 1:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3);
                              }));

                              return function (_x6, _x7, _x8) {
                                return _ref3.apply(this, arguments);
                              };
                            }()); // Serve each routes data

                            latestState.routes.forEach(function (_ref4) {
                              var routePath = _ref4.path;
                              app.get("/__react-static__/routeInfo/".concat(encodeURI(routePath === '/' ? '' : routePath)),
                              /*#__PURE__*/
                              function () {
                                var _ref5 = (0, _asyncToGenerator2["default"])(
                                /*#__PURE__*/
                                _regenerator["default"].mark(function _callee4(req, res, next) {
                                  var route, err;
                                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                                    while (1) {
                                      switch (_context4.prev = _context4.next) {
                                        case 0:
                                          // Make sure we have the most up to date route from the config, not
                                          // an out of dat object.
                                          route = latestState.routes.find(function (d) {
                                            return d.path === routePath;
                                          });
                                          _context4.prev = 1;

                                          if (route) {
                                            _context4.next = 6;
                                            break;
                                          }

                                          err = new Error("Route could not be found for: ".concat(routePath, "\n                    \nIf you removed this route, disregard this error.\nIf this is a dynamic route, consider adding it to the prefetchExcludes list:\n\n  addPrefetchExcludes(['").concat(routePath, "'])\n"));
                                          delete err.stack;
                                          throw err;

                                        case 6:
                                          _context4.next = 8;
                                          return (0, _getRouteData["default"])(route, latestState);

                                        case 8:
                                          route = _context4.sent;
                                          // Don't use any hashProp, just pass all the data in dev
                                          res.json(route);
                                          _context4.next = 16;
                                          break;

                                        case 12:
                                          _context4.prev = 12;
                                          _context4.t0 = _context4["catch"](1);
                                          res.status(404);
                                          next(_context4.t0);

                                        case 16:
                                        case "end":
                                          return _context4.stop();
                                      }
                                    }
                                  }, _callee4, null, [[1, 12]]);
                                }));

                                return function (_x9, _x10, _x11) {
                                  return _ref5.apply(this, arguments);
                                };
                              }());
                            });
                            return _context5.abrupt("return", new Promise(function (resolve) {
                              return setTimeout(resolve, 1);
                            }));

                          case 6:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function buildDevRoutes(_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }();

                buildDevRoutes(state);

                if (state.config.devServer && state.config.devServer.before) {
                  state.config.devServer.before(app);
                }

                return app;
              }
            });
            first = true;
            startedAt = Date.now();
            skipLog = false;
            console.log('Bundling Application...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Application Bundled"));
            devCompiler.hooks.invalid.tap({
              name: 'React-Static'
            }, function (file, changed) {
              // If a file is changed within the first two seconds of
              // the server starting, we don't bark about it. Less
              // noise is better!
              skipLog = changed - startedAt < 2000;

              if (!skipLog) {
                console.log('File changed:', file.replace(state.config.paths.ROOT, ''));
                console.log('Updating bundle...');
                (0, _utils.time)(_chalk["default"].green("[\u2713] Bundle Updated"));
              }
            });
            devCompiler.hooks.done.tap({
              name: 'React-Static'
            }, function (stats) {
              var messages = stats.toJson({}, true);
              var isSuccessful = !messages.errors.length && !messages.warnings.length;

              if (isSuccessful && !skipLog) {
                if (first) {
                  (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Application Bundled"));
                  console.log("".concat(_chalk["default"].green("[\u2713] App serving at"), " ").concat(_chalk["default"].blue("".concat(state.config.devServer.host, ":").concat(state.config.devServer.port))));
                } else {
                  (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Bundle Updated"));
                }
              }

              first = false;
            }); // Start the webpack dev server

            devServer = new _webpackDevServer["default"](devCompiler, devServerConfig); // Start the messages socket

            socket = (0, _socket["default"])();
            reloadClientData.current =
            /*#__PURE__*/
            (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/
            _regenerator["default"].mark(function _callee6() {
              return _regenerator["default"].wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      socket.emit('message', {
                        type: 'reloadClientData'
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
            _context7.next = 24;
            return new Promise(function (resolve, reject) {
              devServer.listen(port, null, function (err) {
                if (err) {
                  return reject(err);
                }

                resolve();
              });
            });

          case 24:
            // Make sure we start listening on the message port after the dev server.
            // We do this mostly to appease codesandbox.io, since they autobind to the first
            // port that opens up for their preview window.
            socket.listen(messagePort);
            _context7.next = 27;
            return _plugins["default"].afterDevServerStart(state);

          case 27:
            state = _context7.sent;
            return _context7.abrupt("return", state);

          case 29:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _runExpressServer.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydW5EZXZTZXJ2ZXIuanMiXSwibmFtZXMiOlsiZGV2U2VydmVyIiwibGF0ZXN0U3RhdGUiLCJidWlsZERldlJvdXRlcyIsInJlbG9hZENsaWVudERhdGEiLCJjdXJyZW50IiwicnVuRGV2U2VydmVyIiwic3RhdGUiLCJydW5FeHByZXNzU2VydmVyIiwiaW50ZW5kZWRQb3J0IiwiTnVtYmVyIiwiY29uZmlnIiwicG9ydCIsIm1lc3NhZ2VQb3J0IiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwicmVkIiwiZ3JlZW4iLCJkZXZDb25maWciLCJkZXZDb21waWxlciIsImRldlNlcnZlckNvbmZpZyIsImNvbnRlbnRCYXNlIiwicGF0aHMiLCJQVUJMSUMiLCJESVNUIiwicHVibGljUGF0aCIsImhpc3RvcnlBcGlGYWxsYmFjayIsImNvbXByZXNzIiwiY2xpZW50TG9nTGV2ZWwiLCJvdmVybGF5Iiwic3RhdHMiLCJub0luZm8iLCJob3RPbmx5Iiwid2F0Y2hPcHRpb25zIiwiaWdub3JlZCIsImJlZm9yZSIsImFwcCIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJuZXdTdGF0ZSIsIm5leHQiLCJzaXRlRGF0YSIsImVyciIsInN0YXR1cyIsInJvdXRlcyIsImZvckVhY2giLCJyb3V0ZVBhdGgiLCJwYXRoIiwiZW5jb2RlVVJJIiwicm91dGUiLCJmaW5kIiwiZCIsIkVycm9yIiwic3RhY2siLCJqc29uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZmlyc3QiLCJzdGFydGVkQXQiLCJEYXRlIiwibm93Iiwic2tpcExvZyIsImhvb2tzIiwiaW52YWxpZCIsInRhcCIsIm5hbWUiLCJmaWxlIiwiY2hhbmdlZCIsInJlcGxhY2UiLCJST09UIiwiZG9uZSIsIm1lc3NhZ2VzIiwidG9Kc29uIiwiaXNTdWNjZXNzZnVsIiwiZXJyb3JzIiwibGVuZ3RoIiwid2FybmluZ3MiLCJibHVlIiwiaG9zdCIsIldlYnBhY2tEZXZTZXJ2ZXIiLCJzb2NrZXQiLCJlbWl0IiwidHlwZSIsInJlamVjdCIsImxpc3RlbiIsInBsdWdpbnMiLCJhZnRlckRldlNlcnZlclN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFWQTtBQUtBO0FBT0EsSUFBSUEsU0FBSjtBQUNBLElBQUlDLFdBQUo7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHLDBCQUFNLENBQUUsQ0FBN0I7O0FBRU8sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ3BDLE1BQUlBLGdCQUFnQixDQUFDQyxPQUFyQixFQUE4QjtBQUM1QkQsSUFBQUEsZ0JBQWdCLENBQUNDLE9BQWpCO0FBQ0Q7QUFDRixDQUpNLEMsQ0FNUDs7Ozs7U0FDOEJDLFk7Ozs7Ozs7K0JBQWYsaUJBQTRCQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBT1ROLFNBUFM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFRTEUsY0FBYyxDQUFDSSxLQUFELENBUlQ7O0FBQUE7QUFBQTtBQUFBLG1CQVNMSCxnQkFBZ0IsRUFUWDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQVdHSSxnQkFBZ0IsQ0FBQ0QsS0FBRCxDQVhuQjs7QUFBQTtBQVdYQSxZQUFBQSxLQVhXOztBQUFBO0FBQUEsNkNBY05BLEtBZE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQWlCQUMsZ0I7Ozs7Ozs7K0JBQWYsa0JBQWdDRCxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNBO0FBQ01FLFlBQUFBLFlBSFIsR0FHdUJDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDSSxNQUFOLENBQWFWLFNBQWIsQ0FBdUJXLElBQXhCLENBSDdCO0FBQUE7QUFBQSxtQkFJcUIsOEJBQWtCSCxZQUFsQixDQUpyQjs7QUFBQTtBQUlR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O0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUsIHJlYWN0L25vLWRhbmdlciwgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjaydcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8nXG5pbXBvcnQgV2VicGFja0RldlNlcnZlciBmcm9tICd3ZWJwYWNrLWRldi1zZXJ2ZXInXG4vL1xuaW1wb3J0IG1ha2VXZWJwYWNrQ29uZmlnIGZyb20gJy4vbWFrZVdlYnBhY2tDb25maWcnXG5pbXBvcnQgZ2V0Um91dGVEYXRhIGZyb20gJy4uL2dldFJvdXRlRGF0YSdcbmltcG9ydCBwbHVnaW5zIGZyb20gJy4uL3BsdWdpbnMnXG5pbXBvcnQgeyBmaW5kQXZhaWxhYmxlUG9ydCwgdGltZSwgdGltZUVuZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IGZldGNoU2l0ZURhdGEgZnJvbSAnLi4vZmV0Y2hTaXRlRGF0YSdcblxubGV0IGRldlNlcnZlclxubGV0IGxhdGVzdFN0YXRlXG5sZXQgYnVpbGREZXZSb3V0ZXMgPSAoKSA9PiB7fVxuXG5leHBvcnQgY29uc3QgcmVsb2FkQ2xpZW50RGF0YSA9ICgpID0+IHtcbiAgaWYgKHJlbG9hZENsaWVudERhdGEuY3VycmVudCkge1xuICAgIHJlbG9hZENsaWVudERhdGEuY3VycmVudCgpXG4gIH1cbn1cblxuLy8gU3RhcnRzIHRoZSBkZXZlbG9wbWVudCBzZXJ2ZXJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJ1bkRldlNlcnZlcihzdGF0ZSkge1xuICAvLyBUT0RPIGNoZWNrIGNvbmZpZy5kZXZTZXJ2ZXIgZm9yIGNoYW5nZXMgYW5kIG5vdGlmeSB1c2VyXG4gIC8vIGlmIHRoZSBzZXJ2ZXIgbmVlZHMgdG8gYmUgcmVzdGFydGVkIGZvciBjaGFuZ2VzIHRvIHRha2VcbiAgLy8gZWZmZWN0LlxuXG4gIC8vIElmIHRoZSBzZXJ2ZXIgaXMgYWxyZWFkeSBydW5uaW5nLCB0cmlnZ2VyIGEgcmVmcmVzaCB0byB0aGUgY2xpZW50XG5cbiAgaWYgKGRldlNlcnZlcikge1xuICAgIGF3YWl0IGJ1aWxkRGV2Um91dGVzKHN0YXRlKVxuICAgIGF3YWl0IHJlbG9hZENsaWVudERhdGEoKVxuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gYXdhaXQgcnVuRXhwcmVzc1NlcnZlcihzdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5hc3luYyBmdW5jdGlvbiBydW5FeHByZXNzU2VydmVyKHN0YXRlKSB7XG4gIC8vIERlZmF1bHQgdG8gbG9jYWxob3N0OjMwMDAsIG9yIHVzZSBhIGN1c3RvbSBjb21ibyBpZiBkZWZpbmVkIGluIHN0YXRpYy5jb25maWcuanNcbiAgLy8gb3IgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gIGNvbnN0IGludGVuZGVkUG9ydCA9IE51bWJlcihzdGF0ZS5jb25maWcuZGV2U2VydmVyLnBvcnQpXG4gIGNvbnN0IHBvcnQgPSBhd2FpdCBmaW5kQXZhaWxhYmxlUG9ydChpbnRlbmRlZFBvcnQpXG5cbiAgLy8gRmluZCBhbiBhdmFpbGFibGUgcG9ydCBmb3IgbWVzc2FnZXMsIGFzIGxvbmcgYXMgaXQncyBub3QgdGhlIGRldlNlcnZlciBwb3J0XG4gIGNvbnN0IG1lc3NhZ2VQb3J0ID0gYXdhaXQgZmluZEF2YWlsYWJsZVBvcnQoNDAwMCwgW3BvcnRdKVxuXG4gIGlmIChpbnRlbmRlZFBvcnQgIT09IHBvcnQpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGNoYWxrLnJlZChcbiAgICAgICAgYFdhcm5pbmchIFBvcnQgJHtpbnRlbmRlZFBvcnR9IGlzIG5vdCBhdmFpbGFibGUuIFVzaW5nIHBvcnQgJHtjaGFsay5ncmVlbihcbiAgICAgICAgICBwb3J0XG4gICAgICAgICl9IGluc3RlYWQhYFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNvbmZpZzoge1xuICAgICAgLi4uc3RhdGUuY29uZmlnLFxuICAgICAgZGV2U2VydmVyOiB7XG4gICAgICAgIC4uLnN0YXRlLmNvbmZpZy5kZXZTZXJ2ZXIsXG4gICAgICAgIHBvcnQsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBkZXZDb25maWcgPSBtYWtlV2VicGFja0NvbmZpZyhzdGF0ZSlcbiAgY29uc3QgZGV2Q29tcGlsZXIgPSB3ZWJwYWNrKGRldkNvbmZpZylcblxuICBjb25zdCBkZXZTZXJ2ZXJDb25maWcgPSB7XG4gICAgY29udGVudEJhc2U6IFtzdGF0ZS5jb25maWcucGF0aHMuUFVCTElDLCBzdGF0ZS5jb25maWcucGF0aHMuRElTVF0sXG4gICAgcHVibGljUGF0aDogJy8nLFxuICAgIGhpc3RvcnlBcGlGYWxsYmFjazogdHJ1ZSxcbiAgICBjb21wcmVzczogZmFsc2UsXG4gICAgY2xpZW50TG9nTGV2ZWw6ICd3YXJuaW5nJyxcbiAgICBvdmVybGF5OiB0cnVlLFxuICAgIHN0YXRzOiAnZXJyb3JzLW9ubHknLFxuICAgIG5vSW5mbzogdHJ1ZSxcbiAgICAuLi5zdGF0ZS5jb25maWcuZGV2U2VydmVyLFxuICAgIGhvdE9ubHk6IHRydWUsXG4gICAgd2F0Y2hPcHRpb25zOiB7XG4gICAgICAuLi4oc3RhdGUuY29uZmlnLmRldlNlcnZlclxuICAgICAgICA/IHN0YXRlLmNvbmZpZy5kZXZTZXJ2ZXIud2F0Y2hPcHRpb25zIHx8IHt9XG4gICAgICAgIDoge30pLFxuICAgICAgaWdub3JlZDogW1xuICAgICAgICAvbm9kZV9tb2R1bGVzLyxcblxuICAgICAgICAuLi4oKHN0YXRlLmNvbmZpZy5kZXZTZXJ2ZXIud2F0Y2hPcHRpb25zIHx8IHt9KS5pZ25vcmVkIHx8IFtdKSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBiZWZvcmU6IGFwcCA9PiB7XG4gICAgICAvLyBTZXJ2ZSB0aGUgc2l0ZSBkYXRhXG4gICAgICBhcHAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9nZXRNZXNzYWdlUG9ydCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgcG9ydDogbWVzc2FnZVBvcnQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLy8gU2luY2Ugcm91dGVzIG1heSBjaGFuZ2UgZHVyaW5nIGRldiwgdGhpcyBmdW5jdGlvbiBjYW4gcmVidWlsZCBhbGwgb2YgdGhlIGNvbmZpZ1xuICAgICAgLy8gcm91dGVzLiBJdCBhbHNvIHJlZmVyZW5jZXMgdGhlIG9yaWdpbmFsIGNvbmZpZyB3aGVuIHBvc3NpYmxlLCB0byBtYWtlIHN1cmUgaXRcbiAgICAgIC8vIHVzZXMgYW55IHVwIHRvIGRhdGUgZ2V0RGF0YSBjYWxsYmFjayBnZW5lcmF0ZWQgZnJvbSBuZXcgb3IgcmVwbGFjZW1lbnQgcm91dGVzLlxuICAgICAgYnVpbGREZXZSb3V0ZXMgPSBhc3luYyBuZXdTdGF0ZSA9PiB7XG4gICAgICAgIGxhdGVzdFN0YXRlID0gYXdhaXQgZmV0Y2hTaXRlRGF0YShuZXdTdGF0ZSlcblxuICAgICAgICBhcHAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9zaXRlRGF0YScsIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXMuc2VuZChsYXRlc3RTdGF0ZS5zaXRlRGF0YSlcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKVxuICAgICAgICAgICAgcmVzLnNlbmQoZXJyKVxuICAgICAgICAgICAgbmV4dChlcnIpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFNlcnZlIGVhY2ggcm91dGVzIGRhdGFcbiAgICAgICAgbGF0ZXN0U3RhdGUucm91dGVzLmZvckVhY2goKHsgcGF0aDogcm91dGVQYXRoIH0pID0+IHtcbiAgICAgICAgICBhcHAuZ2V0KFxuICAgICAgICAgICAgYC9fX3JlYWN0LXN0YXRpY19fL3JvdXRlSW5mby8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgcm91dGVQYXRoID09PSAnLycgPyAnJyA6IHJvdXRlUGF0aFxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIHRoZSBtb3N0IHVwIHRvIGRhdGUgcm91dGUgZnJvbSB0aGUgY29uZmlnLCBub3RcbiAgICAgICAgICAgICAgLy8gYW4gb3V0IG9mIGRhdCBvYmplY3QuXG4gICAgICAgICAgICAgIGxldCByb3V0ZSA9IGxhdGVzdFN0YXRlLnJvdXRlcy5maW5kKGQgPT4gZC5wYXRoID09PSByb3V0ZVBhdGgpXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgUm91dGUgY291bGQgbm90IGJlIGZvdW5kIGZvcjogJHtyb3V0ZVBhdGh9XG4gICAgICAgICAgICAgICAgICAgIFxuSWYgeW91IHJlbW92ZWQgdGhpcyByb3V0ZSwgZGlzcmVnYXJkIHRoaXMgZXJyb3IuXG5JZiB0aGlzIGlzIGEgZHluYW1pYyByb3V0ZSwgY29uc2lkZXIgYWRkaW5nIGl0IHRvIHRoZSBwcmVmZXRjaEV4Y2x1ZGVzIGxpc3Q6XG5cbiAgYWRkUHJlZmV0Y2hFeGNsdWRlcyhbJyR7cm91dGVQYXRofSddKVxuYFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgZGVsZXRlIGVyci5zdGFja1xuICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm91dGUgPSBhd2FpdCBnZXRSb3V0ZURhdGEocm91dGUsIGxhdGVzdFN0YXRlKVxuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgdXNlIGFueSBoYXNoUHJvcCwganVzdCBwYXNzIGFsbCB0aGUgZGF0YSBpbiBkZXZcbiAgICAgICAgICAgICAgICByZXMuanNvbihyb3V0ZSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpXG4gICAgICAgICAgICAgICAgbmV4dChlcnIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMSkpXG4gICAgICB9XG5cbiAgICAgIGJ1aWxkRGV2Um91dGVzKHN0YXRlKVxuXG4gICAgICBpZiAoc3RhdGUuY29uZmlnLmRldlNlcnZlciAmJiBzdGF0ZS5jb25maWcuZGV2U2VydmVyLmJlZm9yZSkge1xuICAgICAgICBzdGF0ZS5jb25maWcuZGV2U2VydmVyLmJlZm9yZShhcHApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcHBcbiAgICB9LFxuICB9XG5cbiAgbGV0IGZpcnN0ID0gdHJ1ZVxuICBjb25zdCBzdGFydGVkQXQgPSBEYXRlLm5vdygpXG4gIGxldCBza2lwTG9nID0gZmFsc2VcblxuICBjb25zb2xlLmxvZygnQnVuZGxpbmcgQXBwbGljYXRpb24uLi4nKVxuICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gQXBwbGljYXRpb24gQnVuZGxlZCcpKVxuXG4gIGRldkNvbXBpbGVyLmhvb2tzLmludmFsaWQudGFwKFxuICAgIHtcbiAgICAgIG5hbWU6ICdSZWFjdC1TdGF0aWMnLFxuICAgIH0sXG4gICAgKGZpbGUsIGNoYW5nZWQpID0+IHtcbiAgICAgIC8vIElmIGEgZmlsZSBpcyBjaGFuZ2VkIHdpdGhpbiB0aGUgZmlyc3QgdHdvIHNlY29uZHMgb2ZcbiAgICAgIC8vIHRoZSBzZXJ2ZXIgc3RhcnRpbmcsIHdlIGRvbid0IGJhcmsgYWJvdXQgaXQuIExlc3NcbiAgICAgIC8vIG5vaXNlIGlzIGJldHRlciFcbiAgICAgIHNraXBMb2cgPSBjaGFuZ2VkIC0gc3RhcnRlZEF0IDwgMjAwMFxuICAgICAgaWYgKCFza2lwTG9nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlIGNoYW5nZWQ6JywgZmlsZS5yZXBsYWNlKHN0YXRlLmNvbmZpZy5wYXRocy5ST09ULCAnJykpXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGluZyBidW5kbGUuLi4nKVxuICAgICAgICB0aW1lKGNoYWxrLmdyZWVuKCdbXFx1MjcxM10gQnVuZGxlIFVwZGF0ZWQnKSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBkZXZDb21waWxlci5ob29rcy5kb25lLnRhcChcbiAgICB7XG4gICAgICBuYW1lOiAnUmVhY3QtU3RhdGljJyxcbiAgICB9LFxuICAgIHN0YXRzID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gc3RhdHMudG9Kc29uKHt9LCB0cnVlKVxuICAgICAgY29uc3QgaXNTdWNjZXNzZnVsID0gIW1lc3NhZ2VzLmVycm9ycy5sZW5ndGggJiYgIW1lc3NhZ2VzLndhcm5pbmdzLmxlbmd0aFxuXG4gICAgICBpZiAoaXNTdWNjZXNzZnVsICYmICFza2lwTG9nKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBBcHBsaWNhdGlvbiBCdW5kbGVkJykpXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgJHtjaGFsay5ncmVlbignW1xcdTI3MTNdIEFwcCBzZXJ2aW5nIGF0Jyl9ICR7Y2hhbGsuYmx1ZShcbiAgICAgICAgICAgICAgYCR7c3RhdGUuY29uZmlnLmRldlNlcnZlci5ob3N0fToke3N0YXRlLmNvbmZpZy5kZXZTZXJ2ZXIucG9ydH1gXG4gICAgICAgICAgICApfWBcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZUVuZChjaGFsay5ncmVlbignW1xcdTI3MTNdIEJ1bmRsZSBVcGRhdGVkJykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmlyc3QgPSBmYWxzZVxuICAgIH1cbiAgKVxuXG4gIC8vIFN0YXJ0IHRoZSB3ZWJwYWNrIGRldiBzZXJ2ZXJcbiAgZGV2U2VydmVyID0gbmV3IFdlYnBhY2tEZXZTZXJ2ZXIoZGV2Q29tcGlsZXIsIGRldlNlcnZlckNvbmZpZylcblxuICAvLyBTdGFydCB0aGUgbWVzc2FnZXMgc29ja2V0XG4gIGNvbnN0IHNvY2tldCA9IGlvKClcblxuICByZWxvYWRDbGllbnREYXRhLmN1cnJlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB7IHR5cGU6ICdyZWxvYWRDbGllbnREYXRhJyB9KVxuICB9XG5cbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRldlNlcnZlci5saXN0ZW4ocG9ydCwgbnVsbCwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICB9XG4gICAgICByZXNvbHZlKClcbiAgICB9KVxuICB9KVxuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBsaXN0ZW5pbmcgb24gdGhlIG1lc3NhZ2UgcG9ydCBhZnRlciB0aGUgZGV2IHNlcnZlci5cbiAgLy8gV2UgZG8gdGhpcyBtb3N0bHkgdG8gYXBwZWFzZSBjb2Rlc2FuZGJveC5pbywgc2luY2UgdGhleSBhdXRvYmluZCB0byB0aGUgZmlyc3RcbiAgLy8gcG9ydCB0aGF0IG9wZW5zIHVwIGZvciB0aGVpciBwcmV2aWV3IHdpbmRvdy5cbiAgc29ja2V0Lmxpc3RlbihtZXNzYWdlUG9ydClcblxuICBzdGF0ZSA9IGF3YWl0IHBsdWdpbnMuYWZ0ZXJEZXZTZXJ2ZXJTdGFydChzdGF0ZSlcblxuICByZXR1cm4gc3RhdGVcbn1cbiJdfQ==