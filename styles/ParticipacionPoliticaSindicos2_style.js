var size = 0;
function categories_ParticipacionPoliticaSindicos2(feature, value, size) {
                switch(value.toString()) {case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(48,163,239,1.0)'})
    })];
                    break;
case '100':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(232,158,165,1.0)'})
    })];
                    break;}};
var styleCache_ParticipacionPoliticaSindicos2={}
var style_ParticipacionPoliticaSindicos2 = function(feature, resolution){
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
    var style = categories_ParticipacionPoliticaSindicos2(feature, value, size);
    key = value + "_" + labelText
    if (!styleCache_ParticipacionPoliticaSindicos2[key]){
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
        styleCache_ParticipacionPoliticaSindicos2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ParticipacionPoliticaSindicos2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};