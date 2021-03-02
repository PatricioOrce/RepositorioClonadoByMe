function mostrar()
{

	var array = [];
	var cantidadNumeros;

	cantidadNumeros=parseInt(prompt("Cuantos numeros desea cargar ?"));

    for(var i = 0; i<cantidadNumeros ; i++)
    {
        array[i]=parseInt(prompt("ingrese un numero"));

    }

    for(var j = 0 ; j <cantidadNumeros ; j++)
    {
        document.write(array[j]+"<br>");
    }



}//FIN DE LA FUNCIÓN