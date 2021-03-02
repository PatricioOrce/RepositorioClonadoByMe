function mostrar()
{


	var arrayNumeros = [];
	var cantidadNumeros;
	var maximoArray;
	var minimoArray;
	 
	cantidadNumeros = parseInt(prompt("Cuantos numeros desea ingresar ?"));

	for(var i = 0 ; i < cantidadNumeros ; i++)
	{
		arrayNumeros[i]=prompt("Ingrese el "+(i+1)+"° numero");
	}

	maximoArray=arrayNumeros[0];
	for(var j = 1 ; j < cantidadNumeros ; j++)
	{
		if(arrayNumeros[j]>maximoArray)
		{
			maximoArray=arrayNumeros[j];
		}
	}
	console.log(maximoArray);

	minimoArray=arrayNumeros[0];
	for(var j = 1 ; j < cantidadNumeros ; j++)
	{
		if(arrayNumeros[j]<minimoArray)
		{
			minimoArray=arrayNumeros[j];
		}
	}
	console.log(minimoArray);









/*
	var numeroIngresado;
	var divisores = [];
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(var i = 0 ; i <= numeroIngresado ; i++)
	{
		if(numeroIngresado%i==0)
		{
			divisores[i]=i;
		}
	}

	for(var j = 0 ; j <= numeroIngresado ; j++)
	{
		if(numeroIngresado%j==0)
		{
			alert(divisores[j]);
		}
	}

*/


}//FIN DE LA FUNCIÓN