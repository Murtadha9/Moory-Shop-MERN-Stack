
import React from 'react';
import './DoneShopping.css';

const DoneShopping = () => {
  return (
    <div className="done-container">
      <div className="done-message">
        <h1>Order Complete</h1>
        <p>Thank you for shopping with us!</p>
        <p>Your order has been placed successfully.</p>
        <a href="/">Return to Home</a>
      </div>
    </div>
  );
}

export default DoneShopping;
