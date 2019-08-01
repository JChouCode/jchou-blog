"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _reactUniversalComponent = require("react-universal-component");

var _webpackFlushChunks = _interopRequireDefault(require("webpack-flush-chunks"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _Redirect = _interopRequireDefault(require("./components/Redirect"));

var _plugins = _interopRequireDefault(require("./plugins"));

var _utils = require("../utils");

var _chunkBuilder = require("../utils/chunkBuilder");

var _HtmlWithMeta = _interopRequireDefault(require("./components/HtmlWithMeta"));

var _HeadWithMeta = _interopRequireDefault(require("./components/HeadWithMeta"));

var _BodyWithMeta = _interopRequireDefault(require("./components/BodyWithMeta"));

//
var cachedBasePath;
var cachedHrefReplace;
var cachedSrcReplace;

var _default =
/*#__PURE__*/
function () {
  var _exportRoute = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(state) {
    var _state, config, DocumentTemplate, route, siteData, clientStats, incremental, _state2, Comp, sharedHashesByProp, template, data, sharedData, routePath, remove, removeLocation, basePath, hrefReplace, srcReplace, routeInfo, embeddedRouteInfo, meta, chunkNames, head, clientScripts, clientStyleSheets, clientCss, FinalComp, renderToStringAndExtract, appHtml, RenderedComp, DocumentHtml, html, publicPath, htmlFilename, routeInfoFilename, res;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _state = state, config = _state.config, DocumentTemplate = _state.DocumentTemplate, route = _state.route, siteData = _state.siteData, clientStats = _state.clientStats, incremental = _state.incremental;
            _state2 = state, Comp = _state2.Comp;
            sharedHashesByProp = route.sharedHashesByProp, template = route.template, data = route.data, sharedData = route.sharedData, routePath = route.path, remove = route.remove;

            if (!(incremental && remove)) {
              _context.next = 8;
              break;
            }

            if (!(route.path === '404' || route.path === '/')) {
              _context.next = 6;
              break;
            }

            throw new Error("You are attempting to incrementally remove the ".concat(route.path === '404' ? '404' : 'index', " route from your export. This is currently not supported (or recommended) by React Static."));

          case 6:
            removeLocation = _path["default"].join(config.paths.DIST, route.path);
            return _context.abrupt("return", _fsExtra["default"].remove(removeLocation));

          case 8:
            basePath = cachedBasePath || (cachedBasePath = config.basePath);
            hrefReplace = cachedHrefReplace || (cachedHrefReplace = new RegExp("(href=[\"'])\\/(".concat(basePath ? "".concat(basePath, "\\/") : '', ")?([^\\/])"), 'gm'));
            srcReplace = cachedSrcReplace || (cachedSrcReplace = new RegExp("(src=[\"'])\\/(".concat(basePath ? "".concat(basePath, "\\/") : '', ")?([^\\/])"), 'gm')); // This routeInfo will be saved to disk. It should only include the
            // data and hashes to construct all of the props later.

            routeInfo = {
              template: template,
              sharedHashesByProp: sharedHashesByProp,
              data: data,
              path: routePath // This embeddedRouteInfo will be inlined into the HTML for this route.
              // It should include all of the data, including shared data

            };
            embeddedRouteInfo = (0, _objectSpread2["default"])({}, routeInfo, {
              sharedData: sharedData,
              siteData: siteData
            });
            state = (0, _objectSpread2["default"])({}, state, {
              routeInfo: routeInfo,
              embeddedRouteInfo: embeddedRouteInfo // Make a place to collect chunks, meta info and head tags

            });
            meta = {};
            chunkNames = [];
            head = {};
            clientScripts = [];
            clientStyleSheets = [];
            clientCss = {};
            // Get the react component from the Comp and pass it the export context. This
            // uses reactContext under the hood to pass down the exportContext, since
            // react's new context api doesn't survive across bundling.
            Comp = config.disableRuntime ? Comp : Comp(embeddedRouteInfo);

            if (route.redirect) {
              FinalComp = function FinalComp() {
                return _react["default"].createElement(_Redirect["default"], {
                  fromPath: route.path,
                  to: route.redirect
                });
              };
            } else {
              FinalComp = function FinalComp(props) {
                return _react["default"].createElement(_reactUniversalComponent.ReportChunks, {
                  report: function report(chunkName) {
                    // if we are building to a absolute path we must make the detected
                    // chunkName relative and matching to the one we set in
                    // generateTemplates
                    if (!config.paths.DIST.startsWith(config.paths.ROOT)) {
                      chunkName = (0, _chunkBuilder.absoluteToRelativeChunkName)(config.paths.ROOT, chunkName);
                    }

                    chunkNames.push(chunkName);
                  }
                }, _react["default"].createElement(Comp, props));
              };
            }

            renderToStringAndExtract = function renderToStringAndExtract(comp) {
              // Rend the app to string!
              var appHtml = (0, _server.renderToString)(comp);

              var _flushChunks = (0, _webpackFlushChunks["default"])(clientStats, {
                chunkNames: chunkNames,
                outputPath: config.paths.DIST
              }),
                  scripts = _flushChunks.scripts,
                  stylesheets = _flushChunks.stylesheets,
                  css = _flushChunks.css;

              clientScripts = scripts;
              clientStyleSheets = stylesheets;
              clientCss = css; // Extract head calls using Helmet synchronously right after renderToString
              // to not introduce any race conditions in the meta data rendering

              var helmet = _reactHelmet["default"].renderStatic();

              head = {
                htmlProps: helmet.htmlAttributes.toComponent(),
                bodyProps: helmet.bodyAttributes.toComponent(),
                base: helmet.base.toComponent(),
                link: helmet.link.toComponent(),
                meta: helmet.meta.toComponent(),
                noscript: helmet.noscript.toComponent(),
                script: helmet.script.toComponent(),
                style: helmet.style.toComponent(),
                title: helmet.title.toComponent()
              };
              return appHtml;
            };

            state = (0, _objectSpread2["default"])({}, state, {
              meta: meta
            });
            _context.prev = 24;
            _context.next = 27;
            return _plugins["default"].beforeRenderToElement(FinalComp, state);

          case 27:
            FinalComp = _context.sent;

            if (!config.renderToElement) {
              _context.next = 30;
              break;
            }

            throw new Error("config.renderToElement has been deprecated in favor of the " + "'beforeRenderToElement' or 'beforeRenderToHtml' hooks instead.");

          case 30:
            RenderedComp = _react["default"].createElement(FinalComp, null); // Run the beforeRenderToHtml hook
            // Rum the Html hook

            _context.next = 33;
            return _plugins["default"].beforeRenderToHtml(RenderedComp, state);

          case 33:
            RenderedComp = _context.sent;

            if (!config.renderToHtml) {
              _context.next = 36;
              break;
            }

            throw new Error("config.renderToHtml has been deprecated in favor of the " + "'beforeRenderToHtml' or 'beforeHtmlToDocument' hooks instead.");

          case 36:
            appHtml = renderToStringAndExtract(RenderedComp);
            _context.next = 39;
            return _plugins["default"].beforeHtmlToDocument(appHtml, state);

          case 39:
            appHtml = _context.sent;
            _context.next = 47;
            break;

          case 42:
            _context.prev = 42;
            _context.t0 = _context["catch"](24);

            if (_context.t0.then) {
              _context.t0.message = 'Components are not allowed to suspend during static export. Please ' + 'make its data available synchronously and try again!';
            }

            _context.t0.message = "Failed exporting HTML for URL ".concat(route.path, " (").concat(route.template, "): ").concat(_context.t0.message);
            throw _context.t0;

          case 47:
            state = (0, _objectSpread2["default"])({}, state, {
              head: head,
              clientScripts: clientScripts,
              clientStyleSheets: clientStyleSheets,
              clientCss: clientCss
            });
            _context.t1 = _server.renderToStaticMarkup;
            _context.t2 = _react["default"];
            _context.t3 = DocumentTemplate;
            _context.next = 53;
            return (0, _HtmlWithMeta["default"])(state);

          case 53:
            _context.t4 = _context.sent;
            _context.next = 56;
            return (0, _HeadWithMeta["default"])(state);

          case 56:
            _context.t5 = _context.sent;
            _context.next = 59;
            return (0, _BodyWithMeta["default"])(state);

          case 59:
            _context.t6 = _context.sent;
            _context.t7 = state;
            _context.t8 = {
              Html: _context.t4,
              Head: _context.t5,
              Body: _context.t6,
              state: _context.t7
            };
            _context.t9 = _react["default"].createElement("div", {
              id: "root",
              dangerouslySetInnerHTML: {
                __html: appHtml
              }
            });
            _context.t10 = _context.t2.createElement.call(_context.t2, _context.t3, _context.t8, _context.t9);
            DocumentHtml = (0, _context.t1)(_context.t10);
            // Render the html for the page inside of the base document.
            html = "<!DOCTYPE html>".concat(DocumentHtml);
            _context.next = 68;
            return _plugins["default"].beforeDocumentToFile(html, state);

          case 68:
            html = _context.sent;
            // If the siteRoot is set and we're not in staging, prefix all absolute URLs
            // with the siteRoot
            publicPath = (0, _utils.makePathAbsolute)(process.env.REACT_STATIC_PUBLIC_PATH);

            if (process.env.REACT_STATIC_DISABLE_ROUTE_PREFIXING !== 'true') {
              html = html.replace(hrefReplace, "$1".concat(publicPath, "$3"));
            }

            html = html.replace(srcReplace, "$1".concat(publicPath, "$3")); // If the route is a 404 page, write it directly to 404.html, instead of
            // inside a directory.

            htmlFilename = route.path === '404' ? _path["default"].join(config.paths.DIST, '404.html') : _path["default"].join(config.paths.DIST, route.path, 'index.html'); // Make the routeInfo sit right next to its companion html file

            routeInfoFilename = _path["default"].join(config.paths.DIST, route.path, 'routeInfo.json');
            _context.next = 76;
            return Promise.all([_fsExtra["default"].outputFile(htmlFilename, html), !route.redirect ? _fsExtra["default"].outputJson(routeInfoFilename, routeInfo) : Promise.resolve()]);

          case 76:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 78:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[24, 42]]);
  }));

  function exportRoute(_x) {
    return _exportRoute.apply(this, arguments);
  }

  return exportRoute;
}();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvZXhwb3J0Um91dGUuanMiXSwibmFtZXMiOlsiY2FjaGVkQmFzZVBhdGgiLCJjYWNoZWRIcmVmUmVwbGFjZSIsImNhY2hlZFNyY1JlcGxhY2UiLCJzdGF0ZSIsImNvbmZpZyIsIkRvY3VtZW50VGVtcGxhdGUiLCJyb3V0ZSIsInNpdGVEYXRhIiwiY2xpZW50U3RhdHMiLCJpbmNyZW1lbnRhbCIsIkNvbXAiLCJzaGFyZWRIYXNoZXNCeVByb3AiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJzaGFyZWREYXRhIiwicm91dGVQYXRoIiwicGF0aCIsInJlbW92ZSIsIkVycm9yIiwicmVtb3ZlTG9jYXRpb24iLCJub2RlUGF0aCIsImpvaW4iLCJwYXRocyIsIkRJU1QiLCJmcyIsImJhc2VQYXRoIiwiaHJlZlJlcGxhY2UiLCJSZWdFeHAiLCJzcmNSZXBsYWNlIiwicm91dGVJbmZvIiwiZW1iZWRkZWRSb3V0ZUluZm8iLCJtZXRhIiwiY2h1bmtOYW1lcyIsImhlYWQiLCJjbGllbnRTY3JpcHRzIiwiY2xpZW50U3R5bGVTaGVldHMiLCJjbGllbnRDc3MiLCJkaXNhYmxlUnVudGltZSIsInJlZGlyZWN0IiwiRmluYWxDb21wIiwicHJvcHMiLCJjaHVua05hbWUiLCJzdGFydHNXaXRoIiwiUk9PVCIsInB1c2giLCJyZW5kZXJUb1N0cmluZ0FuZEV4dHJhY3QiLCJjb21wIiwiYXBwSHRtbCIsIm91dHB1dFBhdGgiLCJzY3JpcHRzIiwic3R5bGVzaGVldHMiLCJjc3MiLCJoZWxtZXQiLCJIZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJodG1sUHJvcHMiLCJodG1sQXR0cmlidXRlcyIsInRvQ29tcG9uZW50IiwiYm9keVByb3BzIiwiYm9keUF0dHJpYnV0ZXMiLCJiYXNlIiwibGluayIsIm5vc2NyaXB0Iiwic2NyaXB0Iiwic3R5bGUiLCJ0aXRsZSIsInBsdWdpbnMiLCJiZWZvcmVSZW5kZXJUb0VsZW1lbnQiLCJyZW5kZXJUb0VsZW1lbnQiLCJSZW5kZXJlZENvbXAiLCJiZWZvcmVSZW5kZXJUb0h0bWwiLCJyZW5kZXJUb0h0bWwiLCJiZWZvcmVIdG1sVG9Eb2N1bWVudCIsInRoZW4iLCJtZXNzYWdlIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJfX2h0bWwiLCJEb2N1bWVudEh0bWwiLCJodG1sIiwiYmVmb3JlRG9jdW1lbnRUb0ZpbGUiLCJwdWJsaWNQYXRoIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSCIsIlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyIsInJlcGxhY2UiLCJodG1sRmlsZW5hbWUiLCJyb3V0ZUluZm9GaWxlbmFtZSIsIlByb21pc2UiLCJhbGwiLCJvdXRwdXRGaWxlIiwib3V0cHV0SnNvbiIsInJlc29sdmUiLCJyZXMiLCJleHBvcnRSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFFQSxJQUFJQSxjQUFKO0FBQ0EsSUFBSUMsaUJBQUo7QUFDQSxJQUFJQyxnQkFBSjs7Ozs7OzsrQkFFZ0IsaUJBQTJCQyxLQUEzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUVZBLEtBUlUsRUFFWkMsTUFGWSxVQUVaQSxNQUZZLEVBR1pDLGdCQUhZLFVBR1pBLGdCQUhZLEVBSVpDLEtBSlksVUFJWkEsS0FKWSxFQUtaQyxRQUxZLFVBS1pBLFFBTFksRUFNWkMsV0FOWSxVQU1aQSxXQU5ZLEVBT1pDLFdBUFksVUFPWkEsV0FQWTtBQUFBLHNCQVVDTixLQVZELEVBVVJPLElBVlEsV0FVUkEsSUFWUTtBQWFaQyxZQUFBQSxrQkFiWSxHQW1CVkwsS0FuQlUsQ0FhWkssa0JBYlksRUFjWkMsUUFkWSxHQW1CVk4sS0FuQlUsQ0FjWk0sUUFkWSxFQWVaQyxJQWZZLEdBbUJWUCxLQW5CVSxDQWVaTyxJQWZZLEVBZ0JaQyxVQWhCWSxHQW1CVlIsS0FuQlUsQ0FnQlpRLFVBaEJZLEVBaUJOQyxTQWpCTSxHQW1CVlQsS0FuQlUsQ0FpQlpVLElBakJZLEVBa0JaQyxNQWxCWSxHQW1CVlgsS0FuQlUsQ0FrQlpXLE1BbEJZOztBQUFBLGtCQXFCVlIsV0FBVyxJQUFJUSxNQXJCTDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFzQlJYLEtBQUssQ0FBQ1UsSUFBTixLQUFlLEtBQWYsSUFBd0JWLEtBQUssQ0FBQ1UsSUFBTixLQUFlLEdBdEIvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkF1QkosSUFBSUUsS0FBSiwwREFFRlosS0FBSyxDQUFDVSxJQUFOLEtBQWUsS0FBZixHQUF1QixLQUF2QixHQUErQixPQUY3QixnR0F2Qkk7O0FBQUE7QUE2Qk5HLFlBQUFBLGNBN0JNLEdBNkJXQyxpQkFBU0MsSUFBVCxDQUFjakIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhQyxJQUEzQixFQUFpQ2pCLEtBQUssQ0FBQ1UsSUFBdkMsQ0E3Qlg7QUFBQSw2Q0E4QkxRLG9CQUFHUCxNQUFILENBQVVFLGNBQVYsQ0E5Qks7O0FBQUE7QUFpQ1JNLFlBQUFBLFFBakNRLEdBaUNHekIsY0FBYyxLQUFLQSxjQUFjLEdBQUdJLE1BQU0sQ0FBQ3FCLFFBQTdCLENBakNqQjtBQW1DUkMsWUFBQUEsV0FuQ1EsR0FvQ1p6QixpQkFBaUIsS0FDaEJBLGlCQUFpQixHQUFHLElBQUkwQixNQUFKLDJCQUNERixRQUFRLGFBQU1BLFFBQU4sV0FBc0IsRUFEN0IsaUJBRW5CLElBRm1CLENBREosQ0FwQ0w7QUEwQ1JHLFlBQUFBLFVBMUNRLEdBMkNaMUIsZ0JBQWdCLEtBQ2ZBLGdCQUFnQixHQUFHLElBQUl5QixNQUFKLDBCQUNERixRQUFRLGFBQU1BLFFBQU4sV0FBc0IsRUFEN0IsaUJBRWxCLElBRmtCLENBREosQ0EzQ0osRUFpRGQ7QUFDQTs7QUFDTUksWUFBQUEsU0FuRFEsR0FtREk7QUFDaEJqQixjQUFBQSxRQUFRLEVBQVJBLFFBRGdCO0FBRWhCRCxjQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUZnQjtBQUdoQkUsY0FBQUEsSUFBSSxFQUFKQSxJQUhnQjtBQUloQkcsY0FBQUEsSUFBSSxFQUFFRCxTQUpVLENBT2xCO0FBQ0E7O0FBUmtCLGFBbkRKO0FBNERSZSxZQUFBQSxpQkE1RFEsc0NBNkRURCxTQTdEUztBQThEWmYsY0FBQUEsVUFBVSxFQUFWQSxVQTlEWTtBQStEWlAsY0FBQUEsUUFBUSxFQUFSQTtBQS9EWTtBQWtFZEosWUFBQUEsS0FBSyxzQ0FDQUEsS0FEQTtBQUVIMEIsY0FBQUEsU0FBUyxFQUFUQSxTQUZHO0FBR0hDLGNBQUFBLGlCQUFpQixFQUFqQkEsaUJBSEcsQ0FNTDs7QUFOSyxjQUFMO0FBT01DLFlBQUFBLElBekVRLEdBeUVELEVBekVDO0FBMEVSQyxZQUFBQSxVQTFFUSxHQTBFSyxFQTFFTDtBQTJFVkMsWUFBQUEsSUEzRVUsR0EyRUgsRUEzRUc7QUE0RVZDLFlBQUFBLGFBNUVVLEdBNEVNLEVBNUVOO0FBNkVWQyxZQUFBQSxpQkE3RVUsR0E2RVUsRUE3RVY7QUE4RVZDLFlBQUFBLFNBOUVVLEdBOEVFLEVBOUVGO0FBa0ZkO0FBQ0E7QUFDQTtBQUNBMUIsWUFBQUEsSUFBSSxHQUFHTixNQUFNLENBQUNpQyxjQUFQLEdBQXdCM0IsSUFBeEIsR0FBK0JBLElBQUksQ0FBQ29CLGlCQUFELENBQTFDOztBQUVBLGdCQUFJeEIsS0FBSyxDQUFDZ0MsUUFBVixFQUFvQjtBQUNsQkMsY0FBQUEsU0FBUyxHQUFHO0FBQUEsdUJBQU0sZ0NBQUMsb0JBQUQ7QUFBVSxrQkFBQSxRQUFRLEVBQUVqQyxLQUFLLENBQUNVLElBQTFCO0FBQWdDLGtCQUFBLEVBQUUsRUFBRVYsS0FBSyxDQUFDZ0M7QUFBMUMsa0JBQU47QUFBQSxlQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0xDLGNBQUFBLFNBQVMsR0FBRyxtQkFBQUMsS0FBSztBQUFBLHVCQUNmLGdDQUFDLHFDQUFEO0FBQ0Usa0JBQUEsTUFBTSxFQUFFLGdCQUFBQyxTQUFTLEVBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esd0JBQUksQ0FBQ3JDLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYUMsSUFBYixDQUFrQm1CLFVBQWxCLENBQTZCdEMsTUFBTSxDQUFDa0IsS0FBUCxDQUFhcUIsSUFBMUMsQ0FBTCxFQUFzRDtBQUNwREYsc0JBQUFBLFNBQVMsR0FBRywrQ0FDVnJDLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYXFCLElBREgsRUFFVkYsU0FGVSxDQUFaO0FBSUQ7O0FBRURULG9CQUFBQSxVQUFVLENBQUNZLElBQVgsQ0FBZ0JILFNBQWhCO0FBQ0Q7QUFiSCxtQkFlRSxnQ0FBQyxJQUFELEVBQVVELEtBQVYsQ0FmRixDQURlO0FBQUEsZUFBakI7QUFtQkQ7O0FBRUtLLFlBQUFBLHdCQS9HUSxHQStHbUIsU0FBM0JBLHdCQUEyQixDQUFBQyxJQUFJLEVBQUk7QUFDdkM7QUFDQSxrQkFBTUMsT0FBTyxHQUFHLDRCQUFlRCxJQUFmLENBQWhCOztBQUZ1QyxpQ0FHRCxvQ0FBWXRDLFdBQVosRUFBeUI7QUFDN0R3QixnQkFBQUEsVUFBVSxFQUFWQSxVQUQ2RDtBQUU3RGdCLGdCQUFBQSxVQUFVLEVBQUU1QyxNQUFNLENBQUNrQixLQUFQLENBQWFDO0FBRm9DLGVBQXpCLENBSEM7QUFBQSxrQkFHL0IwQixPQUgrQixnQkFHL0JBLE9BSCtCO0FBQUEsa0JBR3RCQyxXQUhzQixnQkFHdEJBLFdBSHNCO0FBQUEsa0JBR1RDLEdBSFMsZ0JBR1RBLEdBSFM7O0FBUXZDakIsY0FBQUEsYUFBYSxHQUFHZSxPQUFoQjtBQUNBZCxjQUFBQSxpQkFBaUIsR0FBR2UsV0FBcEI7QUFDQWQsY0FBQUEsU0FBUyxHQUFHZSxHQUFaLENBVnVDLENBV3ZDO0FBQ0E7O0FBQ0Esa0JBQU1DLE1BQU0sR0FBR0Msd0JBQU9DLFlBQVAsRUFBZjs7QUFDQXJCLGNBQUFBLElBQUksR0FBRztBQUNMc0IsZ0JBQUFBLFNBQVMsRUFBRUgsTUFBTSxDQUFDSSxjQUFQLENBQXNCQyxXQUF0QixFQUROO0FBRUxDLGdCQUFBQSxTQUFTLEVBQUVOLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkYsV0FBdEIsRUFGTjtBQUdMRyxnQkFBQUEsSUFBSSxFQUFFUixNQUFNLENBQUNRLElBQVAsQ0FBWUgsV0FBWixFQUhEO0FBSUxJLGdCQUFBQSxJQUFJLEVBQUVULE1BQU0sQ0FBQ1MsSUFBUCxDQUFZSixXQUFaLEVBSkQ7QUFLTDFCLGdCQUFBQSxJQUFJLEVBQUVxQixNQUFNLENBQUNyQixJQUFQLENBQVkwQixXQUFaLEVBTEQ7QUFNTEssZ0JBQUFBLFFBQVEsRUFBRVYsTUFBTSxDQUFDVSxRQUFQLENBQWdCTCxXQUFoQixFQU5MO0FBT0xNLGdCQUFBQSxNQUFNLEVBQUVYLE1BQU0sQ0FBQ1csTUFBUCxDQUFjTixXQUFkLEVBUEg7QUFRTE8sZ0JBQUFBLEtBQUssRUFBRVosTUFBTSxDQUFDWSxLQUFQLENBQWFQLFdBQWIsRUFSRjtBQVNMUSxnQkFBQUEsS0FBSyxFQUFFYixNQUFNLENBQUNhLEtBQVAsQ0FBYVIsV0FBYjtBQVRGLGVBQVA7QUFZQSxxQkFBT1YsT0FBUDtBQUNELGFBMUlhOztBQThJZDVDLFlBQUFBLEtBQUssc0NBQ0FBLEtBREE7QUFFSDRCLGNBQUFBLElBQUksRUFBSkE7QUFGRyxjQUFMO0FBOUljO0FBQUE7QUFBQSxtQkFvSk1tQyxvQkFBUUMscUJBQVIsQ0FBOEI1QixTQUE5QixFQUF5Q3BDLEtBQXpDLENBcEpOOztBQUFBO0FBb0pab0MsWUFBQUEsU0FwSlk7O0FBQUEsaUJBc0pSbkMsTUFBTSxDQUFDZ0UsZUF0SkM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBdUpKLElBQUlsRCxLQUFKLENBQ0osZ0lBREksQ0F2Skk7O0FBQUE7QUE2SlJtRCxZQUFBQSxZQTdKUSxHQTZKTyxnQ0FBQyxTQUFELE9BN0pQLEVBK0paO0FBQ0E7O0FBaEtZO0FBQUEsbUJBaUtTSCxvQkFBUUksa0JBQVIsQ0FBMkJELFlBQTNCLEVBQXlDbEUsS0FBekMsQ0FqS1Q7O0FBQUE7QUFpS1prRSxZQUFBQSxZQWpLWTs7QUFBQSxpQkFtS1JqRSxNQUFNLENBQUNtRSxZQW5LQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFvS0osSUFBSXJELEtBQUosQ0FDSiw0SEFESSxDQXBLSTs7QUFBQTtBQTBLWjZCLFlBQUFBLE9BQU8sR0FBR0Ysd0JBQXdCLENBQUN3QixZQUFELENBQWxDO0FBMUtZO0FBQUEsbUJBNEtJSCxvQkFBUU0sb0JBQVIsQ0FBNkJ6QixPQUE3QixFQUFzQzVDLEtBQXRDLENBNUtKOztBQUFBO0FBNEtaNEMsWUFBQUEsT0E1S1k7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUE4S1osZ0JBQUksWUFBTTBCLElBQVYsRUFBZ0I7QUFDZCwwQkFBTUMsT0FBTixHQUNFLHdFQUNBLHNEQUZGO0FBR0Q7O0FBQ0Qsd0JBQU1BLE9BQU4sMkNBQWlEcEUsS0FBSyxDQUFDVSxJQUF2RCxlQUNFVixLQUFLLENBQUNNLFFBRFIsZ0JBRU0sWUFBTThELE9BRlo7QUFuTFk7O0FBQUE7QUF5TGR2RSxZQUFBQSxLQUFLLHNDQUNBQSxLQURBO0FBRUg4QixjQUFBQSxJQUFJLEVBQUpBLElBRkc7QUFHSEMsY0FBQUEsYUFBYSxFQUFiQSxhQUhHO0FBSUhDLGNBQUFBLGlCQUFpQixFQUFqQkEsaUJBSkc7QUFLSEMsY0FBQUEsU0FBUyxFQUFUQTtBQUxHLGNBQUw7QUF6TGMsMEJBaU1PdUMsNEJBak1QO0FBQUE7QUFBQSwwQkFrTVgsZ0JBbE1XO0FBQUE7QUFBQSxtQkFtTUUsOEJBQWlCeEUsS0FBakIsQ0FuTUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBb01FLDhCQUFpQkEsS0FBakIsQ0FwTUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcU1FLDhCQUFpQkEsS0FBakIsQ0FyTUY7O0FBQUE7QUFBQTtBQUFBLDBCQXNNSEEsS0F0TUc7QUFBQTtBQW1NVixjQUFBLElBbk1VO0FBb01WLGNBQUEsSUFwTVU7QUFxTVYsY0FBQSxJQXJNVTtBQXNNVixjQUFBLEtBdE1VO0FBQUE7QUFBQSwwQkF3TVY7QUFBSyxjQUFBLEVBQUUsRUFBQyxNQUFSO0FBQWUsY0FBQSx1QkFBdUIsRUFBRTtBQUFFeUUsZ0JBQUFBLE1BQU0sRUFBRTdCO0FBQVY7QUFBeEMsY0F4TVU7QUFBQTtBQWlNUjhCLFlBQUFBLFlBak1RO0FBNE1kO0FBQ0lDLFlBQUFBLElBN01VLDRCQTZNZUQsWUE3TWY7QUFBQTtBQUFBLG1CQStNRFgsb0JBQVFhLG9CQUFSLENBQTZCRCxJQUE3QixFQUFtQzNFLEtBQW5DLENBL01DOztBQUFBO0FBK01kMkUsWUFBQUEsSUEvTWM7QUFpTmQ7QUFDQTtBQUNNRSxZQUFBQSxVQW5OUSxHQW1OSyw2QkFBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx3QkFBN0IsQ0FuTkw7O0FBb05kLGdCQUFJRixPQUFPLENBQUNDLEdBQVIsQ0FBWUUsb0NBQVosS0FBcUQsTUFBekQsRUFBaUU7QUFDL0ROLGNBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDTyxPQUFMLENBQWEzRCxXQUFiLGNBQStCc0QsVUFBL0IsUUFBUDtBQUNEOztBQUVERixZQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ08sT0FBTCxDQUFhekQsVUFBYixjQUE4Qm9ELFVBQTlCLFFBQVAsQ0F4TmMsQ0EwTmQ7QUFDQTs7QUFDTU0sWUFBQUEsWUE1TlEsR0E2TlpoRixLQUFLLENBQUNVLElBQU4sS0FBZSxLQUFmLEdBQ0lJLGlCQUFTQyxJQUFULENBQWNqQixNQUFNLENBQUNrQixLQUFQLENBQWFDLElBQTNCLEVBQWlDLFVBQWpDLENBREosR0FFSUgsaUJBQVNDLElBQVQsQ0FBY2pCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYUMsSUFBM0IsRUFBaUNqQixLQUFLLENBQUNVLElBQXZDLEVBQTZDLFlBQTdDLENBL05RLEVBaU9kOztBQUNNdUUsWUFBQUEsaUJBbE9RLEdBa09ZbkUsaUJBQVNDLElBQVQsQ0FDeEJqQixNQUFNLENBQUNrQixLQUFQLENBQWFDLElBRFcsRUFFeEJqQixLQUFLLENBQUNVLElBRmtCLEVBR3hCLGdCQUh3QixDQWxPWjtBQUFBO0FBQUEsbUJBd09Jd0UsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDNUJqRSxvQkFBR2tFLFVBQUgsQ0FBY0osWUFBZCxFQUE0QlIsSUFBNUIsQ0FENEIsRUFFNUIsQ0FBQ3hFLEtBQUssQ0FBQ2dDLFFBQVAsR0FDSWQsb0JBQUdtRSxVQUFILENBQWNKLGlCQUFkLEVBQWlDMUQsU0FBakMsQ0FESixHQUVJMkQsT0FBTyxDQUFDSSxPQUFSLEVBSndCLENBQVosQ0F4T0o7O0FBQUE7QUF3T1JDLFlBQUFBLEdBeE9RO0FBQUEsNkNBOE9QQSxHQTlPTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlQyxXOzs7O1NBQUFBLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZywgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBSZXBvcnRDaHVua3MgfSBmcm9tICdyZWFjdC11bml2ZXJzYWwtY29tcG9uZW50J1xuaW1wb3J0IGZsdXNoQ2h1bmtzIGZyb20gJ3dlYnBhY2stZmx1c2gtY2h1bmtzJ1xuaW1wb3J0IG5vZGVQYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5cbmltcG9ydCBSZWRpcmVjdCBmcm9tICcuL2NvbXBvbmVudHMvUmVkaXJlY3QnXG5pbXBvcnQgcGx1Z2lucyBmcm9tICcuL3BsdWdpbnMnXG5pbXBvcnQgeyBtYWtlUGF0aEFic29sdXRlIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBhYnNvbHV0ZVRvUmVsYXRpdmVDaHVua05hbWUgfSBmcm9tICcuLi91dGlscy9jaHVua0J1aWxkZXInXG5cbmltcG9ydCBtYWtlSHRtbFdpdGhNZXRhIGZyb20gJy4vY29tcG9uZW50cy9IdG1sV2l0aE1ldGEnXG5pbXBvcnQgbWFrZUhlYWRXaXRoTWV0YSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZFdpdGhNZXRhJ1xuaW1wb3J0IG1ha2VCb2R5V2l0aE1ldGEgZnJvbSAnLi9jb21wb25lbnRzL0JvZHlXaXRoTWV0YSdcblxuLy9cblxubGV0IGNhY2hlZEJhc2VQYXRoXG5sZXQgY2FjaGVkSHJlZlJlcGxhY2VcbmxldCBjYWNoZWRTcmNSZXBsYWNlXG5cbmV4cG9ydCBkZWZhdWx0IChhc3luYyBmdW5jdGlvbiBleHBvcnRSb3V0ZShzdGF0ZSkge1xuICBjb25zdCB7XG4gICAgY29uZmlnLFxuICAgIERvY3VtZW50VGVtcGxhdGUsXG4gICAgcm91dGUsXG4gICAgc2l0ZURhdGEsXG4gICAgY2xpZW50U3RhdHMsXG4gICAgaW5jcmVtZW50YWwsXG4gIH0gPSBzdGF0ZVxuXG4gIGxldCB7IENvbXAgfSA9IHN0YXRlXG5cbiAgY29uc3Qge1xuICAgIHNoYXJlZEhhc2hlc0J5UHJvcCxcbiAgICB0ZW1wbGF0ZSxcbiAgICBkYXRhLFxuICAgIHNoYXJlZERhdGEsXG4gICAgcGF0aDogcm91dGVQYXRoLFxuICAgIHJlbW92ZSxcbiAgfSA9IHJvdXRlXG5cbiAgaWYgKGluY3JlbWVudGFsICYmIHJlbW92ZSkge1xuICAgIGlmIChyb3V0ZS5wYXRoID09PSAnNDA0JyB8fCByb3V0ZS5wYXRoID09PSAnLycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFlvdSBhcmUgYXR0ZW1wdGluZyB0byBpbmNyZW1lbnRhbGx5IHJlbW92ZSB0aGUgJHtcbiAgICAgICAgICByb3V0ZS5wYXRoID09PSAnNDA0JyA/ICc0MDQnIDogJ2luZGV4J1xuICAgICAgICB9IHJvdXRlIGZyb20geW91ciBleHBvcnQuIFRoaXMgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgKG9yIHJlY29tbWVuZGVkKSBieSBSZWFjdCBTdGF0aWMuYFxuICAgICAgKVxuICAgIH1cbiAgICBjb25zdCByZW1vdmVMb2NhdGlvbiA9IG5vZGVQYXRoLmpvaW4oY29uZmlnLnBhdGhzLkRJU1QsIHJvdXRlLnBhdGgpXG4gICAgcmV0dXJuIGZzLnJlbW92ZShyZW1vdmVMb2NhdGlvbilcbiAgfVxuXG4gIGNvbnN0IGJhc2VQYXRoID0gY2FjaGVkQmFzZVBhdGggfHwgKGNhY2hlZEJhc2VQYXRoID0gY29uZmlnLmJhc2VQYXRoKVxuXG4gIGNvbnN0IGhyZWZSZXBsYWNlID1cbiAgICBjYWNoZWRIcmVmUmVwbGFjZSB8fFxuICAgIChjYWNoZWRIcmVmUmVwbGFjZSA9IG5ldyBSZWdFeHAoXG4gICAgICBgKGhyZWY9W1wiJ10pXFxcXC8oJHtiYXNlUGF0aCA/IGAke2Jhc2VQYXRofVxcXFwvYCA6ICcnfSk/KFteXFxcXC9dKWAsXG4gICAgICAnZ20nXG4gICAgKSlcblxuICBjb25zdCBzcmNSZXBsYWNlID1cbiAgICBjYWNoZWRTcmNSZXBsYWNlIHx8XG4gICAgKGNhY2hlZFNyY1JlcGxhY2UgPSBuZXcgUmVnRXhwKFxuICAgICAgYChzcmM9W1wiJ10pXFxcXC8oJHtiYXNlUGF0aCA/IGAke2Jhc2VQYXRofVxcXFwvYCA6ICcnfSk/KFteXFxcXC9dKWAsXG4gICAgICAnZ20nXG4gICAgKSlcblxuICAvLyBUaGlzIHJvdXRlSW5mbyB3aWxsIGJlIHNhdmVkIHRvIGRpc2suIEl0IHNob3VsZCBvbmx5IGluY2x1ZGUgdGhlXG4gIC8vIGRhdGEgYW5kIGhhc2hlcyB0byBjb25zdHJ1Y3QgYWxsIG9mIHRoZSBwcm9wcyBsYXRlci5cbiAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgIHRlbXBsYXRlLFxuICAgIHNoYXJlZEhhc2hlc0J5UHJvcCxcbiAgICBkYXRhLFxuICAgIHBhdGg6IHJvdXRlUGF0aCxcbiAgfVxuXG4gIC8vIFRoaXMgZW1iZWRkZWRSb3V0ZUluZm8gd2lsbCBiZSBpbmxpbmVkIGludG8gdGhlIEhUTUwgZm9yIHRoaXMgcm91dGUuXG4gIC8vIEl0IHNob3VsZCBpbmNsdWRlIGFsbCBvZiB0aGUgZGF0YSwgaW5jbHVkaW5nIHNoYXJlZCBkYXRhXG4gIGNvbnN0IGVtYmVkZGVkUm91dGVJbmZvID0ge1xuICAgIC4uLnJvdXRlSW5mbyxcbiAgICBzaGFyZWREYXRhLFxuICAgIHNpdGVEYXRhLFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgcm91dGVJbmZvLFxuICAgIGVtYmVkZGVkUm91dGVJbmZvLFxuICB9XG5cbiAgLy8gTWFrZSBhIHBsYWNlIHRvIGNvbGxlY3QgY2h1bmtzLCBtZXRhIGluZm8gYW5kIGhlYWQgdGFnc1xuICBjb25zdCBtZXRhID0ge31cbiAgY29uc3QgY2h1bmtOYW1lcyA9IFtdXG4gIGxldCBoZWFkID0ge31cbiAgbGV0IGNsaWVudFNjcmlwdHMgPSBbXVxuICBsZXQgY2xpZW50U3R5bGVTaGVldHMgPSBbXVxuICBsZXQgY2xpZW50Q3NzID0ge31cblxuICBsZXQgRmluYWxDb21wXG5cbiAgLy8gR2V0IHRoZSByZWFjdCBjb21wb25lbnQgZnJvbSB0aGUgQ29tcCBhbmQgcGFzcyBpdCB0aGUgZXhwb3J0IGNvbnRleHQuIFRoaXNcbiAgLy8gdXNlcyByZWFjdENvbnRleHQgdW5kZXIgdGhlIGhvb2QgdG8gcGFzcyBkb3duIHRoZSBleHBvcnRDb250ZXh0LCBzaW5jZVxuICAvLyByZWFjdCdzIG5ldyBjb250ZXh0IGFwaSBkb2Vzbid0IHN1cnZpdmUgYWNyb3NzIGJ1bmRsaW5nLlxuICBDb21wID0gY29uZmlnLmRpc2FibGVSdW50aW1lID8gQ29tcCA6IENvbXAoZW1iZWRkZWRSb3V0ZUluZm8pXG5cbiAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XG4gICAgRmluYWxDb21wID0gKCkgPT4gPFJlZGlyZWN0IGZyb21QYXRoPXtyb3V0ZS5wYXRofSB0bz17cm91dGUucmVkaXJlY3R9IC8+XG4gIH0gZWxzZSB7XG4gICAgRmluYWxDb21wID0gcHJvcHMgPT4gKFxuICAgICAgPFJlcG9ydENodW5rc1xuICAgICAgICByZXBvcnQ9e2NodW5rTmFtZSA9PiB7XG4gICAgICAgICAgLy8gaWYgd2UgYXJlIGJ1aWxkaW5nIHRvIGEgYWJzb2x1dGUgcGF0aCB3ZSBtdXN0IG1ha2UgdGhlIGRldGVjdGVkXG4gICAgICAgICAgLy8gY2h1bmtOYW1lIHJlbGF0aXZlIGFuZCBtYXRjaGluZyB0byB0aGUgb25lIHdlIHNldCBpblxuICAgICAgICAgIC8vIGdlbmVyYXRlVGVtcGxhdGVzXG4gICAgICAgICAgaWYgKCFjb25maWcucGF0aHMuRElTVC5zdGFydHNXaXRoKGNvbmZpZy5wYXRocy5ST09UKSkge1xuICAgICAgICAgICAgY2h1bmtOYW1lID0gYWJzb2x1dGVUb1JlbGF0aXZlQ2h1bmtOYW1lKFxuICAgICAgICAgICAgICBjb25maWcucGF0aHMuUk9PVCxcbiAgICAgICAgICAgICAgY2h1bmtOYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2h1bmtOYW1lcy5wdXNoKGNodW5rTmFtZSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbXAgey4uLnByb3BzfSAvPlxuICAgICAgPC9SZXBvcnRDaHVua3M+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyVG9TdHJpbmdBbmRFeHRyYWN0ID0gY29tcCA9PiB7XG4gICAgLy8gUmVuZCB0aGUgYXBwIHRvIHN0cmluZyFcbiAgICBjb25zdCBhcHBIdG1sID0gcmVuZGVyVG9TdHJpbmcoY29tcClcbiAgICBjb25zdCB7IHNjcmlwdHMsIHN0eWxlc2hlZXRzLCBjc3MgfSA9IGZsdXNoQ2h1bmtzKGNsaWVudFN0YXRzLCB7XG4gICAgICBjaHVua05hbWVzLFxuICAgICAgb3V0cHV0UGF0aDogY29uZmlnLnBhdGhzLkRJU1QsXG4gICAgfSlcblxuICAgIGNsaWVudFNjcmlwdHMgPSBzY3JpcHRzXG4gICAgY2xpZW50U3R5bGVTaGVldHMgPSBzdHlsZXNoZWV0c1xuICAgIGNsaWVudENzcyA9IGNzc1xuICAgIC8vIEV4dHJhY3QgaGVhZCBjYWxscyB1c2luZyBIZWxtZXQgc3luY2hyb25vdXNseSByaWdodCBhZnRlciByZW5kZXJUb1N0cmluZ1xuICAgIC8vIHRvIG5vdCBpbnRyb2R1Y2UgYW55IHJhY2UgY29uZGl0aW9ucyBpbiB0aGUgbWV0YSBkYXRhIHJlbmRlcmluZ1xuICAgIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKVxuICAgIGhlYWQgPSB7XG4gICAgICBodG1sUHJvcHM6IGhlbG1ldC5odG1sQXR0cmlidXRlcy50b0NvbXBvbmVudCgpLFxuICAgICAgYm9keVByb3BzOiBoZWxtZXQuYm9keUF0dHJpYnV0ZXMudG9Db21wb25lbnQoKSxcbiAgICAgIGJhc2U6IGhlbG1ldC5iYXNlLnRvQ29tcG9uZW50KCksXG4gICAgICBsaW5rOiBoZWxtZXQubGluay50b0NvbXBvbmVudCgpLFxuICAgICAgbWV0YTogaGVsbWV0Lm1ldGEudG9Db21wb25lbnQoKSxcbiAgICAgIG5vc2NyaXB0OiBoZWxtZXQubm9zY3JpcHQudG9Db21wb25lbnQoKSxcbiAgICAgIHNjcmlwdDogaGVsbWV0LnNjcmlwdC50b0NvbXBvbmVudCgpLFxuICAgICAgc3R5bGU6IGhlbG1ldC5zdHlsZS50b0NvbXBvbmVudCgpLFxuICAgICAgdGl0bGU6IGhlbG1ldC50aXRsZS50b0NvbXBvbmVudCgpLFxuICAgIH1cblxuICAgIHJldHVybiBhcHBIdG1sXG4gIH1cblxuICBsZXQgYXBwSHRtbFxuXG4gIHN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIG1ldGEsXG4gIH1cblxuICB0cnkge1xuICAgIEZpbmFsQ29tcCA9IGF3YWl0IHBsdWdpbnMuYmVmb3JlUmVuZGVyVG9FbGVtZW50KEZpbmFsQ29tcCwgc3RhdGUpXG5cbiAgICBpZiAoY29uZmlnLnJlbmRlclRvRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgY29uZmlnLnJlbmRlclRvRWxlbWVudCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHRoZSBgICtcbiAgICAgICAgICBgJ2JlZm9yZVJlbmRlclRvRWxlbWVudCcgb3IgJ2JlZm9yZVJlbmRlclRvSHRtbCcgaG9va3MgaW5zdGVhZC5gXG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IFJlbmRlcmVkQ29tcCA9IDxGaW5hbENvbXAgLz5cblxuICAgIC8vIFJ1biB0aGUgYmVmb3JlUmVuZGVyVG9IdG1sIGhvb2tcbiAgICAvLyBSdW0gdGhlIEh0bWwgaG9va1xuICAgIFJlbmRlcmVkQ29tcCA9IGF3YWl0IHBsdWdpbnMuYmVmb3JlUmVuZGVyVG9IdG1sKFJlbmRlcmVkQ29tcCwgc3RhdGUpXG5cbiAgICBpZiAoY29uZmlnLnJlbmRlclRvSHRtbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgY29uZmlnLnJlbmRlclRvSHRtbCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHRoZSBgICtcbiAgICAgICAgICBgJ2JlZm9yZVJlbmRlclRvSHRtbCcgb3IgJ2JlZm9yZUh0bWxUb0RvY3VtZW50JyBob29rcyBpbnN0ZWFkLmBcbiAgICAgIClcbiAgICB9XG5cbiAgICBhcHBIdG1sID0gcmVuZGVyVG9TdHJpbmdBbmRFeHRyYWN0KFJlbmRlcmVkQ29tcClcblxuICAgIGFwcEh0bWwgPSBhd2FpdCBwbHVnaW5zLmJlZm9yZUh0bWxUb0RvY3VtZW50KGFwcEh0bWwsIHN0YXRlKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci50aGVuKSB7XG4gICAgICBlcnJvci5tZXNzYWdlID1cbiAgICAgICAgJ0NvbXBvbmVudHMgYXJlIG5vdCBhbGxvd2VkIHRvIHN1c3BlbmQgZHVyaW5nIHN0YXRpYyBleHBvcnQuIFBsZWFzZSAnICtcbiAgICAgICAgJ21ha2UgaXRzIGRhdGEgYXZhaWxhYmxlIHN5bmNocm9ub3VzbHkgYW5kIHRyeSBhZ2FpbiEnXG4gICAgfVxuICAgIGVycm9yLm1lc3NhZ2UgPSBgRmFpbGVkIGV4cG9ydGluZyBIVE1MIGZvciBVUkwgJHtyb3V0ZS5wYXRofSAoJHtcbiAgICAgIHJvdXRlLnRlbXBsYXRlXG4gICAgfSk6ICR7ZXJyb3IubWVzc2FnZX1gXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGhlYWQsXG4gICAgY2xpZW50U2NyaXB0cyxcbiAgICBjbGllbnRTdHlsZVNoZWV0cyxcbiAgICBjbGllbnRDc3MsXG4gIH1cblxuICBjb25zdCBEb2N1bWVudEh0bWwgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICA8RG9jdW1lbnRUZW1wbGF0ZVxuICAgICAgSHRtbD17YXdhaXQgbWFrZUh0bWxXaXRoTWV0YShzdGF0ZSl9XG4gICAgICBIZWFkPXthd2FpdCBtYWtlSGVhZFdpdGhNZXRhKHN0YXRlKX1cbiAgICAgIEJvZHk9e2F3YWl0IG1ha2VCb2R5V2l0aE1ldGEoc3RhdGUpfVxuICAgICAgc3RhdGU9e3N0YXRlfVxuICAgID5cbiAgICAgIDxkaXYgaWQ9XCJyb290XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhcHBIdG1sIH19IC8+XG4gICAgPC9Eb2N1bWVudFRlbXBsYXRlPlxuICApXG5cbiAgLy8gUmVuZGVyIHRoZSBodG1sIGZvciB0aGUgcGFnZSBpbnNpZGUgb2YgdGhlIGJhc2UgZG9jdW1lbnQuXG4gIGxldCBodG1sID0gYDwhRE9DVFlQRSBodG1sPiR7RG9jdW1lbnRIdG1sfWBcblxuICBodG1sID0gYXdhaXQgcGx1Z2lucy5iZWZvcmVEb2N1bWVudFRvRmlsZShodG1sLCBzdGF0ZSlcblxuICAvLyBJZiB0aGUgc2l0ZVJvb3QgaXMgc2V0IGFuZCB3ZSdyZSBub3QgaW4gc3RhZ2luZywgcHJlZml4IGFsbCBhYnNvbHV0ZSBVUkxzXG4gIC8vIHdpdGggdGhlIHNpdGVSb290XG4gIGNvbnN0IHB1YmxpY1BhdGggPSBtYWtlUGF0aEFic29sdXRlKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19QVUJMSUNfUEFUSClcbiAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19ESVNBQkxFX1JPVVRFX1BSRUZJWElORyAhPT0gJ3RydWUnKSB7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZShocmVmUmVwbGFjZSwgYCQxJHtwdWJsaWNQYXRofSQzYClcbiAgfVxuXG4gIGh0bWwgPSBodG1sLnJlcGxhY2Uoc3JjUmVwbGFjZSwgYCQxJHtwdWJsaWNQYXRofSQzYClcblxuICAvLyBJZiB0aGUgcm91dGUgaXMgYSA0MDQgcGFnZSwgd3JpdGUgaXQgZGlyZWN0bHkgdG8gNDA0Lmh0bWwsIGluc3RlYWQgb2ZcbiAgLy8gaW5zaWRlIGEgZGlyZWN0b3J5LlxuICBjb25zdCBodG1sRmlsZW5hbWUgPVxuICAgIHJvdXRlLnBhdGggPT09ICc0MDQnXG4gICAgICA/IG5vZGVQYXRoLmpvaW4oY29uZmlnLnBhdGhzLkRJU1QsICc0MDQuaHRtbCcpXG4gICAgICA6IG5vZGVQYXRoLmpvaW4oY29uZmlnLnBhdGhzLkRJU1QsIHJvdXRlLnBhdGgsICdpbmRleC5odG1sJylcblxuICAvLyBNYWtlIHRoZSByb3V0ZUluZm8gc2l0IHJpZ2h0IG5leHQgdG8gaXRzIGNvbXBhbmlvbiBodG1sIGZpbGVcbiAgY29uc3Qgcm91dGVJbmZvRmlsZW5hbWUgPSBub2RlUGF0aC5qb2luKFxuICAgIGNvbmZpZy5wYXRocy5ESVNULFxuICAgIHJvdXRlLnBhdGgsXG4gICAgJ3JvdXRlSW5mby5qc29uJ1xuICApXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZzLm91dHB1dEZpbGUoaHRtbEZpbGVuYW1lLCBodG1sKSxcbiAgICAhcm91dGUucmVkaXJlY3RcbiAgICAgID8gZnMub3V0cHV0SnNvbihyb3V0ZUluZm9GaWxlbmFtZSwgcm91dGVJbmZvKVxuICAgICAgOiBQcm9taXNlLnJlc29sdmUoKSxcbiAgXSlcbiAgcmV0dXJuIHJlc1xufSlcbiJdfQ==