// Coupons Discounts

function calculateDiscountedPrice(price, discount) {
  const percentageOfDiscountedPrice = 100 - discount;

  const discountedPrice = (price * percentageOfDiscountedPrice) / 100;

  return discountedPrice;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const resultCoupon = document.getElementById("PriceWithCoupon");

  let discount;
  let discountedPrice;

  switch (true) {
    case couponValue === "JuanDC es Batman":
      discount = 15;
      discountedPrice = calculateDiscountedPrice(priceValue, discount);

      resultCoupon.innerText =
        `The Coupon is valid, the discounted price is : $${discountedPrice} dollars`

      break;

    case couponValue === "pero_no_le_digas_a_nadie":
      discount = 30;
      discountedPrice = calculateDiscountedPrice(priceValue, discount);

      resultCoupon.innerText =
        `The Coupon is valid, the discounted price is : $${discountedPrice} dollars`

      break;

    case couponValue === "es_un_secreto":
      discount = 25;
      discountedPrice = calculateDiscountedPrice(priceValue, discount);

      resultCoupon.innerText =
        `The Coupon is valid, the discounted price is : $${discountedPrice} dollars`

      break;
    default:
      resultCoupon.innerText = "The coupon entered isn't valid"
  }
}
