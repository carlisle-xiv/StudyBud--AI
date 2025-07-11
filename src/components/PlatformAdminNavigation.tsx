import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  GraduationCap,
  BarChart3,
  Settings,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Database,
  LogOut,
} from "lucide-react";

const PlatformAdminNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/auth/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/platform-admin-dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      name: "Schools",
      path: "/platform-admin-schools",
      icon: Building2,
      badge: "247",
    },
    {
      name: "Analytics",
      path: "/platform-admin-analytics",
      icon: BarChart3,
      badge: null,
    },
    {
      name: "Users",
      path: "/platform-admin-users",
      icon: Users,
      badge: "12.5K",
    },
    {
      name: "Platform",
      path: "/platform-admin-platform",
      icon: Globe,
      badge: null,
    },
    {
      name: "Data",
      path: "/platform-admin-data",
      icon: Database,
      badge: null,
    },
    {
      name: "Settings",
      path: "/platform-admin-settings",
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Platform Admin</h1>
            <p className="text-xs text-gray-400">StudyBud</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors duration-200 group ${active
                ? "bg-purple-600 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
            >
              <div className="flex items-center space-x-3">
                <IconComponent
                  className={`w-5 h-5 ${active
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                    }`}
                />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${active
                    ? "bg-purple-500 text-white"
                    : "bg-gray-700 text-gray-300"
                    }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/453970e188a07f05167201dfd6989f2ae4a5b20f"
            alt="Platform Admin"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />
          <div>
            <p className="text-sm font-medium text-white">Alex Johnson</p>
            <p className="text-xs text-gray-400">Platform Administrator</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Sign out</span>
        </button>
      </div>
    </div>
  );
};

export default PlatformAdminNavigation;
