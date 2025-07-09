import React from "react";
import { Link } from "react-router-dom";
import StudentNavigation from "@/components/StudentNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Brain,
  BookOpen,
  CheckCircle,
  Trophy,
  TrendingUp,
  Play,
  Bell,
  Award,
  Flame,
  Star,
  GraduationCap,
  AlertTriangle,
  ThumbsUp,
  Atom,
  Beaker,
} from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <Card className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
            <div className="flex justify-between items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">Welcome back, Sarah! 👋</h1>
                <p className="text-lg text-indigo-100">
                  Ready to ace your next exam? Let's continue your learning
                  journey.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Courses Enrolled
                  </p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Exams Taken
                  </p>
                  <p className="text-3xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Average Score
                  </p>
                  <p className="text-3xl font-bold text-gray-900">87%</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Study Streak
                  </p>
                  <div className="flex items-baseline space-x-1">
                    <p className="text-3xl font-bold text-gray-900">12</p>
                    <p className="text-sm text-gray-500">days</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Flame className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Start New Exam Section */}
          <Card className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ready for your next challenge?
                </h3>
                <p className="text-gray-600">
                  Start a new exam and test your knowledge with AI-powered
                  questions.
                </p>
              </div>
              <Link to="/exam-selection">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                  <Play className="h-4 w-4 mr-2" />
                  Start New Exam
                </Button>
              </Link>
            </div>
          </Card>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Performance */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Performance
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {/* Calculus Exam */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Mathematics - Calculus
                        </h4>
                        <p className="text-sm text-gray-600">
                          Completed 2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">92%</p>
                      <p className="text-xs text-gray-500">Excellent</p>
                    </div>
                  </div>

                  {/* Physics Exam */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Atom className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Physics - Mechanics
                        </h4>
                        <p className="text-sm text-gray-600">
                          Completed yesterday
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">78%</p>
                      <p className="text-xs text-gray-500">Good</p>
                    </div>
                  </div>

                  {/* Chemistry Exam */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Beaker className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Chemistry - Organic
                        </h4>
                        <p className="text-sm text-gray-600">
                          Completed 3 days ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-yellow-600">65%</p>
                      <p className="text-xs text-gray-500">Needs Work</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Focus Areas */}
            <div>
              <Card className="h-full">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      AI Focus Areas
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {/* Critical - Organic Chemistry */}
                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-red-800">
                          Organic Chemistry
                        </h4>
                        <p className="text-sm text-red-700 mt-1">
                          Focus on reaction mechanisms and stereochemistry
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Important - Physics Mechanics */}
                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-yellow-800">
                          Physics Mechanics
                        </h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Review rotational dynamics and energy conservation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Good - Calculus */}
                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <ThumbsUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-green-800">Calculus</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Great progress! Keep practicing integration techniques
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Get Detailed Study Plan
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Recent Achievements */}
          <Card>
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Achievements
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 12 Day Streak */}
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg text-center">
                  <Flame className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">12 Day Streak</p>
                </div>

                {/* Top Performer */}
                <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg text-center">
                  <Trophy className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Top Performer</p>
                </div>

                {/* Perfect Score */}
                <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg text-center">
                  <Star className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Perfect Score</p>
                </div>

                {/* Quick Learner */}
                <div className="p-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg text-center">
                  <GraduationCap className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Quick Learner</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
