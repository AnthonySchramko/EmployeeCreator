import { Employee } from "../schema/employee";
import instance from "./axios";

export class employeeUtils {
  public static async get(): Promise<Employee[]> {
    const data = await instance.get("/");
    return data.data;
  }

  public static async createEmployee(data: any): Promise<Employee> {
    const response = await instance.post(`/`, data);
    return response.data;
  }

  public static async deleteEmployeeById(id: number): Promise<Employee> {
    const response = await instance.delete(`/{id}`);
    return response.data;
  }

  public static async updateEmployeeById(
    id: number,
    data: Employee
  ): Promise<Employee> {
    const response = await instance.patch(`/${id}`, data);
    return response.data;
  }
}
