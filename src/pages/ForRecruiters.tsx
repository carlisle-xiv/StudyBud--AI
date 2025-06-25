import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Search,
  Calendar,
  ClipboardCheck,
  Brain,
  TrendingUp,
  Check,
  Rocket,
  Phone,
} from "lucide-react";

const ForRecruiters = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-50 via-blue-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Find Top Talent with Data-Driven Insights
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access verified academic performance data and skill assessments
                to identify the best candidates for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  <Search className="w-5 h-5 mr-2" />
                  Start Recruiting
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fec5375a3a3a6bdc5db921357833e8b44d5b6376"
                alt="Recruitment dashboard interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transform Hiring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Hiring with AI-Powered Assessments
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Create custom tests, analyze psychometrics, and make data-driven
              hiring decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Custom Assessment Builder */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Assessment Builder
              </h3>
              <p className="text-gray-600">
                Create tailored skill assessments, cognitive tests, and
                role-specific evaluations. Our AI helps design questions that
                reveal true candidate potential.
              </p>
            </div>

            {/* AI-Powered Psychometrics */}
            <div className="bg-cyan-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI-Powered Psychometrics
              </h3>
              <p className="text-gray-600">
                Understand personality traits, work styles, team fit, and
                leadership potential through advanced psychological profiling
                and behavioral analysis.
              </p>
            </div>

            {/* Intelligent Results Analysis */}
            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Intelligent Results Analysis
              </h3>
              <p className="text-gray-600">
                Get comprehensive candidate insights with predictive analytics,
                performance forecasting, and cultural fit assessments powered by
                machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Assessment & Analysis Features
            </h2>
          </div>

          <div className="space-y-20">
            {/* Smart Assessment Creation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Smart Assessment Creation
                </h3>
                <p className="text-gray-600 text-lg">
                  Build comprehensive tests with our AI-assisted question
                  generator. Create technical assessments, behavioral
                  evaluations, and cognitive ability tests tailored to your
                  specific roles and company culture.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Technical skill assessments</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Behavioral competency tests</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Cognitive ability evaluations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Role-specific scenario questions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/299a565f650e04bd16a33376a523ebbfed0096ec"
                  alt="Assessment creation interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Deep Psychometric Analysis */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-xl p-6 shadow-lg order-2 lg:order-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e54aad3e70a7e5af6c4c43efe798b214233738"
                  alt="Psychometric analysis dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Deep Psychometric Analysis
                </h3>
                <p className="text-gray-600 text-lg">
                  Understand candidates beyond their resume with comprehensive
                  psychological profiling. Our AI analyzes personality
                  dimensions, emotional intelligence, and work preferences to
                  predict job performance and cultural fit.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Big Five personality assessment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Emotional intelligence scoring</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Leadership potential analysis</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Team dynamics compatibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI-Powered Candidate Insights */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  AI-Powered Candidate Insights
                </h3>
                <p className="text-gray-600 text-lg">
                  Get detailed candidate profiles with predictive analytics. Our
                  AI processes assessment results to provide actionable insights
                  about performance potential, learning agility, and long-term
                  success probability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Performance prediction models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Cultural fit scoring</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Growth potential assessment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Risk factor identification</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-semibold">Technical Skills</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">85%</span>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-semibold">Cultural Fit</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-22 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-semibold">Leadership Potential</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-19 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fcd1f98cf662ff965e2708c4d6ea218afe9490c"
                  alt="Sarah Johnson"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">Senior HR Director, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "StudyBud AI revolutionized our campus recruitment. We can now
                identify top performers before they even graduate. Our new hire
                success rate increased by 40% and time-to-productivity decreased
                significantly."
              </p>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-blue-600 font-semibold">
                  Success Rate: +40% improvement
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74015530f44cf7e10d8e785c832ee392f0f98381"
                  alt="Michael Chen"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-gray-600">
                    Head of Talent Acquisition, InnovateLabs
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "The data-driven insights are incredible. We can see not just
                what students know, but how they think and learn. This helps us
                match candidates to roles where they'll truly excel and grow."
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-600 font-semibold">
                  Hiring Accuracy: 85% role-fit success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recruitment Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your hiring needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Startup Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Startup</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">$299</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to 50 candidate profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic filtering & search</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Standard reports</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">$799</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to 200 candidate profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced AI matching</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Detailed analytics reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom skill assessments</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited candidate access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>API integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom workflows</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Find Your Next Star Performer?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ companies already using StudyBud AI to identify and
            recruit top talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-white">
                  StudyBud AI
                </span>
              </div>
              <p className="text-gray-400">
                Empowering students and educators with AI-powered learning
                insights.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-gray-400 hover:text-white"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">For</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Students
                  </a>
                </li>
                <li>
                  <Link
                    to="/for-teachers"
                    className="text-gray-400 hover:text-white"
                  >
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/for-recruiters"
                    className="text-gray-400 hover:text-white"
                  >
                    Recruiters
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Schools
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForRecruiters;
