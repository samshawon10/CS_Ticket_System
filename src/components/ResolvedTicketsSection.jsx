import React from "react";

function ResolvedTicketsSection({ resolvedTickets }) {
  return (
    <section>
      <h2 className="font-display text-[34px] font-bold text-slate-700">Resolved Task</h2>
      <div className="mt-2 space-y-2">
        {resolvedTickets.length === 0 ? (
          <p className="text-[12px] text-slate-500">No resolved tasks yet.</p>
        ) : (
          resolvedTickets.map((ticket) => (
            <article
              key={ticket.id}
              className="rounded-sm border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700 shadow-soft"
            >
              {ticket.title}
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default ResolvedTicketsSection;
