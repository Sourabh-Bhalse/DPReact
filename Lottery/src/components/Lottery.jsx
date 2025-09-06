import React, { useState } from "react";
import { genTicket, sum } from "../utils/helper";
import Ticket from "./Ticket";
import Message from "./Message";
import "../styling/Lottery.css";

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  const isWinning = sum(ticket) === 15;

  const buyTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div className="lottery-container">
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} isWinning={isWinning} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <Message isWinning={isWinning} />
    </div>
  );
}
