/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno=parseInt(txtIdLargo.value);
    let anchoTerreno=parseInt(txtIdAncho.value);
    let perimetroTerreno=(largoTerreno+anchoTerreno)*2;
    alert("Son necesarios "+(perimetroTerreno*3)+" metros de alambre.");


}
function Circulo () 
{
    let radioTerreno=parseInt(txtIdRadio.value);
    let pi=Math.PI;
    let circunferenciaTerreno=(pi*(radioTerreno*2));


    alert("Son necesarios "+(circunferenciaTerreno*3)+" metros de alambre.");

}
function Materiales () 
{
    let largoTerreno=parseInt(txtIdLargo.value);
    let anchoTerreno=parseInt(txtIdAncho.value);
    let bolsasCal;
    let bolsasCemento;
    let areaTerreno=largoTerreno*anchoTerreno;

    bolsasCal=areaTerreno*3;
    bolsasCemento=areaTerreno*2;

    alert("Se usaran "+bolsasCal+" bolsas de cal y "+bolsasCemento+" bolsas de cemento.");


}