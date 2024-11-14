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

const MINIMUM_AGE = 18;

export const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  surname: z.string().min(2, { message: "Surname is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  dateOfBirth: z.string().refine((value) => {
    const today = new Date();
    const birthDate = new Date(value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    
    // Check if user is exactly or just turned 18
    return (
      age > MINIMUM_AGE || 
      (age === MINIMUM_AGE && monthDifference >= 0 && dayDifference >= 0)
    );
  }, {
    message: `You must be at least ${MINIMUM_AGE} years old.`,
  }),
  gender: z.enum(["male", "female", "other"], { message: "Gender is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  profileImage: z
    .instanceof(File)
    .optional()
    .or(z.string().optional()), // Supports file upload or an empty value
  favoriteTeamImage: z
    .instanceof(File)
    .optional()
    .or(z.string().optional()), // Supports file upload or an empty value
});


