import React from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavigation from "../components/TeacherNavigation";
import {
  Plus,
  Sparkles,
  Upload,
  BookOpen,
  Users,
  FileText,
  AlertTriangle,
  Clock,
  Flag,
  Edit3,
} from "lucide-react";

const TeacherDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateCourse = () => {
    navigate("/create-course");
  };

  const handleGenerateExam = () => {
    navigate("/teacher-exam-creation");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Welcome Section */}
        <section className="w-full h-34 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Welcome back, Dr. Sarah Johnson!
              </h1>
              <p className="text-lg text-purple-100">
                Ready to inspire your students today?
              </p>
            </div>
            <div className="w-19 h-15 text-purple-200">
              <svg
                width="75"
                height="60"
                viewBox="0 0 75 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 8.25C18.75 4.11328 22.1133 0.75 26.25 0.75H67.5C71.6367 0.75 75 4.11328 75 8.25V42C75 46.1367 71.6367 49.5 67.5 49.5H39.4688C38.0859 46.5117 35.9648 43.9336 33.3281 42H45V38.25C45 36.1758 46.6758 34.5 48.75 34.5H56.25C58.3242 34.5 60 36.1758 60 38.25V42H67.5V8.25H26.25V14.0039C24.0469 12.7266 21.4805 12 18.75 12V8.25ZM18.75 15.75C20.2274 15.75 21.6903 16.041 23.0552 16.6064C24.4201 17.1717 25.6603 18.0004 26.705 19.045C27.7496 20.0897 28.5783 21.3299 29.1436 22.6948C29.709 24.0597 30 25.5226 30 27C30 28.4774 29.709 29.9403 29.1436 31.3052C28.5783 32.6701 27.7496 33.9103 26.705 34.955C25.6603 35.9996 24.4201 36.8283 23.0552 37.3936C21.6903 37.959 20.2274 38.25 18.75 38.25C17.2726 38.25 15.8097 37.959 14.4448 37.3936C13.0799 36.8283 11.8397 35.9996 10.795 34.955C9.75039 33.9103 8.92172 32.6701 8.35635 31.3052C7.79099 29.9403 7.5 28.4774 7.5 27C7.5 25.5226 7.79099 24.0597 8.35635 22.6948C8.92172 21.3299 9.75039 20.0897 10.795 19.045C11.8397 18.0004 13.0799 17.1717 14.4448 16.6064C15.8097 16.041 17.2726 15.75 18.75 15.75ZM15.6211 42H21.8672C30.5039 42 37.5 48.9961 37.5 57.6211C37.5 59.3438 36.1055 60.75 34.3711 60.75H3.12891C1.39453 60.75 0 59.3555 0 57.6211C0 48.9961 6.99609 42 15.6211 42Z"
                  fill="#E9D5FF"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Statistics Cards */}
        <section className="grid grid-cols-3 gap-6 mb-8">
          {/* Courses Created */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">
                  Courses Created
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-2">12</p>
                <p className="text-sm text-green-600">+2 this month</p>
              </div>
              <div className="w-10 h-13 bg-indigo-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-5 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Active Students */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">
                  Active Students
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-2">284</p>
                <p className="text-sm text-green-600">+18 this week</p>
              </div>
              <div className="w-12 h-13 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* Exams Assigned */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">
                  Exams Assigned
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-2">47</p>
                <p className="text-sm text-amber-600">8 pending review</p>
              </div>
              <div className="w-10 h-13 bg-amber-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-5 text-amber-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-3 gap-6 mb-8">
          {/* Create New Course */}
          <button
            onClick={handleCreateCourse}
            className="bg-indigo-600 rounded-xl shadow-lg p-8 text-white hover:bg-indigo-700 transition-colors"
          >
            <div className="text-center">
              <Plus className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Create New Course</h3>
              <p className="text-sm text-white/80">
                Set up a new course with syllabus and resources
              </p>
            </div>
          </button>

          {/* Generate Exam with AI */}
          <button
            onClick={handleGenerateExam}
            className="bg-green-600 rounded-xl shadow-lg p-6 text-white hover:bg-green-700 transition-colors"
          >
            <div className="text-center">
              <Sparkles className="w-9 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">
                Generate Exam with AI
              </h3>
              <p className="text-sm text-white/80">
                Create smart exams automatically from your content
              </p>
            </div>
          </button>

          {/* Upload Syllabus */}
          <button className="bg-amber-500 rounded-xl shadow-lg p-8 text-white hover:bg-amber-600 transition-colors">
            <div className="text-center">
              <Upload className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Upload Syllabus</h3>
              <p className="text-sm text-white/80">
                Add course materials and organize content
              </p>
            </div>
          </button>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-7">
            Quick Actions
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Performance Alerts */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Performance Alerts
                </h3>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                  3 New
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="bg-red-50 rounded-lg p-3 flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Math 101 - Low Performance
                    </p>
                    <p className="text-xs text-gray-600">
                      15 students scoring below 60%
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-3 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Physics 201 - Late Submissions
                    </p>
                    <p className="text-xs text-gray-600">
                      8 students missed deadline
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/teacher-alerts")}
                className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                View All Alerts
              </button>
            </div>

            {/* Draft Exams */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Draft Exams
                </h3>
                <span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs font-medium rounded-full">
                  5 Drafts
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Chemistry Midterm
                    </p>
                    <p className="text-xs text-gray-600">
                      Last edited 2 hours ago
                    </p>
                  </div>
                  <Edit3 className="w-4 h-4 text-indigo-600" />
                </div>

                <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Biology Quiz 3
                    </p>
                    <p className="text-xs text-gray-600">
                      Last edited yesterday
                    </p>
                  </div>
                  <Edit3 className="w-4 h-4 text-indigo-600" />
                </div>
              </div>

              <button
                onClick={() => navigate("/teacher-drafts")}
                className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                View All Drafts
              </button>
            </div>

            {/* Flagged Questions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Flagged Questions
                </h3>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                  2 Review
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="bg-red-50 rounded-lg p-3 flex items-center gap-3">
                  <Flag className="w-3 h-4 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Question #15 - Math 101
                    </p>
                    <p className="text-xs text-gray-600">
                      Multiple students reported confusion
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-3 flex items-center gap-3">
                  <Flag className="w-3 h-4 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Question #8 - Physics 201
                    </p>
                    <p className="text-xs text-gray-600">
                      Possible answer key error
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/teacher-question-review")}
                className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Review Questions
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;
