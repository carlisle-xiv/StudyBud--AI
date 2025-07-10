import React, { useState } from "react";
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
import TeacherNavigation from "@/components/TeacherNavigation";
import RejectCourseModal from "@/components/RejectCourseModal";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  User,
  Calendar,
  GraduationCap,
  BookOpen,
  AlertTriangle,
  Filter,
  Search,
  Download,
} from "lucide-react";

const TeacherActions = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  // Mock data for pending course reviews
  const [pendingCourses, setPendingCourses] = useState([
    {
      id: 1,
      title: "Advanced Data Structures",
      instructor: "Dr. Michael Chen",
      department: "Computer Science",
      submittedDate: "2024-01-15",
      status: "pending",
      description:
        "Comprehensive course covering advanced data structures including trees, graphs, and hash tables",
      level: "Advanced",
      credits: 3,
      modules: 12,
      estimatedHours: 45,
      flagged: false,
    },
    {
      id: 2,
      title: "Introduction to Psychology",
      instructor: "Prof. Emily Rodriguez",
      department: "Psychology",
      submittedDate: "2024-01-14",
      status: "pending",
      description:
        "Foundational course exploring key concepts in psychology and human behavior",
      level: "Beginner",
      credits: 3,
      modules: 8,
      estimatedHours: 30,
      flagged: true,
      flagReason: "Content needs review for academic standards",
    },
    {
      id: 3,
      title: "Digital Marketing Strategies",
      instructor: "Dr. James Wilson",
      department: "Business",
      submittedDate: "2024-01-13",
      status: "approved",
      description:
        "Modern digital marketing techniques and strategies for business growth",
      level: "Intermediate",
      credits: 2,
      modules: 10,
      estimatedHours: 35,
      flagged: false,
    },
    {
      id: 4,
      title: "Organic Chemistry Lab",
      instructor: "Dr. Sarah Kim",
      department: "Chemistry",
      submittedDate: "2024-01-12",
      status: "rejected",
      description: "Hands-on laboratory course in organic chemistry principles",
      level: "Intermediate",
      credits: 4,
      modules: 15,
      estimatedHours: 60,
      flagged: false,
      rejectionReason: "Insufficient safety protocols in lab procedures",
    },
  ]);

  const handleApprove = (courseId: number) => {
    setPendingCourses((courses) =>
      courses.map((course) =>
        course.id === courseId ? { ...course, status: "approved" } : course,
      ),
    );
  };

  const handleReject = (courseId: number) => {
    const course = pendingCourses.find((c) => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setIsRejectModalOpen(true);
    }
  };

  const handleRejectConfirm = (reason: string) => {
    if (selectedCourse) {
      setPendingCourses((courses) =>
        courses.map((course) =>
          course.id === selectedCourse.id
            ? { ...course, status: "rejected", rejectionReason: reason }
            : course,
        ),
      );
      setIsRejectModalOpen(false);
      setSelectedCourse(null);
    }
  };

  const handlePreview = (courseId: number) => {
    navigate(`/course-preview/${courseId}`);
  };

  const filteredCourses = pendingCourses.filter((course) => {
    const matchesStatus =
      filterStatus === "all" || course.status === filterStatus;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            Pending Review
          </Badge>
        );
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "text-green-600 bg-green-50";
      case "Intermediate":
        return "text-yellow-600 bg-yellow-50";
      case "Advanced":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Course Review Actions
              </h1>
              <p className="text-gray-600 mt-2">
                Review and approve new courses submitted by instructors
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {pendingCourses.filter((c) => c.status === "pending").length}
                </h3>
                <p className="text-gray-600">Pending Review</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {pendingCourses.filter((c) => c.status === "approved").length}
                </h3>
                <p className="text-gray-600">Approved</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {pendingCourses.filter((c) => c.status === "rejected").length}
                </h3>
                <p className="text-gray-600">Rejected</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {pendingCourses.filter((c) => c.flagged).length}
                </h3>
                <p className="text-gray-600">Flagged</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, instructors, or departments..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending Review</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Course List */}
        <div className="space-y-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {course.title}
                    </h3>
                    {getStatusBadge(course.status)}
                    {course.flagged && (
                      <Badge className="bg-orange-100 text-orange-800 flex items-center">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        Flagged
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{course.description}</p>

                  {/* Course Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Instructor</p>
                        <p className="text-sm font-medium">
                          {course.instructor}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Department</p>
                        <p className="text-sm font-medium">
                          {course.department}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Level</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getLevelColor(course.level)}`}
                        >
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Submitted</p>
                        <p className="text-sm font-medium">
                          {course.submittedDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Course Info */}
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                    <span>{course.credits} Credits</span>
                    <span>{course.modules} Modules</span>
                    <span>{course.estimatedHours} Hours</span>
                  </div>

                  {/* Flag Reason or Rejection Reason */}
                  {course.flagged && course.flagReason && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-orange-800">
                            Flagged for Review
                          </p>
                          <p className="text-sm text-orange-700">
                            {course.flagReason}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {course.status === "rejected" && course.rejectionReason && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-800">
                            Rejection Reason
                          </p>
                          <p className="text-sm text-red-700">
                            {course.rejectionReason}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 ml-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    onClick={() => handlePreview(course.id)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>

                  {course.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 flex items-center"
                        onClick={() => handleApprove(course.id)}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-600 hover:bg-red-50 flex items-center"
                        onClick={() => handleReject(course.id)}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ))}

          {filteredCourses.length === 0 && (
            <Card className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600">
                {searchTerm || filterStatus !== "all"
                  ? "Try adjusting your search or filters"
                  : "No courses are currently pending review"}
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Reject Course Modal */}
      <RejectCourseModal
        isOpen={isRejectModalOpen}
        onClose={() => {
          setIsRejectModalOpen(false);
          setSelectedCourse(null);
        }}
        onConfirm={handleRejectConfirm}
        courseName={selectedCourse?.title || ""}
        instructor={selectedCourse?.instructor || ""}
      />
    </div>
  );
};

export default TeacherActions;
