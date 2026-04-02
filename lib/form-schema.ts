import { z } from "zod";

const yesNo = z.enum(["yes", "no"], {
  message: "Please choose yes or no",
});

export const reservationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Enter a phone number we can reach you on")
    .max(40),
  moveDate: z.string().min(1, "Move date is required"),
  preferredDeliveryDate: z.string().min(1, "Preferred delivery date is required"),
  preferredPickupDate: z.string().min(1, "Preferred pickup date is required"),
  currentAddress: z.string().min(1, "Current address is required").max(500),
  newAddress: z.string().min(1, "New address is required").max(500),
  binCount: z.coerce.number().int().min(1, "At least 1 bin").max(500),
  dollyNeeded: yesNo,
  stairsInvolved: yesNo,
  realtorReferral: yesNo,
  notes: z.string().max(2000),
});

export type ReservationFormValues = z.infer<typeof reservationFormSchema>;
