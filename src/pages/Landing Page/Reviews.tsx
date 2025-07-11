import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState("All Reviews");

  const filters = [
    "All Reviews",
    "Students",
    "Teachers",
    "High School",
    "University",
    "5 Stars",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-r from-blue-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              What Our Community Says
            </h1>
            <p className="text-xl text-gray-600 mb-16">
              Join thousands of students and educators who have transformed
              their learning and teaching experience with StudyBud
            </p>

            {/* Statistics */}
            <div className="flex justify-center items-center gap-16 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-blue-600">
                    4.9/5
                  </span>
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">
                  25K+
                </div>
                <p className="text-gray-600">Happy Students</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  1,200+
                </div>
                <p className="text-gray-600">Educators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-20">
          <div className="flex justify-center">
            <div className="flex gap-4 flex-wrap">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "secondary"}
                  className={`rounded-full px-6 py-3 ${activeFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Featured Success Stories
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Alex Thompson */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      AT
                    </span>
                  </div>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Alex Thompson
                  </h3>
                  <p className="text-gray-600">Computer Science Student, MIT</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "StudyBud completely changed how I prepare for exams. The
                AI-generated insights helped me identify my weak points in
                algorithms and data structures. I went from struggling with C+
                grades to consistently scoring A's. The personalized study
                recommendations are incredibly accurate."
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-semibold">
                  Grade Improvement: C+ → A average
                </p>
              </div>
            </Card>

            {/* Dr. Maria Rodriguez */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">
                      MR
                    </span>
                  </div>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Dr. Maria Rodriguez
                  </h3>
                  <p className="text-gray-600">
                    Biology Professor, Stanford University
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "As an educator with 15 years of experience, StudyBud is the
                most innovative tool I've encountered. It saves me 12+ hours
                weekly on grading and provides insights I never had before. My
                students are more engaged and their performance has improved
                dramatically."
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-600 font-semibold">
                  Time Saved: 12+ hours per week
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Student Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Emma Chen */}
            <Card className="p-6 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold">EC</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">Emma Chen</h4>
                  <p className="text-sm text-gray-600">Pre-Med Student</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The practice tests are incredibly realistic and the feedback is
                so detailed. I finally understand where I was going wrong in
                organic chemistry!"
              </p>
            </Card>

            {/* James Wilson */}
            <Card className="p-6 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">JW</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">James Wilson</h4>
                  <p className="text-sm text-gray-600">Engineering Student</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Game changer for calculus! The AI explains concepts in multiple
                ways until you get it. My grades improved from D to B+ in one
                semester."
              </p>
            </Card>

            {/* Sophie Martinez */}
            <Card className="p-6 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">SM</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">Sophie Martinez</h4>
                  <p className="text-sm text-gray-600">Psychology Major</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Love how it adapts to my learning style. The study schedule
                feature helped me balance multiple courses effectively. Highly
                recommend!"
              </p>
            </Card>

            {/* David Park */}
            <Card className="p-6 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-semibold">DP</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">David Park</h4>
                  <p className="text-sm text-gray-600">Business Student</p>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <Star className="w-3 h-3 text-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The analytics dashboard shows exactly where I need to focus.
                Helped me ace my finance final after struggling all semester."
              </p>
            </Card>

            {/* Rachel Kim */}
            <Card className="p-6 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">RK</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">Rachel Kim</h4>
                  <p className="text-sm text-gray-600">High School Senior</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Perfect for SAT prep! The adaptive questions match the real
                test difficulty. Improved my math score by 150 points!"
              </p>
            </Card>

            {/* Michael Brown */}
            <Card className="p-6 bg-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <div className="w-full h-full bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold">MB</span>
                  </div>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Brown</h4>
                  <p className="text-sm text-gray-600">History Major</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Even works great for essay-based subjects! The AI feedback on
                my historical analysis papers has been incredibly helpful."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Educator Reviews */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Educator Reviews
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Prof. John Anderson */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      JA
                    </span>
                  </div>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Prof. John Anderson
                  </h3>
                  <p className="text-gray-600">Mathematics Department, UCLA</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "StudyBud has transformed my teaching methodology. The
                detailed analytics help me understand each student's learning
                patterns. I can now provide targeted interventions that actually
                work. My class average has improved by 18% this semester."
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-600 font-semibold text-sm">
                  Class Performance: +18% improvement
                </p>
              </div>
            </Card>

            {/* Dr. Lisa Chang */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">
                      LC
                    </span>
                  </div>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Dr. Lisa Chang
                  </h3>
                  <p className="text-gray-600">
                    Chemistry Teacher, Lincoln High
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "The automated grading feature is a lifesaver! I used to spend
                entire weekends grading tests. Now I can focus on creating
                better learning experiences. The AI-generated questions are
                perfectly aligned with my curriculum standards."
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600 font-semibold text-sm">
                  Time Saved: 15+ hours per week
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-blue-100">
              See the impact StudyBud has on student performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <p className="text-blue-100">Grade Improvement</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2.3x</div>
              <p className="text-blue-100">Faster Learning</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-blue-100">Student Satisfaction</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <p className="text-blue-100">Success Stories</p>
            </div>
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
                <span className="text-xl font-bold">StudyBud</span>
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
              © 2024 StudyBud. All rights reserved.
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

export default Reviews;
