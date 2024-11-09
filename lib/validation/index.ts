import * as z from 'zod';

export const BetFormSchema = z.object({
  fixtureId: z.number().min(1, "Fixture ID is required"), // Ensures fixtureId is not empty
  stake: z.number().min(1000, "Stake must be at least 1000").max(1000000, "Stake cannot exceed 1000000"),
  format: z.enum(["Half Time", "Full Time"], {
    errorMap: () => ({ message: "Please select either 'Half Time' or 'Full Time'" }),
  }).nullable(),  // Format can be null if not selected
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const signupSchema = z.object({
  username: z.string().min(4, { message: "Username must be at least 4 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const passwordResetSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});