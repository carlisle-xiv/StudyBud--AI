import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  X,
  User,
  Mail,
  Calendar,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Award,
  Target,
  Activity,
  MessageSquare,
  Phone,
  MapPin,
  GraduationCap,
  FileText,
} from "lucide-react";

interface StudentViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  course: string;
  alertType?: string;
}

const StudentViewModal: React.FC<StudentViewModalProps> = ({
  isOpen,
  onClose,
  studentName,
  course,
  alertType,
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30days");

  // Mock comprehensive student data
  const studentData = {
    id: "STU-2024-001",
    name: studentName,
    email: "john.smith@university.edu",
    phone: "+1 (555) 123-4567",
    address: "123 University Ave, Campus City, ST 12345",
    enrollmentDate: "2023-09-01",
    studentId: "202400123",
    major: "Computer Science",
    year: "Sophomore",
    gpa: 3.2,
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",

    // Performance metrics
    performance: {
      overall: 72,
      trend: "declining",
      lastMonth: 65,
      previousMonth: 78,
      assignments: {
        completed: 8,
        total: 12,
        average: 75,
      },
      exams: {
        taken: 2,
        total: 3,
        average: 68,
      },
      participation: 45,
      attendance: 85,
    },

    // Course enrollments
    courses: [
      {
        code: "CS-201",
        name: "Data Structures",
        grade: "B-",
        progress: 75,
        status: "active",
        credits: 3,
      },
      {
        code: "MATH-301",
        name: "Discrete Mathematics",
        grade: "C+",
        progress: 80,
        status: "active",
        credits: 4,
      },
      {
        code: "CS-150",
        name: "Programming Fundamentals",
        grade: "A-",
        progress: 100,
        status: "completed",
        credits: 3,
      },
    ],

    // Recent activity
    recentActivity: [
      {
        type: "assignment_submitted",
        title: "Data Structures Assignment 3",
        course: "CS-201",
        date: "2024-01-20",
        score: 82,
        status: "graded",
      },
      {
        type: "exam_taken",
        title: "Midterm Exam",
        course: "MATH-301",
        date: "2024-01-18",
        score: 65,
        status: "graded",
      },
      {
        type: "assignment_late",
        title: "Algorithm Analysis Report",
        course: "CS-201",
        date: "2024-01-15",
        score: null,
        status: "late",
      },
      {
        type: "forum_post",
        title: "Discussion: Binary Trees",
        course: "CS-201",
        date: "2024-01-12",
        score: null,
        status: "completed",
      },
    ],

    // Attendance data
    attendance: [
      { date: "2024-01-20", course: "CS-201", status: "present" },
      { date: "2024-01-20", course: "MATH-301", status: "absent" },
      { date: "2024-01-18", course: "CS-201", status: "present" },
      { date: "2024-01-18", course: "MATH-301", status: "present" },
      { date: "2024-01-15", course: "CS-201", status: "late" },
    ],

    // Upcoming deadlines
    upcomingDeadlines: [
      {
        title: "Final Project Proposal",
        course: "CS-201",
        dueDate: "2024-01-25",
        type: "assignment",
        priority: "high",
      },
      {
        title: "Calculus Quiz 4",
        course: "MATH-301",
        dueDate: "2024-01-27",
        type: "quiz",
        priority: "medium",
      },
    ],
  };

  const getPerformanceTrend = (trend: string) => {
    switch (trend) {
      case "improving":
        return {
          icon: <TrendingUp className="w-4 h-4 text-green-600" />,
          color: "text-green-600",
          bg: "bg-green-100",
        };
      case "declining":
        return {
          icon: <TrendingDown className="w-4 h-4 text-red-600" />,
          color: "text-red-600",
          bg: "bg-red-100",
        };
      default:
        return {
          icon: <Activity className="w-4 h-4 text-gray-600" />,
          color: "text-gray-600",
          bg: "bg-gray-100",
        };
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "assignment_submitted":
        return <FileText className="w-4 h-4 text-blue-600" />;
      case "exam_taken":
        return <Award className="w-4 h-4 text-purple-600" />;
      case "assignment_late":
        return <Clock className="w-4 h-4 text-red-600" />;
      case "forum_post":
        return <MessageSquare className="w-4 h-4 text-green-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getAttendanceIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "absent":
        return <XCircle className="w-4 h-4 text-red-600" />;
      case "late":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-600" />;
    }
  };

  const performanceTrend = getPerformanceTrend(studentData.performance.trend);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-4">
            <img
              src={studentData.profileImage}
              alt={studentData.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {studentData.name}
              </h3>
              <p className="text-gray-600">
                {studentData.major} • {studentData.year}
              </p>
              <p className="text-sm text-gray-500">
                ID: {studentData.studentId}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Select
              value={selectedTimeRange}
              onValueChange={setSelectedTimeRange}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 Days</SelectItem>
                <SelectItem value="30days">30 Days</SelectItem>
                <SelectItem value="semester">Semester</SelectItem>
                <SelectItem value="year">Academic Year</SelectItem>
              </SelectContent>
            </Select>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Student Info & Performance */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Information */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Contact Information
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{studentData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{studentData.phone}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-700">{studentData.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">
                      Enrolled: {studentData.enrollmentDate}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Performance Summary */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Performance Summary
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Overall Performance</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">
                        {studentData.performance.overall}%
                      </span>
                      <div
                        className={`p-1 rounded-full ${performanceTrend.bg}`}
                      >
                        {performanceTrend.icon}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current GPA</span>
                      <span className="font-medium">{studentData.gpa}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Attendance</span>
                      <span className="font-medium">
                        {studentData.performance.attendance}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Participation</span>
                      <span className="font-medium">
                        {studentData.performance.participation}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <p className="text-blue-900 font-semibold">
                        {studentData.performance.assignments.completed}/
                        {studentData.performance.assignments.total}
                      </p>
                      <p className="text-blue-700 text-xs">Assignments</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <p className="text-purple-900 font-semibold">
                        {studentData.performance.exams.taken}/
                        {studentData.performance.exams.total}
                      </p>
                      <p className="text-purple-700 text-xs">Exams</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Upcoming Deadlines */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Upcoming Deadlines
                </h4>
                <div className="space-y-3">
                  {studentData.upcomingDeadlines.map((deadline, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {deadline.title}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {deadline.course}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {deadline.dueDate}
                        </p>
                        <Badge
                          className={`text-xs ${
                            deadline.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {deadline.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Courses & Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Enrollments */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Course Enrollments
                </h4>
                <div className="space-y-3">
                  {studentData.courses.map((course, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h5 className="font-medium text-gray-900">
                            {course.name}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {course.code} • {course.credits} Credits
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge
                            className={`${
                              course.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {course.status}
                          </Badge>
                          <span className="font-semibold text-gray-900">
                            {course.grade}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {course.progress}% Complete
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Activity */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Activity className="w-4 h-4 mr-2" />
                  Recent Activity
                </h4>
                <div className="space-y-3">
                  {studentData.recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium text-gray-900">
                            {activity.title}
                          </h5>
                          <span className="text-xs text-gray-500">
                            {activity.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {activity.course}
                        </p>
                        {activity.score && (
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm font-medium">
                              Score: {activity.score}%
                            </span>
                            <Badge
                              className={`text-xs ${
                                activity.score >= 80
                                  ? "bg-green-100 text-green-800"
                                  : activity.score >= 70
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {activity.status}
                            </Badge>
                          </div>
                        )}
                        {activity.status === "late" && (
                          <Badge className="bg-red-100 text-red-800 text-xs mt-1">
                            {activity.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Attendance */}
              <Card className="p-4">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Recent Attendance
                </h4>
                <div className="space-y-2">
                  {studentData.attendance.map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <div className="flex items-center space-x-3">
                        {getAttendanceIcon(record.status)}
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {record.course}
                          </p>
                          <p className="text-gray-600 text-xs">{record.date}</p>
                        </div>
                      </div>
                      <Badge
                        className={`text-xs ${
                          record.status === "present"
                            ? "bg-green-100 text-green-800"
                            : record.status === "absent"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {record.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudentViewModal;
