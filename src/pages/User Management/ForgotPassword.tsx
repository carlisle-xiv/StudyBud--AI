import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, CheckCircle, Lock, RefreshCw } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-md space-y-6">
          {/* Back to Login */}
          <div className="text-center">
            <Link
              to="/auth/login"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to login
            </Link>
          </div>

          {!isSubmitted ? (
            /* Reset Password Form */
            <Card className="p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Forgot Password?
                </h1>
                <p className="text-gray-600 mt-2">
                  No worries! Enter your email address and we'll send you a link
                  to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="pl-10 h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading || !email}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Sending Reset Link...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </form>

              {/* Alternative Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <span className="text-gray-600">
                    Remember your password?{" "}
                  </span>
                  <Link
                    to="/auth/login"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </Card>
          ) : (
            /* Success Message */
            <Card className="p-8 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Your Email
                </h1>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to{" "}
                  <span className="font-medium text-gray-800">{email}</span>
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-medium text-blue-900 mb-2">
                      What's next?
                    </h3>
                    <ul className="text-sm text-blue-800 space-y-1 text-left">
                      <li>• Check your email inbox</li>
                      <li>• Click the reset link in the email</li>
                      <li>• Create a new password</li>
                      <li>• Sign in with your new password</li>
                    </ul>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <Button
                      onClick={handleResendEmail}
                      variant="outline"
                      className="w-full h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Resending...
                        </>
                      ) : (
                        "Resend Email"
                      )}
                    </Button>

                    <Link to="/auth/login">
                      <Button
                        variant="outline"
                        className="w-full h-12 border-gray-300"
                      >
                        Back to Login
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Help Section */}
          <Card className="p-6 bg-gray-50 border-gray-200">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-2">
                Still having trouble?
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                If you don't receive the email within a few minutes, check your
                spam folder or contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href="mailto:support@studybuddy.ai"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  support@studybuddy.ai
                </a>
                <span className="hidden sm:inline text-gray-400">•</span>
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </div>
            </div>
          </Card>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              For security reasons, reset links expire after 24 hours.
              <br />
              If you didn't request this reset, you can safely ignore this
              email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
