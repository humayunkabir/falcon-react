(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [9],
  {
    1080: function(e, a, t) {
      'use strict';
      var n = t(15),
        c = t(0),
        r = t.n(c),
        l = t(105);
      a.a = function(e) {
        return function(a) {
          var t = Object(c.useState)(!1),
            A = Object(n.a)(t, 2),
            s = A[0],
            o = A[1],
            i = Object(c.useState)('/'),
            u = Object(n.a)(i, 2),
            m = u[0],
            g = u[1];
          return s
            ? r.a.createElement(l.a, { to: m })
            : r.a.createElement(e, Object.assign({ setRedirect: o, setRedirectUrl: g }, a));
        };
      };
    },
    1082: function(e, a, t) {
      'use strict';
      var n = t(0),
        c = t.n(n),
        r = t(4),
        l = t.n(r);
      a.a = function(e) {
        var a = e.className,
          t = e.children;
        return c.a.createElement(
          'div',
          { className: l()('w-100 position-relative text-center', a) },
          c.a.createElement('hr', { className: 'text-300' }),
          c.a.createElement(
            'div',
            {
              className:
                'position-absolute absolute-centered t-0 px-3 bg-white text-sans-serif fs--1 text-500 text-nowrap'
            },
            t
          )
        );
      };
    },
    1083: function(e, a, t) {
      'use strict';
      var n = t(0),
        c = t.n(n),
        r = t(1076),
        l = t(541),
        A = t(421),
        s = t(215),
        o = t(16);
      a.a = function() {
        return c.a.createElement(
          r.a,
          { className: 'mb-0' },
          c.a.createElement(
            l.a,
            { noGutters: !0 },
            c.a.createElement(
              A.a,
              { sm: 6, className: 'pr-sm-1' },
              c.a.createElement(
                s.a,
                { color: 'outline-google-plus', size: 'sm', block: !0, className: 'mt-2', to: '#!' },
                c.a.createElement(o.a, { icon: ['fab', 'google-plus-g'], transform: 'grow-8', className: 'mr-2' }),
                ' google'
              )
            ),
            c.a.createElement(
              A.a,
              { sm: 6, className: 'pl-sm-1' },
              c.a.createElement(
                s.a,
                { color: 'outline-facebook', size: 'sm', block: !0, className: 'mt-2', to: '#!' },
                c.a.createElement(o.a, { icon: ['fab', 'facebook-square'], transform: 'grow-8', className: 'mr-2' }),
                ' facebook'
              )
            )
          )
        );
      };
    },
    1086: function(e, a, t) {
      'use strict';
      var n = t(15),
        c = t(0),
        r = t.n(c),
        l = t(12),
        A = t(67),
        s = t(1067),
        o = t(1076),
        i = t(1057),
        u = t(1068),
        m = t(541),
        g = t(421),
        E = t(1060),
        f = t(215),
        w = t(1082),
        b = t(1083),
        v = t(1080),
        B = function(e) {
          var a = e.setRedirect,
            t = e.hasLabel,
            v = e.layout,
            B = Object(c.useState)(''),
            d = Object(n.a)(B, 2),
            p = d[0],
            C = d[1],
            y = Object(c.useState)(''),
            D = Object(n.a)(y, 2),
            h = D[0],
            Q = D[1],
            j = Object(c.useState)(!0),
            x = Object(n.a)(j, 2),
            z = x[0],
            N = x[1],
            F = Object(c.useState)(!0),
            I = Object(n.a)(F, 2),
            M = I[0],
            G = I[1];
          return (
            Object(c.useEffect)(
              function() {
                G(!p || !h);
              },
              [p, h]
            ),
            r.a.createElement(
              s.a,
              {
                onSubmit: function(e) {
                  e.preventDefault(), A.c.success('Logged in as '.concat(p)), a(!0);
                }
              },
              r.a.createElement(
                o.a,
                null,
                t && r.a.createElement(i.a, null, 'Email address'),
                r.a.createElement(u.a, {
                  placeholder: t ? '' : 'Email address',
                  value: p,
                  onChange: function(e) {
                    var a = e.target;
                    return C(a.value);
                  },
                  type: 'email'
                })
              ),
              r.a.createElement(
                o.a,
                null,
                t && r.a.createElement(i.a, null, 'Password'),
                r.a.createElement(u.a, {
                  placeholder: t ? '' : 'Password',
                  value: h,
                  onChange: function(e) {
                    var a = e.target;
                    return Q(a.value);
                  },
                  type: 'password'
                })
              ),
              r.a.createElement(
                m.a,
                { className: 'justify-content-between align-items-center' },
                r.a.createElement(
                  g.a,
                  { xs: 'auto' },
                  r.a.createElement(E.a, {
                    id: 'customCheckRemember',
                    label: 'Remember me',
                    checked: z,
                    onChange: function(e) {
                      var a = e.target;
                      return N(a.checked);
                    },
                    type: 'checkbox'
                  })
                ),
                r.a.createElement(
                  g.a,
                  { xs: 'auto' },
                  r.a.createElement(
                    l.b,
                    { className: 'fs--1', to: '/authentication/'.concat(v, '/forget-password') },
                    'Forget Password?'
                  )
                )
              ),
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(f.a, { color: 'primary', block: !0, className: 'mt-3', disabled: M }, 'Log in')
              ),
              r.a.createElement(w.a, { className: 'mt-4' }, 'or log in with'),
              r.a.createElement(b.a, null)
            )
          );
        };
      (B.defaultProps = { layout: 'basic', hasLabel: !1 }), (a.a = Object(v.a)(B));
    },
    1087: function(e, a, t) {
      'use strict';
      var n = t(15),
        c = t(0),
        r = t.n(c),
        l = t(12),
        A = t(67),
        s = t(1067),
        o = t(1076),
        i = t(1057),
        u = t(1068),
        m = t(1060),
        g = t(215),
        E = t(1082),
        f = t(1083),
        w = t(1080),
        b = function(e) {
          var a = e.setRedirect,
            t = e.setRedirectUrl,
            w = e.layout,
            b = e.hasLabel,
            v = Object(c.useState)(''),
            B = Object(n.a)(v, 2),
            d = B[0],
            p = B[1],
            C = Object(c.useState)(''),
            y = Object(n.a)(C, 2),
            D = y[0],
            h = y[1],
            Q = Object(c.useState)(''),
            j = Object(n.a)(Q, 2),
            x = j[0],
            z = j[1],
            N = Object(c.useState)(''),
            F = Object(n.a)(N, 2),
            I = F[0],
            M = F[1],
            G = Object(c.useState)(!1),
            S = Object(n.a)(G, 2),
            U = S[0],
            k = S[1],
            O = Object(c.useState)(!0),
            P = Object(n.a)(O, 2),
            Y = P[0],
            L = P[1];
          return (
            Object(c.useEffect)(
              function() {
                t('/authentication/'.concat(w, '/login'));
              },
              [t, w]
            ),
            Object(c.useEffect)(
              function() {
                L(!d || !D || !x || !I || !U || x !== I);
              },
              [d, D, x, I, U]
            ),
            r.a.createElement(
              s.a,
              {
                onSubmit: function(e) {
                  e.preventDefault(), A.c.success('Successfully registered as '.concat(d)), a(!0);
                }
              },
              r.a.createElement(
                o.a,
                null,
                b && r.a.createElement(i.a, null, 'Name'),
                r.a.createElement(u.a, {
                  placeholder: b ? '' : 'Name',
                  value: d,
                  onChange: function(e) {
                    var a = e.target;
                    return p(a.value);
                  }
                })
              ),
              r.a.createElement(
                o.a,
                null,
                b && r.a.createElement(i.a, null, 'Email address'),
                r.a.createElement(u.a, {
                  placeholder: b ? '' : 'Email address',
                  value: D,
                  onChange: function(e) {
                    var a = e.target;
                    return h(a.value);
                  },
                  type: 'email'
                })
              ),
              r.a.createElement(
                'div',
                { className: 'form-row' },
                r.a.createElement(
                  o.a,
                  { className: 'col-6' },
                  b && r.a.createElement(i.a, null, 'Password'),
                  r.a.createElement(u.a, {
                    placeholder: b ? '' : 'Password',
                    value: x,
                    onChange: function(e) {
                      var a = e.target;
                      return z(a.value);
                    },
                    type: 'password'
                  })
                ),
                r.a.createElement(
                  o.a,
                  { className: 'col-6' },
                  b && r.a.createElement(i.a, null, 'Confirm Password'),
                  r.a.createElement(u.a, {
                    placeholder: b ? '' : 'Confirm Password',
                    value: I,
                    onChange: function(e) {
                      var a = e.target;
                      return M(a.value);
                    },
                    type: 'password'
                  })
                )
              ),
              r.a.createElement(m.a, {
                id: 'customCheckTerms',
                label: r.a.createElement(
                  c.Fragment,
                  null,
                  'I accept the ',
                  r.a.createElement(l.b, { to: '#!' }, 'terms'),
                  ' and ',
                  r.a.createElement(l.b, { to: '#!' }, 'privacy policy')
                ),
                checked: U,
                onChange: function(e) {
                  var a = e.target;
                  return k(a.checked);
                },
                type: 'checkbox'
              }),
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(g.a, { color: 'primary', block: !0, className: 'mt-3', disabled: Y }, 'Register')
              ),
              r.a.createElement(E.a, { className: 'mt-4' }, 'or register with'),
              r.a.createElement(f.a, null)
            )
          );
        };
      (b.defaultProps = { layout: 'basic', hasLabel: !1 }), (a.a = Object(w.a)(b));
    },
    1096: function(e, a, t) {
      'use strict';
      var n = t(0),
        c = t.n(n),
        r = t(215),
        l = t(12),
        A = t(16),
        s = t(1097),
        o = t.n(s),
        i = function(e) {
          var a = e.layout,
            t = e.titleTag;
          return c.a.createElement(
            n.Fragment,
            null,
            c.a.createElement('img', { className: 'd-block mx-auto mb-4', src: o.a, alt: 'shield', width: 70 }),
            c.a.createElement(t, null, 'See you again!'),
            c.a.createElement(
              'p',
              null,
              'Thanks for using Falcon. You are ',
              c.a.createElement('br', { className: 'd-none d-sm-block' }),
              'now successfully signed out.'
            ),
            c.a.createElement(
              r.a,
              { tag: l.b, color: 'primary', size: 'sm', className: 'mt-3', to: '/authentication/'.concat(a, '/login') },
              c.a.createElement(A.a, { icon: 'chevron-left', transform: 'shrink-4 down-1', className: 'mr-1' }),
              'Return to Login'
            )
          );
        };
      (i.defaultProps = { layout: 'basic', titleTag: 'h4' }), (a.a = i);
    },
    1097: function(e, a, t) {
      e.exports = t.p + 'static/media/rocket.5856fd83.png';
    },
    1098: function(e, a, t) {
      'use strict';
      var n = t(15),
        c = t(0),
        r = t.n(c),
        l = t(12),
        A = t(67),
        s = t(1067),
        o = t(1076),
        i = t(1068),
        u = t(215),
        m = t(1080),
        g = function(e) {
          var a = e.setRedirect,
            t = e.setRedirectUrl,
            m = e.layout,
            g = Object(c.useState)(''),
            E = Object(n.a)(g, 2),
            f = E[0],
            w = E[1];
          return (
            Object(c.useEffect)(
              function() {
                t('/authentication/'.concat(m, '/confirm-mail'));
              },
              [t, m]
            ),
            r.a.createElement(
              s.a,
              {
                className: 'mt-4',
                onSubmit: function(e) {
                  e.preventDefault(),
                    f && (A.c.success('An email is sent to '.concat(f, ' with password reset link')), a(!0));
                }
              },
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(i.a, {
                  className: 'form-control',
                  placeholder: 'Email address',
                  value: f,
                  onChange: function(e) {
                    var a = e.target;
                    return w(a.value);
                  },
                  type: 'email'
                })
              ),
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(u.a, { color: 'primary', block: !0, disabled: !f }, 'Send reset link')
              ),
              r.a.createElement(
                l.b,
                { className: 'fs--1 text-600', to: '#!' },
                "I can't recover my account using this page",
                r.a.createElement('span', { className: 'd-inline-block ml-1' }, '\u2192')
              )
            )
          );
        };
      (g.defaultProps = { layout: 'basic' }), (a.a = Object(m.a)(g));
    },
    1099: function(e, a, t) {
      'use strict';
      var n = t(15),
        c = t(0),
        r = t.n(c),
        l = t(67),
        A = t(1067),
        s = t(1076),
        o = t(1068),
        i = t(215),
        u = t(1080),
        m = t(1057),
        g = t(4),
        E = t.n(g),
        f = function(e) {
          var a = e.setRedirect,
            t = e.setRedirectUrl,
            u = e.layout,
            g = e.hasLabel,
            f = Object(c.useState)(''),
            w = Object(n.a)(f, 2),
            b = w[0],
            v = w[1],
            B = Object(c.useState)(''),
            d = Object(n.a)(B, 2),
            p = d[0],
            C = d[1],
            y = Object(c.useState)(!0),
            D = Object(n.a)(y, 2),
            h = D[0],
            Q = D[1];
          return (
            Object(c.useEffect)(
              function() {
                t('/authentication/'.concat(u, '/login'));
              },
              [t, u]
            ),
            Object(c.useEffect)(
              function() {
                if ('' === b || '' === p) return Q(!0);
                Q(b !== p);
              },
              [b, p]
            ),
            r.a.createElement(
              A.a,
              {
                className: E()('mt-3', { 'text-left': g }),
                onSubmit: function(e) {
                  e.preventDefault(), l.c.success('Login with your new password'), a(!0);
                }
              },
              r.a.createElement(
                s.a,
                null,
                g && r.a.createElement(m.a, null, 'New Password'),
                r.a.createElement(o.a, {
                  placeholder: g ? '' : 'New Password',
                  value: b,
                  onChange: function(e) {
                    var a = e.target;
                    return v(a.value);
                  },
                  type: 'password'
                })
              ),
              r.a.createElement(
                s.a,
                null,
                g && r.a.createElement(m.a, null, 'Confirm Password'),
                r.a.createElement(o.a, {
                  placeholder: g ? '' : 'Confirm Password',
                  value: p,
                  onChange: function(e) {
                    var a = e.target;
                    return C(a.value);
                  },
                  type: 'password'
                })
              ),
              r.a.createElement(i.a, { color: 'primary', block: !0, className: 'mt-3', disabled: h }, 'Set password')
            )
          );
        };
      (f.defaultProps = { layout: 'basic', hasLabel: !1 }), (a.a = Object(u.a)(f));
    },
    1100: function(e, a, t) {
      'use strict';
      var n = t(0),
        c = t.n(n),
        r = t(215),
        l = t(12),
        A = t(16),
        s = t(1101),
        o = t.n(s),
        i = function(e) {
          var a = e.email,
            t = e.layout,
            s = e.titleTag;
          return c.a.createElement(
            n.Fragment,
            null,
            c.a.createElement('img', { className: 'd-block mx-auto mb-4', src: o.a, alt: 'sent', width: 70 }),
            c.a.createElement(s, null, 'Please check your email!'),
            c.a.createElement(
              'p',
              null,
              'An email has been sent to ',
              c.a.createElement('strong', null, a),
              '. Please click on the included link to reset your password.'
            ),
            c.a.createElement(
              r.a,
              { tag: l.b, color: 'primary', size: 'sm', className: 'mt-3', to: '/authentication/'.concat(t, '/login') },
              c.a.createElement(A.a, { icon: 'chevron-left', transform: 'shrink-4 down-1', className: 'mr-1' }),
              'Return to login'
            )
          );
        };
      (i.defaultProps = { layout: 'basic', titleTag: 'h4' }), (a.a = i);
    },
    1101: function(e, a) {
      e.exports =
        'data:image/png;base64,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';
    },
    1102: function(e, a, t) {
      'use strict';
      var n = t(15),
        c = t(33),
        r = t(0),
        l = t.n(r),
        A = t(67),
        s = t(541),
        o = t(1067),
        i = t(421),
        u = t(1068),
        m = t(215),
        g = t(1080);
      a.a = Object(g.a)(function(e) {
        var a = e.setRedirect,
          t = (e.setRedirectUrl, Object(c.a)(e, ['setRedirect', 'setRedirectUrl'])),
          g = Object(r.useState)(''),
          E = Object(n.a)(g, 2),
          f = E[0],
          w = E[1];
        return l.a.createElement(
          s.a,
          Object.assign(
            {
              tag: o.a,
              noGutters: !0,
              onSubmit: function(e) {
                e.preventDefault(), a(!0), A.c.success('Logged in as Emma Watson');
              }
            },
            t
          ),
          l.a.createElement(
            i.a,
            null,
            l.a.createElement(u.a, {
              className: 'mr-2',
              placeholder: 'Password',
              value: f,
              onChange: function(e) {
                var a = e.target;
                return w(a.value);
              },
              type: 'password'
            })
          ),
          l.a.createElement(
            i.a,
            { xs: 'auto', className: 'pl-2' },
            l.a.createElement(m.a, { color: 'primary', disabled: !f }, 'Login')
          )
        );
      });
    },
    1336: function(e, a, t) {
      e.exports = t.p + 'static/media/14.2e238fd1.jpg';
    },
    1337: function(e, a, t) {
      e.exports = t.p + 'static/media/19.3c467e00.jpg';
    },
    1338: function(e, a, t) {
      e.exports = t.p + 'static/media/15.fe45522f.jpg';
    },
    1339: function(e, a, t) {
      e.exports = t.p + 'static/media/17.5145db24.jpg';
    },
    1340: function(e, a, t) {
      e.exports = t.p + 'static/media/20.c906bddb.jpg';
    },
    1341: function(e, a, t) {
      e.exports = t.p + 'static/media/16.321fd6d4.jpg';
    },
    1342: function(e, a, t) {
      e.exports = t.p + 'static/media/18.80c92e6e.jpg';
    },
    2168: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        c = t.n(n),
        r = t(105),
        l = t(12),
        A = t(34),
        s = t(1086),
        o = t(15),
        i = t(534),
        u = t(123),
        m = t(1059),
        g = t(528),
        E = t(541),
        f = t(421),
        w = t(1062),
        b = function(e) {
          return function(a) {
            var t = Object(n.useState)(null),
              r = Object(o.a)(t, 2),
              A = r[0],
              s = r[1];
            return c.a.createElement(
              i.a,
              { fluid: !0 },
              c.a.createElement(
                E.a,
                { className: 'min-vh-100 bg-100' },
                c.a.createElement(f.a, { xs: 6, className: 'd-none d-lg-block' }, A && c.a.createElement(u.a, A)),
                c.a.createElement(
                  f.a,
                  { sm: 10, md: 6, className: 'px-sm-0 align-self-center mx-auto py-5' },
                  c.a.createElement(
                    E.a,
                    { noGutters: !0, className: 'justify-content-center' },
                    c.a.createElement(
                      f.a,
                      { lg: 9, xl: 8, className: 'col-xxl-6' },
                      c.a.createElement(
                        w.a,
                        null,
                        c.a.createElement(
                          g.a,
                          { className: 'bg-split-card-header bg-circle-shape text-center p-2' },
                          c.a.createElement(
                            l.b,
                            {
                              className:
                                'text-white text-sans-serif font-weight-extra-bold fs-4 z-index-1 position-relative',
                              to: '/'
                            },
                            'falcon'
                          )
                        ),
                        c.a.createElement(
                          m.a,
                          { className: 'p-4' },
                          c.a.createElement(e, Object.assign({ setBgProps: s }, a))
                        )
                      )
                    )
                  )
                )
              )
            );
          };
        },
        v = t(1336),
        B = t.n(v),
        d = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: B.a, position: '50% 20%' });
              },
              [a]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(
                A.a,
                { align: 'center', justify: 'between' },
                c.a.createElement('h3', null, 'Login'),
                c.a.createElement(
                  'p',
                  { className: 'mb-0 fs--1' },
                  c.a.createElement('span', { className: 'font-weight-semi-bold' }, 'New User? '),
                  c.a.createElement(l.b, { to: '/authentication/split/register' }, 'Create account')
                )
              ),
              c.a.createElement(s.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        p = t(1096),
        C = t(1337),
        y = t.n(C),
        D = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: y.a });
              },
              [a]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement(p.a, { layout: 'split', titleTag: 'h3' })
            )
          );
        }),
        h = t(1087),
        Q = t(1338),
        j = t.n(Q),
        x = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: j.a });
              },
              [a]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(
                A.a,
                { align: 'center', justify: 'between' },
                c.a.createElement('h3', null, 'Register'),
                c.a.createElement(
                  'p',
                  { className: 'mb-0 fs--1' },
                  c.a.createElement('span', { className: 'font-weight-semi-bold' }, 'Already User? '),
                  c.a.createElement(l.b, { to: '/authentication/split/login' }, 'Login')
                )
              ),
              c.a.createElement(h.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        z = t(1098),
        N = t(1339),
        F = t.n(N),
        I = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: F.a, position: '50% 76%', overlay: !0 });
              },
              [a]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement('h4', { className: 'mb-0' }, ' Forgot your password?'),
              c.a.createElement('small', null, "Enter your email and we'll send you a reset link."),
              c.a.createElement(z.a, { layout: 'split' })
            )
          );
        }),
        M = t(1099),
        G = t(1340),
        S = t.n(G),
        U = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: S.a });
              },
              [a]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement('h3', null, 'Reset password'),
              c.a.createElement(M.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        k = t(1100),
        O = t(1341),
        P = t.n(O),
        Y = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: P.a, position: '50% 30%' });
              },
              [a]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement(k.a, { email: 'xyz@abc.com', layout: 'split', titleTag: 'h3' })
            )
          );
        }),
        L = t(93),
        H = t(1102),
        X = t(164),
        R = t(141),
        T = t.n(R),
        W = t(1342),
        V = t.n(W),
        K = b(function(e) {
          var a = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return a({ image: V.a });
              },
              [a]
            ),
            c.a.createElement(
              E.a,
              { className: 'justify-content-center' },
              c.a.createElement(
                f.a,
                { xs: 'auto' },
                c.a.createElement(
                  X.a,
                  { className: 'align-items-center' },
                  c.a.createElement(L.a, { src: T.a, size: '4xl', className: 'mr-4' }),
                  c.a.createElement(
                    X.a,
                    { body: !0 },
                    c.a.createElement('h4', null, 'Hi! Emma'),
                    c.a.createElement(
                      'p',
                      { className: 'mb-0' },
                      'Enter your password ',
                      c.a.createElement('br', null),
                      'to access the admin.'
                    )
                  )
                ),
                c.a.createElement(H.a, { className: 'mt-4' })
              )
            )
          );
        });
      a.default = function(e) {
        var a = e.match.url;
        return c.a.createElement(
          r.d,
          null,
          c.a.createElement(r.b, { path: ''.concat(a, '/login'), exact: !0, component: d }),
          c.a.createElement(r.b, { path: ''.concat(a, '/logout'), exact: !0, component: D }),
          c.a.createElement(r.b, { path: ''.concat(a, '/register'), exact: !0, component: x }),
          c.a.createElement(r.b, { path: ''.concat(a, '/forget-password'), exact: !0, component: I }),
          c.a.createElement(r.b, { path: ''.concat(a, '/confirm-mail'), exact: !0, component: Y }),
          c.a.createElement(r.b, { path: ''.concat(a, '/password-reset'), exact: !0, component: U }),
          c.a.createElement(r.b, { path: ''.concat(a, '/lock-screen'), exact: !0, component: K }),
          c.a.createElement(r.a, { to: '/errors/404' })
        );
      };
    }
  }
]);
//# sourceMappingURL=9.adfb615d.chunk.js.map
