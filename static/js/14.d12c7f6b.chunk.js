(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    1921: function(e, t, a) {
      'use strict';
      var n = a(0),
        o = a.n(n),
        c = a(675),
        l = a(676),
        r = a(677),
        s = a(678),
        i = a(27),
        m = function() {
          return o.a.createElement(
            c.a,
            null,
            o.a.createElement(
              l.a,
              { color: 'link', size: 'sm', className: 'text-600 btn-reveal' },
              o.a.createElement(i.a, { icon: 'ellipsis-h', className: 'fs--1' })
            ),
            o.a.createElement(
              r.a,
              { right: !0, className: 'border py-2' },
              o.a.createElement(s.a, null, 'View'),
              o.a.createElement(s.a, null, 'Edit'),
              o.a.createElement(s.a, null, 'Refund'),
              o.a.createElement(s.a, { divider: !0 }),
              o.a.createElement(s.a, { className: 'text-warning' }, 'Archive'),
              o.a.createElement(s.a, { className: 'text-danger' }, 'Delete')
            )
          );
        };
      t.a = [
        {
          id: 1,
          customer: 'Sylvia Plath',
          email: 'john@gmail.com',
          product: 'Slick - Drag & Drop Bootstrap Generator',
          status: 'success',
          amount: 99,
          action: o.a.createElement(m, null)
        },
        {
          id: 2,
          customer: 'Homer',
          email: 'sylvia@mail.ru',
          product: 'Bose SoundSport Wireless Headphones',
          status: 'success',
          amount: 634,
          action: o.a.createElement(m, null)
        },
        {
          id: 3,
          customer: 'Edgar Allan Poe',
          email: 'edgar@yahoo.com',
          product: 'All-New Fire HD 8 Kids Edition Tablet',
          status: 'blocked',
          amount: 199,
          action: o.a.createElement(m, null)
        },
        {
          id: 4,
          customer: 'William Butler Yeats',
          email: 'william@gmail.com',
          product: 'Apple iPhone XR (64GB)',
          status: 'success',
          amount: 798,
          action: o.a.createElement(m, null)
        },
        {
          id: 5,
          customer: 'Rabindranath Tagore',
          email: 'tagore@twitter.com',
          product: 'ASUS Chromebook C202SA-YS02 11.6"',
          status: 'blocked',
          amount: 318,
          action: o.a.createElement(m, null)
        },
        {
          id: 6,
          customer: 'Emily Dickinson',
          email: 'emily@gmail.com',
          product: 'Mirari OK to Wake! Alarm Clock & Night-Light',
          status: 'pending',
          amount: 11,
          action: o.a.createElement(m, null)
        },
        {
          id: 7,
          customer: 'Giovanni Boccaccio',
          email: 'giovanni@outlook.com',
          product: 'Summer Infant Contoured Changing Pad',
          status: 'success',
          amount: 31,
          action: o.a.createElement(m, null)
        },
        {
          id: 8,
          customer: 'Oscar Wilde',
          email: 'oscar@hotmail.com',
          product: 'Munchkin 6 Piece Fork and Spoon Set',
          status: 'success',
          amount: 43,
          action: o.a.createElement(m, null)
        },
        {
          id: 9,
          customer: 'John Doe',
          email: 'doe@gmail.com',
          product: 'Falcon - Responsive Dashboard Template',
          status: 'success',
          amount: 57,
          action: o.a.createElement(m, null)
        },
        {
          id: 10,
          customer: 'Emma Watson',
          email: 'emma@gmail.com',
          product: 'Apple iPhone XR (64GB)',
          status: 'blocked',
          amount: 999,
          action: o.a.createElement(m, null)
        },
        {
          id: 11,
          customer: 'Sylvia Plath',
          email: 'plath@yahoo.com',
          product: 'All-New Fire HD 8 Kids Edition Tablet',
          status: 'pending',
          amount: 199,
          action: o.a.createElement(m, null)
        }
      ];
    },
    1923: function(e, t, a) {
      'use strict';
      a.r(t),
        function(e) {
          var n = a(77),
            o = a(0),
            c = a.n(o),
            l = a(1875),
            r = a.n(l),
            s = a(1883),
            i = a.n(s),
            m = a(770),
            u = a(27),
            d = a(310),
            g = a(281),
            p = a(191),
            h = a(107),
            E = a(20),
            b = a(1921),
            f = function(e) {
              var t = e.sizePerPage,
                a = e.totalSize,
                n = e.page,
                o = e.lastIndex;
              return c.a.createElement('span', null, (n - 1) * t + 1, ' to ', o > a ? a : o, ' of ', a, ' \u2014', ' ');
            },
            v = [
              {
                dataField: 'customer',
                text: 'Customer',
                formatter: function(e) {
                  return c.a.createElement(
                    E.b,
                    { to: 'pages/customer-details', className: 'font-weight-semi-bold' },
                    e
                  );
                },
                sort: !0
              },
              { dataField: 'email', text: 'Email', sort: !0 },
              { dataField: 'product', text: 'Product', sort: !0 },
              {
                dataField: 'status',
                text: 'Payment',
                formatter: function(e) {
                  var t = '',
                    a = '',
                    n = '';
                  switch (e) {
                    case 'success':
                      (t = 'success'), (a = 'check'), (n = 'Success');
                      break;
                    case 'blocked':
                      (t = 'secondary'), (a = 'ban'), (n = 'Blocked');
                      break;
                    default:
                      (t = 'warning'), (a = 'stream'), (n = 'Pending');
                  }
                  return c.a.createElement(
                    m.a,
                    { color: 'soft-'.concat(t), className: 'rounded-capsule fs--1' },
                    n,
                    c.a.createElement(u.a, { icon: a, transform: 'shrink-2', className: 'ml-1' })
                  );
                },
                sort: !0
              },
              {
                dataField: 'amount',
                text: 'Amount',
                formatter: function(e) {
                  return c.a.createElement(o.Fragment, null, '$', e);
                },
                sort: !0,
                align: 'right',
                headerAlign: 'right'
              },
              { dataField: 'action', text: '' }
            ],
            k = function(e) {
              var t = e.indeterminate,
                a = (e.rowIndex, Object(n.a)(e, ['indeterminate', 'rowIndex']));
              return c.a.createElement(
                'div',
                { className: 'custom-control custom-checkbox' },
                c.a.createElement(
                  'input',
                  Object.assign({ className: 'custom-control-input' }, a, {
                    onChange: function() {},
                    ref: function(e) {
                      e && (e.indeterminate = t);
                    }
                  })
                ),
                c.a.createElement('label', { className: 'custom-control-label' })
              );
            },
            P = function(e) {
              return {
                mode: 'checkbox',
                clickToSelect: !1,
                selectionHeaderRenderer: function(e) {
                  e.mode;
                  var t = Object(n.a)(e, ['mode']);
                  return c.a.createElement(k, Object.assign({ type: 'checkbox' }, t));
                },
                selectionRenderer: function(e) {
                  var t = e.mode,
                    a = Object(n.a)(e, ['mode']);
                  return c.a.createElement(k, Object.assign({ type: t }, a));
                },
                onSelect: e,
                onSelectAll: e
              };
            },
            x = { custom: !0, sizePerPage: 6, totalSize: b.a.length },
            w = function(t) {
              var a = t.setIsSelected,
                n = Object(o.createRef)(),
                s = function(e) {
                  var t = e.page,
                    a = e.onPageChange;
                  return function() {
                    a(t + 1);
                  };
                },
                m = function(e) {
                  var t = e.page,
                    a = e.onPageChange;
                  return function() {
                    a(t - 1);
                  };
                },
                u = function() {
                  e(function() {
                    a(!!n.current.selectionContext.selected.length);
                  });
                };
              return c.a.createElement(l.PaginationProvider, { pagination: r()(x) }, function(e) {
                var t = e.paginationProps,
                  a = e.paginationTableProps,
                  l = t.page * t.sizePerPage;
                return c.a.createElement(
                  o.Fragment,
                  null,
                  c.a.createElement(
                    'div',
                    { className: 'table-responsive' },
                    c.a.createElement(
                      i.a,
                      Object.assign(
                        {
                          ref: n,
                          bootstrap4: !0,
                          keyField: 'id',
                          data: b.a,
                          columns: v,
                          selectRow: P(u),
                          bordered: !1,
                          classes: 'table-dashboard table-sm fs--1 border-bottom mb-0',
                          rowClasses: 'btn-reveal-trigger',
                          headerClasses: 'bg-200 text-900'
                        },
                        a
                      )
                    )
                  ),
                  c.a.createElement(
                    d.a,
                    { noGutters: !0, className: 'px-1 py-3' },
                    c.a.createElement(
                      g.a,
                      { className: 'pl-3 fs--1' },
                      c.a.createElement(f, Object.assign({}, t, { lastIndex: l })),
                      c.a.createElement(
                        h.a,
                        {
                          color: 'link',
                          size: 'sm',
                          icon: 'chevron-right',
                          iconAlign: 'right',
                          transform: 'down-1 shrink-4',
                          className: 'px-0 font-weight-semi-bold',
                          onClick: function() {
                            return (e = t), (a = b.a.length), void (0, e.onSizePerPageChange)(a, 1);
                            var e, a;
                          }
                        },
                        'view all'
                      )
                    ),
                    c.a.createElement(
                      g.a,
                      { xs: 'auto', className: 'pr-3' },
                      c.a.createElement(
                        p.a,
                        {
                          color: 1 === t.page ? 'light' : 'primary',
                          size: 'sm',
                          onClick: m(t),
                          disabled: 1 === t.page
                        },
                        'Previous'
                      ),
                      c.a.createElement(
                        p.a,
                        {
                          color: l >= t.totalSize ? 'light' : 'primary',
                          size: 'sm',
                          className: 'ml-2 px-4',
                          onClick: s(t),
                          disabled: l >= t.totalSize
                        },
                        'Next'
                      )
                    )
                  )
                );
              });
            };
          (w.defaultProps = { value: 'PurchasesTable' }), (t.default = w);
        }.call(this, a(306).setImmediate);
    }
  }
]);
