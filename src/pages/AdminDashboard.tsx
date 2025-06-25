import React from "react";
import AdminNavigation from "../components/AdminNavigation";
import {
  Bell,
  Download,
  AlertTriangle,
  UserPlus,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BookOpen,
  FileText,
  Activity,
} from "lucide-react";

const AdminDashboard: React.FC = () => {
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
                Welcome back, Dr. Sarah Chen
              </h1>
              <p className="text-gray-600">
                Stanford University Administration
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

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Pending Teachers */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Pending Teachers
                  </p>
                  <p className="text-3xl font-bold text-amber-500 mb-1">12</p>
                  <p className="text-sm text-gray-600">↑ 3 new today</p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
              </div>
            </div>

            {/* Course Reviews */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Course Reviews
                  </p>
                  <p className="text-3xl font-bold text-blue-600 mb-1">8</p>
                  <p className="text-sm text-gray-600">2 flagged</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Active Students */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Active Students
                  </p>
                  <p className="text-3xl font-bold text-green-500 mb-1">
                    2,847
                  </p>
                  <p className="text-sm text-gray-600">↑ 12% this month</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>

            {/* Daily Exams */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Daily Exams
                  </p>
                  <p className="text-3xl font-bold text-indigo-600 mb-1">156</p>
                  <p className="text-sm text-gray-600">24 completed today</p>
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Recent Notifications */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Notifications
                </h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {/* Exam Flagged */}
                  <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        Exam Flagged for Review
                      </h4>
                      <p className="text-sm text-gray-600">
                        Advanced Calculus exam shows unusual AI usage patterns
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* New Teacher Registration */}
                  <div className="flex items-start gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        New Teacher Registration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Dr. Michael Rodriguez submitted credentials for Physics
                        dept
                      </p>
                      <p className="text-xs text-gray-500 mt-1">4 hours ago</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Performance Anomaly */}
                  <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        Performance Anomaly Detected
                      </h4>
                      <p className="text-sm text-gray-600">
                        Unusual score distribution in Chemistry 101 midterm
                      </p>
                      <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Course Approved */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        Course Approved
                      </h4>
                      <p className="text-sm text-gray-600">
                        Machine Learning Fundamentals has been approved and
                        published
                      </p>
                      <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h3>
              </div>

              <div className="p-6 space-y-4">
                {/* Review Teachers */}
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-lg p-4 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Review Teachers</h4>
                      <p className="text-sm text-white/90">
                        12 pending approvals
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>

                {/* Review Courses */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Review Courses</h4>
                      <p className="text-sm text-white/90">8 awaiting review</p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>

                {/* View Activity Logs */}
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-4 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">View Activity Logs</h4>
                      <p className="text-sm text-white/90">System monitoring</p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>

                {/* Generate Report */}
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg p-4 text-left transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Generate Report</h4>
                      <p className="text-sm text-gray-600">Weekly summary</p>
                    </div>
                    <Download className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
