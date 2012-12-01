// JavaScript Document

function writeFiles(c){

window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
fileSystem.root.getFile('log.txt', { create: true }, function(archivo){
archivo.createWriter(function(escritor){
escritor.onwrite = function(e){
pgAlert("El archivo fue escrito Correctamente!");
};
//***********************
escritor.seek(escritor.length);
escritor.write(c);

//***********************

}, function(){
pgAlert("No existe el archivo, agrega contenido y luego presiona en Escribir");
});
}, function(err){
pgAlert("No se pudo acceder al sistema de archivos");
});
}, function(err){
pgAlert("No se pudo acceder al sistema de archivos");
});
}

function loginConn(nick,pass){

	datos = "name="+nick+"&password="+pass;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.68/watcher/login.php",
		data: datos
	}).done(function(msg ) {

var Datos_Log = JSON.parse (msg);

switch (Datos_Log['Valor'])
{
case '1':
alert ("Here 1");
var tiempo=new Date().now();
    writeFiles(tiempo + Datos_Log['Usuario']);
	location.href = "#menu"
break;

case '2':
alert ("Here 2");
	location.href = "#menu"
break;

}
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




$('#devic table td').eq(1).text(Datos['Nombre']);
$('#devic table td').eq(3).text(Datos['Grupo']);
$('#devic table td').eq(5).text(Datos['Especialidad']);
$('#devic table td').eq(7).text(Datos['Reportes']);


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



				loginConn(nick,pass);

	
				break;	
				
			case 'consulta':
			

			 			 Buscar_Alumno(formulario.children('input:eq(0)').val());			 




			break;	
		}
	});


			




		
	});
});