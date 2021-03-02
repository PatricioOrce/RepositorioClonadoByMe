/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
 	var cantidadLamparitas;
    var descuento;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var marcaLampara;
    var descuentoFinal;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if(cantidadLamparitas>5)
    {
        //Mayor 5
        //aplicar descuento del 50%.
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(cantidadLamparitas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                //descuento del 40 %
            }
            else
            {
                //
            }
        }
        else
        {
            if(cantidadLamparitas==4)
            {
                if(marcaLamparita=="ArgentinaLuz"||marcaLampara=="FelipeLampara")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if(cantidadLamparitas==3)
                {
                    if(marcaLamparita=="ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else if(marcaLamparita=="FelipeLampara")
                    {
                        descuento = 10;
                    }
                    else
                    {
                        descuento = 5;
                    }
                }
                descuento = 0;
            }
        }
    }

    precioFinal=cantidadLamparitas*precioUnitarioLampara;
    descuentoFinal=(precioFinal*descuento)/100
    total=precioFinal-descuentoFinal;

    if(total>120)
    {

    }
    txtIdprecioDescuento.value = total;
}

/* function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLamparas;
    var total;
    var descuento;
    var importeFinal;


    precioLamparas = 35;
    cantidadLamparas = parseInt(txtIdCantidad.value);
    total = cantidadLamparas*precioLamparas;

    //A:
    if(cantidadLamparas>=6)
{
    descuento = (total*50)/100;
    importeFinal= total-descuento;
        if(total>120)
        {
            descuento = total*0.10;
            txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
        }
    txtIdprecioDescuento.value = importeFinal;
}
    //B:
    else if(cantidadLamparas==5&&Marca.value=="ArgentinaLuz")
{
    descuento = (total*40)/100;
    importeFinal= total-descuento;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}  
    else if(cantidadLamparas==5&&Marca.value!="ArgentinaLuz")
{
    descuento = (total*30)/100;
    importeFinal= total-descuento;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}
    //C:
    else if(cantidadLamparas==4&&Marca.value==("ArgentinaLuz"||"FelipeLamparas"))
{
    descuento = (total*25)/100;
    importeFinal= total-descuento;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}
    else if(cantidadLamparas==4&&Marca.value!=("ArgentinaLuz"||"FelipeLamparas"))
{
    descuento = (total*20)/100;
    importeFinal= total-descuento;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}
    //D:
    else if(cantidadLamparas==3&&Marca.value=="ArgentinaLuz")
{
    total = (total*15)/100;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}
    else if(cantidadLamparas==3&&Marca.value=="FelipeLamparas")
{
    total = (total*10)/100;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}
    else if(cantidadLamparas==3&&Marca.value!=("ArgentinaLuz"||"FelipeLamparas"))
{
    total = (total*5)/100;
    if(total>120)
    {
        descuento = total*0.10;
        txtIdprecioDescuento.value=importeFinal+" IIBB Usted pago "+descuento;
    }
    txtIdprecioDescuento.value = importeFinal;
}






     
}
 */
