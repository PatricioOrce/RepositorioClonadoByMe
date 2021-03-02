function mostrar()
{
	var num = Math.random() * (0 - 10)+10;
	var numInt = num.toFixed();

	if(numInt==(9||10))
	{
		alert(numInt+" Excelente!");
	}
	else if(numInt>=4&&numInt<9)
	{
		alert(numInt+" Aprobó!");
	}
	else
	{
		alert(numInt+" Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN