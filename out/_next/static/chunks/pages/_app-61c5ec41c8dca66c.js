;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    949: function (e, t, r) {
      'use strict'
      r.d(t, {
        kc: function () {
          return b
        },
        SG: function () {
          return y
        },
        If: function () {
          return v
        },
        ff: function () {
          return x
        },
      })
      var n = r(5393),
        o = r(9703),
        i = r(7294)
      var a = 'chakra-ui-light',
        s = 'chakra-ui-dark',
        u = { classList: { add: o.ZT, remove: o.ZT } }
      function l(e, t) {
        var r = (function (e) {
          return o.jU ? e.body : u
        })(t)
        r.classList.add(e ? s : a), r.classList.remove(e ? a : s)
      }
      var c = '(prefers-color-scheme: dark)'
      function f(e) {
        var t
        return (
          null !=
          (t = (function (e) {
            var t = null == window.matchMedia ? void 0 : window.matchMedia(e)
            if (t) return !!t.media === t.matches
          })(c))
            ? t
            : 'dark' === e
        )
          ? 'dark'
          : 'light'
      }
      var d = function () {
          return (
            document.documentElement.style.getPropertyValue(
              '--chakra-ui-color-mode'
            ) || document.documentElement.dataset.theme
          )
        },
        p = function (e) {
          o.jU &&
            (document.documentElement.style.setProperty(
              '--chakra-ui-color-mode',
              e
            ),
            document.documentElement.setAttribute('data-theme', e))
        },
        h = function () {
          return 'undefined' !== typeof Storage
        },
        g = 'chakra-ui-color-mode',
        m = {
          get: function (e) {
            if (!h()) return e
            try {
              var t = localStorage.getItem(g)
              return null != t ? t : e
            } catch (r) {
              return o.Ts && console.log(r), e
            }
          },
          set: function (e) {
            if (h())
              try {
                localStorage.setItem(g, e)
              } catch (t) {
                o.Ts && console.log(t)
              }
          },
          type: 'localStorage',
        },
        b = i.createContext({})
      o.Ts && (b.displayName = 'ColorModeContext')
      var v = function () {
        var e = i.useContext(b)
        if (void 0 === e)
          throw new Error(
            'useColorMode must be used within a ColorModeProvider'
          )
        return e
      }
      function y(e) {
        var t = e.value,
          r = e.children,
          a = e.options,
          s = a.useSystemColorMode,
          u = a.initialColorMode,
          h = e.colorModeManager,
          g = void 0 === h ? m : h,
          v = 'dark' === u ? 'dark' : 'light',
          y = i.useState('cookie' === g.type ? g.get(v) : v),
          x = y[0],
          w = y[1],
          k = (0, n.O)().document
        i.useEffect(
          function () {
            if (o.jU && 'localStorage' === g.type) {
              var e = f(v)
              if (s) return w(e)
              var t = d(),
                r = g.get()
              return w(t ? t : r || ('system' === u ? e : v))
            }
          },
          [g, s, v, u]
        ),
          i.useEffect(
            function () {
              var e = 'dark' === x
              l(e, k), p(e ? 'dark' : 'light')
            },
            [x, k]
          )
        var S = i.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = !1), t)) {
                if (g.get() && !s) return
              } else g.set(e)
              w(e)
            },
            [g, s]
          ),
          O = i.useCallback(
            function () {
              S('light' === x ? 'dark' : 'light')
            },
            [x, S]
          )
        i.useEffect(
          function () {
            var e,
              t = s || 'system' === u
            return (
              t &&
                (e = (function (e) {
                  if (!('matchMedia' in window)) return o.ZT
                  var t = window.matchMedia(c),
                    r = function () {
                      e(t.matches ? 'dark' : 'light', !0)
                    }
                  return (
                    t.addEventListener('change', r),
                    function () {
                      t.removeEventListener('change', r)
                    }
                  )
                })(S)),
              function () {
                e && t && e()
              }
            )
          },
          [S, s, u]
        )
        var C = i.useMemo(
          function () {
            return {
              colorMode: null != t ? t : x,
              toggleColorMode: t ? o.ZT : O,
              setColorMode: t ? o.ZT : S,
            }
          },
          [x, S, O, t]
        )
        return i.createElement(b.Provider, { value: C }, r)
      }
      o.Ts && (y.displayName = 'ColorModeProvider')
      o.Ts
      function x(e, t) {
        return 'dark' === v().colorMode ? t : e
      }
      o.Ts
    },
    7375: function (e, t, r) {
      'use strict'
      r.d(t, {
        vc: function () {
          return f
        },
        kt: function () {
          return a
        },
        Tx: function () {
          return s
        },
        qY: function () {
          return h
        },
        Ck: function () {
          return m
        },
        NW: function () {
          return v
        },
        Me: function () {
          return d
        },
        ZS: function () {
          return p
        },
        II: function () {
          return y
        },
        qq: function () {
          return w
        },
        O3: function () {
          return k
        },
        bx: function () {
          return O
        },
        KS: function () {
          return C
        },
        zq: function () {
          return b
        },
        rf: function () {
          return g
        },
      })
      var n = r(7294),
        o = r(1561),
        i = (r(640), r(9703))
      function a(e) {
        void 0 === e && (e = !1)
        var t = (0, n.useState)(e),
          r = t[0],
          o = t[1]
        return [
          r,
          {
            on: (0, n.useCallback)(function () {
              o(!0)
            }, []),
            off: (0, n.useCallback)(function () {
              o(!1)
            }, []),
            toggle: (0, n.useCallback)(function () {
              o(function (e) {
                return !e
              })
            }, []),
          },
        ]
      }
      function s(e) {
        var t = e.value,
          r = e.defaultValue,
          a = e.onChange,
          s = e.shouldUpdate,
          u =
            void 0 === s
              ? function (e, t) {
                  return e !== t
                }
              : s,
          l = (0, o.u)(a),
          c = (0, o.u)(u),
          f = n.useState(r),
          d = f[0],
          p = f[1],
          h = void 0 !== t,
          g = h ? t : d,
          m = n.useCallback(
            function (e) {
              var t = (0, i.Pu)(e, g)
              c(g, t) && (h || p(t), l(t))
            },
            [h, l, g, c]
          )
        return [g, m]
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          u.apply(this, arguments)
        )
      }
      var l = { current: 1 },
        c = n.createContext(l),
        f = n.memo(function (e) {
          var t = e.children
          return n.createElement(c.Provider, { value: { current: 1 } }, t)
        })
      function d(e, t) {
        var r = n.useContext(c),
          o = n.useState(r.current),
          i = o[0],
          a = o[1]
        return (
          n.useEffect(
            function () {
              a(
                (function (e) {
                  return e.current++
                })(r)
              )
            },
            [r]
          ),
          n.useMemo(
            function () {
              return e || [t, i].filter(Boolean).join('-')
            },
            [e, t, i]
          )
        )
      }
      function p(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o]
        var i = d(e)
        return n.useMemo(
          function () {
            return r.map(function (e) {
              return e + '-' + i
            })
          },
          [i, r]
        )
      }
      function h(e) {
        void 0 === e && (e = {})
        var t = e,
          r = t.onClose,
          a = t.onOpen,
          s = t.isOpen,
          l = t.id,
          c = (0, o.u)(a),
          f = (0, o.u)(r),
          p = n.useState(e.defaultIsOpen || !1),
          h = p[0],
          g = p[1],
          m = (function (e, t) {
            var r = void 0 !== e
            return [r, r && 'undefined' !== typeof e ? e : t]
          })(s, h),
          b = m[0],
          v = m[1],
          y = d(l, 'disclosure'),
          x = n.useCallback(
            function () {
              b || g(!1), null == f || f()
            },
            [b, f]
          ),
          w = n.useCallback(
            function () {
              b || g(!0), null == c || c()
            },
            [b, c]
          ),
          k = n.useCallback(
            function () {
              ;(v ? x : w)()
            },
            [v, w, x]
          )
        return {
          isOpen: !!v,
          onOpen: w,
          onClose: x,
          onToggle: k,
          isControlled: b,
          getButtonProps: function (e) {
            return (
              void 0 === e && (e = {}),
              u({}, e, {
                'aria-expanded': 'true',
                'aria-controls': y,
                onClick: (0, i.v0)(e.onClick, k),
              })
            )
          },
          getDisclosureProps: function (e) {
            return void 0 === e && (e = {}), u({}, e, { hidden: !v, id: y })
          },
        }
      }
      var g = function (e, t) {
        var r = n.useRef(!1)
        return (
          n.useEffect(function () {
            if (r.current) return e()
            r.current = !0
          }, t),
          r.current
        )
      }
      function m(e, t) {
        var r = t.shouldFocus,
          n = t.visible,
          o = t.focusRef,
          a = r && !n
        g(
          function () {
            if (
              a &&
              !(function (e) {
                var t = e.current
                if (!t) return !1
                var r = (0, i.vY)(t)
                return !!r && !(0, i.r3)(t, r) && !!(0, i.Wq)(r)
              })(e)
            ) {
              var t = (null == o ? void 0 : o.current) || e.current
              t && (0, i.T_)(t, { nextTick: !0 })
            }
          },
          [a, e, o]
        )
      }
      function b(e, t) {
        return (
          void 0 === t && (t = []),
          n.useEffect(function () {
            return function () {
              return e()
            }
          }, t)
        )
      }
      function v() {
        var e = n.useRef(!1),
          t = n.useState(0),
          r = t[0],
          o = t[1]
        return (
          b(function () {
            e.current = !0
          }),
          n.useCallback(
            function () {
              e.current || o(r + 1)
            },
            [r]
          )
        )
      }
      function y(e) {
        var t = n.useRef(null)
        return (t.current = e), t
      }
      function x(e, t) {
        if (null != e)
          if ('function' !== typeof e)
            try {
              e.current = t
            } catch (r) {
              throw new Error(
                "Cannot assign value '" + t + "' to ref '" + e + "'"
              )
            }
          else e(t)
      }
      function w() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return n.useMemo(function () {
          return t.every(function (e) {
            return null == e
          })
            ? null
            : function (e) {
                t.forEach(function (t) {
                  t && x(t, e)
                })
              }
        }, t)
      }
      function k(e) {
        var t = e.ref,
          r = e.handler,
          a = e.enabled,
          s = void 0 === a || a,
          u = (0, o.u)(r),
          l = (0, n.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1,
          }).current
        ;(0, n.useEffect)(
          function () {
            if (s) {
              var e = function (e) {
                  S(e, t) && (l.isPointerDown = !0)
                },
                n = function (e) {
                  l.ignoreEmulatedMouseEvents
                    ? (l.ignoreEmulatedMouseEvents = !1)
                    : l.isPointerDown &&
                      r &&
                      S(e, t) &&
                      ((l.isPointerDown = !1), u(e))
                },
                o = function (e) {
                  ;(l.ignoreEmulatedMouseEvents = !0),
                    r &&
                      l.isPointerDown &&
                      S(e, t) &&
                      ((l.isPointerDown = !1), u(e))
                },
                a = (0, i.lZ)(t.current)
              return (
                a.addEventListener('mousedown', e, !0),
                a.addEventListener('mouseup', n, !0),
                a.addEventListener('touchstart', e, !0),
                a.addEventListener('touchend', o, !0),
                function () {
                  a.removeEventListener('mousedown', e, !0),
                    a.removeEventListener('mouseup', n, !0),
                    a.removeEventListener('touchstart', e, !0),
                    a.removeEventListener('touchend', o, !0)
                }
              )
            }
          },
          [r, t, u, l, s]
        )
      }
      function S(e, t) {
        var r,
          n = e.target
        if (e.button > 0) return !1
        if (n && !(0, i.lZ)(n).body.contains(n)) return !1
        return !(null != (r = t.current) && r.contains(n))
      }
      function O(e) {
        void 0 === e && (e = {})
        var t = e,
          r = t.timeout,
          o = void 0 === r ? 300 : r,
          i = t.preventDefault,
          a =
            void 0 === i
              ? function () {
                  return !0
                }
              : i,
          s = n.useState([]),
          u = s[0],
          l = s[1],
          c = n.useRef(),
          f = function () {
            c.current && (clearTimeout(c.current), (c.current = null))
          }
        return (
          n.useEffect(function () {
            return f
          }, []),
          function (e) {
            return function (t) {
              if ('Backspace' === t.key) {
                var r = [].concat(u)
                return r.pop(), void l(r)
              }
              if (
                (function (e) {
                  var t = e.key
                  return (
                    1 === t.length || (t.length > 1 && /[^a-zA-Z0-9]/.test(t))
                  )
                })(t)
              ) {
                var n = u.concat(t.key)
                a(t) && (t.preventDefault(), t.stopPropagation()),
                  l(n),
                  e(n.join('')),
                  f(),
                  (c.current = setTimeout(function () {
                    l([]), (c.current = null)
                  }, o))
              }
            }
          }
        )
      }
      function C(e, t) {
        var r = (0, o.u)(e)
        n.useEffect(
          function () {
            if (null != t) {
              var e
              return (
                (e = window.setTimeout(function () {
                  r()
                }, t)),
                function () {
                  e && window.clearTimeout(e)
                }
              )
            }
          },
          [t, r]
        )
      }
    },
    1561: function (e, t, r) {
      'use strict'
      r.d(t, {
        a: function () {
          return i
        },
        b: function () {
          return s
        },
        c: function () {
          return u
        },
        u: function () {
          return a
        },
      })
      var n = r(9703),
        o = r(7294),
        i = n.jU ? o.useLayoutEffect : o.useEffect
      function a(e, t) {
        void 0 === t && (t = [])
        var r = o.useRef(e)
        return (
          i(function () {
            r.current = e
          }),
          o.useCallback(function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n]
            return null == r.current ? void 0 : r.current.apply(r, t)
          }, t)
        )
      }
      function s(e, t, r, i) {
        var s = a(t)
        return (
          o.useEffect(
            function () {
              var t,
                o = null != (t = (0, n.Pu)(r)) ? t : document
              return (
                o.addEventListener(e, s, i),
                function () {
                  o.removeEventListener(e, s, i)
                }
              )
            },
            [e, r, i, s]
          ),
          function () {
            var t
            ;(null != (t = (0, n.Pu)(r)) ? t : document).removeEventListener(
              e,
              s,
              i
            )
          }
        )
      }
      function u(e) {
        var t = e.isOpen,
          r = e.ref,
          i = (0, o.useState)(t),
          a = i[0],
          u = i[1],
          l = (0, o.useState)(!1),
          c = l[0],
          f = l[1]
        return (
          (0, o.useEffect)(
            function () {
              c || (u(t), f(!0))
            },
            [t, c, a]
          ),
          s(
            'animationend',
            function () {
              u(t)
            },
            function () {
              return r.current
            }
          ),
          {
            present: !(!t && !a),
            onComplete: function () {
              var e,
                t = new ((0, n.kR)(r.current).CustomEvent)('animationend', {
                  bubbles: !0,
                })
              null == (e = r.current) || e.dispatchEvent(t)
            },
          }
        )
      }
    },
    6871: function (e, t, r) {
      'use strict'
      r.d(t, {
        h_: function () {
          return k
        },
        hE: function () {
          return d
        },
      })
      var n = r(9703),
        o = r(6450),
        i = r(7294),
        a = r(7375),
        s = r(1561),
        u = r(3935),
        l = (0, o.kr)({ strict: !1, name: 'PortalManagerContext' }),
        c = l[0],
        f = l[1]
      function d(e) {
        var t = e.children,
          r = e.zIndex
        return i.createElement(c, { value: { zIndex: r } }, t)
      }
      function p() {
        return (
          (p =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          p.apply(this, arguments)
        )
      }
      n.Ts && (d.displayName = 'PortalManager')
      var h = ['containerRef'],
        g = (0, o.kr)({ strict: !1, name: 'PortalContext' }),
        m = g[0],
        b = g[1],
        v = 'chakra-portal',
        y = function (e) {
          return i.createElement(
            'div',
            {
              className: 'chakra-portal-zIndex',
              style: {
                position: 'absolute',
                zIndex: e.zIndex,
                top: 0,
                left: 0,
                right: 0,
              },
            },
            e.children
          )
        },
        x = function (e) {
          var t = e.appendToParentPortal,
            r = e.children,
            n = i.useRef(null),
            o = i.useRef(null),
            l = (0, a.NW)(),
            c = b(),
            d = f()
          ;(0, s.a)(function () {
            if (n.current) {
              var e = n.current.ownerDocument,
                r = t && null != c ? c : e.body
              if (r) {
                ;(o.current = e.createElement('div')),
                  (o.current.className = v),
                  r.appendChild(o.current),
                  l()
                var i = o.current
                return function () {
                  r.contains(i) && r.removeChild(i)
                }
              }
            }
          }, [])
          var p =
            null != d && d.zIndex
              ? i.createElement(y, { zIndex: null == d ? void 0 : d.zIndex }, r)
              : r
          return o.current
            ? (0, u.createPortal)(
                i.createElement(m, { value: o.current }, p),
                o.current
              )
            : i.createElement('span', { ref: n })
        },
        w = function (e) {
          var t = e.children,
            r = e.containerRef,
            o = e.appendToParentPortal,
            l = r.current,
            c = null != l ? l : n.jU ? document.body : void 0,
            f = i.useMemo(
              function () {
                var e =
                  null == l ? void 0 : l.ownerDocument.createElement('div')
                return e && (e.className = v), e
              },
              [l]
            ),
            d = (0, a.NW)()
          return (
            (0, s.a)(function () {
              d()
            }, []),
            (0, s.a)(
              function () {
                if (f && c)
                  return (
                    c.appendChild(f),
                    function () {
                      c.removeChild(f)
                    }
                  )
              },
              [f, c]
            ),
            c && f
              ? (0, u.createPortal)(
                  i.createElement(m, { value: o ? f : null }, t),
                  f
                )
              : null
          )
        }
      function k(e) {
        var t = e.containerRef,
          r = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, h)
        return t
          ? i.createElement(w, p({ containerRef: t }, r))
          : i.createElement(x, r)
      }
      ;(k.defaultProps = { appendToParentPortal: !0 }),
        (k.className = v),
        (k.selector = '.chakra-portal'),
        n.Ts && (k.displayName = 'Portal')
    },
    5393: function (e, t, r) {
      'use strict'
      r.d(t, {
        u: function () {
          return f
        },
        O: function () {
          return c
        },
      })
      var n = r(9703),
        o = r(7294),
        i = {
          body: { classList: { add: function () {}, remove: function () {} } },
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: { blur: function () {}, nodeName: '' },
          querySelector: function () {
            return null
          },
          querySelectorAll: function () {
            return []
          },
          getElementById: function () {
            return null
          },
          createEvent: function () {
            return { initEvent: function () {} }
          },
          createElement: function () {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () {},
              getElementsByTagName: function () {
                return []
              },
            }
          },
        },
        a = function () {},
        s = {
          window: {
            document: i,
            navigator: { userAgent: '' },
            CustomEvent: function () {
              return this
            },
            addEventListener: a,
            removeEventListener: a,
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return ''
                },
              }
            },
            matchMedia: function () {
              return { matches: !1, addListener: a, removeListener: a }
            },
            requestAnimationFrame: function (e) {
              return 'undefined' === typeof setTimeout
                ? (e(), null)
                : setTimeout(e, 0)
            },
            cancelAnimationFrame: function (e) {
              'undefined' !== typeof setTimeout && clearTimeout(e)
            },
            setTimeout: function () {
              return 0
            },
            clearTimeout: a,
            setInterval: function () {
              return 0
            },
            clearInterval: a,
          },
          document: i,
        },
        u = n.jU ? { window: window, document: document } : s,
        l = (0, o.createContext)(u)
      function c() {
        return (0, o.useContext)(l)
      }
      function f(e) {
        var t = e.children,
          r = e.environment,
          n = (0, o.useState)(null),
          i = n[0],
          a = n[1],
          s = (0, o.useMemo)(
            function () {
              var e,
                t = null == i ? void 0 : i.ownerDocument,
                n = null == i ? void 0 : i.ownerDocument.defaultView
              return null !=
                (e = null != r ? r : t ? { document: t, window: n } : void 0)
                ? e
                : u
            },
            [i, r]
          ),
          c = !i && !r
        return o.createElement(
          l.Provider,
          { value: s },
          t,
          c &&
            o.createElement('span', {
              ref: function (e) {
                e && a(e)
              },
            })
        )
      }
      n.Ts && (l.displayName = 'EnvironmentContext'),
        n.Ts && (f.displayName = 'EnvironmentProvider')
    },
    6450: function (e, t, r) {
      'use strict'
      r.d(t, {
        kr: function () {
          return s
        },
        WR: function () {
          return u
        },
        lq: function () {
          return a
        },
      })
      var n = r(9703),
        o = r(7294)
      function i(e, t) {
        if (null != e)
          if ((0, n.mf)(e)) e(t)
          else
            try {
              e.current = t
            } catch (r) {
              throw new Error(
                "Cannot assign value '" + t + "' to ref '" + e + "'"
              )
            }
      }
      function a() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return function (e) {
          t.forEach(function (t) {
            return i(t, e)
          })
        }
      }
      function s(e) {
        void 0 === e && (e = {})
        var t = e,
          r = t.strict,
          n = void 0 === r || r,
          i = t.errorMessage,
          a =
            void 0 === i
              ? 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider'
              : i,
          s = t.name,
          u = o.createContext(void 0)
        return (
          (u.displayName = s),
          [
            u.Provider,
            function e() {
              var t = o.useContext(u)
              if (!t && n) {
                var r = new Error(a)
                throw (
                  ((r.name = 'ContextError'),
                  null == Error.captureStackTrace ||
                    Error.captureStackTrace(r, e),
                  r)
                )
              }
              return t
            },
            u,
          ]
        )
      }
      function u(e) {
        return o.Children.toArray(e).filter(function (e) {
          return o.isValidElement(e)
        })
      }
    },
    4244: function (e, t, r) {
      'use strict'
      r.d(t, {
        iv: function () {
          return Oe
        },
        ZR: function () {
          return xe
        },
        oE: function () {
          return be
        },
        cC: function () {
          return ve
        },
        c0: function () {
          return We
        },
        fr: function () {
          return s
        },
      })
      var n = r(9703),
        o = r(8554),
        i = r.n(o)
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          a.apply(this, arguments)
        )
      }
      var s = function (e, t) {
        return function (r) {
          var o = String(t),
            i = e ? e + '.' + o : o
          return (0, n.Kn)(r.__cssMap) && i in r.__cssMap
            ? r.__cssMap[i].varRef
            : t
        }
      }
      function u(e) {
        var t = e.scale,
          r = e.transform,
          n = e.compose
        return function (e, o) {
          var i,
            a = s(t, e)(o),
            u = null != (i = null == r ? void 0 : r(a, o)) ? i : a
          return n && (u = n(u, o)), u
        }
      }
      function l(e, t) {
        return function (r) {
          var n = { property: r, scale: e }
          return (n.transform = u({ scale: e, transform: t })), n
        }
      }
      var c,
        f,
        d = function (e) {
          var t = e.rtl,
            r = e.ltr
          return function (e) {
            return 'rtl' === e.direction ? t : r
          }
        }
      var p = [
        'rotate(var(--chakra-rotate, 0))',
        'scaleX(var(--chakra-scale-x, 1))',
        'scaleY(var(--chakra-scale-y, 1))',
        'skewX(var(--chakra-skew-x, 0))',
        'skewY(var(--chakra-skew-y, 0))',
      ]
      var h = {
          '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
          filter: [
            'var(--chakra-blur)',
            'var(--chakra-brightness)',
            'var(--chakra-contrast)',
            'var(--chakra-grayscale)',
            'var(--chakra-hue-rotate)',
            'var(--chakra-invert)',
            'var(--chakra-saturate)',
            'var(--chakra-sepia)',
            'var(--chakra-drop-shadow)',
          ].join(' '),
        },
        g = {
          backdropFilter: [
            'var(--chakra-backdrop-blur)',
            'var(--chakra-backdrop-brightness)',
            'var(--chakra-backdrop-contrast)',
            'var(--chakra-backdrop-grayscale)',
            'var(--chakra-backdrop-hue-rotate)',
            'var(--chakra-backdrop-invert)',
            'var(--chakra-backdrop-opacity)',
            'var(--chakra-backdrop-saturate)',
            'var(--chakra-backdrop-sepia)',
          ].join(' '),
          '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
        }
      var m = {
          'row-reverse': {
            space: '--chakra-space-x-reverse',
            divide: '--chakra-divide-x-reverse',
          },
          'column-reverse': {
            space: '--chakra-space-y-reverse',
            divide: '--chakra-divide-y-reverse',
          },
        },
        b = '& > :not(style) ~ :not(style)',
        v =
          (((c = {})[b] = {
            marginInlineStart:
              'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
            marginInlineEnd:
              'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
          }),
          c),
        y =
          (((f = {})[b] = {
            marginTop:
              'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
            marginBottom:
              'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
          }),
          f)
      function x(e, t) {
        return (
          (x =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          x(e, t)
        )
      }
      function w(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && x(e, t)
      }
      function k() {
        k = function (e, t) {
          return new r(e, void 0, t)
        }
        var e = RegExp.prototype,
          t = new WeakMap()
        function r(e, n, o) {
          var i = new RegExp(e, n)
          return t.set(i, o || t.get(e)), x(i, r.prototype)
        }
        function n(e, r) {
          var n = t.get(r)
          return Object.keys(n).reduce(function (t, r) {
            return (t[r] = e[n[r]]), t
          }, Object.create(null))
        }
        return (
          w(r, RegExp),
          (r.prototype.exec = function (t) {
            var r = e.exec.call(this, t)
            return r && (r.groups = n(r, this)), r
          }),
          (r.prototype[Symbol.replace] = function (r, o) {
            if ('string' === typeof o) {
              var i = t.get(this)
              return e[Symbol.replace].call(
                this,
                r,
                o.replace(/\$<([^>]+)>/g, function (e, t) {
                  return '$' + i[t]
                })
              )
            }
            if ('function' === typeof o) {
              var a = this
              return e[Symbol.replace].call(this, r, function () {
                var e = arguments
                return (
                  'object' !== typeof e[e.length - 1] &&
                    (e = [].slice.call(e)).push(n(e, a)),
                  o.apply(this, e)
                )
              })
            }
            return e[Symbol.replace].call(this, r, o)
          }),
          k.apply(this, arguments)
        )
      }
      var S = {
          'to-t': 'to top',
          'to-tr': 'to top right',
          'to-r': 'to right',
          'to-br': 'to bottom right',
          'to-b': 'to bottom',
          'to-bl': 'to bottom left',
          'to-l': 'to left',
          'to-tl': 'to top left',
        },
        O = new Set(Object.values(S)),
        C = new Set([
          'none',
          '-moz-initial',
          'inherit',
          'initial',
          'revert',
          'unset',
        ]),
        E = function (e) {
          return e.trim()
        }
      var R = function (e) {
          return (0, n.HD)(e) && e.includes('(') && e.includes(')')
        },
        _ = function (e) {
          return function (t) {
            return e + '(' + t + ')'
          }
        },
        A = {
          filter: function (e) {
            return 'auto' !== e ? e : h
          },
          backdropFilter: function (e) {
            return 'auto' !== e ? e : g
          },
          ring: function (e) {
            return (function (e) {
              return {
                '--chakra-ring-offset-shadow':
                  'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
                '--chakra-ring-shadow':
                  'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
                '--chakra-ring-width': e,
                boxShadow: [
                  'var(--chakra-ring-offset-shadow)',
                  'var(--chakra-ring-shadow)',
                  'var(--chakra-shadow, 0 0 #0000)',
                ].join(', '),
              }
            })(A.px(e))
          },
          bgClip: function (e) {
            return 'text' === e
              ? { color: 'transparent', backgroundClip: 'text' }
              : { backgroundClip: e }
          },
          transform: function (e) {
            return 'auto' === e
              ? [
                  'translateX(var(--chakra-translate-x, 0))',
                  'translateY(var(--chakra-translate-y, 0))',
                ]
                  .concat(p)
                  .join(' ')
              : 'auto-gpu' === e
              ? [
                  'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
                ]
                  .concat(p)
                  .join(' ')
              : e
          },
          px: function (e) {
            if (null == e) return e
            var t = (function (e) {
              var t = parseFloat(e.toString()),
                r = e.toString().replace(String(t), '')
              return { unitless: !r, value: t, unit: r }
            })(e)
            return t.unitless || (0, n.hj)(e) ? e + 'px' : e
          },
          fraction: function (e) {
            return !(0, n.hj)(e) || e > 1 ? e : 100 * e + '%'
          },
          float: function (e, t) {
            return 'rtl' === t.direction
              ? { left: 'right', right: 'left' }[e]
              : e
          },
          degree: function (e) {
            if ((0, n.FS)(e) || null == e) return e
            var t = (0, n.HD)(e) && !e.endsWith('deg')
            return (0, n.hj)(e) || t ? e + 'deg' : e
          },
          gradient: function (e, t) {
            return (function (e, t) {
              var r, n
              if (null == e || C.has(e)) return e
              var o =
                  null !=
                  (r =
                    null ==
                    (n = k(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
                      type: 1,
                      values: 2,
                    }).exec(e))
                      ? void 0
                      : n.groups)
                    ? r
                    : {},
                i = o.type,
                a = o.values
              if (!i || !a) return e
              var s = i.includes('-gradient') ? i : i + '-gradient',
                u = a.split(',').map(E).filter(Boolean),
                l = u[0],
                c = u.slice(1)
              if (0 === (null == c ? void 0 : c.length)) return e
              var f = l in S ? S[l] : l
              c.unshift(f)
              var d = c.map(function (e) {
                if (O.has(e)) return e
                var r = e.indexOf(' '),
                  n = -1 !== r ? [e.substr(0, r), e.substr(r + 1)] : [e],
                  o = n[0],
                  i = n[1],
                  a = R(i) ? i : i && i.split(' '),
                  s = 'colors.' + o,
                  u = s in t.__cssMap ? t.__cssMap[s].varRef : o
                return a ? [u].concat(Array.isArray(a) ? a : [a]).join(' ') : u
              })
              return s + '(' + d.join(', ') + ')'
            })(e, null != t ? t : {})
          },
          blur: _('blur'),
          opacity: _('opacity'),
          brightness: _('brightness'),
          contrast: _('contrast'),
          dropShadow: _('drop-shadow'),
          grayscale: _('grayscale'),
          hueRotate: _('hue-rotate'),
          invert: _('invert'),
          saturate: _('saturate'),
          sepia: _('sepia'),
          bgImage: function (e) {
            return null == e || R(e) || C.has(e) ? e : 'url(' + e + ')'
          },
          outline: function (e) {
            var t = '0' === String(e) || 'none' === String(e)
            return null !== e && t
              ? { outline: '2px solid transparent', outlineOffset: '2px' }
              : { outline: e }
          },
          flexDirection: function (e) {
            var t,
              r = null != (t = m[e]) ? t : {},
              n = r.space,
              o = r.divide,
              i = { flexDirection: e }
            return n && (i[n] = 1), o && (i[o] = 1), i
          },
        },
        P = {
          borderWidths: l('borderWidths'),
          borderStyles: l('borderStyles'),
          colors: l('colors'),
          borders: l('borders'),
          radii: l('radii', A.px),
          space: l('space', A.px),
          spaceT: l('space', A.px),
          degreeT: function (e) {
            return { property: e, transform: A.degree }
          },
          prop: function (e, t, r) {
            return a(
              { property: e, scale: t },
              t && { transform: u({ scale: t, transform: r }) }
            )
          },
          propT: function (e, t) {
            return { property: e, transform: t }
          },
          sizes: l('sizes', A.px),
          sizesT: l('sizes', A.fraction),
          shadows: l('shadows'),
          logical: function (e) {
            var t = e.property,
              r = e.scale,
              n = e.transform
            return {
              scale: r,
              property: d(t),
              transform: r ? u({ scale: r, compose: n }) : n,
            }
          },
          blur: l('blur', A.blur),
        },
        j = {
          background: P.colors('background'),
          backgroundColor: P.colors('backgroundColor'),
          backgroundImage: P.propT('backgroundImage', A.bgImage),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: { transform: A.bgClip },
          bgSize: P.prop('backgroundSize'),
          bgPosition: P.prop('backgroundPosition'),
          bg: P.colors('background'),
          bgColor: P.colors('backgroundColor'),
          bgPos: P.prop('backgroundPosition'),
          bgRepeat: P.prop('backgroundRepeat'),
          bgAttachment: P.prop('backgroundAttachment'),
          bgGradient: P.propT('backgroundImage', A.gradient),
          bgClip: { transform: A.bgClip },
        }
      Object.assign(j, { bgImage: j.backgroundImage, bgImg: j.backgroundImage })
      var T = {
        border: P.borders('border'),
        borderWidth: P.borderWidths('borderWidth'),
        borderStyle: P.borderStyles('borderStyle'),
        borderColor: P.colors('borderColor'),
        borderRadius: P.radii('borderRadius'),
        borderTop: P.borders('borderTop'),
        borderBlockStart: P.borders('borderBlockStart'),
        borderTopLeftRadius: P.radii('borderTopLeftRadius'),
        borderStartStartRadius: P.logical({
          scale: 'radii',
          property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
        }),
        borderEndStartRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: 'borderBottomLeftRadius',
            rtl: 'borderBottomRightRadius',
          },
        }),
        borderTopRightRadius: P.radii('borderTopRightRadius'),
        borderStartEndRadius: P.logical({
          scale: 'radii',
          property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
        }),
        borderEndEndRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: 'borderBottomRightRadius',
            rtl: 'borderBottomLeftRadius',
          },
        }),
        borderRight: P.borders('borderRight'),
        borderInlineEnd: P.borders('borderInlineEnd'),
        borderBottom: P.borders('borderBottom'),
        borderBlockEnd: P.borders('borderBlockEnd'),
        borderBottomLeftRadius: P.radii('borderBottomLeftRadius'),
        borderBottomRightRadius: P.radii('borderBottomRightRadius'),
        borderLeft: P.borders('borderLeft'),
        borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
        borderInlineStartRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
            rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
          },
        }),
        borderInlineEndRadius: P.logical({
          scale: 'radii',
          property: {
            ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
            rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
          },
        }),
        borderX: P.borders(['borderLeft', 'borderRight']),
        borderInline: P.borders('borderInline'),
        borderY: P.borders(['borderTop', 'borderBottom']),
        borderBlock: P.borders('borderBlock'),
        borderTopWidth: P.borderWidths('borderTopWidth'),
        borderBlockStartWidth: P.borderWidths('borderBlockStartWidth'),
        borderTopColor: P.colors('borderTopColor'),
        borderBlockStartColor: P.colors('borderBlockStartColor'),
        borderTopStyle: P.borderStyles('borderTopStyle'),
        borderBlockStartStyle: P.borderStyles('borderBlockStartStyle'),
        borderBottomWidth: P.borderWidths('borderBottomWidth'),
        borderBlockEndWidth: P.borderWidths('borderBlockEndWidth'),
        borderBottomColor: P.colors('borderBottomColor'),
        borderBlockEndColor: P.colors('borderBlockEndColor'),
        borderBottomStyle: P.borderStyles('borderBottomStyle'),
        borderBlockEndStyle: P.borderStyles('borderBlockEndStyle'),
        borderLeftWidth: P.borderWidths('borderLeftWidth'),
        borderInlineStartWidth: P.borderWidths('borderInlineStartWidth'),
        borderLeftColor: P.colors('borderLeftColor'),
        borderInlineStartColor: P.colors('borderInlineStartColor'),
        borderLeftStyle: P.borderStyles('borderLeftStyle'),
        borderInlineStartStyle: P.borderStyles('borderInlineStartStyle'),
        borderRightWidth: P.borderWidths('borderRightWidth'),
        borderInlineEndWidth: P.borderWidths('borderInlineEndWidth'),
        borderRightColor: P.colors('borderRightColor'),
        borderInlineEndColor: P.colors('borderInlineEndColor'),
        borderRightStyle: P.borderStyles('borderRightStyle'),
        borderInlineEndStyle: P.borderStyles('borderInlineEndStyle'),
        borderTopRadius: P.radii([
          'borderTopLeftRadius',
          'borderTopRightRadius',
        ]),
        borderBottomRadius: P.radii([
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
        ]),
        borderLeftRadius: P.radii([
          'borderTopLeftRadius',
          'borderBottomLeftRadius',
        ]),
        borderRightRadius: P.radii([
          'borderTopRightRadius',
          'borderBottomRightRadius',
        ]),
      }
      Object.assign(T, {
        rounded: T.borderRadius,
        roundedTop: T.borderTopRadius,
        roundedTopLeft: T.borderTopLeftRadius,
        roundedTopRight: T.borderTopRightRadius,
        roundedTopStart: T.borderStartStartRadius,
        roundedTopEnd: T.borderStartEndRadius,
        roundedBottom: T.borderBottomRadius,
        roundedBottomLeft: T.borderBottomLeftRadius,
        roundedBottomRight: T.borderBottomRightRadius,
        roundedBottomStart: T.borderEndStartRadius,
        roundedBottomEnd: T.borderEndEndRadius,
        roundedLeft: T.borderLeftRadius,
        roundedRight: T.borderRightRadius,
        roundedStart: T.borderInlineStartRadius,
        roundedEnd: T.borderInlineEndRadius,
        borderStart: T.borderInlineStart,
        borderEnd: T.borderInlineEnd,
        borderTopStartRadius: T.borderStartStartRadius,
        borderTopEndRadius: T.borderStartEndRadius,
        borderBottomStartRadius: T.borderEndStartRadius,
        borderBottomEndRadius: T.borderEndEndRadius,
        borderStartRadius: T.borderInlineStartRadius,
        borderEndRadius: T.borderInlineEndRadius,
        borderStartWidth: T.borderInlineStartWidth,
        borderEndWidth: T.borderInlineEndWidth,
        borderStartColor: T.borderInlineStartColor,
        borderEndColor: T.borderInlineEndColor,
        borderStartStyle: T.borderInlineStartStyle,
        borderEndStyle: T.borderInlineEndStyle,
      })
      var B = {
          color: P.colors('color'),
          textColor: P.colors('color'),
          fill: P.colors('fill'),
          stroke: P.colors('stroke'),
        },
        z = {
          boxShadow: P.shadows('boxShadow'),
          mixBlendMode: !0,
          blendMode: P.prop('mixBlendMode'),
          backgroundBlendMode: !0,
          bgBlendMode: P.prop('backgroundBlendMode'),
          opacity: !0,
        }
      Object.assign(z, { shadow: z.boxShadow })
      var L = {
          filter: { transform: A.filter },
          blur: P.blur('--chakra-blur'),
          brightness: P.propT('--chakra-brightness', A.brightness),
          contrast: P.propT('--chakra-contrast', A.contrast),
          hueRotate: P.degreeT('--chakra-hue-rotate'),
          invert: P.propT('--chakra-invert', A.invert),
          saturate: P.propT('--chakra-saturate', A.saturate),
          dropShadow: P.propT('--chakra-drop-shadow', A.dropShadow),
          backdropFilter: { transform: A.backdropFilter },
          backdropBlur: P.blur('--chakra-backdrop-blur'),
          backdropBrightness: P.propT(
            '--chakra-backdrop-brightness',
            A.brightness
          ),
          backdropContrast: P.propT('--chakra-backdrop-contrast', A.contrast),
          backdropHueRotate: P.degreeT('--chakra-backdrop-hue-rotate'),
          backdropInvert: P.propT('--chakra-backdrop-invert', A.invert),
          backdropSaturate: P.propT('--chakra-backdrop-saturate', A.saturate),
        },
        I = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: { transform: A.flexDirection },
          experimental_spaceX: {
            static: v,
            transform: u({
              scale: 'space',
              transform: function (e) {
                return null !== e ? { '--chakra-space-x': e } : null
              },
            }),
          },
          experimental_spaceY: {
            static: y,
            transform: u({
              scale: 'space',
              transform: function (e) {
                return null != e ? { '--chakra-space-y': e } : null
              },
            }),
          },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: P.sizes('flexBasis'),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: P.space('gap'),
          rowGap: P.space('rowGap'),
          columnGap: P.space('columnGap'),
        }
      Object.assign(I, { flexDir: I.flexDirection })
      var F = {
          gridGap: P.space('gridGap'),
          gridColumnGap: P.space('gridColumnGap'),
          gridRowGap: P.space('gridRowGap'),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        D = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: { transform: A.outline },
          outlineOffset: !0,
          outlineColor: P.colors('outlineColor'),
        },
        M = {
          width: P.sizesT('width'),
          inlineSize: P.sizesT('inlineSize'),
          height: P.sizes('height'),
          blockSize: P.sizes('blockSize'),
          boxSize: P.sizes(['width', 'height']),
          minWidth: P.sizes('minWidth'),
          minInlineSize: P.sizes('minInlineSize'),
          minHeight: P.sizes('minHeight'),
          minBlockSize: P.sizes('minBlockSize'),
          maxWidth: P.sizes('maxWidth'),
          maxInlineSize: P.sizes('maxInlineSize'),
          maxHeight: P.sizes('maxHeight'),
          maxBlockSize: P.sizes('maxBlockSize'),
          d: P.prop('display'),
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          overscrollBehavior: !0,
          overscrollBehaviorX: !0,
          overscrollBehaviorY: !0,
          display: !0,
          verticalAlign: !0,
          boxSizing: !0,
          boxDecorationBreak: !0,
          float: P.propT('float', A.float),
          objectFit: !0,
          objectPosition: !0,
          visibility: !0,
          isolation: !0,
        }
      Object.assign(M, {
        w: M.width,
        h: M.height,
        minW: M.minWidth,
        maxW: M.maxWidth,
        minH: M.minHeight,
        maxH: M.maxHeight,
        overscroll: M.overscrollBehavior,
        overscrollX: M.overscrollBehaviorX,
        overscrollY: M.overscrollBehaviorY,
      })
      var N = {
          listStyleType: !0,
          listStylePosition: !0,
          listStylePos: P.prop('listStylePosition'),
          listStyleImage: !0,
          listStyleImg: P.prop('listStyleImage'),
        },
        H = {
          border: '0px',
          clip: 'rect(0, 0, 0, 0)',
          width: '1px',
          height: '1px',
          margin: '-1px',
          padding: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
        },
        W = {
          position: 'static',
          width: 'auto',
          height: 'auto',
          clip: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          whiteSpace: 'normal',
        },
        U = function (e, t, r) {
          var o = {},
            i = (0, n.Wf)(e, t, {})
          for (var a in i) {
            ;(a in r && null != r[a]) || (o[a] = i[a])
          }
          return o
        },
        $ = {
          srOnly: {
            transform: function (e) {
              return !0 === e ? H : 'focusable' === e ? W : {}
            },
          },
          layerStyle: {
            processResult: !0,
            transform: function (e, t, r) {
              return U(t, 'layerStyles.' + e, r)
            },
          },
          textStyle: {
            processResult: !0,
            transform: function (e, t, r) {
              return U(t, 'textStyles.' + e, r)
            },
          },
          apply: {
            processResult: !0,
            transform: function (e, t, r) {
              return U(t, e, r)
            },
          },
        },
        q = {
          position: !0,
          pos: P.prop('position'),
          zIndex: P.prop('zIndex', 'zIndices'),
          inset: P.spaceT('inset'),
          insetX: P.spaceT(['left', 'right']),
          insetInline: P.spaceT('insetInline'),
          insetY: P.spaceT(['top', 'bottom']),
          insetBlock: P.spaceT('insetBlock'),
          top: P.spaceT('top'),
          insetBlockStart: P.spaceT('insetBlockStart'),
          bottom: P.spaceT('bottom'),
          insetBlockEnd: P.spaceT('insetBlockEnd'),
          left: P.spaceT('left'),
          insetInlineStart: P.logical({
            scale: 'space',
            property: { ltr: 'left', rtl: 'right' },
          }),
          right: P.spaceT('right'),
          insetInlineEnd: P.logical({
            scale: 'space',
            property: { ltr: 'right', rtl: 'left' },
          }),
        }
      Object.assign(q, {
        insetStart: q.insetInlineStart,
        insetEnd: q.insetInlineEnd,
      })
      var V = {
          ring: { transform: A.ring },
          ringColor: P.colors('--chakra-ring-color'),
          ringOffset: P.prop('--chakra-ring-offset-width'),
          ringOffsetColor: P.colors('--chakra-ring-offset-color'),
          ringInset: P.prop('--chakra-ring-inset'),
        },
        Z = {
          margin: P.spaceT('margin'),
          marginTop: P.spaceT('marginTop'),
          marginBlockStart: P.spaceT('marginBlockStart'),
          marginRight: P.spaceT('marginRight'),
          marginInlineEnd: P.spaceT('marginInlineEnd'),
          marginBottom: P.spaceT('marginBottom'),
          marginBlockEnd: P.spaceT('marginBlockEnd'),
          marginLeft: P.spaceT('marginLeft'),
          marginInlineStart: P.spaceT('marginInlineStart'),
          marginX: P.spaceT(['marginInlineStart', 'marginInlineEnd']),
          marginInline: P.spaceT('marginInline'),
          marginY: P.spaceT(['marginTop', 'marginBottom']),
          marginBlock: P.spaceT('marginBlock'),
          padding: P.space('padding'),
          paddingTop: P.space('paddingTop'),
          paddingBlockStart: P.space('paddingBlockStart'),
          paddingRight: P.space('paddingRight'),
          paddingBottom: P.space('paddingBottom'),
          paddingBlockEnd: P.space('paddingBlockEnd'),
          paddingLeft: P.space('paddingLeft'),
          paddingInlineStart: P.space('paddingInlineStart'),
          paddingInlineEnd: P.space('paddingInlineEnd'),
          paddingX: P.space(['paddingInlineStart', 'paddingInlineEnd']),
          paddingInline: P.space('paddingInline'),
          paddingY: P.space(['paddingTop', 'paddingBottom']),
          paddingBlock: P.space('paddingBlock'),
        }
      Object.assign(Z, {
        m: Z.margin,
        mt: Z.marginTop,
        mr: Z.marginRight,
        me: Z.marginInlineEnd,
        marginEnd: Z.marginInlineEnd,
        mb: Z.marginBottom,
        ml: Z.marginLeft,
        ms: Z.marginInlineStart,
        marginStart: Z.marginInlineStart,
        mx: Z.marginX,
        my: Z.marginY,
        p: Z.padding,
        pt: Z.paddingTop,
        py: Z.paddingY,
        px: Z.paddingX,
        pb: Z.paddingBottom,
        pl: Z.paddingLeft,
        ps: Z.paddingInlineStart,
        paddingStart: Z.paddingInlineStart,
        pr: Z.paddingRight,
        pe: Z.paddingInlineEnd,
        paddingEnd: Z.paddingInlineEnd,
      })
      var X = {
          textDecorationColor: P.colors('textDecorationColor'),
          textDecoration: !0,
          textDecor: { property: 'textDecoration' },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: P.shadows('textShadow'),
        },
        K = {
          clipPath: !0,
          transform: P.propT('transform', A.transform),
          transformOrigin: !0,
          translateX: P.spaceT('--chakra-translate-x'),
          translateY: P.spaceT('--chakra-translate-y'),
          skewX: P.degreeT('--chakra-skew-x'),
          skewY: P.degreeT('--chakra-skew-y'),
          scaleX: P.prop('--chakra-scale-x'),
          scaleY: P.prop('--chakra-scale-y'),
          scale: P.prop(['--chakra-scale-x', '--chakra-scale-y']),
          rotate: P.degreeT('--chakra-rotate'),
        },
        G = {
          transition: !0,
          transitionDelay: !0,
          animation: !0,
          willChange: !0,
          transitionDuration: P.prop(
            'transitionDuration',
            'transition.duration'
          ),
          transitionProperty: P.prop(
            'transitionProperty',
            'transition.property'
          ),
          transitionTimingFunction: P.prop(
            'transitionTimingFunction',
            'transition.easing'
          ),
        },
        Y = {
          fontFamily: P.prop('fontFamily', 'fonts'),
          fontSize: P.prop('fontSize', 'fontSizes', A.px),
          fontWeight: P.prop('fontWeight', 'fontWeights'),
          lineHeight: P.prop('lineHeight', 'lineHeights'),
          letterSpacing: P.prop('letterSpacing', 'letterSpacings'),
          textAlign: !0,
          fontStyle: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          noOfLines: {
            static: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 'var(--chakra-line-clamp)',
            },
            property: '--chakra-line-clamp',
          },
          isTruncated: {
            transform: function (e) {
              if (!0 === e)
                return {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }
            },
          },
        },
        J = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: P.spaceT('scrollMargin'),
          scrollMarginTop: P.spaceT('scrollMarginTop'),
          scrollMarginBottom: P.spaceT('scrollMarginBottom'),
          scrollMarginLeft: P.spaceT('scrollMarginLeft'),
          scrollMarginRight: P.spaceT('scrollMarginRight'),
          scrollMarginX: P.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
          scrollMarginY: P.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
          scrollPadding: P.spaceT('scrollPadding'),
          scrollPaddingTop: P.spaceT('scrollPaddingTop'),
          scrollPaddingBottom: P.spaceT('scrollPaddingBottom'),
          scrollPaddingLeft: P.spaceT('scrollPaddingLeft'),
          scrollPaddingRight: P.spaceT('scrollPaddingRight'),
          scrollPaddingX: P.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
          scrollPaddingY: P.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
        }
      function Q(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function ee(e, t) {
        var r =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator']
        if (r) return (r = r.call(e)).next.bind(r)
        if (
          Array.isArray(e) ||
          (r = (function (e, t) {
            if (e) {
              if ('string' === typeof e) return Q(e, t)
              var r = Object.prototype.toString.call(e).slice(8, -1)
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? Q(e, t)
                  : void 0
              )
            }
          })(e)) ||
          (t && e && 'number' === typeof e.length)
        ) {
          r && (e = r)
          var n = 0
          return function () {
            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      var te = function (e, t) {
          return e + ':hover ' + t + ', ' + e + '[data-hover] ' + t
        },
        re = function (e, t) {
          return e + ':focus ' + t + ', ' + e + '[data-focus] ' + t
        },
        ne = function (e, t) {
          return e + ':focus-visible ' + t
        },
        oe = function (e, t) {
          return e + ':focus-within ' + t
        },
        ie = function (e, t) {
          return e + ':active ' + t + ', ' + e + '[data-active] ' + t
        },
        ae = function (e, t) {
          return e + ':disabled ' + t + ', ' + e + '[data-disabled] ' + t
        },
        se = function (e, t) {
          return e + ':invalid ' + t + ', ' + e + '[data-invalid] ' + t
        },
        ue = function (e, t) {
          return e + ':checked ' + t + ', ' + e + '[data-checked] ' + t
        },
        le = function (e, t) {
          return e + ':placeholder-shown ' + t
        },
        ce = function (e) {
          return de(
            function (t) {
              return e(t, '&')
            },
            '[role=group]',
            '[data-group]',
            '.group'
          )
        },
        fe = function (e) {
          return de(
            function (t) {
              return e(t, '~ &')
            },
            '[data-peer]',
            '.peer'
          )
        },
        de = function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n]
          return r.map(e).join(', ')
        },
        pe = {
          _hover: '&:hover, &[data-hover]',
          _active: '&:active, &[data-active]',
          _focus: '&:focus, &[data-focus]',
          _highlighted: '&[data-highlighted]',
          _focusWithin: '&:focus-within',
          _focusVisible: '&:focus-visible',
          _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
          _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
          _before: '&::before',
          _after: '&::after',
          _empty: '&:empty',
          _expanded: '&[aria-expanded=true], &[data-expanded]',
          _checked: '&[aria-checked=true], &[data-checked]',
          _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
          _pressed: '&[aria-pressed=true], &[data-pressed]',
          _invalid: '&[aria-invalid=true], &[data-invalid]',
          _valid: '&[data-valid], &[data-state=valid]',
          _loading: '&[data-loading], &[aria-busy=true]',
          _selected: '&[aria-selected=true], &[data-selected]',
          _hidden: '&[hidden], &[data-hidden]',
          _autofill: '&:-webkit-autofill',
          _even: '&:nth-of-type(even)',
          _odd: '&:nth-of-type(odd)',
          _first: '&:first-of-type',
          _last: '&:last-of-type',
          _notFirst: '&:not(:first-of-type)',
          _notLast: '&:not(:last-of-type)',
          _visited: '&:visited',
          _activeLink: '&[aria-current=page]',
          _activeStep: '&[aria-current=step]',
          _indeterminate:
            '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
          _groupHover: ce(te),
          _peerHover: fe(te),
          _groupFocus: ce(re),
          _peerFocus: fe(re),
          _groupFocusVisible: ce(ne),
          _peerFocusVisible: fe(ne),
          _groupActive: ce(ie),
          _peerActive: fe(ie),
          _groupDisabled: ce(ae),
          _peerDisabled: fe(ae),
          _groupInvalid: ce(se),
          _peerInvalid: fe(se),
          _groupChecked: ce(ue),
          _peerChecked: fe(ue),
          _groupFocusWithin: ce(oe),
          _peerFocusWithin: fe(oe),
          _peerPlaceholderShown: fe(le),
          _placeholder: '&::placeholder',
          _placeholderShown: '&:placeholder-shown',
          _fullScreen: '&:fullscreen',
          _selection: '&::selection',
          _rtl: '[dir=rtl] &, &[dir=rtl]',
          _ltr: '[dir=ltr] &, &[dir=ltr]',
          _mediaDark: '@media (prefers-color-scheme: dark)',
          _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
          _dark: '.chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]',
          _light:
            '.chakra-ui-light &, [data-theme=light] &, &[data-theme=light]',
        },
        he = (0, n.Yd)(pe),
        ge = i()({}, j, T, B, I, M, L, V, D, F, $, q, z, Z, J, Y, X, K, N, G),
        me = Object.assign({}, Z, M, I, F, q),
        be = (0, n.Yd)(me),
        ve = [].concat((0, n.Yd)(ge), he),
        ye = a({}, ge, pe),
        xe = function (e) {
          return e in ye
        },
        we = function (e, t) {
          return e.startsWith('--') && (0, n.HD)(t) && !(0, n.FS)(t)
        },
        ke = function (e, t) {
          var r, n
          if (null == t) return t
          var o = function (t) {
              var r, n
              return null == (r = e.__cssMap) || null == (n = r[t])
                ? void 0
                : n.varRef
            },
            i = function (e) {
              var t
              return null != (t = o(e)) ? t : e
            },
            a = t.split(',').map(function (e) {
              return e.trim()
            }),
            s = a[0],
            u = a[1]
          return (t = null != (r = null != (n = o(s)) ? n : i(u)) ? r : i(t))
        }
      function Se(e) {
        var t = e.configs,
          r = void 0 === t ? {} : t,
          o = e.pseudos,
          a = void 0 === o ? {} : o,
          s = e.theme
        return function e(t, o) {
          void 0 === o && (o = !1)
          var u = (0, n.Pu)(t, s),
            l = (function (e) {
              return function (t) {
                if (!t.__breakpoints) return e
                var r = t.__breakpoints,
                  o = r.isResponsive,
                  i = r.toArrayValue,
                  a = r.media,
                  s = {}
                for (var u in e) {
                  var l = (0, n.Pu)(e[u], t)
                  if (null != l)
                    if (
                      ((l = (0, n.Kn)(l) && o(l) ? i(l) : l), Array.isArray(l))
                    )
                      for (
                        var c = l.slice(0, a.length).length, f = 0;
                        f < c;
                        f += 1
                      ) {
                        var d = null == a ? void 0 : a[f]
                        d
                          ? ((s[d] = s[d] || {}),
                            null != l[f] && (s[d][u] = l[f]))
                          : (s[u] = l[f])
                      }
                    else s[u] = l
                }
                return s
              }
            })(u)(s),
            c = {}
          for (var f in l) {
            var d,
              p,
              h,
              g,
              m,
              b = l[f],
              v = (0, n.Pu)(b, s)
            f in a && (f = a[f]), we(f, v) && (v = ke(s, v))
            var y = r[f]
            if ((!0 === y && (y = { property: f }), (0, n.Kn)(v))) {
              var x
              ;(c[f] = null != (x = c[f]) ? x : {}),
                (c[f] = i()({}, c[f], e(v, !0)))
            } else {
              var w =
                null !=
                (d =
                  null == (p = y) || null == p.transform
                    ? void 0
                    : p.transform(v, s, u))
                  ? d
                  : v
              w = null != (h = y) && h.processResult ? e(w, !0) : w
              var k = (0, n.Pu)(null == (g = y) ? void 0 : g.property, s)
              if (!o && null != (m = y) && m.static) {
                var S = (0, n.Pu)(y.static, s)
                c = i()({}, c, S)
              }
              if (k && Array.isArray(k))
                for (var O, C = ee(k); !(O = C()).done; ) {
                  c[O.value] = w
                }
              else
                k
                  ? '&' === k && (0, n.Kn)(w)
                    ? (c = i()({}, c, w))
                    : (c[k] = w)
                  : (0, n.Kn)(w)
                  ? (c = i()({}, c, w))
                  : (c[f] = w)
            }
          }
          return c
        }
      }
      var Oe = function (e) {
        return function (t) {
          return Se({ theme: t, pseudos: pe, configs: ge })(e)
        }
      }
      function Ce(e) {
        return (0, n.Kn)(e) && e.reference ? e.reference : String(e)
      }
      var Ee = function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n]
          return r
            .map(Ce)
            .join(' ' + e + ' ')
            .replace(/calc/g, '')
        },
        Re = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + Ee.apply(void 0, ['+'].concat(t)) + ')'
        },
        _e = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + Ee.apply(void 0, ['-'].concat(t)) + ')'
        },
        Ae = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + Ee.apply(void 0, ['*'].concat(t)) + ')'
        },
        Pe = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + Ee.apply(void 0, ['/'].concat(t)) + ')'
        },
        je = function (e) {
          var t = Ce(e)
          return null == t || Number.isNaN(parseFloat(t))
            ? Ae(t, -1)
            : String(t).startsWith('-')
            ? String(t).slice(1)
            : '-' + t
        },
        Te = Object.assign(
          function (e) {
            return {
              add: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return Te(Re.apply(void 0, [e].concat(r)))
              },
              subtract: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return Te(_e.apply(void 0, [e].concat(r)))
              },
              multiply: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return Te(Ae.apply(void 0, [e].concat(r)))
              },
              divide: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return Te(Pe.apply(void 0, [e].concat(r)))
              },
              negate: function () {
                return Te(je(e))
              },
              toString: function () {
                return e.toString()
              },
            }
          },
          { add: Re, subtract: _e, multiply: Ae, divide: Pe, negate: je }
        )
      function Be(e) {
        var t = (function (e, t) {
          return void 0 === t && (t = '-'), e.replace(/\s+/g, t)
        })(e.toString())
        return t.includes('\\.')
          ? e
          : !Number.isInteger(parseFloat(e.toString()))
          ? t.replace('.', '\\.')
          : e
      }
      function ze(e, t) {
        return 'var(' + Be(e) + (t ? ', ' + t : '') + ')'
      }
      function Le(e, t) {
        return (
          void 0 === t && (t = ''),
          '--' +
            (function (e, t) {
              return (
                void 0 === t && (t = ''), [t, Be(e)].filter(Boolean).join('-')
              )
            })(e, t)
        )
      }
      function Ie(e, t) {
        return (function (e, t, r) {
          var n = Le(e, r)
          return { variable: n, reference: ze(n, t) }
        })(String(e).replace(/\./g, '-'), void 0, t)
      }
      function Fe(e, t) {
        for (
          var r = {},
            o = {},
            a = function () {
              var a = u[s],
                l = a[0],
                c = a[1],
                f = c.isSemantic,
                d = c.value,
                p = Ie(l, null == t ? void 0 : t.cssVarPrefix),
                h = p.variable,
                g = p.reference
              if (!f) {
                if (l.startsWith('space')) {
                  var m = l.split('.'),
                    b = m[0] + '.-' + m.slice(1).join('.'),
                    v = Te.negate(d),
                    y = Te.negate(g)
                  o[b] = { value: v, var: h, varRef: y }
                }
                return (
                  (r[h] = d),
                  (o[l] = { value: d, var: h, varRef: g }),
                  'continue'
                )
              }
              var x = (0, n.Kn)(d) ? d : { default: d }
              ;(r = i()(
                r,
                Object.entries(x).reduce(function (r, n) {
                  var o,
                    i,
                    a = n[0],
                    s = (function (r) {
                      var n = [String(l).split('.')[0], r].join('.')
                      return e[n]
                        ? Ie(n, null == t ? void 0 : t.cssVarPrefix).reference
                        : r
                    })(n[1])
                  return 'default' === a
                    ? ((r[h] = s), r)
                    : ((r[null != (o = null == pe ? void 0 : pe[a]) ? o : a] =
                        (((i = {})[h] = s), i)),
                      r)
                }, {})
              )),
                (o[l] = { value: g, var: h, varRef: g })
            },
            s = 0,
            u = Object.entries(e);
          s < u.length;
          s++
        )
          a()
        return { cssVars: r, cssMap: o }
      }
      var De = ['__cssMap', '__cssVars', '__breakpoints'],
        Me = [
          'colors',
          'borders',
          'borderWidths',
          'borderStyles',
          'fonts',
          'fontSizes',
          'fontWeights',
          'letterSpacings',
          'lineHeights',
          'radii',
          'space',
          'shadows',
          'sizes',
          'zIndices',
          'transition',
          'blur',
        ]
      function Ne(e) {
        var t = Me
        return (0, n.ei)(e, t)
      }
      function He(e) {
        return (
          e.__cssMap,
          e.__cssVars,
          e.__breakpoints,
          (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              o = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
            return o
          })(e, De)
        )
      }
      function We(e) {
        var t,
          r = He(e),
          o = Ne(r),
          i = (function (e) {
            return e.semanticTokens
          })(r),
          s = (function (e) {
            var t,
              r,
              o = e.tokens,
              i = e.semanticTokens,
              a = Object.entries(null != (t = (0, n.xH)(o)) ? t : {}).map(
                function (e) {
                  return [e[0], { isSemantic: !1, value: e[1] }]
                }
              ),
              s = Object.entries(null != (r = (0, n.xH)(i, 1)) ? r : {}).map(
                function (e) {
                  return [e[0], { isSemantic: !0, value: e[1] }]
                }
              )
            return (0, n.sq)([].concat(a, s))
          })({ tokens: o, semanticTokens: i }),
          u = Fe(s, {
            cssVarPrefix: null == (t = r.config) ? void 0 : t.cssVarPrefix,
          }),
          l = u.cssMap,
          c = u.cssVars
        return (
          Object.assign(r, {
            __cssVars: a(
              {},
              {
                '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
                '--chakra-ring-offset-width': '0px',
                '--chakra-ring-offset-color': '#fff',
                '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
                '--chakra-ring-offset-shadow': '0 0 #0000',
                '--chakra-ring-shadow': '0 0 #0000',
                '--chakra-space-x-reverse': '0',
                '--chakra-space-y-reverse': '0',
              },
              c
            ),
            __cssMap: l,
            __breakpoints: (0, n.yn)(r.breakpoints),
          }),
          r
        )
      }
    },
    1604: function (e, t, r) {
      'use strict'
      r.d(t, {
        ZL: function () {
          return F
        },
        Fo: function () {
          return L
        },
        f6: function () {
          return j
        },
        m$: function () {
          return Y
        },
        Gp: function () {
          return Z
        },
        Lr: function () {
          return D
        },
        uP: function () {
          return M
        },
        jC: function () {
          return G
        },
        mq: function () {
          return K
        },
        yK: function () {
          return I
        },
        Fg: function () {
          return B
        },
      })
      var n = r(949),
        o = r(4244),
        i = r(917),
        a = r(3663),
        s = r(9703),
        u = r(8554),
        l = r.n(u),
        c = r(7294),
        f = r.t(c, 2),
        d = r(9590),
        p = r.n(d),
        h = r(6450),
        g = r(7462),
        m = r(7866),
        b =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        v = (0, m.Z)(function (e) {
          return (
            b.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          )
        }),
        y = r(444),
        x = r(3772),
        w = v,
        k = function (e) {
          return 'theme' !== e
        },
        S = function (e) {
          return 'string' === typeof e && e.charCodeAt(0) > 96 ? w : k
        },
        O = function (e, t, r) {
          var n
          if (t) {
            var o = t.shouldForwardProp
            n =
              e.__emotion_forwardProp && o
                ? function (t) {
                    return e.__emotion_forwardProp(t) && o(t)
                  }
                : o
          }
          return (
            'function' !== typeof n && r && (n = e.__emotion_forwardProp), n
          )
        },
        C = f.useInsertionEffect
          ? f.useInsertionEffect
          : function (e) {
              e()
            }
      var E = function (e) {
          var t = e.cache,
            r = e.serialized,
            n = e.isStringTag
          ;(0, y.hC)(t, r, n)
          C(function () {
            return (0, y.My)(t, r, n)
          })
          return null
        },
        R = function e(t, r) {
          var n,
            o,
            i = t.__emotion_real === t,
            s = (i && t.__emotion_base) || t
          void 0 !== r && ((n = r.label), (o = r.target))
          var u = O(t, r, i),
            l = u || S(s),
            f = !l('as')
          return function () {
            var d = arguments,
              p =
                i && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : []
            if (
              (void 0 !== n && p.push('label:' + n + ';'),
              null == d[0] || void 0 === d[0].raw)
            )
              p.push.apply(p, d)
            else {
              0, p.push(d[0][0])
              for (var h = d.length, m = 1; m < h; m++) p.push(d[m], d[0][m])
            }
            var b = (0, a.w)(function (e, t, r) {
              var n = (f && e.as) || s,
                i = '',
                d = [],
                h = e
              if (null == e.theme) {
                for (var g in ((h = {}), e)) h[g] = e[g]
                h.theme = (0, c.useContext)(a.T)
              }
              'string' === typeof e.className
                ? (i = (0, y.fp)(t.registered, d, e.className))
                : null != e.className && (i = e.className + ' ')
              var m = (0, x.O)(p.concat(d), t.registered, h)
              ;(i += t.key + '-' + m.name), void 0 !== o && (i += ' ' + o)
              var b = f && void 0 === u ? S(n) : l,
                v = {}
              for (var w in e) (f && 'as' === w) || (b(w) && (v[w] = e[w]))
              return (
                (v.className = i),
                (v.ref = r),
                (0, c.createElement)(
                  c.Fragment,
                  null,
                  (0, c.createElement)(E, {
                    cache: t,
                    serialized: m,
                    isStringTag: 'string' === typeof n,
                  }),
                  (0, c.createElement)(n, v)
                )
              )
            })
            return (
              (b.displayName =
                void 0 !== n
                  ? n
                  : 'Styled(' +
                    ('string' === typeof s
                      ? s
                      : s.displayName || s.name || 'Component') +
                    ')'),
              (b.defaultProps = t.defaultProps),
              (b.__emotion_real = b),
              (b.__emotion_base = s),
              (b.__emotion_styles = p),
              (b.__emotion_forwardProp = u),
              Object.defineProperty(b, 'toString', {
                value: function () {
                  return '.' + o
                },
              }),
              (b.withComponent = function (t, n) {
                return e(
                  t,
                  (0, g.Z)({}, r, n, { shouldForwardProp: O(b, n, !0) })
                ).apply(void 0, p)
              }),
              b
            )
          }
        },
        _ = R.bind()
      ;[
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ].forEach(function (e) {
        _[e] = _(e)
      })
      var A = _
      function P() {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          P.apply(this, arguments)
        )
      }
      var j = function (e) {
          var t = e.cssVarsRoot,
            r = e.theme,
            n = e.children,
            i = c.useMemo(
              function () {
                return (0, o.c0)(r)
              },
              [r]
            )
          return c.createElement(
            a.b,
            { theme: i },
            c.createElement(T, { root: t }),
            n
          )
        },
        T = function (e) {
          var t = e.root,
            r = void 0 === t ? ':host, :root' : t
          return c.createElement(i.xB, {
            styles: function (e) {
              var t
              return ((t = {})[r] = e.__cssVars), t
            },
          })
        }
      function B() {
        var e = c.useContext(a.T)
        if (!e)
          throw Error(
            'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
          )
        return e
      }
      var z = (0, h.kr)({
          name: 'StylesContext',
          errorMessage:
            'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
        }),
        L = z[0],
        I = z[1],
        F = function () {
          var e = (0, n.If)().colorMode
          return c.createElement(i.xB, {
            styles: function (t) {
              var r = (0, s.Wf)(t, 'styles.global'),
                n = (0, s.Pu)(r, { theme: t, colorMode: e })
              if (n) {
                var i = (0, o.iv)(n)(t)
                return i
              }
            },
          })
        }
      function D(e) {
        return (0, s.CE)(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
      }
      function M() {
        return P({}, (0, n.If)(), { theme: B() })
      }
      function N(e, t) {
        if (null == e) return {}
        var r,
          n,
          o = {},
          i = Object.keys(e)
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
        return o
      }
      var H = new Set(
          [].concat(o.cC, [
            'textStyle',
            'layerStyle',
            'apply',
            'isTruncated',
            'noOfLines',
            'focusBorderColor',
            'errorBorderColor',
            'as',
            '__css',
            'css',
            'sx',
          ])
        ),
        W = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']),
        U = function (e) {
          return W.has(e) || !H.has(e)
        },
        $ = ['theme', 'css', '__css', 'sx'],
        q = ['baseStyle']
      function V(e, t) {
        var r = null != t ? t : {},
          n = r.baseStyle,
          i = N(r, q)
        i.shouldForwardProp || (i.shouldForwardProp = U)
        var a = (function (e) {
          var t = e.baseStyle
          return function (e) {
            e.theme
            var r = e.css,
              n = e.__css,
              i = e.sx,
              a = N(e, $),
              u = (0, s.lw)(a, function (e, t) {
                return (0, o.ZR)(t)
              }),
              l = (0, s.Pu)(t, e),
              c = Object.assign({}, n, l, (0, s.YU)(u), i),
              f = (0, o.iv)(c)(e.theme)
            return r ? [f, r] : f
          }
        })({ baseStyle: n })
        return A(e, i)(a)
      }
      function Z(e) {
        return c.forwardRef(e)
      }
      var X = ['styleConfig']
      function K(e, t, r) {
        var n
        void 0 === t && (t = {}), void 0 === r && (r = {})
        var o = t,
          i = o.styleConfig,
          a = N(o, X),
          u = M(),
          f = u.theme,
          d = u.colorMode,
          h = (0, s.Wf)(f, 'components.' + e),
          g = i || h,
          m = l()(
            { theme: f, colorMode: d },
            null != (n = null == g ? void 0 : g.defaultProps) ? n : {},
            (0, s.YU)((0, s.CE)(a, ['children']))
          ),
          b = (0, c.useRef)({})
        if (g) {
          var v,
            y,
            x,
            w,
            k,
            S,
            O = (0, s.Pu)(null != (v = g.baseStyle) ? v : {}, m),
            C = (0, s.Pu)(
              null != (y = null == (x = g.variants) ? void 0 : x[m.variant])
                ? y
                : {},
              m
            ),
            E = (0, s.Pu)(
              null != (w = null == (k = g.sizes) ? void 0 : k[m.size]) ? w : {},
              m
            ),
            R = l()({}, O, E, C)
          null != (S = r) &&
            S.isMultiPart &&
            g.parts &&
            g.parts.forEach(function (e) {
              var t
              R[e] = null != (t = R[e]) ? t : {}
            }),
            p()(b.current, R) || (b.current = R)
        }
        return b.current
      }
      function G(e, t) {
        return K(e, t, { isMultiPart: !0 })
      }
      var Y = (function () {
        var e = new Map()
        return new Proxy(V, {
          apply: function (e, t, r) {
            return V.apply(void 0, r)
          },
          get: function (t, r) {
            return e.has(r) || e.set(r, V(r)), e.get(r)
          },
        })
      })()
    },
    2021: function (e, t, r) {
      'use strict'
      r.d(t, {
        ZP: function () {
          return Hn
        },
        gk: function () {
          return Nn
        },
        rS: function () {
          return Hn
        },
      })
      var n = {
        px: '1px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      }
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          o.apply(this, arguments)
        )
      }
      var i = o(
        {},
        n,
        {
          max: 'max-content',
          min: 'min-content',
          full: '100%',
          '3xs': '14rem',
          '2xs': '16rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '80rem',
          '8xl': '90rem',
        },
        { container: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' } }
      )
      function a(e, t) {
        ;(function (e) {
          return (
            'string' === typeof e &&
            -1 !== e.indexOf('.') &&
            1 === parseFloat(e)
          )
        })(e) && (e = '100%')
        var r = (function (e) {
          return 'string' === typeof e && -1 !== e.indexOf('%')
        })(e)
        return (
          (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
          r && (e = parseInt(String(e * t), 10) / 100),
          Math.abs(e - t) < 1e-6
            ? 1
            : (e =
                360 === t
                  ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
                  : (e % t) / parseFloat(String(t)))
        )
      }
      function s(e) {
        return Math.min(1, Math.max(0, e))
      }
      function u(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
      }
      function l(e) {
        return e <= 1 ? 100 * Number(e) + '%' : e
      }
      function c(e) {
        return 1 === e.length ? '0' + e : String(e)
      }
      function f(e, t, r) {
        ;(e = a(e, 255)), (t = a(t, 255)), (r = a(r, 255))
        var n = Math.max(e, t, r),
          o = Math.min(e, t, r),
          i = 0,
          s = 0,
          u = (n + o) / 2
        if (n === o) (s = 0), (i = 0)
        else {
          var l = n - o
          switch (((s = u > 0.5 ? l / (2 - n - o) : l / (n + o)), n)) {
            case e:
              i = (t - r) / l + (t < r ? 6 : 0)
              break
            case t:
              i = (r - e) / l + 2
              break
            case r:
              i = (e - t) / l + 4
          }
          i /= 6
        }
        return { h: i, s: s, l: u }
      }
      function d(e, t, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? e + 6 * r * (t - e)
            : r < 0.5
            ? t
            : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e
        )
      }
      function p(e, t, r) {
        ;(e = a(e, 255)), (t = a(t, 255)), (r = a(r, 255))
        var n = Math.max(e, t, r),
          o = Math.min(e, t, r),
          i = 0,
          s = n,
          u = n - o,
          l = 0 === n ? 0 : u / n
        if (n === o) i = 0
        else {
          switch (n) {
            case e:
              i = (t - r) / u + (t < r ? 6 : 0)
              break
            case t:
              i = (r - e) / u + 2
              break
            case r:
              i = (e - t) / u + 4
          }
          i /= 6
        }
        return { h: i, s: l, v: s }
      }
      function h(e, t, r, n) {
        var o = [
          c(Math.round(e).toString(16)),
          c(Math.round(t).toString(16)),
          c(Math.round(r).toString(16)),
        ]
        return n &&
          o[0].startsWith(o[0].charAt(1)) &&
          o[1].startsWith(o[1].charAt(1)) &&
          o[2].startsWith(o[2].charAt(1))
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join('')
      }
      function g(e) {
        return Math.round(255 * parseFloat(e)).toString(16)
      }
      function m(e) {
        return b(e) / 255
      }
      function b(e) {
        return parseInt(e, 16)
      }
      var v = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        goldenrod: '#daa520',
        gold: '#ffd700',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavenderblush: '#fff0f5',
        lavender: '#e6e6fa',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
      }
      function y(e) {
        var t,
          r,
          n,
          o = { r: 0, g: 0, b: 0 },
          i = 1,
          s = null,
          c = null,
          f = null,
          p = !1,
          h = !1
        return (
          'string' === typeof e &&
            (e = (function (e) {
              if (0 === (e = e.trim().toLowerCase()).length) return !1
              var t = !1
              if (v[e]) (e = v[e]), (t = !0)
              else if ('transparent' === e)
                return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
              var r = S.rgb.exec(e)
              if (r) return { r: r[1], g: r[2], b: r[3] }
              if ((r = S.rgba.exec(e)))
                return { r: r[1], g: r[2], b: r[3], a: r[4] }
              if ((r = S.hsl.exec(e))) return { h: r[1], s: r[2], l: r[3] }
              if ((r = S.hsla.exec(e)))
                return { h: r[1], s: r[2], l: r[3], a: r[4] }
              if ((r = S.hsv.exec(e))) return { h: r[1], s: r[2], v: r[3] }
              if ((r = S.hsva.exec(e)))
                return { h: r[1], s: r[2], v: r[3], a: r[4] }
              if ((r = S.hex8.exec(e)))
                return {
                  r: b(r[1]),
                  g: b(r[2]),
                  b: b(r[3]),
                  a: m(r[4]),
                  format: t ? 'name' : 'hex8',
                }
              if ((r = S.hex6.exec(e)))
                return {
                  r: b(r[1]),
                  g: b(r[2]),
                  b: b(r[3]),
                  format: t ? 'name' : 'hex',
                }
              if ((r = S.hex4.exec(e)))
                return {
                  r: b(r[1] + r[1]),
                  g: b(r[2] + r[2]),
                  b: b(r[3] + r[3]),
                  a: m(r[4] + r[4]),
                  format: t ? 'name' : 'hex8',
                }
              if ((r = S.hex3.exec(e)))
                return {
                  r: b(r[1] + r[1]),
                  g: b(r[2] + r[2]),
                  b: b(r[3] + r[3]),
                  format: t ? 'name' : 'hex',
                }
              return !1
            })(e)),
          'object' === typeof e &&
            (O(e.r) && O(e.g) && O(e.b)
              ? ((t = e.r),
                (r = e.g),
                (n = e.b),
                (o = {
                  r: 255 * a(t, 255),
                  g: 255 * a(r, 255),
                  b: 255 * a(n, 255),
                }),
                (p = !0),
                (h = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
              : O(e.h) && O(e.s) && O(e.v)
              ? ((s = l(e.s)),
                (c = l(e.v)),
                (o = (function (e, t, r) {
                  ;(e = 6 * a(e, 360)), (t = a(t, 100)), (r = a(r, 100))
                  var n = Math.floor(e),
                    o = e - n,
                    i = r * (1 - t),
                    s = r * (1 - o * t),
                    u = r * (1 - (1 - o) * t),
                    l = n % 6
                  return {
                    r: 255 * [r, s, i, i, u, r][l],
                    g: 255 * [u, r, r, s, i, i][l],
                    b: 255 * [i, i, u, r, r, s][l],
                  }
                })(e.h, s, c)),
                (p = !0),
                (h = 'hsv'))
              : O(e.h) &&
                O(e.s) &&
                O(e.l) &&
                ((s = l(e.s)),
                (f = l(e.l)),
                (o = (function (e, t, r) {
                  var n, o, i
                  if (
                    ((e = a(e, 360)), (t = a(t, 100)), (r = a(r, 100)), 0 === t)
                  )
                    (o = r), (i = r), (n = r)
                  else {
                    var s = r < 0.5 ? r * (1 + t) : r + t - r * t,
                      u = 2 * r - s
                    ;(n = d(u, s, e + 1 / 3)),
                      (o = d(u, s, e)),
                      (i = d(u, s, e - 1 / 3))
                  }
                  return { r: 255 * n, g: 255 * o, b: 255 * i }
                })(e.h, s, f)),
                (p = !0),
                (h = 'hsl')),
            Object.prototype.hasOwnProperty.call(e, 'a') && (i = e.a)),
          (i = u(i)),
          {
            ok: p,
            format: e.format || h,
            r: Math.min(255, Math.max(o.r, 0)),
            g: Math.min(255, Math.max(o.g, 0)),
            b: Math.min(255, Math.max(o.b, 0)),
            a: i,
          }
        )
      }
      var x = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
        w =
          '[\\s|\\(]+(' + x + ')[,|\\s]+(' + x + ')[,|\\s]+(' + x + ')\\s*\\)?',
        k =
          '[\\s|\\(]+(' +
          x +
          ')[,|\\s]+(' +
          x +
          ')[,|\\s]+(' +
          x +
          ')[,|\\s]+(' +
          x +
          ')\\s*\\)?',
        S = {
          CSS_UNIT: new RegExp(x),
          rgb: new RegExp('rgb' + w),
          rgba: new RegExp('rgba' + k),
          hsl: new RegExp('hsl' + w),
          hsla: new RegExp('hsla' + k),
          hsv: new RegExp('hsv' + w),
          hsva: new RegExp('hsva' + k),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        }
      function O(e) {
        return Boolean(S.CSS_UNIT.exec(String(e)))
      }
      var C = (function () {
        function e(t, r) {
          var n
          if (
            (void 0 === t && (t = ''), void 0 === r && (r = {}), t instanceof e)
          )
            return t
          'number' === typeof t &&
            (t = (function (e) {
              return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e }
            })(t)),
            (this.originalInput = t)
          var o = y(t)
          ;(this.originalInput = t),
            (this.r = o.r),
            (this.g = o.g),
            (this.b = o.b),
            (this.a = o.a),
            (this.roundA = Math.round(100 * this.a) / 100),
            (this.format =
              null !== (n = r.format) && void 0 !== n ? n : o.format),
            (this.gradientType = r.gradientType),
            this.r < 1 && (this.r = Math.round(this.r)),
            this.g < 1 && (this.g = Math.round(this.g)),
            this.b < 1 && (this.b = Math.round(this.b)),
            (this.isValid = o.ok)
        }
        return (
          (e.prototype.isDark = function () {
            return this.getBrightness() < 128
          }),
          (e.prototype.isLight = function () {
            return !this.isDark()
          }),
          (e.prototype.getBrightness = function () {
            var e = this.toRgb()
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
          }),
          (e.prototype.getLuminance = function () {
            var e = this.toRgb(),
              t = e.r / 255,
              r = e.g / 255,
              n = e.b / 255
            return (
              0.2126 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (r <= 0.03928
                  ? r / 12.92
                  : Math.pow((r + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
            )
          }),
          (e.prototype.getAlpha = function () {
            return this.a
          }),
          (e.prototype.setAlpha = function (e) {
            return (
              (this.a = u(e)),
              (this.roundA = Math.round(100 * this.a) / 100),
              this
            )
          }),
          (e.prototype.toHsv = function () {
            var e = p(this.r, this.g, this.b)
            return { h: 360 * e.h, s: e.s, v: e.v, a: this.a }
          }),
          (e.prototype.toHsvString = function () {
            var e = p(this.r, this.g, this.b),
              t = Math.round(360 * e.h),
              r = Math.round(100 * e.s),
              n = Math.round(100 * e.v)
            return 1 === this.a
              ? 'hsv(' + t + ', ' + r + '%, ' + n + '%)'
              : 'hsva(' + t + ', ' + r + '%, ' + n + '%, ' + this.roundA + ')'
          }),
          (e.prototype.toHsl = function () {
            var e = f(this.r, this.g, this.b)
            return { h: 360 * e.h, s: e.s, l: e.l, a: this.a }
          }),
          (e.prototype.toHslString = function () {
            var e = f(this.r, this.g, this.b),
              t = Math.round(360 * e.h),
              r = Math.round(100 * e.s),
              n = Math.round(100 * e.l)
            return 1 === this.a
              ? 'hsl(' + t + ', ' + r + '%, ' + n + '%)'
              : 'hsla(' + t + ', ' + r + '%, ' + n + '%, ' + this.roundA + ')'
          }),
          (e.prototype.toHex = function (e) {
            return void 0 === e && (e = !1), h(this.r, this.g, this.b, e)
          }),
          (e.prototype.toHexString = function (e) {
            return void 0 === e && (e = !1), '#' + this.toHex(e)
          }),
          (e.prototype.toHex8 = function (e) {
            return (
              void 0 === e && (e = !1),
              (function (e, t, r, n, o) {
                var i = [
                  c(Math.round(e).toString(16)),
                  c(Math.round(t).toString(16)),
                  c(Math.round(r).toString(16)),
                  c(g(n)),
                ]
                return o &&
                  i[0].startsWith(i[0].charAt(1)) &&
                  i[1].startsWith(i[1].charAt(1)) &&
                  i[2].startsWith(i[2].charAt(1)) &&
                  i[3].startsWith(i[3].charAt(1))
                  ? i[0].charAt(0) +
                      i[1].charAt(0) +
                      i[2].charAt(0) +
                      i[3].charAt(0)
                  : i.join('')
              })(this.r, this.g, this.b, this.a, e)
            )
          }),
          (e.prototype.toHex8String = function (e) {
            return void 0 === e && (e = !1), '#' + this.toHex8(e)
          }),
          (e.prototype.toRgb = function () {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a,
            }
          }),
          (e.prototype.toRgbString = function () {
            var e = Math.round(this.r),
              t = Math.round(this.g),
              r = Math.round(this.b)
            return 1 === this.a
              ? 'rgb(' + e + ', ' + t + ', ' + r + ')'
              : 'rgba(' + e + ', ' + t + ', ' + r + ', ' + this.roundA + ')'
          }),
          (e.prototype.toPercentageRgb = function () {
            var e = function (e) {
              return Math.round(100 * a(e, 255)) + '%'
            }
            return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a }
          }),
          (e.prototype.toPercentageRgbString = function () {
            var e = function (e) {
              return Math.round(100 * a(e, 255))
            }
            return 1 === this.a
              ? 'rgb(' +
                  e(this.r) +
                  '%, ' +
                  e(this.g) +
                  '%, ' +
                  e(this.b) +
                  '%)'
              : 'rgba(' +
                  e(this.r) +
                  '%, ' +
                  e(this.g) +
                  '%, ' +
                  e(this.b) +
                  '%, ' +
                  this.roundA +
                  ')'
          }),
          (e.prototype.toName = function () {
            if (0 === this.a) return 'transparent'
            if (this.a < 1) return !1
            for (
              var e = '#' + h(this.r, this.g, this.b, !1),
                t = 0,
                r = Object.entries(v);
              t < r.length;
              t++
            ) {
              var n = r[t],
                o = n[0]
              if (e === n[1]) return o
            }
            return !1
          }),
          (e.prototype.toString = function (e) {
            var t = Boolean(e)
            e = null !== e && void 0 !== e ? e : this.format
            var r = !1,
              n = this.a < 1 && this.a >= 0
            return t || !n || (!e.startsWith('hex') && 'name' !== e)
              ? ('rgb' === e && (r = this.toRgbString()),
                'prgb' === e && (r = this.toPercentageRgbString()),
                ('hex' !== e && 'hex6' !== e) || (r = this.toHexString()),
                'hex3' === e && (r = this.toHexString(!0)),
                'hex4' === e && (r = this.toHex8String(!0)),
                'hex8' === e && (r = this.toHex8String()),
                'name' === e && (r = this.toName()),
                'hsl' === e && (r = this.toHslString()),
                'hsv' === e && (r = this.toHsvString()),
                r || this.toHexString())
              : 'name' === e && 0 === this.a
              ? this.toName()
              : this.toRgbString()
          }),
          (e.prototype.toNumber = function () {
            return (
              (Math.round(this.r) << 16) +
              (Math.round(this.g) << 8) +
              Math.round(this.b)
            )
          }),
          (e.prototype.clone = function () {
            return new e(this.toString())
          }),
          (e.prototype.lighten = function (t) {
            void 0 === t && (t = 10)
            var r = this.toHsl()
            return (r.l += t / 100), (r.l = s(r.l)), new e(r)
          }),
          (e.prototype.brighten = function (t) {
            void 0 === t && (t = 10)
            var r = this.toRgb()
            return (
              (r.r = Math.max(
                0,
                Math.min(255, r.r - Math.round((-t / 100) * 255))
              )),
              (r.g = Math.max(
                0,
                Math.min(255, r.g - Math.round((-t / 100) * 255))
              )),
              (r.b = Math.max(
                0,
                Math.min(255, r.b - Math.round((-t / 100) * 255))
              )),
              new e(r)
            )
          }),
          (e.prototype.darken = function (t) {
            void 0 === t && (t = 10)
            var r = this.toHsl()
            return (r.l -= t / 100), (r.l = s(r.l)), new e(r)
          }),
          (e.prototype.tint = function (e) {
            return void 0 === e && (e = 10), this.mix('white', e)
          }),
          (e.prototype.shade = function (e) {
            return void 0 === e && (e = 10), this.mix('black', e)
          }),
          (e.prototype.desaturate = function (t) {
            void 0 === t && (t = 10)
            var r = this.toHsl()
            return (r.s -= t / 100), (r.s = s(r.s)), new e(r)
          }),
          (e.prototype.saturate = function (t) {
            void 0 === t && (t = 10)
            var r = this.toHsl()
            return (r.s += t / 100), (r.s = s(r.s)), new e(r)
          }),
          (e.prototype.greyscale = function () {
            return this.desaturate(100)
          }),
          (e.prototype.spin = function (t) {
            var r = this.toHsl(),
              n = (r.h + t) % 360
            return (r.h = n < 0 ? 360 + n : n), new e(r)
          }),
          (e.prototype.mix = function (t, r) {
            void 0 === r && (r = 50)
            var n = this.toRgb(),
              o = new e(t).toRgb(),
              i = r / 100
            return new e({
              r: (o.r - n.r) * i + n.r,
              g: (o.g - n.g) * i + n.g,
              b: (o.b - n.b) * i + n.b,
              a: (o.a - n.a) * i + n.a,
            })
          }),
          (e.prototype.analogous = function (t, r) {
            void 0 === t && (t = 6), void 0 === r && (r = 30)
            var n = this.toHsl(),
              o = 360 / r,
              i = [this]
            for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
              (n.h = (n.h + o) % 360), i.push(new e(n))
            return i
          }),
          (e.prototype.complement = function () {
            var t = this.toHsl()
            return (t.h = (t.h + 180) % 360), new e(t)
          }),
          (e.prototype.monochromatic = function (t) {
            void 0 === t && (t = 6)
            for (
              var r = this.toHsv(),
                n = r.h,
                o = r.s,
                i = r.v,
                a = [],
                s = 1 / t;
              t--;

            )
              a.push(new e({ h: n, s: o, v: i })), (i = (i + s) % 1)
            return a
          }),
          (e.prototype.splitcomplement = function () {
            var t = this.toHsl(),
              r = t.h
            return [
              this,
              new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
              new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
            ]
          }),
          (e.prototype.onBackground = function (t) {
            var r = this.toRgb(),
              n = new e(t).toRgb()
            return new e({
              r: n.r + (r.r - n.r) * r.a,
              g: n.g + (r.g - n.g) * r.a,
              b: n.b + (r.b - n.b) * r.a,
            })
          }),
          (e.prototype.triad = function () {
            return this.polyad(3)
          }),
          (e.prototype.tetrad = function () {
            return this.polyad(4)
          }),
          (e.prototype.polyad = function (t) {
            for (
              var r = this.toHsl(), n = r.h, o = [this], i = 360 / t, a = 1;
              a < t;
              a++
            )
              o.push(new e({ h: (n + a * i) % 360, s: r.s, l: r.l }))
            return o
          }),
          (e.prototype.equals = function (t) {
            return this.toRgbString() === new e(t).toRgbString()
          }),
          e
        )
      })()
      function E(e) {
        if (
          (void 0 === e && (e = {}), void 0 !== e.count && null !== e.count)
        ) {
          var t = e.count,
            r = []
          for (e.count = void 0; t > r.length; )
            (e.count = null), e.seed && (e.seed += 1), r.push(E(e))
          return (e.count = t), r
        }
        var n = (function (e, t) {
            var r = _(
              (function (e) {
                var t = parseInt(e, 10)
                if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t]
                if ('string' === typeof e) {
                  var r = P.find(function (t) {
                    return t.name === e
                  })
                  if (r) {
                    var n = A(r)
                    if (n.hueRange) return n.hueRange
                  }
                  var o = new C(e)
                  if (o.isValid) {
                    var i = o.toHsv().h
                    return [i, i]
                  }
                }
                return [0, 360]
              })(e),
              t
            )
            r < 0 && (r = 360 + r)
            return r
          })(e.hue, e.seed),
          o = (function (e, t) {
            if ('monochrome' === t.hue) return 0
            if ('random' === t.luminosity) return _([0, 100], t.seed)
            var r = R(e).saturationRange,
              n = r[0],
              o = r[1]
            switch (t.luminosity) {
              case 'bright':
                n = 55
                break
              case 'dark':
                n = o - 10
                break
              case 'light':
                o = 55
            }
            return _([n, o], t.seed)
          })(n, e),
          i = (function (e, t, r) {
            var n = (function (e, t) {
                for (var r = R(e).lowerBounds, n = 0; n < r.length - 1; n++) {
                  var o = r[n][0],
                    i = r[n][1],
                    a = r[n + 1][0],
                    s = r[n + 1][1]
                  if (t >= o && t <= a) {
                    var u = (s - i) / (a - o)
                    return u * t + (i - u * o)
                  }
                }
                return 0
              })(e, t),
              o = 100
            switch (r.luminosity) {
              case 'dark':
                o = n + 20
                break
              case 'light':
                n = (o + n) / 2
                break
              case 'random':
                ;(n = 0), (o = 100)
            }
            return _([n, o], r.seed)
          })(n, o, e),
          a = { h: n, s: o, v: i }
        return void 0 !== e.alpha && (a.a = e.alpha), new C(a)
      }
      function R(e) {
        e >= 334 && e <= 360 && (e -= 360)
        for (var t = 0, r = P; t < r.length; t++) {
          var n = A(r[t])
          if (n.hueRange && e >= n.hueRange[0] && e <= n.hueRange[1]) return n
        }
        throw Error('Color not found')
      }
      function _(e, t) {
        if (void 0 === t)
          return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]))
        var r = e[1] || 1,
          n = e[0] || 0,
          o = (t = (9301 * t + 49297) % 233280) / 233280
        return Math.floor(n + o * (r - n))
      }
      function A(e) {
        var t = e.lowerBounds[0][0],
          r = e.lowerBounds[e.lowerBounds.length - 1][0],
          n = e.lowerBounds[e.lowerBounds.length - 1][1],
          o = e.lowerBounds[0][1]
        return {
          name: e.name,
          hueRange: e.hueRange,
          lowerBounds: e.lowerBounds,
          saturationRange: [t, r],
          brightnessRange: [n, o],
        }
      }
      var P = [
          {
            name: 'monochrome',
            hueRange: null,
            lowerBounds: [
              [0, 0],
              [100, 0],
            ],
          },
          {
            name: 'red',
            hueRange: [-26, 18],
            lowerBounds: [
              [20, 100],
              [30, 92],
              [40, 89],
              [50, 85],
              [60, 78],
              [70, 70],
              [80, 60],
              [90, 55],
              [100, 50],
            ],
          },
          {
            name: 'orange',
            hueRange: [19, 46],
            lowerBounds: [
              [20, 100],
              [30, 93],
              [40, 88],
              [50, 86],
              [60, 85],
              [70, 70],
              [100, 70],
            ],
          },
          {
            name: 'yellow',
            hueRange: [47, 62],
            lowerBounds: [
              [25, 100],
              [40, 94],
              [50, 89],
              [60, 86],
              [70, 84],
              [80, 82],
              [90, 80],
              [100, 75],
            ],
          },
          {
            name: 'green',
            hueRange: [63, 178],
            lowerBounds: [
              [30, 100],
              [40, 90],
              [50, 85],
              [60, 81],
              [70, 74],
              [80, 64],
              [90, 50],
              [100, 40],
            ],
          },
          {
            name: 'blue',
            hueRange: [179, 257],
            lowerBounds: [
              [20, 100],
              [30, 86],
              [40, 80],
              [50, 74],
              [60, 60],
              [70, 52],
              [80, 44],
              [90, 39],
              [100, 35],
            ],
          },
          {
            name: 'purple',
            hueRange: [258, 282],
            lowerBounds: [
              [20, 100],
              [30, 87],
              [40, 79],
              [50, 70],
              [60, 65],
              [70, 59],
              [80, 52],
              [90, 45],
              [100, 42],
            ],
          },
          {
            name: 'pink',
            hueRange: [283, 334],
            lowerBounds: [
              [20, 100],
              [30, 90],
              [40, 86],
              [60, 84],
              [80, 80],
              [90, 75],
              [100, 73],
            ],
          },
        ],
        j = r(9703),
        T = function (e, t, r) {
          var n = (0, j.Wf)(e, 'colors.' + t, t)
          return new C(n).isValid ? n : r
        },
        B = function (e) {
          return function (t) {
            var r = T(t, e)
            return new C(r).isDark() ? 'dark' : 'light'
          }
        },
        z = function (e, t) {
          return function (r) {
            var n = T(r, e)
            return new C(n).setAlpha(t).toRgbString()
          }
        }
      function L(e, t) {
        return (
          void 0 === e && (e = '1rem'),
          void 0 === t && (t = 'rgba(255, 255, 255, 0.15)'),
          {
            backgroundImage:
              'linear-gradient(\n    45deg,\n    ' +
              t +
              ' 25%,\n    transparent 25%,\n    transparent 50%,\n    ' +
              t +
              ' 50%,\n    ' +
              t +
              ' 75%,\n    transparent 75%,\n    transparent\n  )',
            backgroundSize: e + ' ' + e,
          }
        )
      }
      function I(e) {
        var t = E().toHexString()
        return !e || (0, j.Qr)(e)
          ? t
          : e.string && e.colors
          ? (function (e, t) {
              var r = 0
              if (0 === e.length) return t[0]
              for (var n = 0; n < e.length; n += 1)
                (r = e.charCodeAt(n) + ((r << 5) - r)), (r &= r)
              return (r = ((r % t.length) + t.length) % t.length), t[r]
            })(e.string, e.colors)
          : e.string && !e.colors
          ? (function (e) {
              var t = 0
              if (0 === e.length) return t.toString()
              for (var r = 0; r < e.length; r += 1)
                (t = e.charCodeAt(r) + ((t << 5) - t)), (t &= t)
              for (var n = '#', o = 0; o < 3; o += 1) {
                n += ('00' + ((t >> (8 * o)) & 255).toString(16)).substr(-2)
              }
              return n
            })(e.string)
          : e.colors && !e.string
          ? (function (e) {
              return e[Math.floor(Math.random() * e.length)]
            })(e.colors)
          : t
      }
      function F(e, t) {
        return function (r) {
          return 'dark' === r.colorMode ? t : e
        }
      }
      function D(e) {
        var t = e.orientation,
          r = e.vertical,
          n = e.horizontal
        return t ? ('vertical' === t ? r : n) : {}
      }
      function M() {
        return (
          (M =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          M.apply(this, arguments)
        )
      }
      function N(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      var H = (function () {
        function e(e) {
          var t = this
          ;(this.map = {}),
            (this.called = !1),
            (this.assert = function () {
              if (t.called)
                throw new Error(
                  '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
                )
              t.called = !0
            }),
            (this.parts = function () {
              t.assert()
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n]
              for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o]
                t.map[a] = t.toPart(a)
              }
              return t
            }),
            (this.extend = function () {
              for (
                var e = arguments.length, r = new Array(e), n = 0;
                n < e;
                n++
              )
                r[n] = arguments[n]
              for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o]
                a in t.map || (t.map[a] = t.toPart(a))
              }
              return t
            }),
            (this.toPart = function (e) {
              var r =
                'chakra-' +
                (['container', 'root'].includes(null != e ? e : '')
                  ? [t.name]
                  : [t.name, e]
                )
                  .filter(Boolean)
                  .join('__')
              return {
                className: r,
                selector: '.' + r,
                toString: function () {
                  return e
                },
              }
            }),
            (this.__type = {})
        }
        var t, r, n
        return (
          (t = e),
          (r = [
            {
              key: 'selectors',
              get: function () {
                return (0, j.sq)(
                  Object.entries(this.map).map(function (e) {
                    return [e[0], e[1].selector]
                  })
                )
              },
            },
            {
              key: 'classNames',
              get: function () {
                return (0, j.sq)(
                  Object.entries(this.map).map(function (e) {
                    return [e[0], e[1].className]
                  })
                )
              },
            },
            {
              key: 'keys',
              get: function () {
                return Object.keys(this.map)
              },
            },
          ]) && N(t.prototype, r),
          n && N(t, n),
          e
        )
      })()
      function W(e) {
        return new H(e)
      }
      function U(e) {
        return (0, j.Kn)(e) && e.reference ? e.reference : String(e)
      }
      var $ = function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n]
          return r
            .map(U)
            .join(' ' + e + ' ')
            .replace(/calc/g, '')
        },
        q = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + $.apply(void 0, ['+'].concat(t)) + ')'
        },
        V = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + $.apply(void 0, ['-'].concat(t)) + ')'
        },
        Z = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + $.apply(void 0, ['*'].concat(t)) + ')'
        },
        X = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return 'calc(' + $.apply(void 0, ['/'].concat(t)) + ')'
        },
        K = function (e) {
          var t = U(e)
          return null == t || Number.isNaN(parseFloat(t))
            ? Z(t, -1)
            : String(t).startsWith('-')
            ? String(t).slice(1)
            : '-' + t
        },
        G = Object.assign(
          function (e) {
            return {
              add: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return G(q.apply(void 0, [e].concat(r)))
              },
              subtract: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return G(V.apply(void 0, [e].concat(r)))
              },
              multiply: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return G(Z.apply(void 0, [e].concat(r)))
              },
              divide: function () {
                for (
                  var t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n]
                return G(X.apply(void 0, [e].concat(r)))
              },
              negate: function () {
                return G(K(e))
              },
              toString: function () {
                return e.toString()
              },
            }
          },
          { add: q, subtract: V, multiply: Z, divide: X, negate: K }
        )
      function Y(e) {
        var t = (function (e, t) {
          return void 0 === t && (t = '-'), e.replace(/\s+/g, t)
        })(e.toString())
        return t.includes('\\.')
          ? e
          : (function (e) {
              return !Number.isInteger(parseFloat(e.toString()))
            })(e)
          ? t.replace('.', '\\.')
          : e
      }
      function J(e, t) {
        return 'var(' + Y(e) + (t ? ', ' + t : '') + ')'
      }
      function Q(e, t) {
        return (
          void 0 === t && (t = ''),
          '--' +
            (function (e, t) {
              return (
                void 0 === t && (t = ''), [t, Y(e)].filter(Boolean).join('-')
              )
            })(e, t)
        )
      }
      function ee(e, t) {
        var r = Q(e, null == t ? void 0 : t.prefix)
        return {
          variable: r,
          reference: J(r, te(null == t ? void 0 : t.fallback)),
        }
      }
      function te(e) {
        return 'string' === typeof e ? e : null == e ? void 0 : e.reference
      }
      var re = W('accordion')
          .parts('root', 'container', 'button', 'panel')
          .extend('icon'),
        ne = W('alert')
          .parts('title', 'description', 'container')
          .extend('icon'),
        oe = W('avatar')
          .parts('label', 'badge', 'container')
          .extend('excessLabel', 'group'),
        ie = W('breadcrumb')
          .parts('link', 'item', 'container')
          .extend('separator'),
        ae =
          (W('button').parts(),
          W('checkbox').parts('control', 'icon', 'container').extend('label')),
        se =
          (W('progress').parts('track', 'filledTrack').extend('label'),
          W('drawer')
            .parts('overlay', 'dialogContainer', 'dialog')
            .extend('header', 'closeButton', 'body', 'footer')),
        ue = W('editable').parts('preview', 'input', 'textarea'),
        le = W('form').parts('container', 'requiredIndicator', 'helperText'),
        ce = W('formError').parts('text', 'icon'),
        fe = W('input').parts('addon', 'field', 'element'),
        de = W('list').parts('container', 'item', 'icon'),
        pe = W('menu')
          .parts('button', 'list', 'item')
          .extend('groupTitle', 'command', 'divider'),
        he = W('modal')
          .parts('overlay', 'dialogContainer', 'dialog')
          .extend('header', 'closeButton', 'body', 'footer'),
        ge = W('numberinput').parts('root', 'field', 'stepperGroup', 'stepper'),
        me =
          (W('pininput').parts('field'),
          W('popover')
            .parts('content', 'header', 'body', 'footer')
            .extend('popper', 'arrow', 'closeButton')),
        be = W('progress').parts('label', 'filledTrack', 'track'),
        ve = W('radio').parts('container', 'control', 'label'),
        ye = W('select').parts('field', 'icon'),
        xe = W('slider').parts('container', 'track', 'thumb', 'filledTrack'),
        we = W('stat').parts(
          'container',
          'label',
          'helpText',
          'number',
          'icon'
        ),
        ke = W('switch').parts('container', 'track', 'thumb'),
        Se = W('table').parts(
          'table',
          'thead',
          'tbody',
          'tr',
          'th',
          'td',
          'tfoot',
          'caption'
        ),
        Oe = W('tabs').parts(
          'root',
          'tab',
          'tablist',
          'tabpanel',
          'tabpanels',
          'indicator'
        ),
        Ce = W('tag').parts('container', 'label', 'closeButton'),
        Ee = {
          letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          lineHeights: {
            normal: 'normal',
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          fonts: {
            heading:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          },
          fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
          },
        },
        Re = r(8554),
        _e = r.n(Re),
        Ae = r(917),
        Pe = {
          root: {},
          container: {
            borderTopWidth: '1px',
            borderColor: 'inherit',
            _last: { borderBottomWidth: '1px' },
          },
          button: {
            transitionProperty: 'common',
            transitionDuration: 'normal',
            fontSize: '1rem',
            _focus: { boxShadow: 'outline' },
            _hover: { bg: 'blackAlpha.50' },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
            px: 4,
            py: 2,
          },
          panel: { pt: 2, px: 4, pb: 5 },
          icon: { fontSize: '1.25em' },
        },
        je = { parts: re.keys, baseStyle: Pe }
      function Te(e) {
        var t = e.theme,
          r = e.colorScheme
        return F(T(t, r + '.100', r), z(r + '.200', 0.16)(t))(e)
      }
      var Be = {
          subtle: function (e) {
            var t = e.colorScheme
            return {
              container: { bg: Te(e) },
              icon: { color: F(t + '.500', t + '.200')(e) },
            }
          },
          'left-accent': function (e) {
            var t = e.colorScheme
            return {
              container: {
                paddingStart: 3,
                borderStartWidth: '4px',
                borderStartColor: F(t + '.500', t + '.200')(e),
                bg: Te(e),
              },
              icon: { color: F(t + '.500', t + '.200')(e) },
            }
          },
          'top-accent': function (e) {
            var t = e.colorScheme
            return {
              container: {
                pt: 2,
                borderTopWidth: '4px',
                borderTopColor: F(t + '.500', t + '.200')(e),
                bg: Te(e),
              },
              icon: { color: F(t + '.500', t + '.200')(e) },
            }
          },
          solid: function (e) {
            var t = e.colorScheme
            return {
              container: {
                bg: F(t + '.500', t + '.200')(e),
                color: F('white', 'gray.900')(e),
              },
            }
          },
        },
        ze = {
          parts: ne.keys,
          baseStyle: {
            container: { px: 4, py: 3 },
            title: { fontWeight: 'bold', lineHeight: 6, marginEnd: 2 },
            description: { lineHeight: 6 },
            icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
          },
          variants: Be,
          defaultProps: { variant: 'subtle', colorScheme: 'blue' },
        },
        Le = function (e) {
          return {
            transform: 'translate(25%, 25%)',
            borderRadius: 'full',
            border: '0.2em solid',
            borderColor: F('white', 'gray.800')(e),
          }
        },
        Ie = function (e) {
          return { bg: F('gray.200', 'whiteAlpha.400')(e) }
        },
        Fe = function (e) {
          var t = e.name,
            r = e.theme,
            n = t ? I({ string: t }) : 'gray.400',
            o = (function (e) {
              return function (t) {
                return 'dark' === B(e)(t)
              }
            })(n)(r),
            i = 'white'
          return (
            o || (i = 'gray.800'),
            {
              bg: n,
              color: i,
              borderColor: F('white', 'gray.800')(e),
              verticalAlign: 'top',
            }
          )
        }
      function De(e) {
        var t = i[e]
        return {
          container: {
            width: e,
            height: e,
            fontSize: 'calc(' + (null != t ? t : e) + ' / 2.5)',
          },
          excessLabel: { width: e, height: e },
          label: {
            fontSize: 'calc(' + (null != t ? t : e) + ' / 2.5)',
            lineHeight: '100%' !== e ? (null != t ? t : e) : void 0,
          },
        }
      }
      var Me,
        Ne,
        He,
        We = {
          '2xs': De('4'),
          xs: De('6'),
          sm: De('8'),
          md: De('12'),
          lg: De('16'),
          xl: De('24'),
          '2xl': De('32'),
          full: De('100%'),
        },
        Ue = {
          parts: oe.keys,
          baseStyle: function (e) {
            return { badge: Le(e), excessLabel: Ie(e), container: Fe(e) }
          },
          sizes: We,
          defaultProps: { size: 'md' },
        },
        $e = {
          solid: function (e) {
            var t = e.colorScheme,
              r = e.theme
            return {
              bg: F(t + '.500', z(t + '.500', 0.6)(r))(e),
              color: F('white', 'whiteAlpha.800')(e),
            }
          },
          subtle: function (e) {
            var t = e.colorScheme,
              r = e.theme
            return {
              bg: F(t + '.100', z(t + '.200', 0.16)(r))(e),
              color: F(t + '.800', t + '.200')(e),
            }
          },
          outline: function (e) {
            var t = e.colorScheme,
              r = e.theme,
              n = z(t + '.200', 0.8)(r),
              o = F(T(r, t + '.500'), n)(e)
            return { color: o, boxShadow: 'inset 0 0 0px 1px ' + o }
          },
        },
        qe = {
          baseStyle: {
            px: 1,
            textTransform: 'uppercase',
            fontSize: 'xs',
            borderRadius: 'sm',
            fontWeight: 'bold',
          },
          variants: $e,
          defaultProps: { variant: 'subtle', colorScheme: 'gray' },
        },
        Ve = {
          link: {
            transitionProperty: 'common',
            transitionDuration: 'fast',
            transitionTimingFunction: 'ease-out',
            cursor: 'pointer',
            textDecoration: 'none',
            outline: 'none',
            color: 'inherit',
            _hover: { textDecoration: 'underline' },
            _focus: { boxShadow: 'outline' },
          },
        },
        Ze = { parts: ie.keys, baseStyle: Ve },
        Xe = function (e) {
          var t = e.colorScheme,
            r = e.theme
          if ('gray' === t)
            return {
              color: F('inherit', 'whiteAlpha.900')(e),
              _hover: { bg: F('gray.100', 'whiteAlpha.200')(e) },
              _active: { bg: F('gray.200', 'whiteAlpha.300')(e) },
            }
          var n = z(t + '.200', 0.12)(r),
            o = z(t + '.200', 0.24)(r)
          return {
            color: F(t + '.600', t + '.200')(e),
            bg: 'transparent',
            _hover: { bg: F(t + '.50', n)(e) },
            _active: { bg: F(t + '.100', o)(e) },
          }
        },
        Ke = {
          yellow: {
            bg: 'yellow.400',
            color: 'black',
            hoverBg: 'yellow.500',
            activeBg: 'yellow.600',
          },
          cyan: {
            bg: 'cyan.400',
            color: 'black',
            hoverBg: 'cyan.500',
            activeBg: 'cyan.600',
          },
        },
        Ge = {
          baseStyle: {
            lineHeight: '1.2',
            borderRadius: 'md',
            fontWeight: 'semibold',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _focus: { boxShadow: 'outline' },
            _disabled: {
              opacity: 0.4,
              cursor: 'not-allowed',
              boxShadow: 'none',
            },
            _hover: { _disabled: { bg: 'initial' } },
          },
          variants: {
            ghost: Xe,
            outline: function (e) {
              var t = e.colorScheme,
                r = F('gray.200', 'whiteAlpha.300')(e)
              return o(
                {
                  border: '1px solid',
                  borderColor: 'gray' === t ? r : 'currentColor',
                },
                Xe(e)
              )
            },
            solid: function (e) {
              var t,
                r = e.colorScheme
              if ('gray' === r) {
                var n = F('gray.100', 'whiteAlpha.200')(e)
                return {
                  bg: n,
                  _hover: {
                    bg: F('gray.200', 'whiteAlpha.300')(e),
                    _disabled: { bg: n },
                  },
                  _active: { bg: F('gray.300', 'whiteAlpha.400')(e) },
                }
              }
              var o = null != (t = Ke[r]) ? t : {},
                i = o.bg,
                a = void 0 === i ? r + '.500' : i,
                s = o.color,
                u = void 0 === s ? 'white' : s,
                l = o.hoverBg,
                c = void 0 === l ? r + '.600' : l,
                f = o.activeBg,
                d = void 0 === f ? r + '.700' : f,
                p = F(a, r + '.200')(e)
              return {
                bg: p,
                color: F(u, 'gray.800')(e),
                _hover: { bg: F(c, r + '.300')(e), _disabled: { bg: p } },
                _active: { bg: F(d, r + '.400')(e) },
              }
            },
            link: function (e) {
              var t = e.colorScheme
              return {
                padding: 0,
                height: 'auto',
                lineHeight: 'normal',
                verticalAlign: 'baseline',
                color: F(t + '.500', t + '.200')(e),
                _hover: {
                  textDecoration: 'underline',
                  _disabled: { textDecoration: 'none' },
                },
                _active: { color: F(t + '.700', t + '.500')(e) },
              }
            },
            unstyled: {
              bg: 'none',
              color: 'inherit',
              display: 'inline',
              lineHeight: 'inherit',
              m: 0,
              p: 0,
            },
          },
          sizes: {
            lg: { h: 12, minW: 12, fontSize: 'lg', px: 6 },
            md: { h: 10, minW: 10, fontSize: 'md', px: 4 },
            sm: { h: 8, minW: 8, fontSize: 'sm', px: 3 },
            xs: { h: 6, minW: 6, fontSize: 'xs', px: 2 },
          },
          defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
        },
        Ye = function (e) {
          var t = e.colorScheme
          return {
            w: '100%',
            transitionProperty: 'box-shadow',
            transitionDuration: 'normal',
            border: '2px solid',
            borderRadius: 'sm',
            borderColor: 'inherit',
            color: 'white',
            _checked: {
              bg: F(t + '.500', t + '.200')(e),
              borderColor: F(t + '.500', t + '.200')(e),
              color: F('white', 'gray.900')(e),
              _hover: {
                bg: F(t + '.600', t + '.300')(e),
                borderColor: F(t + '.600', t + '.300')(e),
              },
              _disabled: {
                borderColor: F('gray.200', 'transparent')(e),
                bg: F('gray.200', 'whiteAlpha.300')(e),
                color: F('gray.500', 'whiteAlpha.500')(e),
              },
            },
            _indeterminate: {
              bg: F(t + '.500', t + '.200')(e),
              borderColor: F(t + '.500', t + '.200')(e),
              color: F('white', 'gray.900')(e),
            },
            _disabled: {
              bg: F('gray.100', 'whiteAlpha.100')(e),
              borderColor: F('gray.100', 'transparent')(e),
            },
            _focus: { boxShadow: 'outline' },
            _invalid: { borderColor: F('red.500', 'red.300')(e) },
          }
        },
        Je = { userSelect: 'none', _disabled: { opacity: 0.4 } },
        Qe = { transitionProperty: 'transform', transitionDuration: 'normal' },
        et = {
          parts: ae.keys,
          baseStyle: function (e) {
            return { icon: Qe, control: Ye(e), label: Je }
          },
          sizes: {
            sm: {
              control: { h: 3, w: 3 },
              label: { fontSize: 'sm' },
              icon: { fontSize: '0.45rem' },
            },
            md: {
              control: { w: 4, h: 4 },
              label: { fontSize: 'md' },
              icon: { fontSize: '0.625rem' },
            },
            lg: {
              control: { w: 5, h: 5 },
              label: { fontSize: 'lg' },
              icon: { fontSize: '0.625rem' },
            },
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        },
        tt = ee('close-button-size'),
        rt = {
          baseStyle: function (e) {
            var t = F('blackAlpha.100', 'whiteAlpha.100')(e),
              r = F('blackAlpha.200', 'whiteAlpha.200')(e)
            return {
              w: [tt.reference],
              h: [tt.reference],
              borderRadius: 'md',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              _disabled: {
                opacity: 0.4,
                cursor: 'not-allowed',
                boxShadow: 'none',
              },
              _hover: { bg: t },
              _active: { bg: r },
              _focus: { boxShadow: 'outline' },
            }
          },
          sizes: {
            lg:
              ((Me = {}),
              (Me[tt.variable] = '40px'),
              (Me.fontSize = '16px'),
              Me),
            md:
              ((Ne = {}),
              (Ne[tt.variable] = '32px'),
              (Ne.fontSize = '12px'),
              Ne),
            sm:
              ((He = {}),
              (He[tt.variable] = '24px'),
              (He.fontSize = '10px'),
              He),
          },
          defaultProps: { size: 'md' },
        },
        nt = {
          baseStyle: {
            fontFamily: 'mono',
            fontSize: 'sm',
            px: '0.2em',
            borderRadius: 'sm',
          },
          variants: qe.variants,
          defaultProps: qe.defaultProps,
        },
        ot = { baseStyle: { w: '100%', mx: 'auto', maxW: '60ch', px: '1rem' } },
        it = {
          baseStyle: { opacity: 0.6, borderColor: 'inherit' },
          variants: {
            solid: { borderStyle: 'solid' },
            dashed: { borderStyle: 'dashed' },
          },
          defaultProps: { variant: 'solid' },
        }
      function at(e) {
        return 'full' === e
          ? { dialog: { maxW: '100vw', h: '100vh' } }
          : { dialog: { maxW: e } }
      }
      var st = { bg: 'blackAlpha.600', zIndex: 'overlay' },
        ut = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
        lt = function (e) {
          return o({}, e.isFullHeight && { height: '100vh' }, {
            zIndex: 'modal',
            maxH: '100vh',
            bg: F('white', 'gray.700')(e),
            color: 'inherit',
            boxShadow: F('lg', 'dark-lg')(e),
          })
        },
        ct = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
        ft = { position: 'absolute', top: 2, insetEnd: 3 },
        dt = { px: 6, py: 2, flex: 1, overflow: 'auto' },
        pt = { px: 6, py: 4 },
        ht = {
          xs: at('xs'),
          sm: at('md'),
          md: at('lg'),
          lg: at('2xl'),
          xl: at('4xl'),
          full: at('full'),
        },
        gt = {
          parts: se.keys,
          baseStyle: function (e) {
            return {
              overlay: st,
              dialogContainer: ut,
              dialog: lt(e),
              header: ct,
              closeButton: ft,
              body: dt,
              footer: pt,
            }
          },
          sizes: ht,
          defaultProps: { size: 'xs' },
        },
        mt = {
          preview: {
            borderRadius: 'md',
            py: '3px',
            transitionProperty: 'common',
            transitionDuration: 'normal',
          },
          input: {
            borderRadius: 'md',
            py: '3px',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            width: 'full',
            _focus: { boxShadow: 'outline' },
            _placeholder: { opacity: 0.6 },
          },
          textarea: {
            borderRadius: 'md',
            py: '3px',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            width: 'full',
            _focus: { boxShadow: 'outline' },
            _placeholder: { opacity: 0.6 },
          },
        },
        bt = { parts: ue.keys, baseStyle: mt },
        vt = function (e) {
          return { marginStart: 1, color: F('red.500', 'red.300')(e) }
        },
        yt = function (e) {
          return {
            mt: 2,
            color: F('gray.500', 'whiteAlpha.600')(e),
            lineHeight: 'normal',
            fontSize: 'sm',
          }
        },
        xt = {
          parts: le.keys,
          baseStyle: function (e) {
            return {
              container: { width: '100%', position: 'relative' },
              requiredIndicator: vt(e),
              helperText: yt(e),
            }
          },
        },
        wt = function (e) {
          return {
            color: F('red.500', 'red.300')(e),
            mt: 2,
            fontSize: 'sm',
            lineHeight: 'normal',
          }
        },
        kt = function (e) {
          return { marginEnd: '0.5em', color: F('red.500', 'red.300')(e) }
        },
        St = {
          parts: ce.keys,
          baseStyle: function (e) {
            return { text: wt(e), icon: kt(e) }
          },
        },
        Ot = {
          baseStyle: {
            fontSize: 'md',
            marginEnd: 3,
            mb: 2,
            fontWeight: 'medium',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            opacity: 1,
            _disabled: { opacity: 0.4 },
          },
        },
        Ct = {
          baseStyle: { fontFamily: 'heading', fontWeight: 'bold' },
          sizes: {
            '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
            '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
            '2xl': {
              fontSize: ['4xl', null, '5xl'],
              lineHeight: [1.2, null, 1],
            },
            xl: {
              fontSize: ['3xl', null, '4xl'],
              lineHeight: [1.33, null, 1.2],
            },
            lg: {
              fontSize: ['2xl', null, '3xl'],
              lineHeight: [1.33, null, 1.2],
            },
            md: { fontSize: 'xl', lineHeight: 1.2 },
            sm: { fontSize: 'md', lineHeight: 1.2 },
            xs: { fontSize: 'sm', lineHeight: 1.2 },
          },
          defaultProps: { size: 'xl' },
        },
        Et = {
          lg: { fontSize: 'lg', px: 4, h: 12, borderRadius: 'md' },
          md: { fontSize: 'md', px: 4, h: 10, borderRadius: 'md' },
          sm: { fontSize: 'sm', px: 3, h: 8, borderRadius: 'sm' },
          xs: { fontSize: 'xs', px: 2, h: 6, borderRadius: 'sm' },
        },
        Rt = {
          lg: { field: Et.lg, addon: Et.lg },
          md: { field: Et.md, addon: Et.md },
          sm: { field: Et.sm, addon: Et.sm },
          xs: { field: Et.xs, addon: Et.xs },
        }
      function _t(e) {
        var t = e.focusBorderColor,
          r = e.errorBorderColor
        return {
          focusBorderColor: t || F('blue.500', 'blue.300')(e),
          errorBorderColor: r || F('red.500', 'red.300')(e),
        }
      }
      var At = {
          outline: function (e) {
            var t = e.theme,
              r = _t(e),
              n = r.focusBorderColor,
              o = r.errorBorderColor
            return {
              field: {
                border: '1px solid',
                borderColor: 'inherit',
                bg: 'inherit',
                _hover: { borderColor: F('gray.300', 'whiteAlpha.400')(e) },
                _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                _disabled: { opacity: 0.4, cursor: 'not-allowed' },
                _invalid: {
                  borderColor: T(t, o),
                  boxShadow: '0 0 0 1px ' + T(t, o),
                },
                _focus: {
                  zIndex: 1,
                  borderColor: T(t, n),
                  boxShadow: '0 0 0 1px ' + T(t, n),
                },
              },
              addon: {
                border: '1px solid',
                borderColor: F('inherit', 'whiteAlpha.50')(e),
                bg: F('gray.100', 'whiteAlpha.300')(e),
              },
            }
          },
          filled: function (e) {
            var t = e.theme,
              r = _t(e),
              n = r.focusBorderColor,
              o = r.errorBorderColor
            return {
              field: {
                border: '2px solid',
                borderColor: 'transparent',
                bg: F('gray.100', 'whiteAlpha.50')(e),
                _hover: { bg: F('gray.200', 'whiteAlpha.100')(e) },
                _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                _disabled: { opacity: 0.4, cursor: 'not-allowed' },
                _invalid: { borderColor: T(t, o) },
                _focus: { bg: 'transparent', borderColor: T(t, n) },
              },
              addon: {
                border: '2px solid',
                borderColor: 'transparent',
                bg: F('gray.100', 'whiteAlpha.50')(e),
              },
            }
          },
          flushed: function (e) {
            var t = e.theme,
              r = _t(e),
              n = r.focusBorderColor,
              o = r.errorBorderColor
            return {
              field: {
                borderBottom: '1px solid',
                borderColor: 'inherit',
                borderRadius: 0,
                px: 0,
                bg: 'transparent',
                _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                _invalid: {
                  borderColor: T(t, o),
                  boxShadow: '0px 1px 0px 0px ' + T(t, o),
                },
                _focus: {
                  borderColor: T(t, n),
                  boxShadow: '0px 1px 0px 0px ' + T(t, n),
                },
              },
              addon: {
                borderBottom: '2px solid',
                borderColor: 'inherit',
                borderRadius: 0,
                px: 0,
                bg: 'transparent',
              },
            }
          },
          unstyled: {
            field: { bg: 'transparent', px: 0, height: 'auto' },
            addon: { bg: 'transparent', px: 0, height: 'auto' },
          },
        },
        Pt = {
          parts: fe.keys,
          baseStyle: {
            field: {
              width: '100%',
              minWidth: 0,
              outline: 0,
              position: 'relative',
              appearance: 'none',
              transitionProperty: 'common',
              transitionDuration: 'normal',
            },
          },
          sizes: Rt,
          variants: At,
          defaultProps: { size: 'md', variant: 'outline' },
        },
        jt = {
          baseStyle: function (e) {
            return {
              bg: F('gray.100', 'whiteAlpha')(e),
              borderRadius: 'md',
              borderWidth: '1px',
              borderBottomWidth: '3px',
              fontSize: '0.8em',
              fontWeight: 'bold',
              lineHeight: 'normal',
              px: '0.4em',
              whiteSpace: 'nowrap',
            }
          },
        },
        Tt = {
          baseStyle: {
            transitionProperty: 'common',
            transitionDuration: 'fast',
            transitionTimingFunction: 'ease-out',
            cursor: 'pointer',
            textDecoration: 'none',
            outline: 'none',
            color: 'inherit',
            _hover: { textDecoration: 'underline' },
            _focus: { boxShadow: 'outline' },
          },
        },
        Bt = {
          container: {},
          item: {},
          icon: {
            marginEnd: '0.5rem',
            display: 'inline',
            verticalAlign: 'text-bottom',
          },
        },
        zt = { parts: de.keys, baseStyle: Bt },
        Lt = function (e) {
          return {
            bg: F('#fff', 'gray.700')(e),
            boxShadow: F('sm', 'dark-lg')(e),
            color: 'inherit',
            minW: '3xs',
            py: '2',
            zIndex: 1,
            borderRadius: 'md',
            borderWidth: '1px',
          }
        },
        It = function (e) {
          return {
            py: '0.4rem',
            px: '0.8rem',
            transitionProperty: 'background',
            transitionDuration: 'ultra-fast',
            transitionTimingFunction: 'ease-in',
            _focus: { bg: F('gray.100', 'whiteAlpha.100')(e) },
            _active: { bg: F('gray.200', 'whiteAlpha.200')(e) },
            _expanded: { bg: F('gray.100', 'whiteAlpha.100')(e) },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          }
        },
        Ft = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
        Dt = { opacity: 0.6 },
        Mt = {
          border: 0,
          borderBottom: '1px solid',
          borderColor: 'inherit',
          my: '0.5rem',
          opacity: 0.6,
        },
        Nt = { transitionProperty: 'common', transitionDuration: 'normal' },
        Ht = {
          parts: pe.keys,
          baseStyle: function (e) {
            return {
              button: Nt,
              list: Lt(e),
              item: It(e),
              groupTitle: Ft,
              command: Dt,
              divider: Mt,
            }
          },
        },
        Wt = { bg: 'blackAlpha.600', zIndex: 'modal' },
        Ut = function (e) {
          return {
            display: 'flex',
            zIndex: 'modal',
            justifyContent: 'center',
            alignItems: e.isCentered ? 'center' : 'flex-start',
            overflow: 'inside' === e.scrollBehavior ? 'hidden' : 'auto',
          }
        },
        $t = function (e) {
          var t = e.scrollBehavior
          return {
            borderRadius: 'md',
            bg: F('white', 'gray.700')(e),
            color: 'inherit',
            my: '3.75rem',
            zIndex: 'modal',
            maxH: 'inside' === t ? 'calc(100% - 7.5rem)' : void 0,
            boxShadow: F('lg', 'dark-lg')(e),
          }
        },
        qt = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
        Vt = { position: 'absolute', top: 2, insetEnd: 3 },
        Zt = function (e) {
          return {
            px: 6,
            py: 2,
            flex: 1,
            overflow: 'inside' === e.scrollBehavior ? 'auto' : void 0,
          }
        },
        Xt = { px: 6, py: 4 }
      function Kt(e) {
        return 'full' === e
          ? {
              dialog: {
                maxW: '100vw',
                minH: '100vh',
                '@supports(min-height: -webkit-fill-available)': {
                  minH: '-webkit-fill-available',
                },
                my: 0,
              },
            }
          : { dialog: { maxW: e } }
      }
      var Gt,
        Yt,
        Jt,
        Qt = {
          xs: Kt('xs'),
          sm: Kt('sm'),
          md: Kt('md'),
          lg: Kt('lg'),
          xl: Kt('xl'),
          '2xl': Kt('2xl'),
          '3xl': Kt('3xl'),
          '4xl': Kt('4xl'),
          '5xl': Kt('5xl'),
          '6xl': Kt('6xl'),
          full: Kt('full'),
        },
        er = {
          parts: he.keys,
          baseStyle: function (e) {
            return {
              overlay: Wt,
              dialogContainer: Ut(e),
              dialog: $t(e),
              header: qt,
              closeButton: Vt,
              body: Zt(e),
              footer: Xt,
            }
          },
          sizes: Qt,
          defaultProps: { size: 'md' },
        },
        tr = Pt.variants,
        rr = Pt.defaultProps,
        nr = ee('number-input-stepper-width'),
        or = ee('number-input-input-padding'),
        ir = G(nr).add('0.5rem').toString(),
        ar = (((Gt = {})[nr.variable] = '24px'), (Gt[or.variable] = ir), Gt),
        sr =
          null != (Yt = null == (Jt = Pt.baseStyle) ? void 0 : Jt.field)
            ? Yt
            : {},
        ur = { width: [nr.reference] },
        lr = function (e) {
          return {
            borderStart: '1px solid',
            borderStartColor: F('inherit', 'whiteAlpha.300')(e),
            color: F('inherit', 'whiteAlpha.800')(e),
            _active: { bg: F('gray.200', 'whiteAlpha.300')(e) },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          }
        }
      function cr(e) {
        var t,
          r,
          n = Pt.sizes[e],
          i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
          a =
            null != (t = null == (r = n.field) ? void 0 : r.fontSize)
              ? t
              : 'md',
          s = Ee.fontSizes[a.toString()]
        return {
          field: o({}, n.field, {
            paddingInlineEnd: or.reference,
            verticalAlign: 'top',
          }),
          stepper: {
            fontSize: G(s).multiply(0.75).toString(),
            _first: { borderTopEndRadius: i[e] },
            _last: {
              borderBottomEndRadius: i[e],
              mt: '-1px',
              borderTopWidth: 1,
            },
          },
        }
      }
      var fr,
        dr = { xs: cr('xs'), sm: cr('sm'), md: cr('md'), lg: cr('lg') },
        pr = {
          parts: ge.keys,
          baseStyle: function (e) {
            return { root: ar, field: sr, stepperGroup: ur, stepper: lr(e) }
          },
          sizes: dr,
          variants: tr,
          defaultProps: rr,
        },
        hr = {
          baseStyle: o({}, Pt.baseStyle.field, { textAlign: 'center' }),
          sizes: {
            lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
            md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
            sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
            xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
          },
          variants: {
            outline: function (e) {
              var t
              return null != (t = Pt.variants.outline(e).field) ? t : {}
            },
            flushed: function (e) {
              var t
              return null != (t = Pt.variants.flushed(e).field) ? t : {}
            },
            filled: function (e) {
              var t
              return null != (t = Pt.variants.filled(e).field) ? t : {}
            },
            unstyled: null != (fr = Pt.variants.unstyled.field) ? fr : {},
          },
          defaultProps: Pt.defaultProps,
        },
        gr = ee('popper-bg'),
        mr = ee('popper-arrow-bg'),
        br = ee('popper-arrow-shadow-color'),
        vr = { zIndex: 10 },
        yr = function (e) {
          var t,
            r = F('white', 'gray.700')(e),
            n = F('gray.200', 'whiteAlpha.300')(e)
          return (
            ((t = {})[gr.variable] = 'colors.' + r),
            (t.bg = gr.reference),
            (t[mr.variable] = gr.reference),
            (t[br.variable] = 'colors.' + n),
            (t.width = 'xs'),
            (t.border = '1px solid'),
            (t.borderColor = 'inherit'),
            (t.borderRadius = 'md'),
            (t.boxShadow = 'sm'),
            (t.zIndex = 'inherit'),
            (t._focus = { outline: 0, boxShadow: 'outline' }),
            t
          )
        },
        xr = { px: 3, py: 2, borderBottomWidth: '1px' },
        wr = { px: 3, py: 2 },
        kr = { px: 3, py: 2, borderTopWidth: '1px' },
        Sr = {
          position: 'absolute',
          borderRadius: 'md',
          top: 1,
          insetEnd: 2,
          padding: 2,
        },
        Or = {
          parts: me.keys,
          baseStyle: function (e) {
            return {
              popper: vr,
              content: yr(e),
              header: xr,
              body: wr,
              footer: kr,
              arrow: {},
              closeButton: Sr,
            }
          },
        }
      var Cr = {
          lineHeight: '1',
          fontSize: '0.25em',
          fontWeight: 'bold',
          color: 'white',
        },
        Er = function (e) {
          return { bg: F('gray.100', 'whiteAlpha.300')(e) }
        },
        Rr = function (e) {
          return o(
            { transitionProperty: 'common', transitionDuration: 'slow' },
            (function (e) {
              var t = e.colorScheme,
                r = e.theme,
                n = e.isIndeterminate,
                i = e.hasStripe,
                a = F(L(), L('1rem', 'rgba(0,0,0,0.1)'))(e),
                s = F(t + '.500', t + '.200')(e),
                u =
                  'linear-gradient(\n    to right,\n    transparent 0%,\n    ' +
                  T(r, s) +
                  ' 50%,\n    transparent 100%\n  )'
              return o({}, !n && i && a, n ? { bgImage: u } : { bgColor: s })
            })(e)
          )
        },
        _r = {
          parts: be.keys,
          sizes: {
            xs: { track: { h: '0.25rem' } },
            sm: { track: { h: '0.5rem' } },
            md: { track: { h: '0.75rem' } },
            lg: { track: { h: '1rem' } },
          },
          baseStyle: function (e) {
            return { label: Cr, filledTrack: Rr(e), track: Er(e) }
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        },
        Ar = function (e) {
          var t = et.baseStyle(e).control,
            r = void 0 === t ? {} : t
          return o({}, r, {
            borderRadius: 'full',
            _checked: o({}, r._checked, {
              _before: {
                content: '""',
                display: 'inline-block',
                pos: 'relative',
                w: '50%',
                h: '50%',
                borderRadius: '50%',
                bg: 'currentColor',
              },
            }),
          })
        },
        Pr = {
          parts: ve.keys,
          baseStyle: function (e) {
            return { label: et.baseStyle(e).label, control: Ar(e) }
          },
          sizes: {
            md: { control: { w: 4, h: 4 }, label: { fontSize: 'md' } },
            lg: { control: { w: 5, h: 5 }, label: { fontSize: 'lg' } },
            sm: { control: { width: 3, height: 3 }, label: { fontSize: 'sm' } },
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        },
        jr = function (e) {
          return o({}, Pt.baseStyle.field, {
            bg: F('white', 'gray.700')(e),
            appearance: 'none',
            paddingBottom: '1px',
            lineHeight: 'normal',
            '> option, > optgroup': { bg: F('white', 'gray.700')(e) },
          })
        },
        Tr = {
          width: '1.5rem',
          height: '100%',
          insetEnd: '0.5rem',
          position: 'relative',
          color: 'currentColor',
          fontSize: '1.25rem',
          _disabled: { opacity: 0.5 },
        },
        Br = { paddingInlineEnd: '2rem' },
        zr = _e()({}, Pt.sizes, {
          lg: { field: Br },
          md: { field: Br },
          sm: { field: Br },
          xs: { field: Br, icon: { insetEnd: '0.25rem' } },
        }),
        Lr = {
          parts: ye.keys,
          baseStyle: function (e) {
            return { field: jr(e), icon: Tr }
          },
          sizes: zr,
          variants: Pt.variants,
          defaultProps: Pt.defaultProps,
        },
        Ir = function (e, t) {
          return (0, Ae.F4)({
            from: { borderColor: e, background: e },
            to: { borderColor: t, background: t },
          })
        },
        Fr = {
          baseStyle: function (e) {
            var t = F('gray.100', 'gray.800')(e),
              r = F('gray.400', 'gray.600')(e),
              n = e.startColor,
              o = void 0 === n ? t : n,
              i = e.endColor,
              a = void 0 === i ? r : i,
              s = e.speed,
              u = e.theme,
              l = T(u, o),
              c = T(u, a)
            return {
              opacity: 0.7,
              borderRadius: '2px',
              borderColor: l,
              background: c,
              animation: s + 's linear infinite alternate ' + Ir(l, c),
            }
          },
        },
        Dr = {
          baseStyle: function (e) {
            return {
              borderRadius: 'md',
              fontWeight: 'semibold',
              _focus: {
                boxShadow: 'outline',
                padding: '1rem',
                position: 'fixed',
                top: '1.5rem',
                insetStart: '1.5rem',
                bg: F('white', 'gray.700')(e),
              },
            }
          },
        }
      var Mr,
        Nr,
        Hr,
        Wr,
        Ur,
        $r,
        qr,
        Vr,
        Zr,
        Xr,
        Kr,
        Gr,
        Yr,
        Jr = function (e) {
          return o(
            {
              display: 'inline-block',
              position: 'relative',
              cursor: 'pointer',
              _disabled: {
                opacity: 0.6,
                cursor: 'default',
                pointerEvents: 'none',
              },
            },
            D({
              orientation: e.orientation,
              vertical: { h: '100%' },
              horizontal: { w: '100%' },
            })
          )
        },
        Qr = function (e) {
          return {
            overflow: 'hidden',
            borderRadius: 'sm',
            bg: F('gray.200', 'whiteAlpha.200')(e),
            _disabled: { bg: F('gray.300', 'whiteAlpha.300')(e) },
          }
        },
        en = function (e) {
          return o(
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              outline: 0,
              zIndex: 1,
              borderRadius: 'full',
              bg: 'white',
              boxShadow: 'base',
              border: '1px solid',
              borderColor: 'transparent',
              transitionProperty: 'transform',
              transitionDuration: 'normal',
              _focus: { boxShadow: 'outline' },
              _disabled: { bg: 'gray.300' },
            },
            (function (e) {
              return D({
                orientation: e.orientation,
                vertical: {
                  left: '50%',
                  transform: 'translateX(-50%)',
                  _active: { transform: 'translateX(-50%) scale(1.15)' },
                },
                horizontal: {
                  top: '50%',
                  transform: 'translateY(-50%)',
                  _active: { transform: 'translateY(-50%) scale(1.15)' },
                },
              })
            })(e)
          )
        },
        tn = function (e) {
          var t = e.colorScheme
          return {
            width: 'inherit',
            height: 'inherit',
            bg: F(t + '.500', t + '.200')(e),
          }
        },
        rn = {
          lg: function (e) {
            return {
              thumb: { w: '16px', h: '16px' },
              track: D({
                orientation: e.orientation,
                horizontal: { h: '4px' },
                vertical: { w: '4px' },
              }),
            }
          },
          md: function (e) {
            return {
              thumb: { w: '14px', h: '14px' },
              track: D({
                orientation: e.orientation,
                horizontal: { h: '4px' },
                vertical: { w: '4px' },
              }),
            }
          },
          sm: function (e) {
            return {
              thumb: { w: '10px', h: '10px' },
              track: D({
                orientation: e.orientation,
                horizontal: { h: '2px' },
                vertical: { w: '2px' },
              }),
            }
          },
        },
        nn = {
          parts: xe.keys,
          sizes: rn,
          baseStyle: function (e) {
            return {
              container: Jr(e),
              track: Qr(e),
              thumb: en(e),
              filledTrack: tn(e),
            }
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        },
        on = ee('spinner-size'),
        an = {
          baseStyle: { width: [on.reference], height: [on.reference] },
          sizes: {
            xs: ((Mr = {}), (Mr[on.variable] = '0.75rem'), Mr),
            sm: ((Nr = {}), (Nr[on.variable] = '1rem'), Nr),
            md: ((Hr = {}), (Hr[on.variable] = '1.5rem'), Hr),
            lg: ((Wr = {}), (Wr[on.variable] = '2rem'), Wr),
            xl: ((Ur = {}), (Ur[on.variable] = '3rem'), Ur),
          },
          defaultProps: { size: 'md' },
        },
        sn = {
          container: {},
          label: { fontWeight: 'medium' },
          helpText: { opacity: 0.8, marginBottom: 2 },
          number: { verticalAlign: 'baseline', fontWeight: 'semibold' },
          icon: { marginEnd: 1, w: '14px', h: '14px', verticalAlign: 'middle' },
        },
        un = {
          parts: we.keys,
          baseStyle: sn,
          sizes: {
            md: {
              label: { fontSize: 'sm' },
              helpText: { fontSize: 'sm' },
              number: { fontSize: '2xl' },
            },
          },
          defaultProps: { size: 'md' },
        },
        ln = ee('switch-track-width'),
        cn = ee('switch-track-height'),
        fn = ee('switch-track-diff'),
        dn = G.subtract(ln, cn),
        pn = ee('switch-thumb-x'),
        hn = function (e) {
          var t = e.colorScheme
          return {
            borderRadius: 'full',
            p: '2px',
            width: [ln.reference],
            height: [cn.reference],
            transitionProperty: 'common',
            transitionDuration: 'fast',
            bg: F('gray.300', 'whiteAlpha.400')(e),
            _focus: { boxShadow: 'outline' },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
            _checked: { bg: F(t + '.500', t + '.200')(e) },
          }
        },
        gn = {
          bg: 'white',
          transitionProperty: 'transform',
          transitionDuration: 'normal',
          borderRadius: 'inherit',
          width: [cn.reference],
          height: [cn.reference],
          _checked: { transform: 'translateX(' + pn.reference + ')' },
        },
        mn = {
          sm: {
            container:
              (($r = {}),
              ($r[ln.variable] = '1.375rem'),
              ($r[cn.variable] = '0.75rem'),
              $r),
          },
          md: {
            container:
              ((qr = {}),
              (qr[ln.variable] = '1.875rem'),
              (qr[cn.variable] = '1rem'),
              qr),
          },
          lg: {
            container:
              ((Vr = {}),
              (Vr[ln.variable] = '2.875rem'),
              (Vr[cn.variable] = '1.5rem'),
              Vr),
          },
        },
        bn = {
          parts: ke.keys,
          baseStyle: function (e) {
            var t, r
            return {
              container:
                ((r = {}),
                (r[fn.variable] = dn),
                (r[pn.variable] = fn.reference),
                (r._rtl =
                  ((t = {}), (t[pn.variable] = G(fn).negate().toString()), t)),
                r),
              track: hn(e),
              thumb: gn,
            }
          },
          sizes: mn,
          defaultProps: { size: 'md', colorScheme: 'blue' },
        },
        vn = { '&[data-is-numeric=true]': { textAlign: 'end' } },
        yn = {
          simple: function (e) {
            var t = e.colorScheme
            return {
              th: o(
                {
                  color: F('gray.600', 'gray.400')(e),
                  borderBottom: '1px',
                  borderColor: F(t + '.100', t + '.700')(e),
                },
                vn
              ),
              td: o(
                {
                  borderBottom: '1px',
                  borderColor: F(t + '.100', t + '.700')(e),
                },
                vn
              ),
              caption: { color: F('gray.600', 'gray.100')(e) },
              tfoot: {
                tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
              },
            }
          },
          striped: function (e) {
            var t = e.colorScheme
            return {
              th: o(
                {
                  color: F('gray.600', 'gray.400')(e),
                  borderBottom: '1px',
                  borderColor: F(t + '.100', t + '.700')(e),
                },
                vn
              ),
              td: o(
                {
                  borderBottom: '1px',
                  borderColor: F(t + '.100', t + '.700')(e),
                },
                vn
              ),
              caption: { color: F('gray.600', 'gray.100')(e) },
              tbody: {
                tr: {
                  '&:nth-of-type(odd)': {
                    'th, td': {
                      borderBottomWidth: '1px',
                      borderColor: F(t + '.100', t + '.700')(e),
                    },
                    td: { background: F(t + '.100', t + '.700')(e) },
                  },
                },
              },
              tfoot: {
                tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
              },
            }
          },
          unstyled: {},
        },
        xn = {
          parts: Se.keys,
          baseStyle: {
            table: {
              fontVariantNumeric: 'lining-nums tabular-nums',
              borderCollapse: 'collapse',
              width: 'full',
            },
            th: {
              fontFamily: 'heading',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: 'wider',
              textAlign: 'start',
            },
            td: { textAlign: 'start' },
            caption: {
              mt: 4,
              fontFamily: 'heading',
              textAlign: 'center',
              fontWeight: 'medium',
            },
          },
          variants: yn,
          sizes: {
            sm: {
              th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
              td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
              caption: { px: '4', py: '2', fontSize: 'xs' },
            },
            md: {
              th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
              td: { px: '6', py: '4', lineHeight: '5' },
              caption: { px: '6', py: '2', fontSize: 'sm' },
            },
            lg: {
              th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
              td: { px: '8', py: '5', lineHeight: '6' },
              caption: { px: '6', py: '2', fontSize: 'md' },
            },
          },
          defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
        },
        wn = function (e) {
          return { display: 'vertical' === e.orientation ? 'flex' : 'block' }
        },
        kn = function (e) {
          return {
            flex: e.isFitted ? 1 : void 0,
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _focus: { zIndex: 1, boxShadow: 'outline' },
          }
        },
        Sn = function (e) {
          var t = e.align,
            r = void 0 === t ? 'start' : t,
            n = e.orientation
          return {
            justifyContent: {
              end: 'flex-end',
              center: 'center',
              start: 'flex-start',
            }[r],
            flexDirection: 'vertical' === n ? 'column' : 'row',
          }
        },
        On = { p: 4 },
        Cn = {
          line: function (e) {
            var t,
              r,
              n = e.colorScheme,
              o = e.orientation,
              i = 'vertical' === o ? 'borderStart' : 'borderBottom',
              a = 'vertical' === o ? 'marginStart' : 'marginBottom'
            return {
              tablist:
                ((t = {}),
                (t[i] = '2px solid'),
                (t.borderColor = 'inherit'),
                t),
              tab:
                ((r = {}),
                (r[i] = '2px solid'),
                (r.borderColor = 'transparent'),
                (r[a] = '-2px'),
                (r._selected = {
                  color: F(n + '.600', n + '.300')(e),
                  borderColor: 'currentColor',
                }),
                (r._active = { bg: F('gray.200', 'whiteAlpha.300')(e) }),
                (r._disabled = { opacity: 0.4, cursor: 'not-allowed' }),
                r),
            }
          },
          enclosed: function (e) {
            var t = e.colorScheme
            return {
              tab: {
                borderTopRadius: 'md',
                border: '1px solid',
                borderColor: 'transparent',
                mb: '-1px',
                _selected: {
                  color: F(t + '.600', t + '.300')(e),
                  borderColor: 'inherit',
                  borderBottomColor: F('white', 'gray.800')(e),
                },
              },
              tablist: {
                mb: '-1px',
                borderBottom: '1px solid',
                borderColor: 'inherit',
              },
            }
          },
          'enclosed-colored': function (e) {
            var t = e.colorScheme
            return {
              tab: {
                border: '1px solid',
                borderColor: 'inherit',
                bg: F('gray.50', 'whiteAlpha.50')(e),
                mb: '-1px',
                _notLast: { marginEnd: '-1px' },
                _selected: {
                  bg: F('#fff', 'gray.800')(e),
                  color: F(t + '.600', t + '.300')(e),
                  borderColor: 'inherit',
                  borderTopColor: 'currentColor',
                  borderBottomColor: 'transparent',
                },
              },
              tablist: {
                mb: '-1px',
                borderBottom: '1px solid',
                borderColor: 'inherit',
              },
            }
          },
          'soft-rounded': function (e) {
            var t = e.colorScheme,
              r = e.theme
            return {
              tab: {
                borderRadius: 'full',
                fontWeight: 'semibold',
                color: 'gray.600',
                _selected: { color: T(r, t + '.700'), bg: T(r, t + '.100') },
              },
            }
          },
          'solid-rounded': function (e) {
            var t = e.colorScheme
            return {
              tab: {
                borderRadius: 'full',
                fontWeight: 'semibold',
                color: F('gray.600', 'inherit')(e),
                _selected: {
                  color: F('#fff', 'gray.800')(e),
                  bg: F(t + '.600', t + '.300')(e),
                },
              },
            }
          },
          unstyled: {},
        },
        En = {
          parts: Oe.keys,
          baseStyle: function (e) {
            return { root: wn(e), tab: kn(e), tablist: Sn(e), tabpanel: On }
          },
          sizes: {
            sm: { tab: { py: 1, px: 4, fontSize: 'sm' } },
            md: { tab: { fontSize: 'md', py: 2, px: 4 } },
            lg: { tab: { fontSize: 'lg', py: 3, px: 4 } },
          },
          variants: Cn,
          defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
        },
        Rn = {
          container: {
            fontWeight: 'medium',
            lineHeight: 1.2,
            outline: 0,
            _focus: { boxShadow: 'outline' },
          },
          label: { lineHeight: 1.2, overflow: 'visible' },
          closeButton: {
            fontSize: '18px',
            w: '1.25rem',
            h: '1.25rem',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            borderRadius: 'full',
            marginStart: '0.375rem',
            marginEnd: '-1',
            opacity: 0.5,
            _disabled: { opacity: 0.4 },
            _focus: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
            _hover: { opacity: 0.8 },
            _active: { opacity: 1 },
          },
        },
        _n = {
          subtle: function (e) {
            return { container: qe.variants.subtle(e) }
          },
          solid: function (e) {
            return { container: qe.variants.solid(e) }
          },
          outline: function (e) {
            return { container: qe.variants.outline(e) }
          },
        },
        An = {
          parts: Ce.keys,
          variants: _n,
          baseStyle: Rn,
          sizes: {
            sm: {
              container: {
                minH: '1.25rem',
                minW: '1.25rem',
                fontSize: 'xs',
                px: 2,
                borderRadius: 'md',
              },
              closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
            },
            md: {
              container: {
                minH: '1.5rem',
                minW: '1.5rem',
                fontSize: 'sm',
                borderRadius: 'md',
                px: 2,
              },
            },
            lg: {
              container: {
                minH: 8,
                minW: 8,
                fontSize: 'md',
                borderRadius: 'md',
                px: 3,
              },
            },
          },
          defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
        },
        Pn = o({}, Pt.baseStyle.field, {
          paddingY: '8px',
          minHeight: '80px',
          lineHeight: 'short',
          verticalAlign: 'top',
        }),
        jn = {
          outline: function (e) {
            var t
            return null != (t = Pt.variants.outline(e).field) ? t : {}
          },
          flushed: function (e) {
            var t
            return null != (t = Pt.variants.flushed(e).field) ? t : {}
          },
          filled: function (e) {
            var t
            return null != (t = Pt.variants.filled(e).field) ? t : {}
          },
          unstyled: null != (Zr = Pt.variants.unstyled.field) ? Zr : {},
        },
        Tn = {
          baseStyle: Pn,
          sizes: {
            xs: null != (Xr = Pt.sizes.xs.field) ? Xr : {},
            sm: null != (Kr = Pt.sizes.sm.field) ? Kr : {},
            md: null != (Gr = Pt.sizes.md.field) ? Gr : {},
            lg: null != (Yr = Pt.sizes.lg.field) ? Yr : {},
          },
          variants: jn,
          defaultProps: { size: 'md', variant: 'outline' },
        },
        Bn = ee('tooltip-bg'),
        zn = ee('popper-arrow-bg'),
        Ln = {
          baseStyle: function (e) {
            var t,
              r = F('gray.700', 'gray.300')(e)
            return (
              ((t = {})[Bn.variable] = 'colors.' + r),
              (t.px = '8px'),
              (t.py = '2px'),
              (t.bg = [Bn.reference]),
              (t[zn.variable] = [Bn.reference]),
              (t.color = F('whiteAlpha.900', 'gray.900')(e)),
              (t.borderRadius = 'sm'),
              (t.fontWeight = 'medium'),
              (t.fontSize = 'sm'),
              (t.boxShadow = 'md'),
              (t.maxW = '320px'),
              (t.zIndex = 'tooltip'),
              t
            )
          },
        },
        In = Object.freeze({
          __proto__: null,
          Accordion: je,
          Alert: ze,
          Avatar: Ue,
          Badge: qe,
          Breadcrumb: Ze,
          Button: Ge,
          Checkbox: et,
          CloseButton: rt,
          Code: nt,
          Container: ot,
          Divider: it,
          Drawer: gt,
          Editable: bt,
          Form: xt,
          FormError: St,
          FormLabel: Ot,
          Heading: Ct,
          Input: Pt,
          Kbd: jt,
          Link: Tt,
          List: zt,
          Menu: Ht,
          Modal: er,
          NumberInput: pr,
          PinInput: hr,
          Popover: Or,
          Progress: _r,
          Radio: Pr,
          Select: Lr,
          Skeleton: Fr,
          SkipLink: Dr,
          Slider: nn,
          Spinner: an,
          Stat: un,
          Switch: bn,
          Table: xn,
          Tabs: En,
          Tag: An,
          Textarea: Tn,
          Tooltip: Ln,
        }),
        Fn = (function (e) {
          return (
            (0, j.ZK)({
              condition: !0,
              message: [
                '[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon',
                'simply pass the breakpoints as an object. Remove the createBreakpoint(..) call',
              ].join(''),
            }),
            M({ base: '0em' }, e)
          )
        })({ sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' }),
        Dn = o(
          {
            breakpoints: Fn,
            zIndices: {
              hide: -1,
              auto: 'auto',
              base: 0,
              docked: 10,
              dropdown: 1e3,
              sticky: 1100,
              banner: 1200,
              overlay: 1300,
              modal: 1400,
              popover: 1500,
              skipLink: 1600,
              toast: 1700,
              tooltip: 1800,
            },
            radii: {
              none: '0',
              sm: '0.125rem',
              base: '0.25rem',
              md: '0.375rem',
              lg: '0.5rem',
              xl: '0.75rem',
              '2xl': '1rem',
              '3xl': '1.5rem',
              full: '9999px',
            },
            blur: {
              none: 0,
              sm: '4px',
              base: '8px',
              md: '12px',
              lg: '16px',
              xl: '24px',
              '2xl': '40px',
              '3xl': '64px',
            },
            colors: {
              transparent: 'transparent',
              current: 'currentColor',
              black: '#000000',
              white: '#FFFFFF',
              whiteAlpha: {
                50: 'rgba(255, 255, 255, 0.04)',
                100: 'rgba(255, 255, 255, 0.06)',
                200: 'rgba(255, 255, 255, 0.08)',
                300: 'rgba(255, 255, 255, 0.16)',
                400: 'rgba(255, 255, 255, 0.24)',
                500: 'rgba(255, 255, 255, 0.36)',
                600: 'rgba(255, 255, 255, 0.48)',
                700: 'rgba(255, 255, 255, 0.64)',
                800: 'rgba(255, 255, 255, 0.80)',
                900: 'rgba(255, 255, 255, 0.92)',
              },
              blackAlpha: {
                50: 'rgba(0, 0, 0, 0.04)',
                100: 'rgba(0, 0, 0, 0.06)',
                200: 'rgba(0, 0, 0, 0.08)',
                300: 'rgba(0, 0, 0, 0.16)',
                400: 'rgba(0, 0, 0, 0.24)',
                500: 'rgba(0, 0, 0, 0.36)',
                600: 'rgba(0, 0, 0, 0.48)',
                700: 'rgba(0, 0, 0, 0.64)',
                800: 'rgba(0, 0, 0, 0.80)',
                900: 'rgba(0, 0, 0, 0.92)',
              },
              gray: {
                50: '#F7FAFC',
                100: '#EDF2F7',
                200: '#E2E8F0',
                300: '#CBD5E0',
                400: '#A0AEC0',
                500: '#718096',
                600: '#4A5568',
                700: '#2D3748',
                800: '#1A202C',
                900: '#171923',
              },
              red: {
                50: '#FFF5F5',
                100: '#FED7D7',
                200: '#FEB2B2',
                300: '#FC8181',
                400: '#F56565',
                500: '#E53E3E',
                600: '#C53030',
                700: '#9B2C2C',
                800: '#822727',
                900: '#63171B',
              },
              orange: {
                50: '#FFFAF0',
                100: '#FEEBC8',
                200: '#FBD38D',
                300: '#F6AD55',
                400: '#ED8936',
                500: '#DD6B20',
                600: '#C05621',
                700: '#9C4221',
                800: '#7B341E',
                900: '#652B19',
              },
              yellow: {
                50: '#FFFFF0',
                100: '#FEFCBF',
                200: '#FAF089',
                300: '#F6E05E',
                400: '#ECC94B',
                500: '#D69E2E',
                600: '#B7791F',
                700: '#975A16',
                800: '#744210',
                900: '#5F370E',
              },
              green: {
                50: '#F0FFF4',
                100: '#C6F6D5',
                200: '#9AE6B4',
                300: '#68D391',
                400: '#48BB78',
                500: '#38A169',
                600: '#2F855A',
                700: '#276749',
                800: '#22543D',
                900: '#1C4532',
              },
              teal: {
                50: '#E6FFFA',
                100: '#B2F5EA',
                200: '#81E6D9',
                300: '#4FD1C5',
                400: '#38B2AC',
                500: '#319795',
                600: '#2C7A7B',
                700: '#285E61',
                800: '#234E52',
                900: '#1D4044',
              },
              blue: {
                50: '#ebf8ff',
                100: '#bee3f8',
                200: '#90cdf4',
                300: '#63b3ed',
                400: '#4299e1',
                500: '#3182ce',
                600: '#2b6cb0',
                700: '#2c5282',
                800: '#2a4365',
                900: '#1A365D',
              },
              cyan: {
                50: '#EDFDFD',
                100: '#C4F1F9',
                200: '#9DECF9',
                300: '#76E4F7',
                400: '#0BC5EA',
                500: '#00B5D8',
                600: '#00A3C4',
                700: '#0987A0',
                800: '#086F83',
                900: '#065666',
              },
              purple: {
                50: '#FAF5FF',
                100: '#E9D8FD',
                200: '#D6BCFA',
                300: '#B794F4',
                400: '#9F7AEA',
                500: '#805AD5',
                600: '#6B46C1',
                700: '#553C9A',
                800: '#44337A',
                900: '#322659',
              },
              pink: {
                50: '#FFF5F7',
                100: '#FED7E2',
                200: '#FBB6CE',
                300: '#F687B3',
                400: '#ED64A6',
                500: '#D53F8C',
                600: '#B83280',
                700: '#97266D',
                800: '#702459',
                900: '#521B41',
              },
              linkedin: {
                50: '#E8F4F9',
                100: '#CFEDFB',
                200: '#9BDAF3',
                300: '#68C7EC',
                400: '#34B3E4',
                500: '#00A0DC',
                600: '#008CC9',
                700: '#0077B5',
                800: '#005E93',
                900: '#004471',
              },
              facebook: {
                50: '#E8F4F9',
                100: '#D9DEE9',
                200: '#B7C2DA',
                300: '#6482C0',
                400: '#4267B2',
                500: '#385898',
                600: '#314E89',
                700: '#29487D',
                800: '#223B67',
                900: '#1E355B',
              },
              messenger: {
                50: '#D0E6FF',
                100: '#B9DAFF',
                200: '#A2CDFF',
                300: '#7AB8FF',
                400: '#2E90FF',
                500: '#0078FF',
                600: '#0063D1',
                700: '#0052AC',
                800: '#003C7E',
                900: '#002C5C',
              },
              whatsapp: {
                50: '#dffeec',
                100: '#b9f5d0',
                200: '#90edb3',
                300: '#65e495',
                400: '#3cdd78',
                500: '#22c35e',
                600: '#179848',
                700: '#0c6c33',
                800: '#01421c',
                900: '#001803',
              },
              twitter: {
                50: '#E5F4FD',
                100: '#C8E9FB',
                200: '#A8DCFA',
                300: '#83CDF7',
                400: '#57BBF5',
                500: '#1DA1F2',
                600: '#1A94DA',
                700: '#1681BF',
                800: '#136B9E',
                900: '#0D4D71',
              },
              telegram: {
                50: '#E3F2F9',
                100: '#C5E4F3',
                200: '#A2D4EC',
                300: '#7AC1E4',
                400: '#47A9DA',
                500: '#0088CC',
                600: '#007AB8',
                700: '#006BA1',
                800: '#005885',
                900: '#003F5E',
              },
            },
          },
          Ee,
          {
            sizes: i,
            shadows: {
              xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
              sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
              inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
              none: 'none',
              'dark-lg':
                'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
            },
            space: n,
            borders: {
              none: 0,
              '1px': '1px solid',
              '2px': '2px solid',
              '4px': '4px solid',
              '8px': '8px solid',
            },
            transition: {
              property: {
                common:
                  'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
                colors: 'background-color, border-color, color, fill, stroke',
                dimensions: 'width, height',
                position: 'left, right, top, bottom',
                background:
                  'background-color, background-image, background-position',
              },
              easing: {
                'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
                'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
                'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
              },
              duration: {
                'ultra-fast': '50ms',
                faster: '100ms',
                fast: '150ms',
                normal: '200ms',
                slow: '300ms',
                slower: '400ms',
                'ultra-slow': '500ms',
              },
            },
          }
        ),
        Mn = [
          'borders',
          'breakpoints',
          'colors',
          'components',
          'config',
          'direction',
          'fonts',
          'fontSizes',
          'fontWeights',
          'letterSpacings',
          'lineHeights',
          'radii',
          'shadows',
          'sizes',
          'space',
          'styles',
          'transition',
          'zIndices',
        ]
      function Nn(e) {
        return (
          !!(0, j.Kn)(e) &&
          Mn.every(function (t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          })
        )
      }
      var Hn = o({ direction: 'ltr' }, Dn, {
        components: In,
        styles: {
          global: function (e) {
            return {
              body: {
                fontFamily: 'body',
                color: F('gray.800', 'whiteAlpha.900')(e),
                bg: F('white', 'gray.800')(e),
                transitionProperty: 'background-color',
                transitionDuration: 'normal',
                lineHeight: 'base',
              },
              '*::placeholder': { color: F('gray.400', 'whiteAlpha.400')(e) },
              '*, *::before, &::after': {
                borderColor: F('gray.200', 'whiteAlpha.300')(e),
                wordWrap: 'break-word',
              },
            }
          },
        },
        config: {
          useSystemColorMode: !1,
          initialColorMode: 'light',
          cssVarPrefix: 'chakra',
        },
      })
    },
    9703: function (e, t, r) {
      'use strict'
      r.d(t, {
        Ts: function () {
          return b
        },
        jX: function () {
          return a
        },
        yn: function () {
          return T
        },
        Qm: function () {
          return M
        },
        PP: function () {
          return ee
        },
        v0: function () {
          return Q
        },
        r3: function () {
          return W
        },
        cx: function () {
          return N
        },
        PB: function () {
          return D
        },
        VI: function () {
          return ue
        },
        YU: function () {
          return S
        },
        xH: function () {
          return se
        },
        T_: function () {
          return ie
        },
        sq: function () {
          return C
        },
        vY: function () {
          return H
        },
        K1: function () {
          return E
        },
        LP: function () {
          return u
        },
        lZ: function () {
          return I
        },
        kR: function () {
          return L
        },
        H9: function () {
          return V
        },
        kJ: function () {
          return c
        },
        jU: function () {
          return F
        },
        FS: function () {
          return m
        },
        Qr: function () {
          return p
        },
        mf: function () {
          return f
        },
        Re: function () {
          return z
        },
        Ft: function () {
          return h
        },
        hj: function () {
          return l
        },
        Kn: function () {
          return d
        },
        n_: function () {
          return $
        },
        HD: function () {
          return g
        },
        Wq: function () {
          return K
        },
        XQ: function () {
          return le
        },
        Wf: function () {
          return w
        },
        ZT: function () {
          return re
        },
        uh: function () {
          return U
        },
        lw: function () {
          return k
        },
        Yd: function () {
          return O
        },
        CE: function () {
          return v
        },
        ei: function () {
          return y
        },
        zG: function () {
          return oe
        },
        px: function () {
          return R
        },
        cl: function () {
          return s
        },
        Pu: function () {
          return J
        },
        Vl: function () {
          return x
        },
        ZK: function () {
          return ne
        },
      })
      r(8554)
      var n = (1 / 60) * 1e3,
        o =
          'undefined' !== typeof performance
            ? function () {
                return performance.now()
              }
            : function () {
                return Date.now()
              }
      function i(e) {
        var t = null == e ? 0 : e.length
        return t ? e[t - 1] : void 0
      }
      function a(e, t) {
        return [].concat(e, [t])
      }
      function s(e, t) {
        return e.filter(function (e) {
          return e !== t
        })
      }
      function u(e, t, r, n) {
        if (null == t) return n
        if (!n)
          return e.find(function (e) {
            return r(e).toLowerCase().startsWith(t.toLowerCase())
          })
        var o,
          i = e.filter(function (e) {
            return r(e).toLowerCase().startsWith(t.toLowerCase())
          })
        return i.length > 0
          ? i.includes(n)
            ? ((o = i.indexOf(n) + 1) === i.length && (o = 0), i[o])
            : ((o = e.indexOf(i[0])), e[o])
          : n
      }
      function l(e) {
        return 'number' === typeof e
      }
      function c(e) {
        return Array.isArray(e)
      }
      function f(e) {
        return 'function' === typeof e
      }
      function d(e) {
        var t = typeof e
        return null != e && ('object' === t || 'function' === t) && !c(e)
      }
      function p(e) {
        return d(e) && 0 === Object.keys(e).length
      }
      function h(e) {
        return null == e
      }
      function g(e) {
        return '[object String]' === Object.prototype.toString.call(e)
      }
      function m(e) {
        return /^var\(--.+\)$/.test(e)
      }
      var b = !1
      function v(e, t) {
        var r = {}
        return (
          Object.keys(e).forEach(function (n) {
            t.includes(n) || (r[n] = e[n])
          }),
          r
        )
      }
      function y(e, t) {
        var r = {}
        return (
          t.forEach(function (t) {
            t in e && (r[t] = e[t])
          }),
          r
        )
      }
      function x(e, t) {
        var r = {},
          n = {}
        return (
          Object.keys(e).forEach(function (o) {
            t.includes(o) ? (r[o] = e[o]) : (n[o] = e[o])
          }),
          [r, n]
        )
      }
      var w = (function (e) {
        var t = new WeakMap()
        return function (r, n, o, i) {
          if ('undefined' === typeof r) return e(r, n, o)
          t.has(r) || t.set(r, new Map())
          var a = t.get(r)
          if (a.has(n)) return a.get(n)
          var s = e(r, n, o, i)
          return a.set(n, s), s
        }
      })(function (e, t, r, n) {
        var o = 'string' === typeof t ? t.split('.') : [t]
        for (n = 0; n < o.length && e; n += 1) e = e[o[n]]
        return void 0 === e ? r : e
      })
      function k(e, t) {
        var r = {}
        return (
          Object.keys(e).forEach(function (n) {
            var o = e[n]
            t(o, n, e) && (r[n] = o)
          }),
          r
        )
      }
      var S = function (e) {
          return k(e, function (e) {
            return null !== e && void 0 !== e
          })
        },
        O = function (e) {
          return Object.keys(e)
        },
        C = function (e) {
          return e.reduce(function (e, t) {
            var r = t[0],
              n = t[1]
            return (e[r] = n), e
          }, {})
        },
        E = function (e, t, r) {
          var n, o
          return null !=
            (n = null == (o = e.__cssMap[t + '.' + r]) ? void 0 : o.varRef)
            ? n
            : r
        }
      function R(e) {
        if (null == e) return e
        var t = (function (e) {
          var t = parseFloat(e.toString()),
            r = e.toString().replace(String(t), '')
          return { unitless: !r, value: t, unit: r }
        })(e)
        return t.unitless || l(e) ? e + 'px' : e
      }
      var _ = function (e, t) {
          return parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1
        },
        A = function (e) {
          return C(Object.entries(e).sort(_))
        }
      function P(e) {
        var t = A(e)
        return Object.assign(Object.values(t), t)
      }
      function j(e, t) {
        var r = ['@media screen']
        return (
          e && r.push('and', '(min-width: ' + R(e) + ')'),
          t && r.push('and', '(max-width: ' + R(t) + ')'),
          r.join(' ')
        )
      }
      function T(e) {
        var t
        if (!e) return null
        e.base = null != (t = e.base) ? t : '0px'
        var r = P(e),
          n = Object.entries(e)
            .sort(_)
            .map(function (e, t, r) {
              var n,
                o = e[0],
                i = e[1],
                a = (null != (n = r[t + 1]) ? n : [])[1]
              return {
                breakpoint: o,
                minW: i,
                maxW: (a =
                  parseFloat(a) > 0
                    ? (function (e) {
                        var t
                        if (!e) return e
                        var r = (e = null != (t = R(e)) ? t : e).endsWith('px')
                          ? -1
                          : -0.0635
                        return l(e)
                          ? '' + (e + r)
                          : e.replace(/([0-9]+\.?[0-9]*)/, function (e) {
                              return '' + (parseFloat(e) + r)
                            })
                      })(a)
                    : void 0),
                maxWQuery: j(null, a),
                minWQuery: j(i),
                minMaxQuery: j(i, a),
              }
            }),
          o = (function (e) {
            var t = Object.keys(A(e))
            return new Set(t)
          })(e),
          a = Array.from(o.values())
        return {
          keys: o,
          normalized: r,
          isResponsive: function (e) {
            var t = Object.keys(e)
            return (
              t.length > 0 &&
              t.every(function (e) {
                return o.has(e)
              })
            )
          },
          asObject: A(e),
          asArray: P(e),
          details: n,
          media: [null].concat(
            r
              .map(function (e) {
                return j(e)
              })
              .slice(1)
          ),
          toArrayValue: function (e) {
            if (!d(e)) throw new Error('toArrayValue: value must be an object')
            for (
              var t = a.map(function (t) {
                var r
                return null != (r = e[t]) ? r : null
              });
              null === i(t);

            )
              t.pop()
            return t
          },
          toObjectValue: function (e) {
            if (!Array.isArray(e))
              throw new Error('toObjectValue: value must be an array')
            return e.reduce(function (e, t, r) {
              var n = a[r]
              return null != n && null != t && (e[n] = t), e
            }, {})
          },
        }
      }
      function B(e) {
        return (
          null != e &&
          'object' == typeof e &&
          'nodeType' in e &&
          e.nodeType === Node.ELEMENT_NODE
        )
      }
      function z(e) {
        var t
        return (
          !!B(e) &&
          e instanceof
            (null != (t = e.ownerDocument.defaultView) ? t : window).HTMLElement
        )
      }
      function L(e) {
        var t, r
        return B(e) && null != (t = null == (r = I(e)) ? void 0 : r.defaultView)
          ? t
          : window
      }
      function I(e) {
        var t
        return B(e) && null != (t = e.ownerDocument) ? t : document
      }
      var F = !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        D = function (e) {
          return e ? '' : void 0
        },
        M = function (e) {
          return !!e || void 0
        },
        N = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          return t.filter(Boolean).join(' ')
        }
      function H(e) {
        var t = I(e)
        return null == t ? void 0 : t.activeElement
      }
      function W(e, t) {
        return !!e && (e === t || e.contains(t))
      }
      function U(e) {
        var t = e.key,
          r = e.keyCode
        return r >= 37 && r <= 40 && 0 !== t.indexOf('Arrow') ? 'Arrow' + t : t
      }
      function $(e) {
        return 0 !== e.button
      }
      var q = function (e) {
        return e.hasAttribute('tabindex')
      }
      function V(e) {
        return (z(e) ? I(e) : document).activeElement === e
      }
      function Z(e) {
        return !(!e.parentElement || !Z(e.parentElement)) || e.hidden
      }
      function X(e) {
        if (
          !z(e) ||
          Z(e) ||
          (function (e) {
            return (
              !0 === Boolean(e.getAttribute('disabled')) ||
              !0 === Boolean(e.getAttribute('aria-disabled'))
            )
          })(e)
        )
          return !1
        var t = e.localName
        if (['input', 'select', 'textarea', 'button'].indexOf(t) >= 0) return !0
        var r = {
          a: function () {
            return e.hasAttribute('href')
          },
          audio: function () {
            return e.hasAttribute('controls')
          },
          video: function () {
            return e.hasAttribute('controls')
          },
        }
        return t in r
          ? r[t]()
          : !!(function (e) {
              var t = e.getAttribute('contenteditable')
              return 'false' !== t && null != t
            })(e) || q(e)
      }
      function K(e) {
        return (
          !!e &&
          z(e) &&
          X(e) &&
          !(function (e) {
            return q(e) && -1 === e.tabIndex
          })(e)
        )
      }
      ;[
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'embed',
        'iframe',
        'object',
        'a[href]',
        'area[href]',
        'button:not([disabled])',
        '[tabindex]',
        'audio[controls]',
        'video[controls]',
        '*[tabindex]:not([aria-disabled])',
        '*[contenteditable]',
      ].join()
      function G(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function Y(e, t) {
        var r =
          ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator']
        if (r) return (r = r.call(e)).next.bind(r)
        if (
          Array.isArray(e) ||
          (r = (function (e, t) {
            if (e) {
              if ('string' === typeof e) return G(e, t)
              var r = Object.prototype.toString.call(e).slice(8, -1)
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(e)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? G(e, t)
                  : void 0
              )
            }
          })(e)) ||
          (t && e && 'number' === typeof e.length)
        ) {
          r && (e = r)
          var n = 0
          return function () {
            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      function J(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n]
        return f(e) ? e.apply(void 0, r) : e
      }
      function Q() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return function (e) {
          t.some(function (t) {
            return null == t || t(e), null == e ? void 0 : e.defaultPrevented
          })
        }
      }
      function ee() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return function (e) {
          t.forEach(function (t) {
            null == t || t(e)
          })
        }
      }
      function te(e) {
        var t
        return function () {
          if (e) {
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
              n[o] = arguments[o]
            ;(t = e.apply(this, n)), (e = null)
          }
          return t
        }
      }
      var re = function () {},
        ne = te(function (e) {
          return function () {
            var t = e.condition,
              r = e.message
            t && b && console.warn(r)
          }
        }),
        oe =
          (te(function (e) {
            return function () {
              var t = e.condition,
                r = e.message
              t && b && console.error(r)
            }
          }),
          function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r]
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e)
              }, e)
            }
          })
      function ie(e, t) {
        void 0 === t && (t = {})
        var r = t,
          n = r.isActive,
          o = void 0 === n ? V : n,
          i = r.nextTick,
          a = r.preventScroll,
          s = void 0 === a || a,
          u = r.selectTextIfInput,
          l = void 0 === u || u
        if (!e || o(e)) return -1
        function c() {
          if (e) {
            if (
              (function () {
                if (null == ae) {
                  ae = !1
                  try {
                    document.createElement('div').focus({
                      get preventScroll() {
                        return (ae = !0), !0
                      },
                    })
                  } catch (e) {}
                }
                return ae
              })()
            )
              e.focus({ preventScroll: s })
            else if ((e.focus(), s)) {
              var t = (function (e) {
                var t,
                  r = I(e),
                  n = null != (t = r.defaultView) ? t : window,
                  o = e.parentNode,
                  i = [],
                  a = r.scrollingElement || r.documentElement
                for (; o instanceof n.HTMLElement && o !== a; )
                  (o.offsetHeight < o.scrollHeight ||
                    o.offsetWidth < o.scrollWidth) &&
                    i.push({
                      element: o,
                      scrollTop: o.scrollTop,
                      scrollLeft: o.scrollLeft,
                    }),
                    (o = o.parentNode)
                a instanceof n.HTMLElement &&
                  i.push({
                    element: a,
                    scrollTop: a.scrollTop,
                    scrollLeft: a.scrollLeft,
                  })
                return i
              })(e)
              !(function (e) {
                for (var t, r = Y(e); !(t = r()).done; ) {
                  var n = t.value,
                    o = n.element,
                    i = n.scrollTop,
                    a = n.scrollLeft
                  ;(o.scrollTop = i), (o.scrollLeft = a)
                }
              })(t)
            }
            ;(function (e) {
              return (
                z(e) && 'input' === e.tagName.toLowerCase() && 'select' in e
              )
            })(e) &&
              l &&
              e.select()
          } else
            ne({
              condition: !0,
              message:
                "[chakra-ui]: can't call focus() on `null` or `undefined` element",
            })
        }
        return i ? requestAnimationFrame(c) : (c(), -1)
      }
      var ae = null
      function se(e, t) {
        return (
          void 0 === t && (t = 1 / 0),
          (d(e) || Array.isArray(e)) && t
            ? Object.entries(e).reduce(function (e, r) {
                var n = r[0],
                  o = r[1]
                return (
                  d(o) || c(o)
                    ? Object.entries(se(o, t - 1)).forEach(function (t) {
                        var r = t[0],
                          o = t[1]
                        e[n + '.' + r] = o
                      })
                    : (e[n] = o),
                  e
                )
              }, {})
            : e
        )
      }
      function ue(e) {
        var t = e.hasBeenSelected,
          r = e.isLazy,
          n = e.isSelected,
          o = e.lazyBehavior
        return (
          !r || !!n || !('keepMounted' !== (void 0 === o ? 'unmount' : o) || !t)
        )
      }
      Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER
      Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl'])
      function le(e, t) {
        return c(e)
          ? e.map(function (e) {
              return null === e ? null : t(e)
            })
          : d(e)
          ? O(e).reduce(function (r, n) {
              return (r[n] = t(e[n])), r
            }, {})
          : null != e
          ? t(e)
          : null
      }
    },
    8357: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return oe
        },
      })
      var n = (function () {
          function e(e) {
            var t = this
            ;(this._insertTag = function (e) {
              var r
              ;(r =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, r),
                t.tags.push(e)
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null)
          }
          var t = e.prototype
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag)
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement('style')
                    return (
                      t.setAttribute('data-emotion', e.key),
                      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                      t.appendChild(document.createTextNode('')),
                      t.setAttribute('data-s', ''),
                      t
                    )
                  })(this)
                )
              var t = this.tags[this.tags.length - 1]
              if (this.isSpeedy) {
                var r = (function (e) {
                  if (e.sheet) return e.sheet
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t]
                })(t)
                try {
                  r.insertRule(e, r.cssRules.length)
                } catch (n) {
                  0
                }
              } else t.appendChild(document.createTextNode(e))
              this.ctr++
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e)
              }),
                (this.tags = []),
                (this.ctr = 0)
            }),
            e
          )
        })(),
        o = Math.abs,
        i = String.fromCharCode,
        a = Object.assign
      function s(e) {
        return e.trim()
      }
      function u(e, t, r) {
        return e.replace(t, r)
      }
      function l(e, t) {
        return e.indexOf(t)
      }
      function c(e, t) {
        return 0 | e.charCodeAt(t)
      }
      function f(e, t, r) {
        return e.slice(t, r)
      }
      function d(e) {
        return e.length
      }
      function p(e) {
        return e.length
      }
      function h(e, t) {
        return t.push(e), e
      }
      var g = 1,
        m = 1,
        b = 0,
        v = 0,
        y = 0,
        x = ''
      function w(e, t, r, n, o, i, a) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: o,
          children: i,
          line: g,
          column: m,
          length: a,
          return: '',
        }
      }
      function k(e, t) {
        return a(
          w('', null, null, '', null, null, 0),
          e,
          { length: -e.length },
          t
        )
      }
      function S() {
        return (y = v > 0 ? c(x, --v) : 0), m--, 10 === y && ((m = 1), g--), y
      }
      function O() {
        return (y = v < b ? c(x, v++) : 0), m++, 10 === y && ((m = 1), g++), y
      }
      function C() {
        return c(x, v)
      }
      function E() {
        return v
      }
      function R(e, t) {
        return f(x, e, t)
      }
      function _(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4
          case 58:
            return 3
          case 34:
          case 39:
          case 40:
          case 91:
            return 2
          case 41:
          case 93:
            return 1
        }
        return 0
      }
      function A(e) {
        return (g = m = 1), (b = d((x = e))), (v = 0), []
      }
      function P(e) {
        return (x = ''), e
      }
      function j(e) {
        return s(R(v - 1, z(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
      }
      function T(e) {
        for (; (y = C()) && y < 33; ) O()
        return _(e) > 2 || _(y) > 3 ? '' : ' '
      }
      function B(e, t) {
        for (
          ;
          --t &&
          O() &&
          !(y < 48 || y > 102 || (y > 57 && y < 65) || (y > 70 && y < 97));

        );
        return R(e, E() + (t < 6 && 32 == C() && 32 == O()))
      }
      function z(e) {
        for (; O(); )
          switch (y) {
            case e:
              return v
            case 34:
            case 39:
              34 !== e && 39 !== e && z(y)
              break
            case 40:
              41 === e && z(e)
              break
            case 92:
              O()
          }
        return v
      }
      function L(e, t) {
        for (; O() && e + y !== 57 && (e + y !== 84 || 47 !== C()); );
        return '/*' + R(t, v - 1) + '*' + i(47 === e ? e : O())
      }
      function I(e) {
        for (; !_(C()); ) O()
        return R(e, v)
      }
      var F = '-ms-',
        D = '-moz-',
        M = '-webkit-',
        N = 'comm',
        H = 'rule',
        W = 'decl',
        U = '@keyframes'
      function $(e, t) {
        for (var r = '', n = p(e), o = 0; o < n; o++)
          r += t(e[o], o, e, t) || ''
        return r
      }
      function q(e, t, r, n) {
        switch (e.type) {
          case '@import':
          case W:
            return (e.return = e.return || e.value)
          case N:
            return ''
          case U:
            return (e.return = e.value + '{' + $(e.children, n) + '}')
          case H:
            e.value = e.props.join(',')
        }
        return d((r = $(e.children, n)))
          ? (e.return = e.value + '{' + r + '}')
          : ''
      }
      function V(e, t) {
        switch (
          (function (e, t) {
            return (
              (((((((t << 2) ^ c(e, 0)) << 2) ^ c(e, 1)) << 2) ^ c(e, 2)) <<
                2) ^
              c(e, 3)
            )
          })(e, t)
        ) {
          case 5103:
            return M + 'print-' + e + e
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return M + e + e
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return M + e + D + e + F + e + e
          case 6828:
          case 4268:
            return M + e + F + e + e
          case 6165:
            return M + e + F + 'flex-' + e + e
          case 5187:
            return (
              M +
              e +
              u(e, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') +
              e
            )
          case 5443:
            return M + e + F + 'flex-item-' + u(e, /flex-|-self/, '') + e
          case 4675:
            return (
              M +
              e +
              F +
              'flex-line-pack' +
              u(e, /align-content|flex-|-self/, '') +
              e
            )
          case 5548:
            return M + e + F + u(e, 'shrink', 'negative') + e
          case 5292:
            return M + e + F + u(e, 'basis', 'preferred-size') + e
          case 6060:
            return (
              M +
              'box-' +
              u(e, '-grow', '') +
              M +
              e +
              F +
              u(e, 'grow', 'positive') +
              e
            )
          case 4554:
            return M + u(e, /([^-])(transform)/g, '$1-webkit-$2') + e
          case 6187:
            return (
              u(
                u(u(e, /(zoom-|grab)/, M + '$1'), /(image-set)/, M + '$1'),
                e,
                ''
              ) + e
            )
          case 5495:
          case 3959:
            return u(e, /(image-set\([^]*)/, M + '$1$`$1')
          case 4968:
            return (
              u(
                u(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  '-webkit-box-pack:$3-ms-flex-pack:$3'
                ),
                /s.+-b[^;]+/,
                'justify'
              ) +
              M +
              e +
              e
            )
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return u(e, /(.+)-inline(.+)/, M + '$1$2') + e
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (d(e) - 1 - t > 6)
              switch (c(e, t + 1)) {
                case 109:
                  if (45 !== c(e, t + 4)) break
                case 102:
                  return (
                    u(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1-webkit-$2-$3$1' +
                        D +
                        (108 == c(e, t + 3) ? '$3' : '$2-$3')
                    ) + e
                  )
                case 115:
                  return ~l(e, 'stretch')
                    ? V(u(e, 'stretch', 'fill-available'), t) + e
                    : e
              }
            break
          case 4949:
            if (115 !== c(e, t + 1)) break
          case 6444:
            switch (c(e, d(e) - 3 - (~l(e, '!important') && 10))) {
              case 107:
                return u(e, ':', ':' + M) + e
              case 101:
                return (
                  u(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      M +
                      (45 === c(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      M +
                      '$2$3$1' +
                      F +
                      '$2box$3'
                  ) + e
                )
            }
            break
          case 5936:
            switch (c(e, t + 11)) {
              case 114:
                return M + e + F + u(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
              case 108:
                return M + e + F + u(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
              case 45:
                return M + e + F + u(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
            }
            return M + e + F + e + e
        }
        return e
      }
      function Z(e) {
        return P(X('', null, null, null, [''], (e = A(e)), 0, [0], e))
      }
      function X(e, t, r, n, o, a, s, c, f) {
        for (
          var p = 0,
            g = 0,
            m = s,
            b = 0,
            v = 0,
            y = 0,
            x = 1,
            w = 1,
            k = 1,
            R = 0,
            _ = '',
            A = o,
            P = a,
            z = n,
            F = _;
          w;

        )
          switch (((y = R), (R = O()))) {
            case 40:
              if (108 != y && 58 == F.charCodeAt(m - 1)) {
                ;-1 != l((F += u(j(R), '&', '&\f')), '&\f') && (k = -1)
                break
              }
            case 34:
            case 39:
            case 91:
              F += j(R)
              break
            case 9:
            case 10:
            case 13:
            case 32:
              F += T(y)
              break
            case 92:
              F += B(E() - 1, 7)
              continue
            case 47:
              switch (C()) {
                case 42:
                case 47:
                  h(G(L(O(), E()), t, r), f)
                  break
                default:
                  F += '/'
              }
              break
            case 123 * x:
              c[p++] = d(F) * k
            case 125 * x:
            case 59:
            case 0:
              switch (R) {
                case 0:
                case 125:
                  w = 0
                case 59 + g:
                  v > 0 &&
                    d(F) - m &&
                    h(
                      v > 32
                        ? Y(F + ';', n, r, m - 1)
                        : Y(u(F, ' ', '') + ';', n, r, m - 2),
                      f
                    )
                  break
                case 59:
                  F += ';'
                default:
                  if (
                    (h(
                      (z = K(F, t, r, p, g, o, c, _, (A = []), (P = []), m)),
                      a
                    ),
                    123 === R)
                  )
                    if (0 === g) X(F, t, z, z, A, a, m, c, P)
                    else
                      switch (b) {
                        case 100:
                        case 109:
                        case 115:
                          X(
                            e,
                            z,
                            z,
                            n &&
                              h(K(e, z, z, 0, 0, o, c, _, o, (A = []), m), P),
                            o,
                            P,
                            m,
                            c,
                            n ? A : P
                          )
                          break
                        default:
                          X(F, z, z, z, [''], P, 0, c, P)
                      }
              }
              ;(p = g = v = 0), (x = k = 1), (_ = F = ''), (m = s)
              break
            case 58:
              ;(m = 1 + d(F)), (v = y)
            default:
              if (x < 1)
                if (123 == R) --x
                else if (125 == R && 0 == x++ && 125 == S()) continue
              switch (((F += i(R)), R * x)) {
                case 38:
                  k = g > 0 ? 1 : ((F += '\f'), -1)
                  break
                case 44:
                  ;(c[p++] = (d(F) - 1) * k), (k = 1)
                  break
                case 64:
                  45 === C() && (F += j(O())),
                    (b = C()),
                    (g = m = d((_ = F += I(E())))),
                    R++
                  break
                case 45:
                  45 === y && 2 == d(F) && (x = 0)
              }
          }
        return a
      }
      function K(e, t, r, n, i, a, l, c, d, h, g) {
        for (
          var m = i - 1, b = 0 === i ? a : [''], v = p(b), y = 0, x = 0, k = 0;
          y < n;
          ++y
        )
          for (
            var S = 0, O = f(e, m + 1, (m = o((x = l[y])))), C = e;
            S < v;
            ++S
          )
            (C = s(x > 0 ? b[S] + ' ' + O : u(O, /&\f/g, b[S]))) && (d[k++] = C)
        return w(e, t, r, 0 === i ? H : c, d, h, g)
      }
      function G(e, t, r) {
        return w(e, t, r, N, i(y), f(e, 2, -2), 0)
      }
      function Y(e, t, r, n) {
        return w(e, t, r, W, f(e, 0, n), f(e, n + 1, -1), n)
      }
      var J = function (e, t, r) {
          for (
            var n = 0, o = 0;
            (n = o), (o = C()), 38 === n && 12 === o && (t[r] = 1), !_(o);

          )
            O()
          return R(e, v)
        },
        Q = function (e, t) {
          return P(
            (function (e, t) {
              var r = -1,
                n = 44
              do {
                switch (_(n)) {
                  case 0:
                    38 === n && 12 === C() && (t[r] = 1),
                      (e[r] += J(v - 1, t, r))
                    break
                  case 2:
                    e[r] += j(n)
                    break
                  case 4:
                    if (44 === n) {
                      ;(e[++r] = 58 === C() ? '&\f' : ''), (t[r] = e[r].length)
                      break
                    }
                  default:
                    e[r] += i(n)
                }
              } while ((n = O()))
              return e
            })(A(e), t)
          )
        },
        ee = new WeakMap(),
        te = function (e) {
          if ('rule' === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                r = e.parent,
                n = e.column === r.column && e.line === r.line;
              'rule' !== r.type;

            )
              if (!(r = r.parent)) return
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || ee.get(r)) &&
              !n
            ) {
              ee.set(e, !0)
              for (
                var o = [], i = Q(t, o), a = r.props, s = 0, u = 0;
                s < i.length;
                s++
              )
                for (var l = 0; l < a.length; l++, u++)
                  e.props[u] = o[s]
                    ? i[s].replace(/&\f/g, a[l])
                    : a[l] + ' ' + i[s]
            }
          }
        },
        re = function (e) {
          if ('decl' === e.type) {
            var t = e.value
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ''), (e.value = ''))
          }
        },
        ne = [
          function (e, t, r, n) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case W:
                  e.return = V(e.value, e.length)
                  break
                case U:
                  return $([k(e, { value: u(e.value, '@', '@' + M) })], n)
                case H:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join('')
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ':read-only':
                        case ':read-write':
                          return $(
                            [
                              k(e, {
                                props: [u(t, /:(read-\w+)/, ':-moz-$1')],
                              }),
                            ],
                            n
                          )
                        case '::placeholder':
                          return $(
                            [
                              k(e, {
                                props: [
                                  u(t, /:(plac\w+)/, ':-webkit-input-$1'),
                                ],
                              }),
                              k(e, { props: [u(t, /:(plac\w+)/, ':-moz-$1')] }),
                              k(e, {
                                props: [u(t, /:(plac\w+)/, F + 'input-$1')],
                              }),
                            ],
                            n
                          )
                      }
                      return ''
                    })
              }
          },
        ],
        oe = function (e) {
          var t = e.key
          if ('css' === t) {
            var r = document.querySelectorAll(
              'style[data-emotion]:not([data-s])'
            )
            Array.prototype.forEach.call(r, function (e) {
              ;-1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                (document.head.appendChild(e), e.setAttribute('data-s', ''))
            })
          }
          var o = e.stylisPlugins || ne
          var i,
            a,
            s = {},
            u = []
          ;(i = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute('data-emotion').split(' '), r = 1;
                  r < t.length;
                  r++
                )
                  s[t[r]] = !0
                u.push(e)
              }
            )
          var l,
            c,
            f = [
              q,
              ((c = function (e) {
                l.insert(e)
              }),
              function (e) {
                e.root || ((e = e.return) && c(e))
              }),
            ],
            d = (function (e) {
              var t = p(e)
              return function (r, n, o, i) {
                for (var a = '', s = 0; s < t; s++) a += e[s](r, n, o, i) || ''
                return a
              }
            })([te, re].concat(o, f))
          a = function (e, t, r, n) {
            ;(l = r),
              $(Z(e ? e + '{' + t.styles + '}' : t.styles), d),
              n && (h.inserted[t.name] = !0)
          }
          var h = {
            key: t,
            sheet: new n({
              key: t,
              container: i,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: a,
          }
          return h.sheet.hydrate(u), h
        }
    },
    7866: function (e, t) {
      'use strict'
      t.Z = function (e) {
        var t = Object.create(null)
        return function (r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r]
        }
      }
    },
    3663: function (e, t, r) {
      'use strict'
      r.d(t, {
        T: function () {
          return c
        },
        b: function () {
          return d
        },
        w: function () {
          return l
        },
      })
      var n = r(7294),
        o = r.t(n, 2),
        i = r(8357),
        a = r(7462),
        s = function (e) {
          var t = new WeakMap()
          return function (r) {
            if (t.has(r)) return t.get(r)
            var n = e(r)
            return t.set(r, n), n
          }
        },
        u =
          (r(3772),
          (0, n.createContext)(
            'undefined' !== typeof HTMLElement ? (0, i.Z)({ key: 'css' }) : null
          ))
      u.Provider
      var l = function (e) {
          return (0, n.forwardRef)(function (t, r) {
            var o = (0, n.useContext)(u)
            return e(t, o, r)
          })
        },
        c = (0, n.createContext)({})
      var f = s(function (e) {
          return s(function (t) {
            return (function (e, t) {
              return 'function' === typeof t ? t(e) : (0, a.Z)({}, e, t)
            })(e, t)
          })
        }),
        d = function (e) {
          var t = (0, n.useContext)(c)
          return (
            e.theme !== t && (t = f(t)(e.theme)),
            (0, n.createElement)(c.Provider, { value: t }, e.children)
          )
        }
      o.useInsertionEffect && o.useInsertionEffect
    },
    917: function (e, t, r) {
      'use strict'
      var n
      r.d(t, {
        xB: function () {
          return l
        },
        F4: function () {
          return f
        },
      })
      var o = r(7294),
        i = (r(8357), r(3663)),
        a = (r(8679), r(444)),
        s = r(3772),
        u = (n || (n = r.t(o, 2))).useInsertionEffect
          ? (n || (n = r.t(o, 2))).useInsertionEffect
          : o.useLayoutEffect,
        l = (0, i.w)(function (e, t) {
          var r = e.styles,
            n = (0, s.O)([r], void 0, (0, o.useContext)(i.T)),
            l = (0, o.useRef)()
          return (
            u(
              function () {
                var e = t.key + '-global',
                  r = new t.sheet.constructor({
                    key: e,
                    nonce: t.sheet.nonce,
                    container: t.sheet.container,
                    speedy: t.sheet.isSpeedy,
                  }),
                  o = !1,
                  i = document.querySelector(
                    'style[data-emotion="' + e + ' ' + n.name + '"]'
                  )
                return (
                  t.sheet.tags.length && (r.before = t.sheet.tags[0]),
                  null !== i &&
                    ((o = !0),
                    i.setAttribute('data-emotion', e),
                    r.hydrate([i])),
                  (l.current = [r, o]),
                  function () {
                    r.flush()
                  }
                )
              },
              [t]
            ),
            u(
              function () {
                var e = l.current,
                  r = e[0]
                if (e[1]) e[1] = !1
                else {
                  if (
                    (void 0 !== n.next && (0, a.My)(t, n.next, !0),
                    r.tags.length)
                  ) {
                    var o = r.tags[r.tags.length - 1].nextElementSibling
                    ;(r.before = o), r.flush()
                  }
                  t.insert('', n, r, !1)
                }
              },
              [t, n.name]
            ),
            null
          )
        })
      function c() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return (0, s.O)(t)
      }
      var f = function () {
        var e = c.apply(void 0, arguments),
          t = 'animation-' + e.name
        return {
          name: t,
          styles: '@keyframes ' + t + '{' + e.styles + '}',
          anim: 1,
          toString: function () {
            return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
          },
        }
      }
    },
    3772: function (e, t, r) {
      'use strict'
      r.d(t, {
        O: function () {
          return g
        },
      })
      var n = function (e) {
          for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(n)) |
                    ((255 & e.charCodeAt(++n)) << 8) |
                    ((255 & e.charCodeAt(++n)) << 16) |
                    ((255 & e.charCodeAt(++n)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (r =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)))
          switch (o) {
            case 3:
              r ^= (255 & e.charCodeAt(n + 2)) << 16
            case 2:
              r ^= (255 & e.charCodeAt(n + 1)) << 8
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
                ((59797 * (r >>> 16)) << 16)
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              ((59797 * (r >>> 16)) << 16)) ^
              (r >>> 15)) >>>
            0
          ).toString(36)
        },
        o = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        i = r(7866),
        a = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        u = function (e) {
          return 45 === e.charCodeAt(1)
        },
        l = function (e) {
          return null != e && 'boolean' !== typeof e
        },
        c = (0, i.Z)(function (e) {
          return u(e) ? e : e.replace(a, '-$&').toLowerCase()
        }),
        f = function (e, t) {
          switch (e) {
            case 'animation':
            case 'animationName':
              if ('string' === typeof t)
                return t.replace(s, function (e, t, r) {
                  return (p = { name: t, styles: r, next: p }), t
                })
          }
          return 1 === o[e] || u(e) || 'number' !== typeof t || 0 === t
            ? t
            : t + 'px'
        }
      function d(e, t, r) {
        if (null == r) return ''
        if (void 0 !== r.__emotion_styles) return r
        switch (typeof r) {
          case 'boolean':
            return ''
          case 'object':
            if (1 === r.anim)
              return (p = { name: r.name, styles: r.styles, next: p }), r.name
            if (void 0 !== r.styles) {
              var n = r.next
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (p = { name: n.name, styles: n.styles, next: p }),
                    (n = n.next)
              return r.styles + ';'
            }
            return (function (e, t, r) {
              var n = ''
              if (Array.isArray(r))
                for (var o = 0; o < r.length; o++) n += d(e, t, r[o]) + ';'
              else
                for (var i in r) {
                  var a = r[i]
                  if ('object' !== typeof a)
                    null != t && void 0 !== t[a]
                      ? (n += i + '{' + t[a] + '}')
                      : l(a) && (n += c(i) + ':' + f(i, a) + ';')
                  else if (
                    !Array.isArray(a) ||
                    'string' !== typeof a[0] ||
                    (null != t && void 0 !== t[a[0]])
                  ) {
                    var s = d(e, t, a)
                    switch (i) {
                      case 'animation':
                      case 'animationName':
                        n += c(i) + ':' + s + ';'
                        break
                      default:
                        n += i + '{' + s + '}'
                    }
                  } else
                    for (var u = 0; u < a.length; u++)
                      l(a[u]) && (n += c(i) + ':' + f(i, a[u]) + ';')
                }
              return n
            })(e, t, r)
          case 'function':
            if (void 0 !== e) {
              var o = p,
                i = r(e)
              return (p = o), d(e, t, i)
            }
        }
        if (null == t) return r
        var a = t[r]
        return void 0 !== a ? a : r
      }
      var p,
        h = /label:\s*([^\s;\n{]+)\s*(;|$)/g
      var g = function (e, t, r) {
        if (
          1 === e.length &&
          'object' === typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0]
        var o = !0,
          i = ''
        p = void 0
        var a = e[0]
        null == a || void 0 === a.raw
          ? ((o = !1), (i += d(r, t, a)))
          : (i += a[0])
        for (var s = 1; s < e.length; s++)
          (i += d(r, t, e[s])), o && (i += a[s])
        h.lastIndex = 0
        for (var u, l = ''; null !== (u = h.exec(i)); ) l += '-' + u[1]
        return { name: n(i) + l, styles: i, next: p }
      }
    },
    444: function (e, t, r) {
      'use strict'
      r.d(t, {
        fp: function () {
          return n
        },
        My: function () {
          return i
        },
        hC: function () {
          return o
        },
      })
      function n(e, t, r) {
        var n = ''
        return (
          r.split(' ').forEach(function (r) {
            void 0 !== e[r] ? t.push(e[r] + ';') : (n += r + ' ')
          }),
          n
        )
      }
      var o = function (e, t, r) {
          var n = e.key + '-' + t.name
          !1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles)
        },
        i = function (e, t, r) {
          o(e, t, r)
          var n = e.key + '-' + t.name
          if (void 0 === e.inserted[t.name]) {
            var i = t
            do {
              e.insert(t === i ? '.' + n : '', i, e.sheet, !0)
              i = i.next
            } while (void 0 !== i)
          }
        }
    },
    640: function (e, t, r) {
      'use strict'
      var n = r(1742),
        o = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' }
      e.exports = function (e, t) {
        var r,
          i,
          a,
          s,
          u,
          l,
          c = !1
        t || (t = {}), (r = t.debug || !1)
        try {
          if (
            ((a = n()),
            (s = document.createRange()),
            (u = document.getSelection()),
            ((l = document.createElement('span')).textContent = e),
            (l.style.all = 'unset'),
            (l.style.position = 'fixed'),
            (l.style.top = 0),
            (l.style.clip = 'rect(0, 0, 0, 0)'),
            (l.style.whiteSpace = 'pre'),
            (l.style.webkitUserSelect = 'text'),
            (l.style.MozUserSelect = 'text'),
            (l.style.msUserSelect = 'text'),
            (l.style.userSelect = 'text'),
            l.addEventListener('copy', function (n) {
              if ((n.stopPropagation(), t.format))
                if (
                  (n.preventDefault(), 'undefined' === typeof n.clipboardData)
                ) {
                  r && console.warn('unable to use e.clipboardData'),
                    r && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData()
                  var i = o[t.format] || o.default
                  window.clipboardData.setData(i, e)
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e)
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
            }),
            document.body.appendChild(l),
            s.selectNodeContents(l),
            u.addRange(s),
            !document.execCommand('copy'))
          )
            throw new Error('copy command was unsuccessful')
          c = !0
        } catch (f) {
          r && console.error('unable to copy using execCommand: ', f),
            r && console.warn('trying IE specific stuff')
          try {
            window.clipboardData.setData(t.format || 'text', e),
              t.onCopy && t.onCopy(window.clipboardData),
              (c = !0)
          } catch (f) {
            r && console.error('unable to copy using clipboardData: ', f),
              r && console.error('falling back to prompt'),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') +
                  '+C'
                return e.replace(/#{\s*key\s*}/g, t)
              })(
                'message' in t ? t.message : 'Copy to clipboard: #{key}, Enter'
              )),
              window.prompt(i, e)
          }
        } finally {
          u &&
            ('function' == typeof u.removeRange
              ? u.removeRange(s)
              : u.removeAllRanges()),
            l && document.body.removeChild(l),
            a()
        }
        return c
      }
    },
    4098: function (e, t) {
      var r = 'undefined' !== typeof self ? self : this,
        n = (function () {
          function e() {
            ;(this.fetch = !1), (this.DOMException = r.DOMException)
          }
          return (e.prototype = r), new e()
        })()
      !(function (e) {
        !(function (t) {
          var r = 'URLSearchParams' in e,
            n = 'Symbol' in e && 'iterator' in Symbol,
            o =
              'FileReader' in e &&
              'Blob' in e &&
              (function () {
                try {
                  return new Blob(), !0
                } catch (e) {
                  return !1
                }
              })(),
            i = 'FormData' in e,
            a = 'ArrayBuffer' in e
          if (a)
            var s = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ],
              u =
                ArrayBuffer.isView ||
                function (e) {
                  return e && s.indexOf(Object.prototype.toString.call(e)) > -1
                }
          function l(e) {
            if (
              ('string' !== typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            )
              throw new TypeError('Invalid character in header field name')
            return e.toLowerCase()
          }
          function c(e) {
            return 'string' !== typeof e && (e = String(e)), e
          }
          function f(e) {
            var t = {
              next: function () {
                var t = e.shift()
                return { done: void 0 === t, value: t }
              },
            }
            return (
              n &&
                (t[Symbol.iterator] = function () {
                  return t
                }),
              t
            )
          }
          function d(e) {
            ;(this.map = {}),
              e instanceof d
                ? e.forEach(function (e, t) {
                    this.append(t, e)
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1])
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t])
                  }, this)
          }
          function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError('Already read'))
            e.bodyUsed = !0
          }
          function h(e) {
            return new Promise(function (t, r) {
              ;(e.onload = function () {
                t(e.result)
              }),
                (e.onerror = function () {
                  r(e.error)
                })
            })
          }
          function g(e) {
            var t = new FileReader(),
              r = h(t)
            return t.readAsArrayBuffer(e), r
          }
          function m(e) {
            if (e.slice) return e.slice(0)
            var t = new Uint8Array(e.byteLength)
            return t.set(new Uint8Array(e)), t.buffer
          }
          function b() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t
                ;(this._bodyInit = e),
                  e
                    ? 'string' === typeof e
                      ? (this._bodyText = e)
                      : o && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : i && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : r && URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : a && o && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = m(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : a && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                      ? (this._bodyArrayBuffer = m(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ''),
                  this.headers.get('content-type') ||
                    ('string' === typeof e
                      ? this.headers.set(
                          'content-type',
                          'text/plain;charset=UTF-8'
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set('content-type', this._bodyBlob.type)
                      : r &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          'content-type',
                          'application/x-www-form-urlencoded;charset=UTF-8'
                        ))
              }),
              o &&
                ((this.blob = function () {
                  var e = p(this)
                  if (e) return e
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                  if (this._bodyFormData)
                    throw new Error('could not read FormData body as blob')
                  return Promise.resolve(new Blob([this._bodyText]))
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? p(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g)
                })),
              (this.text = function () {
                var e = p(this)
                if (e) return e
                if (this._bodyBlob)
                  return (function (e) {
                    var t = new FileReader(),
                      r = h(t)
                    return t.readAsText(e), r
                  })(this._bodyBlob)
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          r = new Array(t.length),
                          n = 0;
                        n < t.length;
                        n++
                      )
                        r[n] = String.fromCharCode(t[n])
                      return r.join('')
                    })(this._bodyArrayBuffer)
                  )
                if (this._bodyFormData)
                  throw new Error('could not read FormData body as text')
                return Promise.resolve(this._bodyText)
              }),
              i &&
                (this.formData = function () {
                  return this.text().then(x)
                }),
              (this.json = function () {
                return this.text().then(JSON.parse)
              }),
              this
            )
          }
          ;(d.prototype.append = function (e, t) {
            ;(e = l(e)), (t = c(t))
            var r = this.map[e]
            this.map[e] = r ? r + ', ' + t : t
          }),
            (d.prototype.delete = function (e) {
              delete this.map[l(e)]
            }),
            (d.prototype.get = function (e) {
              return (e = l(e)), this.has(e) ? this.map[e] : null
            }),
            (d.prototype.has = function (e) {
              return this.map.hasOwnProperty(l(e))
            }),
            (d.prototype.set = function (e, t) {
              this.map[l(e)] = c(t)
            }),
            (d.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
            }),
            (d.prototype.keys = function () {
              var e = []
              return (
                this.forEach(function (t, r) {
                  e.push(r)
                }),
                f(e)
              )
            }),
            (d.prototype.values = function () {
              var e = []
              return (
                this.forEach(function (t) {
                  e.push(t)
                }),
                f(e)
              )
            }),
            (d.prototype.entries = function () {
              var e = []
              return (
                this.forEach(function (t, r) {
                  e.push([r, t])
                }),
                f(e)
              )
            }),
            n && (d.prototype[Symbol.iterator] = d.prototype.entries)
          var v = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
          function y(e, t) {
            var r = (t = t || {}).body
            if (e instanceof y) {
              if (e.bodyUsed) throw new TypeError('Already read')
              ;(this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new d(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                r ||
                  null == e._bodyInit ||
                  ((r = e._bodyInit), (e.bodyUsed = !0))
            } else this.url = String(e)
            if (
              ((this.credentials =
                t.credentials || this.credentials || 'same-origin'),
              (!t.headers && this.headers) || (this.headers = new d(t.headers)),
              (this.method = (function (e) {
                var t = e.toUpperCase()
                return v.indexOf(t) > -1 ? t : e
              })(t.method || this.method || 'GET')),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ('GET' === this.method || 'HEAD' === this.method) && r)
            )
              throw new TypeError('Body not allowed for GET or HEAD requests')
            this._initBody(r)
          }
          function x(e) {
            var t = new FormData()
            return (
              e
                .trim()
                .split('&')
                .forEach(function (e) {
                  if (e) {
                    var r = e.split('='),
                      n = r.shift().replace(/\+/g, ' '),
                      o = r.join('=').replace(/\+/g, ' ')
                    t.append(decodeURIComponent(n), decodeURIComponent(o))
                  }
                }),
              t
            )
          }
          function w(e) {
            var t = new d()
            return (
              e
                .replace(/\r?\n[\t ]+/g, ' ')
                .split(/\r?\n/)
                .forEach(function (e) {
                  var r = e.split(':'),
                    n = r.shift().trim()
                  if (n) {
                    var o = r.join(':').trim()
                    t.append(n, o)
                  }
                }),
              t
            )
          }
          function k(e, t) {
            t || (t = {}),
              (this.type = 'default'),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
              (this.headers = new d(t.headers)),
              (this.url = t.url || ''),
              this._initBody(e)
          }
          ;(y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit })
          }),
            b.call(y.prototype),
            b.call(k.prototype),
            (k.prototype.clone = function () {
              return new k(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new d(this.headers),
                url: this.url,
              })
            }),
            (k.error = function () {
              var e = new k(null, { status: 0, statusText: '' })
              return (e.type = 'error'), e
            })
          var S = [301, 302, 303, 307, 308]
          ;(k.redirect = function (e, t) {
            if (-1 === S.indexOf(t)) throw new RangeError('Invalid status code')
            return new k(null, { status: t, headers: { location: e } })
          }),
            (t.DOMException = e.DOMException)
          try {
            new t.DOMException()
          } catch (C) {
            ;(t.DOMException = function (e, t) {
              ;(this.message = e), (this.name = t)
              var r = Error(e)
              this.stack = r.stack
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException)
          }
          function O(e, r) {
            return new Promise(function (n, i) {
              var a = new y(e, r)
              if (a.signal && a.signal.aborted)
                return i(new t.DOMException('Aborted', 'AbortError'))
              var s = new XMLHttpRequest()
              function u() {
                s.abort()
              }
              ;(s.onload = function () {
                var e = {
                  status: s.status,
                  statusText: s.statusText,
                  headers: w(s.getAllResponseHeaders() || ''),
                }
                e.url =
                  'responseURL' in s
                    ? s.responseURL
                    : e.headers.get('X-Request-URL')
                var t = 'response' in s ? s.response : s.responseText
                n(new k(t, e))
              }),
                (s.onerror = function () {
                  i(new TypeError('Network request failed'))
                }),
                (s.ontimeout = function () {
                  i(new TypeError('Network request failed'))
                }),
                (s.onabort = function () {
                  i(new t.DOMException('Aborted', 'AbortError'))
                }),
                s.open(a.method, a.url, !0),
                'include' === a.credentials
                  ? (s.withCredentials = !0)
                  : 'omit' === a.credentials && (s.withCredentials = !1),
                'responseType' in s && o && (s.responseType = 'blob'),
                a.headers.forEach(function (e, t) {
                  s.setRequestHeader(t, e)
                }),
                a.signal &&
                  (a.signal.addEventListener('abort', u),
                  (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      a.signal.removeEventListener('abort', u)
                  })),
                s.send('undefined' === typeof a._bodyInit ? null : a._bodyInit)
            })
          }
          ;(O.polyfill = !0),
            e.fetch ||
              ((e.fetch = O),
              (e.Headers = d),
              (e.Request = y),
              (e.Response = k)),
            (t.Headers = d),
            (t.Request = y),
            (t.Response = k),
            (t.fetch = O),
            Object.defineProperty(t, '__esModule', { value: !0 })
        })({})
      })(n),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill
      var o = n
      ;((t = o.fetch).default = o.fetch),
        (t.fetch = o.fetch),
        (t.Headers = o.Headers),
        (t.Request = o.Request),
        (t.Response = o.Response),
        (e.exports = t)
    },
    8679: function (e, t, r) {
      'use strict'
      var n = r(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {}
      function u(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || o
      }
      ;(s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a)
      var l = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype
      e.exports = function e(t, r, n) {
        if ('string' !== typeof r) {
          if (h) {
            var o = p(r)
            o && o !== h && e(t, o, n)
          }
          var a = c(r)
          f && (a = a.concat(f(r)))
          for (var s = u(t), g = u(r), m = 0; m < a.length; ++m) {
            var b = a[m]
            if (!i[b] && (!n || !n[b]) && (!g || !g[b]) && (!s || !s[b])) {
              var v = d(r, b)
              try {
                l(t, b, v)
              } catch (y) {}
            }
          }
        }
        return t
      }
    },
    8554: function (e, t, r) {
      e = r.nmd(e)
      var n = '__lodash_hash_undefined__',
        o = 9007199254740991,
        i = '[object Arguments]',
        a = '[object Function]',
        s = '[object Object]',
        u = /^\[object .+?Constructor\]$/,
        l = /^(?:0|[1-9]\d*)$/,
        c = {}
      ;(c['[object Float32Array]'] =
        c['[object Float64Array]'] =
        c['[object Int8Array]'] =
        c['[object Int16Array]'] =
        c['[object Int32Array]'] =
        c['[object Uint8Array]'] =
        c['[object Uint8ClampedArray]'] =
        c['[object Uint16Array]'] =
        c['[object Uint32Array]'] =
          !0),
        (c[i] =
          c['[object Array]'] =
          c['[object ArrayBuffer]'] =
          c['[object Boolean]'] =
          c['[object DataView]'] =
          c['[object Date]'] =
          c['[object Error]'] =
          c[a] =
          c['[object Map]'] =
          c['[object Number]'] =
          c[s] =
          c['[object RegExp]'] =
          c['[object Set]'] =
          c['[object String]'] =
          c['[object WeakMap]'] =
            !1)
      var f = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
        d = 'object' == typeof self && self && self.Object === Object && self,
        p = f || d || Function('return this')(),
        h = t && !t.nodeType && t,
        g = h && e && !e.nodeType && e,
        m = g && g.exports === h,
        b = m && f.process,
        v = (function () {
          try {
            var e = g && g.require && g.require('util').types
            return e || (b && b.binding && b.binding('util'))
          } catch (t) {}
        })(),
        y = v && v.isTypedArray
      function x(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t)
          case 1:
            return e.call(t, r[0])
          case 2:
            return e.call(t, r[0], r[1])
          case 3:
            return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
      }
      var w,
        k,
        S = Array.prototype,
        O = Function.prototype,
        C = Object.prototype,
        E = p['__core-js_shared__'],
        R = O.toString,
        _ = C.hasOwnProperty,
        A = (function () {
          var e = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || '')
          return e ? 'Symbol(src)_1.' + e : ''
        })(),
        P = C.toString,
        j = R.call(Object),
        T = RegExp(
          '^' +
            R.call(_)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        B = m ? p.Buffer : void 0,
        z = p.Symbol,
        L = p.Uint8Array,
        I = B ? B.allocUnsafe : void 0,
        F =
          ((w = Object.getPrototypeOf),
          (k = Object),
          function (e) {
            return w(k(e))
          }),
        D = Object.create,
        M = C.propertyIsEnumerable,
        N = S.splice,
        H = z ? z.toStringTag : void 0,
        W = (function () {
          try {
            var e = he(Object, 'defineProperty')
            return e({}, '', {}), e
          } catch (t) {}
        })(),
        U = B ? B.isBuffer : void 0,
        $ = Math.max,
        q = Date.now,
        V = he(p, 'Map'),
        Z = he(Object, 'create'),
        X = (function () {
          function e() {}
          return function (t) {
            if (!Ee(t)) return {}
            if (D) return D(t)
            e.prototype = t
            var r = new e()
            return (e.prototype = void 0), r
          }
        })()
      function K(e) {
        var t = -1,
          r = null == e ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      function G(e) {
        var t = -1,
          r = null == e ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      function Y(e) {
        var t = -1,
          r = null == e ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      function J(e) {
        var t = (this.__data__ = new G(e))
        this.size = t.size
      }
      function Q(e, t) {
        var r = we(e),
          n = !r && xe(e),
          o = !r && !n && Se(e),
          i = !r && !n && !o && _e(e),
          a = r || n || o || i,
          s = a
            ? (function (e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
                return n
              })(e.length, String)
            : [],
          u = s.length
        for (var l in e)
          (!t && !_.call(e, l)) ||
            (a &&
              ('length' == l ||
                (o && ('offset' == l || 'parent' == l)) ||
                (i &&
                  ('buffer' == l || 'byteLength' == l || 'byteOffset' == l)) ||
                ge(l, u))) ||
            s.push(l)
        return s
      }
      function ee(e, t, r) {
        ;((void 0 !== r && !ye(e[t], r)) || (void 0 === r && !(t in e))) &&
          ne(e, t, r)
      }
      function te(e, t, r) {
        var n = e[t]
        ;(_.call(e, t) && ye(n, r) && (void 0 !== r || t in e)) || ne(e, t, r)
      }
      function re(e, t) {
        for (var r = e.length; r--; ) if (ye(e[r][0], t)) return r
        return -1
      }
      function ne(e, t, r) {
        '__proto__' == t && W
          ? W(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r)
      }
      ;(K.prototype.clear = function () {
        ;(this.__data__ = Z ? Z(null) : {}), (this.size = 0)
      }),
        (K.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e]
          return (this.size -= t ? 1 : 0), t
        }),
        (K.prototype.get = function (e) {
          var t = this.__data__
          if (Z) {
            var r = t[e]
            return r === n ? void 0 : r
          }
          return _.call(t, e) ? t[e] : void 0
        }),
        (K.prototype.has = function (e) {
          var t = this.__data__
          return Z ? void 0 !== t[e] : _.call(t, e)
        }),
        (K.prototype.set = function (e, t) {
          var r = this.__data__
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = Z && void 0 === t ? n : t),
            this
          )
        }),
        (G.prototype.clear = function () {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (G.prototype.delete = function (e) {
          var t = this.__data__,
            r = re(t, e)
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : N.call(t, r, 1), --this.size, !0)
          )
        }),
        (G.prototype.get = function (e) {
          var t = this.__data__,
            r = re(t, e)
          return r < 0 ? void 0 : t[r][1]
        }),
        (G.prototype.has = function (e) {
          return re(this.__data__, e) > -1
        }),
        (G.prototype.set = function (e, t) {
          var r = this.__data__,
            n = re(r, e)
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
        }),
        (Y.prototype.clear = function () {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new K(),
              map: new (V || G)(),
              string: new K(),
            })
        }),
        (Y.prototype.delete = function (e) {
          var t = pe(this, e).delete(e)
          return (this.size -= t ? 1 : 0), t
        }),
        (Y.prototype.get = function (e) {
          return pe(this, e).get(e)
        }),
        (Y.prototype.has = function (e) {
          return pe(this, e).has(e)
        }),
        (Y.prototype.set = function (e, t) {
          var r = pe(this, e),
            n = r.size
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
        }),
        (J.prototype.clear = function () {
          ;(this.__data__ = new G()), (this.size = 0)
        }),
        (J.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e)
          return (this.size = t.size), r
        }),
        (J.prototype.get = function (e) {
          return this.__data__.get(e)
        }),
        (J.prototype.has = function (e) {
          return this.__data__.has(e)
        }),
        (J.prototype.set = function (e, t) {
          var r = this.__data__
          if (r instanceof G) {
            var n = r.__data__
            if (!V || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this
            r = this.__data__ = new Y(n)
          }
          return r.set(e, t), (this.size = r.size), this
        })
      var oe,
        ie = function (e, t, r) {
          for (var n = -1, o = Object(e), i = r(e), a = i.length; a--; ) {
            var s = i[oe ? a : ++n]
            if (!1 === t(o[s], s, o)) break
          }
          return e
        }
      function ae(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : H && H in Object(e)
          ? (function (e) {
              var t = _.call(e, H),
                r = e[H]
              try {
                e[H] = void 0
                var n = !0
              } catch (i) {}
              var o = P.call(e)
              n && (t ? (e[H] = r) : delete e[H])
              return o
            })(e)
          : (function (e) {
              return P.call(e)
            })(e)
      }
      function se(e) {
        return Re(e) && ae(e) == i
      }
      function ue(e) {
        return (
          !(
            !Ee(e) ||
            (function (e) {
              return !!A && A in e
            })(e)
          ) &&
          (Oe(e) ? T : u).test(
            (function (e) {
              if (null != e) {
                try {
                  return R.call(e)
                } catch (t) {}
                try {
                  return e + ''
                } catch (t) {}
              }
              return ''
            })(e)
          )
        )
      }
      function le(e) {
        if (!Ee(e))
          return (function (e) {
            var t = []
            if (null != e) for (var r in Object(e)) t.push(r)
            return t
          })(e)
        var t = me(e),
          r = []
        for (var n in e)
          ('constructor' != n || (!t && _.call(e, n))) && r.push(n)
        return r
      }
      function ce(e, t, r, n, o) {
        e !== t &&
          ie(
            t,
            function (i, a) {
              if ((o || (o = new J()), Ee(i)))
                !(function (e, t, r, n, o, i, a) {
                  var u = be(e, r),
                    l = be(t, r),
                    c = a.get(l)
                  if (c) return void ee(e, r, c)
                  var f = i ? i(u, l, r + '', e, t, a) : void 0,
                    d = void 0 === f
                  if (d) {
                    var p = we(l),
                      h = !p && Se(l),
                      g = !p && !h && _e(l)
                    ;(f = l),
                      p || h || g
                        ? we(u)
                          ? (f = u)
                          : Re((m = u)) && ke(m)
                          ? (f = (function (e, t) {
                              var r = -1,
                                n = e.length
                              t || (t = Array(n))
                              for (; ++r < n; ) t[r] = e[r]
                              return t
                            })(u))
                          : h
                          ? ((d = !1),
                            (f = (function (e, t) {
                              if (t) return e.slice()
                              var r = e.length,
                                n = I ? I(r) : new e.constructor(r)
                              return e.copy(n), n
                            })(l, !0)))
                          : g
                          ? ((d = !1),
                            (f = (function (e, t) {
                              var r = t
                                ? (function (e) {
                                    var t = new e.constructor(e.byteLength)
                                    return new L(t).set(new L(e)), t
                                  })(e.buffer)
                                : e.buffer
                              return new e.constructor(
                                r,
                                e.byteOffset,
                                e.length
                              )
                            })(l, !0)))
                          : (f = [])
                        : (function (e) {
                            if (!Re(e) || ae(e) != s) return !1
                            var t = F(e)
                            if (null === t) return !0
                            var r = _.call(t, 'constructor') && t.constructor
                            return (
                              'function' == typeof r &&
                              r instanceof r &&
                              R.call(r) == j
                            )
                          })(l) || xe(l)
                        ? ((f = u),
                          xe(u)
                            ? (f = (function (e) {
                                return (function (e, t, r, n) {
                                  var o = !r
                                  r || (r = {})
                                  var i = -1,
                                    a = t.length
                                  for (; ++i < a; ) {
                                    var s = t[i],
                                      u = n ? n(r[s], e[s], s, r, e) : void 0
                                    void 0 === u && (u = e[s]),
                                      o ? ne(r, s, u) : te(r, s, u)
                                  }
                                  return r
                                })(e, Ae(e))
                              })(u))
                            : (Ee(u) && !Oe(u)) ||
                              (f = (function (e) {
                                return 'function' != typeof e.constructor ||
                                  me(e)
                                  ? {}
                                  : X(F(e))
                              })(l)))
                        : (d = !1)
                  }
                  var m
                  d && (a.set(l, f), o(f, l, n, i, a), a.delete(l))
                  ee(e, r, f)
                })(e, t, a, r, ce, n, o)
              else {
                var u = n ? n(be(e, a), i, a + '', e, t, o) : void 0
                void 0 === u && (u = i), ee(e, a, u)
              }
            },
            Ae
          )
      }
      function fe(e, t) {
        return ve(
          (function (e, t, r) {
            return (
              (t = $(void 0 === t ? e.length - 1 : t, 0)),
              function () {
                for (
                  var n = arguments,
                    o = -1,
                    i = $(n.length - t, 0),
                    a = Array(i);
                  ++o < i;

                )
                  a[o] = n[t + o]
                o = -1
                for (var s = Array(t + 1); ++o < t; ) s[o] = n[o]
                return (s[t] = r(a)), x(e, this, s)
              }
            )
          })(e, t, Te),
          e + ''
        )
      }
      var de = W
        ? function (e, t) {
            return W(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value:
                ((r = t),
                function () {
                  return r
                }),
              writable: !0,
            })
            var r
          }
        : Te
      function pe(e, t) {
        var r = e.__data__
        return (function (e) {
          var t = typeof e
          return 'string' == t ||
            'number' == t ||
            'symbol' == t ||
            'boolean' == t
            ? '__proto__' !== e
            : null === e
        })(t)
          ? r['string' == typeof t ? 'string' : 'hash']
          : r.map
      }
      function he(e, t) {
        var r = (function (e, t) {
          return null == e ? void 0 : e[t]
        })(e, t)
        return ue(r) ? r : void 0
      }
      function ge(e, t) {
        var r = typeof e
        return (
          !!(t = null == t ? o : t) &&
          ('number' == r || ('symbol' != r && l.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        )
      }
      function me(e) {
        var t = e && e.constructor
        return e === (('function' == typeof t && t.prototype) || C)
      }
      function be(e, t) {
        if (
          ('constructor' !== t || 'function' !== typeof e[t]) &&
          '__proto__' != t
        )
          return e[t]
      }
      var ve = (function (e) {
        var t = 0,
          r = 0
        return function () {
          var n = q(),
            o = 16 - (n - r)
          if (((r = n), o > 0)) {
            if (++t >= 800) return arguments[0]
          } else t = 0
          return e.apply(void 0, arguments)
        }
      })(de)
      function ye(e, t) {
        return e === t || (e !== e && t !== t)
      }
      var xe = se(
          (function () {
            return arguments
          })()
        )
          ? se
          : function (e) {
              return Re(e) && _.call(e, 'callee') && !M.call(e, 'callee')
            },
        we = Array.isArray
      function ke(e) {
        return null != e && Ce(e.length) && !Oe(e)
      }
      var Se =
        U ||
        function () {
          return !1
        }
      function Oe(e) {
        if (!Ee(e)) return !1
        var t = ae(e)
        return (
          t == a ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        )
      }
      function Ce(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= o
      }
      function Ee(e) {
        var t = typeof e
        return null != e && ('object' == t || 'function' == t)
      }
      function Re(e) {
        return null != e && 'object' == typeof e
      }
      var _e = y
        ? (function (e) {
            return function (t) {
              return e(t)
            }
          })(y)
        : function (e) {
            return Re(e) && Ce(e.length) && !!c[ae(e)]
          }
      function Ae(e) {
        return ke(e) ? Q(e, !0) : le(e)
      }
      var Pe,
        je =
          ((Pe = function (e, t, r, n) {
            ce(e, t, r, n)
          }),
          fe(function (e, t) {
            var r = -1,
              n = t.length,
              o = n > 1 ? t[n - 1] : void 0,
              i = n > 2 ? t[2] : void 0
            for (
              o = Pe.length > 3 && 'function' == typeof o ? (n--, o) : void 0,
                i &&
                  (function (e, t, r) {
                    if (!Ee(r)) return !1
                    var n = typeof t
                    return (
                      !!('number' == n
                        ? ke(r) && ge(t, r.length)
                        : 'string' == n && (t in r)) && ye(r[t], e)
                    )
                  })(t[0], t[1], i) &&
                  ((o = n < 3 ? void 0 : o), (n = 1)),
                e = Object(e);
              ++r < n;

            ) {
              var a = t[r]
              a && Pe(e, a, r, o)
            }
            return e
          }))
      function Te(e) {
        return e
      }
      e.exports = je
    },
    1780: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(4332)
        },
      ])
    },
    4332: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return jt
          },
        })
      var n = r(5893),
        o = r(917),
        i = r(7294),
        a = function () {
          return i.createElement(o.xB, {
            styles:
              '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    ',
          })
        },
        s = r(6871),
        u = r(1604),
        l = r(949),
        c = r(5393),
        f = r(7375),
        d = r(2021),
        p = r(9703),
        h = r(8554),
        g = r.n(h),
        m = function (e) {
          var t = e.children,
            r = e.colorModeManager,
            n = e.portalZIndex,
            o = e.resetCSS,
            d = void 0 === o || o,
            p = e.theme,
            h = void 0 === p ? {} : p,
            g = e.environment,
            m = e.cssVarsRoot,
            b = i.createElement(c.u, { environment: g }, t)
          return i.createElement(
            f.vc,
            null,
            i.createElement(
              u.f6,
              { theme: h, cssVarsRoot: m },
              i.createElement(
                l.SG,
                { colorModeManager: r, options: h.config },
                d && i.createElement(a, null),
                i.createElement(u.ZL, null),
                n ? i.createElement(s.hE, { zIndex: n }, b) : b
              )
            )
          )
        }
      function b() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return g().apply(void 0, [{}].concat(t, [v]))
      }
      function v(e, t, r, n) {
        if (
          ((0, p.mf)(e) || (0, p.mf)(t)) &&
          Object.prototype.hasOwnProperty.call(n, r)
        )
          return function () {
            var r = (0, p.mf)(e) ? e.apply(void 0, arguments) : e,
              n = (0, p.mf)(t) ? t.apply(void 0, arguments) : t
            return g()({}, r, n, v)
          }
      }
      m.defaultProps = { theme: d.rS }
      var y = r(8718)
      function x(e) {
        var t = e.i18n,
          r = e.defaultNS,
          n = e.children,
          o = (0, i.useMemo)(
            function () {
              return { i18n: t, defaultNS: r }
            },
            [t, r]
          )
        return (0, i.createElement)(y.OO.Provider, { value: o }, n)
      }
      var w = (function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r]
          var n = [].concat(t),
            o = t[t.length - 1]
          return (
            (0, d.gk)(o) && n.length > 1
              ? (n = n.slice(0, n.length - 1))
              : (o = d.rS),
            p.zG.apply(
              void 0,
              n.map(function (e) {
                return function (t) {
                  return (0, p.mf)(e) ? e(t) : b(t, e)
                }
              })
            )(o)
          )
        })({ config: { useSystemColorMode: !1, initialColorMode: 'dark' } }),
        k = w
      function S(e) {
        return (
          (S =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          S(e)
        )
      }
      var O = r(5671),
        C = r(3144)
      function E(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function R(e, t) {
        return (
          (R =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          R(e, t)
        )
      }
      function _(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && R(e, t)
      }
      function A(e, t) {
        if (t && ('object' === S(t) || 'function' === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return E(e)
      }
      function P(e) {
        return (
          (P = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          P(e)
        )
      }
      var j = r(4942),
        T = r(3878)
      var B = r(1563),
        z = r(5267)
      function L(e) {
        return (
          (0, T.Z)(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e)
          })(e) ||
          (0, B.Z)(e) ||
          (0, z.Z)()
        )
      }
      function I(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var D = {
          type: 'logger',
          log: function (e) {
            this.output('log', e)
          },
          warn: function (e) {
            this.output('warn', e)
          },
          error: function (e) {
            this.output('error', e)
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t)
          },
        },
        M = (function () {
          function e(t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            ;(0, O.Z)(this, e), this.init(t, r)
          }
          return (
            (0, C.Z)(e, [
              {
                key: 'init',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  ;(this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || D),
                    (this.options = t),
                    (this.debug = t.debug)
                },
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e
                },
              },
              {
                key: 'log',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r]
                  return this.forward(t, 'log', '', !0)
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r]
                  return this.forward(t, 'warn', '', !0)
                },
              },
              {
                key: 'error',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r]
                  return this.forward(t, 'error', '')
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r]
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0)
                },
              },
              {
                key: 'forward',
                value: function (e, t, r, n) {
                  return n && !this.debug
                    ? null
                    : ('string' === typeof e[0] &&
                        (e[0] = ''
                          .concat(r)
                          .concat(this.prefix, ' ')
                          .concat(e[0])),
                      this.logger[t](e))
                },
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    F(
                      F(
                        {},
                        { prefix: ''.concat(this.prefix, ':').concat(t, ':') }
                      ),
                      this.options
                    )
                  )
                },
              },
            ]),
            e
          )
        })(),
        N = new M(),
        H = (function () {
          function e() {
            ;(0, O.Z)(this, e), (this.observers = {})
          }
          return (
            (0, C.Z)(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var r = this
                  return (
                    e.split(' ').forEach(function (e) {
                      ;(r.observers[e] = r.observers[e] || []),
                        r.observers[e].push(t)
                    }),
                    this
                  )
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e
                        ) {
                          return e !== t
                        }))
                      : delete this.observers[e])
                },
              },
              {
                key: 'emit',
                value: function (e) {
                  for (
                    var t = arguments.length,
                      r = new Array(t > 1 ? t - 1 : 0),
                      n = 1;
                    n < t;
                    n++
                  )
                    r[n - 1] = arguments[n]
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e])
                    o.forEach(function (e) {
                      e.apply(void 0, r)
                    })
                  }
                  if (this.observers['*']) {
                    var i = [].concat(this.observers['*'])
                    i.forEach(function (t) {
                      t.apply(t, [e].concat(r))
                    })
                  }
                },
              },
            ]),
            e
          )
        })()
      function W() {
        var e,
          t,
          r = new Promise(function (r, n) {
            ;(e = r), (t = n)
          })
        return (r.resolve = e), (r.reject = t), r
      }
      function U(e) {
        return null == e ? '' : '' + e
      }
      function $(e, t, r) {
        e.forEach(function (e) {
          t[e] && (r[e] = t[e])
        })
      }
      function q(e, t, r) {
        function n(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e
        }
        function o() {
          return !e || 'string' === typeof e
        }
        for (
          var i = 'string' !== typeof t ? [].concat(t) : t.split('.');
          i.length > 1;

        ) {
          if (o()) return {}
          var a = n(i.shift())
          !e[a] && r && (e[a] = new r()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {})
        }
        return o() ? {} : { obj: e, k: n(i.shift()) }
      }
      function V(e, t, r) {
        var n = q(e, t, Object)
        n.obj[n.k] = r
      }
      function Z(e, t) {
        var r = q(e, t),
          n = r.obj,
          o = r.k
        if (n) return n[o]
      }
      function X(e, t, r) {
        var n = Z(e, r)
        return void 0 !== n ? n : Z(t, r)
      }
      function K(e, t, r) {
        for (var n in t)
          '__proto__' !== n &&
            'constructor' !== n &&
            (n in e
              ? 'string' === typeof e[n] ||
                e[n] instanceof String ||
                'string' === typeof t[n] ||
                t[n] instanceof String
                ? r && (e[n] = t[n])
                : K(e[n], t[n], r)
              : (e[n] = t[n]))
        return e
      }
      function G(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      }
      var Y = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
      }
      function J(e) {
        return 'string' === typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return Y[e]
            })
          : e
      }
      var Q =
          'undefined' !== typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        ee = [' ', ',', '?', '!', ';']
      function te(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? te(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function ne(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = P(e)
          if (t) {
            var o = P(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return A(this, r)
        }
      }
      function oe(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.'
        if (e) {
          if (e[t]) return e[t]
          for (var n = t.split(r), o = e, i = 0; i < n.length; ++i) {
            if (!o) return
            if ('string' === typeof o[n[i]] && i + 1 < n.length) return
            if (void 0 === o[n[i]]) {
              for (
                var a = 2, s = n.slice(i, i + a).join(r), u = o[s];
                void 0 === u && n.length > i + a;

              )
                a++, (u = o[(s = n.slice(i, i + a).join(r))])
              if (void 0 === u) return
              if (t.endsWith(s)) {
                if ('string' === typeof u) return u
                if (s && 'string' === typeof u[s]) return u[s]
              }
              var l = n.slice(i + a).join(r)
              return l ? oe(u, l, r) : void 0
            }
            o = o[n[i]]
          }
          return o
        }
      }
      var ie = (function (e) {
          _(r, e)
          var t = ne(r)
          function r(e) {
            var n,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' }
            return (
              (0, O.Z)(this, r),
              (n = t.call(this)),
              Q && H.call(E(n)),
              (n.data = e || {}),
              (n.options = o),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              void 0 === n.options.ignoreJSONStructure &&
                (n.options.ignoreJSONStructure = !0),
              n
            )
          }
          return (
            (0, C.Z)(r, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e)
                  t > -1 && this.options.ns.splice(t, 1)
                },
              },
              {
                key: 'getResource',
                value: function (e, t, r) {
                  var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== n.keySeparator
                        ? n.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== n.ignoreJSONStructure
                        ? n.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t]
                  r && 'string' !== typeof r && (a = a.concat(r)),
                    r &&
                      'string' === typeof r &&
                      (a = a.concat(o ? r.split(o) : r)),
                    e.indexOf('.') > -1 && (a = e.split('.'))
                  var s = Z(this.data, a)
                  return s || !i || 'string' !== typeof r
                    ? s
                    : oe(this.data && this.data[e] && this.data[e][t], r, o)
                },
              },
              {
                key: 'addResource',
                value: function (e, t, r, n) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator
                  void 0 === i && (i = '.')
                  var a = [e, t]
                  r && (a = a.concat(i ? r.split(i) : r)),
                    e.indexOf('.') > -1 &&
                      ((n = t), (t = (a = e.split('.'))[1])),
                    this.addNamespaces(t),
                    V(this.data, a, n),
                    o.silent || this.emit('added', e, t, r, n)
                },
              },
              {
                key: 'addResources',
                value: function (e, t, r) {
                  var n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 }
                  for (var o in r)
                    ('string' !== typeof r[o] &&
                      '[object Array]' !==
                        Object.prototype.toString.apply(r[o])) ||
                      this.addResource(e, t, o, r[o], { silent: !0 })
                  n.silent || this.emit('added', e, t, r)
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, r, n, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t]
                  e.indexOf('.') > -1 &&
                    ((n = r), (r = t), (t = (a = e.split('.'))[1])),
                    this.addNamespaces(t)
                  var s = Z(this.data, a) || {}
                  n ? K(s, r, o) : (s = re(re({}, s), r)),
                    V(this.data, a, s),
                    i.silent || this.emit('added', e, t, r)
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t)
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t)
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI
                      ? re(re({}, {}), this.getResource(e, t))
                      : this.getResource(e, t)
                  )
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e]
                },
              },
              {
                key: 'hasLanguageSomeTranslations',
                value: function (e) {
                  var t = this.getDataByLanguage(e)
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0
                  })
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data
                },
              },
            ]),
            r
          )
        })(H),
        ae = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e
          },
          handle: function (e, t, r, n, o) {
            var i = this
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, r, n, o))
              }),
              t
            )
          },
        }
      function se(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? se(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function le(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = P(e)
          if (t) {
            var o = P(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return A(this, r)
        }
      }
      var ce = {},
        fe = (function (e) {
          _(r, e)
          var t = le(r)
          function r(e) {
            var n,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            return (
              (0, O.Z)(this, r),
              (n = t.call(this)),
              Q && H.call(E(n)),
              $(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                e,
                E(n)
              ),
              (n.options = o),
              void 0 === n.options.keySeparator &&
                (n.options.keySeparator = '.'),
              (n.logger = N.create('translator')),
              n
            )
          }
          return (
            (0, C.Z)(
              r,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e)
                  },
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} }
                    if (void 0 === e || null === e) return !1
                    var r = this.resolve(e, t)
                    return r && void 0 !== r.res
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var r =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator
                    void 0 === r && (r = ':')
                    var n =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = r && e.indexOf(r) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, r) {
                          ;(t = t || ''), (r = r || '')
                          var n = ee.filter(function (e) {
                            return t.indexOf(e) < 0 && r.indexOf(e) < 0
                          })
                          if (0 === n.length) return !0
                          var o = new RegExp(
                              '('.concat(
                                n
                                  .map(function (e) {
                                    return '?' === e ? '\\?' : e
                                  })
                                  .join('|'),
                                ')'
                              )
                            ),
                            i = !o.test(e)
                          if (!i) {
                            var a = e.indexOf(r)
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0)
                          }
                          return i
                        })(e, r, n)
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp)
                      if (s && s.length > 0) return { key: e, namespaces: o }
                      var u = e.split(r)
                      ;(r !== n ||
                        (r === n && this.options.ns.indexOf(u[0]) > -1)) &&
                        (o = u.shift()),
                        (e = u.join(n))
                    }
                    return (
                      'string' === typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    )
                  },
                },
                {
                  key: 'translate',
                  value: function (e, t, n) {
                    var o = this
                    if (
                      ('object' !== S(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments
                          )),
                      t || (t = {}),
                      void 0 === e || null === e)
                    )
                      return ''
                    Array.isArray(e) || (e = [String(e)])
                    var i =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      a = this.extractFromKey(e[e.length - 1], t),
                      s = a.key,
                      u = a.namespaces,
                      l = u[u.length - 1],
                      c = t.lng || this.language,
                      f =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode
                    if (c && 'cimode' === c.toLowerCase()) {
                      if (f) {
                        var d = t.nsSeparator || this.options.nsSeparator
                        return l + d + s
                      }
                      return s
                    }
                    var p = this.resolve(e, t),
                      h = p && p.res,
                      g = (p && p.usedKey) || s,
                      m = (p && p.exactUsedKey) || s,
                      b = Object.prototype.toString.apply(h),
                      v = [
                        '[object Number]',
                        '[object Function]',
                        '[object RegExp]',
                      ],
                      y =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      w =
                        'string' !== typeof h &&
                        'boolean' !== typeof h &&
                        'number' !== typeof h
                    if (
                      x &&
                      h &&
                      w &&
                      v.indexOf(b) < 0 &&
                      ('string' !== typeof y || '[object Array]' !== b)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects)
                        return (
                          this.options.returnedObjectHandler ||
                            this.logger.warn(
                              'accessing an object - but returnObjects options is not enabled!'
                            ),
                          this.options.returnedObjectHandler
                            ? this.options.returnedObjectHandler(
                                g,
                                h,
                                ue(ue({}, t), {}, { ns: u })
                              )
                            : "key '"
                                .concat(s, ' (')
                                .concat(
                                  this.language,
                                  ")' returned an object instead of string."
                                )
                        )
                      if (i) {
                        var k = '[object Array]' === b,
                          O = k ? [] : {},
                          C = k ? m : g
                        for (var E in h)
                          if (Object.prototype.hasOwnProperty.call(h, E)) {
                            var R = ''.concat(C).concat(i).concat(E)
                            ;(O[E] = this.translate(
                              R,
                              ue(ue({}, t), { joinArrays: !1, ns: u })
                            )),
                              O[E] === R && (O[E] = h[E])
                          }
                        h = O
                      }
                    } else if (
                      x &&
                      'string' === typeof y &&
                      '[object Array]' === b
                    )
                      (h = h.join(y)) &&
                        (h = this.extendTranslation(h, e, t, n))
                    else {
                      var _ = !1,
                        A = !1,
                        P = void 0 !== t.count && 'string' !== typeof t.count,
                        j = r.hasDefaultValue(t),
                        T = P
                          ? this.pluralResolver.getSuffix(c, t.count, t)
                          : '',
                        B = t['defaultValue'.concat(T)] || t.defaultValue
                      !this.isValidLookup(h) && j && ((_ = !0), (h = B)),
                        this.isValidLookup(h) || ((A = !0), (h = s))
                      var z =
                          t.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey,
                        L = z && A ? void 0 : h,
                        I = j && B !== h && this.options.updateMissing
                      if (A || _ || I) {
                        if (
                          (this.logger.log(
                            I ? 'updateKey' : 'missingKey',
                            c,
                            l,
                            s,
                            I ? B : h
                          ),
                          i)
                        ) {
                          var F = this.resolve(
                            s,
                            ue(ue({}, t), {}, { keySeparator: !1 })
                          )
                          F &&
                            F.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
                            )
                        }
                        var D = [],
                          M = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language
                          )
                        if (
                          'fallback' === this.options.saveMissingTo &&
                          M &&
                          M[0]
                        )
                          for (var N = 0; N < M.length; N++) D.push(M[N])
                        else
                          'all' === this.options.saveMissingTo
                            ? (D = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language
                              ))
                            : D.push(t.lng || this.language)
                        var H = function (e, r, n) {
                          var i = j && n !== h ? n : L
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, l, r, i, I, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, l, r, i, I, t),
                            o.emit('missingKey', e, l, r, h)
                        }
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && P
                            ? D.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e, t)
                                  .forEach(function (r) {
                                    H(
                                      [e],
                                      s + r,
                                      t['defaultValue'.concat(r)] || B
                                    )
                                  })
                              })
                            : H(D, s, B))
                      }
                      ;(h = this.extendTranslation(h, e, t, p, n)),
                        A &&
                          h === s &&
                          this.options.appendNamespaceToMissingKey &&
                          (h = ''.concat(l, ':').concat(s)),
                        (A || _) &&
                          this.options.parseMissingKeyHandler &&
                          (h =
                            'v1' !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  s,
                                  _ ? h : void 0
                                )
                              : this.options.parseMissingKeyHandler(h))
                    }
                    return h
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, r, n, o) {
                    var i = this
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        r,
                        n.usedLng,
                        n.usedNS,
                        n.usedKey,
                        { resolved: n }
                      )
                    else if (!r.skipInterpolation) {
                      r.interpolation &&
                        this.interpolator.init(
                          ue(ue({}, r), {
                            interpolation: ue(
                              ue({}, this.options.interpolation),
                              r.interpolation
                            ),
                          })
                        )
                      var a,
                        s =
                          'string' === typeof e &&
                          (r &&
                          r.interpolation &&
                          void 0 !== r.interpolation.skipOnVariables
                            ? r.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables)
                      if (s) {
                        var u = e.match(this.interpolator.nestingRegexp)
                        a = u && u.length
                      }
                      var l =
                        r.replace && 'string' !== typeof r.replace
                          ? r.replace
                          : r
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (l = ue(
                            ue({}, this.options.interpolation.defaultVariables),
                            l
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          l,
                          r.lng || this.language,
                          r
                        )),
                        s)
                      ) {
                        var c = e.match(this.interpolator.nestingRegexp)
                        a < (c && c.length) && (r.nest = !1)
                      }
                      !1 !== r.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, n = new Array(e), a = 0;
                              a < e;
                              a++
                            )
                              n[a] = arguments[a]
                            return o && o[0] === n[0] && !r.context
                              ? (i.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(n[0], ' in key: ')
                                    .concat(t[0])
                                ),
                                null)
                              : i.translate.apply(i, n.concat([t]))
                          },
                          r
                        )),
                        r.interpolation && this.interpolator.reset()
                    }
                    var f = r.postProcess || this.options.postProcess,
                      d = 'string' === typeof f ? [f] : f
                    return (
                      void 0 !== e &&
                        null !== e &&
                        d &&
                        d.length &&
                        !1 !== r.applyPostProcessor &&
                        (e = ae.handle(
                          d,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? ue({ i18nResolved: n }, r)
                            : r,
                          this
                        )),
                      e
                    )
                  },
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var t,
                      r,
                      n,
                      o,
                      i,
                      a = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                    return (
                      'string' === typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var u = a.extractFromKey(e, s),
                            l = u.key
                          r = l
                          var c = u.namespaces
                          a.options.fallbackNS &&
                            (c = c.concat(a.options.fallbackNS))
                          var f =
                              void 0 !== s.count && 'string' !== typeof s.count,
                            d =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            p =
                              void 0 !== s.context &&
                              ('string' === typeof s.context ||
                                'number' === typeof s.context) &&
                              '' !== s.context,
                            h = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng
                                )
                          c.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !ce[''.concat(h[0], '-').concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((ce[''.concat(h[0], '-').concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(r, '" for languages "')
                                    .concat(
                                      h.join(', '),
                                      '" won\'t get resolved as namespace "'
                                    )
                                    .concat(i, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                                )),
                              h.forEach(function (r) {
                                if (!a.isValidLookup(t)) {
                                  o = r
                                  var i,
                                    u = [l]
                                  if (
                                    a.i18nFormat &&
                                    a.i18nFormat.addLookupKeys
                                  )
                                    a.i18nFormat.addLookupKeys(u, l, r, e, s)
                                  else {
                                    var c
                                    f &&
                                      (c = a.pluralResolver.getSuffix(
                                        r,
                                        s.count,
                                        s
                                      ))
                                    var h = '_zero'
                                    if (
                                      (f && (u.push(l + c), d && u.push(l + h)),
                                      p)
                                    ) {
                                      var g = ''
                                        .concat(l)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context)
                                      u.push(g),
                                        f && (u.push(g + c), d && u.push(g + h))
                                    }
                                  }
                                  for (; (i = u.pop()); )
                                    a.isValidLookup(t) ||
                                      ((n = i), (t = a.getResource(r, e, i, s)))
                                }
                              }))
                          })
                        }
                      }),
                      {
                        res: t,
                        usedKey: r,
                        exactUsedKey: n,
                        usedLng: o,
                        usedNS: i,
                      }
                    )
                  },
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && '' === e)
                    )
                  },
                },
                {
                  key: 'getResource',
                  value: function (e, t, r) {
                    var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {}
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, r, n)
                      : this.resourceStore.getResource(e, t, r, n)
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue'
                    for (var r in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, r) &&
                        t === r.substring(0, t.length) &&
                        void 0 !== e[r]
                      )
                        return !0
                    return !1
                  },
                },
              ]
            ),
            r
          )
        })(H)
      function de(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
      var pe = (function () {
          function e(t) {
            ;(0, O.Z)(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = N.create('languageUtils'))
          }
          return (
            (0, C.Z)(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return null
                  var t = e.split('-')
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      'x' === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join('-')))
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || e.indexOf('-') < 0) return e
                  var t = e.split('-')
                  return this.formatLanguageCode(t[0])
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' === typeof e && e.indexOf('-') > -1) {
                    var t = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab',
                      ],
                      r = e.split('-')
                    return (
                      this.options.lowerCaseLng
                        ? (r = r.map(function (e) {
                            return e.toLowerCase()
                          }))
                        : 2 === r.length
                        ? ((r[0] = r[0].toLowerCase()),
                          (r[1] = r[1].toUpperCase()),
                          t.indexOf(r[1].toLowerCase()) > -1 &&
                            (r[1] = de(r[1].toLowerCase())))
                        : 3 === r.length &&
                          ((r[0] = r[0].toLowerCase()),
                          2 === r[1].length && (r[1] = r[1].toUpperCase()),
                          'sgn' !== r[0] &&
                            2 === r[2].length &&
                            (r[2] = r[2].toUpperCase()),
                          t.indexOf(r[1].toLowerCase()) > -1 &&
                            (r[1] = de(r[1].toLowerCase())),
                          t.indexOf(r[2].toLowerCase()) > -1 &&
                            (r[2] = de(r[2].toLowerCase()))),
                      r.join('-')
                    )
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e
                },
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  )
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    r = this
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var n = r.formatLanguageCode(e)
                          ;(r.options.supportedLngs && !r.isSupportedCode(n)) ||
                            (t = n)
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var n = r.getLanguagePartFromCode(e)
                            if (r.isSupportedCode(n)) return (t = n)
                            t = r.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(n)) return e
                            })
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng
                        )[0]),
                      t)
                    : null
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return []
                  if (
                    ('function' === typeof e && (e = e(t)),
                    'string' === typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e
                  if (!t) return e.default || []
                  var r = e[t]
                  return (
                    r || (r = e[this.getScriptPartFromCode(t)]),
                    r || (r = e[this.formatLanguageCode(t)]),
                    r || (r = e[this.getLanguagePartFromCode(t)]),
                    r || (r = e.default),
                    r || []
                  )
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var r = this,
                    n = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    o = [],
                    i = function (e) {
                      e &&
                        (r.isSupportedCode(e)
                          ? o.push(e)
                          : r.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(
                                e
                              )
                            ))
                    }
                  return (
                    'string' === typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load &&
                          i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load &&
                          i(this.getLanguagePartFromCode(e)))
                      : 'string' === typeof e && i(this.formatLanguageCode(e)),
                    n.forEach(function (e) {
                      o.indexOf(e) < 0 && i(r.formatLanguageCode(e))
                    }),
                    o
                  )
                },
              },
            ]),
            e
          )
        })(),
        he = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        ge = {
          1: function (e) {
            return Number(e > 1)
          },
          2: function (e) {
            return Number(1 != e)
          },
          3: function (e) {
            return 0
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            )
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
          },
          9: function (e) {
            return Number(e >= 2)
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            )
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11)
          },
          13: function (e) {
            return Number(0 !== e)
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1)
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            )
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            )
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            )
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            )
          },
        },
        me = ['v1', 'v2', 'v3'],
        be = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }
      function ve() {
        var e = {}
        return (
          he.forEach(function (t) {
            t.lngs.forEach(function (r) {
              e[r] = { numbers: t.nr, plurals: ge[t.fc] }
            })
          }),
          e
        )
      }
      var ye = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ;(0, O.Z)(this, e),
            (this.languageUtils = t),
            (this.options = r),
            (this.logger = N.create('pluralResolver')),
            (this.options.compatibilityJSON &&
              'v4' !== this.options.compatibilityJSON) ||
              ('undefined' !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = 'v3'),
              this.logger.error(
                'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
              )),
            (this.rules = ve())
        }
        return (
          (0, C.Z)(e, [
            {
              key: 'addRule',
              value: function (e, t) {
                this.rules[e] = t
              },
            },
            {
              key: 'getRule',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(e, {
                      type: t.ordinal ? 'ordinal' : 'cardinal',
                    })
                  } catch (r) {
                    return
                  }
                return (
                  this.rules[e] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                )
              },
            },
            {
              key: 'needsPlural',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(e, t)
                return this.shouldUseIntlApi()
                  ? r && r.resolvedOptions().pluralCategories.length > 1
                  : r && r.numbers.length > 1
              },
            },
            {
              key: 'getPluralFormsOfKey',
              value: function (e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                return this.getSuffixes(e, r).map(function (e) {
                  return ''.concat(t).concat(e)
                })
              },
            },
            {
              key: 'getSuffixes',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(e, r)
                return n
                  ? this.shouldUseIntlApi()
                    ? n
                        .resolvedOptions()
                        .pluralCategories.sort(function (e, t) {
                          return be[e] - be[t]
                        })
                        .map(function (e) {
                          return ''.concat(t.options.prepend).concat(e)
                        })
                    : n.numbers.map(function (n) {
                        return t.getSuffix(e, n, r)
                      })
                  : []
              },
            },
            {
              key: 'getSuffix',
              value: function (e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  n = this.getRule(e, r)
                return n
                  ? this.shouldUseIntlApi()
                    ? ''.concat(this.options.prepend).concat(n.select(t))
                    : this.getSuffixRetroCompatible(n, t)
                  : (this.logger.warn('no plural rule found for: '.concat(e)),
                    '')
              },
            },
            {
              key: 'getSuffixRetroCompatible',
              value: function (e, t) {
                var r = this,
                  n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                  o = e.numbers[n]
                this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0] &&
                  (2 === o ? (o = 'plural') : 1 === o && (o = ''))
                var i = function () {
                  return r.options.prepend && o.toString()
                    ? r.options.prepend + o.toString()
                    : o.toString()
                }
                return 'v1' === this.options.compatibilityJSON
                  ? 1 === o
                    ? ''
                    : 'number' === typeof o
                    ? '_plural_'.concat(o.toString())
                    : i()
                  : 'v2' === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === e.numbers.length &&
                      1 === e.numbers[0])
                  ? i()
                  : this.options.prepend && n.toString()
                  ? this.options.prepend + n.toString()
                  : n.toString()
              },
            },
            {
              key: 'shouldUseIntlApi',
              value: function () {
                return !me.includes(this.options.compatibilityJSON)
              },
            },
          ]),
          e
        )
      })()
      function xe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xe(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : xe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var ke = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ;(0, O.Z)(this, e),
            (this.logger = N.create('interpolator')),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e
              }),
            this.init(t)
        }
        return (
          (0, C.Z)(e, [
            {
              key: 'init',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                e.interpolation || (e.interpolation = { escapeValue: !0 })
                var t = e.interpolation
                ;(this.escape = void 0 !== t.escape ? t.escape : J),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? G(t.prefix)
                    : t.prefixEscaped || '{{'),
                  (this.suffix = t.suffix
                    ? G(t.suffix)
                    : t.suffixEscaped || '}}'),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ','),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ''
                    : t.unescapePrefix || '-'),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ''
                    : t.unescapeSuffix || ''),
                  (this.nestingPrefix = t.nestingPrefix
                    ? G(t.nestingPrefix)
                    : t.nestingPrefixEscaped || G('$t(')),
                  (this.nestingSuffix = t.nestingSuffix
                    ? G(t.nestingSuffix)
                    : t.nestingSuffixEscaped || G(')')),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ','),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp()
              },
            },
            {
              key: 'reset',
              value: function () {
                this.options && this.init(this.options)
              },
            },
            {
              key: 'resetRegExp',
              value: function () {
                var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix)
                this.regexp = new RegExp(e, 'g')
                var t = ''
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, '(.+?)')
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix)
                this.regexpUnescape = new RegExp(t, 'g')
                var r = ''
                  .concat(this.nestingPrefix, '(.+?)')
                  .concat(this.nestingSuffix)
                this.nestingRegexp = new RegExp(r, 'g')
              },
            },
            {
              key: 'interpolate',
              value: function (e, t, r, n) {
                var o,
                  i,
                  a,
                  s = this,
                  u =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {}
                function l(e) {
                  return e.replace(/\$/g, '$$$$')
                }
                var c = function (e) {
                  if (e.indexOf(s.formatSeparator) < 0) {
                    var o = X(t, u, e)
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          r,
                          we(we(we({}, n), t), {}, { interpolationkey: e })
                        )
                      : o
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    l = i.join(s.formatSeparator).trim()
                  return s.format(
                    X(t, u, a),
                    l,
                    r,
                    we(we(we({}, n), t), {}, { interpolationkey: a })
                  )
                }
                this.resetRegExp()
                var f =
                    (n && n.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  d =
                    n &&
                    n.interpolation &&
                    void 0 !== n.interpolation.skipOnVariables
                      ? n.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return l(e)
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? l(s.escape(e)) : l(e)
                      },
                    },
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var r = o[1].trim()
                      if (void 0 === (i = c(r)))
                        if ('function' === typeof f) {
                          var u = f(e, o, n)
                          i = 'string' === typeof u ? u : ''
                        } else if (n && n.hasOwnProperty(r)) i = ''
                        else {
                          if (d) {
                            i = o[0]
                            continue
                          }
                          s.logger.warn(
                            'missed to pass in variable '
                              .concat(r, ' for interpolating ')
                              .concat(e)
                          ),
                            (i = '')
                        }
                      else
                        'string' === typeof i ||
                          s.useRawValueToEscape ||
                          (i = U(i))
                      var l = t.safeValue(i)
                      if (
                        ((e = e.replace(o[0], l)),
                        d
                          ? ((t.regex.lastIndex += l.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break
                    }
                  }),
                  e
                )
              },
            },
            {
              key: 'nest',
              value: function (e, t) {
                var r,
                  n,
                  o = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  a = we({}, i)
                function s(e, t) {
                  var r = this.nestingOptionsSeparator
                  if (e.indexOf(r) < 0) return e
                  var n = e.split(new RegExp(''.concat(r, '[ ]*{'))),
                    o = '{'.concat(n[1])
                  ;(e = n[0]),
                    (o = (o = this.interpolate(o, a)).replace(/'/g, '"'))
                  try {
                    ;(a = JSON.parse(o)), t && (a = we(we({}, t), a))
                  } catch (i) {
                    return (
                      this.logger.warn(
                        'failed parsing options string in nesting for key '.concat(
                          e
                        ),
                        i
                      ),
                      ''.concat(e).concat(r).concat(o)
                    )
                  }
                  return delete a.defaultValue, e
                }
                for (
                  a.applyPostProcessor = !1, delete a.defaultValue;
                  (r = this.nestingRegexp.exec(e));

                ) {
                  var u = [],
                    l = !1
                  if (
                    -1 !== r[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(r[1])
                  ) {
                    var c = r[1].split(this.formatSeparator).map(function (e) {
                      return e.trim()
                    })
                    ;(r[1] = c.shift()), (u = c), (l = !0)
                  }
                  if (
                    (n = t(s.call(this, r[1].trim(), a), a)) &&
                    r[0] === e &&
                    'string' !== typeof n
                  )
                    return n
                  'string' !== typeof n && (n = U(n)),
                    n ||
                      (this.logger.warn(
                        'missed to resolve '
                          .concat(r[1], ' for nesting ')
                          .concat(e)
                      ),
                      (n = '')),
                    l &&
                      (n = u.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          i.lng,
                          we(we({}, i), {}, { interpolationkey: r[1].trim() })
                        )
                      }, n.trim())),
                    (e = e.replace(r[0], n)),
                    (this.regexp.lastIndex = 0)
                }
                return e
              },
            },
          ]),
          e
        )
      })()
      function Se(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Se(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var Ce = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          ;(0, O.Z)(this, e),
            (this.logger = N.create('formatter')),
            (this.options = t),
            (this.formats = {
              number: function (e, t, r) {
                return new Intl.NumberFormat(t, r).format(e)
              },
              currency: function (e, t, r) {
                return new Intl.NumberFormat(
                  t,
                  Oe(Oe({}, r), {}, { style: 'currency' })
                ).format(e)
              },
              datetime: function (e, t, r) {
                return new Intl.DateTimeFormat(t, Oe({}, r)).format(e)
              },
              relativetime: function (e, t, r) {
                return new Intl.RelativeTimeFormat(t, Oe({}, r)).format(
                  e,
                  r.range || 'day'
                )
              },
              list: function (e, t, r) {
                return new Intl.ListFormat(t, Oe({}, r)).format(e)
              },
            }),
            this.init(t)
        }
        return (
          (0, C.Z)(e, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  r = t.interpolation
                this.formatSeparator = r.formatSeparator
                  ? r.formatSeparator
                  : r.formatSeparator || ','
              },
            },
            {
              key: 'add',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t
              },
            },
            {
              key: 'format',
              value: function (e, t, r, n) {
                var o = this
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var i = (function (e) {
                      var t = e.toLowerCase().trim(),
                        r = {}
                      if (e.indexOf('(') > -1) {
                        var n = e.split('(')
                        t = n[0].toLowerCase().trim()
                        var o = n[1].substring(0, n[1].length - 1)
                        'currency' === t && o.indexOf(':') < 0
                          ? r.currency || (r.currency = o.trim())
                          : 'relativetime' === t && o.indexOf(':') < 0
                          ? r.range || (r.range = o.trim())
                          : o.split(';').forEach(function (e) {
                              if (e) {
                                var t = L(e.split(':')),
                                  n = t[0],
                                  o = t.slice(1).join(':')
                                r[n.trim()] || (r[n.trim()] = o.trim()),
                                  'false' === o.trim() && (r[n.trim()] = !1),
                                  'true' === o.trim() && (r[n.trim()] = !0),
                                  isNaN(o.trim()) ||
                                    (r[n.trim()] = parseInt(o.trim(), 10))
                              }
                            })
                      }
                      return { formatName: t, formatOptions: r }
                    })(t),
                    a = i.formatName,
                    s = i.formatOptions
                  if (o.formats[a]) {
                    var u = e
                    try {
                      var l =
                          (n &&
                            n.formatParams &&
                            n.formatParams[n.interpolationkey]) ||
                          {},
                        c = l.locale || l.lng || n.locale || n.lng || r
                      u = o.formats[a](e, c, Oe(Oe(Oe({}, s), n), l))
                    } catch (f) {
                      o.logger.warn(f)
                    }
                    return u
                  }
                  return (
                    o.logger.warn(
                      'there was no format function for '.concat(a)
                    ),
                    e
                  )
                }, e)
              },
            },
          ]),
          e
        )
      })()
      function Ee(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ee(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ee(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function _e(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = P(e)
          if (t) {
            var o = P(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return A(this, r)
        }
      }
      var Ae = (function (e) {
        _(r, e)
        var t = _e(r)
        function r(e, n, o) {
          var i,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          return (
            (0, O.Z)(this, r),
            (i = t.call(this)),
            Q && H.call(E(i)),
            (i.backend = e),
            (i.store = n),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = N.create('backendConnector')),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          )
        }
        return (
          (0, C.Z)(r, [
            {
              key: 'queueLoad',
              value: function (e, t, r, n) {
                var o = this,
                  i = [],
                  a = [],
                  s = [],
                  u = []
                return (
                  e.forEach(function (e) {
                    var n = !0
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t)
                      !r.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? a.indexOf(s) < 0 && a.push(s)
                            : ((o.state[s] = 1),
                              (n = !1),
                              a.indexOf(s) < 0 && a.push(s),
                              i.indexOf(s) < 0 && i.push(s),
                              u.indexOf(t) < 0 && u.push(t)))
                    }),
                      n || s.push(e)
                  }),
                  (i.length || a.length) &&
                    this.queue.push({
                      pending: a,
                      loaded: {},
                      errors: [],
                      callback: n,
                    }),
                  {
                    toLoad: i,
                    pending: a,
                    toLoadLanguages: s,
                    toLoadNamespaces: u,
                  }
                )
              },
            },
            {
              key: 'loaded',
              value: function (e, t, r) {
                var n = e.split('|'),
                  o = n[0],
                  i = n[1]
                t && this.emit('failedLoading', o, i, t),
                  r && this.store.addResourceBundle(o, i, r),
                  (this.state[e] = t ? -1 : 2)
                var a = {}
                this.queue.forEach(function (r) {
                  !(function (e, t, r, n) {
                    var o = q(e, t, Object),
                      i = o.obj,
                      a = o.k
                    ;(i[a] = i[a] || []),
                      n && (i[a] = i[a].concat(r)),
                      n || i[a].push(r)
                  })(r.loaded, [o], i),
                    (function (e, t) {
                      for (var r = e.indexOf(t); -1 !== r; )
                        e.splice(r, 1), (r = e.indexOf(t))
                    })(r.pending, e),
                    t && r.errors.push(t),
                    0 !== r.pending.length ||
                      r.done ||
                      (Object.keys(r.loaded).forEach(function (e) {
                        a[e] || (a[e] = []),
                          r.loaded[e].length &&
                            r.loaded[e].forEach(function (t) {
                              a[e].indexOf(t) < 0 && a[e].push(t)
                            })
                      }),
                      (r.done = !0),
                      r.errors.length ? r.callback(r.errors) : r.callback())
                }),
                  this.emit('loaded', a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done
                  }))
              },
            },
            {
              key: 'read',
              value: function (e, t, r) {
                var n = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  a = arguments.length > 5 ? arguments[5] : void 0
                return e.length
                  ? this.backend[r](e, t, function (s, u) {
                      s && u && o < 5
                        ? setTimeout(function () {
                            n.read.call(n, e, t, r, o + 1, 2 * i, a)
                          }, i)
                        : a(s, u)
                    })
                  : a(null, {})
              },
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var r = this,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.'
                    ),
                    o && o()
                  )
                'string' === typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' === typeof t && (t = [t])
                var i = this.queueLoad(e, t, n, o)
                if (!i.toLoad.length) return i.pending.length || o(), null
                i.toLoad.forEach(function (e) {
                  r.loadOne(e)
                })
              },
            },
            {
              key: 'load',
              value: function (e, t, r) {
                this.prepareLoading(e, t, {}, r)
              },
            },
            {
              key: 'reload',
              value: function (e, t, r) {
                this.prepareLoading(e, t, { reload: !0 }, r)
              },
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  n = e.split('|'),
                  o = n[0],
                  i = n[1]
                this.read(o, i, 'read', void 0, void 0, function (n, a) {
                  n &&
                    t.logger.warn(
                      ''
                        .concat(r, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(o, ' failed'),
                      n
                    ),
                    !n &&
                      a &&
                      t.logger.log(
                        ''
                          .concat(r, 'loaded namespace ')
                          .concat(i, ' for language ')
                          .concat(o),
                        a
                      ),
                    t.loaded(e, n, a)
                })
              },
            },
            {
              key: 'saveMissing',
              value: function (e, t, r, n, o) {
                var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {}
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(r, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                    )
                  : void 0 !== r &&
                    null !== r &&
                    '' !== r &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        e,
                        t,
                        r,
                        n,
                        null,
                        Re(Re({}, i), {}, { isUpdate: o })
                      ),
                    e && e[0] && this.store.addResource(e[0], t, r, n))
              },
            },
          ]),
          r
        )
      })(H)
      function Pe() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {}
            if (
              ('object' === S(e[1]) && (t = e[1]),
              'string' === typeof e[1] && (t.defaultValue = e[1]),
              'string' === typeof e[2] && (t.tDescription = e[2]),
              'object' === S(e[2]) || 'object' === S(e[3]))
            ) {
              var r = e[3] || e[2]
              Object.keys(r).forEach(function (e) {
                t[e] = r[e]
              })
            }
            return t
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, r, n) {
              return e
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        }
      }
      function je(e) {
        return (
          'string' === typeof e.ns && (e.ns = [e.ns]),
          'string' === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          'string' === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf('cimode') < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        )
      }
      function Te(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Te(Object(r), !0).forEach(function (t) {
                ;(0, j.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function ze(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = P(e)
          if (t) {
            var o = P(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return A(this, r)
        }
      }
      function Le() {}
      function Ie(e) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (
          t
        ) {
          'function' === typeof e[t] && (e[t] = e[t].bind(e))
        })
      }
      var Fe = (function (e) {
        _(r, e)
        var t = ze(r)
        function r() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0
          if (
            ((0, O.Z)(this, r),
            (e = t.call(this)),
            Q && H.call(E(e)),
            (e.options = je(n)),
            (e.services = {}),
            (e.logger = N),
            (e.modules = { external: [] }),
            Ie(E(e)),
            o && !e.isInitialized && !n.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(n, o), A(e, E(e))
            setTimeout(function () {
              e.init(n, o)
            }, 0)
          }
          return e
        }
        return (
          (0, C.Z)(r, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r = arguments.length > 1 ? arguments[1] : void 0
                'function' === typeof t && ((r = t), (t = {})),
                  !t.defaultNS &&
                    t.ns &&
                    ('string' === typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : t.ns.indexOf('translation') < 0 &&
                        (t.defaultNS = t.ns[0]))
                var n = Pe()
                function o(e) {
                  return e ? ('function' === typeof e ? new e() : e) : null
                }
                if (
                  ((this.options = Be(Be(Be({}, n), this.options), je(t))),
                  'v1' !== this.options.compatibilityAPI &&
                    (this.options.interpolation = Be(
                      Be({}, n.interpolation),
                      this.options.interpolation
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  var i
                  this.modules.logger
                    ? N.init(o(this.modules.logger), this.options)
                    : N.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : 'undefined' !== typeof Intl && (i = Ce)
                  var a = new pe(this.options)
                  this.store = new ie(this.options.resources, this.options)
                  var s = this.services
                  ;(s.logger = N),
                    (s.resourceStore = this.store),
                    (s.languageUtils = a),
                    (s.pluralResolver = new ye(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    !i ||
                      (this.options.interpolation.format &&
                        this.options.interpolation.format !==
                          n.interpolation.format) ||
                      ((s.formatter = o(i)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format =
                        s.formatter.format.bind(s.formatter))),
                    (s.interpolator = new ke(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new Ae(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options
                    )),
                    s.backendConnector.on('*', function (t) {
                      for (
                        var r = arguments.length,
                          n = new Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        n[o - 1] = arguments[o]
                      e.emit.apply(e, [t].concat(n))
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init(
                        s,
                        this.options.detection,
                        this.options
                      )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new fe(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var r = arguments.length,
                          n = new Array(r > 1 ? r - 1 : 0),
                          o = 1;
                        o < r;
                        o++
                      )
                        n[o - 1] = arguments[o]
                      e.emit.apply(e, [t].concat(n))
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e)
                    })
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  r || (r = Le),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var u = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  )
                  u.length > 0 && 'dev' !== u[0] && (this.options.lng = u[0])
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    'init: no languageDetector is used and no lng is defined'
                  )
                var l = [
                  'getResource',
                  'hasResourceBundle',
                  'getResourceBundle',
                  'getDataByLanguage',
                ]
                l.forEach(function (t) {
                  e[t] = function () {
                    var r
                    return (r = e.store)[t].apply(r, arguments)
                  }
                })
                var c = [
                  'addResource',
                  'addResources',
                  'addResourceBundle',
                  'removeResourceBundle',
                ]
                c.forEach(function (t) {
                  e[t] = function () {
                    var r
                    return (r = e.store)[t].apply(r, arguments), e
                  }
                })
                var f = W(),
                  d = function () {
                    var t = function (t, n) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          'init: i18next is already initialized. You should call init just once!'
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        f.resolve(n),
                        r(t, n)
                    }
                    if (
                      e.languages &&
                      'v1' !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e))
                    e.changeLanguage(e.options.lng, t)
                  }
                return (
                  this.options.resources || !this.options.initImmediate
                    ? d()
                    : setTimeout(d, 0),
                  f
                )
              },
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Le,
                  n = r,
                  o = 'string' === typeof e ? e : this.language
                if (
                  ('function' === typeof e && (n = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && 'cimode' === o.toLowerCase()) return n()
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            i.indexOf(e) < 0 && i.push(e)
                          })
                    }
                  if (o) a(o)
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng
                    )
                    s.forEach(function (e) {
                      return a(e)
                    })
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (e) {
                      return a(e)
                    }),
                    this.services.backendConnector.load(
                      i,
                      this.options.ns,
                      function (e) {
                        e ||
                          t.resolvedLanguage ||
                          !t.language ||
                          t.setResolvedLanguage(t.language),
                          n(e)
                      }
                    )
                } else n(null)
              },
            },
            {
              key: 'reloadResources',
              value: function (e, t, r) {
                var n = W()
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  r || (r = Le),
                  this.services.backendConnector.reload(e, t, function (e) {
                    n.resolve(), r(e)
                  }),
                  n
                )
              },
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw new Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()'
                  )
                if (!e.type)
                  throw new Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()'
                  )
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type &&
                    (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && ae.addPostProcessor(e),
                  'formatter' === e.type && (this.modules.formatter = e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                )
              },
            },
            {
              key: 'setResolvedLanguage',
              value: function (e) {
                if (e && this.languages && !(['cimode', 'dev'].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var r = this.languages[t]
                    if (
                      !(['cimode', 'dev'].indexOf(r) > -1) &&
                      this.store.hasLanguageSomeTranslations(r)
                    ) {
                      this.resolvedLanguage = r
                      break
                    }
                  }
              },
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var r = this
                this.isLanguageChangingTo = e
                var n = W()
                this.emit('languageChanging', e)
                var o = function (e) {
                    ;(r.language = e),
                      (r.languages =
                        r.services.languageUtils.toResolveHierarchy(e)),
                      (r.resolvedLanguage = void 0),
                      r.setResolvedLanguage(e)
                  },
                  i = function (i) {
                    e || i || !r.services.languageDetector || (i = [])
                    var a =
                      'string' === typeof i
                        ? i
                        : r.services.languageUtils.getBestMatchFromCodes(i)
                    a &&
                      (r.language || o(a),
                      r.translator.language || r.translator.changeLanguage(a),
                      r.services.languageDetector &&
                        r.services.languageDetector.cacheUserLanguage(a)),
                      r.loadResources(a, function (e) {
                        !(function (e, i) {
                          i
                            ? (o(i),
                              r.translator.changeLanguage(i),
                              (r.isLanguageChangingTo = void 0),
                              r.emit('languageChanged', i),
                              r.logger.log('languageChanged', i))
                            : (r.isLanguageChangingTo = void 0),
                            n.resolve(function () {
                              return r.t.apply(r, arguments)
                            }),
                            t &&
                              t(e, function () {
                                return r.t.apply(r, arguments)
                              })
                        })(e, a)
                      })
                  }
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(i)
                      : i(e)
                    : i(this.services.languageDetector.detect()),
                  n
                )
              },
            },
            {
              key: 'getFixedT',
              value: function (e, t, r) {
                var n = this,
                  o = function e(t, o) {
                    var i
                    if ('object' !== S(o)) {
                      for (
                        var a = arguments.length,
                          s = new Array(a > 2 ? a - 2 : 0),
                          u = 2;
                        u < a;
                        u++
                      )
                        s[u - 2] = arguments[u]
                      i = n.options.overloadTranslationOptionHandler(
                        [t, o].concat(s)
                      )
                    } else i = Be({}, o)
                    ;(i.lng = i.lng || e.lng),
                      (i.lngs = i.lngs || e.lngs),
                      (i.ns = i.ns || e.ns)
                    var l = n.options.keySeparator || '.',
                      c = r ? ''.concat(r).concat(l).concat(t) : t
                    return n.t(c, i)
                  }
                return (
                  'string' === typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = r),
                  o
                )
              },
            },
            {
              key: 't',
              value: function () {
                var e
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                )
              },
            },
            {
              key: 'exists',
              value: function () {
                var e
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                )
              },
            },
            {
              key: 'setDefaultNamespace',
              value: function (e) {
                this.options.defaultNS = e
              },
            },
            {
              key: 'hasLoadedNamespace',
              value: function (e) {
                var t = this,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18next was not initialized',
                      this.languages
                    ),
                    !1
                  )
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18n.languages were undefined or empty',
                      this.languages
                    ),
                    !1
                  )
                var n = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1]
                if ('cimode' === n.toLowerCase()) return !0
                var a = function (e, r) {
                  var n =
                    t.services.backendConnector.state[
                      ''.concat(e, '|').concat(r)
                    ]
                  return -1 === n || 2 === n
                }
                if (r.precheck) {
                  var s = r.precheck(this, a)
                  if (void 0 !== s) return s
                }
                return (
                  !!this.hasResourceBundle(n, e) ||
                  !this.services.backendConnector.backend ||
                  !(!a(n, e) || (o && !a(i, e)))
                )
              },
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var r = this,
                  n = W()
                return this.options.ns
                  ? ('string' === typeof e && (e = [e]),
                    e.forEach(function (e) {
                      r.options.ns.indexOf(e) < 0 && r.options.ns.push(e)
                    }),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e)
                    }),
                    n)
                  : (t && t(), Promise.resolve())
              },
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var r = W()
                'string' === typeof e && (e = [e])
                var n = this.options.preload || [],
                  o = e.filter(function (e) {
                    return n.indexOf(e) < 0
                  })
                return o.length
                  ? ((this.options.preload = n.concat(o)),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e)
                    }),
                    r)
                  : (t && t(), Promise.resolve())
              },
            },
            {
              key: 'dir',
              value: function (e) {
                if (
                  (e ||
                    (e =
                      this.resolvedLanguage ||
                      (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                  !e)
                )
                  return 'rtl'
                return [
                  'ar',
                  'shu',
                  'sqr',
                  'ssh',
                  'xaa',
                  'yhd',
                  'yud',
                  'aao',
                  'abh',
                  'abv',
                  'acm',
                  'acq',
                  'acw',
                  'acx',
                  'acy',
                  'adf',
                  'ads',
                  'aeb',
                  'aec',
                  'afb',
                  'ajp',
                  'apc',
                  'apd',
                  'arb',
                  'arq',
                  'ars',
                  'ary',
                  'arz',
                  'auz',
                  'avl',
                  'ayh',
                  'ayl',
                  'ayn',
                  'ayp',
                  'bbz',
                  'pga',
                  'he',
                  'iw',
                  'ps',
                  'pbt',
                  'pbu',
                  'pst',
                  'prp',
                  'prd',
                  'ug',
                  'ur',
                  'ydd',
                  'yds',
                  'yih',
                  'ji',
                  'yi',
                  'hbo',
                  'men',
                  'xmn',
                  'fa',
                  'jpr',
                  'peo',
                  'pes',
                  'prs',
                  'dv',
                  'sam',
                  'ckb',
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(e)
                ) > -1 || e.toLowerCase().indexOf('-arab') > 1
                  ? 'rtl'
                  : 'ltr'
              },
            },
            {
              key: 'cloneInstance',
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Le,
                  o = Be(Be(Be({}, this.options), t), { isClone: !0 }),
                  i = new r(o),
                  a = ['store', 'services', 'language']
                return (
                  a.forEach(function (t) {
                    i[t] = e[t]
                  }),
                  (i.services = Be({}, this.services)),
                  (i.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  (i.translator = new fe(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        n = 1;
                      n < t;
                      n++
                    )
                      r[n - 1] = arguments[n]
                    i.emit.apply(i, [e].concat(r))
                  }),
                  i.init(o, n),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                  }),
                  i
                )
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                }
              },
            },
          ]),
          r
        )
      })(H)
      ;(0, j.Z)(Fe, 'createInstance', function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0
        return new Fe(e, t)
      })
      var De = Fe.createInstance()
      De.createInstance = Fe.createInstance
      De.createInstance,
        De.init,
        De.loadResources,
        De.reloadResources,
        De.use,
        De.changeLanguage,
        De.getFixedT,
        De.t,
        De.exists,
        De.setDefaultNamespace,
        De.hasLoadedNamespace,
        De.loadNamespaces,
        De.loadLanguages
      var Me = De
      function Ne(e) {
        return (
          (Ne =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Ne(e)
        )
      }
      var He = [],
        We = He.forEach,
        Ue = He.slice
      function $e(e) {
        return (
          We.call(Ue.call(arguments, 1), function (t) {
            if (t) for (var r in t) void 0 === e[r] && (e[r] = t[r])
          }),
          e
        )
      }
      function qe() {
        return (
          'function' === typeof XMLHttpRequest ||
          'object' ===
            ('undefined' === typeof XMLHttpRequest
              ? 'undefined'
              : Ne(XMLHttpRequest))
        )
      }
      var Ve,
        Ze,
        Xe,
        Ke = r(3154),
        Ge = r.t(Ke, 2)
      function Ye(e) {
        return (
          (Ye =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          Ye(e)
        )
      }
      'function' === typeof fetch &&
        ('undefined' !== typeof global && global.fetch
          ? (Ve = global.fetch)
          : 'undefined' !== typeof window &&
            window.fetch &&
            (Ve = window.fetch)),
        qe &&
          ('undefined' !== typeof global && global.XMLHttpRequest
            ? (Ze = global.XMLHttpRequest)
            : 'undefined' !== typeof window &&
              window.XMLHttpRequest &&
              (Ze = window.XMLHttpRequest)),
        'function' === typeof ActiveXObject &&
          ('undefined' !== typeof global && global.ActiveXObject
            ? (Xe = global.ActiveXObject)
            : 'undefined' !== typeof window &&
              window.ActiveXObject &&
              (Xe = window.ActiveXObject)),
        Ve || !Ge || Ze || Xe || (Ve = Ke || Ge),
        'function' !== typeof Ve && (Ve = void 0)
      var Je = function (e, t) {
          if (t && 'object' === Ye(t)) {
            var r = ''
            for (var n in t)
              r += '&' + encodeURIComponent(n) + '=' + encodeURIComponent(t[n])
            if (!r) return e
            e = e + (-1 !== e.indexOf('?') ? '&' : '?') + r.slice(1)
          }
          return e
        },
        Qe = function (e, t, r, n) {
          return (
            'function' === typeof r && ((n = r), (r = void 0)),
            (n = n || function () {}),
            Ve
              ? (function (e, t, r, n) {
                  e.queryStringParams && (t = Je(t, e.queryStringParams))
                  var o = $e(
                    {},
                    'function' === typeof e.customHeaders
                      ? e.customHeaders()
                      : e.customHeaders
                  )
                  r && (o['Content-Type'] = 'application/json'),
                    Ve(
                      t,
                      $e(
                        {
                          method: r ? 'POST' : 'GET',
                          body: r ? e.stringify(r) : void 0,
                          headers: o,
                        },
                        'function' === typeof e.requestOptions
                          ? e.requestOptions(r)
                          : e.requestOptions
                      )
                    )
                      .then(function (e) {
                        if (!e.ok)
                          return n(e.statusText || 'Error', {
                            status: e.status,
                          })
                        e.text()
                          .then(function (t) {
                            n(null, { status: e.status, data: t })
                          })
                          .catch(n)
                      })
                      .catch(n)
                })(e, t, r, n)
              : qe || 'function' === typeof ActiveXObject
              ? (function (e, t, r, n) {
                  r && 'object' === Ye(r) && (r = Je('', r).slice(1)),
                    e.queryStringParams && (t = Je(t, e.queryStringParams))
                  try {
                    var o
                    ;(o = Ze ? new Ze() : new Xe('MSXML2.XMLHTTP.3.0')).open(
                      r ? 'POST' : 'GET',
                      t,
                      1
                    ),
                      e.crossDomain ||
                        o.setRequestHeader(
                          'X-Requested-With',
                          'XMLHttpRequest'
                        ),
                      (o.withCredentials = !!e.withCredentials),
                      r &&
                        o.setRequestHeader(
                          'Content-Type',
                          'application/x-www-form-urlencoded'
                        ),
                      o.overrideMimeType &&
                        o.overrideMimeType('application/json')
                    var i = e.customHeaders
                    if ((i = 'function' === typeof i ? i() : i))
                      for (var a in i) o.setRequestHeader(a, i[a])
                    ;(o.onreadystatechange = function () {
                      o.readyState > 3 &&
                        n(o.status >= 400 ? o.statusText : null, {
                          status: o.status,
                          data: o.responseText,
                        })
                    }),
                      o.send(r)
                  } catch (s) {
                    console && console.log(s)
                  }
                })(e, t, r, n)
              : void 0
          )
        }
      function et(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function tt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      var rt = function () {
          return {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            addPath: '/locales/add/{{lng}}/{{ns}}',
            allowMultiLoading: !1,
            parse: function (e) {
              return JSON.parse(e)
            },
            stringify: JSON.stringify,
            parsePayload: function (e, t, r) {
              return (function (e, t, r) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r),
                  e
                )
              })({}, t, r || '')
            },
            request: Qe,
            reloadInterval: 'undefined' === typeof window && 36e5,
            customHeaders: {},
            queryStringParams: {},
            crossDomain: !1,
            withCredentials: !1,
            overrideMimeType: !1,
            requestOptions: {
              mode: 'cors',
              credentials: 'same-origin',
              cache: 'default',
            },
          }
        },
        nt = (function () {
          function e(t) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
            et(this, e),
              (this.services = t),
              (this.options = r),
              (this.allOptions = n),
              (this.type = 'backend'),
              this.init(t, r, n)
          }
          var t, r, n
          return (
            (t = e),
            (r = [
              {
                key: 'init',
                value: function (e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {}
                  ;(this.services = e),
                    (this.options = $e(r, this.options || {}, rt())),
                    (this.allOptions = n),
                    this.services &&
                      this.options.reloadInterval &&
                      setInterval(function () {
                        return t.reload()
                      }, this.options.reloadInterval)
                },
              },
              {
                key: 'readMulti',
                value: function (e, t, r) {
                  this._readAny(e, e, t, t, r)
                },
              },
              {
                key: 'read',
                value: function (e, t, r) {
                  this._readAny([e], e, [t], t, r)
                },
              },
              {
                key: '_readAny',
                value: function (e, t, r, n, o) {
                  var i,
                    a = this,
                    s = this.options.loadPath
                  'function' === typeof this.options.loadPath &&
                    (s = this.options.loadPath(e, r)),
                    (s = (function (e) {
                      return !!e && 'function' === typeof e.then
                    })((i = s))
                      ? i
                      : Promise.resolve(i)).then(function (i) {
                      var s = a.services.interpolator.interpolate(i, {
                        lng: e.join('+'),
                        ns: r.join('+'),
                      })
                      a.loadUrl(s, o, t, n)
                    })
                },
              },
              {
                key: 'loadUrl',
                value: function (e, t, r, n) {
                  var o = this
                  this.options.request(
                    this.options,
                    e,
                    void 0,
                    function (i, a) {
                      if (
                        a &&
                        ((a.status >= 500 && a.status < 600) || !a.status)
                      )
                        return t(
                          'failed loading ' + e + '; status code: ' + a.status,
                          !0
                        )
                      if (a && a.status >= 400 && a.status < 500)
                        return t(
                          'failed loading ' + e + '; status code: ' + a.status,
                          !1
                        )
                      if (
                        !a &&
                        i &&
                        i.message &&
                        i.message.indexOf('Failed to fetch') > -1
                      )
                        return t('failed loading ' + e + ': ' + i.message, !0)
                      if (i) return t(i, !1)
                      var s, u
                      try {
                        s =
                          'string' === typeof a.data
                            ? o.options.parse(a.data, r, n)
                            : a.data
                      } catch (l) {
                        u = 'failed parsing ' + e + ' to json'
                      }
                      if (u) return t(u, !1)
                      t(null, s)
                    }
                  )
                },
              },
              {
                key: 'create',
                value: function (e, t, r, n, o) {
                  var i = this
                  if (this.options.addPath) {
                    'string' === typeof e && (e = [e])
                    var a = this.options.parsePayload(t, r, n),
                      s = 0,
                      u = [],
                      l = []
                    e.forEach(function (r) {
                      var n = i.options.addPath
                      'function' === typeof i.options.addPath &&
                        (n = i.options.addPath(r, t))
                      var c = i.services.interpolator.interpolate(n, {
                        lng: r,
                        ns: t,
                      })
                      i.options.request(i.options, c, a, function (t, r) {
                        ;(s += 1),
                          u.push(t),
                          l.push(r),
                          s === e.length && o && o(u, l)
                      })
                    })
                  }
                },
              },
              {
                key: 'reload',
                value: function () {
                  var e = this,
                    t = this.services,
                    r = t.backendConnector,
                    n = t.languageUtils,
                    o = t.logger,
                    i = r.language
                  if (!i || 'cimode' !== i.toLowerCase()) {
                    var a = [],
                      s = function (e) {
                        n.toResolveHierarchy(e).forEach(function (e) {
                          a.indexOf(e) < 0 && a.push(e)
                        })
                      }
                    s(i),
                      this.allOptions.preload &&
                        this.allOptions.preload.forEach(function (e) {
                          return s(e)
                        }),
                      a.forEach(function (t) {
                        e.allOptions.ns.forEach(function (e) {
                          r.read(t, e, 'read', null, null, function (n, i) {
                            n &&
                              o.warn(
                                'loading namespace '
                                  .concat(e, ' for language ')
                                  .concat(t, ' failed'),
                                n
                              ),
                              !n &&
                                i &&
                                o.log(
                                  'loaded namespace '
                                    .concat(e, ' for language ')
                                    .concat(t),
                                  i
                                ),
                              r.loaded(''.concat(t, '|').concat(e), n, i)
                          })
                        })
                      })
                  }
                },
              },
            ]),
            r && tt(t.prototype, r),
            n && tt(t, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
      nt.type = 'backend'
      var ot = nt,
        it = [],
        at = it.forEach,
        st = it.slice
      function ut(e) {
        return (
          at.call(st.call(arguments, 1), function (t) {
            if (t) for (var r in t) void 0 === e[r] && (e[r] = t[r])
          }),
          e
        )
      }
      var lt = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        ct = function (e, t, r) {
          var n = r || {}
          n.path = n.path || '/'
          var o = e + '=' + encodeURIComponent(t)
          if (n.maxAge > 0) {
            var i = n.maxAge - 0
            if (isNaN(i)) throw new Error('maxAge should be a Number')
            o += '; Max-Age=' + Math.floor(i)
          }
          if (n.domain) {
            if (!lt.test(n.domain))
              throw new TypeError('option domain is invalid')
            o += '; Domain=' + n.domain
          }
          if (n.path) {
            if (!lt.test(n.path)) throw new TypeError('option path is invalid')
            o += '; Path=' + n.path
          }
          if (n.expires) {
            if ('function' !== typeof n.expires.toUTCString)
              throw new TypeError('option expires is invalid')
            o += '; Expires=' + n.expires.toUTCString()
          }
          if (
            (n.httpOnly && (o += '; HttpOnly'),
            n.secure && (o += '; Secure'),
            n.sameSite)
          )
            switch (
              'string' === typeof n.sameSite
                ? n.sameSite.toLowerCase()
                : n.sameSite
            ) {
              case !0:
                o += '; SameSite=Strict'
                break
              case 'lax':
                o += '; SameSite=Lax'
                break
              case 'strict':
                o += '; SameSite=Strict'
                break
              case 'none':
                o += '; SameSite=None'
                break
              default:
                throw new TypeError('option sameSite is invalid')
            }
          return o
        },
        ft = function (e, t, r, n) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { path: '/', sameSite: 'strict' }
          r &&
            ((o.expires = new Date()),
            o.expires.setTime(o.expires.getTime() + 60 * r * 1e3)),
            n && (o.domain = n),
            (document.cookie = ct(e, encodeURIComponent(t), o))
        },
        dt = function (e) {
          for (
            var t = e + '=', r = document.cookie.split(';'), n = 0;
            n < r.length;
            n++
          ) {
            for (var o = r[n]; ' ' === o.charAt(0); )
              o = o.substring(1, o.length)
            if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
          }
          return null
        },
        pt = {
          name: 'cookie',
          lookup: function (e) {
            var t
            if (e.lookupCookie && 'undefined' !== typeof document) {
              var r = dt(e.lookupCookie)
              r && (t = r)
            }
            return t
          },
          cacheUserLanguage: function (e, t) {
            t.lookupCookie &&
              'undefined' !== typeof document &&
              ft(
                t.lookupCookie,
                e,
                t.cookieMinutes,
                t.cookieDomain,
                t.cookieOptions
              )
          },
        },
        ht = {
          name: 'querystring',
          lookup: function (e) {
            var t
            if ('undefined' !== typeof window)
              for (
                var r = window.location.search.substring(1).split('&'), n = 0;
                n < r.length;
                n++
              ) {
                var o = r[n].indexOf('=')
                if (o > 0)
                  r[n].substring(0, o) === e.lookupQuerystring &&
                    (t = r[n].substring(o + 1))
              }
            return t
          },
        },
        gt = null,
        mt = function () {
          if (null !== gt) return gt
          try {
            gt = 'undefined' !== window && null !== window.localStorage
            var e = 'i18next.translate.boo'
            window.localStorage.setItem(e, 'foo'),
              window.localStorage.removeItem(e)
          } catch (t) {
            gt = !1
          }
          return gt
        },
        bt = {
          name: 'localStorage',
          lookup: function (e) {
            var t
            if (e.lookupLocalStorage && mt()) {
              var r = window.localStorage.getItem(e.lookupLocalStorage)
              r && (t = r)
            }
            return t
          },
          cacheUserLanguage: function (e, t) {
            t.lookupLocalStorage &&
              mt() &&
              window.localStorage.setItem(t.lookupLocalStorage, e)
          },
        },
        vt = null,
        yt = function () {
          if (null !== vt) return vt
          try {
            vt = 'undefined' !== window && null !== window.sessionStorage
            var e = 'i18next.translate.boo'
            window.sessionStorage.setItem(e, 'foo'),
              window.sessionStorage.removeItem(e)
          } catch (t) {
            vt = !1
          }
          return vt
        },
        xt = {
          name: 'sessionStorage',
          lookup: function (e) {
            var t
            if (e.lookupSessionStorage && yt()) {
              var r = window.sessionStorage.getItem(e.lookupSessionStorage)
              r && (t = r)
            }
            return t
          },
          cacheUserLanguage: function (e, t) {
            t.lookupSessionStorage &&
              yt() &&
              window.sessionStorage.setItem(t.lookupSessionStorage, e)
          },
        },
        wt = {
          name: 'navigator',
          lookup: function (e) {
            var t = []
            if ('undefined' !== typeof navigator) {
              if (navigator.languages)
                for (var r = 0; r < navigator.languages.length; r++)
                  t.push(navigator.languages[r])
              navigator.userLanguage && t.push(navigator.userLanguage),
                navigator.language && t.push(navigator.language)
            }
            return t.length > 0 ? t : void 0
          },
        },
        kt = {
          name: 'htmlTag',
          lookup: function (e) {
            var t,
              r =
                e.htmlTag ||
                ('undefined' !== typeof document
                  ? document.documentElement
                  : null)
            return (
              r &&
                'function' === typeof r.getAttribute &&
                (t = r.getAttribute('lang')),
              t
            )
          },
        },
        St = {
          name: 'path',
          lookup: function (e) {
            var t
            if ('undefined' !== typeof window) {
              var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
              if (r instanceof Array)
                if ('number' === typeof e.lookupFromPathIndex) {
                  if ('string' !== typeof r[e.lookupFromPathIndex]) return
                  t = r[e.lookupFromPathIndex].replace('/', '')
                } else t = r[0].replace('/', '')
            }
            return t
          },
        },
        Ot = {
          name: 'subdomain',
          lookup: function (e) {
            var t
            if ('undefined' !== typeof window) {
              var r = window.location.href.match(
                /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi
              )
              r instanceof Array &&
                (t =
                  'number' === typeof e.lookupFromSubdomainIndex
                    ? r[e.lookupFromSubdomainIndex]
                        .replace('http://', '')
                        .replace('https://', '')
                        .replace('.', '')
                    : r[0]
                        .replace('http://', '')
                        .replace('https://', '')
                        .replace('.', ''))
            }
            return t
          },
        }
      var Ct = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ;(0, O.Z)(this, e),
            (this.type = 'languageDetector'),
            (this.detectors = {}),
            this.init(t, r)
        }
        return (
          (0, C.Z)(e, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {}
                ;(this.services = e),
                  (this.options = ut(t, this.options || {}, {
                    order: [
                      'querystring',
                      'cookie',
                      'localStorage',
                      'sessionStorage',
                      'navigator',
                      'htmlTag',
                    ],
                    lookupQuerystring: 'lng',
                    lookupCookie: 'i18next',
                    lookupLocalStorage: 'i18nextLng',
                    lookupSessionStorage: 'i18nextLng',
                    caches: ['localStorage'],
                    excludeCacheFor: ['cimode'],
                  })),
                  this.options.lookupFromUrlIndex &&
                    (this.options.lookupFromPathIndex =
                      this.options.lookupFromUrlIndex),
                  (this.i18nOptions = r),
                  this.addDetector(pt),
                  this.addDetector(ht),
                  this.addDetector(bt),
                  this.addDetector(xt),
                  this.addDetector(wt),
                  this.addDetector(kt),
                  this.addDetector(St),
                  this.addDetector(Ot)
              },
            },
            {
              key: 'addDetector',
              value: function (e) {
                this.detectors[e.name] = e
              },
            },
            {
              key: 'detect',
              value: function (e) {
                var t = this
                e || (e = this.options.order)
                var r = []
                return (
                  e.forEach(function (e) {
                    if (t.detectors[e]) {
                      var n = t.detectors[e].lookup(t.options)
                      n && 'string' === typeof n && (n = [n]),
                        n && (r = r.concat(n))
                    }
                  }),
                  this.services.languageUtils.getBestMatchFromCodes
                    ? r
                    : r.length > 0
                    ? r[0]
                    : null
                )
              },
            },
            {
              key: 'cacheUserLanguage',
              value: function (e, t) {
                var r = this
                t || (t = this.options.caches),
                  t &&
                    ((this.options.excludeCacheFor &&
                      this.options.excludeCacheFor.indexOf(e) > -1) ||
                      t.forEach(function (t) {
                        r.detectors[t] &&
                          r.detectors[t].cacheUserLanguage(e, r.options)
                      }))
              },
            },
          ]),
          e
        )
      })()
      Ct.type = 'languageDetector'
      var Et = JSON.parse(
          '{"Source code on GitHub":"Source code on GitHub","Switch to dark mode":"Switch to dark mode","Switch to light mode":"Switch to light mode","Change language":"Change language","Title Case Converter":"Title Case Converter","Convert any text into a title case format":"Convert any text into a title case format","the quick brown fox jumps over the lazy dog":"the quick brown fox jumps over the lazy dog","The result:":"The result:","Copy":"Copy","textCopied":"The text has been successfully copied.","textNotConverted":"An Error occurred while converting the text. Please try again later.","errorToSave":"Please contact your administrator and share with him the following error: ","Lorem ipsum":"The Quick Brown Fox Jumps over the Lazy Dog"}'
        ),
        Rt = JSON.parse(
          '{"Source code on GitHub":"Quellcode auf GitHub","Switch to dark mode":"In Dunkelen Modus wechseln","Switch to light mode":"In Wei\xdfen Modus wechseln","Change language":"Sprache \xe4ndern","Title Case Converter":"Titelfall-Konverter","Convert any text into a title case format":"Beliebigen Text in ein Titel Format konvertieren","the quick brown fox jumps over the lazy dog":"Franz jagt im komplett verwahrlosten Taxi quer durch Bayern","The result:":"Das Ergebnis:","Copy":"Kopieren","textCopied":"Der Text wurde erfolgreich kopiert.","textNotConverted":"Beim Konvertieren des Textes ist ein Fehler aufgetreten. Bitte versuchen Sie es sp\xe4ter noch einmal.","errorToSave":"Bitte wenden Sie sich an Ihren Administrator und teilen Sie ihm den folgenden Fehler mit: ","Lorem ipsum":"Franz Jagt Im Komplett Verwahrlosten Taxi Quer Durch Bayern"}'
        ),
        _t = JSON.parse(
          '{"the quick brown fox jumps over the lazy dog":"histoire de la baguette, de la baguette \xe0 la tradition","Lorem ipsum":"Histoire de la Baguette, de la Baguette \xe0 la Tradition"}'
        )
      Me.use(ot)
        .use(Ct)
        .use(y.Db)
        .init({
          lng: 'en',
          fallbackLng: 'en',
          debug: !0,
          resources: {
            en: { translation: Et },
            de: { translation: Rt },
            fr: { translation: _t },
          },
        })
      function At(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function Pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              At(e, t, r[t])
            })
        }
        return e
      }
      var jt = function (e) {
        var t = e.Component,
          r = e.pageProps
        return (0, n.jsx)(m, {
          theme: k,
          children: (0, n.jsx)(x, {
            i18n: Me,
            children: (0, n.jsx)(t, Pt({}, r)),
          }),
        })
      }
    },
    9590: function (e) {
      var t = 'undefined' !== typeof Element,
        r = 'function' === typeof Map,
        n = 'function' === typeof Set,
        o = 'function' === typeof ArrayBuffer && !!ArrayBuffer.isView
      function i(e, a) {
        if (e === a) return !0
        if (e && a && 'object' == typeof e && 'object' == typeof a) {
          if (e.constructor !== a.constructor) return !1
          var s, u, l, c
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1
            for (u = s; 0 !== u--; ) if (!i(e[u], a[u])) return !1
            return !0
          }
          if (r && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1
            for (c = e.entries(); !(u = c.next()).done; )
              if (!a.has(u.value[0])) return !1
            for (c = e.entries(); !(u = c.next()).done; )
              if (!i(u.value[1], a.get(u.value[0]))) return !1
            return !0
          }
          if (n && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1
            for (c = e.entries(); !(u = c.next()).done; )
              if (!a.has(u.value[0])) return !1
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((s = e.length) != a.length) return !1
            for (u = s; 0 !== u--; ) if (e[u] !== a[u]) return !1
            return !0
          }
          if (e.constructor === RegExp)
            return e.source === a.source && e.flags === a.flags
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === a.valueOf()
          if (e.toString !== Object.prototype.toString)
            return e.toString() === a.toString()
          if ((s = (l = Object.keys(e)).length) !== Object.keys(a).length)
            return !1
          for (u = s; 0 !== u--; )
            if (!Object.prototype.hasOwnProperty.call(a, l[u])) return !1
          if (t && e instanceof Element) return !1
          for (u = s; 0 !== u--; )
            if (
              (('_owner' !== l[u] && '__v' !== l[u] && '__o' !== l[u]) ||
                !e.$$typeof) &&
              !i(e[l[u]], a[l[u]])
            )
              return !1
          return !0
        }
        return e !== e && a !== a
      }
      e.exports = function (e, t) {
        try {
          return i(e, t)
        } catch (r) {
          if ((r.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw r
        }
      }
    },
    8718: function (e, t, r) {
      'use strict'
      r.d(t, {
        OO: function () {
          return f
        },
        JP: function () {
          return d
        },
        zv: function () {
          return p
        },
        nI: function () {
          return h
        },
        Db: function () {
          return g
        },
      })
      var n = r(5671),
        o = r(3144),
        i = r(4942),
        a = r(7294)
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                ;(0, i.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var l,
        c = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
        },
        f = a.createContext()
      function d() {
        return c
      }
      var p = (function () {
        function e() {
          ;(0, n.Z)(this, e), (this.usedNamespaces = {})
        }
        return (
          (0, o.Z)(e, [
            {
              key: 'addUsedNamespaces',
              value: function (e) {
                var t = this
                e.forEach(function (e) {
                  t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                })
              },
            },
            {
              key: 'getUsedNamespaces',
              value: function () {
                return Object.keys(this.usedNamespaces)
              },
            },
          ]),
          e
        )
      })()
      function h() {
        return l
      }
      var g = {
        type: '3rdParty',
        init: function (e) {
          !(function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            c = u(u({}, c), e)
          })(e.options.react),
            (function (e) {
              l = e
            })(e)
        },
      }
    },
    9921: function (e, t) {
      'use strict'
      var r = 'function' === typeof Symbol && Symbol.for,
        n = r ? Symbol.for('react.element') : 60103,
        o = r ? Symbol.for('react.portal') : 60106,
        i = r ? Symbol.for('react.fragment') : 60107,
        a = r ? Symbol.for('react.strict_mode') : 60108,
        s = r ? Symbol.for('react.profiler') : 60114,
        u = r ? Symbol.for('react.provider') : 60109,
        l = r ? Symbol.for('react.context') : 60110,
        c = r ? Symbol.for('react.async_mode') : 60111,
        f = r ? Symbol.for('react.concurrent_mode') : 60111,
        d = r ? Symbol.for('react.forward_ref') : 60112,
        p = r ? Symbol.for('react.suspense') : 60113,
        h = r ? Symbol.for('react.suspense_list') : 60120,
        g = r ? Symbol.for('react.memo') : 60115,
        m = r ? Symbol.for('react.lazy') : 60116,
        b = r ? Symbol.for('react.block') : 60121,
        v = r ? Symbol.for('react.fundamental') : 60117,
        y = r ? Symbol.for('react.responder') : 60118,
        x = r ? Symbol.for('react.scope') : 60119
      function w(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case c:
                case f:
                case i:
                case s:
                case a:
                case p:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case d:
                    case m:
                    case g:
                    case u:
                      return e
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }
      function k(e) {
        return w(e) === f
      }
      ;(t.AsyncMode = c),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = l),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = g),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return k(e) || w(e) === c
        }),
        (t.isConcurrentMode = k),
        (t.isContextConsumer = function (e) {
          return w(e) === l
        }),
        (t.isContextProvider = function (e) {
          return w(e) === u
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n
        }),
        (t.isForwardRef = function (e) {
          return w(e) === d
        }),
        (t.isFragment = function (e) {
          return w(e) === i
        }),
        (t.isLazy = function (e) {
          return w(e) === m
        }),
        (t.isMemo = function (e) {
          return w(e) === g
        }),
        (t.isPortal = function (e) {
          return w(e) === o
        }),
        (t.isProfiler = function (e) {
          return w(e) === s
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a
        }),
        (t.isSuspense = function (e) {
          return w(e) === p
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === p ||
            e === h ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === g ||
                e.$$typeof === u ||
                e.$$typeof === l ||
                e.$$typeof === d ||
                e.$$typeof === v ||
                e.$$typeof === y ||
                e.$$typeof === x ||
                e.$$typeof === b))
          )
        }),
        (t.typeOf = w)
    },
    9864: function (e, t, r) {
      'use strict'
      e.exports = r(9921)
    },
    1742: function (e) {
      e.exports = function () {
        var e = document.getSelection()
        if (!e.rangeCount) return function () {}
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n))
        switch (t.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            t.blur()
            break
          default:
            t = null
        }
        return (
          e.removeAllRanges(),
          function () {
            'Caret' === e.type && e.removeAllRanges(),
              e.rangeCount ||
                r.forEach(function (t) {
                  e.addRange(t)
                }),
              t && t.focus()
          }
        )
      }
    },
    3154: function (e, t, r) {
      var n
      if (
        ('function' === typeof fetch &&
          ('undefined' !== typeof r.g && r.g.fetch
            ? (n = r.g.fetch)
            : 'undefined' !== typeof window &&
              window.fetch &&
              (n = window.fetch)),
        'undefined' === typeof window || 'undefined' === typeof window.document)
      ) {
        var o = n || r(4098)
        o.default && (o = o.default), (t.default = o), (e.exports = t.default)
      }
    },
    3878: function (e, t, r) {
      'use strict'
      function n(e) {
        if (Array.isArray(e)) return e
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    5671: function (e, t, r) {
      'use strict'
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    3144: function (e, t, r) {
      'use strict'
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function o(e, t, r) {
        return (
          t && n(e.prototype, t),
          r && n(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        )
      }
      r.d(t, {
        Z: function () {
          return o
        },
      })
    },
    4942: function (e, t, r) {
      'use strict'
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    7462: function (e, t, r) {
      'use strict'
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
          n.apply(this, arguments)
        )
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    5267: function (e, t, r) {
      'use strict'
      function n() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      r.d(t, {
        Z: function () {
          return n
        },
      })
    },
    1563: function (e, t, r) {
      'use strict'
      function n(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return n(e, t)
          var r = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          )
        }
      }
      r.d(t, {
        Z: function () {
          return o
        },
      })
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [774, 179], function () {
      return t(1780), t(387)
    })
    var r = e.O()
    _N_E = r
  },
])
