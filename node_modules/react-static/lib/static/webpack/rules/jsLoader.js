"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _babelPreset = _interopRequireDefault(require("../../../../babel-preset"));

// we check which babel config file exists in the project root
var readBabelConfig = function readBabelConfig(root) {
  var babelFiles = ["".concat(root, "/.babelrc"), "".concat(root, "/.babelrc.js"), "".concat(root, "/babel.config.js")];
  var extendsFile = {};
  babelFiles.forEach(function (file) {
    try {
      _fsExtra["default"].statSync(file);

      extendsFile = {
        "extends": file
      };
    } catch (err) {// dont do anything
    }
  });
  return extendsFile;
};

function _default(_ref) {
  var config = _ref.config,
      stage = _ref.stage;
  var babelFile = {};
  var isRelativePath = config.paths.DIST.startsWith(config.paths.ROOT);

  if (!isRelativePath) {
    babelFile = readBabelConfig(config.paths.ROOT);
  }

  return {
    test: /\.(js|jsx|mjs)$/,
    include: [config.paths.PLUGINS, config.paths.SRC, /react-static-templates\.js/, /react-static-browser-plugins\.js/],
    use: [{
      loader: 'babel-loader',
      options: (0, _objectSpread2["default"])({}, babelFile, {
        root: config.paths.ROOT,
        presets: [[_babelPreset["default"], {
          modules: false
        }]],
        cacheDirectory: isRelativePath ? stage !== 'prod' : config.paths.TEMP,
        compact: stage === 'prod',
        highlightCode: true
      })
    }, 'react-hot-loader/webpack']
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9qc0xvYWRlci5qcyJdLCJuYW1lcyI6WyJyZWFkQmFiZWxDb25maWciLCJyb290IiwiYmFiZWxGaWxlcyIsImV4dGVuZHNGaWxlIiwiZm9yRWFjaCIsImZpbGUiLCJmcyIsInN0YXRTeW5jIiwiZXJyIiwiY29uZmlnIiwic3RhZ2UiLCJiYWJlbEZpbGUiLCJpc1JlbGF0aXZlUGF0aCIsInBhdGhzIiwiRElTVCIsInN0YXJ0c1dpdGgiLCJST09UIiwidGVzdCIsImluY2x1ZGUiLCJQTFVHSU5TIiwiU1JDIiwidXNlIiwibG9hZGVyIiwib3B0aW9ucyIsInByZXNldHMiLCJiYWJlbFByZXNldCIsIm1vZHVsZXMiLCJjYWNoZURpcmVjdG9yeSIsIlRFTVAiLCJjb21wYWN0IiwiaGlnaGxpZ2h0Q29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTtBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsSUFBSSxFQUFJO0FBQzlCLE1BQU1DLFVBQVUsR0FBRyxXQUNkRCxJQURjLDBCQUVkQSxJQUZjLDZCQUdkQSxJQUhjLHNCQUFuQjtBQU1BLE1BQUlFLFdBQVcsR0FBRyxFQUFsQjtBQUVBRCxFQUFBQSxVQUFVLENBQUNFLE9BQVgsQ0FBbUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3pCLFFBQUk7QUFDRkMsMEJBQUdDLFFBQUgsQ0FBWUYsSUFBWjs7QUFDQUYsTUFBQUEsV0FBVyxHQUFHO0FBQUUsbUJBQVNFO0FBQVgsT0FBZDtBQUNELEtBSEQsQ0FHRSxPQUFPRyxHQUFQLEVBQVksQ0FDWjtBQUNEO0FBQ0YsR0FQRDtBQVNBLFNBQU9MLFdBQVA7QUFDRCxDQW5CRDs7QUFxQmUsd0JBQTRCO0FBQUEsTUFBakJNLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN6QyxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFFQSxNQUFNQyxjQUFjLEdBQUdILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxVQUFsQixDQUE2Qk4sTUFBTSxDQUFDSSxLQUFQLENBQWFHLElBQTFDLENBQXZCOztBQUVBLE1BQUksQ0FBQ0osY0FBTCxFQUFxQjtBQUNuQkQsSUFBQUEsU0FBUyxHQUFHWCxlQUFlLENBQUNTLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRyxJQUFkLENBQTNCO0FBQ0Q7O0FBRUQsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsaUJBREQ7QUFFTEMsSUFBQUEsT0FBTyxFQUFFLENBQ1BULE1BQU0sQ0FBQ0ksS0FBUCxDQUFhTSxPQUROLEVBRVBWLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhTyxHQUZOLEVBR1AsNEJBSE8sRUFJUCxrQ0FKTyxDQUZKO0FBUUxDLElBQUFBLEdBQUcsRUFBRSxDQUNIO0FBQ0VDLE1BQUFBLE1BQU0sRUFBRSxjQURWO0FBRUVDLE1BQUFBLE9BQU8scUNBQ0ZaLFNBREU7QUFFTFYsUUFBQUEsSUFBSSxFQUFFUSxNQUFNLENBQUNJLEtBQVAsQ0FBYUcsSUFGZDtBQUdMUSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFDQyx1QkFBRCxFQUFjO0FBQUVDLFVBQUFBLE9BQU8sRUFBRTtBQUFYLFNBQWQsQ0FBRCxDQUhKO0FBSUxDLFFBQUFBLGNBQWMsRUFBRWYsY0FBYyxHQUFHRixLQUFLLEtBQUssTUFBYixHQUFzQkQsTUFBTSxDQUFDSSxLQUFQLENBQWFlLElBSjVEO0FBS0xDLFFBQUFBLE9BQU8sRUFBRW5CLEtBQUssS0FBSyxNQUxkO0FBTUxvQixRQUFBQSxhQUFhLEVBQUU7QUFOVjtBQUZULEtBREcsRUFZSCwwQkFaRztBQVJBLEdBQVA7QUF1QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgYmFiZWxQcmVzZXQgZnJvbSAnLi4vLi4vLi4vLi4vYmFiZWwtcHJlc2V0J1xuXG4vLyB3ZSBjaGVjayB3aGljaCBiYWJlbCBjb25maWcgZmlsZSBleGlzdHMgaW4gdGhlIHByb2plY3Qgcm9vdFxuY29uc3QgcmVhZEJhYmVsQ29uZmlnID0gcm9vdCA9PiB7XG4gIGNvbnN0IGJhYmVsRmlsZXMgPSBbXG4gICAgYCR7cm9vdH0vLmJhYmVscmNgLFxuICAgIGAke3Jvb3R9Ly5iYWJlbHJjLmpzYCxcbiAgICBgJHtyb290fS9iYWJlbC5jb25maWcuanNgLFxuICBdXG5cbiAgbGV0IGV4dGVuZHNGaWxlID0ge31cblxuICBiYWJlbEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLnN0YXRTeW5jKGZpbGUpXG4gICAgICBleHRlbmRzRmlsZSA9IHsgZXh0ZW5kczogZmlsZSB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkb250IGRvIGFueXRoaW5nXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBleHRlbmRzRmlsZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IGNvbmZpZywgc3RhZ2UgfSkge1xuICBsZXQgYmFiZWxGaWxlID0ge31cblxuICBjb25zdCBpc1JlbGF0aXZlUGF0aCA9IGNvbmZpZy5wYXRocy5ESVNULnN0YXJ0c1dpdGgoY29uZmlnLnBhdGhzLlJPT1QpXG5cbiAgaWYgKCFpc1JlbGF0aXZlUGF0aCkge1xuICAgIGJhYmVsRmlsZSA9IHJlYWRCYWJlbENvbmZpZyhjb25maWcucGF0aHMuUk9PVClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGVzdDogL1xcLihqc3xqc3h8bWpzKSQvLFxuICAgIGluY2x1ZGU6IFtcbiAgICAgIGNvbmZpZy5wYXRocy5QTFVHSU5TLFxuICAgICAgY29uZmlnLnBhdGhzLlNSQyxcbiAgICAgIC9yZWFjdC1zdGF0aWMtdGVtcGxhdGVzXFwuanMvLFxuICAgICAgL3JlYWN0LXN0YXRpYy1icm93c2VyLXBsdWdpbnNcXC5qcy8sXG4gICAgXSxcbiAgICB1c2U6IFtcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIC4uLmJhYmVsRmlsZSxcbiAgICAgICAgICByb290OiBjb25maWcucGF0aHMuUk9PVCxcbiAgICAgICAgICBwcmVzZXRzOiBbW2JhYmVsUHJlc2V0LCB7IG1vZHVsZXM6IGZhbHNlIH1dXSxcbiAgICAgICAgICBjYWNoZURpcmVjdG9yeTogaXNSZWxhdGl2ZVBhdGggPyBzdGFnZSAhPT0gJ3Byb2QnIDogY29uZmlnLnBhdGhzLlRFTVAsXG4gICAgICAgICAgY29tcGFjdDogc3RhZ2UgPT09ICdwcm9kJyxcbiAgICAgICAgICBoaWdobGlnaHRDb2RlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICdyZWFjdC1ob3QtbG9hZGVyL3dlYnBhY2snLFxuICAgIF0sXG4gIH1cbn1cbiJdfQ==