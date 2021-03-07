import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
   const {productKey} = useParams();
   return (
      <div className="text-center">
         <h2>{productKey} Product Details page to Show Products Details</h2>
      </div>
   );
};

export default ProductDetails;