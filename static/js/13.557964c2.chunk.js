(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [13],
  {
    2161: function(e, a, t) {
      'use strict';
      var n = t(0),
        r = t.n(n),
        o = t(542),
        l = t(543),
        s = t(544),
        c = t(545),
        i = t(16),
        m = function() {
          return r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              l.a,
              { color: 'link', size: 'sm', className: 'text-600 btn-reveal' },
              r.a.createElement(i.a, { icon: 'ellipsis-h', className: 'fs--1' })
            ),
            r.a.createElement(
              s.a,
              { right: !0, className: 'border py-2' },
              r.a.createElement(c.a, null, 'View'),
              r.a.createElement(c.a, null, 'Edit'),
              r.a.createElement(c.a, null, 'Refund'),
              r.a.createElement(c.a, { divider: !0 }),
              r.a.createElement(c.a, { className: 'text-warning' }, 'Archive'),
              r.a.createElement(c.a, { className: 'text-danger' }, 'Delete')
            )
          );
        };
      a.a = [
        {
          id: 1,
          customer: 'Sylvia Plath',
          email: 'john@gmail.com',
          product: 'Slick - Drag & Drop Bootstrap Generator',
          status: 'success',
          amount: 99,
          action: r.a.createElement(m, null)
        },
        {
          id: 2,
          customer: 'Homer',
          email: 'sylvia@mail.ru',
          product: 'Bose SoundSport Wireless Headphones',
          status: 'success',
          amount: 634,
          action: r.a.createElement(m, null)
        },
        {
          id: 3,
          customer: 'Edgar Allan Poe',
          email: 'edgar@yahoo.com',
          product: 'All-New Fire HD 8 Kids Edition Tablet',
          status: 'blocked',
          amount: 199,
          action: r.a.createElement(m, null)
        },
        {
          id: 4,
          customer: 'William Butler Yeats',
          email: 'william@gmail.com',
          product: 'Apple iPhone XR (64GB)',
          status: 'success',
          amount: 798,
          action: r.a.createElement(m, null)
        },
        {
          id: 5,
          customer: 'Rabindranath Tagore',
          email: 'tagore@twitter.com',
          product: 'ASUS Chromebook C202SA-YS02 11.6"',
          status: 'blocked',
          amount: 318,
          action: r.a.createElement(m, null)
        },
        {
          id: 6,
          customer: 'Emily Dickinson',
          email: 'emily@gmail.com',
          product: 'Mirari OK to Wake! Alarm Clock & Night-Light',
          status: 'pending',
          amount: 11,
          action: r.a.createElement(m, null)
        },
        {
          id: 7,
          customer: 'Giovanni Boccaccio',
          email: 'giovanni@outlook.com',
          product: 'Summer Infant Contoured Changing Pad',
          status: 'success',
          amount: 31,
          action: r.a.createElement(m, null)
        },
        {
          id: 8,
          customer: 'Oscar Wilde',
          email: 'oscar@hotmail.com',
          product: 'Munchkin 6 Piece Fork and Spoon Set',
          status: 'success',
          amount: 43,
          action: r.a.createElement(m, null)
        },
        {
          id: 9,
          customer: 'John Doe',
          email: 'doe@gmail.com',
          product: 'Falcon - Responsive Dashboard Template',
          status: 'success',
          amount: 57,
          action: r.a.createElement(m, null)
        },
        {
          id: 10,
          customer: 'Emma Watson',
          email: 'emma@gmail.com',
          product: 'Apple iPhone XR (64GB)',
          status: 'blocked',
          amount: 999,
          action: r.a.createElement(m, null)
        },
        {
          id: 11,
          customer: 'Sylvia Plath',
          email: 'plath@yahoo.com',
          product: 'All-New Fire HD 8 Kids Edition Tablet',
          status: 'pending',
          amount: 199,
          action: r.a.createElement(m, null)
        },
        {
          id: 12,
          customer: 'Iori Kim',
          email: 'ikim@yahoo.com',
          product: 'ASUS Chromebook C202SA-YS02 11.6"',
          status: 'pending',
          amount: 200,
          action: r.a.createElement(m, null)
        }
      ];
    },
    2164: function(e, a, t) {
      'use strict';
      t.r(a),
        function(e) {
          var n = t(33),
            r = t(0),
            o = t.n(r),
            l = t(1180),
            s = t.n(l),
            c = t(1184),
            i = t.n(c),
            m = t(1058),
            d = t(16),
            u = t(541),
            g = t(421),
            b = t(215),
            p = t(73),
            h = t(12),
            E = t(2161),
            f = function(e) {
              var a = e.sizePerPage,
                t = e.totalSize,
                n = e.page,
                r = e.lastIndex;
              return o.a.createElement('span', null, (n - 1) * a + 1, ' to ', r > t ? t : r, ' of ', t, ' \u2014', ' ');
            },
            k = [
              {
                dataField: 'customer',
                text: 'Customer',
                formatter: function(e) {
                  return o.a.createElement(
                    h.b,
                    { to: 'pages/customer-details', className: 'font-weight-semi-bold' },
                    e
                  );
                },
                classes: 'border-0 align-middle',
                headerClasses: 'border-0',
                sort: !0
              },
              {
                dataField: 'email',
                text: 'Email',
                classes: 'border-0 align-middle',
                headerClasses: 'border-0',
                sort: !0
              },
              {
                dataField: 'product',
                text: 'Product',
                classes: 'border-0 align-middle',
                headerClasses: 'border-0',
                sort: !0
              },
              {
                dataField: 'status',
                text: 'Payment',
                formatter: function(e) {
                  var a = '',
                    t = '',
                    n = '';
                  switch (e) {
                    case 'success':
                      (a = 'success'), (t = 'check'), (n = 'Success');
                      break;
                    case 'blocked':
                      (a = 'secondary'), (t = 'ban'), (n = 'Blocked');
                      break;
                    default:
                      (a = 'warning'), (t = 'stream'), (n = 'Pending');
                  }
                  return o.a.createElement(
                    m.a,
                    { color: 'soft-'.concat(a), className: 'rounded-capsule' },
                    n,
                    o.a.createElement(d.a, { icon: t, transform: 'shrink-2', className: 'ml-1' })
                  );
                },
                classes: 'border-0 align-middle fs-0',
                headerClasses: 'border-0',
                sort: !0
              },
              {
                dataField: 'amount',
                text: 'Amount',
                formatter: function(e) {
                  return o.a.createElement(r.Fragment, null, '$', e);
                },
                classes: 'border-0 align-middle',
                headerClasses: 'border-0',
                sort: !0,
                align: 'right',
                headerAlign: 'right'
              },
              { dataField: 'action', classes: 'border-0 align-middle', headerClasses: 'border-0', text: '' }
            ],
            v = function(e) {
              var a = e.indeterminate,
                t = (e.rowIndex, Object(n.a)(e, ['indeterminate', 'rowIndex']));
              return o.a.createElement(
                'div',
                { className: 'custom-control custom-checkbox' },
                o.a.createElement(
                  'input',
                  Object.assign({ className: 'custom-control-input' }, t, {
                    onChange: function() {},
                    ref: function(e) {
                      e && (e.indeterminate = a);
                    }
                  })
                ),
                o.a.createElement('label', { className: 'custom-control-label' })
              );
            },
            S = function(e) {
              return {
                mode: 'checkbox',
                clickToSelect: !1,
                selectionHeaderRenderer: function(e) {
                  e.mode;
                  var a = Object(n.a)(e, ['mode']);
                  return o.a.createElement(v, Object.assign({ type: 'checkbox' }, a));
                },
                selectionRenderer: function(e) {
                  var a = e.mode,
                    t = Object(n.a)(e, ['mode']);
                  return o.a.createElement(v, Object.assign({ type: a }, t));
                },
                headerColumnStyle: { border: 0, verticalAlign: 'middle' },
                selectColumnStyle: { border: 0, verticalAlign: 'middle' },
                onSelect: e,
                onSelectAll: e
              };
            },
            C = { custom: !0, sizePerPage: 6, totalSize: E.a.length };
          a.default = function(a) {
            var t = a.setIsSelected,
              n = Object(r.createRef)(),
              c = function(e) {
                var a = e.page,
                  t = e.onPageChange;
                return function() {
                  t(a + 1);
                };
              },
              m = function(e) {
                var a = e.page,
                  t = e.onPageChange;
                return function() {
                  t(a - 1);
                };
              },
              d = function() {
                e(function() {
                  t(!!n.current.selectionContext.selected.length);
                });
              };
            return o.a.createElement(l.PaginationProvider, { pagination: s()(C) }, function(e) {
              var a = e.paginationProps,
                t = e.paginationTableProps,
                l = a.page * a.sizePerPage;
              return o.a.createElement(
                r.Fragment,
                null,
                o.a.createElement(
                  'div',
                  { className: 'table-responsive' },
                  o.a.createElement(
                    i.a,
                    Object.assign(
                      {
                        ref: n,
                        bootstrap4: !0,
                        keyField: 'id',
                        data: E.a,
                        columns: k,
                        selectRow: S(d),
                        bordered: !1,
                        classes:
                          'table-dashboard table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap',
                        rowClasses: 'btn-reveal-trigger border-top border-200',
                        headerClasses: 'bg-200 text-900 border-y border-200'
                      },
                      t
                    )
                  )
                ),
                o.a.createElement(
                  u.a,
                  { noGutters: !0, className: 'px-1 py-3' },
                  o.a.createElement(
                    g.a,
                    { className: 'pl-3 fs--1' },
                    o.a.createElement(f, Object.assign({}, a, { lastIndex: l })),
                    o.a.createElement(
                      p.a,
                      {
                        color: 'link',
                        size: 'sm',
                        icon: 'chevron-right',
                        iconAlign: 'right',
                        transform: 'down-1 shrink-4',
                        className: 'px-0 font-weight-semi-bold',
                        onClick: function() {
                          return (e = a), (t = E.a.length), void (0, e.onSizePerPageChange)(t, 1);
                          var e, t;
                        }
                      },
                      'view all'
                    )
                  ),
                  o.a.createElement(
                    g.a,
                    { xs: 'auto', className: 'pr-3' },
                    o.a.createElement(
                      b.a,
                      {
                        color: 1 === a.page ? 'light' : 'primary',
                        size: 'sm',
                        onClick: m(a),
                        disabled: 1 === a.page,
                        className: 'px-4'
                      },
                      'Previous'
                    ),
                    o.a.createElement(
                      b.a,
                      {
                        color: l >= a.totalSize ? 'light' : 'primary',
                        size: 'sm',
                        onClick: c(a),
                        disabled: l >= a.totalSize,
                        className: 'px-4 ml-2'
                      },
                      'Next'
                    )
                  )
                )
              );
            });
          };
        }.call(this, t(518).setImmediate);
    }
  }
]);
//# sourceMappingURL=13.557964c2.chunk.js.map
