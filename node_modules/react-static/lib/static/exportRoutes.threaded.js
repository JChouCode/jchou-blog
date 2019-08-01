"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('../utils/binHelper'),
    setIgnorePath = _require.setIgnorePath; // eslint-disable-next-line


var path = require('path');

var getConfig = require('./getConfig')["default"];

var _require2 = require('./components/RootComponents'),
    DefaultDocument = _require2.DefaultDocument;

var _require3 = require('../utils'),
    poolAll = _require3.poolAll;

var exportRoute = require('./exportRoute')["default"];

process.on('message',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(state) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.delegateYield(
            /*#__PURE__*/
            _regenerator["default"].mark(function _callee2() {
              var _state, routes, Comp, DocumentTemplate, tasks, _loop, i;

              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _state = state, routes = _state.routes; // Get config again

                      _context2.next = 3;
                      return getConfig(state);

                    case 3:
                      state = _context2.sent;
                      setIgnorePath(state.config.paths.ARTIFACTS); // Use the node version of the app created with webpack
                      // eslint-disable-next-line

                      Comp = require(path.resolve(state.config.paths.ARTIFACTS, 'static-app.js'))["default"]; // Retrieve the document template

                      DocumentTemplate = state.config.Document || DefaultDocument;
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
                                  return exportRoute((0, _objectSpread2["default"])({}, state, {
                                    route: route,
                                    Comp: Comp,
                                    DocumentTemplate: DocumentTemplate
                                  }));

                                case 2:
                                  if (process.connected) {
                                    process.send({
                                      type: 'tick'
                                    });
                                  }

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

                      _context2.next = 12;
                      return poolAll(tasks, Number(state.config.outputFileRate));

                    case 12:
                      if (process.connected) {
                        process.send({
                          type: 'done'
                        });
                      }

                      process.exit();

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })(), "t0", 2);

          case 2:
            _context3.next = 9;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t1 = _context3["catch"](0);
            console.error(_context3.t1);

            if (process.connected) {
              process.send({
                type: 'error',
                payload: _context3.t1
              });
            }

            process.exit(1);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 4]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0Um91dGVzLnRocmVhZGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzZXRJZ25vcmVQYXRoIiwicGF0aCIsImdldENvbmZpZyIsIkRlZmF1bHREb2N1bWVudCIsInBvb2xBbGwiLCJleHBvcnRSb3V0ZSIsInByb2Nlc3MiLCJvbiIsInN0YXRlIiwicm91dGVzIiwiY29uZmlnIiwicGF0aHMiLCJBUlRJRkFDVFMiLCJDb21wIiwicmVzb2x2ZSIsIkRvY3VtZW50VGVtcGxhdGUiLCJEb2N1bWVudCIsInRhc2tzIiwiaSIsInJvdXRlIiwicHVzaCIsImNvbm5lY3RlZCIsInNlbmQiLCJ0eXBlIiwibGVuZ3RoIiwiTnVtYmVyIiwib3V0cHV0RmlsZVJhdGUiLCJleGl0IiwiY29uc29sZSIsImVycm9yIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztlQUEwQkEsT0FBTyxDQUFDLG9CQUFELEM7SUFBekJDLGEsWUFBQUEsYSxFQUNSOzs7QUFDQSxJQUFNQyxJQUFJLEdBQUdGLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLElBQU1HLFNBQVMsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBUCxXQUFsQjs7Z0JBQzRCQSxPQUFPLENBQUMsNkJBQUQsQztJQUEzQkksZSxhQUFBQSxlOztnQkFDWUosT0FBTyxDQUFDLFVBQUQsQztJQUFuQkssTyxhQUFBQSxPOztBQUNSLElBQU1DLFdBQVcsR0FBR04sT0FBTyxDQUFDLGVBQUQsQ0FBUCxXQUFwQjs7QUFFQU8sT0FBTyxDQUFDQyxFQUFSLENBQVcsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQXNCLGtCQUFNQyxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRUNBLEtBRkQsRUFFVkMsTUFGVSxVQUVWQSxNQUZVLEVBR2xCOztBQUhrQjtBQUFBLDZCQUtKUCxTQUFTLENBQUNNLEtBQUQsQ0FMTDs7QUFBQTtBQUtsQkEsc0JBQUFBLEtBTGtCO0FBT2xCUixzQkFBQUEsYUFBYSxDQUFDUSxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBYixDQUFtQkMsU0FBcEIsQ0FBYixDQVBrQixDQVNsQjtBQUNBOztBQUNNQyxzQkFBQUEsSUFYWSxHQVdMZCxPQUFPLENBQUNFLElBQUksQ0FBQ2EsT0FBTCxDQUNuQk4sS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLFNBREEsRUFFbkIsZUFGbUIsQ0FBRCxDQUFQLFdBWEssRUFlbEI7O0FBQ01HLHNCQUFBQSxnQkFoQlksR0FnQk9QLEtBQUssQ0FBQ0UsTUFBTixDQUFhTSxRQUFiLElBQXlCYixlQWhCaEM7QUFrQlpjLHNCQUFBQSxLQWxCWSxHQWtCSixFQWxCSTs7QUFBQSw2Q0FtQlRDLENBbkJTO0FBb0JoQiw0QkFBTUMsS0FBSyxHQUFHVixNQUFNLENBQUNTLENBQUQsQ0FBcEIsQ0FwQmdCLENBcUJoQjs7QUFDQUQsd0JBQUFBLEtBQUssQ0FBQ0csSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUNIZixXQUFXLG9DQUNaRyxLQURZO0FBRWZXLG9DQUFBQSxLQUFLLEVBQUxBLEtBRmU7QUFHZk4sb0NBQUFBLElBQUksRUFBSkEsSUFIZTtBQUlmRSxvQ0FBQUEsZ0JBQWdCLEVBQWhCQTtBQUplLHFDQURSOztBQUFBO0FBT1Qsc0NBQUlULE9BQU8sQ0FBQ2UsU0FBWixFQUF1QjtBQUNyQmYsb0NBQUFBLE9BQU8sQ0FBQ2dCLElBQVIsQ0FBYTtBQUFFQyxzQ0FBQUEsSUFBSSxFQUFFO0FBQVIscUNBQWI7QUFDRDs7QUFUUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBWDtBQXRCZ0I7O0FBbUJsQiwyQkFBU0wsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR1QsTUFBTSxDQUFDZSxNQUEzQixFQUFtQ04sQ0FBQyxFQUFwQyxFQUF3QztBQUFBLDhCQUEvQkEsQ0FBK0I7QUFjdkM7O0FBakNpQjtBQUFBLDZCQWtDWmQsT0FBTyxDQUFDYSxLQUFELEVBQVFRLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBQ0UsTUFBTixDQUFhZ0IsY0FBZCxDQUFkLENBbENLOztBQUFBO0FBbUNsQiwwQkFBSXBCLE9BQU8sQ0FBQ2UsU0FBWixFQUF1QjtBQUNyQmYsd0JBQUFBLE9BQU8sQ0FBQ2dCLElBQVIsQ0FBYTtBQUFFQywwQkFBQUEsSUFBSSxFQUFFO0FBQVIseUJBQWI7QUFDRDs7QUFDRGpCLHNCQUFBQSxPQUFPLENBQUNxQixJQUFSOztBQXRDa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdDbEJDLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUjs7QUFDQSxnQkFBSXZCLE9BQU8sQ0FBQ2UsU0FBWixFQUF1QjtBQUNyQmYsY0FBQUEsT0FBTyxDQUFDZ0IsSUFBUixDQUFhO0FBQUVDLGdCQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQk8sZ0JBQUFBLE9BQU87QUFBeEIsZUFBYjtBQUNEOztBQUNEeEIsWUFBQUEsT0FBTyxDQUFDcUIsSUFBUixDQUFhLENBQWI7O0FBNUNrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgc2V0SWdub3JlUGF0aCB9ID0gcmVxdWlyZSgnLi4vdXRpbHMvYmluSGVscGVyJylcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnLi9nZXRDb25maWcnKS5kZWZhdWx0XG5jb25zdCB7IERlZmF1bHREb2N1bWVudCB9ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1Jvb3RDb21wb25lbnRzJylcbmNvbnN0IHsgcG9vbEFsbCB9ID0gcmVxdWlyZSgnLi4vdXRpbHMnKVxuY29uc3QgZXhwb3J0Um91dGUgPSByZXF1aXJlKCcuL2V4cG9ydFJvdXRlJykuZGVmYXVsdFxuXG5wcm9jZXNzLm9uKCdtZXNzYWdlJywgYXN5bmMgc3RhdGUgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcm91dGVzIH0gPSBzdGF0ZVxuICAgIC8vIEdldCBjb25maWcgYWdhaW5cblxuICAgIHN0YXRlID0gYXdhaXQgZ2V0Q29uZmlnKHN0YXRlKVxuXG4gICAgc2V0SWdub3JlUGF0aChzdGF0ZS5jb25maWcucGF0aHMuQVJUSUZBQ1RTKVxuXG4gICAgLy8gVXNlIHRoZSBub2RlIHZlcnNpb24gb2YgdGhlIGFwcCBjcmVhdGVkIHdpdGggd2VicGFja1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IENvbXAgPSByZXF1aXJlKHBhdGgucmVzb2x2ZShcbiAgICAgIHN0YXRlLmNvbmZpZy5wYXRocy5BUlRJRkFDVFMsXG4gICAgICAnc3RhdGljLWFwcC5qcydcbiAgICApKS5kZWZhdWx0XG4gICAgLy8gUmV0cmlldmUgdGhlIGRvY3VtZW50IHRlbXBsYXRlXG4gICAgY29uc3QgRG9jdW1lbnRUZW1wbGF0ZSA9IHN0YXRlLmNvbmZpZy5Eb2N1bWVudCB8fCBEZWZhdWx0RG9jdW1lbnRcblxuICAgIGNvbnN0IHRhc2tzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbaV1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgdGFza3MucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGV4cG9ydFJvdXRlKHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICBDb21wLFxuICAgICAgICAgIERvY3VtZW50VGVtcGxhdGUsXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChwcm9jZXNzLmNvbm5lY3RlZCkge1xuICAgICAgICAgIHByb2Nlc3Muc2VuZCh7IHR5cGU6ICd0aWNrJyB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBhd2FpdCBwb29sQWxsKHRhc2tzLCBOdW1iZXIoc3RhdGUuY29uZmlnLm91dHB1dEZpbGVSYXRlKSlcbiAgICBpZiAocHJvY2Vzcy5jb25uZWN0ZWQpIHtcbiAgICAgIHByb2Nlc3Muc2VuZCh7IHR5cGU6ICdkb25lJyB9KVxuICAgIH1cbiAgICBwcm9jZXNzLmV4aXQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICBpZiAocHJvY2Vzcy5jb25uZWN0ZWQpIHtcbiAgICAgIHByb2Nlc3Muc2VuZCh7IHR5cGU6ICdlcnJvcicsIHBheWxvYWQ6IGVyciB9KVxuICAgIH1cbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxufSlcbiJdfQ==