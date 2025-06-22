import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BookOpen,
  BarChart3,
  Upload,
  Settings,
  FileText,
  MapPin,
  Play,
  TrendingUp,
  HelpCircle,
  Award,
  CheckCircle,
  ChevronDown,
  Menu,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyBud AI
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                How It Works
              </Link>
              <Link
                to="/for-teachers"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                For Teachers
              </Link>
              <Link
                to="/reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </Link>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Button>Sign Up</Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How StudyBud AI Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your study routine with AI-powered insights in just
              three simple steps. See how thousands of students are achieving
              better results.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Three Steps to Success */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Steps to Success
            </h2>
            <p className="text-xl text-gray-600">
              Our proven process that helps students improve their grades
            </p>
          </div>

          {/* Step 1: Take an AI-Powered Exam */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Take an AI-Powered Exam
                </h3>
              </div>
              <p className="text-lg text-gray-600">
                Choose from thousands of practice exams created by real teachers
                or let our AI generate custom questions based on your curriculum
                and difficulty level.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Access to 10,000+ practice questions
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Questions adapted to your learning level
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Realistic exam timing and conditions
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-gray-600">AI-Powered Exam Interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Get Your AI Report */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative lg:order-1">
              <div className="w-96 h-96 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-cyan-600" />
                  </div>
                  <p className="text-gray-600">AI Report Dashboard</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Get Your AI Report
                </h3>
              </div>
              <p className="text-lg text-gray-600">
                Receive instant, comprehensive feedback powered by advanced AI.
                Our system analyzes every answer and provides detailed
                explanations and insights.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Detailed explanations for every question
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Topic-level performance breakdown
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Strength and weakness identification
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3: Improve with Personalized Insights */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Improve with Personalized Insights
                </h3>
              </div>
              <p className="text-lg text-gray-600">
                Follow your custom study plan with targeted practice questions,
                learning resources, and progress tracking to maximize your
                improvement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Personalized study recommendations
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Adaptive practice questions
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Progress tracking and goal setting
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="text-gray-600">Progress Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600">
              See how our AI technology works to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Answer Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Your responses are securely processed by our AI engine
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Advanced algorithms analyze patterns and identify learning
                  gaps
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Report Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive insights are compiled into actionable reports
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Study Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Personalized learning paths are created for optimal progress
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Learning Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600">
              Track your progress from first test to exam success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-12">
                {/* Day 1 */}
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Day 1: Take Your First Test
                    </h3>
                    <p className="text-gray-600">
                      Start with a diagnostic exam to establish your baseline
                      performance
                    </p>
                  </div>
                </div>

                {/* Week 1 */}
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center relative z-10">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Week 1: Analyze & Plan
                    </h3>
                    <p className="text-gray-600">
                      Review your AI report and begin following your
                      personalized study plan
                    </p>
                  </div>
                </div>

                {/* Week 2-4 */}
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                    <HelpCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Week 2-4: Focused Practice
                    </h3>
                    <p className="text-gray-600">
                      Work on weak areas with targeted questions and track
                      improvement
                    </p>
                  </div>
                </div>

                {/* Exam Day */}
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center relative z-10">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Exam Day: Achieve Success
                    </h3>
                    <p className="text-gray-600">
                      Feel confident and prepared with comprehensive practice
                      and insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-blue-100">
              See the impact StudyBud AI has on student performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-blue-100">Grade Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.3x</div>
              <div className="text-blue-100">Faster Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about how StudyBud AI works
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How accurate is the AI feedback?",
                  answer:
                    "Our AI has been trained on millions of student responses and achieves 95% accuracy in identifying learning gaps and providing relevant feedback.",
                },
                {
                  question: "How long does it take to see results?",
                  answer:
                    "Most students see improvement within 2-3 weeks of consistent practice. Our data shows an average grade increase of 1.5 letter grades within a month.",
                },
                {
                  question: "Can I use StudyBud AI for any subject?",
                  answer:
                    "Yes! We support over 50 subjects including STEM, humanities, languages, and professional certifications. Our AI adapts to each subject's unique requirements.",
                },
                {
                  question: "Is my data secure and private?",
                  answer:
                    "Absolutely. We use enterprise-grade encryption and never share your personal data. Your study progress and performance data is completely private.",
                },
              ].map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openFaq === index}
                  onOpenChange={() => toggleFaq(index)}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-white p-6 text-left shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 pt-2 bg-white rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Transform Your Study Routine?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of students who are already achieving better
              results with StudyBud AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">StudyBud AI</span>
              </div>
              <p className="text-gray-400">
                Empowering students with AI-powered learning insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © 2024 StudyBud AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
