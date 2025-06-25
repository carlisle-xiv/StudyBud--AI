import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Filter,
  RefreshCw,
  Download,
  Bell,
  Eye,
  MoreHorizontal,
  Users,
  UserCheck,
  AlertTriangle,
  UserX,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AdminNavigation from "@/components/AdminNavigation";

interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  avatar: string;
  courses: {
    count: number;
    subjects: string[];
  };
  performance: {
    gpa: number;
    avgScore: number;
  };
  lastActivity: {
    time: string;
    activity: string;
  };
  status: "active" | "flagged" | "suspended";
}

const AdminStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const students: Student[] = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.johnson@stanford.edu",
      studentId: "STU-2024-001",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      courses: {
        count: 5,
        subjects: ["Math", "Physics", "CS"],
      },
      performance: {
        gpa: 3.8,
        avgScore: 87,
      },
      lastActivity: {
        time: "2 hours ago",
        activity: "Calculus exam",
      },
      status: "active",
    },
    {
      id: "2",
      name: "Sarah Williams",
      email: "sarah.w@stanford.edu",
      studentId: "STU-2024-002",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=400&fit=crop&crop=face",
      courses: {
        count: 3,
        subjects: ["Biology", "Chemistry"],
      },
      performance: {
        gpa: 4.0,
        avgScore: 94,
      },
      lastActivity: {
        time: "1 day ago",
        activity: "Chemistry quiz",
      },
      status: "active",
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "m.chen@stanford.edu",
      studentId: "STU-2024-003",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      courses: {
        count: 4,
        subjects: ["CS", "Math", "Physics"],
      },
      performance: {
        gpa: 3.2,
        avgScore: 78,
      },
      lastActivity: {
        time: "5 days ago",
        activity: "Programming assignment",
      },
      status: "flagged",
    },
    {
      id: "4",
      name: "Emma Davis",
      email: "emma.davis@stanford.edu",
      studentId: "STU-2024-004",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      courses: {
        count: 6,
        subjects: ["English", "History", "Art"],
      },
      performance: {
        gpa: 3.9,
        avgScore: 91,
      },
      lastActivity: {
        time: "3 hours ago",
        activity: "Literature essay",
      },
      status: "active",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Active",
      },
      flagged: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Flagged",
      },
      suspended: {
        bg: "bg-red-100",
        text: "text-red-800",
        label: "Suspended",
      },
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

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Student Account Monitoring
              </h1>
              <p className="text-gray-600 mt-1">
                Read-only directory with performance summaries and activity
                history
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download size={16} />
                Export Data
              </button>
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
                    placeholder="Search students by name, email, or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-[447px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <select
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-3 pr-8 w-[195px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>All Courses</option>
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

                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-3 pr-8 w-[140px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Flagged</option>
                    <option>Suspended</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">
                  <Filter size={16} />
                  More Filters
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <RefreshCw size={16} />
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Students
                  </p>
                  <p className="text-3xl font-bold text-gray-900">2,847</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Today
                  </p>
                  <p className="text-3xl font-bold text-green-600">1,264</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <UserCheck size={24} className="text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Flagged Accounts
                  </p>
                  <p className="text-3xl font-bold text-yellow-600">23</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle size={24} className="text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Suspended</p>
                  <p className="text-3xl font-bold text-red-600">8</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <UserX size={24} className="text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Student Directory */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Student Directory
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    Showing 1-20 of 2,847
                  </span>
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <ChevronLeft size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Courses
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {student.email}
                            </div>
                            <div className="text-xs text-gray-400">
                              ID: {student.studentId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">
                            {student.courses.count} courses
                          </div>
                          <div className="text-sm text-gray-600">
                            {student.courses.subjects.join(", ")}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">
                            GPA: {student.performance.gpa}
                          </div>
                          <div className="text-sm text-gray-600">
                            {student.performance.avgScore}% avg score
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">
                            {student.lastActivity.time}
                          </div>
                          <div className="text-sm text-gray-600">
                            {student.lastActivity.activity}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(student.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 text-gray-400 hover:bg-gray-50 rounded">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStudents;
