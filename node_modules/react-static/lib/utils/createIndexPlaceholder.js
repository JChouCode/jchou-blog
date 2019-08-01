"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createIndexPlaceholder;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _RootComponents = require("../static/components/RootComponents");

function createIndexPlaceholder(_x) {
  return _createIndexPlaceholder.apply(this, arguments);
}

function _createIndexPlaceholder() {
  _createIndexPlaceholder = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var _state$config, Document, paths, Component, DocumentHtml, html;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _state$config = state.config, Document = _state$config.Document, paths = _state$config.paths; // Render the base document component to string with siteprops

            Component = Document || _RootComponents.DefaultDocument;
            DocumentHtml = (0, _server.renderToString)(_react["default"].createElement(Component, {
              Html: _RootComponents.Html,
              Head: _RootComponents.Head,
              Body: _RootComponents.Body,
              state: state
            }, _react["default"].createElement("div", {
              id: "root"
            })));
            html = "<!DOCTYPE html>".concat(DocumentHtml); // Write the Document to index.html

            _context.next = 6;
            return _fsExtra["default"].outputFile(paths.HTML_TEMPLATE, html);

          case 6:
            return _context.abrupt("return", state);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createIndexPlaceholder.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jcmVhdGVJbmRleFBsYWNlaG9sZGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUluZGV4UGxhY2Vob2xkZXIiLCJzdGF0ZSIsImNvbmZpZyIsIkRvY3VtZW50IiwicGF0aHMiLCJDb21wb25lbnQiLCJEZWZhdWx0RG9jdW1lbnQiLCJEb2N1bWVudEh0bWwiLCJIdG1sIiwiSGVhZCIsIkJvZHkiLCJodG1sIiwiZnMiLCJvdXRwdXRGaWxlIiwiSFRNTF9URU1QTEFURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztTQU84QkEsc0I7Ozs7Ozs7K0JBQWYsaUJBQXNDQyxLQUF0QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBR1RBLEtBSFMsQ0FFWEMsTUFGVyxFQUVEQyxRQUZDLGlCQUVEQSxRQUZDLEVBRVNDLEtBRlQsaUJBRVNBLEtBRlQsRUFJYjs7QUFDTUMsWUFBQUEsU0FMTyxHQUtLRixRQUFRLElBQUlHLCtCQUxqQjtBQU1QQyxZQUFBQSxZQU5PLEdBTVEsNEJBQ25CLGdDQUFDLFNBQUQ7QUFBVyxjQUFBLElBQUksRUFBRUMsb0JBQWpCO0FBQXVCLGNBQUEsSUFBSSxFQUFFQyxvQkFBN0I7QUFBbUMsY0FBQSxJQUFJLEVBQUVDLG9CQUF6QztBQUErQyxjQUFBLEtBQUssRUFBRVQ7QUFBdEQsZUFDRTtBQUFLLGNBQUEsRUFBRSxFQUFDO0FBQVIsY0FERixDQURtQixDQU5SO0FBV1BVLFlBQUFBLElBWE8sNEJBV2tCSixZQVhsQixHQWFiOztBQWJhO0FBQUEsbUJBY1BLLG9CQUFHQyxVQUFILENBQWNULEtBQUssQ0FBQ1UsYUFBcEIsRUFBbUNILElBQW5DLENBZE87O0FBQUE7QUFBQSw2Q0FnQk5WLEtBaEJNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQge1xuICBEZWZhdWx0RG9jdW1lbnQsXG4gIEh0bWwsXG4gIEhlYWQsXG4gIEJvZHksXG59IGZyb20gJy4uL3N0YXRpYy9jb21wb25lbnRzL1Jvb3RDb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbmRleFBsYWNlaG9sZGVyKHN0YXRlKSB7XG4gIGNvbnN0IHtcbiAgICBjb25maWc6IHsgRG9jdW1lbnQsIHBhdGhzIH0sXG4gIH0gPSBzdGF0ZVxuICAvLyBSZW5kZXIgdGhlIGJhc2UgZG9jdW1lbnQgY29tcG9uZW50IHRvIHN0cmluZyB3aXRoIHNpdGVwcm9wc1xuICBjb25zdCBDb21wb25lbnQgPSBEb2N1bWVudCB8fCBEZWZhdWx0RG9jdW1lbnRcbiAgY29uc3QgRG9jdW1lbnRIdG1sID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPENvbXBvbmVudCBIdG1sPXtIdG1sfSBIZWFkPXtIZWFkfSBCb2R5PXtCb2R5fSBzdGF0ZT17c3RhdGV9PlxuICAgICAgPGRpdiBpZD1cInJvb3RcIiAvPlxuICAgIDwvQ29tcG9uZW50PlxuICApXG4gIGNvbnN0IGh0bWwgPSBgPCFET0NUWVBFIGh0bWw+JHtEb2N1bWVudEh0bWx9YFxuXG4gIC8vIFdyaXRlIHRoZSBEb2N1bWVudCB0byBpbmRleC5odG1sXG4gIGF3YWl0IGZzLm91dHB1dEZpbGUocGF0aHMuSFRNTF9URU1QTEFURSwgaHRtbClcblxuICByZXR1cm4gc3RhdGVcbn1cbiJdfQ==