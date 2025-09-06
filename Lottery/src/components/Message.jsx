import React from "react";

export default function Message({ isWinning }) {
  if (isWinning) {
    return <h3 className="winner">🎉 Congratulations, You Won! 🎉</h3>;
  }
  return <h3 style={{color: "#a8071a"}} className="loser">Sorry, Try Again!</h3>;
}
