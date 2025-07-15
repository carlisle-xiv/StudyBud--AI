import React, { useState } from "react";
import TeacherNavigation from "../components/TeacherNavigation";
import AddModuleModal from "../components/AddModuleModal";
import { useNavigate } from "react-router-dom";
import {
  X,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Plus,
  Calendar,
  FileText,
  FileUp,
  Layers,
  ChevronDown,
  Edit,
  Trash2,
  CheckCircle,
} from "lucide-react";

interface Module {
  id: string;
  title: string;
  description: string;
  order: string;
  duration: string;
  topics: Array<{ id: string; name: string }>;
  learningObjectives: Array<{ id: string; text: string }>;
  prerequisites: string;
}

const CreateCourse: React.FC = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: "",
    subject: "",
    level: "",
    description: "",
  });
  const [modules, setModules] = useState<Module[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [subjectSearchQuery, setSubjectSearchQuery] = useState("");
  const [newSubject, setNewSubject] = useState({
    name: "",
    code: "",
    description: "",
    department: "",
    category: "",
  });
  const [availableSubjects, setAvailableSubjects] = useState([
    { value: "mathematics", label: "Mathematics", department: "Science" },
    { value: "physics", label: "Physics", department: "Science" },
    { value: "chemistry", label: "Chemistry", department: "Science" },
    { value: "biology", label: "Biology", department: "Science" },
    {
      value: "computer-science",
      label: "Computer Science",
      department: "Technology",
    },
    { value: "english", label: "English", department: "Liberal Arts" },
    { value: "history", label: "History", department: "Social Studies" },
    { value: "psychology", label: "Psychology", department: "Social Studies" },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddModule = (moduleData: any) => {
    const newModule: Module = {
      id: Date.now().toString(),
      ...moduleData,
    };
    setModules((prev) => [...prev, newModule]);
  };

  const handleDeleteModule = (moduleId: string) => {
    setModules((prev) => prev.filter((module) => module.id !== moduleId));
  };

  const handleClose = () => {
    navigate("/teacher-courses");
  };

  const handleBackToDashboard = () => {
    navigate("/teacher-dashboard");
  };

  const handleSaveAsDraft = () => {
    // Save draft logic here
    console.log("Saving as draft:", courseData);
  };

  const handleContinueToResources = () => {
    // Continue to next step logic here
    console.log("Continuing to resources:", courseData);
  };

  const handleSubjectSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = e.target.value;
    setSubjectSearchQuery(query);

    // Only show dropdown when user starts typing (query has content)
    if (query.trim().length > 0) {
      setShowSubjectDropdown(true);
    } else {
      setShowSubjectDropdown(false);
    }

    // Clear selection if user is typing a new search
    if (query !== getSelectedSubjectLabel()) {
      setCourseData((prev) => ({ ...prev, subject: "" }));
    }
  };

  const handleSubjectSelect = (subjectValue: string) => {
    if (subjectValue === "add-new-subject") {
      setShowAddSubjectModal(true);
      setShowSubjectDropdown(false);
    } else {
      const selectedSubject = availableSubjects.find(
        (s) => s.value === subjectValue,
      );
      setCourseData((prev) => ({ ...prev, subject: subjectValue }));
      setSubjectSearchQuery(selectedSubject?.label || "");
      setShowSubjectDropdown(false);
    }
  };

  const getSelectedSubjectLabel = () => {
    const selectedSubject = availableSubjects.find(
      (s) => s.value === courseData.subject,
    );
    return selectedSubject?.label || "";
  };

  const getFilteredSubjects = () => {
    if (!subjectSearchQuery.trim()) {
      return availableSubjects;
    }
    return availableSubjects.filter(
      (subject) =>
        subject.label
          .toLowerCase()
          .includes(subjectSearchQuery.toLowerCase()) ||
        subject.department
          .toLowerCase()
          .includes(subjectSearchQuery.toLowerCase()),
    );
  };

  const handleSubjectInputFocus = () => {
    // Don't show dropdown immediately, only when user starts typing
    if (!subjectSearchQuery && courseData.subject) {
      setSubjectSearchQuery(getSelectedSubjectLabel());
    }
  };

  const handleSubjectInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Delay hiding dropdown to allow for clicks on dropdown items
    setTimeout(() => {
      setShowSubjectDropdown(false);
      // If no valid selection was made, restore the previous selection
      if (courseData.subject && !subjectSearchQuery) {
        setSubjectSearchQuery(getSelectedSubjectLabel());
      } else if (!courseData.subject && !subjectSearchQuery) {
        setSubjectSearchQuery("");
      }
    }, 150);
  };

  const handleNewSubjectChange = (field: string, value: string) => {
    setNewSubject((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitNewSubject = () => {
    // Generate a unique value for the new subject
    const subjectValue = newSubject.name.toLowerCase().replace(/\s+/g, "-");

    // Add to available subjects
    const newSubjectOption = {
      value: subjectValue,
      label: newSubject.name,
      department: newSubject.department,
    };

    setAvailableSubjects((prev) => [...prev, newSubjectOption]);

    // Set as selected subject and update search
    setCourseData((prev) => ({ ...prev, subject: subjectValue }));
    setSubjectSearchQuery(newSubject.name);

    // Reset form and close modal
    setNewSubject({
      name: "",
      code: "",
      description: "",
      department: "",
      category: "",
    });
    setShowAddSubjectModal(false);

    // In a real app, you would send this to your backend
    console.log("New subject created:", newSubjectOption);
  };

  const handleCancelNewSubject = () => {
    setNewSubject({
      name: "",
      code: "",
      description: "",
      department: "",
      category: "",
    });
    setShowAddSubjectModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-600 mb-8">
          <span>Dashboard</span>
          <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
          <span>Courses</span>
          <ChevronRight className="w-3 h-3 mx-2 text-gray-400" />
          <span className="text-indigo-600 font-medium">Create New Course</span>
        </nav>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Create New Course
            </h1>
            <p className="text-gray-600">
              Set up your course with title, description, and syllabus content
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
          {/* Progress Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">
                Course Setup Progress
              </span>
              <span className="text-sm text-gray-500">Step 1 of 3</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-indigo-600 h-2 rounded-full w-1/3"></div>
            </div>

            {/* Step Labels */}
            <div className="flex justify-between text-xs">
              <span className="text-indigo-600 font-medium">Basic Info</span>
              <span className="text-gray-500">Syllabus</span>
              <span className="text-gray-500">Resources</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Basic Course Information */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Basic Course Information
              </h2>

              <div className="space-y-6">
                {/* Course Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={courseData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Introduction to Calculus"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  />
                </div>

                {/* Subject and Level */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={subjectSearchQuery}
                        onChange={handleSubjectSearchChange}
                        onFocus={handleSubjectInputFocus}
                        onBlur={handleSubjectInputBlur}
                        placeholder="Search or select a subject..."
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                      />
                      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />

                      {/* Dropdown Results */}
                      {showSubjectDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                          {/* Add New Subject - Always on top */}
                          <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()} // Prevent blur
                            onClick={() =>
                              handleSubjectSelect("add-new-subject")
                            }
                            className="w-full px-4 py-3 text-left hover:bg-indigo-50 border-b border-gray-100 flex items-center space-x-3 font-medium text-indigo-600"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Add New Subject</span>
                          </button>

                          {/* Filtered Subject Results */}
                          {getFilteredSubjects().length > 0 ? (
                            getFilteredSubjects().map((subject) => (
                              <button
                                key={subject.value}
                                type="button"
                                onMouseDown={(e) => e.preventDefault()} // Prevent blur
                                onClick={() =>
                                  handleSubjectSelect(subject.value)
                                }
                                className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between ${
                                  courseData.subject === subject.value
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "text-gray-900"
                                }`}
                              >
                                <div>
                                  <div className="font-medium">
                                    {subject.label}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {subject.department}
                                  </div>
                                </div>
                                {courseData.subject === subject.value && (
                                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                                )}
                              </button>
                            ))
                          ) : subjectSearchQuery.trim() ? (
                            <div className="px-4 py-3 text-gray-500 text-center">
                              No subjects found for "{subjectSearchQuery}"
                            </div>
                          ) : null}
                        </div>
                      )}
                    </div>
                    {courseData.subject && (
                      <p className="text-sm text-gray-500 mt-1">
                        Department:{" "}
                        {availableSubjects.find(
                          (s) => s.value === courseData.subject,
                        )?.department || "Custom"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Level *
                    </label>
                    <div className="relative">
                      <select
                        name="level"
                        value={courseData.level}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none text-gray-900"
                      >
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Description
                  </label>
                  <textarea
                    name="description"
                    value={courseData.description}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Provide a brief description of what students will learn in this course..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    This will help students understand what to expect from your
                    course
                  </p>
                </div>
              </div>
            </section>

            {/* Course Syllabus */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Course Syllabus
              </h2>

              {/* Upload Options */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button className="p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
                  <Calendar className="w-7 h-6 mx-auto mb-3 text-indigo-600" />
                  <div className="font-medium text-gray-900 mb-2">
                    Manual Entry
                  </div>
                  <div className="text-sm text-gray-600">
                    Type your syllabus content directly
                  </div>
                </button>

                <button className="p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
                  <FileText className="w-6 h-6 mx-auto mb-3 text-red-500" />
                  <div className="font-medium text-gray-900 mb-2">
                    Upload PDF
                  </div>
                  <div className="text-sm text-gray-600">
                    Upload existing PDF syllabus
                  </div>
                </button>

                <button className="p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-center">
                  <FileUp className="w-4 h-6 mx-auto mb-3 text-blue-600" />
                  <div className="font-medium text-gray-900 mb-2">
                    Upload DOCX
                  </div>
                  <div className="text-sm text-gray-600">
                    Upload Word document
                  </div>
                </button>
              </div>

              {/* Syllabus Preview Area */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-16 text-center">
                <FileText className="w-7 h-9 mx-auto mb-4 text-gray-400" />
                <div className="text-lg font-medium text-gray-500 mb-2">
                  No syllabus content yet
                </div>
                <div className="text-sm text-gray-500">
                  Choose an upload option above to add your syllabus
                </div>
              </div>
            </section>

            {/* Organize by Modules */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Organize by Modules
                </h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-3 h-3" />
                  Add Module
                </button>
              </div>

              {/* Modules List or Empty State */}
              {modules.length > 0 ? (
                <div className="space-y-4">
                  {modules.map((module, index) => (
                    <div
                      key={module.id}
                      className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-sm transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-medium text-indigo-600">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {module.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {module.duration} • {module.topics.length} topics
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteModule(module.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      {module.description && (
                        <p className="text-gray-700 mb-4">
                          {module.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map(
                          (topic) =>
                            topic.name && (
                              <span
                                key={topic.id}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {topic.name}
                              </span>
                            ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center">
                  <Layers className="w-8 h-7 mx-auto mb-4 text-gray-400" />
                  <div className="font-medium text-gray-500 mb-2">
                    No modules created yet
                  </div>
                  <div className="text-sm text-gray-500">
                    Add modules to organize your syllabus content by topics
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 py-6 rounded-b-2xl">
            <div className="flex justify-between items-center">
              <button
                onClick={handleBackToDashboard}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-3 h-4" />
                Back to Dashboard
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveAsDraft}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  onClick={handleContinueToResources}
                  className="px-7 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  Continue to Resources
                  <ArrowRight className="w-3 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Module Modal */}
      <AddModuleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddModule}
      />

      {/* Add New Subject Modal */}
      {showAddSubjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Add New Subject
                </h2>
              </div>
              <button
                onClick={handleCancelNewSubject}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[calc(90vh-140px)] overflow-y-auto">
              <div className="space-y-6">
                {/* Subject Name and Code */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Subject Name *
                    </label>
                    <input
                      type="text"
                      value={newSubject.name}
                      onChange={(e) =>
                        handleNewSubjectChange("name", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., Advanced Statistics"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Subject Code
                    </label>
                    <input
                      type="text"
                      value={newSubject.code}
                      onChange={(e) =>
                        handleNewSubjectChange("code", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., STAT-401"
                    />
                  </div>
                </div>

                {/* Department and Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Department *
                    </label>
                    <select
                      value={newSubject.department}
                      onChange={(e) =>
                        handleNewSubjectChange("department", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Department</option>
                      <option value="Science">Science</option>
                      <option value="Technology">Technology</option>
                      <option value="Liberal Arts">Liberal Arts</option>
                      <option value="Social Studies">Social Studies</option>
                      <option value="Business">Business</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Medicine">Medicine</option>
                      <option value="Arts">Arts</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      value={newSubject.category}
                      onChange={(e) =>
                        handleNewSubjectChange("category", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Category</option>
                      <option value="Core">Core Subject</option>
                      <option value="Elective">Elective</option>
                      <option value="Advanced">Advanced Course</option>
                      <option value="Remedial">Remedial</option>
                      <option value="Honors">Honors</option>
                      <option value="AP">Advanced Placement</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={newSubject.description}
                    onChange={(e) =>
                      handleNewSubjectChange("description", e.target.value)
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Brief description of the subject area and its focus..."
                  />
                </div>

                {/* Info Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-blue-600 mt-0.5">ℹ️</div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">
                        Subject Approval Process
                      </h4>
                      <p className="text-sm text-blue-700">
                        New subjects will be immediately available for your
                        courses. They may require administrator approval before
                        being visible to other teachers. You'll receive a
                        notification once approved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleCancelNewSubject}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitNewSubject}
                  disabled={!newSubject.name || !newSubject.department}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Add Subject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCourse;
