import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TeacherNavigation from "@/components/TeacherNavigation";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  AlertTriangle,
  TrendingDown,
  Clock,
  User,
  BookOpen,
  Filter,
  Search,
  Mail,
  MessageSquare,
  Eye,
  CheckCircle,
  X,
} from "lucide-react";

const TeacherAlerts = () => {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock alerts data
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "low_performance",
      title: "Low Performance Alert",
      student: "John Smith",
      course: "Mathematics 101",
      description: "Student has scored below 60% in last 3 assignments",
      severity: "high",
      date: "2024-01-20",
      status: "unread",
      details: {
        averageScore: 45,
        assignmentsMissed: 2,
        lastActivity: "3 days ago",
      },
    },
    {
      id: 2,
      type: "missed_deadline",
      title: "Missed Assignment Deadline",
      student: "Emily Johnson",
      course: "Chemistry 201",
      description: "Student has missed 2 consecutive assignment deadlines",
      severity: "medium",
      date: "2024-01-19",
      status: "unread",
      details: {
        missedAssignments: ["Lab Report 3", "Quiz 5"],
        lastSubmission: "1 week ago",
      },
    },
    {
      id: 3,
      type: "excellent_performance",
      title: "Excellent Performance",
      student: "Michael Chen",
      course: "Physics 301",
      description:
        "Student has consistently scored above 95% in all assessments",
      severity: "positive",
      date: "2024-01-18",
      status: "read",
      details: {
        averageScore: 96,
        streak: "8 assignments",
        improvement: "+15%",
      },
    },
    {
      id: 4,
      type: "attendance_concern",
      title: "Low Attendance Rate",
      student: "Sarah Wilson",
      course: "Biology 101",
      description: "Student attendance has dropped to 40% this month",
      severity: "high",
      date: "2024-01-17",
      status: "acknowledged",
      details: {
        attendanceRate: 40,
        classesAttended: 4,
        totalClasses: 10,
      },
    },
    {
      id: 5,
      type: "engagement_drop",
      title: "Engagement Decline",
      student: "David Brown",
      course: "Computer Science 202",
      description:
        "Student participation in discussions has decreased significantly",
      severity: "medium",
      date: "2024-01-16",
      status: "unread",
      details: {
        forumPosts: 2,
        previousAverage: 12,
        engagementScore: 25,
      },
    },
    {
      id: 6,
      type: "improvement_needed",
      title: "Needs Additional Support",
      student: "Lisa Anderson",
      course: "Mathematics 101",
      description:
        "Student is struggling with advanced concepts, may need tutoring",
      severity: "medium",
      date: "2024-01-15",
      status: "read",
      details: {
        strugglingTopics: ["Calculus", "Linear Algebra"],
        recommendedAction: "Tutoring session",
      },
    },
  ]);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">High Priority</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case "positive":
        return <Badge className="bg-green-100 text-green-800">Positive</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Low</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "unread":
        return <Badge className="bg-blue-100 text-blue-800">New</Badge>;
      case "read":
        return <Badge className="bg-gray-100 text-gray-800">Read</Badge>;
      case "acknowledged":
        return (
          <Badge className="bg-green-100 text-green-800">Acknowledged</Badge>
        );
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "low_performance":
        return <TrendingDown className="w-5 h-5 text-red-600" />;
      case "missed_deadline":
        return <Clock className="w-5 h-5 text-orange-600" />;
      case "excellent_performance":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "attendance_concern":
        return <User className="w-5 h-5 text-red-600" />;
      case "engagement_drop":
        return <MessageSquare className="w-5 h-5 text-yellow-600" />;
      case "improvement_needed":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-600" />;
    }
  };

  const markAsRead = (alertId: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId ? { ...alert, status: "read" } : alert,
      ),
    );
  };

  const markAsAcknowledged = (alertId: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === alertId ? { ...alert, status: "acknowledged" } : alert,
      ),
    );
  };

  const filteredAlerts = alerts.filter((alert) => {
    const matchesType = filterType === "all" || alert.type === filterType;
    const matchesStatus =
      filterStatus === "all" || alert.status === filterStatus;
    const matchesSearch =
      alert.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const unreadCount = alerts.filter(
    (alert) => alert.status === "unread",
  ).length;
  const highPriorityCount = alerts.filter(
    (alert) => alert.severity === "high",
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/teacher-dashboard")}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Performance Alerts
                </h1>
                <p className="text-gray-600 mt-2">
                  Monitor student performance and engagement across all courses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {alerts.length}
                </h3>
                <p className="text-gray-600">Total Alerts</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {unreadCount}
                </h3>
                <p className="text-gray-600">Unread</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {highPriorityCount}
                </h3>
                <p className="text-gray-600">High Priority</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {alerts.filter((a) => a.status === "acknowledged").length}
                </h3>
                <p className="text-gray-600">Acknowledged</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by student name, course, or alert type..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="low_performance">
                      Low Performance
                    </SelectItem>
                    <SelectItem value="missed_deadline">
                      Missed Deadlines
                    </SelectItem>
                    <SelectItem value="excellent_performance">
                      Excellent Performance
                    </SelectItem>
                    <SelectItem value="attendance_concern">
                      Attendance Issues
                    </SelectItem>
                    <SelectItem value="engagement_drop">
                      Low Engagement
                    </SelectItem>
                    <SelectItem value="improvement_needed">
                      Needs Support
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="acknowledged">Acknowledged</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <Card
              key={alert.id}
              className={`p-6 transition-all duration-200 ${
                alert.status === "unread"
                  ? "border-l-4 border-l-blue-500 bg-blue-50/30"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {alert.title}
                      </h3>
                      {getSeverityBadge(alert.severity)}
                      {getStatusBadge(alert.status)}
                    </div>
                    <p className="text-gray-600 mb-3">{alert.description}</p>

                    {/* Alert Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Student</p>
                          <p className="text-sm font-medium">{alert.student}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Course</p>
                          <p className="text-sm font-medium">{alert.course}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="text-sm font-medium">{alert.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Details:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        {Object.entries(alert.details).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="ml-1 font-medium text-gray-900">
                              {Array.isArray(value) ? value.join(", ") : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Student
                  </Button>
                  {alert.status === "unread" && (
                    <Button
                      size="sm"
                      onClick={() => markAsRead(alert.id)}
                      className="bg-blue-600 hover:bg-blue-700 flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Mark Read
                    </Button>
                  )}
                  {alert.status === "read" && (
                    <Button
                      size="sm"
                      onClick={() => markAsAcknowledged(alert.id)}
                      className="bg-green-600 hover:bg-green-700 flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Acknowledge
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}

          {filteredAlerts.length === 0 && (
            <Card className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No alerts found
              </h3>
              <p className="text-gray-600">
                {searchTerm || filterType !== "all" || filterStatus !== "all"
                  ? "Try adjusting your search or filters"
                  : "No performance alerts at this time"}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherAlerts;
