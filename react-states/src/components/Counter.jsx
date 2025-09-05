import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let inCount = () => {
    setCount(count+1);
    console.log({count});
  };
 

  return (
    <div className="counter">
      <p>count =  {count}</p>
      <button onClick={inCount} >Increase counter</button>
    </div>
  );
}
