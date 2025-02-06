import React, { useState } from "react";

const Checkout = ({ onCheckout }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(formData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Card Number:</label>
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
