"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

// eslint-disable-next-line
var context = _react["default"].createContext({});

if (typeof document !== 'undefined') {
  context = _react["default"].createContext(window.__routeInfo);
}

var _default = context;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2NvbnRleHQvc3RhdGljSW5mb0NvbnRleHQuanMiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImRvY3VtZW50Iiwid2luZG93IiwiX19yb3V0ZUluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyxrQkFBTUMsYUFBTixDQUFvQixFQUFwQixDQUFkOztBQUVBLElBQUksT0FBT0MsUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQ0gsRUFBQUEsT0FBTyxHQUFHQyxrQkFBTUMsYUFBTixDQUFvQkUsTUFBTSxDQUFDQyxXQUEzQixDQUFWO0FBQ0Q7O2VBRWNMLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxubGV0IGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBjb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh3aW5kb3cuX19yb3V0ZUluZm8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRleHRcbiJdfQ==