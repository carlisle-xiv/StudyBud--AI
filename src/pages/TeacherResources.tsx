import React from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Plus,
  Upload,
  Search,
  Grid3X3,
  List,
  FolderPlus,
  FileText,
  Play,
  FileSpreadsheet,
  Image,
  Link,
  Clock,
  Share2,
  ChevronRight,
  MoreHorizontal,
  Archive,
  Server,
} from "lucide-react";

const TeacherResources: React.FC = () => {
  const statsCards = [
    {
      title: "Total Resources",
      value: "247",
      icon: FileText,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Storage Used",
      value: "2.4 GB",
      icon: Server,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Shared Items",
      value: "89",
      icon: Share2,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Recent Uploads",
      value: "12",
      icon: Clock,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const resources = [
    {
      type: "folder",
      name: "Mathematics 101",
      description: "23 files • 156 MB",
      lastUpdated: "Updated 2 days ago",
      icon: FolderPlus,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      type: "pdf",
      name: "Algebra Fundamentals",
      description: "PDF • 2.4 MB",
      course: "Mathematics 101",
      lastUpdated: "3 days ago",
      icon: FileText,
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      type: "video",
      name: "Quadratic Equations",
      description: "Video • 15:32 min",
      course: "Mathematics 101",
      lastUpdated: "1 week ago",
      icon: Play,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      type: "powerpoint",
      name: "Chemical Bonding",
      description: "PowerPoint • 8.7 MB",
      course: "Chemistry 201",
      lastUpdated: "5 days ago",
      icon: FileSpreadsheet,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      type: "link",
      name: "Khan Academy - Biology",
      description: "External Link",
      course: "Biology 101",
      lastUpdated: "2 weeks ago",
      icon: Link,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      type: "image",
      name: "Cell Structure Diagram",
      description: "PNG • 1.2 MB",
      course: "Biology 101",
      lastUpdated: "1 day ago",
      icon: Image,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      type: "excel",
      name: "Grade Tracker Template",
      description: "Excel • 245 KB",
      course: "All Courses",
      lastUpdated: "3 days ago",
      icon: FileSpreadsheet,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      type: "word",
      name: "Assignment Guidelines",
      description: "Word • 890 KB",
      course: "Chemistry 201",
      lastUpdated: "1 week ago",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  const recentActivity = [
    {
      action: "Uploaded",
      item: '"Cell Structure Diagram.png"',
      course: "Biology 101",
      time: "1 day ago",
      icon: Upload,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      buttonText: "View",
    },
    {
      action: "Shared",
      item: '"Algebra Fundamentals.pdf" with students',
      course: "Mathematics 101",
      time: "3 days ago",
      icon: Share2,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      buttonText: "View",
    },
    {
      action: "Created new folder",
      item: '"Chemistry 201"',
      course: null,
      time: "5 days ago",
      icon: FolderPlus,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      buttonText: "Open",
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
          <span className="text-gray-900 font-medium">Resources</span>
        </nav>

        {/* Page Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Course Resources
            </h1>
            <p className="text-gray-600">
              Manage and organize your teaching materials
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="text-gray-700 border-gray-300">
              <FolderPlus className="w-4 h-4 mr-2" />
              New Folder
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Upload Resource
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
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
              <Select defaultValue="all-types">
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="documents">Documents</SelectItem>
                  <SelectItem value="videos">Videos</SelectItem>
                  <SelectItem value="images">Images</SelectItem>
                  <SelectItem value="folders">Folders</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="p-2 border-gray-300"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="p-2 bg-indigo-100 text-indigo-600 border-indigo-200"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${resource.bgColor}`}>
                  <resource.icon className={`w-6 h-6 ${resource.iconColor}`} />
                </div>
                <Button variant="ghost" size="sm" className="p-1">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </Button>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base">
                {resource.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {resource.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  {resource.course ? resource.course : resource.lastUpdated}
                </span>
                {resource.course && (
                  <span className="ml-auto">{resource.lastUpdated}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                  <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {activity.action} {activity.item}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activity.course && `${activity.course} • `}
                    {activity.time}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {activity.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherResources;
