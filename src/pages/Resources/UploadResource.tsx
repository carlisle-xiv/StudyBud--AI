import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherNavigation from "@/components/TeacherNavigation";
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
  Upload,
  X,
  Save,
  Cloud,
  FileText,
  Link,
  FolderPlus,
  Copy,
  ChevronRight,
} from "lucide-react";

const UploadResource: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: "Chapter_1_Introduction.pdf",
      size: "2.4 MB",
      uploading: true,
      progress: 75,
    },
  ]);
  const [selectedKeywords, setSelectedKeywords] = useState([
    "mathematics",
    "algebra",
  ]);

  const handleCancel = () => {
    navigate("/teacher-resources");
  };

  const handleSaveUpload = () => {
    // Handle save and upload logic
    navigate("/teacher-resources");
  };

  const removeKeyword = (keyword: string) => {
    setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
  };

  const addKeyword = () => {
    // Handle adding new keyword
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeacherNavigation />

      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <span>Dashboard</span>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span>Resources</span>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-gray-900 font-medium">Upload Resource</span>
        </nav>

        {/* Page Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Upload Resource
            </h1>
            <p className="text-gray-600">
              Add new materials to your course library
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="text-gray-700 border-gray-300"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleSaveUpload}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save & Upload
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Main Form */}
          <div className="col-span-2 space-y-6">
            {/* Course Information */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Course Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Course
                  </label>
                  <Select defaultValue="choose">
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="choose">Choose a course...</SelectItem>
                      <SelectItem value="math101">Mathematics 101</SelectItem>
                      <SelectItem value="chem201">Chemistry 201</SelectItem>
                      <SelectItem value="bio101">Biology 101</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Module/Topic
                  </label>
                  <Select defaultValue="select">
                    <SelectTrigger>
                      <SelectValue placeholder="Select module..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="select">Select module...</SelectItem>
                      <SelectItem value="chapter1">Chapter 1</SelectItem>
                      <SelectItem value="chapter2">Chapter 2</SelectItem>
                      <SelectItem value="chapter3">Chapter 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Upload Files */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Upload Files
              </h2>

              {/* Drop Zone */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Drop files here or click to browse
                    </h3>
                    <p className="text-sm text-gray-600">
                      Support for PDF, DOC, PPT, images, videos, and more
                    </p>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Browse Files
                  </Button>
                </div>
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <FileText className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-600">
                        {file.size} •{" "}
                        {file.uploading ? "Uploading..." : "Complete"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {file.uploading && (
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-indigo-600 rounded-full"
                            style={{ width: `${file.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="p-1"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resource Details */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Resource Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resource Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter resource title..."
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Add a description for this resource..."
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resource Type
                    </label>
                    <Select defaultValue="lecture">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lecture">
                          Lecture Material
                        </SelectItem>
                        <SelectItem value="assignment">Assignment</SelectItem>
                        <SelectItem value="reading">
                          Reading Material
                        </SelectItem>
                        <SelectItem value="video">Video Content</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty Level
                    </label>
                    <Select defaultValue="beginner">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags & Categories */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Tags & Categories
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    placeholder="Add tags (comma separated)..."
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Example: algebra, equations, fundamentals
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedKeywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 flex items-center gap-1"
                      >
                        {keyword}
                        <button
                          onClick={() => removeKeyword(keyword)}
                          className="ml-1 hover:text-indigo-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addKeyword}
                      className="text-gray-600 border-gray-300 h-7"
                    >
                      + Add keyword
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upload Summary */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Upload Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Files to upload:</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total size:</span>
                  <span className="font-medium">2.4 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Course:</span>
                  <span className="font-medium">Mathematics 101</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Module:</span>
                  <span className="font-medium">Chapter 1</span>
                </div>
              </div>
            </div>

            {/* Access Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Access Settings
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="access"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-sm">All students in course</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="access"
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-sm">Specific student groups</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="access"
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-sm">Private (teacher only)</span>
                </label>
                <hr className="my-4" />
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="text-sm">Allow downloads</span>
                </label>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 w-full text-left">
                  <Link className="w-4 h-4" />
                  <span>Add external link instead</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 w-full text-left">
                  <FolderPlus className="w-4 h-4" />
                  <span>Create new folder</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 w-full text-left">
                  <Copy className="w-4 h-4" />
                  <span>Duplicate from template</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadResource;
