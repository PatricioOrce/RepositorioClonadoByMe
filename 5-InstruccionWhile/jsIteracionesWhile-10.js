/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promPositivos=0;
	var promNegativos=0;
	var diferencia=0;
	var continuar = false;

do{
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroIngresado==0)
	{
		cantidadCeros++;
	}
	else{
		if(numeroIngresado%2==0){
				cantidadPares++;
			}
		if(numeroIngresado<0){
				sumaNegativos = sumaNegativos+numeroIngresado;
				cantidadNegativos++;
			}
			else if(numeroIngresado>=0){
				sumaPositivos = sumaPositivos+numeroIngresado;
				cantidadPositivos++;
			}
		}

	continuar = confirm("Quiere seguir?");


	
	promNegativos = sumaNegativos/cantidadNegativos;
	if(cantidadNegativos==0)
	{
		promNegativos=0;
	}
	promPositivos = sumaPositivos/cantidadPositivos;	
	if(cantidadPositivos==0)
	{
		promNegativos=0;
	}
	}
	
while(continuar==true);

	document.write("La suma de negativos es : " +sumaNegativos +"<br>") ;
	document.write('\n La suma de positivos es :'+sumaPositivos +"<br>");
	document.write('\n El promedio de negativos es : '+promNegativos +"<br>");
	document.write('\n El promedio de positivos es : '+promPositivos +"<br>");
	document.write('\n La cantidad de ceros es : '+cantidadCeros +"<br>");
	document.write("La cantidad de pares es : "+cantidadPares+"<br>");
	document.write("La cantidad de negativos : "+cantidadNegativos+"<br>");
	document.write("La cantidad de positivos : "+cantidadPositivos);
}//FIN DE LA FUNCIÓN