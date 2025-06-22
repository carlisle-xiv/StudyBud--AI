import { useState } from "react";
import {
  Search,
  Plus,
  Star,
  Check,
  Calculator,
  Settings,
  Beaker,
  Dna,
  Code,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StudentNavigation from "@/components/StudentNavigation";

const CourseEnrollment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedTeacher, setSelectedTeacher] = useState("All Teachers");

  const courses = [
    {
      id: 1,
      title: "Advanced Calculus",
      description:
        "Master differential and integral calculus with real-world applications",
      subject: "Mathematics",
      level: "Advanced",
      teacher: "Dr. Johnson",
      rating: 4.9,
      lessons: 24,
      duration: "8 weeks",
      enrolled: true,
      gradient: "from-blue-500 to-purple-600",
      icon: Calculator,
      subjectColor: "bg-blue-100 text-blue-800",
      levelColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 2,
      title: "Quantum Physics",
      description:
        "Explore the fascinating world of quantum mechanics and particle physics",
      subject: "Physics",
      level: "Intermediate",
      teacher: "Prof. Martinez",
      rating: 4.7,
      lessons: 18,
      duration: "6 weeks",
      enrolled: false,
      gradient: "from-green-500 to-teal-600",
      icon: Settings,
      subjectColor: "bg-green-100 text-green-800",
      levelColor: "bg-orange-100 text-orange-800",
    },
    {
      id: 3,
      title: "Organic Chemistry",
      description: "Learn the fundamentals of organic compounds and reactions",
      subject: "Chemistry",
      level: "Beginner",
      teacher: "Dr. Williams",
      rating: 4.8,
      lessons: 20,
      duration: "7 weeks",
      enrolled: false,
      gradient: "from-purple-500 to-pink-600",
      icon: Flask,
      subjectColor: "bg-purple-100 text-purple-800",
      levelColor: "bg-red-100 text-red-800",
    },
    {
      id: 4,
      title: "Molecular Biology",
      description: "Dive deep into cellular processes and molecular mechanisms",
      subject: "Biology",
      level: "Intermediate",
      teacher: "Prof. Anderson",
      rating: 4.6,
      lessons: 22,
      duration: "8 weeks",
      enrolled: true,
      gradient: "from-red-500 to-orange-600",
      icon: Dna,
      subjectColor: "bg-red-100 text-red-800",
      levelColor: "bg-orange-100 text-orange-800",
    },
    {
      id: 5,
      title: "Python Programming",
      description:
        "Learn Python from scratch with hands-on projects and exercises",
      subject: "Computer Science",
      level: "Beginner",
      teacher: "Dr. Thompson",
      rating: 4.9,
      lessons: 16,
      duration: "5 weeks",
      enrolled: false,
      gradient: "from-indigo-500 to-blue-600",
      icon: Code,
      subjectColor: "bg-indigo-100 text-indigo-800",
      levelColor: "bg-green-100 text-green-800",
    },
    {
      id: 6,
      title: "Data Analysis",
      description:
        "Master statistical analysis and data visualization techniques",
      subject: "Statistics",
      level: "Intermediate",
      teacher: "Prof. Davis",
      rating: 4.5,
      lessons: 14,
      duration: "4 weeks",
      enrolled: false,
      gradient: "from-yellow-500 to-orange-600",
      icon: TrendingUp,
      subjectColor: "bg-yellow-100 text-yellow-800",
      levelColor: "bg-orange-100 text-orange-800",
    },
  ];

  const getTeacherInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNavigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Available Courses
            </h1>
            <p className="text-gray-600">
              Discover and enroll in courses to enhance your learning journey
            </p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Request Course
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Subject Filter */}
            <div className="relative">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
              >
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>Computer Science</option>
                <option>Statistics</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
              >
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Teacher Filter */}
            <div className="relative">
              <select
                value={selectedTeacher}
                onChange={(e) => setSelectedTeacher(e.target.value)}
                className="w-full h-12 px-3 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
              >
                <option>All Teachers</option>
                <option>Dr. Johnson</option>
                <option>Prof. Martinez</option>
                <option>Dr. Williams</option>
                <option>Prof. Anderson</option>
                <option>Dr. Thompson</option>
                <option>Prof. Davis</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Course Header with Gradient */}
                <div
                  className={`bg-gradient-to-r ${course.gradient} h-48 flex items-center justify-center relative`}
                >
                  <IconComponent className="h-15 w-15 text-white" size={60} />
                  {course.enrolled && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        <Check className="h-3 w-3" />
                        <span>Enrolled</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Subject and Level Badges */}
                  <div className="flex space-x-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${course.subjectColor}`}
                    >
                      {course.subject}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${course.levelColor}`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Teacher and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                          {getTeacherInitials(course.teacher)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">
                        {course.teacher}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Course Details and Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {course.lessons} lessons • {course.duration}
                    </span>
                    <Button
                      variant={course.enrolled ? "secondary" : "default"}
                      size="sm"
                      className={
                        course.enrolled
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-indigo-600 hover:bg-indigo-700 text-white"
                      }
                    >
                      {course.enrolled ? "Continue" : "Enroll"}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Load More Courses
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CourseEnrollment;
