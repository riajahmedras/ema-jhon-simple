import React from 'react';
// To import logo image
import logo from "../../images/logo.png";
// Import Header.css file
import './Header.css';

const Header = () => {
   return (
      <div className="header">
         {/* To show dynamically logo image */}
         <img  src={logo} alt=""/>
         <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Manage Inventory Here</a>
         </nav>
      </div>
   );
};

export default Header;