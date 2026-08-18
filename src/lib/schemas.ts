import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid phone number in Pakistani format."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  interest: z.string(),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

export type EnquirySchema = z.infer<typeof enquirySchema>;
