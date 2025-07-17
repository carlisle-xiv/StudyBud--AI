import { createBrowserRouter } from "react-router-dom";
import ExamResults from "@/pages/Exams/ExamResults";
import TeacherDashboard from "@/pages/Teacher/TeacherDashboard";
import TeacherCourses from "@/pages/Course/TeacherCourses";
import CreateCourse from "@/pages/Course/CreateCourse";
import TeacherExamCreation from "@/pages/Exams/TeacherExamCreation";
import ManualExamCreation from "@/pages/Exams/ManualExamCreation";
import AIExamGeneration from "@/pages/Exams/AIExamGeneration";
import AIExamGenerationLoading from "@/pages/Exams/AIExamGenerationLoading";
import ExamPreview from "@/pages/Exams/ExamPreview";
import StudentPerformance from "@/pages/Student/StudentPerformance";
import TeacherResources from "@/pages/Teacher/TeacherResources";
import UploadResource from "@/pages/Resources/UploadResource";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import AdminTeachers from "@/pages/Admin/AdminTeachers";
import AdminCourses from "@/pages/Admin/AdminCourses";
import AdminStudents from "@/pages/Admin/AdminStudents";
import AdminExams from "@/pages/Admin/AdminExams";
import AddNewAdmin from "@/pages/Admin/AddNewAdmin";
import AdminReports from "@/pages/Report/AdminReports";
import AdminBilling from "@/pages/Billing/AdminBilling";
import DownloadInvoice from "@/pages/Resources/DownloadInvoice";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Landing Page/Index";
import Features from "@/pages/Landing Page/Features";
import HowItWorks from "@/pages/Landing Page/HowItWorks";
import Teachers from "@/pages/Teacher/Teachers";
import ForRecruiters from "@/pages/Landing Page/ForRecruiters";
import Reviews from "@/pages/Landing Page/Reviews";
import Privacy from "@/pages/Landing Page/Privacy";
import Login from "@/pages/User Management/Login";
import SignUp from "@/pages/User Management/SignUp";
import ForgotPassword from "@/pages/User Management/ForgotPassword";
import AcceptInvite from "@/pages/User Management/AcceptInvite";
import StudentDashboard from "@/pages/Student/StudentDashboard";
import CourseEnrollment from "@/pages/Course/CourseEnrollment";
import ExamSelection from "@/pages/Exams/ExamSelection";
import ExamInterface from "@/pages/Exams/ExamInterface";
import ExamProcessing from "@/pages/Exams/ExamProcessing";
import Reports from "@/pages/Report/Reports";
import AdminSettings from "@/pages/Settings/AdminSettings";
import EmailVerification from "./pages/User Management/EmailVerification";
import UserPendingApproval from "./pages/User Management/UserPendingApproval";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/features",
        element: <Features />,
    },
    {
        path: "/how-it-works",
        element: <HowItWorks />,
    },
    {
        path: "/for-teachers",
        element: <Teachers />,
    },
    {
        path: "/for-recruiters",
        element: <ForRecruiters />,
    },
    {
        path: "/reviews",
        element: <Reviews />,
    },
    {
        path: "/privacy",
        element: <Privacy />,
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/accept-invite",
        element: <AcceptInvite />,
    },
    {
        path: "/student-dashboard",
        element: <StudentDashboard />,
    },
    {
        path: "/courses",
        element: <CourseEnrollment />,
    },
    {
        path: "/exam-selection",
        element: <ExamSelection />,
    },
    {
        path: "/exam",
        element: <ExamInterface />,
    },
    {
        path: "/exam-processing",
        element: <ExamProcessing />,
    },
    {
        path: "/reports",
        element: <Reports />,
    },
    {
        path: "/reports/:examId",
        element: <ExamResults />,
    },
    {
        path: "/teacher-dashboard",
        element: <TeacherDashboard />,
    },
    {
        path: "/teacher-courses",
        element: <TeacherCourses />,
    },
    {
        path: "/create-course",
        element: <CreateCourse />,
    },
    {
        path: "/teacher-exam-creation",
        element: <TeacherExamCreation />,
    },
    {
        path: "/manual-exam-creation",
        element: <ManualExamCreation />,
    },
    {
        path: "/ai-exam-generation",
        element: <AIExamGeneration />,
    },
    {
        path: "/ai-exam-loading",
        element: <AIExamGenerationLoading />,
    },
    {
        path: "/exam-preview",
        element: <ExamPreview />,
    },
    {
        path: "/student-performance",
        element: <StudentPerformance />,
    },
    {
        path: "/teacher-resources",
        element: <TeacherResources />,
    },
    {
        path: "/upload-resource",
        element: <UploadResource />,
    },
    {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
    },
    {
        path: "/admin-teachers",
        element: <AdminTeachers />,
    },
    {
        path: "/admin-courses",
        element: <AdminCourses />,
    },
    {
        path: "/admin-students",
        element: <AdminStudents />,
    },
    {
        path: "/admin-exams",
        element: <AdminExams />,
    },
    {
        path: "/admin-settings",
        element: <AdminSettings />,
    },
    {
        path: "/add-new-admin",
        element: <AddNewAdmin />,
    },
    {
        path: "/admin-reports",
        element: <AdminReports />,
    },
    {
        path: "/admin-billing",
        element: <AdminBilling />,
    },
    {
        path: "/download-invoice/:invoiceId",
        element: <DownloadInvoice />,
    },
    {
        path: "/email-verification",
        element: <EmailVerification />
    },
    {
        path: "/pendingapproval",
        element: <UserPendingApproval />
    },
    {
        path: "*",
        element: <NotFound />,
    },
])