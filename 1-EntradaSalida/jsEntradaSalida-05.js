/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre=txtIdNombre.value;
	nombre=document.getElementById('txtIdNombre').value;
	edad=txtIdEdad.value;
	alert("Su nombre es "+nombre+" y tiene "+edad+" años");


}

