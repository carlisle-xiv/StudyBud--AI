import { createBrowserRouter } from "react-router-dom";
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
import AdminDashboard from "./pages/AdminDashboard";
import AdminTeachers from "./pages/AdminTeachers";
import AdminCourses from "./pages/AdminCourses";
import AdminStudents from "./pages/AdminStudents";
import AdminExams from "./pages/AdminExams";
import AddNewAdmin from "./pages/AddNewAdmin";
import AdminReports from "./pages/AdminReports";
import AdminBilling from "./pages/AdminBilling";
import DownloadInvoice from "./pages/DownloadInvoice";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Teachers from "./pages/Teachers";
import ForRecruiters from "./pages/ForRecruiters";
import Reviews from "./pages/Reviews";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AcceptInvite from "./pages/AcceptInvite";
import StudentDashboard from "./pages/StudentDashboard";
import CourseEnrollment from "./pages/CourseEnrollment";
import ExamSelection from "./pages/ExamSelection";
import ExamInterface from "./pages/ExamInterface";
import ExamProcessing from "./pages/ExamProcessing";
import Reports from "./pages/Reports";
import AdminSettings from "./pages/AdminSettings";

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
        path: "/login",
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
        path: "/dashboard",
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
        path: "*",
        element: <NotFound />,
    },
])