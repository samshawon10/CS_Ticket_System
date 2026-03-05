import React from "react";
import TicketCard from "./TicketCard";

function TicketsSection({ tickets, inProgressIds, onAddToProgress }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-[34px] font-bold text-slate-700">Customer Tickets</h2>
        <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
          {tickets.length} Open
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            isInProgress={inProgressIds.includes(ticket.id)}
            onAddToProgress={onAddToProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default TicketsSection;
