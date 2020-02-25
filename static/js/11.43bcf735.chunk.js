(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [11],
  {
    1032: function(a, e, i) {
      'use strict';
      var t = i(75),
        s = i(42),
        r = i(0),
        x = i.n(r),
        n = i(1205),
        o = i(31),
        l = i.n(o),
        k = i(4),
        p = i.n(k),
        c = i(8),
        y = i(255),
        d = i(945),
        m = i(946),
        h = i(947),
        u = i(948),
        f = i(35),
        _ = i(19),
        g = i(994),
        A = i.n(g),
        E = function(a) {
          var e = a.placeholder,
            i = a.className,
            o = a.onChange,
            k = a.files,
            g = a.preview,
            A = Object(s.a)(a, ['placeholder', 'className', 'onChange', 'files', 'preview']);
          return x.a.createElement(
            r.Fragment,
            null,
            x.a.createElement(
              n.a,
              {
                onDrop: function(a) {
                  var e = [];
                  a.length &&
                    a.map(function(a) {
                      var i = new FileReader();
                      return (
                        i.readAsDataURL(a),
                        (i.onload = function() {
                          e.push({ id: l()(), base64: i.result, size: a.size, path: a.path, type: a.type }),
                            o([].concat(e));
                        }),
                        !0
                      );
                    });
                }
              },
              function(a) {
                var s = a.getRootProps,
                  r = a.getInputProps;
                return x.a.createElement(
                  'div',
                  s({
                    className: p()(
                      'p-3 border-dashed border-2x border-300 bg-light rounded-soft text-center cursor-pointer',
                      i
                    )
                  }),
                  x.a.createElement('input', Object(t.a)({}, r(), {}, A)),
                  e
                );
              }
            ),
            g &&
              Object(c.i)(k) &&
              x.a.createElement(
                'div',
                { className: 'border-top mt-3' },
                k.map(function(a) {
                  var e = a.id,
                    i = a.path,
                    t = a.base64,
                    s = a.size;
                  return x.a.createElement(
                    y.a,
                    { className: 'align-items-center py-3 border-bottom btn-reveal-trigger', key: e },
                    x.a.createElement('img', { className: 'img-fluid', width: 38, src: t, alt: i }),
                    x.a.createElement(
                      y.a,
                      { body: !0, tag: f.a, justify: 'between', align: 'center', className: 'ml-3' },
                      x.a.createElement(
                        'div',
                        null,
                        x.a.createElement('h6', { 'data-dz-name': '' }, i),
                        x.a.createElement(
                          f.a,
                          { className: 'position-relative', align: 'center' },
                          x.a.createElement(
                            'p',
                            { className: 'mb-0 fs--1 text-400 line-height-1' },
                            (function(a) {
                              return a < 1024
                                ? x.a.createElement(r.Fragment, null, x.a.createElement('strong', null, a), ' Byte')
                                : a < 1048576
                                ? x.a.createElement(
                                    r.Fragment,
                                    null,
                                    x.a.createElement('strong', null, (a / 1024).toFixed(2)),
                                    ' KB'
                                  )
                                : x.a.createElement(
                                    r.Fragment,
                                    null,
                                    x.a.createElement('strong', null, (a / 1048576).toFixed(2)),
                                    ' MB'
                                  );
                            })(s)
                          )
                        )
                      ),
                      x.a.createElement(
                        d.a,
                        { className: 'text-sans-serif' },
                        x.a.createElement(
                          m.a,
                          { color: 'link', size: 'sm', className: 'text-600 btn-reveal' },
                          x.a.createElement(_.a, { icon: 'ellipsis-h' })
                        ),
                        x.a.createElement(
                          h.a,
                          { className: 'border py-0', right: !0 },
                          x.a.createElement(
                            'div',
                            { className: 'bg-white py-2' },
                            x.a.createElement(
                              u.a,
                              {
                                className: 'text-danger',
                                onClick: function() {
                                  return o(
                                    k.filter(function(a) {
                                      return a.id !== e;
                                    })
                                  );
                                }
                              },
                              'Remove File'
                            )
                          )
                        )
                      )
                    )
                  );
                })
              )
          );
        };
      (E.defaultProps = {
        placeholder: x.a.createElement('img', { src: A.a, alt: '', width: 25, className: 'mr-2' }),
        files: [],
        preview: !1
      }),
        (e.a = E);
    },
    1033: function(a, e) {
      a.exports =
        'data:image/png;base64,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';
    },
    1309: function(a) {
      a.exports = JSON.parse(
        '{"v":"5.2.1","fr":60,"ip":0,"op":120,"w":264,"h":464,"ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[132,249.777,0],"ix":2},"a":{"a":0,"k":[0,17.777,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],"o":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],"v":[[53.694,-25.404],[51.881,-23.591],[50.068,-25.404],[51.881,-27.217]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],"o":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],"v":[[-53.867,-20.26],[-55.68,-18.446],[-57.493,-20.26],[-55.68,-22.073]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.203921571374,0.658823549747,0.32549020648,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[-0.858,4.484],"ix":2},"a":{"a":0,"k":[-0.858,4.484],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1.014,1.014]},"o":{"x":[0.164,0.164],"y":[0,0]},"n":["0_1p014_0p164_0","0_1p014_0p164_0"],"t":19,"s":[62,62],"e":[100,100]},{"t":58}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":19,"s":[-35],"e":[-25]},{"t":58}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":19,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":25,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":52,"s":[100],"e":[0]},{"t":58}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],"o":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],"v":[[-53.306,27.449],[-55.119,29.262],[-56.932,27.449],[-55.119,25.636]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.960784316063,0.960784316063,0.960784316063,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.207,"y":1},"o":{"x":0.035,"y":0},"n":"0p207_1_0p035_0","t":19,"s":[-30.5,0.107],"e":[-68.5,-9.893],"to":[-6.33333349227905,-1.66666662693024],"ti":[6.33333349227905,1.66666662693024]},{"t":69}],"ix":2},"a":{"a":0,"k":[-54.5,28.107],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":19,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":21,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":61,"s":[100],"e":[0]},{"t":68}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-1.001],[1.001,0],[0,1.001],[-1.001,0]],"o":[[0,1.001],[-1.001,0],[0,-1.001],[1.001,0]],"v":[[69.444,41.179],[67.631,42.992],[65.818,41.179],[67.631,39.366]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.835294127464,0.309803932905,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.108,"y":0},"n":"0_1_0p108_0","t":28,"s":[24.828,16.174],"e":[70.828,31.174],"to":[7.66666650772095,2.5],"ti":[-7.66666650772095,-2.5]},{"t":76}],"ix":2},"a":{"a":0,"k":[70.828,42.174],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":29,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p667_1_0p167_0"],"t":30,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":61,"s":[100],"e":[0]},{"t":67}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":3,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.592,-0.951],[0.951,0.592]],"o":[[0.951,0.592],[-0.592,0.951],[0,0]],"v":[[73.931,-6.884],[74.58,-4.09],[71.786,-3.44]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.835294127464,0.309803932905,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[-0.665,0.701],[-0.701,-0.665]],"o":[[-0.701,-0.665],[0.665,-0.701],[0,0]],"v":[[-76.396,23.886],[-76.461,21.412],[-73.987,21.347]],"c":false},"ix":2},"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0.475,0.475],"y":[0,0]},"n":["0_1_0p475_0","0_1_0p475_0"],"t":16,"s":[48,48],"e":[100,100]},{"t":60}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":16,"s":[-20],"e":[16]},{"t":56}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":16,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":17,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":42,"s":[100],"e":[0]},{"t":50}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":4,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.539,-1.357],[1.357,-0.539]],"o":[[1.357,-0.539],[0.539,1.357],[0,0]],"v":[[47.029,50.537],[50.464,52.018],[48.983,55.452]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.835294127464,0.309803932905,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0.647,-0.718],[0.718,0.647]],"o":[[0.718,0.647],[-0.647,0.718],[0,0]],"v":[[-42.262,-30.163],[-42.135,-27.691],[-44.606,-27.564]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[-0.271,10.361],"ix":2},"a":{"a":0,"k":[-0.271,10.361],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":17,"s":[48,48],"e":[121,121]},{"t":55}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":17,"s":[-65],"e":[-41]},{"t":57}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":18,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":19,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":42,"s":[100],"e":[0]},{"t":46}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":5,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-1.141,-3.423],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.141,3.423]],"o":[[-1.261,3.423],[0,0],[0,0],[0,0],[1.261,-3.423],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.06,0],[0,0]],"v":[[-54.16,-6.027],[-58.604,-1.643],[-58.604,-1.643],[-58.604,-1.643],[-54.22,2.741],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-49.835,-1.643],[-54.16,-6.027]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.964705884457,0.40000000596,0.219607844949,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.117,"y":0},"n":"0_1_0p117_0","t":20,"s":[-15.636,-1.957],"e":[-54.636,-1.957],"to":[-6.5,0],"ti":[6.5,0]},{"t":53}],"ix":2},"a":{"a":0,"k":[-54.636,-1.957],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":20,"s":[36,36],"e":[100,100]},{"t":27}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[177],"e":[0]},{"t":60}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":20,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":24,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[100],"e":[0]},{"t":50}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":6,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-1.213,-3.638],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.213,3.638]],"o":[[-1.34,3.638],[0,0],[0,0],[0,0],[1.34,-3.638],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.064,0],[0,0]],"v":[[29.244,-37.02],[24.521,-32.36],[24.521,-32.36],[24.521,-32.36],[29.18,-27.701],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[33.84,-32.36],[29.244,-37.02]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.792156875134,0.250980407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.182,"y":0},"n":"0_1_0p182_0","t":25,"s":[20.02,-14.024],"e":[29.02,-32.024],"to":[1.5,-3],"ti":[-1.5,3]},{"t":64}],"ix":2},"a":{"a":0,"k":[29.02,-32.024],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":25,"s":[-188],"e":[0]},{"t":64}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":25,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":62,"s":[100],"e":[0]},{"t":64}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":7,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-1.647,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.647,4.94]],"o":[[-1.82,4.94],[0,0],[0,0],[0,0],[1.82,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.087,0],[0,0]],"v":[[-61.399,42.313],[-67.812,48.639],[-67.812,48.639],[-67.812,48.639],[-61.486,54.966],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-55.16,48.639],[-61.399,42.313]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.992156863213,0.792156875134,0.250980407,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.16,"y":1},"o":{"x":0.064,"y":0},"n":"0p16_1_0p064_0","t":23,"s":[-5.173,18.703],"e":[-61.173,48.703],"to":[-9.33333301544189,5],"ti":[9.33333301544189,-5]},{"t":60}],"ix":2},"a":{"a":0,"k":[-61.173,48.703],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":23,"s":[58,58],"e":[100,100]},{"t":60}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":23,"s":[-114],"e":[59]},{"t":60}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":23,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":29,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":47,"s":[100],"e":[0]},{"t":52}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":8,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-1.647,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.647,4.94]],"o":[[-1.82,4.94],[0,0],[0,0],[0,0],[1.82,-4.94],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.087,0],[0,0]],"v":[[62.601,18.646],[56.188,24.973],[56.188,24.973],[56.188,24.973],[62.514,31.299],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[68.84,24.973],[62.601,18.646]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.964705884457,0.40000000596,0.219607844949,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.151,"y":0},"n":"0_1_0p151_0","t":31,"s":[24.235,24.584],"e":[37.235,48.584],"to":[2.16666674613953,4],"ti":[-2.16666674613953,-4]},{"t":66}],"ix":2},"a":{"a":0,"k":[62.235,24.584],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":31,"s":[267],"e":[0]},{"t":66}],"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":31,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":35,"s":[100],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":58,"s":[100],"e":[0]},{"t":63}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":9,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,147],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":9,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.167,-1.057],[1.057,0.167],[-0.167,1.057],[-1.057,-0.167]],"o":[[-0.167,1.057],[-1.057,-0.167],[0.167,-1.057],[1.057,0.167]],"v":[[50.085,-9.024],[47.868,-7.413],[46.257,-9.63],[48.474,-11.241]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.580392181873,0.858823537827,0.878431379795,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.734,0.668],[0,0]],"o":[[0,0],[0.915,-0.833],[0,0],[0,0]],"v":[[34.096,-8.981],[43.364,-5.068],[45.868,-7.347],[41.357,-9.251]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.580392181873,0.858823537827,0.878431379795,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.856,0.779],[0,0]],"o":[[0,0],[0.799,-0.726],[0,0],[0,0]],"v":[[30.837,-3.543],[38.247,-0.415],[40.752,-2.693],[29.202,-7.57]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.580392181873,0.858823537827,0.878431379795,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.667,-0.025],[0,0],[-0.159,-0.392],[0,0],[0,0],[0,0],[-0.314,0.285],[-3.08,2.806]],"o":[[0,0],[-0.423,0.016],[0,0],[0,0],[0,0],[0.16,0.393],[2.179,-1.981],[0.493,-0.45]],"v":[[46.283,-9.434],[29.579,-8.813],[29.037,-7.975],[30.965,-3.228],[31.508,-1.892],[33.436,2.852],[34.409,3.075],[46.794,-8.191]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":2,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.834,"y":0},"n":"0p667_1_0p834_0","t":9,"s":[22.625,5.39],"e":[37.625,-21.61],"to":[2.5,-4.5],"ti":[-7.33333349227905,4.66666650772095]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"n":"0p667_1_0p167_0","t":27,"s":[37.625,-21.61],"e":[66.625,-22.61],"to":[7.33333349227905,-4.66666650772095],"ti":[-4.83333349227905,0.16666667163372]},{"t":99}],"ix":2},"a":{"a":0,"k":[31.625,-2.61],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.834],"y":[0]},"n":["0p667_1_0p834_0"],"t":9,"s":[0],"e":[23]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p833_1_0p167_0"],"t":27,"s":[23],"e":[87]},{"t":102}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.676,-0.737],[-0.739,-0.322],[0,0],[0.728,1.73]],"o":[[0.239,0.904],[0.58,0.632],[0,0],[0.963,-1.623],[0,0]],"v":[[8.112,4.826],[9.456,7.333],[11.464,8.758],[18.942,6.333],[19.314,1.004]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.676,-0.737],[-0.739,-0.322],[0,0],[0.728,1.73]],"o":[[0.239,0.904],[0.58,0.632],[0,0],[0.963,-1.623],[0,0]],"v":[[-4.667,-9.098],[-3.324,-6.591],[-1.315,-5.167],[6.163,-7.592],[6.535,-12.921]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":30,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.424,-2.224],[2.224,2.424],[-2.424,2.224],[-2.224,-2.424]],"o":[[-2.424,2.224],[-2.224,-2.424],[2.424,-2.224],[2.224,2.424]],"v":[[5.104,-6.217],[-3.311,-6.578],[-2.95,-14.994],[5.465,-14.633]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[2.424,-2.224],[2.224,2.424],[-2.424,2.224],[-2.224,-2.424]],"o":[[-2.424,2.224],[-2.224,-2.424],[2.424,-2.224],[2.224,2.424]],"v":[[17.871,7.694],[9.456,7.333],[9.816,-1.083],[18.232,-0.722]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.258823543787,0.521568655968,0.956862747669,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.805],[0.805,0],[0,0.805],[-0.805,0]],"o":[[0,0.805],[-0.805,0],[0,-0.805],[0.805,0]],"v":[[2.131,-18.613],[0.673,-17.154],[-0.786,-18.613],[0.673,-20.071]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,-0.805],[0.805,0],[0,0.805],[-0.805,0]],"o":[[0,0.805],[-0.805,0],[0,-0.805],[0.805,0]],"v":[[23.39,3.886],[21.932,5.344],[20.474,3.886],[21.932,2.428]],"c":true},"ix":2},"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[9.547,-0.198],[4.316,-5.897],[6.344,-7.758],[11.575,-2.059]],"c":true},"ix":2},"hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[3.197,-2.934],[2.934,3.197],[-3.197,2.934],[-2.934,-3.197]],"o":[[-3.197,2.934],[-2.934,-3.197],[3.197,-2.934],[2.934,3.197]],"v":[[6.389,-4.817],[-4.711,-5.294],[-4.235,-16.394],[6.865,-15.917]],"c":true},"ix":2},"hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[3.197,-2.934],[2.934,3.197],[-3.197,2.934],[-2.934,-3.197]],"o":[[-3.197,2.934],[-2.934,-3.197],[3.197,-2.934],[2.934,3.197]],"v":[[19.156,9.094],[8.056,8.618],[8.532,-2.482],[19.632,-2.006]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.654901981354,0.149019613862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":6,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.524,"y":1},"o":{"x":0.235,"y":0},"n":"0p524_1_0p235_0","t":19,"s":[-2.597,2.691],"e":[4.403,-2.309],"to":[1.16666662693024,-0.83333331346512],"ti":[-1.16666662693024,0.83333331346512]},{"t":35}],"ix":2},"a":{"a":0,"k":[4.403,-2.309],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.524],"y":[1]},"o":{"x":[0.235],"y":[0]},"n":["0p524_1_0p235_0"],"t":19,"s":[-15],"e":[0]},{"t":35}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.1,-0.029],[-0.075,-0.627],[0,0],[-0.402,-0.639],[-0.639,0.402],[0.525,5.142],[0.726,-0.104]],"o":[[-0.598,0.174],[0.418,3.66],[-0.639,0.402],[0.402,0.639],[0.17,-0.158],[-0.104,-0.726],[-0.129,-0.071]],"v":[[23.835,10.665],[22.93,12.01],[20.679,17.637],[20.346,19.463],[22.172,19.795],[25.565,11.782],[24.163,10.678]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.882352948189,0.96862745285,0.976470589638,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[2.218,0.733],[-1.464,-1.762],[-0.9,-0.213],[0,0.427]],"o":[[-0.48,1.287],[0.865,1.04],[0.091,-0.399],[0,-2.464]],"v":[[-3.595,0.569],[-2.616,5.31],[0.082,7.092],[0.226,5.853]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.098039217293,0.46274510026,0.823529422283,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.326,-0.271],[-2.388,-2.873],[-1.23,0.912],[0.271,0.326]],"o":[[-0.271,-0.326],[-1.121,1.042],[2.388,2.873],[0.426,-0.277],[0,0]],"v":[[-1.227,-1.254],[-2.369,-1.299],[-2.616,5.31],[3.927,6.276],[4.2,5.276]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.258823543787,0.521568655968,0.956862747669,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.524,"y":1},"o":{"x":0.235,"y":0},"n":"0p524_1_0p235_0","t":19,"s":[-5.545,8.719],"e":[-0.545,2.719],"to":[0.83333331346512,-1],"ti":[-0.83333331346512,1]},{"t":35}],"ix":2},"a":{"a":0,"k":[-0.545,2.719],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.524],"y":[1]},"o":{"x":[0.235],"y":[0]},"n":["0p524_1_0p235_0"],"t":19,"s":[-21],"e":[0]},{"t":35}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":3,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-2.273,-0.065],[-0.785,1.357],[2.175,0.883],[0,0]],"o":[[0,0],[3.45,0.621],[1.864,0.016],[0.883,-2.175],[0,0],[0,0]],"v":[[22.694,16.282],[19.382,28.627],[34.588,31.056],[38.61,28.636],[36.567,23.208],[22.694,16.282]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[22.812,22.976],"ix":2},"a":{"a":0,"k":[22.812,22.976],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":46,"s":[0],"e":[40]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":53,"s":[40],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":61,"s":[0],"e":[40]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":68,"s":[40],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":76,"s":[0],"e":[40]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":83,"s":[40],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":91,"s":[0],"e":[40]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":98,"s":[40],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":104,"s":[0],"e":[40]},{"t":111}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[2.346,0.055],[0.726,-1.717],[0.802,-3.412]],"o":[[0,0],[0.055,-2.346],[-1.557,0.18],[-0.844,2.111],[0,0]],"v":[[-7.303,-6.634],[-7.982,-21.533],[-12.149,-25.567],[-15.969,-22.84],[-19.023,-4.768]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[-11.923,-7.349],"ix":2},"a":{"a":0,"k":[-11.923,-7.349],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[-17.51,-5.965],"ix":2},"a":{"a":0,"k":[-12.51,-5.965],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":46,"s":[0],"e":[-57]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":53,"s":[-57],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":61,"s":[0],"e":[-57]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":68,"s":[-57],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":76,"s":[0],"e":[-57]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":83,"s":[-57],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":91,"s":[0],"e":[-57]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":98,"s":[-57],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":104,"s":[0],"e":[-57]},{"t":111}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.109,-4.939],[0.544,-0.719],[6.406,-2.58],[4.308,1.885],[1.857,-0.603],[1.021,1.037],[-1.659,1.634],[0,0],[1.838,1.867],[1.223,1.656],[0,0],[1.43,1.452],[-0.628,1.436],[-1.668,2.869],[0.119,2.321],[-0.797,2.137],[-8.234,3.256],[-7.762,-7.881],[-0.497,-6.728]],"o":[[-0.485,0.77],[-4.172,5.508],[-3.452,1.39],[-3.102,1.829],[-1.445,0.607],[-1.223,-1.656],[0,0],[-1.842,-1.455],[-1.43,-1.452],[0,0],[-1.659,1.634],[-1.021,-1.037],[0.632,-1.848],[-0.978,-2.085],[-0.118,-2.299],[3.121,-8.365],[9.704,-3.838],[4.742,4.815],[0.429,5.812]],"v":[[22.85,28.094],[21.305,30.328],[5.022,42.771],[-5.471,42.074],[-13.531,46.335],[-17.642,45.481],[-17.186,39.721],[-14.076,36.657],[-19.802,31.673],[-23.68,27.321],[-26.583,30.181],[-32.35,30.549],[-33.142,26.426],[-29.173,18.84],[-31.098,12.136],[-29.819,5.419],[-10.814,-13.545],[19.188,-6.731],[27.337,11.43]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":4,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.034,"y":0.874},"o":{"x":0.267,"y":0},"n":"0p034_0p874_0p267_0","t":3,"s":[-3.158,282.637],"e":[-3.158,148.416],"to":[0,-24.6100254058838],"ti":[0,27.8037662506104]},{"i":{"x":0.639,"y":1},"o":{"x":0.306,"y":0.655},"n":"0p639_1_0p306_0p655","t":40,"s":[-3.158,148.416],"e":[-3.158,146.637],"to":[0,-0.62887918949127],"ti":[0,0.55664157867432]},{"i":{"x":0,"y":0},"o":{"x":0.167,"y":0.167},"n":"0_0_0p167_0p167","t":48,"s":[-3.158,146.637],"e":[-3.158,146.637],"to":[0,0],"ti":[0,0]},{"i":{"x":0.637,"y":1},"o":{"x":0.947,"y":0},"n":"0p637_1_0p947_0","t":77,"s":[-3.158,146.637],"e":[-3.158,297.637],"to":[0,25.1666660308838],"ti":[0,-25.1666660308838]},{"t":118}],"ix":2},"a":{"a":0,"k":[-3.899,12.125],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0],"y":[0.753]},"o":{"x":[0.73],"y":[0.002]},"n":["0_0p753_0p73_0p002"],"t":3,"s":[-83],"e":[0]},{"i":{"x":[0.542],"y":[0.966]},"o":{"x":[0.244],"y":[0.632]},"n":["0p542_0p966_0p244_0p632"],"t":40,"s":[0],"e":[11]},{"t":92}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.169,0.366],[-0.366,-1.169],[1.169,-0.366],[0.366,1.169]],"o":[[1.169,-0.366],[0.366,1.169],[-1.169,0.366],[-0.366,-1.169]],"v":[[74.105,66.32],[76.887,67.774],[75.432,70.555],[72.651,69.101]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-1.169,0.366],[-0.366,-1.169],[1.169,-0.366],[0.366,1.169]],"o":[[1.169,-0.366],[0.366,1.169],[-1.169,0.366],[-0.366,-1.169]],"v":[[84.615,63.027],[87.396,64.481],[85.942,67.262],[83.161,65.808]],"c":true},"ix":2},"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0.392,-0.123],[-0.123,-0.392],[2.821,-0.928],[0.097,0.311],[0.392,-0.123],[-0.123,-0.392],[-3.451,1.081],[-0.003,0.001],[-0.004,0.001],[0.364,1.436]],"o":[[-0.392,0.123],[0.097,0.311],[-2.846,0.848],[-0.123,-0.392],[-0.392,0.123],[0.521,1.387],[0.004,-0.001],[0.003,-0.001],[3.451,-1.081],[-0.123,-0.392]],"v":[[85.032,68.824],[84.469,69.776],[82.259,73.479],[78.331,71.699],[77.326,71.239],[76.866,72.244],[82.692,74.897],[82.702,74.893],[82.713,74.891],[85.984,69.387]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.141176477075,0.75686275959,0.878431379795,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":6,"s":[81.563,66.65],"e":[80.563,69.65],"to":[-0.16666667163372,0.5],"ti":[0.16666667163372,-0.5]},{"t":26}],"ix":2},"a":{"a":0,"k":[80.563,69.65],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":6,"s":[100,80.2],"e":[100,100]},{"t":26}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":6,"s":[7],"e":[0]},{"t":26}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.333,"y":0},"n":"0_1_0p333_0","t":12,"s":[85.184,83.972],"e":[80.184,68.972],"to":[-0.83333331346512,-2.5],"ti":[0.83333331346512,2.5]},{"t":26}],"ix":2},"a":{"a":0,"k":[80.184,68.972],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":21,"s":[100,88],"e":[100,100]},{"t":30}],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0_1_0p333_0"],"t":12,"s":[10],"e":[0]},{"t":26}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.115,1.767],[1.109,0.51],[0.526,-1.75],[0,0]],"o":[[0.23,-2.72],[-0.123,-1.446],[-1.75,-0.526],[0,0],[0,0]],"v":[[106.043,74.431],[106.817,62.464],[104.647,59.522],[100.588,61.502],[96.767,71.274]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":9,"s":[93.639,67.126],"e":[100.639,72.126],"to":[1.16666662693024,0.83333331346512],"ti":[-1.16666662693024,-0.83333331346512]},{"t":28}],"ix":2},"a":{"a":0,"k":[100.639,72.126],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":9,"s":[-38],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[0],"e":[41]},{"t":107}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0.244,1.754],[-0.984,0.723],[-0.869,-1.608],[0,0]],"o":[[-0.775,-2.618],[-0.171,-1.441],[1.608,-0.869],[0,0],[0,0]],"v":[[64.19,83.193],[59.28,69.792],[60.811,66.472],[65.187,67.592],[71.397,77.407]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":9,"s":[70.639,72.375],"e":[67.639,78.375],"to":[-0.5,1],"ti":[0.5,-1]},{"t":28}],"ix":2},"a":{"a":0,"k":[67.639,78.375],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":9,"s":[28],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[0],"e":[-59]},{"t":107}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.819,-4.165],[-0.224,-0.665],[1.144,-5.255],[3.101,-1.948],[0.425,-1.46],[1.115,-0.203],[0.326,1.784],[0,0],[2.007,-0.366],[1.602,-0.062],[0,0],[1.561,-0.285],[0.649,1.034],[1.117,2.331],[1.546,0.94],[1.027,1.449],[-1.51,6.728],[-8.475,1.546],[-4.55,-2.627]],"o":[[0.283,0.649],[1.719,5.099],[-0.617,2.831],[-0.181,2.798],[-0.243,1.196],[-1.602,0.062],[0,0],[-1.743,0.549],[-1.561,0.285],[0,0],[0.326,1.784],[-1.115,0.203],[-0.913,-1.216],[-1.771,-0.284],[-1.532,-0.931],[-4.019,-5.673],[1.779,-7.929],[5.178,-0.945],[3.93,2.269]],"v":[[106.04,74.527],[106.803,76.501],[107.682,92.436],[102.637,98.887],[101.851,105.943],[99.5,108.216],[95.991,105.4],[95.38,102.054],[89.663,103.558],[85.162,104.149],[85.732,107.271],[83.443,111.146],[80.442,109.85],[77.295,103.972],[72.135,102.275],[68.371,98.509],[64.484,77.965],[82.013,61.632],[97.276,64.339]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[88.364,96.845],"ix":2},"a":{"a":0,"k":[88.364,96.845],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0_1_0p333_0"],"t":12,"s":[10],"e":[0]},{"t":26}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":2,"hd":false},{"ty":"tr","p":{"a":0,"k":[88.398,97.139],"ix":2},"a":{"a":0,"k":[88.398,97.139],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.497],"y":[0]},"n":["0p507_1_0p497_0"],"t":9,"s":[15],"e":[0]},{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p507_1_0p167_0"],"t":24,"s":[0],"e":[0]},{"i":{"x":[0.503],"y":[1]},"o":{"x":[0.493],"y":[0]},"n":["0p503_1_0p493_0"],"t":92,"s":[0],"e":[15]},{"t":107}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.331,0.051],[0.118,-0.32],[2.513,0.391],[-0.041,0.265],[0.331,0.051],[0.051,-0.331],[-2.91,-0.453],[-0.251,1.18]],"o":[[-0.331,-0.051],[-0.01,0.066],[-2.447,-0.381],[0.051,-0.331],[-0.331,-0.051],[-0.119,1.201],[2.91,0.453],[0.184,-0.31]],"v":[[-71.518,70.243],[-72.272,70.736],[-75.277,72.638],[-77.562,69.912],[-78.131,69.214],[-78.829,69.782],[-75.529,73.818],[-71.158,70.977]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.042,0.236],[1.129,0.176],[0.535,-1.01],[-0.109,-0.217],[-0.242,-0.038],[-0.154,0.284],[-0.488,-0.076],[-0.092,-0.486],[-0.314,-0.049],[-0.172,0.176]],"o":[[-0.202,-1.125],[-1.129,-0.176],[-0.112,0.212],[0.11,0.22],[0.314,0.049],[0.236,-0.435],[0.488,0.076],[0.061,0.317],[0.242,0.038],[0.17,-0.174]],"v":[[-66.409,67.692],[-68.634,65.517],[-71.415,66.912],[-71.42,67.588],[-70.858,67.999],[-70.076,67.607],[-68.866,67.007],[-67.896,67.946],[-67.271,68.558],[-66.609,68.337]],"c":true},"ix":2},"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[1.129,0.176],[0.535,-1.01],[-0.109,-0.217],[-0.242,-0.038],[-0.154,0.284],[-0.488,-0.076],[-0.092,-0.486],[-0.314,-0.049],[-0.171,0.176],[0.042,0.236]],"o":[[-1.129,-0.176],[-0.112,0.212],[0.11,0.22],[0.314,0.049],[0.236,-0.435],[0.488,0.076],[0.061,0.317],[0.242,0.038],[0.17,-0.174],[-0.202,-1.125]],"v":[[-80.105,63.731],[-82.887,65.126],[-82.892,65.802],[-82.329,66.213],[-81.547,65.821],[-80.337,65.221],[-79.368,66.16],[-78.742,66.772],[-78.081,66.551],[-77.88,65.905]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.258823543787,0.521568655968,0.956862747669,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":8,"s":[-75.218,72.983],"e":[-75.218,66.983],"to":[0,-1],"ti":[0,1]},{"t":34}],"ix":2},"a":{"a":0,"k":[-75.218,67.983],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":8,"s":[100,100],"e":[100,75]},{"t":34}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.296,1.746],[0.962,0.752],[0.916,-1.581],[0,0]],"o":[[0.852,-2.593],[0.214,-1.436],[-1.581,-0.916],[0,0],[0,0]],"v":[[-55.197,79.471],[-51.678,68.007],[-53.109,64.643],[-57.517,65.632],[-63.492,74.256]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":9,"s":[-65.965,71.185],"e":[-60.965,77.185],"to":[0.83333331346512,1],"ti":[-0.83333331346512,-1]},{"t":28}],"ix":2},"a":{"a":0,"k":[-60.965,77.185],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":9,"s":[-32],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p833_1_0p333_0"],"t":28,"s":[0],"e":[43]},{"t":92}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.168,1.763],[-1.124,0.476],[-0.473,-1.765],[0,0]],"o":[[-0.149,-2.726],[0.166,-1.442],[1.765,-0.473],[0,0],[0,0]],"v":[[-97.941,78.324],[-99.622,64.151],[-97.365,61.275],[-93.367,63.376],[-89.592,74.36]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":9,"s":[-87.601,67.404],"e":[-94.601,75.404],"to":[-1.16666662693024,1.33333337306976],"ti":[1.16666662693024,-1.33333337306976]},{"t":28}],"ix":2},"a":{"a":0,"k":[-94.601,75.404],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":9,"s":[33],"e":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p833_1_0p333_0"],"t":28,"s":[0],"e":[-43]},{"t":92}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.807,-4.473],[-0.064,-0.699],[2.328,-4.848],[3.467,-1.179],[0.751,-1.322],[1.132,0.06],[-0.096,1.811],[0,0],[2.037,0.108],[1.573,0.31],[0,0],[1.585,0.084],[0.393,1.156],[0.548,2.526],[1.287,1.272],[0.664,1.647],[-3.024,6.197],[-8.602,-0.454],[-3.82,-3.607]],"o":[[0.126,0.697],[0.494,5.358],[-1.255,2.612],[-0.822,2.681],[-0.512,1.108],[-1.573,-0.31],[0,0],[-1.823,0.131],[-1.585,-0.084],[0,0],[-0.096,1.811],[-1.132,-0.06],[-0.607,-1.394],[-1.657,-0.685],[-1.275,-1.26],[-2.599,-6.449],[3.564,-7.303],[5.256,0.277],[3.3,3.116]],"v":[[-55.222,79.564],[-54.936,81.661],[-57.763,97.367],[-64.162,102.478],[-66.558,109.162],[-69.37,110.829],[-72.134,107.278],[-71.955,103.883],[-77.864,104.025],[-82.38,103.56],[-82.547,106.729],[-85.669,109.969],[-88.29,108.015],[-89.993,101.569],[-94.621,98.726],[-97.414,94.192],[-96.447,73.306],[-75.619,61.465],[-61.394,67.627]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":2,"hd":false},{"ty":"tr","p":{"a":0,"k":[-78.172,97.588],"ix":2},"a":{"a":0,"k":[-78.172,97.588],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.497],"y":[0]},"n":["0p507_1_0p497_0"],"t":9,"s":[-16],"e":[0]},{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p507_1_0p167_0"],"t":24,"s":[0],"e":[0]},{"i":{"x":[0.503],"y":[1]},"o":{"x":[0.493],"y":[0]},"n":["0p503_1_0p493_0"],"t":92,"s":[0],"e":[-16]},{"t":107}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.222,-0.097],[0.097,-1.222],[1.222,0.097],[-0.097,1.222]],"o":[[1.222,0.097],[-0.097,1.222],[-1.222,-0.097],[0.097,-1.222]],"v":[[27.89,68.796],[29.927,71.183],[27.54,73.22],[25.503,70.833]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-1.222,-0.097],[0.097,-1.222],[1.222,0.097],[-0.097,1.222]],"o":[[1.222,0.097],[-0.097,1.222],[-1.222,-0.097],[0.097,-1.222]],"v":[[38.869,69.666],[40.906,72.053],[38.519,74.09],[36.482,71.703]],"c":true},"ix":2},"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0.021,-0.403],[-3.548,-0.187],[-0.157,1.447],[0.403,0.021]],"o":[[-0.403,-0.021],[0.004,1.456],[3.548,0.187],[0.081,-0.477],[0,0]],"v":[[29.185,74.537],[28.417,75.305],[32.872,79.745],[37.77,75.799],[37.248,74.963]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.258823543787,0.521568655968,0.956862747669,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":0.828},"o":{"x":0.333,"y":0},"n":"0p667_0p828_0p333_0","t":8,"s":[32.73,77.934],"e":[32.73,70.146],"to":[0,-0.4550960958004],"ti":[0,1.13193333148956]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0.368},"n":"0p667_1_0p333_0p368","t":22,"s":[32.73,70.146],"e":[32.73,72.934],"to":[0,-0.94076693058014],"ti":[0,0.37823724746704]},{"t":34}],"ix":2},"a":{"a":0,"k":[32.73,72.934],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"n":["0p667_1_0p333_0","0p667_1_0p333_0"],"t":8,"s":[100,69],"e":[100,100]},{"t":34}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.204,1.759],[1,0.7],[0.832,-1.628],[0,0]],"o":[[0.715,-2.635],[0.138,-1.445],[-1.628,-0.832],[0,0],[0,0]],"v":[[54.701,82.083],[57.611,70.45],[56.005,67.166],[51.655,68.386],[46.142,77.313]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":9,"s":[42.455,75.337],"e":[49.455,80.337],"to":[1.16666662693024,0.83333331346512],"ti":[-1.16666662693024,-0.83333331346512]},{"t":28}],"ix":2},"a":{"a":0,"k":[49.455,80.337],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":9,"s":[-42],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[0],"e":[32]},{"t":106}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.075,1.769],[-1.097,0.535],[-0.566,-1.738],[0,0]],"o":[[-0.292,-2.714],[0.09,-1.449],[1.738,-0.566],[0,0],[0,0]],"v":[[11.956,83.19],[9.531,69.125],[11.632,66.134],[15.736,68.022],[20.084,78.792]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":9,"s":[22.735,71.871],"e":[15.735,80.871],"to":[-1.16666662693024,1.5],"ti":[1.16666662693024,-1.5]},{"t":28}],"ix":2},"a":{"a":0,"k":[15.735,80.871],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":9,"s":[30],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[0],"e":[-31]},{"t":106}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.041,-4.424],[-0.101,-0.695],[2.069,-4.964],[3.4,-1.36],[0.68,-1.36],[1.133,0],[0,1.814],[0,0],[2.04,0],[1.587,0.227],[0,0],[1.587,0],[0.453,1.133],[0.68,2.494],[1.353,1.202],[0.75,1.61],[-2.693,6.348],[-8.614,0],[-4.004,-3.401]],"o":[[0.162,0.69],[0.776,5.325],[-1.115,2.674],[-0.68,2.72],[-0.453,1.133],[-1.587,-0.227],[0,0],[-1.814,0.227],[-1.587,0],[0,0],[0,1.814],[-1.133,0],[-0.68,-1.36],[-1.691,-0.597],[-1.34,-1.191],[-2.935,-6.303],[3.174,-7.481],[5.263,0],[3.459,2.938]],"v":[[54.681,82.178],[55.077,84.256],[53.081,100.09],[46.961,105.531],[44.92,112.331],[42.2,114.145],[39.253,110.745],[39.253,107.344],[33.359,107.798],[28.825,107.571],[28.825,110.745],[25.878,114.145],[23.158,112.331],[21.117,105.984],[16.346,103.388],[13.319,99.008],[13.183,78.1],[33.359,65.179],[47.888,70.582]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.819607853889,0.886274516582,0.992156863213,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":2,"hd":false},{"ty":"tr","p":{"a":0,"k":[32.355,102.023],"ix":2},"a":{"a":0,"k":[32.355,102.023],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.497],"y":[0]},"n":["0p507_1_0p497_0"],"t":9,"s":[-9],"e":[0]},{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p507_1_0p167_0"],"t":24,"s":[0],"e":[0]},{"i":{"x":[0.503],"y":[1]},"o":{"x":[0.493],"y":[0]},"n":["0p503_1_0p493_0"],"t":92,"s":[0],"e":[-9]},{"t":107}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":3,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-1.217,-0.143],[0.143,-1.217],[1.217,0.143],[-0.143,1.217]],"o":[[1.217,0.143],[-0.143,1.217],[-1.217,-0.143],[0.143,-1.217]],"v":[[-27.281,64.08],[-25.335,66.542],[-27.797,68.488],[-29.743,66.026]],"c":true},"ix":2},"hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-1.217,-0.143],[0.143,-1.217],[1.217,0.143],[-0.143,1.217]],"o":[[1.217,0.143],[-0.143,1.217],[-1.217,-0.143],[0.143,-1.217]],"v":[[-16.342,65.361],[-14.396,67.823],[-16.859,69.769],[-18.804,67.307]],"c":true},"ix":2},"hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0.408,0.048],[0.048,-0.408],[2.954,0.304],[-0.038,0.324],[0.408,0.048],[0.048,-0.408],[-3.592,-0.421],[-0.004,0],[-0.004,0],[-0.254,1.46]],"o":[[-0.408,-0.048],[-0.038,0.324],[-2.945,-0.387],[0.048,-0.408],[-0.408,-0.048],[-0.091,1.479],[0.004,0],[0.003,0.001],[3.592,0.421],[0.048,-0.408]],"v":[[-18.286,71.753],[-19.188,72.392],[-22.717,74.871],[-25.577,71.644],[-26.307,70.814],[-27.137,71.544],[-22.9,76.343],[-22.889,76.344],[-22.879,76.346],[-17.647,72.655]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.141176477075,0.75686275959,0.878431379795,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.557,"y":0},"n":"0_1_0p557_0","t":13,"s":[-23.301,78.72],"e":[-23.301,66.72],"to":[0,-2],"ti":[0,2]},{"t":35}],"ix":2},"a":{"a":0,"k":[-23.301,68.72],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0],"y":[1,1]},"o":{"x":[0.557,0.628],"y":[0,0]},"n":["0_1_0p557_0","0_1_0p628_0"],"t":13,"s":[100,100],"e":[100,73]},{"t":35}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.348,1.736],[0.939,0.78],[0.963,-1.553],[0,0]],"o":[[0.929,-2.567],[0.257,-1.429],[-1.553,-0.963],[0,0],[0,0]],"v":[[-1.705,77.16],[2.154,65.806],[0.823,62.401],[-3.611,63.258],[-9.841,71.701]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":13,"s":[-10.458,73.808],"e":[-6.458,73.808],"to":[0.66666668653488,0],"ti":[-0.66666668653488,0]},{"t":28}],"ix":2},"a":{"a":0,"k":[-6.458,73.808],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":13,"s":[-37],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[0],"e":[50]},{"t":86}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.22,1.757],[-1.138,0.442],[-0.421,-1.779],[0,0]],"o":[[-0.068,-2.729],[0.209,-1.436],[1.779,-0.421],[0,0],[0,0]],"v":[[-42.063,75.075],[-43.32,60.858],[-40.979,58.05],[-37.045,60.269],[-33.6,71.361]],"c":false},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":13,"s":[-33.539,69.767],"e":[-38.539,69.767],"to":[-0.83333331346512,0],"ti":[1.33333337306976,-0.33333334326744]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":28,"s":[-38.539,69.767],"e":[-41.539,71.767],"to":[-1.33333337306976,0.33333334326744],"ti":[0.5,-0.33333334326744]},{"t":86}],"ix":2},"a":{"a":0,"k":[-38.539,69.767],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":13,"s":[41],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":28,"s":[0],"e":[-42]},{"t":86}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":2,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.673,-4.495],[-0.044,-0.701],[2.471,-4.777],[3.501,-1.075],[0.79,-1.299],[1.13,0.093],[-0.149,1.807],[0,0],[2.033,0.168],[1.563,0.357],[0,0],[1.581,0.131],[0.358,1.167],[0.472,2.541],[1.249,1.309],[0.615,1.666],[-3.207,6.105],[-8.585,-0.71],[-3.71,-3.719]],"o":[[0.105,0.701],[0.334,5.371],[-1.332,2.573],[-0.902,2.655],[-0.545,1.092],[-1.563,-0.357],[0,0],[-1.826,0.076],[-1.581,-0.131],[0,0],[-0.149,1.807],[-1.13,-0.093],[-0.566,-1.412],[-1.636,-0.734],[-1.237,-1.297],[-2.406,-6.523],[3.779,-7.194],[5.245,0.434],[3.205,3.213]],"v":[[-0.899,80.086],[-0.676,82.19],[-3.969,97.806],[-10.518,102.723],[-13.111,109.333],[-15.972,110.916],[-18.629,107.285],[-18.349,103.896],[-24.26,103.862],[-28.76,103.262],[-29.021,106.425],[-32.239,109.571],[-34.8,107.54],[-36.311,101.046],[-40.852,98.066],[-43.508,93.451],[-41.92,72.603],[-20.748,61.388],[-6.713,67.97]],"c":true},"ix":2},"hd":false},{"ty":"fl","c":{"a":0,"k":[0.796078443527,0.941176474094,0.972549021244,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":3,"hd":false},{"ty":"tr","p":{"a":0,"k":[-24.009,98.593],"ix":2},"a":{"a":0,"k":[-24.009,98.593],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":3,"cix":2,"ix":1,"hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":1,"cix":2,"ix":2,"hd":false},{"ty":"tr","p":{"a":0,"k":[-25.943,97.102],"ix":2},"a":{"a":0,"k":[-25.943,97.102],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.497],"y":[0]},"n":["0p507_1_0p497_0"],"t":9,"s":[2],"e":[0]},{"i":{"x":[0.507],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p507_1_0p167_0"],"t":24,"s":[0],"e":[0]},{"i":{"x":[0.503],"y":[1]},"o":{"x":[0.493],"y":[0]},"n":["0p503_1_0p493_0"],"t":92,"s":[0],"e":[2]},{"t":107}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":2,"cix":2,"ix":4,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.048,"y":1},"o":{"x":0.333,"y":0},"n":"0p048_1_0p333_0","t":0,"s":[0,182],"e":[0,145.557],"to":[0,-3.17620086669922],"ti":[0,7.90277862548828]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"n":"0p833_0p833_0p333_0","t":11.555,"s":[0,145.557],"e":[0,147],"to":[0,-6.61127233505249],"ti":[0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.167,"y":0.167},"n":"0p667_0p667_0p167_0p167","t":21,"s":[0,147],"e":[0,147],"to":[0,0],"ti":[0,0]},{"i":{"x":0.631,"y":1},"o":{"x":0.333,"y":0},"n":"0p631_1_0p333_0","t":87,"s":[0,147],"e":[0,145.557],"to":[0,0],"ti":[0,-6.61127233505249]},{"i":{"x":0.667,"y":1},"o":{"x":0.952,"y":0},"n":"0p667_1_0p952_0","t":97,"s":[0,145.557],"e":[0,182],"to":[0,7.90277862548828],"ti":[0,-3.17620086669922]},{"t":108}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5}}],"np":4,"cix":2,"ix":3,"hd":false}],"ip":-17,"op":120,"st":0,"bm":0}],"markers":[{"tm":8,"cm":"0","dr":0},{"tm":9,"cm":"2","dr":0},{"tm":28,"cm":"3","dr":0},{"tm":34,"cm":"1","dr":0}]}'
      );
    },
    1310: function(a) {
      a.exports = JSON.parse(
        '{"v":"5.1.5","fr":29.9700012207031,"ip":0,"op":42.0000017106951,"w":32,"h":32,"nm":"System-states-Sin conexi\xf3n","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":3,"ty":4,"nm":"! contornos","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[16,16,0],"ix":2},"a":{"a":0,"k":[8.25,8.25,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.847,0.847,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"n":["0p847_1_1_0","0p847_1_1_0","0p667_1_0p333_0"],"t":0,"s":[100,100,100],"e":[130,130,100]},{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.127,0.127,0.333],"y":[0,0,0]},"n":["0_1_0p127_0","0_1_0p127_0","0p667_1_0p333_0"],"t":21,"s":[130,130,100],"e":[100,100,100]},{"t":42.0000017106951}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.442,0],[0,-0.443],[-0.442,0],[0,0.441]],"o":[[-0.442,0],[0,0.441],[0.442,0],[0,-0.443]],"v":[[0,-0.8],[-0.8,0],[0,0.8],[0.8,0]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9607843137254902,0.5019607843137255,0.24313725490196078,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,12.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.221,0],[0,0.221],[0,0],[0.221,0],[0,-0.221],[0,0]],"o":[[0.221,0],[0,0],[0,-0.221],[-0.221,0],[0,0],[0,0.221]],"v":[[0,2.544],[0.4,2.144],[0.4,-2.144],[0,-2.544],[-0.4,-2.144],[-0.4,2.144]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9607843137254902,0.5019607843137255,0.24313725490196078,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,7.194],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-4.416],[-4.416,0],[0,4.416],[4.416,0]],"o":[[0,4.416],[4.416,0],[0,-4.416],[-4.416,0]],"v":[[-8,0],[0,8],[8,0],[0,-8]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.8901960784313725,0.8235294117647058,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3597.00014650881,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Sombra contornos","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":8.4,"s":[100],"e":[0]},{"t":23.8000009693939}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[16,16,0],"ix":2},"a":{"a":0,"k":[8.25,8.25,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.847,0.847,0.667],"y":[1,1,1]},"o":{"x":[1,1,0.333],"y":[0,0,0]},"n":["0p847_1_1_0","0p847_1_1_0","0p667_1_0p333_0"],"t":0,"s":[100,100,100],"e":[180,180,100]},{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.127,0.127,0.333],"y":[0,0,0]},"n":["0_1_0p127_0","0_1_0p127_0","0p667_1_0p333_0"],"t":21,"s":[180,180,100],"e":[100,100,100]},{"t":42.0000017106951}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-4.416],[-4.416,0],[0,4.416],[4.416,0]],"o":[[0,4.416],[4.416,0],[0,-4.416],[-4.416,0]],"v":[[-8,0],[0,8],[8,0],[0,-8]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.996078431372549,0.9411764705882353,0.9098039215686274,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[8.25,8.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 3","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":3597.00014650881,"st":0,"bm":0}],"markers":[]}'
      );
    },
    2142: function(a, e, i) {
      'use strict';
      i.r(e);
      var t = i(0),
        s = i.n(t),
        r = i(485),
        x = i(385),
        n = i(18),
        o = i(75),
        l = i(943),
        k = i(952),
        p = i(471),
        c = i(955),
        y = i(956),
        d = i(957),
        m = i(940),
        h = i(484),
        u = i(4),
        f = i.n(u),
        _ = i(19),
        g = i(1106),
        A = i(42),
        E = i(953),
        v = i(1002),
        b = i(990),
        C = function(a) {
          var e = a.error,
            i = a.className,
            t = Object(A.a)(a, ['error', 'className']);
          return e
            ? s.a.createElement('span', Object.assign({ className: f()('text-danger d-inline-block', i) }, t), e)
            : null;
        };
      C.defaultProps = { error: '' };
      var w = C,
        B = i(24),
        N = i(972),
        G = i.n(N),
        S = function(a) {
          var e,
            i,
            r,
            x,
            n,
            o = a.label,
            l = a.id,
            k = a.name,
            p = a.errors,
            c = a.tag,
            y = void 0 === c ? E.a : c,
            d = a.type,
            m = void 0 === d ? 'text' : d,
            h = a.options,
            u = void 0 === h ? [] : h,
            _ = a.placeholder,
            g = a.className,
            C = a.customType,
            N = Object(A.a)(a, [
              'label',
              'id',
              'name',
              'errors',
              'tag',
              'type',
              'options',
              'placeholder',
              'className',
              'customType'
            ]),
            S = Object(t.useContext)(B.a),
            I = S.user,
            Q = S.handleInputChange;
          return 'datetime' === C
            ? s.a.createElement(
                v.a,
                null,
                !!o && s.a.createElement(b.a, null, o),
                s.a.createElement(
                  G.a,
                  Object.assign(
                    {
                      id: l,
                      dateFormat: 'DD/MM/YYYY',
                      timeFormat: !1,
                      defaultValue: I[k],
                      onChange: function(a) {
                        return Q({ name: k, value: a });
                      },
                      inputProps: { name: k, placeholder: _ }
                    },
                    N
                  )
                )
              )
            : 'checkbox' === m || 'switch' === m || 'radio' === m
            ? s.a.createElement(
                v.a,
                null,
                s.a.createElement(
                  y,
                  Object.assign(
                    {
                      name: k,
                      id: l,
                      type: m,
                      className: g,
                      label: s.a.createElement(
                        t.Fragment,
                        null,
                        o,
                        s.a.createElement(w, {
                          error: null === (r = p[k]) || void 0 === r ? void 0 : r.message,
                          className: 'fs--1 font-weight-normal d-block'
                        })
                      )
                    },
                    N
                  )
                )
              )
            : 'select' === m
            ? s.a.createElement(
                v.a,
                null,
                !!o && s.a.createElement(b.a, { for: l }, o),
                s.a.createElement(
                  y,
                  Object.assign(
                    {
                      name: k,
                      id: l,
                      defaultValue: I[k],
                      type: m,
                      label: o,
                      className: f()(g, { 'border-danger': null === (x = p[k]) || void 0 === x ? void 0 : x.message })
                    },
                    N
                  ),
                  s.a.createElement('option', { value: '' }, _),
                  u.map(function(a, e) {
                    return s.a.createElement('option', { value: a, key: e }, a);
                  })
                ),
                s.a.createElement(w, {
                  error: null === (n = p[k]) || void 0 === n ? void 0 : n.message,
                  className: 'mt-1'
                })
              )
            : s.a.createElement(
                v.a,
                null,
                !!o && s.a.createElement(b.a, { for: l }, o),
                s.a.createElement(
                  y,
                  Object.assign(
                    {
                      name: k,
                      id: l,
                      defaultValue: I[k],
                      type: m,
                      placeholder: _,
                      className: f()(g, { 'border-danger': null === (e = p[k]) || void 0 === e ? void 0 : e.message })
                    },
                    N
                  )
                ),
                s.a.createElement(w, {
                  error: null === (i = p[k]) || void 0 === i ? void 0 : i.message,
                  className: 'mt-1'
                })
              );
        };
      S.defaultProps = { required: !1 };
      var I = S,
        Q = i(941),
        D = function(a) {
          var e = a.register,
            i = a.errors,
            n = a.watch;
          return s.a.createElement(
            t.Fragment,
            null,
            s.a.createElement(I, {
              label: 'Name*',
              placeholder: 'Name',
              name: 'name',
              id: 'name',
              innerRef: e({ required: 'Name is required', minLength: { value: 2, message: 'Min length 2' } }),
              errors: i
            }),
            s.a.createElement(I, {
              label: 'Email*',
              placeholder: 'Email',
              id: 'email',
              name: 'email',
              innerRef: e({
                required: 'Email is required',
                pattern: {
                  value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
                  message: 'Email must be valid'
                }
              }),
              errors: i
            }),
            s.a.createElement(
              r.a,
              { form: !0 },
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  type: 'password',
                  label: 'Password*',
                  placeholder: 'Password',
                  id: 'password',
                  name: 'password',
                  innerRef: e({
                    required: 'You must specify a password',
                    minLength: { value: 2, message: 'Password must have at least 2 characters' }
                  }),
                  errors: i
                })
              ),
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  type: 'password',
                  label: 'Confirm Password*',
                  placeholder: 'Confirm Password',
                  id: 'confirmPassword',
                  name: 'confirmPassword',
                  innerRef: e({
                    validate: function(a) {
                      return a === n('password') || 'The password do not match';
                    }
                  }),
                  errors: i
                })
              )
            ),
            s.a.createElement(I, {
              type: 'checkbox',
              id: 'agreeToTerms',
              tag: Q.a,
              label: s.a.createElement(
                t.Fragment,
                null,
                'I accept the ',
                s.a.createElement('a', { href: '#!' }, ' terms'),
                ' and ',
                s.a.createElement('a', { href: '#!' }, ' privacy policy')
              ),
              name: 'agreeToTerms',
              innerRef: e({ required: 'You have to agree with us' }),
              errors: i
            })
          );
        },
        F = i(91),
        Y = i(255),
        M = i(1032),
        T = i(1033),
        U = i.n(T),
        j = i(8),
        R = i(109),
        V = i(994),
        H = i.n(V),
        O = function(a) {
          var e,
            i,
            r = a.register,
            x = a.errors,
            o = Object(t.useContext)(B.a).user,
            l = Object(t.useState)([].concat(Object(F.a)(o.avater ? o.avater : []), [{ src: U.a }])),
            k = Object(n.a)(l, 2),
            p = k[0],
            c = k[1],
            y = Object(t.useContext)(B.a).handleInputChange;
          return s.a.createElement(
            t.Fragment,
            null,
            s.a.createElement(
              Y.a,
              { className: 'flex-center pb-3 d-block d-md-flex text-center mb-2' },
              s.a.createElement(R.a, {
                size: '4xl',
                className: 'mb-2',
                src: Object(j.i)(p)
                  ? (null === (e = p[0]) || void 0 === e ? void 0 : e.base64) ||
                    (null === (i = p[0]) || void 0 === i ? void 0 : i.src)
                  : ''
              }),
              s.a.createElement(
                Y.a,
                { body: !0, className: 'ml-md-4' },
                s.a.createElement(M.a, {
                  files: p,
                  onChange: function(a) {
                    c(a), y({ name: 'avater', value: a });
                  },
                  multiple: !1,
                  accept: 'image/*',
                  placeholder: s.a.createElement(
                    t.Fragment,
                    null,
                    s.a.createElement(
                      Y.a,
                      { className: ' fs-0 mx-auto d-inline-flex align-items-center' },
                      s.a.createElement('img', { src: H.a, alt: '', width: 25, className: 'mr-2' }),
                      s.a.createElement(
                        Y.a,
                        null,
                        s.a.createElement('p', { className: 'fs-0 mb-0 text-700' }, 'Upload your profile picture')
                      )
                    ),
                    s.a.createElement(
                      'p',
                      { className: 'mb-0 w-75 mx-auto text-500' },
                      'Upload a 300x300 jpg image with a maximum size of 400KB'
                    )
                  )
                })
              )
            ),
            s.a.createElement(I, {
              type: 'select',
              label: 'Gender',
              placeholder: 'Select your gender',
              tag: Q.a,
              name: 'selectGender',
              id: 'selectGender',
              onChange: function(a) {
                var e = a.target;
                y(e);
              },
              innerRef: r({ required: !1 }),
              errors: x,
              options: ['Male', 'Female', 'Other']
            }),
            s.a.createElement(I, {
              type: 'number',
              label: 'Phone',
              placeholder: 'Phone',
              name: 'phoneNumber',
              onChange: function(a) {
                var e = a.target;
                y(e);
              },
              id: 'name',
              className: 'input-spin-none',
              innerRef: r({ required: !1 }),
              errors: x
            }),
            s.a.createElement(I, {
              label: 'Date of Birth',
              id: 'date',
              customType: 'datetime',
              name: 'birthDate',
              placeholder: 'DD/MM/YYYY',
              errors: x
            }),
            s.a.createElement(I, {
              type: 'textarea',
              label: 'Address',
              name: 'address',
              rows: '4',
              id: 'address',
              innerRef: r({ required: !1 }),
              errors: x
            })
          );
        },
        L = i(950),
        z = function(a) {
          var e = a.register,
            i = a.errors,
            n = Object(t.useContext)(B.a).handleInputChange;
          return s.a.createElement(
            t.Fragment,
            null,
            s.a.createElement(
              r.a,
              { form: !0 },
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  type: 'number',
                  name: 'cardNumber',
                  label: 'Card Number*',
                  placeholder:
                    '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022',
                  className: 'input-spin-none',
                  id: 'cardNumber',
                  innerRef: e({ required: 'Please Enter your card number' }),
                  errors: i
                })
              ),
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  label: 'Name on Card*',
                  name: 'nameOnCard',
                  placeholder: 'John Doe',
                  id: 'nameOnCard',
                  innerRef: e({ required: 'Name on card is requred' }),
                  errors: i
                })
              )
            ),
            s.a.createElement(
              r.a,
              { form: !0 },
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  type: 'select',
                  name: 'country',
                  label: 'Country*',
                  onChange: function(a) {
                    var e = a.target;
                    n(e);
                  },
                  innerRef: e({ required: 'Country is requred' }),
                  errors: i,
                  options: [
                    'Afghanistan',
                    'Albania',
                    'Algeria',
                    'American Samoa',
                    'Andorra',
                    'Angola',
                    'Anguilla',
                    'Antarctica',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Aruba',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bermuda',
                    'Bhutan',
                    'Bolivia',
                    'Bosnia and Herzegowina',
                    'Botswana',
                    'Bouvet Island',
                    'Brazil',
                    'British Indian Ocean Territory',
                    'Brunei Darussalam',
                    'Bulgaria',
                    'Burkina Faso',
                    'Burundi',
                    'Cambodia',
                    'Cameroon',
                    'Canada',
                    'Cape Verde',
                    'Cayman Islands',
                    'Central African Republic',
                    'Chad',
                    'Chile',
                    'China',
                    'Christmas Island',
                    'Cocos (Keeling) Islands',
                    'Colombia',
                    'Comoros',
                    'Congo',
                    'Congo, the Democratic Republic of the',
                    'Cook Islands',
                    'Costa Rica',
                    "Cote d'Ivoire",
                    'Croatia (Hrvatska)',
                    'Cuba',
                    'Cyprus',
                    'Czech Republic',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'East Timor',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Eritrea',
                    'Estonia',
                    'Ethiopia',
                    'Falkland Islands (Malvinas)',
                    'Faroe Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'France Metropolitan',
                    'French Guiana',
                    'French Polynesia',
                    'French Southern Territories',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Gibraltar',
                    'Greece',
                    'Greenland',
                    'Grenada',
                    'Guadeloupe',
                    'Guam',
                    'Guatemala',
                    'Guinea',
                    'Guinea-Bissau',
                    'Guyana',
                    'Haiti',
                    'Heard and Mc Donald Islands',
                    'Holy See (Vatican City State)',
                    'Honduras',
                    'Hong Kong',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran (Islamic Republic of)',
                    'Iraq',
                    'Ireland',
                    'Israel',
                    'Italy',
                    'Jamaica',
                    'Japan',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kiribati',
                    "Korea, Democratic People's Republic of",
                    'Korea, Republic of',
                    'Kuwait',
                    'Kyrgyzstan',
                    "Lao, People's Democratic Republic",
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libyan Arab Jamahiriya',
                    'Liechtenstein',
                    'Lithuania',
                    'Luxembourg',
                    'Macau',
                    'Macedonia, The Former Yugoslav Republic of',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Martinique',
                    'Mauritania',
                    'Mauritius',
                    'Mayotte',
                    'Mexico',
                    'Micronesia, Federated States of',
                    'Moldova, Republic of',
                    'Monaco',
                    'Mongolia',
                    'Montserrat',
                    'Morocco',
                    'Mozambique',
                    'Myanmar',
                    'Namibia',
                    'Nauru',
                    'Nepal',
                    'Netherlands',
                    'Netherlands Antilles',
                    'New Caledonia',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Niue',
                    'Norfolk Island',
                    'Northern Mariana Islands',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palau',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Pitcairn',
                    'Poland',
                    'Portugal',
                    'Puerto Rico',
                    'Qatar',
                    'Reunion',
                    'Romania',
                    'Russian Federation',
                    'Rwanda',
                    'Saint Kitts and Nevis',
                    'Saint Lucia',
                    'Saint Vincent and the Grenadines',
                    'Samoa',
                    'San Marino',
                    'Sao Tome and Principe',
                    'Saudi Arabia',
                    'Senegal',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Slovakia (Slovak Republic)',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa',
                    'South Georgia and the South Sandwich Islands',
                    'Spain',
                    'Sri Lanka',
                    'St. Helena',
                    'St. Pierre and Miquelon',
                    'Sudan',
                    'Suriname',
                    'Svalbard and Jan Mayen Islands',
                    'Swaziland',
                    'Sweden',
                    'Switzerland',
                    'Syrian Arab Republic',
                    'Taiwan, Province of China',
                    'Tajikistan',
                    'Tanzania, United Republic of',
                    'Thailand',
                    'Togo',
                    'Tokelau',
                    'Tonga',
                    'Trinidad and Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Turks and Caicos Islands',
                    'Tuvalu',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom',
                    'United States',
                    'United States Minor Outlying Islands',
                    'Uruguay',
                    'Uzbekistan',
                    'Vanuatu',
                    'Venezuela',
                    'Vietnam',
                    'Virgin Islands (British)',
                    'Virgin Islands (U.S.)',
                    'Wallis and Futuna Islands',
                    'Western Sahara',
                    'Yemen',
                    'Yugoslavia',
                    'Zambia',
                    'Zimbabwe'
                  ],
                  placeholder: 'Select your country',
                  id: 'country'
                })
              ),
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  type: 'number',
                  name: 'zipCode',
                  label: 'Zip Code*',
                  className: 'input-spin-none',
                  placeholder: '1234',
                  id: 'zipcode',
                  onChange: function(a) {
                    var e = a.target;
                    n(e);
                  },
                  innerRef: e({ required: 'Zip Code is requred' }),
                  errors: i
                })
              )
            ),
            s.a.createElement(
              r.a,
              { form: !0 },
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  label: 'Date of Birth',
                  id: 'date',
                  customType: 'datetime',
                  name: 'expdate',
                  placeholder: 'DD/YYYY',
                  dateFormat: 'MM-YYYY',
                  errors: i
                })
              ),
              s.a.createElement(
                x.a,
                null,
                s.a.createElement(I, {
                  label: s.a.createElement(
                    t.Fragment,
                    null,
                    'CVV*',
                    s.a.createElement(
                      'span',
                      { className: 'd-inline-block cursor-pointer text-secondary', id: 'CVVTooltip' },
                      s.a.createElement(_.a, { icon: 'question-circle', className: 'mx-2' })
                    ),
                    s.a.createElement(L.a, { placement: 'top', target: 'CVVTooltip' }, 'Card verification value')
                  ),
                  name: 'cvv',
                  placeholder: '123',
                  id: 'ccv',
                  onChange: function(a) {
                    var e = a.target;
                    n(e);
                  },
                  className: 'input-spin-none',
                  innerRef: e({
                    required: 'CVV is requred',
                    maxLength: { value: 3, message: 'cvv must have at max 3 characters' }
                  }),
                  errors: i
                })
              )
            )
          );
        },
        P = i(192),
        K = i(1034),
        J = i.n(K),
        W = i(1309),
        q = function() {
          var a = Object(t.useContext)(B.a),
            e = a.setStep,
            i = a.setUser,
            n = {
              loop: !0,
              autoplay: !0,
              animationData: W,
              rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
            };
          return s.a.createElement(
            t.Fragment,
            null,
            s.a.createElement(
              r.a,
              null,
              s.a.createElement(
                x.a,
                { className: 'text-center' },
                s.a.createElement(
                  'div',
                  { className: 'wizard-lottie-wrapper' },
                  s.a.createElement(
                    'div',
                    { className: 'wizard-lottie mx-auto' },
                    s.a.createElement(J.a, { options: n })
                  )
                ),
                s.a.createElement('h4', { className: 'mb-1' }, 'Your account is all set!'),
                s.a.createElement('p', { className: 'fs-0' }, 'Now you can access to your account'),
                s.a.createElement(
                  P.a,
                  {
                    color: 'primary',
                    className: 'px-5 my-3 text-white',
                    onClick: function() {
                      e(1), i({});
                    }
                  },
                  'Start Over'
                )
              )
            )
          );
        },
        Z = i(961),
        X = i(959),
        $ = i(1310),
        aa = function(a) {
          var e = a.toggle,
            i = a.modal,
            t = a.setModal,
            r = {
              loop: !0,
              autoplay: !0,
              animationData: $,
              rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
            };
          return s.a.createElement(
            Z.a,
            { isOpen: i, toggle: e, centered: !0, style: { width: '400px' } },
            s.a.createElement(
              X.a,
              { className: 'p-4' },
              s.a.createElement(
                P.a,
                {
                  className: 'btn text-danger position-absolute t-0 r-0  mr-2 mt-1  p-0 bg-transparent border-0',
                  onClick: function() {
                    return t(!i);
                  }
                },
                s.a.createElement(_.a, { icon: 'times', className: '' })
              ),
              s.a.createElement(
                Y.a,
                { className: 'flex-center' },
                s.a.createElement(J.a, { options: r, style: { width: '100px' } }),
                s.a.createElement(
                  Y.a,
                  { body: !0 },
                  "You don't have access to ",
                  s.a.createElement('br', null),
                  'the link. Please try again.'
                )
              )
            )
          );
        },
        ea = i(89),
        ia = function() {
          var a = Object(t.useContext)(B.e).isRTL,
            e = Object(t.useContext)(B.a),
            i = e.user,
            r = e.setUser,
            x = e.step,
            u = e.setStep,
            A = Object(g.a)(),
            E = A.register,
            v = A.handleSubmit,
            b = A.errors,
            C = A.watch,
            w = Object(t.useState)(!1),
            N = Object(n.a)(w, 2),
            G = N[0],
            S = N[1],
            I = function() {
              return S(!G);
            },
            Q = function(a) {
              4 !== x ? a < x && u(a) : I();
            };
          return s.a.createElement(
            t.Fragment,
            null,
            s.a.createElement(aa, { toggle: I, modal: G, setModal: S }),
            s.a.createElement(
              l.a,
              {
                tag: k.a,
                onSubmit: v(function(a) {
                  r(Object(o.a)({}, i, {}, a)), u(x + 1);
                }),
                className: 'theme-wizard'
              },
              s.a.createElement(
                p.a,
                { className: 'bg-light' },
                s.a.createElement(
                  c.a,
                  { className: 'justify-content-center' },
                  s.a.createElement(
                    y.a,
                    null,
                    s.a.createElement(
                      d.a,
                      {
                        className: f()('font-weight-semi-bold', { 'done cursor-pointer': x > 1, active: 1 === x }),
                        onClick: function() {
                          return Q(1);
                        }
                      },
                      s.a.createElement(
                        'span',
                        { className: 'nav-item-circle-parent' },
                        s.a.createElement(
                          'span',
                          { className: 'nav-item-circle' },
                          s.a.createElement(_.a, { icon: 'lock' })
                        )
                      ),
                      s.a.createElement('span', { className: 'd-none d-md-block mt-1 fs--1' }, 'Account')
                    )
                  ),
                  s.a.createElement(
                    y.a,
                    null,
                    s.a.createElement(
                      d.a,
                      {
                        className: f()('font-weight-semi-bold', { 'done  cursor-pointer': x > 2, active: 2 === x }),
                        onClick: function() {
                          return Q(2);
                        }
                      },
                      s.a.createElement(
                        'span',
                        { className: 'nav-item-circle-parent' },
                        s.a.createElement(
                          'span',
                          { className: 'nav-item-circle' },
                          s.a.createElement(_.a, { icon: 'user' })
                        )
                      ),
                      s.a.createElement('span', { className: 'd-none d-md-block mt-1 fs--1' }, 'Personal')
                    )
                  ),
                  s.a.createElement(
                    y.a,
                    null,
                    s.a.createElement(
                      d.a,
                      {
                        className: f()('font-weight-semi-bold', { 'done  cursor-pointer': x > 3, active: 3 === x }),
                        onClick: function() {
                          return Q(3);
                        }
                      },
                      s.a.createElement(
                        'span',
                        { className: 'nav-item-circle-parent' },
                        s.a.createElement(
                          'span',
                          { className: 'nav-item-circle' },
                          s.a.createElement(_.a, { icon: 'dollar-sign' })
                        )
                      ),
                      s.a.createElement('span', { className: 'd-none d-md-block mt-1 fs--1' }, 'Billing')
                    )
                  ),
                  s.a.createElement(
                    y.a,
                    null,
                    s.a.createElement(
                      d.a,
                      { className: f()('font-weight-semi-bold', { 'done  cursor-pointer': x > 3 }) },
                      s.a.createElement(
                        'span',
                        { className: 'nav-item-circle-parent' },
                        s.a.createElement(
                          'span',
                          { className: 'nav-item-circle' },
                          s.a.createElement(_.a, { icon: 'thumbs-up' })
                        )
                      ),
                      s.a.createElement('span', { className: 'd-none d-md-block mt-1 fs--1' }, 'Done')
                    )
                  )
                )
              ),
              s.a.createElement(
                m.a,
                { className: 'fs--1 font-weight-normal px-md-6 pt-4 pb-3' },
                1 === x && s.a.createElement(D, { register: E, errors: b, watch: C }),
                2 === x && s.a.createElement(O, { register: E, errors: b }),
                3 === x && s.a.createElement(z, { register: E, errors: b }),
                4 === x && s.a.createElement(q, null)
              ),
              s.a.createElement(
                h.a,
                { className: f()('px-md-6 bg-light', { 'd-none': 4 === x, ' d-flex': x < 4 }) },
                s.a.createElement(
                  ea.a,
                  {
                    color: 'link',
                    icon: a ? 'chevron-right' : 'chevron-left',
                    iconAlign: 'left',
                    transform: 'down-1 shrink-4',
                    className: f()('px-0 font-weight-semi-bold', { 'd-none': 1 === x }),
                    onClick: function() {
                      u(x - 1);
                    }
                  },
                  'Prev'
                ),
                s.a.createElement(
                  ea.a,
                  {
                    color: 'primary',
                    className: 'ml-auto px-5',
                    type: 'submit',
                    icon: a ? 'chevron-left' : 'chevron-right',
                    iconAlign: 'right',
                    transform: 'down-1 shrink-4'
                  },
                  'Next'
                )
              )
            )
          );
        },
        ta = i(268),
        sa = i(123),
        ra = i(51),
        xa = function(a) {
          var e = a.children,
            i = Object(t.useState)({}),
            r = Object(n.a)(i, 2),
            x = r[0],
            l = r[1],
            k = Object(t.useState)(1),
            p = Object(n.a)(k, 2),
            c = p[0],
            y = p[1],
            d = {
              user: x,
              setUser: l,
              step: c,
              setStep: y,
              handleInputChange: function(a) {
                var e = a.value,
                  i = a.name;
                return l(Object(o.a)({}, x, Object(ra.a)({}, i, e)));
              }
            };
          return s.a.createElement(B.a.Provider, { value: d }, e);
        };
      e.default = function() {
        return s.a.createElement(
          ta.a,
          { className: 'py-0' },
          s.a.createElement(
            r.a,
            { className: 'flex-center min-vh-100 py-6' },
            s.a.createElement(
              x.a,
              { sm: 10, lg: 7, className: 'col-xxl-5' },
              s.a.createElement(sa.a, null),
              s.a.createElement(xa, null, s.a.createElement(ia, null))
            )
          )
        );
      };
    },
    994: function(a, e, i) {
      a.exports = i.p + 'static/media/cloud-upload.1b0e2f86.svg';
    }
  }
]);
//# sourceMappingURL=11.43bcf735.chunk.js.map
