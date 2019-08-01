"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(_ref) {
  var stage = _ref.stage,
      isNode = _ref.isNode;

  if (stage === 'node' || isNode) {
    return {
      loader: 'url-loader',
      exclude: [/\.js$/, /\.html$/, /\.json$/] // Don't generate extra files during node build

    };
  }

  return {
    loader: 'url-loader',
    exclude: [/\.js$/, /\.html$/, /\.json$/],
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]'
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9maWxlTG9hZGVyLmpzIl0sIm5hbWVzIjpbInN0YWdlIiwiaXNOb2RlIiwibG9hZGVyIiwiZXhjbHVkZSIsInF1ZXJ5IiwibGltaXQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsd0JBQTRCO0FBQUEsTUFBakJBLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFDekMsTUFBSUQsS0FBSyxLQUFLLE1BQVYsSUFBb0JDLE1BQXhCLEVBQWdDO0FBQzlCLFdBQU87QUFDTEMsTUFBQUEsTUFBTSxFQUFFLFlBREg7QUFFTEMsTUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsU0FBckIsQ0FGSixDQUdMOztBQUhLLEtBQVA7QUFLRDs7QUFDRCxTQUFPO0FBQ0xELElBQUFBLE1BQU0sRUFBRSxZQURIO0FBRUxDLElBQUFBLE9BQU8sRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFNBQXJCLENBRko7QUFHTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLEtBQUssRUFBRSxLQURGO0FBRUxDLE1BQUFBLElBQUksRUFBRTtBQUZEO0FBSEYsR0FBUDtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBzdGFnZSwgaXNOb2RlIH0pIHtcbiAgaWYgKHN0YWdlID09PSAnbm9kZScgfHwgaXNOb2RlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRlcjogJ3VybC1sb2FkZXInLFxuICAgICAgZXhjbHVkZTogWy9cXC5qcyQvLCAvXFwuaHRtbCQvLCAvXFwuanNvbiQvXSxcbiAgICAgIC8vIERvbid0IGdlbmVyYXRlIGV4dHJhIGZpbGVzIGR1cmluZyBub2RlIGJ1aWxkXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgbG9hZGVyOiAndXJsLWxvYWRlcicsXG4gICAgZXhjbHVkZTogWy9cXC5qcyQvLCAvXFwuaHRtbCQvLCAvXFwuanNvbiQvXSxcbiAgICBxdWVyeToge1xuICAgICAgbGltaXQ6IDEwMDAwLFxuICAgICAgbmFtZTogJ3N0YXRpYy9bbmFtZV0uW2hhc2g6OF0uW2V4dF0nLFxuICAgIH0sXG4gIH1cbn1cbiJdfQ==