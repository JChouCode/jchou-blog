"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.isPrefetchableRoute = isPrefetchableRoute;
exports.plugins = exports.onReloadClientData = exports.registerTemplateForPath = exports.registerTemplates = exports.onReloadTemplates = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.pluginHooks = exports.addPrefetchExcludes = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("./utils");

var _Visibility = _interopRequireDefault(require("./utils/Visibility"));

//
// RouteInfo / RouteData
var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var prefetchExcludes = [];

var addPrefetchExcludes = function addPrefetchExcludes(excludes) {
  if (!Array.isArray(excludes)) {
    throw new Error('Excludes must be an array of strings/regex!');
  }

  prefetchExcludes = [].concat((0, _toConsumableArray2["default"])(prefetchExcludes), (0, _toConsumableArray2["default"])(excludes));
};

exports.addPrefetchExcludes = addPrefetchExcludes;
var requestPool = (0, _utils.createPool)({
  concurrency: Number(process.env.REACT_STATIC_PREFETCH_RATE)
}); // Plugins

var pluginHooks = [];
exports.pluginHooks = pluginHooks;

var registerPlugins = function registerPlugins(newPlugins) {
  pluginHooks.splice.apply(pluginHooks, [0, Infinity].concat((0, _toConsumableArray2["default"])(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;

var onReloadTemplates = function onReloadTemplates(fn) {
  onReloadTemplates.listeners.push(fn);
  return function () {
    onReloadTemplates.listeners = onReloadTemplates.listeners.filter(function (d) {
      return d !== fn;
    });
  };
};

exports.onReloadTemplates = onReloadTemplates;
onReloadTemplates.listeners = [];

var registerTemplates =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(tmps, notFoundKey) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object.keys(templatesByPath).forEach(function (key) {
              delete templatesByPath[key];
            });
            Object.keys(templateErrorByPath).forEach(function (key) {
              delete templateErrorByPath[key];
            });
            Object.keys(templates).forEach(function (key) {
              delete templates[key];
            });
            Object.keys(tmps).forEach(function (key) {
              templates[key] = tmps[key];
            });
            templatesByPath['404'] = templates[notFoundKey];

            if (!(process.env.NODE_ENV === 'development' && typeof document !== 'undefined')) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return prefetch(window.location.pathname);

          case 8:
            onReloadTemplates.listeners.forEach(function (fn) {
              return fn();
            });

            if (typeof document !== 'undefined') {
              console.log('React Static: Templates Reloaded');
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registerTemplates(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;

var onReloadClientData = function onReloadClientData(fn) {
  Object.keys(routeErrorByPath).forEach(function (key) {
    delete routeErrorByPath[key];
  });
  onReloadClientData.listeners.push(fn);
  return function () {
    onReloadClientData.listeners = onReloadClientData.listeners.filter(function (d) {
      return d !== fn;
    });
  };
};

exports.onReloadClientData = onReloadClientData;
onReloadClientData.listeners = [];

if (typeof document !== 'undefined') {
  init();
} // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data


function init() {
  // In development, we need to open a socket to listen for changes to data
  if (process.env.REACT_STATIC_ENV === 'development') {
    var io = require('socket.io-client');

    var run =
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _ref3, port, socket;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _axios["default"].get('/__react-static__/getMessagePort');

              case 3:
                _ref3 = _context2.sent;
                port = _ref3.data.port;
                socket = io("http://localhost:".concat(port));
                socket.on('connect', function () {// Do nothing
                });
                socket.on('message', function (_ref4) {
                  var type = _ref4.type;

                  if (type === 'reloadClientData') {
                    reloadClientData();
                  }
                });
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.log('React-Static data hot-loader websocket encountered the following error:');
                console.error(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      return function run() {
        return _ref2.apply(this, arguments);
      };
    }();

    run();
  }

  if (process.env.REACT_STATIC_DISABLE_PRELOAD === 'false') {
    startPreloader();
  }
}
/**
 * The preloader searches for all anchor elements on the page every poll
 * interval, and, unless specified by data-prefetch, start a visibility observer
 * for that element.
 *
 * The href of the anchor is preloaded when the element becomes visible.
 */


function startPreloader() {
  if (typeof document === 'undefined') {
    return;
  }

  var run = function run() {
    var els = [].slice.call(document.getElementsByTagName('a'));
    els.forEach(function (el) {
      var href = el.getAttribute('href');
      var prefetchOption = el.getAttribute('data-prefetch');
      var shouldPrefetch = !prefetchOption || prefetchOption === 'true' || prefetchOption === 'visible';

      if (href && shouldPrefetch) {
        (0, _Visibility["default"])(el, function () {
          return prefetch(href);
        });
      }
    });
  };

  setInterval(run, Number(process.env.REACT_STATIC_PRELOAD_POLL_INTERVAL));
}

function reloadClientData() {
  return _reloadClientData.apply(this, arguments);
}

function _reloadClientData() {
  _reloadClientData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('React Static: Reloading Data...') // Delete all cached data
            ;
            [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
              Object.keys(part).forEach(function (key) {
                delete part[key];
              });
            }); // Prefetch the current route's data before you reload routes

            _context3.next = 4;
            return prefetch(window.location.pathname);

          case 4:
            onReloadClientData.listeners.forEach(function (fn) {
              return fn();
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _reloadClientData.apply(this, arguments);
}

function getRouteInfo(_x3) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _ref8,
        data,
        routeInfoRoot,
        getPath,
        _ref9,
        _data,
        _ref10,
        _data2,
        _args4 = arguments;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if (isPrefetchableRoute(path)) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return");

          case 8:
            _context4.prev = 8;

            if (!(process.env.REACT_STATIC_ENV === 'development')) {
              _context4.next = 18;
              break;
            }

            // In dev, request from the webpack dev server
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios["default"].get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context4.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref8 = _context4.sent;
            data = _ref8.data;
            routeInfo = data;
            _context4.next = 34;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = (process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING === 'true' ? process.env.REACT_STATIC_SITE_ROOT : process.env.REACT_STATIC_PUBLIC_PATH) || '/';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')); // If this is a priority call bypass the queue

            if (!priority) {
              _context4.next = 28;
              break;
            }

            _context4.next = 23;
            return _axios["default"].get(getPath);

          case 23:
            _ref9 = _context4.sent;
            _data = _ref9.data;
            routeInfo = _data;
            _context4.next = 34;
            break;

          case 28:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios["default"].get(getPath);
              });
            }

            _context4.next = 31;
            return inflightRouteInfo[path];

          case 31:
            _ref10 = _context4.sent;
            _data2 = _ref10.data;
            routeInfo = _data2;

          case 34:
            _context4.next = 43;
            break;

          case 36:
            _context4.prev = 36;
            _context4.t0 = _context4["catch"](8);
            // If there was an error, mark the path as errored
            routeErrorByPath[path] = true; // Unless we already fetched the 404 page,
            // try to load info for the 404 page

            if (!(!routeInfoByPath['404'] && !routeErrorByPath['404'])) {
              _context4.next = 42;
              break;
            }

            getRouteInfo('404', {
              priority: priority
            });
            return _context4.abrupt("return");

          case 42:
            return _context4.abrupt("return");

          case 43:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if ((0, _typeof2["default"])(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context4.abrupt("return", routeInfoByPath[path]);

          case 46:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[8, 36]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x4) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(path) {
    var _ref6,
        priority,
        routeInfo,
        _args6 = arguments;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref6 = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}, priority = _ref6.priority;
            _context6.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context6.sent;

            if (routeInfo) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return");

          case 6:
            if (!routeInfo.sharedData) {
              _context6.next = 8;
              break;
            }

            return _context6.abrupt("return", (0, _utils.getFullRouteData)(routeInfo));

          case 8:
            // Request and build the props one by one
            routeInfo.sharedData = {}; // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context6.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref11 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee5(key) {
                var hash, staticDataPath, absoluteStaticDataPath, _ref12, prop, _ref13, _prop;

                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context5.next = 26;
                          break;
                        }

                        _context5.prev = 2;
                        staticDataPath = (0, _utils.pathJoin)(process.env.REACT_STATIC_ASSETS_PATH, "staticData/".concat(hash, ".json"));
                        absoluteStaticDataPath = (0, _utils.makePathAbsolute)(staticDataPath); // If priority, get it immediately

                        if (!priority) {
                          _context5.next = 13;
                          break;
                        }

                        _context5.next = 8;
                        return _axios["default"].get(absoluteStaticDataPath);

                      case 8:
                        _ref12 = _context5.sent;
                        prop = _ref12.data;
                        sharedDataByHash[hash] = prop;
                        _context5.next = 19;
                        break;

                      case 13:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios["default"].get(absoluteStaticDataPath);
                          });
                        }

                        _context5.next = 16;
                        return inflightPropHashes[hash];

                      case 16:
                        _ref13 = _context5.sent;
                        _prop = _ref13.data;
                        // Place it in the cache
                        sharedDataByHash[hash] = _prop;

                      case 19:
                        _context5.next = 25;
                        break;

                      case 21:
                        _context5.prev = 21;
                        _context5.t0 = _context5["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context5.t0);

                      case 25:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 26:
                        // Otherwise, just set it as the key
                        routeInfo.sharedData[key] = sharedDataByHash[hash];

                      case 27:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[2, 21]]);
              }));

              return function (_x7) {
                return _ref11.apply(this, arguments);
              };
            }()));

          case 11:
            return _context6.abrupt("return", (0, _utils.getFullRouteData)(routeInfo));

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x5) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(path) {
    var _ref7,
        priority,
        routeInfo,
        Template,
        _args7 = arguments;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _ref7 = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {}, priority = _ref7.priority;
            // Clean the path
            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context7.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context7.sent;

            if (routeInfo) {
              // Make sure to use the path as defined in the routeInfo object here.
              // This will make sure 404 route info returned from getRouteInfo is handled correctly.
              registerTemplateForPath(routeInfo.path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context7.next = 10;
              break;
            }

            // If no template was found, mark it with an error
            templateErrorByPath[path] = true;
            return _context7.abrupt("return");

          case 10:
            if (routeInfo) {
              _context7.next = 12;
              break;
            }

            return _context7.abrupt("return", Template);

          case 12:
            if (!(!routeInfo.templateLoaded && Template.preload)) {
              _context7.next = 21;
              break;
            }

            if (!priority) {
              _context7.next = 18;
              break;
            }

            _context7.next = 16;
            return Template.preload();

          case 16:
            _context7.next = 20;
            break;

          case 18:
            _context7.next = 20;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 20:
            routeInfo.templateLoaded = true;

          case 21:
            return _context7.abrupt("return", Template);

          case 22:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x6) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(path) {
    var options,
        type,
        data,
        _ref14,
        _ref15,
        _args8 = arguments;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
            // Clean the path
            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context8.next = 10;
              break;
            }

            _context8.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context8.sent;
            _context8.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context8.next = 15;
              break;
            }

            _context8.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context8.next = 21;
            break;

          case 15:
            ;
            _context8.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref14 = _context8.sent;
            _ref15 = (0, _slicedToArray2["default"])(_ref14, 1);
            data = _ref15[0];

          case 21:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

            return _context8.abrupt("return", data);

          case 23:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _prefetch.apply(this, arguments);
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this at all
  if (typeof document === 'undefined') {
    return false;
  }

  if (prefetchExcludes.some(function (exclude) {
    if (typeof exclude === 'string' && path.startsWith(exclude)) {
      return true;
    }

    if ((0, _typeof2["default"])(exclude) === 'object' && exclude.test(path)) {
      return true;
    }

    return false;
  })) {
    return false;
  }

  var _document = document,
      location = _document.location;
  var link;

  try {
    link = new URL(path, location.href);
  } catch (e) {
    // Return false on invalid URLs
    return false;
  } // if the hostname/port/protocol doesn't match its not a route link


  if (location.host !== link.host || location.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

var plugins = {
  Root: function Root(Comp) {
    var hooks = (0, _utils.getHooks)(pluginHooks, 'Root');
    return (0, _utils.reduceHooks)(hooks, {
      sync: true
    })(Comp);
  },
  Routes: function Routes(Comp) {
    var hooks = (0, _utils.getHooks)(pluginHooks, 'Routes');
    return (0, _utils.reduceHooks)(hooks, {
      sync: true
    })(Comp);
  }
};
exports.plugins = plugins;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9icm93c2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvdXRlSW5mb0J5UGF0aCIsInJvdXRlRXJyb3JCeVBhdGgiLCJzaGFyZWREYXRhQnlIYXNoIiwiaW5mbGlnaHRSb3V0ZUluZm8iLCJpbmZsaWdodFByb3BIYXNoZXMiLCJwcmVmZXRjaEV4Y2x1ZGVzIiwiYWRkUHJlZmV0Y2hFeGNsdWRlcyIsImV4Y2x1ZGVzIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJyZXF1ZXN0UG9vbCIsImNvbmN1cnJlbmN5IiwiTnVtYmVyIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19QUkVGRVRDSF9SQVRFIiwicGx1Z2luSG9va3MiLCJyZWdpc3RlclBsdWdpbnMiLCJuZXdQbHVnaW5zIiwic3BsaWNlIiwiSW5maW5pdHkiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZXNCeVBhdGgiLCJ0ZW1wbGF0ZUVycm9yQnlQYXRoIiwib25SZWxvYWRUZW1wbGF0ZXMiLCJmbiIsImxpc3RlbmVycyIsInB1c2giLCJmaWx0ZXIiLCJkIiwicmVnaXN0ZXJUZW1wbGF0ZXMiLCJ0bXBzIiwibm90Rm91bmRLZXkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIk5PREVfRU5WIiwiZG9jdW1lbnQiLCJwcmVmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJUZW1wbGF0ZUZvclBhdGgiLCJwYXRoIiwidGVtcGxhdGUiLCJvblJlbG9hZENsaWVudERhdGEiLCJpbml0IiwiUkVBQ1RfU1RBVElDX0VOViIsImlvIiwicmVxdWlyZSIsInJ1biIsImF4aW9zIiwiZ2V0IiwicG9ydCIsImRhdGEiLCJzb2NrZXQiLCJvbiIsInR5cGUiLCJyZWxvYWRDbGllbnREYXRhIiwiZXJyb3IiLCJSRUFDVF9TVEFUSUNfRElTQUJMRV9QUkVMT0FEIiwic3RhcnRQcmVsb2FkZXIiLCJlbHMiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImVsIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsInByZWZldGNoT3B0aW9uIiwic2hvdWxkUHJlZmV0Y2giLCJzZXRJbnRlcnZhbCIsIlJFQUNUX1NUQVRJQ19QUkVMT0FEX1BPTExfSU5URVJWQUwiLCJwYXJ0IiwiZ2V0Um91dGVJbmZvIiwicHJpb3JpdHkiLCJpc1ByZWZldGNoYWJsZVJvdXRlIiwicm91dGVJbmZvIiwicm91dGVJbmZvUm9vdCIsIlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyIsIlJFQUNUX1NUQVRJQ19TSVRFX1JPT1QiLCJSRUFDVF9TVEFUSUNfUFVCTElDX1BBVEgiLCJnZXRQYXRoIiwiYWRkIiwicHJlZmV0Y2hEYXRhIiwic2hhcmVkRGF0YSIsIlByb21pc2UiLCJhbGwiLCJzaGFyZWRIYXNoZXNCeVByb3AiLCJtYXAiLCJoYXNoIiwic3RhdGljRGF0YVBhdGgiLCJSRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgiLCJhYnNvbHV0ZVN0YXRpY0RhdGFQYXRoIiwicHJvcCIsInByZWZldGNoVGVtcGxhdGUiLCJUZW1wbGF0ZSIsInRlbXBsYXRlTG9hZGVkIiwicHJlbG9hZCIsIm9wdGlvbnMiLCJzdG9wIiwic3RhcnQiLCJzb21lIiwiZXhjbHVkZSIsInN0YXJ0c1dpdGgiLCJ0ZXN0IiwibGluayIsIlVSTCIsImUiLCJob3N0IiwicHJvdG9jb2wiLCJpbmNsdWRlcyIsInBsdWdpbnMiLCJSb290IiwiQ29tcCIsImhvb2tzIiwic3luYyIsIlJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBU0E7O0FBVkE7QUFZQTtBQUNPLElBQU1BLGVBQWUsR0FBRyxFQUF4Qjs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFDUCxJQUFNQyxpQkFBaUIsR0FBRyxFQUExQjtBQUNBLElBQU1DLGtCQUFrQixHQUFH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QXFFO0FBQ25FLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEOztBQUVNLElBQU1DLE9BQU8sR0FBRztBQUNyQkMsRUFBQUEsSUFBSSxFQUFFLGNBQUFDLElBQUksRUFBSTtBQUNaLFFBQU1DLEtBQUssR0FBRyxxQkFBU3RHLFdBQVQsRUFBc0IsTUFBdEIsQ0FBZDtBQUNBLFdBQU8sd0JBQVlzRyxLQUFaLEVBQW1CO0FBQUVDLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQW5CLEVBQW1DRixJQUFuQyxDQUFQO0FBQ0QsR0FKb0I7QUFLckJHLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUgsSUFBSSxFQUFJO0FBQ2QsUUFBTUMsS0FBSyxHQUFHLHFCQUFTdEcsV0FBVCxFQUFzQixRQUF0QixDQUFkO0FBQ0EsV0FBTyx3QkFBWXNHLEtBQVosRUFBbUI7QUFBRUMsTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBbkIsRUFBbUNGLElBQW5DLENBQVA7QUFDRDtBQVJvQixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vXG5pbXBvcnQge1xuICBjcmVhdGVQb29sLFxuICBnZXRSb3V0ZVBhdGgsXG4gIHBhdGhKb2luLFxuICBnZXRGdWxsUm91dGVEYXRhLFxuICBtYWtlUGF0aEFic29sdXRlLFxuICBnZXRIb29rcyxcbiAgcmVkdWNlSG9va3MsXG59IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgb25WaXNpYmxlIGZyb20gJy4vdXRpbHMvVmlzaWJpbGl0eSdcblxuLy8gUm91dGVJbmZvIC8gUm91dGVEYXRhXG5leHBvcnQgY29uc3Qgcm91dGVJbmZvQnlQYXRoID0ge31cbmV4cG9ydCBjb25zdCByb3V0ZUVycm9yQnlQYXRoID0ge31cbmV4cG9ydCBjb25zdCBzaGFyZWREYXRhQnlIYXNoID0ge31cbmNvbnN0IGluZmxpZ2h0Um91dGVJbmZvID0ge31cbmNvbnN0IGluZmxpZ2h0UHJvcEhhc2hlcyA9IHt9XG5sZXQgcHJlZmV0Y2hFeGNsdWRlcyA9IFtdXG5cbmV4cG9ydCBjb25zdCBhZGRQcmVmZXRjaEV4Y2x1ZGVzID0gZXhjbHVkZXMgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXhjbHVkZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeGNsdWRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3MvcmVnZXghJylcbiAgfVxuICBwcmVmZXRjaEV4Y2x1ZGVzID0gWy4uLnByZWZldGNoRXhjbHVkZXMsIC4uLmV4Y2x1ZGVzXVxufVxuXG5jb25zdCByZXF1ZXN0UG9vbCA9IGNyZWF0ZVBvb2woe1xuICBjb25jdXJyZW5jeTogTnVtYmVyKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QUkVGRVRDSF9SQVRFKSxcbn0pXG5cbi8vIFBsdWdpbnNcbmV4cG9ydCBjb25zdCBwbHVnaW5Ib29rcyA9IFtdXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJQbHVnaW5zID0gbmV3UGx1Z2lucyA9PiB7XG4gIHBsdWdpbkhvb2tzLnNwbGljZSgwLCBJbmZpbml0eSwgLi4ubmV3UGx1Z2lucylcbn1cblxuLy8gVGVtcGxhdGVzXG5leHBvcnQgY29uc3QgdGVtcGxhdGVzID0ge31cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZXNCeVBhdGggPSB7fVxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlRXJyb3JCeVBhdGggPSB7fVxuZXhwb3J0IGNvbnN0IG9uUmVsb2FkVGVtcGxhdGVzID0gZm4gPT4ge1xuICBvblJlbG9hZFRlbXBsYXRlcy5saXN0ZW5lcnMucHVzaChmbilcbiAgcmV0dXJuICgpID0+IHtcbiAgICBvblJlbG9hZFRlbXBsYXRlcy5saXN0ZW5lcnMgPSBvblJlbG9hZFRlbXBsYXRlcy5saXN0ZW5lcnMuZmlsdGVyKFxuICAgICAgZCA9PiBkICE9PSBmblxuICAgIClcbiAgfVxufVxub25SZWxvYWRUZW1wbGF0ZXMubGlzdGVuZXJzID0gW11cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVGVtcGxhdGVzID0gYXN5bmMgKHRtcHMsIG5vdEZvdW5kS2V5KSA9PiB7XG4gIE9iamVjdC5rZXlzKHRlbXBsYXRlc0J5UGF0aCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGRlbGV0ZSB0ZW1wbGF0ZXNCeVBhdGhba2V5XVxuICB9KVxuICBPYmplY3Qua2V5cyh0ZW1wbGF0ZUVycm9yQnlQYXRoKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgZGVsZXRlIHRlbXBsYXRlRXJyb3JCeVBhdGhba2V5XVxuICB9KVxuICBPYmplY3Qua2V5cyh0ZW1wbGF0ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBkZWxldGUgdGVtcGxhdGVzW2tleV1cbiAgfSlcbiAgT2JqZWN0LmtleXModG1wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRlbXBsYXRlc1trZXldID0gdG1wc1trZXldXG4gIH0pXG4gIHRlbXBsYXRlc0J5UGF0aFsnNDA0J10gPSB0ZW1wbGF0ZXNbbm90Rm91bmRLZXldXG5cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICBhd2FpdCBwcmVmZXRjaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG4gIH1cblxuICBvblJlbG9hZFRlbXBsYXRlcy5saXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5sb2coJ1JlYWN0IFN0YXRpYzogVGVtcGxhdGVzIFJlbG9hZGVkJylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJUZW1wbGF0ZUZvclBhdGggPSAocGF0aCwgdGVtcGxhdGUpID0+IHtcbiAgcGF0aCA9IGdldFJvdXRlUGF0aChwYXRoKVxuICB0ZW1wbGF0ZXNCeVBhdGhbcGF0aF0gPSB0ZW1wbGF0ZXNbdGVtcGxhdGVdXG59XG5cbmV4cG9ydCBjb25zdCBvblJlbG9hZENsaWVudERhdGEgPSBmbiA9PiB7XG4gIE9iamVjdC5rZXlzKHJvdXRlRXJyb3JCeVBhdGgpLmZvckVhY2goa2V5ID0+IHtcbiAgICBkZWxldGUgcm91dGVFcnJvckJ5UGF0aFtrZXldXG4gIH0pXG4gIG9uUmVsb2FkQ2xpZW50RGF0YS5saXN0ZW5lcnMucHVzaChmbilcbiAgcmV0dXJuICgpID0+IHtcbiAgICBvblJlbG9hZENsaWVudERhdGEubGlzdGVuZXJzID0gb25SZWxvYWRDbGllbnREYXRhLmxpc3RlbmVycy5maWx0ZXIoXG4gICAgICBkID0+IGQgIT09IGZuXG4gICAgKVxuICB9XG59XG5vblJlbG9hZENsaWVudERhdGEubGlzdGVuZXJzID0gW11cblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaW5pdCgpXG59XG5cbi8vIFdoZW4gaW4gZGV2ZWxvcG1lbnQsIGluaXQgYSBzb2NrZXQgdG8gbGlzdGVuIGZvciBkYXRhIGNoYW5nZXNcbi8vIFdoZW4gdGhlIGRhdGEgY2hhbmdlcywgd2UgaW52YWxpZGF0ZSBhbmQgcmVsb2FkIGFsbCBvZiB0aGUgcm91dGUgZGF0YVxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQsIHdlIG5lZWQgdG8gb3BlbiBhIHNvY2tldCB0byBsaXN0ZW4gZm9yIGNoYW5nZXMgdG8gZGF0YVxuICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnN0IGlvID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpXG4gICAgY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRhdGE6IHsgcG9ydCB9LFxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9nZXRNZXNzYWdlUG9ydCcpXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IGlvKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKVxuICAgICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAoeyB0eXBlIH0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JlbG9hZENsaWVudERhdGEnKSB7XG4gICAgICAgICAgICByZWxvYWRDbGllbnREYXRhKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ1JlYWN0LVN0YXRpYyBkYXRhIGhvdC1sb2FkZXIgd2Vic29ja2V0IGVuY291bnRlcmVkIHRoZSBmb2xsb3dpbmcgZXJyb3I6J1xuICAgICAgICApXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgfVxuICAgIH1cbiAgICBydW4oKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ESVNBQkxFX1BSRUxPQUQgPT09ICdmYWxzZScpIHtcbiAgICBzdGFydFByZWxvYWRlcigpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgcHJlbG9hZGVyIHNlYXJjaGVzIGZvciBhbGwgYW5jaG9yIGVsZW1lbnRzIG9uIHRoZSBwYWdlIGV2ZXJ5IHBvbGxcbiAqIGludGVydmFsLCBhbmQsIHVubGVzcyBzcGVjaWZpZWQgYnkgZGF0YS1wcmVmZXRjaCwgc3RhcnQgYSB2aXNpYmlsaXR5IG9ic2VydmVyXG4gKiBmb3IgdGhhdCBlbGVtZW50LlxuICpcbiAqIFRoZSBocmVmIG9mIHRoZSBhbmNob3IgaXMgcHJlbG9hZGVkIHdoZW4gdGhlIGVsZW1lbnQgYmVjb21lcyB2aXNpYmxlLlxuICovXG5mdW5jdGlvbiBzdGFydFByZWxvYWRlcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgY29uc3QgZWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpKVxuXG4gICAgZWxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgaHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICBjb25zdCBwcmVmZXRjaE9wdGlvbiA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmZXRjaCcpXG4gICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9XG4gICAgICAgICFwcmVmZXRjaE9wdGlvbiB8fFxuICAgICAgICBwcmVmZXRjaE9wdGlvbiA9PT0gJ3RydWUnIHx8XG4gICAgICAgIHByZWZldGNoT3B0aW9uID09PSAndmlzaWJsZSdcblxuICAgICAgaWYgKGhyZWYgJiYgc2hvdWxkUHJlZmV0Y2gpIHtcbiAgICAgICAgb25WaXNpYmxlKGVsLCAoKSA9PiBwcmVmZXRjaChocmVmKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0SW50ZXJ2YWwocnVuLCBOdW1iZXIocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BSRUxPQURfUE9MTF9JTlRFUlZBTCkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbG9hZENsaWVudERhdGEoKSB7XG4gIGNvbnNvbGUubG9nKCdSZWFjdCBTdGF0aWM6IFJlbG9hZGluZyBEYXRhLi4uJylcbiAgLy8gRGVsZXRlIGFsbCBjYWNoZWQgZGF0YVxuICA7W1xuICAgIHJvdXRlSW5mb0J5UGF0aCxcbiAgICBzaGFyZWREYXRhQnlIYXNoLFxuICAgIHJvdXRlRXJyb3JCeVBhdGgsXG4gICAgaW5mbGlnaHRSb3V0ZUluZm8sXG4gICAgaW5mbGlnaHRQcm9wSGFzaGVzLFxuICBdLmZvckVhY2gocGFydCA9PiB7XG4gICAgT2JqZWN0LmtleXMocGFydCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgZGVsZXRlIHBhcnRba2V5XVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gUHJlZmV0Y2ggdGhlIGN1cnJlbnQgcm91dGUncyBkYXRhIGJlZm9yZSB5b3UgcmVsb2FkIHJvdXRlc1xuICBhd2FpdCBwcmVmZXRjaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG5cbiAgb25SZWxvYWRDbGllbnREYXRhLmxpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSb3V0ZUluZm8ocGF0aCwgeyBwcmlvcml0eSB9ID0ge30pIHtcbiAgcGF0aCA9IGdldFJvdXRlUGF0aChwYXRoKVxuXG4gIC8vIENoZWNrIGlmIHdlIHNob3VsZCBmZXRjaCBSb3V0ZURhdGEgZm9yIHRoaXMgdXJsIGV0IGFsbC5cbiAgaWYgKCFpc1ByZWZldGNoYWJsZVJvdXRlKHBhdGgpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBDaGVjayB0aGUgY2FjaGUgZmlyc3RcbiAgaWYgKHJvdXRlSW5mb0J5UGF0aFtwYXRoXSkge1xuICAgIHJldHVybiByb3V0ZUluZm9CeVBhdGhbcGF0aF1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciBhbiBlcnJvciBvciBub24tZXhpc3RlbnQgc3RhdGljIHJvdXRlXG4gIGlmIChyb3V0ZUVycm9yQnlQYXRoW3BhdGhdKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgcm91dGVJbmZvXG5cbiAgdHJ5IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgLy8gSW4gZGV2LCByZXF1ZXN0IGZyb20gdGhlIHdlYnBhY2sgZGV2IHNlcnZlclxuICAgICAgaWYgKCFpbmZsaWdodFJvdXRlSW5mb1twYXRoXSkge1xuICAgICAgICBpbmZsaWdodFJvdXRlSW5mb1twYXRoXSA9IGF4aW9zLmdldChcbiAgICAgICAgICBgL19fcmVhY3Qtc3RhdGljX18vcm91dGVJbmZvLyR7cGF0aCA9PT0gJy8nID8gJycgOiBwYXRofWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBpbmZsaWdodFJvdXRlSW5mb1twYXRoXVxuICAgICAgcm91dGVJbmZvID0gZGF0YVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbiBwcm9kdWN0aW9uLCBmZXRjaCB0aGUgSlNPTiBmaWxlXG4gICAgICAvLyBGaW5kIHRoZSBsb2NhdGlvbiBvZiB0aGUgcm91dGVJbmZvLmpzb24gZmlsZVxuICAgICAgY29uc3Qgcm91dGVJbmZvUm9vdCA9XG4gICAgICAgIChwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfRElTQUJMRV9ST1VURV9QUkVGSVhJTkcgPT09ICd0cnVlJ1xuICAgICAgICAgID8gcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1NJVEVfUk9PVFxuICAgICAgICAgIDogcHJvY2Vzcy5lbnYuUkVBQ1RfU1RBVElDX1BVQkxJQ19QQVRIKSB8fCAnLydcblxuICAgICAgY29uc3QgZ2V0UGF0aCA9IGAke3JvdXRlSW5mb1Jvb3R9JHtwYXRoSm9pbihwYXRoLCAncm91dGVJbmZvLmpzb24nKX1gXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmlvcml0eSBjYWxsIGJ5cGFzcyB0aGUgcXVldWVcbiAgICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChnZXRQYXRoKVxuICAgICAgICByb3V0ZUluZm8gPSBkYXRhXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UsIGFkZCBpdCB0byB0aGUgcXVldWVcbiAgICAgICAgaWYgKCFpbmZsaWdodFJvdXRlSW5mb1twYXRoXSkge1xuICAgICAgICAgIGluZmxpZ2h0Um91dGVJbmZvW3BhdGhdID0gcmVxdWVzdFBvb2wuYWRkKCgpID0+IGF4aW9zLmdldChnZXRQYXRoKSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGluZmxpZ2h0Um91dGVJbmZvW3BhdGhdXG4gICAgICAgIHJvdXRlSW5mbyA9IGRhdGFcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElmIHRoZXJlIHdhcyBhbiBlcnJvciwgbWFyayB0aGUgcGF0aCBhcyBlcnJvcmVkXG4gICAgcm91dGVFcnJvckJ5UGF0aFtwYXRoXSA9IHRydWVcbiAgICAvLyBVbmxlc3Mgd2UgYWxyZWFkeSBmZXRjaGVkIHRoZSA0MDQgcGFnZSxcbiAgICAvLyB0cnkgdG8gbG9hZCBpbmZvIGZvciB0aGUgNDA0IHBhZ2VcbiAgICBpZiAoIXJvdXRlSW5mb0J5UGF0aFsnNDA0J10gJiYgIXJvdXRlRXJyb3JCeVBhdGhbJzQwNCddKSB7XG4gICAgICBnZXRSb3V0ZUluZm8oJzQwNCcsIHsgcHJpb3JpdHkgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVyblxuICB9XG4gIGlmICghcHJpb3JpdHkpIHtcbiAgICBkZWxldGUgaW5mbGlnaHRSb3V0ZUluZm9bcGF0aF1cbiAgfVxuICBpZiAodHlwZW9mIHJvdXRlSW5mbyAhPT0gJ29iamVjdCcgfHwgIXJvdXRlSW5mby5wYXRoKSB7XG4gICAgLy8gcm91dGVJbmZvIG11c3QgaGF2ZSByZXR1cm5lZCAyMDAsIGJ1dCBpcyBub3QgYWN0dWFsbHlcbiAgICAvLyBhIHJvdXRlSW5mbyBvYmplY3QuIE1hcmsgaXQgYXMgYW4gZXJyb3IgYW5kIG1vdmUgb24gc2lsZW50bHlcbiAgICByb3V0ZUVycm9yQnlQYXRoW3BhdGhdID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHJvdXRlSW5mb0J5UGF0aFtwYXRoXSA9IHJvdXRlSW5mb1xuICB9XG4gIHJldHVybiByb3V0ZUluZm9CeVBhdGhbcGF0aF1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWZldGNoRGF0YShwYXRoLCB7IHByaW9yaXR5IH0gPSB7fSkge1xuICAvLyBHZXQgcm91dGUgaW5mbyBzbyB3ZSBjYW4gY2hlY2sgaWYgcGF0aCBoYXMgYW55IGRhdGFcbiAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgZ2V0Um91dGVJbmZvKHBhdGgsIHsgcHJpb3JpdHkgfSlcblxuICAvLyBOb3QgYSBzdGF0aWMgcm91dGU/IEJhaWwgb3V0LlxuICBpZiAoIXJvdXRlSW5mbykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gRGVmZXIgdG8gdGhlIGNhY2hlIGZpcnN0LiBJbiBkZXYgbW9kZSwgdGhpcyBzaG91bGQgYWxyZWFkeSBiZSBhdmFpbGFibGUgZnJvbVxuICAvLyB0aGUgY2FsbCB0byBnZXRSb3V0ZUluZm9cbiAgaWYgKHJvdXRlSW5mby5zaGFyZWREYXRhKSB7XG4gICAgcmV0dXJuIGdldEZ1bGxSb3V0ZURhdGEocm91dGVJbmZvKVxuICB9XG5cbiAgLy8gUmVxdWVzdCBhbmQgYnVpbGQgdGhlIHByb3BzIG9uZSBieSBvbmVcbiAgcm91dGVJbmZvLnNoYXJlZERhdGEgPSB7fVxuXG4gIC8vIFJlcXVlc3QgdGhlIHRlbXBsYXRlIGFuZCBsb29wIG92ZXIgdGhlIHJvdXRlSW5mby5zaGFyZWRIYXNoZXNCeVByb3AsIHJlcXVlc3RpbmcgZWFjaCBwcm9wXG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIE9iamVjdC5rZXlzKHJvdXRlSW5mby5zaGFyZWRIYXNoZXNCeVByb3ApLm1hcChhc3luYyBrZXkgPT4ge1xuICAgICAgY29uc3QgaGFzaCA9IHJvdXRlSW5mby5zaGFyZWRIYXNoZXNCeVByb3Bba2V5XVxuXG4gICAgICAvLyBDaGVjayB0aGUgc2hhcmVkRGF0YUJ5SGFzaCBmaXJzdFxuICAgICAgaWYgKCFzaGFyZWREYXRhQnlIYXNoW2hhc2hdKSB7XG4gICAgICAgIC8vIFJldXNlIHJlcXVlc3QgZm9yIGR1cGxpY2F0ZSBpbmZsaWdodCByZXF1ZXN0c1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHN0YXRpY0RhdGFQYXRoID0gcGF0aEpvaW4oXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5SRUFDVF9TVEFUSUNfQVNTRVRTX1BBVEgsXG4gICAgICAgICAgICBgc3RhdGljRGF0YS8ke2hhc2h9Lmpzb25gXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IGFic29sdXRlU3RhdGljRGF0YVBhdGggPSBtYWtlUGF0aEFic29sdXRlKHN0YXRpY0RhdGFQYXRoKVxuXG4gICAgICAgICAgLy8gSWYgcHJpb3JpdHksIGdldCBpdCBpbW1lZGlhdGVseVxuICAgICAgICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9wIH0gPSBhd2FpdCBheGlvcy5nZXQoYWJzb2x1dGVTdGF0aWNEYXRhUGF0aClcbiAgICAgICAgICAgIHNoYXJlZERhdGFCeUhhc2hbaGFzaF0gPSBwcm9wXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vbiBwcmlvcml0eSwgc2hhcmUgaW5mbGlnaHQgcmVxdWVzdHMgYW5kIHVzZSBwb29sXG4gICAgICAgICAgICBpZiAoIWluZmxpZ2h0UHJvcEhhc2hlc1toYXNoXSkge1xuICAgICAgICAgICAgICBpbmZsaWdodFByb3BIYXNoZXNbaGFzaF0gPSByZXF1ZXN0UG9vbC5hZGQoKCkgPT5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYWJzb2x1dGVTdGF0aWNEYXRhUGF0aClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9wIH0gPSBhd2FpdCBpbmZsaWdodFByb3BIYXNoZXNbaGFzaF1cbiAgICAgICAgICAgIC8vIFBsYWNlIGl0IGluIHRoZSBjYWNoZVxuICAgICAgICAgICAgc2hhcmVkRGF0YUJ5SGFzaFtoYXNoXSA9IHByb3BcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ0Vycm9yOiBUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBhIHByb3AgZm9yIHRoaXMgcm91dGUhIGhhc2hJRDonLFxuICAgICAgICAgICAgaGFzaFxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByaW9yaXR5KSB7XG4gICAgICAgICAgZGVsZXRlIGluZmxpZ2h0UHJvcEhhc2hlc1toYXNoXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwganVzdCBzZXQgaXQgYXMgdGhlIGtleVxuICAgICAgcm91dGVJbmZvLnNoYXJlZERhdGFba2V5XSA9IHNoYXJlZERhdGFCeUhhc2hbaGFzaF1cbiAgICB9KVxuICApXG5cbiAgcmV0dXJuIGdldEZ1bGxSb3V0ZURhdGEocm91dGVJbmZvKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2hUZW1wbGF0ZShwYXRoLCB7IHByaW9yaXR5IH0gPSB7fSkge1xuICAvLyBDbGVhbiB0aGUgcGF0aFxuICBwYXRoID0gZ2V0Um91dGVQYXRoKHBhdGgpXG4gIC8vIEdldCByb3V0ZSBpbmZvIHNvIHdlIGNhbiBjaGVjayBpZiBwYXRoIGhhcyBhbnkgZGF0YVxuICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCBnZXRSb3V0ZUluZm8ocGF0aCwgeyBwcmlvcml0eSB9KVxuXG4gIGlmIChyb3V0ZUluZm8pIHtcbiAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHRoZSBwYXRoIGFzIGRlZmluZWQgaW4gdGhlIHJvdXRlSW5mbyBvYmplY3QgaGVyZS5cbiAgICAvLyBUaGlzIHdpbGwgbWFrZSBzdXJlIDQwNCByb3V0ZSBpbmZvIHJldHVybmVkIGZyb20gZ2V0Um91dGVJbmZvIGlzIGhhbmRsZWQgY29ycmVjdGx5LlxuICAgIHJlZ2lzdGVyVGVtcGxhdGVGb3JQYXRoKHJvdXRlSW5mby5wYXRoLCByb3V0ZUluZm8udGVtcGxhdGUpXG4gIH1cblxuICAvLyBQcmVsb2FkIHRoZSB0ZW1wbGF0ZSBpZiBhdmFpbGFibGVcbiAgY29uc3QgVGVtcGxhdGUgPSB0ZW1wbGF0ZXNCeVBhdGhbcGF0aF1cbiAgaWYgKCFUZW1wbGF0ZSkge1xuICAgIC8vIElmIG5vIHRlbXBsYXRlIHdhcyBmb3VuZCwgbWFyayBpdCB3aXRoIGFuIGVycm9yXG4gICAgdGVtcGxhdGVFcnJvckJ5UGF0aFtwYXRoXSA9IHRydWVcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIElmIHdlIGRpZG4ndCBubyByb3V0ZSBpbmZvIHdhcyByZXR1cm4sIHRoZXJlIGlzIG5vdGhpbmcgbW9yZSB0byBkbyBoZXJlXG4gIGlmICghcm91dGVJbmZvKSB7XG4gICAgcmV0dXJuIFRlbXBsYXRlXG4gIH1cblxuICBpZiAoIXJvdXRlSW5mby50ZW1wbGF0ZUxvYWRlZCAmJiBUZW1wbGF0ZS5wcmVsb2FkKSB7XG4gICAgaWYgKHByaW9yaXR5KSB7XG4gICAgICBhd2FpdCBUZW1wbGF0ZS5wcmVsb2FkKClcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgcmVxdWVzdFBvb2wuYWRkKCgpID0+IFRlbXBsYXRlLnByZWxvYWQoKSlcbiAgICB9XG4gICAgcm91dGVJbmZvLnRlbXBsYXRlTG9hZGVkID0gdHJ1ZVxuICB9XG4gIHJldHVybiBUZW1wbGF0ZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2gocGF0aCwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIENsZWFuIHRoZSBwYXRoXG4gIHBhdGggPSBnZXRSb3V0ZVBhdGgocGF0aClcblxuICBjb25zdCB7IHR5cGUgfSA9IG9wdGlvbnNcblxuICAvLyBJZiBpdCdzIHByaW9yaXR5LCB3ZSBzdG9wIHRoZSBxdWV1ZSB0ZW1wb3JhcmlseVxuICBpZiAob3B0aW9ucy5wcmlvcml0eSkge1xuICAgIHJlcXVlc3RQb29sLnN0b3AoKVxuICB9XG5cbiAgbGV0IGRhdGFcbiAgaWYgKHR5cGUgPT09ICdkYXRhJykge1xuICAgIGRhdGEgPSBhd2FpdCBwcmVmZXRjaERhdGEocGF0aCwgb3B0aW9ucylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAndGVtcGxhdGUnKSB7XG4gICAgYXdhaXQgcHJlZmV0Y2hUZW1wbGF0ZShwYXRoLCBvcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIDtbZGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBwcmVmZXRjaERhdGEocGF0aCwgb3B0aW9ucyksXG4gICAgICBwcmVmZXRjaFRlbXBsYXRlKHBhdGgsIG9wdGlvbnMpLFxuICAgIF0pXG4gIH1cblxuICAvLyBJZiBpdCB3YXMgcHJpb3JpdHksIHN0YXJ0IHRoZSBxdWV1ZSBhZ2FpblxuICBpZiAob3B0aW9ucy5wcmlvcml0eSkge1xuICAgIHJlcXVlc3RQb29sLnN0YXJ0KClcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByZWZldGNoYWJsZVJvdXRlKHBhdGgpIHtcbiAgLy8gd2hlbiByZW5kZXJpbmcgc3RhdGljIHBhZ2VzIHdlIGRvbnQgbmVlZCB0aGlzIGF0IGFsbFxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKFxuICAgIHByZWZldGNoRXhjbHVkZXMuc29tZShleGNsdWRlID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZXhjbHVkZSA9PT0gJ3N0cmluZycgJiYgcGF0aC5zdGFydHNXaXRoKGV4Y2x1ZGUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGV4Y2x1ZGUgPT09ICdvYmplY3QnICYmIGV4Y2x1ZGUudGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCB7IGxvY2F0aW9uIH0gPSBkb2N1bWVudFxuICBsZXQgbGlua1xuXG4gIHRyeSB7XG4gICAgbGluayA9IG5ldyBVUkwocGF0aCwgbG9jYXRpb24uaHJlZilcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFJldHVybiBmYWxzZSBvbiBpbnZhbGlkIFVSTHNcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGlmIHRoZSBob3N0bmFtZS9wb3J0L3Byb3RvY29sIGRvZXNuJ3QgbWF0Y2ggaXRzIG5vdCBhIHJvdXRlIGxpbmtcbiAgaWYgKGxvY2F0aW9uLmhvc3QgIT09IGxpbmsuaG9zdCB8fCBsb2NhdGlvbi5wcm90b2NvbCAhPT0gbGluay5wcm90b2NvbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gZGVueSBhbGwgZmlsZXMgd2l0aCBleHRlbnNpb24gb3RoZXIgdGhhbiAuaHRtbFxuICBpZiAobGluay5wYXRobmFtZS5pbmNsdWRlcygnLicpICYmICFsaW5rLnBhdGhuYW1lLmluY2x1ZGVzKCcuaHRtbCcpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgcGx1Z2lucyA9IHtcbiAgUm9vdDogQ29tcCA9PiB7XG4gICAgY29uc3QgaG9va3MgPSBnZXRIb29rcyhwbHVnaW5Ib29rcywgJ1Jvb3QnKVxuICAgIHJldHVybiByZWR1Y2VIb29rcyhob29rcywgeyBzeW5jOiB0cnVlIH0pKENvbXApXG4gIH0sXG4gIFJvdXRlczogQ29tcCA9PiB7XG4gICAgY29uc3QgaG9va3MgPSBnZXRIb29rcyhwbHVnaW5Ib29rcywgJ1JvdXRlcycpXG4gICAgcmV0dXJuIHJlZHVjZUhvb2tzKGhvb2tzLCB7IHN5bmM6IHRydWUgfSkoQ29tcClcbiAgfSxcbn1cbiJdfQ==