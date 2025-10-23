import React, { useState } from "react";

function Donations() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div>
      <h2>Donations</h2>
      <p>Support Sikkim’s cultural preservation with your generous donation.</p>

      {success ? (
        <p style={{ color: "green" }}>✅ Payment successful! Thank you, {name}!</p>
      ) : (
        <form onSubmit={handlePayment} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Amount (₹):</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />

          <button type="submit" style={{ marginTop: "10px", padding: "8px", background: "#1e1e2f", color: "#fff", border: "none", cursor: "pointer" }}>
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
}

export default Donations;
