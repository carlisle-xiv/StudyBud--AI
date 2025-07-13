import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TeacherNavigation from "../components/TeacherNavigation";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  ArrowLeft,
  Download,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Target,
  Search,
  Filter,
  Mail,
  MessageCircle,
  Eye,
  X,
} from "lucide-react";

const AllStudents: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get("course") || "mathematics-101";
  const initialFilter = searchParams.get("filter") || "all-performance";

  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const [performanceFilter, setPerformanceFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAssessmentModal, setShowAssessmentModal] = useState(false);
  const [selectedStudentAssessments, setSelectedStudentAssessments] =
    useState<any>(null);

  // Course data
  const teacherCourses = [
    { id: "mathematics-101", name: "Mathematics 101", students: 45 },
    { id: "mathematics-102", name: "Mathematics 102", students: 38 },
    { id: "calculus-201", name: "Calculus 201", students: 32 },
  ];

  // Sample student data
  const allStudents = [
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "98%",
      average: "94.2%",
      trend: "+5%",
      status: "Excellent",
      assessmentsTaken: 8,
      lastAssessment: "Quadratic Equations Test",
      enrollDate: "2024-01-15",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-green-100 text-green-800",
      scoreColor: "text-green-600",
      indicator: "excellent",
      assessmentHistory: [
        {
          name: "Linear Equations Quiz",
          date: "2024-03-01",
          score: "95%",
          type: "Quiz",
        },
        {
          name: "Algebra Fundamentals",
          date: "2024-02-28",
          score: "98%",
          type: "Test",
        },
        {
          name: "Functions and Graphs",
          date: "2024-02-25",
          score: "92%",
          type: "Assignment",
        },
        {
          name: "Trigonometry Test",
          date: "2024-02-20",
          score: "96%",
          type: "Test",
        },
        {
          name: "Statistics Project",
          date: "2024-02-15",
          score: "100%",
          type: "Project",
        },
        {
          name: "Calculus Basics",
          date: "2024-02-10",
          score: "94%",
          type: "Quiz",
        },
        {
          name: "Geometry Problems",
          date: "2024-02-05",
          score: "89%",
          type: "Assignment",
        },
        {
          name: "Quadratic Equations Test",
          date: "2024-02-01",
          score: "98%",
          type: "Test",
        },
      ],
    },
    {
      id: 2,
      name: "Alex Chen",
      email: "alex.chen@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "52%",
      average: "58.7%",
      trend: "-8%",
      status: "At Risk",
      assessmentsTaken: 7,
      lastAssessment: "Linear Algebra Quiz",
      enrollDate: "2024-01-15",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      trendUp: false,
      statusColor: "bg-red-100 text-red-800",
      scoreColor: "text-red-500",
      indicator: "at-risk",
      assessmentHistory: [
        {
          name: "Linear Algebra Quiz",
          date: "2024-03-01",
          score: "52%",
          type: "Quiz",
        },
        {
          name: "Functions and Graphs",
          date: "2024-02-25",
          score: "48%",
          type: "Assignment",
        },
        {
          name: "Trigonometry Test",
          date: "2024-02-20",
          score: "65%",
          type: "Test",
        },
        {
          name: "Statistics Project",
          date: "2024-02-15",
          score: "58%",
          type: "Project",
        },
        {
          name: "Calculus Basics",
          date: "2024-02-10",
          score: "44%",
          type: "Quiz",
        },
        {
          name: "Geometry Problems",
          date: "2024-02-05",
          score: "70%",
          type: "Assignment",
        },
        {
          name: "Algebra Fundamentals",
          date: "2024-02-01",
          score: "55%",
          type: "Test",
        },
      ],
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      course: "Mathematics 101",
      courseId: "mathematics-101",
      latestScore: "85%",
      average: "82.3%",
      trend: "+3%",
      status: "Good",
      assessmentsTaken: 8,
      lastAssessment: "Functions and Graphs",
      enrollDate: "2024-01-15",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      trendUp: true,
      statusColor: "bg-blue-100 text-blue-800",
      scoreColor: "text-blue-600",
      indicator: "average",
      assessmentHistory: [
        {
          name: "Functions and Graphs",
          date: "2024-03-01",
          score: "85%",
          type: "Assignment",
        },
        {
          name: "Trigonometry Test",
          date: "2024-02-20",
          score: "78%",
          type: "Test",
        },
        {
          name: "Statistics Project",
          date: "2024-02-15",
          score: "88%",
          type: "Project",
        },
        {
          name: "Calculus Basics",
          date: "2024-02-10",
          score: "82%",
          type: "Quiz",
        },
        {
          name: "Geometry Problems",
          date: "2024-02-05",
          score: "79%",
          type: "Assignment",
        },
        {
          name: "Algebra Fundamentals",
          date: "2024-02-01",
          score: "86%",
          type: "Test",
        },
        {
          name: "Linear Equations Quiz",
          date: "2024-01-25",
          score: "80%",
          type: "Quiz",
        },
        {
          name: "Pre-Assessment",
          date: "2024-01-15",
          score: "75%",
          type: "Assessment",
        },
      ],
    },
  ];

  // Filter students
  const filteredStudents = allStudents.filter((student) => {
    const courseMatch =
      selectedCourse === "all-courses" || student.courseId === selectedCourse;
    const performanceMatch =
      performanceFilter === "all-performance" ||
      (performanceFilter === "excellent" &&
        student.indicator === "excellent") ||
      (performanceFilter === "good" && student.indicator === "average") ||
      (performanceFilter === "at-risk" && student.indicator === "at-risk");
    const searchMatch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    return courseMatch && performanceMatch && searchMatch;
  });

  const getIndicatorColor = (indicator: string) => {
    switch (indicator) {
      case "excellent":
        return "border-l-4 border-green-500 bg-green-50";
      case "average":
        return "border-l-4 border-blue-500 bg-blue-50";
      case "at-risk":
        return "border-l-4 border-red-500 bg-red-50";
      default:
        return "border-l-4 border-gray-300";
    }
  };

  const handleAssessmentClick = (student: any) => {
    setSelectedStudentAssessments(student);
    setShowAssessmentModal(true);
  };

  const getScoreColor = (score: string) => {
    const numScore = parseInt(score);
    if (numScore >= 90) return "text-green-600 font-semibold";
    if (numScore >= 70) return "text-blue-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/student-performance")}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Performance Overview
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Student List
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              All Students
            </h1>
            <p className="text-gray-600">
              Complete overview of students across your courses
            </p>
          </div>
          <Badge className="bg-gray-100 text-gray-700 text-lg px-3 py-1">
            {filteredStudents.length} Students
          </Badge>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Course Filter */}
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-courses">All Courses</SelectItem>
                  {teacherCourses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name} ({course.students})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Performance Filter */}
              <Select
                value={performanceFilter}
                onValueChange={setPerformanceFilter}
              >
                <SelectTrigger className="w-44">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-performance">
                    All Performance
                  </SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="at-risk">At Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Performance Summary */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">
                  {
                    filteredStudents.filter((s) => s.indicator === "excellent")
                      .length
                  }{" "}
                  Excellent
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">
                  {
                    filteredStudents.filter((s) => s.indicator === "average")
                      .length
                  }{" "}
                  Good
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">
                  {
                    filteredStudents.filter((s) => s.indicator === "at-risk")
                      .length
                  }{" "}
                  At Risk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  {selectedCourse === "all-courses" && (
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                  )}
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assessments
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Latest Score
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className={`hover:bg-gray-50 ${getIndicatorColor(student.indicator)}`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {student.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {student.email}
                          </p>
                          <p className="text-gray-400 text-xs">
                            Enrolled:{" "}
                            {new Date(student.enrollDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    {selectedCourse === "all-courses" && (
                      <td className="py-4 px-6 text-sm text-gray-900">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 text-gray-400 mr-2" />
                          {student.course}
                        </div>
                      </td>
                    )}
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleAssessmentClick(student)}
                        className="text-sm text-gray-900 hover:text-indigo-600 transition-colors"
                      >
                        <div className="flex items-center">
                          <Target className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="underline cursor-pointer">
                            {student.assessmentsTaken} taken
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs mt-1">
                          Last: {student.lastAssessment}
                        </p>
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-sm font-medium ${student.scoreColor}`}
                      >
                        {student.latestScore}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      {student.average}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {student.trendUp ? (
                          <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                        )}
                        <span
                          className={`text-sm ${student.trendUp ? "text-green-600" : "text-red-500"}`}
                        >
                          {student.trend}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <Badge className={student.statusColor}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-indigo-600 hover:text-indigo-700 p-1"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-700 p-1"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-700 p-1"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assessment History Modal */}
        {showAssessmentModal && selectedStudentAssessments && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedStudentAssessments.avatar}
                    alt={selectedStudentAssessments.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedStudentAssessments.name} - Assessment History
                    </h2>
                    <p className="text-gray-500">
                      {selectedStudentAssessments.course} •{" "}
                      {selectedStudentAssessments.assessmentHistory?.length ||
                        0}{" "}
                      assessments
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setShowAssessmentModal(false)}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 max-h-[calc(90vh-140px)] overflow-y-auto">
                <div className="grid gap-4">
                  {selectedStudentAssessments.assessmentHistory?.map(
                    (assessment: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                              <Target className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">
                                {assessment.name}
                              </h3>
                              <div className="flex items-center space-x-4 mt-1">
                                <Badge className="bg-gray-100 text-gray-700">
                                  {assessment.type}
                                </Badge>
                                <span className="text-sm text-gray-500">
                                  {new Date(
                                    assessment.date,
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`text-lg font-bold ${getScoreColor(assessment.score)}`}
                          >
                            {assessment.score}
                          </span>
                        </div>
                      </div>
                    ),
                  ) || []}
                </div>
              </div>

              <div className="border-t border-gray-200 p-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Average Score:{" "}
                    <span className="font-medium text-gray-900">
                      {selectedStudentAssessments.average}
                    </span>
                  </div>
                  <Button
                    onClick={() => setShowAssessmentModal(false)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AllStudents;
