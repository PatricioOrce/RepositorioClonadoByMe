function mostrar()
{
	var edad;
	var estado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);


	if(estadoCivil.value=="Soltero"&&edad>=18)
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN