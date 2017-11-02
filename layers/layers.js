var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ParticipacionPoliticaRegidoresRP0 = new ol.format.GeoJSON();
var features_ParticipacionPoliticaRegidoresRP0 = format_ParticipacionPoliticaRegidoresRP0.readFeatures(json_ParticipacionPoliticaRegidoresRP0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParticipacionPoliticaRegidoresRP0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParticipacionPoliticaRegidoresRP0.addFeatures(features_ParticipacionPoliticaRegidoresRP0);var lyr_ParticipacionPoliticaRegidoresRP0 = new ol.layer.Vector({
                source:jsonSource_ParticipacionPoliticaRegidoresRP0, 
                style: style_ParticipacionPoliticaRegidoresRP0,
                title: 'Participacion Politica Regidores RP<br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresRP0_0.png" />  40% - 47% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresRP0_1.png" />  47% - 54% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresRP0_2.png" />  54% - 61% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresRP0_3.png" />  61% - 68% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresRP0_4.png" />  68% - 75% <br />'
            });var format_ParticipacionPoliticaRegidoresMR1 = new ol.format.GeoJSON();
var features_ParticipacionPoliticaRegidoresMR1 = format_ParticipacionPoliticaRegidoresMR1.readFeatures(json_ParticipacionPoliticaRegidoresMR1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParticipacionPoliticaRegidoresMR1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParticipacionPoliticaRegidoresMR1.addFeatures(features_ParticipacionPoliticaRegidoresMR1);var lyr_ParticipacionPoliticaRegidoresMR1 = new ol.layer.Vector({
                source:jsonSource_ParticipacionPoliticaRegidoresMR1, 
                style: style_ParticipacionPoliticaRegidoresMR1,
                title: 'Participacion Politica Regidores MR<br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresMR1_0.png" />  0% - 12% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresMR1_1.png" />  12% - 24% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresMR1_2.png" />  24% - 36% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresMR1_3.png" />  36% - 48% <br />\
        <img src="styles/legend/ParticipacionPoliticaRegidoresMR1_4.png" />  48% - 60% <br />'
            });var format_ParticipacionPoliticaSindicos2 = new ol.format.GeoJSON();
var features_ParticipacionPoliticaSindicos2 = format_ParticipacionPoliticaSindicos2.readFeatures(json_ParticipacionPoliticaSindicos2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParticipacionPoliticaSindicos2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParticipacionPoliticaSindicos2.addFeatures(features_ParticipacionPoliticaSindicos2);var lyr_ParticipacionPoliticaSindicos2 = new ol.layer.Vector({
                source:jsonSource_ParticipacionPoliticaSindicos2, 
                style: style_ParticipacionPoliticaSindicos2,
                title: 'Participacion Politica Sindicos<br />\
        <img src="styles/legend/ParticipacionPoliticaSindicos2_0.png" /> Hombres<br />\
        <img src="styles/legend/ParticipacionPoliticaSindicos2_1.png" /> Mujeres<br />'
            });

lyr_ParticipacionPoliticaRegidoresRP0.setVisible(true);lyr_ParticipacionPoliticaRegidoresMR1.setVisible(true);lyr_ParticipacionPoliticaSindicos2.setVisible(true);
var layersList = [baseLayer,lyr_ParticipacionPoliticaRegidoresRP0,lyr_ParticipacionPoliticaRegidoresMR1,lyr_ParticipacionPoliticaSindicos2];
lyr_ParticipacionPoliticaRegidoresRP0.set('fieldAliases', {'nombre': 'nombre', 'RegidoresR': 'RegidoresR', 'Hombres': 'Hombres', 'Mujeres': 'Mujeres', '%Mujeres': '%Mujeres', });
lyr_ParticipacionPoliticaRegidoresMR1.set('fieldAliases', {'nombre': 'nombre', 'RegidoresM': 'RegidoresM', 'Hombres': 'Hombres', 'Mujeres': 'Mujeres', '%Mujeres': '%Mujeres', });
lyr_ParticipacionPoliticaSindicos2.set('fieldAliases', {'nombre': 'nombre', 'Síndicos': 'Síndicos', 'Hombres': 'Hombres', 'Mujeres': 'Mujeres', '%Mujeres': '%Mujeres', });
lyr_ParticipacionPoliticaRegidoresRP0.set('fieldImages', {'nombre': 'TextEdit', 'RegidoresR': 'TextEdit', 'Hombres': 'TextEdit', 'Mujeres': 'TextEdit', '%Mujeres': 'TextEdit', });
lyr_ParticipacionPoliticaRegidoresMR1.set('fieldImages', {'nombre': 'TextEdit', 'RegidoresM': 'TextEdit', 'Hombres': 'TextEdit', 'Mujeres': 'TextEdit', '%Mujeres': 'TextEdit', });
lyr_ParticipacionPoliticaSindicos2.set('fieldImages', {'nombre': 'TextEdit', 'Síndicos': 'TextEdit', 'Hombres': 'TextEdit', 'Mujeres': 'TextEdit', '%Mujeres': 'TextEdit', });
lyr_ParticipacionPoliticaRegidoresRP0.set('fieldLabels', {'nombre': 'no label', 'RegidoresR': 'inline label', 'Hombres': 'inline label', 'Mujeres': 'inline label', '%Mujeres': 'inline label', });
lyr_ParticipacionPoliticaRegidoresMR1.set('fieldLabels', {'nombre': 'no label', 'RegidoresM': 'inline label', 'Hombres': 'inline label', 'Mujeres': 'inline label', '%Mujeres': 'inline label', });
lyr_ParticipacionPoliticaSindicos2.set('fieldLabels', {'nombre': 'no label', 'Síndicos': 'inline label', 'Hombres': 'inline label', 'Mujeres': 'inline label', '%Mujeres': 'inline label', });
lyr_ParticipacionPoliticaSindicos2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});