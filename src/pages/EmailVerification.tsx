import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  CheckCircle,
  Mail,
  RefreshCw,
  ArrowLeft,
  Clock,
  Shield,
} from "lucide-react";

const EmailVerification = () => {
  const [isResending, setIsResending] = useState(false);
  const [hasResent, setHasResent] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from state passed from SignUp page, or use a default
  const email = location.state?.email || "your-email@example.com";
  const userType = location.state?.userType || "student";

  useEffect(() => {
    // If no email was passed, redirect back to signup
    if (!location.state?.email) {
      navigate("/sign-up");
    }
  }, [location.state, navigate]);

  const handleResendEmail = async () => {
    setIsResending(true);

    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setHasResent(true);
    }, 2000);
  };

  const handleChangeEmail = () => {
    navigate("/sign-up", { state: { email, userType } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-md space-y-6">
          {/* Back to Sign Up */}
          <div className="text-center">
            <Link
              to="/sign-up"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign up
            </Link>
          </div>

          {/* Main Verification Card */}
          <Card className="p-8 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Check Your Email
              </h1>
              <p className="text-gray-600 mb-6">
                We've sent a verification email to{" "}
                <span className="font-medium text-gray-800">{email}</span>
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-2">
                    What's next?
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1 text-left">
                    <li>• Check your email inbox and spam folder</li>
                    <li>• Click the verification link in the email</li>
                    <li>• Complete your account setup</li>
                    <li>• Start exploring StudyBud AI</li>
                  </ul>
                </div>

                {hasResent && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      ✓ Verification email sent successfully!
                    </p>
                  </div>
                )}

                <div className="flex flex-col space-y-3">
                  <Button
                    onClick={handleResendEmail}
                    variant="outline"
                    className="w-full h-12"
                    disabled={isResending}
                  >
                    {isResending ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Resending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Resend Verification Email
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handleChangeEmail}
                    variant="outline"
                    className="w-full h-12 border-gray-300"
                  >
                    Use Different Email
                  </Button>

                  <Link to="/login">
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

          {/* Email Tips Card */}
          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-900 mb-2">
                  Haven't received the email?
                </h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Check your spam or junk folder</li>
                  <li>• Make sure {email} is correct</li>
                  <li>• Wait a few minutes for delivery</li>
                  <li>• Try resending the verification email</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Benefits Card */}
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-3">
                While you wait, here's what you'll get:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Secure Account</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">AI Analysis</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Email Updates</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Progress Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Support Section */}
          <Card className="p-6 bg-gray-50 border-gray-200">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-2">Need help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                If you continue to have issues with email verification, our
                support team is here to help.
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
              Verification links expire after 24 hours for security.
              <br />
              We'll never ask for your password via email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
