// const price = 120;
// const discount = 18;


function calculatePriceWithDiscount(price,discount) {
    const pricePercentageWithDiscount = 100 - discount;

    const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;
    return priceWithDiscount;
}



function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById('InputPrice');
    const priceValue = InputPrice.value;

    const discount = document.getElementById('discount');
    const discountValue = discount.value;

    const priceWithDiscount = calculatePriceWithDiscount(priceValue,discountValue);

    const resultPrice = document.getElementById('resultPrice');

    resultPrice.innerText = `Price with discount: $${priceWithDiscount}`;

}



//COUPON 

    // Coupons for discounts
    const coupons = [
        {
            code: '20OFF',
            discount: 20
        },
        {
            code: '10OFF',
            discount: 10
        },
        {
            code: '5OFF',
            discount: 5
        }
    ];

function onClickButtonPriceCoupon(){



    const InputPrice = document.getElementById('InputPriceCoupon');
    const price = InputPrice.value;

    const coupon = document.getElementById('InputCoupon');
    const couponValue = coupon.value;

    // validating coupons with user coupon code
    const isCouponValueValid = function(coupon){
        return coupon.code === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    
    if (!userCoupon) {
        
        const resultPrice = document.getElementById('resultPriceCoupon');
        resultPrice.innerHTML = `Coupon: <span> ${couponValue} </span> is not valid`;
       // alert('Coupon is not valid ' + couponValue);
    } else {
        const discount = userCoupon.discount;
        const priceWithDiscount = calculatePriceWithDiscount(price,discount);
    
        const resultPrice = document.getElementById('resultPriceCoupon');
        resultPrice.innerText = `Price with discount: $${priceWithDiscount}`;
    }


}





