"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _2 = require("..");

var _useStaticInfo = require("../hooks/useStaticInfo");

var _useRoutePath = require("../hooks/useRoutePath");

//
var RoutesInner = function RoutesInner(_ref) {
  var routePath = _ref.routePath;
  // Let the user specify a manual routePath.
  // This is useful for animations where multiple routes
  // might be rendered simultaneously
  var staticInfo = (0, _useStaticInfo.useStaticInfo)(); // eslint-disable-next-line

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      _ = _useState2[0],
      setCount = _useState2[1]; // If in production, make sure the staticInfo is ingested into the
  // cache


  (0, _react.useState)(function () {
    // useState's initializer will only fire once per component instance,
    // and it will fire during the first render (unlike an effect, which
    // only fires after the first render). Think of it like a constructor call.
    if (process.env.REACT_STATIC_ENV === 'production' && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _2.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _2.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _2.registerTemplateForPath)(path, template);
    }
  });
  (0, _react.useEffect)(function () {
    return (0, _2.onReloadTemplates)(function () {
      setCount(function (old) {
        return old + 1;
      });
    });
  }); // If SSR, force the routePath to be the statically exported one

  if (typeof document === 'undefined') {
    routePath = staticInfo.path;
  } else if (!routePath) {
    // If a routePath is still not defined in the browser,
    // use the window location as the defualt
    routePath = decodeURIComponent(window.location.href);
  }

  routePath = (0, _useRoutePath.useRoutePath)(routePath); // Try and get the template

  var Comp = _2.templatesByPath[routePath]; // Detect a 404

  var is404 = routePath === '404'; // Detect a failed template

  if (_2.templateErrorByPath[routePath]) {
    is404 = true;
    Comp = _2.templatesByPath['404'];
  }

  if (!Comp) {
    if (is404) {
      throw new Error('Neither the page template or 404 template could be found. This means something is terribly wrong. Please, file an issue!');
    } // Suspend while we fetch the resource


    throw Promise.all([new Promise(function (resolve) {
      return setTimeout(resolve, 500);
    }), (0, _2.prefetch)(routePath, {
      priority: true
    })]);
  }

  return _react["default"].createElement(_useRoutePath.routePathContext.Provider, {
    value: routePath
  }, _react["default"].createElement(Comp, {
    is404: is404
  }));
};

var Routes = function Routes(_ref2) {
  var routePath = _ref2.routePath;
  // Once a routePath goes into the Routes component,
  // useRoutePath must ALWAYS return the routePath used
  // in its parent, so we pass it down as context
  // Get the Routes hook
  var CompWrapper = (0, _react.useMemo)(function () {
    return _2.plugins.Routes(function (props) {
      return _react["default"].createElement(RoutesInner, props);
    });
  }, [_2.plugins]);
  return _react["default"].createElement(CompWrapper, {
    routePath: routePath
  });
};

