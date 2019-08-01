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

var _exportSharedRouteData = _interopRequireDefault(require("./exportSharedRouteData"));

var _getRouteData = _interopRequireDefault(require("./getRouteData"));

var _utils = require("../utils");

var _default =
/*#__PURE__*/
function () {
  var _fetchRoutes = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(state) {
    var _state, config, routes, dataProgress, sharedDataByHash, downloadTasks, _loop, i;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _state = state, config = _state.config, routes = _state.routes;
            console.log('Fetching Route Data...');
            dataProgress = (0, _utils.progress)(routes.length);
            (0, _utils.time)(_chalk["default"].green("[\u2713] Route Data Downloaded"));
            sharedDataByHash = new Map(); // Use a traditional for loop here for perf

            downloadTasks = [];

            _loop = function _loop(i) {
              var route = routes[i];
              /* eslint-disable no-loop-func */

              downloadTasks.push(
              /*#__PURE__*/
              (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee() {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _getRouteData["default"])(route, state, sharedDataByHash);

                      case 2:
                        routes[i] = _context.sent;
                        dataProgress.tick();

                      case 4:
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

            state = (0, _objectSpread2["default"])({}, state, {
              sharedDataByHash: sharedDataByHash
            });
            _context2.next = 11;
            return (0, _utils.poolAll)(downloadTasks, Number(config.outputFileRate));

          case 11:
            (0, _utils.timeEnd)(_chalk["default"].green("[\u2713] Route Data Downloaded"));
            _context2.next = 14;
            return (0, _exportSharedRouteData["default"])(state);

          case 14:
            state = _context2.sent;
            return _context2.abrupt("return", state);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  function fetchRoutes(_x) {
    return _fetchRoutes.apply(this, arguments);
  }

  return fetchRoutes;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZmV0Y2hSb3V0ZXMuanMiXSwibmFtZXMiOlsic3RhdGUiLCJjb25maWciLCJyb3V0ZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YVByb2dyZXNzIiwibGVuZ3RoIiwiY2hhbGsiLCJncmVlbiIsInNoYXJlZERhdGFCeUhhc2giLCJNYXAiLCJkb3dubG9hZFRhc2tzIiwiaSIsInJvdXRlIiwicHVzaCIsInRpY2siLCJOdW1iZXIiLCJvdXRwdXRGaWxlUmF0ZSIsImZldGNoUm91dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7OzsrQkFFZ0Isa0JBQTJCQSxLQUEzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2FBLEtBRGIsRUFDTkMsTUFETSxVQUNOQSxNQURNLEVBQ0VDLE1BREYsVUFDRUEsTUFERjtBQUdkQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUVNQyxZQUFBQSxZQUxRLEdBS08scUJBQVNILE1BQU0sQ0FBQ0ksTUFBaEIsQ0FMUDtBQU1kLDZCQUFLQyxrQkFBTUMsS0FBTixDQUFZLGdDQUFaLENBQUw7QUFFTUMsWUFBQUEsZ0JBUlEsR0FRVyxJQUFJQyxHQUFKLEVBUlgsRUFVZDs7QUFDTUMsWUFBQUEsYUFYUSxHQVdRLEVBWFI7O0FBQUEsbUNBWUxDLENBWks7QUFhWixrQkFBTUMsS0FBSyxHQUFHWCxNQUFNLENBQUNVLENBQUQsQ0FBcEI7QUFDQTs7QUFDQUQsY0FBQUEsYUFBYSxDQUFDRyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNDLDhCQUFhRCxLQUFiLEVBQW9CYixLQUFwQixFQUEyQlMsZ0JBQTNCLENBREQ7O0FBQUE7QUFDakJQLHdCQUFBQSxNQUFNLENBQUNVLENBQUQsQ0FEVztBQUVqQlAsd0JBQUFBLFlBQVksQ0FBQ1UsSUFBYjs7QUFGaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbkI7QUFmWTs7QUFZZCxpQkFBU0gsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR1YsTUFBTSxDQUFDSSxNQUEzQixFQUFtQ00sQ0FBQyxFQUFwQyxFQUF3QztBQUFBLG9CQUEvQkEsQ0FBK0I7QUFPdkM7O0FBRURaLFlBQUFBLEtBQUssc0NBQ0FBLEtBREE7QUFFSFMsY0FBQUEsZ0JBQWdCLEVBQWhCQTtBQUZHLGNBQUw7QUFyQmM7QUFBQSxtQkEwQlIsb0JBQVFFLGFBQVIsRUFBdUJLLE1BQU0sQ0FBQ2YsTUFBTSxDQUFDZ0IsY0FBUixDQUE3QixDQTFCUTs7QUFBQTtBQTRCZCxnQ0FBUVYsa0JBQU1DLEtBQU4sQ0FBWSxnQ0FBWixDQUFSO0FBNUJjO0FBQUEsbUJBOEJBLHVDQUFzQlIsS0FBdEIsQ0E5QkE7O0FBQUE7QUE4QmRBLFlBQUFBLEtBOUJjO0FBQUEsOENBZ0NQQSxLQWhDTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFla0IsVzs7OztTQUFBQSxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IGV4cG9ydFNoYXJlZFJvdXRlRGF0YSBmcm9tICcuL2V4cG9ydFNoYXJlZFJvdXRlRGF0YSdcbmltcG9ydCBnZXRSb3V0ZURhdGEgZnJvbSAnLi9nZXRSb3V0ZURhdGEnXG5pbXBvcnQgeyBwcm9ncmVzcywgdGltZSwgdGltZUVuZCwgcG9vbEFsbCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hSb3V0ZXMoc3RhdGUpIHtcbiAgY29uc3QgeyBjb25maWcsIHJvdXRlcyB9ID0gc3RhdGVcblxuICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgUm91dGUgRGF0YS4uLicpXG5cbiAgY29uc3QgZGF0YVByb2dyZXNzID0gcHJvZ3Jlc3Mocm91dGVzLmxlbmd0aClcbiAgdGltZShjaGFsay5ncmVlbignW1xcdTI3MTNdIFJvdXRlIERhdGEgRG93bmxvYWRlZCcpKVxuXG4gIGNvbnN0IHNoYXJlZERhdGFCeUhhc2ggPSBuZXcgTWFwKClcblxuICAvLyBVc2UgYSB0cmFkaXRpb25hbCBmb3IgbG9vcCBoZXJlIGZvciBwZXJmXG4gIGNvbnN0IGRvd25sb2FkVGFza3MgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW2ldXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4gICAgZG93bmxvYWRUYXNrcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgIHJvdXRlc1tpXSA9IGF3YWl0IGdldFJvdXRlRGF0YShyb3V0ZSwgc3RhdGUsIHNoYXJlZERhdGFCeUhhc2gpXG4gICAgICBkYXRhUHJvZ3Jlc3MudGljaygpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNoYXJlZERhdGFCeUhhc2gsXG4gIH1cblxuICBhd2FpdCBwb29sQWxsKGRvd25sb2FkVGFza3MsIE51bWJlcihjb25maWcub3V0cHV0RmlsZVJhdGUpKVxuXG4gIHRpbWVFbmQoY2hhbGsuZ3JlZW4oJ1tcXHUyNzEzXSBSb3V0ZSBEYXRhIERvd25sb2FkZWQnKSlcblxuICBzdGF0ZSA9IGF3YWl0IGV4cG9ydFNoYXJlZFJvdXRlRGF0YShzdGF0ZSlcblxuICByZXR1cm4gc3RhdGVcbn0pXG4iXX0=