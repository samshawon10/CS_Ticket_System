import React from "react";
import vector from "../../vector1.png";
import BoardNavbar from "./BoardNavbar";
import BoardHero from "./BoardHero";
import TicketsSection from "./TicketsSection";
import TaskStatusSection from "./TaskStatusSection";
import ResolvedTicketsSection from "./ResolvedTicketsSection";
import BoardFooter from "./BoardFooter";

function TicketBoardLayout({
  tickets,
  inProgressIds,
  inProgressTickets,
  resolvedTickets,
  onAddToProgress,
  onComplete,
}) {
  return (
    <div className="min-h-screen bg-canvas text-slateink">
      <BoardNavbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <BoardHero
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
          vectorSrc={vector}
        />

        <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <TicketsSection
            tickets={tickets}
            inProgressIds={inProgressIds}
            onAddToProgress={onAddToProgress}
          />

          <aside className="space-y-4">
            <TaskStatusSection inProgressTickets={inProgressTickets} onComplete={onComplete} />
            <ResolvedTicketsSection resolvedTickets={resolvedTickets} />
          </aside>
        </section>
      </main>

      <BoardFooter />
    </div>
  );
}

export default TicketBoardLayout;
