function mostrar()
{


	var numeroIngresado;
	var requisitoParaPrimo=0;
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(var i = 1 ; i <= numeroIngresado ; i++)
	{
		if(numeroIngresado%i==0)
		{
			requisitoParaPrimo++;
		}
	}
	if(requisitoParaPrimo == 2)
	{
		alert("El numero es primo");
	}
	else
	{
		alert("El numero no es primo");	
	}


}//FIN DE LA FUNCIÓN