/**
 * 
 */
$(document).ready(function() {
	$('#tablaParticipacion').dataTable({
		order : [ 1, 'asc' ],
		scrollCollapse : false,
		paging : true,
		language : {
			url : "json/Spanish.json"
		},
		dom : 'lBfrtip',
		buttons : [ {
			extend : 'print',
			text : '<i class="fa fa-print"></i> Imprimir',
			title : "Feminicidios",
			orientation : 'portrait',
			pageSize : 'LETTER',
			exportOptions : {
				columns : [ 0,1 ]
			}
		}, {
			extend : 'excel',
			text : '<i class="fa fa-file-excel-o"></i> Exportar Excel',
			title : "Feminicidios",
			orientation : 'portrait',
			pageSize : 'LETTER',
			exportOptions : {
				columns : [ 0,1 ]
			}
		}, {
			extend : 'pdf',
			text : '<i class="fa fa-file-pdf-o"></i> Genera PDF',
			title : "Feminicidios",
			orientation : 'portrait',
			pageSize : 'LETTER',
			exportOptions : {
				columns : [ 0,1 ]
			},
			styles : {
				fullWidth : {
					fonSize : 10
				}
			}
		} ]
	});
});