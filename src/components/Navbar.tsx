import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function Navbar({ currentPage, onNavigate, onLogout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    onNavigate("landing");
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => onNavigate("dashboard")}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TicketFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("dashboard")}
              className={`hover:text-blue-600 transition-colors ${
                currentPage === "dashboard" ? "text-blue-600" : "text-gray-700"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate("tickets")}
              className={`hover:text-blue-600 transition-colors ${
                currentPage === "tickets" ? "text-blue-600" : "text-gray-700"
              }`}
            >
              Tickets
            </button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="ml-4"
            >
              Logout
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate("dashboard");
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded hover:bg-gray-100 ${
                  currentPage === "dashboard" ? "text-blue-600 bg-blue-50" : "text-gray-700"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  onNavigate("tickets");
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded hover:bg-gray-100 ${
                  currentPage === "tickets" ? "text-blue-600 bg-blue-50" : "text-gray-700"
                }`}
              >
                Tickets
              </button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="mx-4"
              >
                Logout
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
