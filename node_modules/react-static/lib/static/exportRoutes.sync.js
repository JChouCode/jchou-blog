"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _RootComponents = require("./components/RootComponents");

var _utils = require("../utils");

var _exportRoute = _interopRequireDefault(require("./exportRoute"));

/* eslint-disable import/first, import/order */
var _require = require('../utils/binHelper'),
    setIgnorePath = _require.setIgnorePath;

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(state) {
    var config, routes, htmlProgress, Comp, DocumentTemplate, tasks, _loop, i;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = state.config, routes = state.routes;
            htmlProgress = (0, _utils.progress)(routes.length); // Use the node version of the app created with webpack

            setIgnorePath(config.paths.ARTIFACTS); // eslint-disable-next-line

            Comp = require(_path["default"].resolve(config.paths.ARTIFACTS, 'static-app.js'))["default"]; // Retrieve the document template

            DocumentTemplate = config.Document || _RootComponents.DefaultDocument;
            tasks = [];

            _loop = function _loop(i) {
              var route = routes[i]; // eslint-disable-next-line

              tasks.push(
              /*#__PURE__*/
              (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee() {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _exportRoute["default"])((0, _objectSpread2["default"])({}, state, {
                          Comp: Comp,
                          DocumentTemplate: DocumentTemplate,
                          route: route
                        }));

                      case 2:
                        htmlProgress.tick();

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            };

            for (i = 0; i < routes.length; i++) {
              _loop(i);
            }

            _context2.next = 10;
            return (0, _utils.poolAll)(tasks, Number(config.outputFileRate));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0Um91dGVzLnN5bmMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInNldElnbm9yZVBhdGgiLCJzdGF0ZSIsImNvbmZpZyIsInJvdXRlcyIsImh0bWxQcm9ncmVzcyIsImxlbmd0aCIsInBhdGhzIiwiQVJUSUZBQ1RTIiwiQ29tcCIsInBhdGgiLCJyZXNvbHZlIiwiRG9jdW1lbnRUZW1wbGF0ZSIsIkRvY3VtZW50IiwiRGVmYXVsdERvY3VtZW50IiwidGFza3MiLCJpIiwicm91dGUiLCJwdXNoIiwidGljayIsIk51bWJlciIsIm91dHB1dEZpbGVSYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFQQTtlQUMwQkEsT0FBTyxDQUFDLG9CQUFELEM7SUFBekJDLGEsWUFBQUEsYTs7Ozs7OzsrQkFRTyxrQkFBTUMsS0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xDLFlBQUFBLE1BREssR0FDY0QsS0FEZCxDQUNMQyxNQURLLEVBQ0dDLE1BREgsR0FDY0YsS0FEZCxDQUNHRSxNQURIO0FBR1BDLFlBQUFBLFlBSE8sR0FHUSxxQkFBU0QsTUFBTSxDQUFDRSxNQUFoQixDQUhSLEVBSWI7O0FBRUFMLFlBQUFBLGFBQWEsQ0FBQ0UsTUFBTSxDQUFDSSxLQUFQLENBQWFDLFNBQWQsQ0FBYixDQU5hLENBUWI7O0FBQ01DLFlBQUFBLElBVE8sR0FTQVQsT0FBTyxDQUFDVSxpQkFBS0MsT0FBTCxDQUFhUixNQUFNLENBQUNJLEtBQVAsQ0FBYUMsU0FBMUIsRUFBcUMsZUFBckMsQ0FBRCxDQUFQLFdBVEEsRUFZYjs7QUFDTUksWUFBQUEsZ0JBYk8sR0FhWVQsTUFBTSxDQUFDVSxRQUFQLElBQW1CQywrQkFiL0I7QUFlUEMsWUFBQUEsS0FmTyxHQWVDLEVBZkQ7O0FBQUEsbUNBZ0JKQyxDQWhCSTtBQWlCWCxrQkFBTUMsS0FBSyxHQUFHYixNQUFNLENBQUNZLENBQUQsQ0FBcEIsQ0FqQlcsQ0FrQlg7O0FBQ0FELGNBQUFBLEtBQUssQ0FBQ0csSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNILGdFQUNEaEIsS0FEQztBQUVKTywwQkFBQUEsSUFBSSxFQUFKQSxJQUZJO0FBR0pHLDBCQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQUhJO0FBSUpLLDBCQUFBQSxLQUFLLEVBQUxBO0FBSkksMkJBREc7O0FBQUE7QUFPVFosd0JBQUFBLFlBQVksQ0FBQ2MsSUFBYjs7QUFQUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFYO0FBbkJXOztBQWdCYixpQkFBU0gsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osTUFBTSxDQUFDRSxNQUEzQixFQUFtQ1UsQ0FBQyxFQUFwQyxFQUF3QztBQUFBLG9CQUEvQkEsQ0FBK0I7QUFZdkM7O0FBNUJZO0FBQUEsbUJBNkJQLG9CQUFRRCxLQUFSLEVBQWVLLE1BQU0sQ0FBQ2pCLE1BQU0sQ0FBQ2tCLGNBQVIsQ0FBckIsQ0E3Qk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9maXJzdCwgaW1wb3J0L29yZGVyICovXG5jb25zdCB7IHNldElnbm9yZVBhdGggfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2JpbkhlbHBlcicpXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vL1xuaW1wb3J0IHsgRGVmYXVsdERvY3VtZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1Jvb3RDb21wb25lbnRzJ1xuaW1wb3J0IHsgcG9vbEFsbCwgcHJvZ3Jlc3MgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBleHBvcnRSb3V0ZSBmcm9tICcuL2V4cG9ydFJvdXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgY29uZmlnLCByb3V0ZXMgfSA9IHN0YXRlXG5cbiAgY29uc3QgaHRtbFByb2dyZXNzID0gcHJvZ3Jlc3Mocm91dGVzLmxlbmd0aClcbiAgLy8gVXNlIHRoZSBub2RlIHZlcnNpb24gb2YgdGhlIGFwcCBjcmVhdGVkIHdpdGggd2VicGFja1xuXG4gIHNldElnbm9yZVBhdGgoY29uZmlnLnBhdGhzLkFSVElGQUNUUylcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgQ29tcCA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKGNvbmZpZy5wYXRocy5BUlRJRkFDVFMsICdzdGF0aWMtYXBwLmpzJykpXG4gICAgLmRlZmF1bHRcblxuICAvLyBSZXRyaWV2ZSB0aGUgZG9jdW1lbnQgdGVtcGxhdGVcbiAgY29uc3QgRG9jdW1lbnRUZW1wbGF0ZSA9IGNvbmZpZy5Eb2N1bWVudCB8fCBEZWZhdWx0RG9jdW1lbnRcblxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbaV1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0YXNrcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGV4cG9ydFJvdXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIENvbXAsXG4gICAgICAgIERvY3VtZW50VGVtcGxhdGUsXG4gICAgICAgIHJvdXRlLFxuICAgICAgfSlcbiAgICAgIGh0bWxQcm9ncmVzcy50aWNrKClcbiAgICB9KVxuICB9XG4gIGF3YWl0IHBvb2xBbGwodGFza3MsIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpKVxufVxuIl19