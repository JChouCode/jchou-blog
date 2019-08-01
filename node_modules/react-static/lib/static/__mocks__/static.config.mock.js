"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _default = {
  Document: function Document(_ref) {
    var Html = _ref.Html,
        Head = _ref.Head,
        Body = _ref.Body,
        children = _ref.children;
    return React.createElement(Html, {
      lang: "en-US"
    }, React.createElement(Head, null, React.createElement("meta", {
      charSet: "UTF-8"
    }), React.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    })), React.createElement(Body, null, children));
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGF0aWMvX19tb2Nrc19fL3N0YXRpYy5jb25maWcubW9jay5qc3giXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIkJvZHkiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsUUFBZUMsSUFBZixRQUFlQSxJQUFmO0FBQUEsUUFBcUJDLFFBQXJCLFFBQXFCQSxRQUFyQjtBQUFBLFdBQ1Isb0JBQUMsSUFBRDtBQUFNLE1BQUEsSUFBSSxFQUFDO0FBQVgsT0FDRSxvQkFBQyxJQUFELFFBQ0U7QUFBTSxNQUFBLE9BQU8sRUFBQztBQUFkLE1BREYsRUFFRTtBQUFNLE1BQUEsSUFBSSxFQUFDLFVBQVg7QUFBc0IsTUFBQSxPQUFPLEVBQUM7QUFBOUIsTUFGRixDQURGLEVBS0Usb0JBQUMsSUFBRCxRQUFPQSxRQUFQLENBTEYsQ0FEUTtBQUFBO0FBREcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIERvY3VtZW50OiAoeyBIdG1sLCBIZWFkLCBCb2R5LCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPEh0bWwgbGFuZz1cImVuLVVTXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb2R5PntjaGlsZHJlbn08L0JvZHk+XG4gICAgPC9IdG1sPlxuICApLFxufVxuIl19