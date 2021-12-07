// precios y descuentos


// const originalPrice = 120;
// const discount = 18;

function calculateDiscountedPrice(price, discount) {

    const discountPricePercent = 100 - discount;
    const priceWithDiscount = ( price * discountPricePercent) / 100;

    return priceWithDiscount;
}

/* 
console.log({
    price,
    discount,
    discountPricePercent,
    priceWithDiscount,

});
 */