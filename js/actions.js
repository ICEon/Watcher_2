// JavaScript Document
function loginConn(nick,pass){

	datos = "name="+nick+"&password="+pass;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.68/watcher/login.php",
		data: datos
	}).done(function( msg ) {
		alert(msg);
	});
}

function Buscar_Alumno(no_control){

	datos = "numero_control="+no_control;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.68/watcher/buscar_alumno.php",
		data: datos
	}).done(function( msg) {
alert (msg);
var myObject = JSON.parse (msg);



$('#devic table td').eq(1).text("HOLA");
$('#devic table td').eq(3).text("YO");
$('#devic table td').eq(5).text(arreglo);
$('#devic table td').eq(7).text(myObject.Nombre);
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