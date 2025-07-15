import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Brain,
  BookOpen,
  Clock,
  Users,
  ChevronRight,
  Play,
  ArrowLeft,
  Calculator,
  Atom,
  Beaker,
  Globe,
  History,
  Palette,
} from "lucide-react";

interface ExamType {
  id: string;
  title: string;
  subject: string;
  description: string;
  duration: number;
  questions: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  icon: React.ReactNode;
  color: string;
}

const ExamSelection = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const examTypes: ExamType[] = [
    {
      id: "calculus",
      title: "Calculus Fundamentals",
      subject: "Mathematics",
      description: "Test your knowledge of derivatives, integrals, and limits",
      duration: 60,
      questions: 20,
      difficulty: "Intermediate",
      icon: <Calculator className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      id: "physics-mechanics",
      title: "Physics - Mechanics",
      subject: "Physics",
      description: "Explore force, motion, energy, and momentum concepts",
      duration: 75,
      questions: 25,
      difficulty: "Intermediate",
      icon: <Atom className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      id: "organic-chemistry",
      title: "Organic Chemistry",
      subject: "Chemistry",
      description: "Master organic compounds, reactions, and mechanisms",
      duration: 90,
      questions: 30,
      difficulty: "Advanced",
      icon: <Beaker className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      id: "world-history",
      title: "World History",
      subject: "History",
      description: "Journey through major historical events and civilizations",
      duration: 45,
      questions: 15,
      difficulty: "Beginner",
      icon: <History className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      id: "geography",
      title: "Physical Geography",
      subject: "Geography",
      description: "Understand Earth's physical features and processes",
      duration: 50,
      questions: 18,
      difficulty: "Beginner",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-teal-500",
    },
    {
      id: "art-history",
      title: "Art History Survey",
      subject: "Art",
      description: "Explore major art movements and influential artists",
      duration: 40,
      questions: 12,
      difficulty: "Beginner",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-pink-500",
    },
  ];

  const subjects = Array.from(new Set(examTypes.map((exam) => exam.subject)));

  const filteredExams = selectedSubject
    ? examTypes.filter((exam) => exam.subject === selectedSubject)
    : examTypes;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
                StudyBud
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/student-dashboard">
                <Button variant="outline" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Choose Your Exam
                </h1>
                <p className="text-gray-600">
                  Select an exam to test your knowledge and improve your skills
                </p>
              </div>
            </div>
          </div>

          {/* Subject Filter */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Filter by Subject
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubject(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${!selectedSubject
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                All Subjects
              </button>
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedSubject === subject
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </Card>

          {/* Exam Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => (
              <Card
                key={exam.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate("/exam")}
              >
                <div className="p-6 space-y-4">
                  {/* Icon and Subject */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 ${exam.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      {exam.icon}
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}
                    >
                      {exam.difficulty}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {exam.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{exam.subject}</p>
                    <p className="text-gray-600">{exam.description}</p>
                  </div>

                  {/* Exam Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{exam.duration} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{exam.questions} questions</span>
                    </div>
                  </div>

                  {/* Start Button */}
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <Play className="h-4 w-4 mr-2" />
                    Start Exam
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  {examTypes.length} Exams Available
                </h4>
                <p className="text-sm text-gray-600">
                  Across {subjects.length} different subjects
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">AI-Powered</h4>
                <p className="text-sm text-gray-600">
                  Adaptive questions based on your performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Instant Results</h4>
                <p className="text-sm text-gray-600">
                  Get detailed feedback and improvement suggestions
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExamSelection;
