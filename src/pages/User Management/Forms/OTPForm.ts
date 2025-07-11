import { z } from "zod";

export const IOTPFormSchema = z.object({
  otp: z.string().min(6, { message: "OTP must be 5 characters." }),
});

export type OTPForm = z.infer<typeof IOTPFormSchema>;