var _default = Routes;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2NvbXBvbmVudHMvUm91dGVzLmpzIl0sIm5hbWVzIjpbIlJvdXRlc0lubmVyIiwicm91dGVQYXRoIiwic3RhdGljSW5mbyIsIl8iLCJzZXRDb3VudCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9TVEFUSUNfRU5WIiwicGF0aCIsInNoYXJlZERhdGEiLCJzaGFyZWRIYXNoZXNCeVByb3AiLCJ0ZW1wbGF0ZSIsInJvdXRlSW5mb0J5UGF0aCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcEtleSIsInNoYXJlZERhdGFCeUhhc2giLCJvbGQiLCJkb2N1bWVudCIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkNvbXAiLCJ0ZW1wbGF0ZXNCeVBhdGgiLCJpczQwNCIsInRlbXBsYXRlRXJyb3JCeVBhdGgiLCJFcnJvciIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInByaW9yaXR5IiwiUm91dGVzIiwiQ29tcFdyYXBwZXIiLCJwbHVnaW5zIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFVQTs7QUFDQTs7QUFaQTtBQWNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFFQSxNQUFNQyxVQUFVLEdBQUcsbUNBQW5CLENBTHFDLENBTXJDOztBQU5xQyxrQkFPZixxQkFBUyxDQUFULENBUGU7QUFBQTtBQUFBLE1BTzlCQyxDQVA4QjtBQUFBLE1BTzNCQyxRQVAyQixrQkFTckM7QUFDQTs7O0FBQ0EsdUJBQVMsWUFBTTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBWixLQUFpQyxZQUFqQyxJQUFpREwsVUFBckQsRUFBaUU7QUFBQSxVQUN2RE0sSUFEdUQsR0FDSk4s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Q0QsQ0FaRDs7ZUFjZWlDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuLy9cbmltcG9ydCB7XG4gIHRlbXBsYXRlc0J5UGF0aCxcbiAgdGVtcGxhdGVFcnJvckJ5UGF0aCxcbiAgcm91dGVJbmZvQnlQYXRoLFxuICBzaGFyZWREYXRhQnlIYXNoLFxuICByZWdpc3RlclRlbXBsYXRlRm9yUGF0aCxcbiAgcHJlZmV0Y2gsXG4gIHBsdWdpbnMsXG4gIG9uUmVsb2FkVGVtcGxhdGVzLFxufSBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgdXNlU3RhdGljSW5mbyB9IGZyb20gJy4uL2hvb2tzL3VzZVN0YXRpY0luZm8nXG5pbXBvcnQgeyByb3V0ZVBhdGhDb250ZXh0LCB1c2VSb3V0ZVBhdGggfSBmcm9tICcuLi9ob29rcy91c2VSb3V0ZVBhdGgnXG5cbmNvbnN0IFJvdXRlc0lubmVyID0gKHsgcm91dGVQYXRoIH0pID0+IHtcbiAgLy8gTGV0IHRoZSB1c2VyIHNwZWNpZnkgYSBtYW51YWwgcm91dGVQYXRoLlxuICAvLyBUaGlzIGlzIHVzZWZ1bCBmb3IgYW5pbWF0aW9ucyB3aGVyZSBtdWx0aXBsZSByb3V0ZXNcbiAgLy8gbWlnaHQgYmUgcmVuZGVyZWQgc2ltdWx0YW5lb3VzbHlcblxuICBjb25zdCBzdGF0aWNJbmZvID0gdXNlU3RhdGljSW5mbygpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBbXywgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcblxuICAvLyBJZiBpbiBwcm9kdWN0aW9uLCBtYWtlIHN1cmUgdGhlIHN0YXRpY0luZm8gaXMgaW5nZXN0ZWQgaW50byB0aGVcbiAgLy8gY2FjaGVcbiAgdXNlU3RhdGUoKCkgPT4ge1xuICAgIC8vIHVzZVN0YXRlJ3MgaW5pdGlhbGl6ZXIgd2lsbCBvbmx5IGZpcmUgb25jZSBwZXIgY29tcG9uZW50IGluc3RhbmNlLFxuICAgIC8vIGFuZCBpdCB3aWxsIGZpcmUgZHVyaW5nIHRoZSBmaXJzdCByZW5kZXIgKHVubGlrZSBhbiBlZmZlY3QsIHdoaWNoXG4gICAgLy8gb25seSBmaXJlcyBhZnRlciB0aGUgZmlyc3QgcmVuZGVyKS4gVGhpbmsgb2YgaXQgbGlrZSBhIGNvbnN0cnVjdG9yIGNhbGwuXG4gICAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX1NUQVRJQ19FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiBzdGF0aWNJbmZvKSB7XG4gICAgICBjb25zdCB7IHBhdGgsIHNoYXJlZERhdGEsIHNoYXJlZEhhc2hlc0J5UHJvcCwgdGVtcGxhdGUgfSA9IHN0YXRpY0luZm9cblxuICAgICAgLy8gSHlkcmF0ZSByb3V0ZUluZm9CeVBhdGggd2l0aCB0aGUgZW1iZWRkZWQgcm91dGVJbmZvXG4gICAgICByb3V0ZUluZm9CeVBhdGhbcGF0aF0gPSBzdGF0aWNJbmZvXG5cbiAgICAgIC8vIEh5ZHJhdGUgc2hhcmVkRGF0YUJ5SGFzaCB3aXRoIHRoZSBlbWJlZGRlZCByb3V0ZUluZm9cbiAgICAgIE9iamVjdC5rZXlzKHNoYXJlZEhhc2hlc0J5UHJvcCkuZm9yRWFjaChwcm9wS2V5ID0+IHtcbiAgICAgICAgc2hhcmVkRGF0YUJ5SGFzaFtzaGFyZWRIYXNoZXNCeVByb3BbcHJvcEtleV1dID0gc2hhcmVkRGF0YVtwcm9wS2V5XVxuICAgICAgfSlcblxuICAgICAgLy8gSW4gU1JSIGFuZCBwcm9kdWN0aW9uLCBzeW5jaHJvbm91c2x5IHJlZ2lzdGVyIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlXG4gICAgICAvLyBpbml0aWFsIHBhdGhcbiAgICAgIHJlZ2lzdGVyVGVtcGxhdGVGb3JQYXRoKHBhdGgsIHRlbXBsYXRlKVxuICAgIH1cbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT5cbiAgICBvblJlbG9hZFRlbXBsYXRlcygoKSA9PiB7XG4gICAgICBzZXRDb3VudChvbGQgPT4gb2xkICsgMSlcbiAgICB9KVxuICApXG5cbiAgLy8gSWYgU1NSLCBmb3JjZSB0aGUgcm91dGVQYXRoIHRvIGJlIHRoZSBzdGF0aWNhbGx5IGV4cG9ydGVkIG9uZVxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJvdXRlUGF0aCA9IHN0YXRpY0luZm8ucGF0aFxuICB9IGVsc2UgaWYgKCFyb3V0ZVBhdGgpIHtcbiAgICAvLyBJZiBhIHJvdXRlUGF0aCBpcyBzdGlsbCBub3QgZGVmaW5lZCBpbiB0aGUgYnJvd3NlcixcbiAgICAvLyB1c2UgdGhlIHdpbmRvdyBsb2NhdGlvbiBhcyB0aGUgZGVmdWFsdFxuICAgIHJvdXRlUGF0aCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgfVxuXG4gIHJvdXRlUGF0aCA9IHVzZVJvdXRlUGF0aChyb3V0ZVBhdGgpXG5cbiAgLy8gVHJ5IGFuZCBnZXQgdGhlIHRlbXBsYXRlXG4gIGxldCBDb21wID0gdGVtcGxhdGVzQnlQYXRoW3JvdXRlUGF0aF1cblxuICAvLyBEZXRlY3QgYSA0MDRcbiAgbGV0IGlzNDA0ID0gcm91dGVQYXRoID09PSAnNDA0J1xuXG4gIC8vIERldGVjdCBhIGZhaWxlZCB0ZW1wbGF0ZVxuICBpZiAodGVtcGxhdGVFcnJvckJ5UGF0aFtyb3V0ZVBhdGhdKSB7XG4gICAgaXM0MDQgPSB0cnVlXG4gICAgQ29tcCA9IHRlbXBsYXRlc0J5UGF0aFsnNDA0J11cbiAgfVxuXG4gIGlmICghQ29tcCkge1xuICAgIGlmIChpczQwNCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTmVpdGhlciB0aGUgcGFnZSB0ZW1wbGF0ZSBvciA0MDQgdGVtcGxhdGUgY291bGQgYmUgZm91bmQuIFRoaXMgbWVhbnMgc29tZXRoaW5nIGlzIHRlcnJpYmx5IHdyb25nLiBQbGVhc2UsIGZpbGUgYW4gaXNzdWUhJ1xuICAgICAgKVxuICAgIH1cbiAgICAvLyBTdXNwZW5kIHdoaWxlIHdlIGZldGNoIHRoZSByZXNvdXJjZVxuICAgIHRocm93IFByb21pc2UuYWxsKFtcbiAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDApKSxcbiAgICAgIHByZWZldGNoKHJvdXRlUGF0aCwgeyBwcmlvcml0eTogdHJ1ZSB9KSxcbiAgICBdKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8cm91dGVQYXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cm91dGVQYXRofT5cbiAgICAgIDxDb21wIGlzNDA0PXtpczQwNH0gLz5cbiAgICA8L3JvdXRlUGF0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgUm91dGVzID0gKHsgcm91dGVQYXRoIH0pID0+IHtcbiAgLy8gT25jZSBhIHJvdXRlUGF0aCBnb2VzIGludG8gdGhlIFJvdXRlcyBjb21wb25lbnQsXG4gIC8vIHVzZVJvdXRlUGF0aCBtdXN0IEFMV0FZUyByZXR1cm4gdGhlIHJvdXRlUGF0aCB1c2VkXG4gIC8vIGluIGl0cyBwYXJlbnQsIHNvIHdlIHBhc3MgaXQgZG93biBhcyBjb250ZXh0XG5cbiAgLy8gR2V0IHRoZSBSb3V0ZXMgaG9va1xuICBjb25zdCBDb21wV3JhcHBlciA9IHVzZU1lbW8oXG4gICAgKCkgPT4gcGx1Z2lucy5Sb3V0ZXMocHJvcHMgPT4gPFJvdXRlc0lubmVyIHsuLi5wcm9wc30gLz4pLFxuICAgIFtwbHVnaW5zXVxuICApXG5cbiAgcmV0dXJuIDxDb21wV3JhcHBlciByb3V0ZVBhdGg9e3JvdXRlUGF0aH0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzXG4iXX0=