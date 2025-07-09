import React, { useState } from "react";
import TeacherNavigation from "@/components/TeacherNavigation";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Calculator,
  Atom,
  Dna,
  Plus,
  ChevronDown,
  Copy,
  Trash2,
  Eye,
  Save,
  Check,
} from "lucide-react";

interface Course {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  selected?: boolean;
}

interface Question {
  id: string;
  type: string;
  points: number;
  text: string;
  options: string[];
  correctAnswer?: number;
  topic: string;
  explanation?: string;
}

const ManualExamCreation: React.FC = () => {
  const navigate = useNavigate();

  const [selectedCourse, setSelectedCourse] = useState<string>("math101");
  const [examData, setExamData] = useState({
    title: "",
    duration: "60",
    difficulty: "Easy",
    totalPoints: "100",
    instructions: "",
  });

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "q1",
      type: "Multiple Choice",
      points: 5,
      text: "",
      options: ["", "", "", ""],
      topic: "Chapter 1: Basic Algebra",
    },
  ]);

  const [examSettings, setExamSettings] = useState({
    randomizeQuestions: false,
    randomizeAnswers: false,
    showResultsImmediately: false,
    allowRetakes: false,
  });

  const courses: Course[] = [
    {
      id: "math101",
      name: "Mathematics 101",
      description: "Basic Algebra & Geometry",
      icon: <Calculator className="w-3 h-4" />,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      selected: selectedCourse === "math101",
    },
    {
      id: "chem201",
      name: "Chemistry 201",
      description: "Organic Chemistry",
      icon: <Atom className="w-4 h-4" />,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      id: "bio101",
      name: "Biology 101",
      description: "Cell Biology & Genetics",
      icon: <Dna className="w-3.5 h-4" />,
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ];

  const handleBackToExams = () => {
    navigate("/teacher-exam-creation");
  };

  const handleInputChange = (field: string, value: string) => {
    setExamData((prev) => ({ ...prev, [field]: value }));
  };

  const addQuestion = () => {
    const newQuestion: Question = {
      id: `q${questions.length + 1}`,
      type: "Multiple Choice",
      points: 5,
      text: "",
      options: ["", "", "", ""],
      topic: "Chapter 1: Basic Algebra",
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updates } : q)),
    );
  };

  const deleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const toggleSetting = (setting: keyof typeof examSettings) => {
    setExamSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handlePreview = () => {
    const previewData = {
      title: examData.title || "Sample Exam",
      duration: examData.duration,
      difficulty: examData.difficulty,
      totalPoints: examData.totalPoints,
      instructions: examData.instructions,
      questions: questions,
      settings: examSettings,
    };
    navigate("/exam-preview", {
      state: {
        examData: previewData,
        source: "manual-creation",
      },
    });
  };

  const handleSaveAsDraft = () => {
    console.log("Save as draft");
  };

  const handlePublish = () => {
    console.log("Publish exam");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-600 mb-8">
          <span>Dashboard</span>
          <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
          <span>Exams</span>
          <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
          <span className="text-gray-900 font-medium">Create Exam</span>
        </nav>

        {/* Header */}
        <section className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Create New Exam
            </h1>
            <p className="text-gray-600">
              Build your exam manually with full control over questions and
              settings
            </p>
          </div>

          <button
            onClick={handleBackToExams}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-4" />
            Back to Exams
          </button>
        </section>

        {/* Select Course */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Select Course
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`p-4 rounded-lg border-2 transition-all ${course.selected
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-10 ${course.bgColor} rounded-lg flex items-center justify-center`}
                  >
                    <div className={course.iconColor}>{course.icon}</div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {course.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {course.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Exam Details */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Exam Details
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Title
              </label>
              <input
                type="text"
                value={examData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="e.g., Midterm Exam - Chapter 1-5"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={examData.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
                placeholder="60"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="relative">
                <select
                  value={examData.difficulty}
                  onChange={(e) =>
                    handleInputChange("difficulty", e.target.value)
                  }
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none text-gray-900"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
                <ChevronDown className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Points
              </label>
              <input
                type="number"
                value={examData.totalPoints}
                onChange={(e) =>
                  handleInputChange("totalPoints", e.target.value)
                }
                placeholder="100"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructions
            </label>
            <textarea
              value={examData.instructions}
              onChange={(e) =>
                handleInputChange("instructions", e.target.value)
              }
              rows={4}
              placeholder="Enter exam instructions for students..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
            />
          </div>
        </section>

        {/* Questions */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="flex justify-between items-center p-6 pb-0">
            <h2 className="text-xl font-semibold text-gray-900">Questions</h2>
            <button
              onClick={addQuestion}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-3.5 h-4" />
              Add Question
            </button>
          </div>

          <div className="p-6">
            {questions.map((question, index) => (
              <div
                key={question.id}
                className="border border-gray-200 rounded-lg p-4 mb-6 last:mb-0"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-7 bg-indigo-600 text-white rounded text-sm font-medium flex items-center justify-center">
                      Q{index + 1}
                    </span>
                    <div className="relative">
                      <select
                        value={question.type}
                        onChange={(e) =>
                          updateQuestion(question.id, { type: e.target.value })
                        }
                        className="px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                      >
                        <option value="Multiple Choice">Multiple Choice</option>
                        <option value="True/False">True/False</option>
                        <option value="Short Answer">Short Answer</option>
                        <option value="Essay">Essay</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    <input
                      type="number"
                      value={question.points}
                      onChange={(e) =>
                        updateQuestion(question.id, {
                          points: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-16 px-2 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteQuestion(question.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question
                  </label>
                  <textarea
                    value={question.text}
                    onChange={(e) =>
                      updateQuestion(question.id, { text: e.target.value })
                    }
                    rows={3}
                    placeholder="Enter your question here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  />
                </div>

                {/* Answer Options */}
                {question.type === "Multiple Choice" && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name={`correct-${question.id}`}
                          checked={question.correctAnswer === optionIndex}
                          onChange={() =>
                            updateQuestion(question.id, {
                              correctAnswer: optionIndex,
                            })
                          }
                          className="text-indigo-600"
                        />
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...question.options];
                            newOptions[optionIndex] = e.target.value;
                            updateQuestion(question.id, {
                              options: newOptions,
                            });
                          }}
                          placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                          className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Topic and Explanation */}
                <div className="flex items-center justify-between">
                  <div className="w-64">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Topic/Module
                    </label>
                    <div className="relative">
                      <select
                        value={question.topic}
                        onChange={(e) =>
                          updateQuestion(question.id, { topic: e.target.value })
                        }
                        className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                      >
                        <option value="Chapter 1: Basic Algebra">
                          Chapter 1: Basic Algebra
                        </option>
                        <option value="Chapter 2: Geometry">
                          Chapter 2: Geometry
                        </option>
                        <option value="Chapter 3: Trigonometry">
                          Chapter 3: Trigonometry
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    + Add Explanation
                  </button>
                </div>
              </div>
            ))}

            {/* Add Question Button */}
            <button
              onClick={addQuestion}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
            >
              <Plus className="w-6 h-7 mx-auto mb-2 text-gray-400" />
              <div className="text-gray-600 mb-4">
                Add more questions to your exam
              </div>
              <div className="bg-indigo-600 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-indigo-700 transition-colors">
                Add Question
              </div>
            </button>
          </div>
        </section>

        {/* Exam Settings */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Exam Settings
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Randomize Questions
                  </div>
                  <div className="text-sm text-gray-600">
                    Shuffle question order for each student
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting("randomizeQuestions")}
                  className={`relative w-11 h-6 rounded-full transition-colors ${examSettings.randomizeQuestions
                    ? "bg-indigo-600"
                    : "bg-gray-200"
                    }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${examSettings.randomizeQuestions
                      ? "translate-x-5"
                      : "translate-x-0.5"
                      }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Randomize Answers
                  </div>
                  <div className="text-sm text-gray-600">
                    Shuffle answer choices for MCQs
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting("randomizeAnswers")}
                  className={`relative w-11 h-6 rounded-full transition-colors ${examSettings.randomizeAnswers
                    ? "bg-indigo-600"
                    : "bg-gray-200"
                    }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${examSettings.randomizeAnswers
                      ? "translate-x-5"
                      : "translate-x-0.5"
                      }`}
                  />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Show Results Immediately
                  </div>
                  <div className="text-sm text-gray-600">
                    Students see scores after submission
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting("showResultsImmediately")}
                  className={`relative w-11 h-6 rounded-full transition-colors ${examSettings.showResultsImmediately
                    ? "bg-indigo-600"
                    : "bg-gray-200"
                    }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${examSettings.showResultsImmediately
                      ? "translate-x-5"
                      : "translate-x-0.5"
                      }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Allow Retakes</div>
                  <div className="text-sm text-gray-600">
                    Students can retake the exam
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting("allowRetakes")}
                  className={`relative w-11 h-6 rounded-full transition-colors ${examSettings.allowRetakes ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${examSettings.allowRetakes
                      ? "translate-x-5"
                      : "translate-x-0.5"
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <section className="flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={handlePreview}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <Eye className="w-4.5 h-4" />
              Preview Exam
            </button>
            <button
              onClick={handleSaveAsDraft}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Save className="w-3.5 h-4" />
              Save as Draft
            </button>
          </div>

          <button
            onClick={handlePublish}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Check className="w-3.5 h-4" />
            Publish Exam
          </button>
        </section>
      </main>
    </div>
  );
};

export default ManualExamCreation;
