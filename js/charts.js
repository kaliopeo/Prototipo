      // Load Charts and the corechart and barchart packages.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart and bar chart when Charts is loaded.
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'No. de atenciones');
        data.addColumn('number', 'atenciones');
        data.addRows([
          ['Violencia intrafamiliar', 150],
          ['Violencia psicológica', 120],
          ['Violencia verbal', 200],
          ['Abuso sexual', 50],
          ['Homicidio', 89]
        ]);

        var piechart_options = {title:'Atención a mujeres victimas de violencia en ZMG',
                       width:600,
                       height:320};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart.draw(data, piechart_options);

        var barchart_options = {title:'Atención a mujeres victimas de violencia en ZMG',
                       width:600,
                       height:320,
                       legend: 'none'};
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart.draw(data, barchart_options);
      }