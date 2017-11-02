/**
 * 
 */

var map = L.map('map').setView([20.675668, -103.360299], 10);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	maxZoom: 18
}).addTo(map);

$.getJSON("geojson/PTZMG.geojson", function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.NOM_MUN+": "+feature.properties.valor);
      },
      style: function(feature){
    	  if(feature.properties.valor < 100)
    		  return {color: 'green', weight: 2}
    	  else if(feature.properties.valor > 100 && feature.properties.valor < 200)
    		  return {color: 'yellow', weight: 2}
    	  else if(feature.properties.valor >= 200)
    		  return {color: 'red', weight: 2}
      }
    });
    geojson.addTo(map);
});