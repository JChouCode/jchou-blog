"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chunkBuilder = require("../utils/chunkBuilder");

var _default =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var paths, templates, reactStaticUniversalPath, file, dynamicRoutesPath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            paths = state.config.paths, templates = state.templates; // convert Windows-style path separators to the Unix style to ensure sure the
            // string literal is valid and doesn't contain escaped characters

            reactStaticUniversalPath = process.env.REACT_STATIC_UNIVERSAL_PATH.split('\\').join('/');
            file = "\n".concat(process.env.NODE_ENV === 'production' ? "\nimport React from 'react'\nimport universal, { setHasBabelPlugin } from '".concat(reactStaticUniversalPath, "'\n\nsetHasBabelPlugin()\n\nconst universalOptions = {\n  loading: () => null,\n  error: props => {\n    console.error(props.error);\n    return <div>An error occurred loading this page's template. More information is available in the console.</div>;\n  },\n  ignoreBabelRename: true\n}\n\n").concat(templates.map(function (template, index) {
              var chunkName = ''; // relative resolving produces the wrong path, a "../" is missing
              // as the files looks equal, we simple use an absolute path then

              if (!paths.DIST.startsWith(paths.ROOT)) {
                chunkName = "/* webpackChunkName: \"".concat((0, _chunkBuilder.chunkNameFromFile)(template), "\" */");
              }

              return "const t_".concat(index, " = universal(import('").concat(template, "'").concat(chunkName, "), universalOptions)\n      t_").concat(index, ".template = '").concat(template, "'\n      ");
            }).join('\n'), "\n\n// Template Map\nexport default {\n  ").concat(templates.map(function (template, index) {
              return "'".concat(template, "': t_").concat(index);
            }).join(',\n'), "\n}\n// Not Found Template\nexport const notFoundTemplate = ").concat(JSON.stringify(templates[0]), "\n") : "\n  \n// Template Map\nexport default {\n  ".concat(templates.map(function (template) {
              return "'".concat(template, "': require('").concat(template, "').default");
            }).join(',\n'), "\n}\n\nexport const notFoundTemplate = '").concat(templates[0], "'\n"), "\n");
            dynamicRoutesPath = _path["default"].join(process.env.REACT_STATIC_TEMPLATES_PATH);
            _context.next = 6;
            return _fsExtra["default"].remove(dynamicRoutesPath);

          case 6:
            _context.next = 8;
            return _fsExtra["default"].outputFile(dynamicRoutesPath, file);

          case 8:
            return _context.abrupt("return", state);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZ2VuZXJhdGVUZW1wbGF0ZXMuanMiXSwibmFtZXMiOlsic3RhdGUiLCJwYXRocyIsImNvbmZpZyIsInRlbXBsYXRlcyIsInJlYWN0U3RhdGljVW5pdmVyc2FsUGF0aCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfVU5JVkVSU0FMX1BBVEgiLCJzcGxpdCIsImpvaW4iLCJmaWxlIiwiTk9ERV9FTlYiLCJtYXAiLCJ0ZW1wbGF0ZSIsImluZGV4IiwiY2h1bmtOYW1lIiwiRElTVCIsInN0YXJ0c1dpdGgiLCJST09UIiwiSlNPTiIsInN0cmluZ2lmeSIsImR5bmFtaWNSb3V0ZXNQYXRoIiwicGF0aCIsIlJFQUNUX1NUQVRJQ19URU1QTEFURVNfUEFUSCIsImZzIiwicmVtb3ZlIiwib3V0cHV0RmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OytCQUVlLGlCQUFNQSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVEQyxZQUFBQSxLQUZDLEdBSVRELEtBSlMsQ0FFWEUsTUFGVyxDQUVERCxLQUZDLEVBR1hFLFNBSFcsR0FJVEgsS0FKUyxDQUdYRyxTQUhXLEVBTWI7QUFDQTs7QUFDTUMsWUFBQUEsd0JBUk8sR0FRb0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywyQkFBWixDQUF3Q0MsS0FBeEMsQ0FDL0IsSUFEK0IsRUFFL0JDLElBRitCLENBRTFCLEdBRjBCLENBUnBCO0FBWVBDLFlBQUFBLElBWk8sZUFjYkwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLFFBQVosS0FBeUIsWUFBekIsd0ZBRzhDUCx3QkFIOUMsK1NBZ0JBRCxTQUFTLENBQ1JTLEdBREQsQ0FDSyxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDeEIsa0JBQUlDLFNBQVMsR0FBRyxFQUFoQixDQUR3QixDQUd4QjtBQUNBOztBQUVBLGtCQUFJLENBQUNkLEtBQUssQ0FBQ2UsSUFBTixDQUFXQyxVQUFYLENBQXNCaEIsS0FBSyxDQUFDaUIsSUFBNUIsQ0FBTCxFQUF3QztBQUN0Q0gsZ0JBQUFBLFNBQVMsb0NBQTRCLHFDQUFrQkYsUUFBbEIsQ0FBNUIsVUFBVDtBQUNEOztBQUVELHVDQUFrQkMsS0FBbEIsa0NBQStDRCxRQUEvQyxjQUEyREUsU0FBM0QsMkNBQ01ELEtBRE4sMEJBQzJCRCxRQUQzQjtBQUdELGFBZEQsRUFlQ0osSUFmRCxDQWVNLElBZk4sQ0FoQkEsc0RBbUNFTixTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQVdDLEtBQVg7QUFBQSxnQ0FBeUJELFFBQXpCLGtCQUF5Q0MsS0FBekM7QUFBQSxhQUFkLEVBQWdFTCxJQUFoRSxDQUFxRSxLQUFyRSxDQW5DRix5RUFzQ2dDVSxJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLFNBQVMsQ0FBQyxDQUFELENBQXhCLENBdENoQywrREE0Q0VBLFNBQVMsQ0FDUlMsR0FERCxDQUNLLFVBQUFDLFFBQVE7QUFBQSxnQ0FBUUEsUUFBUix5QkFBK0JBLFFBQS9CO0FBQUEsYUFEYixFQUVDSixJQUZELENBRU0sS0FGTixDQTVDRixxREFpRGlDTixTQUFTLENBQUMsQ0FBRCxDQWpEMUMsUUFkYTtBQW9FUGtCLFlBQUFBLGlCQXBFTyxHQW9FYUMsaUJBQUtiLElBQUwsQ0FBVUosT0FBTyxDQUFDQyxHQUFSLENBQVlpQiwyQkFBdEIsQ0FwRWI7QUFBQTtBQUFBLG1CQXFFUEMsb0JBQUdDLE1BQUgsQ0FBVUosaUJBQVYsQ0FyRU87O0FBQUE7QUFBQTtBQUFBLG1CQXNFUEcsb0JBQUdFLFVBQUgsQ0FBY0wsaUJBQWQsRUFBaUNYLElBQWpDLENBdEVPOztBQUFBO0FBQUEsNkNBNEVOVixLQTVFTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCB7IGNodW5rTmFtZUZyb21GaWxlIH0gZnJvbSAnLi4vdXRpbHMvY2h1bmtCdWlsZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBzdGF0ZSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb25maWc6IHsgcGF0aHMgfSxcbiAgICB0ZW1wbGF0ZXMsXG4gIH0gPSBzdGF0ZVxuXG4gIC8vIGNvbnZlcnQgV2luZG93cy1zdHlsZSBwYXRoIHNlcGFyYXRvcnMgdG8gdGhlIFVuaXggc3R5bGUgdG8gZW5zdXJlIHN1cmUgdGhlXG4gIC8vIHN0cmluZyBsaXRlcmFsIGlzIHZhbGlkIGFuZCBkb2Vzbid0IGNvbnRhaW4gZXNjYXBlZCBjaGFyYWN0ZXJzXG4gIGNvbnN0IHJlYWN0U3RhdGljVW5pdmVyc2FsUGF0aCA9IHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19VTklWRVJTQUxfUEFUSC5zcGxpdChcbiAgICAnXFxcXCdcbiAgKS5qb2luKCcvJylcblxuICBjb25zdCBmaWxlID0gYFxuJHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gYFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVuaXZlcnNhbCwgeyBzZXRIYXNCYWJlbFBsdWdpbiB9IGZyb20gJyR7cmVhY3RTdGF0aWNVbml2ZXJzYWxQYXRofSdcblxuc2V0SGFzQmFiZWxQbHVnaW4oKVxuXG5jb25zdCB1bml2ZXJzYWxPcHRpb25zID0ge1xuICBsb2FkaW5nOiAoKSA9PiBudWxsLFxuICBlcnJvcjogcHJvcHMgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IocHJvcHMuZXJyb3IpO1xuICAgIHJldHVybiA8ZGl2PkFuIGVycm9yIG9jY3VycmVkIGxvYWRpbmcgdGhpcyBwYWdlJ3MgdGVtcGxhdGUuIE1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGluIHRoZSBjb25zb2xlLjwvZGl2PjtcbiAgfSxcbiAgaWdub3JlQmFiZWxSZW5hbWU6IHRydWVcbn1cblxuJHt0ZW1wbGF0ZXNcbiAgLm1hcCgodGVtcGxhdGUsIGluZGV4KSA9PiB7XG4gICAgbGV0IGNodW5rTmFtZSA9ICcnXG5cbiAgICAvLyByZWxhdGl2ZSByZXNvbHZpbmcgcHJvZHVjZXMgdGhlIHdyb25nIHBhdGgsIGEgXCIuLi9cIiBpcyBtaXNzaW5nXG4gICAgLy8gYXMgdGhlIGZpbGVzIGxvb2tzIGVxdWFsLCB3ZSBzaW1wbGUgdXNlIGFuIGFic29sdXRlIHBhdGggdGhlblxuXG4gICAgaWYgKCFwYXRocy5ESVNULnN0YXJ0c1dpdGgocGF0aHMuUk9PVCkpIHtcbiAgICAgIGNodW5rTmFtZSA9IGAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIiR7Y2h1bmtOYW1lRnJvbUZpbGUodGVtcGxhdGUpfVwiICovYFxuICAgIH1cblxuICAgIHJldHVybiBgY29uc3QgdF8ke2luZGV4fSA9IHVuaXZlcnNhbChpbXBvcnQoJyR7dGVtcGxhdGV9JyR7Y2h1bmtOYW1lfSksIHVuaXZlcnNhbE9wdGlvbnMpXG4gICAgICB0XyR7aW5kZXh9LnRlbXBsYXRlID0gJyR7dGVtcGxhdGV9J1xuICAgICAgYFxuICB9KVxuICAuam9pbignXFxuJyl9XG5cbi8vIFRlbXBsYXRlIE1hcFxuZXhwb3J0IGRlZmF1bHQge1xuICAke3RlbXBsYXRlcy5tYXAoKHRlbXBsYXRlLCBpbmRleCkgPT4gYCcke3RlbXBsYXRlfSc6IHRfJHtpbmRleH1gKS5qb2luKCcsXFxuJyl9XG59XG4vLyBOb3QgRm91bmQgVGVtcGxhdGVcbmV4cG9ydCBjb25zdCBub3RGb3VuZFRlbXBsYXRlID0gJHtKU09OLnN0cmluZ2lmeSh0ZW1wbGF0ZXNbMF0pfVxuYFxuICAgIDogYFxuICBcbi8vIFRlbXBsYXRlIE1hcFxuZXhwb3J0IGRlZmF1bHQge1xuICAke3RlbXBsYXRlc1xuICAgIC5tYXAodGVtcGxhdGUgPT4gYCcke3RlbXBsYXRlfSc6IHJlcXVpcmUoJyR7dGVtcGxhdGV9JykuZGVmYXVsdGApXG4gICAgLmpvaW4oJyxcXG4nKX1cbn1cblxuZXhwb3J0IGNvbnN0IG5vdEZvdW5kVGVtcGxhdGUgPSAnJHt0ZW1wbGF0ZXNbMF19J1xuYFxufVxuYFxuXG4gIGNvbnN0IGR5bmFtaWNSb3V0ZXNQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19URU1QTEFURVNfUEFUSClcbiAgYXdhaXQgZnMucmVtb3ZlKGR5bmFtaWNSb3V0ZXNQYXRoKVxuICBhd2FpdCBmcy5vdXRwdXRGaWxlKGR5bmFtaWNSb3V0ZXNQYXRoLCBmaWxlKVxuXG4gIC8vIFdlIGhhdmUgdG8gd2FpdCBoZXJlIGZvciBhIHNtaWRnZSwgYmVjYXVzZSB3ZWJwYWNrIHdhdGNoZXIgaXNcbiAgLy8gb3Zlcmx5IGFnZ3Jlc3NpdmUgb24gZmlyc3Qgc3RhcnRcbiAgLy8gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpXG5cbiAgcmV0dXJuIHN0YXRlXG59XG4iXX0=