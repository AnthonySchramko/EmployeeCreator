import EmployeeContainer from "../../containers/EmployeeContainer/EmployeeContainer";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div>
        <h2>Employees' list</h2>
        <div>
          <div>
            <p>Please click on "Edit" to find more details of each employee</p>
            <button onClick={() => navigate(`/add`)} className={styles.btn}>
              Add employee
            </button>
            <EmployeeContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
