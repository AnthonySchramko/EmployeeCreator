import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string(),
  lastName: z.string().min(1, { message: "First name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  mobile: z.string().min(1, { message: "Mobile number is required" }),
  address: z.string().min(1, { message: "Home Address is required" }),
});
export const contractSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  ongoing: z.boolean(),
  fullTime: z.boolean(),
  hours: z.string(),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;
