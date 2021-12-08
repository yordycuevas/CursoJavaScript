/* // precios y descuentos

// const originalPrice = 120;
// const discount = 18;

function calculateDiscountedPrice(price, discount) {
  const discountPricePercentage = 100 - discount;
  const priceWithDiscount = (price * discountPricePercentage) / 100;

  return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const priceWithDiscount = calculateDiscountedPrice(priceValue, discountValue);

  const priceResult = document.getElementById("PriceResult");
  priceResult.innerText = "The discounted price are $" + priceWithDiscount;
}

/* 
console.log({
    price,
    discount,
    discountPricePercentage,
    priceWithDiscount,

});
 */


// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  
  
  // console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });