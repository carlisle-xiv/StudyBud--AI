import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavigation from "@/components/AdminNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  User,
  Building,
  Key,
  Copy,
  FileText,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  employeeId: string;
  adminRole: string;
  department: string;
  jobTitle: string;
  accountStatus: string;
  permissions: {
    manageTeachers: boolean;
    reviewCourses: boolean;
    monitorExams: boolean;
    studentManagement: boolean;
    systemSettings: boolean;
    generateReports: boolean;
    manageAdmins: boolean;
  };
  securityOptions: {
    requirePasswordChange: boolean;
    enableTwoFactor: boolean;
    sendWelcomeEmail: boolean;
  };
}

const AddNewAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    employeeId: "",
    adminRole: "",
    department: "",
    jobTitle: "",
    accountStatus: "active",
    permissions: {
      manageTeachers: false,
      reviewCourses: false,
      monitorExams: false,
      studentManagement: false,
      systemSettings: false,
      generateReports: false,
      manageAdmins: false,
    },
    securityOptions: {
      requirePasswordChange: true,
      enableTwoFactor: false,
      sendWelcomeEmail: true,
    },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePermissionChange = (
    permission: keyof FormData["permissions"],
    checked: boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: checked,
      },
    }));
  };

  const handleSecurityOptionChange = (
    option: keyof FormData["securityOptions"],
    checked: boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      securityOptions: {
        ...prev.securityOptions,
        [option]: checked,
      },
    }));
  };

  const handleCancel = () => {
    navigate("/admin-settings");
  };

  const handleCreateAdmin = () => {
    // Handle admin creation logic here
    console.log("Creating admin:", formData);
    navigate("/admin-settings");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/admin-settings")}
                className="p-2"
              >
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Add New Admin
                </h1>
                <p className="text-gray-600 mt-1">
                  Create a new administrative account with specific permissions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleCreateAdmin}
              >
                <User className="w-4 h-4 mr-2" />
                Create Admin
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-4">
                {/* Step 1 - Active */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">
                    Basic Information
                  </span>
                </div>

                {/* Progress Line */}
                <div className="w-20 h-1 bg-gray-200 relative">
                  <div className="w-8 h-1 bg-blue-600"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">2</span>
                  </div>
                  <span className="text-gray-600 text-sm">Permissions</span>
                </div>

                {/* Progress Line */}
                <div className="w-20 h-1 bg-gray-200"></div>

                {/* Step 3 */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">3</span>
                  </div>
                  <span className="text-gray-600 text-sm">Review</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Main Forms */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Personal Information
                      </h3>
                      <p className="text-sm text-gray-600">
                        Enter the admin's basic details
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@university.edu"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="employeeId"
                        className="text-sm font-medium text-gray-700"
                      >
                        Employee ID
                      </Label>
                      <Input
                        id="employeeId"
                        placeholder="EMP-001"
                        value={formData.employeeId}
                        onChange={(e) =>
                          handleInputChange("employeeId", e.target.value)
                        }
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Role & Department Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Role & Department
                      </h3>
                      <p className="text-sm text-gray-600">
                        Assign role and department affiliation
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Admin Role
                      </Label>
                      <Select
                        value={formData.adminRole}
                        onValueChange={(value) =>
                          handleInputChange("adminRole", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select role..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="super-admin">
                            Super Admin
                          </SelectItem>
                          <SelectItem value="department-admin">
                            Department Admin
                          </SelectItem>
                          <SelectItem value="course-reviewer">
                            Course Reviewer
                          </SelectItem>
                          <SelectItem value="exam-monitor">
                            Exam Monitor
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Department
                      </Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) =>
                          handleInputChange("department", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select department..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mathematics">
                            Mathematics
                          </SelectItem>
                          <SelectItem value="computer-science">
                            Computer Science
                          </SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="jobTitle"
                      className="text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </Label>
                    <Input
                      id="jobTitle"
                      placeholder="e.g., Department Head, Academic Coordinator"
                      value={formData.jobTitle}
                      onChange={(e) =>
                        handleInputChange("jobTitle", e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Permissions Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Key className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Permissions
                      </h3>
                      <p className="text-sm text-gray-600">
                        Define what this admin can access and manage
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Core Permissions */}
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-4">
                        Core Permissions
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="manageTeachers"
                              checked={formData.permissions.manageTeachers}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "manageTeachers",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="manageTeachers"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                Manage Teachers
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                Approve, reject, and manage teacher accounts
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="reviewCourses"
                              checked={formData.permissions.reviewCourses}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "reviewCourses",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="reviewCourses"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                Review Courses
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                Approve and review course content
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="monitorExams"
                              checked={formData.permissions.monitorExams}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "monitorExams",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="monitorExams"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                Monitor Exams
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                View and manage exam activities
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="studentManagement"
                              checked={formData.permissions.studentManagement}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "studentManagement",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="studentManagement"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                Student Management
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                View and manage student accounts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Permissions */}
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-4">
                        Advanced Permissions
                      </h4>
                      <div className="space-y-3">
                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="systemSettings"
                              checked={formData.permissions.systemSettings}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "systemSettings",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="systemSettings"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                System Settings
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                Access and modify platform settings
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="generateReports"
                              checked={formData.permissions.generateReports}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "generateReports",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="generateReports"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                Generate Reports
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                Create and export platform reports
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id="manageAdmins"
                              checked={formData.permissions.manageAdmins}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(
                                  "manageAdmins",
                                  checked as boolean,
                                )
                              }
                            />
                            <div>
                              <label
                                htmlFor="manageAdmins"
                                className="text-base font-medium text-gray-900 cursor-pointer"
                              >
                                Manage Admins
                              </label>
                              <p className="text-sm text-gray-600 mt-1">
                                Add and manage other admin accounts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Account Status Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Account Status
                  </h3>
                  <RadioGroup
                    value={formData.accountStatus}
                    onValueChange={(value) =>
                      handleInputChange("accountStatus", value)
                    }
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="active" id="active" />
                      <div>
                        <Label
                          htmlFor="active"
                          className="text-base font-medium text-gray-900 cursor-pointer"
                        >
                          Active
                        </Label>
                        <p className="text-sm text-gray-600">
                          Admin can log in immediately
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="pending" id="pending" />
                      <div>
                        <Label
                          htmlFor="pending"
                          className="text-base font-medium text-gray-900 cursor-pointer"
                        >
                          Pending
                        </Label>
                        <p className="text-sm text-gray-600">
                          Requires email verification
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Security Options Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Security Options
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm text-gray-700">
                          Require password change on first login
                        </Label>
                      </div>
                      <Checkbox
                        checked={formData.securityOptions.requirePasswordChange}
                        onCheckedChange={(checked) =>
                          handleSecurityOptionChange(
                            "requirePasswordChange",
                            checked as boolean,
                          )
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm text-gray-700">
                          Enable two-factor authentication
                        </Label>
                      </div>
                      <Checkbox
                        checked={formData.securityOptions.enableTwoFactor}
                        onCheckedChange={(checked) =>
                          handleSecurityOptionChange(
                            "enableTwoFactor",
                            checked as boolean,
                          )
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm text-gray-700">
                          Send welcome email
                        </Label>
                      </div>
                      <Checkbox
                        checked={formData.securityOptions.sendWelcomeEmail}
                        onCheckedChange={(checked) =>
                          handleSecurityOptionChange(
                            "sendWelcomeEmail",
                            checked as boolean,
                          )
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Actions Card */}
                <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 bg-white"
                    >
                      <Copy className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-blue-900">
                        Copy from existing admin
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 bg-white"
                    >
                      <FileText className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-blue-900">Import from CSV</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNewAdmin;
