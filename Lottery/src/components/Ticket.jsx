import React from "react";
import TicketNumber from "./TicketNumber";

export default function Ticket({ ticket, isWinning }) {
  return (
    <div className={`ticket ${isWinning ? "winner" : ""}`}>
      {ticket.map((num, index) => (
        <TicketNumber key={index} number={num} />
      ))}
    </div>
  );
}
