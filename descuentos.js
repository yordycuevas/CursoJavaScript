// precios y descuentos

// const originalPrice = 120;
// const discount = 18;

function calculateDiscountedPrice(price, discount) {
  const discountPricePercentage = 100 - discount;
  const priceWithDiscount = (price * discountPricePercentage) / 100;

  return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const priceWithDiscount = calculateDiscountedPrice(priceValue, discountValue);

  const priceResult = document.getElementById("PriceResult");
  priceResult.innerText = "The discounted price are $" + priceWithDiscount + " Dollars" ;
}

/* 
console.log({
    price,
    discount,
    discountPricePercentage,
    priceWithDiscount,

});
 */

