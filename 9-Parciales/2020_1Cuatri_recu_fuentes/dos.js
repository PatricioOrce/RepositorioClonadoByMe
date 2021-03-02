/*Enunciado:</h2>
			  <h2></br>Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> al terminar la compra el cliente accede a un descuento segun las bolsas en total
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
				<br>f)
				El tipo mas caro*/

function mostrar()
{


  var tipoProductos;
  var cantidadBolsas;
  var precioPorBolsa;
  var seguir=true;


  tipoProductos = prompt("Ingrese un producto.");
  tipoProductos = tipoProductos.toUpperCase();
  while(isNaN(tipoProductos)==false && (tipoProductos!="CAL"||tipoProductos!="ARENA"||tipoProductos!="CEMENTO"))
  {
    tipoProductos = prompt("Ingrese un producto valido.");
    tipoProductos = tipoProductos.toUpperCase();
  }

  cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas."));
  while(isNaN(cantidadBolsas)==true && cantidadBolsas<1)
  {
    cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas valida."));
  }




}
