(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    1918: function(e, t, a) {},
    1922: function(e, t, a) {
      'use strict';
      a.r(t),
        function(e) {
          var n = a(76),
            o = a(0),
            l = a.n(o),
            c = a(1874),
            r = a.n(c),
            s = a(1882),
            i = a.n(s),
            m = a(769),
            u = a(27),
            d = a(674),
            g = a(675),
            p = a(676),
            h = a(677),
            E = a(309),
            b = a(279),
            f = a(189),
            v = a(106),
            k = a(21),
            P = (a(1918),
            function(e) {
              var t = e.sizePerPage,
                a = e.totalSize,
                n = e.page,
                o = e.lastIndex;
              return l.a.createElement('span', null, (n - 1) * t + 1, ' to ', o > a ? a : o, ' of ', a, ' \u2014', ' ');
            }),
            w = function() {
              return l.a.createElement(
                d.a,
                null,
                l.a.createElement(
                  g.a,
                  { color: 'link', size: 'sm', className: 'text-600 btn-reveal' },
                  l.a.createElement(u.a, { icon: 'ellipsis-h', className: 'fs--1' })
                ),
                l.a.createElement(
                  p.a,
                  { right: !0, className: 'border py-0' },
                  l.a.createElement(
                    'div',
                    { className: 'bg-white py-2' },
                    l.a.createElement(h.a, null, 'View'),
                    l.a.createElement(h.a, null, 'Edit'),
                    l.a.createElement(h.a, null, 'Refund'),
                    l.a.createElement(h.a, { divider: !0 }),
                    l.a.createElement(h.a, { className: 'text-warning' }, 'Archive'),
                    l.a.createElement(h.a, { className: 'text-danger' }, 'Delete')
                  )
                )
              );
            },
            x = [
              {
                customer: 'Sylvia Plath',
                email: 'john@gmail.com',
                product: 'Slick - Drag & Drop Bootstrap Generator',
                status: 'success',
                amount: 99,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Homer',
                email: 'sylvia@mail.ru',
                product: 'Bose SoundSport Wireless Headphones',
                status: 'success',
                amount: 634,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Edgar Allan Poe',
                email: 'edgar@yahoo.com',
                product: 'All-New Fire HD 8 Kids Edition Tablet',
                status: 'blocked',
                amount: 199,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'William Butler Yeats',
                email: 'william@gmail.com',
                product: 'Apple iPhone XR (64GB)',
                status: 'success',
                amount: 798,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Rabindranath Tagore',
                email: 'tagore@twitter.com',
                product: 'ASUS Chromebook C202SA-YS02 11.6"',
                status: 'blocked',
                amount: 318,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Emily Dickinson',
                email: 'emily@gmail.com',
                product: 'Mirari OK to Wake! Alarm Clock & Night-Light',
                status: 'pending',
                amount: 11,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Giovanni Boccaccio',
                email: 'giovanni@outlook.com',
                product: 'Summer Infant Contoured Changing Pad',
                status: 'success',
                amount: 31,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Oscar Wilde',
                email: 'oscar@hotmail.com',
                product: 'Munchkin 6 Piece Fork and Spoon Set',
                status: 'success',
                amount: 43,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'John Doe',
                email: 'doe@gmail.com',
                product: 'Falcon - Responsive Dashboard Template',
                status: 'success',
                amount: 57,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Emma Watson',
                email: 'emma@gmail.com',
                product: 'Apple iPhone XR (64GB)',
                status: 'blocked',
                amount: 999,
                action: l.a.createElement(w, null)
              },
              {
                customer: 'Sylvia Plath',
                email: 'plath@yahoo.com',
                product: 'All-New Fire HD 8 Kids Edition Tablet',
                status: 'pending',
                amount: 199,
                action: l.a.createElement(w, null)
              }
            ],
            N = [
              {
                dataField: 'customer',
                text: 'Customer',
                formatter: function(e) {
                  return l.a.createElement(
                    k.b,
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
                  return l.a.createElement(
                    m.a,
                    { color: 'soft-'.concat(t), className: 'rounded-capsule fs--1' },
                    n,
                    l.a.createElement(u.a, { icon: a, transform: 'shrink-2', className: 'ml-1' })
                  );
                },
                sort: !0
              },
              {
                dataField: 'amount',
                text: 'Amount',
                formatter: function(e) {
                  return l.a.createElement(o.Fragment, null, '$', e);
                },
                sort: !0,
                align: 'right',
                headerAlign: 'right'
              },
              { dataField: 'action', text: '' }
            ],
            S = function(e) {
              var t = e.indeterminate,
                a = (e.rowIndex, Object(n.a)(e, ['indeterminate', 'rowIndex']));
              return l.a.createElement(
                'div',
                { className: 'custom-control custom-checkbox' },
                l.a.createElement(
                  'input',
                  Object.assign({ className: 'custom-control-input' }, a, {
                    onChange: function() {},
                    ref: function(e) {
                      e && (e.indeterminate = t);
                    }
                  })
                ),
                l.a.createElement('label', { className: 'custom-control-label' })
              );
            },
            y = function(e) {
              return {
                mode: 'checkbox',
                clickToSelect: !1,
                selectionHeaderRenderer: function(e) {
                  e.mode;
                  var t = Object(n.a)(e, ['mode']);
                  return l.a.createElement(S, Object.assign({ type: 'checkbox' }, t));
                },
                selectionRenderer: function(e) {
                  var t = e.mode,
                    a = Object(n.a)(e, ['mode']);
                  return l.a.createElement(S, Object.assign({ type: t }, a));
                },
                onSelect: e,
                onSelectAll: e
              };
            },
            C = { custom: !0, sizePerPage: 6, totalSize: x.length },
            A = function(t) {
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
              return l.a.createElement(c.PaginationProvider, { pagination: r()(C) }, function(e) {
                var t = e.paginationProps,
                  a = e.paginationTableProps,
                  c = t.page * t.sizePerPage;
                return l.a.createElement(
                  o.Fragment,
                  null,
                  l.a.createElement(
                    'div',
                    { className: 'table-responsive' },
                    l.a.createElement(
                      i.a,
                      Object.assign(
                        {
                          ref: n,
                          bootstrap4: !0,
                          keyField: 'email',
                          data: x,
                          columns: N,
                          selectRow: y(u),
                          bordered: !1,
                          classes: 'table-dashboard table-sm fs--1 border-bottom mb-0',
                          rowClasses: 'btn-reveal-trigger',
                          headerClasses: 'bg-200 text-900'
                        },
                        a
                      )
                    )
                  ),
                  l.a.createElement(
                    E.a,
                    { noGutters: !0, className: 'px-1 py-3' },
                    l.a.createElement(
                      b.a,
                      { className: 'pl-3 fs--1' },
                      l.a.createElement(P, Object.assign({}, t, { lastIndex: c })),
                      l.a.createElement(
                        v.a,
                        {
                          color: 'link',
                          size: 'sm',
                          icon: 'chevron-right',
                          iconAlign: 'right',
                          transform: 'down-1 shrink-4',
                          className: 'px-0 font-weight-semi-bold',
                          onClick: function() {
                            return (e = x.length), void (0, t.onSizePerPageChange)(e, 1);
                            var e;
                          }
                        },
                        'view all'
                      )
                    ),
                    l.a.createElement(
                      b.a,
                      { xs: 'auto', className: 'pr-3' },
                      l.a.createElement(
                        f.a,
                        {
                          color: 1 === t.page ? 'light' : 'primary',
                          size: 'sm',
                          onClick: m(t),
                          disabled: 1 === t.page
                        },
                        'Previous'
                      ),
                      l.a.createElement(
                        f.a,
                        {
                          color: c >= t.totalSize ? 'light' : 'primary',
                          size: 'sm',
                          className: 'ml-2 px-4',
                          onClick: s(t),
                          disabled: c >= t.totalSize
                        },
                        'Next'
                      )
                    )
                  )
                );
              });
            };
          (A.defaultProps = { value: 'PurchasesTable' }), (t.default = A);
        }.call(this, a(305).setImmediate);
    }
  }
]);
