import { Employee } from "../../schema/employee";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";
import { employeeUtils } from "../../services/employee-utils";

interface Props {
  employee: Employee;
}
const Card = ({ employee }: Props) => {
  const handleDelete = employee.id;
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.card__name}>
        {employee.firstName} {employee.middleName} {employee.lastName}
        <div>
          <p>{employee.contract.contractType} - convert date to length here </p>
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
            // handleDelete(employee.id);
          }}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default Card;
