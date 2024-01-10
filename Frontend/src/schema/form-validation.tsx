import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((value) => /\S+@\S+\.\S+/.test(value), {
      message: "Invalid email address",
    }),
  mobile: z
    .string()
    .min(1, { message: "Mobile number is required" })
    .refine((value) => /\d{10}/.test(value), {
      message: "Invalid mobile number (must be 10 digits)",
    }),
  address: z.string().min(1, { message: "Home Address is required" }),
});
export const contractSchema = z
  .object({
    contractType: z
      .string()
      .min(1, { message: "Contract type must be true or false" }),
    startDate: z.string().min(1, { message: "Start date is required" }),
    endDate: z.string().min(1, { message: "End date is required" }),
    ongoing: z.boolean(),
    fullTime: z
      .string()
      .min(1, { message: "Must state if full-time or part-time" }),
    hours: z.number().min(1, { message: "Hours worked is required" }),
  })
  .refine(
    (data) =>
      new Date(data.startDate).getTime() < new Date(data.endDate).getTime(),
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

export type EmployeeFormData = z.infer<typeof employeeSchema>;
