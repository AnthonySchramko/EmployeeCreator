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

  return (
    <div className={styles.container}>
      {loading && <p> Loading...</p>}
      {!loading &&
        employeeList &&
        employeeList.map((employee: Employee) => {
          return <Card key={employee.id} employee={employee} />;
        })}
    </div>
  );
};

export default EmployeeContainer;
