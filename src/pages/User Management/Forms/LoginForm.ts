import { z } from "zod";

export const ILoginFormSchema = z.object({
  email: z.string({ required_error: "email is required" }).email(),
  rememberMe: z.boolean().optional(),
});

export type LoginForm = z.infer<typeof ILoginFormSchema>;
