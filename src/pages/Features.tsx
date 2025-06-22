import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  BarChart3,
  Lightbulb,
  Users,
  CheckCircle,
  Target,
  HelpCircle,
  Clock,
  GraduationCap,
  Smartphone,
  Brain,
  Timer,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
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
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How It Works
              </Link>
              <a
                href="#for-teachers"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                For Teachers
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </a>
              <Button variant="ghost">Login</Button>
              <Button>Sign Up</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Powerful AI Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how StudyBud AI transforms your learning experience with
              cutting-edge artificial intelligence and personalized insights.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3"
            >
              Try Features Free
            </Button>
          </div>
        </div>
      </section>

      {/* Core AI Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to excel in your studies
            </p>
          </div>

          {/* AI-Generated Feedback */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                AI-Generated Feedback
              </h3>
              <p className="text-lg text-gray-600">
                Get intelligent, detailed feedback on every answer with
                explanations that help you understand concepts better.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Instant detailed explanations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Step-by-step solution breakdowns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Common mistake identification</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-gray-600">AI Feedback Visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Performance Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative lg:order-1">
              <div className="w-96 h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-teal-600" />
                  </div>
                  <p className="text-gray-600">Analytics Dashboard</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Advanced Performance Analytics
              </h3>
              <p className="text-lg text-gray-600">
                Track your progress with detailed analytics that show exactly
                where you're improving and what needs attention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Topic-level performance tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Progress visualization charts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Weakness identification</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Personalized Study Plans */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Personalized Study Plans
              </h3>
              <p className="text-lg text-gray-600">
                Receive AI-generated study recommendations tailored to your
                learning style and performance patterns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Custom practice questions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Adaptive learning paths</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Time management recommendations</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="text-gray-600">Study Plan Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Feature Set */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Feature Set
            </h2>
            <p className="text-xl text-gray-600">
              All the tools you need for academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  Smart Question Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI creates unlimited practice questions based on your
                  curriculum and difficulty level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <HelpCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Weakness Targeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatically identifies and focuses on your weakest areas for
                  maximum improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Time Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track time spent on questions and get insights on pacing for
                  real exams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Exam Simulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practice with realistic exam conditions and timing to build
                  confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Peer Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  See how you stack up against other students in your course or
                  grade level.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Mobile Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Study anywhere with our responsive design that works perfectly
                  on all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              See Features in Action
            </h2>
            <p className="text-xl text-blue-100">
              Experience the power of AI-driven learning with our interactive
              demo. No signup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Try Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-lg text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>5 practice tests per month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic AI feedback</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-0 shadow-lg bg-blue-600 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">$19</span>
                  <span className="text-lg text-blue-100 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-white">Unlimited practice tests</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-white">Advanced AI feedback</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-white">Personalized study plans</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-white">Performance analytics</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$39</span>
                  <span className="text-lg text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>1-on-1 tutoring sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Personalized study plans</span>
                  </li>
                </ul>
                <Button className="w-full">Get Premium</Button>
              </CardContent>
            </Card>
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

export default Features;
