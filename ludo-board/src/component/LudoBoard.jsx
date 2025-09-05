import React, { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });

  const updateMove = (color) => {
    setMoves((prev) => ({
      ...prev,
      [color]: prev[color] + 1,  
    }));
  };

  const buttonStyle = {
    width: "70px",
    height: "35px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🎲 Ludo Game Board 🎲
      </h2>
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        <div>
          <p>Blue Moves = {moves.blue}</p>
          <button
            onClick={() => updateMove("blue")}
            style={{ ...buttonStyle, backgroundColor: "blue", color: "white" }}
          >
            +1
          </button>
        </div>

        <div>
          <p>Red Moves = {moves.red}</p>
          <button
            onClick={() => updateMove("red")}
            style={{ ...buttonStyle, backgroundColor: "red", color: "white" }}
          >
            +1
          </button>
        </div>

        <div>
          <p>Green Moves = {moves.green}</p>
          <button
            onClick={() => updateMove("green")}
            style={{ ...buttonStyle, backgroundColor: "green", color: "white" }}
          >
            +1
          </button>
        </div>

        <div>
          <p>Yellow Moves = {moves.yellow}</p>
          <button
            onClick={() => updateMove("yellow")}
            style={{ ...buttonStyle, backgroundColor: "gold", color: "black" }}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
