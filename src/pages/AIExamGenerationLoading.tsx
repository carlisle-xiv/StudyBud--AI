import React, { useState, useEffect } from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import { useNavigate, useLocation } from "react-router-dom";
import { Brain, Sparkles, CheckCircle, Zap, BookOpen } from "lucide-react";

const AIExamGenerationLoading: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const examData = location.state?.examData;

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Analyzing Curriculum",
      description:
        "AI is studying your selected topics and learning objectives",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Generating Questions",
      description:
        "Creating high-quality questions tailored to your requirements",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Optimizing Difficulty",
      description:
        "Balancing question difficulty and ensuring comprehensive coverage",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Finalizing Exam",
      description: "Adding final touches and preparing your exam",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Navigate to exam preview after completion
          setTimeout(() => {
            navigate("/exam-preview", {
              state: { examData, source: "ai-generation" },
            });
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate, examData]);

  useEffect(() => {
    if (progress >= 25 && currentStep < 1) setCurrentStep(1);
    if (progress >= 50 && currentStep < 2) setCurrentStep(2);
    if (progress >= 75 && currentStep < 3) setCurrentStep(3);
    if (progress >= 95 && currentStep < 4) setCurrentStep(4);
  }, [progress, currentStep]);

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-emerald-600 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI is Creating Your Exam
          </h1>
          <p className="text-gray-600 text-lg">
            Our advanced AI is analyzing your requirements and generating
            personalized questions
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-emerald-600">
              {progress < 100 ? "Generating..." : "Complete!"}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Generation Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-300 ${
                index <= currentStep
                  ? "bg-white border-2 border-emerald-200 shadow-sm"
                  : "bg-gray-50 border-2 border-gray-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  index < currentStep
                    ? "bg-emerald-500 text-white"
                    : index === currentStep
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-gray-200 text-gray-400"
                }`}
              >
                {index < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  step.icon
                )}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                    index <= currentStep ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    index <= currentStep ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {step.description}
                </p>
              </div>
              {index === currentStep && progress < 100 && (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500" />
                </div>
              )}
              {index < currentStep && (
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Exam Configuration Summary */}
        {examData && (
          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Exam Configuration
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Subject:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {examData.subject || "Mathematics"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Questions:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {examData.config?.numQuestions || "20"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Difficulty:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {examData.config?.difficulty || "Medium"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Duration:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {examData.config?.duration || "60"} minutes
                </span>
              </div>
              {examData.topics && examData.topics.length > 0 && (
                <div className="col-span-2">
                  <span className="text-gray-600">Topics:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {examData.topics.join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Completion Message */}
        {progress >= 100 && (
          <div className="mt-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Exam Generated Successfully!
            </h2>
            <p className="text-gray-600">
              Redirecting you to the exam preview...
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AIExamGenerationLoading;
