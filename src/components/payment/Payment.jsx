import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  return (
    <div className="payment-form-container">
      <form className="payment-form">
        <h2>Credit Card Payment</h2>
        <label htmlFor="cardholderName">Cardholder Name</label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          placeholder="John Doe"
          value={formData.cardholderName}
          required
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          required
        />

        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          placeholder="MM/YY"
          value={formData.expiryDate}
          required
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="password"
          id="cvv"
          name="cvv"
          placeholder="123"
          value={formData.cvv}
          required
        />

        <button type="submit">Pay Now</button>
        <div className="note">
          This is a fake form for demonstration purposes only.
        </div>
      </form>
    </div>
  );
};

export default Payment;
