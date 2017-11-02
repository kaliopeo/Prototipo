var size = 0;
var ranges_ParticipacionPoliticaRegidoresMR1 = [[0.000000, 12.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})
    })]],
[12.000000, 24.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,206,242,1.0)'})
    })]],
[24.000000, 36.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,157,228,1.0)'})
    })]],
[36.000000, 48.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,108,214,1.0)'})
    })]],
[48.000000, 60.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,59,200,1.0)'})
    })]]];
var styleCache_ParticipacionPoliticaRegidoresMR1={}
var style_ParticipacionPoliticaRegidoresMR1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("%Mujeres");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = ranges_ParticipacionPoliticaRegidoresMR1[0][2];
    for (i = 0; i < ranges_ParticipacionPoliticaRegidoresMR1.length; i++){
        var range = ranges_ParticipacionPoliticaRegidoresMR1[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_ParticipacionPoliticaRegidoresMR1[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_ParticipacionPoliticaRegidoresMR1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ParticipacionPoliticaRegidoresMR1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};