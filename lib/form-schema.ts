import { z } from "zod";

const yesNo = z.enum(["yes", "no"], {
  message: "Please choose yes or no",
});

const rentalPeriod = z.enum(["2-week", "4-week"], {
  message: "Please choose a rental period",
});

const packageId = z.enum(
  ["studio", "1-bed", "2-bed", "3-bed", "4-bed", "5-bed"],
  { message: "Please choose a package" },
);

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
  rentalPeriod,
  packageId,
  dollyNeeded: yesNo,
  realtorName: z.string().max(200),
  notes: z.string().max(2000),
});

export type ReservationFormValues = z.infer<typeof reservationFormSchema>;
