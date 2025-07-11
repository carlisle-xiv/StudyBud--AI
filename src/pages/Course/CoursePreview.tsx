import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TeacherNavigation from "@/components/TeacherNavigation";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  User,
  Calendar,
  GraduationCap,
  BookOpen,
  Clock,
  Star,
  Play,
  FileText,
  AlertTriangle,
  Award,
  Target,
  Users,
} from "lucide-react";

const CoursePreview = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  // Mock course data - in real app this would come from API
  const courseData = {
    id: 1,
    title: "Advanced Data Structures",
    instructor: "Dr. Michael Chen",
    department: "Computer Science",
    submittedDate: "2024-01-15",
    status: "pending",
    description:
      "This comprehensive course covers advanced data structures including trees, graphs, hash tables, and their practical applications in software development. Students will learn to implement, analyze, and optimize complex data structures for real-world programming scenarios.",
    level: "Advanced",
    credits: 3,
    modules: 12,
    estimatedHours: 45,
    maxStudents: 50,
    prerequisites: ["Data Structures Fundamentals", "Algorithm Analysis"],
    learningObjectives: [
      "Implement advanced tree structures (AVL, Red-Black, B-trees)",
      "Design and analyze graph algorithms",
      "Optimize hash table implementations",
      "Apply data structures to solve complex problems",
      "Evaluate time and space complexity trade-offs",
    ],
    courseOutline: [
      {
        module: 1,
        title: "Advanced Tree Structures",
        topics: ["AVL Trees", "Red-Black Trees", "B-Trees", "Splay Trees"],
        duration: "4 hours",
      },
      {
        module: 2,
        title: "Graph Data Structures",
        topics: [
          "Graph Representation",
          "Adjacency Lists vs Matrices",
          "Weighted Graphs",
        ],
        duration: "3 hours",
      },
      {
        module: 3,
        title: "Hash Tables Deep Dive",
        topics: [
          "Collision Resolution",
          "Perfect Hashing",
          "Bloom Filters",
          "Consistent Hashing",
        ],
        duration: "4 hours",
      },
      {
        module: 4,
        title: "Advanced Algorithms",
        topics: [
          "Dynamic Programming on Trees",
          "Network Flow",
          "String Matching",
        ],
        duration: "5 hours",
      },
    ],
    assessments: [
      {
        type: "Programming Assignment",
        title: "Implement AVL Tree",
        weight: "25%",
        description: "Build a complete AVL tree with insertion and deletion",
      },
      {
        type: "Project",
        title: "Graph Algorithm Visualization",
        weight: "30%",
        description: "Create a web app visualizing shortest path algorithms",
      },
      {
        type: "Midterm Exam",
        title: "Theory and Analysis",
        weight: "20%",
        description: "Written exam on complexity analysis and theory",
      },
      {
        type: "Final Project",
        title: "Data Structure Library",
        weight: "25%",
        description: "Implement a complete library of advanced data structures",
      },
    ],
    resources: [
      "Introduction to Algorithms (CLRS) - Chapters 12-22",
      "Data Structures and Algorithm Analysis in Java - Mark Weiss",
      "Online coding platform access",
      "Video lectures and demonstrations",
    ],
    flagged: false,
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "text-green-600 bg-green-50 border-green-200";
      case "Intermediate":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Advanced":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const handleApprove = () => {
    // Navigate back with approval action
    navigate("/teacher-actions", {
      state: { action: "approve", courseId: courseData.id },
    });
  };

  const handleReject = () => {
    // Navigate back with rejection action
    navigate("/teacher-actions", {
      state: { action: "reject", courseId: courseData.id },
    });
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
                onClick={() => navigate("/teacher-actions")}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Actions
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Course Preview
                </h1>
                <p className="text-gray-600 mt-1">
                  Review course details before approval
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className={`${getLevelColor(courseData.level)} border`}>
                {courseData.level}
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800">
                Pending Review
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <Card className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {courseData.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {courseData.description}
                  </p>
                </div>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <p className="text-sm text-gray-500">Modules</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {courseData.modules}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-500">Est. Hours</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {courseData.estimatedHours}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-500">Credits</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {courseData.credits}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="text-sm text-gray-500">Max Students</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {courseData.maxStudents}
                  </p>
                </div>
              </div>
            </Card>

            {/* Learning Objectives */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Learning Objectives
                </h3>
              </div>
              <div className="space-y-3">
                {courseData.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-gray-700">{objective}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Course Outline */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Course Outline
                </h3>
              </div>
              <div className="space-y-4">
                {courseData.courseOutline.map((module, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">
                        Module {module.module}: {module.title}
                      </h4>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Assessments */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Star className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Assessments
                </h3>
              </div>
              <div className="space-y-4">
                {courseData.assessments.map((assessment, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        {assessment.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {assessment.type}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                          {assessment.weight}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {assessment.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Instructor Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium">{courseData.instructor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="font-medium">{courseData.department}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Submitted</p>
                    <p className="font-medium">{courseData.submittedDate}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Prerequisites */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Prerequisites
              </h3>
              <div className="space-y-2">
                {courseData.prerequisites.map((prereq, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{prereq}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Resources */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-2">
                {courseData.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-sm"
                  >
                    <BookOpen className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">{resource}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Review Actions
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={handleApprove}
                  className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve Course
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReject}
                  className="w-full border-red-300 text-red-600 hover:bg-red-50 flex items-center justify-center"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject Course
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Your decision will be recorded and the instructor will be
                notified via email.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
