import React from "react";
import BoardNavbar from "./BoardNavbar";
import BoardHero from "./BoardHero";


function TicketBoardLayout({}) {
  return (
    <div className="min-h-screen bg-canvas text-slateink">
      <BoardNavbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <BoardHero
        />

      </main>

    </div>
  );
}

export default TicketBoardLayout;
