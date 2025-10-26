import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, Users, TrendingUp, Shield } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: Readonly<LandingPageProps>) {
  const features = [
    {
      icon: <CheckCircle2 className="w-12 h-12 text-green-500" />,
      title: "Manage Tickets",
      description: "Create, organize, and track all your support tickets in one centralized place."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-amber-500" />,
      title: "Track Progress",
      description: "Monitor ticket status in real-time with intuitive dashboards and analytics."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Collaborate Easily",
      description: "Work together seamlessly with your team to resolve issues faster."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and reliability."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Wavy Background SVG */}
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute bottom-0 w-full h-64 md:h-96"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#3b82f6"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 w-full h-64 md:h-96"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#3b82f6"
              fillOpacity="0.05"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl mb-6 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TicketFlow
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Streamline your support workflow with intelligent ticket management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => onNavigate("signup")}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2025 TicketFlow. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
