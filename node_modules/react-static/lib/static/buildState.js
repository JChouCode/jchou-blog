"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outputBuildState = outputBuildState;
exports.importBuildState = importBuildState;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function outputBuildState(_x) {
  return _outputBuildState.apply(this, arguments);
}

function _outputBuildState() {
  _outputBuildState = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _fsExtra["default"].outputFile(_path["default"].join(state.config.paths.ARTIFACTS, 'react-static-build-state.json'), JSON.stringify(state.config, null, 2));

          case 2:
            return _context.abrupt("return", state);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _outputBuildState.apply(this, arguments);
}

function importBuildState(config) {
  return _fsExtra["default"].readJson(_path["default"].join(config.paths.ARTIFACTS, 'react-static-build-state.json'));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvYnVpbGRTdGF0ZS5qcyJdLCJuYW1lcyI6WyJvdXRwdXRCdWlsZFN0YXRlIiwic3RhdGUiLCJmcyIsIm91dHB1dEZpbGUiLCJwYXRoIiwiam9pbiIsImNvbmZpZyIsInBhdGhzIiwiQVJUSUZBQ1RTIiwiSlNPTiIsInN0cmluZ2lmeSIsImltcG9ydEJ1aWxkU3RhdGUiLCJyZWFkSnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7U0FFc0JBLGdCOzs7Ozs7OytCQUFmLGlCQUFnQ0MsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0NDLG9CQUFHQyxVQUFILENBQ0pDLGlCQUFLQyxJQUFMLENBQVVKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxLQUFiLENBQW1CQyxTQUE3QixFQUF3QywrQkFBeEMsQ0FESSxFQUVKQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsS0FBSyxDQUFDSyxNQUFyQixFQUE2QixJQUE3QixFQUFtQyxDQUFuQyxDQUZJLENBREQ7O0FBQUE7QUFBQSw2Q0FLRUwsS0FMRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUUEsU0FBU1UsZ0JBQVQsQ0FBMEJMLE1BQTFCLEVBQWtDO0FBQ3ZDLFNBQU9KLG9CQUFHVSxRQUFILENBQ0xSLGlCQUFLQyxJQUFMLENBQVVDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxTQUF2QixFQUFrQywrQkFBbEMsQ0FESyxDQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3V0cHV0QnVpbGRTdGF0ZShzdGF0ZSkge1xuICBhd2FpdCBmcy5vdXRwdXRGaWxlKFxuICAgIHBhdGguam9pbihzdGF0ZS5jb25maWcucGF0aHMuQVJUSUZBQ1RTLCAncmVhY3Qtc3RhdGljLWJ1aWxkLXN0YXRlLmpzb24nKSxcbiAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5jb25maWcsIG51bGwsIDIpXG4gIClcbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRCdWlsZFN0YXRlKGNvbmZpZykge1xuICByZXR1cm4gZnMucmVhZEpzb24oXG4gICAgcGF0aC5qb2luKGNvbmZpZy5wYXRocy5BUlRJRkFDVFMsICdyZWFjdC1zdGF0aWMtYnVpbGQtc3RhdGUuanNvbicpXG4gIClcbn1cbiJdfQ==