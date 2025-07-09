import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavigation from "@/components/AdminNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Save,
  Bell,
  CheckCircle,
  Bot,
  Users,
  Shield,
  Download,
  Edit,
  Plus,
  ChevronRight,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

const AdminSettings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");
  const [autoApproveTeachers, setAutoApproveTeachers] = useState(false);
  const [requireCourseReview, setRequireCourseReview] = useState(true);
  const [autoPublishExams, setAutoPublishExams] = useState(false);

  const tabs = [
    { id: "general", label: "General" },
    { id: "approval", label: "Approval Settings" },
    { id: "ai", label: "AI Configuration" },
    { id: "permissions", label: "Permissions" },
    { id: "security", label: "Security" },
    { id: "reports", label: "Reports" },
  ];

  const admins = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Mathematics Department Head",
      badge: "Department Admin",
      badgeColor: "bg-blue-100 text-blue-800",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d327f05a9c63479743ede76e15c1c585583e1a67",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Computer Science Faculty",
      badge: "Course Reviewer",
      badgeColor: "bg-green-100 text-green-800",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d4b6ee3463627162395d8ab31f4044e423589bff",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">
                System Settings & Permissions
              </h1>
              <p className="text-gray-600 mt-1">
                Configure platform-wide settings and manage admin permissions
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>

              <div className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    5
                  </span>
                </Button>
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Tab Navigation */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-4">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Approval Settings */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Approval Settings
                  </h3>
                  <p className="text-sm text-gray-600">
                    Configure automatic approval workflows
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Auto-approve Teacher Registrations
                    </h4>
                    <p className="text-sm text-gray-600">
                      New teachers will be automatically approved
                    </p>
                  </div>
                  <Switch
                    checked={autoApproveTeachers}
                    onCheckedChange={setAutoApproveTeachers}
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Require Admin Review for Courses
                    </h4>
                    <p className="text-sm text-gray-600">
                      Courses must be approved before going live
                    </p>
                  </div>
                  <Switch
                    checked={requireCourseReview}
                    onCheckedChange={setRequireCourseReview}
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Auto-publish Exams
                    </h4>
                    <p className="text-sm text-gray-600">
                      Exams are published immediately after creation
                    </p>
                  </div>
                  <Switch
                    checked={autoPublishExams}
                    onCheckedChange={setAutoPublishExams}
                  />
                </div>
              </div>
            </div>

            {/* AI Configuration */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI Configuration
                  </h3>
                  <p className="text-sm text-gray-600">
                    Configure AI-generated content settings
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    AI-Generated Exams
                  </label>
                  <Select defaultValue="all-subjects">
                    <SelectTrigger>
                      <SelectValue placeholder="Allow for all subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-subjects">
                        Allow for all subjects
                      </SelectItem>
                      <SelectItem value="restricted">
                        Restricted subjects only
                      </SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    AI Question Generation
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="math" defaultChecked />
                      <label htmlFor="math" className="text-sm text-gray-700">
                        Mathematics
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="science" defaultChecked />
                      <label
                        htmlFor="science"
                        className="text-sm text-gray-700"
                      >
                        Science
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="literature" />
                      <label
                        htmlFor="literature"
                        className="text-sm text-gray-700"
                      >
                        Literature
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="cs" defaultChecked />
                      <label htmlFor="cs" className="text-sm text-gray-700">
                        Computer Science
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <h4 className="font-medium text-yellow-800">
                      AI Usage Limits
                    </h4>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Maximum 50 AI-generated questions per exam
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Permissions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Admin Permissions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Manage sub-admin access levels
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => navigate("/add-new-admin")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Admin
                </Button>
              </div>

              <div className="space-y-4">
                {admins.map((admin) => (
                  <div
                    key={admin.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={admin.avatar}
                        alt={admin.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {admin.name}
                        </h4>
                        <p className="text-sm text-gray-600">{admin.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={admin.badgeColor}>{admin.badge}</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Security Settings
                  </h3>
                  <p className="text-sm text-gray-600">
                    Configure platform security measures
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    Session Timeout (minutes)
                  </label>
                  <Input defaultValue="60" type="number" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    Password Requirements
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="min-chars" defaultChecked />
                      <label
                        htmlFor="min-chars"
                        className="text-sm text-gray-700"
                      >
                        Minimum 8 characters
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="special-chars" defaultChecked />
                      <label
                        htmlFor="special-chars"
                        className="text-sm text-gray-700"
                      >
                        Require special characters
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="two-factor" />
                      <label
                        htmlFor="two-factor"
                        className="text-sm text-gray-700"
                      >
                        Two-factor authentication
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    Max Login Attempts
                  </label>
                  <Select defaultValue="3">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="5">5 attempts</SelectItem>
                      <SelectItem value="10">10 attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Export & Reports */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Export & Reports
                  </h3>
                  <p className="text-sm text-gray-600">
                    Configure data export and reporting
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      Export Student Data
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="font-medium text-gray-900">
                      Export Teacher Data
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
