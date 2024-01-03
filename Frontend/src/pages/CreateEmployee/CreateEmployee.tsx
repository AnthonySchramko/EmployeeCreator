import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { employeeUtils } from "../../services/employee-utils";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const handleCreateEmployee = (formData: FormData) => {
    try {
      employeeUtils.createEmployee(formData);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div>
        <h2>Employee Details</h2>
        <button onClick={() => navigate(`/`)}>Back </button>
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
