import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Brain,
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const ExamInterface = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Sample questions - in real app this would come from API
  const questions: Question[] = [
    {
      id: 1,
      question: "What is the derivative of x² + 3x - 5?",
      options: ["2x + 3", "x² + 3", "2x - 5", "2x + 3x"],
      correctAnswer: 0,
      explanation:
        "Using the power rule: d/dx(x²) = 2x, d/dx(3x) = 3, d/dx(-5) = 0",
      subject: "Calculus",
      difficulty: "Easy",
    },
    {
      id: 2,
      question: "In Newton's second law, F = ma, what does 'a' represent?",
      options: ["Area", "Acceleration", "Amplitude", "Angle"],
      correctAnswer: 1,
      explanation: "In F = ma, 'a' represents acceleration, measured in m/s²",
      subject: "Physics",
      difficulty: "Easy",
    },
    {
      id: 3,
      question: "What is the molecular formula of benzene?",
      options: ["C₆H₆", "C₆H₁₂", "C₅H₆", "C₇H₈"],
      correctAnswer: 0,
      explanation:
        "Benzene has 6 carbon atoms and 6 hydrogen atoms, giving it the formula C₆H₆",
      subject: "Chemistry",
      difficulty: "Medium",
    },
    {
      id: 4,
      question: "What is the integral of cos(x)?",
      options: ["-sin(x) + C", "sin(x) + C", "-cos(x) + C", "tan(x) + C"],
      correctAnswer: 1,
      explanation:
        "The integral of cos(x) is sin(x) + C, where C is the constant of integration",
      subject: "Calculus",
      difficulty: "Medium",
    },
    {
      id: 5,
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁷ m/s"],
      correctAnswer: 0,
      explanation:
        "The speed of light in vacuum is approximately 299,792,458 m/s, or 3 × 10⁸ m/s",
      subject: "Physics",
      difficulty: "Hard",
    },
  ];

  // Initialize selected answers array
  useEffect(() => {
    setSelectedAnswers(new Array(questions.length).fill(null));
  }, [questions.length]);

  // Timer effect
  useEffect(() => {
    if (timeRemaining > 0 && !examSubmitted) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      handleSubmitExam();
    }
  }, [timeRemaining, examSubmitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    setExamSubmitted(true);
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  StudyBuddy AI
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gray-200 text-gray-600">
                    SC
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  Sarah Chen
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Results */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-8 text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Exam Complete!
                </h1>
                <p className="text-gray-600 mt-2">
                  You've finished your exam. Here are your results:
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div
                  className={`text-6xl font-bold ${getScoreColor(score)} mb-2`}
                >
                  {score}%
                </div>
                <p className="text-lg text-gray-600">
                  {score >= 90
                    ? "Excellent!"
                    : score >= 70
                      ? "Good Job!"
                      : score >= 60
                        ? "Keep Practicing!"
                        : "Needs Improvement"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {
                    selectedAnswers.filter(
                      (answer, index) =>
                        answer === questions[index].correctAnswer,
                    ).length
                  }{" "}
                  out of {questions.length} correct
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  onClick={() => navigate("/dashboard")}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Back to Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setSelectedAnswers(new Array(questions.length).fill(null));
                    setTimeRemaining(3600);
                    setExamSubmitted(false);
                  }}
                >
                  Retake Exam
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyBuddy AI
              </span>
            </div>

            <div className="flex items-center space-x-6">
              {/* Timer */}
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span
                  className={`font-mono text-lg ${timeRemaining < 300 ? "text-red-600" : "text-gray-700"}`}
                >
                  {formatTime(timeRemaining)}
                </span>
              </div>

              {/* User */}
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gray-200 text-gray-600">
                    SC
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  Sarah Chen
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Question Navigation */}
          <div className="lg:col-span-1">
            <Card className="p-4 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
              <div className="grid grid-cols-5 lg:grid-cols-1 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-10 h-10 rounded-lg border-2 font-medium text-sm transition-colors ${
                      index === currentQuestion
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : selectedAnswers[index] !== null
                          ? "border-green-300 bg-green-50 text-green-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Question Content */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <div className="space-y-6">
                {/* Question Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">
                      {questions[currentQuestion].subject}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        questions[currentQuestion].difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : questions[currentQuestion].difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {questions[currentQuestion].difficulty}
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Flag className="h-4 w-4 mr-2" />
                    Flag
                  </Button>
                </div>

                {/* Question */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                {/* Answer Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left border-2 rounded-lg transition-colors ${
                        selectedAnswers[currentQuestion] === index
                          ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex space-x-3">
                    {currentQuestion === questions.length - 1 ? (
                      <Button
                        onClick={handleSubmitExam}
                        className="bg-green-600 hover:bg-green-700"
                        disabled={selectedAnswers.some(
                          (answer) => answer === null,
                        )}
                      >
                        Submit Exam
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNextQuestion}
                        disabled={currentQuestion === questions.length - 1}
                      >
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Warning if questions unanswered */}
                {selectedAnswers.some((answer) => answer === null) &&
                  currentQuestion === questions.length - 1 && (
                    <div className="flex items-center space-x-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <p className="text-yellow-800 text-sm">
                        You have{" "}
                        {
                          selectedAnswers.filter((answer) => answer === null)
                            .length
                        }{" "}
                        unanswered questions.
                      </p>
                    </div>
                  )}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamInterface;
