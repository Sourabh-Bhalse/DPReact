 import React, { useState } from "react";
import ProductTab from "./ProductTab";

export default function Button() {
  const [showProducts, setShowProducts] = useState(false);

  function printHello() {
    console.log("hello");
  }

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "160px",
    height: "44px",
    margin: "20px auto",
    backgroundColor: "#1f6feb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <div>
      <button
        style={styles}
        onDoubleClick={printHello}
        onClick={() => setShowProducts(true)}
      >
        Click me
      </button>

      {/* Conditional render */}
      {showProducts && <ProductTab />}
    </div>
  );
}
