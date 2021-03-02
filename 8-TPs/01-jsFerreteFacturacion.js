/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numeroUno=parseInt(txtIdPrecioUno.value);
    let numeroDos=parseInt(txtIdPrecioDos.value);
    let numeroTres=parseInt(txtIdPrecioTres.value);
    let suma=numeroUno+numeroDos+numeroTres;

    alert("El resultado es: "+suma);    


}
function Promedio () 
{
    
    let numeroUno=parseInt(txtIdPrecioUno.value);
    let numeroDos=parseInt(txtIdPrecioDos.value);
    let numeroTres=parseInt(txtIdPrecioTres.value);
    let promedio=(numeroUno+numeroDos+numeroTres)/3;

    alert("El resultado es: "+promedio);
    
}
function PrecioFinal () 
{
	
    let numeroUno=parseInt(txtIdPrecioUno.value);
    let numeroDos=parseInt(txtIdPrecioDos.value);
    let numeroTres=parseInt(txtIdPrecioTres.value);
    let impuestoIva=21;
    let suma=numeroUno+numeroDos+numeroTres;
    let aumento=(suma*impuestoIva)/100;
    let precioFinal=suma+aumento;
    alert("El resultado es: "+precioFinal);
}