function mostrar()
{
	var numeroIngresado;
	

	for(var i = 0 ; i < 100  ; i++ )
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado == 9)
		{
			break;
		}
	}
	alert("Listo!");



}//FIN DE LA FUNCIÓN