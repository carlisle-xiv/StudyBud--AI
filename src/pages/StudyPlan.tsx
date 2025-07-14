import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentNavigation from "../components/StudentNavigation";
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
import {
  ArrowLeft,
  Calendar,
  Clock,
  Target,
  Brain,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Star,
  Play,
  Download,
  Settings,
  Zap,
  Award,
  FileText,
  BarChart3,
} from "lucide-react";

const StudyPlan: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("week");
  const [selectedSubject, setSelectedSubject] = useState("all");

  // Study plan data
  const studyPlan = {
    week: {
      totalHours: 25,
      sessions: 8,
      subjects: 4,
      goals: [
        {
          id: 1,
          subject: "Calculus",
          topic: "Integration Techniques",
          priority: "high",
          timeEstimate: "3 hours",
          difficulty: "Advanced",
          status: "in-progress",
          dueDate: "2024-03-18",
          progress: 60,
          tasks: [
            "Review integration by parts",
            "Practice 15 problems",
            "Watch video tutorials",
            "Complete practice test",
          ],
        },
        {
          id: 2,
          subject: "Physics",
          topic: "Electromagnetic Fields",
          priority: "high",
          timeEstimate: "4 hours",
          difficulty: "Advanced",
          status: "not-started",
          dueDate: "2024-03-19",
          progress: 0,
          tasks: [
            "Read Chapter 12",
            "Solve example problems",
            "Lab preparation",
            "Review equations",
          ],
        },
        {
          id: 3,
          subject: "Chemistry",
          topic: "Organic Reactions",
          priority: "medium",
          timeEstimate: "2.5 hours",
          difficulty: "Intermediate",
          status: "completed",
          dueDate: "2024-03-16",
          progress: 100,
          tasks: [
            "Memorize reaction mechanisms",
            "Practice naming compounds",
            "Review stereochemistry",
            "Complete homework set",
          ],
        },
        {
          id: 4,
          subject: "Statistics",
          topic: "Hypothesis Testing",
          priority: "medium",
          timeEstimate: "2 hours",
          difficulty: "Intermediate",
          status: "in-progress",
          dueDate: "2024-03-20",
          progress: 40,
          tasks: [
            "Understand p-values",
            "Practice t-tests",
            "Work through examples",
            "Prepare for quiz",
          ],
        },
      ],
    },
  };

  const dailySchedule = [
    {
      day: "Monday",
      date: "March 18",
      sessions: [
        {
          time: "9:00 AM",
          duration: "2 hours",
          subject: "Calculus",
          topic: "Integration by Parts",
          type: "Study Session",
          location: "Library",
        },
        {
          time: "2:00 PM",
          duration: "1 hour",
          subject: "Physics",
          topic: "Review Electromagnetic Theory",
          type: "Reading",
          location: "Dorm",
        },
      ],
    },
    {
      day: "Tuesday",
      date: "March 19",
      sessions: [
        {
          time: "10:00 AM",
          duration: "1.5 hours",
          subject: "Physics",
          topic: "Lab: Electromagnetic Fields",
          type: "Lab Work",
          location: "Physics Lab",
        },
        {
          time: "3:00 PM",
          duration: "1 hour",
          subject: "Statistics",
          topic: "Hypothesis Testing Practice",
          type: "Problem Solving",
          location: "Study Room",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "March 20",
      sessions: [
        {
          time: "11:00 AM",
          duration: "2 hours",
          subject: "Calculus",
          topic: "Practice Problems",
          type: "Practice",
          location: "Math Center",
        },
        {
          time: "4:00 PM",
          duration: "1 hour",
          subject: "Statistics",
          topic: "Quiz Preparation",
          type: "Review",
          location: "Library",
        },
      ],
    },
  ];

  const studyTips = [
    {
      icon: Brain,
      title: "Use Active Recall",
      description: "Test yourself frequently instead of just re-reading notes",
      timesSaved: "30 minutes",
    },
    {
      icon: Clock,
      title: "Pomodoro Technique",
      description: "Study in 25-minute focused intervals with 5-minute breaks",
      timesSaved: "45 minutes",
    },
    {
      icon: Target,
      title: "Set Specific Goals",
      description: "Break down topics into smaller, achievable objectives",
      timesSaved: "1 hour",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "not-started":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Advanced":
        return "text-red-600";
      case "Intermediate":
        return "text-orange-600";
      case "Beginner":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavigation />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Customize Plan
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Schedule
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your AI-Generated Study Plan
            </h1>
            <p className="text-gray-600">
              Personalized recommendations based on your performance and goals
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Select
              value={selectedTimeFrame}
              onValueChange={setSelectedTimeFrame}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="semester">Semester</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="calculus">Calculus</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="statistics">Statistics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Total Study Hours
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {studyPlan.week.totalHours}h
                </p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Study Sessions
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {studyPlan.week.sessions}
                </p>
              </div>
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Subjects Covered
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  {studyPlan.week.subjects}
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Completion Rate
                </p>
                <p className="text-3xl font-bold text-orange-600">85%</p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-600" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Study Goals */}
          <div className="col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Study Goals & Progress
                </h2>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Goal
                </Button>
              </div>

              <div className="space-y-4">
                {studyPlan.week.goals.map((goal) => (
                  <div
                    key={goal.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {goal.subject}: {goal.topic}
                          </h3>
                          <Badge className={getPriorityColor(goal.priority)}>
                            {goal.priority} priority
                          </Badge>
                          <Badge className={getStatusColor(goal.status)}>
                            {goal.status.replace("-", " ")}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {goal.timeEstimate}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Due: {new Date(goal.dueDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            <span
                              className={getDifficultyColor(goal.difficulty)}
                            >
                              {goal.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {goal.progress}%
                        </div>
                        <div className="text-sm text-gray-500">complete</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className={`h-2 rounded-full ${
                          goal.progress === 100
                            ? "bg-green-500"
                            : goal.progress > 50
                              ? "bg-blue-500"
                              : "bg-orange-500"
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>

                    {/* Tasks */}
                    <div className="space-y-2">
                      {goal.tasks.slice(0, 2).map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{task}</span>
                        </div>
                      ))}
                      {goal.tasks.length > 2 && (
                        <button className="text-sm text-indigo-600 hover:text-indigo-700">
                          +{goal.tasks.length - 2} more tasks
                        </button>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Play className="w-4 h-4 mr-1" />
                          Start Session
                        </Button>
                        <Button size="sm" variant="ghost">
                          <FileText className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                      {goal.status === "in-progress" && (
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Schedule */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                This Week's Schedule
              </h3>
              <div className="space-y-4">
                {dailySchedule.map((day, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-indigo-500 pl-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{day.day}</h4>
                      <span className="text-sm text-gray-500">{day.date}</span>
                    </div>
                    <div className="space-y-2">
                      {day.sessions.map((session, sessionIndex) => (
                        <div
                          key={sessionIndex}
                          className="bg-gray-50 rounded-lg p-3"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">
                              {session.time}
                            </span>
                            <span className="text-xs text-gray-500">
                              {session.duration}
                            </span>
                          </div>
                          <div className="text-sm text-gray-700">
                            {session.subject}: {session.topic}
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <Badge className="bg-blue-100 text-blue-800 text-xs">
                              {session.type}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {session.location}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Study Tips */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-900">
                  AI Study Tips
                </h3>
              </div>
              <div className="space-y-4">
                {studyTips.map((tip, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-yellow-400 pl-4"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <tip.icon className="w-4 h-4 text-yellow-600" />
                      <h4 className="font-medium text-gray-900">{tip.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {tip.description}
                    </p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600">
                        Saves {tip.timesSaved} on average
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievement Progress */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Weekly Goals
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Study Hours</span>
                  <span className="text-sm font-medium">18/25 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Goals Completed</span>
                  <span className="text-sm font-medium">1/4 goals</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudyPlan;
