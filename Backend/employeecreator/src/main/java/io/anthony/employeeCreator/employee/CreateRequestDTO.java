package io.anthony.employeeCreator.employee;

import io.anthony.employeeCreator.contract.ContractCreateDTO;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.Setter;

public class CreateRequestDTO {
	@Valid
	@Getter
	@Setter
	private EmployeeCreateDTO employeeDTO;
	
	@Valid
	@Getter
	@Setter
	private ContractCreateDTO contractDTO;
}
