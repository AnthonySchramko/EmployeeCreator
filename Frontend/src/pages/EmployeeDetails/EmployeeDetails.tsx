import { useEffect, useState } from "react";
import Form, { FormData } from "../../components/Form/Form";
import { useParams } from "react-router-dom";
import {
  convertFormDataToEmployee,
  employeeUtils,
} from "../../services/employee-utils";
import { Employee } from "../../schema/employee";

const EmployeeDetails = () => {
  const [currentEmployee, setCurrentEmployee] = useState<Employee>();
  const { id } = useParams();
  const idAsNum = id ? parseInt(id) : undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeData = await employeeUtils.getById(idAsNum);
        setCurrentEmployee(employeeData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [idAsNum]);
  const handleUpdateEmployee = (data: FormData) => {
    const employeeData = convertFormDataToEmployee(data, idAsNum);
    try {
      employeeUtils.updateEmployeeById(idAsNum, employeeData);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      {currentEmployee !== undefined ? (
        <Form
          defaultValues={{
            employeeDTO: {
              firstName: currentEmployee.firstName,
              middleName: currentEmployee.middleName || undefined,
              lastName: currentEmployee.lastName,
              email: currentEmployee.email,
              mobile: currentEmployee.mobile,
              address: currentEmployee.address,
            },
            contractDTO: {
              contractType: currentEmployee.contract.contractType,
              startDate: currentEmployee.contract.startDate,
              endDate: currentEmployee.contract.endDate,
              ongoing: currentEmployee.contract.ongoing,
              fullTime: currentEmployee.contract.fullTime,
              hours: currentEmployee.contract.hours,
            },
          }}
          onSubmit={handleUpdateEmployee}
        />
      ) : (
        <p>Loading employee data...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
