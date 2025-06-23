import React, { useState } from "react";
import { X, Plus, Trash2, Check, ChevronDown, Layers } from "lucide-react";

interface Topic {
  id: string;
  name: string;
}

interface LearningObjective {
  id: string;
  text: string;
}

interface ModuleData {
  title: string;
  description: string;
  order: string;
  duration: string;
  topics: Topic[];
  learningObjectives: LearningObjective[];
  prerequisites: string;
}

interface AddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (moduleData: ModuleData) => void;
}

const AddModuleModal: React.FC<AddModuleModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [moduleData, setModuleData] = useState<ModuleData>({
    title: "",
    description: "",
    order: "Module 1 (First)",
    duration: "",
    topics: [
      { id: "1", name: "Definition of Limits" },
      { id: "2", name: "Properties of Limits" },
      { id: "3", name: "" },
    ],
    learningObjectives: [
      { id: "1", text: "Understand the concept of mathematical limits" },
      { id: "2", text: "" },
    ],
    prerequisites: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setModuleData((prev) => ({ ...prev, [name]: value }));
  };

  const addTopic = () => {
    const newTopic: Topic = {
      id: Date.now().toString(),
      name: "",
    };
    setModuleData((prev) => ({
      ...prev,
      topics: [...prev.topics, newTopic],
    }));
  };

  const updateTopic = (id: string, name: string) => {
    setModuleData((prev) => ({
      ...prev,
      topics: prev.topics.map((topic) =>
        topic.id === id ? { ...topic, name } : topic,
      ),
    }));
  };

  const removeTopic = (id: string) => {
    setModuleData((prev) => ({
      ...prev,
      topics: prev.topics.filter((topic) => topic.id !== id),
    }));
  };

  const addLearningObjective = () => {
    const newObjective: LearningObjective = {
      id: Date.now().toString(),
      text: "",
    };
    setModuleData((prev) => ({
      ...prev,
      learningObjectives: [...prev.learningObjectives, newObjective],
    }));
  };

  const updateLearningObjective = (id: string, text: string) => {
    setModuleData((prev) => ({
      ...prev,
      learningObjectives: prev.learningObjectives.map((obj) =>
        obj.id === id ? { ...obj, text } : obj,
      ),
    }));
  };

  const removeLearningObjective = (id: string) => {
    setModuleData((prev) => ({
      ...prev,
      learningObjectives: prev.learningObjectives.filter(
        (obj) => obj.id !== id,
      ),
    }));
  };

  const handleSave = () => {
    onSave(moduleData);
    onClose();
  };

  const handleSaveAsDraft = () => {
    console.log("Saving module as draft:", moduleData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Add New Module
              </h2>
              <p className="text-sm text-gray-600">
                Organize your course content into modules
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Module Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Module Title *
              </label>
              <input
                type="text"
                name="title"
                value={moduleData.title}
                onChange={handleInputChange}
                placeholder="e.g., Introduction to Limits"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Module Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Module Description
              </label>
              <textarea
                name="description"
                value={moduleData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Brief description of what this module covers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Module Order and Duration */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Module Order
                </label>
                <div className="relative">
                  <select
                    name="order"
                    value={moduleData.order}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none text-gray-900"
                  >
                    <option value="Module 1 (First)">Module 1 (First)</option>
                    <option value="Module 2">Module 2</option>
                    <option value="Module 3">Module 3</option>
                    <option value="Module 4">Module 4</option>
                    <option value="Module 5">Module 5</option>
                  </select>
                  <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={moduleData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 weeks"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Module Topics */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Module Topics
                </h3>
                <button
                  onClick={addTopic}
                  className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  <Plus className="w-3 h-3" />
                  Add Topic
                </button>
              </div>

              <div className="space-y-3">
                {moduleData.topics.map((topic, index) => (
                  <div
                    key={topic.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="w-6 h-6 bg-indigo-100 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-indigo-600">
                        {index + 1}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={topic.name}
                      onChange={(e) => updateTopic(topic.id, e.target.value)}
                      placeholder="Topic name"
                      className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none"
                    />
                    <button
                      onClick={() => removeTopic(topic.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={addTopic}
                  className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Another Topic
                </button>
              </div>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Learning Objectives
              </h3>

              <div className="space-y-3">
                {moduleData.learningObjectives.map((objective, index) => (
                  <div key={objective.id} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0 mt-2">
                      <span className="text-xs font-medium text-emerald-600">
                        {index + 1}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={objective.text}
                      onChange={(e) =>
                        updateLearningObjective(objective.id, e.target.value)
                      }
                      placeholder="Students will be able to..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                    />
                    <button
                      onClick={() => removeLearningObjective(objective.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors mt-2"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={addLearningObjective}
                  className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Learning Objective
                </button>
              </div>
            </div>

            {/* Prerequisites */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Prerequisites
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Knowledge
                </label>
                <textarea
                  name="prerequisites"
                  value={moduleData.prerequisites}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="What should students know before starting this module?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 rounded-b-2xl">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleSaveAsDraft}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Save as Draft
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                Add Module
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModuleModal;
