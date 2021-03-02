function mostrar()
{

	var nombresIngresados = [];
	var edadesIngresadas = [];
	var cantidadMayoresViudos = 0;
	var cantidadHombresViudosOSolteros = 0;
	var ancianosConFiebre = 0;
	var hombresSolteros = 0;
	var sumaEdadesHombresSolteros = 0;
	var promedioEdadHombresSolteros;
	var sexosIngresados = [];
	var estadoCivilIngresado = [];
	var temperaturaIngresada = [];
	var maximoTemperatura;
	var cantidadDePasajeros;
	var personaConMayorTemperatura;

	cantidadDePasajeros = parseInt(prompt("Cuantos pasajeros ?"));
	while(isNaN(cantidadDePasajeros)==true)
	{
		cantidadDePasajeros = parseInt(prompt("Ingrese una cantidad numerica."));
	}

	for(var i = 0 ; i <cantidadDePasajeros ; i++)
	{
		nombresIngresados[i]=prompt("Ingrese nombre del pasajero/a "+i+1);
		while(nombresIngresados[i].length>30 || nombresIngresados[i].length<3)
		{
			nombresIngresados[i]=prompt("El nombre no cumple con los parametros(Muy largo o Muy corto).");
		}
		edadesIngresadas[i]=parseInt(prompt("Ingrese edad de pasajero/a "+i+1));
		while(isNaN(edadesIngresadas[i])==true||(edadesIngresadas[i]<1 || edadesIngresadas[i]>122))//Persona mas longeva del mundo.
		{
			edadesIngresadas[i]=prompt("Incorrecto, ingrese una edad valida.");
		}
		sexosIngresados[i]=prompt("Ingrese sexo del pasajero/a "+i+1);
		sexosIngresados[i]=sexosIngresados[i].toUpperCase();
		while(!(sexosIngresados[i]=="M"||sexosIngresados[i]=="F"||sexosIngresados[i]=="MASCULINO"||sexosIngresados[i]=="FEMENINO"))
		{
			sexosIngresados[i]=prompt("Incorrecto, ingrese un sexo valido.");
			sexosIngresados[i]=sexosIngresados[i].toUpperCase();
		}
		estadoCivilIngresado[i]=prompt("Ingrese estado civil de pasajero/a "+i+1);
		estadoCivilIngresado[i]=estadoCivilIngresado[i].toUpperCase();
		while(!(estadoCivilIngresado[i]=="CASADO"||
		estadoCivilIngresado[i]=="CASADA"||
		estadoCivilIngresado[i]=="SOLTERO"||
		estadoCivilIngresado[i]=="SOLTERA"||
		estadoCivilIngresado[i]=="VIUDO"||
		estadoCivilIngresado[i]=="VIUDA"))
		{
			estadoCivilIngresado[i]=prompt("Incorrecto, ingrese un estado civil valido.");
			estadoCivilIngresado[i]=estadoCivilIngresado[i].toUpperCase();
		}
		temperaturaIngresada[i]=parseInt(prompt("Ingrese temperatura de pasajero/a "+i+1));
		while(isNaN(temperaturaIngresada[i])==true)
		{
			temperaturaIngresada[i]=parseInt(prompt("Ingrese una temperatura correcta."));
		}

		maximoTemperatura = temperaturaIngresada[0];
	}
//A:
	for(var j = 0 ; j < cantidadDePasajeros ; j++)
	{
		if(temperaturaIngresada[j]>=maximoTemperatura)
		{
			maximoTemperatura=temperaturaIngresada[j];
			personaConMayorTemperatura=nombresIngresados[j];
		}
	}
//B:
	for(var ii = 0 ; ii < cantidadDePasajeros ; ii++)
	{
		if(edadesIngresadas[ii]>=18)
		{
			estadoCivilIngresado[ii].toUpperCase();
			switch (estadoCivilIngresado[ii]) 
			{
				case "SOLTERO":
				case "SOLTERA":
					break;
				case "CASADO":
				case "CASADA":
					break;
				case "VIUDO":
				case "VIUDA":
					cantidadMayoresViudos++;
					break;
				default:
					alert("Estado civil incorrecto del pasajero N°"+ii+1);
					break;
			}
		}
//C y E
		if(sexosIngresados[ii]=="M" || sexosIngresados[ii]=="MASCULINO")
		{
			switch (estadoCivilIngresado[ii]) {
				case "SOLTERO":
					sumaEdadesHombresSolteros=sumaEdadesHombresSolteros+edadesIngresadas[ii];
					hombresSolteros++;
				case "VIUDO":
					cantidadHombresViudosOSolteros++;
					break;
				default:
					break;
			}
		}
		promedioEdadHombresSolteros=sumaEdadesHombresSolteros/hombresSolteros;


//D
		if(edadesIngresadas[ii]>60 && temperaturaIngresada[ii]>38)
		{
			ancianosConFiebre++;
		}
	}

	document.write("El promedio de edad entre hombres solteros es: "+promedioEdadHombresSolteros+"<br>");
	document.write("Los mayores con fiebre son "+ancianosConFiebre+"<br>");
	document.write("La persona con mas temperatura es "+personaConMayorTemperatura+" con °"+maximoTemperatura+"<br>");
	document.write("Mayores de edad viudos : "+cantidadMayoresViudos+"<br>");
	document.write("Cantidad de hombres solteros o viudos:"+cantidadHombresViudosOSolteros);
}
