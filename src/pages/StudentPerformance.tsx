import React, { useState } from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  AlertTriangle,
  Clock,
  Trophy,
  Download,
  TrendingUp,
  TrendingDown,
  Brain,
  ChevronRight,
  Users,
  BookOpen,
  Target,
  Filter,
} from "lucide-react";

const StudentPerformance: React.FC = () => {
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("mathematics-101");
  const [performanceFilter, setPerformanceFilter] = useState("all-performance");
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [selectedStudentAssessments, setSelectedStudentAssessments] =
    useState<any>(null);
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

  // All courses taught by the teacher
  const teacherCourses = [
    { id: "mathematics-101", name: "Mathematics 101", students: 45 },
    { id: "mathematics-102", name: "Mathematics 102", students: 38 },
    { id: "calculus-201", name: "Calculus 201", students: 32 },
  ];

  // All students across all courses
  const allStudents = [
    // Mathematics 101 students
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "98%",
      average: "94.2%",
      trend: "+5%",
      status: "Excellent",
      assessmentsTaken: 8,
      lastAssessment: "Quadratic Equations Test",
      enrollDate: "2024-01-15",
      assessmentHistory: [
        {
          name: "Linear Equations Quiz",
          date: "2024-03-01",
          score: "95%",
          type: "Quiz",
        },
        {
          name: "Algebra Fundamentals",
          date: "2024-02-28",
          score: "98%",
          type: "Test",
        },
        {
          name: "Functions and Graphs",
          date: "2024-02-25",
          score: "92%",
          type: "Assignment",
        },
        {
          name: "Trigonometry Test",
          date: "2024-02-20",
          score: "96%",
          type: "Test",
        },
        {
          name: "Statistics Project",
          date: "2024-02-15",
          score: "100%",
          type: "Project",
        },
        {
          name: "Calculus Basics",
          date: "2024-02-10",
          score: "94%",
          type: "Quiz",
        },
        {
          name: "Geometry Problems",
          date: "2024-02-05",
          score: "89%",
          type: "Assignment",
        },
        {
          name: "Quadratic Equations Test",
          date: "2024-02-01",
          score: "98%",
          type: "Test",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-green-100 text-green-800",
      scoreColor: "text-green-600",
      indicator: "excellent",
    },
    {
      id: 2,
      name: "Alex Chen",
      email: "alex.chen@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "52%",
      average: "58.7%",
      trend: "-8%",
      status: "At Risk",
      assessmentsTaken: 7,
      lastAssessment: "Linear Algebra Quiz",
      enrollDate: "2024-01-15",
      assessmentHistory: [
        {
          name: "Linear Algebra Quiz",
          date: "2024-03-01",
          score: "52%",
          type: "Quiz",
        },
        {
          name: "Functions and Graphs",
          date: "2024-02-25",
          score: "48%",
          type: "Assignment",
        },
        {
          name: "Trigonometry Test",
          date: "2024-02-20",
          score: "65%",
          type: "Test",
        },
        {
          name: "Statistics Project",
          date: "2024-02-15",
          score: "58%",
          type: "Project",
        },
        {
          name: "Calculus Basics",
          date: "2024-02-10",
          score: "44%",
          type: "Quiz",
        },
        {
          name: "Geometry Problems",
          date: "2024-02-05",
          score: "70%",
          type: "Assignment",
        },
        {
          name: "Algebra Fundamentals",
          date: "2024-02-01",
          score: "55%",
          type: "Test",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      trendUp: false,
      statusColor: "bg-red-100 text-red-800",
      scoreColor: "text-red-500",
      indicator: "at-risk",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "85%",
      average: "82.3%",
      trend: "+3%",
      status: "Good",
      assessmentsTaken: 8,
      lastAssessment: "Functions and Graphs",
      enrollDate: "2024-01-15",
      assessmentHistory: [
        {
          name: "Functions and Graphs",
          date: "2024-03-01",
          score: "85%",
          type: "Assignment",
        },
        {
          name: "Trigonometry Test",
          date: "2024-02-20",
          score: "78%",
          type: "Test",
        },
        {
          name: "Statistics Project",
          date: "2024-02-15",
          score: "88%",
          type: "Project",
        },
        {
          name: "Calculus Basics",
          date: "2024-02-10",
          score: "82%",
          type: "Quiz",
        },
        {
          name: "Geometry Problems",
          date: "2024-02-05",
          score: "79%",
          type: "Assignment",
        },
        {
          name: "Algebra Fundamentals",
          date: "2024-02-01",
          score: "86%",
          type: "Test",
        },
        {
          name: "Linear Equations Quiz",
          date: "2024-01-25",
          score: "80%",
          type: "Quiz",
        },
        {
          name: "Pre-Assessment",
          date: "2024-01-15",
          score: "75%",
          type: "Assessment",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-blue-100 text-blue-800",
      scoreColor: "text-blue-600",
      indicator: "average",
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      email: "michael.r@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "78%",
      average: "76.5%",
      trend: "+2%",
      status: "Good",
      assessmentsTaken: 6,
      lastAssessment: "Trigonometry Test",
      enrollDate: "2024-01-20",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-blue-100 text-blue-800",
      scoreColor: "text-blue-600",
      indicator: "average",
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "92%",
      average: "89.1%",
      trend: "+7%",
      status: "Excellent",
      assessmentsTaken: 8,
      lastAssessment: "Statistics Project",
      enrollDate: "2024-01-12",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-green-100 text-green-800",
      scoreColor: "text-green-600",
      indicator: "excellent",
    },
    {
      id: 6,
      name: "David Kim",
      email: "david.kim@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "45%",
      average: "51.2%",
      trend: "-12%",
      status: "At Risk",
      assessmentsTaken: 5,
      lastAssessment: "Algebra Fundamentals",
      enrollDate: "2024-01-18",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      trendUp: false,
      statusColor: "bg-red-100 text-red-800",
      scoreColor: "text-red-500",
      indicator: "at-risk",
    },
    // Mathematics 102 students
    {
      id: 7,
      name: "Jennifer Lee",
      email: "jennifer.lee@email.com",
      course: "Mathematics 102",
      courseId: "mathematics-102",
      latestScore: "88%",
      average: "86.4%",
      trend: "+4%",
      status: "Good",
      assessmentsTaken: 7,
      lastAssessment: "Advanced Calculus",
      enrollDate: "2024-02-01",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-blue-100 text-blue-800",
      scoreColor: "text-blue-600",
      indicator: "average",
    },
    {
      id: 8,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      course: "Mathematics 102",
      courseId: "mathematics-102",
      latestScore: "96%",
      average: "93.7%",
      trend: "+6%",
      status: "Excellent",
      assessmentsTaken: 6,
      lastAssessment: "Differential Equations",
      enrollDate: "2024-02-01",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-green-100 text-green-800",
      scoreColor: "text-green-600",
      indicator: "excellent",
    },
  ];

  // Filter students based on selected course and performance
  const filteredStudents = allStudents.filter((student) => {
    const courseMatch =
      selectedCourse === "all-courses" || student.courseId === selectedCourse;
    const performanceMatch =
      performanceFilter === "all-performance" ||
      (performanceFilter === "excellent" &&
        student.indicator === "excellent") ||
      (performanceFilter === "good" && student.indicator === "average") ||
      (performanceFilter === "at-risk" && student.indicator === "at-risk");
    return courseMatch && performanceMatch;
  });

  // Display limited students for preview
  const studentDetails = showAllStudents
    ? filteredStudents
    : filteredStudents.slice(0, 3);

  const getIndicatorColor = (indicator: string) => {
    switch (indicator) {
      case "excellent":
        return "border-l-4 border-green-500 bg-green-50";
      case "average":
        return "border-l-4 border-blue-500 bg-blue-50";
      case "at-risk":
        return "border-l-4 border-red-500 bg-red-50";
      default:
        return "border-l-4 border-gray-300";
    }
  };

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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Course Performance Overview
              </h2>
              <Select defaultValue="last-30">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7">Last 7 days</SelectItem>
                  <SelectItem value="last-30">Last 30 days</SelectItem>
                  <SelectItem value="last-90">Last 90 days</SelectItem>
                  <SelectItem value="semester">This semester</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Chart Container */}
            <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 relative">
              {/* Chart Grid Lines */}
              <div className="absolute inset-4">
                {/* Horizontal grid lines */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full border-t border-gray-200"
                    style={{ top: `${i * 25}%` }}
                  />
                ))}
                {/* Vertical grid lines */}
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-full border-l border-gray-200"
                    style={{ left: `${i * 16.66}%` }}
                  />
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-4 bottom-4 flex flex-col justify-between text-xs text-gray-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-4 right-4 flex justify-between text-xs text-gray-500">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
                <span>Current</span>
              </div>

              {/* Chart Lines */}
              <svg
                className="absolute inset-4 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Mathematics 101 - Red line (declining performance) */}
                <polyline
                  points="0,25 16.66,30 33.32,40 49.98,55 66.64,65 83.3,70 100,75"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="0.5"
                  className="opacity-80"
                />

                {/* Chemistry 201 - Blue line (stable performance) */}
                <polyline
                  points="0,20 16.66,18 33.32,22 49.98,20 66.64,25 83.3,23 100,20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  className="opacity-80"
                />

                {/* Physics 101 - Green line (improving performance) */}
                <polyline
                  points="0,60 16.66,55 33.32,48 49.98,40 66.64,35 83.3,25 100,15"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="0.5"
                  className="opacity-80"
                />

                {/* Data points */}
                {/* Mathematics 101 points */}
                <circle cx="0" cy="25" r="0.8" fill="#ef4444" />
                <circle cx="16.66" cy="30" r="0.8" fill="#ef4444" />
                <circle cx="33.32" cy="40" r="0.8" fill="#ef4444" />
                <circle cx="49.98" cy="55" r="0.8" fill="#ef4444" />
                <circle cx="66.64" cy="65" r="0.8" fill="#ef4444" />
                <circle cx="83.3" cy="70" r="0.8" fill="#ef4444" />
                <circle cx="100" cy="75" r="0.8" fill="#ef4444" />

                {/* Chemistry 201 points */}
                <circle cx="0" cy="20" r="0.8" fill="#3b82f6" />
                <circle cx="16.66" cy="18" r="0.8" fill="#3b82f6" />
                <circle cx="33.32" cy="22" r="0.8" fill="#3b82f6" />
                <circle cx="49.98" cy="20" r="0.8" fill="#3b82f6" />
                <circle cx="66.64" cy="25" r="0.8" fill="#3b82f6" />
                <circle cx="83.3" cy="23" r="0.8" fill="#3b82f6" />
                <circle cx="100" cy="20" r="0.8" fill="#3b82f6" />

                {/* Physics 101 points */}
                <circle cx="0" cy="60" r="0.8" fill="#10b981" />
                <circle cx="16.66" cy="55" r="0.8" fill="#10b981" />
                <circle cx="33.32" cy="48" r="0.8" fill="#10b981" />
                <circle cx="49.98" cy="40" r="0.8" fill="#10b981" />
                <circle cx="66.64" cy="35" r="0.8" fill="#10b981" />
                <circle cx="83.3" cy="25" r="0.8" fill="#10b981" />
                <circle cx="100" cy="15" r="0.8" fill="#10b981" />
              </svg>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-red-500"></div>
                    <span>Mathematics 101</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-blue-500"></div>
                    <span>Chemistry 201</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-green-500"></div>
                    <span>Physics 101</span>
                  </div>
                </div>
              </div>
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
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  Student Performance Details
                </h2>
                <Badge className="bg-gray-100 text-gray-700">
                  {filteredStudents.length} Students
                </Badge>
              </div>
              <div className="flex gap-4">
                <Select
                  value={selectedCourse}
                  onValueChange={setSelectedCourse}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-courses">All Courses</SelectItem>
                    {teacherCourses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name} ({course.students})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={performanceFilter}
                  onValueChange={setPerformanceFilter}
                >
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

            {/* Performance Legend */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Excellent (90%+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Good (70-89%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>At Risk (&lt;70%)</span>
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
                  {selectedCourse === "all-courses" && (
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                  )}
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assessments
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
                  <tr
                    key={student.id}
                    className={`hover:bg-gray-50 ${getIndicatorColor(student.indicator)}`}
                  >
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
                          {showAllStudents && (
                            <p className="text-gray-400 text-xs">
                              Enrolled:{" "}
                              {new Date(
                                student.enrollDate,
                              ).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    {selectedCourse === "all-courses" && (
                      <td className="py-4 px-6 text-sm text-gray-900">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 text-gray-400 mr-2" />
                          {student.course}
                        </div>
                      </td>
                    )}
                    <td className="py-4 px-6">
                      <button
                        onClick={() => {
                          setSelectedStudentAssessments(student);
                          setShowAssessmentModal(true);
                        }}
                        className="text-sm text-gray-900 hover:text-indigo-600 transition-colors"
                      >
                        <div className="flex items-center">
                          <Target className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="underline cursor-pointer">
                            {student.assessmentsTaken} taken
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">
                          Last: {student.lastAssessment}
                        </p>
                      </button>
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

          {/* Table Footer with View ALL button and summary */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500">
                  Showing {studentDetails.length} of {filteredStudents.length}{" "}
                  students
                  {selectedCourse !== "all-courses" && (
                    <span className="ml-2">
                      in{" "}
                      {
                        teacherCourses.find((c) => c.id === selectedCourse)
                          ?.name
                      }
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">
                      {
                        filteredStudents.filter(
                          (s) => s.indicator === "excellent",
                        ).length
                      }{" "}
                      Excellent
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">
                      {
                        filteredStudents.filter(
                          (s) => s.indicator === "average",
                        ).length
                      }{" "}
                      Good
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">
                      {
                        filteredStudents.filter(
                          (s) => s.indicator === "at-risk",
                        ).length
                      }{" "}
                      At Risk
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={() =>
                    (window.location.href = `/all-students?course=${selectedCourse}&filter=${performanceFilter}`)
                  }
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  View ALL ({filteredStudents.length} students)
                </Button>

                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export List
                </Button>
              </div>
            </div>
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
