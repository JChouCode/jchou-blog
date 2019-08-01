"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chalk = _interopRequireDefault(require("chalk"));

var _slash = _interopRequireDefault(require("slash"));

var _path = _interopRequireDefault(require("path"));

var _utils = require("../utils");

var _default =
/*#__PURE__*/
function () {
  var _extractTemplates = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var config, routes, incremental, templates, notFoundPending;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = state.config, routes = state.routes, incremental = state.incremental;
            console.log('Building Templates...');
            (0, _utils.time)(_chalk["default"].green("[\u2713] Templates Built")); // Dedupe all templates into an array

            templates = [];
            notFoundPending = true;
            routes.forEach(function (route) {
              if (!route.template) {
                return;
              }

              route.template = (0, _slash["default"])(_path["default"].relative(config.paths.ARTIFACTS, route.template)); // Check if the template has already been added

              var index = templates.indexOf(route.template);

              if (index === -1) {
                // If it's new, add it
                if (route.path === '404') {
                  templates.unshift(route.template);
                  notFoundPending = false;
                } else {
                  templates.push(route.template);
                }
              }
            });
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Templates Built"));

            if (!(!incremental && notFoundPending)) {
              _context.next = 9;
              break;
            }

            throw new Error('A 404 template was not found at template extraction time. It should have been at least defaulted to one by now, so this is very bad. File an issue if you see this.');

          case 9:
            return _context.abrupt("return", (0, _objectSpread2["default"])({}, state, {
              templates: templates
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function extractTemplates(_x) {
    return _extractTemplates.apply(this, arguments);
  }

  return extractTemplates;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXh0cmFjdFRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImNvbmZpZyIsInJvdXRlcyIsImluY3JlbWVudGFsIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwiZ3JlZW4iLCJ0ZW1wbGF0ZXMiLCJub3RGb3VuZFBlbmRpbmciLCJmb3JFYWNoIiwicm91dGUiLCJ0ZW1wbGF0ZSIsInBhdGgiLCJyZWxhdGl2ZSIsInBhdGhzIiwiQVJUSUZBQ1RTIiwiaW5kZXgiLCJpbmRleE9mIiwidW5zaGlmdCIsInB1c2giLCJFcnJvciIsImV4dHJhY3RUZW1wbGF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OytCQUVnQixpQkFBZ0NBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNOQyxZQUFBQSxNQURNLEdBQzBCRCxLQUQxQixDQUNOQyxNQURNLEVBQ0VDLE1BREYsR0FDMEJGLEtBRDFCLENBQ0VFLE1BREYsRUFDVUMsV0FEVixHQUMwQkgsS0FEMUIsQ0FDVUcsV0FEVjtBQUVkQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLDZCQUFLQyxrQkFBTUMsS0FBTixDQUFZLDBCQUFaLENBQUwsRUFIYyxDQUtkOztBQUNNQyxZQUFBQSxTQU5RLEdBTUksRUFOSjtBQU9WQyxZQUFBQSxlQVBVLEdBT1EsSUFQUjtBQVNkUCxZQUFBQSxNQUFNLENBQUNRLE9BQVAsQ0FBZSxVQUFBQyxLQUFLLEVBQUk7QUFDdEIsa0JBQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFYLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBQ0RELGNBQUFBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQix1QkFDZkMsaUJBQUtDLFFBQUwsQ0FBY2IsTUFBTSxDQUFDYyxLQUFQLENBQWFDLFNBQTNCLEVBQXNDTCxLQUFLLENBQUNDLFFBQTVDLENBRGUsQ0FBakIsQ0FKc0IsQ0FPdEI7O0FBQ0Esa0JBQU1LLEtBQUssR0FBR1QsU0FBUyxDQUFDVSxPQUFWLENBQWtCUCxLQUFLLENBQUNDLFFBQXhCLENBQWQ7O0FBQ0Esa0JBQUlLLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEI7QUFDQSxvQkFBSU4sS0FBSyxDQUFDRSxJQUFOLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJMLGtCQUFBQSxTQUFTLENBQUNXLE9BQVYsQ0FBa0JSLEtBQUssQ0FBQ0MsUUFBeEI7QUFDQUgsa0JBQUFBLGVBQWUsR0FBRyxLQUFsQjtBQUNELGlCQUhELE1BR087QUFDTEQsa0JBQUFBLFNBQVMsQ0FBQ1ksSUFBVixDQUFlVCxLQUFLLENBQUNDLFFBQXJCO0FBQ0Q7QUFDRjtBQUNGLGFBbEJEO0FBbUJBLGdDQUFRTixrQkFBTUMsS0FBTixDQUFZLDBCQUFaLENBQVI7O0FBNUJjLGtCQThCVixDQUFDSixXQUFELElBQWdCTSxlQTlCTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkErQk4sSUFBSVksS0FBSixDQUNKLHFLQURJLENBL0JNOztBQUFBO0FBQUEsZ0ZBc0NUckIsS0F0Q1M7QUF1Q1pRLGNBQUFBLFNBQVMsRUFBVEE7QUF2Q1k7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7V0FBZWMsZ0I7Ozs7U0FBQUEsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5pbXBvcnQgc2xhc2ggZnJvbSAnc2xhc2gnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgdGltZSwgdGltZUVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFRlbXBsYXRlcyhzdGF0ZSkge1xuICBjb25zdCB7IGNvbmZpZywgcm91dGVzLCBpbmNyZW1lbnRhbCB9ID0gc3RhdGVcbiAgY29uc29sZS5sb2coJ0J1aWxkaW5nIFRlbXBsYXRlcy4uLicpXG4gIHRpbWUoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBUZW1wbGF0ZXMgQnVpbHQnKSlcblxuICAvLyBEZWR1cGUgYWxsIHRlbXBsYXRlcyBpbnRvIGFuIGFycmF5XG4gIGNvbnN0IHRlbXBsYXRlcyA9IFtdXG4gIGxldCBub3RGb3VuZFBlbmRpbmcgPSB0cnVlXG5cbiAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgIGlmICghcm91dGUudGVtcGxhdGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByb3V0ZS50ZW1wbGF0ZSA9IHNsYXNoKFxuICAgICAgcGF0aC5yZWxhdGl2ZShjb25maWcucGF0aHMuQVJUSUZBQ1RTLCByb3V0ZS50ZW1wbGF0ZSlcbiAgICApXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWRcbiAgICBjb25zdCBpbmRleCA9IHRlbXBsYXRlcy5pbmRleE9mKHJvdXRlLnRlbXBsYXRlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIElmIGl0J3MgbmV3LCBhZGQgaXRcbiAgICAgIGlmIChyb3V0ZS5wYXRoID09PSAnNDA0Jykge1xuICAgICAgICB0ZW1wbGF0ZXMudW5zaGlmdChyb3V0ZS50ZW1wbGF0ZSlcbiAgICAgICAgbm90Rm91bmRQZW5kaW5nID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBsYXRlcy5wdXNoKHJvdXRlLnRlbXBsYXRlKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgdGltZUVuZChjaGFsay5ncmVlbignW1xcdTI3MTNdIFRlbXBsYXRlcyBCdWlsdCcpKVxuXG4gIGlmICghaW5jcmVtZW50YWwgJiYgbm90Rm91bmRQZW5kaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0EgNDA0IHRlbXBsYXRlIHdhcyBub3QgZm91bmQgYXQgdGVtcGxhdGUgZXh0cmFjdGlvbiB0aW1lLiBJdCBzaG91bGQgaGF2ZSBiZWVuIGF0IGxlYXN0IGRlZmF1bHRlZCB0byBvbmUgYnkgbm93LCBzbyB0aGlzIGlzIHZlcnkgYmFkLiBGaWxlIGFuIGlzc3VlIGlmIHlvdSBzZWUgdGhpcy4nXG4gICAgKVxuICB9XG5cbiAgLy8gTWFrZSBzdXJlIDQwNCB0ZW1wbGF0ZSBpcyB0aGUgZmlyc3Qgb25lXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdGVtcGxhdGVzLFxuICB9XG59KVxuIl19