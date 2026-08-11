import { z } from "zod";

export const SERVICE_AREAS = [
  "Urmston",
  "Stretford",
  "Sale",
  "Altrincham",
  "Chorlton",
  "Trafford",
  "Salford",
  "Eccles",
  "Wigan",
  "Leigh",
  "Worsley",
  "Swinton",
  "Irlam",
  "Partington",
  "Flixton",
  "Other / Not listed",
] as const;

export const SERVICES = [
  "Mobile Valeting",
  "Car Detailing",
  "Paint Correction",
  "Machine Polishing / Paint Enhancement",
  "Ceramic Coating",
  "Interior Detailing",
  "Exterior Detailing",
  "Deep Cleaning",
  "Engine Bay Cleaning",
  "Not sure — need advice",
] as const;

export const PREFERRED_TIMES = [
  "Morning (8am–12pm)",
  "Afternoon (12pm–5pm)",
  "Evening (5pm–8pm)",
  "Flexible",
] as const;

export const bookingSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (v) => {
        const digits = v.replace(/[\s\-().]/g, "").replace(/^\+44/, "0");
        return /^07\d{9}$|^0\d{10}$/.test(digits);
      },
      { message: "Enter a valid UK phone number (e.g. 07482 225323)" }
    ),
  email: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  area: z.string().min(1, "Please select your area"),
  service: z.string().min(1, "Please select a service"),
  vehicle: z.string().optional(),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  notes: z.string().max(1000, "Notes must be under 1000 characters").optional(),
  // Honeypot — must be empty
  _hp: z.string().max(0).optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
