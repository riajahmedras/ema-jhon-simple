import React, { useState } from 'react';
import fakeData, {  } from "../../fakeData";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {
   const fakeData10 = fakeData.slice(0,10);
   const [products, setProducts] = useState(fakeData10);
   const [cart, setCart] = useState([]);
   const handleAddProduct = (product) =>{
      console.log('Clicked by Riaj', product);
      const newCart = [...cart, product];
      setCart(newCart);
   }
   
   return (
      <div className="main-container">
         <div className="product-container">
            <h2>Products: {products.length}</h2>
            <ul>
               {
                  products.map(pd => <Product
                     handleAddProduct = {handleAddProduct}
                     product={pd} ></Product>)
               }
            </ul>
         </div>
         <div className="order-summary">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;