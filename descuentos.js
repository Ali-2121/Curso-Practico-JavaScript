// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDesc = 100 - descuento;
    const PrecioConDesc = (precio * porcentajePrecioConDesc)    /100;
    return PrecioConDesc;
}
// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDesc,
//     PrecioConDesc
// });

function buttonPriceDiscount (){
    const inputPrice =document.getElementById("price");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("discount");
    const priceDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);

     const resultP =document.getElementById("ResultP");
     resultP.innerText = "Elprecio con descuento es de: $" + precioConDescuento;
}
