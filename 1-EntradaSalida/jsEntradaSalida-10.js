/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*Patricio Orce
Ejercicio 10*/

function mostrarAumento()
{
	let importe;
	let descuento;

	importe=parseInt(txtIdImporte.value);
	
	descuento=(importe*25)/100;
	txtIdResultado.value="Con descuento: : "+(importe-descuento);
}
