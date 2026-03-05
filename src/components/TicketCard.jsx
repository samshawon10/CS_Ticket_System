import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { priorityStyles, ticketStatusStyles } from "../config/styles";

function TicketCard({ ticket, isInProgress, onAddToProgress }) {
  const status = isInProgress ? "in-progress" : "open";
  const statusLabel = isInProgress ? "In- Progress" : "Open";

  return (
    <article
      onClick={() => !isInProgress && onAddToProgress(ticket.id)}
      className={`rounded-sm border border-slate-200 bg-white p-3 shadow-soft ${
        isInProgress ? "cursor-default" : "cursor-pointer transition hover:-translate-y-0.5 hover:border-slate-300"
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="max-w-[74%] text-[14px] font-semibold leading-snug text-slate-800">{ticket.title}</h3>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium ${
            ticketStatusStyles[status]
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
          {statusLabel}
        </span>
      </div>

      <p className="min-h-10 text-[12px] leading-4 text-slate-500">{ticket.description}</p>

      <div className="mt-3 flex items-end justify-between text-[11px]">
        <div className="space-y-1">
          <p className="text-slate-500">#{ticket.id}</p>
          <p className={`font-semibold uppercase ${priorityStyles[ticket.priority]}`}>
            {ticket.priority} Priority
          </p>
        </div>

        <div className="space-y-1 text-right text-slate-400">
          <p>{ticket.customer}</p>
          <p className="inline-flex items-center gap-1">
            <FaCalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {ticket.createdAt}
          </p>
        </div>
      </div>
    </article>
  );
}

export default TicketCard;
