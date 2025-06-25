import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Check,
  X,
  Download,
  Eye,
  MessageSquare,
  Pause,
  BarChart3,
  AlertTriangle,
  BookOpen,
  FileText,
  Calendar,
  Users,
  Bell,
} from "lucide-react";
import AdminNavigation from "@/components/AdminNavigation";

interface Course {
  id: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected" | "flagged";
  subject: string;
  instructor: {
    name: string;
    department: string;
    avatar: string;
  };
  modules: number;
  resources: number;
  students?: number;
  submittedDate: string;
  flagReason?: string;
  rejectionReason?: string;
}

const AdminCourses: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");

  const courses: Course[] = [
    {
      id: "1",
      title: "Advanced Calculus III",
      description:
        "Comprehensive course covering multivariable calculus, vector fields, and differential equations.",
      status: "pending",
      subject: "Mathematics",
      instructor: {
        name: "Dr. James Wilson",
        department: "Mathematics Department",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      },
      modules: 12,
      resources: 45,
      submittedDate: "2 days ago",
    },
    {
      id: "2",
      title: "Quantum Mechanics Basics",
      description:
        "Introduction to quantum theory and its applications in modern physics.",
      status: "flagged",
      subject: "Physics",
      instructor: {
        name: "Dr. Sarah Martinez",
        department: "Physics Department",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face",
      },
      modules: 8,
      resources: 23,
      submittedDate: "1 day ago",
      flagReason: "Contains potentially inappropriate content in module 3",
    },
    {
      id: "3",
      title: "Machine Learning Fundamentals",
      description:
        "Comprehensive introduction to ML algorithms, neural networks, and practical applications.",
      status: "approved",
      subject: "Computer Science",
      instructor: {
        name: "Dr. Alex Chen",
        department: "CS Department",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
      modules: 15,
      resources: 67,
      students: 234,
      submittedDate: "5 days ago",
    },
    {
      id: "4",
      title: "Organic Chemistry Lab",
      description:
        "Hands-on laboratory course focusing on organic synthesis and analysis techniques.",
      status: "pending",
      subject: "Chemistry",
      instructor: {
        name: "Dr. Emily Roberts",
        department: "Chemistry Department",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      },
      modules: 10,
      resources: 38,
      submittedDate: "3 days ago",
    },
    {
      id: "5",
      title: "Cell Biology Basics",
      description:
        "Introduction to cellular structures and basic biological processes.",
      status: "rejected",
      subject: "Biology",
      instructor: {
        name: "Dr. Michael Brown",
        department: "Biology Department",
        avatar:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face",
      },
      modules: 6,
      resources: 18,
      submittedDate: "1 week ago",
      rejectionReason: "Insufficient content depth and missing lab components",
    },
  ];

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId],
    );
  };

  const handleSelectAll = () => {
    if (selectedCourses.length === courses.length) {
      setSelectedCourses([]);
    } else {
      setSelectedCourses(courses.map((course) => course.id));
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Pending",
      },
      approved: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Approved",
      },
      rejected: { bg: "bg-red-100", text: "text-red-800", label: "Rejected" },
      flagged: { bg: "bg-red-100", text: "text-red-800", label: "Flagged" },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      >
        {config.label}
      </span>
    );
  };

  const getActionButtons = (course: Course) => {
    switch (course.status) {
      case "pending":
        return (
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
              <Check size={14} />
              Approve
            </button>
            <button className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
              <X size={14} />
              Reject
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Eye size={16} className="text-gray-600" />
            </button>
          </div>
        );
      case "flagged":
        return (
          <div className="flex gap-2">
            <button className="px-4 py-4 bg-yellow-600 text-white rounded-lg text-sm hover:bg-yellow-700">
              Request
              <br />
              Changes
            </button>
            <button className="flex items-center gap-1 px-4 py-4 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
              <X size={14} />
              Reject
            </button>
            <button className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Eye size={16} className="text-gray-600" />
            </button>
          </div>
        );
      case "approved":
        return (
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200">
              <Pause size={14} />
              Suspend
            </button>
            <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              <BarChart3 size={14} />
              Analytics
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Eye size={16} className="text-gray-600" />
            </button>
          </div>
        );
      case "rejected":
        return (
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200">
              View Details
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Reactivate
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <MessageSquare size={16} className="text-gray-600" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const getBorderStyle = (status: string) => {
    switch (status) {
      case "flagged":
        return "border-red-200";
      case "approved":
        return "border-green-200";
      default:
        return "border-gray-200";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Course Review & Approval
              </h1>
              <p className="text-gray-600 mt-1">
                Review and manage all course submissions
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="Admin"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-72 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>All Statuses</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                    <option>Flagged</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>

                <div className="relative">
                  <select
                    value={subjectFilter}
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2.5 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>All Subjects</option>
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Computer Science</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Check size={14} />
                  Bulk Approve
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  <X size={14} />
                  Bulk Reject
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                  <Download size={14} />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-white rounded-xl border-2 p-6 shadow-sm transition-all hover:shadow-md ${getBorderStyle(course.status)} ${
                  course.status === "rejected" ? "opacity-75" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Header with checkbox, badges */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(course.status)}
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          {course.subject}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course.id)}
                      onChange={() => handleSelectCourse(course.id)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>

                  {/* Flag/Rejection Notice */}
                  {course.flagReason && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex">
                        <AlertTriangle
                          size={14}
                          className="text-red-600 mt-0.5 mr-2 flex-shrink-0"
                        />
                        <p className="text-sm text-red-800">
                          {course.flagReason}
                        </p>
                      </div>
                    </div>
                  )}

                  {course.rejectionReason && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="flex">
                        <AlertTriangle
                          size={14}
                          className="text-gray-600 mt-0.5 mr-2 flex-shrink-0"
                        />
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Rejected:</span>{" "}
                          {course.rejectionReason}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Instructor Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {course.instructor.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {course.instructor.department}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{course.modules} Modules</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText size={14} />
                        <span>{course.resources} Resources</span>
                      </div>
                      {course.students && (
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{course.students} Students</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{course.submittedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2">{getActionButtons(course)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Selection Summary */}
          {selectedCourses.length > 0 && (
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  {selectedCourses.length} selected
                </span>
                <button
                  onClick={() => setSelectedCourses([])}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear selection
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
