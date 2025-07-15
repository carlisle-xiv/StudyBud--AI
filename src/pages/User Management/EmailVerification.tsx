import { useState } from "react";
import {
  useLocation,
  useNavigate,
  Link,
  useSearchParams,
} from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { CheckCircle, Mail, RefreshCw, ArrowLeft, Clock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Controller, useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { IOTPFormSchema, OTPForm } from "@/pages/User Management/Forms/OTPForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { getAuthUserViaOTPVerification } from "@/Api/dataSource";
import { useAuthUserVerification } from "@/hooks/useAuthUserVerification";
import { VerifiedUserLoginResponse } from '@/_shared/generated'

const EmailVerification = () => {
  const [searchParams] = useSearchParams();

  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  // Get email from state passed from SignUp page, or use a default
  const email = searchParams.get("email") ?? "";

  const { mutateAsync: verifyOtpMutation, isLoading, isSuccess } = useMutation({
    mutationKey: ['OTP'],
    mutationFn: getAuthUserViaOTPVerification,

    onError(error: string) {
      toast.error(error);
    },
    onSuccess() {
      toast.success("Verification successful!");
    }
  });

  const { verifyUser } = useAuthUserVerification();

  const {
    formState: { errors, isSubmitting },
    control,
    ...form
  } = useForm<OTPForm>({
    resolver: zodResolver(IOTPFormSchema),
  });

  const handleResendOTP = async () => {


    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      toast.success("Verification OTP sent successfully!");
    }, 2000);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-md space-y-6">
          {/* Main Verification Card */}
          <Card className="p-8 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Check Your Email
              </h1>
              <p className="text-gray-600 mb-6">
                We've sent a verification email to{" "}
                <span className="font-medium text-gray-800">{email}</span>
              </p>

              <div className="space-y-4">
                <div className="w-full py-2 flex flex-row justify-center">
                  <Controller
                    name="otp"
                    control={control}
                    render={({ field }) => (
                      <InputOTP
                        maxLength={6}
                        {...field}
                        disabled={isSubmitting}
                        onChange={async (value) => {
                          field.onChange(value);
                          // Watch the last OTP input field (index 5)
                          const lastDigit = value?.[5] ?? "";
                          if (lastDigit !== "")
                            // You can do something with lastDigit here, e.g., log or trigger logic
                            // console.log("Last OTP digit:", lastDigit);
                            // Once use finishes typing the OTP, verify the OTP
                            await verifyOtpMutation({
                              email,
                              otp: value,
                            }
                            );
                          let verifiedResponse: VerifiedUserLoginResponse;
                          await verifyUser(verifiedResponse);
                        }}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    )}
                  />
                  <span className="text-red-600 text-sm font-medium">
                    {errors && errors.otp && errors.otp.message}
                  </span>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row gap-x-2 w-full">
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          onClick={handleResendOTP}
                          variant="outline"
                          className="w-fit h-12"
                          disabled={isResending}
                        >
                          {isResending ? (
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <>
                              <RefreshCw className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm text-gray-600 font-medium">
                          Resend OTP
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    {/* <Button
                      onClick={handleChangeEmail}
                      variant="outline"
                      className="w-full h-12 border-gray-300"
                    >
                      Use Different Email
                    </Button> */}

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 border-gray-300"
                      onClick={() => navigate("/auth/login")}
                    >
                      Back to Login
                    </Button>
                  </div>
                  {/* Back to Sign Up */}
                  <div className="text-center pt-2">
                    <Link
                      to="/signup"
                      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Go to sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Email Tips Card */}
          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-900 mb-2">
                  Haven't received the email?
                </h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Check your spam or junk folder</li>
                  <li>• Make sure {email} is correct</li>
                  <li>• Wait a few minutes for delivery</li>
                  <li>• Try resending the verification email</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Security Notice */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Verification links expire after 24 hours for security.
              <br />
              We'll never ask for your password via email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
