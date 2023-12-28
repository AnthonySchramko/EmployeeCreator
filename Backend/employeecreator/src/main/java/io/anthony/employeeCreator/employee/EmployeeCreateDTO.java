package io.anthony.employeeCreator.employee;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeCreateDTO {
	
	@NotBlank(message = "First Name cannot be blank")
	private String firstName;
	
	private String middleName;
	
	@NotBlank(message = "Last name cannot be blank")
	private String lastName;
	
	@NotBlank(message = "Email cannot be blank")
	private String email;
	
	@NotBlank(message = "Phone number cannot be blank")
	private String mobile;
	
	@NotBlank(message = "Address cannot be blank")
	private String address;
}
