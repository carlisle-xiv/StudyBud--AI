import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GraduationCap,
  Mail,
  User,
  Users,
  Building,
  Shield,
  LoaderPinwheel,
  School,
  Key,
} from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSchools, validateSchoolName } from "@/Api/dataSource";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { SignupForm, SignupFormSchema } from "./Forms/SignupForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { processErrorResponse } from "@/_shared/services/errorService";
import { apiPost } from "@/_shared/services/apiService";
import { SignUpResponse, SignUpVariables } from "@/_shared/generated";

const SignUp = () => {
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  const [selectedUserType, setSelectedUserType] = useState<
    "student" | "teacher" | "admin" | null
  >(null);

  const signup = useMutation({
    mutationFn: registerUser,
    onError: (err) => {
      return processErrorResponse(err, {
        fixedErrorMessage:
          "Sorry your account could not be created at this time. Please try again. If the issue persist, please contact us",
      });
    },
    onSuccess: (data, variables) => {
      console.log(data.data?.schoolId);
      // TODO: redirect to OTP screen
      navigate(`/auth/verify/otp?email=${variables.user.email}`);
    },
  });

  const { data: SchoolsData, refetch } = useQuery({
    queryKey: ["schoolsData"],
    queryFn: getSchools,
  });

  const form = useForm<SignupForm>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      school: "",
      schoolName: "",
      agreeToTerms: false,
    },
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ["validateSchoolName"],
    mutationFn: validateSchoolName,
    onSuccess: (response) => {
      setIsAvailable(response.data.isValid);
      response.data.isValid === true
        ? form.setError("schoolName", {
            type: "custom",
            message: "Name is available",
          })
        : form.setError("schoolName", {
            type: "custom",
            message: "Name is not available",
          });
      return;
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    },
  });

  const validateName = async () => {
    if (form.getValues("schoolName")) {
      await mutateAsync({
        data: { name: form.getValues("schoolName") },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent, data: SignupForm) => {
    e.preventDefault();
    console.log("Sign up submitted:", data);
    // In a real app, you'd create the account here
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg space-y-8">
          {/* Logo and Welcome Text */}
          <div className="text-center space-y-4">
            {/* <div className="flex justify-center items-center space-x-2">
              <GraduationCap className="h-11 w-11 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                StudyBud AI
              </span>
            </div> */}
            <h1 className="text-3xl font-bold text-gray-900">
              Join StudyBud AI
            </h1>
            <p className="text-gray-600">
              Create your account and start studying smarter today
            </p>
          </div>

          {/* Sign Up Form */}
          <Card className="p-8 shadow-lg">
            <form
              onSubmit={() => {
                handleSubmit;
              }}
              className="space-y-6"
            >
              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    className="h-12"
                    {...form.register("firstName")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className="h-12"
                    {...form.register("lastName")}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 h-12"
                    {...form.register("email")}
                    required
                  />
                </div>
              </div>

              {/* School/Institution Field */}
              <div className="space-y-2">
                <label
                  htmlFor="school"
                  className="text-sm font-medium text-gray-700"
                >
                  School/Institution
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                  <Select {...form.register("school")}>
                    <SelectTrigger className="pl-10 h-12">
                      <SelectValue placeholder="Select your school or institution" />
                    </SelectTrigger>
                    <SelectContent>
                      {SchoolsData?.data.map((school) => (
                        <SelectItem key={school.id} value={school.name}>
                          {school.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="schoolName"
                  className="text-sm font-medium text-gray-700"
                >
                  School Name
                </label>
                <div className="flex flex-row gap-3">
                  <button
                    type="button"
                    onClick={validateName}
                    className={`rounded-sm bg-blue-700 hover:bg-700/50 px-2 text-white min-w-fit`}
                  >
                    {isLoading ? (
                      <LoaderPinwheel className="animate-spin" />
                    ) : (
                      `Check Availability`
                    )}
                  </button>
                  <Input
                    type="text"
                    id="schoolName"
                    placeholder="Enter School Name"
                    {...form.register("schoolName")}
                  />
                </div>
                <span
                  className={`${isAvailable ? "text-green-600" : "text-red-600"} text-sm`}
                >
                  {form.formState.errors.schoolName?.message}
                </span>
              </div>

              {/* User Type Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                  I am a:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => setSelectedUserType("student")}
                    className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                      selectedUserType === "student"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <User className="h-6 w-6 mx-auto mb-3 text-blue-600" />
                    <div className="text-sm font-medium text-gray-700">
                      Student
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedUserType("teacher")}
                    className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                      selectedUserType === "teacher"
                        ? "border-cyan-600 bg-cyan-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Users className="h-6 w-6 mx-auto mb-3 text-cyan-600" />
                    <div className="text-sm font-medium text-gray-700">
                      Teacher
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedUserType("admin")}
                    className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                      selectedUserType === "admin"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Shield className="h-6 w-6 mx-auto mb-3 text-purple-600" />
                    <div className="text-sm font-medium text-gray-700">
                      Admin
                    </div>
                  </button>
                </div>
              </div>

              {/* Terms & Privacy Policy */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" {...form.register("agreeToTerms")} />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Create Account Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
              >
                Create Account
              </Button>

              {/* Divider */}
              {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div> */}

              {/* Social Login Buttons */}
              {/* <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-12">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="#00BCF2" d="M0 0h11.377v11.372H0V0z" />
                    <path fill="#00BCF2" d="M11.377 0H24v11.372H11.377V0z" />
                    <path fill="#00BCF2" d="M0 11.372h11.377V24H0V11.372z" />
                    <path
                      fill="#FFC72C"
                      d="M11.377 11.372H24V24H11.377V11.372z"
                    />
                  </svg>
                  Microsoft
                </Button>
              </div> */}

              {/* Sign In Link */}
              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </Card>

          {/* Start Your Journey Section */}
          {/* <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
              Start your journey with:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Brain className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <div className="text-sm font-medium text-gray-700">
                  AI Analysis
                </div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-cyan-600" />
                <div className="text-sm font-medium text-gray-700">
                  Progress Tracking
                </div>
              </div>
              <div className="text-center">
                <Lightbulb className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <div className="text-sm font-medium text-gray-700">
                  Study Tips
                </div>
              </div>
              <div className="text-center">
                <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                <div className="text-sm font-medium text-gray-700">
                  Achievement
                </div>
              </div>
            </div>
          </Card> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">StudyBud AI</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-gray-300">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2024 StudyBud AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function registerUser(variables: SignUpVariables) {
  return apiPost<SignUpResponse, { data: SignUpVariables }>({
    path: "/schools",
    variables: { data: variables },
  });
}

export default SignUp;
