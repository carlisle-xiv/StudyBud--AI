import React, { useState } from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Edit,
  Share2,
  Download,
  Calendar,
  Clock,
  FileText,
  Users,
  CheckCircle2,
  Eye,
  Settings,
  Brain,
  Sparkles,
} from "lucide-react";

interface Question {
  id: string;
  type: string;
  question: string;
  options?: string[];
  correctAnswer?: number;
  points: number;
  topic: string;
}

const ExamPreview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const examData = location.state?.examData;
  const source = location.state?.source; // 'ai-generation' or 'manual-creation'

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: number;
  }>({});

  // Sample exam data (in real app, this would come from the AI generation or manual creation)
  const sampleExam = {
    title: "Mathematics 101 - Midterm Exam",
    subject: "Mathematics",
    duration: 60,
    totalPoints: 100,
    difficulty: "Medium",
    instructions:
      "Read each question carefully. Select the best answer for multiple choice questions. Show your work where applicable. You have 60 minutes to complete this exam.",
    questions: [
      {
        id: "q1",
        type: "Multiple Choice",
        question:
          "What is the derivative of f(x) = 3x² + 2x - 5 with respect to x?",
        options: ["6x + 2", "3x + 2", "6x² + 2x", "6x - 2"],
        correctAnswer: 0,
        points: 5,
        topic: "Calculus - Derivatives",
      },
      {
        id: "q2",
        type: "Multiple Choice",
        question:
          "Which of the following is the correct formula for the area of a circle?",
        options: ["πr²", "2πr", "πd", "4πr²"],
        correctAnswer: 0,
        points: 3,
        topic: "Geometry - Area",
      },
      {
        id: "q3",
        type: "Multiple Choice",
        question: "Solve for x: 2x + 8 = 20",
        options: ["x = 4", "x = 6", "x = 8", "x = 10"],
        correctAnswer: 1,
        points: 4,
        topic: "Algebra - Linear Equations",
      },
      {
        id: "q4",
        type: "True/False",
        question: "The sum of angles in any triangle is always 180 degrees.",
        options: ["True", "False"],
        correctAnswer: 0,
        points: 2,
        topic: "Geometry - Triangles",
      },
      {
        id: "q5",
        type: "Multiple Choice",
        question: "What is the value of sin(30°)?",
        options: ["1/2", "√3/2", "√2/2", "1"],
        correctAnswer: 0,
        points: 4,
        topic: "Trigonometry",
      },
    ] as Question[],
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleBack = () => {
    if (source === "ai-generation") {
      navigate("/ai-exam-generation");
    } else {
      navigate("/manual-exam-creation");
    }
  };

  const handleEdit = () => {
    navigate("/manual-exam-creation", { state: { examData: sampleExam } });
  };

  const handlePublish = () => {
    console.log("Publishing exam...");
    // In real app, this would publish the exam
  };

  const handleSaveAsDraft = () => {
    console.log("Saving as draft...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-5xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to{" "}
              {source === "ai-generation" ? "AI Generation" : "Manual Creation"}
            </button>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">Exam Preview</h1>
              {source === "ai-generation" && (
                <div className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                  <Brain className="w-3 h-3" />
                  AI Generated
                </div>
              )}
            </div>
            <p className="text-gray-600">
              Review your exam before publishing to students
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit Exam
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Exam Info Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {sampleExam.title}
              </h2>
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{sampleExam.duration} minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{sampleExam.questions.length} questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{sampleExam.totalPoints} points</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span>{sampleExam.difficulty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Instructions for Students
            </h3>
            <p className="text-blue-800">{sampleExam.instructions}</p>
          </div>
        </div>

        {/* Questions Preview */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Questions</h3>
          </div>

          <div className="p-6">
            {sampleExam.questions.map((question, index) => (
              <div
                key={question.id}
                className="mb-8 last:mb-0 pb-8 last:pb-0 border-b border-gray-200 last:border-b-0"
              >
                {/* Question Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <span className="text-sm text-gray-600 font-medium">
                        {question.type}
                      </span>
                      <div className="text-xs text-gray-500">
                        {question.points} points • {question.topic}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question Text */}
                <div className="mb-4 ml-11">
                  <p className="text-gray-900 text-lg">{question.question}</p>
                </div>

                {/* Answer Options */}
                {question.options && (
                  <div className="ml-11 space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={selectedAnswers[question.id] === optionIndex}
                          onChange={() =>
                            handleAnswerSelect(question.id, optionIndex)
                          }
                          className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                        />
                        <span
                          className={`${
                            question.correctAnswer === optionIndex &&
                            selectedAnswers[question.id] !== undefined
                              ? "text-emerald-700 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </span>
                        {question.correctAnswer === optionIndex &&
                          selectedAnswers[question.id] !== undefined && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Generation Info */}
        {source === "ai-generation" && (
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6 mt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                  AI-Generated Exam
                </h3>
                <p className="text-emerald-800 mb-4">
                  This exam was intelligently created based on your selected
                  topics and difficulty preferences. Each question has been
                  carefully crafted to align with your learning objectives.
                </p>
                <div className="flex items-center gap-4 text-sm text-emerald-700">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Curriculum Aligned</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Difficulty Balanced</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Topic Coverage Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              onClick={handleSaveAsDraft}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              Save as Draft
            </button>
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Make Changes
            </button>
          </div>

          <button
            onClick={handlePublish}
            className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            Publish Exam
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExamPreview;
