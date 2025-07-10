import React, { useState } from "react";
import PlatformAdminNavigation from "../components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Settings,
  User,
  Bell,
  Shield,
  Mail,
  Eye,
  Key,
  Smartphone,
  Globe,
  Palette,
  Save,
  RefreshCw,
  Upload,
  Camera,
} from "lucide-react";

const PlatformAdminSettings: React.FC = () => {
  const [adminProfile, setAdminProfile] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@studybudai.com",
    phone: "+1 (555) 123-4567",
    title: "Platform Administrator",
    department: "Technology",
    timezone: "UTC-8 (Pacific Time)",
    language: "English",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    systemAlerts: true,
    securityAlerts: true,
    weeklyReports: true,
    monthlyReports: true,
    maintenanceAlerts: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionRemember: false,
    loginAlerts: true,
    ipWhitelist: false,
    autoLogout: "30",
  });

  const [displaySettings, setDisplaySettings] = useState({
    theme: "light",
    dashboardLayout: "default",
    itemsPerPage: "25",
    showSystemMetrics: true,
    compactMode: false,
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleProfileChange = (field: string, value: string) => {
    setAdminProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSecurityChange = (field: string, value: string | boolean) => {
    setSecuritySettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleDisplayChange = (field: string, value: string | boolean) => {
    setDisplaySettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Settings
              </h1>
              <p className="text-gray-600">
                Manage your account preferences and notifications
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={handleSave}
                className="bg-purple-600 hover:bg-purple-700"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Settings
                  </>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Profile Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Profile Information
                </h2>
              </div>

              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    AJ
                  </div>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    <Camera className="w-4 h-4 mr-2" />
                    Change
                  </Button>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input
                      value={adminProfile.firstName}
                      onChange={(e) =>
                        handleProfileChange("firstName", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      value={adminProfile.lastName}
                      onChange={(e) =>
                        handleProfileChange("lastName", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={adminProfile.email}
                      onChange={(e) =>
                        handleProfileChange("email", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={adminProfile.phone}
                      onChange={(e) =>
                        handleProfileChange("phone", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Job Title
                    </label>
                    <Input
                      value={adminProfile.title}
                      onChange={(e) =>
                        handleProfileChange("title", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Department
                    </label>
                    <Input
                      value={adminProfile.department}
                      onChange={(e) =>
                        handleProfileChange("department", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Timezone
                  </label>
                  <select
                    value={adminProfile.timezone}
                    onChange={(e) =>
                      handleProfileChange("timezone", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="UTC-8 (Pacific Time)">
                      UTC-8 (Pacific Time)
                    </option>
                    <option value="UTC-5 (Eastern Time)">
                      UTC-5 (Eastern Time)
                    </option>
                    <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                    <option value="UTC+1 (CET)">UTC+1 (CET)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Language
                  </label>
                  <select
                    value={adminProfile.language}
                    onChange={(e) =>
                      handleProfileChange("language", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Notification Preferences
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Delivery Methods
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="emailNotifications"
                        checked={notificationSettings.emailNotifications}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "emailNotifications",
                            checked as boolean,
                          )
                        }
                      />
                      <Mail className="w-4 h-4 text-gray-400" />
                      <label
                        htmlFor="emailNotifications"
                        className="text-sm text-gray-700"
                      >
                        Email Notifications
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="smsNotifications"
                        checked={notificationSettings.smsNotifications}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "smsNotifications",
                            checked as boolean,
                          )
                        }
                      />
                      <Smartphone className="w-4 h-4 text-gray-400" />
                      <label
                        htmlFor="smsNotifications"
                        className="text-sm text-gray-700"
                      >
                        SMS Notifications
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="pushNotifications"
                        checked={notificationSettings.pushNotifications}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "pushNotifications",
                            checked as boolean,
                          )
                        }
                      />
                      <Bell className="w-4 h-4 text-gray-400" />
                      <label
                        htmlFor="pushNotifications"
                        className="text-sm text-gray-700"
                      >
                        Push Notifications
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Notification Types
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="systemAlerts"
                        checked={notificationSettings.systemAlerts}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "systemAlerts",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="systemAlerts"
                        className="text-sm text-gray-700"
                      >
                        System Alerts
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="securityAlerts"
                        checked={notificationSettings.securityAlerts}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "securityAlerts",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="securityAlerts"
                        className="text-sm text-gray-700"
                      >
                        Security Alerts
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="weeklyReports"
                        checked={notificationSettings.weeklyReports}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "weeklyReports",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="weeklyReports"
                        className="text-sm text-gray-700"
                      >
                        Weekly Reports
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="monthlyReports"
                        checked={notificationSettings.monthlyReports}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "monthlyReports",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="monthlyReports"
                        className="text-sm text-gray-700"
                      >
                        Monthly Reports
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="maintenanceAlerts"
                        checked={notificationSettings.maintenanceAlerts}
                        onCheckedChange={(checked) =>
                          handleNotificationChange(
                            "maintenanceAlerts",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="maintenanceAlerts"
                        className="text-sm text-gray-700"
                      >
                        Maintenance Alerts
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Security Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Security Settings
                </h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="twoFactorAuth"
                        checked={securitySettings.twoFactorAuth}
                        onCheckedChange={(checked) =>
                          handleSecurityChange(
                            "twoFactorAuth",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="twoFactorAuth"
                        className="text-sm text-gray-700"
                      >
                        Two-Factor Authentication
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="sessionRemember"
                        checked={securitySettings.sessionRemember}
                        onCheckedChange={(checked) =>
                          handleSecurityChange(
                            "sessionRemember",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="sessionRemember"
                        className="text-sm text-gray-700"
                      >
                        Remember Session
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="loginAlerts"
                        checked={securitySettings.loginAlerts}
                        onCheckedChange={(checked) =>
                          handleSecurityChange(
                            "loginAlerts",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="loginAlerts"
                        className="text-sm text-gray-700"
                      >
                        Login Alerts
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="ipWhitelist"
                        checked={securitySettings.ipWhitelist}
                        onCheckedChange={(checked) =>
                          handleSecurityChange(
                            "ipWhitelist",
                            checked as boolean,
                          )
                        }
                      />
                      <label
                        htmlFor="ipWhitelist"
                        className="text-sm text-gray-700"
                      >
                        IP Whitelist Only
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Auto Logout (minutes)
                      </label>
                      <Input
                        type="number"
                        value={securitySettings.autoLogout}
                        onChange={(e) =>
                          handleSecurityChange("autoLogout", e.target.value)
                        }
                      />
                    </div>
                    <Button variant="outline" className="w-full">
                      <Key className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Setup 2FA
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Display Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Display Preferences
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Theme
                    </label>
                    <select
                      value={displaySettings.theme}
                      onChange={(e) =>
                        handleDisplayChange("theme", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Dashboard Layout
                    </label>
                    <select
                      value={displaySettings.dashboardLayout}
                      onChange={(e) =>
                        handleDisplayChange("dashboardLayout", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="default">Default</option>
                      <option value="compact">Compact</option>
                      <option value="expanded">Expanded</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Items Per Page
                    </label>
                    <select
                      value={displaySettings.itemsPerPage}
                      onChange={(e) =>
                        handleDisplayChange("itemsPerPage", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="showSystemMetrics"
                      checked={displaySettings.showSystemMetrics}
                      onCheckedChange={(checked) =>
                        handleDisplayChange(
                          "showSystemMetrics",
                          checked as boolean,
                        )
                      }
                    />
                    <label
                      htmlFor="showSystemMetrics"
                      className="text-sm text-gray-700"
                    >
                      Show System Metrics
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="compactMode"
                      checked={displaySettings.compactMode}
                      onCheckedChange={(checked) =>
                        handleDisplayChange("compactMode", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="compactMode"
                      className="text-sm text-gray-700"
                    >
                      Compact Mode
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlatformAdminSettings;
