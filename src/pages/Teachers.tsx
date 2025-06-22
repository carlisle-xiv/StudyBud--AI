import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import {
  Clock,
  TrendingUp,
  Users,
  Upload,
  Edit3,
  AlignLeft,
  HelpCircle,
  Zap,
  Layers,
  BarChart3,
  GraduationCap,
  Flag,
  Lightbulb,
  BookOpen,
  Target,
  Monitor,
  Award,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const Teachers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-8 items-center justify-center">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0002 1.5C14.6205 1.5 14.2455 1.56562 13.8893 1.69219L0.740858 6.44062C0.295546 6.60469 0.000233231 7.02656 0.000233231 7.5C0.000233231 7.97344 0.295546 8.39531 0.740858 8.55938L3.45492 9.53906C2.68617 10.7484 2.25023 12.1781 2.25023 13.6828V15C2.25023 16.3313 1.74398 17.7047 1.20492 18.7875C0.900233 19.3969 0.553358 19.9969 0.150233 20.55C0.000233233 20.7516 -0.0419543 21.0141 0.0424207 21.2531C0.126796 21.4922 0.323671 21.6703 0.567421 21.7313L3.56742 22.4813C3.7643 22.5328 3.97523 22.4953 4.14867 22.3875C4.32211 22.2797 4.44398 22.1016 4.48148 21.9C4.88461 19.8938 4.68305 18.0938 4.38305 16.8047C4.23305 16.1391 4.03148 15.4594 3.75023 14.8359V13.6828C3.75023 12.2672 4.22836 10.9312 5.05805 9.8625C5.66273 9.13594 6.44555 8.55 7.3643 8.18906L14.7237 5.29688C15.108 5.14687 15.544 5.33437 15.694 5.71875C15.844 6.10313 15.6565 6.53906 15.2721 6.68906L7.91273 9.58125C7.33148 9.81094 6.82055 10.1625 6.40336 10.5938L13.8846 13.2938C14.2409 13.4203 14.6159 13.4859 14.9955 13.4859C15.3752 13.4859 15.7502 13.4203 16.1065 13.2938L29.2596 8.55938C29.7049 8.4 30.0002 7.97344 30.0002 7.5C30.0002 7.02656 29.7049 6.60469 29.2596 6.44062L16.1112 1.69219C15.7549 1.56562 15.3799 1.5 15.0002 1.5ZM6.00023 19.125C6.00023 20.7797 10.0315 22.5 15.0002 22.5C19.969 22.5 24.0002 20.7797 24.0002 19.125L23.283 12.3094L16.6174 14.7188C16.0971 14.9062 15.5487 15 15.0002 15C14.4518 15 13.8987 14.9062 13.383 14.7188L6.71742 12.3094L6.00023 19.125Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyBud AI
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                How It Works
              </Link>
              <span className="text-blue-600 font-medium">For Teachers</span>
              <Link
                to="/reviews"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Reviews
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-600">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Empower Your Teaching with AI Insights
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create intelligent assessments, track student progress, and
                provide personalized feedback at scale. Transform your classroom
                with StudyBud AI for educators.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/31d5e77294e94056b9c909990ecdfd2f/figma-screenshot-3b0b60?format=webp&width=800"
                alt="Teacher using StudyBud AI"
                className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Teachers Choose StudyBud AI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Teachers Choose StudyBud AI
            </h2>
            <p className="text-xl text-gray-600">
              Save time, improve outcomes, and gain deeper insights into student
              learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-blue-50 border-0 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Save 10+ Hours Weekly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Automated grading and instant feedback generation reduces your
                workload significantly
              </p>
            </Card>

            <Card className="p-8 bg-green-50 border-0 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Improve Student Outcomes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Data-driven insights help you identify struggling students early
                and provide targeted support
              </p>
            </Card>

            <Card className="p-8 bg-purple-50 border-0 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scale Personalization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Provide personalized learning paths for every student,
                regardless of class size
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Powerful Tools for Educators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Educators
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create, assess, and analyze student
              performance
            </p>
          </div>

          {/* Create Courses & Upload Syllabus */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Create Courses & Upload Syllabus
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Upload your curriculum and let our AI generate aligned
                assessments. Create comprehensive courses with learning
                objectives, materials, and assessments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">
                    Drag & drop syllabus upload
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Edit3 className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">
                    AI-generated question banks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <AlignLeft className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">
                    Curriculum alignment tools
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Smart Assessment Creation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="flex justify-center lg:order-first">
              <div className="w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl shadow-lg flex items-center justify-center">
                <Target className="w-24 h-24 text-cyan-600" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Smart Assessment Creation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Build comprehensive assessments with multiple question types.
                Our AI suggests questions based on learning objectives and
                difficulty levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-cyan-600" />
                  <span className="text-gray-700">
                    Multiple question formats
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-cyan-600" />
                  <span className="text-gray-700">
                    AI-powered question suggestions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-cyan-600" />
                  <span className="text-gray-700">
                    Difficulty level balancing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive Analytics
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get detailed insights into class performance, individual student
                progress, and curriculum effectiveness with real-time analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">
                    Real-time performance tracking
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">
                    Individual student insights
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Flag className="w-4 h-4 text-purple-600" />
                  <span className="text-gray-700">
                    Early intervention alerts
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Teaching Workflow, Simplified */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Teaching Workflow, Simplified
            </h2>
            <p className="text-xl text-gray-600">
              From course creation to student success tracking
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                1. Upload Content
              </h3>
              <p className="text-gray-600">
                Upload your syllabus and course materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Edit3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                2. Create Assessments
              </h3>
              <p className="text-gray-600">
                Build tests with AI-generated questions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                3. Monitor Progress
              </h3>
              <p className="text-gray-600">
                Track student performance in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                4. Provide Insights
              </h3>
              <p className="text-gray-600">
                Share personalized feedback with students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Educators Are Saying */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Educators Are Saying
            </h2>
            <p className="text-xl text-blue-100">
              Hear from teachers who've transformed their classrooms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">SC</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Sarah Chen</h4>
                  <p className="text-gray-600">
                    Math Professor, State University
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "StudyBud AI has revolutionized how I assess student
                understanding. The insights help me identify struggling students
                weeks earlier than before."
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">MR</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                  <p className="text-gray-600">High School Science Teacher</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Creating assessments used to take hours. Now I can generate
                comprehensive tests in minutes while maintaining quality and
                alignment."
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">EW</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Prof. Emily Watson
                  </h4>
                  <p className="text-gray-600">English Department Head</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The personalized feedback feature has improved student
                engagement dramatically. They actually look forward to receiving
                their reports!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexible Plans for Every Institution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Plans for Every Institution
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your school's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Teacher */}
            <Card className="p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Individual Teacher
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">$30</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Up to 150 students</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Unlimited assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Card>

            {/* School License */}
            <Card className="p-8 shadow-lg border-2 border-blue-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Most Popular
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                School License
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Up to 50 teachers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Unlimited students</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Admin dashboard</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Sales
              </Button>
            </Card>

            {/* District */}
            <Card className="p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">District</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Training included</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Get Quote
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-20">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-6 w-8 items-center justify-center">
                  <svg
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0002 1.5C14.6205 1.5 14.2455 1.56562 13.8893 1.69219L0.740858 6.44062C0.295546 6.60469 0.000233231 7.02656 0.000233231 7.5C0.000233231 7.97344 0.295546 8.39531 0.740858 8.55938L3.45492 9.53906C2.68617 10.7484 2.25023 12.1781 2.25023 13.6828V15C2.25023 16.3313 1.74398 17.7047 1.20492 18.7875C0.900233 19.3969 0.553358 19.9969 0.150233 20.55C0.000233233 20.7516 -0.0419543 21.0141 0.0424207 21.2531C0.126796 21.4922 0.323671 21.6703 0.567421 21.7313L3.56742 22.4813C3.7643 22.5328 3.97523 22.4953 4.14867 22.3875C4.32211 22.2797 4.44398 22.1016 4.48148 21.9C4.88461 19.8938 4.68305 18.0938 4.38305 16.8047C4.23305 16.1391 4.03148 15.4594 3.75023 14.8359V13.6828C3.75023 12.2672 4.22836 10.9312 5.05805 9.8625C5.66273 9.13594 6.44555 8.55 7.3643 8.18906L14.7237 5.29688C15.108 5.14687 15.544 5.33437 15.694 5.71875C15.844 6.10313 15.6565 6.53906 15.2721 6.68906L7.91273 9.58125C7.33148 9.81094 6.82055 10.1625 6.40336 10.5938L13.8846 13.2938C14.2409 13.4203 14.6159 13.4859 14.9955 13.4859C15.3752 13.4859 15.7502 13.4203 16.1065 13.2938L29.2596 8.55938C29.7049 8.4 30.0002 7.97344 30.0002 7.5C30.0002 7.02656 29.7049 6.60469 29.2596 6.44062L16.1112 1.69219C15.7549 1.56562 15.3799 1.5 15.0002 1.5ZM6.00023 19.125C6.00023 20.7797 10.0315 22.5 15.0002 22.5C19.969 22.5 24.0002 20.7797 24.0002 19.125L23.283 12.3094L16.6174 14.7188C16.0971 14.9062 15.5487 15 15.0002 15C14.4518 15 13.8987 14.9062 13.383 14.7188L6.71742 12.3094L6.00023 19.125Z"
                      fill="#3B82F6"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold">StudyBud AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering education through AI-driven insights and personalized
                learning experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 StudyBud AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Teachers;
