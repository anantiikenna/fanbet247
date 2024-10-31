import * as z from 'zod';

export const BetFormValidation = z.object({
  stake: z.number().min(1000, { message: 'Stake must be at least 1000' }),
  betOption: z.string().nonempty({ message: 'Please select a bet option' }),
  offering: z.string().nonempty({ message: 'Please select an offering' }),
});
