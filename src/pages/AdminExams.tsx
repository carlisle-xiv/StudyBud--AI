import React from "react";
import { AdminNavigation } from "@/components/AdminNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  Bell,
  Filter,
  MoreVertical,
  ArrowUpDown,
  CheckSquare,
  Eye,
  Flag,
  EyeOff,
  Users,
  HelpCircle,
  Clock,
  FileText,
  AlertTriangle,
  Bot,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminExams = () => {
  const statsCards = [
    {
      title: "Published Exams",
      value: "284",
      subtitle: "↑ 12 this week",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Flagged Exams",
      value: "7",
      subtitle: "Needs review",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "AI Generated",
      value: "156",
      subtitle: "55% of total",
      icon: Bot,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Avg Completion",
      value: "87%",
      subtitle: "↑ 3% vs last month",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const exams = [
    {
      id: 1,
      title: "Advanced Calculus Midterm",
      teacher: "Dr. Michael Smith",
      department: "Mathematics Department",
      students: 127,
      questions: 25,
      publishedDate: "3 days ago",
      status: "flagged",
      tags: ["Flagged", "AI Generated"],
      badges: [
        { text: "Flagged", color: "bg-red-100 text-red-600" },
        { text: "AI Generated", color: "bg-indigo-100 text-indigo-600" },
      ],
    },
    {
      id: 2,
      title: "Organic Chemistry Quiz",
      teacher: "Prof. Sarah Johnson",
      department: "Chemistry Department",
      students: 89,
      questions: 15,
      publishedDate: "1 week ago",
      status: "active",
      badges: [{ text: "Active", color: "bg-green-100 text-green-600" }],
    },
    {
      id: 3,
      title: "Physics Final Exam",
      teacher: "Dr. Robert Chen",
      department: "Physics Department",
      students: 203,
      questions: 40,
      publishedDate: "2 days ago",
      status: "active",
      badges: [
        { text: "Active", color: "bg-green-100 text-green-600" },
        { text: "AI Generated", color: "bg-indigo-100 text-indigo-600" },
      ],
    },
  ];

  const activities = [
    {
      id: 1,
      type: "flagged",
      title: "Exam flagged",
      description: "Advanced Calculus Midterm flagged for unusual AI patterns",
      time: "2 hours ago",
      color: "bg-red-500",
    },
    {
      id: 2,
      type: "published",
      title: "Exam published",
      description: "Physics Final Exam by Dr. Chen",
      time: "2 days ago",
      color: "bg-green-500",
    },
    {
      id: 3,
      type: "submission",
      title: "Mass submission",
      description: "127 students completed Calculus exam",
      time: "3 days ago",
      color: "bg-blue-500",
    },
    {
      id: 4,
      type: "modified",
      title: "Exam modified",
      description: "Chemistry Quiz updated by Prof. Johnson",
      time: "4 days ago",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      type: "generation",
      title: "AI generation",
      description: "15 questions auto-generated for Biology quiz",
      time: "5 days ago",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNavigation />

      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">
                Exam Oversight & Analytics
              </h1>
              <p className="text-gray-600 mt-1">
                Monitor published exams and review activity logs
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>

              <div className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    5
                  </span>
                </Button>
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </header>

        {/* Search and Filters */}
        <div className="bg-white border-b border-gray-200 px-6 py-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <Input placeholder="Search exams..." className="w-full" />
            </div>

            <Select defaultValue="all-courses">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Courses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-courses">All Courses</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-teachers">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Teachers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-teachers">All Teachers</SelectItem>
                <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                <SelectItem value="prof-johnson">Prof. Johnson</SelectItem>
                <SelectItem value="dr-chen">Dr. Chen</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="last-30-days">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Last 30 Days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Filter className="w-4 h-4 mr-2" />
              Apply
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-4 gap-6">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600">
                      {card.title}
                    </p>
                    <p className={`text-3xl font-bold mt-2 ${card.color}`}>
                      {card.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${card.bgColor}`}>
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-6 grid grid-cols-3 gap-6">
          {/* Published Exams List */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
            {/* List Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Published Exams
                </h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    <CheckSquare className="w-4 h-4 mr-2" />
                    Bulk Actions
                  </Button>
                </div>
              </div>
            </div>

            {/* Exams List */}
            <div className="divide-y divide-gray-200">
              {exams.map((exam) => (
                <div key={exam.id} className="px-6 py-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {exam.title}
                        </h3>
                        {exam.badges.map((badge, index) => (
                          <Badge
                            key={index}
                            className={`${badge.color} text-xs`}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        {exam.teacher} • {exam.department}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{exam.students} students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <HelpCircle className="w-4 h-4" />
                          <span>{exam.questions} questions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Published {exam.publishedDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Flag className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <EyeOff className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing 1-3 of 284 exams
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>

            <div className="px-6 py-4">
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${activity.color}`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="w-full text-blue-600 hover:text-blue-700"
              >
                View All Logs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminExams;
