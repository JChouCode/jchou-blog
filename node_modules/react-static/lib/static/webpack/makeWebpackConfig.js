"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeWebpackConfig;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _rules = require("./rules");

var _plugins = _interopRequireDefault(require("../plugins"));

// Builds a compiler using a stage preset, then allows extension via
// webpackConfigurator
function makeWebpackConfig(state) {
  var _state = state,
      stage = _state.stage;
  var webpackConfig;

  if (stage === 'dev') {
    webpackConfig = require('./webpack.config.dev')["default"](state);
  } else if (['prod', 'node'].includes(stage)) {
    webpackConfig = require('./webpack.config.prod')["default"](state);
  } else {
    throw new Error("An invalid stage option was detected: ".concat(stage.toString(), ". Stage must equal one of: 'prod', 'dev', or 'node'."));
  } // set the default loaders


  state = (0, _objectSpread2["default"])({}, state, {
    defaultLoaders: (0, _rules.getStagedRules)(state) // run the webpack plugin (should be synchronous)

  });
  webpackConfig = _plugins["default"].webpack(webpackConfig, state);
  return webpackConfig;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9tYWtlV2VicGFja0NvbmZpZy5qcyJdLCJuYW1lcyI6WyJtYWtlV2VicGFja0NvbmZpZyIsInN0YXRlIiwic3RhZ2UiLCJ3ZWJwYWNrQ29uZmlnIiwicmVxdWlyZSIsImluY2x1ZGVzIiwiRXJyb3IiLCJ0b1N0cmluZyIsImRlZmF1bHRMb2FkZXJzIiwicGx1Z2lucyIsIndlYnBhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNlLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBLGVBQzdCQSxLQUQ2QjtBQUFBLE1BQ3ZDQyxLQUR1QyxVQUN2Q0EsS0FEdUM7QUFHL0MsTUFBSUMsYUFBSjs7QUFFQSxNQUFJRCxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQkMsSUFBQUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsc0JBQUQsQ0FBUCxZQUF3Q0gsS0FBeEMsQ0FBaEI7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCSSxRQUFqQixDQUEwQkgsS0FBMUIsQ0FBSixFQUFzQztBQUMzQ0MsSUFBQUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsdUJBQUQsQ0FBUCxZQUF5Q0gsS0FBekMsQ0FBaEI7QUFDRCxHQUZNLE1BRUE7QUFDTCxVQUFNLElBQUlLLEtBQUosaURBQ3FDSixLQUFLLENBQUNLLFFBQU4sRUFEckMsMERBQU47QUFHRCxHQWI4QyxDQWUvQzs7O0FBQ0FOLEVBQUFBLEtBQUssc0NBQ0FBLEtBREE7QUFFSE8sSUFBQUEsY0FBYyxFQUFFLDJCQUFlUCxLQUFmLENBRmIsQ0FLTDs7QUFMSyxJQUFMO0FBTUFFLEVBQUFBLGFBQWEsR0FBR00sb0JBQVFDLE9BQVIsQ0FBZ0JQLGFBQWhCLEVBQStCRixLQUEvQixDQUFoQjtBQUVBLFNBQU9FLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN0YWdlZFJ1bGVzIH0gZnJvbSAnLi9ydWxlcydcbmltcG9ydCBwbHVnaW5zIGZyb20gJy4uL3BsdWdpbnMnXG5cbi8vIEJ1aWxkcyBhIGNvbXBpbGVyIHVzaW5nIGEgc3RhZ2UgcHJlc2V0LCB0aGVuIGFsbG93cyBleHRlbnNpb24gdmlhXG4vLyB3ZWJwYWNrQ29uZmlndXJhdG9yXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlV2VicGFja0NvbmZpZyhzdGF0ZSkge1xuICBjb25zdCB7IHN0YWdlIH0gPSBzdGF0ZVxuXG4gIGxldCB3ZWJwYWNrQ29uZmlnXG5cbiAgaWYgKHN0YWdlID09PSAnZGV2Jykge1xuICAgIHdlYnBhY2tDb25maWcgPSByZXF1aXJlKCcuL3dlYnBhY2suY29uZmlnLmRldicpLmRlZmF1bHQoc3RhdGUpXG4gIH0gZWxzZSBpZiAoWydwcm9kJywgJ25vZGUnXS5pbmNsdWRlcyhzdGFnZSkpIHtcbiAgICB3ZWJwYWNrQ29uZmlnID0gcmVxdWlyZSgnLi93ZWJwYWNrLmNvbmZpZy5wcm9kJykuZGVmYXVsdChzdGF0ZSlcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgQW4gaW52YWxpZCBzdGFnZSBvcHRpb24gd2FzIGRldGVjdGVkOiAke3N0YWdlLnRvU3RyaW5nKCl9LiBTdGFnZSBtdXN0IGVxdWFsIG9uZSBvZjogJ3Byb2QnLCAnZGV2Jywgb3IgJ25vZGUnLmBcbiAgICApXG4gIH1cblxuICAvLyBzZXQgdGhlIGRlZmF1bHQgbG9hZGVyc1xuICBzdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBkZWZhdWx0TG9hZGVyczogZ2V0U3RhZ2VkUnVsZXMoc3RhdGUpLFxuICB9XG5cbiAgLy8gcnVuIHRoZSB3ZWJwYWNrIHBsdWdpbiAoc2hvdWxkIGJlIHN5bmNocm9ub3VzKVxuICB3ZWJwYWNrQ29uZmlnID0gcGx1Z2lucy53ZWJwYWNrKHdlYnBhY2tDb25maWcsIHN0YXRlKVxuXG4gIHJldHVybiB3ZWJwYWNrQ29uZmlnXG59XG4iXX0=