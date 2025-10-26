import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DashboardPage from "./components/DashboardPage";
import TicketManagementPage from "./components/TicketManagementPage";

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: "open" | "in_progress" | "closed";
  priority: "low" | "medium" | "high";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const savedTickets = localStorage.getItem("tickets");
    if (savedTickets) {
      return JSON.parse(savedTickets);
    }
    return [
      {
        id: "1",
        title: "Fix login bug",
        description: "Users are unable to login with their credentials",
        status: "open",
        priority: "high",
      },
      {
        id: "2",
        title: "Update dashboard UI",
        description: "Refresh the dashboard with new design system",
        status: "in_progress",
        priority: "medium",
      },
      {
        id: "3",
        title: "Add export feature",
        description: "Allow users to export reports as PDF",
        status: "closed",
        priority: "low",
      },
    ];
  });

  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    const savedPage = localStorage.getItem("currentPage");
 

    if (savedAuth === "true") {
      setIsAuthenticated(true);
      setCurrentPage(savedPage || "dashboard");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  //probablyyyyyy should have used router but too late now :/
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("currentPage", "dashboard");
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.setItem("currentPage", "login");
    setCurrentPage("login");
  };

  const handleAddTicket = (ticket: Omit<Ticket, "id">) => {
    const newTicket: Ticket = {
      ...ticket,
      id: Date.now().toString(),
    };
    setTickets([newTicket, ...tickets]);
  };

  const handleUpdateTicket = (
    id: string,
    updatedTicket: Omit<Ticket, "id">
  ) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...updatedTicket, id } : ticket
      )
    );
  };

  const handleDeleteTicket = (id: string) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {currentPage === "landing" && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === "login" && (
        <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />
      )}
      {currentPage === "signup" && (
        <SignupPage onNavigate={handleNavigate} onLogin={handleLogin} />
      )}
      {currentPage === "dashboard" && isAuthenticated && (
        <DashboardPage
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          tickets={tickets}
        />
      )}
      {currentPage === "tickets" && isAuthenticated && (
        <TicketManagementPage
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          tickets={tickets}
          onAddTicket={handleAddTicket}
          onUpdateTicket={handleUpdateTicket}
          onDeleteTicket={handleDeleteTicket}
        />
      )}
      <Toaster />
    </div>
  );
}
