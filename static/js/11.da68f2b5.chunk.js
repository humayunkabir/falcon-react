(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    1043: function(e, t, a) {
      e.exports = a.p + 'static/media/14.2e238fd1.jpg';
    },
    1044: function(e, t, a) {
      e.exports = a.p + 'static/media/19.3c467e00.jpg';
    },
    1045: function(e, t, a) {
      e.exports = a.p + 'static/media/15.fe45522f.jpg';
    },
    1046: function(e, t, a) {
      e.exports = a.p + 'static/media/17.5145db24.jpg';
    },
    1047: function(e, t, a) {
      e.exports = a.p + 'static/media/20.c906bddb.jpg';
    },
    1048: function(e, t, a) {
      e.exports = a.p + 'static/media/16.321fd6d4.jpg';
    },
    1049: function(e, t, a) {
      e.exports = a.p + 'static/media/18.80c92e6e.jpg';
    },
    1928: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        c = a.n(n),
        l = a(67),
        r = a(20),
        s = a(701),
        o = a(741),
        i = a(47),
        m = a(308),
        u = a(109),
        p = a(668),
        d = a(307),
        f = a(310),
        b = a(281),
        g = a(670),
        E = function(e) {
          return function(t) {
            var a = Object(n.useState)(null),
              l = Object(i.a)(a, 2),
              s = l[0],
              o = l[1];
            return c.a.createElement(
              m.a,
              { fluid: !0 },
              c.a.createElement(
                f.a,
                { className: 'min-vh-100 bg-100' },
                c.a.createElement(b.a, { xs: 6, className: 'd-none d-lg-block' }, s && c.a.createElement(u.a, s)),
                c.a.createElement(
                  b.a,
                  { sm: 10, md: 6, className: 'px-sm-0 align-self-center mx-auto py-5' },
                  c.a.createElement(
                    f.a,
                    { noGutters: !0, className: 'justify-content-center' },
                    c.a.createElement(
                      b.a,
                      { lg: 9, xl: 8, className: 'col-xxl-6' },
                      c.a.createElement(
                        g.a,
                        null,
                        c.a.createElement(
                          d.a,
                          { className: 'bg-split-card-header bg-circle-shape text-center p-2' },
                          c.a.createElement(
                            r.b,
                            {
                              className:
                                'text-white text-sans-serif font-weight-extra-bold fs-4 z-index-1 position-relative',
                              to: '/'
                            },
                            'falcon'
                          )
                        ),
                        c.a.createElement(
                          p.a,
                          { className: 'p-4' },
                          c.a.createElement(e, Object.assign({ setBgProps: o }, t))
                        )
                      )
                    )
                  )
                )
              )
            );
          };
        },
        h = a(1043),
        j = a.n(h),
        x = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: j.a, position: '50% 20%' });
              },
              [t]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(
                s.a,
                { align: 'center', justify: 'between' },
                c.a.createElement('h3', null, 'Login'),
                c.a.createElement(
                  'p',
                  { className: 'mb-0 fs--1' },
                  c.a.createElement('span', { className: 'font-weight-semi-bold' }, 'New User? '),
                  c.a.createElement(r.b, { to: '/authentication/split/register' }, 'Create account')
                )
              ),
              c.a.createElement(o.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        N = a(797),
        y = a(1044),
        v = a.n(y),
        w = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: v.a });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement(N.a, { layout: 'split', titleTag: 'h3' })
            )
          );
        }),
        O = a(744),
        P = a(1045),
        B = a.n(P),
        k = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: B.a });
              },
              [t]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(
                s.a,
                { align: 'center', justify: 'between' },
                c.a.createElement('h3', null, 'Register'),
                c.a.createElement(
                  'p',
                  { className: 'mb-0 fs--1' },
                  c.a.createElement('span', { className: 'font-weight-semi-bold' }, 'Already User? '),
                  c.a.createElement(r.b, { to: '/authentication/split/login' }, 'Login')
                )
              ),
              c.a.createElement(O.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        L = a(799),
        T = a(1046),
        M = a.n(T),
        z = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: M.a, position: '50% 76%', overlay: !0 });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement('h4', { className: 'mb-0' }, ' Forgot your password?'),
              c.a.createElement('small', null, "Enter your email and we'll send you a reset link."),
              c.a.createElement(L.a, { layout: 'split' })
            )
          );
        }),
        F = a(800),
        C = a(1047),
        J = a.n(C),
        R = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: J.a });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement('h3', null, 'Reset password'),
              c.a.createElement(F.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        U = a(801),
        A = a(1048),
        G = a.n(A),
        H = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: G.a, position: '50% 30%' });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement(U.a, { email: 'xyz@abc.com', layout: 'split', titleTag: 'h3' })
            )
          );
        }),
        S = a(108),
        q = a(802),
        D = a(769),
        I = a(148),
        K = a.n(I),
        Q = a(1049),
        V = a.n(Q),
        W = E(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: V.a });
              },
              [t]
            ),
            c.a.createElement(
              f.a,
              { className: 'justify-content-center' },
              c.a.createElement(
                b.a,
                { xs: 'auto' },
                c.a.createElement(
                  D.a,
                  { className: 'align-items-center' },
                  c.a.createElement(S.a, { src: K.a, size: '4xl', className: 'mr-4' }),
                  c.a.createElement(
                    D.a,
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
                c.a.createElement(q.a, { className: 'mt-4' })
              )
            )
          );
        });
      t.default = function(e) {
        var t = e.match.url;
        return c.a.createElement(
          l.d,
          null,
          c.a.createElement(l.b, { path: ''.concat(t, '/login'), exact: !0, component: x }),
          c.a.createElement(l.b, { path: ''.concat(t, '/logout'), exact: !0, component: w }),
          c.a.createElement(l.b, { path: ''.concat(t, '/register'), exact: !0, component: k }),
          c.a.createElement(l.b, { path: ''.concat(t, '/forget-password'), exact: !0, component: z }),
          c.a.createElement(l.b, { path: ''.concat(t, '/confirm-mail'), exact: !0, component: H }),
          c.a.createElement(l.b, { path: ''.concat(t, '/password-reset'), exact: !0, component: R }),
          c.a.createElement(l.b, { path: ''.concat(t, '/lock-screen'), exact: !0, component: W }),
          c.a.createElement(l.a, { to: '/errors/404' })
        );
      };
    },
    701: function(e, t, a) {
      'use strict';
      var n = a(78),
        c = a(77),
        l = a(0),
        r = a.n(l),
        s = a(5),
        o = a.n(s),
        i = function(e) {
          var t,
            a = e.justify,
            l = e.align,
            s = e.className,
            i = e.tag,
            m = e.children,
            u = Object(c.a)(e, ['justify', 'align', 'className', 'tag', 'children']);
          return r.a.createElement(
            i,
            Object.assign(
              {
                className: o()(
                  'd-flex',
                  ((t = {}),
                  Object(n.a)(t, 'justify-content-'.concat(a), a),
                  Object(n.a)(t, 'align-items-'.concat(l), l),
                  t),
                  s
                )
              },
              u
            ),
            m
          );
        };
      (i.defaultProps = { tag: 'div' }), (t.a = i);
    },
    769: function(e, t, a) {
      'use strict';
      var n = a(4),
        c = a(7),
        l = a(0),
        r = a.n(l),
        s = a(1),
        o = a.n(s),
        i = a(5),
        m = a.n(i),
        u = a(3),
        p = {
          body: o.a.bool,
          bottom: o.a.bool,
          children: o.a.node,
          className: o.a.string,
          cssModule: o.a.object,
          heading: o.a.bool,
          left: o.a.bool,
          list: o.a.bool,
          middle: o.a.bool,
          object: o.a.bool,
          right: o.a.bool,
          tag: u.tagPropType,
          top: o.a.bool
        },
        d = function(e) {
          var t,
            a = e.body,
            l = e.bottom,
            s = e.className,
            o = e.cssModule,
            i = e.heading,
            p = e.left,
            d = e.list,
            f = e.middle,
            b = e.object,
            g = e.right,
            E = e.tag,
            h = e.top,
            j = Object(c.a)(e, [
              'body',
              'bottom',
              'className',
              'cssModule',
              'heading',
              'left',
              'list',
              'middle',
              'object',
              'right',
              'tag',
              'top'
            ]);
          t = i ? 'h4' : j.href ? 'a' : j.src || b ? 'img' : d ? 'ul' : 'div';
          var x = E || t,
            N = Object(u.mapToCssModules)(
              m()(s, {
                'media-body': a,
                'media-heading': i,
                'media-left': p,
                'media-right': g,
                'media-top': h,
                'media-bottom': l,
                'media-middle': f,
                'media-object': b,
                'media-list': d,
                media: !a && !i && !p && !g && !h && !l && !f && !b && !d
              }),
              o
            );
          return r.a.createElement(x, Object(n.a)({}, j, { className: N }));
        };
      (d.propTypes = p), (t.a = d);
    }
  }
]);
//# sourceMappingURL=11.da68f2b5.chunk.js.map
