import React, { useState } from "react";
import PlatformAdminNavigation from "@/components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  UserPlus,
  Users,
  GraduationCap,
  Shield,
  Building2,
  Mail,
  Phone,
  Calendar,
  Activity,
  MoreHorizontal,
  Edit3,
  Eye,
  Ban,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

const PlatformAdminUsers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock users data
  const users = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      email: "sarah.chen@harvard.edu",
      role: "admin",
      status: "active",
      school: "Harvard University",
      joinDate: "2023-01-15",
      lastActive: "2024-03-15 14:30",
      students: 2847,
      courses: 0,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/avatar1",
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      email: "m.rodriguez@stanford.edu",
      role: "teacher",
      status: "active",
      school: "Stanford University",
      joinDate: "2023-02-20",
      lastActive: "2024-03-15 12:15",
      students: 156,
      courses: 8,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/avatar2",
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily.j@mit.edu",
      role: "student",
      status: "active",
      school: "MIT",
      joinDate: "2023-09-01",
      lastActive: "2024-03-15 16:45",
      students: 0,
      courses: 12,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/avatar3",
    },
    {
      id: 4,
      name: "Dr. Robert Kim",
      email: "robert.kim@yale.edu",
      role: "admin",
      status: "pending",
      school: "Yale University",
      joinDate: "2024-03-10",
      lastActive: "Never",
      students: 0,
      courses: 0,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/avatar4",
    },
    {
      id: 5,
      name: "Alex Thompson",
      email: "alex.t@princeton.edu",
      role: "teacher",
      status: "suspended",
      school: "Princeton University",
      joinDate: "2023-08-15",
      lastActive: "2024-02-28 10:20",
      students: 89,
      courses: 5,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/avatar5",
    },
    {
      id: 6,
      name: "Maria Garcia",
      email: "maria.garcia@berkeley.edu",
      role: "student",
      status: "active",
      school: "UC Berkeley",
      joinDate: "2023-09-15",
      lastActive: "2024-03-15 09:30",
      students: 0,
      courses: 6,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/avatar6",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.school.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "suspended":
        return <Ban className="w-4 h-4" />;
      case "inactive":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800";
      case "teacher":
        return "bg-blue-100 text-blue-800";
      case "student":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="w-4 h-4" />;
      case "teacher":
        return <GraduationCap className="w-4 h-4" />;
      case "student":
        return <Users className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
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
                User Management
              </h1>
              <p className="text-gray-600">
                Manage all platform users across institutions
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <UserPlus className="w-4 h-4 mr-2" />
                Add User
              </Button>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Users
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* User Statistics */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Users
                  </p>
                  <p className="text-2xl font-bold text-gray-900">15,247</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Students</p>
                  <p className="text-2xl font-bold text-green-600">12,847</p>
                </div>
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Teachers</p>
                  <p className="text-2xl font-bold text-blue-600">2,156</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Admins</p>
                  <p className="text-2xl font-bold text-purple-600">244</p>
                </div>
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search users, emails, schools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filter by Role */}
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Roles</option>
                  <option value="admin">Admins</option>
                  <option value="teacher">Teachers</option>
                  <option value="student">Students</option>
                </select>

                {/* Filter by Status */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </Card>

          {/* Users Table */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      School
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span
                            className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}
                          >
                            {getRoleIcon(user.role)}
                            <span className="ml-1 capitalize">{user.role}</span>
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span
                            className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}
                          >
                            {getStatusIcon(user.status)}
                            <span className="ml-1 capitalize">
                              {user.status}
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Building2 className="w-4 h-4 mr-1 text-gray-400" />
                          {user.school}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {user.role === "admin" && (
                            <div>{user.students.toLocaleString()} students</div>
                          )}
                          {user.role === "teacher" && (
                            <div>
                              {user.students} students • {user.courses} courses
                            </div>
                          )}
                          {user.role === "student" && (
                            <div>{user.courses} courses enrolled</div>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">
                          Last: {user.lastActive}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.joinDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">6</span> of{" "}
                <span className="font-medium">15,247</span> users
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-purple-600 text-white"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default PlatformAdminUsers;
