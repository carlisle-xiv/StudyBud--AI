import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StudentNavigation from "@/components/StudentNavigation";
import {
  Calendar,
  Clock,
  TrendingUp,
  Award,
  BarChart3,
  Eye,
  Download,
  Share,
} from "lucide-react";

interface ExamReport {
  id: string;
  subject: string;
  examName: string;
  date: string;
  score: number;
  grade: string;
  duration: string;
  totalQuestions: number;
  correctAnswers: number;
  status: "completed" | "in-progress" | "scheduled";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const Reports = () => {
  const examReports: ExamReport[] = [
    {
      id: "calculus-exam-1",
      subject: "Mathematics",
      examName: "Calculus Exam",
      date: "December 21, 2025",
      score: 92,
      grade: "A-",
      duration: "45 min",
      totalQuestions: 25,
      correctAnswers: 23,
      status: "completed",
      difficulty: "Advanced",
    },
    {
      id: "algebra-exam-1",
      subject: "Mathematics",
      examName: "Linear Algebra",
      date: "December 18, 2025",
      score: 88,
      grade: "B+",
      duration: "50 min",
      totalQuestions: 20,
      correctAnswers: 18,
      status: "completed",
      difficulty: "Intermediate",
    },
    {
      id: "physics-exam-1",
      subject: "Physics",
      examName: "Quantum Mechanics",
      date: "December 15, 2025",
      score: 95,
      grade: "A",
      duration: "60 min",
      totalQuestions: 30,
      correctAnswers: 29,
      status: "completed",
      difficulty: "Advanced",
    },
    {
      id: "chemistry-exam-1",
      subject: "Chemistry",
      examName: "Organic Chemistry",
      date: "December 12, 2025",
      score: 82,
      grade: "B",
      duration: "55 min",
      totalQuestions: 28,
      correctAnswers: 23,
      status: "completed",
      difficulty: "Intermediate",
    },
    {
      id: "statistics-exam-1",
      subject: "Statistics",
      examName: "Data Analysis",
      date: "December 9, 2025",
      score: 90,
      grade: "A-",
      duration: "40 min",
      totalQuestions: 22,
      correctAnswers: 20,
      status: "completed",
      difficulty: "Intermediate",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-50";
    if (score >= 80) return "text-blue-600 bg-blue-50";
    if (score >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "Mathematics":
        return "bg-blue-100 text-blue-800";
      case "Physics":
        return "bg-green-100 text-green-800";
      case "Chemistry":
        return "bg-purple-100 text-purple-800";
      case "Statistics":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalExams = examReports.length;
  const averageScore = Math.round(
    examReports.reduce((sum, exam) => sum + exam.score, 0) / totalExams,
  );
  const excellentGrades = examReports.filter((exam) => exam.score >= 90).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Exam Reports
          </h1>
          <p className="text-gray-600">
            Track your academic performance and progress over time
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Exams
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalExams}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Average Score
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {averageScore}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Excellent Grades
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {excellentGrades}
                  </p>
                  <p className="text-sm text-gray-500">A- or higher</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    This Month
                  </p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-sm text-green-600">+2 from last month</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exam Reports List */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Recent Exam Reports</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {examReports.map((exam) => (
                <div
                  key={exam.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getSubjectColor(exam.subject)}>
                          {exam.subject}
                        </Badge>
                        <Badge className={getDifficultyColor(exam.difficulty)}>
                          {exam.difficulty}
                        </Badge>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(
                            exam.score,
                          )}`}
                        >
                          {exam.score}% ({exam.grade})
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {exam.examName}
                      </h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exam.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{exam.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-4 w-4" />
                          <span>
                            {exam.correctAnswers}/{exam.totalQuestions}{" "}
                            questions
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4" />
                          <span>
                            {Math.round(
                              (exam.correctAnswers / exam.totalQuestions) * 100,
                            )}
                            % accuracy
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-6">
                      <Link to={`/reports/${exam.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load More Reports</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;
