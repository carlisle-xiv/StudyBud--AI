import React, { useState } from "react";
import PlatformAdminNavigation from "../components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Globe,
  Settings,
  Shield,
  Bell,
  Database,
  Zap,
  Mail,
  Palette,
  Code,
  Server,
  Lock,
  Activity,
  AlertTriangle,
  CheckCircle,
  Save,
  RefreshCw,
} from "lucide-react";

const PlatformAdminPlatform: React.FC = () => {
  const [platformSettings, setPlatformSettings] = useState({
    // General Settings
    platformName: "StudyBud AI",
    platformDescription: "AI-powered educational assessment platform",
    maintenanceMode: false,
    allowNewRegistrations: true,

    // Security Settings
    enforceSSO: false,
    requireEmailVerification: true,
    sessionTimeout: "30",
    maxLoginAttempts: "3",

    // Feature Flags
    aiAnalysisEnabled: true,
    advancedReporting: true,
    customBranding: true,
    apiAccess: true,
    betaFeatures: false,

    // Email Settings
    smtpServer: "smtp.studybudai.com",
    emailDomain: "studybudai.com",
    supportEmail: "support@studybudai.com",

    // Performance
    maxFileSize: "50",
    cacheDuration: "24",
    dbBackupFrequency: "daily",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setPlatformSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  const systemStatus = [
    { name: "Database", status: "healthy", uptime: "99.9%", icon: Database },
    { name: "API Services", status: "healthy", uptime: "99.8%", icon: Server },
    { name: "Email Service", status: "warning", uptime: "98.5%", icon: Mail },
    {
      name: "File Storage",
      status: "healthy",
      uptime: "99.9%",
      icon: Database,
    },
    { name: "Authentication", status: "healthy", uptime: "100%", icon: Lock },
    { name: "Analytics", status: "healthy", uptime: "99.7%", icon: Activity },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-4 h-4" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4" />;
      case "error":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
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
                Platform Configuration
              </h1>
              <p className="text-gray-600">
                System settings and platform-wide configurations
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
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* System Status */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  System Status
                </h2>
              </div>

              <div className="space-y-4">
                {systemStatus.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">
                            {service.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Uptime: {service.uptime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`${getStatusColor(service.status)} font-medium capitalize`}
                        >
                          {service.status}
                        </span>
                        <span className={getStatusColor(service.status)}>
                          {getStatusIcon(service.status)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restart Services
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Force Database Backup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Send System Notification
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Scan
                </Button>
              </div>
            </Card>
          </div>

          {/* Configuration Sections */}
          <div className="space-y-8">
            {/* General Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  General Settings
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Platform Name
                  </label>
                  <Input
                    value={platformSettings.platformName}
                    onChange={(e) =>
                      handleInputChange("platformName", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Support Email
                  </label>
                  <Input
                    value={platformSettings.supportEmail}
                    onChange={(e) =>
                      handleInputChange("supportEmail", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Platform Description
                </label>
                <textarea
                  value={platformSettings.platformDescription}
                  onChange={(e) =>
                    handleInputChange("platformDescription", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-6 mt-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="maintenanceMode"
                    checked={platformSettings.maintenanceMode}
                    onCheckedChange={(checked) =>
                      handleInputChange("maintenanceMode", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="maintenanceMode"
                    className="text-sm text-gray-700"
                  >
                    Maintenance Mode
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="allowNewRegistrations"
                    checked={platformSettings.allowNewRegistrations}
                    onCheckedChange={(checked) =>
                      handleInputChange(
                        "allowNewRegistrations",
                        checked as boolean,
                      )
                    }
                  />
                  <label
                    htmlFor="allowNewRegistrations"
                    className="text-sm text-gray-700"
                  >
                    Allow New Registrations
                  </label>
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

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Session Timeout (minutes)
                  </label>
                  <Input
                    type="number"
                    value={platformSettings.sessionTimeout}
                    onChange={(e) =>
                      handleInputChange("sessionTimeout", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Max Login Attempts
                  </label>
                  <Input
                    type="number"
                    value={platformSettings.maxLoginAttempts}
                    onChange={(e) =>
                      handleInputChange("maxLoginAttempts", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex items-center space-x-6 mt-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="enforceSSO"
                    checked={platformSettings.enforceSSO}
                    onCheckedChange={(checked) =>
                      handleInputChange("enforceSSO", checked as boolean)
                    }
                  />
                  <label htmlFor="enforceSSO" className="text-sm text-gray-700">
                    Enforce SSO for Schools
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="requireEmailVerification"
                    checked={platformSettings.requireEmailVerification}
                    onCheckedChange={(checked) =>
                      handleInputChange(
                        "requireEmailVerification",
                        checked as boolean,
                      )
                    }
                  />
                  <label
                    htmlFor="requireEmailVerification"
                    className="text-sm text-gray-700"
                  >
                    Require Email Verification
                  </label>
                </div>
              </div>
            </Card>

            {/* Feature Flags */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Feature Flags
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="aiAnalysisEnabled"
                      checked={platformSettings.aiAnalysisEnabled}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "aiAnalysisEnabled",
                          checked as boolean,
                        )
                      }
                    />
                    <label
                      htmlFor="aiAnalysisEnabled"
                      className="text-sm text-gray-700"
                    >
                      AI Analysis Features
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="advancedReporting"
                      checked={platformSettings.advancedReporting}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "advancedReporting",
                          checked as boolean,
                        )
                      }
                    />
                    <label
                      htmlFor="advancedReporting"
                      className="text-sm text-gray-700"
                    >
                      Advanced Reporting
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="customBranding"
                      checked={platformSettings.customBranding}
                      onCheckedChange={(checked) =>
                        handleInputChange("customBranding", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="customBranding"
                      className="text-sm text-gray-700"
                    >
                      Custom Branding
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="apiAccess"
                      checked={platformSettings.apiAccess}
                      onCheckedChange={(checked) =>
                        handleInputChange("apiAccess", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="apiAccess"
                      className="text-sm text-gray-700"
                    >
                      API Access
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="betaFeatures"
                      checked={platformSettings.betaFeatures}
                      onCheckedChange={(checked) =>
                        handleInputChange("betaFeatures", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="betaFeatures"
                      className="text-sm text-gray-700"
                    >
                      Beta Features
                    </label>
                  </div>
                </div>
              </div>
            </Card>

            {/* Performance Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Performance Settings
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Max File Size (MB)
                  </label>
                  <Input
                    type="number"
                    value={platformSettings.maxFileSize}
                    onChange={(e) =>
                      handleInputChange("maxFileSize", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Cache Duration (hours)
                  </label>
                  <Input
                    type="number"
                    value={platformSettings.cacheDuration}
                    onChange={(e) =>
                      handleInputChange("cacheDuration", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    DB Backup Frequency
                  </label>
                  <select
                    value={platformSettings.dbBackupFrequency}
                    onChange={(e) =>
                      handleInputChange("dbBackupFrequency", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlatformAdminPlatform;
