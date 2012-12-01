// JavaScript Document
function inspeccionar(obj)

{

  var msg = '';

 

  for (var property in obj)
  {

    if (typeof obj[property] == 'function')

    {

      var inicio = obj[property].toString().indexOf('function');

      var fin = obj[property].toString().indexOf(')')+1;

      var propertyValue=obj[property].toString().substring(inicio,fin);

      msg +=(typeof obj[property])+' '+property+' : '+propertyValue+' ;\n';

    }

    else if (typeof obj[property] == 'unknown')

    {

      msg += 'unknown '+property+' : unknown ;\n';

    }

    else
    {

      msg +=(typeof obj[property])+' '+property+' : '+obj[property]+' ;\n';

    }

  }

  return msg;

}



function loginConn(nick,pass){

	datos = "name="+nick+"&password="+pass;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.68/watcher/login.php",
		data: datos
	}).done(function(msg ) {
		alert(msg);
	});
}

function Buscar_Alumno(no_control){

	datos = "numero_control="+no_control;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.68/watcher/buscar_alumno.php",
		data: datos
	}).done(function(msg) {

var Datos = JSON.parse (msg);

alert (inspeccionar (Datos));


$('#devic table td').eq(1).text(Datos['Nombre']);
$('#devic table td').eq(3).text(Datos[Nombre]);
$('#devic table td').eq(5).text();
$('#devic table td').eq(7).text();


	});
}


$(document).ready(function(e) {

    document.addEventListener("deviceready", function(){
			$('.Send').tap(function(){
		var formulario = $(this).parents('form');

	switch(formulario.attr('name'))
	{
		
			case 'login':
			
				var nick = formulario.children('input:eq(0)').val();
				var pass = formulario.children('input:eq(1)').val();

//var time=new Date().getHours();

				loginConn(nick,pass);

	
				break;	
				
			case 'consulta':
			

			 			 Buscar_Alumno(formulario.children('input:eq(0)').val());			 




			break;	
		}
	});


			




		
	});
});