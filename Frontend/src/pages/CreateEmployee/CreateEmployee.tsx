import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h2>Employee Details</h2>
        <button onClick={() => navigate(`/`)}>Back </button>
      </div>
      <Form />
    </div>
  );
};

export default CreateEmployee;
