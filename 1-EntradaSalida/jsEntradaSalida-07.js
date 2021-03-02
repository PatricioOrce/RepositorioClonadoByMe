/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*Patricio Orce
Ejercicio 7*/

function sumar()
{	
let numero1;
let numero2;
let resultado;

numero1=parseInt(txtIdNumeroUno.value);
numero2=parseInt(txtIdNumeroDos.value);
resultado=numero1+numero2;	

alert("El resultado es: "+resultado);



}

function restar()
{
	let numero1;
	let numero2;
	let resultado;
	
	numero1=parseInt(txtIdNumeroUno.value);
	numero2=parseInt(txtIdNumeroDos.value);
	resultado=numero1-numero2;
		
	alert("El resultado es: "+resultado);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;
	
	numero1=parseInt(txtIdNumeroUno.value);
	numero2=parseInt(txtIdNumeroDos.value);
	resultado=(numero1*numero2);
		
	alert("El resultado es: "+resultado);
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;
	
	numero1=parseInt(txtIdNumeroUno.value);
	numero2=parseInt(txtIdNumeroDos.value);
	resultado=numero1/numero2;

	alert("El resultado es: "+resultado);

}

