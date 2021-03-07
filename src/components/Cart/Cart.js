import React from 'react';

const Cart = (props) => {
   const cart = props.cart;
   console.log(cart)
   const total = cart.reduce((total, pdct) => total + pdct.price , 0)
   let shipping = 0;
   if (total > 40) {
      shipping = 0;
   }else if(total > 20){
      shipping = 4.25;
   }else if(total > 0){
      shipping = 10;
   }
   const tax = (total * .1).toFixed(2);
   const grandToal = (total + shipping + Number(tax)).toFixed(2);
   return (
      <div>
         <h2>Order Summary: {cart.length}</h2>
         <h3><small>Shipping Cost: {shipping}</small></h3>
         <h4>Tax: {tax}</h4>
         <h3>Total Price: {grandToal}</h3>

      </div>
   );
};

export default Cart;