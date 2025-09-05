 import React from "react";

const Price = ({ oldPrice, newPrice }) => {
  return (
    <div style={{   display: "flex",textAlign: "center", marginTop: "0px"}}>

         {/* New Price */}
      <p style={{ fontSize: "22px", fontWeight: "bolder", color: "green", marginTop: "10px" }}>
        ₹{newPrice.toLocaleString("en-IN")}
      </p>

      
      {/* Old Price with cross line */}
      <p style={{ color: "gray", fontSize: "14px", textDecoration: "line-through" , marginTop: "20px", marginLeft: "8px" }}>
        ₹{oldPrice.toLocaleString("en-IN")}
      </p>

       {/* Discount */}
      <p style={{ color: "green", fontSize: "14px", marginTop: "20px", marginLeft: "8px" }}>
        {Math.round(((oldPrice - newPrice) / oldPrice) * 100)}% off
      </p>

    </div>
  );
};

export default Price;
