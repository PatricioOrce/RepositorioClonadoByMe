/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

/*Patricio Orce
Ejercicio 8*/

function SacarResto()
{
	let numeroDivisor;
	let numeroDividendo;
	let resultado;

	numeroDividendo=parseInt(txtIdNumeroDividendo.value);
	numeroDivisor=parseInt(txtIdNumeroDivisor.value);

	resultado=numeroDividendo%numeroDivisor;

	alert("El resultado es: "+resultado);
}
