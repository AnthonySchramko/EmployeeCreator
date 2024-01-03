import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { employeeUtils } from "../../services/employee-utils";
import { Employee } from "../../schema/employee";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const formSubmit = (data: Employee) => {
    employeeUtils.createEmployee(data);
  };
  return (
    <div>
      <div>
        <h2>Employee Details</h2>
        <button onClick={() => navigate(`/`)}>Back </button>
      </div>
      <Form formSubmit={formSubmit} />
    </div>
  );
};

export default CreateEmployee;
