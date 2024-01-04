import Form, { FormData } from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { employeeUtils } from "../../services/employee-utils";
import Header from "../../components/Header/Header";
import styles from "./CreateEmployee.module.scss";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const handleCreateEmployee = (data: FormData) => {
    try {
      employeeUtils.createEmployee(data);
      navigate(`/`);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(`/`);
    }
  };
  return (
    <div>
      <div>
        <Header text={"Employee Details"} />
        <p onClick={() => navigate(`/`)} className={styles.btn}>
          &lt; Back
        </p>
      </div>
      <div>
        <Form
          defaultValues={{
            employeeDTO: {
              firstName: "",
              middleName: "",
              lastName: "",
              email: "",
              mobile: "",
              address: "",
            },
            contractDTO: {
              contractType: "",
              startDate: "",
              endDate: "",
              ongoing: false,
              fullTime: "",
              hours: "",
            },
          }}
          onSubmit={handleCreateEmployee}
        />
      </div>
    </div>
  );
};

export default CreateEmployee;
