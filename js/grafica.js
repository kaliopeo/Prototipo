google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(totales);

function totales() {

      var data = google.visualization.arrayToDataTable([
        ['Año', 'Total',],
        ['2013', 423],
        ['2014', 169],
        ['2015', 159],
        ['2016', 232],
        ['2017', 269]
      ]);

      var options = {
        title: 'Totales de feminicidios por año en Jalisco',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total',
          minValue: 0
        },
        vAxis: {
          title: 'Año'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('graf1'));

      chart.draw(data, options);
}