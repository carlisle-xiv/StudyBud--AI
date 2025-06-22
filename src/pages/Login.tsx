import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  User,
  Users,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<
    "student" | "teacher" | null
  >(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData, "User type:", selectedUserType);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                StudyBud AI
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How It Works
              </Link>
              <Link
                to="/for-teachers"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                For Teachers
              </Link>
              <Link
                to="/reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </Link>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome Text */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-2">
              <GraduationCap className="h-9 w-9 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                StudyBud AI
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
            <p className="text-gray-600">
              Sign in to your account to continue learning
            </p>
          </div>

          {/* Login Form */}
          <Card className="p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 h-12"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 h-12"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        rememberMe: checked as boolean,
                      }))
                    }
                  />
                  <label htmlFor="remember" className="text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700"
              >
                Sign in
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-12">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="#00BCF2" d="M0 0h11.377v11.372H0V0z" />
                    <path fill="#00BCF2" d="M11.377 0H24v11.372H11.377V0z" />
                    <path fill="#00BCF2" d="M0 11.372h11.377V24H0V11.372z" />
                    <path
                      fill="#FFC72C"
                      d="M11.377 11.372H24V24H11.377V11.372z"
                    />
                  </svg>
                  Microsoft
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign up for free
                </Link>
              </div>
            </form>
          </Card>

          {/* User Type Selection */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
              I am a:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedUserType("student")}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  selectedUserType === "student"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <User className="h-6 w-6 mx-auto mb-3 text-blue-600" />
                <div className="text-sm font-medium text-gray-700">Student</div>
              </button>
              <button
                onClick={() => setSelectedUserType("teacher")}
                className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                  selectedUserType === "teacher"
                    ? "border-cyan-600 bg-cyan-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Users className="h-6 w-6 mx-auto mb-3 text-cyan-600" />
                <div className="text-sm font-medium text-gray-700">Teacher</div>
              </button>
            </div>
          </Card>

          {/* Features Section */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
              What you'll get:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  AI-powered exam analysis
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Personalized study recommendations
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Performance tracking & insights
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Access to practice tests
                </span>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">StudyBud AI</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-gray-300">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2024 StudyBud AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
