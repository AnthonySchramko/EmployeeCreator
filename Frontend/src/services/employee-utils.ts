import { Employee } from "../schema/employee";
import instance from "./axios";
import { FormData } from "../components/Form/Form";
export class employeeUtils {
  public static async get(): Promise<Employee[]> {
    const data = await instance.get("/");
    return data.data;
  }
  public static async getById(id: number | undefined): Promise<Employee> {
    const data = await instance.get(`/${id}`);
    return data.data;
  }

  public static async createEmployee(data: any): Promise<Employee> {
    const response = await instance.post(`/`, data);
    return response.data;
  }

  public static async deleteEmployeeById(id: number): Promise<Employee> {
    const response = await instance.delete(`/${id}`);
    return response.data;
  }

  public static async updateEmployeeById(
    id: number | undefined,
    data: Employee
  ): Promise<Employee> {
    const response = await instance.patch(`/${id}`, data);
    return response.data;
  }
}
export const convertFormDataToEmployee = (
  formData: FormData,
  formId: number | undefined
): Employee => {
  const employeeData: Employee = {
    id: formId || 0,
    middleName: formData.employeeDTO.middleName || "",
    ...formData.employeeDTO,
    contract: {
      id: formId || 0,
      ...formData.contractDTO,
    },
  };

  return employeeData;
};
