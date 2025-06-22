import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  hint: string;
  options: string[];
  correctAnswer: number;
  subject: string;
}

const ExamInterface = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(4); // Starting at question 5 (0-indexed)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(20).fill(null),
  );
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(
    new Set([7]), // Question 8 is flagged (0-indexed)
  );
  const [timeRemaining, setTimeRemaining] = useState(2723); // 45:23 in seconds

  // Initialize answered questions (1-4 are answered)
  useEffect(() => {
    const initialAnswers = new Array(20).fill(null);
    initialAnswers[0] = 0; // Question 1 answered
    initialAnswers[1] = 1; // Question 2 answered
    initialAnswers[2] = 2; // Question 3 answered
    initialAnswers[3] = 0; // Question 4 answered
    setSelectedAnswers(initialAnswers);
  }, []);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const questions: Question[] = [
    {
      id: 1,
      question: "Find the derivative of f(x) = 3x³ - 2x² + 5x - 1 at x = 2.",
      hint: "Use the power rule to find f'(x), then evaluate at the given point.",
      options: ["f'(2) = 31", "f'(2) = 25", "f'(2) = 28", "f'(2) = 33"],
      correctAnswer: 0,
      subject: "Calculus",
    },
    // Add more questions as needed
    ...Array(19)
      .fill(null)
      .map((_, index) => ({
        id: index + 2,
        question: `Sample question ${index + 2} for demonstration purposes.`,
        hint: "This is a sample hint for the question.",
        options: [
          `Option A for question ${index + 2}`,
          `Option B for question ${index + 2}`,
          `Option C for question ${index + 2}`,
          `Option D for question ${index + 2}`,
        ],
        correctAnswer: 0,
        subject: "Calculus",
      })),
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getQuestionStatus = (index: number) => {
    if (index === currentQuestion) return "current";
    if (selectedAnswers[index] !== null) return "answered";
    if (flaggedQuestions.has(index)) return "flagged";
    return "unanswered";
  };

  const getQuestionButtonClass = (index: number) => {
    const status = getQuestionStatus(index);
    switch (status) {
      case "current":
        return "bg-indigo-600 text-white";
      case "answered":
        return "bg-green-100 text-green-800";
      case "flagged":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleClearAnswer = () => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = null;
    setSelectedAnswers(newAnswers);
  };

  const handleFlagQuestion = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleQuestionNavigation = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
  };

  const handleSubmitExam = () => {
    // Handle exam submission
    navigate("/dashboard");
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const completedQuestions = selectedAnswers.filter(
    (answer) => answer !== null,
  ).length;
  const completionPercentage = Math.round(
    (completedQuestions / questions.length) * 100,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-lg">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyBuddy AI
              </span>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Sarah Chen
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Exam Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToDashboard}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Mathematics - Calculus
                </h1>
                <p className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center space-x-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              <Clock className="h-4 w-4 text-red-600" />
              <span className="text-lg font-medium text-red-600">
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{completionPercentage}% Complete</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        <div className="flex gap-8">
          {/* Main Exam Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              {/* Question Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full text-white font-semibold">
                    {currentQuestion + 1}
                  </div>
                  <span className="text-gray-600 font-medium">
                    Multiple Choice
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFlagQuestion}
                  className={
                    flaggedQuestions.has(currentQuestion)
                      ? "text-yellow-600"
                      : "text-gray-400"
                  }
                >
                  <Flag className="h-4 w-4" />
                </Button>
              </div>

              {/* Question Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-3">
                    {currentQuestionData.question}
                  </h2>
                  <p className="text-gray-600">{currentQuestionData.hint}</p>
                </div>

                {/* Answer Options */}
                <div className="space-y-4 mb-8">
                  {currentQuestionData.options.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="answer"
                        value={index}
                        checked={selectedAnswers[currentQuestion] === index}
                        onChange={() => handleAnswerSelect(index)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className="text-gray-800">{option}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="flex items-center space-x-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </Button>

                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      onClick={handleClearAnswer}
                      className="text-gray-600"
                    >
                      Clear Answer
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={currentQuestion === questions.length - 1}
                      className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Navigator Sidebar */}
          <div className="w-56">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-6">
                Question Navigator
              </h3>

              {/* Question Grid */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionNavigation(index)}
                    className={`
                      w-10 h-10 rounded-lg text-sm font-medium transition-colors relative
                      ${getQuestionButtonClass(index)}
                    `}
                  >
                    {index + 1}
                    {flaggedQuestions.has(index) && (
                      <Flag className="h-3 w-3 absolute -top-1 -right-1 text-yellow-600" />
                    )}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-4 h-4 bg-green-100 rounded"></div>
                  <span className="text-gray-600">Answered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-4 h-4 bg-indigo-600 rounded"></div>
                  <span className="text-gray-600">Current</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-4 h-4 bg-yellow-100 rounded flex items-center justify-center">
                    <Flag className="h-2 w-2 text-yellow-600" />
                  </div>
                  <span className="text-gray-600">Flagged</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-4 h-4 bg-gray-100 rounded"></div>
                  <span className="text-gray-600">Not answered</span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmitExam}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Submit Exam
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;
