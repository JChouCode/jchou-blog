"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _extractCssChunksWebpackPlugin = _interopRequireDefault(require("extract-css-chunks-webpack-plugin"));

var _postcssFlexbugsFixes = _interopRequireDefault(require("postcss-flexbugs-fixes"));

function initCSSLoader() {
  var cssLoader = [{
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: false
    }
  }, {
    loader: 'postcss-loader',
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebookincubator/create-react-app/issues/2677
      sourceMap: true,
      ident: 'postcss',
      plugins: function plugins() {
        return [_postcssFlexbugsFixes["default"], (0, _autoprefixer["default"])({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
          flexbox: 'no-2009' // I'd opt in for this - safari 9 & IE 10.

        })];
      }
    }
  }];
  return cssLoader;
}

function _default(_ref) {
  var stage = _ref.stage,
      isNode = _ref.isNode;
  var cssLoader = initCSSLoader();

  if (stage === 'node' || isNode) {
    return {
      test: /\.css$/,
      loader: cssLoader
    };
  }

  cssLoader = [{
    loader: _extractCssChunksWebpackPlugin["default"].loader,
    options: {
      hot: true
    }
  }].concat((0, _toConsumableArray2["default"])(cssLoader)); // seeing as it's HMR, why not :)

  return {
    test: /\.css$/,
    loader: cssLoader
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9jc3NMb2FkZXIuanMiXSwibmFtZXMiOlsiaW5pdENTU0xvYWRlciIsImNzc0xvYWRlciIsImxvYWRlciIsIm9wdGlvbnMiLCJpbXBvcnRMb2FkZXJzIiwic291cmNlTWFwIiwiaWRlbnQiLCJwbHVnaW5zIiwicG9zdGNzc0ZsZXhidWdzRml4ZXMiLCJicm93c2VycyIsImZsZXhib3giLCJzdGFnZSIsImlzTm9kZSIsInRlc3QiLCJFeHRyYWN0Q3NzQ2h1bmtzIiwiaG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLElBQUFBLE1BQU0sRUFBRSxZQURWO0FBRUVDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUUsQ0FEUjtBQUVQQyxNQUFBQSxTQUFTLEVBQUU7QUFGSjtBQUZYLEdBRGdCLEVBUWhCO0FBQ0VILElBQUFBLE1BQU0sRUFBRSxnQkFEVjtBQUVFQyxJQUFBQSxPQUFPLEVBQUU7QUFDUDtBQUNBO0FBQ0FFLE1BQUFBLFNBQVMsRUFBRSxJQUhKO0FBSVBDLE1BQUFBLEtBQUssRUFBRSxTQUpBO0FBS1BDLE1BQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU0sQ0FDYkMsZ0NBRGEsRUFFYiw4QkFBYTtBQUNYQyxVQUFBQSxRQUFRLEVBQUUsQ0FDUixLQURRLEVBRVIsaUJBRlEsRUFHUixhQUhRLEVBSVIsWUFKUSxDQURDO0FBT1hDLFVBQUFBLE9BQU8sRUFBRSxTQVBFLENBT1M7O0FBUFQsU0FBYixDQUZhLENBQU47QUFBQTtBQUxGO0FBRlgsR0FSZ0IsQ0FBbEI7QUE4QkEsU0FBT1QsU0FBUDtBQUNEOztBQUVjLHdCQUE0QjtBQUFBLE1BQWpCVSxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDekMsTUFBSVgsU0FBUyxHQUFHRCxhQUFhLEVBQTdCOztBQUNBLE1BQUlXLEtBQUssS0FBSyxNQUFWLElBQW9CQyxNQUF4QixFQUFnQztBQUM5QixXQUFPO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxRQUREO0FBRUxYLE1BQUFBLE1BQU0sRUFBRUQ7QUFGSCxLQUFQO0FBSUQ7O0FBRURBLEVBQUFBLFNBQVMsSUFDUDtBQUNFQyxJQUFBQSxNQUFNLEVBQUVZLDBDQUFpQlosTUFEM0I7QUFFRUMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BZLE1BQUFBLEdBQUcsRUFBRTtBQURFO0FBRlgsR0FETyw2Q0FPSmQsU0FQSSxFQUFULENBVHlDLENBaUJ2Qzs7QUFFRixTQUFPO0FBQ0xZLElBQUFBLElBQUksRUFBRSxRQUREO0FBRUxYLElBQUFBLE1BQU0sRUFBRUQ7QUFGSCxHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBFeHRyYWN0Q3NzQ2h1bmtzIGZyb20gJ2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbidcbmltcG9ydCBwb3N0Y3NzRmxleGJ1Z3NGaXhlcyBmcm9tICdwb3N0Y3NzLWZsZXhidWdzLWZpeGVzJ1xuXG5mdW5jdGlvbiBpbml0Q1NTTG9hZGVyKCkge1xuICBjb25zdCBjc3NMb2FkZXIgPSBbXG4gICAge1xuICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGltcG9ydExvYWRlcnM6IDEsXG4gICAgICAgIHNvdXJjZU1hcDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbG9hZGVyOiAncG9zdGNzcy1sb2FkZXInLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAvLyBOZWNlc3NhcnkgZm9yIGV4dGVybmFsIENTUyBpbXBvcnRzIHRvIHdvcmtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHAvaXNzdWVzLzI2NzdcbiAgICAgICAgc291cmNlTWFwOiB0cnVlLFxuICAgICAgICBpZGVudDogJ3Bvc3Rjc3MnLFxuICAgICAgICBwbHVnaW5zOiAoKSA9PiBbXG4gICAgICAgICAgcG9zdGNzc0ZsZXhidWdzRml4ZXMsXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKHtcbiAgICAgICAgICAgIGJyb3dzZXJzOiBbXG4gICAgICAgICAgICAgICc+MSUnLFxuICAgICAgICAgICAgICAnbGFzdCA0IHZlcnNpb25zJyxcbiAgICAgICAgICAgICAgJ0ZpcmVmb3ggRVNSJyxcbiAgICAgICAgICAgICAgJ25vdCBpZSA8IDknLCAvLyBSZWFjdCBkb2Vzbid0IHN1cHBvcnQgSUU4IGFueXdheVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZsZXhib3g6ICduby0yMDA5JywgLy8gSSdkIG9wdCBpbiBmb3IgdGhpcyAtIHNhZmFyaSA5ICYgSUUgMTAuXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF1cbiAgcmV0dXJuIGNzc0xvYWRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7IHN0YWdlLCBpc05vZGUgfSkge1xuICBsZXQgY3NzTG9hZGVyID0gaW5pdENTU0xvYWRlcigpXG4gIGlmIChzdGFnZSA9PT0gJ25vZGUnIHx8IGlzTm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICBsb2FkZXI6IGNzc0xvYWRlcixcbiAgICB9XG4gIH1cblxuICBjc3NMb2FkZXIgPSBbXG4gICAge1xuICAgICAgbG9hZGVyOiBFeHRyYWN0Q3NzQ2h1bmtzLmxvYWRlcixcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaG90OiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC4uLmNzc0xvYWRlcixcbiAgXSAvLyBzZWVpbmcgYXMgaXQncyBITVIsIHdoeSBub3QgOilcblxuICByZXR1cm4ge1xuICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICBsb2FkZXI6IGNzc0xvYWRlcixcbiAgfVxufVxuIl19