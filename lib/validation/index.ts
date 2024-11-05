import * as z from 'zod';

export const BetFormValidation = z.object({
  fixtureId: z.number().min(1, "Fixture ID is required"), // Ensures fixtureId is not empty
  stake: z.number().min(1000, "Stake must be at least 1000").max(1000000, "Stake cannot exceed 1000000"),
  format: z.enum(["Half Time", "Full Time"], {
    errorMap: () => ({ message: "Please select either 'Half Time' or 'Full Time'" }),
  }).nullable(),  // Format can be null if not selected
});
