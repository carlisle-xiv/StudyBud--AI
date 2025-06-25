import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  GraduationCap,
  Settings,
  BarChart3,
  Bell,
  LogOut,
} from "lucide-react";

const AdminNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/admin-dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      name: "Teachers",
      path: "/admin-teachers",
      icon: Users,
      badge: "12",
    },
    {
      name: "Courses",
      path: "/admin-courses",
      icon: BookOpen,
      badge: "8",
    },
    {
      name: "Exams",
      path: "/admin-exams",
      icon: FileText,
      badge: null,
    },
    {
      name: "Students",
      path: "/admin-students",
      icon: GraduationCap,
      badge: null,
    },
    {
      name: "Settings",
      path: "/admin-settings",
      icon: Settings,
      badge: null,
    },
    {
      name: "Reports",
      path: "/admin-reports",
      icon: BarChart3,
      badge: null,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        {/* Logo Section */}
        <div className="h-24 flex items-center justify-center border-b border-gray-200 px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">
                StudyBuddy AI
              </div>
              <div className="text-sm text-gray-600">Admin Panel</div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto text-xs bg-white text-blue-600 px-2 py-1 rounded-full font-medium">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminNavigation;
