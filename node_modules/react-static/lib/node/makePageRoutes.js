"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makePageRoutes;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function makePageRoutes(_ref) {
  var items = _ref.items,
      pageSize = _ref.pageSize,
      _ref$pageToken = _ref.pageToken,
      pageToken = _ref$pageToken === void 0 ? 'page' : _ref$pageToken,
      route = _ref.route,
      decorate = _ref.decorate;
  var itemsCopy = (0, _toConsumableArray2["default"])(items); // Make a copy of the items

  var pages = []; // Make an array for all of the different pages

  while (itemsCopy.length) {
    // Splice out all of the items into separate pages using a set pageSize
    pages.push(itemsCopy.splice(0, pageSize));
  }

  var totalPages = pages.length; // Move the first page out of pagination. This is so page one doesn't require a page number.

  var firstPage = pages[0];
  var routes = [(0, _objectSpread2["default"])({}, route, decorate(firstPage, 1, totalPages))].concat((0, _toConsumableArray2["default"])(pages.map(function (page, i) {
    return (0, _objectSpread2["default"])({}, route, {
      // route defaults
      path: "".concat(route.path, "/").concat(pageToken, "/").concat(i + 1)
    }, decorate(page, i + 1, totalPages));
  })));
  return routes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL21ha2VQYWdlUm91dGVzLmpzIl0sIm5hbWVzIjpbIm1ha2VQYWdlUm91dGVzIiwiaXRlbXMiLCJwYWdlU2l6ZSIsInBhZ2VUb2tlbiIsInJvdXRlIiwiZGVjb3JhdGUiLCJpdGVtc0NvcHkiLCJwYWdlcyIsImxlbmd0aCIsInB1c2giLCJzcGxpY2UiLCJ0b3RhbFBhZ2VzIiwiZmlyc3RQYWdlIiwicm91dGVzIiwibWFwIiwicGFnZSIsImkiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsY0FBVCxPQU1aO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsUUFJQyxRQUpEQSxRQUlDO0FBQUEsNEJBSERDLFNBR0M7QUFBQSxNQUhEQSxTQUdDLCtCQUhXLE1BR1g7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7QUFDRCxNQUFNQyxTQUFTLHVDQUFPTCxLQUFQLENBQWYsQ0FEQyxDQUM0Qjs7QUFDN0IsTUFBTU0sS0FBSyxHQUFHLEVBQWQsQ0FGQyxDQUVnQjs7QUFFakIsU0FBT0QsU0FBUyxDQUFDRSxNQUFqQixFQUF5QjtBQUN2QjtBQUNBRCxJQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV0gsU0FBUyxDQUFDSSxNQUFWLENBQWlCLENBQWpCLEVBQW9CUixRQUFwQixDQUFYO0FBQ0Q7O0FBRUQsTUFBTVMsVUFBVSxHQUFHSixLQUFLLENBQUNDLE1BQXpCLENBVEMsQ0FXRDs7QUFDQSxNQUFNSSxTQUFTLEdBQUdMLEtBQUssQ0FBQyxDQUFELENBQXZCO0FBRUEsTUFBTU0sTUFBTSx1Q0FFTFQsS0FGSyxFQUdMQyxRQUFRLENBQUNPLFNBQUQsRUFBWSxDQUFaLEVBQWVELFVBQWYsQ0FISCw4Q0FNUEosS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsOENBQ1JaLEtBRFE7QUFDRDtBQUNWYSxNQUFBQSxJQUFJLFlBQUtiLEtBQUssQ0FBQ2EsSUFBWCxjQUFtQmQsU0FBbkIsY0FBZ0NhLENBQUMsR0FBRyxDQUFwQztBQUZPLE9BR1JYLFFBQVEsQ0FBQ1UsSUFBRCxFQUFPQyxDQUFDLEdBQUcsQ0FBWCxFQUFjTCxVQUFkLENBSEE7QUFBQSxHQUFWLENBTk8sRUFBWjtBQWFBLFNBQU9FLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VQYWdlUm91dGVzKHtcbiAgaXRlbXMsXG4gIHBhZ2VTaXplLFxuICBwYWdlVG9rZW4gPSAncGFnZScsXG4gIHJvdXRlLFxuICBkZWNvcmF0ZSxcbn0pIHtcbiAgY29uc3QgaXRlbXNDb3B5ID0gWy4uLml0ZW1zXSAvLyBNYWtlIGEgY29weSBvZiB0aGUgaXRlbXNcbiAgY29uc3QgcGFnZXMgPSBbXSAvLyBNYWtlIGFuIGFycmF5IGZvciBhbGwgb2YgdGhlIGRpZmZlcmVudCBwYWdlc1xuXG4gIHdoaWxlIChpdGVtc0NvcHkubGVuZ3RoKSB7XG4gICAgLy8gU3BsaWNlIG91dCBhbGwgb2YgdGhlIGl0ZW1zIGludG8gc2VwYXJhdGUgcGFnZXMgdXNpbmcgYSBzZXQgcGFnZVNpemVcbiAgICBwYWdlcy5wdXNoKGl0ZW1zQ29weS5zcGxpY2UoMCwgcGFnZVNpemUpKVxuICB9XG5cbiAgY29uc3QgdG90YWxQYWdlcyA9IHBhZ2VzLmxlbmd0aFxuXG4gIC8vIE1vdmUgdGhlIGZpcnN0IHBhZ2Ugb3V0IG9mIHBhZ2luYXRpb24uIFRoaXMgaXMgc28gcGFnZSBvbmUgZG9lc24ndCByZXF1aXJlIGEgcGFnZSBudW1iZXIuXG4gIGNvbnN0IGZpcnN0UGFnZSA9IHBhZ2VzWzBdXG5cbiAgY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgIC4uLnJvdXRlLFxuICAgICAgLi4uZGVjb3JhdGUoZmlyc3RQYWdlLCAxLCB0b3RhbFBhZ2VzKSwgLy8gYW5kIG9ubHkgcGFzcyB0aGUgZmlyc3QgcGFnZSBhcyBkYXRhXG4gICAgfSxcbiAgICAvLyBtYXAgb3ZlciBlYWNoIHBhZ2UgdG8gY3JlYXRlIGFuIGFycmF5IG9mIHBhZ2Ugcm91dGVzLCBhbmQgc3ByZWFkIGl0IVxuICAgIC4uLnBhZ2VzLm1hcCgocGFnZSwgaSkgPT4gKHtcbiAgICAgIC4uLnJvdXRlLCAvLyByb3V0ZSBkZWZhdWx0c1xuICAgICAgcGF0aDogYCR7cm91dGUucGF0aH0vJHtwYWdlVG9rZW59LyR7aSArIDF9YCxcbiAgICAgIC4uLmRlY29yYXRlKHBhZ2UsIGkgKyAxLCB0b3RhbFBhZ2VzKSxcbiAgICB9KSksXG4gIF1cblxuICByZXR1cm4gcm91dGVzXG59XG4iXX0=