import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BookOpen,
  BarChart3,
  Lightbulb,
  Users,
  CheckCircle,
  Target,
  TrendingUp,
  MessageSquare,
  Download,
  Smartphone,
  Star,
  ChevronDown,
  Menu,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyBud AI
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it Works
              </Link>
              <Link
                to="/for-teachers"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                For Teachers
              </Link>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </a>
              <Button variant="ghost">Login</Button>
              <Button>Sign Up</Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Study <span className="text-blue-600">Smarter</span>,<br />
                  Not Harder
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  AI-Powered Reports That Help You Ace Your Exams. Get
                  personalized insights and improve your performance with
                  intelligent study recommendations.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Take a Smart Practice Test
              </Button>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👨‍🎓</span>
                    </div>
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👩‍💻</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-white text-sm">
                          Study Progress
                        </span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-white text-sm">AI Insights</span>
                      </div>
                      <div className="text-white text-xs">
                        Performance improved by 23%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How StudyBud AI Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How StudyBud AI Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your study experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Take an Exam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from hundreds of practice tests tailored to your course
                  and difficulty level.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Get an AI Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive detailed analysis of your performance with insights
                  and recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Improve with Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Follow personalized study plans and practice questions to
                  boost your exam performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Powerful Features */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Learning
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to excel in your studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">AI-Generated Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Get intelligent feedback on your answers with detailed
                  explanations and improvement suggestions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Track your progress across topics and identify areas that need
                  more attention with detailed analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Study Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Receive personalized study recommendations and practice
                  questions based on your performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">
                  Teacher-Created Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Access quality content by real teachers aligned with your
                  curriculum and learning objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Educators */}
      <section
        id="for-teachers"
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  For Educators
                </h2>
                <h3 className="text-2xl font-semibold">
                  Create Courses & Upload Your Syllabus
                </h3>
                <p className="text-blue-100 text-lg">
                  Empower your students with AI-driven insights. Create custom
                  courses, track student progress, and provide personalized
                  feedback at scale.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Easy course creation tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Automated grading and reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Student progress analytics</span>
                </div>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Teaching with AI
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white/80">Teacher Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "StudyBud AI helped me identify my weak areas in calculus. I
                  improved my grade from C+ to A in just one semester!"
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Mathematics Major</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The AI feedback is incredibly detailed. It's like having a
                  personal tutor available 24/7 to help me improve my answers."
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Marcus Johnson
                    </p>
                    <p className="text-sm text-gray-500">Pre-Med Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "My productivity improved from stress me so much time. I was
                  exactly what to focus on for my SATs!"
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Emma Rodriguez
                    </p>
                    <p className="text-sm text-gray-500">High School Senior</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Study Experience?
            </h2>
            <p className="text-xl text-purple-100">
              Join thousands of students who are already studying smarter with
              AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How accurate is the AI feedback?",
                  answer:
                    "Our AI is trained on millions of student responses and provides 94% accurate feedback, continuously improving through teacher validation and student outcomes.",
                },
                {
                  question: "Can I use this for any subject?",
                  answer:
                    "Yes, our platform covers 50+ subjects including STEM, humanities, languages, and professional certification preparation.",
                },
                {
                  question: "Is there a mobile app?",
                  answer:
                    "Our platform is fully responsive and works perfectly on all devices. Native mobile apps are coming soon for iOS and Android.",
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
                Empowering students with AI-driven learning insights.
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
                  <Instagram className="h-5 w-5" />
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
                  <Mail className="h-5 w-5" />
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

export default Index;
