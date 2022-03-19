/* const precioOriginal = docu;
const descuento = 15; */

function calcularPrecioConDescuento(precio, dscto){

    const porcentajePrecioConDescuento = 100 - dscto;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discuntValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discuntValue);

    const resultP = document.getElementById("resultP");

    resultP.innerText = "El precio con descuento son: S/" + precioConDescuento;

}

/* console.table({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

