        var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
            highlightLayer.openPopup();
        }
        var map = L.map('map', {
            zoomControl:true, maxZoom:20, minZoom:1
        })
        var hash = new L.Hash(map);
        map.attributionControl.addAttribution('');
        var bounds_group = new L.featureGroup([]);
        var basemap0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 20
        });
        basemap0.addTo(map);
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        function pop_FeminicidiosJalisco20130(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Nombre'] !== null ? Autolinker.link(String(feature.properties['Nombre'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['2013'] !== null ? Autolinker.link(String(feature.properties['2013'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_FeminicidiosJalisco20130_0(feature) {
            if (feature.properties['2013'] >= 0.000000 && feature.properties['2013'] <= 19.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20130',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
            }
            }
            if (feature.properties['2013'] >= 19.000000 && feature.properties['2013'] <= 38.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20130',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(252,112,80,1.0)',
            }
            }
            if (feature.properties['2013'] >= 38.000000 && feature.properties['2013'] <= 57.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20130',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(103,0,13,1.0)',
            }
            }
        }
        map.createPane('pane_FeminicidiosJalisco20130');
        map.getPane('pane_FeminicidiosJalisco20130').style.zIndex = 400;
        map.getPane('pane_FeminicidiosJalisco20130').style['mix-blend-mode'] = 'normal';
    var layer_FeminicidiosJalisco20130 = new L.geoJson(json_FeminicidiosJalisco20130, {
        attribution: '<a href=""></a>',
        pane: 'pane_FeminicidiosJalisco20130',
        onEachFeature: pop_FeminicidiosJalisco20130,
        style: style_FeminicidiosJalisco20130_0,
    });
        bounds_group.addLayer(layer_FeminicidiosJalisco20130);
        function pop_FeminicidiosJalisco20141(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Nombre'] !== null ? Autolinker.link(String(feature.properties['Nombre'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['2014'] !== null ? Autolinker.link(String(feature.properties['2014'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_FeminicidiosJalisco20141_0(feature) {
            if (feature.properties['2014'] >= 0.000000 && feature.properties['2014'] <= 2.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20141',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
            }
            }
            if (feature.properties['2014'] >= 2.000000 && feature.properties['2014'] <= 4.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20141',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(253,190,165,1.0)',
            }
            }
            if (feature.properties['2014'] >= 4.000000 && feature.properties['2014'] <= 6.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20141',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(252,112,80,1.0)',
            }
            }
            if (feature.properties['2014'] >= 6.000000 && feature.properties['2014'] <= 8.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20141',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(212,32,32,1.0)',
            }
            }
            if (feature.properties['2014'] >= 8.000000 && feature.properties['2014'] <= 10.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20141',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(103,0,13,1.0)',
            }
            }
        }
        map.createPane('pane_FeminicidiosJalisco20141');
        map.getPane('pane_FeminicidiosJalisco20141').style.zIndex = 401;
        map.getPane('pane_FeminicidiosJalisco20141').style['mix-blend-mode'] = 'normal';
    var layer_FeminicidiosJalisco20141 = new L.geoJson(json_FeminicidiosJalisco20141, {
        attribution: '<a href=""></a>',
        pane: 'pane_FeminicidiosJalisco20141',
        onEachFeature: pop_FeminicidiosJalisco20141,
        style: style_FeminicidiosJalisco20141_0,
    });
        bounds_group.addLayer(layer_FeminicidiosJalisco20141);
        function pop_FeminicidiosJalisco20152(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Nombre'] !== null ? Autolinker.link(String(feature.properties['Nombre'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['2015'] !== null ? Autolinker.link(String(feature.properties['2015'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_FeminicidiosJalisco20152_0(feature) {
            if (feature.properties['2015'] >= 0.000000 && feature.properties['2015'] <= 2.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20152',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
            }
            }
            if (feature.properties['2015'] >= 2.000000 && feature.properties['2015'] <= 4.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20152',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(253,190,165,1.0)',
            }
            }
            if (feature.properties['2015'] >= 4.000000 && feature.properties['2015'] <= 6.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20152',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(252,112,80,1.0)',
            }
            }
            if (feature.properties['2015'] >= 6.000000 && feature.properties['2015'] <= 8.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20152',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(212,32,32,1.0)',
            }
            }
            if (feature.properties['2015'] >= 8.000000 && feature.properties['2015'] <= 10.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20152',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(103,0,13,1.0)',
            }
            }
        }
        map.createPane('pane_FeminicidiosJalisco20152');
        map.getPane('pane_FeminicidiosJalisco20152').style.zIndex = 402;
        map.getPane('pane_FeminicidiosJalisco20152').style['mix-blend-mode'] = 'normal';
    var layer_FeminicidiosJalisco20152 = new L.geoJson(json_FeminicidiosJalisco20152, {
        attribution: '<a href=""></a>',
        pane: 'pane_FeminicidiosJalisco20152',
        onEachFeature: pop_FeminicidiosJalisco20152,
        style: style_FeminicidiosJalisco20152_0,
    });
        bounds_group.addLayer(layer_FeminicidiosJalisco20152);
        function pop_FeminicidiosJalisco20163(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Nombre'] !== null ? Autolinker.link(String(feature.properties['Nombre'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['2016'] !== null ? Autolinker.link(String(feature.properties['2016'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_FeminicidiosJalisco20163_0(feature) {
            if (feature.properties['2016'] >= 0.000000 && feature.properties['2016'] <= 18.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20163',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
            }
            }
            if (feature.properties['2016'] >= 18.000000 && feature.properties['2016'] <= 36.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20163',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(252,112,80,1.0)',
            }
            }
            if (feature.properties['2016'] >= 36.000000 && feature.properties['2016'] <= 54.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20163',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(103,0,13,1.0)',
            }
            }
        }
        map.createPane('pane_FeminicidiosJalisco20163');
        map.getPane('pane_FeminicidiosJalisco20163').style.zIndex = 403;
        map.getPane('pane_FeminicidiosJalisco20163').style['mix-blend-mode'] = 'normal';
    var layer_FeminicidiosJalisco20163 = new L.geoJson(json_FeminicidiosJalisco20163, {
        attribution: '<a href=""></a>',
        pane: 'pane_FeminicidiosJalisco20163',
        onEachFeature: pop_FeminicidiosJalisco20163,
        style: style_FeminicidiosJalisco20163_0,
    });
        bounds_group.addLayer(layer_FeminicidiosJalisco20163);
        function pop_FeminicidiosJalisco20174(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Nombre'] !== null ? Autolinker.link(String(feature.properties['Nombre'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['2017'] !== null ? Autolinker.link(String(feature.properties['2017'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_FeminicidiosJalisco20174_0(feature) {
            if (feature.properties['2017'] >= 0.000000 && feature.properties['2017'] <= 3.800000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20174',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
            }
            }
            if (feature.properties['2017'] >= 3.800000 && feature.properties['2017'] <= 7.600000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20174',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(253,190,165,1.0)',
            }
            }
            if (feature.properties['2017'] >= 7.600000 && feature.properties['2017'] <= 11.400000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20174',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(252,112,80,1.0)',
            }
            }
            if (feature.properties['2017'] >= 11.400000 && feature.properties['2017'] <= 15.200000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20174',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(212,32,32,1.0)',
            }
            }
            if (feature.properties['2017'] >= 15.200000 && feature.properties['2017'] <= 19.000000 ) {
                return {
                pane: 'pane_FeminicidiosJalisco20174',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(103,0,13,1.0)',
            }
            }
        }
        map.createPane('pane_FeminicidiosJalisco20174');
        map.getPane('pane_FeminicidiosJalisco20174').style.zIndex = 404;
        map.getPane('pane_FeminicidiosJalisco20174').style['mix-blend-mode'] = 'normal';
    var layer_FeminicidiosJalisco20174 = new L.geoJson(json_FeminicidiosJalisco20174, {
        attribution: '<a href=""></a>',
        pane: 'pane_FeminicidiosJalisco20174',
        onEachFeature: pop_FeminicidiosJalisco20174,
        style: style_FeminicidiosJalisco20174_0,
    });
        bounds_group.addLayer(layer_FeminicidiosJalisco20174);
        map.addLayer(layer_FeminicidiosJalisco20174);
        var baseMaps = {};
        L.control.layers(baseMaps,{'Feminicidios Jalisco 2017<br /><table><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20174_040.png" /></td><td> 0 - 4 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20174_481.png" /></td><td> 4 - 8 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20174_8112.png" /></td><td> 8 - 11 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20174_11153.png" /></td><td> 11 - 15 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20174_15194.png" /></td><td> 15 - 19 </td></tr></table>': layer_FeminicidiosJalisco20174,'Feminicidios Jalisco 2016<br /><table><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20163_0180.png" /></td><td> 0 - 18 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20163_18361.png" /></td><td> 18 - 36 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20163_36542.png" /></td><td> 36 - 54 </td></tr></table>': layer_FeminicidiosJalisco20163,'Feminicidios Jalisco 2015<br /><table><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20152_020.png" /></td><td> 0 - 2 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20152_241.png" /></td><td> 2 - 4 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20152_462.png" /></td><td> 4 - 6 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20152_683.png" /></td><td> 6 - 8 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20152_8104.png" /></td><td> 8 - 10 </td></tr></table>': layer_FeminicidiosJalisco20152,'Feminicidios Jalisco 2014<br /><table><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20141_020.png" /></td><td> 0 - 2 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20141_241.png" /></td><td> 2 - 4 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20141_462.png" /></td><td> 4 - 6 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20141_683.png" /></td><td> 6 - 8 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20141_8104.png" /></td><td> 8 - 10 </td></tr></table>': layer_FeminicidiosJalisco20141,'Feminicidios Jalisco 2013<br /><table><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20130_0190.png" /></td><td> 0 - 19 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20130_19381.png" /></td><td> 19 - 38 </td></tr><tr><td style="text-align: center;"><img src="legend/FeminicidiosJalisco20130_38572.png" /></td><td> 38 - 57 </td></tr></table>': layer_FeminicidiosJalisco20130,},{collapsed:false}).addTo(map);
        setBounds();
