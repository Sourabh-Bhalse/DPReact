import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  // Toggle like on click
  const toggleLike = () => {
    setIsLiked(!isLiked);
    console.log("isLiked:", !isLiked);
  };
  let inCount = () => {
    setCount((currCount) => {
        return currCount + 1;
    });
    setCount((currCount) => {
        return currCount + 1;
    });
     setCount((currCount) => {
        return currCount + 1;
    });
  };
   

  return (
    <div>
      <p
        onClick={() => {
          toggleLike();
          inCount();
        }}
      >
        {isLiked ? (<i class="fa-solid fa-heart"></i>): (  <i className="fa-regular fa-heart"></i>)} <br/>
        {count}
      
      </p>
      
    </div>
  );
}
