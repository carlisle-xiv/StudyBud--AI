import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-gray-600">
                Learn how StudyBud protects and handles your data
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Overview */}
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Commitment to Privacy
                </h2>
                <p className="text-gray-600 mb-4">
                  At StudyBud, we take your privacy seriously. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our educational technology
                  platform.
                </p>
                <p className="text-gray-600">
                  <strong>Last updated:</strong> December 2024
                </p>
              </div>
            </div>
          </Card>

          {/* Information We Collect */}
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Name, email address, and contact information</li>
                      <li>
                        Educational institution and role (student, teacher,
                        administrator)
                      </li>
                      <li>Profile information and preferences</li>
                      <li>Payment and billing information for subscriptions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Educational Data
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Course content, assignments, and exam responses</li>
                      <li>Learning progress and performance analytics</li>
                      <li>Study patterns and engagement metrics</li>
                      <li>AI-generated content and recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Technical Information
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Device information and browser type</li>
                      <li>IP address and location data</li>
                      <li>Usage patterns and platform interactions</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Educational Services
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Provide personalized learning experiences</li>
                      <li>Generate AI-powered content and assessments</li>
                      <li>Track learning progress and performance</li>
                      <li>Facilitate teacher-student interactions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Platform Operations
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Maintain and improve our services</li>
                      <li>Provide customer support</li>
                      <li>Process payments and subscriptions</li>
                      <li>Ensure security and prevent fraud</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Protection */}
          <Card className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Data Protection & Security
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Encryption</h3>
                <p className="text-sm text-gray-600">
                  All data is encrypted in transit and at rest using
                  industry-standard protocols
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Access Control
                </h3>
                <p className="text-sm text-gray-600">
                  Strict access controls ensure only authorized personnel can
                  access your data
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Monitoring</h3>
                <p className="text-sm text-gray-600">
                  Continuous monitoring and auditing of our systems and data
                  access
                </p>
              </div>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Privacy Rights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Access & Control
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Privacy Choices
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Opt out of marketing communications</li>
                  <li>Manage cookie preferences</li>
                  <li>Control data sharing settings</li>
                  <li>Request data portability</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-8 bg-blue-50 border-blue-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact our Privacy Team:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Email:</span>
                <a
                  href="mailto:privacy@studybuddy.ai"
                  className="text-blue-600 hover:text-blue-700"
                >
                  privacy@studybuddy.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">Phone:</span>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
            </div>
          </Card>

          {/* Compliance */}
          <Card className="p-6 bg-gray-50">
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-2">Compliance</h3>
              <p className="text-sm text-gray-600">
                StudyBud complies with GDPR, FERPA, COPPA, and other
                applicable privacy regulations. We are committed to maintaining
                the highest standards of data protection and privacy.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
