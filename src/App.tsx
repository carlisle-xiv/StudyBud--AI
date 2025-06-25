import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Teachers from "./pages/Teachers";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StudentDashboard from "./pages/StudentDashboard";
import CourseEnrollment from "./pages/CourseEnrollment";
import ExamInterface from "./pages/ExamInterface";
import ExamSelection from "./pages/ExamSelection";
import ExamProcessing from "./pages/ExamProcessing";
import Reports from "./pages/Reports";
import ExamResults from "./pages/ExamResults";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherCourses from "./pages/TeacherCourses";
import CreateCourse from "./pages/CreateCourse";
import TeacherExamCreation from "./pages/TeacherExamCreation";
import ManualExamCreation from "./pages/ManualExamCreation";
import AIExamGeneration from "./pages/AIExamGeneration";
import AIExamGenerationLoading from "./pages/AIExamGenerationLoading";
import ExamPreview from "./pages/ExamPreview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-teachers" element={<Teachers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/courses" element={<CourseEnrollment />} />
          <Route path="/exam-selection" element={<ExamSelection />} />
          <Route path="/exam" element={<ExamInterface />} />
          <Route path="/exam-processing" element={<ExamProcessing />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:examId" element={<ExamResults />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-courses" element={<TeacherCourses />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route
            path="/teacher-exam-creation"
            element={<TeacherExamCreation />}
          />
          <Route
            path="/manual-exam-creation"
            element={<ManualExamCreation />}
          />
          <Route path="/ai-exam-generation" element={<AIExamGeneration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
