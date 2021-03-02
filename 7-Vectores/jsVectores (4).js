function mostrar()
{

	var array = [];
	var cantidadNumeros;
	var sumaTotal=0;

	cantidadNumeros=parseInt(prompt("Cuantos numeros desea cargar ?"));

    for(var i = 0; i<cantidadNumeros ; i++)
    {
        array[i]=parseInt(prompt("ingrese un numero"));
		sumaTotal = sumaTotal + array[i];

    }

    for(var j = 0 ; j <cantidadNumeros ; j++)
    {
        document.write(array[j]+"<br>");
    }
	document.write("La suma total es: "+sumaTotal);


}//FIN DE LA FUNCIÓN