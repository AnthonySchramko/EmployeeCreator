package io.anthony.employeeCreator.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exceptions.NotFoundException;
import exceptions.ValidationException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/")
public class EmployeeController {
	private final IEmployeeService employeeService;
    public EmployeeController(IEmployeeService employeeService) {
        this.employeeService = employeeService;
    }
	

	@GetMapping
	public ResponseEntity<List<Employee>> getAll(){
		List<Employee> allEmployees = this.employeeService.getAll();
		return new ResponseEntity<>(allEmployees,HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id){
		Optional<Employee> found = this.employeeService.getById(id);
		
		if(found.isPresent()) {
			return new ResponseEntity<Employee>(found.get(),HttpStatus.OK);
		}
		throw new NotFoundException(String.format("Employee with id: %d does not exist. Unable to find employee", id)); 
	}
	
	@PostMapping
	public ResponseEntity<?> createEmployee(@Valid @RequestBody CreateRequestDTO requestDTO){
		try {
			Employee newEmployee = this.employeeService.createEmployee(requestDTO.getEmployeeDTO(), requestDTO.getContractDTO());
			return new ResponseEntity<Employee>(newEmployee, HttpStatus.CREATED);
		}
		catch(ValidationException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
		
		
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteById(@PathVariable Long id){
		boolean deleted = this.employeeService.deleteById(id);
		if(deleted==true) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
			
		}
		throw new NotFoundException(String.format("Employee with id: %d does not exist. Unable to delete employee", id));
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<?> updateById(@PathVariable Long id, @Valid @RequestBody UpdateRequestDTO requestDTO){
		try {
		Optional<Employee> updated = this.employeeService.updateById(id, requestDTO.getEmployeeDTO(), requestDTO.getContractDTO());
		
			if(updated.isPresent()) {
				return new ResponseEntity<Employee>(updated.get(),HttpStatus.OK);
					
			}
		}
		catch(ValidationException e) {
			
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
		
		throw new NotFoundException(String.format("Employee with id: %d does not exist. Unable to update employee", id));
	}
	
}
