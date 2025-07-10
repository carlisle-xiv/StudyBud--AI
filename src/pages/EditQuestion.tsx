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
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Eye,
  Flag,
  Plus,
  Trash2,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  User,
  Calendar,
  BookOpen,
} from "lucide-react";

const EditQuestion = () => {
  const navigate = useNavigate();
  const { questionId } = useParams();

  // Mock question data - in real app this would come from API
  const [questionData, setQuestionData] = useState({
    id: questionId,
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
    correctAnswer: 2, // Index of correct answer
    explanation: "Using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a",
    difficulty: "medium",
    points: 5,
    timeLimit: 120, // seconds
    tags: ["algebra", "quadratic-equations", "problem-solving"],
    flagReason: "confusion",
    flaggedBy: 8,
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
    ],
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleQuestionChange = (value: string) => {
    setQuestionData((prev) => ({ ...prev, question: value }));
    setHasChanges(true);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData((prev) => ({ ...prev, options: newOptions }));
    setHasChanges(true);
  };

  const handleCorrectAnswerChange = (index: number) => {
    setQuestionData((prev) => ({ ...prev, correctAnswer: index }));
    setHasChanges(true);
  };

  const handleExplanationChange = (value: string) => {
    setQuestionData((prev) => ({ ...prev, explanation: value }));
    setHasChanges(true);
  };

  const addOption = () => {
    if (questionData.options.length < 6) {
      setQuestionData((prev) => ({
        ...prev,
        options: [...prev.options, ""],
      }));
      setHasChanges(true);
    }
  };

  const removeOption = (index: number) => {
    if (questionData.options.length > 2) {
      const newOptions = questionData.options.filter((_, i) => i !== index);
      setQuestionData((prev) => ({
        ...prev,
        options: newOptions,
        correctAnswer:
          prev.correctAnswer === index
            ? 0
            : prev.correctAnswer > index
              ? prev.correctAnswer - 1
              : prev.correctAnswer,
      }));
      setHasChanges(true);
    }
  };

  const handleSave = () => {
    // In real app, this would save to API
    console.log("Saving question:", questionData);
    setHasChanges(false);
    // Show success message or redirect
    navigate("/teacher-question-review");
  };

  const handlePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/teacher-question-review")}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Review
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Edit Question {questionData.questionId}
                </h1>
                <p className="text-gray-600 mt-2">
                  {questionData.course} • {questionData.exam}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className={getDifficultyColor(questionData.difficulty)}>
                {questionData.difficulty}
              </Badge>
              <Badge className="bg-red-100 text-red-800">
                Flagged by {questionData.flaggedBy} students
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Question Content */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Question Content
                </h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePreview}
                    className="flex items-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {isPreviewMode ? "Edit" : "Preview"}
                  </Button>
                </div>
              </div>

              {isPreviewMode ? (
                /* Preview Mode */
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800">Preview</Badge>
                    <span className="text-sm text-gray-600">
                      {questionData.points} points • {questionData.timeLimit}s
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    {questionData.question}
                  </h4>
                  <div className="space-y-2">
                    {questionData.options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          index === questionData.correctAnswer
                            ? "bg-green-100 border-green-300"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              index === questionData.correctAnswer
                                ? "border-green-600 bg-green-600"
                                : "border-gray-300"
                            }`}
                          >
                            {index === questionData.correctAnswer && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-gray-700">
                            {String.fromCharCode(65 + index)}. {option}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {questionData.explanation && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm font-medium text-yellow-800">
                        Explanation:
                      </p>
                      <p className="text-sm text-yellow-700">
                        {questionData.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Edit Mode */
                <div className="space-y-6">
                  {/* Question Text */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Text *
                    </label>
                    <textarea
                      value={questionData.question}
                      onChange={(e) => handleQuestionChange(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      rows={3}
                      placeholder="Enter your question here..."
                    />
                  </div>

                  {/* Answer Options */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Answer Options *
                      </label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={addOption}
                        disabled={questionData.options.length >= 6}
                        className="flex items-center"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Option
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {questionData.options.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <button
                            onClick={() => handleCorrectAnswerChange(index)}
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                              index === questionData.correctAnswer
                                ? "border-green-600 bg-green-600"
                                : "border-gray-300 hover:border-green-400"
                            }`}
                          >
                            {index === questionData.correctAnswer && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </button>
                          <span className="text-sm font-medium text-gray-600 w-6">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          <input
                            type="text"
                            value={option}
                            onChange={(e) =>
                              handleOptionChange(index, e.target.value)
                            }
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder={`Option ${String.fromCharCode(65 + index)}`}
                          />
                          {questionData.options.length > 2 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeOption(index)}
                              className="p-2 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Click the circle to mark the correct answer
                    </p>
                  </div>

                  {/* Explanation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Explanation (Optional)
                    </label>
                    <textarea
                      value={questionData.explanation}
                      onChange={(e) => handleExplanationChange(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                      rows={2}
                      placeholder="Provide an explanation for the correct answer..."
                    />
                  </div>
                </div>
              )}
            </Card>

            {/* Question Settings */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Question Settings
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                  </label>
                  <Select
                    value={questionData.difficulty}
                    onValueChange={(value) => {
                      setQuestionData((prev) => ({
                        ...prev,
                        difficulty: value,
                      }));
                      setHasChanges(true);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points
                  </label>
                  <input
                    type="number"
                    value={questionData.points}
                    onChange={(e) => {
                      setQuestionData((prev) => ({
                        ...prev,
                        points: parseInt(e.target.value) || 0,
                      }));
                      setHasChanges(true);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    min="1"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Limit (sec)
                  </label>
                  <input
                    type="number"
                    value={questionData.timeLimit}
                    onChange={(e) => {
                      setQuestionData((prev) => ({
                        ...prev,
                        timeLimit: parseInt(e.target.value) || 0,
                      }));
                      setHasChanges(true);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    min="30"
                    max="600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Type
                  </label>
                  <Select
                    value={questionData.type}
                    onValueChange={(value) => {
                      setQuestionData((prev) => ({ ...prev, type: value }));
                      setHasChanges(true);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple_choice">
                        Multiple Choice
                      </SelectItem>
                      <SelectItem value="true_false">True/False</SelectItem>
                      <SelectItem value="short_answer">Short Answer</SelectItem>
                      <SelectItem value="essay">Essay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Question Info */}
            <Card className="p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Question Details
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Question ID:</span>
                  <span className="ml-2 font-medium">
                    {questionData.questionId}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Course:</span>
                  <span className="ml-2 font-medium">
                    {questionData.course}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Exam:</span>
                  <span className="ml-2 font-medium">{questionData.exam}</span>
                </div>
                <div>
                  <span className="text-gray-500">Flag Reason:</span>
                  <span className="ml-2 font-medium capitalize">
                    {questionData.flagReason.replace("_", " ")}
                  </span>
                </div>
              </div>
            </Card>

            {/* Student Reports */}
            <Card className="p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Student Reports ({questionData.reports.length})
              </h4>
              <div className="space-y-3">
                {questionData.reports.map((report, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-red-900 text-sm">
                        {report.student}
                      </span>
                      <span className="text-red-600 text-xs">
                        {report.timestamp}
                      </span>
                    </div>
                    <p className="text-red-800 text-sm">{report.comment}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <Card className="p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Actions</h4>
              <div className="space-y-3">
                <Button
                  onClick={handleSave}
                  disabled={!hasChanges}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/teacher-question-review")}
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
              {hasChanges && (
                <p className="text-xs text-orange-600 mt-2 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  You have unsaved changes
                </p>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;
