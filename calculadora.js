var numero = "";
var numeroDos="";
var operacion= 0;
var sumar=false;
var restar=false;

function mostrar(elemento){
	//datos.value+=elemento;
	document.getElementById("datos").value = numero+elemento;
	numero=document.getElementById("datos").value;
}

function suma(){
	operacion += parseInt(numero);
	document.getElementById("datos").value= operacion;
	numero= "";
	sumar=true;
}

function resta(){
	operacion -= parseInt(numero);
	document.getElementById("datos").value= operacion;
	numero= "";
	sumar=true;
}

function resultado(){
	if (suma){
		document.getElementById("datos").value=operacion+parseInt(numero);
	}
	else if (resta){
		document.getElementById("datos").value=operacion-parseInt(numero);
	}

}

function borrar(){
 	document.getElementById("datos").value=numeroDos;
}
 