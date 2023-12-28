package io.anthony.employeeCreator.employee;

import java.util.Optional;

import io.anthony.employeeCreator.contract.ContractCreateDTO;
import io.anthony.employeeCreator.contract.ContractUpdateDTO;

public interface EmployeeService {

	Employee createEmployee(EmployeeCreateDTO employeeDTO, ContractCreateDTO contractDTO);
	
	Optional<Employee> getById(long id);
	
	Optional<Employee> updateById(long id, EmployeeUpdateDTO employeeDTO, ContractUpdateDTO contractDTO);
	
	boolean deleteById(long id);
}
