import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Ticket, Clock, CheckCircle2, XCircle } from "lucide-react";
import Navbar from "./Navbar";

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: "open" | "in_progress" | "closed";
  priority: "low" | "medium" | "high";
}

interface DashboardPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  tickets: Ticket[];
}

export default function DashboardPage({ currentPage, onNavigate, onLogout, tickets }: DashboardPageProps) {
  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === "open").length;
  const inProgressTickets = tickets.filter(t => t.status === "in_progress").length;
  const closedTickets = tickets.filter(t => t.status === "closed").length;

  const stats = [
    {
      title: "Total Tickets",
      value: totalTickets,
      icon: <Ticket className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Open Tickets",
      value: openTickets,
      icon: <XCircle className="w-8 h-8 text-green-500" />,
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "In Progress",
      value: inProgressTickets,
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600"
    },
    {
      title: "Closed Tickets",
      value: closedTickets,
      icon: <CheckCircle2 className="w-8 h-8 text-gray-500" />,
      bgColor: "bg-gray-50",
      textColor: "text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your tickets.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl ${stat.textColor}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        

        {/* Recent Activity */}
        <Card className="shadow-md mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates on your tickets</CardDescription>
          </CardHeader>
          <CardContent>
            {tickets.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No tickets yet. Create your first ticket to get started!</p>
            ) : (
              <div className="space-y-4">
                {tickets.slice(0, 5).map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div>
                      <p className="text-gray-900">{ticket.title}</p>
                      <p className="text-sm text-gray-500">Priority: {ticket.priority}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        ticket.status === "open"
                          ? "bg-green-100 text-green-700"
                          : ticket.status === "in_progress"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {ticket.status.replace("_", " ")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
