import React from "react";
import { ToastContainer } from "react-toastify";
import TicketBoardLayout from "./components/TicketBoardLayout";
import useTicketBoard from "./hooks/useTicketBoard";

function App() {
  const ticketBoard = useTicketBoard();

  return (
    <>
      <TicketBoardLayout
        tickets={ticketBoard.tickets}
        inProgressIds={ticketBoard.inProgressIds}
        inProgressTickets={ticketBoard.inProgressTickets}
        resolvedTickets={ticketBoard.resolvedTickets}
        onAddToProgress={ticketBoard.addToProgress}
        onComplete={ticketBoard.completeTicket}
      />

      <ToastContainer
        position="top-right"
        autoClose={1800}
        closeOnClick
        pauseOnHover={false}
        newestOnTop
        theme="colored"
      />
    </>
  );
}

export default App;
