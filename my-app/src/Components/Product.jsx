 import React, { useState } from "react";
import Price from "./Price";

const Product = ({ title, description, image, idx }) => {
  const [message, setMessage] = useState("");

  // Prices as numbers
  let oldPrices = [131000, 95000, 263, 10999, 10199, 1099, 378];
  let newPrices = [114000, 75000, 223, 9999, 9199, 899, 278];

  const handleAddToCart = () => {
    setMessage(`${title} added to cart ✅`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div
      className="box"
      style={{
        width: "306px",
        height: "auto",
        border: "2px solid gold",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

      {/* Add to Cart Button */}
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {/* Success Message */}
      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default Product;
