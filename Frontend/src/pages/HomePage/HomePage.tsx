import EmployeeContainer from "../../containers/EmployeeContainer/EmployeeContainer";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import Header from "../../components/Header/Header";

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div>
        <Header text={"Employees List"} />
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <p>Please click on "Edit" to find more details of each employee</p>
            <button onClick={() => navigate(`/add`)} className={styles.btn}>
              Add employee
            </button>
          </div>

          <EmployeeContainer />
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
