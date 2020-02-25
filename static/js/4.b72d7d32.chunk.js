/*! For license information please see 4.b72d7d32.chunk.js.LICENSE */
(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [4],
  {
    1096: function(t, e, i) {
      'use strict';
      function n() {
        return (n =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      i.d(e, 'a', function() {
        return n;
      });
    },
    1200: function(t, e, i) {},
    1201: function(t, e, i) {
      !(function(t) {
        'use strict';
        var e = (L.MarkerClusterGroup = L.FeatureGroup.extend({
          options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            clusterPane: L.Marker.prototype.options.pane,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animate: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            spiderLegPolylineOptions: { weight: 1.5, color: '#222', opacity: 0.5 },
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
          },
          initialize: function(t) {
            L.Util.setOptions(this, t),
              this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction),
              (this._featureGroup = L.featureGroup()),
              this._featureGroup.addEventParent(this),
              (this._nonPointGroup = L.featureGroup()),
              this._nonPointGroup.addEventParent(this),
              (this._inZoomAnimation = 0),
              (this._needsClustering = []),
              (this._needsRemoving = []),
              (this._currentShownBounds = null),
              (this._queue = []),
              (this._childMarkerEventHandlers = {
                dragstart: this._childMarkerDragStart,
                move: this._childMarkerMoved,
                dragend: this._childMarkerDragEnd
              });
            var e = L.DomUtil.TRANSITION && this.options.animate;
            L.extend(this, e ? this._withAnimation : this._noAnimation),
              (this._markerCluster = e ? L.MarkerCluster : L.MarkerClusterNonAnimated);
          },
          addLayer: function(t) {
            if (t instanceof L.LayerGroup) return this.addLayers([t]);
            if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this.fire('layeradd', { layer: t }), this;
            if (!this._map) return this._needsClustering.push(t), this.fire('layeradd', { layer: t }), this;
            if (this.hasLayer(t)) return this;
            this._unspiderfy && this._unspiderfy(),
              this._addLayer(t, this._maxZoom),
              this.fire('layeradd', { layer: t }),
              this._topClusterLevel._recalculateBounds(),
              this._refreshClustersIcons();
            var e = t,
              i = this._zoom;
            if (t.__parent) for (; e.__parent._zoom >= i; ) e = e.__parent;
            return (
              this._currentShownBounds.contains(e.getLatLng()) &&
                (this.options.animateAddingMarkers
                  ? this._animationAddLayer(t, e)
                  : this._animationAddLayerNonAnimated(t, e)),
              this
            );
          },
          removeLayer: function(t) {
            return t instanceof L.LayerGroup
              ? this.removeLayers([t])
              : t.getLatLng
              ? this._map
                ? t.__parent
                  ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)),
                    this._removeLayer(t, !0),
                    this.fire('layerremove', { layer: t }),
                    this._topClusterLevel._recalculateBounds(),
                    this._refreshClustersIcons(),
                    t.off(this._childMarkerEventHandlers, this),
                    this._featureGroup.hasLayer(t) &&
                      (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow()),
                    this)
                  : this
                : (!this._arraySplice(this._needsClustering, t) &&
                    this.hasLayer(t) &&
                    this._needsRemoving.push({ layer: t, latlng: t._latlng }),
                  this.fire('layerremove', { layer: t }),
                  this)
              : (this._nonPointGroup.removeLayer(t), this.fire('layerremove', { layer: t }), this);
          },
          addLayers: function(t, e) {
            if (!L.Util.isArray(t)) return this.addLayer(t);
            var i,
              n = this._featureGroup,
              o = this._nonPointGroup,
              s = this.options.chunkedLoading,
              r = this.options.chunkInterval,
              a = this.options.chunkProgress,
              h = t.length,
              l = 0,
              u = !0;
            if (this._map) {
              var c = new Date().getTime(),
                _ = L.bind(function() {
                  for (
                    var d = new Date().getTime();
                    h > l && !(s && 0 === l % 200 && new Date().getTime() - d > r);
                    l++
                  )
                    if ((i = t[l]) instanceof L.LayerGroup)
                      u && ((t = t.slice()), (u = !1)), this._extractNonGroupLayers(i, t), (h = t.length);
                    else if (i.getLatLng) {
                      if (
                        !this.hasLayer(i) &&
                        (this._addLayer(i, this._maxZoom),
                        e || this.fire('layeradd', { layer: i }),
                        i.__parent && 2 === i.__parent.getChildCount())
                      ) {
                        var p = i.__parent.getAllChildMarkers(),
                          m = p[0] === i ? p[1] : p[0];
                        n.removeLayer(m);
                      }
                    } else o.addLayer(i), e || this.fire('layeradd', { layer: i });
                  a && a(l, h, new Date().getTime() - c),
                    l === h
                      ? (this._topClusterLevel._recalculateBounds(),
                        this._refreshClustersIcons(),
                        this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds))
                      : setTimeout(_, this.options.chunkDelay);
                }, this);
              _();
            } else
              for (var d = this._needsClustering; h > l; l++)
                (i = t[l]) instanceof L.LayerGroup
                  ? (u && ((t = t.slice()), (u = !1)), this._extractNonGroupLayers(i, t), (h = t.length))
                  : i.getLatLng
                  ? this.hasLayer(i) || d.push(i)
                  : o.addLayer(i);
            return this;
          },
          removeLayers: function(t) {
            var e,
              i,
              n = t.length,
              o = this._featureGroup,
              s = this._nonPointGroup,
              r = !0;
            if (!this._map) {
              for (e = 0; n > e; e++)
                (i = t[e]) instanceof L.LayerGroup
                  ? (r && ((t = t.slice()), (r = !1)), this._extractNonGroupLayers(i, t), (n = t.length))
                  : (this._arraySplice(this._needsClustering, i),
                    s.removeLayer(i),
                    this.hasLayer(i) && this._needsRemoving.push({ layer: i, latlng: i._latlng }),
                    this.fire('layerremove', { layer: i }));
              return this;
            }
            if (this._unspiderfy) {
              this._unspiderfy();
              var a = t.slice(),
                h = n;
              for (e = 0; h > e; e++)
                (i = a[e]) instanceof L.LayerGroup
                  ? (this._extractNonGroupLayers(i, a), (h = a.length))
                  : this._unspiderfyLayer(i);
            }
            for (e = 0; n > e; e++)
              (i = t[e]) instanceof L.LayerGroup
                ? (r && ((t = t.slice()), (r = !1)), this._extractNonGroupLayers(i, t), (n = t.length))
                : i.__parent
                ? (this._removeLayer(i, !0, !0),
                  this.fire('layerremove', { layer: i }),
                  o.hasLayer(i) && (o.removeLayer(i), i.clusterShow && i.clusterShow()))
                : (s.removeLayer(i), this.fire('layerremove', { layer: i }));
            return (
              this._topClusterLevel._recalculateBounds(),
              this._refreshClustersIcons(),
              this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds),
              this
            );
          },
          clearLayers: function() {
            return (
              this._map ||
                ((this._needsClustering = []),
                (this._needsRemoving = []),
                delete this._gridClusters,
                delete this._gridUnclustered),
              this._noanimationUnspiderfy && this._noanimationUnspiderfy(),
              this._featureGroup.clearLayers(),
              this._nonPointGroup.clearLayers(),
              this.eachLayer(function(t) {
                t.off(this._childMarkerEventHandlers, this), delete t.__parent;
              }, this),
              this._map && this._generateInitialClusters(),
              this
            );
          },
          getBounds: function() {
            var t = new L.LatLngBounds();
            this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
            for (var e = this._needsClustering.length - 1; e >= 0; e--) t.extend(this._needsClustering[e].getLatLng());
            return t.extend(this._nonPointGroup.getBounds()), t;
          },
          eachLayer: function(t, e) {
            var i,
              n,
              o,
              s = this._needsClustering.slice(),
              r = this._needsRemoving;
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(s), n = s.length - 1; n >= 0; n--) {
              for (i = !0, o = r.length - 1; o >= 0; o--)
                if (r[o].layer === s[n]) {
                  i = !1;
                  break;
                }
              i && t.call(e, s[n]);
            }
            this._nonPointGroup.eachLayer(t, e);
          },
          getLayers: function() {
            var t = [];
            return (
              this.eachLayer(function(e) {
                t.push(e);
              }),
              t
            );
          },
          getLayer: function(t) {
            var e = null;
            return (
              (t = parseInt(t, 10)),
              this.eachLayer(function(i) {
                L.stamp(i) === t && (e = i);
              }),
              e
            );
          },
          hasLayer: function(t) {
            if (!t) return !1;
            var e,
              i = this._needsClustering;
            for (e = i.length - 1; e >= 0; e--) if (i[e] === t) return !0;
            for (e = (i = this._needsRemoving).length - 1; e >= 0; e--) if (i[e].layer === t) return !1;
            return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t);
          },
          zoomToShowLayer: function(t, e) {
            'function' != typeof e && (e = function() {});
            var i = function i() {
              (!t._icon && !t.__parent._icon) ||
                this._inZoomAnimation ||
                (this._map.off('moveend', i, this),
                this.off('animationend', i, this),
                t._icon ? e() : t.__parent._icon && (this.once('spiderfied', e, this), t.__parent.spiderfy()));
            };
            t._icon && this._map.getBounds().contains(t.getLatLng())
              ? e()
              : t.__parent._zoom < Math.round(this._map._zoom)
              ? (this._map.on('moveend', i, this), this._map.panTo(t.getLatLng()))
              : (this._map.on('moveend', i, this), this.on('animationend', i, this), t.__parent.zoomToBounds());
          },
          onAdd: function(t) {
            var e, i, n;
            if (((this._map = t), !isFinite(this._map.getMaxZoom()))) throw 'Map has no maxZoom specified';
            for (
              this._featureGroup.addTo(t),
                this._nonPointGroup.addTo(t),
                this._gridClusters || this._generateInitialClusters(),
                this._maxLat = t.options.crs.projection.MAX_LATITUDE,
                e = 0,
                i = this._needsRemoving.length;
              i > e;
              e++
            )
              ((n = this._needsRemoving[e]).newlatlng = n.layer._latlng), (n.layer._latlng = n.latlng);
            for (e = 0, i = this._needsRemoving.length; i > e; e++)
              (n = this._needsRemoving[e]), this._removeLayer(n.layer, !0), (n.layer._latlng = n.newlatlng);
            (this._needsRemoving = []),
              (this._zoom = Math.round(this._map._zoom)),
              (this._currentShownBounds = this._getExpandedVisibleBounds()),
              this._map.on('zoomend', this._zoomEnd, this),
              this._map.on('moveend', this._moveEnd, this),
              this._spiderfierOnAdd && this._spiderfierOnAdd(),
              this._bindEvents(),
              (i = this._needsClustering),
              (this._needsClustering = []),
              this.addLayers(i, !0);
          },
          onRemove: function(t) {
            t.off('zoomend', this._zoomEnd, this),
              t.off('moveend', this._moveEnd, this),
              this._unbindEvents(),
              (this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '')),
              this._spiderfierOnRemove && this._spiderfierOnRemove(),
              delete this._maxLat,
              this._hideCoverage(),
              this._featureGroup.remove(),
              this._nonPointGroup.remove(),
              this._featureGroup.clearLayers(),
              (this._map = null);
          },
          getVisibleParent: function(t) {
            for (var e = t; e && !e._icon; ) e = e.__parent;
            return e || null;
          },
          _arraySplice: function(t, e) {
            for (var i = t.length - 1; i >= 0; i--) if (t[i] === e) return t.splice(i, 1), !0;
          },
          _removeFromGridUnclustered: function(t, e) {
            for (
              var i = this._map, n = this._gridUnclustered, o = Math.floor(this._map.getMinZoom());
              e >= o && n[e].removeObject(t, i.project(t.getLatLng(), e));
              e--
            );
          },
          _childMarkerDragStart: function(t) {
            t.target.__dragStart = t.target._latlng;
          },
          _childMarkerMoved: function(t) {
            if (!this._ignoreMove && !t.target.__dragStart) {
              var e = t.target._popup && t.target._popup.isOpen();
              this._moveChild(t.target, t.oldLatLng, t.latlng), e && t.target.openPopup();
            }
          },
          _moveChild: function(t, e, i) {
            (t._latlng = e), this.removeLayer(t), (t._latlng = i), this.addLayer(t);
          },
          _childMarkerDragEnd: function(t) {
            var e = t.target.__dragStart;
            delete t.target.__dragStart, e && this._moveChild(t.target, e, t.target._latlng);
          },
          _removeLayer: function(t, e, i) {
            var n = this._gridClusters,
              o = this._gridUnclustered,
              s = this._featureGroup,
              r = this._map,
              a = Math.floor(this._map.getMinZoom());
            e && this._removeFromGridUnclustered(t, this._maxZoom);
            var h,
              l = t.__parent,
              u = l._markers;
            for (this._arraySplice(u, t); l && (l._childCount--, (l._boundsNeedUpdate = !0), !(l._zoom < a)); )
              e && l._childCount <= 1
                ? ((h = l._markers[0] === t ? l._markers[1] : l._markers[0]),
                  n[l._zoom].removeObject(l, r.project(l._cLatLng, l._zoom)),
                  o[l._zoom].addObject(h, r.project(h.getLatLng(), l._zoom)),
                  this._arraySplice(l.__parent._childClusters, l),
                  l.__parent._markers.push(h),
                  (h.__parent = l.__parent),
                  l._icon && (s.removeLayer(l), i || s.addLayer(h)))
                : (l._iconNeedsUpdate = !0),
                (l = l.__parent);
            delete t.__parent;
          },
          _isOrIsParent: function(t, e) {
            for (; e; ) {
              if (t === e) return !0;
              e = e.parentNode;
            }
            return !1;
          },
          fire: function(t, e, i) {
            if (e && e.layer instanceof L.MarkerCluster) {
              if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget)) return;
              t = 'cluster' + t;
            }
            L.FeatureGroup.prototype.fire.call(this, t, e, i);
          },
          listens: function(t, e) {
            return (
              L.FeatureGroup.prototype.listens.call(this, t, e) ||
              L.FeatureGroup.prototype.listens.call(this, 'cluster' + t, e)
            );
          },
          _defaultIconCreateFunction: function(t) {
            var e = t.getChildCount(),
              i = ' marker-cluster-';
            return (
              (i += 10 > e ? 'small' : 100 > e ? 'medium' : 'large'),
              new L.DivIcon({
                html: '<div><span>' + e + '</span></div>',
                className: 'marker-cluster' + i,
                iconSize: new L.Point(40, 40)
              })
            );
          },
          _bindEvents: function() {
            var t = this._map,
              e = this.options.spiderfyOnMaxZoom,
              i = this.options.showCoverageOnHover,
              n = this.options.zoomToBoundsOnClick;
            (e || n) && this.on('clusterclick', this._zoomOrSpiderfy, this),
              i &&
                (this.on('clustermouseover', this._showCoverage, this),
                this.on('clustermouseout', this._hideCoverage, this),
                t.on('zoomend', this._hideCoverage, this));
          },
          _zoomOrSpiderfy: function(t) {
            for (var e = t.layer, i = e; 1 === i._childClusters.length; ) i = i._childClusters[0];
            i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom
              ? e.spiderfy()
              : this.options.zoomToBoundsOnClick && e.zoomToBounds(),
              t.originalEvent && 13 === t.originalEvent.keyCode && this._map._container.focus();
          },
          _showCoverage: function(t) {
            var e = this._map;
            this._inZoomAnimation ||
              (this._shownPolygon && e.removeLayer(this._shownPolygon),
              t.layer.getChildCount() > 2 &&
                t.layer !== this._spiderfied &&
                ((this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions)),
                e.addLayer(this._shownPolygon)));
          },
          _hideCoverage: function() {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon), (this._shownPolygon = null));
          },
          _unbindEvents: function() {
            var t = this.options.spiderfyOnMaxZoom,
              e = this.options.showCoverageOnHover,
              i = this.options.zoomToBoundsOnClick,
              n = this._map;
            (t || i) && this.off('clusterclick', this._zoomOrSpiderfy, this),
              e &&
                (this.off('clustermouseover', this._showCoverage, this),
                this.off('clustermouseout', this._hideCoverage, this),
                n.off('zoomend', this._hideCoverage, this));
          },
          _zoomEnd: function() {
            this._map &&
              (this._mergeSplitClusters(),
              (this._zoom = Math.round(this._map._zoom)),
              (this._currentShownBounds = this._getExpandedVisibleBounds()));
          },
          _moveEnd: function() {
            if (!this._inZoomAnimation) {
              var t = this._getExpandedVisibleBounds();
              this._topClusterLevel._recursivelyRemoveChildrenFromMap(
                this._currentShownBounds,
                Math.floor(this._map.getMinZoom()),
                this._zoom,
                t
              ),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t),
                (this._currentShownBounds = t);
            }
          },
          _generateInitialClusters: function() {
            var t = Math.ceil(this._map.getMaxZoom()),
              e = Math.floor(this._map.getMinZoom()),
              i = this.options.maxClusterRadius,
              n = i;
            'function' != typeof i &&
              (n = function() {
                return i;
              }),
              null !== this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1),
              (this._maxZoom = t),
              (this._gridClusters = {}),
              (this._gridUnclustered = {});
            for (var o = t; o >= e; o--)
              (this._gridClusters[o] = new L.DistanceGrid(n(o))), (this._gridUnclustered[o] = new L.DistanceGrid(n(o)));
            this._topClusterLevel = new this._markerCluster(this, e - 1);
          },
          _addLayer: function(t, e) {
            var i,
              n,
              o = this._gridClusters,
              s = this._gridUnclustered,
              r = Math.floor(this._map.getMinZoom());
            for (
              this.options.singleMarkerMode && this._overrideMarkerIcon(t), t.on(this._childMarkerEventHandlers, this);
              e >= r;
              e--
            ) {
              i = this._map.project(t.getLatLng(), e);
              var a = o[e].getNearObject(i);
              if (a) return a._addChild(t), void (t.__parent = a);
              if ((a = s[e].getNearObject(i))) {
                var h = a.__parent;
                h && this._removeLayer(a, !1);
                var l = new this._markerCluster(this, e, a, t);
                o[e].addObject(l, this._map.project(l._cLatLng, e)), (a.__parent = l), (t.__parent = l);
                var u = l;
                for (n = e - 1; n > h._zoom; n--)
                  (u = new this._markerCluster(this, n, u)), o[n].addObject(u, this._map.project(a.getLatLng(), n));
                return h._addChild(u), void this._removeFromGridUnclustered(a, e);
              }
              s[e].addObject(t, i);
            }
            this._topClusterLevel._addChild(t), (t.__parent = this._topClusterLevel);
          },
          _refreshClustersIcons: function() {
            this._featureGroup.eachLayer(function(t) {
              t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon();
            });
          },
          _enqueue: function(t) {
            this._queue.push(t),
              this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
          },
          _processQueue: function() {
            for (var t = 0; t < this._queue.length; t++) this._queue[t].call(this);
            (this._queue.length = 0), clearTimeout(this._queueTimeout), (this._queueTimeout = null);
          },
          _mergeSplitClusters: function() {
            var t = Math.round(this._map._zoom);
            this._processQueue(),
              this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds())
                ? (this._animationStart(),
                  this._topClusterLevel._recursivelyRemoveChildrenFromMap(
                    this._currentShownBounds,
                    Math.floor(this._map.getMinZoom()),
                    this._zoom,
                    this._getExpandedVisibleBounds()
                  ),
                  this._animationZoomIn(this._zoom, t))
                : this._zoom > t
                ? (this._animationStart(), this._animationZoomOut(this._zoom, t))
                : this._moveEnd();
          },
          _getExpandedVisibleBounds: function() {
            return this.options.removeOutsideVisibleBounds
              ? L.Browser.mobile
                ? this._checkBoundsMaxLat(this._map.getBounds())
                : this._checkBoundsMaxLat(this._map.getBounds().pad(1))
              : this._mapBoundsInfinite;
          },
          _checkBoundsMaxLat: function(t) {
            var e = this._maxLat;
            return (
              void 0 !== e &&
                (t.getNorth() >= e && (t._northEast.lat = 1 / 0), t.getSouth() <= -e && (t._southWest.lat = -1 / 0)),
              t
            );
          },
          _animationAddLayerNonAnimated: function(t, e) {
            if (e === t) this._featureGroup.addLayer(t);
            else if (2 === e._childCount) {
              e._addToMap();
              var i = e.getAllChildMarkers();
              this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1]);
            } else e._updateIcon();
          },
          _extractNonGroupLayers: function(t, e) {
            var i,
              n = t.getLayers(),
              o = 0;
            for (e = e || []; o < n.length; o++)
              (i = n[o]) instanceof L.LayerGroup ? this._extractNonGroupLayers(i, e) : e.push(i);
            return e;
          },
          _overrideMarkerIcon: function(t) {
            return (t.options.icon = this.options.iconCreateFunction({
              getChildCount: function() {
                return 1;
              },
              getAllChildMarkers: function() {
                return [t];
              }
            }));
          }
        }));
        L.MarkerClusterGroup.include({
          _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
        }),
          L.MarkerClusterGroup.include({
            _noAnimation: {
              _animationStart: function() {},
              _animationZoomIn: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(
                  this._currentShownBounds,
                  Math.floor(this._map.getMinZoom()),
                  t
                ),
                  this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                  this.fire('animationend');
              },
              _animationZoomOut: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(
                  this._currentShownBounds,
                  Math.floor(this._map.getMinZoom()),
                  t
                ),
                  this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                  this.fire('animationend');
              },
              _animationAddLayer: function(t, e) {
                this._animationAddLayerNonAnimated(t, e);
              }
            },
            _withAnimation: {
              _animationStart: function() {
                (this._map._mapPane.className += ' leaflet-cluster-anim'), this._inZoomAnimation++;
              },
              _animationZoomIn: function(t, e) {
                var i,
                  n = this._getExpandedVisibleBounds(),
                  o = this._featureGroup,
                  s = Math.floor(this._map.getMinZoom());
                (this._ignoreMove = !0),
                  this._topClusterLevel._recursively(n, t, s, function(s) {
                    var r,
                      a = s._latlng,
                      h = s._markers;
                    for (
                      n.contains(a) || (a = null),
                        s._isSingleParent() && t + 1 === e
                          ? (o.removeLayer(s), s._recursivelyAddChildrenToMap(null, e, n))
                          : (s.clusterHide(), s._recursivelyAddChildrenToMap(a, e, n)),
                        i = h.length - 1;
                      i >= 0;
                      i--
                    )
                      (r = h[i]), n.contains(r._latlng) || o.removeLayer(r);
                  }),
                  this._forceLayout(),
                  this._topClusterLevel._recursivelyBecomeVisible(n, e),
                  o.eachLayer(function(t) {
                    t instanceof L.MarkerCluster || !t._icon || t.clusterShow();
                  }),
                  this._topClusterLevel._recursively(n, t, e, function(t) {
                    t._recursivelyRestoreChildPositions(e);
                  }),
                  (this._ignoreMove = !1),
                  this._enqueue(function() {
                    this._topClusterLevel._recursively(n, t, s, function(t) {
                      o.removeLayer(t), t.clusterShow();
                    }),
                      this._animationEnd();
                  });
              },
              _animationZoomOut: function(t, e) {
                this._animationZoomOutSingle(this._topClusterLevel, t - 1, e),
                  this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                  this._topClusterLevel._recursivelyRemoveChildrenFromMap(
                    this._currentShownBounds,
                    Math.floor(this._map.getMinZoom()),
                    t,
                    this._getExpandedVisibleBounds()
                  );
              },
              _animationAddLayer: function(t, e) {
                var i = this,
                  n = this._featureGroup;
                n.addLayer(t),
                  e !== t &&
                    (e._childCount > 2
                      ? (e._updateIcon(),
                        this._forceLayout(),
                        this._animationStart(),
                        t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),
                        t.clusterHide(),
                        this._enqueue(function() {
                          n.removeLayer(t), t.clusterShow(), i._animationEnd();
                        }))
                      : (this._forceLayout(),
                        i._animationStart(),
                        i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)));
              }
            },
            _animationZoomOutSingle: function(t, e, i) {
              var n = this._getExpandedVisibleBounds(),
                o = Math.floor(this._map.getMinZoom());
              t._recursivelyAnimateChildrenInAndAddSelfToMap(n, o, e + 1, i);
              var s = this;
              this._forceLayout(),
                t._recursivelyBecomeVisible(n, i),
                this._enqueue(function() {
                  if (1 === t._childCount) {
                    var r = t._markers[0];
                    (this._ignoreMove = !0),
                      r.setLatLng(r.getLatLng()),
                      (this._ignoreMove = !1),
                      r.clusterShow && r.clusterShow();
                  } else
                    t._recursively(n, i, o, function(t) {
                      t._recursivelyRemoveChildrenFromMap(n, o, e + 1);
                    });
                  s._animationEnd();
                });
            },
            _animationEnd: function() {
              this._map &&
                (this._map._mapPane.className = this._map._mapPane.className.replace(' leaflet-cluster-anim', '')),
                this._inZoomAnimation--,
                this.fire('animationend');
            },
            _forceLayout: function() {
              L.Util.falseFn(document.body.offsetWidth);
            }
          }),
          (L.markerClusterGroup = function(t) {
            return new L.MarkerClusterGroup(t);
          });
        var i = (L.MarkerCluster = L.Marker.extend({
          options: L.Icon.prototype.options,
          initialize: function(t, e, i, n) {
            L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
              icon: this,
              pane: t.options.clusterPane
            }),
              (this._group = t),
              (this._zoom = e),
              (this._markers = []),
              (this._childClusters = []),
              (this._childCount = 0),
              (this._iconNeedsUpdate = !0),
              (this._boundsNeedUpdate = !0),
              (this._bounds = new L.LatLngBounds()),
              i && this._addChild(i),
              n && this._addChild(n);
          },
          getAllChildMarkers: function(t, e) {
            t = t || [];
            for (var i = this._childClusters.length - 1; i >= 0; i--) this._childClusters[i].getAllChildMarkers(t);
            for (var n = this._markers.length - 1; n >= 0; n--)
              (e && this._markers[n].__dragStart) || t.push(this._markers[n]);
            return t;
          },
          getChildCount: function() {
            return this._childCount;
          },
          zoomToBounds: function(t) {
            for (
              var e,
                i = this._childClusters.slice(),
                n = this._group._map,
                o = n.getBoundsZoom(this._bounds),
                s = this._zoom + 1,
                r = n.getZoom();
              i.length > 0 && o > s;

            ) {
              s++;
              var a = [];
              for (e = 0; e < i.length; e++) a = a.concat(i[e]._childClusters);
              i = a;
            }
            o > s
              ? this._group._map.setView(this._latlng, s)
              : r >= o
              ? this._group._map.setView(this._latlng, r + 1)
              : this._group._map.fitBounds(this._bounds, t);
          },
          getBounds: function() {
            var t = new L.LatLngBounds();
            return t.extend(this._bounds), t;
          },
          _updateIcon: function() {
            (this._iconNeedsUpdate = !0), this._icon && this.setIcon(this);
          },
          createIcon: function() {
            return (
              this._iconNeedsUpdate &&
                ((this._iconObj = this._group.options.iconCreateFunction(this)), (this._iconNeedsUpdate = !1)),
              this._iconObj.createIcon()
            );
          },
          createShadow: function() {
            return this._iconObj.createShadow();
          },
          _addChild: function(t, e) {
            (this._iconNeedsUpdate = !0),
              (this._boundsNeedUpdate = !0),
              this._setClusterCenter(t),
              t instanceof L.MarkerCluster
                ? (e || (this._childClusters.push(t), (t.__parent = this)), (this._childCount += t._childCount))
                : (e || this._markers.push(t), this._childCount++),
              this.__parent && this.__parent._addChild(t, !0);
          },
          _setClusterCenter: function(t) {
            this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng);
          },
          _resetBounds: function() {
            var t = this._bounds;
            t._southWest && ((t._southWest.lat = 1 / 0), (t._southWest.lng = 1 / 0)),
              t._northEast && ((t._northEast.lat = -1 / 0), (t._northEast.lng = -1 / 0));
          },
          _recalculateBounds: function() {
            var t,
              e,
              i,
              n,
              o = this._markers,
              s = this._childClusters,
              r = 0,
              a = 0,
              h = this._childCount;
            if (0 !== h) {
              for (this._resetBounds(), t = 0; t < o.length; t++)
                (i = o[t]._latlng), this._bounds.extend(i), (r += i.lat), (a += i.lng);
              for (t = 0; t < s.length; t++)
                (e = s[t])._boundsNeedUpdate && e._recalculateBounds(),
                  this._bounds.extend(e._bounds),
                  (i = e._wLatLng),
                  (n = e._childCount),
                  (r += i.lat * n),
                  (a += i.lng * n);
              (this._latlng = this._wLatLng = new L.LatLng(r / h, a / h)), (this._boundsNeedUpdate = !1);
            }
          },
          _addToMap: function(t) {
            t && ((this._backupLatlng = this._latlng), this.setLatLng(t)), this._group._featureGroup.addLayer(this);
          },
          _recursivelyAnimateChildrenIn: function(t, e, i) {
            this._recursively(
              t,
              this._group._map.getMinZoom(),
              i - 1,
              function(t) {
                var i,
                  n,
                  o = t._markers;
                for (i = o.length - 1; i >= 0; i--) (n = o[i])._icon && (n._setPos(e), n.clusterHide());
              },
              function(t) {
                var i,
                  n,
                  o = t._childClusters;
                for (i = o.length - 1; i >= 0; i--) (n = o[i])._icon && (n._setPos(e), n.clusterHide());
              }
            );
          },
          _recursivelyAnimateChildrenInAndAddSelfToMap: function(t, e, i, n) {
            this._recursively(t, n, e, function(o) {
              o._recursivelyAnimateChildrenIn(t, o._group._map.latLngToLayerPoint(o.getLatLng()).round(), i),
                o._isSingleParent() && i - 1 === n
                  ? (o.clusterShow(), o._recursivelyRemoveChildrenFromMap(t, e, i))
                  : o.clusterHide(),
                o._addToMap();
            });
          },
          _recursivelyBecomeVisible: function(t, e) {
            this._recursively(t, this._group._map.getMinZoom(), e, null, function(t) {
              t.clusterShow();
            });
          },
          _recursivelyAddChildrenToMap: function(t, e, i) {
            this._recursively(
              i,
              this._group._map.getMinZoom() - 1,
              e,
              function(n) {
                if (e !== n._zoom)
                  for (var o = n._markers.length - 1; o >= 0; o--) {
                    var s = n._markers[o];
                    i.contains(s._latlng) &&
                      (t && ((s._backupLatlng = s.getLatLng()), s.setLatLng(t), s.clusterHide && s.clusterHide()),
                      n._group._featureGroup.addLayer(s));
                  }
              },
              function(e) {
                e._addToMap(t);
              }
            );
          },
          _recursivelyRestoreChildPositions: function(t) {
            for (var e = this._markers.length - 1; e >= 0; e--) {
              var i = this._markers[e];
              i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng);
            }
            if (t - 1 === this._zoom)
              for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n]._restorePosition();
            else
              for (var o = this._childClusters.length - 1; o >= 0; o--)
                this._childClusters[o]._recursivelyRestoreChildPositions(t);
          },
          _restorePosition: function() {
            this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
          },
          _recursivelyRemoveChildrenFromMap: function(t, e, i, n) {
            var o, s;
            this._recursively(
              t,
              e - 1,
              i - 1,
              function(t) {
                for (s = t._markers.length - 1; s >= 0; s--)
                  (o = t._markers[s]),
                    (n && n.contains(o._latlng)) ||
                      (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow());
              },
              function(t) {
                for (s = t._childClusters.length - 1; s >= 0; s--)
                  (o = t._childClusters[s]),
                    (n && n.contains(o._latlng)) ||
                      (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow());
              }
            );
          },
          _recursively: function(t, e, i, n, o) {
            var s,
              r,
              a = this._childClusters,
              h = this._zoom;
            if ((h >= e && (n && n(this), o && h === i && o(this)), e > h || i > h))
              for (s = a.length - 1; s >= 0; s--)
                (r = a[s])._boundsNeedUpdate && r._recalculateBounds(),
                  t.intersects(r._bounds) && r._recursively(t, e, i, n, o);
          },
          _isSingleParent: function() {
            return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
          }
        }));
        L.Marker.include({
          clusterHide: function() {
            var t = this.options.opacity;
            return this.setOpacity(0), (this.options.opacity = t), this;
          },
          clusterShow: function() {
            return this.setOpacity(this.options.opacity);
          }
        }),
          (L.DistanceGrid = function(t) {
            (this._cellSize = t), (this._sqCellSize = t * t), (this._grid = {}), (this._objectPoint = {});
          }),
          (L.DistanceGrid.prototype = {
            addObject: function(t, e) {
              var i = this._getCoord(e.x),
                n = this._getCoord(e.y),
                o = this._grid,
                s = (o[n] = o[n] || {}),
                r = (s[i] = s[i] || []),
                a = L.Util.stamp(t);
              (this._objectPoint[a] = e), r.push(t);
            },
            updateObject: function(t, e) {
              this.removeObject(t), this.addObject(t, e);
            },
            removeObject: function(t, e) {
              var i,
                n,
                o = this._getCoord(e.x),
                s = this._getCoord(e.y),
                r = this._grid,
                a = (r[s] = r[s] || {}),
                h = (a[o] = a[o] || []);
              for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = h.length; n > i; i++)
                if (h[i] === t) return h.splice(i, 1), 1 === n && delete a[o], !0;
            },
            eachObject: function(t, e) {
              var i,
                n,
                o,
                s,
                r,
                a,
                h = this._grid;
              for (i in h)
                for (n in (r = h[i])) for (o = 0, s = (a = r[n]).length; s > o; o++) t.call(e, a[o]) && (o--, s--);
            },
            getNearObject: function(t) {
              var e,
                i,
                n,
                o,
                s,
                r,
                a,
                h,
                l = this._getCoord(t.x),
                u = this._getCoord(t.y),
                c = this._objectPoint,
                _ = this._sqCellSize,
                d = null;
              for (e = u - 1; u + 1 >= e; e++)
                if ((o = this._grid[e]))
                  for (i = l - 1; l + 1 >= i; i++)
                    if ((s = o[i]))
                      for (n = 0, r = s.length; r > n; n++)
                        (a = s[n]),
                          (_ > (h = this._sqDist(c[L.Util.stamp(a)], t)) || (_ >= h && null === d)) &&
                            ((_ = h), (d = a));
              return d;
            },
            _getCoord: function(t) {
              var e = Math.floor(t / this._cellSize);
              return isFinite(e) ? e : t;
            },
            _sqDist: function(t, e) {
              var i = e.x - t.x,
                n = e.y - t.y;
              return i * i + n * n;
            }
          }),
          (L.QuickHull = {
            getDistant: function(t, e) {
              var i = e[1].lat - e[0].lat;
              return (e[0].lng - e[1].lng) * (t.lat - e[0].lat) + i * (t.lng - e[0].lng);
            },
            findMostDistantPointFromBaseLine: function(t, e) {
              var i,
                n,
                o,
                s = 0,
                r = null,
                a = [];
              for (i = e.length - 1; i >= 0; i--)
                (n = e[i]), (o = this.getDistant(n, t)) > 0 && (a.push(n), o > s && ((s = o), (r = n)));
              return { maxPoint: r, newPoints: a };
            },
            buildConvexHull: function(t, e) {
              var i = [],
                n = this.findMostDistantPointFromBaseLine(t, e);
              return n.maxPoint
                ? (i = (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints))).concat(
                    this.buildConvexHull([n.maxPoint, t[1]], n.newPoints)
                  ))
                : [t[0]];
            },
            getConvexHull: function(t) {
              var e,
                i = !1,
                n = !1,
                o = !1,
                s = !1,
                r = null,
                a = null,
                h = null,
                l = null,
                u = null,
                c = null;
              for (e = t.length - 1; e >= 0; e--) {
                var _ = t[e];
                (!1 === i || _.lat > i) && ((r = _), (i = _.lat)),
                  (!1 === n || _.lat < n) && ((a = _), (n = _.lat)),
                  (!1 === o || _.lng > o) && ((h = _), (o = _.lng)),
                  (!1 === s || _.lng < s) && ((l = _), (s = _.lng));
              }
              return (
                n !== i ? ((c = a), (u = r)) : ((c = l), (u = h)),
                [].concat(this.buildConvexHull([c, u], t), this.buildConvexHull([u, c], t))
              );
            }
          }),
          L.MarkerCluster.include({
            getConvexHull: function() {
              var t,
                e,
                i = this.getAllChildMarkers(),
                n = [];
              for (e = i.length - 1; e >= 0; e--) (t = i[e].getLatLng()), n.push(t);
              return L.QuickHull.getConvexHull(n);
            }
          }),
          L.MarkerCluster.include({
            _2PI: 2 * Math.PI,
            _circleFootSeparation: 25,
            _circleStartAngle: 0,
            _spiralFootSeparation: 28,
            _spiralLengthStart: 11,
            _spiralLengthFactor: 5,
            _circleSpiralSwitchover: 9,
            spiderfy: function() {
              if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                var t,
                  e = this.getAllChildMarkers(null, !0),
                  i = this._group._map.latLngToLayerPoint(this._latlng);
                this._group._unspiderfy(),
                  (this._group._spiderfied = this),
                  e.length >= this._circleSpiralSwitchover
                    ? (t = this._generatePointsSpiral(e.length, i))
                    : ((i.y += 10), (t = this._generatePointsCircle(e.length, i))),
                  this._animationSpiderfy(e, t);
              }
            },
            unspiderfy: function(t) {
              this._group._inZoomAnimation || (this._animationUnspiderfy(t), (this._group._spiderfied = null));
            },
            _generatePointsCircle: function(t, e) {
              var i,
                n,
                o = (this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t)) / this._2PI,
                s = this._2PI / t,
                r = [];
              for (o = Math.max(o, 35), r.length = t, i = 0; t > i; i++)
                (n = this._circleStartAngle + i * s),
                  (r[i] = new L.Point(e.x + o * Math.cos(n), e.y + o * Math.sin(n))._round());
              return r;
            },
            _generatePointsSpiral: function(t, e) {
              var i,
                n = this._group.options.spiderfyDistanceMultiplier,
                o = n * this._spiralLengthStart,
                s = n * this._spiralFootSeparation,
                r = n * this._spiralLengthFactor * this._2PI,
                a = 0,
                h = [];
              for (h.length = t, i = t; i >= 0; i--)
                t > i && (h[i] = new L.Point(e.x + o * Math.cos(a), e.y + o * Math.sin(a))._round()),
                  (o += r / (a += s / o + 5e-4 * i));
              return h;
            },
            _noanimationUnspiderfy: function() {
              var t,
                e,
                i = this._group,
                n = i._map,
                o = i._featureGroup,
                s = this.getAllChildMarkers(null, !0);
              for (i._ignoreMove = !0, this.setOpacity(1), e = s.length - 1; e >= 0; e--)
                (t = s[e]),
                  o.removeLayer(t),
                  t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng),
                  t.setZIndexOffset && t.setZIndexOffset(0),
                  t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);
              i.fire('unspiderfied', { cluster: this, markers: s }), (i._ignoreMove = !1), (i._spiderfied = null);
            }
          }),
          (L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
            _animationSpiderfy: function(t, e) {
              var i,
                n,
                o,
                s,
                r = this._group,
                a = r._map,
                h = r._featureGroup,
                l = this._group.options.spiderLegPolylineOptions;
              for (r._ignoreMove = !0, i = 0; i < t.length; i++)
                (s = a.layerPointToLatLng(e[i])),
                  (n = t[i]),
                  (o = new L.Polyline([this._latlng, s], l)),
                  a.addLayer(o),
                  (n._spiderLeg = o),
                  (n._preSpiderfyLatlng = n._latlng),
                  n.setLatLng(s),
                  n.setZIndexOffset && n.setZIndexOffset(1e6),
                  h.addLayer(n);
              this.setOpacity(0.3), (r._ignoreMove = !1), r.fire('spiderfied', { cluster: this, markers: t });
            },
            _animationUnspiderfy: function() {
              this._noanimationUnspiderfy();
            }
          })),
          L.MarkerCluster.include({
            _animationSpiderfy: function(t, e) {
              var i,
                n,
                o,
                s,
                r,
                a,
                h = this,
                l = this._group,
                u = l._map,
                c = l._featureGroup,
                _ = this._latlng,
                d = u.latLngToLayerPoint(_),
                p = L.Path.SVG,
                m = L.extend({}, this._group.options.spiderLegPolylineOptions),
                f = m.opacity;
              for (
                void 0 === f && (f = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),
                  p
                    ? ((m.opacity = 0), (m.className = (m.className || '') + ' leaflet-cluster-spider-leg'))
                    : (m.opacity = f),
                  l._ignoreMove = !0,
                  i = 0;
                i < t.length;
                i++
              )
                (n = t[i]),
                  (a = u.layerPointToLatLng(e[i])),
                  (o = new L.Polyline([_, a], m)),
                  u.addLayer(o),
                  (n._spiderLeg = o),
                  p &&
                    ((r = (s = o._path).getTotalLength() + 0.1),
                    (s.style.strokeDasharray = r),
                    (s.style.strokeDashoffset = r)),
                  n.setZIndexOffset && n.setZIndexOffset(1e6),
                  n.clusterHide && n.clusterHide(),
                  c.addLayer(n),
                  n._setPos && n._setPos(d);
              for (l._forceLayout(), l._animationStart(), i = t.length - 1; i >= 0; i--)
                (a = u.layerPointToLatLng(e[i])),
                  ((n = t[i])._preSpiderfyLatlng = n._latlng),
                  n.setLatLng(a),
                  n.clusterShow && n.clusterShow(),
                  p && (((s = (o = n._spiderLeg)._path).style.strokeDashoffset = 0), o.setStyle({ opacity: f }));
              this.setOpacity(0.3),
                (l._ignoreMove = !1),
                setTimeout(function() {
                  l._animationEnd(), l.fire('spiderfied', { cluster: h, markers: t });
                }, 200);
            },
            _animationUnspiderfy: function(t) {
              var e,
                i,
                n,
                o,
                s,
                r,
                a = this,
                h = this._group,
                l = h._map,
                u = h._featureGroup,
                c = t ? l._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : l.latLngToLayerPoint(this._latlng),
                _ = this.getAllChildMarkers(null, !0),
                d = L.Path.SVG;
              for (h._ignoreMove = !0, h._animationStart(), this.setOpacity(1), i = _.length - 1; i >= 0; i--)
                (e = _[i])._preSpiderfyLatlng &&
                  (e.closePopup(),
                  e.setLatLng(e._preSpiderfyLatlng),
                  delete e._preSpiderfyLatlng,
                  (r = !0),
                  e._setPos && (e._setPos(c), (r = !1)),
                  e.clusterHide && (e.clusterHide(), (r = !1)),
                  r && u.removeLayer(e),
                  d &&
                    ((s = (o = (n = e._spiderLeg)._path).getTotalLength() + 0.1),
                    (o.style.strokeDashoffset = s),
                    n.setStyle({ opacity: 0 })));
              (h._ignoreMove = !1),
                setTimeout(function() {
                  var t = 0;
                  for (i = _.length - 1; i >= 0; i--) (e = _[i])._spiderLeg && t++;
                  for (i = _.length - 1; i >= 0; i--)
                    (e = _[i])._spiderLeg &&
                      (e.clusterShow && e.clusterShow(),
                      e.setZIndexOffset && e.setZIndexOffset(0),
                      t > 1 && u.removeLayer(e),
                      l.removeLayer(e._spiderLeg),
                      delete e._spiderLeg);
                  h._animationEnd(), h.fire('unspiderfied', { cluster: a, markers: _ });
                }, 200);
            }
          }),
          L.MarkerClusterGroup.include({
            _spiderfied: null,
            unspiderfy: function() {
              this._unspiderfy.apply(this, arguments);
            },
            _spiderfierOnAdd: function() {
              this._map.on('click', this._unspiderfyWrapper, this),
                this._map.options.zoomAnimation && this._map.on('zoomstart', this._unspiderfyZoomStart, this),
                this._map.on('zoomend', this._noanimationUnspiderfy, this),
                L.Browser.touch || this._map.getRenderer(this);
            },
            _spiderfierOnRemove: function() {
              this._map.off('click', this._unspiderfyWrapper, this),
                this._map.off('zoomstart', this._unspiderfyZoomStart, this),
                this._map.off('zoomanim', this._unspiderfyZoomAnim, this),
                this._map.off('zoomend', this._noanimationUnspiderfy, this),
                this._noanimationUnspiderfy();
            },
            _unspiderfyZoomStart: function() {
              this._map && this._map.on('zoomanim', this._unspiderfyZoomAnim, this);
            },
            _unspiderfyZoomAnim: function(t) {
              L.DomUtil.hasClass(this._map._mapPane, 'leaflet-touching') ||
                (this._map.off('zoomanim', this._unspiderfyZoomAnim, this), this._unspiderfy(t));
            },
            _unspiderfyWrapper: function() {
              this._unspiderfy();
            },
            _unspiderfy: function(t) {
              this._spiderfied && this._spiderfied.unspiderfy(t);
            },
            _noanimationUnspiderfy: function() {
              this._spiderfied && this._spiderfied._noanimationUnspiderfy();
            },
            _unspiderfyLayer: function(t) {
              t._spiderLeg &&
                (this._featureGroup.removeLayer(t),
                t.clusterShow && t.clusterShow(),
                t.setZIndexOffset && t.setZIndexOffset(0),
                this._map.removeLayer(t._spiderLeg),
                delete t._spiderLeg);
            }
          }),
          L.MarkerClusterGroup.include({
            refreshClusters: function(t) {
              return (
                t
                  ? t instanceof L.MarkerClusterGroup
                    ? (t = t._topClusterLevel.getAllChildMarkers())
                    : t instanceof L.LayerGroup
                    ? (t = t._layers)
                    : t instanceof L.MarkerCluster
                    ? (t = t.getAllChildMarkers())
                    : t instanceof L.Marker && (t = [t])
                  : (t = this._topClusterLevel.getAllChildMarkers()),
                this._flagParentsIconsNeedUpdate(t),
                this._refreshClustersIcons(),
                this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t),
                this
              );
            },
            _flagParentsIconsNeedUpdate: function(t) {
              var e, i;
              for (e in t) for (i = t[e].__parent; i; ) (i._iconNeedsUpdate = !0), (i = i.__parent);
            },
            _refreshSingleMarkerModeMarkers: function(t) {
              var e, i;
              for (e in t) (i = t[e]), this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i));
            }
          }),
          L.Marker.include({
            refreshIconOptions: function(t, e) {
              var i = this.options.icon;
              return (
                L.setOptions(i, t),
                this.setIcon(i),
                e && this.__parent && this.__parent._group.refreshClusters(this),
                this
              );
            }
          }),
          (t.MarkerClusterGroup = e),
          (t.MarkerCluster = i);
      })(e);
    },
    1202: function(t, e, i) {},
    1203: function(t, e, i) {},
    1204: function(t, e, i) {
      'use strict';
      (L.TileLayer.ColorFilter = L.TileLayer.extend({
        intialize: function(t, e) {
          L.TileLayer.prototype.initialize.call(this, t, e);
        },
        colorFilter: function() {
          var t = [
            'blur:px',
            'brightness:%',
            'bright:brightness:%',
            'bri:brightness:%',
            'contrast:%',
            'con:contrast:%',
            'grayscale:%',
            'gray:grayscale:%',
            'hue-rotate:deg',
            'hue:hue-rotate:deg',
            'hue-rotation:hue-rotate:deg',
            'invert:%',
            'inv:invert:%',
            'opacity:%',
            'op:opacity:%',
            'saturate:%',
            'saturation:saturate:%',
            'sat:saturate:%',
            'sepia:%',
            'sep:sepia:%'
          ];
          return (this.options.filter ? this.options.filter : [])
            .map(function(e) {
              var i = e.toLowerCase().split(':');
              if (2 === i.length) {
                var n = t.find(function(t) {
                  return t.split(':')[0] === i[0];
                });
                if (n)
                  return (
                    (n = n.split(':')),
                    (i[1] += /^\d+$/.test(i[1]) ? n[n.length - 1] : ''),
                    ''.concat(n[n.length - 2], '(').concat(i[1], ')')
                  );
              }
              return '';
            })
            .join(' ');
        },
        _initContainer: function() {
          L.TileLayer.prototype._initContainer.call(this), (this._container.style.filter = this.colorFilter());
        },
        updateFilter: function(t) {
          (this.options.filter = t), this._container && (this._container.style.filter = this.colorFilter());
        }
      })),
        (L.tileLayer.colorFilter = function(t, e) {
          return new L.TileLayer.ColorFilter(t, e);
        });
    },
    2133: function(t, e, i) {
      'use strict';
      i.d(e, 'b', function() {
        return s;
      }),
        i.d(e, 'a', function() {
          return r;
        });
      i(1096), i(2134);
      var n = i(0),
        o = Object(n.createContext)({}),
        s = function() {
          return Object(n.useContext)(o);
        },
        r = (o.Consumer, o.Provider);
    },
    2134: function(t, e, i) {
      'use strict';
      var n = i(287),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        s = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        r = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        a = {};
      function h(t) {
        return n.isMemo(t) ? r : a[t.$$typeof] || o;
      }
      (a[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (a[n.Memo] = r);
      var l = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        _ = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, i, n) {
        if ('string' !== typeof i) {
          if (p) {
            var o = d(i);
            o && o !== p && t(e, o, n);
          }
          var r = u(i);
          c && (r = r.concat(c(i)));
          for (var a = h(e), m = h(i), f = 0; f < r.length; ++f) {
            var g = r[f];
            if (!s[g] && (!n || !n[g]) && (!m || !m[g]) && (!a || !a[g])) {
              var v = _(i, g);
              try {
                l(e, g, v);
              } catch (y) {}
            }
          }
        }
        return e;
      };
    },
    2145: function(t, e, i) {
      'use strict';
      var n = i(1096);
      function o(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function s(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
      }
      function r(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = i),
          t
        );
      }
      var a = i(971),
        h = i(0),
        l = i.n(h),
        u = i(2133),
        c = /^on(.+)$/i,
        _ = (function(t) {
          function e(e) {
            var i;
            return (
              r(o((i = t.call(this, e) || this)), '_leafletEvents', void 0),
              r(o(i), 'leafletElement', void 0),
              (i._leafletEvents = i.extractLeafletEvents(e)),
              i
            );
          }
          s(e, t);
          var i = e.prototype;
          return (
            (i.componentDidMount = function() {
              this.bindLeafletEvents(this._leafletEvents);
            }),
            (i.componentDidUpdate = function(t) {
              this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
            }),
            (i.componentWillUnmount = function() {
              var t = this,
                e = this.leafletElement;
              e &&
                Object.keys(this._leafletEvents).forEach(function(i) {
                  e.off(i, t._leafletEvents[i]);
                });
            }),
            (i.extractLeafletEvents = function(t) {
              return Object.keys(t).reduce(function(e, i) {
                c.test(i) &&
                  (null != t[i] &&
                    (e[
                      i.replace(c, function(t, e) {
                        return e.toLowerCase();
                      })
                    ] = t[i]));
                return e;
              }, {});
            }),
            (i.bindLeafletEvents = function(t, e) {
              void 0 === t && (t = {}), void 0 === e && (e = {});
              var i = this.leafletElement;
              if (null == i || null == i.on) return {};
              var o = Object(n.a)({}, e);
              return (
                Object.keys(e).forEach(function(n) {
                  (null != t[n] && e[n] === t[n]) || (delete o[n], i.off(n, e[n]));
                }),
                Object.keys(t).forEach(function(n) {
                  (null != e[n] && t[n] === e[n]) || ((o[n] = t[n]), i.on(n, t[n]));
                }),
                o
              );
            }),
            (i.fireLeafletEvent = function(t, e) {
              var i = this.leafletElement;
              i && i.fire(t, e);
            }),
            e
          );
        })(h.Component),
        d = function(t) {
          return void 0 === t && (t = ''), t.split(' ').filter(Boolean);
        },
        p = function(t, e, i) {
          null != t &&
            i !== e &&
            (null != e &&
              e.length > 0 &&
              (function(t, e) {
                d(e).forEach(function(e) {
                  a.DomUtil.removeClass(t, e);
                });
              })(t, e),
            null != i &&
              i.length > 0 &&
              (function(t, e) {
                d(e).forEach(function(e) {
                  a.DomUtil.addClass(t, e);
                });
              })(t, i));
        };
      function m(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
        return Object.keys(t).reduce(function(e, n) {
          return -1 === i.indexOf(n) && (e[n] = t[n]), e;
        }, {});
      }
      i.d(e, 'a', function() {
        return v;
      });
      var f = ['children', 'className', 'id', 'style', 'useFlyTo', 'whenReady'],
        g = function(t) {
          return Array.isArray(t) ? [t[0], t[1]] : [t.lat, t.lon ? t.lon : t.lng];
        },
        v = (function(t) {
          function e(e) {
            var i;
            return (
              r(o((i = t.call(this, e) || this)), 'className', void 0),
              r(o(i), 'contextValue', void 0),
              r(o(i), 'container', void 0),
              r(o(i), 'viewport', { center: void 0, zoom: void 0 }),
              r(o(i), '_ready', !1),
              r(o(i), '_updating', !1),
              r(o(i), 'onViewportChange', function() {
                var t = i.leafletElement.getCenter();
                (i.viewport = { center: t ? [t.lat, t.lng] : void 0, zoom: i.leafletElement.getZoom() }),
                  i.props.onViewportChange && !i._updating && i.props.onViewportChange(i.viewport);
              }),
              r(o(i), 'onViewportChanged', function() {
                i.props.onViewportChanged && !i._updating && i.props.onViewportChanged(i.viewport);
              }),
              r(o(i), 'bindContainer', function(t) {
                i.container = t;
              }),
              (i.className = e.className),
              i
            );
          }
          s(e, t);
          var i = e.prototype;
          return (
            (i.createLeafletElement = function(t) {
              var e = t.viewport,
                i = (function(t, e) {
                  if (null == t) return {};
                  var i,
                    n,
                    o = {},
                    s = Object.keys(t);
                  for (n = 0; n < s.length; n++) (i = s[n]), e.indexOf(i) >= 0 || (o[i] = t[i]);
                  return o;
                })(t, ['viewport']);
              return (
                e && (e.center && (i.center = e.center), 'number' === typeof e.zoom && (i.zoom = e.zoom)),
                new a.Map(this.container, i)
              );
            }),
            (i.updateLeafletElement = function(t, e) {
              this._updating = !0;
              var i = e.bounds,
                n = e.boundsOptions,
                o = e.boxZoom,
                s = e.center,
                r = e.className,
                a = e.doubleClickZoom,
                h = e.dragging,
                l = e.keyboard,
                u = e.maxBounds,
                c = e.scrollWheelZoom,
                _ = e.tap,
                d = e.touchZoom,
                m = e.useFlyTo,
                f = e.viewport,
                g = e.zoom;
              if ((p(this.container, t.className, r), f && f !== t.viewport)) {
                var v = f.center ? f.center : s,
                  y = null == f.zoom ? g : f.zoom;
                !0 === m
                  ? this.leafletElement.flyTo(v, y, this.getZoomPanOptions(e))
                  : this.leafletElement.setView(v, y, this.getZoomPanOptions(e));
              } else
                s && this.shouldUpdateCenter(s, t.center)
                  ? !0 === m
                    ? this.leafletElement.flyTo(s, g, this.getZoomPanOptions(e))
                    : this.leafletElement.setView(s, g, this.getZoomPanOptions(e))
                  : 'number' === typeof g &&
                    g !== t.zoom &&
                    (null == t.zoom
                      ? this.leafletElement.setView(s, g, this.getZoomPanOptions(e))
                      : this.leafletElement.setZoom(g, this.getZoomPanOptions(e)));
              u && this.shouldUpdateBounds(u, t.maxBounds) && this.leafletElement.setMaxBounds(u),
                i &&
                  (this.shouldUpdateBounds(i, t.bounds) || n !== t.boundsOptions) &&
                  (!0 === m
                    ? this.leafletElement.flyToBounds(i, this.getFitBoundsOptions(e))
                    : this.leafletElement.fitBounds(i, this.getFitBoundsOptions(e))),
                o !== t.boxZoom &&
                  (!0 === o ? this.leafletElement.boxZoom.enable() : this.leafletElement.boxZoom.disable()),
                a !== t.doubleClickZoom &&
                  (!0 === a || 'string' === typeof a
                    ? ((this.leafletElement.options.doubleClickZoom = a), this.leafletElement.doubleClickZoom.enable())
                    : this.leafletElement.doubleClickZoom.disable()),
                h !== t.dragging &&
                  (!0 === h ? this.leafletElement.dragging.enable() : this.leafletElement.dragging.disable()),
                l !== t.keyboard &&
                  (!0 === l ? this.leafletElement.keyboard.enable() : this.leafletElement.keyboard.disable()),
                c !== t.scrollWheelZoom &&
                  (!0 === c || 'string' === typeof c
                    ? ((this.leafletElement.options.scrollWheelZoom = c), this.leafletElement.scrollWheelZoom.enable())
                    : this.leafletElement.scrollWheelZoom.disable()),
                _ !== t.tap && (!0 === _ ? this.leafletElement.tap.enable() : this.leafletElement.tap.disable()),
                d !== t.touchZoom &&
                  (!0 === d || 'string' === typeof d
                    ? ((this.leafletElement.options.touchZoom = d), this.leafletElement.touchZoom.enable())
                    : this.leafletElement.touchZoom.disable()),
                (this._updating = !1);
            }),
            (i.getZoomPanOptions = function(t) {
              return {
                animate: t.animate,
                duration: t.duration,
                easeLinearity: t.easeLinearity,
                noMoveStart: t.noMoveStart
              };
            }),
            (i.getFitBoundsOptions = function(t) {
              var e = this.getZoomPanOptions(t);
              return Object(n.a)({}, e, {}, t.boundsOptions);
            }),
            (i.componentDidMount = function() {
              var e = m.apply(void 0, [this.props].concat(f));
              (this.leafletElement = this.createLeafletElement(e)),
                this.leafletElement.on('move', this.onViewportChange),
                this.leafletElement.on('moveend', this.onViewportChanged),
                null != e.bounds && this.leafletElement.fitBounds(e.bounds, this.getFitBoundsOptions(e)),
                (this.contextValue = { layerContainer: this.leafletElement, map: this.leafletElement }),
                t.prototype.componentDidMount.call(this),
                this.forceUpdate();
            }),
            (i.componentDidUpdate = function(e) {
              !1 === this._ready &&
                ((this._ready = !0), this.props.whenReady && this.leafletElement.whenReady(this.props.whenReady)),
                t.prototype.componentDidUpdate.call(this, e),
                this.updateLeafletElement(e, this.props);
            }),
            (i.componentWillUnmount = function() {
              t.prototype.componentWillUnmount.call(this),
                this.leafletElement.off('move', this.onViewportChange),
                this.leafletElement.off('moveend', this.onViewportChanged),
                !0 === this.props.preferCanvas
                  ? (this.leafletElement._initEvents(!0), this.leafletElement._stop())
                  : this.leafletElement.remove();
            }),
            (i.shouldUpdateCenter = function(t, e) {
              return !e || ((t = g(t)), (e = g(e)), t[0] !== e[0] || t[1] !== e[1]);
            }),
            (i.shouldUpdateBounds = function(t, e) {
              return !e || !Object(a.latLngBounds)(t).equals(Object(a.latLngBounds)(e));
            }),
            (i.render = function() {
              return l.a.createElement(
                'div',
                { className: this.className, id: this.props.id, ref: this.bindContainer, style: this.props.style },
                this.contextValue ? l.a.createElement(u.a, { value: this.contextValue }, this.props.children) : null
              );
            }),
            e
          );
        })(_);
    },
    971: function(t, e, i) {
      !(function(t) {
        'use strict';
        var e = Object.freeze;
        function i(t) {
          var e, i, n, o;
          for (i = 1, n = arguments.length; i < n; i++) for (e in (o = arguments[i])) t[e] = o[e];
          return t;
        }
        Object.freeze = function(t) {
          return t;
        };
        var n =
          Object.create ||
          (function() {
            function t() {}
            return function(e) {
              return (t.prototype = e), new t();
            };
          })();
        function o(t, e) {
          var i = Array.prototype.slice;
          if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
          var n = i.call(arguments, 2);
          return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
          };
        }
        var s = 0;
        function r(t) {
          return (t._leaflet_id = t._leaflet_id || ++s), t._leaflet_id;
        }
        function a(t, e, i) {
          var n, o, s, r;
          return (
            (r = function() {
              (n = !1), o && (s.apply(i, o), (o = !1));
            }),
            (s = function() {
              n ? (o = arguments) : (t.apply(i, arguments), setTimeout(r, e), (n = !0));
            })
          );
        }
        function h(t, e, i) {
          var n = e[1],
            o = e[0],
            s = n - o;
          return t === n && i ? t : ((((t - o) % s) + s) % s) + o;
        }
        function l() {
          return !1;
        }
        function u(t, e) {
          var i = Math.pow(10, void 0 === e ? 6 : e);
          return Math.round(t * i) / i;
        }
        function c(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
        }
        function _(t) {
          return c(t).split(/\s+/);
        }
        function d(t, e) {
          for (var i in (t.hasOwnProperty('options') || (t.options = t.options ? n(t.options) : {}), e))
            t.options[i] = e[i];
          return t.options;
        }
        function p(t, e, i) {
          var n = [];
          for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + '=' + encodeURIComponent(t[o]));
          return (e && -1 !== e.indexOf('?') ? '&' : '?') + n.join('&');
        }
        var m = /\{ *([\w_-]+) *\}/g;
        function f(t, e) {
          return t.replace(m, function(t, i) {
            var n = e[i];
            if (void 0 === n) throw new Error('No value provided for variable ' + t);
            return 'function' === typeof n && (n = n(e)), n;
          });
        }
        var g =
          Array.isArray ||
          function(t) {
            return '[object Array]' === Object.prototype.toString.call(t);
          };
        function v(t, e) {
          for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
          return -1;
        }
        var y = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        function x(t) {
          return window['webkit' + t] || window['moz' + t] || window['ms' + t];
        }
        var w = 0;
        function b(t) {
          var e = +new Date(),
            i = Math.max(0, 16 - (e - w));
          return (w = e + i), window.setTimeout(t, i);
        }
        var P = window.requestAnimationFrame || x('RequestAnimationFrame') || b,
          C =
            window.cancelAnimationFrame ||
            x('CancelAnimationFrame') ||
            x('CancelRequestAnimationFrame') ||
            function(t) {
              window.clearTimeout(t);
            };
        function T(t, e, i) {
          if (!i || P !== b) return P.call(window, o(t, e));
          t.call(e);
        }
        function M(t) {
          t && C.call(window, t);
        }
        var z = (Object.freeze || Object)({
          freeze: e,
          extend: i,
          create: n,
          bind: o,
          lastId: s,
          stamp: r,
          throttle: a,
          wrapNum: h,
          falseFn: l,
          formatNum: u,
          trim: c,
          splitWords: _,
          setOptions: d,
          getParamString: p,
          template: f,
          isArray: g,
          indexOf: v,
          emptyImageUrl: y,
          requestFn: P,
          cancelFn: C,
          requestAnimFrame: T,
          cancelAnimFrame: M
        });
        function k() {}
        (k.extend = function(t) {
          var e = function() {
              this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
            },
            o = (e.__super__ = this.prototype),
            s = n(o);
          for (var r in ((s.constructor = e), (e.prototype = s), this))
            this.hasOwnProperty(r) && 'prototype' !== r && '__super__' !== r && (e[r] = this[r]);
          return (
            t.statics && (i(e, t.statics), delete t.statics),
            t.includes &&
              ((function(t) {
                if ('undefined' !== typeof L && L && L.Mixin) {
                  t = g(t) ? t : [t];
                  for (var e = 0; e < t.length; e++)
                    t[e] === L.Mixin.Events &&
                      console.warn(
                        'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
                        new Error().stack
                      );
                }
              })(t.includes),
              i.apply(null, [s].concat(t.includes)),
              delete t.includes),
            s.options && (t.options = i(n(s.options), t.options)),
            i(s, t),
            (s._initHooks = []),
            (s.callInitHooks = function() {
              if (!this._initHooksCalled) {
                o.callInitHooks && o.callInitHooks.call(this), (this._initHooksCalled = !0);
                for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this);
              }
            }),
            e
          );
        }),
          (k.include = function(t) {
            return i(this.prototype, t), this;
          }),
          (k.mergeOptions = function(t) {
            return i(this.prototype.options, t), this;
          }),
          (k.addInitHook = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
              i =
                'function' === typeof t
                  ? t
                  : function() {
                      this[t].apply(this, e);
                    };
            return (
              (this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(i), this
            );
          });
        var E = {
          on: function(t, e, i) {
            if ('object' === typeof t) for (var n in t) this._on(n, t[n], e);
            else for (var o = 0, s = (t = _(t)).length; o < s; o++) this._on(t[o], e, i);
            return this;
          },
          off: function(t, e, i) {
            if (t)
              if ('object' === typeof t) for (var n in t) this._off(n, t[n], e);
              else for (var o = 0, s = (t = _(t)).length; o < s; o++) this._off(t[o], e, i);
            else delete this._events;
            return this;
          },
          _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || ((n = []), (this._events[t] = n)), i === this && (i = void 0);
            for (var o = { fn: e, ctx: i }, s = n, r = 0, a = s.length; r < a; r++)
              if (s[r].fn === e && s[r].ctx === i) return;
            s.push(o);
          },
          _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
              if (e) {
                if ((i === this && (i = void 0), n))
                  for (o = 0, s = n.length; o < s; o++) {
                    var r = n[o];
                    if (r.ctx === i && r.fn === e)
                      return (r.fn = l), this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
                  }
              } else {
                for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
                delete this._events[t];
              }
          },
          fire: function(t, e, n) {
            if (!this.listens(t, n)) return this;
            var o = i({}, e, { type: t, target: this, sourceTarget: (e && e.sourceTarget) || this });
            if (this._events) {
              var s = this._events[t];
              if (s) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var r = 0, a = s.length; r < a; r++) {
                  var h = s[r];
                  h.fn.call(h.ctx || this, o);
                }
                this._firingCount--;
              }
            }
            return n && this._propagateEvent(o), this;
          },
          listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e) for (var n in this._eventParents) if (this._eventParents[n].listens(t, e)) return !0;
            return !1;
          },
          once: function(t, e, i) {
            if ('object' === typeof t) {
              for (var n in t) this.once(n, t[n], e);
              return this;
            }
            var s = o(function() {
              this.off(t, e, i).off(t, s, i);
            }, this);
            return this.on(t, e, i).on(t, s, i);
          },
          addEventParent: function(t) {
            return (this._eventParents = this._eventParents || {}), (this._eventParents[r(t)] = t), this;
          },
          removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[r(t)], this;
          },
          _propagateEvent: function(t) {
            for (var e in this._eventParents)
              this._eventParents[e].fire(t.type, i({ layer: t.target, propagatedFrom: t.target }, t), !0);
          }
        };
        (E.addEventListener = E.on),
          (E.removeEventListener = E.clearAllEventListeners = E.off),
          (E.addOneTimeEventListener = E.once),
          (E.fireEvent = E.fire),
          (E.hasEventListeners = E.listens);
        var S = k.extend(E);
        function Z(t, e, i) {
          (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
        }
        var O =
          Math.trunc ||
          function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t);
          };
        function B(t, e, i) {
          return t instanceof Z
            ? t
            : g(t)
            ? new Z(t[0], t[1])
            : void 0 === t || null === t
            ? t
            : 'object' === typeof t && 'x' in t && 'y' in t
            ? new Z(t.x, t.y)
            : new Z(t, e, i);
        }
        function A(t, e) {
          if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
        }
        function I(t, e) {
          return !t || t instanceof A ? t : new A(t, e);
        }
        function N(t, e) {
          if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
        }
        function R(t, e) {
          return t instanceof N ? t : new N(t, e);
        }
        function j(t, e, i) {
          if (isNaN(t) || isNaN(e)) throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
          (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
        }
        function D(t, e, i) {
          return t instanceof j
            ? t
            : g(t) && 'object' !== typeof t[0]
            ? 3 === t.length
              ? new j(t[0], t[1], t[2])
              : 2 === t.length
              ? new j(t[0], t[1])
              : null
            : void 0 === t || null === t
            ? t
            : 'object' === typeof t && 'lat' in t
            ? new j(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
            : void 0 === e
            ? null
            : new j(t, e, i);
        }
        (Z.prototype = {
          clone: function() {
            return new Z(this.x, this.y);
          },
          add: function(t) {
            return this.clone()._add(B(t));
          },
          _add: function(t) {
            return (this.x += t.x), (this.y += t.y), this;
          },
          subtract: function(t) {
            return this.clone()._subtract(B(t));
          },
          _subtract: function(t) {
            return (this.x -= t.x), (this.y -= t.y), this;
          },
          divideBy: function(t) {
            return this.clone()._divideBy(t);
          },
          _divideBy: function(t) {
            return (this.x /= t), (this.y /= t), this;
          },
          multiplyBy: function(t) {
            return this.clone()._multiplyBy(t);
          },
          _multiplyBy: function(t) {
            return (this.x *= t), (this.y *= t), this;
          },
          scaleBy: function(t) {
            return new Z(this.x * t.x, this.y * t.y);
          },
          unscaleBy: function(t) {
            return new Z(this.x / t.x, this.y / t.y);
          },
          round: function() {
            return this.clone()._round();
          },
          _round: function() {
            return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
          },
          floor: function() {
            return this.clone()._floor();
          },
          _floor: function() {
            return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
          },
          ceil: function() {
            return this.clone()._ceil();
          },
          _ceil: function() {
            return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
          },
          trunc: function() {
            return this.clone()._trunc();
          },
          _trunc: function() {
            return (this.x = O(this.x)), (this.y = O(this.y)), this;
          },
          distanceTo: function(t) {
            var e = (t = B(t)).x - this.x,
              i = t.y - this.y;
            return Math.sqrt(e * e + i * i);
          },
          equals: function(t) {
            return (t = B(t)).x === this.x && t.y === this.y;
          },
          contains: function(t) {
            return (t = B(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
          },
          toString: function() {
            return 'Point(' + u(this.x) + ', ' + u(this.y) + ')';
          }
        }),
          (A.prototype = {
            extend: function(t) {
              return (
                (t = B(t)),
                this.min || this.max
                  ? ((this.min.x = Math.min(t.x, this.min.x)),
                    (this.max.x = Math.max(t.x, this.max.x)),
                    (this.min.y = Math.min(t.y, this.min.y)),
                    (this.max.y = Math.max(t.y, this.max.y)))
                  : ((this.min = t.clone()), (this.max = t.clone())),
                this
              );
            },
            getCenter: function(t) {
              return new Z((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
            },
            getBottomLeft: function() {
              return new Z(this.min.x, this.max.y);
            },
            getTopRight: function() {
              return new Z(this.max.x, this.min.y);
            },
            getTopLeft: function() {
              return this.min;
            },
            getBottomRight: function() {
              return this.max;
            },
            getSize: function() {
              return this.max.subtract(this.min);
            },
            contains: function(t) {
              var e, i;
              return (
                (t = 'number' === typeof t[0] || t instanceof Z ? B(t) : I(t)) instanceof A
                  ? ((e = t.min), (i = t.max))
                  : (e = i = t),
                e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
              );
            },
            intersects: function(t) {
              t = I(t);
              var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= e.x && n.x <= i.x,
                r = o.y >= e.y && n.y <= i.y;
              return s && r;
            },
            overlaps: function(t) {
              t = I(t);
              var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x > e.x && n.x < i.x,
                r = o.y > e.y && n.y < i.y;
              return s && r;
            },
            isValid: function() {
              return !(!this.min || !this.max);
            }
          }),
          (N.prototype = {
            extend: function(t) {
              var e,
                i,
                n = this._southWest,
                o = this._northEast;
              if (t instanceof j) (e = t), (i = t);
              else {
                if (!(t instanceof N)) return t ? this.extend(D(t) || R(t)) : this;
                if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
              }
              return (
                n || o
                  ? ((n.lat = Math.min(e.lat, n.lat)),
                    (n.lng = Math.min(e.lng, n.lng)),
                    (o.lat = Math.max(i.lat, o.lat)),
                    (o.lng = Math.max(i.lng, o.lng)))
                  : ((this._southWest = new j(e.lat, e.lng)), (this._northEast = new j(i.lat, i.lng))),
                this
              );
            },
            pad: function(t) {
              var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                o = Math.abs(e.lng - i.lng) * t;
              return new N(new j(e.lat - n, e.lng - o), new j(i.lat + n, i.lng + o));
            },
            getCenter: function() {
              return new j(
                (this._southWest.lat + this._northEast.lat) / 2,
                (this._southWest.lng + this._northEast.lng) / 2
              );
            },
            getSouthWest: function() {
              return this._southWest;
            },
            getNorthEast: function() {
              return this._northEast;
            },
            getNorthWest: function() {
              return new j(this.getNorth(), this.getWest());
            },
            getSouthEast: function() {
              return new j(this.getSouth(), this.getEast());
            },
            getWest: function() {
              return this._southWest.lng;
            },
            getSouth: function() {
              return this._southWest.lat;
            },
            getEast: function() {
              return this._northEast.lng;
            },
            getNorth: function() {
              return this._northEast.lat;
            },
            contains: function(t) {
              t = 'number' === typeof t[0] || t instanceof j || 'lat' in t ? D(t) : R(t);
              var e,
                i,
                n = this._southWest,
                o = this._northEast;
              return (
                t instanceof N ? ((e = t.getSouthWest()), (i = t.getNorthEast())) : (e = i = t),
                e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
              );
            },
            intersects: function(t) {
              t = R(t);
              var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= e.lat && n.lat <= i.lat,
                r = o.lng >= e.lng && n.lng <= i.lng;
              return s && r;
            },
            overlaps: function(t) {
              t = R(t);
              var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > e.lat && n.lat < i.lat,
                r = o.lng > e.lng && n.lng < i.lng;
              return s && r;
            },
            toBBoxString: function() {
              return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
            },
            equals: function(t, e) {
              return (
                !!t &&
                ((t = R(t)), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
              );
            },
            isValid: function() {
              return !(!this._southWest || !this._northEast);
            }
          }),
          (j.prototype = {
            equals: function(t, e) {
              return (
                !!t &&
                ((t = D(t)),
                Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
              );
            },
            toString: function(t) {
              return 'LatLng(' + u(this.lat, t) + ', ' + u(this.lng, t) + ')';
            },
            distanceTo: function(t) {
              return F.distance(this, D(t));
            },
            wrap: function() {
              return F.wrapLatLng(this);
            },
            toBounds: function(t) {
              var e = (180 * t) / 40075017,
                i = e / Math.cos((Math.PI / 180) * this.lat);
              return R([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
            },
            clone: function() {
              return new j(this.lat, this.lng, this.alt);
            }
          });
        var G = {
            latLngToPoint: function(t, e) {
              var i = this.projection.project(t),
                n = this.scale(e);
              return this.transformation._transform(i, n);
            },
            pointToLatLng: function(t, e) {
              var i = this.scale(e),
                n = this.transformation.untransform(t, i);
              return this.projection.unproject(n);
            },
            project: function(t) {
              return this.projection.project(t);
            },
            unproject: function(t) {
              return this.projection.unproject(t);
            },
            scale: function(t) {
              return 256 * Math.pow(2, t);
            },
            zoom: function(t) {
              return Math.log(t / 256) / Math.LN2;
            },
            getProjectedBounds: function(t) {
              if (this.infinite) return null;
              var e = this.projection.bounds,
                i = this.scale(t);
              return new A(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i));
            },
            infinite: !1,
            wrapLatLng: function(t) {
              var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
              return new j(this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
            },
            wrapLatLngBounds: function(t) {
              var e = t.getCenter(),
                i = this.wrapLatLng(e),
                n = e.lat - i.lat,
                o = e.lng - i.lng;
              if (0 === n && 0 === o) return t;
              var s = t.getSouthWest(),
                r = t.getNorthEast();
              return new N(new j(s.lat - n, s.lng - o), new j(r.lat - n, r.lng - o));
            }
          },
          F = i({}, G, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, e) {
              var i = Math.PI / 180,
                n = t.lat * i,
                o = e.lat * i,
                s = Math.sin(((e.lat - t.lat) * i) / 2),
                r = Math.sin(((e.lng - t.lng) * i) / 2),
                a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
              return this.R * h;
            }
          }),
          U = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
              var e = Math.PI / 180,
                i = this.MAX_LATITUDE,
                n = Math.max(Math.min(i, t.lat), -i),
                o = Math.sin(n * e);
              return new Z(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
            },
            unproject: function(t) {
              var e = 180 / Math.PI;
              return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
            },
            bounds: (function() {
              var t = 6378137 * Math.PI;
              return new A([-t, -t], [t, t]);
            })()
          };
        function H(t, e, i, n) {
          if (g(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
          (this._a = t), (this._b = e), (this._c = i), (this._d = n);
        }
        function W(t, e, i, n) {
          return new H(t, e, i, n);
        }
        H.prototype = {
          transform: function(t, e) {
            return this._transform(t.clone(), e);
          },
          _transform: function(t, e) {
            return (e = e || 1), (t.x = e * (this._a * t.x + this._b)), (t.y = e * (this._c * t.y + this._d)), t;
          },
          untransform: function(t, e) {
            return (e = e || 1), new Z((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
          }
        };
        var V = i({}, F, {
            code: 'EPSG:3857',
            projection: U,
            transformation: (function() {
              var t = 0.5 / (Math.PI * U.R);
              return W(t, 0.5, -t, 0.5);
            })()
          }),
          q = i({}, V, { code: 'EPSG:900913' });
        function K(t) {
          return document.createElementNS('http://www.w3.org/2000/svg', t);
        }
        function Y(t, e) {
          var i,
            n,
            o,
            s,
            r,
            a,
            h = '';
          for (i = 0, o = t.length; i < o; i++) {
            for (n = 0, s = (r = t[i]).length; n < s; n++) h += (n ? 'L' : 'M') + (a = r[n]).x + ' ' + a.y;
            h += e ? (Mt ? 'z' : 'x') : '';
          }
          return h || 'M0 0';
        }
        var J = document.documentElement.style,
          X = 'ActiveXObject' in window,
          $ = X && !document.addEventListener,
          Q = 'msLaunchUri' in navigator && !('documentMode' in document),
          tt = kt('webkit'),
          et = kt('android'),
          it = kt('android 2') || kt('android 3'),
          nt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
          ot = et && kt('Google') && nt < 537 && !('AudioNode' in window),
          st = !!window.opera,
          rt = kt('chrome'),
          at = kt('gecko') && !tt && !st && !X,
          ht = !rt && kt('safari'),
          lt = kt('phantom'),
          ut = 'OTransition' in J,
          ct = 0 === navigator.platform.indexOf('Win'),
          _t = X && 'transition' in J,
          dt = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !it,
          pt = 'MozPerspective' in J,
          mt = !window.L_DISABLE_3D && (_t || dt || pt) && !ut && !lt,
          ft = 'undefined' !== typeof orientation || kt('mobile'),
          gt = ft && tt,
          vt = ft && dt,
          yt = !window.PointerEvent && window.MSPointerEvent,
          Lt = !tt && !(!window.PointerEvent && !yt),
          xt =
            !window.L_NO_TOUCH &&
            (Lt || 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
          wt = ft && st,
          bt = ft && at,
          Pt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
          Ct = function() {
            var t = !1;
            try {
              var e = Object.defineProperty({}, 'passive', {
                get: function() {
                  t = !0;
                }
              });
              window.addEventListener('testPassiveEventSupport', l, e),
                window.removeEventListener('testPassiveEventSupport', l, e);
            } catch (i) {}
            return t;
          },
          Tt = !!document.createElement('canvas').getContext,
          Mt = !(!document.createElementNS || !K('svg').createSVGRect),
          zt =
            !Mt &&
            (function() {
              try {
                var t = document.createElement('div');
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return (e.style.behavior = 'url(#default#VML)'), e && 'object' === typeof e.adj;
              } catch (i) {
                return !1;
              }
            })();
        function kt(t) {
          return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
        }
        var Et = (Object.freeze || Object)({
            ie: X,
            ielt9: $,
            edge: Q,
            webkit: tt,
            android: et,
            android23: it,
            androidStock: ot,
            opera: st,
            chrome: rt,
            gecko: at,
            safari: ht,
            phantom: lt,
            opera12: ut,
            win: ct,
            ie3d: _t,
            webkit3d: dt,
            gecko3d: pt,
            any3d: mt,
            mobile: ft,
            mobileWebkit: gt,
            mobileWebkit3d: vt,
            msPointer: yt,
            pointer: Lt,
            touch: xt,
            mobileOpera: wt,
            mobileGecko: bt,
            retina: Pt,
            passiveEvents: Ct,
            canvas: Tt,
            svg: Mt,
            vml: zt
          }),
          St = yt ? 'MSPointerDown' : 'pointerdown',
          Zt = yt ? 'MSPointerMove' : 'pointermove',
          Ot = yt ? 'MSPointerUp' : 'pointerup',
          Bt = yt ? 'MSPointerCancel' : 'pointercancel',
          At = ['INPUT', 'SELECT', 'OPTION'],
          It = {},
          Nt = !1,
          Rt = 0;
        function jt(t, e, i, n) {
          return (
            'touchstart' === e
              ? (function(t, e, i) {
                  var n = o(function(t) {
                    if (
                      'mouse' !== t.pointerType &&
                      t.MSPOINTER_TYPE_MOUSE &&
                      t.pointerType !== t.MSPOINTER_TYPE_MOUSE
                    ) {
                      if (!(At.indexOf(t.target.tagName) < 0)) return;
                      Ie(t);
                    }
                    Ut(t, e);
                  });
                  (t['_leaflet_touchstart' + i] = n),
                    t.addEventListener(St, n, !1),
                    Nt ||
                      (document.documentElement.addEventListener(St, Dt, !0),
                      document.documentElement.addEventListener(Zt, Gt, !0),
                      document.documentElement.addEventListener(Ot, Ft, !0),
                      document.documentElement.addEventListener(Bt, Ft, !0),
                      (Nt = !0));
                })(t, i, n)
              : 'touchmove' === e
              ? (function(t, e, i) {
                  var n = function(t) {
                    ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType) || 0 !== t.buttons) &&
                      Ut(t, e);
                  };
                  (t['_leaflet_touchmove' + i] = n), t.addEventListener(Zt, n, !1);
                })(t, i, n)
              : 'touchend' === e &&
                (function(t, e, i) {
                  var n = function(t) {
                    Ut(t, e);
                  };
                  (t['_leaflet_touchend' + i] = n), t.addEventListener(Ot, n, !1), t.addEventListener(Bt, n, !1);
                })(t, i, n),
            this
          );
        }
        function Dt(t) {
          (It[t.pointerId] = t), Rt++;
        }
        function Gt(t) {
          It[t.pointerId] && (It[t.pointerId] = t);
        }
        function Ft(t) {
          delete It[t.pointerId], Rt--;
        }
        function Ut(t, e) {
          for (var i in ((t.touches = []), It)) t.touches.push(It[i]);
          (t.changedTouches = [t]), e(t);
        }
        var Ht = yt ? 'MSPointerDown' : Lt ? 'pointerdown' : 'touchstart',
          Wt = yt ? 'MSPointerUp' : Lt ? 'pointerup' : 'touchend',
          Vt = '_leaflet_';
        function qt(t, e, i) {
          var n,
            o,
            s = !1,
            r = 250;
          function a(t) {
            var e;
            if (Lt) {
              if (!Q || 'mouse' === t.pointerType) return;
              e = Rt;
            } else e = t.touches.length;
            if (!(e > 1)) {
              var i = Date.now(),
                a = i - (n || i);
              (o = t.touches ? t.touches[0] : t), (s = a > 0 && a <= r), (n = i);
            }
          }
          function h(t) {
            if (s && !o.cancelBubble) {
              if (Lt) {
                if (!Q || 'mouse' === t.pointerType) return;
                var i,
                  r,
                  a = {};
                for (r in o) (i = o[r]), (a[r] = i && i.bind ? i.bind(o) : i);
                o = a;
              }
              (o.type = 'dblclick'), (o.button = 0), e(o), (n = null);
            }
          }
          return (
            (t[Vt + Ht + i] = a),
            (t[Vt + Wt + i] = h),
            (t[Vt + 'dblclick' + i] = e),
            t.addEventListener(Ht, a, !!Ct && { passive: !1 }),
            t.addEventListener(Wt, h, !!Ct && { passive: !1 }),
            t.addEventListener('dblclick', e, !1),
            this
          );
        }
        function Kt(t, e) {
          var i = t[Vt + Ht + e],
            n = t[Vt + Wt + e],
            o = t[Vt + 'dblclick' + e];
          return (
            t.removeEventListener(Ht, i, !!Ct && { passive: !1 }),
            t.removeEventListener(Wt, n, !!Ct && { passive: !1 }),
            Q || t.removeEventListener('dblclick', o, !1),
            this
          );
        }
        var Yt,
          Jt,
          Xt,
          $t,
          Qt,
          te = fe(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
          ee = fe(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
          ie = 'webkitTransition' === ee || 'OTransition' === ee ? ee + 'End' : 'transitionend';
        function ne(t) {
          return 'string' === typeof t ? document.getElementById(t) : t;
        }
        function oe(t, e) {
          var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
          if ((!i || 'auto' === i) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            i = n ? n[e] : null;
          }
          return 'auto' === i ? null : i;
        }
        function se(t, e, i) {
          var n = document.createElement(t);
          return (n.className = e || ''), i && i.appendChild(n), n;
        }
        function re(t) {
          var e = t.parentNode;
          e && e.removeChild(t);
        }
        function ae(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        function he(t) {
          var e = t.parentNode;
          e && e.lastChild !== t && e.appendChild(t);
        }
        function le(t) {
          var e = t.parentNode;
          e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
        }
        function ue(t, e) {
          if (void 0 !== t.classList) return t.classList.contains(e);
          var i = pe(t);
          return i.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(i);
        }
        function ce(t, e) {
          if (void 0 !== t.classList) for (var i = _(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
          else if (!ue(t, e)) {
            var s = pe(t);
            de(t, (s ? s + ' ' : '') + e);
          }
        }
        function _e(t, e) {
          void 0 !== t.classList ? t.classList.remove(e) : de(t, c((' ' + pe(t) + ' ').replace(' ' + e + ' ', ' ')));
        }
        function de(t, e) {
          void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
        }
        function pe(t) {
          return (
            t.correspondingElement && (t = t.correspondingElement),
            void 0 === t.className.baseVal ? t.className : t.className.baseVal
          );
        }
        function me(t, e) {
          'opacity' in t.style
            ? (t.style.opacity = e)
            : 'filter' in t.style &&
              (function(t, e) {
                var i = !1,
                  n = 'DXImageTransform.Microsoft.Alpha';
                try {
                  i = t.filters.item(n);
                } catch (o) {
                  if (1 === e) return;
                }
                (e = Math.round(100 * e)),
                  i
                    ? ((i.Enabled = 100 !== e), (i.Opacity = e))
                    : (t.style.filter += ' progid:' + n + '(opacity=' + e + ')');
              })(t, e);
        }
        function fe(t) {
          for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
          return !1;
        }
        function ge(t, e, i) {
          var n = e || new Z(0, 0);
          t.style[te] =
            (_t ? 'translate(' + n.x + 'px,' + n.y + 'px)' : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') +
            (i ? ' scale(' + i + ')' : '');
        }
        function ve(t, e) {
          (t._leaflet_pos = e), mt ? ge(t, e) : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
        }
        function ye(t) {
          return t._leaflet_pos || new Z(0, 0);
        }
        if ('onselectstart' in document)
          (Yt = function() {
            ze(window, 'selectstart', Ie);
          }),
            (Jt = function() {
              Ee(window, 'selectstart', Ie);
            });
        else {
          var Le = fe(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
          (Yt = function() {
            if (Le) {
              var t = document.documentElement.style;
              (Xt = t[Le]), (t[Le] = 'none');
            }
          }),
            (Jt = function() {
              Le && ((document.documentElement.style[Le] = Xt), (Xt = void 0));
            });
        }
        function xe() {
          ze(window, 'dragstart', Ie);
        }
        function we() {
          Ee(window, 'dragstart', Ie);
        }
        function be(t) {
          for (; -1 === t.tabIndex; ) t = t.parentNode;
          t.style && (Pe(), ($t = t), (Qt = t.style.outline), (t.style.outline = 'none'), ze(window, 'keydown', Pe));
        }
        function Pe() {
          $t && (($t.style.outline = Qt), ($t = void 0), (Qt = void 0), Ee(window, 'keydown', Pe));
        }
        function Ce(t) {
          do {
            t = t.parentNode;
          } while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
          return t;
        }
        function Te(t) {
          var e = t.getBoundingClientRect();
          return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
        }
        var Me = (Object.freeze || Object)({
          TRANSFORM: te,
          TRANSITION: ee,
          TRANSITION_END: ie,
          get: ne,
          getStyle: oe,
          create: se,
          remove: re,
          empty: ae,
          toFront: he,
          toBack: le,
          hasClass: ue,
          addClass: ce,
          removeClass: _e,
          setClass: de,
          getClass: pe,
          setOpacity: me,
          testProp: fe,
          setTransform: ge,
          setPosition: ve,
          getPosition: ye,
          disableTextSelection: Yt,
          enableTextSelection: Jt,
          disableImageDrag: xe,
          enableImageDrag: we,
          preventOutline: be,
          restoreOutline: Pe,
          getSizedParentNode: Ce,
          getScale: Te
        });
        function ze(t, e, i, n) {
          if ('object' === typeof e) for (var o in e) Se(t, o, e[o], i);
          else for (var s = 0, r = (e = _(e)).length; s < r; s++) Se(t, e[s], i, n);
          return this;
        }
        var ke = '_leaflet_events';
        function Ee(t, e, i, n) {
          if ('object' === typeof e) for (var o in e) Ze(t, o, e[o], i);
          else if (e) for (var s = 0, r = (e = _(e)).length; s < r; s++) Ze(t, e[s], i, n);
          else {
            for (var a in t[ke]) Ze(t, a, t[ke][a]);
            delete t[ke];
          }
          return this;
        }
        function Se(t, e, i, n) {
          var o = e + r(i) + (n ? '_' + r(n) : '');
          if (t[ke] && t[ke][o]) return this;
          var s = function(e) {
              return i.call(n || t, e || window.event);
            },
            a = s;
          Lt && 0 === e.indexOf('touch')
            ? jt(t, e, s, o)
            : !xt || 'dblclick' !== e || !qt || (Lt && rt)
            ? 'addEventListener' in t
              ? 'mousewheel' === e
                ? t.addEventListener('onwheel' in t ? 'wheel' : 'mousewheel', s, !!Ct && { passive: !1 })
                : 'mouseenter' === e || 'mouseleave' === e
                ? ((s = function(e) {
                    (e = e || window.event), We(t, e) && a(e);
                  }),
                  t.addEventListener('mouseenter' === e ? 'mouseover' : 'mouseout', s, !1))
                : ('click' === e &&
                    et &&
                    (s = function(t) {
                      !(function(t, e) {
                        var i = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
                          n = Ge && i - Ge;
                        (n && n > 100 && n < 500) || (t.target._simulatedClick && !t._simulated)
                          ? Ne(t)
                          : ((Ge = i), e(t));
                      })(t, a);
                    }),
                  t.addEventListener(e, s, !1))
              : 'attachEvent' in t && t.attachEvent('on' + e, s)
            : qt(t, s, o),
            (t[ke] = t[ke] || {}),
            (t[ke][o] = s);
        }
        function Ze(t, e, i, n) {
          var o = e + r(i) + (n ? '_' + r(n) : ''),
            s = t[ke] && t[ke][o];
          if (!s) return this;
          Lt && 0 === e.indexOf('touch')
            ? (function(t, e, i) {
                var n = t['_leaflet_' + e + i];
                'touchstart' === e
                  ? t.removeEventListener(St, n, !1)
                  : 'touchmove' === e
                  ? t.removeEventListener(Zt, n, !1)
                  : 'touchend' === e && (t.removeEventListener(Ot, n, !1), t.removeEventListener(Bt, n, !1));
              })(t, e, o)
            : !xt || 'dblclick' !== e || !Kt || (Lt && rt)
            ? 'removeEventListener' in t
              ? 'mousewheel' === e
                ? t.removeEventListener('onwheel' in t ? 'wheel' : 'mousewheel', s, !!Ct && { passive: !1 })
                : t.removeEventListener('mouseenter' === e ? 'mouseover' : 'mouseleave' === e ? 'mouseout' : e, s, !1)
              : 'detachEvent' in t && t.detachEvent('on' + e, s)
            : Kt(t, o),
            (t[ke][o] = null);
        }
        function Oe(t) {
          return (
            t.stopPropagation
              ? t.stopPropagation()
              : t.originalEvent
              ? (t.originalEvent._stopped = !0)
              : (t.cancelBubble = !0),
            He(t),
            this
          );
        }
        function Be(t) {
          return Se(t, 'mousewheel', Oe), this;
        }
        function Ae(t) {
          return ze(t, 'mousedown touchstart dblclick', Oe), Se(t, 'click', Ue), this;
        }
        function Ie(t) {
          return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
        }
        function Ne(t) {
          return Ie(t), Oe(t), this;
        }
        function Re(t, e) {
          if (!e) return new Z(t.clientX, t.clientY);
          var i = Te(e),
            n = i.boundingClientRect;
          return new Z((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop);
        }
        var je = ct && rt ? 2 * window.devicePixelRatio : at ? window.devicePixelRatio : 1;
        function De(t) {
          return Q
            ? t.wheelDeltaY / 2
            : t.deltaY && 0 === t.deltaMode
            ? -t.deltaY / je
            : t.deltaY && 1 === t.deltaMode
            ? 20 * -t.deltaY
            : t.deltaY && 2 === t.deltaMode
            ? 60 * -t.deltaY
            : t.deltaX || t.deltaZ
            ? 0
            : t.wheelDelta
            ? (t.wheelDeltaY || t.wheelDelta) / 2
            : t.detail && Math.abs(t.detail) < 32765
            ? 20 * -t.detail
            : t.detail
            ? (t.detail / -32765) * 60
            : 0;
        }
        var Ge,
          Fe = {};
        function Ue(t) {
          Fe[t.type] = !0;
        }
        function He(t) {
          var e = Fe[t.type];
          return (Fe[t.type] = !1), e;
        }
        function We(t, e) {
          var i = e.relatedTarget;
          if (!i) return !0;
          try {
            for (; i && i !== t; ) i = i.parentNode;
          } catch (n) {
            return !1;
          }
          return i !== t;
        }
        var Ve = (Object.freeze || Object)({
            on: ze,
            off: Ee,
            stopPropagation: Oe,
            disableScrollPropagation: Be,
            disableClickPropagation: Ae,
            preventDefault: Ie,
            stop: Ne,
            getMousePosition: Re,
            getWheelDelta: De,
            fakeStop: Ue,
            skipped: He,
            isExternalTarget: We,
            addListener: ze,
            removeListener: Ee
          }),
          qe = S.extend({
            run: function(t, e, i, n) {
              this.stop(),
                (this._el = t),
                (this._inProgress = !0),
                (this._duration = i || 0.25),
                (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
                (this._startPos = ye(t)),
                (this._offset = e.subtract(this._startPos)),
                (this._startTime = +new Date()),
                this.fire('start'),
                this._animate();
            },
            stop: function() {
              this._inProgress && (this._step(!0), this._complete());
            },
            _animate: function() {
              (this._animId = T(this._animate, this)), this._step();
            },
            _step: function(t) {
              var e = +new Date() - this._startTime,
                i = 1e3 * this._duration;
              e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
            },
            _runFrame: function(t, e) {
              var i = this._startPos.add(this._offset.multiplyBy(t));
              e && i._round(), ve(this._el, i), this.fire('step');
            },
            _complete: function() {
              M(this._animId), (this._inProgress = !1), this.fire('end');
            },
            _easeOut: function(t) {
              return 1 - Math.pow(1 - t, this._easeOutPower);
            }
          }),
          Ke = S.extend({
            options: {
              crs: V,
              center: void 0,
              zoom: void 0,
              minZoom: void 0,
              maxZoom: void 0,
              layers: [],
              maxBounds: void 0,
              renderer: void 0,
              zoomAnimation: !0,
              zoomAnimationThreshold: 4,
              fadeAnimation: !0,
              markerZoomAnimation: !0,
              transform3DLimit: 8388608,
              zoomSnap: 1,
              zoomDelta: 1,
              trackResize: !0
            },
            initialize: function(t, e) {
              (e = d(this, e)),
                (this._handlers = []),
                (this._layers = {}),
                (this._zoomBoundLayers = {}),
                (this._sizeChanged = !0),
                this._initContainer(t),
                this._initLayout(),
                (this._onResize = o(this._onResize, this)),
                this._initEvents(),
                e.maxBounds && this.setMaxBounds(e.maxBounds),
                void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                e.center && void 0 !== e.zoom && this.setView(D(e.center), e.zoom, { reset: !0 }),
                this.callInitHooks(),
                (this._zoomAnimated = ee && mt && !wt && this.options.zoomAnimation),
                this._zoomAnimated && (this._createAnimProxy(), ze(this._proxy, ie, this._catchTransitionEnd, this)),
                this._addLayers(this.options.layers);
            },
            setView: function(t, e, n) {
              return (
                (e = void 0 === e ? this._zoom : this._limitZoom(e)),
                (t = this._limitCenter(D(t), e, this.options.maxBounds)),
                (n = n || {}),
                this._stop(),
                this._loaded &&
                !n.reset &&
                !0 !== n &&
                (void 0 !== n.animate &&
                  ((n.zoom = i({ animate: n.animate }, n.zoom)),
                  (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
                this._zoom !== e
                  ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
                  : this._tryAnimatedPan(t, n.pan))
                  ? (clearTimeout(this._sizeTimer), this)
                  : (this._resetView(t, e), this)
              );
            },
            setZoom: function(t, e) {
              return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : ((this._zoom = t), this);
            },
            zoomIn: function(t, e) {
              return (t = t || (mt ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
            },
            zoomOut: function(t, e) {
              return (t = t || (mt ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
            },
            setZoomAround: function(t, e, i) {
              var n = this.getZoomScale(e),
                o = this.getSize().divideBy(2),
                s = (t instanceof Z ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                r = this.containerPointToLatLng(o.add(s));
              return this.setView(r, e, { zoom: i });
            },
            _getBoundsCenterZoom: function(t, e) {
              (e = e || {}), (t = t.getBounds ? t.getBounds() : R(t));
              var i = B(e.paddingTopLeft || e.padding || [0, 0]),
                n = B(e.paddingBottomRight || e.padding || [0, 0]),
                o = this.getBoundsZoom(t, !1, i.add(n));
              if ((o = 'number' === typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                return { center: t.getCenter(), zoom: o };
              var s = n.subtract(i).divideBy(2),
                r = this.project(t.getSouthWest(), o),
                a = this.project(t.getNorthEast(), o);
              return {
                center: this.unproject(
                  r
                    .add(a)
                    .divideBy(2)
                    .add(s),
                  o
                ),
                zoom: o
              };
            },
            fitBounds: function(t, e) {
              if (!(t = R(t)).isValid()) throw new Error('Bounds are not valid.');
              var i = this._getBoundsCenterZoom(t, e);
              return this.setView(i.center, i.zoom, e);
            },
            fitWorld: function(t) {
              return this.fitBounds([[-90, -180], [90, 180]], t);
            },
            panTo: function(t, e) {
              return this.setView(t, this._zoom, { pan: e });
            },
            panBy: function(t, e) {
              if (((e = e || {}), !(t = B(t).round()).x && !t.y)) return this.fire('moveend');
              if (!0 !== e.animate && !this.getSize().contains(t))
                return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
              if (
                (this._panAnim ||
                  ((this._panAnim = new qe()),
                  this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)),
                e.noMoveStart || this.fire('movestart'),
                !1 !== e.animate)
              ) {
                ce(this._mapPane, 'leaflet-pan-anim');
                var i = this._getMapPanePos()
                  .subtract(t)
                  .round();
                this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
              } else this._rawPanBy(t), this.fire('move').fire('moveend');
              return this;
            },
            flyTo: function(t, e, i) {
              if (!1 === (i = i || {}).animate || !mt) return this.setView(t, e, i);
              this._stop();
              var n = this.project(this.getCenter()),
                o = this.project(t),
                s = this.getSize(),
                r = this._zoom;
              (t = D(t)), (e = void 0 === e ? r : e);
              var a = Math.max(s.x, s.y),
                h = a * this.getZoomScale(r, e),
                l = o.distanceTo(n) || 1,
                u = 1.42,
                c = u * u;
              function _(t) {
                var e = (h * h - a * a + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? h : a) * c * l),
                  i = Math.sqrt(e * e + 1) - e;
                return i < 1e-9 ? -18 : Math.log(i);
              }
              function d(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2;
              }
              function p(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2;
              }
              var m = _(0);
              function f(t) {
                return (a * (p(m) * (d((e = m + u * t)) / p(e)) - d(m))) / c;
                var e;
              }
              var g = Date.now(),
                v = (_(1) - m) / u,
                y = i.duration ? 1e3 * i.duration : 1e3 * v * 0.8;
              return (
                this._moveStart(!0, i.noMoveStart),
                function i() {
                  var s = (Date.now() - g) / y,
                    h =
                      (function(t) {
                        return 1 - Math.pow(1 - t, 1.5);
                      })(s) * v;
                  s <= 1
                    ? ((this._flyToFrame = T(i, this)),
                      this._move(
                        this.unproject(n.add(o.subtract(n).multiplyBy(f(h) / l)), r),
                        this.getScaleZoom(
                          a /
                            (function(t) {
                              return a * (p(m) / p(m + u * t));
                            })(h),
                          r
                        ),
                        { flyTo: !0 }
                      ))
                    : this._move(t, e)._moveEnd(!0);
                }.call(this),
                this
              );
            },
            flyToBounds: function(t, e) {
              var i = this._getBoundsCenterZoom(t, e);
              return this.flyTo(i.center, i.zoom, e);
            },
            setMaxBounds: function(t) {
              return (t = R(t)).isValid()
                ? (this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
                  (this.options.maxBounds = t),
                  this._loaded && this._panInsideMaxBounds(),
                  this.on('moveend', this._panInsideMaxBounds))
                : ((this.options.maxBounds = null), this.off('moveend', this._panInsideMaxBounds));
            },
            setMinZoom: function(t) {
              var e = this.options.minZoom;
              return (
                (this.options.minZoom = t),
                this._loaded && e !== t && (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
                  ? this.setZoom(t)
                  : this
              );
            },
            setMaxZoom: function(t) {
              var e = this.options.maxZoom;
              return (
                (this.options.maxZoom = t),
                this._loaded && e !== t && (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
                  ? this.setZoom(t)
                  : this
              );
            },
            panInsideBounds: function(t, e) {
              this._enforcingBounds = !0;
              var i = this.getCenter(),
                n = this._limitCenter(i, this._zoom, R(t));
              return i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this;
            },
            panInside: function(t, e) {
              var i = B((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                n = B(e.paddingBottomRight || e.padding || [0, 0]),
                o = this.getCenter(),
                s = this.project(o),
                r = this.project(t),
                a = this.getPixelBounds(),
                h = a.getSize().divideBy(2),
                l = I([a.min.add(i), a.max.subtract(n)]);
              if (!l.contains(r)) {
                this._enforcingBounds = !0;
                var u = s.subtract(r),
                  c = B(r.x + u.x, r.y + u.y);
                (r.x < l.min.x || r.x > l.max.x) &&
                  ((c.x = s.x - u.x), u.x > 0 ? (c.x += h.x - i.x) : (c.x -= h.x - n.x)),
                  (r.y < l.min.y || r.y > l.max.y) &&
                    ((c.y = s.y - u.y), u.y > 0 ? (c.y += h.y - i.y) : (c.y -= h.y - n.y)),
                  this.panTo(this.unproject(c), e),
                  (this._enforcingBounds = !1);
              }
              return this;
            },
            invalidateSize: function(t) {
              if (!this._loaded) return this;
              t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
              var e = this.getSize();
              (this._sizeChanged = !0), (this._lastCenter = null);
              var n = this.getSize(),
                s = e.divideBy(2).round(),
                r = n.divideBy(2).round(),
                a = s.subtract(r);
              return a.x || a.y
                ? (t.animate && t.pan
                    ? this.panBy(a)
                    : (t.pan && this._rawPanBy(a),
                      this.fire('move'),
                      t.debounceMoveend
                        ? (clearTimeout(this._sizeTimer),
                          (this._sizeTimer = setTimeout(o(this.fire, this, 'moveend'), 200)))
                        : this.fire('moveend')),
                  this.fire('resize', { oldSize: e, newSize: n }))
                : this;
            },
            stop: function() {
              return (
                this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire('viewreset'), this._stop()
              );
            },
            locate: function(t) {
              if (((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)), !('geolocation' in navigator)))
                return this._handleGeolocationError({ code: 0, message: 'Geolocation not supported.' }), this;
              var e = o(this._handleGeolocationResponse, this),
                n = o(this._handleGeolocationError, this);
              return (
                t.watch
                  ? (this._locationWatchId = navigator.geolocation.watchPosition(e, n, t))
                  : navigator.geolocation.getCurrentPosition(e, n, t),
                this
              );
            },
            stopLocate: function() {
              return (
                navigator.geolocation &&
                  navigator.geolocation.clearWatch &&
                  navigator.geolocation.clearWatch(this._locationWatchId),
                this._locateOptions && (this._locateOptions.setView = !1),
                this
              );
            },
            _handleGeolocationError: function(t) {
              var e = t.code,
                i = t.message || (1 === e ? 'permission denied' : 2 === e ? 'position unavailable' : 'timeout');
              this._locateOptions.setView && !this._loaded && this.fitWorld(),
                this.fire('locationerror', { code: e, message: 'Geolocation error: ' + i + '.' });
            },
            _handleGeolocationResponse: function(t) {
              var e = new j(t.coords.latitude, t.coords.longitude),
                i = e.toBounds(2 * t.coords.accuracy),
                n = this._locateOptions;
              if (n.setView) {
                var o = this.getBoundsZoom(i);
                this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o);
              }
              var s = { latlng: e, bounds: i, timestamp: t.timestamp };
              for (var r in t.coords) 'number' === typeof t.coords[r] && (s[r] = t.coords[r]);
              this.fire('locationfound', s);
            },
            addHandler: function(t, e) {
              if (!e) return this;
              var i = (this[t] = new e(this));
              return this._handlers.push(i), this.options[t] && i.enable(), this;
            },
            remove: function() {
              if ((this._initEvents(!0), this._containerId !== this._container._leaflet_id))
                throw new Error('Map container is being reused by another instance');
              try {
                delete this._container._leaflet_id, delete this._containerId;
              } catch (e) {
                (this._container._leaflet_id = void 0), (this._containerId = void 0);
              }
              var t;
              for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
              this._stop(),
              re(this._mapPane),
              this._clearControlPos && this._clearControlPos(),
              this._resizeRequest && (M(this._resizeRequest), (this._resizeRequest = null)),
              this._clearHandlers(),
              this._loaded && this.fire('unload'),
              this._layers))
                this._layers[t].remove();
              for (t in this._panes) re(this._panes[t]);
              return (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this;
            },
            createPane: function(t, e) {
              var i = se(
                'div',
                'leaflet-pane' + (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
                e || this._mapPane
              );
              return t && (this._panes[t] = i), i;
            },
            getCenter: function() {
              return (
                this._checkIfLoaded(),
                this._lastCenter && !this._moved()
                  ? this._lastCenter
                  : this.layerPointToLatLng(this._getCenterLayerPoint())
              );
            },
            getZoom: function() {
              return this._zoom;
            },
            getBounds: function() {
              var t = this.getPixelBounds();
              return new N(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
            },
            getMinZoom: function() {
              return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
            },
            getMaxZoom: function() {
              return void 0 === this.options.maxZoom
                ? void 0 === this._layersMaxZoom
                  ? 1 / 0
                  : this._layersMaxZoom
                : this.options.maxZoom;
            },
            getBoundsZoom: function(t, e, i) {
              (t = R(t)), (i = B(i || [0, 0]));
              var n = this.getZoom() || 0,
                o = this.getMinZoom(),
                s = this.getMaxZoom(),
                r = t.getNorthWest(),
                a = t.getSouthEast(),
                h = this.getSize().subtract(i),
                l = I(this.project(a, n), this.project(r, n)).getSize(),
                u = mt ? this.options.zoomSnap : 1,
                c = h.x / l.x,
                _ = h.y / l.y,
                d = e ? Math.max(c, _) : Math.min(c, _);
              return (
                (n = this.getScaleZoom(d, n)),
                u &&
                  ((n = Math.round(n / (u / 100)) * (u / 100)), (n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u)),
                Math.max(o, Math.min(s, n))
              );
            },
            getSize: function() {
              return (
                (this._size && !this._sizeChanged) ||
                  ((this._size = new Z(this._container.clientWidth || 0, this._container.clientHeight || 0)),
                  (this._sizeChanged = !1)),
                this._size.clone()
              );
            },
            getPixelBounds: function(t, e) {
              var i = this._getTopLeftPoint(t, e);
              return new A(i, i.add(this.getSize()));
            },
            getPixelOrigin: function() {
              return this._checkIfLoaded(), this._pixelOrigin;
            },
            getPixelWorldBounds: function(t) {
              return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
            },
            getPane: function(t) {
              return 'string' === typeof t ? this._panes[t] : t;
            },
            getPanes: function() {
              return this._panes;
            },
            getContainer: function() {
              return this._container;
            },
            getZoomScale: function(t, e) {
              var i = this.options.crs;
              return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
            },
            getScaleZoom: function(t, e) {
              var i = this.options.crs;
              e = void 0 === e ? this._zoom : e;
              var n = i.zoom(t * i.scale(e));
              return isNaN(n) ? 1 / 0 : n;
            },
            project: function(t, e) {
              return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(D(t), e);
            },
            unproject: function(t, e) {
              return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(B(t), e);
            },
            layerPointToLatLng: function(t) {
              var e = B(t).add(this.getPixelOrigin());
              return this.unproject(e);
            },
            latLngToLayerPoint: function(t) {
              return this.project(D(t))
                ._round()
                ._subtract(this.getPixelOrigin());
            },
            wrapLatLng: function(t) {
              return this.options.crs.wrapLatLng(D(t));
            },
            wrapLatLngBounds: function(t) {
              return this.options.crs.wrapLatLngBounds(R(t));
            },
            distance: function(t, e) {
              return this.options.crs.distance(D(t), D(e));
            },
            containerPointToLayerPoint: function(t) {
              return B(t).subtract(this._getMapPanePos());
            },
            layerPointToContainerPoint: function(t) {
              return B(t).add(this._getMapPanePos());
            },
            containerPointToLatLng: function(t) {
              var e = this.containerPointToLayerPoint(B(t));
              return this.layerPointToLatLng(e);
            },
            latLngToContainerPoint: function(t) {
              return this.layerPointToContainerPoint(this.latLngToLayerPoint(D(t)));
            },
            mouseEventToContainerPoint: function(t) {
              return Re(t, this._container);
            },
            mouseEventToLayerPoint: function(t) {
              return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
            },
            mouseEventToLatLng: function(t) {
              return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
            },
            _initContainer: function(t) {
              var e = (this._container = ne(t));
              if (!e) throw new Error('Map container not found.');
              if (e._leaflet_id) throw new Error('Map container is already initialized.');
              ze(e, 'scroll', this._onScroll, this), (this._containerId = r(e));
            },
            _initLayout: function() {
              var t = this._container;
              (this._fadeAnimated = this.options.fadeAnimation && mt),
                ce(
                  t,
                  'leaflet-container' +
                    (xt ? ' leaflet-touch' : '') +
                    (Pt ? ' leaflet-retina' : '') +
                    ($ ? ' leaflet-oldie' : '') +
                    (ht ? ' leaflet-safari' : '') +
                    (this._fadeAnimated ? ' leaflet-fade-anim' : '')
                );
              var e = oe(t, 'position');
              'absolute' !== e && 'relative' !== e && 'fixed' !== e && (t.style.position = 'relative'),
                this._initPanes(),
                this._initControlPos && this._initControlPos();
            },
            _initPanes: function() {
              var t = (this._panes = {});
              (this._paneRenderers = {}),
                (this._mapPane = this.createPane('mapPane', this._container)),
                ve(this._mapPane, new Z(0, 0)),
                this.createPane('tilePane'),
                this.createPane('shadowPane'),
                this.createPane('overlayPane'),
                this.createPane('markerPane'),
                this.createPane('tooltipPane'),
                this.createPane('popupPane'),
                this.options.markerZoomAnimation ||
                  (ce(t.markerPane, 'leaflet-zoom-hide'), ce(t.shadowPane, 'leaflet-zoom-hide'));
            },
            _resetView: function(t, e) {
              ve(this._mapPane, new Z(0, 0));
              var i = !this._loaded;
              (this._loaded = !0), (e = this._limitZoom(e)), this.fire('viewprereset');
              var n = this._zoom !== e;
              this._moveStart(n, !1)
                ._move(t, e)
                ._moveEnd(n),
                this.fire('viewreset'),
                i && this.fire('load');
            },
            _moveStart: function(t, e) {
              return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
            },
            _move: function(t, e, i) {
              void 0 === e && (e = this._zoom);
              var n = this._zoom !== e;
              return (
                (this._zoom = e),
                (this._lastCenter = t),
                (this._pixelOrigin = this._getNewPixelOrigin(t)),
                (n || (i && i.pinch)) && this.fire('zoom', i),
                this.fire('move', i)
              );
            },
            _moveEnd: function(t) {
              return t && this.fire('zoomend'), this.fire('moveend');
            },
            _stop: function() {
              return M(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
            },
            _rawPanBy: function(t) {
              ve(this._mapPane, this._getMapPanePos().subtract(t));
            },
            _getZoomSpan: function() {
              return this.getMaxZoom() - this.getMinZoom();
            },
            _panInsideMaxBounds: function() {
              this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
            },
            _checkIfLoaded: function() {
              if (!this._loaded) throw new Error('Set map center and zoom first.');
            },
            _initEvents: function(t) {
              (this._targets = {}), (this._targets[r(this._container)] = this);
              var e = t ? Ee : ze;
              e(
                this._container,
                'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
                this._handleDOMEvent,
                this
              ),
                this.options.trackResize && e(window, 'resize', this._onResize, this),
                mt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
            },
            _onResize: function() {
              M(this._resizeRequest),
                (this._resizeRequest = T(function() {
                  this.invalidateSize({ debounceMoveend: !0 });
                }, this));
            },
            _onScroll: function() {
              (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
            },
            _onMoveEnd: function() {
              var t = this._getMapPanePos();
              Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
                this._resetView(this.getCenter(), this.getZoom());
            },
            _findEventTargets: function(t, e) {
              for (
                var i, n = [], o = 'mouseout' === e || 'mouseover' === e, s = t.target || t.srcElement, a = !1;
                s;

              ) {
                if (
                  (i = this._targets[r(s)]) &&
                  ('click' === e || 'preclick' === e) &&
                  !t._simulated &&
                  this._draggableMoved(i)
                ) {
                  a = !0;
                  break;
                }
                if (i && i.listens(e, !0)) {
                  if (o && !We(s, t)) break;
                  if ((n.push(i), o)) break;
                }
                if (s === this._container) break;
                s = s.parentNode;
              }
              return n.length || a || o || !We(s, t) || (n = [this]), n;
            },
            _handleDOMEvent: function(t) {
              if (this._loaded && !He(t)) {
                var e = t.type;
                ('mousedown' !== e && 'keypress' !== e && 'keyup' !== e && 'keydown' !== e) ||
                  be(t.target || t.srcElement),
                  this._fireDOMEvent(t, e);
              }
            },
            _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
            _fireDOMEvent: function(t, e, n) {
              if ('click' === t.type) {
                var o = i({}, t);
                (o.type = 'preclick'), this._fireDOMEvent(o, o.type, n);
              }
              if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                var s = n[0];
                'contextmenu' === e && s.listens(e, !0) && Ie(t);
                var r = { originalEvent: t };
                if ('keypress' !== t.type && 'keydown' !== t.type && 'keyup' !== t.type) {
                  var a = s.getLatLng && (!s._radius || s._radius <= 10);
                  (r.containerPoint = a
                    ? this.latLngToContainerPoint(s.getLatLng())
                    : this.mouseEventToContainerPoint(t)),
                    (r.layerPoint = this.containerPointToLayerPoint(r.containerPoint)),
                    (r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint));
                }
                for (var h = 0; h < n.length; h++)
                  if (
                    (n[h].fire(e, r, !0),
                    r.originalEvent._stopped ||
                      (!1 === n[h].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)))
                  )
                    return;
              }
            },
            _draggableMoved: function(t) {
              return (
                ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) ||
                (this.boxZoom && this.boxZoom.moved())
              );
            },
            _clearHandlers: function() {
              for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
            },
            whenReady: function(t, e) {
              return this._loaded ? t.call(e || this, { target: this }) : this.on('load', t, e), this;
            },
            _getMapPanePos: function() {
              return ye(this._mapPane) || new Z(0, 0);
            },
            _moved: function() {
              var t = this._getMapPanePos();
              return t && !t.equals([0, 0]);
            },
            _getTopLeftPoint: function(t, e) {
              return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(
                this._getMapPanePos()
              );
            },
            _getNewPixelOrigin: function(t, e) {
              var i = this.getSize()._divideBy(2);
              return this.project(t, e)
                ._subtract(i)
                ._add(this._getMapPanePos())
                ._round();
            },
            _latLngToNewLayerPoint: function(t, e, i) {
              var n = this._getNewPixelOrigin(i, e);
              return this.project(t, e)._subtract(n);
            },
            _latLngBoundsToNewLayerBounds: function(t, e, i) {
              var n = this._getNewPixelOrigin(i, e);
              return I([
                this.project(t.getSouthWest(), e)._subtract(n),
                this.project(t.getNorthWest(), e)._subtract(n),
                this.project(t.getSouthEast(), e)._subtract(n),
                this.project(t.getNorthEast(), e)._subtract(n)
              ]);
            },
            _getCenterLayerPoint: function() {
              return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
            },
            _getCenterOffset: function(t) {
              return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
            },
            _limitCenter: function(t, e, i) {
              if (!i) return t;
              var n = this.project(t, e),
                o = this.getSize().divideBy(2),
                s = new A(n.subtract(o), n.add(o)),
                r = this._getBoundsOffset(s, i, e);
              return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e);
            },
            _limitOffset: function(t, e) {
              if (!e) return t;
              var i = this.getPixelBounds(),
                n = new A(i.min.add(t), i.max.add(t));
              return t.add(this._getBoundsOffset(n, e));
            },
            _getBoundsOffset: function(t, e, i) {
              var n = I(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                o = n.min.subtract(t.min),
                s = n.max.subtract(t.max);
              return new Z(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
            },
            _rebound: function(t, e) {
              return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
            },
            _limitZoom: function(t) {
              var e = this.getMinZoom(),
                i = this.getMaxZoom(),
                n = mt ? this.options.zoomSnap : 1;
              return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
            },
            _onPanTransitionStep: function() {
              this.fire('move');
            },
            _onPanTransitionEnd: function() {
              _e(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
            },
            _tryAnimatedPan: function(t, e) {
              var i = this._getCenterOffset(t)._trunc();
              return !(!0 !== (e && e.animate) && !this.getSize().contains(i)) && (this.panBy(i, e), !0);
            },
            _createAnimProxy: function() {
              var t = (this._proxy = se('div', 'leaflet-proxy leaflet-zoom-animated'));
              this._panes.mapPane.appendChild(t),
                this.on(
                  'zoomanim',
                  function(t) {
                    var e = te,
                      i = this._proxy.style[e];
                    ge(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                      i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
                  },
                  this
                ),
                this.on('load moveend', this._animMoveEnd, this),
                this._on('unload', this._destroyAnimProxy, this);
            },
            _destroyAnimProxy: function() {
              re(this._proxy), this.off('load moveend', this._animMoveEnd, this), delete this._proxy;
            },
            _animMoveEnd: function() {
              var t = this.getCenter(),
                e = this.getZoom();
              ge(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
            },
            _catchTransitionEnd: function(t) {
              this._animatingZoom && t.propertyName.indexOf('transform') >= 0 && this._onZoomTransitionEnd();
            },
            _nothingToAnimate: function() {
              return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
            },
            _tryAnimatedZoom: function(t, e, i) {
              if (this._animatingZoom) return !0;
              if (
                ((i = i || {}),
                !this._zoomAnimated ||
                  !1 === i.animate ||
                  this._nothingToAnimate() ||
                  Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
              )
                return !1;
              var n = this.getZoomScale(e),
                o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
              return (
                !(!0 !== i.animate && !this.getSize().contains(o)) &&
                (T(function() {
                  this._moveStart(!0, !1)._animateZoom(t, e, !0);
                }, this),
                !0)
              );
            },
            _animateZoom: function(t, e, i, n) {
              this._mapPane &&
                (i &&
                  ((this._animatingZoom = !0),
                  (this._animateToCenter = t),
                  (this._animateToZoom = e),
                  ce(this._mapPane, 'leaflet-zoom-anim')),
                this.fire('zoomanim', { center: t, zoom: e, noUpdate: n }),
                setTimeout(o(this._onZoomTransitionEnd, this), 250));
            },
            _onZoomTransitionEnd: function() {
              this._animatingZoom &&
                (this._mapPane && _e(this._mapPane, 'leaflet-zoom-anim'),
                (this._animatingZoom = !1),
                this._move(this._animateToCenter, this._animateToZoom),
                T(function() {
                  this._moveEnd(!0);
                }, this));
            }
          }),
          Ye = k.extend({
            options: { position: 'topright' },
            initialize: function(t) {
              d(this, t);
            },
            getPosition: function() {
              return this.options.position;
            },
            setPosition: function(t) {
              var e = this._map;
              return e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this;
            },
            getContainer: function() {
              return this._container;
            },
            addTo: function(t) {
              this.remove(), (this._map = t);
              var e = (this._container = this.onAdd(t)),
                i = this.getPosition(),
                n = t._controlCorners[i];
              return (
                ce(e, 'leaflet-control'),
                -1 !== i.indexOf('bottom') ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
                this._map.on('unload', this.remove, this),
                this
              );
            },
            remove: function() {
              return this._map
                ? (re(this._container),
                  this.onRemove && this.onRemove(this._map),
                  this._map.off('unload', this.remove, this),
                  (this._map = null),
                  this)
                : this;
            },
            _refocusOnMap: function(t) {
              this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
            }
          }),
          Je = function(t) {
            return new Ye(t);
          };
        Ke.include({
          addControl: function(t) {
            return t.addTo(this), this;
          },
          removeControl: function(t) {
            return t.remove(), this;
          },
          _initControlPos: function() {
            var t = (this._controlCorners = {}),
              e = 'leaflet-',
              i = (this._controlContainer = se('div', e + 'control-container', this._container));
            function n(n, o) {
              var s = e + n + ' ' + e + o;
              t[n + o] = se('div', s, i);
            }
            n('top', 'left'), n('top', 'right'), n('bottom', 'left'), n('bottom', 'right');
          },
          _clearControlPos: function() {
            for (var t in this._controlCorners) re(this._controlCorners[t]);
            re(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
          }
        });
        var Xe = Ye.extend({
            options: {
              collapsed: !0,
              position: 'topright',
              autoZIndex: !0,
              hideSingleBase: !1,
              sortLayers: !1,
              sortFunction: function(t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0;
              }
            },
            initialize: function(t, e, i) {
              for (var n in (d(this, i),
              (this._layerControlInputs = []),
              (this._layers = []),
              (this._lastZIndex = 0),
              (this._handlingClick = !1),
              t))
                this._addLayer(t[n], n);
              for (n in e) this._addLayer(e[n], n, !0);
            },
            onAdd: function(t) {
              this._initLayout(), this._update(), (this._map = t), t.on('zoomend', this._checkDisabledLayers, this);
              for (var e = 0; e < this._layers.length; e++)
                this._layers[e].layer.on('add remove', this._onLayerChange, this);
              return this._container;
            },
            addTo: function(t) {
              return Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
            },
            onRemove: function() {
              this._map.off('zoomend', this._checkDisabledLayers, this);
              for (var t = 0; t < this._layers.length; t++)
                this._layers[t].layer.off('add remove', this._onLayerChange, this);
            },
            addBaseLayer: function(t, e) {
              return this._addLayer(t, e), this._map ? this._update() : this;
            },
            addOverlay: function(t, e) {
              return this._addLayer(t, e, !0), this._map ? this._update() : this;
            },
            removeLayer: function(t) {
              t.off('add remove', this._onLayerChange, this);
              var e = this._getLayer(r(t));
              return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
            },
            expand: function() {
              ce(this._container, 'leaflet-control-layers-expanded'), (this._section.style.height = null);
              var t = this._map.getSize().y - (this._container.offsetTop + 50);
              return (
                t < this._section.clientHeight
                  ? (ce(this._section, 'leaflet-control-layers-scrollbar'), (this._section.style.height = t + 'px'))
                  : _e(this._section, 'leaflet-control-layers-scrollbar'),
                this._checkDisabledLayers(),
                this
              );
            },
            collapse: function() {
              return _e(this._container, 'leaflet-control-layers-expanded'), this;
            },
            _initLayout: function() {
              var t = 'leaflet-control-layers',
                e = (this._container = se('div', t)),
                i = this.options.collapsed;
              e.setAttribute('aria-haspopup', !0), Ae(e), Be(e);
              var n = (this._section = se('section', t + '-list'));
              i &&
                (this._map.on('click', this.collapse, this),
                et || ze(e, { mouseenter: this.expand, mouseleave: this.collapse }, this));
              var o = (this._layersLink = se('a', t + '-toggle', e));
              (o.href = '#'),
                (o.title = 'Layers'),
                xt ? (ze(o, 'click', Ne), ze(o, 'click', this.expand, this)) : ze(o, 'focus', this.expand, this),
                i || this.expand(),
                (this._baseLayersList = se('div', t + '-base', n)),
                (this._separator = se('div', t + '-separator', n)),
                (this._overlaysList = se('div', t + '-overlays', n)),
                e.appendChild(n);
            },
            _getLayer: function(t) {
              for (var e = 0; e < this._layers.length; e++)
                if (this._layers[e] && r(this._layers[e].layer) === t) return this._layers[e];
            },
            _addLayer: function(t, e, i) {
              this._map && t.on('add remove', this._onLayerChange, this),
                this._layers.push({ layer: t, name: e, overlay: i }),
                this.options.sortLayers &&
                  this._layers.sort(
                    o(function(t, e) {
                      return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                    }, this)
                  ),
                this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                this._expandIfNotCollapsed();
            },
            _update: function() {
              if (!this._container) return this;
              ae(this._baseLayersList), ae(this._overlaysList), (this._layerControlInputs = []);
              var t,
                e,
                i,
                n,
                o = 0;
              for (i = 0; i < this._layers.length; i++)
                (n = this._layers[i]),
                  this._addItem(n),
                  (e = e || n.overlay),
                  (t = t || !n.overlay),
                  (o += n.overlay ? 0 : 1);
              return (
                this.options.hideSingleBase &&
                  ((t = t && o > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
                (this._separator.style.display = e && t ? '' : 'none'),
                this
              );
            },
            _onLayerChange: function(t) {
              this._handlingClick || this._update();
              var e = this._getLayer(r(t.target)),
                i = e.overlay
                  ? 'add' === t.type
                    ? 'overlayadd'
                    : 'overlayremove'
                  : 'add' === t.type
                  ? 'baselayerchange'
                  : null;
              i && this._map.fire(i, e);
            },
            _createRadioElement: function(t, e) {
              var i =
                  '<input type="radio" class="leaflet-control-layers-selector" name="' +
                  t +
                  '"' +
                  (e ? ' checked="checked"' : '') +
                  '/>',
                n = document.createElement('div');
              return (n.innerHTML = i), n.firstChild;
            },
            _addItem: function(t) {
              var e,
                i = document.createElement('label'),
                n = this._map.hasLayer(t.layer);
              t.overlay
                ? (((e = document.createElement('input')).type = 'checkbox'),
                  (e.className = 'leaflet-control-layers-selector'),
                  (e.defaultChecked = n))
                : (e = this._createRadioElement('leaflet-base-layers_' + r(this), n)),
                this._layerControlInputs.push(e),
                (e.layerId = r(t.layer)),
                ze(e, 'click', this._onInputClick, this);
              var o = document.createElement('span');
              o.innerHTML = ' ' + t.name;
              var s = document.createElement('div');
              return (
                i.appendChild(s),
                s.appendChild(e),
                s.appendChild(o),
                (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
                this._checkDisabledLayers(),
                i
              );
            },
            _onInputClick: function() {
              var t,
                e,
                i = this._layerControlInputs,
                n = [],
                o = [];
              this._handlingClick = !0;
              for (var s = i.length - 1; s >= 0; s--)
                (t = i[s]), (e = this._getLayer(t.layerId).layer), t.checked ? n.push(e) : t.checked || o.push(e);
              for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
              for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
              (this._handlingClick = !1), this._refocusOnMap();
            },
            _checkDisabledLayers: function() {
              for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
                (t = i[o]),
                  (e = this._getLayer(t.layerId).layer),
                  (t.disabled =
                    (void 0 !== e.options.minZoom && n < e.options.minZoom) ||
                    (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
            },
            _expandIfNotCollapsed: function() {
              return this._map && !this.options.collapsed && this.expand(), this;
            },
            _expand: function() {
              return this.expand();
            },
            _collapse: function() {
              return this.collapse();
            }
          }),
          $e = Ye.extend({
            options: {
              position: 'topleft',
              zoomInText: '+',
              zoomInTitle: 'Zoom in',
              zoomOutText: '&#x2212;',
              zoomOutTitle: 'Zoom out'
            },
            onAdd: function(t) {
              var e = 'leaflet-control-zoom',
                i = se('div', e + ' leaflet-bar'),
                n = this.options;
              return (
                (this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + '-in', i, this._zoomIn)),
                (this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + '-out', i, this._zoomOut)),
                this._updateDisabled(),
                t.on('zoomend zoomlevelschange', this._updateDisabled, this),
                i
              );
            },
            onRemove: function(t) {
              t.off('zoomend zoomlevelschange', this._updateDisabled, this);
            },
            disable: function() {
              return (this._disabled = !0), this._updateDisabled(), this;
            },
            enable: function() {
              return (this._disabled = !1), this._updateDisabled(), this;
            },
            _zoomIn: function(t) {
              !this._disabled &&
                this._map._zoom < this._map.getMaxZoom() &&
                this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
            },
            _zoomOut: function(t) {
              !this._disabled &&
                this._map._zoom > this._map.getMinZoom() &&
                this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
            },
            _createButton: function(t, e, i, n, o) {
              var s = se('a', i, n);
              return (
                (s.innerHTML = t),
                (s.href = '#'),
                (s.title = e),
                s.setAttribute('role', 'button'),
                s.setAttribute('aria-label', e),
                Ae(s),
                ze(s, 'click', Ne),
                ze(s, 'click', o, this),
                ze(s, 'click', this._refocusOnMap, this),
                s
              );
            },
            _updateDisabled: function() {
              var t = this._map,
                e = 'leaflet-disabled';
              _e(this._zoomInButton, e),
                _e(this._zoomOutButton, e),
                (this._disabled || t._zoom === t.getMinZoom()) && ce(this._zoomOutButton, e),
                (this._disabled || t._zoom === t.getMaxZoom()) && ce(this._zoomInButton, e);
            }
          });
        Ke.mergeOptions({ zoomControl: !0 }),
          Ke.addInitHook(function() {
            this.options.zoomControl && ((this.zoomControl = new $e()), this.addControl(this.zoomControl));
          });
        var Qe = Ye.extend({
            options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
            onAdd: function(t) {
              var e = se('div', 'leaflet-control-scale'),
                i = this.options;
              return (
                this._addScales(i, 'leaflet-control-scale-line', e),
                t.on(i.updateWhenIdle ? 'moveend' : 'move', this._update, this),
                t.whenReady(this._update, this),
                e
              );
            },
            onRemove: function(t) {
              t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
            },
            _addScales: function(t, e, i) {
              t.metric && (this._mScale = se('div', e, i)), t.imperial && (this._iScale = se('div', e, i));
            },
            _update: function() {
              var t = this._map,
                e = t.getSize().y / 2,
                i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
              this._updateScales(i);
            },
            _updateScales: function(t) {
              this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
            },
            _updateMetric: function(t) {
              var e = this._getRoundNum(t),
                i = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
              this._updateScale(this._mScale, i, e / t);
            },
            _updateImperial: function(t) {
              var e,
                i,
                n,
                o = 3.2808399 * t;
              o > 5280
                ? ((e = o / 5280), (i = this._getRoundNum(e)), this._updateScale(this._iScale, i + ' mi', i / e))
                : ((n = this._getRoundNum(o)), this._updateScale(this._iScale, n + ' ft', n / o));
            },
            _updateScale: function(t, e, i) {
              (t.style.width = Math.round(this.options.maxWidth * i) + 'px'), (t.innerHTML = e);
            },
            _getRoundNum: function(t) {
              var e = Math.pow(10, (Math.floor(t) + '').length - 1),
                i = t / e;
              return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1);
            }
          }),
          ti = Ye.extend({
            options: {
              position: 'bottomright',
              prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
              d(this, t), (this._attributions = {});
            },
            onAdd: function(t) {
              for (var e in ((t.attributionControl = this),
              (this._container = se('div', 'leaflet-control-attribution')),
              Ae(this._container),
              t._layers))
                t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
              return this._update(), this._container;
            },
            setPrefix: function(t) {
              return (this.options.prefix = t), this._update(), this;
            },
            addAttribution: function(t) {
              return t
                ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this)
                : this;
            },
            removeAttribution: function(t) {
              return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
            },
            _update: function() {
              if (this._map) {
                var t = [];
                for (var e in this._attributions) this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                  t.length && i.push(t.join(', ')),
                  (this._container.innerHTML = i.join(' | '));
              }
            }
          });
        Ke.mergeOptions({ attributionControl: !0 }),
          Ke.addInitHook(function() {
            this.options.attributionControl && new ti().addTo(this);
          }),
          (Ye.Layers = Xe),
          (Ye.Zoom = $e),
          (Ye.Scale = Qe),
          (Ye.Attribution = ti),
          (Je.layers = function(t, e, i) {
            return new Xe(t, e, i);
          }),
          (Je.zoom = function(t) {
            return new $e(t);
          }),
          (Je.scale = function(t) {
            return new Qe(t);
          }),
          (Je.attribution = function(t) {
            return new ti(t);
          });
        var ei = k.extend({
          initialize: function(t) {
            this._map = t;
          },
          enable: function() {
            return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
          },
          disable: function() {
            return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
          },
          enabled: function() {
            return !!this._enabled;
          }
        });
        ei.addTo = function(t, e) {
          return t.addHandler(e, this), this;
        };
        var ii,
          ni = { Events: E },
          oi = xt ? 'touchstart mousedown' : 'mousedown',
          si = { mousedown: 'mouseup', touchstart: 'touchend', pointerdown: 'touchend', MSPointerDown: 'touchend' },
          ri = {
            mousedown: 'mousemove',
            touchstart: 'touchmove',
            pointerdown: 'touchmove',
            MSPointerDown: 'touchmove'
          },
          ai = S.extend({
            options: { clickTolerance: 3 },
            initialize: function(t, e, i, n) {
              d(this, n), (this._element = t), (this._dragStartTarget = e || t), (this._preventOutline = i);
            },
            enable: function() {
              this._enabled || (ze(this._dragStartTarget, oi, this._onDown, this), (this._enabled = !0));
            },
            disable: function() {
              this._enabled &&
                (ai._dragging === this && this.finishDrag(),
                Ee(this._dragStartTarget, oi, this._onDown, this),
                (this._enabled = !1),
                (this._moved = !1));
            },
            _onDown: function(t) {
              if (
                !t._simulated &&
                this._enabled &&
                ((this._moved = !1),
                !ue(this._element, 'leaflet-zoom-anim') &&
                  !(ai._dragging || t.shiftKey || (1 !== t.which && 1 !== t.button && !t.touches)) &&
                  ((ai._dragging = this), this._preventOutline && be(this._element), xe(), Yt(), !this._moving))
              ) {
                this.fire('down');
                var e = t.touches ? t.touches[0] : t,
                  i = Ce(this._element);
                (this._startPoint = new Z(e.clientX, e.clientY)),
                  (this._parentScale = Te(i)),
                  ze(document, ri[t.type], this._onMove, this),
                  ze(document, si[t.type], this._onUp, this);
              }
            },
            _onMove: function(t) {
              if (!t._simulated && this._enabled)
                if (t.touches && t.touches.length > 1) this._moved = !0;
                else {
                  var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                    i = new Z(e.clientX, e.clientY)._subtract(this._startPoint);
                  (i.x || i.y) &&
                    (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                      ((i.x /= this._parentScale.x),
                      (i.y /= this._parentScale.y),
                      Ie(t),
                      this._moved ||
                        (this.fire('dragstart'),
                        (this._moved = !0),
                        (this._startPos = ye(this._element).subtract(i)),
                        ce(document.body, 'leaflet-dragging'),
                        (this._lastTarget = t.target || t.srcElement),
                        window.SVGElementInstance &&
                          this._lastTarget instanceof SVGElementInstance &&
                          (this._lastTarget = this._lastTarget.correspondingUseElement),
                        ce(this._lastTarget, 'leaflet-drag-target')),
                      (this._newPos = this._startPos.add(i)),
                      (this._moving = !0),
                      M(this._animRequest),
                      (this._lastEvent = t),
                      (this._animRequest = T(this._updatePosition, this, !0))));
                }
            },
            _updatePosition: function() {
              var t = { originalEvent: this._lastEvent };
              this.fire('predrag', t), ve(this._element, this._newPos), this.fire('drag', t);
            },
            _onUp: function(t) {
              !t._simulated && this._enabled && this.finishDrag();
            },
            finishDrag: function() {
              for (var t in (_e(document.body, 'leaflet-dragging'),
              this._lastTarget && (_e(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
              ri))
                Ee(document, ri[t], this._onMove, this), Ee(document, si[t], this._onUp, this);
              we(),
                Jt(),
                this._moved &&
                  this._moving &&
                  (M(this._animRequest), this.fire('dragend', { distance: this._newPos.distanceTo(this._startPos) })),
                (this._moving = !1),
                (ai._dragging = !1);
            }
          });
        function hi(t, e) {
          if (!e || !t.length) return t.slice();
          var i = e * e;
          return (t = (function(t, e) {
            var i = t.length,
              n = new (typeof Uint8Array !== void 0 + '' ? Uint8Array : Array)(i);
            (n[0] = n[i - 1] = 1),
              (function t(e, i, n, o, s) {
                var r,
                  a,
                  h,
                  l = 0;
                for (a = o + 1; a <= s - 1; a++) (h = pi(e[a], e[o], e[s], !0)) > l && ((r = a), (l = h));
                l > n && ((i[r] = 1), t(e, i, n, o, r), t(e, i, n, r, s));
              })(t, n, e, 0, i - 1);
            var o,
              s = [];
            for (o = 0; o < i; o++) n[o] && s.push(t[o]);
            return s;
          })(
            (t = (function(t, e) {
              for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                di(t[n], t[o]) > e && (i.push(t[n]), (o = n));
              return o < s - 1 && i.push(t[s - 1]), i;
            })(t, i)),
            i
          ));
        }
        function li(t, e, i) {
          return Math.sqrt(pi(t, e, i, !0));
        }
        function ui(t, e, i, n, o) {
          var s,
            r,
            a,
            h = n ? ii : _i(t, i),
            l = _i(e, i);
          for (ii = l; ; ) {
            if (!(h | l)) return [t, e];
            if (h & l) return !1;
            (a = _i((r = ci(t, e, (s = h || l), i, o)), i)), s === h ? ((t = r), (h = a)) : ((e = r), (l = a));
          }
        }
        function ci(t, e, i, n, o) {
          var s,
            r,
            a = e.x - t.x,
            h = e.y - t.y,
            l = n.min,
            u = n.max;
          return (
            8 & i
              ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y))
              : 4 & i
              ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y))
              : 2 & i
              ? ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a))
              : 1 & i && ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a)),
            new Z(s, r, o)
          );
        }
        function _i(t, e) {
          var i = 0;
          return (
            t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
            t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
            i
          );
        }
        function di(t, e) {
          var i = e.x - t.x,
            n = e.y - t.y;
          return i * i + n * n;
        }
        function pi(t, e, i, n) {
          var o,
            s = e.x,
            r = e.y,
            a = i.x - s,
            h = i.y - r,
            l = a * a + h * h;
          return (
            l > 0 &&
              ((o = ((t.x - s) * a + (t.y - r) * h) / l) > 1
                ? ((s = i.x), (r = i.y))
                : o > 0 && ((s += a * o), (r += h * o))),
            (a = t.x - s),
            (h = t.y - r),
            n ? a * a + h * h : new Z(s, r)
          );
        }
        function mi(t) {
          return !g(t[0]) || ('object' !== typeof t[0][0] && 'undefined' !== typeof t[0][0]);
        }
        function fi(t) {
          return console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'), mi(t);
        }
        var gi = (Object.freeze || Object)({
          simplify: hi,
          pointToSegmentDistance: li,
          closestPointOnSegment: function(t, e, i) {
            return pi(t, e, i);
          },
          clipSegment: ui,
          _getEdgeIntersection: ci,
          _getBitCode: _i,
          _sqClosestPointOnSegment: pi,
          isFlat: mi,
          _flat: fi
        });
        function vi(t, e, i) {
          var n,
            o,
            s,
            r,
            a,
            h,
            l,
            u,
            c,
            _ = [1, 4, 2, 8];
          for (o = 0, l = t.length; o < l; o++) t[o]._code = _i(t[o], e);
          for (r = 0; r < 4; r++) {
            for (u = _[r], n = [], o = 0, s = (l = t.length) - 1; o < l; s = o++)
              (a = t[o]),
                (h = t[s]),
                a._code & u
                  ? h._code & u || (((c = ci(h, a, u, e, i))._code = _i(c, e)), n.push(c))
                  : (h._code & u && (((c = ci(h, a, u, e, i))._code = _i(c, e)), n.push(c)), n.push(a));
            t = n;
          }
          return t;
        }
        var yi = (Object.freeze || Object)({ clipPolygon: vi }),
          Li = {
            project: function(t) {
              return new Z(t.lng, t.lat);
            },
            unproject: function(t) {
              return new j(t.y, t.x);
            },
            bounds: new A([-180, -90], [180, 90])
          },
          xi = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new A([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
              var e = Math.PI / 180,
                i = this.R,
                n = t.lat * e,
                o = this.R_MINOR / i,
                s = Math.sqrt(1 - o * o),
                r = s * Math.sin(n),
                a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
              return (n = -i * Math.log(Math.max(a, 1e-10))), new Z(t.lng * e * i, n);
            },
            unproject: function(t) {
              for (
                var e,
                  i = 180 / Math.PI,
                  n = this.R,
                  o = this.R_MINOR / n,
                  s = Math.sqrt(1 - o * o),
                  r = Math.exp(-t.y / n),
                  a = Math.PI / 2 - 2 * Math.atan(r),
                  h = 0,
                  l = 0.1;
                h < 15 && Math.abs(l) > 1e-7;
                h++
              )
                (e = s * Math.sin(a)),
                  (e = Math.pow((1 - e) / (1 + e), s / 2)),
                  (a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a);
              return new j(a * i, (t.x * i) / n);
            }
          },
          wi = (Object.freeze || Object)({ LonLat: Li, Mercator: xi, SphericalMercator: U }),
          bi = i({}, F, {
            code: 'EPSG:3395',
            projection: xi,
            transformation: (function() {
              var t = 0.5 / (Math.PI * xi.R);
              return W(t, 0.5, -t, 0.5);
            })()
          }),
          Pi = i({}, F, { code: 'EPSG:4326', projection: Li, transformation: W(1 / 180, 1, -1 / 180, 0.5) }),
          Ci = i({}, G, {
            projection: Li,
            transformation: W(1, 0, -1, 0),
            scale: function(t) {
              return Math.pow(2, t);
            },
            zoom: function(t) {
              return Math.log(t) / Math.LN2;
            },
            distance: function(t, e) {
              var i = e.lng - t.lng,
                n = e.lat - t.lat;
              return Math.sqrt(i * i + n * n);
            },
            infinite: !0
          });
        (G.Earth = F), (G.EPSG3395 = bi), (G.EPSG3857 = V), (G.EPSG900913 = q), (G.EPSG4326 = Pi), (G.Simple = Ci);
        var Ti = S.extend({
          options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
          addTo: function(t) {
            return t.addLayer(this), this;
          },
          remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
          },
          removeFrom: function(t) {
            return t && t.removeLayer(this), this;
          },
          getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane);
          },
          addInteractiveTarget: function(t) {
            return (this._map._targets[r(t)] = this), this;
          },
          removeInteractiveTarget: function(t) {
            return delete this._map._targets[r(t)], this;
          },
          getAttribution: function() {
            return this.options.attribution;
          },
          _layerAdd: function(t) {
            var e = t.target;
            if (e.hasLayer(this)) {
              if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
                var i = this.getEvents();
                e.on(i, this),
                  this.once(
                    'remove',
                    function() {
                      e.off(i, this);
                    },
                    this
                  );
              }
              this.onAdd(e),
                this.getAttribution &&
                  e.attributionControl &&
                  e.attributionControl.addAttribution(this.getAttribution()),
                this.fire('add'),
                e.fire('layeradd', { layer: this });
            }
          }
        });
        Ke.include({
          addLayer: function(t) {
            if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
            var e = r(t);
            return this._layers[e]
              ? this
              : ((this._layers[e] = t),
                (t._mapToAdd = this),
                t.beforeAdd && t.beforeAdd(this),
                this.whenReady(t._layerAdd, t),
                this);
          },
          removeLayer: function(t) {
            var e = r(t);
            return this._layers[e]
              ? (this._loaded && t.onRemove(this),
                t.getAttribution &&
                  this.attributionControl &&
                  this.attributionControl.removeAttribution(t.getAttribution()),
                delete this._layers[e],
                this._loaded && (this.fire('layerremove', { layer: t }), t.fire('remove')),
                (t._map = t._mapToAdd = null),
                this)
              : this;
          },
          hasLayer: function(t) {
            return !!t && r(t) in this._layers;
          },
          eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this;
          },
          _addLayers: function(t) {
            for (var e = 0, i = (t = t ? (g(t) ? t : [t]) : []).length; e < i; e++) this.addLayer(t[e]);
          },
          _addZoomLimit: function(t) {
            (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
              ((this._zoomBoundLayers[r(t)] = t), this._updateZoomLevels());
          },
          _removeZoomLimit: function(t) {
            var e = r(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
          },
          _updateZoomLevels: function() {
            var t = 1 / 0,
              e = -1 / 0,
              i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
              var o = this._zoomBoundLayers[n].options;
              (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
                (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
            }
            (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
              (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
              i !== this._getZoomSpan() && this.fire('zoomlevelschange'),
              void 0 === this.options.maxZoom &&
                this._layersMaxZoom &&
                this.getZoom() > this._layersMaxZoom &&
                this.setZoom(this._layersMaxZoom),
              void 0 === this.options.minZoom &&
                this._layersMinZoom &&
                this.getZoom() < this._layersMinZoom &&
                this.setZoom(this._layersMinZoom);
          }
        });
        var Mi = Ti.extend({
            initialize: function(t, e) {
              var i, n;
              if ((d(this, e), (this._layers = {}), t)) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
            },
            addLayer: function(t) {
              var e = this.getLayerId(t);
              return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
            },
            removeLayer: function(t) {
              var e = t in this._layers ? t : this.getLayerId(t);
              return (
                this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
              );
            },
            hasLayer: function(t) {
              return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
            },
            clearLayers: function() {
              return this.eachLayer(this.removeLayer, this);
            },
            invoke: function(t) {
              var e,
                i,
                n = Array.prototype.slice.call(arguments, 1);
              for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
              return this;
            },
            onAdd: function(t) {
              this.eachLayer(t.addLayer, t);
            },
            onRemove: function(t) {
              this.eachLayer(t.removeLayer, t);
            },
            eachLayer: function(t, e) {
              for (var i in this._layers) t.call(e, this._layers[i]);
              return this;
            },
            getLayer: function(t) {
              return this._layers[t];
            },
            getLayers: function() {
              var t = [];
              return this.eachLayer(t.push, t), t;
            },
            setZIndex: function(t) {
              return this.invoke('setZIndex', t);
            },
            getLayerId: function(t) {
              return r(t);
            }
          }),
          zi = Mi.extend({
            addLayer: function(t) {
              return this.hasLayer(t)
                ? this
                : (t.addEventParent(this), Mi.prototype.addLayer.call(this, t), this.fire('layeradd', { layer: t }));
            },
            removeLayer: function(t) {
              return this.hasLayer(t)
                ? (t in this._layers && (t = this._layers[t]),
                  t.removeEventParent(this),
                  Mi.prototype.removeLayer.call(this, t),
                  this.fire('layerremove', { layer: t }))
                : this;
            },
            setStyle: function(t) {
              return this.invoke('setStyle', t);
            },
            bringToFront: function() {
              return this.invoke('bringToFront');
            },
            bringToBack: function() {
              return this.invoke('bringToBack');
            },
            getBounds: function() {
              var t = new N();
              for (var e in this._layers) {
                var i = this._layers[e];
                t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
              }
              return t;
            }
          }),
          ki = k.extend({
            options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
            initialize: function(t) {
              d(this, t);
            },
            createIcon: function(t) {
              return this._createIcon('icon', t);
            },
            createShadow: function(t) {
              return this._createIcon('shadow', t);
            },
            _createIcon: function(t, e) {
              var i = this._getIconUrl(t);
              if (!i) {
                if ('icon' === t) throw new Error('iconUrl not set in Icon options (see the docs).');
                return null;
              }
              var n = this._createImg(i, e && 'IMG' === e.tagName ? e : null);
              return this._setIconStyles(n, t), n;
            },
            _setIconStyles: function(t, e) {
              var i = this.options,
                n = i[e + 'Size'];
              'number' === typeof n && (n = [n, n]);
              var o = B(n),
                s = B(('shadow' === e && i.shadowAnchor) || i.iconAnchor || (o && o.divideBy(2, !0)));
              (t.className = 'leaflet-marker-' + e + ' ' + (i.className || '')),
                s && ((t.style.marginLeft = -s.x + 'px'), (t.style.marginTop = -s.y + 'px')),
                o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
            },
            _createImg: function(t, e) {
              return ((e = e || document.createElement('img')).src = t), e;
            },
            _getIconUrl: function(t) {
              return (Pt && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
            }
          }),
          Ei = ki.extend({
            options: {
              iconUrl: 'marker-icon.png',
              iconRetinaUrl: 'marker-icon-2x.png',
              shadowUrl: 'marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              tooltipAnchor: [16, -28],
              shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
              return (
                Ei.imagePath || (Ei.imagePath = this._detectIconPath()),
                (this.options.imagePath || Ei.imagePath) + ki.prototype._getIconUrl.call(this, t)
              );
            },
            _detectIconPath: function() {
              var t = se('div', 'leaflet-default-icon-path', document.body),
                e = oe(t, 'background-image') || oe(t, 'backgroundImage');
              return (
                document.body.removeChild(t),
                (e =
                  null === e || 0 !== e.indexOf('url')
                    ? ''
                    : e.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, ''))
              );
            }
          }),
          Si = ei.extend({
            initialize: function(t) {
              this._marker = t;
            },
            addHooks: function() {
              var t = this._marker._icon;
              this._draggable || (this._draggable = new ai(t, t, !0)),
                this._draggable
                  .on(
                    {
                      dragstart: this._onDragStart,
                      predrag: this._onPreDrag,
                      drag: this._onDrag,
                      dragend: this._onDragEnd
                    },
                    this
                  )
                  .enable(),
                ce(t, 'leaflet-marker-draggable');
            },
            removeHooks: function() {
              this._draggable
                .off(
                  {
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                  },
                  this
                )
                .disable(),
                this._marker._icon && _e(this._marker._icon, 'leaflet-marker-draggable');
            },
            moved: function() {
              return this._draggable && this._draggable._moved;
            },
            _adjustPan: function(t) {
              var e = this._marker,
                i = e._map,
                n = this._marker.options.autoPanSpeed,
                o = this._marker.options.autoPanPadding,
                s = ye(e._icon),
                r = i.getPixelBounds(),
                a = i.getPixelOrigin(),
                h = I(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
              if (!h.contains(s)) {
                var l = B(
                  (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) -
                    (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
                  (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) -
                    (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
                ).multiplyBy(n);
                i.panBy(l, { animate: !1 }),
                  this._draggable._newPos._add(l),
                  this._draggable._startPos._add(l),
                  ve(e._icon, this._draggable._newPos),
                  this._onDrag(t),
                  (this._panRequest = T(this._adjustPan.bind(this, t)));
              }
            },
            _onDragStart: function() {
              (this._oldLatLng = this._marker.getLatLng()),
                this._marker
                  .closePopup()
                  .fire('movestart')
                  .fire('dragstart');
            },
            _onPreDrag: function(t) {
              this._marker.options.autoPan &&
                (M(this._panRequest), (this._panRequest = T(this._adjustPan.bind(this, t))));
            },
            _onDrag: function(t) {
              var e = this._marker,
                i = e._shadow,
                n = ye(e._icon),
                o = e._map.layerPointToLatLng(n);
              i && ve(i, n),
                (e._latlng = o),
                (t.latlng = o),
                (t.oldLatLng = this._oldLatLng),
                e.fire('move', t).fire('drag', t);
            },
            _onDragEnd: function(t) {
              M(this._panRequest), delete this._oldLatLng, this._marker.fire('moveend').fire('dragend', t);
            }
          }),
          Zi = Ti.extend({
            options: {
              icon: new Ei(),
              interactive: !0,
              keyboard: !0,
              title: '',
              alt: '',
              zIndexOffset: 0,
              opacity: 1,
              riseOnHover: !1,
              riseOffset: 250,
              pane: 'markerPane',
              shadowPane: 'shadowPane',
              bubblingMouseEvents: !1,
              draggable: !1,
              autoPan: !1,
              autoPanPadding: [50, 50],
              autoPanSpeed: 10
            },
            initialize: function(t, e) {
              d(this, e), (this._latlng = D(t));
            },
            onAdd: function(t) {
              (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
                this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
                this._initIcon(),
                this.update();
            },
            onRemove: function(t) {
              this.dragging && this.dragging.enabled() && ((this.options.draggable = !0), this.dragging.removeHooks()),
                delete this.dragging,
                this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
                this._removeIcon(),
                this._removeShadow();
            },
            getEvents: function() {
              return { zoom: this.update, viewreset: this.update };
            },
            getLatLng: function() {
              return this._latlng;
            },
            setLatLng: function(t) {
              var e = this._latlng;
              return (this._latlng = D(t)), this.update(), this.fire('move', { oldLatLng: e, latlng: this._latlng });
            },
            setZIndexOffset: function(t) {
              return (this.options.zIndexOffset = t), this.update();
            },
            getIcon: function() {
              return this.options.icon;
            },
            setIcon: function(t) {
              return (
                (this.options.icon = t),
                this._map && (this._initIcon(), this.update()),
                this._popup && this.bindPopup(this._popup, this._popup.options),
                this
              );
            },
            getElement: function() {
              return this._icon;
            },
            update: function() {
              if (this._icon && this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t);
              }
              return this;
            },
            _initIcon: function() {
              var t = this.options,
                e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
                i = t.icon.createIcon(this._icon),
                n = !1;
              i !== this._icon &&
                (this._icon && this._removeIcon(),
                (n = !0),
                t.title && (i.title = t.title),
                'IMG' === i.tagName && (i.alt = t.alt || '')),
                ce(i, e),
                t.keyboard && (i.tabIndex = '0'),
                (this._icon = i),
                t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });
              var o = t.icon.createShadow(this._shadow),
                s = !1;
              o !== this._shadow && (this._removeShadow(), (s = !0)),
                o && (ce(o, e), (o.alt = '')),
                (this._shadow = o),
                t.opacity < 1 && this._updateOpacity(),
                n && this.getPane().appendChild(this._icon),
                this._initInteraction(),
                o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
            },
            _removeIcon: function() {
              this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                re(this._icon),
                this.removeInteractiveTarget(this._icon),
                (this._icon = null);
            },
            _removeShadow: function() {
              this._shadow && re(this._shadow), (this._shadow = null);
            },
            _setPos: function(t) {
              this._icon && ve(this._icon, t),
                this._shadow && ve(this._shadow, t),
                (this._zIndex = t.y + this.options.zIndexOffset),
                this._resetZIndex();
            },
            _updateZIndex: function(t) {
              this._icon && (this._icon.style.zIndex = this._zIndex + t);
            },
            _animateZoom: function(t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
              this._setPos(e);
            },
            _initInteraction: function() {
              if (
                this.options.interactive &&
                (ce(this._icon, 'leaflet-interactive'), this.addInteractiveTarget(this._icon), Si)
              ) {
                var t = this.options.draggable;
                this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
                  (this.dragging = new Si(this)),
                  t && this.dragging.enable();
              }
            },
            setOpacity: function(t) {
              return (this.options.opacity = t), this._map && this._updateOpacity(), this;
            },
            _updateOpacity: function() {
              var t = this.options.opacity;
              this._icon && me(this._icon, t), this._shadow && me(this._shadow, t);
            },
            _bringToFront: function() {
              this._updateZIndex(this.options.riseOffset);
            },
            _resetZIndex: function() {
              this._updateZIndex(0);
            },
            _getPopupAnchor: function() {
              return this.options.icon.options.popupAnchor;
            },
            _getTooltipAnchor: function() {
              return this.options.icon.options.tooltipAnchor;
            }
          }),
          Oi = Ti.extend({
            options: {
              stroke: !0,
              color: '#3388ff',
              weight: 3,
              opacity: 1,
              lineCap: 'round',
              lineJoin: 'round',
              dashArray: null,
              dashOffset: null,
              fill: !1,
              fillColor: null,
              fillOpacity: 0.2,
              fillRule: 'evenodd',
              interactive: !0,
              bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
              this._renderer = t.getRenderer(this);
            },
            onAdd: function() {
              this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
            },
            onRemove: function() {
              this._renderer._removePath(this);
            },
            redraw: function() {
              return this._map && this._renderer._updatePath(this), this;
            },
            setStyle: function(t) {
              return (
                d(this, t),
                this._renderer &&
                  (this._renderer._updateStyle(this),
                  this.options.stroke && t && t.hasOwnProperty('weight') && this._updateBounds()),
                this
              );
            },
            bringToFront: function() {
              return this._renderer && this._renderer._bringToFront(this), this;
            },
            bringToBack: function() {
              return this._renderer && this._renderer._bringToBack(this), this;
            },
            getElement: function() {
              return this._path;
            },
            _reset: function() {
              this._project(), this._update();
            },
            _clickTolerance: function() {
              return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
            }
          }),
          Bi = Oi.extend({
            options: { fill: !0, radius: 10 },
            initialize: function(t, e) {
              d(this, e), (this._latlng = D(t)), (this._radius = this.options.radius);
            },
            setLatLng: function(t) {
              var e = this._latlng;
              return (this._latlng = D(t)), this.redraw(), this.fire('move', { oldLatLng: e, latlng: this._latlng });
            },
            getLatLng: function() {
              return this._latlng;
            },
            setRadius: function(t) {
              return (this.options.radius = this._radius = t), this.redraw();
            },
            getRadius: function() {
              return this._radius;
            },
            setStyle: function(t) {
              var e = (t && t.radius) || this._radius;
              return Oi.prototype.setStyle.call(this, t), this.setRadius(e), this;
            },
            _project: function() {
              (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
            },
            _updateBounds: function() {
              var t = this._radius,
                e = this._radiusY || t,
                i = this._clickTolerance(),
                n = [t + i, e + i];
              this._pxBounds = new A(this._point.subtract(n), this._point.add(n));
            },
            _update: function() {
              this._map && this._updatePath();
            },
            _updatePath: function() {
              this._renderer._updateCircle(this);
            },
            _empty: function() {
              return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
            },
            _containsPoint: function(t) {
              return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
            }
          }),
          Ai = Bi.extend({
            initialize: function(t, e, n) {
              if (
                ('number' === typeof e && (e = i({}, n, { radius: e })),
                d(this, e),
                (this._latlng = D(t)),
                isNaN(this.options.radius))
              )
                throw new Error('Circle radius cannot be NaN');
              this._mRadius = this.options.radius;
            },
            setRadius: function(t) {
              return (this._mRadius = t), this.redraw();
            },
            getRadius: function() {
              return this._mRadius;
            },
            getBounds: function() {
              var t = [this._radius, this._radiusY || this._radius];
              return new N(
                this._map.layerPointToLatLng(this._point.subtract(t)),
                this._map.layerPointToLatLng(this._point.add(t))
              );
            },
            setStyle: Oi.prototype.setStyle,
            _project: function() {
              var t = this._latlng.lng,
                e = this._latlng.lat,
                i = this._map,
                n = i.options.crs;
              if (n.distance === F.distance) {
                var o = Math.PI / 180,
                  s = this._mRadius / F.R / o,
                  r = i.project([e + s, t]),
                  a = i.project([e - s, t]),
                  h = r.add(a).divideBy(2),
                  l = i.unproject(h).lat,
                  u =
                    Math.acos(
                      (Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))
                    ) / o;
                (isNaN(u) || 0 === u) && (u = s / Math.cos((Math.PI / 180) * e)),
                  (this._point = h.subtract(i.getPixelOrigin())),
                  (this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x),
                  (this._radiusY = h.y - r.y);
              } else {
                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                (this._point = i.latLngToLayerPoint(this._latlng)),
                  (this._radius = this._point.x - i.latLngToLayerPoint(c).x);
              }
              this._updateBounds();
            }
          }),
          Ii = Oi.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function(t, e) {
              d(this, e), this._setLatLngs(t);
            },
            getLatLngs: function() {
              return this._latlngs;
            },
            setLatLngs: function(t) {
              return this._setLatLngs(t), this.redraw();
            },
            isEmpty: function() {
              return !this._latlngs.length;
            },
            closestLayerPoint: function(t) {
              for (var e, i, n = 1 / 0, o = null, s = pi, r = 0, a = this._parts.length; r < a; r++)
                for (var h = this._parts[r], l = 1, u = h.length; l < u; l++) {
                  var c = s(t, (e = h[l - 1]), (i = h[l]), !0);
                  c < n && ((n = c), (o = s(t, e, i)));
                }
              return o && (o.distance = Math.sqrt(n)), o;
            },
            getCenter: function() {
              if (!this._map) throw new Error('Must add layer to map before using getCenter()');
              var t,
                e,
                i,
                n,
                o,
                s,
                r,
                a = this._rings[0],
                h = a.length;
              if (!h) return null;
              for (t = 0, e = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
              if (0 === e) return this._map.layerPointToLatLng(a[0]);
              for (t = 0, n = 0; t < h - 1; t++)
                if (((o = a[t]), (s = a[t + 1]), (n += i = o.distanceTo(s)) > e))
                  return (
                    (r = (n - e) / i), this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
                  );
            },
            getBounds: function() {
              return this._bounds;
            },
            addLatLng: function(t, e) {
              return (e = e || this._defaultShape()), (t = D(t)), e.push(t), this._bounds.extend(t), this.redraw();
            },
            _setLatLngs: function(t) {
              (this._bounds = new N()), (this._latlngs = this._convertLatLngs(t));
            },
            _defaultShape: function() {
              return mi(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function(t) {
              for (var e = [], i = mi(t), n = 0, o = t.length; n < o; n++)
                i ? ((e[n] = D(t[n])), this._bounds.extend(e[n])) : (e[n] = this._convertLatLngs(t[n]));
              return e;
            },
            _project: function() {
              var t = new A();
              (this._rings = []),
                this._projectLatlngs(this._latlngs, this._rings, t),
                this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
            },
            _updateBounds: function() {
              var t = this._clickTolerance(),
                e = new Z(t, t);
              this._pxBounds = new A([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]);
            },
            _projectLatlngs: function(t, e, i) {
              var n,
                o,
                s = t[0] instanceof j,
                r = t.length;
              if (s) {
                for (o = [], n = 0; n < r; n++) (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
                e.push(o);
              } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
            },
            _clipPoints: function() {
              var t = this._renderer._bounds;
              if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
                if (this.options.noClip) this._parts = this._rings;
                else {
                  var e,
                    i,
                    n,
                    o,
                    s,
                    r,
                    a,
                    h = this._parts;
                  for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                    for (i = 0, s = (a = this._rings[e]).length; i < s - 1; i++)
                      (r = ui(a[i], a[i + 1], t, i, !0)) &&
                        ((h[n] = h[n] || []),
                        h[n].push(r[0]),
                        (r[1] === a[i + 1] && i !== s - 2) || (h[n].push(r[1]), n++));
                }
            },
            _simplifyPoints: function() {
              for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
                t[i] = hi(t[i], e);
            },
            _update: function() {
              this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
            },
            _updatePath: function() {
              this._renderer._updatePoly(this);
            },
            _containsPoint: function(t, e) {
              var i,
                n,
                o,
                s,
                r,
                a,
                h = this._clickTolerance();
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (i = 0, s = this._parts.length; i < s; i++)
                for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++)
                  if ((e || 0 !== n) && li(t, a[o], a[n]) <= h) return !0;
              return !1;
            }
          });
        Ii._flat = fi;
        var Ni = Ii.extend({
            options: { fill: !0 },
            isEmpty: function() {
              return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function() {
              if (!this._map) throw new Error('Must add layer to map before using getCenter()');
              var t,
                e,
                i,
                n,
                o,
                s,
                r,
                a,
                h,
                l = this._rings[0],
                u = l.length;
              if (!u) return null;
              for (s = r = a = 0, t = 0, e = u - 1; t < u; e = t++)
                (i = l[t]),
                  (n = l[e]),
                  (o = i.y * n.x - n.y * i.x),
                  (r += (i.x + n.x) * o),
                  (a += (i.y + n.y) * o),
                  (s += 3 * o);
              return (h = 0 === s ? l[0] : [r / s, a / s]), this._map.layerPointToLatLng(h);
            },
            _convertLatLngs: function(t) {
              var e = Ii.prototype._convertLatLngs.call(this, t),
                i = e.length;
              return i >= 2 && e[0] instanceof j && e[0].equals(e[i - 1]) && e.pop(), e;
            },
            _setLatLngs: function(t) {
              Ii.prototype._setLatLngs.call(this, t), mi(this._latlngs) && (this._latlngs = [this._latlngs]);
            },
            _defaultShape: function() {
              return mi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
            },
            _clipPoints: function() {
              var t = this._renderer._bounds,
                e = this.options.weight,
                i = new Z(e, e);
              if (
                ((t = new A(t.min.subtract(i), t.max.add(i))),
                (this._parts = []),
                this._pxBounds && this._pxBounds.intersects(t))
              )
                if (this.options.noClip) this._parts = this._rings;
                else
                  for (var n, o = 0, s = this._rings.length; o < s; o++)
                    (n = vi(this._rings[o], t, !0)).length && this._parts.push(n);
            },
            _updatePath: function() {
              this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function(t) {
              var e,
                i,
                n,
                o,
                s,
                r,
                a,
                h,
                l = !1;
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (o = 0, a = this._parts.length; o < a; o++)
                for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++)
                  (i = e[s]),
                    (n = e[r]),
                    i.y > t.y !== n.y > t.y && t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x && (l = !l);
              return l || Ii.prototype._containsPoint.call(this, t, !0);
            }
          }),
          Ri = zi.extend({
            initialize: function(t, e) {
              d(this, e), (this._layers = {}), t && this.addData(t);
            },
            addData: function(t) {
              var e,
                i,
                n,
                o = g(t) ? t : t.features;
              if (o) {
                for (e = 0, i = o.length; e < i; e++)
                  ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this;
              }
              var s = this.options;
              if (s.filter && !s.filter(t)) return this;
              var r = ji(t, s);
              return r
                ? ((r.feature = Vi(t)),
                  (r.defaultOptions = r.options),
                  this.resetStyle(r),
                  s.onEachFeature && s.onEachFeature(t, r),
                  this.addLayer(r))
                : this;
            },
            resetStyle: function(t) {
              return void 0 === t
                ? this.eachLayer(this.resetStyle, this)
                : ((t.options = i({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this);
            },
            setStyle: function(t) {
              return this.eachLayer(function(e) {
                this._setLayerStyle(e, t);
              }, this);
            },
            _setLayerStyle: function(t, e) {
              t.setStyle && ('function' === typeof e && (e = e(t.feature)), t.setStyle(e));
            }
          });
        function ji(t, e) {
          var i,
            n,
            o,
            s,
            r = 'Feature' === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            l = e && e.pointToLayer,
            u = (e && e.coordsToLatLng) || Gi;
          if (!a && !r) return null;
          switch (r.type) {
            case 'Point':
              return Di(l, t, (i = u(a)), e);
            case 'MultiPoint':
              for (o = 0, s = a.length; o < s; o++) (i = u(a[o])), h.push(Di(l, t, i, e));
              return new zi(h);
            case 'LineString':
            case 'MultiLineString':
              return (n = Fi(a, 'LineString' === r.type ? 0 : 1, u)), new Ii(n, e);
            case 'Polygon':
            case 'MultiPolygon':
              return (n = Fi(a, 'Polygon' === r.type ? 1 : 2, u)), new Ni(n, e);
            case 'GeometryCollection':
              for (o = 0, s = r.geometries.length; o < s; o++) {
                var c = ji({ geometry: r.geometries[o], type: 'Feature', properties: t.properties }, e);
                c && h.push(c);
              }
              return new zi(h);
            default:
              throw new Error('Invalid GeoJSON object.');
          }
        }
        function Di(t, e, i, n) {
          return t ? t(e, i) : new Zi(i, n && n.markersInheritOptions && n);
        }
        function Gi(t) {
          return new j(t[1], t[0], t[2]);
        }
        function Fi(t, e, i) {
          for (var n, o = [], s = 0, r = t.length; s < r; s++)
            (n = e ? Fi(t[s], e - 1, i) : (i || Gi)(t[s])), o.push(n);
          return o;
        }
        function Ui(t, e) {
          return (
            (e = 'number' === typeof e ? e : 6),
            void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
          );
        }
        function Hi(t, e, i, n) {
          for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? Hi(t[s], e - 1, i, n) : Ui(t[s], n));
          return !e && i && o.push(o[0]), o;
        }
        function Wi(t, e) {
          return t.feature ? i({}, t.feature, { geometry: e }) : Vi(e);
        }
        function Vi(t) {
          return 'Feature' === t.type || 'FeatureCollection' === t.type
            ? t
            : { type: 'Feature', properties: {}, geometry: t };
        }
        var qi = {
          toGeoJSON: function(t) {
            return Wi(this, { type: 'Point', coordinates: Ui(this.getLatLng(), t) });
          }
        };
        function Ki(t, e) {
          return new Ri(t, e);
        }
        Zi.include(qi),
          Ai.include(qi),
          Bi.include(qi),
          Ii.include({
            toGeoJSON: function(t) {
              var e = !mi(this._latlngs);
              return Wi(this, {
                type: (e ? 'Multi' : '') + 'LineString',
                coordinates: Hi(this._latlngs, e ? 1 : 0, !1, t)
              });
            }
          }),
          Ni.include({
            toGeoJSON: function(t) {
              var e = !mi(this._latlngs),
                i = e && !mi(this._latlngs[0]),
                n = Hi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
              return e || (n = [n]), Wi(this, { type: (i ? 'Multi' : '') + 'Polygon', coordinates: n });
            }
          }),
          Mi.include({
            toMultiPoint: function(t) {
              var e = [];
              return (
                this.eachLayer(function(i) {
                  e.push(i.toGeoJSON(t).geometry.coordinates);
                }),
                Wi(this, { type: 'MultiPoint', coordinates: e })
              );
            },
            toGeoJSON: function(t) {
              var e = this.feature && this.feature.geometry && this.feature.geometry.type;
              if ('MultiPoint' === e) return this.toMultiPoint(t);
              var i = 'GeometryCollection' === e,
                n = [];
              return (
                this.eachLayer(function(e) {
                  if (e.toGeoJSON) {
                    var o = e.toGeoJSON(t);
                    if (i) n.push(o.geometry);
                    else {
                      var s = Vi(o);
                      'FeatureCollection' === s.type ? n.push.apply(n, s.features) : n.push(s);
                    }
                  }
                }),
                i ? Wi(this, { geometries: n, type: 'GeometryCollection' }) : { type: 'FeatureCollection', features: n }
              );
            }
          });
        var Yi = Ki,
          Ji = Ti.extend({
            options: {
              opacity: 1,
              alt: '',
              interactive: !1,
              crossOrigin: !1,
              errorOverlayUrl: '',
              zIndex: 1,
              className: ''
            },
            initialize: function(t, e, i) {
              (this._url = t), (this._bounds = R(e)), d(this, i);
            },
            onAdd: function() {
              this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
                this.options.interactive &&
                  (ce(this._image, 'leaflet-interactive'), this.addInteractiveTarget(this._image)),
                this.getPane().appendChild(this._image),
                this._reset();
            },
            onRemove: function() {
              re(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
            },
            setOpacity: function(t) {
              return (this.options.opacity = t), this._image && this._updateOpacity(), this;
            },
            setStyle: function(t) {
              return t.opacity && this.setOpacity(t.opacity), this;
            },
            bringToFront: function() {
              return this._map && he(this._image), this;
            },
            bringToBack: function() {
              return this._map && le(this._image), this;
            },
            setUrl: function(t) {
              return (this._url = t), this._image && (this._image.src = t), this;
            },
            setBounds: function(t) {
              return (this._bounds = R(t)), this._map && this._reset(), this;
            },
            getEvents: function() {
              var t = { zoom: this._reset, viewreset: this._reset };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
            },
            setZIndex: function(t) {
              return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            getBounds: function() {
              return this._bounds;
            },
            getElement: function() {
              return this._image;
            },
            _initImage: function() {
              var t = 'IMG' === this._url.tagName,
                e = (this._image = t ? this._url : se('img'));
              ce(e, 'leaflet-image-layer'),
                this._zoomAnimated && ce(e, 'leaflet-zoom-animated'),
                this.options.className && ce(e, this.options.className),
                (e.onselectstart = l),
                (e.onmousemove = l),
                (e.onload = o(this.fire, this, 'load')),
                (e.onerror = o(this._overlayOnError, this, 'error')),
                (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                  (e.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                this.options.zIndex && this._updateZIndex(),
                t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
            },
            _animateZoom: function(t) {
              var e = this._map.getZoomScale(t.zoom),
                i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
              ge(this._image, i, e);
            },
            _reset: function() {
              var t = this._image,
                e = new A(
                  this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                  this._map.latLngToLayerPoint(this._bounds.getSouthEast())
                ),
                i = e.getSize();
              ve(t, e.min), (t.style.width = i.x + 'px'), (t.style.height = i.y + 'px');
            },
            _updateOpacity: function() {
              me(this._image, this.options.opacity);
            },
            _updateZIndex: function() {
              this._image &&
                void 0 !== this.options.zIndex &&
                null !== this.options.zIndex &&
                (this._image.style.zIndex = this.options.zIndex);
            },
            _overlayOnError: function() {
              this.fire('error');
              var t = this.options.errorOverlayUrl;
              t && this._url !== t && ((this._url = t), (this._image.src = t));
            }
          }),
          Xi = Ji.extend({
            options: { autoplay: !0, loop: !0, keepAspectRatio: !0 },
            _initImage: function() {
              var t = 'VIDEO' === this._url.tagName,
                e = (this._image = t ? this._url : se('video'));
              if (
                (ce(e, 'leaflet-image-layer'),
                this._zoomAnimated && ce(e, 'leaflet-zoom-animated'),
                this.options.className && ce(e, this.options.className),
                (e.onselectstart = l),
                (e.onmousemove = l),
                (e.onloadeddata = o(this.fire, this, 'load')),
                t)
              ) {
                for (var i = e.getElementsByTagName('source'), n = [], s = 0; s < i.length; s++) n.push(i[s].src);
                this._url = i.length > 0 ? n : [e.src];
              } else {
                g(this._url) || (this._url = [this._url]),
                  !this.options.keepAspectRatio && e.style.hasOwnProperty('objectFit') && (e.style.objectFit = 'fill'),
                  (e.autoplay = !!this.options.autoplay),
                  (e.loop = !!this.options.loop);
                for (var r = 0; r < this._url.length; r++) {
                  var a = se('source');
                  (a.src = this._url[r]), e.appendChild(a);
                }
              }
            }
          }),
          $i = Ji.extend({
            _initImage: function() {
              var t = (this._image = this._url);
              ce(t, 'leaflet-image-layer'),
                this._zoomAnimated && ce(t, 'leaflet-zoom-animated'),
                this.options.className && ce(t, this.options.className),
                (t.onselectstart = l),
                (t.onmousemove = l);
            }
          }),
          Qi = Ti.extend({
            options: { offset: [0, 7], className: '', pane: 'popupPane' },
            initialize: function(t, e) {
              d(this, t), (this._source = e);
            },
            onAdd: function(t) {
              (this._zoomAnimated = t._zoomAnimated),
                this._container || this._initLayout(),
                t._fadeAnimated && me(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                t._fadeAnimated && me(this._container, 1),
                this.bringToFront();
            },
            onRemove: function(t) {
              t._fadeAnimated
                ? (me(this._container, 0), (this._removeTimeout = setTimeout(o(re, void 0, this._container), 200)))
                : re(this._container);
            },
            getLatLng: function() {
              return this._latlng;
            },
            setLatLng: function(t) {
              return (this._latlng = D(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
            },
            getContent: function() {
              return this._content;
            },
            setContent: function(t) {
              return (this._content = t), this.update(), this;
            },
            getElement: function() {
              return this._container;
            },
            update: function() {
              this._map &&
                ((this._container.style.visibility = 'hidden'),
                this._updateContent(),
                this._updateLayout(),
                this._updatePosition(),
                (this._container.style.visibility = ''),
                this._adjustPan());
            },
            getEvents: function() {
              var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
            },
            isOpen: function() {
              return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function() {
              return this._map && he(this._container), this;
            },
            bringToBack: function() {
              return this._map && le(this._container), this;
            },
            _prepareOpen: function(t, e, i) {
              if ((e instanceof Ti || ((i = e), (e = t)), e instanceof zi))
                for (var n in t._layers) {
                  e = t._layers[n];
                  break;
                }
              if (!i)
                if (e.getCenter) i = e.getCenter();
                else {
                  if (!e.getLatLng) throw new Error('Unable to get source layer LatLng.');
                  i = e.getLatLng();
                }
              return (this._source = e), this.update(), i;
            },
            _updateContent: function() {
              if (this._content) {
                var t = this._contentNode,
                  e = 'function' === typeof this._content ? this._content(this._source || this) : this._content;
                if ('string' === typeof e) t.innerHTML = e;
                else {
                  for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                  t.appendChild(e);
                }
                this.fire('contentupdate');
              }
            },
            _updatePosition: function() {
              if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                  e = B(this.options.offset),
                  i = this._getAnchor();
                this._zoomAnimated ? ve(this._container, t.add(i)) : (e = e.add(t).add(i));
                var n = (this._containerBottom = -e.y),
                  o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
                (this._container.style.bottom = n + 'px'), (this._container.style.left = o + 'px');
              }
            },
            _getAnchor: function() {
              return [0, 0];
            }
          }),
          tn = Qi.extend({
            options: {
              maxWidth: 300,
              minWidth: 50,
              maxHeight: null,
              autoPan: !0,
              autoPanPaddingTopLeft: null,
              autoPanPaddingBottomRight: null,
              autoPanPadding: [5, 5],
              keepInView: !1,
              closeButton: !0,
              autoClose: !0,
              closeOnEscapeKey: !0,
              className: ''
            },
            openOn: function(t) {
              return t.openPopup(this), this;
            },
            onAdd: function(t) {
              Qi.prototype.onAdd.call(this, t),
                t.fire('popupopen', { popup: this }),
                this._source &&
                  (this._source.fire('popupopen', { popup: this }, !0),
                  this._source instanceof Oi || this._source.on('preclick', Oe));
            },
            onRemove: function(t) {
              Qi.prototype.onRemove.call(this, t),
                t.fire('popupclose', { popup: this }),
                this._source &&
                  (this._source.fire('popupclose', { popup: this }, !0),
                  this._source instanceof Oi || this._source.off('preclick', Oe));
            },
            getEvents: function() {
              var t = Qi.prototype.getEvents.call(this);
              return (
                (void 0 !== this.options.closeOnClick
                  ? this.options.closeOnClick
                  : this._map.options.closePopupOnClick) && (t.preclick = this._close),
                this.options.keepInView && (t.moveend = this._adjustPan),
                t
              );
            },
            _close: function() {
              this._map && this._map.closePopup(this);
            },
            _initLayout: function() {
              var t = 'leaflet-popup',
                e = (this._container = se('div', t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated')),
                i = (this._wrapper = se('div', t + '-content-wrapper', e));
              if (
                ((this._contentNode = se('div', t + '-content', i)),
                Ae(i),
                Be(this._contentNode),
                ze(i, 'contextmenu', Oe),
                (this._tipContainer = se('div', t + '-tip-container', e)),
                (this._tip = se('div', t + '-tip', this._tipContainer)),
                this.options.closeButton)
              ) {
                var n = (this._closeButton = se('a', t + '-close-button', e));
                (n.href = '#close'), (n.innerHTML = '&#215;'), ze(n, 'click', this._onCloseButtonClick, this);
              }
            },
            _updateLayout: function() {
              var t = this._contentNode,
                e = t.style;
              (e.width = ''), (e.whiteSpace = 'nowrap');
              var i = t.offsetWidth;
              (i = Math.min(i, this.options.maxWidth)),
                (i = Math.max(i, this.options.minWidth)),
                (e.width = i + 1 + 'px'),
                (e.whiteSpace = ''),
                (e.height = '');
              var n = t.offsetHeight,
                o = this.options.maxHeight;
              o && n > o ? ((e.height = o + 'px'), ce(t, 'leaflet-popup-scrolled')) : _e(t, 'leaflet-popup-scrolled'),
                (this._containerWidth = this._container.offsetWidth);
            },
            _animateZoom: function(t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                i = this._getAnchor();
              ve(this._container, e.add(i));
            },
            _adjustPan: function() {
              if (this.options.autoPan) {
                this._map._panAnim && this._map._panAnim.stop();
                var t = this._map,
                  e = parseInt(oe(this._container, 'marginBottom'), 10) || 0,
                  i = this._container.offsetHeight + e,
                  n = this._containerWidth,
                  o = new Z(this._containerLeft, -i - this._containerBottom);
                o._add(ye(this._container));
                var s = t.layerPointToContainerPoint(o),
                  r = B(this.options.autoPanPadding),
                  a = B(this.options.autoPanPaddingTopLeft || r),
                  h = B(this.options.autoPanPaddingBottomRight || r),
                  l = t.getSize(),
                  u = 0,
                  c = 0;
                s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x),
                  s.x - u - a.x < 0 && (u = s.x - a.x),
                  s.y + i + h.y > l.y && (c = s.y + i - l.y + h.y),
                  s.y - c - a.y < 0 && (c = s.y - a.y),
                  (u || c) && t.fire('autopanstart').panBy([u, c]);
              }
            },
            _onCloseButtonClick: function(t) {
              this._close(), Ne(t);
            },
            _getAnchor: function() {
              return B(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
            }
          });
        Ke.mergeOptions({ closePopupOnClick: !0 }),
          Ke.include({
            openPopup: function(t, e, i) {
              return (
                t instanceof tn || (t = new tn(i).setContent(t)),
                e && t.setLatLng(e),
                this.hasLayer(t)
                  ? this
                  : (this._popup && this._popup.options.autoClose && this.closePopup(),
                    (this._popup = t),
                    this.addLayer(t))
              );
            },
            closePopup: function(t) {
              return (
                (t && t !== this._popup) || ((t = this._popup), (this._popup = null)), t && this.removeLayer(t), this
              );
            }
          }),
          Ti.include({
            bindPopup: function(t, e) {
              return (
                t instanceof tn
                  ? (d(t, e), (this._popup = t), (t._source = this))
                  : ((this._popup && !e) || (this._popup = new tn(e, this)), this._popup.setContent(t)),
                this._popupHandlersAdded ||
                  (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                  }),
                  (this._popupHandlersAdded = !0)),
                this
              );
            },
            unbindPopup: function() {
              return (
                this._popup &&
                  (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                  }),
                  (this._popupHandlersAdded = !1),
                  (this._popup = null)),
                this
              );
            },
            openPopup: function(t, e) {
              return (
                this._popup &&
                  this._map &&
                  ((e = this._popup._prepareOpen(this, t, e)), this._map.openPopup(this._popup, e)),
                this
              );
            },
            closePopup: function() {
              return this._popup && this._popup._close(), this;
            },
            togglePopup: function(t) {
              return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
            },
            isPopupOpen: function() {
              return !!this._popup && this._popup.isOpen();
            },
            setPopupContent: function(t) {
              return this._popup && this._popup.setContent(t), this;
            },
            getPopup: function() {
              return this._popup;
            },
            _openPopup: function(t) {
              var e = t.layer || t.target;
              this._popup &&
                this._map &&
                (Ne(t),
                e instanceof Oi
                  ? this.openPopup(t.layer || t.target, t.latlng)
                  : this._map.hasLayer(this._popup) && this._popup._source === e
                  ? this.closePopup()
                  : this.openPopup(e, t.latlng));
            },
            _movePopup: function(t) {
              this._popup.setLatLng(t.latlng);
            },
            _onKeyPress: function(t) {
              13 === t.originalEvent.keyCode && this._openPopup(t);
            }
          });
        var en = Qi.extend({
          options: {
            pane: 'tooltipPane',
            offset: [0, 0],
            direction: 'auto',
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: 0.9
          },
          onAdd: function(t) {
            Qi.prototype.onAdd.call(this, t),
              this.setOpacity(this.options.opacity),
              t.fire('tooltipopen', { tooltip: this }),
              this._source && this._source.fire('tooltipopen', { tooltip: this }, !0);
          },
          onRemove: function(t) {
            Qi.prototype.onRemove.call(this, t),
              t.fire('tooltipclose', { tooltip: this }),
              this._source && this._source.fire('tooltipclose', { tooltip: this }, !0);
          },
          getEvents: function() {
            var t = Qi.prototype.getEvents.call(this);
            return xt && !this.options.permanent && (t.preclick = this._close), t;
          },
          _close: function() {
            this._map && this._map.closeTooltip(this);
          },
          _initLayout: function() {
            var t =
              'leaflet-tooltip ' +
              (this.options.className || '') +
              ' leaflet-zoom-' +
              (this._zoomAnimated ? 'animated' : 'hide');
            this._contentNode = this._container = se('div', t);
          },
          _updateLayout: function() {},
          _adjustPan: function() {},
          _setPosition: function(t) {
            var e = this._map,
              i = this._container,
              n = e.latLngToContainerPoint(e.getCenter()),
              o = e.layerPointToContainerPoint(t),
              s = this.options.direction,
              r = i.offsetWidth,
              a = i.offsetHeight,
              h = B(this.options.offset),
              l = this._getAnchor();
            'top' === s
              ? (t = t.add(B(-r / 2 + h.x, -a + h.y + l.y, !0)))
              : 'bottom' === s
              ? (t = t.subtract(B(r / 2 - h.x, -h.y, !0)))
              : 'center' === s
              ? (t = t.subtract(B(r / 2 + h.x, a / 2 - l.y + h.y, !0)))
              : 'right' === s || ('auto' === s && o.x < n.x)
              ? ((s = 'right'), (t = t.add(B(h.x + l.x, l.y - a / 2 + h.y, !0))))
              : ((s = 'left'), (t = t.subtract(B(r + l.x - h.x, a / 2 - l.y - h.y, !0)))),
              _e(i, 'leaflet-tooltip-right'),
              _e(i, 'leaflet-tooltip-left'),
              _e(i, 'leaflet-tooltip-top'),
              _e(i, 'leaflet-tooltip-bottom'),
              ce(i, 'leaflet-tooltip-' + s),
              ve(i, t);
          },
          _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t);
          },
          setOpacity: function(t) {
            (this.options.opacity = t), this._container && me(this._container, t);
          },
          _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e);
          },
          _getAnchor: function() {
            return B(
              this._source && this._source._getTooltipAnchor && !this.options.sticky
                ? this._source._getTooltipAnchor()
                : [0, 0]
            );
          }
        });
        Ke.include({
          openTooltip: function(t, e, i) {
            return (
              t instanceof en || (t = new en(i).setContent(t)),
              e && t.setLatLng(e),
              this.hasLayer(t) ? this : this.addLayer(t)
            );
          },
          closeTooltip: function(t) {
            return t && this.removeLayer(t), this;
          }
        }),
          Ti.include({
            bindTooltip: function(t, e) {
              return (
                t instanceof en
                  ? (d(t, e), (this._tooltip = t), (t._source = this))
                  : ((this._tooltip && !e) || (this._tooltip = new en(e, this)), this._tooltip.setContent(t)),
                this._initTooltipInteractions(),
                this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                this
              );
            },
            unbindTooltip: function() {
              return (
                this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)), this
              );
            },
            _initTooltipInteractions: function(t) {
              if (t || !this._tooltipHandlersAdded) {
                var e = t ? 'off' : 'on',
                  i = { remove: this.closeTooltip, move: this._moveTooltip };
                this._tooltip.options.permanent
                  ? (i.add = this._openTooltip)
                  : ((i.mouseover = this._openTooltip),
                    (i.mouseout = this.closeTooltip),
                    this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                    xt && (i.click = this._openTooltip)),
                  this[e](i),
                  (this._tooltipHandlersAdded = !t);
              }
            },
            openTooltip: function(t, e) {
              return (
                this._tooltip &&
                  this._map &&
                  ((e = this._tooltip._prepareOpen(this, t, e)),
                  this._map.openTooltip(this._tooltip, e),
                  this._tooltip.options.interactive &&
                    this._tooltip._container &&
                    (ce(this._tooltip._container, 'leaflet-clickable'),
                    this.addInteractiveTarget(this._tooltip._container))),
                this
              );
            },
            closeTooltip: function() {
              return (
                this._tooltip &&
                  (this._tooltip._close(),
                  this._tooltip.options.interactive &&
                    this._tooltip._container &&
                    (_e(this._tooltip._container, 'leaflet-clickable'),
                    this.removeInteractiveTarget(this._tooltip._container))),
                this
              );
            },
            toggleTooltip: function(t) {
              return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
            },
            isTooltipOpen: function() {
              return this._tooltip.isOpen();
            },
            setTooltipContent: function(t) {
              return this._tooltip && this._tooltip.setContent(t), this;
            },
            getTooltip: function() {
              return this._tooltip;
            },
            _openTooltip: function(t) {
              var e = t.layer || t.target;
              this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0);
            },
            _moveTooltip: function(t) {
              var e,
                i,
                n = t.latlng;
              this._tooltip.options.sticky &&
                t.originalEvent &&
                ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
                (i = this._map.containerPointToLayerPoint(e)),
                (n = this._map.layerPointToLatLng(i))),
                this._tooltip.setLatLng(n);
            }
          });
        var nn = ki.extend({
          options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon' },
          createIcon: function(t) {
            var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
              i = this.options;
            if (
              (i.html instanceof Element ? (ae(e), e.appendChild(i.html)) : (e.innerHTML = !1 !== i.html ? i.html : ''),
              i.bgPos)
            ) {
              var n = B(i.bgPos);
              e.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
            }
            return this._setIconStyles(e, 'icon'), e;
          },
          createShadow: function() {
            return null;
          }
        });
        ki.Default = Ei;
        var on = Ti.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: ft,
              updateWhenZooming: !0,
              updateInterval: 200,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              maxNativeZoom: void 0,
              minNativeZoom: void 0,
              noWrap: !1,
              pane: 'tilePane',
              className: '',
              keepBuffer: 2
            },
            initialize: function(t) {
              d(this, t);
            },
            onAdd: function() {
              this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView(), this._update();
            },
            beforeAdd: function(t) {
              t._addZoomLimit(this);
            },
            onRemove: function(t) {
              this._removeAllTiles(),
                re(this._container),
                t._removeZoomLimit(this),
                (this._container = null),
                (this._tileZoom = void 0);
            },
            bringToFront: function() {
              return this._map && (he(this._container), this._setAutoZIndex(Math.max)), this;
            },
            bringToBack: function() {
              return this._map && (le(this._container), this._setAutoZIndex(Math.min)), this;
            },
            getContainer: function() {
              return this._container;
            },
            setOpacity: function(t) {
              return (this.options.opacity = t), this._updateOpacity(), this;
            },
            setZIndex: function(t) {
              return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            isLoading: function() {
              return this._loading;
            },
            redraw: function() {
              return this._map && (this._removeAllTiles(), this._update()), this;
            },
            getEvents: function() {
              var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
              };
              return (
                this.options.updateWhenIdle ||
                  (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)),
                  (t.move = this._onMove)),
                this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
              );
            },
            createTile: function() {
              return document.createElement('div');
            },
            getTileSize: function() {
              var t = this.options.tileSize;
              return t instanceof Z ? t : new Z(t, t);
            },
            _updateZIndex: function() {
              this._container &&
                void 0 !== this.options.zIndex &&
                null !== this.options.zIndex &&
                (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function(t) {
              for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++)
                (e = i[o].style.zIndex), i[o] !== this._container && e && (n = t(n, +e));
              isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
            },
            _updateOpacity: function() {
              if (this._map && !$) {
                me(this._container, this.options.opacity);
                var t = +new Date(),
                  e = !1,
                  i = !1;
                for (var n in this._tiles) {
                  var o = this._tiles[n];
                  if (o.current && o.loaded) {
                    var s = Math.min(1, (t - o.loaded) / 200);
                    me(o.el, s), s < 1 ? (e = !0) : (o.active ? (i = !0) : this._onOpaqueTile(o), (o.active = !0));
                  }
                }
                i && !this._noPrune && this._pruneTiles(),
                  e && (M(this._fadeFrame), (this._fadeFrame = T(this._updateOpacity, this)));
              }
            },
            _onOpaqueTile: l,
            _initContainer: function() {
              this._container ||
                ((this._container = se('div', 'leaflet-layer ' + (this.options.className || ''))),
                this._updateZIndex(),
                this.options.opacity < 1 && this._updateOpacity(),
                this.getPane().appendChild(this._container));
            },
            _updateLevels: function() {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              if (void 0 !== t) {
                for (var i in this._levels)
                  this._levels[i].el.children.length || i === t
                    ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)), this._onUpdateLevel(i))
                    : (re(this._levels[i].el),
                      this._removeTilesAtZoom(i),
                      this._onRemoveLevel(i),
                      delete this._levels[i]);
                var n = this._levels[t],
                  o = this._map;
                return (
                  n ||
                    (((n = this._levels[t] = {}).el = se(
                      'div',
                      'leaflet-tile-container leaflet-zoom-animated',
                      this._container
                    )),
                    (n.el.style.zIndex = e),
                    (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
                    (n.zoom = t),
                    this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                    n.el.offsetWidth,
                    this._onCreateLevel(n)),
                  (this._level = n),
                  n
                );
              }
            },
            _onUpdateLevel: l,
            _onRemoveLevel: l,
            _onCreateLevel: l,
            _pruneTiles: function() {
              if (this._map) {
                var t,
                  e,
                  i = this._map.getZoom();
                if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                else {
                  for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                  for (t in this._tiles)
                    if ((e = this._tiles[t]).current && !e.active) {
                      var n = e.coords;
                      this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
                    }
                  for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
                }
              }
            },
            _removeTilesAtZoom: function(t) {
              for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
            },
            _removeAllTiles: function() {
              for (var t in this._tiles) this._removeTile(t);
            },
            _invalidateAll: function() {
              for (var t in this._levels) re(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
              this._removeAllTiles(), (this._tileZoom = void 0);
            },
            _retainParent: function(t, e, i, n) {
              var o = Math.floor(t / 2),
                s = Math.floor(e / 2),
                r = i - 1,
                a = new Z(+o, +s);
              a.z = +r;
              var h = this._tileCoordsToKey(a),
                l = this._tiles[h];
              return l && l.active
                ? ((l.retain = !0), !0)
                : (l && l.loaded && (l.retain = !0), r > n && this._retainParent(o, s, r, n));
            },
            _retainChildren: function(t, e, i, n) {
              for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var s = 2 * e; s < 2 * e + 2; s++) {
                  var r = new Z(o, s);
                  r.z = i + 1;
                  var a = this._tileCoordsToKey(r),
                    h = this._tiles[a];
                  h && h.active
                    ? (h.retain = !0)
                    : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
                }
            },
            _resetView: function(t) {
              var e = t && (t.pinch || t.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
            },
            _animateZoom: function(t) {
              this._setView(t.center, t.zoom, !0, t.noUpdate);
            },
            _clampZoom: function(t) {
              var e = this.options;
              return void 0 !== e.minNativeZoom && t < e.minNativeZoom
                ? e.minNativeZoom
                : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
                ? e.maxNativeZoom
                : t;
            },
            _setView: function(t, e, i, n) {
              var o = this._clampZoom(Math.round(e));
              ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
                (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
                (o = void 0);
              var s = this.options.updateWhenZooming && o !== this._tileZoom;
              (n && !s) ||
                ((this._tileZoom = o),
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== o && this._update(t),
                i || this._pruneTiles(),
                (this._noPrune = !!i)),
                this._setZoomTransforms(t, e);
            },
            _setZoomTransforms: function(t, e) {
              for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
            },
            _setZoomTransform: function(t, e, i) {
              var n = this._map.getZoomScale(i, t.zoom),
                o = t.origin
                  .multiplyBy(n)
                  .subtract(this._map._getNewPixelOrigin(e, i))
                  .round();
              mt ? ge(t.el, o, n) : ve(t.el, o);
            },
            _resetGrid: function() {
              var t = this._map,
                e = t.options.crs,
                i = (this._tileSize = this.getTileSize()),
                n = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
              o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                (this._wrapX = e.wrapLng &&
                  !this.options.noWrap && [
                    Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
                    Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
                  ]),
                (this._wrapY = e.wrapLat &&
                  !this.options.noWrap && [
                    Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
                    Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
                  ]);
            },
            _onMoveEnd: function() {
              this._map && !this._map._animatingZoom && this._update();
            },
            _getTiledPixelBounds: function(t) {
              var e = this._map,
                i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                n = e.getZoomScale(i, this._tileZoom),
                o = e.project(t, this._tileZoom).floor(),
                s = e.getSize().divideBy(2 * n);
              return new A(o.subtract(s), o.add(s));
            },
            _update: function(t) {
              var e = this._map;
              if (e) {
                var i = this._clampZoom(e.getZoom());
                if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
                  var n = this._getTiledPixelBounds(t),
                    o = this._pxBoundsToTileRange(n),
                    s = o.getCenter(),
                    r = [],
                    a = this.options.keepBuffer,
                    h = new A(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                  if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                    throw new Error('Attempted to load an infinite number of tiles');
                  for (var l in this._tiles) {
                    var u = this._tiles[l].coords;
                    (u.z === this._tileZoom && h.contains(new Z(u.x, u.y))) || (this._tiles[l].current = !1);
                  }
                  if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                  else {
                    for (var c = o.min.y; c <= o.max.y; c++)
                      for (var _ = o.min.x; _ <= o.max.x; _++) {
                        var d = new Z(_, c);
                        if (((d.z = this._tileZoom), this._isValidTile(d))) {
                          var p = this._tiles[this._tileCoordsToKey(d)];
                          p ? (p.current = !0) : r.push(d);
                        }
                      }
                    if (
                      (r.sort(function(t, e) {
                        return t.distanceTo(s) - e.distanceTo(s);
                      }),
                      0 !== r.length)
                    ) {
                      this._loading || ((this._loading = !0), this.fire('loading'));
                      var m = document.createDocumentFragment();
                      for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                      this._level.el.appendChild(m);
                    }
                  }
                }
              }
            },
            _isValidTile: function(t) {
              var e = this._map.options.crs;
              if (!e.infinite) {
                var i = this._globalTileRange;
                if (
                  (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
                  (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                )
                  return !1;
              }
              if (!this.options.bounds) return !0;
              var n = this._tileCoordsToBounds(t);
              return R(this.options.bounds).overlaps(n);
            },
            _keyToBounds: function(t) {
              return this._tileCoordsToBounds(this._keyToTileCoords(t));
            },
            _tileCoordsToNwSe: function(t) {
              var e = this._map,
                i = this.getTileSize(),
                n = t.scaleBy(i),
                o = n.add(i);
              return [e.unproject(n, t.z), e.unproject(o, t.z)];
            },
            _tileCoordsToBounds: function(t) {
              var e = this._tileCoordsToNwSe(t),
                i = new N(e[0], e[1]);
              return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
            },
            _tileCoordsToKey: function(t) {
              return t.x + ':' + t.y + ':' + t.z;
            },
            _keyToTileCoords: function(t) {
              var e = t.split(':'),
                i = new Z(+e[0], +e[1]);
              return (i.z = +e[2]), i;
            },
            _removeTile: function(t) {
              var e = this._tiles[t];
              e &&
                (re(e.el),
                delete this._tiles[t],
                this.fire('tileunload', { tile: e.el, coords: this._keyToTileCoords(t) }));
            },
            _initTile: function(t) {
              ce(t, 'leaflet-tile');
              var e = this.getTileSize();
              (t.style.width = e.x + 'px'),
                (t.style.height = e.y + 'px'),
                (t.onselectstart = l),
                (t.onmousemove = l),
                $ && this.options.opacity < 1 && me(t, this.options.opacity),
                et && !it && (t.style.WebkitBackfaceVisibility = 'hidden');
            },
            _addTile: function(t, e) {
              var i = this._getTilePos(t),
                n = this._tileCoordsToKey(t),
                s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
              this._initTile(s),
                this.createTile.length < 2 && T(o(this._tileReady, this, t, null, s)),
                ve(s, i),
                (this._tiles[n] = { el: s, coords: t, current: !0 }),
                e.appendChild(s),
                this.fire('tileloadstart', { tile: s, coords: t });
            },
            _tileReady: function(t, e, i) {
              e && this.fire('tileerror', { error: e, tile: i, coords: t });
              var n = this._tileCoordsToKey(t);
              (i = this._tiles[n]) &&
                ((i.loaded = +new Date()),
                this._map._fadeAnimated
                  ? (me(i.el, 0), M(this._fadeFrame), (this._fadeFrame = T(this._updateOpacity, this)))
                  : ((i.active = !0), this._pruneTiles()),
                e || (ce(i.el, 'leaflet-tile-loaded'), this.fire('tileload', { tile: i.el, coords: t })),
                this._noTilesToLoad() &&
                  ((this._loading = !1),
                  this.fire('load'),
                  $ || !this._map._fadeAnimated
                    ? T(this._pruneTiles, this)
                    : setTimeout(o(this._pruneTiles, this), 250)));
            },
            _getTilePos: function(t) {
              return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
            },
            _wrapCoords: function(t) {
              var e = new Z(this._wrapX ? h(t.x, this._wrapX) : t.x, this._wrapY ? h(t.y, this._wrapY) : t.y);
              return (e.z = t.z), e;
            },
            _pxBoundsToTileRange: function(t) {
              var e = this.getTileSize();
              return new A(
                t.min.unscaleBy(e).floor(),
                t.max
                  .unscaleBy(e)
                  .ceil()
                  .subtract([1, 1])
              );
            },
            _noTilesToLoad: function() {
              for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
              return !0;
            }
          }),
          sn = on.extend({
            options: {
              minZoom: 0,
              maxZoom: 18,
              subdomains: 'abc',
              errorTileUrl: '',
              zoomOffset: 0,
              tms: !1,
              zoomReverse: !1,
              detectRetina: !1,
              crossOrigin: !1
            },
            initialize: function(t, e) {
              (this._url = t),
                (e = d(this, e)).detectRetina &&
                  Pt &&
                  e.maxZoom > 0 &&
                  ((e.tileSize = Math.floor(e.tileSize / 2)),
                  e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--),
                  (e.minZoom = Math.max(0, e.minZoom))),
                'string' === typeof e.subdomains && (e.subdomains = e.subdomains.split('')),
                et || this.on('tileunload', this._onTileRemove);
            },
            setUrl: function(t, e) {
              return this._url === t && void 0 === e && (e = !0), (this._url = t), e || this.redraw(), this;
            },
            createTile: function(t, e) {
              var i = document.createElement('img');
              return (
                ze(i, 'load', o(this._tileOnLoad, this, e, i)),
                ze(i, 'error', o(this._tileOnError, this, e, i)),
                (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                  (i.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                (i.alt = ''),
                i.setAttribute('role', 'presentation'),
                (i.src = this.getTileUrl(t)),
                i
              );
            },
            getTileUrl: function(t) {
              var e = { r: Pt ? '@2x' : '', s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
              if (this._map && !this._map.options.crs.infinite) {
                var n = this._globalTileRange.max.y - t.y;
                this.options.tms && (e.y = n), (e['-y'] = n);
              }
              return f(this._url, i(e, this.options));
            },
            _tileOnLoad: function(t, e) {
              $ ? setTimeout(o(t, this, null, e), 0) : t(null, e);
            },
            _tileOnError: function(t, e, i) {
              var n = this.options.errorTileUrl;
              n && e.getAttribute('src') !== n && (e.src = n), t(i, e);
            },
            _onTileRemove: function(t) {
              t.tile.onload = null;
            },
            _getZoomForUrl: function() {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset;
            },
            _getSubdomain: function(t) {
              var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
              return this.options.subdomains[e];
            },
            _abortLoading: function() {
              var t, e;
              for (t in this._tiles)
                this._tiles[t].coords.z !== this._tileZoom &&
                  (((e = this._tiles[t].el).onload = l),
                  (e.onerror = l),
                  e.complete || ((e.src = y), re(e), delete this._tiles[t]));
            },
            _removeTile: function(t) {
              var e = this._tiles[t];
              if (e) return ot || e.el.setAttribute('src', y), on.prototype._removeTile.call(this, t);
            },
            _tileReady: function(t, e, i) {
              if (this._map && (!i || i.getAttribute('src') !== y)) return on.prototype._tileReady.call(this, t, e, i);
            }
          });
        function rn(t, e) {
          return new sn(t, e);
        }
        var an = sn.extend({
          defaultWmsParams: {
            service: 'WMS',
            request: 'GetMap',
            layers: '',
            styles: '',
            format: 'image/jpeg',
            transparent: !1,
            version: '1.1.1'
          },
          options: { crs: null, uppercase: !1 },
          initialize: function(t, e) {
            this._url = t;
            var n = i({}, this.defaultWmsParams);
            for (var o in e) o in this.options || (n[o] = e[o]);
            var s = (e = d(this, e)).detectRetina && Pt ? 2 : 1,
              r = this.getTileSize();
            (n.width = r.x * s), (n.height = r.y * s), (this.wmsParams = n);
          },
          onAdd: function(t) {
            (this._crs = this.options.crs || t.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version));
            var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
            (this.wmsParams[e] = this._crs.code), sn.prototype.onAdd.call(this, t);
          },
          getTileUrl: function(t) {
            var e = this._tileCoordsToNwSe(t),
              i = this._crs,
              n = I(i.project(e[0]), i.project(e[1])),
              o = n.min,
              s = n.max,
              r = (this._wmsVersion >= 1.3 && this._crs === Pi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(','),
              a = sn.prototype.getTileUrl.call(this, t);
            return (
              a + p(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + r
            );
          },
          setParams: function(t, e) {
            return i(this.wmsParams, t), e || this.redraw(), this;
          }
        });
        (sn.WMS = an),
          (rn.wms = function(t, e) {
            return new an(t, e);
          });
        var hn = Ti.extend({
            options: { padding: 0.1, tolerance: 0 },
            initialize: function(t) {
              d(this, t), r(this), (this._layers = this._layers || {});
            },
            onAdd: function() {
              this._container ||
                (this._initContainer(), this._zoomAnimated && ce(this._container, 'leaflet-zoom-animated')),
                this.getPane().appendChild(this._container),
                this._update(),
                this.on('update', this._updatePaths, this);
            },
            onRemove: function() {
              this.off('update', this._updatePaths, this), this._destroyContainer();
            },
            getEvents: function() {
              var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
              return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
            },
            _onAnimZoom: function(t) {
              this._updateTransform(t.center, t.zoom);
            },
            _onZoom: function() {
              this._updateTransform(this._map.getCenter(), this._map.getZoom());
            },
            _updateTransform: function(t, e) {
              var i = this._map.getZoomScale(e, this._zoom),
                n = ye(this._container),
                o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                s = this._map.project(this._center, e),
                r = this._map.project(t, e).subtract(s),
                a = o
                  .multiplyBy(-i)
                  .add(n)
                  .add(o)
                  .subtract(r);
              mt ? ge(this._container, a, i) : ve(this._container, a);
            },
            _reset: function() {
              for (var t in (this._update(), this._updateTransform(this._center, this._zoom), this._layers))
                this._layers[t]._reset();
            },
            _onZoomEnd: function() {
              for (var t in this._layers) this._layers[t]._project();
            },
            _updatePaths: function() {
              for (var t in this._layers) this._layers[t]._update();
            },
            _update: function() {
              var t = this.options.padding,
                e = this._map.getSize(),
                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
              (this._bounds = new A(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
                (this._center = this._map.getCenter()),
                (this._zoom = this._map.getZoom());
            }
          }),
          ln = hn.extend({
            getEvents: function() {
              var t = hn.prototype.getEvents.call(this);
              return (t.viewprereset = this._onViewPreReset), t;
            },
            _onViewPreReset: function() {
              this._postponeUpdatePaths = !0;
            },
            onAdd: function() {
              hn.prototype.onAdd.call(this), this._draw();
            },
            _initContainer: function() {
              var t = (this._container = document.createElement('canvas'));
              ze(t, 'mousemove', this._onMouseMove, this),
                ze(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
                ze(t, 'mouseout', this._handleMouseOut, this),
                (this._ctx = t.getContext('2d'));
            },
            _destroyContainer: function() {
              M(this._redrawRequest),
                delete this._ctx,
                re(this._container),
                Ee(this._container),
                delete this._container;
            },
            _updatePaths: function() {
              if (!this._postponeUpdatePaths) {
                for (var t in ((this._redrawBounds = null), this._layers)) this._layers[t]._update();
                this._redraw();
              }
            },
            _update: function() {
              if (!this._map._animatingZoom || !this._bounds) {
                hn.prototype._update.call(this);
                var t = this._bounds,
                  e = this._container,
                  i = t.getSize(),
                  n = Pt ? 2 : 1;
                ve(e, t.min),
                  (e.width = n * i.x),
                  (e.height = n * i.y),
                  (e.style.width = i.x + 'px'),
                  (e.style.height = i.y + 'px'),
                  Pt && this._ctx.scale(2, 2),
                  this._ctx.translate(-t.min.x, -t.min.y),
                  this.fire('update');
              }
            },
            _reset: function() {
              hn.prototype._reset.call(this),
                this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
            },
            _initPath: function(t) {
              this._updateDashArray(t), (this._layers[r(t)] = t);
              var e = (t._order = { layer: t, prev: this._drawLast, next: null });
              this._drawLast && (this._drawLast.next = e),
                (this._drawLast = e),
                (this._drawFirst = this._drawFirst || this._drawLast);
            },
            _addPath: function(t) {
              this._requestRedraw(t);
            },
            _removePath: function(t) {
              var e = t._order,
                i = e.next,
                n = e.prev;
              i ? (i.prev = n) : (this._drawLast = n),
                n ? (n.next = i) : (this._drawFirst = i),
                delete t._order,
                delete this._layers[r(t)],
                this._requestRedraw(t);
            },
            _updatePath: function(t) {
              this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
            },
            _updateStyle: function(t) {
              this._updateDashArray(t), this._requestRedraw(t);
            },
            _updateDashArray: function(t) {
              if ('string' === typeof t.options.dashArray) {
                var e,
                  i,
                  n = t.options.dashArray.split(/[, ]+/),
                  o = [];
                for (i = 0; i < n.length; i++) {
                  if (((e = Number(n[i])), isNaN(e))) return;
                  o.push(e);
                }
                t.options._dashArray = o;
              } else t.options._dashArray = t.options.dashArray;
            },
            _requestRedraw: function(t) {
              this._map &&
                (this._extendRedrawBounds(t), (this._redrawRequest = this._redrawRequest || T(this._redraw, this)));
            },
            _extendRedrawBounds: function(t) {
              if (t._pxBounds) {
                var e = (t.options.weight || 0) + 1;
                (this._redrawBounds = this._redrawBounds || new A()),
                  this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                  this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
              }
            },
            _redraw: function() {
              (this._redrawRequest = null),
                this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
                this._clear(),
                this._draw(),
                (this._redrawBounds = null);
            },
            _clear: function() {
              var t = this._redrawBounds;
              if (t) {
                var e = t.getSize();
                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
              } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
            },
            _draw: function() {
              var t,
                e = this._redrawBounds;
              if ((this._ctx.save(), e)) {
                var i = e.getSize();
                this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
              }
              this._drawing = !0;
              for (var n = this._drawFirst; n; n = n.next)
                (t = n.layer), (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
              (this._drawing = !1), this._ctx.restore();
            },
            _updatePoly: function(t, e) {
              if (this._drawing) {
                var i,
                  n,
                  o,
                  s,
                  r = t._parts,
                  a = r.length,
                  h = this._ctx;
                if (a) {
                  for (h.beginPath(), i = 0; i < a; i++) {
                    for (n = 0, o = r[i].length; n < o; n++) (s = r[i][n]), h[n ? 'lineTo' : 'moveTo'](s.x, s.y);
                    e && h.closePath();
                  }
                  this._fillStroke(h, t);
                }
              }
            },
            _updateCircle: function(t) {
              if (this._drawing && !t._empty()) {
                var e = t._point,
                  i = this._ctx,
                  n = Math.max(Math.round(t._radius), 1),
                  o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                1 !== o && (i.save(), i.scale(1, o)),
                  i.beginPath(),
                  i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
                  1 !== o && i.restore(),
                  this._fillStroke(i, t);
              }
            },
            _fillStroke: function(t, e) {
              var i = e.options;
              i.fill &&
                ((t.globalAlpha = i.fillOpacity),
                (t.fillStyle = i.fillColor || i.color),
                t.fill(i.fillRule || 'evenodd')),
                i.stroke &&
                  0 !== i.weight &&
                  (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
                  (t.globalAlpha = i.opacity),
                  (t.lineWidth = i.weight),
                  (t.strokeStyle = i.color),
                  (t.lineCap = i.lineCap),
                  (t.lineJoin = i.lineJoin),
                  t.stroke());
            },
            _onClick: function(t) {
              for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                (e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
              i && (Ue(t), this._fireEvent([i], t));
            },
            _onMouseMove: function(t) {
              if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                var e = this._map.mouseEventToLayerPoint(t);
                this._handleMouseHover(t, e);
              }
            },
            _handleMouseOut: function(t) {
              var e = this._hoveredLayer;
              e &&
                (_e(this._container, 'leaflet-interactive'),
                this._fireEvent([e], t, 'mouseout'),
                (this._hoveredLayer = null),
                (this._mouseHoverThrottled = !1));
            },
            _handleMouseHover: function(t, e) {
              if (!this._mouseHoverThrottled) {
                for (var i, n, o = this._drawFirst; o; o = o.next)
                  (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                n !== this._hoveredLayer &&
                  (this._handleMouseOut(t),
                  n &&
                    (ce(this._container, 'leaflet-interactive'),
                    this._fireEvent([n], t, 'mouseover'),
                    (this._hoveredLayer = n))),
                  this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
                  (this._mouseHoverThrottled = !0),
                  setTimeout(
                    L.bind(function() {
                      this._mouseHoverThrottled = !1;
                    }, this),
                    32
                  );
              }
            },
            _fireEvent: function(t, e, i) {
              this._map._fireDOMEvent(e, i || e.type, t);
            },
            _bringToFront: function(t) {
              var e = t._order;
              if (e) {
                var i = e.next,
                  n = e.prev;
                i &&
                  ((i.prev = n),
                  n ? (n.next = i) : i && (this._drawFirst = i),
                  (e.prev = this._drawLast),
                  (this._drawLast.next = e),
                  (e.next = null),
                  (this._drawLast = e),
                  this._requestRedraw(t));
              }
            },
            _bringToBack: function(t) {
              var e = t._order;
              if (e) {
                var i = e.next,
                  n = e.prev;
                n &&
                  ((n.next = i),
                  i ? (i.prev = n) : n && (this._drawLast = n),
                  (e.prev = null),
                  (e.next = this._drawFirst),
                  (this._drawFirst.prev = e),
                  (this._drawFirst = e),
                  this._requestRedraw(t));
              }
            }
          });
        function un(t) {
          return Tt ? new ln(t) : null;
        }
        var cn = (function() {
            try {
              return (
                document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
                function(t) {
                  return document.createElement('<lvml:' + t + ' class="lvml">');
                }
              );
            } catch (t) {
              return function(t) {
                return document.createElement('<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
              };
            }
          })(),
          _n = {
            _initContainer: function() {
              this._container = se('div', 'leaflet-vml-container');
            },
            _update: function() {
              this._map._animatingZoom || (hn.prototype._update.call(this), this.fire('update'));
            },
            _initPath: function(t) {
              var e = (t._container = cn('shape'));
              ce(e, 'leaflet-vml-shape ' + (this.options.className || '')),
                (e.coordsize = '1 1'),
                (t._path = cn('path')),
                e.appendChild(t._path),
                this._updateStyle(t),
                (this._layers[r(t)] = t);
            },
            _addPath: function(t) {
              var e = t._container;
              this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
            },
            _removePath: function(t) {
              var e = t._container;
              re(e), t.removeInteractiveTarget(e), delete this._layers[r(t)];
            },
            _updateStyle: function(t) {
              var e = t._stroke,
                i = t._fill,
                n = t.options,
                o = t._container;
              (o.stroked = !!n.stroke),
                (o.filled = !!n.fill),
                n.stroke
                  ? (e || (e = t._stroke = cn('stroke')),
                    o.appendChild(e),
                    (e.weight = n.weight + 'px'),
                    (e.color = n.color),
                    (e.opacity = n.opacity),
                    n.dashArray
                      ? (e.dashStyle = g(n.dashArray) ? n.dashArray.join(' ') : n.dashArray.replace(/( *, *)/g, ' '))
                      : (e.dashStyle = ''),
                    (e.endcap = n.lineCap.replace('butt', 'flat')),
                    (e.joinstyle = n.lineJoin))
                  : e && (o.removeChild(e), (t._stroke = null)),
                n.fill
                  ? (i || (i = t._fill = cn('fill')),
                    o.appendChild(i),
                    (i.color = n.fillColor || n.color),
                    (i.opacity = n.fillOpacity))
                  : i && (o.removeChild(i), (t._fill = null));
            },
            _updateCircle: function(t) {
              var e = t._point.round(),
                i = Math.round(t._radius),
                n = Math.round(t._radiusY || i);
              this._setPath(t, t._empty() ? 'M0 0' : 'AL ' + e.x + ',' + e.y + ' ' + i + ',' + n + ' 0,23592600');
            },
            _setPath: function(t, e) {
              t._path.v = e;
            },
            _bringToFront: function(t) {
              he(t._container);
            },
            _bringToBack: function(t) {
              le(t._container);
            }
          },
          dn = zt ? cn : K,
          pn = hn.extend({
            getEvents: function() {
              var t = hn.prototype.getEvents.call(this);
              return (t.zoomstart = this._onZoomStart), t;
            },
            _initContainer: function() {
              (this._container = dn('svg')),
                this._container.setAttribute('pointer-events', 'none'),
                (this._rootGroup = dn('g')),
                this._container.appendChild(this._rootGroup);
            },
            _destroyContainer: function() {
              re(this._container),
                Ee(this._container),
                delete this._container,
                delete this._rootGroup,
                delete this._svgSize;
            },
            _onZoomStart: function() {
              this._update();
            },
            _update: function() {
              if (!this._map._animatingZoom || !this._bounds) {
                hn.prototype._update.call(this);
                var t = this._bounds,
                  e = t.getSize(),
                  i = this._container;
                (this._svgSize && this._svgSize.equals(e)) ||
                  ((this._svgSize = e), i.setAttribute('width', e.x), i.setAttribute('height', e.y)),
                  ve(i, t.min),
                  i.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
                  this.fire('update');
              }
            },
            _initPath: function(t) {
              var e = (t._path = dn('path'));
              t.options.className && ce(e, t.options.className),
                t.options.interactive && ce(e, 'leaflet-interactive'),
                this._updateStyle(t),
                (this._layers[r(t)] = t);
            },
            _addPath: function(t) {
              this._rootGroup || this._initContainer(),
                this._rootGroup.appendChild(t._path),
                t.addInteractiveTarget(t._path);
            },
            _removePath: function(t) {
              re(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r(t)];
            },
            _updatePath: function(t) {
              t._project(), t._update();
            },
            _updateStyle: function(t) {
              var e = t._path,
                i = t.options;
              e &&
                (i.stroke
                  ? (e.setAttribute('stroke', i.color),
                    e.setAttribute('stroke-opacity', i.opacity),
                    e.setAttribute('stroke-width', i.weight),
                    e.setAttribute('stroke-linecap', i.lineCap),
                    e.setAttribute('stroke-linejoin', i.lineJoin),
                    i.dashArray
                      ? e.setAttribute('stroke-dasharray', i.dashArray)
                      : e.removeAttribute('stroke-dasharray'),
                    i.dashOffset
                      ? e.setAttribute('stroke-dashoffset', i.dashOffset)
                      : e.removeAttribute('stroke-dashoffset'))
                  : e.setAttribute('stroke', 'none'),
                i.fill
                  ? (e.setAttribute('fill', i.fillColor || i.color),
                    e.setAttribute('fill-opacity', i.fillOpacity),
                    e.setAttribute('fill-rule', i.fillRule || 'evenodd'))
                  : e.setAttribute('fill', 'none'));
            },
            _updatePoly: function(t, e) {
              this._setPath(t, Y(t._parts, e));
            },
            _updateCircle: function(t) {
              var e = t._point,
                i = Math.max(Math.round(t._radius), 1),
                n = 'a' + i + ',' + (Math.max(Math.round(t._radiusY), 1) || i) + ' 0 1,0 ',
                o = t._empty() ? 'M0 0' : 'M' + (e.x - i) + ',' + e.y + n + 2 * i + ',0 ' + n + 2 * -i + ',0 ';
              this._setPath(t, o);
            },
            _setPath: function(t, e) {
              t._path.setAttribute('d', e);
            },
            _bringToFront: function(t) {
              he(t._path);
            },
            _bringToBack: function(t) {
              le(t._path);
            }
          });
        function mn(t) {
          return Mt || zt ? new pn(t) : null;
        }
        zt && pn.include(_n),
          Ke.include({
            getRenderer: function(t) {
              var e =
                t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
              return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
            },
            _getPaneRenderer: function(t) {
              if ('overlayPane' === t || void 0 === t) return !1;
              var e = this._paneRenderers[t];
              return void 0 === e && ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)), e;
            },
            _createRenderer: function(t) {
              return (this.options.preferCanvas && un(t)) || mn(t);
            }
          });
        var fn = Ni.extend({
          initialize: function(t, e) {
            Ni.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
          },
          setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t));
          },
          _boundsToLatLngs: function(t) {
            return [(t = R(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
          }
        });
        (pn.create = dn),
          (pn.pointsToPath = Y),
          (Ri.geometryToLayer = ji),
          (Ri.coordsToLatLng = Gi),
          (Ri.coordsToLatLngs = Fi),
          (Ri.latLngToCoords = Ui),
          (Ri.latLngsToCoords = Hi),
          (Ri.getFeature = Wi),
          (Ri.asFeature = Vi),
          Ke.mergeOptions({ boxZoom: !0 });
        var gn = ei.extend({
          initialize: function(t) {
            (this._map = t),
              (this._container = t._container),
              (this._pane = t._panes.overlayPane),
              (this._resetStateTimeout = 0),
              t.on('unload', this._destroy, this);
          },
          addHooks: function() {
            ze(this._container, 'mousedown', this._onMouseDown, this);
          },
          removeHooks: function() {
            Ee(this._container, 'mousedown', this._onMouseDown, this);
          },
          moved: function() {
            return this._moved;
          },
          _destroy: function() {
            re(this._pane), delete this._pane;
          },
          _resetState: function() {
            (this._resetStateTimeout = 0), (this._moved = !1);
          },
          _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
          },
          _onMouseDown: function(t) {
            if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
            this._clearDeferredResetState(),
              this._resetState(),
              Yt(),
              xe(),
              (this._startPoint = this._map.mouseEventToContainerPoint(t)),
              ze(
                document,
                { contextmenu: Ne, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown },
                this
              );
          },
          _onMouseMove: function(t) {
            this._moved ||
              ((this._moved = !0),
              (this._box = se('div', 'leaflet-zoom-box', this._container)),
              ce(this._container, 'leaflet-crosshair'),
              this._map.fire('boxzoomstart')),
              (this._point = this._map.mouseEventToContainerPoint(t));
            var e = new A(this._point, this._startPoint),
              i = e.getSize();
            ve(this._box, e.min), (this._box.style.width = i.x + 'px'), (this._box.style.height = i.y + 'px');
          },
          _finish: function() {
            this._moved && (re(this._box), _e(this._container, 'leaflet-crosshair')),
              Jt(),
              we(),
              Ee(
                document,
                { contextmenu: Ne, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown },
                this
              );
          },
          _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
              this._clearDeferredResetState(), (this._resetStateTimeout = setTimeout(o(this._resetState, this), 0));
              var e = new N(
                this._map.containerPointToLatLng(this._startPoint),
                this._map.containerPointToLatLng(this._point)
              );
              this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
            }
          },
          _onKeyDown: function(t) {
            27 === t.keyCode && this._finish();
          }
        });
        Ke.addInitHook('addHandler', 'boxZoom', gn), Ke.mergeOptions({ doubleClickZoom: !0 });
        var vn = ei.extend({
          addHooks: function() {
            this._map.on('dblclick', this._onDoubleClick, this);
          },
          removeHooks: function() {
            this._map.off('dblclick', this._onDoubleClick, this);
          },
          _onDoubleClick: function(t) {
            var e = this._map,
              i = e.getZoom(),
              n = e.options.zoomDelta,
              o = t.originalEvent.shiftKey ? i - n : i + n;
            'center' === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
          }
        });
        Ke.addInitHook('addHandler', 'doubleClickZoom', vn),
          Ke.mergeOptions({
            dragging: !0,
            inertia: !it,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: 0.2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
          });
        var yn = ei.extend({
          addHooks: function() {
            if (!this._draggable) {
              var t = this._map;
              (this._draggable = new ai(t._mapPane, t._container)),
                this._draggable.on(
                  { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
                  this
                ),
                this._draggable.on('predrag', this._onPreDragLimit, this),
                t.options.worldCopyJump &&
                  (this._draggable.on('predrag', this._onPreDragWrap, this),
                  t.on('zoomend', this._onZoomEnd, this),
                  t.whenReady(this._onZoomEnd, this));
            }
            ce(this._map._container, 'leaflet-grab leaflet-touch-drag'),
              this._draggable.enable(),
              (this._positions = []),
              (this._times = []);
          },
          removeHooks: function() {
            _e(this._map._container, 'leaflet-grab'),
              _e(this._map._container, 'leaflet-touch-drag'),
              this._draggable.disable();
          },
          moved: function() {
            return this._draggable && this._draggable._moved;
          },
          moving: function() {
            return this._draggable && this._draggable._moving;
          },
          _onDragStart: function() {
            var t = this._map;
            if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
              var e = R(this._map.options.maxBounds);
              (this._offsetLimit = I(
                this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
                this._map
                  .latLngToContainerPoint(e.getSouthEast())
                  .multiplyBy(-1)
                  .add(this._map.getSize())
              )),
                (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
            } else this._offsetLimit = null;
            t.fire('movestart').fire('dragstart'), t.options.inertia && ((this._positions = []), (this._times = []));
          },
          _onDrag: function(t) {
            if (this._map.options.inertia) {
              var e = (this._lastTime = +new Date()),
                i = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
              this._positions.push(i), this._times.push(e), this._prunePositions(e);
            }
            this._map.fire('move', t).fire('drag', t);
          },
          _prunePositions: function(t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50; )
              this._positions.shift(), this._times.shift();
          },
          _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
              e = this._map.latLngToLayerPoint([0, 0]);
            (this._initialWorldOffset = e.subtract(t).x),
              (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
          },
          _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity;
          },
          _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
              var t = this._draggable._newPos.subtract(this._draggable._startPos),
                e = this._offsetLimit;
              t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                (this._draggable._newPos = this._draggable._startPos.add(t));
            }
          },
          _onPreDragWrap: function() {
            var t = this._worldWidth,
              e = Math.round(t / 2),
              i = this._initialWorldOffset,
              n = this._draggable._newPos.x,
              o = ((n - e + i) % t) + e - i,
              s = ((n + e + i) % t) - e - i,
              r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            (this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = r);
          },
          _onDragEnd: function(t) {
            var e = this._map,
              i = e.options,
              n = !i.inertia || this._times.length < 2;
            if ((e.fire('dragend', t), n)) e.fire('moveend');
            else {
              this._prunePositions(+new Date());
              var o = this._lastPos.subtract(this._positions[0]),
                s = (this._lastTime - this._times[0]) / 1e3,
                r = i.easeLinearity,
                a = o.multiplyBy(r / s),
                h = a.distanceTo([0, 0]),
                l = Math.min(i.inertiaMaxSpeed, h),
                u = a.multiplyBy(l / h),
                c = l / (i.inertiaDeceleration * r),
                _ = u.multiplyBy(-c / 2).round();
              _.x || _.y
                ? ((_ = e._limitOffset(_, e.options.maxBounds)),
                  T(function() {
                    e.panBy(_, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 });
                  }))
                : e.fire('moveend');
            }
          }
        });
        Ke.addInitHook('addHandler', 'dragging', yn), Ke.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
        var Ln = ei.extend({
          keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
          },
          initialize: function(t) {
            (this._map = t), this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
          },
          addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = '0'),
              ze(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
              this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
          },
          removeHooks: function() {
            this._removeHooks(),
              Ee(
                this._map._container,
                { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
                this
              ),
              this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
          },
          _onMouseDown: function() {
            if (!this._focused) {
              var t = document.body,
                e = document.documentElement,
                i = t.scrollTop || e.scrollTop,
                n = t.scrollLeft || e.scrollLeft;
              this._map._container.focus(), window.scrollTo(n, i);
            }
          },
          _onFocus: function() {
            (this._focused = !0), this._map.fire('focus');
          },
          _onBlur: function() {
            (this._focused = !1), this._map.fire('blur');
          },
          _setPanDelta: function(t) {
            var e,
              i,
              n = (this._panKeys = {}),
              o = this.keyCodes;
            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t];
          },
          _setZoomDelta: function(t) {
            var e,
              i,
              n = (this._zoomKeys = {}),
              o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t;
          },
          _addHooks: function() {
            ze(document, 'keydown', this._onKeyDown, this);
          },
          _removeHooks: function() {
            Ee(document, 'keydown', this._onKeyDown, this);
          },
          _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
              var e,
                i = t.keyCode,
                n = this._map;
              if (i in this._panKeys)
                (n._panAnim && n._panAnim._inProgress) ||
                  ((e = this._panKeys[i]),
                  t.shiftKey && (e = B(e).multiplyBy(3)),
                  n.panBy(e),
                  n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
              else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
              else {
                if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                n.closePopup();
              }
              Ne(t);
            }
          }
        });
        Ke.addInitHook('addHandler', 'keyboard', Ln),
          Ke.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
        var xn = ei.extend({
          addHooks: function() {
            ze(this._map._container, 'mousewheel', this._onWheelScroll, this), (this._delta = 0);
          },
          removeHooks: function() {
            Ee(this._map._container, 'mousewheel', this._onWheelScroll, this);
          },
          _onWheelScroll: function(t) {
            var e = De(t),
              i = this._map.options.wheelDebounceTime;
            (this._delta += e),
              (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
              this._startTime || (this._startTime = +new Date());
            var n = Math.max(i - (+new Date() - this._startTime), 0);
            clearTimeout(this._timer), (this._timer = setTimeout(o(this._performZoom, this), n)), Ne(t);
          },
          _performZoom: function() {
            var t = this._map,
              e = t.getZoom(),
              i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
              o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
              s = i ? Math.ceil(o / i) * i : o,
              r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
            (this._delta = 0),
              (this._startTime = null),
              r &&
                ('center' === t.options.scrollWheelZoom
                  ? t.setZoom(e + r)
                  : t.setZoomAround(this._lastMousePos, e + r));
          }
        });
        Ke.addInitHook('addHandler', 'scrollWheelZoom', xn), Ke.mergeOptions({ tap: !0, tapTolerance: 15 });
        var wn = ei.extend({
          addHooks: function() {
            ze(this._map._container, 'touchstart', this._onDown, this);
          },
          removeHooks: function() {
            Ee(this._map._container, 'touchstart', this._onDown, this);
          },
          _onDown: function(t) {
            if (t.touches) {
              if ((Ie(t), (this._fireClick = !0), t.touches.length > 1))
                return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
              var e = t.touches[0],
                i = e.target;
              (this._startPos = this._newPos = new Z(e.clientX, e.clientY)),
                i.tagName && 'a' === i.tagName.toLowerCase() && ce(i, 'leaflet-active'),
                (this._holdTimeout = setTimeout(
                  o(function() {
                    this._isTapValid() && ((this._fireClick = !1), this._onUp(), this._simulateEvent('contextmenu', e));
                  }, this),
                  1e3
                )),
                this._simulateEvent('mousedown', e),
                ze(document, { touchmove: this._onMove, touchend: this._onUp }, this);
            }
          },
          _onUp: function(t) {
            if (
              (clearTimeout(this._holdTimeout),
              Ee(document, { touchmove: this._onMove, touchend: this._onUp }, this),
              this._fireClick && t && t.changedTouches)
            ) {
              var e = t.changedTouches[0],
                i = e.target;
              i && i.tagName && 'a' === i.tagName.toLowerCase() && _e(i, 'leaflet-active'),
                this._simulateEvent('mouseup', e),
                this._isTapValid() && this._simulateEvent('click', e);
            }
          },
          _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
          },
          _onMove: function(t) {
            var e = t.touches[0];
            (this._newPos = new Z(e.clientX, e.clientY)), this._simulateEvent('mousemove', e);
          },
          _simulateEvent: function(t, e) {
            var i = document.createEvent('MouseEvents');
            (i._simulated = !0),
              (e.target._simulatedClick = !0),
              i.initMouseEvent(
                t,
                !0,
                !0,
                window,
                1,
                e.screenX,
                e.screenY,
                e.clientX,
                e.clientY,
                !1,
                !1,
                !1,
                !1,
                0,
                null
              ),
              e.target.dispatchEvent(i);
          }
        });
        xt && !Lt && Ke.addInitHook('addHandler', 'tap', wn),
          Ke.mergeOptions({ touchZoom: xt && !it, bounceAtZoomLimits: !0 });
        var bn = ei.extend({
          addHooks: function() {
            ce(this._map._container, 'leaflet-touch-zoom'),
              ze(this._map._container, 'touchstart', this._onTouchStart, this);
          },
          removeHooks: function() {
            _e(this._map._container, 'leaflet-touch-zoom'),
              Ee(this._map._container, 'touchstart', this._onTouchStart, this);
          },
          _onTouchStart: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
              var i = e.mouseEventToContainerPoint(t.touches[0]),
                n = e.mouseEventToContainerPoint(t.touches[1]);
              (this._centerPoint = e.getSize()._divideBy(2)),
                (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
                'center' !== e.options.touchZoom &&
                  (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
                (this._startDist = i.distanceTo(n)),
                (this._startZoom = e.getZoom()),
                (this._moved = !1),
                (this._zooming = !0),
                e._stop(),
                ze(document, 'touchmove', this._onTouchMove, this),
                ze(document, 'touchend', this._onTouchEnd, this),
                Ie(t);
            }
          },
          _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
              var e = this._map,
                i = e.mouseEventToContainerPoint(t.touches[0]),
                n = e.mouseEventToContainerPoint(t.touches[1]),
                s = i.distanceTo(n) / this._startDist;
              if (
                ((this._zoom = e.getScaleZoom(s, this._startZoom)),
                !e.options.bounceAtZoomLimits &&
                  ((this._zoom < e.getMinZoom() && s < 1) || (this._zoom > e.getMaxZoom() && s > 1)) &&
                  (this._zoom = e._limitZoom(this._zoom)),
                'center' === e.options.touchZoom)
              ) {
                if (((this._center = this._startLatLng), 1 === s)) return;
              } else {
                var r = i
                  ._add(n)
                  ._divideBy(2)
                  ._subtract(this._centerPoint);
                if (1 === s && 0 === r.x && 0 === r.y) return;
                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
              }
              this._moved || (e._moveStart(!0, !1), (this._moved = !0)), M(this._animRequest);
              var a = o(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 });
              (this._animRequest = T(a, this, !0)), Ie(t);
            }
          },
          _onTouchEnd: function() {
            this._moved && this._zooming
              ? ((this._zooming = !1),
                M(this._animRequest),
                Ee(document, 'touchmove', this._onTouchMove),
                Ee(document, 'touchend', this._onTouchEnd),
                this._map.options.zoomAnimation
                  ? this._map._animateZoom(
                      this._center,
                      this._map._limitZoom(this._zoom),
                      !0,
                      this._map.options.zoomSnap
                    )
                  : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
              : (this._zooming = !1);
          }
        });
        Ke.addInitHook('addHandler', 'touchZoom', bn),
          (Ke.BoxZoom = gn),
          (Ke.DoubleClickZoom = vn),
          (Ke.Drag = yn),
          (Ke.Keyboard = Ln),
          (Ke.ScrollWheelZoom = xn),
          (Ke.Tap = wn),
          (Ke.TouchZoom = bn),
          (Object.freeze = e),
          (t.version = '1.6.0'),
          (t.Control = Ye),
          (t.control = Je),
          (t.Browser = Et),
          (t.Evented = S),
          (t.Mixin = ni),
          (t.Util = z),
          (t.Class = k),
          (t.Handler = ei),
          (t.extend = i),
          (t.bind = o),
          (t.stamp = r),
          (t.setOptions = d),
          (t.DomEvent = Ve),
          (t.DomUtil = Me),
          (t.PosAnimation = qe),
          (t.Draggable = ai),
          (t.LineUtil = gi),
          (t.PolyUtil = yi),
          (t.Point = Z),
          (t.point = B),
          (t.Bounds = A),
          (t.bounds = I),
          (t.Transformation = H),
          (t.transformation = W),
          (t.Projection = wi),
          (t.LatLng = j),
          (t.latLng = D),
          (t.LatLngBounds = N),
          (t.latLngBounds = R),
          (t.CRS = G),
          (t.GeoJSON = Ri),
          (t.geoJSON = Ki),
          (t.geoJson = Yi),
          (t.Layer = Ti),
          (t.LayerGroup = Mi),
          (t.layerGroup = function(t, e) {
            return new Mi(t, e);
          }),
          (t.FeatureGroup = zi),
          (t.featureGroup = function(t) {
            return new zi(t);
          }),
          (t.ImageOverlay = Ji),
          (t.imageOverlay = function(t, e, i) {
            return new Ji(t, e, i);
          }),
          (t.VideoOverlay = Xi),
          (t.videoOverlay = function(t, e, i) {
            return new Xi(t, e, i);
          }),
          (t.SVGOverlay = $i),
          (t.svgOverlay = function(t, e, i) {
            return new $i(t, e, i);
          }),
          (t.DivOverlay = Qi),
          (t.Popup = tn),
          (t.popup = function(t, e) {
            return new tn(t, e);
          }),
          (t.Tooltip = en),
          (t.tooltip = function(t, e) {
            return new en(t, e);
          }),
          (t.Icon = ki),
          (t.icon = function(t) {
            return new ki(t);
          }),
          (t.DivIcon = nn),
          (t.divIcon = function(t) {
            return new nn(t);
          }),
          (t.Marker = Zi),
          (t.marker = function(t, e) {
            return new Zi(t, e);
          }),
          (t.TileLayer = sn),
          (t.tileLayer = rn),
          (t.GridLayer = on),
          (t.gridLayer = function(t) {
            return new on(t);
          }),
          (t.SVG = pn),
          (t.svg = mn),
          (t.Renderer = hn),
          (t.Canvas = ln),
          (t.canvas = un),
          (t.Path = Oi),
          (t.CircleMarker = Bi),
          (t.circleMarker = function(t, e) {
            return new Bi(t, e);
          }),
          (t.Circle = Ai),
          (t.circle = function(t, e, i) {
            return new Ai(t, e, i);
          }),
          (t.Polyline = Ii),
          (t.polyline = function(t, e) {
            return new Ii(t, e);
          }),
          (t.Polygon = Ni),
          (t.polygon = function(t, e) {
            return new Ni(t, e);
          }),
          (t.Rectangle = fn),
          (t.rectangle = function(t, e) {
            return new fn(t, e);
          }),
          (t.Map = Ke),
          (t.map = function(t, e) {
            return new Ke(t, e);
          });
        var Pn = window.L;
        (t.noConflict = function() {
          return (window.L = Pn), this;
        }),
          (window.L = t);
      })(e);
    }
  }
]);
//# sourceMappingURL=4.b72d7d32.chunk.js.map
