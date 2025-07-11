import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { path: "/features", label: "Features" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/for-teachers", label: "For Teachers" },
    { path: "/for-recruiters", label: "For Recruiters" },
    { path: "/reviews", label: "Reviews" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest("[data-mobile-menu]")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">StudyBud</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(link.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/auth/login"
              className={`font-medium transition-colors ${isActive("/auth/login")
                ? "text-blue-700"
                : "text-blue-600 hover:text-blue-700"
                }`}
            >
              Login
            </Link>
            <Link to="/signup">
              <Button
                className={`transition-all duration-200 ${isActive("/signup")
                  ? "bg-blue-700 hover:bg-blue-800"
                  : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-mobile-menu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" data-mobile-menu>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive(link.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth buttons */}
              <div className="pt-4 pb-2 space-y-2">
                <Link
                  to="/auth/login"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive("/auth/login")
                    ? "text-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-700 hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className={`w-full transition-all duration-200 ${isActive("/signup")
                      ? "bg-blue-700 hover:bg-blue-800"
                      : "bg-blue-600 hover:bg-blue-700"
                      }`}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
