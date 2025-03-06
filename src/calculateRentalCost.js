/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const defaultPrice = 40;
  const firsrDiscountTerm = 3;
  const firstDiscount = 20;
  const secondDiscountTerm = 7;
  const secondDiscount = 50;

  if (days >= secondDiscountTerm) {
    return defaultPrice * days - secondDiscount;
  }

  if (days >= firsrDiscountTerm) {
    return defaultPrice * days - firstDiscount;
  }

  return defaultPrice * days;
}

module.exports = calculateRentalCost;
