function calcularPrecioConCupon(precio,descuento){
    const porcentajePrecioConDesc = 100 - descuento;
    const PrecioConDesc = (precio * porcentajePrecioConDesc) /100;
    return PrecioConDesc;
}


function buttonPriceCupon (){
    const inputCompra =document.getElementById("total_compra");
    const valueCompra = inputCompra.value;
    const inputCupon = document.getElementById("miCupon");
    const valueCupon = inputCupon.value;

    let descuento;

    switch(valueCupon){
        case "Primera Compra":
            descuento = 25;
            break;
        case "Quinta Compra":
            descuento = 30;
            break;
        case "Llevo más de 6 productos":
            descuento = 35;
            break;
        default: 
            alert("Ese cupón no existe");
    }

    const precioConDescuento = calcularPrecioConCupon(valueCompra, descuento);

     const resultP =document.getElementById("ResultP");
     resultP.innerText = "Elprecio con descuento es de: $" + precioConDescuento;
}
