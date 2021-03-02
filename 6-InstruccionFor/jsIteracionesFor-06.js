function mostrar()
{

	var numeroIngresado;
	var pares=0;
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(var i = 0 ; i <= numeroIngresado ; i++)
	{
		if(i%2==0)
		{
			alert(i);
			pares++;
		}
	}
	alert("Se mostraron "+pares+" numeros pares");


	/*
	for(var i = 0 ; i <= numeroIngresado ; i=i+2)
	{
		alert(i);
		pares++;
	}
	alert("Se mostraron "+pares+" numeros pares");
*/
}//FIN DE LA FUNCIÓN