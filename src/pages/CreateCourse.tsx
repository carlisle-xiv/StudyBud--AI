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
                      <select
                        name="subject"
                        value={courseData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none text-gray-900"
                      >
                        <option value="">Select Subject</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                        <option value="computer-science">
                          Computer Science
                        </option>
                      </select>
                      <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
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
    </div>
  );
};

export default CreateCourse;
