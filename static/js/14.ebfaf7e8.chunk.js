(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [14],
  {
    1095: function(e, a) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII=';
    },
    1097: function(e, a, t) {
      'use strict';
      var n = t(0),
        r = t(1),
        c = t.n(r),
        s = t(971),
        l = t.n(s),
        o = (t(1201), t(1202), t(1203), t(2133)),
        i = t(1095),
        m = t.n(i),
        u = new l.a.Icon({ iconUrl: m.a, iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40] }),
        A = l.a.markerClusterGroup({ chunkedLoading: !1, spiderfyOnMaxZoom: !1 }),
        p = function(e) {
          var a = e.markers,
            t = Object(o.b)().map;
          return (
            Object(n.useEffect)(
              function() {
                A.clearLayers(),
                  a.map(function(e) {
                    var a = e.lat,
                      t = e.long,
                      n = e.name,
                      r = e.street,
                      c = e.location,
                      s = '\n        <h6 class="mb-1">'
                        .concat(n, '</h6>\n        <p class="m-0 text-500">')
                        .concat(r, ', ')
                        .concat(c, '</p>\n      ');
                    return l.a
                      .marker(new l.a.LatLng(a, t), { icon: u })
                      .addTo(A)
                      .bindPopup(s);
                  }),
                  t.addLayer(A);
              },
              [a, t]
            ),
            null
          );
        };
      p.propTypes = {
        markers: c.a.arrayOf(
          c.a.shape({
            lat: c.a.number.isRequired,
            long: c.a.number.isRequired,
            name: c.a.string.isRequired,
            street: c.a.string,
            location: c.a.string
          }).isRequired
        ).isRequired
      };
      a.a = p;
    },
    2147: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(18),
        r = t(0),
        c = t.n(r),
        s = t(19),
        l = t(943),
        o = t(471),
        i = t(945),
        m = t(946),
        u = t(947),
        A = t(948),
        p = t(940),
        E = t(484),
        h = t(485),
        d = t(385),
        g = t(941),
        b = t(192),
        f = (t(1200), t(2145)),
        v = t(1097),
        k = t(195),
        w = (t(1204), t(971)),
        x = t.n(w),
        H = t(24),
        R = function(e) {
          e.mapWidth, e.mapHeight;
          var a = Object(r.useContext)(H.e).isDark
              ? ['invert:98%', 'grayscale:69%', 'bright:89%', 'contrast:111%', 'hue:205deg', 'saturate:1000%']
              : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'],
            t = Object(r.useRef)(null);
          return (
            setTimeout(function() {
              return x.a.tileLayer
                .colorFilter('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                  attribution: null,
                  transparent: !0,
                  filter: a
                })
                .addTo(t.current.leafletElement);
            }),
            c.a.createElement(
              f.a,
              {
                center: [10.737, 0],
                zoom: 1,
                minZoom: 1,
                maxZoom: 18,
                zoomSnap: 0.5,
                className: 'h-100 bg-white',
                style: { width: '100%', minHeight: 300 },
                ref: t
              },
              c.a.createElement(v.a, { markers: k.b })
            )
          );
        };
      a.default = function() {
        var e = Object(r.useState)('week'),
          a = Object(n.a)(e, 2),
          t = a[0],
          f = a[1];
        return c.a.createElement(
          l.a,
          { className: 'h-100 mt-3 mt-lg-0' },
          c.a.createElement(
            o.a,
            { className: 'bg-light d-flex justify-content-between' },
            c.a.createElement('h5', { className: 'mb-0' }, 'Active users'),
            c.a.createElement(
              i.a,
              { className: 'text-sans-serif' },
              c.a.createElement(
                m.a,
                { color: 'link', size: 'sm', className: 'text-600 dropdown-caret-none', boundary: 'viewport' },
                c.a.createElement(s.a, { icon: 'ellipsis-h', className: 'fs--1' })
              ),
              c.a.createElement(
                u.a,
                { className: 'border py-0', right: !0 },
                c.a.createElement(
                  'div',
                  { className: 'bg-white py-2' },
                  c.a.createElement(A.a, null, 'Edit'),
                  c.a.createElement(A.a, null, 'Move'),
                  c.a.createElement(A.a, null, 'Resize'),
                  c.a.createElement(A.a, { divider: !0 }),
                  c.a.createElement(A.a, { className: 'text-warning' }, 'Archive'),
                  c.a.createElement(A.a, { className: 'text-danger' }, 'Delete')
                )
              )
            )
          ),
          c.a.createElement(p.a, { className: 'p-0 overflow-hidden h-100' }, c.a.createElement(R, null)),
          c.a.createElement(
            E.a,
            { className: 'bg-light' },
            c.a.createElement(
              h.a,
              { className: 'justify-content-between' },
              c.a.createElement(
                d.a,
                { xs: 'auto' },
                c.a.createElement(
                  g.a,
                  {
                    type: 'select',
                    bsSize: 'sm',
                    id: 'selectDuration',
                    value: t,
                    onChange: function(e) {
                      var a = e.target;
                      return f(a.value);
                    }
                  },
                  c.a.createElement('option', { value: 'week' }, 'Last 7 days'),
                  c.a.createElement('option', { value: 'month' }, 'Last month'),
                  c.a.createElement('option', { value: 'year' }, 'Last year')
                )
              ),
              c.a.createElement(
                d.a,
                { xs: 'auto' },
                c.a.createElement(
                  b.a,
                  { color: 'falcon-default', size: 'sm' },
                  c.a.createElement('span', { className: 'd-none d-sm-inline-block mr-1' }, 'Location'),
                  'Overview',
                  c.a.createElement(s.a, { icon: 'chevron-right', className: 'ml-1 fs--1' })
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=14.ebfaf7e8.chunk.js.map
