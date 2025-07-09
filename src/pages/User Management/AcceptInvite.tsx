import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  UserPlus,
  GraduationCap,
  Users,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Mail,
  Calendar,
  Building,
  User,
} from "lucide-react";

const AcceptInvite = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [inviteStatus, setInviteStatus] = useState<
    "pending" | "accepted" | "declined"
  >("pending");

  // Extract invite parameters from URL
  const inviteToken = searchParams.get("token");
  const inviteType = searchParams.get("type") || "course";
  const inviterEmail =
    searchParams.get("inviter") || "john.smith@university.edu";
  const organizationName = searchParams.get("org") || "Harvard University";

  // Mock invite data based on type
  const getInviteDetails = () => {
    switch (inviteType) {
      case "course":
        return {
          title: "Welcome To StudyBud",
          description: "Your smart assessment preparation begins now...",
          icon: GraduationCap,
          color: "blue",
          role: "Student",
          permissions: [
            "Access course materials",
            "Submit assignments",
            "Take exams",
            "View grades",
          ],
        };
      case "team":
        return {
          title: "AI Research Team",
          description:
            "Collaborate with fellow researchers on cutting-edge AI projects",
          icon: Users,
          color: "green",
          role: "Team Member",
          permissions: [
            "Access team resources",
            "Collaborate on projects",
            "Share research",
            "Attend meetings",
          ],
        };
      case "admin":
        return {
          title: "Administrative Access",
          description:
            "Manage courses, users, and platform settings for your institution",
          icon: Shield,
          color: "purple",
          role: "Administrator",
          permissions: [
            "Manage users",
            "Create courses",
            "View analytics",
            "System settings",
          ],
        };
      case "teacher":
        return {
          title: "Teaching Position",
          description:
            "Create and manage courses, track student progress, and assess learning",
          icon: User,
          color: "indigo",
          role: "Teacher",
          permissions: [
            "Create courses",
            "Manage students",
            "Create exams",
            "Grade assignments",
          ],
        };
      default:
        return {
          title: "Platform Invitation",
          description: "Join StudyBuddy AI and start your learning journey",
          icon: UserPlus,
          color: "blue",
          role: "User",
          permissions: ["Access platform", "Join courses", "Use AI features"],
        };
    }
  };

  const inviteDetails = getInviteDetails();
  const IconComponent = inviteDetails.icon;

  const handleAccept = async () => {
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setInviteStatus("accepted");

      // Redirect after acceptance
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 2000);
  };

  const handleDecline = async () => {
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setInviteStatus("declined");

      // Redirect after decline
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1500);
  };

  if (inviteStatus === "accepted") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <Navigation />
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <Card className="p-8 max-w-md w-full text-center shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Invitation Accepted!
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome to {inviteDetails.title}. You'll be redirected to your
              dashboard shortly.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Redirecting in a few seconds...
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (inviteStatus === "declined") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100">
        <Navigation />
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <Card className="p-8 max-w-md w-full text-center shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Invitation Declined
            </h1>
            <p className="text-gray-600 mb-6">
              You have declined the invitation to {inviteDetails.title}. You'll
              be redirected to the home page.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Redirecting...
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <div
            className={`w-20 h-20 bg-${inviteDetails.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
          >
            <IconComponent
              className={`w-10 h-10 text-${inviteDetails.color}-600`}
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            You're Invited!
          </h1>
          <p className="text-gray-600">
            Someone has invited you to join StudyBuddy AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Invite Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Invite Card */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className={`w-12 h-12 bg-${inviteDetails.color}-100 rounded-lg flex items-center justify-center`}
                >
                  <IconComponent
                    className={`w-6 h-6 text-${inviteDetails.color}-600`}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {inviteDetails.title}
                  </h2>
                  <p className="text-gray-600">{inviteDetails.description}</p>
                </div>
              </div>

              {/* Invite Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Invited by
                    </p>
                    <p className="text-sm text-gray-600">{inviterEmail}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">School</p>
                    <p className="text-sm text-gray-600">{organizationName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Role</p>
                    <p className="text-sm text-gray-600">
                      {inviteDetails.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Valid until
                    </p>
                    <p className="text-sm text-gray-600">7 days from now</p>
                  </div>
                </div>
              </div>

              {/* Permissions */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-4">
                  What you'll be able to do:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {inviteDetails.permissions.map((permission, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">
                        {permission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAccept}
                  disabled={isProcessing}
                  className={`flex-1 h-12 bg-${inviteDetails.color}-600 hover:bg-${inviteDetails.color}-700`}
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      Accept Invitation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDecline}
                  disabled={isProcessing}
                  className="flex-1 h-12"
                >
                  Decline
                </Button>
              </div>
            </Card>

            {/* Security Notice */}
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-900 mb-1">
                    Security Notice
                  </h3>
                  <p className="text-sm text-yellow-800">
                    Make sure you recognize the person who invited you and trust
                    this organization. Only accept invitations from sources you
                    trust.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What Happens Next */}
            <Card className="p-6">
              <h3 className="font-medium text-gray-900 mb-4">
                What happens next?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-medium text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Accept the invitation
                    </p>
                    <p className="text-xs text-gray-600">
                      Click the accept button above
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-medium text-blue-600">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Create or login to account
                    </p>
                    <p className="text-xs text-gray-600">
                      Set up your StudyBuddy AI account
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-medium text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Start using the platform
                    </p>
                    <p className="text-xs text-gray-600">
                      Access your new role and features
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Support */}
            <Card className="p-6 bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">Need help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you have questions about this invitation or encounter any
                issues, our support team is here to help.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@studybuddy.ai"
                  className="text-sm text-blue-600 hover:text-blue-700 block"
                >
                  support@studybuddy.ai
                </a>
                <span className="text-sm text-gray-600">
                  +233 (054) 686-4226
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptInvite;
