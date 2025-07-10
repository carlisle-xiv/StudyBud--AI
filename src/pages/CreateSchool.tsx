import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlatformAdminNavigation from "../components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  Users,
  Upload,
  Check,
  AlertCircle,
} from "lucide-react";

const CreateSchool: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    schoolName: "",
    displayName: "",
    description: "",

    // Location
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",

    // Contact Information
    primaryEmail: "",
    secondaryEmail: "",
    phone: "",
    website: "",

    // Plan & Configuration
    plan: "professional",
    maxStudents: "1000",
    maxTeachers: "50",

    // Features
    features: {
      aiAnalysis: true,
      advancedReporting: false,
      customBranding: false,
      ssoIntegration: false,
      apiAccess: false,
    },

    // Admin User
    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    adminPhone: "",

    // Terms
    agreeToTerms: false,
    dataProcessingConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: { ...prev.features, [feature]: checked },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate back to schools page or show success
      navigate("/platform-admin-schools");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PlatformAdminNavigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm h-24">
          <div className="h-full px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/platform-admin-schools")}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Schools
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Add New School
                </h1>
                <p className="text-gray-600">
                  Register a new educational institution
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <main className="flex-1 p-6">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Basic Information */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Basic Information
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Official School Name *
                  </label>
                  <Input
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    placeholder="Harvard University"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Display Name
                  </label>
                  <Input
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    placeholder="Harvard"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Brief description of the institution..."
                />
              </div>
            </Card>

            {/* Location Information */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Location
                </h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Address *
                  </label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Massachusetts Hall, Harvard Yard"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      City *
                    </label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Cambridge"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      State/Province *
                    </label>
                    <Input
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Massachusetts"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      ZIP/Postal Code *
                    </label>
                    <Input
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="02138"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Primary Email *
                  </label>
                  <Input
                    name="primaryEmail"
                    type="email"
                    value={formData.primaryEmail}
                    onChange={handleInputChange}
                    placeholder="admin@harvard.edu"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Secondary Email
                  </label>
                  <Input
                    name="secondaryEmail"
                    type="email"
                    value={formData.secondaryEmail}
                    onChange={handleInputChange}
                    placeholder="support@harvard.edu"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (617) 495-1000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <Input
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://harvard.edu"
                  />
                </div>
              </div>
            </Card>

            {/* Plan & Configuration */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Plan & Configuration
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Subscription Plan *
                  </label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="basic">Basic - $99/month</option>
                    <option value="professional">
                      Professional - $299/month
                    </option>
                    <option value="enterprise">Enterprise - $799/month</option>
                    <option value="custom">Custom Plan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Max Students
                  </label>
                  <Input
                    name="maxStudents"
                    type="number"
                    value={formData.maxStudents}
                    onChange={handleInputChange}
                    placeholder="1000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Max Teachers
                  </label>
                  <Input
                    name="maxTeachers"
                    type="number"
                    value={formData.maxTeachers}
                    onChange={handleInputChange}
                    placeholder="50"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-4 block">
                  Features & Add-ons
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(formData.features).map(([key, enabled]) => (
                    <div key={key} className="flex items-center space-x-3">
                      <Checkbox
                        id={key}
                        checked={enabled}
                        onCheckedChange={(checked) =>
                          handleFeatureChange(key, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={key}
                        className="text-sm text-gray-700 capitalize"
                      >
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Primary Admin */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Primary Administrator
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <Input
                    name="adminFirstName"
                    value={formData.adminFirstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <Input
                    name="adminLastName"
                    value={formData.adminLastName}
                    onChange={handleInputChange}
                    placeholder="Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    name="adminEmail"
                    type="email"
                    value={formData.adminEmail}
                    onChange={handleInputChange}
                    placeholder="john.smith@harvard.edu"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    name="adminPhone"
                    type="tel"
                    value={formData.adminPhone}
                    onChange={handleInputChange}
                    placeholder="+1 (617) 495-1234"
                  />
                </div>
              </div>
            </Card>

            {/* Terms & Agreements */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Terms & Agreements
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        agreeToTerms: checked as boolean,
                      }))
                    }
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-700"
                  >
                    I agree to the StudyBud AI Terms of Service and Privacy
                    Policy on behalf of this institution
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="dataProcessingConsent"
                    checked={formData.dataProcessingConsent}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        dataProcessingConsent: checked as boolean,
                      }))
                    }
                  />
                  <label
                    htmlFor="dataProcessingConsent"
                    className="text-sm text-gray-700"
                  >
                    I consent to the processing of student and institutional
                    data in accordance with applicable data protection laws
                  </label>
                </div>
              </div>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/platform-admin-schools")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700"
                disabled={
                  isSubmitting ||
                  !formData.agreeToTerms ||
                  !formData.dataProcessingConsent
                }
              >
                {isSubmitting ? "Creating School..." : "Create School"}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateSchool;
