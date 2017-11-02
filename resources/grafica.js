google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(totales);

function totales() {

      var data = google.visualization.arrayToDataTable([
        ['Tipo de Participación', '% participación de mujeres',],
        ['Síndico', 40.8],
        ['Regidores RP', 25.60747664],
        ['Regidores MR', 52.44956772]
      ]);

      var options = {
        title: 'Totales de participación política en Jalisco',
        chartArea: {width: '50%'},
        hAxis: {
          title: '% de participación',
          minValue: 0
        },
        vAxis: {
          title: 'Tipo de participación'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('graf1'));

      chart.draw(data, options);
}