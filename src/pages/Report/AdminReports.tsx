import React, { useState } from "react";
import AdminNavigation from "@/components/AdminNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  Bell,
  Calendar,
  Users,
  BookOpen,
  FileText,
  Bot,
  TrendingUp,
  Building,
  Activity,
  BarChart3,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminReports = () => {
  const [dateFilter, setDateFilter] = useState("last-7-days");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const statsCards = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12% from last month",
      changeColor: "text-green-600",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+8% from last month",
      changeColor: "text-green-600",
      icon: BookOpen,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Exams Taken",
      value: "4,923",
      change: "+23% from last month",
      changeColor: "text-green-600",
      icon: FileText,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "AI Generated",
      value: "1,284",
      change: "26% of total exams",
      changeColor: "text-amber-600",
      icon: Bot,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const topCourses = [
    {
      name: "Advanced Mathematics",
      students: 234,
      completion: 89,
      score: 4.8,
    },
    {
      name: "Computer Science 101",
      students: 189,
      completion: 92,
      score: 4.6,
    },
    {
      name: "Physics Fundamentals",
      students: 156,
      completion: 85,
      score: 4.4,
    },
  ];

  const examStats = [
    { label: "Total Exams Created", value: "1,847", color: "text-gray-900" },
    { label: "AI Generated", value: "1,284 (70%)", color: "text-amber-600" },
    { label: "Manual Created", value: "563 (30%)", color: "text-gray-900" },
    { label: "Avg. Questions per Exam", value: "24", color: "text-gray-900" },
    { label: "Avg. Completion Time", value: "18 min", color: "text-gray-900" },
  ];

  const recentActivity = [
    {
      title: "New course approved",
      subtitle: "Advanced Calculus by Dr. Smith",
      time: "2 hours ago",
      color: "bg-green-500",
    },
    {
      title: "Teacher registration pending",
      subtitle: "Prof. Johnson - Mathematics",
      time: "4 hours ago",
      color: "bg-blue-500",
    },
    {
      title: "High AI usage detected",
      subtitle: "Chemistry Department",
      time: "6 hours ago",
      color: "bg-amber-500",
    },
    {
      title: "Bulk exam export completed",
      subtitle: "Q1 2024 data package",
      time: "1 day ago",
      color: "bg-indigo-500",
    },
  ];

  const exportOptions = [
    {
      title: "Student Data",
      subtitle: "CSV, Excel",
      icon: Users,
    },
    {
      title: "Teacher Reports",
      subtitle: "PDF, Excel",
      icon: Users,
    },
    {
      title: "Exam Analytics",
      subtitle: "PDF, CSV",
      icon: FileText,
    },
    {
      title: "Usage Reports",
      subtitle: "PDF, Excel",
      icon: BarChart3,
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
                Reports & Analytics
              </h1>
              <p className="text-gray-600 mt-1">
                Platform usage insights and performance metrics
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Data
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

        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Last 7 days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 days</SelectItem>
                      <SelectItem value="last-30-days">Last 30 days</SelectItem>
                      <SelectItem value="last-90-days">Last 90 days</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="mm/dd/yyyy"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-40 pl-4 pr-10"
                      />
                      <Calendar className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <span className="text-gray-600">to</span>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="mm/dd/yyyy"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-40 pl-4 pr-10"
                      />
                      <Calendar className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Apply Filter
                </Button>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-600">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">
                          {stat.value}
                        </p>
                        <p className={`text-sm mt-1 ${stat.changeColor}`}>
                          {stat.change}
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.iconBg}`}
                      >
                        <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Activity Trends */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    User Activity Trends
                  </h3>
                  <Select defaultValue="daily">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Chart placeholder */}
                <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Activity Chart</p>
                    <p className="text-sm text-gray-400">
                      Line chart showing user activity over time
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Performing Courses */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Top Performing Courses
                </h3>
                <div className="space-y-4">
                  {topCourses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {course.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {course.students} students • {course.completion}%
                          completion
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {course.score}
                        </div>
                        <div className="text-xs text-gray-500">Avg. Score</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Usage by Department */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Usage by Department
                </h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Department Chart</p>
                    <p className="text-sm text-gray-400">
                      Pie chart showing usage by department
                    </p>
                  </div>
                </div>
              </div>

              {/* Exam Statistics */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Exam Statistics
                </h3>
                <div className="space-y-4">
                  {examStats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`font-semibold ${stat.color}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${activity.color}`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {activity.subtitle}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Export Data Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Export Data
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {exportOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={index}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-center">
                        <Icon className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                        <h4 className="font-medium text-gray-900">
                          {option.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {option.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminReports;
