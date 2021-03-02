/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*Patricio Orce
Ejercicio 9*/

function mostrarAumento()
{
	let sueldo;
	let resultado;
	let porcentaje;
	sueldo=parseInt(txtIdSueldo.value);

	resultado=(sueldo*0.10);
	porcentaje=sueldo+resultado;
	txtIdResultado.value="El aumento queda en: "+porcentaje;
}
