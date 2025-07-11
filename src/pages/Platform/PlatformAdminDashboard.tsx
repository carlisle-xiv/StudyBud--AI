import React from "react";
import PlatformAdminNavigation from "@/components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Download,
  TrendingUp,
  TrendingDown,
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  Activity,
  Globe,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";

const PlatformAdminDashboard: React.FC = () => {
  // Mock data for charts and statistics
  const platformStats = [
    {
      title: "Total Schools",
      value: "247",
      change: "+12",
      changeType: "increase",
      icon: Building2,
      color: "blue",
    },
    {
      title: "Active Students",
      value: "12,847",
      change: "+1,234",
      changeType: "increase",
      icon: Users,
      color: "green",
    },
    {
      title: "Teachers",
      value: "2,156",
      change: "+89",
      changeType: "increase",
      icon: GraduationCap,
      color: "purple",
    },
    {
      title: "Courses Created",
      value: "8,932",
      change: "-45",
      changeType: "decrease",
      icon: BookOpen,
      color: "orange",
    },
  ];

  const topSchools = [
    {
      name: "Harvard University",
      students: 2847,
      teachers: 189,
      courses: 432,
      progression: 94,
      trend: "up",
    },
    {
      name: "Stanford University",
      students: 2156,
      teachers: 167,
      courses: 389,
      progression: 91,
      trend: "up",
    },
    {
      name: "MIT",
      students: 1934,
      teachers: 145,
      courses: 356,
      progression: 89,
      trend: "up",
    },
    {
      name: "Yale University",
      students: 1823,
      teachers: 134,
      courses: 298,
      progression: 87,
      trend: "down",
    },
    {
      name: "Princeton University",
      students: 1567,
      teachers: 123,
      courses: 267,
      progression: 85,
      trend: "up",
    },
  ];

  const recentActivity = [
    {
      action: "New school registered",
      school: "University of California, Berkeley",
      time: "2 hours ago",
      type: "school",
    },
    {
      action: "Bulk student enrollment",
      school: "Columbia University",
      time: "4 hours ago",
      type: "students",
    },
    {
      action: "Course approval request",
      school: "Northwestern University",
      time: "6 hours ago",
      type: "course",
    },
    {
      action: "Platform feature update",
      school: "System-wide",
      time: "1 day ago",
      type: "system",
    },
  ];

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
                Platform Overview
              </h1>
              <p className="text-gray-600">StudyBud AI Global Administration</p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => (window.location.href = "/create-school")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add School
              </Button>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>

              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <Bell className="w-5 h-5" />
                </button>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  8
                </span>
              </div>

              {/* Profile */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/453970e188a07f05167201dfd6989f2ae4a5b20f"
                alt="Platform Admin"
                className="w-10 h-10 rounded-full border-2 border-purple-500"
              />
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Platform Statistics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {platformStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </p>
                      <div className="flex items-center">
                        {stat.changeType === "increase" ? (
                          <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span
                          className={`text-sm font-medium ${stat.changeType === "increase"
                            ? "text-green-600"
                            : "text-red-600"
                            }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                          this month
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color === "blue"
                        ? "bg-blue-100"
                        : stat.color === "green"
                          ? "bg-green-100"
                          : stat.color === "purple"
                            ? "bg-purple-100"
                            : "bg-orange-100"
                        }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${stat.color === "blue"
                          ? "text-blue-600"
                          : stat.color === "green"
                            ? "text-green-600"
                            : stat.color === "purple"
                              ? "text-purple-600"
                              : "text-orange-600"
                          }`}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Platform Growth Chart */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Platform Growth
                </h3>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {/* Mock chart visualization */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Schools</span>
                  <span>Students</span>
                  <span>Courses</span>
                </div>

                {/* Simple progress bars as chart representation */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Jan 2024</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Feb 2024</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Mar 2024</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Academic Progression Overview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Academic Progression
                </h3>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Average Completion
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    89.2%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pass Rate</span>
                  <span className="text-2xl font-bold text-blue-600">
                    94.7%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Student Satisfaction
                  </span>
                  <span className="text-2xl font-bold text-purple-600">
                    4.8/5
                  </span>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    <span className="text-green-600 font-medium">↑ 3.2%</span>{" "}
                    improvement from last month
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Top Performing Schools */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Top Performing Schools
                </h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {topSchools.map((school, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {school.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {school.students.toLocaleString()} students •{" "}
                          {school.teachers} teachers
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-900">
                          {school.progression}%
                        </span>
                        {school.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500 ml-1" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        {school.courses} courses
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Activity
                </h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${activity.type === "school"
                        ? "bg-blue-100"
                        : activity.type === "students"
                          ? "bg-green-100"
                          : activity.type === "course"
                            ? "bg-purple-100"
                            : "bg-gray-100"
                        }`}
                    >
                      {activity.type === "school" ? (
                        <Building2
                          className={`w-4 h-4 ${activity.type === "school" ? "text-blue-600" : ""
                            }`}
                        />
                      ) : activity.type === "students" ? (
                        <Users className="w-4 h-4 text-green-600" />
                      ) : activity.type === "course" ? (
                        <BookOpen className="w-4 h-4 text-purple-600" />
                      ) : (
                        <Activity className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">{activity.school}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlatformAdminDashboard;
