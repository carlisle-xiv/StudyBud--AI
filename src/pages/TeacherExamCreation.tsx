import React from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, Brain, Check } from "lucide-react";

const TeacherExamCreation: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/teacher-dashboard");
  };

  const handleManualCreation = () => {
    navigate("/manual-exam-creation");
  };

  const handleAIGeneration = () => {
    // Navigate to AI exam generation flow
    console.log("Starting AI exam generation");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Header Section */}
        <section className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Create New Exam
            </h1>
            <p className="text-gray-600 text-lg">
              Design your exam manually or let AI generate questions from your
              course content
            </p>
          </div>

          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </section>

        {/* Main Options Section */}
        <section className="grid grid-cols-2 gap-6">
          {/* Manual Creation Card */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Manual Creation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Create exam questions yourself with full control over content
                and format
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-sm text-gray-600">
                  Custom question types
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-sm text-gray-600">Topic tagging</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-sm text-gray-600">
                  Difficulty control
                </span>
              </div>
            </div>

            <button
              onClick={handleManualCreation}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Start Manual Creation
            </button>
          </div>

          {/* AI Generation Card */}
          <div className="bg-white rounded-xl border-2 border-emerald-500 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                AI Generation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Let AI create questions automatically from your course materials
                and syllabus
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-sm text-gray-600">
                  Time-saving automation
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-sm text-gray-600">
                  Content-based questions
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-sm text-gray-600">
                  Smart difficulty mixing
                </span>
              </div>
            </div>

            <button
              onClick={handleAIGeneration}
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Generate with AI
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherExamCreation;
