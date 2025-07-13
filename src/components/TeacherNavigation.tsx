import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Brain, Bell, LogOut } from "lucide-react";

const TeacherNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex justify-center items-center h-16">
          <div className="flex justify-between items-center w-full max-w-6xl">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                StudyBud
              </span>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center">
              <a
                href="/teacher-dashboard"
                className={`font-medium transition-colors ${
                  isActive("/teacher-dashboard")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Dashboard
              </a>
              <a
                href="/teacher-courses"
                className={`ml-6 font-medium transition-colors ${
                  isActive("/teacher-courses")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Courses
              </a>
              <a
                href="/teacher-exam-creation"
                className={`ml-6 font-medium transition-colors ${
                  isActive("/teacher-exam-creation")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Exams
              </a>
              <a
                href="/student-performance"
                className={`ml-6 font-medium transition-colors ${
                  isActive("/student-performance")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Students
              </a>
              <a
                href="/teacher-resources"
                className={`ml-6 font-medium transition-colors ${
                  isActive("/teacher-resources")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Resources
              </a>
              <a
                href="/teacher-actions"
                className={`ml-6 font-medium transition-colors ${
                  isActive("/teacher-actions")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Actions
              </a>
            </nav>

            {/* Right Section - Notifications and Profile */}
            <div className="flex items-center">
              {/* Notification Bell */}
              <div className="relative">
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <Bell className="w-4 h-4" />
                </button>
              </div>

              {/* User Profile and Logout */}
              <div className="flex items-center ml-4 gap-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Dr. Sarah Johnson"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-900">
                  Dr. Sarah Johnson
                </span>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TeacherNavigation;
