/*! For license information please see site-bundle.js.LICENSE.txt */
!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 18))
    );
  })([
    function (e, t) {
      e.exports = void 0;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = [],
        o = 0,
        i = !1,
        a = !1,
        s = !1,
        u = (function () {
          var e = !1;
          try {
            window.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  e = { passive: !0 };
                },
              })
            );
          } catch (e) {}
          return e;
        })(),
        c = {
          scroll: function (e) {
            a || ((a = !0), requestAnimationFrame(this.executeCallbacks));
          },
          executeCallbacks: function () {
            for (var e = 0; e < o; e += 1) r[e]();
            a = !1;
          },
          registerCallback: function (e) {
            var t = r.indexOf(e);
            !e || t > -1 || (r.push(e), (o += 1));
          },
          removeCallback: function (e) {
            if (e) {
              var t = r.indexOf(e);
              -1 !== t && (r.splice(t, 1), (o -= 1));
            }
          },
          bindMethods: function () {
            i || ((this.scroll = this.scroll.bind(this)), (i = !0));
          },
          trigger: function () {
            this.scroll();
          },
          on: function (e) {
            s ||
              ((s = !0),
              this.bindMethods(),
              window.addEventListener("scroll", this.scroll, u)),
              this.registerCallback(e);
          },
          off: function (e) {
            this.removeCallback(e),
              o ||
                (this.bindMethods(),
                (s = !1),
                window.removeEventListener("scroll", this.scroll));
          },
        };
      t.default = c;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CROP_ARGUMENT_TO_CROP_MODE =
          t.FIT_ALIGNMENT_TO_OBJECT_POSITION =
          t.LEGACY_IMAGE_LOADING_CLASS =
          t.IMAGE_LOADING_CLASS =
          t.SQUARESPACE_SIZES =
            void 0);
      t.SQUARESPACE_SIZES = [2500, 1500, 1e3, 750, 500, 300, 100];
      t.IMAGE_LOADING_CLASS = "sqs-image-loading";
      t.LEGACY_IMAGE_LOADING_CLASS = "loading";
      t.FIT_ALIGNMENT_TO_OBJECT_POSITION = {
        horizontal: { center: "50%", left: "0%", right: "100%" },
        vertical: { bottom: "100%", center: "50%", top: "0%" },
      };
      t.CROP_ARGUMENT_TO_CROP_MODE = {
        "content-fill": "cover",
        fill: "cover",
        cover: "cover",
        "content-fit": "contain",
        fit: "contain",
        contain: "contain",
      };
    },
    function (e, t, n) {
      "use strict";
      n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validatedImage =
          t.shouldUpdateResolution =
          t.removeClass =
          t.positionImage =
          t.positionCroppedImage =
          t.isSquarespaceUrl =
          t.hasClass =
          t.getUrl =
          t.getTargetDimensions =
          t.getSizeFromUrl =
          t.getOffsetForAlignment =
          t.getObjectPositionForAlignment =
          t.getIntendedImageSize =
          t.getImageScale =
          t.preloadImage =
          t.getDimensionForValue =
          t.getComputedStyle =
          t.getAssetUrl =
          t.checkFeatureSupport =
          t.calculateParentDimensions =
          t.addClass =
            void 0);
      var r = n(2),
        o = n(10);
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var a = function (e, t) {
        return -1 !== e.className.indexOf(t);
      };
      t.hasClass = a;
      t.addClass = function (e, t) {
        return !a(e, t) && ((e.className += (e.className ? " " : "") + t), !0);
      };
      t.removeClass = function (e, t) {
        return (
          !!a(e, t) && ((e.className = e.className.replace(t, " ").trim()), !0)
        );
      };
      var s = function (e) {
        return (
          ["?", "#"].forEach(function (t) {
            var n = e.indexOf(t);
            0 < n && (e = e.substring(0, n));
          }),
          -1 < e.indexOf("squarespace-cdn.com") ||
            -1 < e.indexOf("squarespace.com") ||
            -1 < e.indexOf("squarespace.net") ||
            -1 < e.indexOf("sqsp.net") ||
            -1 < e.indexOf("sqspcdn.com")
        );
      };
      t.isSquarespaceUrl = s;
      var u = function (e, t, n) {
        var r = e.ownerDocument.defaultView;
        return e.currentStyle
          ? e.currentStyle[n || t]
          : r.getComputedStyle
          ? r.getComputedStyle(e, null).getPropertyValue(t)
          : "";
      };
      t.getComputedStyle = u;
      t.preloadImage = function (e, t, n) {
        var r = new Image();
        r.addEventListener("load", function (e) {
          var n = e.currentTarget;
          t(n);
        }),
          r.addEventListener("error", function (t) {
            n(t, e);
          }),
          (r.src = e);
      };
      t.checkFeatureSupport = function () {
        var e = (function () {
            var e = document.createElement("img"),
              t = "srcset" in e;
            return (e = null), t;
          })(),
          t = (function () {
            var e = document.createElement("div"),
              t = "objectFit" in e.style;
            return (e = null), t;
          })(),
          n = (function () {
            var e = document.createElement("div"),
              t = "objectPosition" in e.style;
            return (e = null), t;
          })();
        return {
          doesSupportSrcset: e,
          doesSupportObjectPosition: n,
          doesSupportObjectFit: t,
        };
      };
      t.validatedImage = function (e, t) {
        e.getDOMNode && (e = e.getDOMNode());
        var n = !("IMG" !== e.nodeName) && e;
        if (!n)
          return console.warn("Element is not a valid image element."), !1;
        if (a(e, r.IMAGE_LOADING_CLASS)) {
          var o = t.allowConcurrentLoads;
          if (
            (t.debuggerEnabled &&
              console.warn(
                ""
                  .concat(e, ' contains the class "')
                  .concat(r.IMAGE_LOADING_CLASS, '"; it will ')
                  .concat(o ? "" : "not ", "be processed.")
              ),
            !o)
          )
            return !1;
        }
        return n;
      };
      var c = function (e, t, n) {
        var r = n.dimensions.width,
          o = n.dimensions.height;
        return (
          0 === e && 0 === t
            ? ((e = r), (t = o))
            : 0 === e
            ? (e = (t * r) / o)
            : 0 === t && (t = (e * o) / r),
          { parentWidth: e, parentHeight: t, parentRatio: e / t }
        );
      };
      t.calculateParentDimensions = c;
      var l = function (e, t) {
        var n,
          r = e.cropMode,
          o = t.parentNode,
          i = e.dimensions.width,
          a = e.dimensions.height,
          s = i / a,
          u = { height: o.clientHeight, width: o.clientWidth },
          l = c(u.width, u.height, e).parentRatio,
          f = l.toFixed(1);
        return (
          t.getAttribute("data-parent-ratio") !== f &&
            t.setAttribute("data-parent-ratio", f),
          (n =
            ("cover" === r && s > l) || ("contain" === r && s < l)
              ? u.height / a
              : u.width / i),
          e.stretch || "contain" !== r || (n = Math.min(n, 1)),
          n
        );
      };
      t.getImageScale = l;
      var f = function (e, t, n, r) {
        (e && "object" === i(e)) ||
          (console.warn('Missing alignment for "content-fit" image.'),
          (e = { center: !0 }));
        var o = t;
        return (
          (o.left = e.left
            ? 0
            : e.right
            ? n - o.width
            : o.width < n
            ? (n - o.width) / 2
            : 0),
          (o.top = e.top
            ? 0
            : e.bottom
            ? r - o.height
            : o.height < r
            ? (r - o.height) / 2
            : 0),
          o
        );
      };
      t.getOffsetForAlignment = f;
      var d = function (e, t) {
          var n = e.getAttribute("alt"),
            r = n && 0 < n.length && !e.getAttribute("src");
          if (r) {
            var o = e.style.display;
            e.removeAttribute("alt"),
              (e.style.display = "none"),
              e.focus(),
              (e.style.display = o);
          }
          t(), r && e.setAttribute("alt", n);
        },
        p = function (e, t) {
          var n = e.parentNode,
            r = t.cropMode,
            o = t.dimensions.width,
            i = t.dimensions.height,
            a = o / i,
            s = c(n.clientWidth, n.clientHeight, t),
            p = s.parentRatio,
            h = s.parentWidth,
            m = s.parentHeight,
            y = {};
          if (t.fixedRatio)
            (y.unit = "%"),
              ("cover" === r && p > a) || ("contain" === r && p < a)
                ? ((y.width = 100),
                  (y.height = (p / a) * 100),
                  (y.top = (100 - y.height) * t.focalPoint.y),
                  (y.left = 0))
                : ((y.width = (a / p) * 100),
                  (y.height = 100),
                  (y.top = 0),
                  (y.left = (100 - y.width) * t.focalPoint.x));
          else {
            y.unit = "px";
            var v = l(t, e);
            (y.width = o * v),
              (y.height = i * v),
              "cover" === r
                ? ((y.left = Math.min(
                    Math.max(h / 2 - y.width * t.focalPoint.x, h - y.width),
                    0
                  )),
                  (y.top = Math.min(
                    Math.max(m / 2 - y.height * t.focalPoint.y, m - y.height),
                    0
                  )))
                : Object.assign(y, f(t.fitAlignment, y, h, m));
          }
          return (
            "inline" === u(e, "display") && (e.style.fontSize = "0px"),
            d(e, function () {
              (y.width -= e.offsetHeight - e.clientHeight),
                (y.height -= e.offsetWidth - e.clientWidth);
            }),
            {
              top: y.top,
              left: y.left,
              width: y.width,
              height: y.height,
              unit: y.unit,
            }
          );
        };
      t.getTargetDimensions = p;
      var h = function (e, t) {
        var n = e.parentNode,
          r = t.cropMode,
          o = p(e, t);
        (e.style.left = o.left + o.unit),
          (e.style.top = o.top + o.unit),
          (e.style.width = o.width + o.unit),
          (e.style.height = o.height + o.unit);
        var i = u(n, "position");
        return (
          (e.style.position = "relative" === i ? "absolute" : "relative"),
          "cover" === r && (n.style.overflow = "hidden"),
          !0
        );
      };
      t.positionImage = h;
      var m = function (e) {
        e ||
          (console.warn('Missing alignment for "content-fit" image.'),
          (e = { center: !0 }));
        var t = { horizontal: "50%", vertical: "50%" };
        return (
          Object.keys(e).forEach(function (n) {
            !0 === e[n] &&
              (r.FIT_ALIGNMENT_TO_OBJECT_POSITION.horizontal[n]
                ? (t.horizontal =
                    r.FIT_ALIGNMENT_TO_OBJECT_POSITION.horizontal[n])
                : (t.vertical =
                    r.FIT_ALIGNMENT_TO_OBJECT_POSITION.vertical[n]));
          }),
          t
        );
      };
      t.getObjectPositionForAlignment = m;
      var y = function (e, t, n) {
          var r = l(t, e),
            o = e.parentNode,
            i = Math.ceil(t.dimensions.width * r),
            a = Math.ceil(t.dimensions.height * r),
            s = "width" === n ? o.offsetWidth : o.offsetHeight,
            u = "width" === n ? i : a,
            c = "width" === n ? t.focalPoint.x : t.focalPoint.y,
            f = u - s;
          return 0 === f ? c : Math.max(Math.min(u * c - 0.5 * s, f), 0) / f;
        },
        v = function (e, t, n) {
          var r = (
              e.parentNode.offsetWidth / e.parentNode.offsetHeight
            ).toFixed(1),
            o = e.getAttribute("data-parent-ratio") !== r,
            i = "".concat(t.focalPoint.x, ",").concat(t.focalPoint.y);
          return e.getAttribute("data-image-focal-point") !== i
            ? (e.setAttribute("data-image-focal-point", i), !0)
            : !!o ||
                (n.debuggerEnabled && console.log("skipping repositioning"),
                !1);
        };
      t.positionCroppedImage = function (e, t, n) {
        return e.parentNode
          ? !!(function (e, t, n) {
              if (
                t.useAdvancedPositioning &&
                n.doesSupportObjectFit &&
                n.doesSupportObjectPosition
              ) {
                if (!v(e, t, n)) return !0;
                if (
                  ((e.style.width = "100%"),
                  (e.style.height = "100%"),
                  "cover" === t.cropMode)
                ) {
                  var r = { x: y(e, t, "width"), y: y(e, t, "height") };
                  (e.style.objectPosition = ""
                    .concat(100 * r.x, "% ")
                    .concat(100 * r.y, "%")),
                    (e.style.objectFit = "cover");
                } else if ("contain" === t.cropMode) {
                  var o = m(t.fitAlignment);
                  (e.style.objectPosition = ""
                    .concat(o.horizontal, " ")
                    .concat(o.vertical)),
                    (e.style.objectFit = "contain");
                }
                return (
                  n.debuggerEnabled && console.log("advanced position used"),
                  (t.isUsingAdvancedPositioning = !0),
                  !0
                );
              }
              if (
                t.useBgImage &&
                "cover" === t.cropMode &&
                "backgroundSize" in document.documentElement.style
              ) {
                if (!v(e, t, n)) return !0;
                (e.style.visibility = "hidden"),
                  (e.parentNode.style.backgroundSize = "cover");
                var i = { x: y(e, t, "width"), y: y(e, t, "height") };
                return (
                  (e.parentNode.style.backgroundPosition = ""
                    .concat(100 * i.x, "% ")
                    .concat(100 * i.y, "%")),
                  (t.isUsingAdvancedPositioning = !0),
                  !0
                );
              }
              return !1;
            })(e, t, n) || h(e, t)
          : (console.warn("Image element has no parentNode."), !1);
      };
      var g = function (e, t, n) {
        var r = n.dimensions.width,
          o = n.dimensions.height;
        if ("width" === e) return (r / o) * t;
        if ("height" === e) return (o / r) * t;
        throw new Error("Value for ".concat(e, " is NaN."));
      };
      t.getDimensionForValue = g;
      var b = function (e) {
        return e.substr(0, 1).toUpperCase() + e.substr(1);
      };
      t.getIntendedImageSize = function (e, t, n) {
        var r,
          i,
          a = function (n, r) {
            "none" === t.cropMode &&
              ((e.style.width = null), (e.style.height = null));
            var o = parseFloat(e.getAttribute(n)),
              i = parseFloat(e.getAttribute(n));
            if (
              ((!i || isNaN(i)) && ((o = u(e, n)), (i = parseFloat(o))),
              (!i || isNaN(i)) &&
                ((o = u(e, "max-" + n, "max" + b(n))), (i = parseFloat(o))),
              0 === r || o)
            )
              switch (
                (function (e) {
                  return "string" == typeof e && -1 < e.indexOf("%")
                    ? "percentage"
                    : isNaN(parseInt(e, 10))
                    ? NaN
                    : "number";
                })(o)
              ) {
                case "percentage":
                  r = (parseInt(o, 10) / 100) * e.parentNode["offset" + b(n)];
                  break;
                case "number":
                  r = parseInt(o, 10);
              }
            return i || 0 === r || e.getAttribute("src") || (r = 0), r;
          };
        return (
          t.isUsingAdvancedPositioning
            ? ((r = e.parentNode.offsetWidth), (i = e.parentNode.offsetHeight))
            : ((r = e.offsetWidth),
              (i = e.offsetHeight),
              d(e, function () {
                (r = a("width", r)), (i = a("height", i));
              })),
          0 === r && 0 === i
            ? ((r = t.dimensions.width), (i = t.dimensions.height))
            : 0 === r
            ? (r = g("width", i, t))
            : 0 === i && (i = g("height", r, t)),
          "viewport" === t.load &&
            ((e.style.width = "".concat(Math.floor(r), "px")),
            (e.style.height = "".concat(Math.floor(i), "px"))),
          (0, o.getSquarespaceSize)(t, r, i, n)
        );
      };
      t.shouldUpdateResolution = function (e, t) {
        var n = e.getAttribute("data-image-resolution");
        return (
          (t = parseInt(t, 10)),
          (n = parseInt(n, 10)),
          !(!isNaN(t) && !isNaN(n)) || t > n
        );
      };
      t.getUrl = function (e, t) {
        var n = e.source;
        if (!n || !n[0])
          return console.warn("Invalid or missing image source."), !1;
        if (t && ("/" === n[0] || s(n))) {
          if ("queryString" === e.sizeFormat && -1 === n.indexOf("format=" + t))
            return (n = n + (-1 < n.indexOf("?") ? "&" : "?") + "format=" + t);
          if ("filename" === e.sizeFormat && -1 === n.indexOf("-" + t)) {
            var r = n.slice(n.lastIndexOf("."));
            return (n = n.replace(r, "-" + t + r));
          }
        }
        return n;
      };
      t.getSizeFromUrl = function (e, t) {
        var n = (function (e) {
          return "queryString" === e.sizeFormat
            ? /(=)(\d{3,}w)*(original)*/i
            : /(-)(\d{3,}w)*(original)*/i;
        })(t);
        return e.match(n)[2] || e.match(n)[3];
      };
      t.getAssetUrl = function (e, t) {
        var n;
        return (
          "queryString" === t.sizeFormat &&
            (n = /(\S{1,})(\?format=)(\d{3,}w)/i),
          e.match(n)[1]
        );
      };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = Static.SQUARESPACE_CONTEXT.authenticatedAccount,
        o = { all: { callbacks: [] } },
        i = {
          getValue: function (e) {
            return e && "string" == typeof e
              ? window.Static.SQUARESPACE_CONTEXT.tweakJSON[e] ||
                  window.Static.SQUARESPACE_CONTEXT.tweakJSON[
                    e.replace("@", "").replace(".", "")
                  ]
              : (console.error("squarespace-core: Invalid tweak name " + e),
                null);
          },
          watch: function () {
            var e = arguments;
            if (r)
              if (0 !== arguments.length)
                if (1 !== arguments.length)
                  if (
                    "string" == typeof arguments[0] &&
                    "function" == typeof arguments[1]
                  ) {
                    var t = arguments[0];
                    o[t] || (o[t] = { callbacks: [] }),
                      o[t].callbacks.push(arguments[1]);
                  } else
                    arguments[0].constructor === Array &&
                      "function" == typeof arguments[1] &&
                      arguments[0].forEach(function (t) {
                        o[t] || (o[t] = { callbacks: [] }),
                          o[t].callbacks.push(e[1]);
                      });
                else
                  "function" == typeof arguments[0] &&
                    o.all.callbacks.push(arguments[0]);
              else
                console.error(
                  "squarespace-core: Tweak.watch must be called with at least one parameter"
                );
          },
        };
      function a() {
        window.Y.Global.on("tweak:change", function (e) {
          var t = e.getName(),
            n = { name: t, value: (e.config && e.config.value) || e.value };
          o[t] &&
            o[t].callbacks.forEach(function (e) {
              try {
                e(n);
              } catch (e) {
                console.error(e);
              }
            }),
            o.all.callbacks.length > 0 &&
              o.all.callbacks.forEach(function (e) {
                try {
                  e(n);
                } catch (e) {
                  console.error(e);
                }
              });
        });
      }
      r &&
        ("complete" !== document.readyState
          ? window.addEventListener("load", a)
          : window.Y && window.Y.Global && a()),
        (t.default = i),
        (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      n(0),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = a(n(9)),
        o = a(n(12)),
        i = a(n(13));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n, r = 0; r < t.length; r++)
          ((n = t[r]).enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      function c(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e;
      }
      var l =
        ((r.default.Builder = function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = (function () {
              function e() {
                var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                s(this, e), (this.opts = t), (this.imageloader = r.default);
              }
              return (
                c(e, [
                  {
                    key: "withPromises",
                    value: function () {
                      return (
                        (this.imageloader = (0, o.default)(this.imageloader)),
                        this
                      );
                    },
                  },
                  {
                    key: "withLazyLoading",
                    value: function () {
                      return (
                        (this.imageloader = (0, i.default)(this.imageloader)),
                        this
                      );
                    },
                  },
                  {
                    key: "build",
                    value: function () {
                      return new this.imageloader(this.opts);
                    },
                  },
                ]),
                e
              );
            })();
          return new t(e);
        }),
        r.default);
      (t.default = l), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      (function (e, n) {
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        var i = void 0 !== e && "[object global]" === {}.toString.call(e);
        function a(e, t) {
          return 0 === e.indexOf(t.toLowerCase())
            ? e
            : ""
                .concat(t.toLowerCase())
                .concat(e.substr(0, 1).toUpperCase())
                .concat(e.substr(1));
        }
        function s(e) {
          return Boolean(
            e &&
              1 === e.nodeType &&
              "nodeName" in e &&
              e.ownerDocument &&
              e.ownerDocument.defaultView
          );
        }
        function u(e) {
          return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e;
        }
        function c(e) {
          return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
        }
        function l() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.id,
            n = e.url,
            r = t || n;
          if (!r)
            throw new Error(
              "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
            );
          if (u(r)) return "https://vimeo.com/".concat(r);
          if (c(r)) return r.replace("http:", "https:");
          if (t)
            throw new TypeError("“".concat(t, "” is not a valid video id."));
          throw new TypeError("“".concat(r, "” is not a vimeo.com url."));
        }
        var f = void 0 !== Array.prototype.indexOf,
          d = "undefined" != typeof window && void 0 !== window.postMessage;
        if (!(i || (f && d)))
          throw new Error(
            "Sorry, the Vimeo Player API is not available in this browser."
          );
        var p =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : "undefined" != typeof self
            ? self
            : {};
        !(function (e) {
          if (!e.WeakMap) {
            var t = Object.prototype.hasOwnProperty,
              n = function (e, t, n) {
                Object.defineProperty
                  ? Object.defineProperty(e, t, {
                      configurable: !0,
                      writable: !0,
                      value: n,
                    })
                  : (e[t] = n);
              };
            e.WeakMap = (function () {
              function e() {
                if (void 0 === this)
                  throw new TypeError("Constructor WeakMap requires 'new'");
                if ((n(this, "_id", i("_WeakMap")), arguments.length > 0))
                  throw new TypeError("WeakMap iterable is not supported");
              }
              function o(e, n) {
                if (!r(e) || !t.call(e, "_id"))
                  throw new TypeError(
                    n + " method called on incompatible receiver " + typeof e
                  );
              }
              function i(e) {
                return e + "_" + a() + "." + a();
              }
              function a() {
                return Math.random().toString().substring(2);
              }
              return (
                n(e.prototype, "delete", function (e) {
                  if ((o(this, "delete"), !r(e))) return !1;
                  var t = e[this._id];
                  return !(!t || t[0] !== e) && (delete e[this._id], !0);
                }),
                n(e.prototype, "get", function (e) {
                  if ((o(this, "get"), r(e))) {
                    var t = e[this._id];
                    return t && t[0] === e ? t[1] : void 0;
                  }
                }),
                n(e.prototype, "has", function (e) {
                  if ((o(this, "has"), !r(e))) return !1;
                  var t = e[this._id];
                  return !(!t || t[0] !== e);
                }),
                n(e.prototype, "set", function (e, t) {
                  if ((o(this, "set"), !r(e)))
                    throw new TypeError("Invalid value used as weak map key");
                  var i = e[this._id];
                  return i && i[0] === e
                    ? ((i[1] = t), this)
                    : (n(e, this._id, [e, t]), this);
                }),
                n(e, "_polyfill", !0),
                e
              );
            })();
          }
          function r(e) {
            return Object(e) === e;
          }
        })(
          "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : p
        );
        var h = (function (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
          })(function (e) {
            var t, r, o;
            (o = function () {
              var e,
                t,
                r,
                o = Object.prototype.toString,
                i =
                  void 0 !== n
                    ? function (e) {
                        return n(e);
                      }
                    : setTimeout;
              try {
                Object.defineProperty({}, "x", {}),
                  (e = function (e, t, n, r) {
                    return Object.defineProperty(e, t, {
                      value: n,
                      writable: !0,
                      configurable: !1 !== r,
                    });
                  });
              } catch (t) {
                e = function (e, t, n) {
                  return (e[t] = n), e;
                };
              }
              function a(e, n) {
                r.add(e, n), t || (t = i(r.drain));
              }
              function s(e) {
                var t,
                  n = typeof e;
                return (
                  null == e ||
                    ("object" != n && "function" != n) ||
                    (t = e.then),
                  "function" == typeof t && t
                );
              }
              function u() {
                for (var e = 0; e < this.chain.length; e++)
                  c(
                    this,
                    1 === this.state
                      ? this.chain[e].success
                      : this.chain[e].failure,
                    this.chain[e]
                  );
                this.chain.length = 0;
              }
              function c(e, t, n) {
                var r, o;
                try {
                  !1 === t
                    ? n.reject(e.msg)
                    : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) ===
                      n.promise
                    ? n.reject(TypeError("Promise-chain cycle"))
                    : (o = s(r))
                    ? o.call(r, n.resolve, n.reject)
                    : n.resolve(r);
                } catch (e) {
                  n.reject(e);
                }
              }
              function l(e) {
                var t,
                  n = this;
                if (!n.triggered) {
                  (n.triggered = !0), n.def && (n = n.def);
                  try {
                    (t = s(e))
                      ? a(function () {
                          var r = new p(n);
                          try {
                            t.call(
                              e,
                              function () {
                                l.apply(r, arguments);
                              },
                              function () {
                                f.apply(r, arguments);
                              }
                            );
                          } catch (e) {
                            f.call(r, e);
                          }
                        })
                      : ((n.msg = e),
                        (n.state = 1),
                        n.chain.length > 0 && a(u, n));
                  } catch (e) {
                    f.call(new p(n), e);
                  }
                }
              }
              function f(e) {
                var t = this;
                t.triggered ||
                  ((t.triggered = !0),
                  t.def && (t = t.def),
                  (t.msg = e),
                  (t.state = 2),
                  t.chain.length > 0 && a(u, t));
              }
              function d(e, t, n, r) {
                for (var o = 0; o < t.length; o++)
                  !(function (o) {
                    e.resolve(t[o]).then(function (e) {
                      n(o, e);
                    }, r);
                  })(o);
              }
              function p(e) {
                (this.def = e), (this.triggered = !1);
              }
              function h(e) {
                (this.promise = e),
                  (this.state = 0),
                  (this.triggered = !1),
                  (this.chain = []),
                  (this.msg = void 0);
              }
              function m(e) {
                if ("function" != typeof e) throw TypeError("Not a function");
                if (0 !== this.__NPO__) throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var t = new h(this);
                (this.then = function (e, n) {
                  var r = {
                    success: "function" != typeof e || e,
                    failure: "function" == typeof n && n,
                  };
                  return (
                    (r.promise = new this.constructor(function (e, t) {
                      if ("function" != typeof e || "function" != typeof t)
                        throw TypeError("Not a function");
                      (r.resolve = e), (r.reject = t);
                    })),
                    t.chain.push(r),
                    0 !== t.state && a(u, t),
                    r.promise
                  );
                }),
                  (this.catch = function (e) {
                    return this.then(void 0, e);
                  });
                try {
                  e.call(
                    void 0,
                    function (e) {
                      l.call(t, e);
                    },
                    function (e) {
                      f.call(t, e);
                    }
                  );
                } catch (e) {
                  f.call(t, e);
                }
              }
              r = (function () {
                var e, n, r;
                function o(e, t) {
                  (this.fn = e), (this.self = t), (this.next = void 0);
                }
                return {
                  add: function (t, i) {
                    (r = new o(t, i)),
                      n ? (n.next = r) : (e = r),
                      (n = r),
                      (r = void 0);
                  },
                  drain: function () {
                    var r = e;
                    for (e = n = t = void 0; r; )
                      r.fn.call(r.self), (r = r.next);
                  },
                };
              })();
              var y = e({}, "constructor", m, !1);
              return (
                (m.prototype = y),
                e(y, "__NPO__", 0, !1),
                e(m, "resolve", function (e) {
                  return e && "object" == typeof e && 1 === e.__NPO__
                    ? e
                    : new this(function (t, n) {
                        if ("function" != typeof t || "function" != typeof n)
                          throw TypeError("Not a function");
                        t(e);
                      });
                }),
                e(m, "reject", function (e) {
                  return new this(function (t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                      throw TypeError("Not a function");
                    n(e);
                  });
                }),
                e(m, "all", function (e) {
                  var t = this;
                  return "[object Array]" != o.call(e)
                    ? t.reject(TypeError("Not an array"))
                    : 0 === e.length
                    ? t.resolve([])
                    : new t(function (n, r) {
                        if ("function" != typeof n || "function" != typeof r)
                          throw TypeError("Not a function");
                        var o = e.length,
                          i = Array(o),
                          a = 0;
                        d(
                          t,
                          e,
                          function (e, t) {
                            (i[e] = t), ++a === o && n(i);
                          },
                          r
                        );
                      });
                }),
                e(m, "race", function (e) {
                  var t = this;
                  return "[object Array]" != o.call(e)
                    ? t.reject(TypeError("Not an array"))
                    : new t(function (n, r) {
                        if ("function" != typeof n || "function" != typeof r)
                          throw TypeError("Not a function");
                        d(
                          t,
                          e,
                          function (e, t) {
                            n(t);
                          },
                          r
                        );
                      });
                }),
                m
              );
            }),
              ((r = p)[(t = "Promise")] = r[t] || o()),
              e.exports && (e.exports = r[t]);
          }),
          m = new WeakMap();
        function y(e, t, n) {
          var r = m.get(e.element) || {};
          t in r || (r[t] = []), r[t].push(n), m.set(e.element, r);
        }
        function v(e, t) {
          return (m.get(e.element) || {})[t] || [];
        }
        function g(e, t, n) {
          var r = m.get(e.element) || {};
          if (!r[t]) return !0;
          if (!n) return (r[t] = []), m.set(e.element, r), !0;
          var o = r[t].indexOf(n);
          return (
            -1 !== o && r[t].splice(o, 1),
            m.set(e.element, r),
            r[t] && 0 === r[t].length
          );
        }
        function b(e, t) {
          var n = m.get(e);
          m.set(t, n), m.delete(e);
        }
        var w = [
          "autopause",
          "autoplay",
          "background",
          "byline",
          "color",
          "controls",
          "dnt",
          "height",
          "id",
          "keyboard",
          "loop",
          "maxheight",
          "maxwidth",
          "muted",
          "playsinline",
          "portrait",
          "responsive",
          "speed",
          "texttrack",
          "title",
          "transparent",
          "url",
          "width",
        ];
        function _(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return w.reduce(function (t, n) {
            var r = e.getAttribute("data-vimeo-".concat(n));
            return (r || "" === r) && (t[n] = "" === r ? 1 : r), t;
          }, t);
        }
        function S(e, t) {
          var n = e.html;
          if (!t) throw new TypeError("An element must be provided");
          if (null !== t.getAttribute("data-vimeo-initialized"))
            return t.querySelector("iframe");
          var r = document.createElement("div");
          return (
            (r.innerHTML = n),
            t.appendChild(r.firstChild),
            t.setAttribute("data-vimeo-initialized", "true"),
            t.querySelector("iframe")
          );
        }
        function x(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return new Promise(function (r, o) {
            if (!c(e))
              throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
            var i = "https://vimeo.com/api/oembed.json?url=".concat(
              encodeURIComponent(e)
            );
            for (var a in t)
              t.hasOwnProperty(a) &&
                (i += "&".concat(a, "=").concat(encodeURIComponent(t[a])));
            var s =
              "XDomainRequest" in window
                ? new XDomainRequest()
                : new XMLHttpRequest();
            s.open("GET", i, !0),
              (s.onload = function () {
                if (404 !== s.status)
                  if (403 !== s.status)
                    try {
                      var t = JSON.parse(s.responseText);
                      if (403 === t.domain_status_code)
                        return (
                          S(t, n),
                          void o(
                            new Error("“".concat(e, "” is not embeddable."))
                          )
                        );
                      r(t);
                    } catch (e) {
                      o(e);
                    }
                  else o(new Error("“".concat(e, "” is not embeddable.")));
                else o(new Error("“".concat(e, "” was not found.")));
              }),
              (s.onerror = function () {
                var e = s.status ? " (".concat(s.status, ")") : "";
                o(
                  new Error(
                    "There was an error fetching the embed code from Vimeo".concat(
                      e,
                      "."
                    )
                  )
                );
              }),
              s.send();
          });
        }
        function O(e) {
          if ("string" == typeof e)
            try {
              e = JSON.parse(e);
            } catch (e) {
              return console.warn(e), {};
            }
          return e;
        }
        function k(e, t, n) {
          if (e.element.contentWindow && e.element.contentWindow.postMessage) {
            var r = { method: t };
            void 0 !== n && (r.value = n);
            var o = parseFloat(
              navigator.userAgent
                .toLowerCase()
                .replace(/^.*msie (\d+).*$/, "$1")
            );
            o >= 8 && o < 10 && (r = JSON.stringify(r)),
              e.element.contentWindow.postMessage(r, e.origin);
          }
        }
        function P(e, t) {
          var n,
            r = [];
          if ((t = O(t)).event) {
            if ("error" === t.event)
              v(e, t.data.method).forEach(function (n) {
                var r = new Error(t.data.message);
                (r.name = t.data.name), n.reject(r), g(e, t.data.method, n);
              });
            (r = v(e, "event:".concat(t.event))), (n = t.data);
          } else if (t.method) {
            var o = (function (e, t) {
              var n = v(e, t);
              if (n.length < 1) return !1;
              var r = n.shift();
              return g(e, t, r), r;
            })(e, t.method);
            o && (r.push(o), (n = t.value));
          }
          r.forEach(function (t) {
            try {
              if ("function" == typeof t) return void t.call(e, n);
              t.resolve(n);
            } catch (e) {}
          });
        }
        var T = new WeakMap(),
          E = new WeakMap(),
          A = {},
          I = (function () {
            function e(t) {
              var n = this,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                (r(this, e),
                window.jQuery &&
                  t instanceof jQuery &&
                  (t.length > 1 &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      "A jQuery object with multiple elements was passed, using the first element."
                    ),
                  (t = t[0])),
                "undefined" != typeof document &&
                  "string" == typeof t &&
                  (t = document.getElementById(t)),
                !s(t))
              )
                throw new TypeError(
                  "You must pass either a valid element or a valid id."
                );
              if ("IFRAME" !== t.nodeName) {
                var i = t.querySelector("iframe");
                i && (t = i);
              }
              if ("IFRAME" === t.nodeName && !c(t.getAttribute("src") || ""))
                throw new Error(
                  "The player element passed isn’t a Vimeo embed."
                );
              if (T.has(t)) return T.get(t);
              (this._window = t.ownerDocument.defaultView),
                (this.element = t),
                (this.origin = "*");
              var a = new h(function (e, r) {
                if (
                  ((n._onMessage = function (t) {
                    if (c(t.origin) && n.element.contentWindow === t.source) {
                      "*" === n.origin && (n.origin = t.origin);
                      var o = O(t.data);
                      if (
                        o &&
                        "error" === o.event &&
                        o.data &&
                        "ready" === o.data.method
                      ) {
                        var i = new Error(o.data.message);
                        return (i.name = o.data.name), void r(i);
                      }
                      var a = o && "ready" === o.event,
                        s = o && "ping" === o.method;
                      if (a || s)
                        return (
                          n.element.setAttribute("data-ready", "true"), void e()
                        );
                      P(n, o);
                    }
                  }),
                  n._window.addEventListener("message", n._onMessage),
                  "IFRAME" !== n.element.nodeName)
                ) {
                  var i = _(t, o);
                  x(l(i), i, t)
                    .then(function (e) {
                      var r = S(e, t);
                      return (
                        (n.element = r),
                        (n._originalElement = t),
                        b(t, r),
                        T.set(n.element, n),
                        e
                      );
                    })
                    .catch(r);
                }
              });
              if (
                (E.set(this, a),
                T.set(this.element, this),
                "IFRAME" === this.element.nodeName && k(this, "ping"),
                A.isEnabled)
              ) {
                var u = function () {
                  return A.exit();
                };
                (this.fullscreenchangeHandler = function () {
                  A.isFullscreen
                    ? y(n, "event:exitFullscreen", u)
                    : g(n, "event:exitFullscreen", u),
                    n.ready().then(function () {
                      k(n, "fullscreenchange", A.isFullscreen);
                    });
                }),
                  A.on("fullscreenchange", this.fullscreenchangeHandler);
              }
              return this;
            }
            var t, n, i;
            return (
              (t = e),
              (n = [
                {
                  key: "callMethod",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return new h(function (r, o) {
                      return t
                        .ready()
                        .then(function () {
                          y(t, e, { resolve: r, reject: o }), k(t, e, n);
                        })
                        .catch(o);
                    });
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    var t = this;
                    return new h(function (n, r) {
                      return (
                        (e = a(e, "get")),
                        t
                          .ready()
                          .then(function () {
                            y(t, e, { resolve: n, reject: r }), k(t, e);
                          })
                          .catch(r)
                      );
                    });
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    var n = this;
                    return new h(function (r, o) {
                      if (((e = a(e, "set")), null == t))
                        throw new TypeError("There must be a value to set.");
                      return n
                        .ready()
                        .then(function () {
                          y(n, e, { resolve: r, reject: o }), k(n, e, t);
                        })
                        .catch(o);
                    });
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (!t)
                      throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof t)
                      throw new TypeError("The callback must be a function.");
                    0 === v(this, "event:".concat(e)).length &&
                      this.callMethod("addEventListener", e).catch(
                        function () {}
                      ),
                      y(this, "event:".concat(e), t);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (t && "function" != typeof t)
                      throw new TypeError("The callback must be a function.");
                    g(this, "event:".concat(e), t) &&
                      this.callMethod("removeEventListener", e).catch(function (
                        e
                      ) {});
                  },
                },
                {
                  key: "loadVideo",
                  value: function (e) {
                    return this.callMethod("loadVideo", e);
                  },
                },
                {
                  key: "ready",
                  value: function () {
                    var e =
                      E.get(this) ||
                      new h(function (e, t) {
                        t(new Error("Unknown player. Probably unloaded."));
                      });
                    return h.resolve(e);
                  },
                },
                {
                  key: "addCuePoint",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return this.callMethod("addCuePoint", { time: e, data: t });
                  },
                },
                {
                  key: "removeCuePoint",
                  value: function (e) {
                    return this.callMethod("removeCuePoint", e);
                  },
                },
                {
                  key: "enableTextTrack",
                  value: function (e, t) {
                    if (!e) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                      language: e,
                      kind: t,
                    });
                  },
                },
                {
                  key: "disableTextTrack",
                  value: function () {
                    return this.callMethod("disableTextTrack");
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    return this.callMethod("pause");
                  },
                },
                {
                  key: "play",
                  value: function () {
                    return this.callMethod("play");
                  },
                },
                {
                  key: "requestFullscreen",
                  value: function () {
                    return A.isEnabled
                      ? A.request(this.element)
                      : this.callMethod("requestFullscreen");
                  },
                },
                {
                  key: "exitFullscreen",
                  value: function () {
                    return A.isEnabled
                      ? A.exit()
                      : this.callMethod("exitFullscreen");
                  },
                },
                {
                  key: "getFullscreen",
                  value: function () {
                    return A.isEnabled
                      ? h.resolve(A.isFullscreen)
                      : this.get("fullscreen");
                  },
                },
                {
                  key: "requestPictureInPicture",
                  value: function () {
                    return this.callMethod("requestPictureInPicture");
                  },
                },
                {
                  key: "exitPictureInPicture",
                  value: function () {
                    return this.callMethod("exitPictureInPicture");
                  },
                },
                {
                  key: "getPictureInPicture",
                  value: function () {
                    return this.get("pictureInPicture");
                  },
                },
                {
                  key: "unload",
                  value: function () {
                    return this.callMethod("unload");
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this;
                    return new h(function (t) {
                      if (
                        (E.delete(e),
                        T.delete(e.element),
                        e._originalElement &&
                          (T.delete(e._originalElement),
                          e._originalElement.removeAttribute(
                            "data-vimeo-initialized"
                          )),
                        e.element &&
                          "IFRAME" === e.element.nodeName &&
                          e.element.parentNode &&
                          (e.element.parentNode.parentNode &&
                          e._originalElement &&
                          e._originalElement !== e.element.parentNode
                            ? e.element.parentNode.parentNode.removeChild(
                                e.element.parentNode
                              )
                            : e.element.parentNode.removeChild(e.element)),
                        e.element &&
                          "DIV" === e.element.nodeName &&
                          e.element.parentNode)
                      ) {
                        e.element.removeAttribute("data-vimeo-initialized");
                        var n = e.element.querySelector("iframe");
                        n &&
                          n.parentNode &&
                          (n.parentNode.parentNode &&
                          e._originalElement &&
                          e._originalElement !== n.parentNode
                            ? n.parentNode.parentNode.removeChild(n.parentNode)
                            : n.parentNode.removeChild(n));
                      }
                      e._window.removeEventListener("message", e._onMessage),
                        A.isEnabled &&
                          A.off("fullscreenchange", e.fullscreenchangeHandler),
                        t();
                    });
                  },
                },
                {
                  key: "getAutopause",
                  value: function () {
                    return this.get("autopause");
                  },
                },
                {
                  key: "setAutopause",
                  value: function (e) {
                    return this.set("autopause", e);
                  },
                },
                {
                  key: "getBuffered",
                  value: function () {
                    return this.get("buffered");
                  },
                },
                {
                  key: "getCameraProps",
                  value: function () {
                    return this.get("cameraProps");
                  },
                },
                {
                  key: "setCameraProps",
                  value: function (e) {
                    return this.set("cameraProps", e);
                  },
                },
                {
                  key: "getChapters",
                  value: function () {
                    return this.get("chapters");
                  },
                },
                {
                  key: "getCurrentChapter",
                  value: function () {
                    return this.get("currentChapter");
                  },
                },
                {
                  key: "getColor",
                  value: function () {
                    return this.get("color");
                  },
                },
                {
                  key: "setColor",
                  value: function (e) {
                    return this.set("color", e);
                  },
                },
                {
                  key: "getCuePoints",
                  value: function () {
                    return this.get("cuePoints");
                  },
                },
                {
                  key: "getCurrentTime",
                  value: function () {
                    return this.get("currentTime");
                  },
                },
                {
                  key: "setCurrentTime",
                  value: function (e) {
                    return this.set("currentTime", e);
                  },
                },
                {
                  key: "getDuration",
                  value: function () {
                    return this.get("duration");
                  },
                },
                {
                  key: "getEnded",
                  value: function () {
                    return this.get("ended");
                  },
                },
                {
                  key: "getLoop",
                  value: function () {
                    return this.get("loop");
                  },
                },
                {
                  key: "setLoop",
                  value: function (e) {
                    return this.set("loop", e);
                  },
                },
                {
                  key: "setMuted",
                  value: function (e) {
                    return this.set("muted", e);
                  },
                },
                {
                  key: "getMuted",
                  value: function () {
                    return this.get("muted");
                  },
                },
                {
                  key: "getPaused",
                  value: function () {
                    return this.get("paused");
                  },
                },
                {
                  key: "getPlaybackRate",
                  value: function () {
                    return this.get("playbackRate");
                  },
                },
                {
                  key: "setPlaybackRate",
                  value: function (e) {
                    return this.set("playbackRate", e);
                  },
                },
                {
                  key: "getPlayed",
                  value: function () {
                    return this.get("played");
                  },
                },
                {
                  key: "getQualities",
                  value: function () {
                    return this.get("qualities");
                  },
                },
                {
                  key: "getQuality",
                  value: function () {
                    return this.get("quality");
                  },
                },
                {
                  key: "setQuality",
                  value: function (e) {
                    return this.set("quality", e);
                  },
                },
                {
                  key: "getSeekable",
                  value: function () {
                    return this.get("seekable");
                  },
                },
                {
                  key: "getSeeking",
                  value: function () {
                    return this.get("seeking");
                  },
                },
                {
                  key: "getTextTracks",
                  value: function () {
                    return this.get("textTracks");
                  },
                },
                {
                  key: "getVideoEmbedCode",
                  value: function () {
                    return this.get("videoEmbedCode");
                  },
                },
                {
                  key: "getVideoId",
                  value: function () {
                    return this.get("videoId");
                  },
                },
                {
                  key: "getVideoTitle",
                  value: function () {
                    return this.get("videoTitle");
                  },
                },
                {
                  key: "getVideoWidth",
                  value: function () {
                    return this.get("videoWidth");
                  },
                },
                {
                  key: "getVideoHeight",
                  value: function () {
                    return this.get("videoHeight");
                  },
                },
                {
                  key: "getVideoUrl",
                  value: function () {
                    return this.get("videoUrl");
                  },
                },
                {
                  key: "getVolume",
                  value: function () {
                    return this.get("volume");
                  },
                },
                {
                  key: "setVolume",
                  value: function (e) {
                    return this.set("volume", e);
                  },
                },
              ]) && o(t.prototype, n),
              i && o(t, i),
              e
            );
          })();
        i ||
          ((A = (function () {
            var e = (function () {
                for (
                  var e,
                    t = [
                      [
                        "requestFullscreen",
                        "exitFullscreen",
                        "fullscreenElement",
                        "fullscreenEnabled",
                        "fullscreenchange",
                        "fullscreenerror",
                      ],
                      [
                        "webkitRequestFullscreen",
                        "webkitExitFullscreen",
                        "webkitFullscreenElement",
                        "webkitFullscreenEnabled",
                        "webkitfullscreenchange",
                        "webkitfullscreenerror",
                      ],
                      [
                        "webkitRequestFullScreen",
                        "webkitCancelFullScreen",
                        "webkitCurrentFullScreenElement",
                        "webkitCancelFullScreen",
                        "webkitfullscreenchange",
                        "webkitfullscreenerror",
                      ],
                      [
                        "mozRequestFullScreen",
                        "mozCancelFullScreen",
                        "mozFullScreenElement",
                        "mozFullScreenEnabled",
                        "mozfullscreenchange",
                        "mozfullscreenerror",
                      ],
                      [
                        "msRequestFullscreen",
                        "msExitFullscreen",
                        "msFullscreenElement",
                        "msFullscreenEnabled",
                        "MSFullscreenChange",
                        "MSFullscreenError",
                      ],
                    ],
                    n = 0,
                    r = t.length,
                    o = {};
                  n < r;
                  n++
                )
                  if ((e = t[n]) && e[1] in document) {
                    for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                    return o;
                  }
                return !1;
              })(),
              t = {
                fullscreenchange: e.fullscreenchange,
                fullscreenerror: e.fullscreenerror,
              },
              n = {
                request: function (t) {
                  return new Promise(function (r, o) {
                    var i = function e() {
                      n.off("fullscreenchange", e), r();
                    };
                    n.on("fullscreenchange", i);
                    var a = (t = t || document.documentElement)[
                      e.requestFullscreen
                    ]();
                    a instanceof Promise && a.then(i).catch(o);
                  });
                },
                exit: function () {
                  return new Promise(function (t, r) {
                    if (n.isFullscreen) {
                      var o = function e() {
                        n.off("fullscreenchange", e), t();
                      };
                      n.on("fullscreenchange", o);
                      var i = document[e.exitFullscreen]();
                      i instanceof Promise && i.then(o).catch(r);
                    } else t();
                  });
                },
                on: function (e, n) {
                  var r = t[e];
                  r && document.addEventListener(r, n);
                },
                off: function (e, n) {
                  var r = t[e];
                  r && document.removeEventListener(r, n);
                },
              };
            return (
              Object.defineProperties(n, {
                isFullscreen: {
                  get: function () {
                    return Boolean(document[e.fullscreenElement]);
                  },
                },
                element: {
                  enumerable: !0,
                  get: function () {
                    return document[e.fullscreenElement];
                  },
                },
                isEnabled: {
                  enumerable: !0,
                  get: function () {
                    return Boolean(document[e.fullscreenEnabled]);
                  },
                },
              }),
              n
            );
          })()),
          (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : document,
              t = [].slice.call(
                e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
              ),
              n = function (e) {
                "console" in window &&
                  console.error &&
                  console.error(
                    "There was an error creating an embed: ".concat(e)
                  );
              };
            t.forEach(function (e) {
              try {
                if (null !== e.getAttribute("data-vimeo-defer")) return;
                var t = _(e);
                x(l(t), t, e)
                  .then(function (t) {
                    return S(t, e);
                  })
                  .catch(n);
              } catch (e) {
                n(e);
              }
            });
          })(),
          (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document;
            if (!window.VimeoPlayerResizeEmbeds_) {
              window.VimeoPlayerResizeEmbeds_ = !0;
              var t = function (t) {
                if (c(t.origin) && t.data && "spacechange" === t.data.event)
                  for (
                    var n = e.querySelectorAll("iframe"), r = 0;
                    r < n.length;
                    r++
                  )
                    if (n[r].contentWindow === t.source) {
                      n[r].parentElement.style.paddingBottom = "".concat(
                        t.data.data[0].bottom,
                        "px"
                      );
                      break;
                    }
              };
              window.addEventListener("message", t);
            }
          })()),
          (t.a = I);
      }.call(this, n(4), n(15).setImmediate));
    },
    function (e, t, n) {
      "use strict";
      !(function () {
        function e(e) {
          for (var t = []; (e = e.parentNode || e.host || e.defaultView); )
            t.push(e);
          return t;
        }
        function t(e) {
          return function (t) {
            var n =
              void 0 !== t.getAttribute
                ? t.getAttribute("class") || ""
                : void 0;
            void 0 !== n &&
              -1 === n.indexOf(e) &&
              t.setAttribute("class", n.concat(" ", e).trim());
          };
        }
        var n = ["\n", "\t", " ", "\r"];
        try {
          document.querySelector(":focus-within");
        } catch (r) {
          return (function () {
            function r(r) {
              if (!o) {
                window.requestAnimationFrame(function () {
                  (o = !1),
                    "blur" === r.type &&
                      Array.prototype.slice.call(e(r.target)).forEach(
                        (function (e) {
                          return function (t) {
                            var r =
                              void 0 !== t.getAttribute
                                ? t.getAttribute("class") || ""
                                : void 0;
                            if (r) {
                              var o = r.indexOf(e);
                              0 <= o &&
                                (0 === o || 0 <= n.indexOf(r.charAt(o - 1))) &&
                                ("" === (r = r.replace(e, "").trim())
                                  ? t.removeAttribute("class")
                                  : t.setAttribute("class", r));
                            }
                          };
                        })("focus-within")
                      ),
                    "focus" === r.type &&
                      Array.prototype.slice
                        .call(e(r.target))
                        .forEach(t("focus-within"));
                });
                var o = !0;
              }
            }
            return (
              document.addEventListener("focus", r, !0),
              document.addEventListener("blur", r, !0),
              t("js-focus-within")(document.body),
              !0
            );
          })();
        }
      })();
    },
    function (e, t, n) {
      "use strict";
      n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2),
        o = n(3),
        i = n(11);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n, r = 0; r < t.length; r++)
          ((n = t[r]).enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      var u = (function () {
        function e() {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          a(this, e);
          var n = (0, o.checkFeatureSupport)();
          (this.doesSupportSrcset = n.doesSupportSrcset),
            (this.doesSupportObjectFit = n.doesSupportObjectFit),
            (this.doesSupportObjectPosition = n.doesSupportObjectPosition),
            this.configure(t);
        }
        return (
          (function (e, t, n) {
            t && s(e.prototype, t), n && s(e, n);
          })(e, [
            {
              key: "configure",
              value: function (e) {
                var t = this,
                  n = {
                    allowConcurrentLoads: !1,
                    debuggerEnabled: !1,
                    sizes: r.SQUARESPACE_SIZES,
                  };
                Object.assign(this, n, e),
                  this.sizes.sort(function (e, t) {
                    return t - e;
                  }),
                  this.debuggerEnabled &&
                    Object.keys(this).forEach(function (e) {
                      console.log(e, t[e]);
                    });
              },
            },
            {
              key: "load",
              value: function (e, t) {
                var n = (0, o.validatedImage)(e, this);
                if (!n) return !1;
                var r = (0, i.getLoadingConfiguration)(n, t);
                if ("false" === r.load && !r.forceImageUpdate)
                  return (
                    this.debuggerEnabled &&
                      console.warn("".concat(n, ' load mode is "false".')),
                    !1
                  );
                if (
                  r.hasImageDimensionData &&
                  "none" !== r.cropMode &&
                  !(0, o.positionCroppedImage)(n, r, this)
                )
                  return !1;
                if (n.getAttribute("srcset")) {
                  if (this.doesSupportSrcset)
                    return this.setImageUsingSrcset(n, r);
                  var a = (0, o.getAssetUrl)(n.getAttribute("srcset"), r);
                  (r.source = a), n.setAttribute("data-src", a);
                }
                var s = (0, o.getIntendedImageSize)(n, r, this);
                return "string" != typeof s || "viewport" === r.load
                  ? s
                  : r.forceImageUpdate || (0, o.shouldUpdateResolution)(n, s)
                  ? this.setImageSource(n, r, s, t)
                  : s;
              },
            },
            {
              key: "loadAll",
              value: function () {
                var e = this,
                  t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : document.body;
                if (!n || !n.nodeName || !("querySelectorAll" in n))
                  return new Error("".concat(n, " is not a valid node."));
                var r = n.querySelectorAll(
                  "img[data-src]",
                  "img[data-srcset]",
                  "img[srcset]"
                );
                r.forEach(function (n) {
                  e.load(n, t);
                });
              },
            },
            {
              key: "getDimensionForValue",
              value: function (e, t, n) {
                return (0, o.getDimensionForValue)(e, t, n);
              },
            },
            {
              key: "setImageSource",
              value: function (e, t, n, i) {
                var a = this,
                  s = (0, o.getUrl)(t, n);
                if (!s) return !1;
                var u = function () {
                    (0, o.removeClass)(e, r.IMAGE_LOADING_CLASS),
                      (0, o.removeClass)(e, r.LEGACY_IMAGE_LOADING_CLASS);
                  },
                  c = function () {
                    u(), e.removeEventListener("load", c);
                  };
                return !(e.addEventListener("load", c),
                this.debuggerEnabled &&
                  e.setAttribute("data-version", "module"),
                (e.getAttribute("src") &&
                  "true" !== t.load &&
                  !0 !== t.forceImageUpdate) ||
                  ((0, o.addClass)(e, r.IMAGE_LOADING_CLASS),
                  (0, o.addClass)(e, r.LEGACY_IMAGE_LOADING_CLASS),
                  t.hasImageDimensionData
                    ? ((e.dataset.imageResolution = n),
                      e.setAttribute("src", s),
                      u(),
                      t.useBgImage &&
                        (e.parentNode.style.backgroundImage = "url(" + s + ")"),
                      0)
                    : ((0, o.preloadImage)(
                        s,
                        function (t) {
                          a.debuggerEnabled &&
                            console.log(
                              "Loaded ".concat(s, " to get image dimensions.")
                            ),
                            e.setAttribute(
                              "data-image-dimensions",
                              t.width + "x" + t.height
                            ),
                            u(),
                            a.load(e, i);
                        },
                        function (t, n) {
                          e.setAttribute("src", n),
                            u(),
                            a.debuggerEnabled &&
                              console.log("".concat(n, " failed to load."));
                        }
                      ),
                      1)));
              },
            },
            {
              key: "setImageUsingSrcset",
              value: function (e, t) {
                var n = function () {
                  var i;
                  (0, o.removeClass)(e, r.IMAGE_LOADING_CLASS),
                    (0, o.removeClass)(e, r.LEGACY_IMAGE_LOADING_CLASS),
                    "currentSrc" in Image.prototype &&
                      ((i = (0, o.getSizeFromUrl)(e.currentSrc, t)),
                      e.setAttribute("data-image-resolution", i)),
                    e.removeEventListener("load", n);
                };
                return e.addEventListener("load", n), e.complete && n(), !0;
              },
            },
            {
              key: "_getDataFromNode",
              value: function (e, t) {
                return (0, i.getLoadingConfiguration)(e, t);
              },
            },
          ]),
          e
        );
      })();
      (t.default = u), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      var r = n(3);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSquarespaceSize = void 0);
      t.getSquarespaceSize = function (e, t, n, o) {
        for (
          var i = (0, r.getDimensionForValue)("width", n, e),
            a =
              Math.max(i, t) *
              (function (e) {
                if (
                  "undefined" != typeof app ||
                  "number" != typeof window.devicePixelRatio
                )
                  return e.sizeAdjustment;
                var t =
                  e.allowSaveData &&
                  ("navigator" in window) &&
                  ("connection" in window.navigator) &&
                  window.navigator.connection.saveData
                    ? Math.min(window.devicePixelRatio, 1)
                    : window.devicePixelRatio;
                return (
                  Math.max(e.dprMin, Math.min(e.dprMax, t)) * e.sizeAdjustment
                );
              })(e),
            s = o.sizes.length,
            u = 1;
          u < s;
          u++
        )
          if (a > o.sizes[u]) return o.sizes[u - 1] + "w";
        return o.sizes[s - 1] + "w";
      };
    },
    function (e, t, n) {
      "use strict";
      n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLoadingConfiguration = void 0);
      var r = n(2),
        o = n(3);
      t.getLoadingConfiguration = function (e) {
        var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = {
            dimensions: (function () {
              if (t.dimensions) return t.dimensions;
              var n = e.getAttribute("data-image-dimensions");
              return n && (n = n.split("x")) && 2 === n.length
                ? { width: parseInt(n[0], 10), height: parseInt(n[1], 10) }
                : { width: null, height: null };
            })(),
            fixedRatio: (function () {
              if (t.fixedRatio) return t.fixedRatio;
              var n = e.getAttribute("data-fixed-ratio");
              return !!n && "true" === n;
            })(),
            focalPoint: (function () {
              if (
                t.focalPoint &&
                !isNaN(parseFloat(t.focalPoint.x)) &&
                !isNaN(parseFloat(t.focalPoint.y))
              )
                return t.focalPoint;
              var n = e.getAttribute("data-image-focal-point");
              return n && (n = n.split(",").map(parseFloat)) && 2 === n.length
                ? { x: n[0], y: n[1] }
                : { x: 0.5, y: 0.5 };
            })(),
            load:
              t.load || !1 === t.load
                ? t.load.toString()
                : e.getAttribute("data-load") || "true",
            forceImageUpdate: (function () {
              if (t.forceImageUpdate || !1 === t.forceImageUpdate)
                return t.forceImageUpdate;
              var n = e.getAttribute("data-force-image-update");
              return !!n && "true" === n;
            })(),
            cropMode: (function () {
              if (t.mode) return r.CROP_ARGUMENT_TO_CROP_MODE[t.mode] || "none";
              var n = r.CROP_ARGUMENT_TO_CROP_MODE[e.getAttribute("data-mode")];
              if (n) return n;
              if (!e.parentNode) return "none";
              var o = e.parentNode.className;
              return -1 < o.indexOf("content-fill")
                ? r.CROP_ARGUMENT_TO_CROP_MODE["content-fill"]
                : -1 < o.indexOf("content-fit")
                ? r.CROP_ARGUMENT_TO_CROP_MODE["content-fit"]
                : "none";
            })(),
            sizeAdjustment: (function () {
              var n = function (e) {
                return (e = parseFloat(e)), isNaN(e) ? 1 : Math.max(e, 0);
              };
              return void 0 === t.sizeAdjustment
                ? n(e.getAttribute("data-size-adjustment"))
                : n(t.sizeAdjustment);
            })(),
            sizeFormat: t.sizeFormat
              ? t.sizeFormat
              : "filename" === e.getAttribute("data-size-format")
              ? "filename"
              : "queryString",
            source: (function () {
              if (t.source) return t.source;
              var n = e.getAttribute("data-src");
              return n
                ? ((0, o.isSquarespaceUrl)(n) &&
                    (n = n.replace(/(http:\/\/)/g, "https://")),
                  n)
                : void 0;
            })(),
            stretch: (function () {
              if (void 0 !== t.stretch) return t.stretch;
              var n = e.getAttribute("data-image-stretch");
              return !n || "true" === n;
            })(),
            useBgImage: (function () {
              if (void 0 !== t.useBgImage) return t.useBgImage;
              var n = e.getAttribute("data-use-bg-image");
              return !!n && "true" === n;
            })(),
            useAdvancedPositioning: (function () {
              if (void 0 !== t.useAdvancedPositioning)
                return t.useAdvancedPositioning;
              var n = e.getAttribute("data-use-advanced-positioning");
              return !!n && "true" === n;
            })(),
          };
        if (
          ((n.allowSaveData =
            "allowSaveData" in t
              ? t.allowSaveData
              : "true" === e.getAttribute("data-allow-save-data")),
          (n.dprMax =
            "dprMax" in t
              ? t.dprMax
              : parseInt(e.getAttribute("data-dpr-max"), 10) || 1 / 0),
          (n.dprMin =
            "dprMin" in t
              ? t.dprMin
              : parseInt(e.getAttribute("data-dpr-min"), 10) || 0),
          "contain" === n.cropMode && e.parentNode)
        ) {
          var i =
            t.fitAlignment ||
            e.getAttribute("data-alignment") ||
            e.parentNode.getAttribute("data-alignment") ||
            "center";
          i &&
            (n.fitAlignment = [
              "top",
              "left",
              "center",
              "right",
              "bottom",
            ].reduce(function (e, t) {
              return (e[t] = -1 < i.indexOf(t)), e;
            }, {}));
        }
        return (
          n.dimensions &&
            n.dimensions.width &&
            n.dimensions.height &&
            (n.hasImageDimensionData = !0),
          n
        );
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var n, r = 0; r < t.length; r++)
          ((n = t[r]).enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && u(e, t);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = f(e);
          if (t) {
            var o = f(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      function l(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var d = function () {
        var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (function (e) {
          function t() {
            var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return o(this, t), n.call(this, e);
          }
          s(t, e);
          var n = c(t);
          return (
            a(t, [
              {
                key: "loadAsync",
                value: function (e) {
                  var t = this,
                    n =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (!e) return Promise.reject(new Error("No images"));
                  var r,
                    o,
                    i = function (e, t) {
                      e.removeEventListener("load", r),
                        e.removeEventListener("error", o),
                        t.resolve(e);
                    },
                    a = function (e, t) {
                      e.removeEventListener("load", r),
                        e.removeEventListener("error", o),
                        t.reject(new Error(e + " not loaded"));
                    };
                  return new Promise(function (s, u) {
                    (r = i.bind(null, e, { resolve: s, reject: u })),
                      (o = a.bind(null, e, { resolve: s, reject: u })),
                      e.addEventListener("load", r),
                      e.addEventListener("error", o);
                    var c = t.load(e, n);
                    ("string" == typeof c || !1 === c) &&
                      i(e, { resolve: s, reject: u });
                  });
                },
              },
              {
                key: "loadAllAsync",
                value: function () {
                  var e = this,
                    t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : document.body,
                    r = 2 < arguments.length ? arguments[2] : void 0;
                  if (null === n)
                    return Promise.reject(new Error("No root node"));
                  var o = n.querySelectorAll(
                    "img[data-src]",
                    "img[data-srcset]",
                    "img[srcset]"
                  );
                  if (0 === o.length)
                    return Promise.reject(new Error("No images"));
                  var i = Array.from(o).map(function (n) {
                    return e.loadAsync(n, t, r);
                  });
                  return Promise.all(i);
                },
              },
            ]),
            t
          );
        })(e);
      };
      (t.default = d), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      var r,
        o = (r = n(14)) && r.__esModule ? r : { default: r };
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n, r = 0; r < t.length; r++)
          ((n = t[r]).enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      function u(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && l(e, t);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      function d(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t) ? p(e) : t;
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        n(0),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var m = {
          root: null,
          rootMargin: "200px 200px 200px 200px",
          thresholds: [0],
        },
        y = function () {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return (function (e) {
            function t() {
              var e,
                r =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                a(this, t),
                ((e = n.call(this, r)).intersectionObserverEntries = []),
                (e.lazyLoadObserver = null),
                (e.boundImageLoadHandler = e._unobserverOnLoad.bind(p(e))),
                e
              );
            }
            c(t, e);
            var n = f(t);
            return (
              u(t, [
                {
                  key: "loadLazy",
                  value: function (e) {
                    var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : m;
                    return e && "IMG" === e.tagName
                      ? self.IntersectionObserver
                        ? (this.lazyLoadObserver ||
                            ((this.observerRootNode =
                              n.root || self.document.body),
                            (this.lazyLoadObserver = new IntersectionObserver(
                              this._onObserverChange.bind(this),
                              n
                            ))),
                          this._observe(e, t, !0),
                          this.lazyLoadObserver)
                        : (this.load(e, t), !1)
                      : new Error("No image");
                  },
                },
                {
                  key: "loadAllLazy",
                  value: function () {
                    var e = this,
                      t =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : document.body,
                      r =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : m;
                    if (null === n || !n.querySelectorAll)
                      return new Error("".concat(n, " is not a valid node."));
                    var o = n.querySelectorAll(
                      "img[data-src]",
                      "img[data-srcset]",
                      "img[srcset]"
                    );
                    return 0 === o.length
                      ? null
                      : self.IntersectionObserver
                      ? ((this.observerRootNode = r.root || self.document.body),
                        (this.lazyLoadObserver = new IntersectionObserver(
                          this._onObserverChange.bind(this),
                          r
                        )),
                        o.forEach(function (n) {
                          e._observe(n, t, !1);
                        }),
                        this.lazyLoadObserver)
                      : (this.loadAll(t, n), !1);
                  },
                },
                {
                  key: "_observe",
                  value: function (e, t, n) {
                    var r = this._getTargetNode(e);
                    return (
                      !(0, o.default)(
                        this.intersectionObserverEntries,
                        r,
                        t,
                        n
                      ) &&
                      (e.addEventListener("load", this.boundImageLoadHandler),
                      this.lazyLoadObserver.observe(r),
                      void this.intersectionObserverEntries.push({
                        target: r,
                        params: t,
                      }))
                    );
                  },
                },
                {
                  key: "_onObserverChange",
                  value: function (e) {
                    var t = this;
                    e.forEach(function (e) {
                      e.isIntersecting &&
                        self.requestAnimationFrame(function () {
                          var n =
                              "IMG" === e.target.tagName
                                ? [e.target]
                                : e.target.querySelectorAll("img"),
                            r = {};
                          (t.intersectionObserverEntries =
                            t.intersectionObserverEntries.filter(function (t) {
                              return (
                                t.target === e.target && (r = t.params),
                                t.target !== e.target
                              );
                            })),
                            n.forEach(function (e) {
                              t.load(e, r);
                            }),
                            t.lazyLoadObserver.unobserve(e.target);
                        });
                    });
                  },
                },
                {
                  key: "_unobserverOnLoad",
                  value: function (e) {
                    var t = e.currentTarget,
                      n = this._getTargetNode(e.currentTarget);
                    this.lazyLoadObserver.unobserve(n),
                      t.removeEventListener("load", this.boundImageLoadHandler);
                  },
                },
                {
                  key: "_getTargetNode",
                  value: function (e) {
                    var t = e.parentNode;
                    return t === this.observerRootNode || 0 !== e.clientHeight
                      ? e
                      : t;
                  },
                },
              ]),
              t
            );
          })(e);
        };
      (t.default = y), (e.exports = t.default);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = function (e, t, n, r) {
        for (var o, i = 0; i < e.length; i++)
          if ((o = e[i]).target === t) return r && (o.params = n), !0;
        return !1;
      };
      (t.default = r), (e.exports = t.default);
    },
    function (e, t, n) {
      (function (e) {
        var r =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          o = Function.prototype.apply;
        function i(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function () {
          return new i(o.call(setTimeout, r, arguments), clearTimeout);
        }),
          (t.setInterval = function () {
            return new i(o.call(setInterval, r, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval =
            function (e) {
              e && e.close();
            }),
          (i.prototype.unref = i.prototype.ref = function () {}),
          (i.prototype.close = function () {
            this._clearFn.call(r, this._id);
          }),
          (t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active =
            function (e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 &&
                (e._idleTimeoutId = setTimeout(function () {
                  e._onTimeout && e._onTimeout();
                }, t));
            }),
          n(16),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(4)));
    },
    function (e, t, n) {
      (function (e, t) {
        !(function (e, n) {
          "use strict";
          if (!e.setImmediate) {
            var r,
              o,
              i,
              a,
              s,
              u = 1,
              c = {},
              l = !1,
              f = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (d = d && d.setTimeout ? d : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function (e) {
                    t.nextTick(function () {
                      h(e);
                    });
                  })
                : !(function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((i = new MessageChannel()).port1.onmessage = function (
                      e
                    ) {
                      h(e.data);
                    }),
                    (r = function (e) {
                      i.port2.postMessage(e);
                    }))
                  : f && "onreadystatechange" in f.createElement("script")
                  ? ((o = f.documentElement),
                    (r = function (e) {
                      var t = f.createElement("script");
                      (t.onreadystatechange = function () {
                        h(e),
                          (t.onreadystatechange = null),
                          o.removeChild(t),
                          (t = null);
                      }),
                        o.appendChild(t);
                    }))
                  : (r = function (e) {
                      setTimeout(h, 0, e);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      h(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", s, !1)
                    : e.attachEvent("onmessage", s),
                  (r = function (t) {
                    e.postMessage(a + t, "*");
                  })),
              (d.setImmediate = function (e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var o = { callback: e, args: t };
                return (c[u] = o), r(u), u++;
              }),
              (d.clearImmediate = p);
          }
          function p(e) {
            delete c[e];
          }
          function h(e) {
            if (l) setTimeout(h, 0, e);
            else {
              var t = c[e];
              if (t) {
                l = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  p(e), (l = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, n(4), n(17)));
    },
    function (e, t) {
      var n,
        r,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var u,
        c = [],
        l = !1,
        f = -1;
      function d() {
        l &&
          u &&
          ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && p());
      }
      function p() {
        if (!l) {
          var e = s(d);
          l = !0;
          for (var t = c.length; t; ) {
            for (u = c, c = []; ++f < t; ) u && u[f].run();
            (f = -1), (t = c.length);
          }
          (u = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || l || s(p);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = m),
        (o.addListener = m),
        (o.once = m),
        (o.off = m),
        (o.removeListener = m),
        (o.removeAllListeners = m),
        (o.emit = m),
        (o.prependListener = m),
        (o.prependOnceListener = m),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(8), n(0);
      var r = n(5),
        o = n.n(r);
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = new ((function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.events = {});
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "on",
              value: function (e, t) {
                var n = this.events;
                return (n[e] || (n[e] = [])).push({ fn: t }), this;
              },
            },
            {
              key: "trigger",
              value: function (e) {
                for (
                  var t = (
                      (this.events || (this.events = {}))[e] || []
                    ).slice(),
                    n = 0,
                    r = t.length,
                    o = arguments.length,
                    i = new Array(o > 1 ? o - 1 : 0),
                    a = 1;
                  a < o;
                  a++
                )
                  i[a - 1] = arguments[a];
                for (; n < r; n += 1) {
                  var s;
                  (s = t[n]).fn.apply(s, i);
                }
                return this;
              },
            },
            {
              key: "off",
              value: function (e, t) {
                var n = this.events,
                  r = n[e],
                  o = [];
                if (r && t)
                  for (var i = 0, a = r.length; i < a; i++)
                    r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
                return o.length ? (n[e] = o) : delete n[e], this;
              },
            },
          ]) && i(t.prototype, n),
          r && i(t, r),
          e
        );
      })())();
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var c = {};
      function l(e) {
        if (e && e.nodeType === Node.ELEMENT_NODE)
          return (
            e.hasAttribute("data-controller") ||
            e.querySelectorAll("[data-controller]").length > 0 ||
            (function (e) {
              return (
                e.hasAttribute("data-content-field") &&
                "site-title" === e.getAttribute("data-content-field")
              );
            })(e)
          );
      }
      function f(e, t) {
        return (
          !!(e.element && t.element && e.fn && t.fn) &&
          e.element === t.element &&
          e.fn === t.fn
        );
      }
      function d(e) {
        var t = Array.from(document.querySelectorAll("[data-controller]")),
          n = [],
          r = [],
          o = [];
        return (
          t.forEach(function (e) {
            e.getAttribute("data-controller")
              .split(",")
              .forEach(function (t) {
                t = t.trim();
                var r = c[t];
                r && n.push({ namespace: t, element: e, fn: r });
              });
          }),
          e.forEach(function (e) {
            n.some(function (t) {
              return f(e, t);
            })
              ? (r.push(e),
                (n = n.filter(function (t) {
                  return !f(e, t);
                })))
              : o.push(e);
          }),
          { newControllers: n, activeControllers: r, deletedControllers: o }
        );
      }
      function p(e) {
        var t = e.newControllers,
          n = e.activeControllers,
          r = e.deletedControllers;
        t.forEach(function (e) {
          e.methods = (function (e) {
            return e.fn && e.element ? e.fn(e.element) : null;
          })(e);
          var t = [];
          if (e.element.hasAttribute("data-controllers-bound")) {
            var n = e.element
              .getAttribute("data-controllers-bound")
              .split(", ");
            t = t.concat(n);
          }
          t.push(e.namespace),
            e.element.setAttribute("data-controllers-bound", t.join(", "));
        }),
          n.forEach(function (e) {
            e.methods &&
              e.methods.sync &&
              e.methods.sync.apply(e.element, null);
          }),
          r.forEach(function (e) {
            e.methods && e.methods.destroy && e.methods.destroy();
          });
      }
      function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = d(e),
          r = n.newControllers,
          o = n.activeControllers,
          i = n.deletedControllers;
        p({ newControllers: r, activeControllers: o, deletedControllers: i }),
          t || ((e.length = 0), e.push.apply(e, s(o).concat(s(r)))),
          a.trigger("controllers:refresh");
      }
      var m = {
        register: function (e, t) {
          c[e] = t;
        },
        initialize: function () {
          var e,
            t,
            n,
            r = !!window.Static.SQUARESPACE_CONTEXT.authenticatedAccount,
            i = [];
          (e = function () {
            h(i);
          }),
            (n = document.body),
            (t = new MutationObserver(function (r) {
              n && n.ownerDocument && n.ownerDocument.defaultView && Array
                ? r.forEach(function (t) {
                    if ("childList" === t.type) {
                      var n = Array.from(t.removedNodes).filter(function (e) {
                          return l(e);
                        }),
                        r = Array.from(t.addedNodes).filter(function (e) {
                          return l(e);
                        });
                      (r.length || n.length) &&
                        e({ addedNodes: r, removedNodes: n });
                    }
                  })
                : t.disconnect();
            })).observe(n, { childList: !0, subtree: !0 }),
            r &&
              o.a.watch(["section-store-initialized"], function (e) {
                h(i);
              }),
            ["interactive", "complete"].includes(document.readyState)
              ? h(i, !1)
              : document.addEventListener(
                  "DOMContentLoaded",
                  h.bind(null, i, !1)
                );
        },
      };
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var w = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            b(this, "setState", function (e) {
              n.state = v(v({}, n.state), e);
            }),
            (this.props = v(v({}, this.constructor.defaultProps), t)),
            (this.state = v(
              v({}, this.constructor.defaultState),
              this.constructor.state
            ));
        }
        var t, n, r;
        return (
          (t = e),
          (n = [{ key: "destroy", value: function () {} }]) &&
            g(t.prototype, n),
          r && g(t, r),
          e
        );
      })();
      b(w, "defaultProps", {}), b(w, "defaultState", {});
      var _ = n(6);
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var k = new (n.n(_).a.Builder)({ collectImageInfo: !0 })
          .withLazyLoading()
          .build(),
        P = k.loadLazy;
      k.loadLazy = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return P.call(k, e, x({ allowSaveData: !0 }, t), {
          rootMargin: "300px",
          thresholds: [],
        });
      };
      var T = k.loadAllLazy;
      k.loadAllLazy = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0;
        return T.call(k, x({ allowSaveData: !0 }, e), t);
      };
      var E = k,
        A = n(1),
        I = n.n(A);
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function j(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var L,
        R = (function () {
          function e(t) {
            var n = this,
              r = t.waitTime,
              o = t.callback;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              j(this, "executeCallback", function (e) {
                e();
              }),
              j(this, "executeCallbacks", function () {
                n.callbacks.forEach(n.executeCallback);
              }),
              j(this, "executeRAF", function () {
                cancelAnimationFrame(n.requestID),
                  (n.requestID = requestAnimationFrame(n.executeCallbacks));
              }),
              (this.callbacks = new Set()),
              this.callbacks.add(o),
              (this.requestID = null),
              (this.execute = r
                ? (function (e) {
                    var t,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                    function r() {
                      e();
                    }
                    function o() {
                      t && clearTimeout(t), n ? (t = setTimeout(r, n)) : e();
                    }
                    return (
                      (o.cancel = function () {
                        clearTimeout(t);
                      }),
                      o
                    );
                  })(this.executeRAF, r)
                : this.executeCallbacks);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "add",
                value: function (e) {
                  this.callbacks.add(e);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  this.callbacks.delete(e);
                  var t = this.callbacks.size;
                  return (
                    !t &&
                      this.execute.cancel &&
                      (this.execute.cancel(),
                      cancelAnimationFrame(this.requestID)),
                    t
                  );
                },
              },
            ]) && C(t.prototype, n),
            r && C(t, r),
            e
          );
        })(),
        M = new Map(),
        D = new Map(),
        F = !1;
      function N(e) {
        e.execute();
      }
      function H() {
        M.forEach(N);
      }
      function z() {
        cancelAnimationFrame(L), (L = requestAnimationFrame(H));
      }
      function q(e) {
        if ("function" == typeof e) {
          var t = D.get(e);
          if (void 0 !== t) {
            var n = M.get(t).remove(e);
            D.delete(e), n || M.delete(t);
          }
        }
      }
      function B(e, t) {
        if ("function" == typeof e) {
          var n = e.cancel ? 0 : t,
            r = D.get(e),
            o = M.get(n);
          void 0 !== r && r !== n && q(e),
            D.set(e, n),
            o ? o.add(e) : M.set(n, new R({ waitTime: n, callback: e }));
        }
      }
      var U = {
          on: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 150;
            B(e, t), F || (window.addEventListener("resize", z), (F = !0));
          },
          off: function (e) {
            q(e),
              F &&
                !M.size &&
                (window.removeEventListener("resize", z), (F = !1));
          },
          trigger: z,
        },
        W = function (e, t, n) {
          return e < t ? t : e > n ? n : e;
        },
        V = function (e, t, n) {
          return e * (1 - n) + t * n;
        },
        Y = function (e, t, n) {
          var r = (function (e, t) {
              var n;
              for (n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1;
            })(n, e),
            o = e[r],
            i = e[r + 1],
            a = t[r];
          return ((n - o) / (i - o)) * (t[r + 1] - a) + a;
        },
        X = function (e) {
          return --e * e * e + 1;
        },
        G = function (e) {
          return e * e * e;
        },
        J = !!(
          "ontouchstart" in window ||
          window.navigator.maxTouchPoints > 0 ||
          window.navigator.msMaxTouchPoints > 0 ||
          (window.DocumentTouch && document instanceof DocumentTouch)
        ),
        Q = function (e) {
          return (
            (e.targetTouches && e.targetTouches[0]) ||
            (e.changedTouches && e.changedTouches[0]) ||
            e
          );
        },
        $ = (function () {
          var e = !1;
          try {
            window.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  e = { passive: !1 };
                },
              })
            );
          } catch (e) {}
          return e;
        })(),
        K = {
          touch: {
            press: "touchstart",
            release: ["touchend", "touchcancel"],
            enter: "touchstart",
            move: "touchmove",
            leave: ["touchend", "touchcancel"],
          },
          mouse: {
            press: "mousedown",
            release: ["mouseup"],
            enter: "mouseenter",
            move: "mousemove",
            leave: ["mouseleave"],
          },
        }[J ? "touch" : "mouse"];
      function Z(e) {
        return (Z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function te(e, t) {
        return (te =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ne(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ie(e);
          if (t) {
            var o = ie(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return re(this, n);
        };
      }
      function re(e, t) {
        return !t || ("object" !== Z(t) && "function" != typeof t) ? oe(e) : t;
      }
      function oe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ie(e) {
        return (ie = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ae(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var se = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && te(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = ne(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            ae(oe((t = o.call(this, e))), "onMouseMove", function (e) {
              var n = t.pos,
                r = n.innerWidth,
                o = n.innerHeight,
                i = Q(e),
                a = i.clientX,
                s = i.clientY;
              (t.cursor.x = a / r - 0.5), (t.cursor.y = s / o - 0.5);
            }),
            ae(oe(t), "onScroll", function () {
              (t.pos.scrollY = window.pageYOffset), t.update();
            }),
            ae(oe(t), "onResize", function () {
              (t.pos.innerWidth = window.innerWidth),
                (t.pos.innerHeight = window.innerHeight),
                t.onScroll(),
                t.items.forEach(function (e) {
                  var n = e.node.getBoundingClientRect();
                  (e.height = n.height),
                    (e.top = n.top + t.pos.scrollY),
                    (e.bottom = n.bottom + t.pos.scrollY);
                }),
                t.update();
            }),
            ae(oe(t), "onModalStateChange", function (e) {
              t.isPaused = e;
            }),
            ae(oe(t), "onIntersection", function (e) {
              e.forEach(function (e) {
                var n = Number(e.target.dataset.parallaxIndex),
                  r = t.items[n];
                (r.isIntersecting = e.intersectionRatio > 0),
                  r.isIntersecting &&
                    r.video &&
                    !r.isVideoSrcSet &&
                    ((r.video.src = r.videoSource.dataset.src),
                    (r.isVideoSrcSet = !0)),
                  (r.height = e.boundingClientRect.height),
                  (r.top = e.boundingClientRect.top + t.pos.scrollY),
                  (r.bottom = e.boundingClientRect.bottom + t.pos.scrollY);
              }),
                t.update();
            }),
            ae(oe(t), "tick", function () {
              (t.cursor.followX += 0.05 * (t.cursor.x - t.cursor.followX)),
                (t.cursor.followY += 0.05 * (t.cursor.y - t.cursor.followY)),
                t.update(),
                (t.rAFID = requestAnimationFrame(t.tick));
            }),
            ae(oe(t), "destroy", function () {
              t.unbindListeners(), t.unbindActiveListeners();
            });
          var n = t.props.nodes;
          return (
            (t.observer = null),
            window.IntersectionObserver &&
              (t.observer = new IntersectionObserver(t.onIntersection, {
                rootMargin: "30% 0px 30% 0px",
              })),
            (t.pos = {
              scrollY: window.pageYOffset,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            }),
            (t.cursor = { x: 0, y: 0, followX: 0, followY: 0 }),
            (t.items = n.map(function (e) {
              var n = e.querySelector("video"),
                r = e.querySelector("video source");
              return (
                !t.observer && n && (n.src = r.dataset.src),
                {
                  start: Number(e.dataset.parallaxStart),
                  end: Number(e.dataset.parallaxEnd),
                  cursorParallax: 1.5 * Number(e.dataset.parallaxCursor || 0),
                  lockY: "true" === e.dataset.parallaxLockY,
                  top: 0,
                  bottom: 0,
                  height: 0,
                  node: e,
                  isChild: "true" === e.dataset.parallaxChild,
                  child: e.querySelector("[data-parallax-child-node]"),
                  video: n,
                  videoSource: r,
                  isVideoSrcSet: !t.observer,
                  isIntersecting: !1,
                }
              );
            })),
            (t.len = t.items.length),
            (t.isPaused = !1),
            (t.rAFID = null),
            t.bindListeners(),
            t.bindActiveListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                var e = this;
                this.props.nodes.forEach(function (t, n) {
                  (t.dataset.parallaxIndex = n),
                    e.observer && e.observer.observe(t);
                }),
                  I.a.on(this.onScroll),
                  U.on(this.onResize),
                  a.on("modal:state:change", this.onModalStateChange),
                  this.onResize();
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                var e = this,
                  t = this.props.nodes;
                this.observer &&
                  t.forEach(function (t, n) {
                    e.observer.unobserve(t);
                  }),
                  I.a.off(this.onScroll),
                  U.off(this.onResize),
                  a.off("modal:state:change", this.onModalStateChange);
              },
            },
            {
              key: "bindActiveListeners",
              value: function () {
                J ||
                  (document.body.addEventListener(
                    "mousemove",
                    this.onMouseMove
                  ),
                  (this.rAFID = requestAnimationFrame(this.tick)));
              },
            },
            {
              key: "unbindActiveListeners",
              value: function () {
                J ||
                  ((this.cursor.x = 0),
                  (this.cursor.y = 0),
                  cancelAnimationFrame(this.rAFID),
                  document.body.removeEventListener(
                    "mousemove",
                    this.onMouseMove
                  ));
              },
            },
            {
              key: "observeVideo",
              value: function (e) {
                var t = this.items.find(function (t) {
                  return t.node === e;
                });
                if (t) {
                  var n = t.node.querySelector("video"),
                    r = t.node.querySelector("video source");
                  (t.video = n),
                    (t.videoSource = r),
                    (this.observer && !t.isIntersecting) ||
                      (n.src = r.dataset.src);
                }
              },
            },
            {
              key: "update",
              value: function () {
                if (!this.isPaused)
                  for (var e = 0; e < this.len; e += 1) {
                    var t = this.items[e];
                    if (t.isIntersecting) {
                      var n =
                          t.top -
                          this.pos.scrollY -
                          0.5 * this.pos.innerHeight +
                          0.5 * t.height,
                        r = W(n / this.pos.innerHeight, -1, 1),
                        o =
                          ~~(
                            1e3 *
                            V(
                              t.end,
                              t.start,
                              0.5 + r * (0.8 + 0.2 * G(Math.abs(r))) * 0.5
                            )
                          ) / 1e3;
                      t.progress = o;
                      var i = t.isChild ? t.child : t.node,
                        a = t.lockY
                          ? 0
                          : -t.cursorParallax * this.cursor.followX,
                        s = t.lockY
                          ? 0
                          : -t.cursorParallax * this.cursor.followY;
                      t.isChild
                        ? ((t.node.style.transform =
                            "translate3d(" + a + "px, " + s + "px, 0)"),
                          (i.style.transform =
                            "translate3d(0, " +
                            t.height * (0.01 * o) +
                            "px, 0)"))
                        : (i.style.transform =
                            "translate3d(" +
                            a +
                            "px, " +
                            (t.height * (0.01 * o) + s) +
                            "px, 0)"),
                        (t.lastProgress = o);
                    }
                  }
              },
            },
          ]) && ee(t.prototype, n),
          r && ee(t, r),
          i
        );
      })(w);
      function ue(e) {
        return (ue =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ce(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return le(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return le(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function de(e, t) {
        return (de =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function pe(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ye(e);
          if (t) {
            var o = ye(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return he(this, n);
        };
      }
      function he(e, t) {
        return !t || ("object" !== ue(t) && "function" != typeof t) ? me(e) : t;
      }
      function me(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ye(e) {
        return (ye = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ve(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ae(se, "defaultProps", { nodes: [] });
      var ge = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && de(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = pe(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            ve(me((t = o.call(this))), "onGroupOver", function (e) {
              var t = e.currentTarget.dataset.url;
              a.trigger("route:hover:over", t);
            }),
            ve(me(t), "onGroupOut", function (e) {
              var t = e.currentTarget.dataset.url;
              a.trigger("route:hover:out", t);
            }),
            ve(me(t), "onPageDataLoaded", function (e, n) {
              clearTimeout(t.addContentTimeout),
                (t.addContentTimeout = setTimeout(t.onAddPagesData, 100));
            }),
            ve(me(t), "onAddPagesData", function () {
              requestAnimationFrame(function () {
                Object.keys(t.routes).forEach(function (e) {
                  var n = t.routes[e].page;
                  if (n) {
                    var r = t.groups.find(function (t) {
                      return t.url === e;
                    });
                    r && t.addGroupImagesFromPage(r, n);
                  }
                });
              });
            }),
            ve(me(t), "lazyLoadImage", function (e) {
              var n = t.props.itemSelector;
              e.dataset.loadStarted ||
                ((e.dataset.loadStarted = !0),
                (e.onload = function () {
                  e.parentNode && (e.closest(n).dataset.loaded = !0);
                }),
                E.loadLazy(e, {
                  load: !0,
                  mode: "cover",
                  useAdvancedPositioning: !0,
                }));
            }),
            ve(me(t), "destroy", function () {
              t.unbindListeners(),
                t.parallax.destroy(),
                clearTimeout(t.addContentTimeout),
                a.trigger("route:hover:reset");
            });
          var n = t.props,
            r = n.groupSelector,
            s = n.itemParallaxSelector;
          return (
            (t.routes = window.ROUTES),
            (t.node = e),
            (t.isDestroyed = !1),
            (t.progress = { target: -1, pos: -1 }),
            (t.ref = { group: Array.from(t.node.querySelectorAll(r)) }),
            (t.groups = t.buildGroups(t.ref.group)),
            (t.parallax = new se({
              nodes: Array.from(t.node.querySelectorAll(s)),
            })),
            t.lazyLoadImages(),
            t.onAddPagesData(),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "buildGroups",
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.layouts,
                  o = n.groupImagesSelector,
                  i = n.itemSelector,
                  a = n.itemInnerSelector,
                  s = n.itemParallaxImageSelector;
                return e.map(function (n, u) {
                  var c = t.routes[n.dataset.url],
                    l = r[c.layout - 1] || r[u % r.length];
                  n.dataset.layout = l.layout;
                  var f = Array.from(n.querySelectorAll(i));
                  f.splice(l.maxImages).forEach(function (e) {
                    e.parentNode.removeChild(e);
                  });
                  var d = 0;
                  f.forEach(function (t, n) {
                    var r = t.querySelector(a),
                      o = l.parallaxConfig[n],
                      i = (u === e.length - 1 && n === f.length - 1) || o.child,
                      c = 0.75 * o.start,
                      d = 0.75 * o.end,
                      p = o.cursorParallax;
                    if (t.dataset.hasMainImage) {
                      var h = ce(
                          t.dataset.originalSize.split("x").map(function (e) {
                            return Number(e);
                          }),
                          2
                        ),
                        m = h[0],
                        y = h[1] / m;
                      r.style.paddingBottom = "".concat(100 * y, "%");
                    }
                    if (
                      ((r.dataset.parallax = !0),
                      (r.dataset.parallaxChild = i),
                      (r.dataset.parallaxStart = c),
                      (r.dataset.parallaxEnd = d),
                      (r.dataset.parallaxCursor = p),
                      i)
                    ) {
                      var v = r.querySelector(s);
                      (v.style.top = "".concat(-Math.abs(c), "%")),
                        (v.style.bottom = "".concat(-Math.abs(d), "%"));
                    }
                  });
                  var p = f.reduce(function (e, t) {
                    return "true" === t.dataset.hasMainImage
                      ? ((d = 1), e)
                      : e + 1;
                  }, 0);
                  return (
                    n.addEventListener("mouseover", t.onGroupOver),
                    n.addEventListener("mouseout", t.onGroupOut),
                    {
                      node: n,
                      items: f,
                      offsetCount: d,
                      additionalLoadCount: p,
                      layout: l,
                      url: n.dataset.url,
                      imageListNode: n.querySelector(o),
                      loaded: !1,
                    }
                  );
                });
              },
            },
            {
              key: "fillItemSlots",
              value: function (e, t) {
                var n = e.map(function (e) {
                    return { isPortrait: 1 === e, isFilled: !1, node: null };
                  }),
                  r = [];
                return (
                  this.mixinItemSlots({
                    slotInfo: n,
                    output: r,
                    galleryImages: t,
                    requireVideo: !0,
                  }),
                  this.mixinItemSlots({
                    slotInfo: n,
                    output: r,
                    galleryImages: t,
                    requireVideo: !1,
                  }),
                  this.mixinItemSlots({
                    slotInfo: n,
                    output: r,
                    galleryImages: t,
                    requireVideo: !1,
                  }),
                  r
                );
              },
            },
            {
              key: "isAlreadySlotted",
              value: function (e, t) {
                return !!~e.findIndex(function (e) {
                  return e === t;
                });
              },
            },
            {
              key: "mixinItemSlots",
              value: function () {
                for (
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.slotInfo,
                    n = e.output,
                    r = e.galleryImages,
                    o = e.requireVideo,
                    i = void 0 !== o && o,
                    a = 0,
                    s = r.length;
                  a < s;
                  a += 1
                ) {
                  var u = r[a];
                  if (
                    !(
                      (i && "true" !== u.dataset.video) ||
                      this.isAlreadySlotted(n, u)
                    )
                  )
                    for (
                      var c = u.dataset.originalSize
                          .split("x")
                          .map(function (e) {
                            return Number(e);
                          }),
                        l = ce(c, 2),
                        f = l[0],
                        d = l[1],
                        p = f < d,
                        h = 0,
                        m = t.length;
                      h < m;
                      h += 1
                    ) {
                      var y = t[h];
                      if (y.isPortrait === p && !y.isFilled) {
                        (n[h] = u), (y.node = u), (y.isFilled = !0);
                        break;
                      }
                    }
                }
              },
            },
            {
              key: "addGroupImagesFromPage",
              value: function (e, t) {
                var n = this,
                  r = this.props,
                  o = r.pageItemSelector,
                  i = r.pageItemImageSelector,
                  a = r.pageItemBlurSelector,
                  s = r.pageItemVideoSelector,
                  u = r.itemParallaxSelector,
                  c = r.itemInnerSelector,
                  l = r.itemParallaxImageSelector;
                if (!e.loaded) {
                  e.loaded = !0;
                  var f = document.createDocumentFragment(),
                    d = document.createElement("div");
                  (d.innerHTML = t), f.appendChild(d);
                  var p = e.layout.imageConfig;
                  this.mixinPageVideos(d);
                  var h = Array.from(d.querySelectorAll(o)).sort(function () {
                    return Math.random() - 0.5;
                  });
                  this.fillItemSlots(p.slice(e.offsetCount), h).forEach(
                    function (t, r) {
                      var o = ce(
                          t.dataset.originalSize.split("x").map(function (e) {
                            return Number(e);
                          }),
                          2
                        ),
                        f = o[0],
                        d = o[1] / f,
                        p = e.items[r + e.offsetCount],
                        h = "true" === t.dataset.video,
                        m = p.querySelector(c),
                        y = t.querySelector(a),
                        v = t.querySelector(i),
                        g = t.querySelector(s),
                        b = p.querySelector(l),
                        w = t.querySelector(l),
                        _ = b.getAttribute("style") || "";
                      if (
                        ((m.style.paddingBottom = "".concat(100 * d, "%")),
                        b.setAttribute(
                          "style",
                          _ + " " + w.getAttribute("style")
                        ),
                        b.appendChild(y),
                        b.appendChild(h ? g : v),
                        h)
                      ) {
                        var S = p.querySelector(u);
                        n.parallax.observeVideo(S);
                      }
                      n.lazyLoadImages();
                    }
                  );
                }
              },
            },
            {
              key: "mixinPageVideos",
              value: function (e) {
                var t = this.props.pageGallerySelector,
                  n = e.querySelector(t),
                  r = Array.from(e.querySelectorAll(".video-block")),
                  o = document.createDocumentFragment();
                r.forEach(function (e) {
                  var t = JSON.parse(e.dataset.blockJson),
                    n = document.createElement("div");
                  n.innerHTML = t.description.html;
                  var r = n.querySelector("p"),
                    i = r ? r.innerText : null,
                    a = t.width || 300,
                    s = t.height || 400;
                  if (
                    (1 === Math.floor(2 * Math.random()) &&
                      ((a = t.width || 400), (s = t.height || 300)),
                    i)
                  ) {
                    var u =
                        '\n        <figure class="parallax-item" data-video="true" data-original-size="'
                          .concat(a, "x")
                          .concat(
                            s,
                            '">\n          <div class="parallax-item-inner">\n            <div class="parallax-item-child">\n              <div\n                class="parallax-item-image"\n                style="--focal-x: {mediaFocalPoint.x}; --focal-y: {mediaFocalPoint.y};"\n                data-parallax-image data-parallax-child-node\n              >\n                <div class="parallax-item-image-blur" style=""></div>\n                <video autoplay loop muted playsinline>\n                  <source data-src="'
                          )
                          .concat(
                            i,
                            '">\n                </video>\n              </div>\n            </div>\n          </div>\n        </figure>\n      '
                          ),
                      c = document.createElement("div");
                    c.innerHTML = u;
                    var l = c.firstElementChild;
                    return o.appendChild(l), l;
                  }
                }),
                  n.appendChild(o);
              },
            },
            {
              key: "lazyLoadImages",
              value: function () {
                var e = this.props.imageSelector;
                Array.from(this.node.querySelectorAll(e)).forEach(
                  this.lazyLoadImage
                );
              },
            },
            {
              key: "bindListeners",
              value: function () {
                a.on("router:page:added", this.onPageDataLoaded);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                var e = this;
                a.off("router:page:added", this.onPageDataLoaded),
                  this.groups.forEach(function (t) {
                    t.node &&
                      (t.node.removeEventListener("mouseover", e.onGroupOver),
                      t.node.removeEventListener("mouseout", e.onGroupOut));
                  });
              },
            },
          ]) && fe(t.prototype, n),
          r && fe(t, r),
          i
        );
      })(w);
      ve(ge, "defaultProps", {
        imageSelector: ".portfolio-list-group img",
        groupSelector: ".portfolio-list-group",
        groupImagesSelector: ".portfolio-list-group-images",
        itemSelector: ".parallax-item",
        itemInnerSelector: ".parallax-item-inner",
        itemImageSelector: "img",
        itemParallaxSelector: "[data-parallax]",
        itemParallaxImageSelector: "[data-parallax-image]",
        pageGallerySelector: ".gallery-parallax",
        pageItemSelector: ".gallery-parallax .parallax-item",
        pageItemBlurSelector: ".parallax-item-image-blur",
        pageItemImageSelector: ".parallax-item-image-img",
        pageItemVideoSelector: "video",
        backgroundColorVariableProperty: "--background-color",
        layouts: [
          {
            layout: "one",
            maxImages: 2,
            imageConfig: [0, 1],
            parallaxConfig: [
              { start: -20, end: 25, child: !1, cursorParallax: 20 },
              { start: 25, end: -15, child: !1, cursorParallax: 70 },
            ],
          },
          {
            layout: "two",
            maxImages: 3,
            imageConfig: [1, 1, 1],
            parallaxConfig: [
              { start: 30, end: -35, child: !1, cursorParallax: 150 },
              { start: -5, end: 5, child: !0, cursorParallax: 50 },
              { start: 25, end: -40, child: !1, cursorParallax: 30 },
            ],
          },
          {
            layout: "three",
            maxImages: 2,
            imageConfig: [1, 0],
            parallaxConfig: [
              { start: -15, end: 15, child: !1, cursorParallax: 80 },
              { start: -15, end: 10, child: !1, cursorParallax: 30 },
            ],
          },
          {
            layout: "four",
            maxImages: 2,
            imageConfig: [0, 1],
            parallaxConfig: [
              { start: -10, end: 20, child: !1, cursorParallax: 20 },
              { start: 30, end: -35, child: !1, cursorParallax: 80 },
            ],
          },
          {
            layout: "five",
            maxImages: 3,
            imageConfig: [1, 1, 0],
            parallaxConfig: [
              { start: -25, end: 15, child: !1, cursorParallax: 20 },
              { start: 5, end: -5, child: !0, cursorParallax: 80 },
              { start: -10, end: 10, child: !1, cursorParallax: 30 },
            ],
          },
          {
            layout: "six",
            maxImages: 2,
            imageConfig: [0, 1],
            parallaxConfig: [
              { start: -15, end: -10, child: !1, cursorParallax: 20 },
              { start: 5, end: -5, child: !0, cursorParallax: 40 },
            ],
          },
          {
            layout: "seven",
            maxImages: 2,
            imageConfig: [1, 1],
            parallaxConfig: [
              { start: -15, end: 10, child: !1, cursorParallax: 80 },
              { start: 35, end: -35, child: !1, cursorParallax: 10 },
            ],
          },
          {
            layout: "eight",
            maxImages: 3,
            imageConfig: [0, 1, 1],
            parallaxConfig: [
              { start: 20, end: -10, child: !1, cursorParallax: 50 },
              { start: 5, end: -5, child: !0, cursorParallax: 130 },
              { start: 25, end: -40, child: !1, cursorParallax: 20 },
            ],
          },
          {
            layout: "nine",
            maxImages: 2,
            imageConfig: [1, 1],
            parallaxConfig: [
              { start: -20, end: 25, child: !1, cursorParallax: 20 },
              { start: 25, end: -15, child: !1, cursorParallax: 70 },
            ],
          },
          {
            layout: "ten",
            maxImages: 3,
            imageConfig: [1, 1, 1],
            parallaxConfig: [
              { start: 30, end: -35, child: !1, cursorParallax: 150 },
              { start: -5, end: 5, child: !0, cursorParallax: 50 },
              { start: 25, end: -40, child: !1, cursorParallax: 30 },
            ],
          },
          {
            layout: "eleven",
            maxImages: 1,
            imageConfig: [0],
            parallaxConfig: [
              { start: 25, end: -25, child: !1, cursorParallax: 30 },
            ],
          },
          {
            layout: "twelve",
            maxImages: 1,
            imageConfig: [1],
            parallaxConfig: [
              { start: 30, end: -35, child: !1, cursorParallax: 30 },
            ],
          },
        ],
      });
      function be(e) {
        return (be =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function we(e, t) {
        return (we =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _e(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Oe(e);
          if (t) {
            var o = Oe(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Se(this, n);
        };
      }
      function Se(e, t) {
        return !t || ("object" !== be(t) && "function" != typeof t) ? xe(e) : t;
      }
      function xe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Oe(e) {
        return (Oe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ke(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Pe = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && we(e, t);
        })(n, e);
        var t = _e(n);
        function n(e) {
          var r;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            ke(xe((r = t.call(this))), "destroy", function () {});
          var o = r.props.isolateSelector,
            i = window.location !== window.parent.location;
          (r.node = e),
            i || (r.node.dataset.static = !0),
            (r.ref = { isolate: r.node.querySelector(o) });
          var a = window.ROUTES[r.node.dataset.route];
          return a && a.isLightColor
            ? ((r.ref.isolate.style.backgroundColor = a.color), r)
            : Se(r);
        }
        return n;
      })(w);
      ke(Pe, "defaultProps", { isolateSelector: ".portfolio-detail-isolate" });
      function Te(e) {
        return (Te =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ee(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Ae(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ae(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ae(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ie(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Ce(e, t) {
        return (Ce =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function je(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Me(e);
          if (t) {
            var o = Me(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Le(this, n);
        };
      }
      function Le(e, t) {
        return !t || ("object" !== Te(t) && "function" != typeof t) ? Re(e) : t;
      }
      function Re(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Me(e) {
        return (Me = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function De(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Fe = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Ce(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = je(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            De(Re((t = o.call(this))), "onResize", function () {
              var e = t.ref.wrapper.clientWidth,
                n = t.ref.wrapper.clientHeight,
                r = Math.min(e / t.width, n / t.height);
              (t.ref.imageWrapper.style.width = t.width * r + "px"),
                (t.ref.imageWrapper.style.height = t.height * r + "px");
            }),
            De(Re(t), "destroy", function () {
              t.unbindListeners();
            });
          var n = t.props,
            r = n.wrapperSelector,
            a = n.imageWrapperSelector;
          if (
            ((t.node = e),
            (t.ref = {
              wrapper: t.node.querySelector(r),
              imageWrapper: t.node.querySelector(a),
            }),
            !t.ref.imageWrapper)
          )
            return Le(t);
          var s = Ee(
              t.ref.imageWrapper.dataset.originalSize
                .split("x")
                .map(function (e) {
                  return Number(e);
                }),
              2
            ),
            u = s[0],
            c = s[1];
          return (
            u < c && (t.node.dataset.portrait = !0),
            (t.width = u),
            (t.height = c),
            t.loadImage(),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                U.on(this.onResize), this.onResize();
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                U.off(this.onResize);
              },
            },
            {
              key: "loadImage",
              value: function () {
                var e = this,
                  t = this.node.querySelector("img");
                (t.onload = function () {
                  (e.node.dataset.loaded = !0), (t.dataset.loaded = !0);
                }),
                  E.load(t, {
                    load: !0,
                    mode: "cover",
                    useAdvancedPositioning: !0,
                  });
              },
            },
          ]) && Ie(t.prototype, n),
          r && Ie(t, r),
          i
        );
      })(w);
      De(Fe, "defaultProps", {
        wrapperSelector: ".portfolio-intro-wrapper",
        imageWrapperSelector: ".portfolio-intro-image",
      });
      function Ne(e) {
        return (Ne =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function He(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return ze(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ze(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function qe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Be(e, t) {
        return (Be =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ue(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Ye(e);
          if (t) {
            var o = Ye(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return We(this, n);
        };
      }
      function We(e, t) {
        return !t || ("object" !== Ne(t) && "function" != typeof t) ? Ve(e) : t;
      }
      function Ve(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ye(e) {
        return (Ye = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Xe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Ge = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Be(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Ue(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Xe(Ve((t = o.call(this))), "lazyLoadImage", function (e) {
              var n = t.props,
                r = n.itemOuterSelector,
                o = n.itemSelector,
                i = n.itemParallaxSelector,
                a = e.closest(r),
                s = e.closest(o),
                u = s.querySelector(i);
              if (!e.dataset.loadStarted) {
                e.dataset.loadStarted = !0;
                var c = He(
                    e.dataset.imageDimensions.split("x").map(function (e) {
                      return Number(e);
                    }),
                    2
                  ),
                  l = c[0],
                  f = c[1],
                  d = f / l;
                (u.style.paddingBottom = "".concat(100 * d, "%")),
                  (a.dataset.portrait = l < f),
                  (e.onload = function () {
                    e.parentNode && (s.dataset.loaded = !0);
                  }),
                  E.loadLazy(e, {
                    load: !0,
                    mode: "cover",
                    useAdvancedPositioning: !0,
                  });
              }
            }),
            Xe(Ve(t), "onPageDataLoaded", function (e, n) {
              if (e === t.route && !t.isRouteLoaded) {
                var r = t.props,
                  o = r.pageItemSelector,
                  i = r.pageItemImageContainerSelector,
                  a = r.pageItemImageSelector,
                  s = r.pageItemBlurSelector;
                t.isRouteLoaded = !0;
                var u = document.createElement("div");
                u.innerHTML = n;
                var c = Array.from(u.querySelectorAll(o)).sort(function () {
                  return Math.random() - 0.5;
                })[0];
                if (c) {
                  var l = t.ref.secondaryImageContainer,
                    f = l.getAttribute("style") || "",
                    d = c.querySelector(i),
                    p = c.querySelector(s),
                    h = c.querySelector(a);
                  l.setAttribute(
                    "style",
                    "".concat(f, " ").concat(d.getAttribute("style"))
                  ),
                    l.appendChild(p),
                    l.appendChild(h),
                    t.lazyLoadImages();
                }
              }
            }),
            Xe(Ve(t), "onPaginationOver", function (e) {
              var t = e.currentTarget.dataset.url;
              a.trigger("route:hover:over", t);
            }),
            Xe(Ve(t), "onPaginationOut", function (e) {
              var t = e.currentTarget.dataset.url;
              a.trigger("route:hover:out", t);
            }),
            Xe(Ve(t), "onIntersection", function (e) {
              He(e, 1)[0].isIntersecting ? t.show() : t.hide();
            }),
            Xe(Ve(t), "destroy", function () {
              t.parallax.destroy(),
                t.unbindListeners(),
                a.trigger("route:hover:reset");
            });
          var n = t.props,
            r = n.itemSelector,
            s = n.itemParallaxSelector,
            u = n.secondaryImageContainerSelector,
            c = n.nextButtonBackSelector;
          (t.node = e),
            (t.routes = window.ROUTES),
            (t.route = t.node.dataset.url),
            (t.observer = null);
          var l = t.routes[t.route];
          return (
            (t.ref = {
              items: Array.from(t.node.querySelectorAll(r)),
              secondaryImageContainer: t.node.querySelector(u),
              nextButtonBack: t.node.querySelector(c),
            }),
            (t.isRouteLoaded = !1),
            t.lazyLoadImages(),
            (t.parallax = new se({
              nodes: Array.from(t.node.querySelectorAll(s)),
            })),
            t.bindListeners(),
            l &&
              l.isLightColor &&
              (t.ref.nextButtonBack.style.backgroundColor = l.color),
            t.routes[t.route].page
              ? (t.onPageDataLoaded(t.route, t.routes[t.route].page), We(t))
              : (a.trigger("router:preload:route", t.route), t)
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "lazyLoadImages",
              value: function () {
                var e = this.props.imageSelector;
                Array.from(this.node.querySelectorAll(e)).forEach(
                  this.lazyLoadImage
                );
              },
            },
            {
              key: "bindListeners",
              value: function () {
                a.on("router:page:added", this.onPageDataLoaded),
                  this.node.addEventListener(
                    "mouseover",
                    this.onPaginationOver
                  ),
                  this.node.addEventListener("mouseout", this.onPaginationOut),
                  window.IntersectionObserver
                    ? ((this.observer = new IntersectionObserver(
                        this.onIntersection
                      )),
                      this.observer.observe(this.ref.nextButtonBack))
                    : this.show();
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                a.off("router:page:added", this.onPageDataLoaded),
                  this.node.removeEventListener(
                    "mouseover",
                    this.onPaginationOver
                  ),
                  this.node.removeEventListener(
                    "mouseout",
                    this.onPaginationOut
                  ),
                  this.observer && this.observer.unobserve(this.node);
              },
            },
            {
              key: "show",
              value: function () {
                this.node.dataset.shown = !0;
              },
            },
            {
              key: "hide",
              value: function () {
                this.node.dataset.shown = !1;
              },
            },
          ]) && qe(t.prototype, n),
          r && qe(t, r),
          i
        );
      })(w);
      Xe(Ge, "defaultProps", {
        itemOuterSelector: ".portfolio-pagination-image",
        itemSelector: ".parallax-item",
        itemParallaxSelector: ".parallax-item-inner",
        pageItemSelector: ".gallery-parallax .parallax-item",
        secondaryImageContainerSelector:
          ".portfolio-pagination-image-secondary .parallax-item-image",
        pageItemImageContainerSelector: ".parallax-item-image",
        pageItemImageSelector: ".parallax-item-image-img",
        pageItemBlurSelector: ".parallax-item-image-blur",
        nextButtonBackSelector: ".portfolio-pagination-next--back",
        imageSelector: "img",
      });
      function Je(e) {
        return (Je =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Qe(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return $e(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return $e(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function $e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Ze(e, t) {
        return (Ze =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function et(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = rt(e);
          if (t) {
            var o = rt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return tt(this, n);
        };
      }
      function tt(e, t) {
        return !t || ("object" !== Je(t) && "function" != typeof t) ? nt(e) : t;
      }
      function nt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function rt(e) {
        return (rt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ot(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var it = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Ze(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = et(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            ot(nt((t = o.call(this))), "lazyLoadImage", function (e) {
              var n = t.props.imageSelector,
                r = e.querySelector(n);
              r &&
                ((r.onload = function () {
                  (e.dataset.loaded = !0), (r.dataset.loaded = !0);
                }),
                E.loadLazy(r, {
                  load: !0,
                  mode: "cover",
                  useAdvancedPositioning: !0,
                }));
            }),
            ot(nt(t), "destroy", function () {
              t.parallax.destroy();
            });
          var n = t.props,
            r = n.listSelector,
            a = n.itemSelector,
            s = n.itemParallaxSelector;
          (t.node = e),
            t.node.dataset.transientGalleryId &&
              console.log(
                "TRANSIENT GALLERY ID: " + t.node.dataset.transientGalleryId
              );
          var u = window.location !== window.parent.location,
            c = t.node.querySelector(r);
          return (
            u || t.addVideos(c),
            (t.ref = {
              list: c,
              items: Array.from(t.node.querySelectorAll(a)),
            }),
            (t.items = t.shuffle(t.ref.items)),
            t.configureItems(t.items),
            t.ref.items.forEach(t.lazyLoadImage),
            (t.parallax = new se({
              nodes: Array.from(t.node.querySelectorAll(s)),
            })),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "addVideos",
              value: function (e) {
                var t = Array.from(document.querySelectorAll(".video-block")),
                  n = document.createDocumentFragment();
                t.forEach(function (e) {
                  e.closest(".page-section").style.display = "none";
                  var t = JSON.parse(e.dataset.blockJson),
                    r = document.createElement("div");
                  r.innerHTML = t.description.html;
                  var o = r.querySelector("p"),
                    i = o ? o.innerText : null,
                    a = t.thumbnailUrl.split("_")[0] + ".jpg",
                    s = t.width || 300,
                    u = t.height || 400;
                  1 === Math.floor(2 * Math.random()) &&
                    ((s = t.width || 400), (u = t.height || 300));
                  var c = "";
                  c = i
                    ? (c =
                        '\n        <figure class="parallax-item" data-video="true" data-original-size="'
                          .concat(s, "x")
                          .concat(
                            u,
                            '">\n          <div class="parallax-item-inner">\n            <div class="parallax-item-child">\n              <div\n                class="parallax-item-image"\n                style="--focal-x: {mediaFocalPoint.x}; --focal-y: {mediaFocalPoint.y};"\n                data-lightbox=\'{"video": '
                          )
                          .concat(
                            JSON.stringify(t),
                            ', "videoAutoplay": true, "src":"'
                          )
                          .concat(a, '", "originalSize": "')
                          .concat(s, "x")
                          .concat(
                            u,
                            '"}\'\n                data-parallax-image data-parallax-child-node\n              >\n                <div class="parallax-item-image-blur" style="background-image: url('
                          )
                          .concat(
                            a,
                            ')"></div>\n                <img class="parallax-item-image-img" src="'
                          )
                          .concat(
                            a,
                            '"  data-load="false" />\n                <video autoplay loop muted playsinline>\n                  <source data-src="'
                          )
                          .concat(
                            i,
                            '">\n                </video>\n              </div>\n            </div>\n          </div>\n        </figure>\n      '
                          ))
                    : '\n        <figure\n          class="parallax-item"\n          data-video="true"\n          data-video-playable="true"\n          data-original-size="'
                        .concat(s, "x")
                        .concat(
                          u,
                          '"\n        >\n          <div class="parallax-item-inner">\n            <div class="parallax-item-child">\n              <div\n                class="parallax-item-image"\n                style="--focal-x: {mediaFocalPoint.x}; --focal-y: {mediaFocalPoint.y};"\n                data-lightbox=\'{"video": '
                        )
                        .concat(JSON.stringify(t), ', "src":"')
                        .concat(a, '", "originalSize": "')
                        .concat(s, "x")
                        .concat(
                          u,
                          '"}\'\n                data-parallax-image data-parallax-child-node\n              >\n                <div class="parallax-item-image-blur" style="background-image: url('
                        )
                        .concat(
                          a,
                          ')""></div>\n                <img class="parallax-item-image-img" src="'
                        )
                        .concat(
                          a,
                          '"  data-load="false" />\n              </div>\n            </div>\n          </div>\n        </figure>\n      '
                        );
                  var l = document.createElement("div");
                  l.innerHTML = c;
                  var f = l.firstElementChild;
                  return n.appendChild(f), f;
                }),
                  e.appendChild(n);
              },
            },
            {
              key: "shuffle",
              value: function (e) {
                var t = e.sort(function () {
                  return Math.random() - 0.5;
                });
                return (
                  e.forEach(function (e) {
                    e.parentNode.appendChild(e);
                  }),
                  t
                );
              },
            },
            {
              key: "configureItems",
              value: function (e) {
                var t = this.props,
                  n = t.itemParallaxSelector,
                  r = t.itemParallaxImageSelector,
                  o = t.parallaxConfig,
                  i = 0,
                  a = 0,
                  s = e.map(function (e) {
                    var t = Qe(
                        e.dataset.originalSize.split("x").map(function (e) {
                          return Number(e);
                        }),
                        2
                      ),
                      n = t[0],
                      r = t[1];
                    return {
                      node: e,
                      width: n,
                      height: r,
                      isPortrait: n < r,
                      isVideo: "true" === e.dataset.video,
                      isFullWidth: !1,
                      isRightAlign: !1,
                      isInFront: !1,
                    };
                  }),
                  u = s.reduce(
                    function (e, t, n) {
                      var r = t.isPortrait;
                      return (
                        t.isVideo,
                        0 === n
                          ? e
                          : ((n % 2 != 1 && r) || e.indexedInFront.push(n),
                            r
                              ? (n === e.lastPortraitIndex + 1 ||
                                  n % 2 != 0 ||
                                  ((e.lastPortraitIndex = n),
                                  e.indexedPortrait.push(n)),
                                e)
                              : (n === e.lastLandscapeIndex + 1 ||
                                  ((e.lastLandscapeIndex = n),
                                  e.indexedLandscape.push(n)),
                                e))
                      );
                    },
                    {
                      indexedPortrait: [],
                      indexedLandscape: [],
                      indexedInFront: [],
                      lastLandscapeIndex: -1,
                      lastPortraitIndex: -1,
                    }
                  ),
                  c = u.indexedLandscape,
                  l = u.indexedPortrait,
                  f = u.indexedInFront,
                  d = c
                    .sort(function () {
                      return Math.random() - 0.5;
                    })
                    .slice(0, Math.ceil(c.length / 5)),
                  p = l
                    .sort(function () {
                      return Math.random() - 0.5;
                    })
                    .slice(0, Math.ceil(l.length / 3)),
                  h = f
                    .sort(function () {
                      return Math.random() - 0.5;
                    })
                    .slice(0, Math.ceil(f.length / 2));
                s.forEach(function (e, t) {
                  var n = !!~d.indexOf(t),
                    r = !!~p.indexOf(t),
                    o = !!~h.indexOf(t);
                  (e.isInFront = !n && !r && o),
                    (e.isFullWidth = n),
                    (e.isRightAlign = r);
                });
                for (var m = 0, y = s.length; m < y; m += 1) {
                  var v = s[m],
                    g = v.node,
                    b = v.isPortrait,
                    w = v.isFullWidth,
                    _ = v.isRightAlign,
                    S = v.isInFront,
                    x = v.width,
                    O = v.height,
                    k = g.querySelector(n),
                    P = "true" === g.dataset.video,
                    T = O / x,
                    E = o[m % (o.length - 1)],
                    A = !P && (m === y - 1 || (!(b || w || _) && E.child)),
                    I = E.cursorParallax,
                    C = !1;
                  w || _
                    ? (C = !0)
                    : ((g.dataset.portrait = b),
                      (g.dataset.side = m % 2 == 0 ? "right" : "left"));
                  var j = A ? 5 : E.start,
                    L = A ? -5 : E.end;
                  if (
                    ((g.dataset.fullWidth = w),
                    (g.dataset.rightAlign = _),
                    (g.dataset.index = (b ? i : a) + 1),
                    (g.dataset.front = S),
                    (k.style.paddingBottom = "".concat(100 * T, "%")),
                    (k.dataset.parallax = !0),
                    (k.dataset.parallaxChild = A),
                    (k.dataset.parallaxStart = j),
                    (k.dataset.parallaxEnd = L),
                    (k.dataset.parallaxCursor = I),
                    (k.dataset.parallaxLockY = C),
                    b ? ((i += 1), (i %= 3)) : ((a += 1), (a %= 3)),
                    A)
                  ) {
                    var R = k.querySelector(r);
                    (R.style.top = "".concat(-Math.abs(L), "%")),
                      (R.style.bottom = "".concat(-Math.abs(j), "%"));
                  }
                }
              },
            },
          ]) && Ke(t.prototype, n),
          r && Ke(t, r),
          i
        );
      })(w);
      ot(it, "defaultProps", {
        listSelector: ".gallery-parallax-list",
        itemSelector: ".parallax-item",
        itemParallaxSelector: ".parallax-item-inner",
        itemParallaxImageSelector: ".parallax-item-image",
        imageSelector: ".parallax-item-image-img",
        parallaxConfig: [
          { start: 25, end: -25, child: !1, cursorParallax: 30 },
          { start: 35, end: -35, child: !1, cursorParallax: 100 },
          { start: 5, end: -5, child: !0, cursorParallax: 20 },
          { start: 20, end: -20, child: !1, cursorParallax: 20 },
          { start: 40, end: -40, child: !1, cursorParallax: 120 },
          { start: 5, end: -5, child: !0, cursorParallax: 45 },
          { start: 25, end: -25, child: !1, cursorParallax: 30 },
          { start: 10, end: -10, child: !1, cursorParallx: 90 },
        ],
      });
      function at(e) {
        return (at =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function st(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return lt(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          ct(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ut(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          ct(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ct(e, t) {
        if (e) {
          if ("string" == typeof e) return lt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? lt(e, t)
              : void 0
          );
        }
      }
      function lt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ft(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function dt(e, t) {
        return (dt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function pt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = yt(e);
          if (t) {
            var o = yt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return ht(this, n);
        };
      }
      function ht(e, t) {
        return !t || ("object" !== at(t) && "function" != typeof t) ? mt(e) : t;
      }
      function mt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function yt(e) {
        return (yt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function vt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var gt = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && dt(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = pt(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            vt(mt((t = o.call(this))), "loadImage", function (e) {
              e.image &&
                !e.isLoading &&
                ((e.isLoading = !0),
                (e.image.onload = function () {
                  e.node.dataset.loaded = !0;
                }),
                E.load(e.image, {
                  load: !0,
                  mode: "contain",
                  useAdvancedPositioning: !0,
                }));
            }),
            vt(mt(t), "onResize", function () {
              (t.pos.innerWidth = window.innerWidth),
                (t.pos.regionWidth = t.node.clientWidth),
                (t.pos.regionHeight = t.node.clientHeight),
                (t.pos.innerHeight = 0.9 * t.pos.regionHeight),
                t.update();
            }),
            vt(mt(t), "onIntersection", function (e) {
              ut(e, 1)[0].isIntersecting ? t.start() : t.stop();
            }),
            vt(mt(t), "onMouseMove", function (e) {
              var n = t.pos,
                r = n.innerWidth,
                o = n.innerHeight,
                i = Q(e),
                a = i.clientX,
                s = i.clientY;
              (t.cursor.x = a / r - 0.5), (t.cursor.y = s / o - 0.5);
            }),
            vt(mt(t), "onModalStateChange", function (e) {
              t.isPaused = e;
            }),
            vt(mt(t), "onIdleStateChange", function (e) {
              t.pos.idleTargetSpeed = e ? 1 : 0;
            }),
            vt(mt(t), "tick", function () {
              var e = t.props.speed;
              (t.pos.idleSpeed +=
                0.01 * (t.pos.idleTargetSpeed - t.pos.idleSpeed)),
                (t.cursor.followX +=
                  0.01 * (0.5 + t.cursor.x - t.cursor.followX)),
                (t.cursor.followY += 0.01 * (t.cursor.y - t.cursor.followY)),
                (t.cursor.parallaxX +=
                  0.04 * (t.cursor.x - t.cursor.parallaxX)),
                (t.cursor.parallaxY +=
                  0.04 * (t.cursor.y - t.cursor.parallaxY));
              var n = 1 + W(((t.pos.innerWidth - 500) / 2e3) * 2, 0, 2);
              (t.pos.diff =
                Math.min(2, e * n + t.pos.idleSpeed) *
                Math.max(t.pos.idleSpeed, t.cursor.followX)),
                t.update(),
                (t.pos.diff = 0),
                (t.rAFID = requestAnimationFrame(t.tick));
            }),
            vt(mt(t), "update", function () {
              if (!t.isPaused)
                for (
                  var e = t.props,
                    n = e.slots,
                    r = e.parallax,
                    o = t.pos,
                    i = o.regionWidth,
                    a = o.innerWidth,
                    s = 1.5 * i,
                    u = o.innerHeight,
                    c = 0.5 * (s - i),
                    l = 0;
                  l < t.len;
                  l += 1
                ) {
                  var f = t.items[l],
                    d = t.pos.diff,
                    p = f.staticX * s - d;
                  p < 1.2 * s && t.loadImage(f),
                    p < 1.3 * s &&
                      (d = t.pos.diff * (1 + 0.0035 * f.multiplier));
                  var h = f.x * s - d;
                  if (((f.x = h / s), (f.staticX = p / s), f.staticX < -0.2)) {
                    (t.pos.parallaxIndex += 1),
                      (t.pos.slotIndex += 1),
                      (t.pos.slotIndex %= n.length),
                      (t.pos.parallaxIndex %= r.length);
                    var m = r[t.pos.parallaxIndex];
                    (f.x = t.size - 0.2),
                      (f.staticX = t.size),
                      (f.y = n[t.pos.slotIndex]),
                      (f.multiplier = m),
                      (f.node.style.zIndex = Math.round(f.multiplier));
                  }
                  var y = f.x * s - t.pos.diff,
                    v = f.y * u;
                  (f.x = y / s),
                    (f.staticX = (f.staticX * s - t.pos.diff) / s),
                    (y -= c),
                    (y += f.multiplier * -t.cursor.parallaxX),
                    (v += f.multiplier * -t.cursor.parallaxY);
                  var g = 0.5 + f.multiplier / 200;
                  y > 1.5 * a && (y = -9999),
                    y !== f.lastLocalX &&
                      ((f.lastLocalX = y),
                      (f.node.style.transform =
                        "translate3d(" +
                        y +
                        "px, " +
                        v +
                        "px, 0) scale(" +
                        g +
                        ")"));
                }
            }),
            vt(mt(t), "destroy", function () {
              t.unbindListeners(),
                t.stop(),
                t.items.forEach(function (e) {
                  clearTimeout(e.timeout);
                });
            });
          var n = t.props,
            r = n.itemContainerSelector,
            a = n.itemSelector,
            s = n.slots,
            u = n.parallax;
          (t.node = e),
            (t.observer = null),
            (t.ref = { container: t.node.querySelector(r) });
          var c = window.ROUTES,
            l = Array.from(t.node.querySelectorAll(a)).filter(function (e) {
              var t = c[e.dataset.route],
                n = !!t && t.isFeatured;
              return n || e.parentNode.removeChild(e), n;
            }),
            f = t.buildItems(l, t.ref.container),
            d = f.items,
            p = f.size;
          return (
            (t.items = d),
            (t.size = p),
            (t.len = t.items.length),
            (t.pos = {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
              regionWidth: t.node.clientWidth,
              regionHeight: t.node.clientHeight,
              diff: 0,
              slotIndex: (t.items.length - 1) % s.length,
              parallaxIndex: (t.items.length - 1) % u.length,
              idleSpeed: 0,
              idleTargetSpeed: 0,
            }),
            (t.cursor = {
              x: 0,
              y: 0,
              followX: 0,
              followY: 0,
              parallaxX: 0,
              parallaxY: 0,
            }),
            (t.rAFID = null),
            (t.isPaused = !1),
            t.bindListeners(),
            window.IntersectionObserver
              ? ((t.observer = new IntersectionObserver(t.onIntersection)),
                t.observer.observe(t.node),
                ht(t))
              : (t.start(), t)
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "buildItems",
              value: function (e, t) {
                var n = this.props,
                  r = n.slots,
                  o = n.parallax,
                  i = n.itemInnerSelector,
                  a = n.imageSelector,
                  s = n.itemTitleSelector;
                if (!e.length) return [];
                var u = e.length,
                  c = r.length,
                  l = 0.2,
                  f = 0.2,
                  d = st(new Array(Math.max(u, c)))
                    .map(function (n, r) {
                      var o = e[r % u];
                      return (
                        r > u - 1 && ((o = o.cloneNode(!0)), t.appendChild(o)),
                        o
                      );
                    })
                    .sort(function () {
                      return Math.random() - 0.5;
                    });
                return {
                  items: d.map(function (e, t) {
                    var n = e.querySelector(i),
                      u = e.querySelector(a),
                      p = e.querySelector(s),
                      h = ut(
                        e.dataset.originalSize.split("x").map(function (e) {
                          return Number(e);
                        }),
                        2
                      ),
                      m = h[0],
                      y = h[1],
                      v = Math.min(60 / m, 60 / y),
                      g = m * v,
                      b = y * v;
                    (n.style.width = g + "vmin"), (n.style.height = b + "vmin");
                    var w = r[t % c],
                      _ = setTimeout(function () {
                        e.dataset.reveal = !0;
                      }, 100 * t),
                      S = o[t % o.length],
                      x = {
                        node: e,
                        image: u,
                        inner: n,
                        title: p,
                        y: w,
                        x: l,
                        staticX: l,
                        multiplier: S,
                        timeout: _,
                      };
                    return (
                      (e.style.zIndex = Math.round(x.multiplier)),
                      (l += 0.175),
                      t < d.length - 1 && (f = Math.max(f, l)),
                      x
                    );
                  }),
                  size: f,
                };
              },
            },
            {
              key: "bindListeners",
              value: function () {
                U.on(this.onResize),
                  this.onResize(),
                  this.node.addEventListener("mouseenter", this.onMouseEnter),
                  this.node.addEventListener("mouseleave", this.onMouseLeave),
                  a.on("modal:state:change", this.onModalStateChange),
                  a.on("idle:state:change", this.onIdleStateChange);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                this.observer &&
                  this.node &&
                  this.observer.unobserve(this.node),
                  U.off(this.onResize),
                  this.node.removeEventListener(
                    "mouseenter",
                    this.onMouseEnter
                  ),
                  this.node.removeEventListener(
                    "mouseleave",
                    this.onMouseLeave
                  ),
                  a.off("modal:state:change", this.onModalStateChange),
                  a.on("idle:state:change", this.onIdleStateChange);
              },
            },
            {
              key: "bindActiveListeners",
              value: function () {
                document.body.addEventListener("mousemove", this.onMouseMove);
              },
            },
            {
              key: "unbindActiveListeners",
              value: function () {
                (this.cursor.x = 0),
                  (this.cursor.y = 0),
                  document.body.removeEventListener(
                    "mousemove",
                    this.onMouseMove
                  );
              },
            },
            {
              key: "start",
              value: function () {
                (this.rAFID = requestAnimationFrame(this.tick)),
                  this.bindActiveListeners();
              },
            },
            {
              key: "stop",
              value: function () {
                cancelAnimationFrame(this.rAFID), this.unbindActiveListeners();
              },
            },
          ]) && ft(t.prototype, n),
          r && ft(t, r),
          i
        );
      })(w);
      vt(gt, "defaultProps", {
        viewportSelector: ".intro-viewport",
        itemContainerSelector: ".intro-items",
        itemSelector: ".intro-item",
        itemInnerSelector: ".intro-item-inner",
        itemTitleSelector: ".intro-item-title",
        imageSelector: "img",
        slots: [
          0.73, 0.4, 0.86, 0.2, 0.78, 0.3, 0.8, 0.2, 0.75, 0.1, 0.8, 0.3, 0.8,
          0.1,
        ],
        speed: 0.5,
        parallax: [10, 60, 80, 200, 90, 60, 150, 1, 200],
      });
      function bt(e) {
        return (bt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function wt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function _t(e, t) {
        return (_t =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function St(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = kt(e);
          if (t) {
            var o = kt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return xt(this, n);
        };
      }
      function xt(e, t) {
        return !t || ("object" !== bt(t) && "function" != typeof t) ? Ot(e) : t;
      }
      function Ot(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function kt(e) {
        return (kt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Pt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Tt = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _t(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = St(i);
        function i(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            Pt(Ot((t = o.call(this))), "onTitlesResize", function () {
              var e = t.routes[t.route];
              if (e && e.elements) {
                var n = e.elements.titleFront.dimensions;
                t.node.style.setProperty(
                  "--title-height",
                  "".concat(n.height, "px")
                );
              }
            }),
            Pt(Ot(t), "destroy", function () {
              t.unbindListeners();
            }),
            (t.node = e),
            (t.route = t.node.dataset.route),
            (t.routes = window.ROUTES),
            t.onTitlesResize(),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                a.on("route:title:resize", this.onTitlesResize);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                a.off("route:title:resize", this.onTitlesResize);
              },
            },
          ]) && wt(t.prototype, n),
          r && wt(t, r),
          i
        );
      })(w);
      Pt(Tt, "defaultProps", {});
      function Et(e) {
        return (Et =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function At(e, t) {
        return (At =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function It(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = jt(e);
          if (t) {
            var o = jt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Ct(this, n);
        };
      }
      function Ct(e, t) {
        return !t || ("object" !== Et(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function jt(e) {
        return (jt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Lt,
        Rt,
        Mt,
        Dt = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && At(e, t);
          })(n, e);
          var t = It(n);
          function n() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (e = t.call(this)),
              window.location !== window.parent.location
                ? Ct(e)
                : ((window.location = "/"), e)
            );
          }
          return n;
        })(w);
      (Mt = {}),
        (Rt = "defaultProps") in (Lt = Dt)
          ? Object.defineProperty(Lt, Rt, {
              value: Mt,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (Lt[Rt] = Mt);
      var Ft = function () {};
      function Nt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Nt(Object(n), !0).forEach(function (t) {
                qt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Nt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function zt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function qt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Bt = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            qt(this, "tick", function () {
              var e = n.props,
                t = e.ease,
                r = e.from,
                o = e.to,
                i = e.duration,
                a = e.delay,
                s = e.onUpdate,
                u = e.onComplete,
                c = Math.max(0, Date.now() - n.lastUpdate - 1e3 * a);
              (n.lastUpdate += c),
                (n.time = (n.lastUpdate - n.startTime) / 1e3),
                n.time > i && (n.time = i),
                s(V(r, o, t(n.time / i))),
                n.time >= i ? u(o) : (n.rafID = requestAnimationFrame(n.tick));
            }),
            (this.props = Ht(Ht({}, this.constructor.defaultProps), t));
          var r = this.props.autoStart;
          (this.isActive = !1),
            (this.startTime = null),
            (this.lastUpdate = null),
            (this.rafID = null),
            r && this.start();
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "start",
              value: function () {
                this.isActive ||
                  ((this.isActive = !0),
                  (this.startTime = Date.now()),
                  (this.lastUpdate = this.startTime),
                  (this.rafID = requestAnimationFrame(this.tick)));
              },
            },
            {
              key: "destroy",
              value: function () {
                cancelAnimationFrame(this.rafID);
              },
            },
          ]) && zt(t.prototype, n),
          r && zt(t, r),
          e
        );
      })();
      function Ut(e) {
        return (Ut =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Wt(e, t) {
        return (Wt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Vt(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Gt(e);
          if (t) {
            var o = Gt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Yt(this, n);
        };
      }
      function Yt(e, t) {
        return !t || ("object" !== Ut(t) && "function" != typeof t) ? Xt(e) : t;
      }
      function Xt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Gt(e) {
        return (Gt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Jt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      qt(Bt, "defaultProps", {
        autoStart: !0,
        ease: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
          return -n * (e /= r) * (e - 2) + t;
        },
        duration: 1,
        delay: 0,
        from: 0,
        to: 1,
        onUpdate: Ft,
        onComplete: Ft,
      });
      var Qt = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Wt(e, t);
        })(n, e);
        var t = Vt(n);
        function n(e, r) {
          var o;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            Jt(Xt((o = t.call(this, r))), "setProgress", function (e) {
              o.progress = Math.min(1, Math.max(0, e));
            }),
            Jt(Xt(o), "render", function () {
              var e = o.props.color;
              (o.context.globalAlpha = o.progress),
                (o.context.fillStyle = e),
                o.context.fillRect(0, 0, 1, 1);
            }),
            Jt(Xt(o), "destroy", function () {});
          var i = o.props.index;
          return (o.index = i), (o.context = e), (o.progress = 0), o;
        }
        return n;
      })(w);
      function $t(e) {
        return ($t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Kt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Kt(Object(n), !0).forEach(function (t) {
                sn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Kt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function en(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function tn(e, t) {
        return (tn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function nn(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = an(e);
          if (t) {
            var o = an(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return rn(this, n);
        };
      }
      function rn(e, t) {
        return !t || ("object" !== $t(t) && "function" != typeof t) ? on(e) : t;
      }
      function on(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function an(e) {
        return (an = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function sn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Jt(Qt, "defaultProps", { index: 0, color: "#000000" });
      var un = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && tn(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = nn(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            sn(on((n = o.call(this, t))), "onTransitionUpdate", function (e) {
              (n.transition.backOpacity = V(
                n.transition.backStartOpacity,
                n.transition.backEndOpacity,
                e
              )),
                (n.transition.opacity = e),
                n.updateTransition();
            }),
            sn(on(n), "destroy", function () {
              n.tween && n.tween.destroy();
            });
          var r = n.props.includeTransitions;
          return (
            (n.node = e),
            (n.background = {
              front: Zt({}, n.addCanvas("dynamic-background-canvas--front")),
              back: Zt({}, n.addCanvas("dynamic-background-canvas--back")),
              backOpacity: 0,
            }),
            (n.transition = null),
            r &&
              (n.transition = {
                opacity: 0,
                backOpacity: 0,
                backStartOpacity: 0,
                backEndOpacity: 0,
              }),
            (n.tween = null),
            (n.layers = []),
            (n.orderedLayers = []),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "addCanvas",
              value: function (e) {
                var t = document.createElement("canvas"),
                  n = t.getContext("2d");
                return (
                  (t.width = 1),
                  (t.height = 1),
                  e && t.classList.add(e),
                  this.node.appendChild(t),
                  { canvas: t, context: n }
                );
              },
            },
            {
              key: "addLayer",
              value: function (e) {
                var t = this.background.front,
                  n = new Qt(t.context, e);
                return this.layers.push(n), this.orderedLayers.push(n), n;
              },
            },
            {
              key: "restackLayer",
              value: function (e) {
                for (var t = 0, n = this.orderedLayers.length; t < n; t += 1)
                  if (this.orderedLayers[t].index === e) {
                    this.orderedLayers.push(this.orderedLayers.splice(t, 1)[0]);
                    break;
                  }
              },
            },
            {
              key: "transitionIn",
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.5;
                return (
                  this.tween && this.tween.destroy(),
                  (this.transition.color = e),
                  (this.transition.opacity = 0),
                  (this.transition.backOpacity = this.background.backOpacity),
                  (this.transition.backStartOpacity =
                    this.background.backOpacity),
                  (this.transition.backEndOpacity = t),
                  this.onTransitionUpdate(0),
                  new Promise(function (e) {
                    n.tween = new Bt({
                      from: 0,
                      to: 1,
                      duration: r,
                      onUpdate: function (e) {
                        return n.onTransitionUpdate(e, !0);
                      },
                      onComplete: function () {
                        e();
                      },
                    });
                  })
                );
              },
            },
            {
              key: "transitionHide",
              value: function () {
                return this.tween && this.tween.destroy(), Promise.resolve();
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this.background,
                  n = t.front,
                  r = t.back;
                n.context.clearRect(0, 0, 1, 1),
                  r.context.clearRect(0, 0, 1, 1);
                for (var o = 0, i = this.orderedLayers.length; o < i; o += 1)
                  this.orderedLayers[o].render();
                (r.context.globalAlpha = e),
                  r.context.drawImage(n.canvas, 0, 0),
                  (this.background.backOpacity = e);
              },
            },
            {
              key: "updateTransition",
              value: function () {
                var e = this.background,
                  t = e.front,
                  n = e.back,
                  r = this.transition,
                  o = r.opacity,
                  i = r.backOpacity,
                  a = r.color;
                n.context.clearRect(0, 0, 1, 1),
                  (t.context.globalAlpha = o),
                  (t.context.fillStyle = a),
                  t.context.fillRect(0, 0, 1, 1),
                  (n.context.globalAlpha = i),
                  n.context.drawImage(t.canvas, 0, 0);
              },
            },
          ]) && en(t.prototype, n),
          r && en(t, r),
          i
        );
      })(w);
      function cn(e) {
        return (cn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ln(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function fn(e, t) {
        return (fn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function dn(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = mn(e);
          if (t) {
            var o = mn(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return pn(this, n);
        };
      }
      function pn(e, t) {
        return !t || ("object" !== cn(t) && "function" != typeof t) ? hn(e) : t;
      }
      function hn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function mn(e) {
        return (mn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function yn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      sn(un, "defaultProps", { includeTransitions: !0 });
      var vn = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && fn(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = dn(i);
        function i(e, t) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            yn(hn((n = o.call(this, t))), "onItemOver", function () {
              (0, n.props.onItemOver)(hn(n));
            }),
            yn(hn(n), "onItemOut", function () {
              (0, n.props.onItemOut)(hn(n));
            }),
            yn(hn(n), "onOpenNav", function () {
              a.trigger("menu:open");
            }),
            yn(hn(n), "resize", function () {
              n.dimensions = n.refreshDimensions();
            }),
            (n.node = e),
            (n.isNavLink = "true" === n.node.dataset.menu),
            (n.progress = { last: -999, isHidden: !1 }),
            (n.hoverTimeout = null),
            (n.revealTween = null),
            n.renderText(),
            n.bindListeners(),
            n.reveal({ duration: 0.3, delay: 0.3 }),
            (n.info = n.refreshDimensions()),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "renderText",
              value: function () {
                var e = this,
                  t = this.node.dataset.title.trim().split(" "),
                  n = this.node.dataset.href,
                  r =
                    '<div class="parallax-title-inner"><div class="parallax-title-line">',
                  o = n ? "a" : "div",
                  i = n ? 'href="'.concat(n, '"') : "",
                  a = 0;
                t.forEach(function (t, n) {
                  var s = "⟶" === t;
                  (a += t.length + 1) > 10 &&
                    0 !== n &&
                    ((a = t.length + 1),
                    (r += '</div><div class="parallax-title-line">')),
                    (r += '\n      <div class="parallax-title-shift" '
                      .concat(
                        s ? 'data-hover-disabled="true"' : "",
                        '>\n        <div class="parallax-title-reveal">\n          <'
                      )
                      .concat(o, ' class="parallax-title-content" data-shift ')
                      .concat(i, " ")
                      .concat(
                        e.isNavLink ? 'role="button"' : "",
                        '>\n            <div class="parallax-title-base">\n              <h1 class="parallax-title-text">'
                      )
                      .concat(
                        t,
                        '</h1>\n            </div>\n            <div class="parallax-title-overlay">\n              <h1 class="parallax-title-text-mask">'
                      )
                      .concat(t, "</h1>\n            </div>\n          </")
                      .concat(o, ">\n        </div>\n      </div>\n      "));
                }),
                  (r += "</div></div>"),
                  (this.node.innerHTML = r),
                  (this.node.dataset.ready = !0),
                  (this.shift = Array.from(
                    this.node.querySelectorAll("[data-shift]")
                  ));
              },
            },
            {
              key: "bindListeners",
              value: function () {
                this.node.addEventListener("mouseover", this.onItemOver),
                  this.node.addEventListener("mouseout", this.onItemOut),
                  this.isNavLink &&
                    this.node.addEventListener("click", this.onOpenNav);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                this.node.removeEventListener("mouseover", this.onItemOver),
                  this.node.removeEventListener("mouseout", this.onItemOut),
                  this.isNavLink &&
                    this.node.removeEventListener("click", this.onOpenNav);
              },
            },
            {
              key: "reveal",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = t.duration,
                  r = void 0 === n ? 0.3 : n,
                  o = t.delay,
                  i = void 0 === o ? 0 : o;
                this.revealTween && this.revealTween.destroy(),
                  (this.revealTween = new Bt({
                    from: 100,
                    to: 0,
                    duration: r,
                    delay: i,
                    onUpdate: function (t) {
                      e.node.style.setProperty("--reveal", t + "%");
                    },
                  }));
              },
            },
            {
              key: "refreshDimensions",
              value: function () {
                return this.node.getBoundingClientRect();
              },
            },
            {
              key: "setProgress",
              value: function (e) {
                var t = this.props.index,
                  n = W(e - t, -1.5, 1.5),
                  r = X(Math.abs(n) / 1.5),
                  o = Math.abs(n) >= 1;
                this.progress.last !== n &&
                  (this.shift.forEach(function (e) {
                    e.style.transform =
                      "translate3d(0, " + -n * r * 230 + "%, 0)";
                  }),
                  o !== this.progress.isHidden &&
                    ((this.node.style.visibility = o ? "hidden" : "visible"),
                    (this.progress.isHidden = o)),
                  (this.progress.last = n));
              },
            },
            {
              key: "setActive",
              value: function (e) {
                this.node.dataset.active = e;
              },
            },
            {
              key: "setHover",
              value: function (e) {
                var t = this;
                clearTimeout(this.hoverTimeout),
                  (this.hoverTimeout = setTimeout(
                    function () {
                      t.node.dataset.hover = e;
                    },
                    e ? 100 : 200
                  ));
              },
            },
            {
              key: "destroy",
              value: function () {
                this.revealTween && this.revealTween.destroy(),
                  this.unbindListeners(),
                  clearTimeout(this.hoverTimeout);
              },
            },
          ]) && ln(t.prototype, n),
          r && ln(t, r),
          i
        );
      })(w);
      function gn(e) {
        return (gn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function bn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function wn(e, t) {
        return (wn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _n(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = On(e);
          if (t) {
            var o = On(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Sn(this, n);
        };
      }
      function Sn(e, t) {
        return !t || ("object" !== gn(t) && "function" != typeof t) ? xn(e) : t;
      }
      function xn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function On(e) {
        return (On = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function kn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      yn(vn, "defaultProps", { index: 1, onItemOver: Ft, onItemOut: Ft });
      var Pn = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && wn(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = _n(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            kn(xn((n = o.call(this, t))), "pad", function (e, t) {
              for (var n = e + ""; n.length < t; ) n = "0" + n;
              return n;
            }),
            kn(xn(n), "destroy", function () {});
          var r = n.props.valueSelector;
          return (
            (n.node = e),
            (n.ref = { value: n.node.querySelector(r) }),
            (n.progress = { last: -999, isHidden: !1 }),
            n.renderNumber(n.ref.value),
            (n.node.dataset.ready = !0),
            n.setProgress(-1),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "renderNumber",
              value: function (e) {
                var t = Number(e.dataset.value);
                e.innerHTML = this.pad(t, 2);
              },
            },
            {
              key: "setProgress",
              value: function (e) {
                var t = this.props.index,
                  n = W(e - t, -1.5, 1.5),
                  r = Math.abs(n) >= 1;
                this.progress.last !== n &&
                  ((this.ref.value.style.transform =
                    "translate3d(" + 100 * -n + "%, 0, 0)"),
                  r !== this.progress.isHidden &&
                    ((this.node.style.visibility = r ? "hidden" : "visible"),
                    (this.progress.isHidden = r)),
                  (this.progress.last = n));
              },
            },
          ]) && bn(t.prototype, n),
          r && bn(t, r),
          i
        );
      })(w);
      function Tn(e) {
        return (Tn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function En(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function An(e, t) {
        return (An =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function In(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Ln(e);
          if (t) {
            var o = Ln(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Cn(this, n);
        };
      }
      function Cn(e, t) {
        return !t || ("object" !== Tn(t) && "function" != typeof t) ? jn(e) : t;
      }
      function jn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ln(e) {
        return (Ln = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Rn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      kn(Pn, "defaultProps", { index: 1, valueSelector: "[data-value]" });
      var Mn = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && An(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = In(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Rn(jn((n = o.call(this, t))), "onResize", function () {
              (n.pos.scrollY = window.pageYOffset),
                (n.pos.innerHeight = 0.5 * window.innerHeight),
                (n.lerps = n.buildLerps(n.scrollTargets)),
                n.items.forEach(function (e) {
                  return e.titleFront.resize();
                }),
                a.trigger("route:title:resize"),
                n.onScroll();
            }),
            Rn(jn(n), "onScroll", function () {
              n.update();
            }),
            Rn(jn(n), "onRouteHoverOver", function (e) {
              var t = n.items.findIndex(function (t) {
                return t.route === e;
              });
              n.setItemHoverByIndex(t);
            }),
            Rn(jn(n), "onRouteHoverOut", function (e) {
              n.setItemHoverByIndex(-1);
            }),
            Rn(jn(n), "onRouteHoverReset", function () {
              n.setItemHoverByIndex(-1);
            }),
            Rn(jn(n), "onModalStateChange", function (e) {
              e
                ? (n.wasRouteChanged = !1)
                : n.wasRouteChanged &&
                  (n.items.forEach(function (e) {
                    e.titleFront.reveal({ duration: 0.3, delay: 0.5 }),
                      e.titleBack.reveal({ duration: 0.3, delay: 0.5 });
                  }),
                  (n.wasRouteChanged = !1));
            }),
            Rn(jn(n), "setItemHoverByIndex", function (e) {
              n.items.forEach(function (t, n) {
                if (n === e)
                  return (
                    t.titleFront.setHover(!0), void t.titleBack.setHover(!0)
                  );
                t.titleFront.setHover(!1), t.titleBack.setHover(!1);
              });
            }),
            Rn(jn(n), "transitionTitle", function (e, t, r, o) {
              var i = n.props.maxFeatured,
                a = t ? n.routes[t].index : n.routes[e].index,
                s = "/" === e && t && a <= i ? t : e,
                u = n.scrollTargets.findIndex(function (e) {
                  return e.route === s;
                }),
                c = n.scrollTargets;
              return (
                n.titleTween && n.titleTween.destroy(),
                -1 === u
                  ? ((c = n.scrollTargets.map(function (e) {
                      return { item: e.item };
                    })).unshift({ item: n.items[n.routes[s].index] }),
                    o &&
                      n.scrollTargets.unshift({
                        item: n.items[n.routes[s].index],
                        route: s,
                      }),
                    (n.pos.progress += 1),
                    (u = 0))
                  : n.pos.progress < 0.5 &&
                    0 === a &&
                    (c.splice(1, 0, c.splice(u, 1)[0]), (u = 1)),
                n.applyActiveTitle(n.items),
                new Promise(function (e) {
                  n.updateTitles(c, n.pos.progress),
                    (n.titleTween = new Bt({
                      from: n.pos.progress,
                      to: u,
                      duration: r,
                      onUpdate: function (e) {
                        (n.pos.progress = e), n.updateTitles(c, e);
                      },
                      onComplete: function () {
                        e();
                      },
                    }));
                })
              );
            }),
            Rn(jn(n), "update", function () {
              if (((n.pos.scrollY = window.pageYOffset), !n.isTransitioning)) {
                var e = n.pos.scrollY + n.pos.innerHeight,
                  t = Y(n.lerps.scroll, n.lerps.progress, e),
                  r = Y(n.lerps.progressIndex, n.lerps.opacity, t);
                n.pos.progress = t;
                var o = Math.round(t),
                  i = n.scrollTargets[o];
                i &&
                  (J || 0 === o || o === n.scrollTargets.length - 1) &&
                  n.currentColor !== i.item.color &&
                  ((n.currentColor = i.item.color),
                  n.updateSiteBackgroundColor(i.item.color));
                for (var a = 0, s = n.scrollTargets.length; a < s; a += 1) {
                  var u = n.scrollTargets[a].item,
                    c = 1 + t - a;
                  n.updateTitle(u, c), n.updateBackground(u, c);
                }
                n.background.update(r);
              }
            }),
            Rn(jn(n), "updateTitles", function (e, t) {
              for (var r = 0, o = e.length; r < o; r += 1) {
                var i = e[r].item,
                  a = 1 + t - r;
                n.updateTitle(i, a);
              }
            }),
            Rn(jn(n), "updateTitle", function (e, t) {
              e &&
                (e.titleFront.setProgress(t),
                e.titleBack.setProgress(t),
                e.scrollNumberFront.setProgress(t),
                e.scrollNumberBack.setProgress(t));
            }),
            Rn(jn(n), "updateBackground", function (e, t) {
              e.background.setProgress(t);
            }),
            Rn(jn(n), "destroy", function () {
              n.unbindListeners(),
                n.titleTween && n.titleTween.destroy(),
                n.items.forEach(function (e) {
                  e.titleFront.destroy(),
                    e.titleBack.destroy(),
                    e.scrollNumberFront.destroy(),
                    e.scrollNumberBack.destroy();
                });
            });
          var r = n.props,
            s = r.routes,
            u = r.container,
            c = r.backgroundSelector,
            l = r.titleFrontSelector,
            f = r.titleBackSelector,
            d = r.scrollNumberFrontSelector,
            p = r.scrollNumberBackSelector;
          return (
            (n.pos = {
              scrollY: window.pageYOffset,
              innerHeight: 0.5 * window.innerHeight,
              progress: 0,
            }),
            (n.routes = s),
            (n.container = u),
            (n.node = e),
            (n.background = new un(n.node.querySelector(c))),
            (n.items = n.buildItems({
              titleFront: Array.from(n.node.querySelectorAll(l)),
              titleBack: Array.from(n.node.querySelectorAll(f)),
              scrollNumberFront: Array.from(n.node.querySelectorAll(d)),
              scrollNumberBack: Array.from(n.node.querySelectorAll(p)),
            })),
            (n.scrollTargets = n.getScrollTargets()),
            (n.lerps = n.buildLerps(n.scrollTargets)),
            (n.titleTween = null),
            (n.wasRouteChanged = !0),
            (n.currentColor = null),
            n.bindListeners(),
            n.applyActiveTitle(n.items),
            n.reset(),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "buildItems",
              value: function (e) {
                var t = this,
                  n = e.titleFront,
                  r = e.titleBack,
                  o = e.scrollNumberFront,
                  i = e.scrollNumberBack;
                return n.reduce(function (e, a, s) {
                  var u = t.routes[n[s].dataset.route],
                    c = u.index,
                    l = new vn(r[s]);
                  return (
                    (e[c] = {
                      route: n[s].dataset.route,
                      color: u.color,
                      titleFront: new vn(n[s], {
                        onItemOver: function (e) {
                          e.setHover(!0), l.setHover(!0);
                        },
                        onItemOut: function (e) {
                          e.setHover(!1), l.setHover(!1);
                        },
                      }),
                      titleBack: l,
                      scrollNumberFront: new Pn(o[s]),
                      scrollNumberBack: new Pn(i[s]),
                      background: t.background.addLayer({
                        index: c,
                        color: u.color,
                      }),
                      backgroundTitleOverlayOpacity:
                        1 - (u.isLightColor ? 0 : 1),
                    }),
                    (u.elements = e[c]),
                    e
                  );
                }, []);
              },
            },
            {
              key: "bindListeners",
              value: function () {
                U.on(this.onResize),
                  I.a.on(this.onScroll),
                  a.on("controllers:refresh", this.onResize),
                  a.on("route:hover:over", this.onRouteHoverOver),
                  a.on("route:hover:out", this.onRouteHoverOut),
                  a.on("route:hover:reset", this.onRouteHoverReset),
                  a.on("modal:state:change", this.onModalStateChange),
                  this.onScroll(),
                  this.onResize();
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                U.off(this.onResize),
                  I.a.off(this.onScroll),
                  a.off("controllers:refresh", this.onResize),
                  a.off("route:hover:over", this.onRouteHoverOver),
                  a.off("route:hover:out", this.onRouteHoverOut),
                  a.off("route:hover:reset", this.onRouteHoverReset),
                  a.off("modal:state:change", this.onModalStateChange);
              },
            },
            {
              key: "pageTransitionStart",
              value: function (e, t, n) {
                var r = this,
                  o = this.props.maxFeatured,
                  i = t ? this.routes[t].index : this.routes[e].index,
                  a = this.routes["/" === e && t && i <= o ? t : e],
                  s = a.color,
                  u = a.isLightColor;
                return (
                  (this.wasRouteChanged = !0),
                  (this.isTransitioning = !0),
                  this.reset(),
                  document.body.style.setProperty("--background-color", s),
                  new Promise(function (o, i) {
                    Promise.all([
                      r.transitionTitle(e, t, 0.3, n),
                      r.background.transitionIn(s, 1 - (u ? 0 : 1), 0.5),
                    ]).then(function () {
                      o();
                    });
                  })
                );
              },
            },
            {
              key: "pageTransitionEnd",
              value: function (e, t) {
                var n = this;
                this.scrollTargets = this.getScrollTargets();
                var r = this.scrollTargets.findIndex(function (e) {
                  return e.route === t;
                });
                setTimeout(function () {
                  if (
                    (n.reset(), (n.isTransitioning = !1), "/" === e && -1 !== r)
                  )
                    return (
                      n.scrollToIndex(r),
                      n.onResize(),
                      void n.background.transitionHide()
                    );
                  window.scrollTo(0, 0),
                    n.background.transitionHide(),
                    n.onResize();
                }, 0);
              },
            },
            {
              key: "applyActiveTitle",
              value: function (e) {
                var t = e.findIndex(function (e) {
                  return e.route === window.location.pathname;
                });
                -1 !== t ? this.setActiveTitle(t) : this.setActiveTitle(-1);
              },
            },
            {
              key: "setActiveTitle",
              value: function (e) {
                this.items.forEach(function (t, n) {
                  if (n === e && 0 !== n)
                    return (
                      t.titleFront.setActive(!0), void t.titleBack.setActive(!0)
                    );
                  t.titleFront.setActive(!1), t.titleBack.setActive(!1);
                });
              },
            },
            {
              key: "scrollToIndex",
              value: function (e) {
                window.scrollTo(
                  0,
                  this.lerps.scrollIndex[e] - 0.5 * this.pos.innerHeight
                ),
                  this.onScroll();
              },
            },
            {
              key: "getScrollTargets",
              value: function () {
                var e = this;
                return Array.from(
                  this.container.querySelectorAll("[data-scroll-route]")
                ).map(function (t) {
                  var n = e.routes[t.dataset.scrollRoute]
                    ? e.routes[t.dataset.scrollRoute].index
                    : 0;
                  return (
                    e.background.restackLayer(n),
                    {
                      node: t,
                      index: n,
                      item: e.items[n],
                      route: t.dataset.scrollRoute,
                    }
                  );
                });
              },
            },
            {
              key: "buildLerps",
              value: function (e) {
                var t = this;
                return e.reduce(
                  function (e, n, r) {
                    var o = n.node,
                      i = n.item,
                      a = o ? o.getBoundingClientRect() : { top: 0, height: 0 };
                    return (
                      e.scroll.push(
                        a.top + t.pos.scrollY,
                        a.top + a.height + t.pos.scrollY
                      ),
                      e.scrollIndex.push(a.top + t.pos.scrollY),
                      e.opacity.push(i.backgroundTitleOverlayOpacity),
                      e.progress.push(r, r),
                      e.progressIndex.push(r),
                      e
                    );
                  },
                  {
                    scroll: [],
                    scrollIndex: [],
                    progress: [],
                    progressIndex: [],
                    opacity: [],
                  }
                );
              },
            },
            {
              key: "reset",
              value: function () {
                this.items.forEach(function (e) {
                  e.titleFront.setProgress(-1),
                    e.titleBack.setProgress(-1),
                    e.scrollNumberFront.setProgress(-99),
                    e.scrollNumberBack.setProgress(-99),
                    e.background.setProgress(-1);
                });
              },
            },
            {
              key: "updateSiteBackgroundColor",
              value: function (e) {
                requestAnimationFrame(function () {
                  document.body.style.setProperty("--background-color", e);
                });
              },
            },
          ]) && En(t.prototype, n),
          r && En(t, r),
          i
        );
      })(w);
      function Dn(e) {
        return (Dn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Fn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Nn(e, t) {
        return (Nn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Hn(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Bn(e);
          if (t) {
            var o = Bn(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return zn(this, n);
        };
      }
      function zn(e, t) {
        return !t || ("object" !== Dn(t) && "function" != typeof t) ? qn(e) : t;
      }
      function qn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Bn(e) {
        return (Bn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Un(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Rn(Mn, "defaultProps", {
        routes: {},
        maxFeatured: 10,
        container: null,
        titleFrontSelector: ".parallax-title--front",
        titleBackSelector: ".parallax-title--back",
        scrollNumberFrontSelector: ".scroll-number--front",
        scrollNumberBackSelector: ".scroll-number--back",
        backgroundSelector: ".dynamic-background",
      });
      var Wn = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Nn(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Hn(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Un(qn((t = o.call(this, e))), "show", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.isInstant,
                r = (e.isForwards, e.delay),
                o = void 0 === r ? 0 : r,
                i = t.props,
                a = i.nodeFront,
                s = i.nodeBack;
              t.tween.hide && t.tween.hide.destroy(),
                t.tween.hover && t.tween.hover.destroy(),
                (t.isHidden = !1),
                (a.dataset.hidden = !1),
                (s.dataset.hidden = !1),
                t.onUpdateLinkHover(0),
                n
                  ? t.onUpdateLinkHide(1)
                  : (t.tween.hide = new Bt({
                      from: t.pos.hide,
                      to: 0,
                      duration: 0.2,
                      delay: o,
                      onUpdate: t.onUpdateLinkHide,
                    }));
            }),
            Un(qn(t), "hide", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.isInstant,
                r = e.isForwards,
                o = t.props,
                i = o.nodeFront,
                a = o.nodeBack;
              t.tween.hide && t.tween.hide.destroy(),
                t.tween.hover && t.tween.hover.destroy(),
                (t.isHidden = !0),
                (i.dataset.hidden = !0),
                (a.dataset.hidden = !0),
                n
                  ? t.onUpdateLinkHide(r ? 1 : -1)
                  : (t.tween.hide = new Bt({
                      from: t.pos.hide,
                      to: r ? 1 : -1,
                      duration: 0.2,
                      onUpdate: t.onUpdateLinkHide,
                    }));
            }),
            Un(qn(t), "onItemOver", function () {
              t.tween.hover && t.tween.hover.destroy(),
                t.isHidden ||
                  (t.tween.hover = new Bt({
                    from: t.pos.hover,
                    to: 1,
                    duration: 0.2,
                    delay: 0.1,
                    onUpdate: t.onUpdateLinkHover,
                  }));
            }),
            Un(qn(t), "onItemOut", function () {
              t.tween.hover && t.tween.hover.destroy(),
                t.isHidden ||
                  (t.tween.hover = new Bt({
                    from: t.pos.hover,
                    to: 0,
                    duration: 0.2,
                    delay: 0.1,
                    onUpdate: t.onUpdateLinkHover,
                  }));
            }),
            Un(qn(t), "onItemClick", function (e) {
              (0, t.props.onClick)(e);
            }),
            Un(qn(t), "onUpdateLinkHide", function (e) {
              var n = t.props.isHome,
                r = t.ref,
                o = r.hover,
                i = r.hoverBack;
              (t.pos.hide = e * (n ? 1.05 : 1)),
                (o.style.transform =
                  "translate3d(" + 100 * t.pos.hide + "%, 0, 0)"),
                (i.style.transform =
                  "translate3d(" + 100 * t.pos.hide + "%, 0, 0)");
            }),
            Un(qn(t), "onUpdateLinkHover", function (e) {
              var n = t.ref,
                r = n.link,
                o = n.linkBack;
              (t.pos.hover = e),
                (r.style.transform =
                  "translate3d(" + 100 * t.pos.hover + "%, 0, 0)"),
                (o.style.transform =
                  "translate3d(" + 100 * t.pos.hover + "%, 0, 0)");
            }),
            Un(qn(t), "destroy", function () {
              Object.keys(t.tween).forEach(function (e) {
                t.tween[e] && t.tween[e].destroy();
              }),
                t.unbindListeners();
            });
          var n = t.props,
            r = n.nodeFront,
            a = n.nodeBack,
            s = n.hoverSelector,
            u = n.linkSelector;
          return (
            (t.ref = {
              hover: r.querySelector(s),
              hoverBack: a.querySelector(s),
              link: r.querySelector(u),
              linkBack: a.querySelector(u),
            }),
            (t.tween = { hover: null, hide: null }),
            (t.pos = { hover: 0, hide: 0 }),
            (t.isHidden = !1),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                var e = this.props,
                  t = e.nodeFront;
                e.isHome ||
                  (t.addEventListener("mouseover", this.onItemOver),
                  t.addEventListener("mouseout", this.onItemOut)),
                  t.addEventListener("click", this.onItemClick);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                var e = this.props,
                  t = e.nodeFront;
                e.isHome ||
                  (t.removeEventListener("mouseover", this.onItemOver),
                  t.removeEventListener("mouseout", this.onItemOut)),
                  t.addEventListener("click", this.onItemClick);
              },
            },
          ]) && Fn(t.prototype, n),
          r && Fn(t, r),
          i
        );
      })(w);
      function Vn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Un(Wn, "defaultProps", {
        nodeFront: null,
        nodeBack: null,
        hoverSelector: ".switch-button-hover",
        linkSelector: ".switch-button-link",
        isHome: !1,
        onClick: Ft,
      });
      var Yn = new (function e() {
        var t = this;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          Vn(this, "onScrollToTop", function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1;
            t.onCancel();
            var n = window.pageYOffset;
            t.tween && t.tween.destroy(),
              document.addEventListener("touchstart", t.onVoid, {
                passive: !1,
              }),
              document.addEventListener("touchmove", t.onVoid, { passive: !1 }),
              document.addEventListener("wheel", t.onVoid, { passive: !1 }),
              (t.tween = new Bt({
                from: 1,
                to: 0,
                duration: e,
                ease: X,
                onUpdate: function (e) {
                  window.scrollTo(0, n * e);
                },
                onComplete: t.onCancel,
              }));
          }),
          Vn(this, "onVoid", function (e) {
            e.preventDefault(), e.stopPropagation();
          }),
          Vn(this, "onCancel", function () {
            t.tween && t.tween.destroy(),
              document.removeEventListener("touchstart", t.onVoid),
              document.removeEventListener("touchmove", t.onVoid),
              document.removeEventListener("wheel", t.onVoid);
          }),
          (this.tween = null),
          a.on("router:route:change", this.onCancel),
          this.onScrollToTop
        );
      })();
      function Xn(e) {
        return (Xn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Gn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Jn(e, t) {
        return (Jn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Qn(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Zn(e);
          if (t) {
            var o = Zn(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return $n(this, n);
        };
      }
      function $n(e, t) {
        return !t || ("object" !== Xn(t) && "function" != typeof t) ? Kn(e) : t;
      }
      function Kn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Zn(e) {
        return (Zn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function er(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var tr = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Jn(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Qn(i);
        function i(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            er(Kn((t = o.call(this, e))), "onTouchStart", function (e) {
              var n = Q(e);
              (t.then = Date.now()),
                (t.pos.initial = n.screenY),
                (t.pos.moved = 0),
                (t.pos.velocity = 0),
                K.release.forEach(function (e) {
                  document.addEventListener(e, t.onTouchRelease);
                });
            }),
            er(Kn(t), "onTouchMove", function (e) {
              var n = Q(e),
                r = t.pos.moved;
              (t.then = Date.now()),
                (t.pos.moved = 2 * (n.screenY - t.pos.initial)),
                (t.pos.velocity = 2 * (t.pos.moved - r)),
                e.preventDefault();
            }),
            er(Kn(t), "onTouchRelease", function (e) {
              var n = Date.now(),
                r = t.props.maxVelocity;
              K.release.forEach(function (e) {
                document.removeEventListener(e, t.onTouchRelease);
              }),
                n - t.then >= 150
                  ? (t.pos.velocity = 0)
                  : (t.pos.velocity = 2 * W(t.pos.velocity, -r, r));
            }),
            er(Kn(t), "onWheel", function (e) {
              var n = t.props.maxVelocity,
                r = (function (e) {
                  var t = 0,
                    n = 0;
                  return (
                    "detail" in e && (t = e.detail),
                    "wheelDelta" in e && (t = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120),
                    (n = 10 * t),
                    "deltaY" in e && (n = e.deltaY),
                    n &&
                      e.deltaMode &&
                      (1 === e.deltaMode ? (n *= 40) : (n *= 800)),
                    n && !t && (t = n < 1 ? -1 : 1),
                    { spinY: t, deltaY: n }
                  );
                })(e).deltaY;
              t.wheelBlockChecked ||
                (e.preventDefault(), (t.wheelBlockChecked = !0)),
                (t.pos.velocity = 0.5 * -r),
                (t.pos.velocity = W(t.pos.velocity, -n, n)),
                e.preventDefault();
            }),
            er(Kn(t), "tick", function () {
              var e = t.props.friction;
              (t.pos.velocity *= e), (t.rAFID = requestAnimationFrame(t.tick));
            }),
            er(Kn(t), "destroy", function () {
              t.unbindListeners(), t.stopTicker();
            }),
            (t.pos = { initial: 0, moved: 0, velocity: 0 }),
            (t.velocity = 0),
            (t.then = Date.now()),
            (t.isActive = !1),
            (t.rAFID = null),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "start",
              value: function () {
                this.isActive ||
                  ((this.isActive = !0),
                  (this.pos.moved = 0),
                  (this.pos.velocity = 0),
                  this.bindListeners());
              },
            },
            {
              key: "stop",
              value: function () {
                this.isActive && ((this.isActive = !1), this.unbindListeners());
              },
            },
            {
              key: "bindListeners",
              value: function () {
                this.startTicker(),
                  J
                    ? (document.body.addEventListener(
                        "touchstart",
                        this.onTouchStart
                      ),
                      document.body.addEventListener(
                        "touchmove",
                        this.onTouchMove,
                        $
                      ))
                    : window.addEventListener("wheel", this.onWheel, $);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                var e = this;
                this.stopTicker(),
                  J
                    ? (document.body.removeEventListener(
                        "touchstart",
                        this.onTouchStart
                      ),
                      document.body.removeEventListener(
                        "touchmove",
                        this.onTouchMove
                      ),
                      K.release.forEach(function (t) {
                        document.removeEventListener(t, e.onTouchRelease);
                      }))
                    : window.removeEventListener("wheel", this.onWheel);
              },
            },
            {
              key: "startTicker",
              value: function () {
                cancelAnimationFrame(this.rAFID),
                  (this.rAFID = requestAnimationFrame(this.tick));
              },
            },
            {
              key: "stopTicker",
              value: function () {
                cancelAnimationFrame(this.rAFID);
              },
            },
          ]) && Gn(t.prototype, n),
          r && Gn(t, r),
          i
        );
      })(w);
      function nr(e) {
        return (nr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function rr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function or(e, t) {
        return (or =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ir(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ur(e);
          if (t) {
            var o = ur(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return ar(this, n);
        };
      }
      function ar(e, t) {
        return !t || ("object" !== nr(t) && "function" != typeof t) ? sr(e) : t;
      }
      function sr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ur(e) {
        return (ur = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function cr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      er(tr, "defaultProps", { friction: 0.95, maxVelocity: 60, onScroll: Ft });
      var lr = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && or(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = ir(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            cr(sr((t = o.call(this, e))), "hide", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.isInstant,
                r = t.props.duration;
              if (!t.isHide) {
                if (((t.isHide = !0), clearTimeout(t.hideTimeout), n))
                  return (
                    t.tween && t.tween.destroy(),
                    (t.progress = 2),
                    (t.isCompleted = !0),
                    void t.update()
                  );
                t.hideTimeout = setTimeout(function () {
                  t.tween && t.tween.destroy(),
                    (t.tween = new Bt({
                      from: t.progress || 0,
                      to: 2,
                      duration: r,
                      onUpdate: t.onTweenProgress,
                      ease: G,
                      onComplete: function () {
                        t.isCompleted = !0;
                      },
                    }));
                }, r * (1 - t.progress) * 1e3);
              }
            }),
            cr(sr(t), "onTweenProgress", function (e) {
              t.progress = e;
            }),
            cr(sr(t), "update", function () {
              var e = t.props,
                n = e.images,
                r = e.index,
                o = e.context,
                i = e.scale,
                a = t.dimensions,
                s = a.regionWidth,
                u = a.regionHeight,
                c = s * (0.5 - t.scaleOffset),
                l = u * (0.5 - t.scaleOffset),
                f = n[r],
                d = Math.min(c / f.width, l / f.height),
                p = f.width * d,
                h = f.height * d,
                m = p / s,
                y = s * t.animOffset * t.progress,
                v = V(t.props.x - m, t.props.x + m, 0.5 * t.progress) * s,
                g = t.props.x * s,
                b = t.props.y * u - 0.5 * h,
                w = 1 - Math.abs(1 + t.progress - 2);
              o.save(),
                (o.globalAlpha = w),
                o.beginPath(),
                o.rect((v + y) * i, b * i, p * i, h * i),
                o.closePath(),
                o.clip(),
                f.isLoaded &&
                  o.drawImage(f.source, (g + y) * i, b * i, p * i, h * i),
                o.restore();
            }),
            cr(sr(t), "destroy", function () {
              (t.isCompleted = !0),
                t.tween && t.tween.destroy(),
                clearTimeout(t.hideTimeout);
            });
          var n = t.props,
            r = n.regionWidth,
            a = n.regionHeight;
          return (
            (t.dimensions = { regionWidth: r, regionHeight: a }),
            (t.scaleOffset = 0.2 * Math.random()),
            (t.animOffset = 0.2 * Math.random()),
            (t.progress = 0),
            (t.isHide = !1),
            (t.isCompleted = !1),
            (t.tween = null),
            t.show(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            { key: "refreshImageLoadStates", value: function () {} },
            {
              key: "resize",
              value: function (e, t) {
                (this.dimensions.regionWidth = e),
                  (this.dimensions.regionHeight = t),
                  this.isCompleted || this.update();
              },
            },
            {
              key: "show",
              value: function () {
                var e = this.props.duration;
                this.isHide ||
                  (this.tween && this.tween.destroy(),
                  (this.tween = new Bt({
                    from: 0,
                    to: 1,
                    ease: X,
                    duration: e,
                    onUpdate: this.onTweenProgress,
                  })));
              },
            },
          ]) && rr(t.prototype, n),
          r && rr(t, r),
          i
        );
      })(w);
      function fr(e) {
        return (fr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function dr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          hr(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function pr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return mr(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          hr(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function hr(e, t) {
        if (e) {
          if ("string" == typeof e) return mr(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? mr(e, t)
              : void 0
          );
        }
      }
      function mr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function yr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function vr(e, t) {
        return (vr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function gr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = _r(e);
          if (t) {
            var o = _r(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return br(this, n);
        };
      }
      function br(e, t) {
        return !t || ("object" !== fr(t) && "function" != typeof t) ? wr(e) : t;
      }
      function wr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _r(e) {
        return (_r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Sr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      cr(lr, "defaultProps", {
        index: 0,
        slotIndex: 0,
        scale: 1,
        context: null,
        images: [],
        x: 0,
        y: 0,
        duration: 0.8,
        regionWidth: 0,
        regionHeight: 0,
      });
      var xr = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && vr(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = gr(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Sr(wr((n = o.call(this, t))), "loadImageAsset", function (e) {
              var t = n.imageAssets[e].source,
                r =
                  window.innerWidth > 2e3
                    ? 1e3
                    : window.innerWidth < 968
                    ? 200
                    : 500;
              (t.onload = function () {
                (n.imageAssets[e].isLoaded = !0), n.refreshAssets();
              }),
                (t.src = t.dataset.src + "?format=".concat(r, "w"));
            }),
            Sr(wr(n), "refreshAssets", function () {
              for (var e = 0; e < n.slotLen; e += 1) {
                var t = n.slots[e];
                t && t.refreshImageLoadStates();
              }
            }),
            Sr(wr(n), "showImage", function (e) {
              var t = e.x,
                r = e.y,
                o = e.index,
                i = n.props.maxSlots,
                a = n.dimensions,
                s = a.regionWidth,
                u = a.regionHeight,
                c = new lr({
                  slotIndex: n.slotIndex,
                  context: n.context,
                  images: n.imageAssets,
                  x: t,
                  y: r,
                  index: o,
                  scale: n.scale,
                  regionWidth: s,
                  regionHeight: u,
                });
              n.slots[n.slotIndex] && n.slots[n.slotIndex].destroy(),
                (n.slots[n.slotIndex] = c),
                n.sortedSlots.pop(),
                n.sortedSlots.unshift(n.slotIndex),
                (n.slotIndex = (n.slotIndex + 1) % i),
                n.startTicker();
            }),
            Sr(wr(n), "hideImages", function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.isInstant,
                  r = 0;
                r < n.slotLen;
                r += 1
              ) {
                var o = n.slots[r];
                o && o.hide({ isInstant: t });
              }
              t &&
                n.context.clearRect(
                  0,
                  0,
                  n.dimensions.regionWidth * n.scale,
                  n.dimensions.regionHeight * n.scale
                );
            }),
            Sr(wr(n), "tick", function () {
              var e = 0;
              n.context.clearRect(
                0,
                0,
                n.dimensions.regionWidth * n.scale,
                n.dimensions.regionHeight * n.scale
              );
              for (var t = 0; t < n.slotLen; t += 1) {
                var r = n.slots[n.sortedSlots[n.slotLen - 1 - t]];
                r && !r.isCompleted && (r.update(), (e += 1));
              }
              e && (n.rAFID = requestAnimationFrame(n.tick));
            }),
            Sr(wr(n), "destroy", function () {
              n.deactivate(),
                n.slots.forEach(function (e) {
                  e && e.destroy();
                }),
                (n.slots = []),
                n.stopTicker();
            });
          var r = n.props,
            a = r.images,
            s = r.regionWidth,
            u = r.regionHeight,
            c = r.maxSlots;
          return (
            (n.dimensions = { regionWidth: s, regionHeight: u }),
            (n.node = e),
            (n.canvas = document.createElement("canvas")),
            (n.context = n.canvas.getContext("2d")),
            (n.scale = window.devicePixelRatio || 1),
            n.context.scale(n.scale, n.scale),
            n.node.appendChild(n.canvas),
            (n.slots = pr(new Array(c))),
            (n.sortedSlots = pr(new Array(c))
              .map(function (e, t) {
                return t;
              })
              .reverse()),
            (n.imageAssets = a.map(function (e) {
              var t = dr(
                e.dataset.imageDimensions.split("x").map(function (e) {
                  return Number(e);
                }),
                2
              );
              return { source: e, isLoaded: !1, width: t[0], height: t[1] };
            })),
            (n.slotLen = n.slots.length),
            (n.slotIndex = 0),
            (n.isImageAssetsLoading = !1),
            (n.rAFID = null),
            (n.isActive = !1),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "activate",
              value: function () {
                this.isActive || ((this.isActive = !0), this.loadImageAssets());
              },
            },
            {
              key: "deactivate",
              value: function () {
                this.isActive &&
                  ((this.isActive = !1),
                  this.stopTicker(),
                  this.hideImages({ isInstant: !0 }));
              },
            },
            {
              key: "loadImageAssets",
              value: function () {
                var e = this;
                this.isImageAssetsLoading ||
                  this.imageAssets.forEach(function (t, n) {
                    return e.loadImageAsset(n);
                  });
              },
            },
            {
              key: "resize",
              value: function (e, t) {
                (this.dimensions.regionWidth = e),
                  (this.dimensions.regionHeight = t),
                  (this.canvas.width =
                    this.dimensions.regionWidth * this.scale),
                  (this.canvas.height =
                    this.dimensions.regionHeight * this.scale);
                for (var n = 0; n < this.slotLen; n += 1) {
                  var r = this.slots[n];
                  r && !r.isCompleted && r.resize(e, t);
                }
              },
            },
            {
              key: "startTicker",
              value: function () {
                cancelAnimationFrame(this.rAFID),
                  (this.rAFID = requestAnimationFrame(this.tick));
              },
            },
            {
              key: "stopTicker",
              value: function () {
                cancelAnimationFrame(this.rAFID);
              },
            },
          ]) && yr(t.prototype, n),
          r && yr(t, r),
          i
        );
      })(w);
      function Or(e) {
        return (Or =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function kr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Pr(e, t) {
        return (Pr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Tr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Ir(e);
          if (t) {
            var o = Ir(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Er(this, n);
        };
      }
      function Er(e, t) {
        return !t || ("object" !== Or(t) && "function" != typeof t) ? Ar(e) : t;
      }
      function Ar(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ir(e) {
        return (Ir = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Cr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Sr(xr, "defaultProps", {
        regionWidth: 0,
        regionHeight: 0,
        maxSlots: 10,
        images: [],
      });
      var jr = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Pr(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Tr(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Cr(Ar((t = o.call(this, e))), "onItemOver", function (e) {
              var n = t.props,
                r = n.index,
                o = n.itemIndex,
                i = Q(e),
                a = i.clientX,
                s = i.clientY;
              t.props.onItemOver({
                node: t.ref.contentFront,
                index: r,
                itemIndex: o,
                clientX: a,
                clientY: s,
              });
            }),
            Cr(Ar(t), "onItemOut", function () {
              var e = t.props,
                n = e.index,
                r = e.itemIndex;
              t.props.onItemOut({ index: n, itemIndex: r });
            }),
            Cr(Ar(t), "onItemClick", function () {
              return t.props.onItemClick(t.props.route);
            }),
            Cr(Ar(t), "setActiveState", function (e) {
              t.props.linkFrontNode.dataset.active = e;
            }),
            Cr(Ar(t), "setHoverState", function (e) {
              t.props.linkFrontNode.dataset.hover = e;
            }),
            Cr(Ar(t), "destroy", function () {
              t.unbindListeners();
            });
          var n = t.props,
            r = n.linkFrontNode,
            a = n.contentSelector;
          return (
            (t.last = { x: -1, y: -1, rotation: -1 }),
            (t.ref = { contentFront: r.querySelector(a) }),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                var e = this,
                  t = this.props.linkFrontNode;
                t.addEventListener(K.enter, this.onItemOver),
                  K.leave.forEach(function (n) {
                    t.addEventListener(n, e.onItemOut);
                  }),
                  t.addEventListener("click", this.onItemClick);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                var e = this,
                  t = this.props.linkFrontNode;
                t.removeEventListener(K.enter, this.onItemOver),
                  K.leave.forEach(function (n) {
                    t.removeEventListener(n, e.onItemOut);
                  }),
                  t.removeEventListener("click", this.onItemClick);
              },
            },
            {
              key: "setHeight",
              value: function (e) {
                this.props.linkFrontNode.style.height = e + "px";
              },
            },
            {
              key: "setPosition",
              value: function (e, t, n, r, o, i) {
                var a = this.props.linkFrontNode,
                  s = this.ref.contentFront,
                  u = ~~(100 * e) / 100,
                  c = ~~(100 * t) / 100,
                  l = ~~(100 * n) / 100;
                if (u !== this.last.x || c !== this.last.y) {
                  var f =
                    "translate3d(" +
                    u +
                    "px, calc(" +
                    c +
                    "px - 50%), 0) rotate(" +
                    l +
                    "deg)";
                  (a.style.transform = f),
                    (s.style.transform = "rotateY(" + i + "deg)"),
                    (this.last.x = u),
                    (this.last.y = c),
                    (this.last.rotation = l);
                }
              },
            },
          ]) && kr(t.prototype, n),
          r && kr(t, r),
          i
        );
      })(w);
      function Lr(e) {
        return (Lr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Rr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Mr(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Mr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Mr(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Mr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Dr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Fr(e, t) {
        return (Fr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Nr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = qr(e);
          if (t) {
            var o = qr(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Hr(this, n);
        };
      }
      function Hr(e, t) {
        return !t || ("object" !== Lr(t) && "function" != typeof t) ? zr(e) : t;
      }
      function zr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function qr(e) {
        return (qr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Br(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Cr(jr, "defaultProps", {
        route: "/",
        index: 0,
        itemIndex: 0,
        imageNode: null,
        linkFrontNode: null,
        contentSelector: ".menu-index-link-content",
        onItemOver: Ft,
        onItemOut: Ft,
        onItemClick: Ft,
      });
      var Ur = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Fr(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Nr(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Br(zr((n = o.call(this, t))), "pad", function (e, t) {
              for (var n = e + ""; n.length < t; ) n = "0" + n;
              return n;
            }),
            Br(zr(n), "onResize", function () {
              var e = n.props.numItems;
              (n.pos.innerWidth = n.node.clientWidth),
                (n.pos.innerHeight = n.node.clientHeight),
                (n.pos.regionHeight = Math.max(
                  Math.max(700, 40 * e),
                  1.5 * n.pos.innerHeight
                )),
                (n.pos.offsetY =
                  0.5 * (n.pos.regionHeight - n.pos.innerHeight)),
                (n.pos.center = 0.5 * n.pos.regionHeight),
                (n.pos.arcSize =
                  0.35 * Math.min(n.pos.innerHeight, n.pos.innerWidth)),
                n.pos.innerWidth < 800 &&
                  (n.pos.arcSize =
                    0.4 * Math.min(n.pos.innerHeight, n.pos.innerWidth)),
                (n.pos.arcOffset = Math.min(
                  0.5 * n.pos.arcSize,
                  0.15 * n.pos.innerWidth
                )),
                (n.pos.space = (n.pos.regionHeight / (e - 1)) * 1),
                n.pos.innerHeight < 550 &&
                  n.pos.innerWidth > n.pos.innerHeight &&
                  (n.pos.space *= 1.5),
                (n.pos.arcRotationSize = 0.35 * n.pos.arcSize),
                (n.pos.innerWidth < 0.8 * n.pos.innerHeight ||
                  n.pos.innerWidth < 550) &&
                  ((n.pos.arcSize *= 2),
                  (n.pos.space *= 0.75),
                  (n.pos.arcRotationSize *= 4)),
                (n.pos.totalHeight = n.itemLen * n.pos.space),
                (n.pos.offsetX =
                  n.pos.innerWidth > 1500 ? 0.05 * n.pos.innerWidth : 0),
                n.images.resize(n.pos.innerWidth, n.pos.innerHeight),
                n.items.forEach(function (e) {
                  e.setHeight(n.pos.space);
                }),
                n.update();
            }),
            Br(zr(n), "show", function () {
              if (!n.isShown) {
                var e = window.location.pathname;
                a.trigger("modal:state:change", !0),
                  (n.isShown = !0),
                  clearTimeout(n.hideTimeout),
                  n.images.activate(),
                  n.updateActiveRoute(),
                  (n.pos.progress =
                    (n.routes[e] ? -Math.max(1, n.routes[e].index) : -1) - 2.3),
                  (n.pos.scrollVelocity = 0),
                  (n.pos.startVelocity = -10),
                  (n.pos.softScrollVelocity = -50),
                  n.touchScroll.start(),
                  n.bindActiveListeners(),
                  (n.node.dataset.open = !0),
                  n.startTicker(),
                  n.buttonClose.show(),
                  n.showHideTween && n.showHideTween.destroy(),
                  n.setItemRotation(-1),
                  (n.showHideTween = new Bt({
                    from: -1,
                    to: 0,
                    duration: 1,
                    ease: X,
                    onUpdate: n.setItemRotation,
                  }));
              }
            }),
            Br(zr(n), "setItemRotation", function (e) {
              n.itemRotation = 45 * e;
            }),
            Br(zr(n), "onClose", function () {
              n.hide();
            }),
            Br(zr(n), "onItemOver", function (e) {
              var t = e.node,
                r = e.index,
                o = e.clientX,
                i = e.clientY,
                a = W(
                  (o / n.pos.innerWidth) * 0.5 + 0.2 * Math.random(),
                  0.2,
                  0.6
                ),
                s = W(i / n.pos.innerHeight, 0.2, 0.8);
              n.setHoverIndex(r),
                (n.cursor.activeItemNode = t),
                (n.cursor.activeItemndex = r),
                (n.itemOverTimeout = setTimeout(function () {
                  n.images.showImage({ x: a, y: s, index: r });
                }, 100)),
                (n.itemHoverTimeout = setTimeout(function () {
                  n.node.dataset.itemHover = !0;
                }, 300));
            }),
            Br(zr(n), "onItemOut", function (e) {
              clearTimeout(n.itemOverTimeout),
                clearTimeout(n.itemHoverTimeout),
                (n.node.dataset.itemHover = !1),
                (n.cursor.activeItemNode = null),
                n.images.hideImages(),
                n.setHoverIndex(-1);
            }),
            Br(zr(n), "onCursorMove", function (e) {
              (n.cursor.x = e.clientX), (n.cursor.y = e.clientY);
            }),
            Br(zr(n), "onCursorCheck", function () {
              var e = document
                .elementFromPoint(n.cursor.x, n.cursor.y)
                .closest(".menu-index-link-content");
              n.cursor.activeItemNode &&
                e !== n.cursor.activeItemNode &&
                n.onItemOut(n.cursor.activeItemIndex);
            }),
            Br(zr(n), "setHoverIndex", function (e) {
              n.items.forEach(function (t) {
                t.props.index !== e ? t.setHoverState(!1) : t.setHoverState(!0);
              });
            }),
            Br(zr(n), "onNavigate", function (e) {
              a.trigger("router:navigate", e), n.hide();
            }),
            Br(zr(n), "tick", function () {
              (n.rAFID = requestAnimationFrame(n.tick)), n.update();
            }),
            Br(zr(n), "destroy", function () {
              n.unbindListeners(),
                n.stopTicker(),
                n.showHideTween && n.showHideTween.destroy(),
                clearTimeout(n.itemOverTimeout),
                clearTimeout(n.itemHoverTimeout),
                clearTimeout(n.hideTimeout);
            });
          var r = n.props,
            s = r.routes,
            u = r.numItems,
            c = r.dataItemSelector,
            l = r.imageWrapperSelector,
            f = r.linkWrapperSelector,
            d = r.imageSelector,
            p = r.closeButtonFrontSelector,
            h = r.closeButtonBackSelector;
          (n.node = e),
            (n.routes = s),
            (n.ref = {
              imageWrapper: n.node.querySelector(l),
              linkWrapper: n.node.querySelector(f),
            });
          var m = Array.from(n.node.querySelectorAll(c));
          return (
            (n.progressLen = m.length),
            (n.showHideTween = null),
            (n.cursor = {
              x: 0,
              y: 0,
              interval: null,
              activeItemNode: null,
              activeItemIndex: 0,
            }),
            (n.items = n.buildItems({ items: m, count: u })),
            (n.itemLen = n.items.length),
            (n.itemRotation = 0),
            (n.pos = {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
              progress: 0,
              startVelocity: 0,
              scrollVelocity: 0,
              softScrollVelocity: 0,
            }),
            (n.rAFID = null),
            (n.images = new xr(n.ref.imageWrapper, {
              images: m.map(function (e) {
                return e.querySelector(d);
              }),
              regionWidth: n.pos.innerWidth,
              regionHeight: n.pos.innerHeight,
            })),
            (n.itemOverTimeout = null),
            (n.itemHoverTimeout = null),
            (n.touchScroll = new tr()),
            (n.isShown = !1),
            (n.hideTimeout = null),
            (n.buttonClose = new Wn({
              nodeFront: n.node.querySelector(p),
              nodeBack: n.node.querySelector(h),
              onClick: n.onClose,
            })),
            n.buttonClose.hide({ isInstant: !0 }),
            n.bindListeners(),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "buildItems",
              value: function (e) {
                var t = this,
                  n = e.count,
                  r = e.items,
                  o = this.props,
                  i = o.linkSelector,
                  a = o.linkIndexSelector,
                  s = o.linkFrontClassName,
                  u = r.length,
                  c = Math.ceil(n / u) * u * 2;
                return Rr(new Array(c)).map(function (e, n) {
                  var o = n % u,
                    c = r[o].cloneNode(!0),
                    l = c.querySelector(i);
                  return (
                    (l.querySelector(a).innerHTML = t.pad(o + 1, 2)),
                    l.classList.add(s),
                    t.ref.linkWrapper.appendChild(l),
                    new jr({
                      index: o,
                      route: c.dataset.route,
                      itemIndex: n,
                      linkFrontNode: l,
                      onItemOver: t.onItemOver,
                      onItemOut: t.onItemOut,
                      onItemClick: t.onNavigate,
                    })
                  );
                });
              },
            },
            {
              key: "bindListeners",
              value: function () {
                U.on(this.onResize),
                  a.on("router:route:change", this.onClose),
                  a.on("menu:open", this.show),
                  this.onResize();
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                U.off(this.onResize),
                  a.off("router:route:change", this.onClose),
                  a.off("menu:open", this.show);
              },
            },
            {
              key: "hide",
              value: function () {
                var e = this;
                this.isShown &&
                  ((this.isShown = !1),
                  this.unbindActiveListeners(),
                  clearTimeout(this.hideTimeout),
                  (this.hideTimeout = setTimeout(function () {
                    a.trigger("modal:state:change", !1),
                      e.touchScroll.stop(),
                      (e.node.dataset.open = !1),
                      e.buttonClose.hide(),
                      e.showHideTween && e.showHideTween.destroy(),
                      (e.showHideTween = new Bt({
                        from: e.itemRotation,
                        to: 0.5,
                        duration: 0.4,
                        ease: X,
                        onUpdate: e.setItemRotation,
                        onComplete: function () {
                          e.images.deactivate(), e.stopTicker();
                        },
                      }));
                  }, 300)));
              },
            },
            {
              key: "bindActiveListeners",
              value: function () {
                J ||
                  (document.addEventListener("mousemove", this.onCursorMove),
                  (this.cursor.interval = setInterval(
                    this.onCursorCheck,
                    500
                  )));
              },
            },
            {
              key: "unbindActiveListeners",
              value: function () {
                J ||
                  (document.removeEventListener("mousemove", this.onCursorMove),
                  clearInterval(this.cursor.interval));
              },
            },
            {
              key: "updateActiveRoute",
              value: function () {
                var e = window.location.pathname;
                this.items.forEach(function (t) {
                  t.setActiveState(t.props.route === e);
                });
              },
            },
            {
              key: "startTicker",
              value: function () {
                cancelAnimationFrame(this.rAFID),
                  (this.rAFID = requestAnimationFrame(this.tick));
              },
            },
            {
              key: "stopTicker",
              value: function () {
                cancelAnimationFrame(this.rAFID);
              },
            },
            {
              key: "update",
              value: function () {
                var e = this.pos,
                  t = e.innerWidth,
                  n = e.innerHeight;
                (this.pos.scrollVelocity +=
                  0.4 *
                  (this.touchScroll.pos.velocity - this.pos.scrollVelocity)),
                  (this.pos.softScrollVelocity +=
                    0.05 *
                    (this.touchScroll.pos.velocity -
                      this.pos.softScrollVelocity)),
                  (this.pos.progress += 0.005 * this.pos.scrollVelocity);
                var r,
                  o =
                    (((this.pos.progress - this.pos.startVelocity) %
                      this.progressLen) +
                      this.progressLen) %
                    this.progressLen,
                  i = Math.abs(this.pos.softScrollVelocity);
                this.pos.startVelocity *= 0.95;
                for (var a = 0; a < this.itemLen; a += 1) {
                  var s = this.items[a],
                    u = this.pos.center + (a + o) * this.pos.space;
                  u >= this.pos.regionHeight && (u -= this.pos.totalHeight),
                    (u < -50 || u > n + 50) && (u = -9999);
                  var c =
                      ((r = Math.abs(
                        (u + this.pos.offsetY) / this.pos.regionHeight - 0.5
                      )),
                      -(Math.sqrt(1 - r * r) - 1) * (5 + 0.1 * i)),
                    l = (u + this.pos.offsetY) / this.pos.regionHeight - 0.5;
                  s.setPosition(
                    this.pos.offsetX +
                      this.pos.arcOffset +
                      -c * (2 * this.pos.arcSize),
                    u,
                    l * (this.pos.arcRotationSize + 3 * i),
                    t,
                    n,
                    this.itemRotation
                  );
                }
              },
            },
          ]) && Dr(t.prototype, n),
          r && Dr(t, r),
          i
        );
      })(w);
      function Wr(e) {
        return (Wr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Vr(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Yr(e, t) {
        return (Yr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Xr(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Qr(e);
          if (t) {
            var o = Qr(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Gr(this, n);
        };
      }
      function Gr(e, t) {
        return !t || ("object" !== Wr(t) && "function" != typeof t) ? Jr(e) : t;
      }
      function Jr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Qr(e) {
        return (Qr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Br(Ur, "defaultProps", {
        routes: {},
        dataSelector: ".menu-index-data",
        dataItemSelector: ".menu-index-data-item",
        backgroundSelector: ".menu-index-background",
        imageWrapperSelector: ".menu-index-images",
        linkWrapperSelector: ".menu-index-links",
        imageSelector: ".menu-index-image img",
        linkSelector: ".menu-index-link",
        linkIndexSelector: ".menu-index-link-index",
        closeButtonFrontSelector: ".menu-index-close--front",
        closeButtonBackSelector: ".menu-index-close--back",
        linkFrontClassName: "menu-index-link--front",
        linkBackClassName: "menu-index-link--back",
        numItems: 18,
      });
      var Kr = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Yr(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Xr(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            $r(Jr((n = o.call(this, t))), "onClose", function () {
              n.hide();
            }),
            $r(Jr(n), "onPageDataLoaded", function (e, t) {
              if (e === n.props.routeURL && !n.isLoaded) {
                n.isLoaded = !0;
                var r = document.createDocumentFragment(),
                  o = document.createElement("div");
                (o.innerHTML = t),
                  o
                    .querySelectorAll(".layout-engine-section .content")
                    .forEach(function (e) {
                      r.appendChild(e);
                    }),
                  (n.contentFragment = r),
                  n.isShown &&
                    ((n.ref.video.src = n.videoSource),
                    n.ref.contentWrapper.appendChild(r),
                    (n.isAdded = !0),
                    n.playVideo());
              }
            }),
            $r(Jr(n), "setItemRotation", function (e) {
              (n.itemRotation = e),
                n.ref.contentWrapper.style.setProperty(
                  "--content-y",
                  100 * -e + "px"
                );
            }),
            $r(Jr(n), "destroy", function () {
              n.unbindListeners(),
                n.showHideTween && n.showHideTween.destroy(),
                clearTimeout(n.hideTimeout);
            });
          var r = n.props,
            a = r.routes,
            s = r.routeURL,
            u = r.contentWrapperSelector,
            c = r.videoSelector,
            l = r.videoSourceSelector,
            f = r.closeButtonFrontSelector,
            d = r.closeButtonBackSelector;
          return (
            (n.routes = a),
            (n.node = e),
            (n.ref = {
              contentWrapper: n.node.querySelector(u),
              video: n.node.querySelector(c),
              videoSource: n.node.querySelector(l),
            }),
            (n.videoSource = n.ref.videoSource.dataset.src),
            (n.isShown = !1),
            (n.hideTimeout = null),
            (n.isLoaded = !1),
            (n.showHideTween = null),
            (n.itemRotation = 0),
            (n.buttonClose = new Wn({
              nodeFront: n.node.querySelector(f),
              nodeBack: n.node.querySelector(d),
              onClick: n.onClose,
            })),
            n.buttonClose.hide({ isInstant: !0 }),
            n.ref.video.pause(),
            n.routes[s].page && n.onPageDataLoaded(),
            n.bindListeners(),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                a.on("router:page:added", this.onPageDataLoaded),
                  a.on("router:route:change", this.onClose);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                a.off("router:page:added", this.onPageDataLoaded),
                  a.off("router:route:change", this.onClose);
              },
            },
            {
              key: "show",
              value: function () {
                this.isShown ||
                  (this.contentFragment &&
                    !this.isAdded &&
                    ((this.isAdded = !0),
                    (this.ref.video.src = this.videoSource),
                    this.ref.contentWrapper.appendChild(this.contentFragment)),
                  this.node.scrollTo(0, 0),
                  a.trigger("modal:state:change", !0),
                  (this.isShown = !0),
                  clearTimeout(this.hideTimeout),
                  (this.node.dataset.open = !0),
                  this.buttonClose.show(),
                  this.playVideo(),
                  this.showHideTween && this.showHideTween.destroy(),
                  this.setItemRotation(-1),
                  (this.showHideTween = new Bt({
                    from: -1,
                    to: 0,
                    duration: 0.6,
                    ease: X,
                    onUpdate: this.setItemRotation,
                  })));
              },
            },
            {
              key: "hide",
              value: function () {
                var e = this;
                this.isShown &&
                  ((this.isShown = !1),
                  clearTimeout(this.hideTimeout),
                  this.buttonClose.hide(),
                  a.trigger("modal:state:change", !1),
                  (this.hideTimeout = setTimeout(function () {
                    (e.node.dataset.open = !1),
                      e.showHideTween && e.showHideTween.destroy(),
                      (e.showHideTween = new Bt({
                        from: e.itemRotation,
                        to: 0.5,
                        duration: 0.4,
                        ease: X,
                        onUpdate: e.setItemRotation,
                        onComplete: function () {
                          e.stopVideo();
                        },
                      }));
                  }, 300)));
              },
            },
            {
              key: "playVideo",
              value: function () {
                this.ref.video.play();
              },
            },
            {
              key: "stopVideo",
              value: function () {
                this.ref.video.pause();
              },
            },
          ]) && Vr(t.prototype, n),
          r && Vr(t, r),
          i
        );
      })(w);
      function Zr(e) {
        return (Zr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function eo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function to(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function no(e, t) {
        return (no =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ro(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ao(e);
          if (t) {
            var o = ao(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return oo(this, n);
        };
      }
      function oo(e, t) {
        return !t || ("object" !== Zr(t) && "function" != typeof t) ? io(e) : t;
      }
      function io(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ao(e) {
        return (ao = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function so(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      $r(Kr, "defaultProps", {
        routes: null,
        routeURL: "/about",
        contentWrapperSelector: ".about-content",
        closeButtonFrontSelector: ".about-close--front",
        closeButtonBackSelector: ".about-close--back",
        videoSelector: "video",
        videoSourceSelector: "video source",
      });
      var uo = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && no(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = ro(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            so(io((t = o.call(this, e))), "onPress", function (e) {
              e.stopPropagation(),
                ("number" == typeof e.button && 0 !== e.button) ||
                  t.startSwipe(e, t.normalizeMouseEvent(e));
            }),
            so(io(t), "onMove", function (e) {
              var n = t.props,
                r = n.axis,
                o = n.minSwipeLength,
                i = n.preventScroll;
              if (
                (i && (e.preventDefault(), e.stopPropagation()),
                !e.targetTouches ||
                  e.targetTouches[0].identifier === t.state.touchIdentifier)
              ) {
                var a = t.getSwipeDirection(t.normalizeMouseEvent(e));
                i &&
                  ("xy" === r
                    ? e.preventDefault()
                    : "x" === r
                    ? a.swipeLengthX >= o && e.preventDefault()
                    : a.swipeLengthY >= o && e.preventDefault()),
                  t.isSwipeDirectionUnchanged(a)
                    ? t.updateSwipe(a, t.normalizeMouseEvent(e))
                    : t.resetSwipe();
              }
            }),
            so(io(t), "onRelease", function () {
              var e = t.getSwipeLength(t.state.pos),
                n = new Date().getTime() - t.state.swipeStart.getTime();
              if (e > t.props.minSwipeLength && n <= t.props.maxTimeThreshold) {
                var r =
                    (t.state.direction.y || "") + (t.state.direction.x || ""),
                  o = "onSwipe".concat(r),
                  i = {
                    type: "swipe".concat(r),
                    timestampStart: t.state.swipeStart,
                    timestampEnd: new Date(),
                    start: t.state.start,
                    end: t.state.pos,
                    direction: t.state.direction,
                  };
                t.props.onSwipe && t.props.onSwipe(i),
                  t.props[o] && t.props[o](i);
              }
              t.endSwipe();
            }),
            so(io(t), "getSwipeLength", function (e) {
              return t.getSwipeLengthX(e) + t.getSwipeLengthY(e);
            }),
            so(io(t), "getSwipeLengthX", function (e) {
              return Math.abs(e.x - t.state.start.x);
            }),
            so(io(t), "getSwipeLengthY", function (e) {
              return Math.abs(e.y - t.state.start.y);
            }),
            so(io(t), "isSwipeDirectionUnchanged", function (e) {
              return !(
                (t.state.direction.x && t.state.direction.x !== e.x) ||
                (t.state.direction.y && t.state.direction.y !== e.y)
              );
            }),
            so(io(t), "normalizeMouseEvent", function (e) {
              var t = Q(e);
              return { x: t.clientX, y: t.clientY };
            });
          var n = t.props.node;
          return (
            (t.state = {
              touchIdentifier: null,
              direction: { x: null, y: null },
              pos: { x: null, y: null },
              start: { x: null, y: null },
              swipeStart: new Date(),
            }),
            (t.node = n),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                this.node.addEventListener(K.press, this.onPress),
                  this.node.addEventListener(K.move, this.onMove);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                this.node.removeEventListener(K.press, this.onPress),
                  this.node.removeEventListener(K.move, this.onMove);
              },
            },
            {
              key: "getSwipeDirection",
              value: function (e) {
                var t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? eo(Object(n), !0).forEach(function (t) {
                          so(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : eo(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, this.state.direction);
                return (
                  (t.swipeLengthY = this.getSwipeLengthY(e)),
                  (t.swipeLengthX = this.getSwipeLengthX(e)),
                  t.swipeLengthY > this.props.moveThreshold &&
                    (t.y = e.y < this.state.start.y ? "Up" : "Down"),
                  t.swipeLengthX > this.props.moveThreshold &&
                    (t.x = e.x < this.state.start.x ? "Left" : "Right"),
                  t
                );
              },
            },
            {
              key: "startSwipe",
              value: function (e, t) {
                var n = this;
                this.setState({
                  touchIdentifier: e.targetTouches
                    ? e.targetTouches[0].identifier
                    : null,
                  direction: { x: null, y: null },
                  start: t,
                  pos: { x: null, y: null },
                  swipeStart: new Date(),
                }),
                  K.release.forEach(function (e) {
                    document.addEventListener(e, n.onRelease);
                  });
              },
            },
            {
              key: "endSwipe",
              value: function () {
                var e = this;
                K.release.forEach(function (t) {
                  document.removeEventListener(t, e.onRelease);
                });
              },
            },
            {
              key: "updateSwipe",
              value: function (e, t) {
                this.setState({ direction: e, pos: t });
              },
            },
            {
              key: "resetSwipe",
              value: function () {
                this.setState({
                  touchIdentifier: null,
                  direction: { x: null, y: null },
                  pos: { x: null, y: null },
                  start: { x: null, y: null },
                  swipeStart: new Date(),
                });
              },
            },
            {
              key: "destroy",
              value: function () {
                this.unbindListeners(), this.endSwipe();
              },
            },
          ]) && to(t.prototype, n),
          r && to(t, r),
          i
        );
      })(w);
      function co(e) {
        return (co =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function lo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? lo(Object(n), !0).forEach(function (t) {
                bo(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : lo(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function po(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ho(e, t) {
        return (ho =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function mo(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = go(e);
          if (t) {
            var o = go(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return yo(this, n);
        };
      }
      function yo(e, t) {
        return !t || ("object" !== co(t) && "function" != typeof t) ? vo(e) : t;
      }
      function vo(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function go(e) {
        return (go = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function bo(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      so(uo, "defaultProps", {
        node: document.createElement("div"),
        axis: "xy",
        maxTimeThreshold: 600,
        minSwipeLength: 40,
        moveThreshold: 100,
        preventScroll: !0,
        onSwipe: Ft,
        onSwipeLeft: Ft,
        onSwipeUpLeft: Ft,
        onSwipeUp: Ft,
        onSwipeUpRight: Ft,
        onSwipeRight: Ft,
        onSwipeDownRight: Ft,
        onSwipeDown: Ft,
        onSwipeDownLeft: Ft,
      });
      var wo = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && ho(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = mo(i);
        function i(e, t) {
          var n;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            bo(vo((n = o.call(this, t))), "destroy", function () {
              n.tween && n.tween.destroy();
            }),
            (n.node = e),
            (n.background = {
              front: fo({}, n.addCanvas("menu-index-background-front")),
              back: fo({}, n.addCanvas("menu-index-background-back")),
              backOpacity: 0,
              opacity: 0,
            }),
            (n.tween = null),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "addCanvas",
              value: function (e) {
                var t = document.createElement("canvas"),
                  n = t.getContext("2d");
                return (
                  (t.width = 1),
                  (t.height = 1),
                  e && t.classList.add(e),
                  this.node.appendChild(t),
                  { canvas: t, context: n }
                );
              },
            },
            {
              key: "show",
              value: function (e, t) {
                var n = this,
                  r = this.props,
                  o = r.duration,
                  i = r.delayShow;
                this.tween && this.tween.destroy(),
                  (this.background.opacity = 0),
                  (this.background.color = e),
                  (this.background.backOpacity = t),
                  (this.tween = new Bt({
                    from: 0,
                    to: 1,
                    duration: o,
                    delay: i,
                    onUpdate: function (e) {
                      (n.background.opacity = e), n.update();
                    },
                  })),
                  this.update();
              },
            },
            {
              key: "hide",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.duration;
                t.delay,
                  this.tween && this.tween.destroy(),
                  (this.tween = new Bt({
                    from: this.background.opacity,
                    to: 0,
                    duration: n,
                    onUpdate: function (t) {
                      (e.background.opacity = t), e.update();
                    },
                  }));
              },
            },
            {
              key: "update",
              value: function (e) {
                var t = this.background,
                  n = t.front,
                  r = t.back,
                  o = t.backOpacity,
                  i = t.opacity,
                  a = t.color;
                n.context.clearRect(0, 0, 1, 1),
                  (n.context.globalAlpha = i),
                  (n.context.fillStyle = a),
                  n.context.fillRect(0, 0, 1, 1),
                  r.context.clearRect(0, 0, 1, 1),
                  (r.context.globalAlpha = o),
                  r.context.drawImage(n.canvas, 0, 0);
              },
            },
          ]) && po(t.prototype, n),
          r && po(t, r),
          i
        );
      })(w);
      bo(wo, "defaultProps", { duration: 0.3, delayShow: 0.1 });
      var _o = n(7);
      function So(e) {
        return (So =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function xo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Oo(e, t) {
        return (Oo =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ko(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Eo(e);
          if (t) {
            var o = Eo(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Po(this, n);
        };
      }
      function Po(e, t) {
        return !t || ("object" !== So(t) && "function" != typeof t) ? To(e) : t;
      }
      function To(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Eo(e) {
        return (Eo = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ao(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Io = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Oo(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = ko(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Ao(To((t = o.call(this, e))), "onResize", function (e, n) {
              var r = t.props,
                o = r.width,
                i = r.height;
              (t.dimensions.regionWidth = e), (t.dimensions.regionHeight = n);
              var a = Math.min(
                t.dimensions.regionWidth / o,
                t.dimensions.regionHeight / i
              );
              (t.dimensions.width = o * a),
                (t.dimensions.height = i * a),
                (t.pos.x =
                  0.5 * t.dimensions.regionWidth - 0.5 * t.dimensions.width),
                (t.pos.y =
                  0.5 * t.dimensions.regionHeight - 0.5 * t.dimensions.height),
                t.update();
            }),
            Ao(To(t), "show", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.isInitial,
                r = void 0 !== n && n,
                o = e.isNext,
                i = void 0 === o || o;
              if (!t.isShown) {
                var a = t.props,
                  s = a.pageNode,
                  u = a.duration,
                  c = a.delayShow,
                  l = a.video;
                (t.isShown = !0),
                  (t.isActive = !0),
                  (t.node.dataset.active = !0),
                  (t.pos.pageProgress = 1),
                  (t.pos.hideProgress = 0),
                  (t.pos.axisProgress = r ? 0 : i ? 1 : -1),
                  t.pageProgressTween && t.pageProgressTween.destroy(),
                  t.tween && t.tween.destroy(),
                  clearTimeout(t.pageNodeHideTimeout),
                  r &&
                    ((t.pos.pageProgress = 0),
                    (t.pageProgressTween = new Bt({
                      from: 0,
                      to: 1,
                      delay: c,
                      duration: u,
                      ease: X,
                      onUpdate: function (e) {
                        t.pos.pageProgress = e;
                      },
                    }))),
                  (t.tween = new Bt({
                    from: t.pos.axisProgress,
                    to: 0,
                    duration: u,
                    delay: c,
                    ease: X,
                    onUpdate: function (e) {
                      (t.pos.axisProgress = e), t.update();
                    },
                  })),
                  l
                    ? (t.addVideo(),
                      (t.node.dataset.loaded = !0),
                      (t.node.dataset.video = !0))
                    : t.loadImage(),
                  t.update(),
                  (t.pageNodeHideTimeout = setTimeout(function () {
                    s.style.visibility = "hidden";
                  }, 100));
              }
            }),
            Ao(To(t), "hide", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.isClose,
                r = void 0 !== n && n,
                o = e.isCloseUp,
                i = void 0 !== o && o,
                a = e.isNext,
                s = void 0 === a || a;
              if (t.isShown) {
                var u = t.props,
                  c = u.pageNode,
                  l = u.duration;
                clearTimeout(t.pageNodeHideTimeout),
                  (c.style.visibility = "visible"),
                  t.pageProgressTween && t.pageProgressTween.destroy(),
                  t.tween && t.tween.destroy(),
                  (t.tween = new Bt({
                    from: r ? 0 : t.pos.axisProgress,
                    to: r ? (i ? 1 : -1) : s ? -1 : 1,
                    duration: l,
                    ease: X,
                    onUpdate: function (e) {
                      r ? (t.pos.hideProgress = e) : (t.pos.axisProgress = e),
                        t.update();
                    },
                    onComplete: function () {
                      (t.isActive = !1),
                        t.ref.video && t.removeVideo(),
                        (t.node.dataset.active = !1);
                    },
                  })),
                  (t.isShown = !1);
              }
            }),
            Ao(To(t), "onVideoClick", function (e) {
              t.player &&
                (t.player.play(),
                t.ref.video.removeEventListener("click", t.onVideoClick),
                t.ref.video.removeEventListener("mouseenter", t.onVideoOver),
                t.ref.video.removeEventListener("mouseleave", t.onVideoOut),
                t.onVideoOut(),
                e.preventDefault(),
                e.stopPropagation());
            }),
            Ao(To(t), "onVideoOver", function () {
              return t.props.onVideoOver();
            }),
            Ao(To(t), "onVideoOut", function () {
              return t.props.onVideoOut();
            }),
            Ao(To(t), "onVideoPlay", function () {
              (t.node.dataset.playing = !0), (t.node.dataset.buffering = !1);
            }),
            Ao(To(t), "onVideoBuffer", function () {
              t.node.dataset.buffering = !0;
            }),
            Ao(To(t), "update", function () {
              if (t.isActive) {
                var e =
                    V(t.pageRect.left, t.pos.x, t.pos.pageProgress) +
                    t.pos.axisProgress * (0.1 * t.dimensions.regionWidth),
                  n =
                    V(t.pageRect.top, t.pos.y, t.pos.pageProgress) +
                    t.pos.hideProgress * (0.25 * t.dimensions.regionHeight),
                  r = V(
                    t.pageRect.width,
                    t.dimensions.width,
                    t.pos.pageProgress
                  ),
                  o = V(
                    t.pageRect.height,
                    t.dimensions.height,
                    t.pos.pageProgress
                  ),
                  i = Math.max(
                    0,
                    1 -
                      Math.abs(t.pos.axisProgress) -
                      Math.abs(t.pos.hideProgress)
                  );
                (t.node.style.transform =
                  "translate3d(" + e + "px, " + n + "px, 0)"),
                  (t.node.style.width = r + "px"),
                  (t.node.style.height = o + "px"),
                  (t.node.style.opacity = i);
              }
            }),
            Ao(To(t), "destroy", function () {
              t.pageProgressTween && t.pageProgressTween.destroy(),
                t.tween && t.tween.destroy(),
                clearTimeout(t.pageNodeHideTimeout);
            });
          var n = t.props,
            r = n.container,
            a = n.isInitial,
            s = n.pageNode,
            u = n.regionWidth,
            c = n.regionHeight;
          t.pageRect = s.getBoundingClientRect();
          var l = t.render(),
            f = l.node,
            d = l.blur,
            p = l.clone,
            h = l.img,
            m = l.video;
          return (
            (t.node = f),
            (t.ref = { blur: d, clone: p, img: h, video: m }),
            (t.dimensions = {
              regionWidth: 0,
              regionHeight: 0,
              width: 0,
              height: 0,
            }),
            (t.pos = {
              x: 0,
              y: 0,
              pageProgress: 1,
              axisProgress: 0,
              hideProgress: 0,
            }),
            t.onResize(u, c),
            r.appendChild(t.node),
            (t.isShown = !1),
            (t.isActive = !1),
            (t.pageProgressTween = null),
            (t.tween = null),
            (t.pageProgress = 1),
            (t.isLoadStarted = !1),
            a ? t : Po(t)
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.src,
                  n = e.video,
                  r = e.isInitial,
                  o = e.pageNode,
                  i = e.focalPoint,
                  a = document.createElement("div");
                (a.className = "lightbox-item"),
                  a.style.setProperty("--focal-x", i.x),
                  a.style.setProperty("--focal-y", i.y);
                var s =
                  '\n      <div class="lightbox-item-blur" style="background-image: url('.concat(
                    t,
                    '?format=50w);"></div>\n      <div class="lightbox-item-clone"></div>\n    '
                  );
                (s += n
                  ? '<div class="lightbox-item-video"></div><div class="lightbox-item-video-state"></div>'
                  : '<img class="lightbox-item-img" />'),
                  (a.innerHTML = s);
                var u = a.querySelector(".lightbox-item-blur"),
                  c = a.querySelector(".lightbox-item-clone"),
                  l = a.querySelector(".lightbox-item-img"),
                  f = a.querySelector(".lightbox-item-video");
                if (r) {
                  var d = o.querySelector("img");
                  if (d.dataset.loaded) {
                    var p = d.cloneNode();
                    (p.className = "lightbox-item-clone-img"), c.appendChild(p);
                  }
                }
                return { node: a, blur: u, clone: c, img: l, video: f };
              },
            },
            {
              key: "loadImage",
              value: function () {
                var e = this;
                if (!this.isLoadStarted) {
                  var t = this.props.src,
                    n = this.ref.img;
                  (this.isLoadStarted = !0),
                    (n.onload = function () {
                      e.node.dataset.loaded = !0;
                    }),
                    (n.src = ""
                      .concat(t, "?format=")
                      .concat(window.innerWidth < 1200 ? 1e3 : 2500, "w"));
                }
              },
            },
            {
              key: "addVideo",
              value: function () {
                var e = this.props,
                  t = e.video,
                  n = e.videoAutoplay,
                  r = t.html.match(
                    /(http|ftp|https):\/\/([\w\-_]+(?:(?:\.[\w\-_]+)+))([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/
                  )[0];
                (this.node.dataset.playing = !1),
                  (this.node.dataset.buffering = !1),
                  (this.ref.video.innerHTML = '<iframe src="'
                    .concat(r, "&controls=0&playsinline=1&loop=1")
                    .concat(
                      J && n ? "&background=1" : "",
                      '" allow="autoplay"></iframe>'
                    ));
                var o = this.ref.video.querySelector("iframe");
                if (
                  ((this.player = new _o.a(o, {
                    controls: !1,
                    playsinline: !0,
                  })),
                  this.player.on("bufferstart", this.onVideoBuffer),
                  this.player.on("playing", this.onVideoPlay),
                  !J || n)
                )
                  return (
                    (this.node.dataset.buffering = !0), void this.player.play()
                  );
                this.ref.video.addEventListener("click", this.onVideoClick),
                  this.ref.video.addEventListener(
                    "mouseenter",
                    this.onVideoOver
                  ),
                  this.ref.video.addEventListener(
                    "mouseleave",
                    this.onVideoOut
                  );
              },
            },
            {
              key: "removeVideo",
              value: function () {
                this.player &&
                  (this.player.off("bufferstart", this.onVideoBuffer),
                  this.player.off("playing", this.onVideoPlay)),
                  this.ref.video.removeEventListener(
                    "click",
                    this.onVideoClick
                  ),
                  (this.ref.video.innerHTML = ""),
                  this.ref.video.removeEventListener(
                    "mouseenter",
                    this.onVideoOver
                  ),
                  this.ref.video.removeEventListener(
                    "mouseleave",
                    this.onVideoOut
                  ),
                  this.onVideoOut();
              },
            },
          ]) && xo(t.prototype, n),
          r && xo(t, r),
          i
        );
      })(w);
      function Co(e) {
        return (Co =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function jo(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Lo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Lo(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Lo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ro(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Mo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ro(Object(n), !0).forEach(function (t) {
                Bo(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ro(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Do(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Fo(e, t) {
        return (Fo =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function No(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = qo(e);
          if (t) {
            var o = qo(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Ho(this, n);
        };
      }
      function Ho(e, t) {
        return !t || ("object" !== Co(t) && "function" != typeof t) ? zo(e) : t;
      }
      function zo(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function qo(e) {
        return (qo = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Bo(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Ao(Io, "defaultProps", {
        video: null,
        videoAutoplay: !1,
        src: "",
        focalPoint: { x: 0.5, y: 0.5 },
        width: 800,
        height: 600,
        container: null,
        isInitial: !1,
        pageNode: null,
        regionWidth: 800,
        regionHeight: 600,
        duration: 0.3,
        delayShow: 0.1,
        onVideoOver: Ft,
        onVideoOut: Ft,
      });
      var Uo = 39,
        Wo = 37,
        Vo = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Fo(e, t);
          })(i, e);
          var t,
            n,
            r,
            o = No(i);
          function i(e, t) {
            var n;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              Bo(zo((n = o.call(this, t))), "onResize", function () {
                var e = n.ref.imageContainer.clientWidth,
                  t = n.ref.imageContainer.clientHeight;
                (n.innerWidth = window.innerWidth),
                  (n.innerHeight = window.innerHeight),
                  n.items.forEach(function (n) {
                    n.onResize(e, t);
                  });
              }),
              Bo(zo(n), "onKeyDown", function (e) {
                if (e.keyCode === Uo)
                  return n.setIndexOffset(1), void e.preventDefault();
                e.keyCode === Wo && (n.setIndexOffset(-1), e.preventDefault());
              }),
              Bo(zo(n), "onCursorMove", function (e) {
                var t = Q(e),
                  r = t.clientX,
                  o = t.clientY;
                (n.cursor.x = r),
                  (n.cursor.y = o),
                  clearTimeout(n.cursor.hideTimeout),
                  n.cursor.isActive ||
                    ((n.cursor.isActive = !0),
                    (n.node.dataset.cursorActive = !0)),
                  n.cursor.x < 0.35 * n.innerWidth
                    ? "previous" !== n.cursor.mode &&
                      ((n.cursor.mode = "previous"),
                      (n.node.dataset.cursor = "previous"))
                    : n.cursor.x > 0.65 * n.innerWidth
                    ? "next" !== n.cursor.mode &&
                      ((n.cursor.mode = "next"),
                      (n.node.dataset.cursor = "next"))
                    : "close" !== n.cursor.mode &&
                      ((n.cursor.mode = "close"),
                      (n.node.dataset.cursor = "close")),
                  (n.cursor.hideTimeout = setTimeout(function () {
                    (n.cursor.isActive = !1),
                      (n.node.dataset.cursorActive = !1);
                  }, 1e3));
              }),
              Bo(zo(n), "onDocumentClick", function (e) {
                if (!n.isKeyModified(e)) {
                  for (
                    var t = e.target;
                    t && t !== document.body && void 0 === t.dataset.lightbox;

                  )
                    t = t.parentElement;
                  if (
                    t &&
                    t !== document.body &&
                    void 0 !== t.dataset.lightbox
                  ) {
                    e.preventDefault();
                    var r = JSON.parse(t.dataset.lightbox);
                    n.openLightbox(t, r);
                  }
                }
              }),
              Bo(zo(n), "onLightboxClick", function (e) {
                var t = Q(e).clientX,
                  r = window.innerWidth;
                t < 0.35 * r || t > 0.65 * r
                  ? n.setIndexOffset(t < 0.5 * r ? -1 : 1)
                  : n.closeLightbox();
              }),
              Bo(zo(n), "setIndexOffset", function (e) {
                var t = n.index + e,
                  r = t > n.index,
                  o = n.items.length,
                  i = ((t % o) + o) % o || 0;
                (n.index = i),
                  n.items.forEach(function (e, t) {
                    t !== n.index
                      ? e.hide({ isNext: r })
                      : e.show({ isNext: r });
                  });
              }),
              Bo(zo(n), "closeLightbox", function (e) {
                n.isShown &&
                  ((n.isShown = !1),
                  clearTimeout(n.hideTimeout),
                  n.background.hide(),
                  n.unbindActiveListeners(),
                  n.items.forEach(function (t) {
                    t.hide(Mo(Mo({}, e), {}, { isClose: !0 }));
                  }),
                  (n.node.dataset.active = !1),
                  a.trigger("modal:state:change", !1),
                  (n.hideTimeout = setTimeout(function () {
                    n.node.dataset.open = !1;
                  }, 300)));
              }),
              Bo(zo(n), "onVideoOver", function () {
                n.node.dataset.videoCursor = !0;
              }),
              Bo(zo(n), "onVideoOut", function () {
                n.node.dataset.videoCursor = !1;
              }),
              Bo(zo(n), "tick", function () {
                if (n.cursor.isActive) {
                  var e =
                    "translate3d(" +
                    n.cursor.x +
                    "px, " +
                    n.cursor.y +
                    "px, 0)";
                  (n.ref.cursorFront.style.transform = e),
                    (n.ref.cursorBack.style.transform = e);
                }
                n.cursor.rAFID = requestAnimationFrame(n.tick);
              }),
              Bo(zo(n), "destroy", function () {
                n.unbindListeners(),
                  n.unbindActiveListeners(),
                  clearTimeout(n.hideTimeout),
                  clearTimeout(n.cursor.hideTimeout);
              });
            var r = n.props,
              s = r.cursorFrontSelector,
              u = r.cursorBackSelector,
              c = r.backgroundSelector,
              l = r.imageContainerSelector;
            r.closeButtonFrontSelector, r.closeButtonBackSelector;
            return (
              (n.node = e),
              (n.ref = {
                cursorFront: n.node.querySelector(s),
                cursorBack: n.node.querySelector(u),
                background: n.node.querySelector(c),
                imageContainer: n.node.querySelector(l),
              }),
              (n.innerWidth = window.innerWidth),
              (n.innerHeight = window.innerHeight),
              (n.cursor = {
                x: 0,
                y: 0,
                isActive: !1,
                isPrevious: !1,
                mode: "next",
                hideTimeout: null,
                rAFID: null,
              }),
              (n.items = []),
              (n.isShown = !1),
              (n.hideTimeout = null),
              (n.index = 0),
              (n.background = new wo(n.ref.background)),
              (n.swipe = null),
              n.bindListeners(),
              n
            );
          }
          return (
            (t = i),
            (n = [
              {
                key: "bindListeners",
                value: function () {
                  document.body.addEventListener("click", this.onDocumentClick),
                    a.on("router:route:change", this.closeLightbox),
                    this.onResize();
                },
              },
              {
                key: "unbindListeners",
                value: function () {
                  document.body.removeEventListener(
                    "click",
                    this.onDocumentClick
                  ),
                    a.off("router:route:change", this.closeLightbox);
                },
              },
              {
                key: "bindActiveListeners",
                value: function () {
                  var e = this;
                  (this.innerWidth = window.innerWidth),
                    (this.innerHeight = window.innerHeight),
                    U.on(this.onResize),
                    document.addEventListener("keydown", this.onKeyDown),
                    J
                      ? (this.swipe = new uo({
                          axis: "x",
                          node: this.node,
                          onSwipeRight: function () {
                            e.setIndexOffset(-1);
                          },
                          onSwipeLeft: function () {
                            e.setIndexOffset(1);
                          },
                          onSwipeDown: function () {
                            e.closeLightbox({ isCloseUp: !0 });
                          },
                          onSwipeUp: function () {
                            e.closeLightbox();
                          },
                        }))
                      : (this.node.addEventListener(
                          "click",
                          this.onLightboxClick
                        ),
                        document.body.addEventListener(
                          "mousemove",
                          this.onCursorMove
                        ),
                        this.startCursorTicker());
                },
              },
              {
                key: "unbindActiveListeners",
                value: function () {
                  U.off(this.onResize),
                    document.removeEventListener("keydown", this.onKeyDown),
                    J
                      ? this.swipe &&
                        (this.swipe.destroy(), (this.swipe = null))
                      : (this.node.removeEventListener(
                          "click",
                          this.onLightboxClick
                        ),
                        document.body.removeEventListener(
                          "mousemove",
                          this.onCursorMove
                        ),
                        this.stopCursorTicker(),
                        clearTimeout(this.cursor.hideTimeout),
                        (this.node.dataset.cursorActive = !1),
                        (this.node.dataset.cursor = "next"),
                        (this.cursor.isActive = !1),
                        (this.cursor.mode = "next"));
                },
              },
              {
                key: "isKeyModified",
                value: function (e) {
                  return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey;
                },
              },
              {
                key: "openLightbox",
                value: function (e, t) {
                  if (!this.isShown) {
                    this.isShown = !0;
                    var n = window.ROUTES[window.location.pathname] || {
                      color: "#ffffff",
                      isLightColor: !0,
                    };
                    this.background.show(n.color, n.isLightColor ? 1 : 0),
                      (this.index = 0),
                      clearTimeout(this.hideTimeout),
                      a.trigger("modal:state:change", !0),
                      (this.node.dataset.open = !0),
                      (this.node.dataset.active = !0),
                      this.bindActiveListeners(),
                      (this.items = this.populate(e)),
                      this.items[this.index].show({ isInitial: !0 });
                  }
                },
              },
              {
                key: "populate",
                value: function (e) {
                  var t = this,
                    n = this.ref.imageContainer.clientWidth,
                    r = this.ref.imageContainer.clientHeight;
                  return (
                    this.items.forEach(function (e) {
                      return e.destroy();
                    }),
                    Array.from(
                      document.body.querySelectorAll("[data-lightbox]")
                    ).map(function (o, i) {
                      var a = JSON.parse(o.dataset.lightbox),
                        s = e === o,
                        u = jo(
                          a.originalSize.split("x").map(function (e) {
                            return Number(e);
                          }),
                          2
                        ),
                        c = u[0],
                        l = u[1];
                      return (
                        e === o && (t.index = i),
                        new Io(
                          Mo(
                            Mo({}, a),
                            {},
                            {
                              regionWidth: n,
                              regionHeight: r,
                              width: c,
                              height: l,
                              container: t.ref.imageContainer,
                              isInitial: s,
                              pageNode: e,
                              onVideoOver: t.onVideoOver,
                              onVideoOut: t.onVideoOut,
                            }
                          )
                        )
                      );
                    })
                  );
                },
              },
              {
                key: "startCursorTicker",
                value: function () {
                  this.cursor.rAFID = requestAnimationFrame(this.tick);
                },
              },
              {
                key: "stopCursorTicker",
                value: function () {
                  cancelAnimationFrame(this.cursor.rAFID);
                },
              },
            ]) && Do(t.prototype, n),
            r && Do(t, r),
            i
          );
        })(w);
      function Yo(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Xo(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      Bo(Vo, "defaultProps", {
        cursorFrontSelector: ".lightbox-cursor--front",
        cursorBackSelector: ".lightbox-cursor--back",
        backgroundSelector: ".lightbox-background",
        imageContainerSelector: ".lightbox-display",
      });
      var Go,
        Jo,
        Qo,
        $o,
        Ko,
        Zo,
        ei,
        ti,
        ni,
        ri,
        oi,
        ii,
        ai,
        si,
        ui,
        ci,
        li,
        fi,
        di,
        pi,
        hi,
        mi,
        yi,
        vi,
        gi,
        bi,
        wi,
        _i,
        Si = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        xi = { duration: 0.5, overwrite: !1, delay: 0 },
        Oi = 1e8,
        ki = 2 * Math.PI,
        Pi = ki / 4,
        Ti = 0,
        Ei = Math.sqrt,
        Ai = Math.cos,
        Ii = Math.sin,
        Ci = function (e) {
          return "string" == typeof e;
        },
        ji = function (e) {
          return "function" == typeof e;
        },
        Li = function (e) {
          return "number" == typeof e;
        },
        Ri = function (e) {
          return void 0 === e;
        },
        Mi = function (e) {
          return "object" == typeof e;
        },
        Di = function (e) {
          return !1 !== e;
        },
        Fi = function () {
          return "undefined" != typeof window;
        },
        Ni = function (e) {
          return ji(e) || Ci(e);
        },
        Hi =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        zi = Array.isArray,
        qi = /(?:-?\.?\d|\.)+/gi,
        Bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ui = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Wi = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Vi = /[+-]=-?[.\d]+/,
        Yi = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        Xi = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        Gi = {},
        Ji = {},
        Qi = function (e) {
          return (Ji = Sa(e, Gi)) && ou;
        },
        $i = function (e, t) {
          return console.warn(
            "Invalid property",
            e,
            "set to",
            t,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        Ki = function (e, t) {
          return !t && console.warn(e);
        },
        Zi = function (e, t) {
          return (e && (Gi[e] = t) && Ji && (Ji[e] = t)) || Gi;
        },
        ea = function () {
          return 0;
        },
        ta = {},
        na = [],
        ra = {},
        oa = {},
        ia = {},
        aa = 30,
        sa = [],
        ua = "",
        ca = function (e) {
          var t,
            n,
            r = e[0];
          if ((Mi(r) || ji(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
            for (n = sa.length; n-- && !sa[n].targetTest(r); );
            t = sa[n];
          }
          for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new As(e[n], t)))) ||
              e.splice(n, 1);
          return e;
        },
        la = function (e) {
          return e._gsap || ca(Ja(e))[0]._gsap;
        },
        fa = function (e, t, n) {
          return (n = e[t]) && ji(n)
            ? e[t]()
            : (Ri(n) && e.getAttribute && e.getAttribute(t)) || n;
        },
        da = function (e, t) {
          return (e = e.split(",")).forEach(t) || e;
        },
        pa = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        ha = function (e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
          return r < n;
        },
        ma = function (e, t, n) {
          var r,
            o = Li(e[1]),
            i = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[i];
          if ((o && (a.duration = e[1]), (a.parent = n), t)) {
            for (r = a; n && !("immediateRender" in r); )
              (r = n.vars.defaults || {}), (n = Di(n.vars.inherit) && n.parent);
            (a.immediateRender = Di(r.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[i - 1]);
          }
          return a;
        },
        ya = function () {
          var e,
            t,
            n = na.length,
            r = na.slice(0);
          for (ra = {}, na.length = 0, e = 0; e < n; e++)
            (t = r[e]) &&
              t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        va = function (e, t, n, r) {
          na.length && ya(), e.render(t, n, r), na.length && ya();
        },
        ga = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(Yi).length < 2
            ? t
            : Ci(e)
            ? e.trim()
            : e;
        },
        ba = function (e) {
          return e;
        },
        wa = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        _a = function (e, t) {
          for (var n in t)
            n in e || "duration" === n || "ease" === n || (e[n] = t[n]);
        },
        Sa = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        xa = function e(t, n) {
          for (var r in n)
            "__proto__" !== r &&
              "constructor" !== r &&
              "prototype" !== r &&
              (t[r] = Mi(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t;
        },
        Oa = function (e, t) {
          var n,
            r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r;
        },
        ka = function (e) {
          var t = e.parent || Jo,
            n = e.keyframes ? _a : wa;
          if (Di(e.inherit))
            for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
          return e;
        },
        Pa = function (e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o = t._prev,
            i = t._next;
          o ? (o._next = i) : e[n] === t && (e[n] = i),
            i ? (i._prev = o) : e[r] === t && (e[r] = o),
            (t._next = t._prev = t.parent = null);
        },
        Ta = function (e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
            (e._act = 0);
        },
        Ea = function (e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
          return e;
        },
        Aa = function (e) {
          for (var t = e.parent; t && t.parent; )
            (t._dirty = 1), t.totalDuration(), (t = t.parent);
          return e;
        },
        Ia = function (e) {
          return e._repeat
            ? Ca(e._tTime, (e = e.duration() + e._rDelay)) * e
            : 0;
        },
        Ca = function (e, t) {
          var n = Math.floor((e /= t));
          return e && n === e ? n - 1 : n;
        },
        ja = function (e, t) {
          return (
            (e - t._start) * t._ts +
            (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
          );
        },
        La = function (e) {
          return (e._end = pa(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)
          ));
        },
        Ra = function (e, t) {
          var n = e._dp;
          return (
            n &&
              n.smoothChildTiming &&
              e._ts &&
              ((e._start = pa(
                n._time -
                  (e._ts > 0
                    ? t / e._ts
                    : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
              )),
              La(e),
              n._dirty || Ea(n, e)),
            e
          );
        },
        Ma = function (e, t) {
          var n;
          if (
            ((t._time || (t._initted && !t._dur)) &&
              ((n = ja(e.rawTime(), t)),
              (!t._dur || Wa(0, t.totalDuration(), n) - t._tTime > 1e-8) &&
                t.render(n, !0)),
            Ea(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -1e-8;
          }
        },
        Da = function (e, t, n, r) {
          return (
            t.parent && Ta(t),
            (t._start = pa(n + t._delay)),
            (t._end = pa(
              t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
            )),
            (function (e, t, n, r, o) {
              void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
              var i,
                a = e[r];
              if (o) for (i = t[o]; a && a[o] > i; ) a = a._prev;
              a
                ? ((t._next = a._next), (a._next = t))
                : ((t._next = e[n]), (e[n] = t)),
                t._next ? (t._next._prev = t) : (e[r] = t),
                (t._prev = a),
                (t.parent = t._dp = e);
            })(e, t, "_first", "_last", e._sort ? "_start" : 0),
            (e._recent = t),
            r || Ma(e, t),
            e
          );
        },
        Fa = function (e, t) {
          return (
            (Gi.ScrollTrigger || $i("scrollTrigger", t)) &&
            Gi.ScrollTrigger.create(t, e)
          );
        },
        Na = function (e, t, n, r) {
          return (
            Ds(e, t),
            e._initted
              ? !n &&
                e._pt &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                ei !== ys.frame
                ? (na.push(e), (e._lazy = [t, r]), 1)
                : void 0
              : 1
          );
        },
        Ha = function (e, t, n, r) {
          var o = e._repeat,
            i = pa(t) || 0,
            a = e._tTime / e._tDur;
          return (
            a && !r && (e._time *= i / e._dur),
            (e._dur = i),
            (e._tDur = o
              ? o < 0
                ? 1e10
                : pa(i * (o + 1) + e._rDelay * o)
              : i),
            a && !r ? Ra(e, (e._tTime = e._tDur * a)) : e.parent && La(e),
            n || Ea(e.parent, e),
            e
          );
        },
        za = function (e) {
          return e instanceof Cs ? Ea(e) : Ha(e, e._dur);
        },
        qa = { _start: 0, endTime: ea },
        Ba = function e(t, n) {
          var r,
            o,
            i = t.labels,
            a = t._recent || qa,
            s = t.duration() >= Oi ? a.endTime(!1) : t._dur;
          return Ci(n) && (isNaN(n) || n in i)
            ? "<" === (r = n.charAt(0)) || ">" === r
              ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0)
              : (r = n.indexOf("=")) < 0
              ? (n in i || (i[n] = s), i[n])
              : ((o = +(n.charAt(r - 1) + n.substr(r + 1))),
                r > 1 ? e(t, n.substr(0, r - 1)) + o : s + o)
            : null == n
            ? s
            : +n;
        },
        Ua = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        Wa = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        Va = function (e) {
          if ("string" != typeof e) return "";
          var t = Xi.exec(e);
          return t ? e.substr(t.index + t[0].length) : "";
        },
        Ya = [].slice,
        Xa = function (e, t) {
          return (
            e &&
            Mi(e) &&
            "length" in e &&
            ((!t && !e.length) || (e.length - 1 in e && Mi(e[0]))) &&
            !e.nodeType &&
            e !== Qo
          );
        },
        Ga = function (e, t, n) {
          return (
            void 0 === n && (n = []),
            e.forEach(function (e) {
              var r;
              return (Ci(e) && !t) || Xa(e, 1)
                ? (r = n).push.apply(r, Ja(e))
                : n.push(e);
            }) || n
          );
        },
        Ja = function (e, t) {
          return !Ci(e) || t || (!$o && vs())
            ? zi(e)
              ? Ga(e, t)
              : Xa(e)
              ? Ya.call(e, 0)
              : e
              ? [e]
              : []
            : Ya.call(Ko.querySelectorAll(e), 0);
        },
        Qa = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        $a = function (e) {
          if (ji(e)) return e;
          var t = Mi(e) ? e : { each: e },
            n = Os(t.ease),
            r = t.from || 0,
            o = parseFloat(t.base) || 0,
            i = {},
            a = r > 0 && r < 1,
            s = isNaN(r) || a,
            u = t.axis,
            c = r,
            l = r;
          return (
            Ci(r)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !a && s && ((c = r[0]), (l = r[1])),
            function (e, a, f) {
              var d,
                p,
                h,
                m,
                y,
                v,
                g,
                b,
                w,
                _ = (f || t).length,
                S = i[_];
              if (!S) {
                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, Oi])[1])) {
                  for (
                    g = -Oi;
                    g < (g = f[w++].getBoundingClientRect().left) && w < _;

                  );
                  w--;
                }
                for (
                  S = i[_] = [],
                    d = s ? Math.min(w, _) * c - 0.5 : r % w,
                    p = s ? (_ * l) / w - 0.5 : (r / w) | 0,
                    g = 0,
                    b = Oi,
                    v = 0;
                  v < _;
                  v++
                )
                  (h = (v % w) - d),
                    (m = p - ((v / w) | 0)),
                    (S[v] = y =
                      u ? Math.abs("y" === u ? m : h) : Ei(h * h + m * m)),
                    y > g && (g = y),
                    y < b && (b = y);
                "random" === r && Qa(S),
                  (S.max = g - b),
                  (S.min = b),
                  (S.v = _ =
                    (parseFloat(t.amount) ||
                      parseFloat(t.each) *
                        (w > _
                          ? _ - 1
                          : u
                          ? "y" === u
                            ? _ / w
                            : w
                          : Math.max(w, _ / w)) ||
                      0) * ("edges" === r ? -1 : 1)),
                  (S.b = _ < 0 ? o - _ : o),
                  (S.u = Va(t.amount || t.each) || 0),
                  (n = n && _ < 0 ? Ss(n) : n);
              }
              return (
                (_ = (S[e] - S.min) / S.max || 0),
                pa(S.b + (n ? n(_) : _) * S.v) + S.u
              );
            }
          );
        },
        Ka = function (e) {
          var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
          return function (n) {
            var r = Math.round(parseFloat(n) / e) * e * t;
            return (r - (r % 1)) / t + (Li(n) ? 0 : Va(n));
          };
        },
        Za = function (e, t) {
          var n,
            r,
            o = zi(e);
          return (
            !o &&
              Mi(e) &&
              ((n = o = e.radius || Oi),
              e.values
                ? ((e = Ja(e.values)), (r = !Li(e[0])) && (n *= n))
                : (e = Ka(e.increment))),
            Ua(
              t,
              o
                ? ji(e)
                  ? function (t) {
                      return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                    }
                  : function (t) {
                      for (
                        var o,
                          i,
                          a = parseFloat(r ? t.x : t),
                          s = parseFloat(r ? t.y : 0),
                          u = Oi,
                          c = 0,
                          l = e.length;
                        l--;

                      )
                        (o = r
                          ? (o = e[l].x - a) * o + (i = e[l].y - s) * i
                          : Math.abs(e[l] - a)) < u && ((u = o), (c = l));
                      return (
                        (c = !n || u <= n ? e[c] : t),
                        r || c === t || Li(t) ? c : c + Va(t)
                      );
                    }
                : Ka(e)
            )
          );
        },
        es = function (e, t, n, r) {
          return Ua(zi(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
            return zi(e)
              ? e[~~(Math.random() * e.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                    ) *
                      n *
                      r
                  ) / r;
          });
        },
        ts = function (e, t, n) {
          return Ua(n, function (n) {
            return e[~~t(n)];
          });
        },
        ns = function (e) {
          for (var t, n, r, o, i = 0, a = ""; ~(t = e.indexOf("random(", i)); )
            (r = e.indexOf(")", t)),
              (o = "[" === e.charAt(t + 7)),
              (n = e.substr(t + 7, r - t - 7).match(o ? Yi : qi)),
              (a +=
                e.substr(i, t - i) +
                es(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
              (i = r + 1);
          return a + e.substr(i, e.length - i);
        },
        rs = function (e, t, n, r, o) {
          var i = t - e,
            a = r - n;
          return Ua(o, function (t) {
            return n + (((t - e) / i) * a || 0);
          });
        },
        os = function (e, t, n) {
          var r,
            o,
            i,
            a = e.labels,
            s = Oi;
          for (r in a)
            (o = a[r] - t) < 0 == !!n &&
              o &&
              s > (o = Math.abs(o)) &&
              ((i = r), (s = o));
          return i;
        },
        is = function (e, t, n) {
          var r,
            o,
            i = e.vars,
            a = i[t];
          if (a)
            return (
              (r = i[t + "Params"]),
              (o = i.callbackScope || e),
              n && na.length && ya(),
              r ? a.apply(o, r) : a.call(o)
            );
        },
        as = function (e) {
          return Ta(e), e.progress() < 1 && is(e, "onInterrupt"), e;
        },
        ss = function (e) {
          var t = (e = (!e.name && e.default) || e).name,
            n = ji(e),
            r =
              t && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            o = {
              init: ea,
              render: Js,
              add: Rs,
              kill: $s,
              modifier: Qs,
              rawVars: 0,
            },
            i = {
              targetTest: 0,
              get: 0,
              getSetter: Vs,
              aliases: {},
              register: 0,
            };
          if ((vs(), e !== r)) {
            if (oa[t]) return;
            wa(r, wa(Oa(e, o), i)),
              Sa(r.prototype, Sa(o, Oa(e, i))),
              (oa[(r.prop = t)] = r),
              e.targetTest && (sa.push(r), (ta[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Zi(t, r), e.register && e.register(ou, r, eu);
        },
        us = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        cs = function (e, t, n) {
          return (
            (255 *
              (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1
                ? t + (n - t) * e * 6
                : e < 0.5
                ? n
                : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) +
              0.5) |
            0
          );
        },
        ls = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p = e ? (Li(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : us.black;
          if (!p) {
            if (
              ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), us[e])
            )
              p = us[e];
            else if ("#" === e.charAt(0)) {
              if (
                (e.length < 6 &&
                  ((r = e.charAt(1)),
                  (o = e.charAt(2)),
                  (i = e.charAt(3)),
                  (e =
                    "#" +
                    r +
                    r +
                    o +
                    o +
                    i +
                    i +
                    (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
                9 === e.length)
              )
                return [
                  (p = parseInt(e.substr(1, 6), 16)) >> 16,
                  (p >> 8) & 255,
                  255 & p,
                  parseInt(e.substr(7), 16) / 255,
                ];
              p = [
                (e = parseInt(e.substr(1), 16)) >> 16,
                (e >> 8) & 255,
                255 & e,
              ];
            } else if ("hsl" === e.substr(0, 3))
              if (((p = d = e.match(qi)), t)) {
                if (~e.indexOf("="))
                  return (p = e.match(Bi)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (r =
                    2 * (u = +p[2] / 100) -
                    (o = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = cs(a + 1 / 3, r, o)),
                  (p[1] = cs(a, r, o)),
                  (p[2] = cs(a - 1 / 3, r, o));
            else p = e.match(qi) || us.transparent;
            p = p.map(Number);
          }
          return (
            t &&
              !d &&
              ((r = p[0] / 255),
              (o = p[1] / 255),
              (i = p[2] / 255),
              (u = ((c = Math.max(r, o, i)) + (l = Math.min(r, o, i))) / 2),
              c === l
                ? (a = s = 0)
                : ((f = c - l),
                  (s = u > 0.5 ? f / (2 - c - l) : f / (c + l)),
                  (a =
                    c === r
                      ? (o - i) / f + (o < i ? 6 : 0)
                      : c === o
                      ? (i - r) / f + 2
                      : (r - o) / f + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        fs = function (e) {
          var t = [],
            n = [],
            r = -1;
          return (
            e.split(ps).forEach(function (e) {
              var o = e.match(Ui) || [];
              t.push.apply(t, o), n.push((r += o.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        ds = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s = "",
            u = (e + s).match(ps),
            c = t ? "hsla(" : "rgba(",
            l = 0;
          if (!u) return e;
          if (
            ((u = u.map(function (e) {
              return (
                (e = ls(e, t, 1)) &&
                c +
                  (t
                    ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                    : e.join(",")) +
                  ")"
              );
            })),
            n && ((i = fs(e)), (r = n.c).join(s) !== i.c.join(s)))
          )
            for (a = (o = e.replace(ps, "1").split(Ui)).length - 1; l < a; l++)
              s +=
                o[l] +
                (~r.indexOf(l)
                  ? u.shift() || c + "0,0,0,0)"
                  : (i.length ? i : u.length ? u : n).shift());
          if (!o)
            for (a = (o = e.split(ps)).length - 1; l < a; l++) s += o[l] + u[l];
          return s + o[a];
        },
        ps = (function () {
          var e,
            t =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in us) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi");
        })(),
        hs = /hsl[a]?\(/,
        ms = function (e) {
          var t,
            n = e.join(" ");
          if (((ps.lastIndex = 0), ps.test(n)))
            return (
              (t = hs.test(n)),
              (e[1] = ds(e[1], t)),
              (e[0] = ds(e[0], t, fs(e[1]))),
              !0
            );
        },
        ys =
          ((ci = Date.now),
          (li = 500),
          (fi = 33),
          (di = ci()),
          (pi = di),
          (mi = hi = 1e3 / 240),
          (vi = function e(t) {
            var n,
              r,
              o,
              i,
              a = ci() - pi,
              s = !0 === t;
            if (
              (a > li && (di += a - fi),
              ((n = (o = (pi += a) - di) - mi) > 0 || s) &&
                ((i = ++ai.frame),
                (si = o - 1e3 * ai.time),
                (ai.time = o /= 1e3),
                (mi += n + (n >= hi ? 4 : hi - n)),
                (r = 1)),
              s || (ri = oi(e)),
              r)
            )
              for (ui = 0; ui < yi.length; ui++) yi[ui](o, si, i, t);
          }),
          (ai = {
            time: 0,
            frame: 0,
            tick: function () {
              vi(!0);
            },
            deltaRatio: function (e) {
              return si / (1e3 / (e || 60));
            },
            wake: function () {
              Zo &&
                (!$o &&
                  Fi() &&
                  ((Qo = $o = window),
                  (Ko = Qo.document || {}),
                  (Gi.gsap = ou),
                  (Qo.gsapVersions || (Qo.gsapVersions = [])).push(ou.version),
                  Qi(Ji || Qo.GreenSockGlobals || (!Qo.gsap && Qo) || {}),
                  (ii = Qo.requestAnimationFrame)),
                ri && ai.sleep(),
                (oi =
                  ii ||
                  function (e) {
                    return setTimeout(e, (mi - 1e3 * ai.time + 1) | 0);
                  }),
                (ni = 1),
                vi(2));
            },
            sleep: function () {
              (ii ? Qo.cancelAnimationFrame : clearTimeout)(ri),
                (ni = 0),
                (oi = ea);
            },
            lagSmoothing: function (e, t) {
              (li = e || 1 / 1e-8), (fi = Math.min(t, li, 0));
            },
            fps: function (e) {
              (hi = 1e3 / (e || 240)), (mi = 1e3 * ai.time + hi);
            },
            add: function (e) {
              yi.indexOf(e) < 0 && yi.push(e), vs();
            },
            remove: function (e) {
              var t;
              ~(t = yi.indexOf(e)) && yi.splice(t, 1) && ui >= t && ui--;
            },
            _listeners: (yi = []),
          })),
        vs = function () {
          return !ni && ys.wake();
        },
        gs = {},
        bs = /^[\d.\-M][\d.\-,\s]/,
        ws = /["']/g,
        _s = function (e) {
          for (
            var t,
              n,
              r,
              o = {},
              i = e.substr(1, e.length - 3).split(":"),
              a = i[0],
              s = 1,
              u = i.length;
            s < u;
            s++
          )
            (n = i[s]),
              (t = s !== u - 1 ? n.lastIndexOf(",") : n.length),
              (r = n.substr(0, t)),
              (o[a] = isNaN(r) ? r.replace(ws, "").trim() : +r),
              (a = n.substr(t + 1).trim());
          return o;
        },
        Ss = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        xs = function e(t, n) {
          for (var r, o = t._first; o; )
            o instanceof Cs
              ? e(o, n)
              : !o.vars.yoyoEase ||
                (o._yoyo && o._repeat) ||
                o._yoyo === n ||
                (o.timeline
                  ? e(o.timeline, n)
                  : ((r = o._ease),
                    (o._ease = o._yEase),
                    (o._yEase = r),
                    (o._yoyo = n))),
              (o = o._next);
        },
        Os = function (e, t) {
          return (
            (e &&
              (ji(e)
                ? e
                : gs[e] ||
                  (function (e) {
                    var t = (e + "").split("("),
                      n = gs[t[0]];
                    return n && t.length > 1 && n.config
                      ? n.config.apply(
                          null,
                          ~e.indexOf("{")
                            ? [_s(t[1])]
                            : (function (e) {
                                var t = e.indexOf("(") + 1,
                                  n = e.indexOf(")"),
                                  r = e.indexOf("(", t);
                                return e.substring(
                                  t,
                                  ~r && r < n ? e.indexOf(")", n + 1) : n
                                );
                              })(e)
                                .split(",")
                                .map(ga)
                        )
                      : gs._CE && bs.test(e)
                      ? gs._CE("", e)
                      : n;
                  })(e))) ||
            t
          );
        },
        ks = function (e, t, n, r) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === r &&
              (r = function (e) {
                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
              });
          var o,
            i = { easeIn: t, easeOut: n, easeInOut: r };
          return (
            da(e, function (e) {
              for (var t in ((gs[e] = Gi[e] = i),
              (gs[(o = e.toLowerCase())] = n),
              i))
                gs[
                  o +
                    ("easeIn" === t
                      ? ".in"
                      : "easeOut" === t
                      ? ".out"
                      : ".inOut")
                ] = gs[e + "." + t] = i[t];
            }),
            i
          );
        },
        Ps = function (e) {
          return function (t) {
            return t < 0.5
              ? (1 - e(1 - 2 * t)) / 2
              : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        Ts = function e(t, n, r) {
          var o = n >= 1 ? n : 1,
            i = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            a = (i / ki) * (Math.asin(1 / o) || 0),
            s = function (e) {
              return 1 === e
                ? 1
                : o * Math.pow(2, -10 * e) * Ii((e - a) * i) + 1;
            },
            u =
              "out" === t
                ? s
                : "in" === t
                ? function (e) {
                    return 1 - s(1 - e);
                  }
                : Ps(s);
          return (
            (i = ki / i),
            (u.config = function (n, r) {
              return e(t, n, r);
            }),
            u
          );
        },
        Es = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function (e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
            },
            o =
              "out" === t
                ? r
                : "in" === t
                ? function (e) {
                    return 1 - r(1 - e);
                  }
                : Ps(r);
          return (
            (o.config = function (n) {
              return e(t, n);
            }),
            o
          );
        };
      da("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var n = t < 5 ? t + 1 : t;
        ks(
          e + ",Power" + (n - 1),
          t
            ? function (e) {
                return Math.pow(e, n);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5
              ? Math.pow(2 * e, n) / 2
              : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (gs.Linear.easeNone = gs.none = gs.Linear.easeIn),
        ks("Elastic", Ts("in"), Ts("out"), Ts()),
        (gi = 7.5625),
        (wi = 1 / (bi = 2.75)),
        ks(
          "Bounce",
          function (e) {
            return 1 - _i(1 - e);
          },
          (_i = function (e) {
            return e < wi
              ? gi * e * e
              : e < 0.7272727272727273
              ? gi * Math.pow(e - 1.5 / bi, 2) + 0.75
              : e < 0.9090909090909092
              ? gi * (e -= 2.25 / bi) * e + 0.9375
              : gi * Math.pow(e - 2.625 / bi, 2) + 0.984375;
          })
        ),
        ks("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        ks("Circ", function (e) {
          return -(Ei(1 - e * e) - 1);
        }),
        ks("Sine", function (e) {
          return 1 === e ? 1 : 1 - Ai(e * Pi);
        }),
        ks("Back", Es("in"), Es("out"), Es()),
        (gs.SteppedEase =
          gs.steps =
          Gi.SteppedEase =
            {
              config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                  r = e + (t ? 0 : 1),
                  o = t ? 1 : 0;
                return function (e) {
                  return (((r * Wa(0, 1 - 1e-8, e)) | 0) + o) * n;
                };
              },
            }),
        (xi.ease = gs["quad.out"]),
        da(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (e) {
            return (ua += e + "," + e + "Params,");
          }
        );
      var As = function (e, t) {
          (this.id = Ti++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : fa),
            (this.set = t ? t.getSetter : Vs);
        },
        Is = (function () {
          function e(e, t) {
            var n = e.parent || Jo;
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              Ha(this, +e.duration, 1, 1),
              (this.data = e.data),
              ni || ys.wake(),
              n && Da(n, this, t || 0 === t ? t : n._time, 1),
              e.reversed && this.reverse(),
              e.paused && this.paused(!0);
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                  )
                : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              return arguments.length
                ? ((this._dirty = 0),
                  Ha(
                    this,
                    this._repeat < 0
                      ? e
                      : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (t.totalTime = function (e, t) {
              if ((vs(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (Ra(this, e), !n._dp || n.parent || Ma(n, this); n.parent; )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  Da(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e ||
                  (!this._dur && !t) ||
                  (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                  (!e && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = e), va(this, e, t)),
                this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + Ia(this)) % this._dur ||
                      (e ? this._dur : 0),
                    t
                  )
                : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, t)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (t.progress = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                      Ia(this),
                    t
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * n, t)
                : this._repeat
                ? Ca(this._tTime, n) + 1
                : 1;
            }),
            (t.timeScale = function (e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var t =
                this.parent && this._ts
                  ? ja(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                Aa(this.totalTime(Wa(-this._delay, this._tDur, t), !0))
              );
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (vs(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= 1e-8) &&
                            1e-8 !== Math.abs(this._zTime)
                        ))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return (
                  t &&
                    (t._sort || !this.parent) &&
                    Da(t, this, e - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return (
                this._start +
                (Di(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t
                ? e &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? ja(t.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                (n = t._start + n / (t._ts || 1)), (t = t._dp);
              return n;
            }),
            (t.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e === 1 / 0 ? -2 : e), za(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              return arguments.length
                ? ((this._rDelay = e), za(this))
                : this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(Ba(this, e), Di(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, Di(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return (
                null != e && this.seek(e || this.totalDuration(), t),
                this.reversed(!0).paused(!1)
              );
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() &&
                    this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(
                t &&
                !(
                  this._ts &&
                  this._initted &&
                  t.isActive() &&
                  (e = t.rawTime(!0)) >= n &&
                  e < this.endTime(!0) - 1e-8
                )
              );
            }),
            (t.eventCallback = function (e, t, n) {
              var r = this.vars;
              return arguments.length > 1
                ? (t
                    ? ((r[e] = t),
                      n && (r[e + "Params"] = n),
                      "onUpdate" === e && (this._onUpdate = t))
                    : delete r[e],
                  this)
                : r[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var r = ji(e) ? e : ba,
                  o = function () {
                    var e = t.then;
                    (t.then = null),
                      ji(r) &&
                        (r = r(t)) &&
                        (r.then || r === t) &&
                        (t.then = e),
                      n(r),
                      (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                (!t._tTime && t._ts < 0)
                  ? o()
                  : (t._prom = o);
              });
            }),
            (t.kill = function () {
              as(this);
            }),
            e
          );
        })();
      wa(Is.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Cs = (function (e) {
        function t(t, n) {
          var r;
          return (
            void 0 === t && (t = {}),
            ((r = e.call(this, t, n) || this).labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = Di(t.sortChildren)),
            r.parent && Ma(r.parent, Yo(r)),
            t.scrollTrigger && Fa(Yo(r), t.scrollTrigger),
            r
          );
        }
        Xo(t, e);
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return (
              new zs(
                e,
                ma(arguments, 0, this),
                Ba(this, Li(t) ? arguments[3] : n)
              ),
              this
            );
          }),
          (n.from = function (e, t, n) {
            return (
              new zs(
                e,
                ma(arguments, 1, this),
                Ba(this, Li(t) ? arguments[3] : n)
              ),
              this
            );
          }),
          (n.fromTo = function (e, t, n, r) {
            return (
              new zs(
                e,
                ma(arguments, 2, this),
                Ba(this, Li(t) ? arguments[4] : r)
              ),
              this
            );
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              ka(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new zs(e, t, Ba(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return Da(this, zs.delayedCall(0, e, t), Ba(this, n));
          }),
          (n.staggerTo = function (e, t, n, r, o, i, a) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || r),
              (n.onComplete = i),
              (n.onCompleteParams = a),
              (n.parent = this),
              new zs(e, n, Ba(this, o)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, r, o, i, a) {
            return (
              (n.runBackwards = 1),
              (ka(n).immediateRender = Di(n.immediateRender)),
              this.staggerTo(e, t, n, r, o, i, a)
            );
          }),
          (n.staggerFromTo = function (e, t, n, r, o, i, a, s) {
            return (
              (r.startAt = n),
              (ka(r).immediateRender = Di(r.immediateRender)),
              this.staggerTo(e, t, r, o, i, a, s)
            );
          }),
          (n.render = function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              c,
              l,
              f,
              d,
              p,
              h,
              m = this._time,
              y = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              g = this !== Jo && e > y - 1e-8 && e >= 0 ? y : e < 1e-8 ? 0 : e,
              b = this._zTime < 0 != e < 0 && (this._initted || !v);
            if (g !== this._tTime || n || b) {
              if (
                (m !== this._time &&
                  v &&
                  ((g += this._time - m), (e += this._time - m)),
                (r = g),
                (f = this._start),
                (u = !(l = this._ts)),
                b && (v || (m = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (s = v + this._rDelay),
                  this._repeat < -1 && e < 0)
                )
                  return this.totalTime(100 * s + e, t, n);
                if (
                  ((r = pa(g % s)),
                  g === y
                    ? ((a = this._repeat), (r = v))
                    : ((a = ~~(g / s)) && a === g / s && ((r = v), a--),
                      r > v && (r = v)),
                  (d = Ca(this._tTime, s)),
                  !m && this._tTime && d !== a && (d = a),
                  p && 1 & a && ((r = v - r), (h = 1)),
                  a !== d && !this._lock)
                ) {
                  var w = p && 1 & d,
                    _ = w === (p && 1 & a);
                  if (
                    (a < d && (w = !w),
                    (m = w ? 0 : v),
                    (this._lock = 1),
                    (this.render(m || (h ? 0 : pa(a * s)), t, !v)._lock = 0),
                    !t && this.parent && is(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !h &&
                      (this.invalidate()._lock = 1),
                    m !== this._time || u !== !this._ts)
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (y = this._tDur),
                    _ &&
                      ((this._lock = 2),
                      (m = w ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !h && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !u)
                  )
                    return this;
                  xs(this, h);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (c = (function (e, t, n) {
                    var r;
                    if (n > t)
                      for (r = e._first; r && r._start <= n; ) {
                        if (!r._dur && "isPause" === r.data && r._start > t)
                          return r;
                        r = r._next;
                      }
                    else
                      for (r = e._last; r && r._start >= n; ) {
                        if (!r._dur && "isPause" === r.data && r._start < t)
                          return r;
                        r = r._prev;
                      }
                  })(this, pa(m), pa(r))) &&
                  (g -= r - (r = c._start)),
                (this._tTime = g),
                (this._time = r),
                (this._act = !l),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (m = 0)),
                !m && (r || (!v && e >= 0)) && !t && is(this, "onStart"),
                r >= m && e >= 0)
              )
                for (o = this._first; o; ) {
                  if (
                    ((i = o._next),
                    (o._act || r >= o._start) && o._ts && c !== o)
                  ) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (r - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (r - o._start) * o._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (c = 0), i && (g += this._zTime = -1e-8);
                      break;
                    }
                  }
                  o = i;
                }
              else {
                o = this._last;
                for (var S = e < 0 ? e : r; o; ) {
                  if (
                    ((i = o._prev), (o._act || S <= o._end) && o._ts && c !== o)
                  ) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (S - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (S - o._start) * o._ts,
                        t,
                        n
                      ),
                      r !== this._time || (!this._ts && !u))
                    ) {
                      (c = 0), i && (g += this._zTime = S ? -1e-8 : 1e-8);
                      break;
                    }
                  }
                  o = i;
                }
              }
              if (
                c &&
                !t &&
                (this.pause(),
                (c.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = f), La(this), this.render(e, t, n);
              this._onUpdate && !t && is(this, "onUpdate", !0),
                ((g === y && y >= this.totalDuration()) || (!g && m)) &&
                  ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((e || !v) &&
                      ((g === y && this._ts > 0) || (!g && this._ts < 0)) &&
                      Ta(this, 1),
                    t ||
                      (e < 0 && !m) ||
                      (!g && !m) ||
                      (is(
                        this,
                        g === y ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < y && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((Li(t) || (t = Ba(this, t)), !(e instanceof Is))) {
              if (zi(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (Ci(e)) return this.addLabel(e, t);
              if (!ji(e)) return this;
              e = zs.delayedCall(0, e);
            }
            return this !== e ? Da(this, e, t) : this;
          }),
          (n.getChildren = function (e, t, n, r) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -Oi);
            for (var o = [], i = this._first; i; )
              i._start >= r &&
                (i instanceof zs
                  ? t && o.push(i)
                  : (n && o.push(i),
                    e && o.push.apply(o, i.getChildren(!0, t, n)))),
                (i = i._next);
            return o;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return Ci(e)
              ? this.removeLabel(e)
              : ji(e)
              ? this.killTweensOf(e)
              : (Pa(this, e),
                e === this._recent && (this._recent = this._last),
                Ea(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = pa(
                    ys.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return (this.labels[e] = Ba(this, t)), this;
          }),
          (n.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (n.addPause = function (e, t, n) {
            var r = zs.delayedCall(0, t || ea, n);
            return (
              (r.data = "isPause"),
              (this._hasPause = 1),
              Da(this, r, Ba(this, e))
            );
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = Ba(this, e); t; )
              t._start === e && "isPause" === t.data && Ta(t), (t = t._next);
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), o = r.length; o--; )
              js !== r[o] && r[o].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], o = Ja(e), i = this._first, a = Li(t); i; )
              i instanceof zs
                ? ha(i._targets, o) &&
                  (a
                    ? (!js || (i._initted && i._ts)) &&
                      i.globalTime(0) <= t &&
                      i.globalTime(i.totalDuration()) > t
                    : !t || i.isActive()) &&
                  r.push(i)
                : (n = i.getTweensOf(o, t)).length && r.push.apply(r, n),
                (i = i._next);
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t = t || {};
            var n = this,
              r = Ba(n, e),
              o = t,
              i = o.startAt,
              a = o.onStart,
              s = o.onStartParams,
              u = o.immediateRender,
              c = zs.to(
                n,
                wa(
                  {
                    ease: "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration:
                      t.duration ||
                      Math.abs(
                        (r - (i && "time" in i ? i.time : n._time)) /
                          n.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      n.pause();
                      var e =
                        t.duration || Math.abs((r - n._time) / n.timeScale());
                      c._dur !== e && Ha(c, e, 0, 1).render(c._time, !0, !0),
                        a && a.apply(c, s || []);
                    },
                  },
                  t
                )
              );
            return u ? c.render(0) : c;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, wa({ startAt: { time: Ba(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return void 0 === e && (e = this._time), os(this, Ba(this, e));
          }),
          (n.previousLabel = function (e) {
            return void 0 === e && (e = this._time), os(this, Ba(this, e), 1);
          }),
          (n.currentLabel = function (e) {
            return arguments.length
              ? this.seek(e, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (n.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var r, o = this._first, i = this.labels; o; )
              o._start >= n && ((o._start += e), (o._end += e)), (o = o._next);
            if (t) for (r in i) i[r] >= n && (i[r] += e);
            return Ea(this);
          }),
          (n.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
            return e.prototype.invalidate.call(this);
          }),
          (n.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; )
              (t = n._next), this.remove(n), (n = t);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              Ea(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              o = 0,
              i = this,
              a = i._last,
              s = Oi;
            if (arguments.length)
              return i.timeScale(
                (i._repeat < 0 ? i.duration() : i.totalDuration()) /
                  (i.reversed() ? -e : e)
              );
            if (i._dirty) {
              for (r = i.parent; a; )
                (t = a._prev),
                  a._dirty && a.totalDuration(),
                  (n = a._start) > s && i._sort && a._ts && !i._lock
                    ? ((i._lock = 1), (Da(i, a, n - a._delay, 1)._lock = 0))
                    : (s = n),
                  n < 0 &&
                    a._ts &&
                    ((o -= n),
                    ((!r && !i._dp) || (r && r.smoothChildTiming)) &&
                      ((i._start += n / i._ts),
                      (i._time -= n),
                      (i._tTime -= n)),
                    i.shiftChildren(-n, !1, -Infinity),
                    (s = 0)),
                  a._end > o && a._ts && (o = a._end),
                  (a = t);
              Ha(i, i === Jo && i._time > o ? i._time : o, 1, 1),
                (i._dirty = 0);
            }
            return i._tDur;
          }),
          (t.updateRoot = function (e) {
            if (
              (Jo._ts && (va(Jo, ja(e, Jo)), (ei = ys.frame)), ys.frame >= aa)
            ) {
              aa += Si.autoSleep || 120;
              var t = Jo._first;
              if ((!t || !t._ts) && Si.autoSleep && ys._listeners.length < 2) {
                for (; t && !t._ts; ) t = t._next;
                t || ys.sleep();
              }
            }
          }),
          t
        );
      })(Is);
      wa(Cs.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var js,
        Ls = function (e, t, n, r, o, i, a) {
          var s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            m = new eu(this._pt, e, t, 0, 1, Gs, null, o),
            y = 0,
            v = 0;
          for (
            m.b = n,
              m.e = r,
              n += "",
              (p = ~(r += "").indexOf("random(")) && (r = ns(r)),
              i && (i((h = [n, r]), e, t), (n = h[0]), (r = h[1])),
              u = n.match(Wi) || [];
            (s = Wi.exec(r));

          )
            (l = s[0]),
              (f = r.substring(y, s.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === f.substr(-5) && (c = 1),
              l !== u[v++] &&
                ((d = parseFloat(u[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: f || 1 === v ? f : ",",
                  s: d,
                  c:
                    "=" === l.charAt(1)
                      ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1)
                      : parseFloat(l) - d,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (y = Wi.lastIndex));
          return (
            (m.c = y < r.length ? r.substring(y, r.length) : ""),
            (m.fp = a),
            (Vi.test(r) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Rs = function (e, t, n, r, o, i, a, s, u) {
          ji(r) && (r = r(o || 0, e, i));
          var c,
            l = e[t],
            f =
              "get" !== n
                ? n
                : ji(l)
                ? u
                  ? e[
                      t.indexOf("set") || !ji(e["get" + t.substr(3)])
                        ? t
                        : "get" + t.substr(3)
                    ](u)
                  : e[t]()
                : l,
            d = ji(l) ? (u ? Us : Bs) : qs;
          if (
            (Ci(r) &&
              (~r.indexOf("random(") && (r = ns(r)),
              "=" === r.charAt(1) &&
                (r =
                  parseFloat(f) +
                  parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
                  (Va(f) || 0))),
            f !== r)
          )
            return isNaN(f * r)
              ? (!l && !(t in e) && $i(t, r),
                Ls.call(this, e, t, f, r, d, s || Si.stringFilter, u))
              : ((c = new eu(
                  this._pt,
                  e,
                  t,
                  +f || 0,
                  r - (f || 0),
                  "boolean" == typeof l ? Xs : Ys,
                  0,
                  d
                )),
                u && (c.fp = u),
                a && c.modifier(a, this, e),
                (this._pt = c));
        },
        Ms = function (e, t, n, r, o, i) {
          var a, s, u, c;
          if (
            oa[e] &&
            !1 !==
              (a = new oa[e]()).init(
                o,
                a.rawVars
                  ? t[e]
                  : (function (e, t, n, r, o) {
                      if (
                        (ji(e) && (e = Fs(e, o, t, n, r)),
                        !Mi(e) || (e.style && e.nodeType) || zi(e) || Hi(e))
                      )
                        return Ci(e) ? Fs(e, o, t, n, r) : e;
                      var i,
                        a = {};
                      for (i in e) a[i] = Fs(e[i], o, t, n, r);
                      return a;
                    })(t[e], r, o, i, n),
                n,
                r,
                i
              ) &&
            ((n._pt = s =
              new eu(n._pt, o, e, 0, 1, a.render, a, 0, a.priority)),
            n !== ti)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(o)], c = a._props.length;
              c--;

            )
              u[a._props[c]] = s;
          return a;
        },
        Ds = function e(t, n) {
          var r,
            o,
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            m,
            y = t.vars,
            v = y.ease,
            g = y.startAt,
            b = y.immediateRender,
            w = y.lazy,
            _ = y.onUpdate,
            S = y.onUpdateParams,
            x = y.callbackScope,
            O = y.runBackwards,
            k = y.yoyoEase,
            P = y.keyframes,
            T = y.autoRevert,
            E = t._dur,
            A = t._startAt,
            I = t._targets,
            C = t.parent,
            j = C && "nested" === C.data ? C.parent._targets : I,
            L = "auto" === t._overwrite && !Go,
            R = t.timeline;
          if (
            (R && (!P || !v) && (v = "none"),
            (t._ease = Os(v, xi.ease)),
            (t._yEase = k ? Ss(Os(!0 === k ? v : k, xi.ease)) : 0),
            k &&
              t._yoyo &&
              !t._repeat &&
              ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
            !R)
          ) {
            if (
              ((h = (l = I[0] ? la(I[0]).harness : 0) && y[l.prop]),
              (r = Oa(y, ta)),
              A && A.render(-1, !0).kill(),
              g)
            ) {
              if (
                (Ta(
                  (t._startAt = zs.set(
                    I,
                    wa(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: C,
                        immediateRender: !0,
                        lazy: Di(w),
                        startAt: null,
                        delay: 0,
                        onUpdate: _,
                        onUpdateParams: S,
                        callbackScope: x,
                        stagger: 0,
                      },
                      g
                    )
                  ))
                ),
                b)
              )
                if (n > 0) T || (t._startAt = 0);
                else if (E && !(n < 0 && A)) return void (n && (t._zTime = n));
            } else if (O && E)
              if (A) !T && (t._startAt = 0);
              else if (
                (n && (b = !1),
                (i = wa(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && Di(w),
                    immediateRender: b,
                    stagger: 0,
                    parent: C,
                  },
                  r
                )),
                h && (i[l.prop] = h),
                Ta((t._startAt = zs.set(I, i))),
                b)
              ) {
                if (!n) return;
              } else e(t._startAt, 1e-8);
            for (
              t._pt = 0, w = (E && Di(w)) || (w && !E), o = 0;
              o < I.length;
              o++
            ) {
              if (
                ((c = (s = I[o])._gsap || ca(I)[o]._gsap),
                (t._ptLookup[o] = d = {}),
                ra[c.id] && na.length && ya(),
                (p = j === I ? o : j.indexOf(s)),
                l &&
                  !1 !== (f = new l()).init(s, h || r, t, p, j) &&
                  ((t._pt = a =
                    new eu(t._pt, s, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (e) {
                    d[e] = a;
                  }),
                  f.priority && (u = 1)),
                !l || h)
              )
                for (i in r)
                  oa[i] && (f = Ms(i, r, t, p, s, j))
                    ? f.priority && (u = 1)
                    : (d[i] = a =
                        Rs.call(t, s, i, "get", r[i], p, j, 0, y.stringFilter));
              t._op && t._op[o] && t.kill(s, t._op[o]),
                L &&
                  t._pt &&
                  ((js = t),
                  Jo.killTweensOf(s, d, t.globalTime(0)),
                  (m = !t.parent),
                  (js = 0)),
                t._pt && w && (ra[c.id] = 1);
            }
            u && Zs(t), t._onInit && t._onInit(t);
          }
          (t._from = !R && !!y.runBackwards),
            (t._onUpdate = _),
            (t._initted = (!t._op || t._pt) && !m);
        },
        Fs = function (e, t, n, r, o) {
          return ji(e)
            ? e.call(t, n, r, o)
            : Ci(e) && ~e.indexOf("random(")
            ? ns(e)
            : e;
        },
        Ns = ua + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Hs = (Ns + ",id,stagger,delay,duration,paused,scrollTrigger").split(
          ","
        ),
        zs = (function (e) {
          function t(t, n, r, o) {
            var i;
            "number" == typeof n && ((r.duration = n), (n = r), (r = null));
            var a,
              s,
              u,
              c,
              l,
              f,
              d,
              p,
              h = (i = e.call(this, o ? n : ka(n), r) || this).vars,
              m = h.duration,
              y = h.delay,
              v = h.immediateRender,
              g = h.stagger,
              b = h.overwrite,
              w = h.keyframes,
              _ = h.defaults,
              S = h.scrollTrigger,
              x = h.yoyoEase,
              O = i.parent,
              k = (zi(t) || Hi(t) ? Li(t[0]) : "length" in n) ? [t] : Ja(t);
            if (
              ((i._targets = k.length
                ? ca(k)
                : Ki(
                    "GSAP target " + t + " not found. https://greensock.com",
                    !Si.nullTargetWarn
                  ) || []),
              (i._ptLookup = []),
              (i._overwrite = b),
              w || g || Ni(m) || Ni(y))
            ) {
              if (
                ((n = i.vars),
                (a = i.timeline =
                  new Cs({ data: "nested", defaults: _ || {} })).kill(),
                (a.parent = a._dp = Yo(i)),
                (a._start = 0),
                w)
              )
                wa(a.vars.defaults, { ease: "none" }),
                  w.forEach(function (e) {
                    return a.to(k, e, ">");
                  });
              else {
                if (((c = k.length), (d = g ? $a(g) : ea), Mi(g)))
                  for (l in g) ~Ns.indexOf(l) && (p || (p = {}), (p[l] = g[l]));
                for (s = 0; s < c; s++) {
                  for (l in ((u = {}), n)) Hs.indexOf(l) < 0 && (u[l] = n[l]);
                  (u.stagger = 0),
                    x && (u.yoyoEase = x),
                    p && Sa(u, p),
                    (f = k[s]),
                    (u.duration = +Fs(m, Yo(i), s, f, k)),
                    (u.delay = (+Fs(y, Yo(i), s, f, k) || 0) - i._delay),
                    !g &&
                      1 === c &&
                      u.delay &&
                      ((i._delay = y = u.delay),
                      (i._start += y),
                      (u.delay = 0)),
                    a.to(f, u, d(s, f, k));
                }
                a.duration() ? (m = y = 0) : (i.timeline = 0);
              }
              m || i.duration((m = a.duration()));
            } else i.timeline = 0;
            return (
              !0 !== b || Go || ((js = Yo(i)), Jo.killTweensOf(k), (js = 0)),
              O && Ma(O, Yo(i)),
              (v ||
                (!m &&
                  !w &&
                  i._start === pa(O._time) &&
                  Di(v) &&
                  (function e(t) {
                    return !t || (t._ts && e(t.parent));
                  })(Yo(i)) &&
                  "nested" !== O.data)) &&
                ((i._tTime = -1e-8), i.render(Math.max(0, -y))),
              S && Fa(Yo(i), S),
              i
            );
          }
          Xo(t, e);
          var n = t.prototype;
          return (
            (n.render = function (e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                u,
                c,
                l,
                f,
                d = this._time,
                p = this._tDur,
                h = this._dur,
                m = e > p - 1e-8 && e >= 0 ? p : e < 1e-8 ? 0 : e;
              if (h) {
                if (
                  m !== this._tTime ||
                  !e ||
                  n ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 != e < 0)
                ) {
                  if (((r = m), (l = this.timeline), this._repeat)) {
                    if (((a = h + this._rDelay), this._repeat < -1 && e < 0))
                      return this.totalTime(100 * a + e, t, n);
                    if (
                      ((r = pa(m % a)),
                      m === p
                        ? ((i = this._repeat), (r = h))
                        : ((i = ~~(m / a)) && i === m / a && ((r = h), i--),
                          r > h && (r = h)),
                      (u = this._yoyo && 1 & i) &&
                        ((f = this._yEase), (r = h - r)),
                      (s = Ca(this._tTime, a)),
                      r === d && !n && this._initted)
                    )
                      return this;
                    i !== s &&
                      (l && this._yEase && xs(l, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = n = 1),
                        (this.render(pa(a * i), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Na(this, e < 0 ? e : r, n, t))
                      return (this._tTime = 0), this;
                    if (h !== this._dur) return this.render(e, t, n);
                  }
                  for (
                    this._tTime = m,
                      this._time = r,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = c = (f || this._ease)(r / h),
                      this._from && (this.ratio = c = 1 - c),
                      r && !d && !t && is(this, "onStart"),
                      o = this._pt;
                    o;

                  )
                    o.r(c, o.d), (o = o._next);
                  (l &&
                    l.render(e < 0 ? e : !r && u ? -1e-8 : l._dur * c, t, n)) ||
                    (this._startAt && (this._zTime = e)),
                    this._onUpdate &&
                      !t &&
                      (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                      is(this, "onUpdate")),
                    this._repeat &&
                      i !== s &&
                      this.vars.onRepeat &&
                      !t &&
                      this.parent &&
                      is(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (e < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(e, !0, !0),
                      (e || !h) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        Ta(this, 1),
                      t ||
                        (e < 0 && !d) ||
                        (!m && !d) ||
                        (is(
                          this,
                          m === p ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < p && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (e, t, n, r) {
                  var o,
                    i,
                    a,
                    s = e.ratio,
                    u =
                      t < 0 ||
                      (!t &&
                        ((!e._start &&
                          (function e(t) {
                            var n = t.parent;
                            return (
                              n &&
                              n._ts &&
                              n._initted &&
                              !n._lock &&
                              (n.rawTime() < 0 || e(n))
                            );
                          })(e)) ||
                          ((e._ts < 0 || e._dp._ts < 0) &&
                            "isFromStart" !== e.data &&
                            "isStart" !== e.data)))
                        ? 0
                        : 1,
                    c = e._rDelay,
                    l = 0;
                  if (
                    (c &&
                      e._repeat &&
                      ((l = Wa(0, e._tDur, t)),
                      (i = Ca(l, c)),
                      (a = Ca(e._tTime, c)),
                      e._yoyo && 1 & i && (u = 1 - u),
                      i !== a &&
                        ((s = 1 - u),
                        e.vars.repeatRefresh && e._initted && e.invalidate())),
                    u !== s || r || 1e-8 === e._zTime || (!t && e._zTime))
                  ) {
                    if (!e._initted && Na(e, t, r, n)) return;
                    for (
                      a = e._zTime,
                        e._zTime = t || (n ? 1e-8 : 0),
                        n || (n = t && !a),
                        e.ratio = u,
                        e._from && (u = 1 - u),
                        e._time = 0,
                        e._tTime = l,
                        n || is(e, "onStart"),
                        o = e._pt;
                      o;

                    )
                      o.r(u, o.d), (o = o._next);
                    e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                      e._onUpdate && !n && is(e, "onUpdate"),
                      l && e._repeat && !n && e.parent && is(e, "onRepeat"),
                      (t >= e._tDur || t < 0) &&
                        e.ratio === u &&
                        (u && Ta(e, 1),
                        n ||
                          (is(e, u ? "onComplete" : "onReverseComplete", !0),
                          e._prom && e._prom()));
                  } else e._zTime || (e._zTime = t);
                })(this, e, t, n);
              return this;
            }),
            (n.targets = function () {
              return this._targets;
            }),
            (n.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                e.prototype.invalidate.call(this)
              );
            }),
            (n.kill = function (e, t) {
              if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
                return (
                  (this._lazy = this._pt = 0), this.parent ? as(this) : this
                );
              if (this.timeline) {
                var n = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    e,
                    t,
                    js && !0 !== js.vars.overwrite
                  )._first || as(this),
                  this.parent &&
                    n !== this.timeline.totalDuration() &&
                    Ha(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                  this
                );
              }
              var r,
                o,
                i,
                a,
                s,
                u,
                c,
                l = this._targets,
                f = e ? Ja(e) : l,
                d = this._ptLookup,
                p = this._pt;
              if (
                (!t || "all" === t) &&
                (function (e, t) {
                  for (
                    var n = e.length, r = n === t.length;
                    r && n-- && e[n] === t[n];

                  );
                  return n < 0;
                })(l, f)
              )
                return "all" === t && (this._pt = 0), as(this);
              for (
                r = this._op = this._op || [],
                  "all" !== t &&
                    (Ci(t) &&
                      ((s = {}),
                      da(t, function (e) {
                        return (s[e] = 1);
                      }),
                      (t = s)),
                    (t = (function (e, t) {
                      var n,
                        r,
                        o,
                        i,
                        a = e[0] ? la(e[0]).harness : 0,
                        s = a && a.aliases;
                      if (!s) return t;
                      for (r in ((n = Sa({}, t)), s))
                        if ((r in n))
                          for (o = (i = s[r].split(",")).length; o--; )
                            n[i[o]] = n[r];
                      return n;
                    })(l, t))),
                  c = l.length;
                c--;

              )
                if (~f.indexOf(l[c]))
                  for (s in ((o = d[c]),
                  "all" === t
                    ? ((r[c] = t), (a = o), (i = {}))
                    : ((i = r[c] = r[c] || {}), (a = t)),
                  a))
                    (u = o && o[s]) &&
                      (("kill" in u.d && !0 !== u.d.kill(s)) ||
                        Pa(this, u, "_pt"),
                      delete o[s]),
                      "all" !== i && (i[s] = 1);
              return this._initted && !this._pt && p && as(this), this;
            }),
            (t.to = function (e, n) {
              return new t(e, n, arguments[2]);
            }),
            (t.from = function (e, n) {
              return new t(e, ma(arguments, 1));
            }),
            (t.delayedCall = function (e, n, r, o) {
              return new t(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: o,
              });
            }),
            (t.fromTo = function (e, n, r) {
              return new t(e, ma(arguments, 2));
            }),
            (t.set = function (e, n) {
              return (
                (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
              );
            }),
            (t.killTweensOf = function (e, t, n) {
              return Jo.killTweensOf(e, t, n);
            }),
            t
          );
        })(Is);
      wa(zs.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        da("staggerTo,staggerFrom,staggerFromTo", function (e) {
          zs[e] = function () {
            var t = new Cs(),
              n = Ya.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
            );
          };
        });
      var qs = function (e, t, n) {
          return (e[t] = n);
        },
        Bs = function (e, t, n) {
          return e[t](n);
        },
        Us = function (e, t, n, r) {
          return e[t](r.fp, n);
        },
        Ws = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        Vs = function (e, t) {
          return ji(e[t]) ? Bs : Ri(e[t]) && e.setAttribute ? Ws : qs;
        },
        Ys = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t);
        },
        Xs = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        Gs = function (e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * e)
                  : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                r),
                (n = n._next);
            r += t.c;
          }
          t.set(t.t, t.p, r, t);
        },
        Js = function (e, t) {
          for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
        },
        Qs = function (e, t, n, r) {
          for (var o, i = this._pt; i; )
            (o = i._next), i.p === r && i.modifier(e, t, n), (i = o);
        },
        $s = function (e) {
          for (var t, n, r = this._pt; r; )
            (n = r._next),
              (r.p === e && !r.op) || r.op === e
                ? Pa(this, r, "_pt")
                : r.dep || (t = 1),
              (r = n);
          return !t;
        },
        Ks = function (e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
        },
        Zs = function (e) {
          for (var t, n, r, o, i = e._pt; i; ) {
            for (t = i._next, n = r; n && n.pr > i.pr; ) n = n._next;
            (i._prev = n ? n._prev : o) ? (i._prev._next = i) : (r = i),
              (i._next = n) ? (n._prev = i) : (o = i),
              (i = t);
          }
          e._pt = r;
        },
        eu = (function () {
          function e(e, t, n, r, o, i, a, s, u) {
            (this.t = t),
              (this.s = r),
              (this.c = o),
              (this.p = n),
              (this.r = i || Ys),
              (this.d = a || this),
              (this.set = s || qs),
              (this.pr = u || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = Ks),
                (this.m = e),
                (this.mt = n),
                (this.tween = t);
            }),
            e
          );
        })();
      da(
        ua +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (ta[e] = 1);
        }
      ),
        (Gi.TweenMax = Gi.TweenLite = zs),
        (Gi.TimelineLite = Gi.TimelineMax = Cs),
        (Jo = new Cs({
          sortChildren: !1,
          defaults: xi,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (Si.stringFilter = ms);
      var tu = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          t.forEach(function (e) {
            return ss(e);
          });
        },
        timeline: function (e) {
          return new Cs(e);
        },
        getTweensOf: function (e, t) {
          return Jo.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, r) {
          Ci(e) && (e = Ja(e)[0]);
          var o = la(e || {}).get,
            i = n ? ba : ga;
          return (
            "native" === n && (n = ""),
            e
              ? t
                ? i(((oa[t] && oa[t].get) || o)(e, t, n, r))
                : function (t, n, r) {
                    return i(((oa[t] && oa[t].get) || o)(e, t, n, r));
                  }
              : e
          );
        },
        quickSetter: function (e, t, n) {
          if ((e = Ja(e)).length > 1) {
            var r = e.map(function (e) {
                return ou.quickSetter(e, t, n);
              }),
              o = r.length;
            return function (e) {
              for (var t = o; t--; ) r[t](e);
            };
          }
          e = e[0] || {};
          var i = oa[t],
            a = la(e),
            s = (a.harness && (a.harness.aliases || {})[t]) || t,
            u = i
              ? function (t) {
                  var r = new i();
                  (ti._pt = 0),
                    r.init(e, n ? t + n : t, ti, 0, [e]),
                    r.render(1, r),
                    ti._pt && Js(1, ti);
                }
              : a.set(e, s);
          return i
            ? u
            : function (t) {
                return u(e, s, n ? t + n : t, a, 1);
              };
        },
        isTweening: function (e) {
          return Jo.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = Os(e.ease, xi.ease)), xa(xi, e || {});
        },
        config: function (e) {
          return xa(Si, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            r = e.plugins,
            o = e.defaults,
            i = e.extendTimeline;
          (r || "").split(",").forEach(function (e) {
            return (
              e &&
              !oa[e] &&
              !Gi[e] &&
              Ki(t + " effect requires " + e + " plugin.")
            );
          }),
            (ia[t] = function (e, t, r) {
              return n(Ja(e), wa(t || {}, o), r);
            }),
            i &&
              (Cs.prototype[t] = function (e, n, r) {
                return this.add(ia[t](e, Mi(n) ? n : (r = n) && {}, this), r);
              });
        },
        registerEase: function (e, t) {
          gs[e] = Os(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? Os(e, t) : gs;
        },
        getById: function (e) {
          return Jo.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var n,
            r,
            o = new Cs(e);
          for (
            o.smoothChildTiming = Di(e.smoothChildTiming),
              Jo.remove(o),
              o._dp = 0,
              o._time = o._tTime = Jo._time,
              n = Jo._first;
            n;

          )
            (r = n._next),
              (!t &&
                !n._dur &&
                n instanceof zs &&
                n.vars.onComplete === n._targets[0]) ||
                Da(o, n, n._start - n._delay),
              (n = r);
          return Da(Jo, o, 0), o;
        },
        utils: {
          wrap: function e(t, n, r) {
            var o = n - t;
            return zi(t)
              ? ts(t, e(0, t.length), n)
              : Ua(r, function (e) {
                  return ((o + ((e - t) % o)) % o) + t;
                });
          },
          wrapYoyo: function e(t, n, r) {
            var o = n - t,
              i = 2 * o;
            return zi(t)
              ? ts(t, e(0, t.length - 1), n)
              : Ua(r, function (e) {
                  return (
                    t + ((e = (i + ((e - t) % i)) % i || 0) > o ? i - e : e)
                  );
                });
          },
          distribute: $a,
          random: es,
          snap: Za,
          normalize: function (e, t, n) {
            return rs(e, t, 0, 1, n);
          },
          getUnit: Va,
          clamp: function (e, t, n) {
            return Ua(n, function (n) {
              return Wa(e, t, n);
            });
          },
          splitColor: ls,
          toArray: Ja,
          mapRange: rs,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || Va(n));
            };
          },
          interpolate: function e(t, n, r, o) {
            var i = isNaN(t + n)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * n;
                };
            if (!i) {
              var a,
                s,
                u,
                c,
                l,
                f = Ci(t),
                d = {};
              if ((!0 === r && (o = 1) && (r = null), f))
                (t = { p: t }), (n = { p: n });
              else if (zi(t) && !zi(n)) {
                for (u = [], c = t.length, l = c - 2, s = 1; s < c; s++)
                  u.push(e(t[s - 1], t[s]));
                c--,
                  (i = function (e) {
                    e *= c;
                    var t = Math.min(l, ~~e);
                    return u[t](e - t);
                  }),
                  (r = n);
              } else o || (t = Sa(zi(t) ? [] : {}, t));
              if (!u) {
                for (a in n) Rs.call(d, t, a, "get", n[a]);
                i = function (e) {
                  return Js(e, d) || (f ? t.p : t);
                };
              }
            }
            return Ua(r, i);
          },
          shuffle: Qa,
        },
        install: Qi,
        effects: ia,
        ticker: ys,
        updateRoot: Cs.updateRoot,
        plugins: oa,
        globalTimeline: Jo,
        core: {
          PropTween: eu,
          globals: Zi,
          Tween: zs,
          Timeline: Cs,
          Animation: Is,
          getCache: la,
          _removeLinkedListItem: Pa,
          suppressOverwrites: function (e) {
            return (Go = e);
          },
        },
      };
      da("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (tu[e] = zs[e]);
      }),
        ys.add(Cs.updateRoot),
        (ti = tu.to({}, { duration: 0 }));
      var nu = function (e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
          return n;
        },
        ru = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, r) {
              r._onInit = function (e) {
                var r, o;
                if (
                  (Ci(n) &&
                    ((r = {}),
                    da(n, function (e) {
                      return (r[e] = 1);
                    }),
                    (n = r)),
                  t)
                ) {
                  for (o in ((r = {}), n)) r[o] = t(n[o]);
                  n = r;
                }
                !(function (e, t) {
                  var n,
                    r,
                    o,
                    i = e._targets;
                  for (n in t)
                    for (r = i.length; r--; )
                      (o = e._ptLookup[r][n]) &&
                        (o = o.d) &&
                        (o._pt && (o = nu(o, n)),
                        o && o.modifier && o.modifier(t[n], e, i[r], n));
                })(e, n);
              };
            },
          };
        },
        ou =
          tu.registerPlugin(
            {
              name: "attr",
              init: function (e, t, n, r, o) {
                var i, a;
                for (i in t)
                  (a = this.add(
                    e,
                    "setAttribute",
                    (e.getAttribute(i) || 0) + "",
                    t[i],
                    r,
                    o,
                    0,
                    0,
                    i
                  )) && (a.op = i),
                    this._props.push(i);
              },
            },
            {
              name: "endArray",
              init: function (e, t) {
                for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
              },
            },
            ru("roundProps", Ka),
            ru("modifiers"),
            ru("snap", Za)
          ) || tu;
      (zs.version = Cs.version = ou.version = "3.6.0"), (Zo = 1), Fi() && vs();
      gs.Power0,
        gs.Power1,
        gs.Power2,
        gs.Power3,
        gs.Power4,
        gs.Linear,
        gs.Quad,
        gs.Cubic,
        gs.Quart,
        gs.Quint,
        gs.Strong,
        gs.Elastic,
        gs.Back,
        gs.SteppedEase,
        gs.Bounce,
        gs.Sine,
        gs.Expo,
        gs.Circ;
      var iu,
        au,
        su,
        uu,
        cu,
        lu,
        fu,
        du,
        pu = {},
        hu = 180 / Math.PI,
        mu = Math.PI / 180,
        yu = Math.atan2,
        vu = /([A-Z])/g,
        gu = /(?:left|right|width|margin|padding|x)/i,
        bu = /[\s,\(]\S/,
        wu = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        _u = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        Su = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        xu = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
            t
          );
        },
        Ou = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        ku = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        Pu = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        Tu = function (e, t, n) {
          return (e.style[t] = n);
        },
        Eu = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        Au = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        Iu = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        Cu = function (e, t, n, r, o) {
          var i = e._gsap;
          (i.scaleX = i.scaleY = n), i.renderTransform(o, i);
        },
        ju = function (e, t, n, r, o) {
          var i = e._gsap;
          (i[t] = n), i.renderTransform(o, i);
        },
        Lu = "transform",
        Ru = Lu + "Origin",
        Mu = function (e, t) {
          var n = au.createElementNS
            ? au.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : au.createElement(e);
          return n.style ? n : au.createElement(e);
        },
        Du = function e(t, n, r) {
          var o = getComputedStyle(t);
          return (
            o[n] ||
            o.getPropertyValue(n.replace(vu, "-$1").toLowerCase()) ||
            o.getPropertyValue(n) ||
            (!r && e(t, Nu(n) || n, 1)) ||
            ""
          );
        },
        Fu = "O,Moz,ms,Ms,Webkit".split(","),
        Nu = function (e, t, n) {
          var r = (t || cu).style,
            o = 5;
          if (e in r && !n) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            o-- && !(Fu[o] + e in r);

          );
          return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? Fu[o] : "") + e;
        },
        Hu = function () {
          "undefined" != typeof window &&
            window.document &&
            ((iu = window),
            (au = iu.document),
            (su = au.documentElement),
            (cu = Mu("div") || { style: {} }),
            (lu = Mu("div")),
            (Lu = Nu(Lu)),
            (Ru = Lu + "Origin"),
            (cu.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (du = !!Nu("perspective")),
            (uu = 1));
        },
        zu = function e(t) {
          var n,
            r = Mu(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            o = this.parentNode,
            i = this.nextSibling,
            a = this.style.cssText;
          if (
            (su.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            o && (i ? o.insertBefore(this, i) : o.appendChild(this)),
            su.removeChild(r),
            (this.style.cssText = a),
            n
          );
        },
        qu = function (e, t) {
          for (var n = t.length; n--; )
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        Bu = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = zu.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === zu ||
              (t = zu.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +qu(e, ["x", "cx", "x1"]) || 0,
                  y: +qu(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Uu = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Bu(e));
        },
        Wu = function (e, t) {
          if (t) {
            var n = e.style;
            t in pu && t !== Ru && (t = Lu),
              n.removeProperty
                ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                    (t = "-" + t),
                  n.removeProperty(t.replace(vu, "-$1").toLowerCase()))
                : n.removeAttribute(t);
          }
        },
        Vu = function (e, t, n, r, o, i) {
          var a = new eu(e._pt, t, n, 0, 1, i ? Pu : ku);
          return (e._pt = a), (a.b = r), (a.e = o), e._props.push(n), a;
        },
        Yu = { deg: 1, rad: 1, turn: 1 },
        Xu = function e(t, n, r, o) {
          var i,
            a,
            s,
            u,
            c = parseFloat(r) || 0,
            l = (r + "").trim().substr((c + "").length) || "px",
            f = cu.style,
            d = gu.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
            m = "px" === o,
            y = "%" === o;
          return o === l || !c || Yu[o] || Yu[l]
            ? c
            : ("px" !== l && !m && (c = e(t, n, r, "px")),
              (u = t.getCTM && Uu(t)),
              (!y && "%" !== l) || (!pu[n] && !~n.indexOf("adius"))
                ? ((f[d ? "width" : "height"] = 100 + (m ? l : o)),
                  (a =
                    ~n.indexOf("adius") || ("em" === o && t.appendChild && !p)
                      ? t
                      : t.parentNode),
                  u && (a = (t.ownerSVGElement || {}).parentNode),
                  (a && a !== au && a.appendChild) || (a = au.body),
                  (s = a._gsap) && y && s.width && d && s.time === ys.time
                    ? pa((c / s.width) * 100)
                    : ((y || "%" === l) && (f.position = Du(t, "position")),
                      a === t && (f.position = "static"),
                      a.appendChild(cu),
                      (i = cu[h]),
                      a.removeChild(cu),
                      (f.position = "absolute"),
                      d &&
                        y &&
                        (((s = la(a)).time = ys.time), (s.width = a[h])),
                      pa(m ? (i * c) / 100 : i && c ? (100 / i) * c : 0)))
                : ((i = u ? t.getBBox()[d ? "width" : "height"] : t[h]),
                  pa(y ? (c / i) * 100 : (c / 100) * i)));
        },
        Gu = function (e, t, n, r) {
          var o;
          return (
            uu || Hu(),
            t in wu &&
              "transform" !== t &&
              ~(t = wu[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            pu[t] && "transform" !== t
              ? ((o = ac(e, r)),
                (o =
                  "transformOrigin" !== t
                    ? o[t]
                    : sc(Du(e, Ru)) + " " + o.zOrigin + "px"))
              : (!(o = e.style[t]) ||
                  "auto" === o ||
                  r ||
                  ~(o + "").indexOf("calc(")) &&
                (o =
                  (Zu[t] && Zu[t](e, t, n)) ||
                  Du(e, t) ||
                  fa(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            n && !~(o + "").trim().indexOf(" ") ? Xu(e, t, o, n) + n : o
          );
        },
        Ju = function (e, t, n, r) {
          if (!n || "none" === n) {
            var o = Nu(t, e, 1),
              i = o && Du(e, o, 1);
            i && i !== n
              ? ((t = o), (n = i))
              : "borderColor" === t && (n = Du(e, "borderTopColor"));
          }
          var a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            m,
            y,
            v,
            g = new eu(this._pt, e.style, t, 0, 1, Gs),
            b = 0,
            w = 0;
          if (
            ((g.b = n),
            (g.e = r),
            (n += ""),
            "auto" === (r += "") &&
              ((e.style[t] = r), (r = Du(e, t) || r), (e.style[t] = n)),
            ms((a = [n, r])),
            (r = a[1]),
            (u = (n = a[0]).match(Ui) || []),
            (r.match(Ui) || []).length)
          ) {
            for (; (s = Ui.exec(r)); )
              (d = s[0]),
                (h = r.substring(b, s.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                    (l = 1),
                d !== (f = u[w++] || "") &&
                  ((c = parseFloat(f) || 0),
                  (y = f.substr((c + "").length)),
                  (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                    (d = d.substr(2)),
                  (p = parseFloat(d)),
                  (m = d.substr((p + "").length)),
                  (b = Ui.lastIndex - m.length),
                  m ||
                    ((m = m || Si.units[t] || y),
                    b === r.length && ((r += m), (g.e += m))),
                  y !== m && (c = Xu(e, t, f, m) || 0),
                  (g._pt = {
                    _next: g._pt,
                    p: h || 1 === w ? h : ",",
                    s: c,
                    c: v ? v * p : p - c,
                    m: (l && l < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            g.c = b < r.length ? r.substring(b, r.length) : "";
          } else g.r = "display" === t && "none" === r ? Pu : ku;
          return Vi.test(r) && (g.e = 0), (this._pt = g), g;
        },
        Qu = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        $u = function (e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return (
            ("top" !== n && "bottom" !== n && "left" !== r && "right" !== r) ||
              ((e = n), (n = r), (r = e)),
            (t[0] = Qu[n] || n),
            (t[1] = Qu[r] || r),
            t.join(" ")
          );
        },
        Ku = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              r,
              o,
              i = t.t,
              a = i.style,
              s = t.u,
              u = i._gsap;
            if ("all" === s || !0 === s) (a.cssText = ""), (r = 1);
            else
              for (o = (s = s.split(",")).length; --o > -1; )
                (n = s[o]),
                  pu[n] && ((r = 1), (n = "transformOrigin" === n ? Ru : Lu)),
                  Wu(i, n);
            r &&
              (Wu(i, Lu),
              u &&
                (u.svg && i.removeAttribute("transform"),
                ac(i, 1),
                (u.uncache = 1)));
          }
        },
        Zu = {
          clearProps: function (e, t, n, r, o) {
            if ("isFromStart" !== o.data) {
              var i = (e._pt = new eu(e._pt, t, n, 0, 0, Ku));
              return (
                (i.u = r), (i.pr = -10), (i.tween = o), e._props.push(n), 1
              );
            }
          },
        },
        ec = [1, 0, 0, 1, 0, 0],
        tc = {},
        nc = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        rc = function (e) {
          var t = Du(e, Lu);
          return nc(t) ? ec : t.substr(7).match(Bi).map(pa);
        },
        oc = function (e, t) {
          var n,
            r,
            o,
            i,
            a = e._gsap || la(e),
            s = e.style,
            u = rc(e);
          return a.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (o = e.transform.baseVal.consolidate().matrix).a,
                o.b,
                o.c,
                o.d,
                o.e,
                o.f,
              ]).join(",")
              ? ec
              : u
            : (u !== ec ||
                e.offsetParent ||
                e === su ||
                a.svg ||
                ((o = s.display),
                (s.display = "block"),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((i = 1), (r = e.nextSibling), su.appendChild(e)),
                (u = rc(e)),
                o ? (s.display = o) : Wu(e, "display"),
                i &&
                  (r
                    ? n.insertBefore(e, r)
                    : n
                    ? n.appendChild(e)
                    : su.removeChild(e))),
              t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        ic = function (e, t, n, r, o, i) {
          var a,
            s,
            u,
            c = e._gsap,
            l = o || oc(e, !0),
            f = c.xOrigin || 0,
            d = c.yOrigin || 0,
            p = c.xOffset || 0,
            h = c.yOffset || 0,
            m = l[0],
            y = l[1],
            v = l[2],
            g = l[3],
            b = l[4],
            w = l[5],
            _ = t.split(" "),
            S = parseFloat(_[0]) || 0,
            x = parseFloat(_[1]) || 0;
          n
            ? l !== ec &&
              (s = m * g - y * v) &&
              ((u = S * (-y / s) + x * (m / s) - (m * w - y * b) / s),
              (S = S * (g / s) + x * (-v / s) + (v * w - g * b) / s),
              (x = u))
            : ((S =
                (a = Bu(e)).x + (~_[0].indexOf("%") ? (S / 100) * a.width : S)),
              (x =
                a.y +
                (~(_[1] || _[0]).indexOf("%") ? (x / 100) * a.height : x))),
            r || (!1 !== r && c.smooth)
              ? ((b = S - f),
                (w = x - d),
                (c.xOffset = p + (b * m + w * v) - b),
                (c.yOffset = h + (b * y + w * g) - w))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = S),
            (c.yOrigin = x),
            (c.smooth = !!r),
            (c.origin = t),
            (c.originIsAbsolute = !!n),
            (e.style[Ru] = "0px 0px"),
            i &&
              (Vu(i, c, "xOrigin", f, S),
              Vu(i, c, "yOrigin", d, x),
              Vu(i, c, "xOffset", p, c.xOffset),
              Vu(i, c, "yOffset", h, c.yOffset)),
            e.setAttribute("data-svg-origin", S + " " + x);
        },
        ac = function (e, t) {
          var n = e._gsap || new As(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r,
            o,
            i,
            a,
            s,
            u,
            c,
            l,
            f,
            d,
            p,
            h,
            m,
            y,
            v,
            g,
            b,
            w,
            _,
            S,
            x,
            O,
            k,
            P,
            T,
            E,
            A,
            I,
            C,
            j,
            L,
            R,
            M = e.style,
            D = n.scaleX < 0,
            F = Du(e, Ru) || "0";
          return (
            (r = o = i = u = c = l = f = d = p = 0),
            (a = s = 1),
            (n.svg = !(!e.getCTM || !Uu(e))),
            (y = oc(e, n.svg)),
            n.svg &&
              ((P = !n.uncache && e.getAttribute("data-svg-origin")),
              ic(e, P || F, !!P || n.originIsAbsolute, !1 !== n.smooth, y)),
            (h = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            y !== ec &&
              ((w = y[0]),
              (_ = y[1]),
              (S = y[2]),
              (x = y[3]),
              (r = O = y[4]),
              (o = k = y[5]),
              6 === y.length
                ? ((a = Math.sqrt(w * w + _ * _)),
                  (s = Math.sqrt(x * x + S * S)),
                  (u = w || _ ? yu(_, w) * hu : 0),
                  (f = S || x ? yu(S, x) * hu + u : 0) &&
                    (s *= Math.cos(f * mu)),
                  n.svg &&
                    ((r -= h - (h * w + m * S)), (o -= m - (h * _ + m * x))))
                : ((R = y[6]),
                  (j = y[7]),
                  (A = y[8]),
                  (I = y[9]),
                  (C = y[10]),
                  (L = y[11]),
                  (r = y[12]),
                  (o = y[13]),
                  (i = y[14]),
                  (c = (v = yu(R, C)) * hu),
                  v &&
                    ((P = O * (g = Math.cos(-v)) + A * (b = Math.sin(-v))),
                    (T = k * g + I * b),
                    (E = R * g + C * b),
                    (A = O * -b + A * g),
                    (I = k * -b + I * g),
                    (C = R * -b + C * g),
                    (L = j * -b + L * g),
                    (O = P),
                    (k = T),
                    (R = E)),
                  (l = (v = yu(-S, C)) * hu),
                  v &&
                    ((g = Math.cos(-v)),
                    (L = x * (b = Math.sin(-v)) + L * g),
                    (w = P = w * g - A * b),
                    (_ = T = _ * g - I * b),
                    (S = E = S * g - C * b)),
                  (u = (v = yu(_, w)) * hu),
                  v &&
                    ((P = w * (g = Math.cos(v)) + _ * (b = Math.sin(v))),
                    (T = O * g + k * b),
                    (_ = _ * g - w * b),
                    (k = k * g - O * b),
                    (w = P),
                    (O = T)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (a = pa(Math.sqrt(w * w + _ * _ + S * S))),
                  (s = pa(Math.sqrt(k * k + R * R))),
                  (v = yu(O, k)),
                  (f = Math.abs(v) > 2e-4 ? v * hu : 0),
                  (p = L ? 1 / (L < 0 ? -L : L) : 0)),
              n.svg &&
                ((P = e.getAttribute("transform")),
                (n.forceCSS =
                  e.setAttribute("transform", "") || !nc(Du(e, Lu))),
                P && e.setAttribute("transform", P))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (D
                ? ((a *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((s *= -1), (f += f <= 0 ? 180 : -180))),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                (n.xPercent ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (e.offsetWidth * n.xPercent) / 100
                : 0) +
              "px"),
            (n.y =
              o -
              ((n.yPercent =
                o &&
                (n.yPercent ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-o)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * n.yPercent) / 100
                : 0) +
              "px"),
            (n.z = i + "px"),
            (n.scaleX = pa(a)),
            (n.scaleY = pa(s)),
            (n.rotation = pa(u) + "deg"),
            (n.rotationX = pa(c) + "deg"),
            (n.rotationY = pa(l) + "deg"),
            (n.skewX = f + "deg"),
            (n.skewY = d + "deg"),
            (n.transformPerspective = p + "px"),
            (n.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (M[Ru] = sc(F)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = Si.force3D),
            (n.renderTransform = n.svg ? fc : du ? lc : cc),
            (n.uncache = 0),
            n
          );
        },
        sc = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        uc = function (e, t, n) {
          var r = Va(t);
          return pa(parseFloat(t) + parseFloat(Xu(e, "x", n + "px", r))) + r;
        },
        cc = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            lc(e, t);
        },
        lc = function (e, t) {
          var n = t || this,
            r = n.xPercent,
            o = n.yPercent,
            i = n.x,
            a = n.y,
            s = n.z,
            u = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            f = n.skewX,
            d = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            y = n.force3D,
            v = n.target,
            g = n.zOrigin,
            b = "",
            w = ("auto" === y && e && 1 !== e) || !0 === y;
          if (g && ("0deg" !== l || "0deg" !== c)) {
            var _,
              S = parseFloat(c) * mu,
              x = Math.sin(S),
              O = Math.cos(S);
            (S = parseFloat(l) * mu),
              (_ = Math.cos(S)),
              (i = uc(v, i, x * _ * -g)),
              (a = uc(v, a, -Math.sin(S) * -g)),
              (s = uc(v, s, O * _ * -g + g));
          }
          "0px" !== m && (b += "perspective(" + m + ") "),
            (r || o) && (b += "translate(" + r + "%, " + o + "%) "),
            (w || "0px" !== i || "0px" !== a || "0px" !== s) &&
              (b +=
                "0px" !== s || w
                  ? "translate3d(" + i + ", " + a + ", " + s + ") "
                  : "translate(" + i + ", " + a + ") "),
            "0deg" !== u && (b += "rotate(" + u + ") "),
            "0deg" !== c && (b += "rotateY(" + c + ") "),
            "0deg" !== l && (b += "rotateX(" + l + ") "),
            ("0deg" === f && "0deg" === d) ||
              (b += "skew(" + f + ", " + d + ") "),
            (1 === p && 1 === h) || (b += "scale(" + p + ", " + h + ") "),
            (v.style[Lu] = b || "translate(0, 0)");
        },
        fc = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = t || this,
            u = s.xPercent,
            c = s.yPercent,
            l = s.x,
            f = s.y,
            d = s.rotation,
            p = s.skewX,
            h = s.skewY,
            m = s.scaleX,
            y = s.scaleY,
            v = s.target,
            g = s.xOrigin,
            b = s.yOrigin,
            w = s.xOffset,
            _ = s.yOffset,
            S = s.forceCSS,
            x = parseFloat(l),
            O = parseFloat(f);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (h = parseFloat(h)) && ((p += h = parseFloat(h)), (d += h)),
            d || p
              ? ((d *= mu),
                (p *= mu),
                (n = Math.cos(d) * m),
                (r = Math.sin(d) * m),
                (o = Math.sin(d - p) * -y),
                (i = Math.cos(d - p) * y),
                p &&
                  ((h *= mu),
                  (a = Math.tan(p - h)),
                  (o *= a = Math.sqrt(1 + a * a)),
                  (i *= a),
                  h &&
                    ((a = Math.tan(h)),
                    (n *= a = Math.sqrt(1 + a * a)),
                    (r *= a))),
                (n = pa(n)),
                (r = pa(r)),
                (o = pa(o)),
                (i = pa(i)))
              : ((n = m), (i = y), (r = o = 0)),
            ((x && !~(l + "").indexOf("px")) ||
              (O && !~(f + "").indexOf("px"))) &&
              ((x = Xu(v, "x", l, "px")), (O = Xu(v, "y", f, "px"))),
            (g || b || w || _) &&
              ((x = pa(x + g - (g * n + b * o) + w)),
              (O = pa(O + b - (g * r + b * i) + _))),
            (u || c) &&
              ((a = v.getBBox()),
              (x = pa(x + (u / 100) * a.width)),
              (O = pa(O + (c / 100) * a.height))),
            (a =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              o +
              "," +
              i +
              "," +
              x +
              "," +
              O +
              ")"),
            v.setAttribute("transform", a),
            S && (v.style[Lu] = a);
        },
        dc = function (e, t, n, r, o, i) {
          var a,
            s,
            u = Ci(o),
            c = parseFloat(o) * (u && ~o.indexOf("rad") ? hu : 1),
            l = i ? c * i : c - r,
            f = r + l + "deg";
          return (
            u &&
              ("short" === (a = o.split("_")[1]) &&
                (l %= 360) !== l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === a && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === a &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = s = new eu(e._pt, t, n, r, l, Su)),
            (s.e = f),
            (s.u = "deg"),
            e._props.push(n),
            s
          );
        },
        pc = function (e, t, n) {
          var r,
            o,
            i,
            a,
            s,
            u,
            c,
            l = lu.style,
            f = n._gsap;
          for (o in ((l.cssText =
            getComputedStyle(n).cssText + ";position:absolute;display:block;"),
          (l[Lu] = t),
          au.body.appendChild(lu),
          (r = ac(lu, 1)),
          pu))
            (i = f[o]) !== (a = r[o]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 &&
              ((s = Va(i) !== (c = Va(a)) ? Xu(n, o, i, c) : parseFloat(i)),
              (u = parseFloat(a)),
              (e._pt = new eu(e._pt, f, o, s, u - s, _u)),
              (e._pt.u = c || 0),
              e._props.push(o));
          au.body.removeChild(lu);
        };
      da("padding,margin,Width,Radius", function (e, t) {
        var n = "Top",
          r = "Right",
          o = "Bottom",
          i = "Left",
          a = (t < 3 ? [n, r, o, i] : [n + i, n + r, o + r, o + i]).map(
            function (n) {
              return t < 2 ? e + n : "border" + n + e;
            }
          );
        Zu[t > 1 ? "border" + e : e] = function (e, t, n, r, o) {
          var i, s;
          if (arguments.length < 4)
            return (
              (i = a.map(function (t) {
                return Gu(e, t, n);
              })),
              5 === (s = i.join(" ")).split(i[0]).length ? i[0] : s
            );
          (i = (r + "").split(" ")),
            (s = {}),
            a.forEach(function (e, t) {
              return (s[e] = i[t] = i[t] || i[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, o);
        };
      });
      var hc,
        mc,
        yc = {
          name: "css",
          register: Hu,
          targetTest: function (e) {
            return e.style && e.nodeType;
          },
          init: function (e, t, n, r, o) {
            var i,
              a,
              s,
              u,
              c,
              l,
              f,
              d,
              p,
              h,
              m,
              y,
              v,
              g,
              b,
              w = this._props,
              _ = e.style,
              S = n.vars.startAt;
            for (f in (uu || Hu(), t))
              if (
                "autoRound" !== f &&
                ((a = t[f]), !oa[f] || !Ms(f, t, n, r, e, o))
              )
                if (
                  ((c = typeof a),
                  (l = Zu[f]),
                  "function" === c && (c = typeof (a = a.call(n, r, e, o))),
                  "string" === c && ~a.indexOf("random(") && (a = ns(a)),
                  l)
                )
                  l(this, e, f, a, n) && (b = 1);
                else if ("--" === f.substr(0, 2))
                  (i = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
                    (a += ""),
                    (d = Va(i)),
                    (p = Va(a))
                      ? d !== p && (i = Xu(e, f, i, p) + p)
                      : d && (a += d),
                    this.add(_, "setProperty", i, a, r, o, 0, 0, f);
                else if ("undefined" !== c) {
                  if (
                    (S && f in S
                      ? ((i =
                          "function" == typeof S[f]
                            ? S[f].call(n, r, e, o)
                            : S[f]),
                        f in Si.units && !Va(i) && (i += Si.units[f]),
                        "=" === (i + "").charAt(1) && (i = Gu(e, f)))
                      : (i = Gu(e, f)),
                    (u = parseFloat(i)),
                    (h =
                      "string" === c && "=" === a.charAt(1)
                        ? +(a.charAt(0) + "1")
                        : 0) && (a = a.substr(2)),
                    (s = parseFloat(a)),
                    f in wu &&
                      ("autoAlpha" === f &&
                        (1 === u &&
                          "hidden" === Gu(e, "visibility") &&
                          s &&
                          (u = 0),
                        Vu(
                          this,
                          _,
                          "visibility",
                          u ? "inherit" : "hidden",
                          s ? "inherit" : "hidden",
                          !s
                        )),
                      "scale" !== f &&
                        "transform" !== f &&
                        ~(f = wu[f]).indexOf(",") &&
                        (f = f.split(",")[0])),
                    (m = f in pu))
                  )
                    if (
                      (y ||
                        (((v = e._gsap).renderTransform && !t.parseTransform) ||
                          ac(e, t.parseTransform),
                        (g = !1 !== t.smoothOrigin && v.smooth),
                        ((y = this._pt =
                          new eu(
                            this._pt,
                            _,
                            Lu,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === f)
                    )
                      (this._pt = new eu(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        h ? h * s : s - v.scaleY
                      )),
                        w.push("scaleY", f),
                        (f += "X");
                    else {
                      if ("transformOrigin" === f) {
                        (a = $u(a)),
                          v.svg
                            ? ic(e, a, 0, g, 0, this)
                            : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                Vu(this, v, "zOrigin", v.zOrigin, p),
                              Vu(this, _, f, sc(i), sc(a)));
                        continue;
                      }
                      if ("svgOrigin" === f) {
                        ic(e, a, 1, g, 0, this);
                        continue;
                      }
                      if (f in tc) {
                        dc(this, v, f, u, a, h);
                        continue;
                      }
                      if ("smoothOrigin" === f) {
                        Vu(this, v, "smooth", v.smooth, a);
                        continue;
                      }
                      if ("force3D" === f) {
                        v[f] = a;
                        continue;
                      }
                      if ("transform" === f) {
                        pc(this, a, e);
                        continue;
                      }
                    }
                  else f in _ || (f = Nu(f) || f);
                  if (
                    m ||
                    ((s || 0 === s) && (u || 0 === u) && !bu.test(a) && f in _)
                  )
                    s || (s = 0),
                      (d = (i + "").substr((u + "").length)) !==
                        (p = Va(a) || (f in Si.units ? Si.units[f] : d)) &&
                        (u = Xu(e, f, i, p)),
                      (this._pt = new eu(
                        this._pt,
                        m ? v : _,
                        f,
                        u,
                        h ? h * s : s - u,
                        m ||
                        ("px" !== p && "zIndex" !== f) ||
                        !1 === t.autoRound
                          ? _u
                          : Ou
                      )),
                      (this._pt.u = p || 0),
                      d !== p && ((this._pt.b = i), (this._pt.r = xu));
                  else if (f in _) Ju.call(this, e, f, i, a);
                  else {
                    if (!(f in e)) {
                      $i(f, a);
                      continue;
                    }
                    this.add(e, f, e[f], a, r, o);
                  }
                  w.push(f);
                }
            b && Zs(this);
          },
          get: Gu,
          aliases: wu,
          getSetter: function (e, t, n) {
            var r = wu[t];
            return (
              r && r.indexOf(",") < 0 && (t = r),
              t in pu && t !== Ru && (e._gsap.x || Gu(e, "x"))
                ? n && fu === n
                  ? "scale" === t
                    ? Iu
                    : Au
                  : (fu = n || {}) && ("scale" === t ? Cu : ju)
                : e.style && !Ri(e.style[t])
                ? Tu
                : ~t.indexOf("-")
                ? Eu
                : Vs(e, t)
            );
          },
          core: { _removeProperty: Wu, _getMatrix: oc },
        };
      (ou.utils.checkPrefix = Nu),
        (mc = da(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
            (hc = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            pu[e] = 1;
          }
        )),
        da(hc, function (e) {
          (Si.units[e] = "deg"), (tc[e] = 1);
        }),
        (wu[mc[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + hc),
        da(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            wu[t[1]] = mc[t[0]];
          }
        ),
        da(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            Si.units[e] = "px";
          }
        ),
        ou.registerPlugin(yc);
      var vc = ou.registerPlugin(yc) || ou;
      vc.core.Tween;
      function gc(e) {
        return (gc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function bc(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function wc(e, t) {
        return (wc =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _c(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Oc(e);
          if (t) {
            var o = Oc(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Sc(this, n);
        };
      }
      function Sc(e, t) {
        return !t || ("object" !== gc(t) && "function" != typeof t) ? xc(e) : t;
      }
      function xc(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Oc(e) {
        return (Oc = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function kc(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      vc.registerPlugin(yc);
      var Pc = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && wc(e, t);
          })(i, e);
          var t,
            n,
            r,
            o = _c(i);
          function i(e) {
            var t;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              kc(xc((t = o.call(this))), "onUpdate", function () {
                t.isSafari &&
                  ((t.node.style.visibility = "hidden"),
                  t.node.offsetTop,
                  (t.node.style.visibility = "visible"));
              }),
              kc(xc(t), "destroy", function () {}),
              (t.container = e),
              (t.node = document.createElement("div")),
              (t.isShown = !1),
              (t.isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              )),
              (t.node.innerHTML =
                '\n    <svg viewBox="0 0 115.2 400">\n      <rect class="logo-p1" x="49.5" y="150" width="20.7" height="118.5"/>\n      <polygon class="logo-p2" points="24.6,56 115.2,35.1 115.2,22.4 96.7,22.4 0,44 0,67.4 96.7,89.2 115.2,89.2 115.2,76.8 "/>\n      <rect class="logo-p3" x="0" width="115.2" height="23"/>\n      <rect class="logo-p4" y="88.4" width="115.2" height="23"/>\n      <rect class="logo-p5" x="0" y="313" width="115.2" height="25"/>\n      <rect class="logo-p6" x="94.8" y="336.2" width="20.4" height="61"/>\n      <rect class="logo-p7" x="50.3" y="336.2" width="20" height="56"/>\n      <rect class="logo-p8" y="336.2" width="20.7" height="63.8"/>\n    </svg>\n    '),
              (t.ref = {
                bar: t.node.querySelector(".logo-p1"),
                mJoint: t.node.querySelector(".logo-p2"),
                mLeft: t.node.querySelector(".logo-p3"),
                mRight: t.node.querySelector(".logo-p4"),
                eBar: t.node.querySelector(".logo-p5"),
                eTop: t.node.querySelector(".logo-p6"),
                eMiddle: t.node.querySelector(".logo-p7"),
                eBottom: t.node.querySelector(".logo-p8"),
              });
            var n = vc.timeline();
            return (
              vc.set(t.ref.mLeft, { attr: { y: 180, width: 0, x: 115.2 } }),
              vc.set(t.ref.mRight, { attr: { y: 180, width: 0, x: 115.2 } }),
              vc.set(t.ref.mJoint, { scaleY: 0, y: 50 }),
              vc.set(t.ref.eTop, { scaleY: 0, y: -10 }),
              vc.set(t.ref.eMiddle, { scaleY: 0, y: -10 }),
              vc.set(t.ref.eBottom, { scaleY: 0, y: -10 }),
              vc.set(t.ref.eBar, { attr: { y: 215, width: 0 } }),
              vc.set(t.ref.bar, { attr: { height: 0, y: 209 } }),
              n.to(
                t.ref.mLeft,
                { attr: { width: 115.2, x: 0 }, duration: 2, ease: "expo.out" },
                "phase1"
              ),
              n.to(
                t.ref.mRight,
                { attr: { width: 115.2, x: 0 }, duration: 2, ease: "expo.out" },
                "phase1"
              ),
              n.to(
                t.ref.eBar,
                { attr: { width: 115.2 }, duration: 1, ease: "expo.out" },
                "phase1"
              ),
              n.to(
                t.ref.bar,
                {
                  attr: { height: 118.5, y: 150 },
                  duration: 1,
                  ease: "expo.inOut",
                },
                "phase1+=0.5"
              ),
              n.to(
                t.ref.mLeft,
                { attr: { y: 50 }, duration: 1, ease: "expo.inOut" },
                "phase1+=0.5"
              ),
              n.to(
                t.ref.mRight,
                { attr: { y: 50 }, duration: 1, ease: "expo.inOut" },
                "phase1+=0.5"
              ),
              n.to(
                t.ref.eBar,
                { attr: { y: 313 }, duration: 1, ease: "expo.inOut" },
                "phase1+=0.5"
              ),
              n.to(
                t.ref.mLeft,
                { attr: { y: 0 }, duration: 1.1, ease: "expo.out" },
                "phase1+=1.15"
              ),
              n.to(
                t.ref.mRight,
                { attr: { y: 88.4 }, duration: 1.1, ease: "expo.out" },
                "phase1+=1.15"
              ),
              n.to(
                t.ref.mJoint,
                { y: 0, scaleY: 1, duration: 1.1, ease: "expo.out" },
                "phase1+=1.15"
              ),
              n.to(
                t.ref.eTop,
                { y: 0, scaleY: 1, duration: 1.1, ease: "expo.out" },
                "phase1+=1.15"
              ),
              n.to(
                t.ref.eMiddle,
                { y: 0, scaleY: 1, duration: 1.1, ease: "expo.out" },
                "phase1+=1.15"
              ),
              n.to(
                t.ref.eBottom,
                { y: 0, scaleY: 1, duration: 1.1, ease: "expo.out" },
                "phase1+=1.15"
              ),
              n.pause(),
              n.progress(0),
              (t.timeline = n),
              t.container.appendChild(t.node),
              t.show(),
              t
            );
          }
          return (
            (t = i),
            (n = [
              {
                key: "show",
                value: function () {
                  (this.isShown && this.isSafari) ||
                    (this.node.offsetTop,
                    vc.set(this.timeline, { progress: 0 }),
                    vc.to(this.timeline, {
                      delay: 0.5,
                      progress: 1,
                      duration: 3.5,
                      onUpdate: this.onUpdate,
                      onComplete: this.onUpdate,
                    }),
                    (this.isShown = !0));
                },
              },
            ]) && bc(t.prototype, n),
            r && bc(t, r),
            i
          );
        })(w),
        Tc = function (e) {
          return new Pc(e);
        };
      function Ec(e) {
        return (Ec =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ac(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ic(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ac(Object(n), !0).forEach(function (t) {
                Fc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ac(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Cc(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function jc(e, t) {
        return (jc =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Lc(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Dc(e);
          if (t) {
            var o = Dc(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Rc(this, n);
        };
      }
      function Rc(e, t) {
        return !t || ("object" !== Ec(t) && "function" != typeof t) ? Mc(e) : t;
      }
      function Mc(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Dc(e) {
        return (Dc = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Fc(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var Nc = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && jc(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Lc(i);
        function i(e, t) {
          var n;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Fc(Mc((n = o.call(this, t))), "onModalStateChange", function (e) {
              e
                ? n.button.index.hide({ isForwards: !0 })
                : n.button.index.show({ isForwards: !0 });
            }),
            Fc(Mc(n), "onScrollToTop", function () {
              Yn();
            }),
            Fc(Mc(n), "onOpenMenu", function () {
              n.index.show();
            }),
            Fc(Mc(n), "onOpenAbout", function () {
              n.about.show();
            }),
            Fc(Mc(n), "destroy", function () {
              n.unbindListeners(),
                Object.keys(n.button).forEach(function (e) {
                  n.button[e].destroy();
                }),
                (n.button = {});
            });
          var r = n.props,
            a = r.routes,
            s = r.menuIndexSelector,
            u = r.aboutSelector,
            c = r.lightboxSelector,
            l = r.buttonHomeSelector,
            f = r.buttonBackSelector,
            d = r.buttonIndexSelector,
            p = r.buttonAboutSelector;
          return (
            (n.routes = a),
            (n.node = e),
            (n.button = {
              home: n.getSwitchButton(n.node, l, {
                onClick: n.onScrollToTop,
                isHome: !0,
              }),
              back: n.getSwitchButton(n.node, f),
              index: n.getSwitchButton(n.node, d, { onClick: n.onOpenMenu }),
              about: n.getSwitchButton(n.node, p, { onClick: n.onOpenAbout }),
            }),
            (n.logo = Array.from(n.node.querySelectorAll(".me-logo")).map(
              function (e) {
                return new Tc(e);
              }
            )),
            (n.index = new Ur(document.body.querySelector(s), { routes: a })),
            (n.about = new Kr(document.body.querySelector(u), { routes: a })),
            (n.lightbox = new Vo(document.body.querySelector(c))),
            n.reveal(),
            n.bindListeners(),
            n
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "reveal",
              value: function () {
                this.button.home.hide({ isInstant: !0 }),
                  this.button.back.hide({ isInstant: !0, isForwards: !0 }),
                  this.button.index.hide({ isInstant: !0 }),
                  this.button.about.hide({ isInstant: !0 }),
                  "/" === window.location.pathname
                    ? (this.button.home.show({ delay: 0.3 }),
                      this.logo.forEach(function (e) {
                        return e.show();
                      }))
                    : this.button.back.show({ delay: 0.3, isForwards: !0 }),
                  this.button.index.show({ delay: 0.3 }),
                  this.button.about.show({ delay: 0.3 });
              },
            },
            {
              key: "updateInterface",
              value: function (e) {
                if ("/" === e)
                  return (
                    this.button.home.show({ delay: 0.2 }),
                    this.button.back.hide({ isForwards: !0 }),
                    void this.logo.forEach(function (e) {
                      return e.show();
                    })
                  );
                this.button.home.hide(),
                  this.button.back.show({ delay: 0.2, isForwards: !0 });
              },
            },
            {
              key: "getSwitchButton",
              value: function (e, t, n) {
                var r = Array.from(e.querySelectorAll(t)).reduce(
                    function (e, t) {
                      return "true" === t.dataset.front
                        ? ((e.front = t), e)
                        : ((e.back = t), e);
                    },
                    { front: null, back: null }
                  ),
                  o = r.front,
                  i = r.back;
                return new Wn(Ic(Ic({}, n), {}, { nodeFront: o, nodeBack: i }));
              },
            },
            {
              key: "bindListeners",
              value: function () {
                a.on("modal:state:change", this.onModalStateChange);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                a.off("modal:state:change", this.onModalStateChange);
              },
            },
          ]) && Cc(t.prototype, n),
          r && Cc(t, r),
          i
        );
      })(w);
      function Hc(e) {
        return (Hc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function zc(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function qc(e, t) {
        return (qc =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Bc(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Vc(e);
          if (t) {
            var o = Vc(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Uc(this, n);
        };
      }
      function Uc(e, t) {
        return !t || ("object" !== Hc(t) && "function" != typeof t) ? Wc(e) : t;
      }
      function Wc(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Vc(e) {
        return (Vc = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Yc(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Fc(Nc, "defaultProps", {
        routes: {},
        menuIndexSelector: ".menu-index",
        aboutSelector: "[data-site-about]",
        lightboxSelector: "[data-site-lightbox]",
        buttonHomeSelector: '[data-switch-button-id="home"]',
        buttonBackSelector: '[data-switch-button-id="back"]',
        buttonIndexSelector: '[data-switch-button-id="index"]',
        buttonAboutSelector: '[data-switch-button-id="about"]',
      });
      var Xc = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && qc(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = Bc(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            Yc(Wc((t = o.call(this, e))), "onModalStateChange", function (e) {
              document.documentElement.style.overflow = e ? "hidden" : "auto";
            }),
            Yc(Wc(t), "pageTransitionStart", function (e, n, r) {
              return (
                t.pageTransitionPromise &&
                  t.pageTransitionPromise.reject("Cancelled"),
                t.navigation.updateInterface(e),
                new Promise(function (o, i) {
                  (t.pageTransitionPromise = { resolve: o, reject: i }),
                    Promise.all([
                      t.scrollElements.pageTransitionStart(e, n, r),
                      t.hideContent(0.5),
                    ]).then(function () {
                      o();
                    });
                })
              );
            }),
            Yc(Wc(t), "pageTransitionEnd", function (e) {
              t.scrollElements.pageTransitionEnd(e, t.previousURL),
                t.showContent(0.5),
                (t.previousURL = e);
            }),
            Yc(Wc(t), "hideContent", function (e) {
              return (
                t.contentTween && t.contentTween.destroy(),
                new Promise(function (n) {
                  t.contentTween = new Bt({
                    from: t.contentOpacity,
                    to: 0,
                    duration: e,
                    onUpdate: function (e) {
                      (t.contentOpacity = e),
                        t.container.style.setProperty("--page-opacity", e);
                    },
                    onComplete: function () {
                      n();
                    },
                  });
                })
              );
            }),
            Yc(Wc(t), "showContent", function (e) {
              return (
                t.contentTween && t.contentTween.destroy(),
                new Promise(function (n) {
                  t.contentTween = new Bt({
                    from: 0,
                    to: 1,
                    duration: e,
                    delay: 0.2,
                    onUpdate: function (e) {
                      t.container.style.setProperty("--page-opacity", e);
                    },
                    onComplete: function () {
                      n();
                    },
                  });
                })
              );
            }),
            Yc(Wc(t), "destroy", function () {
              t.unbindListeners(),
                t.scrollElements.destroy(),
                t.contentTween && t.contentTween.destroy();
            });
          var n = t.props,
            r = n.routes,
            a = n.container;
          (t.routes = r),
            (t.container = a),
            (t.previousURL = null),
            (t.contentTween = null),
            (t.contentOpacity = 1);
          var s = document.body.querySelector("#page-interface");
          return (
            (t.navigation = new Nc(s, { routes: r })),
            (t.scrollElements = new Mn(s, { routes: r, container: a })),
            (t.pageBufferTimeout = null),
            document.body.style.setProperty("--background-color", "#fff"),
            t.bindListeners(),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                a.on("modal:state:change", this.onModalStateChange);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                a.on("modal:state:change", this.onModalStateChange);
              },
            },
            {
              key: "setPageRoute",
              value: function (e) {
                var t = this;
                this.pageTransitionStart(e, this.previousURL, !0)
                  .then(function () {
                    window.scrollTo(0, 0), (t.container.innerHTML = "");
                  })
                  .catch(function (e) {});
              },
            },
            {
              key: "setPage",
              value: function (e, t) {
                var n = this;
                clearTimeout(this.pageBufferTimeout),
                  this.pageTransitionStart(e, this.previousURL)
                    .then(function () {
                      window.scrollTo(0, 0),
                        (n.pageBufferTimeout = setTimeout(function () {
                          (n.container.innerHTML = t), n.pageTransitionEnd(e);
                        }, 10));
                    })
                    .catch(function (e) {});
              },
            },
          ]) && zc(t.prototype, n),
          r && zc(t, r),
          i
        );
      })(w);
      function Gc(e) {
        return (Gc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Jc(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Qc(e, t) {
        return (Qc =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function $c(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = el(e);
          if (t) {
            var o = el(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Kc(this, n);
        };
      }
      function Kc(e, t) {
        return !t || ("object" !== Gc(t) && "function" != typeof t) ? Zc(e) : t;
      }
      function Zc(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function el(e) {
        return (el = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function tl(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      Yc(Xc, "defaultProps", {
        routes: {},
        container: null,
        router: null,
        titleFrontSelector: ".parallax-title--front",
        titleBackSelector: ".parallax-title--back",
        scrollNumberFrontSelector: ".scroll-number--front",
        scrollNumberBackSelector: ".scroll-number--back",
        backgroundSelector: ".dynamic-background",
      });
      var nl = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && Qc(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = $c(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            tl(Zc((t = o.call(this, e))), "preloadRoute", function (e) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : function () {};
              return new Promise(function (r) {
                t.makeRequest(
                  e,
                  !1,
                  function (o) {
                    t.isDestroyed ||
                      (o &&
                        (a.trigger(
                          "router:route:preloaded",
                          e,
                          t.responseCache[e]
                        ),
                        n(e, t.responseCache[e])),
                      r());
                  },
                  !0
                );
              });
            }),
            tl(Zc(t), "onNavigateToURL", function (e) {
              t.makeRequest(e, !1, null);
            }),
            tl(Zc(t), "onClick", function (e) {
              if (!t.isKeyModified(e)) {
                for (
                  var n = e.target;
                  n && n !== document.body && "A" !== n.tagName.toUpperCase();

                )
                  n = n.parentElement;
                n &&
                  n !== document.body &&
                  !n.matches(t.clickExceptionsSelector) &&
                  (e.preventDefault(),
                  t.makeRequest(n.getAttribute("href"), !1, null));
              }
            }),
            tl(Zc(t), "onPopState", function (e) {
              e.state &&
                "Router" === e.state.type &&
                (e.preventDefault(), t.makeRequest(e.state.url, !0, null));
            }),
            tl(Zc(t), "updateDOM", function (e, n) {
              return t.props.onDOMParsed(e, n);
            }),
            tl(Zc(t), "destroy", function () {
              (t.isDestroyed = !0), t.unbindListeners();
            });
          var n = t.props.clickExceptions,
            r = window.location !== window.parent.location;
          return (
            "scrollRestoration" in window.history &&
              (window.history.scrollRestoration = "manual"),
            (t.responseCache = {}),
            (t.responseCache[window.location.pathname] =
              document.documentElement.innerHTML),
            (t.clickExceptionsSelector = n.join(",")),
            (t.isDestroyed = !1),
            (t.XHR = null),
            r ? Kc(t) : (t.bindListeners(), t)
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                document.body.addEventListener("click", this.onClick),
                  window.addEventListener("popstate", this.onPopState),
                  a.on("router:navigate", this.onNavigateToURL),
                  a.on("router:preload:route", this.preloadRoute);
              },
            },
            {
              key: "preloadRoutes",
              value: function (e, t) {
                var n = this;
                e.forEach(function (e) {
                  n.preloadRoute(e, t);
                });
              },
            },
            {
              key: "isKeyModified",
              value: function (e) {
                return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey;
              },
            },
            {
              key: "replaceHistoryStateWithScrollPosition",
              value: function () {
                var e = window.location.pathname + window.location.search,
                  t = { url: e, type: "Router" };
                window.history.replaceState(t, document.title, e);
              },
            },
            {
              key: "modifyPageAndHistory",
              value: function (e, t, n, r) {
                var o = this.props.onLoad;
                n ? n(!0) : (this.updateDOM(e, r), o());
              },
            },
            {
              key: "makeRequest",
              value: function (e, t, n, r) {
                var o = this,
                  i = this.props,
                  a = i.onNavigate,
                  s = i.onUnload,
                  u = r ? null : this.XHR;
                u && u.abort(), r || this.responseCache[e] || a(e, t);
                var c = e.split("?"),
                  l = c[0],
                  f = c[1] ? "?".concat(c[1]) : "";
                if (
                  l !== window.location.pathname ||
                  t ||
                  window.location.search !== f
                ) {
                  if (
                    (this.replaceHistoryStateWithScrollPosition(), !t && !r)
                  ) {
                    var d = { url: e, type: "Router" };
                    window.history.pushState(d, document.title, e);
                  }
                  this.responseCache[e]
                    ? this.modifyPageAndHistory(e, t, n, this.responseCache[e])
                    : ((u = new XMLHttpRequest()),
                      r || (this.xhr = u),
                      (u.onreadystatechange = function (r) {
                        if (r.target.readyState === XMLHttpRequest.DONE) {
                          if (200 !== r.target.status)
                            return n ? void n(!1) : void (window.location = e);
                          try {
                            (o.responseCache[e] = r.target.responseText),
                              s(),
                              o.modifyPageAndHistory(
                                e,
                                t,
                                n,
                                r.target.responseText
                              );
                          } catch (e) {
                            console.error(e);
                          }
                        }
                      }),
                      (u.ontimeout = function () {
                        n ? n(!1) : (window.location = e);
                      }),
                      (u.onerror = function () {
                        n ? n(!1) : (window.location = e);
                      }),
                      u.open("GET", e, !0),
                      (u.timeout = this.timeout),
                      u.send());
                } else n && n(!0);
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                this.XHR && this.XHR.abort(),
                  document.body.removeEventListener("click", this.onClick),
                  window.removeEventListener("popstate", this.onPopState);
              },
            },
          ]) && Jc(t.prototype, n),
          r && Jc(t, r),
          i
        );
      })(w);
      function rl(e) {
        return (rl =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ol(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function il(e, t) {
        return (il =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function al(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = cl(e);
          if (t) {
            var o = cl(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return sl(this, n);
        };
      }
      function sl(e, t) {
        return !t || ("object" !== rl(t) && "function" != typeof t) ? ul(e) : t;
      }
      function ul(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function cl(e) {
        return (cl = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ll(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      tl(nl, "defaultProps", {
        timeout: 5e3,
        onLoad: Ft,
        onUnload: Ft,
        onNavigate: Ft,
        onDOMParsed: Ft,
        clickExceptions: [
          "a:not([href])",
          '[href^="http"]',
          '[href^="#"]',
          '[href^="/#"]',
          '[target="_blank"]',
          '[href^="tel"]',
          '[href^="mailto"]',
          '[href^="javascript"]',
        ],
      });
      var fl = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && il(e, t);
        })(i, e);
        var t,
          n,
          r,
          o = al(i);
        function i(e) {
          var t;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            ll(ul((t = o.call(this))), "cachePage", function (e, n) {
              if (t.routes[e] && !t.routes[e].page) {
                var r = document.createElement("div");
                (r.innerHTML = n),
                  (t.routes[e].page =
                    r.querySelector("#page-content").innerHTML),
                  requestAnimationFrame(function () {
                    a.trigger("router:page:added", e, t.routes[e].page);
                  });
              }
            }),
            ll(ul(t), "onNavigate", function (e) {
              var n = t.routes[e];
              n
                ? ((document.title = n.pageTitle),
                  a.trigger("router:route:change"),
                  t.pageController.setPageRoute(e))
                : (window.location = e);
            }),
            ll(ul(t), "onDOMLoaded", function (e, n) {
              var r = t.routes[e];
              r
                ? (t.cachePage(e, n),
                  e === window.location.pathname &&
                    t.pageController.setPage(e, r.page))
                : (window.location = e);
            }),
            ll(ul(t), "onUserActivity", function () {
              (t.idle.time = 0),
                t.idle.isIdle &&
                  ((t.idle.isIdle = !1),
                  (document.body.dataset.isIdle = !1),
                  a.trigger("idle:state:change", !1));
            }),
            ll(ul(t), "onIdle", function () {
              (t.idle.time += 1),
                t.idle.time <= 4 ||
                  t.idle.isIdle ||
                  ((t.idle.isIdle = !0),
                  (document.body.dataset.isIdle = !0),
                  a.trigger("idle:state:change", !0));
            }),
            ll(ul(t), "destroy", function () {
              t.unbindListeners(), t.router.destroy();
            });
          var n =
              /Chrome/.test(navigator.userAgent) &&
              /Google Inc/.test(navigator.vendor),
            r = window.location !== window.parent.location;
          (document.body.dataset.cssFilters = n),
            (document.body.dataset.isTouch = J),
            (document.body.dataset.isEditing = r),
            (t.routes = window.ROUTES),
            (t.router = new nl({
              onDOMParsed: t.onDOMLoaded,
              onNavigate: t.onNavigate,
            })),
            (t.idle = { time: 0, interval: null, isIdle: !1 });
          var s = window.location.pathname;
          return (
            t.routes[s] && t.cachePage(s, t.router.responseCache[s]),
            (t.node = e),
            (t.pageController = new Xc({
              routes: t.routes,
              container: t.node.querySelector("#page-content"),
            })),
            t.bindListeners(),
            setTimeout(function () {
              t.router.preloadRoutes(
                Object.keys(t.routes)
                  .filter(function (e) {
                    return !~e.indexOf("#");
                  })
                  .slice(0, J ? 18 : 99)
              );
            }, 1e3),
            t
          );
        }
        return (
          (t = i),
          (n = [
            {
              key: "bindListeners",
              value: function () {
                a.on("router:route:preloaded", this.cachePage),
                  a.on("router:route:change", this.onUserActivity),
                  a.on("modal:state:change", this.onUserActivity),
                  document.addEventListener("scroll", this.onUserActivity, {
                    passive: !0,
                  }),
                  document.addEventListener(K.move, this.onUserActivity, {
                    passive: !0,
                  }),
                  clearTimeout(this.idle.interval),
                  (this.idle.interval = setInterval(this.onIdle, 1e3));
              },
            },
            {
              key: "unbindListeners",
              value: function () {
                a.off("router:route:change", this.onUserActivity),
                  a.off("modal:state:change", this.onUserActivity),
                  document.removeEventListener("scroll", this.onUserActivity),
                  document.removeEventListener(K.move, this.onUserActivity),
                  clearTimeout(this.idle.interval);
              },
            },
          ]) && ol(t.prototype, n),
          r && ol(t, r),
          i
        );
      })(w);
      ll(fl, "defaultProps", {});
      m.register("PortfolioList", function (e) {
        return new ge(e);
      }),
        m.register("PortfolioDetail", function (e) {
          return new Pe(e);
        }),
        m.register("PortfolioIntro", function (e) {
          return new Fe(e);
        }),
        m.register("PortfolioPagination", function (e) {
          return new Ge(e);
        }),
        m.register("GalleryParallax", function (e) {
          return new it(e);
        }),
        m.register("Intro", function (e) {
          return new gt(e);
        }),
        m.register("RouteTitleInfo", function (e) {
          return new Tt(e);
        }),
        m.register("HomeRedirect", function (e) {
          return new Dt(e);
        }),
        m.register("MarcusEriksson", function (e) {
          return new fl(e);
        }),
        m.initialize();
    },
  ]);
});