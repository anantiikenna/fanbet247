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
  profileImage: z.object({
      name: z.string(),
      url: z.string().optional(),
      type: z.string().optional()
    })
    .optional()
    .or(z.string().optional()), // Supports an uploaded file representation or an empty value
});



export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "New password must be at least 8 characters")
    .regex(/[A-Z]/, "New password must contain an uppercase letter")
    .regex(/[0-9]/, "New password must contain a number"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


export const withdrawFormSchema = z.object({
  repeatWithDifferentAmount: z.boolean(),
  amount: z.string().min(1, "Amount is required").refine(val => parseFloat(val) > 0, {
    message: "Amount must be greater than 0",
  }),
  bank: z.string().min(1, "Bank is required"),
  accountNumber: z.string().min(1, "Account number is required").length(10, "Account number must be 10 digits"),
  recipientName: z.string().min(1, "Recipient name is required"),
  password: z.string().min(1, "Password is required"),
});

export const verificationFormSchema = z.object({
  documentType: z.string().min(1, "Please select a document type"),
  uploadedDocument: z.object({
      name: z.string(),
      url: z.string().optional(),
      type: z.string().optional(),
      size: z.number().optional(),
      lastModified: z.number().optional(),
    })
    .nullable()
    .refine((doc) => doc !== null, {
      message: "A document must be uploaded",
    }),
  password: z.string().min(1, "Password is required"),
});


// Define the TransactionType as an enum with 'credit' and 'debit' values
export const transactionTypeEnum = z.enum(['credit', 'debit']);

export const transactionFormSchema = z.object({
  transactionType: transactionTypeEnum, // Validates the transaction type to be either 'credit' or 'debit'
  dateRange: z.object({
    from: z.date(),  // Ensure the 'from' date is a valid date
    to: z.date().optional(),  // 'to' date is optional but must be a valid date if provided
  }),
});


export const depositFormSchema = z.object({
  amount: z.number().min(1,{ message: "Amount is required"}),
  bank: z.string().min(1,{ message: "Bank selection is required"}),
  accountNumber: z.string().min(1,{ message: "Account number is required"}),
  notes: z.string().optional(),
});



export const betHistoryFormSchema = z.object({
  betType: z.string().min(1, { message: "Bet type is required" }),
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
  }),
});
