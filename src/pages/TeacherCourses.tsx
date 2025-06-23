import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavigation from "../components/TeacherNavigation";
import {
  Plus,
  Sparkles,
  Search,
  ChevronDown,
  Grid3X3,
  List,
  BookOpen,
  Users,
  FileText,
  Eye,
  MoreVertical,
  Beaker,
  Atom,
  FlaskConical,
  Dna,
  Calculator,
  Microscope,
  Archive,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  subject: string;
  level: string;
  description: string;
  students: number;
  exams: number;
  status: "Active" | "Draft" | "Archived";
  icon: React.ElementType;
  iconColor: string;
}

const TeacherCourses: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const handleCreateCourse = () => {
    navigate("/create-course");
  };

  const courses: Course[] = [
    {
      id: "1",
      title: "Advanced Calculus",
      subject: "Mathematics",
      level: "Advanced",
      description:
        "Comprehensive course covering differential and integral calculus with real-world applications.",
      students: 45,
      exams: 8,
      status: "Active",
      icon: BookOpen,
      iconColor: "bg-indigo-100 text-indigo-600",
    },
    {
      id: "2",
      title: "Quantum Physics",
      subject: "Physics",
      level: "Advanced",
      description:
        "Introduction to quantum mechanics principles and their applications in modern physics.",
      students: 32,
      exams: 6,
      status: "Active",
      icon: Atom,
      iconColor: "bg-green-100 text-green-600",
    },
    {
      id: "3",
      title: "Organic Chemistry",
      subject: "Chemistry",
      level: "Intermediate",
      description:
        "Study of carbon-based compounds and their reactions in biological systems.",
      students: 67,
      exams: 12,
      status: "Draft",
      icon: FlaskConical,
      iconColor: "bg-amber-100 text-amber-600",
    },
    {
      id: "4",
      title: "Molecular Biology",
      subject: "Biology",
      level: "Intermediate",
      description:
        "Explore cellular processes and molecular mechanisms of life at the genetic level.",
      students: 28,
      exams: 5,
      status: "Active",
      icon: Dna,
      iconColor: "bg-green-100 text-green-600",
    },
    {
      id: "5",
      title: "Linear Algebra",
      subject: "Mathematics",
      level: "Intermediate",
      description:
        "Vector spaces, matrices, and linear transformations for engineering applications.",
      students: 52,
      exams: 10,
      status: "Active",
      icon: Calculator,
      iconColor: "bg-purple-100 text-purple-600",
    },
    {
      id: "6",
      title: "Microbiology",
      subject: "Biology",
      level: "Beginner",
      description:
        "Study of microorganisms and their impact on health and environment.",
      students: 38,
      exams: 7,
      status: "Archived",
      icon: Microscope,
      iconColor: "bg-red-100 text-red-600",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return "px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full";
      case "Draft":
        return "px-2 py-1 bg-amber-100 text-amber-600 text-xs font-medium rounded-full";
      case "Archived":
        return "px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full";
      default:
        return "px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full";
    }
  };

  const getActionButton = (status: string) => {
    if (status === "Archived") {
      return (
        <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
          View
        </button>
      );
    }
    return (
      <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
        Manage
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Header Section */}
        <section className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Course Management
            </h1>
            <p className="text-gray-600">
              Create, organize, and manage your courses and resources
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCreateCourse}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create New Course
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
              <Sparkles className="w-5 h-4" />
              AI Generate
            </button>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Subject Filter */}
              <div className="relative">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="appearance-none px-3 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option>All Subjects</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="appearance-none px-3 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg border transition-colors ${
                  viewMode === "grid"
                    ? "bg-gray-100 border-gray-300"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Grid3X3 className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg border transition-colors ${
                  viewMode === "list"
                    ? "bg-gray-100 border-gray-300"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <List className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="grid grid-cols-3 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
              >
                {/* Course Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-13 rounded-lg flex items-center justify-center ${course.iconColor}`}
                    >
                      <IconComponent className="w-4 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {course.subject} • {course.level}
                      </p>
                    </div>
                  </div>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-3 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {course.students} students
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {course.exams} exams
                      </span>
                    </div>
                  </div>
                  <span className={getStatusBadge(course.status)}>
                    {course.status}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {getActionButton(course.status)}
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    {course.status === "Archived" ? (
                      <Archive className="w-4 h-3 text-gray-600" />
                    ) : (
                      <Eye className="w-4 h-3 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default TeacherCourses;
