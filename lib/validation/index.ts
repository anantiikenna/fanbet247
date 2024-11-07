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
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});


export const signupSchema = z
  .object({
    username: z.string().min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });




//CustomInput.tsx
//Uncomment the same to replace
//export const authFormSchema = (type?: string) => z.object({
  export const authFormSchema = (type: string) => z.object({
 // sign up
  firstName: type === 'sign-in' ? z.string().min(3).optional() : z.string().min(3),
  lastName: type === 'sign-in' ? z.string().min(3).optional() : z.string().min(3),
  address1: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(50),
  city: type === 'sign-in' ? z.string().min(3).optional() : z.string().min(3).max(50),
  state: type === 'sign-in' ? z.string().min(2).max(2).optional() : z.string().min(2).max(2),
  postalCode: type === 'sign-in' ? z.string().min(5).max(5).optional() : z.string().min(5,{
    message: "SSN must be at 5 characters long",
  }).max(5),
  // Date of birth validation (YYYY-MM-DD format)
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().refine((value) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value);
  }, {
    message: "Date of birth must be in the format YYYY-MM-DD",
  }),
  ssn: type === 'sign-in' ? z.string().min(4).max(4).optional() : z.string().min(4,{
    message: "SSN must be at 4 characters long",
  }).max(4),
  // both sign up and sign in
  email: z.string().email({
    message: "Invalid email, please enter a valid email",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
})
