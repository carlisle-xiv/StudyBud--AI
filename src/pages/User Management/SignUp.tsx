import React, { useEffect, useState } from "react";
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
  Check,
  LoaderIcon,
} from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSchool, getSchools, registerUser, validateSchoolName } from "@/Api/dataSource";
import { useForm, Controller } from "react-hook-form";
import { SignupForm, ISignupFormSchema } from "./Forms/SignupForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { processErrorResponse } from "@/_shared/services/errorService";
import { toast } from "sonner";
import RoleCard from "@/components/RoleCard";
import { SignUpVariables } from "@/_shared/generated";

const SignUp = () => {
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

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
      // Redirect to OTP if Owner
      navigate(`/email-verification`,
        {
          state:
          {
            email: form.watch('email'),
            userType: SchoolWithRolesData?.data?.roles.find((role) =>
              role.id === Number(form.watch('roleID'))
            ) || undefined
          }
        });

      // Navigate to Awaiting approval
    },
  });



  const { formState: { errors, isSubmitting }, ...form } = useForm<SignupForm>({
    resolver: zodResolver(ISignupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      school: "",
      schoolName: "",
      agreeToTerms: false
    },
  });

  const schoolID = form.watch('school');

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ["validateSchoolName"],
    mutationFn: validateSchoolName,
    onError: () => {
      toast.error("Something went wrong...");
    },
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
  });

  const validateName = async () => {
    if (form.getValues("schoolName")) {
      await mutateAsync({
        data: { name: form.getValues("schoolName") },
      });
    }
  };

  const handleSchoolInput = () => {
    setIsAvailable(false);
    return form.setError('schoolName', { type: "custom", message: "" });
  }

  const handleSignUp = async () => {
    let request: SignUpVariables = {
      user: {
        firstName: form.watch('firstName'),
        middleName: " ",
        lastName: form.watch('lastName'),
        email: form.watch('email'),
        picture: "No Picture"
      }
    }
    if (schoolID === "Other") {
      request = {
        ...request,
        school: {
          name: form.watch('schoolName'),
          address: "schoolAddress"
        }
      }
    } else {
      request = {
        ...request,
        schoolId: Number(schoolID),
        roles: [Number(form.watch('roleID'))]
      }
    }
    await signup.mutateAsync(request);
  }

  const { data: SchoolsData, isFetching } = useQuery({
    queryKey: ["schoolsData"],
    queryFn: getSchools,
  });

  const { data: SchoolWithRolesData, isFetching: isFetchingSchoolRoles } = useQuery({
    queryKey: ["rolesData", schoolID],
    queryFn: async () => getSchool(schoolID),
    enabled: schoolID !== "Other" && schoolID !== ""
  })

  useEffect(() => {
    handleSchoolInput();
  }, [form.watch('schoolName')])

  useEffect(() => {
    if (schoolID !== "Other") {
      form.setValue('schoolName', "")
    }
    form.setValue('roleID', "")
  }, [schoolID])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg space-y-8">
          {/* Logo and Welcome Text */}
          <div className="text-center space-y-4">
            {/* <div className="flex justify-center items-center space-x-2">
              <GraduationCap className="h-11 w-11 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                StudyBud
              </span>
            </div> */}
            <h1 className="text-3xl font-bold text-gray-900">
              Join StudyBud
            </h1>
            <p className="text-gray-600">
              Create your account and start studying smarter today
            </p>
          </div>

          {/* Sign Up Form */}
          <Card className="p-8 shadow-lg">
            <form
              onSubmit={form.handleSubmit(handleSignUp)}
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
                  {errors && errors.firstName && <span>{errors.firstName.message}</span>}
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
                  {errors && errors.lastName && <span>{errors.lastName.message}</span>}
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
                  {errors && errors.email && <span>{errors.email.message}</span>}
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
                  <Controller name="school" control={form.control} render={({ field }) =>
                    <Select
                      {...form.register('school')}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="pl-10 h-12">
                        {isFetching ? <LoaderPinwheel className="w-6 h-6 animate-spin stroke-blue-600" /> : <SelectValue placeholder="Select your school or institution" />}                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Other">Not listed</SelectItem>
                        {SchoolsData?.data.map((school) => (
                          <SelectItem key={school.id} value={String(school.id)}>
                            {school.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  } />
                  {errors && errors.school && <span>{errors.school.message}</span>}
                </div>
              </div>

              {schoolID === "Other" && <div className="space-y-2">
                <span className="inline-block w-full text-sm font-medium text-gray-700">If School is Not listed,</span>
                <label
                  htmlFor="schoolName"
                  className="text-sm font-medium text-gray-700"
                >
                </label>
                <div className="flex flex-row gap-3">
                  <button
                    type="button"
                    onClick={validateName}
                    className={`rounded-sm bg-blue-700 hover:bg-700/50 px-2 text-white min-w-fit`}
                  >
                    {(isLoading ? (
                      <LoaderPinwheel className="animate-spin" />
                    ) : (isAvailable ?
                      <Check className="stroke-white" />
                      : `Check Availability`))}
                  </button>
                  <Input
                    type="text"
                    id="schoolName"
                    placeholder="Enter School Name"
                    {...form.register("schoolName")}
                  />

                </div>
                {errors && errors.schoolName && <span className={`${isAvailable ? "text-green-600" : "text-red-600"} text-sm`}>{errors.schoolName.message}</span>}
              </div>}

              {/* User Type Selection */}
              {SchoolWithRolesData && SchoolWithRolesData.data && schoolID !== "Other" &&
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 text-start mb-4">
                    I am a:
                  </h3>
                  {isFetchingSchoolRoles ?
                    <div className="w-full h-9 flex flex-col items-center">
                      <LoaderPinwheel className="animate-spin stroke-blue-600" />
                    </div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {SchoolWithRolesData.data.roles.map((role) => (
                        <RoleCard
                          key={role.id}
                          role={role}
                          onClick={() => { form.setValue('roleID', String(role.id)) }}
                          isSelected={String(role.id) === form.watch('roleID')}
                        />
                      ))}
                    </div>}
                </div>}

              {/* Terms & Privacy Policy */}
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <Checkbox id="terms" {...form.register("agreeToTerms")} defaultChecked={field.value} onCheckedChange={field.onChange} />
                  )}
                />
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
                  isSubmitting || form.watch('agreeToTerms') === false
                }
              >
                Create Account {isSubmitting && <LoaderIcon className="animate-spin" />}
              </Button>
              {/* Sign In Link */}
              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link
                  to="/auth/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">StudyBud</span>
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
              © 2024 StudyBud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default SignUp;
