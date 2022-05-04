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