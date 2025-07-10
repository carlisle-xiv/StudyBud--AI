import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TeacherNavigation from "@/components/TeacherNavigation";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Flag,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MessageSquare,
  User,
  BookOpen,
  Filter,
  Search,
  Edit3,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Clock,
} from "lucide-react";

const TeacherQuestionReview = () => {
  const navigate = useNavigate();
  const [filterCourse, setFilterCourse] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock flagged questions data
  const [flaggedQuestions, setFlaggedQuestions] = useState([
    {
      id: 1,
      questionId: "Q15",
      course: "Mathematics 101",
      exam: "Algebra Midterm",
      question: "Solve for x: 2x² + 5x - 3 = 0",
      type: "multiple_choice",
      options: [
        "x = 1, x = -3",
        "x = -1, x = 3",
        "x = 0.5, x = -3",
        "x = -0.5, x = 3",
      ],
      correctAnswer: "x = 0.5, x = -3",
      flagReason: "confusion",
      flaggedBy: 8,
      severity: "high",
      status: "pending",
      dateReported: "2024-01-20",
      reports: [
        {
          student: "John Smith",
          comment: "The wording is confusing. I'm not sure what method to use.",
          timestamp: "2024-01-20 10:30",
        },
        {
          student: "Emily Johnson",
          comment: "Answer choices seem wrong. I got a different result.",
          timestamp: "2024-01-20 11:15",
        },
        {
          student: "Mike Davis",
          comment: "Question is unclear about which formula to apply.",
          timestamp: "2024-01-20 14:22",
        },
      ],
    },
    {
      id: 2,
      questionId: "Q8",
      course: "Physics 201",
      exam: "Mechanics Quiz",
      question:
        "A ball is thrown vertically upward with an initial velocity of 20 m/s. What is the maximum height reached?",
      type: "numerical",
      correctAnswer: "20.4 m",
      flagReason: "answer_error",
      flaggedBy: 12,
      severity: "critical",
      status: "pending",
      dateReported: "2024-01-19",
      reports: [
        {
          student: "Sarah Wilson",
          comment: "I calculated 20.4m but the system marked it wrong.",
          timestamp: "2024-01-19 15:45",
        },
        {
          student: "David Brown",
          comment: "Using g=9.8, I get 20.4m. The answer key might be wrong.",
          timestamp: "2024-01-19 16:20",
        },
      ],
    },
    {
      id: 3,
      questionId: "Q23",
      course: "Chemistry 201",
      exam: "Organic Chemistry Test",
      question: "What is the IUPAC name for CH₃CH₂CH(CH₃)CH₂OH?",
      type: "short_answer",
      correctAnswer: "2-methylbutan-1-ol",
      flagReason: "ambiguous",
      flaggedBy: 5,
      severity: "medium",
      status: "reviewed",
      dateReported: "2024-01-18",
      reports: [
        {
          student: "Lisa Anderson",
          comment: "Could be interpreted as 3-methylbutan-4-ol too.",
          timestamp: "2024-01-18 09:30",
        },
      ],
    },
    {
      id: 4,
      questionId: "Q12",
      course: "Biology 101",
      exam: "Cell Division Quiz",
      question:
        "During which phase of mitosis do chromosomes align at the center of the cell?",
      type: "multiple_choice",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      correctAnswer: "Metaphase",
      flagReason: "too_easy",
      flaggedBy: 3,
      severity: "low",
      status: "resolved",
      dateReported: "2024-01-17",
      reports: [
        {
          student: "Alex Johnson",
          comment: "This question is too basic for college level.",
          timestamp: "2024-01-17 13:15",
        },
      ],
    },
  ]);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">High</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case "low":
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-blue-100 text-blue-800">Pending Review</Badge>
        );
      case "reviewed":
        return (
          <Badge className="bg-purple-100 text-purple-800">Under Review</Badge>
        );
      case "resolved":
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case "dismissed":
        return <Badge className="bg-gray-100 text-gray-800">Dismissed</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getFlagReasonText = (reason: string) => {
    switch (reason) {
      case "confusion":
        return "Student Confusion";
      case "answer_error":
        return "Possible Answer Error";
      case "ambiguous":
        return "Ambiguous Wording";
      case "too_easy":
        return "Too Easy";
      case "too_hard":
        return "Too Difficult";
      default:
        return "General Issue";
    }
  };

  const handleResolve = (questionId: number) => {
    setFlaggedQuestions((questions) =>
      questions.map((q) =>
        q.id === questionId ? { ...q, status: "resolved" } : q,
      ),
    );
  };

  const handleDismiss = (questionId: number) => {
    setFlaggedQuestions((questions) =>
      questions.map((q) =>
        q.id === questionId ? { ...q, status: "dismissed" } : q,
      ),
    );
  };

  const handleEdit = (questionId: number) => {
    navigate(`/edit-question/${questionId}`);
  };

  const filteredQuestions = flaggedQuestions.filter((question) => {
    const matchesCourse =
      filterCourse === "all" || question.course === filterCourse;
    const matchesSeverity =
      filterSeverity === "all" || question.severity === filterSeverity;
    const matchesStatus =
      filterStatus === "all" || question.status === filterStatus;
    const matchesSearch =
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.questionId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCourse && matchesSeverity && matchesStatus && matchesSearch;
  });

  const uniqueCourses = [...new Set(flaggedQuestions.map((q) => q.course))];
  const pendingCount = flaggedQuestions.filter(
    (q) => q.status === "pending",
  ).length;
  const criticalCount = flaggedQuestions.filter(
    (q) => q.severity === "critical",
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/teacher-dashboard")}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Question Review
                </h1>
                <p className="text-gray-600 mt-2">
                  Review and resolve flagged questions from students
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Flag className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {flaggedQuestions.length}
                </h3>
                <p className="text-gray-600">Total Flagged</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {pendingCount}
                </h3>
                <p className="text-gray-600">Pending Review</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {criticalCount}
                </h3>
                <p className="text-gray-600">Critical Issues</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {
                    flaggedQuestions.filter((q) => q.status === "resolved")
                      .length
                  }
                </h3>
                <p className="text-gray-600">Resolved</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by question ID, content, course, or exam..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <Select value={filterCourse} onValueChange={setFilterCourse}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {uniqueCourses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewed">Under Review</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="dismissed">Dismissed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((question) => (
            <Card key={question.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center space-x-2">
                      <Flag className="w-4 h-4 text-red-600" />
                      <span className="font-mono text-sm font-medium">
                        {question.questionId}
                      </span>
                    </div>
                    {getSeverityBadge(question.severity)}
                    {getStatusBadge(question.status)}
                    <Badge className="bg-gray-100 text-gray-700">
                      {getFlagReasonText(question.flagReason)}
                    </Badge>
                  </div>

                  {/* Question Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Course</p>
                        <p className="font-medium">{question.course}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Exam</p>
                        <p className="font-medium">{question.exam}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Flagged by</p>
                        <p className="font-medium">
                          {question.flaggedBy} students
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Date</p>
                        <p className="font-medium">{question.dateReported}</p>
                      </div>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Question:
                    </h4>
                    <p className="text-gray-700 mb-3">{question.question}</p>

                    {question.options && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Options:
                        </p>
                        <ul className="space-y-1">
                          {question.options.map((option, index) => (
                            <li
                              key={index}
                              className={`text-sm ${
                                option === question.correctAnswer
                                  ? "text-green-700 font-medium"
                                  : "text-gray-600"
                              }`}
                            >
                              {String.fromCharCode(65 + index)}. {option}
                              {option === question.correctAnswer && (
                                <span className="ml-2 text-green-600">
                                  ✓ Correct
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!question.options && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700">
                          Correct Answer:{" "}
                          <span className="text-green-700">
                            {question.correctAnswer}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Student Reports */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Student Reports ({question.reports.length})
                    </h4>
                    <div className="space-y-3">
                      {question.reports.slice(0, 2).map((report, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-blue-900 text-sm">
                              {report.student}
                            </span>
                            <span className="text-blue-600 text-xs">
                              {report.timestamp}
                            </span>
                          </div>
                          <p className="text-blue-800 text-sm">
                            {report.comment}
                          </p>
                        </div>
                      ))}
                      {question.reports.length > 2 && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-600"
                        >
                          View all {question.reports.length} reports
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 ml-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(question.id)}
                    className="flex items-center"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Question
                  </Button>

                  {question.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => handleResolve(question.id)}
                        className="bg-green-600 hover:bg-green-700 flex items-center"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Resolve
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDismiss(question.id)}
                        className="border-red-300 text-red-600 hover:bg-red-50 flex items-center"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Dismiss
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}

          {filteredQuestions.length === 0 && (
            <Card className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Flag className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No flagged questions found
              </h3>
              <p className="text-gray-600">
                {searchTerm ||
                filterCourse !== "all" ||
                filterSeverity !== "all" ||
                filterStatus !== "all"
                  ? "Try adjusting your search or filters"
                  : "No questions have been flagged for review"}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherQuestionReview;
