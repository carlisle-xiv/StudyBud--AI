import { z } from "zod";

export const SignupFormSchema = z.object({
  firstName: z
    .string({ message: "First Name is required." })
    .min(4, { message: "First Name must be at least 4 Characters" }),
  lastName: z
    .string({ message: "Last Name is required." })
    .min(4, { message: "Last Name must be at least 4 Characters" }),
  email: z.string({ message: "Email is required." }),
  school: z.string({ message: "School Name is required." }),
  schoolName: z.string({ message: "Name is not available" }),
  agreeToTerms: z.boolean(),
});

export type SignupForm = z.infer<typeof SignupFormSchema>;
