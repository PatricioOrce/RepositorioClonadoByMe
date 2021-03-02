function mostrar()
{
	let edad = parseInt(txtIdEdad.value);
/*
	if(edad>=18){
		alert("El usuario es mayor de edad");
	}
	if(edad<18&&edad>=13){
		alert("El usuario es adolescente");
	}
	if(edad<=12){
		alert("El usuario es menor");
	}
*/



	if(edad>=18){
		alert("El usuario es mayor de edad");
	}
	else if(edad<18&&edad>12){
		alert("El usuario es adolescente");
	}
	else{
		alert("El usuario es menor");
	}
 

}//FIN DE LA FUNCIÓN