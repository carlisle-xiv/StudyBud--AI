import React from "react";
import TeacherNavigation from "@/components/TeacherNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  Clock,
  Trophy,
  Download,
  TrendingUp,
  TrendingDown,
  Brain,
  ChevronRight,
} from "lucide-react";

const StudentPerformance: React.FC = () => {
  const performanceAlerts = [
    {
      type: "error",
      icon: AlertTriangle,
      title: "Low Performance Alert - Mathematics 101",
      description: "5 students scored below 60% on the latest exam",
      details:
        "Students: Alex Chen, Maria Garcia, John Smith, Lisa Wang, David Kim",
      action: "View Details",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-500",
    },
    {
      type: "warning",
      icon: Clock,
      title: "Missed Deadline Alert - Chemistry 201",
      description: "3 students haven't submitted their assignments",
      details: "Due: 2 days ago",
      action: "Send Reminder",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-500",
    },
    {
      type: "success",
      icon: Trophy,
      title: "Excellent Performance - Biology 101",
      description: "8 students achieved 95%+ on recent exam",
      details: "Average improvement: +15%",
      action: "View Top Performers",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-500",
    },
  ];

  const courseStats = [
    { label: "Total Students", value: "247", color: "text-gray-900" },
    { label: "Average Score", value: "78.5%", color: "text-green-600" },
    { label: "Pass Rate", value: "85.2%", color: "text-green-600" },
    { label: "At Risk Students", value: "12", color: "text-red-500" },
  ];

  const topPerformers = [
    {
      name: "Emma Wilson",
      course: "Mathematics 101",
      score: "98%",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      course: "Chemistry 201",
      score: "96%",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Sarah Johnson",
      course: "Biology 101",
      score: "95%",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const studentDetails = [
    {
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      course: "Mathematics 101",
      latestScore: "98%",
      average: "94.2%",
      trend: "+5%",
      status: "Excellent",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-green-100 text-green-800",
      scoreColor: "text-green-600",
    },
    {
      name: "Alex Chen",
      email: "alex.chen@email.com",
      course: "Mathematics 101",
      latestScore: "52%",
      average: "58.7%",
      trend: "-8%",
      status: "At Risk",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      trendUp: false,
      statusColor: "bg-red-100 text-red-800",
      scoreColor: "text-red-500",
    },
    {
      name: "Michael Rodriguez",
      email: "michael.r@email.com",
      course: "Chemistry 201",
      latestScore: "78%",
      average: "76.5%",
      trend: "+2%",
      status: "Good",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-yellow-100 text-yellow-800",
      scoreColor: "text-gray-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <span>Dashboard</span>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-gray-900 font-medium">Student Performance</span>
        </nav>

        {/* Page Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Student Performance & Insights
            </h1>
            <p className="text-gray-600">
              Monitor student progress and get AI-powered insights
            </p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Performance Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Performance Alerts
            </h2>
            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
              3 Active
            </Badge>
          </div>

          <div className="space-y-4">
            {performanceAlerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${alert.bgColor} ${alert.borderColor}`}
              >
                <div className="flex items-start">
                  <alert.icon
                    className={`w-4 h-4 mt-2 mr-3 ${alert.iconColor}`}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {alert.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {alert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        {alert.details}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-indigo-600 hover:text-indigo-700 p-0"
                      >
                        {alert.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Performance Overview & Statistics */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Course Performance Overview */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Course Performance Overview
            </h2>
            <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                Chart visualization will be displayed here
              </p>
            </div>
          </div>

          {/* Sidebar with Statistics */}
          <div className="space-y-6">
            {/* Course Statistics */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Course Statistics
              </h3>
              <div className="space-y-4">
                {courseStats.map((stat, index) => (
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

            {/* Top Performers */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Top Performers
              </h3>
              <div className="space-y-3">
                {topPerformers.map((performer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={performer.avatar}
                        alt={performer.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {performer.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {performer.course}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-green-600 text-sm">
                      {performer.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Student Performance Details */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Student Performance Details
              </h2>
              <div className="flex gap-4">
                <Select defaultValue="all-courses">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-courses">All Courses</SelectItem>
                    <SelectItem value="mathematics">Mathematics 101</SelectItem>
                    <SelectItem value="chemistry">Chemistry 201</SelectItem>
                    <SelectItem value="biology">Biology 101</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-performance">
                  <SelectTrigger className="w-44">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-performance">
                      All Performance
                    </SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="at-risk">At Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Latest Score
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentDetails.map((student, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {student.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      {student.course}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-sm font-medium ${student.scoreColor}`}
                      >
                        {student.latestScore}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      {student.average}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {student.trendUp ? (
                          <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                        )}
                        <span
                          className={`text-sm ${student.trendUp ? "text-green-600" : "text-red-500"}`}
                        >
                          {student.trend}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={student.statusColor}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-indigo-600 hover:text-indigo-700 p-0"
                        >
                          View Details
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-700 p-0"
                        >
                          Message
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI-Generated Insights */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center mb-6">
            <Brain className="w-4 h-4 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              AI-Generated Insights
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Struggling Topics */}
            <div className="p-4 rounded-lg border border-indigo-200 bg-indigo-50">
              <h3 className="font-medium text-gray-900 mb-2">
                Struggling Topics Identified
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Students are having difficulty with "Quadratic Equations" in
                Mathematics 101.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Consider reviewing this topic.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">Confidence: 89%</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-600 hover:text-indigo-700 p-0"
                >
                  Create Practice Exam
                </Button>
              </div>
            </div>

            {/* Improvement Opportunity */}
            <div className="p-4 rounded-lg border border-green-200 bg-green-50">
              <h3 className="font-medium text-gray-900 mb-2">
                Improvement Opportunity
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Students show strong performance in organic chemistry
                fundamentals.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Consider advancing to more complex topics.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">Confidence: 94%</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-green-600 hover:text-green-700 p-0"
                >
                  View Recommendations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentPerformance;
