"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outputClientStats = outputClientStats;
exports.importClientStats = importClientStats;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function outputClientStats(_x, _x2) {
  return _outputClientStats.apply(this, arguments);
}

function _outputClientStats() {
  _outputClientStats = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state, statsJSON) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fsExtra["default"].outputFile(_path["default"].join(state.config.paths.ARTIFACTS, 'client-stats.json'), JSON.stringify(statsJSON, null, 2));

          case 2:
            return _context.abrupt("return", state);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _outputClientStats.apply(this, arguments);
}

function importClientStats(_x3) {
  return _importClientStats.apply(this, arguments);
}

function _importClientStats() {
  _importClientStats = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(state) {
    var clientStats;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _fsExtra["default"].readJson(_path["default"].join(state.config.paths.ARTIFACTS, 'client-stats.json'));

          case 2:
            clientStats = _context2.sent;

            if (clientStats) {
              _context2.next = 5;
              break;
            }

            throw new Error('No Client Stats Found');

          case 5:
            return _context2.abrupt("return", (0, _objectSpread2["default"])({}, state, {
              clientStats: clientStats
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _importClientStats.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvY2xpZW50U3RhdHMuanMiXSwibmFtZXMiOlsib3V0cHV0Q2xpZW50U3RhdHMiLCJzdGF0ZSIsInN0YXRzSlNPTiIsImZzIiwib3V0cHV0RmlsZSIsInBhdGgiLCJqb2luIiwiY29uZmlnIiwicGF0aHMiLCJBUlRJRkFDVFMiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1wb3J0Q2xpZW50U3RhdHMiLCJyZWFkSnNvbiIsImNsaWVudFN0YXRzIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7U0FFc0JBLGlCOzs7Ozs7OytCQUFmLGlCQUFpQ0MsS0FBakMsRUFBd0NDLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQyxvQkFBR0MsVUFBSCxDQUNKQyxpQkFBS0MsSUFBTCxDQUFVTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsU0FBN0IsRUFBd0MsbUJBQXhDLENBREksRUFFSkMsSUFBSSxDQUFDQyxTQUFMLENBQWVULFNBQWYsRUFBMEIsSUFBMUIsRUFBZ0MsQ0FBaEMsQ0FGSSxDQUREOztBQUFBO0FBQUEsNkNBS0VELEtBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQVFlVyxpQjs7Ozs7OzsrQkFBZixrQkFBaUNYLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3FCRSxvQkFBR1UsUUFBSCxDQUN4QlIsaUJBQUtDLElBQUwsQ0FBVUwsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLFNBQTdCLEVBQXdDLG1CQUF4QyxDQUR3QixDQURyQjs7QUFBQTtBQUNDSyxZQUFBQSxXQUREOztBQUFBLGdCQUtBQSxXQUxBO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQU1HLElBQUlDLEtBQUosQ0FBVSx1QkFBVixDQU5IOztBQUFBO0FBQUEsaUZBVUFkLEtBVkE7QUFXSGEsY0FBQUEsV0FBVyxFQUFYQTtBQVhHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3V0cHV0Q2xpZW50U3RhdHMoc3RhdGUsIHN0YXRzSlNPTikge1xuICBhd2FpdCBmcy5vdXRwdXRGaWxlKFxuICAgIHBhdGguam9pbihzdGF0ZS5jb25maWcucGF0aHMuQVJUSUZBQ1RTLCAnY2xpZW50LXN0YXRzLmpzb24nKSxcbiAgICBKU09OLnN0cmluZ2lmeShzdGF0c0pTT04sIG51bGwsIDIpXG4gIClcbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRDbGllbnRTdGF0cyhzdGF0ZSkge1xuICBjb25zdCBjbGllbnRTdGF0cyA9IGF3YWl0IGZzLnJlYWRKc29uKFxuICAgIHBhdGguam9pbihzdGF0ZS5jb25maWcucGF0aHMuQVJUSUZBQ1RTLCAnY2xpZW50LXN0YXRzLmpzb24nKVxuICApXG5cbiAgaWYgKCFjbGllbnRTdGF0cykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gQ2xpZW50IFN0YXRzIEZvdW5kJylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgY2xpZW50U3RhdHMsXG4gIH1cbn1cbiJdfQ==