

/*			Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: 
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") 
			el precio (validar entre 100 y 300),
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. 
			Se debe Informar al usuario lo siguiente:

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra 
			c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{

	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var flagJabon = false;
	var maximoPrecioJabon;
	var cantidadUnidadesJabonMasCaro;
	var maximoJabonFabricante;
	var mayorCantidadPorUnidad;
	var tipoConMayorCantidades;
	var promedioDelMayor;
	var precioDelMayor;
	var acumuladorBarbijoPrecio = 0;
	var contadorUnidadesBarbijo = 0;
	var acumCantidadBarbijos=0;
	var acumCantidadJabones=0;
	var acumCantidadAlcohol=0;

	


	for(var i = 0 ; i <5 ; i++)
	{

		tipoProducto = prompt("Ingrese el producto");
		tipoProducto = tipoProducto.toUpperCase();
		while(!(tipoProducto == "JABON" || tipoProducto == "ALCOHOL" || tipoProducto == "BARBIJO"))
		{
			tipoProducto = prompt("Ingrese un producto valido.");
			tipoProducto = tipoProducto.toUpperCase();
		}

		precioProducto = prompt("Ingrese el precio del producto.")
		precioProducto = parseInt(precioProducto);
		while(isNaN(precioProducto) || (precioProducto<100||precioProducto>300))
		{
			precioProducto = prompt("Ingrese un precio correcto.");
			precioProducto = parseInt(precioProducto);
		}

		cantidadUnidadesProducto = prompt("Ingrese cantidad de unidades.");
		cantidadUnidadesProducto = parseInt(cantidadUnidadesProducto);
		while(isNaN(cantidadUnidadesProducto) || (cantidadUnidadesProducto<=0 || cantidadUnidadesProducto>1000))
		{
			cantidadUnidadesProducto = prompt("Ingrese una cantidad correcta de unidades.");
			cantidadUnidadesProducto = parseInt(cantidadUnidadesProducto);
		}

		marcaProducto=prompt("Ingrese marca");
		while (isNaN(marcaProducto)==false || marcaProducto == "")
		{
		marcaProducto=prompt("Ingrese marca correcta");
		}

		fabricanteProducto = prompt("Ingrese fabricante del producto");
		while(isNaN(fabricanteProducto)==false || marcaProducto == "")
		{
			fabricanteProducto = prompt("Ingrese fabricante del producto correcto");
		}

		
		
		switch (tipoProducto)
		{
		case "JABON":
			acumCantidadJabones=acumCantidadJabones+cantidadUnidadesProducto;
			if(flagJabon==false || precioProducto>maximoPrecioJabon)
			{				
				maximoPrecioJabon = precioProducto;
				cantidadUnidadesJabonMasCaro  = cantidadUnidadesProducto;
				maximoJabonFabricante = fabricanteProducto;
				flagJabon = true;
			}
			break;
		case "BARBIJO":
			acumCantidadBarbijos = acumCantidadBarbijos + cantidadUnidadesProducto;
			break;
		case "ALCOHOL":
			acumCantidadAlcohol = acumCantidadAlcohol + cantidadUnidadesProducto;
			break;
		}

		if(acumCantidadAlcohol)
	
/*
function mostrar()
{
	var tipoProducto;
	var acumuladorImporte=0;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;
	var fabricanteJabonMasCaro;
	var unidadesJabonMasCaro;
	var precioJabonMasCaro;
	var contadorUnidadesBarbijo;
	var contadorUnidadesJabon;
	var contadorUnidadesAlcohol;
	var tipoProductoMasUnidades;
	var promedio;
	
	for(var i = 0;i<5;i++){
		
		tipoProducto = prompt("Ingrese el producto");
		tipoProducto = tipoProducto.toUpperCase();
		while(isNaN(tipoProducto)==false && !(tipoProducto == "JABON" || tipoProducto == "ALCOHOL" || tipoProducto == "BARBIJO"))
		{
			tipoProducto = prompt("Ingrese un producto valido.");
		}

		precioProducto = prompt("Ingrese el precio del producto.")
		while(isNaN(precioProducto)==true && (precioProducto<100||precioProducto>300))
		{
			precioProducto = prompt("Ingrese un precio correcto.");
		}

		cantidadProducto = prompt("Ingrese cantidad de unidades.");
		while(isNaN(cantidadProducto)==true && (cantidadProducto<=0 || cantidadProducto>1000))
		{
			cantidadProducto = prompt("Ingrese una cantidad correcta de unidades.");
		}

		marcaProducto=prompt("Ingrese marca");
		while (isNaN(marcaProducto)==false)
		{
		marcaProducto=prompt("Ingrese marca correcta");
		}

		while(isNaN(marcaProducto)==false)
		{
			fabricanteProducto = prompt("Ingrese fabricante del producto correcto");
		}


		switch(tipoProducto){
			case "JABON":	
                contadorUnidadesJabon = cantidadProducto;
                        if(precioProducto > precioJabonMasCaro){
                            unidadesJabonMasCaro = cantidadProducto;
                            fabricanteJabonMasCaro = fabricanteProducto;
                            precioJabonMasCaro = precioProducto;
                        }
					break;
					case "BARBIJO": 
					contadorUnidadesBarbijo = cantidadProducto;
					break;
			case "ALCOHOL":
					contadorUnidadesAlcohol = cantidadProducto;
			}
			acumuladorImporte = acumuladorImporte + precioProducto;
	}

	if(contadorUnidadesAlcohol >= contadorUnidadesBarbijo && contadorUnidadesAlcohol >= contadorUnidadesJabon){
		tipoProductoMasUnidades = "ALCOHOL";
		promedio = acumuladorImporte / contadorUnidadesAlcohol;
	}
	else if (contadorUnidadesBarbijo >= contadorUnidadesAlcohol && contadorUnidadesBarbijo >= contadorUnidadesJabon){
		tipoProductoMasUnidades = "BARBIJO";
		promedio = acumuladorImporte / contadorUnidadesBarbijo;
	}
	else{
		tipoProductoMasUnidades = "JABON";
		promedio = acumuladorImporte / contadorUnidadesJabon;
	}

	if(contadorUnidadesJabon > 0){
		console.log("Del mas caro de los jabones, cantidad :"+contadorUnidadesJabon+" y el fabricante es :"+fabricanteJabonMasCaro);
	}
	else{
		console.log("No se ingresaron jabones")
	}

	console.log("El tipo de producto con mas unidades es :"+tipoProductoMasUnidades+" y el promedio por compra es :"+promedio);


	if(contadorUnidadesBarbijo > 0){
		console.log("La cantidad de unidades del tipo barbijo es :"+contadorUnidadesBarbijo);
	}
	else{
		console.log("No se ingresaron barbijos");
	}

}
*/
}
