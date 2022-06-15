console.log('Exporting');

const cart = [];
const shippingCost = 10;

export const addToCard = function (product, quantity) {
  cart.push({ product, quantity });
  console.log('Added');
};
