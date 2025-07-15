import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Clock,
  Mail,
  Shield,
  CheckCircle,
  ArrowLeft,
  School,
  Users,
  AlertCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

const TeacherPendingApproval = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email and school from state passed from SignUp page
  const email = location.state?.email || "your-email@example.com";
  const school = location.state?.school || "your institution";
  const firstName = location.state?.firstName || "";

  useEffect(() => {
    // If no email was passed, redirect back to signup
    if (!location.state?.email) {
      navigate("/signup");
    }
  }, [location.state, navigate]);

  const handleContactAdmin = () => {
    // In a real app, this would open email client or contact form
    window.location.href = `mailto:admin@${school.toLowerCase().replace(/\s+/g, "")}.edu?subject=Teacher Account Verification - ${email}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <Navigation />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-md space-y-6">
          {/* Back to Sign Up */}
          <div className="text-center">
            <Link
              to="/signup"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to sign up
            </Link>
          </div>

          {/* Main Pending Approval Card */}
          <Card className="p-8 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Account Pending Approval
              </h1>
              <p className="text-gray-600 mb-6">
                {firstName && `Hi ${firstName}! `}Your teacher account has been
                sent to your school administrator for verification.
              </p>

              <div className="space-y-4">
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h3 className="font-medium text-cyan-900 mb-2 flex items-center justify-center">
                    <School className="w-4 h-4 mr-2" />
                    What happens next?
                  </h3>
                  <ul className="text-sm text-cyan-800 space-y-2 text-left">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Your school admin at{" "}
                      <span className="font-medium">{school}</span> will review
                      your application
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      You'll receive an email confirmation once approved
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Login and start creating courses and exams
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button
                    onClick={handleContactAdmin}
                    className="w-full h-12 bg-cyan-600 hover:bg-cyan-700"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact School Admin
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

          {/* Timeline Card */}
          <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2" />
                Typical Approval Timeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-sm font-medium">
                      Application Submitted
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Just now</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Admin Review</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    1-3 business days
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">
                      Email Notification
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Upon approval</span>
                </div>
              </div>
            </div>
          </Card>

          {/* School Information Card */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-3">
              <School className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-blue-900 mb-2">
                  Your School Information
                </h3>
                <div className="space-y-1 text-sm text-blue-800">
                  <p>
                    <span className="font-medium">Institution:</span> {school}
                  </p>
                  <p>
                    <span className="font-medium">Account Type:</span> Teacher
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {email}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* What You Can Do While Waiting */}
          <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-3 flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" />
                While you wait, explore what you can do:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Browse Features</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Read Guides</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Watch Tutorials</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Join Community</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Link
                  to="/features"
                  className="inline-block text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Explore Platform Features →
                </Link>
              </div>
            </div>
          </Card>

          {/* Troubleshooting Card */}
          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-900 mb-2">
                  Taking longer than expected?
                </h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Your admin may be out of office</li>
                  <li>• Check if you used the correct school email domain</li>
                  <li>• Verify your school is registered in our system</li>
                  <li>• Contact your IT department for assistance</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Support Section */}
          <Card className="p-6 bg-gray-50 border-gray-200">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Need Additional Help?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our support team is here to help with any approval-related
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="mailto:support@studybud.ai?subject=Teacher Account Approval - Help Needed"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  <Mail className="w-3 h-3 mr-1" />
                  support@studybud.ai
                </a>
                <span className="hidden sm:inline text-gray-400">•</span>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </Card>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <Shield className="w-3 h-3 mr-1" />
              Account verification ensures institutional security and prevents
              unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPendingApproval;
