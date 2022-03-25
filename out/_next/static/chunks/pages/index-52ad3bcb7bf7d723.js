;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(5630)
        },
      ])
    },
    5630: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          default: function () {
            return w
          },
        })
      var r = t(5893),
        i = t(9008),
        o = t(7058),
        s = t(949),
        a = t(8527),
        c = t(7398),
        l = t(6723),
        u = t(4189),
        h = t(9583),
        d = t(5434)
      function x(e) {
        var n = e.t,
          t = e.i18n,
          i = function (e) {
            t.changeLanguage(e)
          },
          o = (0, s.If)().toggleColorMode
        return (0, r.jsxs)(a.kC, {
          dir: 'row',
          alignItems: 'center',
          py: 4,
          px: 5,
          children: [
            (0, r.jsx)(c.u, {
              label: n('Source code on GitHub'),
              placement: 'right',
              hasArrow: !0,
              children: (0, r.jsx)(l.hU, {
                variant: 'outline',
                'aria-label': 'Source code',
                onClick: function () {
                  return window.open(
                    'https://github.com/bot-diff/title-case-converter'
                  )
                },
                icon: (0, r.jsx)(h.hJX, {}),
              }),
            }),
            (0, r.jsx)(a.LZ, {}),
            (0, r.jsx)(c.u, {
              label: (0, s.ff)(
                n('Switch to dark mode'),
                n('Switch to light mode')
              ),
              placement: 'left',
              hasArrow: !0,
              children: (0, r.jsx)(l.hU, {
                variant: 'outline',
                'aria-label': 'Switch mode',
                onClick: o,
                icon: (0, s.ff)((0, r.jsx)(d.Dq, {}), (0, r.jsx)(d.EWX, {})),
                mr: 2,
              }),
            }),
            (0, r.jsxs)(u.v2, {
              children: [
                (0, r.jsx)(c.u, {
                  label: n('Change language'),
                  placement: 'bottom-end',
                  hasArrow: !0,
                  children: (0, r.jsx)(u.j2, {
                    as: l.hU,
                    'aria-label': 'Languages',
                    icon: (0, r.jsx)(h.wzj, {}),
                    variant: 'outline',
                  }),
                }),
                (0, r.jsxs)(u.qy, {
                  children: [
                    (0, r.jsx)(u.sN, {
                      icon: (0, r.jsx)(r.Fragment, {
                        children: '\ud83c\uddec\ud83c\udde7',
                      }),
                      onClick: function () {
                        return i('en')
                      },
                      children: 'English',
                    }),
                    (0, r.jsx)(u.sN, {
                      icon: (0, r.jsx)(r.Fragment, {
                        children: '\ud83c\udde9\ud83c\uddea',
                      }),
                      onClick: function () {
                        return i('de')
                      },
                      children: 'Deutsch',
                    }),
                    (0, r.jsx)(u.sN, {
                      icon: (0, r.jsx)(r.Fragment, {
                        children: '\ud83c\uddeb\ud83c\uddf7',
                      }),
                      onClick: function () {
                        return i('fr')
                      },
                      children: 'Fran\xe7ais',
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var f = t(4051),
        j = t.n(f),
        p = t(7294),
        g = t(1543),
        v = t(4612),
        m = t(1391)
      function C(e, n, t, r, i, o, s) {
        try {
          var a = e[o](s),
            c = a.value
        } catch (l) {
          return void t(l)
        }
        a.done ? n(c) : Promise.resolve(c).then(r, i)
      }
      function b(e) {
        var n = e.t,
          t = (0, p.useState)('en'),
          i = t[0],
          o = t[1],
          u = (0, p.useState)(''),
          x = u[0],
          f = u[1],
          b = (0, p.useState)(''),
          w = b[0],
          y = b[1],
          k = (0, p.useState)({ isError: !1, errorMessage: '' }),
          S = k[0],
          E = k[1],
          T = (0, g.pm)({ position: 'top', isClosable: !0 })
        return (
          (0, p.useEffect)(
            function () {
              var e = (function () {
                var e,
                  n =
                    ((e = j().mark(function e(n) {
                      var t, r
                      return j().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  fetch('/api/convert/'.concat(i), n)
                                )
                              case 3:
                                return (t = e.sent), (e.next = 6), t.json()
                              case 6:
                                ;(r = e.sent),
                                  y(r.convertedText),
                                  E({ isError: !1, errorMessage: '' }),
                                  (e.next = 14)
                                break
                              case 11:
                                ;(e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  E({ isError: !0, errorMessage: e.t0 })
                              case 14:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 11]]
                      )
                    })),
                    function () {
                      var n = this,
                        t = arguments
                      return new Promise(function (r, i) {
                        var o = e.apply(n, t)
                        function s(e) {
                          C(o, r, i, s, a, 'next', e)
                        }
                        function a(e) {
                          C(o, r, i, s, a, 'throw', e)
                        }
                        s(void 0)
                      })
                    })
                return function (e) {
                  return n.apply(this, arguments)
                }
              })()
              '' !== x &&
                e({
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ text: x }),
                })
            },
            [i, x]
          ),
          (0, r.jsx)(a.kC, {
            height: '90vh',
            alignItems: 'center',
            justifyContent: 'start',
            direction: 'column',
            children: (0, r.jsxs)(a.kC, {
              direction: 'column',
              width: '100vh',
              p: 12,
              pt: 125,
              children: [
                (0, r.jsxs)(a.Kq, {
                  spacing: 2,
                  mb: 5,
                  children: [
                    (0, r.jsx)(a.X6, {
                      as: 'h2',
                      align: 'center',
                      size: '3xl',
                      children: n('Title Case Converter'),
                    }),
                    (0, r.jsx)(a.xv, {
                      align: 'center',
                      fontSize: '2xl',
                      children: n('Convert any text into a title case format'),
                    }),
                  ],
                }),
                (0, r.jsx)(v.II, {
                  placeholder: n('the quick brown fox jumps over the lazy dog'),
                  variant: 'outline',
                  _placeholder: { color: 'gray.400' },
                  fontSize: '20px',
                  mb: 3,
                  size: 'lg',
                  type: 'text',
                  textAlign: 'center',
                  bg: 'gray.100',
                  color: 'gray.700',
                  onChange: function (e) {
                    f(e.target.value),
                      S.isError &&
                        T({
                          id: 'errorToast',
                          title: n('textNotConverted'),
                          status: 'error',
                        })
                  },
                }),
                (0, r.jsxs)(m.Ph, {
                  icon: (0, r.jsx)(h.wzj, {}),
                  width: 150,
                  size: 'sm',
                  mb: 1,
                  onChange: function (e) {
                    return o(e.target.value)
                  },
                  children: [
                    (0, r.jsx)('option', {
                      value: 'en',
                      selected: !0,
                      children: 'English',
                    }),
                    (0, r.jsx)('option', { value: 'de', children: 'Deutsch' }),
                    (0, r.jsx)('option', {
                      value: 'fr',
                      children: 'Fran\xe7ais',
                    }),
                  ],
                }),
                (0, r.jsxs)(a.kC, {
                  dir: 'row',
                  mb: 3,
                  alignItems: 'end',
                  children: [
                    (0, r.jsx)(a.xv, {
                      align: 'left',
                      fontSize: 'xl',
                      children: n('The result:'),
                    }),
                    (0, r.jsx)(a.LZ, {}),
                    (0, r.jsx)(c.u, {
                      label: n('Copy'),
                      placement: 'auto',
                      hasArrow: !0,
                      children: (0, r.jsx)(l.hU, {
                        colorScheme: 'blue',
                        'aria-label': 'Copy to clipboard',
                        icon: (0, r.jsx)(d.Fqs, {}),
                        onClick: function () {
                          T.isActive('copyingToast')
                            ? T.update('copyingToast', {
                                title: n('textCopied'),
                                status: 'success',
                              })
                            : T({
                                id: 'copyingToast',
                                title: n('textCopied'),
                                status: 'success',
                              }),
                            navigator.clipboard.writeText(w)
                        },
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(a.kC, {
                  maxWidth: '100vh',
                  height: '25vh',
                  style: {
                    backgroundColor: (0, s.ff)(
                      'rgb(79, 128, 176, 0.075)',
                      'rgb(237, 242, 247, 0.1)'
                    ),
                  },
                  rounded: 10,
                  children: (0, r.jsx)(a.xv, {
                    p: 4,
                    fontSize: 'xl',
                    children: '' === w ? n('Lorem ipsum') : w,
                  }),
                }),
              ],
            }),
          })
        )
      }
      function w() {
        var e = (0, o.$)(),
          n = e.t,
          t = e.i18n
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(i.default, {
              children: [
                (0, r.jsx)('title', { children: 'Title Case Converter' }),
                (0, r.jsx)('meta', {
                  name: 'description',
                  content: 'Convert any text into a title case format',
                }),
                (0, r.jsx)('link', { rel: 'icon', href: '/icon.ico' }),
              ],
            }),
            (0, r.jsx)(x, { t: n, i18n: t }),
            (0, r.jsx)(b, { t: n }),
          ],
        })
      }
    },
  },
  function (e) {
    e.O(0, [228, 445, 462, 774, 888, 179], function () {
      return (n = 8581), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
