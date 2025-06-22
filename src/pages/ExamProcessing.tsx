import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  CheckCircle,
  Clock,
  Sparkles,
  BarChart3,
  Eye,
} from "lucide-react";

interface ProcessingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  completed: boolean;
  duration: number; // in milliseconds
}

const ExamProcessing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Get exam data from navigation state or use default
  const examData = location.state?.examData || {
    examId: "calculus-exam-1",
    subject: "Mathematics",
    examName: "Calculus",
  };

  const steps: ProcessingStep[] = [
    {
      id: "grading",
      title: "Grading Exam",
      description: "Evaluating your answers and calculating scores...",
      icon: CheckCircle,
      completed: false,
      duration: 2000,
    },
    {
      id: "analyzing",
      title: "Preparing Student Results Insight",
      description: "AI is analyzing your performance patterns...",
      icon: Sparkles,
      completed: false,
      duration: 3000,
    },
    {
      id: "generating",
      title: "Generating Performance Report",
      description: "Creating detailed insights and recommendations...",
      icon: BarChart3,
      completed: false,
      duration: 2000,
    },
  ];

  const [processingSteps, setProcessingSteps] = useState(steps);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    const processNextStep = (stepIndex: number) => {
      if (stepIndex >= processingSteps.length) {
        setProgress(100);
        setShowButton(true);
        return;
      }

      setCurrentStep(stepIndex);

      // Start progress for current step
      const stepDuration = processingSteps[stepIndex].duration;
      const progressIncrement =
        100 / processingSteps.length / (stepDuration / 50);
      const baseProgress = (stepIndex / processingSteps.length) * 100;

      let currentProgress = 0;
      progressInterval = setInterval(() => {
        currentProgress += progressIncrement;
        const totalProgress =
          baseProgress +
          (currentProgress / 100) * (100 / processingSteps.length);
        setProgress(
          Math.min(
            totalProgress,
            (stepIndex + 1) * (100 / processingSteps.length),
          ),
        );

        if (currentProgress >= 100) {
          clearInterval(progressInterval);

          // Mark step as completed
          setProcessingSteps((prev) =>
            prev.map((step, index) =>
              index === stepIndex ? { ...step, completed: true } : step,
            ),
          );

          // Move to next step after a brief pause
          timeoutId = setTimeout(() => {
            processNextStep(stepIndex + 1);
          }, 500);
        }
      }, 50);
    };

    // Start processing
    const initialDelay = setTimeout(() => {
      processNextStep(0);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelay);
      clearInterval(progressInterval);
    };
  }, []);

  const handleViewReport = () => {
    navigate(`/reports/${examData.examId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Processing Your Exam
          </h1>
          <p className="text-gray-600">
            Our AI is analyzing your performance and preparing detailed insights
          </p>
        </div>

        {/* Processing Steps */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              {processingSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === currentStep;
                const isCompleted = step.completed;
                const isUpcoming = index > currentStep;

                return (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-4 transition-all duration-300 ${
                      isActive
                        ? "opacity-100"
                        : isCompleted
                          ? "opacity-80"
                          : "opacity-40"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? "bg-green-100 text-green-600"
                          : isActive
                            ? "bg-indigo-100 text-indigo-600 animate-pulse"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <IconComponent className="h-6 w-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold transition-colors duration-300 ${
                          isCompleted
                            ? "text-green-900"
                            : isActive
                              ? "text-indigo-900"
                              : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          isCompleted
                            ? "text-green-600"
                            : isActive
                              ? "text-indigo-600"
                              : "text-gray-400"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping animation-delay-200"></div>
                        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping animation-delay-400"></div>
                      </div>
                    )}
                    {isCompleted && (
                      <div className="text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Processing Progress</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-3 bg-gray-200" />
        </div>

        {/* Action Button */}
        <div className="text-center">
          {showButton ? (
            <Button
              onClick={handleViewReport}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold animate-in slide-in-from-bottom duration-500"
            >
              <Eye className="h-5 w-5 mr-2" />
              See Report
            </Button>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Clock className="h-5 w-5" />
              <span>Please wait while we process your exam...</span>
            </div>
          )}
        </div>

        {/* Estimated Time */}
        {!showButton && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Estimated time remaining:{" "}
              {Math.max(0, 7 - Math.round((progress / 100) * 7))} seconds
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default ExamProcessing;
