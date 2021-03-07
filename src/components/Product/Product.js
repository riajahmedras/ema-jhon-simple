import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
   console.log(props.product);
   const {name, img, price, seller, stock, key} = props.product;
   return (
      <div className="product">
         <div>
            <img src={img} alt=""/>
         </div>
         <div className="details">
            <h4 > <Link to={"/products/" + key}>{name}</Link> </h4>
            <p><small>by: {seller}</small></p> <br/>
            <h3>${price}</h3>
            <p>only {stock} left in stock - order soon</p>
            <button 
            onClick={() => props.handleAddProduct(props.product)}
            className='<FontAwesomeIcon icon={faCoffee} />   addCardbtn'><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
         </div>
      </div>
   );
};

export default Product;