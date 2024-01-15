import { Employee } from "../../schema/employee";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";
import { employeeUtils } from "../../services/employee-utils";
import { dateUtils } from "../../services/date-utils";

interface Props {
  employee: Employee;
  onDelete: (id: number) => void;
}
const Card = ({ employee, onDelete }: Props) => {
  const navigate = useNavigate();
  const handleDelete = (id: number) => {
    try {
      employeeUtils.deleteEmployeeById(id);
      onDelete(id);
    } catch (e) {
      console.error(e);
    }
  };
  const years = dateUtils.convertDateToLength(
    employee.contract.startDate,
    employee.contract.endDate
  );
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.card__name}>
          {employee.firstName} {employee.middleName} {employee.lastName}
        </p>
        <div>
          <p>
            {employee.contract.contractType == "true"
              ? "Permanent"
              : "Contract"}
            - {years}
          </p>
          <p>{employee.email}</p>
        </div>
      </div>
      <div className={styles.card__buttons}>
        <p className={styles.btn} onClick={() => navigate(`/${employee.id}`)}>
          Edit
        </p>
        <p>|</p>
        <p
          className={styles.btn}
          onClick={() => {
            handleDelete(employee.id);
          }}
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default Card;
