/*! For license information please see 1.6b80bdd0.chunk.js.LICENSE */
(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [1],
  {
    1002: function(t, e, r) {
      'use strict';
      var i = r(5),
        n = r(9),
        s = r(0),
        a = r.n(s),
        o = r(1),
        h = r.n(o),
        l = r(4),
        p = r.n(l),
        c = r(2),
        f = {
          children: h.a.node,
          row: h.a.bool,
          check: h.a.bool,
          inline: h.a.bool,
          disabled: h.a.bool,
          tag: c.tagPropType,
          className: h.a.string,
          cssModule: h.a.object
        },
        u = function(t) {
          var e = t.className,
            r = t.cssModule,
            s = t.row,
            o = t.disabled,
            h = t.check,
            l = t.inline,
            f = t.tag,
            u = Object(n.a)(t, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']),
            m = Object(c.mapToCssModules)(
              p()(
                e,
                !!s && 'row',
                h ? 'form-check' : 'form-group',
                !(!h || !l) && 'form-check-inline',
                !(!h || !o) && 'disabled'
              ),
              r
            );
          return 'fieldset' === f && (u.disabled = o), a.a.createElement(f, Object(i.a)({}, u, { className: m }));
        };
      (u.propTypes = f), (u.defaultProps = { tag: 'div' }), (e.a = u);
    },
    1006: function(t, e) {
      t.exports = function(t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      };
    },
    1007: function(t, e, r) {
      var i = r(1111),
        n = r(1040);
      t.exports =
        Object.keys ||
        function(t) {
          return i(t, n);
        };
    },
    1008: function(t, e) {
      t.exports = !0;
    },
    1009: function(t, e) {
      var r = 0,
        i = Math.random();
      t.exports = function(t) {
        return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++r + i).toString(36));
      };
    },
    1010: function(t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    1011: function(t, e, r) {
      var i = r(1036);
      t.exports = function(t) {
        return Object(i(t));
      };
    },
    1034: function(t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = f(r(1260)),
        n = f(r(1269)),
        s = f(r(1273)),
        a = f(r(1274)),
        o = f(r(1278)),
        h = f(r(1300)),
        l = f(r(0)),
        p = f(r(1)),
        c = f(r(1308));
      function f(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function(t) {
        function e() {
          var t, r, i, a;
          (0, s.default)(this, e);
          for (var h = arguments.length, l = Array(h), p = 0; p < h; p++) l[p] = arguments[p];
          return (
            (r = i = (0, o.default)(this, (t = e.__proto__ || (0, n.default)(e)).call.apply(t, [this].concat(l)))),
            (i.handleClickToPause = function() {
              i.anim.isPaused ? i.anim.play() : i.anim.pause();
            }),
            (a = r),
            (0, o.default)(i, a)
          );
        }
        return (
          (0, h.default)(e, t),
          (0, a.default)(e, [
            {
              key: 'componentDidMount',
              value: function() {
                var t = this.props,
                  e = t.options,
                  r = t.eventListeners,
                  n = e.loop,
                  s = e.autoplay,
                  a = e.animationData,
                  o = e.rendererSettings,
                  h = e.segments;
                (this.options = {
                  container: this.el,
                  renderer: 'svg',
                  loop: !1 !== n,
                  autoplay: !1 !== s,
                  segments: !1 !== h,
                  animationData: a,
                  rendererSettings: o
                }),
                  (this.options = (0, i.default)({}, this.options, e)),
                  (this.anim = c.default.loadAnimation(this.options)),
                  this.registerEvents(r);
              }
            },
            {
              key: 'componentWillUpdate',
              value: function(t) {
                this.options.animationData !== t.options.animationData &&
                  (this.deRegisterEvents(this.props.eventListeners),
                  this.destroy(),
                  (this.options = (0, i.default)({}, this.options, t.options)),
                  (this.anim = c.default.loadAnimation(this.options)),
                  this.registerEvents(t.eventListeners));
              }
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(),
                  this.pause(),
                  this.setSpeed(),
                  this.setDirection();
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.deRegisterEvents(this.props.eventListeners),
                  this.destroy(),
                  (this.options.animationData = null),
                  (this.anim = null);
              }
            },
            {
              key: 'setSpeed',
              value: function() {
                this.anim.setSpeed(this.props.speed);
              }
            },
            {
              key: 'setDirection',
              value: function() {
                this.anim.setDirection(this.props.direction);
              }
            },
            {
              key: 'play',
              value: function() {
                this.anim.play();
              }
            },
            {
              key: 'playSegments',
              value: function() {
                this.anim.playSegments(this.props.segments);
              }
            },
            {
              key: 'stop',
              value: function() {
                this.anim.stop();
              }
            },
            {
              key: 'pause',
              value: function() {
                this.props.isPaused && !this.anim.isPaused
                  ? this.anim.pause()
                  : !this.props.isPaused && this.anim.isPaused && this.anim.pause();
              }
            },
            {
              key: 'destroy',
              value: function() {
                this.anim.destroy();
              }
            },
            {
              key: 'registerEvents',
              value: function(t) {
                var e = this;
                t.forEach(function(t) {
                  e.anim.addEventListener(t.eventName, t.callback);
                });
              }
            },
            {
              key: 'deRegisterEvents',
              value: function(t) {
                var e = this;
                t.forEach(function(t) {
                  e.anim.removeEventListener(t.eventName, t.callback);
                });
              }
            },
            {
              key: 'render',
              value: function() {
                var t = this,
                  e = this.props,
                  r = e.width,
                  n = e.height,
                  s = e.ariaRole,
                  a = e.ariaLabel,
                  o = e.isClickToPauseDisabled,
                  h = e.title,
                  p = function(t) {
                    return 'number' === typeof t ? t + 'px' : t || '100%';
                  },
                  c = (0, i.default)(
                    { width: p(r), height: p(n), overflow: 'hidden', margin: '0 auto', outline: 'none' },
                    this.props.style
                  ),
                  f = o
                    ? function() {
                        return null;
                      }
                    : this.handleClickToPause;
                return l.default.createElement('div', {
                  ref: function(e) {
                    t.el = e;
                  },
                  style: c,
                  onClick: f,
                  title: h,
                  role: s,
                  'aria-label': a,
                  tabIndex: '0'
                });
              }
            }
          ]),
          e
        );
      })(l.default.Component);
      (e.default = u),
        (u.propTypes = {
          eventListeners: p.default.arrayOf(p.default.object),
          options: p.default.object.isRequired,
          height: p.default.oneOfType([p.default.string, p.default.number]),
          width: p.default.oneOfType([p.default.string, p.default.number]),
          isStopped: p.default.bool,
          isPaused: p.default.bool,
          speed: p.default.number,
          segments: p.default.arrayOf(p.default.number),
          direction: p.default.number,
          ariaRole: p.default.string,
          ariaLabel: p.default.string,
          isClickToPauseDisabled: p.default.bool,
          title: p.default.string
        }),
        (u.defaultProps = {
          eventListeners: [],
          isStopped: !1,
          isPaused: !1,
          speed: 1,
          ariaRole: 'button',
          ariaLabel: 'animation',
          isClickToPauseDisabled: !1,
          title: ''
        });
    },
    1035: function(t, e, r) {
      var i = r(980);
      t.exports = function(t, e) {
        if (!i(t)) return t;
        var r, n;
        if (e && 'function' == typeof (r = t.toString) && !i((n = r.call(t)))) return n;
        if ('function' == typeof (r = t.valueOf) && !i((n = r.call(t)))) return n;
        if (!e && 'function' == typeof (r = t.toString) && !i((n = r.call(t)))) return n;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    1036: function(t, e) {
      t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    1037: function(t, e) {
      var r = Math.ceil,
        i = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? i : r)(t);
      };
    },
    1038: function(t, e, r) {
      var i = r(1039)('keys'),
        n = r(1009);
      t.exports = function(t) {
        return i[t] || (i[t] = n(t));
      };
    },
    1039: function(t, e, r) {
      var i = r(965),
        n = r(968),
        s = n['__core-js_shared__'] || (n['__core-js_shared__'] = {});
      (t.exports = function(t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: i.version,
        mode: r(1008) ? 'pure' : 'global',
        copyright: '\xa9 2019 Denis Pushkarev (zloirock.ru)'
      });
    },
    1040: function(t, e) {
      t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    1041: function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    1042: function(t, e) {
      t.exports = {};
    },
    1043: function(t, e, r) {
      var i = r(995),
        n = r(1284),
        s = r(1040),
        a = r(1038)('IE_PROTO'),
        o = function() {},
        h = function() {
          var t,
            e = r(1110)('iframe'),
            i = s.length;
          for (
            e.style.display = 'none',
              r(1285).appendChild(e),
              e.src = 'javascript:',
              (t = e.contentWindow.document).open(),
              t.write('<script>document.F=Object</script>'),
              t.close(),
              h = t.F;
            i--;

          )
            delete h.prototype[s[i]];
          return h();
        };
      t.exports =
        Object.create ||
        function(t, e) {
          var r;
          return (
            null !== t ? ((o.prototype = i(t)), (r = new o()), (o.prototype = null), (r[a] = t)) : (r = h()),
            void 0 === e ? r : n(r, e)
          );
        };
    },
    1044: function(t, e, r) {
      var i = r(974).f,
        n = r(975),
        s = r(983)('toStringTag');
      t.exports = function(t, e, r) {
        t && !n((t = r ? t : t.prototype), s) && i(t, s, { configurable: !0, value: e });
      };
    },
    1045: function(t, e, r) {
      e.f = r(983);
    },
    1046: function(t, e, r) {
      var i = r(968),
        n = r(965),
        s = r(1008),
        a = r(1045),
        o = r(974).f;
      t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = s ? {} : i.Symbol || {});
        '_' == t.charAt(0) || t in e || o(e, t, { value: a.f(t) });
      };
    },
    1106: function(t, e, r) {
      'use strict';
      r.d(e, 'a', function() {
        return Et;
      });
      var i = r(1249),
        n = r.n(i),
        s = r(91),
        a = r(51),
        o = r(18),
        h = r(0),
        l = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit' },
        p = 'undefined',
        c = { BLUR: 'blur', CHANGE: 'change', INPUT: 'input' },
        f = 'max',
        u = 'min',
        m = 'maxLength',
        d = 'minLength',
        y = 'pattern',
        g = 'required',
        v = 'validate',
        b = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        E = /^\w*$/,
        x = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        S = /\\(\\)?/g;
      var P = function(t) {
          return void 0 === t;
        },
        _ = function(t) {
          return null === t || P(t);
        },
        C = function(t) {
          return Array.isArray(t);
        },
        D = function(t) {
          return 'object' === typeof t;
        },
        k = function(t) {
          return !_(t) && !C(t) && D(t);
        },
        A = function(t) {
          return !C(t) && (E.test(t) || !b.test(t));
        },
        w = function(t) {
          var e = [];
          return (
            t.replace(x, function(t, r, i, n) {
              e.push(i ? n.replace(S, '$1') : r || t);
            }),
            e
          );
        };
      function T(t, e, r) {
        for (var i = -1, n = A(e) ? [e] : w(e), s = n.length, a = s - 1; ++i < s; ) {
          var o = n[i],
            h = r;
          if (i !== a) {
            var l = t[o];
            h = k(l) || C(l) ? l : isNaN(n[i + 1]) ? {} : [];
          }
          (t[o] = h), (t = t[o]);
        }
        return t;
      }
      var M = function(t) {
          return Object.entries(t).reduce(function(t, e) {
            var r = Object(o.a)(e, 2),
              i = r[0],
              n = r[1];
            return b.test(i) ? (T(t, i, n), t) : Object.assign(Object.assign({}, t), Object(a.a)({}, i, n));
          }, {});
        },
        F = function(t, e) {
          t.removeEventListener &&
            (t.removeEventListener(c.INPUT, e), t.removeEventListener(c.CHANGE, e), t.removeEventListener(c.BLUR, e));
        },
        I = function(t) {
          return 'radio' === t;
        },
        O = function(t) {
          return 'checkbox' === t;
        };
      function V(t) {
        return !t || (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE && V(t.parentNode));
      }
      var R = { isValid: !1, value: '' },
        B = function(t) {
          return C(t)
            ? t.reduce(function(t, e) {
                var r = e.ref,
                  i = r.checked,
                  n = r.value;
                return i ? { isValid: !0, value: n } : t;
              }, R)
            : R;
        },
        N = function(t) {
          return Object(s.a)(t)
            .filter(function(t) {
              return t.selected;
            })
            .map(function(t) {
              return t.value;
            });
        },
        L = function(t) {
          return 'file' === t;
        },
        j = function(t) {
          return 'select-multiple' === t;
        },
        G = function(t) {
          return '' === t;
        },
        z = { value: !1, isValid: !1 },
        H = { value: !0, isValid: !0 },
        q = function(t) {
          if (C(t)) {
            if (t.length > 1) {
              var e = t
                .filter(function(t) {
                  return t.ref.checked;
                })
                .map(function(t) {
                  return t.ref.value;
                });
              return { value: e, isValid: !!e.length };
            }
            var r = t[0].ref,
              i = r.checked,
              n = r.value,
              s = r.attributes;
            return i ? (s && !P(s.value) ? (P(n) || G(n) ? H : { value: n, isValid: !0 }) : H) : z;
          }
          return z;
        };
      function W(t, e) {
        var r = e.type,
          i = e.name,
          n = e.options,
          s = e.value,
          a = e.files,
          o = t[i];
        return L(r) ? a : I(r) ? (o ? B(o.options).value : '') : j(r) ? N(n) : O(r) ? !!o && q(o.options).value : s;
      }
      var Y = function(t) {
          return Object.values(t).reduce(function(e, r) {
            var i = r.ref,
              n = r.ref.name;
            return Object.assign(Object.assign({}, e), Object(a.a)({}, n, W(t, i)));
          }, {});
        },
        U = function(t) {
          return k(t) && !Object.keys(t).length;
        },
        K = function(t, e, r) {
          return k(t) && t.type === e && t.message === r;
        },
        X = function(t, e, r) {
          var i = e
            .split(/[,[\].]+?/)
            .filter(Boolean)
            .reduce(function(t, e) {
              return _(t) ? t : t[e];
            }, t);
          return P(i) || i === t ? t[e] || r : i;
        };
      var Z = function(t) {
          return t instanceof RegExp;
        },
        $ = function(t) {
          var e = k(t) && !Z(t);
          return { value: e ? t.value : t, message: e ? t.message : '' };
        },
        J = function(t) {
          return 'string' === typeof t;
        },
        Q = function(t) {
          return 'function' === typeof t;
        },
        tt = function(t) {
          return 'boolean' === typeof t;
        };
      function et(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'validate',
          i = J(t);
        if (i || (tt(t) && !t)) return { type: r, message: i ? t : '', ref: e };
      }
      var rt = function(t, e, r, i, n) {
          if (!e) return {};
          var s = r[t];
          return Object.assign(Object.assign({}, s), {
            types: Object.assign(Object.assign({}, s && s.types ? s.types : {}), Object(a.a)({}, i, n || !0))
          });
        },
        it = function(t, e, r) {
          var i,
            s,
            a,
            h,
            l,
            p,
            c,
            b,
            E,
            x,
            S,
            P,
            C,
            D,
            A,
            w,
            T,
            M,
            F,
            V,
            R,
            N,
            L,
            j,
            z,
            H,
            Y,
            K,
            X,
            it,
            nt,
            st,
            at,
            ot,
            ht,
            lt,
            pt,
            ct,
            ft,
            ut,
            mt,
            dt,
            yt,
            gt,
            vt,
            bt,
            Et,
            xt,
            St,
            Pt,
            _t,
            Ct;
          return n.a.async(function(Dt) {
            for (;;)
              switch ((Dt.prev = Dt.next)) {
                case 0:
                  if (
                    ((i = r.ref),
                    (s = r.ref),
                    (a = s.type),
                    (h = s.value),
                    (l = s.name),
                    (p = s.valueAsNumber),
                    (c = s.valueAsDate),
                    (b = r.options),
                    (E = r.required),
                    (x = r.maxLength),
                    (S = r.minLength),
                    (P = r.min),
                    (C = r.max),
                    (D = r.pattern),
                    (A = r.validate),
                    (w = t.current),
                    (T = {}),
                    (M = I(a)),
                    (F = O(a)),
                    (V = M || F),
                    (R = G(h)),
                    (N = rt.bind(null, l, e, T)),
                    (L = function(t, r, n) {
                      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d,
                        o = t ? r : n;
                      if (((T[l] = Object.assign({ type: t ? s : a, message: o, ref: i }, N(t ? s : a, o))), !e))
                        return T;
                    }),
                    !E || !((!M && !F && (R || _(h))) || (tt(h) && !h) || (F && !q(b).isValid) || (M && !B(b).isValid)))
                  ) {
                    Dt.next = 14;
                    break;
                  }
                  if (
                    ((j = J(E) ? E : $(E).message),
                    (T[l] = Object.assign({ type: g, message: j, ref: V ? w[l].options[0].ref : i }, N(g, j))),
                    e)
                  ) {
                    Dt.next = 14;
                    break;
                  }
                  return Dt.abrupt('return', T);
                case 14:
                  if (_(P) && _(C)) {
                    Dt.next = 22;
                    break;
                  }
                  if (
                    ((Y = $(C)),
                    (K = Y.value),
                    (X = Y.message),
                    (it = $(P)),
                    (nt = it.value),
                    (st = it.message),
                    'number' === a || (!a && !isNaN(h))
                      ? ((at = p || parseFloat(h)), _(K) || (z = at > K), _(nt) || (H = at < nt))
                      : ((ot = c || new Date(h)), J(K) && (z = ot > new Date(K)), J(nt) && (H = ot < new Date(nt))),
                    !z && !H)
                  ) {
                    Dt.next = 22;
                    break;
                  }
                  if ((L(!!z, X, st, f, u), e)) {
                    Dt.next = 22;
                    break;
                  }
                  return Dt.abrupt('return', T);
                case 22:
                  if (!J(h) || R || (!x && !S)) {
                    Dt.next = 32;
                    break;
                  }
                  if (
                    ((ht = $(x)),
                    (lt = ht.value),
                    (pt = ht.message),
                    (ct = $(S)),
                    (ft = ct.value),
                    (ut = ct.message),
                    (mt = h.toString().length),
                    (yt = S && mt < ft),
                    !(dt = x && mt > lt) && !yt)
                  ) {
                    Dt.next = 32;
                    break;
                  }
                  if ((L(!!dt, pt, ut), e)) {
                    Dt.next = 32;
                    break;
                  }
                  return Dt.abrupt('return', T);
                case 32:
                  if (!D || R) {
                    Dt.next = 38;
                    break;
                  }
                  if (((gt = $(D)), (vt = gt.value), (bt = gt.message), !Z(vt) || vt.test(h))) {
                    Dt.next = 38;
                    break;
                  }
                  if (((T[l] = Object.assign({ type: y, message: bt, ref: i }, N(y, bt))), e)) {
                    Dt.next = 38;
                    break;
                  }
                  return Dt.abrupt('return', T);
                case 38:
                  if (!A) {
                    Dt.next = 61;
                    break;
                  }
                  if (((Et = W(w, i)), (xt = V && b ? b[0].ref : i), !Q(A))) {
                    Dt.next = 52;
                    break;
                  }
                  return (Dt.next = 44), n.a.awrap(A(Et));
                case 44:
                  if (((St = Dt.sent), !(Pt = et(St, xt)))) {
                    Dt.next = 50;
                    break;
                  }
                  if (((T[l] = Object.assign(Object.assign({}, Pt), N(v, Pt.message))), e)) {
                    Dt.next = 50;
                    break;
                  }
                  return Dt.abrupt('return', T);
                case 50:
                  Dt.next = 61;
                  break;
                case 52:
                  if (!k(A)) {
                    Dt.next = 61;
                    break;
                  }
                  return (
                    (_t = Object.entries(A)),
                    (Dt.next = 56),
                    n.a.awrap(
                      new Promise(function(t) {
                        _t.reduce(function(r, i, s) {
                          var a, h, p, c, f, u;
                          return n.a.async(function(m) {
                            for (;;)
                              switch ((m.prev = m.next)) {
                                case 0:
                                  return (
                                    (a = Object(o.a)(i, 2)),
                                    (h = a[0]),
                                    (p = a[1]),
                                    (m.t2 = U),
                                    (m.next = 4),
                                    n.a.awrap(r)
                                  );
                                case 4:
                                  if (((m.t3 = m.sent), (m.t1 = !(0, m.t2)(m.t3)), !m.t1)) {
                                    m.next = 8;
                                    break;
                                  }
                                  m.t1 = !e;
                                case 8:
                                  if (((m.t0 = m.t1), m.t0)) {
                                    m.next = 11;
                                    break;
                                  }
                                  m.t0 = !Q(p);
                                case 11:
                                  if (!m.t0) {
                                    m.next = 13;
                                    break;
                                  }
                                  return m.abrupt('return', t(r));
                                case 13:
                                  return (m.next = 15), n.a.awrap(p(Et));
                                case 15:
                                  return (
                                    (f = m.sent),
                                    (u = et(f, xt, h))
                                      ? ((c = Object.assign(Object.assign({}, u), N(h, u.message))), e && (T[l] = c))
                                      : (c = r),
                                    m.abrupt('return', _t.length - 1 === s ? t(c) : c)
                                  );
                                case 19:
                                case 'end':
                                  return m.stop();
                              }
                          });
                        }, {});
                      })
                    )
                  );
                case 56:
                  if (((Ct = Dt.sent), U(Ct))) {
                    Dt.next = 61;
                    break;
                  }
                  if (((T[l] = Object.assign({ ref: xt }, Ct)), e)) {
                    Dt.next = 61;
                    break;
                  }
                  return Dt.abrupt('return', T);
                case 61:
                  return Dt.abrupt('return', T);
                case 62:
                case 'end':
                  return Dt.stop();
              }
          });
        },
        nt = function(t, e) {
          return C(t.inner)
            ? t.inner.reduce(function(t, r) {
                var i = r.path,
                  n = r.message,
                  s = r.type;
                return Object.assign(
                  Object.assign({}, t),
                  t[i] && e
                    ? Object(a.a)({}, i, rt(i, e, t, s, n))
                    : Object(a.a)(
                        {},
                        i,
                        t[i] || Object.assign({ message: n, type: s }, e ? { types: Object(a.a)({}, s, n || !0) } : {})
                      )
                );
              }, {})
            : Object(a.a)({}, t.path, { message: t.message, type: t.type });
        };
      function st(t, e, r) {
        return n.a.async(
          function(i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (i.prev = 0), (i.next = 3), n.a.awrap(t.validate(r, { abortEarly: !1 }));
                case 3:
                  return (i.t0 = i.sent), (i.t1 = {}), i.abrupt('return', { values: i.t0, errors: i.t1 });
                case 8:
                  return (i.prev = 8), (i.t2 = i.catch(0)), i.abrupt('return', { values: {}, errors: M(nt(i.t2, e)) });
                case 11:
                case 'end':
                  return i.stop();
              }
          },
          null,
          null,
          [[0, 8]]
        );
      }
      var at = function(t, e, r) {
        return P(t[e]) ? X(t, e, r) : t[e];
      };
      var ot = function t(e, r) {
          var i = function(r, i, n) {
            var s = n ? ''.concat(e, '.').concat(i) : ''.concat(e, '[').concat(i, ']');
            return (function(t) {
              return _(t) || !D(t);
            })(r)
              ? s
              : t(s, r);
          };
          return C(r)
            ? r.map(function(t, e) {
                return i(t, e);
              })
            : Object.entries(r).map(function(t) {
                var e = Object(o.a)(t, 2),
                  r = e[0],
                  n = e[1];
                return i(n, r, !0);
              });
        },
        ht = function(t, e) {
          return (function t(e) {
            return e.reduce(function(e, r) {
              return e.concat(C(r) ? t(r) : r);
            }, []);
          })(ot(t, e));
        },
        lt = function(t, e, r, i) {
          var n;
          return (
            U(t)
              ? (n = void 0)
              : P(t[e])
              ? ((n = X(M(t), e)),
                P(n) ||
                  ht(e, n).forEach(function(t) {
                    return r.add(t);
                  }))
              : (r.add(e), (n = t[e])),
            P(n) ? (k(i) ? at(i, e) : i) : n
          );
        },
        pt = function(t) {
          var e = t.hasError,
            r = t.isBlurEvent,
            i = t.isOnSubmit,
            n = t.isReValidateOnSubmit,
            s = t.isOnBlur,
            a = t.isReValidateOnBlur,
            o = t.isSubmitted;
          return (i && n) || (i && !o) || (s && !r && !e) || (a && !r && e) || (n && o);
        },
        ct = function(t, e) {
          return t.startsWith(''.concat(e, '['));
        };
      function ft(t, e) {
        var r = {};
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
        if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(t); n < i.length; n++)
            e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]);
        }
        return r;
      }
      var ut = function(t, e) {
          var r = e;
          t[r];
          return ft(t, ['symbol' === typeof r ? r : r + '']);
        },
        mt = function(t, e) {
          return (
            e.forEach(function(e) {
              T(t, e, void 0);
            }),
            (function t(e) {
              for (var r in e) {
                var i = e[r],
                  n = C(i);
                (!k(i) && !n) || i.ref || t(i), (P(i) || U(i) || (n && !e[r].filter(Boolean).length)) && delete e[r];
              }
              return e;
            })(t)
          );
        },
        dt = function(t) {
          return { isOnSubmit: !t || t === l.onSubmit, isOnBlur: t === l.onBlur, isOnChange: t === l.onChange };
        },
        yt = h.useRef,
        gt = h.useState,
        vt = h.useCallback,
        bt = h.useEffect;
      function Et() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.mode,
          r = void 0 === e ? l.onSubmit : e,
          i = t.reValidateMode,
          h = void 0 === i ? l.onChange : i,
          f = t.validationSchema,
          u = t.defaultValues,
          m = void 0 === u ? {} : u,
          d = t.submitFocusError,
          y = void 0 === d || d,
          g = t.validateCriteriaMode,
          v = yt({}),
          b = 'all' === g,
          E = yt({}),
          x = yt({}),
          S = yt(new Set()),
          D = yt(new Set()),
          A = yt(new Set()),
          w = yt(new Set()),
          R = yt(!0),
          B = yt({}),
          N = yt(m),
          G = yt(!1),
          z = yt(!1),
          H = yt(!1),
          q = yt(!1),
          Z = yt(0),
          $ = yt(!1),
          tt = yt(),
          et = yt({}),
          rt = yt(new Set()),
          nt = gt(),
          ot = Object(o.a)(nt, 2)[1],
          ht = yt(dt(r)).current,
          ft = ht.isOnBlur,
          Et = ht.isOnSubmit,
          xt = typeof window === p,
          St = typeof document !== p && !xt && !P(window.HTMLElement),
          Pt = St && 'Proxy' in window,
          _t = yt({ dirty: !Pt, isSubmitted: Et, submitCount: !Pt, touched: !Pt, isSubmitting: !Pt, isValid: !Pt }),
          Ct = yt(dt(h)).current,
          Dt = Ct.isOnBlur,
          kt = Ct.isOnSubmit;
        N.current = N.current ? N.current : m;
        var At = vt(function() {
            G.current || ot({});
          }, []),
          wt = vt(it.bind(null, v, b), []),
          Tt = vt(st.bind(null, f, b), [f]),
          Mt = vt(
            function(t, e, r, i) {
              var n =
                r ||
                (function(t) {
                  var e = t.errors,
                    r = t.name,
                    i = t.error,
                    n = t.validFields,
                    s = t.fieldsWithValidation,
                    a = U(i),
                    o = U(e),
                    h = X(i, r),
                    l = X(e, r);
                  return (
                    !((a && n.has(r)) || (l && l.isManual)) &&
                    (!!(o !== a || (!o && !l) || (a && s.has(r) && !n.has(r))) || (h && !K(l, h.type, h.message)))
                  );
                })({ errors: E.current, error: e, name: t, validFields: w.current, fieldsWithValidation: A.current });
              if (
                (U(e)
                  ? ((A.current.has(t) || f) && (w.current.add(t), (n = n || X(E.current, t))),
                    (E.current = mt(E.current, [t])))
                  : (w.current.delete(t), (n = n || !X(E.current, t)), T(E.current, t, e[t])),
                n && !i)
              )
                return At(), !0;
            },
            [At, f]
          ),
          Ft = vt(
            function(t, e) {
              var r = v.current[t];
              if (!r) return !1;
              var i = r.ref,
                n = i.type,
                a = r.options,
                o = St && i instanceof window.HTMLElement && _(e) ? '' : e;
              return (
                I(n) && a
                  ? a.forEach(function(t) {
                      var e = t.ref;
                      return (e.checked = e.value === o);
                    })
                  : L(n)
                  ? o instanceof FileList && (i.files = o)
                  : j(n)
                  ? Object(s.a)(i.options).forEach(function(t) {
                      return (t.selected = o.includes(t.value));
                    })
                  : O(n) && a
                  ? a.length > 1
                    ? a.forEach(function(t) {
                        var e = t.ref;
                        return (e.checked = o.includes(e.value));
                      })
                    : (a[0].ref.checked = !!o)
                  : (i.value = o),
                n
              );
            },
            [St]
          ),
          It = function(t) {
            if (!v.current[t]) return !1;
            var e = B.current[t] !== W(v.current, v.current[t].ref),
              r = D.current.has(t) !== e;
            return e ? D.current.add(t) : D.current.delete(t), (q.current = !!D.current.size), r && _t.current.dirty;
          },
          Ot = vt(
            function(t, e) {
              if ((Ft(t, e), It(t) || (!X(x.current, t) && _t.current.touched))) return !!T(x.current, t, !0);
            },
            [Ft]
          ),
          Vt = vt(
            function(t, e, r) {
              var i, s;
              return n.a.async(function(a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if ((i = v.current[t])) {
                        a.next = 3;
                        break;
                      }
                      return a.abrupt('return', !1);
                    case 3:
                      return e && At(), (a.next = 6), n.a.awrap(it(v, b, i));
                    case 6:
                      return (s = a.sent), Mt(t, s, !1, r), a.abrupt('return', U(s));
                    case 9:
                    case 'end':
                      return a.stop();
                  }
              });
            },
            [At, Mt, b]
          ),
          Rt = vt(
            function(t, e) {
              var r, i, s, o, h;
              return n.a.async(function(l) {
                for (;;)
                  switch ((l.prev = l.next)) {
                    case 0:
                      return (l.next = 2), n.a.awrap(st(f, b, M(Y(v.current))));
                    case 2:
                      return (
                        (r = l.sent),
                        (i = r.errors),
                        (s = R.current),
                        (R.current = U(i)),
                        C(t)
                          ? (t.forEach(function(t) {
                              i[t] ? T(E.current, t, i[t]) : mt(E.current, [t]);
                            }),
                            At())
                          : ((h = X(i, (o = t)) ? Object(a.a)({}, o, X(i, o)) : {}), Mt(o, h, e || s !== R.current)),
                        l.abrupt('return', U(E.current))
                      );
                    case 8:
                    case 'end':
                      return l.stop();
                  }
              });
            },
            [At, Mt, b, f]
          ),
          Bt = vt(
            function(t, e) {
              var r, i;
              return n.a.async(function(s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      if (((r = t || Object.keys(v.current)), !f)) {
                        s.next = 3;
                        break;
                      }
                      return s.abrupt('return', Rt(r, e));
                    case 3:
                      if (!C(r)) {
                        s.next = 9;
                        break;
                      }
                      return (
                        (s.next = 6),
                        n.a.awrap(
                          Promise.all(
                            r.map(function(t) {
                              return n.a.async(function(e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), n.a.awrap(Vt(t, !1, !0));
                                    case 2:
                                      return e.abrupt('return', e.sent);
                                    case 3:
                                    case 'end':
                                      return e.stop();
                                  }
                              });
                            })
                          )
                        )
                      );
                    case 6:
                      return (i = s.sent), At(), s.abrupt('return', i.every(Boolean));
                    case 9:
                      return (s.next = 11), n.a.awrap(Vt(r, e));
                    case 11:
                      return s.abrupt('return', s.sent);
                    case 12:
                    case 'end':
                      return s.stop();
                  }
              });
            },
            [Rt, Vt, At, f]
          ),
          Nt = vt(
            function(t, e, r) {
              var i = Ot(t, e) || z.current || S.current.has(t);
              if (r) return Bt(t, i);
              i && At();
            },
            [At, Ot, Bt]
          );
        tt.current = tt.current
          ? tt.current
          : function(t) {
              var e, r, i, s, o, h, l, p, u, m, d, y, g, P, _;
              return n.a.async(function(C) {
                for (;;)
                  switch ((C.prev = C.next)) {
                    case 0:
                      if (
                        ((e = t.type),
                        (r = t.target),
                        (i = r ? r.name : ''),
                        (s = v.current),
                        (o = E.current),
                        (h = s[i]),
                        (l = o[i]),
                        h)
                      ) {
                        C.next = 8;
                        break;
                      }
                      return C.abrupt('return');
                    case 8:
                      if (
                        ((u = e === c.BLUR),
                        (m = pt({
                          hasError: !!l,
                          isBlurEvent: u,
                          isOnSubmit: Et,
                          isReValidateOnSubmit: kt,
                          isOnBlur: ft,
                          isReValidateOnBlur: Dt,
                          isSubmitted: H.current
                        })),
                        (d = It(i)),
                        (y = z.current || S.current.has(i) || d),
                        u && !X(x.current, i) && _t.current.touched && (T(x.current, i, !0), (y = !0)),
                        !m)
                      ) {
                        C.next = 15;
                        break;
                      }
                      return C.abrupt('return', y && At());
                    case 15:
                      if (!f) {
                        C.next = 26;
                        break;
                      }
                      return (C.next = 18), n.a.awrap(st(f, b, M(Y(s))));
                    case 18:
                      (g = C.sent),
                        (P = g.errors),
                        (_ = U(P)),
                        (p = X(P, i) ? Object(a.a)({}, i, X(P, i)) : {}),
                        R.current !== _ && (y = !0),
                        (R.current = _),
                        (C.next = 29);
                      break;
                    case 26:
                      return (C.next = 28), n.a.awrap(it(v, b, h));
                    case 28:
                      p = C.sent;
                    case 29:
                      !Mt(i, p) && y && At();
                    case 30:
                    case 'end':
                      return C.stop();
                  }
              });
            };
        var Lt = vt(
            function() {
              var t = U(N.current) ? Y(v.current) : N.current;
              Tt(M(t)).then(function(t) {
                var e = t.errors,
                  r = R.current;
                (R.current = U(e)), r && r !== R.current && At();
              });
            },
            [At, Tt]
          ),
          jt = vt(
            function(t) {
              (E.current = mt(E.current, [t])),
                (x.current = mt(x.current, [t])),
                (v.current = ut(v.current, t)),
                (B.current = ut(B.current, t)),
                [D, A, w, S].forEach(function(e) {
                  return e.current.delete(t);
                }),
                (_t.current.isValid || _t.current.touched) && At(),
                f && Lt();
            },
            [At]
          ),
          Gt = vt(
            function(t, e) {
              t &&
                (P(tt.current) ||
                  (function(t, e, r, i) {
                    if (r) {
                      var n = r.ref,
                        s = r.ref,
                        a = s.name,
                        o = s.type,
                        h = r.mutationWatcher;
                      if (o) {
                        var l = t[a];
                        if ((I(o) || O(o)) && l) {
                          var p = l.options;
                          C(p) && p.length
                            ? (p.forEach(function(t, r) {
                                var n = t.ref;
                                if ((n && V(n)) || i) {
                                  var s = n.mutationWatcher;
                                  F(n, e), s && s.disconnect(), p.splice(r, 1);
                                }
                              }),
                              p && !p.length && delete t[a])
                            : delete t[a];
                        } else (V(n) || i) && (F(n, e), h && h.disconnect(), delete t[a]);
                      }
                    }
                  })(v.current, tt.current, t, e),
                jt(t.ref.name));
            },
            [jt]
          );
        var zt = function(t) {
          var e = t.name,
            r = t.type,
            i = t.types,
            n = t.message,
            s = t.preventRender,
            a = v.current[e];
          K(E.current[e], r, n) ||
            (T(E.current, e, { type: r, types: i, message: n, ref: a ? a.ref : {}, isManual: !0 }), s || At());
        };
        function Ht(t) {
          U(v.current) ||
            (C(t) ? t : [t]).forEach(function(t) {
              return Gt(v.current[t], !0);
            });
        }
        function qt(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t.name;
          var r = t.name,
            i = t.type,
            n = t.value,
            a = Object.assign({ ref: t }, e),
            o = v.current,
            h = I(i) || O(i),
            l = o[r];
          if (
            h
              ? l &&
                C(l.options) &&
                l.options.find(function(t) {
                  var e = t.ref;
                  return n === e.value;
                })
              : l
          )
            o[r] = Object.assign(Object.assign({}, l), e);
          else {
            if (i) {
              var p = (function(t, e) {
                var r = new MutationObserver(function() {
                  V(t) && (r.disconnect(), e());
                });
                return r.observe(window.document, { childList: !0, subtree: !0 }), r;
              })(t, function() {
                return Gt(a);
              });
              l = h
                ? Object.assign(
                    {
                      options: [].concat(Object(s.a)((l && l.options) || []), [{ ref: t, mutationWatcher: p }]),
                      ref: { type: i, name: r }
                    },
                    e
                  )
                : Object.assign(Object.assign({}, a), { mutationWatcher: p });
            } else l = a;
            if (((o[r] = l), !U(N.current))) {
              var u = at(N.current, r),
                m = Object(s.a)(rt.current).reduce(function(t, e) {
                  return !ct(r, e) && t;
                }, !0);
              !P(u) && m && Ft(r, u);
            }
            if (
              (f && _t.current.isValid
                ? Lt()
                : U(e) ||
                  (A.current.add(r),
                  !Et &&
                    _t.current.isValid &&
                    wt(l).then(function(t) {
                      var e = R.current;
                      U(t) ? w.current.add(r) : (R.current = !1), e !== R.current && At();
                    })),
              B.current[r] || (B.current[r] = W(o, l.ref)),
              i)
            )
              !(function(t) {
                var e = t.field,
                  r = t.handleChange,
                  i = t.isRadioOrCheckbox,
                  n = e.ref;
                n.addEventListener && (n.addEventListener(i ? c.CHANGE : c.INPUT, r), n.addEventListener(c.BLUR, r));
              })({
                field: h && l.options ? l.options[l.options.length - 1] : l,
                isRadioOrCheckbox: h,
                handleChange: tt.current
              });
          }
        }
        function Wt(t, e) {
          if (!xt && t)
            if (J(t)) qt({ name: t }, e);
            else {
              if (!(k(t) && 'name' in t))
                return function(e) {
                  return e && qt(e, t);
                };
              qt(t, e);
            }
        }
        var Yt = vt(
          function(t) {
            return function(e) {
              var r, i, s, a, o, h, l, p, c, u, m;
              return n.a.async(
                function(d) {
                  for (;;)
                    switch ((d.prev = d.next)) {
                      case 0:
                        if (
                          (e && (e.preventDefault(), e.persist()),
                          (s = v.current),
                          _t.current.isSubmitting && (($.current = !0), At()),
                          (d.prev = 3),
                          !f)
                        ) {
                          d.next = 16;
                          break;
                        }
                        return (i = Y(s)), (d.next = 8), n.a.awrap(Tt(M(i)));
                      case 8:
                        (a = d.sent), (o = a.errors), (h = a.values), (E.current = o), (r = o), (i = h), (d.next = 23);
                        break;
                      case 16:
                        return (
                          (d.next = 18),
                          n.a.awrap(
                            Object.values(s).reduce(function(t, e) {
                              var r, i, a, o;
                              return n.a.async(function(h) {
                                for (;;)
                                  switch ((h.prev = h.next)) {
                                    case 0:
                                      if (e) {
                                        h.next = 2;
                                        break;
                                      }
                                      return h.abrupt('return', t);
                                    case 2:
                                      return (h.next = 4), n.a.awrap(t);
                                    case 4:
                                      if (((r = h.sent), (i = e.ref), (a = e.ref.name), s[a])) {
                                        h.next = 8;
                                        break;
                                      }
                                      return h.abrupt('return', Promise.resolve(r));
                                    case 8:
                                      return (h.next = 10), n.a.awrap(wt(e));
                                    case 10:
                                      if (!(o = h.sent)[a]) {
                                        h.next = 15;
                                        break;
                                      }
                                      return (
                                        T(r.errors, a, o[a]),
                                        w.current.delete(a),
                                        h.abrupt('return', Promise.resolve(r))
                                      );
                                    case 15:
                                      return (
                                        A.current.has(a) && w.current.add(a),
                                        (r.values[a] = W(s, i)),
                                        h.abrupt('return', Promise.resolve(r))
                                      );
                                    case 18:
                                    case 'end':
                                      return h.stop();
                                  }
                              });
                            }, Promise.resolve({ errors: {}, values: {} }))
                          )
                        );
                      case 18:
                        (l = d.sent), (p = l.errors), (c = l.values), (r = p), (i = c);
                      case 23:
                        if (!U(r)) {
                          d.next = 29;
                          break;
                        }
                        return (E.current = {}), (d.next = 27), n.a.awrap(t(M(i), e));
                      case 27:
                        d.next = 47;
                        break;
                      case 29:
                        if (!y) {
                          d.next = 46;
                          break;
                        }
                        d.t0 = n.a.keys(v.current);
                      case 31:
                        if ((d.t1 = d.t0()).done) {
                          d.next = 46;
                          break;
                        }
                        if (((u = d.t1.value), !X(r, u))) {
                          d.next = 44;
                          break;
                        }
                        if (!(m = v.current[u])) {
                          d.next = 44;
                          break;
                        }
                        if (!m.ref.focus) {
                          d.next = 41;
                          break;
                        }
                        return m.ref.focus(), d.abrupt('break', 46);
                      case 41:
                        if (!m.options) {
                          d.next = 44;
                          break;
                        }
                        return m.options[0].ref.focus(), d.abrupt('break', 46);
                      case 44:
                        d.next = 31;
                        break;
                      case 46:
                        E.current = r;
                      case 47:
                        return (
                          (d.prev = 47),
                          (H.current = !0),
                          ($.current = !1),
                          (Z.current = Z.current + 1),
                          At(),
                          d.finish(47)
                        );
                      case 53:
                      case 'end':
                        return d.stop();
                    }
                },
                null,
                null,
                [[3, , 47, 53]]
              );
            };
          },
          [At, y, wt, Tt, f]
        );
        bt(
          function() {
            return function() {
              (G.current = !0),
                v.current &&
                  Object.values(v.current).forEach(function(t) {
                    return Gt(t, !0);
                  });
            };
          },
          [Gt]
        ),
          f || (R.current = w.current.size >= A.current.size && U(E.current));
        var Ut = {
          dirty: q.current,
          isSubmitted: H.current,
          submitCount: Z.current,
          touched: x.current,
          isSubmitting: $.current,
          isValid: Et ? H.current && U(E.current) : U(v.current) || R.current
        };
        return {
          watch: function(t, e) {
            var r = P(e) ? (P(N.current) ? {} : N.current) : e,
              i = Y(v.current),
              n = S.current;
            if ((Pt && (_t.current.dirty = !0), J(t))) return lt(i, t, n, r);
            if (C(t))
              return t.reduce(function(t, e) {
                var s;
                return (
                  (s = U(v.current) && k(r) ? at(r, e) : lt(i, e, n, r)),
                  Object.assign(Object.assign({}, t), Object(a.a)({}, e, s))
                );
              }, {});
            z.current = !0;
            var s = (!U(i) && i) || e || N.current;
            return t && t.nest ? M(s) : s;
          },
          control: {
            register: Wt,
            unregister: Ht,
            setValue: Nt,
            formState: Ut,
            defaultValues: m,
            mode: { isOnBlur: ft, isOnSubmit: Et },
            reValidateMode: { isReValidateOnBlur: Dt, isReValidateOnSubmit: kt },
            errors: E.current,
            fields: v.current,
            resetFieldArrayFunctionRef: et,
            fieldArrayNamesRef: rt
          },
          handleSubmit: Yt,
          setValue: Nt,
          triggerValidation: Bt,
          getValues: vt(function(t) {
            var e = Y(v.current),
              r = U(e) ? N.current : e;
            return t && t.nest ? M(r) : r;
          }, []),
          reset: vt(
            function(t) {
              for (var e = 0, r = Object.values(v.current); e < r.length; e++) {
                var i = r[e];
                if (i && i.ref && i.ref.closest)
                  try {
                    i.ref.closest('form').reset();
                    break;
                  } catch (n) {}
              }
              (E.current = {}),
                (v.current = {}),
                (x.current = {}),
                (w.current = new Set()),
                (A.current = new Set()),
                (rt.current = new Set()),
                (B.current = {}),
                (S.current = new Set()),
                (D.current = new Set()),
                (z.current = !1),
                (H.current = !1),
                (q.current = !1),
                (R.current = !0),
                (Z.current = 0),
                t && (N.current = t),
                Object.values(et.current).forEach(function(t) {
                  return Q(t) && t(N.current);
                }),
                At();
            },
            [At]
          ),
          register: vt(Wt, [B.current, N.current]),
          unregister: vt(Ht, [Gt]),
          clearError: vt(function(t) {
            P(t)
              ? (E.current = {})
              : (C(t) ? t : [t]).forEach(function(t) {
                  return (E.current = ut(E.current, t));
                }),
              At();
          }, []),
          setError: vt(function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
              r = arguments.length > 2 ? arguments[2] : void 0;
            J(t)
              ? zt(Object.assign({ name: t }, k(e) ? { types: e, type: '' } : { type: e, message: r }))
              : C(t) &&
                (t.forEach(function(t) {
                  return zt(Object.assign(Object.assign({}, t), { preventRender: !0 }));
                }),
                At());
          }, []),
          errors: E.current,
          formState: Pt
            ? new Proxy(Ut, {
                get: function(t, e) {
                  return e in t ? ((_t.current[e] = !0), t[e]) : {};
                }
              })
            : Ut
        };
      }
      Object(h.createContext)(null);
    },
    1107: function(t, e, r) {
      'use strict';
      var i = Object.prototype.propertyIsEnumerable;
      function n(t) {
        if (null == t) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(t);
      }
      function s(t) {
        var e = Object.getOwnPropertyNames(t);
        return (
          Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(t))),
          e.filter(function(e) {
            return i.call(t, e);
          })
        );
      }
      t.exports =
        Object.assign ||
        function(t, e) {
          for (var r, i, a = n(t), o = 1; o < arguments.length; o++) {
            (r = arguments[o]), (i = s(Object(r)));
            for (var h = 0; h < i.length; h++) a[i[h]] = r[i[h]];
          }
          return a;
        };
    },
    1108: function(t, e, r) {
      var i = r(1264);
      t.exports = function(t, e, r) {
        if ((i(t), void 0 === e)) return t;
        switch (r) {
          case 1:
            return function(r) {
              return t.call(e, r);
            };
          case 2:
            return function(r, i) {
              return t.call(e, r, i);
            };
          case 3:
            return function(r, i, n) {
              return t.call(e, r, i, n);
            };
        }
        return function() {
          return t.apply(e, arguments);
        };
      };
    },
    1109: function(t, e, r) {
      t.exports =
        !r(969) &&
        !r(981)(function() {
          return (
            7 !=
            Object.defineProperty(r(1110)('div'), 'a', {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    1110: function(t, e, r) {
      var i = r(980),
        n = r(968).document,
        s = i(n) && i(n.createElement);
      t.exports = function(t) {
        return s ? n.createElement(t) : {};
      };
    },
    1111: function(t, e, r) {
      var i = r(975),
        n = r(982),
        s = r(1266)(!1),
        a = r(1038)('IE_PROTO');
      t.exports = function(t, e) {
        var r,
          o = n(t),
          h = 0,
          l = [];
        for (r in o) r != a && i(o, r) && l.push(r);
        for (; e.length > h; ) i(o, (r = e[h++])) && (~s(l, r) || l.push(r));
        return l;
      };
    },
    1112: function(t, e, r) {
      var i = r(1113);
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return 'String' == i(t) ? t.split('') : Object(t);
          };
    },
    1113: function(t, e) {
      var r = {}.toString;
      t.exports = function(t) {
        return r.call(t).slice(8, -1);
      };
    },
    1114: function(t, e, r) {
      var i = r(975),
        n = r(1011),
        s = r(1038)('IE_PROTO'),
        a = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = n(t)),
            i(t, s)
              ? t[s]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? a
              : null
          );
        };
    },
    1115: function(t, e, r) {
      'use strict';
      e.__esModule = !0;
      var i = a(r(1279)),
        n = a(r(1290)),
        s =
          'function' === typeof n.default && 'symbol' === typeof i.default
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t && 'function' === typeof n.default && t.constructor === n.default && t !== n.default.prototype
                  ? 'symbol'
                  : typeof t;
              };
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default =
        'function' === typeof n.default && 'symbol' === s(i.default)
          ? function(t) {
              return 'undefined' === typeof t ? 'undefined' : s(t);
            }
          : function(t) {
              return t && 'function' === typeof n.default && t.constructor === n.default && t !== n.default.prototype
                ? 'symbol'
                : 'undefined' === typeof t
                ? 'undefined'
                : s(t);
            };
    },
    1116: function(t, e, r) {
      'use strict';
      var i = r(1008),
        n = r(973),
        s = r(1117),
        a = r(979),
        o = r(1042),
        h = r(1283),
        l = r(1044),
        p = r(1114),
        c = r(983)('iterator'),
        f = !([].keys && 'next' in [].keys()),
        u = function() {
          return this;
        };
      t.exports = function(t, e, r, m, d, y, g) {
        h(r, e, m);
        var v,
          b,
          E,
          x = function(t) {
            if (!f && t in C) return C[t];
            switch (t) {
              case 'keys':
              case 'values':
                return function() {
                  return new r(this, t);
                };
            }
            return function() {
              return new r(this, t);
            };
          },
          S = e + ' Iterator',
          P = 'values' == d,
          _ = !1,
          C = t.prototype,
          D = C[c] || C['@@iterator'] || (d && C[d]),
          k = D || x(d),
          A = d ? (P ? x('entries') : k) : void 0,
          w = ('Array' == e && C.entries) || D;
        if (
          (w &&
            (E = p(w.call(new t()))) !== Object.prototype &&
            E.next &&
            (l(E, S, !0), i || 'function' == typeof E[c] || a(E, c, u)),
          P &&
            D &&
            'values' !== D.name &&
            ((_ = !0),
            (k = function() {
              return D.call(this);
            })),
          (i && !g) || (!f && !_ && C[c]) || a(C, c, k),
          (o[e] = k),
          (o[S] = u),
          d)
        )
          if (((v = { values: P ? k : x('values'), keys: y ? k : x('keys'), entries: A }), g))
            for (b in v) b in C || s(C, b, v[b]);
          else n(n.P + n.F * (f || _), e, v);
        return v;
      };
    },
    1117: function(t, e, r) {
      t.exports = r(979);
    },
    1118: function(t, e, r) {
      var i = r(1111),
        n = r(1040).concat('length', 'prototype');
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return i(t, n);
        };
    },
    1119: function(t, e, r) {
      var i = r(1010),
        n = r(1006),
        s = r(982),
        a = r(1035),
        o = r(975),
        h = r(1109),
        l = Object.getOwnPropertyDescriptor;
      e.f = r(969)
        ? l
        : function(t, e) {
            if (((t = s(t)), (e = a(e, !0)), h))
              try {
                return l(t, e);
              } catch (r) {}
            if (o(t, e)) return n(!i.f.call(t, e), t[e]);
          };
    },
    1205: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r.n(i),
        s = r(1),
        a = r.n(s);
      function o(t, e, r, i) {
        return new (r || (r = Promise))(function(n, s) {
          function a(t) {
            try {
              h(i.next(t));
            } catch (e) {
              s(e);
            }
          }
          function o(t) {
            try {
              h(i.throw(t));
            } catch (e) {
              s(e);
            }
          }
          function h(t) {
            t.done
              ? n(t.value)
              : new r(function(e) {
                  e(t.value);
                }).then(a, o);
          }
          h((i = i.apply(t, e || [])).next());
        });
      }
      function h(t, e) {
        var r,
          i,
          n,
          s,
          a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
        return (
          (s = { next: o(0), throw: o(1), return: o(2) }),
          'function' === typeof Symbol &&
            (s[Symbol.iterator] = function() {
              return this;
            }),
          s
        );
        function o(s) {
          return function(o) {
            return (function(s) {
              if (r) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) &&
                      !(n = n.call(i, s[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < n[1]) {
                        (a.label = n[1]), (n = s);
                        break;
                      }
                      if (n && a.label < n[2]) {
                        (a.label = n[2]), a.ops.push(s);
                        break;
                      }
                      n[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = e.call(t, a);
                } catch (o) {
                  (s = [6, o]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, o]);
          };
        }
      }
      function l(t, e) {
        var r = 'function' === typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var i,
          n,
          s = r.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(i = s.next()).done; ) a.push(i.value);
        } catch (o) {
          n = { error: o };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return a;
      }
      var p = new Map([
        ['avi', 'video/avi'],
        ['gif', 'image/gif'],
        ['ico', 'image/x-icon'],
        ['jpeg', 'image/jpeg'],
        ['jpg', 'image/jpeg'],
        ['mkv', 'video/x-matroska'],
        ['mov', 'video/quicktime'],
        ['mp4', 'video/mp4'],
        ['pdf', 'application/pdf'],
        ['png', 'image/png'],
        ['zip', 'application/zip'],
        ['doc', 'application/msword'],
        ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      ]);
      function c(t, e) {
        var r = (function(t) {
          var e = t.name;
          if (e && -1 !== e.lastIndexOf('.') && !t.type) {
            var r = e
                .split('.')
                .pop()
                .toLowerCase(),
              i = p.get(r);
            i && Object.defineProperty(t, 'type', { value: i, writable: !1, configurable: !1, enumerable: !0 });
          }
          return t;
        })(t);
        if ('string' !== typeof r.path) {
          var i = t.webkitRelativePath;
          Object.defineProperty(r, 'path', {
            value: 'string' === typeof e ? e : 'string' === typeof i && i.length > 0 ? i : t.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
          });
        }
        return r;
      }
      var f = ['.DS_Store', 'Thumbs.db'];
      function u(t) {
        return o(this, void 0, void 0, function() {
          return h(this, function(e) {
            return [2, ((r = t), r.dataTransfer && t.dataTransfer ? d(t.dataTransfer, t.type) : m(t))];
            var r;
          });
        });
      }
      function m(t) {
        return (null !== t.target && t.target.files ? g(t.target.files) : []).map(function(t) {
          return c(t);
        });
      }
      function d(t, e) {
        return o(this, void 0, void 0, function() {
          var r;
          return h(this, function(i) {
            switch (i.label) {
              case 0:
                return t.items
                  ? ((r = g(t.items).filter(function(t) {
                      return 'file' === t.kind;
                    })),
                    'drop' !== e ? [2, r] : [4, Promise.all(r.map(v))])
                  : [3, 2];
              case 1:
                return [2, y(b(i.sent()))];
              case 2:
                return [
                  2,
                  y(
                    g(t.files).map(function(t) {
                      return c(t);
                    })
                  )
                ];
            }
          });
        });
      }
      function y(t) {
        return t.filter(function(t) {
          return -1 === f.indexOf(t.name);
        });
      }
      function g(t) {
        for (var e = [], r = 0; r < t.length; r++) {
          var i = t[r];
          e.push(i);
        }
        return e;
      }
      function v(t) {
        if ('function' !== typeof t.webkitGetAsEntry) return E(t);
        var e = t.webkitGetAsEntry();
        return e && e.isDirectory ? S(e) : E(t);
      }
      function b(t) {
        return t.reduce(function(t, e) {
          return (function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(l(arguments[e]));
            return t;
          })(t, Array.isArray(e) ? b(e) : [e]);
        }, []);
      }
      function E(t) {
        var e = t.getAsFile();
        if (!e) return Promise.reject(t + ' is not a File');
        var r = c(e);
        return Promise.resolve(r);
      }
      function x(t) {
        return o(this, void 0, void 0, function() {
          return h(this, function(e) {
            return [2, t.isDirectory ? S(t) : P(t)];
          });
        });
      }
      function S(t) {
        var e = t.createReader();
        return new Promise(function(t, r) {
          var i = [];
          !(function n() {
            var s = this;
            e.readEntries(
              function(e) {
                return o(s, void 0, void 0, function() {
                  var s, a, o;
                  return h(this, function(h) {
                    switch (h.label) {
                      case 0:
                        if (e.length) return [3, 5];
                        h.label = 1;
                      case 1:
                        return h.trys.push([1, 3, , 4]), [4, Promise.all(i)];
                      case 2:
                        return (s = h.sent()), t(s), [3, 4];
                      case 3:
                        return (a = h.sent()), r(a), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (o = Promise.all(e.map(x))), i.push(o), n(), (h.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function(t) {
                r(t);
              }
            );
          })();
        });
      }
      function P(t) {
        return o(this, void 0, void 0, function() {
          return h(this, function(e) {
            return [
              2,
              new Promise(function(e, r) {
                t.file(
                  function(r) {
                    var i = c(r, t.fullPath);
                    e(i);
                  },
                  function(t) {
                    r(t);
                  }
                );
              })
            ];
          });
        });
      }
      var _ = r(1259),
        C = r.n(_);
      function D(t, e) {
        return 'application/x-moz-file' === t.type || C()(t, e);
      }
      function k(t, e, r) {
        if (A(t.size)) {
          if (A(e) && A(r)) return t.size >= e && t.size <= r;
          if (A(e)) return t.size >= e;
          if (A(r)) return t.size <= r;
        }
        return !0;
      }
      function A(t) {
        return void 0 !== t && null !== t;
      }
      function w(t) {
        return 'function' === typeof t.isPropagationStopped
          ? t.isPropagationStopped()
          : 'undefined' !== typeof t.cancelBubble && t.cancelBubble;
      }
      function T(t) {
        return t.dataTransfer
          ? Array.prototype.some.call(t.dataTransfer.types, function(t) {
              return 'Files' === t || 'application/x-moz-file' === t;
            })
          : !!t.target && !!t.target.files;
      }
      function M(t) {
        t.preventDefault();
      }
      function F() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function(t) {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
          return e.some(function(e) {
            return !w(t) && e && e.apply(void 0, [t].concat(i)), w(t);
          });
        };
      }
      function I(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
              return r;
            }
          })(t) ||
          (function(t) {
            if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      function O(t, e) {
        return (
          (function(t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function(t, e) {
            if (!(Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))) return;
            var r = [],
              i = !0,
              n = !1,
              s = void 0;
            try {
              for (
                var a, o = t[Symbol.iterator]();
                !(i = (a = o.next()).done) && (r.push(a.value), !e || r.length !== e);
                i = !0
              );
            } catch (h) {
              (n = !0), (s = h);
            } finally {
              try {
                i || null == o.return || o.return();
              } finally {
                if (n) throw s;
              }
            }
            return r;
          })(t, e) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function V(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? V(r, !0).forEach(function(e) {
                B(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : V(r).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              });
        }
        return t;
      }
      function B(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        );
      }
      function N(t, e) {
        if (null == t) return {};
        var r,
          i,
          n = (function(t, e) {
            if (null == t) return {};
            var r,
              i,
              n = {},
              s = Object.keys(t);
            for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
            return n;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (i = 0; i < s.length; i++)
            (r = s[i]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
        }
        return n;
      }
      var L = Object(i.forwardRef)(function(t, e) {
        var r = t.children,
          s = (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = t.accept,
              r = t.disabled,
              n = void 0 !== r && r,
              s = t.getFilesFromEvent,
              a = void 0 === s ? u : s,
              o = t.maxSize,
              h = void 0 === o ? 1 / 0 : o,
              l = t.minSize,
              p = void 0 === l ? 0 : l,
              c = t.multiple,
              f = void 0 === c || c,
              m = t.onDragEnter,
              d = t.onDragLeave,
              y = t.onDragOver,
              g = t.onDrop,
              v = t.onDropAccepted,
              b = t.onDropRejected,
              E = t.onFileDialogCancel,
              x = t.preventDropOnDocument,
              S = void 0 === x || x,
              P = t.noClick,
              _ = void 0 !== P && P,
              C = t.noKeyboard,
              A = void 0 !== C && C,
              V = t.noDrag,
              L = void 0 !== V && V,
              z = t.noDragEventsBubbling,
              H = void 0 !== z && z,
              q = Object(i.useRef)(null),
              W = Object(i.useRef)(null),
              Y = O(Object(i.useReducer)(G, j), 2),
              U = Y[0],
              K = Y[1],
              X = U.isFocused,
              Z = U.isFileDialogActive,
              $ = U.draggedFiles,
              J = Object(i.useCallback)(
                function() {
                  W.current && (K({ type: 'openDialog' }), (W.current.value = null), W.current.click());
                },
                [K]
              ),
              Q = function() {
                Z &&
                  setTimeout(function() {
                    W.current &&
                      (W.current.files.length || (K({ type: 'closeDialog' }), 'function' === typeof E && E()));
                  }, 300);
              };
            Object(i.useEffect)(
              function() {
                return (
                  window.addEventListener('focus', Q, !1),
                  function() {
                    window.removeEventListener('focus', Q, !1);
                  }
                );
              },
              [W, Z, E]
            );
            var tt = Object(i.useCallback)(
                function(t) {
                  q.current &&
                    q.current.isEqualNode(t.target) &&
                    ((32 !== t.keyCode && 13 !== t.keyCode) || (t.preventDefault(), J()));
                },
                [q, W]
              ),
              et = Object(i.useCallback)(function() {
                K({ type: 'focus' });
              }, []),
              rt = Object(i.useCallback)(function() {
                K({ type: 'blur' });
              }, []),
              it = Object(i.useCallback)(
                function() {
                  _ ||
                    (!(function() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                      return (
                        (function(t) {
                          return -1 !== t.indexOf('MSIE') || -1 !== t.indexOf('Trident/');
                        })(t) ||
                        (function(t) {
                          return -1 !== t.indexOf('Edge/');
                        })(t)
                      );
                    })()
                      ? J()
                      : setTimeout(J, 0));
                },
                [W, _]
              ),
              nt = Object(i.useRef)([]),
              st = function(t) {
                (q.current && q.current.contains(t.target)) || (t.preventDefault(), (nt.current = []));
              };
            Object(i.useEffect)(
              function() {
                return (
                  S && (document.addEventListener('dragover', M, !1), document.addEventListener('drop', st, !1)),
                  function() {
                    S && (document.removeEventListener('dragover', M), document.removeEventListener('drop', st));
                  }
                );
              },
              [q, S]
            );
            var at = Object(i.useCallback)(
                function(t) {
                  t.preventDefault(),
                    t.persist(),
                    ut(t),
                    -1 === nt.current.indexOf(t.target) && (nt.current = [].concat(I(nt.current), [t.target])),
                    T(t) &&
                      Promise.resolve(a(t)).then(function(e) {
                        (w(t) && !H) || (K({ draggedFiles: e, isDragActive: !0, type: 'setDraggedFiles' }), m && m(t));
                      });
                },
                [a, m, H]
              ),
              ot = Object(i.useCallback)(
                function(t) {
                  if ((t.preventDefault(), t.persist(), ut(t), t.dataTransfer))
                    try {
                      t.dataTransfer.dropEffect = 'copy';
                    } catch (e) {}
                  return T(t) && y && y(t), !1;
                },
                [y, H]
              ),
              ht = Object(i.useCallback)(
                function(t) {
                  t.preventDefault(), t.persist(), ut(t);
                  var e = nt.current.filter(function(e) {
                    return e !== t.target && q.current && q.current.contains(e);
                  });
                  (nt.current = e),
                    e.length > 0 ||
                      (K({ isDragActive: !1, type: 'setDraggedFiles', draggedFiles: [] }), T(t) && d && d(t));
                },
                [q, d, H]
              ),
              lt = Object(i.useCallback)(
                function(t) {
                  t.preventDefault(),
                    t.persist(),
                    ut(t),
                    (nt.current = []),
                    K({ type: 'reset' }),
                    T(t) &&
                      Promise.resolve(a(t)).then(function(r) {
                        if (!w(t) || H) {
                          var i = [],
                            n = [];
                          r.forEach(function(t) {
                            D(t, e) && k(t, p, h) ? i.push(t) : n.push(t);
                          }),
                            !f && i.length > 1 && n.push.apply(n, I(i.splice(0))),
                            K({ acceptedFiles: i, rejectedFiles: n, type: 'setFiles' }),
                            g && g(i, n, t),
                            n.length > 0 && b && b(n, t),
                            i.length > 0 && v && v(i, t);
                        }
                      });
                },
                [f, e, p, h, a, g, v, b, H]
              ),
              pt = function(t) {
                return n ? null : t;
              },
              ct = function(t) {
                return A ? null : pt(t);
              },
              ft = function(t) {
                return L ? null : pt(t);
              },
              ut = function(t) {
                H && t.stopPropagation();
              },
              mt = Object(i.useMemo)(
                function() {
                  return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      e = t.refKey,
                      r = void 0 === e ? 'ref' : e,
                      i = t.onKeyDown,
                      s = t.onFocus,
                      a = t.onBlur,
                      o = t.onClick,
                      h = t.onDragEnter,
                      l = t.onDragOver,
                      p = t.onDragLeave,
                      c = t.onDrop,
                      f = N(t, [
                        'refKey',
                        'onKeyDown',
                        'onFocus',
                        'onBlur',
                        'onClick',
                        'onDragEnter',
                        'onDragOver',
                        'onDragLeave',
                        'onDrop'
                      ]);
                    return R(
                      B(
                        {
                          onKeyDown: ct(F(i, tt)),
                          onFocus: ct(F(s, et)),
                          onBlur: ct(F(a, rt)),
                          onClick: pt(F(o, it)),
                          onDragEnter: ft(F(h, at)),
                          onDragOver: ft(F(l, ot)),
                          onDragLeave: ft(F(p, ht)),
                          onDrop: ft(F(c, lt))
                        },
                        r,
                        q
                      ),
                      n || A ? {} : { tabIndex: 0 },
                      {},
                      f
                    );
                  };
                },
                [q, tt, et, rt, it, at, ot, ht, lt, A, L, n]
              ),
              dt = Object(i.useCallback)(function(t) {
                t.stopPropagation();
              }, []),
              yt = Object(i.useMemo)(
                function() {
                  return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      r = t.refKey,
                      i = void 0 === r ? 'ref' : r,
                      n = t.onChange,
                      s = t.onClick,
                      a = N(t, ['refKey', 'onChange', 'onClick']),
                      o = B(
                        {
                          accept: e,
                          multiple: f,
                          type: 'file',
                          style: { display: 'none' },
                          onChange: pt(F(n, lt)),
                          onClick: pt(F(s, dt)),
                          autoComplete: 'off',
                          tabIndex: -1
                        },
                        i,
                        W
                      );
                    return R({}, o, {}, a);
                  };
                },
                [W, e, f, lt, n]
              ),
              gt = $.length,
              vt = f || gt <= 1,
              bt =
                gt > 0 &&
                (function(t, e, r, i) {
                  return t.every(function(t) {
                    return D(t, e) && k(t, r, i);
                  });
                })($, e, p, h);
            return R({}, U, {
              isDragAccept: bt,
              isDragReject: gt > 0 && (!bt || !vt),
              isFocused: X && !n,
              getRootProps: mt,
              getInputProps: yt,
              rootRef: q,
              inputRef: W,
              open: pt(J)
            });
          })(N(t, ['children'])),
          a = s.open,
          o = N(s, ['open']);
        return (
          Object(i.useImperativeHandle)(
            e,
            function() {
              return { open: a };
            },
            [a]
          ),
          n.a.createElement(i.Fragment, null, r(R({}, o, { open: a })))
        );
      });
      (L.displayName = 'Dropzone'),
        (L.propTypes = {
          children: a.a.func,
          accept: a.a.oneOfType([a.a.string, a.a.arrayOf(a.a.string)]),
          multiple: a.a.bool,
          preventDropOnDocument: a.a.bool,
          noClick: a.a.bool,
          noKeyboard: a.a.bool,
          noDrag: a.a.bool,
          noDragEventsBubbling: a.a.bool,
          minSize: a.a.number,
          maxSize: a.a.number,
          disabled: a.a.bool,
          getFilesFromEvent: a.a.func,
          onFileDialogCancel: a.a.func,
          onDragEnter: a.a.func,
          onDragLeave: a.a.func,
          onDragOver: a.a.func,
          onDrop: a.a.func,
          onDropAccepted: a.a.func,
          onDropRejected: a.a.func
        });
      e.a = L;
      var j = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        rejectedFiles: []
      };
      function G(t, e) {
        switch (e.type) {
          case 'focus':
            return R({}, t, { isFocused: !0 });
          case 'blur':
            return R({}, t, { isFocused: !1 });
          case 'openDialog':
            return R({}, t, { isFileDialogActive: !0 });
          case 'closeDialog':
            return R({}, t, { isFileDialogActive: !1 });
          case 'setDraggedFiles':
            var r = e.isDragActive;
            return R({}, t, { draggedFiles: e.draggedFiles, isDragActive: r });
          case 'setFiles':
            return R({}, t, { acceptedFiles: e.acceptedFiles, rejectedFiles: e.rejectedFiles });
          case 'reset':
            return R({}, t, { isFileDialogActive: !1, isDragActive: !1, draggedFiles: [] });
          default:
            return t;
        }
      }
    },
    1249: function(t, e, r) {
      t.exports = r(478);
    },
    1250: function(t, e, r) {
      'use strict';
      var i = r(211),
        n = r(1251),
        s = r(1252),
        a = 'mixins';
      t.exports = function(t, e, r) {
        var o = [],
          h = {
            mixins: 'DEFINE_MANY',
            statics: 'DEFINE_MANY',
            propTypes: 'DEFINE_MANY',
            contextTypes: 'DEFINE_MANY',
            childContextTypes: 'DEFINE_MANY',
            getDefaultProps: 'DEFINE_MANY_MERGED',
            getInitialState: 'DEFINE_MANY_MERGED',
            getChildContext: 'DEFINE_MANY_MERGED',
            render: 'DEFINE_ONCE',
            componentWillMount: 'DEFINE_MANY',
            componentDidMount: 'DEFINE_MANY',
            componentWillReceiveProps: 'DEFINE_MANY',
            shouldComponentUpdate: 'DEFINE_ONCE',
            componentWillUpdate: 'DEFINE_MANY',
            componentDidUpdate: 'DEFINE_MANY',
            componentWillUnmount: 'DEFINE_MANY',
            UNSAFE_componentWillMount: 'DEFINE_MANY',
            UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
            UNSAFE_componentWillUpdate: 'DEFINE_MANY',
            updateComponent: 'OVERRIDE_BASE'
          },
          l = { getDerivedStateFromProps: 'DEFINE_MANY_MERGED' },
          p = {
            displayName: function(t, e) {
              t.displayName = e;
            },
            mixins: function(t, e) {
              if (e) for (var r = 0; r < e.length; r++) f(t, e[r]);
            },
            childContextTypes: function(t, e) {
              t.childContextTypes = i({}, t.childContextTypes, e);
            },
            contextTypes: function(t, e) {
              t.contextTypes = i({}, t.contextTypes, e);
            },
            getDefaultProps: function(t, e) {
              t.getDefaultProps ? (t.getDefaultProps = m(t.getDefaultProps, e)) : (t.getDefaultProps = e);
            },
            propTypes: function(t, e) {
              t.propTypes = i({}, t.propTypes, e);
            },
            statics: function(t, e) {
              !(function(t, e) {
                if (!e) return;
                for (var r in e) {
                  var i = e[r];
                  if (e.hasOwnProperty(r)) {
                    if (
                      (s(
                        !(r in p),
                        'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                        r
                      ),
                      r in t)
                    ) {
                      var n = l.hasOwnProperty(r) ? l[r] : null;
                      return (
                        s(
                          'DEFINE_MANY_MERGED' === n,
                          'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                          r
                        ),
                        void (t[r] = m(t[r], i))
                      );
                    }
                    t[r] = i;
                  }
                }
              })(t, e);
            },
            autobind: function() {}
          };
        function c(t, e) {
          var r = h.hasOwnProperty(e) ? h[e] : null;
          b.hasOwnProperty(e) &&
            s(
              'OVERRIDE_BASE' === r,
              'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
              e
            ),
            t &&
              s(
                'DEFINE_MANY' === r || 'DEFINE_MANY_MERGED' === r,
                'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                e
              );
        }
        function f(t, r) {
          if (r) {
            s(
              'function' !== typeof r,
              "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
            ),
              s(
                !e(r),
                "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
              );
            var i = t.prototype,
              n = i.__reactAutoBindPairs;
            for (var o in (r.hasOwnProperty(a) && p.mixins(t, r.mixins), r))
              if (r.hasOwnProperty(o) && o !== a) {
                var l = r[o],
                  f = i.hasOwnProperty(o);
                if ((c(f, o), p.hasOwnProperty(o))) p[o](t, l);
                else {
                  var u = h.hasOwnProperty(o);
                  if ('function' === typeof l && !u && !f && !1 !== r.autobind) n.push(o, l), (i[o] = l);
                  else if (f) {
                    var y = h[o];
                    s(
                      u && ('DEFINE_MANY_MERGED' === y || 'DEFINE_MANY' === y),
                      'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
                      y,
                      o
                    ),
                      'DEFINE_MANY_MERGED' === y ? (i[o] = m(i[o], l)) : 'DEFINE_MANY' === y && (i[o] = d(i[o], l));
                  } else i[o] = l;
                }
              }
          } else;
        }
        function u(t, e) {
          for (var r in (s(
            t && e && 'object' === typeof t && 'object' === typeof e,
            'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
          ),
          e))
            e.hasOwnProperty(r) &&
              (s(
                void 0 === t[r],
                'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
                r
              ),
              (t[r] = e[r]));
          return t;
        }
        function m(t, e) {
          return function() {
            var r = t.apply(this, arguments),
              i = e.apply(this, arguments);
            if (null == r) return i;
            if (null == i) return r;
            var n = {};
            return u(n, r), u(n, i), n;
          };
        }
        function d(t, e) {
          return function() {
            t.apply(this, arguments), e.apply(this, arguments);
          };
        }
        function y(t, e) {
          return e.bind(t);
        }
        var g = {
            componentDidMount: function() {
              this.__isMounted = !0;
            }
          },
          v = {
            componentWillUnmount: function() {
              this.__isMounted = !1;
            }
          },
          b = {
            replaceState: function(t, e) {
              this.updater.enqueueReplaceState(this, t, e);
            },
            isMounted: function() {
              return !!this.__isMounted;
            }
          },
          E = function() {};
        return (
          i(E.prototype, t.prototype, b),
          function(t) {
            var e = function(t, i, a) {
              this.__reactAutoBindPairs.length &&
                (function(t) {
                  for (var e = t.__reactAutoBindPairs, r = 0; r < e.length; r += 2) {
                    var i = e[r],
                      n = e[r + 1];
                    t[i] = y(t, n);
                  }
                })(this),
                (this.props = t),
                (this.context = i),
                (this.refs = n),
                (this.updater = a || r),
                (this.state = null);
              var o = this.getInitialState ? this.getInitialState() : null;
              s(
                'object' === typeof o && !Array.isArray(o),
                '%s.getInitialState(): must return an object or null',
                e.displayName || 'ReactCompositeComponent'
              ),
                (this.state = o);
            };
            for (var i in ((e.prototype = new E()),
            (e.prototype.constructor = e),
            (e.prototype.__reactAutoBindPairs = []),
            o.forEach(f.bind(null, e)),
            f(e, g),
            f(e, t),
            f(e, v),
            e.getDefaultProps && (e.defaultProps = e.getDefaultProps()),
            s(e.prototype.render, 'createClass(...): Class specification must implement a `render` method.'),
            h))
              e.prototype[i] || (e.prototype[i] = null);
            return e;
          }
        );
      };
    },
    1251: function(t, e, r) {
      'use strict';
      t.exports = {};
    },
    1252: function(t, e, r) {
      'use strict';
      var i = function(t) {};
      t.exports = function(t, e, r, n, s, a, o, h) {
        if ((i(e), !t)) {
          var l;
          if (void 0 === e)
            l = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var p = [r, n, s, a, o, h],
              c = 0;
            (l = new Error(
              e.replace(/%s/g, function() {
                return p[c++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    1253: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r(967)({
          viewComponents: { days: r(1254), months: r(1255), years: r(1256), time: r(1257) },
          render: function() {
            return i.createElement(this.viewComponents[this.props.view], this.props.viewProps);
          }
        });
      t.exports = n;
    },
    1254: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r(967),
        s = r(145),
        a = n({
          render: function() {
            var t,
              e = this.renderFooter(),
              r = this.props.viewDate,
              n = r.localeData();
            return (
              (t = [
                i.createElement('thead', { key: 'th' }, [
                  i.createElement('tr', { key: 'h' }, [
                    i.createElement(
                      'th',
                      { key: 'p', className: 'rdtPrev', onClick: this.props.subtractTime(1, 'months') },
                      i.createElement('span', {}, '\u2039')
                    ),
                    i.createElement(
                      'th',
                      {
                        key: 's',
                        className: 'rdtSwitch',
                        onClick: this.props.showView('months'),
                        colSpan: 5,
                        'data-value': this.props.viewDate.month()
                      },
                      n.months(r) + ' ' + r.year()
                    ),
                    i.createElement(
                      'th',
                      { key: 'n', className: 'rdtNext', onClick: this.props.addTime(1, 'months') },
                      i.createElement('span', {}, '\u203a')
                    )
                  ]),
                  i.createElement(
                    'tr',
                    { key: 'd' },
                    this.getDaysOfWeek(n).map(function(t, e) {
                      return i.createElement('th', { key: t + e, className: 'dow' }, t);
                    })
                  )
                ]),
                i.createElement('tbody', { key: 'tb' }, this.renderDays())
              ]),
              e && t.push(e),
              i.createElement('div', { className: 'rdtDays' }, i.createElement('table', {}, t))
            );
          },
          getDaysOfWeek: function(t) {
            var e = t._weekdaysMin,
              r = t.firstDayOfWeek(),
              i = [],
              n = 0;
            return (
              e.forEach(function(t) {
                i[(7 + n++ - r) % 7] = t;
              }),
              i
            );
          },
          renderDays: function() {
            var t,
              e,
              r,
              n,
              a = this.props.viewDate,
              o = this.props.selectedDate && this.props.selectedDate.clone(),
              h = a.clone().subtract(1, 'months'),
              l = a.year(),
              p = a.month(),
              c = [],
              f = [],
              u = this.props.renderDay || this.renderDay,
              m = this.props.isValidDate || this.alwaysValidDate;
            h.date(h.daysInMonth()).startOf('week');
            for (var d = h.clone().add(42, 'd'); h.isBefore(d); )
              (t = 'rdtDay'),
                (n = h.clone()),
                (h.year() === l && h.month() < p) || h.year() < l
                  ? (t += ' rdtOld')
                  : ((h.year() === l && h.month() > p) || h.year() > l) && (t += ' rdtNew'),
                o && h.isSame(o, 'day') && (t += ' rdtActive'),
                h.isSame(s(), 'day') && (t += ' rdtToday'),
                (e = !m(n, o)) && (t += ' rdtDisabled'),
                (r = { key: h.format('M_D'), 'data-value': h.date(), className: t }),
                e || (r.onClick = this.updateSelectedDate),
                f.push(u(r, n, o)),
                7 === f.length && (c.push(i.createElement('tr', { key: h.format('M_D') }, f)), (f = [])),
                h.add(1, 'd');
            return c;
          },
          updateSelectedDate: function(t) {
            this.props.updateSelectedDate(t, !0);
          },
          renderDay: function(t, e) {
            return i.createElement('td', t, e.date());
          },
          renderFooter: function() {
            if (!this.props.timeFormat) return '';
            var t = this.props.selectedDate || this.props.viewDate;
            return i.createElement(
              'tfoot',
              { key: 'tf' },
              i.createElement(
                'tr',
                {},
                i.createElement(
                  'td',
                  { onClick: this.props.showView('time'), colSpan: 7, className: 'rdtTimeToggle' },
                  t.format(this.props.timeFormat)
                )
              )
            );
          },
          alwaysValidDate: function() {
            return 1;
          }
        });
      t.exports = a;
    },
    1255: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r(967)({
          render: function() {
            return i.createElement('div', { className: 'rdtMonths' }, [
              i.createElement(
                'table',
                { key: 'a' },
                i.createElement(
                  'thead',
                  {},
                  i.createElement('tr', {}, [
                    i.createElement(
                      'th',
                      { key: 'prev', className: 'rdtPrev', onClick: this.props.subtractTime(1, 'years') },
                      i.createElement('span', {}, '\u2039')
                    ),
                    i.createElement(
                      'th',
                      {
                        key: 'year',
                        className: 'rdtSwitch',
                        onClick: this.props.showView('years'),
                        colSpan: 2,
                        'data-value': this.props.viewDate.year()
                      },
                      this.props.viewDate.year()
                    ),
                    i.createElement(
                      'th',
                      { key: 'next', className: 'rdtNext', onClick: this.props.addTime(1, 'years') },
                      i.createElement('span', {}, '\u203a')
                    )
                  ])
                )
              ),
              i.createElement('table', { key: 'months' }, i.createElement('tbody', { key: 'b' }, this.renderMonths()))
            ]);
          },
          renderMonths: function() {
            for (
              var t,
                e,
                r,
                n,
                s,
                a = this.props.selectedDate,
                o = this.props.viewDate.month(),
                h = this.props.viewDate.year(),
                l = [],
                p = 0,
                c = [],
                f = this.props.renderMonth || this.renderMonth,
                u = this.props.isValidDate || this.alwaysValidDate;
              p < 12;

            )
              (t = 'rdtMonth'),
                (s = (r = this.props.viewDate.clone().set({ year: h, month: p, date: 1 })).endOf('month').format('D')),
                (n =
                  void 0 ===
                  Array.from({ length: s }, function(t, e) {
                    return e + 1;
                  }).find(function(t) {
                    var e = r.clone().set('date', t);
                    return u(e);
                  })) && (t += ' rdtDisabled'),
                a && p === a.month() && h === a.year() && (t += ' rdtActive'),
                (e = { key: p, 'data-value': p, className: t }),
                n ||
                  (e.onClick =
                    'months' === this.props.updateOn ? this.updateSelectedMonth : this.props.setDate('month')),
                c.push(f(e, p, h, a && a.clone())),
                4 === c.length && (l.push(i.createElement('tr', { key: o + '_' + l.length }, c)), (c = [])),
                p++;
            return l;
          },
          updateSelectedMonth: function(t) {
            this.props.updateSelectedDate(t);
          },
          renderMonth: function(t, e) {
            var r,
              n = this.props.viewDate,
              s = n
                .localeData()
                .monthsShort(n.month(e))
                .substring(0, 3);
            return i.createElement('td', t, (r = s).charAt(0).toUpperCase() + r.slice(1));
          },
          alwaysValidDate: function() {
            return 1;
          }
        });
      t.exports = n;
    },
    1256: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r(967)({
          render: function() {
            var t = 10 * parseInt(this.props.viewDate.year() / 10, 10);
            return i.createElement('div', { className: 'rdtYears' }, [
              i.createElement(
                'table',
                { key: 'a' },
                i.createElement(
                  'thead',
                  {},
                  i.createElement('tr', {}, [
                    i.createElement(
                      'th',
                      { key: 'prev', className: 'rdtPrev', onClick: this.props.subtractTime(10, 'years') },
                      i.createElement('span', {}, '\u2039')
                    ),
                    i.createElement(
                      'th',
                      { key: 'year', className: 'rdtSwitch', onClick: this.props.showView('years'), colSpan: 2 },
                      t + '-' + (t + 9)
                    ),
                    i.createElement(
                      'th',
                      { key: 'next', className: 'rdtNext', onClick: this.props.addTime(10, 'years') },
                      i.createElement('span', {}, '\u203a')
                    )
                  ])
                )
              ),
              i.createElement('table', { key: 'years' }, i.createElement('tbody', {}, this.renderYears(t)))
            ]);
          },
          renderYears: function(t) {
            var e,
              r,
              n,
              s,
              a,
              o = [],
              h = -1,
              l = [],
              p = this.props.renderYear || this.renderYear,
              c = this.props.selectedDate,
              f = this.props.isValidDate || this.alwaysValidDate;
            for (t--; h < 11; )
              (e = 'rdtYear'),
                (a = (n = this.props.viewDate.clone().set({ year: t, month: 0, date: 1 })).endOf('year').format('DDD')),
                (s =
                  void 0 ===
                  Array.from({ length: a }, function(t, e) {
                    return e + 1;
                  }).find(function(t) {
                    var e = n.clone().dayOfYear(t);
                    return f(e);
                  })) && (e += ' rdtDisabled'),
                c && c.year() === t && (e += ' rdtActive'),
                (r = { key: t, 'data-value': t, className: e }),
                s ||
                  (r.onClick = 'years' === this.props.updateOn ? this.updateSelectedYear : this.props.setDate('year')),
                o.push(p(r, t, c && c.clone())),
                4 === o.length && (l.push(i.createElement('tr', { key: h }, o)), (o = [])),
                t++,
                h++;
            return l;
          },
          updateSelectedYear: function(t) {
            this.props.updateSelectedDate(t);
          },
          renderYear: function(t, e) {
            return i.createElement('td', t, e);
          },
          alwaysValidDate: function() {
            return 1;
          }
        });
      t.exports = n;
    },
    1257: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r(967),
        s = r(1107),
        a = n({
          getInitialState: function() {
            return this.calculateState(this.props);
          },
          calculateState: function(t) {
            var e = t.selectedDate || t.viewDate,
              r = t.timeFormat,
              i = [];
            -1 !== r.toLowerCase().indexOf('h') &&
              (i.push('hours'),
              -1 !== r.indexOf('m') && (i.push('minutes'), -1 !== r.indexOf('s') && i.push('seconds')));
            var n = e.format('H'),
              s = !1;
            return (
              null !== this.state &&
                -1 !== this.props.timeFormat.toLowerCase().indexOf(' a') &&
                (s = -1 !== this.props.timeFormat.indexOf(' A') ? (n >= 12 ? 'PM' : 'AM') : n >= 12 ? 'pm' : 'am'),
              {
                hours: n,
                minutes: e.format('mm'),
                seconds: e.format('ss'),
                milliseconds: e.format('SSS'),
                daypart: s,
                counters: i
              }
            );
          },
          renderCounter: function(t) {
            if ('daypart' !== t) {
              var e = this.state[t];
              return (
                'hours' === t &&
                  -1 !== this.props.timeFormat.toLowerCase().indexOf(' a') &&
                  0 === (e = ((e - 1) % 12) + 1) &&
                  (e = 12),
                i.createElement('div', { key: t, className: 'rdtCounter' }, [
                  i.createElement(
                    'span',
                    {
                      key: 'up',
                      className: 'rdtBtn',
                      onMouseDown: this.onStartClicking('increase', t),
                      onContextMenu: this.disableContextMenu
                    },
                    '\u25b2'
                  ),
                  i.createElement('div', { key: 'c', className: 'rdtCount' }, e),
                  i.createElement(
                    'span',
                    {
                      key: 'do',
                      className: 'rdtBtn',
                      onMouseDown: this.onStartClicking('decrease', t),
                      onContextMenu: this.disableContextMenu
                    },
                    '\u25bc'
                  )
                ])
              );
            }
            return '';
          },
          renderDayPart: function() {
            return i.createElement('div', { key: 'dayPart', className: 'rdtCounter' }, [
              i.createElement(
                'span',
                {
                  key: 'up',
                  className: 'rdtBtn',
                  onMouseDown: this.onStartClicking('toggleDayPart', 'hours'),
                  onContextMenu: this.disableContextMenu
                },
                '\u25b2'
              ),
              i.createElement('div', { key: this.state.daypart, className: 'rdtCount' }, this.state.daypart),
              i.createElement(
                'span',
                {
                  key: 'do',
                  className: 'rdtBtn',
                  onMouseDown: this.onStartClicking('toggleDayPart', 'hours'),
                  onContextMenu: this.disableContextMenu
                },
                '\u25bc'
              )
            ]);
          },
          render: function() {
            var t = this,
              e = [];
            return (
              this.state.counters.forEach(function(r) {
                e.length &&
                  e.push(i.createElement('div', { key: 'sep' + e.length, className: 'rdtCounterSeparator' }, ':')),
                  e.push(t.renderCounter(r));
              }),
              !1 !== this.state.daypart && e.push(t.renderDayPart()),
              3 === this.state.counters.length &&
                -1 !== this.props.timeFormat.indexOf('S') &&
                (e.push(i.createElement('div', { className: 'rdtCounterSeparator', key: 'sep5' }, ':')),
                e.push(
                  i.createElement(
                    'div',
                    { className: 'rdtCounter rdtMilli', key: 'm' },
                    i.createElement('input', {
                      value: this.state.milliseconds,
                      type: 'text',
                      onChange: this.updateMilli
                    })
                  )
                )),
              i.createElement(
                'div',
                { className: 'rdtTime' },
                i.createElement('table', {}, [
                  this.renderHeader(),
                  i.createElement(
                    'tbody',
                    { key: 'b' },
                    i.createElement(
                      'tr',
                      {},
                      i.createElement('td', {}, i.createElement('div', { className: 'rdtCounters' }, e))
                    )
                  )
                ])
              )
            );
          },
          componentWillMount: function() {
            var t = this;
            (t.timeConstraints = {
              hours: { min: 0, max: 23, step: 1 },
              minutes: { min: 0, max: 59, step: 1 },
              seconds: { min: 0, max: 59, step: 1 },
              milliseconds: { min: 0, max: 999, step: 1 }
            }),
              ['hours', 'minutes', 'seconds', 'milliseconds'].forEach(function(e) {
                s(t.timeConstraints[e], t.props.timeConstraints[e]);
              }),
              this.setState(this.calculateState(this.props));
          },
          componentWillReceiveProps: function(t) {
            this.setState(this.calculateState(t));
          },
          updateMilli: function(t) {
            var e = parseInt(t.target.value, 10);
            e === t.target.value &&
              e >= 0 &&
              e < 1e3 &&
              (this.props.setTime('milliseconds', e), this.setState({ milliseconds: e }));
          },
          renderHeader: function() {
            if (!this.props.dateFormat) return null;
            var t = this.props.selectedDate || this.props.viewDate;
            return i.createElement(
              'thead',
              { key: 'h' },
              i.createElement(
                'tr',
                {},
                i.createElement(
                  'th',
                  { className: 'rdtSwitch', colSpan: 4, onClick: this.props.showView('days') },
                  t.format(this.props.dateFormat)
                )
              )
            );
          },
          onStartClicking: function(t, e) {
            var r = this;
            return function() {
              var i = {};
              (i[e] = r[t](e)),
                r.setState(i),
                (r.timer = setTimeout(function() {
                  r.increaseTimer = setInterval(function() {
                    (i[e] = r[t](e)), r.setState(i);
                  }, 70);
                }, 500)),
                (r.mouseUpListener = function() {
                  clearTimeout(r.timer),
                    clearInterval(r.increaseTimer),
                    r.props.setTime(e, r.state[e]),
                    document.body.removeEventListener('mouseup', r.mouseUpListener),
                    document.body.removeEventListener('touchend', r.mouseUpListener);
                }),
                document.body.addEventListener('mouseup', r.mouseUpListener),
                document.body.addEventListener('touchend', r.mouseUpListener);
            };
          },
          disableContextMenu: function(t) {
            return t.preventDefault(), !1;
          },
          padValues: { hours: 1, minutes: 2, seconds: 2, milliseconds: 3 },
          toggleDayPart: function(t) {
            var e = parseInt(this.state[t], 10) + 12;
            return (
              e > this.timeConstraints[t].max &&
                (e = this.timeConstraints[t].min + (e - (this.timeConstraints[t].max + 1))),
              this.pad(t, e)
            );
          },
          increase: function(t) {
            var e = parseInt(this.state[t], 10) + this.timeConstraints[t].step;
            return (
              e > this.timeConstraints[t].max &&
                (e = this.timeConstraints[t].min + (e - (this.timeConstraints[t].max + 1))),
              this.pad(t, e)
            );
          },
          decrease: function(t) {
            var e = parseInt(this.state[t], 10) - this.timeConstraints[t].step;
            return (
              e < this.timeConstraints[t].min &&
                (e = this.timeConstraints[t].max + 1 - (this.timeConstraints[t].min - e)),
              this.pad(t, e)
            );
          },
          pad: function(t, e) {
            for (var r = e + ''; r.length < this.padValues[t]; ) r = '0' + r;
            return r;
          }
        });
      t.exports = a;
    },
    1258: function(t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, 'IGNORE_CLASS_NAME', function() {
          return u;
        });
      var i = r(0),
        n = r(64);
      function s(t, e, r) {
        return (
          t === e || (t.correspondingElement ? t.correspondingElement.classList.contains(r) : t.classList.contains(r))
        );
      }
      var a = function() {
        if ('undefined' !== typeof window && 'function' === typeof window.addEventListener) {
          var t = !1,
            e = Object.defineProperty({}, 'passive', {
              get: function() {
                t = !0;
              }
            }),
            r = function() {};
          return (
            window.addEventListener('testPassiveEventSupport', r, e),
            window.removeEventListener('testPassiveEventSupport', r, e),
            t
          );
        }
      };
      var o,
        h,
        l = (void 0 === o && (o = 0),
        function() {
          return ++o;
        }),
        p = {},
        c = {},
        f = ['touchstart', 'touchmove'],
        u = 'ignore-react-onclickoutside';
      function m(t, e) {
        var r = null;
        return -1 !== f.indexOf(e) && h && (r = { passive: !t.props.preventDefault }), r;
      }
      e.default = function(t, e) {
        var r,
          o,
          f = t.displayName || t.name || 'Component';
        return (
          (o = r = (function(r) {
            var o, u;
            function d(t) {
              var e;
              return (
                ((e = r.call(this, t) || this).__outsideClickHandler = function(t) {
                  if ('function' !== typeof e.__clickOutsideHandlerProp) {
                    var r = e.getInstance();
                    if ('function' !== typeof r.props.handleClickOutside) {
                      if ('function' !== typeof r.handleClickOutside)
                        throw new Error(
                          'WrappedComponent: ' +
                            f +
                            ' lacks a handleClickOutside(event) function for processing outside click events.'
                        );
                      r.handleClickOutside(t);
                    } else r.props.handleClickOutside(t);
                  } else e.__clickOutsideHandlerProp(t);
                }),
                (e.enableOnClickOutside = function() {
                  if ('undefined' !== typeof document && !c[e._uid]) {
                    'undefined' === typeof h && (h = a()), (c[e._uid] = !0);
                    var t = e.props.eventTypes;
                    t.forEach || (t = [t]),
                      (p[e._uid] = function(t) {
                        var r;
                        null !== e.componentNode &&
                          (e.props.preventDefault && t.preventDefault(),
                          e.props.stopPropagation && t.stopPropagation(),
                          (e.props.excludeScrollbar &&
                            ((r = t),
                            document.documentElement.clientWidth <= r.clientX ||
                              document.documentElement.clientHeight <= r.clientY)) ||
                            ((function(t, e, r) {
                              if (t === e) return !0;
                              for (; t.parentNode; ) {
                                if (s(t, e, r)) return !0;
                                t = t.parentNode;
                              }
                              return t;
                            })(t.target, e.componentNode, e.props.outsideClickIgnoreClass) === document &&
                              e.__outsideClickHandler(t)));
                      }),
                      t.forEach(function(t) {
                        document.addEventListener(t, p[e._uid], m(e, t));
                      });
                  }
                }),
                (e.disableOnClickOutside = function() {
                  delete c[e._uid];
                  var t = p[e._uid];
                  if (t && 'undefined' !== typeof document) {
                    var r = e.props.eventTypes;
                    r.forEach || (r = [r]),
                      r.forEach(function(r) {
                        return document.removeEventListener(r, t, m(e, r));
                      }),
                      delete p[e._uid];
                  }
                }),
                (e.getRef = function(t) {
                  return (e.instanceRef = t);
                }),
                (e._uid = l()),
                e
              );
            }
            (u = r), ((o = d).prototype = Object.create(u.prototype)), (o.prototype.constructor = o), (o.__proto__ = u);
            var y = d.prototype;
            return (
              (y.getInstance = function() {
                if (!t.prototype.isReactComponent) return this;
                var e = this.instanceRef;
                return e.getInstance ? e.getInstance() : e;
              }),
              (y.componentDidMount = function() {
                if ('undefined' !== typeof document && document.createElement) {
                  var t = this.getInstance();
                  if (
                    e &&
                    'function' === typeof e.handleClickOutside &&
                    ((this.__clickOutsideHandlerProp = e.handleClickOutside(t)),
                    'function' !== typeof this.__clickOutsideHandlerProp)
                  )
                    throw new Error(
                      'WrappedComponent: ' +
                        f +
                        ' lacks a function for processing outside click events specified by the handleClickOutside config option.'
                    );
                  (this.componentNode = Object(n.findDOMNode)(this.getInstance())),
                    this.props.disableOnClickOutside || this.enableOnClickOutside();
                }
              }),
              (y.componentDidUpdate = function() {
                this.componentNode = Object(n.findDOMNode)(this.getInstance());
              }),
              (y.componentWillUnmount = function() {
                this.disableOnClickOutside();
              }),
              (y.render = function() {
                var e = this.props,
                  r = (e.excludeScrollbar,
                  (function(t, e) {
                    if (null == t) return {};
                    var r,
                      i,
                      n = {},
                      s = Object.keys(t);
                    for (i = 0; i < s.length; i++) (r = s[i]), e.indexOf(r) >= 0 || (n[r] = t[r]);
                    if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(t);
                      for (i = 0; i < a.length; i++)
                        (r = a[i]),
                          e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]));
                    }
                    return n;
                  })(e, ['excludeScrollbar']));
                return (
                  t.prototype.isReactComponent ? (r.ref = this.getRef) : (r.wrappedRef = this.getRef),
                  (r.disableOnClickOutside = this.disableOnClickOutside),
                  (r.enableOnClickOutside = this.enableOnClickOutside),
                  Object(i.createElement)(t, r)
                );
              }),
              d
            );
          })(i.Component)),
          (r.displayName = 'OnClickOutside(' + f + ')'),
          (r.defaultProps = {
            eventTypes: ['mousedown', 'touchstart'],
            excludeScrollbar: (e && e.excludeScrollbar) || !1,
            outsideClickIgnoreClass: u,
            preventDefault: !1,
            stopPropagation: !1
          }),
          (r.getClass = function() {
            return t.getClass ? t.getClass() : t;
          }),
          o
        );
      };
    },
    1259: function(t, e) {
      t.exports = (function(t) {
        function e(i) {
          if (r[i]) return r[i].exports;
          var n = (r[i] = { i: i, l: !1, exports: {} });
          return t[i].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
        }
        var r = {};
        return (
          (e.m = t),
          (e.c = r),
          (e.d = function(t, r, i) {
            e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: i });
          }),
          (e.n = function(t) {
            var r =
              t && t.__esModule
                ? function() {
                    return t.default;
                  }
                : function() {
                    return t;
                  };
            return e.d(r, 'a', r), r;
          }),
          (e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.p = ''),
          e((e.s = 0))
        );
      })([
        function(t, e, r) {
          'use strict';
          (e.__esModule = !0),
            (e.default = function(t, e) {
              if (t && e) {
                var r = Array.isArray(e) ? e : e.split(','),
                  i = t.name || '',
                  n = t.type || '',
                  s = n.replace(/\/.*$/, '');
                return r.some(function(t) {
                  var e = t.trim();
                  return '.' === e.charAt(0)
                    ? i.toLowerCase().endsWith(e.toLowerCase())
                    : e.endsWith('/*')
                    ? s === e.replace(/\/.*$/, '')
                    : n === e;
                });
              }
              return !0;
            });
        }
      ]);
    },
    1260: function(t, e, r) {
      'use strict';
      e.__esModule = !0;
      var i,
        n = r(1261),
        s = (i = n) && i.__esModule ? i : { default: i };
      e.default =
        s.default ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        };
    },
    1261: function(t, e, r) {
      t.exports = { default: r(1262), __esModule: !0 };
    },
    1262: function(t, e, r) {
      r(1263), (t.exports = r(965).Object.assign);
    },
    1263: function(t, e, r) {
      var i = r(973);
      i(i.S + i.F, 'Object', { assign: r(1265) });
    },
    1264: function(t, e) {
      t.exports = function(t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      };
    },
    1265: function(t, e, r) {
      'use strict';
      var i = r(969),
        n = r(1007),
        s = r(1041),
        a = r(1010),
        o = r(1011),
        h = r(1112),
        l = Object.assign;
      t.exports =
        !l ||
        r(981)(function() {
          var t = {},
            e = {},
            r = Symbol(),
            i = 'abcdefghijklmnopqrst';
          return (
            (t[r] = 7),
            i.split('').forEach(function(t) {
              e[t] = t;
            }),
            7 != l({}, t)[r] || Object.keys(l({}, e)).join('') != i
          );
        })
          ? function(t, e) {
              for (var r = o(t), l = arguments.length, p = 1, c = s.f, f = a.f; l > p; )
                for (var u, m = h(arguments[p++]), d = c ? n(m).concat(c(m)) : n(m), y = d.length, g = 0; y > g; )
                  (u = d[g++]), (i && !f.call(m, u)) || (r[u] = m[u]);
              return r;
            }
          : l;
    },
    1266: function(t, e, r) {
      var i = r(982),
        n = r(1267),
        s = r(1268);
      t.exports = function(t) {
        return function(e, r, a) {
          var o,
            h = i(e),
            l = n(h.length),
            p = s(a, l);
          if (t && r != r) {
            for (; l > p; ) if ((o = h[p++]) != o) return !0;
          } else for (; l > p; p++) if ((t || p in h) && h[p] === r) return t || p || 0;
          return !t && -1;
        };
      };
    },
    1267: function(t, e, r) {
      var i = r(1037),
        n = Math.min;
      t.exports = function(t) {
        return t > 0 ? n(i(t), 9007199254740991) : 0;
      };
    },
    1268: function(t, e, r) {
      var i = r(1037),
        n = Math.max,
        s = Math.min;
      t.exports = function(t, e) {
        return (t = i(t)) < 0 ? n(t + e, 0) : s(t, e);
      };
    },
    1269: function(t, e, r) {
      t.exports = { default: r(1270), __esModule: !0 };
    },
    1270: function(t, e, r) {
      r(1271), (t.exports = r(965).Object.getPrototypeOf);
    },
    1271: function(t, e, r) {
      var i = r(1011),
        n = r(1114);
      r(1272)('getPrototypeOf', function() {
        return function(t) {
          return n(i(t));
        };
      });
    },
    1272: function(t, e, r) {
      var i = r(973),
        n = r(965),
        s = r(981);
      t.exports = function(t, e) {
        var r = (n.Object || {})[t] || Object[t],
          a = {};
        (a[t] = e(r)),
          i(
            i.S +
              i.F *
                s(function() {
                  r(1);
                }),
            'Object',
            a
          );
      };
    },
    1273: function(t, e, r) {
      'use strict';
      (e.__esModule = !0),
        (e.default = function(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        });
    },
    1274: function(t, e, r) {
      'use strict';
      e.__esModule = !0;
      var i,
        n = r(1275),
        s = (i = n) && i.__esModule ? i : { default: i };
      e.default = (function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              (0, s.default)(t, i.key, i);
          }
        }
        return function(e, r, i) {
          return r && t(e.prototype, r), i && t(e, i), e;
        };
      })();
    },
    1275: function(t, e, r) {
      t.exports = { default: r(1276), __esModule: !0 };
    },
    1276: function(t, e, r) {
      r(1277);
      var i = r(965).Object;
      t.exports = function(t, e, r) {
        return i.defineProperty(t, e, r);
      };
    },
    1277: function(t, e, r) {
      var i = r(973);
      i(i.S + i.F * !r(969), 'Object', { defineProperty: r(974).f });
    },
    1278: function(t, e, r) {
      'use strict';
      e.__esModule = !0;
      var i,
        n = r(1115),
        s = (i = n) && i.__esModule ? i : { default: i };
      e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e ||
          ('object' !== ('undefined' === typeof e ? 'undefined' : (0, s.default)(e)) && 'function' !== typeof e)
          ? t
          : e;
      };
    },
    1279: function(t, e, r) {
      t.exports = { default: r(1280), __esModule: !0 };
    },
    1280: function(t, e, r) {
      r(1281), r(1286), (t.exports = r(1045).f('iterator'));
    },
    1281: function(t, e, r) {
      'use strict';
      var i = r(1282)(!0);
      r(1116)(
        String,
        'String',
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            e = this._t,
            r = this._i;
          return r >= e.length
            ? { value: void 0, done: !0 }
            : ((t = i(e, r)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    1282: function(t, e, r) {
      var i = r(1037),
        n = r(1036);
      t.exports = function(t) {
        return function(e, r) {
          var s,
            a,
            o = String(n(e)),
            h = i(r),
            l = o.length;
          return h < 0 || h >= l
            ? t
              ? ''
              : void 0
            : (s = o.charCodeAt(h)) < 55296 ||
              s > 56319 ||
              h + 1 === l ||
              (a = o.charCodeAt(h + 1)) < 56320 ||
              a > 57343
            ? t
              ? o.charAt(h)
              : s
            : t
            ? o.slice(h, h + 2)
            : a - 56320 + ((s - 55296) << 10) + 65536;
        };
      };
    },
    1283: function(t, e, r) {
      'use strict';
      var i = r(1043),
        n = r(1006),
        s = r(1044),
        a = {};
      r(979)(a, r(983)('iterator'), function() {
        return this;
      }),
        (t.exports = function(t, e, r) {
          (t.prototype = i(a, { next: n(1, r) })), s(t, e + ' Iterator');
        });
    },
    1284: function(t, e, r) {
      var i = r(974),
        n = r(995),
        s = r(1007);
      t.exports = r(969)
        ? Object.defineProperties
        : function(t, e) {
            n(t);
            for (var r, a = s(e), o = a.length, h = 0; o > h; ) i.f(t, (r = a[h++]), e[r]);
            return t;
          };
    },
    1285: function(t, e, r) {
      var i = r(968).document;
      t.exports = i && i.documentElement;
    },
    1286: function(t, e, r) {
      r(1287);
      for (
        var i = r(968),
          n = r(979),
          s = r(1042),
          a = r(983)('toStringTag'),
          o = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ','
          ),
          h = 0;
        h < o.length;
        h++
      ) {
        var l = o[h],
          p = i[l],
          c = p && p.prototype;
        c && !c[a] && n(c, a, l), (s[l] = s.Array);
      }
    },
    1287: function(t, e, r) {
      'use strict';
      var i = r(1288),
        n = r(1289),
        s = r(1042),
        a = r(982);
      (t.exports = r(1116)(
        Array,
        'Array',
        function(t, e) {
          (this._t = a(t)), (this._i = 0), (this._k = e);
        },
        function() {
          var t = this._t,
            e = this._k,
            r = this._i++;
          return !t || r >= t.length
            ? ((this._t = void 0), n(1))
            : n(0, 'keys' == e ? r : 'values' == e ? t[r] : [r, t[r]]);
        },
        'values'
      )),
        (s.Arguments = s.Array),
        i('keys'),
        i('values'),
        i('entries');
    },
    1288: function(t, e) {
      t.exports = function() {};
    },
    1289: function(t, e) {
      t.exports = function(t, e) {
        return { value: e, done: !!t };
      };
    },
    1290: function(t, e, r) {
      t.exports = { default: r(1291), __esModule: !0 };
    },
    1291: function(t, e, r) {
      r(1292), r(1297), r(1298), r(1299), (t.exports = r(965).Symbol);
    },
    1292: function(t, e, r) {
      'use strict';
      var i = r(968),
        n = r(975),
        s = r(969),
        a = r(973),
        o = r(1117),
        h = r(1293).KEY,
        l = r(981),
        p = r(1039),
        c = r(1044),
        f = r(1009),
        u = r(983),
        m = r(1045),
        d = r(1046),
        y = r(1294),
        g = r(1295),
        v = r(995),
        b = r(980),
        E = r(1011),
        x = r(982),
        S = r(1035),
        P = r(1006),
        _ = r(1043),
        C = r(1296),
        D = r(1119),
        k = r(1041),
        A = r(974),
        w = r(1007),
        T = D.f,
        M = A.f,
        F = C.f,
        I = i.Symbol,
        O = i.JSON,
        V = O && O.stringify,
        R = u('_hidden'),
        B = u('toPrimitive'),
        N = {}.propertyIsEnumerable,
        L = p('symbol-registry'),
        j = p('symbols'),
        G = p('op-symbols'),
        z = Object.prototype,
        H = 'function' == typeof I && !!k.f,
        q = i.QObject,
        W = !q || !q.prototype || !q.prototype.findChild,
        Y =
          s &&
          l(function() {
            return (
              7 !=
              _(
                M({}, 'a', {
                  get: function() {
                    return M(this, 'a', { value: 7 }).a;
                  }
                })
              ).a
            );
          })
            ? function(t, e, r) {
                var i = T(z, e);
                i && delete z[e], M(t, e, r), i && t !== z && M(z, e, i);
              }
            : M,
        U = function(t) {
          var e = (j[t] = _(I.prototype));
          return (e._k = t), e;
        },
        K =
          H && 'symbol' == typeof I.iterator
            ? function(t) {
                return 'symbol' == typeof t;
              }
            : function(t) {
                return t instanceof I;
              },
        X = function(t, e, r) {
          return (
            t === z && X(G, e, r),
            v(t),
            (e = S(e, !0)),
            v(r),
            n(j, e)
              ? (r.enumerable
                  ? (n(t, R) && t[R][e] && (t[R][e] = !1), (r = _(r, { enumerable: P(0, !1) })))
                  : (n(t, R) || M(t, R, P(1, {})), (t[R][e] = !0)),
                Y(t, e, r))
              : M(t, e, r)
          );
        },
        Z = function(t, e) {
          v(t);
          for (var r, i = y((e = x(e))), n = 0, s = i.length; s > n; ) X(t, (r = i[n++]), e[r]);
          return t;
        },
        $ = function(t) {
          var e = N.call(this, (t = S(t, !0)));
          return (
            !(this === z && n(j, t) && !n(G, t)) && (!(e || !n(this, t) || !n(j, t) || (n(this, R) && this[R][t])) || e)
          );
        },
        J = function(t, e) {
          if (((t = x(t)), (e = S(e, !0)), t !== z || !n(j, e) || n(G, e))) {
            var r = T(t, e);
            return !r || !n(j, e) || (n(t, R) && t[R][e]) || (r.enumerable = !0), r;
          }
        },
        Q = function(t) {
          for (var e, r = F(x(t)), i = [], s = 0; r.length > s; ) n(j, (e = r[s++])) || e == R || e == h || i.push(e);
          return i;
        },
        tt = function(t) {
          for (var e, r = t === z, i = F(r ? G : x(t)), s = [], a = 0; i.length > a; )
            !n(j, (e = i[a++])) || (r && !n(z, e)) || s.push(j[e]);
          return s;
        };
      H ||
        (o(
          (I = function() {
            if (this instanceof I) throw TypeError('Symbol is not a constructor!');
            var t = f(arguments.length > 0 ? arguments[0] : void 0),
              e = function e(r) {
                this === z && e.call(G, r), n(this, R) && n(this[R], t) && (this[R][t] = !1), Y(this, t, P(1, r));
              };
            return s && W && Y(z, t, { configurable: !0, set: e }), U(t);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (D.f = J),
        (A.f = X),
        (r(1118).f = C.f = Q),
        (r(1010).f = $),
        (k.f = tt),
        s && !r(1008) && o(z, 'propertyIsEnumerable', $, !0),
        (m.f = function(t) {
          return U(u(t));
        })),
        a(a.G + a.W + a.F * !H, { Symbol: I });
      for (
        var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          rt = 0;
        et.length > rt;

      )
        u(et[rt++]);
      for (var it = w(u.store), nt = 0; it.length > nt; ) d(it[nt++]);
      a(a.S + a.F * !H, 'Symbol', {
        for: function(t) {
          return n(L, (t += '')) ? L[t] : (L[t] = I(t));
        },
        keyFor: function(t) {
          if (!K(t)) throw TypeError(t + ' is not a symbol!');
          for (var e in L) if (L[e] === t) return e;
        },
        useSetter: function() {
          W = !0;
        },
        useSimple: function() {
          W = !1;
        }
      }),
        a(a.S + a.F * !H, 'Object', {
          create: function(t, e) {
            return void 0 === e ? _(t) : Z(_(t), e);
          },
          defineProperty: X,
          defineProperties: Z,
          getOwnPropertyDescriptor: J,
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: tt
        });
      var st = l(function() {
        k.f(1);
      });
      a(a.S + a.F * st, 'Object', {
        getOwnPropertySymbols: function(t) {
          return k.f(E(t));
        }
      }),
        O &&
          a(
            a.S +
              a.F *
                (!H ||
                  l(function() {
                    var t = I();
                    return '[null]' != V([t]) || '{}' != V({ a: t }) || '{}' != V(Object(t));
                  })),
            'JSON',
            {
              stringify: function(t) {
                for (var e, r, i = [t], n = 1; arguments.length > n; ) i.push(arguments[n++]);
                if (((r = e = i[1]), (b(e) || void 0 !== t) && !K(t)))
                  return (
                    g(e) ||
                      (e = function(t, e) {
                        if (('function' == typeof r && (e = r.call(this, t, e)), !K(e))) return e;
                      }),
                    (i[1] = e),
                    V.apply(O, i)
                  );
              }
            }
          ),
        I.prototype[B] || r(979)(I.prototype, B, I.prototype.valueOf),
        c(I, 'Symbol'),
        c(Math, 'Math', !0),
        c(i.JSON, 'JSON', !0);
    },
    1293: function(t, e, r) {
      var i = r(1009)('meta'),
        n = r(980),
        s = r(975),
        a = r(974).f,
        o = 0,
        h =
          Object.isExtensible ||
          function() {
            return !0;
          },
        l = !r(981)(function() {
          return h(Object.preventExtensions({}));
        }),
        p = function(t) {
          a(t, i, { value: { i: 'O' + ++o, w: {} } });
        },
        c = (t.exports = {
          KEY: i,
          NEED: !1,
          fastKey: function(t, e) {
            if (!n(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
            if (!s(t, i)) {
              if (!h(t)) return 'F';
              if (!e) return 'E';
              p(t);
            }
            return t[i].i;
          },
          getWeak: function(t, e) {
            if (!s(t, i)) {
              if (!h(t)) return !0;
              if (!e) return !1;
              p(t);
            }
            return t[i].w;
          },
          onFreeze: function(t) {
            return l && c.NEED && h(t) && !s(t, i) && p(t), t;
          }
        });
    },
    1294: function(t, e, r) {
      var i = r(1007),
        n = r(1041),
        s = r(1010);
      t.exports = function(t) {
        var e = i(t),
          r = n.f;
        if (r) for (var a, o = r(t), h = s.f, l = 0; o.length > l; ) h.call(t, (a = o[l++])) && e.push(a);
        return e;
      };
    },
    1295: function(t, e, r) {
      var i = r(1113);
      t.exports =
        Array.isArray ||
        function(t) {
          return 'Array' == i(t);
        };
    },
    1296: function(t, e, r) {
      var i = r(982),
        n = r(1118).f,
        s = {}.toString,
        a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function(t) {
        return a && '[object Window]' == s.call(t)
          ? (function(t) {
              try {
                return n(t);
              } catch (e) {
                return a.slice();
              }
            })(t)
          : n(i(t));
      };
    },
    1297: function(t, e) {},
    1298: function(t, e, r) {
      r(1046)('asyncIterator');
    },
    1299: function(t, e, r) {
      r(1046)('observable');
    },
    1300: function(t, e, r) {
      'use strict';
      e.__esModule = !0;
      var i = a(r(1301)),
        n = a(r(1305)),
        s = a(r(1115));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = function(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              ('undefined' === typeof e ? 'undefined' : (0, s.default)(e))
          );
        (t.prototype = (0, n.default)(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
        })),
          e && (i.default ? (0, i.default)(t, e) : (t.__proto__ = e));
      };
    },
    1301: function(t, e, r) {
      t.exports = { default: r(1302), __esModule: !0 };
    },
    1302: function(t, e, r) {
      r(1303), (t.exports = r(965).Object.setPrototypeOf);
    },
    1303: function(t, e, r) {
      var i = r(973);
      i(i.S, 'Object', { setPrototypeOf: r(1304).set });
    },
    1304: function(t, e, r) {
      var i = r(980),
        n = r(995),
        s = function(t, e) {
          if ((n(t), !i(e) && null !== e)) throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, e, i) {
                try {
                  (i = r(1108)(Function.call, r(1119).f(Object.prototype, '__proto__').set, 2))(t, []),
                    (e = !(t instanceof Array));
                } catch (n) {
                  e = !0;
                }
                return function(t, r) {
                  return s(t, r), e ? (t.__proto__ = r) : i(t, r), t;
                };
              })({}, !1)
            : void 0),
        check: s
      };
    },
    1305: function(t, e, r) {
      t.exports = { default: r(1306), __esModule: !0 };
    },
    1306: function(t, e, r) {
      r(1307);
      var i = r(965).Object;
      t.exports = function(t, e) {
        return i.create(t, e);
      };
    },
    1307: function(t, e, r) {
      var i = r(973);
      i(i.S, 'Object', { create: r(1043) });
    },
    1308: function(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
      'undefined' !== typeof navigator &&
        ((root = window || {}),
        (factory = function(window) {
          'use strict';
          var svgNS = 'http://www.w3.org/2000/svg',
            locationHref = '',
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            expressionsPlugin,
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bm_rounder = Math.round,
            bm_rnd,
            bm_pow = Math.pow,
            bm_sqrt = Math.sqrt,
            bm_abs = Math.abs,
            bm_floor = Math.floor,
            bm_max = Math.max,
            bm_min = Math.min,
            blitter = 10,
            BMMath = {};
          function ProjectInterface() {
            return {};
          }
          !(function() {
            var t,
              e = [
                'abs',
                'acos',
                'acosh',
                'asin',
                'asinh',
                'atan',
                'atanh',
                'atan2',
                'ceil',
                'cbrt',
                'expm1',
                'clz32',
                'cos',
                'cosh',
                'exp',
                'floor',
                'fround',
                'hypot',
                'imul',
                'log',
                'log1p',
                'log2',
                'log10',
                'max',
                'min',
                'pow',
                'random',
                'round',
                'sign',
                'sin',
                'sinh',
                'sqrt',
                'tan',
                'tanh',
                'trunc',
                'E',
                'LN10',
                'LN2',
                'LOG10E',
                'LOG2E',
                'PI',
                'SQRT1_2',
                'SQRT2'
              ],
              r = e.length;
            for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
          })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function(t) {
              if ('object' === typeof t && t.length) {
                var e,
                  r = createSizedArray(t.length),
                  i = t.length;
                for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                return r;
              }
              return Math.abs(t);
            });
          var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
          function roundValues(t) {
            bm_rnd = t
              ? Math.round
              : function(t) {
                  return t;
                };
          }
          function styleDiv(t) {
            (t.style.position = 'absolute'),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.display = 'block'),
              (t.style.transformOrigin = t.style.webkitTransformOrigin = '0 0'),
              (t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = 'visible'),
              (t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = 'preserve-3d');
          }
          function BMEnterFrameEvent(t, e, r, i) {
            (this.type = t), (this.currentTime = e), (this.totalTime = r), (this.direction = i < 0 ? -1 : 1);
          }
          function BMCompleteEvent(t, e) {
            (this.type = t), (this.direction = e < 0 ? -1 : 1);
          }
          function BMCompleteLoopEvent(t, e, r, i) {
            (this.type = t), (this.currentLoop = r), (this.totalLoops = e), (this.direction = i < 0 ? -1 : 1);
          }
          function BMSegmentStartEvent(t, e, r) {
            (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
          }
          function BMDestroyEvent(t, e) {
            (this.type = t), (this.target = e);
          }
          function BMRenderFrameErrorEvent(t, e) {
            (this.type = 'renderFrameError'), (this.nativeError = t), (this.currentTime = e);
          }
          function BMConfigErrorEvent(t) {
            (this.type = 'configError'), (this.nativeError = t);
          }
          function BMAnimationConfigErrorEvent(t, e) {
            (this.type = t), (this.nativeError = e), (this.currentTime = currentTime);
          }
          roundValues(!1);
          var createElementID = (function() {
            var t = 0;
            return function() {
              return '__lottie_element_' + ++t;
            };
          })();
          function HSVtoRGB(t, e, r) {
            var i, n, s, a, o, h, l, p;
            switch (
              ((h = r * (1 - e)),
              (l = r * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e)),
              (p = r * (1 - (1 - o) * e)),
              a % 6)
            ) {
              case 0:
                (i = r), (n = p), (s = h);
                break;
              case 1:
                (i = l), (n = r), (s = h);
                break;
              case 2:
                (i = h), (n = r), (s = p);
                break;
              case 3:
                (i = h), (n = l), (s = r);
                break;
              case 4:
                (i = p), (n = h), (s = r);
                break;
              case 5:
                (i = r), (n = h), (s = l);
            }
            return [i, n, s];
          }
          function RGBtoHSV(t, e, r) {
            var i,
              n = Math.max(t, e, r),
              s = Math.min(t, e, r),
              a = n - s,
              o = 0 === n ? 0 : a / n,
              h = n / 255;
            switch (n) {
              case s:
                i = 0;
                break;
              case t:
                (i = e - r + a * (e < r ? 6 : 0)), (i /= 6 * a);
                break;
              case e:
                (i = r - t + 2 * a), (i /= 6 * a);
                break;
              case r:
                (i = t - e + 4 * a), (i /= 6 * a);
            }
            return [i, o, h];
          }
          function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (r[1] += e), r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
          }
          function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (r[2] += e), r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
          }
          function addHueToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return (r[0] += e / 360), r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
          }
          var rgbToHex = (function() {
            var t,
              e,
              r = [];
            for (t = 0; t < 256; t += 1) (e = t.toString(16)), (r[t] = 1 == e.length ? '0' + e : e);
            return function(t, e, i) {
              return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), '#' + r[t] + r[e] + r[i];
            };
          })();
          function BaseEvent() {}
          BaseEvent.prototype = {
            triggerEvent: function(t, e) {
              if (this._cbs[t]) for (var r = this._cbs[t].length, i = 0; i < r; i++) this._cbs[t][i](e);
            },
            addEventListener: function(t, e) {
              return (
                this._cbs[t] || (this._cbs[t] = []),
                this._cbs[t].push(e),
                function() {
                  this.removeEventListener(t, e);
                }.bind(this)
              );
            },
            removeEventListener: function(t, e) {
              if (e) {
                if (this._cbs[t]) {
                  for (var r = 0, i = this._cbs[t].length; r < i; )
                    this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), (r -= 1), (i -= 1)), (r += 1);
                  this._cbs[t].length || (this._cbs[t] = null);
                }
              } else this._cbs[t] = null;
            }
          };
          var createTypedArray =
            'function' === typeof Uint8ClampedArray && 'function' === typeof Float32Array
              ? function(t, e) {
                  return 'float32' === t
                    ? new Float32Array(e)
                    : 'int16' === t
                    ? new Int16Array(e)
                    : 'uint8c' === t
                    ? new Uint8ClampedArray(e)
                    : void 0;
                }
              : function(t, e) {
                  var r,
                    i = 0,
                    n = [];
                  switch (t) {
                    case 'int16':
                    case 'uint8c':
                      r = 1;
                      break;
                    default:
                      r = 1.1;
                  }
                  for (i = 0; i < e; i += 1) n.push(r);
                  return n;
                };
          function createSizedArray(t) {
            return Array.apply(null, { length: t });
          }
          function createNS(t) {
            return document.createElementNS(svgNS, t);
          }
          function createTag(t) {
            return document.createElement(t);
          }
          function DynamicPropertyContainer() {}
          DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), (this._isAnimated = !0));
            },
            iterateDynamicProperties: function() {
              this._mdf = !1;
              var t,
                e = this.dynamicProperties.length;
              for (t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function(t) {
              (this.container = t), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
            }
          };
          var getBlendMode = (function() {
              var t = {
                0: 'source-over',
                1: 'multiply',
                2: 'screen',
                3: 'overlay',
                4: 'darken',
                5: 'lighten',
                6: 'color-dodge',
                7: 'color-burn',
                8: 'hard-light',
                9: 'soft-light',
                10: 'difference',
                11: 'exclusion',
                12: 'hue',
                13: 'saturation',
                14: 'color',
                15: 'luminosity'
              };
              return function(e) {
                return t[e] || '';
              };
            })(),
            Matrix = (function() {
              var t = Math.cos,
                e = Math.sin,
                r = Math.tan,
                i = Math.round;
              function n() {
                return (
                  (this.props[0] = 1),
                  (this.props[1] = 0),
                  (this.props[2] = 0),
                  (this.props[3] = 0),
                  (this.props[4] = 0),
                  (this.props[5] = 1),
                  (this.props[6] = 0),
                  (this.props[7] = 0),
                  (this.props[8] = 0),
                  (this.props[9] = 0),
                  (this.props[10] = 1),
                  (this.props[11] = 0),
                  (this.props[12] = 0),
                  (this.props[13] = 0),
                  (this.props[14] = 0),
                  (this.props[15] = 1),
                  this
                );
              }
              function s(r) {
                if (0 === r) return this;
                var i = t(r),
                  n = e(r);
                return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function a(r) {
                if (0 === r) return this;
                var i = t(r),
                  n = e(r);
                return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1);
              }
              function o(r) {
                if (0 === r) return this;
                var i = t(r),
                  n = e(r);
                return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1);
              }
              function h(r) {
                if (0 === r) return this;
                var i = t(r),
                  n = e(r);
                return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function l(t, e) {
                return this._t(1, e, t, 1, 0, 0);
              }
              function p(t, e) {
                return this.shear(r(t), r(e));
              }
              function c(i, n) {
                var s = t(n),
                  a = e(n);
                return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                  ._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function f(t, e, r) {
                return (
                  r || 0 === r || (r = 1),
                  1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                );
              }
              function u(t, e, r, i, n, s, a, o, h, l, p, c, f, u, m, d) {
                return (
                  (this.props[0] = t),
                  (this.props[1] = e),
                  (this.props[2] = r),
                  (this.props[3] = i),
                  (this.props[4] = n),
                  (this.props[5] = s),
                  (this.props[6] = a),
                  (this.props[7] = o),
                  (this.props[8] = h),
                  (this.props[9] = l),
                  (this.props[10] = p),
                  (this.props[11] = c),
                  (this.props[12] = f),
                  (this.props[13] = u),
                  (this.props[14] = m),
                  (this.props[15] = d),
                  this
                );
              }
              function m(t, e, r) {
                return (
                  (r = r || 0),
                  0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                );
              }
              function d(t, e, r, i, n, s, a, o, h, l, p, c, f, u, m, d) {
                var y = this.props;
                if (
                  1 === t &&
                  0 === e &&
                  0 === r &&
                  0 === i &&
                  0 === n &&
                  1 === s &&
                  0 === a &&
                  0 === o &&
                  0 === h &&
                  0 === l &&
                  1 === p &&
                  0 === c
                )
                  return (
                    (y[12] = y[12] * t + y[15] * f),
                    (y[13] = y[13] * s + y[15] * u),
                    (y[14] = y[14] * p + y[15] * m),
                    (y[15] = y[15] * d),
                    (this._identityCalculated = !1),
                    this
                  );
                var g = y[0],
                  v = y[1],
                  b = y[2],
                  E = y[3],
                  x = y[4],
                  S = y[5],
                  P = y[6],
                  _ = y[7],
                  C = y[8],
                  D = y[9],
                  k = y[10],
                  A = y[11],
                  w = y[12],
                  T = y[13],
                  M = y[14],
                  F = y[15];
                return (
                  (y[0] = g * t + v * n + b * h + E * f),
                  (y[1] = g * e + v * s + b * l + E * u),
                  (y[2] = g * r + v * a + b * p + E * m),
                  (y[3] = g * i + v * o + b * c + E * d),
                  (y[4] = x * t + S * n + P * h + _ * f),
                  (y[5] = x * e + S * s + P * l + _ * u),
                  (y[6] = x * r + S * a + P * p + _ * m),
                  (y[7] = x * i + S * o + P * c + _ * d),
                  (y[8] = C * t + D * n + k * h + A * f),
                  (y[9] = C * e + D * s + k * l + A * u),
                  (y[10] = C * r + D * a + k * p + A * m),
                  (y[11] = C * i + D * o + k * c + A * d),
                  (y[12] = w * t + T * n + M * h + F * f),
                  (y[13] = w * e + T * s + M * l + F * u),
                  (y[14] = w * r + T * a + M * p + F * m),
                  (y[15] = w * i + T * o + M * c + F * d),
                  (this._identityCalculated = !1),
                  this
                );
              }
              function y() {
                return (
                  this._identityCalculated ||
                    ((this._identity = !(
                      1 !== this.props[0] ||
                      0 !== this.props[1] ||
                      0 !== this.props[2] ||
                      0 !== this.props[3] ||
                      0 !== this.props[4] ||
                      1 !== this.props[5] ||
                      0 !== this.props[6] ||
                      0 !== this.props[7] ||
                      0 !== this.props[8] ||
                      0 !== this.props[9] ||
                      1 !== this.props[10] ||
                      0 !== this.props[11] ||
                      0 !== this.props[12] ||
                      0 !== this.props[13] ||
                      0 !== this.props[14] ||
                      1 !== this.props[15]
                    )),
                    (this._identityCalculated = !0)),
                  this._identity
                );
              }
              function g(t) {
                for (var e = 0; e < 16; ) {
                  if (t.props[e] !== this.props[e]) return !1;
                  e += 1;
                }
                return !0;
              }
              function v(t) {
                var e;
                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              }
              function b(t) {
                var e;
                for (e = 0; e < 16; e += 1) this.props[e] = t[e];
              }
              function E(t, e, r) {
                return {
                  x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                  y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                  z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                };
              }
              function x(t, e, r) {
                return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12];
              }
              function S(t, e, r) {
                return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13];
              }
              function P(t, e, r) {
                return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14];
              }
              function _() {
                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                  e = this.props[5] / t,
                  r = -this.props[1] / t,
                  i = -this.props[4] / t,
                  n = this.props[0] / t,
                  s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                  a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                  o = new Matrix();
                return (
                  (o.props[0] = e),
                  (o.props[1] = r),
                  (o.props[4] = i),
                  (o.props[5] = n),
                  (o.props[12] = s),
                  (o.props[13] = a),
                  o
                );
              }
              function C(t) {
                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
              }
              function D(t) {
                var e,
                  r = t.length,
                  i = [];
                for (e = 0; e < r; e += 1) i[e] = C(t[e]);
                return i;
              }
              function k(t, e, r) {
                var i = createTypedArray('float32', 6);
                if (this.isIdentity())
                  (i[0] = t[0]), (i[1] = t[1]), (i[2] = e[0]), (i[3] = e[1]), (i[4] = r[0]), (i[5] = r[1]);
                else {
                  var n = this.props[0],
                    s = this.props[1],
                    a = this.props[4],
                    o = this.props[5],
                    h = this.props[12],
                    l = this.props[13];
                  (i[0] = t[0] * n + t[1] * a + h),
                    (i[1] = t[0] * s + t[1] * o + l),
                    (i[2] = e[0] * n + e[1] * a + h),
                    (i[3] = e[0] * s + e[1] * o + l),
                    (i[4] = r[0] * n + r[1] * a + h),
                    (i[5] = r[0] * s + r[1] * o + l);
                }
                return i;
              }
              function A(t, e, r) {
                return this.isIdentity()
                  ? [t, e, r]
                  : [
                      t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                      t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                      t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                    ];
              }
              function w(t, e) {
                if (this.isIdentity()) return t + ',' + e;
                var r = this.props;
                return (
                  Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
                  ',' +
                  Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                );
              }
              function T() {
                for (var t = 0, e = this.props, r = 'matrix3d('; t < 16; )
                  (r += i(1e4 * e[t]) / 1e4), (r += 15 === t ? ')' : ','), (t += 1);
                return r;
              }
              function M(t) {
                return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0) ? i(1e4 * t) / 1e4 : t;
              }
              function F() {
                var t = this.props;
                return (
                  'matrix(' +
                  M(t[0]) +
                  ',' +
                  M(t[1]) +
                  ',' +
                  M(t[4]) +
                  ',' +
                  M(t[5]) +
                  ',' +
                  M(t[12]) +
                  ',' +
                  M(t[13]) +
                  ')'
                );
              }
              return function() {
                (this.reset = n),
                  (this.rotate = s),
                  (this.rotateX = a),
                  (this.rotateY = o),
                  (this.rotateZ = h),
                  (this.skew = p),
                  (this.skewFromAxis = c),
                  (this.shear = l),
                  (this.scale = f),
                  (this.setTransform = u),
                  (this.translate = m),
                  (this.transform = d),
                  (this.applyToPoint = E),
                  (this.applyToX = x),
                  (this.applyToY = S),
                  (this.applyToZ = P),
                  (this.applyToPointArray = A),
                  (this.applyToTriplePoints = k),
                  (this.applyToPointStringified = w),
                  (this.toCSS = T),
                  (this.to2dCSS = F),
                  (this.clone = v),
                  (this.cloneFromProps = b),
                  (this.equals = g),
                  (this.inversePoints = D),
                  (this.inversePoint = C),
                  (this.getInverseMatrix = _),
                  (this._t = this.transform),
                  (this.isIdentity = y),
                  (this._identity = !0),
                  (this._identityCalculated = !1),
                  (this.props = createTypedArray('float32', 16)),
                  this.reset();
              };
            })();
          !(function(t, e) {
            var r,
              i = this,
              n = 256,
              s = 6,
              a = 'random',
              o = e.pow(n, s),
              h = e.pow(2, 52),
              l = 2 * h,
              p = n - 1;
            function c(t) {
              var e,
                r = t.length,
                i = this,
                s = 0,
                a = (i.i = i.j = 0),
                o = (i.S = []);
              for (r || (t = [r++]); s < n; ) o[s] = s++;
              for (s = 0; s < n; s++) (o[s] = o[(a = p & (a + t[s % r] + (e = o[s])))]), (o[a] = e);
              i.g = function(t) {
                for (var e, r = 0, s = i.i, a = i.j, o = i.S; t--; )
                  (e = o[(s = p & (s + 1))]), (r = r * n + o[p & ((o[s] = o[(a = p & (a + e))]) + (o[a] = e))]);
                return (i.i = s), (i.j = a), r;
              };
            }
            function f(t, e) {
              return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
            }
            function u(t, e) {
              for (var r, i = t + '', n = 0; n < i.length; ) e[p & n] = p & ((r ^= 19 * e[p & n]) + i.charCodeAt(n++));
              return m(e);
            }
            function m(t) {
              return String.fromCharCode.apply(0, t);
            }
            (e['seed' + a] = function(p, d, y) {
              var g = [],
                v = u(
                  (function t(e, r) {
                    var i,
                      n = [],
                      s = typeof e;
                    if (r && 'object' == s)
                      for (i in e)
                        try {
                          n.push(t(e[i], r - 1));
                        } catch (a) {}
                    return n.length ? n : 'string' == s ? e : e + '\0';
                  })(
                    (d = !0 === d ? { entropy: !0 } : d || {}).entropy
                      ? [p, m(t)]
                      : null === p
                      ? (function() {
                          try {
                            if (r) return m(r.randomBytes(n));
                            var e = new Uint8Array(n);
                            return (i.crypto || i.msCrypto).getRandomValues(e), m(e);
                          } catch (o) {
                            var s = i.navigator,
                              a = s && s.plugins;
                            return [+new Date(), i, a, i.screen, m(t)];
                          }
                        })()
                      : p,
                    3
                  ),
                  g
                ),
                b = new c(g),
                E = function() {
                  for (var t = b.g(s), e = o, r = 0; t < h; ) (t = (t + r) * n), (e *= n), (r = b.g(1));
                  for (; t >= l; ) (t /= 2), (e /= 2), (r >>>= 1);
                  return (t + r) / e;
                };
              return (
                (E.int32 = function() {
                  return 0 | b.g(4);
                }),
                (E.quick = function() {
                  return b.g(4) / 4294967296;
                }),
                (E.double = E),
                u(m(b.S), t),
                (d.pass ||
                  y ||
                  function(t, r, i, n) {
                    return (
                      n &&
                        (n.S && f(n, b),
                        (t.state = function() {
                          return f(b, {});
                        })),
                      i ? ((e[a] = t), r) : t
                    );
                  })(E, v, 'global' in d ? d.global : this == e, d.state)
              );
            }),
              u(e.random(), t);
          })([], BMMath);
          var BezierFactory = (function() {
            var t = {
                getBezierEasing: function(t, r, i, n, s) {
                  var a = s || ('bez_' + t + '_' + r + '_' + i + '_' + n).replace(/\./g, 'p');
                  if (e[a]) return e[a];
                  var o = new u([t, r, i, n]);
                  return (e[a] = o), o;
                }
              },
              e = {},
              r = 4,
              i = 1e-7,
              n = 10,
              s = 11,
              a = 1 / (s - 1),
              o = 'function' === typeof Float32Array;
            function h(t, e) {
              return 1 - 3 * e + 3 * t;
            }
            function l(t, e) {
              return 3 * e - 6 * t;
            }
            function p(t) {
              return 3 * t;
            }
            function c(t, e, r) {
              return ((h(e, r) * t + l(e, r)) * t + p(e)) * t;
            }
            function f(t, e, r) {
              return 3 * h(e, r) * t * t + 2 * l(e, r) * t + p(e);
            }
            function u(t) {
              (this._p = t),
                (this._mSampleValues = o ? new Float32Array(s) : new Array(s)),
                (this._precomputed = !1),
                (this.get = this.get.bind(this));
            }
            return (
              (u.prototype = {
                get: function(t) {
                  var e = this._p[0],
                    r = this._p[1],
                    i = this._p[2],
                    n = this._p[3];
                  return (
                    this._precomputed || this._precompute(),
                    e === r && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : c(this._getTForX(t), r, n)
                  );
                },
                _precompute: function() {
                  var t = this._p[0],
                    e = this._p[1],
                    r = this._p[2],
                    i = this._p[3];
                  (this._precomputed = !0), (t === e && r === i) || this._calcSampleValues();
                },
                _calcSampleValues: function() {
                  for (var t = this._p[0], e = this._p[2], r = 0; r < s; ++r) this._mSampleValues[r] = c(r * a, t, e);
                },
                _getTForX: function(t) {
                  for (
                    var e = this._p[0], o = this._p[2], h = this._mSampleValues, l = 0, p = 1, u = s - 1;
                    p !== u && h[p] <= t;
                    ++p
                  )
                    l += a;
                  var m = l + ((t - h[--p]) / (h[p + 1] - h[p])) * a,
                    d = f(m, e, o);
                  return d >= 0.001
                    ? (function(t, e, i, n) {
                        for (var s = 0; s < r; ++s) {
                          var a = f(e, i, n);
                          if (0 === a) return e;
                          e -= (c(e, i, n) - t) / a;
                        }
                        return e;
                      })(t, m, e, o)
                    : 0 === d
                    ? m
                    : (function(t, e, r, s, a) {
                        var o,
                          h,
                          l = 0;
                        do {
                          (o = c((h = e + (r - e) / 2), s, a) - t) > 0 ? (r = h) : (e = h);
                        } while (Math.abs(o) > i && ++l < n);
                        return h;
                      })(t, l, l + a, e, o);
                }
              }),
              t
            );
          })();
          function extendPrototype(t, e) {
            var r,
              i,
              n = t.length;
            for (r = 0; r < n; r += 1)
              for (var s in (i = t[r].prototype)) i.hasOwnProperty(s) && (e.prototype[s] = i[s]);
          }
          function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
          }
          function createProxyFunction(t) {
            function e() {}
            return (e.prototype = t), e;
          }
          function bezFunction() {
            function t(t, e, r, i, n, s) {
              var a = t * i + e * n + r * s - n * i - s * t - r * e;
              return a > -0.001 && a < 0.001;
            }
            Math;
            var e = function(t, e, r, i) {
              var n,
                s,
                a,
                o,
                h,
                l,
                p = defaultCurveSegments,
                c = 0,
                f = [],
                u = [],
                m = bezier_length_pool.newElement();
              for (a = r.length, n = 0; n < p; n += 1) {
                for (h = n / (p - 1), l = 0, s = 0; s < a; s += 1)
                  (o =
                    bm_pow(1 - h, 3) * t[s] +
                    3 * bm_pow(1 - h, 2) * h * r[s] +
                    3 * (1 - h) * bm_pow(h, 2) * i[s] +
                    bm_pow(h, 3) * e[s]),
                    (f[s] = o),
                    null !== u[s] && (l += bm_pow(f[s] - u[s], 2)),
                    (u[s] = f[s]);
                l && (c += l = bm_sqrt(l)), (m.percents[n] = h), (m.lengths[n] = c);
              }
              return (m.addedLength = c), m;
            };
            function r(t) {
              (this.segmentLength = 0), (this.points = new Array(t));
            }
            function i(t, e) {
              (this.partialLength = t), (this.point = e);
            }
            var n = (function() {
              var e = {};
              return function(n, s, a, o) {
                var h = (
                  n[0] +
                  '_' +
                  n[1] +
                  '_' +
                  s[0] +
                  '_' +
                  s[1] +
                  '_' +
                  a[0] +
                  '_' +
                  a[1] +
                  '_' +
                  o[0] +
                  '_' +
                  o[1]
                ).replace(/\./g, 'p');
                if (!e[h]) {
                  var l,
                    p,
                    c,
                    f,
                    u,
                    m,
                    d,
                    y = defaultCurveSegments,
                    g = 0,
                    v = null;
                  2 === n.length &&
                    (n[0] != s[0] || n[1] != s[1]) &&
                    t(n[0], n[1], s[0], s[1], n[0] + a[0], n[1] + a[1]) &&
                    t(n[0], n[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) &&
                    (y = 2);
                  var b = new r(y);
                  for (c = a.length, l = 0; l < y; l += 1) {
                    for (d = createSizedArray(c), u = l / (y - 1), m = 0, p = 0; p < c; p += 1)
                      (f =
                        bm_pow(1 - u, 3) * n[p] +
                        3 * bm_pow(1 - u, 2) * u * (n[p] + a[p]) +
                        3 * (1 - u) * bm_pow(u, 2) * (s[p] + o[p]) +
                        bm_pow(u, 3) * s[p]),
                        (d[p] = f),
                        null !== v && (m += bm_pow(d[p] - v[p], 2));
                    (g += m = bm_sqrt(m)), (b.points[l] = new i(m, d)), (v = d);
                  }
                  (b.segmentLength = g), (e[h] = b);
                }
                return e[h];
              };
            })();
            function s(t, e) {
              var r = e.percents,
                i = e.lengths,
                n = r.length,
                s = bm_floor((n - 1) * t),
                a = t * e.addedLength,
                o = 0;
              if (s === n - 1 || 0 === s || a === i[s]) return r[s];
              for (var h = i[s] > a ? -1 : 1, l = !0; l; )
                if (
                  (i[s] <= a && i[s + 1] > a ? ((o = (a - i[s]) / (i[s + 1] - i[s])), (l = !1)) : (s += h),
                  s < 0 || s >= n - 1)
                ) {
                  if (s === n - 1) return r[s];
                  l = !1;
                }
              return r[s] + (r[s + 1] - r[s]) * o;
            }
            var a = createTypedArray('float32', 8);
            return {
              getSegmentsLength: function(t) {
                var r,
                  i = segments_length_pool.newElement(),
                  n = t.c,
                  s = t.v,
                  a = t.o,
                  o = t.i,
                  h = t._length,
                  l = i.lengths,
                  p = 0;
                for (r = 0; r < h - 1; r += 1) (l[r] = e(s[r], s[r + 1], a[r], o[r + 1])), (p += l[r].addedLength);
                return n && h && ((l[r] = e(s[r], s[0], a[r], o[0])), (p += l[r].addedLength)), (i.totalLength = p), i;
              },
              getNewSegment: function(t, e, r, i, n, o, h) {
                var l,
                  p = s((n = n < 0 ? 0 : n > 1 ? 1 : n), h),
                  c = s((o = o > 1 ? 1 : o), h),
                  f = t.length,
                  u = 1 - p,
                  m = 1 - c,
                  d = u * u * u,
                  y = p * u * u * 3,
                  g = p * p * u * 3,
                  v = p * p * p,
                  b = u * u * m,
                  E = p * u * m + u * p * m + u * u * c,
                  x = p * p * m + u * p * c + p * u * c,
                  S = p * p * c,
                  P = u * m * m,
                  _ = p * m * m + u * c * m + u * m * c,
                  C = p * c * m + u * c * c + p * m * c,
                  D = p * c * c,
                  k = m * m * m,
                  A = c * m * m + m * c * m + m * m * c,
                  w = c * c * m + m * c * c + c * m * c,
                  T = c * c * c;
                for (l = 0; l < f; l += 1)
                  (a[4 * l] = Math.round(1e3 * (d * t[l] + y * r[l] + g * i[l] + v * e[l])) / 1e3),
                    (a[4 * l + 1] = Math.round(1e3 * (b * t[l] + E * r[l] + x * i[l] + S * e[l])) / 1e3),
                    (a[4 * l + 2] = Math.round(1e3 * (P * t[l] + _ * r[l] + C * i[l] + D * e[l])) / 1e3),
                    (a[4 * l + 3] = Math.round(1e3 * (k * t[l] + A * r[l] + w * i[l] + T * e[l])) / 1e3);
                return a;
              },
              getPointInSegment: function(t, e, r, i, n, a) {
                var o = s(n, a),
                  h = 1 - o;
                return [
                  Math.round(
                    1e3 *
                      (h * h * h * t[0] +
                        (o * h * h + h * o * h + h * h * o) * r[0] +
                        (o * o * h + h * o * o + o * h * o) * i[0] +
                        o * o * o * e[0])
                  ) / 1e3,
                  Math.round(
                    1e3 *
                      (h * h * h * t[1] +
                        (o * h * h + h * o * h + h * h * o) * r[1] +
                        (o * o * h + h * o * o + o * h * o) * i[1] +
                        o * o * o * e[1])
                  ) / 1e3
                ];
              },
              buildBezierData: n,
              pointOnLine2D: t,
              pointOnLine3D: function(e, r, i, n, s, a, o, h, l) {
                if (0 === i && 0 === a && 0 === l) return t(e, r, n, s, o, h);
                var p,
                  c = Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - r, 2) + Math.pow(a - i, 2)),
                  f = Math.sqrt(Math.pow(o - e, 2) + Math.pow(h - r, 2) + Math.pow(l - i, 2)),
                  u = Math.sqrt(Math.pow(o - n, 2) + Math.pow(h - s, 2) + Math.pow(l - a, 2));
                return (
                  (p = c > f ? (c > u ? c - f - u : u - f - c) : u > f ? u - f - c : f - c - u) > -1e-4 && p < 1e-4
                );
              }
            };
          }
          !(function() {
            for (var t = 0, e = ['ms', 'moz', 'webkit', 'o'], r = 0; r < e.length && !window.requestAnimationFrame; ++r)
              (window.requestAnimationFrame = window[e[r] + 'RequestAnimationFrame']),
                (window.cancelAnimationFrame =
                  window[e[r] + 'CancelAnimationFrame'] || window[e[r] + 'CancelRequestAnimationFrame']);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function(e, r) {
                var i = new Date().getTime(),
                  n = Math.max(0, 16 - (i - t)),
                  s = setTimeout(function() {
                    e(i + n);
                  }, n);
                return (t = i + n), s;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function(t) {
                  clearTimeout(t);
                });
          })();
          var bez = bezFunction();
          function dataFunctionManager() {
            function t(n, s, a) {
              var o,
                h,
                l,
                p,
                c,
                f,
                u,
                m = n.length;
              for (h = 0; h < m; h += 1)
                if ('ks' in (o = n[h]) && !o.completed) {
                  if (((o.completed = !0), o.tt && (n[h - 1].td = o.tt), o.hasMask)) {
                    var d = o.masksProperties;
                    for (p = d.length, l = 0; l < p; l += 1)
                      if (d[l].pt.k.i) i(d[l].pt.k);
                      else
                        for (f = d[l].pt.k.length, c = 0; c < f; c += 1)
                          d[l].pt.k[c].s && i(d[l].pt.k[c].s[0]), d[l].pt.k[c].e && i(d[l].pt.k[c].e[0]);
                  }
                  0 === o.ty
                    ? ((o.layers = e(o.refId, s)), t(o.layers, s, a))
                    : 4 === o.ty
                    ? r(o.shapes)
                    : 5 == o.ty && (0 !== (u = o).t.a.length || 'm' in u.t.p || (u.singleShape = !0));
                }
            }
            function e(t, e) {
              for (var r = 0, i = e.length; r < i; ) {
                if (e[r].id === t)
                  return e[r].layers.__used
                    ? JSON.parse(JSON.stringify(e[r].layers))
                    : ((e[r].layers.__used = !0), e[r].layers);
                r += 1;
              }
            }
            function r(t) {
              var e, n, s;
              for (e = t.length - 1; e >= 0; e -= 1)
                if ('sh' == t[e].ty)
                  if (t[e].ks.k.i) i(t[e].ks.k);
                  else
                    for (s = t[e].ks.k.length, n = 0; n < s; n += 1)
                      t[e].ks.k[n].s && i(t[e].ks.k[n].s[0]), t[e].ks.k[n].e && i(t[e].ks.k[n].e[0]);
                else 'gr' == t[e].ty && r(t[e].it);
            }
            function i(t) {
              var e,
                r = t.i.length;
              for (e = 0; e < r; e += 1)
                (t.i[e][0] += t.v[e][0]), (t.i[e][1] += t.v[e][1]), (t.o[e][0] += t.v[e][0]), (t.o[e][1] += t.v[e][1]);
            }
            function n(t, e) {
              var r = e ? e.split('.') : [100, 100, 100];
              return (
                t[0] > r[0] ||
                (!(r[0] > t[0]) && (t[1] > r[1] || (!(r[1] > t[1]) && (t[2] > r[2] || (!(r[2] > t[2]) && void 0)))))
              );
            }
            var s = (function() {
                var t = [4, 4, 14];
                function e(t) {
                  var e = t.t.d;
                  t.t.d = { k: [{ s: e, t: 0 }] };
                }
                function r(t) {
                  var r,
                    i = t.length;
                  for (r = 0; r < i; r += 1) 5 === t[r].ty && e(t[r]);
                }
                return function(e) {
                  if (n(t, e.v) && (r(e.layers), e.assets)) {
                    var i,
                      s = e.assets.length;
                    for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers);
                  }
                };
              })(),
              a = (function() {
                var t = [4, 7, 99];
                return function(e) {
                  if (e.chars && !n(t, e.v)) {
                    var r,
                      s,
                      a,
                      o,
                      h,
                      l = e.chars.length;
                    for (r = 0; r < l; r += 1)
                      if (e.chars[r].data && e.chars[r].data.shapes)
                        for (a = (h = e.chars[r].data.shapes[0].it).length, s = 0; s < a; s += 1)
                          (o = h[s].ks.k).__converted || (i(h[s].ks.k), (o.__converted = !0));
                  }
                };
              })(),
              o = (function() {
                var t = [4, 1, 9];
                function e(t) {
                  var r,
                    i,
                    n,
                    s = t.length;
                  for (r = 0; r < s; r += 1)
                    if ('gr' === t[r].ty) e(t[r].it);
                    else if ('fl' === t[r].ty || 'st' === t[r].ty)
                      if (t[r].c.k && t[r].c.k[0].i)
                        for (n = t[r].c.k.length, i = 0; i < n; i += 1)
                          t[r].c.k[i].s &&
                            ((t[r].c.k[i].s[0] /= 255),
                            (t[r].c.k[i].s[1] /= 255),
                            (t[r].c.k[i].s[2] /= 255),
                            (t[r].c.k[i].s[3] /= 255)),
                            t[r].c.k[i].e &&
                              ((t[r].c.k[i].e[0] /= 255),
                              (t[r].c.k[i].e[1] /= 255),
                              (t[r].c.k[i].e[2] /= 255),
                              (t[r].c.k[i].e[3] /= 255));
                      else (t[r].c.k[0] /= 255), (t[r].c.k[1] /= 255), (t[r].c.k[2] /= 255), (t[r].c.k[3] /= 255);
                }
                function r(t) {
                  var r,
                    i = t.length;
                  for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes);
                }
                return function(e) {
                  if (n(t, e.v) && (r(e.layers), e.assets)) {
                    var i,
                      s = e.assets.length;
                    for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers);
                  }
                };
              })(),
              h = (function() {
                var t = [4, 4, 18];
                function e(t) {
                  var r, i, n;
                  for (r = t.length - 1; r >= 0; r -= 1)
                    if ('sh' == t[r].ty)
                      if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                      else
                        for (n = t[r].ks.k.length, i = 0; i < n; i += 1)
                          t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed),
                            t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                    else 'gr' == t[r].ty && e(t[r].it);
                }
                function r(t) {
                  var r,
                    i,
                    n,
                    s,
                    a,
                    o,
                    h = t.length;
                  for (i = 0; i < h; i += 1) {
                    if ((r = t[i]).hasMask) {
                      var l = r.masksProperties;
                      for (s = l.length, n = 0; n < s; n += 1)
                        if (l[n].pt.k.i) l[n].pt.k.c = l[n].cl;
                        else
                          for (o = l[n].pt.k.length, a = 0; a < o; a += 1)
                            l[n].pt.k[a].s && (l[n].pt.k[a].s[0].c = l[n].cl),
                              l[n].pt.k[a].e && (l[n].pt.k[a].e[0].c = l[n].cl);
                    }
                    4 === r.ty && e(r.shapes);
                  }
                }
                return function(e) {
                  if (n(t, e.v) && (r(e.layers), e.assets)) {
                    var i,
                      s = e.assets.length;
                    for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers);
                  }
                };
              })();
            var l = {
              completeData: function(e, r) {
                e.__complete || (o(e), s(e), a(e), h(e), t(e.layers, e.assets, r), (e.__complete = !0));
              }
            };
            return (l.checkColors = o), (l.checkChars = a), (l.checkShapes = h), (l.completeLayers = t), l;
          }
          var dataManager = dataFunctionManager(),
            FontManager = (function() {
              var t = 5e3,
                e = { w: 0, size: 0, shapes: [] },
                r = [];
              function i(t, e) {
                var r = createTag('span');
                r.style.fontFamily = e;
                var i = createTag('span');
                (i.innerHTML = 'giItT1WQy@!-/#'),
                  (r.style.position = 'absolute'),
                  (r.style.left = '-10000px'),
                  (r.style.top = '-10000px'),
                  (r.style.fontSize = '300px'),
                  (r.style.fontVariant = 'normal'),
                  (r.style.fontStyle = 'normal'),
                  (r.style.fontWeight = 'normal'),
                  (r.style.letterSpacing = '0'),
                  r.appendChild(i),
                  document.body.appendChild(r);
                var n = i.offsetWidth;
                return (i.style.fontFamily = t + ', ' + e), { node: i, w: n, parent: r };
              }
              function n(t, e) {
                var r = createNS('text');
                return (
                  (r.style.fontSize = '100px'),
                  r.setAttribute('font-family', e.fFamily),
                  r.setAttribute('font-style', e.fStyle),
                  r.setAttribute('font-weight', e.fWeight),
                  (r.textContent = '1'),
                  e.fClass
                    ? ((r.style.fontFamily = 'inherit'), r.setAttribute('class', e.fClass))
                    : (r.style.fontFamily = e.fFamily),
                  t.appendChild(r),
                  (createTag('canvas').getContext('2d').font = e.fWeight + ' ' + e.fStyle + ' 100px ' + e.fFamily),
                  r
                );
              }
              r = r.concat([
                2304,
                2305,
                2306,
                2307,
                2362,
                2363,
                2364,
                2364,
                2366,
                2367,
                2368,
                2369,
                2370,
                2371,
                2372,
                2373,
                2374,
                2375,
                2376,
                2377,
                2378,
                2379,
                2380,
                2381,
                2382,
                2383,
                2387,
                2388,
                2389,
                2390,
                2391,
                2402,
                2403
              ]);
              var s = function() {
                (this.fonts = []),
                  (this.chars = null),
                  (this.typekitLoaded = 0),
                  (this.isLoaded = !1),
                  (this.initTime = Date.now());
              };
              return (
                (s.getCombinedCharacterCodes = function() {
                  return r;
                }),
                (s.prototype.addChars = function(t) {
                  if (t) {
                    this.chars || (this.chars = []);
                    var e,
                      r,
                      i,
                      n = t.length,
                      s = this.chars.length;
                    for (e = 0; e < n; e += 1) {
                      for (r = 0, i = !1; r < s; )
                        this.chars[r].style === t[e].style &&
                          this.chars[r].fFamily === t[e].fFamily &&
                          this.chars[r].ch === t[e].ch &&
                          (i = !0),
                          (r += 1);
                      i || (this.chars.push(t[e]), (s += 1));
                    }
                  }
                }),
                (s.prototype.addFonts = function(t, e) {
                  if (t) {
                    if (this.chars) return (this.isLoaded = !0), void (this.fonts = t.list);
                    var r,
                      s = t.list,
                      a = s.length,
                      o = a;
                    for (r = 0; r < a; r += 1) {
                      var h,
                        l,
                        p = !0;
                      if (
                        ((s[r].loaded = !1),
                        (s[r].monoCase = i(s[r].fFamily, 'monospace')),
                        (s[r].sansCase = i(s[r].fFamily, 'sans-serif')),
                        s[r].fPath)
                      ) {
                        if ('p' === s[r].fOrigin || 3 === s[r].origin) {
                          if (
                            ((h = document.querySelectorAll(
                              'style[f-forigin="p"][f-family="' +
                                s[r].fFamily +
                                '"], style[f-origin="3"][f-family="' +
                                s[r].fFamily +
                                '"]'
                            )).length > 0 && (p = !1),
                            p)
                          ) {
                            var c = createTag('style');
                            c.setAttribute('f-forigin', s[r].fOrigin),
                              c.setAttribute('f-origin', s[r].origin),
                              c.setAttribute('f-family', s[r].fFamily),
                              (c.type = 'text/css'),
                              (c.innerHTML =
                                '@font-face {font-family: ' +
                                s[r].fFamily +
                                "; font-style: normal; src: url('" +
                                s[r].fPath +
                                "');}"),
                              e.appendChild(c);
                          }
                        } else if ('g' === s[r].fOrigin || 1 === s[r].origin) {
                          for (
                            h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0;
                            l < h.length;
                            l++
                          )
                            -1 !== h[l].href.indexOf(s[r].fPath) && (p = !1);
                          if (p) {
                            var f = createTag('link');
                            f.setAttribute('f-forigin', s[r].fOrigin),
                              f.setAttribute('f-origin', s[r].origin),
                              (f.type = 'text/css'),
                              (f.rel = 'stylesheet'),
                              (f.href = s[r].fPath),
                              document.body.appendChild(f);
                          }
                        } else if ('t' === s[r].fOrigin || 2 === s[r].origin) {
                          for (
                            h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0;
                            l < h.length;
                            l++
                          )
                            s[r].fPath === h[l].src && (p = !1);
                          if (p) {
                            var u = createTag('link');
                            u.setAttribute('f-forigin', s[r].fOrigin),
                              u.setAttribute('f-origin', s[r].origin),
                              u.setAttribute('rel', 'stylesheet'),
                              u.setAttribute('href', s[r].fPath),
                              e.appendChild(u);
                          }
                        }
                      } else (s[r].loaded = !0), (o -= 1);
                      (s[r].helper = n(e, s[r])), (s[r].cache = {}), this.fonts.push(s[r]);
                    }
                    0 === o ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                }),
                (s.prototype.getCharData = function(t, r, i) {
                  for (var n = 0, s = this.chars.length; n < s; ) {
                    if (this.chars[n].ch === t && this.chars[n].style === r && this.chars[n].fFamily === i)
                      return this.chars[n];
                    n += 1;
                  }
                  return (
                    (('string' === typeof t && 13 !== t.charCodeAt(0)) || !t) &&
                      console &&
                      console.warn &&
                      console.warn('Missing character from exported characters list: ', t, r, i),
                    e
                  );
                }),
                (s.prototype.getFontByName = function(t) {
                  for (var e = 0, r = this.fonts.length; e < r; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                }),
                (s.prototype.measureText = function(t, e, r) {
                  var i = this.getFontByName(e),
                    n = t.charCodeAt(0);
                  if (!i.cache[n + 1]) {
                    var s = i.helper;
                    if (' ' === t) {
                      s.textContent = '|' + t + '|';
                      var a = s.getComputedTextLength();
                      s.textContent = '||';
                      var o = s.getComputedTextLength();
                      i.cache[n + 1] = (a - o) / 100;
                    } else (s.textContent = t), (i.cache[n + 1] = s.getComputedTextLength() / 100);
                  }
                  return i.cache[n + 1] * r;
                }),
                (s.prototype.checkLoadedFonts = function() {
                  var e,
                    r,
                    i,
                    n = this.fonts.length,
                    s = n;
                  for (e = 0; e < n; e += 1)
                    this.fonts[e].loaded
                      ? (s -= 1)
                      : 'n' === this.fonts[e].fOrigin || 0 === this.fonts[e].origin
                      ? (this.fonts[e].loaded = !0)
                      : ((r = this.fonts[e].monoCase.node),
                        (i = this.fonts[e].monoCase.w),
                        r.offsetWidth !== i
                          ? ((s -= 1), (this.fonts[e].loaded = !0))
                          : ((r = this.fonts[e].sansCase.node),
                            (i = this.fonts[e].sansCase.w),
                            r.offsetWidth !== i && ((s -= 1), (this.fonts[e].loaded = !0))),
                        this.fonts[e].loaded &&
                          (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent),
                          this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                  0 !== s && Date.now() - this.initTime < t
                    ? setTimeout(this.checkLoadedFonts.bind(this), 20)
                    : setTimeout(
                        function() {
                          this.isLoaded = !0;
                        }.bind(this),
                        0
                      );
                }),
                (s.prototype.loaded = function() {
                  return this.isLoaded;
                }),
                s
              );
            })(),
            PropertyFactory = (function() {
              var t = initialDefaultFrame,
                e = Math.abs;
              function r(t, e) {
                var r,
                  n = this.offsetTime;
                'multidimensional' === this.propType && (r = createTypedArray('float32', this.pv.length));
                for (var s, a, o, h, l, p, c, f, u = e.lastIndex, m = u, d = this.keyframes.length - 1, y = !0; y; ) {
                  if (((s = this.keyframes[m]), (a = this.keyframes[m + 1]), m === d - 1 && t >= a.t - n)) {
                    s.h && (s = a), (u = 0);
                    break;
                  }
                  if (a.t - n > t) {
                    u = m;
                    break;
                  }
                  m < d - 1 ? (m += 1) : ((u = 0), (y = !1));
                }
                var g,
                  v = a.t - n,
                  b = s.t - n;
                if (s.to) {
                  s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                  var E = s.bezierData;
                  if (t >= v || t < b) {
                    var x = t >= v ? E.points.length - 1 : 0;
                    for (h = E.points[x].point.length, o = 0; o < h; o += 1) r[o] = E.points[x].point[o];
                  } else {
                    s.__fnct
                      ? (f = s.__fnct)
                      : ((f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get), (s.__fnct = f)),
                      (l = f((t - b) / (v - b)));
                    var S,
                      P = E.segmentLength * l,
                      _ = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                    for (
                      c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = E.points.length;
                      y;

                    ) {
                      if (((_ += E.points[c].partialLength), 0 === P || 0 === l || c === E.points.length - 1)) {
                        for (h = E.points[c].point.length, o = 0; o < h; o += 1) r[o] = E.points[c].point[o];
                        break;
                      }
                      if (P >= _ && P < _ + E.points[c + 1].partialLength) {
                        for (
                          S = (P - _) / E.points[c + 1].partialLength, h = E.points[c].point.length, o = 0;
                          o < h;
                          o += 1
                        )
                          r[o] = E.points[c].point[o] + (E.points[c + 1].point[o] - E.points[c].point[o]) * S;
                        break;
                      }
                      c < p - 1 ? (c += 1) : (y = !1);
                    }
                    (e._lastPoint = c),
                      (e._lastAddedLength = _ - E.points[c].partialLength),
                      (e._lastKeyframeIndex = m);
                  }
                } else {
                  var C, D, k, A, w;
                  if (((d = s.s.length), (g = a.s || s.e), this.sh && 1 !== s.h))
                    t >= v
                      ? ((r[0] = g[0]), (r[1] = g[1]), (r[2] = g[2]))
                      : t <= b
                      ? ((r[0] = s.s[0]), (r[1] = s.s[1]), (r[2] = s.s[2]))
                      : (function(t, e) {
                          var r = e[0],
                            i = e[1],
                            n = e[2],
                            s = e[3],
                            a = Math.atan2(2 * i * s - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
                            o = Math.asin(2 * r * i + 2 * n * s),
                            h = Math.atan2(2 * r * s - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
                          (t[0] = a / degToRads), (t[1] = o / degToRads), (t[2] = h / degToRads);
                        })(
                          r,
                          (function(t, e, r) {
                            var i,
                              n,
                              s,
                              a,
                              o,
                              h = [],
                              l = t[0],
                              p = t[1],
                              c = t[2],
                              f = t[3],
                              u = e[0],
                              m = e[1],
                              d = e[2],
                              y = e[3];
                            return (
                              (n = l * u + p * m + c * d + f * y) < 0 &&
                                ((n = -n), (u = -u), (m = -m), (d = -d), (y = -y)),
                              1 - n > 1e-6
                                ? ((i = Math.acos(n)),
                                  (s = Math.sin(i)),
                                  (a = Math.sin((1 - r) * i) / s),
                                  (o = Math.sin(r * i) / s))
                                : ((a = 1 - r), (o = r)),
                              (h[0] = a * l + o * u),
                              (h[1] = a * p + o * m),
                              (h[2] = a * c + o * d),
                              (h[3] = a * f + o * y),
                              h
                            );
                          })(i(s.s), i(g), (t - b) / (v - b))
                        );
                  else
                    for (m = 0; m < d; m += 1)
                      1 !== s.h &&
                        (t >= v
                          ? (l = 1)
                          : t < b
                          ? (l = 0)
                          : (s.o.x.constructor === Array
                              ? (s.__fnct || (s.__fnct = []),
                                s.__fnct[m]
                                  ? (f = s.__fnct[m])
                                  : ((C = 'undefined' === typeof s.o.x[m] ? s.o.x[0] : s.o.x[m]),
                                    (D = 'undefined' === typeof s.o.y[m] ? s.o.y[0] : s.o.y[m]),
                                    (k = 'undefined' === typeof s.i.x[m] ? s.i.x[0] : s.i.x[m]),
                                    (A = 'undefined' === typeof s.i.y[m] ? s.i.y[0] : s.i.y[m]),
                                    (f = BezierFactory.getBezierEasing(C, D, k, A).get),
                                    (s.__fnct[m] = f)))
                              : s.__fnct
                              ? (f = s.__fnct)
                              : ((C = s.o.x),
                                (D = s.o.y),
                                (k = s.i.x),
                                (A = s.i.y),
                                (f = BezierFactory.getBezierEasing(C, D, k, A).get),
                                (s.__fnct = f)),
                            (l = f((t - b) / (v - b))))),
                        (g = a.s || s.e),
                        (w = 1 === s.h ? s.s[m] : s.s[m] + (g[m] - s.s[m]) * l),
                        'multidimensional' === this.propType ? (r[m] = w) : (r = w);
                }
                return (e.lastIndex = u), r;
              }
              function i(t) {
                var e = t[0] * degToRads,
                  r = t[1] * degToRads,
                  i = t[2] * degToRads,
                  n = Math.cos(e / 2),
                  s = Math.cos(r / 2),
                  a = Math.cos(i / 2),
                  o = Math.sin(e / 2),
                  h = Math.sin(r / 2),
                  l = Math.sin(i / 2);
                return [o * h * a + n * s * l, o * s * a + n * h * l, n * h * a - o * s * l, n * s * a - o * h * l];
              }
              function n() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  r = this.keyframes[0].t - this.offsetTime,
                  i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (
                  !(
                    e === this._caching.lastFrame ||
                    (this._caching.lastFrame !== t &&
                      ((this._caching.lastFrame >= i && e >= i) || (this._caching.lastFrame < r && e < r)))
                  )
                ) {
                  this._caching.lastFrame >= e &&
                    ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                  var n = this.interpolateValue(e, this._caching);
                  this.pv = n;
                }
                return (this._caching.lastFrame = e), this.pv;
              }
              function s(t) {
                var r;
                if ('unidimensional' === this.propType)
                  (r = t * this.mult), e(this.v - r) > 1e-5 && ((this.v = r), (this._mdf = !0));
                else
                  for (var i = 0, n = this.v.length; i < n; )
                    (r = t[i] * this.mult), e(this.v[i] - r) > 1e-5 && ((this.v[i] = r), (this._mdf = !0)), (i += 1);
              }
              function a() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    (this.lock = !0), (this._mdf = this._isFirstFrame);
                    var t,
                      e = this.effectsSequence.length,
                      r = this.kf ? this.pv : this.data.k;
                    for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                    this.setVValue(r),
                      (this._isFirstFrame = !1),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
              }
              function o(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this);
              }
              function h(t, e, r, i) {
                (this.propType = 'unidimensional'),
                  (this.mult = r || 1),
                  (this.data = e),
                  (this.v = r ? e.k * r : e.k),
                  (this.pv = e.k),
                  (this._mdf = !1),
                  (this.elem = t),
                  (this.container = i),
                  (this.comp = t.comp),
                  (this.k = !1),
                  (this.kf = !1),
                  (this.vel = 0),
                  (this.effectsSequence = []),
                  (this._isFirstFrame = !0),
                  (this.getValue = a),
                  (this.setVValue = s),
                  (this.addEffect = o);
              }
              function l(t, e, r, i) {
                (this.propType = 'multidimensional'),
                  (this.mult = r || 1),
                  (this.data = e),
                  (this._mdf = !1),
                  (this.elem = t),
                  (this.container = i),
                  (this.comp = t.comp),
                  (this.k = !1),
                  (this.kf = !1),
                  (this.frameId = -1);
                var n,
                  h = e.k.length;
                for (
                  this.v = createTypedArray('float32', h),
                    this.pv = createTypedArray('float32', h),
                    createTypedArray('float32', h),
                    this.vel = createTypedArray('float32', h),
                    n = 0;
                  n < h;
                  n += 1
                )
                  (this.v[n] = e.k[n] * this.mult), (this.pv[n] = e.k[n]);
                (this._isFirstFrame = !0),
                  (this.effectsSequence = []),
                  (this.getValue = a),
                  (this.setVValue = s),
                  (this.addEffect = o);
              }
              function p(e, i, h, l) {
                (this.propType = 'unidimensional'),
                  (this.keyframes = i.k),
                  (this.offsetTime = e.data.st),
                  (this.frameId = -1),
                  (this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }),
                  (this.k = !0),
                  (this.kf = !0),
                  (this.data = i),
                  (this.mult = h || 1),
                  (this.elem = e),
                  (this.container = l),
                  (this.comp = e.comp),
                  (this.v = t),
                  (this.pv = t),
                  (this._isFirstFrame = !0),
                  (this.getValue = a),
                  (this.setVValue = s),
                  (this.interpolateValue = r),
                  (this.effectsSequence = [n.bind(this)]),
                  (this.addEffect = o);
              }
              function c(e, i, h, l) {
                this.propType = 'multidimensional';
                var p,
                  c,
                  f,
                  u,
                  m,
                  d = i.k.length;
                for (p = 0; p < d - 1; p += 1)
                  i.k[p].to &&
                    i.k[p].s &&
                    i.k[p + 1] &&
                    i.k[p + 1].s &&
                    ((c = i.k[p].s),
                    (f = i.k[p + 1].s),
                    (u = i.k[p].to),
                    (m = i.k[p].ti),
                    ((2 === c.length &&
                      (c[0] !== f[0] || c[1] !== f[1]) &&
                      bez.pointOnLine2D(c[0], c[1], f[0], f[1], c[0] + u[0], c[1] + u[1]) &&
                      bez.pointOnLine2D(c[0], c[1], f[0], f[1], f[0] + m[0], f[1] + m[1])) ||
                      (3 === c.length &&
                        (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) &&
                        bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], c[0] + u[0], c[1] + u[1], c[2] + u[2]) &&
                        bez.pointOnLine3D(
                          c[0],
                          c[1],
                          c[2],
                          f[0],
                          f[1],
                          f[2],
                          f[0] + m[0],
                          f[1] + m[1],
                          f[2] + m[2]
                        ))) &&
                      ((i.k[p].to = null), (i.k[p].ti = null)),
                    c[0] === f[0] &&
                      c[1] === f[1] &&
                      0 === u[0] &&
                      0 === u[1] &&
                      0 === m[0] &&
                      0 === m[1] &&
                      (2 === c.length || (c[2] === f[2] && 0 === u[2] && 0 === m[2])) &&
                      ((i.k[p].to = null), (i.k[p].ti = null)));
                (this.effectsSequence = [n.bind(this)]),
                  (this.keyframes = i.k),
                  (this.offsetTime = e.data.st),
                  (this.k = !0),
                  (this.kf = !0),
                  (this._isFirstFrame = !0),
                  (this.mult = h || 1),
                  (this.elem = e),
                  (this.container = l),
                  (this.comp = e.comp),
                  (this.getValue = a),
                  (this.setVValue = s),
                  (this.interpolateValue = r),
                  (this.frameId = -1);
                var y = i.k[0].s.length;
                for (
                  this.v = createTypedArray('float32', y), this.pv = createTypedArray('float32', y), p = 0;
                  p < y;
                  p += 1
                )
                  (this.v[p] = t), (this.pv[p] = t);
                (this._caching = { lastFrame: t, lastIndex: 0, value: createTypedArray('float32', y) }),
                  (this.addEffect = o);
              }
              return {
                getProp: function(t, e, r, i, n) {
                  var s;
                  if (e.k.length)
                    if ('number' === typeof e.k[0]) s = new l(t, e, i, n);
                    else
                      switch (r) {
                        case 0:
                          s = new p(t, e, i, n);
                          break;
                        case 1:
                          s = new c(t, e, i, n);
                      }
                  else s = new h(t, e, i, n);
                  return s.effectsSequence.length && n.addDynamicProperty(s), s;
                }
              };
            })(),
            TransformPropertyFactory = (function() {
              var t = [0, 0];
              function e(t, e, r) {
                if (
                  ((this.elem = t),
                  (this.frameId = -1),
                  (this.propType = 'transform'),
                  (this.data = e),
                  (this.v = new Matrix()),
                  (this.pre = new Matrix()),
                  (this.appliedTransformations = 0),
                  this.initDynamicPropertyContainer(r || t),
                  e.p && e.p.s
                    ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                      (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                      e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                    : (this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this)),
                  e.rx)
                ) {
                  if (
                    ((this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this)),
                    (this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this)),
                    (this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this)),
                    e.or.k[0].ti)
                  ) {
                    var i,
                      n = e.or.k.length;
                    for (i = 0; i < n; i += 1) e.or.k[i].to = e.or.k[i].ti = null;
                  }
                  (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)), (this.or.sh = !0);
                } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
                e.sk &&
                  ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
                  (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
                  (this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, 0.01, this)),
                  e.o ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t)) : (this.o = { _mdf: !1, v: 1 }),
                  (this._isDirty = !0),
                  this.dynamicProperties.length || this.getValue(!0);
              }
              return (
                (e.prototype = {
                  applyToMatrix: function(t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(),
                      (this._mdf = this._mdf || e),
                      this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                      this.r
                        ? t.rotate(-this.r.v)
                        : t
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                      this.data.p.s
                        ? this.data.p.z
                          ? t.translate(this.px.v, this.py.v, -this.pz.v)
                          : t.translate(this.px.v, this.py.v, 0)
                        : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                  },
                  getValue: function(e) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                      if (
                        (this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)),
                        this.iterateDynamicProperties(),
                        this._mdf || e)
                      ) {
                        if (
                          (this.v.cloneFromProps(this.pre.props),
                          this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                          this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                          this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                          this.r && this.appliedTransformations < 4
                            ? this.v.rotate(-this.r.v)
                            : !this.r &&
                              this.appliedTransformations < 4 &&
                              this.v
                                .rotateZ(-this.rz.v)
                                .rotateY(this.ry.v)
                                .rotateX(this.rx.v)
                                .rotateZ(-this.or.v[2])
                                .rotateY(this.or.v[1])
                                .rotateX(this.or.v[0]),
                          this.autoOriented)
                        ) {
                          var r,
                            i,
                            n = this.elem.globalData.frameRate;
                          if (this.p && this.p.keyframes && this.p.getValueAtTime)
                            this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t
                              ? ((r = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / n, 0)),
                                (i = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)))
                              : this.p._caching.lastFrame + this.p.offsetTime >=
                                this.p.keyframes[this.p.keyframes.length - 1].t
                              ? ((r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0)),
                                (i = this.p.getValueAtTime(
                                  (this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / n,
                                  0
                                )))
                              : ((r = this.p.pv),
                                (i = this.p.getValueAtTime(
                                  (this.p._caching.lastFrame + this.p.offsetTime - 0.01) / n,
                                  this.p.offsetTime
                                )));
                          else if (
                            this.px &&
                            this.px.keyframes &&
                            this.py.keyframes &&
                            this.px.getValueAtTime &&
                            this.py.getValueAtTime
                          ) {
                            (r = []), (i = []);
                            var s = this.px,
                              a = this.py;
                            s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t
                              ? ((r[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / n, 0)),
                                (r[1] = a.getValueAtTime((a.keyframes[0].t + 0.01) / n, 0)),
                                (i[0] = s.getValueAtTime(s.keyframes[0].t / n, 0)),
                                (i[1] = a.getValueAtTime(a.keyframes[0].t / n, 0)))
                              : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t
                              ? ((r[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0)),
                                (r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0)),
                                (i[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / n, 0)),
                                (i[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / n, 0)))
                              : ((r = [s.pv, a.pv]),
                                (i[0] = s.getValueAtTime(
                                  (s._caching.lastFrame + s.offsetTime - 0.01) / n,
                                  s.offsetTime
                                )),
                                (i[1] = a.getValueAtTime(
                                  (a._caching.lastFrame + a.offsetTime - 0.01) / n,
                                  a.offsetTime
                                )));
                          } else r = i = t;
                          this.v.rotate(-Math.atan2(r[1] - i[1], r[0] - i[0]));
                        }
                        this.data.p && this.data.p.s
                          ? this.data.p.z
                            ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                            : this.v.translate(this.px.v, this.py.v, 0)
                          : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                      }
                      this.frameId = this.elem.globalData.frameId;
                    }
                  },
                  precalculateMatrix: function() {
                    if (
                      !this.a.k &&
                      (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                      (this.appliedTransformations = 1),
                      !this.s.effectsSequence.length)
                    ) {
                      if (
                        (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        (this.appliedTransformations = 2),
                        this.sk)
                      ) {
                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                      }
                      if (this.r) {
                        if (this.r.effectsSequence.length) return;
                        this.pre.rotate(-this.r.v), (this.appliedTransformations = 4);
                      } else
                        this.rz.effectsSequence.length ||
                          this.ry.effectsSequence.length ||
                          this.rx.effectsSequence.length ||
                          this.or.effectsSequence.length ||
                          (this.pre
                            .rotateZ(-this.rz.v)
                            .rotateY(this.ry.v)
                            .rotateX(this.rx.v)
                            .rotateZ(-this.or.v[2])
                            .rotateY(this.or.v[1])
                            .rotateX(this.or.v[0]),
                          (this.appliedTransformations = 4));
                    }
                  },
                  autoOrient: function() {}
                }),
                extendPrototype([DynamicPropertyContainer], e),
                (e.prototype.addDynamicProperty = function(t) {
                  this._addDynamicProperty(t), this.elem.addDynamicProperty(t), (this._isDirty = !0);
                }),
                (e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                  getTransformProperty: function(t, r, i) {
                    return new e(t, r, i);
                  }
                }
              );
            })();
          function ShapePath() {
            (this.c = !1),
              (this._length = 0),
              (this._maxLength = 8),
              (this.v = createSizedArray(this._maxLength)),
              (this.o = createSizedArray(this._maxLength)),
              (this.i = createSizedArray(this._maxLength));
          }
          (ShapePath.prototype.setPathData = function(t, e) {
            (this.c = t), this.setLength(e);
            for (var r = 0; r < e; )
              (this.v[r] = point_pool.newElement()),
                (this.o[r] = point_pool.newElement()),
                (this.i[r] = point_pool.newElement()),
                (r += 1);
          }),
            (ShapePath.prototype.setLength = function(t) {
              for (; this._maxLength < t; ) this.doubleArrayLength();
              this._length = t;
            }),
            (ShapePath.prototype.doubleArrayLength = function() {
              (this.v = this.v.concat(createSizedArray(this._maxLength))),
                (this.i = this.i.concat(createSizedArray(this._maxLength))),
                (this.o = this.o.concat(createSizedArray(this._maxLength))),
                (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function(t, e, r, i, n) {
              var s;
              switch (
                ((this._length = Math.max(this._length, i + 1)),
                this._length >= this._maxLength && this.doubleArrayLength(),
                r)
              ) {
                case 'v':
                  s = this.v;
                  break;
                case 'i':
                  s = this.i;
                  break;
                case 'o':
                  s = this.o;
              }
              (!s[i] || (s[i] && !n)) && (s[i] = point_pool.newElement()), (s[i][0] = t), (s[i][1] = e);
            }),
            (ShapePath.prototype.setTripleAt = function(t, e, r, i, n, s, a, o) {
              this.setXYAt(t, e, 'v', a, o), this.setXYAt(r, i, 'o', a, o), this.setXYAt(n, s, 'i', a, o);
            }),
            (ShapePath.prototype.reverse = function() {
              var t = new ShapePath();
              t.setPathData(this.c, this._length);
              var e = this.v,
                r = this.o,
                i = this.i,
                n = 0;
              this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), (n = 1));
              var s,
                a = this._length - 1,
                o = this._length;
              for (s = n; s < o; s += 1)
                t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], s, !1), (a -= 1);
              return t;
            });
          var ShapePropertyFactory = (function() {
              var t = -999999;
              function e(t, e, r) {
                var i,
                  n,
                  s,
                  a,
                  o,
                  h,
                  l,
                  p,
                  c,
                  f = r.lastIndex,
                  u = this.keyframes;
                if (t < u[0].t - this.offsetTime) (i = u[0].s[0]), (s = !0), (f = 0);
                else if (t >= u[u.length - 1].t - this.offsetTime)
                  (i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0]), (s = !0);
                else {
                  for (
                    var m, d, y = f, g = u.length - 1, v = !0;
                    v && ((m = u[y]), !((d = u[y + 1]).t - this.offsetTime > t));

                  )
                    y < g - 1 ? (y += 1) : (v = !1);
                  if (((f = y), !(s = 1 === m.h))) {
                    if (t >= d.t - this.offsetTime) p = 1;
                    else if (t < m.t - this.offsetTime) p = 0;
                    else {
                      var b;
                      m.__fnct
                        ? (b = m.__fnct)
                        : ((b = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get), (m.__fnct = b)),
                        (p = b((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime))));
                    }
                    n = d.s ? d.s[0] : m.e[0];
                  }
                  i = m.s[0];
                }
                for (h = e._length, l = i.i[0].length, r.lastIndex = f, a = 0; a < h; a += 1)
                  for (o = 0; o < l; o += 1)
                    (c = s ? i.i[a][o] : i.i[a][o] + (n.i[a][o] - i.i[a][o]) * p),
                      (e.i[a][o] = c),
                      (c = s ? i.o[a][o] : i.o[a][o] + (n.o[a][o] - i.o[a][o]) * p),
                      (e.o[a][o] = c),
                      (c = s ? i.v[a][o] : i.v[a][o] + (n.v[a][o] - i.v[a][o]) * p),
                      (e.v[a][o] = c);
              }
              function r() {
                var e = this.comp.renderedFrame - this.offsetTime,
                  r = this.keyframes[0].t - this.offsetTime,
                  i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                  n = this._caching.lastFrame;
                return (
                  (n !== t && ((n < r && e < r) || (n > i && e > i))) ||
                    ((this._caching.lastIndex = n < e ? this._caching.lastIndex : 0),
                    this.interpolateShape(e, this.pv, this._caching)),
                  (this._caching.lastFrame = e),
                  this.pv
                );
              }
              function i() {
                this.paths = this.localShapeCollection;
              }
              function n(t) {
                (function(t, e) {
                  if (t._length !== e._length || t.c !== e.c) return !1;
                  var r,
                    i = t._length;
                  for (r = 0; r < i; r += 1)
                    if (
                      t.v[r][0] !== e.v[r][0] ||
                      t.v[r][1] !== e.v[r][1] ||
                      t.o[r][0] !== e.o[r][0] ||
                      t.o[r][1] !== e.o[r][1] ||
                      t.i[r][0] !== e.i[r][0] ||
                      t.i[r][1] !== e.i[r][1]
                    )
                      return !1;
                  return !0;
                })(this.v, t) ||
                  ((this.v = shape_pool.clone(t)),
                  this.localShapeCollection.releaseShapes(),
                  this.localShapeCollection.addShape(this.v),
                  (this._mdf = !0),
                  (this.paths = this.localShapeCollection));
              }
              function s() {
                if (this.elem.globalData.frameId !== this.frameId)
                  if (this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                      (this.lock = !0), (this._mdf = !1);
                      var t,
                        e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                        r = this.effectsSequence.length;
                      for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                      this.setVValue(e), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                    }
                  else this._mdf = !1;
              }
              function a(t, e, r) {
                (this.propType = 'shape'),
                  (this.comp = t.comp),
                  (this.container = t),
                  (this.elem = t),
                  (this.data = e),
                  (this.k = !1),
                  (this.kf = !1),
                  (this._mdf = !1);
                var n = 3 === r ? e.pt.k : e.ks.k;
                (this.v = shape_pool.clone(n)),
                  (this.pv = shape_pool.clone(this.v)),
                  (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.reset = i),
                  (this.effectsSequence = []);
              }
              function o(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this);
              }
              function h(e, n, s) {
                (this.propType = 'shape'),
                  (this.comp = e.comp),
                  (this.elem = e),
                  (this.container = e),
                  (this.offsetTime = e.data.st),
                  (this.keyframes = 3 === s ? n.pt.k : n.ks.k),
                  (this.k = !0),
                  (this.kf = !0);
                var a = this.keyframes[0].s[0].i.length;
                this.keyframes[0].s[0].i[0].length,
                  (this.v = shape_pool.newElement()),
                  this.v.setPathData(this.keyframes[0].s[0].c, a),
                  (this.pv = shape_pool.clone(this.v)),
                  (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.paths.addShape(this.v),
                  (this.lastFrame = t),
                  (this.reset = i),
                  (this._caching = { lastFrame: t, lastIndex: 0 }),
                  (this.effectsSequence = [r.bind(this)]);
              }
              (a.prototype.interpolateShape = e),
                (a.prototype.getValue = s),
                (a.prototype.setVValue = n),
                (a.prototype.addEffect = o),
                (h.prototype.getValue = s),
                (h.prototype.interpolateShape = e),
                (h.prototype.setVValue = n),
                (h.prototype.addEffect = o);
              var l = (function() {
                  var t = roundCorner;
                  function e(t, e) {
                    (this.v = shape_pool.newElement()),
                      this.v.setPathData(!0, 4),
                      (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                      (this.paths = this.localShapeCollection),
                      this.localShapeCollection.addShape(this.v),
                      (this.d = e.d),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.frameId = -1),
                      this.initDynamicPropertyContainer(t),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                      this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
                  }
                  return (
                    (e.prototype = {
                      reset: i,
                      getValue: function() {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertEllToPath());
                      },
                      convertEllToPath: function() {
                        var e = this.p.v[0],
                          r = this.p.v[1],
                          i = this.s.v[0] / 2,
                          n = this.s.v[1] / 2,
                          s = 3 !== this.d,
                          a = this.v;
                        (a.v[0][0] = e),
                          (a.v[0][1] = r - n),
                          (a.v[1][0] = s ? e + i : e - i),
                          (a.v[1][1] = r),
                          (a.v[2][0] = e),
                          (a.v[2][1] = r + n),
                          (a.v[3][0] = s ? e - i : e + i),
                          (a.v[3][1] = r),
                          (a.i[0][0] = s ? e - i * t : e + i * t),
                          (a.i[0][1] = r - n),
                          (a.i[1][0] = s ? e + i : e - i),
                          (a.i[1][1] = r - n * t),
                          (a.i[2][0] = s ? e + i * t : e - i * t),
                          (a.i[2][1] = r + n),
                          (a.i[3][0] = s ? e - i : e + i),
                          (a.i[3][1] = r + n * t),
                          (a.o[0][0] = s ? e + i * t : e - i * t),
                          (a.o[0][1] = r - n),
                          (a.o[1][0] = s ? e + i : e - i),
                          (a.o[1][1] = r + n * t),
                          (a.o[2][0] = s ? e - i * t : e + i * t),
                          (a.o[2][1] = r + n),
                          (a.o[3][0] = s ? e - i : e + i),
                          (a.o[3][1] = r - n * t);
                      }
                    }),
                    extendPrototype([DynamicPropertyContainer], e),
                    e
                  );
                })(),
                p = (function() {
                  function t(t, e) {
                    (this.v = shape_pool.newElement()),
                      this.v.setPathData(!0, 0),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.data = e),
                      (this.frameId = -1),
                      (this.d = e.d),
                      this.initDynamicPropertyContainer(t),
                      1 === e.sy
                        ? ((this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this)),
                          (this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this)),
                          (this.convertToPath = this.convertStarToPath))
                        : (this.convertToPath = this.convertPolygonToPath),
                      (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this)),
                      (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                      (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                      (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                      this.localShapeCollection.addShape(this.v),
                      (this.paths = this.localShapeCollection),
                      this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
                  }
                  return (
                    (t.prototype = {
                      reset: i,
                      getValue: function() {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertToPath());
                      },
                      convertStarToPath: function() {
                        var t,
                          e,
                          r,
                          i,
                          n = 2 * Math.floor(this.pt.v),
                          s = (2 * Math.PI) / n,
                          a = !0,
                          o = this.or.v,
                          h = this.ir.v,
                          l = this.os.v,
                          p = this.is.v,
                          c = (2 * Math.PI * o) / (2 * n),
                          f = (2 * Math.PI * h) / (2 * n),
                          u = -Math.PI / 2;
                        u += this.r.v;
                        var m = 3 === this.data.d ? -1 : 1;
                        for (this.v._length = 0, t = 0; t < n; t += 1) {
                          (r = a ? l : p), (i = a ? c : f);
                          var d = (e = a ? o : h) * Math.cos(u),
                            y = e * Math.sin(u),
                            g = 0 === d && 0 === y ? 0 : y / Math.sqrt(d * d + y * y),
                            v = 0 === d && 0 === y ? 0 : -d / Math.sqrt(d * d + y * y);
                          (d += +this.p.v[0]),
                            (y += +this.p.v[1]),
                            this.v.setTripleAt(
                              d,
                              y,
                              d - g * i * r * m,
                              y - v * i * r * m,
                              d + g * i * r * m,
                              y + v * i * r * m,
                              t,
                              !0
                            ),
                            (a = !a),
                            (u += s * m);
                        }
                      },
                      convertPolygonToPath: function() {
                        var t,
                          e = Math.floor(this.pt.v),
                          r = (2 * Math.PI) / e,
                          i = this.or.v,
                          n = this.os.v,
                          s = (2 * Math.PI * i) / (4 * e),
                          a = -Math.PI / 2,
                          o = 3 === this.data.d ? -1 : 1;
                        for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                          var h = i * Math.cos(a),
                            l = i * Math.sin(a),
                            p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                            c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                          (h += +this.p.v[0]),
                            (l += +this.p.v[1]),
                            this.v.setTripleAt(
                              h,
                              l,
                              h - p * s * n * o,
                              l - c * s * n * o,
                              h + p * s * n * o,
                              l + c * s * n * o,
                              t,
                              !0
                            ),
                            (a += r * o);
                        }
                        (this.paths.length = 0), (this.paths[0] = this.v);
                      }
                    }),
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                  );
                })(),
                c = (function() {
                  function t(t, e) {
                    (this.v = shape_pool.newElement()),
                      (this.v.c = !0),
                      (this.localShapeCollection = shapeCollection_pool.newShapeCollection()),
                      this.localShapeCollection.addShape(this.v),
                      (this.paths = this.localShapeCollection),
                      (this.elem = t),
                      (this.comp = t.comp),
                      (this.frameId = -1),
                      (this.d = e.d),
                      this.initDynamicPropertyContainer(t),
                      (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                      (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                      (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                      this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertRectToPath());
                  }
                  return (
                    (t.prototype = {
                      convertRectToPath: function() {
                        var t = this.p.v[0],
                          e = this.p.v[1],
                          r = this.s.v[0] / 2,
                          i = this.s.v[1] / 2,
                          n = bm_min(r, i, this.r.v),
                          s = n * (1 - roundCorner);
                        (this.v._length = 0),
                          2 === this.d || 1 === this.d
                            ? (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + n, t + r, e - i + s, 0, !0),
                              this.v.setTripleAt(t + r, e + i - n, t + r, e + i - s, t + r, e + i - n, 1, !0),
                              0 !== n
                                ? (this.v.setTripleAt(t + r - n, e + i, t + r - n, e + i, t + r - s, e + i, 2, !0),
                                  this.v.setTripleAt(t - r + n, e + i, t - r + s, e + i, t - r + n, e + i, 3, !0),
                                  this.v.setTripleAt(t - r, e + i - n, t - r, e + i - n, t - r, e + i - s, 4, !0),
                                  this.v.setTripleAt(t - r, e - i + n, t - r, e - i + s, t - r, e - i + n, 5, !0),
                                  this.v.setTripleAt(t - r + n, e - i, t - r + n, e - i, t - r + s, e - i, 6, !0),
                                  this.v.setTripleAt(t + r - n, e - i, t + r - s, e - i, t + r - n, e - i, 7, !0))
                                : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2),
                                  this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3)))
                            : (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + s, t + r, e - i + n, 0, !0),
                              0 !== n
                                ? (this.v.setTripleAt(t + r - n, e - i, t + r - n, e - i, t + r - s, e - i, 1, !0),
                                  this.v.setTripleAt(t - r + n, e - i, t - r + s, e - i, t - r + n, e - i, 2, !0),
                                  this.v.setTripleAt(t - r, e - i + n, t - r, e - i + n, t - r, e - i + s, 3, !0),
                                  this.v.setTripleAt(t - r, e + i - n, t - r, e + i - s, t - r, e + i - n, 4, !0),
                                  this.v.setTripleAt(t - r + n, e + i, t - r + n, e + i, t - r + s, e + i, 5, !0),
                                  this.v.setTripleAt(t + r - n, e + i, t + r - s, e + i, t + r - n, e + i, 6, !0),
                                  this.v.setTripleAt(t + r, e + i - n, t + r, e + i - n, t + r, e + i - s, 7, !0))
                                : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0),
                                  this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0),
                                  this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)));
                      },
                      getValue: function(t) {
                        this.elem.globalData.frameId !== this.frameId &&
                          ((this.frameId = this.elem.globalData.frameId),
                          this.iterateDynamicProperties(),
                          this._mdf && this.convertRectToPath());
                      },
                      reset: i
                    }),
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                  );
                })(),
                f = {
                  getShapeProp: function(t, e, r) {
                    var i;
                    return (
                      3 === r || 4 === r
                        ? (i = (3 === r ? e.pt : e.ks).k.length ? new h(t, e, r) : new a(t, e, r))
                        : 5 === r
                        ? (i = new c(t, e))
                        : 6 === r
                        ? (i = new l(t, e))
                        : 7 === r && (i = new p(t, e)),
                      i.k && t.addDynamicProperty(i),
                      i
                    );
                  },
                  getConstructorFunction: function() {
                    return a;
                  },
                  getKeyframedConstructorFunction: function() {
                    return h;
                  }
                };
              return f;
            })(),
            ShapeModifiers = (function() {
              var t = {},
                e = {};
              return (
                (t.registerModifier = function(t, r) {
                  e[t] || (e[t] = r);
                }),
                (t.getModifier = function(t, r, i) {
                  return new e[t](r, i);
                }),
                t
              );
            })();
          function ShapeModifier() {}
          function TrimModifier() {}
          function RoundCornersModifier() {}
          function RepeaterModifier() {}
          function ShapeCollection() {
            (this._length = 0), (this._maxLength = 4), (this.shapes = createSizedArray(this._maxLength));
          }
          function DashProperty(t, e, r, i) {
            (this.elem = t),
              (this.frameId = -1),
              (this.dataProps = createSizedArray(e.length)),
              (this.renderer = r),
              (this.k = !1),
              (this.dashStr = ''),
              (this.dashArray = createTypedArray('float32', e.length ? e.length - 1 : 0)),
              (this.dashoffset = createTypedArray('float32', 1)),
              this.initDynamicPropertyContainer(i);
            var n,
              s,
              a = e.length || 0;
            for (n = 0; n < a; n += 1)
              (s = PropertyFactory.getProp(t, e[n].v, 0, 0, this)),
                (this.k = s.k || this.k),
                (this.dataProps[n] = { n: e[n].n, p: s });
            this.k || this.getValue(!0), (this._isAnimated = this.k);
          }
          function GradientProperty(t, e, r) {
            (this.data = e), (this.c = createTypedArray('uint8c', 4 * e.p));
            var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            (this.o = createTypedArray('float32', i)),
              (this._cmdf = !1),
              (this._omdf = !1),
              (this._collapsable = this.checkCollapsable()),
              (this._hasOpacity = i),
              this.initDynamicPropertyContainer(r),
              (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
              (this.k = this.prop.k),
              this.getValue(!0);
          }
          (ShapeModifier.prototype.initModifierProperties = function() {}),
            (ShapeModifier.prototype.addShapeToModifier = function() {}),
            (ShapeModifier.prototype.addShape = function(t) {
              if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = { shape: t.sh, data: t, localShapeCollection: shapeCollection_pool.newShapeCollection() };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
              }
            }),
            (ShapeModifier.prototype.init = function(t, e) {
              (this.shapes = []),
                (this.elem = t),
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                (this.frameId = initialDefaultFrame),
                (this.closed = !1),
                (this.k = !1),
                this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function() {
              this.elem.globalData.frameId !== this.frameId &&
                ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function(t, e) {
              (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                (this.sValue = 0),
                (this.eValue = 0),
                (this.getValue = this.processKeys),
                (this.m = e.m),
                (this._isAnimated =
                  !!this.s.effectsSequence.length ||
                  !!this.e.effectsSequence.length ||
                  !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function(t) {
              t.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, n) {
              var s = [];
              e <= 1
                ? s.push({ s: t, e: e })
                : t >= 1
                ? s.push({ s: t - 1, e: e - 1 })
                : (s.push({ s: t, e: 1 }), s.push({ s: 0, e: e - 1 }));
              var a,
                o,
                h = [],
                l = s.length;
              for (a = 0; a < l; a += 1) {
                var p, c;
                (o = s[a]).e * n < i ||
                  o.s * n > i + r ||
                  ((p = o.s * n <= i ? 0 : (o.s * n - i) / r),
                  (c = o.e * n >= i + r ? 1 : (o.e * n - i) / r),
                  h.push([p, c]));
              }
              return h.length || h.push([0, 0]), h;
            }),
            (TrimModifier.prototype.releasePathsData = function(t) {
              var e,
                r = t.length;
              for (e = 0; e < r; e += 1) segments_length_pool.release(t[e]);
              return (t.length = 0), t;
            }),
            (TrimModifier.prototype.processShapes = function(t) {
              var e, r, i;
              if (this._mdf || t) {
                var n = (this.o.v % 360) / 360;
                if (
                  (n < 0 && (n += 1),
                  (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + n) >
                    (r = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + n))
                ) {
                  var s = e;
                  (e = r), (r = s);
                }
                (e = 1e-4 * Math.round(1e4 * e)),
                  (r = 1e-4 * Math.round(1e4 * r)),
                  (this.sValue = e),
                  (this.eValue = r);
              } else (e = this.sValue), (r = this.eValue);
              var a,
                o,
                h,
                l,
                p,
                c,
                f = this.shapes.length,
                u = 0;
              if (r === e)
                for (a = 0; a < f; a += 1)
                  this.shapes[a].localShapeCollection.releaseShapes(),
                    (this.shapes[a].shape._mdf = !0),
                    (this.shapes[a].shape.paths = this.shapes[a].localShapeCollection);
              else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
                if (this._mdf)
                  for (a = 0; a < f; a += 1) (this.shapes[a].pathsData.length = 0), (this.shapes[a].shape._mdf = !0);
              } else {
                var m,
                  d,
                  y = [];
                for (a = 0; a < f; a += 1)
                  if ((m = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                    if (((h = (i = m.shape.paths)._length), (c = 0), !m.shape._mdf && m.pathsData.length))
                      c = m.totalShapeLength;
                    else {
                      for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1)
                        (p = bez.getSegmentsLength(i.shapes[o])), l.push(p), (c += p.totalLength);
                      (m.totalShapeLength = c), (m.pathsData = l);
                    }
                    (u += c), (m.shape._mdf = !0);
                  } else m.shape.paths = m.localShapeCollection;
                var g,
                  v = e,
                  b = r,
                  E = 0;
                for (a = f - 1; a >= 0; a -= 1)
                  if ((m = this.shapes[a]).shape._mdf) {
                    for (
                      (d = m.localShapeCollection).releaseShapes(),
                        2 === this.m && f > 1
                          ? ((g = this.calculateShapeEdges(e, r, m.totalShapeLength, E, u)), (E += m.totalShapeLength))
                          : (g = [[v, b]]),
                        h = g.length,
                        o = 0;
                      o < h;
                      o += 1
                    ) {
                      (v = g[o][0]),
                        (b = g[o][1]),
                        (y.length = 0),
                        b <= 1
                          ? y.push({ s: m.totalShapeLength * v, e: m.totalShapeLength * b })
                          : v >= 1
                          ? y.push({ s: m.totalShapeLength * (v - 1), e: m.totalShapeLength * (b - 1) })
                          : (y.push({ s: m.totalShapeLength * v, e: m.totalShapeLength }),
                            y.push({ s: 0, e: m.totalShapeLength * (b - 1) }));
                      var x = this.addShapes(m, y[0]);
                      if (y[0].s !== y[0].e) {
                        if (y.length > 1)
                          if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                            var S = x.pop();
                            this.addPaths(x, d), (x = this.addShapes(m, y[1], S));
                          } else this.addPaths(x, d), (x = this.addShapes(m, y[1]));
                        this.addPaths(x, d);
                      }
                    }
                    m.shape.paths = d;
                  }
              }
            }),
            (TrimModifier.prototype.addPaths = function(t, e) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) e.addShape(t[r]);
            }),
            (TrimModifier.prototype.addSegment = function(t, e, r, i, n, s, a) {
              n.setXYAt(e[0], e[1], 'o', s),
                n.setXYAt(r[0], r[1], 'i', s + 1),
                a && n.setXYAt(t[0], t[1], 'v', s),
                n.setXYAt(i[0], i[1], 'v', s + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
              e.setXYAt(t[1], t[5], 'o', r),
                e.setXYAt(t[2], t[6], 'i', r + 1),
                i && e.setXYAt(t[0], t[4], 'v', r),
                e.setXYAt(t[3], t[7], 'v', r + 1);
            }),
            (TrimModifier.prototype.addShapes = function(t, e, r) {
              var i,
                n,
                s,
                a,
                o,
                h,
                l,
                p,
                c = t.pathsData,
                f = t.shape.paths.shapes,
                u = t.shape.paths._length,
                m = 0,
                d = [],
                y = !0;
              for (
                r ? ((o = r._length), (p = r._length)) : ((r = shape_pool.newElement()), (o = 0), (p = 0)),
                  d.push(r),
                  i = 0;
                i < u;
                i += 1
              ) {
                for (h = c[i].lengths, r.c = f[i].c, s = f[i].c ? h.length : h.length + 1, n = 1; n < s; n += 1)
                  if (m + (a = h[n - 1]).addedLength < e.s) (m += a.addedLength), (r.c = !1);
                  else {
                    if (m > e.e) {
                      r.c = !1;
                      break;
                    }
                    e.s <= m && e.e >= m + a.addedLength
                      ? (this.addSegment(f[i].v[n - 1], f[i].o[n - 1], f[i].i[n], f[i].v[n], r, o, y), (y = !1))
                      : ((l = bez.getNewSegment(
                          f[i].v[n - 1],
                          f[i].v[n],
                          f[i].o[n - 1],
                          f[i].i[n],
                          (e.s - m) / a.addedLength,
                          (e.e - m) / a.addedLength,
                          h[n - 1]
                        )),
                        this.addSegmentFromArray(l, r, o, y),
                        (y = !1),
                        (r.c = !1)),
                      (m += a.addedLength),
                      (o += 1);
                  }
                if (f[i].c && h.length) {
                  if (((a = h[n - 1]), m <= e.e)) {
                    var g = h[n - 1].addedLength;
                    e.s <= m && e.e >= m + g
                      ? (this.addSegment(f[i].v[n - 1], f[i].o[n - 1], f[i].i[0], f[i].v[0], r, o, y), (y = !1))
                      : ((l = bez.getNewSegment(
                          f[i].v[n - 1],
                          f[i].v[0],
                          f[i].o[n - 1],
                          f[i].i[0],
                          (e.s - m) / g,
                          (e.e - m) / g,
                          h[n - 1]
                        )),
                        this.addSegmentFromArray(l, r, o, y),
                        (y = !1),
                        (r.c = !1));
                  } else r.c = !1;
                  (m += a.addedLength), (o += 1);
                }
                if (
                  (r._length &&
                    (r.setXYAt(r.v[p][0], r.v[p][1], 'i', p),
                    r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], 'o', r._length - 1)),
                  m > e.e)
                )
                  break;
                i < u - 1 && ((r = shape_pool.newElement()), (y = !0), d.push(r), (o = 0));
              }
              return d;
            }),
            ShapeModifiers.registerModifier('tm', TrimModifier),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
              (this.getValue = this.processKeys),
                (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
                (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function(t, e) {
              var r = shape_pool.newElement();
              r.c = t.c;
              var i,
                n,
                s,
                a,
                o,
                h,
                l,
                p,
                c,
                f,
                u,
                m,
                d,
                y = t._length,
                g = 0;
              for (i = 0; i < y; i += 1)
                (n = t.v[i]),
                  (a = t.o[i]),
                  (s = t.i[i]),
                  n[0] === a[0] && n[1] === a[1] && n[0] === s[0] && n[1] === s[1]
                    ? (0 !== i && i !== y - 1) || t.c
                      ? ((o = 0 === i ? t.v[y - 1] : t.v[i - 1]),
                        (l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)))
                          ? Math.min(h / 2, e) / h
                          : 0),
                        (p = m = n[0] + (o[0] - n[0]) * l),
                        (c = d = n[1] - (n[1] - o[1]) * l),
                        (f = p - (p - n[0]) * roundCorner),
                        (u = c - (c - n[1]) * roundCorner),
                        r.setTripleAt(p, c, f, u, m, d, g),
                        (g += 1),
                        (o = i === y - 1 ? t.v[0] : t.v[i + 1]),
                        (l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)))
                          ? Math.min(h / 2, e) / h
                          : 0),
                        (p = f = n[0] + (o[0] - n[0]) * l),
                        (c = u = n[1] + (o[1] - n[1]) * l),
                        (m = p - (p - n[0]) * roundCorner),
                        (d = c - (c - n[1]) * roundCorner),
                        r.setTripleAt(p, c, f, u, m, d, g),
                        (g += 1))
                      : (r.setTripleAt(n[0], n[1], a[0], a[1], s[0], s[1], g), (g += 1))
                    : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), (g += 1));
              return r;
            }),
            (RoundCornersModifier.prototype.processShapes = function(t) {
              var e,
                r,
                i,
                n,
                s,
                a,
                o = this.shapes.length,
                h = this.rd.v;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (((s = this.shapes[r]).shape.paths, (a = s.localShapeCollection), s.shape._mdf || this._mdf || t))
                    for (
                      a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, i = 0;
                      i < n;
                      i += 1
                    )
                      a.addShape(this.processPath(e[i], h));
                  s.shape.paths = s.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = !1);
            }),
            ShapeModifiers.registerModifier('rd', RoundCornersModifier),
            extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function(t, e) {
              (this.getValue = this.processKeys),
                (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
                (this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this)),
                (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
                (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
                (this.data = e),
                this.dynamicProperties.length || this.getValue(!0),
                (this._isAnimated = !!this.dynamicProperties.length),
                (this.pMatrix = new Matrix()),
                (this.rMatrix = new Matrix()),
                (this.sMatrix = new Matrix()),
                (this.tMatrix = new Matrix()),
                (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, n, s) {
              var a = s ? -1 : 1,
                o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
                h = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
              t.translate(i.p.v[0] * a * n, i.p.v[1] * a * n, i.p.v[2]),
                e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                e.rotate(-i.r.v * a * n),
                e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
                r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                r.scale(s ? 1 / o : o, s ? 1 / h : h),
                r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function(t, e, r, i) {
              for (
                this.elem = t,
                  this.arr = e,
                  this.pos = r,
                  this.elemsData = i,
                  this._currentCopies = 0,
                  this._elements = [],
                  this._groups = [],
                  this.frameId = -1,
                  this.initDynamicPropertyContainer(t),
                  this.initModifierProperties(t, e[r]);
                r > 0;

              )
                (r -= 1), this._elements.unshift(e[r]);
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function(t) {
              var e,
                r = t.length;
              for (e = 0; e < r; e += 1) (t[e]._processed = !1), 'gr' === t[e].ty && this.resetElements(t[e].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function(t) {
              t.length;
              var e = JSON.parse(JSON.stringify(t));
              return this.resetElements(e), e;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function(t, e) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) (t[r]._render = e), 'gr' === t[r].ty && this.changeGroupRender(t[r].it, e);
            }),
            (RepeaterModifier.prototype.processShapes = function(t) {
              var e, r, i, n, s;
              if (this._mdf || t) {
                var a,
                  o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                  for (; this._groups.length < o; ) {
                    var h = { it: this.cloneElements(this._elements), ty: 'gr' };
                    h.it.push({
                      a: { a: 0, ix: 1, k: [0, 0] },
                      nm: 'Transform',
                      o: { a: 0, ix: 7, k: 100 },
                      p: { a: 0, ix: 2, k: [0, 0] },
                      r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] },
                      s: { a: 0, ix: 3, k: [100, 100] },
                      sa: { a: 0, ix: 5, k: 0 },
                      sk: { a: 0, ix: 4, k: 0 },
                      ty: 'tr'
                    }),
                      this.arr.splice(0, 0, h),
                      this._groups.splice(0, 0, h),
                      (this._currentCopies += 1);
                  }
                  this.elem.reloadShapes();
                }
                for (s = 0, i = 0; i <= this._groups.length - 1; i += 1)
                  (a = s < o), (this._groups[i]._render = a), this.changeGroupRender(this._groups[i].it, a), (s += 1);
                this._currentCopies = o;
                var l = this.o.v,
                  p = l % 1,
                  c = l > 0 ? Math.floor(l) : Math.ceil(l),
                  f = (this.tr.v.props, this.pMatrix.props),
                  u = this.rMatrix.props,
                  m = this.sMatrix.props;
                this.pMatrix.reset(),
                  this.rMatrix.reset(),
                  this.sMatrix.reset(),
                  this.tMatrix.reset(),
                  this.matrix.reset();
                var d,
                  y,
                  g = 0;
                if (l > 0) {
                  for (; g < c; )
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (g += 1);
                  p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), (g += p));
                } else if (l < 0) {
                  for (; g > c; )
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (g -= 1);
                  p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), (g -= p));
                }
                for (
                  i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    n = 1 === this.data.m ? 1 : -1,
                    s = this._currentCopies;
                  s;

                ) {
                  if (
                    ((y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length),
                    (e[e.length - 1].transform.mProps._mdf = !0),
                    (e[e.length - 1].transform.op._mdf = !0),
                    (e[e.length - 1].transform.op.v =
                      this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1))),
                    0 !== g)
                  ) {
                    for (
                      ((0 !== i && 1 === n) || (i !== this._currentCopies - 1 && -1 === n)) &&
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        this.matrix.transform(
                          u[0],
                          u[1],
                          u[2],
                          u[3],
                          u[4],
                          u[5],
                          u[6],
                          u[7],
                          u[8],
                          u[9],
                          u[10],
                          u[11],
                          u[12],
                          u[13],
                          u[14],
                          u[15]
                        ),
                        this.matrix.transform(
                          m[0],
                          m[1],
                          m[2],
                          m[3],
                          m[4],
                          m[5],
                          m[6],
                          m[7],
                          m[8],
                          m[9],
                          m[10],
                          m[11],
                          m[12],
                          m[13],
                          m[14],
                          m[15]
                        ),
                        this.matrix.transform(
                          f[0],
                          f[1],
                          f[2],
                          f[3],
                          f[4],
                          f[5],
                          f[6],
                          f[7],
                          f[8],
                          f[9],
                          f[10],
                          f[11],
                          f[12],
                          f[13],
                          f[14],
                          f[15]
                        ),
                        d = 0;
                      d < y;
                      d += 1
                    )
                      r[d] = this.matrix.props[d];
                    this.matrix.reset();
                  } else for (this.matrix.reset(), d = 0; d < y; d += 1) r[d] = this.matrix.props[d];
                  (g += 1), (s -= 1), (i += n);
                }
              } else
                for (s = this._currentCopies, i = 0, n = 1; s; )
                  (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props),
                    (e[e.length - 1].transform.mProps._mdf = !1),
                    (e[e.length - 1].transform.op._mdf = !1),
                    (s -= 1),
                    (i += n);
            }),
            (RepeaterModifier.prototype.addShape = function() {}),
            ShapeModifiers.registerModifier('rp', RepeaterModifier),
            (ShapeCollection.prototype.addShape = function(t) {
              this._length === this._maxLength &&
                ((this.shapes = this.shapes.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2)),
                (this.shapes[this._length] = t),
                (this._length += 1);
            }),
            (ShapeCollection.prototype.releaseShapes = function() {
              var t;
              for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
              this._length = 0;
            }),
            (DashProperty.prototype.getValue = function(t) {
              if (
                (this.elem.globalData.frameId !== this.frameId || t) &&
                ((this.frameId = this.elem.globalData.frameId),
                this.iterateDynamicProperties(),
                (this._mdf = this._mdf || t),
                this._mdf)
              ) {
                var e = 0,
                  r = this.dataProps.length;
                for ('svg' === this.renderer && (this.dashStr = ''), e = 0; e < r; e += 1)
                  'o' != this.dataProps[e].n
                    ? 'svg' === this.renderer
                      ? (this.dashStr += ' ' + this.dataProps[e].p.v)
                      : (this.dashArray[e] = this.dataProps[e].p.v)
                    : (this.dashoffset[0] = this.dataProps[e].p.v);
              }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            (GradientProperty.prototype.comparePoints = function(t, e) {
              for (var r = 0, i = this.o.length / 2; r < i; ) {
                if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
                r += 1;
              }
              return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function() {
              if (this.o.length / 2 !== this.c.length / 4) return !1;
              if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                  if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                  t += 1;
                }
              else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
              return !0;
            }),
            (GradientProperty.prototype.getValue = function(t) {
              if ((this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || t)) {
                var e,
                  r,
                  i,
                  n = 4 * this.data.p;
                for (e = 0; e < n; e += 1)
                  (r = e % 4 === 0 ? 100 : 255),
                    (i = Math.round(this.prop.v[e] * r)),
                    this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t));
                if (this.o.length)
                  for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1)
                    (r = e % 2 === 0 ? 100 : 1),
                      (i = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e]),
                      this.o[e - 4 * this.data.p] !== i && ((this.o[e - 4 * this.data.p] = i), (this._omdf = !t));
                this._mdf = !t;
              }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty);
          var buildShapeString = function(t, e, r, i) {
              if (0 === e) return '';
              var n,
                s = t.o,
                a = t.i,
                o = t.v,
                h = ' M' + i.applyToPointStringified(o[0][0], o[0][1]);
              for (n = 1; n < e; n += 1)
                h +=
                  ' C' +
                  i.applyToPointStringified(s[n - 1][0], s[n - 1][1]) +
                  ' ' +
                  i.applyToPointStringified(a[n][0], a[n][1]) +
                  ' ' +
                  i.applyToPointStringified(o[n][0], o[n][1]);
              return (
                r &&
                  e &&
                  ((h +=
                    ' C' +
                    i.applyToPointStringified(s[n - 1][0], s[n - 1][1]) +
                    ' ' +
                    i.applyToPointStringified(a[0][0], a[0][1]) +
                    ' ' +
                    i.applyToPointStringified(o[0][0], o[0][1])),
                  (h += 'z')),
                h
              );
            },
            ImagePreloader = (function() {
              var t = (function() {
                var t = createTag('canvas');
                (t.width = 1), (t.height = 1);
                var e = t.getContext('2d');
                return (e.fillStyle = 'rgba(0,0,0,0)'), e.fillRect(0, 0, 1, 1), t;
              })();
              function e() {
                (this.loadedAssets += 1),
                  this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);
              }
              function r(e) {
                var r = (function(t, e, r) {
                    var i = '';
                    if (t.e) i = t.p;
                    else if (e) {
                      var n = t.p;
                      -1 !== n.indexOf('images/') && (n = n.split('/')[1]), (i = e + n);
                    } else (i = r), (i += t.u ? t.u : ''), (i += t.p);
                    return i;
                  })(e, this.assetsPath, this.path),
                  i = createTag('img');
                (i.crossOrigin = 'anonymous'),
                  i.addEventListener('load', this._imageLoaded.bind(this), !1),
                  i.addEventListener(
                    'error',
                    function() {
                      (n.img = t), this._imageLoaded();
                    }.bind(this),
                    !1
                  ),
                  (i.src = r);
                var n = { img: i, assetData: e };
                return n;
              }
              function i(t, e) {
                this.imagesLoadedCb = e;
                var r,
                  i = t.length;
                for (r = 0; r < i; r += 1)
                  t[r].layers || ((this.totalImages += 1), this.images.push(this._createImageData(t[r])));
              }
              function n(t) {
                this.path = t || '';
              }
              function s(t) {
                this.assetsPath = t || '';
              }
              function a(t) {
                for (var e = 0, r = this.images.length; e < r; ) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1;
                }
              }
              function o() {
                (this.imagesLoadedCb = null), (this.images.length = 0);
              }
              function h() {
                return this.totalImages === this.loadedAssets;
              }
              return function() {
                (this.loadAssets = i),
                  (this.setAssetsPath = s),
                  (this.setPath = n),
                  (this.loaded = h),
                  (this.destroy = o),
                  (this.getImage = a),
                  (this._createImageData = r),
                  (this._imageLoaded = e),
                  (this.assetsPath = ''),
                  (this.path = ''),
                  (this.totalImages = 0),
                  (this.loadedAssets = 0),
                  (this.imagesLoadedCb = null),
                  (this.images = []);
              };
            })(),
            featureSupport = (function() {
              var t = { maskType: !0 };
              return (
                (/MSIE 10/i.test(navigator.userAgent) ||
                  /MSIE 9/i.test(navigator.userAgent) ||
                  /rv:11.0/i.test(navigator.userAgent) ||
                  /Edge\/\d./i.test(navigator.userAgent)) &&
                  (t.maskType = !1),
                t
              );
            })(),
            filtersFactory = (function() {
              var t = {
                createFilter: function(t) {
                  var e = createNS('filter');
                  return (
                    e.setAttribute('id', t),
                    e.setAttribute('filterUnits', 'objectBoundingBox'),
                    e.setAttribute('x', '0%'),
                    e.setAttribute('y', '0%'),
                    e.setAttribute('width', '100%'),
                    e.setAttribute('height', '100%'),
                    e
                  );
                },
                createAlphaToLuminanceFilter: function() {
                  var t = createNS('feColorMatrix');
                  return (
                    t.setAttribute('type', 'matrix'),
                    t.setAttribute('color-interpolation-filters', 'sRGB'),
                    t.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'),
                    t
                  );
                }
              };
              return t;
            })(),
            assetLoader = (function() {
              function t(t) {
                return t.response && 'object' === typeof t.response
                  ? t.response
                  : t.response && 'string' === typeof t.response
                  ? JSON.parse(t.response)
                  : t.responseText
                  ? JSON.parse(t.responseText)
                  : void 0;
              }
              return {
                load: function(e, r, i) {
                  var n,
                    s = new XMLHttpRequest();
                  s.open('GET', e, !0);
                  try {
                    s.responseType = 'json';
                  } catch (a) {}
                  s.send(),
                    (s.onreadystatechange = function() {
                      if (4 == s.readyState)
                        if (200 == s.status) (n = t(s)), r(n);
                        else
                          try {
                            (n = t(s)), r(n);
                          } catch (a) {
                            i && i(a);
                          }
                    });
                }
              };
            })();
          function TextAnimatorProperty(t, e, r) {
            (this._isFirstFrame = !0),
              (this._hasMaskedPath = !1),
              (this._frameId = -1),
              (this._textData = t),
              (this._renderType = e),
              (this._elem = r),
              (this._animatorsData = createSizedArray(this._textData.a.length)),
              (this._pathData = {}),
              (this._moreOptions = { alignment: {} }),
              (this.renderedLetters = []),
              (this.lettersChangedFlag = !1),
              this.initDynamicPropertyContainer(r);
          }
          function TextAnimatorDataProperty(t, e, r) {
            var i = { propType: !1 },
              n = PropertyFactory.getProp,
              s = e.a;
            (this.a = {
              r: s.r ? n(t, s.r, 0, degToRads, r) : i,
              rx: s.rx ? n(t, s.rx, 0, degToRads, r) : i,
              ry: s.ry ? n(t, s.ry, 0, degToRads, r) : i,
              sk: s.sk ? n(t, s.sk, 0, degToRads, r) : i,
              sa: s.sa ? n(t, s.sa, 0, degToRads, r) : i,
              s: s.s ? n(t, s.s, 1, 0.01, r) : i,
              a: s.a ? n(t, s.a, 1, 0, r) : i,
              o: s.o ? n(t, s.o, 0, 0.01, r) : i,
              p: s.p ? n(t, s.p, 1, 0, r) : i,
              sw: s.sw ? n(t, s.sw, 0, 0, r) : i,
              sc: s.sc ? n(t, s.sc, 1, 0, r) : i,
              fc: s.fc ? n(t, s.fc, 1, 0, r) : i,
              fh: s.fh ? n(t, s.fh, 0, 0, r) : i,
              fs: s.fs ? n(t, s.fs, 0, 0.01, r) : i,
              fb: s.fb ? n(t, s.fb, 0, 0.01, r) : i,
              t: s.t ? n(t, s.t, 0, 0, r) : i
            }),
              (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
              (this.s.t = e.s.t);
          }
          function LetterProps(t, e, r, i, n, s) {
            (this.o = t),
              (this.sw = e),
              (this.sc = r),
              (this.fc = i),
              (this.m = n),
              (this.p = s),
              (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 });
          }
          function TextProperty(t, e) {
            (this._frameId = initialDefaultFrame),
              (this.pv = ''),
              (this.v = ''),
              (this.kf = !1),
              (this._isFirstFrame = !0),
              (this._mdf = !1),
              (this.data = e),
              (this.elem = t),
              (this.comp = this.elem.comp),
              (this.keysIndex = 0),
              (this.canResize = !1),
              (this.minimumFontSize = 1),
              (this.effectsSequence = []),
              (this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: '',
                fStyle: '',
                fWeight: '',
                fc: '',
                j: '',
                justifyOffset: '',
                l: [],
                lh: 0,
                lineWidths: [],
                ls: '',
                of: '',
                s: '',
                sc: '',
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
              }),
              this.copyData(this.currentData, this.data.d.k[0].s),
              this.searchProperty() || this.completeTextData(this.currentData);
          }
          (TextAnimatorProperty.prototype.searchProperties = function() {
            var t,
              e,
              r = this._textData.a.length,
              i = PropertyFactory.getProp;
            for (t = 0; t < r; t += 1)
              (e = this._textData.a[t]), (this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this));
            this._textData.p && 'm' in this._textData.p
              ? ((this._pathData = {
                  f: i(this._elem, this._textData.p.f, 0, 0, this),
                  l: i(this._elem, this._textData.p.l, 0, 0, this),
                  r: this._textData.p.r,
                  m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }),
                (this._hasMaskedPath = !0))
              : (this._hasMaskedPath = !1),
              (this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this));
          }),
            (TextAnimatorProperty.prototype.getMeasures = function(t, e) {
              if (
                ((this.lettersChangedFlag = e),
                this._mdf || this._isFirstFrame || e || (this._hasMaskedPath && this._pathData.m._mdf))
              ) {
                this._isFirstFrame = !1;
                var r,
                  i,
                  n,
                  s,
                  a,
                  o,
                  h,
                  l,
                  p,
                  c,
                  f,
                  u,
                  m,
                  d,
                  y,
                  g,
                  v,
                  b,
                  E,
                  x = this._moreOptions.alignment.v,
                  S = this._animatorsData,
                  P = this._textData,
                  _ = this.mHelper,
                  C = this._renderType,
                  D = this.renderedLetters.length,
                  k = (this.data, t.l);
                if (this._hasMaskedPath) {
                  if (((E = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                    var A,
                      w = E.v;
                    for (
                      this._pathData.r && (w = w.reverse()),
                        a = { tLength: 0, segments: [] },
                        s = w._length - 1,
                        g = 0,
                        n = 0;
                      n < s;
                      n += 1
                    )
                      (A = bez.buildBezierData(
                        w.v[n],
                        w.v[n + 1],
                        [w.o[n][0] - w.v[n][0], w.o[n][1] - w.v[n][1]],
                        [w.i[n + 1][0] - w.v[n + 1][0], w.i[n + 1][1] - w.v[n + 1][1]]
                      )),
                        (a.tLength += A.segmentLength),
                        a.segments.push(A),
                        (g += A.segmentLength);
                    (n = s),
                      E.v.c &&
                        ((A = bez.buildBezierData(
                          w.v[n],
                          w.v[0],
                          [w.o[n][0] - w.v[n][0], w.o[n][1] - w.v[n][1]],
                          [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]]
                        )),
                        (a.tLength += A.segmentLength),
                        a.segments.push(A),
                        (g += A.segmentLength)),
                      (this._pathData.pi = a);
                  }
                  if (
                    ((a = this._pathData.pi),
                    (o = this._pathData.f.v),
                    (f = 0),
                    (c = 1),
                    (l = 0),
                    (p = !0),
                    (d = a.segments),
                    o < 0 && E.v.c)
                  )
                    for (
                      a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength),
                        c = (m = d[(f = d.length - 1)].points).length - 1;
                      o < 0;

                    )
                      (o += m[c].partialLength), (c -= 1) < 0 && (c = (m = d[(f -= 1)].points).length - 1);
                  (u = (m = d[f].points)[c - 1]), (y = (h = m[c]).partialLength);
                }
                (s = k.length), (r = 0), (i = 0);
                var T,
                  M,
                  F,
                  I,
                  O = 1.2 * t.finalSize * 0.714,
                  V = !0;
                F = S.length;
                var R,
                  B,
                  N,
                  L,
                  j,
                  G,
                  z,
                  H,
                  q,
                  W,
                  Y,
                  U,
                  K,
                  X = -1,
                  Z = o,
                  $ = f,
                  J = c,
                  Q = -1,
                  tt = '',
                  et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                  var rt = 0,
                    it = 0,
                    nt = 2 === t.j ? -0.5 : -1,
                    st = 0,
                    at = !0;
                  for (n = 0; n < s; n += 1)
                    if (k[n].n) {
                      for (rt && (rt += it); st < n; ) (k[st].animatorJustifyOffset = rt), (st += 1);
                      (rt = 0), (at = !0);
                    } else {
                      for (M = 0; M < F; M += 1)
                        (T = S[M].a).t.propType &&
                          (at && 2 === t.j && (it += T.t.v * nt),
                          (R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)).length
                            ? (rt += T.t.v * R[0] * nt)
                            : (rt += T.t.v * R * nt));
                      at = !1;
                    }
                  for (rt && (rt += it); st < n; ) (k[st].animatorJustifyOffset = rt), (st += 1);
                }
                for (n = 0; n < s; n += 1) {
                  if ((_.reset(), (j = 1), k[n].n))
                    (r = 0),
                      (i += t.yOffset),
                      (i += V ? 1 : 0),
                      (o = Z),
                      (V = !1),
                      this._hasMaskedPath &&
                        ((c = J), (u = (m = d[(f = $)].points)[c - 1]), (y = (h = m[c]).partialLength), (l = 0)),
                      (K = W = U = tt = ''),
                      (et = this.defaultPropsArray);
                  else {
                    if (this._hasMaskedPath) {
                      if (Q !== k[n].line) {
                        switch (t.j) {
                          case 1:
                            o += g - t.lineWidths[k[n].line];
                            break;
                          case 2:
                            o += (g - t.lineWidths[k[n].line]) / 2;
                        }
                        Q = k[n].line;
                      }
                      X !== k[n].ind && (k[X] && (o += k[X].extra), (o += k[n].an / 2), (X = k[n].ind)),
                        (o += (x[0] * k[n].an) / 200);
                      var ot = 0;
                      for (M = 0; M < F; M += 1)
                        (T = S[M].a).p.propType &&
                          ((R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)).length
                            ? (ot += T.p.v[0] * R[0])
                            : (ot += T.p.v[0] * R)),
                          T.a.propType &&
                            ((R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)).length
                              ? (ot += T.a.v[0] * R[0])
                              : (ot += T.a.v[0] * R));
                      for (p = !0; p; )
                        l + y >= o + ot || !m
                          ? ((v = (o + ot - l) / h.partialLength),
                            (N = u.point[0] + (h.point[0] - u.point[0]) * v),
                            (L = u.point[1] + (h.point[1] - u.point[1]) * v),
                            _.translate((-x[0] * k[n].an) / 200, (-x[1] * O) / 100),
                            (p = !1))
                          : m &&
                            ((l += h.partialLength),
                            (c += 1) >= m.length &&
                              ((c = 0),
                              d[(f += 1)]
                                ? (m = d[f].points)
                                : E.v.c
                                ? ((c = 0), (m = d[(f = 0)].points))
                                : ((l -= h.partialLength), (m = null))),
                            m && ((u = h), (y = (h = m[c]).partialLength)));
                      (B = k[n].an / 2 - k[n].add), _.translate(-B, 0, 0);
                    } else
                      (B = k[n].an / 2 - k[n].add),
                        _.translate(-B, 0, 0),
                        _.translate((-x[0] * k[n].an) / 200, (-x[1] * O) / 100, 0);
                    for (k[n].l, M = 0; M < F; M += 1)
                      (T = S[M].a).t.propType &&
                        ((R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)),
                        (0 === r && 0 === t.j) ||
                          (this._hasMaskedPath
                            ? R.length
                              ? (o += T.t.v * R[0])
                              : (o += T.t.v * R)
                            : R.length
                            ? (r += T.t.v * R[0])
                            : (r += T.t.v * R)));
                    for (
                      k[n].l,
                        t.strokeWidthAnim && (z = t.sw || 0),
                        t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                        t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]),
                        M = 0;
                      M < F;
                      M += 1
                    )
                      (T = S[M].a).a.propType &&
                        ((R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)).length
                          ? _.translate(-T.a.v[0] * R[0], -T.a.v[1] * R[1], T.a.v[2] * R[2])
                          : _.translate(-T.a.v[0] * R, -T.a.v[1] * R, T.a.v[2] * R));
                    for (M = 0; M < F; M += 1)
                      (T = S[M].a).s.propType &&
                        ((R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)).length
                          ? _.scale(1 + (T.s.v[0] - 1) * R[0], 1 + (T.s.v[1] - 1) * R[1], 1)
                          : _.scale(1 + (T.s.v[0] - 1) * R, 1 + (T.s.v[1] - 1) * R, 1));
                    for (M = 0; M < F; M += 1) {
                      if (
                        ((T = S[M].a),
                        (R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)),
                        T.sk.propType &&
                          (R.length
                            ? _.skewFromAxis(-T.sk.v * R[0], T.sa.v * R[1])
                            : _.skewFromAxis(-T.sk.v * R, T.sa.v * R)),
                        T.r.propType && (R.length ? _.rotateZ(-T.r.v * R[2]) : _.rotateZ(-T.r.v * R)),
                        T.ry.propType && (R.length ? _.rotateY(T.ry.v * R[1]) : _.rotateY(T.ry.v * R)),
                        T.rx.propType && (R.length ? _.rotateX(T.rx.v * R[0]) : _.rotateX(T.rx.v * R)),
                        T.o.propType && (R.length ? (j += (T.o.v * R[0] - j) * R[0]) : (j += (T.o.v * R - j) * R)),
                        t.strokeWidthAnim && T.sw.propType && (R.length ? (z += T.sw.v * R[0]) : (z += T.sw.v * R)),
                        t.strokeColorAnim && T.sc.propType)
                      )
                        for (q = 0; q < 3; q += 1)
                          R.length ? (G[q] = G[q] + (T.sc.v[q] - G[q]) * R[0]) : (G[q] = G[q] + (T.sc.v[q] - G[q]) * R);
                      if (t.fillColorAnim && t.fc) {
                        if (T.fc.propType)
                          for (q = 0; q < 3; q += 1)
                            R.length
                              ? (H[q] = H[q] + (T.fc.v[q] - H[q]) * R[0])
                              : (H[q] = H[q] + (T.fc.v[q] - H[q]) * R);
                        T.fh.propType && (H = R.length ? addHueToRGB(H, T.fh.v * R[0]) : addHueToRGB(H, T.fh.v * R)),
                          T.fs.propType &&
                            (H = R.length ? addSaturationToRGB(H, T.fs.v * R[0]) : addSaturationToRGB(H, T.fs.v * R)),
                          T.fb.propType &&
                            (H = R.length ? addBrightnessToRGB(H, T.fb.v * R[0]) : addBrightnessToRGB(H, T.fb.v * R));
                      }
                    }
                    for (M = 0; M < F; M += 1)
                      (T = S[M].a).p.propType &&
                        ((R = S[M].s.getMult(k[n].anIndexes[M], P.a[M].s.totalChars)),
                        this._hasMaskedPath
                          ? R.length
                            ? _.translate(0, T.p.v[1] * R[0], -T.p.v[2] * R[1])
                            : _.translate(0, T.p.v[1] * R, -T.p.v[2] * R)
                          : R.length
                          ? _.translate(T.p.v[0] * R[0], T.p.v[1] * R[1], -T.p.v[2] * R[2])
                          : _.translate(T.p.v[0] * R, T.p.v[1] * R, -T.p.v[2] * R));
                    if (
                      (t.strokeWidthAnim && (W = z < 0 ? 0 : z),
                      t.strokeColorAnim &&
                        (Y =
                          'rgb(' +
                          Math.round(255 * G[0]) +
                          ',' +
                          Math.round(255 * G[1]) +
                          ',' +
                          Math.round(255 * G[2]) +
                          ')'),
                      t.fillColorAnim &&
                        t.fc &&
                        (U =
                          'rgb(' +
                          Math.round(255 * H[0]) +
                          ',' +
                          Math.round(255 * H[1]) +
                          ',' +
                          Math.round(255 * H[2]) +
                          ')'),
                      this._hasMaskedPath)
                    ) {
                      if ((_.translate(0, -t.ls), _.translate(0, (x[1] * O) / 100 + i, 0), P.p.p)) {
                        b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
                        var ht = (180 * Math.atan(b)) / Math.PI;
                        h.point[0] < u.point[0] && (ht += 180), _.rotate((-ht * Math.PI) / 180);
                      }
                      _.translate(N, L, 0),
                        (o -= (x[0] * k[n].an) / 200),
                        k[n + 1] && X !== k[n + 1].ind && ((o += k[n].an / 2), (o += (t.tr / 1e3) * t.finalSize));
                    } else {
                      switch ((_.translate(r, i, 0), t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j)) {
                        case 1:
                          _.translate(
                            k[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[n].line]),
                            0,
                            0
                          );
                          break;
                        case 2:
                          _.translate(
                            k[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[n].line]) / 2,
                            0,
                            0
                          );
                      }
                      _.translate(0, -t.ls),
                        _.translate(B, 0, 0),
                        _.translate((x[0] * k[n].an) / 200, (x[1] * O) / 100, 0),
                        (r += k[n].l + (t.tr / 1e3) * t.finalSize);
                    }
                    'html' === C
                      ? (tt = _.toCSS())
                      : 'svg' === C
                      ? (tt = _.to2dCSS())
                      : (et = [
                          _.props[0],
                          _.props[1],
                          _.props[2],
                          _.props[3],
                          _.props[4],
                          _.props[5],
                          _.props[6],
                          _.props[7],
                          _.props[8],
                          _.props[9],
                          _.props[10],
                          _.props[11],
                          _.props[12],
                          _.props[13],
                          _.props[14],
                          _.props[15]
                        ]),
                      (K = j);
                  }
                  D <= n
                    ? ((I = new LetterProps(K, W, Y, U, tt, et)),
                      this.renderedLetters.push(I),
                      (D += 1),
                      (this.lettersChangedFlag = !0))
                    : ((I = this.renderedLetters[n]),
                      (this.lettersChangedFlag = I.update(K, W, Y, U, tt, et) || this.lettersChangedFlag));
                }
              }
            }),
            (TextAnimatorProperty.prototype.getValue = function() {
              this._elem.globalData.frameId !== this._frameId &&
                ((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (LetterProps.prototype.update = function(t, e, r, i, n, s) {
              (this._mdf.o = !1),
                (this._mdf.sw = !1),
                (this._mdf.sc = !1),
                (this._mdf.fc = !1),
                (this._mdf.m = !1),
                (this._mdf.p = !1);
              var a = !1;
              return (
                this.o !== t && ((this.o = t), (this._mdf.o = !0), (a = !0)),
                this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (a = !0)),
                this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (a = !0)),
                this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (a = !0)),
                this.m !== n && ((this.m = n), (this._mdf.m = !0), (a = !0)),
                !s.length ||
                  (this.p[0] === s[0] &&
                    this.p[1] === s[1] &&
                    this.p[4] === s[4] &&
                    this.p[5] === s[5] &&
                    this.p[12] === s[12] &&
                    this.p[13] === s[13]) ||
                  ((this.p = s), (this._mdf.p = !0), (a = !0)),
                a
              );
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function(t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              return t;
            }),
            (TextProperty.prototype.setCurrentData = function(t) {
              t.__complete || this.completeTextData(t),
                (this.currentData = t),
                (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth),
                (this._mdf = !0);
            }),
            (TextProperty.prototype.searchProperty = function() {
              return this.searchKeyframes();
            }),
            (TextProperty.prototype.searchKeyframes = function() {
              return (
                (this.kf = this.data.d.k.length > 1),
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
              );
            }),
            (TextProperty.prototype.addEffect = function(t) {
              this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.getValue = function(t) {
              if ((this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                  r = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                  (this.lock = !0), (this._mdf = !1);
                  var i,
                    n = this.effectsSequence.length,
                    s = t || this.data.d.k[this.keysIndex].s;
                  for (i = 0; i < n; i += 1)
                    s =
                      r !== this.keysIndex
                        ? this.effectsSequence[i](s, s.t)
                        : this.effectsSequence[i](this.currentData, s.t);
                  e !== s && this.setCurrentData(s),
                    (this.pv = this.v = this.currentData),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
              }
            }),
            (TextProperty.prototype.getKeyframeValue = function() {
              for (
                var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length;
                r <= i - 1 && (t[r].s, !(r === i - 1 || t[r + 1].t > e));

              )
                r += 1;
              return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
            }),
            (TextProperty.prototype.buildFinalText = function(t) {
              for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], n = 0, s = t.length; n < s; )
                (e = t.charCodeAt(n)),
                  -1 !== r.indexOf(e)
                    ? (i[i.length - 1] += t.charAt(n))
                    : e >= 55296 && e <= 56319 && (e = t.charCodeAt(n + 1)) >= 56320 && e <= 57343
                    ? (i.push(t.substr(n, 2)), ++n)
                    : i.push(t.charAt(n)),
                  (n += 1);
              return i;
            }),
            (TextProperty.prototype.completeTextData = function(t) {
              t.__complete = !0;
              var e,
                r,
                i,
                n,
                s,
                a,
                o,
                h = this.elem.globalData.fontManager,
                l = this.data,
                p = [],
                c = 0,
                f = l.m.g,
                u = 0,
                m = 0,
                d = 0,
                y = [],
                g = 0,
                v = 0,
                b = h.getFontByName(t.f),
                E = 0,
                x = b.fStyle ? b.fStyle.split(' ') : [],
                S = 'normal',
                P = 'normal';
              for (r = x.length, e = 0; e < r; e += 1)
                switch (x[e].toLowerCase()) {
                  case 'italic':
                    P = 'italic';
                    break;
                  case 'bold':
                    S = '700';
                    break;
                  case 'black':
                    S = '900';
                    break;
                  case 'medium':
                    S = '500';
                    break;
                  case 'regular':
                  case 'normal':
                    S = '400';
                    break;
                  case 'light':
                  case 'thin':
                    S = '200';
                }
              (t.fWeight = b.fWeight || S),
                (t.fStyle = P),
                (t.finalSize = t.s),
                (t.finalText = this.buildFinalText(t.t)),
                (r = t.finalText.length),
                (t.finalLineHeight = t.lh);
              var _,
                C = (t.tr / 1e3) * t.finalSize;
              if (t.sz)
                for (var D, k, A = !0, w = t.sz[0], T = t.sz[1]; A; ) {
                  (D = 0), (g = 0), (r = (k = this.buildFinalText(t.t)).length), (C = (t.tr / 1e3) * t.finalSize);
                  var M = -1;
                  for (e = 0; e < r; e += 1)
                    (_ = k[e].charCodeAt(0)),
                      (i = !1),
                      ' ' === k[e]
                        ? (M = e)
                        : (13 !== _ && 3 !== _) || ((g = 0), (i = !0), (D += t.finalLineHeight || 1.2 * t.finalSize)),
                      h.chars
                        ? ((o = h.getCharData(k[e], b.fStyle, b.fFamily)), (E = i ? 0 : (o.w * t.finalSize) / 100))
                        : (E = h.measureText(k[e], t.f, t.finalSize)),
                      g + E > w && ' ' !== k[e]
                        ? (-1 === M ? (r += 1) : (e = M),
                          (D += t.finalLineHeight || 1.2 * t.finalSize),
                          k.splice(e, M === e ? 1 : 0, '\r'),
                          (M = -1),
                          (g = 0))
                        : ((g += E), (g += C));
                  (D += (b.ascent * t.finalSize) / 100),
                    this.canResize && t.finalSize > this.minimumFontSize && T < D
                      ? ((t.finalSize -= 1), (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                      : ((t.finalText = k), (r = t.finalText.length), (A = !1));
                }
              (g = -C), (E = 0);
              var F,
                I = 0;
              for (e = 0; e < r; e += 1)
                if (
                  ((i = !1),
                  (_ = (F = t.finalText[e]).charCodeAt(0)),
                  ' ' === F
                    ? (n = '\xa0')
                    : 13 === _ || 3 === _
                    ? ((I = 0), y.push(g), (v = g > v ? g : v), (g = -2 * C), (n = ''), (i = !0), (d += 1))
                    : (n = t.finalText[e]),
                  h.chars
                    ? ((o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily)),
                      (E = i ? 0 : (o.w * t.finalSize) / 100))
                    : (E = h.measureText(n, t.f, t.finalSize)),
                  ' ' === F ? (I += E + C) : ((g += E + C + I), (I = 0)),
                  p.push({ l: E, an: E, add: u, n: i, anIndexes: [], val: n, line: d, animatorJustifyOffset: 0 }),
                  2 == f)
                ) {
                  if (((u += E), '' === n || '\xa0' === n || e === r - 1)) {
                    for (('' !== n && '\xa0' !== n) || (u -= E); m <= e; )
                      (p[m].an = u), (p[m].ind = c), (p[m].extra = E), (m += 1);
                    (c += 1), (u = 0);
                  }
                } else if (3 == f) {
                  if (((u += E), '' === n || e === r - 1)) {
                    for ('' === n && (u -= E); m <= e; ) (p[m].an = u), (p[m].ind = c), (p[m].extra = E), (m += 1);
                    (u = 0), (c += 1);
                  }
                } else (p[c].ind = c), (p[c].extra = 0), (c += 1);
              if (((t.l = p), (v = g > v ? g : v), y.push(g), t.sz)) (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
              else
                switch (((t.boxWidth = v), t.j)) {
                  case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                  case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                  default:
                    t.justifyOffset = 0;
                }
              t.lineWidths = y;
              var O,
                V,
                R = l.a;
              a = R.length;
              var B,
                N,
                L = [];
              for (s = 0; s < a; s += 1) {
                for (
                  (O = R[s]).a.sc && (t.strokeColorAnim = !0),
                    O.a.sw && (t.strokeWidthAnim = !0),
                    (O.a.fc || O.a.fh || O.a.fs || O.a.fb) && (t.fillColorAnim = !0),
                    N = 0,
                    B = O.s.b,
                    e = 0;
                  e < r;
                  e += 1
                )
                  ((V = p[e]).anIndexes[s] = N),
                    ((1 == B && '' !== V.val) ||
                      (2 == B && '' !== V.val && '\xa0' !== V.val) ||
                      (3 == B && (V.n || '\xa0' == V.val || e == r - 1)) ||
                      (4 == B && (V.n || e == r - 1))) &&
                      (1 === O.s.rn && L.push(N), (N += 1));
                l.a[s].s.totalChars = N;
                var j,
                  G = -1;
                if (1 === O.s.rn)
                  for (e = 0; e < r; e += 1)
                    G != (V = p[e]).anIndexes[s] &&
                      ((G = V.anIndexes[s]), (j = L.splice(Math.floor(Math.random() * L.length), 1)[0])),
                      (V.anIndexes[s] = j);
              }
              (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
                (t.ls = t.ls || 0),
                (t.ascent = (b.ascent * t.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function(t, e) {
              e = void 0 === e ? this.keysIndex : e;
              var r = this.copyData({}, this.data.d.k[e].s);
              (r = this.copyData(r, t)),
                (this.data.d.k[e].s = r),
                this.recalculate(e),
                this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function(t) {
              var e = this.data.d.k[t].s;
              (e.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(e);
            }),
            (TextProperty.prototype.canResizeFont = function(t) {
              (this.canResize = t), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function(t) {
              (this.minimumFontSize = Math.floor(t) || 1),
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this);
            });
          var TextSelectorProp = (function() {
              var t = Math.max,
                e = Math.min,
                r = Math.floor;
              function i(t, e) {
                (this._currentTextLength = -1),
                  (this.k = !1),
                  (this.data = e),
                  (this.elem = t),
                  (this.comp = t.comp),
                  (this.finalS = 0),
                  (this.finalE = 0),
                  this.initDynamicPropertyContainer(t),
                  (this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this)),
                  (this.e = 'e' in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }),
                  (this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this)),
                  (this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this)),
                  (this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this)),
                  (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                  this.dynamicProperties.length || this.getValue();
              }
              return (
                (i.prototype = {
                  getMult: function(i) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0,
                      s = 0,
                      a = 1,
                      o = 1;
                    this.ne.v > 0 ? (n = this.ne.v / 100) : (s = -this.ne.v / 100),
                      this.xe.v > 0 ? (a = 1 - this.xe.v / 100) : (o = 1 + this.xe.v / 100);
                    var h = BezierFactory.getBezierEasing(n, s, a, o).get,
                      l = 0,
                      p = this.finalS,
                      c = this.finalE,
                      f = this.data.sh;
                    if (2 === f)
                      l = h((l = c === p ? (i >= c ? 1 : 0) : t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))));
                    else if (3 === f)
                      l = h((l = c === p ? (i >= c ? 0 : 1) : 1 - t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))));
                    else if (4 === f)
                      c === p
                        ? (l = 0)
                        : (l = t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))) < 0.5
                        ? (l *= 2)
                        : (l = 1 - 2 * (l - 0.5)),
                        (l = h(l));
                    else if (5 === f) {
                      if (c === p) l = 0;
                      else {
                        var u = c - p,
                          m = -u / 2 + (i = e(t(0, i + 0.5 - p), c - p)),
                          d = u / 2;
                        l = Math.sqrt(1 - (m * m) / (d * d));
                      }
                      l = h(l);
                    } else
                      6 === f
                        ? (c === p
                            ? (l = 0)
                            : ((i = e(t(0, i + 0.5 - p), c - p)),
                              (l = (1 + Math.cos(Math.PI + (2 * Math.PI * i) / (c - p))) / 2)),
                          (l = h(l)))
                        : (i >= r(p) && (l = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))), (l = h(l)));
                    return l * this.a.v;
                  },
                  getValue: function(t) {
                    this.iterateDynamicProperties(),
                      (this._mdf = t || this._mdf),
                      (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0),
                      t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                      r = this.o.v / e,
                      i = this.s.v / e + r,
                      n = this.e.v / e + r;
                    if (i > n) {
                      var s = i;
                      (i = n), (n = s);
                    }
                    (this.finalS = i), (this.finalE = n);
                  }
                }),
                extendPrototype([DynamicPropertyContainer], i),
                {
                  getTextSelectorProp: function(t, e, r) {
                    return new i(t, e, r);
                  }
                }
              );
            })(),
            pool_factory = function(t, e, r, i) {
              var n = 0,
                s = t,
                a = createSizedArray(s);
              function o() {
                return n ? a[(n -= 1)] : e();
              }
              return {
                newElement: o,
                release: function(t) {
                  n === s && ((a = pooling.double(a)), (s *= 2)), r && r(t), (a[n] = t), (n += 1);
                }
              };
            },
            pooling = {
              double: function(t) {
                return t.concat(createSizedArray(t.length));
              }
            },
            point_pool = pool_factory(8, function() {
              return createTypedArray('float32', 2);
            }),
            shape_pool = (function() {
              var t = pool_factory(
                4,
                function() {
                  return new ShapePath();
                },
                function(t) {
                  var e,
                    r = t._length;
                  for (e = 0; e < r; e += 1)
                    point_pool.release(t.v[e]),
                      point_pool.release(t.i[e]),
                      point_pool.release(t.o[e]),
                      (t.v[e] = null),
                      (t.i[e] = null),
                      (t.o[e] = null);
                  (t._length = 0), (t.c = !1);
                }
              );
              return (
                (t.clone = function(e) {
                  var r,
                    i = t.newElement(),
                    n = void 0 === e._length ? e.v.length : e._length;
                  for (i.setLength(n), i.c = e.c, r = 0; r < n; r += 1)
                    i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                  return i;
                }),
                t
              );
            })(),
            shapeCollection_pool = (function() {
              var t = {
                  newShapeCollection: function() {
                    return e ? i[(e -= 1)] : new ShapeCollection();
                  },
                  release: function(t) {
                    var n,
                      s = t._length;
                    for (n = 0; n < s; n += 1) shape_pool.release(t.shapes[n]);
                    (t._length = 0), e === r && ((i = pooling.double(i)), (r *= 2)), (i[e] = t), (e += 1);
                  }
                },
                e = 0,
                r = 4,
                i = createSizedArray(r);
              return t;
            })(),
            segments_length_pool = pool_factory(
              8,
              function() {
                return { lengths: [], totalLength: 0 };
              },
              function(t) {
                var e,
                  r = t.lengths.length;
                for (e = 0; e < r; e += 1) bezier_length_pool.release(t.lengths[e]);
                t.lengths.length = 0;
              }
            ),
            bezier_length_pool = pool_factory(8, function() {
              return {
                addedLength: 0,
                percents: createTypedArray('float32', defaultCurveSegments),
                lengths: createTypedArray('float32', defaultCurveSegments)
              };
            });
          function BaseRenderer() {}
          function SVGRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.svgElement = createNS('svg'));
            var r = '';
            if (e && e.title) {
              var i = createNS('title'),
                n = createElementID();
              i.setAttribute('id', n), (i.textContent = e.title), this.svgElement.appendChild(i), (r += n);
            }
            if (e && e.description) {
              var s = createNS('desc'),
                a = createElementID();
              s.setAttribute('id', a), (s.textContent = e.description), this.svgElement.appendChild(s), (r += ' ' + a);
            }
            r && this.svgElement.setAttribute('aria-labelledby', r);
            var o = createNS('defs');
            this.svgElement.appendChild(o);
            var h = createNS('g');
            this.svgElement.appendChild(h),
              (this.layerElement = h),
              (this.renderConfig = {
                preserveAspectRatio: (e && e.preserveAspectRatio) || 'xMidYMid meet',
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                progressiveLoad: (e && e.progressiveLoad) || !1,
                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                viewBoxOnly: (e && e.viewBoxOnly) || !1,
                viewBoxSize: (e && e.viewBoxSize) || !1,
                className: (e && e.className) || '',
                id: (e && e.id) || '',
                focusable: e && e.focusable
              }),
              (this.globalData = { _mdf: !1, frameNum: -1, defs: o, renderConfig: this.renderConfig }),
              (this.elements = []),
              (this.pendingElements = []),
              (this.destroyed = !1),
              (this.rendererType = 'svg');
          }
          function CanvasRenderer(t, e) {
            (this.animationItem = t),
              (this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: (e && e.context) || null,
                progressiveLoad: (e && e.progressiveLoad) || !1,
                preserveAspectRatio: (e && e.preserveAspectRatio) || 'xMidYMid meet',
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                className: (e && e.className) || '',
                id: (e && e.id) || ''
              }),
              (this.renderConfig.dpr = (e && e.dpr) || 1),
              this.animationItem.wrapper && (this.renderConfig.dpr = (e && e.dpr) || window.devicePixelRatio || 1),
              (this.renderedFrame = -1),
              (this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }),
              (this.contextData = new CVContextData()),
              (this.elements = []),
              (this.pendingElements = []),
              (this.transformMat = new Matrix()),
              (this.completeLayers = !1),
              (this.rendererType = 'canvas');
          }
          function HybridRenderer(t, e) {
            (this.animationItem = t),
              (this.layers = null),
              (this.renderedFrame = -1),
              (this.renderConfig = {
                className: (e && e.className) || '',
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
                hideOnTransparent: !e || !1 !== e.hideOnTransparent
              }),
              (this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }),
              (this.pendingElements = []),
              (this.elements = []),
              (this.threeDElements = []),
              (this.destroyed = !1),
              (this.camera = null),
              (this.supports3d = !0),
              (this.rendererType = 'html');
          }
          function MaskElement(t, e, r) {
            (this.data = t),
              (this.element = e),
              (this.globalData = r),
              (this.storedData = []),
              (this.masksProperties = this.data.masksProperties || []),
              (this.maskElement = null);
            var i,
              n = this.globalData.defs,
              s = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(s)), (this.solidPath = '');
            var a,
              o,
              h,
              l,
              p,
              c,
              f,
              u = this.masksProperties,
              m = 0,
              d = [],
              y = createElementID(),
              g = 'clipPath',
              v = 'clip-path';
            for (i = 0; i < s; i++)
              if (
                ((('a' !== u[i].mode && 'n' !== u[i].mode) || u[i].inv || 100 !== u[i].o.k || u[i].o.x) &&
                  ((g = 'mask'), (v = 'mask')),
                ('s' != u[i].mode && 'i' != u[i].mode) || 0 !== m
                  ? (l = null)
                  : ((l = createNS('rect')).setAttribute('fill', '#ffffff'),
                    l.setAttribute('width', this.element.comp.data.w || 0),
                    l.setAttribute('height', this.element.comp.data.h || 0),
                    d.push(l)),
                (a = createNS('path')),
                'n' != u[i].mode)
              ) {
                var b;
                if (
                  ((m += 1),
                  a.setAttribute('fill', 's' === u[i].mode ? '#000000' : '#ffffff'),
                  a.setAttribute('clip-rule', 'nonzero'),
                  0 !== u[i].x.k
                    ? ((g = 'mask'),
                      (v = 'mask'),
                      (f = PropertyFactory.getProp(this.element, u[i].x, 0, null, this.element)),
                      (b = createElementID()),
                      (p = createNS('filter')).setAttribute('id', b),
                      (c = createNS('feMorphology')).setAttribute('operator', 'erode'),
                      c.setAttribute('in', 'SourceGraphic'),
                      c.setAttribute('radius', '0'),
                      p.appendChild(c),
                      n.appendChild(p),
                      a.setAttribute('stroke', 's' === u[i].mode ? '#000000' : '#ffffff'))
                    : ((c = null), (f = null)),
                  (this.storedData[i] = {
                    elem: a,
                    x: f,
                    expan: c,
                    lastPath: '',
                    lastOperator: '',
                    filterId: b,
                    lastRadius: 0
                  }),
                  'i' == u[i].mode)
                ) {
                  h = d.length;
                  var E = createNS('g');
                  for (o = 0; o < h; o += 1) E.appendChild(d[o]);
                  var x = createNS('mask');
                  x.setAttribute('mask-type', 'alpha'),
                    x.setAttribute('id', y + '_' + m),
                    x.appendChild(a),
                    n.appendChild(x),
                    E.setAttribute('mask', 'url(' + locationHref + '#' + y + '_' + m + ')'),
                    (d.length = 0),
                    d.push(E);
                } else d.push(a);
                u[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                  (this.viewData[i] = {
                    elem: a,
                    lastPath: '',
                    op: PropertyFactory.getProp(this.element, u[i].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                    invRect: l
                  }),
                  this.viewData[i].prop.k || this.drawPath(u[i], this.viewData[i].prop.v, this.viewData[i]);
              } else
                (this.viewData[i] = {
                  op: PropertyFactory.getProp(this.element, u[i].o, 0, 0.01, this.element),
                  prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                  elem: a,
                  lastPath: ''
                }),
                  n.appendChild(a);
            for (this.maskElement = createNS(g), s = d.length, i = 0; i < s; i += 1) this.maskElement.appendChild(d[i]);
            m > 0 &&
              (this.maskElement.setAttribute('id', y),
              this.element.maskedElement.setAttribute(v, 'url(' + locationHref + '#' + y + ')'),
              n.appendChild(this.maskElement)),
              this.viewData.length && this.element.addRenderableComponent(this);
          }
          function HierarchyElement() {}
          function FrameElement() {}
          function TransformElement() {}
          function RenderableElement() {}
          function RenderableDOMElement() {}
          function ProcessedElement(t, e) {
            (this.elem = t), (this.pos = e);
          }
          function SVGStyleData(t, e) {
            (this.data = t),
              (this.type = t.ty),
              (this.d = ''),
              (this.lvl = e),
              (this._mdf = !1),
              (this.closed = !0 === t.hd),
              (this.pElem = createNS('path')),
              (this.msElem = null);
          }
          function SVGShapeData(t, e, r) {
            (this.caches = []),
              (this.styles = []),
              (this.transformers = t),
              (this.lStr = ''),
              (this.sh = r),
              (this.lvl = e),
              (this._isAnimated = !!r.k);
            for (var i = 0, n = t.length; i < n; ) {
              if (t[i].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
              }
              i += 1;
            }
          }
          function SVGTransformData(t, e, r) {
            (this.transform = { mProps: t, op: e, container: r }),
              (this.elements = []),
              (this._isAnimated =
                this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length);
          }
          function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = r),
              (this._isAnimated = !!this._isAnimated);
          }
          function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
              (this.style = r);
          }
          function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              this.initGradientData(t, e, r);
          }
          function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t),
              (this.getValue = this.iterateDynamicProperties),
              (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
              (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
              this.initGradientData(t, e, r),
              (this._isAnimated = !!this._isAnimated);
          }
          function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS('g'));
          }
          (BaseRenderer.prototype.checkLayers = function(t) {
            var e,
              r,
              i = this.layers.length;
            for (this.completeLayers = !0, e = i - 1; e >= 0; e--)
              this.elements[e] ||
                ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                  r.op - r.st > t - this.layers[e].st &&
                  this.buildItem(e)),
                (this.completeLayers = !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
          }),
            (BaseRenderer.prototype.createItem = function(t) {
              switch (t.ty) {
                case 2:
                  return this.createImage(t);
                case 0:
                  return this.createComp(t);
                case 1:
                  return this.createSolid(t);
                case 3:
                  return this.createNull(t);
                case 4:
                  return this.createShape(t);
                case 5:
                  return this.createText(t);
                case 13:
                  return this.createCamera(t);
              }
              return this.createNull(t);
            }),
            (BaseRenderer.prototype.createCamera = function() {
              throw new Error("You're using a 3d camera. Try the html renderer.");
            }),
            (BaseRenderer.prototype.buildAllItems = function() {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1) this.buildItem(t);
              this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function(t) {
              this.completeLayers = !1;
              var e,
                r,
                i = t.length,
                n = this.layers.length;
              for (e = 0; e < i; e += 1)
                for (r = 0; r < n; ) {
                  if (this.layers[r].id == t[e].id) {
                    this.layers[r] = t[e];
                    break;
                  }
                  r += 1;
                }
            }),
            (BaseRenderer.prototype.setProjectInterface = function(t) {
              this.globalData.projectInterface = t;
            }),
            (BaseRenderer.prototype.initItems = function() {
              this.globalData.progressiveLoad || this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
              for (var i = this.elements, n = this.layers, s = 0, a = n.length; s < a; )
                n[s].ind == e &&
                  (i[s] && !0 !== i[s]
                    ? (r.push(i[s]),
                      i[s].setAsParent(),
                      void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, r) : t.setHierarchy(r))
                    : (this.buildItem(s), this.addPendingElement(t))),
                  (s += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function(t) {
              this.pendingElements.push(t);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function(t) {
              var e,
                r = t.length;
              for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                  var i = this.createComp(t[e]);
                  i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
                }
            }),
            (BaseRenderer.prototype.setupGlobalData = function(t, e) {
              (this.globalData.fontManager = new FontManager()),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                (this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem)),
                (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem)),
                (this.globalData.imageLoader = this.animationItem.imagePreloader),
                (this.globalData.frameId = 0),
                (this.globalData.frameRate = t.fr),
                (this.globalData.nm = t.nm),
                (this.globalData.compSize = { w: t.w, h: t.h });
            }),
            extendPrototype([BaseRenderer], SVGRenderer),
            (SVGRenderer.prototype.createNull = function(t) {
              return new NullElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createShape = function(t) {
              return new SVGShapeElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createText = function(t) {
              return new SVGTextElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createImage = function(t) {
              return new IImageElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createComp = function(t) {
              return new SVGCompElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.createSolid = function(t) {
              return new ISolidElement(t, this.globalData, this);
            }),
            (SVGRenderer.prototype.configAnimation = function(t) {
              this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
                this.renderConfig.viewBoxSize
                  ? this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize)
                  : this.svgElement.setAttribute('viewBox', '0 0 ' + t.w + ' ' + t.h),
                this.renderConfig.viewBoxOnly ||
                  (this.svgElement.setAttribute('width', t.w),
                  this.svgElement.setAttribute('height', t.h),
                  (this.svgElement.style.width = '100%'),
                  (this.svgElement.style.height = '100%'),
                  (this.svgElement.style.transform = 'translate3d(0,0,0)')),
                this.renderConfig.className && this.svgElement.setAttribute('class', this.renderConfig.className),
                this.renderConfig.id && this.svgElement.setAttribute('id', this.renderConfig.id),
                void 0 !== this.renderConfig.focusable &&
                  this.svgElement.setAttribute('focusable', this.renderConfig.focusable),
                this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio),
                this.animationItem.wrapper.appendChild(this.svgElement);
              var e = this.globalData.defs;
              this.setupGlobalData(t, e),
                (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                (this.data = t);
              var r = createNS('clipPath'),
                i = createNS('rect');
              i.setAttribute('width', t.w),
                i.setAttribute('height', t.h),
                i.setAttribute('x', 0),
                i.setAttribute('y', 0);
              var n = createElementID();
              r.setAttribute('id', n),
                r.appendChild(i),
                this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + n + ')'),
                e.appendChild(r),
                (this.layers = t.layers),
                (this.elements = createSizedArray(t.layers.length));
            }),
            (SVGRenderer.prototype.destroy = function() {
              (this.animationItem.wrapper.innerHTML = ''), (this.layerElement = null), (this.globalData.defs = null);
              var t,
                e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (SVGRenderer.prototype.updateContainerSize = function() {}),
            (SVGRenderer.prototype.buildItem = function(t) {
              var e = this.elements;
              if (!e[t] && 99 != this.layers[t].ty) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                (e[t] = r),
                  expressionsPlugin &&
                    (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r),
                    r.initExpressions()),
                  this.appendElementInPos(r, t),
                  this.layers[t].tt &&
                    (this.elements[t - 1] && !0 !== this.elements[t - 1]
                      ? r.setMatte(e[t - 1].layerId)
                      : (this.buildItem(t - 1), this.addPendingElement(r)));
              }
            }),
            (SVGRenderer.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if ((t.checkParenting(), t.data.tt))
                  for (var e = 0, r = this.elements.length; e < r; ) {
                    if (this.elements[e] === t) {
                      t.setMatte(this.elements[e - 1].layerId);
                      break;
                    }
                    e += 1;
                  }
              }
            }),
            (SVGRenderer.prototype.renderFrame = function(t) {
              if (this.renderedFrame !== t && !this.destroyed) {
                null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
                  (this.globalData.frameNum = t),
                  (this.globalData.frameId += 1),
                  (this.globalData.projectInterface.currentFrame = t),
                  (this.globalData._mdf = !1);
                var e,
                  r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e--)
                  (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                  for (e = 0; e < r; e += 1)
                    (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
              }
            }),
            (SVGRenderer.prototype.appendElementInPos = function(t, e) {
              var r = t.getBaseElement();
              if (r) {
                for (var i, n = 0; n < e; )
                  this.elements[n] &&
                    !0 !== this.elements[n] &&
                    this.elements[n].getBaseElement() &&
                    (i = this.elements[n].getBaseElement()),
                    (n += 1);
                i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
              }
            }),
            (SVGRenderer.prototype.hide = function() {
              this.layerElement.style.display = 'none';
            }),
            (SVGRenderer.prototype.show = function() {
              this.layerElement.style.display = 'block';
            }),
            extendPrototype([BaseRenderer], CanvasRenderer),
            (CanvasRenderer.prototype.createShape = function(t) {
              return new CVShapeElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createText = function(t) {
              return new CVTextElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createImage = function(t) {
              return new CVImageElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createComp = function(t) {
              return new CVCompElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createSolid = function(t) {
              return new CVSolidElement(t, this.globalData, this);
            }),
            (CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull),
            (CanvasRenderer.prototype.ctxTransform = function(t) {
              if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                  this.transformMat.cloneFromProps(t);
                  var e = this.contextData.cTr.props;
                  this.transformMat.transform(
                    e[0],
                    e[1],
                    e[2],
                    e[3],
                    e[4],
                    e[5],
                    e[6],
                    e[7],
                    e[8],
                    e[9],
                    e[10],
                    e[11],
                    e[12],
                    e[13],
                    e[14],
                    e[15]
                  ),
                    this.contextData.cTr.cloneFromProps(this.transformMat.props);
                  var r = this.contextData.cTr.props;
                  this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
            }),
            (CanvasRenderer.prototype.ctxOpacity = function(t) {
              if (!this.renderConfig.clearCanvas)
                return (
                  (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                  void (this.globalData.currentGlobalAlpha = this.contextData.cO)
                );
              (this.contextData.cO *= t < 0 ? 0 : t),
                this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                  ((this.canvasContext.globalAlpha = this.contextData.cO),
                  (this.globalData.currentGlobalAlpha = this.contextData.cO));
            }),
            (CanvasRenderer.prototype.reset = function() {
              this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.save = function(t) {
              if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var r,
                  i = this.contextData.saved[this.contextData.cArrPos];
                for (r = 0; r < 16; r += 1) i[r] = e[r];
                (this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO),
                  (this.contextData.cArrPos += 1);
              } else this.canvasContext.save();
            }),
            (CanvasRenderer.prototype.restore = function(t) {
              if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), (this.globalData.blendMode = 'source-over')),
                  (this.contextData.cArrPos -= 1);
                var e,
                  r = this.contextData.saved[this.contextData.cArrPos],
                  i = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) i[e] = r[e];
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
                  (r = this.contextData.savedOp[this.contextData.cArrPos]),
                  (this.contextData.cO = r),
                  this.globalData.currentGlobalAlpha !== r &&
                    ((this.canvasContext.globalAlpha = r), (this.globalData.currentGlobalAlpha = r));
              } else this.canvasContext.restore();
            }),
            (CanvasRenderer.prototype.configAnimation = function(t) {
              this.animationItem.wrapper
                ? ((this.animationItem.container = createTag('canvas')),
                  (this.animationItem.container.style.width = '100%'),
                  (this.animationItem.container.style.height = '100%'),
                  (this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style[
                    '-webkit-transform'
                  ] = '0px 0px 0px'),
                  this.animationItem.wrapper.appendChild(this.animationItem.container),
                  (this.canvasContext = this.animationItem.container.getContext('2d')),
                  this.renderConfig.className &&
                    this.animationItem.container.setAttribute('class', this.renderConfig.className),
                  this.renderConfig.id && this.animationItem.container.setAttribute('id', this.renderConfig.id))
                : (this.canvasContext = this.renderConfig.context),
                (this.data = t),
                (this.layers = t.layers),
                (this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }),
                this.setupGlobalData(t, document.body),
                (this.globalData.canvasContext = this.canvasContext),
                (this.globalData.renderer = this),
                (this.globalData.isDashed = !1),
                (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                (this.globalData.transformCanvas = this.transformCanvas),
                (this.elements = createSizedArray(t.layers.length)),
                this.updateContainerSize();
            }),
            (CanvasRenderer.prototype.updateContainerSize = function() {
              var t, e, r, i;
              if (
                (this.reset(),
                this.animationItem.wrapper && this.animationItem.container
                  ? ((t = this.animationItem.wrapper.offsetWidth),
                    (e = this.animationItem.wrapper.offsetHeight),
                    this.animationItem.container.setAttribute('width', t * this.renderConfig.dpr),
                    this.animationItem.container.setAttribute('height', e * this.renderConfig.dpr))
                  : ((t = this.canvasContext.canvas.width * this.renderConfig.dpr),
                    (e = this.canvasContext.canvas.height * this.renderConfig.dpr)),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') ||
                  -1 !== this.renderConfig.preserveAspectRatio.indexOf('slice'))
              ) {
                var n = this.renderConfig.preserveAspectRatio.split(' '),
                  s = n[1] || 'meet',
                  a = n[0] || 'xMidYMid',
                  o = a.substr(0, 4),
                  h = a.substr(4);
                (r = t / e),
                  ((i = this.transformCanvas.w / this.transformCanvas.h) > r && 'meet' === s) ||
                  (i < r && 'slice' === s)
                    ? ((this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr)),
                      (this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)))
                    : ((this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                      (this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr))),
                  (this.transformCanvas.tx =
                    'xMid' === o && ((i < r && 'meet' === s) || (i > r && 'slice' === s))
                      ? ((t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2) * this.renderConfig.dpr
                      : 'xMax' === o && ((i < r && 'meet' === s) || (i > r && 'slice' === s))
                      ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr
                      : 0),
                  (this.transformCanvas.ty =
                    'YMid' === h && ((i > r && 'meet' === s) || (i < r && 'slice' === s))
                      ? ((e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2) * this.renderConfig.dpr
                      : 'YMax' === h && ((i > r && 'meet' === s) || (i < r && 'slice' === s))
                      ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr
                      : 0);
              } else
                'none' == this.renderConfig.preserveAspectRatio
                  ? ((this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.tx = 0),
                    (this.transformCanvas.ty = 0))
                  : ((this.transformCanvas.sx = this.renderConfig.dpr),
                    (this.transformCanvas.sy = this.renderConfig.dpr),
                    (this.transformCanvas.tx = 0),
                    (this.transformCanvas.ty = 0));
              (this.transformCanvas.props = [
                this.transformCanvas.sx,
                0,
                0,
                0,
                0,
                this.transformCanvas.sy,
                0,
                0,
                0,
                0,
                1,
                0,
                this.transformCanvas.tx,
                this.transformCanvas.ty,
                0,
                1
              ]),
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRenderer.prototype.destroy = function() {
              var t;
              for (
                this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ''),
                  t = (this.layers ? this.layers.length : 0) - 1;
                t >= 0;
                t -= 1
              )
                this.elements[t] && this.elements[t].destroy();
              (this.elements.length = 0),
                (this.globalData.canvasContext = null),
                (this.animationItem.container = null),
                (this.destroyed = !0);
            }),
            (CanvasRenderer.prototype.renderFrame = function(t, e) {
              if (
                (this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) &&
                !this.destroyed &&
                -1 !== t
              ) {
                (this.renderedFrame = t),
                  (this.globalData.frameNum = t - this.animationItem._isFirstFrame),
                  (this.globalData.frameId += 1),
                  (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                  (this.globalData.projectInterface.currentFrame = t);
                var r,
                  i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r++)
                  (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                  for (
                    !0 === this.renderConfig.clearCanvas
                      ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h)
                      : this.save(),
                      r = i - 1;
                    r >= 0;
                    r -= 1
                  )
                    (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                  !0 !== this.renderConfig.clearCanvas && this.restore();
                }
              }
            }),
            (CanvasRenderer.prototype.buildItem = function(t) {
              var e = this.elements;
              if (!e[t] && 99 != this.layers[t].ty) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                (e[t] = r), r.initExpressions();
              }
            }),
            (CanvasRenderer.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (CanvasRenderer.prototype.hide = function() {
              this.animationItem.container.style.display = 'none';
            }),
            (CanvasRenderer.prototype.show = function() {
              this.animationItem.container.style.display = 'block';
            }),
            extendPrototype([BaseRenderer], HybridRenderer),
            (HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem),
            (HybridRenderer.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (HybridRenderer.prototype.appendElementInPos = function(t, e) {
              var r = t.getBaseElement();
              if (r) {
                var i = this.layers[e];
                if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                else if (this.threeDElements) this.addTo3dContainer(r, e);
                else {
                  for (var n, s, a = 0; a < e; )
                    this.elements[a] &&
                      !0 !== this.elements[a] &&
                      this.elements[a].getBaseElement &&
                      ((s = this.elements[a]),
                      (n = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || n)),
                      (a += 1);
                  n
                    ? (i.ddd && this.supports3d) || this.layerElement.insertBefore(r, n)
                    : (i.ddd && this.supports3d) || this.layerElement.appendChild(r);
                }
              }
            }),
            (HybridRenderer.prototype.createShape = function(t) {
              return this.supports3d
                ? new HShapeElement(t, this.globalData, this)
                : new SVGShapeElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createText = function(t) {
              return this.supports3d
                ? new HTextElement(t, this.globalData, this)
                : new SVGTextElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createCamera = function(t) {
              return (this.camera = new HCameraElement(t, this.globalData, this)), this.camera;
            }),
            (HybridRenderer.prototype.createImage = function(t) {
              return this.supports3d
                ? new HImageElement(t, this.globalData, this)
                : new IImageElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createComp = function(t) {
              return this.supports3d
                ? new HCompElement(t, this.globalData, this)
                : new SVGCompElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createSolid = function(t) {
              return this.supports3d
                ? new HSolidElement(t, this.globalData, this)
                : new ISolidElement(t, this.globalData, this);
            }),
            (HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull),
            (HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
              for (var e = 0, r = this.threeDElements.length; e < r; ) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                  return this.threeDElements[e].perspectiveElem;
                e += 1;
              }
            }),
            (HybridRenderer.prototype.createThreeDContainer = function(t, e) {
              var r = createTag('div');
              styleDiv(r);
              var i = createTag('div');
              styleDiv(i),
                '3d' === e &&
                  ((r.style.width = this.globalData.compSize.w + 'px'),
                  (r.style.height = this.globalData.compSize.h + 'px'),
                  (r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = '50% 50%'),
                  (i.style.transform = i.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)')),
                r.appendChild(i);
              var n = { container: i, perspectiveElem: r, startPos: t, endPos: t, type: e };
              return this.threeDElements.push(n), n;
            }),
            (HybridRenderer.prototype.build3dContainers = function() {
              var t,
                e,
                r = this.layers.length,
                i = '';
              for (t = 0; t < r; t += 1)
                this.layers[t].ddd && 3 !== this.layers[t].ty
                  ? ('3d' !== i && ((i = '3d'), (e = this.createThreeDContainer(t, '3d'))),
                    (e.endPos = Math.max(e.endPos, t)))
                  : ('2d' !== i && ((i = '2d'), (e = this.createThreeDContainer(t, '2d'))),
                    (e.endPos = Math.max(e.endPos, t)));
              for (t = (r = this.threeDElements.length) - 1; t >= 0; t--)
                this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
            }),
            (HybridRenderer.prototype.addTo3dContainer = function(t, e) {
              for (var r = 0, i = this.threeDElements.length; r < i; ) {
                if (e <= this.threeDElements[r].endPos) {
                  for (var n, s = this.threeDElements[r].startPos; s < e; )
                    this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()),
                      (s += 1);
                  n
                    ? this.threeDElements[r].container.insertBefore(t, n)
                    : this.threeDElements[r].container.appendChild(t);
                  break;
                }
                r += 1;
              }
            }),
            (HybridRenderer.prototype.configAnimation = function(t) {
              var e = createTag('div'),
                r = this.animationItem.wrapper;
              (e.style.width = t.w + 'px'),
                (e.style.height = t.h + 'px'),
                (this.resizerElem = e),
                styleDiv(e),
                (e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = 'flat'),
                this.renderConfig.className && e.setAttribute('class', this.renderConfig.className),
                r.appendChild(e),
                (e.style.overflow = 'hidden');
              var i = createNS('svg');
              i.setAttribute('width', '1'), i.setAttribute('height', '1'), styleDiv(i), this.resizerElem.appendChild(i);
              var n = createNS('defs');
              i.appendChild(n),
                (this.data = t),
                this.setupGlobalData(t, i),
                (this.globalData.defs = n),
                (this.layers = t.layers),
                (this.layerElement = this.resizerElem),
                this.build3dContainers(),
                this.updateContainerSize();
            }),
            (HybridRenderer.prototype.destroy = function() {
              (this.animationItem.wrapper.innerHTML = ''),
                (this.animationItem.container = null),
                (this.globalData.defs = null);
              var t,
                e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t++) this.elements[t].destroy();
              (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (HybridRenderer.prototype.updateContainerSize = function() {
              var t,
                e,
                r,
                i,
                n = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight,
                a = n / s;
              this.globalData.compSize.w / this.globalData.compSize.h > a
                ? ((t = n / this.globalData.compSize.w),
                  (e = n / this.globalData.compSize.w),
                  (r = 0),
                  (i = (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2))
                : ((t = s / this.globalData.compSize.h),
                  (e = s / this.globalData.compSize.h),
                  (r = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2),
                  (i = 0)),
                (this.resizerElem.style.transform = this.resizerElem.style.webkitTransform =
                  'matrix3d(' + t + ',0,0,0,0,' + e + ',0,0,0,0,1,0,' + r + ',' + i + ',0,1)');
            }),
            (HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame),
            (HybridRenderer.prototype.hide = function() {
              this.resizerElem.style.display = 'none';
            }),
            (HybridRenderer.prototype.show = function() {
              this.resizerElem.style.display = 'block';
            }),
            (HybridRenderer.prototype.initItems = function() {
              if ((this.buildAllItems(), this.camera)) this.camera.setup();
              else {
                var t,
                  e = this.globalData.compSize.w,
                  r = this.globalData.compSize.h,
                  i = this.threeDElements.length;
                for (t = 0; t < i; t += 1)
                  this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[
                    t
                  ].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + 'px';
              }
            }),
            (HybridRenderer.prototype.searchExtraCompositions = function(t) {
              var e,
                r = t.length,
                i = createTag('div');
              for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                  var n = this.createComp(t[e], i, this.globalData.comp, null);
                  n.initExpressions(), this.globalData.projectInterface.registerComposition(n);
                }
            }),
            (MaskElement.prototype.getMaskProperty = function(t) {
              return this.viewData[t].prop;
            }),
            (MaskElement.prototype.renderFrame = function(t) {
              var e,
                r = this.element.finalTransform.mat,
                i = this.masksProperties.length;
              for (e = 0; e < i; e++)
                if (
                  ((this.viewData[e].prop._mdf || t) &&
                    this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                  (this.viewData[e].op._mdf || t) &&
                    this.viewData[e].elem.setAttribute('fill-opacity', this.viewData[e].op.v),
                  'n' !== this.masksProperties[e].mode &&
                    (this.viewData[e].invRect &&
                      (this.element.finalTransform.mProp._mdf || t) &&
                      this.viewData[e].invRect.setAttribute('transform', r.getInverseMatrix().to2dCSS()),
                    this.storedData[e].x && (this.storedData[e].x._mdf || t)))
                ) {
                  var n = this.storedData[e].expan;
                  this.storedData[e].x.v < 0
                    ? ('erode' !== this.storedData[e].lastOperator &&
                        ((this.storedData[e].lastOperator = 'erode'),
                        this.storedData[e].elem.setAttribute(
                          'filter',
                          'url(' + locationHref + '#' + this.storedData[e].filterId + ')'
                        )),
                      n.setAttribute('radius', -this.storedData[e].x.v))
                    : ('dilate' !== this.storedData[e].lastOperator &&
                        ((this.storedData[e].lastOperator = 'dilate'),
                        this.storedData[e].elem.setAttribute('filter', null)),
                      this.storedData[e].elem.setAttribute('stroke-width', 2 * this.storedData[e].x.v));
                }
            }),
            (MaskElement.prototype.getMaskelement = function() {
              return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function() {
              var t = 'M0,0 ';
              return (
                (t += ' h' + this.globalData.compSize.w),
                (t += ' v' + this.globalData.compSize.h),
                (t += ' h-' + this.globalData.compSize.w),
                (t += ' v-' + this.globalData.compSize.h + ' ')
              );
            }),
            (MaskElement.prototype.drawPath = function(t, e, r) {
              var i,
                n,
                s = ' M' + e.v[0][0] + ',' + e.v[0][1];
              for (n = e._length, i = 1; i < n; i += 1)
                s +=
                  ' C' +
                  e.o[i - 1][0] +
                  ',' +
                  e.o[i - 1][1] +
                  ' ' +
                  e.i[i][0] +
                  ',' +
                  e.i[i][1] +
                  ' ' +
                  e.v[i][0] +
                  ',' +
                  e.v[i][1];
              if (
                (e.c &&
                  n > 1 &&
                  (s +=
                    ' C' +
                    e.o[i - 1][0] +
                    ',' +
                    e.o[i - 1][1] +
                    ' ' +
                    e.i[0][0] +
                    ',' +
                    e.i[0][1] +
                    ' ' +
                    e.v[0][0] +
                    ',' +
                    e.v[0][1]),
                r.lastPath !== s)
              ) {
                var a = '';
                r.elem && (e.c && (a = t.inv ? this.solidPath + s : s), r.elem.setAttribute('d', a)), (r.lastPath = s);
              }
            }),
            (MaskElement.prototype.destroy = function() {
              (this.element = null),
                (this.globalData = null),
                (this.maskElement = null),
                (this.data = null),
                (this.masksProperties = null);
            }),
            (HierarchyElement.prototype = {
              initHierarchy: function() {
                (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
              },
              setHierarchy: function(t) {
                this.hierarchy = t;
              },
              setAsParent: function() {
                this._isParent = !0;
              },
              checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
              }
            }),
            (FrameElement.prototype = {
              initFrame: function() {
                (this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
              },
              prepareProperties: function(t, e) {
                var r,
                  i = this.dynamicProperties.length;
                for (r = 0; r < i; r += 1)
                  (e || (this._isParent && 'transform' === this.dynamicProperties[r].propType)) &&
                    (this.dynamicProperties[r].getValue(),
                    this.dynamicProperties[r]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
              },
              addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
              }
            }),
            (TransformElement.prototype = {
              initTransform: function() {
                (this.finalTransform = {
                  mProp: this.data.ks
                    ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this)
                    : { o: 0 },
                  _matMdf: !1,
                  _opMdf: !1,
                  mat: new Matrix()
                }),
                  this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                  this.data.ty;
              },
              renderTransform: function() {
                if (
                  ((this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                  (this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame),
                  this.hierarchy)
                ) {
                  var t,
                    e = this.finalTransform.mat,
                    r = 0,
                    i = this.hierarchy.length;
                  if (!this.finalTransform._matMdf)
                    for (; r < i; ) {
                      if (this.hierarchy[r].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = !0;
                        break;
                      }
                      r += 1;
                    }
                  if (this.finalTransform._matMdf)
                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)
                      (t = this.hierarchy[r].finalTransform.mProp.v.props),
                        e.transform(
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7],
                          t[8],
                          t[9],
                          t[10],
                          t[11],
                          t[12],
                          t[13],
                          t[14],
                          t[15]
                        );
                }
              },
              globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var r = !0, i = this.comp; r; )
                  i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), (i = i.comp)) : (r = !1);
                var n,
                  s,
                  a = e.length;
                for (n = 0; n < a; n += 1)
                  (s = e[n].mat.applyToPointArray(0, 0, 0)), (t = [t[0] - s[0], t[1] - s[1], 0]);
                return t;
              },
              mHelper: new Matrix()
            }),
            (RenderableElement.prototype = {
              initRenderable: function() {
                (this.isInRange = !1), (this.hidden = !1), (this.isTransparent = !1), (this.renderableComponents = []);
              },
              addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
              },
              removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) &&
                  this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
              },
              prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t);
              },
              checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0
                  ? !this.isTransparent &&
                    this.globalData.renderConfig.hideOnTransparent &&
                    ((this.isTransparent = !0), this.hide())
                  : this.isTransparent && ((this.isTransparent = !1), this.show());
              },
              checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
                  ? !0 !== this.isInRange &&
                    ((this.globalData._mdf = !0), (this._mdf = !0), (this.isInRange = !0), this.show())
                  : !1 !== this.isInRange && ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
              },
              renderRenderable: function() {
                var t,
                  e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame);
              },
              sourceRectAtTime: function() {
                return { top: 0, left: 0, width: 100, height: 100 };
              },
              getLayerSize: function() {
                return 5 === this.data.ty
                  ? { w: this.data.textData.width, h: this.data.textData.height }
                  : { w: this.data.width, h: this.data.height };
              }
            }),
            extendPrototype(
              [
                RenderableElement,
                createProxyFunction({
                  initElement: function(t, e, r) {
                    this.initFrame(),
                      this.initBaseData(t, e, r),
                      this.initTransform(t, e, r),
                      this.initHierarchy(),
                      this.initRenderable(),
                      this.initRendererElement(),
                      this.createContainerElements(),
                      this.createRenderableComponents(),
                      this.createContent(),
                      this.hide();
                  },
                  hide: function() {
                    this.hidden ||
                      (this.isInRange && !this.isTransparent) ||
                      (((this.baseElement || this.layerElement).style.display = 'none'), (this.hidden = !0));
                  },
                  show: function() {
                    this.isInRange &&
                      !this.isTransparent &&
                      (this.data.hd || ((this.baseElement || this.layerElement).style.display = 'block'),
                      (this.hidden = !1),
                      (this._isFirstFrame = !0));
                  },
                  renderFrame: function() {
                    this.data.hd ||
                      this.hidden ||
                      (this.renderTransform(),
                      this.renderRenderable(),
                      this.renderElement(),
                      this.renderInnerContent(),
                      this._isFirstFrame && (this._isFirstFrame = !1));
                  },
                  renderInnerContent: function() {},
                  prepareFrame: function(t) {
                    (this._mdf = !1),
                      this.prepareRenderableFrame(t),
                      this.prepareProperties(t, this.isInRange),
                      this.checkTransparency();
                  },
                  destroy: function() {
                    (this.innerElem = null), this.destroyBaseElement();
                  }
                })
              ],
              RenderableDOMElement
            ),
            (SVGStyleData.prototype.reset = function() {
              (this.d = ''), (this._mdf = !1);
            }),
            (SVGShapeData.prototype.setAsAnimated = function() {
              this._isAnimated = !0;
            }),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            (SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
                (this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this)),
                (this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this)),
                (this.g = new GradientProperty(t, e.g, this)),
                (this.style = r),
                (this.stops = []),
                this.setGradientData(r.pElem, e),
                this.setGradientOpacity(e, r),
                (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
              var r = createElementID(),
                i = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
              i.setAttribute('id', r),
                i.setAttribute('spreadMethod', 'pad'),
                i.setAttribute('gradientUnits', 'userSpaceOnUse');
              var n,
                s,
                a,
                o = [];
              for (a = 4 * e.g.p, s = 0; s < a; s += 4) (n = createNS('stop')), i.appendChild(n), o.push(n);
              t.setAttribute('gf' === e.ty ? 'fill' : 'stroke', 'url(' + locationHref + '#' + r + ')'),
                (this.gf = i),
                (this.cst = o);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
              if (this.g._hasOpacity && !this.g._collapsable) {
                var r,
                  i,
                  n,
                  s = createNS('mask'),
                  a = createNS('path');
                s.appendChild(a);
                var o = createElementID(),
                  h = createElementID();
                s.setAttribute('id', h);
                var l = createNS(1 === t.t ? 'linearGradient' : 'radialGradient');
                l.setAttribute('id', o),
                  l.setAttribute('spreadMethod', 'pad'),
                  l.setAttribute('gradientUnits', 'userSpaceOnUse'),
                  (n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
                var p = this.stops;
                for (i = 4 * t.g.p; i < n; i += 2)
                  (r = createNS('stop')).setAttribute('stop-color', 'rgb(255,255,255)'), l.appendChild(r), p.push(r);
                a.setAttribute('gf' === t.ty ? 'fill' : 'stroke', 'url(' + locationHref + '#' + o + ')'),
                  (this.of = l),
                  (this.ms = s),
                  (this.ost = p),
                  (this.maskId = h),
                  (e.msElem = a);
              }
            }),
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
          var SVGElementsRenderer = (function() {
            var t = new Matrix(),
              e = new Matrix();
            function r(t, e, r) {
              (r || e.transform.op._mdf) && e.transform.container.setAttribute('opacity', e.transform.op.v),
                (r || e.transform.mProps._mdf) &&
                  e.transform.container.setAttribute('transform', e.transform.mProps.v.to2dCSS());
            }
            function i(r, i, n) {
              var s,
                a,
                o,
                h,
                l,
                p,
                c,
                f,
                u,
                m,
                d,
                y = i.styles.length,
                g = i.lvl;
              for (p = 0; p < y; p += 1) {
                if (((h = i.sh._mdf || n), i.styles[p].lvl < g)) {
                  for (f = e.reset(), m = g - i.styles[p].lvl, d = i.transformers.length - 1; !h && m > 0; )
                    (h = i.transformers[d].mProps._mdf || h), m--, d--;
                  if (h)
                    for (m = g - i.styles[p].lvl, d = i.transformers.length - 1; m > 0; )
                      (u = i.transformers[d].mProps.v.props),
                        f.transform(
                          u[0],
                          u[1],
                          u[2],
                          u[3],
                          u[4],
                          u[5],
                          u[6],
                          u[7],
                          u[8],
                          u[9],
                          u[10],
                          u[11],
                          u[12],
                          u[13],
                          u[14],
                          u[15]
                        ),
                        m--,
                        d--;
                } else f = t;
                if (((a = (c = i.sh.paths)._length), h)) {
                  for (o = '', s = 0; s < a; s += 1)
                    (l = c.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                  i.caches[p] = o;
                } else o = i.caches[p];
                (i.styles[p].d += !0 === r.hd ? '' : o), (i.styles[p]._mdf = h || i.styles[p]._mdf);
              }
            }
            function n(t, e, r) {
              var i = e.style;
              (e.c._mdf || r) &&
                i.pElem.setAttribute(
                  'fill',
                  'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'
                ),
                (e.o._mdf || r) && i.pElem.setAttribute('fill-opacity', e.o.v);
            }
            function s(t, e, r) {
              a(t, e, r), o(0, e, r);
            }
            function a(t, e, r) {
              var i,
                n,
                s,
                a,
                o,
                h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                c = e.e.v;
              if (e.o._mdf || r) {
                var f = 'gf' === t.ty ? 'fill-opacity' : 'stroke-opacity';
                e.style.pElem.setAttribute(f, e.o.v);
              }
              if (e.s._mdf || r) {
                var u = 1 === t.t ? 'x1' : 'cx',
                  m = 'x1' === u ? 'y1' : 'cy';
                h.setAttribute(u, p[0]),
                  h.setAttribute(m, p[1]),
                  l && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]));
              }
              if (e.g._cmdf || r) {
                i = e.cst;
                var d = e.g.c;
                for (s = i.length, n = 0; n < s; n += 1)
                  (a = i[n]).setAttribute('offset', d[4 * n] + '%'),
                    a.setAttribute('stop-color', 'rgb(' + d[4 * n + 1] + ',' + d[4 * n + 2] + ',' + d[4 * n + 3] + ')');
              }
              if (l && (e.g._omdf || r)) {
                var y = e.g.o;
                for (s = (i = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < s; n += 1)
                  (a = i[n]),
                    e.g._collapsable || a.setAttribute('offset', y[2 * n] + '%'),
                    a.setAttribute('stop-opacity', y[2 * n + 1]);
              }
              if (1 === t.t)
                (e.e._mdf || r) &&
                  (h.setAttribute('x2', c[0]),
                  h.setAttribute('y2', c[1]),
                  l && !e.g._collapsable && (e.of.setAttribute('x2', c[0]), e.of.setAttribute('y2', c[1])));
              else if (
                ((e.s._mdf || e.e._mdf || r) &&
                  ((o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2))),
                  h.setAttribute('r', o),
                  l && !e.g._collapsable && e.of.setAttribute('r', o)),
                e.e._mdf || e.h._mdf || e.a._mdf || r)
              ) {
                o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                  v = o * (e.h.v >= 1 ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                  b = Math.cos(g + e.a.v) * v + p[0],
                  E = Math.sin(g + e.a.v) * v + p[1];
                h.setAttribute('fx', b),
                  h.setAttribute('fy', E),
                  l && !e.g._collapsable && (e.of.setAttribute('fx', b), e.of.setAttribute('fy', E));
              }
            }
            function o(t, e, r) {
              var i = e.style,
                n = e.d;
              n &&
                (n._mdf || r) &&
                n.dashStr &&
                (i.pElem.setAttribute('stroke-dasharray', n.dashStr),
                i.pElem.setAttribute('stroke-dashoffset', n.dashoffset[0])),
                e.c &&
                  (e.c._mdf || r) &&
                  i.pElem.setAttribute(
                    'stroke',
                    'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'
                  ),
                (e.o._mdf || r) && i.pElem.setAttribute('stroke-opacity', e.o.v),
                (e.w._mdf || r) &&
                  (i.pElem.setAttribute('stroke-width', e.w.v),
                  i.msElem && i.msElem.setAttribute('stroke-width', e.w.v));
            }
            return {
              createRenderFunction: function(t) {
                switch ((t.ty, t.ty)) {
                  case 'fl':
                    return n;
                  case 'gf':
                    return a;
                  case 'gs':
                    return s;
                  case 'st':
                    return o;
                  case 'sh':
                  case 'el':
                  case 'rc':
                  case 'sr':
                    return i;
                  case 'tr':
                    return r;
                }
              }
            };
          })();
          function ShapeTransformManager() {
            (this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
          }
          function CVShapeData(t, e, r, i) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var n = 4;
            'rc' == e.ty ? (n = 5) : 'el' == e.ty ? (n = 6) : 'sr' == e.ty && (n = 7),
              (this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t));
            var s,
              a,
              o = r.length;
            for (s = 0; s < o; s += 1)
              r[s].closed ||
                ((a = { transforms: i.addTransformSequence(r[s].transforms), trNodes: [] }),
                this.styledShapes.push(a),
                r[s].elements.push(a));
          }
          function BaseElement() {}
          function NullElement(t, e, r) {
            this.initFrame(),
              this.initBaseData(t, e, r),
              this.initFrame(),
              this.initTransform(t, e, r),
              this.initHierarchy();
          }
          function SVGBaseElement() {}
          function IShapeElement() {}
          function ITextElement() {}
          function ICompElement() {}
          function IImageElement(t, e, r) {
            (this.assetData = e.getAssetData(t.refId)),
              this.initElement(t, e, r),
              (this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h });
          }
          function ISolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function SVGCompElement(t, e, r) {
            (this.layers = t.layers),
              (this.supports3d = !0),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
              this.initElement(t, e, r),
              (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 });
          }
          function SVGTextElement(t, e, r) {
            (this.textSpans = []), (this.renderType = 'svg'), this.initElement(t, e, r);
          }
          function SVGShapeElement(t, e, r) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              this.initElement(t, e, r),
              (this.prevViewData = []);
          }
          function SVGTintFilter(t, e) {
            this.filterManager = e;
            var r = createNS('feColorMatrix');
            if (
              (r.setAttribute('type', 'matrix'),
              r.setAttribute('color-interpolation-filters', 'linearRGB'),
              r.setAttribute(
                'values',
                '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
              ),
              r.setAttribute('result', 'f1'),
              t.appendChild(r),
              (r = createNS('feColorMatrix')).setAttribute('type', 'matrix'),
              r.setAttribute('color-interpolation-filters', 'sRGB'),
              r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
              r.setAttribute('result', 'f2'),
              t.appendChild(r),
              (this.matrixFilter = r),
              100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
            ) {
              var i,
                n = createNS('feMerge');
              t.appendChild(n),
                (i = createNS('feMergeNode')).setAttribute('in', 'SourceGraphic'),
                n.appendChild(i),
                (i = createNS('feMergeNode')).setAttribute('in', 'f2'),
                n.appendChild(i);
            }
          }
          function SVGFillFilter(t, e) {
            this.filterManager = e;
            var r = createNS('feColorMatrix');
            r.setAttribute('type', 'matrix'),
              r.setAttribute('color-interpolation-filters', 'sRGB'),
              r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
              t.appendChild(r),
              (this.matrixFilter = r);
          }
          function SVGGaussianBlurEffect(t, e) {
            t.setAttribute('x', '-100%'),
              t.setAttribute('y', '-100%'),
              t.setAttribute('width', '300%'),
              t.setAttribute('height', '300%'),
              (this.filterManager = e);
            var r = createNS('feGaussianBlur');
            t.appendChild(r), (this.feGaussianBlur = r);
          }
          function SVGStrokeEffect(t, e) {
            (this.initialized = !1), (this.filterManager = e), (this.elem = t), (this.paths = []);
          }
          function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var r = createNS('feColorMatrix');
            r.setAttribute('type', 'matrix'),
              r.setAttribute('color-interpolation-filters', 'linearRGB'),
              r.setAttribute(
                'values',
                '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
              ),
              r.setAttribute('result', 'f1'),
              t.appendChild(r);
            var i = createNS('feComponentTransfer');
            i.setAttribute('color-interpolation-filters', 'sRGB'), t.appendChild(i), (this.matrixFilter = i);
            var n = createNS('feFuncR');
            n.setAttribute('type', 'table'), i.appendChild(n), (this.feFuncR = n);
            var s = createNS('feFuncG');
            s.setAttribute('type', 'table'), i.appendChild(s), (this.feFuncG = s);
            var a = createNS('feFuncB');
            a.setAttribute('type', 'table'), i.appendChild(a), (this.feFuncB = a);
          }
          function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var r = this.filterManager.effectElements,
              i = createNS('feComponentTransfer');
            (r[10].p.k ||
              0 !== r[10].p.v ||
              r[11].p.k ||
              1 !== r[11].p.v ||
              r[12].p.k ||
              1 !== r[12].p.v ||
              r[13].p.k ||
              0 !== r[13].p.v ||
              r[14].p.k ||
              1 !== r[14].p.v) &&
              (this.feFuncR = this.createFeFunc('feFuncR', i)),
              (r[17].p.k ||
                0 !== r[17].p.v ||
                r[18].p.k ||
                1 !== r[18].p.v ||
                r[19].p.k ||
                1 !== r[19].p.v ||
                r[20].p.k ||
                0 !== r[20].p.v ||
                r[21].p.k ||
                1 !== r[21].p.v) &&
                (this.feFuncG = this.createFeFunc('feFuncG', i)),
              (r[24].p.k ||
                0 !== r[24].p.v ||
                r[25].p.k ||
                1 !== r[25].p.v ||
                r[26].p.k ||
                1 !== r[26].p.v ||
                r[27].p.k ||
                0 !== r[27].p.v ||
                r[28].p.k ||
                1 !== r[28].p.v) &&
                (this.feFuncB = this.createFeFunc('feFuncB', i)),
              (r[31].p.k ||
                0 !== r[31].p.v ||
                r[32].p.k ||
                1 !== r[32].p.v ||
                r[33].p.k ||
                1 !== r[33].p.v ||
                r[34].p.k ||
                0 !== r[34].p.v ||
                r[35].p.k ||
                1 !== r[35].p.v) &&
                (this.feFuncA = this.createFeFunc('feFuncA', i)),
              (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
                (i.setAttribute('color-interpolation-filters', 'sRGB'),
                t.appendChild(i),
                (i = createNS('feComponentTransfer'))),
              (r[3].p.k ||
                0 !== r[3].p.v ||
                r[4].p.k ||
                1 !== r[4].p.v ||
                r[5].p.k ||
                1 !== r[5].p.v ||
                r[6].p.k ||
                0 !== r[6].p.v ||
                r[7].p.k ||
                1 !== r[7].p.v) &&
                (i.setAttribute('color-interpolation-filters', 'sRGB'),
                t.appendChild(i),
                (this.feFuncRComposed = this.createFeFunc('feFuncR', i)),
                (this.feFuncGComposed = this.createFeFunc('feFuncG', i)),
                (this.feFuncBComposed = this.createFeFunc('feFuncB', i)));
          }
          function SVGDropShadowEffect(t, e) {
            t.setAttribute('x', '-100%'),
              t.setAttribute('y', '-100%'),
              t.setAttribute('width', '400%'),
              t.setAttribute('height', '400%'),
              (this.filterManager = e);
            var r = createNS('feGaussianBlur');
            r.setAttribute('in', 'SourceAlpha'),
              r.setAttribute('result', 'drop_shadow_1'),
              r.setAttribute('stdDeviation', '0'),
              (this.feGaussianBlur = r),
              t.appendChild(r);
            var i = createNS('feOffset');
            i.setAttribute('dx', '25'),
              i.setAttribute('dy', '0'),
              i.setAttribute('in', 'drop_shadow_1'),
              i.setAttribute('result', 'drop_shadow_2'),
              (this.feOffset = i),
              t.appendChild(i);
            var n = createNS('feFlood');
            n.setAttribute('flood-color', '#00ff00'),
              n.setAttribute('flood-opacity', '1'),
              n.setAttribute('result', 'drop_shadow_3'),
              (this.feFlood = n),
              t.appendChild(n);
            var s = createNS('feComposite');
            s.setAttribute('in', 'drop_shadow_3'),
              s.setAttribute('in2', 'drop_shadow_2'),
              s.setAttribute('operator', 'in'),
              s.setAttribute('result', 'drop_shadow_4'),
              t.appendChild(s);
            var a,
              o = createNS('feMerge');
            t.appendChild(o),
              (a = createNS('feMergeNode')),
              o.appendChild(a),
              (a = createNS('feMergeNode')).setAttribute('in', 'SourceGraphic'),
              (this.feMergeNode = a),
              (this.feMerge = o),
              (this.originalNodeAdded = !1),
              o.appendChild(a);
          }
          (ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
              var e,
                r = t.length,
                i = '_';
              for (e = 0; e < r; e += 1) i += t[e].transform.key + '_';
              var n = this.sequences[i];
              return (
                n ||
                  ((n = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: !1 }),
                  (this.sequences[i] = n),
                  this.sequenceList.push(n)),
                n
              );
            },
            processSequence: function(t, e) {
              for (var r, i = 0, n = t.transforms.length, s = e; i < n && !e; ) {
                if (t.transforms[i].transform.mProps._mdf) {
                  s = !0;
                  break;
                }
                i += 1;
              }
              if (s)
                for (t.finalTransform.reset(), i = n - 1; i >= 0; i -= 1)
                  (r = t.transforms[i].transform.mProps.v.props),
                    t.finalTransform.transform(
                      r[0],
                      r[1],
                      r[2],
                      r[3],
                      r[4],
                      r[5],
                      r[6],
                      r[7],
                      r[8],
                      r[9],
                      r[10],
                      r[11],
                      r[12],
                      r[13],
                      r[14],
                      r[15]
                    );
              t._mdf = s;
            },
            processSequences: function(t) {
              var e,
                r = this.sequenceList.length;
              for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t);
            },
            getNewKey: function() {
              return '_' + this.transform_key_count++;
            }
          }),
            (CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated),
            (BaseElement.prototype = {
              checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                  if ('n' !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                  t += 1;
                }
                return !1;
              },
              initExpressions: function() {
                (this.layerInterface = LayerExpressionInterface(this)),
                  this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t),
                  0 === this.data.ty || this.data.xt
                    ? (this.compInterface = CompExpressionInterface(this))
                    : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface = ShapeExpressionInterface(
                        this.shapesData,
                        this.itemsData,
                        this.layerInterface
                      )),
                      (this.layerInterface.content = this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface = TextExpressionInterface(this)),
                      (this.layerInterface.text = this.layerInterface.textInterface));
              },
              setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style['mix-blend-mode'] = t;
              },
              initBaseData: function(t, e, r) {
                (this.globalData = e),
                  (this.comp = r),
                  (this.data = t),
                  (this.layerId = createElementID()),
                  this.data.sr || (this.data.sr = 1),
                  (this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
              },
              getType: function() {
                return this.type;
              },
              sourceRectAtTime: function() {}
            }),
            (NullElement.prototype.prepareFrame = function(t) {
              this.prepareProperties(t, !0);
            }),
            (NullElement.prototype.renderFrame = function() {}),
            (NullElement.prototype.getBaseElement = function() {
              return null;
            }),
            (NullElement.prototype.destroy = function() {}),
            (NullElement.prototype.sourceRectAtTime = function() {}),
            (NullElement.prototype.hide = function() {}),
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            (SVGBaseElement.prototype = {
              initRendererElement: function() {
                this.layerElement = createNS('g');
              },
              createContainerElements: function() {
                (this.matteElement = createNS('g')),
                  (this.transformedElement = this.layerElement),
                  (this.maskedElement = this.layerElement),
                  (this._sizeChanged = !1);
                var t,
                  e,
                  r,
                  i = null;
                if (this.data.td) {
                  if (3 == this.data.td || 1 == this.data.td) {
                    var n = createNS('mask');
                    n.setAttribute('id', this.layerId),
                      n.setAttribute('mask-type', 3 == this.data.td ? 'luminance' : 'alpha'),
                      n.appendChild(this.layerElement),
                      (i = n),
                      this.globalData.defs.appendChild(n),
                      featureSupport.maskType ||
                        1 != this.data.td ||
                        (n.setAttribute('mask-type', 'luminance'),
                        (t = createElementID()),
                        (e = filtersFactory.createFilter(t)),
                        this.globalData.defs.appendChild(e),
                        e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        (r = createNS('g')).appendChild(this.layerElement),
                        (i = r),
                        n.appendChild(r),
                        r.setAttribute('filter', 'url(' + locationHref + '#' + t + ')'));
                  } else if (2 == this.data.td) {
                    var s = createNS('mask');
                    s.setAttribute('id', this.layerId), s.setAttribute('mask-type', 'alpha');
                    var a = createNS('g');
                    s.appendChild(a), (t = createElementID()), (e = filtersFactory.createFilter(t));
                    var o = createNS('feComponentTransfer');
                    o.setAttribute('in', 'SourceGraphic'), e.appendChild(o);
                    var h = createNS('feFuncA');
                    h.setAttribute('type', 'table'),
                      h.setAttribute('tableValues', '1.0 0.0'),
                      o.appendChild(h),
                      this.globalData.defs.appendChild(e);
                    var l = createNS('rect');
                    l.setAttribute('width', this.comp.data.w),
                      l.setAttribute('height', this.comp.data.h),
                      l.setAttribute('x', '0'),
                      l.setAttribute('y', '0'),
                      l.setAttribute('fill', '#ffffff'),
                      l.setAttribute('opacity', '0'),
                      a.setAttribute('filter', 'url(' + locationHref + '#' + t + ')'),
                      a.appendChild(l),
                      a.appendChild(this.layerElement),
                      (i = a),
                      featureSupport.maskType ||
                        (s.setAttribute('mask-type', 'luminance'),
                        e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        (r = createNS('g')),
                        a.appendChild(l),
                        r.appendChild(this.layerElement),
                        (i = r),
                        a.appendChild(r)),
                      this.globalData.defs.appendChild(s);
                  }
                } else
                  this.data.tt
                    ? (this.matteElement.appendChild(this.layerElement),
                      (i = this.matteElement),
                      (this.baseElement = this.matteElement))
                    : (this.baseElement = this.layerElement);
                if (
                  (this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
                  this.data.cl && this.layerElement.setAttribute('class', this.data.cl),
                  0 === this.data.ty && !this.data.hd)
                ) {
                  var p = createNS('clipPath'),
                    c = createNS('path');
                  c.setAttribute(
                    'd',
                    'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z'
                  );
                  var f = createElementID();
                  if (
                    (p.setAttribute('id', f), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks())
                  ) {
                    var u = createNS('g');
                    u.setAttribute('clip-path', 'url(' + locationHref + '#' + f + ')'),
                      u.appendChild(this.layerElement),
                      (this.transformedElement = u),
                      i ? i.appendChild(this.transformedElement) : (this.baseElement = this.transformedElement);
                  } else this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + f + ')');
                }
                0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function() {
                this.finalTransform._matMdf &&
                  this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS()),
                  this.finalTransform._opMdf &&
                    this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
              },
              destroyBaseElement: function() {
                (this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
              },
              getBaseElement: function() {
                return this.data.hd ? null : this.baseElement;
              },
              createRenderableComponents: function() {
                (this.maskManager = new MaskElement(this.data, this, this.globalData)),
                  (this.renderableEffectsManager = new SVGEffects(this));
              },
              setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute('mask', 'url(' + locationHref + '#' + t + ')');
              }
            }),
            (IShapeElement.prototype = {
              addShapeToModifiers: function(t) {
                var e,
                  r = this.shapeModifiers.length;
                for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
              },
              isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e; )
                  if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1;
              },
              renderModifiers: function() {
                if (this.shapeModifiers.length) {
                  var t,
                    e = this.shapes.length;
                  for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                  for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1)
                    this.shapeModifiers[t].processShapes(this._isFirstFrame);
                }
              },
              lcEnum: { 1: 'butt', 2: 'round', 3: 'square' },
              ljEnum: { 1: 'miter', 2: 'round', 3: 'bevel' },
              searchProcessedElement: function(t) {
                for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
                  if (e[r].elem === t) return e[r].pos;
                  r += 1;
                }
                return 0;
              },
              addProcessedElement: function(t, e) {
                for (var r = this.processedElements, i = r.length; i; )
                  if (r[(i -= 1)].elem === t) return void (r[i].pos = e);
                r.push(new ProcessedElement(t, e));
              },
              prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
              }
            }),
            (ITextElement.prototype.initElement = function(t, e, r) {
              (this.lettersChangedFlag = !0),
                this.initFrame(),
                this.initBaseData(t, e, r),
                (this.textProperty = new TextProperty(this, t.t, this.dynamicProperties)),
                (this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this)),
                this.initTransform(t, e, r),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function(t) {
              (this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                  (this.buildNewText(), (this.textProperty._isFirstFrame = !1), (this.textProperty._mdf = !1));
            }),
            (ITextElement.prototype.createPathShape = function(t, e) {
              var r,
                i,
                n = e.length,
                s = '';
              for (r = 0; r < n; r += 1) (i = e[r].ks.k), (s += buildShapeString(i, i.i.length, !0, t));
              return s;
            }),
            (ITextElement.prototype.updateDocumentData = function(t, e) {
              this.textProperty.updateDocumentData(t, e);
            }),
            (ITextElement.prototype.canResizeFont = function(t) {
              this.textProperty.canResizeFont(t);
            }),
            (ITextElement.prototype.setMinimumFontSize = function(t) {
              this.textProperty.setMinimumFontSize(t);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, n) {
              switch ((t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j)) {
                case 1:
                  e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                  break;
                case 2:
                  e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
              }
              e.translate(i, n, 0);
            }),
            (ITextElement.prototype.buildColor = function(t) {
              return (
                'rgb(' + Math.round(255 * t[0]) + ',' + Math.round(255 * t[1]) + ',' + Math.round(255 * t[2]) + ')'
              );
            }),
            (ITextElement.prototype.emptyProp = new LetterProps()),
            (ITextElement.prototype.destroy = function() {}),
            extendPrototype(
              [BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement],
              ICompElement
            ),
            (ICompElement.prototype.initElement = function(t, e, r) {
              this.initFrame(),
                this.initBaseData(t, e, r),
                this.initTransform(t, e, r),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function(t) {
              if (
                ((this._mdf = !1),
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt)
              ) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                  var e = this.tm.v;
                  e === this.data.op && (e = this.data.op - 1), (this.renderedFrame = e);
                }
                var r,
                  i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)
                  (this.completeLayers || this.elements[r]) &&
                    (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st),
                    this.elements[r]._mdf && (this._mdf = !0));
              }
            }),
            (ICompElement.prototype.renderInnerContent = function() {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
            }),
            (ICompElement.prototype.setElements = function(t) {
              this.elements = t;
            }),
            (ICompElement.prototype.getElements = function() {
              return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function() {
              var t,
                e = this.layers.length;
              for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
            }),
            (ICompElement.prototype.destroy = function() {
              this.destroyElements(), this.destroyBaseElement();
            }),
            extendPrototype(
              [BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement],
              IImageElement
            ),
            (IImageElement.prototype.createContent = function() {
              var t = this.globalData.getAssetsPath(this.assetData);
              (this.innerElem = createNS('image')),
                this.innerElem.setAttribute('width', this.assetData.w + 'px'),
                this.innerElem.setAttribute('height', this.assetData.h + 'px'),
                this.innerElem.setAttribute(
                  'preserveAspectRatio',
                  this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio
                ),
                this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t),
                this.layerElement.appendChild(this.innerElem);
            }),
            (IImageElement.prototype.sourceRectAtTime = function() {
              return this.sourceRect;
            }),
            extendPrototype([IImageElement], ISolidElement),
            (ISolidElement.prototype.createContent = function() {
              var t = createNS('rect');
              t.setAttribute('width', this.data.sw),
                t.setAttribute('height', this.data.sh),
                t.setAttribute('fill', this.data.sc),
                this.layerElement.appendChild(t);
            }),
            extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement
              ],
              SVGTextElement
            ),
            (SVGTextElement.prototype.createContent = function() {
              this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS('text'));
            }),
            (SVGTextElement.prototype.buildTextContents = function(t) {
              for (var e = 0, r = t.length, i = [], n = ''; e < r; )
                t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3)
                  ? (i.push(n), (n = ''))
                  : (n += t[e]),
                  (e += 1);
              return i.push(n), i;
            }),
            (SVGTextElement.prototype.buildNewText = function() {
              var t,
                e,
                r = this.textProperty.currentData;
              (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
                r.fc
                  ? this.layerElement.setAttribute('fill', this.buildColor(r.fc))
                  : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'),
                r.sc &&
                  (this.layerElement.setAttribute('stroke', this.buildColor(r.sc)),
                  this.layerElement.setAttribute('stroke-width', r.sw)),
                this.layerElement.setAttribute('font-size', r.finalSize);
              var i = this.globalData.fontManager.getFontByName(r.f);
              if (i.fClass) this.layerElement.setAttribute('class', i.fClass);
              else {
                this.layerElement.setAttribute('font-family', i.fFamily);
                var n = r.fWeight,
                  s = r.fStyle;
                this.layerElement.setAttribute('font-style', s), this.layerElement.setAttribute('font-weight', n);
              }
              this.layerElement.setAttribute('aria-label', r.t);
              var a,
                o = r.l || [],
                h = !!this.globalData.fontManager.chars;
              e = o.length;
              var l,
                p = this.mHelper,
                c = '',
                f = this.data.singleShape,
                u = 0,
                m = 0,
                d = !0,
                y = (r.tr / 1e3) * r.finalSize;
              if (!f || h || r.sz) {
                var g,
                  v,
                  b = this.textSpans.length;
                for (t = 0; t < e; t += 1)
                  (h && f && 0 !== t) ||
                    ((a = b > t ? this.textSpans[t] : createNS(h ? 'path' : 'text')),
                    b <= t &&
                      (a.setAttribute('stroke-linecap', 'butt'),
                      a.setAttribute('stroke-linejoin', 'round'),
                      a.setAttribute('stroke-miterlimit', '4'),
                      (this.textSpans[t] = a),
                      this.layerElement.appendChild(a)),
                    (a.style.display = 'inherit')),
                    p.reset(),
                    p.scale(r.finalSize / 100, r.finalSize / 100),
                    f &&
                      (o[t].n && ((u = -y), (m += r.yOffset), (m += d ? 1 : 0), (d = !1)),
                      this.applyTextPropertiesToMatrix(r, p, o[t].line, u, m),
                      (u += o[t].l || 0),
                      (u += y)),
                    h
                      ? ((l = (g =
                          ((v = this.globalData.fontManager.getCharData(
                            r.finalText[t],
                            i.fStyle,
                            this.globalData.fontManager.getFontByName(r.f).fFamily
                          )) &&
                            v.data) ||
                          {}).shapes
                          ? g.shapes[0].it
                          : []),
                        f ? (c += this.createPathShape(p, l)) : a.setAttribute('d', this.createPathShape(p, l)))
                      : (f && a.setAttribute('transform', 'translate(' + p.props[12] + ',' + p.props[13] + ')'),
                        (a.textContent = o[t].val),
                        a.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'));
                f && a && a.setAttribute('d', c);
              } else {
                var E = this.textContainer,
                  x = 'start';
                switch (r.j) {
                  case 1:
                    x = 'end';
                    break;
                  case 2:
                    x = 'middle';
                }
                E.setAttribute('text-anchor', x), E.setAttribute('letter-spacing', y);
                var S = this.buildTextContents(r.finalText);
                for (e = S.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
                  ((a = this.textSpans[t] || createNS('tspan')).textContent = S[t]),
                    a.setAttribute('x', 0),
                    a.setAttribute('y', m),
                    (a.style.display = 'inherit'),
                    E.appendChild(a),
                    (this.textSpans[t] = a),
                    (m += r.finalLineHeight);
                this.layerElement.appendChild(E);
              }
              for (; t < this.textSpans.length; ) (this.textSpans[t].style.display = 'none'), (t += 1);
              this._sizeChanged = !0;
            }),
            (SVGTextElement.prototype.sourceRectAtTime = function(t) {
              if (
                (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged)
              ) {
                this._sizeChanged = !1;
                var e = this.layerElement.getBBox();
                this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height };
              }
              return this.bbox;
            }),
            (SVGTextElement.prototype.renderInnerContent = function() {
              if (
                !this.data.singleShape &&
                (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                var t, e;
                this._sizeChanged = !0;
                var r,
                  i,
                  n = this.textAnimator.renderedLetters,
                  s = this.textProperty.currentData.l;
                for (e = s.length, t = 0; t < e; t += 1)
                  s[t].n ||
                    ((r = n[t]),
                    (i = this.textSpans[t]),
                    r._mdf.m && i.setAttribute('transform', r.m),
                    r._mdf.o && i.setAttribute('opacity', r.o),
                    r._mdf.sw && i.setAttribute('stroke-width', r.sw),
                    r._mdf.sc && i.setAttribute('stroke', r.sc),
                    r._mdf.fc && i.setAttribute('fill', r.fc));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
              ],
              SVGShapeElement
            ),
            (SVGShapeElement.prototype.initSecondaryElement = function() {}),
            (SVGShapeElement.prototype.identityMatrix = new Matrix()),
            (SVGShapeElement.prototype.buildExpressionInterface = function() {}),
            (SVGShapeElement.prototype.createContent = function() {
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes();
            }),
            (SVGShapeElement.prototype.filterUniqueShapes = function() {
              var t,
                e,
                r,
                i,
                n = this.shapes.length,
                s = this.stylesList.length,
                a = [],
                o = !1;
              for (r = 0; r < s; r += 1) {
                for (i = this.stylesList[r], o = !1, a.length = 0, t = 0; t < n; t += 1)
                  -1 !== (e = this.shapes[t]).styles.indexOf(i) && (a.push(e), (o = e._isAnimated || o));
                a.length > 1 && o && this.setShapesAsAnimated(a);
              }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
              var e,
                r = t.length;
              for (e = 0; e < r; e += 1) t[e].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function(t, e) {
              var r,
                i = new SVGStyleData(t, e),
                n = i.pElem;
              return (
                'st' === t.ty
                  ? (r = new SVGStrokeStyleData(this, t, i))
                  : 'fl' === t.ty
                  ? (r = new SVGFillStyleData(this, t, i))
                  : ('gf' !== t.ty && 'gs' !== t.ty) ||
                    ((r = new ('gf' === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i)),
                    this.globalData.defs.appendChild(r.gf),
                    r.maskId &&
                      (this.globalData.defs.appendChild(r.ms),
                      this.globalData.defs.appendChild(r.of),
                      n.setAttribute('mask', 'url(' + locationHref + '#' + r.maskId + ')'))),
                ('st' !== t.ty && 'gs' !== t.ty) ||
                  (n.setAttribute('stroke-linecap', this.lcEnum[t.lc] || 'round'),
                  n.setAttribute('stroke-linejoin', this.ljEnum[t.lj] || 'round'),
                  n.setAttribute('fill-opacity', '0'),
                  1 === t.lj && n.setAttribute('stroke-miterlimit', t.ml)),
                2 === t.r && n.setAttribute('fill-rule', 'evenodd'),
                t.ln && n.setAttribute('id', t.ln),
                t.cl && n.setAttribute('class', t.cl),
                t.bm && (n.style['mix-blend-mode'] = getBlendMode(t.bm)),
                this.stylesList.push(i),
                this.addToAnimatedContents(t, r),
                r
              );
            }),
            (SVGShapeElement.prototype.createGroupElement = function(t) {
              var e = new ShapeGroupData();
              return (
                t.ln && e.gr.setAttribute('id', t.ln),
                t.cl && e.gr.setAttribute('class', t.cl),
                t.bm && (e.gr.style['mix-blend-mode'] = getBlendMode(t.bm)),
                e
              );
            }),
            (SVGShapeElement.prototype.createTransformElement = function(t, e) {
              var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                i = new SVGTransformData(r, r.o, e);
              return this.addToAnimatedContents(t, i), i;
            }),
            (SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
              var i = 4;
              'rc' === t.ty ? (i = 5) : 'el' === t.ty ? (i = 6) : 'sr' === t.ty && (i = 7);
              var n = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
              return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n;
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
              for (var r = 0, i = this.animatedContents.length; r < i; ) {
                if (this.animatedContents[r].element === e) return;
                r += 1;
              }
              this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
            }),
            (SVGShapeElement.prototype.setElementStyles = function(t) {
              var e,
                r = t.styles,
                i = this.stylesList.length;
              for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function() {
              this._isFirstFrame = !0;
              var t,
                e = this.itemsData.length;
              for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
              for (
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                  this.filterUniqueShapes(),
                  e = this.dynamicProperties.length,
                  t = 0;
                t < e;
                t += 1
              )
                this.dynamicProperties[t].getValue();
              this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function(t, e, r, i, n, s, a) {
              var o,
                h,
                l,
                p,
                c,
                f,
                u = [].concat(s),
                m = t.length - 1,
                d = [],
                y = [];
              for (o = m; o >= 0; o -= 1) {
                if (
                  ((f = this.searchProcessedElement(t[o])) ? (e[o] = r[f - 1]) : (t[o]._render = a),
                  'fl' == t[o].ty || 'st' == t[o].ty || 'gf' == t[o].ty || 'gs' == t[o].ty)
                )
                  f ? (e[o].style.closed = !1) : (e[o] = this.createStyleElement(t[o], n)),
                    t[o]._render && i.appendChild(e[o].style.pElem),
                    d.push(e[o].style);
                else if ('gr' == t[o].ty) {
                  if (f) for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                  else e[o] = this.createGroupElement(t[o]);
                  this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, u, a),
                    t[o]._render && i.appendChild(e[o].gr);
                } else
                  'tr' == t[o].ty
                    ? (f || (e[o] = this.createTransformElement(t[o], i)), (p = e[o].transform), u.push(p))
                    : 'sh' == t[o].ty || 'rc' == t[o].ty || 'el' == t[o].ty || 'sr' == t[o].ty
                    ? (f || (e[o] = this.createShapeElement(t[o], u, n)), this.setElementStyles(e[o]))
                    : 'tm' == t[o].ty || 'rd' == t[o].ty || 'ms' == t[o].ty
                    ? (f
                        ? ((c = e[o]).closed = !1)
                        : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                          (e[o] = c),
                          this.shapeModifiers.push(c)),
                      y.push(c))
                    : 'rp' == t[o].ty &&
                      (f
                        ? ((c = e[o]).closed = !0)
                        : ((c = ShapeModifiers.getModifier(t[o].ty)),
                          (e[o] = c),
                          c.init(this, t, o, e),
                          this.shapeModifiers.push(c),
                          (a = !1)),
                      y.push(c));
                this.addProcessedElement(t[o], o + 1);
              }
              for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
              for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function() {
              this.renderModifiers();
              var t,
                e = this.stylesList.length;
              for (t = 0; t < e; t += 1) this.stylesList[t].reset();
              for (this.renderShape(), t = 0; t < e; t += 1)
                (this.stylesList[t]._mdf || this._isFirstFrame) &&
                  (this.stylesList[t].msElem &&
                    (this.stylesList[t].msElem.setAttribute('d', this.stylesList[t].d),
                    (this.stylesList[t].d = 'M0 0' + this.stylesList[t].d)),
                  this.stylesList[t].pElem.setAttribute('d', this.stylesList[t].d || 'M0 0'));
            }),
            (SVGShapeElement.prototype.renderShape = function() {
              var t,
                e,
                r = this.animatedContents.length;
              for (t = 0; t < r; t += 1)
                (e = this.animatedContents[t]),
                  (this._isFirstFrame || e.element._isAnimated) &&
                    !0 !== e.data &&
                    e.fn(e.data, e.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function() {
              this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
            }),
            (SVGTintFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                  r = this.filterManager.effectElements[1].p.v,
                  i = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute(
                  'values',
                  r[0] -
                    e[0] +
                    ' 0 0 0 ' +
                    e[0] +
                    ' ' +
                    (r[1] - e[1]) +
                    ' 0 0 0 ' +
                    e[1] +
                    ' ' +
                    (r[2] - e[2]) +
                    ' 0 0 0 ' +
                    e[2] +
                    ' 0 0 0 ' +
                    i +
                    ' 0'
                );
              }
            }),
            (SVGFillFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                  r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute(
                  'values',
                  '0 0 0 0 ' + e[0] + ' 0 0 0 0 ' + e[1] + ' 0 0 0 0 ' + e[2] + ' 0 0 0 ' + r + ' 0'
                );
              }
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = 0.3 * this.filterManager.effectElements[0].p.v,
                  r = this.filterManager.effectElements[1].p.v,
                  i = 3 == r ? 0 : e,
                  n = 2 == r ? 0 : e;
                this.feGaussianBlur.setAttribute('stdDeviation', i + ' ' + n);
                var s = 1 == this.filterManager.effectElements[2].p.v ? 'wrap' : 'duplicate';
                this.feGaussianBlur.setAttribute('edgeMode', s);
              }
            }),
            (SVGStrokeEffect.prototype.initialize = function() {
              var t,
                e,
                r,
                i,
                n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
              for (
                1 === this.filterManager.effectElements[1].p.v
                  ? ((i = this.elem.maskManager.masksProperties.length), (r = 0))
                  : (i = 1 + (r = this.filterManager.effectElements[0].p.v - 1)),
                  (e = createNS('g')).setAttribute('fill', 'none'),
                  e.setAttribute('stroke-linecap', 'round'),
                  e.setAttribute('stroke-dashoffset', 1);
                r < i;
                r += 1
              )
                (t = createNS('path')), e.appendChild(t), this.paths.push({ p: t, m: r });
              if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS('mask'),
                  a = createElementID();
                s.setAttribute('id', a),
                  s.setAttribute('mask-type', 'alpha'),
                  s.appendChild(e),
                  this.elem.globalData.defs.appendChild(s);
                var o = createNS('g');
                for (o.setAttribute('mask', 'url(' + locationHref + '#' + a + ')'); n[0]; ) o.appendChild(n[0]);
                this.elem.layerElement.appendChild(o), (this.masker = s), e.setAttribute('stroke', '#fff');
              } else if (
                1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v
              ) {
                if (2 === this.filterManager.effectElements[10].p.v)
                  for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length; )
                    this.elem.layerElement.removeChild(n[0]);
                this.elem.layerElement.appendChild(e),
                  this.elem.layerElement.removeAttribute('mask'),
                  e.setAttribute('stroke', '#fff');
              }
              (this.initialized = !0), (this.pathMasker = e);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function(t) {
              this.initialized || this.initialize();
              var e,
                r,
                i,
                n = this.paths.length;
              for (e = 0; e < n; e += 1)
                if (
                  -1 !== this.paths[e].m &&
                  ((r = this.elem.maskManager.viewData[this.paths[e].m]),
                  (i = this.paths[e].p),
                  (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute('d', r.lastPath),
                  t ||
                    this.filterManager.effectElements[9].p._mdf ||
                    this.filterManager.effectElements[4].p._mdf ||
                    this.filterManager.effectElements[7].p._mdf ||
                    this.filterManager.effectElements[8].p._mdf ||
                    r.prop._mdf)
                ) {
                  var s;
                  if (
                    0 !== this.filterManager.effectElements[7].p.v ||
                    100 !== this.filterManager.effectElements[8].p.v
                  ) {
                    var a =
                        Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) /
                        100,
                      o =
                        Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) /
                        100,
                      h = i.getTotalLength();
                    s = '0 0 0 ' + h * a + ' ';
                    var l,
                      p = h * (o - a),
                      c =
                        1 +
                        (2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v) / 100,
                      f = Math.floor(p / c);
                    for (l = 0; l < f; l += 1)
                      s +=
                        '1 ' +
                        (2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v) /
                          100 +
                        ' ';
                    s += '0 ' + 10 * h + ' 0 0';
                  } else
                    s =
                      '1 ' +
                      (2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v) / 100;
                  i.setAttribute('stroke-dasharray', s);
                }
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.pathMasker.setAttribute('stroke-width', 2 * this.filterManager.effectElements[4].p.v),
                (t || this.filterManager.effectElements[6].p._mdf) &&
                  this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v),
                (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) &&
                  (t || this.filterManager.effectElements[3].p._mdf))
              ) {
                var u = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute(
                  'stroke',
                  'rgb(' + bm_floor(255 * u[0]) + ',' + bm_floor(255 * u[1]) + ',' + bm_floor(255 * u[2]) + ')'
                );
              }
            }),
            (SVGTritoneFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                  r = this.filterManager.effectElements[1].p.v,
                  i = this.filterManager.effectElements[2].p.v,
                  n = i[0] + ' ' + r[0] + ' ' + e[0],
                  s = i[1] + ' ' + r[1] + ' ' + e[1],
                  a = i[2] + ' ' + r[2] + ' ' + e[2];
                this.feFuncR.setAttribute('tableValues', n),
                  this.feFuncG.setAttribute('tableValues', s),
                  this.feFuncB.setAttribute('tableValues', a);
              }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
              var r = createNS(t);
              return r.setAttribute('type', 'table'), e.appendChild(r), r;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, n) {
              for (
                var s,
                  a,
                  o = 0,
                  h = Math.min(t, e),
                  l = Math.max(t, e),
                  p = Array.call(null, { length: 256 }),
                  c = 0,
                  f = n - i,
                  u = e - t;
                o <= 256;

              )
                (a =
                  (s = o / 256) <= h
                    ? u < 0
                      ? n
                      : i
                    : s >= l
                    ? u < 0
                      ? i
                      : n
                    : i + f * Math.pow((s - t) / u, 1 / r)),
                  (p[c++] = a),
                  (o += 256 / 255);
              return p.join(' ');
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e,
                  r = this.filterManager.effectElements;
                this.feFuncRComposed &&
                  (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) &&
                  ((e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v)),
                  this.feFuncRComposed.setAttribute('tableValues', e),
                  this.feFuncGComposed.setAttribute('tableValues', e),
                  this.feFuncBComposed.setAttribute('tableValues', e)),
                  this.feFuncR &&
                    (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) &&
                    ((e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v)),
                    this.feFuncR.setAttribute('tableValues', e)),
                  this.feFuncG &&
                    (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) &&
                    ((e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v)),
                    this.feFuncG.setAttribute('tableValues', e)),
                  this.feFuncB &&
                    (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) &&
                    ((e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v)),
                    this.feFuncB.setAttribute('tableValues', e)),
                  this.feFuncA &&
                    (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) &&
                    ((e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v)),
                    this.feFuncA.setAttribute('tableValues', e));
              }
            }),
            (SVGDropShadowEffect.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                if (
                  ((t || this.filterManager.effectElements[4].p._mdf) &&
                    this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4),
                  t || this.filterManager.effectElements[0].p._mdf)
                ) {
                  var e = this.filterManager.effectElements[0].p.v;
                  this.feFlood.setAttribute(
                    'flood-color',
                    rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2]))
                  );
                }
                if (
                  ((t || this.filterManager.effectElements[1].p._mdf) &&
                    this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255),
                  t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf)
                ) {
                  var r = this.filterManager.effectElements[3].p.v,
                    i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                    n = r * Math.cos(i),
                    s = r * Math.sin(i);
                  this.feOffset.setAttribute('dx', n), this.feOffset.setAttribute('dy', s);
                }
              }
            });
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, r) {
            (this.initialized = !1),
              (this.filterManager = e),
              (this.filterElem = t),
              (this.elem = r),
              (r.matteElement = createNS('g')),
              r.matteElement.appendChild(r.layerElement),
              r.matteElement.appendChild(r.transformedElement),
              (r.baseElement = r.matteElement);
          }
          function SVGEffects(t) {
            var e,
              r,
              i = t.data.ef ? t.data.ef.length : 0,
              n = createElementID(),
              s = filtersFactory.createFilter(n),
              a = 0;
            for (this.filters = [], e = 0; e < i; e += 1)
              (r = null),
                20 === t.data.ef[e].ty
                  ? ((a += 1), (r = new SVGTintFilter(s, t.effectsManager.effectElements[e])))
                  : 21 === t.data.ef[e].ty
                  ? ((a += 1), (r = new SVGFillFilter(s, t.effectsManager.effectElements[e])))
                  : 22 === t.data.ef[e].ty
                  ? (r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]))
                  : 23 === t.data.ef[e].ty
                  ? ((a += 1), (r = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])))
                  : 24 === t.data.ef[e].ty
                  ? ((a += 1), (r = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])))
                  : 25 === t.data.ef[e].ty
                  ? ((a += 1), (r = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])))
                  : 28 === t.data.ef[e].ty
                  ? (r = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t))
                  : 29 === t.data.ef[e].ty &&
                    ((a += 1), (r = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e]))),
                r && this.filters.push(r);
            a &&
              (t.globalData.defs.appendChild(s),
              t.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + n + ')')),
              this.filters.length && t.addRenderableComponent(this);
          }
          function CVContextData() {
            var t;
            for (
              this.saved = [],
                this.cArrPos = 0,
                this.cTr = new Matrix(),
                this.cO = 1,
                this.savedOp = createTypedArray('float32', 15),
                t = 0;
              t < 15;
              t += 1
            )
              this.saved[t] = createTypedArray('float32', 16);
            this._length = 15;
          }
          function CVBaseElement() {}
          function CVImageElement(t, e, r) {
            (this.assetData = e.getAssetData(t.refId)),
              (this.img = e.imageLoader.getImage(this.assetData)),
              this.initElement(t, e, r);
          }
          function CVCompElement(t, e, r) {
            (this.completeLayers = !1),
              (this.layers = t.layers),
              (this.pendingElements = []),
              (this.elements = createSizedArray(this.layers.length)),
              this.initElement(t, e, r),
              (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 });
          }
          function CVMaskElement(t, e) {
            (this.data = t),
              (this.element = e),
              (this.masksProperties = this.data.masksProperties || []),
              (this.viewData = createSizedArray(this.masksProperties.length));
            var r,
              i = this.masksProperties.length,
              n = !1;
            for (r = 0; r < i; r++)
              'n' !== this.masksProperties[r].mode && (n = !0),
                (this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3));
            (this.hasMasks = n), n && this.element.addRenderableComponent(this);
          }
          function CVShapeElement(t, e, r) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.itemsData = []),
              (this.prevViewData = []),
              (this.shapeModifiers = []),
              (this.processedElements = []),
              (this.transformsManager = new ShapeTransformManager()),
              this.initElement(t, e, r);
          }
          function CVSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function CVTextElement(t, e, r) {
            (this.textSpans = []),
              (this.yOffset = 0),
              (this.fillColorAnim = !1),
              (this.strokeColorAnim = !1),
              (this.strokeWidthAnim = !1),
              (this.stroke = !1),
              (this.fill = !1),
              (this.justifyOffset = 0),
              (this.currentRender = null),
              (this.renderType = 'canvas'),
              (this.values = { fill: 'rgba(0,0,0,0)', stroke: 'rgba(0,0,0,0)', sWidth: 0, fValue: '' }),
              this.initElement(t, e, r);
          }
          function CVEffects() {}
          function HBaseElement(t, e, r) {}
          function HSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function HCompElement(t, e, r) {
            (this.layers = t.layers),
              (this.supports3d = !t.hasMask),
              (this.completeLayers = !1),
              (this.pendingElements = []),
              (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
              this.initElement(t, e, r),
              (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 });
          }
          function HShapeElement(t, e, r) {
            (this.shapes = []),
              (this.shapesData = t.shapes),
              (this.stylesList = []),
              (this.shapeModifiers = []),
              (this.itemsData = []),
              (this.processedElements = []),
              (this.animatedContents = []),
              (this.shapesContainer = createNS('g')),
              this.initElement(t, e, r),
              (this.prevViewData = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
          }
          function HTextElement(t, e, r) {
            (this.textSpans = []),
              (this.textPaths = []),
              (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
              (this.renderType = 'svg'),
              (this.isMasked = !1),
              this.initElement(t, e, r);
          }
          function HImageElement(t, e, r) {
            (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, r);
          }
          function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (
              ((this.pe = i(this, t.pe, 0, 0, this)),
              t.ks.p.s
                ? ((this.px = i(this, t.ks.p.x, 1, 0, this)),
                  (this.py = i(this, t.ks.p.y, 1, 0, this)),
                  (this.pz = i(this, t.ks.p.z, 1, 0, this)))
                : (this.p = i(this, t.ks.p, 1, 0, this)),
              t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
              t.ks.or.k.length && t.ks.or.k[0].to)
            ) {
              var n,
                s = t.ks.or.k.length;
              for (n = 0; n < s; n += 1) (t.ks.or.k[n].to = null), (t.ks.or.k[n].ti = null);
            }
            (this.or = i(this, t.ks.or, 1, degToRads, this)),
              (this.or.sh = !0),
              (this.rx = i(this, t.ks.rx, 0, degToRads, this)),
              (this.ry = i(this, t.ks.ry, 0, degToRads, this)),
              (this.rz = i(this, t.ks.rz, 0, degToRads, this)),
              (this.mat = new Matrix()),
              (this._prevMat = new Matrix()),
              (this._isFirstFrame = !0),
              (this.finalTransform = { mProp: this });
          }
          function HEffects() {}
          (SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
              if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }),
            (SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
              var r = t.layerElement.parentNode;
              if (r) {
                for (var i, n = r.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement; ) s += 1;
                s <= a - 2 && (i = n[s + 1]);
                var o = createNS('use');
                o.setAttribute('href', '#' + e), i ? r.insertBefore(o, i) : r.appendChild(o);
              }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
              if (!this.findSymbol(e)) {
                var r = createElementID(),
                  i = createNS('mask');
                i.setAttribute('id', e.layerId), i.setAttribute('mask-type', 'alpha'), _svgMatteSymbols.push(e);
                var n = t.globalData.defs;
                n.appendChild(i);
                var s = createNS('symbol');
                s.setAttribute('id', r), this.replaceInParent(e, r), s.appendChild(e.layerElement), n.appendChild(s);
                var a = createNS('use');
                a.setAttribute('href', '#' + r), i.appendChild(a), (e.data.hd = !1), e.show();
              }
              t.setMatte(e.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function() {
              for (
                var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length;
                r < i;

              )
                e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), (r += 1);
              this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function() {
              this.initialized || this.initialize();
            }),
            (SVGEffects.prototype.renderFrame = function(t) {
              var e,
                r = this.filters.length;
              for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
            }),
            (CVContextData.prototype.duplicate = function() {
              var t = 2 * this._length,
                e = this.savedOp;
              (this.savedOp = createTypedArray('float32', t)), this.savedOp.set(e);
              var r = 0;
              for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray('float32', 16);
              this._length = t;
            }),
            (CVContextData.prototype.reset = function() {
              (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
            }),
            (CVBaseElement.prototype = {
              createElements: function() {},
              initRendererElement: function() {},
              createContainerElements: function() {
                (this.canvasContext = this.globalData.canvasContext),
                  (this.renderableEffectsManager = new CVEffects(this));
              },
              createContent: function() {},
              setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                  t.blendMode = this.data.bm;
                  var e = getBlendMode(this.data.bm);
                  t.canvasContext.globalCompositeOperation = e;
                }
              },
              createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this);
              },
              hideElement: function() {
                this.hidden || (this.isInRange && !this.isTransparent) || (this.hidden = !0);
              },
              showElement: function() {
                this.isInRange &&
                  !this.isTransparent &&
                  ((this.hidden = !1), (this._isFirstFrame = !0), (this.maskManager._isFirstFrame = !0));
              },
              renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                  this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                  var t = 0 === this.data.ty;
                  this.globalData.renderer.save(t),
                    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                    this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                    this.renderInnerContent(),
                    this.globalData.renderer.restore(t),
                    this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                    this._isFirstFrame && (this._isFirstFrame = !1);
                }
              },
              destroy: function() {
                (this.canvasContext = null), (this.data = null), (this.globalData = null), this.maskManager.destroy();
              },
              mHelper: new Matrix()
            }),
            (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
            (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
            extendPrototype(
              [BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement],
              CVImageElement
            ),
            (CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement),
            (CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
            (CVImageElement.prototype.createContent = function() {
              if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag('canvas');
                (t.width = this.assetData.w), (t.height = this.assetData.h);
                var e,
                  r,
                  i = t.getContext('2d'),
                  n = this.img.width,
                  s = this.img.height,
                  a = n / s,
                  o = this.assetData.w / this.assetData.h,
                  h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                (a > o && 'xMidYMid slice' === h) || (a < o && 'xMidYMid slice' !== h)
                  ? (e = (r = s) * o)
                  : (r = (e = n) / o),
                  i.drawImage(this.img, (n - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h),
                  (this.img = t);
              }
            }),
            (CVImageElement.prototype.renderInnerContent = function(t) {
              this.canvasContext.drawImage(this.img, 0, 0);
            }),
            (CVImageElement.prototype.destroy = function() {
              this.img = null;
            }),
            extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),
            (CVCompElement.prototype.renderInnerContent = function() {
              var t,
                e = this.canvasContext;
              for (
                e.beginPath(),
                  e.moveTo(0, 0),
                  e.lineTo(this.data.w, 0),
                  e.lineTo(this.data.w, this.data.h),
                  e.lineTo(0, this.data.h),
                  e.lineTo(0, 0),
                  e.clip(),
                  t = this.layers.length - 1;
                t >= 0;
                t -= 1
              )
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
            }),
            (CVCompElement.prototype.destroy = function() {
              var t;
              for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
              (this.layers = null), (this.elements = null);
            }),
            (CVMaskElement.prototype.renderFrame = function() {
              if (this.hasMasks) {
                var t,
                  e,
                  r,
                  i,
                  n = this.element.finalTransform.mat,
                  s = this.element.canvasContext,
                  a = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < a; t++)
                  if ('n' !== this.masksProperties[t].mode) {
                    this.masksProperties[t].inv &&
                      (s.moveTo(0, 0),
                      s.lineTo(this.element.globalData.compSize.w, 0),
                      s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                      s.lineTo(0, this.element.globalData.compSize.h),
                      s.lineTo(0, 0)),
                      (i = this.viewData[t].v),
                      (e = n.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                      s.moveTo(e[0], e[1]);
                    var o,
                      h = i._length;
                    for (o = 1; o < h; o++)
                      (r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o])),
                        s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    (r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0])),
                      s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  }
                this.element.globalData.renderer.save(!0), s.clip();
              }
            }),
            (CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty),
            (CVMaskElement.prototype.destroy = function() {
              this.element = null;
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
              ],
              CVShapeElement
            ),
            (CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement),
            (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
            (CVShapeElement.prototype.dashResetter = []),
            (CVShapeElement.prototype.createContent = function() {
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
            }),
            (CVShapeElement.prototype.createStyleElement = function(t, e) {
              var r = {
                  data: t,
                  type: t.ty,
                  preTransforms: this.transformsManager.addTransformSequence(e),
                  transforms: [],
                  elements: [],
                  closed: !0 === t.hd
                },
                i = {};
              if (
                ('fl' == t.ty || 'st' == t.ty
                  ? ((i.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                    i.c.k ||
                      (r.co = 'rgb(' + bm_floor(i.c.v[0]) + ',' + bm_floor(i.c.v[1]) + ',' + bm_floor(i.c.v[2]) + ')'))
                  : ('gf' !== t.ty && 'gs' !== t.ty) ||
                    ((i.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                    (i.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                    (i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this)),
                    (i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this)),
                    (i.g = new GradientProperty(this, t.g, this))),
                (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
                'st' == t.ty || 'gs' == t.ty)
              ) {
                if (
                  ((r.lc = this.lcEnum[t.lc] || 'round'),
                  (r.lj = this.ljEnum[t.lj] || 'round'),
                  1 == t.lj && (r.ml = t.ml),
                  (i.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                  i.w.k || (r.wi = i.w.v),
                  t.d)
                ) {
                  var n = new DashProperty(this, t.d, 'canvas', this);
                  (i.d = n), i.d.k || ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]));
                }
              } else r.r = 2 === t.r ? 'evenodd' : 'nonzero';
              return this.stylesList.push(r), (i.style = r), i;
            }),
            (CVShapeElement.prototype.createGroupElement = function(t) {
              return { it: [], prevViewData: [] };
            }),
            (CVShapeElement.prototype.createTransformElement = function(t) {
              return {
                transform: {
                  opacity: 1,
                  _opMdf: !1,
                  key: this.transformsManager.getNewKey(),
                  op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                  mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
              };
            }),
            (CVShapeElement.prototype.createShapeElement = function(t) {
              var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
              return this.shapes.push(e), this.addShapeToModifiers(e), e;
            }),
            (CVShapeElement.prototype.reloadShapes = function() {
              this._isFirstFrame = !0;
              var t,
                e = this.itemsData.length;
              for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
              for (
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
                  e = this.dynamicProperties.length,
                  t = 0;
                t < e;
                t += 1
              )
                this.dynamicProperties[t].getValue();
              this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function(t) {
              var e,
                r = this.stylesList.length;
              for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList = function() {
              var t,
                e = this.stylesList.length;
              for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop();
            }),
            (CVShapeElement.prototype.closeStyles = function(t) {
              var e,
                r = t.length;
              for (e = 0; e < r; e += 1) t[e].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function(t, e, r, i, n) {
              var s,
                a,
                o,
                h,
                l,
                p,
                c = t.length - 1,
                f = [],
                u = [],
                m = [].concat(n);
              for (s = c; s >= 0; s -= 1) {
                if (
                  ((h = this.searchProcessedElement(t[s])) ? (e[s] = r[h - 1]) : (t[s]._shouldRender = i),
                  'fl' == t[s].ty || 'st' == t[s].ty || 'gf' == t[s].ty || 'gs' == t[s].ty)
                )
                  h ? (e[s].style.closed = !1) : (e[s] = this.createStyleElement(t[s], m)), f.push(e[s].style);
                else if ('gr' == t[s].ty) {
                  if (h) for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                  else e[s] = this.createGroupElement(t[s]);
                  this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, m);
                } else
                  'tr' == t[s].ty
                    ? (h || ((p = this.createTransformElement(t[s])), (e[s] = p)),
                      m.push(e[s]),
                      this.addTransformToStyleList(e[s]))
                    : 'sh' == t[s].ty || 'rc' == t[s].ty || 'el' == t[s].ty || 'sr' == t[s].ty
                    ? h || (e[s] = this.createShapeElement(t[s]))
                    : 'tm' == t[s].ty || 'rd' == t[s].ty
                    ? (h
                        ? ((l = e[s]).closed = !1)
                        : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]),
                          (e[s] = l),
                          this.shapeModifiers.push(l)),
                      u.push(l))
                    : 'rp' == t[s].ty &&
                      (h
                        ? ((l = e[s]).closed = !0)
                        : ((l = ShapeModifiers.getModifier(t[s].ty)),
                          (e[s] = l),
                          l.init(this, t, s, e),
                          this.shapeModifiers.push(l),
                          (i = !1)),
                      u.push(l));
                this.addProcessedElement(t[s], s + 1);
              }
              for (this.removeTransformFromStyleList(), this.closeStyles(f), c = u.length, s = 0; s < c; s += 1)
                u[s].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function() {
              (this.transformHelper.opacity = 1),
                (this.transformHelper._opMdf = !1),
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
            }),
            (CVShapeElement.prototype.renderShapeTransform = function(t, e) {
              (t._opMdf || e.op._mdf || this._isFirstFrame) &&
                ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function() {
              var t,
                e,
                r,
                i,
                n,
                s,
                a,
                o,
                h,
                l = this.stylesList.length,
                p = this.globalData.renderer,
                c = this.globalData.canvasContext;
              for (t = 0; t < l; t += 1)
                if (
                  (('st' !== (o = (h = this.stylesList[t]).type) && 'gs' !== o) || 0 !== h.wi) &&
                  h.data._shouldRender &&
                  0 !== h.coOp &&
                  0 !== this.globalData.currentGlobalAlpha
                ) {
                  for (
                    p.save(),
                      s = h.elements,
                      'st' === o || 'gs' === o
                        ? ((c.strokeStyle = 'st' === o ? h.co : h.grd),
                          (c.lineWidth = h.wi),
                          (c.lineCap = h.lc),
                          (c.lineJoin = h.lj),
                          (c.miterLimit = h.ml || 0))
                        : (c.fillStyle = 'fl' === o ? h.co : h.grd),
                      p.ctxOpacity(h.coOp),
                      'st' !== o && 'gs' !== o && c.beginPath(),
                      p.ctxTransform(h.preTransforms.finalTransform.props),
                      r = s.length,
                      e = 0;
                    e < r;
                    e += 1
                  ) {
                    for (
                      ('st' !== o && 'gs' !== o) ||
                        (c.beginPath(), h.da && (c.setLineDash(h.da), (c.lineDashOffset = h.do))),
                        n = (a = s[e].trNodes).length,
                        i = 0;
                      i < n;
                      i += 1
                    )
                      'm' == a[i].t
                        ? c.moveTo(a[i].p[0], a[i].p[1])
                        : 'c' == a[i].t
                        ? c.bezierCurveTo(a[i].pts[0], a[i].pts[1], a[i].pts[2], a[i].pts[3], a[i].pts[4], a[i].pts[5])
                        : c.closePath();
                    ('st' !== o && 'gs' !== o) || (c.stroke(), h.da && c.setLineDash(this.dashResetter));
                  }
                  'st' !== o && 'gs' !== o && c.fill(h.r), p.restore();
                }
            }),
            (CVShapeElement.prototype.renderShape = function(t, e, r, i) {
              var n, s;
              for (s = t, n = e.length - 1; n >= 0; n -= 1)
                'tr' == e[n].ty
                  ? ((s = r[n].transform), this.renderShapeTransform(t, s))
                  : 'sh' == e[n].ty || 'el' == e[n].ty || 'rc' == e[n].ty || 'sr' == e[n].ty
                  ? this.renderPath(e[n], r[n])
                  : 'fl' == e[n].ty
                  ? this.renderFill(e[n], r[n], s)
                  : 'st' == e[n].ty
                  ? this.renderStroke(e[n], r[n], s)
                  : 'gf' == e[n].ty || 'gs' == e[n].ty
                  ? this.renderGradientFill(e[n], r[n], s)
                  : 'gr' == e[n].ty
                  ? this.renderShape(s, e[n].it, r[n].it)
                  : e[n].ty;
              i && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function(t, e) {
              if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r,
                  i,
                  n,
                  s = t.trNodes,
                  a = e.paths,
                  o = a._length;
                s.length = 0;
                var h = t.transforms.finalTransform;
                for (n = 0; n < o; n += 1) {
                  var l = a.shapes[n];
                  if (l && l.v) {
                    for (i = l._length, r = 1; r < i; r += 1)
                      1 === r && s.push({ t: 'm', p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }),
                        s.push({ t: 'c', pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]) });
                    1 === i && s.push({ t: 'm', p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }),
                      l.c &&
                        i &&
                        (s.push({ t: 'c', pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]) }),
                        s.push({ t: 'z' }));
                  }
                }
                t.trNodes = s;
              }
            }),
            (CVShapeElement.prototype.renderPath = function(t, e) {
              if (!0 !== t.hd && t._shouldRender) {
                var r,
                  i = e.styledShapes.length;
                for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh);
              }
            }),
            (CVShapeElement.prototype.renderFill = function(t, e, r) {
              var i = e.style;
              (e.c._mdf || this._isFirstFrame) &&
                (i.co = 'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'),
                (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
              var i = e.style;
              if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || (1 !== t.t && (e.h._mdf || e.a._mdf))) {
                var n = this.globalData.canvasContext,
                  s = e.s.v,
                  a = e.e.v;
                if (1 === t.t) f = n.createLinearGradient(s[0], s[1], a[0], a[1]);
                else
                  var o = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2)),
                    h = Math.atan2(a[1] - s[1], a[0] - s[0]),
                    l = o * (e.h.v >= 1 ? 0.99 : e.h.v <= -1 ? -0.99 : e.h.v),
                    p = Math.cos(h + e.a.v) * l + s[0],
                    c = Math.sin(h + e.a.v) * l + s[1],
                    f = n.createRadialGradient(p, c, 0, s[0], s[1], o);
                var u,
                  m = t.g.p,
                  d = e.g.c,
                  y = 1;
                for (u = 0; u < m; u += 1)
                  e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * u + 1]),
                    f.addColorStop(
                      d[4 * u] / 100,
                      'rgba(' + d[4 * u + 1] + ',' + d[4 * u + 2] + ',' + d[4 * u + 3] + ',' + y + ')'
                    );
                i.grd = f;
              }
              i.coOp = e.o.v * r.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function(t, e, r) {
              var i = e.style,
                n = e.d;
              n && (n._mdf || this._isFirstFrame) && ((i.da = n.dashArray), (i.do = n.dashoffset[0])),
                (e.c._mdf || this._isFirstFrame) &&
                  (i.co = 'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'),
                (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity),
                (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
            }),
            (CVShapeElement.prototype.destroy = function() {
              (this.shapesData = null),
                (this.globalData = null),
                (this.canvasContext = null),
                (this.stylesList.length = 0),
                (this.itemsData.length = 0);
            }),
            extendPrototype(
              [BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement],
              CVSolidElement
            ),
            (CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement),
            (CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
            (CVSolidElement.prototype.renderInnerContent = function() {
              var t = this.canvasContext;
              (t.fillStyle = this.data.sc), t.fillRect(0, 0, this.data.sw, this.data.sh);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
                ITextElement
              ],
              CVTextElement
            ),
            (CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d')),
            (CVTextElement.prototype.buildNewText = function() {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = !1;
              t.fc ? ((e = !0), (this.values.fill = this.buildColor(t.fc))) : (this.values.fill = 'rgba(0,0,0,0)'),
                (this.fill = e);
              var r = !1;
              t.sc && ((r = !0), (this.values.stroke = this.buildColor(t.sc)), (this.values.sWidth = t.sw));
              var i,
                n,
                s = this.globalData.fontManager.getFontByName(t.f),
                a = t.l,
                o = this.mHelper;
              (this.stroke = r),
                (this.values.fValue = t.finalSize + 'px ' + this.globalData.fontManager.getFontByName(t.f).fFamily),
                (n = t.finalText.length);
              var h,
                l,
                p,
                c,
                f,
                u,
                m,
                d,
                y,
                g,
                v = this.data.singleShape,
                b = (t.tr / 1e3) * t.finalSize,
                E = 0,
                x = 0,
                S = !0,
                P = 0;
              for (i = 0; i < n; i += 1) {
                for (
                  l =
                    ((h = this.globalData.fontManager.getCharData(
                      t.finalText[i],
                      s.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    )) &&
                      h.data) ||
                    {},
                    o.reset(),
                    v && a[i].n && ((E = -b), (x += t.yOffset), (x += S ? 1 : 0), (S = !1)),
                    m = (f = l.shapes ? l.shapes[0].it : []).length,
                    o.scale(t.finalSize / 100, t.finalSize / 100),
                    v && this.applyTextPropertiesToMatrix(t, o, a[i].line, E, x),
                    y = createSizedArray(m),
                    u = 0;
                  u < m;
                  u += 1
                ) {
                  for (c = f[u].ks.k.i.length, d = f[u].ks.k, g = [], p = 1; p < c; p += 1)
                    1 == p && g.push(o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)),
                      g.push(
                        o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0),
                        o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0),
                        o.applyToX(d.i[p][0], d.i[p][1], 0),
                        o.applyToY(d.i[p][0], d.i[p][1], 0),
                        o.applyToX(d.v[p][0], d.v[p][1], 0),
                        o.applyToY(d.v[p][0], d.v[p][1], 0)
                      );
                  g.push(
                    o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0),
                    o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0),
                    o.applyToX(d.i[0][0], d.i[0][1], 0),
                    o.applyToY(d.i[0][0], d.i[0][1], 0),
                    o.applyToX(d.v[0][0], d.v[0][1], 0),
                    o.applyToY(d.v[0][0], d.v[0][1], 0)
                  ),
                    (y[u] = g);
                }
                v && ((E += a[i].l), (E += b)),
                  this.textSpans[P] ? (this.textSpans[P].elem = y) : (this.textSpans[P] = { elem: y }),
                  (P += 1);
              }
            }),
            (CVTextElement.prototype.renderInnerContent = function() {
              var t,
                e,
                r,
                i,
                n,
                s,
                a = this.canvasContext;
              this.finalTransform.mat.props,
                (a.font = this.values.fValue),
                (a.lineCap = 'butt'),
                (a.lineJoin = 'miter'),
                (a.miterLimit = 4),
                this.data.singleShape ||
                  this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
              var o,
                h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
              e = l.length;
              var p,
                c,
                f = null,
                u = null,
                m = null;
              for (t = 0; t < e; t += 1)
                if (!l[t].n) {
                  if (
                    ((o = h[t]) &&
                      (this.globalData.renderer.save(),
                      this.globalData.renderer.ctxTransform(o.p),
                      this.globalData.renderer.ctxOpacity(o.o)),
                    this.fill)
                  ) {
                    for (
                      o && o.fc
                        ? f !== o.fc && ((f = o.fc), (a.fillStyle = o.fc))
                        : f !== this.values.fill && ((f = this.values.fill), (a.fillStyle = this.values.fill)),
                        i = (p = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        r = 0;
                      r < i;
                      r += 1
                    )
                      for (
                        s = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2;
                        n < s;
                        n += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          c[n],
                          c[n + 1],
                          c[n + 2],
                          c[n + 3],
                          c[n + 4],
                          c[n + 5]
                        );
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                  }
                  if (this.stroke) {
                    for (
                      o && o.sw
                        ? m !== o.sw && ((m = o.sw), (a.lineWidth = o.sw))
                        : m !== this.values.sWidth && ((m = this.values.sWidth), (a.lineWidth = this.values.sWidth)),
                        o && o.sc
                          ? u !== o.sc && ((u = o.sc), (a.strokeStyle = o.sc))
                          : u !== this.values.stroke &&
                            ((u = this.values.stroke), (a.strokeStyle = this.values.stroke)),
                        i = (p = this.textSpans[t].elem).length,
                        this.globalData.canvasContext.beginPath(),
                        r = 0;
                      r < i;
                      r += 1
                    )
                      for (
                        s = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2;
                        n < s;
                        n += 6
                      )
                        this.globalData.canvasContext.bezierCurveTo(
                          c[n],
                          c[n + 1],
                          c[n + 2],
                          c[n + 3],
                          c[n + 4],
                          c[n + 5]
                        );
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                  }
                  o && this.globalData.renderer.restore();
                }
            }),
            (CVEffects.prototype.renderFrame = function() {}),
            (HBaseElement.prototype = {
              checkBlendMode: function() {},
              initRendererElement: function() {
                (this.baseElement = createTag(this.data.tg || 'div')),
                  this.data.hasMask
                    ? ((this.svgElement = createNS('svg')),
                      (this.layerElement = createNS('g')),
                      (this.maskedElement = this.layerElement),
                      this.svgElement.appendChild(this.layerElement),
                      this.baseElement.appendChild(this.svgElement))
                    : (this.layerElement = this.baseElement),
                  styleDiv(this.baseElement);
              },
              createContainerElements: function() {
                (this.renderableEffectsManager = new CVEffects(this)),
                  (this.transformedElement = this.baseElement),
                  (this.maskedElement = this.layerElement),
                  this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
                  this.data.cl && this.layerElement.setAttribute('class', this.data.cl),
                  0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function() {
                this.finalTransform._matMdf &&
                  (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()),
                  this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v);
              },
              renderFrame: function() {
                this.data.hd ||
                  this.hidden ||
                  (this.renderTransform(),
                  this.renderRenderable(),
                  this.renderElement(),
                  this.renderInnerContent(),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              },
              destroy: function() {
                (this.layerElement = null),
                  (this.transformedElement = null),
                  this.matteElement && (this.matteElement = null),
                  this.maskManager && (this.maskManager.destroy(), (this.maskManager = null));
              },
              createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData);
              },
              addEffects: function() {},
              setMatte: function() {}
            }),
            (HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement),
            (HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy),
            (HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting),
            extendPrototype(
              [BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement],
              HSolidElement
            ),
            (HSolidElement.prototype.createContent = function() {
              var t;
              this.data.hasMask
                ? ((t = createNS('rect')).setAttribute('width', this.data.sw),
                  t.setAttribute('height', this.data.sh),
                  t.setAttribute('fill', this.data.sc),
                  this.svgElement.setAttribute('width', this.data.sw),
                  this.svgElement.setAttribute('height', this.data.sh))
                : (((t = createTag('div')).style.width = this.data.sw + 'px'),
                  (t.style.height = this.data.sh + 'px'),
                  (t.style.backgroundColor = this.data.sc)),
                this.layerElement.appendChild(t);
            }),
            extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
            (HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function() {
              this._createBaseContainerElements(),
                this.data.hasMask
                  ? (this.svgElement.setAttribute('width', this.data.w),
                    this.svgElement.setAttribute('height', this.data.h),
                    (this.transformedElement = this.baseElement))
                  : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function(t, e) {
              for (var r, i = 0; i < e; )
                this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()),
                  (i += 1);
              r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HSolidElement,
                SVGShapeElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
              ],
              HShapeElement
            ),
            (HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent),
            (HShapeElement.prototype.createContent = function() {
              var t;
              if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
                this.layerElement.appendChild(this.shapesContainer), (t = this.svgElement);
              else {
                t = createNS('svg');
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute('width', e.w),
                  t.setAttribute('height', e.h),
                  t.appendChild(this.shapesContainer),
                  this.layerElement.appendChild(t);
              }
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
                this.filterUniqueShapes(),
                (this.shapeCont = t);
            }),
            (HShapeElement.prototype.getTransformedPoint = function(t, e) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
              return e;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
              var r,
                i,
                n,
                s,
                a,
                o = t.sh.v,
                h = t.transformers,
                l = o._length;
              if (!(l <= 1)) {
                for (r = 0; r < l - 1; r += 1)
                  (i = this.getTransformedPoint(h, o.v[r])),
                    (n = this.getTransformedPoint(h, o.o[r])),
                    (s = this.getTransformedPoint(h, o.i[r + 1])),
                    (a = this.getTransformedPoint(h, o.v[r + 1])),
                    this.checkBounds(i, n, s, a, e);
                o.c &&
                  ((i = this.getTransformedPoint(h, o.v[r])),
                  (n = this.getTransformedPoint(h, o.o[r])),
                  (s = this.getTransformedPoint(h, o.i[0])),
                  (a = this.getTransformedPoint(h, o.v[0])),
                  this.checkBounds(i, n, s, a, e));
              }
            }),
            (HShapeElement.prototype.checkBounds = function(t, e, r, i, n) {
              this.getBoundsOfCurve(t, e, r, i);
              var s = this.shapeBoundingBox;
              (n.x = bm_min(s.left, n.x)),
                (n.xMax = bm_max(s.right, n.xMax)),
                (n.y = bm_min(s.top, n.y)),
                (n.yMax = bm_max(s.bottom, n.yMax));
            }),
            (HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }),
            (HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }),
            (HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
              for (var n, s, a, o, h, l, p, c = [[t[0], i[0]], [t[1], i[1]]], f = 0; f < 2; ++f)
                if (
                  ((s = 6 * t[f] - 12 * e[f] + 6 * r[f]),
                  (n = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f]),
                  (a = 3 * e[f] - 3 * t[f]),
                  (s |= 0),
                  (a |= 0),
                  0 !== (n |= 0))
                )
                  (h = s * s - 4 * a * n) < 0 ||
                    (0 < (l = (-s + bm_sqrt(h)) / (2 * n)) && l < 1 && c[f].push(this.calculateF(l, t, e, r, i, f)),
                    0 < (p = (-s - bm_sqrt(h)) / (2 * n)) && p < 1 && c[f].push(this.calculateF(p, t, e, r, i, f)));
                else {
                  if (0 === s) continue;
                  0 < (o = -a / s) && o < 1 && c[f].push(this.calculateF(o, t, e, r, i, f));
                }
              (this.shapeBoundingBox.left = bm_min.apply(null, c[0])),
                (this.shapeBoundingBox.top = bm_min.apply(null, c[1])),
                (this.shapeBoundingBox.right = bm_max.apply(null, c[0])),
                (this.shapeBoundingBox.bottom = bm_max.apply(null, c[1]));
            }),
            (HShapeElement.prototype.calculateF = function(t, e, r, i, n, s) {
              return (
                bm_pow(1 - t, 3) * e[s] +
                3 * bm_pow(1 - t, 2) * t * r[s] +
                3 * (1 - t) * bm_pow(t, 2) * i[s] +
                bm_pow(t, 3) * n[s]
              );
            }),
            (HShapeElement.prototype.calculateBoundingBox = function(t, e) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1)
                t[r] && t[r].sh
                  ? this.calculateShapeBoundingBox(t[r], e)
                  : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
            }),
            (HShapeElement.prototype.currentBoxContains = function(t) {
              return (
                this.currentBBox.x <= t.x &&
                this.currentBBox.y <= t.y &&
                this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
                this.currentBBox.height + this.currentBBox.y >= t.y + t.height
              );
            }),
            (HShapeElement.prototype.renderInnerContent = function() {
              if ((this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf))) {
                var t = this.tempBoundingBox,
                  e = 999999;
                if (
                  ((t.x = e),
                  (t.xMax = -e),
                  (t.y = e),
                  (t.yMax = -e),
                  this.calculateBoundingBox(this.itemsData, t),
                  (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                  (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                  this.currentBoxContains(t))
                )
                  return;
                var r = !1;
                this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width), this.shapeCont.setAttribute('width', t.width), (r = !0)),
                  this.currentBBox.h !== t.height &&
                    ((this.currentBBox.h = t.height), this.shapeCont.setAttribute('height', t.height), (r = !0)),
                  (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) &&
                    ((this.currentBBox.w = t.width),
                    (this.currentBBox.h = t.height),
                    (this.currentBBox.x = t.x),
                    (this.currentBBox.y = t.y),
                    this.shapeCont.setAttribute(
                      'viewBox',
                      this.currentBBox.x +
                        ' ' +
                        this.currentBBox.y +
                        ' ' +
                        this.currentBBox.w +
                        ' ' +
                        this.currentBBox.h
                    ),
                    (this.shapeCont.style.transform = this.shapeCont.style.webkitTransform =
                      'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)'));
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement
              ],
              HTextElement
            ),
            (HTextElement.prototype.createContent = function() {
              if (((this.isMasked = this.checkMasks()), this.isMasked)) {
                (this.renderType = 'svg'),
                  (this.compW = this.comp.data.w),
                  (this.compH = this.comp.data.h),
                  this.svgElement.setAttribute('width', this.compW),
                  this.svgElement.setAttribute('height', this.compH);
                var t = createNS('g');
                this.maskedElement.appendChild(t), (this.innerElem = t);
              } else (this.renderType = 'html'), (this.innerElem = this.layerElement);
              this.checkParenting();
            }),
            (HTextElement.prototype.buildNewText = function() {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = this.innerElem.style;
              (e.color = e.fill = t.fc ? this.buildColor(t.fc) : 'rgba(0,0,0,0)'),
                t.sc && ((e.stroke = this.buildColor(t.sc)), (e.strokeWidth = t.sw + 'px'));
              var r,
                i,
                n = this.globalData.fontManager.getFontByName(t.f);
              if (!this.globalData.fontManager.chars)
                if (((e.fontSize = t.finalSize + 'px'), (e.lineHeight = t.finalSize + 'px'), n.fClass))
                  this.innerElem.className = n.fClass;
                else {
                  e.fontFamily = n.fFamily;
                  var s = t.fWeight,
                    a = t.fStyle;
                  (e.fontStyle = a), (e.fontWeight = s);
                }
              var o,
                h,
                l,
                p = t.l;
              i = p.length;
              var c,
                f = this.mHelper,
                u = '',
                m = 0;
              for (r = 0; r < i; r += 1) {
                if (
                  (this.globalData.fontManager.chars
                    ? (this.textPaths[m]
                        ? (o = this.textPaths[m])
                        : ((o = createNS('path')).setAttribute('stroke-linecap', 'butt'),
                          o.setAttribute('stroke-linejoin', 'round'),
                          o.setAttribute('stroke-miterlimit', '4')),
                      this.isMasked ||
                        (this.textSpans[m]
                          ? (l = (h = this.textSpans[m]).children[0])
                          : (((h = createTag('div')).style.lineHeight = 0),
                            (l = createNS('svg')).appendChild(o),
                            styleDiv(h))))
                    : this.isMasked
                    ? (o = this.textPaths[m] ? this.textPaths[m] : createNS('text'))
                    : this.textSpans[m]
                    ? ((h = this.textSpans[m]), (o = this.textPaths[m]))
                    : (styleDiv((h = createTag('span'))), styleDiv((o = createTag('span'))), h.appendChild(o)),
                  this.globalData.fontManager.chars)
                ) {
                  var d,
                    y = this.globalData.fontManager.getCharData(
                      t.finalText[r],
                      n.fStyle,
                      this.globalData.fontManager.getFontByName(t.f).fFamily
                    );
                  if (
                    ((d = y ? y.data : null),
                    f.reset(),
                    d &&
                      d.shapes &&
                      ((c = d.shapes[0].it),
                      f.scale(t.finalSize / 100, t.finalSize / 100),
                      (u = this.createPathShape(f, c)),
                      o.setAttribute('d', u)),
                    this.isMasked)
                  )
                    this.innerElem.appendChild(o);
                  else {
                    if ((this.innerElem.appendChild(h), d && d.shapes)) {
                      document.body.appendChild(l);
                      var g = l.getBBox();
                      l.setAttribute('width', g.width + 2),
                        l.setAttribute('height', g.height + 2),
                        l.setAttribute(
                          'viewBox',
                          g.x - 1 + ' ' + (g.y - 1) + ' ' + (g.width + 2) + ' ' + (g.height + 2)
                        ),
                        (l.style.transform = l.style.webkitTransform =
                          'translate(' + (g.x - 1) + 'px,' + (g.y - 1) + 'px)'),
                        (p[r].yOffset = g.y - 1);
                    } else l.setAttribute('width', 1), l.setAttribute('height', 1);
                    h.appendChild(l);
                  }
                } else
                  (o.textContent = p[r].val),
                    o.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'),
                    this.isMasked
                      ? this.innerElem.appendChild(o)
                      : (this.innerElem.appendChild(h),
                        (o.style.transform = o.style.webkitTransform =
                          'translate3d(0,' + -t.finalSize / 1.2 + 'px,0)'));
                this.isMasked ? (this.textSpans[m] = o) : (this.textSpans[m] = h),
                  (this.textSpans[m].style.display = 'block'),
                  (this.textPaths[m] = o),
                  (m += 1);
              }
              for (; m < this.textSpans.length; ) (this.textSpans[m].style.display = 'none'), (m += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function() {
              if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked &&
                  this.finalTransform._matMdf &&
                  (this.svgElement.setAttribute(
                    'viewBox',
                    -this.finalTransform.mProp.p.v[0] +
                      ' ' +
                      -this.finalTransform.mProp.p.v[1] +
                      ' ' +
                      this.compW +
                      ' ' +
                      this.compH
                  ),
                  (this.svgElement.style.transform = this.svgElement.style.webkitTransform =
                    'translate(' +
                    -this.finalTransform.mProp.p.v[0] +
                    'px,' +
                    -this.finalTransform.mProp.p.v[1] +
                    'px)'));
              }
              if (
                (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
              ) {
                var t,
                  e,
                  r,
                  i,
                  n,
                  s = 0,
                  a = this.textAnimator.renderedLetters,
                  o = this.textProperty.currentData.l;
                for (e = o.length, t = 0; t < e; t += 1)
                  o[t].n
                    ? (s += 1)
                    : ((i = this.textSpans[t]),
                      (n = this.textPaths[t]),
                      (r = a[s]),
                      (s += 1),
                      r._mdf.m &&
                        (this.isMasked
                          ? i.setAttribute('transform', r.m)
                          : (i.style.transform = i.style.webkitTransform = r.m)),
                      (i.style.opacity = r.o),
                      r.sw && r._mdf.sw && n.setAttribute('stroke-width', r.sw),
                      r.sc && r._mdf.sc && n.setAttribute('stroke', r.sc),
                      r.fc && r._mdf.fc && (n.setAttribute('fill', r.fc), (n.style.color = r.fc)));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                  var h = this.innerElem.getBBox();
                  this.currentBBox.w !== h.width &&
                    ((this.currentBBox.w = h.width), this.svgElement.setAttribute('width', h.width)),
                    this.currentBBox.h !== h.height &&
                      ((this.currentBBox.h = h.height), this.svgElement.setAttribute('height', h.height)),
                    (this.currentBBox.w === h.width + 2 &&
                      this.currentBBox.h === h.height + 2 &&
                      this.currentBBox.x === h.x - 1 &&
                      this.currentBBox.y === h.y - 1) ||
                      ((this.currentBBox.w = h.width + 2),
                      (this.currentBBox.h = h.height + 2),
                      (this.currentBBox.x = h.x - 1),
                      (this.currentBBox.y = h.y - 1),
                      this.svgElement.setAttribute(
                        'viewBox',
                        this.currentBBox.x +
                          ' ' +
                          this.currentBBox.y +
                          ' ' +
                          this.currentBBox.w +
                          ' ' +
                          this.currentBBox.h
                      ),
                      (this.svgElement.style.transform = this.svgElement.style.webkitTransform =
                        'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)'));
                }
              }
            }),
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HSolidElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
              ],
              HImageElement
            ),
            (HImageElement.prototype.createContent = function() {
              var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image();
              this.data.hasMask
                ? ((this.imageElem = createNS('image')),
                  this.imageElem.setAttribute('width', this.assetData.w + 'px'),
                  this.imageElem.setAttribute('height', this.assetData.h + 'px'),
                  this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t),
                  this.layerElement.appendChild(this.imageElem),
                  this.baseElement.setAttribute('width', this.assetData.w),
                  this.baseElement.setAttribute('height', this.assetData.h))
                : this.layerElement.appendChild(e),
                (e.src = t),
                this.data.ln && this.baseElement.setAttribute('id', this.data.ln);
            }),
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            (HCameraElement.prototype.setup = function() {
              var t,
                e,
                r = this.comp.threeDElements.length;
              for (t = 0; t < r; t += 1)
                '3d' === (e = this.comp.threeDElements[t]).type &&
                  ((e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + 'px'),
                  (e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin =
                    '0px 0px 0px'),
                  (e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform =
                    'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'));
            }),
            (HCameraElement.prototype.createElements = function() {}),
            (HCameraElement.prototype.hide = function() {}),
            (HCameraElement.prototype.renderFrame = function() {
              var t,
                e,
                r = this._isFirstFrame;
              if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                  r = this.hierarchy[t].finalTransform.mProp._mdf || r;
              if (
                r ||
                this.pe._mdf ||
                (this.p && this.p._mdf) ||
                (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
                this.rx._mdf ||
                this.ry._mdf ||
                this.rz._mdf ||
                this.or._mdf ||
                (this.a && this.a._mdf)
              ) {
                if ((this.mat.reset(), this.hierarchy))
                  for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                    var i = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                      this.mat
                        .rotateX(-i.or.v[0])
                        .rotateY(-i.or.v[1])
                        .rotateZ(i.or.v[2]),
                      this.mat
                        .rotateX(-i.rx.v)
                        .rotateY(-i.ry.v)
                        .rotateZ(i.rz.v),
                      this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                      this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                  }
                if (
                  (this.p
                    ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                    : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                  this.a)
                ) {
                  var n;
                  n = this.p
                    ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]]
                    : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                  var s = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                    a = [n[0] / s, n[1] / s, n[2] / s],
                    o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                    h = Math.atan2(a[1], o),
                    l = Math.atan2(a[0], -a[2]);
                  this.mat.rotateY(l).rotateX(-h);
                }
                this.mat
                  .rotateX(-this.rx.v)
                  .rotateY(-this.ry.v)
                  .rotateZ(this.rz.v),
                  this.mat
                    .rotateX(-this.or.v[0])
                    .rotateY(-this.or.v[1])
                    .rotateZ(this.or.v[2]),
                  this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                  this.mat.translate(0, 0, this.pe.v);
                var p = !this._prevMat.equals(this.mat);
                if ((p || this.pe._mdf) && this.comp.threeDElements) {
                  var c;
                  for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                    '3d' === (c = this.comp.threeDElements[t]).type &&
                      (p && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()),
                      this.pe._mdf &&
                        (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective =
                          this.pe.v + 'px'));
                  this.mat.clone(this._prevMat);
                }
              }
              this._isFirstFrame = !1;
            }),
            (HCameraElement.prototype.prepareFrame = function(t) {
              this.prepareProperties(t, !0);
            }),
            (HCameraElement.prototype.destroy = function() {}),
            (HCameraElement.prototype.getBaseElement = function() {
              return null;
            }),
            (HEffects.prototype.renderFrame = function() {});
          var animationManager = (function() {
              var t = {},
                e = [],
                r = 0,
                i = 0,
                n = 0,
                s = !0,
                a = !1;
              function o(t) {
                for (var r = 0, n = t.target; r < i; )
                  e[r].animation === n && (e.splice(r, 1), (r -= 1), (i -= 1), n.isPaused || p()), (r += 1);
              }
              function h(t, r) {
                if (!t) return null;
                for (var n = 0; n < i; ) {
                  if (e[n].elem == t && null !== e[n].elem) return e[n].animation;
                  n += 1;
                }
                var s = new AnimationItem();
                return c(s, t), s.setData(t, r), s;
              }
              function l() {
                (n += 1), m();
              }
              function p() {
                n -= 1;
              }
              function c(t, r) {
                t.addEventListener('destroy', o),
                  t.addEventListener('_active', l),
                  t.addEventListener('_idle', p),
                  e.push({ elem: r, animation: t }),
                  (i += 1);
              }
              function f(t) {
                var o,
                  h = t - r;
                for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
                (r = t), n && !a ? window.requestAnimationFrame(f) : (s = !0);
              }
              function u(t) {
                (r = t), window.requestAnimationFrame(f);
              }
              function m() {
                !a && n && s && (window.requestAnimationFrame(u), (s = !1));
              }
              return (
                (t.registerAnimation = h),
                (t.loadAnimation = function(t) {
                  var e = new AnimationItem();
                  return c(e, null), e.setParams(t), e;
                }),
                (t.setSpeed = function(t, r) {
                  var n;
                  for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r);
                }),
                (t.setDirection = function(t, r) {
                  var n;
                  for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r);
                }),
                (t.play = function(t) {
                  var r;
                  for (r = 0; r < i; r += 1) e[r].animation.play(t);
                }),
                (t.pause = function(t) {
                  var r;
                  for (r = 0; r < i; r += 1) e[r].animation.pause(t);
                }),
                (t.stop = function(t) {
                  var r;
                  for (r = 0; r < i; r += 1) e[r].animation.stop(t);
                }),
                (t.togglePause = function(t) {
                  var r;
                  for (r = 0; r < i; r += 1) e[r].animation.togglePause(t);
                }),
                (t.searchAnimations = function(t, e, r) {
                  var i,
                    n = [].concat(
                      [].slice.call(document.getElementsByClassName('lottie')),
                      [].slice.call(document.getElementsByClassName('bodymovin'))
                    ),
                    s = n.length;
                  for (i = 0; i < s; i += 1) r && n[i].setAttribute('data-bm-type', r), h(n[i], t);
                  if (e && 0 === s) {
                    r || (r = 'svg');
                    var a = document.getElementsByTagName('body')[0];
                    a.innerHTML = '';
                    var o = createTag('div');
                    (o.style.width = '100%'),
                      (o.style.height = '100%'),
                      o.setAttribute('data-bm-type', r),
                      a.appendChild(o),
                      h(o, t);
                  }
                }),
                (t.resize = function() {
                  var t;
                  for (t = 0; t < i; t += 1) e[t].animation.resize();
                }),
                (t.goToAndStop = function(t, r, n) {
                  var s;
                  for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, r, n);
                }),
                (t.destroy = function(t) {
                  var r;
                  for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t);
                }),
                (t.freeze = function() {
                  a = !0;
                }),
                (t.unfreeze = function() {
                  (a = !1), m();
                }),
                (t.getRegisteredAnimations = function() {
                  var t,
                    r = e.length,
                    i = [];
                  for (t = 0; t < r; t += 1) i.push(e[t].animation);
                  return i;
                }),
                t
              );
            })(),
            AnimationItem = function() {
              (this._cbs = []),
                (this.name = ''),
                (this.path = ''),
                (this.isLoaded = !1),
                (this.currentFrame = 0),
                (this.currentRawFrame = 0),
                (this.totalFrames = 0),
                (this.frameRate = 0),
                (this.frameMult = 0),
                (this.playSpeed = 1),
                (this.playDirection = 1),
                (this.playCount = 0),
                (this.animationData = {}),
                (this.assets = []),
                (this.isPaused = !0),
                (this.autoplay = !1),
                (this.loop = !0),
                (this.renderer = null),
                (this.animationID = createElementID()),
                (this.assetsPath = ''),
                (this.timeCompleted = 0),
                (this.segmentPos = 0),
                (this.subframeEnabled = subframeEnabled),
                (this.segments = []),
                (this._idle = !0),
                (this._completedLoop = !1),
                (this.projectInterface = ProjectInterface()),
                (this.imagePreloader = new ImagePreloader());
            };
          extendPrototype([BaseEvent], AnimationItem),
            (AnimationItem.prototype.setParams = function(t) {
              t.context && (this.context = t.context),
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
              var e = t.animType ? t.animType : t.renderer ? t.renderer : 'svg';
              switch (e) {
                case 'canvas':
                  this.renderer = new CanvasRenderer(this, t.rendererSettings);
                  break;
                case 'svg':
                  this.renderer = new SVGRenderer(this, t.rendererSettings);
                  break;
                default:
                  this.renderer = new HybridRenderer(this, t.rendererSettings);
              }
              this.renderer.setProjectInterface(this.projectInterface),
                (this.animType = e),
                '' === t.loop ||
                  null === t.loop ||
                  (!1 === t.loop
                    ? (this.loop = !1)
                    : !0 === t.loop
                    ? (this.loop = !0)
                    : (this.loop = parseInt(t.loop))),
                (this.autoplay = !('autoplay' in t) || t.autoplay),
                (this.name = t.name ? t.name : ''),
                (this.autoloadSegments = !t.hasOwnProperty('autoloadSegments') || t.autoloadSegments),
                (this.assetsPath = t.assetsPath),
                t.animationData
                  ? this.configAnimation(t.animationData)
                  : t.path &&
                    (-1 !== t.path.lastIndexOf('\\')
                      ? (this.path = t.path.substr(0, t.path.lastIndexOf('\\') + 1))
                      : (this.path = t.path.substr(0, t.path.lastIndexOf('/') + 1)),
                    (this.fileName = t.path.substr(t.path.lastIndexOf('/') + 1)),
                    (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'))),
                    assetLoader.load(
                      t.path,
                      this.configAnimation.bind(this),
                      function() {
                        this.trigger('data_failed');
                      }.bind(this)
                    ));
            }),
            (AnimationItem.prototype.setData = function(t, e) {
              var r = { wrapper: t, animationData: e ? ('object' === typeof e ? e : JSON.parse(e)) : null },
                i = t.attributes;
              (r.path = i.getNamedItem('data-animation-path')
                ? i.getNamedItem('data-animation-path').value
                : i.getNamedItem('data-bm-path')
                ? i.getNamedItem('data-bm-path').value
                : i.getNamedItem('bm-path')
                ? i.getNamedItem('bm-path').value
                : ''),
                (r.animType = i.getNamedItem('data-anim-type')
                  ? i.getNamedItem('data-anim-type').value
                  : i.getNamedItem('data-bm-type')
                  ? i.getNamedItem('data-bm-type').value
                  : i.getNamedItem('bm-type')
                  ? i.getNamedItem('bm-type').value
                  : i.getNamedItem('data-bm-renderer')
                  ? i.getNamedItem('data-bm-renderer').value
                  : i.getNamedItem('bm-renderer')
                  ? i.getNamedItem('bm-renderer').value
                  : 'canvas');
              var n = i.getNamedItem('data-anim-loop')
                ? i.getNamedItem('data-anim-loop').value
                : i.getNamedItem('data-bm-loop')
                ? i.getNamedItem('data-bm-loop').value
                : i.getNamedItem('bm-loop')
                ? i.getNamedItem('bm-loop').value
                : '';
              '' === n || (r.loop = 'false' !== n && ('true' === n || parseInt(n)));
              var s = i.getNamedItem('data-anim-autoplay')
                ? i.getNamedItem('data-anim-autoplay').value
                : i.getNamedItem('data-bm-autoplay')
                ? i.getNamedItem('data-bm-autoplay').value
                : !i.getNamedItem('bm-autoplay') || i.getNamedItem('bm-autoplay').value;
              (r.autoplay = 'false' !== s),
                (r.name = i.getNamedItem('data-name')
                  ? i.getNamedItem('data-name').value
                  : i.getNamedItem('data-bm-name')
                  ? i.getNamedItem('data-bm-name').value
                  : i.getNamedItem('bm-name')
                  ? i.getNamedItem('bm-name').value
                  : ''),
                'false' ===
                  (i.getNamedItem('data-anim-prerender')
                    ? i.getNamedItem('data-anim-prerender').value
                    : i.getNamedItem('data-bm-prerender')
                    ? i.getNamedItem('data-bm-prerender').value
                    : i.getNamedItem('bm-prerender')
                    ? i.getNamedItem('bm-prerender').value
                    : '') && (r.prerender = !1),
                this.setParams(r);
            }),
            (AnimationItem.prototype.includeLayers = function(t) {
              t.op > this.animationData.op &&
                ((this.animationData.op = t.op), (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
              var e,
                r,
                i = this.animationData.layers,
                n = i.length,
                s = t.layers,
                a = s.length;
              for (r = 0; r < a; r += 1)
                for (e = 0; e < n; ) {
                  if (i[e].id == s[r].id) {
                    i[e] = s[r];
                    break;
                  }
                  e += 1;
                }
              if (
                ((t.chars || t.fonts) &&
                  (this.renderer.globalData.fontManager.addChars(t.chars),
                  this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
                t.assets)
              )
                for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
              (this.animationData.__complete = !1),
                dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
                this.renderer.includeLayers(t.layers),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function() {
              var t = this.animationData.segments;
              if (!t || 0 === t.length || !this.autoloadSegments)
                return this.trigger('data_ready'), void (this.timeCompleted = this.totalFrames);
              var e = t.shift();
              this.timeCompleted = e.time * this.frameRate;
              var r = this.path + this.fileName + '_' + this.segmentPos + '.json';
              (this.segmentPos += 1),
                assetLoader.load(
                  r,
                  this.includeLayers.bind(this),
                  function() {
                    this.trigger('data_failed');
                  }.bind(this)
                );
            }),
            (AnimationItem.prototype.loadSegments = function() {
              this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function() {
              this.trigger('loaded_images'), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function() {
              this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
            }),
            (AnimationItem.prototype.configAnimation = function(t) {
              if (this.renderer)
                try {
                  (this.animationData = t),
                    (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip)),
                    this.renderer.configAnimation(t),
                    t.assets || (t.assets = []),
                    (this.assets = this.animationData.assets),
                    (this.frameRate = this.animationData.fr),
                    (this.firstFrame = Math.round(this.animationData.ip)),
                    (this.frameMult = this.animationData.fr / 1e3),
                    this.renderer.searchExtraCompositions(t.assets),
                    this.trigger('config_ready'),
                    this.preloadImages(),
                    this.loadSegments(),
                    this.updaFrameModifier(),
                    this.waitForFontsLoaded();
                } catch (e) {
                  this.triggerConfigError(e);
                }
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function() {
              this.renderer &&
                (this.renderer.globalData.fontManager.loaded()
                  ? this.checkLoaded()
                  : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }),
            (AnimationItem.prototype.checkLoaded = function() {
              this.isLoaded ||
                !this.renderer.globalData.fontManager.loaded() ||
                (!this.imagePreloader.loaded() && 'canvas' === this.renderer.rendererType) ||
                ((this.isLoaded = !0),
                dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                  function() {
                    this.trigger('DOMLoaded');
                  }.bind(this),
                  0
                ),
                this.gotoFrame(),
                this.autoplay && this.play());
            }),
            (AnimationItem.prototype.resize = function() {
              this.renderer.updateContainerSize();
            }),
            (AnimationItem.prototype.setSubframe = function(t) {
              this.subframeEnabled = !!t;
            }),
            (AnimationItem.prototype.gotoFrame = function() {
              (this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame),
                this.timeCompleted !== this.totalFrames &&
                  this.currentFrame > this.timeCompleted &&
                  (this.currentFrame = this.timeCompleted),
                this.trigger('enterFrame'),
                this.renderFrame();
            }),
            (AnimationItem.prototype.renderFrame = function() {
              if (!1 !== this.isLoaded)
                try {
                  this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                } catch (t) {
                  this.triggerRenderFrameError(t);
                }
            }),
            (AnimationItem.prototype.play = function(t) {
              (t && this.name != t) ||
                (!0 === this.isPaused &&
                  ((this.isPaused = !1), this._idle && ((this._idle = !1), this.trigger('_active'))));
            }),
            (AnimationItem.prototype.pause = function(t) {
              (t && this.name != t) ||
                (!1 === this.isPaused && ((this.isPaused = !0), (this._idle = !0), this.trigger('_idle')));
            }),
            (AnimationItem.prototype.togglePause = function(t) {
              (t && this.name != t) || (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function(t) {
              (t && this.name != t) ||
                (this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.goToAndStop = function(t, e, r) {
              (r && this.name != r) ||
                (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier),
                this.pause());
            }),
            (AnimationItem.prototype.goToAndPlay = function(t, e, r) {
              this.goToAndStop(t, e, r), this.play();
            }),
            (AnimationItem.prototype.advanceTime = function(t) {
              if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                  r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0
                  ? this.loop && this.playCount !== this.loop
                    ? e >= this.totalFrames
                      ? ((this.playCount += 1),
                        this.checkSegments(e % this.totalFrames) ||
                          (this.setCurrentRawFrameValue(e % this.totalFrames),
                          (this._completedLoop = !0),
                          this.trigger('loopComplete')))
                      : this.setCurrentRawFrameValue(e)
                    : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) ||
                      ((r = !0), (e = this.totalFrames - 1))
                  : e < 0
                  ? this.checkSegments(e % this.totalFrames) ||
                    (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                      ? ((r = !0), (e = 0))
                      : (this.setCurrentRawFrameValue(this.totalFrames + (e % this.totalFrames)),
                        this._completedLoop ? this.trigger('loopComplete') : (this._completedLoop = !0)))
                  : this.setCurrentRawFrameValue(e),
                  r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger('complete'));
              }
            }),
            (AnimationItem.prototype.adjustSegment = function(t, e) {
              (this.playCount = 0),
                t[1] < t[0]
                  ? (this.frameModifier > 0 &&
                      (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                    (this.timeCompleted = this.totalFrames = t[0] - t[1]),
                    (this.firstFrame = t[1]),
                    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                  : t[1] > t[0] &&
                    (this.frameModifier < 0 &&
                      (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                    (this.timeCompleted = this.totalFrames = t[1] - t[0]),
                    (this.firstFrame = t[0]),
                    this.setCurrentRawFrameValue(0.001 + e)),
                this.trigger('segmentStart');
            }),
            (AnimationItem.prototype.setSegment = function(t, e) {
              var r = -1;
              this.isPaused &&
                (this.currentRawFrame + this.firstFrame < t
                  ? (r = t)
                  : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
                (this.firstFrame = t),
                (this.timeCompleted = this.totalFrames = e - t),
                -1 !== r && this.goToAndStop(r, !0);
            }),
            (AnimationItem.prototype.playSegments = function(t, e) {
              if ((e && (this.segments.length = 0), 'object' === typeof t[0])) {
                var r,
                  i = t.length;
                for (r = 0; r < i; r += 1) this.segments.push(t[r]);
              } else this.segments.push(t);
              this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function(t) {
              (this.segments.length = 0),
                this.segments.push([this.animationData.ip, this.animationData.op]),
                t && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function(t) {
              return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
            }),
            (AnimationItem.prototype.destroy = function(t) {
              (t && this.name != t) ||
                !this.renderer ||
                (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger('destroy'),
                (this._cbs = null),
                (this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null),
                (this.renderer = null));
            }),
            (AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
              (this.currentRawFrame = t), this.gotoFrame();
            }),
            (AnimationItem.prototype.setSpeed = function(t) {
              (this.playSpeed = t), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setDirection = function(t) {
              (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.updaFrameModifier = function() {
              this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
            }),
            (AnimationItem.prototype.getPath = function() {
              return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function(t) {
              var e = '';
              if (t.e) e = t.p;
              else if (this.assetsPath) {
                var r = t.p;
                -1 !== r.indexOf('images/') && (r = r.split('/')[1]), (e = this.assetsPath + r);
              } else (e = this.path), (e += t.u ? t.u : ''), (e += t.p);
              return e;
            }),
            (AnimationItem.prototype.getAssetData = function(t) {
              for (var e = 0, r = this.assets.length; e < r; ) {
                if (t == this.assets[e].id) return this.assets[e];
                e += 1;
              }
            }),
            (AnimationItem.prototype.hide = function() {
              this.renderer.hide();
            }),
            (AnimationItem.prototype.show = function() {
              this.renderer.show();
            }),
            (AnimationItem.prototype.getDuration = function(t) {
              return t ? this.totalFrames : this.totalFrames / this.frameRate;
            }),
            (AnimationItem.prototype.trigger = function(t) {
              if (this._cbs && this._cbs[t])
                switch (t) {
                  case 'enterFrame':
                    this.triggerEvent(
                      t,
                      new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier)
                    );
                    break;
                  case 'loopComplete':
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                  case 'complete':
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                  case 'segmentStart':
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                  case 'destroy':
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                  default:
                    this.triggerEvent(t);
                }
              'enterFrame' === t &&
                this.onEnterFrame &&
                this.onEnterFrame.call(
                  this,
                  new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)
                ),
                'loopComplete' === t &&
                  this.onLoopComplete &&
                  this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)),
                'complete' === t &&
                  this.onComplete &&
                  this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)),
                'segmentStart' === t &&
                  this.onSegmentStart &&
                  this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)),
                'destroy' === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
            }),
            (AnimationItem.prototype.triggerRenderFrameError = function(t) {
              var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
              this.triggerEvent('error', e), this.onError && this.onError.call(this, e);
            }),
            (AnimationItem.prototype.triggerConfigError = function(t) {
              var e = new BMConfigErrorEvent(t, this.currentFrame);
              this.triggerEvent('error', e), this.onError && this.onError.call(this, e);
            });
          var Expressions = (function() {
            var t = {
              initExpressions: function(t) {
                var e = 0,
                  r = [];
                (t.renderer.compInterface = CompExpressionInterface(t.renderer)),
                  t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                  (t.renderer.globalData.pushExpression = function() {
                    e += 1;
                  }),
                  (t.renderer.globalData.popExpression = function() {
                    0 === (e -= 1) &&
                      (function() {
                        var t,
                          e = r.length;
                        for (t = 0; t < e; t += 1) r[t].release();
                        r.length = 0;
                      })();
                  }),
                  (t.renderer.globalData.registerExpressionProperty = function(t) {
                    -1 === r.indexOf(t) && r.push(t);
                  });
              }
            };
            return t;
          })();
          expressionsPlugin = Expressions;
          var ExpressionManager = (function() {
              var ob = {},
                Math = BMMath,
                window = null,
                document = null;
              function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array;
              }
              function isNumerable(t, e) {
                return 'number' === t || 'boolean' === t || 'string' === t || e instanceof Number;
              }
              function $bm_neg(t) {
                var e = typeof t;
                if ('number' === e || 'boolean' === e || t instanceof Number) return -t;
                if ($bm_isInstanceOfArray(t)) {
                  var r,
                    i = t.length,
                    n = [];
                  for (r = 0; r < i; r += 1) n[r] = -t[r];
                  return n;
                }
                return t.propType ? t.v : void 0;
              }
              var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
                easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get,
                easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;
              function sum(t, e) {
                var r = typeof t,
                  i = typeof e;
                if ('string' === r || 'string' === i) return t + e;
                if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return ((t = t.slice(0))[0] = t[0] + e), t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return ((e = e.slice(0))[0] = t + e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a; )
                    ('number' === typeof t[n] || t[n] instanceof Number) &&
                    ('number' === typeof e[n] || e[n] instanceof Number)
                      ? (o[n] = t[n] + e[n])
                      : (o[n] = void 0 === e[n] ? t[n] : t[n] || e[n]),
                      (n += 1);
                  return o;
                }
                return 0;
              }
              var add = sum;
              function sub(t, e) {
                var r = typeof t,
                  i = typeof e;
                if (isNumerable(r, t) && isNumerable(i, e))
                  return 'string' === r && (t = parseInt(t)), 'string' === i && (e = parseInt(e)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return ((t = t.slice(0))[0] = t[0] - e), t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return ((e = e.slice(0))[0] = t - e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a; )
                    ('number' === typeof t[n] || t[n] instanceof Number) &&
                    ('number' === typeof e[n] || e[n] instanceof Number)
                      ? (o[n] = t[n] - e[n])
                      : (o[n] = void 0 === e[n] ? t[n] : t[n] || e[n]),
                      (n += 1);
                  return o;
                }
                return 0;
              }
              function mul(t, e) {
                var r,
                  i,
                  n,
                  s = typeof t,
                  a = typeof e;
                if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                  for (n = t.length, r = createTypedArray('float32', n), i = 0; i < n; i += 1) r[i] = t[i] * e;
                  return r;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                  for (n = e.length, r = createTypedArray('float32', n), i = 0; i < n; i += 1) r[i] = t * e[i];
                  return r;
                }
                return 0;
              }
              function div(t, e) {
                var r,
                  i,
                  n,
                  s = typeof t,
                  a = typeof e;
                if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                  for (n = t.length, r = createTypedArray('float32', n), i = 0; i < n; i += 1) r[i] = t[i] / e;
                  return r;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                  for (n = e.length, r = createTypedArray('float32', n), i = 0; i < n; i += 1) r[i] = t / e[i];
                  return r;
                }
                return 0;
              }
              function mod(t, e) {
                return 'string' === typeof t && (t = parseInt(t)), 'string' === typeof e && (e = parseInt(e)), t % e;
              }
              var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;
              function clamp(t, e, r) {
                if (e > r) {
                  var i = r;
                  (r = e), (e = i);
                }
                return Math.min(Math.max(t, e), r);
              }
              function radiansToDegrees(t) {
                return t / degToRads;
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                return t * degToRads;
              }
              var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                if ('number' === typeof t || t instanceof Number) return (e = e || 0), Math.abs(t - e);
                e || (e = helperLengthArray);
                var r,
                  i = Math.min(t.length, e.length),
                  n = 0;
                for (r = 0; r < i; r += 1) n += Math.pow(e[r] - t[r], 2);
                return Math.sqrt(n);
              }
              function normalize(t) {
                return div(t, length(t));
              }
              function rgbToHsl(t) {
                var e,
                  r,
                  i = t[0],
                  n = t[1],
                  s = t[2],
                  a = Math.max(i, n, s),
                  o = Math.min(i, n, s),
                  h = (a + o) / 2;
                if (a == o) e = r = 0;
                else {
                  var l = a - o;
                  switch (((r = h > 0.5 ? l / (2 - a - o) : l / (a + o)), a)) {
                    case i:
                      e = (n - s) / l + (n < s ? 6 : 0);
                      break;
                    case n:
                      e = (s - i) / l + 2;
                      break;
                    case s:
                      e = (i - n) / l + 4;
                  }
                  e /= 6;
                }
                return [e, r, h, t[3]];
              }
              function hue2rgb(t, e, r) {
                return (
                  r < 0 && (r += 1),
                  r > 1 && (r -= 1),
                  r < 1 / 6 ? t + 6 * (e - t) * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                );
              }
              function hslToRgb(t) {
                var e,
                  r,
                  i,
                  n = t[0],
                  s = t[1],
                  a = t[2];
                if (0 === s) e = r = i = a;
                else {
                  var o = a < 0.5 ? a * (1 + s) : a + s - a * s,
                    h = 2 * a - o;
                  (e = hue2rgb(h, o, n + 1 / 3)), (r = hue2rgb(h, o, n)), (i = hue2rgb(h, o, n - 1 / 3));
                }
                return [e, r, i, t[3]];
              }
              function linear(t, e, r, i, n) {
                if (((void 0 !== i && void 0 !== n) || ((i = e), (n = r), (e = 0), (r = 1)), r < e)) {
                  var s = r;
                  (r = e), (e = s);
                }
                if (t <= e) return i;
                if (t >= r) return n;
                var a = r === e ? 0 : (t - e) / (r - e);
                if (!i.length) return i + (n - i) * a;
                var o,
                  h = i.length,
                  l = createTypedArray('float32', h);
                for (o = 0; o < h; o += 1) l[o] = i[o] + (n[o] - i[o]) * a;
                return l;
              }
              function random(t, e) {
                if ((void 0 === e && (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))), e.length)) {
                  var r,
                    i = e.length;
                  t || (t = createTypedArray('float32', i));
                  var n = createTypedArray('float32', i),
                    s = BMMath.random();
                  for (r = 0; r < i; r += 1) n[r] = t[r] + s * (e[r] - t[r]);
                  return n;
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
              }
              function createPath(t, e, r, i) {
                var n,
                  s = t.length,
                  a = shape_pool.newElement();
                a.setPathData(!!i, s);
                var o,
                  h,
                  l = [0, 0];
                for (n = 0; n < s; n += 1)
                  (o = e && e[n] ? e[n] : l),
                    (h = r && r[n] ? r[n] : l),
                    a.setTripleAt(
                      t[n][0],
                      t[n][1],
                      h[0] + t[n][0],
                      h[1] + t[n][1],
                      o[0] + t[n][0],
                      o[1] + t[n][1],
                      n,
                      !0
                    );
                return a;
              }
              function initiateExpression(elem, data, property) {
                var val = data.x,
                  needsVelocity = /velocity(?![\w\d])/.test(val),
                  _needsRandom = -1 !== val.indexOf('random'),
                  elemType = elem.data.ty,
                  transform,
                  $bm_transform,
                  content,
                  effect,
                  thisProperty = property;
                (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                  Object.defineProperty(thisProperty, 'value', {
                    get: function() {
                      return thisProperty.v;
                    }
                  }),
                  (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                  (elem.comp.displayStartTime = 0);
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                  outPoint = elem.data.op / elem.comp.globalData.frameRate,
                  width = elem.data.sw ? elem.data.sw : 0,
                  height = elem.data.sh ? elem.data.sh : 0,
                  name = elem.data.nm,
                  loopIn,
                  loop_in,
                  loopOut,
                  loop_out,
                  smooth,
                  toWorld,
                  fromWorld,
                  fromComp,
                  toComp,
                  fromCompToSurface,
                  position,
                  rotation,
                  anchorPoint,
                  scale,
                  thisLayer,
                  thisComp,
                  mask,
                  valueAtTime,
                  velocityAtTime,
                  __expression_functions = [],
                  scoped_bm_rt;
                if (data.xf) {
                  var i,
                    len = data.xf.length;
                  for (i = 0; i < len; i += 1)
                    __expression_functions[i] = eval('(function(){ return ' + data.xf[i] + '}())');
                }
                var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0],
                  numKeys = property.kf ? data.k.length : 0,
                  active = !this.data || !0 !== this.data.hd,
                  wiggle = function(t, e) {
                    var r,
                      i,
                      n = this.pv.length ? this.pv.length : 1,
                      s = createTypedArray('float32', n),
                      a = Math.floor(5 * time);
                    for (r = 0, i = 0; r < a; ) {
                      for (i = 0; i < n; i += 1) s[i] += -e + 2 * e * BMMath.random();
                      r += 1;
                    }
                    var o = 5 * time,
                      h = o - Math.floor(o),
                      l = createTypedArray('float32', n);
                    if (n > 1) {
                      for (i = 0; i < n; i += 1) l[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * h;
                      return l;
                    }
                    return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h;
                  }.bind(this);
                function loopInDuration(t, e) {
                  return loopIn(t, e, !0);
                }
                function loopOutDuration(t, e) {
                  return loopOut(t, e, !0);
                }
                thisProperty.loopIn && ((loopIn = thisProperty.loopIn.bind(thisProperty)), (loop_in = loopIn)),
                  thisProperty.loopOut && ((loopOut = thisProperty.loopOut.bind(thisProperty)), (loop_out = loopOut)),
                  thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                  this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                  this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                  time,
                  velocity,
                  value,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue;
                function lookAt(t, e) {
                  var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                    i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                  return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
                }
                function easeOut(t, e, r, i, n) {
                  return applyEase(easeOutBez, t, e, r, i, n);
                }
                function easeIn(t, e, r, i, n) {
                  return applyEase(easeInBez, t, e, r, i, n);
                }
                function ease(t, e, r, i, n) {
                  return applyEase(easeInOutBez, t, e, r, i, n);
                }
                function applyEase(t, e, r, i, n, s) {
                  void 0 === n ? ((n = r), (s = i)) : (e = (e - r) / (i - r));
                  var a = t((e = e > 1 ? 1 : e < 0 ? 0 : e));
                  if ($bm_isInstanceOfArray(n)) {
                    var o,
                      h = n.length,
                      l = createTypedArray('float32', h);
                    for (o = 0; o < h; o += 1) l[o] = (s[o] - n[o]) * a + n[o];
                    return l;
                  }
                  return (s - n) * a + n;
                }
                function nearestKey(t) {
                  var e,
                    r,
                    i,
                    n = data.k.length;
                  if (data.k.length && 'number' !== typeof data.k[0])
                    if (((r = -1), (t *= elem.comp.globalData.frameRate) < data.k[0].t)) (r = 1), (i = data.k[0].t);
                    else {
                      for (e = 0; e < n - 1; e += 1) {
                        if (t === data.k[e].t) {
                          (r = e + 1), (i = data.k[e].t);
                          break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                          t - data.k[e].t > data.k[e + 1].t - t
                            ? ((r = e + 2), (i = data.k[e + 1].t))
                            : ((r = e + 1), (i = data.k[e].t));
                          break;
                        }
                      }
                      -1 === r && ((r = e + 1), (i = data.k[e].t));
                    }
                  else (r = 0), (i = 0);
                  var s = {};
                  return (s.index = r), (s.time = i / elem.comp.globalData.frameRate), s;
                }
                function key(t) {
                  var e, r, i;
                  if (!data.k.length || 'number' === typeof data.k[0])
                    throw new Error('The property has no keyframe at index ' + t);
                  (t -= 1), (e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] });
                  var n = data.k[t].hasOwnProperty('s') ? data.k[t].s : data.k[t - 1].e;
                  for (i = n.length, r = 0; r < i; r += 1) (e[r] = n[r]), (e.value[r] = n[r]);
                  return e;
                }
                function framesToTime(t, e) {
                  return e || (e = elem.comp.globalData.frameRate), t / e;
                }
                function timeToFrames(t, e) {
                  return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
                }
                function seedRandom(t) {
                  BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                  return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                  return 'string' === typeof value ? (void 0 === e ? value.substring(t) : value.substring(t, e)) : '';
                }
                function substr(t, e) {
                  return 'string' === typeof value ? (void 0 === e ? value.substr(t) : value.substr(t, e)) : '';
                }
                function posterizeTime(t) {
                  (time = 0 === t ? 0 : Math.floor(time * t) / t), (value = valueAtTime(time));
                }
                var index = elem.data.ind,
                  hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                  parent,
                  randSeed = Math.floor(1e6 * Math.random()),
                  globalData = elem.globalData;
                function executeExpression(t) {
                  return (
                    (value = t),
                    _needsRandom && seedRandom(randSeed),
                    this.frameExpressionId === elem.globalData.frameId && 'textSelector' !== this.propType
                      ? value
                      : ('textSelector' === this.propType &&
                          ((textIndex = this.textIndex),
                          (textTotal = this.textTotal),
                          (selectorValue = this.selectorValue)),
                        thisLayer ||
                          ((text = elem.layerInterface.text),
                          (thisLayer = elem.layerInterface),
                          (thisComp = elem.comp.compInterface),
                          (toWorld = thisLayer.toWorld.bind(thisLayer)),
                          (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                          (fromComp = thisLayer.fromComp.bind(thisLayer)),
                          (toComp = thisLayer.toComp.bind(thisLayer)),
                          (mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null),
                          (fromCompToSurface = fromComp)),
                        transform ||
                          ((transform = elem.layerInterface('ADBE Transform Group')),
                          ($bm_transform = transform),
                          transform && (anchorPoint = transform.anchorPoint)),
                        4 !== elemType || content || (content = thisLayer('ADBE Root Vectors Group')),
                        effect || (effect = thisLayer(4)),
                        (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) &&
                          !parent &&
                          (parent = elem.hierarchy[0].layerInterface),
                        (time = this.comp.renderedFrame / this.comp.globalData.frameRate),
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        (this.frameExpressionId = elem.globalData.frameId),
                        'shape' === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v),
                        scoped_bm_rt)
                  );
                }
                return executeExpression;
              }
              return (ob.initiateExpression = initiateExpression), ob;
            })(),
            expressionHelpers = {
              searchExpressions: function(t, e, r) {
                e.x &&
                  ((r.k = !0),
                  (r.x = !0),
                  (r.initiateExpression = ExpressionManager.initiateExpression),
                  r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
              },
              getSpeedAtTime: function(t) {
                var e = this.getValueAtTime(t),
                  r = this.getValueAtTime(t + -0.01),
                  i = 0;
                if (e.length) {
                  var n;
                  for (n = 0; n < e.length; n += 1) i += Math.pow(r[n] - e[n], 2);
                  i = 100 * Math.sqrt(i);
                } else i = 0;
                return i;
              },
              getVelocityAtTime: function(t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  r,
                  i = this.getValueAtTime(t),
                  n = this.getValueAtTime(t + -0.001);
                if (i.length)
                  for (e = createTypedArray('float32', i.length), r = 0; r < i.length; r += 1)
                    e[r] = (n[r] - i[r]) / -0.001;
                else e = (n - i) / -0.001;
                return e;
              },
              getValueAtTime: function(t) {
                return (
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0),
                    (this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime)),
                    (this._cachingAtTime.lastFrame = t)),
                  this._cachingAtTime.value
                );
              },
              getStaticValueAtTime: function() {
                return this.pv;
              },
              setGroupProperty: function(t) {
                this.propertyGroup = t;
              }
            };
          !(function() {
            function t(t, e, r) {
              if (!this.k || !this.keyframes) return this.pv;
              t = t ? t.toLowerCase() : '';
              var i,
                n,
                s,
                a,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[l.length - 1].t;
              if (h <= p) return this.pv;
              if (
                (r
                  ? (n =
                      p -
                      (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)))
                  : ((!e || e > l.length - 1) && (e = l.length - 1), (i = p - (n = l[l.length - 1 - e].t))),
                'pingpong' === t)
              ) {
                if (Math.floor((h - n) / i) % 2 !== 0)
                  return this.getValueAtTime((i - ((h - n) % i) + n) / this.comp.globalData.frameRate, 0);
              } else {
                if ('offset' === t) {
                  var c = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                    f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                    u = this.getValueAtTime((((h - n) % i) + n) / this.comp.globalData.frameRate, 0),
                    m = Math.floor((h - n) / i);
                  if (this.pv.length) {
                    for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = (f[s] - c[s]) * m + u[s];
                    return o;
                  }
                  return (f - c) * m + u;
                }
                if ('continue' === t) {
                  var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                    y = this.getValueAtTime((p - 0.001) / this.comp.globalData.frameRate, 0);
                  if (this.pv.length) {
                    for (a = (o = new Array(d.length)).length, s = 0; s < a; s += 1)
                      o[s] = d[s] + ((d[s] - y[s]) * ((h - p) / this.comp.globalData.frameRate)) / 5e-4;
                    return o;
                  }
                  return d + ((h - p) / 0.001) * (d - y);
                }
              }
              return this.getValueAtTime((((h - n) % i) + n) / this.comp.globalData.frameRate, 0);
            }
            function e(t, e, r) {
              if (!this.k) return this.pv;
              t = t ? t.toLowerCase() : '';
              var i,
                n,
                s,
                a,
                o,
                h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[0].t;
              if (h >= p) return this.pv;
              if (
                (r
                  ? (n =
                      p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)))
                  : ((!e || e > l.length - 1) && (e = l.length - 1), (i = (n = l[e].t) - p)),
                'pingpong' === t)
              ) {
                if (Math.floor((p - h) / i) % 2 === 0)
                  return this.getValueAtTime((((p - h) % i) + p) / this.comp.globalData.frameRate, 0);
              } else {
                if ('offset' === t) {
                  var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                    f = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                    u = this.getValueAtTime((i - ((p - h) % i) + p) / this.comp.globalData.frameRate, 0),
                    m = Math.floor((p - h) / i) + 1;
                  if (this.pv.length) {
                    for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = u[s] - (f[s] - c[s]) * m;
                    return o;
                  }
                  return u - (f - c) * m;
                }
                if ('continue' === t) {
                  var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                    y = this.getValueAtTime((p + 0.001) / this.comp.globalData.frameRate, 0);
                  if (this.pv.length) {
                    for (a = (o = new Array(d.length)).length, s = 0; s < a; s += 1)
                      o[s] = d[s] + ((d[s] - y[s]) * (p - h)) / 0.001;
                    return o;
                  }
                  return d + ((d - y) * (p - h)) / 0.001;
                }
              }
              return this.getValueAtTime((i - ((p - h) % i) + p) / this.comp.globalData.frameRate, 0);
            }
            function r(t, e) {
              if (!this.k) return this.pv;
              if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1)) return this.pv;
              var r,
                i,
                n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                s = n - t,
                a = e > 1 ? (n + t - s) / (e - 1) : 1,
                o = 0,
                h = 0;
              for (r = this.pv.length ? createTypedArray('float32', this.pv.length) : 0; o < e; ) {
                if (((i = this.getValueAtTime(s + o * a)), this.pv.length))
                  for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
                else r += i;
                o += 1;
              }
              if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
              else r /= e;
              return r;
            }
            function i(t) {
              console.warn('Transform at time not supported');
            }
            function n(t) {}
            var s = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, r) {
              var a = s(t, e, r);
              return (
                a.dynamicProperties.length ? (a.getValueAtTime = i.bind(a)) : (a.getValueAtTime = n.bind(a)),
                (a.setGroupProperty = expressionHelpers.setGroupProperty),
                a
              );
            };
            var a = PropertyFactory.getProp;
            PropertyFactory.getProp = function(i, n, s, o, h) {
              var l = a(i, n, s, o, h);
              l.kf
                ? (l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l))
                : (l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l)),
                (l.setGroupProperty = expressionHelpers.setGroupProperty),
                (l.loopOut = t),
                (l.loopIn = e),
                (l.smooth = r),
                (l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l)),
                (l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l)),
                (l.numKeys = 1 === n.a ? n.k.length : 0),
                (l.propertyIndex = n.ix);
              var p = 0;
              return (
                0 !== s && (p = createTypedArray('float32', 1 === n.a ? n.k[0].s.length : n.k.length)),
                (l._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: p }),
                expressionHelpers.searchExpressions(i, n, l),
                l.k && h.addDynamicProperty(l),
                l
              );
            };
            var o = ShapePropertyFactory.getConstructorFunction(),
              h = ShapePropertyFactory.getKeyframedConstructorFunction();
            function l() {}
            (l.prototype = {
              vertices: function(t, e) {
                this.k && this.getValue();
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0));
                var i,
                  n = r._length,
                  s = r[t],
                  a = r.v,
                  o = createSizedArray(n);
                for (i = 0; i < n; i += 1)
                  o[i] = 'i' === t || 'o' === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
                return o;
              },
              points: function(t) {
                return this.vertices('v', t);
              },
              inTangents: function(t) {
                return this.vertices('i', t);
              },
              outTangents: function(t) {
                return this.vertices('o', t);
              },
              isClosed: function() {
                return this.v.c;
              },
              pointOnPath: function(t, e) {
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0)),
                  this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                for (
                  var i, n = this._segmentsLength, s = n.lengths, a = n.totalLength * t, o = 0, h = s.length, l = 0;
                  o < h;

                ) {
                  if (l + s[o].addedLength > a) {
                    var p = o,
                      c = r.c && o === h - 1 ? 0 : o + 1,
                      f = (a - l) / s[o].addedLength;
                    i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], f, s[o]);
                    break;
                  }
                  (l += s[o].addedLength), (o += 1);
                }
                return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i;
              },
              vectorOnPath: function(t, e, r) {
                t = 1 == t ? (this.v.c ? 0 : 0.999) : t;
                var i = this.pointOnPath(t, e),
                  n = this.pointOnPath(t + 0.001, e),
                  s = n[0] - i[0],
                  a = n[1] - i[1],
                  o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                return 0 === o ? [0, 0] : 'tangent' === r ? [s / o, a / o] : [-a / o, s / o];
              },
              tangentOnPath: function(t, e) {
                return this.vectorOnPath(t, e, 'tangent');
              },
              normalOnPath: function(t, e) {
                return this.vectorOnPath(t, e, 'normal');
              },
              setGroupProperty: expressionHelpers.setGroupProperty,
              getValueAtTime: expressionHelpers.getStaticValueAtTime
            }),
              extendPrototype([l], o),
              extendPrototype([l], h),
              (h.prototype.getValueAtTime = function(t) {
                return (
                  this._cachingAtTime ||
                    (this._cachingAtTime = {
                      shapeValue: shape_pool.clone(this.pv),
                      lastIndex: 0,
                      lastTime: initialDefaultFrame
                    }),
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                    ((this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0),
                    (this._cachingAtTime.lastTime = t),
                    this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                  this._cachingAtTime.shapeValue
                );
              }),
              (h.prototype.initiateExpression = ExpressionManager.initiateExpression);
            var p = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, r, i, n) {
              var s = p(t, e, r, i, n);
              return (
                (s.propertyIndex = e.ix),
                (s.lock = !1),
                3 === r
                  ? expressionHelpers.searchExpressions(t, e.pt, s)
                  : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s),
                s.k && t.addDynamicProperty(s),
                s
              );
            };
          })(),
            (TextProperty.prototype.getExpressionValue = function(t, e) {
              var r = this.calculateExpression(e);
              if (t.t !== r) {
                var i = {};
                return this.copyData(i, t), (i.t = r.toString()), (i.__complete = !1), i;
              }
              return t;
            }),
            (TextProperty.prototype.searchProperty = function() {
              var t = this.searchKeyframes(),
                e = this.searchExpressions();
              return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function() {
              if (this.data.d.x)
                return (
                  (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(
                    this.elem,
                    this.data.d,
                    this
                  )),
                  this.addEffect(this.getExpressionValue.bind(this)),
                  !0
                );
            });
          var ShapeExpressionInterface = (function() {
              function t(t, c, f) {
                var u,
                  m = [],
                  d = t ? t.length : 0;
                for (u = 0; u < d; u += 1)
                  'gr' == t[u].ty
                    ? m.push(e(t[u], c[u], f))
                    : 'fl' == t[u].ty
                    ? m.push(r(t[u], c[u], f))
                    : 'st' == t[u].ty
                    ? m.push(i(t[u], c[u], f))
                    : 'tm' == t[u].ty
                    ? m.push(n(t[u], c[u], f))
                    : 'tr' == t[u].ty ||
                      ('el' == t[u].ty
                        ? m.push(s(t[u], c[u], f))
                        : 'sr' == t[u].ty
                        ? m.push(a(t[u], c[u], f))
                        : 'sh' == t[u].ty
                        ? m.push(p(t[u], c[u], f))
                        : 'rc' == t[u].ty
                        ? m.push(o(t[u], c[u], f))
                        : 'rd' == t[u].ty
                        ? m.push(h(t[u], c[u], f))
                        : 'rp' == t[u].ty && m.push(l(t[u], c[u], f)));
                return m;
              }
              function e(e, r, i) {
                var n = function(t) {
                  switch (t) {
                    case 'ADBE Vectors Group':
                    case 'Contents':
                    case 2:
                      return n.content;
                    default:
                      return n.transform;
                  }
                };
                n.propertyGroup = function(t) {
                  return 1 === t ? n : i(t - 1);
                };
                var s = (function(e, r, i) {
                    var n,
                      s = function(t) {
                        for (var e = 0, r = n.length; e < r; ) {
                          if (
                            n[e]._name === t ||
                            n[e].mn === t ||
                            n[e].propertyIndex === t ||
                            n[e].ix === t ||
                            n[e].ind === t
                          )
                            return n[e];
                          e += 1;
                        }
                        if ('number' === typeof t) return n[t - 1];
                      };
                    return (
                      (s.propertyGroup = function(t) {
                        return 1 === t ? s : i(t - 1);
                      }),
                      (n = t(e.it, r.it, s.propertyGroup)),
                      (s.numProperties = n.length),
                      (s.propertyIndex = e.cix),
                      (s._name = e.nm),
                      s
                    );
                  })(e, r, n.propertyGroup),
                  a = (function(t, e, r) {
                    function i(t) {
                      return 1 == t ? n : r(--t);
                    }
                    function n(e) {
                      return t.a.ix === e || 'Anchor Point' === e
                        ? n.anchorPoint
                        : t.o.ix === e || 'Opacity' === e
                        ? n.opacity
                        : t.p.ix === e || 'Position' === e
                        ? n.position
                        : t.r.ix === e || 'Rotation' === e || 'ADBE Vector Rotation' === e
                        ? n.rotation
                        : t.s.ix === e || 'Scale' === e
                        ? n.scale
                        : (t.sk && t.sk.ix === e) || 'Skew' === e
                        ? n.skew
                        : (t.sa && t.sa.ix === e) || 'Skew Axis' === e
                        ? n.skewAxis
                        : void 0;
                    }
                    return (
                      e.transform.mProps.o.setGroupProperty(i),
                      e.transform.mProps.p.setGroupProperty(i),
                      e.transform.mProps.a.setGroupProperty(i),
                      e.transform.mProps.s.setGroupProperty(i),
                      e.transform.mProps.r.setGroupProperty(i),
                      e.transform.mProps.sk &&
                        (e.transform.mProps.sk.setGroupProperty(i), e.transform.mProps.sa.setGroupProperty(i)),
                      e.transform.op.setGroupProperty(i),
                      Object.defineProperties(n, {
                        opacity: { get: ExpressionPropertyInterface(e.transform.mProps.o) },
                        position: { get: ExpressionPropertyInterface(e.transform.mProps.p) },
                        anchorPoint: { get: ExpressionPropertyInterface(e.transform.mProps.a) },
                        scale: { get: ExpressionPropertyInterface(e.transform.mProps.s) },
                        rotation: { get: ExpressionPropertyInterface(e.transform.mProps.r) },
                        skew: { get: ExpressionPropertyInterface(e.transform.mProps.sk) },
                        skewAxis: { get: ExpressionPropertyInterface(e.transform.mProps.sa) },
                        _name: { value: t.nm }
                      }),
                      (n.ty = 'tr'),
                      (n.mn = t.mn),
                      (n.propertyGroup = r),
                      n
                    );
                  })(e.it[e.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
                return (
                  (n.content = s),
                  (n.transform = a),
                  Object.defineProperty(n, '_name', {
                    get: function() {
                      return e.nm;
                    }
                  }),
                  (n.numProperties = e.np),
                  (n.propertyIndex = e.ix),
                  (n.nm = e.nm),
                  (n.mn = e.mn),
                  n
                );
              }
              function r(t, e, r) {
                function i(t) {
                  return 'Color' === t || 'color' === t
                    ? i.color
                    : 'Opacity' === t || 'opacity' === t
                    ? i.opacity
                    : void 0;
                }
                return (
                  Object.defineProperties(i, {
                    color: { get: ExpressionPropertyInterface(e.c) },
                    opacity: { get: ExpressionPropertyInterface(e.o) },
                    _name: { value: t.nm },
                    mn: { value: t.mn }
                  }),
                  e.c.setGroupProperty(r),
                  e.o.setGroupProperty(r),
                  i
                );
              }
              function i(t, e, r) {
                function i(t) {
                  return 1 === t ? ob : r(t - 1);
                }
                function n(t) {
                  return 1 === t ? h : i(t - 1);
                }
                function s(r) {
                  Object.defineProperty(h, t.d[r].nm, { get: ExpressionPropertyInterface(e.d.dataProps[r].p) });
                }
                var a,
                  o = t.d ? t.d.length : 0,
                  h = {};
                for (a = 0; a < o; a += 1) s(a), e.d.dataProps[a].p.setGroupProperty(n);
                function l(t) {
                  return 'Color' === t || 'color' === t
                    ? l.color
                    : 'Opacity' === t || 'opacity' === t
                    ? l.opacity
                    : 'Stroke Width' === t || 'stroke width' === t
                    ? l.strokeWidth
                    : void 0;
                }
                return (
                  Object.defineProperties(l, {
                    color: { get: ExpressionPropertyInterface(e.c) },
                    opacity: { get: ExpressionPropertyInterface(e.o) },
                    strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                    dash: {
                      get: function() {
                        return h;
                      }
                    },
                    _name: { value: t.nm },
                    mn: { value: t.mn }
                  }),
                  e.c.setGroupProperty(i),
                  e.o.setGroupProperty(i),
                  e.w.setGroupProperty(i),
                  l
                );
              }
              function n(t, e, r) {
                function i(t) {
                  return 1 == t ? n : r(--t);
                }
                function n(e) {
                  return e === t.e.ix || 'End' === e || 'end' === e
                    ? n.end
                    : e === t.s.ix
                    ? n.start
                    : e === t.o.ix
                    ? n.offset
                    : void 0;
                }
                return (
                  (n.propertyIndex = t.ix),
                  e.s.setGroupProperty(i),
                  e.e.setGroupProperty(i),
                  e.o.setGroupProperty(i),
                  (n.propertyIndex = t.ix),
                  (n.propertyGroup = r),
                  Object.defineProperties(n, {
                    start: { get: ExpressionPropertyInterface(e.s) },
                    end: { get: ExpressionPropertyInterface(e.e) },
                    offset: { get: ExpressionPropertyInterface(e.o) },
                    _name: { value: t.nm }
                  }),
                  (n.mn = t.mn),
                  n
                );
              }
              function s(t, e, r) {
                function i(t) {
                  return 1 == t ? s : r(--t);
                }
                s.propertyIndex = t.ix;
                var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
                function s(e) {
                  return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0;
                }
                return (
                  n.s.setGroupProperty(i),
                  n.p.setGroupProperty(i),
                  Object.defineProperties(s, {
                    size: { get: ExpressionPropertyInterface(n.s) },
                    position: { get: ExpressionPropertyInterface(n.p) },
                    _name: { value: t.nm }
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function a(t, e, r) {
                function i(t) {
                  return 1 == t ? s : r(--t);
                }
                var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
                function s(e) {
                  return t.p.ix === e
                    ? s.position
                    : t.r.ix === e
                    ? s.rotation
                    : t.pt.ix === e
                    ? s.points
                    : t.or.ix === e || 'ADBE Vector Star Outer Radius' === e
                    ? s.outerRadius
                    : t.os.ix === e
                    ? s.outerRoundness
                    : !t.ir || (t.ir.ix !== e && 'ADBE Vector Star Inner Radius' !== e)
                    ? t.is && t.is.ix === e
                      ? s.innerRoundness
                      : void 0
                    : s.innerRadius;
                }
                return (
                  (s.propertyIndex = t.ix),
                  n.or.setGroupProperty(i),
                  n.os.setGroupProperty(i),
                  n.pt.setGroupProperty(i),
                  n.p.setGroupProperty(i),
                  n.r.setGroupProperty(i),
                  t.ir && (n.ir.setGroupProperty(i), n.is.setGroupProperty(i)),
                  Object.defineProperties(s, {
                    position: { get: ExpressionPropertyInterface(n.p) },
                    rotation: { get: ExpressionPropertyInterface(n.r) },
                    points: { get: ExpressionPropertyInterface(n.pt) },
                    outerRadius: { get: ExpressionPropertyInterface(n.or) },
                    outerRoundness: { get: ExpressionPropertyInterface(n.os) },
                    innerRadius: { get: ExpressionPropertyInterface(n.ir) },
                    innerRoundness: { get: ExpressionPropertyInterface(n.is) },
                    _name: { value: t.nm }
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function o(t, e, r) {
                function i(t) {
                  return 1 == t ? s : r(--t);
                }
                var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
                function s(e) {
                  return t.p.ix === e
                    ? s.position
                    : t.r.ix === e
                    ? s.roundness
                    : t.s.ix === e || 'Size' === e || 'ADBE Vector Rect Size' === e
                    ? s.size
                    : void 0;
                }
                return (
                  (s.propertyIndex = t.ix),
                  n.p.setGroupProperty(i),
                  n.s.setGroupProperty(i),
                  n.r.setGroupProperty(i),
                  Object.defineProperties(s, {
                    position: { get: ExpressionPropertyInterface(n.p) },
                    roundness: { get: ExpressionPropertyInterface(n.r) },
                    size: { get: ExpressionPropertyInterface(n.s) },
                    _name: { value: t.nm }
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function h(t, e, r) {
                var i = e;
                function n(e) {
                  if (t.r.ix === e || 'Round Corners 1' === e) return n.radius;
                }
                return (
                  (n.propertyIndex = t.ix),
                  i.rd.setGroupProperty(function(t) {
                    return 1 == t ? n : r(--t);
                  }),
                  Object.defineProperties(n, {
                    radius: { get: ExpressionPropertyInterface(i.rd) },
                    _name: { value: t.nm }
                  }),
                  (n.mn = t.mn),
                  n
                );
              }
              function l(t, e, r) {
                function i(t) {
                  return 1 == t ? s : r(--t);
                }
                var n = e;
                function s(e) {
                  return t.c.ix === e || 'Copies' === e ? s.copies : t.o.ix === e || 'Offset' === e ? s.offset : void 0;
                }
                return (
                  (s.propertyIndex = t.ix),
                  n.c.setGroupProperty(i),
                  n.o.setGroupProperty(i),
                  Object.defineProperties(s, {
                    copies: { get: ExpressionPropertyInterface(n.c) },
                    offset: { get: ExpressionPropertyInterface(n.o) },
                    _name: { value: t.nm }
                  }),
                  (s.mn = t.mn),
                  s
                );
              }
              function p(t, e, r) {
                var i = e.sh;
                function n(t) {
                  if (
                    'Shape' === t ||
                    'shape' === t ||
                    'Path' === t ||
                    'path' === t ||
                    'ADBE Vector Shape' === t ||
                    2 === t
                  )
                    return n.path;
                }
                return (
                  i.setGroupProperty(function(t) {
                    return 1 == t ? n : r(--t);
                  }),
                  Object.defineProperties(n, {
                    path: {
                      get: function() {
                        return i.k && i.getValue(), i;
                      }
                    },
                    shape: {
                      get: function() {
                        return i.k && i.getValue(), i;
                      }
                    },
                    _name: { value: t.nm },
                    ix: { value: t.ix },
                    propertyIndex: { value: t.ix },
                    mn: { value: t.mn }
                  }),
                  n
                );
              }
              return function(e, r, i) {
                var n;
                function s(t) {
                  if ('number' === typeof t) return n[t - 1];
                  for (var e = 0, r = n.length; e < r; ) {
                    if (n[e]._name === t) return n[e];
                    e += 1;
                  }
                }
                return (s.propertyGroup = i), (n = t(e, r, s)), (s.numProperties = n.length), s;
              };
            })(),
            TextExpressionInterface = function(t) {
              var e;
              function r() {}
              return (
                Object.defineProperty(r, 'sourceText', {
                  get: function() {
                    t.textProperty.getValue();
                    var r = t.textProperty.currentData.t;
                    return (
                      void 0 !== r &&
                        ((t.textProperty.currentData.t = void 0), ((e = new String(r)).value = r || new String(r))),
                      e
                    );
                  }
                }),
                r
              );
            },
            LayerExpressionInterface = (function() {
              function t(t, e) {
                var r = new Matrix();
                if (
                  (r.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(r),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var i,
                    n = this._elem.hierarchy.length;
                  for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                  return r.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                return r.applyToPointArray(t[0], t[1], t[2] || 0);
              }
              function e(t, e) {
                var r = new Matrix();
                if (
                  (r.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(r),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var i,
                    n = this._elem.hierarchy.length;
                  for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                  return r.inversePoint(t);
                }
                return r.inversePoint(t);
              }
              function r(t) {
                var e = new Matrix();
                if (
                  (e.reset(),
                  this._elem.finalTransform.mProp.applyToMatrix(e),
                  this._elem.hierarchy && this._elem.hierarchy.length)
                ) {
                  var r,
                    i = this._elem.hierarchy.length;
                  for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                  return e.inversePoint(t);
                }
                return e.inversePoint(t);
              }
              function i() {
                return [1, 1, 1, 1];
              }
              return function(n) {
                var s;
                function a(t) {
                  switch (t) {
                    case 'ADBE Root Vectors Group':
                    case 'Contents':
                    case 2:
                      return a.shapeInterface;
                    case 1:
                    case 6:
                    case 'Transform':
                    case 'transform':
                    case 'ADBE Transform Group':
                      return s;
                    case 4:
                    case 'ADBE Effect Parade':
                    case 'effects':
                    case 'Effects':
                      return a.effect;
                  }
                }
                (a.toWorld = t),
                  (a.fromWorld = e),
                  (a.toComp = t),
                  (a.fromComp = r),
                  (a.sampleImage = i),
                  (a.sourceRectAtTime = n.sourceRectAtTime.bind(n)),
                  (a._elem = n);
                var o = getDescriptor((s = TransformExpressionInterface(n.finalTransform.mProp)), 'anchorPoint');
                return (
                  Object.defineProperties(a, {
                    hasParent: {
                      get: function() {
                        return n.hierarchy.length;
                      }
                    },
                    parent: {
                      get: function() {
                        return n.hierarchy[0].layerInterface;
                      }
                    },
                    rotation: getDescriptor(s, 'rotation'),
                    scale: getDescriptor(s, 'scale'),
                    position: getDescriptor(s, 'position'),
                    opacity: getDescriptor(s, 'opacity'),
                    anchorPoint: o,
                    anchor_point: o,
                    transform: {
                      get: function() {
                        return s;
                      }
                    },
                    active: {
                      get: function() {
                        return n.isInRange;
                      }
                    }
                  }),
                  (a.startTime = n.data.st),
                  (a.index = n.data.ind),
                  (a.source = n.data.refId),
                  (a.height = 0 === n.data.ty ? n.data.h : 100),
                  (a.width = 0 === n.data.ty ? n.data.w : 100),
                  (a.inPoint = n.data.ip / n.comp.globalData.frameRate),
                  (a.outPoint = n.data.op / n.comp.globalData.frameRate),
                  (a._name = n.data.nm),
                  (a.registerMaskInterface = function(t) {
                    a.mask = new MaskManagerInterface(t, n);
                  }),
                  (a.registerEffectsInterface = function(t) {
                    a.effect = t;
                  }),
                  a
                );
              };
            })(),
            CompExpressionInterface = function(t) {
              function e(e) {
                for (var r = 0, i = t.layers.length; r < i; ) {
                  if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                  r += 1;
                }
                return null;
              }
              return (
                Object.defineProperty(e, '_name', { value: t.data.nm }),
                (e.layer = e),
                (e.pixelAspect = 1),
                (e.height = t.data.h || t.globalData.compSize.h),
                (e.width = t.data.w || t.globalData.compSize.w),
                (e.pixelAspect = 1),
                (e.frameDuration = 1 / t.globalData.frameRate),
                (e.displayStartTime = 0),
                (e.numLayers = t.layers.length),
                e
              );
            },
            TransformExpressionInterface = function(t) {
              function e(t) {
                switch (t) {
                  case 'scale':
                  case 'Scale':
                  case 'ADBE Scale':
                  case 6:
                    return e.scale;
                  case 'rotation':
                  case 'Rotation':
                  case 'ADBE Rotation':
                  case 'ADBE Rotate Z':
                  case 10:
                    return e.rotation;
                  case 'ADBE Rotate X':
                    return e.xRotation;
                  case 'ADBE Rotate Y':
                    return e.yRotation;
                  case 'position':
                  case 'Position':
                  case 'ADBE Position':
                  case 2:
                    return e.position;
                  case 'ADBE Position_0':
                    return e.xPosition;
                  case 'ADBE Position_1':
                    return e.yPosition;
                  case 'ADBE Position_2':
                    return e.zPosition;
                  case 'anchorPoint':
                  case 'AnchorPoint':
                  case 'Anchor Point':
                  case 'ADBE AnchorPoint':
                  case 1:
                    return e.anchorPoint;
                  case 'opacity':
                  case 'Opacity':
                  case 11:
                    return e.opacity;
                }
              }
              if (
                (Object.defineProperty(e, 'rotation', { get: ExpressionPropertyInterface(t.r || t.rz) }),
                Object.defineProperty(e, 'zRotation', { get: ExpressionPropertyInterface(t.rz || t.r) }),
                Object.defineProperty(e, 'xRotation', { get: ExpressionPropertyInterface(t.rx) }),
                Object.defineProperty(e, 'yRotation', { get: ExpressionPropertyInterface(t.ry) }),
                Object.defineProperty(e, 'scale', { get: ExpressionPropertyInterface(t.s) }),
                t.p)
              )
                var r = ExpressionPropertyInterface(t.p);
              return (
                Object.defineProperty(e, 'position', {
                  get: function() {
                    return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0];
                  }
                }),
                Object.defineProperty(e, 'xPosition', { get: ExpressionPropertyInterface(t.px) }),
                Object.defineProperty(e, 'yPosition', { get: ExpressionPropertyInterface(t.py) }),
                Object.defineProperty(e, 'zPosition', { get: ExpressionPropertyInterface(t.pz) }),
                Object.defineProperty(e, 'anchorPoint', { get: ExpressionPropertyInterface(t.a) }),
                Object.defineProperty(e, 'opacity', { get: ExpressionPropertyInterface(t.o) }),
                Object.defineProperty(e, 'skew', { get: ExpressionPropertyInterface(t.sk) }),
                Object.defineProperty(e, 'skewAxis', { get: ExpressionPropertyInterface(t.sa) }),
                Object.defineProperty(e, 'orientation', { get: ExpressionPropertyInterface(t.or) }),
                e
              );
            },
            ProjectInterface = (function() {
              function t(t) {
                this.compositions.push(t);
              }
              return function() {
                function e(t) {
                  for (var e = 0, r = this.compositions.length; e < r; ) {
                    if (this.compositions[e].data && this.compositions[e].data.nm === t)
                      return (
                        this.compositions[e].prepareFrame &&
                          this.compositions[e].data.xt &&
                          this.compositions[e].prepareFrame(this.currentFrame),
                        this.compositions[e].compInterface
                      );
                    e += 1;
                  }
                }
                return (e.compositions = []), (e.currentFrame = 0), (e.registerComposition = t), e;
              };
            })(),
            EffectsExpressionInterface = (function() {
              function t(r, i, n, s) {
                var a,
                  o = [],
                  h = r.ef.length;
                for (a = 0; a < h; a += 1)
                  5 === r.ef[a].ty
                    ? o.push(t(r.ef[a], i.effectElements[a], i.effectElements[a].propertyGroup, s))
                    : o.push(e(i.effectElements[a], r.ef[a].ty, s, l));
                function l(t) {
                  return 1 === t ? p : n(t - 1);
                }
                var p = function(t) {
                  for (var e = r.ef, i = 0, n = e.length; i < n; ) {
                    if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? o[i] : o[i]();
                    i += 1;
                  }
                  return o[0]();
                };
                return (
                  (p.propertyGroup = l),
                  'ADBE Color Control' === r.mn &&
                    Object.defineProperty(p, 'color', {
                      get: function() {
                        return o[0]();
                      }
                    }),
                  Object.defineProperty(p, 'numProperties', {
                    get: function() {
                      return r.np;
                    }
                  }),
                  (p.active = p.enabled = 0 !== r.en),
                  p
                );
              }
              function e(t, e, r, i) {
                var n = ExpressionPropertyInterface(t.p);
                return (
                  t.p.setGroupProperty && t.p.setGroupProperty(i),
                  function() {
                    return 10 === e ? r.comp.compInterface(t.p.v) : n();
                  }
                );
              }
              return {
                createEffectsInterface: function(e, r) {
                  if (e.effectsManager) {
                    var i,
                      n = [],
                      s = e.data.ef,
                      a = e.effectsManager.effectElements.length;
                    for (i = 0; i < a; i += 1) n.push(t(s[i], e.effectsManager.effectElements[i], r, e));
                    return function(t) {
                      for (var r = e.data.ef || [], i = 0, s = r.length; i < s; ) {
                        if (t === r[i].nm || t === r[i].mn || t === r[i].ix) return n[i];
                        i += 1;
                      }
                    };
                  }
                }
              };
            })(),
            MaskManagerInterface = (function() {
              function t(t, e) {
                (this._mask = t), (this._data = e);
              }
              return (
                Object.defineProperty(t.prototype, 'maskPath', {
                  get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                  }
                }),
                Object.defineProperty(t.prototype, 'maskOpacity', {
                  get: function() {
                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                  }
                }),
                function(e, r) {
                  var i,
                    n = createSizedArray(e.viewData.length),
                    s = e.viewData.length;
                  for (i = 0; i < s; i += 1) n[i] = new t(e.viewData[i], e.masksProperties[i]);
                  return function(t) {
                    for (i = 0; i < s; ) {
                      if (e.masksProperties[i].nm === t) return n[i];
                      i += 1;
                    }
                  };
                }
              );
            })(),
            ExpressionPropertyInterface = (function() {
              var t = { pv: 0, v: 0, mult: 1 },
                e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
              function r(t, e, r) {
                Object.defineProperty(t, 'velocity', {
                  get: function() {
                    return e.getVelocityAtTime(e.comp.currentFrame);
                  }
                }),
                  (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                  (t.key = function(i) {
                    if (t.numKeys) {
                      var n = '';
                      n =
                        's' in e.keyframes[i - 1]
                          ? e.keyframes[i - 1].s
                          : 'e' in e.keyframes[i - 2]
                          ? e.keyframes[i - 2].e
                          : e.keyframes[i - 2].s;
                      var s = 'unidimensional' === r ? new Number(n) : Object.assign({}, n);
                      return (s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate), s;
                    }
                    return 0;
                  }),
                  (t.valueAtTime = e.getValueAtTime),
                  (t.speedAtTime = e.getSpeedAtTime),
                  (t.velocityAtTime = e.getVelocityAtTime),
                  (t.propertyGroup = e.propertyGroup);
              }
              function i() {
                return t;
              }
              return function(n) {
                return n
                  ? 'unidimensional' === n.propType
                    ? (function(e) {
                        (e && 'pv' in e) || (e = t);
                        var i = 1 / e.mult,
                          n = e.pv * i,
                          s = new Number(n);
                        return (
                          (s.value = n),
                          r(s, e, 'unidimensional'),
                          function() {
                            return (
                              e.k && e.getValue(),
                              (n = e.v * i),
                              s.value !== n && (((s = new Number(n)).value = n), r(s, e, 'unidimensional')),
                              s
                            );
                          }
                        );
                      })(n)
                    : (function(t) {
                        (t && 'pv' in t) || (t = e);
                        var i = 1 / t.mult,
                          n = t.pv.length,
                          s = createTypedArray('float32', n),
                          a = createTypedArray('float32', n);
                        return (
                          (s.value = a),
                          r(s, t, 'multidimensional'),
                          function() {
                            t.k && t.getValue();
                            for (var e = 0; e < n; e += 1) s[e] = a[e] = t.v[e] * i;
                            return s;
                          }
                        );
                      })(n)
                  : i;
              };
            })();
          function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
          }
          function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
          }
          function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function NoValueEffect() {
            this.p = {};
          }
          function EffectsManager() {}
          function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i,
              n,
              s = r.length;
            for (i = 0; i < s; i++) (n = new GroupEffect(r[i], e)), this.effectElements.push(n);
          }
          function GroupEffect(t, e) {
            this.init(t, e);
          }
          !(function() {
            var t = (function() {
                function t(t, e) {
                  return (this.textIndex = t + 1), (this.textTotal = e), (this.v = this.getValue() * this.mult), this.v;
                }
                return function(e, r) {
                  (this.pv = 1),
                    (this.comp = e.comp),
                    (this.elem = e),
                    (this.mult = 0.01),
                    (this.propType = 'textSelector'),
                    (this.textTotal = r.totalChars),
                    (this.selectorValue = 100),
                    (this.lastValue = [1, 1, 1]),
                    (this.k = !0),
                    (this.x = !0),
                    (this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this)),
                    (this.getMult = t),
                    (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
                    this.kf
                      ? (this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this))
                      : (this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this)),
                    (this.setGroupProperty = expressionHelpers.setGroupProperty);
                };
              })(),
              e = TextSelectorProp.getTextSelectorProp;
            TextSelectorProp.getTextSelectorProp = function(r, i, n) {
              return 1 === i.t ? new t(r, i, n) : e(r, i, n);
            };
          })(),
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function(t, e) {
              (this.data = t), (this.effectElements = []), this.initDynamicPropertyContainer(e);
              var r,
                i,
                n = this.data.ef.length,
                s = this.data.ef;
              for (r = 0; r < n; r += 1) {
                switch (((i = null), s[r].ty)) {
                  case 0:
                    i = new SliderEffect(s[r], e, this);
                    break;
                  case 1:
                    i = new AngleEffect(s[r], e, this);
                    break;
                  case 2:
                    i = new ColorEffect(s[r], e, this);
                    break;
                  case 3:
                    i = new PointEffect(s[r], e, this);
                    break;
                  case 4:
                  case 7:
                    i = new CheckboxEffect(s[r], e, this);
                    break;
                  case 10:
                    i = new LayerIndexEffect(s[r], e, this);
                    break;
                  case 11:
                    i = new MaskIndexEffect(s[r], e, this);
                    break;
                  case 5:
                    i = new EffectsManager(s[r], e, this);
                    break;
                  default:
                    i = new NoValueEffect(s[r], e, this);
                }
                i && this.effectElements.push(i);
              }
            });
          var lottie = {},
            _isFrozen = !1;
          function setLocationHref(t) {
            locationHref = t;
          }
          function searchAnimations() {
            !0 === standalone
              ? animationManager.searchAnimations(animationData, standalone, renderer)
              : animationManager.searchAnimations();
          }
          function setSubframeRendering(t) {
            subframeEnabled = t;
          }
          function loadAnimation(t) {
            return (
              !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
            );
          }
          function setQuality(t) {
            if ('string' === typeof t)
              switch (t) {
                case 'high':
                  defaultCurveSegments = 200;
                  break;
                case 'medium':
                  defaultCurveSegments = 50;
                  break;
                case 'low':
                  defaultCurveSegments = 10;
              }
            else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
            roundValues(!(defaultCurveSegments >= 50));
          }
          function inBrowser() {
            return 'undefined' !== typeof navigator;
          }
          function installPlugin(t, e) {
            'expressions' === t && (expressionsPlugin = e);
          }
          function getFactory(t) {
            switch (t) {
              case 'propertyFactory':
                return PropertyFactory;
              case 'shapePropertyFactory':
                return ShapePropertyFactory;
              case 'matrix':
                return Matrix;
            }
          }
          function checkReady() {
            'complete' === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
          }
          function getQueryVariable(t) {
            for (var e = queryString.split('&'), r = 0; r < e.length; r++) {
              var i = e[r].split('=');
              if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
            }
          }
          (lottie.play = animationManager.play),
            (lottie.pause = animationManager.pause),
            (lottie.setLocationHref = setLocationHref),
            (lottie.togglePause = animationManager.togglePause),
            (lottie.setSpeed = animationManager.setSpeed),
            (lottie.setDirection = animationManager.setDirection),
            (lottie.stop = animationManager.stop),
            (lottie.searchAnimations = searchAnimations),
            (lottie.registerAnimation = animationManager.registerAnimation),
            (lottie.loadAnimation = loadAnimation),
            (lottie.setSubframeRendering = setSubframeRendering),
            (lottie.resize = animationManager.resize),
            (lottie.goToAndStop = animationManager.goToAndStop),
            (lottie.destroy = animationManager.destroy),
            (lottie.setQuality = setQuality),
            (lottie.inBrowser = inBrowser),
            (lottie.installPlugin = installPlugin),
            (lottie.freeze = animationManager.freeze),
            (lottie.unfreeze = animationManager.unfreeze),
            (lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations),
            (lottie.__getFactory = getFactory),
            (lottie.version = '5.6.0');
          var standalone = '__[STANDALONE]__',
            animationData = '__[ANIMATIONDATA]__',
            renderer = '';
          if (standalone) {
            var scripts = document.getElementsByTagName('script'),
              index = scripts.length - 1,
              myScript = scripts[index] || { src: '' },
              queryString = myScript.src.replace(/^[^\?]+\??/, '');
            renderer = getQueryVariable('renderer');
          }
          var readyStateCheckInterval = setInterval(checkReady, 100);
          return lottie;
        }),
        void 0 ===
          (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return factory(root);
          }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    965: function(t, e) {
      var r = (t.exports = { version: '2.6.11' });
      'number' == typeof __e && (__e = r);
    },
    967: function(t, e, r) {
      'use strict';
      var i = r(0),
        n = r(1250);
      if ('undefined' === typeof i)
        throw Error(
          'create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.'
        );
      var s = new i.Component().updater;
      t.exports = n(i.Component, i.isValidElement, s);
    },
    968: function(t, e) {
      var r = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = r);
    },
    969: function(t, e, r) {
      t.exports = !r(981)(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7;
            }
          }).a
        );
      });
    },
    972: function(t, e, r) {
      'use strict';
      var i = r(1107),
        n = r(1),
        s = r(967),
        a = r(145),
        o = r(0),
        h = r(1253),
        l = r(1258).default,
        p = Object.freeze({ YEARS: 'years', MONTHS: 'months', DAYS: 'days', TIME: 'time' }),
        c = n,
        f = s({
          displayName: 'DateTime',
          propTypes: {
            onFocus: c.func,
            onBlur: c.func,
            onChange: c.func,
            onViewModeChange: c.func,
            onNavigateBack: c.func,
            onNavigateForward: c.func,
            locale: c.string,
            utc: c.bool,
            displayTimeZone: c.string,
            input: c.bool,
            inputProps: c.object,
            timeConstraints: c.object,
            viewMode: c.oneOf([p.YEARS, p.MONTHS, p.DAYS, p.TIME]),
            isValidDate: c.func,
            open: c.bool,
            strictParsing: c.bool,
            closeOnSelect: c.bool,
            closeOnTab: c.bool
          },
          getInitialState: function() {
            this.checkTZ(this.props);
            var t = this.getStateFromProps(this.props);
            return (
              void 0 === t.open && (t.open = !this.props.input),
              (t.currentView = this.props.dateFormat ? this.props.viewMode || t.updateOn || p.DAYS : p.TIME),
              t
            );
          },
          parseDate: function(t, e) {
            var r;
            return (
              t && 'string' === typeof t ? (r = this.localMoment(t, e.datetime)) : t && (r = this.localMoment(t)),
              r && !r.isValid() && (r = null),
              r
            );
          },
          getStateFromProps: function(t) {
            var e,
              r,
              i,
              n,
              s = this.getFormats(t),
              a = t.value || t.defaultValue;
            return (
              (e = this.parseDate(a, s)),
              (r = this.parseDate(t.viewDate, s)),
              (r = e
                ? e.clone().startOf('month')
                : r
                ? r.clone().startOf('month')
                : this.localMoment().startOf('month')),
              (i = this.getUpdateOn(s)),
              (n = e ? e.format(s.datetime) : a.isValid && !a.isValid() ? '' : a || ''),
              { updateOn: i, inputFormat: s.datetime, viewDate: r, selectedDate: e, inputValue: n, open: t.open }
            );
          },
          getUpdateOn: function(t) {
            return t.date.match(/[lLD]/)
              ? p.DAYS
              : -1 !== t.date.indexOf('M')
              ? p.MONTHS
              : -1 !== t.date.indexOf('Y')
              ? p.YEARS
              : p.DAYS;
          },
          getFormats: function(t) {
            var e = { date: t.dateFormat || '', time: t.timeFormat || '' },
              r = this.localMoment(t.date, null, t).localeData();
            return (
              !0 === e.date ? (e.date = r.longDateFormat('L')) : this.getUpdateOn(e) !== p.DAYS && (e.time = ''),
              !0 === e.time && (e.time = r.longDateFormat('LT')),
              (e.datetime = e.date && e.time ? e.date + ' ' + e.time : e.date || e.time),
              e
            );
          },
          componentWillReceiveProps: function(t) {
            var e = this.getFormats(t),
              r = {};
            if (
              ((t.value === this.props.value && e.datetime === this.getFormats(this.props).datetime) ||
                (r = this.getStateFromProps(t)),
              void 0 === r.open &&
                ('undefined' !== typeof t.open
                  ? (r.open = t.open)
                  : this.props.closeOnSelect && this.state.currentView !== p.TIME
                  ? (r.open = !1)
                  : (r.open = this.state.open)),
              t.viewMode !== this.props.viewMode && (r.currentView = t.viewMode),
              t.locale !== this.props.locale)
            ) {
              if (this.state.viewDate) {
                var i = this.state.viewDate.clone().locale(t.locale);
                r.viewDate = i;
              }
              if (this.state.selectedDate) {
                var n = this.state.selectedDate.clone().locale(t.locale);
                (r.selectedDate = n), (r.inputValue = n.format(e.datetime));
              }
            }
            (t.utc === this.props.utc && t.displayTimeZone === this.props.displayTimeZone) ||
              (t.utc
                ? (this.state.viewDate && (r.viewDate = this.state.viewDate.clone().utc()),
                  this.state.selectedDate &&
                    ((r.selectedDate = this.state.selectedDate.clone().utc()),
                    (r.inputValue = r.selectedDate.format(e.datetime))))
                : t.displayTimeZone
                ? (this.state.viewDate && (r.viewDate = this.state.viewDate.clone().tz(t.displayTimeZone)),
                  this.state.selectedDate &&
                    ((r.selectedDate = this.state.selectedDate.clone().tz(t.displayTimeZone)),
                    (r.inputValue = r.selectedDate.tz(t.displayTimeZone).format(e.datetime))))
                : (this.state.viewDate && (r.viewDate = this.state.viewDate.clone().local()),
                  this.state.selectedDate &&
                    ((r.selectedDate = this.state.selectedDate.clone().local()),
                    (r.inputValue = r.selectedDate.format(e.datetime))))),
              t.viewDate !== this.props.viewDate && (r.viewDate = a(t.viewDate)),
              this.checkTZ(t),
              this.setState(r);
          },
          onInputChange: function(t) {
            var e = null === t.target ? t : t.target.value,
              r = this.localMoment(e, this.state.inputFormat),
              i = { inputValue: e };
            return (
              r.isValid() && !this.props.value
                ? ((i.selectedDate = r), (i.viewDate = r.clone().startOf('month')))
                : (i.selectedDate = null),
              this.setState(i, function() {
                return this.props.onChange(r.isValid() ? r : this.state.inputValue);
              })
            );
          },
          onInputKey: function(t) {
            9 === t.which && this.props.closeOnTab && this.closeCalendar();
          },
          showView: function(t) {
            var e = this;
            return function() {
              e.state.currentView !== t && e.props.onViewModeChange(t), e.setState({ currentView: t });
            };
          },
          setDate: function(t) {
            var e = this,
              r = { month: p.DAYS, year: p.MONTHS };
            return function(i) {
              e.setState({
                viewDate: e.state.viewDate
                  .clone()
                  [t](parseInt(i.target.getAttribute('data-value'), 10))
                  .startOf(t),
                currentView: r[t]
              }),
                e.props.onViewModeChange(r[t]);
            };
          },
          subtractTime: function(t, e, r) {
            var i = this;
            return function() {
              i.props.onNavigateBack(t, e), i.updateTime('subtract', t, e, r);
            };
          },
          addTime: function(t, e, r) {
            var i = this;
            return function() {
              i.props.onNavigateForward(t, e), i.updateTime('add', t, e, r);
            };
          },
          updateTime: function(t, e, r, i) {
            var n = {},
              s = i ? 'selectedDate' : 'viewDate';
            (n[s] = this.state[s].clone()[t](e, r)), this.setState(n);
          },
          allowedSetTime: ['hours', 'minutes', 'seconds', 'milliseconds'],
          setTime: function(t, e) {
            var r,
              i = this.allowedSetTime.indexOf(t) + 1,
              n = this.state,
              s = (n.selectedDate || n.viewDate).clone();
            for (s[t](e); i < this.allowedSetTime.length; i++) s[(r = this.allowedSetTime[i])](s[r]());
            this.props.value || this.setState({ selectedDate: s, inputValue: s.format(n.inputFormat) }),
              this.props.onChange(s);
          },
          updateSelectedDate: function(t, e) {
            var r,
              i = t.currentTarget,
              n = 0,
              s = this.state.viewDate,
              a = this.state.selectedDate || s;
            if (
              (-1 !== i.className.indexOf('rdtDay')
                ? (-1 !== i.className.indexOf('rdtNew') ? (n = 1) : -1 !== i.className.indexOf('rdtOld') && (n = -1),
                  (r = s
                    .clone()
                    .month(s.month() + n)
                    .date(parseInt(i.getAttribute('data-value'), 10))))
                : -1 !== i.className.indexOf('rdtMonth')
                ? (r = s
                    .clone()
                    .month(parseInt(i.getAttribute('data-value'), 10))
                    .date(a.date()))
                : -1 !== i.className.indexOf('rdtYear') &&
                  (r = s
                    .clone()
                    .month(a.month())
                    .date(a.date())
                    .year(parseInt(i.getAttribute('data-value'), 10))),
              r
                .hours(a.hours())
                .minutes(a.minutes())
                .seconds(a.seconds())
                .milliseconds(a.milliseconds()),
              this.props.value)
            )
              this.props.closeOnSelect && e && this.closeCalendar();
            else {
              var o = !(this.props.closeOnSelect && e);
              o || this.props.onBlur(r),
                this.setState({
                  selectedDate: r,
                  viewDate: r.clone().startOf('month'),
                  inputValue: r.format(this.state.inputFormat),
                  open: o
                });
            }
            this.props.onChange(r);
          },
          openCalendar: function(t) {
            this.state.open ||
              this.setState({ open: !0 }, function() {
                this.props.onFocus(t);
              });
          },
          closeCalendar: function() {
            this.setState({ open: !1 }, function() {
              this.props.onBlur(this.state.selectedDate || this.state.inputValue);
            });
          },
          handleClickOutside: function() {
            this.props.input &&
              this.state.open &&
              void 0 === this.props.open &&
              !this.props.disableCloseOnClickOutside &&
              this.setState({ open: !1 }, function() {
                this.props.onBlur(this.state.selectedDate || this.state.inputValue);
              });
          },
          localMoment: function(t, e, r) {
            var i = null;
            return (
              (i = (r = r || this.props).utc
                ? a.utc(t, e, r.strictParsing)
                : r.displayTimeZone
                ? a.tz(t, e, r.displayTimeZone)
                : a(t, e, r.strictParsing)),
              r.locale && i.locale(r.locale),
              i
            );
          },
          checkTZ: function(t) {
            var e = console;
            !t.displayTimeZone ||
              this.tzWarning ||
              a.tz ||
              ((this.tzWarning = !0),
              e &&
                e.error(
                  'react-datetime: displayTimeZone prop with value "' +
                    t.displayTimeZone +
                    '" is used but moment.js timezone is not loaded.'
                ));
          },
          componentProps: {
            fromProps: ['value', 'isValidDate', 'renderDay', 'renderMonth', 'renderYear', 'timeConstraints'],
            fromState: ['viewDate', 'selectedDate', 'updateOn'],
            fromThis: [
              'setDate',
              'setTime',
              'showView',
              'addTime',
              'subtractTime',
              'updateSelectedDate',
              'localMoment',
              'handleClickOutside'
            ]
          },
          getComponentProps: function() {
            var t = this,
              e = this.getFormats(this.props),
              r = { dateFormat: e.date, timeFormat: e.time };
            return (
              this.componentProps.fromProps.forEach(function(e) {
                r[e] = t.props[e];
              }),
              this.componentProps.fromState.forEach(function(e) {
                r[e] = t.state[e];
              }),
              this.componentProps.fromThis.forEach(function(e) {
                r[e] = t[e];
              }),
              r
            );
          },
          overrideEvent: function(t, e) {
            if ((this.overridenEvents || (this.overridenEvents = {}), !this.overridenEvents[t])) {
              var r = this;
              this.overridenEvents[t] = function(i) {
                var n;
                r.props.inputProps && r.props.inputProps[t] && (n = r.props.inputProps[t](i)), !1 !== n && e(i);
              };
            }
            return this.overridenEvents[t];
          },
          render: function() {
            var t =
                'rdt' +
                (this.props.className
                  ? Array.isArray(this.props.className)
                    ? ' ' + this.props.className.join(' ')
                    : ' ' + this.props.className
                  : ''),
              e = [];
            if (this.props.input) {
              var r = i(
                { type: 'text', className: 'form-control', value: this.state.inputValue },
                this.props.inputProps,
                {
                  onClick: this.overrideEvent('onClick', this.openCalendar),
                  onFocus: this.overrideEvent('onFocus', this.openCalendar),
                  onChange: this.overrideEvent('onChange', this.onInputChange),
                  onKeyDown: this.overrideEvent('onKeyDown', this.onInputKey)
                }
              );
              e = this.props.renderInput
                ? [
                    o.createElement(
                      'div',
                      { key: 'i' },
                      this.props.renderInput(r, this.openCalendar, this.closeCalendar)
                    )
                  ]
                : [o.createElement('input', i({ key: 'i' }, r))];
            } else t += ' rdtStatic';
            return (
              (this.props.open || (void 0 === this.props.open && this.state.open)) && (t += ' rdtOpen'),
              o.createElement(
                u,
                { className: t, onClickOut: this.handleClickOutside },
                e.concat(
                  o.createElement(
                    'div',
                    { key: 'dt', className: 'rdtPicker' },
                    o.createElement(h, { view: this.state.currentView, viewProps: this.getComponentProps() })
                  )
                )
              )
            );
          }
        }),
        u = l(
          s({
            render: function() {
              return o.createElement('div', { className: this.props.className }, this.props.children);
            },
            handleClickOutside: function(t) {
              this.props.onClickOut(t);
            }
          })
        );
      (f.defaultProps = {
        className: '',
        defaultValue: '',
        inputProps: {},
        input: !0,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onViewModeChange: function() {},
        onNavigateBack: function() {},
        onNavigateForward: function() {},
        timeFormat: !0,
        timeConstraints: {},
        dateFormat: !0,
        strictParsing: !0,
        closeOnSelect: !1,
        closeOnTab: !0,
        utc: !1
      }),
        (f.moment = a),
        (t.exports = f);
    },
    973: function(t, e, r) {
      var i = r(968),
        n = r(965),
        s = r(1108),
        a = r(979),
        o = r(975),
        h = function t(e, r, h) {
          var l,
            p,
            c,
            f = e & t.F,
            u = e & t.G,
            m = e & t.S,
            d = e & t.P,
            y = e & t.B,
            g = e & t.W,
            v = u ? n : n[r] || (n[r] = {}),
            b = v.prototype,
            E = u ? i : m ? i[r] : (i[r] || {}).prototype;
          for (l in (u && (h = r), h))
            ((p = !f && E && void 0 !== E[l]) && o(v, l)) ||
              ((c = p ? E[l] : h[l]),
              (v[l] =
                u && 'function' != typeof E[l]
                  ? h[l]
                  : y && p
                  ? s(c, i)
                  : g && E[l] == c
                  ? (function(t) {
                      var e = function(e, r, i) {
                        if (this instanceof t) {
                          switch (arguments.length) {
                            case 0:
                              return new t();
                            case 1:
                              return new t(e);
                            case 2:
                              return new t(e, r);
                          }
                          return new t(e, r, i);
                        }
                        return t.apply(this, arguments);
                      };
                      return (e.prototype = t.prototype), e;
                    })(c)
                  : d && 'function' == typeof c
                  ? s(Function.call, c)
                  : c),
              d && (((v.virtual || (v.virtual = {}))[l] = c), e & t.R && b && !b[l] && a(b, l, c)));
        };
      (h.F = 1), (h.G = 2), (h.S = 4), (h.P = 8), (h.B = 16), (h.W = 32), (h.U = 64), (h.R = 128), (t.exports = h);
    },
    974: function(t, e, r) {
      var i = r(995),
        n = r(1109),
        s = r(1035),
        a = Object.defineProperty;
      e.f = r(969)
        ? Object.defineProperty
        : function(t, e, r) {
            if ((i(t), (e = s(e, !0)), i(r), n))
              try {
                return a(t, e, r);
              } catch (o) {}
            if ('get' in r || 'set' in r) throw TypeError('Accessors not supported!');
            return 'value' in r && (t[e] = r.value), t;
          };
    },
    975: function(t, e) {
      var r = {}.hasOwnProperty;
      t.exports = function(t, e) {
        return r.call(t, e);
      };
    },
    979: function(t, e, r) {
      var i = r(974),
        n = r(1006);
      t.exports = r(969)
        ? function(t, e, r) {
            return i.f(t, e, n(1, r));
          }
        : function(t, e, r) {
            return (t[e] = r), t;
          };
    },
    980: function(t, e) {
      t.exports = function(t) {
        return 'object' === typeof t ? null !== t : 'function' === typeof t;
      };
    },
    981: function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    982: function(t, e, r) {
      var i = r(1112),
        n = r(1036);
      t.exports = function(t) {
        return i(n(t));
      };
    },
    983: function(t, e, r) {
      var i = r(1039)('wks'),
        n = r(1009),
        s = r(968).Symbol,
        a = 'function' == typeof s;
      (t.exports = function(t) {
        return i[t] || (i[t] = (a && s[t]) || (a ? s : n)('Symbol.' + t));
      }).store = i;
    },
    990: function(t, e, r) {
      'use strict';
      var i = r(5),
        n = r(9),
        s = r(0),
        a = r.n(s),
        o = r(1),
        h = r.n(o),
        l = r(4),
        p = r.n(l),
        c = r(2),
        f = h.a.oneOfType([h.a.number, h.a.string]),
        u = h.a.oneOfType([h.a.string, h.a.number, h.a.shape({ size: f, order: f, offset: f })]),
        m = {
          children: h.a.node,
          hidden: h.a.bool,
          check: h.a.bool,
          size: h.a.string,
          for: h.a.string,
          tag: c.tagPropType,
          className: h.a.string,
          cssModule: h.a.object,
          xs: u,
          sm: u,
          md: u,
          lg: u,
          xl: u,
          widths: h.a.array
        },
        d = { tag: 'label', widths: ['xs', 'sm', 'md', 'lg', 'xl'] },
        y = function(t, e, r) {
          return !0 === r || '' === r
            ? t
              ? 'col'
              : 'col-' + e
            : 'auto' === r
            ? t
              ? 'col-auto'
              : 'col-' + e + '-auto'
            : t
            ? 'col-' + r
            : 'col-' + e + '-' + r;
        },
        g = function(t) {
          var e = t.className,
            r = t.cssModule,
            s = t.hidden,
            o = t.widths,
            h = t.tag,
            l = t.check,
            f = t.size,
            u = t.for,
            m = Object(n.a)(t, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']),
            d = [];
          o.forEach(function(e, i) {
            var n = t[e];
            if ((delete m[e], n || '' === n)) {
              var s,
                a = !i;
              if (Object(c.isObject)(n)) {
                var o,
                  h = a ? '-' : '-' + e + '-';
                (s = y(a, e, n.size)),
                  d.push(
                    Object(c.mapToCssModules)(
                      p()(
                        (((o = {})[s] = n.size || '' === n.size),
                        (o['order' + h + n.order] = n.order || 0 === n.order),
                        (o['offset' + h + n.offset] = n.offset || 0 === n.offset),
                        o)
                      )
                    ),
                    r
                  );
              } else (s = y(a, e, n)), d.push(s);
            }
          });
          var g = Object(c.mapToCssModules)(
            p()(
              e,
              !!s && 'sr-only',
              !!l && 'form-check-label',
              !!f && 'col-form-label-' + f,
              d,
              !!d.length && 'col-form-label'
            ),
            r
          );
          return a.a.createElement(h, Object(i.a)({ htmlFor: u }, m, { className: g }));
        };
      (g.propTypes = m), (g.defaultProps = d), (e.a = g);
    },
    995: function(t, e, r) {
      var i = r(980);
      t.exports = function(t) {
        if (!i(t)) throw TypeError(t + ' is not an object!');
        return t;
      };
    }
  }
]);
//# sourceMappingURL=1.6b80bdd0.chunk.js.map
