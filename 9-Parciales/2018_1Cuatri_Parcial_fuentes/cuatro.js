function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=parseInt(prompt("Ingrese un numero "+numeroUno));
    numeroDos=parseInt(prompt("Ingrese otro numero"+numeroDos));

    if(numeroUno==numeroDos)
{
    alert(numeroUno+" "+numeroDos);
}
    else if(numeroUno>numeroDos)
{
    alert(numeroUno-numeroDos);
}
    else if(numeroUno<numeroDos)
{   
    resultado=(numeroUno+numeroDos);
    alert(resultado);
        if(resultado>10)
        {
            alert("La suma es "+resultado+" y supero el 10");
        }
}
}