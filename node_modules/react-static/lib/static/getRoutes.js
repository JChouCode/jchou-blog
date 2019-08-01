"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRoutes;
exports.normalizeAllRoutes = normalizeAllRoutes;
exports.normalizeRoute = normalizeRoute;
exports.rebuildRoutes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("../utils");

var _plugins = _interopRequireDefault(require("./plugins"));

//
var rebuildRoutes = function rebuildRoutes() {
  rebuildRoutes.current();
};

exports.rebuildRoutes = rebuildRoutes;

rebuildRoutes.current = function () {
  throw new Error('Routes cannot be rebuilt yet!');
};

function getRoutes(_x) {
  return _getRoutes.apply(this, arguments);
} // We recursively loop through the routes and their children and
// return an array of normalised routes.
// Original routes array [{ path: 'path', children: { path: 'to' } }]
// These can be returned as flat routes eg. [{ path: 'path' }, { path: 'path/to' }]
// Or they can be returned nested routes eg. [{ path: 'path', children: { path: 'path/to' } }]


function _getRoutes() {
  _getRoutes = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(state) {
    var callback,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            callback = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : function (d) {
              return d;
            };
            rebuildRoutes.current =
            /*#__PURE__*/
            (0, _asyncToGenerator2["default"])(
            /*#__PURE__*/
            _regenerator["default"].mark(function _callee() {
              var _state, silent, incremental, pluginRoutes, userRoutes, routes, _normalizeAllRoutes, allNormalizedRoutes, hasIndex, has404;

              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _state = state, silent = _state.silent, incremental = _state.incremental;
                      if (!silent) console.log('Building Routes...');
                      if (!silent) (0, _utils.time)(_chalk["default"].green("[\u2713] Routes Built"));
                      _context.next = 5;
                      return _plugins["default"].beforePrepareRoutes(state);

                    case 5:
                      state = _context.sent;
                      _context.next = 8;
                      return _plugins["default"].getRoutes([], state);

                    case 8:
                      pluginRoutes = _context.sent;
                      _context.next = 11;
                      return state.config.getRoutes(state);

                    case 11:
                      userRoutes = _context.sent;
                      routes = [].concat((0, _toConsumableArray2["default"])(pluginRoutes), (0, _toConsumableArray2["default"])(userRoutes)); // Flatten and normalize all of the routes

                      _normalizeAllRoutes = normalizeAllRoutes(routes, state), allNormalizedRoutes = _normalizeAllRoutes.routes, hasIndex = _normalizeAllRoutes.hasIndex, has404 = _normalizeAllRoutes.has404; // If no Index page was found, throw an error. This is required

                      if (!(!hasIndex && !incremental)) {
                        _context.next = 16;
                        break;
                      }

                      throw new Error('Could not find a route for the "index" page of your site! This is ' + 'required. Please create a page or specify a route and template ' + 'for this page.');

                    case 16:
                      // If no 404 page was found, add one. This is required.
                      if (!has404 && !incremental) {
                        allNormalizedRoutes.unshift({
                          path: '404',
                          template: _path["default"].relative(state.config.paths.ROOT, _path["default"].resolve(__dirname, _path["default"].join('..', 'browser', 'components', 'Default404')))
                        });
                      }

                      if (!silent) (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Routes Built"));
                      state = (0, _objectSpread2["default"])({}, state, {
                        routes: allNormalizedRoutes
                      });
                      _context.t0 = callback;
                      _context.next = 22;
                      return _plugins["default"].afterPrepareRoutes(state);

                    case 22:
                      _context.t1 = _context.sent;
                      return _context.abrupt("return", (0, _context.t0)(_context.t1));

                    case 24:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
            return _context2.abrupt("return", rebuildRoutes.current());

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRoutes.apply(this, arguments);
}

function normalizeAllRoutes(routes, state) {
  var routesByPath = {};
  var hasIndex;
  var has404; // This hook is set up beore the loop, since it could have expensive
  // overhead diving into plugins every time

  var pluginNormalizeRoute = _plugins["default"].normalizeRoute(state);

  var recurseRoute = function recurseRoute(route, parent) {
    // Normalize the route
    var normalizedRoute = normalizeRoute(route, parent, pluginNormalizeRoute); // we check an array of paths to see
    // if route path already existings

    var existingRoute = routesByPath[normalizedRoute.path]; // If the route has children, we do a depth-first recurse

    if (normalizedRoute.children) {
      normalizedRoute.children.forEach(function (childRoute) {
        return recurseRoute(childRoute, normalizedRoute);
      });
    } // If the route exists


    if (existingRoute) {
      // If it is meant to replace any routes before it
      if (!normalizedRoute.replace) {
        // If not replacing, we need to merge the two
        // routes together
        Object.assign(existingRoute, normalizedRoute); // Then make sure we're pointing to the exising route

        normalizedRoute = existingRoute;
      }
    }

    delete normalizedRoute.children; // Register the route by path

    routesByPath[normalizedRoute.path] = normalizedRoute; // Keep track of index and 404 routes existence

    if (normalizedRoute.path === '/') {
      hasIndex = true;
    }

    if (normalizedRoute.path === '404') {
      has404 = true;
    }

    if (normalizedRoute.path.indexOf('\\') !== -1) {
      throw new Error('Plugins must return a normalized path for the `path` key of a route,' + ' which is a path with / and not \\.');
    }
  };

  routes.forEach(function (route) {
    return recurseRoute(route);
  });
  var normalizedRoutes = Object.values(routesByPath);
  return {
    routes: normalizedRoutes,
    hasIndex: hasIndex,
    has404: has404
  };
}

function normalizeRoute(route) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pluginNormalizeRoute = arguments.length > 2 ? arguments[2] : undefined;
  var _parent$path = parent.path,
      parentPath = _parent$path === void 0 ? '/' : _parent$path;

  if (!route.path) {
    throw new Error("No path defined for route: ".concat(JSON.stringify(route)));
  }

  var routePath = (0, _utils.pathJoin)(parentPath, route.path);

  if (typeof route.noIndex !== 'undefined') {
    console.warn("Warning: Route ".concat(route.path, " is using 'noIndex'. Did you mean 'noindex'?"));
  }

  route.path = (0, _utils.getRoutePath)(routePath);
  route.parent = parent;
  route = pluginNormalizeRoute(route);
  delete route.parent;
  return route;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2V0Um91dGVzLmpzIl0sIm5hbWVzIjpbInJlYnVpbGRSb3V0ZXMiLCJjdXJyZW50IiwiRXJyb3IiLCJnZXRSb3V0ZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiZCIsInNpbGVudCIsImluY3JlbWVudGFsIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwiZ3JlZW4iLCJwbHVnaW5zIiwiYmVmb3JlUHJlcGFyZVJvdXRlcyIsInBsdWdpblJvdXRlcyIsImNvbmZpZyIsInVzZXJSb3V0ZXMiLCJyb3V0ZXMiLCJub3JtYWxpemVBbGxSb3V0ZXMiLCJhbGxOb3JtYWxpemVkUm91dGVzIiwiaGFzSW5kZXgiLCJoYXM0MDQiLCJ1bnNoaWZ0IiwicGF0aCIsInRlbXBsYXRlIiwicmVsYXRpdmUiLCJwYXRocyIsIlJPT1QiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiam9pbiIsImFmdGVyUHJlcGFyZVJvdXRlcyIsInJvdXRlc0J5UGF0aCIsInBsdWdpbk5vcm1hbGl6ZVJvdXRlIiwibm9ybWFsaXplUm91dGUiLCJyZWN1cnNlUm91dGUiLCJyb3V0ZSIsInBhcmVudCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImV4aXN0aW5nUm91dGUiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZFJvdXRlIiwicmVwbGFjZSIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4T2YiLCJub3JtYWxpemVkUm91dGVzIiwidmFsdWVzIiwicGFyZW50UGF0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb3V0ZVBhdGgiLCJub0luZGV4Iiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFGQTtBQUlPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUNqQ0EsRUFBQUEsYUFBYSxDQUFDQyxPQUFkO0FBQ0QsQ0FGTTs7OztBQUlQRCxhQUFhLENBQUNDLE9BQWQsR0FBd0IsWUFBTTtBQUM1QixR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QWEseUJBQWE2QixTQUFiLENBQWI7QUFFQWhCLEVBQUFBLEtBQUssQ0FBQ0MsTUFBTixHQUFlQSxNQUFmO0FBQ0FELEVBQUFBLEtBQUssR0FBR0gsb0JBQW9CLENBQUNHLEtBQUQsQ0FBNUI7QUFDQSxTQUFPQSxLQUFLLENBQUNDLE1BQWI7QUFFQSxTQUFPRCxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuLy9cbmltcG9ydCB7IHBhdGhKb2luLCBnZXRSb3V0ZVBhdGgsIHRpbWUsIHRpbWVFbmQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBwbHVnaW5zIGZyb20gJy4vcGx1Z2lucydcblxuZXhwb3J0IGNvbnN0IHJlYnVpbGRSb3V0ZXMgPSAoKSA9PiB7XG4gIHJlYnVpbGRSb3V0ZXMuY3VycmVudCgpXG59XG5cbnJlYnVpbGRSb3V0ZXMuY3VycmVudCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZXMgY2Fubm90IGJlIHJlYnVpbHQgeWV0IScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFJvdXRlcyhzdGF0ZSwgY2FsbGJhY2sgPSBkID0+IGQpIHtcbiAgcmVidWlsZFJvdXRlcy5jdXJyZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgc2lsZW50LCBpbmNyZW1lbnRhbCB9ID0gc3RhdGVcblxuICAgIGlmICghc2lsZW50KSBjb25zb2xlLmxvZygnQnVpbGRpbmcgUm91dGVzLi4uJylcbiAgICBpZiAoIXNpbGVudCkgdGltZShjaGFsay5ncmVlbignW1xcdTI3MTNdIFJvdXRlcyBCdWlsdCcpKVxuXG4gICAgc3RhdGUgPSBhd2FpdCBwbHVnaW5zLmJlZm9yZVByZXBhcmVSb3V0ZXMoc3RhdGUpXG5cbiAgICBjb25zdCBwbHVnaW5Sb3V0ZXMgPSBhd2FpdCBwbHVnaW5zLmdldFJvdXRlcyhbXSwgc3RhdGUpXG4gICAgY29uc3QgdXNlclJvdXRlcyA9IGF3YWl0IHN0YXRlLmNvbmZpZy5nZXRSb3V0ZXMoc3RhdGUpXG5cbiAgICBjb25zdCByb3V0ZXMgPSBbLi4ucGx1Z2luUm91dGVzLCAuLi51c2VyUm91dGVzXVxuXG4gICAgLy8gRmxhdHRlbiBhbmQgbm9ybWFsaXplIGFsbCBvZiB0aGUgcm91dGVzXG4gICAgY29uc3Qge1xuICAgICAgcm91dGVzOiBhbGxOb3JtYWxpemVkUm91dGVzLFxuICAgICAgaGFzSW5kZXgsXG4gICAgICBoYXM0MDQsXG4gICAgfSA9IG5vcm1hbGl6ZUFsbFJvdXRlcyhyb3V0ZXMsIHN0YXRlKVxuXG4gICAgLy8gSWYgbm8gSW5kZXggcGFnZSB3YXMgZm91bmQsIHRocm93IGFuIGVycm9yLiBUaGlzIGlzIHJlcXVpcmVkXG4gICAgaWYgKCFoYXNJbmRleCAmJiAhaW5jcmVtZW50YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0NvdWxkIG5vdCBmaW5kIGEgcm91dGUgZm9yIHRoZSBcImluZGV4XCIgcGFnZSBvZiB5b3VyIHNpdGUhIFRoaXMgaXMgJyArXG4gICAgICAgICAgJ3JlcXVpcmVkLiBQbGVhc2UgY3JlYXRlIGEgcGFnZSBvciBzcGVjaWZ5IGEgcm91dGUgYW5kIHRlbXBsYXRlICcgK1xuICAgICAgICAgICdmb3IgdGhpcyBwYWdlLidcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBJZiBubyA0MDQgcGFnZSB3YXMgZm91bmQsIGFkZCBvbmUuIFRoaXMgaXMgcmVxdWlyZWQuXG4gICAgaWYgKCFoYXM0MDQgJiYgIWluY3JlbWVudGFsKSB7XG4gICAgICBhbGxOb3JtYWxpemVkUm91dGVzLnVuc2hpZnQoe1xuICAgICAgICBwYXRoOiAnNDA0JyxcbiAgICAgICAgdGVtcGxhdGU6IHBhdGgucmVsYXRpdmUoXG4gICAgICAgICAgc3RhdGUuY29uZmlnLnBhdGhzLlJPT1QsXG4gICAgICAgICAgcGF0aC5yZXNvbHZlKFxuICAgICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgICAgcGF0aC5qb2luKCcuLicsICdicm93c2VyJywgJ2NvbXBvbmVudHMnLCAnRGVmYXVsdDQwNCcpXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoIXNpbGVudCkgdGltZUVuZChjaGFsay5ncmVlbignW1xcdTI3MTNdIFJvdXRlcyBCdWlsdCcpKVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHJvdXRlczogYWxsTm9ybWFsaXplZFJvdXRlcyxcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2soYXdhaXQgcGx1Z2lucy5hZnRlclByZXBhcmVSb3V0ZXMoc3RhdGUpKVxuICB9XG5cbiAgcmV0dXJuIHJlYnVpbGRSb3V0ZXMuY3VycmVudCgpXG59XG5cbi8vIFdlIHJlY3Vyc2l2ZWx5IGxvb3AgdGhyb3VnaCB0aGUgcm91dGVzIGFuZCB0aGVpciBjaGlsZHJlbiBhbmRcbi8vIHJldHVybiBhbiBhcnJheSBvZiBub3JtYWxpc2VkIHJvdXRlcy5cbi8vIE9yaWdpbmFsIHJvdXRlcyBhcnJheSBbeyBwYXRoOiAncGF0aCcsIGNoaWxkcmVuOiB7IHBhdGg6ICd0bycgfSB9XVxuLy8gVGhlc2UgY2FuIGJlIHJldHVybmVkIGFzIGZsYXQgcm91dGVzIGVnLiBbeyBwYXRoOiAncGF0aCcgfSwgeyBwYXRoOiAncGF0aC90bycgfV1cbi8vIE9yIHRoZXkgY2FuIGJlIHJldHVybmVkIG5lc3RlZCByb3V0ZXMgZWcuIFt7IHBhdGg6ICdwYXRoJywgY2hpbGRyZW46IHsgcGF0aDogJ3BhdGgvdG8nIH0gfV1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbGxSb3V0ZXMocm91dGVzLCBzdGF0ZSkge1xuICBjb25zdCByb3V0ZXNCeVBhdGggPSB7fVxuICBsZXQgaGFzSW5kZXhcbiAgbGV0IGhhczQwNFxuXG4gIC8vIFRoaXMgaG9vayBpcyBzZXQgdXAgYmVvcmUgdGhlIGxvb3AsIHNpbmNlIGl0IGNvdWxkIGhhdmUgZXhwZW5zaXZlXG4gIC8vIG92ZXJoZWFkIGRpdmluZyBpbnRvIHBsdWdpbnMgZXZlcnkgdGltZVxuICBjb25zdCBwbHVnaW5Ob3JtYWxpemVSb3V0ZSA9IHBsdWdpbnMubm9ybWFsaXplUm91dGUoc3RhdGUpXG5cbiAgY29uc3QgcmVjdXJzZVJvdXRlID0gKHJvdXRlLCBwYXJlbnQpID0+IHtcbiAgICAvLyBOb3JtYWxpemUgdGhlIHJvdXRlXG4gICAgbGV0IG5vcm1hbGl6ZWRSb3V0ZSA9IG5vcm1hbGl6ZVJvdXRlKHJvdXRlLCBwYXJlbnQsIHBsdWdpbk5vcm1hbGl6ZVJvdXRlKVxuXG4gICAgLy8gd2UgY2hlY2sgYW4gYXJyYXkgb2YgcGF0aHMgdG8gc2VlXG4gICAgLy8gaWYgcm91dGUgcGF0aCBhbHJlYWR5IGV4aXN0aW5nc1xuICAgIGNvbnN0IGV4aXN0aW5nUm91dGUgPSByb3V0ZXNCeVBhdGhbbm9ybWFsaXplZFJvdXRlLnBhdGhdXG5cbiAgICAvLyBJZiB0aGUgcm91dGUgaGFzIGNoaWxkcmVuLCB3ZSBkbyBhIGRlcHRoLWZpcnN0IHJlY3Vyc2VcbiAgICBpZiAobm9ybWFsaXplZFJvdXRlLmNoaWxkcmVuKSB7XG4gICAgICBub3JtYWxpemVkUm91dGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZFJvdXRlID0+XG4gICAgICAgIHJlY3Vyc2VSb3V0ZShjaGlsZFJvdXRlLCBub3JtYWxpemVkUm91dGUpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHJvdXRlIGV4aXN0c1xuICAgIGlmIChleGlzdGluZ1JvdXRlKSB7XG4gICAgICAvLyBJZiBpdCBpcyBtZWFudCB0byByZXBsYWNlIGFueSByb3V0ZXMgYmVmb3JlIGl0XG4gICAgICBpZiAoIW5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKSB7XG4gICAgICAgIC8vIElmIG5vdCByZXBsYWNpbmcsIHdlIG5lZWQgdG8gbWVyZ2UgdGhlIHR3b1xuICAgICAgICAvLyByb3V0ZXMgdG9nZXRoZXJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihleGlzdGluZ1JvdXRlLCBub3JtYWxpemVkUm91dGUpXG4gICAgICAgIC8vIFRoZW4gbWFrZSBzdXJlIHdlJ3JlIHBvaW50aW5nIHRvIHRoZSBleGlzaW5nIHJvdXRlXG4gICAgICAgIG5vcm1hbGl6ZWRSb3V0ZSA9IGV4aXN0aW5nUm91dGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGUgbm9ybWFsaXplZFJvdXRlLmNoaWxkcmVuXG5cbiAgICAvLyBSZWdpc3RlciB0aGUgcm91dGUgYnkgcGF0aFxuICAgIHJvdXRlc0J5UGF0aFtub3JtYWxpemVkUm91dGUucGF0aF0gPSBub3JtYWxpemVkUm91dGVcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgaW5kZXggYW5kIDQwNCByb3V0ZXMgZXhpc3RlbmNlXG4gICAgaWYgKG5vcm1hbGl6ZWRSb3V0ZS5wYXRoID09PSAnLycpIHtcbiAgICAgIGhhc0luZGV4ID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkUm91dGUucGF0aCA9PT0gJzQwNCcpIHtcbiAgICAgIGhhczQwNCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFJvdXRlLnBhdGguaW5kZXhPZignXFxcXCcpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUGx1Z2lucyBtdXN0IHJldHVybiBhIG5vcm1hbGl6ZWQgcGF0aCBmb3IgdGhlIGBwYXRoYCBrZXkgb2YgYSByb3V0ZSwnICtcbiAgICAgICAgICAnIHdoaWNoIGlzIGEgcGF0aCB3aXRoIC8gYW5kIG5vdCBcXFxcLidcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiByZWN1cnNlUm91dGUocm91dGUpKVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWRSb3V0ZXMgPSBPYmplY3QudmFsdWVzKHJvdXRlc0J5UGF0aClcblxuICByZXR1cm4ge1xuICAgIHJvdXRlczogbm9ybWFsaXplZFJvdXRlcyxcbiAgICBoYXNJbmRleCxcbiAgICBoYXM0MDQsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVJvdXRlKHJvdXRlLCBwYXJlbnQgPSB7fSwgcGx1Z2luTm9ybWFsaXplUm91dGUpIHtcbiAgY29uc3QgeyBwYXRoOiBwYXJlbnRQYXRoID0gJy8nIH0gPSBwYXJlbnRcblxuICBpZiAoIXJvdXRlLnBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBhdGggZGVmaW5lZCBmb3Igcm91dGU6ICR7SlNPTi5zdHJpbmdpZnkocm91dGUpfWApXG4gIH1cblxuICBjb25zdCByb3V0ZVBhdGggPSBwYXRoSm9pbihwYXJlbnRQYXRoLCByb3V0ZS5wYXRoKVxuXG4gIGlmICh0eXBlb2Ygcm91dGUubm9JbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogUm91dGUgJHtyb3V0ZS5wYXRofSBpcyB1c2luZyAnbm9JbmRleCcuIERpZCB5b3UgbWVhbiAnbm9pbmRleCc/YFxuICAgIClcbiAgfVxuXG4gIHJvdXRlLnBhdGggPSBnZXRSb3V0ZVBhdGgocm91dGVQYXRoKVxuXG4gIHJvdXRlLnBhcmVudCA9IHBhcmVudFxuICByb3V0ZSA9IHBsdWdpbk5vcm1hbGl6ZVJvdXRlKHJvdXRlKVxuICBkZWxldGUgcm91dGUucGFyZW50XG5cbiAgcmV0dXJuIHJvdXRlXG59XG4iXX0=