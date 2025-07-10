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
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Edit3,
  Clock,
  BookOpen,
  Filter,
  Search,
  Eye,
  Copy,
  Trash2,
  FileText,
  Calendar,
  Users,
  MoreVertical,
  Play,
} from "lucide-react";

const TeacherDrafts = () => {
  const navigate = useNavigate();
  const [filterCourse, setFilterCourse] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock draft exams data
  const [drafts, setDrafts] = useState([
    {
      id: 1,
      title: "Chemistry Midterm",
      course: "Chemistry 201",
      type: "midterm",
      questions: 25,
      duration: 120,
      lastEdited: "2 hours ago",
      createdDate: "2024-01-18",
      status: "draft",
      completion: 85,
      description:
        "Comprehensive midterm covering chapters 1-8 of organic chemistry",
    },
    {
      id: 2,
      title: "Biology Quiz 3",
      course: "Biology 101",
      type: "quiz",
      questions: 10,
      duration: 30,
      lastEdited: "1 day ago",
      createdDate: "2024-01-17",
      status: "draft",
      completion: 60,
      description: "Quick assessment on cell division and mitosis",
    },
    {
      id: 3,
      title: "Physics Final Exam",
      course: "Physics 301",
      type: "final",
      questions: 50,
      duration: 180,
      lastEdited: "3 days ago",
      createdDate: "2024-01-15",
      status: "draft",
      completion: 40,
      description: "Comprehensive final exam covering all semester topics",
    },
    {
      id: 4,
      title: "Math Pop Quiz",
      course: "Mathematics 101",
      type: "quiz",
      questions: 5,
      duration: 15,
      lastEdited: "1 week ago",
      createdDate: "2024-01-10",
      status: "draft",
      completion: 100,
      description: "Quick assessment on quadratic equations",
    },
    {
      id: 5,
      title: "Computer Science Project Assessment",
      course: "Computer Science 202",
      type: "assignment",
      questions: 15,
      duration: 90,
      lastEdited: "2 weeks ago",
      createdDate: "2024-01-05",
      status: "draft",
      completion: 75,
      description:
        "Project-based assessment for data structures implementation",
    },
    {
      id: 6,
      title: "English Literature Essay Exam",
      course: "English 201",
      type: "essay",
      questions: 3,
      duration: 120,
      lastEdited: "3 weeks ago",
      createdDate: "2024-01-01",
      status: "draft",
      completion: 90,
      description: "Analytical essay exam on Victorian literature",
    },
  ]);

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "quiz":
        return <Badge className="bg-blue-100 text-blue-800">Quiz</Badge>;
      case "midterm":
        return <Badge className="bg-purple-100 text-purple-800">Midterm</Badge>;
      case "final":
        return <Badge className="bg-red-100 text-red-800">Final</Badge>;
      case "assignment":
        return (
          <Badge className="bg-green-100 text-green-800">Assignment</Badge>
        );
      case "essay":
        return <Badge className="bg-orange-100 text-orange-800">Essay</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Other</Badge>;
    }
  };

  const getCompletionColor = (completion: number) => {
    if (completion >= 90) return "text-green-600 bg-green-100";
    if (completion >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const handleEdit = (draftId: number) => {
    navigate(`/manual-exam-creation?draft=${draftId}`);
  };

  const handlePreview = (draftId: number) => {
    navigate(`/exam-preview?draft=${draftId}`);
  };

  const handleDuplicate = (draftId: number) => {
    const draftToDuplicate = drafts.find((d) => d.id === draftId);
    if (draftToDuplicate) {
      const newDraft = {
        ...draftToDuplicate,
        id: Math.max(...drafts.map((d) => d.id)) + 1,
        title: `${draftToDuplicate.title} (Copy)`,
        lastEdited: "Just now",
        createdDate: new Date().toISOString().split("T")[0],
      };
      setDrafts([newDraft, ...drafts]);
    }
  };

  const handleDelete = (draftId: number) => {
    setDrafts(drafts.filter((draft) => draft.id !== draftId));
  };

  const filteredDrafts = drafts.filter((draft) => {
    const matchesCourse =
      filterCourse === "all" || draft.course === filterCourse;
    const matchesType = filterType === "all" || draft.type === filterType;
    const matchesSearch =
      draft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      draft.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      draft.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCourse && matchesType && matchesSearch;
  });

  const uniqueCourses = [...new Set(drafts.map((draft) => draft.course))];
  const completeDrafts = drafts.filter(
    (draft) => draft.completion === 100,
  ).length;
  const recentDrafts = drafts.filter(
    (draft) =>
      draft.lastEdited.includes("hour") || draft.lastEdited.includes("day"),
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/teacher-dashboard")}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Draft Exams
                </h1>
                <p className="text-gray-600 mt-2">
                  Manage and edit your draft examinations
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/teacher-exam-creation")}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Create New Exam
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {drafts.length}
                </h3>
                <p className="text-gray-600">Total Drafts</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Edit3 className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {completeDrafts}
                </h3>
                <p className="text-gray-600">Ready to Publish</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {recentDrafts}
                </h3>
                <p className="text-gray-600">Recently Edited</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {uniqueCourses.length}
                </h3>
                <p className="text-gray-600">Courses</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search drafts by title, course, or description..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <Select value={filterCourse} onValueChange={setFilterCourse}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {uniqueCourses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="quiz">Quiz</SelectItem>
                  <SelectItem value="midterm">Midterm</SelectItem>
                  <SelectItem value="final">Final</SelectItem>
                  <SelectItem value="assignment">Assignment</SelectItem>
                  <SelectItem value="essay">Essay</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Drafts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDrafts.map((draft) => (
            <Card
              key={draft.id}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {draft.title}
                    </h3>
                    {getTypeBadge(draft.type)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{draft.course}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {draft.description}
                  </p>
                </div>
              </div>

              {/* Completion Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Completion</span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${getCompletionColor(draft.completion)}`}
                  >
                    {draft.completion}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${draft.completion}%` }}
                  ></div>
                </div>
              </div>

              {/* Draft Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {draft.questions} questions
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{draft.duration} min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Created {draft.createdDate}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Edit3 className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Edited {draft.lastEdited}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    onClick={() => handleEdit(draft.id)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePreview(draft.id)}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Preview
                  </Button>
                </div>
                <div className="flex space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDuplicate(draft.id)}
                    className="p-2"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(draft.id)}
                    className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {/* Publish Button for Complete Drafts */}
              {draft.completion === 100 && (
                <Button className="w-full mt-3 bg-green-600 hover:bg-green-700">
                  <Play className="w-4 h-4 mr-2" />
                  Publish Exam
                </Button>
              )}
            </Card>
          ))}
        </div>

        {filteredDrafts.length === 0 && (
          <Card className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No drafts found
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || filterCourse !== "all" || filterType !== "all"
                ? "Try adjusting your search or filters"
                : "You haven't created any draft exams yet"}
            </p>
            <Button
              onClick={() => navigate("/teacher-exam-creation")}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Create Your First Exam
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TeacherDrafts;
