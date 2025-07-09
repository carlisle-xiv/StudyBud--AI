import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import StudentNavigation from "@/components/StudentNavigation";
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  Trophy,
  ThumbsUp,
  AlertTriangle,
  Lightbulb,
  RotateCcw,
  Eye,
  Share,
  ChevronDown,
} from "lucide-react";

const ExamResults = () => {
  const { examId } = useParams();

  // Mock data - in real app this would come from API based on examId
  const examData = {
    subject: "Mathematics",
    examName: "Calculus Exam Results",
    score: 92,
    grade: "A-",
    completedIn: "45 minutes",
    date: "December 21, 2025",
    totalQuestions: 25,
    correctAnswers: 23,
    timeUsed: "45 min",
  };

  const topicPerformance = [
    {
      topic: "Derivatives",
      correct: 9,
      total: 10,
      percentage: 90,
      color: "bg-green-500",
    },
    {
      topic: "Integration",
      correct: 8,
      total: 8,
      percentage: 100,
      color: "bg-green-500",
    },
    {
      topic: "Limits",
      correct: 6,
      total: 7,
      percentage: 86,
      color: "bg-yellow-500",
    },
  ];

  const questionReview = [
    {
      id: 1,
      question: "Find the derivative of f(x) = x³ + 2x² - 5x + 1",
      status: "correct",
      feedback: "Correct",
    },
    {
      id: 2,
      question: "Evaluate ∫(2x + 3)dx from 0 to 2",
      status: "correct",
      feedback: "Correct",
    },
    {
      id: 3,
      question: "Find dy/dx for y = sin(x²)",
      status: "incorrect",
      feedback: "Incorrect - Review chain rule",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/dashboard" className="hover:text-gray-900">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/reports" className="hover:text-gray-900">
            {examData.subject}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">{examData.examName}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Excellent Work, Sarah! 🎉
              </h1>
              <p className="text-green-100 text-lg mb-6">
                You scored {examData.score}% on your {examData.subject} exam
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-100" />
                  <span className="text-green-100">
                    Completed in {examData.completedIn}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-green-100" />
                  <span className="text-green-100">{examData.date}</span>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full w-32 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold">{examData.score}%</div>
                <div className="text-green-100 text-sm">Score</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Performance Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Questions Correct */}
                  <div className="bg-green-50 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {examData.correctAnswers}/{examData.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-600">
                      Questions Correct
                    </div>
                  </div>

                  {/* Time Used */}
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {examData.timeUsed}
                    </div>
                    <div className="text-sm text-gray-600">Time Used</div>
                  </div>

                  {/* Grade */}
                  <div className="bg-purple-50 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {examData.grade}
                    </div>
                    <div className="text-sm text-gray-600">Grade</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance by Topic */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Performance by Topic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topicPerformance.map((topic, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">
                          {topic.topic}
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            topic.percentage === 100
                              ? "text-green-600"
                              : topic.percentage >= 90
                                ? "text-green-600"
                                : "text-yellow-600"
                          }`}
                        >
                          {topic.correct}/{topic.total} ({topic.percentage}%)
                        </span>
                      </div>
                      <Progress
                        value={topic.percentage}
                        className="h-2"
                        style={{
                          background: "#E5E7EB",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Question-by-Question Review */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Question-by-Question Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {questionReview.map((question) => (
                    <div
                      key={question.id}
                      className={`border rounded-lg p-4 ${
                        question.status === "correct"
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              question.status === "correct"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {question.id}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {question.question}
                            </div>
                            <div
                              className={`text-sm ${
                                question.status === "correct"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {question.status === "correct" ? "✓" : "✗"}{" "}
                              {question.feedback}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye
                            className={`h-4 w-4 ${
                              question.status === "correct"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">View All 25 Questions</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded"></div>
                  </div>
                  <CardTitle className="text-lg">AI Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Strengths */}
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <ThumbsUp className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-800 mb-1">
                        Strengths
                      </div>
                      <div className="text-sm text-green-700">
                        Excellent grasp of integration techniques and
                        fundamental theorem applications
                      </div>
                    </div>
                  </div>
                </div>

                {/* Areas to Review */}
                <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                      <AlertTriangle className="h-3 w-3 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-medium text-yellow-800 mb-1">
                        Areas to Review
                      </div>
                      <div className="text-sm text-yellow-700">
                        Chain rule applications with complex functions need more
                        practice
                      </div>
                    </div>
                  </div>
                </div>

                {/* Study Strategy */}
                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <Lightbulb className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-800 mb-1">
                        Study Strategy
                      </div>
                      <div className="text-sm text-blue-700">
                        Focus on derivative word problems and practice 15
                        minutes daily
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake Exam
              </Button>
              <Button variant="outline" className="w-full">
                <Eye className="h-4 w-4 mr-2" />
                Review Mistakes
              </Button>
              <Button
                variant="outline"
                className="w-full text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
              >
                <Share className="h-4 w-4 mr-2" />
                Share Results
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamResults;
