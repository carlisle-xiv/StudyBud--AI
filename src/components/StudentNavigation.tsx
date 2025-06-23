import { Brain, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation, Link, useNavigate } from "react-router-dom";

const StudentNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Courses", path: "/courses" },
    { name: "Exams", path: "/exam-selection" },
    { name: "Reports", path: "/reports" },
  ];

  const isActivePath = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    if (path === "/courses") {
      return location.pathname === "/courses";
    }
    if (path === "/exam-selection") {
      return (
        location.pathname === "/exam-selection" || location.pathname === "/exam"
      );
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // Navigate to login page
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-center items-center h-16">
          <div className="flex justify-between items-center w-full max-w-6xl">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyBuddy AI
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium transition-colors ${
                    isActivePath(item.path)
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* User Section */}
            <div className="flex items-center space-x-4">
              {/* Notification */}
              <div className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </Button>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gray-200 text-gray-600">
                    SC
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  Sarah Chen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentNavigation;
