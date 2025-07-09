import React, { useState } from "react";
import AdminNavigation from "@/components/AdminNavigation";
import {
  Search,
  ChevronDown,
  Check,
  X,
  Eye,
  Pause,
  Edit,
  RotateCcw,
  MessageCircle,
  Play,
  Bell,
} from "lucide-react";

const AdminTeachers: React.FC = () => {
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const teachers = [
    {
      id: "1",
      name: "Dr. Michael Rodriguez",
      email: "michael.rodriguez@email.com",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d327f05a9c63479743ede76e15c1c585583e1a67",
      subject: "Physics",
      institution: "Stanford University",
      status: "Pending",
      registered: "2 hours ago",
    },
    {
      id: "2",
      name: "Prof. Sarah Johnson",
      email: "sarah.johnson@email.com",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2ef8dba9c12ae53994f4c74f8b7a50f115eba7",
      subject: "Mathematics",
      institution: "MIT",
      status: "Approved",
      registered: "1 day ago",
    },
    {
      id: "3",
      name: "Dr. James Chen",
      email: "james.chen@email.com",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e80c1a2c01982806eab9b9442c4fd983d764b707",
      subject: "Computer Science",
      institution: "UC Berkeley",
      status: "Pending",
      registered: "4 hours ago",
    },
    {
      id: "4",
      name: "Dr. Emily Davis",
      email: "emily.davis@email.com",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0784dcba84e96c41876df654db20310858079a66",
      subject: "Chemistry",
      institution: "Harvard University",
      status: "Rejected",
      registered: "2 days ago",
    },
    {
      id: "5",
      name: "Prof. Robert Wilson",
      email: "robert.wilson@email.com",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6c5de1c28bc80a3d6d7579ec3dc1ca793e751647",
      subject: "Biology",
      institution: "Yale University",
      status: "Suspended",
      registered: "1 week ago",
    },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTeachers([]);
    } else {
      setSelectedTeachers(teachers.map((t) => t.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectTeacher = (teacherId: string) => {
    if (selectedTeachers.includes(teacherId)) {
      setSelectedTeachers(selectedTeachers.filter((id) => id !== teacherId));
    } else {
      setSelectedTeachers([...selectedTeachers, teacherId]);
    }
  };

  const clearSelection = () => {
    setSelectedTeachers([]);
    setSelectAll(false);
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      Pending: "bg-yellow-100 text-yellow-800",
      Approved: "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
      Suspended: "bg-gray-100 text-gray-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}
      >
        {status}
      </span>
    );
  };

  const getActionButtons = (teacher: any) => {
    const baseButtons = [
      <button
        key="view"
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
      >
        <Eye className="w-4 h-4" />
      </button>,
    ];

    if (teacher.status === "Pending") {
      return [
        ...baseButtons,
        <button
          key="approve"
          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
        >
          <Check className="w-4 h-4" />
        </button>,
        <button
          key="reject"
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>,
      ];
    } else if (teacher.status === "Approved") {
      return [
        ...baseButtons,
        <button
          key="pause"
          className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg"
        >
          <Pause className="w-4 h-4" />
        </button>,
        <button
          key="edit"
          className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <Edit className="w-4 h-4" />
        </button>,
      ];
    } else if (teacher.status === "Rejected") {
      return [
        ...baseButtons,
        <button
          key="reactivate"
          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
        >
          <RotateCcw className="w-4 h-4" />
        </button>,
        <button
          key="message"
          className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <MessageCircle className="w-4 h-4" />
        </button>,
      ];
    } else if (teacher.status === "Suspended") {
      return [
        ...baseButtons,
        <button
          key="reactivate"
          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
        >
          <Play className="w-4 h-4" />
        </button>,
        <button
          key="message"
          className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
        >
          <MessageCircle className="w-4 h-4" />
        </button>,
      ];
    }

    return baseButtons;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNavigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm h-24">
          <div className="h-full px-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Teacher Management
              </h1>
              <p className="text-gray-600">
                Review and manage registered teachers
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <Bell className="w-5 h-5" />
                </button>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </div>

              {/* Profile */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/453970e188a07f05167201dfd6989f2ae4a5b20f"
                alt="Dr. Sarah Chen"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search teachers..."
                    className="pl-10 pr-4 py-3 w-96 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 min-w-36 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Statuses</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                    <option>Suspended</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Subject Filter */}
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 min-w-40 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Subjects</option>
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Computer Science</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Bulk Actions */}
              <div className="flex items-center gap-3">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium ${selectedTeachers.length > 0
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-400 opacity-50 cursor-not-allowed"
                    }`}
                  disabled={selectedTeachers.length === 0}
                >
                  <Check className="w-4 h-4" />
                  Bulk Approve
                </button>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium ${selectedTeachers.length > 0
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-400 opacity-50 cursor-not-allowed"
                    }`}
                  disabled={selectedTeachers.length === 0}
                >
                  <X className="w-4 h-4" />
                  Bulk Reject
                </button>
              </div>
            </div>
          </div>

          {/* Teachers Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            {/* Table Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Registered Teachers (247)
                </h3>
                {selectedTeachers.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{selectedTeachers.length} selected</span>
                    <button
                      onClick={clearSelection}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Clear selection
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 p-4">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </th>
                    <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Teacher
                    </th>
                    <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject Area
                    </th>
                    <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Institution
                    </th>
                    <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registered
                    </th>
                    <th className="text-left p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teachers.map((teacher) => (
                    <tr key={teacher.id} className="hover:bg-gray-50">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedTeachers.includes(teacher.id)}
                          onChange={() => handleSelectTeacher(teacher.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={teacher.avatar}
                            alt={teacher.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {teacher.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {teacher.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-900">
                        {teacher.subject}
                      </td>
                      <td className="p-4 text-sm text-gray-900">
                        {teacher.institution}
                      </td>
                      <td className="p-4">{getStatusBadge(teacher.status)}</td>
                      <td className="p-4 text-sm text-gray-500">
                        {teacher.registered}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          {getActionButtons(teacher)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1 to 5 of 247 teachers
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  disabled
                >
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                  1
                </button>
                <button className="px-3 py-1 text-gray-600 hover:text-gray-900 rounded text-sm">
                  2
                </button>
                <button className="px-3 py-1 text-gray-600 hover:text-gray-900 rounded text-sm">
                  3
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminTeachers;
