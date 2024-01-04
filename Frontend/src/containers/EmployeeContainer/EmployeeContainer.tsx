import { useEffect, useState } from "react";
import { employeeUtils } from "../../services/employee-utils";
import Card from "../../components/Card/Card";
import { Employee } from "../../schema/employee";
import styles from "./EmployeeContainer.module.scss";

const EmployeeContainer = () => {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    employeeUtils
      .get()
      .then((data) => {
        setEmployeeList(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  }, []);
  const handleDelete = (id: number) => {
    try {
      setEmployeeList((prevEmployeeList) =>
        prevEmployeeList.filter((employee) => employee.id !== id)
      );
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={styles.container}>
      {loading && <p> Loading...</p>}
      {employeeList.map((employee: Employee) => {
        return (
          <Card key={employee.id} employee={employee} onDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default EmployeeContainer;
