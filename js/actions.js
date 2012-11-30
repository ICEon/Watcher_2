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

$(document).ready(function(e) {
	$('.Send').tap(function(){
		var formulario = $(this).parents('form');
		switch(formulario.attr('name')){
			case 'login':
				var nick = formulario.children('input:eq(0)').val();
				var pass = formulario.children('input:eq(1)').val();
				
				loginConn(nick,pass);
				
				break;	
		}
	});
    document.addEventListener("deviceready", function(){
		
	});
});