import { useEffect, useState } from "react";
import Form, { FormData } from "../../components/Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { employeeUtils } from "../../services/employee-utils";
import { Employee } from "../../schema/employee";
import Header from "../../components/Header/Header";
import styles from "./EmployeeDetails.module.scss";
const EmployeeDetails = () => {
  const [currentEmployee, setCurrentEmployee] = useState<Employee>();
  const { id } = useParams();
  const idAsNum = id ? parseInt(id) : undefined;
  const navigate = useNavigate();
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
    try {
      console.log(data);
      employeeUtils.updateEmployeeById(idAsNum, data);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(`/`);
    }
  };
  console.log(currentEmployee);
  return (
    <div>
      <button onClick={() => navigate(`/`)} className={styles.btn}>
        &lt; Back
      </button>
      <Header text={"Employee Details"} />
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
