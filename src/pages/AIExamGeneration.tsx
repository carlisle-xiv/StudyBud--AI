import React, { useState } from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Calculator,
  Atom,
  Dna,
  BookOpen,
  Monitor,
  ChevronDown,
  Brain,
  Sparkles,
  Zap,
  Check,
} from "lucide-react";

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  topics: string[];
}

const AIExamGeneration: React.FC = () => {
  const navigate = useNavigate();

  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [examConfig, setExamConfig] = useState({
    difficulty: "Medium",
    numQuestions: "20",
    questionTypes: "Mixed",
    duration: "60",
    totalPoints: "100",
  });

  const [examSettings, setExamSettings] = useState({
    randomizeQuestions: true,
    randomizeAnswers: true,
    showResultsImmediately: false,
    allowRetakes: false,
  });

  const subjects: Subject[] = [
    {
      id: "mathematics",
      name: "Mathematics",
      icon: <Calculator className="w-4 h-4" />,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      topics: [
        "Algebra",
        "Geometry",
        "Trigonometry",
        "Calculus",
        "Statistics",
        "Probability",
      ],
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: <Atom className="w-4 h-4" />,
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
      topics: [
        "Atomic Structure",
        "Chemical Bonding",
        "Organic Chemistry",
        "Acids and Bases",
        "Chemical Reactions",
        "Thermodynamics",
      ],
    },
    {
      id: "biology",
      name: "Biology",
      icon: <Dna className="w-4 h-4" />,
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      topics: [
        "Cell Biology",
        "Genetics",
        "Evolution",
        "Ecology",
        "Human Anatomy",
        "Molecular Biology",
      ],
    },
    {
      id: "physics",
      name: "Physics",
      icon: <Zap className="w-4 h-4" />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      topics: [
        "Mechanics",
        "Thermodynamics",
        "Electromagnetism",
        "Quantum Physics",
        "Optics",
        "Nuclear Physics",
      ],
    },
    {
      id: "computer-science",
      name: "Computer Science",
      icon: <Monitor className="w-4 h-4" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      topics: [
        "Programming",
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Software Engineering",
        "Machine Learning",
      ],
    },
    {
      id: "literature",
      name: "Literature",
      icon: <BookOpen className="w-4 h-4" />,
      bgColor: "bg-rose-100",
      iconColor: "text-rose-600",
      topics: [
        "Poetry Analysis",
        "Novel Studies",
        "Drama",
        "Literary Devices",
        "Critical Thinking",
        "Creative Writing",
      ],
    },
  ];

  const handleBackToExams = () => {
    navigate("/teacher-exam-creation");
  };

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setSelectedTopics([]); // Reset topics when subject changes
  };

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const handleConfigChange = (field: string, value: string) => {
    setExamConfig((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSetting = (setting: keyof typeof examSettings) => {
    setExamSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleGenerateExam = () => {
    const examData = {
      subject: selectedSubject,
      topics: selectedTopics,
      config: examConfig,
      settings: examSettings,
    };
    console.log("Generating AI exam with:", examData);
    // Navigate to loading screen with exam data
    navigate("/ai-exam-loading", { state: { examData } });
  };

  const selectedSubjectData = subjects.find((s) => s.id === selectedSubject);

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
          <span className="text-gray-900 font-medium">AI Exam Generation</span>
        </nav>

        {/* Header */}
        <section className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              AI Exam Generation
            </h1>
            <p className="text-gray-600">
              Let AI create a customized exam based on your preferences and
              curriculum
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

        {/* AI Features Banner */}
        <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Powered by Advanced AI
              </h2>
              <p className="text-emerald-100">
                Our AI analyzes your curriculum and generates high-quality
                questions tailored to your students' learning objectives
              </p>
            </div>
            <div className="flex gap-4 text-emerald-100 ml-auto">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Smart Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Instant Generation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Subject Selection */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Select Subject
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => handleSubjectSelect(subject.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedSubject === subject.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${subject.bgColor} rounded-lg flex items-center justify-center`}
                  >
                    <div className={subject.iconColor}>{subject.icon}</div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {subject.name}
                    </div>
                  </div>
                  {selectedSubject === subject.id && (
                    <div className="ml-auto">
                      <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Topics Selection */}
        {selectedSubjectData && (
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Select Topics to Cover
            </h2>
            <p className="text-gray-600 mb-4">
              Choose specific topics from {selectedSubjectData.name} that you
              want to include in the exam
            </p>
            <div className="grid grid-cols-3 gap-3">
              {selectedSubjectData.topics.map((topic) => (
                <label
                  key={topic}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() => handleTopicToggle(topic)}
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-gray-900">{topic}</span>
                </label>
              ))}
            </div>
            {selectedTopics.length > 0 && (
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <p className="text-emerald-800 text-sm">
                  <strong>{selectedTopics.length} topics selected:</strong>{" "}
                  {selectedTopics.join(", ")}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Exam Configuration */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Exam Configuration
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <div className="relative">
                <select
                  value={examConfig.difficulty}
                  onChange={(e) =>
                    handleConfigChange("difficulty", e.target.value)
                  }
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-gray-900"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                  <option value="Mixed">Mixed (Easy to Hard)</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Questions
              </label>
              <div className="relative">
                <select
                  value={examConfig.numQuestions}
                  onChange={(e) =>
                    handleConfigChange("numQuestions", e.target.value)
                  }
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-gray-900"
                >
                  <option value="10">10 Questions</option>
                  <option value="15">15 Questions</option>
                  <option value="20">20 Questions</option>
                  <option value="25">25 Questions</option>
                  <option value="30">30 Questions</option>
                  <option value="40">40 Questions</option>
                  <option value="50">50 Questions</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question Types
              </label>
              <div className="relative">
                <select
                  value={examConfig.questionTypes}
                  onChange={(e) =>
                    handleConfigChange("questionTypes", e.target.value)
                  }
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-gray-900"
                >
                  <option value="Mixed">Mixed (All Types)</option>
                  <option value="Multiple Choice">Multiple Choice Only</option>
                  <option value="True/False">True/False Only</option>
                  <option value="Short Answer">Short Answer Only</option>
                  <option value="MCQ + True/False">
                    Multiple Choice + True/False
                  </option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                value={examConfig.duration}
                onChange={(e) => handleConfigChange("duration", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Points
            </label>
            <input
              type="number"
              value={examConfig.totalPoints}
              onChange={(e) =>
                handleConfigChange("totalPoints", e.target.value)
              }
              className="w-64 px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
            />
          </div>
        </section>

        {/* Exam Settings */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
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
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    examSettings.randomizeQuestions
                      ? "bg-emerald-600"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                      examSettings.randomizeQuestions
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
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    examSettings.randomizeAnswers
                      ? "bg-emerald-600"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                      examSettings.randomizeAnswers
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
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    examSettings.showResultsImmediately
                      ? "bg-emerald-600"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                      examSettings.showResultsImmediately
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
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    examSettings.allowRetakes ? "bg-emerald-600" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                      examSettings.allowRetakes
                        ? "translate-x-5"
                        : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Generate Button */}
        <section className="flex justify-center">
          <button
            onClick={handleGenerateExam}
            disabled={!selectedSubject || selectedTopics.length === 0}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
              selectedSubject && selectedTopics.length > 0
                ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <Brain className="w-6 h-6" />
            Generate AI Exam
            <Sparkles className="w-5 h-5" />
          </button>
        </section>

        {selectedSubject && selectedTopics.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            Please select at least one topic to generate your exam
          </p>
        )}
      </main>
    </div>
  );
};

export default AIExamGeneration;
