import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Teachers from "./pages/Teachers";
import ForRecruiters from "./pages/ForRecruiters";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AcceptInvite from "./pages/AcceptInvite";
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
import StudentPerformance from "./pages/StudentPerformance";
import TeacherResources from "./pages/TeacherResources";
import UploadResource from "./pages/UploadResource";
import TeacherActions from "./pages/TeacherActions";
import CoursePreview from "./pages/CoursePreview";
import TeacherAlerts from "./pages/TeacherAlerts";
import TeacherDrafts from "./pages/TeacherDrafts";
import TeacherQuestionReview from "./pages/TeacherQuestionReview";
import EditQuestion from "./pages/EditQuestion";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTeachers from "./pages/AdminTeachers";
import AdminCourses from "./pages/AdminCourses";
import AdminStudents from "./pages/AdminStudents";
import AdminExams from "./pages/AdminExams";
import AdminSettings from "./pages/AdminSettings";
import AddNewAdmin from "./pages/AddNewAdmin";
import AdminReports from "./pages/AdminReports";
import AdminBilling from "./pages/AdminBilling";
import DownloadInvoice from "./pages/DownloadInvoice";
import Privacy from "./pages/Privacy";
import EmailVerification from "./pages/EmailVerification";
import TeacherPendingApproval from "./pages/TeacherPendingApproval";
import PlatformAdminDashboard from "./pages/PlatformAdminDashboard";
import PlatformAdminSchools from "./pages/PlatformAdminSchools";
import PlatformAdminAnalytics from "./pages/PlatformAdminAnalytics";
import PlatformAdminData from "./pages/PlatformAdminData";
import PlatformAdminUsers from "./pages/PlatformAdminUsers";
import PlatformAdminPlatform from "./pages/PlatformAdminPlatform";
import PlatformAdminSettings from "./pages/PlatformAdminSettings";
import CreateSchool from "./pages/CreateSchool";
import AllStudents from "./pages/AllStudents";
import StudyPlan from "./pages/StudyPlan";
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
          <Route path="/for-recruiters" element={<ForRecruiters />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route
            path="/teacher-pending-approval"
            element={<TeacherPendingApproval />}
          />
          <Route path="/accept-invite" element={<AcceptInvite />} />
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
          <Route
            path="/ai-exam-loading"
            element={<AIExamGenerationLoading />}
          />
          <Route path="/exam-preview" element={<ExamPreview />} />
          <Route path="/student-performance" element={<StudentPerformance />} />
          <Route path="/teacher-resources" element={<TeacherResources />} />
          <Route path="/upload-resource" element={<UploadResource />} />
          <Route path="/teacher-actions" element={<TeacherActions />} />
          <Route path="/course-preview/:courseId" element={<CoursePreview />} />
          <Route path="/teacher-alerts" element={<TeacherAlerts />} />
          <Route path="/teacher-drafts" element={<TeacherDrafts />} />
          <Route
            path="/teacher-question-review"
            element={<TeacherQuestionReview />}
          />
          <Route path="/edit-question/:questionId" element={<EditQuestion />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-teachers" element={<AdminTeachers />} />
          <Route path="/admin-courses" element={<AdminCourses />} />
          <Route path="/admin-students" element={<AdminStudents />} />
          <Route path="/admin-exams" element={<AdminExams />} />
          <Route path="/admin-settings" element={<AdminSettings />} />
          <Route path="/add-new-admin" element={<AddNewAdmin />} />
          <Route path="/admin-reports" element={<AdminReports />} />
          <Route path="/admin-billing" element={<AdminBilling />} />
          <Route
            path="/download-invoice/:invoiceId"
            element={<DownloadInvoice />}
          />
          <Route
            path="/platform-admin-dashboard"
            element={<PlatformAdminDashboard />}
          />
          <Route
            path="/platform-admin-schools"
            element={<PlatformAdminSchools />}
          />
          <Route
            path="/platform-admin-analytics"
            element={<PlatformAdminAnalytics />}
          />
          <Route path="/platform-admin-data" element={<PlatformAdminData />} />
          <Route
            path="/platform-admin-users"
            element={<PlatformAdminUsers />}
          />
          <Route
            path="/platform-admin-platform"
            element={<PlatformAdminPlatform />}
          />
          <Route
            path="/platform-admin-settings"
            element={<PlatformAdminSettings />}
          />
          <Route path="/create-school" element={<CreateSchool />} />
          <Route path="/all-students" element={<AllStudents />} />
          <Route path="/study-plan" element={<StudyPlan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
