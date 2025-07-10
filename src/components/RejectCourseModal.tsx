import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, AlertTriangle, FileText } from "lucide-react";

interface RejectCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string, customReason?: string) => void;
  courseName: string;
  instructor: string;
}

const RejectCourseModal: React.FC<RejectCourseModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  courseName,
  instructor,
}) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedReasons = [
    "Insufficient academic content depth",
    "Course objectives not clearly defined",
    "Missing prerequisite information",
    "Inadequate assessment methods",
    "Content not aligned with department standards",
    "Inappropriate difficulty level for target audience",
    "Incomplete course materials",
    "Lacks proper learning objectives",
    "Safety protocols missing (for lab courses)",
    "Copyright or intellectual property concerns",
    "Other (please specify)",
  ];

  const handleSubmit = async () => {
    if (!selectedReason) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const finalReason =
        selectedReason === "Other (please specify)"
          ? customReason
          : selectedReason;
      onConfirm(finalReason, customReason);
      setIsSubmitting(false);
      handleClose();
    }, 1000);
  };

  const handleClose = () => {
    setSelectedReason("");
    setCustomReason("");
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Reject Course
              </h3>
              <p className="text-sm text-gray-600">
                Please provide a reason for rejection
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isSubmitting}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Course Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">{courseName}</p>
                <p className="text-sm text-gray-600">by {instructor}</p>
              </div>
            </div>
          </div>

          {/* Reason Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">
              Reason for rejection *
            </label>
            <Select value={selectedReason} onValueChange={setSelectedReason}>
              <SelectTrigger>
                <SelectValue placeholder="Select a reason..." />
              </SelectTrigger>
              <SelectContent>
                {predefinedReasons.map((reason, index) => (
                  <SelectItem key={index} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Custom Reason Input */}
          {selectedReason === "Other (please specify)" && (
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Please specify the reason *
              </label>
              <textarea
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Enter your reason for rejecting this course..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                rows={4}
                disabled={isSubmitting}
              />
            </div>
          )}

          {/* Additional Details (Optional) */}
          {selectedReason && selectedReason !== "Other (please specify)" && (
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Additional details (optional)
              </label>
              <textarea
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Provide additional context or suggestions for improvement..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                rows={3}
                disabled={isSubmitting}
              />
            </div>
          )}

          {/* Warning Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  Important Notice
                </p>
                <p className="text-sm text-yellow-700">
                  The instructor will receive an email notification with your
                  rejection reason. They can revise and resubmit the course for
                  review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={
              !selectedReason ||
              (selectedReason === "Other (please specify)" && !customReason) ||
              isSubmitting
            }
            className="bg-red-600 hover:bg-red-700"
          >
            {isSubmitting ? "Rejecting..." : "Reject Course"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RejectCourseModal;
