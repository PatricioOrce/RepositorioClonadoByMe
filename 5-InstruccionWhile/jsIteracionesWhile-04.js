/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while(numeroIngresado >= 10 || numeroIngresado <= 0)
	{
		numeroIngresado = prompt("El numero incumple los requisitos pactados! Try again");
	}
	alert("El numero ingresado fue "+ numeroIngresado);
}//FIN DE LA FUNCIÓN