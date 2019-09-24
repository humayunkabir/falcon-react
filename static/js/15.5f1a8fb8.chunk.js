(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    1924: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t(47),
        n = t(0),
        r = t.n(n),
        c = t(27),
        o = t(670),
        s = t(307),
        m = t(675),
        i = t(676),
        d = t(677),
        u = t(678),
        E = t(668),
        f = t(671),
        h = t(310),
        p = t(281),
        b = t(204),
        v = t(191),
        w = t(976),
        g = t.n(w),
        y = t(685),
        N = t.n(y),
        x = (t(884),
        {
          tooltip: {
            show: !0,
            trigger: 'item',
            backgroundColor: '#f9fafd',
            textStyle: { color: '#000' },
            formatter: function(e) {
              var a = e.name,
                t = e.value;
              return '<strong>'.concat(a, '</strong><br/>Active user: ').concat(t ? ''.concat(Math.round(t / 1e4)) : 0);
            }
          },
          visualMap: {
            min: 0,
            max: 1e5,
            text: ['High', 'Low'],
            realtime: !1,
            calculable: !0,
            inRange: { color: ['#d8e2ef', '#2d7bcd'] }
          },
          series: [
            {
              type: 'map',
              mapType: 'world',
              roam: !0,
              zoom: 1.25,
              scaleLimit: { min: 0.9, max: 17 },
              itemStyle: {
                normal: { borderColor: '#d8e2ef', borderWidth: 0.5, areaStyle: { color: '#d8e2ef' } },
                emphasis: { areaColor: '#0443a2', borderColor: '#d8e2ef', label: { show: !1, color: '#fff' } }
              },
              data: t(145).a
            }
          ]
        });
      a.default = function() {
        var e = Object(n.useState)('week'),
          a = Object(l.a)(e, 2),
          t = a[0],
          w = a[1];
        return r.a.createElement(
          o.a,
          { className: 'h-100 mt-3 mt-lg-0' },
          r.a.createElement(
            s.a,
            { className: 'bg-light d-flex justify-content-between' },
            r.a.createElement('h5', { className: 'mb-0' }, 'Active users'),
            r.a.createElement(
              m.a,
              { className: 'text-sans-serif' },
              r.a.createElement(
                i.a,
                { color: 'link', size: 'sm', className: 'text-600 dropdown-caret-none', boundary: 'viewport' },
                r.a.createElement(c.a, { icon: 'ellipsis-h', className: 'fs--1' })
              ),
              r.a.createElement(
                d.a,
                { className: 'border py-0', right: !0 },
                r.a.createElement(
                  'div',
                  { className: 'bg-white py-2' },
                  r.a.createElement(u.a, null, 'Edit'),
                  r.a.createElement(u.a, null, 'Move'),
                  r.a.createElement(u.a, null, 'Resize'),
                  r.a.createElement(u.a, { divider: !0 }),
                  r.a.createElement(u.a, { className: 'text-warning' }, 'Archive'),
                  r.a.createElement(u.a, { className: 'text-danger' }, 'Delete')
                )
              )
            )
          ),
          r.a.createElement(
            E.a,
            { className: 'p-3 overflow-hidden' },
            r.a.createElement(g.a, { echarts: N.a, option: x, style: { width: '100%', height: 420 } })
          ),
          r.a.createElement(
            f.a,
            { className: 'bg-light' },
            r.a.createElement(
              h.a,
              { className: 'justify-content-between' },
              r.a.createElement(
                p.a,
                { xs: 'auto' },
                r.a.createElement(
                  b.a,
                  {
                    type: 'select',
                    bsSize: 'sm',
                    id: 'selectDuration',
                    value: t,
                    onChange: function(e) {
                      var a = e.target;
                      return w(a.value);
                    }
                  },
                  r.a.createElement('option', { value: 'week' }, 'Last 7 days'),
                  r.a.createElement('option', { value: 'month' }, 'Last month'),
                  r.a.createElement('option', { value: 'year' }, 'Last year')
                )
              ),
              r.a.createElement(
                p.a,
                { xs: 'auto' },
                r.a.createElement(
                  v.a,
                  { color: 'falcon-default', size: 'sm' },
                  r.a.createElement('span', { className: 'd-none d-sm-inline-block mr-1' }, 'Location'),
                  'Overview',
                  r.a.createElement(c.a, { icon: 'chevron-right', className: 'ml-1 fs--1' })
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=15.5f1a8fb8.chunk.js.map
