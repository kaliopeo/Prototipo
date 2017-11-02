google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(totales);

function totales() {

      var data = google.visualization.arrayToDataTable([
        ['Tipo de Participaci�n', '% participaci�n de mujeres',],
        ['S�ndico', 40.8],
        ['Regidores RP', 25.60747664],
        ['Regidores MR', 52.44956772]
      ]);

      var options = {
        title: 'Totales de participaci�n pol�tica en Jalisco',
        chartArea: {width: '50%'},
        hAxis: {
          title: '% de participaci�n',
          minValue: 0
        },
        vAxis: {
          title: 'Tipo de participaci�n'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('graf1'));

      chart.draw(data, options);
}