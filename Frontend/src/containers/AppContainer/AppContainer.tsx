import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import EmployeeDetails from "../../pages/EmployeeDetails/EmployeeDetails";
import CreateEmployee from "../../pages/CreateEmployee/CreateEmployee";

const AppContainer = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<EmployeeDetails />} />
            <Route path="/add" element={<CreateEmployee />} />
            Routh
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default AppContainer;
