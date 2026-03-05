import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import initialTickets from "../data/tickets";

function useTicketBoard() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressIds, setInProgressIds] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const inProgressTickets = useMemo(
    () => tickets.filter((ticket) => inProgressIds.includes(ticket.id)),
    [tickets, inProgressIds]
  );

  const addToProgress = (ticketId) => {
    if (inProgressIds.includes(ticketId)) {
      toast.info("This ticket is already in progress.");
      return;
    }

    const ticket = tickets.find((item) => item.id === ticketId);
    if (!ticket) {
      toast.error("Ticket not found.");
      return;
    }

    setInProgressIds((prev) => [...prev, ticketId]);
    toast.success(`"${ticket.title}" added to Task Status.`);
  };

  const completeTicket = (ticketId) => {
    const ticket = tickets.find((item) => item.id === ticketId);
    if (!ticket) {
      toast.error("Unable to complete this ticket.");
      return;
    }

    setInProgressIds((prev) => prev.filter((id) => id !== ticketId));
    setResolvedTickets((prev) => [ticket, ...prev.filter((item) => item.id !== ticketId)]);
    setTickets((prev) => prev.filter((item) => item.id !== ticketId));
    toast.success(`"${ticket.title}" marked as resolved.`);
  };

  return {
    tickets,
    inProgressIds,
    inProgressTickets,
    resolvedTickets,
    addToProgress,
    completeTicket,
  };
}

export default useTicketBoard;
