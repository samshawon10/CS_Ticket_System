import React from "react";

function TaskStatusSection({ inProgressTickets, onComplete }) {
  return (
    <section>
      <h2 className="font-display text-[34px] font-bold text-slate-700">Task Status</h2>
      <p className="mt-1 text-[12px] text-slate-500">Select a ticket to add to Task Status</p>

      <div className="mt-4 space-y-3">
        {inProgressTickets.length === 0 ? (
          <div />
        ) : (
          inProgressTickets.map((ticket) => (
            <article key={ticket.id} className="rounded-sm border border-slate-200 bg-white p-3 shadow-soft">
              <p className="text-[14px] font-semibold text-slate-800">{ticket.title}</p>
              <button
                type="button"
                onClick={() => onComplete(ticket.id)}
                className="mt-3 w-full rounded-sm bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
              >
                Complete
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default TaskStatusSection;
