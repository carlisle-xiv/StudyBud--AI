import React, { useState } from "react";
import PlatformAdminNavigation from "../components/PlatformAdminNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  MoreHorizontal,
  Users,
  BookOpen,
  GraduationCap,
  MapPin,
  Calendar,
  Activity,
  Edit3,
  Eye,
  Trash2,
  Filter,
  Download,
  Building2,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

const PlatformAdminSchools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock schools data
  const schools = [
    {
      id: 1,
      name: "Harvard University",
      location: "Cambridge, MA",
      status: "active",
      students: 2847,
      teachers: 189,
      courses: 432,
      joinDate: "2023-01-15",
      plan: "Enterprise",
      contact: "admin@harvard.edu",
      phone: "+1 (617) 495-1000",
      website: "harvard.edu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/harvard-logo",
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      status: "active",
      students: 2156,
      teachers: 167,
      courses: 389,
      joinDate: "2023-02-20",
      plan: "Enterprise",
      contact: "admin@stanford.edu",
      phone: "+1 (650) 723-2300",
      website: "stanford.edu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/stanford-logo",
    },
    {
      id: 3,
      name: "MIT",
      location: "Cambridge, MA",
      status: "active",
      students: 1934,
      teachers: 145,
      courses: 356,
      joinDate: "2023-01-10",
      plan: "Enterprise",
      contact: "admin@mit.edu",
      phone: "+1 (617) 253-1000",
      website: "mit.edu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/mit-logo",
    },
    {
      id: 4,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      status: "pending",
      students: 0,
      teachers: 0,
      courses: 0,
      joinDate: "2024-03-10",
      plan: "Professional",
      contact: "admin@berkeley.edu",
      phone: "+1 (510) 642-6000",
      website: "berkeley.edu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/berkeley-logo",
    },
    {
      id: 5,
      name: "Yale University",
      location: "New Haven, CT",
      status: "active",
      students: 1823,
      teachers: 134,
      courses: 298,
      joinDate: "2023-03-05",
      plan: "Enterprise",
      contact: "admin@yale.edu",
      phone: "+1 (203) 432-4771",
      website: "yale.edu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/yale-logo",
    },
    {
      id: 6,
      name: "Princeton University",
      location: "Princeton, NJ",
      status: "inactive",
      students: 1567,
      teachers: 123,
      courses: 267,
      joinDate: "2023-04-12",
      plan: "Professional",
      contact: "admin@princeton.edu",
      phone: "+1 (609) 258-3000",
      website: "princeton.edu",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/princeton-logo",
    },
  ];

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      school.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || school.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return "bg-purple-100 text-purple-800";
      case "Professional":
        return "bg-blue-100 text-blue-800";
      case "Basic":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
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
                School Management
              </h1>
              <p className="text-gray-600">
                Manage all educational institutions on the platform
              </p>
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
                Export
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Filters and Search */}
          <Card className="p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search schools, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filter by Status */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </Card>

          {/* Statistics Cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Schools
                  </p>
                  <p className="text-2xl font-bold text-gray-900">247</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-green-600">234</p>
                </div>
                <Activity className="w-8 h-8 text-green-600" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">8</p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Inactive</p>
                  <p className="text-2xl font-bold text-red-600">5</p>
                </div>
                <Globe className="w-8 h-8 text-red-600" />
              </div>
            </Card>
          </div>

          {/* Schools List */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      School
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Teachers
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Courses
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan
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
                  {filteredSchools.map((school) => (
                    <tr key={school.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                            {school.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {school.name}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {school.location}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(school.status)}`}
                        >
                          {school.status.charAt(0).toUpperCase() +
                            school.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Users className="w-4 h-4 mr-1 text-gray-400" />
                          {school.students.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <GraduationCap className="w-4 h-4 mr-1 text-gray-400" />
                          {school.teachers}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                          {school.courses}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPlanColor(school.plan)}`}
                        >
                          {school.plan}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(school.joinDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
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
                <span className="font-medium">247</span> schools
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

export default PlatformAdminSchools;
