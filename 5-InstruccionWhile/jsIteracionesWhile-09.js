/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar;
	var flag=true;
	//iniciar variables

do{
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	
	if(flag==true)
	{
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
		flag=false;
	}
	else
	{
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
	}
	continuar = confirm("Quiere seguir ?");
	console.log(numeroMaximo);
	console.log(numeroMinimo);
}
while(continuar==true);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN