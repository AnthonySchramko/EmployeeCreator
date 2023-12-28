package io.anthony.employeeCreator.employee;

import io.anthony.employeeCreator.contract.ContractUpdateDTO;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.Setter;

public class UpdateRequestDTO {

	@Valid
	@Getter
	@Setter
	private EmployeeUpdateDTO employeeDTO;
	
	@Valid
	@Getter
	@Setter
	private ContractUpdateDTO contractDTO;

}
